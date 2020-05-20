import { initPage } from './init-page.js';
import { initHomeTab } from './home-tab.js';
import { initMenuTab } from './menu-tab.js';
import { initContactTab } from './contact-tab.js';

const div_container = document.getElementById('container');
const div_content = initPage(div_container);
initHomeTab(div_content);


// Event Listeners
document.getElementById('home-tab').addEventListener('click', () => {
	initHomeTab(div_content);
});

document.getElementById('menu-tab').addEventListener('click', () => {
	initMenuTab(div_content);
});

document.getElementById('contact-tab').addEventListener('click', () => {
	initContactTab(div_content);
});