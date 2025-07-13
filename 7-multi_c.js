let x = process.argv[2];
let number = Number (x);
if (!Number.isInteger(number)) {
    console.log ("Missing number of occurrences");
} else {
     for (let i = 0; i < number; i++) {
         console.log ("C is fun");
     }
}
 
