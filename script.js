// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength = parseInt(prompt("How long would you like the password to be? (between 8 and 128 characters)"));

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
    // var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    
    passwordText.value = password;
  
  }