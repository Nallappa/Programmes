//How to get the second highest value from the array.
function SecondHighestvalue(arrayofnubers) {
    // let arrayofnubers: number[] = [10,100,98,55,66,87,12,32,08,49,20,70];
    var finalarray;
    for (var i = 0; i < arrayofnubers.length; i++) {
        for (var j = 0; j < arrayofnubers.length - i - 1; j++) {
            var tempval = void 0;
            if (arrayofnubers[j] < arrayofnubers[j + 1]) {
                tempval = arrayofnubers[j];
                arrayofnubers[j] = arrayofnubers[j + 1];
                arrayofnubers[j + 1] = tempval;
            }
        }
    }
    console.log(arrayofnubers[1]);
}
SecondHighestvalue([10, 100, 98, 55, 66, 87, 12, 32, 08, 49, 20, 70]);
//How to get the second highest value from the array.
function Patterns() {
    // let arrayofnubers: number[] = [10,100,98,55,66,87,12,32,08,49,20,70];
    var k = 0;
    for (var i = 1; i <= 5; i++) {
        for (var j = 1; j <= i + k; j++) {
            console.log(j);
        }
        console.log("\n");
    }
    k = k + 1;
}
Patterns();
//How to remove all the white spaces.
function removeWhiteSpaces(inputstring) {
    // let inputstring :  string = "let do this";
    var inputstringarr = inputstring.split(" ");
    var finalstring = "";
    inputstringarr.forEach(function (stringval) {
        finalstring = finalstring + stringval;
    });
    console.log(finalstring);
}
removeWhiteSpaces('let do this');
//How to get the freqency of the charcter and its count. Ex: Nallappa N:1 a:3 l:2 p:2
function getFrequency(inpString) {
    // let inpString: string = 'Nallappa';
    var finalObject = {};
    for (var index = 0; index < inpString.length; index++) {
        var character = inpString.charAt(index);
        if (finalObject[character]) {
            finalObject[character]++;
        }
        else {
            finalObject[character] = 1;
        }
    }
    console.log(finalObject);
}
getFrequency('Nallappa');
// How to Remove Duplicate Values from a JavaScript Array
function removeduplicates(inpArray) {
    var finalarray = [];
    for (var index = 0; index < inpArray.length; index++) {
        var currentval = inpArray[index];
        if (finalarray.indexOf(currentval) === -1) {
            finalarray.push(currentval);
        }
    }
    console.log(finalarray);
}
removeduplicates(["John", "Peter", "Clark", "Harry", "John", "Alice"]);
//How to reverse a number without using the reverse funciton
function reverseNumber(inpNumber) {
    var reversedNumber = 0;
    var numtoReverse = inpNumber;
    while (numtoReverse > 0) {
        var digit = numtoReverse % 10;
        reversedNumber = reversedNumber * 10 + digit;
        numtoReverse /= 10;
    }
    console.log(reversedNumber);
    return reversedNumber;
}
console.log(reverseNumber(100));
//Get Duplicates values with the count
function getDuplicates(inpString) {
    var finalObject = {};
    for (var index = 0; index < inpString.length; index++) {
        var character = inpString[index];
        if (finalObject[character]) {
            finalObject[character]++;
        }
        else {
            finalObject[character] = 1;
        }
    }
    console.log(finalObject);
}
getDuplicates(["John", "Peter", "Clark", "Harry", "John", "Alice"]);
//Reverse a String without using reverse.
//Get the Duplicates only from the array
function getduplicates(inpArray) {
    var finalarray = {};
    var finalObject = {};
    inpArray.forEach(function (element) {
        if (finalObject[element]) {
            finalObject[element] = finalObject[element] + 1;
        }
        else {
            finalObject[element] = 1;
        }
    });
    for (var finalObjectval in finalObject) {
        if (finalObject[finalObjectval] >= 2) {
            // finalarray.push(finalObjectval);
            finalarray[finalObjectval] = finalObject[finalObjectval];
        }
    }
    console.log(finalarray);
}
getduplicates(["John", "Peter", "Clark", "Harry", "John", "Alice", "Alice"]);
function regularExprssion(stringval) {
    // let regexp = /^[a-z0-9]+$/i;
    // var regex = new RegExp("^[a-zA-Z0-9\s]+$");
    var finalstring;
    finalstring = stringval.replace(new RegExp('^[a-z0-9]+$'), '');
    console.log(finalstring);
}
regularExprssion('Nalli1234+65   %&');
//Programme to check palidrome const reverseString = string.split('').reverse().join('');
