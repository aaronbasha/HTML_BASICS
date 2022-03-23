/*
ALL ALGORITHMS SHOULD BE WRITTEN AS FUNCTIONS
*/

///bread and butter of array for loops (this for loop is used 10 tines in the basic 13)
for (var i = 0; i < burgers.length; i++)


    // array go in []
    // string is anything inside of ""
    // variable is in () example function --> (burgers)
    // ++ means it's whatever the variable is +1
    // these are all the same
    // sum = sum + 1;
    // sum += 1;
    // sum++; 


    /* 
    1. Print 1-255
    print1To255()
    Print all the integers from 1 to 255. for(1-255 = 0; i < burgers.length; i++)
    */

    function print() {
        for (var countdown = 1; countdown <= 255; countdown++) {
            console.log(countdown)

        }

    }
print()



/* 
2. Print Odds 1-255
printOdds1To255()
Print all odd integers from 1 to 255. 
*/
function print2() {
    for (var oddPrint = 1; oddPrint <= 255; oddPrint = oddPrint + 2) {
        console.log(oddPrint)
    }
}
print2()


/* 
3. Print Ints and Sum 0-255
printIntsAndSum0To255()
Print integers from 0 to 255, and with each integer print the sum so far. 
*/

function printIntsAndSum0To255() {
    var printsum = 0

    for (var intsum = 0; intsum <= 255; intsum = intsum + 1) {
        printsum = printsum + intsum
        console.log(printsum)
        console.log(intsum)

    }

}
printIntsAndSum0To255()

/* 
4. Iterate and Print Array
printArrayVals(arr)
Iterate through a given array, printing each value.
*/
function printarray(arr) {
    for (var amp = 0; amp < arr.length; amp = amp + 1) {
        console.log(arr[amp]);
    }
}
printarray([1,2,3,4,5])

/* 
5. Find and Print Max
printMaxOfArray(arr)
Given an array, find and print its largest element.
*/

// function printMaxOfArray(arr) {
// var max = arr[0];
// for ()


// }

/* 
6. Get and Print Average
printAverageOfArray(arr)
Analyze an array’s values and print the average.
*/
function printAverageOfArray(arr) {
    var sum = 0;
    for (var yo = 0; yo < arr.length; yo = yo = 1) {
        sum += arr[yo];

    }
    console.log(printAverageOfArray)

}


/*
7. Array with Odds
returnOddsArray1To255()
Create an array with all the odd integers between 1 and 255 (inclusive).
*/
function returnOddsArray1To255() {
    for (odd = 1; odd <= 255; odd = odd + 2) {
        console.log(odd)
    }

}

returnOddsArray1To255()




/*
8. Square the Values
squareArrayVals(arr)
Square each value in a given array, returning that same array with changed values.
*/



/*
9. Greater than Y
returnArrayCountGreaterThanY(arr, y)
Given an array and a value Y, count and print the number of array values greater than Y.
*/
function returnArrayCountGreaterThanY(arr, y) {

}


/*
10. Zero Out Negative Numbers
zeroOutArrayNegativeVals(arr)
Return the given array, after setting any negative values to zero.
*/



/*
11. Max, Min, Average
printMaxMinAverageArrayVals(arr)
Given an array, print the max, min and average values for that array.
*/

    // read arr[i] as "the current element in the array"


/*
12. Shift Array Values
shiftArrayValsLeft(arr)
Given an array, move all values forward (to the left) by one index, dropping the first value and leaving a 0 (zero) value at the end of the array.
*/



/*
13. Swap String For Array Negative Values
swapStringForArrayNegativeVals(arr)
Given an array of numbers, replace any negative values with the string 'Dojo'.
*/

