import './menu.css';

export const menuPage = (() => {
	const menu = document.createElement('div');
	menu.classList.add('menu');

	// temp
	menu.innerText = 'Menu Content';

	return menu;
});