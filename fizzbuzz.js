// Write a program that takes a user’s input and prints the numbers 
// from one to the number the user entered. However, for multiples of three 
// print Fizz instead of the number and for the multiples of five print Buzz. 
// For numbers which are multiples of both three and five print FizzBuzz.


let number = prompt("Please enter a number: ");    // When a user inputs a number

for (i = 1; i <= number; i++) {                    // Loop from 1 to the entered number

    if (i % 3 === 0 && i % 5 === 0) {              // If the current number is divisible by 3 and 5 then print "FizzBuzz"
        console.log("FizzBuzz");            
    } else if (i % 3 === 0) {                      // If the current number is divisible by 3 then print "Fizz
        console.log("Fizz");
    } else if (i % 5 === 0) {                      // If the current number is divisible by 5 then print "Buzz"
        console.log("Buzz");
    } else {                                       // Otherwise print the current number  
        console.log(i);
    }

};



