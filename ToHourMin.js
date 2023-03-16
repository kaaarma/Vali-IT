
function convert() {
    let userNr = document.getElementById("userNr").value;
    let hours = Math.floor(userNr / 60);
    let min = userNr - (hours * 60);
    document.getElementById("result").innerHTML = String(hours) + " hours and " + String(min) + " minutes";

}