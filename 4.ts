interface Person {
  firstName: string;
  lastName?: string;
}

const lorde: Person = {
  firstName: "Lorde",
};

const me: Person = {
  firstName: "Chris",
  lastName: "Lam",
};

console.log(`Hello, ${me.firstName} ${me.lastName}`);
