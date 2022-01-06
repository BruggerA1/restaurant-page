export const contactPage = (() => {
	const contact = document.createElement('section');
	contact.id = 'contact';

	// contact title
	const contactTitle = document.createElement('span');
	contactTitle.id = 'contactTitle';
	contactTitle.innerText = 'Contact Us';

	// phone number
	const phoneNumber = document.createElement('span');
	phoneNumber.id = 'phoneNumber'
	phoneNumber.innerText = '(845) 216 – 5046';

	// map frame
	const mapFrame = document.createElement('iframe');
	mapFrame.id = 'mapFrame';
	mapFrame.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25893.42386583848!2d-78.66480046044921!3d35.78328570000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ac5f65ddf8ecf3%3A0x525373144ff6e948!2sDeMos%20Pizzeria%20%26%20Deli!5e0!3m2!1sen!2sus!4v1641133656876!5m2!1sen!2sus';


	contact.appendChild(contactTitle);
	contact.appendChild(phoneNumber);
	contact.appendChild(mapFrame);

	return contact;
});
