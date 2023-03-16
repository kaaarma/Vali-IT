function generate() {

    const pic = document.getElementById("pic");
    let chars = "0123456789abcdef";
    let code = "#"

    for (let i = 0; i < 6; i++) {

        code += chars[Math.floor(Math.random() * 16)]
    }

    pic.style.backgroundColor = code;

}
