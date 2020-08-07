"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getValidChildren = exports.mapResponsive = void 0;
var assertion_1 = require("./assertion");
var react_1 = __importDefault(require("react"));
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
function getValidChildren(children) {
    return react_1.default.Children.toArray(children).filter(function (child) {
        return react_1.default.isValidElement(child);
    });
}
exports.getValidChildren = getValidChildren;
