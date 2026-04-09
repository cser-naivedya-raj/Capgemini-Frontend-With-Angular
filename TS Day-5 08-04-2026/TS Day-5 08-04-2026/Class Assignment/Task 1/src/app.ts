type User = {
  name: string;
  age: number;
};

let u1: User = {
  name: "Naivedya",
  age: 22
};

let person: [number, string, User] = [22, "Naivedya", u1];

console.log(person);