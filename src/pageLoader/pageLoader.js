import './pageLoader.css'

const navLink = (name) => {
	const a = document.createElement('a');
	a.href='#';
	a.innerText = name;

	return a;
};

export const navBar = (() => {
	const header = document.createElement('header');

	const tabs = (() => {
		const home = navLink('home');
		const menu = navLink('menu');
		const contact = navLink('contact');

		return { home, menu, contact };
	})();

	for (const navLink in tabs) {
		header.appendChild(tabs[navLink]);
	};

	return { header, tabs };
})();

export const main = (() => {
	const main = document.createElement('main');

	return main;
})();

export const pageLoader = (() => {
	const body = document.querySelector('body');

	body.appendChild(navBar.header);
	body.appendChild(main);
});

