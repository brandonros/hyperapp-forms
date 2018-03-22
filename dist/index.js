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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/hyperapp/src/index.js":
/*!********************************************!*\
  !*** ./node_modules/hyperapp/src/index.js ***!
  \********************************************/
/*! exports provided: h, app */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"h\", function() { return h; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"app\", function() { return app; });\nfunction h(name, attributes) {\n  var rest = []\n  var children = []\n  var length = arguments.length\n\n  while (length-- > 2) rest.push(arguments[length])\n\n  while (rest.length) {\n    var node = rest.pop()\n    if (node && node.pop) {\n      for (length = node.length; length--; ) {\n        rest.push(node[length])\n      }\n    } else if (node != null && node !== true && node !== false) {\n      children.push(node)\n    }\n  }\n\n  return typeof name === \"function\"\n    ? name(attributes || {}, children)\n    : {\n        nodeName: name,\n        attributes: attributes || {},\n        children: children,\n        key: attributes && attributes.key\n      }\n}\n\nfunction app(state, actions, view, container) {\n  var map = [].map\n  var rootElement = (container && container.children[0]) || null\n  var oldNode = rootElement && recycleElement(rootElement)\n  var lifecycle = []\n  var skipRender\n  var isRecycling = true\n  var globalState = clone(state)\n  var wiredActions = wireStateToActions([], globalState, clone(actions))\n\n  scheduleRender()\n\n  return wiredActions\n\n  function recycleElement(element) {\n    return {\n      nodeName: element.nodeName.toLowerCase(),\n      attributes: {},\n      children: map.call(element.childNodes, function(element) {\n        return element.nodeType === 3 // Node.TEXT_NODE\n          ? element.nodeValue\n          : recycleElement(element)\n      })\n    }\n  }\n\n  function resolveNode(node) {\n    return typeof node === \"function\"\n      ? resolveNode(node(globalState, wiredActions))\n      : node\n  }\n\n  function render() {\n    skipRender = !skipRender\n\n    var node = resolveNode(view)\n\n    if (container && !skipRender) {\n      rootElement = patch(container, rootElement, oldNode, (oldNode = node))\n    }\n\n    isRecycling = false\n\n    while (lifecycle.length) lifecycle.pop()()\n  }\n\n  function scheduleRender() {\n    if (!skipRender) {\n      skipRender = true\n      setTimeout(render)\n    }\n  }\n\n  function clone(target, source) {\n    var out = {}\n\n    for (var i in target) out[i] = target[i]\n    for (var i in source) out[i] = source[i]\n\n    return out\n  }\n\n  function set(path, value, source) {\n    var target = {}\n    if (path.length) {\n      target[path[0]] =\n        path.length > 1 ? set(path.slice(1), value, source[path[0]]) : value\n      return clone(source, target)\n    }\n    return value\n  }\n\n  function get(path, source) {\n    var i = 0\n    while (i < path.length) {\n      source = source[path[i++]]\n    }\n    return source\n  }\n\n  function wireStateToActions(path, state, actions) {\n    for (var key in actions) {\n      typeof actions[key] === \"function\"\n        ? (function(key, action) {\n            actions[key] = function(data) {\n              var result = action(data)\n\n              if (typeof result === \"function\") {\n                result = result(get(path, globalState), actions)\n              }\n\n              if (\n                result &&\n                result !== (state = get(path, globalState)) &&\n                !result.then // !isPromise\n              ) {\n                scheduleRender(\n                  (globalState = set(path, clone(state, result), globalState))\n                )\n              }\n\n              return result\n            }\n          })(key, actions[key])\n        : wireStateToActions(\n            path.concat(key),\n            (state[key] = clone(state[key])),\n            (actions[key] = clone(actions[key]))\n          )\n    }\n\n    return actions\n  }\n\n  function getKey(node) {\n    return node ? node.key : null\n  }\n\n  function eventListener(event) {\n    return event.currentTarget.events[event.type](event)\n  }\n\n  function updateAttribute(element, name, value, oldValue, isSvg) {\n    if (name === \"key\") {\n    } else if (name === \"style\") {\n      for (var i in clone(oldValue, value)) {\n        var style = value == null || value[i] == null ? \"\" : value[i]\n        if (i[0] === \"-\") {\n          element[name].setProperty(i, style)\n        } else {\n          element[name][i] = style\n        }\n      }\n    } else {\n      if (name[0] === \"o\" && name[1] === \"n\") {\n        if (!element.events) {\n          element.events = {}\n        }\n        element.events[(name = name.slice(2))] = value\n        if (value) {\n          if (!oldValue) {\n            element.addEventListener(name, eventListener)\n          }\n        } else {\n          element.removeEventListener(name, eventListener)\n        }\n      } else if (name in element && name !== \"list\" && !isSvg) {\n        element[name] = value == null ? \"\" : value\n      } else if (value != null && value !== false) {\n        element.setAttribute(name, value)\n      }\n\n      if (value == null || value === false) {\n        element.removeAttribute(name)\n      }\n    }\n  }\n\n  function createElement(node, isSvg) {\n    var element =\n      typeof node === \"string\" || typeof node === \"number\"\n        ? document.createTextNode(node)\n        : (isSvg = isSvg || node.nodeName === \"svg\")\n          ? document.createElementNS(\n              \"http://www.w3.org/2000/svg\",\n              node.nodeName\n            )\n          : document.createElement(node.nodeName)\n\n    var attributes = node.attributes\n    if (attributes) {\n      if (attributes.oncreate) {\n        lifecycle.push(function() {\n          attributes.oncreate(element)\n        })\n      }\n\n      for (var i = 0; i < node.children.length; i++) {\n        element.appendChild(\n          createElement(\n            (node.children[i] = resolveNode(node.children[i])),\n            isSvg\n          )\n        )\n      }\n\n      for (var name in attributes) {\n        updateAttribute(element, name, attributes[name], null, isSvg)\n      }\n    }\n\n    return element\n  }\n\n  function updateElement(element, oldAttributes, attributes, isSvg) {\n    for (var name in clone(oldAttributes, attributes)) {\n      if (\n        attributes[name] !==\n        (name === \"value\" || name === \"checked\"\n          ? element[name]\n          : oldAttributes[name])\n      ) {\n        updateAttribute(\n          element,\n          name,\n          attributes[name],\n          oldAttributes[name],\n          isSvg\n        )\n      }\n    }\n\n    var cb = isRecycling ? attributes.oncreate : attributes.onupdate\n    if (cb) {\n      lifecycle.push(function() {\n        cb(element, oldAttributes)\n      })\n    }\n  }\n\n  function removeChildren(element, node) {\n    var attributes = node.attributes\n    if (attributes) {\n      for (var i = 0; i < node.children.length; i++) {\n        removeChildren(element.childNodes[i], node.children[i])\n      }\n\n      if (attributes.ondestroy) {\n        attributes.ondestroy(element)\n      }\n    }\n    return element\n  }\n\n  function removeElement(parent, element, node) {\n    function done() {\n      parent.removeChild(removeChildren(element, node))\n    }\n\n    var cb = node.attributes && node.attributes.onremove\n    if (cb) {\n      cb(element, done)\n    } else {\n      done()\n    }\n  }\n\n  function patch(parent, element, oldNode, node, isSvg) {\n    if (node === oldNode) {\n    } else if (oldNode == null || oldNode.nodeName !== node.nodeName) {\n      var newElement = createElement(node, isSvg)\n      parent.insertBefore(newElement, element)\n\n      if (oldNode != null) {\n        removeElement(parent, element, oldNode)\n      }\n\n      element = newElement\n    } else if (oldNode.nodeName == null) {\n      element.nodeValue = node\n    } else {\n      updateElement(\n        element,\n        oldNode.attributes,\n        node.attributes,\n        (isSvg = isSvg || node.nodeName === \"svg\")\n      )\n\n      var oldKeyed = {}\n      var newKeyed = {}\n      var oldElements = []\n      var oldChildren = oldNode.children\n      var children = node.children\n\n      for (var i = 0; i < oldChildren.length; i++) {\n        oldElements[i] = element.childNodes[i]\n\n        var oldKey = getKey(oldChildren[i])\n        if (oldKey != null) {\n          oldKeyed[oldKey] = [oldElements[i], oldChildren[i]]\n        }\n      }\n\n      var i = 0\n      var k = 0\n\n      while (k < children.length) {\n        var oldKey = getKey(oldChildren[i])\n        var newKey = getKey((children[k] = resolveNode(children[k])))\n\n        if (newKeyed[oldKey]) {\n          i++\n          continue\n        }\n\n        if (newKey == null || isRecycling) {\n          if (oldKey == null) {\n            patch(element, oldElements[i], oldChildren[i], children[k], isSvg)\n            k++\n          }\n          i++\n        } else {\n          var keyedNode = oldKeyed[newKey] || []\n\n          if (oldKey === newKey) {\n            patch(element, keyedNode[0], keyedNode[1], children[k], isSvg)\n            i++\n          } else if (keyedNode[0]) {\n            patch(\n              element,\n              element.insertBefore(keyedNode[0], oldElements[i]),\n              keyedNode[1],\n              children[k],\n              isSvg\n            )\n          } else {\n            patch(element, oldElements[i], null, children[k], isSvg)\n          }\n\n          newKeyed[newKey] = children[k]\n          k++\n        }\n      }\n\n      while (i < oldChildren.length) {\n        if (getKey(oldChildren[i]) == null) {\n          removeElement(element, oldElements[i], oldChildren[i])\n        }\n        i++\n      }\n\n      for (var i in oldKeyed) {\n        if (!newKeyed[i]) {\n          removeElement(element, oldKeyed[i][0], oldKeyed[i][1])\n        }\n      }\n    }\n    return element\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/hyperapp/src/index.js?");

/***/ }),

/***/ "./src/actions/addObjectToArray.js":
/*!*****************************************!*\
  !*** ./src/actions/addObjectToArray.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((key) => (\n  (state, actions) => {\n    let newState = JSON.parse(JSON.stringify(state))\n\n    newState.model[key].push({})\n\n    return newState\n  }\n));\n\n\n//# sourceURL=webpack:///./src/actions/addObjectToArray.js?");

/***/ }),

/***/ "./src/actions/removeObjectFromArray.js":
/*!**********************************************!*\
  !*** ./src/actions/removeObjectFromArray.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (({key, index}) => (\n  (state, actions) => {\n    let newState = JSON.parse(JSON.stringify(state))\n\n    if (newState.model[key].length > 1) {\n      newState.model[key].splice(index, 1)\n    }\n\n    return newState\n  }\n));\n\n\n//# sourceURL=webpack:///./src/actions/removeObjectFromArray.js?");

/***/ }),

/***/ "./src/actions/updateArrayField.js":
/*!*****************************************!*\
  !*** ./src/actions/updateArrayField.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (({key, id, index}) => (\n  (state, actions) => {\n    let newState = JSON.parse(JSON.stringify(state))\n\n    newState.model[key][index][id] = event.target.type === 'checkbox' ? event.target.checked : event.target.value\n\n    return newState\n  }\n));\n\n\n//# sourceURL=webpack:///./src/actions/updateArrayField.js?");

/***/ }),

/***/ "./src/actions/updateField.js":
/*!************************************!*\
  !*** ./src/actions/updateField.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (({key, id}) => (\n  (state, actions) => {\n    let newState = JSON.parse(JSON.stringify(state))\n\n    newState.model[key][id] = event.target.type === 'checkbox' ? event.target.checked : event.target.value\n    \n    return newState\n  }\n));\n\n\n//# sourceURL=webpack:///./src/actions/updateField.js?");

/***/ }),

/***/ "./src/components/CheckboxField.jsx":
/*!******************************************!*\
  !*** ./src/components/CheckboxField.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _hyperapp = __webpack_require__(/*! hyperapp */ \"./node_modules/hyperapp/src/index.js\");\n\nexports.default = function (_ref) {\n  var id = _ref.id,\n      title = _ref.title,\n      value = _ref.value,\n      disabled = _ref.disabled,\n      style = _ref.style,\n      onChange = _ref.onChange;\n  return function (state, actions) {\n    return (0, _hyperapp.h)(\n      \"div\",\n      { \"class\": \"form-group\" },\n      (0, _hyperapp.h)(\n        \"label\",\n        null,\n        title\n      ),\n      (0, _hyperapp.h)(\"input\", { \"class\": \"form-control\",\n        type: \"checkbox\",\n        id: id,\n        style: style,\n        checked: value ? 'checked' : '',\n        disabled: disabled ? 'disabled' : '',\n        onchange: onChange })\n    );\n  };\n}; // @jsx h\n\n//# sourceURL=webpack:///./src/components/CheckboxField.jsx?");

/***/ }),

/***/ "./src/components/Field.jsx":
/*!**********************************!*\
  !*** ./src/components/Field.jsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _hyperapp = __webpack_require__(/*! hyperapp */ \"./node_modules/hyperapp/src/index.js\");\n\nvar _StaticField = __webpack_require__(/*! ./StaticField.jsx */ \"./src/components/StaticField.jsx\");\n\nvar _StaticField2 = _interopRequireDefault(_StaticField);\n\nvar _TextField = __webpack_require__(/*! ./TextField.jsx */ \"./src/components/TextField.jsx\");\n\nvar _TextField2 = _interopRequireDefault(_TextField);\n\nvar _CheckboxField = __webpack_require__(/*! ./CheckboxField.jsx */ \"./src/components/CheckboxField.jsx\");\n\nvar _CheckboxField2 = _interopRequireDefault(_CheckboxField);\n\nvar _NumberField = __webpack_require__(/*! ./NumberField.jsx */ \"./src/components/NumberField.jsx\");\n\nvar _NumberField2 = _interopRequireDefault(_NumberField);\n\nvar _SelectField = __webpack_require__(/*! ./SelectField.jsx */ \"./src/components/SelectField.jsx\");\n\nvar _SelectField2 = _interopRequireDefault(_SelectField);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// @jsx h \n\nexports.default = function (_ref) {\n  var id = _ref.id,\n      type = _ref.type,\n      title = _ref.title,\n      value = _ref.value,\n      options = _ref.options,\n      disabled = _ref.disabled,\n      style = _ref.style,\n      onChange = _ref.onChange;\n  return function (state, actions) {\n    if (type === 'static') {\n      return (0, _hyperapp.h)(_StaticField2.default, { id: id,\n        title: title,\n        value: value,\n        style: style });\n    } else if (type === 'text') {\n      return (0, _hyperapp.h)(_TextField2.default, { id: id,\n        title: title,\n        value: value,\n        disabled: disabled,\n        style: style,\n        onChange: onChange });\n    } else if (type === 'checkbox') {\n      return (0, _hyperapp.h)(_CheckboxField2.default, { id: id,\n        title: title,\n        value: value,\n        disabled: disabled,\n        style: style,\n        onChange: onChange });\n    } else if (type === 'number') {\n      return (0, _hyperapp.h)(_NumberField2.default, { id: id,\n        title: title,\n        value: value,\n        disabled: disabled,\n        style: style,\n        onChange: onChange });\n    } else if (type === 'select') {\n      return (0, _hyperapp.h)(_SelectField2.default, { id: id,\n        title: title,\n        value: value,\n        disabled: disabled,\n        options: options,\n        style: style,\n        onChange: onChange });\n    }\n  };\n};\n\n//# sourceURL=webpack:///./src/components/Field.jsx?");

/***/ }),

/***/ "./src/components/Fields.jsx":
/*!***********************************!*\
  !*** ./src/components/Fields.jsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _hyperapp = __webpack_require__(/*! hyperapp */ \"./node_modules/hyperapp/src/index.js\");\n\nvar _Field = __webpack_require__(/*! ./Field.jsx */ \"./src/components/Field.jsx\");\n\nvar _Field2 = _interopRequireDefault(_Field);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// @jsx h \n\nexports.default = function (_ref) {\n  var model = _ref.model,\n      fields = _ref.fields,\n      onChange = _ref.onChange,\n      key = _ref.key;\n  return function (state, actions) {\n    return (0, _hyperapp.h)(\n      'div',\n      { 'class': 'form-inline' },\n      fields.map(function (_ref2, index) {\n        var id = _ref2.id,\n            type = _ref2.type,\n            title = _ref2.title,\n            value = _ref2.value,\n            options = _ref2.options,\n            disabled = _ref2.disabled,\n            style = _ref2.style,\n            render = _ref2.render;\n\n        if (type === 'divider') {\n          return (0, _hyperapp.h)('br', null);\n        }\n\n        return (0, _hyperapp.h)(_Field2.default, { id: id,\n          type: type,\n          title: title,\n          value: render ? render : model[id],\n          options: options,\n          disabled: disabled,\n          style: style,\n          onChange: type === 'static' ? undefined : function () {\n            return onChange({ id: id, key: key });\n          } });\n      })\n    );\n  };\n};\n\n//# sourceURL=webpack:///./src/components/Fields.jsx?");

/***/ }),

/***/ "./src/components/FieldsArray.jsx":
/*!****************************************!*\
  !*** ./src/components/FieldsArray.jsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _hyperapp = __webpack_require__(/*! hyperapp */ \"./node_modules/hyperapp/src/index.js\");\n\nvar _Field = __webpack_require__(/*! ./Field.jsx */ \"./src/components/Field.jsx\");\n\nvar _Field2 = _interopRequireDefault(_Field);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// @jsx h \n\nexports.default = function (_ref) {\n  var model = _ref.model,\n      fields = _ref.fields,\n      _onChange = _ref.onChange,\n      remove = _ref.remove,\n      key = _ref.key;\n  return function (state, actions) {\n    return (0, _hyperapp.h)(\n      'div',\n      { 'class': 'form-inline' },\n      model.map(function (row, index) {\n        return (0, _hyperapp.h)(\n          'div',\n          null,\n          fields.map(function (_ref2) {\n            var id = _ref2.id,\n                type = _ref2.type,\n                title = _ref2.title,\n                value = _ref2.value,\n                disabled = _ref2.disabled,\n                style = _ref2.style,\n                options = _ref2.options,\n                render = _ref2.render;\n\n            if (type === 'divider') {\n              return (0, _hyperapp.h)('br', null);\n            }\n\n            return (0, _hyperapp.h)(_Field2.default, { id: id,\n              type: type,\n              title: title,\n              value: render ? render : row[id],\n              options: options,\n              disabled: disabled,\n              style: style,\n              onChange: function onChange() {\n                return _onChange({ id: id, index: index, key: key });\n              } });\n          }),\n          (0, _hyperapp.h)(\n            'div',\n            { 'class': 'text-right' },\n            (0, _hyperapp.h)(\n              'button',\n              { type: 'button',\n                'class': 'btn btn-link',\n                onclick: function onclick() {\n                  return remove({ key: key, index: index });\n                } },\n              'Remove'\n            )\n          )\n        );\n      })\n    );\n  };\n};\n\n//# sourceURL=webpack:///./src/components/FieldsArray.jsx?");

/***/ }),

/***/ "./src/components/NumberField.jsx":
/*!****************************************!*\
  !*** ./src/components/NumberField.jsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _hyperapp = __webpack_require__(/*! hyperapp */ \"./node_modules/hyperapp/src/index.js\");\n\nexports.default = function (_ref) {\n  var id = _ref.id,\n      title = _ref.title,\n      value = _ref.value,\n      disabled = _ref.disabled,\n      style = _ref.style,\n      onChange = _ref.onChange;\n  return function (state, actions) {\n    return (0, _hyperapp.h)(\n      \"div\",\n      { \"class\": \"form-group\" },\n      (0, _hyperapp.h)(\n        \"label\",\n        null,\n        title\n      ),\n      (0, _hyperapp.h)(\"input\", { \"class\": \"form-control\",\n        type: \"number\",\n        id: id,\n        value: value,\n        style: style,\n        disabled: disabled ? 'disabled' : '',\n        onkeyup: onChange })\n    );\n  };\n}; // @jsx h\n\n//# sourceURL=webpack:///./src/components/NumberField.jsx?");

/***/ }),

/***/ "./src/components/SelectField.jsx":
/*!****************************************!*\
  !*** ./src/components/SelectField.jsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; // @jsx h \n\nvar _hyperapp = __webpack_require__(/*! hyperapp */ \"./node_modules/hyperapp/src/index.js\");\n\nexports.default = function (_ref) {\n  var id = _ref.id,\n      title = _ref.title,\n      value = _ref.value,\n      options = _ref.options,\n      disabled = _ref.disabled,\n      style = _ref.style,\n      onChange = _ref.onChange;\n  return function (state, actions) {\n    if (typeof options === 'function') {\n      options = options(state);\n    }\n\n    return (0, _hyperapp.h)(\n      'div',\n      { 'class': 'form-group' },\n      (0, _hyperapp.h)(\n        'label',\n        null,\n        title\n      ),\n      (0, _hyperapp.h)(\n        'select',\n        { 'class': 'form-control',\n          id: id,\n          style: style,\n          disabled: disabled ? 'disabled' : '',\n          onchange: onChange },\n        [].concat('', options).map(function (option) {\n          return (0, _hyperapp.h)(\n            'option',\n            { value: (typeof option === 'undefined' ? 'undefined' : _typeof(option)) === 'object' ? option.name : option,\n              selected: ((typeof option === 'undefined' ? 'undefined' : _typeof(option)) === 'object' ? option.name : option) === value ? 'selected' : '' },\n            (typeof option === 'undefined' ? 'undefined' : _typeof(option)) === 'object' ? option.name : option\n          );\n        })\n      )\n    );\n  };\n};\n\n//# sourceURL=webpack:///./src/components/SelectField.jsx?");

/***/ }),

/***/ "./src/components/StaticField.jsx":
/*!****************************************!*\
  !*** ./src/components/StaticField.jsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _hyperapp = __webpack_require__(/*! hyperapp */ \"./node_modules/hyperapp/src/index.js\");\n\nexports.default = function (_ref) {\n  var id = _ref.id,\n      title = _ref.title,\n      value = _ref.value,\n      style = _ref.style;\n  return function (state, actions) {\n    if (typeof value === 'function') {\n      value = value(state);\n    }\n\n    return (0, _hyperapp.h)(\n      'div',\n      { 'class': 'form-group' },\n      (0, _hyperapp.h)(\n        'label',\n        null,\n        title\n      ),\n      (0, _hyperapp.h)(\n        'span',\n        { 'class': 'static-field', style: style, id: id },\n        value\n      )\n    );\n  };\n}; // @jsx h\n\n//# sourceURL=webpack:///./src/components/StaticField.jsx?");

/***/ }),

/***/ "./src/components/TextField.jsx":
/*!**************************************!*\
  !*** ./src/components/TextField.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _hyperapp = __webpack_require__(/*! hyperapp */ \"./node_modules/hyperapp/src/index.js\");\n\nexports.default = function (_ref) {\n  var id = _ref.id,\n      title = _ref.title,\n      value = _ref.value,\n      disabled = _ref.disabled,\n      style = _ref.style,\n      onChange = _ref.onChange;\n  return function (state, actions) {\n    return (0, _hyperapp.h)(\n      \"div\",\n      { \"class\": \"form-group\" },\n      (0, _hyperapp.h)(\n        \"label\",\n        null,\n        title\n      ),\n      (0, _hyperapp.h)(\"input\", { \"class\": \"form-control\",\n        type: \"text\",\n        id: id,\n        value: value,\n        onkeyup: onChange,\n        style: style,\n        disabled: disabled ? 'disabled' : '' })\n    );\n  };\n}; // @jsx h\n\n//# sourceURL=webpack:///./src/components/TextField.jsx?");

/***/ }),

/***/ "./src/index.jsx":
/*!***********************!*\
  !*** ./src/index.jsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _addObjectToArray = __webpack_require__(/*! ./actions/addObjectToArray.js */ \"./src/actions/addObjectToArray.js\");\n\nvar _addObjectToArray2 = _interopRequireDefault(_addObjectToArray);\n\nvar _removeObjectFromArray = __webpack_require__(/*! ./actions/removeObjectFromArray.js */ \"./src/actions/removeObjectFromArray.js\");\n\nvar _removeObjectFromArray2 = _interopRequireDefault(_removeObjectFromArray);\n\nvar _updateArrayField = __webpack_require__(/*! ./actions/updateArrayField.js */ \"./src/actions/updateArrayField.js\");\n\nvar _updateArrayField2 = _interopRequireDefault(_updateArrayField);\n\nvar _updateField = __webpack_require__(/*! ./actions/updateField.js */ \"./src/actions/updateField.js\");\n\nvar _updateField2 = _interopRequireDefault(_updateField);\n\nvar _CheckboxField = __webpack_require__(/*! ./components/CheckboxField.jsx */ \"./src/components/CheckboxField.jsx\");\n\nvar _CheckboxField2 = _interopRequireDefault(_CheckboxField);\n\nvar _NumberField = __webpack_require__(/*! ./components/NumberField.jsx */ \"./src/components/NumberField.jsx\");\n\nvar _NumberField2 = _interopRequireDefault(_NumberField);\n\nvar _SelectField = __webpack_require__(/*! ./components/SelectField.jsx */ \"./src/components/SelectField.jsx\");\n\nvar _SelectField2 = _interopRequireDefault(_SelectField);\n\nvar _StaticField = __webpack_require__(/*! ./components/StaticField.jsx */ \"./src/components/StaticField.jsx\");\n\nvar _StaticField2 = _interopRequireDefault(_StaticField);\n\nvar _TextField = __webpack_require__(/*! ./components/TextField.jsx */ \"./src/components/TextField.jsx\");\n\nvar _TextField2 = _interopRequireDefault(_TextField);\n\nvar _Field = __webpack_require__(/*! ./components/Field.jsx */ \"./src/components/Field.jsx\");\n\nvar _Field2 = _interopRequireDefault(_Field);\n\nvar _Fields = __webpack_require__(/*! ./components/Fields.jsx */ \"./src/components/Fields.jsx\");\n\nvar _Fields2 = _interopRequireDefault(_Fields);\n\nvar _FieldsArray = __webpack_require__(/*! ./components/FieldsArray.jsx */ \"./src/components/FieldsArray.jsx\");\n\nvar _FieldsArray2 = _interopRequireDefault(_FieldsArray);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n  /* actions */\n  addObjectToArray: _addObjectToArray2.default,\n  removeObjectFromArray: _removeObjectFromArray2.default,\n  updateArrayField: _updateArrayField2.default,\n  updateField: _updateField2.default,\n\n  /* compoents */\n  CheckboxField: _CheckboxField2.default,\n  NumberField: _NumberField2.default,\n  SelectField: _SelectField2.default,\n  StaticField: _StaticField2.default,\n  TextField: _TextField2.default,\n  Field: _Field2.default,\n  Fields: _Fields2.default,\n  FieldsArray: _FieldsArray2.default\n};\n\n//# sourceURL=webpack:///./src/index.jsx?");

/***/ })

/******/ });