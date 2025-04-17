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


//Function Parameter Annotations => You can specify the types of function parameters to ensure that the function is called with the correct types of arguments.

function addNumbers(a: number, b: number){
    return a + b;
}
console.log(addNumbers(5, 10)); // Output: 15

function addOne(num: number){
    return num + 1;
}
console.log(addOne(5)); // Output: 6

//arrow function 
const addTwo = (num: number): number => {
    return num + 2;
}
console.log(addTwo(5)); // Output: 7

//console.log(addTwo(5, 10, 20)); // Error: Expected 1 arguments, but got 3. This is because the function is defined to take only one argument. 

//typescript will gives warning if you provide more or less parameters than the function is defined for.


//Default Parameters => You can provide default values for function parameters. If the caller does not provide a value for that parameter, the default value will be used.

function greet(name: string, greeting: string = "Hello") {
    return `${greeting}, ${name}!`;
} 
console.log(greet("Hetu")); // Output: Hello, Hetu!

//Regular Function
function double1(num: number): number {
    return num * 2;
}
console.log(double1(5)); // Output: 10

//Viod In TypeScript => The void type is used to indicate that a function does not return a value. It is often used for functions that perform side effects, such as logging or modifying global variables

function logMessage(message: string): void {
    console.log(message);
}
logMessage("Hello, World!"); // Output: Hello, World!

//Never Type => The never type is used to indicate that a function will never return a value. This is typically used for functions that throw an error or have an infinite loop.

// function throwError(message: string): never {
//     throw new Error(message);
// }
// throwError("This is an error!");
 // Output: Uncaught Error: This is an error! 
 // This function will never return a value because it always throws an error.


 //Arrays => Arrays are used to store multiple values in a single variable. In TypeScript, you can specify the type of elements in an array using the syntax type[] or Array<type> or ReadonlyArray<type>.
 // you can only push the values of the specified type in the array. If you try to push a value of a different type, TypeScript will give you an error.

let numbers: number[] = [1, 2, 3, 4, 5];
console.log(numbers); // Output: [1, 2, 3, 4, 5]

let fruits: string[] = ["apple", "banana", "orange"];
console.log(fruits); // Output: ["apple", "banana", "orange"]

let items: Array<string> = ["apple", "banana", "orange"];
items.push("grape"); // Adding a new item to the array
console.log(items); // Output: ["apple", "banana", "orange", "grape"]