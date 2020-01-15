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
/*! exports provided: default, $services */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"$services\", function() { return $services; });\n/* harmony import */ var _utils_checkServicesStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/checkServicesStatus */ \"./src/utils/checkServicesStatus.ts\");\n/* harmony import */ var _services_ga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/ga */ \"./src/services/ga/index.ts\");\n/* harmony import */ var _services_hotjar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/hotjar */ \"./src/services/hotjar/index.ts\");\n/* harmony import */ var _templates_Banner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templates/Banner */ \"./src/templates/Banner/index.ts\");\n/* harmony import */ var _utils_actionListener__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/actionListener */ \"./src/utils/actionListener.ts\");\n/* harmony import */ var _utils_setDisplay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/setDisplay */ \"./src/utils/setDisplay.ts\");\n\n\n\n\n\n\n// pour test =================================================================================\nconst code = \"010101010\";\n// ===========================================================================================\nlet $services = [\n    {\n        name: \"Ga\",\n        callback: () => Object(_services_ga__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(code)\n    },\n    {\n        name: \"Hotjar\",\n        callback: () => Object(_services_hotjar__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(code)\n    }\n];\n//const pour test module =====================================================================\nconst $moreServices = [\n    {\n        name: \"Matomo\",\n        callback: () => console.log(\"matomo\")\n    },\n    {\n        name: \"TestServices\",\n        callback: () => console.log(\"testServices\")\n    }\n];\n//================================================================================================\nfunction init($moreServices) {\n    const servicesStringify = localStorage.getItem(\"services\");\n    if ($moreServices) {\n        $services = [...$services, ...$moreServices];\n    }\n    if (!servicesStringify) {\n        Object(_utils_setDisplay__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"js-custom-selection\", \"block\");\n        Object(_utils_setDisplay__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"banner-cookie\", \"block\");\n        let $defaultStatusServices = {};\n        $services.forEach(({ name }) => {\n            $defaultStatusServices = Object.assign(Object.assign({}, $defaultStatusServices), { [name]: false });\n        });\n        localStorage.setItem(\"services\", JSON.stringify($defaultStatusServices));\n        const $bannerHomePage = document.getElementById(\"js-cookie-banner\");\n        if ($bannerHomePage) {\n            $bannerHomePage.innerHTML = Object(_templates_Banner__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n        }\n    }\n    if (servicesStringify) {\n        const $servicesStorage = JSON.parse(servicesStringify);\n        if (Object(_utils_checkServicesStatus__WEBPACK_IMPORTED_MODULE_0__[\"default\"])($servicesStorage)) {\n            $services.forEach(({ callback }) => callback);\n        }\n    }\n    Object(_utils_actionListener__WEBPACK_IMPORTED_MODULE_4__[\"actionListener\"])($services);\n}\ninit($moreServices);\n/* harmony default export */ __webpack_exports__[\"default\"] = (init);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2luZGV4LnRzP2M2YWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNoZWNrU2VydmljZXNTdGF0dXMgZnJvbSBcIi4vdXRpbHMvY2hlY2tTZXJ2aWNlc1N0YXR1c1wiO1xuaW1wb3J0IGluaXRHYSBmcm9tIFwiLi9zZXJ2aWNlcy9nYVwiO1xuaW1wb3J0IGluaXRIb3RqYXIgZnJvbSBcIi4vc2VydmljZXMvaG90amFyXCI7XG5pbXBvcnQgQmFubmVyIGZyb20gXCIuL3RlbXBsYXRlcy9CYW5uZXJcIjtcbmltcG9ydCB7IGFjdGlvbkxpc3RlbmVyIH0gZnJvbSBcIi4vdXRpbHMvYWN0aW9uTGlzdGVuZXJcIjtcbmltcG9ydCBzZXREaXNwbGF5IGZyb20gXCIuL3V0aWxzL3NldERpc3BsYXlcIjtcblxuaW50ZXJmYWNlIFNlcnZpY2VzIHtcbiAgYWxsb3dHYTogYm9vbGVhbjtcbiAgYWxsb3dIb3RqYXI6IGJvb2xlYW47XG59XG5cbi8vIHBvdXIgdGVzdCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmNvbnN0IGNvZGUgPSBcIjAxMDEwMTAxMFwiO1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5sZXQgJHNlcnZpY2VzID0gW1xuICB7XG4gICAgbmFtZTogXCJHYVwiLFxuICAgIGNhbGxiYWNrOiAoKSA9PiBpbml0R2EoY29kZSlcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiSG90amFyXCIsXG4gICAgY2FsbGJhY2s6ICgpID0+IGluaXRIb3RqYXIoY29kZSlcbiAgfVxuXTtcblxuLy9jb25zdCBwb3VyIHRlc3QgbW9kdWxlID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCAkbW9yZVNlcnZpY2VzID0gW1xuICB7XG4gICAgbmFtZTogXCJNYXRvbW9cIixcbiAgICBjYWxsYmFjazogKCkgPT4gY29uc29sZS5sb2coXCJtYXRvbW9cIilcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiVGVzdFNlcnZpY2VzXCIsXG4gICAgY2FsbGJhY2s6ICgpID0+IGNvbnNvbGUubG9nKFwidGVzdFNlcnZpY2VzXCIpXG4gIH1cbl07XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmZ1bmN0aW9uIGluaXQoJG1vcmVTZXJ2aWNlcykge1xuICBjb25zdCBzZXJ2aWNlc1N0cmluZ2lmeTogbnVsbCB8IHN0cmluZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2VydmljZXNcIik7XG4gIGlmICgkbW9yZVNlcnZpY2VzKSB7XG4gICAgJHNlcnZpY2VzID0gWy4uLiRzZXJ2aWNlcywgLi4uJG1vcmVTZXJ2aWNlc107XG4gIH1cblxuICBpZiAoIXNlcnZpY2VzU3RyaW5naWZ5KSB7XG4gICAgc2V0RGlzcGxheShcImpzLWN1c3RvbS1zZWxlY3Rpb25cIiwgXCJibG9ja1wiKTtcbiAgICBzZXREaXNwbGF5KFwiYmFubmVyLWNvb2tpZVwiLCBcImJsb2NrXCIpO1xuICAgIGxldCAkZGVmYXVsdFN0YXR1c1NlcnZpY2VzID0ge307XG4gICAgJHNlcnZpY2VzLmZvckVhY2goKHsgbmFtZSB9KSA9PiB7XG4gICAgICAkZGVmYXVsdFN0YXR1c1NlcnZpY2VzID0ge1xuICAgICAgICAuLi4kZGVmYXVsdFN0YXR1c1NlcnZpY2VzLFxuICAgICAgICBbbmFtZV06IGZhbHNlXG4gICAgICB9O1xuICAgIH0pO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2VydmljZXNcIiwgSlNPTi5zdHJpbmdpZnkoJGRlZmF1bHRTdGF0dXNTZXJ2aWNlcykpO1xuICAgIGNvbnN0ICRiYW5uZXJIb21lUGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtY29va2llLWJhbm5lclwiKTtcbiAgICBpZiAoJGJhbm5lckhvbWVQYWdlKSB7XG4gICAgICAkYmFubmVySG9tZVBhZ2UuaW5uZXJIVE1MID0gQmFubmVyKCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHNlcnZpY2VzU3RyaW5naWZ5KSB7XG4gICAgY29uc3QgJHNlcnZpY2VzU3RvcmFnZTogU2VydmljZXMgPSBKU09OLnBhcnNlKHNlcnZpY2VzU3RyaW5naWZ5KTtcblxuICAgIGlmIChjaGVja1NlcnZpY2VzU3RhdHVzKCRzZXJ2aWNlc1N0b3JhZ2UpKSB7XG4gICAgICAkc2VydmljZXMuZm9yRWFjaCgoeyBjYWxsYmFjayB9KSA9PiBjYWxsYmFjayk7XG4gICAgfVxuICB9XG5cbiAgYWN0aW9uTGlzdGVuZXIoJHNlcnZpY2VzKTtcbn1cblxuaW5pdCgkbW9yZVNlcnZpY2VzKTtcblxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcbmV4cG9ydCB7ICRzZXJ2aWNlcyB9O1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ }),

/***/ "./src/services/ga/index.ts":
/*!**********************************!*\
  !*** ./src/services/ga/index.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst initGa = (code) => console.log(code);\n/* harmony default export */ __webpack_exports__[\"default\"] = (initGa);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvZ2EvaW5kZXgudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3NlcnZpY2VzL2dhL2luZGV4LnRzPzFhNGYiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaW5pdEdhID0gKGNvZGU6IG51bWJlciB8IHN0cmluZykgPT4gY29uc29sZS5sb2coY29kZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRHYTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUVBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/ga/index.ts\n");

/***/ }),

/***/ "./src/services/hotjar/index.ts":
/*!**************************************!*\
  !*** ./src/services/hotjar/index.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst initHotjar = (code) => console.log(code);\n/* harmony default export */ __webpack_exports__[\"default\"] = (initHotjar);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvaG90amFyL2luZGV4LnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9zZXJ2aWNlcy9ob3RqYXIvaW5kZXgudHM/M2QzNiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpbml0SG90amFyID0gKGNvZGU6IHN0cmluZyB8IG51bWJlcikgPT4gY29uc29sZS5sb2coY29kZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRIb3RqYXI7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFFQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/hotjar/index.ts\n");

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
eval("__webpack_require__.r(__webpack_exports__);\nfunction CustomSelection($services) {\n    const checkboxList = () => {\n        $services.map(({ name }) => {\n            return `<div>\n        <input type=\"checkbox\" id=${name} name=${name} value=\"true\">\n        <label for=${name}>${name}</label>\n      </div>`;\n        });\n    };\n    return `\n<div id=\"custom-selection\">\n  <form class=\"custom-cookie-form\">\n      ${$services\n        .map(name => `<div>\n      <input type=\"checkbox\" id=${name.name} name=${name.name} value=\"true\">\n      <label for=${name.name}>${name.name}</label>\n    </div>`)\n        .join(\"\")}   \n      <div>\n        <button type=\"submit\" class=\"js-button-save-custom\">Valider</button>\n      </div>\n  </form>\n</div>\n`;\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomSelection);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGVtcGxhdGVzL0N1c3RvbVNlbGVjdGlvbi9pbmRleC50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdGVtcGxhdGVzL0N1c3RvbVNlbGVjdGlvbi9pbmRleC50cz80MzMwIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIEN1c3RvbVNlbGVjdGlvbigkc2VydmljZXMpIHtcbiAgY29uc3QgY2hlY2tib3hMaXN0ID0gKCkgPT4ge1xuICAgICRzZXJ2aWNlcy5tYXAoKHsgbmFtZSB9KSA9PiB7XG4gICAgICByZXR1cm4gYDxkaXY+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD0ke25hbWV9IG5hbWU9JHtuYW1lfSB2YWx1ZT1cInRydWVcIj5cbiAgICAgICAgPGxhYmVsIGZvcj0ke25hbWV9PiR7bmFtZX08L2xhYmVsPlxuICAgICAgPC9kaXY+YDtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gYFxuPGRpdiBpZD1cImN1c3RvbS1zZWxlY3Rpb25cIj5cbiAgPGZvcm0gY2xhc3M9XCJjdXN0b20tY29va2llLWZvcm1cIj5cbiAgICAgICR7JHNlcnZpY2VzXG4gICAgICAgIC5tYXAoXG4gICAgICAgICAgbmFtZSA9PlxuICAgICAgICAgICAgYDxkaXY+XG4gICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9JHtuYW1lLm5hbWV9IG5hbWU9JHtuYW1lLm5hbWV9IHZhbHVlPVwidHJ1ZVwiPlxuICAgICAgPGxhYmVsIGZvcj0ke25hbWUubmFtZX0+JHtuYW1lLm5hbWV9PC9sYWJlbD5cbiAgICA8L2Rpdj5gXG4gICAgICAgIClcbiAgICAgICAgLmpvaW4oXCJcIil9ICAgXG4gICAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImpzLWJ1dHRvbi1zYXZlLWN1c3RvbVwiPlZhbGlkZXI8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICA8L2Zvcm0+XG48L2Rpdj5cbmA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbVNlbGVjdGlvbjtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBRUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/templates/CustomSelection/index.ts\n");

/***/ }),

/***/ "./src/utils/actionListener.ts":
/*!*************************************!*\
  !*** ./src/utils/actionListener.ts ***!
  \*************************************/
/*! exports provided: customActionListener, actionListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"customActionListener\", function() { return customActionListener; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"actionListener\", function() { return actionListener; });\n/* harmony import */ var _allowAllCookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allowAllCookies */ \"./src/utils/allowAllCookies.ts\");\n/* harmony import */ var _denyAllCookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./denyAllCookies */ \"./src/utils/denyAllCookies.ts\");\n/* harmony import */ var _openSelection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./openSelection */ \"./src/utils/openSelection.ts\");\n/* harmony import */ var _allowCustomCookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./allowCustomCookies */ \"./src/utils/allowCustomCookies.ts\");\n\n\n\n\nconst actionListener = $services => {\n    const actions = [\n        {\n            className: \".js-cookie-button-allow\",\n            action: () => Object(_allowAllCookies__WEBPACK_IMPORTED_MODULE_0__[\"default\"])($services)\n        },\n        {\n            className: \".js-cookie-button-deny\",\n            action: () => Object(_denyAllCookies__WEBPACK_IMPORTED_MODULE_1__[\"default\"])($services)\n        },\n        {\n            className: \".js-cookie-button-customize\",\n            action: () => Object(_openSelection__WEBPACK_IMPORTED_MODULE_2__[\"default\"])($services)\n        }\n    ];\n    actions.forEach(({ className, action }) => {\n        const $currentAction = document.querySelector(className);\n        if ($currentAction) {\n            $currentAction.addEventListener(\"click\", action);\n        }\n    });\n};\nconst customActionListener = $services => {\n    const $forms = document.querySelector(\".custom-cookie-form\");\n    if ($forms) {\n        $forms.addEventListener(\"submit\", function (e) {\n            const $formsResult = document.querySelectorAll(\"input[type=checkbox]:checked\");\n            let $currentLocalStorage = JSON.parse(localStorage.getItem(\"services\"));\n            $formsResult.forEach(({ name, value }) => {\n                $currentLocalStorage = Object.assign(Object.assign({}, $currentLocalStorage), { [name]: value });\n            });\n            e.preventDefault();\n            localStorage.services = JSON.stringify($currentLocalStorage);\n            Object(_allowCustomCookies__WEBPACK_IMPORTED_MODULE_3__[\"default\"])($services);\n        });\n    }\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvYWN0aW9uTGlzdGVuZXIudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3V0aWxzL2FjdGlvbkxpc3RlbmVyLnRzP2I5ZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNldERpc3BsYXkgZnJvbSBcIi4vc2V0RGlzcGxheVwiO1xuaW1wb3J0IGFsbG93QWxsQ29va2llcyBmcm9tIFwiLi9hbGxvd0FsbENvb2tpZXNcIjtcbmltcG9ydCBkZW55QWxsQ29va2llcyBmcm9tIFwiLi9kZW55QWxsQ29va2llc1wiO1xuaW1wb3J0IG9wZW5TZWxlY3Rpb24gZnJvbSBcIi4vb3BlblNlbGVjdGlvblwiO1xuaW1wb3J0IGFsbG93Q3VzdG9tQ29va2llcyBmcm9tIFwiLi9hbGxvd0N1c3RvbUNvb2tpZXNcIjtcblxuY29uc3QgYWN0aW9uTGlzdGVuZXIgPSAkc2VydmljZXMgPT4ge1xuICBjb25zdCBhY3Rpb25zID0gW1xuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogXCIuanMtY29va2llLWJ1dHRvbi1hbGxvd1wiLFxuICAgICAgYWN0aW9uOiAoKSA9PiBhbGxvd0FsbENvb2tpZXMoJHNlcnZpY2VzKVxuICAgIH0sXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiBcIi5qcy1jb29raWUtYnV0dG9uLWRlbnlcIixcbiAgICAgIGFjdGlvbjogKCkgPT4gZGVueUFsbENvb2tpZXMoJHNlcnZpY2VzKVxuICAgIH0sXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiBcIi5qcy1jb29raWUtYnV0dG9uLWN1c3RvbWl6ZVwiLFxuICAgICAgYWN0aW9uOiAoKSA9PiBvcGVuU2VsZWN0aW9uKCRzZXJ2aWNlcylcbiAgICB9XG4gIF07XG5cbiAgYWN0aW9ucy5mb3JFYWNoKCh7IGNsYXNzTmFtZSwgYWN0aW9uIH0pID0+IHtcbiAgICBjb25zdCAkY3VycmVudEFjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2xhc3NOYW1lKTtcbiAgICBpZiAoJGN1cnJlbnRBY3Rpb24pIHtcbiAgICAgICRjdXJyZW50QWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhY3Rpb24pO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBjdXN0b21BY3Rpb25MaXN0ZW5lciA9ICRzZXJ2aWNlcyA9PiB7XG4gIGNvbnN0ICRmb3JtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3VzdG9tLWNvb2tpZS1mb3JtXCIpO1xuICBpZiAoJGZvcm1zKSB7XG4gICAgJGZvcm1zLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgY29uc3QgJGZvcm1zUmVzdWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgXCJpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkXCJcbiAgICAgICk7XG4gICAgICBsZXQgJGN1cnJlbnRMb2NhbFN0b3JhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2VydmljZXNcIikpO1xuICAgICAgJGZvcm1zUmVzdWx0LmZvckVhY2goKHsgbmFtZSwgdmFsdWUgfSkgPT4ge1xuICAgICAgICAkY3VycmVudExvY2FsU3RvcmFnZSA9IHtcbiAgICAgICAgICAuLi4kY3VycmVudExvY2FsU3RvcmFnZSxcbiAgICAgICAgICBbbmFtZV06IHZhbHVlXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXJ2aWNlcyA9IEpTT04uc3RyaW5naWZ5KCRjdXJyZW50TG9jYWxTdG9yYWdlKTtcbiAgICAgIGFsbG93Q3VzdG9tQ29va2llcygkc2VydmljZXMpO1xuICAgIH0pO1xuICB9XG59O1xuZXhwb3J0IHsgY3VzdG9tQWN0aW9uTGlzdGVuZXIsIGFjdGlvbkxpc3RlbmVyIH07XG4iXSwibWFwcGluZ3MiOiJBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/actionListener.ts\n");

/***/ }),

/***/ "./src/utils/allowAllCookies.ts":
/*!**************************************!*\
  !*** ./src/utils/allowAllCookies.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _setDisplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setDisplay */ \"./src/utils/setDisplay.ts\");\n\nconst allowAllCookies = $services => {\n    setAllLocalStoragesServicesTrue($services);\n    $services.forEach(({ callback }) => callback());\n    Object(_setDisplay__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"banner-cookie\", \"none\");\n};\nconst setAllLocalStoragesServicesTrue = $services => {\n    let $statusServices = {};\n    $services.forEach(({ name }) => {\n        $statusServices = Object.assign(Object.assign({}, $statusServices), { [name]: true });\n    });\n    localStorage.setItem(\"services\", JSON.stringify($statusServices));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (allowAllCookies);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvYWxsb3dBbGxDb29raWVzLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy91dGlscy9hbGxvd0FsbENvb2tpZXMudHM/NGZjMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2V0RGlzcGxheSBmcm9tIFwiLi9zZXREaXNwbGF5XCI7XG5pbXBvcnQgaW5pdEdhIGZyb20gXCIuLi9zZXJ2aWNlcy9nYVwiO1xuaW1wb3J0IGluaXRIb3RqYXIgZnJvbSBcIi4uL3NlcnZpY2VzL2hvdGphclwiO1xuXG5jb25zdCBhbGxvd0FsbENvb2tpZXMgPSAkc2VydmljZXMgPT4ge1xuICBzZXRBbGxMb2NhbFN0b3JhZ2VzU2VydmljZXNUcnVlKCRzZXJ2aWNlcyk7XG4gICRzZXJ2aWNlcy5mb3JFYWNoKCh7IGNhbGxiYWNrIH0pID0+IGNhbGxiYWNrKCkpO1xuICBzZXREaXNwbGF5KFwiYmFubmVyLWNvb2tpZVwiLCBcIm5vbmVcIik7XG59O1xuXG5jb25zdCBzZXRBbGxMb2NhbFN0b3JhZ2VzU2VydmljZXNUcnVlID0gJHNlcnZpY2VzID0+IHtcbiAgbGV0ICRzdGF0dXNTZXJ2aWNlcyA9IHt9O1xuICAkc2VydmljZXMuZm9yRWFjaCgoeyBuYW1lIH0pID0+IHtcbiAgICAkc3RhdHVzU2VydmljZXMgPSB7XG4gICAgICAuLi4kc3RhdHVzU2VydmljZXMsXG4gICAgICBbbmFtZV06IHRydWVcbiAgICB9O1xuICB9KTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzZXJ2aWNlc1wiLCBKU09OLnN0cmluZ2lmeSgkc3RhdHVzU2VydmljZXMpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFsbG93QWxsQ29va2llcztcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/utils/allowAllCookies.ts\n");

/***/ }),

/***/ "./src/utils/allowCustomCookies.ts":
/*!*****************************************!*\
  !*** ./src/utils/allowCustomCookies.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _setDisplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setDisplay */ \"./src/utils/setDisplay.ts\");\n\nconst allowCustomCookies = $services => {\n    const $currentLocalStorage = JSON.parse(localStorage.getItem(\"services\"));\n    console.log($services);\n    if ($services && $currentLocalStorage) {\n        $services.forEach(({ name, callback }) => {\n            if ($currentLocalStorage[name]) {\n                callback();\n            }\n        });\n    }\n    Object(_setDisplay__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"js-custom-selection\", \"none\");\n    Object(_setDisplay__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"banner-cookie\", \"none\");\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (allowCustomCookies);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvYWxsb3dDdXN0b21Db29raWVzLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy91dGlscy9hbGxvd0N1c3RvbUNvb2tpZXMudHM/ZTQ1NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaW5pdEdhIGZyb20gXCIuLi9zZXJ2aWNlcy9nYVwiO1xuaW1wb3J0IGluaXRIb3RqYXIgZnJvbSBcIi4uL3NlcnZpY2VzL2hvdGphclwiO1xuaW1wb3J0IHNldERpc3BsYXkgZnJvbSBcIi4vc2V0RGlzcGxheVwiO1xuXG5jb25zdCBhbGxvd0N1c3RvbUNvb2tpZXMgPSAkc2VydmljZXMgPT4ge1xuICBjb25zdCAkY3VycmVudExvY2FsU3RvcmFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzZXJ2aWNlc1wiKSk7XG4gIGNvbnNvbGUubG9nKCRzZXJ2aWNlcyk7XG4gIGlmICgkc2VydmljZXMgJiYgJGN1cnJlbnRMb2NhbFN0b3JhZ2UpIHtcbiAgICAkc2VydmljZXMuZm9yRWFjaCgoeyBuYW1lLCBjYWxsYmFjayB9KSA9PiB7XG4gICAgICBpZiAoJGN1cnJlbnRMb2NhbFN0b3JhZ2VbbmFtZV0pIHtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBzZXREaXNwbGF5KFwianMtY3VzdG9tLXNlbGVjdGlvblwiLCBcIm5vbmVcIik7XG4gIHNldERpc3BsYXkoXCJiYW5uZXItY29va2llXCIsIFwibm9uZVwiKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFsbG93Q3VzdG9tQ29va2llcztcbiJdLCJtYXBwaW5ncyI6IkFBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/allowCustomCookies.ts\n");

/***/ }),

/***/ "./src/utils/checkServicesStatus.ts":
/*!******************************************!*\
  !*** ./src/utils/checkServicesStatus.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst checkServicesStatus = (storageList) => {\n    if (storageList) {\n        Object.values(storageList).some(value => value == true);\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (checkServicesStatus);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvY2hlY2tTZXJ2aWNlc1N0YXR1cy50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdXRpbHMvY2hlY2tTZXJ2aWNlc1N0YXR1cy50cz9kY2EyIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNoZWNrU2VydmljZXNTdGF0dXMgPSAoc3RvcmFnZUxpc3QpID0+IHtcbiAgaWYgKHN0b3JhZ2VMaXN0KSB7XG4gICAgT2JqZWN0LnZhbHVlcyhzdG9yYWdlTGlzdCkuc29tZSh2YWx1ZSA9PiB2YWx1ZSA9PSB0cnVlKTtcbiAgfVxufTtcblxuICBleHBvcnQgZGVmYXVsdCBjaGVja1NlcnZpY2VzU3RhdHVzO1xuXG4gIC8vIFtcbiAgLy8gICB7XG4gIC8vICAgICBuYW1lOlwidGVzdFwiLFxuICAvLyAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uLFxuICAvLyAgIH0sXG4gIC8vICAgIHtcbiAgLy8gICAgIG5hbWU6XCJ0ZXN0XCIsXG4gIC8vICAgICBjYWxsYmFjazogZnVuY3Rpb24sXG4gIC8vICAgfSxcbiAgLy8gICB7XG4gIC8vICAgICBuYW1lOlwidGVzdFwiLFxuICAvLyAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uLFxuICAvLyAgIH1cbiAgLy8gXVxuXG4gIC8vIE9iamVjdC52YWx1ZXMobGlzdFNlcnZpY2VzKS5zb21lKHZhbHVlID0+IHZhbHVlID09IHRydWUpO1xuXG4gIC8vIGlmIChnYSAmJiBob3RqYXIpIHtcbiAgLy8gICByZXR1cm4gdHJ1ZTtcbiAgLy8gfSBlbHNlIHtcbiAgLy8gICByZXR1cm4gZmFsc2U7XG4gIC8vIH1cbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/utils/checkServicesStatus.ts\n");

/***/ }),

/***/ "./src/utils/denyAllCookies.ts":
/*!*************************************!*\
  !*** ./src/utils/denyAllCookies.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _setDisplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setDisplay */ \"./src/utils/setDisplay.ts\");\n\nconst denyAllCookies = $services => {\n    Object(_setDisplay__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"banner-cookie\", \"none\");\n    setAllLocalStoragesServicesFalse($services);\n};\nconst setAllLocalStoragesServicesFalse = $services => {\n    let $statusServices = {};\n    $services.forEach(({ name }) => {\n        $statusServices = Object.assign(Object.assign({}, $statusServices), { [name]: false });\n    });\n    localStorage.setItem(\"services\", JSON.stringify($statusServices));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (denyAllCookies);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvZGVueUFsbENvb2tpZXMudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3V0aWxzL2RlbnlBbGxDb29raWVzLnRzPzY3NTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNldERpc3BsYXkgZnJvbSBcIi4vc2V0RGlzcGxheVwiO1xuXG5jb25zdCBkZW55QWxsQ29va2llcyA9ICRzZXJ2aWNlcyA9PiB7XG4gIHNldERpc3BsYXkoXCJiYW5uZXItY29va2llXCIsIFwibm9uZVwiKTtcbiAgc2V0QWxsTG9jYWxTdG9yYWdlc1NlcnZpY2VzRmFsc2UoJHNlcnZpY2VzKTtcbn07XG5cbmNvbnN0IHNldEFsbExvY2FsU3RvcmFnZXNTZXJ2aWNlc0ZhbHNlID0gJHNlcnZpY2VzID0+IHtcbiAgbGV0ICRzdGF0dXNTZXJ2aWNlcyA9IHt9O1xuICAkc2VydmljZXMuZm9yRWFjaCgoeyBuYW1lIH0pID0+IHtcbiAgICAkc3RhdHVzU2VydmljZXMgPSB7XG4gICAgICAuLi4kc3RhdHVzU2VydmljZXMsXG4gICAgICBbbmFtZV06IGZhbHNlXG4gICAgfTtcbiAgfSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2VydmljZXNcIiwgSlNPTi5zdHJpbmdpZnkoJHN0YXR1c1NlcnZpY2VzKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZW55QWxsQ29va2llcztcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/denyAllCookies.ts\n");

/***/ }),

/***/ "./src/utils/openSelection.ts":
/*!************************************!*\
  !*** ./src/utils/openSelection.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _setDisplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setDisplay */ \"./src/utils/setDisplay.ts\");\n/* harmony import */ var _templates_CustomSelection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../templates/CustomSelection */ \"./src/templates/CustomSelection/index.ts\");\n/* harmony import */ var _actionListener__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actionListener */ \"./src/utils/actionListener.ts\");\n\n\n\nconst openSelection = $services => {\n    const customSelectionView = document.getElementById(\"js-custom-selection\");\n    if (customSelectionView) {\n        customSelectionView.innerHTML = Object(_templates_CustomSelection__WEBPACK_IMPORTED_MODULE_1__[\"default\"])($services);\n        Object(_actionListener__WEBPACK_IMPORTED_MODULE_2__[\"customActionListener\"])($services);\n        Object(_setDisplay__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"js-custom-selection\", \"block\");\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (openSelection);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvb3BlblNlbGVjdGlvbi50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdXRpbHMvb3BlblNlbGVjdGlvbi50cz9hN2YyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzZXREaXNwbGF5IGZyb20gXCIuL3NldERpc3BsYXlcIjtcbmltcG9ydCBDdXN0b21TZWxlY3Rpb24gZnJvbSBcIi4uL3RlbXBsYXRlcy9DdXN0b21TZWxlY3Rpb25cIjtcbmltcG9ydCB7IGN1c3RvbUFjdGlvbkxpc3RlbmVyIH0gZnJvbSBcIi4vYWN0aW9uTGlzdGVuZXJcIjtcblxuY29uc3Qgb3BlblNlbGVjdGlvbiA9ICRzZXJ2aWNlcyA9PiB7XG4gIGNvbnN0IGN1c3RvbVNlbGVjdGlvblZpZXcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLWN1c3RvbS1zZWxlY3Rpb25cIik7XG4gIGlmIChjdXN0b21TZWxlY3Rpb25WaWV3KSB7XG4gICAgY3VzdG9tU2VsZWN0aW9uVmlldy5pbm5lckhUTUwgPSBDdXN0b21TZWxlY3Rpb24oJHNlcnZpY2VzKTtcbiAgICBjdXN0b21BY3Rpb25MaXN0ZW5lcigkc2VydmljZXMpO1xuICAgIHNldERpc3BsYXkoXCJqcy1jdXN0b20tc2VsZWN0aW9uXCIsIFwiYmxvY2tcIik7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IG9wZW5TZWxlY3Rpb247XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/openSelection.ts\n");

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