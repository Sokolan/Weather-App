/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/footer.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/footer.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.footer {
  font-family: roboto, sans-serif;
  --gap-items: 25px;
  grid-column: 1 / span 2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--gap-items);
  background-color: #191923;
}

.footer > p {
  border-left: 1px solid rgb(180, 180, 180);
  padding-left: var(--gap-items);
  padding: 5px 0px 5px var(--gap-items);
  margin: 0;
}


.git-img {
  padding: 5px 0px 4px 0px;
  height: 20px;
  filter: invert(1);
}`, "",{"version":3,"sources":["webpack://./src/style/footer.css"],"names":[],"mappings":"AAAA;EACE,+BAA+B;EAC/B,iBAAiB;EACjB,uBAAuB;EACvB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,qBAAqB;EACrB,yBAAyB;AAC3B;;AAEA;EACE,yCAAyC;EACzC,8BAA8B;EAC9B,qCAAqC;EACrC,SAAS;AACX;;;AAGA;EACE,wBAAwB;EACxB,YAAY;EACZ,iBAAiB;AACnB","sourcesContent":[".footer {\n  font-family: roboto, sans-serif;\n  --gap-items: 25px;\n  grid-column: 1 / span 2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--gap-items);\n  background-color: #191923;\n}\n\n.footer > p {\n  border-left: 1px solid rgb(180, 180, 180);\n  padding-left: var(--gap-items);\n  padding: 5px 0px 5px var(--gap-items);\n  margin: 0;\n}\n\n\n.git-img {\n  padding: 5px 0px 4px 0px;\n  height: 20px;\n  filter: invert(1);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/header.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/header.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.header {
  display: flex;
  justify-content: space-between;
  padding: 16px;
  background:  #191923e9;
  gap: 40px;
  color: rgb(255, 255, 255);
  text-shadow: 2px 2px 4px rgba(255, 157, 0, 0.486);
  box-shadow: 0px 2px rgba(0, 0, 0, 0.514);
}

.logo {
  font-size: 28px;
  font-family: roboto;
  font-weight: 700;
}

.header img {
  max-height: 24px;
}

.location-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.search-location-container {
  display: flex;
  gap: 4px;
}

button {
  background-color: transparent;
  border: none;
}

.search-bar {
  border-radius: 8px;
  padding: 4px 8px;
  border: 1px solid black;
  width: 70%;
  transition: all 0.5s;
}

.search-bar.invalid-location {
  border: 1px solid red;
  color: red;
}

.search-location-container > input:focus {
  outline: 0px;
}
`, "",{"version":3,"sources":["webpack://./src/style/header.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,8BAA8B;EAC9B,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,yBAAyB;EACzB,iDAAiD;EACjD,wCAAwC;AAC1C;;AAEA;EACE,eAAe;EACf,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,6BAA6B;EAC7B,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,uBAAuB;EACvB,UAAU;EACV,oBAAoB;AACtB;;AAEA;EACE,qBAAqB;EACrB,UAAU;AACZ;;AAEA;EACE,YAAY;AACd","sourcesContent":[".header {\n  display: flex;\n  justify-content: space-between;\n  padding: 16px;\n  background:  #191923e9;\n  gap: 40px;\n  color: rgb(255, 255, 255);\n  text-shadow: 2px 2px 4px rgba(255, 157, 0, 0.486);\n  box-shadow: 0px 2px rgba(0, 0, 0, 0.514);\n}\n\n.logo {\n  font-size: 28px;\n  font-family: roboto;\n  font-weight: 700;\n}\n\n.header img {\n  max-height: 24px;\n}\n\n.location-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n\n.search-location-container {\n  display: flex;\n  gap: 4px;\n}\n\nbutton {\n  background-color: transparent;\n  border: none;\n}\n\n.search-bar {\n  border-radius: 8px;\n  padding: 4px 8px;\n  border: 1px solid black;\n  width: 70%;\n  transition: all 0.5s;\n}\n\n.search-bar.invalid-location {\n  border: 1px solid red;\n  color: red;\n}\n\n.search-location-container > input:focus {\n  outline: 0px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/mainDisplay.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/mainDisplay.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.main-display {
  display: grid;
  justify-items: center;
  align-items: center;

}

.display-container {
  padding: 16px;
  height: 50vh;
  width: 80vw;
  background: linear-gradient(210deg, #0034503c, rgb(255, 255, 255));
  border-radius: 16px;
  box-shadow: 4px 4px rgba(0, 0, 0, 0.44);
  display: grid;
  grid-template-columns: minmax(200px, 1fr) auto;
  grid-template-rows: minmax(200px, 1fr) 4fr;
}

.forecast-container {
  grid-column: span 2;
  height: 100%;
  width: 100%;
  overflow: scroll;
  display: grid;
  grid-template-columns: repeat(7, auto);
  justify-items: center;
  align-items: center;
  gap: 24px;
}

.current-location-container {
  font-size: 32px;
  overflow: scroll;
  margin: 16px;
  letter-spacing: 1.25px;
  font-weight: 700;
  font-family: "Roboto";
  color: #fbfef9;
}

.change-units {
  padding: 8px 16px;
  margin: 16px;
  width: 96px;
  border-radius: 4px;
  text-align: center;
  font-weight: 700;
  border: 1px solid #00000058;
  background-color: #fbfef9c3;
  color: #191923ba;
  border-radius: 8px;
  justify-self: right;
  align-self: baseline;
}

.day-forecast-container {
  height: 72%;
  width: 64px;
  display: grid;
  grid-template-rows: 16px 40px 40px 16px;
  font-size: 12px;
  font-weight: 400;
  font-family: arial, sans-serif;
  text-align: center;
  background: linear-gradient(160deg, #00a6ff53, rgba(212, 255, 254, 0.588));
  box-shadow: 0 0 4px rgba(255, 255, 255, 0.318);
  border-radius: 8px;
  padding: 8px 8px;
  height: 200px;
  gap: 16px;
}

.weather-condition-icon {
  height: 48px;
  aspect-ratio: 1/1;
  border: 1px solid rgba(14, 0, 118, 0.347);
  border-radius: 8px;
}

/* Hide scrollbar for Chrome, Safari and Opera */
div::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
div {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
`, "",{"version":3,"sources":["webpack://./src/style/mainDisplay.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,qBAAqB;EACrB,mBAAmB;;AAErB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,WAAW;EACX,kEAAkE;EAClE,mBAAmB;EACnB,uCAAuC;EACvC,aAAa;EACb,8CAA8C;EAC9C,0CAA0C;AAC5C;;AAEA;EACE,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,gBAAgB;EAChB,aAAa;EACb,sCAAsC;EACtC,qBAAqB;EACrB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,YAAY;EACZ,sBAAsB;EACtB,gBAAgB;EAChB,qBAAqB;EACrB,cAAc;AAChB;;AAEA;EACE,iBAAiB;EACjB,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,kBAAkB;EAClB,gBAAgB;EAChB,2BAA2B;EAC3B,2BAA2B;EAC3B,gBAAgB;EAChB,kBAAkB;EAClB,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;EACE,WAAW;EACX,WAAW;EACX,aAAa;EACb,uCAAuC;EACvC,eAAe;EACf,gBAAgB;EAChB,8BAA8B;EAC9B,kBAAkB;EAClB,0EAA0E;EAC1E,8CAA8C;EAC9C,kBAAkB;EAClB,gBAAgB;EAChB,aAAa;EACb,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,yCAAyC;EACzC,kBAAkB;AACpB;;AAEA,gDAAgD;AAChD;EACE,aAAa;AACf;;AAEA,4CAA4C;AAC5C;EACE,wBAAwB,EAAE,gBAAgB;EAC1C,qBAAqB,EAAE,YAAY;AACrC","sourcesContent":[".main-display {\n  display: grid;\n  justify-items: center;\n  align-items: center;\n\n}\n\n.display-container {\n  padding: 16px;\n  height: 50vh;\n  width: 80vw;\n  background: linear-gradient(210deg, #0034503c, rgb(255, 255, 255));\n  border-radius: 16px;\n  box-shadow: 4px 4px rgba(0, 0, 0, 0.44);\n  display: grid;\n  grid-template-columns: minmax(200px, 1fr) auto;\n  grid-template-rows: minmax(200px, 1fr) 4fr;\n}\n\n.forecast-container {\n  grid-column: span 2;\n  height: 100%;\n  width: 100%;\n  overflow: scroll;\n  display: grid;\n  grid-template-columns: repeat(7, auto);\n  justify-items: center;\n  align-items: center;\n  gap: 24px;\n}\n\n.current-location-container {\n  font-size: 32px;\n  overflow: scroll;\n  margin: 16px;\n  letter-spacing: 1.25px;\n  font-weight: 700;\n  font-family: \"Roboto\";\n  color: #fbfef9;\n}\n\n.change-units {\n  padding: 8px 16px;\n  margin: 16px;\n  width: 96px;\n  border-radius: 4px;\n  text-align: center;\n  font-weight: 700;\n  border: 1px solid #00000058;\n  background-color: #fbfef9c3;\n  color: #191923ba;\n  border-radius: 8px;\n  justify-self: right;\n  align-self: baseline;\n}\n\n.day-forecast-container {\n  height: 72%;\n  width: 64px;\n  display: grid;\n  grid-template-rows: 16px 40px 40px 16px;\n  font-size: 12px;\n  font-weight: 400;\n  font-family: arial, sans-serif;\n  text-align: center;\n  background: linear-gradient(160deg, #00a6ff53, rgba(212, 255, 254, 0.588));\n  box-shadow: 0 0 4px rgba(255, 255, 255, 0.318);\n  border-radius: 8px;\n  padding: 8px 8px;\n  height: 200px;\n  gap: 16px;\n}\n\n.weather-condition-icon {\n  height: 48px;\n  aspect-ratio: 1/1;\n  border: 1px solid rgba(14, 0, 118, 0.347);\n  border-radius: 8px;\n}\n\n/* Hide scrollbar for Chrome, Safari and Opera */\ndiv::-webkit-scrollbar {\n  display: none;\n}\n\n/* Hide scrollbar for IE, Edge and Firefox */\ndiv {\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/style.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/clouds-background.jpg */ "./src/img/clouds-background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html {
  padding: 0;
  margin: 0;
  height: 100%;
}

body {
  margin: 0;
  height: 100%;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: cover;
  background-repeat: no-repeat;
}

#content {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}`, "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;EACT,YAAY;AACd;;AAEA;EACE,SAAS;EACT,YAAY;EACZ,yDAAqD;EACrD,sBAAsB;EACtB,4BAA4B;AAC9B;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,8BAA8B;AAChC","sourcesContent":["html {\n  padding: 0;\n  margin: 0;\n  height: 100%;\n}\n\nbody {\n  margin: 0;\n  height: 100%;\n  background-image: url(\"../img/clouds-background.jpg\");\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n#content {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style/footer.css":
/*!******************************!*\
  !*** ./src/style/footer.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./footer.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/footer.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style/header.css":
/*!******************************!*\
  !*** ./src/style/header.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./header.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/header.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style/mainDisplay.css":
/*!***********************************!*\
  !*** ./src/style/mainDisplay.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_mainDisplay_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./mainDisplay.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/mainDisplay.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_mainDisplay_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_mainDisplay_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_mainDisplay_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_mainDisplay_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/displayHandler.js":
/*!*******************************!*\
  !*** ./src/displayHandler.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createDisplay)
/* harmony export */ });
/* harmony import */ var _img_github_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/github.png */ "./src/img/github.png");
/* harmony import */ var _img_map_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/map.png */ "./src/img/map.png");
/* harmony import */ var _img_search_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/search.png */ "./src/img/search.png");
/* harmony import */ var _style_footer_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style/footer.css */ "./src/style/footer.css");
/* harmony import */ var _style_header_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style/header.css */ "./src/style/header.css");
/* harmony import */ var _style_mainDisplay_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style/mainDisplay.css */ "./src/style/mainDisplay.css");







// Defines
const forecastDays = 7;
let mWeather;

const createElement = (element, className = "", attributes = []) => {
  const newElement = document.createElement(element);
  if (className !== "") {
    newElement.classList.add(className);
  }
  attributes.forEach((attribute) => {
    newElement.setAttribute(attribute[0], attribute[1]);
  });
  return newElement;
};

const createImgElement = (imgSource, className) => {
  const img = new Image();
  img.src = imgSource;
  img.classList.add(className);
  return img;
};

const updateWeatherAndLocation = () => {
  const updateLocation = () => {
    const locationContainer = document.querySelector(
      ".current-location-container"
    );
    const location = mWeather.getLocation();
    locationContainer.textContent = `${location.city}, ${location.country}`;
  };
  const updateWeather = () => {
    const forecast = mWeather.getForecast();
    const daysForcast = document.querySelectorAll(".day-forecast-container");
    daysForcast.forEach((day) => {
      const date = day.querySelector(".date");
      if (day.id === "0") {
        date.textContent = "Today";
      } else if (day.id === "1") {
        date.textContent = "Tomorrow";
      } else {
        date.textContent = forecast[day.id].date;
      }
      day.querySelector(".min-max-tmp").textContent = `${
        forecast[day.id].maxTemp
      }° - ${forecast[day.id].minTemp}°`;
      day.querySelector(".weather-condition").textContent = `${
        forecast[day.id].condition
      }`;
      day
        .querySelector(".weather-img-container")
        .replaceChildren(
          createImgElement(
            forecast[day.id].conditionIcon,
            "weather-condition-icon"
          )
        );
    });
  };
  updateLocation();
  updateWeather();
};

// Header contains the app name, change location to local and search for location
const createHeader = () => {
  const createLogo = () => {
    const logo = createElement("div", "logo");
    logo.textContent = "Weather";

    return logo;
  };
  const createLocationContainer = () => {
    const createUserLocationButton = () => {
      const userLocation = createElement("button");
      userLocation.appendChild(
        createImgElement(_img_map_png__WEBPACK_IMPORTED_MODULE_1__, "current-location")
      );
      userLocation.addEventListener("click", async () => {
        await mWeather.changeLocationToLocal();
        updateWeatherAndLocation();
        if (!mWeather.requestSucceeded()) {
          alert("Check location permissions");
        }
      });

      return userLocation;
    };

    const createSearchLocation = () => {
      const searchLocation = async () => {
          const input = document.querySelector(".search-bar");
          await mWeather.changeLocation(input.value);
          if (!mWeather.requestSucceeded()) {
            document.querySelector(".search-bar").classList.add("invalid-location");
          }
          updateWeatherAndLocation(input.value);
      }
      const createSearchBar = () => {
        const searchBar = createElement("input", "search-bar", [
          ["type", "text"],
          ["placeholder", "enter location"]
        ]);

        searchBar.addEventListener("click", (e) => {
          if (e.target.classList.remove('invalid-location'));
        });
        searchBar.addEventListener("keydown", (e) => {
          if (e.code === "Enter") {
            searchLocation();
          }
          e.target.classList.remove("invalid-location");
        });

        return searchBar;
      };
      const createSubmitButton = () => {
        const submitButton = createElement("button", "submit-location-search");
        submitButton.appendChild(createImgElement(_img_search_png__WEBPACK_IMPORTED_MODULE_2__, "search-button"));
        submitButton.addEventListener("click", searchLocation);

        return submitButton;
      };
      const searchLocationContainer = createElement(
        "div",
        "search-location-container"
      );
      searchLocationContainer.appendChild(createSearchBar());
      searchLocationContainer.appendChild(createSubmitButton());

      return searchLocationContainer;
    };
    const locationContainer = createElement("div", "location-container");

    locationContainer.appendChild(createUserLocationButton());
    locationContainer.appendChild(createSearchLocation());
    return locationContainer;
  };
  const header = createElement("div", "header");

  header.appendChild(createLogo());
  header.appendChild(createLocationContainer());
  return header;
};

const createMainDisplay = () => {
  const createDisplayContainer = () => {
    const createCurrentLocationContainer = () => {
      const currentLocationContainer = createElement(
        "div",
        "current-location-container"
      );
      currentLocationContainer.innerText = "LOCATION TEST";

      return currentLocationContainer;
    };

    const createUnitsChangerButton = () => {
      const unitsButton = createElement("button", "change-units");
      unitsButton.textContent = "Celcius"

      unitsButton.addEventListener("click", (e) => {
        if (e.target.textContent === "Celcius") {
          e.target.textContent = "Fahrenheit"
        }
        else {
          e.target.textContent = "Celcius";
        }
        mWeather.changeUnits();
        updateWeatherAndLocation();
      })
      return unitsButton;
    }

    const createForecastContainer = () => {
      const forecastContainer = createElement("div", "forecast-container");
      for (let i = 0; i < forecastDays; i += 1) {
        const dayForecastContainer = createElement(
          "div",
          "day-forecast-container",
          [["id", `${i}`]]
        );
        dayForecastContainer.appendChild(createElement("p", "min-max-tmp"));
        dayForecastContainer.appendChild(
          createElement("p", "weather-condition")
        );
        dayForecastContainer.appendChild(
          createElement("div", "weather-img-container")
        );
        dayForecastContainer.appendChild(createElement("p", "date"));

        forecastContainer.appendChild(dayForecastContainer);
      }

      return forecastContainer;
    };
    const displayContainer = createElement("div", "display-container");

    displayContainer.appendChild(createCurrentLocationContainer());
    displayContainer.appendChild(createUnitsChangerButton());
    displayContainer.appendChild(createForecastContainer());
    return displayContainer;
  };
  const mainDisplay = createElement("div", "main-display");

  mainDisplay.appendChild(createDisplayContainer());
  return mainDisplay;
};

// Footer of display screen
const createFooter = () => {
  // Create git link with git icon
  const createGitLinkImg = () => {
    const gitLink = createElement("a", "git-link", [
      ["href", "https://github.com/Sokolan/ToDo-List"],
      ["target", "_blank"],
    ]);
    const gitIcon = createImgElement(_img_github_png__WEBPACK_IMPORTED_MODULE_0__, "git-img");
    gitIcon.classList.add("git-img");
    gitLink.appendChild(gitIcon);
    return gitLink;
  };

  const createCreatorName = (creatorName) => {
    const creator = createElement("p", "creator");
    creator.textContent = creatorName;
    return creator;
  };

  const footerContainer = createElement("div", "footer");

  footerContainer.appendChild(createGitLinkImg());
  footerContainer.appendChild(createCreatorName("Sokolan"));
  return footerContainer;
};

async function createDisplay(weather) {
  const body = document.querySelector("body");
  const container = createElement("div");
  container.id = "content";
  body.appendChild(container);

  container.appendChild(createHeader());
  container.appendChild(createMainDisplay());
  container.appendChild(createFooter());
  mWeather = weather;
  updateWeatherAndLocation();
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _displayHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayHandler */ "./src/displayHandler.js");
/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/style.css */ "./src/style/style.css");
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weather */ "./src/weather.js");




const mWeather = await (0,_weather__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_displayHandler__WEBPACK_IMPORTED_MODULE_0__["default"])(mWeather);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Weather = async () => {
  let mLocation;
  let mUserLocation;
  let mWeather;
  let mRequestSuccessful;
  let celcius = true;

  const updateWeatherAndLocation = async (location) => {
    try {
      const encodedLocation = encodeURIComponent(location);
      const weatherAt = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=1b03c9929d6544bfa68193127232906&q=${encodedLocation}&days=7&is_day=1`
      );
      if (!weatherAt.ok) {
        throw new Error("API error");
      }
      mWeather = await weatherAt.json();
      mLocation = mWeather.location;
      mRequestSuccessful = true;
    } catch (error) {
      console.log(error);
      mRequestSuccessful = false;
    }
  };

  // Changes the current location with an input
  const changeLocation = async (location) => {
    // mLocation = location;
    await updateWeatherAndLocation(location);
  };

  // wraps geolocation.getCurrentPosition in a promise
  const getCurrentPosition = () =>
    new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });

  const changeLocationToLocal = async () => {
    try {
      const position = await getCurrentPosition();
      const { latitude } = position.coords;
      const { longitude } = position.coords;
      mUserLocation = `${latitude},${longitude}`;
      await updateWeatherAndLocation(mUserLocation);
    } catch (error) {
      console.log(error);
      const result = await navigator.permissions.query({ name: "geolocation" });
      if (result.state === "denied") {
        console.log(result.state);
        mRequestSuccessful = false;
      }
    }
  };

  const initiateWeather = async () => {
    try {
      await updateWeatherAndLocation("Haifa");
    } catch (error) {
      console.log(error);
    }
  };

  const getLocation = () => ({
    country: mLocation.country,
    city: mLocation.name,
  });

  const getForecast = () => {
    const arr = [];
    mWeather.forecast.forecastday.forEach((day) => {
      const maxTempValue = celcius
        ? Number.parseInt(day.day.maxtemp_c, 10)
        : Number.parseInt(day.day.maxtemp_f, 10);
      const minTempValue = celcius
        ? Number.parseInt(day.day.mintemp_c, 10)
        : Number.parseInt(day.day.mintemp_f, 10);
      arr.push({
        date: day.date.substring(5),
        maxTemp: maxTempValue,
        minTemp: minTempValue,
        condition: day.day.condition.text,
        conditionIcon: `https:${day.day.condition.icon}`,
      });
    });
    return arr;
  };

  const requestSucceeded = () => mRequestSuccessful;

  const changeUnits = () => {
    celcius = !celcius;
  };

  // 1b03c9929d6544bfa68193127232906
  await initiateWeather();
  return {
    getForecast,
    getLocation,
    changeLocation,
    changeLocationToLocal,
    requestSucceeded,
    changeUnits,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Weather);


/***/ }),

/***/ "./src/img/clouds-background.jpg":
/*!***************************************!*\
  !*** ./src/img/clouds-background.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2e02e4d4e4b6d5f3d2e6.jpg";

/***/ }),

/***/ "./src/img/github.png":
/*!****************************!*\
  !*** ./src/img/github.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1c95b85d86a7c25b6f3c.png";

/***/ }),

/***/ "./src/img/map.png":
/*!*************************!*\
  !*** ./src/img/map.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2893577657963cf3418f.png";

/***/ }),

/***/ "./src/img/search.png":
/*!****************************!*\
  !*** ./src/img/search.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "360f477d6e882651b040.png";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/******/ 			"index": 0
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1dBQ0E7V0FDQTtXQUNBLElBQUk7V0FDSjtXQUNBO1dBQ0EsSUFBSTtXQUNKO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLENBQUM7V0FDRDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0Esc0dBQXNHO1dBQ3RHO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQSxFQUFFO1dBQ0Y7V0FDQTs7Ozs7V0NoRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS9mb290ZXIuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlL2hlYWRlci5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUvbWFpbkRpc3BsYXkuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUvZm9vdGVyLmNzcz9iNWRlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlL2hlYWRlci5jc3M/OWEzMyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS9tYWluRGlzcGxheS5jc3M/ZjIyMyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS9zdHlsZS5jc3M/YzlmMCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Rpc3BsYXlIYW5kbGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3dlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2FzeW5jIG1vZHVsZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmZvb3RlciB7XG4gIGZvbnQtZmFtaWx5OiByb2JvdG8sIHNhbnMtc2VyaWY7XG4gIC0tZ2FwLWl0ZW1zOiAyNXB4O1xuICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogdmFyKC0tZ2FwLWl0ZW1zKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5MTkyMztcbn1cblxuLmZvb3RlciA+IHAge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYigxODAsIDE4MCwgMTgwKTtcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1nYXAtaXRlbXMpO1xuICBwYWRkaW5nOiA1cHggMHB4IDVweCB2YXIoLS1nYXAtaXRlbXMpO1xuICBtYXJnaW46IDA7XG59XG5cblxuLmdpdC1pbWcge1xuICBwYWRkaW5nOiA1cHggMHB4IDRweCAwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgZmlsdGVyOiBpbnZlcnQoMSk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvZm9vdGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLCtCQUErQjtFQUMvQixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMsOEJBQThCO0VBQzlCLHFDQUFxQztFQUNyQyxTQUFTO0FBQ1g7OztBQUdBO0VBQ0Usd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmZvb3RlciB7XFxuICBmb250LWZhbWlseTogcm9ib3RvLCBzYW5zLXNlcmlmO1xcbiAgLS1nYXAtaXRlbXM6IDI1cHg7XFxuICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IHZhcigtLWdhcC1pdGVtcyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkxOTIzO1xcbn1cXG5cXG4uZm9vdGVyID4gcCB7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYigxODAsIDE4MCwgMTgwKTtcXG4gIHBhZGRpbmctbGVmdDogdmFyKC0tZ2FwLWl0ZW1zKTtcXG4gIHBhZGRpbmc6IDVweCAwcHggNXB4IHZhcigtLWdhcC1pdGVtcyk7XFxuICBtYXJnaW46IDA7XFxufVxcblxcblxcbi5naXQtaW1nIHtcXG4gIHBhZGRpbmc6IDVweCAwcHggNHB4IDBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGZpbHRlcjogaW52ZXJ0KDEpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJhY2tncm91bmQ6ICAjMTkxOTIzZTk7XG4gIGdhcDogNDBweDtcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4IHJnYmEoMjU1LCAxNTcsIDAsIDAuNDg2KTtcbiAgYm94LXNoYWRvdzogMHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNTE0KTtcbn1cblxuLmxvZ28ge1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5oZWFkZXIgaW1nIHtcbiAgbWF4LWhlaWdodDogMjRweDtcbn1cblxuLmxvY2F0aW9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDhweDtcbn1cblxuLnNlYXJjaC1sb2NhdGlvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDRweDtcbn1cblxuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLnNlYXJjaC1iYXIge1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICB3aWR0aDogNzAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbn1cblxuLnNlYXJjaC1iYXIuaW52YWxpZC1sb2NhdGlvbiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnNlYXJjaC1sb2NhdGlvbi1jb250YWluZXIgPiBpbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IDBweDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL2hlYWRlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULHlCQUF5QjtFQUN6QixpREFBaUQ7RUFDakQsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsUUFBUTtBQUNWOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBiYWNrZ3JvdW5kOiAgIzE5MTkyM2U5O1xcbiAgZ2FwOiA0MHB4O1xcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDI1NSwgMTU3LCAwLCAwLjQ4Nik7XFxuICBib3gtc2hhZG93OiAwcHggMnB4IHJnYmEoMCwgMCwgMCwgMC41MTQpO1xcbn1cXG5cXG4ubG9nbyB7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBmb250LWZhbWlseTogcm9ib3RvO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmhlYWRlciBpbWcge1xcbiAgbWF4LWhlaWdodDogMjRweDtcXG59XFxuXFxuLmxvY2F0aW9uLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA4cHg7XFxufVxcblxcbi5zZWFyY2gtbG9jYXRpb24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDRweDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uc2VhcmNoLWJhciB7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBwYWRkaW5nOiA0cHggOHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICB3aWR0aDogNzAlO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxufVxcblxcbi5zZWFyY2gtYmFyLmludmFsaWQtbG9jYXRpb24ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLnNlYXJjaC1sb2NhdGlvbi1jb250YWluZXIgPiBpbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiAwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLm1haW4tZGlzcGxheSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxufVxuXG4uZGlzcGxheS1jb250YWluZXIge1xuICBwYWRkaW5nOiAxNnB4O1xuICBoZWlnaHQ6IDUwdmg7XG4gIHdpZHRoOiA4MHZ3O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjEwZGVnLCAjMDAzNDUwM2MsIHJnYigyNTUsIDI1NSwgMjU1KSk7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGJveC1zaGFkb3c6IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjQ0KTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMjAwcHgsIDFmcikgYXV0bztcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW5tYXgoMjAwcHgsIDFmcikgNGZyO1xufVxuXG4uZm9yZWNhc3QtY29udGFpbmVyIHtcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgYXV0byk7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAyNHB4O1xufVxuXG4uY3VycmVudC1sb2NhdGlvbi1jb250YWluZXIge1xuICBmb250LXNpemU6IDMycHg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIG1hcmdpbjogMTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuMjVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gIGNvbG9yOiAjZmJmZWY5O1xufVxuXG4uY2hhbmdlLXVuaXRzIHtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIG1hcmdpbjogMTZweDtcbiAgd2lkdGg6IDk2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNzAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwNTg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYmZlZjljMztcbiAgY29sb3I6ICMxOTE5MjNiYTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xuICBhbGlnbi1zZWxmOiBiYXNlbGluZTtcbn1cblxuLmRheS1mb3JlY2FzdC1jb250YWluZXIge1xuICBoZWlnaHQ6IDcyJTtcbiAgd2lkdGg6IDY0cHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTZweCA0MHB4IDQwcHggMTZweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LWZhbWlseTogYXJpYWwsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE2MGRlZywgIzAwYTZmZjUzLCByZ2JhKDIxMiwgMjU1LCAyNTQsIDAuNTg4KSk7XG4gIGJveC1zaGFkb3c6IDAgMCA0cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMxOCk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogOHB4IDhweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgZ2FwOiAxNnB4O1xufVxuXG4ud2VhdGhlci1jb25kaXRpb24taWNvbiB7XG4gIGhlaWdodDogNDhweDtcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTQsIDAsIDExOCwgMC4zNDcpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi8qIEhpZGUgc2Nyb2xsYmFyIGZvciBDaHJvbWUsIFNhZmFyaSBhbmQgT3BlcmEgKi9cbmRpdjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBIaWRlIHNjcm9sbGJhciBmb3IgSUUsIEVkZ2UgYW5kIEZpcmVmb3ggKi9cbmRpdiB7XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgLyogSUUgYW5kIEVkZ2UgKi9cbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAvKiBGaXJlZm94ICovXG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9tYWluRGlzcGxheS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLG1CQUFtQjs7QUFFckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLFdBQVc7RUFDWCxrRUFBa0U7RUFDbEUsbUJBQW1CO0VBQ25CLHVDQUF1QztFQUN2QyxhQUFhO0VBQ2IsOENBQThDO0VBQzlDLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osV0FBVztFQUNYLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtFQUMzQiwyQkFBMkI7RUFDM0IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUNBQXVDO0VBQ3ZDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQiwwRUFBMEU7RUFDMUUsOENBQThDO0VBQzlDLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIseUNBQXlDO0VBQ3pDLGtCQUFrQjtBQUNwQjs7QUFFQSxnREFBZ0Q7QUFDaEQ7RUFDRSxhQUFhO0FBQ2Y7O0FBRUEsNENBQTRDO0FBQzVDO0VBQ0Usd0JBQXdCLEVBQUUsZ0JBQWdCO0VBQzFDLHFCQUFxQixFQUFFLFlBQVk7QUFDckNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm1haW4tZGlzcGxheSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG59XFxuXFxuLmRpc3BsYXktY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBoZWlnaHQ6IDUwdmg7XFxuICB3aWR0aDogODB2dztcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMTBkZWcsICMwMDM0NTAzYywgcmdiKDI1NSwgMjU1LCAyNTUpKTtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICBib3gtc2hhZG93OiA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC40NCk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMjAwcHgsIDFmcikgYXV0bztcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWlubWF4KDIwMHB4LCAxZnIpIDRmcjtcXG59XFxuXFxuLmZvcmVjYXN0LWNvbnRhaW5lciB7XFxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIGF1dG8pO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjRweDtcXG59XFxuXFxuLmN1cnJlbnQtbG9jYXRpb24tY29udGFpbmVyIHtcXG4gIGZvbnQtc2l6ZTogMzJweDtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxuICBtYXJnaW46IDE2cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMS4yNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIjtcXG4gIGNvbG9yOiAjZmJmZWY5O1xcbn1cXG5cXG4uY2hhbmdlLXVuaXRzIHtcXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xcbiAgbWFyZ2luOiAxNnB4O1xcbiAgd2lkdGg6IDk2cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDU4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZmVmOWMzO1xcbiAgY29sb3I6ICMxOTE5MjNiYTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGp1c3RpZnktc2VsZjogcmlnaHQ7XFxuICBhbGlnbi1zZWxmOiBiYXNlbGluZTtcXG59XFxuXFxuLmRheS1mb3JlY2FzdC1jb250YWluZXIge1xcbiAgaGVpZ2h0OiA3MiU7XFxuICB3aWR0aDogNjRweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDE2cHggNDBweCA0MHB4IDE2cHg7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1mYW1pbHk6IGFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE2MGRlZywgIzAwYTZmZjUzLCByZ2JhKDIxMiwgMjU1LCAyNTQsIDAuNTg4KSk7XFxuICBib3gtc2hhZG93OiAwIDAgNHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zMTgpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgcGFkZGluZzogOHB4IDhweDtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBnYXA6IDE2cHg7XFxufVxcblxcbi53ZWF0aGVyLWNvbmRpdGlvbi1pY29uIHtcXG4gIGhlaWdodDogNDhweDtcXG4gIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNCwgMCwgMTE4LCAwLjM0Nyk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi8qIEhpZGUgc2Nyb2xsYmFyIGZvciBDaHJvbWUsIFNhZmFyaSBhbmQgT3BlcmEgKi9cXG5kaXY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIEhpZGUgc2Nyb2xsYmFyIGZvciBJRSwgRWRnZSBhbmQgRmlyZWZveCAqL1xcbmRpdiB7XFxuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7IC8qIElFIGFuZCBFZGdlICovXFxuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7IC8qIEZpcmVmb3ggKi9cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWcvY2xvdWRzLWJhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBodG1sIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4jY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1QsWUFBWTtBQUNkOztBQUVBO0VBQ0UsU0FBUztFQUNULFlBQVk7RUFDWix5REFBcUQ7RUFDckQsc0JBQXNCO0VBQ3RCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtBQUNoQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9pbWcvY2xvdWRzLWJhY2tncm91bmQuanBnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb290ZXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb290ZXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlYWRlci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlYWRlci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbkRpc3BsYXkuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluRGlzcGxheS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBnaXRJbWcgZnJvbSBcIi4vaW1nL2dpdGh1Yi5wbmdcIjtcbmltcG9ydCBjdXJyZW50TG9jYXRpb25JbWcgZnJvbSBcIi4vaW1nL21hcC5wbmdcIjtcbmltcG9ydCBzZWFyY2hJbWcgZnJvbSBcIi4vaW1nL3NlYXJjaC5wbmdcIjtcbmltcG9ydCBcIi4vc3R5bGUvZm9vdGVyLmNzc1wiO1xuaW1wb3J0IFwiLi9zdHlsZS9oZWFkZXIuY3NzXCI7XG5pbXBvcnQgXCIuL3N0eWxlL21haW5EaXNwbGF5LmNzc1wiO1xuXG4vLyBEZWZpbmVzXG5jb25zdCBmb3JlY2FzdERheXMgPSA3O1xubGV0IG1XZWF0aGVyO1xuXG5jb25zdCBjcmVhdGVFbGVtZW50ID0gKGVsZW1lbnQsIGNsYXNzTmFtZSA9IFwiXCIsIGF0dHJpYnV0ZXMgPSBbXSkgPT4ge1xuICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcbiAgaWYgKGNsYXNzTmFtZSAhPT0gXCJcIikge1xuICAgIG5ld0VsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICB9XG4gIGF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cmlidXRlKSA9PiB7XG4gICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlWzBdLCBhdHRyaWJ1dGVbMV0pO1xuICB9KTtcbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59O1xuXG5jb25zdCBjcmVhdGVJbWdFbGVtZW50ID0gKGltZ1NvdXJjZSwgY2xhc3NOYW1lKSA9PiB7XG4gIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICBpbWcuc3JjID0gaW1nU291cmNlO1xuICBpbWcuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICByZXR1cm4gaW1nO1xufTtcblxuY29uc3QgdXBkYXRlV2VhdGhlckFuZExvY2F0aW9uID0gKCkgPT4ge1xuICBjb25zdCB1cGRhdGVMb2NhdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCBsb2NhdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIi5jdXJyZW50LWxvY2F0aW9uLWNvbnRhaW5lclwiXG4gICAgKTtcbiAgICBjb25zdCBsb2NhdGlvbiA9IG1XZWF0aGVyLmdldExvY2F0aW9uKCk7XG4gICAgbG9jYXRpb25Db250YWluZXIudGV4dENvbnRlbnQgPSBgJHtsb2NhdGlvbi5jaXR5fSwgJHtsb2NhdGlvbi5jb3VudHJ5fWA7XG4gIH07XG4gIGNvbnN0IHVwZGF0ZVdlYXRoZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9yZWNhc3QgPSBtV2VhdGhlci5nZXRGb3JlY2FzdCgpO1xuICAgIGNvbnN0IGRheXNGb3JjYXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kYXktZm9yZWNhc3QtY29udGFpbmVyXCIpO1xuICAgIGRheXNGb3JjYXN0LmZvckVhY2goKGRheSkgPT4ge1xuICAgICAgY29uc3QgZGF0ZSA9IGRheS5xdWVyeVNlbGVjdG9yKFwiLmRhdGVcIik7XG4gICAgICBpZiAoZGF5LmlkID09PSBcIjBcIikge1xuICAgICAgICBkYXRlLnRleHRDb250ZW50ID0gXCJUb2RheVwiO1xuICAgICAgfSBlbHNlIGlmIChkYXkuaWQgPT09IFwiMVwiKSB7XG4gICAgICAgIGRhdGUudGV4dENvbnRlbnQgPSBcIlRvbW9ycm93XCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkYXRlLnRleHRDb250ZW50ID0gZm9yZWNhc3RbZGF5LmlkXS5kYXRlO1xuICAgICAgfVxuICAgICAgZGF5LnF1ZXJ5U2VsZWN0b3IoXCIubWluLW1heC10bXBcIikudGV4dENvbnRlbnQgPSBgJHtcbiAgICAgICAgZm9yZWNhc3RbZGF5LmlkXS5tYXhUZW1wXG4gICAgICB9wrAgLSAke2ZvcmVjYXN0W2RheS5pZF0ubWluVGVtcH3CsGA7XG4gICAgICBkYXkucXVlcnlTZWxlY3RvcihcIi53ZWF0aGVyLWNvbmRpdGlvblwiKS50ZXh0Q29udGVudCA9IGAke1xuICAgICAgICBmb3JlY2FzdFtkYXkuaWRdLmNvbmRpdGlvblxuICAgICAgfWA7XG4gICAgICBkYXlcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIud2VhdGhlci1pbWctY29udGFpbmVyXCIpXG4gICAgICAgIC5yZXBsYWNlQ2hpbGRyZW4oXG4gICAgICAgICAgY3JlYXRlSW1nRWxlbWVudChcbiAgICAgICAgICAgIGZvcmVjYXN0W2RheS5pZF0uY29uZGl0aW9uSWNvbixcbiAgICAgICAgICAgIFwid2VhdGhlci1jb25kaXRpb24taWNvblwiXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pO1xuICB9O1xuICB1cGRhdGVMb2NhdGlvbigpO1xuICB1cGRhdGVXZWF0aGVyKCk7XG59O1xuXG4vLyBIZWFkZXIgY29udGFpbnMgdGhlIGFwcCBuYW1lLCBjaGFuZ2UgbG9jYXRpb24gdG8gbG9jYWwgYW5kIHNlYXJjaCBmb3IgbG9jYXRpb25cbmNvbnN0IGNyZWF0ZUhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgY3JlYXRlTG9nbyA9ICgpID0+IHtcbiAgICBjb25zdCBsb2dvID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImxvZ29cIik7XG4gICAgbG9nby50ZXh0Q29udGVudCA9IFwiV2VhdGhlclwiO1xuXG4gICAgcmV0dXJuIGxvZ287XG4gIH07XG4gIGNvbnN0IGNyZWF0ZUxvY2F0aW9uQ29udGFpbmVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGNyZWF0ZVVzZXJMb2NhdGlvbkJ1dHRvbiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHVzZXJMb2NhdGlvbiA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICB1c2VyTG9jYXRpb24uYXBwZW5kQ2hpbGQoXG4gICAgICAgIGNyZWF0ZUltZ0VsZW1lbnQoY3VycmVudExvY2F0aW9uSW1nLCBcImN1cnJlbnQtbG9jYXRpb25cIilcbiAgICAgICk7XG4gICAgICB1c2VyTG9jYXRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcbiAgICAgICAgYXdhaXQgbVdlYXRoZXIuY2hhbmdlTG9jYXRpb25Ub0xvY2FsKCk7XG4gICAgICAgIHVwZGF0ZVdlYXRoZXJBbmRMb2NhdGlvbigpO1xuICAgICAgICBpZiAoIW1XZWF0aGVyLnJlcXVlc3RTdWNjZWVkZWQoKSkge1xuICAgICAgICAgIGFsZXJ0KFwiQ2hlY2sgbG9jYXRpb24gcGVybWlzc2lvbnNcIik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gdXNlckxvY2F0aW9uO1xuICAgIH07XG5cbiAgICBjb25zdCBjcmVhdGVTZWFyY2hMb2NhdGlvbiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHNlYXJjaExvY2F0aW9uID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2gtYmFyXCIpO1xuICAgICAgICAgIGF3YWl0IG1XZWF0aGVyLmNoYW5nZUxvY2F0aW9uKGlucHV0LnZhbHVlKTtcbiAgICAgICAgICBpZiAoIW1XZWF0aGVyLnJlcXVlc3RTdWNjZWVkZWQoKSkge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2gtYmFyXCIpLmNsYXNzTGlzdC5hZGQoXCJpbnZhbGlkLWxvY2F0aW9uXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB1cGRhdGVXZWF0aGVyQW5kTG9jYXRpb24oaW5wdXQudmFsdWUpO1xuICAgICAgfVxuICAgICAgY29uc3QgY3JlYXRlU2VhcmNoQmFyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzZWFyY2hCYXIgPSBjcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgXCJzZWFyY2gtYmFyXCIsIFtcbiAgICAgICAgICBbXCJ0eXBlXCIsIFwidGV4dFwiXSxcbiAgICAgICAgICBbXCJwbGFjZWhvbGRlclwiLCBcImVudGVyIGxvY2F0aW9uXCJdXG4gICAgICAgIF0pO1xuXG4gICAgICAgIHNlYXJjaEJhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZC1sb2NhdGlvbicpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNlYXJjaEJhci5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgICAgICAgIGlmIChlLmNvZGUgPT09IFwiRW50ZXJcIikge1xuICAgICAgICAgICAgc2VhcmNoTG9jYXRpb24oKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcImludmFsaWQtbG9jYXRpb25cIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBzZWFyY2hCYXI7XG4gICAgICB9O1xuICAgICAgY29uc3QgY3JlYXRlU3VibWl0QnV0dG9uID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwic3VibWl0LWxvY2F0aW9uLXNlYXJjaFwiKTtcbiAgICAgICAgc3VibWl0QnV0dG9uLmFwcGVuZENoaWxkKGNyZWF0ZUltZ0VsZW1lbnQoc2VhcmNoSW1nLCBcInNlYXJjaC1idXR0b25cIikpO1xuICAgICAgICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNlYXJjaExvY2F0aW9uKTtcblxuICAgICAgICByZXR1cm4gc3VibWl0QnV0dG9uO1xuICAgICAgfTtcbiAgICAgIGNvbnN0IHNlYXJjaExvY2F0aW9uQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgXCJzZWFyY2gtbG9jYXRpb24tY29udGFpbmVyXCJcbiAgICAgICk7XG4gICAgICBzZWFyY2hMb2NhdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVTZWFyY2hCYXIoKSk7XG4gICAgICBzZWFyY2hMb2NhdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVTdWJtaXRCdXR0b24oKSk7XG5cbiAgICAgIHJldHVybiBzZWFyY2hMb2NhdGlvbkNvbnRhaW5lcjtcbiAgICB9O1xuICAgIGNvbnN0IGxvY2F0aW9uQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImxvY2F0aW9uLWNvbnRhaW5lclwiKTtcblxuICAgIGxvY2F0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVVzZXJMb2NhdGlvbkJ1dHRvbigpKTtcbiAgICBsb2NhdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVTZWFyY2hMb2NhdGlvbigpKTtcbiAgICByZXR1cm4gbG9jYXRpb25Db250YWluZXI7XG4gIH07XG4gIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJoZWFkZXJcIik7XG5cbiAgaGVhZGVyLmFwcGVuZENoaWxkKGNyZWF0ZUxvZ28oKSk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVMb2NhdGlvbkNvbnRhaW5lcigpKTtcbiAgcmV0dXJuIGhlYWRlcjtcbn07XG5cbmNvbnN0IGNyZWF0ZU1haW5EaXNwbGF5ID0gKCkgPT4ge1xuICBjb25zdCBjcmVhdGVEaXNwbGF5Q29udGFpbmVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGNyZWF0ZUN1cnJlbnRMb2NhdGlvbkNvbnRhaW5lciA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRMb2NhdGlvbkNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIFwiY3VycmVudC1sb2NhdGlvbi1jb250YWluZXJcIlxuICAgICAgKTtcbiAgICAgIGN1cnJlbnRMb2NhdGlvbkNvbnRhaW5lci5pbm5lclRleHQgPSBcIkxPQ0FUSU9OIFRFU1RcIjtcblxuICAgICAgcmV0dXJuIGN1cnJlbnRMb2NhdGlvbkNvbnRhaW5lcjtcbiAgICB9O1xuXG4gICAgY29uc3QgY3JlYXRlVW5pdHNDaGFuZ2VyQnV0dG9uID0gKCkgPT4ge1xuICAgICAgY29uc3QgdW5pdHNCdXR0b24gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwiY2hhbmdlLXVuaXRzXCIpO1xuICAgICAgdW5pdHNCdXR0b24udGV4dENvbnRlbnQgPSBcIkNlbGNpdXNcIlxuXG4gICAgICB1bml0c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LnRleHRDb250ZW50ID09PSBcIkNlbGNpdXNcIikge1xuICAgICAgICAgIGUudGFyZ2V0LnRleHRDb250ZW50ID0gXCJGYWhyZW5oZWl0XCJcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBlLnRhcmdldC50ZXh0Q29udGVudCA9IFwiQ2VsY2l1c1wiO1xuICAgICAgICB9XG4gICAgICAgIG1XZWF0aGVyLmNoYW5nZVVuaXRzKCk7XG4gICAgICAgIHVwZGF0ZVdlYXRoZXJBbmRMb2NhdGlvbigpO1xuICAgICAgfSlcbiAgICAgIHJldHVybiB1bml0c0J1dHRvbjtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVGb3JlY2FzdENvbnRhaW5lciA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGZvcmVjYXN0Q29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZvcmVjYXN0LWNvbnRhaW5lclwiKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm9yZWNhc3REYXlzOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3QgZGF5Rm9yZWNhc3RDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgXCJkYXktZm9yZWNhc3QtY29udGFpbmVyXCIsXG4gICAgICAgICAgW1tcImlkXCIsIGAke2l9YF1dXG4gICAgICAgICk7XG4gICAgICAgIGRheUZvcmVjYXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwibWluLW1heC10bXBcIikpO1xuICAgICAgICBkYXlGb3JlY2FzdENvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICAgICAgICBjcmVhdGVFbGVtZW50KFwicFwiLCBcIndlYXRoZXItY29uZGl0aW9uXCIpXG4gICAgICAgICk7XG4gICAgICAgIGRheUZvcmVjYXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJ3ZWF0aGVyLWltZy1jb250YWluZXJcIilcbiAgICAgICAgKTtcbiAgICAgICAgZGF5Rm9yZWNhc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudChcInBcIiwgXCJkYXRlXCIpKTtcblxuICAgICAgICBmb3JlY2FzdENvbnRhaW5lci5hcHBlbmRDaGlsZChkYXlGb3JlY2FzdENvbnRhaW5lcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmb3JlY2FzdENvbnRhaW5lcjtcbiAgICB9O1xuICAgIGNvbnN0IGRpc3BsYXlDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZGlzcGxheS1jb250YWluZXJcIik7XG5cbiAgICBkaXNwbGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUN1cnJlbnRMb2NhdGlvbkNvbnRhaW5lcigpKTtcbiAgICBkaXNwbGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVVuaXRzQ2hhbmdlckJ1dHRvbigpKTtcbiAgICBkaXNwbGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUZvcmVjYXN0Q29udGFpbmVyKCkpO1xuICAgIHJldHVybiBkaXNwbGF5Q29udGFpbmVyO1xuICB9O1xuICBjb25zdCBtYWluRGlzcGxheSA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJtYWluLWRpc3BsYXlcIik7XG5cbiAgbWFpbkRpc3BsYXkuYXBwZW5kQ2hpbGQoY3JlYXRlRGlzcGxheUNvbnRhaW5lcigpKTtcbiAgcmV0dXJuIG1haW5EaXNwbGF5O1xufTtcblxuLy8gRm9vdGVyIG9mIGRpc3BsYXkgc2NyZWVuXG5jb25zdCBjcmVhdGVGb290ZXIgPSAoKSA9PiB7XG4gIC8vIENyZWF0ZSBnaXQgbGluayB3aXRoIGdpdCBpY29uXG4gIGNvbnN0IGNyZWF0ZUdpdExpbmtJbWcgPSAoKSA9PiB7XG4gICAgY29uc3QgZ2l0TGluayA9IGNyZWF0ZUVsZW1lbnQoXCJhXCIsIFwiZ2l0LWxpbmtcIiwgW1xuICAgICAgW1wiaHJlZlwiLCBcImh0dHBzOi8vZ2l0aHViLmNvbS9Tb2tvbGFuL1RvRG8tTGlzdFwiXSxcbiAgICAgIFtcInRhcmdldFwiLCBcIl9ibGFua1wiXSxcbiAgICBdKTtcbiAgICBjb25zdCBnaXRJY29uID0gY3JlYXRlSW1nRWxlbWVudChnaXRJbWcsIFwiZ2l0LWltZ1wiKTtcbiAgICBnaXRJY29uLmNsYXNzTGlzdC5hZGQoXCJnaXQtaW1nXCIpO1xuICAgIGdpdExpbmsuYXBwZW5kQ2hpbGQoZ2l0SWNvbik7XG4gICAgcmV0dXJuIGdpdExpbms7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlQ3JlYXRvck5hbWUgPSAoY3JlYXRvck5hbWUpID0+IHtcbiAgICBjb25zdCBjcmVhdG9yID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJjcmVhdG9yXCIpO1xuICAgIGNyZWF0b3IudGV4dENvbnRlbnQgPSBjcmVhdG9yTmFtZTtcbiAgICByZXR1cm4gY3JlYXRvcjtcbiAgfTtcblxuICBjb25zdCBmb290ZXJDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZm9vdGVyXCIpO1xuXG4gIGZvb3RlckNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVHaXRMaW5rSW1nKCkpO1xuICBmb290ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlQ3JlYXRvck5hbWUoXCJTb2tvbGFuXCIpKTtcbiAgcmV0dXJuIGZvb3RlckNvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZURpc3BsYXkod2VhdGhlcikge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5pZCA9IFwiY29udGVudFwiO1xuICBib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU1haW5EaXNwbGF5KCkpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xuICBtV2VhdGhlciA9IHdlYXRoZXI7XG4gIHVwZGF0ZVdlYXRoZXJBbmRMb2NhdGlvbigpO1xufVxuIiwiaW1wb3J0IGNyZWF0ZURpc3BsYXkgZnJvbSBcIi4vZGlzcGxheUhhbmRsZXJcIlxuaW1wb3J0IFwiLi9zdHlsZS9zdHlsZS5jc3NcIjtcbmltcG9ydCBXZWF0aGVyIGZyb20gXCIuL3dlYXRoZXJcIjtcblxuY29uc3QgbVdlYXRoZXIgPSBhd2FpdCBXZWF0aGVyKCk7XG5jcmVhdGVEaXNwbGF5KG1XZWF0aGVyKTsiLCJjb25zdCBXZWF0aGVyID0gYXN5bmMgKCkgPT4ge1xuICBsZXQgbUxvY2F0aW9uO1xuICBsZXQgbVVzZXJMb2NhdGlvbjtcbiAgbGV0IG1XZWF0aGVyO1xuICBsZXQgbVJlcXVlc3RTdWNjZXNzZnVsO1xuICBsZXQgY2VsY2l1cyA9IHRydWU7XG5cbiAgY29uc3QgdXBkYXRlV2VhdGhlckFuZExvY2F0aW9uID0gYXN5bmMgKGxvY2F0aW9uKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGVuY29kZWRMb2NhdGlvbiA9IGVuY29kZVVSSUNvbXBvbmVudChsb2NhdGlvbik7XG4gICAgICBjb25zdCB3ZWF0aGVyQXQgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9MWIwM2M5OTI5ZDY1NDRiZmE2ODE5MzEyNzIzMjkwNiZxPSR7ZW5jb2RlZExvY2F0aW9ufSZkYXlzPTcmaXNfZGF5PTFgXG4gICAgICApO1xuICAgICAgaWYgKCF3ZWF0aGVyQXQub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQVBJIGVycm9yXCIpO1xuICAgICAgfVxuICAgICAgbVdlYXRoZXIgPSBhd2FpdCB3ZWF0aGVyQXQuanNvbigpO1xuICAgICAgbUxvY2F0aW9uID0gbVdlYXRoZXIubG9jYXRpb247XG4gICAgICBtUmVxdWVzdFN1Y2Nlc3NmdWwgPSB0cnVlO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICBtUmVxdWVzdFN1Y2Nlc3NmdWwgPSBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgLy8gQ2hhbmdlcyB0aGUgY3VycmVudCBsb2NhdGlvbiB3aXRoIGFuIGlucHV0XG4gIGNvbnN0IGNoYW5nZUxvY2F0aW9uID0gYXN5bmMgKGxvY2F0aW9uKSA9PiB7XG4gICAgLy8gbUxvY2F0aW9uID0gbG9jYXRpb247XG4gICAgYXdhaXQgdXBkYXRlV2VhdGhlckFuZExvY2F0aW9uKGxvY2F0aW9uKTtcbiAgfTtcblxuICAvLyB3cmFwcyBnZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24gaW4gYSBwcm9taXNlXG4gIGNvbnN0IGdldEN1cnJlbnRQb3NpdGlvbiA9ICgpID0+XG4gICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihyZXNvbHZlLCByZWplY3QpO1xuICAgIH0pO1xuXG4gIGNvbnN0IGNoYW5nZUxvY2F0aW9uVG9Mb2NhbCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcG9zaXRpb24gPSBhd2FpdCBnZXRDdXJyZW50UG9zaXRpb24oKTtcbiAgICAgIGNvbnN0IHsgbGF0aXR1ZGUgfSA9IHBvc2l0aW9uLmNvb3JkcztcbiAgICAgIGNvbnN0IHsgbG9uZ2l0dWRlIH0gPSBwb3NpdGlvbi5jb29yZHM7XG4gICAgICBtVXNlckxvY2F0aW9uID0gYCR7bGF0aXR1ZGV9LCR7bG9uZ2l0dWRlfWA7XG4gICAgICBhd2FpdCB1cGRhdGVXZWF0aGVyQW5kTG9jYXRpb24obVVzZXJMb2NhdGlvbik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG5hdmlnYXRvci5wZXJtaXNzaW9ucy5xdWVyeSh7IG5hbWU6IFwiZ2VvbG9jYXRpb25cIiB9KTtcbiAgICAgIGlmIChyZXN1bHQuc3RhdGUgPT09IFwiZGVuaWVkXCIpIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LnN0YXRlKTtcbiAgICAgICAgbVJlcXVlc3RTdWNjZXNzZnVsID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGluaXRpYXRlV2VhdGhlciA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgdXBkYXRlV2VhdGhlckFuZExvY2F0aW9uKFwiSGFpZmFcIik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0TG9jYXRpb24gPSAoKSA9PiAoe1xuICAgIGNvdW50cnk6IG1Mb2NhdGlvbi5jb3VudHJ5LFxuICAgIGNpdHk6IG1Mb2NhdGlvbi5uYW1lLFxuICB9KTtcblxuICBjb25zdCBnZXRGb3JlY2FzdCA9ICgpID0+IHtcbiAgICBjb25zdCBhcnIgPSBbXTtcbiAgICBtV2VhdGhlci5mb3JlY2FzdC5mb3JlY2FzdGRheS5mb3JFYWNoKChkYXkpID0+IHtcbiAgICAgIGNvbnN0IG1heFRlbXBWYWx1ZSA9IGNlbGNpdXNcbiAgICAgICAgPyBOdW1iZXIucGFyc2VJbnQoZGF5LmRheS5tYXh0ZW1wX2MsIDEwKVxuICAgICAgICA6IE51bWJlci5wYXJzZUludChkYXkuZGF5Lm1heHRlbXBfZiwgMTApO1xuICAgICAgY29uc3QgbWluVGVtcFZhbHVlID0gY2VsY2l1c1xuICAgICAgICA/IE51bWJlci5wYXJzZUludChkYXkuZGF5Lm1pbnRlbXBfYywgMTApXG4gICAgICAgIDogTnVtYmVyLnBhcnNlSW50KGRheS5kYXkubWludGVtcF9mLCAxMCk7XG4gICAgICBhcnIucHVzaCh7XG4gICAgICAgIGRhdGU6IGRheS5kYXRlLnN1YnN0cmluZyg1KSxcbiAgICAgICAgbWF4VGVtcDogbWF4VGVtcFZhbHVlLFxuICAgICAgICBtaW5UZW1wOiBtaW5UZW1wVmFsdWUsXG4gICAgICAgIGNvbmRpdGlvbjogZGF5LmRheS5jb25kaXRpb24udGV4dCxcbiAgICAgICAgY29uZGl0aW9uSWNvbjogYGh0dHBzOiR7ZGF5LmRheS5jb25kaXRpb24uaWNvbn1gLFxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFycjtcbiAgfTtcblxuICBjb25zdCByZXF1ZXN0U3VjY2VlZGVkID0gKCkgPT4gbVJlcXVlc3RTdWNjZXNzZnVsO1xuXG4gIGNvbnN0IGNoYW5nZVVuaXRzID0gKCkgPT4ge1xuICAgIGNlbGNpdXMgPSAhY2VsY2l1cztcbiAgfTtcblxuICAvLyAxYjAzYzk5MjlkNjU0NGJmYTY4MTkzMTI3MjMyOTA2XG4gIGF3YWl0IGluaXRpYXRlV2VhdGhlcigpO1xuICByZXR1cm4ge1xuICAgIGdldEZvcmVjYXN0LFxuICAgIGdldExvY2F0aW9uLFxuICAgIGNoYW5nZUxvY2F0aW9uLFxuICAgIGNoYW5nZUxvY2F0aW9uVG9Mb2NhbCxcbiAgICByZXF1ZXN0U3VjY2VlZGVkLFxuICAgIGNoYW5nZVVuaXRzLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgV2VhdGhlcjtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIHdlYnBhY2tRdWV1ZXMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2woXCJ3ZWJwYWNrIHF1ZXVlc1wiKSA6IFwiX193ZWJwYWNrX3F1ZXVlc19fXCI7XG52YXIgd2VicGFja0V4cG9ydHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2woXCJ3ZWJwYWNrIGV4cG9ydHNcIikgOiBcIl9fd2VicGFja19leHBvcnRzX19cIjtcbnZhciB3ZWJwYWNrRXJyb3IgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2woXCJ3ZWJwYWNrIGVycm9yXCIpIDogXCJfX3dlYnBhY2tfZXJyb3JfX1wiO1xudmFyIHJlc29sdmVRdWV1ZSA9IChxdWV1ZSkgPT4ge1xuXHRpZihxdWV1ZSAmJiBxdWV1ZS5kIDwgMSkge1xuXHRcdHF1ZXVlLmQgPSAxO1xuXHRcdHF1ZXVlLmZvckVhY2goKGZuKSA9PiAoZm4uci0tKSk7XG5cdFx0cXVldWUuZm9yRWFjaCgoZm4pID0+IChmbi5yLS0gPyBmbi5yKysgOiBmbigpKSk7XG5cdH1cbn1cbnZhciB3cmFwRGVwcyA9IChkZXBzKSA9PiAoZGVwcy5tYXAoKGRlcCkgPT4ge1xuXHRpZihkZXAgIT09IG51bGwgJiYgdHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIikge1xuXHRcdGlmKGRlcFt3ZWJwYWNrUXVldWVzXSkgcmV0dXJuIGRlcDtcblx0XHRpZihkZXAudGhlbikge1xuXHRcdFx0dmFyIHF1ZXVlID0gW107XG5cdFx0XHRxdWV1ZS5kID0gMDtcblx0XHRcdGRlcC50aGVuKChyKSA9PiB7XG5cdFx0XHRcdG9ialt3ZWJwYWNrRXhwb3J0c10gPSByO1xuXHRcdFx0XHRyZXNvbHZlUXVldWUocXVldWUpO1xuXHRcdFx0fSwgKGUpID0+IHtcblx0XHRcdFx0b2JqW3dlYnBhY2tFcnJvcl0gPSBlO1xuXHRcdFx0XHRyZXNvbHZlUXVldWUocXVldWUpO1xuXHRcdFx0fSk7XG5cdFx0XHR2YXIgb2JqID0ge307XG5cdFx0XHRvYmpbd2VicGFja1F1ZXVlc10gPSAoZm4pID0+IChmbihxdWV1ZSkpO1xuXHRcdFx0cmV0dXJuIG9iajtcblx0XHR9XG5cdH1cblx0dmFyIHJldCA9IHt9O1xuXHRyZXRbd2VicGFja1F1ZXVlc10gPSB4ID0+IHt9O1xuXHRyZXRbd2VicGFja0V4cG9ydHNdID0gZGVwO1xuXHRyZXR1cm4gcmV0O1xufSkpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5hID0gKG1vZHVsZSwgYm9keSwgaGFzQXdhaXQpID0+IHtcblx0dmFyIHF1ZXVlO1xuXHRoYXNBd2FpdCAmJiAoKHF1ZXVlID0gW10pLmQgPSAtMSk7XG5cdHZhciBkZXBRdWV1ZXMgPSBuZXcgU2V0KCk7XG5cdHZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHM7XG5cdHZhciBjdXJyZW50RGVwcztcblx0dmFyIG91dGVyUmVzb2x2ZTtcblx0dmFyIHJlamVjdDtcblx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqKSA9PiB7XG5cdFx0cmVqZWN0ID0gcmVqO1xuXHRcdG91dGVyUmVzb2x2ZSA9IHJlc29sdmU7XG5cdH0pO1xuXHRwcm9taXNlW3dlYnBhY2tFeHBvcnRzXSA9IGV4cG9ydHM7XG5cdHByb21pc2Vbd2VicGFja1F1ZXVlc10gPSAoZm4pID0+IChxdWV1ZSAmJiBmbihxdWV1ZSksIGRlcFF1ZXVlcy5mb3JFYWNoKGZuKSwgcHJvbWlzZVtcImNhdGNoXCJdKHggPT4ge30pKTtcblx0bW9kdWxlLmV4cG9ydHMgPSBwcm9taXNlO1xuXHRib2R5KChkZXBzKSA9PiB7XG5cdFx0Y3VycmVudERlcHMgPSB3cmFwRGVwcyhkZXBzKTtcblx0XHR2YXIgZm47XG5cdFx0dmFyIGdldFJlc3VsdCA9ICgpID0+IChjdXJyZW50RGVwcy5tYXAoKGQpID0+IHtcblx0XHRcdGlmKGRbd2VicGFja0Vycm9yXSkgdGhyb3cgZFt3ZWJwYWNrRXJyb3JdO1xuXHRcdFx0cmV0dXJuIGRbd2VicGFja0V4cG9ydHNdO1xuXHRcdH0pKVxuXHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcblx0XHRcdGZuID0gKCkgPT4gKHJlc29sdmUoZ2V0UmVzdWx0KSk7XG5cdFx0XHRmbi5yID0gMDtcblx0XHRcdHZhciBmblF1ZXVlID0gKHEpID0+IChxICE9PSBxdWV1ZSAmJiAhZGVwUXVldWVzLmhhcyhxKSAmJiAoZGVwUXVldWVzLmFkZChxKSwgcSAmJiAhcS5kICYmIChmbi5yKyssIHEucHVzaChmbikpKSk7XG5cdFx0XHRjdXJyZW50RGVwcy5tYXAoKGRlcCkgPT4gKGRlcFt3ZWJwYWNrUXVldWVzXShmblF1ZXVlKSkpO1xuXHRcdH0pO1xuXHRcdHJldHVybiBmbi5yID8gcHJvbWlzZSA6IGdldFJlc3VsdCgpO1xuXHR9LCAoZXJyKSA9PiAoKGVyciA/IHJlamVjdChwcm9taXNlW3dlYnBhY2tFcnJvcl0gPSBlcnIpIDogb3V0ZXJSZXNvbHZlKGV4cG9ydHMpKSwgcmVzb2x2ZVF1ZXVlKHF1ZXVlKSkpO1xuXHRxdWV1ZSAmJiBxdWV1ZS5kIDwgMCAmJiAocXVldWUuZCA9IDApO1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdtb2R1bGUnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9