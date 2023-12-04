//an array that contains all the books
const books = [
	{	
	title: 'Harry Potter and the Prisoner of Azkaban',
	author: 'J. K. Rowling',
	dataIndex: 0,
	//a nested array with bestseller, age group and fiction/non-fiction all in one	
	category: [true, 'kids', true],
	},

	{ 
	title: 'The Hitchhikers Guide to the Galaxy',
	author: 'Douglas Adams',
	dataIndex: 1,
	category: [true, 'young adult', true],
	},

	{ 
	title: 'The Woman In Me',
	author: 'Britney Spears',
	dataIndex: 2,
	category: [true, 'adult', false],
	},

	{
	title: 'The Snowcat Prince',
	author: 'Dina Norlund',
	dataIndex: 3,
	category: [false, 'kids', true],
	},

	{
	title: 'Gone Girl',
	author: 'Gillian Flynn',
	dataIndex: 4,
	category: [false, 'adult', true],
	},

	{ 
	title: 'Frida: A Biography of Frida Kahlo',
	author: 'Hayden Herrera',
	dataIndex: 5,
	category: [false, 'adult', false],
	},

	{
	title: 'Hel Ved',
	author: 'Lars Mytting',
	dataIndex: 6,
	category: [false, 'adult', false],
	},

	{
	title: 'Brillebjørn i svømmehallen',
	author: 'Ida Jackson',
	dataIndex: 7,
	category: [false, 'adult', true],
	},

	{
	title: 'Mistborn: The Final Empire',
	author: 'Brandon Sanderson',
	dataIndex: 8,
	category: [false, 'young adult', true],
	},

	{
	title: 'Fysikkmagi',
	author: 'Andreas Wahl',
	dataIndex: 9,
	category: [true, 'kids', false],
	},

	{
	title: 'Min skyld',
	author: 'Abid Raja',
	dataIndex: 10,
	category: [true, 'kids', false],
	},

	{
	title: 'Gjentakelsen',
	author: 'Vigdis Hjorth',
	dataIndex: 11,
	category: [false, 'adult', true],
	},

	{
	title: 'Trines kokebok for unge kokker',
	author: 'Trine Sandberg',
	dataIndex: 12,
	category: [false, 'young adult', false],
	},

	{
	title: 'Tungtvannsaksjonen',
	author: 'John S. Jamtli',
	dataIndex: 13,
	category: [false, 'young adult', false],
	},

	{
	title: 'Ruffen på nye eventyr',
	author: 'Tor Åge Bringsværd',
	dataIndex: 14,
	category: [false, 'kids', true],
	},

	{
	title: 'Farvel, Farah Diba',
	author: 'Karin Fossum',
	dataIndex: 15,
	category: [false, 'adult', true],
	},

	{
	title: 'The Very Hungry Caterpillar',
	author: 'Erik Carle',
	dataIndex: 16,
	category: [true, 'kids', true],
	},

	{
	title: 'De uverdige',
	author: 'Roy Jacobsen',
	dataIndex: 17,
	category: [false, 'adult', true],
	},

	{
	title: 'Anatomi for småtasser',
	author: 'Jonathan Litton',
	dataIndex: 18,
	category: [true, 'kids', false],
	},

	{
	title: 'Pulskuren',
	author: 'Torkil Færø',
	dataIndex: 19,
	category: [true, 'adult', false],
	},
]


//FILTER FUNCTION

const filterButtons = document.querySelectorAll('.filter-button');
const bookContainers = document.querySelectorAll('.book__container');

//Goes through the filter buttons
filterButtons.forEach(filterButton => {
	filterButton.addEventListener('click', (event) => {
		const filter = event.target.textContent.toLowerCase();
		const isActive = event.target.classList.contains('filter-button--active');

		filterButtons.forEach(button => {
			button.classList.remove('filter-button--active');
		});

		if (isActive) {
			bookContainers.forEach(container => {
				container.style.display = 'flex';
			});
			//applies filter
		} else {
			event.target.classList.add('filter-button--active');
			bookContainers.forEach((container, index) => {
				const book = books[index];
				const matchesFilter = matchesBookFilter(book, filter);
				container.style.display = matchesFilter ? 'flex' : 'none';
			});
		}
	});
});

const matchesBookFilter = (book, filter) => {
	//checks age group and returns the one that matches through accessing the index of the nested array
	if (filter === 'adult' || filter === 'young adult' || filter === 'kids') {
		return book.category[1] === filter;
	}
	
	//checks if it's fiction of non-fiction through boolean statements
	if (filter === 'fiction') {
		return book.category[2] === true;
	}

	if (filter === 'non-fiction') {
		return book.category[2] === false;
	}

	//checks if it's a bestseller through boolean statement
	if (filter ==='bestsellers') {
		return book.category[0] === true; 
	}
	else {
		return false;
	}
}


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

