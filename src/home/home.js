import './home.css';

export const homePage = (() => {
	const home = document.createElement('div');
	home.classList.add('home');

	// temp
	home.innerText = 'Home Content';

	return home;
});

