// Keep in mind that you should try to use built-in objects and their methods, solo or combined. You should use loops only for the 4 and 9 assignment, all others can be solved using built-in object methods.

// 1. Write a JavaScript function that reverses a number. typeof result of the function should be “number”.
// 12345 -> 54321
const reverseNumber = function (num) {
  const numArr = [...String(num)].reverse();
  const backToNum = Number(numArr.join(""));
  console.log(backToNum, typeof backToNum);
  return backToNum;
};
reverseNumber(12345);

// 2. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Note: Assume punctuation, numbers and symbols are not included in the passed string.
// “Webmaster” -> “abeemrstw”
const sortLettersOfWord = function (word) {
  const wordArr = Array.from(word).sort();
  const backToString = wordArr.join("");
  console.log(backToString);
  return backToString;
};
sortLettersOfWord("abeemrstw");

// 3. Write a function to alphabetize words of a given string. Alphabetizing a string means rearranging the letters so they are sorted from A to Z.
// 'Republic Of Serbia' -> 'Rbceilpu Of Sabeir'
const alphabetizeString = function (str) {
  const arr = str.split(" ").map(word => word.split("").sort().join(""));
  const strAlphabetized = arr.join(" ");
  console.log(strAlphabetized);
  return strAlphabetized;
};
alphabetizeString("Republic Of Serbia");

// 4. Write a function to split a string and convert it into an array of words.
// 'John Snow' -> [ 'John', 'Snow' ]
const stringToArr = function (str) {
  const arr = str.split(" ");
  return arr;
};
console.log(stringToArr("John Snow"));

// 5. Write a function to convert a string to its abbreviated form.
// 'John Snow' -> 'John S.'
const abbString = function (str) {
  const arr = stringToArr(str);

  arr.splice(1, 1, arr[1].charAt(0) + ".");
  console.log(arr);
  return arr;
};
abbString("John Snow");

// 6. Write a function that adds string to the left or right of string, by replacing it’s characters.
// '0000', ‘123’, 'l' -> '0123'
// '00000000', ‘123’, 'r' -> '12300000'
const addToString = function (str, add, side) {
  const len = str.length - add.length;
  let result;
  if (side.toLowerCase() === "l") {
    result = str.slice(0, len) + add;
  }
  if (side.toLowerCase() === "r") {
    result = add + str.slice(0, len);
  }
  console.log(result);
  return result;
};
addToString("00000000", "123", "r");

// 7. Write a function to capitalize the first letter of a string and returns modified string.
// 'js string exercises' -> 'Js string exercises'
const capitalizeString = function (str) {
  const capitalized = str[0].toUpperCase() + str.slice(1);
  console.log(capitalized);
};
capitalizeString("js string exercises");

// 8. Write a function to hide email addresses to protect them from unauthorized users.
// 'somerandomaddress@example.com' -> 'somerand...@example.com'
const hideEmail = function (email) {
  const atIndex = email.indexOf("@");
  const hiddenEmail = email.slice(0, 3) + "..." + email.slice(atIndex);
  console.log(hiddenEmail);
  return hiddenEmail;
};
hideEmail("somerandomaddress@example.com");

// 9. Write a program that accepts a string as input and swaps the case of each character. For example, if you input 'The Quick Brown Fox', the output should be 'tHE qUICK bROWN fOX'.
// var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// var LOWER = 'abcdefghijklmnopqrstuvwxyz';
// 'The Quick Brown Fox' -> 'tHE qUICK bROWN fOX'
const revertCase = function (str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      result += str[i].toLowerCase();
    }
    if (str[i] === str[i].toLowerCase()) {
      result += str[i].toUpperCase();
    }
  }
  console.log(result);
  return result;
};
revertCase("The Quick Brown Fox");
