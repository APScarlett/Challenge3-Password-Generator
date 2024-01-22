var generateBtn = document.querySelector("#generate");

var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = lowercase.toUpperCase();
consolelog.log(uppercase);
var number= "0123456789";
var special= "~!@#$%^&*";
//var lowercase=uppercase.toLowerCase
//console.log(uppercase)
// Added function to call pw generator
//Add a prompt to ask the user for pw length
function generatePassword(){
  var savedPassword= "";
  var passwordSize = prompt("Enter password length between 8 and 128");
  console.log(passwordSize)
  //passwordsize=7
  if (passwordSize >= 8 && passwordSize <= 128){
  var confirmLowerCase=confirm("Do you want to include lowercase letters in the password?");
  console.log(confirmLowerCase);
  var confirmUppercase=confirm("Do you want to include uppercase letters in the password?");
  var confirmNumeric=confirm("Do you want to include numeric values in the password?");
  var confirmSpecial=confirm("Do you want to include special characters in the password?");


if(confirmLowerCase){
var randomIndex= Math.floor(Math.random() *lowercase.length) // Math.random() multiplied by 26 => extends the range from 0 to 26, this includes decimals
}


  }
else{

}



return savedPassword

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
