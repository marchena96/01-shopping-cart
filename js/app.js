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

    if (e.target.classList.contains('agregar-carrito')) {
        const selectedItem = e.target.parentElement.parentElement;
        readItemData(selectedItem);
    }
}

function readItemData(item) {
    const itemInfo = {
        img: item.querySelector('img').src,
        title: item.querySelector('h4').textContent,
        price: item.querySelector('.precio span'),
        id: item.querySelector('a').getAttribute('data-id'),
        quantity: 1
    }

    console.log(itemInfo);
}