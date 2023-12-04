//an array that contains all the books
const books = [
	{	
	title: 'Harry Potter and the Prisoner of Azkaban',
	author: 'J. K. Rowling',
	dataIndex: 0,
	popular: true,
	category: 'young adult',
	fiction: true,
	},

	{ 
	title: 'The Hitchhikers Guide to the Galaxy',
	author: 'Douglas Adams',
	dataIndex: 1,
	popular: true,
	category: 'young adult',
	fiction: true,
	},

	{ 
	title: 'The Woman In Me',
	author: 'Britney Spears',
	dataIndex: 2,
	popular: true,
	category: 'adult',
	fiction: false,
	},

	{
	title: 'The Snowcat Prince',
	author: 'Dina Norlund',
	dataIndex: 3,
	popular: false,
	category: 'kids',
	fiction: true,
	},

	{
	title: 'Gone Girl',
	author: 'Gillian Flynn',
	dataIndex: 4,
	popular: false,
	category: 'adult',
	fiction: true,
	},

	{ 
	title: 'Frida: A Biography of Frida Kahlo',
	author: 'Hayden Herrera',
	dataIndex: 5,
	popular: false,
	category: 'adult',
	fiction: false,
	},

	{
	title: 'Hel Ved',
	author: 'Lars Mytting',
	dataIndex: 6,
	popular: false,
	category: 'adult',
	fiction: false,
	},

	{
	title: 'Brillebjørn i svømmehallen',
	author: 'Ida Jackson',
	dataIndex: 7,
	popular: false,
	category: 'kids',
	fiction: true,
	},

	{
	title: 'Mistborn: The Final Empire',
	author: 'Brandon Sanderson',
	dataIndex: 8,
	popular: false,
	category: 'young adult',
	fiction: true,
	},

	{
	title: 'Fysikkmagi',
	author: 'Andreas Wahl',
	dataIndex: 9,
	popular: true,
	category: 'kids',
	fiction: false,
	},

	{
	title: 'Min skyld',
	author: 'Abid Raja',
	dataIndex: 10,
	popular: true,
	category: 'adult',
	fiction: false,
	},

	{
	title: 'Gjentakelsen',
	author: 'Vigdis Hjorth',
	dataIndex: 11,
	popular: false,
	category: 'adult',
	fiction: true,
	},

	{
	title: 'Trines kokebok for unge kokker',
	author: 'Trine Sandberg',
	dataIndex: 12,
	popular: false,
	category: 'young adult',
	fiction: false,
	},

	{
	title: 'Tungtvannsaksjonen',
	author: 'John S. Jamtli',
	dataIndex: 13,
	popular: false,
	category: 'young adult',
	fiction: false,
	},

	{
	title: 'Ruffen på nye eventyr',
	author: 'Tor Åge Bringsværd',
	dataIndex: 14,
	popular: false,
	category: 'kids',
	fiction: true,
	},

	{
	title: 'Farvel, Farah Diba',
	author: 'Karin Fossum',
	dataIndex: 15,
	popular: false,
	category: 'adult',
	fiction: true,
	},

	{
	title: 'The Very Hungry Caterpillar',
	author: 'Erik Carle',
	dataIndex: 16,
	popular: true,
	category: 'kids',
	fiction: true,
	},

	{
	title: 'De uverdige',
	author: 'Roy Jacobsen',
	dataIndex: 17,
	popular: false,
	category: 'adult',
	fiction: true,
	},

	{
	title: 'Anatomi for småtasser',
	author: 'Jonathan Litton',
	dataIndex: 18,
	popular: true,
	category: 'kids',
	fiction: false,
	},

	{
	title: 'Pulskuren',
	author: 'Torkil Færø',
	dataIndex: 19,
	popular: true,
	category: 'adult',
	fiction: false,
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
				container.style.display = 'flex';
			});
		} else {
			event.target.classList.add('category-button--active');
			bookContainers.forEach((container, index) => {
				if (books[index].category === group.toLowerCase()) {
					container.style.display = 'flex';
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
				container.style.display = 'flex';
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
			container.style.display = 'flex';
		} else {
			container.style.display = 'none';
		}
	});
});

// SORTING FUNCTIONS

//sorting by author 
const sortByAuthor = () => {
	books.sort((a, b) =>
		a.author.localeCompare(b.author, undefined, {sensitivity: 'base'})
	);
	reorderDisplay();	
}
//sorting by title
const sortByTitle = () => {
	books.sort((a, b) => 
		a.title.localeCompare(b.title, undefined, {sensitivity: 'base'})
	);
	reorderDisplay();
 }

// Appends the book containers according to their index 

const reorderDisplay = () => {
	const sortedElements = books.map(book => {
		return document.querySelector(`.book__container[data-index="${book.dataIndex}"]`);
	});

	sortedElements.forEach(element => {
		if (element) mainContainer.appendChild(element);
	});
}

// Adding class to active button
const sortingButtons = document.querySelectorAll('.sort-button');

const updateActiveButton = (currentButton) => {
    sortingButtons.forEach(button => {
        button.classList.remove('sort-button--active');
    });
    currentButton.classList.add('sort-button--active');
};

// Event listeners for each sorting button
document.getElementById('sort-author').addEventListener('click', function() {
    sortByAuthor();
    updateActiveButton(this);
});

document.getElementById('sort-title').addEventListener('click', function() {
    sortByTitle();
    updateActiveButton(this);
});

