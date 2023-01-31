"use strict";
exports.id = 112;
exports.ids = [112];
exports.modules = {

/***/ 3112:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_SVGIcons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7854);
/* harmony import */ var _components_Links__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3323);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9648);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_h5_audio_player__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4842);
/* harmony import */ var react_h5_audio_player__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_h5_audio_player__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _contexts_songContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8760);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_9__]);
axios__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];













const linksArr = [
    {
        path: "/",
        svg: "home",
        text: "Home"
    },
    {
        path: "/search",
        svg: "search",
        text: "Search"
    },
    {
        path: "/library",
        svg: "library",
        text: "Library"
    }
];
const liked = {
    path: "/liked",
    svg: "liked",
    text: "Liked"
};
const Layout = ({ children , background  })=>{
    const [name, setName] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    const [myData, setMyData] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const image = "https://i.ytimg.com/vi/pvlakjE8h6Q/maxresdefault.jpg";
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)();
    const { val  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_songContext__WEBPACK_IMPORTED_MODULE_12__/* .songContext */ ._);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setValue(val);
    }, [
        val
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        async function set() {
            let token = localStorage.getItem("token");
            await axios__WEBPACK_IMPORTED_MODULE_9__["default"].get("https://api.spotify.com/v1/me", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((res)=>{
                setName(res.data.display_name);
            });
        }
        set();
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        async function getAllAlbums() {
            let token = localStorage.getItem("token");
            await axios__WEBPACK_IMPORTED_MODULE_9__["default"].get("https://api.spotify.com/v1/me/playlists", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((res)=>{
                setMyData(res.data.items);
            });
        }
        getAllAlbums();
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
        sx: {
            width: "100%",
            height: "100vh",
            flexDirection: "row"
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                sx: {
                    width: "17%",
                    height: "100%",
                    padding: "0 30px",
                    display: "flex",
                    gap: "20px",
                    background: "black"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                        href: "/",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SVGIcons__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            icon: "logo",
                            width: "165px",
                            height: "100px"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                        sx: {
                            gap: "15px",
                            width: "100%"
                        },
                        children: linksArr.map((i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Links__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                item: i
                            }, i.svg))
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                        sx: {
                            width: "100%",
                            borderBottom: "1px solid gray",
                            marginTop: "10px",
                            marginBottom: "10px"
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Links__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        item: liked
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                        sx: {
                            width: "100%",
                            borderBottom: "1px solid gray",
                            marginTop: "10px",
                            marginBottom: "10px"
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                        sx: {
                            gap: "10px"
                        },
                        children: myData.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                style: {
                                    color: "white",
                                    textDecoration: "none",
                                    fontWeight: "400",
                                    opacity: router.asPath.split("/")[2] === item.id ? "1" : "0.4"
                                },
                                href: `/playlists/${item.id}`,
                                children: item.name
                            }, item.id))
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                sx: {
                    zIndex: "1000",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "90px",
                    width: "100%",
                    color: "white",
                    bottom: "0",
                    left: "0",
                    right: "0",
                    position: "absolute",
                    padding: "15px 25px",
                    background: "black"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                        sx: {
                            flexDirection: "row",
                            width: "200px",
                            alignItems: "center",
                            gap: "10px"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: value.image || image,
                                style: {
                                    width: "50px",
                                    height: "50px",
                                    objectFit: "cover",
                                    borderRadius: "5px"
                                },
                                alt: ""
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8___default()), {
                                        sx: {
                                            lineHeight: "18px"
                                        },
                                        children: [
                                            " ",
                                            value.songName,
                                            " "
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8___default()), {
                                        sx: {
                                            lineHeight: "18px",
                                            fontSize: "14px",
                                            color: "#999999"
                                        },
                                        children: value.artist
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_h5_audio_player__WEBPACK_IMPORTED_MODULE_11___default()), {
                        src: value.uri
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {})
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                sx: {
                    width: "83%",
                    height: "100vh",
                    background: "linear-gradient(180deg, #1E1E1E 40%, #000000 100%)"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                        sx: {
                            justifyContent: "space-between",
                            flexDirection: "row",
                            alignItems: "center",
                            width: "100%",
                            padding: "50px 25px",
                            height: "10%"
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                                sx: {
                                    flexDirection: "row",
                                    gap: "40px",
                                    alignItems: "center"
                                },
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                                        sx: {
                                            flexDirection: "row",
                                            alignItems: "center",
                                            gap: "10px"
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                sx: [
                                                    {
                                                        fontSize: "16px",
                                                        borderRadius: "100%",
                                                        background: "gray",
                                                        width: "0px",
                                                        height: "0px",
                                                        padding: "15px",
                                                        minWidth: "0px"
                                                    },
                                                    {
                                                        "&:hover": {
                                                            background: "black"
                                                        }
                                                    }
                                                ],
                                                variant: "contained",
                                                children: "<"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                sx: [
                                                    {
                                                        fontSize: "16px",
                                                        borderRadius: "100%",
                                                        background: "black",
                                                        width: "0px",
                                                        height: "0px",
                                                        padding: "15px",
                                                        minWidth: "0px"
                                                    },
                                                    {
                                                        "&:hover": {
                                                            background: "gray"
                                                        }
                                                    }
                                                ],
                                                variant: "contained",
                                                children: ">"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                                        sx: {
                                            flexDirection: "row",
                                            alignItems: "center",
                                            position: "relative"
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SVGIcons__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                icon: "search2"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "text",
                                                placeholder: "Artists, songs, or podcasts",
                                                style: {
                                                    width: "300px",
                                                    padding: "8px 32px",
                                                    fontSize: "16px",
                                                    borderRadius: "30px",
                                                    outline: "none",
                                                    border: "none"
                                                }
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                href: "/accaunt/settings",
                                style: {
                                    textDecoration: "none"
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                                    sx: {
                                        flexDirection: "row",
                                        width: "150px",
                                        padding: "3px",
                                        alignItems: "center",
                                        borderRadius: "40px",
                                        background: "black",
                                        gap: "10px",
                                        cursor: "pointer"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_7___default()), {
                                            sx: {
                                                width: "40px",
                                                height: "40px",
                                                borderRadius: "100%",
                                                overflow: "hidden",
                                                background: "gray"
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                style: {
                                                    width: "100%",
                                                    height: "100%"
                                                },
                                                src: "https://i1.sndcdn.com/artworks-000446065350-6k6hrf-t500x500.jpg",
                                                alt: "profile"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                    sx: {
                                                        color: "white",
                                                        fontSize: "13px"
                                                    },
                                                    children: name
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                    sx: {
                                                        color: "gray",
                                                        mt: "-3px",
                                                        fontStyle: "italic",
                                                        fontSize: "13px"
                                                    },
                                                    children: "PremiumUser"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                        sx: {
                            width: "100%",
                            padding: "10px 25px 0 25px",
                            height: "75%",
                            overflowY: "scroll"
                        },
                        children: children
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3323:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SVGIcons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7854);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);






const Links = ({ item  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
        style: {
            display: "flex",
            alignItems: "center",
            opacity: router.pathname === item.path ? "1" : "0.4",
            gap: "10px",
            color: "white",
            textDecoration: "none",
            transition: ".3s ease"
        },
        href: item.path,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SVGIcons__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                icon: item.svg
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_1___default()), {
                sx: {
                    fontSize: "19px"
                },
                children: item.text
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Links);


/***/ }),

/***/ 8760:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ songContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const songContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
    val: {},
    changeSong: ()=>undefined
});


/***/ })

};
;