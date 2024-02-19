// Question 4: Capitalize Words
/*Write a program that accepts a string as input, capitalizes the first letter of each word in the
string, and then returns the result string.
Examples:

"hi"=> returns "Hi"
"i love programming"=> returns "I Love Programming" */

const capitalize_Letters = (inputString) => {
    let words = inputString.split(' ');     // Split the string into an array of words
    let capitalized_Letters= words.map(word => word.charAt(0).toUpperCase() + word.slice(1));  // Capitalize the first letter of each wo
    // Join the capitalized words back into a string
    let resultString = capitalized_Letters.join(' ');
    return resultString;
}

console.log(capitalize_Letters("hello jelimo!")); 
console.log(capitalize_Letters("i like adventure")); 
