// Assignment Code
var generateBtn = document.querySelector("#generate");
// Added function to call pw generator
//Add a prompt to ask the user for pw length
function generatePassword(){
  var passwordSize=prompt("Enter password length between 8 and 129");
  console.log(passwordSize)

if(passwordSize>= 8 && passwordSize<=128){
    var confirmLowerCase=confirm("Do you want to include lowercase letters in the password?");
    console.log(confirmLowerCase);
    var confirmUppercase=confirm("Do you want to include uppercase letters in the password?");
    var confirmNumeric=confirm("Do you want to include numeric values in the password?");
    var confirmSpecial=confirm("Do you want to include special characters in the password?");
}
else{
  alert("Invalid Entry, Password length must be between 8 and 128 characters long.");
}

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
