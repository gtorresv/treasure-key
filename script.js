// Assignment code here
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVXYZ".split('');
var lowercaseLetters = "abcdefghijklmnopqrstuvxyz".split('');
var specialCharacters = "!@#$%^&*()_-/?.".split('');
var numericCharacters = "1234567890".split('');

var characters = [];

//var randomPassword = characters[Math.floor(Math.random() * characters.length)];

function selectCharacters() {
  window.alert("Please start all over and choose atleast one character and a character length.")
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

document.getElementById("generate").innerHTML;

function generatePassword() {
  var characterLength = prompt("How many characters would you like to use?");
  console.log(characterLength);
  if (characterLength < 8 || characterLength > 124) {
    alert("Please start all over and choose a password length that is between 8-124 characters.");
  }
  var confirmUppercase = (window.confirm("Do you want uppercase letters?"));
  if (confirmUppercase === true) {
    characters = characters.concat(uppercaseLetters);
    console.log(characters);
  }  
  var confirmLowercase = (window.confirm("Do you want to use lowercase letters?"));
  if (confirmLowercase === true) {
    characters = characters.concat(lowercaseLetters);
    console.log(characters);
  }  
  var confirmSpecialCharacters = (window.confirm("Do you want to use special characters?"));
  if (confirmSpecialCharacters === true) {
    characters = characters.concat(specialCharacters);
    console.log(characters);
  }  
  var confirmNumericCharacters = (window.confirm("Do you want to include numbers?"));
  if (confirmNumericCharacters === true) {
    characters = characters.concat(numericCharacters);
    console.log(characters);
  }  
  //var randomPassword = characters[Math.floor(Math.random() * characters.length)];
  var randomPassword = ""
  for (var i=0; i < characterLength; i++) {
  randomPassword += characters[Math.floor(Math.random() * characters.length)];
  } 
  characters = [];
  return randomPassword
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword(characters);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
  // document.getElementById("password").innerHTML = randomPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 

//for (var i = 0; i < generateBtn.length; i++) {
 // generateBtn[i].textContent = '';
//}
