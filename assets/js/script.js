var generateBtn = document.querySelector("#generate");

var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = lowercase.toUpperCase();
console.log(uppercase);
var number = "0123456789";
var special = "~!@#$%^&*";
//var lowercase=uppercase.toLowerCase
//console.log(uppercase)
// Added function to call pw generator
//Add a prompt to ask the user for pw length
function generatePassword() {
  var savedPassword = "";
  var passwordSize = prompt("Enter password length between 8 and 128");
  console.log(passwordSize)
  //passwordsize=7
  if (passwordSize >= 8 && passwordSize <= 128) {
    var confirmLowerCase = confirm("Do you want to include lowercase letters in the password?");
    console.log(confirmLowerCase);
    var confirmUppercase = confirm("Do you want to include uppercase letters in the password?");
    var confirmNumeric = confirm("Do you want to include numeric values in the password?");
    var confirmSpecial = confirm("Do you want to include special characters in the password?");

    var selectedCharacters = "";
    if (confirmLowerCase) {
  
    //console.log(randomIndex)

    //savedPassword = savedPassword + lowercase[randomIndex]
    selectedCharacters = selectedCharacters + lowercase
  }


if (confirmUppercase) {
  

  selectedCharacters = selectedCharacters + uppercase
}

if (confirmNumeric) {

selectedCharacters = selectedCharacters + number
}

if (confirmSpecial) {

selectedCharacters = selectedCharacters + special
}
   

    for (var i = 0; i < passwordSize; i++) {

      var randomIndex = Math.floor(Math.random() * selectedCharacters.length)
      console.log(randomIndex, selectedCharacters.length, selectedCharacters)
      savedPassword = savedPassword + selectedCharacters[randomIndex]
}

}
  else {
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
