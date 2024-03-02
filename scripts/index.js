const mainActionButton = document.getElementById("main_action_button");

// scroll
mainActionButton.onclick = function () {
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
};

let links = document.querySelectorAll(".menu_item > a");
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        document
            .getElementById(links[i].getAttribute("data-link"))
            .scrollIntoView({ behavior: "smooth" });
    };
}

// input validation
let burger = document.getElementById("burger");
let name = document.getElementById("name");
let phone = document.getElementById("phone");

document.getElementById("order_action").onclick = function () {
    let hasError = false;
    [burger, name, phone].forEach((item) => {
        if (!item.value) {
            item.parentElement.style.background =
                "linear-gradient(50.61deg, #211A16 0%, #a30808 45%)";
            hasError = true;
        } else {
            item.parentElement.style.background = "";
        }
    });
    if (!hasError) {
        [burger, name, phone].forEach((item) => {
            item.value = "";
        });
        alert("спасибо за заказ! мы скоро свяжемся с вами!");
    }
};

// button scroll

const productsTitle = document.querySelector(".products_item_title");
const productsPrice = document.querySelector(".products_item_price");
const productsWeight = document.querySelector(".products_item_weight");

const buttons = document.getElementsByClassName("product_button");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = () => {
        document.getElementById("order").scrollIntoView({ behavior: "smooth" });
    };
}

// change value

let prices = document.getElementsByClassName("products_item_price");
document.getElementById("change_currency").onclick = function (e) {
    let currentCurrency = e.target.innerText;

    let newCurrency = "$";
    let coefficient = 1;

    if (currentCurrency === "$") {
        newCurrency = "֏";
        coefficient = 400;
    } else if (currentCurrency === "֏") {
        newCurrency = "BYN";
        coefficient = 2.5;
    } else if (currentCurrency === "BYN") {
        newCurrency = "€";
        coefficient = 0.9;
    } else if (currentCurrency === "€") {
        newCurrency = "¥";
        coefficient = 6.9;
    }
    e.target.innerText = newCurrency;
    for (let i = 0; i < prices.length; i++) {
        prices[i].innerText =
            +(prices[i].getAttribute("data-base-price") * coefficient).toFixed(
                1
            ) +
            " " +
            newCurrency;
    }
};

// anim
const mainInfo = document.querySelector(".main_info");
const mainImage = document.querySelector(".main_image");
mainInfo.style = `opacity: 1;
    visibility: visible;
    transform: translateX(0);`;
mainImage.style = `opacity: 1;
    visibility: visible;
    transform: translateX(0);`;

//create order
const productButtons = document.querySelectorAll('.product_button');

productButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        const productItem = event.target.closest('.products_item_image');
        console.log(event.target);
        if (productItem) {
            const title = productItem.querySelector('.products_item_title').innerText;
            const price = productItem.querySelector('.products_item_price').innerText;
            const weight = productItem.querySelector('.products_item_weight').innerText;

            const productInfo = title + ' - ' + price + ' - ' + weight;
            burger.value = productInfo;
        }
    });
});