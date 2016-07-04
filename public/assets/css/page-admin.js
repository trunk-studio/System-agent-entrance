import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "html": {
        "fontFamily": "'Roboto', 'Helvetica', sans-serif"
    },
    "body": {
        "fontFamily": "'Roboto', 'Helvetica', sans-serif"
    },
    "a": {
        "textDecoration": "underline",
        "color": "#039BE5"
    },
    "mdl-menu a": {
        "textDecoration": "none"
    },
    "content": {
        "maxWidth": 1024
    },
    "mdl-card": {
        "display": "block"
    },
    "h3": {
        "background": "url('../img/firebase-logo.png') no-repeat",
        "backgroundSize": 40,
        "paddingLeft": 50,
        "backgroundPositionY": -2
    },
    "mdl-textfield": {
        "width": "100%"
    },
    "mdl-layout__container mdl-layout--fixed-header mdl-layout__content": {
        "overflowY": "visible",
        "overflowX": "visible",
        "overflow": "visible"
    },
    "mdl-layoutis-upgraded mdl-layout__tabis-active::after": {
        "backgroundColor": "#FFCA28"
    },
    "header mdl-textfield__label:after": {
        "backgroundColor": "#FFCA28"
    },
    "mdl-snackbar__action": {
        "color": "#FFCA28"
    },
    "mdl-textfield__label:after": {
        "backgroundColor": "#0288D1"
    },
    "mdl-textfield--floating-labelis-focused mdl-textfield__label": {
        "color": "#0288D1"
    },
    "logo": {
        "fontFamily": "'Amaranth', sans-serif"
    },
    "logo material-icons": {
        "top": 4,
        "fontSize": 32,
        "marginRight": -2,
        "position": "relative"
    },
    "header mdl-layout__header-row": {
        "maxWidth": 1024,
        "width": "100%",
        "height": "auto",
        "paddingTop": 10,
        "paddingRight": 20,
        "paddingBottom": 10,
        "paddingLeft": 20,
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto",
        "position": "relative"
    },
    "avatar": {
        "height": 32,
        "width": 32,
        "display": "inline-block",
        "backgroundSize": "32px 32px",
        "borderRadius": 32,
        "border": "2px white solid",
        "marginRight": 10,
        "backgroundImage": "url('../img/silhouette.jpg')"
    },
    "username": {
        "display": "inline-block",
        "lineHeight": 38,
        "verticalAlign": "top",
        "width": "calc(100% - 46px)",
        "whiteSpace": "nowrap",
        "overflow": "hidden",
        "textOverflow": "ellipsis",
        "textAlign": "left"
    },
    "sign-in-button": {
        "marginLeft": 10,
        "color": "inherit"
    },
    "mdl-button material-icons": {
        "marginTop": -2
    },
    "mdl-buttonmdl-button--icon material-icons": {
        "marginTop": 0
    },
    "mdl-buttonmdl-button--fab material-icons": {
        "marginTop": 0
    },
    "header mdl-tab": {
        "paddingLeft": 23,
        "boxSizing": "border-box",
        "width": "100%",
        "height": "100%",
        "overflow": "visible",
        "position": "relative",
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto",
        "maxWidth": 1024
    },
    "header tab": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "maxWidth": "none"
    },
    "add": {
        "position": "absolute",
        "right": 20,
        "top": 18,
        "zIndex": 998
    },
    "mdl-layout__drawer-button": {
        "display": "none"
    },
    "mdl-layout__drawer mdl-navigation mdl-navigation__linkis-active": {
        "color": "black",
        "backgroundColor": "#EBEBEB"
    },
    "is-active mdl-menu__item": {
        "color": "black",
        "backgroundColor": "#EBEBEB"
    },
    "mdl-layout__drawer": {
        "borderRightWidth": 0
    },
    "mdl-navigation__link material-icons": {
        "position": "relative",
        "marginTop": -2,
        "marginRight": 10
    },
    "mdl-menu__item material-icons": {
        "position": "relative",
        "marginTop": -2,
        "marginRight": 10,
        "top": 7
    },
    "page-add": {
        "display": "block",
        "textAlign": "center"
    },
    "page-add mdl-cell": {
        "width": "auto",
        "minWidth": 300
    },
    "newPictureContainer": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "maxWidth": "100%",
        "maxHeight": 400
    },
    "comments-container username": {
        "width": "auto",
        "lineHeight": 25
    },
    "comments-container comment": {
        "display": "inline-block",
        "verticalAlign": "top",
        "paddingLeft": 10,
        "color": "grey",
        "lineHeight": 25
    },
    "post mdl-card": {
        "height": "100%",
        "top": 0,
        "left": 0,
        "minHeight": 0
    },
    "post header": {
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "width": "calc(100% - 100px)",
        "display": "inline-block"
    },
    "post star-count": {
        "color": "#444",
        "paddingTop": 0,
        "paddingRight": 10,
        "paddingBottom": 0,
        "paddingLeft": 5,
        "fontWeight": "bold",
        "display": "inline-block",
        "top": -10,
        "position": "relative"
    },
    "post comments-container": {
        "paddingTop": 15,
        "paddingRight": 10,
        "paddingBottom": 0,
        "paddingLeft": 10
    },
    "post text": {
        "paddingTop": 0,
        "paddingRight": 10,
        "paddingBottom": 0,
        "paddingLeft": 10,
        "color": "grey"
    },
    "post comments-container text": {
        "marginLeft": 5,
        "color": "#444",
        "transition": "all 0.2s"
    },
    "post add-comment": {
        "flexGrow": 1,
        "paddingTop": 0,
        "paddingRight": 10,
        "paddingBottom": 0,
        "paddingLeft": 10,
        "marginBottom": -10
    },
    "post add-commentmdl-textfield": {
        "width": "100%"
    },
    "post star": {
        "position": "absolute",
        "top": 10,
        "right": 0
    },
    "post star material-icons": {
        "fontSize": 35,
        "color": "#ffcb0c",
        "cursor": "pointer"
    },
    "post star material-icons:HOVER": {
        "opacity": 0.6
    },
    "post star starred": {
        "display": "none"
    },
    "page-splash": {
        "position": "fixed",
        "top": 0,
        "left": 0,
        "width": "100%",
        "height": "100%",
        "backgroundColor": "#0288D1",
        "background": "radial-gradient(circle, #039BE5, #01579b)",
        "zIndex": 10000,
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center",
        "color": "white",
        "flexDirection": "column"
    }
});