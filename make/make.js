function make(...args) {

  let currentSum = args.reduce( function (rest, item) {
    if (typeof item === 'number') {
      return rest + item;
    }
  });

  function inner(...num) {
      currentSum += num.reduce( function (rest, item) {
        if (typeof item === 'number') {
          return rest + item;
        }
      });
      return inner;
  }

  inner.toString = function() {
    return currentSum;
  };

  return inner;
}