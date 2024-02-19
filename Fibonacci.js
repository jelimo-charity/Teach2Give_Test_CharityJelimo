// Question 2: Fibonacci Sequence
// Write a program to generate the Fibonacci sequence up to 100.

/* The Fibonacci sequence is the integer sequence where the first two terms are 0 and 1.
After that, the next term is defined as the sum of the previous two terms. */

const getFibonacci = () => {
    // Initialize the first two terms of the Fibonacci sequence
    let term1 = 0;
    let term2 = 1;
    let sum;

    // for loop to generate Fibonacci sequence up to 100
    for (let num = 0; term2 <= 100; num++) {
        console.log(term1); // prints current term (term1)
        sum = term1 + term2; // get the next term in the sequence
        term1 = term2; //update terms for the next iteration
        term2 = sum;  
    }
}
getFibonacci();
