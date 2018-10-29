module.exports = function make(...args) {
  const lastIndex = args.length - 1;
  const last = args[lastIndex]
  
  if (typeof last === "function") {
    const rest = args.splice(0, lastIndex)
    return rest.reduce(last);
  } else {
    return make.bind(null, ...args)
 }
}

function sum(a, b) {
    return a + b;
}