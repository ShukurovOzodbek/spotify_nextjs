"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/albums/[id]",{

/***/ "./src/pages/albums/[id].tsx":
/*!***********************************!*\
  !*** ./src/pages/albums/[id].tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Layouts_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Layouts/Layout */ \"./src/Layouts/Layout.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst currentAlbum = ()=>{\n    _s();\n    const [] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const id = router.asPath.split(\"/\")[2];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        async function getAllAlbums() {\n            let token = localStorage.getItem(\"token\");\n            await axios.get(\"https://api.spotify.com/v1/playlists/\".concat(id, \"/tracks\"), {\n                headers: {\n                    Authorization: \"Bearer \".concat(token)\n                }\n            }).then((res)=>{\n                setMyData(res.data.items);\n                setArtistsName(res.data.items[0].track.album.artists[0].name);\n            }).catch((e)=>{\n                router.push(\"/404\");\n            });\n        }\n        getAllAlbums();\n    }, [\n        id\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Layouts_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"Hello\"\n        }, void 0, false, {\n            fileName: \"D:\\\\5_hour_chalanges\\\\spotify_nextjs\\\\src\\\\pages\\\\albums\\\\[id].tsx\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\5_hour_chalanges\\\\spotify_nextjs\\\\src\\\\pages\\\\albums\\\\[id].tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n_s(currentAlbum, \"wrolhMmU6CshRn5da1ibKrp2ajs=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (currentAlbum);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYWxidW1zL1tpZF0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQXFDO0FBQ0U7QUFDVztBQUVsRCxNQUFNSyxlQUFlLElBQU07O0lBQ3pCLE1BQU0sRUFBRSxHQUFHRCwrQ0FBUUE7SUFDbkIsTUFBTUUsU0FBU0wsc0RBQVNBO0lBQ3hCLE1BQU1NLEtBQUtELE9BQU9FLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO0lBQ3RDTixnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsZUFBZU8sZUFBZTtZQUM1QixJQUFJQyxRQUFRQyxhQUFhQyxPQUFPLENBQUM7WUFDakMsTUFBTUMsTUFBTUMsR0FBRyxDQUFDLHdDQUEyQyxPQUFIUixJQUFHLFlBQVU7Z0JBQ25FUyxTQUFTO29CQUNQQyxlQUFlLFVBQWdCLE9BQU5OO2dCQUMzQjtZQUNGLEdBQUdPLElBQUksQ0FBQ0MsQ0FBQUEsTUFBTztnQkFDYkMsVUFBVUQsSUFBSUUsSUFBSSxDQUFDQyxLQUFLO2dCQUN4QkMsZUFBZUosSUFBSUUsSUFBSSxDQUFDQyxLQUFLLENBQUMsRUFBRSxDQUFDRSxLQUFLLENBQUNDLEtBQUssQ0FBQ0MsT0FBTyxDQUFDLEVBQUUsQ0FBQ0MsSUFBSTtZQUM5RCxHQUFHQyxLQUFLLENBQUMsQ0FBQ0MsSUFBTTtnQkFDZHZCLE9BQU93QixJQUFJLENBQUM7WUFDZDtRQUNGO1FBQ0FwQjtJQUNGLEdBQUc7UUFBQ0g7S0FBRztJQUNQLHFCQUNFLDhEQUFDUCx1REFBTUE7a0JBQ0wsNEVBQUMrQjtzQkFBRzs7Ozs7Ozs7Ozs7QUFHVjtHQXpCTTFCOztRQUVXSixrREFBU0E7OztBQXlCMUIsK0RBQWVJLFlBQVlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2FsYnVtcy9baWRdLnRzeD8zMTA0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnQC9MYXlvdXRzL0xheW91dCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBjdXJyZW50QWxidW0gPSAoKSA9PiB7XHJcbiAgY29uc3QgW10gPSB1c2VTdGF0ZSgpXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBpZCA9IHJvdXRlci5hc1BhdGguc3BsaXQoJy8nKVsyXVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRBbGxBbGJ1bXMoKSB7XHJcbiAgICAgIGxldCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpXHJcbiAgICAgIGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9hcGkuc3BvdGlmeS5jb20vdjEvcGxheWxpc3RzLyR7aWR9L3RyYWNrc2AsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBzZXRNeURhdGEocmVzLmRhdGEuaXRlbXMpXHJcbiAgICAgICAgc2V0QXJ0aXN0c05hbWUocmVzLmRhdGEuaXRlbXNbMF0udHJhY2suYWxidW0uYXJ0aXN0c1swXS5uYW1lKVxyXG4gICAgICB9KS5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvNDA0JylcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBnZXRBbGxBbGJ1bXMoKVxyXG4gIH0sIFtpZF0pXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxoMT5IZWxsbzwvaDE+XHJcbiAgICA8L0xheW91dD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1cnJlbnRBbGJ1bVxyXG4iXSwibmFtZXMiOlsiTGF5b3V0IiwidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImN1cnJlbnRBbGJ1bSIsInJvdXRlciIsImlkIiwiYXNQYXRoIiwic3BsaXQiLCJnZXRBbGxBbGJ1bXMiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJheGlvcyIsImdldCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidGhlbiIsInJlcyIsInNldE15RGF0YSIsImRhdGEiLCJpdGVtcyIsInNldEFydGlzdHNOYW1lIiwidHJhY2siLCJhbGJ1bSIsImFydGlzdHMiLCJuYW1lIiwiY2F0Y2giLCJlIiwicHVzaCIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/albums/[id].tsx\n"));

/***/ })

});