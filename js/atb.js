let add_buttons = document.querySelectorAll(".add-button");
let removable = document.querySelector(".removable");
let rem_img = removable.querySelector("img");
let rem_p = removable.querySelector("p");
let hr = removable.querySelector("hr");
let order_template = document.querySelector("#atb-order-product-template");
let orderButton = document.getElementById("orderButton");
let orderAmount = document.querySelector(".order-amount");
let orderPrice = document.querySelector(".order-price");

function updateOrderButton() {
    let productsInOrder = removable.querySelectorAll(".product-in-order-list");
    let totalAmount = 0;
    let totalPrice = 0;

    productsInOrder.forEach(product => {
        let amount = parseInt(product.querySelector(".product-amount-in-list").textContent);
        let price = parseFloat(product.querySelector(".product-price-in-list").textContent.replace(" ₴", "").replace(",", "."));

        totalAmount += amount;
        totalPrice += price;
    });

    orderAmount.textContent = totalAmount;
    orderPrice.textContent = totalPrice.toFixed(2).replace(".", ",") + " ₴";

    if (totalAmount > 0) {
        orderButton.style.display = "block";
    } else {
        orderButton.style.display = "none";
    }
}

function addToOrderList(event) {
    rem_img.style.display = "none";
    rem_p.style.display = "none";
    hr.style.display = "none";

    let productContainer = event.currentTarget.closest(".one-product");
    let productName = productContainer.querySelector(".product-title").textContent;
    let productPrice = parseFloat(productContainer.querySelector(".product-price").textContent);

    let existingProducts = removable.querySelectorAll(".product-name-in-list");
    let productExists = false;

    existingProducts.forEach(existingProduct => {
        if (existingProduct.textContent.trim() === productName.trim()) {
            productExists = true;

            let amount = existingProduct.closest(".product-in-order-list").querySelector(".product-amount-in-list");
            amount.textContent = parseInt(amount.textContent) + 1;

            let currentPriceElement = existingProduct.closest(".product-in-order-list").querySelector(".product-price-in-list");
            let currentAmount = parseInt(amount.textContent);
            let currentPrice = currentAmount * productPrice;
            currentPriceElement.textContent = `${currentPrice.toFixed(2)} ₴`.replace('.', ',');
        }
    });

    if (!productExists) {
        let clone = document.importNode(order_template.content, true);
        let amount = clone.querySelector(".product-amount-in-list");
        amount.textContent = 1;

        let product_name = clone.querySelector(".product-name-in-list");
        product_name.classList.add("mx-1");
        product_name.textContent = productName;

        let product_price = clone.querySelector(".product-price-in-list");
        product_price.textContent = productPrice.toFixed(2).replace('.', ',') + " ₴";

        removable.appendChild(clone);
    }

    updateOrderButton();
}

document.addEventListener("DOMContentLoaded", function () {
    for (let button of add_buttons) {
        button.addEventListener("click", addToOrderList);
    }
});

document.body.addEventListener("click", function (event) {
    if (event.target.classList.contains("add-plus-one")) {
        updateProductAmount(event, 1);
    } else if (event.target.classList.contains("sub-minus-one")) {
        updateProductAmount(event, -1);
    }
});

document.querySelector("#orderButton").addEventListener("click", function() {
    let cafeName = document.querySelector(".title").textContent;
    let cafeOrderList = ""; 
    let cafeOrderArray = document.querySelectorAll(".one-row-in-order");
    
    for (let prod of cafeOrderArray) {
        cafeOrderList += prod.innerText + "<br>"; 
    }

    let cafeOrderAmount = document.querySelector(".order-amount").textContent;
    let cafeOrderPrice = document.querySelector(".order-price").textContent;

    const orderData = {
      cafeName,
      cafeOrderAmount,
      cafeOrderList, 
      cafeOrderPrice,
    };

    localStorage.setItem('orderData', JSON.stringify(orderData));
    window.location.href = '../confirmOrder/index.html';
});
  
function updateProductAmount(event, change) {
    let productName = event.target.closest(".product-in-order-list").querySelector(".product-name-in-list").textContent.trim();

    let productList = document.querySelectorAll(".all-products .one-product");

    let constPrice = 0;

    for (let product of productList) {
        if (product.querySelector(".product-title").textContent.trim() === productName) {
            constPrice = parseFloat(product.querySelector(".product-price").textContent.replace("грн", "").trim());
        }
    }

    let currentAmount = parseInt(event.target.closest(".product-in-order-list").querySelector(".product-amount-in-list").textContent) + change;

    if (currentAmount < 1) {
        event.target.closest(".product-in-order-list").remove();
        let remainingProducts = document.querySelectorAll(".removable .product-in-order-list");
        if (remainingProducts.length === 0) {
            rem_img.style.display = "block";
            rem_p.style.display = "block";
            hr.style.display = "block";
            orderButton.style.display = "none"; 
        }
    } else {
        event.target.closest(".product-in-order-list").querySelector(".product-amount-in-list").textContent = currentAmount;
        event.target.closest(".product-in-order-list").querySelector(".product-price-in-list").textContent = (parseFloat(constPrice * currentAmount)).toFixed(2).replace('.', ',') + " ₴";
    }
    updateOrderButton();
}
