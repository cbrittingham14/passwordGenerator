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
   
// make an array for the names of each checkbox
  var checkBoxArray = ["lowercase", "uppercase", "numeric", "special"];

  // make checkboxes based on the array passed to the function
  mkCheckBoxes(checkBoxArray);

   //Input strings for needed characters
  var alph = "abcdefghijklmnopqrstuvwxyz";
  var num = "0987654321";
  var spec ="!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var up = alph.toUpperCase(); 

// Generate arrays containing individual characters from existing strings
  var specialArray = mkArray(spec);
  var lowercaseArray = mkArray(alph);
  var numberArray = mkArray(num);
  var uppercaseArray = mkArray(up);


// split strings into Arrays filled with each character alone
  function mkArray(a){
      var s = a.split("");
      return s
  }

    var masterArray = [specialArray, lowercaseArray, numberArray, uppercaseArray];

    //generate a random index to access from master array
    for(var i=0; i < passwordLength; i++){

        var rand = Math.random();
        console.log(rand);

        rand = Math.floor(masterArray.length*rand);
        console.log(rand);

        genChar(rand);
    }

    // generate a random character
    function genChar(ind){
        var rand = Math.random()
        var a = masterArray[ind];
        var n = a.length;
        var i = Math.floor(n*rand);
        console.log(i);
        var char = masterArray[ind][i];
        console.log(char);
    }

  function mkCheckBoxes(names){
      for(var i=0; i<names.length; i++){

        //select div to add checkboxes to
        var div = document.getElementById("checkboxes"); 
              
        // creating checkbox element 
        var checkbox = document.createElement('input'); 
          
        // Assigning the attributes to created checkbox
        checkbox.type = "checkbox"; 
        checkbox.name = "name"; 
        checkbox.value = "value"; 
        checkbox.id = names[i]; 

        console.log(div);
          
        // creating label for checkbox 
        var label = document.createElement('label'); 
          
        // assigning attributes for the created label tag   
        label.htmlFor = names[i]; 
          
        // appending the created text to  the created label tag  
        label.appendChild(document.createTextNode(names[i]));
          
        // appending the checkbox and label to div 
        div.appendChild(checkbox); 
        div.appendChild(label); 
      }
  }


  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// Write password to the #password input
function writePassword() {
    // var password = generatePassword();
    var passwordText = document.querySelector("#password");
    
    passwordText.value = password;
  
  }