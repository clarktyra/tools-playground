const generateBtn = document.querySelector("#generate");

writePassword = () => {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");
  passwordText.value = password;
};

generateBtn.addEventListener("click", writePassword);

generatePassword = () => {
  const specialCharacters = [
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
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const lowerCaseLetters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const upperCaseLetters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let isSpecialCharacters,
    isNumbers,
    isLoweCaseLetters,
    isUpperCaseLetters = false;
  let password = "";
  let passwordLength = 0;

  getPasswordLength = () => {
    passwordLength = parseInt(
      prompt(
        "How many characters would you like the password to be? (between 8-128)"
      )
    );
    if (passwordLength >= 8 && passwordLength <= 128) {
      return;
    } else {
      alert("Please give a length between 8-128.");
      getPasswordLength();
    }
  };
  getPasswordLength();

  getPasswordCriteria = () => {
    isSpecialCharacters = confirm("Do you want special charcters?");
    isNumbers = confirm("Do you want numbers?");
    isLoweCaseLetters = confirm("Do you want lower case letters?");
    isUpperCaseLetters = confirm("Do you want upper case letters?");
    if (
      !isSpecialCharacters &&
      !isNumbers &&
      !isLoweCaseLetters &&
      !isUpperCaseLetters
    ) {
      alert(
        "At least 1 type(specials, numbers, characters) needs to be allowed."
      );
      getPasswordCriteria();
    }
  };
  getPasswordCriteria();

  createList = (array1, array2, array3, array4) => {
    var array = [];
    if (array1) array = array.concat(specialCharacters);
    if (array2) array = array.concat(numbers);
    if (array3) array = array.concat(lowerCaseLetters);
    if (array4) array = array.concat(upperCaseLetters);
    return array;
  };
  const listOfCharacters = createList(
    isSpecialCharacters,
    isNumbers,
    isLoweCaseLetters,
    isUpperCaseLetters
  );

  for (let i = 0; i < passwordLength; i++) {
    const lenghtOfList = listOfCharacters.length;
    const getRandomIndex = Math.floor(Math.random() * lenghtOfList);
    password += listOfCharacters[getRandomIndex];
  }

  return password;
};
