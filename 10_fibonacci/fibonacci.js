const fibonacci = function(num) {
  let result = 1;
  let first = 1;
  let second = 1;
  if(num < 0) return "OOPS";
  if(num == 0) return 0;
  if(num == 1 || num == 2) return 1;
  for(let i = 2; i<num; i++){
    result = first + second;
    first = second;
    second = result;
  }
  return result;
};

// Do not edit below this line
module.exports = fibonacci;
