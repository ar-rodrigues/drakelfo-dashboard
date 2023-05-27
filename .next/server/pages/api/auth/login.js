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
exports.id = "pages/api/auth/login";
exports.ids = ["pages/api/auth/login"];
exports.modules = {

/***/ "(api)/./src/pages/api/auth/login.js":
/*!*************************************!*\
  !*** ./src/pages/api/auth/login.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ login)\n/* harmony export */ });\n// pages/api/auth/login.js\n// Define an array of users with their credentials\nconst users = JSON.parse(process.env.USERS);\nconsole.log(users);\nasync function login(req, res) {\n    if (req.method === \"POST\") {\n        const { username , password  } = req.body;\n        // Find the user based on the provided username\n        const user = users.find((u)=>u.username === username);\n        if (user && user.password === password) {\n            // Authentication succeeded\n            return res.status(200).json(user);\n        } else {\n            // Authentication failed\n            return res.status(401).json({\n                message: \"Invalid credentials\"\n            });\n        }\n    } else {\n        return res.status(405).json({\n            message: \"Method Not Allowed\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvbG9naW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDBCQUEwQjtBQUUxQixrREFBa0Q7QUFDbEQsTUFBTUEsUUFBUUMsS0FBS0MsS0FBSyxDQUFDQyxRQUFRQyxHQUFHLENBQUNDLEtBQUs7QUFDMUNDLFFBQVFDLEdBQUcsQ0FBQ1A7QUFFRyxlQUFlUSxNQUFNQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM1QyxJQUFJRCxJQUFJRSxNQUFNLEtBQUssUUFBUTtRQUN6QixNQUFNLEVBQUVDLFNBQVEsRUFBRUMsU0FBUSxFQUFFLEdBQUdKLElBQUlLLElBQUk7UUFFdkMsK0NBQStDO1FBQy9DLE1BQU1DLE9BQU9mLE1BQU1nQixJQUFJLENBQUNDLENBQUFBLElBQUtBLEVBQUVMLFFBQVEsS0FBS0E7UUFFNUMsSUFBSUcsUUFBUUEsS0FBS0YsUUFBUSxLQUFLQSxVQUFVO1lBQ3RDLDJCQUEyQjtZQUMzQixPQUFPSCxJQUFJUSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDSjtRQUM5QixPQUFPO1lBQ0wsd0JBQXdCO1lBQ3hCLE9BQU9MLElBQUlRLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVDLFNBQVM7WUFBc0I7UUFDL0QsQ0FBQztJQUNILE9BQU87UUFDTCxPQUFPVixJQUFJUSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLFNBQVM7UUFBcUI7SUFDOUQsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcmFrZWxmby1kYXNoYm9hcmQvLi9zcmMvcGFnZXMvYXBpL2F1dGgvbG9naW4uanM/N2RmYiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9hcGkvYXV0aC9sb2dpbi5qc1xuXG4vLyBEZWZpbmUgYW4gYXJyYXkgb2YgdXNlcnMgd2l0aCB0aGVpciBjcmVkZW50aWFsc1xuY29uc3QgdXNlcnMgPSBKU09OLnBhcnNlKHByb2Nlc3MuZW52LlVTRVJTKTtcbmNvbnNvbGUubG9nKHVzZXJzKVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBsb2dpbihyZXEsIHJlcykge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgY29uc3QgeyB1c2VybmFtZSwgcGFzc3dvcmQgfSA9IHJlcS5ib2R5O1xuICAgIFxuICAgIC8vIEZpbmQgdGhlIHVzZXIgYmFzZWQgb24gdGhlIHByb3ZpZGVkIHVzZXJuYW1lXG4gICAgY29uc3QgdXNlciA9IHVzZXJzLmZpbmQodSA9PiB1LnVzZXJuYW1lID09PSB1c2VybmFtZSk7XG5cbiAgICBpZiAodXNlciAmJiB1c2VyLnBhc3N3b3JkID09PSBwYXNzd29yZCkge1xuICAgICAgLy8gQXV0aGVudGljYXRpb24gc3VjY2VlZGVkXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24odXNlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEF1dGhlbnRpY2F0aW9uIGZhaWxlZFxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgbWVzc2FnZTogJ0ludmFsaWQgY3JlZGVudGlhbHMnIH0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBtZXNzYWdlOiAnTWV0aG9kIE5vdCBBbGxvd2VkJyB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbInVzZXJzIiwiSlNPTiIsInBhcnNlIiwicHJvY2VzcyIsImVudiIsIlVTRVJTIiwiY29uc29sZSIsImxvZyIsImxvZ2luIiwicmVxIiwicmVzIiwibWV0aG9kIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImJvZHkiLCJ1c2VyIiwiZmluZCIsInUiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/login.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/login.js"));
module.exports = __webpack_exports__;

})();