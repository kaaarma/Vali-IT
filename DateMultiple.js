

function getDate() {
    const date1 = new Date();
    document.getElementById("date").innerHTML = date1;
}


function timeUntilJaan() {
    date1 = new Date();
    date2 = new Date("2023-06-24");
    let days = date2.getTime() - date1.getTime();
    let daysUntilJaan = Math.ceil(days / (1000 * 3600 * 24))
    document.getElementById("nrOfDays").innerHTML = daysUntilJaan;
}

function compare() {
    let userNr = Number(document.getElementById("userNr").value);
    if (userNr <= 17) {
        result = userNr - 17;
    } else {
        result = (userNr - 17) * 2;
    }
    document.getElementById("result").innerHTML = result;
}

function calculate() {
    let posNr = Number(document.getElementById("posNr").value);
    if (posNr % 5 === 0 || posNr % 7 === 0) {
        result = "Yes";
    } else {
        result = "No";
    }
    document.getElementById("answer").innerHTML = result;
}