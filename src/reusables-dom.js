
const emptyElement = (elem) => {
	while(elem.firstChild){
		elem.removeChild(elem.lastChild);
	}
}

export { emptyElement }