function add(x, y) {
  return x + y;
}

var add = function add(x, y) {
  return x + y;
};

const funcArray = [
  function (a, b) {
    return a + b;
  },
  function (c, d) {
    return c * d;
  },
];

console.log(funcArray[0](3, 4));

a(4, 5);

function a(c, d) {
  console.log(c + d);
}

let b = function (c, d) {
  console.log(c + d);
};

// export default funcArray;

function factorial(n) {
  if (n > 0) {
    return n * factorial(n - 1);
  }
  return 1;
}

console.log(factorial(5));
