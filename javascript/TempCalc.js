
let button1 = false;
let button2 = false;

function celToFah() {
    let temp = Number(document.getElementById("temp").value);
    let result = (( 5 * (temp - 32)) / 9).toFixed(2);
    button1 = true;
    document.getElementById("result").value = result + "°F";
}


function fahToCel() {
    let temp = Number(document.getElementById("temp").value);
    let result = ((( 9 * temp + (32 * 5))) / 5).toFixed(2);
    button2 = true;
    document.getElementById("result").value = result + "°C"
}