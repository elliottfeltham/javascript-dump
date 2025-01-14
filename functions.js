// Function that takes one number and returns that number + 7.
function add7(number) {
    return number + 7;
}

console.log(add7(33))

// Function that takes 2 numbers and returns their product.

function sum(a, b) {
    return a + b;
}

console.log(sum(2,4))

// Function that takes a string and returns that string with only the first letter capitalized

function capitalize(word) {
    let string = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    return string;
}

console.log(capitalize("ThIS SHould BEcome A LOT NEater"));

// Function that takes a string and returns the very last letter of that string

function lastLetter(string) {
    return string.slice(-1);
}

console.log(lastLetter("abcdefg"))