// Assignment Code
var generateBtn = document.querySelector("#generate");


// Accept password length input
var passwordLength = parseInt(prompt("How long would you like the password to be? (between 8 and 128 characters)"));

//Verify password length is within bounds (8-128)
if (passwordLength < 8 || passwordLength > 128){
    console.log("password invalid. length: " + passwordLength);
    var validLength = false;
    do{
        console.log("length before new prompt: "+ passwordLength);
        passwordLength = parseInt(prompt("Enter a number between 8 and 128"));
        console.log("legnth after new input: "+ passwordLength);
  
        console.log("current bool state in while loop: "+ validLength);
        if (passwordLength > 8 && passwordLength < 128){
          validLength = true;
          console.log("current bool state in if statement: " + validLength);
        }
      } while (validLength === false)
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// Write password to the #password input
function writePassword() {
    // var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    
    passwordText.value = password;
  
  }