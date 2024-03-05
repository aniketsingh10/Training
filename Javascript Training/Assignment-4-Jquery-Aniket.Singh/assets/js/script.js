$(document).ready(function () {
  var index = 2;

  $("#add_more").click(function () {
    var newRow = $("<tr>");
    var columns = "";

    // Product Name
    columns +=
      "<td><input type='text' class='form-control' id='product_name_" +
      index +
      "' placeholder='Product name' maxlength='20'/><span id='err_product_name_" +
      index +
      "' class='error'></span></td>";

    // Product Quantity
    columns +=
      "<td><input type='text' class='form-control' id='product_quantity_" +
      index +
      "' maxlength='8' placeholder='Number of items'/><span id='err_product_quantity_" +
      index +
      "' class='error'></span></td>";

    // Product Price
    columns +=
      "<td><input type='text' class='form-control' id='product_price_" +
      index +
      "' maxlength='8' placeholder='Price per item'/><span id='err_product_price_" +
      index +
      "' class='error'></span></td>";

    // Calculate Button
    columns +=
      "<td><input type='button' class='btn btn-primary calculate_price' value='Calculate' data-index='" +
      index +
      "'/></td>";

    // Total Price
    columns +=
      "<td><span id='total_price_" +
      index +
      "'></span><span id='err_total_price_" +
      index +
      "' class='error'></span></td>";

    newRow.append(columns);
    $("table tbody").append(newRow);

    // keyup event handlers
    $("#product_quantity_" + index).on("keyup", function () {
      this.value = this.value.replace(/[^0-9]/g, "");
    });

    $("#product_price_" + index).on("keyup", function () {
      this.value = this.value.replace(/[^0-9.]/g, "");
    });

    index++;
  });

  $("table").on("click", ".calculate_price", function () {
    var currentIndex = $(this).data("index");
    calculateProductPrice(currentIndex);
  });

  $(".product_name").on("blur", function () {
    var index = getIndexFromId(this.id);
    validateProductName(this.value, index);
  });

  $(".product_quantity").on("blur", function () {
    var index = getIndexFromId(this.id);
    validateProductQuantity(this.value, index);
  });

  $(".product_price").on("blur", function () {
    var index = getIndexFromId(this.id);
    validateProductPrice(this.value, index);
  });

  $(".calculate_price").on("click", function () {
    var index = getIndexFromId(this.id);
    calculateProductPrice(index);
  });

  $("#total").click(function () {
    var productPrices = $('[id^="total_price_"]');
    var totalPrice = 0;

    for (var index = 0; index < productPrices.length; index++) {
      if ($(productPrices[index]).text()) {
        totalPrice += parseFloat($(productPrices[index]).text());
      }
    }

    $("#final_bill").html(
      "Total bill for all products is :- " + totalPrice.toFixed(2) + " Rs"
    );
  });

  function getIndexFromId(elementId) {
    return parseInt(elementId.split("_")[2]);
  }

  function validateProductName(productName, index) {
    var errId = "#err_product_name_" + index;
    if (productName === "") {
      $(errId).show().html("Please enter product name");
    } else if (productName.length < 3) {
      $(errId).show().html("Product name must be at least 3 characters");
    } else if (productName.length > 20) {
      $(errId).show().html("Product name must be less than 20 characters");
    } else {
      $(errId).hide().html("");
    }
  }

  function validateProductQuantity(quantity, index) {
    var errId = "#err_product_quantity_" + index;
    if (quantity === "") {
      $(errId).show().html("Please enter product quantity");
    } else if (quantity <= 0) {
      $(errId).show().html("Product quantity should be greater than 0");
    } else {
      $(errId).hide().html("");
    }
  }

  function validateProductPrice(price, index) {
    var errId = "#err_product_price_" + index;
    if (price === "") {
      $(errId).show().html("Please enter price per item");
    } else if (isNaN(price) || parseFloat(price) <= 0) {
      $(errId).show().html("Product price should be greater than 0");
    } else {
      $(errId).hide().html("");
    }
  }

  function calculateProductPrice(index) {
    var productName = $("#product_name_" + index).val();
    var productQuantity = $("#product_quantity_" + index).val();
    var productPrice = $("#product_price_" + index).val();

    validateProductName(productName, index);
    validateProductQuantity(productQuantity, index);
    validateProductPrice(productPrice, index);

    var totalPrice = (productPrice * productQuantity).toFixed(2);

    if (!isNaN(totalPrice)) {
      $("#total_price_" + index)
        .show()
        .html(totalPrice + " Rs");
      $("#err_total_price_" + index).hide();
    } else {
      $("#err_total_price_" + index)
        .show()
        .html("Please enter valid values");
      $("#total_price_" + index).hide();
    }
  }
});
