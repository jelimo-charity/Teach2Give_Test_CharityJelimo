const reverse_Integer = (num) => {
    // Convert the number to a string to handle individual digits
    let numStr = num.toString();

    // Check if the number is negative
    let isNegative = num < 0;

    // Reverse the order of digits
    let reversedStr = numStr.slice(isNegative ? 1 : 0).split('').reverse().join('');

    // Convert the string back to an integer and reapply the negative sign if necessary
    let reversedNumber = isNegative ? -parseInt(reversedStr) : parseInt(reversedStr);

    return reversedNumber;
}
console.log(reverse_Integer(-807)); 
console.log(reverse_Integer(98));  

