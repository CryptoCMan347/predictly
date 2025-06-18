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
exports.id = "app/api/stripe/checkout/route";
exports.ids = ["app/api/stripe/checkout/route"];
exports.modules = {

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

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

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

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fstripe%2Fcheckout%2Froute&page=%2Fapi%2Fstripe%2Fcheckout%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fstripe%2Fcheckout%2Froute.ts&appDir=C%3A%5CUsers%5CChristian%20Domingues%5Ccursor_projects%5CPredictly%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CChristian%20Domingues%5Ccursor_projects%5CPredictly&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fstripe%2Fcheckout%2Froute&page=%2Fapi%2Fstripe%2Fcheckout%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fstripe%2Fcheckout%2Froute.ts&appDir=C%3A%5CUsers%5CChristian%20Domingues%5Ccursor_projects%5CPredictly%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CChristian%20Domingues%5Ccursor_projects%5CPredictly&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Christian_Domingues_cursor_projects_Predictly_src_app_api_stripe_checkout_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/stripe/checkout/route.ts */ \"(rsc)/./src/app/api/stripe/checkout/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/stripe/checkout/route\",\n        pathname: \"/api/stripe/checkout\",\n        filename: \"route\",\n        bundlePath: \"app/api/stripe/checkout/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Christian Domingues\\\\cursor_projects\\\\Predictly\\\\src\\\\app\\\\api\\\\stripe\\\\checkout\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_Christian_Domingues_cursor_projects_Predictly_src_app_api_stripe_checkout_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/stripe/checkout/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZzdHJpcGUlMkZjaGVja291dCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGc3RyaXBlJTJGY2hlY2tvdXQlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZzdHJpcGUlMkZjaGVja291dCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNDaHJpc3RpYW4lMjBEb21pbmd1ZXMlNUNjdXJzb3JfcHJvamVjdHMlNUNQcmVkaWN0bHklNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q0NocmlzdGlhbiUyMERvbWluZ3VlcyU1Q2N1cnNvcl9wcm9qZWN0cyU1Q1ByZWRpY3RseSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDcUQ7QUFDbEk7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmVkaWN0bHkvPzg3ZmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcQ2hyaXN0aWFuIERvbWluZ3Vlc1xcXFxjdXJzb3JfcHJvamVjdHNcXFxcUHJlZGljdGx5XFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHN0cmlwZVxcXFxjaGVja291dFxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvc3RyaXBlL2NoZWNrb3V0L3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvc3RyaXBlL2NoZWNrb3V0XCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9zdHJpcGUvY2hlY2tvdXQvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxDaHJpc3RpYW4gRG9taW5ndWVzXFxcXGN1cnNvcl9wcm9qZWN0c1xcXFxQcmVkaWN0bHlcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcc3RyaXBlXFxcXGNoZWNrb3V0XFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9zdHJpcGUvY2hlY2tvdXQvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fstripe%2Fcheckout%2Froute&page=%2Fapi%2Fstripe%2Fcheckout%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fstripe%2Fcheckout%2Froute.ts&appDir=C%3A%5CUsers%5CChristian%20Domingues%5Ccursor_projects%5CPredictly%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CChristian%20Domingues%5Ccursor_projects%5CPredictly&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/stripe/checkout/route.ts":
/*!**********************************************!*\
  !*** ./src/app/api/stripe/checkout/route.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stripe */ \"(rsc)/./node_modules/stripe/esm/stripe.esm.node.js\");\n\n\nconst stripe = new stripe__WEBPACK_IMPORTED_MODULE_1__[\"default\"](process.env.STRIPE_SECRET_KEY, {\n    apiVersion: \"2023-10-16\"\n});\nasync function POST(req) {\n    try {\n        const { credits, userId } = await req.json();\n        const minCredits = 50;\n        const creditsNum = Number(credits);\n        console.log({\n            credits,\n            creditsNum,\n            userId\n        }); // Debug log\n        if (!creditsNum || isNaN(creditsNum) || creditsNum < minCredits || !userId) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: `Minimum purchase is ${minCredits} credits.`\n            }, {\n                status: 400\n            });\n        }\n        // $1 per 10 credits\n        const amount = creditsNum / 10 * 100; // Stripe expects cents\n        const session = await stripe.checkout.sessions.create({\n            payment_method_types: [\n                \"card\"\n            ],\n            line_items: [\n                {\n                    price_data: {\n                        currency: \"usd\",\n                        product_data: {\n                            name: `${creditsNum} Predictly Credits`,\n                            description: \"Credits for use on Predictly\"\n                        },\n                        unit_amount: Math.round(amount)\n                    },\n                    quantity: 1\n                }\n            ],\n            mode: \"payment\",\n            success_url: `${\"http://localhost:3000\"}/payment-success?session_id={CHECKOUT_SESSION_ID}`,\n            cancel_url: `${\"http://localhost:3000\"}/account`,\n            metadata: {\n                userId,\n                credits: creditsNum\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            url: session.url\n        });\n    } catch (err) {\n        console.error(\"Stripe checkout error:\", err);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Stripe checkout failed.\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9zdHJpcGUvY2hlY2tvdXQvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJDO0FBQ2Y7QUFFNUIsTUFBTUUsU0FBUyxJQUFJRCw4Q0FBTUEsQ0FBQ0UsUUFBUUMsR0FBRyxDQUFDQyxpQkFBaUIsRUFBRztJQUN4REMsWUFBWTtBQUNkO0FBRU8sZUFBZUMsS0FBS0MsR0FBWTtJQUNyQyxJQUFJO1FBQ0YsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLE1BQU0sRUFBRSxHQUFHLE1BQU1GLElBQUlHLElBQUk7UUFDMUMsTUFBTUMsYUFBYTtRQUNuQixNQUFNQyxhQUFhQyxPQUFPTDtRQUMxQk0sUUFBUUMsR0FBRyxDQUFDO1lBQUVQO1lBQVNJO1lBQVlIO1FBQU8sSUFBSSxZQUFZO1FBQzFELElBQUksQ0FBQ0csY0FBY0ksTUFBTUosZUFBZUEsYUFBYUQsY0FBYyxDQUFDRixRQUFRO1lBQzFFLE9BQU9WLHFEQUFZQSxDQUFDVyxJQUFJLENBQUM7Z0JBQUVPLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRU4sV0FBVyxTQUFTLENBQUM7WUFBQyxHQUFHO2dCQUFFTyxRQUFRO1lBQUk7UUFDbEc7UUFDQSxvQkFBb0I7UUFDcEIsTUFBTUMsU0FBUyxhQUFjLEtBQU0sS0FBSyx1QkFBdUI7UUFDL0QsTUFBTUMsVUFBVSxNQUFNbkIsT0FBT29CLFFBQVEsQ0FBQ0MsUUFBUSxDQUFDQyxNQUFNLENBQUM7WUFDcERDLHNCQUFzQjtnQkFBQzthQUFPO1lBQzlCQyxZQUFZO2dCQUNWO29CQUNFQyxZQUFZO3dCQUNWQyxVQUFVO3dCQUNWQyxjQUFjOzRCQUNaQyxNQUFNLENBQUMsRUFBRWpCLFdBQVcsa0JBQWtCLENBQUM7NEJBQ3ZDa0IsYUFBYTt3QkFDZjt3QkFDQUMsYUFBYUMsS0FBS0MsS0FBSyxDQUFDZDtvQkFDMUI7b0JBQ0FlLFVBQVU7Z0JBQ1o7YUFDRDtZQUNEQyxNQUFNO1lBQ05DLGFBQWEsQ0FBQyxFQUFFbEMsdUJBQWdDLENBQUMsaURBQWlELENBQUM7WUFDbkdvQyxZQUFZLENBQUMsRUFBRXBDLHVCQUFnQyxDQUFDLFFBQVEsQ0FBQztZQUN6RHFDLFVBQVU7Z0JBQ1I5QjtnQkFDQUQsU0FBU0k7WUFDWDtRQUNGO1FBQ0EsT0FBT2IscURBQVlBLENBQUNXLElBQUksQ0FBQztZQUFFOEIsS0FBS3BCLFFBQVFvQixHQUFHO1FBQUM7SUFDOUMsRUFBRSxPQUFPQyxLQUFLO1FBQ1ozQixRQUFRRyxLQUFLLENBQUMsMEJBQTBCd0I7UUFDeEMsT0FBTzFDLHFEQUFZQSxDQUFDVyxJQUFJLENBQUM7WUFBRU8sT0FBTztRQUEwQixHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUMvRTtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJlZGljdGx5Ly4vc3JjL2FwcC9hcGkvc3RyaXBlL2NoZWNrb3V0L3JvdXRlLnRzPzAxNWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xyXG5pbXBvcnQgU3RyaXBlIGZyb20gJ3N0cmlwZSc7XHJcblxyXG5jb25zdCBzdHJpcGUgPSBuZXcgU3RyaXBlKHByb2Nlc3MuZW52LlNUUklQRV9TRUNSRVRfS0VZISwge1xyXG4gIGFwaVZlcnNpb246ICcyMDIzLTEwLTE2JyxcclxufSk7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXE6IFJlcXVlc3QpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBjcmVkaXRzLCB1c2VySWQgfSA9IGF3YWl0IHJlcS5qc29uKCk7XHJcbiAgICBjb25zdCBtaW5DcmVkaXRzID0gNTA7XHJcbiAgICBjb25zdCBjcmVkaXRzTnVtID0gTnVtYmVyKGNyZWRpdHMpO1xyXG4gICAgY29uc29sZS5sb2coeyBjcmVkaXRzLCBjcmVkaXRzTnVtLCB1c2VySWQgfSk7IC8vIERlYnVnIGxvZ1xyXG4gICAgaWYgKCFjcmVkaXRzTnVtIHx8IGlzTmFOKGNyZWRpdHNOdW0pIHx8IGNyZWRpdHNOdW0gPCBtaW5DcmVkaXRzIHx8ICF1c2VySWQpIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IGBNaW5pbXVtIHB1cmNoYXNlIGlzICR7bWluQ3JlZGl0c30gY3JlZGl0cy5gIH0sIHsgc3RhdHVzOiA0MDAgfSk7XHJcbiAgICB9XHJcbiAgICAvLyAkMSBwZXIgMTAgY3JlZGl0c1xyXG4gICAgY29uc3QgYW1vdW50ID0gKGNyZWRpdHNOdW0gLyAxMCkgKiAxMDA7IC8vIFN0cmlwZSBleHBlY3RzIGNlbnRzXHJcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgc3RyaXBlLmNoZWNrb3V0LnNlc3Npb25zLmNyZWF0ZSh7XHJcbiAgICAgIHBheW1lbnRfbWV0aG9kX3R5cGVzOiBbJ2NhcmQnXSxcclxuICAgICAgbGluZV9pdGVtczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByaWNlX2RhdGE6IHtcclxuICAgICAgICAgICAgY3VycmVuY3k6ICd1c2QnLFxyXG4gICAgICAgICAgICBwcm9kdWN0X2RhdGE6IHtcclxuICAgICAgICAgICAgICBuYW1lOiBgJHtjcmVkaXRzTnVtfSBQcmVkaWN0bHkgQ3JlZGl0c2AsXHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdDcmVkaXRzIGZvciB1c2Ugb24gUHJlZGljdGx5JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdW5pdF9hbW91bnQ6IE1hdGgucm91bmQoYW1vdW50KSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBxdWFudGl0eTogMSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgICBtb2RlOiAncGF5bWVudCcsXHJcbiAgICAgIHN1Y2Nlc3NfdXJsOiBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTH0vcGF5bWVudC1zdWNjZXNzP3Nlc3Npb25faWQ9e0NIRUNLT1VUX1NFU1NJT05fSUR9YCxcclxuICAgICAgY2FuY2VsX3VybDogYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9L2FjY291bnRgLFxyXG4gICAgICBtZXRhZGF0YToge1xyXG4gICAgICAgIHVzZXJJZCxcclxuICAgICAgICBjcmVkaXRzOiBjcmVkaXRzTnVtLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyB1cmw6IHNlc3Npb24udXJsIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcignU3RyaXBlIGNoZWNrb3V0IGVycm9yOicsIGVycik7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ1N0cmlwZSBjaGVja291dCBmYWlsZWQuJyB9LCB7IHN0YXR1czogNTAwIH0pO1xyXG4gIH1cclxufSAiXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiU3RyaXBlIiwic3RyaXBlIiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9TRUNSRVRfS0VZIiwiYXBpVmVyc2lvbiIsIlBPU1QiLCJyZXEiLCJjcmVkaXRzIiwidXNlcklkIiwianNvbiIsIm1pbkNyZWRpdHMiLCJjcmVkaXRzTnVtIiwiTnVtYmVyIiwiY29uc29sZSIsImxvZyIsImlzTmFOIiwiZXJyb3IiLCJzdGF0dXMiLCJhbW91bnQiLCJzZXNzaW9uIiwiY2hlY2tvdXQiLCJzZXNzaW9ucyIsImNyZWF0ZSIsInBheW1lbnRfbWV0aG9kX3R5cGVzIiwibGluZV9pdGVtcyIsInByaWNlX2RhdGEiLCJjdXJyZW5jeSIsInByb2R1Y3RfZGF0YSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInVuaXRfYW1vdW50IiwiTWF0aCIsInJvdW5kIiwicXVhbnRpdHkiLCJtb2RlIiwic3VjY2Vzc191cmwiLCJORVhUX1BVQkxJQ19CQVNFX1VSTCIsImNhbmNlbF91cmwiLCJtZXRhZGF0YSIsInVybCIsImVyciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/stripe/checkout/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/stripe","vendor-chunks/math-intrinsics","vendor-chunks/es-errors","vendor-chunks/qs","vendor-chunks/call-bind-apply-helpers","vendor-chunks/get-proto","vendor-chunks/object-inspect","vendor-chunks/has-symbols","vendor-chunks/gopd","vendor-chunks/function-bind","vendor-chunks/side-channel","vendor-chunks/side-channel-weakmap","vendor-chunks/side-channel-map","vendor-chunks/side-channel-list","vendor-chunks/hasown","vendor-chunks/get-intrinsic","vendor-chunks/es-object-atoms","vendor-chunks/es-define-property","vendor-chunks/dunder-proto","vendor-chunks/call-bound"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fstripe%2Fcheckout%2Froute&page=%2Fapi%2Fstripe%2Fcheckout%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fstripe%2Fcheckout%2Froute.ts&appDir=C%3A%5CUsers%5CChristian%20Domingues%5Ccursor_projects%5CPredictly%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CChristian%20Domingues%5Ccursor_projects%5CPredictly&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();