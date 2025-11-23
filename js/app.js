const courseCatalogue = document.querySelector('#lista-cursos'); //const btnAddToCart = document.querySelector('agregar-carrito');
const bntCleanCart = document.querySelector('#vaciar-carrito');

const cart = document.querySelector('#lista-carrito tbody');


let cartItems = [];

// Calling up event handler function
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
        title: item.querySelector('h4').textContent,
        price: item.querySelector('.precio span'),
        id: item.querySelector('a').getAttribute('data-id'),
        quantity: 1
    }
    //Adding elements to the cart
    cartItems = [...cartItems, itemInfo];

    console.log(cartItems);

    HTMLCart();
}

function HTMLCart() {
    cleanCart();
    cartItems.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = ` 
        <td>
            ${item.title}
        </td>
        `;

        // Add this draw in the tbody
        cart.appendChild(row);
    });

}

// Clean the cart
function cleanCart() {
    // cart.innerHTML = '';
    while (cart.firstChild) {
        cart.removeChild(cart.firstChild);
    }
}

