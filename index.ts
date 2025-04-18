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

// Multi-dimensional Array => You can create multi-dimensional arrays by nesting arrays inside other arrays. For example, a two-dimensional array can be created as follows:

let matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix); // Output: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

console.log(matrix[1][2]); // Output: 6 (Accessing the element in the second row and third column)


// Objects => Objects are used to store key-value pairs. In TypeScript, you can specify the types of the properties in an object using an interface or a type alias.TypeScript used structured data types to define the shape of an object. You can use interfaces or type aliases to define the structure of an object.
//TypeScript will give you an error if you try to assign a value of a different type to a property. 

let person: { name: string; age: number; isStudent: boolean } = {
    name: "Hetu",
    age: 25,
    isStudent: true
};
console.log(person); // Output: { name: "Hetu", age: 25, isStudent: true }

console.log(person.name); // Output: Hetu
console.log(person.age); // Output: 25
console.log(person.isStudent); // Output: true


function printPerson(person: { name: string; age: number; isStudent: boolean }) {
    console.log(`Name: ${person.name}, Age: ${person.age}, Is Student: ${person.isStudent}`);
}
printPerson(person); // Output: Name: Hetu, Age: 25, Is Student: true


function printUser(): { name: string; age: number; isStudent: boolean } {
    return { name: "Hetu", age: 25, isStudent: true };
}
console.log(printUser()); // Output: { name: "Hetu", age: 25, isStudent: true }

// Type Aliases => Type aliases allow you to create a new name for an existing type. This can be useful for creating more descriptive names for complex types or for creating reusable types.

type Person = {
    name: string;
    age: number;
    isStudent: boolean;
};

type User = {
    name: string;
    age: number;
    location: string;
}

const printUserInfo = (user: User) => {
    console.log(`Name: ${user.name}, Age: ${user.age}, Location: ${user.location}`);
}
printUserInfo({ name: "Hetu", age: 25, location: "India" }); // Output: Name: Hetu, Age: 25, Location: India


// Optional Properties => You can specify that a property in an object is optional by using the ? operator. This means that the property may or may not be present in the object.
// TypeScript will not give you an error if the property is missing.

type PersonWithOptionalProperty = {
    name: string;
    age: number;
    isStudent?: boolean; // Optional property
};
const personWithOptionalProperty: PersonWithOptionalProperty = {
    name: "Hetu",
    age: 25
};
console.log(personWithOptionalProperty); // Output: { name: "Hetu", age: 25 }

console.log(personWithOptionalProperty.isStudent); // Output: undefined (property is not present)
console.log(personWithOptionalProperty.age); // Output: 25 (property is present)


// Optional Properties in Function Parameters => You can also use optional properties in function parameters. This allows you to create functions that can accept objects with different shapes.

type UserWithOptionalProperty = {
    name: string;
    age: number;
    location?: string; // Optional property
};
const printUserInfoWithOptionalProperty = (user: UserWithOptionalProperty) => {
    console.log(`Name: ${user.name}, Age: ${user.age}, Location: ${user.location}`);
}
printUserInfoWithOptionalProperty({ name: "Hetu", age: 25 }); // Output: Name: Hetu, Age: 25, Location: undefined
printUserInfoWithOptionalProperty({ name: "Hetu", age: 25, location: "India" }); // Output: Name: Hetu, Age: 25, Location: India 

//Readonly Property => we can not chnage property once it can decided.
//const user: User = {
// name: "Hetu",
// readonly location:"Gujarat" => Now we can't change this property.
// }; 

//Intersection Types => Intersection types allow you to combine multiple types into one. This can be useful for creating complex types that have properties from multiple types.
// You can use the & operator to create an intersection type. This means that the variable must have all the properties of both types.

type UserInfo = {
    name: string;
    age: number;
};
type Address = {
    city: string;
    country: string;
};

type UserWithAddress = UserInfo & Address; // Intersection type

let userDetail: UserWithAddress = {
    name: "hetu",
    age: 21,
    city: "Ahmedabad",
    country: "India",
}
console.log(userDetail);

//Union => Union types allow you to specify that a variable can be one of multiple types. This can be useful for creating flexible APIs or for handling different types of data. 
// You can use the | operator to create a union type. This means that the variable can be of either type.

type StringOrNumber = string | number; // Union type

let value: StringOrNumber = "Hello";

console.log(value); // Output: Hello

value = 42; // Reassigning to a number
console.log(value); // Output: 42

let password: string | number = "12345"; // Union type

type UserInfoWithUnion = {
    first: string;
    last: string;
    age: number;
}
type UserInfoWithUnion2 = {
    email: string;
    password: string;
}

let userInfo: UserInfoWithUnion | UserInfoWithUnion2 = {
    first: "Hetu",
    last: "Patel",
    age: 21,
    email: "hetu@gmail.com",
    password: "12345",
}
console.log(userInfo); // Output: { first: "Hetu", last: "Patel", age: 21,  email: 'hetu@gmail.com', password: '12345'}

let items1: (string | number)[] = ["apple", 1, "banana", 2, "orange", 3]; // Array of strings and numbers
console.log(items1); // Output: ["apple", 1, "banana", 2, "orange", 3]

//Literal Types => Literal types allow you to specify the exact value that a variable can have. This can be useful for creating more specific types or for creating enums.
// You can use string literals, number literals, or boolean literals to create literal types. This means that the variable can only have the specified value.

type Direction = "up" | "down" | "left" | "right"; // Literal type

let move: Direction = "up"; // Valid assignment
console.log(move); // Output: up
 
//move = "backward"; // Error: Type '"backward"' is not assignable to type 'Direction'.