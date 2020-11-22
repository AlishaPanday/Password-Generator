// Assignment Code
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

 // create a function generate password

 function generatePassword (){
   userLength = parseInt(prompt("How many Length of characters for password? Type num: "))
   while (userLength < 8 && userLength > 128){
     userLength = parseInt(prompt("The length should be between 8-128. Please choose again: "))
     console.log(userLength);
   }
 }





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

