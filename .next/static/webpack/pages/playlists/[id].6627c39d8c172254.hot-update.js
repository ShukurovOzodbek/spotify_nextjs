"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/playlists/[id]",{

/***/ "./src/pages/playlists/[id].tsx":
/*!**************************************!*\
  !*** ./src/pages/playlists/[id].tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Layouts_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Layouts/Layout */ \"./src/Layouts/Layout.tsx\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_icons_material_AccessTime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/AccessTime */ \"./node_modules/@mui/icons-material/AccessTime.js\");\n/* harmony import */ var _mui_icons_material_ErrorOutline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/ErrorOutline */ \"./node_modules/@mui/icons-material/ErrorOutline.js\");\n/* harmony import */ var _components_SongItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/SongItem */ \"./src/components/SongItem.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst playlistId = ()=>{\n    _s();\n    const [myData, setMyData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [artistsName, setArtistsName] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [isPlay, setIsPlay] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const image = \"https://i.ytimg.com/vi/pvlakjE8h6Q/maxresdefault.jpg\";\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const id = router.asPath.split(\"/\")[2];\n    const data = myData[0];\n    const images = data === null || data === void 0 ? void 0 : data.track.album.images[0].url;\n    const name = data === null || data === void 0 ? void 0 : data.track.album.name;\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        setMyData([]);\n        async function getAllAlbums() {\n            let token = localStorage.getItem(\"token\");\n            await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"https://api.spotify.com/v1/playlists/\".concat(id, \"/tracks\"), {\n                headers: {\n                    Authorization: \"Bearer \".concat(token)\n                }\n            }).then((res)=>{\n                setMyData(res.data.items);\n                setArtistsName(res.data.items[0].track.album.artists[0].name);\n            }).catch((e)=>{\n                console.log();\n            });\n        }\n        getAllAlbums();\n    }, [\n        id\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Layouts_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        background: images,\n        children: myData.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Stack, {\n            sx: {\n                width: \"100%\",\n                height: \"100%\",\n                display: \"flex\",\n                justifyContent: \"center\",\n                alignItems: \"center\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"loading\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"blob1 blob\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\5_hour_chalanges\\\\spotify_nextjs\\\\src\\\\pages\\\\playlists\\\\[id].tsx\",\n                        lineNumber: 49,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"blob2 blob\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\5_hour_chalanges\\\\spotify_nextjs\\\\src\\\\pages\\\\playlists\\\\[id].tsx\",\n                        lineNumber: 50,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"blob3 blob\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\5_hour_chalanges\\\\spotify_nextjs\\\\src\\\\pages\\\\playlists\\\\[id].tsx\",\n                        lineNumber: 51,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\5_hour_chalanges\\\\spotify_nextjs\\\\src\\\\pages\\\\playlists\\\\[id].tsx\",\n                lineNumber: 48,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\5_hour_chalanges\\\\spotify_nextjs\\\\src\\\\pages\\\\playlists\\\\[id].tsx\",\n            lineNumber: 47,\n            columnNumber: 31\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Stack, {\n            sx: {\n                transition: \".4s ease\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Stack, {\n                    sx: {\n                        gap: \"20px\",\n                        background: \"transparent\",\n                        flexDirection: \"row\",\n                        alignItems: \"flex-end\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: images || image,\n                            style: {\n                                width: \"250px\",\n                                height: \"250px\",\n                                objectFit: \"cover\",\n                                boxShadow: \"0px 0px 8px 10px rgba(34, 60, 80, 0.07)\"\n                            },\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\5_hour_chalanges\\\\spotify_nextjs\\\\src\\\\pages\\\\playlists\\\\[id].tsx\",\n                            lineNumber: 57,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Stack, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    sx: {\n                                        color: \"White\",\n                                        fontWeight: \"700\",\n                                        fontSize: \"18px\"\n                                    },\n                                    children: \"Open playist\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\5_hour_chalanges\\\\spotify_nextjs\\\\src\\\\pages\\\\playlists\\\\[id].tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    sx: {\n                                        color: \"White\",\n                                        fontWeight: \"700\",\n                                        fontSize: \"62px\"\n                                    },\n                                    children: name\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\5_hour_chalanges\\\\spotify_nextjs\\\\src\\\\pages\\\\playlists\\\\[id].tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    sx: {\n                                        color: \"white\",\n                                        fontWeight: \"500\",\n                                        fontSize: \"20px\"\n                                    },\n                                    children: [\n                                        artistsName,\n                                        \" : \",\n                                        myData.length,\n                                        \" tracks \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\5_hour_chalanges\\\\spotify_nextjs\\\\src\\\\pages\\\\playlists\\\\[id].tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\5_hour_chalanges\\\\spotify_nextjs\\\\src\\\\pages\\\\playlists\\\\[id].tsx\",\n                            lineNumber: 58,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\5_hour_chalanges\\\\spotify_nextjs\\\\src\\\\pages\\\\playlists\\\\[id].tsx\",\n                    lineNumber: 56,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Stack, {\n                    sx: {\n                        width: \"100%\",\n                        paddingTop: \"30px\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Stack, {\n                                        sx: {\n                                            flexDirection: \"row\",\n                                            gap: \"14px\"\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                            sx: {\n                                                color: \"#989898\",\n                                                fontSize: \"18px\",\n                                                fontWeight: \"600\"\n                                            },\n                                            children: \"Name\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\5_hour_chalanges\\\\spotify_nextjs\\\\src\\\\pages\\\\playlists\\\\[id].tsx\",\n                                            lineNumber: 68,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\5_hour_chalanges\\\\spotify_nextjs\\\\src\\\\pages\\\\playlists\\\\[id].tsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Stack, {\n                                        sx: {\n                                            flexDirection: \"row\",\n                                            gap: \"14px\"\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                            sx: {\n                                                color: \"#989898\",\n                                                fontSize: \"18px\",\n                                                fontWeight: \"600\"\n                                            },\n                                            children: \"Date\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\5_hour_chalanges\\\\spotify_nextjs\\\\src\\\\pages\\\\playlists\\\\[id].tsx\",\n                                            lineNumber: 71,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\5_hour_chalanges\\\\spotify_nextjs\\\\src\\\\pages\\\\playlists\\\\[id].tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                        sx: {\n                                            width: \"90px\"\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_AccessTime__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                            sx: {\n                                                color: \"#989898\",\n                                                fontWeight: \"600\"\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\5_hour_chalanges\\\\spotify_nextjs\\\\src\\\\pages\\\\playlists\\\\[id].tsx\",\n                                            lineNumber: 74,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\5_hour_chalanges\\\\spotify_nextjs\\\\src\\\\pages\\\\playlists\\\\[id].tsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 19\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\5_hour_chalanges\\\\spotify_nextjs\\\\src\\\\pages\\\\playlists\\\\[id].tsx\",\n                                lineNumber: 66,\n                                columnNumber: 17\n                            }, undefined),\n                            myData.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                sx: {\n                                    color: \"#989898\",\n                                    display: \"flex\",\n                                    gap: \"10px\",\n                                    alignItems: \"center\",\n                                    justifyContent: \"center\",\n                                    fontSize: \"30px\",\n                                    fontWeight: \"600\",\n                                    textAlign: \"center\"\n                                },\n                                children: [\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ErrorOutline__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                        sx: {\n                                            fontSize: \"32px\"\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\5_hour_chalanges\\\\spotify_nextjs\\\\src\\\\pages\\\\playlists\\\\[id].tsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 216\n                                    }, undefined),\n                                    \" There we have not tracks\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\5_hour_chalanges\\\\spotify_nextjs\\\\src\\\\pages\\\\playlists\\\\[id].tsx\",\n                                lineNumber: 78,\n                                columnNumber: 41\n                            }, undefined) : myData.map((i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SongItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    image: image,\n                                    images: images,\n                                    i: i\n                                }, i.track.id, false, {\n                                    fileName: \"D:\\\\5_hour_chalanges\\\\spotify_nextjs\\\\src\\\\pages\\\\playlists\\\\[id].tsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 21\n                                }, undefined))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\5_hour_chalanges\\\\spotify_nextjs\\\\src\\\\pages\\\\playlists\\\\[id].tsx\",\n                        lineNumber: 65,\n                        columnNumber: 15\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\5_hour_chalanges\\\\spotify_nextjs\\\\src\\\\pages\\\\playlists\\\\[id].tsx\",\n                    lineNumber: 64,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\5_hour_chalanges\\\\spotify_nextjs\\\\src\\\\pages\\\\playlists\\\\[id].tsx\",\n            lineNumber: 55,\n            columnNumber: 11\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\5_hour_chalanges\\\\spotify_nextjs\\\\src\\\\pages\\\\playlists\\\\[id].tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, undefined);\n};\n_s(playlistId, \"b3QoFs1odabTX97QdpCwllCQaMc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (playlistId);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3FDLElBQUk7NENBQUVvQixVQUFVO3dDQUFPOzs7Ozs7b0NBQUs7Ozs7Ozs0Q0FBeUN0RCxPQUFPMkQsR0FBRyxDQUFDLENBQUNDLGtCQUN0Uyw4REFBQzlELDREQUFRQTtvQ0FBQ1EsT0FBT0E7b0NBQU9NLFFBQVFBO29DQUFRZ0QsR0FBR0E7bUNBQVNBLEVBQUUvQyxLQUFLLENBQUNMLEVBQUU7Ozs7OENBQzlEOzs7Ozs7Ozs7Ozs7Ozs7OztxQkFJRjs7Ozs7O0FBSWxCO0dBM0VNVDs7UUFLV1Asa0RBQVNBOzs7QUF3RTFCLCtEQUFlTyxVQUFVQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wbGF5bGlzdHMvW2lkXS50c3g/OWIxZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJ0AvTGF5b3V0cy9MYXlvdXQnXHJcbmltcG9ydCB7IEJ1dHRvbiwgU3RhY2sgfSBmcm9tICdAbXVpL21hdGVyaWFsJ1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHknXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IFBsYXlBcnJvd0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9QbGF5QXJyb3cnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgRmF2b3JpdGVCb3JkZXJJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRmF2b3JpdGVCb3JkZXInO1xyXG5pbXBvcnQgQWNjZXNzVGltZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BY2Nlc3NUaW1lJztcclxuaW1wb3J0IEVycm9yT3V0bGluZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9FcnJvck91dGxpbmUnO1xyXG5pbXBvcnQgU29uZ0l0ZW0gZnJvbSAnQC9jb21wb25lbnRzL1NvbmdJdGVtJztcclxuXHJcbmNvbnN0IHBsYXlsaXN0SWQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW215RGF0YSwgc2V0TXlEYXRhXSA9IHVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IFthcnRpc3RzTmFtZSwgc2V0QXJ0aXN0c05hbWVdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW2lzUGxheSwgc2V0SXNQbGF5XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IGltYWdlID0gJ2h0dHBzOi8vaS55dGltZy5jb20vdmkvcHZsYWtqRThoNlEvbWF4cmVzZGVmYXVsdC5qcGcnXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBpZCA9IHJvdXRlci5hc1BhdGguc3BsaXQoJy8nKVsyXVxyXG5cclxuICBjb25zdCBkYXRhOiBhbnkgPSBteURhdGFbMF1cclxuICBjb25zdCBpbWFnZXMgPSBkYXRhPy50cmFjay5hbGJ1bS5pbWFnZXNbMF0udXJsXHJcbiAgY29uc3QgbmFtZSA9IGRhdGE/LnRyYWNrLmFsYnVtLm5hbWVcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldE15RGF0YShbXSlcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldEFsbEFsYnVtcygpIHtcclxuICAgICAgbGV0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJylcclxuICAgICAgYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL2FwaS5zcG90aWZ5LmNvbS92MS9wbGF5bGlzdHMvJHtpZH0vdHJhY2tzYCwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gXHJcbiAgICAgICAgfSxcclxuICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIHNldE15RGF0YShyZXMuZGF0YS5pdGVtcylcclxuICAgICAgICBzZXRBcnRpc3RzTmFtZShyZXMuZGF0YS5pdGVtc1swXS50cmFjay5hbGJ1bS5hcnRpc3RzWzBdLm5hbWUpXHJcbiAgICAgIH0pLmNhdGNoKChlKSA9PiB7IFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCk7XHJcbiAgICAgICAgXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZ2V0QWxsQWxidW1zKClcclxuICB9LCBbaWRdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dCBiYWNrZ3JvdW5kPXtpbWFnZXN9PlxyXG4gICAgICB7XHJcbiAgICAgICAgbXlEYXRhLmxlbmd0aCA9PT0gMCA/IDxTdGFjayBzeD17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJywgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxvYjEgYmxvYlwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxvYjIgYmxvYlwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxvYjMgYmxvYlwiPjwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICA6XHJcbiAgICAgICAgICA8U3RhY2sgc3g9e3sgdHJhbnNpdGlvbjogJy40cyBlYXNlJyB9fT5cclxuICAgICAgICAgICAgPFN0YWNrIHN4PXt7IGdhcDogXCIyMHB4XCIsIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsIGZsZXhEaXJlY3Rpb246IFwicm93XCIsIGFsaWduSXRlbXM6ICdmbGV4LWVuZCcgfX0+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlcyB8fCBpbWFnZX0gc3R5bGU9e3sgd2lkdGg6ICcyNTBweCcsIGhlaWdodDogJzI1MHB4Jywgb2JqZWN0Rml0OiAnY292ZXInLCBib3hTaGFkb3c6ICcwcHggMHB4IDhweCAxMHB4IHJnYmEoMzQsIDYwLCA4MCwgMC4wNyknIH19IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgPFN0YWNrPlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgY29sb3I6IFwiV2hpdGVcIiwgZm9udFdlaWdodDogXCI3MDBcIiwgZm9udFNpemU6ICcxOHB4JyB9fT5PcGVuIHBsYXlpc3Q8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBjb2xvcjogXCJXaGl0ZVwiLCBmb250V2VpZ2h0OiBcIjcwMFwiLCBmb250U2l6ZTogJzYycHgnIH19PntuYW1lfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IGNvbG9yOiAnd2hpdGUnLCBmb250V2VpZ2h0OiBcIjUwMFwiLCBmb250U2l6ZTogJzIwcHgnIH19ID57IGFydGlzdHNOYW1lIH0gOiB7bXlEYXRhLmxlbmd0aH0gdHJhY2tzIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgICA8U3RhY2sgc3g9e3sgd2lkdGg6ICcxMDAlJywgcGFkZGluZ1RvcDogXCIzMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgPG9sPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8U3RhY2sgc3g9e3sgZmxleERpcmVjdGlvbjogJ3JvdycsIGdhcDogXCIxNHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgY29sb3I6ICcjOTg5ODk4JywgZm9udFNpemU6ICcxOHB4JywgZm9udFdlaWdodDogXCI2MDBcIiwgfX0+TmFtZTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgICAgICAgICAgPFN0YWNrIHN4PXt7IGZsZXhEaXJlY3Rpb246ICdyb3cnLCBnYXA6IFwiMTRweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IGNvbG9yOiAnIzk4OTg5OCcsIGZvbnRTaXplOiAnMThweCcsIGZvbnRXZWlnaHQ6IFwiNjAwXCIsIH19PkRhdGU8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IHdpZHRoOiAnOTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFjY2Vzc1RpbWVJY29uIHN4PXt7IGNvbG9yOiAnIzk4OTg5OCcsIGZvbnRXZWlnaHQ6ICc2MDAnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIG15RGF0YS5sZW5ndGggPT09IDAgPyA8VHlwb2dyYXBoeSBzeD17eyBjb2xvcjogJyM5ODk4OTgnLCBkaXNwbGF5OiAnZmxleCcsIGdhcDogXCIxMHB4XCIsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGZvbnRTaXplOiAnMzBweCcsIGZvbnRXZWlnaHQ6IFwiNjAwXCIsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+IDxFcnJvck91dGxpbmVJY29uIHN4PXt7IGZvbnRTaXplOiAnMzJweCcgfX0gLz4gVGhlcmUgd2UgaGF2ZSBub3QgdHJhY2tzPC9UeXBvZ3JhcGh5PiA6IG15RGF0YS5tYXAoKGk6IGFueSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxTb25nSXRlbSBpbWFnZT17aW1hZ2V9IGltYWdlcz17aW1hZ2VzfSBpPXtpfSAga2V5PXtpLnRyYWNrLmlkfSAvPlxyXG4gICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDwvb2w+XHJcbiAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICB9XHJcbiAgICA8L0xheW91dD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBsYXlsaXN0SWRcclxuIl0sIm5hbWVzIjpbIkxheW91dCIsIlN0YWNrIiwiVHlwb2dyYXBoeSIsImF4aW9zIiwidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkFjY2Vzc1RpbWVJY29uIiwiRXJyb3JPdXRsaW5lSWNvbiIsIlNvbmdJdGVtIiwicGxheWxpc3RJZCIsIm15RGF0YSIsInNldE15RGF0YSIsImFydGlzdHNOYW1lIiwic2V0QXJ0aXN0c05hbWUiLCJpc1BsYXkiLCJzZXRJc1BsYXkiLCJpbWFnZSIsInJvdXRlciIsImlkIiwiYXNQYXRoIiwic3BsaXQiLCJkYXRhIiwiaW1hZ2VzIiwidHJhY2siLCJhbGJ1bSIsInVybCIsIm5hbWUiLCJnZXRBbGxBbGJ1bXMiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJnZXQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInRoZW4iLCJyZXMiLCJpdGVtcyIsImFydGlzdHMiLCJjYXRjaCIsImUiLCJjb25zb2xlIiwibG9nIiwiYmFja2dyb3VuZCIsImxlbmd0aCIsInN4Iiwid2lkdGgiLCJoZWlnaHQiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiZGl2IiwiY2xhc3NOYW1lIiwic3BhbiIsInRyYW5zaXRpb24iLCJnYXAiLCJmbGV4RGlyZWN0aW9uIiwiaW1nIiwic3JjIiwic3R5bGUiLCJvYmplY3RGaXQiLCJib3hTaGFkb3ciLCJhbHQiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsInBhZGRpbmdUb3AiLCJvbCIsImxpIiwidGV4dEFsaWduIiwibWFwIiwiaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/playlists/[id].tsx\n"));

/***/ })

});