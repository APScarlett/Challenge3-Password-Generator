// Assignment Code
var generateBtn = document.querySelector("#generate");
// Added function to call pw generator
//Add a prompt to ask the user for pw length
function generatePassword(){
  var passwordSize=prompt("Enter password length between 8 and 129");
  console.log(passwordSize)

if(passwordSize>= 8 && passwordSize<=128){

}
else{
  alert("Invalid Entry, Password length must be between 8 and 128")
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
