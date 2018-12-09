

// timer promise
// timer will run code after 1 sec
// promise that wrap our timer
// promise will move from pending to resolved after 1 sec
// send to listeners 'hello world'


const timerPromise: Promise<string> = new Promise((resolve, reject) => {
    

    setTimeout((/*some condition*/) => {
        console.log('async timer');
        resolve('hello world to all listeners');

        // if (some condition) {
            // resolve('dgfdsfgh')
        // } else {
            //  reject(new Error('something has happend'))
        // }
        

        // resolve or reject must be called once
    }, 1000);
});

/*const newPromise: Promise<number | boolean> = */timerPromise.then(
    // resolve
    (msg: string) => {
        console.log(msg);
        return msg.length;
    },

    // reject
    (err: Error) => {
        return false;
        //throw new Error('something else happend');
    }
)
.then((numberOrBoolean: number | boolean) => {

}, () => {

})
//.then()
//.then()

// promise chaining

// promise<data1> => promise<data2> => promise<data3> ...  

// async await functions

// async function
// this function always returns a promise
// the data we send to listeners is determined by what the function returns
// await promise1

async function waitForHelloPromise(): Promise<number> {
    // try {
        const helloWorld = await timerPromise;
        return helloWorld.length;
    // } catch(err) {

    // }
    
}

const asyncLambda = async () => {

}





