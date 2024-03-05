$(document).ready(function () {
  // validations
  $.validator.addMethod(
    "username",
    function (value, element) {
      return /^[a-zA-Z0-9]+$/.test(value);
    },
    "Username can contain alphabets and numbers only. No spaces or special characters allowed."
  );

  $.validator.addMethod(
    "city",
    function (value, element) {
      return /^[a-zA-Z\s]+$/.test(value);
    },
    "City of employment can contain alphabets and spaces only."
  );

  // Reset Function
  $("#btn_reset").click(function () {
    $("#basic-form").validate().resetForm();
    $("#basic-form")[0].reset();

    // Clear the error messages
    $("#role_err").html("");
    $("#sign-on_err").html("");
  });

  //form validation
  $("#basic-form").validate({
    rules: {
      user_name: {
        required: true,
        minlength: 3,
        maxlength: 20,
        username: true,
      },
      city: {
        required: true,
        minlength: 3,
        maxlength: 25,
        city: true,
      },
      password: {
        required: true,
        minlength: 6,
        maxlength: 20,
      },
      server: {
        required: true,
      },
      role: {
        required: true,
      },
    },
    messages: {
      user_name: {
        required: "Please enter user name",
        minlength: "Please enter minimum 3 letters",
        maxlength: "Please enter maximum 20 letters",
        username:
          "Username can contain alphabets and numbers only. No spaces or special characters allowed.",
      },
      city: {
        required: "Please enter city of employment",
        minlength: "Please enter minimum 3 letters",
        maxlength: "Please enter maximum 25 letters",
        city: "City of employment can contain alphabets and spaces only.",
      },

      password: {
        required: "Please enter password",
        minlength: "Please enter minimum 6 letters",
        maxlength: "Please enter maximum 20 letters",
      },
      server: {
        required: "Please select a Web Server",
      },
      role: {
        required: "Please select role",
      },
    },
    errorPlacement: function (error, element) {
      if (element.is(":radio")) {
        error.appendTo("#role_err");
      } else if (element.is(":checkbox")) {
        error.appendTo("#terms_err");
      } else {
        error.insertAfter(element);
      }
    },
    submitHandler: function (form) {
      $("#disp_user_name").html($("#txt_user_name").val());
      $("#disp_city").html($("#txt_city").val());
      $("#disp_server").html($("#opt_server").find(":selected").text());
      $("#disp_role").html($("input:radio[name=role]:checked").val());
      $("#disp_signon").html(find_signon());

      $("#modal_disp").modal("show");
    },
  });
});

//find sign-on
function find_signon() {
  var signons = [];
  var arr = "-";
  $.each($("input[name='sing-on']:checked"), function () {
    signons.push($(this).val());
  });
  if (signons.length) {
    arr = signons.join(", ");
  }
  return arr;
}
