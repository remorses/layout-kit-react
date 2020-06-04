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
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var react_1 = require("react");
var Box_1 = require("./Box");
var Flex_1 = require("./Flex");
exports.Stack = react_1.forwardRef(function (_a, ref) {
    var direction = _a.direction, _b = _a.isInline, isInline = _b === void 0 ? false : _b, _c = _a.isReversed, isReversed = _c === void 0 ? false : _c, children = _a.children, align = _a.align, justify = _a.justify, _d = _a.spacing, spacing = _d === void 0 ? 2 : _d, shouldWrapChildren = _a.shouldWrapChildren, rest = __rest(_a, ["direction", "isInline", "isReversed", "children", "align", "justify", "spacing", "shouldWrapChildren"]);
    var _isReversed = isReversed || (direction && direction.endsWith('reverse'));
    var _isInline = isInline || (direction && direction.startsWith('row'));
    var _direction;
    if (_isInline) {
        _direction = 'row';
    }
    if (_isReversed) {
        _direction = isInline ? 'row-reverse' : 'column-reverse';
    }
    if (direction) {
        _direction = direction;
    }
    if (!_isInline && !_isReversed && !direction) {
        _direction = 'column';
    }
    var validChildrenArray = react_1.Children.toArray(children).filter(react_1.isValidElement);
    return (core_1.jsx(Flex_1.Flex, __assign({ align: align, justify: justify, direction: _direction }, rest, { ref: ref }), validChildrenArray.map(function (child, index) {
        var _a, _b;
        var isLastChild = validChildrenArray.length === index + 1;
        var spacingProps = _isInline
            ? (_a = {},
                _a[_isReversed ? 'ml' : 'mr'] = isLastChild
                    ? null
                    : spacing,
                _a) : (_b = {},
            _b[_isReversed ? 'mt' : 'mb'] = isLastChild
                ? null
                : spacing,
            _b);
        if (shouldWrapChildren) {
            return (core_1.jsx(Box_1.Box, __assign({ d: 'inline-block' }, spacingProps, { key: "stack-box-wrapper-" + index }), child));
        }
        return react_1.cloneElement(child, spacingProps);
    })));
});
