/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function filter(callbackfn) {
  return function (array) {
    return __spreadArrays(array.filter(callbackfn));
  };
}

function pipe() {
  var params = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    params[_i] = arguments[_i];
  }

  return function (arr) {
    return params.reduce(function (prev, fn) {
      return fn(prev);
    }, arr);
  };
}

function sort(compareFn) {
  return function (array) {
    return __spreadArrays(array.sort(compareFn));
  };
}

export { filter, pipe, sort };
