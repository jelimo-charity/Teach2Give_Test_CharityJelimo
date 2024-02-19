// Question 1: FizzBuzz
/* Write a program that prints the numbers from 1 to 100. For multiples of 3, print "Fizz"; for
multiples of 5, print "Buzz"; and for numbers that are multiples of both 3 and 5, print
"FizzBuzz". */

// ** This implements the use of conditional statement else if 


const fizzBuzz = () => {
    for (number = 1; number <= 100; number ++) {
        // use modulus to check multiples of 3 and 5
        if(number % 3 === 0 && number % 5 === 0){
            console.log('FizzBuzz');
        }
        // use modulus to check multiples of 3 
        else if(number % 3 === 0){
            console.log('Fizz');
        }
        // use modulus to check multiples of 5
        else if(number % 5 === 0){
            console.log('Buzz');
        }
        // print the number itself if not multiple of 3 and 5
        else{
            console.log(number);
        }
    }
}
fizzBuzz();
