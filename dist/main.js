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

/***/ "./src/components/actionListener.ts":
/*!******************************************!*\
  !*** ./src/components/actionListener.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _allowAllCookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allowAllCookies */ \"./src/components/allowAllCookies.ts\");\n/* harmony import */ var _denyAllCookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./denyAllCookies */ \"./src/components/denyAllCookies.ts\");\n/* harmony import */ var _openSelection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./openSelection */ \"./src/components/openSelection.ts\");\n\n\n\nconst actionListener = () => {\n    const actions = [\n        {\n            className: \".js-cookie-button-allow\",\n            action: _allowAllCookies__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n        },\n        {\n            className: \".js-cookie-button-deny\",\n            action: _denyAllCookies__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n        },\n        {\n            className: \".js-cookie-button-customize\",\n            action: _openSelection__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n        }\n    ];\n    actions.forEach(({ className, action }) => document.querySelector(className).addEventListener(\"click\", action));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (actionListener);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hY3Rpb25MaXN0ZW5lci50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9hY3Rpb25MaXN0ZW5lci50cz85OGRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzZXREaXNwbGF5IGZyb20gXCIuLi91dGlscy9zZXREaXNwbGF5XCI7XG5pbXBvcnQgYWxsb3dBbGxDb29raWVzIGZyb20gXCIuL2FsbG93QWxsQ29va2llc1wiO1xuaW1wb3J0IGRlbnlBbGxDb29raWVzIGZyb20gXCIuL2RlbnlBbGxDb29raWVzXCI7XG5pbXBvcnQgb3BlblNlbGVjdGlvbiBmcm9tIFwiLi9vcGVuU2VsZWN0aW9uXCI7XG5cbmNvbnN0IGFjdGlvbkxpc3RlbmVyID0gKCkgPT4ge1xuICBjb25zdCBhY3Rpb25zID0gW1xuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogXCIuanMtY29va2llLWJ1dHRvbi1hbGxvd1wiLFxuICAgICAgYWN0aW9uOiBhbGxvd0FsbENvb2tpZXNcbiAgICB9LFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogXCIuanMtY29va2llLWJ1dHRvbi1kZW55XCIsXG4gICAgICBhY3Rpb246IGRlbnlBbGxDb29raWVzXG4gICAgfSxcbiAgICB7XG4gICAgICBjbGFzc05hbWU6IFwiLmpzLWNvb2tpZS1idXR0b24tY3VzdG9taXplXCIsXG4gICAgICBhY3Rpb246IG9wZW5TZWxlY3Rpb25cbiAgICB9XG4gIF07XG5cbiAgYWN0aW9ucy5mb3JFYWNoKCh7IGNsYXNzTmFtZSwgYWN0aW9uIH0pID0+XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjbGFzc05hbWUpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhY3Rpb24pXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhY3Rpb25MaXN0ZW5lcjtcbiJdLCJtYXBwaW5ncyI6IkFBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBRUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/actionListener.ts\n");

/***/ }),

/***/ "./src/components/allowAllCookies.ts":
/*!*******************************************!*\
  !*** ./src/components/allowAllCookies.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_setDisplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/setDisplay */ \"./src/utils/setDisplay.ts\");\n\nconst servicesList = [\"ga\", \"hotJar\"];\nconst allowAllCookies = () => {\n    Object(_utils_setDisplay__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"banner-cookie\", \"none\");\n    setAllLocalStoragesServicesTrue(servicesList);\n};\nconst setAllLocalStoragesServicesTrue = (servicesList) => {\n    servicesList.forEach(service => (localStorage.services = JSON.stringify({\n        allowGa: true,\n        allowHotjar: true\n    })));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (allowAllCookies);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hbGxvd0FsbENvb2tpZXMudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvYWxsb3dBbGxDb29raWVzLnRzPzRmOGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNldERpc3BsYXkgZnJvbSBcIi4uL3V0aWxzL3NldERpc3BsYXlcIjtcblxuY29uc3Qgc2VydmljZXNMaXN0ID0gW1wiZ2FcIiwgXCJob3RKYXJcIl07XG5cbmNvbnN0IGFsbG93QWxsQ29va2llcyA9ICgpID0+IHtcbiAgc2V0RGlzcGxheShcImJhbm5lci1jb29raWVcIiwgXCJub25lXCIpO1xuICBzZXRBbGxMb2NhbFN0b3JhZ2VzU2VydmljZXNUcnVlKHNlcnZpY2VzTGlzdCk7XG59O1xuXG5jb25zdCBzZXRBbGxMb2NhbFN0b3JhZ2VzU2VydmljZXNUcnVlID0gKHNlcnZpY2VzTGlzdDogQXJyYXk8c3RyaW5nPikgPT4ge1xuICBzZXJ2aWNlc0xpc3QuZm9yRWFjaChcbiAgICBzZXJ2aWNlID0+XG4gICAgICAobG9jYWxTdG9yYWdlLnNlcnZpY2VzID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBhbGxvd0dhOiB0cnVlLFxuICAgICAgICBhbGxvd0hvdGphcjogdHJ1ZVxuICAgICAgfSkpXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhbGxvd0FsbENvb2tpZXM7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFFQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/allowAllCookies.ts\n");

/***/ }),

/***/ "./src/components/denyAllCookies.ts":
/*!******************************************!*\
  !*** ./src/components/denyAllCookies.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_setDisplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/setDisplay */ \"./src/utils/setDisplay.ts\");\n\nconst servicesList = [\"ga\", \"hotJar\"];\nconst denyAllCookies = () => {\n    Object(_utils_setDisplay__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"banner-cookie\", \"none\");\n    setAllLocalStoragesServicesFalse(servicesList);\n};\nconst setAllLocalStoragesServicesFalse = (servicesList) => {\n    servicesList.forEach(service => (localStorage.services = JSON.stringify({\n        allowGa: false,\n        allowHotjar: false\n    })));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (denyAllCookies);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9kZW55QWxsQ29va2llcy50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9kZW55QWxsQ29va2llcy50cz85ZWMxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzZXREaXNwbGF5IGZyb20gXCIuLi91dGlscy9zZXREaXNwbGF5XCI7XG5cbmNvbnN0IHNlcnZpY2VzTGlzdCA9IFtcImdhXCIsIFwiaG90SmFyXCJdO1xuXG5jb25zdCBkZW55QWxsQ29va2llcyA9ICgpID0+IHtcbiAgc2V0RGlzcGxheShcImJhbm5lci1jb29raWVcIiwgXCJub25lXCIpO1xuICBzZXRBbGxMb2NhbFN0b3JhZ2VzU2VydmljZXNGYWxzZShzZXJ2aWNlc0xpc3QpO1xufTtcblxuY29uc3Qgc2V0QWxsTG9jYWxTdG9yYWdlc1NlcnZpY2VzRmFsc2UgPSAoc2VydmljZXNMaXN0OiBBcnJheTxzdHJpbmc+KSA9PiB7XG4gIHNlcnZpY2VzTGlzdC5mb3JFYWNoKFxuICAgIHNlcnZpY2UgPT5cbiAgICAgIChsb2NhbFN0b3JhZ2Uuc2VydmljZXMgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGFsbG93R2E6IGZhbHNlLFxuICAgICAgICBhbGxvd0hvdGphcjogZmFsc2VcbiAgICAgIH0pKVxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVueUFsbENvb2tpZXM7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFFQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/denyAllCookies.ts\n");

/***/ }),

/***/ "./src/components/openSelection.ts":
/*!*****************************************!*\
  !*** ./src/components/openSelection.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst openSelection = () => alert(\"open\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (openSelection);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9vcGVuU2VsZWN0aW9uLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL29wZW5TZWxlY3Rpb24udHM/NTQwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBvcGVuU2VsZWN0aW9uID0gKCkgPT4gYWxlcnQoXCJvcGVuXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBvcGVuU2VsZWN0aW9uO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBRUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/openSelection.ts\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_checkServicesStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/checkServicesStatus */ \"./src/utils/checkServicesStatus.ts\");\n/* harmony import */ var _services_ga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/ga */ \"./src/services/ga/index.ts\");\n/* harmony import */ var _services_hotjar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/hotjar */ \"./src/services/hotjar/index.ts\");\n/* harmony import */ var _templates_Banner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templates/Banner */ \"./src/templates/Banner/index.ts\");\n/* harmony import */ var _components_actionListener__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/actionListener */ \"./src/components/actionListener.ts\");\n\n\n\n\n\nconst services = [\n    {\n        name: \"ga\",\n        callback: (code) => Object(_services_ga__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(code)\n    },\n    {\n        name: \"hotjar\",\n        callback: (code) => Object(_services_hotjar__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(code)\n    }\n];\n// initCookie({\n//   matomo: () => alert(\"test\"),\n// });\nfunction init() {\n    if (!localStorage.services) {\n        console.log(\"localStorage is undefined\");\n        localStorage.setItem(\"services\", JSON.stringify({ allowGa: false, allowHotjar: false }));\n    }\n    if (localStorage.services) {\n        console.log(\"localStorage!==undefined\");\n        const services = JSON.parse(localStorage.getItem(\"services\")) !== null\n            ? JSON.parse(localStorage.getItem(\"services\"))\n            : JSON.stringify({ allowGa: false, allowHotjar: false });\n        if (Object(_utils_checkServicesStatus__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(services.allowGa, services.allowHotjar) === false) {\n            console.log(\"all services are false\");\n        }\n        if (Object(_utils_checkServicesStatus__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(services.allowGa, services.allowHotjar) === true) {\n            console.log(\"all services are true\");\n            Object(_services_ga__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(123);\n            Object(_services_hotjar__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(123);\n        }\n    }\n    const theDiv = document.getElementById(\"js-cookie-banner\");\n    theDiv.innerHTML = Object(_templates_Banner__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    Object(_components_actionListener__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n}\ninit();\n/* harmony default export */ __webpack_exports__[\"default\"] = (init);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2luZGV4LnRzP2M2YWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNoZWNrU2VydmljZXNTdGF0dXMgZnJvbSBcIi4vdXRpbHMvY2hlY2tTZXJ2aWNlc1N0YXR1c1wiO1xuaW1wb3J0IGluaXRHYSBmcm9tIFwiLi9zZXJ2aWNlcy9nYVwiO1xuaW1wb3J0IGluaXRIb3RqYXIgZnJvbSBcIi4vc2VydmljZXMvaG90amFyXCI7XG5pbXBvcnQgQmFubmVyIGZyb20gXCIuL3RlbXBsYXRlcy9CYW5uZXJcIjtcbmltcG9ydCBhY3Rpb25MaXN0ZW5lciBmcm9tIFwiLi9jb21wb25lbnRzL2FjdGlvbkxpc3RlbmVyXCI7XG5cbmludGVyZmFjZSBTZXJ2aWNlcyB7XG4gIGFsbG93R2E6IGJvb2xlYW47XG4gIGFsbG93SG90amFyOiBib29sZWFuO1xufVxuXG5jb25zdCBzZXJ2aWNlcyA9IFtcbiAge1xuICAgIG5hbWU6IFwiZ2FcIixcbiAgICBjYWxsYmFjazogKGNvZGU6IG51bWJlcikgPT4gaW5pdEdhKGNvZGUpXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImhvdGphclwiLFxuICAgIGNhbGxiYWNrOiAoY29kZTogbnVtYmVyKSA9PiBpbml0SG90amFyKGNvZGUpXG4gIH1cbl07XG5cbi8vIGluaXRDb29raWUoe1xuLy8gICBtYXRvbW86ICgpID0+IGFsZXJ0KFwidGVzdFwiKSxcbi8vIH0pO1xuXG5mdW5jdGlvbiBpbml0KCkge1xuICBpZiAoIWxvY2FsU3RvcmFnZS5zZXJ2aWNlcykge1xuICAgIGNvbnNvbGUubG9nKFwibG9jYWxTdG9yYWdlIGlzIHVuZGVmaW5lZFwiKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgIFwic2VydmljZXNcIixcbiAgICAgIEpTT04uc3RyaW5naWZ5KHsgYWxsb3dHYTogZmFsc2UsIGFsbG93SG90amFyOiBmYWxzZSB9KVxuICAgICk7XG4gIH1cbiAgaWYgKGxvY2FsU3RvcmFnZS5zZXJ2aWNlcykge1xuICAgIGNvbnNvbGUubG9nKFwibG9jYWxTdG9yYWdlIT09dW5kZWZpbmVkXCIpO1xuICAgIGNvbnN0IHNlcnZpY2VzOiBTZXJ2aWNlcyA9XG4gICAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2VydmljZXNcIikpICE9PSBudWxsXG4gICAgICAgID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNlcnZpY2VzXCIpKVxuICAgICAgICA6IEpTT04uc3RyaW5naWZ5KHsgYWxsb3dHYTogZmFsc2UsIGFsbG93SG90amFyOiBmYWxzZSB9KTtcblxuICAgIGlmIChjaGVja1NlcnZpY2VzU3RhdHVzKHNlcnZpY2VzLmFsbG93R2EsIHNlcnZpY2VzLmFsbG93SG90amFyKSA9PT0gZmFsc2UpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiYWxsIHNlcnZpY2VzIGFyZSBmYWxzZVwiKTtcbiAgICB9XG4gICAgaWYgKGNoZWNrU2VydmljZXNTdGF0dXMoc2VydmljZXMuYWxsb3dHYSwgc2VydmljZXMuYWxsb3dIb3RqYXIpID09PSB0cnVlKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImFsbCBzZXJ2aWNlcyBhcmUgdHJ1ZVwiKTtcbiAgICAgIGluaXRHYSgxMjMpO1xuICAgICAgaW5pdEhvdGphcigxMjMpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHRoZURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtY29va2llLWJhbm5lclwiKTtcbiAgdGhlRGl2LmlubmVySFRNTCA9IEJhbm5lcigpO1xuXG4gIGFjdGlvbkxpc3RlbmVyKCk7XG59XG5cbmluaXQoKTtcblxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.ts\n");

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
eval("__webpack_require__.r(__webpack_exports__);\nconst Banner = () => `\n     <div id=\"banner-cookie\">\n          <button class=\"js-cookie-button-allow\">Accepter</button>\n          <button class=\"js-cookie-button-deny\">Refuser</button>\n          <button class=\"js-cookie-button-customize\">Personnaliser</button>\n     </div>\n`;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Banner);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGVtcGxhdGVzL0Jhbm5lci9pbmRleC50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdGVtcGxhdGVzL0Jhbm5lci9pbmRleC50cz9jNjgwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEJhbm5lciA9ICgpID0+IGBcbiAgICAgPGRpdiBpZD1cImJhbm5lci1jb29raWVcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwianMtY29va2llLWJ1dHRvbi1hbGxvd1wiPkFjY2VwdGVyPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImpzLWNvb2tpZS1idXR0b24tZGVueVwiPlJlZnVzZXI8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwianMtY29va2llLWJ1dHRvbi1jdXN0b21pemVcIj5QZXJzb25uYWxpc2VyPC9idXR0b24+XG4gICAgIDwvZGl2PlxuYDtcblxuZXhwb3J0IGRlZmF1bHQgQmFubmVyO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBOzs7Ozs7QUFNQTtBQUVBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/templates/Banner/index.ts\n");

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

/***/ "./src/utils/setDisplay.ts":
/*!*********************************!*\
  !*** ./src/utils/setDisplay.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst setDisplay = (id, status) => {\n    document.getElementById(id).style.display = status;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (setDisplay);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvc2V0RGlzcGxheS50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdXRpbHMvc2V0RGlzcGxheS50cz84NDJmIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNldERpc3BsYXkgPSAoaWQ6IHN0cmluZywgc3RhdHVzOiBzdHJpbmcpID0+IHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnN0eWxlLmRpc3BsYXkgPSBzdGF0dXM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzZXREaXNwbGF5O1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/setDisplay.ts\n");

/***/ })

/******/ });