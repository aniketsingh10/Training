$(document).ready(function () {
  // toggle visibility according to mode of contact
  $('input[name="contact"]').change(function () {
    toggleFieldsVisibility();
  });

  toggleFieldsVisibility();

  // custom email validation
  $.validator.addMethod(
    "customEmail",
    function (value, element) {
      // regular expression to validate the email format
      return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value);
    },
    "Please enter a valid email address."
  );

  //contact form validation
  $("#basic-form").validate({
    rules: {
      county_code_pin: {
        required: true,
        minlength: 2,
        maxlength: 4,
      },
      phone_number: {
        required: true,
        minlength: 10,
      },
      email: {
        required: true,
        customEmail: true,
      },
      contact: {
        required: true,
      },
      day: {
        required: true,
      },
    },
    messages: {
      county_code_pin: {
        required: "Please enter a pin code.",
        minlength: "Pin code must be at least 2 characters long.",
        maxlength: "Pin code cannot exceed 4 characters.",
      },
      phone_number: {
        required: "Please enter phone number.",
        minlength: "Please enter a valid phone number with at most 10 digits.",
      },
      email: {
        required: "Please enter an email address.",
        customEmail: "Please enter a valid email address.",
      },
      contact: {
        required: "Please select a mode of contact.",
      },
      day: {
        required: "Please select at least one day",
      },
    },
    errorPlacement: function (error, element) {
      if (element.is(":radio")) {
        error.appendTo("#contact_err");
      } else if (element.is(":checkbox")) {
        error.appendTo("#day_err");
      } else {
        error.insertAfter(element);
      }
    },
    submitHandler: function (form) {
      const communicationMode = $('input[name="contact"]:checked').val();
      const pinCode = $("#modal_pincode");
      const phoneNumber = $("#modal_phone_number");
      const email = $("#modal_email");
      const preferredDays = $("#modal_preferred_days");
      const preferredTime = $("#modal_preferred_time");

      $("#disp_contact").html(communicationMode);
      if (communicationMode === "Phone") {
        pinCode.removeClass("d-none");
        phoneNumber.removeClass("d-none");
        preferredDays.removeClass("d-none");
        preferredTime.removeClass("d-none");
        email.addClass("d-none");
        $("#disp_county_code_pin").html($("#county_code").val());
        $("#disp_phone_number").html($("#user_phone_number").val());
        $("#disp_days").html(find_days());
        $("#disp_time").html($("#preferredTime").val());
      } else if (communicationMode === "Email") {
        email.removeClass("d-none");
        pinCode.addClass("d-none");
        phoneNumber.addClass("d-none");
        preferredDays.addClass("d-none");
        preferredTime.addClass("d-none");
        $("#disp_email").html($("#txt_email").val());
      } else {
        pinCode.removeClass("d-none");
        phoneNumber.removeClass("d-none");
        preferredDays.addClass("d-none");
        preferredTime.addClass("d-none");
        email.addClass("d-none");
        $("#disp_county_code_pin").html($("#county_code").val());
        $("#disp_phone_number").html($("#user_phone_number").val());
      }

      $("#modal_disp").modal("show");
    },
  });
});

// toggle visibility according to mode of contact
function toggleFieldsVisibility() {
  const communicationMode = $('input[name="contact"]:checked').val();
  const phoneFields = $("#phoneFields");
  const emailFields = $("#emailFields");
  const smsFields = $("#smsFields");

  if (communicationMode === "Phone") {
    phoneFields.removeClass("d-none");
    smsFields.removeClass("d-none");
    emailFields.addClass("d-none");
  } else if (communicationMode === "Email") {
    phoneFields.addClass("d-none");
    smsFields.addClass("d-none");
    emailFields.removeClass("d-none");
  } else {
    phoneFields.addClass("d-none");
    emailFields.addClass("d-none");
    smsFields.removeClass("d-none");
  }
}

// find preferred days
function find_days() {
  var days = [];
  var arr = "-";
  $.each($("input[name='day']:checked"), function () {
    days.push($(this).val());
  });
  if (days.length) {
    arr = days.join(", ");
  }
  return arr;
}
