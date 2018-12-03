"use strict";
// TypeScript
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// Variable Declaration
// var
// scope is functional
var myNumber = 10;
var myString;
// let
// scope is in the block
var myNumber2 = 20;
var myString2;
// const 
// scope is in the block
var myNumber3 = 10;
// myNumber3 = 40; // Error! const only single assignment
// difference is variable scope
var myArray = [];
myArray.push(10);
// Static types
// primitives
// number, string, boolean
var myNumber4 = 10;
var myString3 = 'hello world';
// myString3 = 10; // Error!
var myBoolean = true;
// advanced types
// array
var myNumbersArray = [];
myNumbersArray.push(10);
// myNumbersArray.push('sadfsadf'); // Error!
var myStringNumberArray = ['dsfg', 'sfdgs', 10];
myStringNumberArray.push(10);
myStringNumberArray.push('dgfdh');
// Object
// json
// dictionary
var myBooleanMap = {
    key1: [1, 2, 3],
};
// any
var myAny = 10;
// type prediction
var myNumber5 = 20;
myNumber5 = 'sadfgfdsg';
// functions
function sayHello(message, index) {
    if (message === void 0) { message = 'hello world'; }
    return message.length;
}
sayHello(undefined, 10);
// classes
var Person = /** @class */ (function () {
    function Person(age, _greeting) {
        if (_greeting === void 0) { _greeting = 'hello'; }
        this.age = age;
        this._greeting = _greeting;
    }
    Person.prototype.sayHello = function () {
        // "", '', ``
        return "\n            lljlkasjgfdlksfdg\n            " + (10 + 10) + "\n            sldfjgsdfg\n            sdfgdshgf\n            " + this._stamPrivate() + "\n            sdfgfdgh\n            " + this._greeting + "\n        ";
    };
    Person.prototype._stamPrivate = function () {
        console.log('hello');
    };
    return Person;
}());
// inheritance
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(grade, age, _greeting) {
        var _this = 
        // other command 
        _super.call(this, age, _greeting) || this;
        _this.grade = grade;
        return _this;
    }
    Student.prototype.sayHello = function () {
        var msg = _super.prototype.sayHello.call(this);
        return msg + (" and my grade is: " + this.grade);
    };
    return Student;
}(Person));
// instance of classes
var person = new Person(33, 'howdy');
var student = new Student('a+', 33, 'howdy');
student.sayHello();
// abstract class
// i cannot create instance of abstract class
// // i have to extend it and create instance of the child
var Person2 = /** @class */ (function () {
    function Person2() {
    }
    Person2.prototype.sayHello = function () {
        return 'hello';
    };
    return Person2;
}());
// const person2 = new Person2(); // Error!
var Student2 = /** @class */ (function (_super) {
    __extends(Student2, _super);
    function Student2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Student2.prototype.myAge = function () {
        return 33;
    };
    return Student2;
}(Person2));
var student3 = new Student2();
var myFunction = function (msg) {
    return 33;
};
var MyArray = /** @class */ (function () {
    function MyArray() {
        this.length = 10;
        // sayHello(): number { // Error!
        //     return 33;
        // }
    }
    return MyArray;
}());
// Generic Types
// <T> T is type
var Student4 = /** @class */ (function () {
    function Student4(grade) {
        this.grade = grade;
    }
    Student4.prototype.getGrade = function () {
        return this.grade;
    };
    return Student4;
}());
// const student4: Student4<number> = new Student4(33); // Error!
var student5 = new Student4('A+');
// this
// this is in function and classes
// we expect it to reprenset the class instance
// this can change!
// this is set during runtime
// the object that calls the function
var Person3 = /** @class */ (function () {
    function Person3(age) {
        if (age === void 0) { age = 33; }
        var _this = this;
        this.age = age;
        this.birthday3 = function () {
            _this.age++;
        };
        this.birthday2 = this.birthday2.bind(this);
    }
    Person3.prototype.birthday = function () {
        this.age++;
    };
    Person3.prototype.birthday2 = function () {
        this.age++;
    };
    Person3.prototype.birthday4 = function () {
        var _this = this;
        setTimeout(function () {
            console.log(_this.age);
        }, 1000);
    };
    return Person3;
}());
exports.Person3 = Person3;
var person3 = new Person3();
// lambda functions
// arrow functions
var myFunc2 = function (msg, age) {
    // this; // this in lambda function is permenant
    return msg;
};
var myFunc3 = function (msg) { return msg; };
var myFunc4 = function (msg) { return msg; };
// (msg) => {
//    return console.log(msg)
//}
person3.birthday(); // this will be person3
var a = { birthday2: person3.birthday, age: 20 };
a['birthday2'](); // this will be a
console.log(person3.age);
console.log(a.age);
function printThis() {
    console.log(this);
}
exports.printThis = printThis;
var a2 = { func: printThis };
a2['func']();
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
