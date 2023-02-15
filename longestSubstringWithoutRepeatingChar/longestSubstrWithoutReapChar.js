let s = "abcabcbb";
var lengthOfLongestSubstring = function (s) {
  let obj = {};
  let start = 0;
  let maxLen = 0;
  let arr = s.split("");

  for (i = 0; i < s.length; i++) {
    let current = obj[arr[i]];
    if (current != null && start <= current) {
      start = current + 1;
    } else {
      maxLen = Math.max(maxLen, i - start + 1);
    }

    obj[arr[i]] = i;
  }

  console.log(maxLen);
};

lengthOfLongestSubstring(s);
