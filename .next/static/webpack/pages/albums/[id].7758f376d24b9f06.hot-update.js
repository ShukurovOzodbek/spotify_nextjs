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

/***/ "./src/components/AlbumSongItem.tsx":
/*!******************************************!*\
  !*** ./src/components/AlbumSongItem.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Stack */ \"./node_modules/@mui/material/Stack/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/index.js\");\n/* harmony import */ var _contexts_songContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/contexts/songContext */ \"./src/contexts/songContext.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst AlbumSongItem = (param)=>{\n    let { images , image , i  } = param;\n    _s();\n    const { changeSong  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_songContext__WEBPACK_IMPORTED_MODULE_2__.songContext);\n    const handleClick = ()=>{\n        var _i_album_images_, _i_album;\n        changeSong({\n            image: (_i_album_images_ = i === null || i === void 0 ? void 0 : (_i_album = i.album) === null || _i_album === void 0 ? void 0 : _i_album.images[0]) === null || _i_album_images_ === void 0 ? void 0 : _i_album_images_.url,\n            uri: i === null || i === void 0 ? void 0 : i.preview_url,\n            artist: i === null || i === void 0 ? void 0 : i.artists[0].name,\n            songName: i === null || i === void 0 ? void 0 : i.name\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: \"lis\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                sx: {\n                    flexDirection: \"row\",\n                    gap: \"14px\",\n                    alignItems: \"center\"\n                },\n                onDoubleClick: handleClick,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: images || image,\n                        style: {\n                            width: \"38px\",\n                            height: \"38px\",\n                            objectFit: \"cover\",\n                            borderRadius: \"4px\"\n                        },\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\5_hour_chalanges\\\\spotify_nextjs\\\\src\\\\components\\\\AlbumSongItem.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        sx: {\n                            fontSize: \"16px\",\n                            fontWeight: \"400\",\n                            textAlign: \"left\"\n                        },\n                        children: i.name\n                    }, void 0, false, {\n                        fileName: \"D:\\\\5_hour_chalanges\\\\spotify_nextjs\\\\src\\\\components\\\\AlbumSongItem.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\5_hour_chalanges\\\\spotify_nextjs\\\\src\\\\components\\\\AlbumSongItem.tsx\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                sx: {\n                    fontSize: \"16px\",\n                    fontWeight: \"400\",\n                    width: \"120px\"\n                },\n                children: [\n                    \"0\",\n                    Math.floor(i.duration_ms / 1000 / 60 << 0),\n                    \" : \",\n                    Math.floor(i.duration_ms / 1000 % 60) < 10 ? \"0\".concat(Math.floor(i.duration_ms / 1000 % 60)) : Math.floor(i.duration_ms / 1000 % 60)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\5_hour_chalanges\\\\spotify_nextjs\\\\src\\\\components\\\\AlbumSongItem.tsx\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\5_hour_chalanges\\\\spotify_nextjs\\\\src\\\\components\\\\AlbumSongItem.tsx\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, undefined);\n};\n_s(AlbumSongItem, \"N35S0XtABwJd7lIO2DMBGITGhUk=\");\n_c = AlbumSongItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AlbumSongItem);\nvar _c;\n$RefreshReg$(_c, \"AlbumSongItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BbGJ1bVNvbmdJdGVtLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUF1QztBQUNZO0FBQ0Y7QUFDSTtBQVNyRCxNQUFNSyxnQkFBa0MsU0FBMEI7UUFBekIsRUFBRUMsT0FBTSxFQUFFQyxNQUFLLEVBQUVDLEVBQUMsRUFBRTs7SUFDekQsTUFBTSxFQUFFQyxXQUFVLEVBQUUsR0FBR1AsaURBQVVBLENBQUNFLDhEQUFXQTtJQUM3QyxNQUFNTSxjQUFjLElBQU07WUFDRkYsa0JBQUFBO1FBQXBCQyxXQUFXO1lBQUVGLE9BQU9DLENBQUFBLG1CQUFBQSxjQUFBQSxlQUFBQSxLQUFBQSxJQUFBQSxDQUFBQSxXQUFBQSxFQUFHRyxLQUFLLGNBQVJILHNCQUFBQSxLQUFBQSxJQUFBQSxTQUFVRixNQUFNLENBQUMsRUFBRSxjQUFuQkUsOEJBQUFBLEtBQUFBLElBQUFBLGlCQUFxQkksR0FBRztZQUFFQyxLQUFLTCxjQUFBQSxlQUFBQSxLQUFBQSxJQUFBQSxFQUFHTSxXQUFXO1lBQUVDLE1BQU0sRUFBRVAsY0FBQUEsZUFBQUEsS0FBQUEsSUFBQUEsRUFBR1EsT0FBTyxDQUFDLEVBQUUsQ0FBQ0MsSUFBSTtZQUFFQyxVQUFVVixjQUFBQSxlQUFBQSxLQUFBQSxJQUFBQSxFQUFHUyxJQUFJO1FBQUM7SUFDckg7SUFFQSxxQkFDSSw4REFBQ0U7UUFBR0MsV0FBVTs7MEJBQ1YsOERBQUNwQiwyREFBS0E7Z0JBQUNxQixJQUFJO29CQUFFQyxlQUFlO29CQUFPQyxLQUFLO29CQUFRQyxZQUFZO2dCQUFTO2dCQUFHQyxlQUFlZjs7a0NBQ25GLDhEQUFDZ0I7d0JBQUlDLEtBQUtyQixVQUFVQzt3QkFBT3FCLE9BQU87NEJBQUVDLE9BQU87NEJBQVFDLFFBQVE7NEJBQVFDLFdBQVc7NEJBQVNDLGNBQWM7d0JBQU07d0JBQUdDLEtBQUk7Ozs7OztrQ0FDbEgsOERBQUM5QixnRUFBVUE7d0JBQUNrQixJQUFJOzRCQUFFYSxVQUFVOzRCQUFRQyxZQUFZOzRCQUFPQyxXQUFXO3dCQUFPO2tDQUFLNUIsRUFBRVMsSUFBSTs7Ozs7Ozs7Ozs7OzBCQUV4Riw4REFBQ2QsZ0VBQVVBO2dCQUFDa0IsSUFBSTtvQkFBRWEsVUFBVTtvQkFBUUMsWUFBWTtvQkFBT04sT0FBTztnQkFBUTs7b0JBQUk7b0JBQUVRLEtBQUtDLEtBQUssQ0FBQyxFQUFHQyxXQUFXLEdBQUcsT0FBTyxNQUFPO29CQUFHO29CQUFJRixLQUFLQyxLQUFLLENBQUMsRUFBR0MsV0FBVyxHQUFHLE9BQVEsTUFBTSxLQUFLLElBQTRDLE9BQXhDRixLQUFLQyxLQUFLLENBQUMsRUFBR0MsV0FBVyxHQUFHLE9BQVEsT0FBUUYsS0FBS0MsS0FBSyxDQUFDLEVBQUdDLFdBQVcsR0FBRyxPQUFRLEdBQUc7Ozs7Ozs7Ozs7Ozs7QUFHL1E7R0FmTWxDO0tBQUFBO0FBaUJOLCtEQUFlQSxhQUFhQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0FsYnVtU29uZ0l0ZW0udHN4PzlhZDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0YWNrIGZyb20gJ0BtdWkvbWF0ZXJpYWwvU3RhY2snXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHknXHJcbmltcG9ydCB7IHNvbmdDb250ZXh0IH0gZnJvbSAnQC9jb250ZXh0cy9zb25nQ29udGV4dCc7XHJcblxyXG5pbnRlcmZhY2UgSVByb3BzIHtcclxuICAgIGltYWdlczogc3RyaW5nLFxyXG4gICAgaW1hZ2U6IHN0cmluZyxcclxuICAgIGk6IGFueSxcclxuICAgIGltYWdlPzogc3RyaW5nXHJcbn1cclxuXHJcbmNvbnN0IEFsYnVtU29uZ0l0ZW06IFJlYWN0LkZDPElQcm9wcz4gPSAoeyBpbWFnZXMsIGltYWdlLCBpIH0pID0+IHtcclxuICAgIGNvbnN0IHsgY2hhbmdlU29uZyB9ID0gdXNlQ29udGV4dChzb25nQ29udGV4dClcclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGNoYW5nZVNvbmcoeyBpbWFnZTogaT8uYWxidW0/LmltYWdlc1swXT8udXJsLCB1cmk6IGk/LnByZXZpZXdfdXJsLCBhcnRpc3Q6IGk/LmFydGlzdHNbMF0ubmFtZSwgc29uZ05hbWU6IGk/Lm5hbWUgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9J2xpcyc+XHJcbiAgICAgICAgICAgIDxTdGFjayBzeD17eyBmbGV4RGlyZWN0aW9uOiAncm93JywgZ2FwOiBcIjE0cHhcIiwgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0gb25Eb3VibGVDbGljaz17aGFuZGxlQ2xpY2t9PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlcyB8fCBpbWFnZX0gc3R5bGU9e3sgd2lkdGg6ICczOHB4JywgaGVpZ2h0OiAnMzhweCcsIG9iamVjdEZpdDogJ2NvdmVyJywgYm9yZGVyUmFkaXVzOiAnNHB4JyB9fSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgZm9udFNpemU6ICcxNnB4JywgZm9udFdlaWdodDogJzQwMCcsIHRleHRBbGlnbjogJ2xlZnQnIH19ID57aS5uYW1lfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgZm9udFNpemU6ICcxNnB4JywgZm9udFdlaWdodDogJzQwMCcsIHdpZHRoOiAnMTIwcHgnIH19ID4we01hdGguZmxvb3IoKGkuZHVyYXRpb25fbXMgLyAxMDAwIC8gNjApIDw8IDApfSA6IHtNYXRoLmZsb29yKChpLmR1cmF0aW9uX21zIC8gMTAwMCkgJSA2MCkgPCAxMCA/IGAwJHtNYXRoLmZsb29yKChpLmR1cmF0aW9uX21zIC8gMTAwMCkgJSA2MCl9YCA6IE1hdGguZmxvb3IoKGkuZHVyYXRpb25fbXMgLyAxMDAwKSAlIDYwKX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9saT5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWxidW1Tb25nSXRlbVxyXG4iXSwibmFtZXMiOlsiU3RhY2siLCJSZWFjdCIsInVzZUNvbnRleHQiLCJUeXBvZ3JhcGh5Iiwic29uZ0NvbnRleHQiLCJBbGJ1bVNvbmdJdGVtIiwiaW1hZ2VzIiwiaW1hZ2UiLCJpIiwiY2hhbmdlU29uZyIsImhhbmRsZUNsaWNrIiwiYWxidW0iLCJ1cmwiLCJ1cmkiLCJwcmV2aWV3X3VybCIsImFydGlzdCIsImFydGlzdHMiLCJuYW1lIiwic29uZ05hbWUiLCJsaSIsImNsYXNzTmFtZSIsInN4IiwiZmxleERpcmVjdGlvbiIsImdhcCIsImFsaWduSXRlbXMiLCJvbkRvdWJsZUNsaWNrIiwiaW1nIiwic3JjIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsIm9iamVjdEZpdCIsImJvcmRlclJhZGl1cyIsImFsdCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsInRleHRBbGlnbiIsIk1hdGgiLCJmbG9vciIsImR1cmF0aW9uX21zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/AlbumSongItem.tsx\n"));

/***/ })

});