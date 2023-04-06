import addNumbers, { addStrings, getName } from "./2-functions";

console.log(addNumbers(1, 2));
// console.log(addNumbers(1, "jack"));

console.log(addStrings("a", "b"));
console.log(addStrings("a"));

console.log(getName({ first: "Jack", last: "Herrington" }));