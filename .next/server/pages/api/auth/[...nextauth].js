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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "(api)/./src/pages/api/auth/[...nextauth].js":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst authOptions = {\n    // Configure one or more authentication providers\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default()({\n            // The name to display on the sign in form (e.g. 'Sign in with...')\n            name: \"Credentials\",\n            // The credentials is used to generate a suitable form on the sign in page.\n            // You can specify whatever fields you are expecting to be submitted.\n            // e.g. domain, username, password, 2FA token, etc.\n            // You can pass any HTML attribute to the <input> tag through the object.\n            credentials: {\n                username: {\n                    label: \"Username\",\n                    type: \"text\",\n                    placeholder: \"username\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials, req) {\n                const res = await fetch(\"https://drakelfo-dashboard.vercel.app/api/auth/login\", {\n                    method: \"POST\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify({\n                        username: credentials?.username,\n                        password: credentials?.password\n                    })\n                });\n                if (res.ok) {\n                    const user = await res.json();\n                    console.log(user);\n                    return user;\n                } else {\n                    const error = await res.json();\n                    throw new Error(error.message);\n                }\n            }\n        })\n    ],\n    secret: process.env.SECRET,\n    session: {\n        strategy: \"jwt\",\n        maxAge: 365 * 24 * 60 * 60\n    },\n    callbacks: {\n        async session ({ session , token , user  }) {\n            if (user) {\n                session.user = user;\n            }\n            return session;\n        },\n        async jwt ({ token , user  }) {\n            return {\n                ...token,\n                ...user\n            };\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBaUM7QUFDaUM7QUFFM0QsTUFBTUUsY0FBYztJQUN6QixpREFBaUQ7SUFDakRDLFdBQVc7UUFDVEYsc0VBQW1CQSxDQUFDO1lBQ2xCLG1FQUFtRTtZQUNuRUcsTUFBTTtZQUNOLDJFQUEyRTtZQUMzRSxxRUFBcUU7WUFDckUsbURBQW1EO1lBQ25ELHlFQUF5RTtZQUN6RUMsYUFBYTtnQkFDWEMsVUFBVTtvQkFBRUMsT0FBTztvQkFBWUMsTUFBTTtvQkFBUUMsYUFBYTtnQkFBVztnQkFDckVDLFVBQVU7b0JBQUVILE9BQU87b0JBQVlDLE1BQU07Z0JBQVc7WUFDbEQ7WUFDQSxNQUFNRyxXQUFVTixXQUFXLEVBQUVPLEdBQUcsRUFBRTtnQkFDaEMsTUFBTUMsTUFBTSxNQUFNQyxNQUFNLHdEQUF3RDtvQkFDOUVDLFFBQVE7b0JBQ1JDLFNBQVM7d0JBQ1AsZ0JBQWdCO29CQUNsQjtvQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO3dCQUNuQmIsVUFBVUQsYUFBYUM7d0JBQ3ZCSSxVQUFVTCxhQUFhSztvQkFDekI7Z0JBQ0Y7Z0JBRUEsSUFBSUcsSUFBSU8sRUFBRSxFQUFFO29CQUNWLE1BQU1DLE9BQU8sTUFBTVIsSUFBSVMsSUFBSTtvQkFDM0JDLFFBQVFDLEdBQUcsQ0FBQ0g7b0JBQ1osT0FBT0E7Z0JBQ1QsT0FBTztvQkFDTCxNQUFNSSxRQUFRLE1BQU1aLElBQUlTLElBQUk7b0JBQzVCLE1BQU0sSUFBSUksTUFBTUQsTUFBTUUsT0FBTyxFQUFFO2dCQUNqQyxDQUFDO1lBQ0g7UUFDRjtLQUNEO0lBQ0RDLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsTUFBTTtJQUMxQkMsU0FBUztRQUNQQyxVQUFVO1FBQ1ZDLFFBQVEsTUFBTSxLQUFLLEtBQUs7SUFDMUI7SUFDQUMsV0FBVztRQUNULE1BQU1ILFNBQVEsRUFBRUEsUUFBTyxFQUFFSSxNQUFLLEVBQUVmLEtBQUksRUFBRSxFQUFFO1lBQ3RDLElBQUlBLE1BQU07Z0JBQ1JXLFFBQVFYLElBQUksR0FBR0E7WUFDakIsQ0FBQztZQUNELE9BQU9XO1FBQ1Q7UUFDQSxNQUFNSyxLQUFJLEVBQUVELE1BQUssRUFBRWYsS0FBSSxFQUFFLEVBQUU7WUFDekIsT0FBTztnQkFBRSxHQUFHZSxLQUFLO2dCQUFFLEdBQUdmLElBQUk7WUFBQztRQUM3QjtJQUNGO0FBQ0YsRUFBRTtBQUVGLGlFQUFlckIsZ0RBQVFBLENBQUNFLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcmFrZWxmby1kYXNoYm9hcmQvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz83OGFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xuXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnMgPSB7XG4gIC8vIENvbmZpZ3VyZSBvbmUgb3IgbW9yZSBhdXRoZW50aWNhdGlvbiBwcm92aWRlcnNcbiAgcHJvdmlkZXJzOiBbXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XG4gICAgICAvLyBUaGUgbmFtZSB0byBkaXNwbGF5IG9uIHRoZSBzaWduIGluIGZvcm0gKGUuZy4gJ1NpZ24gaW4gd2l0aC4uLicpXG4gICAgICBuYW1lOiBcIkNyZWRlbnRpYWxzXCIsXG4gICAgICAvLyBUaGUgY3JlZGVudGlhbHMgaXMgdXNlZCB0byBnZW5lcmF0ZSBhIHN1aXRhYmxlIGZvcm0gb24gdGhlIHNpZ24gaW4gcGFnZS5cbiAgICAgIC8vIFlvdSBjYW4gc3BlY2lmeSB3aGF0ZXZlciBmaWVsZHMgeW91IGFyZSBleHBlY3RpbmcgdG8gYmUgc3VibWl0dGVkLlxuICAgICAgLy8gZS5nLiBkb21haW4sIHVzZXJuYW1lLCBwYXNzd29yZCwgMkZBIHRva2VuLCBldGMuXG4gICAgICAvLyBZb3UgY2FuIHBhc3MgYW55IEhUTUwgYXR0cmlidXRlIHRvIHRoZSA8aW5wdXQ+IHRhZyB0aHJvdWdoIHRoZSBvYmplY3QuXG4gICAgICBjcmVkZW50aWFsczoge1xuICAgICAgICB1c2VybmFtZTogeyBsYWJlbDogXCJVc2VybmFtZVwiLCB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwidXNlcm5hbWVcIiB9LFxuICAgICAgICBwYXNzd29yZDogeyBsYWJlbDogXCJQYXNzd29yZFwiLCB0eXBlOiBcInBhc3N3b3JkXCIgfSxcbiAgICAgIH0sXG4gICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMsIHJlcSkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vZHJha2VsZm8tZGFzaGJvYXJkLnZlcmNlbC5hcHAvYXBpL2F1dGgvbG9naW5cIiwge1xuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICB1c2VybmFtZTogY3JlZGVudGlhbHM/LnVzZXJuYW1lLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IGNyZWRlbnRpYWxzPy5wYXNzd29yZCxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHJlcy5vaykge1xuICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXIpO1xuICAgICAgICAgIHJldHVybiB1c2VyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGVycm9yID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuU0VDUkVULFxuICBzZXNzaW9uOiB7XG4gICAgc3RyYXRlZ3k6IFwiand0XCIsXG4gICAgbWF4QWdlOiAzNjUgKiAyNCAqIDYwICogNjAsIC8vIDM2NSBEYXlzXG4gIH0sXG4gIGNhbGxiYWNrczoge1xuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiwgdXNlciB9KSB7XG4gICAgICBpZiAodXNlcikge1xuICAgICAgICBzZXNzaW9uLnVzZXIgPSB1c2VyO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNlc3Npb247XG4gICAgfSxcbiAgICBhc3luYyBqd3QoeyB0b2tlbiwgdXNlciB9KSB7XG4gICAgICByZXR1cm4geyAuLi50b2tlbiwgLi4udXNlciB9O1xuICAgIH0sXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aChhdXRoT3B0aW9ucyk7XG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiYXV0aE9wdGlvbnMiLCJwcm92aWRlcnMiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJ1c2VybmFtZSIsImxhYmVsIiwidHlwZSIsInBsYWNlaG9sZGVyIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJyZXEiLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwidXNlciIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJFcnJvciIsIm1lc3NhZ2UiLCJzZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiU0VDUkVUIiwic2Vzc2lvbiIsInN0cmF0ZWd5IiwibWF4QWdlIiwiY2FsbGJhY2tzIiwidG9rZW4iLCJqd3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();