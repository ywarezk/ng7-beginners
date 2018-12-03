// TypeScript

// Variable Declaration

// var
// scope is functional

var myNumber = 10;
var myString;

// let
// scope is in the block

let myNumber2 = 20;
let myString2;

// const 
// scope is in the block

const myNumber3 = 10;
// myNumber3 = 40; // Error! const only single assignment

// difference is variable scope


const myArray = [];
myArray.push(10);


// Static types

// primitives

// number, string, boolean

const myNumber4 : number = 10;
var myString3 : string = 'hello world';
// myString3 = 10; // Error!
let myBoolean : boolean = true;

// advanced types

// array

const myNumbersArray: Array<number> = [];
myNumbersArray.push(10);
// myNumbersArray.push('sadfsadf'); // Error!

const myStringNumberArray : Array<number | string> = ['dsfg', 'sfdgs', 10];
myStringNumberArray.push(10);
myStringNumberArray.push('dgfdh');

// Object
// json
// dictionary

const myBooleanMap: {[key: string]: number[]} = {
    key1: [1,2,3],
}

// any

let myAny: any = 10;


// type prediction

let myNumber5: any = 20;
myNumber5 = 'sadfgfdsg';

// functions

function sayHello(message: string = 'hello world', index?: number): number {
    return message.length;
}

sayHello(undefined, 10);

// classes

class Person {
    private _greeting: string;

    constructor(public age: number, _greeting: string = 'hello') {
        this._greeting = _greeting;
    }

    public sayHello(): string {
        // "", '', ``
        return `
            lljlkasjgfdlksfdg
            ${10 + 10}
            sldfjgsdfg
            sdfgdshgf
            ${this._stamPrivate()}
            sdfgfdgh
            ${this._greeting}
        `;
    }

    private _stamPrivate() {
        console.log('hello');
    }

}

// inheritance

class Student extends Person {
    constructor(public grade: string, age: number, _greeting: string) {
        // other command 
        super(age, _greeting); // will call the constructor of parent
    }

    sayHello(): string {
        let msg = super.sayHello();
        return msg + ` and my grade is: ${this.grade}`;
    }
}

// instance of classes

const person = new Person(33, 'howdy');

const student = new Student('a+', 33, 'howdy');

student.sayHello();

// abstract class

// i cannot create instance of abstract class
// // i have to extend it and create instance of the child

abstract class Person2 {
    sayHello() {
        return 'hello';
    }

    abstract myAge(): number;
}

// const person2 = new Person2(); // Error!

class Student2 extends Person2 {
    myAge() {
        return 33;
    }
}

const student3: Student2 = new Student2();

// interface

interface ILength {
    length : number;
    sayHello?: () => string;
}

const myFunction: (msg: string) => number = function(msg: string) {
    return 33;
}

class MyArray implements ILength {
    public length: number = 10;

    // sayHello(): number { // Error!
    //     return 33;
    // }
}

// Generic Types
// <T> T is type

class Student4<T extends ILength> /*implements ILength, Interface2*/ {
    constructor(public grade: T) {}

    getGrade(): T {
        return this.grade;
    }
}

// const student4: Student4<number> = new Student4(33); // Error!
const student5: Student4<string> = new Student4('A+');

// this
// this is in function and classes
// we expect it to reprenset the class instance
// this can change!
// this is set during runtime
// the object that calls the function

export class Person3 {
    constructor(public age: number = 33) {
        this.birthday2 = this.birthday2.bind(this)
    }

    birthday() {
        this.age++;
    }

    birthday2() {
        this.age++;
    }

    birthday3 = () => {
        this.age++;
    }

    birthday4() {
        setTimeout(() => {
            console.log(this.age)
        }, 1000);
    }
}

const person3 : Person3 = new Person3();

// lambda functions
// arrow functions

const myFunc2 = (msg: string, age: number): string => {
    // this; // this in lambda function is permenant
    return msg;
}

const myFunc3 = (msg: string): string => msg;
const myFunc4 = msg => msg;

// (msg) => {
//    return console.log(msg)
//}

person3.birthday(); // this will be person3

const a = {birthday2: person3.birthday, age: 20};
a['birthday2'](); // this will be a

console.log(person3.age);
console.log(a.age);


export function printThis() {
    console.log(this);
}

const a2 = {func: printThis};
a2['func']()

// decorators

// @age()
// class Person {
//     @Input() grade: string;
// }

// Person` => class with more abilities

// modules

// seperate our project files
// in each file we will choose what to expose or export
// in different files we can choose to import stuff from other files




















