const abc: string | number | {} = { name: 123 };

let obj: { name: string; age: number };
obj = { name: "alvin", age: 18 };

let arr: number[];
arr = [1, 2, 3, 4];

let obj2: { name?: number };
obj2 = {};

interface Proto {
  NAME: string;
  AGE: number;
}
