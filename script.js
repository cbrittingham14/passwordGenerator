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
        if (passwordLength > 8 && passwordLength < 129){
          validLength = true;
          console.log("current bool state in if statement: " + validLength);
        }
      } while (validLength === false)
  }
   

  var checkBoxArray = ["lowercase", "uppercase", "numeric", "special"];

//   Generate lowercase arrray and number array from strings
  var alph = "abcdefghijklmnopqrstuvwxyz";
  var num = "0987654321";
  var spec ="!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  var specialArray = [];
  var lowercaseArray = [];
  var numberArray = [];
  lowercaseArray = alph.split("");
  numberArray = num.split("");
  specialArray = spec.split("");

  console.log(numberArray);
  console.log(specialArray);


  console.log(lowercaseArray);
  // generate uppercase array from lowercase array
  var uppercaseArray = makeUpper(lowercaseArray); 

  console.log(uppercaseArray);

  function makeUpper(a){
      var u = [];
      for(i=0; i<a.length; i++){
        u.push(a[i].toUpperCase());
      }
      return u
  }


  var myDiv = document.getElementById("checkboxes"); 
              
            // creating checkbox element 
            var checkbox = document.createElement('input'); 

            console.log(checkbox);
              
            // Assigning the attributes to created checkbox
            checkbox.type = "checkbox"; 
            checkbox.name = "name"; 
            checkbox.value = "value"; 
            checkbox.id = "id"; 

            console.log(myDiv);
              
            // creating label for checkbox 
            var label = document.createElement('label'); 
              
            // assigning attributes for the created label tag   
            label.htmlFor = "id"; 
              
            // appending the created text to  the created label tag  
            label.appendChild(document.createTextNode("Textbox label here"));
              
            // appending the checkbox 
            // and label to div 
            myDiv.appendChild(checkbox); 
            myDiv.appendChild(label); 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// Write password to the #password input
function writePassword() {
    // var password = generatePassword();
    var passwordText = document.querySelector("#password");

    var box = document.getElementById("id");
    console.log(box);
    console.log(box.checked);
    
  
    
    passwordText.value = password;
  
  }