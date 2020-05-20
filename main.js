/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/contact-tab.js":
/*!****************************!*\
  !*** ./src/contact-tab.js ***!
  \****************************/
/*! exports provided: initContactTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initContactTab\", function() { return initContactTab; });\n/* harmony import */ var _reusables_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reusables-dom.js */ \"./src/reusables-dom.js\");\n\r\n\r\nconst initContactTab = (div_content) => {\r\n\tObject(_reusables_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"emptyElement\"])(div_content);\r\n\r\n\tconst div_contact = document.createElement('div');\r\n\tdiv_contact.classList.add('mt-64', 'font-roboto', 'text-xl');\r\n\tdiv_contact.appendChild(document.createTextNode(\"The Blueprint Cafe\"));\r\n\tdiv_contact.appendChild(document.createElement('br'));\r\n\tdiv_contact.appendChild(document.createTextNode(\"Blueprint Inc.\"));\r\n\tdiv_contact.appendChild(document.createElement('br'));\r\n\tdiv_contact.appendChild(document.createTextNode(\"14 Ocean Drive\"));\r\n\tdiv_contact.appendChild(document.createElement('br'));\r\n\tdiv_contact.appendChild(document.createTextNode(\"92003 Oceanside, US\"));\r\n\tdiv_contact.appendChild(document.createElement('br'));\r\n\tdiv_content.appendChild(div_contact);\r\n\r\n\t// const map = document.createElement('iframe');\r\n\t// map.setAttribute('src','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25947.955380667918!2d-117.36346216930825!3d33.20004057007558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc655e605b7705%3A0x19ecb3f398f9f87!2sOceanside%2C%20Kalifornien%2C%20USA!5e0!3m2!1sde!2sde!4v1589999154433!5m2!1sde!2sde'\r\n\t// map.setAttribute('width', '600');\r\n\t// map.setAttribute('height', '450');\r\n\t// map.setAttribute('frameborder', '0');\r\n\t// map.setAttribute('style', 'border:0;');\r\n\t// map.setAttribute('allowfullscreen', '');\r\n\t// map.setAttribute('aria-hidden', 'false');\r\n\t// map.setAttribute('tabindex', '0');\r\n\r\n\t// div_contact.appendChild(map);\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/contact-tab.js?");

/***/ }),

/***/ "./src/home-tab.js":
/*!*************************!*\
  !*** ./src/home-tab.js ***!
  \*************************/
/*! exports provided: initHomeTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initHomeTab\", function() { return initHomeTab; });\n/* harmony import */ var _reusables_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reusables-dom.js */ \"./src/reusables-dom.js\");\n\r\n\r\nconst initHomeTab = (div_content) => {\r\n\tObject(_reusables_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"emptyElement\"])(div_content);\r\n\r\n\t// Init icon\r\n\tconst i_coffee = document.createElement('i');\r\n\ti_coffee.classList.add('fas', 'fa-coffee', 'mt-64', 'h-4', 'w-4');\r\n\tdiv_content.appendChild(i_coffee);\r\n\r\n\t// Init headline\r\n\tconst h1_mainheadline = document.createElement('h1');\r\n\th1_mainheadline.classList.add('font-amatic', 'text-9xl');\r\n\th1_mainheadline.appendChild(document.createTextNode(\"The Blueprint Cafe\"));\r\n\tdiv_content.appendChild(h1_mainheadline);\r\n\r\n\t// Init info\r\n\tconst p_welcome = document.createElement('p');\r\n\tp_welcome.classList.add('font-roboto', 'text-xl');\r\n\tp_welcome.appendChild(document.createTextNode(\"Welcome to the Blueprint Cafe.\"));\r\n\tdiv_content.appendChild(p_welcome);\r\n\r\n\tconst p_info = document.createElement('p');\r\n\tp_info.classList.add('font-roboto', 'text-xl');\r\n\tp_info.appendChild(document.createTextNode(\"We provide all sorts of coffee an all kind of snacks that you can imagine. Just check out our website and we hope to see you soon.\"));\r\n\tdiv_content.appendChild(p_info);\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/home-tab.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _init_page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init-page.js */ \"./src/init-page.js\");\n/* harmony import */ var _home_tab_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-tab.js */ \"./src/home-tab.js\");\n/* harmony import */ var _menu_tab_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-tab.js */ \"./src/menu-tab.js\");\n/* harmony import */ var _contact_tab_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-tab.js */ \"./src/contact-tab.js\");\n\r\n\r\n\r\n\r\n\r\nconst div_container = document.getElementById('container');\r\nconst div_content = Object(_init_page_js__WEBPACK_IMPORTED_MODULE_0__[\"initPage\"])(div_container);\r\nObject(_home_tab_js__WEBPACK_IMPORTED_MODULE_1__[\"initHomeTab\"])(div_content);\r\n\r\n\r\n// Event Listeners\r\ndocument.getElementById('home-tab').addEventListener('click', () => {\r\n\tObject(_home_tab_js__WEBPACK_IMPORTED_MODULE_1__[\"initHomeTab\"])(div_content);\r\n});\r\n\r\ndocument.getElementById('menu-tab').addEventListener('click', () => {\r\n\tObject(_menu_tab_js__WEBPACK_IMPORTED_MODULE_2__[\"initMenuTab\"])(div_content);\r\n});\r\n\r\ndocument.getElementById('contact-tab').addEventListener('click', () => {\r\n\tObject(_contact_tab_js__WEBPACK_IMPORTED_MODULE_3__[\"initContactTab\"])(div_content);\r\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/init-nav.js":
/*!*************************!*\
  !*** ./src/init-nav.js ***!
  \*************************/
/*! exports provided: initNav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initNav\", function() { return initNav; });\n\r\nconst initNav = (div_container) => {\r\n\tconst div_container_nav = document.createElement('div');\r\n\tdiv_container_nav.classList.add('flex');\r\n\tdiv_container.appendChild(div_container_nav);\r\n\tconst ul_nav = document.createElement('ul');\r\n\tul_nav.classList.add('z-40', 'flex', 'w-full', 'justify-between', 'text-gray-100', 'font-amatic', 'text-4xl');\r\n\tdiv_container_nav.appendChild(ul_nav);\r\n\r\n\tfor(let i=1; i<=3; i++){\r\n\t\tlet li = document.createElement('li');\r\n\t\tli.classList.add('flex-1', 'flex', 'justify-center');\r\n\t\tlet a = document.createElement('a');\r\n\t\ta.classList.add('hover:text-gray-500', 'cursor-pointer');\r\n\t\tswitch(i){\r\n\t\t\tcase 1:\r\n\t\t\t\ta.setAttribute('id', 'home-tab');\r\n\t\t\t\ta.appendChild(document.createTextNode(\"Home\"));\r\n\t\t\t\tbreak;\r\n\t\t\tcase 2:\r\n\t\t\t\ta.setAttribute('id', 'menu-tab');\r\n\t\t\t\ta.appendChild(document.createTextNode(\"Menu\"));\r\n\t\t\t\tbreak;\r\n\t\t\tcase 3: \r\n\t\t\t\ta.setAttribute('id', 'contact-tab');\r\n\t\t\t\ta.appendChild(document.createTextNode(\"Contact\"));\r\n\t\t\t\tbreak;\r\n\t\t}\r\n\t\tli.appendChild(a)\r\n\t\tul_nav.appendChild(li);\t\r\n\t}\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/init-nav.js?");

/***/ }),

/***/ "./src/init-page.js":
/*!**************************!*\
  !*** ./src/init-page.js ***!
  \**************************/
/*! exports provided: initPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initPage\", function() { return initPage; });\n/* harmony import */ var _init_nav_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init-nav.js */ \"./src/init-nav.js\");\n\r\n\r\nconst initPage = (div_container) => {\r\n\r\n\t// Init background\r\n\tconst div_background = document.createElement('div');\r\n\tdiv_background.classList.add('absolute', 'w-screen', 'h-screen', 'z-10');\r\n\tdiv_background.style = \"background: url('img/banner.jpg') center; background-size: cover; filter: brightness(.6) blur(1px)\";\r\n\tdiv_container.before(div_background);\r\n\r\n\t// Init nav\r\n\tObject(_init_nav_js__WEBPACK_IMPORTED_MODULE_0__[\"initNav\"])(div_container);\r\n\r\n\t// Init content\r\n\tconst div_content = document.createElement('div');\r\n\tdiv_content.classList.add('container', 'flex', 'flex-col', 'items-center', 'z-20', 'relative', 'text-gray-100', 'text-center');\r\n\tdiv_container.appendChild(div_content);\r\n\r\n\treturn div_content;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/init-page.js?");

/***/ }),

/***/ "./src/menu-tab.js":
/*!*************************!*\
  !*** ./src/menu-tab.js ***!
  \*************************/
/*! exports provided: initMenuTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initMenuTab\", function() { return initMenuTab; });\n/* harmony import */ var _reusables_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reusables-dom.js */ \"./src/reusables-dom.js\");\n\r\n\r\nconst initMenuTab = (div_content) => {\r\n\tObject(_reusables_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"emptyElement\"])(div_content);\r\n\r\n\tconst div_menu = document.createElement('div');\r\n\tdiv_menu.classList.add('flex', 'justitfy-center');\r\n\tdiv_menu.classList.add('mt-16', 'w-3/5');\r\n\tconst img = document.createElement('img');\r\n\timg.setAttribute('src', 'img/menu.jpg');\r\n\tdiv_menu.appendChild(img);\r\n\tdiv_content.appendChild(div_menu);\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/menu-tab.js?");

/***/ }),

/***/ "./src/reusables-dom.js":
/*!******************************!*\
  !*** ./src/reusables-dom.js ***!
  \******************************/
/*! exports provided: emptyElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"emptyElement\", function() { return emptyElement; });\n\r\nconst emptyElement = (elem) => {\r\n\twhile(elem.firstChild){\r\n\t\telem.removeChild(elem.lastChild);\r\n\t}\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/reusables-dom.js?");

/***/ })

/******/ });