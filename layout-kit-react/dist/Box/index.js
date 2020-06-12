"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
}
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Box = exports.systemProps = exports.truncate = void 0;
/** @jsx jsx */
var styled_1 = __importDefault(require("@emotion/styled"));
var should_forward_prop_1 = require("@styled-system/should-forward-prop");
__exportStar(require("./types"), exports);
var styled_system_1 = require("styled-system");
var config_1 = __importDefault(require("./config"));
exports.truncate = function (props) {
    if (props.isTruncated) {
        return {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
        };
    }
};
exports.systemProps = styled_system_1.compose(styled_system_1.layout, styled_system_1.color, styled_system_1.space, styled_system_1.background, styled_system_1.border, styled_system_1.grid, styled_system_1.position, styled_system_1.shadow, styled_system_1.typography, styled_system_1.flexbox, config_1.default);
var shouldForwardProp = should_forward_prop_1.createShouldForwardProp(__spreadArrays(should_forward_prop_1.props, [
    'd',
    'textDecoration',
    'pointerEvents',
    'visibility',
    'transform',
    'cursor',
    'fill',
    'stroke',
]));
/**
 * htmlWidth and htmlHeight is used in the <Image />
 * component to support the native `width` and `height` attributes
 *
 * https://github.com/chakra-ui/chakra-ui/issues/149
 */
var nativeHTMLPropAlias = ['htmlWidth', 'htmlHeight'];
exports.Box = styled_1.default('div', {
    shouldForwardProp: function (prop) {
        if (nativeHTMLPropAlias.includes(prop)) {
            return true;
        }
        else {
            return shouldForwardProp(prop);
        }
    },
})(exports.truncate, exports.systemProps);
