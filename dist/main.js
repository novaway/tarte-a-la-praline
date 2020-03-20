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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"$services\", function() { return $services; });\n/* harmony import */ var _utils_checkServicesStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/checkServicesStatus */ \"./src/utils/checkServicesStatus.ts\");\n/* harmony import */ var _services_ga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/ga */ \"./src/services/ga/index.ts\");\n/* harmony import */ var _services_hotjar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/hotjar */ \"./src/services/hotjar/index.ts\");\n/* harmony import */ var _templates_Banner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templates/Banner */ \"./src/templates/Banner/index.ts\");\n/* harmony import */ var _utils_actionListener__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/actionListener */ \"./src/utils/actionListener.ts\");\n/* harmony import */ var _utils_setDisplay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/setDisplay */ \"./src/utils/setDisplay.ts\");\n\n\n\n\n\n\n// pour test =================================================================================\nconst code = \"010101010\";\n// ===========================================================================================\nlet $services = [\n    {\n        name: \"Ga\",\n        callback: () => Object(_services_ga__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(code)\n    },\n    {\n        name: \"Hotjar\",\n        callback: () => Object(_services_hotjar__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(code)\n    }\n];\n//const pour test module =====================================================================\nconst $moreServices = [\n    {\n        name: \"Matomo\",\n        callback: () => console.log(\"matomo\")\n    },\n    {\n        name: \"TestServices\",\n        callback: () => console.log(\"testServices\")\n    }\n];\n//================================================================================================\nfunction init($moreServices) {\n    const servicesStringify = localStorage.getItem(\"services\");\n    if ($moreServices) {\n        $services = [...$services, ...$moreServices];\n    }\n    if (!servicesStringify) {\n        Object(_utils_setDisplay__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"js-custom-selection\", \"block\");\n        Object(_utils_setDisplay__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"banner-cookie\", \"block\");\n        let $defaultStatusServices = {};\n        $services.forEach(({ name }) => {\n            $defaultStatusServices = Object.assign(Object.assign({}, $defaultStatusServices), { [name]: false });\n        });\n        localStorage.setItem(\"services\", JSON.stringify($defaultStatusServices));\n        const $bannerHomePage = document.getElementById(\"js-cookie-banner\");\n        if ($bannerHomePage) {\n            $bannerHomePage.innerHTML = Object(_templates_Banner__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n        }\n    }\n    if (servicesStringify) {\n        const $servicesStorage = JSON.parse(servicesStringify);\n        if ($servicesStorage) {\n            if (Object(_utils_checkServicesStatus__WEBPACK_IMPORTED_MODULE_0__[\"default\"])($servicesStorage)) {\n                if ($services) {\n                    $services.forEach(({ callback }) => callback);\n                }\n            }\n        }\n    }\n    Object(_utils_actionListener__WEBPACK_IMPORTED_MODULE_4__[\"actionListener\"])($services);\n}\ninit($moreServices);\n/* harmony default export */ __webpack_exports__[\"default\"] = (init);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2luZGV4LnRzP2M2YWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNoZWNrU2VydmljZXNTdGF0dXMgZnJvbSBcIi4vdXRpbHMvY2hlY2tTZXJ2aWNlc1N0YXR1c1wiO1xuaW1wb3J0IGluaXRHYSBmcm9tIFwiLi9zZXJ2aWNlcy9nYVwiO1xuaW1wb3J0IGluaXRIb3RqYXIgZnJvbSBcIi4vc2VydmljZXMvaG90amFyXCI7XG5pbXBvcnQgQmFubmVyIGZyb20gXCIuL3RlbXBsYXRlcy9CYW5uZXJcIjtcbmltcG9ydCB7IGFjdGlvbkxpc3RlbmVyIH0gZnJvbSBcIi4vdXRpbHMvYWN0aW9uTGlzdGVuZXJcIjtcbmltcG9ydCBzZXREaXNwbGF5IGZyb20gXCIuL3V0aWxzL3NldERpc3BsYXlcIjtcbmltcG9ydCB7IFNlcnZpY2VzIH0gZnJvbSBcIi4vdHlwZVwiO1xuXG4vLyBwb3VyIHRlc3QgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5jb25zdCBjb2RlID0gXCIwMTAxMDEwMTBcIjtcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxubGV0ICRzZXJ2aWNlczogQXJyYXk8U2VydmljZXM+ID0gW1xuICB7XG4gICAgbmFtZTogXCJHYVwiLFxuICAgIGNhbGxiYWNrOiAoKSA9PiBpbml0R2EoY29kZSlcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiSG90amFyXCIsXG4gICAgY2FsbGJhY2s6ICgpID0+IGluaXRIb3RqYXIoY29kZSlcbiAgfVxuXTtcblxuLy9jb25zdCBwb3VyIHRlc3QgbW9kdWxlID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCAkbW9yZVNlcnZpY2VzOiBBcnJheTxTZXJ2aWNlcz4gPSBbXG4gIHtcbiAgICBuYW1lOiBcIk1hdG9tb1wiLFxuICAgIGNhbGxiYWNrOiAoKSA9PiBjb25zb2xlLmxvZyhcIm1hdG9tb1wiKVxuICB9LFxuICB7XG4gICAgbmFtZTogXCJUZXN0U2VydmljZXNcIixcbiAgICBjYWxsYmFjazogKCkgPT4gY29uc29sZS5sb2coXCJ0ZXN0U2VydmljZXNcIilcbiAgfVxuXTtcblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gaW5pdCgkbW9yZVNlcnZpY2VzOiBBcnJheTxTZXJ2aWNlcz4pIHtcbiAgY29uc3Qgc2VydmljZXNTdHJpbmdpZnk6IG51bGwgfCBzdHJpbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNlcnZpY2VzXCIpO1xuICBpZiAoJG1vcmVTZXJ2aWNlcykge1xuICAgICRzZXJ2aWNlcyA9IFsuLi4kc2VydmljZXMsIC4uLiRtb3JlU2VydmljZXNdO1xuICB9XG5cbiAgaWYgKCFzZXJ2aWNlc1N0cmluZ2lmeSkge1xuICAgIHNldERpc3BsYXkoXCJqcy1jdXN0b20tc2VsZWN0aW9uXCIsIFwiYmxvY2tcIik7XG4gICAgc2V0RGlzcGxheShcImJhbm5lci1jb29raWVcIiwgXCJibG9ja1wiKTtcbiAgICBsZXQgJGRlZmF1bHRTdGF0dXNTZXJ2aWNlcyA9IHt9O1xuICAgICRzZXJ2aWNlcy5mb3JFYWNoKCh7IG5hbWUgfSkgPT4ge1xuICAgICAgJGRlZmF1bHRTdGF0dXNTZXJ2aWNlcyA9IHtcbiAgICAgICAgLi4uJGRlZmF1bHRTdGF0dXNTZXJ2aWNlcyxcbiAgICAgICAgW25hbWVdOiBmYWxzZVxuICAgICAgfTtcbiAgICB9KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNlcnZpY2VzXCIsIEpTT04uc3RyaW5naWZ5KCRkZWZhdWx0U3RhdHVzU2VydmljZXMpKTtcbiAgICBjb25zdCAkYmFubmVySG9tZVBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLWNvb2tpZS1iYW5uZXJcIik7XG4gICAgaWYgKCRiYW5uZXJIb21lUGFnZSkge1xuICAgICAgJGJhbm5lckhvbWVQYWdlLmlubmVySFRNTCA9IEJhbm5lcigpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzZXJ2aWNlc1N0cmluZ2lmeSkge1xuICAgIGNvbnN0ICRzZXJ2aWNlc1N0b3JhZ2UgPSBKU09OLnBhcnNlKHNlcnZpY2VzU3RyaW5naWZ5KTtcbiAgICBpZiAoJHNlcnZpY2VzU3RvcmFnZSkge1xuICAgICAgaWYgKGNoZWNrU2VydmljZXNTdGF0dXMoJHNlcnZpY2VzU3RvcmFnZSkpIHtcbiAgICAgICAgaWYgKCRzZXJ2aWNlcykge1xuICAgICAgICAgICRzZXJ2aWNlcy5mb3JFYWNoKCh7IGNhbGxiYWNrIH0pID0+IGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFjdGlvbkxpc3RlbmVyKCRzZXJ2aWNlcyk7XG59XG5cbmluaXQoJG1vcmVTZXJ2aWNlcyk7XG5cbmV4cG9ydCBkZWZhdWx0IGluaXQ7XG5leHBvcnQgeyAkc2VydmljZXMgfTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.ts\n");

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
eval("__webpack_require__.r(__webpack_exports__);\nfunction CustomSelection($services) {\n    const checkboxList = () => {\n        $services.map(({ name }) => {\n            return `<div>\n        <input type=\"checkbox\" id=${name} name=${name} value=\"true\">\n        <label for=${name}>${name}</label>\n      </div>`;\n        });\n    };\n    return `\n<div id=\"custom-selection\">\n  <form class=\"custom-cookie-form\">\n      ${$services\n        .map(name => `<div>\n      <input type=\"checkbox\" id=${name.name} name=${name.name} value=\"true\">\n      <label for=${name.name}>${name.name}</label>\n    </div>`)\n        .join(\"\")}   \n      <div>\n        <button type=\"submit\" class=\"js-button-save-custom\">Valider</button>\n      </div>\n  </form>\n</div>\n`;\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomSelection);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGVtcGxhdGVzL0N1c3RvbVNlbGVjdGlvbi9pbmRleC50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdGVtcGxhdGVzL0N1c3RvbVNlbGVjdGlvbi9pbmRleC50cz80MzMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlcnZpY2VzIH0gZnJvbSBcIi4uLy4uL3R5cGVcIjtcblxuZnVuY3Rpb24gQ3VzdG9tU2VsZWN0aW9uKCRzZXJ2aWNlczogQXJyYXk8U2VydmljZXM+KSB7XG4gIGNvbnN0IGNoZWNrYm94TGlzdCA9ICgpID0+IHtcbiAgICAkc2VydmljZXMubWFwKCh7IG5hbWUgfSkgPT4ge1xuICAgICAgcmV0dXJuIGA8ZGl2PlxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9JHtuYW1lfSBuYW1lPSR7bmFtZX0gdmFsdWU9XCJ0cnVlXCI+XG4gICAgICAgIDxsYWJlbCBmb3I9JHtuYW1lfT4ke25hbWV9PC9sYWJlbD5cbiAgICAgIDwvZGl2PmA7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIGBcbjxkaXYgaWQ9XCJjdXN0b20tc2VsZWN0aW9uXCI+XG4gIDxmb3JtIGNsYXNzPVwiY3VzdG9tLWNvb2tpZS1mb3JtXCI+XG4gICAgICAkeyRzZXJ2aWNlc1xuICAgICAgICAubWFwKFxuICAgICAgICAgIG5hbWUgPT5cbiAgICAgICAgICAgIGA8ZGl2PlxuICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPSR7bmFtZS5uYW1lfSBuYW1lPSR7bmFtZS5uYW1lfSB2YWx1ZT1cInRydWVcIj5cbiAgICAgIDxsYWJlbCBmb3I9JHtuYW1lLm5hbWV9PiR7bmFtZS5uYW1lfTwvbGFiZWw+XG4gICAgPC9kaXY+YFxuICAgICAgICApXG4gICAgICAgIC5qb2luKFwiXCIpfSAgIFxuICAgICAgPGRpdj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJqcy1idXR0b24tc2F2ZS1jdXN0b21cIj5WYWxpZGVyPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgPC9mb3JtPlxuPC9kaXY+XG5gO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21TZWxlY3Rpb247XG4iXSwibWFwcGluZ3MiOiJBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUVBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/templates/CustomSelection/index.ts\n");

/***/ }),

/***/ "./src/utils/actionListener.ts":
/*!*************************************!*\
  !*** ./src/utils/actionListener.ts ***!
  \*************************************/
/*! exports provided: customActionListener, actionListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"customActionListener\", function() { return customActionListener; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"actionListener\", function() { return actionListener; });\n/* harmony import */ var _allowAllCookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allowAllCookies */ \"./src/utils/allowAllCookies.ts\");\n/* harmony import */ var _denyAllCookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./denyAllCookies */ \"./src/utils/denyAllCookies.ts\");\n/* harmony import */ var _openSelection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./openSelection */ \"./src/utils/openSelection.ts\");\n/* harmony import */ var _allowCustomCookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./allowCustomCookies */ \"./src/utils/allowCustomCookies.ts\");\n\n\n\n\nconst actionListener = ($services) => {\n    const actions = [\n        {\n            className: \".js-cookie-button-allow\",\n            action: () => Object(_allowAllCookies__WEBPACK_IMPORTED_MODULE_0__[\"default\"])($services)\n        },\n        {\n            className: \".js-cookie-button-deny\",\n            action: () => Object(_denyAllCookies__WEBPACK_IMPORTED_MODULE_1__[\"default\"])($services)\n        },\n        {\n            className: \".js-cookie-button-customize\",\n            action: () => Object(_openSelection__WEBPACK_IMPORTED_MODULE_2__[\"default\"])($services)\n        }\n    ];\n    actions.forEach(({ className, action }) => {\n        const $currentAction = document.querySelector(className);\n        if ($currentAction) {\n            $currentAction.addEventListener(\"click\", action);\n        }\n    });\n};\nconst customActionListener = ($services) => {\n    const $forms = document.querySelector(\".custom-cookie-form\");\n    if ($forms) {\n        $forms.addEventListener(\"submit\", function (e) {\n            const $formsResult = document.querySelectorAll(\"input[type=checkbox]:checked\");\n            let $currentLocalStorage = JSON.parse(localStorage.getItem(\"services\"));\n            $formsResult.forEach(({ name, value }) => {\n                $currentLocalStorage = Object.assign(Object.assign({}, $currentLocalStorage), { [name]: JSON.parse(value) });\n            });\n            e.preventDefault();\n            localStorage.services = JSON.stringify($currentLocalStorage);\n            Object(_allowCustomCookies__WEBPACK_IMPORTED_MODULE_3__[\"default\"])($services);\n        });\n    }\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvYWN0aW9uTGlzdGVuZXIudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3V0aWxzL2FjdGlvbkxpc3RlbmVyLnRzP2I5ZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNldERpc3BsYXkgZnJvbSBcIi4vc2V0RGlzcGxheVwiO1xuaW1wb3J0IGFsbG93QWxsQ29va2llcyBmcm9tIFwiLi9hbGxvd0FsbENvb2tpZXNcIjtcbmltcG9ydCBkZW55QWxsQ29va2llcyBmcm9tIFwiLi9kZW55QWxsQ29va2llc1wiO1xuaW1wb3J0IG9wZW5TZWxlY3Rpb24gZnJvbSBcIi4vb3BlblNlbGVjdGlvblwiO1xuaW1wb3J0IGFsbG93Q3VzdG9tQ29va2llcyBmcm9tIFwiLi9hbGxvd0N1c3RvbUNvb2tpZXNcIjtcbmltcG9ydCB7IFNlcnZpY2VzIH0gZnJvbSBcIi4uL3R5cGVcIjtcblxuY29uc3QgYWN0aW9uTGlzdGVuZXIgPSAoJHNlcnZpY2VzOiBBcnJheTxTZXJ2aWNlcz4pID0+IHtcbiAgY29uc3QgYWN0aW9ucyA9IFtcbiAgICB7XG4gICAgICBjbGFzc05hbWU6IFwiLmpzLWNvb2tpZS1idXR0b24tYWxsb3dcIixcbiAgICAgIGFjdGlvbjogKCkgPT4gYWxsb3dBbGxDb29raWVzKCRzZXJ2aWNlcylcbiAgICB9LFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogXCIuanMtY29va2llLWJ1dHRvbi1kZW55XCIsXG4gICAgICBhY3Rpb246ICgpID0+IGRlbnlBbGxDb29raWVzKCRzZXJ2aWNlcylcbiAgICB9LFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogXCIuanMtY29va2llLWJ1dHRvbi1jdXN0b21pemVcIixcbiAgICAgIGFjdGlvbjogKCkgPT4gb3BlblNlbGVjdGlvbigkc2VydmljZXMpXG4gICAgfVxuICBdO1xuXG4gIGFjdGlvbnMuZm9yRWFjaCgoeyBjbGFzc05hbWUsIGFjdGlvbiB9KSA9PiB7XG4gICAgY29uc3QgJGN1cnJlbnRBY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNsYXNzTmFtZSk7XG4gICAgaWYgKCRjdXJyZW50QWN0aW9uKSB7XG4gICAgICAkY3VycmVudEFjdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWN0aW9uKTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgY3VzdG9tQWN0aW9uTGlzdGVuZXIgPSAoJHNlcnZpY2VzOiBBcnJheTxTZXJ2aWNlcz4pID0+IHtcbiAgY29uc3QgJGZvcm1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXN0b20tY29va2llLWZvcm1cIik7XG4gIGlmICgkZm9ybXMpIHtcbiAgICAkZm9ybXMuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbihlKSB7XG4gICAgICBjb25zdCAkZm9ybXNSZXN1bHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICBcImlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWRcIlxuICAgICAgKTtcbiAgICAgIGxldCAkY3VycmVudExvY2FsU3RvcmFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzZXJ2aWNlc1wiKSk7XG4gICAgICAkZm9ybXNSZXN1bHQuZm9yRWFjaCgoeyBuYW1lLCB2YWx1ZSB9KSA9PiB7XG4gICAgICAgICRjdXJyZW50TG9jYWxTdG9yYWdlID0ge1xuICAgICAgICAgIC4uLiRjdXJyZW50TG9jYWxTdG9yYWdlLFxuICAgICAgICAgIFtuYW1lXTogSlNPTi5wYXJzZSh2YWx1ZSlcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNlcnZpY2VzID0gSlNPTi5zdHJpbmdpZnkoJGN1cnJlbnRMb2NhbFN0b3JhZ2UpO1xuICAgICAgYWxsb3dDdXN0b21Db29raWVzKCRzZXJ2aWNlcyk7XG4gICAgfSk7XG4gIH1cbn07XG5leHBvcnQgeyBjdXN0b21BY3Rpb25MaXN0ZW5lciwgYWN0aW9uTGlzdGVuZXIgfTtcbiJdLCJtYXBwaW5ncyI6IkFBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/utils/actionListener.ts\n");

/***/ }),

/***/ "./src/utils/allowAllCookies.ts":
/*!**************************************!*\
  !*** ./src/utils/allowAllCookies.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _setDisplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setDisplay */ \"./src/utils/setDisplay.ts\");\n\nconst allowAllCookies = ($services) => {\n    setAllLocalStoragesServicesTrue($services);\n    $services.forEach(({ callback }) => callback());\n    Object(_setDisplay__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"banner-cookie\", \"none\");\n};\nconst setAllLocalStoragesServicesTrue = ($services) => {\n    let $statusServices = {};\n    $services.forEach(({ name }) => {\n        $statusServices = Object.assign(Object.assign({}, $statusServices), { [name]: true });\n    });\n    localStorage.setItem(\"services\", JSON.stringify($statusServices));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (allowAllCookies);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvYWxsb3dBbGxDb29raWVzLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy91dGlscy9hbGxvd0FsbENvb2tpZXMudHM/NGZjMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2V0RGlzcGxheSBmcm9tIFwiLi9zZXREaXNwbGF5XCI7XG5pbXBvcnQgaW5pdEdhIGZyb20gXCIuLi9zZXJ2aWNlcy9nYVwiO1xuaW1wb3J0IGluaXRIb3RqYXIgZnJvbSBcIi4uL3NlcnZpY2VzL2hvdGphclwiO1xuaW1wb3J0IHsgU2VydmljZXMgfSBmcm9tIFwiLi4vdHlwZVwiO1xuXG5jb25zdCBhbGxvd0FsbENvb2tpZXMgPSAoJHNlcnZpY2VzOiBBcnJheTxTZXJ2aWNlcz4pID0+IHtcbiAgc2V0QWxsTG9jYWxTdG9yYWdlc1NlcnZpY2VzVHJ1ZSgkc2VydmljZXMpO1xuICAkc2VydmljZXMuZm9yRWFjaCgoeyBjYWxsYmFjayB9KSA9PiBjYWxsYmFjaygpKTtcbiAgc2V0RGlzcGxheShcImJhbm5lci1jb29raWVcIiwgXCJub25lXCIpO1xufTtcblxuY29uc3Qgc2V0QWxsTG9jYWxTdG9yYWdlc1NlcnZpY2VzVHJ1ZSA9ICgkc2VydmljZXM6IEFycmF5PFNlcnZpY2VzPikgPT4ge1xuICBsZXQgJHN0YXR1c1NlcnZpY2VzID0ge307XG4gICRzZXJ2aWNlcy5mb3JFYWNoKCh7IG5hbWUgfSkgPT4ge1xuICAgICRzdGF0dXNTZXJ2aWNlcyA9IHtcbiAgICAgIC4uLiRzdGF0dXNTZXJ2aWNlcyxcbiAgICAgIFtuYW1lXTogdHJ1ZVxuICAgIH07XG4gIH0pO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNlcnZpY2VzXCIsIEpTT04uc3RyaW5naWZ5KCRzdGF0dXNTZXJ2aWNlcykpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYWxsb3dBbGxDb29raWVzO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/allowAllCookies.ts\n");

/***/ }),

/***/ "./src/utils/allowCustomCookies.ts":
/*!*****************************************!*\
  !*** ./src/utils/allowCustomCookies.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _setDisplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setDisplay */ \"./src/utils/setDisplay.ts\");\n\nconst allowCustomCookies = ($services) => {\n    const $currentLocalStorage = JSON.parse(localStorage.getItem(\"services\"));\n    if ($services && $currentLocalStorage) {\n        $services.forEach(({ name, callback }) => {\n            if ($currentLocalStorage[name]) {\n                callback();\n            }\n        });\n    }\n    Object(_setDisplay__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"js-custom-selection\", \"none\");\n    Object(_setDisplay__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"banner-cookie\", \"none\");\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (allowCustomCookies);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvYWxsb3dDdXN0b21Db29raWVzLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy91dGlscy9hbGxvd0N1c3RvbUNvb2tpZXMudHM/ZTQ1NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2V0RGlzcGxheSBmcm9tIFwiLi9zZXREaXNwbGF5XCI7XG5pbXBvcnQgeyBTZXJ2aWNlcyB9IGZyb20gXCIuLi90eXBlXCI7XG5cbmNvbnN0IGFsbG93Q3VzdG9tQ29va2llcyA9ICgkc2VydmljZXM6IEFycmF5PFNlcnZpY2VzPikgPT4ge1xuICBjb25zdCAkY3VycmVudExvY2FsU3RvcmFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzZXJ2aWNlc1wiKSk7XG4gIGlmICgkc2VydmljZXMgJiYgJGN1cnJlbnRMb2NhbFN0b3JhZ2UpIHtcbiAgICAkc2VydmljZXMuZm9yRWFjaCgoeyBuYW1lLCBjYWxsYmFjayB9KSA9PiB7XG4gICAgICBpZiAoJGN1cnJlbnRMb2NhbFN0b3JhZ2VbbmFtZV0pIHtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBzZXREaXNwbGF5KFwianMtY3VzdG9tLXNlbGVjdGlvblwiLCBcIm5vbmVcIik7XG4gIHNldERpc3BsYXkoXCJiYW5uZXItY29va2llXCIsIFwibm9uZVwiKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFsbG93Q3VzdG9tQ29va2llcztcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/utils/allowCustomCookies.ts\n");

/***/ }),

/***/ "./src/utils/checkServicesStatus.ts":
/*!******************************************!*\
  !*** ./src/utils/checkServicesStatus.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst checkServicesStatus = (storageList) => {\n    if (storageList) {\n        Object.values(storageList).some(value => value == true);\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (checkServicesStatus);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvY2hlY2tTZXJ2aWNlc1N0YXR1cy50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdXRpbHMvY2hlY2tTZXJ2aWNlc1N0YXR1cy50cz9kY2EyIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNoZWNrU2VydmljZXNTdGF0dXMgPSAoc3RvcmFnZUxpc3Q6IGFueSk6IGJvb2xlYW4gPT4ge1xuICBpZiAoc3RvcmFnZUxpc3QpIHtcbiAgICBPYmplY3QudmFsdWVzKHN0b3JhZ2VMaXN0KS5zb21lKHZhbHVlID0+IHZhbHVlID09IHRydWUpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjaGVja1NlcnZpY2VzU3RhdHVzO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/checkServicesStatus.ts\n");

/***/ }),

/***/ "./src/utils/denyAllCookies.ts":
/*!*************************************!*\
  !*** ./src/utils/denyAllCookies.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _setDisplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setDisplay */ \"./src/utils/setDisplay.ts\");\n\nconst denyAllCookies = ($services) => {\n    Object(_setDisplay__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"banner-cookie\", \"none\");\n    setAllLocalStoragesServicesFalse($services);\n};\nconst setAllLocalStoragesServicesFalse = ($services) => {\n    let $statusServices = {};\n    $services.forEach(({ name }) => {\n        $statusServices = Object.assign(Object.assign({}, $statusServices), { [name]: false });\n    });\n    localStorage.setItem(\"services\", JSON.stringify($statusServices));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (denyAllCookies);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvZGVueUFsbENvb2tpZXMudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3V0aWxzL2RlbnlBbGxDb29raWVzLnRzPzY3NTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNldERpc3BsYXkgZnJvbSBcIi4vc2V0RGlzcGxheVwiO1xuaW1wb3J0IHsgU2VydmljZXMgfSBmcm9tIFwiLi4vdHlwZVwiO1xuXG5jb25zdCBkZW55QWxsQ29va2llcyA9ICgkc2VydmljZXM6IEFycmF5PFNlcnZpY2VzPikgPT4ge1xuICBzZXREaXNwbGF5KFwiYmFubmVyLWNvb2tpZVwiLCBcIm5vbmVcIik7XG4gIHNldEFsbExvY2FsU3RvcmFnZXNTZXJ2aWNlc0ZhbHNlKCRzZXJ2aWNlcyk7XG59O1xuXG5jb25zdCBzZXRBbGxMb2NhbFN0b3JhZ2VzU2VydmljZXNGYWxzZSA9ICgkc2VydmljZXM6IEFycmF5PFNlcnZpY2VzPikgPT4ge1xuICBsZXQgJHN0YXR1c1NlcnZpY2VzID0ge307XG4gICRzZXJ2aWNlcy5mb3JFYWNoKCh7IG5hbWUgfSkgPT4ge1xuICAgICRzdGF0dXNTZXJ2aWNlcyA9IHtcbiAgICAgIC4uLiRzdGF0dXNTZXJ2aWNlcyxcbiAgICAgIFtuYW1lXTogZmFsc2VcbiAgICB9O1xuICB9KTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzZXJ2aWNlc1wiLCBKU09OLnN0cmluZ2lmeSgkc3RhdHVzU2VydmljZXMpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRlbnlBbGxDb29raWVzO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/utils/denyAllCookies.ts\n");

/***/ }),

/***/ "./src/utils/openSelection.ts":
/*!************************************!*\
  !*** ./src/utils/openSelection.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _setDisplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setDisplay */ \"./src/utils/setDisplay.ts\");\n/* harmony import */ var _templates_CustomSelection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../templates/CustomSelection */ \"./src/templates/CustomSelection/index.ts\");\n/* harmony import */ var _actionListener__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actionListener */ \"./src/utils/actionListener.ts\");\n\n\n\nconst openSelection = ($services) => {\n    const customSelectionView = document.getElementById(\"js-custom-selection\");\n    if (customSelectionView) {\n        customSelectionView.innerHTML = Object(_templates_CustomSelection__WEBPACK_IMPORTED_MODULE_1__[\"default\"])($services);\n        Object(_actionListener__WEBPACK_IMPORTED_MODULE_2__[\"customActionListener\"])($services);\n        Object(_setDisplay__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"js-custom-selection\", \"block\");\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (openSelection);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvb3BlblNlbGVjdGlvbi50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdXRpbHMvb3BlblNlbGVjdGlvbi50cz9hN2YyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzZXREaXNwbGF5IGZyb20gXCIuL3NldERpc3BsYXlcIjtcbmltcG9ydCBDdXN0b21TZWxlY3Rpb24gZnJvbSBcIi4uL3RlbXBsYXRlcy9DdXN0b21TZWxlY3Rpb25cIjtcbmltcG9ydCB7IGN1c3RvbUFjdGlvbkxpc3RlbmVyIH0gZnJvbSBcIi4vYWN0aW9uTGlzdGVuZXJcIjtcbmltcG9ydCB7IFNlcnZpY2VzIH0gZnJvbSBcIi4uL3R5cGVcIjtcblxuY29uc3Qgb3BlblNlbGVjdGlvbiA9ICgkc2VydmljZXM6IEFycmF5PFNlcnZpY2VzPikgPT4ge1xuICBjb25zdCBjdXN0b21TZWxlY3Rpb25WaWV3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqcy1jdXN0b20tc2VsZWN0aW9uXCIpO1xuICBpZiAoY3VzdG9tU2VsZWN0aW9uVmlldykge1xuICAgIGN1c3RvbVNlbGVjdGlvblZpZXcuaW5uZXJIVE1MID0gQ3VzdG9tU2VsZWN0aW9uKCRzZXJ2aWNlcyk7XG4gICAgY3VzdG9tQWN0aW9uTGlzdGVuZXIoJHNlcnZpY2VzKTtcbiAgICBzZXREaXNwbGF5KFwianMtY3VzdG9tLXNlbGVjdGlvblwiLCBcImJsb2NrXCIpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBvcGVuU2VsZWN0aW9uO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/openSelection.ts\n");

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