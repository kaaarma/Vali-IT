
function distance() {
    let nr1 = parseInt(document.getElementById("nr1").value);
    let nr2 = parseInt(document.getElementById("nr2").value);

    if (nr1 === nr2) {
        document.getElementById("result2").innerHTML = "These are not different numbers!"
    }
    else {
        let dist1 = Math.abs(99 - nr1);
        let dist2 = Math.abs(99 - nr2);

            if (dist1 < dist2) {
                document.getElementById("result").innerHTML = nr1.toString();
            } else {
                document.getElementById("result").innerHTML = nr2.toString();
        }
    }
}