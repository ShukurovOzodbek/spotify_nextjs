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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/contexts/songContext.ts":
/*!*************************************!*\
  !*** ./src/contexts/songContext.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"songContext\": () => (/* binding */ songContext)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst songContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({\n    val: {},\n    changeSong: ()=>undefined\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvc29uZ0NvbnRleHQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNDO0FBRS9CLE1BQU1DLGNBQWNELG9EQUFhQSxDQUE4QztJQUFDRSxLQUFLLENBQUM7SUFBR0MsWUFBWSxJQUFNQztBQUFTLEdBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcG90aWZ5Ly4vc3JjL2NvbnRleHRzL3NvbmdDb250ZXh0LnRzPzQ3Y2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNvbmdDb250ZXh0ID0gY3JlYXRlQ29udGV4dDx7dmFsOm9iamVjdCwgY2hhbmdlU29uZzooZGF0YTphbnkpID0+IHZvaWR9Pih7dmFsOiB7fSwgY2hhbmdlU29uZzogKCkgPT4gdW5kZWZpbmVkfSkiXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInNvbmdDb250ZXh0IiwidmFsIiwiY2hhbmdlU29uZyIsInVuZGVmaW5lZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contexts/songContext.ts\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store */ \"./src/store/index.ts\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _contexts_songContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/contexts/songContext */ \"./src/contexts/songContext.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store__WEBPACK_IMPORTED_MODULE_1__]);\n_store__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\nfunction App({ Component , pageProps  }) {\n    const [val, setVal] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({\n        image: \"https://i.scdn.co/image/ab67616d0000b273a7717523c2f13a93b89b8886\",\n        uri: \"https://p.scdn.co/mp3-preview/034b7179a2b15498aa825b872f3106970915ece0?cid=4109f1d797b647deb42f11dd69907b49\",\n        songName: \"Atlant\",\n        artist: \"Miyagi & Andy Panda\"\n    });\n    const changeSong = (data)=>{\n        setVal(data);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {\n        store: _store__WEBPACK_IMPORTED_MODULE_1__.store,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_songContext__WEBPACK_IMPORTED_MODULE_4__.songContext.Provider, {\n            value: {\n                val,\n                changeSong\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"D:\\\\5_hour_chalanges\\\\spotify_nextjs\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 23,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\5_hour_chalanges\\\\spotify_nextjs\\\\src\\\\pages\\\\_app.tsx\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\5_hour_chalanges\\\\spotify_nextjs\\\\src\\\\pages\\\\_app.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUErQjtBQUNGO0FBRVM7QUFDYztBQUNwQjtBQUVqQixTQUFTSSxJQUFJLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFZLEVBQUU7SUFDOUQsTUFBTSxDQUFDQyxLQUFLQyxPQUFPLEdBQUdMLCtDQUFRQSxDQUFDO1FBQzdCTSxPQUFPO1FBQ1BDLEtBQUs7UUFDTEMsVUFBVTtRQUNWQyxRQUFRO0lBQ1Y7SUFFQSxNQUFNQyxhQUFhLENBQUNDLE9BQWE7UUFDL0JOLE9BQU9NO0lBQ1Q7SUFFQSxxQkFDRSw4REFBQ2IsaURBQVFBO1FBQUNELE9BQU9BLHlDQUFLQTtrQkFDcEIsNEVBQUNFLHVFQUFvQjtZQUFDYSxPQUFPO2dCQUFDUjtnQkFBS007WUFBVTtzQkFDM0MsNEVBQUNSO2dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Nwb3RpZnkvLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdG9yZSB9IGZyb20gJ0Avc3RvcmUnXHJcbmltcG9ydCAnQC9zdHlsZXMvZ2xvYmFscy5jc3MnXHJcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgc29uZ0NvbnRleHQgfSBmcm9tICdAL2NvbnRleHRzL3NvbmdDb250ZXh0J1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcclxuICBjb25zdCBbdmFsLCBzZXRWYWxdID0gdXNlU3RhdGUoe1xyXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3M2E3NzE3NTIzYzJmMTNhOTNiODliODg4NlwiLFxyXG4gICAgdXJpOiBcImh0dHBzOi8vcC5zY2RuLmNvL21wMy1wcmV2aWV3LzAzNGI3MTc5YTJiMTU0OThhYTgyNWI4NzJmMzEwNjk3MDkxNWVjZTA/Y2lkPTQxMDlmMWQ3OTdiNjQ3ZGViNDJmMTFkZDY5OTA3YjQ5XCIsXHJcbiAgICBzb25nTmFtZTogXCJBdGxhbnRcIixcclxuICAgIGFydGlzdDogXCJNaXlhZ2kgJiBBbmR5IFBhbmRhXCJcclxuICB9KVxyXG5cclxuICBjb25zdCBjaGFuZ2VTb25nID0gKGRhdGE6YW55KSA9PiB7XHJcbiAgICBzZXRWYWwoZGF0YSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgPHNvbmdDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7dmFsLCBjaGFuZ2VTb25nfX0gPlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPC9zb25nQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIDwvUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJzdG9yZSIsIlByb3ZpZGVyIiwic29uZ0NvbnRleHQiLCJ1c2VTdGF0ZSIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInZhbCIsInNldFZhbCIsImltYWdlIiwidXJpIiwic29uZ05hbWUiLCJhcnRpc3QiLCJjaGFuZ2VTb25nIiwiZGF0YSIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/store/features/albums/albumThunk.ts":
/*!*************************************************!*\
  !*** ./src/store/features/albums/albumThunk.ts ***!
  \*************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchAlbums\": () => (/* binding */ fetchAlbums)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);\naxios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst fetchAlbums = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"albums/fetchAlbums\", async (obj)=>{\n    const { token , searchKey  } = obj;\n    const { data  } = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"https://api.spotify.com/v1/search\", {\n        headers: {\n            Authorization: `Bearer ${token}`\n        },\n        params: {\n            q: searchKey,\n            type: \"album\"\n        }\n    });\n    return data.albums.items;\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvZmVhdHVyZXMvYWxidW1zL2FsYnVtVGh1bmsudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFtRDtBQUMxQjtBQUVsQixNQUFNRSxjQUFjRixrRUFBZ0JBLENBQUMsc0JBQXNCLE9BQU9HLE1BQWE7SUFDbEYsTUFBTSxFQUFFQyxNQUFLLEVBQUVDLFVBQVMsRUFBRSxHQUFHRjtJQUM3QixNQUFNLEVBQUVHLEtBQUksRUFBRSxHQUFHLE1BQU1MLGlEQUFTLENBQUMscUNBQXFDO1FBQ2xFTyxTQUFTO1lBQ0xDLGVBQWUsQ0FBQyxPQUFPLEVBQUVMLE1BQU0sQ0FBQztRQUNwQztRQUNBTSxRQUFRO1lBQ0pDLEdBQUdOO1lBQ0hPLE1BQU07UUFDVjtJQUNKO0lBRUEsT0FBT04sS0FBS08sTUFBTSxDQUFDQyxLQUFLO0FBQzVCLEdBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcG90aWZ5Ly4vc3JjL3N0b3JlL2ZlYXR1cmVzL2FsYnVtcy9hbGJ1bVRodW5rLnRzPzdhNWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQXN5bmNUaHVuayB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaEFsYnVtcyA9IGNyZWF0ZUFzeW5jVGh1bmsoJ2FsYnVtcy9mZXRjaEFsYnVtcycsIGFzeW5jIChvYmo6IGFueSkgPT4ge1xyXG4gICAgY29uc3QgeyB0b2tlbiwgc2VhcmNoS2V5IH0gPSBvYmpcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cHM6Ly9hcGkuc3BvdGlmeS5jb20vdjEvc2VhcmNoXCIsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgcTogc2VhcmNoS2V5LFxyXG4gICAgICAgICAgICB0eXBlOiBcImFsYnVtXCJcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiBkYXRhLmFsYnVtcy5pdGVtc1xyXG59KSJdLCJuYW1lcyI6WyJjcmVhdGVBc3luY1RodW5rIiwiYXhpb3MiLCJmZXRjaEFsYnVtcyIsIm9iaiIsInRva2VuIiwic2VhcmNoS2V5IiwiZGF0YSIsImdldCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwicGFyYW1zIiwicSIsInR5cGUiLCJhbGJ1bXMiLCJpdGVtcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store/features/albums/albumThunk.ts\n");

/***/ }),

/***/ "./src/store/features/albums/albumsSlice.ts":
/*!**************************************************!*\
  !*** ./src/store/features/albums/albumsSlice.ts ***!
  \**************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"tracksSlice\": () => (/* binding */ tracksSlice)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _albumThunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./albumThunk */ \"./src/store/features/albums/albumThunk.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_albumThunk__WEBPACK_IMPORTED_MODULE_1__]);\n_albumThunk__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst initialState = {\n    albums: [],\n    status: \"\"\n};\nconst tracksSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"tracks\",\n    initialState,\n    reducers: {},\n    extraReducers (builder) {\n        builder.addCase(_albumThunk__WEBPACK_IMPORTED_MODULE_1__.fetchAlbums.pending, (state)=>{\n            state.status = \"pending\";\n        }).addCase(_albumThunk__WEBPACK_IMPORTED_MODULE_1__.fetchAlbums.fulfilled, (state, action)=>{\n            state.status = \"fulfilled\";\n            state.albums = action.payload;\n        }).addCase(_albumThunk__WEBPACK_IMPORTED_MODULE_1__.fetchAlbums.rejected, (state)=>{\n            state.status = \"rejected\";\n        });\n    }\n});\nconst {} = tracksSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tracksSlice.reducer);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvZmVhdHVyZXMvYWxidW1zL2FsYnVtc1NsaWNlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQThDO0FBQ0o7QUFPMUMsTUFBTUUsZUFBdUI7SUFDekJDLFFBQVEsRUFBRTtJQUNWQyxRQUFRO0FBQ1o7QUFFTyxNQUFNQyxjQUFjTCw2REFBV0EsQ0FBQztJQUNuQ00sTUFBTTtJQUNOSjtJQUNBSyxVQUFVLENBQUM7SUFDWEMsZUFBY0MsT0FBTyxFQUFFO1FBQ25CQSxRQUNLQyxPQUFPLENBQUNULDREQUFtQixFQUFFLENBQUNXLFFBQVU7WUFDckNBLE1BQU1SLE1BQU0sR0FBRztRQUNuQixHQUNDTSxPQUFPLENBQUNULDhEQUFxQixFQUFFLENBQUNXLE9BQU9FLFNBQVc7WUFDL0NGLE1BQU1SLE1BQU0sR0FBRztZQUNmUSxNQUFNVCxNQUFNLEdBQUdXLE9BQU9DLE9BQU87UUFDakMsR0FDQ0wsT0FBTyxDQUFDVCw2REFBb0IsRUFBRSxDQUFDVyxRQUFVO1lBQ3RDQSxNQUFNUixNQUFNLEdBQUc7UUFDbkI7SUFDUjtBQUNKLEdBQUU7QUFFSyxNQUFNLEVBQUcsR0FBR0MsWUFBWVksT0FBTztBQUN0QyxpRUFBZVosWUFBWWEsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL3Nwb3RpZnkvLi9zcmMvc3RvcmUvZmVhdHVyZXMvYWxidW1zL2FsYnVtc1NsaWNlLnRzP2I1OTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xyXG5pbXBvcnQgeyBmZXRjaEFsYnVtcyB9IGZyb20gJy4vYWxidW1UaHVuaydcclxuXHJcbmludGVyZmFjZSBJU3RhdGUge1xyXG4gICAgYWxidW1zOiBBcnJheTx7fT4sXHJcbiAgICBzdGF0dXM6IHN0cmluZ1xyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IElTdGF0ZSA9IHtcclxuICAgIGFsYnVtczogW10sXHJcbiAgICBzdGF0dXM6ICcnXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB0cmFja3NTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICAgIG5hbWU6ICd0cmFja3MnLFxyXG4gICAgaW5pdGlhbFN0YXRlLFxyXG4gICAgcmVkdWNlcnM6IHt9LFxyXG4gICAgZXh0cmFSZWR1Y2VycyhidWlsZGVyKSB7XHJcbiAgICAgICAgYnVpbGRlclxyXG4gICAgICAgICAgICAuYWRkQ2FzZShmZXRjaEFsYnVtcy5wZW5kaW5nLCAoc3RhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHN0YXRlLnN0YXR1cyA9ICdwZW5kaW5nJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuYWRkQ2FzZShmZXRjaEFsYnVtcy5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5zdGF0dXMgPSAnZnVsZmlsbGVkJ1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuYWxidW1zID0gYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmFkZENhc2UoZmV0Y2hBbGJ1bXMucmVqZWN0ZWQsIChzdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuc3RhdHVzID0gJ3JlamVjdGVkJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IHsgfSA9IHRyYWNrc1NsaWNlLmFjdGlvbnNcclxuZXhwb3J0IGRlZmF1bHQgdHJhY2tzU2xpY2UucmVkdWNlciJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImZldGNoQWxidW1zIiwiaW5pdGlhbFN0YXRlIiwiYWxidW1zIiwic3RhdHVzIiwidHJhY2tzU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJleHRyYVJlZHVjZXJzIiwiYnVpbGRlciIsImFkZENhc2UiLCJwZW5kaW5nIiwic3RhdGUiLCJmdWxmaWxsZWQiLCJhY3Rpb24iLCJwYXlsb2FkIiwicmVqZWN0ZWQiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store/features/albums/albumsSlice.ts\n");

/***/ }),

/***/ "./src/store/features/tracks/trackSlice.ts":
/*!*************************************************!*\
  !*** ./src/store/features/tracks/trackSlice.ts ***!
  \*************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"tracksSlice\": () => (/* binding */ tracksSlice)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _trackThunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trackThunk */ \"./src/store/features/tracks/trackThunk.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_trackThunk__WEBPACK_IMPORTED_MODULE_1__]);\n_trackThunk__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst initialState = {\n    tracks: [],\n    status: \"\"\n};\nconst tracksSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"tracks\",\n    initialState,\n    reducers: {},\n    extraReducers (builder) {\n        builder.addCase(_trackThunk__WEBPACK_IMPORTED_MODULE_1__.fetchTracks.pending, (state)=>{\n            state.status = \"pending\";\n        }).addCase(_trackThunk__WEBPACK_IMPORTED_MODULE_1__.fetchTracks.fulfilled, (state, action)=>{\n            state.status = \"fulfilled\";\n            state.tracks = action.payload;\n        }).addCase(_trackThunk__WEBPACK_IMPORTED_MODULE_1__.fetchTracks.rejected, (state)=>{\n            state.status = \"rejected\";\n        });\n    }\n});\nconst {} = tracksSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tracksSlice.reducer);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvZmVhdHVyZXMvdHJhY2tzL3RyYWNrU2xpY2UudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBOEM7QUFDSjtBQU8xQyxNQUFNRSxlQUF1QjtJQUMzQkMsUUFBUSxFQUFFO0lBQ1ZDLFFBQVE7QUFDVjtBQUVPLE1BQU1DLGNBQWNMLDZEQUFXQSxDQUFDO0lBQ3JDTSxNQUFNO0lBQ05KO0lBQ0FLLFVBQVUsQ0FBQztJQUNYQyxlQUFjQyxPQUFPLEVBQUU7UUFDckJBLFFBQ0dDLE9BQU8sQ0FBQ1QsNERBQW1CLEVBQUUsQ0FBQ1csUUFBVTtZQUN2Q0EsTUFBTVIsTUFBTSxHQUFHO1FBQ2pCLEdBQ0NNLE9BQU8sQ0FBQ1QsOERBQXFCLEVBQUUsQ0FBQ1csT0FBT0UsU0FBVztZQUNqREYsTUFBTVIsTUFBTSxHQUFHO1lBQ2ZRLE1BQU1ULE1BQU0sR0FBR1csT0FBT0MsT0FBTztRQUMvQixHQUNDTCxPQUFPLENBQUNULDZEQUFvQixFQUFFLENBQUNXLFFBQVU7WUFDeENBLE1BQU1SLE1BQU0sR0FBRztRQUNqQjtJQUNKO0FBQ0YsR0FBRTtBQUVLLE1BQU0sRUFBSSxHQUFHQyxZQUFZWSxPQUFPO0FBQ3ZDLGlFQUFlWixZQUFZYSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3BvdGlmeS8uL3NyYy9zdG9yZS9mZWF0dXJlcy90cmFja3MvdHJhY2tTbGljZS50cz9jMjhlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcclxuaW1wb3J0IHsgZmV0Y2hUcmFja3MgfSBmcm9tICcuL3RyYWNrVGh1bmsnXHJcblxyXG5pbnRlcmZhY2UgSVN0YXRlIHtcclxuICB0cmFja3M6IEFycmF5PHt9PixcclxuICBzdGF0dXM6IHN0cmluZ1xyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IElTdGF0ZSA9IHtcclxuICB0cmFja3M6IFtdLFxyXG4gIHN0YXR1czogJydcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHRyYWNrc1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6ICd0cmFja3MnLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge30sXHJcbiAgZXh0cmFSZWR1Y2VycyhidWlsZGVyKSB7XHJcbiAgICBidWlsZGVyXHJcbiAgICAgIC5hZGRDYXNlKGZldGNoVHJhY2tzLnBlbmRpbmcsIChzdGF0ZSkgPT4ge1xyXG4gICAgICAgIHN0YXRlLnN0YXR1cyA9ICdwZW5kaW5nJ1xyXG4gICAgICB9KVxyXG4gICAgICAuYWRkQ2FzZShmZXRjaFRyYWNrcy5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgc3RhdGUuc3RhdHVzID0gJ2Z1bGZpbGxlZCdcclxuICAgICAgICBzdGF0ZS50cmFja3MgPSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICB9KVxyXG4gICAgICAuYWRkQ2FzZShmZXRjaFRyYWNrcy5yZWplY3RlZCwgKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgc3RhdGUuc3RhdHVzID0gJ3JlamVjdGVkJ1xyXG4gICAgICB9KVxyXG4gIH1cclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCB7ICB9ID0gdHJhY2tzU2xpY2UuYWN0aW9uc1xyXG5leHBvcnQgZGVmYXVsdCB0cmFja3NTbGljZS5yZWR1Y2VyIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiZmV0Y2hUcmFja3MiLCJpbml0aWFsU3RhdGUiLCJ0cmFja3MiLCJzdGF0dXMiLCJ0cmFja3NTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImV4dHJhUmVkdWNlcnMiLCJidWlsZGVyIiwiYWRkQ2FzZSIsInBlbmRpbmciLCJzdGF0ZSIsImZ1bGZpbGxlZCIsImFjdGlvbiIsInBheWxvYWQiLCJyZWplY3RlZCIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store/features/tracks/trackSlice.ts\n");

/***/ }),

/***/ "./src/store/features/tracks/trackThunk.ts":
/*!*************************************************!*\
  !*** ./src/store/features/tracks/trackThunk.ts ***!
  \*************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchTracks\": () => (/* binding */ fetchTracks)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);\naxios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst fetchTracks = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"tracks/fetchTracks\", async (obj)=>{\n    const { token , searchKey  } = obj;\n    const { data  } = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"https://api.spotify.com/v1/search\", {\n        headers: {\n            Authorization: `Bearer ${token}`\n        },\n        params: {\n            q: searchKey,\n            type: \"tracks\"\n        }\n    });\n    return data.tracks.items;\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvZmVhdHVyZXMvdHJhY2tzL3RyYWNrVGh1bmsudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFtRDtBQUMxQjtBQUVsQixNQUFNRSxjQUFjRixrRUFBZ0JBLENBQUMsc0JBQXNCLE9BQU9HLE1BQWE7SUFDbEYsTUFBTSxFQUFFQyxNQUFLLEVBQUVDLFVBQVMsRUFBRSxHQUFHRjtJQUM3QixNQUFNLEVBQUVHLEtBQUksRUFBRSxHQUFHLE1BQU1MLGlEQUFTLENBQUMscUNBQXFDO1FBQ2xFTyxTQUFTO1lBQ0xDLGVBQWUsQ0FBQyxPQUFPLEVBQUVMLE1BQU0sQ0FBQztRQUNwQztRQUNBTSxRQUFRO1lBQ0pDLEdBQUdOO1lBQ0hPLE1BQU07UUFDVjtJQUNKO0lBRUEsT0FBT04sS0FBS08sTUFBTSxDQUFDQyxLQUFLO0FBQzVCLEdBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcG90aWZ5Ly4vc3JjL3N0b3JlL2ZlYXR1cmVzL3RyYWNrcy90cmFja1RodW5rLnRzPzUwN2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQXN5bmNUaHVuayB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFRyYWNrcyA9IGNyZWF0ZUFzeW5jVGh1bmsoJ3RyYWNrcy9mZXRjaFRyYWNrcycsIGFzeW5jIChvYmo6IGFueSkgPT4ge1xyXG4gICAgY29uc3QgeyB0b2tlbiwgc2VhcmNoS2V5IH0gPSBvYmpcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cHM6Ly9hcGkuc3BvdGlmeS5jb20vdjEvc2VhcmNoXCIsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgcTogc2VhcmNoS2V5LFxyXG4gICAgICAgICAgICB0eXBlOiBcInRyYWNrc1wiXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gZGF0YS50cmFja3MuaXRlbXNcclxufSkiXSwibmFtZXMiOlsiY3JlYXRlQXN5bmNUaHVuayIsImF4aW9zIiwiZmV0Y2hUcmFja3MiLCJvYmoiLCJ0b2tlbiIsInNlYXJjaEtleSIsImRhdGEiLCJnZXQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInBhcmFtcyIsInEiLCJ0eXBlIiwidHJhY2tzIiwiaXRlbXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/store/features/tracks/trackThunk.ts\n");

/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"store\": () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _features_tracks_trackSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features/tracks/trackSlice */ \"./src/store/features/tracks/trackSlice.ts\");\n/* harmony import */ var _features_albums_albumsSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features/albums/albumsSlice */ \"./src/store/features/albums/albumsSlice.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_features_tracks_trackSlice__WEBPACK_IMPORTED_MODULE_1__, _features_albums_albumsSlice__WEBPACK_IMPORTED_MODULE_2__]);\n([_features_tracks_trackSlice__WEBPACK_IMPORTED_MODULE_1__, _features_albums_albumsSlice__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        tracks: _features_tracks_trackSlice__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        albums: _features_albums_albumsSlice__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    }\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDSTtBQUNFO0FBRWpELE1BQU1HLFFBQVFILGdFQUFjQSxDQUFDO0lBQ2hDSSxTQUFTO1FBQ0xDLFFBQVFKLG1FQUFVQTtRQUNsQkssUUFBUUosb0VBQVdBO0lBQ3ZCO0FBQ0osR0FBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3Nwb3RpZnkvLi9zcmMvc3RvcmUvaW5kZXgudHM/Y2VlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25maWd1cmVTdG9yZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB0cmFja1NsaWNlIGZyb20gXCIuL2ZlYXR1cmVzL3RyYWNrcy90cmFja1NsaWNlXCI7XHJcbmltcG9ydCBhbGJ1bXNTbGljZSBmcm9tIFwiLi9mZWF0dXJlcy9hbGJ1bXMvYWxidW1zU2xpY2VcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcclxuICAgIHJlZHVjZXI6IHtcclxuICAgICAgICB0cmFja3M6IHRyYWNrU2xpY2UsXHJcbiAgICAgICAgYWxidW1zOiBhbGJ1bXNTbGljZSxcclxuICAgIH1cclxufSlcclxuXHJcbmV4cG9ydCB0eXBlIEFwcERpc3BhdGNoID0gdHlwZW9mIHN0b3JlLmRpc3BhdGNoIl0sIm5hbWVzIjpbImNvbmZpZ3VyZVN0b3JlIiwidHJhY2tTbGljZSIsImFsYnVtc1NsaWNlIiwic3RvcmUiLCJyZWR1Y2VyIiwidHJhY2tzIiwiYWxidW1zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store/index.ts\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();