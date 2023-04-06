const { getName } = require('./2-functions');

console.log(
  getName()
);

console.log(
  getName(
    { first: "a", last: "b"}
  )
);