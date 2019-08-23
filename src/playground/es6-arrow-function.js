// function square(x){
//   return x*x;
// }
//
// const squareArrow = (x) => x*x;
//
// console.log(square(8));

// Challenge:  Use arrow functions
// getFirstName('Mike Smith') -> 'Mike'
//
// Create regular arrow function
// Create arrow sunction using shorthand syntax

const getFirstName = (name) => {
  return name.split(' ')[0];
}
//console.log(getFirstName('Amanda Hershey'));

const getFirstShort = (name) => name.split(' ')[0];
console.log(getFirstShort('Amanda Hershey'));
