// Assignment Code
var generateBtn = document.querySelector("#generate");
// copy to actual assigment folder
function generatePassword(){
  var passwordSize=prompt("Enter password length between 8 and 128");
  console.log(passwordSize)

  if(passwordSize>= 8 && passwordSize<=128){
    
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
