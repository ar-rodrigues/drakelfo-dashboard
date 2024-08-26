"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/product.js":
/*!***********************************!*\
  !*** ./src/components/product.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Product; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst noImage = \"/noimage.jpg\";\nconst url = \"http://localhost:3000/api?id=\";\nconst route = \"http://localhost:3000\";\nconsole.log(\"this is the route\", route);\nfunction Product(param) {\n    let { producto , setData , setShouldFetchData  } = param;\n    _s();\n    const [product, setProduct] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(producto);\n    const { descripcion , sku , imgUrl , _id: id  } = product;\n    const [edit, setEdit] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleChange = async (e, id)=>{\n        const { value , name  } = e.target;\n        setProduct((prevProduct)=>({\n                ...prevProduct,\n                [name]: value\n            }));\n        await saveProduct(id, {\n            ...product,\n            [name]: value\n        });\n        setData((prevData)=>prevData.map((p)=>p._id === id ? product : p));\n        setShouldFetchData(true);\n    };\n    const saveProduct = async (productId, updateData)=>{\n        try {\n            //console.log(productId)\n            const response = await fetch(url + productId, {\n                method: \"PUT\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(updateData)\n            });\n            if (response.ok) {\n                console.log(\"Product updated successfully\");\n            // Handle success, e.g., show a success message to the user\n            } else {\n                console.error(\"Failed to update product\");\n            // Handle error, e.g., show an error message to the user\n            }\n        } catch (error) {\n            console.error(\"Failed to update product\", error);\n        // Handle error, e.g., show an error message to the user\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center relative bg-white px-4 pt-5 pb-3 shadow-xl ring-1 ring-gray-900/5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center space-x-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex-shrink-0\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"w-10 h-10 rounded-full\",\n                                    width: 50,\n                                    height: 50,\n                                    alt: \"image of \".concat(descripcion),\n                                    src: imgUrl ? imgUrl : noImage,\n                                    quality: 50,\n                                    loading: \"lazy\"\n                                }, void 0, false, {\n                                    fileName: \"/home/alisson/Documentos/drakelfo-dashboard/src/components/product.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/alisson/Documentos/drakelfo-dashboard/src/components/product.js\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex-1 min-w-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"text-sm font-medium text-gray-900 truncate dark:text-black break-words\",\n                                        children: descripcion\n                                    }, void 0, false, {\n                                        fileName: \"/home/alisson/Documentos/drakelfo-dashboard/src/components/product.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-sm text-gray-500 truncate dark:text-gray-400\",\n                                        children: sku\n                                    }, void 0, false, {\n                                        fileName: \"/home/alisson/Documentos/drakelfo-dashboard/src/components/product.js\",\n                                        lineNumber: 70,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/alisson/Documentos/drakelfo-dashboard/src/components/product.js\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/alisson/Documentos/drakelfo-dashboard/src/components/product.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute right-4 flex space-x-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"btn btn-xs btn-primary\",\n                            onClick: ()=>setEdit(!edit),\n                            children: \"Edit\"\n                        }, void 0, false, {\n                            fileName: \"/home/alisson/Documentos/drakelfo-dashboard/src/components/product.js\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/alisson/Documentos/drakelfo-dashboard/src/components/product.js\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/alisson/Documentos/drakelfo-dashboard/src/components/product.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            edit && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: \"flex flex-col text-neutral-800\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            id: \"descripcion-\".concat(id),\n                            type: \"text\",\n                            name: \"descripcion\",\n                            defaultValue: descripcion,\n                            className: \"bg-white \",\n                            onChange: (e)=>handleChange(e, id)\n                        }, void 0, false, {\n                            fileName: \"/home/alisson/Documentos/drakelfo-dashboard/src/components/product.js\",\n                            lineNumber: 91,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            id: \"sku-\".concat(id),\n                            type: \"text\",\n                            name: \"sku\",\n                            defaultValue: sku,\n                            className: \"bg-white \",\n                            onChange: (e)=>handleChange(e, id)\n                        }, void 0, false, {\n                            fileName: \"/home/alisson/Documentos/drakelfo-dashboard/src/components/product.js\",\n                            lineNumber: 99,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            id: \"imgUrl-\".concat(id),\n                            type: \"text\",\n                            name: \"imgUrl\",\n                            defaultValue: imgUrl,\n                            className: \"bg-white \",\n                            onChange: (e)=>handleChange(e, id)\n                        }, void 0, false, {\n                            fileName: \"/home/alisson/Documentos/drakelfo-dashboard/src/components/product.js\",\n                            lineNumber: 107,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/alisson/Documentos/drakelfo-dashboard/src/components/product.js\",\n                    lineNumber: 90,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/alisson/Documentos/drakelfo-dashboard/src/components/product.js\",\n                lineNumber: 89,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/alisson/Documentos/drakelfo-dashboard/src/components/product.js\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n}\n_s(Product, \"WMa3FS6emMY49R3bbN01QHfy+dY=\");\n_c = Product;\nvar _c;\n$RefreshReg$(_c, \"Product\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ckMsSUFBSSxPQUFVLE9BQUhBOzRCQUNYc0MsTUFBSzs0QkFDTGhDLE1BQUs7NEJBQ0xpQyxjQUFjMUM7NEJBQ2Q0QixXQUFVOzRCQUNWZSxVQUFVLENBQUNwQyxJQUFJRCxhQUFhQyxHQUFFSjs7Ozs7O3NDQUVoQyw4REFBQ3FDOzRCQUNDckMsSUFBSSxVQUFhLE9BQUhBOzRCQUNkc0MsTUFBSzs0QkFDTGhDLE1BQUs7NEJBQ0xpQyxjQUFjekM7NEJBQ2QyQixXQUFVOzRCQUNWZSxVQUFVLENBQUNwQyxJQUFJRCxhQUFhQyxHQUFHSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPN0MsQ0FBQztHQTVHdUJWO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3Byb2R1Y3QuanM/M2JjZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cblxuY29uc3Qgbm9JbWFnZSA9IFwiL25vaW1hZ2UuanBnXCJcbmNvbnN0IHVybCA9IGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpP2lkPWBcblxuY29uc3Qgcm91dGUgPSBwcm9jZXNzLmVudi5ST1VURV9VUkxcbmNvbnNvbGUubG9nKFwidGhpcyBpcyB0aGUgcm91dGVcIixyb3V0ZSlcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3QoeyBwcm9kdWN0bywgc2V0RGF0YSwgc2V0U2hvdWxkRmV0Y2hEYXRhIH0pIHtcbiAgY29uc3QgW3Byb2R1Y3QsIHNldFByb2R1Y3RdID0gdXNlU3RhdGUocHJvZHVjdG8pXG4gIGNvbnN0IHsgZGVzY3JpcGNpb24sIHNrdSwgaW1nVXJsLCBfaWQ6aWQgfSA9IHByb2R1Y3Q7XG4gIGNvbnN0IFtlZGl0LCBzZXRFZGl0XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGFzeW5jIChlLGlkKT0+e1xuICAgIGNvbnN0IHt2YWx1ZSwgbmFtZX0gPSBlLnRhcmdldFxuICAgIHNldFByb2R1Y3QoKHByZXZQcm9kdWN0KT0+KHsuLi5wcmV2UHJvZHVjdCwgW25hbWVdOnZhbHVlIH0pKVxuICAgIGF3YWl0IHNhdmVQcm9kdWN0KGlkLCB7Li4ucHJvZHVjdCwgW25hbWVdOiB2YWx1ZX0pXG4gICAgc2V0RGF0YShwcmV2RGF0YSA9PiBwcmV2RGF0YS5tYXAocCA9PiBwLl9pZCA9PT0gaWQgPyBwcm9kdWN0IDogcCkpO1xuICAgIHNldFNob3VsZEZldGNoRGF0YSh0cnVlKVxuICB9XG5cbiAgY29uc3Qgc2F2ZVByb2R1Y3QgPSBhc3luYyAocHJvZHVjdElkLCB1cGRhdGVEYXRhKT0+e1xuICAgIFxuICAgIHRyeSB7XG4gICAgICAvL2NvbnNvbGUubG9nKHByb2R1Y3RJZClcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsK3Byb2R1Y3RJZCwge1xuICAgICAgICBtZXRob2Q6IFwiUFVUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1cGRhdGVEYXRhKVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlByb2R1Y3QgdXBkYXRlZCBzdWNjZXNzZnVsbHlcIik7XG4gICAgICAgIC8vIEhhbmRsZSBzdWNjZXNzLCBlLmcuLCBzaG93IGEgc3VjY2VzcyBtZXNzYWdlIHRvIHRoZSB1c2VyXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHVwZGF0ZSBwcm9kdWN0XCIpO1xuICAgICAgICAvLyBIYW5kbGUgZXJyb3IsIGUuZy4sIHNob3cgYW4gZXJyb3IgbWVzc2FnZSB0byB0aGUgdXNlclxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHVwZGF0ZSBwcm9kdWN0XCIsIGVycm9yKTtcbiAgICAgIC8vIEhhbmRsZSBlcnJvciwgZS5nLiwgc2hvdyBhbiBlcnJvciBtZXNzYWdlIHRvIHRoZSB1c2VyXG4gICAgfVxuICB9XG5cbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgcmVsYXRpdmUgYmctd2hpdGUgcHgtNCBwdC01IHBiLTMgc2hhZG93LXhsIHJpbmctMSByaW5nLWdyYXktOTAwLzVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTBcIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMCBoLTEwIHJvdW5kZWQtZnVsbFwiXG4gICAgICAgICAgICAgIHdpZHRoPXs1MH1cbiAgICAgICAgICAgICAgaGVpZ2h0PXs1MH1cbiAgICAgICAgICAgICAgYWx0PXtgaW1hZ2Ugb2YgJHtkZXNjcmlwY2lvbn1gfVxuICAgICAgICAgICAgICBzcmM9e2ltZ1VybCA/IGltZ1VybCA6IG5vSW1hZ2V9XG4gICAgICAgICAgICAgIHF1YWxpdHk9ezUwfVxuICAgICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIG1pbi13LTJcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgdHJ1bmNhdGUgZGFyazp0ZXh0LWJsYWNrIGJyZWFrLXdvcmRzXCI+XG4gICAgICAgICAgICAgIHtkZXNjcmlwY2lvbn1cbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDAgdHJ1bmNhdGUgZGFyazp0ZXh0LWdyYXktNDAwXCI+XG4gICAgICAgICAgICAgIHtza3V9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtNCBmbGV4IHNwYWNlLXgtMlwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4teHMgYnRuLXByaW1hcnlcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RWRpdCghZWRpdCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgRWRpdFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIHsgLy88YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4teHMgYnRuLWRhbmdlclwiPkRlbGV0ZTwvYnV0dG9uPlxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAge2VkaXQgJiYgKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdGV4dC1uZXV0cmFsLTgwMFwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGlkPXtgZGVzY3JpcGNpb24tJHtpZH1gfVxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwY2lvblwiXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZGVzY3JpcGNpb259XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIFwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PmhhbmRsZUNoYW5nZShlLGlkKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgIGlkPXtgc2t1LSR7aWR9YH0gXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgICAgIG5hbWU9XCJza3VcIiBcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtza3V9IFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSBcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT5oYW5kbGVDaGFuZ2UoZSxpZCl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgaWQ9e2BpbWdVcmwtJHtpZH1gfVxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJpbWdVcmxcIlxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2ltZ1VybH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+aGFuZGxlQ2hhbmdlKGUsIGlkKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJub0ltYWdlIiwidXJsIiwicm91dGUiLCJwcm9jZXNzIiwiZW52IiwiUk9VVEVfVVJMIiwiY29uc29sZSIsImxvZyIsIlByb2R1Y3QiLCJwcm9kdWN0byIsInNldERhdGEiLCJzZXRTaG91bGRGZXRjaERhdGEiLCJwcm9kdWN0Iiwic2V0UHJvZHVjdCIsImRlc2NyaXBjaW9uIiwic2t1IiwiaW1nVXJsIiwiX2lkIiwiaWQiLCJlZGl0Iiwic2V0RWRpdCIsImhhbmRsZUNoYW5nZSIsImUiLCJ2YWx1ZSIsIm5hbWUiLCJ0YXJnZXQiLCJwcmV2UHJvZHVjdCIsInNhdmVQcm9kdWN0IiwicHJldkRhdGEiLCJtYXAiLCJwIiwicHJvZHVjdElkIiwidXBkYXRlRGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJzcmMiLCJxdWFsaXR5IiwibG9hZGluZyIsImgxIiwiYnV0dG9uIiwib25DbGljayIsImZvcm0iLCJpbnB1dCIsInR5cGUiLCJkZWZhdWx0VmFsdWUiLCJvbkNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/product.js\n"));

/***/ })

});