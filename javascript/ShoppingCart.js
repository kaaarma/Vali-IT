
let cart = [];
let buttonId = ""
let name = ""
let price = 0
let item = {}

let cushion1 = document.getElementById("cushion1");
let cushion2 = document.getElementById("cushion2");
let cushion3 = document.getElementById("cushion3");
let cushion4 = document.getElementById("cushion4");
let cushion5 = document.getElementById("cushion5");
let cushion6 = document.getElementById("cushion6");

cushion1.addEventListener("click", function () {
    item = {
        name: cushion1.querySelector('.card-title').textContent,
        price: cushion1.querySelector('.price').textContent,
    };
    cart.push(item);
    updateCart();
});

cushion2.addEventListener("click", function () {
    item = {
        name: cushion2.querySelector('.card-title').textContent,
        price: cushion2.querySelector('.price').textContent
    };
    cart.push(item);
    updateCart();
});

cushion3.addEventListener("click", function () {
    item = {
        name: cushion3.querySelector('.card-title').textContent,
        price: cushion3.querySelector('.price').textContent
    };
    cart.push(item);
    updateCart();
});

cushion4.addEventListener("click", function () {
    item = {
        name: cushion4.querySelector('.card-title').textContent,
        price: cushion4.querySelector('.price').textContent
    };
    cart.push(item);
    updateCart();
});

cushion5.addEventListener("click", function () {
    item = {
        name: cushion5.querySelector('.card-title').textContent,
        price: cushion5.querySelector('.price').textContent
    };
    cart.push(item);
    updateCart();
});

cushion6.addEventListener("click", function () {
    item = {
        name: cushion6.querySelector('.card-title').textContent,
        price: cushion6.querySelector('.price').textContent
    };
    cart.push(item);
    updateCart();
});

function calculateTotal() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += Number(cart[i].price);
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


