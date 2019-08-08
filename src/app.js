// install -> import -> use
// install in terminal: yarn add validator
// import: check docs for import
import validator from 'validator';
// use: check docs for usage
console.log(validator.isEmail('test@gmail.com'));
// webpack will exclude modules if not validator__WEBPACK_IMPORTED_MODULE_0__
