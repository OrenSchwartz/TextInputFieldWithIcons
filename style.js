import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "containerLocation": {
        "marginTop": 50,
        "marginLeft": 50
    },
    "container": {
        "width": 300,
        "height": 30
    },
    "inputField": {
        "height": "100%",
        "width": "100%",
        "marginRight": -45,
        "paddingLeft": 35,
        "display": "inline-block"
    },
    "inputFieldFont": {
        "fontSize": 16
    },
    "leftIcon": {
        "display": "inline-block",
        "position": "absolute",
        "marginTop": 4,
        "height": 30,
        "width": 30,
        "marginLeft": 3,
        "backgroundImage": "url(user.svg)",
        "backgroundRepeat": "no-repeat",
        "backgroundColor": "white"
    },
    "rightIcon": {
        "display": "inline-block",
        "position": "absolute",
        "marginTop": 4,
        "height": 30,
        "width": 30,
        "backgroundImage": "url(view.svg)",
        "backgroundRepeat": "no-repeat",
        "backgroundColor": "white"
    }
});