import { emptyElement } from './reusables-dom.js';

const initContactTab = (div_content) => {
	emptyElement(div_content);

	const div_contact = document.createElement('div');
	div_contact.classList.add('mt-64', 'font-roboto', 'text-xl');
	div_contact.appendChild(document.createTextNode("The Blueprint Cafe"));
	div_contact.appendChild(document.createElement('br'));
	div_contact.appendChild(document.createTextNode("Blueprint Inc."));
	div_contact.appendChild(document.createElement('br'));
	div_contact.appendChild(document.createTextNode("14 Ocean Drive"));
	div_contact.appendChild(document.createElement('br'));
	div_contact.appendChild(document.createTextNode("92003 Oceanside, US"));
	div_contact.appendChild(document.createElement('br'));
	div_content.appendChild(div_contact);

	// const map = document.createElement('iframe');
	// map.setAttribute('src','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25947.955380667918!2d-117.36346216930825!3d33.20004057007558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc655e605b7705%3A0x19ecb3f398f9f87!2sOceanside%2C%20Kalifornien%2C%20USA!5e0!3m2!1sde!2sde!4v1589999154433!5m2!1sde!2sde'
	// map.setAttribute('width', '600');
	// map.setAttribute('height', '450');
	// map.setAttribute('frameborder', '0');
	// map.setAttribute('style', 'border:0;');
	// map.setAttribute('allowfullscreen', '');
	// map.setAttribute('aria-hidden', 'false');
	// map.setAttribute('tabindex', '0');

	// div_contact.appendChild(map);
}

export { initContactTab }