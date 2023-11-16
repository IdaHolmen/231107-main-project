const searchField = document.querySelector('.search-field');

const addActiveClass = () => {
	searchField.classList.add('search-field--active');
}

const removeActiveClass = () => {
	searchField.classList.remove('search-field--active');
}

searchField.addEventListener('focus', addActiveClass);
searchField.addEventListener('blur', removeActiveClass);
