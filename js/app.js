const courseCatalogue = document.querySelector('#lista-cursos'); //const btnAddToCart = document.querySelector('agregar-carrito');
const bntCleanCart = document.querySelector('#vaciar-carrito');
const cart = document.querySelector('#lista-carrito tbody');

let cartItems = []; //...

// Calling up event handler function|
eventHandler();

// Event handler...
function eventHandler() {
    courseCatalogue.addEventListener('click', addToCart);
    bntCleanCart.addEventListener('click', cleanCart);
}

// Adding elements to the cart...
function addToCart(e) {
    e.preventDefault();

    if (e.target.classList.contains('agregar-carrito')) {
        const selectedItem = e.target.parentElement.parentElement;
        readItemData(selectedItem);
    }
}

// Read...
function readItemData(item) {
    console.log(item);
    const itemInfo = {
        img: item.querySelector('img').src,
        title: item.querySelector('h4').textContent, // It picks up the text content.
        price: item.querySelector('.precio span').textContent,
        id: item.querySelector('a').getAttribute('data-id'),
        quantity: 1
    }
    //Adding elements to the cart
    cartItems = [...cartItems, itemInfo];
    HTMLCart(); // Why it calls to this function?
}

function HTMLCart() {
    cleanCart(); //...
    cartItems.forEach(item => {
        const { img, title, price, quantity, id } = item;
        const row = document.createElement('tr');
        row.innerHTML = ` 
        <td>
            <img src="${img}" width="100"> 
        </td>
        <td> ${title} </td>
        <td> ${price} </td>
        <td> ${quantity} </td>
        <td>
            <a href="#" class="borrar-curso" data-id"${id}"> X </a>
        </td> 
        `;

        cart.appendChild(row); // Add this draw in the tbody
    });
}

// Clean the cart
function cleanCart() {
    // cart.innerHTML = '';
    while (cart.firstChild) {
        cart.removeChild(cart.firstChild);
    }
}

