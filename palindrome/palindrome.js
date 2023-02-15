let str = "sas";
let num = 121;

// two pointer approach
var isPalindrome = function (x) {
  if (x < 0) console.log(false);
  const num = x.toString();
  let left = 0;
  let right = num.length - 1;
  while (left < right) {
    if (num[left] !== num[right]) {
      console.log(false);
    }
    left++;
    right--;
  }
  console.log(true);
};

// for number
var isPalindromeSecond = function (x) {
  let y = x.toString().split("").reverse().join(""); // convart into string and reverse it
  console.log(x === parseInt(y)); // check it with original and and reverse string
};

isPalindromeSecond(num);
isPalindrome(str);
