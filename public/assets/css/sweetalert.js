import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "showSweetAlert": {
        "animation": "showSweetAlert 0.3s"
    },
    "showSweetAlert[data-animation=none]": {
        "animation": "none"
    },
    "showSweetAlert[data-animation=slide-from-top]": {
        "animation": "slideFromTop 0.3s"
    },
    "showSweetAlert[data-animation=slide-from-bottom]": {
        "animation": "slideFromBottom 0.3s"
    },
    "hideSweetAlert": {
        "animation": "hideSweetAlert 0.3s"
    },
    "hideSweetAlert[data-animation=none]": {
        "animation": "none"
    },
    "hideSweetAlert[data-animation=slide-from-top]": {
        "animation": "slideToTop 0.3s"
    },
    "hideSweetAlert[data-animation=slide-from-bottom]": {
        "animation": "slideToBottom 0.3s"
    },
    "animateSuccessTip": {
        "animation": "animateSuccessTip 0.75s"
    },
    "animateSuccessLong": {
        "animation": "animateSuccessLong 0.75s"
    },
    "sa-iconsa-successanimate::after": {
        "animation": "rotatePlaceholder 4.25s ease-in"
    },
    "animateErrorIcon": {
        "animation": "animateErrorIcon 0.5s"
    },
    "animateXMark": {
        "animation": "animateXMark 0.5s"
    },
    "pulseWarning": {
        "animation": "pulseWarning 0.75s infinite alternate"
    },
    "pulseWarningIns": {
        "animation": "pulseWarningIns 0.75s infinite alternate"
    },
    "bodystop-scrolling": {
        "height": "100%",
        "overflow": "hidden"
    },
    "sweet-overlay": {
        "backgroundColor": "rgba(0, 0, 0, 0.4)",
        "position": "fixed",
        "left": 0,
        "right": 0,
        "top": 0,
        "bottom": 0,
        "display": "none",
        "zIndex": 1040
    },
    "sweet-alert": {
        "backgroundColor": "#ffffff",
        "width": 478,
        "paddingTop": 17,
        "paddingRight": 17,
        "paddingBottom": 17,
        "paddingLeft": 17,
        "borderRadius": 5,
        "textAlign": "center",
        "position": "fixed",
        "left": "50%",
        "top": "50%",
        "marginLeft": -256,
        "marginTop": -200,
        "overflow": "hidden",
        "display": "none",
        "zIndex": 2000
    },
    "sweet-alert form-group": {
        "display": "none"
    },
    "sweet-alert form-group sa-input-error": {
        "display": "none"
    },
    "sweet-alertshow-input form-group": {
        "display": "block"
    },
    "sweet-alert sa-confirm-button-container": {
        "display": "inline-block",
        "position": "relative"
    },
    "sweet-alert la-ball-fall": {
        "position": "absolute",
        "left": "50%",
        "top": "50%",
        "marginLeft": -27,
        "marginTop": -9,
        "opacity": 0,
        "visibility": "hidden"
    },
    "sweet-alert button[disabled]": {
        "opacity": 0.6,
        "cursor": "default"
    },
    "sweet-alert buttonconfirm[disabled]": {
        "color": "transparent"
    },
    "sweet-alert buttonconfirm[disabled] ~ la-ball-fall": {
        "opacity": 1,
        "visibility": "visible",
        "transitionDelay": "0s"
    },
    "sweet-alert sa-icon": {
        "width": 80,
        "height": 80,
        "border": "4px solid gray",
        "borderRadius": "50%",
        "marginTop": 20,
        "marginRight": "auto",
        "marginBottom": 20,
        "marginLeft": "auto",
        "position": "relative",
        "boxSizing": "content-box"
    },
    "sweet-alert sa-iconsa-error": {
        "borderColor": "#d43f3a"
    },
    "sweet-alert sa-iconsa-error sa-x-mark": {
        "position": "relative",
        "display": "block"
    },
    "sweet-alert sa-iconsa-error sa-line": {
        "position": "absolute",
        "height": 5,
        "width": 47,
        "backgroundColor": "#d9534f",
        "display": "block",
        "top": 37,
        "borderRadius": 2
    },
    "sweet-alert sa-iconsa-error sa-linesa-left": {
        "transform": "rotate(45deg)",
        "left": 17
    },
    "sweet-alert sa-iconsa-error sa-linesa-right": {
        "transform": "rotate(-45deg)",
        "right": 16
    },
    "sweet-alert sa-iconsa-warning": {
        "borderColor": "#eea236"
    },
    "sweet-alert sa-iconsa-warning sa-body": {
        "position": "absolute",
        "width": 5,
        "height": 47,
        "left": "50%",
        "top": 10,
        "borderRadius": 2,
        "marginLeft": -2,
        "backgroundColor": "#f0ad4e"
    },
    "sweet-alert sa-iconsa-warning sa-dot": {
        "position": "absolute",
        "width": 7,
        "height": 7,
        "borderRadius": "50%",
        "marginLeft": -3,
        "left": "50%",
        "bottom": 10,
        "backgroundColor": "#f0ad4e"
    },
    "sweet-alert sa-iconsa-info": {
        "borderColor": "#46b8da"
    },
    "sweet-alert sa-iconsa-info::before": {
        "content": "",
        "position": "absolute",
        "width": 5,
        "height": 29,
        "left": "50%",
        "bottom": 17,
        "borderRadius": 2,
        "marginLeft": -2,
        "backgroundColor": "#5bc0de"
    },
    "sweet-alert sa-iconsa-info::after": {
        "content": "",
        "position": "absolute",
        "width": 7,
        "height": 7,
        "borderRadius": "50%",
        "marginLeft": -3,
        "top": 19,
        "backgroundColor": "#5bc0de"
    },
    "sweet-alert sa-iconsa-success": {
        "borderColor": "#4cae4c"
    },
    "sweet-alert sa-iconsa-success::before": {
        "content": "''",
        "borderRadius": "120px 0 0 120px",
        "position": "absolute",
        "width": 60,
        "height": 120,
        "background": "#ffffff",
        "transform": "rotate(-45deg)",
        "top": -7,
        "left": -33,
        "transformOrigin": "60px 60px"
    },
    "sweet-alert sa-iconsa-success::after": {
        "content": "''",
        "borderRadius": "0 120px 120px 0",
        "position": "absolute",
        "width": 60,
        "height": 120,
        "background": "#ffffff",
        "transform": "rotate(-45deg)",
        "top": -11,
        "left": 30,
        "transformOrigin": "0px 60px"
    },
    "sweet-alert sa-iconsa-success sa-placeholder": {
        "width": 80,
        "height": 80,
        "border": "4px solid rgba(92, 184, 92, 0.2)",
        "borderRadius": "50%",
        "boxSizing": "content-box",
        "position": "absolute",
        "left": -4,
        "top": -4,
        "zIndex": 2
    },
    "sweet-alert sa-iconsa-success sa-fix": {
        "width": 5,
        "height": 90,
        "backgroundColor": "#ffffff",
        "position": "absolute",
        "left": 28,
        "top": 8,
        "zIndex": 1,
        "transform": "rotate(-45deg)"
    },
    "sweet-alert sa-iconsa-success sa-line": {
        "height": 5,
        "backgroundColor": "#5cb85c",
        "display": "block",
        "borderRadius": 2,
        "position": "absolute",
        "zIndex": 2
    },
    "sweet-alert sa-iconsa-success sa-linesa-tip": {
        "width": 25,
        "left": 14,
        "top": 46,
        "transform": "rotate(45deg)"
    },
    "sweet-alert sa-iconsa-success sa-linesa-long": {
        "width": 47,
        "right": 8,
        "top": 38,
        "transform": "rotate(-45deg)"
    },
    "sweet-alert sa-iconsa-custom": {
        "backgroundSize": "contain",
        "borderRadius": 0,
        "border": "none",
        "backgroundPosition": "center center",
        "backgroundRepeat": "no-repeat"
    },
    "sweet-alert btn-default:focus": {
        "borderColor": "#cccccc",
        "outline": 0,
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(204, 204, 204, 0.6)",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(204, 204, 204, 0.6)"
    },
    "sweet-alert btn-success:focus": {
        "borderColor": "#4cae4c",
        "outline": 0,
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(76, 174, 76, 0.6)",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(76, 174, 76, 0.6)"
    },
    "sweet-alert btn-info:focus": {
        "borderColor": "#46b8da",
        "outline": 0,
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(70, 184, 218, 0.6)",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(70, 184, 218, 0.6)"
    },
    "sweet-alert btn-danger:focus": {
        "borderColor": "#d43f3a",
        "outline": 0,
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(212, 63, 58, 0.6)",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(212, 63, 58, 0.6)"
    },
    "sweet-alert btn-warning:focus": {
        "borderColor": "#eea236",
        "outline": 0,
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(238, 162, 54, 0.6)",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(238, 162, 54, 0.6)"
    },
    "sweet-alert button::-moz-focus-inner": {
        "border": 0
    },
    "la-ball-fall": {
        "position": "relative",
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box",
        "display": "block",
        "fontSize": 0,
        "color": "#fff",
        "width": 54,
        "height": 18
    },
    "la-ball-fall > div": {
        "position": "relative",
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box",
        "display": "inline-block",
        "float": "none",
        "backgroundColor": "currentColor",
        "border": "0 solid currentColor",
        "width": 10,
        "height": 10,
        "marginTop": 4,
        "marginRight": 4,
        "marginBottom": 4,
        "marginLeft": 4,
        "borderRadius": "100%",
        "opacity": 0,
        "WebkitAnimation": "ball-fall 1s ease-in-out infinite",
        "MozAnimation": "ball-fall 1s ease-in-out infinite",
        "OAnimation": "ball-fall 1s ease-in-out infinite",
        "animation": "ball-fall 1s ease-in-out infinite"
    },
    "la-ball-fallla-dark": {
        "color": "#333"
    },
    "la-ball-fall > div:nth-child(1)": {
        "WebkitAnimationDelay": "-200ms",
        "MozAnimationDelay": "-200ms",
        "OAnimationDelay": "-200ms",
        "animationDelay": "-200ms"
    },
    "la-ball-fall > div:nth-child(2)": {
        "WebkitAnimationDelay": "-100ms",
        "MozAnimationDelay": "-100ms",
        "OAnimationDelay": "-100ms",
        "animationDelay": "-100ms"
    },
    "la-ball-fall > div:nth-child(3)": {
        "WebkitAnimationDelay": "0ms",
        "MozAnimationDelay": "0ms",
        "OAnimationDelay": "0ms",
        "animationDelay": "0ms"
    },
    "la-ball-fallla-sm": {
        "width": 26,
        "height": 8
    },
    "la-ball-fallla-sm > div": {
        "width": 4,
        "height": 4,
        "marginTop": 2,
        "marginRight": 2,
        "marginBottom": 2,
        "marginLeft": 2
    },
    "la-ball-fallla-2x": {
        "width": 108,
        "height": 36
    },
    "la-ball-fallla-2x > div": {
        "width": 20,
        "height": 20,
        "marginTop": 8,
        "marginRight": 8,
        "marginBottom": 8,
        "marginLeft": 8
    },
    "la-ball-fallla-3x": {
        "width": 162,
        "height": 54
    },
    "la-ball-fallla-3x > div": {
        "width": 30,
        "height": 30,
        "marginTop": 12,
        "marginRight": 12,
        "marginBottom": 12,
        "marginLeft": 12
    }
});