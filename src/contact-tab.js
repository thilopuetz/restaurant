import { emptyElement } from './reusables-dom.js';

const initContactTab = (div_content) => {
	emptyElement(div_content);
	const div_contact = document.createElement('div');
	div_contact.appendChild(document.createTextNode("CONTACT"));
	div_content.appendChild(div_contact);
}

export { initContactTab }