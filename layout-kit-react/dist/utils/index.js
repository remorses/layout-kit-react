"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var assertion_1 = require("./assertion");
function mapResponsive(prop, mapper) {
    if (assertion_1.isArray(prop)) {
        // remove null values, using the previous value
        prop = prop.reduce(function (acc, x) {
            if (x == null) {
                var last = acc.length !== 0 ? acc[acc.length - 1] : x;
                return __spreadArrays(acc.slice(0, -1), [last, last]);
            }
            return __spreadArrays(acc, [x]);
        }, []);
        return prop.map(mapper);
    }
    if (assertion_1.isObject(prop)) {
        return Object.keys(prop).reduce(function (result, key) {
            result[key] = mapper(prop[key]);
            return result;
        }, {});
    }
    if (prop != null) {
        return mapper(prop);
    }
    return null;
}
exports.mapResponsive = mapResponsive;
