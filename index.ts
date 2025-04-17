//Annotations => Annotations are used to provide type information about variables, function parameters, and return values. They help TypeScript understand the types of values being used in your code, enabling better type checking and autocompletion in your IDE.

//String
let myName: string = "Hetu";
console.log(myName); // Output: Hetu

//Numbers
let favNumber: number = 7;
console.log(favNumber); // Output: 7

//Boolean
let isStudent: boolean = true;
isStudent = false; // Reassigning the value to false
console.log(isStudent); // Output: false     

//typeOf
let myAge = 25;
let tech = "Typescript"; 
console.log(typeof tech); // Output: string 
console.log(typeof myAge); // Output: string

//Any Type => You can assign any type of value to a variable with the 'any' type. Also you can reassign the value to any type later.

let myVar: any = "Hello";
console.log(myVar); // Output: Hello

let color: any = 'red';
color = 5; // Reassigning the value to a number
color = true; // Reassigning the value to a boolean
console.log(color); // Output: true