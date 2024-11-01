
//Part 1 FizzBuzz
//Loop from 1 to 100
//If number is divisible by 3, log "Fizz"
//if number is divisible by 5, log "Buzz"
//If number is divisible by both, log "FizzBuzz"
//If number is NOT divisible by either, simply log the number
//Remember to interate and committ

function fizzBuzz(n) {

    let result = [];

    for (let i = 1; i <= n; ++i) {
    
        if (i % 3 === 0 && i % 5 === 0) {
        
            result.push("FizzBuzz");
        } 
        
        else if (i % 3 === 0) {
        
            result.push("Fizz");
        } 
        
        else if (i % 5 === 0) {
        
            result.push("Buzz");
        } 
        else {
            result.push(i.toString());
        }
    }
    return result;
}

let n = 10;
let result = fizzBuzz(n);
console.log(result.join(' '));




//Part 2
//Write script that accomplishes the following:
//Declare an arbitary number "n"
//Create a loop that searches for the next prime number, starting at N, incrememnting from there
//As soon as you find the prime number, log that number and exit loop

//Part 3
//Solve practical problem from string processing
//Write scrip that will
//Loop through the characters of given CVS string
//Store each cell of data in a variable
//When you eencounter "\r\n" sequence, move to the next row
//Log each row of data, console.log(cell1, cell2, etc) works
//Assumptions 4 Cells per row, no escaped characters other than \n"



//Use the example string provided above to test your program. Once you are confident it is working correctly, try the following string to see if your program works properly with other data.
//Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232


