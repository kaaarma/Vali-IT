
let cart = [];
let buttonId = ""
let name = ""
let price = 0
let item = {}

let roseButton = document.getElementById("roseButton");
let greyButton = document.getElementById("greyButton");
let blueButton = document.getElementById("blueButton");
let yellowButton = document.getElementById("yellowButton");
let purpleButton = document.getElementById("purpleButton");
let blackButton = document.getElementById("blackButton");

roseButton.addEventListener("click", function () {
    item = {
        name: "Rose",
        price: 5.99,
    };
    cart.push(item);
    updateCart();
});

greyButton.addEventListener("click", function () {
    item = {
        name: "Grey",
        price: 2.99,
    };
    cart.push(item);
    updateCart();
});

blueButton.addEventListener("click", function () {
    item = {
        name: "Blue",
        price: 6.99,
    };
    cart.push(item);
    updateCart();
});

yellowButton.addEventListener("click", function () {
    item = {
        name: "Yellow",
        price: 2.99,
    };
    cart.push(item);
    updateCart();
});

purpleButton.addEventListener("click", function () {
    item = {
        name: "Purple",
        price: 11.99,
    };
    cart.push(item);
    updateCart();
});

blackButton.addEventListener("click", function () {
    item = {
        name: "Black",
        price: 6.99,
    };
    cart.push(item);
    updateCart();
});

function calculateTotal() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price;
    }
    return total;
}

function updateCart() {
    let cartTable = document.getElementById("cart").getElementsByTagName("tbody")[0];
    let totalField = document.getElementById("total");

    cartTable.innerHTML = "";

    for (let i = 0; i < cart.length; i++) {
        let item = cart[i];
        let row = cartTable.insertRow(i);
        row.insertCell(0).innerHTML = item.name;
        row.insertCell(1).innerHTML = item.price;
        //row.insertCell(3).innerHTML = item.subtotal.toFixed(2);

        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.addEventListener("click", (function(item) {
            return function() {
                cart.splice(cart.indexOf(item), 1);
                updateCart();
            }
        })(item));
        row.insertCell(2).appendChild(deleteButton);
    }

    let total = calculateTotal();
    totalField.innerHTML = total.toFixed(2);
}


