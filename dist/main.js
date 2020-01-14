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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_checkServicesStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/checkServicesStatus */ \"./src/utils/checkServicesStatus.ts\");\n/* harmony import */ var _services_ga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/ga */ \"./src/services/ga/index.ts\");\n/* harmony import */ var _services_hotjar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/hotjar */ \"./src/services/hotjar/index.ts\");\n/* harmony import */ var _templates_Banner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templates/Banner */ \"./src/templates/Banner/index.ts\");\n/* harmony import */ var _utils_actionListener__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/actionListener */ \"./src/utils/actionListener.ts\");\n\n\n\n\n\nconst services = [\n    {\n        name: \"ga\",\n        callback: (code) => Object(_services_ga__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(code)\n    },\n    {\n        name: \"hotjar\",\n        callback: (code) => Object(_services_hotjar__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(code)\n    }\n];\n// initCookie({\n//   matomo: () => alert(\"test\"),\n// });\nfunction init() {\n    const servicesStringify = localStorage.getItem(\"services\");\n    if (servicesStringify) {\n        const services = JSON.parse(servicesStringify);\n        console.log(services.allowGa);\n        if (Object(_utils_checkServicesStatus__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(services.allowGa, services.allowHotjar) === false) {\n            console.log(\"all services are false\");\n        }\n        if (Object(_utils_checkServicesStatus__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(services.allowGa, services.allowHotjar) === true) {\n            console.log(\"all services are true\");\n            Object(_services_ga__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(999999);\n            Object(_services_hotjar__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(111111);\n        }\n    }\n    if (!servicesStringify) {\n        console.log(\"localStorage is undefined\");\n        localStorage.setItem(\"services\", JSON.stringify({ allowGa: false, allowHotjar: false }));\n    }\n    const $bannerHomePage = document.getElementById(\"js-cookie-banner\");\n    if ($bannerHomePage) {\n        $bannerHomePage.innerHTML = Object(_templates_Banner__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    }\n    Object(_utils_actionListener__WEBPACK_IMPORTED_MODULE_4__[\"actionListener\"])();\n}\ninit();\n/* harmony default export */ __webpack_exports__[\"default\"] = (init);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2luZGV4LnRzP2M2YWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNoZWNrU2VydmljZXNTdGF0dXMgZnJvbSBcIi4vdXRpbHMvY2hlY2tTZXJ2aWNlc1N0YXR1c1wiO1xuaW1wb3J0IGluaXRHYSBmcm9tIFwiLi9zZXJ2aWNlcy9nYVwiO1xuaW1wb3J0IGluaXRIb3RqYXIgZnJvbSBcIi4vc2VydmljZXMvaG90amFyXCI7XG5pbXBvcnQgQmFubmVyIGZyb20gXCIuL3RlbXBsYXRlcy9CYW5uZXJcIjtcbmltcG9ydCBDdXN0b21TZWxlY3Rpb24gZnJvbSBcIi4vdGVtcGxhdGVzL0N1c3RvbVNlbGVjdGlvblwiO1xuaW1wb3J0IHsgYWN0aW9uTGlzdGVuZXIsIGN1c3RvbUFjdGlvbkxpc3RlbmVyIH0gZnJvbSBcIi4vdXRpbHMvYWN0aW9uTGlzdGVuZXJcIjtcblxuaW50ZXJmYWNlIFNlcnZpY2VzIHtcbiAgYWxsb3dHYTogYm9vbGVhbjtcbiAgYWxsb3dIb3RqYXI6IGJvb2xlYW47XG59XG5cbmNvbnN0IHNlcnZpY2VzID0gW1xuICB7XG4gICAgbmFtZTogXCJnYVwiLFxuICAgIGNhbGxiYWNrOiAoY29kZTogbnVtYmVyKSA9PiBpbml0R2EoY29kZSlcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiaG90amFyXCIsXG4gICAgY2FsbGJhY2s6IChjb2RlOiBudW1iZXIpID0+IGluaXRIb3RqYXIoY29kZSlcbiAgfVxuXTtcblxuLy8gaW5pdENvb2tpZSh7XG4vLyAgIG1hdG9tbzogKCkgPT4gYWxlcnQoXCJ0ZXN0XCIpLFxuLy8gfSk7XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gIGNvbnN0IHNlcnZpY2VzU3RyaW5naWZ5OiBudWxsIHwgc3RyaW5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzZXJ2aWNlc1wiKTtcblxuICBpZiAoc2VydmljZXNTdHJpbmdpZnkpIHtcbiAgICBjb25zdCBzZXJ2aWNlczogU2VydmljZXMgPSBKU09OLnBhcnNlKHNlcnZpY2VzU3RyaW5naWZ5KTtcbiAgICBjb25zb2xlLmxvZyhzZXJ2aWNlcy5hbGxvd0dhKTtcblxuICAgIGlmIChjaGVja1NlcnZpY2VzU3RhdHVzKHNlcnZpY2VzLmFsbG93R2EsIHNlcnZpY2VzLmFsbG93SG90amFyKSA9PT0gZmFsc2UpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiYWxsIHNlcnZpY2VzIGFyZSBmYWxzZVwiKTtcbiAgICB9XG5cbiAgICBpZiAoY2hlY2tTZXJ2aWNlc1N0YXR1cyhzZXJ2aWNlcy5hbGxvd0dhLCBzZXJ2aWNlcy5hbGxvd0hvdGphcikgPT09IHRydWUpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiYWxsIHNlcnZpY2VzIGFyZSB0cnVlXCIpO1xuICAgICAgaW5pdEdhKDk5OTk5OSk7XG4gICAgICBpbml0SG90amFyKDExMTExMSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFzZXJ2aWNlc1N0cmluZ2lmeSkge1xuICAgIGNvbnNvbGUubG9nKFwibG9jYWxTdG9yYWdlIGlzIHVuZGVmaW5lZFwiKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgIFwic2VydmljZXNcIixcbiAgICAgIEpTT04uc3RyaW5naWZ5KHsgYWxsb3dHYTogZmFsc2UsIGFsbG93SG90amFyOiBmYWxzZSB9KVxuICAgICk7XG4gIH1cblxuICBjb25zdCAkYmFubmVySG9tZVBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLWNvb2tpZS1iYW5uZXJcIik7XG4gIGlmICgkYmFubmVySG9tZVBhZ2UpIHtcbiAgICAkYmFubmVySG9tZVBhZ2UuaW5uZXJIVE1MID0gQmFubmVyKCk7XG4gIH1cblxuICBhY3Rpb25MaXN0ZW5lcigpO1xufVxuXG5pbml0KCk7XG5cbmV4cG9ydCBkZWZhdWx0IGluaXQ7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ }),

/***/ "./src/services/ga/index.ts":
/*!**********************************!*\
  !*** ./src/services/ga/index.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst initGa = (code) => console.log(code);\n/* harmony default export */ __webpack_exports__[\"default\"] = (initGa);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvZ2EvaW5kZXgudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3NlcnZpY2VzL2dhL2luZGV4LnRzPzFhNGYiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaW5pdEdhID0gKGNvZGU6IG51bWJlcikgPT4gY29uc29sZS5sb2coY29kZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRHYTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUVBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/ga/index.ts\n");

/***/ }),

/***/ "./src/services/hotjar/index.ts":
/*!**************************************!*\
  !*** ./src/services/hotjar/index.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst initHotjar = (code) => console.log(code);\n/* harmony default export */ __webpack_exports__[\"default\"] = (initHotjar);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvaG90amFyL2luZGV4LnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9zZXJ2aWNlcy9ob3RqYXIvaW5kZXgudHM/M2QzNiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpbml0SG90amFyID0gKGNvZGU6IG51bWJlcikgPT4gY29uc29sZS5sb2coY29kZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRIb3RqYXI7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFFQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/hotjar/index.ts\n");

/***/ }),

/***/ "./src/templates/Banner/index.ts":
/*!***************************************!*\
  !*** ./src/templates/Banner/index.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Banner = () => `\n     <div id=\"banner-cookie\">\n          <button class=\"js-cookie-button-allow\">Accepter</button>\n          <button class=\"js-cookie-button-deny\">Refuser</button>\n          <button class=\"js-cookie-button-customize\">Personnaliser</button>\n    </div>\n`;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Banner);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGVtcGxhdGVzL0Jhbm5lci9pbmRleC50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdGVtcGxhdGVzL0Jhbm5lci9pbmRleC50cz9jNjgwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEJhbm5lciA9ICgpID0+IGBcbiAgICAgPGRpdiBpZD1cImJhbm5lci1jb29raWVcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwianMtY29va2llLWJ1dHRvbi1hbGxvd1wiPkFjY2VwdGVyPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImpzLWNvb2tpZS1idXR0b24tZGVueVwiPlJlZnVzZXI8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwianMtY29va2llLWJ1dHRvbi1jdXN0b21pemVcIj5QZXJzb25uYWxpc2VyPC9idXR0b24+XG4gICAgPC9kaXY+XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBCYW5uZXI7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7Ozs7OztBQU1BO0FBRUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/templates/Banner/index.ts\n");

/***/ }),

/***/ "./src/templates/CustomSelection/index.ts":
/*!************************************************!*\
  !*** ./src/templates/CustomSelection/index.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst CustomSelection = () => `\n    <div id=\"custom-selection\">\n      <form class=\"custom-cookie-form\">\n          <div>\n            <input type=\"checkbox\" id=\"ga\" name=\"allowGa\" value=\"true\">\n            <label for=\"ga\">ga</label>\n          </div>\n          <div>\n            <input type=\"checkbox\" id=\"hotJar\" name=\"allowHotjar\" value=\"true\">\n            <label for=\"hotJar\">hotJar</label>\n          </div>\n          <div>\n            <button type=\"submit\" class=\"js-button-save-custom\">Valider</button>\n          </div>\n      </form>\n    </div>\n`;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomSelection);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGVtcGxhdGVzL0N1c3RvbVNlbGVjdGlvbi9pbmRleC50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdGVtcGxhdGVzL0N1c3RvbVNlbGVjdGlvbi9pbmRleC50cz80MzMwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEN1c3RvbVNlbGVjdGlvbiA9ICgpID0+IGBcbiAgICA8ZGl2IGlkPVwiY3VzdG9tLXNlbGVjdGlvblwiPlxuICAgICAgPGZvcm0gY2xhc3M9XCJjdXN0b20tY29va2llLWZvcm1cIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiZ2FcIiBuYW1lPVwiYWxsb3dHYVwiIHZhbHVlPVwidHJ1ZVwiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImdhXCI+Z2E8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJob3RKYXJcIiBuYW1lPVwiYWxsb3dIb3RqYXJcIiB2YWx1ZT1cInRydWVcIj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJob3RKYXJcIj5ob3RKYXI8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImpzLWJ1dHRvbi1zYXZlLWN1c3RvbVwiPlZhbGlkZXI8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbVNlbGVjdGlvbjtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQTtBQUVBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/templates/CustomSelection/index.ts\n");

/***/ }),

/***/ "./src/utils/actionListener.ts":
/*!*************************************!*\
  !*** ./src/utils/actionListener.ts ***!
  \*************************************/
/*! exports provided: customActionListener, actionListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"customActionListener\", function() { return customActionListener; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"actionListener\", function() { return actionListener; });\n/* harmony import */ var _allowAllCookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allowAllCookies */ \"./src/utils/allowAllCookies.ts\");\n/* harmony import */ var _denyAllCookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./denyAllCookies */ \"./src/utils/denyAllCookies.ts\");\n/* harmony import */ var _openSelection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./openSelection */ \"./src/utils/openSelection.ts\");\n\n\n\nconst actionListener = () => {\n    const actions = [\n        {\n            className: \".js-cookie-button-allow\",\n            action: _allowAllCookies__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n        },\n        {\n            className: \".js-cookie-button-deny\",\n            action: _denyAllCookies__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n        },\n        {\n            className: \".js-cookie-button-customize\",\n            action: _openSelection__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n        }\n    ];\n    actions.forEach(({ className, action }) => {\n        const $currentAction = document.querySelector(className);\n        if ($currentAction) {\n            $currentAction.addEventListener(\"click\", action);\n        }\n    });\n};\nconst customActionListener = () => {\n    const forms = document.querySelector(\".custom-cookie-form\");\n    if (forms !== null) {\n        console.log(\"444\");\n        forms.addEventListener(\"submit\", function (e) {\n            e.preventDefault();\n            console.log(e);\n        });\n    }\n};\n\n// export default actionListener;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvYWN0aW9uTGlzdGVuZXIudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3V0aWxzL2FjdGlvbkxpc3RlbmVyLnRzP2I5ZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNldERpc3BsYXkgZnJvbSBcIi4uL3V0aWxzL3NldERpc3BsYXlcIjtcbmltcG9ydCBhbGxvd0FsbENvb2tpZXMgZnJvbSBcIi4vYWxsb3dBbGxDb29raWVzXCI7XG5pbXBvcnQgZGVueUFsbENvb2tpZXMgZnJvbSBcIi4vZGVueUFsbENvb2tpZXNcIjtcbmltcG9ydCBvcGVuU2VsZWN0aW9uIGZyb20gXCIuL29wZW5TZWxlY3Rpb25cIjtcblxuY29uc3QgYWN0aW9uTGlzdGVuZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGFjdGlvbnMgPSBbXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiBcIi5qcy1jb29raWUtYnV0dG9uLWFsbG93XCIsXG4gICAgICBhY3Rpb246IGFsbG93QWxsQ29va2llc1xuICAgIH0sXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiBcIi5qcy1jb29raWUtYnV0dG9uLWRlbnlcIixcbiAgICAgIGFjdGlvbjogZGVueUFsbENvb2tpZXNcbiAgICB9LFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogXCIuanMtY29va2llLWJ1dHRvbi1jdXN0b21pemVcIixcbiAgICAgIGFjdGlvbjogb3BlblNlbGVjdGlvblxuICAgIH1cbiAgXTtcblxuICBhY3Rpb25zLmZvckVhY2goKHsgY2xhc3NOYW1lLCBhY3Rpb24gfSkgPT4ge1xuICAgIGNvbnN0ICRjdXJyZW50QWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjbGFzc05hbWUpO1xuICAgIGlmICgkY3VycmVudEFjdGlvbikge1xuICAgICAgJGN1cnJlbnRBY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFjdGlvbik7XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IGN1c3RvbUFjdGlvbkxpc3RlbmVyID0gKCkgPT4ge1xuICBjb25zdCBmb3JtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3VzdG9tLWNvb2tpZS1mb3JtXCIpO1xuICBpZiAoZm9ybXMgIT09IG51bGwpIHtcbiAgICBjb25zb2xlLmxvZyhcIjQ0NFwiKTtcbiAgICBmb3Jtcy5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIH0pO1xuICB9XG59O1xuZXhwb3J0IHsgY3VzdG9tQWN0aW9uTGlzdGVuZXIsIGFjdGlvbkxpc3RlbmVyIH07XG4vLyBleHBvcnQgZGVmYXVsdCBhY3Rpb25MaXN0ZW5lcjtcbiJdLCJtYXBwaW5ncyI6IkFBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/utils/actionListener.ts\n");

/***/ }),

/***/ "./src/utils/allowAllCookies.ts":
/*!**************************************!*\
  !*** ./src/utils/allowAllCookies.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_setDisplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/setDisplay */ \"./src/utils/setDisplay.ts\");\n\nconst servicesList = [\"ga\", \"hotJar\"];\nconst allowAllCookies = () => {\n    setAllLocalStoragesServicesTrue(servicesList);\n    document.location.reload();\n    Object(_utils_setDisplay__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"banner-cookie\", \"none\");\n};\nconst setAllLocalStoragesServicesTrue = (servicesList) => {\n    servicesList.forEach(service => (localStorage.services = JSON.stringify({\n        allowGa: true,\n        allowHotjar: true\n    })));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (allowAllCookies);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvYWxsb3dBbGxDb29raWVzLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy91dGlscy9hbGxvd0FsbENvb2tpZXMudHM/NGZjMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2V0RGlzcGxheSBmcm9tIFwiLi4vdXRpbHMvc2V0RGlzcGxheVwiO1xuXG5jb25zdCBzZXJ2aWNlc0xpc3QgPSBbXCJnYVwiLCBcImhvdEphclwiXTtcblxuY29uc3QgYWxsb3dBbGxDb29raWVzID0gKCkgPT4ge1xuICBzZXRBbGxMb2NhbFN0b3JhZ2VzU2VydmljZXNUcnVlKHNlcnZpY2VzTGlzdCk7XG4gIGRvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCgpO1xuICBzZXREaXNwbGF5KFwiYmFubmVyLWNvb2tpZVwiLCBcIm5vbmVcIik7XG59O1xuXG5jb25zdCBzZXRBbGxMb2NhbFN0b3JhZ2VzU2VydmljZXNUcnVlID0gKHNlcnZpY2VzTGlzdDogQXJyYXk8c3RyaW5nPikgPT4ge1xuICBzZXJ2aWNlc0xpc3QuZm9yRWFjaChcbiAgICBzZXJ2aWNlID0+XG4gICAgICAobG9jYWxTdG9yYWdlLnNlcnZpY2VzID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBhbGxvd0dhOiB0cnVlLFxuICAgICAgICBhbGxvd0hvdGphcjogdHJ1ZVxuICAgICAgfSkpXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhbGxvd0FsbENvb2tpZXM7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/allowAllCookies.ts\n");

/***/ }),

/***/ "./src/utils/checkServicesStatus.ts":
/*!******************************************!*\
  !*** ./src/utils/checkServicesStatus.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction checkServicesStatus(ga, hotjar) {\n    if (ga && hotjar) {\n        return true;\n    }\n    else {\n        return false;\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (checkServicesStatus);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvY2hlY2tTZXJ2aWNlc1N0YXR1cy50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdXRpbHMvY2hlY2tTZXJ2aWNlc1N0YXR1cy50cz9kY2EyIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNoZWNrU2VydmljZXNTdGF0dXMoZ2E6IGJvb2xlYW4sIGhvdGphcjogYm9vbGVhbikge1xuICBpZiAoZ2EgJiYgaG90amFyKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBjaGVja1NlcnZpY2VzU3RhdHVzO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/checkServicesStatus.ts\n");

/***/ }),

/***/ "./src/utils/denyAllCookies.ts":
/*!*************************************!*\
  !*** ./src/utils/denyAllCookies.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_setDisplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/setDisplay */ \"./src/utils/setDisplay.ts\");\n\nconst servicesList = [\"ga\", \"hotJar\"];\nconst denyAllCookies = () => {\n    Object(_utils_setDisplay__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"banner-cookie\", \"none\");\n    setAllLocalStoragesServicesFalse(servicesList);\n};\nconst setAllLocalStoragesServicesFalse = (servicesList) => {\n    servicesList.forEach(service => (localStorage.services = JSON.stringify({\n        allowGa: false,\n        allowHotjar: false\n    })));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (denyAllCookies);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvZGVueUFsbENvb2tpZXMudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3V0aWxzL2RlbnlBbGxDb29raWVzLnRzPzY3NTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNldERpc3BsYXkgZnJvbSBcIi4uL3V0aWxzL3NldERpc3BsYXlcIjtcblxuY29uc3Qgc2VydmljZXNMaXN0ID0gW1wiZ2FcIiwgXCJob3RKYXJcIl07XG5cbmNvbnN0IGRlbnlBbGxDb29raWVzID0gKCkgPT4ge1xuICBzZXREaXNwbGF5KFwiYmFubmVyLWNvb2tpZVwiLCBcIm5vbmVcIik7XG4gIHNldEFsbExvY2FsU3RvcmFnZXNTZXJ2aWNlc0ZhbHNlKHNlcnZpY2VzTGlzdCk7XG59O1xuXG5jb25zdCBzZXRBbGxMb2NhbFN0b3JhZ2VzU2VydmljZXNGYWxzZSA9IChzZXJ2aWNlc0xpc3Q6IEFycmF5PHN0cmluZz4pID0+IHtcbiAgc2VydmljZXNMaXN0LmZvckVhY2goXG4gICAgc2VydmljZSA9PlxuICAgICAgKGxvY2FsU3RvcmFnZS5zZXJ2aWNlcyA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgYWxsb3dHYTogZmFsc2UsXG4gICAgICAgIGFsbG93SG90amFyOiBmYWxzZVxuICAgICAgfSkpXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZW55QWxsQ29va2llcztcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/denyAllCookies.ts\n");

/***/ }),

/***/ "./src/utils/openSelection.ts":
/*!************************************!*\
  !*** ./src/utils/openSelection.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _templates_CustomSelection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates/CustomSelection */ \"./src/templates/CustomSelection/index.ts\");\n/* harmony import */ var _actionListener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actionListener */ \"./src/utils/actionListener.ts\");\n\n\nconst openSelection = () => {\n    const customSelectionView = document.getElementById(\"js-custom-selection\");\n    if (customSelectionView) {\n        customSelectionView.innerHTML = Object(_templates_CustomSelection__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    }\n    Object(_actionListener__WEBPACK_IMPORTED_MODULE_1__[\"customActionListener\"])();\n};\n// setDisplay(\"js-custom-selection\", \"block\")\n/* harmony default export */ __webpack_exports__[\"default\"] = (openSelection);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvb3BlblNlbGVjdGlvbi50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdXRpbHMvb3BlblNlbGVjdGlvbi50cz9hN2YyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzZXREaXNwbGF5IGZyb20gXCIuLi91dGlscy9zZXREaXNwbGF5XCI7XG5pbXBvcnQgQ3VzdG9tU2VsZWN0aW9uIGZyb20gXCIuLi90ZW1wbGF0ZXMvQ3VzdG9tU2VsZWN0aW9uXCI7XG5pbXBvcnQgeyBjdXN0b21BY3Rpb25MaXN0ZW5lciB9IGZyb20gXCIuL2FjdGlvbkxpc3RlbmVyXCI7XG5cbmNvbnN0IG9wZW5TZWxlY3Rpb24gPSAoKSA9PiB7XG4gIGNvbnN0IGN1c3RvbVNlbGVjdGlvblZpZXcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLWN1c3RvbS1zZWxlY3Rpb25cIik7XG4gIGlmIChjdXN0b21TZWxlY3Rpb25WaWV3KSB7XG4gICAgY3VzdG9tU2VsZWN0aW9uVmlldy5pbm5lckhUTUwgPSBDdXN0b21TZWxlY3Rpb24oKTtcbiAgfVxuICBjdXN0b21BY3Rpb25MaXN0ZW5lcigpO1xufTtcbi8vIHNldERpc3BsYXkoXCJqcy1jdXN0b20tc2VsZWN0aW9uXCIsIFwiYmxvY2tcIilcblxuZXhwb3J0IGRlZmF1bHQgb3BlblNlbGVjdGlvbjtcbiJdLCJtYXBwaW5ncyI6IkFBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/openSelection.ts\n");

/***/ }),

/***/ "./src/utils/setDisplay.ts":
/*!*********************************!*\
  !*** ./src/utils/setDisplay.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst setDisplay = (id, status) => {\n    const $element = document.getElementById(id);\n    if ($element) {\n        $element.style.display = status;\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (setDisplay);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvc2V0RGlzcGxheS50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdXRpbHMvc2V0RGlzcGxheS50cz84NDJmIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNldERpc3BsYXkgPSAoaWQ6IHN0cmluZywgc3RhdHVzOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgJGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gIGlmICgkZWxlbWVudCkge1xuICAgICRlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBzdGF0dXM7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNldERpc3BsYXk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/utils/setDisplay.ts\n");

/***/ })

/******/ });