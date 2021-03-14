// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordCriteria = confirm("Would you like uppercase letters?"); 
var passwordCriteria1 = confirm("Would you like lowercase letters?"); 
var passwordCriteria2 = confirm("Would you like numbers?"); 
var passwordCriteria3 = confirm("Would you like special characters (such as ! @ # ?) ]?"); 
var passwordCriteria4 = prompt("For password lenght, please choose between 8-128 characters.")

if (passwordCriteria4 < 8 || passwordCriteria4 > 128) {
  alert ("For password lenght, please choose between 8-128 characters.");
  prompt ("For password lenght, please choose between 8-128 characters.")
}


var choices = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=?"

var password= ""

//if (passwordCriteria) {
  //.generate = password 
//}

//if (passwordCriteria1) {
  //.generate  = password 
//}

//if (passwordCriteria2) {
  //.generate  = password 
//}

//if (passwordCriteria3) {
  //.generate  = password 
//}


 //Write password to the #password input
  function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



//create a function called generate password that will build a password in return
  //start with empty choices array or string and empty password
  //do if conditions to build an array or string of character possibilities



//for looping through password criteria 4 lenght and add random character to password
function generate(){
   for (var i = 0; i <= choices ; i++) {  
  var password = choices[Math.floor(Math.random() * choices.length)]; 
   }
  return password
}



 // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


