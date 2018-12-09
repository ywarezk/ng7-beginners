import {Observable, Observer, Subscription, Subject} from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';

// Observable 
// observable defines data stream
// data stream time axis with data pulses along the time axis

// data stream that sends a pulse every second
// the pulse will contain a number
// 0 ... 1 .... 2 .... 3 ....

const intervalObservable: Observable<number> = Observable.create((observer: Observer<number>) => {
    // observer contains next,error, complete

    console.log('interval observable is running');

    let counter = 0;

    const intervalId = setInterval(() => {        
        observer.next(counter);
        counter++;
        if (counter > 5) {
            // observer.complete();
            observer.error(new Error('something happened'));
        }
    }, 1000)

    return function() {
        clearInterval(intervalId);
    }
})

// Promise VS Observable
// promise calls resolve/reject once
// observable can call next multiple times

const sub: Subscription = intervalObservable.subscribe(
    // next
    (index: number) => {
        console.log(index);
    },


    // error
    (err: Error) => {
        console.log('error')
    },

    // complete
    () => {
        console.log('complete')
    }
)

// Promise VS Observable

// Observable is lazy
// Promise is eager

intervalObservable.subscribe(
(counter : number) => console.log(`second listener: ${counter}`), 
(err) => console.log('error in 2nd listener'), 

// complete
() => {
    console.log('second listener close');
}
);

// Promise VS Observable

// observable async code duplicates for every listener
// if 1000k listeners 1000k times my async code will run
// Promise if 1000k listeners async code will run once for all.

// closing observable

// close the observable from within the async code
// - error / complete

// close the connection between data stream and listener
// - unsubscribe

setTimeout(() => {
    console.log('unsubscribing');
    sub.unsubscribe();
}, 2000)

// Promise VS Observalbe
// Observable is cancelable

// operators

// import someOperator from 'rxjs/operators';

// observable.pipe(
    //someOperator
//)

const stringObservable: Observable<string> = intervalObservable.pipe(
    map((counter: number) => counter.toString()),
    debounceTime(3000),
    distinctUntilChanged()
)

// Subject

// 1 - one shout many listeners like promise
// 2 - we call next from outside and not from async function 

const intervalSubject: Subject<string> = new Subject();

intervalSubject.next('hello world');

setInterval(() => {
    intervalSubject.next('foo bar');
}, 1000);

intervalSubject.subscribe((msg: string) => {
    
})
