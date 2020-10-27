class Roll{
    constructor(quantity, glaze, delivery) {
        this.quantity = quantity
        this.glaze = glaze
        this.delivery = delivery
    }
}

var cartCount = 0;

function addToCart() {
    var quantity = document.getElementById('drop-qty').value
    var glaze = document.getElementById('drop-glaze').value
    var delivery = document.getElementById('drop-deliv').value
    cartCount = cartCount + 1;
    document.getElementById('cart-num').innerText = cartCount
    localStorage.setItem("cartCount", cartCount)
}

function onLoad(){
    var cartNum = localStorage.getItem("cartCount")
    console.log(cartNum)
    document.getElementById('cart-num').innerText = cartNum
    console.log(document.getElementById('cart-num').innerText)
}