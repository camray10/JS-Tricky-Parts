function curriedAdd(number) {
    let sum = 0;
  
    function add(input) {
      if (input === undefined) {
        return sum;
      } else {
        sum += input;
        return add;
      }
    }
  
    if (number === undefined) {
      return add();
    } else {
      return add(number);
    }
  }
module.exports = { curriedAdd };
