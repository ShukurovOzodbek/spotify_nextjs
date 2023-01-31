"use strict";
exports.id = 893;
exports.ids = [893];
exports.modules = {

/***/ 3893:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_MadeFor)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/icons-material/PlayArrow"
var PlayArrow_ = __webpack_require__(9272);
var PlayArrow_default = /*#__PURE__*/__webpack_require__.n(PlayArrow_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/BestMixes.tsx







const BestMixes = ({ item  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: `/albums/${item.id}`,
        style: {
            width: "18%",
            textDecoration: "none",
            color: "white"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Stack, {
            sx: [
                {
                    width: "100%",
                    height: "300px",
                    position: "relative",
                    borderRadius: "10px",
                    overflow: "hidden",
                    background: "rgba(255, 255, 255, 0.1);",
                    cursor: "pointer",
                    transition: ".3s ease",
                    padding: "20px",
                    gap: "10px"
                },
                {
                    "&:hover": {
                        background: "rgba(255, 255, 255, 0.2);"
                    }
                }
            ],
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: item.images[1].url,
                    style: {
                        width: "100%",
                        borderRadius: "10px"
                    },
                    alt: ""
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Stack, {
                    sx: {
                        gap: "10px"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            sx: {
                                fontSize: "16px",
                                fontWeight: "600"
                            },
                            children: item.name
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            sx: {
                                fontSize: "14px",
                                fontWeight: "400",
                                color: "gray"
                            }
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                    variant: "contained",
                    sx: [
                        {
                            borderRadius: "100%",
                            position: "absolute",
                            right: "25px",
                            padding: "10px",
                            color: "white",
                            background: "#1DB954",
                            minWidth: "0px",
                            bottom: "105px",
                            transition: ".3s ease",
                            opacity: "0"
                        },
                        {
                            "&:hover": {
                                background: "#10A043"
                            }
                        }
                    ],
                    children: /*#__PURE__*/ jsx_runtime_.jsx((PlayArrow_default()), {
                        sx: {
                            color: "black",
                            fontSize: "30px"
                        }
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const components_BestMixes = (BestMixes);

;// CONCATENATED MODULE: ./src/components/MadeFor.tsx




const MadeFor = ({ arr  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Stack, {
        sx: {
            color: "white",
            mb: "20px",
            gap: "24px",
            flexDirection: "row",
            flexWrap: "wrap",
            width: "100%"
        },
        children: arr.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(components_BestMixes, {
                item: item
            }, item.name))
    });
};
/* harmony default export */ const components_MadeFor = (MadeFor);


/***/ })

};
;