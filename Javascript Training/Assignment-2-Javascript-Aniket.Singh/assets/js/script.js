
// Find date in specified format
function getDate() {
  var date_format;
  var today = new Date();
  var radio_ip = document.getElementsByName("rd_btn");

  for (let i = 0; i < radio_ip.length; i++) {
    if (radio_ip[i].checked == true) {
      var selected_date = radio_ip[i].value;
      break;
    }
  }
  switch (selected_date) {
    case "mm-dd-yyyy":
      date_format = `${String(today.getMonth() + 1).padStart(
        2,
        "0"
      )}-${String(today.getDate()).padStart(
        2,
        "0"
      )}-${today.getFullYear()}`;
      break;
    case "mm/dd/yyyy":
      date_format = `${String(today.getMonth() + 1).padStart(
        2,
        "0"
      )}/${String(today.getDate()).padStart(
        2,
        "0"
      )}/${today.getFullYear()}`;
      break;
    case "dd-mm-yyyy":
      date_format = `${String(today.getDate()).padStart(2, "0")}-${String(
        today.getMonth() + 1
      ).padStart(2, "0")}-${today.getFullYear()}`;
      break;
    case "dd/mm/yyyy":
      date_format = `${String(today.getDate()).padStart(2, "0")}/${String(
        today.getMonth() + 1
      ).padStart(2, "0")}/${today.getFullYear()}`;
      break;
  }

  {
    date_format
      ? (document.getElementById(
        "date_output"
      ).innerHTML = `Date in the selected Format : ${date_format}`)
      : (document.getElementById(
        "date_output"
      ).innerHTML = `Please select a date format`);
  }
}

// display the cities according to country selected
function showCities() {
  var country = document.getElementById("country").value;
  var cityDropdowns = document.getElementById("city-dropdowns");
  var indiaCities = document.getElementById("india-cities");
  var usaCities = document.getElementById("usa-cities");
  var ukCities = document.getElementById("uk-cities");

  indiaCities.style.display = "none";
  usaCities.style.display = "none";
  ukCities.style.display = "none";

  if (country === "India") {
    indiaCities.style.display = "block";
  } else if (country === "USA") {
    usaCities.style.display = "block";
  } else if (country === "UK") {
    ukCities.style.display = "block";
  }
  cityDropdowns.style.display = country ? "block" : "none";
}

function getCity() {
  var selected_city;

  var indiaCities = document.getElementById("india-cities");
  var usaCities = document.getElementById("usa-cities");
  var ukCities = document.getElementById("uk-cities");

  if (indiaCities.style.display === "block") {
    selected_city = document.getElementById("india-city").value;
  }
  else if (usaCities.style.display === "block") {
    selected_city = document.getElementById("usa-city").value;
  }
  else {
    selected_city = document.getElementById("uk-city").value;
  }

  document.getElementById("city_output").innerHTML =
    "Selected City is : " + selected_city;
}

// count the checkbox selected
function colorCount() {
  var selected = document.getElementsByName("color");
  var count = 0;
  for (var index = 0; index < selected.length; index++) {
    if (selected[index].checked) {
      count++;
    }
  }
  document.getElementById("color_count").innerHTML =
    "Count of colors selected : " + count;
}

// delete the row from table
function removeStateCapital(current) {
  if (confirm("Do You Want to Delete this Row?") == true) {
    current.parentNode.parentNode.style.display = "none";
  }
}