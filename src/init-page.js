import { initNav } from './init-nav.js';

const initPage = (div_container) => {

	// Init background
	const div_background = document.createElement('div');
	div_background.classList.add('absolute', 'w-screen', 'h-screen', 'z-10');
	div_background.style = "background: url('../img/banner.jpg') center; background-size: cover; filter: brightness(.6) blur(1px)";
	div_container.before(div_background);

	// Init nav
	initNav(div_container);

	// Init content
	const div_content = document.createElement('div');
	div_content.classList.add('container', 'flex', 'flex-col', 'items-center', 'z-20', 'relative', 'text-gray-100', 'text-center');
	div_container.appendChild(div_content);

	return div_content;
}

export { initPage }
