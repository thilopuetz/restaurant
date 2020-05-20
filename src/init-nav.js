
const initNav = (div_container) => {
	const div_container_nav = document.createElement('div');
	div_container_nav.classList.add('flex');
	div_container.appendChild(div_container_nav);
	const ul_nav = document.createElement('ul');
	ul_nav.classList.add('z-40', 'flex', 'w-full', 'justify-between', 'text-gray-100', 'font-amatic', 'text-4xl');
	div_container_nav.appendChild(ul_nav);

	for(let i=1; i<=3; i++){
		let li = document.createElement('li');
		li.classList.add('flex-1', 'flex', 'justify-center');
		let a = document.createElement('a');
		a.classList.add('hover:text-gray-500', 'cursor-pointer');
		switch(i){
			case 1:
				a.setAttribute('id', 'home-tab');
				a.appendChild(document.createTextNode("Home"));
				break;
			case 2:
				a.setAttribute('id', 'menu-tab');
				a.appendChild(document.createTextNode("Menu"));
				break;
			case 3: 
				a.setAttribute('id', 'contact-tab');
				a.appendChild(document.createTextNode("Contact"));
				break;
		}
		li.appendChild(a)
		ul_nav.appendChild(li);	
	}
}

export { initNav }