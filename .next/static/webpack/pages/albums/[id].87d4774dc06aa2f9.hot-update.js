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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Layouts_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Layouts/Layout */ \"./src/Layouts/Layout.tsx\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_icons_material_AccessTime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/AccessTime */ \"./node_modules/@mui/icons-material/AccessTime.js\");\n/* harmony import */ var _mui_icons_material_ErrorOutline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/ErrorOutline */ \"./node_modules/@mui/icons-material/ErrorOutline.js\");\n/* harmony import */ var _components_AlbumSongItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/AlbumSongItem */ \"./src/components/AlbumSongItem.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst currentAlbum = ()=>{\n    var _data_track, _data_track_album;\n    _s();\n    const [myData, setMyData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [artistsName, setArtistsName] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const id = router.asPath.split(\"/\")[2];\n    const image = \"https://i.ytimg.com/vi/pvlakjE8h6Q/maxresdefault.jpg\";\n    const data = myData[0];\n    const images = data === null || data === void 0 ? void 0 : (_data_track = data.track) === null || _data_track === void 0 ? void 0 : (_data_track_album = _data_track.album) === null || _data_track_album === void 0 ? void 0 : _data_track_album.images[0].url;\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        async function getAllAlbums() {\n            let token = localStorage.getItem(\"token\");\n            await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"https://api.spotify.com/v1/albums/\".concat(id, \"/tracks\"), {\n                headers: {\n                    Authorization: \"Bearer \".concat(token)\n                }\n            }).then((res)=>{\n                var _res_data_items__artists_, _res_data_items_, _res_data, _res_data_items__artists_1, _res_data_items_1, _res_data1;\n                setMyData(res.data.items);\n                console.log(res.data);\n                setArtistsName((_res_data_items__artists_ = (_res_data_items_ = res === null || res === void 0 ? void 0 : (_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.items[0]) === null || _res_data_items_ === void 0 ? void 0 : _res_data_items_.artists[0]) === null || _res_data_items__artists_ === void 0 ? void 0 : _res_data_items__artists_.name);\n                setArtistsName((_res_data_items__artists_1 = (_res_data_items_1 = res === null || res === void 0 ? void 0 : (_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.items[0]) === null || _res_data_items_1 === void 0 ? void 0 : _res_data_items_1.artists[0]) === null || _res_data_items__artists_1 === void 0 ? void 0 : _res_data_items__artists_1.name);\n            }).catch((e)=>{\n            // router.push('/404')\n            });\n        }\n        getAllAlbums();\n    }, [\n        id\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Layouts_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: myData.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Stack, {\n            sx: {\n                width: \"100%\",\n                height: \"100%\",\n                display: \"flex\",\n                justifyContent: \"center\",\n                alignItems: \"center\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"loading\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"blob1 blob\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\5_hour_chalanges\\\\spotify_nextjs\\\\src\\\\pages\\\\albums\\\\[id].tsx\",\n                        lineNumber: 46,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"blob2 blob\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\5_hour_chalanges\\\\spotify_nextjs\\\\src\\\\pages\\\\albums\\\\[id].tsx\",\n                        lineNumber: 47,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"blob3 blob\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\5_hour_chalanges\\\\spotify_nextjs\\\\src\\\\pages\\\\albums\\\\[id].tsx\",\n                        lineNumber: 48,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\5_hour_chalanges\\\\spotify_nextjs\\\\src\\\\pages\\\\albums\\\\[id].tsx\",\n                lineNumber: 45,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\5_hour_chalanges\\\\spotify_nextjs\\\\src\\\\pages\\\\albums\\\\[id].tsx\",\n            lineNumber: 44,\n            columnNumber: 31\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Stack, {\n            sx: {\n                transition: \".4s ease\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Stack, {\n                    sx: {\n                        gap: \"20px\",\n                        background: \"transparent\",\n                        flexDirection: \"row\",\n                        alignItems: \"flex-end\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: images || image,\n                            style: {\n                                width: \"250px\",\n                                height: \"250px\",\n                                objectFit: \"cover\",\n                                boxShadow: \"0px 0px 8px 10px rgba(34, 60, 80, 0.07)\"\n                            },\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\5_hour_chalanges\\\\spotify_nextjs\\\\src\\\\pages\\\\albums\\\\[id].tsx\",\n                            lineNumber: 54,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Stack, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {\n                                    sx: {\n                                        color: \"White\",\n                                        fontWeight: \"700\",\n                                        fontSize: \"18px\"\n                                    },\n                                    children: \"Open playist\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\5_hour_chalanges\\\\spotify_nextjs\\\\src\\\\pages\\\\albums\\\\[id].tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {\n                                    sx: {\n                                        color: \"White\",\n                                        fontWeight: \"700\",\n                                        fontSize: \"62px\"\n                                    },\n                                    children: name\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\5_hour_chalanges\\\\spotify_nextjs\\\\src\\\\pages\\\\albums\\\\[id].tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {\n                                    sx: {\n                                        color: \"white\",\n                                        fontWeight: \"500\",\n                                        fontSize: \"20px\"\n                                    },\n                                    children: [\n                                        artistsName,\n                                        \" : \",\n                                        myData.length,\n                                        \" tracks \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\5_hour_chalanges\\\\spotify_nextjs\\\\src\\\\pages\\\\albums\\\\[id].tsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\5_hour_chalanges\\\\spotify_nextjs\\\\src\\\\pages\\\\albums\\\\[id].tsx\",\n                            lineNumber: 55,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\5_hour_chalanges\\\\spotify_nextjs\\\\src\\\\pages\\\\albums\\\\[id].tsx\",\n                    lineNumber: 53,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Stack, {\n                    sx: {\n                        width: \"100%\",\n                        paddingTop: \"30px\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Stack, {\n                                        sx: {\n                                            flexDirection: \"row\",\n                                            gap: \"14px\"\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {\n                                            sx: {\n                                                color: \"#989898\",\n                                                fontSize: \"18px\",\n                                                fontWeight: \"600\"\n                                            },\n                                            children: \"Name\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\5_hour_chalanges\\\\spotify_nextjs\\\\src\\\\pages\\\\albums\\\\[id].tsx\",\n                                            lineNumber: 65,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\5_hour_chalanges\\\\spotify_nextjs\\\\src\\\\pages\\\\albums\\\\[id].tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {\n                                        sx: {\n                                            width: \"90px\"\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_AccessTime__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                            sx: {\n                                                color: \"#989898\",\n                                                fontWeight: \"600\"\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\5_hour_chalanges\\\\spotify_nextjs\\\\src\\\\pages\\\\albums\\\\[id].tsx\",\n                                            lineNumber: 68,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\5_hour_chalanges\\\\spotify_nextjs\\\\src\\\\pages\\\\albums\\\\[id].tsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 19\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\5_hour_chalanges\\\\spotify_nextjs\\\\src\\\\pages\\\\albums\\\\[id].tsx\",\n                                lineNumber: 63,\n                                columnNumber: 17\n                            }, undefined),\n                            myData.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {\n                                sx: {\n                                    color: \"#989898\",\n                                    display: \"flex\",\n                                    gap: \"10px\",\n                                    alignItems: \"center\",\n                                    justifyContent: \"center\",\n                                    fontSize: \"30px\",\n                                    fontWeight: \"600\",\n                                    textAlign: \"center\"\n                                },\n                                children: [\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ErrorOutline__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                        sx: {\n                                            fontSize: \"32px\"\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\5_hour_chalanges\\\\spotify_nextjs\\\\src\\\\pages\\\\albums\\\\[id].tsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 216\n                                    }, undefined),\n                                    \" There we have not tracks\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\5_hour_chalanges\\\\spotify_nextjs\\\\src\\\\pages\\\\albums\\\\[id].tsx\",\n                                lineNumber: 72,\n                                columnNumber: 41\n                            }, undefined) : myData.map((i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AlbumSongItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    image: image,\n                                    images: images,\n                                    i: i\n                                }, i.id, false, {\n                                    fileName: \"D:\\\\5_hour_chalanges\\\\spotify_nextjs\\\\src\\\\pages\\\\albums\\\\[id].tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 21\n                                }, undefined))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\5_hour_chalanges\\\\spotify_nextjs\\\\src\\\\pages\\\\albums\\\\[id].tsx\",\n                        lineNumber: 62,\n                        columnNumber: 15\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\5_hour_chalanges\\\\spotify_nextjs\\\\src\\\\pages\\\\albums\\\\[id].tsx\",\n                    lineNumber: 61,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\5_hour_chalanges\\\\spotify_nextjs\\\\src\\\\pages\\\\albums\\\\[id].tsx\",\n            lineNumber: 52,\n            columnNumber: 11\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\5_hour_chalanges\\\\spotify_nextjs\\\\src\\\\pages\\\\albums\\\\[id].tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, undefined);\n};\n_s(currentAlbum, \"m5PDR3MuKAStBkCmmB9yWN10i1g=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (currentAlbum);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7OzRCQUk1RG5ELE9BQU84QixNQUFNLEtBQUssa0JBQUksOERBQUN6QyxxREFBVUE7Z0NBQUMwQyxJQUFJO29DQUFFbUIsT0FBTztvQ0FBV2hCLFNBQVM7b0NBQVFPLEtBQUs7b0NBQVFMLFlBQVk7b0NBQVVELGdCQUFnQjtvQ0FBVWlCLFVBQVU7b0NBQVFELFlBQVk7b0NBQU9LLFdBQVc7Z0NBQVM7O29DQUFHO2tEQUFDLDhEQUFDNUQsd0VBQWdCQTt3Q0FBQ21DLElBQUk7NENBQUVxQixVQUFVO3dDQUFPOzs7Ozs7b0NBQUs7Ozs7Ozs0Q0FBeUNwRCxPQUFPeUQsR0FBRyxDQUFDLENBQUNDLGtCQUN0Uyw4REFBQzdELGlFQUFhQTtvQ0FBQ2EsT0FBT0E7b0NBQU9DLFFBQVFBO29DQUFRK0MsR0FBR0E7bUNBQVFBLEVBQUVuRCxFQUFFOzs7OzhDQUM1RDs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBSUY7Ozs7OztBQUlsQjtHQXZFTVQ7O1FBSVdQLGtEQUFTQTs7O0FBcUUxQiwrREFBZU8sWUFBWUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvYWxidW1zL1tpZF0udHN4PzMxMDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICdAL0xheW91dHMvTGF5b3V0J1xyXG5pbXBvcnQgeyBTdGFjaywgVHlwb2dyYXBoeSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBBY2Nlc3NUaW1lSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0FjY2Vzc1RpbWUnO1xyXG5pbXBvcnQgU29uZ0l0ZW0gZnJvbSAnQC9jb21wb25lbnRzL1NvbmdJdGVtJ1xyXG5pbXBvcnQgRXJyb3JPdXRsaW5lSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Vycm9yT3V0bGluZSc7XHJcbmltcG9ydCBBbGJ1bVNvbmdJdGVtIGZyb20gJ0AvY29tcG9uZW50cy9BbGJ1bVNvbmdJdGVtJ1xyXG5cclxuY29uc3QgY3VycmVudEFsYnVtID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtteURhdGEsIHNldE15RGF0YV0gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbYXJ0aXN0c05hbWUsIHNldEFydGlzdHNOYW1lXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgaWQgPSByb3V0ZXIuYXNQYXRoLnNwbGl0KCcvJylbMl1cclxuICBjb25zdCBpbWFnZSA9ICdodHRwczovL2kueXRpbWcuY29tL3ZpL3B2bGFrakU4aDZRL21heHJlc2RlZmF1bHQuanBnJ1xyXG5cclxuICBjb25zdCBkYXRhOiBhbnkgPSBteURhdGFbMF1cclxuICBjb25zdCBpbWFnZXMgPSBkYXRhPy50cmFjaz8uYWxidW0/LmltYWdlc1swXS51cmxcclxuICBcclxuICBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsQWxidW1zKCkge1xyXG4gICAgICBsZXQgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKVxyXG4gICAgICBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vYXBpLnNwb3RpZnkuY29tL3YxL2FsYnVtcy8ke2lkfS90cmFja3NgLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWBcclxuICAgICAgICB9LFxyXG4gICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgc2V0TXlEYXRhKHJlcy5kYXRhLml0ZW1zKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICBzZXRBcnRpc3RzTmFtZShyZXM/LmRhdGE/Lml0ZW1zWzBdPy5hcnRpc3RzWzBdPy5uYW1lKVxyXG4gICAgICAgIHNldEFydGlzdHNOYW1lKHJlcz8uZGF0YT8uaXRlbXNbMF0/LmFydGlzdHNbMF0/Lm5hbWUpXHJcbiAgICAgIH0pLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgLy8gcm91dGVyLnB1c2goJy80MDQnKVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGdldEFsbEFsYnVtcygpXHJcbiAgfSwgW2lkXSlcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAge1xyXG4gICAgICAgIG15RGF0YS5sZW5ndGggPT09IDAgPyA8U3RhY2sgc3g9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScsIGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsb2IxIGJsb2JcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsb2IyIGJsb2JcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsb2IzIGJsb2JcIj48L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgOlxyXG4gICAgICAgICAgPFN0YWNrIHN4PXt7IHRyYW5zaXRpb246ICcuNHMgZWFzZScgfX0+XHJcbiAgICAgICAgICAgIDxTdGFjayBzeD17eyBnYXA6IFwiMjBweFwiLCBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLCBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLCBhbGlnbkl0ZW1zOiAnZmxleC1lbmQnIH19PlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZXMgfHwgaW1hZ2V9IHN0eWxlPXt7IHdpZHRoOiAnMjUwcHgnLCBoZWlnaHQ6ICcyNTBweCcsIG9iamVjdEZpdDogJ2NvdmVyJywgYm94U2hhZG93OiAnMHB4IDBweCA4cHggMTBweCByZ2JhKDM0LCA2MCwgODAsIDAuMDcpJyB9fSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgIDxTdGFjaz5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IGNvbG9yOiBcIldoaXRlXCIsIGZvbnRXZWlnaHQ6IFwiNzAwXCIsIGZvbnRTaXplOiAnMThweCcgfX0+T3BlbiBwbGF5aXN0PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgY29sb3I6IFwiV2hpdGVcIiwgZm9udFdlaWdodDogXCI3MDBcIiwgZm9udFNpemU6ICc2MnB4JyB9fT57bmFtZX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBjb2xvcjogJ3doaXRlJywgZm9udFdlaWdodDogXCI1MDBcIiwgZm9udFNpemU6ICcyMHB4JyB9fSA+e2FydGlzdHNOYW1lfSA6IHtteURhdGEubGVuZ3RofSB0cmFja3MgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICAgIDxTdGFjayBzeD17eyB3aWR0aDogJzEwMCUnLCBwYWRkaW5nVG9wOiBcIjMwcHhcIiB9fT5cclxuICAgICAgICAgICAgICA8b2w+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxTdGFjayBzeD17eyBmbGV4RGlyZWN0aW9uOiAncm93JywgZ2FwOiBcIjE0cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBjb2xvcjogJyM5ODk4OTgnLCBmb250U2l6ZTogJzE4cHgnLCBmb250V2VpZ2h0OiBcIjYwMFwiLCB9fT5OYW1lPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyB3aWR0aDogJzkwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxBY2Nlc3NUaW1lSWNvbiBzeD17eyBjb2xvcjogJyM5ODk4OTgnLCBmb250V2VpZ2h0OiAnNjAwJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBteURhdGEubGVuZ3RoID09PSAwID8gPFR5cG9ncmFwaHkgc3g9e3sgY29sb3I6ICcjOTg5ODk4JywgZGlzcGxheTogJ2ZsZXgnLCBnYXA6IFwiMTBweFwiLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBmb250U2l6ZTogJzMwcHgnLCBmb250V2VpZ2h0OiBcIjYwMFwiLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PiA8RXJyb3JPdXRsaW5lSWNvbiBzeD17eyBmb250U2l6ZTogJzMycHgnIH19IC8+IFRoZXJlIHdlIGhhdmUgbm90IHRyYWNrczwvVHlwb2dyYXBoeT4gOiBteURhdGEubWFwKChpOiBhbnkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8QWxidW1Tb25nSXRlbSBpbWFnZT17aW1hZ2V9IGltYWdlcz17aW1hZ2VzfSBpPXtpfSBrZXk9e2kuaWR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPC9vbD5cclxuICAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgIH1cclxuICAgIDwvTGF5b3V0PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3VycmVudEFsYnVtXHJcbiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJTdGFjayIsIlR5cG9ncmFwaHkiLCJheGlvcyIsInVzZVJvdXRlciIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBY2Nlc3NUaW1lSWNvbiIsIkVycm9yT3V0bGluZUljb24iLCJBbGJ1bVNvbmdJdGVtIiwiY3VycmVudEFsYnVtIiwiZGF0YSIsIm15RGF0YSIsInNldE15RGF0YSIsImFydGlzdHNOYW1lIiwic2V0QXJ0aXN0c05hbWUiLCJuYW1lIiwic2V0TmFtZSIsInJvdXRlciIsImlkIiwiYXNQYXRoIiwic3BsaXQiLCJpbWFnZSIsImltYWdlcyIsInRyYWNrIiwiYWxidW0iLCJ1cmwiLCJnZXRBbGxBbGJ1bXMiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJnZXQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInRoZW4iLCJyZXMiLCJpdGVtcyIsImNvbnNvbGUiLCJsb2ciLCJhcnRpc3RzIiwiY2F0Y2giLCJlIiwibGVuZ3RoIiwic3giLCJ3aWR0aCIsImhlaWdodCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJkaXYiLCJjbGFzc05hbWUiLCJzcGFuIiwidHJhbnNpdGlvbiIsImdhcCIsImJhY2tncm91bmQiLCJmbGV4RGlyZWN0aW9uIiwiaW1nIiwic3JjIiwic3R5bGUiLCJvYmplY3RGaXQiLCJib3hTaGFkb3ciLCJhbHQiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsInBhZGRpbmdUb3AiLCJvbCIsImxpIiwidGV4dEFsaWduIiwibWFwIiwiaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/albums/[id].tsx\n"));

/***/ })

});