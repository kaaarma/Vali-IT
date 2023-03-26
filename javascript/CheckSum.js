// ADVANCED EXERCISE 4

//const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
//const numbers2 = [22, 33, 5, 10, 99, 5, 1, 66, 23, 15, 33, 3, 3]
/*
   numbers.splice(0,1);
   console.log(numbers)

   numbers.pop()
   console.log (numbers)
*/

// ADVANCED EXERCISE 5
/*
let newNumbers = [];
for (let i = 0; i < numbers.length; i += 2) {
   newNumbers.push(numbers[i]);
}
   console.log(newNumbers)
*/

// ADVANCED EXERCISE 6
/*

    for (let i=0; i< numbers.length; i++) {
       if (numbers2.includes(numbers[i])) {
           console.log(numbers[i])
       }
    }


    let newNumbers = []
    for (let i= 0; i < numbers.length; i++) {
        if (numbers[i] < 10) {
            newNumbers.push(numbers[i]);
        }
    }
    for (let j= 0; j < numbers.length; j++) {
        if (numbers2[j] < 10) {
        newNumbers.push(numbers2[j]);
        }
    }
    result = [...new Set(newNumbers)];
    console.log(result)
*/

// ADVANCED EXERCISE 7

/*
function check() {
    let userAgent = navigator.userAgent;

    if (userAgent.match(/Android | iPhone| iPad | iPod | Windows Phone/i)) {
        document.getElementById("result").innerHTML = "It's a mobile device!";
    }
    else {
        document.getElementById("result").innerHTML = "It's a desktop or laptop!";
    }
    }
*/

// ADVANCED EXERCISE 8

function calculate() {
    let userNr1 = document.getElementById("userNr1").value;
    let userNr2 = document.getElementById("userNr2").value;
    let userNr3 = document.getElementById("userNr3").value;
    console.log(userNr1)
    console.log(userNr2)
    console.log(userNr3)
    if (userNr1.length > 4 || userNr2.length > 4 || userNr3.length > 4) {
        document.getElementById("warning").innerHTML = "One of the numbers is too long!";
    }
    else {
        let stringOfNumbers = String(userNr1) + String(userNr2) + String(userNr3);
        console.log(stringOfNumbers)
        let nrArray = stringOfNumbers.split("").map(Number);
        console.log(nrArray);
        while (nrArray.length > 1) {
            let sum = 0;
            for (let i = 0; i < nrArray.length; i++) {
                sum += nrArray[i]
                }
            nrArray = String(sum).split("").map(Number);

        }
        document.getElementById("answer").innerHTML = "Answer: "+ String(nrArray);
    }
}

/*
Write a JavaScript
program to calculate the Checksum of all 12 numbers entered and output the Checksum in a h2 node.

    Checksum algorithm means the addition of each of the twelve digits, then the addition of each digit
in the result until you have a single Int.

    Example: 2345 8768 3456 2398 => 2+3+4+5+8+7+6+8+3+4+5+6+2+3+9+8 = 83, then 8+3 = 11, then 1+1 = 2*/
