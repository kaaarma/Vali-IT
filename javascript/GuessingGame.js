

let randomNumber = Math.floor(Math.random() * 20) + 1;
function compare() {
    let userNr = Number(document.getElementById("userNr").value);
    if (userNr === randomNumber) {
        document.getElementById("result").value = "Good work!";
    } else {
        document.getElementById("result").value = "Not matched, the right number was " + randomNumber +".";
    }
}

function reset() {
    randomNumber = Math.floor(Math.random() * 20) + 1;
    document.getElementById("myForm").reset();
}