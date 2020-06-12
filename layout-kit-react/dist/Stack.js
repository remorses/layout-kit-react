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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
/** @jsx jsx */
var core_1 = require("@emotion/core");
var react_1 = require("react");
var Box_1 = require("./Box");
var utils_1 = require("./utils");
var css_1 = __importDefault(require("@styled-system/css"));
exports.Stack = react_1.forwardRef(function (_a, ref) {
    var _b = _a.direction, direction = _b === void 0 ? 'column' : _b, _c = _a.align, align = _c === void 0 ? 'stretch' : _c, justify = _a.justify, _d = _a.spacing, spacing = _d === void 0 ? '0px' : _d, children = _a.children, rest = __rest(_a, ["direction", "align", "justify", "spacing", "children"]);
    var selector = '> * + *';
    var styles = react_1.useMemo(function () {
        var _a;
        return css_1.default((_a = {},
            _a[selector] = utils_1.mapResponsive(direction, function (value) {
                var _a;
                return (_a = {},
                    _a[value === 'column'
                        ? 'marginTop'
                        : 'marginLeft'] = spacing,
                    _a[value === 'column' ? 'marginLeft' : 'marginTop'] = 0,
                    _a);
            }),
            _a));
    }, [direction, spacing]);
    return (core_1.jsx(Box_1.Box, __assign({ ref: ref, display: 'flex', alignItems: align, justifyContent: justify, flexDirection: direction, css: styles }, rest), children));
});
