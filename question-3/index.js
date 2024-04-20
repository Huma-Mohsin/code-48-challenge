"use strict";
// //Question 144: Explain the use of the Promise.all() method with an example.
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: Promise.all() takes an iterable of Promises and returns a single Promise that resolves when all of the Promises in the iterable have resolved or when the iterable contains no Promises. It is rejected if any of the passed Promises are rejected. This method is useful for aggregating the results of multiple promises.
//solution
//The Promise.all() method is used to handle multiple asynchronous operations simultaneously. It takes an iterable (such as an array) of Promises as input and returns a single Promise. This returned Promise resolves when all of the Promises in the iterable have resolved, or it rejects as soon as one of the Promises in the iterable is rejected.
// This method is particularly useful when you need to perform multiple asynchronous operations concurrently and wait for all of them to complete before proceeding with further actions. It allows you to aggregate the results of multiple Promises into a single Promise, simplifying the management of asynchronous code.
//consider various asynchronous operations having some promises:-
function asynchronous_operation1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("welcome to the promises world");
        }, 2000);
    });
}
function asynchronous_operation2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Consider The Behaviour Of Promises");
        }, 3000);
    });
}
function asynchronous_operation3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Remember Promises");
        }, 1000);
    });
}
//now, we can use Promise.all() to execute all these asynchronous operations concurrently and wait for all of them to complete:
//// Array of functions having some Promises
const async_promises = [asynchronous_operation1(), asynchronous_operation2(), asynchronous_operation3()];
//using promise.all() to wait for all promises.
Promise.all(async_promises)
    .then((results) => {
    console.log("All asyncOperations completed successfully....");
    console.log(results);
})
    .catch((error) => {
    console.log("An Error Occured:", error);
});
//Author-Huma MOhsin
