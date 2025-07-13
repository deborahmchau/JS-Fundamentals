let arg1 = process.argv[2];
let number = Number (arg1);
if (Number.isInteger(number)) {
    console.log ("My number: " + number);
} else {
    console.log ("Not a number");
}