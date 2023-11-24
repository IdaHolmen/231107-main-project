//an array called books containing book objects

const books = [
	{	
	title: 'Harry Potter and the Prisoner of Azkaban',
	author: 'J. K. Rowling',
	popular: true,
	category: 'young adult',
	fiction: true,
	},

	{ 
	title: 'The Hitchhikers Guide to the Galaxy',
	author: 'Douglas Adams',
	popular: true,
	category: 'young adult',
	fiction: true,
	},

	{ 
	title: 'The Woman In Me',
	author: 'Britney Spears',
	popular: true,
	category: 'adult',
	fiction: false,
	},

	{
	title: 'The Snowcat Prince',
	author: 'Dina Norlund',
	popular: false,
	category: 'kids',
	fiction: true,
	},

	{
	title: 'Gone Girl',
	author: 'Gillian Flynn',
	popular: false,
	category: 'adult',
	fiction: true,
	},

	{ 
	title: 'Frida: A Biography of Frida Kahlo',
	author: 'Hayden Herrera',
	popular: false,
	category: 'adult',
	fiction: false,
	},

	{
	title: 'Hel Ved',
	author: 'Lars Mytting',
	popular: false,
	category: 'adult',
	fiction: false,
	},

	{
	title: 'Brillebjørn i svømmehallen',
	author: 'Ida Jackson',
	popular: false,
	category: 'kids',
	fiction: true,
	},

	{
	title: 'Mistborn: The Final Empire',
	author: 'Brandon Sanderson',
	popular: false,
	category: 'young adult',
	fiction: true,
	},

	{
	title: 'Fysikkmagi',
	author: 'Andreas Wahl',
	popular: true,
	category: 'kids',
	fiction: false,
	},

	{
	title: 'Min skyld',
	author: 'Abid Raja',
	popular: true,
	category: 'adult',
	fiction: false,
	},

	{
	title: 'Gjentakelsen',
	author: 'Vigdis Hjorth',
	popular: false,
	category: 'adult',
	fiction: true,
	},

	{
	title: 'Trines kokebok for unge kokker',
	author: 'Trine Sandberg',
	popular: false,
	category: 'young adult',
	fiction: false,
	},

	{
	title: 'Tungtvannsaksjonen',
	author: 'John S. Jamtli',
	popular: false,
	category: 'young adult',
	fiction: false,
	},

	{
	title: 'Ruffen på nye eventyr',
	author: 'Tor Åge Bringsværd',
	popular: false,
	category: 'kids',
	fiction: true,
	},

	{
	title: 'Farvel, Farah Diba',
	author: 'Karin Fossum',
	popular: false,
	category: 'adult',
	fiction: true,
	},

	{
	title: 'Den lille larven Aldrimett',
	author: 'Erik Carle',
	popular: true,
	category: 'kids',
	fiction: true,
	},

	{
	title: 'De uverdige',
	author: 'Roy Jacobsen',
	popular: false,
	category: 'adult',
	fiction: true,
	},

	{
	title: 'Anatomi for småtasser',
	author: 'Jonathan Litton',
	popular: true,
	category: 'kids',
	fiction: false,
	},

	{
	title: 'Pulskuren',
	author: 'Torkil Færø',
	popular: true,
	category: 'adult',
	fiction: false,
	},

	{
	title: 'Boken som ikke ville bli lest',
	author: 'David Sundin',
	popular: false,
	category: 'kids',
	fiction: true,
	},
]

//filtering by categories

const categoryButtons = document.querySelectorAll('.category-button');
const bookContainers = document.querySelectorAll('.book__container');

categoryButtons.forEach(categoryButton => {
	categoryButton.addEventListener('click', (event) => {
		const group = event.target.textContent;
		const isActive = event.target.classList.contains('category-button--active');

		categoryButtons.forEach(button => {
			button.classList.remove('category-button--active');
		});

		if (isActive) {
			bookContainers.forEach(container => {
				container.style.display = 'block';
			});
		} else {
			event.target.classList.add('category-button--active');
			bookContainers.forEach((container, index) => {
				if (books[index].category === group.toLowerCase()) {
					container.style.display = 'block';
				} else {
					container.style.display = 'none';
				}
			});
		}
	});
});

//filtering by fiction/non-fiction

const fictionButtons = document.querySelectorAll('.fiction-button');

fictionButtons.forEach(fictionButton => {
	fictionButton.addEventListener('click', (event) => {
		const fictionOrNonFiction = event.target.textContent;

		const isFiction = fictionOrNonFiction.toLowerCase() === 'fiction';

		bookContainers.forEach((container, index) => {
			if (books[index].fiction === isFiction) {
				container.style.display = 'block';
			}  else {
				container.style.display = 'none';
			}
		});
	});
});


//filtering by bestsellers

const bestsellerButton = document.querySelector('.bestseller-button');

bestsellerButton.addEventListener('click', (event) => {
	const bestsellerOrNot = event.target.textContent;

	bookContainers.forEach((container, index) => {
		if (books[index].popular === true) {
			container.style.display = 'block';
		} else {
			container.style.display = 'none';
		}
	});
});


// sorting by title
const sortingButtons = document.querySelectorAll('.sort-button');

let sortOrder = 'asc';

const sortTitles = (event) => {
	const currentButton = event.currentTarget;
	const currentButtonSortBy = currentButton.dataset.sortBy;

	const sortedTitles = [...bookContainers].sort((a, b) => {
		if (a.dataset.title > b.dataset.title) {
			return 1;
		} else {
			return -1;
		}
	});

	sortedTitles.forEach(item => {
		mainContainer.appendChild(item);
	});
}

sortingButtons.forEach(sortButton => {
	sortButton.addEventListener('click', sortTitles);
})