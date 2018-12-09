"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
// Observable 
// observable defines data stream
// data stream time axis with data pulses along the time axis
// data stream that sends a pulse every second
// the pulse will contain a number
// 0 ... 1 .... 2 .... 3 ....
var intervalObservable = rxjs_1.Observable.create(function (observer) {
    // observer contains next,error, complete
    console.log('interval observable is running');
    var counter = 0;
    var intervalId = setInterval(function () {
        observer.next(counter);
        counter++;
        if (counter > 5) {
            // observer.complete();
            observer.error(new Error('something happened'));
        }
    }, 1000);
    return function () {
        clearInterval(intervalId);
    };
});
// Promise VS Observable
// promise calls resolve/reject once
// observable can call next multiple times
var sub = intervalObservable.subscribe(
// next
function (index) {
    console.log(index);
}, 
// error
function (err) {
    console.log('error');
}, 
// complete
function () {
    console.log('complete');
});
// Promise VS Observable
// Observable is lazy
// Promise is eager
intervalObservable.subscribe(function (counter) { return console.log("second listener: " + counter); }, function (err) { return console.log('error in 2nd listener'); }, 
// complete
function () {
    console.log('second listener close');
});
// Promise VS Observable
// observable async code duplicates for every listener
// if 1000k listeners 1000k times my async code will run
// Promise if 1000k listeners async code will run once for all.
// closing observable
// close the observable from within the async code
// - error / complete
// close the connection between data stream and listener
// - unsubscribe
setTimeout(function () {
    console.log('unsubscribing');
    sub.unsubscribe();
}, 2000);
// Promise VS Observalbe
// Observable is cancelable
// operators
// import someOperator from 'rxjs/operators';
// observable.pipe(
//someOperator
//)
var stringObservable = intervalObservable.pipe(operators_1.map(function (counter) { return counter.toString(); }), operators_1.debounceTime(3000), operators_1.distinctUntilChanged());
// Subject
// 1 - one shout many listeners like promise
// 2 - we call next from outside and not from async function 
var intervalSubject = new rxjs_1.Subject();
intervalSubject.next('hello world');
setInterval(function () {
    intervalSubject.next('foo bar');
}, 1000);
intervalSubject.subscribe(function (msg) {
});
