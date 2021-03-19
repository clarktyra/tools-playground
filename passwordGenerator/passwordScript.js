// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // variables: specialCharacters, numbers, lowerCaseLetters, upperCaseLetters,
  // isSpecialCharacters, isNumbers, isLoweCaseLetters, isUpperCaseLetters
  var specialCharacters = [
    "@",
    "%",
    "+",
    "\\",
    "/",
    "'",
    "!",
    "#",
    "$",
    "^",
    "?",
    ":",
    ",",
    ")",
    "(",
    "}",
    "{",
    "]",
    "[",
    "~",
    "-",
    "_",
    ".",
  ];
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var lowerCaseLetters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  var upperCaseLetters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];
  var isSpecialCharacters,
    isNumbers,
    isLoweCaseLetters,
    isUpperCaseLetters = false;
  var password = "";
  var passwordLength = 0;

  //prompts

  function getPasswordLength() {
    passwordLength = parseInt(
      prompt(
        "How many characters would you like the password to be? (between 8-128)"
      )
    );
    if (passwordLength >= 8 && passwordLength <= 128) {
      return;
    } else {
      alert("Please give a length between 8-128.")
      getPasswordLength();
    }
  }
  getPasswordLength();
  function getPrompts(){
    isSpecialCharacters = confirm("Do you want special charcters?");
    isNumbers           = confirm("Do you want numbers?");
    isLoweCaseLetters   = confirm("Do you want lower case letters?");
    isUpperCaseLetters  = confirm("Do you want upper case letters?");
    if (!isSpecialCharacters && !isNumbers && !isLoweCaseLetters && !isUpperCaseLetters){
      alert("At least 1 type(specials, numbers, characters) needs to be allowed.")
      getPrompts();
    }
  }
  getPrompts();
  
  console.log(typeof passwordLength);
  console.log(
    passwordLength,
    isSpecialCharacters,
    isNumbers,
    isLoweCaseLetters,
    isUpperCaseLetters
  );

  var listOfCharacters = []
  function createList(array1, array2, array3, array4){
    var array = [];
    if(array1){
      array = array.concat(specialCharacters)
    }
    if(array2){
      array = array.concat(numbers)
    }
    if(array3){
      array = array.concat(lowerCaseLetters)
    }
    if(array4){
      array = array.concat(upperCaseLetters)
    }
    return array;
  }
  var listOfCharacters = createList(isSpecialCharacters, isNumbers, isLoweCaseLetters, isUpperCaseLetters);
  console.log("listOfCharacters: ", listOfCharacters)

  //actually formulate password now with the correct list
  for (var i = 0; i < passwordLength; i++){
    var lenghtOfList = listOfCharacters.length;
    var getRandomIndex = Math.floor(Math.random()* lenghtOfList)
    password += listOfCharacters[getRandomIndex]
  }
  console.log("password: ", password)

  // put password on screen
  return password

}

// GIVEN I need a new, secure password click the button to generate a password
// presented with a series of prompts for password criteria

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
