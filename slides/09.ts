// A simple type alias of a primitive
type Description = string;
type Brand = 'honda' | 'mercedes';

type Vehicle = {
  // What properties does a car have?
  description: string,
  brand: Brand
};

const aCar: Vehicle = {
  description: 'hello',
  brand: "ford"
}

// Vehicles are more than just cars...
type Plane = Vehicle & {
  numberOfWings: number;
}

const myPlane: Plane = {
  description: "",
  brand: "honda",
  numberOfWings: 2
}