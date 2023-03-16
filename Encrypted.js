




function change() {
    let text = document.querySelector("#userStr").value;
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let changedStr = ""
        for (let i = 0; i < text.length; i++) {
            changedStr += alphabet[(alphabet.indexOf(text[i])) + 1]
        }
        document.getElementById("newStr").innerHTML = changedStr;


}