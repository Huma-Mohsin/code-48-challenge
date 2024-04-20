"use strict";
// //Question 143: Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: The .then() method is called when a Promise is successfully resolved, while .catch() is called when a Promise is rejected. Together, they provide a powerful and readable way to handle asynchronous success and error scenarios.
//creating a function that returns promise.
function simplePromise(value) {
    return new Promise((resolve, reject) => {
        //synchronous operation
        setTimeout(() => {
            if (value) {
                console.log("promise resolved with value :", value);
            }
            else {
                console.log("promise rejected!!! ");
            }
        }, 2000);
    });
}
//call a promise
simplePromise(null)
    //handle resolution and rejection
    // This block will execute if the Promise is successfully resolved
    .then((result) => {
    console.log(result);
})
    //  // This block will execute if the Promise is rejected
    .catch((error) => {
    console.log(error); //Author- HUMA MOHSIN
});
//summary
// This demonstrates how to handle both resolution and rejection of a Promise using .then() and .catch() methods in a simple scenario:-
//1-  We define a simplePromise() function that returns a Promise. It takes a value parameter and resolves the Promise with a message containing that value if value is truthy, otherwise, it rejects the Promise with an error message.
//2-  We call the simplePromise() function with the value "hello" and chain the .then() and .catch() methods to handle the resolution and rejection of the Promise.
//3-  If the Promise is successfully resolved, the function passed to .then() will be executed, logging the message to the console.
//4-  If the Promise is rejected, the function passed to .catch() will be executed, logging the error message to the console.
