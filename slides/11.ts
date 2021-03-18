// file1.ts
interface Animal {
  numberOfLegs: number;
  hasFur: boolean;
}

const bear: Animal = {
  numberOfLegs: 4,
  hasFur: true
};


// file3.ts
// imported the orignal definition Animal
// Some animals have horns...
interface Animal {
  hasHorns: boolean;
  hasFur: 'yes' | 'no'
}

const deer: Animal = {
  numberOfLegs: 4,
  hasFur: true,
  hasHorns: true
}

interface Mammal extends Animal {
  hasPouch: boolean;
}