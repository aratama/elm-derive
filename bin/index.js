#!/usr/bin/env node
let __hasOwnProperty = Object.hasOwnProperty;
let __modules = {};
let __commonjs;
let __require = (id) => {
  let module = __modules[id];
  if (!module) {
    module = __modules[id] = {
      exports: {}
    };
    __commonjs[id](module.exports, module);
  }
  return module.exports;
};
let __toModule = (module) => {
  if (module && module.__esModule) {
    return module;
  }
  let result = {};
  for (let key in module) {
    if (__hasOwnProperty.call(module, key)) {
      result[key] = module[key];
    }
  }
  result.default = module;
  return result;
};
let __import = (id) => {
  return __toModule(__require(id));
};
__commonjs = {
  1(exports) {
    // dist\elm-autoencoder.js
    (function(scope) {
      "use strict";
      function F(arity, fun, wrapper) {
        wrapper.a = arity;
        wrapper.f = fun;
        return wrapper;
      }
      function F2(fun) {
        return F(2, fun, function(a) {
          return function(b) {
            return fun(a, b);
          };
        });
      }
      function F3(fun) {
        return F(3, fun, function(a) {
          return function(b) {
            return function(c) {
              return fun(a, b, c);
            };
          };
        });
      }
      function F4(fun) {
        return F(4, fun, function(a) {
          return function(b) {
            return function(c) {
              return function(d) {
                return fun(a, b, c, d);
              };
            };
          };
        });
      }
      function F5(fun) {
        return F(5, fun, function(a) {
          return function(b) {
            return function(c) {
              return function(d) {
                return function(e) {
                  return fun(a, b, c, d, e);
                };
              };
            };
          };
        });
      }
      function F6(fun) {
        return F(6, fun, function(a) {
          return function(b) {
            return function(c) {
              return function(d) {
                return function(e) {
                  return function(f) {
                    return fun(a, b, c, d, e, f);
                  };
                };
              };
            };
          };
        });
      }
      function F7(fun) {
        return F(7, fun, function(a) {
          return function(b) {
            return function(c) {
              return function(d) {
                return function(e) {
                  return function(f) {
                    return function(g) {
                      return fun(a, b, c, d, e, f, g);
                    };
                  };
                };
              };
            };
          };
        });
      }
      function F8(fun) {
        return F(8, fun, function(a) {
          return function(b) {
            return function(c) {
              return function(d) {
                return function(e) {
                  return function(f) {
                    return function(g) {
                      return function(h) {
                        return fun(a, b, c, d, e, f, g, h);
                      };
                    };
                  };
                };
              };
            };
          };
        });
      }
      function F9(fun) {
        return F(9, fun, function(a) {
          return function(b) {
            return function(c) {
              return function(d) {
                return function(e) {
                  return function(f) {
                    return function(g) {
                      return function(h) {
                        return function(i) {
                          return fun(a, b, c, d, e, f, g, h, i);
                        };
                      };
                    };
                  };
                };
              };
            };
          };
        });
      }
      function A2(fun, a, b) {
        return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
      }
      function A3(fun, a, b, c) {
        return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
      }
      function A4(fun, a, b, c, d) {
        return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
      }
      function A5(fun, a, b, c, d, e) {
        return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
      }
      function A6(fun, a, b, c, d, e, f) {
        return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
      }
      function A7(fun, a, b, c, d, e, f, g) {
        return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
      }
      function A8(fun, a, b, c, d, e, f, g, h) {
        return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
      }
      function A9(fun, a, b, c, d, e, f, g, h, i) {
        return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
      }
      console.warn("Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets.");
      var _JsArray_empty = [];
      function _JsArray_singleton(value) {
        return [value];
      }
      function _JsArray_length(array) {
        return array.length;
      }
      var _JsArray_initialize = F3(function(size, offset, func) {
        var result = new Array(size);
        for (var i = 0; i < size; i++) {
          result[i] = func(offset + i);
        }
        return result;
      });
      var _JsArray_initializeFromList = F2(function(max, ls) {
        var result = new Array(max);
        for (var i = 0; i < max && ls.b; i++) {
          result[i] = ls.a;
          ls = ls.b;
        }
        result.length = i;
        return _Utils_Tuple2(result, ls);
      });
      var _JsArray_unsafeGet = F2(function(index, array) {
        return array[index];
      });
      var _JsArray_unsafeSet = F3(function(index, value, array) {
        var length = array.length;
        var result = new Array(length);
        for (var i = 0; i < length; i++) {
          result[i] = array[i];
        }
        result[index] = value;
        return result;
      });
      var _JsArray_push = F2(function(value, array) {
        var length = array.length;
        var result = new Array(length + 1);
        for (var i = 0; i < length; i++) {
          result[i] = array[i];
        }
        result[length] = value;
        return result;
      });
      var _JsArray_foldl = F3(function(func, acc, array) {
        var length = array.length;
        for (var i = 0; i < length; i++) {
          acc = A2(func, array[i], acc);
        }
        return acc;
      });
      var _JsArray_foldr = F3(function(func, acc, array) {
        for (var i = array.length - 1; i >= 0; i--) {
          acc = A2(func, array[i], acc);
        }
        return acc;
      });
      var _JsArray_map = F2(function(func, array) {
        var length = array.length;
        var result = new Array(length);
        for (var i = 0; i < length; i++) {
          result[i] = func(array[i]);
        }
        return result;
      });
      var _JsArray_indexedMap = F3(function(func, offset, array) {
        var length = array.length;
        var result = new Array(length);
        for (var i = 0; i < length; i++) {
          result[i] = A2(func, offset + i, array[i]);
        }
        return result;
      });
      var _JsArray_slice = F3(function(from, to, array) {
        return array.slice(from, to);
      });
      var _JsArray_appendN = F3(function(n, dest, source) {
        var destLen = dest.length;
        var itemsToCopy = n - destLen;
        if (itemsToCopy > source.length) {
          itemsToCopy = source.length;
        }
        var size = destLen + itemsToCopy;
        var result = new Array(size);
        for (var i = 0; i < destLen; i++) {
          result[i] = dest[i];
        }
        for (var i = 0; i < itemsToCopy; i++) {
          result[i + destLen] = source[i];
        }
        return result;
      });
      var _Debug_log_UNUSED = F2(function(tag, value) {
        return value;
      });
      var _Debug_log = F2(function(tag, value) {
        console.log(tag + ": " + _Debug_toString(value));
        return value;
      });
      function _Debug_todo(moduleName, region) {
        return function(message) {
          _Debug_crash(8, moduleName, region, message);
        };
      }
      function _Debug_todoCase(moduleName, region, value) {
        return function(message) {
          _Debug_crash(9, moduleName, region, value, message);
        };
      }
      function _Debug_toString_UNUSED(value) {
        return "<internals>";
      }
      function _Debug_toString(value) {
        return _Debug_toAnsiString(false, value);
      }
      function _Debug_toAnsiString(ansi, value) {
        if (typeof value === "function") {
          return _Debug_internalColor(ansi, "<function>");
        }
        if (typeof value === "boolean") {
          return _Debug_ctorColor(ansi, value ? "True" : "False");
        }
        if (typeof value === "number") {
          return _Debug_numberColor(ansi, value + "");
        }
        if (value instanceof String) {
          return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
        }
        if (typeof value === "string") {
          return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
        }
        if (typeof value === "object" && "$" in value) {
          var tag = value.$;
          if (typeof tag === "number") {
            return _Debug_internalColor(ansi, "<internals>");
          }
          if (tag[0] === "#") {
            var output = [];
            for (var k in value) {
              if (k === "$")
                continue;
              output.push(_Debug_toAnsiString(ansi, value[k]));
            }
            return "(" + output.join(",") + ")";
          }
          if (tag === "Set_elm_builtin") {
            return _Debug_ctorColor(ansi, "Set") + _Debug_fadeColor(ansi, ".fromList") + " " + _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
          }
          if (tag === "RBNode_elm_builtin" || tag === "RBEmpty_elm_builtin") {
            return _Debug_ctorColor(ansi, "Dict") + _Debug_fadeColor(ansi, ".fromList") + " " + _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
          }
          if (tag === "Array_elm_builtin") {
            return _Debug_ctorColor(ansi, "Array") + _Debug_fadeColor(ansi, ".fromList") + " " + _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
          }
          if (tag === "::" || tag === "[]") {
            var output = "[";
            value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b);
            for (; value.b; value = value.b) {
              output += "," + _Debug_toAnsiString(ansi, value.a);
            }
            return output + "]";
          }
          var output = "";
          for (var i in value) {
            if (i === "$")
              continue;
            var str = _Debug_toAnsiString(ansi, value[i]);
            var c0 = str[0];
            var parenless = c0 === "{" || c0 === "(" || c0 === "[" || c0 === "<" || c0 === '"' || str.indexOf(" ") < 0;
            output += " " + (parenless ? str : "(" + str + ")");
          }
          return _Debug_ctorColor(ansi, tag) + output;
        }
        if (typeof DataView === "function" && value instanceof DataView) {
          return _Debug_stringColor(ansi, "<" + value.byteLength + " bytes>");
        }
        if (typeof File !== "undefined" && value instanceof File) {
          return _Debug_internalColor(ansi, "<" + value.name + ">");
        }
        if (typeof value === "object") {
          var output = [];
          for (var key in value) {
            var field = key[0] === "_" ? key.slice(1) : key;
            output.push(_Debug_fadeColor(ansi, field) + " = " + _Debug_toAnsiString(ansi, value[key]));
          }
          if (output.length === 0) {
            return "{}";
          }
          return "{ " + output.join(", ") + " }";
        }
        return _Debug_internalColor(ansi, "<internals>");
      }
      function _Debug_addSlashes(str, isChar) {
        var s = str.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/\t/g, "\\t").replace(/\r/g, "\\r").replace(/\v/g, "\\v").replace(/\0/g, "\\0");
        if (isChar) {
          return s.replace(/\'/g, "\\'");
        } else {
          return s.replace(/\"/g, '\\"');
        }
      }
      function _Debug_ctorColor(ansi, string) {
        return ansi ? "[96m" + string + "[0m" : string;
      }
      function _Debug_numberColor(ansi, string) {
        return ansi ? "[95m" + string + "[0m" : string;
      }
      function _Debug_stringColor(ansi, string) {
        return ansi ? "[93m" + string + "[0m" : string;
      }
      function _Debug_charColor(ansi, string) {
        return ansi ? "[92m" + string + "[0m" : string;
      }
      function _Debug_fadeColor(ansi, string) {
        return ansi ? "[37m" + string + "[0m" : string;
      }
      function _Debug_internalColor(ansi, string) {
        return ansi ? "[36m" + string + "[0m" : string;
      }
      function _Debug_toHexDigit(n) {
        return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
      }
      function _Debug_crash_UNUSED(identifier) {
        throw new Error("https://github.com/elm/core/blob/1.0.0/hints/" + identifier + ".md");
      }
      function _Debug_crash(identifier, fact1, fact2, fact3, fact4) {
        switch (identifier) {
          case 0:
            throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');
          case 1:
            throw new Error("Browser.application programs cannot handle URLs like this:\n\n    " + document.location.href + "\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.");
          case 2:
            var jsonErrorString = fact1;
            throw new Error("Problem with the flags given to your Elm program on initialization.\n\n" + jsonErrorString);
          case 3:
            var portName = fact1;
            throw new Error("There can only be one port named `" + portName + "`, but your program has multiple.");
          case 4:
            var portName = fact1;
            var problem = fact2;
            throw new Error("Trying to send an unexpected type of value through port `" + portName + "`:\n" + problem);
          case 5:
            throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');
          case 6:
            var moduleName = fact1;
            throw new Error("Your page is loading multiple Elm scripts with a module named " + moduleName + ". Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!");
          case 8:
            var moduleName = fact1;
            var region = fact2;
            var message = fact3;
            throw new Error("TODO in module `" + moduleName + "` " + _Debug_regionToString(region) + "\n\n" + message);
          case 9:
            var moduleName = fact1;
            var region = fact2;
            var value = fact3;
            var message = fact4;
            throw new Error("TODO in module `" + moduleName + "` from the `case` expression " + _Debug_regionToString(region) + "\n\nIt received the following value:\n\n    " + _Debug_toString(value).replace("\n", "\n    ") + "\n\nBut the branch that handles it says:\n\n    " + message.replace("\n", "\n    "));
          case 10:
            throw new Error("Bug in https://github.com/elm/virtual-dom/issues");
          case 11:
            throw new Error("Cannot perform mod 0. Division by zero error.");
        }
      }
      function _Debug_regionToString(region) {
        if (region.start.line === region.end.line) {
          return "on line " + region.start.line;
        }
        return "on lines " + region.start.line + " through " + region.end.line;
      }
      function _Utils_eq(x, y) {
        for (var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack); isEqual && (pair = stack.pop()); isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)) {
        }
        return isEqual;
      }
      function _Utils_eqHelp(x, y, depth, stack) {
        if (x === y) {
          return true;
        }
        if (typeof x !== "object" || x === null || y === null) {
          typeof x === "function" && _Debug_crash(5);
          return false;
        }
        if (depth > 100) {
          stack.push(_Utils_Tuple2(x, y));
          return true;
        }
        if (x.$ === "Set_elm_builtin") {
          x = $elm$core$Set$toList(x);
          y = $elm$core$Set$toList(y);
        }
        if (x.$ === "RBNode_elm_builtin" || x.$ === "RBEmpty_elm_builtin") {
          x = $elm$core$Dict$toList(x);
          y = $elm$core$Dict$toList(y);
        }
        for (var key in x) {
          if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack)) {
            return false;
          }
        }
        return true;
      }
      var _Utils_equal = F2(_Utils_eq);
      var _Utils_notEqual = F2(function(a, b) {
        return !_Utils_eq(a, b);
      });
      function _Utils_cmp(x, y, ord) {
        if (typeof x !== "object") {
          return x === y ? 0 : x < y ? -1 : 1;
        }
        if (x instanceof String) {
          var a = x.valueOf();
          var b = y.valueOf();
          return a === b ? 0 : a < b ? -1 : 1;
        }
        if (x.$[0] === "#") {
          return (ord = _Utils_cmp(x.a, y.a)) ? ord : (ord = _Utils_cmp(x.b, y.b)) ? ord : _Utils_cmp(x.c, y.c);
        }
        for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {
        }
        return ord || (x.b ? 1 : y.b ? -1 : 0);
      }
      var _Utils_lt = F2(function(a, b) {
        return _Utils_cmp(a, b) < 0;
      });
      var _Utils_le = F2(function(a, b) {
        return _Utils_cmp(a, b) < 1;
      });
      var _Utils_gt = F2(function(a, b) {
        return _Utils_cmp(a, b) > 0;
      });
      var _Utils_ge = F2(function(a, b) {
        return _Utils_cmp(a, b) >= 0;
      });
      var _Utils_compare = F2(function(x, y) {
        var n = _Utils_cmp(x, y);
        return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
      });
      var _Utils_Tuple0_UNUSED = 0;
      var _Utils_Tuple0 = {
        $: "#0"
      };
      function _Utils_Tuple2_UNUSED(a, b) {
        return {
          a,
          b
        };
      }
      function _Utils_Tuple2(a, b) {
        return {
          $: "#2",
          a,
          b
        };
      }
      function _Utils_Tuple3_UNUSED(a, b, c) {
        return {
          a,
          b,
          c
        };
      }
      function _Utils_Tuple3(a, b, c) {
        return {
          $: "#3",
          a,
          b,
          c
        };
      }
      function _Utils_chr_UNUSED(c) {
        return c;
      }
      function _Utils_chr(c) {
        return new String(c);
      }
      function _Utils_update(oldRecord, updatedFields) {
        var newRecord = {};
        for (var key in oldRecord) {
          newRecord[key] = oldRecord[key];
        }
        for (var key in updatedFields) {
          newRecord[key] = updatedFields[key];
        }
        return newRecord;
      }
      var _Utils_append = F2(_Utils_ap);
      function _Utils_ap(xs, ys) {
        if (typeof xs === "string") {
          return xs + ys;
        }
        if (!xs.b) {
          return ys;
        }
        var root = _List_Cons(xs.a, ys);
        xs = xs.b;
        for (var curr = root; xs.b; xs = xs.b) {
          curr = curr.b = _List_Cons(xs.a, ys);
        }
        return root;
      }
      var _List_Nil_UNUSED = {
        $: 0
      };
      var _List_Nil = {
        $: "[]"
      };
      function _List_Cons_UNUSED(hd, tl) {
        return {
          $: 1,
          a: hd,
          b: tl
        };
      }
      function _List_Cons(hd, tl) {
        return {
          $: "::",
          a: hd,
          b: tl
        };
      }
      var _List_cons = F2(_List_Cons);
      function _List_fromArray(arr) {
        var out = _List_Nil;
        for (var i = arr.length; i--; ) {
          out = _List_Cons(arr[i], out);
        }
        return out;
      }
      function _List_toArray(xs) {
        for (var out = []; xs.b; xs = xs.b) {
          out.push(xs.a);
        }
        return out;
      }
      var _List_map2 = F3(function(f, xs, ys) {
        for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) {
          arr.push(A2(f, xs.a, ys.a));
        }
        return _List_fromArray(arr);
      });
      var _List_map3 = F4(function(f, xs, ys, zs) {
        for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) {
          arr.push(A3(f, xs.a, ys.a, zs.a));
        }
        return _List_fromArray(arr);
      });
      var _List_map4 = F5(function(f, ws, xs, ys, zs) {
        for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) {
          arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
        }
        return _List_fromArray(arr);
      });
      var _List_map5 = F6(function(f, vs, ws, xs, ys, zs) {
        for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) {
          arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
        }
        return _List_fromArray(arr);
      });
      var _List_sortBy = F2(function(f, xs) {
        return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
          return _Utils_cmp(f(a), f(b));
        }));
      });
      var _List_sortWith = F2(function(f, xs) {
        return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
          var ord = A2(f, a, b);
          return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
        }));
      });
      var _Basics_add = F2(function(a, b) {
        return a + b;
      });
      var _Basics_sub = F2(function(a, b) {
        return a - b;
      });
      var _Basics_mul = F2(function(a, b) {
        return a * b;
      });
      var _Basics_fdiv = F2(function(a, b) {
        return a / b;
      });
      var _Basics_idiv = F2(function(a, b) {
        return a / b | 0;
      });
      var _Basics_pow = F2(Math.pow);
      var _Basics_remainderBy = F2(function(b, a) {
        return a % b;
      });
      var _Basics_modBy = F2(function(modulus, x) {
        var answer = x % modulus;
        return modulus === 0 ? _Debug_crash(11) : answer > 0 && modulus < 0 || answer < 0 && modulus > 0 ? answer + modulus : answer;
      });
      var _Basics_pi = Math.PI;
      var _Basics_e = Math.E;
      var _Basics_cos = Math.cos;
      var _Basics_sin = Math.sin;
      var _Basics_tan = Math.tan;
      var _Basics_acos = Math.acos;
      var _Basics_asin = Math.asin;
      var _Basics_atan = Math.atan;
      var _Basics_atan2 = F2(Math.atan2);
      function _Basics_toFloat(x) {
        return x;
      }
      function _Basics_truncate(n) {
        return n | 0;
      }
      function _Basics_isInfinite(n) {
        return n === Infinity || n === -Infinity;
      }
      var _Basics_ceiling = Math.ceil;
      var _Basics_floor = Math.floor;
      var _Basics_round = Math.round;
      var _Basics_sqrt = Math.sqrt;
      var _Basics_log = Math.log;
      var _Basics_isNaN = isNaN;
      function _Basics_not(bool) {
        return !bool;
      }
      var _Basics_and = F2(function(a, b) {
        return a && b;
      });
      var _Basics_or = F2(function(a, b) {
        return a || b;
      });
      var _Basics_xor = F2(function(a, b) {
        return a !== b;
      });
      var _String_cons = F2(function(chr, str) {
        return chr + str;
      });
      function _String_uncons(string) {
        var word = string.charCodeAt(0);
        return !isNaN(word) ? $elm$core$Maybe$Just(55296 <= word && word <= 56319 ? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2)) : _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))) : $elm$core$Maybe$Nothing;
      }
      var _String_append = F2(function(a, b) {
        return a + b;
      });
      function _String_length(str) {
        return str.length;
      }
      var _String_map = F2(function(func, string) {
        var len = string.length;
        var array = new Array(len);
        var i = 0;
        while (i < len) {
          var word = string.charCodeAt(i);
          if (55296 <= word && word <= 56319) {
            array[i] = func(_Utils_chr(string[i] + string[i + 1]));
            i += 2;
            continue;
          }
          array[i] = func(_Utils_chr(string[i]));
          i++;
        }
        return array.join("");
      });
      var _String_filter = F2(function(isGood, str) {
        var arr = [];
        var len = str.length;
        var i = 0;
        while (i < len) {
          var char = str[i];
          var word = str.charCodeAt(i);
          i++;
          if (55296 <= word && word <= 56319) {
            char += str[i];
            i++;
          }
          if (isGood(_Utils_chr(char))) {
            arr.push(char);
          }
        }
        return arr.join("");
      });
      function _String_reverse(str) {
        var len = str.length;
        var arr = new Array(len);
        var i = 0;
        while (i < len) {
          var word = str.charCodeAt(i);
          if (55296 <= word && word <= 56319) {
            arr[len - i] = str[i + 1];
            i++;
            arr[len - i] = str[i - 1];
            i++;
          } else {
            arr[len - i] = str[i];
            i++;
          }
        }
        return arr.join("");
      }
      var _String_foldl = F3(function(func, state, string) {
        var len = string.length;
        var i = 0;
        while (i < len) {
          var char = string[i];
          var word = string.charCodeAt(i);
          i++;
          if (55296 <= word && word <= 56319) {
            char += string[i];
            i++;
          }
          state = A2(func, _Utils_chr(char), state);
        }
        return state;
      });
      var _String_foldr = F3(function(func, state, string) {
        var i = string.length;
        while (i--) {
          var char = string[i];
          var word = string.charCodeAt(i);
          if (56320 <= word && word <= 57343) {
            i--;
            char = string[i] + char;
          }
          state = A2(func, _Utils_chr(char), state);
        }
        return state;
      });
      var _String_split = F2(function(sep, str) {
        return str.split(sep);
      });
      var _String_join = F2(function(sep, strs) {
        return strs.join(sep);
      });
      var _String_slice = F3(function(start, end, str) {
        return str.slice(start, end);
      });
      function _String_trim(str) {
        return str.trim();
      }
      function _String_trimLeft(str) {
        return str.replace(/^\s+/, "");
      }
      function _String_trimRight(str) {
        return str.replace(/\s+$/, "");
      }
      function _String_words(str) {
        return _List_fromArray(str.trim().split(/\s+/g));
      }
      function _String_lines(str) {
        return _List_fromArray(str.split(/\r\n|\r|\n/g));
      }
      function _String_toUpper(str) {
        return str.toUpperCase();
      }
      function _String_toLower(str) {
        return str.toLowerCase();
      }
      var _String_any = F2(function(isGood, string) {
        var i = string.length;
        while (i--) {
          var char = string[i];
          var word = string.charCodeAt(i);
          if (56320 <= word && word <= 57343) {
            i--;
            char = string[i] + char;
          }
          if (isGood(_Utils_chr(char))) {
            return true;
          }
        }
        return false;
      });
      var _String_all = F2(function(isGood, string) {
        var i = string.length;
        while (i--) {
          var char = string[i];
          var word = string.charCodeAt(i);
          if (56320 <= word && word <= 57343) {
            i--;
            char = string[i] + char;
          }
          if (!isGood(_Utils_chr(char))) {
            return false;
          }
        }
        return true;
      });
      var _String_contains = F2(function(sub, str) {
        return str.indexOf(sub) > -1;
      });
      var _String_startsWith = F2(function(sub, str) {
        return str.indexOf(sub) === 0;
      });
      var _String_endsWith = F2(function(sub, str) {
        return str.length >= sub.length && str.lastIndexOf(sub) === str.length - sub.length;
      });
      var _String_indexes = F2(function(sub, str) {
        var subLen = sub.length;
        if (subLen < 1) {
          return _List_Nil;
        }
        var i = 0;
        var is = [];
        while ((i = str.indexOf(sub, i)) > -1) {
          is.push(i);
          i = i + subLen;
        }
        return _List_fromArray(is);
      });
      function _String_fromNumber(number) {
        return number + "";
      }
      function _String_toInt(str) {
        var total = 0;
        var code0 = str.charCodeAt(0);
        var start = code0 == 43 || code0 == 45 ? 1 : 0;
        for (var i = start; i < str.length; ++i) {
          var code = str.charCodeAt(i);
          if (code < 48 || 57 < code) {
            return $elm$core$Maybe$Nothing;
          }
          total = 10 * total + code - 48;
        }
        return i == start ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(code0 == 45 ? -total : total);
      }
      function _String_toFloat(s) {
        if (s.length === 0 || /[\sxbo]/.test(s)) {
          return $elm$core$Maybe$Nothing;
        }
        var n = +s;
        return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
      }
      function _String_fromList(chars) {
        return _List_toArray(chars).join("");
      }
      function _Char_toCode(char) {
        var code = char.charCodeAt(0);
        if (55296 <= code && code <= 56319) {
          return (code - 55296) * 1024 + char.charCodeAt(1) - 56320 + 65536;
        }
        return code;
      }
      function _Char_fromCode(code) {
        return _Utils_chr(code < 0 || 1114111 < code ? "�" : code <= 65535 ? String.fromCharCode(code) : (code -= 65536, String.fromCharCode(Math.floor(code / 1024) + 55296, code % 1024 + 56320)));
      }
      function _Char_toUpper(char) {
        return _Utils_chr(char.toUpperCase());
      }
      function _Char_toLower(char) {
        return _Utils_chr(char.toLowerCase());
      }
      function _Char_toLocaleUpper(char) {
        return _Utils_chr(char.toLocaleUpperCase());
      }
      function _Char_toLocaleLower(char) {
        return _Utils_chr(char.toLocaleLowerCase());
      }
      function _Json_errorToString(error) {
        return $elm$json$Json$Decode$errorToString(error);
      }
      function _Json_succeed(msg) {
        return {
          $: 0,
          a: msg
        };
      }
      function _Json_fail(msg) {
        return {
          $: 1,
          a: msg
        };
      }
      function _Json_decodePrim(decoder) {
        return {
          $: 2,
          b: decoder
        };
      }
      var _Json_decodeInt = _Json_decodePrim(function(value) {
        return typeof value !== "number" ? _Json_expecting("an INT", value) : -2147483647 < value && value < 2147483647 && (value | 0) === value ? $elm$core$Result$Ok(value) : isFinite(value) && !(value % 1) ? $elm$core$Result$Ok(value) : _Json_expecting("an INT", value);
      });
      var _Json_decodeBool = _Json_decodePrim(function(value) {
        return typeof value === "boolean" ? $elm$core$Result$Ok(value) : _Json_expecting("a BOOL", value);
      });
      var _Json_decodeFloat = _Json_decodePrim(function(value) {
        return typeof value === "number" ? $elm$core$Result$Ok(value) : _Json_expecting("a FLOAT", value);
      });
      var _Json_decodeValue = _Json_decodePrim(function(value) {
        return $elm$core$Result$Ok(_Json_wrap(value));
      });
      var _Json_decodeString = _Json_decodePrim(function(value) {
        return typeof value === "string" ? $elm$core$Result$Ok(value) : value instanceof String ? $elm$core$Result$Ok(value + "") : _Json_expecting("a STRING", value);
      });
      function _Json_decodeList(decoder) {
        return {
          $: 3,
          b: decoder
        };
      }
      function _Json_decodeArray(decoder) {
        return {
          $: 4,
          b: decoder
        };
      }
      function _Json_decodeNull(value) {
        return {
          $: 5,
          c: value
        };
      }
      var _Json_decodeField = F2(function(field, decoder) {
        return {
          $: 6,
          d: field,
          b: decoder
        };
      });
      var _Json_decodeIndex = F2(function(index, decoder) {
        return {
          $: 7,
          e: index,
          b: decoder
        };
      });
      function _Json_decodeKeyValuePairs(decoder) {
        return {
          $: 8,
          b: decoder
        };
      }
      function _Json_mapMany(f, decoders) {
        return {
          $: 9,
          f,
          g: decoders
        };
      }
      var _Json_andThen = F2(function(callback, decoder) {
        return {
          $: 10,
          b: decoder,
          h: callback
        };
      });
      function _Json_oneOf(decoders) {
        return {
          $: 11,
          g: decoders
        };
      }
      var _Json_map1 = F2(function(f, d1) {
        return _Json_mapMany(f, [d1]);
      });
      var _Json_map2 = F3(function(f, d1, d2) {
        return _Json_mapMany(f, [d1, d2]);
      });
      var _Json_map3 = F4(function(f, d1, d2, d3) {
        return _Json_mapMany(f, [d1, d2, d3]);
      });
      var _Json_map4 = F5(function(f, d1, d2, d3, d4) {
        return _Json_mapMany(f, [d1, d2, d3, d4]);
      });
      var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5) {
        return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
      });
      var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6) {
        return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
      });
      var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7) {
        return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
      });
      var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8) {
        return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
      });
      var _Json_runOnString = F2(function(decoder, string) {
        try {
          var value = JSON.parse(string);
          return _Json_runHelp(decoder, value);
        } catch (e) {
          return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, "This is not valid JSON! " + e.message, _Json_wrap(string)));
        }
      });
      var _Json_run = F2(function(decoder, value) {
        return _Json_runHelp(decoder, _Json_unwrap(value));
      });
      function _Json_runHelp(decoder, value) {
        switch (decoder.$) {
          case 2:
            return decoder.b(value);
          case 5:
            return value === null ? $elm$core$Result$Ok(decoder.c) : _Json_expecting("null", value);
          case 3:
            if (!_Json_isArray(value)) {
              return _Json_expecting("a LIST", value);
            }
            return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);
          case 4:
            if (!_Json_isArray(value)) {
              return _Json_expecting("an ARRAY", value);
            }
            return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);
          case 6:
            var field = decoder.d;
            if (typeof value !== "object" || value === null || !(field in value)) {
              return _Json_expecting("an OBJECT with a field named `" + field + "`", value);
            }
            var result = _Json_runHelp(decoder.b, value[field]);
            return $elm$core$Result$isOk(result) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));
          case 7:
            var index = decoder.e;
            if (!_Json_isArray(value)) {
              return _Json_expecting("an ARRAY", value);
            }
            if (index >= value.length) {
              return _Json_expecting("a LONGER array. Need index " + index + " but only see " + value.length + " entries", value);
            }
            var result = _Json_runHelp(decoder.b, value[index]);
            return $elm$core$Result$isOk(result) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));
          case 8:
            if (typeof value !== "object" || value === null || _Json_isArray(value)) {
              return _Json_expecting("an OBJECT", value);
            }
            var keyValuePairs = _List_Nil;
            for (var key in value) {
              if (value.hasOwnProperty(key)) {
                var result = _Json_runHelp(decoder.b, value[key]);
                if (!$elm$core$Result$isOk(result)) {
                  return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
                }
                keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
              }
            }
            return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));
          case 9:
            var answer = decoder.f;
            var decoders = decoder.g;
            for (var i = 0; i < decoders.length; i++) {
              var result = _Json_runHelp(decoders[i], value);
              if (!$elm$core$Result$isOk(result)) {
                return result;
              }
              answer = answer(result.a);
            }
            return $elm$core$Result$Ok(answer);
          case 10:
            var result = _Json_runHelp(decoder.b, value);
            return !$elm$core$Result$isOk(result) ? result : _Json_runHelp(decoder.h(result.a), value);
          case 11:
            var errors = _List_Nil;
            for (var temp = decoder.g; temp.b; temp = temp.b) {
              var result = _Json_runHelp(temp.a, value);
              if ($elm$core$Result$isOk(result)) {
                return result;
              }
              errors = _List_Cons(result.a, errors);
            }
            return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));
          case 1:
            return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));
          case 0:
            return $elm$core$Result$Ok(decoder.a);
        }
      }
      function _Json_runArrayDecoder(decoder, value, toElmValue) {
        var len = value.length;
        var array = new Array(len);
        for (var i = 0; i < len; i++) {
          var result = _Json_runHelp(decoder, value[i]);
          if (!$elm$core$Result$isOk(result)) {
            return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
          }
          array[i] = result.a;
        }
        return $elm$core$Result$Ok(toElmValue(array));
      }
      function _Json_isArray(value) {
        return Array.isArray(value) || typeof FileList !== "undefined" && value instanceof FileList;
      }
      function _Json_toElmArray(array) {
        return A2($elm$core$Array$initialize, array.length, function(i) {
          return array[i];
        });
      }
      function _Json_expecting(type, value) {
        return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, "Expecting " + type, _Json_wrap(value)));
      }
      function _Json_equality(x, y) {
        if (x === y) {
          return true;
        }
        if (x.$ !== y.$) {
          return false;
        }
        switch (x.$) {
          case 0:
          case 1:
            return x.a === y.a;
          case 2:
            return x.b === y.b;
          case 5:
            return x.c === y.c;
          case 3:
          case 4:
          case 8:
            return _Json_equality(x.b, y.b);
          case 6:
            return x.d === y.d && _Json_equality(x.b, y.b);
          case 7:
            return x.e === y.e && _Json_equality(x.b, y.b);
          case 9:
            return x.f === y.f && _Json_listEquality(x.g, y.g);
          case 10:
            return x.h === y.h && _Json_equality(x.b, y.b);
          case 11:
            return _Json_listEquality(x.g, y.g);
        }
      }
      function _Json_listEquality(aDecoders, bDecoders) {
        var len = aDecoders.length;
        if (len !== bDecoders.length) {
          return false;
        }
        for (var i = 0; i < len; i++) {
          if (!_Json_equality(aDecoders[i], bDecoders[i])) {
            return false;
          }
        }
        return true;
      }
      var _Json_encode = F2(function(indentLevel, value) {
        return JSON.stringify(_Json_unwrap(value), null, indentLevel) + "";
      });
      function _Json_wrap(value) {
        return {
          $: 0,
          a: value
        };
      }
      function _Json_unwrap(value) {
        return value.a;
      }
      function _Json_wrap_UNUSED(value) {
        return value;
      }
      function _Json_unwrap_UNUSED(value) {
        return value;
      }
      function _Json_emptyArray() {
        return [];
      }
      function _Json_emptyObject() {
        return {};
      }
      var _Json_addField = F3(function(key, value, object) {
        object[key] = _Json_unwrap(value);
        return object;
      });
      function _Json_addEntry(func) {
        return F2(function(entry, array) {
          array.push(_Json_unwrap(func(entry)));
          return array;
        });
      }
      var _Json_encodeNull = _Json_wrap(null);
      function _Scheduler_succeed(value) {
        return {
          $: 0,
          a: value
        };
      }
      function _Scheduler_fail(error) {
        return {
          $: 1,
          a: error
        };
      }
      function _Scheduler_binding(callback) {
        return {
          $: 2,
          b: callback,
          c: null
        };
      }
      var _Scheduler_andThen = F2(function(callback, task) {
        return {
          $: 3,
          b: callback,
          d: task
        };
      });
      var _Scheduler_onError = F2(function(callback, task) {
        return {
          $: 4,
          b: callback,
          d: task
        };
      });
      function _Scheduler_receive(callback) {
        return {
          $: 5,
          b: callback
        };
      }
      var _Scheduler_guid = 0;
      function _Scheduler_rawSpawn(task) {
        var proc = {
          $: 0,
          e: _Scheduler_guid++,
          f: task,
          g: null,
          h: []
        };
        _Scheduler_enqueue(proc);
        return proc;
      }
      function _Scheduler_spawn(task) {
        return _Scheduler_binding(function(callback) {
          callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
        });
      }
      function _Scheduler_rawSend(proc, msg) {
        proc.h.push(msg);
        _Scheduler_enqueue(proc);
      }
      var _Scheduler_send = F2(function(proc, msg) {
        return _Scheduler_binding(function(callback) {
          _Scheduler_rawSend(proc, msg);
          callback(_Scheduler_succeed(_Utils_Tuple0));
        });
      });
      function _Scheduler_kill(proc) {
        return _Scheduler_binding(function(callback) {
          var task = proc.f;
          if (task.$ === 2 && task.c) {
            task.c();
          }
          proc.f = null;
          callback(_Scheduler_succeed(_Utils_Tuple0));
        });
      }
      var _Scheduler_working = false;
      var _Scheduler_queue = [];
      function _Scheduler_enqueue(proc) {
        _Scheduler_queue.push(proc);
        if (_Scheduler_working) {
          return;
        }
        _Scheduler_working = true;
        while (proc = _Scheduler_queue.shift()) {
          _Scheduler_step(proc);
        }
        _Scheduler_working = false;
      }
      function _Scheduler_step(proc) {
        while (proc.f) {
          var rootTag = proc.f.$;
          if (rootTag === 0 || rootTag === 1) {
            while (proc.g && proc.g.$ !== rootTag) {
              proc.g = proc.g.i;
            }
            if (!proc.g) {
              return;
            }
            proc.f = proc.g.b(proc.f.a);
            proc.g = proc.g.i;
          } else if (rootTag === 2) {
            proc.f.c = proc.f.b(function(newRoot) {
              proc.f = newRoot;
              _Scheduler_enqueue(proc);
            });
            return;
          } else if (rootTag === 5) {
            if (proc.h.length === 0) {
              return;
            }
            proc.f = proc.f.b(proc.h.shift());
          } else {
            proc.g = {
              $: rootTag === 3 ? 0 : 1,
              b: proc.f.b,
              i: proc.g
            };
            proc.f = proc.f.d;
          }
        }
      }
      function _Process_sleep(time) {
        return _Scheduler_binding(function(callback) {
          var id = setTimeout(function() {
            callback(_Scheduler_succeed(_Utils_Tuple0));
          }, time);
          return function() {
            clearTimeout(id);
          };
        });
      }
      var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args) {
        return _Platform_initialize(flagDecoder, args, impl.init, impl.update, impl.subscriptions, function() {
          return function() {
          };
        });
      });
      function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder) {
        var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args["flags"] : void 0));
        $elm$core$Result$isOk(result) || _Debug_crash(2, _Json_errorToString(result.a));
        var managers = {};
        var initPair = init(result.a);
        var model = initPair.a;
        var stepper = stepperBuilder(sendToApp, model);
        var ports = _Platform_setupEffects(managers, sendToApp);
        function sendToApp(msg, viewMetadata) {
          var pair = A2(update, msg, model);
          stepper(model = pair.a, viewMetadata);
          _Platform_enqueueEffects(managers, pair.b, subscriptions(model));
        }
        _Platform_enqueueEffects(managers, initPair.b, subscriptions(model));
        return ports ? {
          ports
        } : {};
      }
      var _Platform_preload;
      function _Platform_registerPreload(url) {
        _Platform_preload.add(url);
      }
      var _Platform_effectManagers = {};
      function _Platform_setupEffects(managers, sendToApp) {
        var ports;
        for (var key in _Platform_effectManagers) {
          var manager = _Platform_effectManagers[key];
          if (manager.a) {
            ports = ports || {};
            ports[key] = manager.a(key, sendToApp);
          }
          managers[key] = _Platform_instantiateManager(manager, sendToApp);
        }
        return ports;
      }
      function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap) {
        return {
          b: init,
          c: onEffects,
          d: onSelfMsg,
          e: cmdMap,
          f: subMap
        };
      }
      function _Platform_instantiateManager(info, sendToApp) {
        var router = {
          g: sendToApp,
          h: void 0
        };
        var onEffects = info.c;
        var onSelfMsg = info.d;
        var cmdMap = info.e;
        var subMap = info.f;
        function loop(state) {
          return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg) {
            var value = msg.a;
            if (msg.$ === 0) {
              return A3(onSelfMsg, router, value, state);
            }
            return cmdMap && subMap ? A4(onEffects, router, value.i, value.j, state) : A3(onEffects, router, cmdMap ? value.i : value.j, state);
          }));
        }
        return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
      }
      var _Platform_sendToApp = F2(function(router, msg) {
        return _Scheduler_binding(function(callback) {
          router.g(msg);
          callback(_Scheduler_succeed(_Utils_Tuple0));
        });
      });
      var _Platform_sendToSelf = F2(function(router, msg) {
        return A2(_Scheduler_send, router.h, {
          $: 0,
          a: msg
        });
      });
      function _Platform_leaf(home) {
        return function(value) {
          return {
            $: 1,
            k: home,
            l: value
          };
        };
      }
      function _Platform_batch(list) {
        return {
          $: 2,
          m: list
        };
      }
      var _Platform_map = F2(function(tagger, bag) {
        return {
          $: 3,
          n: tagger,
          o: bag
        };
      });
      var _Platform_effectsQueue = [];
      var _Platform_effectsActive = false;
      function _Platform_enqueueEffects(managers, cmdBag, subBag) {
        _Platform_effectsQueue.push({
          p: managers,
          q: cmdBag,
          r: subBag
        });
        if (_Platform_effectsActive)
          return;
        _Platform_effectsActive = true;
        for (var fx; fx = _Platform_effectsQueue.shift(); ) {
          _Platform_dispatchEffects(fx.p, fx.q, fx.r);
        }
        _Platform_effectsActive = false;
      }
      function _Platform_dispatchEffects(managers, cmdBag, subBag) {
        var effectsDict = {};
        _Platform_gatherEffects(true, cmdBag, effectsDict, null);
        _Platform_gatherEffects(false, subBag, effectsDict, null);
        for (var home in managers) {
          _Scheduler_rawSend(managers[home], {
            $: "fx",
            a: effectsDict[home] || {
              i: _List_Nil,
              j: _List_Nil
            }
          });
        }
      }
      function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers) {
        switch (bag.$) {
          case 1:
            var home = bag.k;
            var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
            effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
            return;
          case 2:
            for (var list = bag.m; list.b; list = list.b) {
              _Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
            }
            return;
          case 3:
            _Platform_gatherEffects(isCmd, bag.o, effectsDict, {
              s: bag.n,
              t: taggers
            });
            return;
        }
      }
      function _Platform_toEffect(isCmd, home, taggers, value) {
        function applyTaggers(x) {
          for (var temp = taggers; temp; temp = temp.t) {
            x = temp.s(x);
          }
          return x;
        }
        var map = isCmd ? _Platform_effectManagers[home].e : _Platform_effectManagers[home].f;
        return A2(map, applyTaggers, value);
      }
      function _Platform_insert(isCmd, newEffect, effects) {
        effects = effects || {
          i: _List_Nil,
          j: _List_Nil
        };
        isCmd ? effects.i = _List_Cons(newEffect, effects.i) : effects.j = _List_Cons(newEffect, effects.j);
        return effects;
      }
      function _Platform_checkPortName(name) {
        if (_Platform_effectManagers[name]) {
          _Debug_crash(3, name);
        }
      }
      function _Platform_outgoingPort(name, converter) {
        _Platform_checkPortName(name);
        _Platform_effectManagers[name] = {
          e: _Platform_outgoingPortMap,
          u: converter,
          a: _Platform_setupOutgoingPort
        };
        return _Platform_leaf(name);
      }
      var _Platform_outgoingPortMap = F2(function(tagger, value) {
        return value;
      });
      function _Platform_setupOutgoingPort(name) {
        var subs = [];
        var converter = _Platform_effectManagers[name].u;
        var init = _Process_sleep(0);
        _Platform_effectManagers[name].b = init;
        _Platform_effectManagers[name].c = F3(function(router, cmdList, state) {
          for (; cmdList.b; cmdList = cmdList.b) {
            var currentSubs = subs;
            var value = _Json_unwrap(converter(cmdList.a));
            for (var i = 0; i < currentSubs.length; i++) {
              currentSubs[i](value);
            }
          }
          return init;
        });
        function subscribe(callback) {
          subs.push(callback);
        }
        function unsubscribe(callback) {
          subs = subs.slice();
          var index = subs.indexOf(callback);
          if (index >= 0) {
            subs.splice(index, 1);
          }
        }
        return {
          subscribe,
          unsubscribe
        };
      }
      function _Platform_incomingPort(name, converter) {
        _Platform_checkPortName(name);
        _Platform_effectManagers[name] = {
          f: _Platform_incomingPortMap,
          u: converter,
          a: _Platform_setupIncomingPort
        };
        return _Platform_leaf(name);
      }
      var _Platform_incomingPortMap = F2(function(tagger, finalTagger) {
        return function(value) {
          return tagger(finalTagger(value));
        };
      });
      function _Platform_setupIncomingPort(name, sendToApp) {
        var subs = _List_Nil;
        var converter = _Platform_effectManagers[name].u;
        var init = _Scheduler_succeed(null);
        _Platform_effectManagers[name].b = init;
        _Platform_effectManagers[name].c = F3(function(router, subList, state) {
          subs = subList;
          return init;
        });
        function send(incomingValue) {
          var result = A2(_Json_run, converter, _Json_wrap(incomingValue));
          $elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);
          var value = result.a;
          for (var temp = subs; temp.b; temp = temp.b) {
            sendToApp(temp.a(value));
          }
        }
        return {
          send
        };
      }
      function _Platform_export_UNUSED(exports2) {
        scope["Elm"] ? _Platform_mergeExportsProd(scope["Elm"], exports2) : scope["Elm"] = exports2;
      }
      function _Platform_mergeExportsProd(obj, exports2) {
        for (var name in exports2) {
          name in obj ? name == "init" ? _Debug_crash(6) : _Platform_mergeExportsProd(obj[name], exports2[name]) : obj[name] = exports2[name];
        }
      }
      function _Platform_export(exports2) {
        scope["Elm"] ? _Platform_mergeExportsDebug("Elm", scope["Elm"], exports2) : scope["Elm"] = exports2;
      }
      function _Platform_mergeExportsDebug(moduleName, obj, exports2) {
        for (var name in exports2) {
          name in obj ? name == "init" ? _Debug_crash(6, moduleName) : _Platform_mergeExportsDebug(moduleName + "." + name, obj[name], exports2[name]) : obj[name] = exports2[name];
        }
      }
      var _Bitwise_and = F2(function(a, b) {
        return a & b;
      });
      var _Bitwise_or = F2(function(a, b) {
        return a | b;
      });
      var _Bitwise_xor = F2(function(a, b) {
        return a ^ b;
      });
      function _Bitwise_complement(a) {
        return ~a;
      }
      ;
      var _Bitwise_shiftLeftBy = F2(function(offset, a) {
        return a << offset;
      });
      var _Bitwise_shiftRightBy = F2(function(offset, a) {
        return a >> offset;
      });
      var _Bitwise_shiftRightZfBy = F2(function(offset, a) {
        return a >>> offset;
      });
      var _Parser_isSubString = F5(function(smallString, offset, row, col, bigString) {
        var smallLength = smallString.length;
        var isGood = offset + smallLength <= bigString.length;
        for (var i = 0; isGood && i < smallLength; ) {
          var code = bigString.charCodeAt(offset);
          isGood = smallString[i++] === bigString[offset++] && (code === 10 ? (row++, col = 1) : (col++, (code & 63488) === 55296 ? smallString[i++] === bigString[offset++] : 1));
        }
        return _Utils_Tuple3(isGood ? offset : -1, row, col);
      });
      var _Parser_isSubChar = F3(function(predicate, offset, string) {
        return string.length <= offset ? -1 : (string.charCodeAt(offset) & 63488) === 55296 ? predicate(_Utils_chr(string.substr(offset, 2))) ? offset + 2 : -1 : predicate(_Utils_chr(string[offset])) ? string[offset] === "\n" ? -2 : offset + 1 : -1;
      });
      var _Parser_isAsciiCode = F3(function(code, offset, string) {
        return string.charCodeAt(offset) === code;
      });
      var _Parser_chompBase10 = F2(function(offset, string) {
        for (; offset < string.length; offset++) {
          var code = string.charCodeAt(offset);
          if (code < 48 || 57 < code) {
            return offset;
          }
        }
        return offset;
      });
      var _Parser_consumeBase = F3(function(base, offset, string) {
        for (var total = 0; offset < string.length; offset++) {
          var digit = string.charCodeAt(offset) - 48;
          if (digit < 0 || base <= digit)
            break;
          total = base * total + digit;
        }
        return _Utils_Tuple2(offset, total);
      });
      var _Parser_consumeBase16 = F2(function(offset, string) {
        for (var total = 0; offset < string.length; offset++) {
          var code = string.charCodeAt(offset);
          if (48 <= code && code <= 57) {
            total = 16 * total + code - 48;
          } else if (65 <= code && code <= 70) {
            total = 16 * total + code - 55;
          } else if (97 <= code && code <= 102) {
            total = 16 * total + code - 87;
          } else {
            break;
          }
        }
        return _Utils_Tuple2(offset, total);
      });
      var _Parser_findSubString = F5(function(smallString, offset, row, col, bigString) {
        var newOffset = bigString.indexOf(smallString, offset);
        var target = newOffset < 0 ? bigString.length : newOffset + smallString.length;
        while (offset < target) {
          var code = bigString.charCodeAt(offset++);
          code === 10 ? (col = 1, row++) : (col++, (code & 63488) === 55296 && offset++);
        }
        return _Utils_Tuple3(newOffset, row, col);
      });
      var $elm$core$List$cons = _List_cons;
      var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
      var $elm$core$Array$foldr = F3(function(func, baseCase, _v0) {
        var tree = _v0.c;
        var tail = _v0.d;
        var helper = F2(function(node, acc) {
          if (node.$ === "SubTree") {
            var subTree = node.a;
            return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
          } else {
            var values = node.a;
            return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
          }
        });
        return A3($elm$core$Elm$JsArray$foldr, helper, A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail), tree);
      });
      var $elm$core$Array$toList = function(array) {
        return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
      };
      var $elm$core$Dict$foldr = F3(function(func, acc, t) {
        foldr:
          while (true) {
            if (t.$ === "RBEmpty_elm_builtin") {
              return acc;
            } else {
              var key = t.b;
              var value = t.c;
              var left = t.d;
              var right = t.e;
              var $temp$func = func, $temp$acc = A3(func, key, value, A3($elm$core$Dict$foldr, func, acc, right)), $temp$t = left;
              func = $temp$func;
              acc = $temp$acc;
              t = $temp$t;
              continue foldr;
            }
          }
      });
      var $elm$core$Dict$toList = function(dict) {
        return A3($elm$core$Dict$foldr, F3(function(key, value, list) {
          return A2($elm$core$List$cons, _Utils_Tuple2(key, value), list);
        }), _List_Nil, dict);
      };
      var $elm$core$Dict$keys = function(dict) {
        return A3($elm$core$Dict$foldr, F3(function(key, value, keyList) {
          return A2($elm$core$List$cons, key, keyList);
        }), _List_Nil, dict);
      };
      var $elm$core$Set$toList = function(_v0) {
        var dict = _v0.a;
        return $elm$core$Dict$keys(dict);
      };
      var $elm$core$Basics$EQ = {
        $: "EQ"
      };
      var $elm$core$Basics$GT = {
        $: "GT"
      };
      var $elm$core$Basics$LT = {
        $: "LT"
      };
      var $elm$core$Basics$apL = F2(function(f, x) {
        return f(x);
      });
      var $elm$core$Basics$append = _Utils_append;
      var $elm$core$Result$Err = function(a) {
        return {
          $: "Err",
          a
        };
      };
      var $elm$json$Json$Decode$Failure = F2(function(a, b) {
        return {
          $: "Failure",
          a,
          b
        };
      });
      var $elm$json$Json$Decode$Field = F2(function(a, b) {
        return {
          $: "Field",
          a,
          b
        };
      });
      var $elm$json$Json$Decode$Index = F2(function(a, b) {
        return {
          $: "Index",
          a,
          b
        };
      });
      var $elm$core$Result$Ok = function(a) {
        return {
          $: "Ok",
          a
        };
      };
      var $elm$json$Json$Decode$OneOf = function(a) {
        return {
          $: "OneOf",
          a
        };
      };
      var $elm$core$Basics$False = {
        $: "False"
      };
      var $elm$core$Basics$add = _Basics_add;
      var $elm$core$Maybe$Just = function(a) {
        return {
          $: "Just",
          a
        };
      };
      var $elm$core$Maybe$Nothing = {
        $: "Nothing"
      };
      var $elm$core$String$all = _String_all;
      var $elm$core$Basics$and = _Basics_and;
      var $elm$json$Json$Encode$encode = _Json_encode;
      var $elm$core$String$fromInt = _String_fromNumber;
      var $elm$core$String$join = F2(function(sep, chunks) {
        return A2(_String_join, sep, _List_toArray(chunks));
      });
      var $elm$core$String$split = F2(function(sep, string) {
        return _List_fromArray(A2(_String_split, sep, string));
      });
      var $elm$json$Json$Decode$indent = function(str) {
        return A2($elm$core$String$join, "\n    ", A2($elm$core$String$split, "\n", str));
      };
      var $elm$core$List$foldl = F3(function(func, acc, list) {
        foldl:
          while (true) {
            if (!list.b) {
              return acc;
            } else {
              var x = list.a;
              var xs = list.b;
              var $temp$func = func, $temp$acc = A2(func, x, acc), $temp$list = xs;
              func = $temp$func;
              acc = $temp$acc;
              list = $temp$list;
              continue foldl;
            }
          }
      });
      var $elm$core$List$length = function(xs) {
        return A3($elm$core$List$foldl, F2(function(_v0, i) {
          return i + 1;
        }), 0, xs);
      };
      var $elm$core$List$map2 = _List_map2;
      var $elm$core$Basics$le = _Utils_le;
      var $elm$core$Basics$sub = _Basics_sub;
      var $elm$core$List$rangeHelp = F3(function(lo, hi, list) {
        rangeHelp:
          while (true) {
            if (_Utils_cmp(lo, hi) < 1) {
              var $temp$lo = lo, $temp$hi = hi - 1, $temp$list = A2($elm$core$List$cons, hi, list);
              lo = $temp$lo;
              hi = $temp$hi;
              list = $temp$list;
              continue rangeHelp;
            } else {
              return list;
            }
          }
      });
      var $elm$core$List$range = F2(function(lo, hi) {
        return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
      });
      var $elm$core$List$indexedMap = F2(function(f, xs) {
        return A3($elm$core$List$map2, f, A2($elm$core$List$range, 0, $elm$core$List$length(xs) - 1), xs);
      });
      var $elm$core$Char$toCode = _Char_toCode;
      var $elm$core$Char$isLower = function(_char) {
        var code = $elm$core$Char$toCode(_char);
        return 97 <= code && code <= 122;
      };
      var $elm$core$Char$isUpper = function(_char) {
        var code = $elm$core$Char$toCode(_char);
        return code <= 90 && 65 <= code;
      };
      var $elm$core$Basics$or = _Basics_or;
      var $elm$core$Char$isAlpha = function(_char) {
        return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
      };
      var $elm$core$Char$isDigit = function(_char) {
        var code = $elm$core$Char$toCode(_char);
        return code <= 57 && 48 <= code;
      };
      var $elm$core$Char$isAlphaNum = function(_char) {
        return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
      };
      var $elm$core$List$reverse = function(list) {
        return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
      };
      var $elm$core$String$uncons = _String_uncons;
      var $elm$json$Json$Decode$errorOneOf = F2(function(i, error) {
        return "\n\n(" + ($elm$core$String$fromInt(i + 1) + (") " + $elm$json$Json$Decode$indent($elm$json$Json$Decode$errorToString(error))));
      });
      var $elm$json$Json$Decode$errorToString = function(error) {
        return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
      };
      var $elm$json$Json$Decode$errorToStringHelp = F2(function(error, context) {
        errorToStringHelp:
          while (true) {
            switch (error.$) {
              case "Field":
                var f = error.a;
                var err = error.b;
                var isSimple = function() {
                  var _v1 = $elm$core$String$uncons(f);
                  if (_v1.$ === "Nothing") {
                    return false;
                  } else {
                    var _v2 = _v1.a;
                    var _char = _v2.a;
                    var rest = _v2.b;
                    return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
                  }
                }();
                var fieldName = isSimple ? "." + f : "['" + (f + "']");
                var $temp$error = err, $temp$context = A2($elm$core$List$cons, fieldName, context);
                error = $temp$error;
                context = $temp$context;
                continue errorToStringHelp;
              case "Index":
                var i = error.a;
                var err = error.b;
                var indexName = "[" + ($elm$core$String$fromInt(i) + "]");
                var $temp$error = err, $temp$context = A2($elm$core$List$cons, indexName, context);
                error = $temp$error;
                context = $temp$context;
                continue errorToStringHelp;
              case "OneOf":
                var errors = error.a;
                if (!errors.b) {
                  return "Ran into a Json.Decode.oneOf with no possibilities" + function() {
                    if (!context.b) {
                      return "!";
                    } else {
                      return " at json" + A2($elm$core$String$join, "", $elm$core$List$reverse(context));
                    }
                  }();
                } else {
                  if (!errors.b.b) {
                    var err = errors.a;
                    var $temp$error = err, $temp$context = context;
                    error = $temp$error;
                    context = $temp$context;
                    continue errorToStringHelp;
                  } else {
                    var starter = function() {
                      if (!context.b) {
                        return "Json.Decode.oneOf";
                      } else {
                        return "The Json.Decode.oneOf at json" + A2($elm$core$String$join, "", $elm$core$List$reverse(context));
                      }
                    }();
                    var introduction = starter + (" failed in the following " + ($elm$core$String$fromInt($elm$core$List$length(errors)) + " ways:"));
                    return A2($elm$core$String$join, "\n\n", A2($elm$core$List$cons, introduction, A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
                  }
                }
              default:
                var msg = error.a;
                var json = error.b;
                var introduction = function() {
                  if (!context.b) {
                    return "Problem with the given value:\n\n";
                  } else {
                    return "Problem with the value at json" + (A2($elm$core$String$join, "", $elm$core$List$reverse(context)) + ":\n\n    ");
                  }
                }();
                return introduction + ($elm$json$Json$Decode$indent(A2($elm$json$Json$Encode$encode, 4, json)) + ("\n\n" + msg));
            }
          }
      });
      var $elm$core$Array$branchFactor = 32;
      var $elm$core$Array$Array_elm_builtin = F4(function(a, b, c, d) {
        return {
          $: "Array_elm_builtin",
          a,
          b,
          c,
          d
        };
      });
      var $elm$core$Elm$JsArray$empty = _JsArray_empty;
      var $elm$core$Basics$ceiling = _Basics_ceiling;
      var $elm$core$Basics$fdiv = _Basics_fdiv;
      var $elm$core$Basics$logBase = F2(function(base, number) {
        return _Basics_log(number) / _Basics_log(base);
      });
      var $elm$core$Basics$toFloat = _Basics_toFloat;
      var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
      var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
      var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
      var $elm$core$Array$Leaf = function(a) {
        return {
          $: "Leaf",
          a
        };
      };
      var $elm$core$Basics$apR = F2(function(x, f) {
        return f(x);
      });
      var $elm$core$Basics$eq = _Utils_equal;
      var $elm$core$Basics$floor = _Basics_floor;
      var $elm$core$Elm$JsArray$length = _JsArray_length;
      var $elm$core$Basics$gt = _Utils_gt;
      var $elm$core$Basics$max = F2(function(x, y) {
        return _Utils_cmp(x, y) > 0 ? x : y;
      });
      var $elm$core$Basics$mul = _Basics_mul;
      var $elm$core$Array$SubTree = function(a) {
        return {
          $: "SubTree",
          a
        };
      };
      var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
      var $elm$core$Array$compressNodes = F2(function(nodes, acc) {
        compressNodes:
          while (true) {
            var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
            var node = _v0.a;
            var remainingNodes = _v0.b;
            var newAcc = A2($elm$core$List$cons, $elm$core$Array$SubTree(node), acc);
            if (!remainingNodes.b) {
              return $elm$core$List$reverse(newAcc);
            } else {
              var $temp$nodes = remainingNodes, $temp$acc = newAcc;
              nodes = $temp$nodes;
              acc = $temp$acc;
              continue compressNodes;
            }
          }
      });
      var $elm$core$Tuple$first = function(_v0) {
        var x = _v0.a;
        return x;
      };
      var $elm$core$Array$treeFromBuilder = F2(function(nodeList, nodeListSize) {
        treeFromBuilder:
          while (true) {
            var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
            if (newNodeSize === 1) {
              return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
            } else {
              var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil), $temp$nodeListSize = newNodeSize;
              nodeList = $temp$nodeList;
              nodeListSize = $temp$nodeListSize;
              continue treeFromBuilder;
            }
          }
      });
      var $elm$core$Array$builderToArray = F2(function(reverseNodeList, builder) {
        if (!builder.nodeListSize) {
          return A4($elm$core$Array$Array_elm_builtin, $elm$core$Elm$JsArray$length(builder.tail), $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, builder.tail);
        } else {
          var treeLen = builder.nodeListSize * $elm$core$Array$branchFactor;
          var depth = $elm$core$Basics$floor(A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
          var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.nodeList) : builder.nodeList;
          var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
          return A4($elm$core$Array$Array_elm_builtin, $elm$core$Elm$JsArray$length(builder.tail) + treeLen, A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep), tree, builder.tail);
        }
      });
      var $elm$core$Basics$idiv = _Basics_idiv;
      var $elm$core$Basics$lt = _Utils_lt;
      var $elm$core$Array$initializeHelp = F5(function(fn, fromIndex, len, nodeList, tail) {
        initializeHelp:
          while (true) {
            if (fromIndex < 0) {
              return A2($elm$core$Array$builderToArray, false, {
                nodeList,
                nodeListSize: len / $elm$core$Array$branchFactor | 0,
                tail
              });
            } else {
              var leaf = $elm$core$Array$Leaf(A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
              var $temp$fn = fn, $temp$fromIndex = fromIndex - $elm$core$Array$branchFactor, $temp$len = len, $temp$nodeList = A2($elm$core$List$cons, leaf, nodeList), $temp$tail = tail;
              fn = $temp$fn;
              fromIndex = $temp$fromIndex;
              len = $temp$len;
              nodeList = $temp$nodeList;
              tail = $temp$tail;
              continue initializeHelp;
            }
          }
      });
      var $elm$core$Basics$remainderBy = _Basics_remainderBy;
      var $elm$core$Array$initialize = F2(function(len, fn) {
        if (len <= 0) {
          return $elm$core$Array$empty;
        } else {
          var tailLen = len % $elm$core$Array$branchFactor;
          var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
          var initialFromIndex = len - tailLen - $elm$core$Array$branchFactor;
          return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
        }
      });
      var $elm$core$Basics$True = {
        $: "True"
      };
      var $elm$core$Result$isOk = function(result) {
        if (result.$ === "Ok") {
          return true;
        } else {
          return false;
        }
      };
      var $elm$core$Platform$Cmd$batch = _Platform_batch;
      var $elm$core$List$drop = F2(function(n, list) {
        drop:
          while (true) {
            if (n <= 0) {
              return list;
            } else {
              if (!list.b) {
                return list;
              } else {
                var x = list.a;
                var xs = list.b;
                var $temp$n = n - 1, $temp$list = xs;
                n = $temp$n;
                list = $temp$list;
                continue drop;
              }
            }
          }
      });
      var $elm$core$List$head = function(list) {
        if (list.b) {
          var x = list.a;
          var xs = list.b;
          return $elm$core$Maybe$Just(x);
        } else {
          return $elm$core$Maybe$Nothing;
        }
      };
      var $elm_community$list_extra$List$Extra$getAt = F2(function(idx, xs) {
        return idx < 0 ? $elm$core$Maybe$Nothing : $elm$core$List$head(A2($elm$core$List$drop, idx, xs));
      });
      var $elm$core$String$lines = _String_lines;
      var $elm$core$String$cons = _String_cons;
      var $elm$core$String$fromChar = function(_char) {
        return A2($elm$core$String$cons, _char, "");
      };
      var $elm$core$String$length = _String_length;
      var $elm$core$Bitwise$and = _Bitwise_and;
      var $elm$core$Bitwise$shiftRightBy = _Bitwise_shiftRightBy;
      var $elm$core$String$repeatHelp = F3(function(n, chunk, result) {
        return n <= 0 ? result : A3($elm$core$String$repeatHelp, n >> 1, _Utils_ap(chunk, chunk), !(n & 1) ? result : _Utils_ap(result, chunk));
      });
      var $elm$core$String$repeat = F2(function(n, chunk) {
        return A3($elm$core$String$repeatHelp, n, chunk, "");
      });
      var $elm$core$String$padLeft = F3(function(n, _char, string) {
        return _Utils_ap(A2($elm$core$String$repeat, n - $elm$core$String$length(string), $elm$core$String$fromChar(_char)), string);
      });
      var $author$project$Parser$Extra$problemToString = function(problem) {
        switch (problem.$) {
          case "Expecting":
            var s = problem.a;
            return "Expecting " + s;
          case "ExpectingInt":
            return "ExpectingInt";
          case "ExpectingHex":
            return "ExpectingHex";
          case "ExpectingOctal":
            return "ExpectingOctal";
          case "ExpectingBinary":
            return "ExpectingBinary";
          case "ExpectingFloat":
            return "ExpectingFloat";
          case "ExpectingNumber":
            return "ExpectingNumber";
          case "ExpectingVariable":
            return "ExpectingVariable";
          case "ExpectingSymbol":
            var s = problem.a;
            return "ExpectingSymbol `" + (s + "`");
          case "ExpectingKeyword":
            var s = problem.a;
            return "ExpectingKeyword `" + (s + "`");
          case "ExpectingEnd":
            return "ExpectingEnd";
          case "UnexpectedChar":
            return "UnexpectedChar";
          case "Problem":
            var s = problem.a;
            return "Problem `" + (s + "`");
          default:
            return "BadRepeat";
        }
      };
      var $elm$core$Maybe$withDefault = F2(function(_default, maybe) {
        if (maybe.$ === "Just") {
          var value = maybe.a;
          return value;
        } else {
          return _default;
        }
      });
      var $author$project$Parser$Extra$deadEndToString = F2(function(src, deadEnd) {
        var row = deadEnd.row - 1;
        var lineNumberWidth = 4;
        return "(" + ($elm$core$String$fromInt(deadEnd.row) + ("," + ($elm$core$String$fromInt(deadEnd.col) + (") " + ($author$project$Parser$Extra$problemToString(deadEnd.problem) + ("\n\n" + (A3($elm$core$String$padLeft, lineNumberWidth, _Utils_chr(" "), $elm$core$String$fromInt(row + 1)) + ("| " + (A2($elm$core$Maybe$withDefault, "", A2($elm_community$list_extra$List$Extra$getAt, row, $elm$core$String$lines(src))) + ("\n" + (A2($elm$core$String$repeat, lineNumberWidth + 2 + deadEnd.col - 1, " ") + "^")))))))))));
      });
      var $elm$core$List$foldrHelper = F4(function(fn, acc, ctr, ls) {
        if (!ls.b) {
          return acc;
        } else {
          var a = ls.a;
          var r1 = ls.b;
          if (!r1.b) {
            return A2(fn, a, acc);
          } else {
            var b = r1.a;
            var r2 = r1.b;
            if (!r2.b) {
              return A2(fn, a, A2(fn, b, acc));
            } else {
              var c = r2.a;
              var r3 = r2.b;
              if (!r3.b) {
                return A2(fn, a, A2(fn, b, A2(fn, c, acc)));
              } else {
                var d = r3.a;
                var r4 = r3.b;
                var res = ctr > 500 ? A3($elm$core$List$foldl, fn, acc, $elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
                return A2(fn, a, A2(fn, b, A2(fn, c, A2(fn, d, res))));
              }
            }
          }
        }
      });
      var $elm$core$List$foldr = F3(function(fn, acc, ls) {
        return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
      });
      var $elm$core$List$append = F2(function(xs, ys) {
        if (!ys.b) {
          return xs;
        } else {
          return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
        }
      });
      var $elm$core$List$concat = function(lists) {
        return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
      };
      var $elm$core$List$maybeCons = F3(function(f, mx, xs) {
        var _v0 = f(mx);
        if (_v0.$ === "Just") {
          var x = _v0.a;
          return A2($elm$core$List$cons, x, xs);
        } else {
          return xs;
        }
      });
      var $elm$core$List$filterMap = F2(function(f, xs) {
        return A3($elm$core$List$foldr, $elm$core$List$maybeCons(f), _List_Nil, xs);
      });
      var $elm$core$Result$map = F2(function(func, ra) {
        if (ra.$ === "Ok") {
          var a = ra.a;
          return $elm$core$Result$Ok(func(a));
        } else {
          var e = ra.a;
          return $elm$core$Result$Err(e);
        }
      });
      var $author$project$AutoEncoder$Decoder$decoderFromTypeName = function(name) {
        _v0$8:
          while (true) {
            if (name.b) {
              if (name.b.b) {
                if (name.b.b.b) {
                  if (name.a === "Dict" && name.b.a === "String" && !name.b.b.b.b) {
                    var _v1 = name.b;
                    var _v2 = _v1.b;
                    var contntType = _v2.a;
                    return A2($elm$core$Result$map, function(t) {
                      return "(Json.Decode.dict identity " + (t + ")");
                    }, $author$project$AutoEncoder$Decoder$decoderFromTypeName(_List_fromArray([contntType])));
                  } else {
                    break _v0$8;
                  }
                } else {
                  switch (name.a) {
                    case "List":
                      var _v3 = name.b;
                      var contntType = _v3.a;
                      return A2($elm$core$Result$map, function(t) {
                        return "(Json.Decode.list " + (t + ")");
                      }, $author$project$AutoEncoder$Decoder$decoderFromTypeName(_List_fromArray([contntType])));
                    case "Maybe":
                      var _v4 = name.b;
                      var contntType = _v4.a;
                      return A2($elm$core$Result$map, function(t) {
                        return "(Json.Decode.maybe " + (t + ")");
                      }, $author$project$AutoEncoder$Decoder$decoderFromTypeName(_List_fromArray([contntType])));
                    default:
                      break _v0$8;
                  }
                }
              } else {
                switch (name.a) {
                  case "Int":
                    return $elm$core$Result$Ok("Json.Decode.int");
                  case "String":
                    return $elm$core$Result$Ok("Json.Decode.string");
                  case "Float":
                    return $elm$core$Result$Ok("Json.Decode.float");
                  case "Bool":
                    return $elm$core$Result$Ok("Json.Decode.bool");
                  default:
                    var typeName = name.a;
                    return $elm$core$Result$Ok("decode" + typeName);
                }
              }
            } else {
              break _v0$8;
            }
          }
        return $elm$core$Result$Err(_List_fromArray(["Unsupported Data Type: `" + (A2($elm$core$String$join, " ", name) + "`")]));
      };
      var $elm$core$List$map = F2(function(f, xs) {
        return A3($elm$core$List$foldr, F2(function(x, acc) {
          return A2($elm$core$List$cons, f(x), acc);
        }), _List_Nil, xs);
      });
      var $author$project$AutoEncoder$Decoder$indent = function(xs) {
        return A2($elm$core$String$join, "\n", A2($elm$core$List$map, function(x) {
          return "    " + x;
        }, $elm$core$String$lines(xs)));
      };
      var $author$project$AutoEncoder$Decoder$toErrors = $elm$core$List$filterMap(function(r) {
        if (r.$ === "Ok") {
          return $elm$core$Maybe$Nothing;
        } else {
          var err = r.a;
          return $elm$core$Maybe$Just(err);
        }
      });
      var $elm$core$Result$toMaybe = function(result) {
        if (result.$ === "Ok") {
          var v = result.a;
          return $elm$core$Maybe$Just(v);
        } else {
          return $elm$core$Maybe$Nothing;
        }
      };
      var $author$project$AutoEncoder$Decoder$generateDecoderFromTypeAlias = function(alias) {
        var field = function(entry) {
          return A2($elm$core$Result$map, function(t) {
            return '(Json.Decode.field "' + (entry.name + ('" ' + (t + ")")));
          }, $author$project$AutoEncoder$Decoder$decoderFromTypeName(entry.typeName));
        };
        var results = A2($elm$core$List$map, field, alias.fields);
        var errors = $author$project$AutoEncoder$Decoder$toErrors(results);
        var encoderName = "decode" + alias.name;
        if (errors.b) {
          return $elm$core$Result$Err($elm$core$List$concat(errors));
        } else {
          return $elm$core$Result$Ok(A2($elm$core$String$join, "\n", _List_fromArray([encoderName + (" : Json.Decode.Decoder " + alias.name), encoderName + (" = Json.Decode.map" + ($elm$core$String$fromInt($elm$core$List$length(alias.fields)) + (" " + alias.name))), $author$project$AutoEncoder$Decoder$indent(A2($elm$core$String$join, "\n", A2($elm$core$List$filterMap, $elm$core$Result$toMaybe, results))), ""])));
        }
      };
      var $author$project$AutoEncoder$Decoder$generateDecoder = function(mod) {
        var results = A2($elm$core$List$map, $author$project$AutoEncoder$Decoder$generateDecoderFromTypeAlias, mod.members);
        var errors = $author$project$AutoEncoder$Decoder$toErrors(results);
        if (errors.b) {
          return $elm$core$Result$Err($elm$core$List$concat(errors));
        } else {
          return $elm$core$Result$Ok(A2($elm$core$String$join, "\n", _List_fromArray(["-- generated automatically by elm-autoencoder", "module " + (A2($elm$core$String$join, ".", mod.name) + ".Decode exposing (..)"), "", "import Json.Decode", "import " + (A2($elm$core$String$join, ".", mod.name) + " exposing (..)"), "", A2($elm$core$String$join, "\n", A2($elm$core$List$filterMap, $elm$core$Result$toMaybe, results))])));
        }
      };
      var $author$project$AutoEncoder$Encoder$asList = function(list) {
        return function() {
          if (list.b) {
            var x = list.a;
            var xs = list.b;
            return "[ " + (x + ("\n" + A2($elm$core$String$join, "\n", A2($elm$core$List$map, function(y) {
              return ", " + y;
            }, xs))));
          } else {
            return "";
          }
        }() + "\n]";
      };
      var $author$project$AutoEncoder$Encoder$encoderFromTypeName = function(name) {
        _v0$8:
          while (true) {
            if (name.b) {
              if (name.b.b) {
                if (name.b.b.b) {
                  if (name.a === "Dict" && name.b.a === "String" && !name.b.b.b.b) {
                    var _v1 = name.b;
                    var _v2 = _v1.b;
                    var contntType = _v2.a;
                    return A2($elm$core$Result$map, function(t) {
                      return "Json.Encode.dict identity " + t;
                    }, $author$project$AutoEncoder$Encoder$encoderFromTypeName(_List_fromArray([contntType])));
                  } else {
                    break _v0$8;
                  }
                } else {
                  switch (name.a) {
                    case "List":
                      var _v3 = name.b;
                      var contntType = _v3.a;
                      return A2($elm$core$Result$map, function(t) {
                        return "Json.Encode.list " + t;
                      }, $author$project$AutoEncoder$Encoder$encoderFromTypeName(_List_fromArray([contntType])));
                    case "Maybe":
                      var _v4 = name.b;
                      var contntType = _v4.a;
                      return A2($elm$core$Result$map, function(t) {
                        return "(Maybe.withDefault Json.Encode.null << Maybe.map " + (t + ")");
                      }, $author$project$AutoEncoder$Encoder$encoderFromTypeName(_List_fromArray([contntType])));
                    default:
                      break _v0$8;
                  }
                }
              } else {
                switch (name.a) {
                  case "Int":
                    return $elm$core$Result$Ok("Json.Encode.int");
                  case "String":
                    return $elm$core$Result$Ok("Json.Encode.string");
                  case "Float":
                    return $elm$core$Result$Ok("Json.Encode.float");
                  case "Bool":
                    return $elm$core$Result$Ok("Json.Encode.bool");
                  default:
                    var typeName = name.a;
                    return $elm$core$Result$Ok("encode" + typeName);
                }
              }
            } else {
              break _v0$8;
            }
          }
        return $elm$core$Result$Err(_List_fromArray(["Unsupported Data Type: `" + (A2($elm$core$String$join, " ", name) + "`")]));
      };
      var $author$project$AutoEncoder$Encoder$indent = function(xs) {
        return A2($elm$core$String$join, "\n", A2($elm$core$List$map, function(x) {
          return "    " + x;
        }, $elm$core$String$lines(xs)));
      };
      var $author$project$AutoEncoder$Encoder$toErrors = $elm$core$List$filterMap(function(r) {
        if (r.$ === "Ok") {
          return $elm$core$Maybe$Nothing;
        } else {
          var err = r.a;
          return $elm$core$Maybe$Just(err);
        }
      });
      var $author$project$AutoEncoder$Encoder$generateEncoderFromTypeAlias = function(alias) {
        var field = function(entry) {
          return A2($elm$core$Result$map, function(t) {
            return '("' + (entry.name + ('", ' + (t + (" value." + (entry.name + ")")))));
          }, $author$project$AutoEncoder$Encoder$encoderFromTypeName(entry.typeName));
        };
        var results = A2($elm$core$List$map, field, alias.fields);
        var fields = A2($elm$core$List$filterMap, $elm$core$Result$toMaybe, results);
        var errors = $elm$core$List$concat($author$project$AutoEncoder$Encoder$toErrors(results));
        var encoderName = "encode" + alias.name;
        if (errors.b) {
          return $elm$core$Result$Err(errors);
        } else {
          return $elm$core$Result$Ok(A2($elm$core$String$join, "\n", _List_fromArray([encoderName + (" : " + (alias.name + " -> Json.Encode.Value")), encoderName + " value = Json.Encode.object", $author$project$AutoEncoder$Encoder$indent($author$project$AutoEncoder$Encoder$asList(fields)), ""])));
        }
      };
      var $author$project$AutoEncoder$Encoder$generateEncoder = function(mod) {
        var results = A2($elm$core$List$map, $author$project$AutoEncoder$Encoder$generateEncoderFromTypeAlias, mod.members);
        var members = A2($elm$core$List$filterMap, $elm$core$Result$toMaybe, results);
        var errors = $author$project$AutoEncoder$Encoder$toErrors(results);
        if (errors.b) {
          var e = errors.a;
          var es = errors.b;
          return $elm$core$Result$Err(e);
        } else {
          return $elm$core$Result$Ok(A2($elm$core$String$join, "\n", _List_fromArray(["-- generated automatically by elm-autoencoder", "module " + (A2($elm$core$String$join, ".", mod.name) + ".Encode exposing (..)"), "", "import Json.Encode", "import " + (A2($elm$core$String$join, ".", mod.name) + " exposing (..)"), "", A2($elm$core$String$join, "\n", members)])));
        }
      };
      var $elm$core$Platform$Sub$batch = _Platform_batch;
      var $elm$core$Platform$Sub$none = $elm$core$Platform$Sub$batch(_List_Nil);
      var $elm$json$Json$Encode$string = _Json_wrap;
      var $author$project$Port$outputDecoder = _Platform_outgoingPort("outputDecoder", $elm$json$Json$Encode$string);
      var $author$project$Port$outputEncoder = _Platform_outgoingPort("outputEncoder", $elm$json$Json$Encode$string);
      var $author$project$AutoEncoder$Type$Module = F2(function(name, members) {
        return {
          members,
          name
        };
      });
      var $elm$parser$Parser$ExpectingEnd = {
        $: "ExpectingEnd"
      };
      var $elm$parser$Parser$Advanced$Bad = F2(function(a, b) {
        return {
          $: "Bad",
          a,
          b
        };
      });
      var $elm$parser$Parser$Advanced$Good = F3(function(a, b, c) {
        return {
          $: "Good",
          a,
          b,
          c
        };
      });
      var $elm$core$Basics$identity = function(x) {
        return x;
      };
      var $elm$parser$Parser$Advanced$Parser = function(a) {
        return {
          $: "Parser",
          a
        };
      };
      var $elm$parser$Parser$Advanced$AddRight = F2(function(a, b) {
        return {
          $: "AddRight",
          a,
          b
        };
      });
      var $elm$parser$Parser$Advanced$DeadEnd = F4(function(row, col, problem, contextStack) {
        return {
          col,
          contextStack,
          problem,
          row
        };
      });
      var $elm$parser$Parser$Advanced$Empty = {
        $: "Empty"
      };
      var $elm$parser$Parser$Advanced$fromState = F2(function(s, x) {
        return A2($elm$parser$Parser$Advanced$AddRight, $elm$parser$Parser$Advanced$Empty, A4($elm$parser$Parser$Advanced$DeadEnd, s.row, s.col, x, s.context));
      });
      var $elm$parser$Parser$Advanced$end = function(x) {
        return $elm$parser$Parser$Advanced$Parser(function(s) {
          return _Utils_eq($elm$core$String$length(s.src), s.offset) ? A3($elm$parser$Parser$Advanced$Good, false, _Utils_Tuple0, s) : A2($elm$parser$Parser$Advanced$Bad, false, A2($elm$parser$Parser$Advanced$fromState, s, x));
        });
      };
      var $elm$parser$Parser$end = $elm$parser$Parser$Advanced$end($elm$parser$Parser$ExpectingEnd);
      var $elm$core$Basics$always = F2(function(a, _v0) {
        return a;
      });
      var $elm$parser$Parser$Advanced$map2 = F3(function(func, _v0, _v1) {
        var parseA = _v0.a;
        var parseB = _v1.a;
        return $elm$parser$Parser$Advanced$Parser(function(s0) {
          var _v2 = parseA(s0);
          if (_v2.$ === "Bad") {
            var p = _v2.a;
            var x = _v2.b;
            return A2($elm$parser$Parser$Advanced$Bad, p, x);
          } else {
            var p1 = _v2.a;
            var a = _v2.b;
            var s1 = _v2.c;
            var _v3 = parseB(s1);
            if (_v3.$ === "Bad") {
              var p2 = _v3.a;
              var x = _v3.b;
              return A2($elm$parser$Parser$Advanced$Bad, p1 || p2, x);
            } else {
              var p2 = _v3.a;
              var b = _v3.b;
              var s2 = _v3.c;
              return A3($elm$parser$Parser$Advanced$Good, p1 || p2, A2(func, a, b), s2);
            }
          }
        });
      });
      var $elm$parser$Parser$Advanced$ignorer = F2(function(keepParser, ignoreParser) {
        return A3($elm$parser$Parser$Advanced$map2, $elm$core$Basics$always, keepParser, ignoreParser);
      });
      var $elm$parser$Parser$ignorer = $elm$parser$Parser$Advanced$ignorer;
      var $elm$parser$Parser$Advanced$keeper = F2(function(parseFunc, parseArg) {
        return A3($elm$parser$Parser$Advanced$map2, $elm$core$Basics$apL, parseFunc, parseArg);
      });
      var $elm$parser$Parser$keeper = $elm$parser$Parser$Advanced$keeper;
      var $elm$parser$Parser$ExpectingKeyword = function(a) {
        return {
          $: "ExpectingKeyword",
          a
        };
      };
      var $elm$parser$Parser$Advanced$Token = F2(function(a, b) {
        return {
          $: "Token",
          a,
          b
        };
      });
      var $elm$core$String$isEmpty = function(string) {
        return string === "";
      };
      var $elm$parser$Parser$Advanced$isSubChar = _Parser_isSubChar;
      var $elm$parser$Parser$Advanced$isSubString = _Parser_isSubString;
      var $elm$core$Basics$negate = function(n) {
        return -n;
      };
      var $elm$core$Basics$not = _Basics_not;
      var $elm$parser$Parser$Advanced$keyword = function(_v0) {
        var kwd = _v0.a;
        var expecting = _v0.b;
        var progress = !$elm$core$String$isEmpty(kwd);
        return $elm$parser$Parser$Advanced$Parser(function(s) {
          var _v1 = A5($elm$parser$Parser$Advanced$isSubString, kwd, s.offset, s.row, s.col, s.src);
          var newOffset = _v1.a;
          var newRow = _v1.b;
          var newCol = _v1.c;
          return _Utils_eq(newOffset, -1) || 0 <= A3($elm$parser$Parser$Advanced$isSubChar, function(c) {
            return $elm$core$Char$isAlphaNum(c) || _Utils_eq(c, _Utils_chr("_"));
          }, newOffset, s.src) ? A2($elm$parser$Parser$Advanced$Bad, false, A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : A3($elm$parser$Parser$Advanced$Good, progress, _Utils_Tuple0, {
            col: newCol,
            context: s.context,
            indent: s.indent,
            offset: newOffset,
            row: newRow,
            src: s.src
          });
        });
      };
      var $elm$parser$Parser$keyword = function(kwd) {
        return $elm$parser$Parser$Advanced$keyword(A2($elm$parser$Parser$Advanced$Token, kwd, $elm$parser$Parser$ExpectingKeyword(kwd)));
      };
      var $elm$parser$Parser$Done = function(a) {
        return {
          $: "Done",
          a
        };
      };
      var $elm$parser$Parser$Loop = function(a) {
        return {
          $: "Loop",
          a
        };
      };
      var $elm$parser$Parser$Advanced$loopHelp = F4(function(p, state, callback, s0) {
        loopHelp:
          while (true) {
            var _v0 = callback(state);
            var parse = _v0.a;
            var _v1 = parse(s0);
            if (_v1.$ === "Good") {
              var p1 = _v1.a;
              var step = _v1.b;
              var s1 = _v1.c;
              if (step.$ === "Loop") {
                var newState = step.a;
                var $temp$p = p || p1, $temp$state = newState, $temp$callback = callback, $temp$s0 = s1;
                p = $temp$p;
                state = $temp$state;
                callback = $temp$callback;
                s0 = $temp$s0;
                continue loopHelp;
              } else {
                var result = step.a;
                return A3($elm$parser$Parser$Advanced$Good, p || p1, result, s1);
              }
            } else {
              var p1 = _v1.a;
              var x = _v1.b;
              return A2($elm$parser$Parser$Advanced$Bad, p || p1, x);
            }
          }
      });
      var $elm$parser$Parser$Advanced$loop = F2(function(state, callback) {
        return $elm$parser$Parser$Advanced$Parser(function(s) {
          return A4($elm$parser$Parser$Advanced$loopHelp, false, state, callback, s);
        });
      });
      var $elm$parser$Parser$Advanced$map = F2(function(func, _v0) {
        var parse = _v0.a;
        return $elm$parser$Parser$Advanced$Parser(function(s0) {
          var _v1 = parse(s0);
          if (_v1.$ === "Good") {
            var p = _v1.a;
            var a = _v1.b;
            var s1 = _v1.c;
            return A3($elm$parser$Parser$Advanced$Good, p, func(a), s1);
          } else {
            var p = _v1.a;
            var x = _v1.b;
            return A2($elm$parser$Parser$Advanced$Bad, p, x);
          }
        });
      });
      var $elm$parser$Parser$map = $elm$parser$Parser$Advanced$map;
      var $elm$parser$Parser$Advanced$Done = function(a) {
        return {
          $: "Done",
          a
        };
      };
      var $elm$parser$Parser$Advanced$Loop = function(a) {
        return {
          $: "Loop",
          a
        };
      };
      var $elm$parser$Parser$toAdvancedStep = function(step) {
        if (step.$ === "Loop") {
          var s = step.a;
          return $elm$parser$Parser$Advanced$Loop(s);
        } else {
          var a = step.a;
          return $elm$parser$Parser$Advanced$Done(a);
        }
      };
      var $elm$parser$Parser$loop = F2(function(state, callback) {
        return A2($elm$parser$Parser$Advanced$loop, state, function(s) {
          return A2($elm$parser$Parser$map, $elm$parser$Parser$toAdvancedStep, callback(s));
        });
      });
      var $elm$parser$Parser$Advanced$Append = F2(function(a, b) {
        return {
          $: "Append",
          a,
          b
        };
      });
      var $elm$parser$Parser$Advanced$oneOfHelp = F3(function(s0, bag, parsers) {
        oneOfHelp:
          while (true) {
            if (!parsers.b) {
              return A2($elm$parser$Parser$Advanced$Bad, false, bag);
            } else {
              var parse = parsers.a.a;
              var remainingParsers = parsers.b;
              var _v1 = parse(s0);
              if (_v1.$ === "Good") {
                var step = _v1;
                return step;
              } else {
                var step = _v1;
                var p = step.a;
                var x = step.b;
                if (p) {
                  return step;
                } else {
                  var $temp$s0 = s0, $temp$bag = A2($elm$parser$Parser$Advanced$Append, bag, x), $temp$parsers = remainingParsers;
                  s0 = $temp$s0;
                  bag = $temp$bag;
                  parsers = $temp$parsers;
                  continue oneOfHelp;
                }
              }
            }
          }
      });
      var $elm$parser$Parser$Advanced$oneOf = function(parsers) {
        return $elm$parser$Parser$Advanced$Parser(function(s) {
          return A3($elm$parser$Parser$Advanced$oneOfHelp, s, $elm$parser$Parser$Advanced$Empty, parsers);
        });
      };
      var $elm$parser$Parser$oneOf = $elm$parser$Parser$Advanced$oneOf;
      var $elm$parser$Parser$Nestable = {
        $: "Nestable"
      };
      var $elm$parser$Parser$Advanced$getOffset = $elm$parser$Parser$Advanced$Parser(function(s) {
        return A3($elm$parser$Parser$Advanced$Good, false, s.offset, s);
      });
      var $elm$parser$Parser$getOffset = $elm$parser$Parser$Advanced$getOffset;
      var $elm$parser$Parser$Advanced$succeed = function(a) {
        return $elm$parser$Parser$Advanced$Parser(function(s) {
          return A3($elm$parser$Parser$Advanced$Good, false, a, s);
        });
      };
      var $elm$parser$Parser$succeed = $elm$parser$Parser$Advanced$succeed;
      var $author$project$AutoEncoder$Parser$ifProgress = F2(function(p, offset) {
        return A2($elm$parser$Parser$map, function(newOffset) {
          return _Utils_eq(offset, newOffset) ? $elm$parser$Parser$Done(_Utils_Tuple0) : $elm$parser$Parser$Loop(newOffset);
        }, A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed($elm$core$Basics$identity), p), $elm$parser$Parser$getOffset));
      });
      var $elm$parser$Parser$Advanced$chompWhileHelp = F5(function(isGood, offset, row, col, s0) {
        chompWhileHelp:
          while (true) {
            var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, offset, s0.src);
            if (_Utils_eq(newOffset, -1)) {
              return A3($elm$parser$Parser$Advanced$Good, _Utils_cmp(s0.offset, offset) < 0, _Utils_Tuple0, {
                col,
                context: s0.context,
                indent: s0.indent,
                offset,
                row,
                src: s0.src
              });
            } else {
              if (_Utils_eq(newOffset, -2)) {
                var $temp$isGood = isGood, $temp$offset = offset + 1, $temp$row = row + 1, $temp$col = 1, $temp$s0 = s0;
                isGood = $temp$isGood;
                offset = $temp$offset;
                row = $temp$row;
                col = $temp$col;
                s0 = $temp$s0;
                continue chompWhileHelp;
              } else {
                var $temp$isGood = isGood, $temp$offset = newOffset, $temp$row = row, $temp$col = col + 1, $temp$s0 = s0;
                isGood = $temp$isGood;
                offset = $temp$offset;
                row = $temp$row;
                col = $temp$col;
                s0 = $temp$s0;
                continue chompWhileHelp;
              }
            }
          }
      });
      var $elm$parser$Parser$Advanced$chompWhile = function(isGood) {
        return $elm$parser$Parser$Advanced$Parser(function(s) {
          return A5($elm$parser$Parser$Advanced$chompWhileHelp, isGood, s.offset, s.row, s.col, s);
        });
      };
      var $elm$parser$Parser$chompWhile = $elm$parser$Parser$Advanced$chompWhile;
      var $elm$core$Basics$neq = _Utils_notEqual;
      var $elm$parser$Parser$ExpectingSymbol = function(a) {
        return {
          $: "ExpectingSymbol",
          a
        };
      };
      var $elm$parser$Parser$Advanced$token = function(_v0) {
        var str = _v0.a;
        var expecting = _v0.b;
        var progress = !$elm$core$String$isEmpty(str);
        return $elm$parser$Parser$Advanced$Parser(function(s) {
          var _v1 = A5($elm$parser$Parser$Advanced$isSubString, str, s.offset, s.row, s.col, s.src);
          var newOffset = _v1.a;
          var newRow = _v1.b;
          var newCol = _v1.c;
          return _Utils_eq(newOffset, -1) ? A2($elm$parser$Parser$Advanced$Bad, false, A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : A3($elm$parser$Parser$Advanced$Good, progress, _Utils_Tuple0, {
            col: newCol,
            context: s.context,
            indent: s.indent,
            offset: newOffset,
            row: newRow,
            src: s.src
          });
        });
      };
      var $elm$parser$Parser$Advanced$symbol = $elm$parser$Parser$Advanced$token;
      var $elm$parser$Parser$symbol = function(str) {
        return $elm$parser$Parser$Advanced$symbol(A2($elm$parser$Parser$Advanced$Token, str, $elm$parser$Parser$ExpectingSymbol(str)));
      };
      var $author$project$AutoEncoder$Parser$lineCommentWorkAround = function(start) {
        return A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed(_Utils_Tuple0), $elm$parser$Parser$symbol(start)), $elm$parser$Parser$chompWhile(function(c) {
          return !_Utils_eq(c, _Utils_chr("\n"));
        }));
      };
      var $elm$parser$Parser$Advanced$findSubString = _Parser_findSubString;
      var $elm$parser$Parser$Advanced$fromInfo = F4(function(row, col, x, context) {
        return A2($elm$parser$Parser$Advanced$AddRight, $elm$parser$Parser$Advanced$Empty, A4($elm$parser$Parser$Advanced$DeadEnd, row, col, x, context));
      });
      var $elm$parser$Parser$Advanced$chompUntil = function(_v0) {
        var str = _v0.a;
        var expecting = _v0.b;
        return $elm$parser$Parser$Advanced$Parser(function(s) {
          var _v1 = A5($elm$parser$Parser$Advanced$findSubString, str, s.offset, s.row, s.col, s.src);
          var newOffset = _v1.a;
          var newRow = _v1.b;
          var newCol = _v1.c;
          return _Utils_eq(newOffset, -1) ? A2($elm$parser$Parser$Advanced$Bad, false, A4($elm$parser$Parser$Advanced$fromInfo, newRow, newCol, expecting, s.context)) : A3($elm$parser$Parser$Advanced$Good, _Utils_cmp(s.offset, newOffset) < 0, _Utils_Tuple0, {
            col: newCol,
            context: s.context,
            indent: s.indent,
            offset: newOffset,
            row: newRow,
            src: s.src
          });
        });
      };
      var $elm$parser$Parser$Advanced$andThen = F2(function(callback, _v0) {
        var parseA = _v0.a;
        return $elm$parser$Parser$Advanced$Parser(function(s0) {
          var _v1 = parseA(s0);
          if (_v1.$ === "Bad") {
            var p = _v1.a;
            var x = _v1.b;
            return A2($elm$parser$Parser$Advanced$Bad, p, x);
          } else {
            var p1 = _v1.a;
            var a = _v1.b;
            var s1 = _v1.c;
            var _v2 = callback(a);
            var parseB = _v2.a;
            var _v3 = parseB(s1);
            if (_v3.$ === "Bad") {
              var p2 = _v3.a;
              var x = _v3.b;
              return A2($elm$parser$Parser$Advanced$Bad, p1 || p2, x);
            } else {
              var p2 = _v3.a;
              var b = _v3.b;
              var s2 = _v3.c;
              return A3($elm$parser$Parser$Advanced$Good, p1 || p2, b, s2);
            }
          }
        });
      });
      var $elm$parser$Parser$Advanced$chompIf = F2(function(isGood, expecting) {
        return $elm$parser$Parser$Advanced$Parser(function(s) {
          var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, s.offset, s.src);
          return _Utils_eq(newOffset, -1) ? A2($elm$parser$Parser$Advanced$Bad, false, A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : _Utils_eq(newOffset, -2) ? A3($elm$parser$Parser$Advanced$Good, true, _Utils_Tuple0, {
            col: 1,
            context: s.context,
            indent: s.indent,
            offset: s.offset + 1,
            row: s.row + 1,
            src: s.src
          }) : A3($elm$parser$Parser$Advanced$Good, true, _Utils_Tuple0, {
            col: s.col + 1,
            context: s.context,
            indent: s.indent,
            offset: newOffset,
            row: s.row,
            src: s.src
          });
        });
      });
      var $elm$parser$Parser$Advanced$isChar = function(_char) {
        return true;
      };
      var $elm$parser$Parser$Advanced$revAlways = F2(function(_v0, b) {
        return b;
      });
      var $elm$parser$Parser$Advanced$skip = F2(function(iParser, kParser) {
        return A3($elm$parser$Parser$Advanced$map2, $elm$parser$Parser$Advanced$revAlways, iParser, kParser);
      });
      var $elm$parser$Parser$Advanced$nestableHelp = F5(function(isNotRelevant, open, close, expectingClose, nestLevel) {
        return A2($elm$parser$Parser$Advanced$skip, $elm$parser$Parser$Advanced$chompWhile(isNotRelevant), $elm$parser$Parser$Advanced$oneOf(_List_fromArray([nestLevel === 1 ? close : A2($elm$parser$Parser$Advanced$andThen, function(_v0) {
          return A5($elm$parser$Parser$Advanced$nestableHelp, isNotRelevant, open, close, expectingClose, nestLevel - 1);
        }, close), A2($elm$parser$Parser$Advanced$andThen, function(_v1) {
          return A5($elm$parser$Parser$Advanced$nestableHelp, isNotRelevant, open, close, expectingClose, nestLevel + 1);
        }, open), A2($elm$parser$Parser$Advanced$andThen, function(_v2) {
          return A5($elm$parser$Parser$Advanced$nestableHelp, isNotRelevant, open, close, expectingClose, nestLevel);
        }, A2($elm$parser$Parser$Advanced$chompIf, $elm$parser$Parser$Advanced$isChar, expectingClose))])));
      });
      var $elm$parser$Parser$Advanced$problem = function(x) {
        return $elm$parser$Parser$Advanced$Parser(function(s) {
          return A2($elm$parser$Parser$Advanced$Bad, false, A2($elm$parser$Parser$Advanced$fromState, s, x));
        });
      };
      var $elm$parser$Parser$Advanced$nestableComment = F2(function(open, close) {
        var oStr = open.a;
        var oX = open.b;
        var cStr = close.a;
        var cX = close.b;
        var _v0 = $elm$core$String$uncons(oStr);
        if (_v0.$ === "Nothing") {
          return $elm$parser$Parser$Advanced$problem(oX);
        } else {
          var _v1 = _v0.a;
          var openChar = _v1.a;
          var _v2 = $elm$core$String$uncons(cStr);
          if (_v2.$ === "Nothing") {
            return $elm$parser$Parser$Advanced$problem(cX);
          } else {
            var _v3 = _v2.a;
            var closeChar = _v3.a;
            var isNotRelevant = function(_char) {
              return !_Utils_eq(_char, openChar) && !_Utils_eq(_char, closeChar);
            };
            var chompOpen = $elm$parser$Parser$Advanced$token(open);
            return A2($elm$parser$Parser$Advanced$ignorer, chompOpen, A5($elm$parser$Parser$Advanced$nestableHelp, isNotRelevant, chompOpen, $elm$parser$Parser$Advanced$token(close), cX, 1));
          }
        }
      });
      var $elm$parser$Parser$Advanced$multiComment = F3(function(open, close, nestable) {
        if (nestable.$ === "NotNestable") {
          return A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$token(open), $elm$parser$Parser$Advanced$chompUntil(close));
        } else {
          return A2($elm$parser$Parser$Advanced$nestableComment, open, close);
        }
      });
      var $elm$parser$Parser$Advanced$Nestable = {
        $: "Nestable"
      };
      var $elm$parser$Parser$Advanced$NotNestable = {
        $: "NotNestable"
      };
      var $elm$parser$Parser$toAdvancedNestable = function(nestable) {
        if (nestable.$ === "NotNestable") {
          return $elm$parser$Parser$Advanced$NotNestable;
        } else {
          return $elm$parser$Parser$Advanced$Nestable;
        }
      };
      var $elm$parser$Parser$Expecting = function(a) {
        return {
          $: "Expecting",
          a
        };
      };
      var $elm$parser$Parser$toToken = function(str) {
        return A2($elm$parser$Parser$Advanced$Token, str, $elm$parser$Parser$Expecting(str));
      };
      var $elm$parser$Parser$multiComment = F3(function(open, close, nestable) {
        return A3($elm$parser$Parser$Advanced$multiComment, $elm$parser$Parser$toToken(open), $elm$parser$Parser$toToken(close), $elm$parser$Parser$toAdvancedNestable(nestable));
      });
      var $elm$parser$Parser$Advanced$spaces = $elm$parser$Parser$Advanced$chompWhile(function(c) {
        return _Utils_eq(c, _Utils_chr(" ")) || (_Utils_eq(c, _Utils_chr("\n")) || _Utils_eq(c, _Utils_chr("\r")));
      });
      var $elm$parser$Parser$spaces = $elm$parser$Parser$Advanced$spaces;
      var $author$project$AutoEncoder$Parser$skip = A2($elm$parser$Parser$loop, 0, $author$project$AutoEncoder$Parser$ifProgress($elm$parser$Parser$oneOf(_List_fromArray([$author$project$AutoEncoder$Parser$lineCommentWorkAround("--"), A3($elm$parser$Parser$multiComment, "{-", "-}", $elm$parser$Parser$Nestable), $elm$parser$Parser$spaces]))));
      var $author$project$AutoEncoder$Parser$many = function(p) {
        var go = function(revStmts) {
          return $elm$parser$Parser$oneOf(_List_fromArray([A2($elm$parser$Parser$keeper, $elm$parser$Parser$succeed(function(stmt) {
            return $elm$parser$Parser$Loop(A2($elm$core$List$cons, stmt, revStmts));
          }), A2($elm$parser$Parser$ignorer, p, $author$project$AutoEncoder$Parser$skip)), A2($elm$parser$Parser$map, function(_v0) {
            return $elm$parser$Parser$Done($elm$core$List$reverse(revStmts));
          }, $elm$parser$Parser$succeed(_Utils_Tuple0))]));
        };
        return A2($elm$parser$Parser$loop, _List_Nil, go);
      };
      var $author$project$AutoEncoder$Parser$sepBy1 = F2(function(s, p) {
        var w = A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed($elm$core$Basics$identity), s), p);
        return A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$keeper, $elm$parser$Parser$succeed($elm$core$List$cons), p), $author$project$AutoEncoder$Parser$many(w));
      });
      var $elm$core$Set$Set_elm_builtin = function(a) {
        return {
          $: "Set_elm_builtin",
          a
        };
      };
      var $elm$core$Dict$RBEmpty_elm_builtin = {
        $: "RBEmpty_elm_builtin"
      };
      var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
      var $elm$core$Set$empty = $elm$core$Set$Set_elm_builtin($elm$core$Dict$empty);
      var $elm$core$Dict$Black = {
        $: "Black"
      };
      var $elm$core$Dict$RBNode_elm_builtin = F5(function(a, b, c, d, e) {
        return {
          $: "RBNode_elm_builtin",
          a,
          b,
          c,
          d,
          e
        };
      });
      var $elm$core$Dict$Red = {
        $: "Red"
      };
      var $elm$core$Dict$balance = F5(function(color, key, value, left, right) {
        if (right.$ === "RBNode_elm_builtin" && right.a.$ === "Red") {
          var _v1 = right.a;
          var rK = right.b;
          var rV = right.c;
          var rLeft = right.d;
          var rRight = right.e;
          if (left.$ === "RBNode_elm_builtin" && left.a.$ === "Red") {
            var _v3 = left.a;
            var lK = left.b;
            var lV = left.c;
            var lLeft = left.d;
            var lRight = left.e;
            return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, lK, lV, lLeft, lRight), A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rLeft, rRight));
          } else {
            return A5($elm$core$Dict$RBNode_elm_builtin, color, rK, rV, A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, left, rLeft), rRight);
          }
        } else {
          if (left.$ === "RBNode_elm_builtin" && left.a.$ === "Red" && left.d.$ === "RBNode_elm_builtin" && left.d.a.$ === "Red") {
            var _v5 = left.a;
            var lK = left.b;
            var lV = left.c;
            var _v6 = left.d;
            var _v7 = _v6.a;
            var llK = _v6.b;
            var llV = _v6.c;
            var llLeft = _v6.d;
            var llRight = _v6.e;
            var lRight = left.e;
            return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight), A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, key, value, lRight, right));
          } else {
            return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
          }
        }
      });
      var $elm$core$Basics$compare = _Utils_compare;
      var $elm$core$Dict$insertHelp = F3(function(key, value, dict) {
        if (dict.$ === "RBEmpty_elm_builtin") {
          return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
        } else {
          var nColor = dict.a;
          var nKey = dict.b;
          var nValue = dict.c;
          var nLeft = dict.d;
          var nRight = dict.e;
          var _v1 = A2($elm$core$Basics$compare, key, nKey);
          switch (_v1.$) {
            case "LT":
              return A5($elm$core$Dict$balance, nColor, nKey, nValue, A3($elm$core$Dict$insertHelp, key, value, nLeft), nRight);
            case "EQ":
              return A5($elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
            default:
              return A5($elm$core$Dict$balance, nColor, nKey, nValue, nLeft, A3($elm$core$Dict$insertHelp, key, value, nRight));
          }
        }
      });
      var $elm$core$Dict$insert = F3(function(key, value, dict) {
        var _v0 = A3($elm$core$Dict$insertHelp, key, value, dict);
        if (_v0.$ === "RBNode_elm_builtin" && _v0.a.$ === "Red") {
          var _v1 = _v0.a;
          var k = _v0.b;
          var v = _v0.c;
          var l = _v0.d;
          var r = _v0.e;
          return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
        } else {
          var x = _v0;
          return x;
        }
      });
      var $elm$core$Set$insert = F2(function(key, _v0) {
        var dict = _v0.a;
        return $elm$core$Set$Set_elm_builtin(A3($elm$core$Dict$insert, key, _Utils_Tuple0, dict));
      });
      var $elm$core$Set$fromList = function(list) {
        return A3($elm$core$List$foldl, $elm$core$Set$insert, $elm$core$Set$empty, list);
      };
      var $elm$parser$Parser$ExpectingVariable = {
        $: "ExpectingVariable"
      };
      var $elm$core$Dict$get = F2(function(targetKey, dict) {
        get:
          while (true) {
            if (dict.$ === "RBEmpty_elm_builtin") {
              return $elm$core$Maybe$Nothing;
            } else {
              var key = dict.b;
              var value = dict.c;
              var left = dict.d;
              var right = dict.e;
              var _v1 = A2($elm$core$Basics$compare, targetKey, key);
              switch (_v1.$) {
                case "LT":
                  var $temp$targetKey = targetKey, $temp$dict = left;
                  targetKey = $temp$targetKey;
                  dict = $temp$dict;
                  continue get;
                case "EQ":
                  return $elm$core$Maybe$Just(value);
                default:
                  var $temp$targetKey = targetKey, $temp$dict = right;
                  targetKey = $temp$targetKey;
                  dict = $temp$dict;
                  continue get;
              }
            }
          }
      });
      var $elm$core$Dict$member = F2(function(key, dict) {
        var _v0 = A2($elm$core$Dict$get, key, dict);
        if (_v0.$ === "Just") {
          return true;
        } else {
          return false;
        }
      });
      var $elm$core$Set$member = F2(function(key, _v0) {
        var dict = _v0.a;
        return A2($elm$core$Dict$member, key, dict);
      });
      var $elm$core$String$slice = _String_slice;
      var $elm$parser$Parser$Advanced$varHelp = F7(function(isGood, offset, row, col, src, indent, context) {
        varHelp:
          while (true) {
            var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, offset, src);
            if (_Utils_eq(newOffset, -1)) {
              return {
                col,
                context,
                indent,
                offset,
                row,
                src
              };
            } else {
              if (_Utils_eq(newOffset, -2)) {
                var $temp$isGood = isGood, $temp$offset = offset + 1, $temp$row = row + 1, $temp$col = 1, $temp$src = src, $temp$indent = indent, $temp$context = context;
                isGood = $temp$isGood;
                offset = $temp$offset;
                row = $temp$row;
                col = $temp$col;
                src = $temp$src;
                indent = $temp$indent;
                context = $temp$context;
                continue varHelp;
              } else {
                var $temp$isGood = isGood, $temp$offset = newOffset, $temp$row = row, $temp$col = col + 1, $temp$src = src, $temp$indent = indent, $temp$context = context;
                isGood = $temp$isGood;
                offset = $temp$offset;
                row = $temp$row;
                col = $temp$col;
                src = $temp$src;
                indent = $temp$indent;
                context = $temp$context;
                continue varHelp;
              }
            }
          }
      });
      var $elm$parser$Parser$Advanced$variable = function(i) {
        return $elm$parser$Parser$Advanced$Parser(function(s) {
          var firstOffset = A3($elm$parser$Parser$Advanced$isSubChar, i.start, s.offset, s.src);
          if (_Utils_eq(firstOffset, -1)) {
            return A2($elm$parser$Parser$Advanced$Bad, false, A2($elm$parser$Parser$Advanced$fromState, s, i.expecting));
          } else {
            var s1 = _Utils_eq(firstOffset, -2) ? A7($elm$parser$Parser$Advanced$varHelp, i.inner, s.offset + 1, s.row + 1, 1, s.src, s.indent, s.context) : A7($elm$parser$Parser$Advanced$varHelp, i.inner, firstOffset, s.row, s.col + 1, s.src, s.indent, s.context);
            var name = A3($elm$core$String$slice, s.offset, s1.offset, s.src);
            return A2($elm$core$Set$member, name, i.reserved) ? A2($elm$parser$Parser$Advanced$Bad, false, A2($elm$parser$Parser$Advanced$fromState, s, i.expecting)) : A3($elm$parser$Parser$Advanced$Good, true, name, s1);
          }
        });
      };
      var $elm$parser$Parser$variable = function(i) {
        return $elm$parser$Parser$Advanced$variable({
          expecting: $elm$parser$Parser$ExpectingVariable,
          inner: i.inner,
          reserved: i.reserved,
          start: i.start
        });
      };
      var $author$project$AutoEncoder$Parser$typeNameSegment = $elm$parser$Parser$variable({
        inner: function(c) {
          return $elm$core$Char$isAlphaNum(c) || _Utils_eq(c, _Utils_chr("_"));
        },
        reserved: $elm$core$Set$fromList(_List_fromArray(["let", "in", "case", "of"])),
        start: $elm$core$Char$isUpper
      });
      var $author$project$AutoEncoder$Parser$moduleName = A2($author$project$AutoEncoder$Parser$sepBy1, $elm$parser$Parser$symbol("."), $author$project$AutoEncoder$Parser$typeNameSegment);
      var $author$project$AutoEncoder$Parser$importDIrective = A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed($elm$core$Basics$identity), $elm$parser$Parser$keyword("import")), $author$project$AutoEncoder$Parser$skip), A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, $author$project$AutoEncoder$Parser$moduleName, $author$project$AutoEncoder$Parser$skip), $elm$parser$Parser$keyword("exposing")), $author$project$AutoEncoder$Parser$skip), $elm$parser$Parser$symbol("(")), $author$project$AutoEncoder$Parser$skip), $elm$parser$Parser$symbol("..")), $author$project$AutoEncoder$Parser$skip), $elm$parser$Parser$symbol(")")));
      var $elm$parser$Parser$Forbidden = {
        $: "Forbidden"
      };
      var $author$project$AutoEncoder$Type$TypeAlias = F2(function(name, fields) {
        return {
          fields,
          name
        };
      });
      var $author$project$AutoEncoder$Type$NameAndType = F2(function(name, typeName) {
        return {
          name,
          typeName
        };
      });
      var $author$project$AutoEncoder$Parser$typeName = function() {
        var go = function(revStmts) {
          return $elm$parser$Parser$oneOf(_List_fromArray([A2($elm$parser$Parser$keeper, $elm$parser$Parser$succeed(function(stmt) {
            return $elm$parser$Parser$Loop(A2($elm$core$List$cons, stmt, revStmts));
          }), A2($elm$parser$Parser$ignorer, $author$project$AutoEncoder$Parser$typeNameSegment, $author$project$AutoEncoder$Parser$skip)), A2($elm$parser$Parser$map, function(_v0) {
            return $elm$parser$Parser$Done($elm$core$List$reverse(revStmts));
          }, $elm$parser$Parser$succeed(_Utils_Tuple0))]));
        };
        return A2($elm$parser$Parser$loop, _List_Nil, go);
      }();
      var $author$project$AutoEncoder$Parser$typeVar = $elm$parser$Parser$variable({
        inner: function(c) {
          return $elm$core$Char$isAlphaNum(c) || _Utils_eq(c, _Utils_chr("_"));
        },
        reserved: $elm$core$Set$fromList(_List_fromArray(["let", "in", "case", "of"])),
        start: $elm$core$Char$isLower
      });
      var $author$project$AutoEncoder$Parser$nameAndType = A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$keeper, $elm$parser$Parser$succeed($author$project$AutoEncoder$Type$NameAndType), A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, $author$project$AutoEncoder$Parser$typeVar, $author$project$AutoEncoder$Parser$skip), $elm$parser$Parser$symbol(":")), $author$project$AutoEncoder$Parser$skip)), A2($elm$parser$Parser$ignorer, $author$project$AutoEncoder$Parser$typeName, $author$project$AutoEncoder$Parser$skip));
      var $elm$parser$Parser$Advanced$sequenceEndForbidden = F5(function(ender, ws, parseItem, sep, revItems) {
        var chompRest = function(item) {
          return A5($elm$parser$Parser$Advanced$sequenceEndForbidden, ender, ws, parseItem, sep, A2($elm$core$List$cons, item, revItems));
        };
        return A2($elm$parser$Parser$Advanced$skip, ws, $elm$parser$Parser$Advanced$oneOf(_List_fromArray([A2($elm$parser$Parser$Advanced$skip, sep, A2($elm$parser$Parser$Advanced$skip, ws, A2($elm$parser$Parser$Advanced$map, function(item) {
          return $elm$parser$Parser$Advanced$Loop(A2($elm$core$List$cons, item, revItems));
        }, parseItem))), A2($elm$parser$Parser$Advanced$map, function(_v0) {
          return $elm$parser$Parser$Advanced$Done($elm$core$List$reverse(revItems));
        }, ender)])));
      });
      var $elm$parser$Parser$Advanced$sequenceEndMandatory = F4(function(ws, parseItem, sep, revItems) {
        return $elm$parser$Parser$Advanced$oneOf(_List_fromArray([A2($elm$parser$Parser$Advanced$map, function(item) {
          return $elm$parser$Parser$Advanced$Loop(A2($elm$core$List$cons, item, revItems));
        }, A2($elm$parser$Parser$Advanced$ignorer, parseItem, A2($elm$parser$Parser$Advanced$ignorer, ws, A2($elm$parser$Parser$Advanced$ignorer, sep, ws)))), A2($elm$parser$Parser$Advanced$map, function(_v0) {
          return $elm$parser$Parser$Advanced$Done($elm$core$List$reverse(revItems));
        }, $elm$parser$Parser$Advanced$succeed(_Utils_Tuple0))]));
      });
      var $elm$parser$Parser$Advanced$sequenceEndOptional = F5(function(ender, ws, parseItem, sep, revItems) {
        var parseEnd = A2($elm$parser$Parser$Advanced$map, function(_v0) {
          return $elm$parser$Parser$Advanced$Done($elm$core$List$reverse(revItems));
        }, ender);
        return A2($elm$parser$Parser$Advanced$skip, ws, $elm$parser$Parser$Advanced$oneOf(_List_fromArray([A2($elm$parser$Parser$Advanced$skip, sep, A2($elm$parser$Parser$Advanced$skip, ws, $elm$parser$Parser$Advanced$oneOf(_List_fromArray([A2($elm$parser$Parser$Advanced$map, function(item) {
          return $elm$parser$Parser$Advanced$Loop(A2($elm$core$List$cons, item, revItems));
        }, parseItem), parseEnd])))), parseEnd])));
      });
      var $elm$parser$Parser$Advanced$sequenceEnd = F5(function(ender, ws, parseItem, sep, trailing) {
        var chompRest = function(item) {
          switch (trailing.$) {
            case "Forbidden":
              return A2($elm$parser$Parser$Advanced$loop, _List_fromArray([item]), A4($elm$parser$Parser$Advanced$sequenceEndForbidden, ender, ws, parseItem, sep));
            case "Optional":
              return A2($elm$parser$Parser$Advanced$loop, _List_fromArray([item]), A4($elm$parser$Parser$Advanced$sequenceEndOptional, ender, ws, parseItem, sep));
            default:
              return A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$skip, ws, A2($elm$parser$Parser$Advanced$skip, sep, A2($elm$parser$Parser$Advanced$skip, ws, A2($elm$parser$Parser$Advanced$loop, _List_fromArray([item]), A3($elm$parser$Parser$Advanced$sequenceEndMandatory, ws, parseItem, sep))))), ender);
          }
        };
        return $elm$parser$Parser$Advanced$oneOf(_List_fromArray([A2($elm$parser$Parser$Advanced$andThen, chompRest, parseItem), A2($elm$parser$Parser$Advanced$map, function(_v0) {
          return _List_Nil;
        }, ender)]));
      });
      var $elm$parser$Parser$Advanced$sequence = function(i) {
        return A2($elm$parser$Parser$Advanced$skip, $elm$parser$Parser$Advanced$token(i.start), A2($elm$parser$Parser$Advanced$skip, i.spaces, A5($elm$parser$Parser$Advanced$sequenceEnd, $elm$parser$Parser$Advanced$token(i.end), i.spaces, i.item, $elm$parser$Parser$Advanced$token(i.separator), i.trailing)));
      };
      var $elm$parser$Parser$Advanced$Forbidden = {
        $: "Forbidden"
      };
      var $elm$parser$Parser$Advanced$Mandatory = {
        $: "Mandatory"
      };
      var $elm$parser$Parser$Advanced$Optional = {
        $: "Optional"
      };
      var $elm$parser$Parser$toAdvancedTrailing = function(trailing) {
        switch (trailing.$) {
          case "Forbidden":
            return $elm$parser$Parser$Advanced$Forbidden;
          case "Optional":
            return $elm$parser$Parser$Advanced$Optional;
          default:
            return $elm$parser$Parser$Advanced$Mandatory;
        }
      };
      var $elm$parser$Parser$sequence = function(i) {
        return $elm$parser$Parser$Advanced$sequence({
          end: $elm$parser$Parser$toToken(i.end),
          item: i.item,
          separator: $elm$parser$Parser$toToken(i.separator),
          spaces: i.spaces,
          start: $elm$parser$Parser$toToken(i.start),
          trailing: $elm$parser$Parser$toAdvancedTrailing(i.trailing)
        });
      };
      var $author$project$AutoEncoder$Parser$typeAlias = A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed($author$project$AutoEncoder$Type$TypeAlias), $author$project$AutoEncoder$Parser$skip), $elm$parser$Parser$keyword("type")), $author$project$AutoEncoder$Parser$skip), $elm$parser$Parser$keyword("alias")), $author$project$AutoEncoder$Parser$skip), A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, $author$project$AutoEncoder$Parser$typeNameSegment, $author$project$AutoEncoder$Parser$skip), $elm$parser$Parser$symbol("=")), $author$project$AutoEncoder$Parser$skip)), A2($elm$parser$Parser$ignorer, $elm$parser$Parser$sequence({
        end: "}",
        item: $author$project$AutoEncoder$Parser$nameAndType,
        separator: ",",
        spaces: $author$project$AutoEncoder$Parser$skip,
        start: "{",
        trailing: $elm$parser$Parser$Forbidden
      }), $author$project$AutoEncoder$Parser$skip));
      var $author$project$AutoEncoder$Parser$typeAliases = function() {
        var go = function(revStmts) {
          return $elm$parser$Parser$oneOf(_List_fromArray([A2($elm$parser$Parser$keeper, $elm$parser$Parser$succeed(function(stmt) {
            return $elm$parser$Parser$Loop(A2($elm$core$List$cons, stmt, revStmts));
          }), $author$project$AutoEncoder$Parser$typeAlias), A2($elm$parser$Parser$map, function(_v0) {
            return $elm$parser$Parser$Done($elm$core$List$reverse(revStmts));
          }, $elm$parser$Parser$succeed(_Utils_Tuple0))]));
        };
        return A2($elm$parser$Parser$loop, _List_Nil, go);
      }();
      var $author$project$AutoEncoder$Parser$parser = A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed($author$project$AutoEncoder$Type$Module), $author$project$AutoEncoder$Parser$skip), $author$project$AutoEncoder$Parser$skip), $elm$parser$Parser$symbol("module")), $author$project$AutoEncoder$Parser$skip), A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, $author$project$AutoEncoder$Parser$moduleName, $author$project$AutoEncoder$Parser$skip), $elm$parser$Parser$symbol("exposing")), $author$project$AutoEncoder$Parser$skip), $elm$parser$Parser$symbol("(")), $author$project$AutoEncoder$Parser$skip), $elm$parser$Parser$symbol("..")), $author$project$AutoEncoder$Parser$skip), $elm$parser$Parser$symbol(")")), $author$project$AutoEncoder$Parser$skip), $author$project$AutoEncoder$Parser$many($author$project$AutoEncoder$Parser$importDIrective)), $author$project$AutoEncoder$Parser$skip)), A2($elm$parser$Parser$ignorer, $author$project$AutoEncoder$Parser$typeAliases, $elm$parser$Parser$end));
      var $elm$parser$Parser$DeadEnd = F3(function(row, col, problem) {
        return {
          col,
          problem,
          row
        };
      });
      var $elm$parser$Parser$problemToDeadEnd = function(p) {
        return A3($elm$parser$Parser$DeadEnd, p.row, p.col, p.problem);
      };
      var $elm$parser$Parser$Advanced$bagToList = F2(function(bag, list) {
        bagToList:
          while (true) {
            switch (bag.$) {
              case "Empty":
                return list;
              case "AddRight":
                var bag1 = bag.a;
                var x = bag.b;
                var $temp$bag = bag1, $temp$list = A2($elm$core$List$cons, x, list);
                bag = $temp$bag;
                list = $temp$list;
                continue bagToList;
              default:
                var bag1 = bag.a;
                var bag2 = bag.b;
                var $temp$bag = bag1, $temp$list = A2($elm$parser$Parser$Advanced$bagToList, bag2, list);
                bag = $temp$bag;
                list = $temp$list;
                continue bagToList;
            }
          }
      });
      var $elm$parser$Parser$Advanced$run = F2(function(_v0, src) {
        var parse = _v0.a;
        var _v1 = parse({
          col: 1,
          context: _List_Nil,
          indent: 1,
          offset: 0,
          row: 1,
          src
        });
        if (_v1.$ === "Good") {
          var value = _v1.b;
          return $elm$core$Result$Ok(value);
        } else {
          var bag = _v1.b;
          return $elm$core$Result$Err(A2($elm$parser$Parser$Advanced$bagToList, bag, _List_Nil));
        }
      });
      var $elm$parser$Parser$run = F2(function(parser, source) {
        var _v0 = A2($elm$parser$Parser$Advanced$run, parser, source);
        if (_v0.$ === "Ok") {
          var a = _v0.a;
          return $elm$core$Result$Ok(a);
        } else {
          var problems = _v0.a;
          return $elm$core$Result$Err(A2($elm$core$List$map, $elm$parser$Parser$problemToDeadEnd, problems));
        }
      });
      var $author$project$AutoEncoder$run = function(source) {
        return A2($elm$parser$Parser$run, $author$project$AutoEncoder$Parser$parser, source);
      };
      var $elm$json$Json$Decode$string = _Json_decodeString;
      var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
      var $author$project$Main$update = F2(function(msg, model) {
        var s = msg.a;
        return _Utils_Tuple2(_Utils_update(model, {
          source: s
        }), $elm$core$Platform$Cmd$none);
      });
      var $elm$core$Platform$worker = _Platform_worker;
      var $author$project$Main$main = $elm$core$Platform$worker({
        init: function(source) {
          return _Utils_Tuple2({
            source
          }, $elm$core$Platform$Cmd$batch(_List_fromArray([$author$project$Port$outputEncoder(function() {
            var _v0 = $author$project$AutoEncoder$run(source);
            if (_v0.$ === "Err") {
              var err = _v0.a;
              return A2($elm$core$String$join, "\n", A2($elm$core$List$map, $author$project$Parser$Extra$deadEndToString(source), err));
            } else {
              var result = _v0.a;
              var _v1 = $author$project$AutoEncoder$Encoder$generateEncoder(result);
              if (_v1.$ === "Err") {
                var err = _v1.a;
                return A2($elm$core$String$join, "\n", A2($elm$core$List$map, function(e) {
                  return "[Error] " + e;
                }, err));
              } else {
                var generated = _v1.a;
                return generated;
              }
            }
          }()), $author$project$Port$outputDecoder(function() {
            var _v2 = $author$project$AutoEncoder$run(source);
            if (_v2.$ === "Err") {
              var err = _v2.a;
              return A2($elm$core$String$join, "\n", A2($elm$core$List$map, $author$project$Parser$Extra$deadEndToString(source), err));
            } else {
              var result = _v2.a;
              var _v3 = $author$project$AutoEncoder$Decoder$generateDecoder(result);
              if (_v3.$ === "Err") {
                var err = _v3.a;
                return A2($elm$core$String$join, "\n", A2($elm$core$List$map, function(e) {
                  return "[Error] " + e;
                }, err));
              } else {
                var generated = _v3.a;
                return generated;
              }
            }
          }())])));
        },
        subscriptions: function(model) {
          return $elm$core$Platform$Sub$none;
        },
        update: $author$project$Main$update
      });
      _Platform_export({
        Main: {
          init: $author$project$Main$main($elm$json$Json$Decode$string)(0)
        }
      });
    })(exports);
  },

  38(exports) {
    // node_modules\universalify\index.js
    "use strict";
    exports.fromCallback = function(fn) {
      return Object.defineProperty(function(...args) {
        if (typeof args[args.length - 1] === "function")
          fn.apply(this, args);
        else {
          return new Promise((resolve, reject) => {
            fn.apply(this, args.concat([(err, res) => err ? reject(err) : resolve(res)]));
          });
        }
      }, "name", {
        value: fn.name
      });
    };
    exports.fromPromise = function(fn) {
      return Object.defineProperty(function(...args) {
        const cb = args[args.length - 1];
        if (typeof cb !== "function")
          return fn.apply(this, args);
        else
          fn.apply(this, args.slice(0, -1)).then((r) => cb(null, r), cb);
      }, "name", {
        value: fn.name
      });
    };
  },

  35(exports, module) {
    // node_modules\graceful-fs\polyfills.js
    var constants = require("constants");
    var origCwd = process.cwd;
    var cwd = null;
    var platform = process.env.GRACEFUL_FS_PLATFORM || process.platform;
    process.cwd = function() {
      if (!cwd)
        cwd = origCwd.call(process);
      return cwd;
    };
    try {
      process.cwd();
    } catch (er) {
    }
    var chdir = process.chdir;
    process.chdir = function(d) {
      cwd = null;
      chdir.call(process, d);
    };
    module.exports = patch;
    function patch(fs) {
      if (constants.hasOwnProperty("O_SYMLINK") && process.version.match(/^v0\.6\.[0-2]|^v0\.5\./)) {
        patchLchmod(fs);
      }
      if (!fs.lutimes) {
        patchLutimes(fs);
      }
      fs.chown = chownFix(fs.chown);
      fs.fchown = chownFix(fs.fchown);
      fs.lchown = chownFix(fs.lchown);
      fs.chmod = chmodFix(fs.chmod);
      fs.fchmod = chmodFix(fs.fchmod);
      fs.lchmod = chmodFix(fs.lchmod);
      fs.chownSync = chownFixSync(fs.chownSync);
      fs.fchownSync = chownFixSync(fs.fchownSync);
      fs.lchownSync = chownFixSync(fs.lchownSync);
      fs.chmodSync = chmodFixSync(fs.chmodSync);
      fs.fchmodSync = chmodFixSync(fs.fchmodSync);
      fs.lchmodSync = chmodFixSync(fs.lchmodSync);
      fs.stat = statFix(fs.stat);
      fs.fstat = statFix(fs.fstat);
      fs.lstat = statFix(fs.lstat);
      fs.statSync = statFixSync(fs.statSync);
      fs.fstatSync = statFixSync(fs.fstatSync);
      fs.lstatSync = statFixSync(fs.lstatSync);
      if (!fs.lchmod) {
        fs.lchmod = function(path, mode, cb) {
          if (cb)
            process.nextTick(cb);
        };
        fs.lchmodSync = function() {
        };
      }
      if (!fs.lchown) {
        fs.lchown = function(path, uid, gid, cb) {
          if (cb)
            process.nextTick(cb);
        };
        fs.lchownSync = function() {
        };
      }
      if (platform === "win32") {
        fs.rename = function(fs$rename) {
          return function(from, to, cb) {
            var start = Date.now();
            var backoff = 0;
            fs$rename(from, to, function CB(er) {
              if (er && (er.code === "EACCES" || er.code === "EPERM") && Date.now() - start < 60000) {
                setTimeout(function() {
                  fs.stat(to, function(stater, st) {
                    if (stater && stater.code === "ENOENT")
                      fs$rename(from, to, CB);
                    else
                      cb(er);
                  });
                }, backoff);
                if (backoff < 100)
                  backoff += 10;
                return;
              }
              if (cb)
                cb(er);
            });
          };
        }(fs.rename);
      }
      fs.read = function(fs$read) {
        function read(fd, buffer, offset, length, position, callback_) {
          var callback;
          if (callback_ && typeof callback_ === "function") {
            var eagCounter = 0;
            callback = function(er, _, __) {
              if (er && er.code === "EAGAIN" && eagCounter < 10) {
                eagCounter++;
                return fs$read.call(fs, fd, buffer, offset, length, position, callback);
              }
              callback_.apply(this, arguments);
            };
          }
          return fs$read.call(fs, fd, buffer, offset, length, position, callback);
        }
        read.__proto__ = fs$read;
        return read;
      }(fs.read);
      fs.readSync = function(fs$readSync) {
        return function(fd, buffer, offset, length, position) {
          var eagCounter = 0;
          while (true) {
            try {
              return fs$readSync.call(fs, fd, buffer, offset, length, position);
            } catch (er) {
              if (er.code === "EAGAIN" && eagCounter < 10) {
                eagCounter++;
                continue;
              }
              throw er;
            }
          }
        };
      }(fs.readSync);
      function patchLchmod(fs2) {
        fs2.lchmod = function(path, mode, callback) {
          fs2.open(path, constants.O_WRONLY | constants.O_SYMLINK, mode, function(err, fd) {
            if (err) {
              if (callback)
                callback(err);
              return;
            }
            fs2.fchmod(fd, mode, function(err2) {
              fs2.close(fd, function(err22) {
                if (callback)
                  callback(err2 || err22);
              });
            });
          });
        };
        fs2.lchmodSync = function(path, mode) {
          var fd = fs2.openSync(path, constants.O_WRONLY | constants.O_SYMLINK, mode);
          var threw = true;
          var ret;
          try {
            ret = fs2.fchmodSync(fd, mode);
            threw = false;
          } finally {
            if (threw) {
              try {
                fs2.closeSync(fd);
              } catch (er) {
              }
            } else {
              fs2.closeSync(fd);
            }
          }
          return ret;
        };
      }
      function patchLutimes(fs2) {
        if (constants.hasOwnProperty("O_SYMLINK")) {
          fs2.lutimes = function(path, at, mt, cb) {
            fs2.open(path, constants.O_SYMLINK, function(er, fd) {
              if (er) {
                if (cb)
                  cb(er);
                return;
              }
              fs2.futimes(fd, at, mt, function(er2) {
                fs2.close(fd, function(er22) {
                  if (cb)
                    cb(er2 || er22);
                });
              });
            });
          };
          fs2.lutimesSync = function(path, at, mt) {
            var fd = fs2.openSync(path, constants.O_SYMLINK);
            var ret;
            var threw = true;
            try {
              ret = fs2.futimesSync(fd, at, mt);
              threw = false;
            } finally {
              if (threw) {
                try {
                  fs2.closeSync(fd);
                } catch (er) {
                }
              } else {
                fs2.closeSync(fd);
              }
            }
            return ret;
          };
        } else {
          fs2.lutimes = function(_a, _b, _c, cb) {
            if (cb)
              process.nextTick(cb);
          };
          fs2.lutimesSync = function() {
          };
        }
      }
      function chmodFix(orig) {
        if (!orig)
          return orig;
        return function(target, mode, cb) {
          return orig.call(fs, target, mode, function(er) {
            if (chownErOk(er))
              er = null;
            if (cb)
              cb.apply(this, arguments);
          });
        };
      }
      function chmodFixSync(orig) {
        if (!orig)
          return orig;
        return function(target, mode) {
          try {
            return orig.call(fs, target, mode);
          } catch (er) {
            if (!chownErOk(er))
              throw er;
          }
        };
      }
      function chownFix(orig) {
        if (!orig)
          return orig;
        return function(target, uid, gid, cb) {
          return orig.call(fs, target, uid, gid, function(er) {
            if (chownErOk(er))
              er = null;
            if (cb)
              cb.apply(this, arguments);
          });
        };
      }
      function chownFixSync(orig) {
        if (!orig)
          return orig;
        return function(target, uid, gid) {
          try {
            return orig.call(fs, target, uid, gid);
          } catch (er) {
            if (!chownErOk(er))
              throw er;
          }
        };
      }
      function statFix(orig) {
        if (!orig)
          return orig;
        return function(target, options, cb) {
          if (typeof options === "function") {
            cb = options;
            options = null;
          }
          function callback(er, stats) {
            if (stats) {
              if (stats.uid < 0)
                stats.uid += 4294967296;
              if (stats.gid < 0)
                stats.gid += 4294967296;
            }
            if (cb)
              cb.apply(this, arguments);
          }
          return options ? orig.call(fs, target, options, callback) : orig.call(fs, target, callback);
        };
      }
      function statFixSync(orig) {
        if (!orig)
          return orig;
        return function(target, options) {
          var stats = options ? orig.call(fs, target, options) : orig.call(fs, target);
          if (stats.uid < 0)
            stats.uid += 4294967296;
          if (stats.gid < 0)
            stats.gid += 4294967296;
          return stats;
        };
      }
      function chownErOk(er) {
        if (!er)
          return true;
        if (er.code === "ENOSYS")
          return true;
        var nonroot = !process.getuid || process.getuid() !== 0;
        if (nonroot) {
          if (er.code === "EINVAL" || er.code === "EPERM")
            return true;
        }
        return false;
      }
    }
  },

  34(exports, module) {
    // node_modules\graceful-fs\legacy-streams.js
    var Stream = require("stream").Stream;
    module.exports = legacy;
    function legacy(fs) {
      return {
        ReadStream,
        WriteStream
      };
      function ReadStream(path, options) {
        if (!(this instanceof ReadStream))
          return new ReadStream(path, options);
        Stream.call(this);
        var self = this;
        this.path = path;
        this.fd = null;
        this.readable = true;
        this.paused = false;
        this.flags = "r";
        this.mode = 438;
        this.bufferSize = 64 * 1024;
        options = options || {};
        var keys = Object.keys(options);
        for (var index = 0, length = keys.length; index < length; index++) {
          var key = keys[index];
          this[key] = options[key];
        }
        if (this.encoding)
          this.setEncoding(this.encoding);
        if (this.start !== void 0) {
          if ("number" !== typeof this.start) {
            throw TypeError("start must be a Number");
          }
          if (this.end === void 0) {
            this.end = Infinity;
          } else if ("number" !== typeof this.end) {
            throw TypeError("end must be a Number");
          }
          if (this.start > this.end) {
            throw new Error("start must be <= end");
          }
          this.pos = this.start;
        }
        if (this.fd !== null) {
          process.nextTick(function() {
            self._read();
          });
          return;
        }
        fs.open(this.path, this.flags, this.mode, function(err, fd) {
          if (err) {
            self.emit("error", err);
            self.readable = false;
            return;
          }
          self.fd = fd;
          self.emit("open", fd);
          self._read();
        });
      }
      function WriteStream(path, options) {
        if (!(this instanceof WriteStream))
          return new WriteStream(path, options);
        Stream.call(this);
        this.path = path;
        this.fd = null;
        this.writable = true;
        this.flags = "w";
        this.encoding = "binary";
        this.mode = 438;
        this.bytesWritten = 0;
        options = options || {};
        var keys = Object.keys(options);
        for (var index = 0, length = keys.length; index < length; index++) {
          var key = keys[index];
          this[key] = options[key];
        }
        if (this.start !== void 0) {
          if ("number" !== typeof this.start) {
            throw TypeError("start must be a Number");
          }
          if (this.start < 0) {
            throw new Error("start must be >= zero");
          }
          this.pos = this.start;
        }
        this.busy = false;
        this._queue = [];
        if (this.fd === null) {
          this._open = fs.open;
          this._queue.push([this._open, this.path, this.flags, this.mode, void 0]);
          this.flush();
        }
      }
    }
  },

  32(exports, module) {
    // node_modules\graceful-fs\clone.js
    "use strict";
    module.exports = clone;
    function clone(obj) {
      if (obj === null || typeof obj !== "object")
        return obj;
      if (obj instanceof Object)
        var copy = {
          __proto__: obj.__proto__
        };
      else
        var copy = Object.create(null);
      Object.getOwnPropertyNames(obj).forEach(function(key) {
        Object.defineProperty(copy, key, Object.getOwnPropertyDescriptor(obj, key));
      });
      return copy;
    }
  },

  33(exports, module) {
    // node_modules\graceful-fs\graceful-fs.js
    var fs = require("fs");
    var polyfills = __require(35 /* ./polyfills.js */);
    var legacy = __require(34 /* ./legacy-streams.js */);
    var clone = __require(32 /* ./clone.js */);
    var util = require("util");
    var gracefulQueue;
    var previousSymbol;
    if (typeof Symbol === "function" && typeof Symbol.for === "function") {
      gracefulQueue = Symbol.for("graceful-fs.queue");
      previousSymbol = Symbol.for("graceful-fs.previous");
    } else {
      gracefulQueue = "___graceful-fs.queue";
      previousSymbol = "___graceful-fs.previous";
    }
    function noop() {
    }
    function publishQueue(context, queue2) {
      Object.defineProperty(context, gracefulQueue, {
        get: function() {
          return queue2;
        }
      });
    }
    var debug = noop;
    if (util.debuglog)
      debug = util.debuglog("gfs4");
    else if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || ""))
      debug = function() {
        var m = util.format.apply(util, arguments);
        m = "GFS4: " + m.split(/\n/).join("\nGFS4: ");
        console.error(m);
      };
    if (!fs[gracefulQueue]) {
      var queue = global[gracefulQueue] || [];
      publishQueue(fs, queue);
      fs.close = function(fs$close) {
        function close(fd, cb) {
          return fs$close.call(fs, fd, function(err) {
            if (!err) {
              retry();
            }
            if (typeof cb === "function")
              cb.apply(this, arguments);
          });
        }
        Object.defineProperty(close, previousSymbol, {
          value: fs$close
        });
        return close;
      }(fs.close);
      fs.closeSync = function(fs$closeSync) {
        function closeSync(fd) {
          fs$closeSync.apply(fs, arguments);
          retry();
        }
        Object.defineProperty(closeSync, previousSymbol, {
          value: fs$closeSync
        });
        return closeSync;
      }(fs.closeSync);
      if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || "")) {
        process.on("exit", function() {
          debug(fs[gracefulQueue]);
          require("assert").equal(fs[gracefulQueue].length, 0);
        });
      }
    }
    if (!global[gracefulQueue]) {
      publishQueue(global, fs[gracefulQueue]);
    }
    module.exports = patch(clone(fs));
    if (process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH && !fs.__patched) {
      module.exports = patch(fs);
      fs.__patched = true;
    }
    function patch(fs2) {
      polyfills(fs2);
      fs2.gracefulify = patch;
      fs2.createReadStream = createReadStream;
      fs2.createWriteStream = createWriteStream;
      var fs$readFile = fs2.readFile;
      fs2.readFile = readFile;
      function readFile(path, options, cb) {
        if (typeof options === "function")
          cb = options, options = null;
        return go$readFile(path, options, cb);
        function go$readFile(path2, options2, cb2) {
          return fs$readFile(path2, options2, function(err) {
            if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
              enqueue([go$readFile, [path2, options2, cb2]]);
            else {
              if (typeof cb2 === "function")
                cb2.apply(this, arguments);
              retry();
            }
          });
        }
      }
      var fs$writeFile = fs2.writeFile;
      fs2.writeFile = writeFile;
      function writeFile(path, data, options, cb) {
        if (typeof options === "function")
          cb = options, options = null;
        return go$writeFile(path, data, options, cb);
        function go$writeFile(path2, data2, options2, cb2) {
          return fs$writeFile(path2, data2, options2, function(err) {
            if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
              enqueue([go$writeFile, [path2, data2, options2, cb2]]);
            else {
              if (typeof cb2 === "function")
                cb2.apply(this, arguments);
              retry();
            }
          });
        }
      }
      var fs$appendFile = fs2.appendFile;
      if (fs$appendFile)
        fs2.appendFile = appendFile;
      function appendFile(path, data, options, cb) {
        if (typeof options === "function")
          cb = options, options = null;
        return go$appendFile(path, data, options, cb);
        function go$appendFile(path2, data2, options2, cb2) {
          return fs$appendFile(path2, data2, options2, function(err) {
            if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
              enqueue([go$appendFile, [path2, data2, options2, cb2]]);
            else {
              if (typeof cb2 === "function")
                cb2.apply(this, arguments);
              retry();
            }
          });
        }
      }
      var fs$readdir = fs2.readdir;
      fs2.readdir = readdir;
      function readdir(path, options, cb) {
        var args = [path];
        if (typeof options !== "function") {
          args.push(options);
        } else {
          cb = options;
        }
        args.push(go$readdir$cb);
        return go$readdir(args);
        function go$readdir$cb(err, files) {
          if (files && files.sort)
            files.sort();
          if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
            enqueue([go$readdir, [args]]);
          else {
            if (typeof cb === "function")
              cb.apply(this, arguments);
            retry();
          }
        }
      }
      function go$readdir(args) {
        return fs$readdir.apply(fs2, args);
      }
      if (process.version.substr(0, 4) === "v0.8") {
        var legStreams = legacy(fs2);
        ReadStream = legStreams.ReadStream;
        WriteStream = legStreams.WriteStream;
      }
      var fs$ReadStream = fs2.ReadStream;
      if (fs$ReadStream) {
        ReadStream.prototype = Object.create(fs$ReadStream.prototype);
        ReadStream.prototype.open = ReadStream$open;
      }
      var fs$WriteStream = fs2.WriteStream;
      if (fs$WriteStream) {
        WriteStream.prototype = Object.create(fs$WriteStream.prototype);
        WriteStream.prototype.open = WriteStream$open;
      }
      Object.defineProperty(fs2, "ReadStream", {
        get: function() {
          return ReadStream;
        },
        set: function(val) {
          ReadStream = val;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(fs2, "WriteStream", {
        get: function() {
          return WriteStream;
        },
        set: function(val) {
          WriteStream = val;
        },
        enumerable: true,
        configurable: true
      });
      var FileReadStream = ReadStream;
      Object.defineProperty(fs2, "FileReadStream", {
        get: function() {
          return FileReadStream;
        },
        set: function(val) {
          FileReadStream = val;
        },
        enumerable: true,
        configurable: true
      });
      var FileWriteStream = WriteStream;
      Object.defineProperty(fs2, "FileWriteStream", {
        get: function() {
          return FileWriteStream;
        },
        set: function(val) {
          FileWriteStream = val;
        },
        enumerable: true,
        configurable: true
      });
      function ReadStream(path, options) {
        if (this instanceof ReadStream)
          return fs$ReadStream.apply(this, arguments), this;
        else
          return ReadStream.apply(Object.create(ReadStream.prototype), arguments);
      }
      function ReadStream$open() {
        var that = this;
        open(that.path, that.flags, that.mode, function(err, fd) {
          if (err) {
            if (that.autoClose)
              that.destroy();
            that.emit("error", err);
          } else {
            that.fd = fd;
            that.emit("open", fd);
            that.read();
          }
        });
      }
      function WriteStream(path, options) {
        if (this instanceof WriteStream)
          return fs$WriteStream.apply(this, arguments), this;
        else
          return WriteStream.apply(Object.create(WriteStream.prototype), arguments);
      }
      function WriteStream$open() {
        var that = this;
        open(that.path, that.flags, that.mode, function(err, fd) {
          if (err) {
            that.destroy();
            that.emit("error", err);
          } else {
            that.fd = fd;
            that.emit("open", fd);
          }
        });
      }
      function createReadStream(path, options) {
        return new fs2.ReadStream(path, options);
      }
      function createWriteStream(path, options) {
        return new fs2.WriteStream(path, options);
      }
      var fs$open = fs2.open;
      fs2.open = open;
      function open(path, flags, mode, cb) {
        if (typeof mode === "function")
          cb = mode, mode = null;
        return go$open(path, flags, mode, cb);
        function go$open(path2, flags2, mode2, cb2) {
          return fs$open(path2, flags2, mode2, function(err, fd) {
            if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
              enqueue([go$open, [path2, flags2, mode2, cb2]]);
            else {
              if (typeof cb2 === "function")
                cb2.apply(this, arguments);
              retry();
            }
          });
        }
      }
      return fs2;
    }
    function enqueue(elem) {
      debug("ENQUEUE", elem[0].name, elem[1]);
      fs[gracefulQueue].push(elem);
    }
    function retry() {
      var elem = fs[gracefulQueue].shift();
      if (elem) {
        debug("RETRY", elem[0].name, elem[1]);
        elem[0].apply(null, elem[1]);
      }
    }
  },

  14(exports) {
    // node_modules\fs-extra\lib\fs\index.js
    "use strict";
    const u = __require(38 /* universalify */).fromCallback;
    const fs = __require(33 /* graceful-fs */);
    const api = ["access", "appendFile", "chmod", "chown", "close", "copyFile", "fchmod", "fchown", "fdatasync", "fstat", "fsync", "ftruncate", "futimes", "lchmod", "lchown", "link", "lstat", "mkdir", "mkdtemp", "open", "opendir", "readdir", "readFile", "readlink", "realpath", "rename", "rmdir", "stat", "symlink", "truncate", "unlink", "utimes", "writeFile"].filter((key) => {
      return typeof fs[key] === "function";
    });
    Object.keys(fs).forEach((key) => {
      if (key === "promises") {
        return;
      }
      exports[key] = fs[key];
    });
    api.forEach((method) => {
      exports[method] = u(fs[method]);
    });
    exports.exists = function(filename, callback) {
      if (typeof callback === "function") {
        return fs.exists(filename, callback);
      }
      return new Promise((resolve) => {
        return fs.exists(filename, resolve);
      });
    };
    exports.read = function(fd, buffer, offset, length, position, callback) {
      if (typeof callback === "function") {
        return fs.read(fd, buffer, offset, length, position, callback);
      }
      return new Promise((resolve, reject) => {
        fs.read(fd, buffer, offset, length, position, (err, bytesRead, buffer2) => {
          if (err)
            return reject(err);
          resolve({
            bytesRead,
            buffer: buffer2
          });
        });
      });
    };
    exports.write = function(fd, buffer, ...args) {
      if (typeof args[args.length - 1] === "function") {
        return fs.write(fd, buffer, ...args);
      }
      return new Promise((resolve, reject) => {
        fs.write(fd, buffer, ...args, (err, bytesWritten, buffer2) => {
          if (err)
            return reject(err);
          resolve({
            bytesWritten,
            buffer: buffer2
          });
        });
      });
    };
    if (typeof fs.writev === "function") {
      exports.writev = function(fd, buffers, ...args) {
        if (typeof args[args.length - 1] === "function") {
          return fs.writev(fd, buffers, ...args);
        }
        return new Promise((resolve, reject) => {
          fs.writev(fd, buffers, ...args, (err, bytesWritten, buffers2) => {
            if (err)
              return reject(err);
            resolve({
              bytesWritten,
              buffers: buffers2
            });
          });
        });
      };
    }
    if (typeof fs.realpath.native === "function") {
      exports.realpath.native = u(fs.realpath.native);
    }
  },

  2(exports, module) {
    // node_modules\at-least-node\index.js
    module.exports = (r) => {
      const n = process.versions.node.split(".").map((x) => parseInt(x, 10));
      r = r.split(".").map((x) => parseInt(x, 10));
      return n[0] > r[0] || n[0] === r[0] && (n[1] > r[1] || n[1] === r[1] && n[2] >= r[2]);
    };
  },

  21(exports, module) {
    // node_modules\fs-extra\lib\mkdirs\make-dir.js
    "use strict";
    const fs = __require(14 /* ../fs */);
    const path = require("path");
    const atLeastNode = __require(2 /* at-least-node */);
    const useNativeRecursiveOption = atLeastNode("10.12.0");
    const checkPath = (pth) => {
      if (process.platform === "win32") {
        const pathHasInvalidWinCharacters = /[<>:"|?*]/.test(pth.replace(path.parse(pth).root, ""));
        if (pathHasInvalidWinCharacters) {
          const error = new Error(`Path contains invalid characters: ${pth}`);
          error.code = "EINVAL";
          throw error;
        }
      }
    };
    const processOptions = (options) => {
      const defaults = {
        mode: 511 & ~process.umask()
      };
      if (typeof options === "number")
        options = {
          mode: options
        };
      return {
        ...defaults,
        ...options
      };
    };
    const permissionError = (pth) => {
      const error = new Error(`operation not permitted, mkdir '${pth}'`);
      error.code = "EPERM";
      error.errno = -4048;
      error.path = pth;
      error.syscall = "mkdir";
      return error;
    };
    module.exports.makeDir = async (input, options) => {
      checkPath(input);
      options = processOptions(options);
      if (useNativeRecursiveOption) {
        const pth = path.resolve(input);
        return fs.mkdir(pth, {
          mode: options.mode,
          recursive: true
        });
      }
      const make = async (pth) => {
        try {
          await fs.mkdir(pth, options.mode);
        } catch (error) {
          if (error.code === "EPERM") {
            throw error;
          }
          if (error.code === "ENOENT") {
            if (path.dirname(pth) === pth) {
              throw permissionError(pth);
            }
            if (error.message.includes("null bytes")) {
              throw error;
            }
            await make(path.dirname(pth));
            return make(pth);
          }
          try {
            const stats = await fs.stat(pth);
            if (!stats.isDirectory()) {
              throw new Error("The path is not a directory");
            }
          } catch {
            throw error;
          }
        }
      };
      return make(path.resolve(input));
    };
    module.exports.makeDirSync = (input, options) => {
      checkPath(input);
      options = processOptions(options);
      if (useNativeRecursiveOption) {
        const pth = path.resolve(input);
        return fs.mkdirSync(pth, {
          mode: options.mode,
          recursive: true
        });
      }
      const make = (pth) => {
        try {
          fs.mkdirSync(pth, options.mode);
        } catch (error) {
          if (error.code === "EPERM") {
            throw error;
          }
          if (error.code === "ENOENT") {
            if (path.dirname(pth) === pth) {
              throw permissionError(pth);
            }
            if (error.message.includes("null bytes")) {
              throw error;
            }
            make(path.dirname(pth));
            return make(pth);
          }
          try {
            if (!fs.statSync(pth).isDirectory()) {
              throw new Error("The path is not a directory");
            }
          } catch {
            throw error;
          }
        }
      };
      return make(path.resolve(input));
    };
  },

  20(exports, module) {
    // node_modules\fs-extra\lib\mkdirs\index.js
    "use strict";
    const u = __require(38 /* universalify */).fromPromise;
    const {makeDir: _makeDir, makeDirSync} = __require(21 /* ./make-dir */);
    const makeDir = u(_makeDir);
    module.exports = {
      mkdirs: makeDir,
      mkdirsSync: makeDirSync,
      mkdirp: makeDir,
      mkdirpSync: makeDirSync,
      ensureDir: makeDir,
      ensureDirSync: makeDirSync
    };
  },

  31(exports, module) {
    // node_modules\fs-extra\lib\util\utimes.js
    "use strict";
    const fs = __require(33 /* graceful-fs */);
    function utimesMillis(path, atime, mtime, callback) {
      fs.open(path, "r+", (err, fd) => {
        if (err)
          return callback(err);
        fs.futimes(fd, atime, mtime, (futimesErr) => {
          fs.close(fd, (closeErr) => {
            if (callback)
              callback(futimesErr || closeErr);
          });
        });
      });
    }
    function utimesMillisSync(path, atime, mtime) {
      const fd = fs.openSync(path, "r+");
      fs.futimesSync(fd, atime, mtime);
      return fs.closeSync(fd);
    }
    module.exports = {
      utimesMillis,
      utimesMillisSync
    };
  },

  30(exports, module) {
    // node_modules\fs-extra\lib\util\stat.js
    "use strict";
    const fs = __require(14 /* ../fs */);
    const path = require("path");
    const util = require("util");
    const atLeastNode = __require(2 /* at-least-node */);
    const nodeSupportsBigInt = atLeastNode("10.5.0");
    const stat = (file) => nodeSupportsBigInt ? fs.stat(file, {
      bigint: true
    }) : fs.stat(file);
    const statSync = (file) => nodeSupportsBigInt ? fs.statSync(file, {
      bigint: true
    }) : fs.statSync(file);
    function getStats(src, dest) {
      return Promise.all([stat(src), stat(dest).catch((err) => {
        if (err.code === "ENOENT")
          return null;
        throw err;
      })]).then(([srcStat, destStat]) => ({
        srcStat,
        destStat
      }));
    }
    function getStatsSync(src, dest) {
      let destStat;
      const srcStat = statSync(src);
      try {
        destStat = statSync(dest);
      } catch (err) {
        if (err.code === "ENOENT")
          return {
            srcStat,
            destStat: null
          };
        throw err;
      }
      return {
        srcStat,
        destStat
      };
    }
    function checkPaths(src, dest, funcName, cb) {
      util.callbackify(getStats)(src, dest, (err, stats) => {
        if (err)
          return cb(err);
        const {srcStat, destStat} = stats;
        if (destStat && areIdentical(srcStat, destStat)) {
          return cb(new Error("Source and destination must not be the same."));
        }
        if (srcStat.isDirectory() && isSrcSubdir(src, dest)) {
          return cb(new Error(errMsg(src, dest, funcName)));
        }
        return cb(null, {
          srcStat,
          destStat
        });
      });
    }
    function checkPathsSync(src, dest, funcName) {
      const {srcStat, destStat} = getStatsSync(src, dest);
      if (destStat && areIdentical(srcStat, destStat)) {
        throw new Error("Source and destination must not be the same.");
      }
      if (srcStat.isDirectory() && isSrcSubdir(src, dest)) {
        throw new Error(errMsg(src, dest, funcName));
      }
      return {
        srcStat,
        destStat
      };
    }
    function checkParentPaths(src, srcStat, dest, funcName, cb) {
      const srcParent = path.resolve(path.dirname(src));
      const destParent = path.resolve(path.dirname(dest));
      if (destParent === srcParent || destParent === path.parse(destParent).root)
        return cb();
      const callback = (err, destStat) => {
        if (err) {
          if (err.code === "ENOENT")
            return cb();
          return cb(err);
        }
        if (areIdentical(srcStat, destStat)) {
          return cb(new Error(errMsg(src, dest, funcName)));
        }
        return checkParentPaths(src, srcStat, destParent, funcName, cb);
      };
      if (nodeSupportsBigInt)
        fs.stat(destParent, {
          bigint: true
        }, callback);
      else
        fs.stat(destParent, callback);
    }
    function checkParentPathsSync(src, srcStat, dest, funcName) {
      const srcParent = path.resolve(path.dirname(src));
      const destParent = path.resolve(path.dirname(dest));
      if (destParent === srcParent || destParent === path.parse(destParent).root)
        return;
      let destStat;
      try {
        destStat = statSync(destParent);
      } catch (err) {
        if (err.code === "ENOENT")
          return;
        throw err;
      }
      if (areIdentical(srcStat, destStat)) {
        throw new Error(errMsg(src, dest, funcName));
      }
      return checkParentPathsSync(src, srcStat, destParent, funcName);
    }
    function areIdentical(srcStat, destStat) {
      if (destStat.ino && destStat.dev && destStat.ino === srcStat.ino && destStat.dev === srcStat.dev) {
        if (nodeSupportsBigInt || destStat.ino < Number.MAX_SAFE_INTEGER) {
          return true;
        }
        if (destStat.size === srcStat.size && destStat.mode === srcStat.mode && destStat.nlink === srcStat.nlink && destStat.atimeMs === srcStat.atimeMs && destStat.mtimeMs === srcStat.mtimeMs && destStat.ctimeMs === srcStat.ctimeMs && destStat.birthtimeMs === srcStat.birthtimeMs) {
          return true;
        }
      }
      return false;
    }
    function isSrcSubdir(src, dest) {
      const srcArr = path.resolve(src).split(path.sep).filter((i) => i);
      const destArr = path.resolve(dest).split(path.sep).filter((i) => i);
      return srcArr.reduce((acc, cur, i) => acc && destArr[i] === cur, true);
    }
    function errMsg(src, dest, funcName) {
      return `Cannot ${funcName} '${src}' to a subdirectory of itself, '${dest}'.`;
    }
    module.exports = {
      checkPaths,
      checkPathsSync,
      checkParentPaths,
      checkParentPathsSync,
      isSrcSubdir
    };
  },

  3(exports, module) {
    // node_modules\fs-extra\lib\copy-sync\copy-sync.js
    "use strict";
    const fs = __require(33 /* graceful-fs */);
    const path = require("path");
    const mkdirsSync = __require(20 /* ../mkdirs */).mkdirsSync;
    const utimesMillisSync = __require(31 /* ../util/utimes */).utimesMillisSync;
    const stat = __require(30 /* ../util/stat */);
    function copySync(src, dest, opts) {
      if (typeof opts === "function") {
        opts = {
          filter: opts
        };
      }
      opts = opts || {};
      opts.clobber = "clobber" in opts ? !!opts.clobber : true;
      opts.overwrite = "overwrite" in opts ? !!opts.overwrite : opts.clobber;
      if (opts.preserveTimestamps && process.arch === "ia32") {
        console.warn(`fs-extra: Using the preserveTimestamps option in 32-bit node is not recommended;

    see https://github.com/jprichardson/node-fs-extra/issues/269`);
      }
      const {srcStat, destStat} = stat.checkPathsSync(src, dest, "copy");
      stat.checkParentPathsSync(src, srcStat, dest, "copy");
      return handleFilterAndCopy(destStat, src, dest, opts);
    }
    function handleFilterAndCopy(destStat, src, dest, opts) {
      if (opts.filter && !opts.filter(src, dest))
        return;
      const destParent = path.dirname(dest);
      if (!fs.existsSync(destParent))
        mkdirsSync(destParent);
      return startCopy(destStat, src, dest, opts);
    }
    function startCopy(destStat, src, dest, opts) {
      if (opts.filter && !opts.filter(src, dest))
        return;
      return getStats(destStat, src, dest, opts);
    }
    function getStats(destStat, src, dest, opts) {
      const statSync = opts.dereference ? fs.statSync : fs.lstatSync;
      const srcStat = statSync(src);
      if (srcStat.isDirectory())
        return onDir(srcStat, destStat, src, dest, opts);
      else if (srcStat.isFile() || srcStat.isCharacterDevice() || srcStat.isBlockDevice())
        return onFile(srcStat, destStat, src, dest, opts);
      else if (srcStat.isSymbolicLink())
        return onLink(destStat, src, dest, opts);
    }
    function onFile(srcStat, destStat, src, dest, opts) {
      if (!destStat)
        return copyFile(srcStat, src, dest, opts);
      return mayCopyFile(srcStat, src, dest, opts);
    }
    function mayCopyFile(srcStat, src, dest, opts) {
      if (opts.overwrite) {
        fs.unlinkSync(dest);
        return copyFile(srcStat, src, dest, opts);
      } else if (opts.errorOnExist) {
        throw new Error(`'${dest}' already exists`);
      }
    }
    function copyFile(srcStat, src, dest, opts) {
      fs.copyFileSync(src, dest);
      if (opts.preserveTimestamps)
        handleTimestamps(srcStat.mode, src, dest);
      return setDestMode(dest, srcStat.mode);
    }
    function handleTimestamps(srcMode, src, dest) {
      if (fileIsNotWritable(srcMode))
        makeFileWritable(dest, srcMode);
      return setDestTimestamps(src, dest);
    }
    function fileIsNotWritable(srcMode) {
      return (srcMode & 128) === 0;
    }
    function makeFileWritable(dest, srcMode) {
      return setDestMode(dest, srcMode | 128);
    }
    function setDestMode(dest, srcMode) {
      return fs.chmodSync(dest, srcMode);
    }
    function setDestTimestamps(src, dest) {
      const updatedSrcStat = fs.statSync(src);
      return utimesMillisSync(dest, updatedSrcStat.atime, updatedSrcStat.mtime);
    }
    function onDir(srcStat, destStat, src, dest, opts) {
      if (!destStat)
        return mkDirAndCopy(srcStat.mode, src, dest, opts);
      if (destStat && !destStat.isDirectory()) {
        throw new Error(`Cannot overwrite non-directory '${dest}' with directory '${src}'.`);
      }
      return copyDir(src, dest, opts);
    }
    function mkDirAndCopy(srcMode, src, dest, opts) {
      fs.mkdirSync(dest);
      copyDir(src, dest, opts);
      return setDestMode(dest, srcMode);
    }
    function copyDir(src, dest, opts) {
      fs.readdirSync(src).forEach((item) => copyDirItem(item, src, dest, opts));
    }
    function copyDirItem(item, src, dest, opts) {
      const srcItem = path.join(src, item);
      const destItem = path.join(dest, item);
      const {destStat} = stat.checkPathsSync(srcItem, destItem, "copy");
      return startCopy(destStat, srcItem, destItem, opts);
    }
    function onLink(destStat, src, dest, opts) {
      let resolvedSrc = fs.readlinkSync(src);
      if (opts.dereference) {
        resolvedSrc = path.resolve(process.cwd(), resolvedSrc);
      }
      if (!destStat) {
        return fs.symlinkSync(resolvedSrc, dest);
      } else {
        let resolvedDest;
        try {
          resolvedDest = fs.readlinkSync(dest);
        } catch (err) {
          if (err.code === "EINVAL" || err.code === "UNKNOWN")
            return fs.symlinkSync(resolvedSrc, dest);
          throw err;
        }
        if (opts.dereference) {
          resolvedDest = path.resolve(process.cwd(), resolvedDest);
        }
        if (stat.isSrcSubdir(resolvedSrc, resolvedDest)) {
          throw new Error(`Cannot copy '${resolvedSrc}' to a subdirectory of itself, '${resolvedDest}'.`);
        }
        if (fs.statSync(dest).isDirectory() && stat.isSrcSubdir(resolvedDest, resolvedSrc)) {
          throw new Error(`Cannot overwrite '${resolvedDest}' with '${resolvedSrc}'.`);
        }
        return copyLink(resolvedSrc, dest);
      }
    }
    function copyLink(resolvedSrc, dest) {
      fs.unlinkSync(dest);
      return fs.symlinkSync(resolvedSrc, dest);
    }
    module.exports = copySync;
  },

  4(exports, module) {
    // node_modules\fs-extra\lib\copy-sync\index.js
    "use strict";
    module.exports = {
      copySync: __require(3 /* ./copy-sync */)
    };
  },

  27(exports, module) {
    // node_modules\fs-extra\lib\path-exists\index.js
    "use strict";
    const u = __require(38 /* universalify */).fromPromise;
    const fs = __require(14 /* ../fs */);
    function pathExists(path) {
      return fs.access(path).then(() => true).catch(() => false);
    }
    module.exports = {
      pathExists: u(pathExists),
      pathExistsSync: fs.existsSync
    };
  },

  5(exports, module) {
    // node_modules\fs-extra\lib\copy\copy.js
    "use strict";
    const fs = __require(33 /* graceful-fs */);
    const path = require("path");
    const mkdirs = __require(20 /* ../mkdirs */).mkdirs;
    const pathExists = __require(27 /* ../path-exists */).pathExists;
    const utimesMillis = __require(31 /* ../util/utimes */).utimesMillis;
    const stat = __require(30 /* ../util/stat */);
    function copy(src, dest, opts, cb) {
      if (typeof opts === "function" && !cb) {
        cb = opts;
        opts = {};
      } else if (typeof opts === "function") {
        opts = {
          filter: opts
        };
      }
      cb = cb || function() {
      };
      opts = opts || {};
      opts.clobber = "clobber" in opts ? !!opts.clobber : true;
      opts.overwrite = "overwrite" in opts ? !!opts.overwrite : opts.clobber;
      if (opts.preserveTimestamps && process.arch === "ia32") {
        console.warn(`fs-extra: Using the preserveTimestamps option in 32-bit node is not recommended;

    see https://github.com/jprichardson/node-fs-extra/issues/269`);
      }
      stat.checkPaths(src, dest, "copy", (err, stats) => {
        if (err)
          return cb(err);
        const {srcStat, destStat} = stats;
        stat.checkParentPaths(src, srcStat, dest, "copy", (err2) => {
          if (err2)
            return cb(err2);
          if (opts.filter)
            return handleFilter(checkParentDir, destStat, src, dest, opts, cb);
          return checkParentDir(destStat, src, dest, opts, cb);
        });
      });
    }
    function checkParentDir(destStat, src, dest, opts, cb) {
      const destParent = path.dirname(dest);
      pathExists(destParent, (err, dirExists) => {
        if (err)
          return cb(err);
        if (dirExists)
          return startCopy(destStat, src, dest, opts, cb);
        mkdirs(destParent, (err2) => {
          if (err2)
            return cb(err2);
          return startCopy(destStat, src, dest, opts, cb);
        });
      });
    }
    function handleFilter(onInclude, destStat, src, dest, opts, cb) {
      Promise.resolve(opts.filter(src, dest)).then((include) => {
        if (include)
          return onInclude(destStat, src, dest, opts, cb);
        return cb();
      }, (error) => cb(error));
    }
    function startCopy(destStat, src, dest, opts, cb) {
      if (opts.filter)
        return handleFilter(getStats, destStat, src, dest, opts, cb);
      return getStats(destStat, src, dest, opts, cb);
    }
    function getStats(destStat, src, dest, opts, cb) {
      const stat2 = opts.dereference ? fs.stat : fs.lstat;
      stat2(src, (err, srcStat) => {
        if (err)
          return cb(err);
        if (srcStat.isDirectory())
          return onDir(srcStat, destStat, src, dest, opts, cb);
        else if (srcStat.isFile() || srcStat.isCharacterDevice() || srcStat.isBlockDevice())
          return onFile(srcStat, destStat, src, dest, opts, cb);
        else if (srcStat.isSymbolicLink())
          return onLink(destStat, src, dest, opts, cb);
      });
    }
    function onFile(srcStat, destStat, src, dest, opts, cb) {
      if (!destStat)
        return copyFile(srcStat, src, dest, opts, cb);
      return mayCopyFile(srcStat, src, dest, opts, cb);
    }
    function mayCopyFile(srcStat, src, dest, opts, cb) {
      if (opts.overwrite) {
        fs.unlink(dest, (err) => {
          if (err)
            return cb(err);
          return copyFile(srcStat, src, dest, opts, cb);
        });
      } else if (opts.errorOnExist) {
        return cb(new Error(`'${dest}' already exists`));
      } else
        return cb();
    }
    function copyFile(srcStat, src, dest, opts, cb) {
      fs.copyFile(src, dest, (err) => {
        if (err)
          return cb(err);
        if (opts.preserveTimestamps)
          return handleTimestampsAndMode(srcStat.mode, src, dest, cb);
        return setDestMode(dest, srcStat.mode, cb);
      });
    }
    function handleTimestampsAndMode(srcMode, src, dest, cb) {
      if (fileIsNotWritable(srcMode)) {
        return makeFileWritable(dest, srcMode, (err) => {
          if (err)
            return cb(err);
          return setDestTimestampsAndMode(srcMode, src, dest, cb);
        });
      }
      return setDestTimestampsAndMode(srcMode, src, dest, cb);
    }
    function fileIsNotWritable(srcMode) {
      return (srcMode & 128) === 0;
    }
    function makeFileWritable(dest, srcMode, cb) {
      return setDestMode(dest, srcMode | 128, cb);
    }
    function setDestTimestampsAndMode(srcMode, src, dest, cb) {
      setDestTimestamps(src, dest, (err) => {
        if (err)
          return cb(err);
        return setDestMode(dest, srcMode, cb);
      });
    }
    function setDestMode(dest, srcMode, cb) {
      return fs.chmod(dest, srcMode, cb);
    }
    function setDestTimestamps(src, dest, cb) {
      fs.stat(src, (err, updatedSrcStat) => {
        if (err)
          return cb(err);
        return utimesMillis(dest, updatedSrcStat.atime, updatedSrcStat.mtime, cb);
      });
    }
    function onDir(srcStat, destStat, src, dest, opts, cb) {
      if (!destStat)
        return mkDirAndCopy(srcStat.mode, src, dest, opts, cb);
      if (destStat && !destStat.isDirectory()) {
        return cb(new Error(`Cannot overwrite non-directory '${dest}' with directory '${src}'.`));
      }
      return copyDir(src, dest, opts, cb);
    }
    function mkDirAndCopy(srcMode, src, dest, opts, cb) {
      fs.mkdir(dest, (err) => {
        if (err)
          return cb(err);
        copyDir(src, dest, opts, (err2) => {
          if (err2)
            return cb(err2);
          return setDestMode(dest, srcMode, cb);
        });
      });
    }
    function copyDir(src, dest, opts, cb) {
      fs.readdir(src, (err, items) => {
        if (err)
          return cb(err);
        return copyDirItems(items, src, dest, opts, cb);
      });
    }
    function copyDirItems(items, src, dest, opts, cb) {
      const item = items.pop();
      if (!item)
        return cb();
      return copyDirItem(items, item, src, dest, opts, cb);
    }
    function copyDirItem(items, item, src, dest, opts, cb) {
      const srcItem = path.join(src, item);
      const destItem = path.join(dest, item);
      stat.checkPaths(srcItem, destItem, "copy", (err, stats) => {
        if (err)
          return cb(err);
        const {destStat} = stats;
        startCopy(destStat, srcItem, destItem, opts, (err2) => {
          if (err2)
            return cb(err2);
          return copyDirItems(items, src, dest, opts, cb);
        });
      });
    }
    function onLink(destStat, src, dest, opts, cb) {
      fs.readlink(src, (err, resolvedSrc) => {
        if (err)
          return cb(err);
        if (opts.dereference) {
          resolvedSrc = path.resolve(process.cwd(), resolvedSrc);
        }
        if (!destStat) {
          return fs.symlink(resolvedSrc, dest, cb);
        } else {
          fs.readlink(dest, (err2, resolvedDest) => {
            if (err2) {
              if (err2.code === "EINVAL" || err2.code === "UNKNOWN")
                return fs.symlink(resolvedSrc, dest, cb);
              return cb(err2);
            }
            if (opts.dereference) {
              resolvedDest = path.resolve(process.cwd(), resolvedDest);
            }
            if (stat.isSrcSubdir(resolvedSrc, resolvedDest)) {
              return cb(new Error(`Cannot copy '${resolvedSrc}' to a subdirectory of itself, '${resolvedDest}'.`));
            }
            if (destStat.isDirectory() && stat.isSrcSubdir(resolvedDest, resolvedSrc)) {
              return cb(new Error(`Cannot overwrite '${resolvedDest}' with '${resolvedSrc}'.`));
            }
            return copyLink(resolvedSrc, dest, cb);
          });
        }
      });
    }
    function copyLink(resolvedSrc, dest, cb) {
      fs.unlink(dest, (err) => {
        if (err)
          return cb(err);
        return fs.symlink(resolvedSrc, dest, cb);
      });
    }
    module.exports = copy;
  },

  6(exports, module) {
    // node_modules\fs-extra\lib\copy\index.js
    "use strict";
    const u = __require(38 /* universalify */).fromCallback;
    module.exports = {
      copy: u(__require(5 /* ./copy */))
    };
  },

  29(exports, module) {
    // node_modules\fs-extra\lib\remove\rimraf.js
    "use strict";
    const fs = __require(33 /* graceful-fs */);
    const path = require("path");
    const assert = require("assert");
    const isWindows = process.platform === "win32";
    function defaults(options) {
      const methods = ["unlink", "chmod", "stat", "lstat", "rmdir", "readdir"];
      methods.forEach((m) => {
        options[m] = options[m] || fs[m];
        m = m + "Sync";
        options[m] = options[m] || fs[m];
      });
      options.maxBusyTries = options.maxBusyTries || 3;
    }
    function rimraf(p, options, cb) {
      let busyTries = 0;
      if (typeof options === "function") {
        cb = options;
        options = {};
      }
      assert(p, "rimraf: missing path");
      assert.strictEqual(typeof p, "string", "rimraf: path should be a string");
      assert.strictEqual(typeof cb, "function", "rimraf: callback function required");
      assert(options, "rimraf: invalid options argument provided");
      assert.strictEqual(typeof options, "object", "rimraf: options should be object");
      defaults(options);
      rimraf_(p, options, function CB(er) {
        if (er) {
          if ((er.code === "EBUSY" || er.code === "ENOTEMPTY" || er.code === "EPERM") && busyTries < options.maxBusyTries) {
            busyTries++;
            const time = busyTries * 100;
            return setTimeout(() => rimraf_(p, options, CB), time);
          }
          if (er.code === "ENOENT")
            er = null;
        }
        cb(er);
      });
    }
    function rimraf_(p, options, cb) {
      assert(p);
      assert(options);
      assert(typeof cb === "function");
      options.lstat(p, (er, st) => {
        if (er && er.code === "ENOENT") {
          return cb(null);
        }
        if (er && er.code === "EPERM" && isWindows) {
          return fixWinEPERM(p, options, er, cb);
        }
        if (st && st.isDirectory()) {
          return rmdir(p, options, er, cb);
        }
        options.unlink(p, (er2) => {
          if (er2) {
            if (er2.code === "ENOENT") {
              return cb(null);
            }
            if (er2.code === "EPERM") {
              return isWindows ? fixWinEPERM(p, options, er2, cb) : rmdir(p, options, er2, cb);
            }
            if (er2.code === "EISDIR") {
              return rmdir(p, options, er2, cb);
            }
          }
          return cb(er2);
        });
      });
    }
    function fixWinEPERM(p, options, er, cb) {
      assert(p);
      assert(options);
      assert(typeof cb === "function");
      if (er) {
        assert(er instanceof Error);
      }
      options.chmod(p, 438, (er2) => {
        if (er2) {
          cb(er2.code === "ENOENT" ? null : er);
        } else {
          options.stat(p, (er3, stats) => {
            if (er3) {
              cb(er3.code === "ENOENT" ? null : er);
            } else if (stats.isDirectory()) {
              rmdir(p, options, er, cb);
            } else {
              options.unlink(p, cb);
            }
          });
        }
      });
    }
    function fixWinEPERMSync(p, options, er) {
      let stats;
      assert(p);
      assert(options);
      if (er) {
        assert(er instanceof Error);
      }
      try {
        options.chmodSync(p, 438);
      } catch (er2) {
        if (er2.code === "ENOENT") {
          return;
        } else {
          throw er;
        }
      }
      try {
        stats = options.statSync(p);
      } catch (er3) {
        if (er3.code === "ENOENT") {
          return;
        } else {
          throw er;
        }
      }
      if (stats.isDirectory()) {
        rmdirSync(p, options, er);
      } else {
        options.unlinkSync(p);
      }
    }
    function rmdir(p, options, originalEr, cb) {
      assert(p);
      assert(options);
      if (originalEr) {
        assert(originalEr instanceof Error);
      }
      assert(typeof cb === "function");
      options.rmdir(p, (er) => {
        if (er && (er.code === "ENOTEMPTY" || er.code === "EEXIST" || er.code === "EPERM")) {
          rmkids(p, options, cb);
        } else if (er && er.code === "ENOTDIR") {
          cb(originalEr);
        } else {
          cb(er);
        }
      });
    }
    function rmkids(p, options, cb) {
      assert(p);
      assert(options);
      assert(typeof cb === "function");
      options.readdir(p, (er, files) => {
        if (er)
          return cb(er);
        let n = files.length;
        let errState;
        if (n === 0)
          return options.rmdir(p, cb);
        files.forEach((f) => {
          rimraf(path.join(p, f), options, (er2) => {
            if (errState) {
              return;
            }
            if (er2)
              return cb(errState = er2);
            if (--n === 0) {
              options.rmdir(p, cb);
            }
          });
        });
      });
    }
    function rimrafSync(p, options) {
      let st;
      options = options || {};
      defaults(options);
      assert(p, "rimraf: missing path");
      assert.strictEqual(typeof p, "string", "rimraf: path should be a string");
      assert(options, "rimraf: missing options");
      assert.strictEqual(typeof options, "object", "rimraf: options should be object");
      try {
        st = options.lstatSync(p);
      } catch (er) {
        if (er.code === "ENOENT") {
          return;
        }
        if (er.code === "EPERM" && isWindows) {
          fixWinEPERMSync(p, options, er);
        }
      }
      try {
        if (st && st.isDirectory()) {
          rmdirSync(p, options, null);
        } else {
          options.unlinkSync(p);
        }
      } catch (er) {
        if (er.code === "ENOENT") {
          return;
        } else if (er.code === "EPERM") {
          return isWindows ? fixWinEPERMSync(p, options, er) : rmdirSync(p, options, er);
        } else if (er.code !== "EISDIR") {
          throw er;
        }
        rmdirSync(p, options, er);
      }
    }
    function rmdirSync(p, options, originalEr) {
      assert(p);
      assert(options);
      if (originalEr) {
        assert(originalEr instanceof Error);
      }
      try {
        options.rmdirSync(p);
      } catch (er) {
        if (er.code === "ENOTDIR") {
          throw originalEr;
        } else if (er.code === "ENOTEMPTY" || er.code === "EEXIST" || er.code === "EPERM") {
          rmkidsSync(p, options);
        } else if (er.code !== "ENOENT") {
          throw er;
        }
      }
    }
    function rmkidsSync(p, options) {
      assert(p);
      assert(options);
      options.readdirSync(p).forEach((f) => rimrafSync(path.join(p, f), options));
      if (isWindows) {
        const startTime = Date.now();
        do {
          try {
            const ret = options.rmdirSync(p, options);
            return ret;
          } catch {
          }
        } while (Date.now() - startTime < 500);
      } else {
        const ret = options.rmdirSync(p, options);
        return ret;
      }
    }
    module.exports = rimraf;
    rimraf.sync = rimrafSync;
  },

  28(exports, module) {
    // node_modules\fs-extra\lib\remove\index.js
    "use strict";
    const u = __require(38 /* universalify */).fromCallback;
    const rimraf = __require(29 /* ./rimraf */);
    module.exports = {
      remove: u(rimraf),
      removeSync: rimraf.sync
    };
  },

  7(exports, module) {
    // node_modules\fs-extra\lib\empty\index.js
    "use strict";
    const u = __require(38 /* universalify */).fromCallback;
    const fs = __require(33 /* graceful-fs */);
    const path = require("path");
    const mkdir = __require(20 /* ../mkdirs */);
    const remove = __require(28 /* ../remove */);
    const emptyDir = u(function emptyDir2(dir, callback) {
      callback = callback || function() {
      };
      fs.readdir(dir, (err, items) => {
        if (err)
          return mkdir.mkdirs(dir, callback);
        items = items.map((item) => path.join(dir, item));
        deleteItem();
        function deleteItem() {
          const item = items.pop();
          if (!item)
            return callback();
          remove.remove(item, (err2) => {
            if (err2)
              return callback(err2);
            deleteItem();
          });
        }
      });
    });
    function emptyDirSync(dir) {
      let items;
      try {
        items = fs.readdirSync(dir);
      } catch {
        return mkdir.mkdirsSync(dir);
      }
      items.forEach((item) => {
        item = path.join(dir, item);
        remove.removeSync(item);
      });
    }
    module.exports = {
      emptyDirSync,
      emptydirSync: emptyDirSync,
      emptyDir,
      emptydir: emptyDir
    };
  },

  8(exports, module) {
    // node_modules\fs-extra\lib\ensure\file.js
    "use strict";
    const u = __require(38 /* universalify */).fromCallback;
    const path = require("path");
    const fs = __require(33 /* graceful-fs */);
    const mkdir = __require(20 /* ../mkdirs */);
    function createFile(file, callback) {
      function makeFile() {
        fs.writeFile(file, "", (err) => {
          if (err)
            return callback(err);
          callback();
        });
      }
      fs.stat(file, (err, stats) => {
        if (!err && stats.isFile())
          return callback();
        const dir = path.dirname(file);
        fs.stat(dir, (err2, stats2) => {
          if (err2) {
            if (err2.code === "ENOENT") {
              return mkdir.mkdirs(dir, (err3) => {
                if (err3)
                  return callback(err3);
                makeFile();
              });
            }
            return callback(err2);
          }
          if (stats2.isDirectory())
            makeFile();
          else {
            fs.readdir(dir, (err3) => {
              if (err3)
                return callback(err3);
            });
          }
        });
      });
    }
    function createFileSync(file) {
      let stats;
      try {
        stats = fs.statSync(file);
      } catch {
      }
      if (stats && stats.isFile())
        return;
      const dir = path.dirname(file);
      try {
        if (!fs.statSync(dir).isDirectory()) {
          fs.readdirSync(dir);
        }
      } catch (err) {
        if (err && err.code === "ENOENT")
          mkdir.mkdirsSync(dir);
        else
          throw err;
      }
      fs.writeFileSync(file, "");
    }
    module.exports = {
      createFile: u(createFile),
      createFileSync
    };
  },

  10(exports, module) {
    // node_modules\fs-extra\lib\ensure\link.js
    "use strict";
    const u = __require(38 /* universalify */).fromCallback;
    const path = require("path");
    const fs = __require(33 /* graceful-fs */);
    const mkdir = __require(20 /* ../mkdirs */);
    const pathExists = __require(27 /* ../path-exists */).pathExists;
    function createLink(srcpath, dstpath, callback) {
      function makeLink(srcpath2, dstpath2) {
        fs.link(srcpath2, dstpath2, (err) => {
          if (err)
            return callback(err);
          callback(null);
        });
      }
      pathExists(dstpath, (err, destinationExists) => {
        if (err)
          return callback(err);
        if (destinationExists)
          return callback(null);
        fs.lstat(srcpath, (err2) => {
          if (err2) {
            err2.message = err2.message.replace("lstat", "ensureLink");
            return callback(err2);
          }
          const dir = path.dirname(dstpath);
          pathExists(dir, (err3, dirExists) => {
            if (err3)
              return callback(err3);
            if (dirExists)
              return makeLink(srcpath, dstpath);
            mkdir.mkdirs(dir, (err4) => {
              if (err4)
                return callback(err4);
              makeLink(srcpath, dstpath);
            });
          });
        });
      });
    }
    function createLinkSync(srcpath, dstpath) {
      const destinationExists = fs.existsSync(dstpath);
      if (destinationExists)
        return void 0;
      try {
        fs.lstatSync(srcpath);
      } catch (err) {
        err.message = err.message.replace("lstat", "ensureLink");
        throw err;
      }
      const dir = path.dirname(dstpath);
      const dirExists = fs.existsSync(dir);
      if (dirExists)
        return fs.linkSync(srcpath, dstpath);
      mkdir.mkdirsSync(dir);
      return fs.linkSync(srcpath, dstpath);
    }
    module.exports = {
      createLink: u(createLink),
      createLinkSync
    };
  },

  11(exports, module) {
    // node_modules\fs-extra\lib\ensure\symlink-paths.js
    "use strict";
    const path = require("path");
    const fs = __require(33 /* graceful-fs */);
    const pathExists = __require(27 /* ../path-exists */).pathExists;
    function symlinkPaths(srcpath, dstpath, callback) {
      if (path.isAbsolute(srcpath)) {
        return fs.lstat(srcpath, (err) => {
          if (err) {
            err.message = err.message.replace("lstat", "ensureSymlink");
            return callback(err);
          }
          return callback(null, {
            toCwd: srcpath,
            toDst: srcpath
          });
        });
      } else {
        const dstdir = path.dirname(dstpath);
        const relativeToDst = path.join(dstdir, srcpath);
        return pathExists(relativeToDst, (err, exists) => {
          if (err)
            return callback(err);
          if (exists) {
            return callback(null, {
              toCwd: relativeToDst,
              toDst: srcpath
            });
          } else {
            return fs.lstat(srcpath, (err2) => {
              if (err2) {
                err2.message = err2.message.replace("lstat", "ensureSymlink");
                return callback(err2);
              }
              return callback(null, {
                toCwd: srcpath,
                toDst: path.relative(dstdir, srcpath)
              });
            });
          }
        });
      }
    }
    function symlinkPathsSync(srcpath, dstpath) {
      let exists;
      if (path.isAbsolute(srcpath)) {
        exists = fs.existsSync(srcpath);
        if (!exists)
          throw new Error("absolute srcpath does not exist");
        return {
          toCwd: srcpath,
          toDst: srcpath
        };
      } else {
        const dstdir = path.dirname(dstpath);
        const relativeToDst = path.join(dstdir, srcpath);
        exists = fs.existsSync(relativeToDst);
        if (exists) {
          return {
            toCwd: relativeToDst,
            toDst: srcpath
          };
        } else {
          exists = fs.existsSync(srcpath);
          if (!exists)
            throw new Error("relative srcpath does not exist");
          return {
            toCwd: srcpath,
            toDst: path.relative(dstdir, srcpath)
          };
        }
      }
    }
    module.exports = {
      symlinkPaths,
      symlinkPathsSync
    };
  },

  12(exports, module) {
    // node_modules\fs-extra\lib\ensure\symlink-type.js
    "use strict";
    const fs = __require(33 /* graceful-fs */);
    function symlinkType(srcpath, type, callback) {
      callback = typeof type === "function" ? type : callback;
      type = typeof type === "function" ? false : type;
      if (type)
        return callback(null, type);
      fs.lstat(srcpath, (err, stats) => {
        if (err)
          return callback(null, "file");
        type = stats && stats.isDirectory() ? "dir" : "file";
        callback(null, type);
      });
    }
    function symlinkTypeSync(srcpath, type) {
      let stats;
      if (type)
        return type;
      try {
        stats = fs.lstatSync(srcpath);
      } catch {
        return "file";
      }
      return stats && stats.isDirectory() ? "dir" : "file";
    }
    module.exports = {
      symlinkType,
      symlinkTypeSync
    };
  },

  13(exports, module) {
    // node_modules\fs-extra\lib\ensure\symlink.js
    "use strict";
    const u = __require(38 /* universalify */).fromCallback;
    const path = require("path");
    const fs = __require(33 /* graceful-fs */);
    const _mkdirs = __require(20 /* ../mkdirs */);
    const mkdirs = _mkdirs.mkdirs;
    const mkdirsSync = _mkdirs.mkdirsSync;
    const _symlinkPaths = __require(11 /* ./symlink-paths */);
    const symlinkPaths = _symlinkPaths.symlinkPaths;
    const symlinkPathsSync = _symlinkPaths.symlinkPathsSync;
    const _symlinkType = __require(12 /* ./symlink-type */);
    const symlinkType = _symlinkType.symlinkType;
    const symlinkTypeSync = _symlinkType.symlinkTypeSync;
    const pathExists = __require(27 /* ../path-exists */).pathExists;
    function createSymlink(srcpath, dstpath, type, callback) {
      callback = typeof type === "function" ? type : callback;
      type = typeof type === "function" ? false : type;
      pathExists(dstpath, (err, destinationExists) => {
        if (err)
          return callback(err);
        if (destinationExists)
          return callback(null);
        symlinkPaths(srcpath, dstpath, (err2, relative) => {
          if (err2)
            return callback(err2);
          srcpath = relative.toDst;
          symlinkType(relative.toCwd, type, (err3, type2) => {
            if (err3)
              return callback(err3);
            const dir = path.dirname(dstpath);
            pathExists(dir, (err4, dirExists) => {
              if (err4)
                return callback(err4);
              if (dirExists)
                return fs.symlink(srcpath, dstpath, type2, callback);
              mkdirs(dir, (err5) => {
                if (err5)
                  return callback(err5);
                fs.symlink(srcpath, dstpath, type2, callback);
              });
            });
          });
        });
      });
    }
    function createSymlinkSync(srcpath, dstpath, type) {
      const destinationExists = fs.existsSync(dstpath);
      if (destinationExists)
        return void 0;
      const relative = symlinkPathsSync(srcpath, dstpath);
      srcpath = relative.toDst;
      type = symlinkTypeSync(relative.toCwd, type);
      const dir = path.dirname(dstpath);
      const exists = fs.existsSync(dir);
      if (exists)
        return fs.symlinkSync(srcpath, dstpath, type);
      mkdirsSync(dir);
      return fs.symlinkSync(srcpath, dstpath, type);
    }
    module.exports = {
      createSymlink: u(createSymlink),
      createSymlinkSync
    };
  },

  9(exports, module) {
    // node_modules\fs-extra\lib\ensure\index.js
    "use strict";
    const file = __require(8 /* ./file */);
    const link = __require(10 /* ./link */);
    const symlink = __require(13 /* ./symlink */);
    module.exports = {
      createFile: file.createFile,
      createFileSync: file.createFileSync,
      ensureFile: file.createFile,
      ensureFileSync: file.createFileSync,
      createLink: link.createLink,
      createLinkSync: link.createLinkSync,
      ensureLink: link.createLink,
      ensureLinkSync: link.createLinkSync,
      createSymlink: symlink.createSymlink,
      createSymlinkSync: symlink.createSymlinkSync,
      ensureSymlink: symlink.createSymlink,
      ensureSymlinkSync: symlink.createSymlinkSync
    };
  },

  37(exports, module) {
    // node_modules\jsonfile\utils.js
    function stringify(obj, options = {}) {
      const EOL = options.EOL || "\n";
      const str = JSON.stringify(obj, options ? options.replacer : null, options.spaces);
      return str.replace(/\n/g, EOL) + EOL;
    }
    function stripBom(content) {
      if (Buffer.isBuffer(content))
        content = content.toString("utf8");
      return content.replace(/^\uFEFF/, "");
    }
    module.exports = {
      stringify,
      stripBom
    };
  },

  36(exports, module) {
    // node_modules\jsonfile\index.js
    let _fs;
    try {
      _fs = __require(33 /* graceful-fs */);
    } catch (_) {
      _fs = require("fs");
    }
    const universalify = __require(38 /* universalify */);
    const {stringify, stripBom} = __require(37 /* ./utils */);
    async function _readFile(file, options = {}) {
      if (typeof options === "string") {
        options = {
          encoding: options
        };
      }
      const fs = options.fs || _fs;
      const shouldThrow = "throws" in options ? options.throws : true;
      let data = await universalify.fromCallback(fs.readFile)(file, options);
      data = stripBom(data);
      let obj;
      try {
        obj = JSON.parse(data, options ? options.reviver : null);
      } catch (err) {
        if (shouldThrow) {
          err.message = `${file}: ${err.message}`;
          throw err;
        } else {
          return null;
        }
      }
      return obj;
    }
    const readFile = universalify.fromPromise(_readFile);
    function readFileSync(file, options = {}) {
      if (typeof options === "string") {
        options = {
          encoding: options
        };
      }
      const fs = options.fs || _fs;
      const shouldThrow = "throws" in options ? options.throws : true;
      try {
        let content = fs.readFileSync(file, options);
        content = stripBom(content);
        return JSON.parse(content, options.reviver);
      } catch (err) {
        if (shouldThrow) {
          err.message = `${file}: ${err.message}`;
          throw err;
        } else {
          return null;
        }
      }
    }
    async function _writeFile(file, obj, options = {}) {
      const fs = options.fs || _fs;
      const str = stringify(obj, options);
      await universalify.fromCallback(fs.writeFile)(file, str, options);
    }
    const writeFile = universalify.fromPromise(_writeFile);
    function writeFileSync(file, obj, options = {}) {
      const fs = options.fs || _fs;
      const str = stringify(obj, options);
      return fs.writeFileSync(file, str, options);
    }
    const jsonfile = {
      readFile,
      readFileSync,
      writeFile,
      writeFileSync
    };
    module.exports = jsonfile;
  },

  17(exports, module) {
    // node_modules\fs-extra\lib\json\jsonfile.js
    "use strict";
    const jsonFile = __require(36 /* jsonfile */);
    module.exports = {
      readJson: jsonFile.readFile,
      readJsonSync: jsonFile.readFileSync,
      writeJson: jsonFile.writeFile,
      writeJsonSync: jsonFile.writeFileSync
    };
  },

  26(exports, module) {
    // node_modules\fs-extra\lib\output\index.js
    "use strict";
    const u = __require(38 /* universalify */).fromCallback;
    const fs = __require(33 /* graceful-fs */);
    const path = require("path");
    const mkdir = __require(20 /* ../mkdirs */);
    const pathExists = __require(27 /* ../path-exists */).pathExists;
    function outputFile(file, data, encoding, callback) {
      if (typeof encoding === "function") {
        callback = encoding;
        encoding = "utf8";
      }
      const dir = path.dirname(file);
      pathExists(dir, (err, itDoes) => {
        if (err)
          return callback(err);
        if (itDoes)
          return fs.writeFile(file, data, encoding, callback);
        mkdir.mkdirs(dir, (err2) => {
          if (err2)
            return callback(err2);
          fs.writeFile(file, data, encoding, callback);
        });
      });
    }
    function outputFileSync(file, ...args) {
      const dir = path.dirname(file);
      if (fs.existsSync(dir)) {
        return fs.writeFileSync(file, ...args);
      }
      mkdir.mkdirsSync(dir);
      fs.writeFileSync(file, ...args);
    }
    module.exports = {
      outputFile: u(outputFile),
      outputFileSync
    };
  },

  19(exports, module) {
    // node_modules\fs-extra\lib\json\output-json.js
    "use strict";
    const {stringify} = __require(37 /* jsonfile/utils */);
    const {outputFile} = __require(26 /* ../output */);
    async function outputJson(file, data, options = {}) {
      const str = stringify(data, options);
      await outputFile(file, str, options);
    }
    module.exports = outputJson;
  },

  18(exports, module) {
    // node_modules\fs-extra\lib\json\output-json-sync.js
    "use strict";
    const {stringify} = __require(37 /* jsonfile/utils */);
    const {outputFileSync} = __require(26 /* ../output */);
    function outputJsonSync(file, data, options) {
      const str = stringify(data, options);
      outputFileSync(file, str, options);
    }
    module.exports = outputJsonSync;
  },

  16(exports, module) {
    // node_modules\fs-extra\lib\json\index.js
    "use strict";
    const u = __require(38 /* universalify */).fromPromise;
    const jsonFile = __require(17 /* ./jsonfile */);
    jsonFile.outputJson = u(__require(19 /* ./output-json */));
    jsonFile.outputJsonSync = __require(18 /* ./output-json-sync */);
    jsonFile.outputJSON = jsonFile.outputJson;
    jsonFile.outputJSONSync = jsonFile.outputJsonSync;
    jsonFile.writeJSON = jsonFile.writeJson;
    jsonFile.writeJSONSync = jsonFile.writeJsonSync;
    jsonFile.readJSON = jsonFile.readJson;
    jsonFile.readJSONSync = jsonFile.readJsonSync;
    module.exports = jsonFile;
  },

  23(exports, module) {
    // node_modules\fs-extra\lib\move-sync\move-sync.js
    "use strict";
    const fs = __require(33 /* graceful-fs */);
    const path = require("path");
    const copySync = __require(4 /* ../copy-sync */).copySync;
    const removeSync = __require(28 /* ../remove */).removeSync;
    const mkdirpSync = __require(20 /* ../mkdirs */).mkdirpSync;
    const stat = __require(30 /* ../util/stat */);
    function moveSync(src, dest, opts) {
      opts = opts || {};
      const overwrite = opts.overwrite || opts.clobber || false;
      const {srcStat} = stat.checkPathsSync(src, dest, "move");
      stat.checkParentPathsSync(src, srcStat, dest, "move");
      mkdirpSync(path.dirname(dest));
      return doRename(src, dest, overwrite);
    }
    function doRename(src, dest, overwrite) {
      if (overwrite) {
        removeSync(dest);
        return rename(src, dest, overwrite);
      }
      if (fs.existsSync(dest))
        throw new Error("dest already exists.");
      return rename(src, dest, overwrite);
    }
    function rename(src, dest, overwrite) {
      try {
        fs.renameSync(src, dest);
      } catch (err) {
        if (err.code !== "EXDEV")
          throw err;
        return moveAcrossDevice(src, dest, overwrite);
      }
    }
    function moveAcrossDevice(src, dest, overwrite) {
      const opts = {
        overwrite,
        errorOnExist: true
      };
      copySync(src, dest, opts);
      return removeSync(src);
    }
    module.exports = moveSync;
  },

  22(exports, module) {
    // node_modules\fs-extra\lib\move-sync\index.js
    "use strict";
    module.exports = {
      moveSync: __require(23 /* ./move-sync */)
    };
  },

  25(exports, module) {
    // node_modules\fs-extra\lib\move\move.js
    "use strict";
    const fs = __require(33 /* graceful-fs */);
    const path = require("path");
    const copy = __require(6 /* ../copy */).copy;
    const remove = __require(28 /* ../remove */).remove;
    const mkdirp = __require(20 /* ../mkdirs */).mkdirp;
    const pathExists = __require(27 /* ../path-exists */).pathExists;
    const stat = __require(30 /* ../util/stat */);
    function move(src, dest, opts, cb) {
      if (typeof opts === "function") {
        cb = opts;
        opts = {};
      }
      const overwrite = opts.overwrite || opts.clobber || false;
      stat.checkPaths(src, dest, "move", (err, stats) => {
        if (err)
          return cb(err);
        const {srcStat} = stats;
        stat.checkParentPaths(src, srcStat, dest, "move", (err2) => {
          if (err2)
            return cb(err2);
          mkdirp(path.dirname(dest), (err3) => {
            if (err3)
              return cb(err3);
            return doRename(src, dest, overwrite, cb);
          });
        });
      });
    }
    function doRename(src, dest, overwrite, cb) {
      if (overwrite) {
        return remove(dest, (err) => {
          if (err)
            return cb(err);
          return rename(src, dest, overwrite, cb);
        });
      }
      pathExists(dest, (err, destExists) => {
        if (err)
          return cb(err);
        if (destExists)
          return cb(new Error("dest already exists."));
        return rename(src, dest, overwrite, cb);
      });
    }
    function rename(src, dest, overwrite, cb) {
      fs.rename(src, dest, (err) => {
        if (!err)
          return cb();
        if (err.code !== "EXDEV")
          return cb(err);
        return moveAcrossDevice(src, dest, overwrite, cb);
      });
    }
    function moveAcrossDevice(src, dest, overwrite, cb) {
      const opts = {
        overwrite,
        errorOnExist: true
      };
      copy(src, dest, opts, (err) => {
        if (err)
          return cb(err);
        return remove(src, cb);
      });
    }
    module.exports = move;
  },

  24(exports, module) {
    // node_modules\fs-extra\lib\move\index.js
    "use strict";
    const u = __require(38 /* universalify */).fromCallback;
    module.exports = {
      move: u(__require(25 /* ./move */))
    };
  },

  15(exports, module) {
    // node_modules\fs-extra\lib\index.js
    "use strict";
    module.exports = {
      ...__require(14 /* ./fs */),
      ...__require(4 /* ./copy-sync */),
      ...__require(6 /* ./copy */),
      ...__require(7 /* ./empty */),
      ...__require(9 /* ./ensure */),
      ...__require(16 /* ./json */),
      ...__require(20 /* ./mkdirs */),
      ...__require(22 /* ./move-sync */),
      ...__require(24 /* ./move */),
      ...__require(26 /* ./output */),
      ...__require(27 /* ./path-exists */),
      ...__require(28 /* ./remove */)
    };
    const fs = require("fs");
    if (Object.getOwnPropertyDescriptor(fs, "promises")) {
      Object.defineProperty(module.exports, "promises", {
        get() {
          return fs.promises;
        }
      });
    }
  },

  39() {
    // src\index.mjs
    const elm_autoencoder = __import(1 /* ../dist/elm-autoencoder.js */);
    const fs = __toModule(require("fs"));
    const fs_extra = __import(15 /* fs-extra */);
    const path = __toModule(require("path"));
    const file = process.argv[2];
    const buffer = fs.default.readFileSync(file);
    const app = elm_autoencoder.default.Elm.Main.init({
      flags: buffer.toString()
    });
    app.ports.outputEncoder.subscribe((value) => {
      const outputPath = path.default.join(path.default.dirname(file), path.default.basename(file, ".elm"), "Encode.elm");
      fs_extra.default.ensureDir(path.default.dirname(outputPath));
      fs.default.writeFileSync(outputPath, value);
    });
    app.ports.outputDecoder.subscribe((value) => {
      const outputPath = path.default.join(path.default.dirname(file), path.default.basename(file, ".elm"), "Decode.elm");
      fs_extra.default.ensureDir(path.default.dirname(outputPath));
      fs.default.writeFileSync(outputPath, value);
    });
  }
};
module.exports = __require(39);
