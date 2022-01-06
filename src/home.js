import waiterPNG from './assets/imgWaiter.png';

export const homePage = (() => {
	const home = document.createElement('section');
	home.id = 'home';

	// restaurant name
	const restaurantName = document.createElement('span');
	restaurantName.id = 'restaurantName';
	restaurantName.innerText = 'Demo Restaurant';

	// restaurant hours
	const restaurantHours = document.createElement('span');
	restaurantHours.id = 'restaurantHours';
	restaurantHours.innerText = 'Open Weekdays | 5am - 11pm';

	// waiter img
	const waiterImg = new Image();
	waiterImg.src = waiterPNG;
	waiterImg.id = 'waiterImg';

	// Order Link
	const orderBtn = document.createElement('button');
	orderBtn.id = 'orderBtn';
	orderBtn.innerText = 'Order Now';

	const homeElements = [restaurantName, restaurantHours, waiterImg, orderBtn];
	homeElements.forEach(element => home.appendChild(element));

	return home;
});