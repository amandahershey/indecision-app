// true if adult, otherwise false
const isAdult = (age) => age >= 18;
// true if 21 and older, otherwise false
const canDrink = (age) => age >= 21;

export default (age) => age >= 65;

export { isAdult, canDrink };
