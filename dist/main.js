/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;700&display=swap\\\" rel=\\\"stylesheet);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Nova+Mono&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Cousine:wght@400;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  font-family: \\\"Rubik\\\", sans-serif;\\n  box-sizing: border-box;\\n  margin: 0;\\n  padding: 0; }\\n\\n#container {\\n  position: relative;\\n  width: 100vw;\\n  height: 100vh;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  background-color: #242424; }\\n\\n.instructions {\\n  color: #fa903e;\\n  margin-bottom: 10px; }\\n\\nsvg {\\n  border: 20px solid #181818;\\n  background-color: #181818;\\n  /*background-image: linear-gradient(180deg, #212121, #000000);*/ }\\n\\n.slider {\\n  appearance: none;\\n  outline: none;\\n  position: relative;\\n  width: 200px;\\n  height: 20px;\\n  background-color: #181818;\\n  border: 1px solid black;\\n  border-radius: 5px;\\n  margin-top: 20px; }\\n\\n.slider::-webkit-slider-thumb {\\n  appearance: none;\\n  width: 20px;\\n  height: 20px;\\n  background-color: #fa903e;\\n  border-radius: 5px; }\\n\\n.slider::-moz-range-thumb {\\n  appearance: none;\\n  width: 20px;\\n  height: 20px;\\n  background-color: #fa903e;\\n  border-radius: 5px; }\\n\\n.svg-holder {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n  align-items: center; }\\n\\n.pallete-holder {\\n  width: 40px;\\n  min-height: 500px;\\n  background-color: #181818;\\n  border-radius: 10px 0 0 10px;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-around;\\n  padding: 20px 0; }\\n\\n.pallete-holder-left {\\n  border-radius: 10px 0 0 10px;\\n  align-items: flex-end; }\\n\\n.pallete-holder-right {\\n  border-radius: 0 10px 10px 0;\\n  align-items: flex-start; }\\n\\n.swatch {\\n  width: 20px;\\n  height: 20px;\\n  background-color: white; }\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://ripple/./src/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 9:0-14 */
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://ripple/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/randomcolor/randomColor.js":
/*!*************************************************!*\
  !*** ./node_modules/randomcolor/randomColor.js ***!
  \*************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module.loaded, module.id, module, __webpack_require__.nmd, __webpack_exports__, top-level-this-exports, __webpack_require__.* */
/*! CommonJS bailout: this is used directly at 27:2-6 */
/*! CommonJS bailout: module.exports is used directly at 11:48-62 */
/*! CommonJS bailout: module.exports is used directly at 12:16-30 */
/*! CommonJS bailout: exports is used directly at 12:6-13 */
/***/ (function(module, exports, __webpack_require__) {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n// randomColor by David Merfield under the CC0 license\n// https://github.com/davidmerfield/randomColor/\n\n;(function(root, factory) {\n\n  // Support CommonJS\n  if (true) {\n    var randomColor = factory();\n\n    // Support NodeJS & Component, which allow module.exports to be a function\n    if ( true && module && module.exports) {\n      exports = module.exports = randomColor;\n    }\n\n    // Support CommonJS 1.1.1 spec\n    exports.randomColor = randomColor;\n\n  // Support AMD\n  } else {}\n\n}(this, function() {\n\n  // Seed to get repeatable colors\n  var seed = null;\n\n  // Shared color dictionary\n  var colorDictionary = {};\n\n  // Populate the color dictionary\n  loadColorBounds();\n\n  // check if a range is taken\n  var colorRanges = [];\n\n  var randomColor = function (options) {\n\n    options = options || {};\n\n    // Check if there is a seed and ensure it's an\n    // integer. Otherwise, reset the seed value.\n    if (options.seed !== undefined && options.seed !== null && options.seed === parseInt(options.seed, 10)) {\n      seed = options.seed;\n\n    // A string was passed as a seed\n    } else if (typeof options.seed === 'string') {\n      seed = stringToInteger(options.seed);\n\n    // Something was passed as a seed but it wasn't an integer or string\n    } else if (options.seed !== undefined && options.seed !== null) {\n      throw new TypeError('The seed value must be an integer or string');\n\n    // No seed, reset the value outside.\n    } else {\n      seed = null;\n    }\n\n    var H,S,B;\n\n    // Check if we need to generate multiple colors\n    if (options.count !== null && options.count !== undefined) {\n\n      var totalColors = options.count,\n          colors = [];\n      // Value false at index i means the range i is not taken yet.\n      for (var i = 0; i < options.count; i++) {\n        colorRanges.push(false)\n        }\n      options.count = null;\n\n      while (totalColors > colors.length) {\n\n        var color = randomColor(options);\n\n        if (seed !== null) {\n          options.seed = seed;\n        }\n\n        colors.push(color);\n      }\n\n      options.count = totalColors;\n\n      return colors;\n    }\n\n    // First we pick a hue (H)\n    H = pickHue(options);\n\n    // Then use H to determine saturation (S)\n    S = pickSaturation(H, options);\n\n    // Then use S and H to determine brightness (B).\n    B = pickBrightness(H, S, options);\n\n    // Then we return the HSB color in the desired format\n    return setFormat([H,S,B], options);\n  };\n\n  function pickHue(options) {\n    if (colorRanges.length > 0) {\n      var hueRange = getRealHueRange(options.hue)\n\n      var hue = randomWithin(hueRange)\n\n      //Each of colorRanges.length ranges has a length equal approximatelly one step\n      var step = (hueRange[1] - hueRange[0]) / colorRanges.length\n\n      var j = parseInt((hue - hueRange[0]) / step)\n\n      //Check if the range j is taken\n      if (colorRanges[j] === true) {\n        j = (j + 2) % colorRanges.length\n      }\n      else {\n        colorRanges[j] = true\n           }\n\n      var min = (hueRange[0] + j * step) % 359,\n          max = (hueRange[0] + (j + 1) * step) % 359;\n\n      hueRange = [min, max]\n\n      hue = randomWithin(hueRange)\n\n      if (hue < 0) {hue = 360 + hue;}\n      return hue\n    }\n    else {\n      var hueRange = getHueRange(options.hue)\n\n      hue = randomWithin(hueRange);\n      // Instead of storing red as two seperate ranges,\n      // we group them, using negative numbers\n      if (hue < 0) {\n        hue = 360 + hue;\n      }\n\n      return hue;\n    }\n  }\n\n  function pickSaturation (hue, options) {\n\n    if (options.hue === 'monochrome') {\n      return 0;\n    }\n\n    if (options.luminosity === 'random') {\n      return randomWithin([0,100]);\n    }\n\n    var saturationRange = getSaturationRange(hue);\n\n    var sMin = saturationRange[0],\n        sMax = saturationRange[1];\n\n    switch (options.luminosity) {\n\n      case 'bright':\n        sMin = 55;\n        break;\n\n      case 'dark':\n        sMin = sMax - 10;\n        break;\n\n      case 'light':\n        sMax = 55;\n        break;\n   }\n\n    return randomWithin([sMin, sMax]);\n\n  }\n\n  function pickBrightness (H, S, options) {\n\n    var bMin = getMinimumBrightness(H, S),\n        bMax = 100;\n\n    switch (options.luminosity) {\n\n      case 'dark':\n        bMax = bMin + 20;\n        break;\n\n      case 'light':\n        bMin = (bMax + bMin)/2;\n        break;\n\n      case 'random':\n        bMin = 0;\n        bMax = 100;\n        break;\n    }\n\n    return randomWithin([bMin, bMax]);\n  }\n\n  function setFormat (hsv, options) {\n\n    switch (options.format) {\n\n      case 'hsvArray':\n        return hsv;\n\n      case 'hslArray':\n        return HSVtoHSL(hsv);\n\n      case 'hsl':\n        var hsl = HSVtoHSL(hsv);\n        return 'hsl('+hsl[0]+', '+hsl[1]+'%, '+hsl[2]+'%)';\n\n      case 'hsla':\n        var hslColor = HSVtoHSL(hsv);\n        var alpha = options.alpha || Math.random();\n        return 'hsla('+hslColor[0]+', '+hslColor[1]+'%, '+hslColor[2]+'%, ' + alpha + ')';\n\n      case 'rgbArray':\n        return HSVtoRGB(hsv);\n\n      case 'rgb':\n        var rgb = HSVtoRGB(hsv);\n        return 'rgb(' + rgb.join(', ') + ')';\n\n      case 'rgba':\n        var rgbColor = HSVtoRGB(hsv);\n        var alpha = options.alpha || Math.random();\n        return 'rgba(' + rgbColor.join(', ') + ', ' + alpha + ')';\n\n      default:\n        return HSVtoHex(hsv);\n    }\n\n  }\n\n  function getMinimumBrightness(H, S) {\n\n    var lowerBounds = getColorInfo(H).lowerBounds;\n\n    for (var i = 0; i < lowerBounds.length - 1; i++) {\n\n      var s1 = lowerBounds[i][0],\n          v1 = lowerBounds[i][1];\n\n      var s2 = lowerBounds[i+1][0],\n          v2 = lowerBounds[i+1][1];\n\n      if (S >= s1 && S <= s2) {\n\n         var m = (v2 - v1)/(s2 - s1),\n             b = v1 - m*s1;\n\n         return m*S + b;\n      }\n\n    }\n\n    return 0;\n  }\n\n  function getHueRange (colorInput) {\n\n    if (typeof parseInt(colorInput) === 'number') {\n\n      var number = parseInt(colorInput);\n\n      if (number < 360 && number > 0) {\n        return [number, number];\n      }\n\n    }\n\n    if (typeof colorInput === 'string') {\n\n      if (colorDictionary[colorInput]) {\n        var color = colorDictionary[colorInput];\n        if (color.hueRange) {return color.hueRange;}\n      } else if (colorInput.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)) {\n        var hue = HexToHSB(colorInput)[0];\n        return [ hue, hue ];\n      }\n    }\n\n    return [0,360];\n\n  }\n\n  function getSaturationRange (hue) {\n    return getColorInfo(hue).saturationRange;\n  }\n\n  function getColorInfo (hue) {\n\n    // Maps red colors to make picking hue easier\n    if (hue >= 334 && hue <= 360) {\n      hue-= 360;\n    }\n\n    for (var colorName in colorDictionary) {\n       var color = colorDictionary[colorName];\n       if (color.hueRange &&\n           hue >= color.hueRange[0] &&\n           hue <= color.hueRange[1]) {\n          return colorDictionary[colorName];\n       }\n    } return 'Color not found';\n  }\n\n  function randomWithin (range) {\n    if (seed === null) {\n      //generate random evenly destinct number from : https://martin.ankerl.com/2009/12/09/how-to-create-random-colors-programmatically/\n      var golden_ratio = 0.618033988749895\n      var r=Math.random()\n      r += golden_ratio\n      r %= 1\n      return Math.floor(range[0] + r*(range[1] + 1 - range[0]));\n    } else {\n      //Seeded random algorithm from http://indiegamr.com/generate-repeatable-random-numbers-in-js/\n      var max = range[1] || 1;\n      var min = range[0] || 0;\n      seed = (seed * 9301 + 49297) % 233280;\n      var rnd = seed / 233280.0;\n      return Math.floor(min + rnd * (max - min));\n}\n  }\n\n  function HSVtoHex (hsv){\n\n    var rgb = HSVtoRGB(hsv);\n\n    function componentToHex(c) {\n        var hex = c.toString(16);\n        return hex.length == 1 ? '0' + hex : hex;\n    }\n\n    var hex = '#' + componentToHex(rgb[0]) + componentToHex(rgb[1]) + componentToHex(rgb[2]);\n\n    return hex;\n\n  }\n\n  function defineColor (name, hueRange, lowerBounds) {\n\n    var sMin = lowerBounds[0][0],\n        sMax = lowerBounds[lowerBounds.length - 1][0],\n\n        bMin = lowerBounds[lowerBounds.length - 1][1],\n        bMax = lowerBounds[0][1];\n\n    colorDictionary[name] = {\n      hueRange: hueRange,\n      lowerBounds: lowerBounds,\n      saturationRange: [sMin, sMax],\n      brightnessRange: [bMin, bMax]\n    };\n\n  }\n\n  function loadColorBounds () {\n\n    defineColor(\n      'monochrome',\n      null,\n      [[0,0],[100,0]]\n    );\n\n    defineColor(\n      'red',\n      [-26,18],\n      [[20,100],[30,92],[40,89],[50,85],[60,78],[70,70],[80,60],[90,55],[100,50]]\n    );\n\n    defineColor(\n      'orange',\n      [18,46],\n      [[20,100],[30,93],[40,88],[50,86],[60,85],[70,70],[100,70]]\n    );\n\n    defineColor(\n      'yellow',\n      [46,62],\n      [[25,100],[40,94],[50,89],[60,86],[70,84],[80,82],[90,80],[100,75]]\n    );\n\n    defineColor(\n      'green',\n      [62,178],\n      [[30,100],[40,90],[50,85],[60,81],[70,74],[80,64],[90,50],[100,40]]\n    );\n\n    defineColor(\n      'blue',\n      [178, 257],\n      [[20,100],[30,86],[40,80],[50,74],[60,60],[70,52],[80,44],[90,39],[100,35]]\n    );\n\n    defineColor(\n      'purple',\n      [257, 282],\n      [[20,100],[30,87],[40,79],[50,70],[60,65],[70,59],[80,52],[90,45],[100,42]]\n    );\n\n    defineColor(\n      'pink',\n      [282, 334],\n      [[20,100],[30,90],[40,86],[60,84],[80,80],[90,75],[100,73]]\n    );\n\n  }\n\n  function HSVtoRGB (hsv) {\n\n    // this doesn't work for the values of 0 and 360\n    // here's the hacky fix\n    var h = hsv[0];\n    if (h === 0) {h = 1;}\n    if (h === 360) {h = 359;}\n\n    // Rebase the h,s,v values\n    h = h/360;\n    var s = hsv[1]/100,\n        v = hsv[2]/100;\n\n    var h_i = Math.floor(h*6),\n      f = h * 6 - h_i,\n      p = v * (1 - s),\n      q = v * (1 - f*s),\n      t = v * (1 - (1 - f)*s),\n      r = 256,\n      g = 256,\n      b = 256;\n\n    switch(h_i) {\n      case 0: r = v; g = t; b = p;  break;\n      case 1: r = q; g = v; b = p;  break;\n      case 2: r = p; g = v; b = t;  break;\n      case 3: r = p; g = q; b = v;  break;\n      case 4: r = t; g = p; b = v;  break;\n      case 5: r = v; g = p; b = q;  break;\n    }\n\n    var result = [Math.floor(r*255), Math.floor(g*255), Math.floor(b*255)];\n    return result;\n  }\n\n  function HexToHSB (hex) {\n    hex = hex.replace(/^#/, '');\n    hex = hex.length === 3 ? hex.replace(/(.)/g, '$1$1') : hex;\n\n    var red = parseInt(hex.substr(0, 2), 16) / 255,\n          green = parseInt(hex.substr(2, 2), 16) / 255,\n          blue = parseInt(hex.substr(4, 2), 16) / 255;\n\n    var cMax = Math.max(red, green, blue),\n          delta = cMax - Math.min(red, green, blue),\n          saturation = cMax ? (delta / cMax) : 0;\n\n    switch (cMax) {\n      case red: return [ 60 * (((green - blue) / delta) % 6) || 0, saturation, cMax ];\n      case green: return [ 60 * (((blue - red) / delta) + 2) || 0, saturation, cMax ];\n      case blue: return [ 60 * (((red - green) / delta) + 4) || 0, saturation, cMax ];\n    }\n  }\n\n  function HSVtoHSL (hsv) {\n    var h = hsv[0],\n      s = hsv[1]/100,\n      v = hsv[2]/100,\n      k = (2-s)*v;\n\n    return [\n      h,\n      Math.round(s*v / (k<1 ? k : 2-k) * 10000) / 100,\n      k/2 * 100\n    ];\n  }\n\n  function stringToInteger (string) {\n    var total = 0\n    for (var i = 0; i !== string.length; i++) {\n      if (total >= Number.MAX_SAFE_INTEGER) break;\n      total += string.charCodeAt(i)\n    }\n    return total\n  }\n\n  // get The range of given hue when options.count!=0\n  function getRealHueRange(colorHue)\n  { if (!isNaN(colorHue)) {\n    var number = parseInt(colorHue);\n\n    if (number < 360 && number > 0) {\n      return getColorInfo(colorHue).hueRange\n    }\n  }\n    else if (typeof colorHue === 'string') {\n\n      if (colorDictionary[colorHue]) {\n        var color = colorDictionary[colorHue];\n\n        if (color.hueRange) {\n          return color.hueRange\n       }\n    } else if (colorHue.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)) {\n        var hue = HexToHSB(colorHue)[0]\n        return getColorInfo(hue).hueRange\n    }\n  }\n\n    return [0,360]\n}\n  return randomColor;\n}));\n\n\n//# sourceURL=webpack://ripple/./node_modules/randomcolor/randomColor.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://ripple/./src/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.nc, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 230:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://ripple/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! namespace exports */
/*! export App [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"App\": () => /* binding */ App\n/* harmony export */ });\n/* harmony import */ var _ripples__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ripples */ \"./src/ripples.js\");\n\nlet randomColor = __webpack_require__(/*! randomcolor */ \"./node_modules/randomcolor/randomColor.js\");\n\nclass App {\n  constructor(w, h){\n    this.w = w;\n    this.h = h;\n    this.tiltSlider = document.getElementById('tilt-slider');\n    this.zoomSlider = document.getElementById('zoom-slider');\n    this.speedSlider = document.getElementById('speed-slider');\n    this.svg = document.getElementById(\"ripple-holder\");\n    this.ripple = new _ripples__WEBPACK_IMPORTED_MODULE_0__.Ripples(w, h, this.svg, 150);\n    this.res = this.defaultRes/2;\n    this.swatchComponents = document.getElementsByTagName('swatch-component');\n    this.vb_w, this.vb_h, this.vb_ratio, this.vb_w_MAX;\n    \n  }\n\n  init(){\n    console.log('app here!');\n    const vbString = this.svg.getAttribute(\"viewBox\");\n    const vbArray = vbString.split(\" \");\n    this.vb_w = Number(vbArray[2]);\n    this.vb_h = Number(vbArray[3]);\n    this.vb_ratio = this.vb_h/this.vb_w;\n    this.vb_w_MAX = this.vb_w * 3;\n    console.log(this.vb_w, this.vb_h);\n    this.initRipple();\n    this.initSVGClick();\n    this.initSliders();\n    this.initSwatches();\n    \n  }\n\n  initSwatches(){\n    for(const swatch of this.swatchComponents){\n      swatch.setAttribute(\"color\", randomColor())\n      swatch.addEventListener(\"click\", (e)=>{\n        console.log(swatch.getType());\n        this.ripple.colorCircles(swatch.getColor(), swatch.getType());\n      })\n    }\n  }\n\n  initRipple(){\n    this.ripple.init();\n  }\n\n  initSVGClick(){\n    this.svg.addEventListener(\"click\", (e)=>{\n      let pt = this.svg.createSVGPoint();\n  \n      pt.x = e.clientX;\n      pt.y = e.clientY;\n      const svgP = pt.matrixTransform(this.svg.getScreenCTM().inverse());\n      // this.ripple.drip(svgP.x, svgP.y);\n      this.ripple.drip(svgP.y);\n    })\n  }\n\n  initSliders(){\n    this.tiltSlider.addEventListener(\"input\", ()=>{\n      const percentage = (100 - this.tiltSlider.value)/100;\n      this.ripple.tiltCircles(Number(percentage));\n    })\n\n    this.zoomSlider.addEventListener(\"input\", ()=>{\n      const percentage = (100 - this.zoomSlider.value)/100;\n      const new_vb_w = percentage * this.vb_w_MAX;\n      const new_vb_h = new_vb_w * this.vb_ratio;\n      //this.res = this.vb_w_MAX * percentage;\n      const vbString = `-${new_vb_w/2} -${new_vb_h/2} ${new_vb_w} ${new_vb_h}`\n      this.svg.setAttribute(\"viewBox\", vbString);\n    })\n\n    this.speedSlider.addEventListener(\"input\", ()=>{\n      const percentage = this.speedSlider.value/100;\n      this.ripple.changeSpeed(percentage);\n    })\n  }\n}\n\n//# sourceURL=webpack://ripple/./src/app.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n/* harmony import */ var _swatch_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./swatch-component */ \"./src/swatch-component.js\");\n/* harmony import */ var _swatch_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_swatch_component__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconsole.log('hello world');\nconst s = document.getElementById('ripple-holder')\nconsole.log()\nconst app = new _app__WEBPACK_IMPORTED_MODULE_1__.App(1000,1000);\napp.init();\n\n//# sourceURL=webpack://ripple/./src/index.js?");

/***/ }),

/***/ "./src/pvector.js":
/*!************************!*\
  !*** ./src/pvector.js ***!
  \************************/
/*! namespace exports */
/*! export PVector [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PVector\": () => /* binding */ PVector\n/* harmony export */ });\nclass PVector{\n    constructor(x, y){\n        this.x = x;\n        this.y = y;\n    }\n\n    mag(){\n        return Math.sqrt(this.x * this.x + this.y * this.y)\n    }\n\n    add(v){\n        this.x += v.x;\n        this.y += v.y;\n    }\n\n    sub(v){\n        this.x -= v.x;\n        this.y -= v.y;\n    }\n\n    static Subtract(v1, v2){\n        let x = v1.x - v2.x;\n        let y = v1.y - v2.y;\n\n        return new PVector(x, y);\n    }\n\n    multiply(num)\n    {\n        this.x *= num;\n        this.y *= num;\n    }\n\n    normalize(v){\n        let num = Math.sqrt(this.x * this.x + this.y * this.y)\n        this.x = this.x/num;\n        this.y = this.y/num;\n    }\n\n    reset(){\n        this.x = 0;\n        this.y = 0;\n    }\n\n\n}\n\n\n//# sourceURL=webpack://ripple/./src/pvector.js?");

/***/ }),

/***/ "./src/ripples.js":
/*!************************!*\
  !*** ./src/ripples.js ***!
  \************************/
/*! namespace exports */
/*! export Ripples [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Ripples\": () => /* binding */ Ripples\n/* harmony export */ });\n/* harmony import */ var _pvector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pvector */ \"./src/pvector.js\");\n\n\nclass Ripples {\n  constructor(w, h, svg, num = 10) {\n    console.log('Ripple here!')\n    this.w = w;\n    this.h = h;\n    this.center = new _pvector__WEBPACK_IMPORTED_MODULE_0__.PVector(0, 0);\n    this.num = num;\n    this.gap = h/2 / (num - 1);\n\n    // stroke stuff\n    this.endColor = '#b043f5';\n    this.startColor = '#fa903e';\n    this.strokeWidth = 3;\n\n    // amplitude stuff\n    this.maxAmplitude = 300;\n    this.amplitute = 0;\n    this.ampAngle = 0;\n    this.ampAngleSpeed = (5*Math.PI)/this.num;\n    this.amps = [];\n\n    // svg stuff\n    this.svg = svg;\n    this.circles = [];\n    this.ns = \"http://www.w3.org/2000/svg\";\n\n    //\n    this.active = false;\n  }\n\n  init() {\n    this.buildCircles();\n  }\n\n  buildCircles() {\n    for (let i = 0; i < this.num; i++) {\n      const w = Math.round(i * this.gap);\n      const h = w;\n      const elps = document.createElementNS(this.ns, \"ellipse\");\n      const color = this.lerpColor(this.startColor, this.endColor, i / this.num);\n      elps.setAttribute(\"cx\", this.center.x);\n      elps.setAttribute(\"cy\", this.center.y);\n      elps.setAttribute(\"rx\", w);\n      elps.setAttribute(\"ry\", h);\n      elps.setAttribute(\"stroke\", color);\n      elps.setAttribute(\"stroke-width\", this.strokeWidth);\n      elps.setAttribute(\"fill\", \"transparent\");\n      this.circles.push(elps);\n      this.svg.appendChild(elps);\n      this.amps[i] = 0;\n      this.gap *= 1.01;\n    }\n  }\n\n  changeSpeed(percentage){\n    this.ampAngleSpeed = (percentage * 10*Math.PI)/this.num;\n  }\n\n  colorCircles(color, type) {\n    type == \"start\" ? this.startColor = color : this.endColor = color;\n    for (let i = 0; i < this.num; i++) {\n      const color = this.lerpColor(this.startColor, this.endColor, i / this.num);\n      this.circles[i].setAttribute(\"stroke\", color);\n    }\n  }\n\n  tiltCircles(percentage) {\n    this.gap = this.h/2 / (this.num - 1);\n    for (let i = 0; i < this.num; i++) {\n      const w = i * this.gap;\n      const h = Math.round(w * percentage);\n      this.circles[i].setAttribute(\"ry\", h);\n      this.gap *= 1.01;\n    }\n  }\n\n  drip(dy) {\n    console.log(dy)\n    let newAmp = Math.abs(dy);\n    if(newAmp > this.maxAmplitude) newAmp = this.maxAmplitude;\n    //this.center.x = Math.round(x);\n    //this.center.y = Math.round(y)\n    this.amplitute = newAmp;\n    this.ampAngle = 0;\n    for (let i = 0; i < this.num; i++) {\n      this.circles[i].setAttribute(\"cx\", this.center.x);\n      this.circles[i].setAttribute(\"cy\", this.center.y);\n    }\n    if (!this.active) {\n      this.active = true;\n      this.update();\n    }\n\n  }\n\n  update() {\n    const dy = Math.sin(this.ampAngle) * this.amplitute;\n    this.amps.unshift(dy);\n    this.amps.pop();\n    for (let i = 0; i < this.num; i++) {\n      this.circles[i].setAttribute(\"cy\", Math.round(this.center.y + this.amps[i]));\n      //this.circles[i].setAttribute(\"opacity\", Math.abs(this.amps[i])/this.maxAmplitude * .5 + .5);\n    }\n    this.ampAngle += this.ampAngleSpeed;\n    this.amplitute *= .9975;\n    if (this.amplitute < .1) {\n      this.amplitute = 0;\n      this.active = false;\n    } else {\n      window.requestAnimationFrame(() => {\n        this.update();\n      })\n    }\n  }\n\n  // https://gist.github.com/rosszurowski/67f04465c424a9bc0dae\n  lerpColor(a, b, amount) {\n    if (amount > 1) amount = 1;\n    let ah = parseInt(a.replace(/#/g, ''), 16),\n      ar = ah >> 16, ag = ah >> 8 & 0xff, ab = ah & 0xff,\n      bh = parseInt(b.replace(/#/g, ''), 16),\n      br = bh >> 16, bg = bh >> 8 & 0xff, bb = bh & 0xff,\n      rr = ar + amount * (br - ar),\n      rg = ag + amount * (bg - ag),\n      rb = ab + amount * (bb - ab);\n\n    return '#' + ((1 << 24) + (rr << 16) + (rg << 8) + rb | 0).toString(16).slice(1);\n  }\n}\n\n//# sourceURL=webpack://ripple/./src/ripples.js?");

/***/ }),

/***/ "./src/swatch-component.js":
/*!*********************************!*\
  !*** ./src/swatch-component.js ***!
  \*********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

eval("const template = document.createElement('template');\ntemplate.innerHTML = `\n<style>\n  .swatch {\n    width: 25px;\n    height: 25px;\n    border-radius: 4px;\n    border: 1px solid black;\n    background-color: #ffffff;\n  }\n</style>\n<div class=\"swatch\">\n</div>\n`\n\nclass SwatchComponent extends HTMLElement {\n  static get observedAttributes() {\n    return ['color'];\n  }\n  constructor() {\n    super();\n    this.color = this.getAttribute(\"color\");\n    this.type = this.getAttribute(\"type\");\n    this.attachShadow({ mode: 'open' });\n    this.shadowRoot.appendChild(template.content.cloneNode(true));\n    this.swatch = this.shadowRoot.querySelector(\".swatch\");\n    this.swatch.style.backgroundColor = this.color;\n  }\n\n  attributeChangedCallback(name, oldValue, newValue) {\n    this.updateColor(newValue)\n  }\n\n  updateColor(newColor) {\n    this.color = newColor;\n    this.swatch.style.backgroundColor = this.color;\n  }\n\n  getColor() {\n    return this.color;\n  }\n\n  getType() {\n    return this.type;\n  }\n}\n\nwindow.customElements.define('swatch-component', SwatchComponent);\n\n//# sourceURL=webpack://ripple/./src/swatch-component.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;