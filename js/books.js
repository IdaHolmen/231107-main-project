//an array called books containing book objects

const books = [
	{	
	title: 'Harry Potter and the Prisoner of Azkaban',
	author: 'J. K. Rowling',
	popular: true,
	group: 'young adult',
	fiction: true,
	},

	{ 
	title: 'The Hitchhikers Guide to the Galaxy',
	author: 'Douglas Adams',
	popular: true,
	group: 'young adult',
	fiction: true,
	},

	{ 
	title: 'The Woman In Me',
	author: 'Britney Spears',
	popular: true,
	group: 'adult',
	fiction: false,
	},

	{
	title: 'The Snowcat Prince',
	author: 'Dina Norlund',
	popular: false,
	group: 'kids',
	fiction: true,
	},

	{
	title: 'Gone Girl',
	author: 'Gillian Flynn',
	popular: false,
	group: 'adult',
	fiction: true,
	},

	{ 
	title: 'Frida: A Biography of Frida Kahlo',
	author: 'Hayden Herrera',
	popular: false,
	group: 'adult',
	fiction: false,
	},

	{
	title: 'Hel Ved',
	author: 'Lars Mytting',
	popular: false,
	group: 'adult',
	fiction: false,
	},

	{
	title: 'Brillebjørn i svømmehallen',
	author: 'Ida Jackson',
	popular: false,
	group: 'kids',
	fiction: true,
	},

	{
	title: 'Mistborn: The Final Empire',
	author: 'Brandon Sanderson',
	popular: false,
	group: 'young adult',
	fiction: true,
	},

	{
	title: 'Fysikkmagi',
	author: 'Andreas Wahl',
	popular: true,
	group: 'kids',
	fiction: false,
	},

	{
	title: 'Min skyld',
	author: 'Abid Raja',
	popular: true,
	group: 'adult',
	fiction: false,
	},

	{
	title: 'Gjentakelsen',
	author: 'Vigdis Hjorth',
	popular: false,
	group: 'adult',
	fiction: true,
	},

	{
	title: 'Trines kokebok for unge kokker',
	author: 'Trine Sandberg',
	popular: false,
	group: 'young adult' + 'kids',
	fiction: false,
	},

	{
	title: 'Tungtvannsaksjonen',
	author: 'John S. Jamtli',
	popular: false,
	group: 'young adult',
	fiction: false,
	},

	{
	title: 'Ruffen på nye eventyr',
	author: 'Tor Åge Bringsværd',
	popular: false,
	group: 'kids',
	fiction: true,
	},

	{
	title: 'Farvel, Farah Diba',
	author: 'Karin Fossum',
	popular: false,
	group: 'adult',
	fiction: true,
	},

	{
	title: 'Den lille larven Aldrimett',
	author: 'Erik Carle',
	popular: true,
	group: 'kids',
	fiction: true,
	},

	{
	title: 'De uverdige',
	author: 'Roy Jacobsen',
	popular: false,
	group: 'adult',
	fiction: true,
	},

	{
	title: 'Anatomi for småtasser',
	author: 'Jonathan Litton',
	popular: true,
	group: 'kids',
	fiction: false,
	},

	{
	title: 'Pulskuren',
	author: 'Torkil Færø',
	popular: true,
	group: 'adult',
	fiction: false,
	},

	{
	title: 'Boken som ikke ville bli lest',
	author: 'David Sundin',
	popular: false,
	group: 'kids',
	fiction: true,
	},
]

//filtering 

const filterButtons = document.querySelectorAll('.filter-button');
const bookContainers = document.querySelectorAll('.book__container');

filterButtons.forEach(button => {
	const filterBooks = () => {
		console.log('Filter the list');
	}

	button.addEventListener('click', filterBooks);
});
