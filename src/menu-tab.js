import { emptyElement } from './reusables-dom.js';

const initMenuTab = (div_content) => {
	emptyElement(div_content);
	const div_menu = document.createElement('div');
	div_menu.appendChild(document.createTextNode("MENU"));
	div_content.appendChild(div_menu);
}

export { initMenuTab }