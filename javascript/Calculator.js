v

function subtractNumbers() {
    let nr1 = Number(document.getElementById("number1").value);
    let nr2 = Number(document.getElementById("number2").value);
    let result = nr1 - nr2;

    document.getElementById("result").value = result
}

function multiplyNumbers() {
    let nr1 = Number(document.getElementById("number1").value);
    let nr2 = Number(document.getElementById("number2").value);
    document.getElementById("result").value = nr1 * nr2
}
function divideNumbers() {
    let nr1 = Number(document.getElementById("number1").value);
    let nr2 = Number(document.getElementById("number2").value);
    let result = nr1 / nr2;

    document.getElementById("result").value = result
}
//const firstNumber = document.getElementById( 'number1').value;
//const secondNumber = document.getElementById('number2').value;

//console.log(firstNumber)
//.addEventListener()

