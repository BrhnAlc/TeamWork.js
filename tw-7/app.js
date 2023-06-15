//!1. What is the function to stop an interval timer?
//!1. Bir aralık zamanlayıcısını durdurma işlevi nedir?
A. stopTimer
B. clearInterval
C. shutdownTimer
D. clearTimer
2. What are 2 native functions to run code asynchronously in JavaScript ?
A. timeout - setTimeout
B. startInternal - setInterval
C. setTimeout - setInterval
D. interval - setInterval
3. What is the output of the code below?
let x = 0;
async function test() {
 x += await 2;
 console.log(x);
}
test();
x += 1;
console.log(x);
A. 2 3
B. 0 1
C. 1 2
D. 2 2
TW-07.md 6/14/2023
3 / 7
4. Which method converts JSON data to a JavaScript object?
A. JSON.fromString();
B. JSON.toObject()
C. JSON.stringify()
D. JSON.parse()
5. Why would you choose an asynchronous structure for your code?
A. To use ES6 syntax
B. To ensure that parsers enforce all JavaScript syntax rules when processing your code
C. To ensure that tasks further down in your code aren't initiated until earlier tasks have completed
D. To start tasks that might take some time without blocking subsequent tasks from executing immediately
6. What will be logged to the console?
console.log("I");
setTimeout(() => {
 console.log("love");
}, 0);
console.log("Javascript!");
A.
I
love
Javascript!
B.
I
Javascript!
love
C.
love
I
Javascript!
D. The output may change with each execution of code and cannot be determined.
TW-07.md 6/14/2023
4 / 7
7. Which statement is true about the "async" attribute for the HTML script tag?
A.It can be used for both internal and external JavaScript code.
B.It can be used only for internal JavaScript code.
C.It can be used only for internal or external JavaScript code that exports a promise.
D. It can be used only for external JavaScript code.
8. When would 'results shown' be logged to the console?
let modal = document.querySelector("#result");
setTimeout(function () {
 modal.classList.remove("hidden");
}, 10000);
console.log("Results shown");
A. immediately
B. after 10 second
C. after 10000 seconds
D. after results are received from the HTTP request
9. Which Queue Is Executed First?
// Callback queue
setTimeout(() => console.log("timeout"), 0);
// Microtask queue
Promise.resolve().then(() => console.log("promise"));
A. Callback queue
B. Microtask queue
C. No priority
D. Depends on which one called first
10. How does a function create a closure?
A. It reloads the document whenever the value changes.
B. It returns a reference to a variable in its parent scope.
C. It completes execution without returning.
D. It copies a local variable to the global scope.
TW-07.md 6/14/2023
5 / 7
11. Consider the following async function and its output. What will be displayed to the console when
calling the f() function?
async function f() {
 let result = 'first!';
 let promise = new Promise((resolve, reject) => {
 setTimeout(() => resolve('done!'), 1000);
 });
 result = await promise;
 console.log(result);
}
f();
A. first!
B. done!
C. JavaScript error
D. Something else
12. What will the output be?
Promise.resolve('Success!')
 .then(data => {
 return data.toUpperCase()
 })
 .then(data => {
 console.log(data)
 })
A. print "Success!" and "SUCCESS!"
B. print "Success!"
C. print "SUCCESS!"
D. nothing prints
Interview Questions 15m
1. Can you explain what asynchronous programming is?
2. How can you convert a callback-based function to a Promise-based function?
TW-07.md 6/14/2023
6 / 7
3. How does async/await help with performance and scalability?
4. Can you explain the difference between an async function and a regular function in JavaScript?