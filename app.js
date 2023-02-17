const validator = require("validator");

console.log(validator.isEmail("piyush@gmail.com"));
console.log(validator.isURL("https:\\www.google.com"));
console.log("above gives false because of the backward slashes");
