function addNumbers(a: number, b: number): number {
  return a + b;
}

export default addNumbers;

// avoid the "any" type in TS... we want to control the types.

export const addStrings = (str1: string, str2: string = ""): string => `${str1} ${str2}`;

export const format = (title: string, param: string | number): string => `${title} ${param}`;

export const printFormat = (title: string, param: string | number): void => console.log(format(title, param));

export const fetchData = (url: string): Promise<string> => Promise.resolve(`Data from ${url}`);

function introduce(salutation: string, ...names: string[]): string {
  return `${salutation} ${names.join(" ")}`;
}

// TS only enforces types at compile time, not at runtime.

export function getName(user: {first: string, last: string}): string {
  return `${user?.first ?? "first"} ${user?.last ?? "last"}`;
}