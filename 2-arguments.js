let args = process.argv.slice(2);
let numberOfArgs = args.length;
if (numberOfArgs === 0) {console.log ("No argument");}
else if (numberOfArgs === 1) {console.log ("Argument found");}
else {console.log ("Arguments found");}