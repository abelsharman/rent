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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/index.js":
/*!*******************************!*\
  !*** ./resources/js/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$(document).ready(function () {
  $(".dropdown").click(function () {
    $(this).find(".dropdown-menu").slideToggle("fast");
  });
});
$(document).on("click", function (event) {
  var $trigger = $(".dropdown");

  if ($trigger !== event.target && !$trigger.has(event.target).length) {
    $(".dropdown-menu").slideUp("fast");
  }
});

function vision() {
  var x = document.getElementById("check");

  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function mainpage() {
  window.location.href = 'index.html';
}

var g = window.matchMedia("(max-width: 440px)");

function myFirst() {
  if (!g.matches) {
    document.getElementById('login1').style.display = "inline";
    document.querySelector("header").style.opacity = "0.4";
    document.getElementById('mai').style.opacity = "0.4";
    document.querySelector("main").style.opacity = "0.4";
  }
}

function second() {
  if (!g.matches) {
    if (document.getElementById('login1').style.display == "inline") {
      document.getElementById('login1').style.display = "none";
      document.querySelector("header").style.opacity = "1";
      document.getElementById('mai').style.opacity = "1";
      document.querySelector("main").style.opacity = "1";
    }
  }
}

var lists = ['searchpage', 'mainpage', 'cabpage'];

function third() {
  var i = 0;

  for (i; i < 3; i++) {
    if (event.target.id == lists[i]) {
      if (event.target.style.backgroundColor == '#000') {
        event.target.style.backgroundColor = 'grey';
      } else {
        event.target.style.backgroundColor = '#000';
      }
    } else {
      document.getElementById(lists[i]).style.backgroundColor = 'grey';
    }
  }
}

var city = {
  'Акмолинская область': ['Абай', 'Акколь', 'Аксай', 'Аксу', 'Атбасар', 'Державинск', 'Ерейментау', 'Есиль', 'Кокшетау', 'Макинск', 'Нур-Султан(Астана)'],
  'Актюбинская область': ['Актобе', 'Алга', 'Эмба', 'Хромтау', 'Кандыагаш', 'Шалкар', 'Темир', 'Жем'],
  'Алматинская область': ['Алматы', 'Есик', 'Капчагай', 'Каскелен', 'Сарканд', 'Талдыкорган', 'Талгар', 'Текели', 'Ушарал'],
  'Атырауская область': ['Атырау', 'Кульсары'],
  'Восточно-Казахстанская область': ['Аягоз', 'Курчатов', 'Риддер', 'Сатпаев', 'Семей', 'Серебрянск'],
  'Жамбылская область': ['Каратай', 'Шу', 'Тараз', 'Жанатас'],
  'Западно-Казахстанская': ['Актау', 'Уральск'],
  'Карагандинская область': ['Атасу', 'Балхаш', 'Байконур', 'Караганда', 'Каражал', 'Каркаралинск', 'Приозерск', 'Сарань', 'Шахтинск', 'Темиртау', 'Жезказган'],
  'Костанайская область': ['Аркалык', 'Костанай', 'Лисаковск', 'Рудный', 'Житикара'],
  'Кызылординская область': ['Аральск', 'Казалинск', 'Кызылорда'],
  'Мангистауская область': ['Форт-Шевченко', 'Жанаозен'],
  'Павлодарская область': ['Экибастуз', 'Павлодар'],
  'Северо-Казахстанская область': ['Булаево', 'Мамлютка', 'Петропавловск', 'Тайынша'],
  'Туркестанская область': ['Кентау', 'Ленгер', 'Шардара', 'Шымкент', 'Туркестан', 'Жетысай']
};

function fourth() {
  var cit = document.getElementById('okno_city');

  for (var i in city) {
    if (event.target.text == i) {
      cit.style.display = 'block';

      for (var j = 0; j < city[i].length; j++) {
        cit.firstChild.childNodes[j * 2].firstChild.innerHTML = city[i][j];
      }
    }
  }
}

function exit() {
  event.target.parentNode.style.display = 'none';
}

function sixth() {
  for (var i = 0; i < 18; i++) {
    if (i == 0 || i % 2 == 0) {
      if (event.target.parentNode.childNodes[i].style.color == 'rgb(240, 185, 60)') {
        event.target.parentNode.childNodes[i].style.color = 'white';
      }
    }
  }

  event.target.style.color = 'rgb(240,185, 60)';
}

/***/ }),

/***/ 1:
/*!*************************************!*\
  !*** multi ./resources/js/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/rent/resources/js/index.js */"./resources/js/index.js");


/***/ })

/******/ });