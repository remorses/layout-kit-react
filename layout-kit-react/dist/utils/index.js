"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapResponsive = void 0;
var assertion_1 = require("./assertion");
function mapResponsive(prop, mapper) {
    if (assertion_1.isArray(prop)) {
        // remove null values, using the previous value
        return prop.map(function (x) {
            if (x === null) {
                return null;
            }
            return mapper(x);
        });
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
