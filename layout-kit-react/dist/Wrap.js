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
exports.Wrap = void 0;
/** @jsx jsx */
var core_1 = require("@emotion/core");
var react_1 = require("react");
var Box_1 = require("./Box");
var utils_1 = require("./utils");
var css_1 = __importDefault(require("@styled-system/css"));
exports.Wrap = react_1.forwardRef(function (_a, ref) {
    var _b = _a.direction, direction = _b === void 0 ? 'row' : _b, align = _a.align, justify = _a.justify, _c = _a.spacing, spacing = _c === void 0 ? '0px' : _c, children = _a.children, rest = __rest(_a, ["direction", "align", "justify", "spacing", "children"]);
    var theme = react_1.useContext(core_1.ThemeContext);
    var itemSpacing = utils_1.mapResponsive(spacing, function (value) {
        var margin = css_1.default({ margin: value })(theme).margin;
        return "calc(" + margin + " / 2)";
    });
    var groupSpacing = utils_1.mapResponsive(spacing, function (value) {
        var margin = css_1.default({ margin: value })(theme).margin;
        return "calc(" + margin + " / 2 * -1)";
    });
    var validChildren = utils_1.getValidChildren(children);
    var clones = validChildren.map(function (child, index) { return (core_1.jsx(Box_1.Box, { as: 'li', key: index, margin: itemSpacing, display: 'inline-flex' }, child)); });
    return (core_1.jsx(Box_1.Box, __assign({ ref: ref }, rest),
        core_1.jsx(Box_1.Box, { as: 'ul', css: css_1.default({
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: justify,
                alignItems: align,
                flexDirection: direction,
                listStyleType: 'none',
                padding: '0',
                margin: groupSpacing,
            }) }, clones)));
});
