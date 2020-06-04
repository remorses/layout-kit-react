"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_system_1 = require("styled-system");
var isNumber = function (n) { return typeof n === "number" && !isNaN(n); };
var getWidth = function (n, scale) {
    return styled_system_1.get(scale, n, !isNumber(n) || n > 1 ? n : n * 100 + "%");
};
exports.config = {
    roundedTop: {
        properties: ["borderTopLeftRadius", "borderTopRightRadius"],
        scale: "radii",
    },
    roundedBottom: {
        properties: ["borderBottomLeftRadius", "borderBottomRightRadius"],
        scale: "radii",
    },
    roundedLeft: {
        properties: ["borderTopLeftRadius", "borderBottomLeftRadius"],
        scale: "radii",
    },
    roundedRight: {
        properties: ["borderTopRightRadius", "borderBottomRightRadius"],
        scale: "radii",
    },
    roundedTopRight: {
        property: "borderTopRightRadius",
        scale: "radii",
    },
    roundedTopLeft: {
        property: "borderTopLeftRadius",
        scale: "radii",
    },
    roundedBottomRight: {
        property: "borderBottomRightRadius",
        scale: "radii",
    },
    roundedBottomLeft: {
        property: "borderBottomLeftRadius",
        scale: "radii",
    },
    rounded: {
        property: "borderRadius",
        scale: "radii",
    },
    d: {
        property: "display",
    },
    w: {
        property: "width",
        scale: "sizes",
        transform: getWidth,
    },
    minW: {
        property: "minWidth",
        scale: "sizes",
    },
    maxW: {
        property: "maxWidth",
        scale: "sizes",
    },
    h: {
        property: "height",
        scale: "sizes",
    },
    minH: {
        property: "minHeight",
        scale: "sizes",
    },
    maxH: {
        property: "maxHeight",
        scale: "sizes",
    },
    bgImg: {
        property: "backgroundImage",
    },
    bgImage: {
        property: "backgroundImage",
    },
    bgSize: {
        property: "backgroundSize",
    },
    bgPos: {
        property: "backgroundPosition",
    },
    bgRepeat: {
        property: "backgroundRepeat",
    },
    pos: {
        property: "position",
    },
    flexDir: {
        property: "flexDirection",
    },
    shadow: {
        property: "boxShadow",
        scale: "shadows",
    },
    textDecoration: { property: "textDecoration" },
    overflowX: true,
    overflowY: true,
    textTransform: true,
    animation: true,
    appearance: true,
    transform: true,
    transformOrigin: true,
    visibility: true,
    whiteSpace: true,
    userSelect: true,
    pointerEvents: true,
    wordBreak: true,
    overflowWrap: true,
    textOverflow: true,
    boxSizing: true,
    cursor: true,
    resize: true,
    transition: true,
    listStyleType: true,
    listStylePosition: true,
    listStyleImage: true,
    fill: {
        property: "fill",
        scale: "colors",
    },
    stroke: {
        property: "stroke",
        scale: "colors",
    },
    objectFit: true,
    objectPosition: true,
    backgroundAttachment: {
        property: "backgroundAttachment",
    },
    outline: true,
    float: true,
    willChange: true,
};
exports.config.bgAttachment = exports.config.backgroundAttachment;
exports.config.textDecor = exports.config.textDecoration;
exports.config.listStylePos = exports.config.listStylePosition;
exports.config.listStyleImg = exports.config.listStyleImage;
var extraConfig = styled_system_1.system(exports.config);
exports.default = extraConfig;
// Create an issue on @styled-system/css to allow custom alias to be passed to the `css` function
// Transform the custom alias to a format that styled-system CSS supports
var transformAlias = function (prop, propValue) {
    var configKeys = Object.keys(exports.config);
    var result = {};
    if (configKeys.includes(prop)) {
        var _a = exports.config[prop], properties = _a.properties, property = _a.property;
        if (properties) {
            properties.forEach(function (_cssProp) { return (result[_cssProp] = propValue); });
        }
        if (property) {
            result[property] = propValue;
        }
        if (exports.config[prop] === true) {
            result[prop] = propValue;
        }
    }
    else {
        result[prop] = propValue;
    }
    return result;
};
exports.transformAliasProps = function (props) {
    var _a;
    var result = {};
    for (var prop in props) {
        if (typeof props[prop] === "object" && !Array.isArray(props[prop])) {
            result = __assign(__assign({}, result), (_a = {}, _a[prop] = exports.transformAliasProps(props[prop]), _a));
        }
        else {
            result = __assign(__assign({}, result), transformAlias(prop, props[prop]));
        }
    }
    return result;
};
