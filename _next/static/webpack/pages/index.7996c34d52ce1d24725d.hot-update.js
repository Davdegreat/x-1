webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Programs/Explorer.tsx":
/*!******************************************!*\
  !*** ./components/Programs/Explorer.tsx ***!
  \******************************************/
/*! exports provided: default, loaderOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loaderOptions\", function() { return loaderOptions; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Programs_Explorer_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/Programs/Explorer.module.scss */ \"./styles/Programs/Explorer.module.scss\");\n/* harmony import */ var _styles_Programs_Explorer_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Programs_Explorer_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_System_FileManager_FileManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/System/FileManager/FileManager */ \"./components/System/FileManager/FileManager.tsx\");\n/* harmony import */ var _components_System_FileManager_ListView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/System/FileManager/ListView */ \"./components/System/FileManager/ListView.tsx\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! path */ \"./node_modules/node-libs-browser/node_modules/path-browserify/index.js\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _contexts_ProcessManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/contexts/ProcessManager */ \"./contexts/ProcessManager.tsx\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/constants */ \"./utils/constants.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\n\nvar _jsxFileName = \"/Users/dustin/Git/x/components/Programs/Explorer.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar Explorer = function Explorer(_ref) {\n  _s();\n\n  var _ref$file = _ref.file;\n  _ref$file = _ref$file === void 0 ? {} : _ref$file;\n  var _ref$file$url = _ref$file.url,\n      url = _ref$file$url === void 0 ? _utils_constants__WEBPACK_IMPORTED_MODULE_6__[\"ROOT_DIRECTORY\"] : _ref$file$url;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_7__[\"useContext\"])(_contexts_ProcessManager__WEBPACK_IMPORTED_MODULE_5__[\"ProcessContext\"]),\n      title = _useContext.title;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n    className: _styles_Programs_Explorer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.explorer,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_System_FileManager_FileManager__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      path: url,\n      render: _components_System_FileManager_ListView__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n      onChange: function onChange(cwd) {\n        console.log('I AM HERE');\n\n        if (cwd) {\n          title('explorer', cwd === _utils_constants__WEBPACK_IMPORTED_MODULE_6__[\"ROOT_DIRECTORY\"] ? 'home' : Object(path__WEBPACK_IMPORTED_MODULE_4__[\"basename\"])(cwd));\n        }\n      },\n      details: true\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Explorer, \"sU2lDhjWEuv/fVIj+aHaoB5G5HM=\");\n\n_c = Explorer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Explorer);\nvar loaderOptions = {\n  width: 320,\n  height: 275,\n  bgColor: '#2b2d2f'\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Explorer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9ncmFtcy9FeHBsb3Jlci50c3g/ZmJkOSJdLCJuYW1lcyI6WyJFeHBsb3JlciIsImZpbGUiLCJ1cmwiLCJST09UX0RJUkVDVE9SWSIsInVzZUNvbnRleHQiLCJQcm9jZXNzQ29udGV4dCIsInRpdGxlIiwic3R5bGVzIiwiZXhwbG9yZXIiLCJMaXN0VmlldyIsImN3ZCIsImNvbnNvbGUiLCJsb2ciLCJiYXNlbmFtZSIsImxvYWRlck9wdGlvbnMiLCJ3aWR0aCIsImhlaWdodCIsImJnQ29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBZ0MsR0FBRyxTQUFuQ0EsUUFBbUMsT0FFbkM7QUFBQTs7QUFBQSx1QkFESkMsSUFDSTtBQUFBLHFDQUQ2QixFQUM3QjtBQUFBLGdDQURJQyxHQUNKO0FBQUEsTUFESUEsR0FDSiw4QkFEVUMsK0RBQ1Y7O0FBQUEsb0JBQ2NDLHdEQUFVLENBQUNDLHVFQUFELENBRHhCO0FBQUEsTUFDSUMsS0FESixlQUNJQSxLQURKOztBQUdKLHNCQUNFO0FBQVMsYUFBUyxFQUFFQyw0RUFBTSxDQUFDQyxRQUEzQjtBQUFBLDJCQUNFLHFFQUFDLGtGQUFEO0FBQ0UsVUFBSSxFQUFFTixHQURSO0FBRUUsWUFBTSxFQUFFTywrRUFGVjtBQUdFLGNBQVEsRUFBRSxrQkFBQ0MsR0FBRCxFQUFTO0FBQ2pCQyxlQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaOztBQUNBLFlBQUlGLEdBQUosRUFBUztBQUNQSixlQUFLLENBQUMsVUFBRCxFQUFhSSxHQUFHLEtBQUtQLCtEQUFSLEdBQXlCLE1BQXpCLEdBQWtDVSxxREFBUSxDQUFDSCxHQUFELENBQXZELENBQUw7QUFDRDtBQUNGLE9BUkg7QUFTRSxhQUFPO0FBVFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWVELENBcEJEOztHQUFNVixROztLQUFBQSxRO0FBc0JTQSx1RUFBZjtBQUVPLElBQU1jLGFBQWEsR0FBRztBQUMzQkMsT0FBSyxFQUFFLEdBRG9CO0FBRTNCQyxRQUFNLEVBQUUsR0FGbUI7QUFHM0JDLFNBQU8sRUFBRTtBQUhrQixDQUF0QiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUHJvZ3JhbXMvRXhwbG9yZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9Qcm9ncmFtcy9FeHBsb3Jlci5tb2R1bGUuc2Nzcyc7XG5cbmltcG9ydCB0eXBlIHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnQC90eXBlcy91dGlscy9wcm9ncmFtcyc7XG5cbmltcG9ydCBGaWxlTWFuYWdlciBmcm9tICdAL2NvbXBvbmVudHMvU3lzdGVtL0ZpbGVNYW5hZ2VyL0ZpbGVNYW5hZ2VyJztcbmltcG9ydCBMaXN0VmlldyBmcm9tICdAL2NvbXBvbmVudHMvU3lzdGVtL0ZpbGVNYW5hZ2VyL0xpc3RWaWV3JztcbmltcG9ydCB7IGJhc2VuYW1lIH0gZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBQcm9jZXNzQ29udGV4dCB9IGZyb20gJ0AvY29udGV4dHMvUHJvY2Vzc01hbmFnZXInO1xuaW1wb3J0IHsgUk9PVF9ESVJFQ1RPUlkgfSBmcm9tICdAL3V0aWxzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBFeHBsb3JlcjogUmVhY3QuRkM8QXBwQ29tcG9uZW50PiA9ICh7XG4gIGZpbGU6IHsgdXJsID0gUk9PVF9ESVJFQ1RPUlkgfSA9IHt9XG59KSA9PiB7XG4gIGNvbnN0IHsgdGl0bGUgfSA9IHVzZUNvbnRleHQoUHJvY2Vzc0NvbnRleHQpO1xuXG4gIHJldHVybiAoXG4gICAgPGFydGljbGUgY2xhc3NOYW1lPXtzdHlsZXMuZXhwbG9yZXJ9PlxuICAgICAgPEZpbGVNYW5hZ2VyXG4gICAgICAgIHBhdGg9e3VybH1cbiAgICAgICAgcmVuZGVyPXtMaXN0Vmlld31cbiAgICAgICAgb25DaGFuZ2U9eyhjd2QpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnSSBBTSBIRVJFJylcbiAgICAgICAgICBpZiAoY3dkKSB7XG4gICAgICAgICAgICB0aXRsZSgnZXhwbG9yZXInLCBjd2QgPT09IFJPT1RfRElSRUNUT1JZID8gJ2hvbWUnIDogYmFzZW5hbWUoY3dkKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9fVxuICAgICAgICBkZXRhaWxzXG4gICAgICAvPlxuICAgIDwvYXJ0aWNsZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEV4cGxvcmVyO1xuXG5leHBvcnQgY29uc3QgbG9hZGVyT3B0aW9ucyA9IHtcbiAgd2lkdGg6IDMyMCxcbiAgaGVpZ2h0OiAyNzUsXG4gIGJnQ29sb3I6ICcjMmIyZDJmJ1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Programs/Explorer.tsx\n");

/***/ })

})