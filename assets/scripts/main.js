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
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../../src/assets/scripts/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../src/assets/scripts/calcs/calcs.js":
/*!****************************************************************************************************!*\
  !*** /Users/erkan.boga/Projects/Development/x-prozentrechner.de/src/assets/scripts/calcs/calcs.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

let calcs = document.querySelectorAll(".jsCalc");
if (calcs && calcs.length > 0) {
    calcs.forEach(calc => {
        calc.addEventListener("change", () => {
            calculate(calc);
        });
    });
}

const calculate = (calc) => {
    let operands = calc.querySelectorAll(".jsCalcInputOperand");
    let result = calc.querySelector(".jsCalcInputResult")
    let type = calc.getAttribute("data-calc");

    let first = operands[0];
    let second = operands[1];
    let third = operands[2];

    let sum;

    // Bail early.
    if (!result) {
        return;
    }



    if (type === 'f1' && first && first.value && second && second.value) {
        first = Number(first.value);
        second = Number(second.value);

        sum = first / 100 * second;

        result.value = round(sum);

        return;
    }



    if (type === 'f2' && first && first.value && second && second.value) {
        first = Number(first.value);
        second = Number(second.value);

        sum = first / second * 100;

        result.value = round(sum);

        return;
    }



    if (type === 'f3' && first && first.value && second && second.value) {
        first = Number(first.value);
        second = Number(second.value);

        sum = (second - first) / first  * 100;

        result.value = round(sum);

        return;
    }



    if (type === 'f4' && first && first.value && second && second.value) {
        first = Number(first.value);
        second = Number(second.value);

        sum = first + (first * (second / 100));

        result.value = round(sum);

        return;
    }



    if (type === 'f5' && first && first.value && second && second.value) {
        first = Number(first.value);
        second = Number(second.value);

        sum = first - (first * (second / 100));

        result.value = round(sum);

        return;
    }



    if (type === 'f6' && first && first.value && second && second.value) {
        first = Number(first.value);
        second = Number(second.value);

        sum = first * 100 / second;

        result.value = round(sum);

        return;
    }



    if (type === 'f7' && first && first.value && second && second.value) {
        first = Number(first.value);
        second = Number(second.value);

        sum = first / (1 + (second / 100));

        result.value = round(sum);

        return;
    }



    if (type === 'f8' && first && first.value && second && second.value) {
        first = Number(first.value);
        second = Number(second.value);

        sum = first / (1 - (second / 100));

        result.value = round(sum);

        return;
    }
}

const round = (number, decimals = 2) => {
    return Number(Math.round(number+'e'+decimals)+'e-'+decimals);
}


/***/ }),

/***/ "../../../../src/assets/scripts/index.js":
/*!**********************************************************************************************!*\
  !*** /Users/erkan.boga/Projects/Development/x-prozentrechner.de/src/assets/scripts/index.js ***!
  \**********************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tabs_tabs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs/tabs.js */ "../../../../src/assets/scripts/tabs/tabs.js");
/* harmony import */ var _tabs_tabs_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tabs_tabs_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _calcs_calcs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calcs/calcs.js */ "../../../../src/assets/scripts/calcs/calcs.js");
/* harmony import */ var _calcs_calcs_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_calcs_calcs_js__WEBPACK_IMPORTED_MODULE_1__);




/***/ }),

/***/ "../../../../src/assets/scripts/tabs/tabs.js":
/*!**************************************************************************************************!*\
  !*** /Users/erkan.boga/Projects/Development/x-prozentrechner.de/src/assets/scripts/tabs/tabs.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

let inits = document.querySelectorAll(".jsTabInit");

if (inits && inits.length > 0) {
    inits.forEach(init => {
        init.addEventListener("click", event => {
            let children;
            let controls;
            let item;

            // Gets an item, controlled by the init.
            controls = init.getAttribute("aria-controls");
            if (!controls) return;
            item = document.querySelector(`#${controls}`);
            if (!item) return;

            // Removes an active class from the init and all its siblings.
            children = [...init.parentElement.children];
            children.forEach(child => {
                child.classList.remove("isActive");
            });

            // Removes an active class from the item and all its siblings.
            children = [...item.parentElement.children];
            children.forEach(child => {
                child.classList.remove("isActive");
            });


            // Adds an active class to the init and its item.
            init.classList.add("isActive");
            item.classList.add("isActive");
        });
    });
}


/***/ })

/******/ });
//# sourceMappingURL=main.js.map