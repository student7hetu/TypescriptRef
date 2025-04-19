//Annotations => Annotations are used to provide type information about variables, function parameters, and return values. They help TypeScript understand the types of values being used in your code, enabling better type checking and autocompletion in your IDE.

//String
let myName: string = 'Hetu';
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
let tech = 'Typescript';
console.log(typeof tech); // Output: string
console.log(typeof myAge); // Output: string

//Any Type => You can assign any type of value to a variable with the 'any' type. Also you can reassign the value to any type later.

let myVar: any = 'Hello';
console.log(myVar); // Output: Hello

let color: any = 'red';
color = 5; // Reassigning the value to a number
color = true; // Reassigning the value to a boolean
console.log(color); // Output: true

//Function Parameter Annotations => You can specify the types of function parameters to ensure that the function is called with the correct types of arguments.

function addNumbers(a: number, b: number) {
    return a + b;
}
console.log(addNumbers(5, 10)); // Output: 15

function addOne(num: number) {
    return num + 1;
}
console.log(addOne(5)); // Output: 6

//arrow function
const addTwo = (num: number): number => {
    return num + 2;
};
console.log(addTwo(5)); // Output: 7

//console.log(addTwo(5, 10, 20)); // Error: Expected 1 arguments, but got 3. This is because the function is defined to take only one argument.

//typescript will gives warning if you provide more or less parameters than the function is defined for.

//Default Parameters => You can provide default values for function parameters. If the caller does not provide a value for that parameter, the default value will be used.

function greet(name: string, greeting: string = 'Hello') {
    return `${greeting}, ${name}!`;
}
console.log(greet('Hetu')); // Output: Hello, Hetu!

//Regular Function
function double1(num: number): number {
    return num * 2;
}
console.log(double1(5)); // Output: 10

//Viod In TypeScript => The void type is used to indicate that a function does not return a value. It is often used for functions that perform side effects, such as logging or modifying global variables

function logMessage(message: string): void {
    console.log(message);
}
logMessage('Hello, World!'); // Output: Hello, World!

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

let fruits: string[] = ['apple', 'banana', 'orange'];
console.log(fruits); // Output: ["apple", "banana", "orange"]

let items: Array<string> = ['apple', 'banana', 'orange'];
items.push('grape'); // Adding a new item to the array
console.log(items); // Output: ["apple", "banana", "orange", "grape"]

// Multi-dimensional Array => You can create multi-dimensional arrays by nesting arrays inside other arrays. For example, a two-dimensional array can be created as follows:

let matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log(matrix); // Output: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

console.log(matrix[1][2]); // Output: 6 (Accessing the element in the second row and third column)

// Objects => Objects are used to store key-value pairs. In TypeScript, you can specify the types of the properties in an object using an interface or a type alias.TypeScript used structured data types to define the shape of an object. You can use interfaces or type aliases to define the structure of an object.
//TypeScript will give you an error if you try to assign a value of a different type to a property.

let person: { name: string; age: number; isStudent: boolean } = {
    name: 'Hetu',
    age: 25,
    isStudent: true,
};
console.log(person); // Output: { name: "Hetu", age: 25, isStudent: true }

console.log(person.name); // Output: Hetu
console.log(person.age); // Output: 25
console.log(person.isStudent); // Output: true

function printPerson(person: {
    name: string;
    age: number;
    isStudent: boolean;
}) {
    console.log(
        `Name: ${person.name}, Age: ${person.age}, Is Student: ${person.isStudent}`
    );
}
printPerson(person); // Output: Name: Hetu, Age: 25, Is Student: true

function printUser(): { name: string; age: number; isStudent: boolean } {
    return { name: 'Hetu', age: 25, isStudent: true };
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
};

const printUserInfo = (user: User) => {
    console.log(
        `Name: ${user.name}, Age: ${user.age}, Location: ${user.location}`
    );
};
printUserInfo({ name: 'Hetu', age: 25, location: 'India' }); // Output: Name: Hetu, Age: 25, Location: India

// Optional Properties => You can specify that a property in an object is optional by using the ? operator. This means that the property may or may not be present in the object.
// TypeScript will not give you an error if the property is missing.

type PersonWithOptionalProperty = {
    name: string;
    age: number;
    isStudent?: boolean; // Optional property
};
const personWithOptionalProperty: PersonWithOptionalProperty = {
    name: 'Hetu',
    age: 25,
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
    console.log(
        `Name: ${user.name}, Age: ${user.age}, Location: ${user.location}`
    );
};
printUserInfoWithOptionalProperty({ name: 'Hetu', age: 25 }); // Output: Name: Hetu, Age: 25, Location: undefined
printUserInfoWithOptionalProperty({ name: 'Hetu', age: 25, location: 'India' }); // Output: Name: Hetu, Age: 25, Location: India

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
    name: 'hetu',
    age: 21,
    city: 'Ahmedabad',
    country: 'India',
};
console.log(userDetail);

//Union => Union types allow you to specify that a variable can be one of multiple types. This can be useful for creating flexible APIs or for handling different types of data.
// You can use the | operator to create a union type. This means that the variable can be of either type.

type StringOrNumber = string | number; // Union type

let value: StringOrNumber = 'Hello';

console.log(value); // Output: Hello

value = 42; // Reassigning to a number
console.log(value); // Output: 42

let password: string | number = '12345'; // Union type

type UserInfoWithUnion = {
    first: string;
    last: string;
    age: number;
};
type UserInfoWithUnion2 = {
    email: string;
    password: string;
};

let userInfo: UserInfoWithUnion | UserInfoWithUnion2 = {
    first: 'Hetu',
    last: 'Patel',
    age: 21,
    email: 'hetu@gmail.com',
    password: '12345',
};
console.log(userInfo); // Output: { first: "Hetu", last: "Patel", age: 21,  email: 'hetu@gmail.com', password: '12345'}

let items1: (string | number)[] = ['apple', 1, 'banana', 2, 'orange', 3]; // Array of strings and numbers
console.log(items1); // Output: ["apple", 1, "banana", 2, "orange", 3]

//Literal Types => Literal types allow you to specify the exact value that a variable can have. This can be useful for creating more specific types or for creating enums.
// You can use string literals, number literals, or boolean literals to create literal types. This means that the variable can only have the specified value.

type Direction = 'up' | 'down' | 'left' | 'right'; // Literal type

let move: Direction = 'up'; // Valid assignment
console.log(move); // Output: up

//move = "backward"; // Error: Type '"backward"' is not assignable to type 'Direction'.

//Tuple Types => Tuple types allow you to specify an array with a fixed number of elements, where each element can have a different type. This can be useful for creating complex data structures or for handling multiple return values from a function.
// You can use the [type1, type2, ...] syntax to create a tuple type. This means that the array must have the specified number of elements and types.
// TypeScript will give you an error if you try to assign a value of a different type or number of elements to the tuple.

let tuple: [string, number] = ['apple', 1]; // Tuple type with a string and a number
console.log(tuple); // Output: ["apple", 1]

let tuple1: [string, number, boolean] = ['apple', 1, true]; // Tuple type with a string, number, and boolean
console.log(tuple1); // Output: ["apple", 1, true]

type UserTuple = [string, number, boolean]; // Tuple type alias
let userTuple: UserTuple = ['Hetu', 21, true]; // Tuple type with a string, number, and boolean
console.log(userTuple); // Output: ["Hetu", 21, true]

//Destructuring Tuples => You can use destructuring to extract values from a tuple into separate variables. This can make your code more readable and easier to work with.

let myTuple: [string, number] = ['apple', 1]; // Tuple type with a string and a number
let [fruit, quantity] = myTuple; // Destructuring the tuple
console.log(fruit); // Output: apple
console.log(quantity); // Output: 1

let products: (string | number)[] = ['apple', 1, 'banana', 2, 'orange', 3]; // Array of strings and numbers
console.log(products); // Output: ["apple", 1, "banana", 2, "orange", 3]

//Enums => Enums allow you to define a set of named constants. This can be useful for creating more readable code or for defining a set of related values.
// You can use the enum keyword to create an enum. This means that the enum will have a set of named constants that can be used in your code.
// TypeScript will give you an error if you try to assign a value that is not in the enum.

enum Color {
    Red,
    Green,
    Blue,
} // Enum type
console.log(Color.Red); // Output: 0 (default value starts from 0)

enum Weekday {
    Sunday = 1, // You can also specify the starting value of the enum
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
}
console.log(Weekday.Monday); // Output: 2 (Monday is the second day of the week)
console.log(Weekday[2]); // Output: Monday (Accessing the enum value by its index)

enum Wheather {
    Sunny = 'Sunny',
    Rainy = 'Rainy',
    Cloudy = 'Cloudy',
    Windy = 'Windy',
} // Enum type with string values
console.log(Wheather.Sunny); // Output: Sunny


//OOP => Object-oriented programming (OOP) is a programming paradigm that uses objects to represent data and methods to manipulate that data. TypeScript supports OOP concepts such as classes, inheritance, encapsulation, and polymorphism.

// Classes => Classes are used to create objects with properties and methods. In TypeScript, you can define a class using the class keyword. You can also specify the types of properties and methods in the class using annotations.
// You can create an instance of a class using the new keyword. This means that you can create multiple objects with the same structure and behavior.

class Person1 {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
let person1 = new Person1('Hetu', 21); // Creating an instance of the Person class
console.log(person1.name); // Output: Hetu
console.log(person1.age); // Output: 21

person1.greet(); // Output: Hello, my name is Hetu and I am 21 years old.


//Access Modifiers => Access modifiers are used to control the visibility of class members (properties and methods). TypeScript supports three access modifiers: public, private, and protected.
// There are three access modifiers in TypeScript: public, private, and protected.

// Public => Public members are accessible from anywhere in the code. This is the default access modifier if none is specified.
// Public members can be accessed from outside the class and from subclasses.
// Private => Private members are only accessible within the class. They cannot be accessed from outside the class or from subclasses.
// Proyected => Protected members are accessible within the class and in subclasses. They cannot be accessed from outside the class.

class Human {
    private first: string;
    public last: string;

    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;
    }
}

let human = new Human('Hetu', 'Patel'); // Creating an instance of the Human class
console.log(human); // Output: Human { first: "Hetu", last: "Patel" }

// console.log(human.first); // Error: Property 'first' is private and only accessible within class 'Human'.

console.log(human.last); // Output: Patel (public property can be accessed)

//Getters and Setters => Getters and setters are special methods that allow you to access and modify private properties in a class. This can be useful for encapsulating the internal state of an object and providing a controlled interface for accessing and modifying that state.
// You can use the get and set keywords to define getters and setters in TypeScript. This means that you can create methods that allow you to access and modify private properties in a class.

class Person2 {
    private _name: string; // Private property

    constructor(name: string) {
        this._name = name;
    }

    // Getter for the name property
    get name(): string {
        return this._name;
    }

    // Setter for the name property
    set name(value: string) {
        this._name = value;
    }
}

// Creating an instance of the Person class
let person2 = new Person2('Alex');
console.log(person2.name); // Output: Alex


// Interfaces => Interfaces are used to define the structure of an object. They allow you to specify the types of properties and methods in an object without creating a concrete implementation. This can be useful for creating reusable types or for defining the shape of data that will be used in your code.

// You can use the interface keyword to create an interface. This means that the interface will have a set of properties and methods that can be implemented by classes or objects.

// TypeScript will give you an error if you try to assign a value that does not match the interface.
// This means that you can create objects that conform to the interface and use them in your code.

interface Computer {
    name: string;
    ram: number;
    hdd: number;
}

const computerExample: Computer = {
    name: 'Dell',
    ram: 16,
    hdd: 512,
}; // Object that conforms to the Computer interface
console.log(computerExample); // Output: { name: "Dell", ram: 16, hdd: 512 }

interface Movie {
    readonly name: string;
    rating: number;
    genra?: string;
}

const movie1: Movie = {
    name: 'Inception',
    rating: 8.8,
    genra: 'Sci-Fi',
};
console.log(movie1); // Output: { name: "Inception", rating: 8.8, genra: "Sci-Fi" } 
// movie1.name = "Avatar"; // Error: Cannot assign to 'name' because it is a read-only property.

//Interface for function

interface AddFunction {
    (a: number, b: number): number;
}
const add: AddFunction = (a, b) => a + b;
const sub: AddFunction = (a, b) => a - b

console.log(add(5, 10)); // Output: 15
console.log(sub(5, 10)); // Output: -5

interface Person3 {
    name: string; 
    age: number;
    greet(): void; // Method signature
} 
function greetPerson(person4: Person3) {
    console.log(`Hello, my name is ${person4.name} and I am ${person4.age} years old.`);
}
const person5: Person3 = {
    name: 'Hetu',
    age: 21,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    },
};
greetPerson(person5); // Output: Hello, my name is Hetu and I am 21 years old.
person5.greet(); // Output: Hello, my name is Hetu and I am 21 years old.

interface Song {
    songName: string;
    singer: string;
    printInfo(): void; // Method signature
}
const song1 : Song = {
    songName: 'Shape of You',
    singer: 'Ed Sheeran',
    printInfo() {
        console.log(`Song Name: ${this.songName}, Singer: ${this.singer}`);
    },
};
song1.printInfo(); // Output: Song Name: Shape of You, Singer: Ed Sheeran


interface MovieDetails {
    readonly name: string; // Readonly property
    rating: number; // Regular property
    printMovieInfo(name: string, price: number, rating: number): string | number; // Method signature
}
interface MovieGenre extends MovieDetails {
    genre: string; // Additional property
}
const movie: MovieGenre = {
    name: 'Inception',
    rating: 8.8,
    genre: 'Sci-Fi',
    printMovieInfo(name, price, rating) {
        return `Movie Name: ${name}, Price: ${price}, Rating: ${rating}`;
    },
};
console.log(movie.printMovieInfo('Inception', 10, 8.8)); // Output: Movie Name: Inception, Price: 10, Rating: 8.8
console.log(movie.name); // Output: Inception

//Interface for class
interface Vehicle {
    start(): void;
    stop(): void;
}
class Car implements Vehicle {
    start() {
        console.log('Car started');
    }
    stop() {
        console.log('Car stopped');
    }
}
const car = new Car(); // Creating an instance of the Car class
car.start(); // Output: Car started
car.stop(); // Output: Car stopped

//Decration Merging => Declaration merging is a feature in TypeScript that allows you to define multiple declarations for the same name. This can be useful for extending existing types or for creating more flexible APIs.
// TypeScript will merge the declarations into a single type, allowing you to use the combined properties and methods in your code.
// This means that you can create multiple declarations for the same name and TypeScript will combine them into a single type.

interface Person6 {
    name: string;
    age: number;
}
interface Person6 {
    email: string;
    phone: string;
}
const person6: Person6 = {
    name: 'Hetu',
    age: 21,
    email: 'hetu@gmail.com',
    phone: '1234567890',
};
console.log(person6); // Output: { name: 'Hetu', age: 21, email: 'hetu@gmail.com', phone: '1234567890' }

// The merged interface now has all the properties from both declarations

//Generics => Generics allow you to create reusable components and functions that can work with different types. This can be useful for creating flexible APIs or for handling different types of data without losing type safety.
// You can use the <T> syntax to create a generic type. This means that the function or class can work with any type specified when it is used.
// TypeScript will infer the type based on the arguments passed to the function or class.
// This means that you can create functions and classes that can work with different types without losing type safety.

function printNumber(item: number, defaultValue: number): [number, number] {
    return [item, defaultValue];
}
const num = printNumber(5, 10); // Output: [5, 10]
console.log(num); // Output: [5, 10]


function printString(item: string, defaultValue: string): [string, string] {
    return [item, defaultValue];
}
const str = printString('Hello', 'World'); // Output: ['Hello', 'World']
console.log(str); // Output: ['Hello', 'World']


function printArray<T>(item: T[], defaultValue: T[]): [T[], T[]] {
    return [item, defaultValue];
}
const arr = printArray([1, 2, 3], [4, 5, 6]); // Output: [[1, 2, 3], [4, 5, 6]]
console.log(arr); // Output: [[1, 2, 3], [4, 5, 6]]


function printArray1<T>(item: T[], defaultValue: T[]): [T[], T[]] {
    return [item, defaultValue];
}
const arr1 = printArray1(['apple', 'banana', 'orange'], ['grape', 'kiwi']); // Output: [['apple', 'banana', 'orange'], ['grape', 'kiwi']]
console.log(arr1); // Output: [['apple', 'banana', 'orange'], ['grape', 'kiwi']]

const arr2 = printArray1([1, 2, 3], [4, 5, 6]); // Output: [[1, 2, 3], [4, 5, 6]]
console.log(arr2); // Output: [[1, 2, 3], [4, 5, 6]]

 