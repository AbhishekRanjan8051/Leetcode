let s = "(]";
var isValid = function (s) {
  if (s.length % 2 !== 0) console.log(false);
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i);
    switch (c) {
      case "(":
        stack.push(")");
        break;
      case "[":
        stack.push("]");
        break;
      case "{":
        stack.push("}");
        break;
      default:
        if (c !== stack.pop()) {
          console.log(false);
          return;
        }
    }
  }

  console.log(stack.length === 0);
};

isValid(s);
