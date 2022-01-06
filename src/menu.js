import imgPizza from './assets/imgPizza.svg'
import imgChicken from './assets/imgChicken.svg';
import imgBurger from './assets/imgBurger.svg';
import imgHotDog from './assets/imgHotDog.svg';
import imgFish from './assets/imgFish.svg';

const itemCard = (name, price, image) => {
	const itemCard = document.createElement('div');
	itemCard.classList.add('menuItem');

	const itemName = document.createElement('span');
	itemName.classList.add('itemName');
	itemName.innerText = `${name}`;

	const itemImg = document.createElement('img');
	itemImg.classList.add('itemImg');
	itemImg.src = image;

	const itemPrice = document.createElement('span');
	itemPrice.innerText = `$${price}`;

	const itemElements = [itemName, itemImg, itemPrice];
	itemElements.forEach(element => itemCard.appendChild(element));

	return itemCard;
};

export const menuPage = (() => {
	const menu = document.createElement('section');
	menu.id = 'menu';

	const footer = document.createElement('footer');
	footer.id = 'menuFooter';
	footer.innerText = 'All orders come with large fries.';

	const menuItems = {
		pizza: {
			name: 'Demo Pizza',
			price: '12.99',
			img: imgPizza,
		},
		chicken: {
			name: 'Demo Chicken',
			price: '9.99',
			img: imgChicken,
		},
		burger: {
			name: 'Demo Burger',
			price: '10.99',
			img: imgBurger,
		},
		hotdog: {
			name: 'Demo Hot Dog',
			price: '10.99',
			img: imgHotDog,
		},
		fish: {
			name: 'Demo Fish',
			price: '11.99',
			img: imgFish,
		},
	};

	Object.values(menuItems).forEach(item => {
		const menuItem = itemCard(item.name, item.price, item.img);
		menu.appendChild(menuItem);
	});

	menu.appendChild(footer);

	return menu;
});