// Active color for search field
const searchField = document.querySelector('.search-field');

const addActiveClass = () => {
	searchField.classList.add('search-field--active');
}

const removeActiveClass = () => {
	searchField.classList.remove('search-field--active');
}

searchField.addEventListener('focus', addActiveClass);
searchField.addEventListener('blur', removeActiveClass);

// For searching through the books

const searchBooks = () => {
	const input = searchField.value.toLowerCase();
	const bookContainers = document.querySelectorAll('.book__container');

	for (let i = 0; i < bookContainers.length; i++) {
		const titleElement = bookContainers[i].querySelector('.book__title');
		const authorElement = bookContainers[i].querySelector('.book__author');

		const title = titleElement ? titleElement.innerText.toLowerCase() : '';
		const author = authorElement ? authorElement.innerText.toLowerCase() : '';

		if (title.includes(input) || author.includes(input)) {
			bookContainers[i].style.display = '';
		} else {
			bookContainers[i].style.display = 'none'
		}
	}
}


searchField.addEventListener('keypress', function(e) {
	if (e.key === 'Enter') {
		searchBooks();
	}
});


// HAMBURGER MENU

const hamburgerMenuButton = document.querySelector('.hamburger-menu');
const hamburgerMenu = document.querySelector('.hamburger__main-container');
const mainContainer = document.querySelector('.main-container');

const toggleHamburgerMenu = () => {
	hamburgerMenu.style.display = hamburgerMenu.style.display === 'block' ? 'none' : 'block';

	mainContainer.classList.toggle('main-container--pushed');
}

hamburgerMenuButton.addEventListener('click', toggleHamburgerMenu);



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
checkoutMenu.addEventListener('click', crossOutMenu);


//ADD CONTENT TO CHECKOUT
const addContent = () => {
	const cartButtons = document.querySelectorAll('.add__button');
	const contentContainer = document.querySelector('.checkout-container-main-content');
	cartButtons.forEach(cartButton => {
		cartButton.addEventListener('click', () => {
			const newDiv = document.createElement('div');
			newDiv.classList.add('book__container-checkout');
			contentContainer.appendChild(newDiv);
		});
	});
}
addContent()
