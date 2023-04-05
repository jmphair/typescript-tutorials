let userName: string = "Jack";
let hasLoggedIn: boolean = true;

userName += " Herrington";

console.log(userName);

let myNumber: number = 10;

let myRegex: RegExp = /foo/;

const names: string[] = userName.split(" ");

const myValues: Array<number> = [1, 2, 3];

interface Person {
  first: string;
  last: string;
  cool: boolean;
}

const myPerson: {
  first: string;
  last: string;
  cool: boolean;
} = {
  first: "Jack",
  last: "Herrington",
  cool: true,
};

const ids: Record<number, string> = {
  10: "a",
  20: "b",
}

ids[30] = "c";

if (ids[30] === "D") {
  console.log("It works!");
}

for (let i = 0; i < 10; i++) {
  console.log(i);
}

[1, 2, 3].forEach((v) => {console.log(v)});

const out: number[] = [4, 5, 6].map((v) => v * 10);

