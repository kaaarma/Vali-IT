
function change() {
    let text = document.querySelector("#userStr").value;
    if (text.length < 3) {
        let newStr = text.toUpperCase()
        document.getElementById("newStr").innerHTML = newStr;
    }  else {
        let changedStr = ""
        for (let i = 0; i < 3; i++) {
            changedStr += text[i]
        }
        for (let i = 3; i < text.length; i++) {
            changedStr += text[i].toUpperCase()
        }
        document.getElementById("newStr").innerHTML = changedStr;
    }


}