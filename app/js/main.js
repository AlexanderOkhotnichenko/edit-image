/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./root */ "./js/root.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./js/edit.js");


document.addEventListener('DOMContentLoaded', function () {
  (0,_root__WEBPACK_IMPORTED_MODULE_0__.createRoot)(document.querySelector('body'));
  (0,_edit__WEBPACK_IMPORTED_MODULE_1__.appEdit)(document.querySelector('.container'));
});

/***/ }),

/***/ "./js/edit.js":
/*!********************!*\
  !*** ./js/edit.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appEdit": () => (/* binding */ appEdit)
/* harmony export */ });
/* harmony import */ var _sampleElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sampleElement */ "./js/sampleElement.js");

var brightness = 100,
  contrast = 100,
  grayscale = 0,
  invert = 0,
  saturate = 100,
  sepia = 0,
  hueRotate = 0,
  temperature = 0,
  opacity = 100,
  blur = 0,
  rotate = 0,
  flipHorizontal = 1,
  flipVertical = 1,
  border = 0,
  lineBorder = 'solid',
  color = '#222222';
var createEditMainContainer = function createEditMainContainer() {
  var main = (0,_sampleElement__WEBPACK_IMPORTED_MODULE_0__.sampleElement)('main', ['main', 'disabled']);
  return {
    main: main
  };
};
var createEditHeader = function createEditHeader() {
  var header = (0,_sampleElement__WEBPACK_IMPORTED_MODULE_0__.sampleElement)('header', ['edit-header']);
  var wrapper = (0,_sampleElement__WEBPACK_IMPORTED_MODULE_0__.sampleElement)('div', ['edit-header__wrapper']);
  var title = (0,_sampleElement__WEBPACK_IMPORTED_MODULE_0__.sampleElement)('h1', ['edit-header__title'], 'Редактор зображення');
  var dowbloadBtn = (0,_sampleElement__WEBPACK_IMPORTED_MODULE_0__.sampleElement)('button', ['edit-header__button-download', 'disabled'], 'Завантажити');
  var fileWrapper = (0,_sampleElement__WEBPACK_IMPORTED_MODULE_0__.sampleElement)('div', ['edit-header-file']);
  var input = (0,_sampleElement__WEBPACK_IMPORTED_MODULE_0__.sampleElement)('input', ['edit-header-file__input']);
  var label = (0,_sampleElement__WEBPACK_IMPORTED_MODULE_0__.sampleElement)('label', ['edit-header-file__label']);
  var icon = "<i class='bx bx-image'></i>";
  input.type = 'file', input.id = 'edit-header-file';
  label.setAttribute('for', 'edit-header-file');
  label.innerHTML = icon;
  fileWrapper.append(input, label);
  wrapper.append(dowbloadBtn, title);
  header.append(fileWrapper, wrapper);
  return {
    header: header,
    input: input,
    label: label,
    dowbloadBtn: dowbloadBtn,
    fileWrapper: fileWrapper
  };
};
var createEditSidebarLeft = function createEditSidebarLeft() {
  var sidebar = (0,_sampleElement__WEBPACK_IMPORTED_MODULE_0__.sampleElement)('div', ['edit-sidebar-left']);
  var objectElement = [{
    icon: '<i class="bx bxs-palette"></i>',
    name: 'brightness'
  }, {
    icon: '<i class="bx bxs-adjust-alt"></i>',
    name: 'contrast'
  }, {
    icon: '<i class="bx bxs-brush"></i>',
    name: 'grayscale'
  }, {
    icon: '<i class="bx bxs-droplet-half"></i>',
    name: 'invert'
  }, {
    icon: '<i class="fa fa-solid fa-swatchbook"></i>',
    name: 'hue-rotate'
  }, {
    icon: ' <i class="fa fa-solid fa-crutch"></i>',
    name: 'temperature'
  }, {
    icon: '<i class="fa fa-solid fa-eye-dropper"></i>',
    name: 'saturate'
  }, {
    icon: '<i class="bx bxs-color"></i>',
    name: 'sepia'
  }, {
    icon: '<i class="bx bxs-tone"></i>',
    name: 'opacity'
  }, {
    icon: '<i class="bx bxs-low-vision"></i>',
    name: 'blur'
  }];
  sidebar.innerHTML = objectElement.map(function (element) {
    return "<button class=\"edit-sidebar-left__item\" id=\"".concat(element.name, "\">\n      ").concat(element.icon, "\n      <span class=\"edit-sidebar-left__text\">").concat(element.name, "</span>\n    </button>");
  }).join('');
  return {
    sidebar: sidebar
  };
};
var createEditSidebarRight = function createEditSidebarRight() {
  var sidebar = (0,_sampleElement__WEBPACK_IMPORTED_MODULE_0__.sampleElement)('div', ['edit-sidebar-right']);
  var objectElement = [{
    icon: '<i class="bx bx-horizontal-left"></i>',
    name: 'rotate-right'
  }, {
    icon: '<i class="bx bx-horizontal-right"></i>',
    name: 'rotate-left'
  }, {
    icon: '<i class="bx bx-vertical-top"></i>',
    name: 'reflect-vertical'
  }, {
    icon: '<i class="bx bx-vertical-top"></i>',
    name: 'reflect-horizontal'
  }, {
    icon: '<i class="bx bxs-objects-horizontal-right"></i>',
    name: 'border'
  }, {
    icon: '<i class="bx bx-fullscreen"></i>',
    name: 'line-border'
  }];
  sidebar.innerHTML = objectElement.map(function (element) {
    return "<button class=\"edit-sidebar-right__item\" id=\"".concat(element.name, "\">\n      ").concat(element.icon, "\n    </button>");
  }).join('');
  return {
    sidebar: sidebar
  };
};
var createEditContent = function createEditContent() {
  var content = (0,_sampleElement__WEBPACK_IMPORTED_MODULE_0__.sampleElement)('div', ['edit-content']);
  var preview = (0,_sampleElement__WEBPACK_IMPORTED_MODULE_0__.sampleElement)('div', ['edit-wrapper-preview']);
  var slider = (0,_sampleElement__WEBPACK_IMPORTED_MODULE_0__.sampleElement)('div', ['edit-slider']);
  var sliderContainer = (0,_sampleElement__WEBPACK_IMPORTED_MODULE_0__.sampleElement)('div', ['edit-slider-container']);
  var sliderName = (0,_sampleElement__WEBPACK_IMPORTED_MODULE_0__.sampleElement)('span', ['edit-slider-container__name']);
  var sliderValue = (0,_sampleElement__WEBPACK_IMPORTED_MODULE_0__.sampleElement)('span', ['edit-slider-container__value']);
  var sliderInput = (0,_sampleElement__WEBPACK_IMPORTED_MODULE_0__.sampleElement)('input', ['edit-slider__input']);
  var resetButton = (0,_sampleElement__WEBPACK_IMPORTED_MODULE_0__.sampleElement)('button', ['edit-reset-button'], 'Скинути');
  sliderInput.type = 'range', sliderInput.max = '200';
  preview.innerHTML = "\n    <div class=\"edit-preview\">\n      <div class=\"plug\">\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0442\u0435 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F</div>\n    </div>\n  ";
  sliderContainer.append(sliderName, sliderValue);
  slider.append(sliderContainer, sliderInput);
  content.append(preview, slider, resetButton);
  return {
    content: content
  };
};
var loadingPreview = function loadingPreview(event) {
  var main = document.querySelector('main');
  var preview = document.querySelector('.edit-preview');
  var download = document.querySelector('.edit-header__button-download');
  var file = event.target.files[0];
  var updatePreview = "\n    <img src=\"\">\n    <div class=\"temperature\"></div>\n  ";
  var loadingUrl = function loadingUrl() {
    download.classList.remove('disabled');
    preview.innerHTML = updatePreview;
    if (!file) return;
    document.querySelector('.edit-preview img').src = URL.createObjectURL(file);
    main.classList.remove('disabled');
    main.classList.add('animation');
    download.classList.remove('disabled');
  };
  loadingUrl();
};
var focusItemFilter = function focusItemFilter(event) {
  var _document$querySelect;
  var preview = document.querySelector('.edit-wrapper-preview');
  var slider = document.querySelector('.edit-slider');
  var input = document.querySelector('.edit-slider__input');
  var name = document.querySelector('.edit-slider-container__name');
  var value = document.querySelector('.edit-slider-container__value');
  var currentTarget = event.target;
  var idItem = currentTarget.id;
  name.innerText = idItem;
  slider.classList.add('active');
  (_document$querySelect = document.querySelector('.edit-sidebar-left__item.active')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.classList.remove('active');
  currentTarget.classList.add('active');
  if (slider.className === 'edit-slider active') preview.style.height = '400px';
  if (idItem === 'brightness') {
    input.max = 200;
    input.value = brightness;
    value.innerText = "".concat(brightness, "%");
  } else if (idItem === 'contrast') {
    input.max = 200;
    input.value = contrast;
    value.innerText = "".concat(contrast, "%");
  } else if (idItem === 'grayscale') {
    input.max = 100;
    input.value = grayscale;
    value.innerText = "".concat(grayscale, "%");
  } else if (idItem === 'invert') {
    input.max = 100;
    input.value = invert;
    value.innerText = "".concat(invert, "%");
  } else if (idItem === 'hue-rotate') {
    input.max = 320;
    input.value = hueRotate;
    value.innerText = "".concat(hueRotate, "%");
  } else if (idItem === 'temperature') {
    input.min = -100, input.max = 100, input.value = 0;
    input.value = temperature;
    value.innerText = "".concat(temperature);
  } else if (idItem === 'saturate') {
    input.max = 100;
    input.value = saturate;
    value.innerText = "".concat(saturate, "%");
  } else if (idItem === 'sepia') {
    input.max = 100;
    input.value = sepia;
    value.innerText = "".concat(sepia, "%");
  } else if (idItem === 'opacity') {
    input.max = 100;
    input.value = opacity;
    value.innerText = "".concat(opacity, "%");
  } else if (idItem === 'blur') {
    input.max = 20;
    input.value = blur;
    value.innerText = "".concat(blur, "%");
  }
  if (idItem !== 'temperature') {
    input.min = 0;
  }
  updateValueInput();
  input.addEventListener('input', updateValueInput);
  applyFiltersImage();
};
var focusItemStyles = function focusItemStyles(event) {
  var resetButton = document.querySelector('.edit-reset-button');
  var downloadButton = document.querySelector('.edit-header__button-download');
  var slider = document.querySelector('.edit-slider.active');
  var preview = document.querySelector('.edit-wrapper-preview');
  var currentTarget = event.target;
  var idItem = currentTarget.id;
  resetButton.classList.add('active');
  if (slider) {
    slider.classList.remove('active');
    preview.style.height = '440px';
  }
  if (idItem === 'rotate-right') {
    rotate -= 90;
    if (rotate < -360) rotate = 0;
  } else if (idItem === 'rotate-left') {
    rotate += 90;
    if (rotate > 360) rotate = 0;
  } else if (idItem === 'reflect-vertical') {
    flipHorizontal = flipHorizontal === 1 ? -1 : 1;
  } else if (idItem === 'reflect-horizontal') {
    flipVertical = flipVertical === -1 ? 1 : -1;
  } else if (idItem === 'border') {
    border += 3;
    if (border > 12) border = 0;
  } else if (idItem === 'line-border') {
    if (lineBorder === 'solid') {
      lineBorder = 'dashed';
    } else if (lineBorder === 'dashed') {
      lineBorder = 'dotted';
    } else if (lineBorder === 'dotted') {
      lineBorder = 'solid';
    }
  }
  applyFiltersImage();
  resetButton.addEventListener('click', resetStyles);
  downloadButton.addEventListener('click', saveImage);
};
var updateValueInput = function updateValueInput() {
  var input = document.querySelector('.edit-slider__input');
  var value = document.querySelector('.edit-slider-container__value');
  var idItem = document.querySelector('.edit-sidebar-left__item.active').id;
  var resetButton = document.querySelector('.edit-reset-button');
  var downloadButton = document.querySelector('.edit-header__button-download');
  resetButton.classList.add('active');
  if (idItem === 'brightness') {
    brightness = input.value;
  } else if (idItem === 'contrast') {
    contrast = input.value;
  } else if (idItem === 'grayscale') {
    grayscale = input.value;
  } else if (idItem === 'invert') {
    invert = input.value;
  } else if (idItem === 'hue-rotate') {
    hueRotate = input.value;
  } else if (idItem === 'temperature') {
    temperature = input.value;
  } else if (idItem === 'saturate') {
    saturate = input.value;
  } else if (idItem === 'sepia') {
    sepia = input.value;
  } else if (idItem === 'opacity') {
    opacity = input.value;
  } else if (idItem === 'blur') {
    blur = input.value;
  }
  value.innerText = "".concat(input.value, "%");
  applyFiltersImage();
  resetButton.addEventListener('click', resetStyles);
  downloadButton.addEventListener('click', saveImage);
};
var applyFiltersImage = function applyFiltersImage() {
  var image = document.querySelector('.edit-preview img');
  var temperatureStyle = document.querySelector('.temperature');
  image.style.filter = "\n    brightness(".concat(brightness, "%)\n    contrast(").concat(contrast, "%)\n    grayscale(").concat(grayscale, "%)\n    invert(").concat(invert, "%)\n    hue-rotate(").concat(hueRotate, "deg)\n    saturate(").concat(saturate, "%)\n    sepia(").concat(sepia, "%)\n    opacity(").concat(opacity, "%)\n    blur(").concat(blur, "px)\n  ");
  image.style.transform = "rotate(".concat(rotate, "deg) scale(").concat(flipHorizontal, ", ").concat(flipVertical, ")");
  image.style.border = "".concat(border, "px ").concat(lineBorder, " #22222280");
  if (temperature < 0) {
    temperatureStyle.style.background = 'rgba(0, 0, 255,' + Math.abs(temperature) / 400 + ')';
  } else {
    temperatureStyle.style.background = 'rgba(255, 68, 0,' + Math.abs(temperature) / 400 + ')';
  }
};
var resetStyles = function resetStyles() {
  var item = document.querySelector('.edit-sidebar-left__item.active');
  var reset = document.querySelector('.edit-reset-button');
  reset.classList.remove('active');
  brightness = 100, contrast = 100, grayscale = 0, invert = 0, saturate = 100, sepia = 0, hueRotate = 0, temperature = 0, opacity = 100, blur = 0, rotate = 0, flipHorizontal = 1, flipVertical = 1, border = 0, lineBorder = 'solid';
  item.click();
  applyFiltersImage();
};
var saveImage = function saveImage() {
  var image = document.querySelector('.edit-preview img');
  var canvas = (0,_sampleElement__WEBPACK_IMPORTED_MODULE_0__.sampleElement)('canvas');
  var ctx = canvas.getContext('2d');
  canvas.width = image.naturalWidth;
  canvas.height = image.naturalHeight;
  ctx.filter = "brightness(".concat(brightness, "%) contrast(").concat(contrast, "%) grayscale(").concat(grayscale, "%) invert(").concat(invert, "%)\n                hue-rotate(").concat(hueRotate, "deg) saturate(").concat(saturate, "%) sepia(").concat(sepia, "%) opacity(").concat(opacity, "%) blur(").concat(blur, "px)");
  ctx.translate(canvas.width / 2, canvas.height / 2);
  if (rotate !== 0) ctx.rotate(rotate * Math.PI / 180);
  if (lineBorder === 'dashed') ctx.setLineDash([20, 10]);
  if (lineBorder === 'dotted') ctx.setLineDash([5]);
  ctx.scale(flipHorizontal, flipVertical);
  ctx.drawImage(image, -canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
  if (temperature < 0) {
    ctx.fillStyle = 'rgba(0, 0, 255,' + Math.abs(temperature) / 400 + ')';
  } else {
    ctx.fillStyle = 'rgba(255, 68, 0,' + Math.abs(temperature) / 400 + ')';
  }
  ctx.fillRect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
  ctx.lineWidth = border;
  ctx.strokeStyle = color;
  ctx.strokeRect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
  var link = (0,_sampleElement__WEBPACK_IMPORTED_MODULE_0__.sampleElement)('a');
  link.download = '../img/filters-image.webp';
  link.href = canvas.toDataURL();
  link.click();
};
function appEdit(select) {
  var appEditMain = createEditMainContainer();
  var appEditHeader = createEditHeader();
  var appEditSidebarLeft = createEditSidebarLeft();
  var appEditSidebarRight = createEditSidebarRight();
  var appEditContent = createEditContent();
  var edit = (0,_sampleElement__WEBPACK_IMPORTED_MODULE_0__.sampleElement)('div', ['edit']);
  edit.append(appEditHeader.header, appEditMain.main);
  appEditMain.main.append(appEditSidebarLeft.sidebar, appEditContent.content, appEditSidebarRight.sidebar);
  select.append(edit);
  appEditHeader.input.addEventListener('change', loadingPreview);
  appEditSidebarLeft.sidebar.addEventListener('click', focusItemFilter);
  appEditSidebarRight.sidebar.addEventListener('click', focusItemStyles);
}

/***/ }),

/***/ "./js/root.js":
/*!********************!*\
  !*** ./js/root.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createRoot": () => (/* binding */ createRoot)
/* harmony export */ });
/* harmony import */ var _sampleElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sampleElement */ "./js/sampleElement.js");

function createRoot(root) {
  var container = (0,_sampleElement__WEBPACK_IMPORTED_MODULE_0__.sampleElement)('div', ['container']);
  root.append(container);
  return root;
}

/***/ }),

/***/ "./js/sampleElement.js":
/*!*****************************!*\
  !*** ./js/sampleElement.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sampleElement": () => (/* binding */ sampleElement)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function sampleElement(tag) {
  var classis = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var text = arguments.length > 2 ? arguments[2] : undefined;
  var element = document.createElement(tag);
  if (classis.length) {
    var _element$classList;
    (_element$classList = element.classList).add.apply(_element$classList, _toConsumableArray(classis));
  }
  if (text) {
    element.textContent = text;
  }
  return element;
}

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/favicon.ico */ "./assets/favicon.ico"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <link rel=\"stylesheet\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\">\r\n  <" + "script src=\"https://kit.fontawesome.com/997cd69c9a.js\" crossorigin=\"anonymous\"><" + "/script>\r\n  <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>\r\n  <title>Document</title>\r\n</head>\r\n\r\n<body>\r\n</body>\r\n\r\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "../node_modules/html-loader/dist/runtime/getUrl.js":
/*!**********************************************************!*\
  !*** ../node_modules/html-loader/dist/runtime/getUrl.js ***!
  \**********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/favicon.ico":
/*!****************************!*\
  !*** ./assets/favicon.ico ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "10bc5c93dd6e63a1dc3c.ico";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ "./scss/main.scss");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.html */ "./index.html");
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.js */ "./js/app.js");



})();

/******/ })()
;
//# sourceMappingURL=main.js.map