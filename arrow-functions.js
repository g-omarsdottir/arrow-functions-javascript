/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbers (a, b) {
    // Code block
    return a + b;
}

let sum = addTwoNumbers (3, 5);
console.log(sum);

// Arrow Function With Parameters
const addTwoNumbers2 = (a, b) => {
    // Code block
    return a + b;
}
let sum2 = addTwoNumbers2 (3, 5);
console.log(sum2);

// Single Line Arrow Function With Parameters
const addTwoNumbers3 = (a, b) => a + b;
    // also valid - with parantheses: const addTwoNumbers3 = (a, b) => (a + b);
let sum3 = addTwoNumbers2(6, 4);
console.log(sum3);

// Implicit Returns
const saySomething = message => console.log(message);
saySomething('Hello there!');

    // No parameters: include empty parantheses, to tell JS it's a function 
const sayHello = () => console.log('Hello!')
sayHello();

// Returning Multiple Lines
    // Wrap the codeblock in parantheses.
    // Include parantheses in the return, i.e. what this function returns (console.log below).
const returnMultipleLines = () => (
    `<p>
    THis is multiline string
    </p>
    `
) 
console.log(returnMultipleLines());