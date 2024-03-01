function fullName() {
  var firstName = document.getElementById("first_name").value;
  var lastName = document.getElementById("last_name").value;

  var fullName =
    firstName.charAt(0).toUpperCase() +
    firstName.slice(1) +
    " " +
    lastName.charAt(0).toUpperCase() +
    lastName.slice(1);

  document.getElementById("full_name").textContent = "Full Name :- " + fullName;
}

function replaceWord() {
  var inputString = document.getElementById("input_string").value;
  var replaceWord = document.getElementById("replace_word").value;
  var newWord = document.getElementById("new_word").value;

  var newString = inputString.replace(new RegExp(replaceWord, "g"), newWord);
  document.getElementById("new_string").innerHTML =
    "New String :- " + newString;
}

function reverseString() {
  var input = document.getElementById("input-string").value;
  var reverse = input.split("").reverse().join("");
  document.getElementById("reverse_string").innerHTML =
    "Reversed String :- " + reverse;
}

function roundNumber() {
  var number = parseFloat(document.getElementById("fractional_number").value);
  var digit = parseInt(document.getElementById("digits").value);

  var roundNumber = number.toFixed(digit);

  document.getElementById("r_number").innerHTML =
    "Rounded Number is :- " + roundNumber;
}

function getCurrentDateTime() {
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var currentDate = new Date();

  var day = days[currentDate.getDay()];
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();

  var ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;

  document.getElementById("date").innerHTML = "Today is :- " + day;
  document.getElementById("time").innerHTML =
    "Current time is :- " +
    hours +
    " " +
    ampm +
    " : " +
    minutes +
    " : " +
    seconds;
}
