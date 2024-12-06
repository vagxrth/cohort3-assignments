/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let str1 = str.toLowerCase()
  let string1 = str1.replace(/[&\/\\#, +()$~%.'":*?!<>{}]/g, '')
  let string2 = string1.split('').reverse().join('');
  if (string1 === string2) {
    return true;
  } else {
    return false;
  }
}

module.exports = isPalindrome;
