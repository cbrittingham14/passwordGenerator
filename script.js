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

   //Input strings for needed characters
  var alph = "abcdefghijklmnopqrstuvwxyz";
  var num = "0987654321";
  var spec ="!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var up = alph.toUpperCase(); 

  var checkBoxObject = {
    "lowercase": alph,
    "uppercase": up,
    "numeric": num,
    "special": spec,
  }

 // make checkboxes based on the array passed to the function
  mkCheckBoxes(checkBoxArray);

// split strings into Arrays filled with each character alone
  function mkArray(a){
      var s = a.split("");
      return s
  }
   
    function randomString (arr){

        for(var i=0; i < passwordLength; i++){

            var rand = Math.random();
            var index;

            index = Math.floor(arr.length * rand);

            console.log("rand inside randomString: " + index);

            var localArr = mkArray(arr[index]);

            console.log("localArr: " + localArr);

            genChar(localArr);
        }
    }

    // generate a random character from the array arr
    function genChar(arr){

        var rand = Math.random()
        var l = arr.length;
        var i = Math.floor(l * rand); //generate random index
        var char = arr[i];  //select random character from array

        console.log("here is the random character:" + char);
    }

  function mkCheckBoxes(names){
      for(var i=0; i<names.length; i++){

        //select div to add checkboxes to
        var div = document.getElementById("checkboxes"); 
        div.style.textAlign = "center";
              
        // creating checkbox element 
        var checkbox = document.createElement('input'); 
          
        // Assigning the attributes to created checkbox
        checkbox.type = "checkbox"; 
        checkbox.id = names[i]; 
          
        // creating label for checkbox 
        var label = document.createElement('label'); 
          
        // assigning correct name for the label tag   
        label.htmlFor = names[i]; 
          
        // display the text by the correct checkbox  
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
    var index = [];
    var passwordAlphArray = [];

    // record each checkbox's state
    for(var i =0; i < checkBoxArray.length; i++){

        //create local variables
        var box = document.getElementById(checkBoxArray[i]);

        //add checked boxes to index array
        if (box.checked){

        //add selected boxes to password array
        passwordAlphArray.push(checkBoxObject[checkBoxArray[i]]);
            index.push(i);
        }
    }

    console.log("passwardArray: " + passwordAlphArray);
    console.log("passwardArray length: " + passwordAlphArray.length);
    if(passwordAlphArray.length > 0){
        randomString(passwordAlphArray);
    } else {
        alert("You must selec at least one checkbox");
    }

  }