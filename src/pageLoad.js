import { homePage } from './home';
import { menuPage } from './menu';
import { contactPage } from './contact';

// Define navLink factory function
const navLink = (name) => {
	const a = document.createElement('a');
	a.href = '#';
	a.innerText = name;

	return a;
};

// Initialize pages
const pages = (() => {
	const home = homePage();
	const menu = menuPage();
	const contact = contactPage();

	return { home, menu, contact };
})();

// Define and intialize navBar (header)
const navBar = (() => {
	const header = document.createElement('header');

	// Define and initialze tabs as navLinks
	const tabs = (() => {
		const home = navLink('home');
		const menu = navLink('menu');
		const contact = navLink('contact');

		return { home, menu, contact };
	})();

	for (const navLink in tabs) {
		// Add event listeners for each tab
		tabs[navLink].addEventListener('click', () => {
			// Clear main container
			main.innerText = '';
			// load respective page
			main.appendChild(pages[navLink]);
		});
		// Add tab to navBar header
		header.appendChild(tabs[navLink]);
	};

	return { header, tabs };
})();

// Define and initialize main container (main)
const main = (() => {
	const main = document.createElement('main');

	// Load homePage by default
	main.appendChild(pages.home)

	return main;
})();

// Define page load function
export const pageLoad = (() => {
	const body = document.querySelector('body');

	// Add elements to HTML body
	body.appendChild(navBar.header);
	body.appendChild(main);
});