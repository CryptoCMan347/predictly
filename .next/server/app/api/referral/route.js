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
exports.id = "app/api/referral/route";
exports.ids = ["app/api/referral/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Freferral%2Froute&page=%2Fapi%2Freferral%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Freferral%2Froute.ts&appDir=C%3A%5CUsers%5CChristian%20Domingues%5Ccursor_projects%5CPredictly%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CChristian%20Domingues%5Ccursor_projects%5CPredictly&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Freferral%2Froute&page=%2Fapi%2Freferral%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Freferral%2Froute.ts&appDir=C%3A%5CUsers%5CChristian%20Domingues%5Ccursor_projects%5CPredictly%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CChristian%20Domingues%5Ccursor_projects%5CPredictly&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Christian_Domingues_cursor_projects_Predictly_src_app_api_referral_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/referral/route.ts */ \"(rsc)/./src/app/api/referral/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/referral/route\",\n        pathname: \"/api/referral\",\n        filename: \"route\",\n        bundlePath: \"app/api/referral/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Christian Domingues\\\\cursor_projects\\\\Predictly\\\\src\\\\app\\\\api\\\\referral\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_Christian_Domingues_cursor_projects_Predictly_src_app_api_referral_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/referral/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZyZWZlcnJhbCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGcmVmZXJyYWwlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZyZWZlcnJhbCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNDaHJpc3RpYW4lMjBEb21pbmd1ZXMlNUNjdXJzb3JfcHJvamVjdHMlNUNQcmVkaWN0bHklNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q0NocmlzdGlhbiUyMERvbWluZ3VlcyU1Q2N1cnNvcl9wcm9qZWN0cyU1Q1ByZWRpY3RseSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDNkM7QUFDMUg7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmVkaWN0bHkvPzhkY2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcQ2hyaXN0aWFuIERvbWluZ3Vlc1xcXFxjdXJzb3JfcHJvamVjdHNcXFxcUHJlZGljdGx5XFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHJlZmVycmFsXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9yZWZlcnJhbC9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3JlZmVycmFsXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9yZWZlcnJhbC9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXENocmlzdGlhbiBEb21pbmd1ZXNcXFxcY3Vyc29yX3Byb2plY3RzXFxcXFByZWRpY3RseVxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxyZWZlcnJhbFxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvcmVmZXJyYWwvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Freferral%2Froute&page=%2Fapi%2Freferral%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Freferral%2Froute.ts&appDir=C%3A%5CUsers%5CChristian%20Domingues%5Ccursor_projects%5CPredictly%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CChristian%20Domingues%5Ccursor_projects%5CPredictly&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/referral/route.ts":
/*!***************************************!*\
  !*** ./src/app/api/referral/route.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/auth */ \"(rsc)/./src/lib/auth.ts\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/prisma */ \"(rsc)/./src/lib/prisma.ts\");\n\n\n\n\n// POST /api/referral\n// Creates a new referral code for the authenticated user\nasync function POST() {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n    if (!session?.user?.id) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Unauthorized\"\n        }, {\n            status: 401\n        });\n    }\n    try {\n        // Check if referral code already exists for this user\n        const existing = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__[\"default\"].referral.findFirst({\n            where: {\n                userId: session.user.id\n            }\n        });\n        if (existing) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(existing);\n        }\n        // Generate a random referral code (e.g., 8 characters)\n        const referralCode = Math.random().toString(36).substring(2, 10).toUpperCase();\n        const referral = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__[\"default\"].referral.create({\n            data: {\n                code: referralCode,\n                userId: session.user.id\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(referral);\n    } catch (error) {\n        console.error(\"Error creating referral code:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to create referral code\"\n        }, {\n            status: 500\n        });\n    }\n}\n// GET /api/referral\n// Retrieves the referral code for the authenticated user\nasync function GET() {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n    if (!session?.user?.id) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Unauthorized\"\n        }, {\n            status: 401\n        });\n    }\n    try {\n        const referral = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__[\"default\"].referral.findFirst({\n            where: {\n                userId: session.user.id\n            }\n        });\n        if (!referral) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Referral code not found\"\n            }, {\n                status: 404\n            });\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(referral);\n    } catch (error) {\n        console.error(\"Error retrieving referral code:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to retrieve referral code\"\n        }, {\n            status: 500\n        });\n    }\n} // GET /api/referral/referred\n // Returns a list of users referred by the authenticated user\n // Note: The handler for /api/referral/referred should be in src/app/api/referral/referred/route.ts\n // Only export GET and POST from this file. \n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9yZWZlcnJhbC9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTJDO0FBQ0U7QUFDRztBQUNQO0FBRXpDLHFCQUFxQjtBQUNyQix5REFBeUQ7QUFDbEQsZUFBZUk7SUFDcEIsTUFBTUMsVUFBVSxNQUFNSiwyREFBZ0JBLENBQUNDLGtEQUFXQTtJQUNsRCxJQUFJLENBQUNHLFNBQVNDLE1BQU1DLElBQUk7UUFDdEIsT0FBT1AscURBQVlBLENBQUNRLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQWUsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDcEU7SUFFQSxJQUFJO1FBQ0Ysc0RBQXNEO1FBQ3RELE1BQU1DLFdBQVcsTUFBTVIsbURBQU1BLENBQUNTLFFBQVEsQ0FBQ0MsU0FBUyxDQUFDO1lBQy9DQyxPQUFPO2dCQUFFQyxRQUFRVixRQUFRQyxJQUFJLENBQUNDLEVBQUU7WUFBQztRQUNuQztRQUNBLElBQUlJLFVBQVU7WUFDWixPQUFPWCxxREFBWUEsQ0FBQ1EsSUFBSSxDQUFDRztRQUMzQjtRQUNBLHVEQUF1RDtRQUN2RCxNQUFNSyxlQUFlQyxLQUFLQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQyxJQUFJQyxTQUFTLENBQUMsR0FBRyxJQUFJQyxXQUFXO1FBQzVFLE1BQU1ULFdBQVcsTUFBTVQsbURBQU1BLENBQUNTLFFBQVEsQ0FBQ1UsTUFBTSxDQUFDO1lBQzVDQyxNQUFNO2dCQUNKQyxNQUFNUjtnQkFDTkQsUUFBUVYsUUFBUUMsSUFBSSxDQUFDQyxFQUFFO1lBQ3pCO1FBQ0Y7UUFDQSxPQUFPUCxxREFBWUEsQ0FBQ1EsSUFBSSxDQUFDSTtJQUMzQixFQUFFLE9BQU9ILE9BQU87UUFDZGdCLFFBQVFoQixLQUFLLENBQUMsaUNBQWlDQTtRQUMvQyxPQUFPVCxxREFBWUEsQ0FBQ1EsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBaUMsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDdEY7QUFDRjtBQUVBLG9CQUFvQjtBQUNwQix5REFBeUQ7QUFDbEQsZUFBZWdCO0lBQ3BCLE1BQU1yQixVQUFVLE1BQU1KLDJEQUFnQkEsQ0FBQ0Msa0RBQVdBO0lBQ2xELElBQUksQ0FBQ0csU0FBU0MsTUFBTUMsSUFBSTtRQUN0QixPQUFPUCxxREFBWUEsQ0FBQ1EsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBZSxHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUNwRTtJQUVBLElBQUk7UUFDRixNQUFNRSxXQUFXLE1BQU1ULG1EQUFNQSxDQUFDUyxRQUFRLENBQUNDLFNBQVMsQ0FBQztZQUMvQ0MsT0FBTztnQkFBRUMsUUFBUVYsUUFBUUMsSUFBSSxDQUFDQyxFQUFFO1lBQUM7UUFDbkM7UUFDQSxJQUFJLENBQUNLLFVBQVU7WUFDYixPQUFPWixxREFBWUEsQ0FBQ1EsSUFBSSxDQUFDO2dCQUFFQyxPQUFPO1lBQTBCLEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUMvRTtRQUNBLE9BQU9WLHFEQUFZQSxDQUFDUSxJQUFJLENBQUNJO0lBQzNCLEVBQUUsT0FBT0gsT0FBTztRQUNkZ0IsUUFBUWhCLEtBQUssQ0FBQyxtQ0FBbUNBO1FBQ2pELE9BQU9ULHFEQUFZQSxDQUFDUSxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFtQyxHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUN4RjtBQUNGLEVBRUEsNkJBQTZCO0NBQzdCLDZEQUE2RDtDQUM3RCxtR0FBbUc7Q0FDbkcsNENBQTRDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJlZGljdGx5Ly4vc3JjL2FwcC9hcGkvcmVmZXJyYWwvcm91dGUudHM/ZTQzYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XHJcbmltcG9ydCB7IGdldFNlcnZlclNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgnO1xyXG5pbXBvcnQgeyBhdXRoT3B0aW9ucyB9IGZyb20gJy4uLy4uLy4uL2xpYi9hdXRoJztcclxuaW1wb3J0IHByaXNtYSBmcm9tICcuLi8uLi8uLi9saWIvcHJpc21hJztcclxuXHJcbi8vIFBPU1QgL2FwaS9yZWZlcnJhbFxyXG4vLyBDcmVhdGVzIGEgbmV3IHJlZmVycmFsIGNvZGUgZm9yIHRoZSBhdXRoZW50aWNhdGVkIHVzZXJcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QoKSB7XHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlcnZlclNlc3Npb24oYXV0aE9wdGlvbnMpO1xyXG4gIGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnVW5hdXRob3JpemVkJyB9LCB7IHN0YXR1czogNDAxIH0pO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIC8vIENoZWNrIGlmIHJlZmVycmFsIGNvZGUgYWxyZWFkeSBleGlzdHMgZm9yIHRoaXMgdXNlclxyXG4gICAgY29uc3QgZXhpc3RpbmcgPSBhd2FpdCBwcmlzbWEucmVmZXJyYWwuZmluZEZpcnN0KHtcclxuICAgICAgd2hlcmU6IHsgdXNlcklkOiBzZXNzaW9uLnVzZXIuaWQgfSxcclxuICAgIH0pO1xyXG4gICAgaWYgKGV4aXN0aW5nKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihleGlzdGluZyk7XHJcbiAgICB9XHJcbiAgICAvLyBHZW5lcmF0ZSBhIHJhbmRvbSByZWZlcnJhbCBjb2RlIChlLmcuLCA4IGNoYXJhY3RlcnMpXHJcbiAgICBjb25zdCByZWZlcnJhbENvZGUgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMiwgMTApLnRvVXBwZXJDYXNlKCk7XHJcbiAgICBjb25zdCByZWZlcnJhbCA9IGF3YWl0IHByaXNtYS5yZWZlcnJhbC5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgY29kZTogcmVmZXJyYWxDb2RlLFxyXG4gICAgICAgIHVzZXJJZDogc2Vzc2lvbi51c2VyLmlkLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24ocmVmZXJyYWwpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyByZWZlcnJhbCBjb2RlOicsIGVycm9yKTtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnRmFpbGVkIHRvIGNyZWF0ZSByZWZlcnJhbCBjb2RlJyB9LCB7IHN0YXR1czogNTAwIH0pO1xyXG4gIH1cclxufVxyXG5cclxuLy8gR0VUIC9hcGkvcmVmZXJyYWxcclxuLy8gUmV0cmlldmVzIHRoZSByZWZlcnJhbCBjb2RlIGZvciB0aGUgYXV0aGVudGljYXRlZCB1c2VyXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoKSB7XHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlcnZlclNlc3Npb24oYXV0aE9wdGlvbnMpO1xyXG4gIGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnVW5hdXRob3JpemVkJyB9LCB7IHN0YXR1czogNDAxIH0pO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlZmVycmFsID0gYXdhaXQgcHJpc21hLnJlZmVycmFsLmZpbmRGaXJzdCh7XHJcbiAgICAgIHdoZXJlOiB7IHVzZXJJZDogc2Vzc2lvbi51c2VyLmlkIH0sXHJcbiAgICB9KTtcclxuICAgIGlmICghcmVmZXJyYWwpIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdSZWZlcnJhbCBjb2RlIG5vdCBmb3VuZCcgfSwgeyBzdGF0dXM6IDQwNCB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihyZWZlcnJhbCk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHJldHJpZXZpbmcgcmVmZXJyYWwgY29kZTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0ZhaWxlZCB0byByZXRyaWV2ZSByZWZlcnJhbCBjb2RlJyB9LCB7IHN0YXR1czogNTAwIH0pO1xyXG4gIH1cclxufVxyXG5cclxuLy8gR0VUIC9hcGkvcmVmZXJyYWwvcmVmZXJyZWRcclxuLy8gUmV0dXJucyBhIGxpc3Qgb2YgdXNlcnMgcmVmZXJyZWQgYnkgdGhlIGF1dGhlbnRpY2F0ZWQgdXNlclxyXG4vLyBOb3RlOiBUaGUgaGFuZGxlciBmb3IgL2FwaS9yZWZlcnJhbC9yZWZlcnJlZCBzaG91bGQgYmUgaW4gc3JjL2FwcC9hcGkvcmVmZXJyYWwvcmVmZXJyZWQvcm91dGUudHNcclxuLy8gT25seSBleHBvcnQgR0VUIGFuZCBQT1NUIGZyb20gdGhpcyBmaWxlLiAiXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiZ2V0U2VydmVyU2Vzc2lvbiIsImF1dGhPcHRpb25zIiwicHJpc21hIiwiUE9TVCIsInNlc3Npb24iLCJ1c2VyIiwiaWQiLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJleGlzdGluZyIsInJlZmVycmFsIiwiZmluZEZpcnN0Iiwid2hlcmUiLCJ1c2VySWQiLCJyZWZlcnJhbENvZGUiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJzdWJzdHJpbmciLCJ0b1VwcGVyQ2FzZSIsImNyZWF0ZSIsImRhdGEiLCJjb2RlIiwiY29uc29sZSIsIkdFVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/referral/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/auth.ts":
/*!*************************!*\
  !*** ./src/lib/auth.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"(rsc)/./node_modules/@next-auth/prisma-adapter/dist/index.js\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var _prisma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prisma */ \"(rsc)/./src/lib/prisma.ts\");\n\n\n\n\nconst authOptions = {\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__.PrismaAdapter)(_prisma__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            name: \"Credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\",\n                    placeholder: \"you@example.com\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials?.password) return null;\n                const user = await _prisma__WEBPACK_IMPORTED_MODULE_3__[\"default\"].user.findUnique({\n                    where: {\n                        email: credentials.email\n                    },\n                    select: {\n                        id: true,\n                        email: true,\n                        name: true,\n                        username: true,\n                        hashedPassword: true,\n                        credits: true,\n                        pro_status: true,\n                        image: true\n                    }\n                });\n                if (!user?.hashedPassword) return null;\n                const isValid = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_2__.compare)(credentials.password, user.hashedPassword);\n                if (!isValid) return null;\n                return {\n                    id: user.id,\n                    email: user.email,\n                    name: user.name,\n                    username: user.username,\n                    credits: user.credits,\n                    pro_status: user.pro_status,\n                    image: user.image\n                };\n            }\n        })\n    ],\n    session: {\n        strategy: \"jwt\",\n        maxAge: 30 * 24 * 60 * 60\n    },\n    pages: {\n        signIn: \"/auth/signin\"\n    },\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user) {\n                token.id = user.id;\n                token.email = user.email;\n                token.name = user.name;\n                token.picture = user.image;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (!token.id) return session;\n            // Fetch the user with all related data\n            const user = await _prisma__WEBPACK_IMPORTED_MODULE_3__[\"default\"].user.findUnique({\n                where: {\n                    id: token.id\n                },\n                include: {\n                    transactions: {\n                        orderBy: {\n                            createdAt: \"desc\"\n                        }\n                    },\n                    referrals: {\n                        include: {\n                            referred: true\n                        }\n                    }\n                }\n            });\n            if (!user) return session;\n            // Get the referral code if it exists, or create one\n            let referralCode = user.referrals[0]?.code;\n            if (!referralCode) {\n                // Create a new referral code\n                const newReferral = await _prisma__WEBPACK_IMPORTED_MODULE_3__[\"default\"].referral.create({\n                    data: {\n                        code: `REF${Math.random().toString(36).substring(2, 8).toUpperCase()}`,\n                        userId: user.id\n                    }\n                });\n                referralCode = newReferral.code;\n            }\n            // Calculate bonus credits from referrals\n            const bonusCredits = (user.referrals[0]?.referred?.length || 0) * 50;\n            return {\n                ...session,\n                user: {\n                    id: user.id,\n                    email: user.email,\n                    name: user.name,\n                    image: user.image,\n                    username: user.username,\n                    credits: user.credits,\n                    pro_status: user.pro_status,\n                    referralCode,\n                    bonusCredits,\n                    transactions: user.transactions\n                }\n            };\n        }\n    },\n    secret: process.env.NEXTAUTH_SECRET\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxNQUFNLEdBQUdDLFFBQVEsQ0FBQyxJQUFJQyxTQUFTLENBQUMsR0FBRyxHQUFHQyxXQUFXLEdBQUcsQ0FBQzt3QkFDdEVDLFFBQVFyQyxLQUFLSSxFQUFFO29CQUNqQjtnQkFDRjtnQkFDQXNCLGVBQWVFLFlBQVlELElBQUk7WUFDakM7WUFFQSx5Q0FBeUM7WUFDekMsTUFBTVcsZUFBZSxDQUFDdEMsS0FBS3dCLFNBQVMsQ0FBQyxFQUFFLEVBQUVDLFVBQVVjLFVBQVUsS0FBSztZQUVsRSxPQUFPO2dCQUNMLEdBQUc1QixPQUFPO2dCQUNWWCxNQUFNO29CQUNKSSxJQUFJSixLQUFLSSxFQUFFO29CQUNYVixPQUFPTSxLQUFLTixLQUFLO29CQUNqQkYsTUFBTVEsS0FBS1IsSUFBSTtvQkFDZmlCLE9BQU9ULEtBQUtTLEtBQUs7b0JBQ2pCSixVQUFVTCxLQUFLSyxRQUFRO29CQUN2QkUsU0FBU1AsS0FBS08sT0FBTztvQkFDckJDLFlBQVlSLEtBQUtRLFVBQVU7b0JBQzNCa0I7b0JBQ0FZO29CQUNBakIsY0FBY3JCLEtBQUtxQixZQUFZO2dCQUNqQztZQUNGO1FBQ0Y7SUFDRjtJQUNBbUIsUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxlQUFlO0FBQ3JDLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmVkaWN0bHkvLi9zcmMvbGliL2F1dGgudHM/NjY5MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFBZGFwdGVyIH0gZnJvbSAnQG5leHQtYXV0aC9wcmlzbWEtYWRhcHRlcic7XHJcbmltcG9ydCB7IE5leHRBdXRoT3B0aW9ucyB9IGZyb20gJ25leHQtYXV0aCc7XHJcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCI7XHJcbmltcG9ydCB7IGNvbXBhcmUgfSBmcm9tIFwiYmNyeXB0anNcIjtcclxuaW1wb3J0IHByaXNtYSBmcm9tICcuL3ByaXNtYSc7XHJcblxyXG4vLyBFeHRlbmQgdGhlIGJ1aWx0LWluIHNlc3Npb24gdHlwZXNcclxuZGVjbGFyZSBtb2R1bGUgXCJuZXh0LWF1dGhcIiB7XHJcbiAgaW50ZXJmYWNlIFNlc3Npb24ge1xyXG4gICAgdXNlcjoge1xyXG4gICAgICBpZDogc3RyaW5nO1xyXG4gICAgICBlbWFpbD86IHN0cmluZyB8IG51bGw7XHJcbiAgICAgIG5hbWU/OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgICBpbWFnZT86IHN0cmluZyB8IG51bGw7XHJcbiAgICAgIHVzZXJuYW1lPzogc3RyaW5nIHwgbnVsbDtcclxuICAgICAgY3JlZGl0czogbnVtYmVyO1xyXG4gICAgICBwcm9fc3RhdHVzOiBib29sZWFuO1xyXG4gICAgICByZWZlcnJhbENvZGU/OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgICBib251c0NyZWRpdHM6IG51bWJlcjtcclxuICAgICAgdHJhbnNhY3Rpb25zOiBhbnlbXTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgaW50ZXJmYWNlIFVzZXIge1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIGVtYWlsPzogc3RyaW5nIHwgbnVsbDtcclxuICAgIG5hbWU/OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgaW1hZ2U/OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgdXNlcm5hbWU/OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgY3JlZGl0czogbnVtYmVyO1xyXG4gICAgcHJvX3N0YXR1czogYm9vbGVhbjtcclxuICAgIGhhc2hlZFBhc3N3b3JkPzogc3RyaW5nIHwgbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9uczogTmV4dEF1dGhPcHRpb25zID0ge1xyXG4gIGFkYXB0ZXI6IFByaXNtYUFkYXB0ZXIocHJpc21hKSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xyXG4gICAgICBuYW1lOiBcIkNyZWRlbnRpYWxzXCIsXHJcbiAgICAgIGNyZWRlbnRpYWxzOiB7XHJcbiAgICAgICAgZW1haWw6IHsgbGFiZWw6IFwiRW1haWxcIiwgdHlwZTogXCJlbWFpbFwiLCBwbGFjZWhvbGRlcjogXCJ5b3VAZXhhbXBsZS5jb21cIiB9LFxyXG4gICAgICAgIHBhc3N3b3JkOiB7IGxhYmVsOiBcIlBhc3N3b3JkXCIsIHR5cGU6IFwicGFzc3dvcmRcIiB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscykge1xyXG4gICAgICAgIGlmICghY3JlZGVudGlhbHM/LmVtYWlsIHx8ICFjcmVkZW50aWFscz8ucGFzc3dvcmQpIHJldHVybiBudWxsO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcclxuICAgICAgICAgIHdoZXJlOiB7IGVtYWlsOiBjcmVkZW50aWFscy5lbWFpbCB9LFxyXG4gICAgICAgICAgc2VsZWN0OiB7XHJcbiAgICAgICAgICAgIGlkOiB0cnVlLFxyXG4gICAgICAgICAgICBlbWFpbDogdHJ1ZSxcclxuICAgICAgICAgICAgbmFtZTogdHJ1ZSxcclxuICAgICAgICAgICAgdXNlcm5hbWU6IHRydWUsXHJcbiAgICAgICAgICAgIGhhc2hlZFBhc3N3b3JkOiB0cnVlLFxyXG4gICAgICAgICAgICBjcmVkaXRzOiB0cnVlLFxyXG4gICAgICAgICAgICBwcm9fc3RhdHVzOiB0cnVlLFxyXG4gICAgICAgICAgICBpbWFnZTogdHJ1ZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICghdXNlcj8uaGFzaGVkUGFzc3dvcmQpIHJldHVybiBudWxsO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGlzVmFsaWQgPSBhd2FpdCBjb21wYXJlKGNyZWRlbnRpYWxzLnBhc3N3b3JkLCB1c2VyLmhhc2hlZFBhc3N3b3JkKTtcclxuICAgICAgICBpZiAoIWlzVmFsaWQpIHJldHVybiBudWxsO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBpZDogdXNlci5pZCxcclxuICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICAgICAgbmFtZTogdXNlci5uYW1lLFxyXG4gICAgICAgICAgdXNlcm5hbWU6IHVzZXIudXNlcm5hbWUsXHJcbiAgICAgICAgICBjcmVkaXRzOiB1c2VyLmNyZWRpdHMsXHJcbiAgICAgICAgICBwcm9fc3RhdHVzOiB1c2VyLnByb19zdGF0dXMsXHJcbiAgICAgICAgICBpbWFnZTogdXNlci5pbWFnZVxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgXSxcclxuICBzZXNzaW9uOiB7XHJcbiAgICBzdHJhdGVneTogJ2p3dCcsXHJcbiAgICBtYXhBZ2U6IDMwICogMjQgKiA2MCAqIDYwLCAvLyAzMCBkYXlzXHJcbiAgfSxcclxuICBwYWdlczoge1xyXG4gICAgc2lnbkluOiAnL2F1dGgvc2lnbmluJyxcclxuICB9LFxyXG4gIGNhbGxiYWNrczoge1xyXG4gICAgYXN5bmMgand0KHsgdG9rZW4sIHVzZXIgfSkge1xyXG4gICAgICBpZiAodXNlcikge1xyXG4gICAgICAgIHRva2VuLmlkID0gdXNlci5pZDtcclxuICAgICAgICB0b2tlbi5lbWFpbCA9IHVzZXIuZW1haWw7XHJcbiAgICAgICAgdG9rZW4ubmFtZSA9IHVzZXIubmFtZTtcclxuICAgICAgICB0b2tlbi5waWN0dXJlID0gdXNlci5pbWFnZTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdG9rZW47XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH0pIHtcclxuICAgICAgaWYgKCF0b2tlbi5pZCkgcmV0dXJuIHNlc3Npb247XHJcblxyXG4gICAgICAvLyBGZXRjaCB0aGUgdXNlciB3aXRoIGFsbCByZWxhdGVkIGRhdGFcclxuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiB0b2tlbi5pZCBhcyBzdHJpbmcgfSxcclxuICAgICAgICBpbmNsdWRlOiB7XHJcbiAgICAgICAgICB0cmFuc2FjdGlvbnM6IHtcclxuICAgICAgICAgICAgb3JkZXJCeToge1xyXG4gICAgICAgICAgICAgIGNyZWF0ZWRBdDogJ2Rlc2MnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICByZWZlcnJhbHM6IHtcclxuICAgICAgICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgICAgICAgIHJlZmVycmVkOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKCF1c2VyKSByZXR1cm4gc2Vzc2lvbjtcclxuXHJcbiAgICAgIC8vIEdldCB0aGUgcmVmZXJyYWwgY29kZSBpZiBpdCBleGlzdHMsIG9yIGNyZWF0ZSBvbmVcclxuICAgICAgbGV0IHJlZmVycmFsQ29kZSA9IHVzZXIucmVmZXJyYWxzWzBdPy5jb2RlO1xyXG4gICAgICBpZiAoIXJlZmVycmFsQ29kZSkge1xyXG4gICAgICAgIC8vIENyZWF0ZSBhIG5ldyByZWZlcnJhbCBjb2RlXHJcbiAgICAgICAgY29uc3QgbmV3UmVmZXJyYWwgPSBhd2FpdCBwcmlzbWEucmVmZXJyYWwuY3JlYXRlKHtcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgY29kZTogYFJFRiR7TWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIsIDgpLnRvVXBwZXJDYXNlKCl9YCxcclxuICAgICAgICAgICAgdXNlcklkOiB1c2VyLmlkXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmVmZXJyYWxDb2RlID0gbmV3UmVmZXJyYWwuY29kZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQ2FsY3VsYXRlIGJvbnVzIGNyZWRpdHMgZnJvbSByZWZlcnJhbHNcclxuICAgICAgY29uc3QgYm9udXNDcmVkaXRzID0gKHVzZXIucmVmZXJyYWxzWzBdPy5yZWZlcnJlZD8ubGVuZ3RoIHx8IDApICogNTA7XHJcbiAgICAgIFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnNlc3Npb24sXHJcbiAgICAgICAgdXNlcjoge1xyXG4gICAgICAgICAgaWQ6IHVzZXIuaWQsXHJcbiAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcclxuICAgICAgICAgIG5hbWU6IHVzZXIubmFtZSxcclxuICAgICAgICAgIGltYWdlOiB1c2VyLmltYWdlLFxyXG4gICAgICAgICAgdXNlcm5hbWU6IHVzZXIudXNlcm5hbWUsXHJcbiAgICAgICAgICBjcmVkaXRzOiB1c2VyLmNyZWRpdHMsXHJcbiAgICAgICAgICBwcm9fc3RhdHVzOiB1c2VyLnByb19zdGF0dXMsXHJcbiAgICAgICAgICByZWZlcnJhbENvZGUsXHJcbiAgICAgICAgICBib251c0NyZWRpdHMsXHJcbiAgICAgICAgICB0cmFuc2FjdGlvbnM6IHVzZXIudHJhbnNhY3Rpb25zXHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICB9LFxyXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVULFxyXG59OyAiXSwibmFtZXMiOlsiUHJpc21hQWRhcHRlciIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJjb21wYXJlIiwicHJpc21hIiwiYXV0aE9wdGlvbnMiLCJhZGFwdGVyIiwicHJvdmlkZXJzIiwibmFtZSIsImNyZWRlbnRpYWxzIiwiZW1haWwiLCJsYWJlbCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwidXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsInNlbGVjdCIsImlkIiwidXNlcm5hbWUiLCJoYXNoZWRQYXNzd29yZCIsImNyZWRpdHMiLCJwcm9fc3RhdHVzIiwiaW1hZ2UiLCJpc1ZhbGlkIiwic2Vzc2lvbiIsInN0cmF0ZWd5IiwibWF4QWdlIiwicGFnZXMiLCJzaWduSW4iLCJjYWxsYmFja3MiLCJqd3QiLCJ0b2tlbiIsInBpY3R1cmUiLCJpbmNsdWRlIiwidHJhbnNhY3Rpb25zIiwib3JkZXJCeSIsImNyZWF0ZWRBdCIsInJlZmVycmFscyIsInJlZmVycmVkIiwicmVmZXJyYWxDb2RlIiwiY29kZSIsIm5ld1JlZmVycmFsIiwicmVmZXJyYWwiLCJjcmVhdGUiLCJkYXRhIiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwic3Vic3RyaW5nIiwidG9VcHBlckNhc2UiLCJ1c2VySWQiLCJib251c0NyZWRpdHMiLCJsZW5ndGgiLCJzZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVEFVVEhfU0VDUkVUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/prisma.ts":
/*!***************************!*\
  !*** ./src/lib/prisma.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL3ByaXNtYS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEM7QUFFOUMsTUFBTUMsU0FBUyxJQUFJRCx3REFBWUE7QUFFL0IsaUVBQWVDLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmVkaWN0bHkvLi9zcmMvbGliL3ByaXNtYS50cz8wMWQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcclxuXHJcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByaXNtYTsgIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/prisma.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/bcryptjs","vendor-chunks/oauth","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/@next-auth","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Freferral%2Froute&page=%2Fapi%2Freferral%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Freferral%2Froute.ts&appDir=C%3A%5CUsers%5CChristian%20Domingues%5Ccursor_projects%5CPredictly%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CChristian%20Domingues%5Ccursor_projects%5CPredictly&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();