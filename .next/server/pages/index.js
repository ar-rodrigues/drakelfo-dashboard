"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/components/loginButton.js":
/*!***************************************!*\
  !*** ./src/components/loginButton.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Component)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction Component() {\n    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (status === \"authenticated\") {\n            // Redirect to /dashboard after signing in\n            router.push(\"/dashboard\");\n        }\n    }, [\n        status,\n        router\n    ]);\n    const handleSignToggle = async ()=>{\n        if (session) {\n            // User is signed in, sign them out\n            await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signOut)();\n        } else {\n            // User is not signed in, sign them in\n            await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)();\n        }\n    };\n    if (status === \"loading\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/home/alisson/Documentos/drakelfo-dashboard/src/components/loginButton.js\",\n            lineNumber: 27,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: session ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"rounded-lg py-2 px-4 mx-2 bg-indigo-600 text-white\",\n                onClick: handleSignToggle,\n                children: \"Sign out\"\n            }, void 0, false, {\n                fileName: \"/home/alisson/Documentos/drakelfo-dashboard/src/components/loginButton.js\",\n                lineNumber: 34,\n                columnNumber: 11\n            }, this)\n        }, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                \"Not signed in \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/home/alisson/Documentos/drakelfo-dashboard/src/components/loginButton.js\",\n                    lineNumber: 43,\n                    columnNumber: 25\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"rounded-lg py-2 px-4 mx-2 bg-indigo-600 text-white\",\n                    onClick: handleSignToggle,\n                    children: \"Sign in\"\n                }, void 0, false, {\n                    fileName: \"/home/alisson/Documentos/drakelfo-dashboard/src/components/loginButton.js\",\n                    lineNumber: 44,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true)\n    }, void 0, false);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9sb2dpbkJ1dHRvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQThEO0FBQ3RCO0FBQ047QUFFbkIsU0FBU0ssWUFBWTtJQUNsQyxNQUFNLEVBQUVDLE1BQU1DLFFBQU8sRUFBRUMsT0FBTSxFQUFFLEdBQUdSLDJEQUFVQTtJQUM1QyxNQUFNUyxTQUFTTixzREFBU0E7SUFFeEJDLGdEQUFTQSxDQUFDLElBQU07UUFDZCxJQUFJSSxXQUFXLGlCQUFpQjtZQUM5QiwwQ0FBMEM7WUFDMUNDLE9BQU9DLElBQUksQ0FBQztRQUNkLENBQUM7SUFDSCxHQUFHO1FBQUNGO1FBQVFDO0tBQU87SUFFbkIsTUFBTUUsbUJBQW1CLFVBQVk7UUFDbkMsSUFBSUosU0FBUztZQUNYLG1DQUFtQztZQUNuQyxNQUFNTCx3REFBT0E7UUFDZixPQUFPO1lBQ0wsc0NBQXNDO1lBQ3RDLE1BQU1ELHVEQUFNQTtRQUNkLENBQUM7SUFDSDtJQUVBLElBQUlPLFdBQVcsV0FBVztRQUN4QixxQkFBTyw4REFBQ0k7c0JBQUk7Ozs7OztJQUNkLENBQUM7SUFFRCxxQkFDRTtrQkFDR0wsd0JBQ0M7c0JBQ0UsNEVBQUNNO2dCQUNDQyxXQUFVO2dCQUNWQyxTQUFTSjswQkFDVjs7Ozs7OzBDQUtIOztnQkFBRTs4QkFDYyw4REFBQ0s7Ozs7OzhCQUNmLDhEQUFDSDtvQkFDQ0MsV0FBVTtvQkFDVkMsU0FBU0o7OEJBQ1Y7Ozs7Ozs7d0JBSUo7O0FBR1AsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RyYWtlbGZvLWRhc2hib2FyZC8uL3NyYy9jb21wb25lbnRzL2xvZ2luQnV0dG9uLmpzPzk3YjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU2Vzc2lvbiwgc2lnbkluLCBzaWduT3V0IH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29tcG9uZW50KCkge1xuICBjb25zdCB7IGRhdGE6IHNlc3Npb24sIHN0YXR1cyB9ID0gdXNlU2Vzc2lvbigpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzdGF0dXMgPT09IFwiYXV0aGVudGljYXRlZFwiKSB7XG4gICAgICAvLyBSZWRpcmVjdCB0byAvZGFzaGJvYXJkIGFmdGVyIHNpZ25pbmcgaW5cbiAgICAgIHJvdXRlci5wdXNoKFwiL2Rhc2hib2FyZFwiKTtcbiAgICB9XG4gIH0sIFtzdGF0dXMsIHJvdXRlcl0pO1xuXG4gIGNvbnN0IGhhbmRsZVNpZ25Ub2dnbGUgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKHNlc3Npb24pIHtcbiAgICAgIC8vIFVzZXIgaXMgc2lnbmVkIGluLCBzaWduIHRoZW0gb3V0XG4gICAgICBhd2FpdCBzaWduT3V0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFVzZXIgaXMgbm90IHNpZ25lZCBpbiwgc2lnbiB0aGVtIGluXG4gICAgICBhd2FpdCBzaWduSW4oKTtcbiAgICB9XG4gIH07XG5cbiAgaWYgKHN0YXR1cyA9PT0gXCJsb2FkaW5nXCIpIHtcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3Nlc3Npb24gPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBweS0yIHB4LTQgbXgtMiBiZy1pbmRpZ28tNjAwIHRleHQtd2hpdGVcIlxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2lnblRvZ2dsZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBTaWduIG91dFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8Lz5cbiAgICAgICkgOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgTm90IHNpZ25lZCBpbiA8YnIgLz5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIHB5LTIgcHgtNCBteC0yIGJnLWluZGlnby02MDAgdGV4dC13aGl0ZVwiXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTaWduVG9nZ2xlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNpZ24gaW5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVNlc3Npb24iLCJzaWduSW4iLCJzaWduT3V0IiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiQ29tcG9uZW50IiwiZGF0YSIsInNlc3Npb24iLCJzdGF0dXMiLCJyb3V0ZXIiLCJwdXNoIiwiaGFuZGxlU2lnblRvZ2dsZSIsImRpdiIsImJ1dHRvbiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/loginButton.js\n");

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_loginButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/loginButton */ \"./src/components/loginButton.js\");\n\n\n\n//const routeUrl = process.env.ROUTE_URL\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Drakelfo Dashboard\"\n                    }, void 0, false, {\n                        fileName: \"/home/alisson/Documentos/drakelfo-dashboard/src/pages/index.js\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/home/alisson/Documentos/drakelfo-dashboard/src/pages/index.js\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/home/alisson/Documentos/drakelfo-dashboard/src/pages/index.js\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/home/alisson/Documentos/drakelfo-dashboard/src/pages/index.js\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/alisson/Documentos/drakelfo-dashboard/src/pages/index.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"container mx-auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_loginButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/alisson/Documentos/drakelfo-dashboard/src/pages/index.js\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/alisson/Documentos/drakelfo-dashboard/src/pages/index.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE2QjtBQUNxQjtBQUVsRCx3Q0FBd0M7QUFHekIsU0FBU0UsT0FBTztJQUc3QixxQkFDRTs7MEJBQ0UsOERBQUNGLGtEQUFJQTs7a0NBQ0gsOERBQUNHO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxNQUFLO3dCQUFjQyxTQUFROzs7Ozs7a0NBQ2pDLDhEQUFDRjt3QkFBS0MsTUFBSzt3QkFBV0MsU0FBUTs7Ozs7O2tDQUM5Qiw4REFBQ0M7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7Ozs7Ozs7Ozs7OzswQkFFeEIsOERBQUNDO2dCQUFLQyxXQUFVOzBCQUNkLDRFQUFDViwrREFBV0E7Ozs7Ozs7Ozs7OztBQU1wQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZHJha2VsZm8tZGFzaGJvYXJkLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQwODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBMb2dpbkJ1dHRvbiBmcm9tICdAL2NvbXBvbmVudHMvbG9naW5CdXR0b24nXG5cbi8vY29uc3Qgcm91dGVVcmwgPSBwcm9jZXNzLmVudi5ST1VURV9VUkxcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkRyYWtlbGZvIERhc2hib2FyZDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG9cIj5cbiAgICAgICAgPExvZ2luQnV0dG9uIC8+XG4gICAgICAgIFxuXG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIkxvZ2luQnV0dG9uIiwiSG9tZSIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.js"));
module.exports = __webpack_exports__;

})();