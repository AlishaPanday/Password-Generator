// Assignment Code
//declared a variable generateBtn with query selector based on the id generate
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function to Genrate Password
// create a variable object to store all the criteria of value for password 
 var characters = {
   "upperCase": ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
   "lowerCase": ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
   "num": ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
   "symbol": ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"]
 }
 //declare a variable to store the user input

 var userLength;
 var confirmUpper;
 var confirmLower;
 var confirmNum;
 var confirmSymbol;

 // empty list variable to store the choices form user


 // create a function generate password

 function generatePassword (){
   userLength = parseInt(prompt("How many Length of characters for password? Type num: "))


   //While loop for user input validation to check if  under the criteria of 8-128 char and not empty
   
   while (!userLength |userLength < 8 || userLength > 128){
     alert ("This needs a value between 8-128 character & cannot be empty");
     var userLength = parseInt(prompt("How many Length of characters for password? Type num:  "));
    }
    console.log(userLength);


     //user confirmation on  types of criteria to include in the password
     var confirmUpper = confirm ("Do you want UpperCase alphabets in your password?");
     var confirmLower = confirm("Do you want LowerCase in your password?");
     var confirmNum = confirm("Do you want Number in your password?");
     var confirmSymbol = confirm("Do you want Symbol in your password?");

    //User input validation to select atleast one character type

    while (confirmUpper === false && confirmLower === false && confirmNum=== false && confirmSymbol=== false) {
        alert("You must at least select one character type");
        var confirmUpper = confirm ("Do you want UpperCase alphabets in your password?");
        var confirmLower = confirm("Do you want LowerCase in your password?");
        var confirmNum = confirm("Do you want Number in your password?");
        var confirmSymbol = confirm("Do you want Symbol in your password?");   
    }
    console.log(confirmUpper);
    console.log(confirmLower);
    console.log(confirmNum);
    console.log(confirmSymbol);

     //empty array to store user confirmation
     var choices = [];
    
     //storing user input in choices array using if else statement

     if (confirmUpper === true){
       var choices = choices.concat(characters.upperCase);
     }

     if (confirmLower === true){
       var choices = choices.concat(characters.lowerCase);
     }

     if (confirmNum === true){
       var choices = choices.concat(characters.num);
     }
     if(confirmSymbol === true){
       var choices= choices.concat(characters.symbol);
     }

     console.log(choices);


     //Create variable to store random password generated according to user choices of criteria

      var randomPassword = '';
    
     //For loop to loop through the entered length of times and add the password char types
      for (i = 0; i < userLength; i++){
         var randomPassword = randomPassword + choices [Math.floor(Math.random()*choices.length)];
          console.log(randomPassword);    
        }
        return randomPassword;
   
 }



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

