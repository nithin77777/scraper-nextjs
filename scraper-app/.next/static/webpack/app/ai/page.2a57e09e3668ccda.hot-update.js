"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/ai/page",{

/***/ "(app-pages-browser)/./src/app/ai/page.js":
/*!****************************!*\
  !*** ./src/app/ai/page.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ai_model; }\n/* harmony export */ });\n/* __next_internal_client_entry_do_not_use__ default auto */ async function ai_model(params) {\n    const { GoogleGenerativeAI } = __webpack_require__(/*! @google/generative-ai */ \"(app-pages-browser)/./node_modules/@google/generative-ai/dist/index.js\");\n    // Access your API key as an environment variable\n    const genAI = new GoogleGenerativeAI(\"AIzaSyAnQRUz_i0Yc5zi44It_cIuOCTwaXpfHkU\");\n    // Make sure to include these imports:\n    // import { GoogleGenerativeAI } from \"@google/generative-ai\";\n    const model = genAI.getGenerativeModel({\n        model: \"gemini-1.5-flash\"\n    });\n    const prompt = \"Write a story about a magic backpack.\";\n    const result = await model.generateContent(prompt);\n    console.log(result.response.candidates);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYWkvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7OzZEQUNlLGVBQWVBLFNBQVNDLE1BQU07SUFFekMsTUFBTSxFQUFFQyxrQkFBa0IsRUFBRSxHQUFHQyxtQkFBT0EsQ0FBQyxxR0FBdUI7SUFFOUQsaURBQWlEO0lBQ2pELE1BQU1DLFFBQVEsSUFBSUYsbUJBQW1CRyx5Q0FBK0I7SUFFcEUsc0NBQXNDO0lBQ3RDLDhEQUE4RDtJQUM5RCxNQUFNRyxRQUFRSixNQUFNSyxrQkFBa0IsQ0FBQztRQUFFRCxPQUFPO0lBQW1CO0lBRW5FLE1BQU1FLFNBQVM7SUFFZixNQUFNQyxTQUFTLE1BQU1ILE1BQU1JLGVBQWUsQ0FBQ0Y7SUFDM0NHLFFBQVFDLEdBQUcsQ0FBQ0gsT0FBT0ksUUFBUSxDQUFDQyxVQUFVO0FBRTFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvYWkvcGFnZS5qcz85Y2VjIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gYWlfbW9kZWwocGFyYW1zKSB7XG5cbiAgICBjb25zdCB7IEdvb2dsZUdlbmVyYXRpdmVBSSB9ID0gcmVxdWlyZShcIkBnb29nbGUvZ2VuZXJhdGl2ZS1haVwiKTtcblxuICAgIC8vIEFjY2VzcyB5b3VyIEFQSSBrZXkgYXMgYW4gZW52aXJvbm1lbnQgdmFyaWFibGVcbiAgICBjb25zdCBnZW5BSSA9IG5ldyBHb29nbGVHZW5lcmF0aXZlQUkocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0tFWSk7XG5cbiAgICAvLyBNYWtlIHN1cmUgdG8gaW5jbHVkZSB0aGVzZSBpbXBvcnRzOlxuICAgIC8vIGltcG9ydCB7IEdvb2dsZUdlbmVyYXRpdmVBSSB9IGZyb20gXCJAZ29vZ2xlL2dlbmVyYXRpdmUtYWlcIjtcbiAgICBjb25zdCBtb2RlbCA9IGdlbkFJLmdldEdlbmVyYXRpdmVNb2RlbCh7IG1vZGVsOiBcImdlbWluaS0xLjUtZmxhc2hcIiB9KTtcblxuICAgIGNvbnN0IHByb21wdCA9IFwiV3JpdGUgYSBzdG9yeSBhYm91dCBhIG1hZ2ljIGJhY2twYWNrLlwiO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbW9kZWwuZ2VuZXJhdGVDb250ZW50KHByb21wdCk7XG4gICAgY29uc29sZS5sb2cocmVzdWx0LnJlc3BvbnNlLmNhbmRpZGF0ZXMpO1xuICAgIFxufVxuXG4iXSwibmFtZXMiOlsiYWlfbW9kZWwiLCJwYXJhbXMiLCJHb29nbGVHZW5lcmF0aXZlQUkiLCJyZXF1aXJlIiwiZ2VuQUkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX0tFWSIsIm1vZGVsIiwiZ2V0R2VuZXJhdGl2ZU1vZGVsIiwicHJvbXB0IiwicmVzdWx0IiwiZ2VuZXJhdGVDb250ZW50IiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwiY2FuZGlkYXRlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ai/page.js\n"));

/***/ })

});