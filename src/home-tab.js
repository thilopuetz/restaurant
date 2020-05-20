import { emptyElement } from './reusables-dom.js';

const initHomeTab = (div_content) => {
	emptyElement(div_content);

	// Init icon
	const i_coffee = document.createElement('i');
	i_coffee.classList.add('fas', 'fa-coffee', 'mt-64', 'h-4', 'w-4');
	div_content.appendChild(i_coffee);

	// Init headline
	const h1_mainheadline = document.createElement('h1');
	h1_mainheadline.classList.add('font-amatic', 'text-9xl');
	h1_mainheadline.appendChild(document.createTextNode("The Blueprint Cafe"));
	div_content.appendChild(h1_mainheadline);

	// Init info
	const p_welcome = document.createElement('p');
	p_welcome.classList.add('font-roboto', 'text-xl');
	p_welcome.appendChild(document.createTextNode("Welcome to the Blueprint Cafe."));
	div_content.appendChild(p_welcome);

	const p_info = document.createElement('p');
	p_info.classList.add('font-roboto', 'text-xl');
	p_info.appendChild(document.createTextNode("We provide all sorts of coffee an all kind of snacks that you can imagine. Just check out our website and we hope to see you soon."));
	div_content.appendChild(p_info);
}

export { initHomeTab }
