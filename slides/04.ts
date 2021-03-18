interface Person {
  firstName: string;
  lastName?: string;
}

// You can create an object with both properties...
let me: Person = {
  firstName: "Chris",
  lastName: "Lam",
};

// ...or just a firstName
let lorde: Person = {
  firstName: "Lorde",
};

if (lorde.lastName) {
  console.log(`Hello, ${lorde.lastName}`);
}
