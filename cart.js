function updateCartCount() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    document.getElementById("cart-count").innerHTML = cart.length;
}

function loadCart() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let table = document.getElementById("cartTable");

    let total = 0;

    table.innerHTML = "";

    cart.forEach(function(item,index){

        let subTotal = item.price * item.quantity;

        total += subTotal;

        table.innerHTML += `

        <tr>

        <td>${item.name}</td>

        <td>₹${item.price}</td>

        <td>

        <button onclick="decrease(${index})">-</button>

        ${item.quantity}

        <button onclick="increase(${index})">+</button>

        </td>

        <td>₹${subTotal}</td>

        <td>

        <button class="btn btn-danger btn-sm"

        onclick="removeItem(${index})">

        Remove

        </button>

        </td>

        </tr>

        `;

    });

    document.getElementById("total").innerHTML = total;

    updateCartCount();

}

function increase(index){

    let cart = JSON.parse(localStorage.getItem("cart"));

    cart[index].quantity++;

    localStorage.setItem("cart",JSON.stringify(cart));

    loadCart();

}

function decrease(index){

    let cart = JSON.parse(localStorage.getItem("cart"));

    if(cart[index].quantity>1){

        cart[index].quantity--;

    }

    localStorage.setItem("cart",JSON.stringify(cart));

    loadCart();

}

function removeItem(index){

    let cart = JSON.parse(localStorage.getItem("cart"));

    cart.splice(index,1);

    localStorage.setItem("cart",JSON.stringify(cart));

    loadCart();

}

loadCart();