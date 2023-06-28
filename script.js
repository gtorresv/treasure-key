// Assignment code here
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
var lowercaseLetters = "abcdefghijklmnopqrstuvxyz";
var specialCharacters = "!@#$%^&*()_-/?.";
var numericCharacters = "1234567890";

var characters = [uppercaseLetters, lowercaseLetters, specialCharacters,numericCharacters];
if (window.confirm("Do you want uppercase letters?")) {
  console.log(uppercaseLetters);
}
if (window.confirm("Do you want to use lowercase letters?")) {
  console.log(lowercaseLetters);
}
if (window.confirm("Do you want to use special characters?")) {
console.log(specialCharacters);
}

if (window.confirm("Do you want to include numbers?")) {
  console.log(numericCharacters);
}

var randomPassword = characters[Math.floor(Math.random() * characters.length)];

function selectCharacters() {
  window.alert("Please start all over and choose atleast one character.")
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

document.getElementById("generate").innerHTML;


// Write password to the #password input
function writePassword() {
  var password = generatePassword(randomPassword);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
  document.getElementById("password").innerHTML = writePassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 

for (var i = 0; i < generateBtn.length; i++) {
  generateBtn[i].textContent = '';
}
