const reverseInteger = (num) => {
    // Convert the number to a string to handle individual digits
    let numString = num.toString();

    // Check if the number is negative
    let isNegative = num < 0;

    // Reverse the order of digits
    let reversedString = numString.slice(isNegative ? 1 : 0).split('').reverse().join('');

    // Convert the string back to an integer and reapply the negative sign if necessary
    let reversedNumber = isNegative ? -parseInt(reversedString) : parseInt(reversedString);

    return reversedNumber;
}

// Examples
console.log(reverseInteger(500));  // Output: 5
console.log(reverseInteger(-56));  // Output: -65
console.log(reverseInteger(-90));  // Output: -9
console.log(reverseInteger(91));   // Output: 19
