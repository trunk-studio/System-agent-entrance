import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "fontFamily": "'Roboto', sans-serif",
        "fontSize": 16,
        "fontWeight": "300",
        "color": "#888",
        "lineHeight": 30,
        "textAlign": "center"
    },
    "strong": {
        "fontWeight": "500"
    },
    "a": {
        "color": "#de995e",
        "textDecoration": "none",
        "OTransition": "all .3s",
        "MozTransition": "all .3s",
        "WebkitTransition": "all .3s",
        "MsTransition": "all .3s",
        "transition": "all .3s"
    },
    "a:hover": {
        "color": "#de995e",
        "textDecoration": "none",
        "OTransition": "all .3s",
        "MozTransition": "all .3s",
        "WebkitTransition": "all .3s",
        "MsTransition": "all .3s",
        "transition": "all .3s"
    },
    "a:focus": {
        "color": "#de995e",
        "textDecoration": "none",
        "OTransition": "all .3s",
        "MozTransition": "all .3s",
        "WebkitTransition": "all .3s",
        "MsTransition": "all .3s",
        "transition": "all .3s"
    },
    "h1": {
        "marginTop": 10,
        "fontSize": 38,
        "fontWeight": "100",
        "color": "#555",
        "lineHeight": 50
    },
    "h2": {
        "marginTop": 10,
        "fontSize": 38,
        "fontWeight": "100",
        "color": "#555",
        "lineHeight": 50
    },
    "h3": {
        "fontSize": 22,
        "fontWeight": "300",
        "color": "#555",
        "lineHeight": 30
    },
    "img": {
        "maxWidth": "100%"
    },
    "::-moz-selection": {
        "background": "#de995e",
        "color": "#fff",
        "textShadow": "none"
    },
    "::selection": {
        "background": "#de995e",
        "color": "#fff",
        "textShadow": "none"
    },
    "btn-link-1": {
        "display": "inline-block",
        "height": 50,
        "marginTop": 5,
        "marginRight": 5,
        "marginBottom": 5,
        "marginLeft": 5,
        "paddingTop": 16,
        "paddingRight": 20,
        "paddingBottom": 0,
        "paddingLeft": 20,
        "background": "#de995e",
        "fontSize": 16,
        "fontWeight": "300",
        "lineHeight": 16,
        "color": "#fff",
        "MozBorderRadius": 4,
        "WebkitBorderRadius": 4,
        "borderRadius": 4
    },
    "btn-link-1:hover": {
        "outline": 0,
        "opacity": 0.6,
        "color": "#fff"
    },
    "btn-link-1:focus": {
        "outline": 0,
        "opacity": 0.6,
        "color": "#fff"
    },
    "btn-link-1:active": {
        "outline": 0,
        "opacity": 0.6,
        "color": "#fff"
    },
    "btn-link-1btn-link-1-facebook": {
        "background": "#4862a3"
    },
    "btn-link-1btn-link-1-twitter": {
        "background": "#55acee"
    },
    "btn-link-1btn-link-1-google-plus": {
        "background": "#dd4b39"
    },
    "btn-link-1 i": {
        "paddingRight": 5,
        "verticalAlign": "middle",
        "fontSize": 20,
        "lineHeight": 20
    },
    "btn-link-2": {
        "display": "inline-block",
        "height": 50,
        "marginTop": 5,
        "marginRight": 5,
        "marginBottom": 5,
        "marginLeft": 5,
        "paddingTop": 15,
        "paddingRight": 20,
        "paddingBottom": 0,
        "paddingLeft": 20,
        "background": "rgba(0, 0, 0, 0.3)",
        "border": "1px solid #fff",
        "fontSize": 16,
        "fontWeight": "300",
        "lineHeight": 16,
        "color": "#fff",
        "MozBorderRadius": 4,
        "WebkitBorderRadius": 4,
        "borderRadius": 4
    },
    "btn-link-2:hover": {
        "outline": 0,
        "opacity": 0.6,
        "background": "rgba(0, 0, 0, 0.3)",
        "color": "#fff"
    },
    "btn-link-2:focus": {
        "outline": 0,
        "opacity": 0.6,
        "background": "rgba(0, 0, 0, 0.3)",
        "color": "#fff"
    },
    "btn-link-2:active": {
        "outline": 0,
        "opacity": 0.6,
        "background": "rgba(0, 0, 0, 0.3)",
        "color": "#fff"
    },
    "btn-link-2:active:focus": {
        "outline": 0,
        "opacity": 0.6,
        "background": "rgba(0, 0, 0, 0.3)",
        "color": "#fff"
    },
    "inner-bg": {
        "paddingTop": 50,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 0
    },
    "top-content text": {
        "color": "#fff"
    },
    "top-content text h1": {
        "color": "#fff"
    },
    "top-content description": {
        "marginTop": 20,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0
    },
    "top-content description p": {
        "opacity": 0.8
    },
    "top-content description a": {
        "color": "#fff"
    },
    "top-content description a:hover": {
        "borderBottom": "1px dotted #fff"
    },
    "top-content description a:focus": {
        "borderBottom": "1px dotted #fff"
    },
    "form-box": {
        "marginTop": 35
    },
    "form-top": {
        "overflow": "hidden",
        "paddingTop": 0,
        "paddingRight": 25,
        "paddingBottom": 15,
        "paddingLeft": 25,
        "background": "#fff",
        "MozBorderRadius": "4px 4px 0 0",
        "WebkitBorderRadius": "4px 4px 0 0",
        "borderRadius": "4px 4px 0 0",
        "textAlign": "left"
    },
    "form-top-left": {
        "float": "left",
        "width": "75%",
        "paddingTop": 25
    },
    "form-top-left h3": {
        "marginTop": 0
    },
    "form-top-right": {
        "float": "left",
        "width": "25%",
        "paddingTop": 5,
        "fontSize": 66,
        "color": "#ddd",
        "lineHeight": 100,
        "textAlign": "right"
    },
    "form-medium": {
        "paddingTop": 25,
        "paddingRight": 25,
        "paddingBottom": 30,
        "paddingLeft": 25,
        "background": "#eee",
        "textAlign": "left"
    },
    "form-bottom": {
        "paddingTop": 25,
        "paddingRight": 25,
        "paddingBottom": 30,
        "paddingLeft": 25,
        "background": "#eee",
        "MozBorderRadius": "0 0 4px 4px",
        "WebkitBorderRadius": "0 0 4px 4px",
        "borderRadius": "0 0 4px 4px",
        "textAlign": "left"
    },
    "form-bottom form textarea": {
        "height": 150
    },
    "form-bottom form buttonbtn": {
        "width": "100%"
    },
    "form-bottom form input-error": {
        "borderColor": "#de995e"
    },
    "social-login": {
        "marginTop": 35
    },
    "social-login h3": {
        "color": "#fff"
    },
    "social-login-buttons": {
        "marginTop": 25
    }
});