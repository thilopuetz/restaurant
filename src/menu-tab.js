import { emptyElement } from './reusables-dom.js';

const initMenuTab = (div_content) => {
	emptyElement(div_content);

	const div_menu = document.createElement('div');
	div_menu.classList.add('flex', 'justitfy-center');
	div_menu.classList.add('mt-16', 'w-3/5');
	const img = document.createElement('img');
	img.setAttribute('src', '../img/menu.jpg');
	div_menu.appendChild(img);
	div_content.appendChild(div_menu);
}

export { initMenuTab }