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
exports.ZStack = exports.Stack = void 0;
/** @jsx jsx */
var core_1 = require("@emotion/core");
var react_1 = require("react");
var Box_1 = require("./Box");
var utils_1 = require("./utils");
var css_1 = __importDefault(require("@styled-system/css"));
exports.Stack = react_1.forwardRef(function (_a, ref) {
    var _b = _a.direction, direction = _b === void 0 ? 'column' : _b, _c = _a.align, align = _c === void 0 ? 'flex-start' : _c, justify = _a.justify, _d = _a.spacing, spacing = _d === void 0 ? '0px' : _d, children = _a.children, rest = __rest(_a, ["direction", "align", "justify", "spacing", "children"]);
    var selector = '> *:not(style) ~ *:not(style)';
    var directionStyles = {
        column: { mt: spacing, ml: 0 },
        row: { ml: spacing, mt: 0 },
        'column-reverse': { mb: spacing, mr: 0 },
        'row-reverse': { mr: spacing, mb: 0 },
    };
    var styles = react_1.useMemo(function () {
        var _a;
        return css_1.default((_a = {},
            _a[selector] = utils_1.mapResponsive(direction, function (value) { return (__assign({}, directionStyles[value])); }),
            _a));
    }, [direction, spacing]);
    return (core_1.jsx(Box_1.Box, __assign({ ref: ref, display: 'flex', alignItems: align, justifyContent: justify, flexDirection: direction, css: styles }, rest), children));
});
exports.ZStack = function (_a) {
    var children = _a.children, _b = _a.direction, direction = _b === void 0 ? 'column' : _b, _c = _a.align, align = _c === void 0 ? 'center' : _c, _d = _a.justify, justify = _d === void 0 ? 'center' : _d, rest = __rest(_a, ["children", "direction", "align", "justify"]);
    var stackProps = {
        spacing: '0px',
        direction: direction,
        align: align,
        justify: justify,
    };
    return (core_1.jsx(Box_1.Box, __assign({ display: 'grid' }, rest), react_1.Children.map(children, function (child, i) {
        return (core_1.jsx(exports.Stack, __assign({ gridColumn: '1', gridRow: '1' }, stackProps), child));
    })));
};
// export const ZStack = ({
//     children,
//     direction = 'column',
//     align = 'center',
//     justify = 'center',
//     ...rest
// }: Omit<StackProps, 'spacing'>) => {
//     const stackProps: StackProps = {
//         spacing: '0px',
//         direction,
//         align,
//         justify,
//     }
//     return (
//         <Box display='flex' flexDirection='row' alignItems='center' justifyContent='center' {...rest}>
//             {Children.map(children, (child, i) => {
//                 return <Box w='100%' flex='1' transform={`translateX(-${100 * i}%)`}>{child}</Box>
//             })}
//         </Box>
//     )
// }
