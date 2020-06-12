"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.__DEV__ = exports.isEmpty = exports.isInputEvent = exports.isString = exports.isNull = exports.isNotEmptyObject = exports.isEmptyObject = exports.isObject = exports.isUndefined = exports.isDefined = exports.isFunction = exports.isEmptyArray = exports.isArray = exports.isNumeric = exports.isNotNumber = exports.isNumber = void 0;
// Number assertions
function isNumber(value) {
    return typeof value === "number";
}
exports.isNumber = isNumber;
exports.isNotNumber = function (value) {
    return typeof value !== "number" || isNaN(value) || !isFinite(value);
};
function isNumeric(value) {
    return value != null && value - parseFloat(value) + 1 >= 0;
}
exports.isNumeric = isNumeric;
// Array assertions
function isArray(value) {
    return Array.isArray(value);
}
exports.isArray = isArray;
exports.isEmptyArray = function (value) { return isArray(value) && value.length === 0; };
// Function assertions
function isFunction(value) {
    return typeof value === "function";
}
exports.isFunction = isFunction;
// Generic assertions
exports.isDefined = function (value) {
    return typeof value !== "undefined" && value !== undefined;
};
exports.isUndefined = function (value) {
    return typeof value === "undefined" || value === undefined;
};
// Object assertions
exports.isObject = function (value) {
    var type = typeof value;
    return (value != null &&
        (type === "object" || type === "function") &&
        !isArray(value));
};
exports.isEmptyObject = function (value) {
    return exports.isObject(value) && Object.keys(value).length === 0;
};
function isNotEmptyObject(value) {
    return value && !exports.isEmptyObject(value);
}
exports.isNotEmptyObject = isNotEmptyObject;
exports.isNull = function (value) { return value == null; };
// String assertions
function isString(value) {
    return Object.prototype.toString.call(value) === "[object String]";
}
exports.isString = isString;
// Event assertions
function isInputEvent(value) {
    return value && exports.isObject(value) && exports.isObject(value.target);
}
exports.isInputEvent = isInputEvent;
// Empty assertions
exports.isEmpty = function (value) {
    if (isArray(value))
        return exports.isEmptyArray(value);
    if (exports.isObject(value))
        return exports.isEmptyObject(value);
    if (value == null || value === "")
        return true;
    return false;
};
exports.__DEV__ = process.env.NODE_ENV !== "production";
