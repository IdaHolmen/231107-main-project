//CHECKOUT 
//Used this video to understand the different elements
//https://www.youtube.com/watch?v=YeFzkC2awTM&t=2s

const checkoutMenuButton = document.querySelector('.shopping-bag-icon');
const checkoutMenu = document.querySelector('.checkout-container');
const crossOutMenuButton = document.querySelector('.exit-icon');
const headerContainer = document.querySelector('.header');

//When shopping-bag-icon is clicked the checkout is displayed and background is blurred
const displayCheckoutMenu = () => {
	checkoutMenu.style.display = checkoutMenu.style.display === 'block' ? 'none' : 'block';
	
	const bookContainers = document.querySelectorAll('.book__container');
	bookContainers.forEach(bookContainer => bookContainer.classList.toggle('book__container--blurred'));
	
	headerContainer.classList.toggle('header--blurred');
}
checkoutMenuButton.addEventListener('click', displayCheckoutMenu);

//crosses out menu
const crossOutMenu = () => {
	checkoutMenu.style.display = checkoutMenu.style.display === 'block' ? 'none' : 'block';

	const bookContainers = document.querySelectorAll('.book__container');
	bookContainers.forEach(bookContainer => bookContainer.classList.toggle('book__container--blurred'));
	
	headerContainer.classList.toggle('header--blurred');
}
crossOutMenuButton.addEventListener('click', crossOutMenu);



//ADD CONTENT TO CHECKOUT


const addContent = () => {
	const cartButtons = document.querySelectorAll('.add__button');
	const contentContainer = document.querySelector('.checkout-container-main-content');


	cartButtons.forEach(cartButton => {
		cartButton.addEventListener('click', () => {
			const bookContainer = cartButton.closest('.book__container');

			//Creating the div dynamically!
			const newDiv = document.createElement('div');
			newDiv.classList.add('checkout-container-flex');

			const bookImage = bookContainer.querySelector('.book__image').cloneNode(true);
			bookImage.classList.add('image-element-checkout');
			newDiv.appendChild(bookImage);

			const bookTitleText = bookContainer.querySelector('.book__title').textContent;
			const titleElement = document.createElement('p');
			titleElement.classList.add('checkout-book-title');
			titleElement.textContent = bookTitleText;
			newDiv.appendChild(titleElement);
			
			const bookPrice = bookContainer.querySelector('.book__price').textContent;
			const priceElement = document.createElement('p');
			priceElement.classList.add('checkout-book-price');
			priceElement.textContent = bookPrice;
			newDiv.appendChild(priceElement);

			const quantityDiv = document.createElement('div');
            quantityDiv.classList.add('quantity-controls');

            const decrementButton = document.createElement('button');
            decrementButton.textContent = '-';
            decrementButton.onclick = () => updateQuantity(newDiv, -1);

            const incrementButton = document.createElement('button');
            incrementButton.textContent = '+';
            incrementButton.onclick = () => updateQuantity(newDiv, 1);

            const quantityDisplay = document.createElement('span');
            quantityDisplay.textContent = '1'; // default quantity
            quantityDisplay.classList.add('quantity-display');

            quantityDiv.appendChild(decrementButton);
            quantityDiv.appendChild(quantityDisplay);
            quantityDiv.appendChild(incrementButton);

            newDiv.appendChild(quantityDiv);

			const deleteBookButton = document.createElement('button');
			deleteBookButton.classList.add('delete-button');
			deleteBookButton.textContent = 'Remove?';
			deleteBookButton.addEventListener('click', function(event) {
                const buttonClicked = event.target;
                buttonClicked.parentElement.remove();
				updateTotal();
				updateBadgeCount();
				updateQuantity()
            });

			newDiv.appendChild(deleteBookButton);

			contentContainer.appendChild(newDiv);
			updateTotal();
			updateBadgeCount();
			updateQuantity()
		});
	});
};
addContent()

// QUANTITY
const updateQuantity = (cartItem, change) => {
    const quantityDisplay = cartItem.querySelector('.quantity-display');
    let quantity = parseInt(quantityDisplay.textContent);
    quantity = Math.max(1, quantity + change); //makes sure it's never less than one and checks for change
    quantityDisplay.textContent = quantity.toString();

    updateTotal();
};

//TOTAL SUM
const updateTotal = () => {
    let total = 0;

    const cartItems = document.querySelectorAll('.checkout-container-flex');
    cartItems.forEach(cartItem => {
        const price = parseInt(cartItem.querySelector('.checkout-book-price').textContent.replace(',-', ''));
        const quantity = parseInt(cartItem.querySelector('.quantity-display').textContent);
        total += price * quantity;
    });

    document.querySelector('.total-price').innerText = 'Total price: ' + total + ',-';
};

//BADGE
const badge = document.querySelector('.badge');

//Makes sure that badge is not visible when page is loaded
document.addEventListener('DOMContentLoaded', () => {
    badge.style.display = 'none'; 
    updateBadgeCount(); 
});

// If item is added to cart it displays the badge and changes textContent accordingly
const updateBadgeCount = () => {
	const cartItems = document.querySelectorAll('.checkout-container-flex');
	const badgeCount = cartItems.length;

	console.log(badgeCount);
	if (badgeCount > 0) {
		badge.textContent = badgeCount;
		badge.style.display = 'flex';
	} else {
		badge.style.display = 'none';
	}
};
