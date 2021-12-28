import { pageLoader, navBar, main} from '../pageLoader/pageLoader';
import { homePage }  from '../home/home';
import { menuPage } from '../menu/menu';
import { contactPage } from '../contact/contact';

pageLoader();

const pages = (() => {
	const home = homePage();
	const menu = menuPage();
	const contact = contactPage();

	return { home, menu, contact};
})();

for (const navLink in navBar.tabs) {
	navBar.tabs[navLink].addEventListener('click', () => {
		main.innerText = '';
		main.appendChild(pages[navLink]);
	})
};

