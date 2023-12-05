//CHECKOUT 

const checkoutMenuButton = document.querySelector('.shopping-bag-icon');
const checkoutMenu = document.querySelector('.checkout-container');
const crossOutMenuButton = document.querySelector('.exit-icon');
const headerContainer = document.querySelector('.header');

const displayCheckoutMenu = () => {
	checkoutMenu.style.display = checkoutMenu.style.display === 'block' ? 'none' : 'block';
	
	const bookContainers = document.querySelectorAll('.book__container');
	bookContainers.forEach(bookContainer => bookContainer.classList.toggle('book__container--blurred'));
	
	headerContainer.classList.toggle('header--blurred');
}
checkoutMenuButton.addEventListener('click', displayCheckoutMenu);

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

			const deleteBookButton = document.createElement('button');
			deleteBookButton.classList.add('delete-button');
			deleteBookButton.textContent = 'Remove?';
			deleteBookButton.addEventListener('click', function(event) {
                const buttonClicked = event.target;
                buttonClicked.parentElement.remove();
				updateTotal();
				updateBadgeCount();
            });

			newDiv.appendChild(deleteBookButton);

			contentContainer.appendChild(newDiv);
			updateTotal();
			updateBadgeCount();
		});
	});
};
addContent()

const updateTotal = () => {
    let total = 0;
    const cartItems = document.querySelectorAll('.checkout-container-flex');

    for (let i = 0; i < cartItems.length; i++) {
        const cartItem = cartItems[i];
        const priceElement = cartItem.querySelector('.checkout-book-price');

        if (priceElement) {
            const price = parseInt(priceElement.innerText.replace(',-', ''));
            total += price;
        } else {
            console.log('Price element not found in cart item', i);
        }
    }
    document.querySelector('.total-price').innerText = 'Total price: ' + total + ',-';
};

//BADGE
const badge = document.querySelector('.badge');

document.addEventListener('DOMContentLoaded', () => {
    badge.style.display = 'none'; 
    updateBadgeCount(); 
});

const updateBadgeCount = () => {
	const cartItems = document.querySelectorAll('.checkout-container-flex');
	console.log(cartItems);
	const badgeCount = cartItems.length;

	console.log(badgeCount);
	if (badgeCount > 0) {
		badge.textContent = badgeCount;
		badge.style.display = 'flex';
	} else {
		badge.style.display = 'none';
	}
}




