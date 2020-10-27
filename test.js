function CardTemplate(parent, imgSrc, name, details, price) {
    let divContainer = document.createElement("div");
    divContainer.className = "card";
    parent.appendChild(divContainer);

    let divCard = document.createElement("div");
    divCard.className = "edit-remove";
    divContainer.appendChild(divCard);

    let img = document.createElement("img");
    img.src = imgSrc;
    divCard.appendChild(img);

    let edRem = document.createElement("p");
    edRem.innerHTML = "Edit | Remove";
    divCard.appendChild(edRem);

    let divText = document.createElement("div");
    divText.className = "text";
    divContainer.appendChild(divText);

    let divPrice = document.createElement("div");
    divPrice.className = "price";
    divContainer.appendChild(divPrice)

    return divContainer;
}

function addToCart() {
    cartCount = cartCount + 1; //increase by 1 every time Add to Cart button is clicked
    document.getElementById('cart-num').innerText = cartCount; // update nav bar number
    localStorage.setItem("cartCount", cartCount);
    var name = document.getElementById("pb-name").innerText;
    var quantity = document.getElementById("drop-qty").value;
    var glaze = document.getElementById("drop-glaze").value;
    var delivery = document.getElementById("drop-deliv").value;
    var img = document.getElementsByClassName("cp-img").src;
    const cartItem = new Roll(name, quantity, glaze, delivery, img);
    const jsonItem = JSON.stringify(cartItem);
    localStorage.setItem("cartObj", jsonItem);
    cartArray.push(jsonItem);
    console.log(localStorage.getItem("cartObj"));
    console.log(cartArray);
}

function createCartItem(container) {
    CardTemplate(container, )
}

