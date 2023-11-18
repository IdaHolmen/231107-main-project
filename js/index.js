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
	let bookContainers = document.querySelectorAll('.book__container');

	for (i = 0; i < bookContainers.length; i++) {
		let bookTitle = document.querySelectorAll('.book__title').innerText.toLowerCase();
		let bookAuthor = document. querySelectorAll('.book__author').innerText.toLowerCase();

		if (bookTitle.includes(input) || bookAuthor.includes(input)) {
			bookContainers[i].style.display = '',
		} else {
			bookContainers[i].style.display = 'none';
		}
	}	
};



