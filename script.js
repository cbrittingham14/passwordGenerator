// Assignment Code
var generateBtn = document.querySelector("#generate");
var slider = document.getElementById("pwlength");
var sliderLabel = document.getElementById("sliderlabel");

//update the slider label when the slider moves
slider.addEventListener("change", function(){
    sliderLabel.textContent = slider.value;
})

// make an array for the names of each checkbox
var checkBoxArray = ["lowercase", "uppercase", "numeric", "special"];

// make checkboxes based on the array passed to the function
mkCheckBoxes(checkBoxArray);
   
   //Input strings for needed characters
  var alph = "abcdefghijklmnopqrstuvwxyz";
  var num = "0987654321";
  var spec ="!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var up = alph.toUpperCase(); 

  //object to select characters based on user input
  var checkBoxObject = {
    "lowercase": alph,
    "uppercase": up,
    "numeric": num,
    "special": spec,
  }

   // make a random string of characters from the selected alphabets and password length
    function generatePassword(chars){

        var pwString = ""               // make a string to locally store the generated password
        var charArray = chars.split("");  // make array from received string
        var pwLength = parseInt(slider.value); // read slider vale to determine password length

        for(var i = 0; i < pwLength; i++){
            var randomChar = genChar(charArray);
            pwString = pwString + randomChar;
        }
        return pwString;
    }

    // generate a random character from the array arr
    function genChar(arr){

        var rand = Math.random()
        var l = arr.length;
        var i = Math.floor(l * rand); //generate random index
        var char = arr[i];  //select random character from array
        var c = char.toString()

        return c
    }

  function mkCheckBoxes(names){
      for(var i=0; i<names.length; i++){

        //select div to add checkboxes to
        var div = document.getElementById("checkboxes"); 
        div.style.textAlign = "center";
              
        // creating checkbox elements 
        var checkbox = document.createElement('input'); 

        // Assigning the attributes to created checkbox
        checkbox.type = "checkbox"; 
        checkbox.id = names[i]; 

        // creating label for checkbox 
        var label = document.createElement('label'); 
        label.style = "padding: 8px";
          
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

    var passwordText = document.querySelector("#password");    
    var pwAlphabet = ""
    // record each checkbox's state
    for(var i =0; i < checkBoxArray.length; i++){

        //create local variable
        var box = document.getElementById(checkBoxArray[i]);

        //add appropriate character alphabets to randomization process
        if (box.checked){
            pwAlphabet = pwAlphabet + checkBoxObject[checkBoxArray[i]].toString();
        }
    }
    //check if user has selected at least one checkbox and generate a random string
    if(pwAlphabet.length > 0){
        var password = generatePassword(pwAlphabet);
        passwordText.value = password;
    } else {
        alert("You must select at least one checkbox");
    }
  }