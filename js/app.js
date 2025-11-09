const courseCatalogue = document.querySelector('#lista-cursos');
//const btnAddToCart = document.querySelector('agregar-carrito');


// Calling up event handler function
eventHandler();

// Event handler...
function eventHandler() {
    courseCatalogue.addEventListener('click', addToCart);
}

// Adding elements to the cart...
function addToCart(e) {
    e.preventDefault();

    console.log('clicking add to cart...');
}