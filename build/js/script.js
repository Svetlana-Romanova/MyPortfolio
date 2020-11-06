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
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/js/modules/modal.js":
/*!************************************!*\
  !*** ./source/js/modules/modal.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getModal; });
function getModal() {
  let body = document.querySelector('body');
  let wrapper = document.querySelector('.wrapper__modal');
  let modal = document.querySelector('.modal');
  let modalClose = document.querySelector('.modal__close');
  let btns = document.querySelectorAll('.btn');
  let aboutMore = document.querySelector('[data-id="btn-about"]');

  function open() {
    wrapper.classList.remove('visually-hidden');
    wrapper.classList.add('overlay');
    body.classList.add('is-modal-open');
    return modal;
  }

  function close() {
    wrapper.classList.add('visually-hidden');
    wrapper.classList.remove('overlay');
    body.classList.remove('is-modal-open');
  }

  aboutMore.addEventListener('click', () => {
    open();
  });
  modalClose.addEventListener('click', () => close());
  body.addEventListener('keydown', function (event) {
    if (event.code === 'Escape') {
      close();
      btns.forEach(el => el.blur());
    }
  });
  body.addEventListener('click', e => {
    if (e.target.parentNode.classList.contains('is-modal-open')) {
      close();
    }

    ;
  });
}

/***/ }),

/***/ "./source/js/modules/toggle.js":
/*!*************************************!*\
  !*** ./source/js/modules/toggle.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getToggle; });
function getToggle() {
  let toggleMain = document.querySelector('.main-nav__toggle'),
      navList = document.querySelector('.main-nav__list'),
      nav = document.querySelector('.main-nav'),
      body = document.querySelector('body');

  function changeMenu() {
    toggleMain.classList.toggle('active');
    navList.classList.toggle('d-none');

    if (toggleMain.classList.contains('active')) {
      nav.classList.add('main-nav--adaptive');
      body.classList.add('is-modal-open');
    } else {
      nav.classList.remove('main-nav--adaptive');
      body.classList.remove('is-modal-open');
    }
  }

  toggleMain.addEventListener('click', () => {
    changeMenu();
  });
  body.addEventListener('keydown', function (event) {
    if (event.code === 'Escape') {
      changeMenu();
    }
  });
  body.addEventListener('click', e => {
    if (e.target.classList.contains('main-nav__item') && toggleMain.classList.contains('active')) {
      changeMenu();
    }

    ;
  });
}

/***/ }),

/***/ "./source/js/script.js":
/*!*****************************!*\
  !*** ./source/js/script.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_toggle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/toggle */ "./source/js/modules/toggle.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ "./source/js/modules/modal.js");


'use strict';

Object(_modules_toggle__WEBPACK_IMPORTED_MODULE_0__["default"])();
Object(_modules_modal__WEBPACK_IMPORTED_MODULE_1__["default"])();

/***/ })

/******/ });
//# sourceMappingURL=script.js.map