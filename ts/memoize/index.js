"use strict";
function memoize(fn) {
    var cache = {};
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var key = JSON.stringify(args);
        if (key in cache)
            return cache[key];
        else {
            cache[key] = fn.apply(void 0, args);
            return cache[key];
        }
    };
}
