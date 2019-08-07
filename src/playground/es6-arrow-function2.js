// arguments object - no longer bound with arrow functions

const add = (a, b) => {
  return a+b;
}
console.log(add(51,1));

// this keyword - no longer bound

const user = {
  name: 'Amanda',
  cities: ['Palm City', 'Tampa', 'Gainesville', 'Orlando'],
  printPlacesLived() {
    return this.cities.map((city) => `${this.name} have lived in ${city}`);
  }
};

// Challenge:

const multiplier = {
  // numbers - array of numbers to multiply
  numbers: [1, 2, 3],
  // multiplyBy - single number to multiply by
  multiplyBy: 2,
  // multiply - return a new array where numbers have been multiplied
  multiply(){
    return this.numbers.map((num) => num * this.multiplyBy);
  }
}

console.log(multiplier.multiply()); // [1, 2, 3] 2 [2, 4, 6]
