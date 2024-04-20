// //Question 142: Create a Promise that resolves with "Hello, World!" after 2 seconds.

// Explain & TIP: Promises in JavaScript are used for asynchronous computations and can be in one of these states: pending, fulfilled, or rejected. A Promise that resolves after a delay demonstrates how to handle operations that take some time to complete, like fetching data or timing events.

// //solution:-
// Promises in JavaScript are a way to handle asynchronous operations. They represent a value which might be available now, or in the future, or never. Promises are used to simplify the handling of asynchronous operations, especially when dealing with multiple asynchronous calls or chaining them together.

//syntax:
// const myPromise = new Promise((resolve, reject) => {
//     // Asynchronous operation or any computation
//     // If the operation is successful, call resolve(value)
//     // If there's an error, call reject(error)
//   });
  //const myPromise: 
  //This declares a variable named myPromise which will hold the Promise object.

// new Promise((resolve, reject) => { ... }): This creates a new Promise object. The Promise constructor takes a function as an argument. This function, often referred to as the "executor function," is executed immediately by the Promise implementation, passing in two functions: resolve and reject.


// resolve(value): This function is called when the asynchronous operation or computation is successful. It resolves the promise with the provided value. Any value passed to resolve will be received by the .then() handler attached to the Promise.


// reject(error): This function is called when an error occurs during the asynchronous operation or computation. It rejects the promise with the provided error. Any error passed to reject will be received by the .catch() handler attached to the Promise.

//created promise
const mypromise=new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Hello world");
        
        
    },2000);
});
//Promise Handling: While I've correctly created the Promise, but need to handle the result of the Promise using .then() method or async/await syntax to actually print the resolved value. In code, I've created the Promise, but I haven't added any code to handle its resolution.To handle the resolved value of the Promise, I can use the .then() method or async/await syntax. 

//mypromise.then((message) => console.log(message));

async function printMessage() {
    const message = await mypromise;
    console.log(message);
}
printMessage();
// Author-HUMA MOHSIN