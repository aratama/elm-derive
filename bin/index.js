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
    // dist\elm-derive.js
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
      var $elm$core$Basics$EQ = {
        $: "EQ"
      };
      var $elm$core$Basics$LT = {
        $: "LT"
      };
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
      var $elm$core$Basics$GT = {
        $: "GT"
      };
      var $elm$core$Basics$identity = function(x) {
        return x;
      };
      var $author$project$Main$ReceiveFile = function(a) {
        return {
          $: "ReceiveFile",
          a
        };
      };
      var $elm$core$Basics$always = F2(function(a, _v0) {
        return a;
      });
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
      var $elm$core$Basics$append = _Utils_append;
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
      var $elm$core$Basics$apL = F2(function(f, x) {
        return f(x);
      });
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
      var $elm$json$Json$Decode$andThen = _Json_andThen;
      var $elm$json$Json$Decode$bool = _Json_decodeBool;
      var $elm$core$Dict$RBEmpty_elm_builtin = {
        $: "RBEmpty_elm_builtin"
      };
      var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
      var $elm$json$Json$Decode$field = _Json_decodeField;
      var $elm$json$Json$Decode$string = _Json_decodeString;
      var $elm$json$Json$Decode$succeed = _Json_succeed;
      var $author$project$Port$receiveFile = _Platform_incomingPort("receiveFile", A2($elm$json$Json$Decode$andThen, function(source) {
        return A2($elm$json$Json$Decode$andThen, function(path) {
          return $elm$json$Json$Decode$succeed({
            path,
            source
          });
        }, A2($elm$json$Json$Decode$field, "path", $elm$json$Json$Decode$string));
      }, A2($elm$json$Json$Decode$field, "source", $elm$json$Json$Decode$string)));
      var $elm$json$Json$Encode$string = _Json_wrap;
      var $author$project$Port$requestFile = _Platform_outgoingPort("requestFile", $elm$json$Json$Encode$string);
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
      var $elm$core$Dict$singleton = F2(function(key, value) {
        return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
      });
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
      var $elm$core$Basics$negate = function(n) {
        return -n;
      };
      var $elm$core$String$slice = _String_slice;
      var $elm$core$String$dropRight = F2(function(n, string) {
        return n < 1 ? string : A3($elm$core$String$slice, 0, -n, string);
      });
      var $elm$json$Json$Encode$null = _Json_encodeNull;
      var $author$project$Port$exit = _Platform_outgoingPort("exit", function($) {
        return $elm$json$Json$Encode$null;
      });
      var $author$project$Port$exitWithError = _Platform_outgoingPort("exitWithError", $elm$json$Json$Encode$string);
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
      var $elm$core$List$map = F2(function(f, xs) {
        return A3($elm$core$List$foldr, F2(function(x, acc) {
          return A2($elm$core$List$cons, f(x), acc);
        }), _List_Nil, xs);
      });
      var $elm$core$List$concatMap = F2(function(f, list) {
        return $elm$core$List$concat(A2($elm$core$List$map, f, list));
      });
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
      var $elm$core$List$isEmpty = function(xs) {
        if (!xs.b) {
          return true;
        } else {
          return false;
        }
      };
      var $author$project$Derive$Util$toErrors = $elm$core$List$filterMap(function(r) {
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
      var $author$project$Derive$Util$concatResults = F2(function(f, inputs) {
        var result = A2($elm$core$List$map, f, inputs);
        var values = A2($elm$core$List$filterMap, $elm$core$Result$toMaybe, result);
        var errors = $author$project$Derive$Util$toErrors(result);
        return $elm$core$List$isEmpty(errors) ? $elm$core$Result$Ok(values) : $elm$core$Result$Err($elm$core$List$concat(errors));
      });
      var $author$project$Elm$Syntax$Node$value = function(_v0) {
        var v = _v0.b;
        return v;
      };
      var $author$project$Elm$Syntax$Module$moduleName = function(m) {
        switch (m.$) {
          case "NormalModule":
            var x = m.a;
            return $author$project$Elm$Syntax$Node$value(x.moduleName);
          case "PortModule":
            var x = m.a;
            return $author$project$Elm$Syntax$Node$value(x.moduleName);
          default:
            var x = m.a;
            return $author$project$Elm$Syntax$Node$value(x.moduleName);
        }
      };
      var $author$project$Derive$Util$nodeValue = $author$project$Elm$Syntax$Node$value;
      var $author$project$Derive$Util$derivedModuleName = function(file) {
        return _Utils_ap($author$project$Elm$Syntax$Module$moduleName($author$project$Derive$Util$nodeValue(file.moduleDefinition)), _List_fromArray(["Derive"]));
      };
      var $stil4m$elm_syntax$Elm$Syntax$Exposing$All = function(a) {
        return {
          $: "All",
          a
        };
      };
      var $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange = {
        end: {
          column: 0,
          row: 0
        },
        start: {
          column: 0,
          row: 0
        }
      };
      var $the_sett$elm_syntax_dsl$Elm$CodeGen$exposeAll = $stil4m$elm_syntax$Elm$Syntax$Exposing$All($stil4m$elm_syntax$Elm$Syntax$Range$emptyRange);
      var $stil4m$elm_syntax$Elm$Syntax$Node$Node = F2(function(a, b) {
        return {
          $: "Node",
          a,
          b
        };
      });
      var $the_sett$elm_syntax_dsl$Util$nodify = function(exp) {
        return A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, exp);
      };
      var $the_sett$elm_syntax_dsl$Util$nodifyAll = $elm$core$List$map($the_sett$elm_syntax_dsl$Util$nodify);
      var $the_sett$elm_syntax_dsl$Elm$CodeGen$file = F4(function(mod, imports, declarations, docs) {
        return {
          comments: docs,
          declarations,
          imports: $the_sett$elm_syntax_dsl$Util$nodifyAll(imports),
          moduleDefinition: $the_sett$elm_syntax_dsl$Util$nodify(mod)
        };
      });
      var $stil4m$elm_syntax$Elm$Syntax$Pattern$AllPattern = {
        $: "AllPattern"
      };
      var $the_sett$elm_syntax_dsl$Elm$CodeGen$allPattern = $stil4m$elm_syntax$Elm$Syntax$Pattern$AllPattern;
      var $elm$core$Char$fromCode = _Char_fromCode;
      var $author$project$Derive$Util$alphabet = function(i) {
        return $elm$core$Char$fromCode(97 + i);
      };
      var $author$project$Derive$Util$alphabets = function(n) {
        return A2($elm$core$List$map, $author$project$Derive$Util$alphabet, A2($elm$core$List$range, 0, n - 1));
      };
      var $stil4m$elm_syntax$Elm$Syntax$Expression$Application = function(a) {
        return {
          $: "Application",
          a
        };
      };
      var $the_sett$elm_syntax_dsl$Elm$CodeGen$apply = function(exprs) {
        return $stil4m$elm_syntax$Elm$Syntax$Expression$Application($the_sett$elm_syntax_dsl$Util$nodifyAll(exprs));
      };
      var $stil4m$elm_syntax$Elm$Syntax$Expression$CaseExpression = function(a) {
        return {
          $: "CaseExpression",
          a
        };
      };
      var $the_sett$elm_syntax_dsl$Elm$CodeGen$caseBlock = F2(function(expr, cases) {
        return {
          cases,
          expression: $the_sett$elm_syntax_dsl$Util$nodify(expr)
        };
      });
      var $the_sett$elm_syntax_dsl$Elm$CodeGen$case_ = F2(function(pattern, expr) {
        return _Utils_Tuple2($the_sett$elm_syntax_dsl$Util$nodify(pattern), $the_sett$elm_syntax_dsl$Util$nodify(expr));
      });
      var $the_sett$elm_syntax_dsl$Elm$CodeGen$caseExpr = F2(function(expr, cases) {
        return $stil4m$elm_syntax$Elm$Syntax$Expression$CaseExpression(A2($the_sett$elm_syntax_dsl$Elm$CodeGen$caseBlock, expr, A2($elm$core$List$map, function(_v0) {
          var pat = _v0.a;
          var body = _v0.b;
          return A2($the_sett$elm_syntax_dsl$Elm$CodeGen$case_, pat, body);
        }, cases)));
      });
      var $stil4m$elm_syntax$Elm$Syntax$Expression$FunctionOrValue = F2(function(a, b) {
        return {
          $: "FunctionOrValue",
          a,
          b
        };
      });
      var $the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun = F2(function(moduleName, name) {
        return A2($stil4m$elm_syntax$Elm$Syntax$Expression$FunctionOrValue, moduleName, name);
      });
      var $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Typed = F2(function(a, b) {
        return {
          $: "Typed",
          a,
          b
        };
      });
      var $the_sett$elm_syntax_dsl$Elm$CodeGen$fqTyped = F3(function(moduleName, name, args) {
        return A2($stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Typed, $the_sett$elm_syntax_dsl$Util$nodify(_Utils_Tuple2(moduleName, name)), $the_sett$elm_syntax_dsl$Util$nodifyAll(args));
      });
      var $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$FunctionTypeAnnotation = F2(function(a, b) {
        return {
          $: "FunctionTypeAnnotation",
          a,
          b
        };
      });
      var $the_sett$elm_syntax_dsl$Elm$CodeGen$funAnn = F2(function(arg, result) {
        return A2($stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$FunctionTypeAnnotation, $the_sett$elm_syntax_dsl$Util$nodify(arg), $the_sett$elm_syntax_dsl$Util$nodify(result));
      });
      var $the_sett$elm_syntax_dsl$Elm$CodeGen$DeclNoComment = function(a) {
        return {
          $: "DeclNoComment",
          a
        };
      };
      var $the_sett$elm_syntax_dsl$Elm$CodeGen$DeclWithComment = F2(function(a, b) {
        return {
          $: "DeclWithComment",
          a,
          b
        };
      });
      var $stil4m$elm_syntax$Elm$Syntax$Declaration$FunctionDeclaration = function(a) {
        return {
          $: "FunctionDeclaration",
          a
        };
      };
      var $elm$core$Maybe$map = F2(function(f, maybe) {
        if (maybe.$ === "Just") {
          var value = maybe.a;
          return $elm$core$Maybe$Just(f(value));
        } else {
          return $elm$core$Maybe$Nothing;
        }
      });
      var $the_sett$elm_syntax_dsl$Util$nodifyMaybe = $elm$core$Maybe$map($the_sett$elm_syntax_dsl$Util$nodify);
      var $the_sett$elm_syntax_dsl$Elm$CodeGen$function = F3(function(docs, sig, decl) {
        return {
          declaration: $the_sett$elm_syntax_dsl$Util$nodify(decl),
          documentation: $the_sett$elm_syntax_dsl$Util$nodifyMaybe(docs),
          signature: $the_sett$elm_syntax_dsl$Util$nodifyMaybe(sig)
        };
      });
      var $the_sett$elm_syntax_dsl$Elm$CodeGen$functionImplementation = F3(function(name, args, expr) {
        return {
          _arguments: $the_sett$elm_syntax_dsl$Util$nodifyAll(args),
          expression: $the_sett$elm_syntax_dsl$Util$nodify(expr),
          name: $the_sett$elm_syntax_dsl$Util$nodify(name)
        };
      });
      var $the_sett$elm_syntax_dsl$Elm$CodeGen$signature = F2(function(name, annotation) {
        return {
          name: $the_sett$elm_syntax_dsl$Util$nodify(name),
          typeAnnotation: $the_sett$elm_syntax_dsl$Util$nodify(annotation)
        };
      });
      var $the_sett$elm_syntax_dsl$Elm$CodeGen$funDecl = F5(function(docs, sig, name, args, expr) {
        if (docs.$ === "Just") {
          var docComment = docs.a;
          return A2($the_sett$elm_syntax_dsl$Elm$CodeGen$DeclWithComment, docComment, function(strDocs) {
            return $stil4m$elm_syntax$Elm$Syntax$Declaration$FunctionDeclaration(A3($the_sett$elm_syntax_dsl$Elm$CodeGen$function, $elm$core$Maybe$Just(strDocs), A2($elm$core$Maybe$map, $the_sett$elm_syntax_dsl$Elm$CodeGen$signature(name), sig), A3($the_sett$elm_syntax_dsl$Elm$CodeGen$functionImplementation, name, args, expr)));
          });
        } else {
          return $the_sett$elm_syntax_dsl$Elm$CodeGen$DeclNoComment($stil4m$elm_syntax$Elm$Syntax$Declaration$FunctionDeclaration(A3($the_sett$elm_syntax_dsl$Elm$CodeGen$function, $elm$core$Maybe$Nothing, A2($elm$core$Maybe$map, $the_sett$elm_syntax_dsl$Elm$CodeGen$signature(name), sig), A3($the_sett$elm_syntax_dsl$Elm$CodeGen$functionImplementation, name, args, expr))));
        }
      });
      var $stil4m$elm_syntax$Elm$Syntax$Expression$RecordAccess = F2(function(a, b) {
        return {
          $: "RecordAccess",
          a,
          b
        };
      });
      var $the_sett$elm_syntax_dsl$Elm$CodeGen$access = F2(function(expr, selector) {
        return A2($stil4m$elm_syntax$Elm$Syntax$Expression$RecordAccess, $the_sett$elm_syntax_dsl$Util$nodify(expr), $the_sett$elm_syntax_dsl$Util$nodify(selector));
      });
      var $elm$core$Result$andThen = F2(function(callback, result) {
        if (result.$ === "Ok") {
          var value = result.a;
          return callback(value);
        } else {
          var msg = result.a;
          return $elm$core$Result$Err(msg);
        }
      });
      var $elm$core$List$filter = F2(function(isGood, list) {
        return A3($elm$core$List$foldr, F2(function(x, xs) {
          return isGood(x) ? A2($elm$core$List$cons, x, xs) : xs;
        }), _List_Nil, list);
      });
      var $stil4m$elm_syntax$Elm$Syntax$Expression$LambdaExpression = function(a) {
        return {
          $: "LambdaExpression",
          a
        };
      };
      var $the_sett$elm_syntax_dsl$Elm$CodeGen$lambda = F2(function(args, expr) {
        return $stil4m$elm_syntax$Elm$Syntax$Expression$LambdaExpression({
          args: $the_sett$elm_syntax_dsl$Util$nodifyAll(args),
          expression: $the_sett$elm_syntax_dsl$Util$nodify(expr)
        });
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
      var $elm$core$Result$map2 = F3(function(func, ra, rb) {
        if (ra.$ === "Err") {
          var x = ra.a;
          return $elm$core$Result$Err(x);
        } else {
          var a = ra.a;
          if (rb.$ === "Err") {
            var x = rb.a;
            return $elm$core$Result$Err(x);
          } else {
            var b = rb.a;
            return $elm$core$Result$Ok(A2(func, a, b));
          }
        }
      });
      var $stil4m$elm_syntax$Elm$Syntax$Pattern$NamedPattern = F2(function(a, b) {
        return {
          $: "NamedPattern",
          a,
          b
        };
      });
      var $the_sett$elm_syntax_dsl$Elm$CodeGen$namedPattern = F2(function(name, patterns) {
        return A2($stil4m$elm_syntax$Elm$Syntax$Pattern$NamedPattern, {
          moduleName: _List_Nil,
          name
        }, $the_sett$elm_syntax_dsl$Util$nodifyAll(patterns));
      });
      var $stil4m$elm_syntax$Elm$Syntax$Expression$ParenthesizedExpression = function(a) {
        return {
          $: "ParenthesizedExpression",
          a
        };
      };
      var $the_sett$elm_syntax_dsl$Elm$CodeGen$parens = function(expr) {
        return $stil4m$elm_syntax$Elm$Syntax$Expression$ParenthesizedExpression($the_sett$elm_syntax_dsl$Util$nodify(expr));
      };
      var $stil4m$elm_syntax$Elm$Syntax$Pattern$VarPattern = function(a) {
        return {
          $: "VarPattern",
          a
        };
      };
      var $the_sett$elm_syntax_dsl$Elm$CodeGen$varPattern = function(name) {
        return $stil4m$elm_syntax$Elm$Syntax$Pattern$VarPattern(name);
      };
      var $author$project$Derive$Ord$generateOrdFromTypeAnnotation = F3(function(depth, file, typeAnnotation) {
        _v0$15:
          while (true) {
            switch (typeAnnotation.$) {
              case "Unit":
                return $elm$core$Result$Ok($the_sett$elm_syntax_dsl$Elm$CodeGen$parens(A2($the_sett$elm_syntax_dsl$Elm$CodeGen$lambda, _List_fromArray([$the_sett$elm_syntax_dsl$Elm$CodeGen$allPattern, $the_sett$elm_syntax_dsl$Elm$CodeGen$allPattern]), A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, "EQ"))));
              case "Tupled":
                if (typeAnnotation.a.b && typeAnnotation.a.b.b && !typeAnnotation.a.b.b.b) {
                  var _v42 = typeAnnotation.a;
                  var _v43 = _v42.a;
                  var fst = _v43.b;
                  var _v44 = _v42.b;
                  var _v45 = _v44.a;
                  var snd = _v45.b;
                  return A3($elm$core$Result$map2, F2(function(fstEncoder, sndEncoder) {
                    return $the_sett$elm_syntax_dsl$Elm$CodeGen$parens($the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, "compareTuple"), fstEncoder, sndEncoder])));
                  }), A3($author$project$Derive$Ord$generateOrdFromTypeAnnotation, depth + 1, file, fst), A3($author$project$Derive$Ord$generateOrdFromTypeAnnotation, depth + 1, file, snd));
                } else {
                  break _v0$15;
                }
              case "Typed":
                if (!typeAnnotation.a.b.a.b) {
                  if (typeAnnotation.b.b) {
                    if (!typeAnnotation.b.b.b) {
                      switch (typeAnnotation.a.b.b) {
                        case "List":
                          var _v11 = typeAnnotation.a;
                          var _v12 = _v11.b;
                          var _v13 = typeAnnotation.b;
                          var _v14 = _v13.a;
                          var content = _v14.b;
                          return A2($elm$core$Result$map, function(encoder) {
                            return $the_sett$elm_syntax_dsl$Elm$CodeGen$parens($the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, "compareList"), encoder])));
                          }, A3($author$project$Derive$Ord$generateOrdFromTypeAnnotation, depth + 1, file, content));
                        case "Array":
                          var _v15 = typeAnnotation.a;
                          var _v16 = _v15.b;
                          var _v17 = typeAnnotation.b;
                          var _v18 = _v17.a;
                          var content = _v18.b;
                          return A2($elm$core$Result$map, function(encoder) {
                            return $the_sett$elm_syntax_dsl$Elm$CodeGen$parens($the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, "compareArray"), encoder])));
                          }, A3($author$project$Derive$Ord$generateOrdFromTypeAnnotation, depth + 1, file, content));
                        case "Set":
                          var _v19 = typeAnnotation.a;
                          var _v20 = _v19.b;
                          var _v21 = typeAnnotation.b;
                          var _v22 = _v21.a;
                          var content = _v22.b;
                          return A2($elm$core$Result$map, function(encoder) {
                            return $the_sett$elm_syntax_dsl$Elm$CodeGen$parens($the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, "compareSet"), encoder])));
                          }, A3($author$project$Derive$Ord$generateOrdFromTypeAnnotation, depth + 1, file, content));
                        case "Maybe":
                          var _v32 = typeAnnotation.a;
                          var _v33 = _v32.b;
                          var _v34 = typeAnnotation.b;
                          var _v35 = _v34.a;
                          var content = _v35.b;
                          return A2($elm$core$Result$map, function(encoder) {
                            return $the_sett$elm_syntax_dsl$Elm$CodeGen$parens($the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, "compareMaybe"), encoder])));
                          }, A3($author$project$Derive$Ord$generateOrdFromTypeAnnotation, depth + 1, file, content));
                        default:
                          break _v0$15;
                      }
                    } else {
                      if (!typeAnnotation.b.b.b.b) {
                        switch (typeAnnotation.a.b.b) {
                          case "Dict":
                            if (typeAnnotation.b.a.b.$ === "Typed" && !typeAnnotation.b.a.b.a.b.a.b && typeAnnotation.b.a.b.a.b.b === "String") {
                              var _v23 = typeAnnotation.a;
                              var _v24 = _v23.b;
                              var _v25 = typeAnnotation.b;
                              var _v26 = _v25.a;
                              var _v27 = _v26.b;
                              var _v28 = _v27.a;
                              var _v29 = _v28.b;
                              var _v30 = _v25.b;
                              var _v31 = _v30.a;
                              var content = _v31.b;
                              return A2($elm$core$Result$map, function(encoder) {
                                return $the_sett$elm_syntax_dsl$Elm$CodeGen$parens($the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, "compareDict"), encoder])));
                              }, A3($author$project$Derive$Ord$generateOrdFromTypeAnnotation, depth + 1, file, content));
                            } else {
                              break _v0$15;
                            }
                          case "Result":
                            var _v36 = typeAnnotation.a;
                            var _v37 = _v36.b;
                            var _v38 = typeAnnotation.b;
                            var _v39 = _v38.a;
                            var err = _v39.b;
                            var _v40 = _v38.b;
                            var _v41 = _v40.a;
                            var ok = _v41.b;
                            return A3($elm$core$Result$map2, F2(function(errEncoder, okEncoder) {
                              return $the_sett$elm_syntax_dsl$Elm$CodeGen$parens($the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, "compareResult"), errEncoder, okEncoder])));
                            }), A3($author$project$Derive$Ord$generateOrdFromTypeAnnotation, depth + 1, file, err), A3($author$project$Derive$Ord$generateOrdFromTypeAnnotation, depth + 1, file, ok));
                          default:
                            break _v0$15;
                        }
                      } else {
                        break _v0$15;
                      }
                    }
                  } else {
                    switch (typeAnnotation.a.b.b) {
                      case "Bool":
                        var _v1 = typeAnnotation.a;
                        var _v2 = _v1.b;
                        return $elm$core$Result$Ok(A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, "compareBool"));
                      case "Int":
                        var _v3 = typeAnnotation.a;
                        var _v4 = _v3.b;
                        return $elm$core$Result$Ok(A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, "compare"));
                      case "Float":
                        var _v5 = typeAnnotation.a;
                        var _v6 = _v5.b;
                        return $elm$core$Result$Ok(A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, "compare"));
                      case "String":
                        var _v7 = typeAnnotation.a;
                        var _v8 = _v7.b;
                        return $elm$core$Result$Ok(A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, "compare"));
                      case "Char":
                        var _v9 = typeAnnotation.a;
                        var _v10 = _v9.b;
                        return $elm$core$Result$Ok(A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, "compare"));
                      default:
                        var _v46 = typeAnnotation.a;
                        var _v47 = _v46.b;
                        var moduleMemberTypeName = _v47.b;
                        var filtered = A2($elm$core$List$filter, function(declarationNode) {
                          var declaration = $author$project$Derive$Util$nodeValue(declarationNode);
                          switch (declaration.$) {
                            case "AliasDeclaration":
                              var ta = declaration.a;
                              return _Utils_eq($author$project$Derive$Util$nodeValue(ta.name), moduleMemberTypeName);
                            case "CustomTypeDeclaration":
                              var tm = declaration.a;
                              return _Utils_eq($author$project$Derive$Util$nodeValue(tm.name), moduleMemberTypeName);
                            default:
                              return false;
                          }
                        }, file.declarations);
                        if (!filtered.b) {
                          return $elm$core$Result$Err(_List_fromArray(["Encoder: Unknown Data Type: `" + (moduleMemberTypeName + "`")]));
                        } else {
                          return $elm$core$Result$Ok(A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, "compare" + moduleMemberTypeName));
                        }
                    }
                  }
                } else {
                  break _v0$15;
                }
              case "Record":
                var recordFields = typeAnnotation.a;
                var go = F2(function(goDepth, fields) {
                  if (!fields.b) {
                    return $elm$core$Result$Ok(A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, "EQ"));
                  } else {
                    if (!fields.b.b) {
                      var _v51 = fields.a;
                      var _v52 = _v51.a;
                      var fieldName = _v52.b;
                      var _v53 = _v51.b;
                      var fieldType = _v53.b;
                      return A2($elm$core$Result$map, function(ordFunction) {
                        return $the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([ordFunction, A2($the_sett$elm_syntax_dsl$Elm$CodeGen$access, A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, "lhs" + $elm$core$String$fromInt(depth)), fieldName), A2($the_sett$elm_syntax_dsl$Elm$CodeGen$access, A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, "rhs" + $elm$core$String$fromInt(depth)), fieldName)]));
                      }, A3($author$project$Derive$Ord$generateOrdFromTypeAnnotation, depth + 1, file, fieldType));
                    } else {
                      var _v54 = fields.a;
                      var _v55 = _v54.a;
                      var fieldName = _v55.b;
                      var _v56 = _v54.b;
                      var fieldType = _v56.b;
                      var xs = fields.b;
                      return A2($elm$core$Result$andThen, function(ordFunction) {
                        return A2($elm$core$Result$map, function(body) {
                          return A2($the_sett$elm_syntax_dsl$Elm$CodeGen$caseExpr, $the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([ordFunction, A2($the_sett$elm_syntax_dsl$Elm$CodeGen$access, A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, "lhs" + $elm$core$String$fromInt(depth)), fieldName), A2($the_sett$elm_syntax_dsl$Elm$CodeGen$access, A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, "rhs" + $elm$core$String$fromInt(depth)), fieldName)])), _List_fromArray([_Utils_Tuple2(A2($the_sett$elm_syntax_dsl$Elm$CodeGen$namedPattern, "EQ", _List_Nil), body), _Utils_Tuple2($the_sett$elm_syntax_dsl$Elm$CodeGen$varPattern("o" + $elm$core$String$fromInt(goDepth)), A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, "o" + $elm$core$String$fromInt(goDepth)))]));
                        }, A2(go, goDepth + 1, xs));
                      }, A3($author$project$Derive$Ord$generateOrdFromTypeAnnotation, depth + 1, file, fieldType));
                    }
                  }
                });
                return A2($elm$core$Result$map, function(body) {
                  return $the_sett$elm_syntax_dsl$Elm$CodeGen$parens(A2($the_sett$elm_syntax_dsl$Elm$CodeGen$lambda, _List_fromArray([$the_sett$elm_syntax_dsl$Elm$CodeGen$varPattern("lhs" + $elm$core$String$fromInt(depth)), $the_sett$elm_syntax_dsl$Elm$CodeGen$varPattern("rhs" + $elm$core$String$fromInt(depth))]), body));
                }, A2(go, 0, A2($elm$core$List$map, $author$project$Derive$Util$nodeValue, recordFields)));
              default:
                break _v0$15;
            }
          }
        return $elm$core$Result$Ok(A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, "<<<TODO>>>"));
      });
      var $stil4m$elm_syntax$Elm$Syntax$Pattern$ParenthesizedPattern = function(a) {
        return {
          $: "ParenthesizedPattern",
          a
        };
      };
      var $the_sett$elm_syntax_dsl$Elm$CodeGen$parensPattern = function(pattern) {
        return $stil4m$elm_syntax$Elm$Syntax$Pattern$ParenthesizedPattern($the_sett$elm_syntax_dsl$Util$nodify(pattern));
      };
      var $stil4m$elm_syntax$Elm$Syntax$Expression$Literal = function(a) {
        return {
          $: "Literal",
          a
        };
      };
      var $the_sett$elm_syntax_dsl$Elm$CodeGen$string = function(literal) {
        return $stil4m$elm_syntax$Elm$Syntax$Expression$Literal(literal);
      };
      var $stil4m$elm_syntax$Elm$Syntax$Expression$TupledExpression = function(a) {
        return {
          $: "TupledExpression",
          a
        };
      };
      var $the_sett$elm_syntax_dsl$Elm$CodeGen$tuple = function(exprs) {
        return $stil4m$elm_syntax$Elm$Syntax$Expression$TupledExpression($the_sett$elm_syntax_dsl$Util$nodifyAll(exprs));
      };
      var $stil4m$elm_syntax$Elm$Syntax$Pattern$TuplePattern = function(a) {
        return {
          $: "TuplePattern",
          a
        };
      };
      var $the_sett$elm_syntax_dsl$Elm$CodeGen$tuplePattern = function(patterns) {
        return $stil4m$elm_syntax$Elm$Syntax$Pattern$TuplePattern($the_sett$elm_syntax_dsl$Util$nodifyAll(patterns));
      };
      var $author$project$Derive$Ord$generateOrdFromDeclaration = F2(function(file, declaration) {
        var typeName = function() {
          switch (declaration.$) {
            case "AliasDeclaration":
              var aliasDecl2 = declaration.a;
              return $author$project$Derive$Util$nodeValue(aliasDecl2.name);
            case "CustomTypeDeclaration":
              var customTypeDecl2 = declaration.a;
              return $author$project$Derive$Util$nodeValue(customTypeDecl2.name);
            default:
              return "<<<ERROR>>>";
          }
        }();
        var name = "compare" + typeName;
        switch (declaration.$) {
          case "AliasDeclaration":
            var aliasDecl = declaration.a;
            return A2($elm$core$Result$map, function(encoder) {
              var typeAnnotation2 = A2($the_sett$elm_syntax_dsl$Elm$CodeGen$funAnn, A3($the_sett$elm_syntax_dsl$Elm$CodeGen$fqTyped, _List_Nil, typeName, _List_Nil), A2($the_sett$elm_syntax_dsl$Elm$CodeGen$funAnn, A3($the_sett$elm_syntax_dsl$Elm$CodeGen$fqTyped, _List_Nil, typeName, _List_Nil), A3($the_sett$elm_syntax_dsl$Elm$CodeGen$fqTyped, _List_Nil, "Order", _List_Nil)));
              return _List_fromArray([A5($the_sett$elm_syntax_dsl$Elm$CodeGen$funDecl, $elm$core$Maybe$Nothing, $elm$core$Maybe$Just(typeAnnotation2), name, _List_Nil, encoder)]);
            }, A3($author$project$Derive$Ord$generateOrdFromTypeAnnotation, 0, file, $author$project$Derive$Util$nodeValue(aliasDecl.typeAnnotation)));
          case "CustomTypeDeclaration":
            var customTypeDecl = declaration.a;
            var _v1 = customTypeDecl.constructors;
            if (_v1.b && !_v1.b.b) {
              var _v2 = _v1.a;
              var constructor = _v2.b;
              var typeAnnotation = A2($the_sett$elm_syntax_dsl$Elm$CodeGen$funAnn, A3($the_sett$elm_syntax_dsl$Elm$CodeGen$fqTyped, _List_Nil, typeName, _List_Nil), A2($the_sett$elm_syntax_dsl$Elm$CodeGen$funAnn, A3($the_sett$elm_syntax_dsl$Elm$CodeGen$fqTyped, _List_Nil, typeName, _List_Nil), A3($the_sett$elm_syntax_dsl$Elm$CodeGen$fqTyped, _List_Nil, "Order", _List_Nil)));
              var go = function(_arguments) {
                if (!_arguments.b) {
                  return $elm$core$Result$Ok(A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, "EQ"));
                } else {
                  if (!_arguments.b.b) {
                    var _v4 = _arguments.a;
                    var argument = _v4.b;
                    return A2($elm$core$Result$map, function(expr) {
                      return $the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([expr, A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, "lhs"), A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, "rhs")]));
                    }, A3($author$project$Derive$Ord$generateOrdFromTypeAnnotation, 0, file, argument));
                  } else {
                    var x = _arguments.a;
                    var xs = _arguments.b;
                    return $elm$core$Result$Ok($the_sett$elm_syntax_dsl$Elm$CodeGen$string("<<TODO>>"));
                  }
                }
              };
              return A2($elm$core$Result$map, function(argumentExpression) {
                return _List_fromArray([A5($the_sett$elm_syntax_dsl$Elm$CodeGen$funDecl, $elm$core$Maybe$Nothing, $elm$core$Maybe$Just(typeAnnotation), name, _List_fromArray([$the_sett$elm_syntax_dsl$Elm$CodeGen$parensPattern(A2($the_sett$elm_syntax_dsl$Elm$CodeGen$namedPattern, $author$project$Derive$Util$nodeValue(constructor.name), _List_fromArray([$the_sett$elm_syntax_dsl$Elm$CodeGen$varPattern("lhs")]))), $the_sett$elm_syntax_dsl$Elm$CodeGen$parensPattern(A2($the_sett$elm_syntax_dsl$Elm$CodeGen$namedPattern, $author$project$Derive$Util$nodeValue(constructor.name), _List_fromArray([$the_sett$elm_syntax_dsl$Elm$CodeGen$varPattern("rhs")])))]), argumentExpression)]);
              }, go(constructor._arguments));
            } else {
              var variants = A2($elm$core$List$indexedMap, F2(function(constructorIndex, constructorNode) {
                var constructor2 = $author$project$Derive$Util$nodeValue(constructorNode);
                var fields = A2($author$project$Derive$Util$concatResults, function(_v7) {
                  var arg = _v7.b;
                  return A3($author$project$Derive$Ord$generateOrdFromTypeAnnotation, 0, file, arg);
                }, constructor2._arguments);
                var abc = function(prefix) {
                  return A2($elm$core$List$map, function(c) {
                    return _Utils_ap(prefix, $elm$core$String$fromChar(c));
                  }, $author$project$Derive$Util$alphabets($elm$core$List$length(constructor2._arguments)));
                };
                var constructorCase = A2($elm$core$Result$map, function(field) {
                  var lt = _Utils_Tuple2($the_sett$elm_syntax_dsl$Elm$CodeGen$tuplePattern(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$namedPattern, $author$project$Derive$Util$nodeValue(constructor2.name), A2($elm$core$List$map, function(c) {
                    return $the_sett$elm_syntax_dsl$Elm$CodeGen$varPattern(c);
                  }, abc("l"))), $the_sett$elm_syntax_dsl$Elm$CodeGen$allPattern])), A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, "LT"));
                  var gt = _Utils_Tuple2($the_sett$elm_syntax_dsl$Elm$CodeGen$tuplePattern(_List_fromArray([$the_sett$elm_syntax_dsl$Elm$CodeGen$allPattern, A2($the_sett$elm_syntax_dsl$Elm$CodeGen$namedPattern, $author$project$Derive$Util$nodeValue(constructor2.name), A2($elm$core$List$map, function(c) {
                    return $the_sett$elm_syntax_dsl$Elm$CodeGen$varPattern(c);
                  }, abc("l")))])), A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, "GT"));
                  var go2 = F2(function(i, fs) {
                    if (!fs.b) {
                      return A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, "EQ");
                    } else {
                      if (!fs.b.b) {
                        var compareT = fs.a;
                        return $the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([compareT, A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, "l" + $elm$core$String$fromChar($author$project$Derive$Util$alphabet(i))), A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, "r" + $elm$core$String$fromChar($author$project$Derive$Util$alphabet(i)))]));
                      } else {
                        var ord = fs.a;
                        var ords = fs.b;
                        return A2($the_sett$elm_syntax_dsl$Elm$CodeGen$caseExpr, $the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([ord, A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, "l" + $elm$core$String$fromChar($author$project$Derive$Util$alphabet(i))), A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, "r" + $elm$core$String$fromChar($author$project$Derive$Util$alphabet(i)))])), _List_fromArray([_Utils_Tuple2(A2($the_sett$elm_syntax_dsl$Elm$CodeGen$namedPattern, "EQ", _List_Nil), A2(go2, i + 1, ords)), _Utils_Tuple2($the_sett$elm_syntax_dsl$Elm$CodeGen$varPattern("order"), A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, "order"))]));
                      }
                    }
                  });
                  var eq = _Utils_Tuple2($the_sett$elm_syntax_dsl$Elm$CodeGen$tuplePattern(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$namedPattern, $author$project$Derive$Util$nodeValue(constructor2.name), A2($elm$core$List$map, function(c) {
                    return $the_sett$elm_syntax_dsl$Elm$CodeGen$varPattern(c);
                  }, abc("l"))), A2($the_sett$elm_syntax_dsl$Elm$CodeGen$namedPattern, $author$project$Derive$Util$nodeValue(constructor2.name), A2($elm$core$List$map, function(c) {
                    return $the_sett$elm_syntax_dsl$Elm$CodeGen$varPattern(c);
                  }, abc("r")))])), A2(go2, 0, field));
                  return _Utils_cmp(constructorIndex, $elm$core$List$length(customTypeDecl.constructors) - 1) < 0 ? _List_fromArray([eq, lt, gt]) : _List_fromArray([eq]);
                }, fields);
                var _v5 = customTypeDecl.constructors;
                if (!_v5.b) {
                  return constructorCase;
                } else {
                  return constructorCase;
                }
              }), customTypeDecl.constructors);
              return A2($elm$core$Result$map, function(casesList) {
                var typeAnnotation2 = A2($the_sett$elm_syntax_dsl$Elm$CodeGen$funAnn, A3($the_sett$elm_syntax_dsl$Elm$CodeGen$fqTyped, _List_Nil, typeName, _List_Nil), A2($the_sett$elm_syntax_dsl$Elm$CodeGen$funAnn, A3($the_sett$elm_syntax_dsl$Elm$CodeGen$fqTyped, _List_Nil, typeName, _List_Nil), A3($the_sett$elm_syntax_dsl$Elm$CodeGen$fqTyped, _List_Nil, "Order", _List_Nil)));
                return _List_fromArray([A5($the_sett$elm_syntax_dsl$Elm$CodeGen$funDecl, $elm$core$Maybe$Nothing, $elm$core$Maybe$Just(typeAnnotation2), name, _List_fromArray([$the_sett$elm_syntax_dsl$Elm$CodeGen$varPattern("lhs"), $the_sett$elm_syntax_dsl$Elm$CodeGen$varPattern("rhs")]), A2($the_sett$elm_syntax_dsl$Elm$CodeGen$caseExpr, $the_sett$elm_syntax_dsl$Elm$CodeGen$tuple(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, "lhs"), A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, "rhs")])), $elm$core$List$concat(casesList)))]);
              }, A2($author$project$Derive$Util$concatResults, $elm$core$Basics$identity, variants));
            }
          default:
            return $elm$core$Result$Ok(_List_Nil);
        }
      });
      var $author$project$Derive$Ord$generate = function(file) {
        return A2($elm$core$Result$map, $elm$core$List$concat, A2($author$project$Derive$Util$concatResults, function(node) {
          return A2($author$project$Derive$Ord$generateOrdFromDeclaration, file, $author$project$Derive$Util$nodeValue(node));
        }, file.declarations));
      };
      var $the_sett$elm_syntax_dsl$Elm$CodeGen$BinOp = F3(function(a, b, c) {
        return {
          $: "BinOp",
          a,
          b,
          c
        };
      });
      var $stil4m$elm_syntax$Elm$Syntax$Infix$Right = {
        $: "Right"
      };
      var $the_sett$elm_syntax_dsl$Elm$CodeGen$infixRight = $stil4m$elm_syntax$Elm$Syntax$Infix$Right;
      var $the_sett$elm_syntax_dsl$Elm$CodeGen$append = A3($the_sett$elm_syntax_dsl$Elm$CodeGen$BinOp, "++", $the_sett$elm_syntax_dsl$Elm$CodeGen$infixRight, 5);
      var $stil4m$elm_syntax$Elm$Syntax$Expression$OperatorApplication = F4(function(a, b, c, d) {
        return {
          $: "OperatorApplication",
          a,
          b,
          c,
          d
        };
      });
      var $the_sett$elm_syntax_dsl$Elm$CodeGen$applyBinOp = F3(function(exprl, _v0, exprr) {
        var symbol = _v0.a;
        var dir = _v0.b;
        return A4($stil4m$elm_syntax$Elm$Syntax$Expression$OperatorApplication, symbol, dir, $the_sett$elm_syntax_dsl$Util$nodify(exprl), $the_sett$elm_syntax_dsl$Util$nodify(exprr));
      });
      var $the_sett$elm_syntax_dsl$Elm$CodeGen$fqVal = F2(function(moduleName, name) {
        return A2($stil4m$elm_syntax$Elm$Syntax$Expression$FunctionOrValue, moduleName, name);
      });
      var $stil4m$elm_syntax$Elm$Syntax$Expression$Integer = function(a) {
        return {
          $: "Integer",
          a
        };
      };
      var $the_sett$elm_syntax_dsl$Elm$CodeGen$int = function(intVal) {
        return $stil4m$elm_syntax$Elm$Syntax$Expression$Integer(intVal);
      };
      var $stil4m$elm_syntax$Elm$Syntax$Expression$RecordExpr = function(a) {
        return {
          $: "RecordExpr",
          a
        };
      };
      var $the_sett$elm_syntax_dsl$Elm$CodeGen$recordSetter = F2(function(field, expr) {
        return _Utils_Tuple2($the_sett$elm_syntax_dsl$Util$nodify(field), $the_sett$elm_syntax_dsl$Util$nodify(expr));
      });
      var $the_sett$elm_syntax_dsl$Elm$CodeGen$record = function(setters) {
        return $stil4m$elm_syntax$Elm$Syntax$Expression$RecordExpr($the_sett$elm_syntax_dsl$Util$nodifyAll(A2($elm$core$List$map, function(_v0) {
          var fieldName = _v0.a;
          var expr = _v0.b;
          return A2($the_sett$elm_syntax_dsl$Elm$CodeGen$recordSetter, fieldName, expr);
        }, setters)));
      };
      var $author$project$Derive$Util$objectConstructor = function(fields) {
        var argumentNames = A2($elm$core$List$map, function(_v0) {
          var _v1 = _v0.b;
          var _v2 = _v1.a;
          var name = _v2.b;
          return name;
        }, fields);
        return $the_sett$elm_syntax_dsl$Elm$CodeGen$parens(A2($the_sett$elm_syntax_dsl$Elm$CodeGen$lambda, A2($elm$core$List$map, $the_sett$elm_syntax_dsl$Elm$CodeGen$varPattern, argumentNames), $the_sett$elm_syntax_dsl$Elm$CodeGen$record(A2($elm$core$List$map, function(c) {
          return _Utils_Tuple2(c, A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqVal, _List_Nil, c));
        }, argumentNames))));
      };
      var $stil4m$elm_syntax$Elm$Syntax$Infix$Left = {
        $: "Left"
      };
      var $the_sett$elm_syntax_dsl$Elm$CodeGen$infixLeft = $stil4m$elm_syntax$Elm$Syntax$Infix$Left;
      var $the_sett$elm_syntax_dsl$Elm$CodeGen$piper = A3($the_sett$elm_syntax_dsl$Elm$CodeGen$BinOp, "|>", $the_sett$elm_syntax_dsl$Elm$CodeGen$infixLeft, 0);
      var $stil4m$elm_syntax$Elm$Syntax$Expression$UnitExpr = {
        $: "UnitExpr"
      };
      var $the_sett$elm_syntax_dsl$Elm$CodeGen$unit = $stil4m$elm_syntax$Elm$Syntax$Expression$UnitExpr;
      var $author$project$Derive$Decoder$generateDecoderFromTypeAnnotation = F2(function(file, typeAnnotation) {
        _v0$15:
          while (true) {
            switch (typeAnnotation.$) {
              case "Unit":
                return $elm$core$Result$Ok($the_sett$elm_syntax_dsl$Elm$CodeGen$parens($the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqVal, _List_fromArray(["Json", "Decode"]), "succeed"), $the_sett$elm_syntax_dsl$Elm$CodeGen$unit]))));
              case "Tupled":
                if (typeAnnotation.a.b && typeAnnotation.a.b.b && !typeAnnotation.a.b.b.b) {
                  var _v42 = typeAnnotation.a;
                  var _v43 = _v42.a;
                  var fst = _v43.b;
                  var _v44 = _v42.b;
                  var _v45 = _v44.a;
                  var snd = _v45.b;
                  return A3($elm$core$Result$map2, F2(function(fstDecoder, sndDecoder) {
                    return $the_sett$elm_syntax_dsl$Elm$CodeGen$parens($the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqVal, _List_fromArray(["Json", "Decode"]), "map2"), A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqVal, _List_fromArray(["Tuple"]), "pair"), $the_sett$elm_syntax_dsl$Elm$CodeGen$parens($the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqVal, _List_fromArray(["Json", "Decode"]), "index"), $the_sett$elm_syntax_dsl$Elm$CodeGen$int(0), fstDecoder]))), $the_sett$elm_syntax_dsl$Elm$CodeGen$parens($the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqVal, _List_fromArray(["Json", "Decode"]), "index"), $the_sett$elm_syntax_dsl$Elm$CodeGen$int(1), sndDecoder])))])));
                  }), A2($author$project$Derive$Decoder$generateDecoderFromTypeAnnotation, file, fst), A2($author$project$Derive$Decoder$generateDecoderFromTypeAnnotation, file, snd));
                } else {
                  break _v0$15;
                }
              case "Typed":
                if (!typeAnnotation.a.b.a.b) {
                  if (typeAnnotation.b.b) {
                    if (!typeAnnotation.b.b.b) {
                      switch (typeAnnotation.a.b.b) {
                        case "List":
                          var _v11 = typeAnnotation.a;
                          var _v12 = _v11.b;
                          var _v13 = typeAnnotation.b;
                          var _v14 = _v13.a;
                          var content = _v14.b;
                          return A2($elm$core$Result$map, function(decoder) {
                            return $the_sett$elm_syntax_dsl$Elm$CodeGen$parens($the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqVal, _List_fromArray(["Json", "Decode"]), "list"), decoder])));
                          }, A2($author$project$Derive$Decoder$generateDecoderFromTypeAnnotation, file, content));
                        case "Array":
                          var _v15 = typeAnnotation.a;
                          var _v16 = _v15.b;
                          var _v17 = typeAnnotation.b;
                          var _v18 = _v17.a;
                          var content = _v18.b;
                          return A2($elm$core$Result$map, function(decoder) {
                            return $the_sett$elm_syntax_dsl$Elm$CodeGen$parens($the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqVal, _List_fromArray(["Json", "Decode"]), "array"), decoder])));
                          }, A2($author$project$Derive$Decoder$generateDecoderFromTypeAnnotation, file, content));
                        case "Set":
                          var _v19 = typeAnnotation.a;
                          var _v20 = _v19.b;
                          var _v21 = typeAnnotation.b;
                          var _v22 = _v21.a;
                          var content = _v22.b;
                          return A2($elm$core$Result$map, function(decoder) {
                            return $the_sett$elm_syntax_dsl$Elm$CodeGen$parens($the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqVal, _List_fromArray(["Json", "Decode"]), "map"), A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqVal, _List_fromArray(["Set"]), "fromList"), $the_sett$elm_syntax_dsl$Elm$CodeGen$parens($the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqVal, _List_fromArray(["Json", "Decode"]), "list"), decoder])))])));
                          }, A2($author$project$Derive$Decoder$generateDecoderFromTypeAnnotation, file, content));
                        case "Maybe":
                          var _v32 = typeAnnotation.a;
                          var _v33 = _v32.b;
                          var _v34 = typeAnnotation.b;
                          var _v35 = _v34.a;
                          var content = _v35.b;
                          return A2($elm$core$Result$map, function(decoder) {
                            return $the_sett$elm_syntax_dsl$Elm$CodeGen$parens($the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqVal, _List_fromArray(["Json", "Decode"]), "maybe"), decoder])));
                          }, A2($author$project$Derive$Decoder$generateDecoderFromTypeAnnotation, file, content));
                        default:
                          break _v0$15;
                      }
                    } else {
                      if (!typeAnnotation.b.b.b.b) {
                        switch (typeAnnotation.a.b.b) {
                          case "Dict":
                            if (typeAnnotation.b.a.b.$ === "Typed" && !typeAnnotation.b.a.b.a.b.a.b && typeAnnotation.b.a.b.a.b.b === "String") {
                              var _v23 = typeAnnotation.a;
                              var _v24 = _v23.b;
                              var _v25 = typeAnnotation.b;
                              var _v26 = _v25.a;
                              var _v27 = _v26.b;
                              var _v28 = _v27.a;
                              var _v29 = _v28.b;
                              var _v30 = _v25.b;
                              var _v31 = _v30.a;
                              var content = _v31.b;
                              return A2($elm$core$Result$map, function(decoder) {
                                return $the_sett$elm_syntax_dsl$Elm$CodeGen$parens($the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqVal, _List_fromArray(["Json", "Decode"]), "dict"), decoder])));
                              }, A2($author$project$Derive$Decoder$generateDecoderFromTypeAnnotation, file, content));
                            } else {
                              break _v0$15;
                            }
                          case "Result":
                            var _v36 = typeAnnotation.a;
                            var _v37 = _v36.b;
                            var _v38 = typeAnnotation.b;
                            var _v39 = _v38.a;
                            var err = _v39.b;
                            var _v40 = _v38.b;
                            var _v41 = _v40.a;
                            var ok = _v41.b;
                            return A3($elm$core$Result$map2, F2(function(errDecoder, okDecoder) {
                              return $the_sett$elm_syntax_dsl$Elm$CodeGen$parens($the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqVal, _List_Nil, "decodeResult"), errDecoder, okDecoder])));
                            }), A2($author$project$Derive$Decoder$generateDecoderFromTypeAnnotation, file, err), A2($author$project$Derive$Decoder$generateDecoderFromTypeAnnotation, file, ok));
                          default:
                            break _v0$15;
                        }
                      } else {
                        break _v0$15;
                      }
                    }
                  } else {
                    switch (typeAnnotation.a.b.b) {
                      case "Bool":
                        var _v1 = typeAnnotation.a;
                        var _v2 = _v1.b;
                        return $elm$core$Result$Ok(A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqVal, _List_fromArray(["Json", "Decode"]), "bool"));
                      case "Int":
                        var _v3 = typeAnnotation.a;
                        var _v4 = _v3.b;
                        return $elm$core$Result$Ok(A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqVal, _List_fromArray(["Json", "Decode"]), "int"));
                      case "Float":
                        var _v5 = typeAnnotation.a;
                        var _v6 = _v5.b;
                        return $elm$core$Result$Ok(A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqVal, _List_fromArray(["Json", "Decode"]), "float"));
                      case "String":
                        var _v7 = typeAnnotation.a;
                        var _v8 = _v7.b;
                        return $elm$core$Result$Ok(A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqVal, _List_fromArray(["Json", "Decode"]), "string"));
                      case "Char":
                        var _v9 = typeAnnotation.a;
                        var _v10 = _v9.b;
                        return $elm$core$Result$Ok(A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqVal, _List_Nil, "decodeChar"));
                      default:
                        var _v46 = typeAnnotation.a;
                        var _v47 = _v46.b;
                        var name = _v47.b;
                        return $elm$core$Result$Ok(A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqVal, _List_Nil, "decode" + name));
                    }
                  }
                } else {
                  break _v0$15;
                }
              case "Record":
                var fields = typeAnnotation.a;
                var fieldToDecoder = function(_v58) {
                  var _v59 = _v58.b;
                  var _v60 = _v59.a;
                  var name2 = _v60.b;
                  var _v61 = _v59.b;
                  var annotation = _v61.b;
                  return A2($author$project$Derive$Decoder$generateDecoderFromTypeAnnotation, file, annotation);
                };
                return A2($elm$core$Result$map, function(fieldDecoders) {
                  return $the_sett$elm_syntax_dsl$Elm$CodeGen$parens(function() {
                    if (!fieldDecoders.b) {
                      return $the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqVal, _List_fromArray(["Json", "Decode"]), "succeed"), $the_sett$elm_syntax_dsl$Elm$CodeGen$record(_List_Nil)]));
                    } else {
                      if (!fieldDecoders.b.b) {
                        var fieldDecoder = fieldDecoders.a;
                        var recordField = $author$project$Derive$Util$nodeValue(fieldDecoder.field);
                        var _v49 = recordField;
                        var _v50 = _v49.a;
                        var name2 = _v50.b;
                        return $the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqVal, _List_fromArray(["Json", "Decode"]), "map"), $author$project$Derive$Util$objectConstructor(fields), $the_sett$elm_syntax_dsl$Elm$CodeGen$parens($the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqVal, _List_fromArray(["Json", "Decode"]), "field"), $the_sett$elm_syntax_dsl$Elm$CodeGen$string(name2), fieldDecoder.decoder])))]));
                      } else {
                        var go = function(entries) {
                          if (!entries.b) {
                            return $the_sett$elm_syntax_dsl$Elm$CodeGen$unit;
                          } else {
                            if (!entries.b.b) {
                              var entry = entries.a;
                              var _v52 = entry.field;
                              var _v53 = _v52.b;
                              var _v54 = _v53.a;
                              var name3 = _v54.b;
                              return $the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqVal, _List_fromArray(["Json", "Decode", "Extra"]), "andMap"), $the_sett$elm_syntax_dsl$Elm$CodeGen$parens($the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqVal, _List_fromArray(["Json", "Decode"]), "field"), $the_sett$elm_syntax_dsl$Elm$CodeGen$string(name3), entry.decoder])))]));
                            } else {
                              var d = entries.a;
                              var ds = entries.b;
                              var _v55 = d.field;
                              var _v56 = _v55.b;
                              var _v57 = _v56.a;
                              var name3 = _v57.b;
                              return A3($the_sett$elm_syntax_dsl$Elm$CodeGen$applyBinOp, $the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqVal, _List_fromArray(["Json", "Decode", "Extra"]), "andMap"), $the_sett$elm_syntax_dsl$Elm$CodeGen$parens($the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqVal, _List_fromArray(["Json", "Decode"]), "field"), $the_sett$elm_syntax_dsl$Elm$CodeGen$string(name3), d.decoder])))])), $the_sett$elm_syntax_dsl$Elm$CodeGen$piper, go(ds));
                            }
                          }
                        };
                        return A3($the_sett$elm_syntax_dsl$Elm$CodeGen$applyBinOp, $the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqVal, _List_fromArray(["Json", "Decode"]), "succeed"), $author$project$Derive$Util$objectConstructor(fields)])), $the_sett$elm_syntax_dsl$Elm$CodeGen$piper, go(fieldDecoders));
                      }
                    }
                  }());
                }, A2($author$project$Derive$Util$concatResults, function(field) {
                  return A2($elm$core$Result$map, function(decoder) {
                    return {
                      decoder,
                      field
                    };
                  }, fieldToDecoder(field));
                }, fields));
              default:
                break _v0$15;
            }
          }
        return $elm$core$Result$Err(_List_fromArray(["Decoder: Unsupported Data Type: "]));
      });
      var $stil4m$elm_syntax$Elm$Syntax$Pattern$StringPattern = function(a) {
        return {
          $: "StringPattern",
          a
        };
      };
      var $the_sett$elm_syntax_dsl$Elm$CodeGen$stringPattern = function(literal) {
        return $stil4m$elm_syntax$Elm$Syntax$Pattern$StringPattern(literal);
      };
      var $author$project$Derive$Decoder$generateDecoderFromDeclaration = F2(function(file, delaration) {
        switch (delaration.$) {
          case "AliasDeclaration":
            var aliasDecl = delaration.a;
            var name = "decode" + $author$project$Derive$Util$nodeValue(aliasDecl.name);
            return A2($elm$core$Result$map, function(decoder) {
              return _List_fromArray([A5($the_sett$elm_syntax_dsl$Elm$CodeGen$funDecl, $elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing, name, _List_Nil, decoder)]);
            }, A2($author$project$Derive$Decoder$generateDecoderFromTypeAnnotation, file, $author$project$Derive$Util$nodeValue(aliasDecl.typeAnnotation)));
          case "CustomTypeDeclaration":
            var customTypeDecl = delaration.a;
            var caseExpressions = A2($elm$core$Result$map, function(pairs) {
              return A2($elm$core$List$map, function(_v2) {
                var constructor = _v2.constructor;
                var decoders = _v2.decoders;
                var nodeDecoders = A2($elm$core$List$indexedMap, F2(function(i, d) {
                  return $the_sett$elm_syntax_dsl$Elm$CodeGen$parens($the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqVal, _List_fromArray(["Json", "Decode"]), "field"), $the_sett$elm_syntax_dsl$Elm$CodeGen$string($elm$core$String$fromChar($author$project$Derive$Util$alphabet(i))), d])));
                }), decoders);
                var decoder = $the_sett$elm_syntax_dsl$Elm$CodeGen$parens(function() {
                  var _v3 = $elm$core$List$length(decoders);
                  if (!_v3) {
                    return $the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqVal, _List_fromArray(["Json", "Decode"]), "succeed"), A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqVal, _List_Nil, $author$project$Derive$Util$nodeValue(constructor.name))]));
                  } else {
                    var n = _v3;
                    return $the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_Utils_ap(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqVal, _List_fromArray(["Json", "Decode"]), function() {
                      var _v4 = $elm$core$List$length(decoders);
                      if (_v4 === 1) {
                        return "map";
                      } else {
                        return "map" + $elm$core$String$fromInt(n);
                      }
                    }()), A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqVal, _List_Nil, $author$project$Derive$Util$nodeValue(constructor.name))]), nodeDecoders));
                  }
                }());
                return _Utils_Tuple2($the_sett$elm_syntax_dsl$Elm$CodeGen$stringPattern($author$project$Derive$Util$nodeValue(constructor.name)), $the_sett$elm_syntax_dsl$Elm$CodeGen$parens(decoder));
              }, pairs);
            }, A2($author$project$Derive$Util$concatResults, function(_v1) {
              var constructor = _v1.b;
              var _arguments = A2($elm$core$List$map, $author$project$Derive$Util$nodeValue, constructor._arguments);
              return A2($elm$core$Result$map, function(decoders) {
                return {
                  constructor,
                  decoders
                };
              }, A2($author$project$Derive$Util$concatResults, $author$project$Derive$Decoder$generateDecoderFromTypeAnnotation(file), _arguments));
            }, customTypeDecl.constructors));
            var body = A2($elm$core$Result$map, function(cases) {
              var caseExpression = A2($the_sett$elm_syntax_dsl$Elm$CodeGen$caseExpr, A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqVal, _List_Nil, "tag"), _Utils_ap(cases, _List_fromArray([_Utils_Tuple2($the_sett$elm_syntax_dsl$Elm$CodeGen$allPattern, $the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqVal, _List_fromArray(["Json", "Decode"]), "fail"), $the_sett$elm_syntax_dsl$Elm$CodeGen$parens(A3($the_sett$elm_syntax_dsl$Elm$CodeGen$applyBinOp, $the_sett$elm_syntax_dsl$Elm$CodeGen$string("Unexpected tag name: "), $the_sett$elm_syntax_dsl$Elm$CodeGen$append, A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqVal, _List_Nil, "tag")))])))])));
              return $the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqVal, _List_fromArray(["Json", "Decode"]), "andThen"), $the_sett$elm_syntax_dsl$Elm$CodeGen$parens(A2($the_sett$elm_syntax_dsl$Elm$CodeGen$lambda, _List_fromArray([$the_sett$elm_syntax_dsl$Elm$CodeGen$varPattern("tag")]), caseExpression)), $the_sett$elm_syntax_dsl$Elm$CodeGen$parens($the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqVal, _List_fromArray(["Json", "Decode"]), "field"), $the_sett$elm_syntax_dsl$Elm$CodeGen$string("tag"), A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqVal, _List_fromArray(["Json", "Decode"]), "string")])))]));
            }, caseExpressions);
            return A2($elm$core$Result$map, function(b) {
              return _List_fromArray([A5($the_sett$elm_syntax_dsl$Elm$CodeGen$funDecl, $elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing, "decode" + $author$project$Derive$Util$nodeValue(customTypeDecl.name), _List_Nil, b)]);
            }, body);
          default:
            return $elm$core$Result$Ok(_List_Nil);
        }
      });
      var $author$project$Derive$Decoder$generateDecoder = function(file) {
        return A2($elm$core$Result$map, $elm$core$List$concat, A2($author$project$Derive$Util$concatResults, function(node) {
          return A2($author$project$Derive$Decoder$generateDecoderFromDeclaration, file, $author$project$Derive$Util$nodeValue(node));
        }, file.declarations));
      };
      var $the_sett$elm_syntax_dsl$Elm$CodeGen$fqNamedPattern = F3(function(moduleName, name, patterns) {
        return A2($stil4m$elm_syntax$Elm$Syntax$Pattern$NamedPattern, {
          moduleName,
          name
        }, $the_sett$elm_syntax_dsl$Util$nodifyAll(patterns));
      });
      var $stil4m$elm_syntax$Elm$Syntax$Expression$ListExpr = function(a) {
        return {
          $: "ListExpr",
          a
        };
      };
      var $the_sett$elm_syntax_dsl$Elm$CodeGen$list = function(exprs) {
        return $stil4m$elm_syntax$Elm$Syntax$Expression$ListExpr($the_sett$elm_syntax_dsl$Util$nodifyAll(exprs));
      };
      var $stil4m$elm_syntax$Elm$Syntax$Pattern$UnitPattern = {
        $: "UnitPattern"
      };
      var $the_sett$elm_syntax_dsl$Elm$CodeGen$unitPattern = $stil4m$elm_syntax$Elm$Syntax$Pattern$UnitPattern;
      var $author$project$Derive$Encoder$generateEncoderFromTypeAnnotation = F3(function(depth, file, typeAnnotation) {
        _v0$15:
          while (true) {
            switch (typeAnnotation.$) {
              case "Unit":
                return $elm$core$Result$Ok($the_sett$elm_syntax_dsl$Elm$CodeGen$parens(A2($the_sett$elm_syntax_dsl$Elm$CodeGen$lambda, _List_fromArray([$the_sett$elm_syntax_dsl$Elm$CodeGen$unitPattern]), $the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_fromArray(["Json", "Encode"]), "list"), A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_fromArray(["Basics"]), "identity"), $the_sett$elm_syntax_dsl$Elm$CodeGen$list(_List_Nil)])))));
              case "Tupled":
                if (typeAnnotation.a.b && typeAnnotation.a.b.b && !typeAnnotation.a.b.b.b) {
                  var _v42 = typeAnnotation.a;
                  var _v43 = _v42.a;
                  var fst = _v43.b;
                  var _v44 = _v42.b;
                  var _v45 = _v44.a;
                  var snd = _v45.b;
                  return A3($elm$core$Result$map2, F2(function(fstEncoder, sndEncoder) {
                    return $the_sett$elm_syntax_dsl$Elm$CodeGen$parens(A2($the_sett$elm_syntax_dsl$Elm$CodeGen$lambda, _List_fromArray([$the_sett$elm_syntax_dsl$Elm$CodeGen$tuplePattern(_List_fromArray([$the_sett$elm_syntax_dsl$Elm$CodeGen$varPattern("fst"), $the_sett$elm_syntax_dsl$Elm$CodeGen$varPattern("snd")]))]), $the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_fromArray(["Json", "Encode"]), "list"), A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_fromArray(["Basics"]), "identity"), $the_sett$elm_syntax_dsl$Elm$CodeGen$list(_List_fromArray([$the_sett$elm_syntax_dsl$Elm$CodeGen$parens($the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([fstEncoder, A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, "fst")]))), $the_sett$elm_syntax_dsl$Elm$CodeGen$parens($the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([sndEncoder, A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, "snd")])))]))]))));
                  }), A3($author$project$Derive$Encoder$generateEncoderFromTypeAnnotation, depth + 1, file, fst), A3($author$project$Derive$Encoder$generateEncoderFromTypeAnnotation, depth + 1, file, snd));
                } else {
                  break _v0$15;
                }
              case "Typed":
                if (!typeAnnotation.a.b.a.b) {
                  if (typeAnnotation.b.b) {
                    if (!typeAnnotation.b.b.b) {
                      switch (typeAnnotation.a.b.b) {
                        case "List":
                          var _v11 = typeAnnotation.a;
                          var _v12 = _v11.b;
                          var _v13 = typeAnnotation.b;
                          var _v14 = _v13.a;
                          var content = _v14.b;
                          return A2($elm$core$Result$map, function(encoder) {
                            return $the_sett$elm_syntax_dsl$Elm$CodeGen$parens($the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_fromArray(["Json", "Encode"]), "list"), encoder])));
                          }, A3($author$project$Derive$Encoder$generateEncoderFromTypeAnnotation, depth + 1, file, content));
                        case "Array":
                          var _v15 = typeAnnotation.a;
                          var _v16 = _v15.b;
                          var _v17 = typeAnnotation.b;
                          var _v18 = _v17.a;
                          var content = _v18.b;
                          return A2($elm$core$Result$map, function(encoder) {
                            return $the_sett$elm_syntax_dsl$Elm$CodeGen$parens($the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_fromArray(["Json", "Encode"]), "array"), encoder])));
                          }, A3($author$project$Derive$Encoder$generateEncoderFromTypeAnnotation, depth + 1, file, content));
                        case "Set":
                          var _v19 = typeAnnotation.a;
                          var _v20 = _v19.b;
                          var _v21 = typeAnnotation.b;
                          var _v22 = _v21.a;
                          var content = _v22.b;
                          return A2($elm$core$Result$map, function(encoder) {
                            return $the_sett$elm_syntax_dsl$Elm$CodeGen$parens($the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_fromArray(["Json", "Encode"]), "set"), encoder])));
                          }, A3($author$project$Derive$Encoder$generateEncoderFromTypeAnnotation, depth + 1, file, content));
                        case "Maybe":
                          var _v32 = typeAnnotation.a;
                          var _v33 = _v32.b;
                          var _v34 = typeAnnotation.b;
                          var _v35 = _v34.a;
                          var content = _v35.b;
                          return A2($elm$core$Result$map, function(encoder) {
                            return $the_sett$elm_syntax_dsl$Elm$CodeGen$parens($the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, "encodeMaybe"), encoder])));
                          }, A3($author$project$Derive$Encoder$generateEncoderFromTypeAnnotation, depth + 1, file, content));
                        default:
                          break _v0$15;
                      }
                    } else {
                      if (!typeAnnotation.b.b.b.b) {
                        switch (typeAnnotation.a.b.b) {
                          case "Dict":
                            if (typeAnnotation.b.a.b.$ === "Typed" && !typeAnnotation.b.a.b.a.b.a.b && typeAnnotation.b.a.b.a.b.b === "String") {
                              var _v23 = typeAnnotation.a;
                              var _v24 = _v23.b;
                              var _v25 = typeAnnotation.b;
                              var _v26 = _v25.a;
                              var _v27 = _v26.b;
                              var _v28 = _v27.a;
                              var _v29 = _v28.b;
                              var _v30 = _v25.b;
                              var _v31 = _v30.a;
                              var content = _v31.b;
                              return A2($elm$core$Result$map, function(encoder) {
                                return $the_sett$elm_syntax_dsl$Elm$CodeGen$parens($the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_fromArray(["Json", "Encode"]), "dict"), A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_fromArray(["Basics"]), "identity"), encoder])));
                              }, A3($author$project$Derive$Encoder$generateEncoderFromTypeAnnotation, depth + 1, file, content));
                            } else {
                              break _v0$15;
                            }
                          case "Result":
                            var _v36 = typeAnnotation.a;
                            var _v37 = _v36.b;
                            var _v38 = typeAnnotation.b;
                            var _v39 = _v38.a;
                            var err = _v39.b;
                            var _v40 = _v38.b;
                            var _v41 = _v40.a;
                            var ok = _v41.b;
                            return A3($elm$core$Result$map2, F2(function(errEncoder, okEncoder) {
                              return $the_sett$elm_syntax_dsl$Elm$CodeGen$parens($the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, "encodeResult"), errEncoder, okEncoder])));
                            }), A3($author$project$Derive$Encoder$generateEncoderFromTypeAnnotation, depth + 1, file, err), A3($author$project$Derive$Encoder$generateEncoderFromTypeAnnotation, depth + 1, file, ok));
                          default:
                            break _v0$15;
                        }
                      } else {
                        break _v0$15;
                      }
                    }
                  } else {
                    switch (typeAnnotation.a.b.b) {
                      case "Bool":
                        var _v1 = typeAnnotation.a;
                        var _v2 = _v1.b;
                        return $elm$core$Result$Ok(A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_fromArray(["Json", "Encode"]), "bool"));
                      case "Int":
                        var _v3 = typeAnnotation.a;
                        var _v4 = _v3.b;
                        return $elm$core$Result$Ok(A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_fromArray(["Json", "Encode"]), "int"));
                      case "Float":
                        var _v5 = typeAnnotation.a;
                        var _v6 = _v5.b;
                        return $elm$core$Result$Ok(A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_fromArray(["Json", "Encode"]), "float"));
                      case "String":
                        var _v7 = typeAnnotation.a;
                        var _v8 = _v7.b;
                        return $elm$core$Result$Ok(A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_fromArray(["Json", "Encode"]), "string"));
                      case "Char":
                        var _v9 = typeAnnotation.a;
                        var _v10 = _v9.b;
                        return $elm$core$Result$Ok(A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, "encodeChar"));
                      default:
                        var _v46 = typeAnnotation.a;
                        var _v47 = _v46.b;
                        var moduleMemberTypeName = _v47.b;
                        var filtered = A2($elm$core$List$filter, function(declarationNode) {
                          var declaration = $author$project$Derive$Util$nodeValue(declarationNode);
                          switch (declaration.$) {
                            case "AliasDeclaration":
                              var ta = declaration.a;
                              return _Utils_eq($author$project$Derive$Util$nodeValue(ta.name), moduleMemberTypeName);
                            case "CustomTypeDeclaration":
                              var tm = declaration.a;
                              return _Utils_eq($author$project$Derive$Util$nodeValue(tm.name), moduleMemberTypeName);
                            default:
                              return false;
                          }
                        }, file.declarations);
                        if (!filtered.b) {
                          return $elm$core$Result$Err(_List_fromArray(["Encoder: Unknown Data Type: `" + (moduleMemberTypeName + "`")]));
                        } else {
                          return $elm$core$Result$Ok(A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, "encode" + moduleMemberTypeName));
                        }
                    }
                  }
                } else {
                  break _v0$15;
                }
              case "Record":
                var record = typeAnnotation.a;
                var field = function(recordFieldNode) {
                  var _v50 = $author$project$Derive$Util$nodeValue(recordFieldNode);
                  var _v51 = _v50.a;
                  var name = _v51.b;
                  var _v52 = _v50.b;
                  var fieldTypeAnnotation = _v52.b;
                  return A2($elm$core$Result$map, function(k) {
                    return $the_sett$elm_syntax_dsl$Elm$CodeGen$tuple(_List_fromArray([$the_sett$elm_syntax_dsl$Elm$CodeGen$string(name), $the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([k, A2($the_sett$elm_syntax_dsl$Elm$CodeGen$access, A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, "value" + $elm$core$String$fromInt(depth)), name)]))]));
                  }, A3($author$project$Derive$Encoder$generateEncoderFromTypeAnnotation, depth + 1, file, fieldTypeAnnotation));
                };
                return A2($elm$core$Result$map, function(fields) {
                  return $the_sett$elm_syntax_dsl$Elm$CodeGen$parens(A2($the_sett$elm_syntax_dsl$Elm$CodeGen$lambda, _List_fromArray([$the_sett$elm_syntax_dsl$Elm$CodeGen$varPattern("value" + $elm$core$String$fromInt(depth))]), $the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_fromArray(["Json", "Encode"]), "object"), $the_sett$elm_syntax_dsl$Elm$CodeGen$list(fields)]))));
                }, A2($author$project$Derive$Util$concatResults, field, record));
              default:
                break _v0$15;
            }
          }
        return $elm$core$Result$Err(_List_fromArray(["Encoder: Unsupported Data Type: "]));
      });
      var $author$project$Derive$Encoder$generateEncoderFromDeclaration = F2(function(file, declaration) {
        switch (declaration.$) {
          case "AliasDeclaration":
            var aliasDecl = declaration.a;
            return A2($elm$core$Result$map, function(encoder) {
              var typeName2 = $author$project$Derive$Util$nodeValue(aliasDecl.name);
              var name = "encode" + typeName2;
              var ann = A2($the_sett$elm_syntax_dsl$Elm$CodeGen$funAnn, A3($the_sett$elm_syntax_dsl$Elm$CodeGen$fqTyped, _List_Nil, typeName2, _List_Nil), A3($the_sett$elm_syntax_dsl$Elm$CodeGen$fqTyped, _List_fromArray(["Json", "Encode"]), "Value", _List_Nil));
              return _List_fromArray([A5($the_sett$elm_syntax_dsl$Elm$CodeGen$funDecl, $elm$core$Maybe$Nothing, $elm$core$Maybe$Just(ann), name, _List_Nil, encoder)]);
            }, A3($author$project$Derive$Encoder$generateEncoderFromTypeAnnotation, 0, file, $author$project$Derive$Util$nodeValue(aliasDecl.typeAnnotation)));
          case "CustomTypeDeclaration":
            var customTypeDecl = declaration.a;
            var variants = A2($elm$core$List$map, function(constructorNode) {
              var constructor = $author$project$Derive$Util$nodeValue(constructorNode);
              var first = $the_sett$elm_syntax_dsl$Elm$CodeGen$tuple(_List_fromArray([$the_sett$elm_syntax_dsl$Elm$CodeGen$string("tag"), $the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_fromArray(["Json", "Encode"]), "string"), $the_sett$elm_syntax_dsl$Elm$CodeGen$string($author$project$Derive$Util$nodeValue(constructor.name))]))]));
              var fields = A2($elm$core$Result$map, $elm$core$List$cons(first), A2($author$project$Derive$Util$concatResults, function(_v1) {
                var i = _v1.a;
                var fieldNode = _v1.b;
                var field = $author$project$Derive$Util$nodeValue(fieldNode);
                return A2($elm$core$Result$map, function(encoder) {
                  var c = $elm$core$String$fromChar($elm$core$Char$fromCode(97 + i));
                  return $the_sett$elm_syntax_dsl$Elm$CodeGen$tuple(_List_fromArray([$the_sett$elm_syntax_dsl$Elm$CodeGen$string(c), $the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([encoder, A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, c)]))]));
                }, A3($author$project$Derive$Encoder$generateEncoderFromTypeAnnotation, 0, file, field));
              }, A2($elm$core$List$indexedMap, F2(function(i, fieldNode) {
                return _Utils_Tuple2(i, fieldNode);
              }), constructor._arguments)));
              var abc = A2($elm$core$List$map, $elm$core$String$fromChar, $author$project$Derive$Util$alphabets($elm$core$List$length(constructor._arguments)));
              var constructorCase = A2($elm$core$Result$map, function(fs) {
                var xs = fs;
                var h = A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_fromArray(["Json", "Encode"]), "object");
                return _Utils_Tuple2(A3($the_sett$elm_syntax_dsl$Elm$CodeGen$fqNamedPattern, _List_Nil, $author$project$Derive$Util$nodeValue(constructor.name), A2($elm$core$List$map, function(c) {
                  return $the_sett$elm_syntax_dsl$Elm$CodeGen$varPattern(c);
                }, abc)), $the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([h, $the_sett$elm_syntax_dsl$Elm$CodeGen$list(xs)])));
              }, fields);
              return constructorCase;
            }, customTypeDecl.constructors);
            var typeName = $author$project$Derive$Util$nodeValue(customTypeDecl.name);
            var encoderName = "encode" + typeName;
            return A2($elm$core$Result$map, function(cases) {
              var signature = A2($the_sett$elm_syntax_dsl$Elm$CodeGen$funAnn, A3($the_sett$elm_syntax_dsl$Elm$CodeGen$fqTyped, _List_Nil, typeName, _List_Nil), A3($the_sett$elm_syntax_dsl$Elm$CodeGen$fqTyped, _List_fromArray(["Json", "Encode"]), "Value", _List_Nil));
              return _List_fromArray([A5($the_sett$elm_syntax_dsl$Elm$CodeGen$funDecl, $elm$core$Maybe$Nothing, $elm$core$Maybe$Just(signature), encoderName, _List_fromArray([$the_sett$elm_syntax_dsl$Elm$CodeGen$varPattern("val")]), A2($the_sett$elm_syntax_dsl$Elm$CodeGen$caseExpr, A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, "val"), cases))]);
            }, A2($author$project$Derive$Util$concatResults, $elm$core$Basics$identity, variants));
          default:
            return $elm$core$Result$Ok(_List_Nil);
        }
      });
      var $author$project$Derive$Encoder$generateEncoder = function(file) {
        return A2($elm$core$Result$map, $elm$core$List$concat, A2($author$project$Derive$Util$concatResults, function(node) {
          return A2($author$project$Derive$Encoder$generateEncoderFromDeclaration, file, $author$project$Derive$Util$nodeValue(node));
        }, file.declarations));
      };
      var $stil4m$elm_syntax$Elm$Syntax$Expression$Operator = function(a) {
        return {
          $: "Operator",
          a
        };
      };
      var $the_sett$elm_syntax_dsl$Elm$CodeGen$binOp = function(_v0) {
        var symbol = _v0.a;
        return $stil4m$elm_syntax$Elm$Syntax$Expression$Operator(symbol);
      };
      var $author$project$Derive$Random$generateRandomFromType = F2(function(file, typeAnnotation) {
        _v0$15:
          while (true) {
            switch (typeAnnotation.$) {
              case "Record":
                var fields = typeAnnotation.a;
                return A2($elm$core$Result$map, function(randoms) {
                  return $the_sett$elm_syntax_dsl$Elm$CodeGen$parens(function() {
                    var _v5 = $elm$core$List$length(fields);
                    switch (_v5) {
                      case 0:
                        return $the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_fromArray(["Random"]), "constant"), $the_sett$elm_syntax_dsl$Elm$CodeGen$record(_List_Nil)]));
                      case 1:
                        return $the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_Utils_ap(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_fromArray(["Random"]), "map"), $author$project$Derive$Util$objectConstructor(fields)]), randoms));
                      default:
                        var go = function(rs) {
                          if (!rs.b) {
                            return $the_sett$elm_syntax_dsl$Elm$CodeGen$unit;
                          } else {
                            if (!rs.b.b) {
                              var r = rs.a;
                              return $the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_fromArray(["Random", "Extra"]), "andMap"), r]));
                            } else {
                              var x = rs.a;
                              var xs = rs.b;
                              return A3($the_sett$elm_syntax_dsl$Elm$CodeGen$applyBinOp, $the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_fromArray(["Random", "Extra"]), "andMap"), x])), $the_sett$elm_syntax_dsl$Elm$CodeGen$piper, go(xs));
                            }
                          }
                        };
                        return A3($the_sett$elm_syntax_dsl$Elm$CodeGen$applyBinOp, $the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_fromArray(["Random"]), "constant"), $author$project$Derive$Util$objectConstructor(fields)])), $the_sett$elm_syntax_dsl$Elm$CodeGen$piper, go(randoms));
                    }
                  }());
                }, A2($author$project$Derive$Util$concatResults, function(_v1) {
                  var _v2 = _v1.b;
                  var _v3 = _v2.a;
                  var _v4 = _v2.b;
                  var anno = _v4.b;
                  return A2($author$project$Derive$Random$generateRandomFromType, file, anno);
                }, fields));
              case "Tupled":
                if (typeAnnotation.a.b && typeAnnotation.a.b.b && !typeAnnotation.a.b.b.b) {
                  var _v7 = typeAnnotation.a;
                  var _v8 = _v7.a;
                  var fst = _v8.b;
                  var _v9 = _v7.b;
                  var _v10 = _v9.a;
                  var snd = _v10.b;
                  return A3($elm$core$Result$map2, F2(function(fstRandom, sndRandom) {
                    return $the_sett$elm_syntax_dsl$Elm$CodeGen$parens($the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_fromArray(["Random"]), "pair"), fstRandom, sndRandom])));
                  }), A2($author$project$Derive$Random$generateRandomFromType, file, fst), A2($author$project$Derive$Random$generateRandomFromType, file, snd));
                } else {
                  break _v0$15;
                }
              case "Unit":
                return $elm$core$Result$Ok($the_sett$elm_syntax_dsl$Elm$CodeGen$parens($the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_fromArray(["Random"]), "constant"), $the_sett$elm_syntax_dsl$Elm$CodeGen$unit]))));
              case "Typed":
                if (!typeAnnotation.a.b.a.b) {
                  if (typeAnnotation.b.b) {
                    if (!typeAnnotation.b.b.b) {
                      switch (typeAnnotation.a.b.b) {
                        case "List":
                          var _v21 = typeAnnotation.a;
                          var _v22 = _v21.b;
                          var _v23 = typeAnnotation.b;
                          var _v24 = _v23.a;
                          var content = _v24.b;
                          return A2($elm$core$Result$map, function(decoder) {
                            return $the_sett$elm_syntax_dsl$Elm$CodeGen$parens($the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, "randomList"), decoder])));
                          }, A2($author$project$Derive$Random$generateRandomFromType, file, content));
                        case "Array":
                          var _v25 = typeAnnotation.a;
                          var _v26 = _v25.b;
                          var _v27 = typeAnnotation.b;
                          var _v28 = _v27.a;
                          var content = _v28.b;
                          return A2($elm$core$Result$map, function(decoder) {
                            return $the_sett$elm_syntax_dsl$Elm$CodeGen$parens($the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, "randomArray"), decoder])));
                          }, A2($author$project$Derive$Random$generateRandomFromType, file, content));
                        case "Set":
                          var _v29 = typeAnnotation.a;
                          var _v30 = _v29.b;
                          var _v31 = typeAnnotation.b;
                          var _v32 = _v31.a;
                          var content = _v32.b;
                          return A2($elm$core$Result$map, function(decoder) {
                            return $the_sett$elm_syntax_dsl$Elm$CodeGen$parens($the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, "randomSet"), decoder])));
                          }, A2($author$project$Derive$Random$generateRandomFromType, file, content));
                        case "Maybe":
                          var _v42 = typeAnnotation.a;
                          var _v43 = _v42.b;
                          var _v44 = typeAnnotation.b;
                          var _v45 = _v44.a;
                          var content = _v45.b;
                          return A2($elm$core$Result$map, function(decoder) {
                            return $the_sett$elm_syntax_dsl$Elm$CodeGen$parens($the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_fromArray(["Random", "Extra"]), "maybe"), A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_fromArray(["Random", "Extra"]), "bool"), decoder])));
                          }, A2($author$project$Derive$Random$generateRandomFromType, file, content));
                        default:
                          break _v0$15;
                      }
                    } else {
                      if (!typeAnnotation.b.b.b.b) {
                        switch (typeAnnotation.a.b.b) {
                          case "Dict":
                            if (typeAnnotation.b.a.b.$ === "Typed" && !typeAnnotation.b.a.b.a.b.a.b && typeAnnotation.b.a.b.a.b.b === "String") {
                              var _v33 = typeAnnotation.a;
                              var _v34 = _v33.b;
                              var _v35 = typeAnnotation.b;
                              var _v36 = _v35.a;
                              var _v37 = _v36.b;
                              var _v38 = _v37.a;
                              var _v39 = _v38.b;
                              var _v40 = _v35.b;
                              var _v41 = _v40.a;
                              var content = _v41.b;
                              return A2($elm$core$Result$map, function(decoder) {
                                return $the_sett$elm_syntax_dsl$Elm$CodeGen$parens($the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, "randomDict"), decoder])));
                              }, A2($author$project$Derive$Random$generateRandomFromType, file, content));
                            } else {
                              break _v0$15;
                            }
                          case "Result":
                            var _v46 = typeAnnotation.a;
                            var _v47 = _v46.b;
                            var _v48 = typeAnnotation.b;
                            var _v49 = _v48.a;
                            var err = _v49.b;
                            var _v50 = _v48.b;
                            var _v51 = _v50.a;
                            var ok = _v51.b;
                            return A3($elm$core$Result$map2, F2(function(errRandom, okRandom) {
                              return $the_sett$elm_syntax_dsl$Elm$CodeGen$parens($the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_fromArray(["Random", "Extra"]), "result"), A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_fromArray(["Random", "Extra"]), "bool"), errRandom, okRandom])));
                            }), A2($author$project$Derive$Random$generateRandomFromType, file, err), A2($author$project$Derive$Random$generateRandomFromType, file, ok));
                          default:
                            break _v0$15;
                        }
                      } else {
                        break _v0$15;
                      }
                    }
                  } else {
                    switch (typeAnnotation.a.b.b) {
                      case "Bool":
                        var _v11 = typeAnnotation.a;
                        var _v12 = _v11.b;
                        return $elm$core$Result$Ok(A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_fromArray(["Random", "Extra"]), "bool"));
                      case "Int":
                        var _v13 = typeAnnotation.a;
                        var _v14 = _v13.b;
                        return $elm$core$Result$Ok(A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, "randomInt"));
                      case "Float":
                        var _v15 = typeAnnotation.a;
                        var _v16 = _v15.b;
                        return $elm$core$Result$Ok(A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, "randomFloat"));
                      case "String":
                        var _v17 = typeAnnotation.a;
                        var _v18 = _v17.b;
                        return $elm$core$Result$Ok(A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, "randomString"));
                      case "Char":
                        var _v19 = typeAnnotation.a;
                        var _v20 = _v19.b;
                        return $elm$core$Result$Ok(A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, "randomChar"));
                      default:
                        var _v52 = typeAnnotation.a;
                        var _v53 = _v52.b;
                        var name = _v53.b;
                        return $elm$core$Result$Ok(A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, "random" + name));
                    }
                  }
                } else {
                  break _v0$15;
                }
              default:
                break _v0$15;
            }
          }
        return $elm$core$Result$Err(_List_fromArray(["Html: Unsupported Data Type: "]));
      });
      var $stil4m$elm_syntax$Elm$Syntax$Expression$LetExpression = function(a) {
        return {
          $: "LetExpression",
          a
        };
      };
      var $the_sett$elm_syntax_dsl$Elm$CodeGen$letBlock = F2(function(decls, expr) {
        return {
          declarations: $the_sett$elm_syntax_dsl$Util$nodifyAll(decls),
          expression: $the_sett$elm_syntax_dsl$Util$nodify(expr)
        };
      });
      var $the_sett$elm_syntax_dsl$Elm$CodeGen$letExpr = F2(function(declarations, expr) {
        return $stil4m$elm_syntax$Elm$Syntax$Expression$LetExpression(A2($the_sett$elm_syntax_dsl$Elm$CodeGen$letBlock, declarations, expr));
      });
      var $stil4m$elm_syntax$Elm$Syntax$Expression$LetFunction = function(a) {
        return {
          $: "LetFunction",
          a
        };
      };
      var $the_sett$elm_syntax_dsl$Elm$CodeGen$letFunction = F3(function(name, args, expr) {
        return $stil4m$elm_syntax$Elm$Syntax$Expression$LetFunction(A3($the_sett$elm_syntax_dsl$Elm$CodeGen$function, $elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing, A3($the_sett$elm_syntax_dsl$Elm$CodeGen$functionImplementation, name, args, expr)));
      });
      var $elm$core$String$toLower = _String_toLower;
      var $author$project$Derive$Random$generateRandomFromDeclaration = F2(function(file, declaration) {
        switch (declaration.$) {
          case "AliasDeclaration":
            var aliasDecl = declaration.a;
            return A2($elm$core$Result$map, function(decoder) {
              var typeName2 = $author$project$Derive$Util$nodeValue(aliasDecl.name);
              var typeAnnotation2 = A3($the_sett$elm_syntax_dsl$Elm$CodeGen$fqTyped, _List_fromArray(["Random"]), "Generator", _List_fromArray([A3($the_sett$elm_syntax_dsl$Elm$CodeGen$fqTyped, _List_Nil, typeName2, _List_Nil)]));
              var decoderName2 = "random" + typeName2;
              return _List_fromArray([A5($the_sett$elm_syntax_dsl$Elm$CodeGen$funDecl, $elm$core$Maybe$Nothing, $elm$core$Maybe$Just(typeAnnotation2), decoderName2, _List_Nil, decoder)]);
            }, A2($author$project$Derive$Random$generateRandomFromType, file, $author$project$Derive$Util$nodeValue(aliasDecl.typeAnnotation)));
          case "CustomTypeDeclaration":
            var customTypeDecl = declaration.a;
            var typeName = $author$project$Derive$Util$nodeValue(customTypeDecl.name);
            var typeAnnotation = A3($the_sett$elm_syntax_dsl$Elm$CodeGen$fqTyped, _List_fromArray(["Random"]), "Generator", _List_fromArray([A3($the_sett$elm_syntax_dsl$Elm$CodeGen$fqTyped, _List_Nil, typeName, _List_Nil)]));
            var pairs = A2($author$project$Derive$Util$concatResults, function(_v4) {
              var constructor = _v4.b;
              return A2($elm$core$Result$map, function(decoders) {
                return {
                  constructor,
                  decoders
                };
              }, A2($author$project$Derive$Util$concatResults, function(_v5) {
                var argument = _v5.b;
                return A2($author$project$Derive$Random$generateRandomFromType, file, argument);
              }, constructor._arguments));
            }, customTypeDecl.constructors);
            var letExpression = A2($elm$core$Result$map, function(ps) {
              var ds = A2($elm$core$List$map, function(_v2) {
                var constructor = _v2.constructor;
                var decoders = _v2.decoders;
                return A3($the_sett$elm_syntax_dsl$Elm$CodeGen$letFunction, $elm$core$String$toLower($author$project$Derive$Util$nodeValue(constructor.name)), _List_fromArray([$the_sett$elm_syntax_dsl$Elm$CodeGen$unitPattern]), function() {
                  if ($elm$core$List$isEmpty(decoders)) {
                    return $the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_fromArray(["Random"]), "constant"), A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, $author$project$Derive$Util$nodeValue(constructor.name))]));
                  } else {
                    var mapFunction = function() {
                      var _v3 = $elm$core$List$length(decoders);
                      if (_v3 === 1) {
                        return "map";
                      } else {
                        return "map" + $elm$core$String$fromInt($elm$core$List$length(decoders));
                      }
                    }();
                    return $the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_Utils_ap(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_fromArray(["Random"]), mapFunction), A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, $author$project$Derive$Util$nodeValue(constructor.name))]), decoders));
                  }
                }());
              }, ps);
              var letBlock = A2($the_sett$elm_syntax_dsl$Elm$CodeGen$letExpr, ds, function() {
                if (!ps.b) {
                  return $the_sett$elm_syntax_dsl$Elm$CodeGen$string("<<<INTERNAL ERROR>>>");
                } else {
                  var head = ps.a;
                  var tail = ps.b;
                  return $the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_fromArray(["Random"]), "andThen"), $the_sett$elm_syntax_dsl$Elm$CodeGen$parens($the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([$the_sett$elm_syntax_dsl$Elm$CodeGen$parens($the_sett$elm_syntax_dsl$Elm$CodeGen$binOp($the_sett$elm_syntax_dsl$Elm$CodeGen$piper)), $the_sett$elm_syntax_dsl$Elm$CodeGen$unit]))), $the_sett$elm_syntax_dsl$Elm$CodeGen$parens($the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_fromArray(["Random"]), "uniform"), A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, $elm$core$String$toLower($author$project$Derive$Util$nodeValue(head.constructor.name))), $the_sett$elm_syntax_dsl$Elm$CodeGen$list(A2($elm$core$List$map, function(t) {
                    return A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, $elm$core$String$toLower($author$project$Derive$Util$nodeValue(t.constructor.name)));
                  }, tail))])))]));
                }
              }());
              return letBlock;
            }, pairs);
            var decoderName = "random" + typeName;
            return A2($elm$core$Result$map, function(f) {
              return _List_fromArray([A5($the_sett$elm_syntax_dsl$Elm$CodeGen$funDecl, $elm$core$Maybe$Nothing, $elm$core$Maybe$Just(typeAnnotation), decoderName, _List_Nil, f)]);
            }, letExpression);
          default:
            return $elm$core$Result$Ok(_List_Nil);
        }
      });
      var $author$project$Derive$Random$generateRandom = function(file) {
        return A2($elm$core$Result$map, $elm$core$List$concat, A2($author$project$Derive$Util$concatResults, function(node) {
          return A2($author$project$Derive$Random$generateRandomFromDeclaration, file, $author$project$Derive$Util$nodeValue(node));
        }, file.declarations));
      };
      var $elm$core$Basics$composeL = F3(function(g, f, x) {
        return g(f(x));
      });
      var $author$project$Derive$Html$element = F3(function(name, _v0, children) {
        return $the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_fromArray(["Html"]), name), $the_sett$elm_syntax_dsl$Elm$CodeGen$list(_List_Nil), $the_sett$elm_syntax_dsl$Elm$CodeGen$list(children)]));
      });
      var $author$project$Derive$Html$text = function(str) {
        return $the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_fromArray(["Html"]), "text"), $the_sett$elm_syntax_dsl$Elm$CodeGen$string(str)]));
      };
      var $author$project$Derive$Html$generateViewFromTypeAnnotation = F3(function(depth, file, typeAnnotation) {
        _v0$14:
          while (true) {
            switch (typeAnnotation.$) {
              case "Record":
                var fields = typeAnnotation.a;
                return A2($elm$core$Result$map, function(pairs) {
                  return $the_sett$elm_syntax_dsl$Elm$CodeGen$parens(A2($the_sett$elm_syntax_dsl$Elm$CodeGen$lambda, _List_fromArray([$the_sett$elm_syntax_dsl$Elm$CodeGen$varPattern("value" + $elm$core$String$fromInt(depth))]), A3($author$project$Derive$Html$element, "table", _List_Nil, _List_fromArray([A3($author$project$Derive$Html$element, "tbody", _List_Nil, A2($elm$core$List$map, function(pair) {
                    return A3($author$project$Derive$Html$element, "tr", _List_Nil, _List_fromArray([A3($author$project$Derive$Html$element, "td", _List_Nil, _List_fromArray([$author$project$Derive$Html$text(pair.name)])), A3($author$project$Derive$Html$element, "td", _List_Nil, _List_fromArray([$the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([pair.annotation, A2($the_sett$elm_syntax_dsl$Elm$CodeGen$access, A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, "value" + $elm$core$String$fromInt(depth)), pair.name)]))]))]));
                  }, pairs))]))));
                }, A2($author$project$Derive$Util$concatResults, function(_v1) {
                  var _v2 = _v1.b;
                  var _v3 = _v2.a;
                  var name2 = _v3.b;
                  var _v4 = _v2.b;
                  var anno = _v4.b;
                  return A2($elm$core$Result$map, function(annotation) {
                    return {
                      annotation,
                      name: name2
                    };
                  }, A3($author$project$Derive$Html$generateViewFromTypeAnnotation, depth + 1, file, anno));
                }, fields));
              case "Tupled":
                if (typeAnnotation.a.b && typeAnnotation.a.b.b && !typeAnnotation.a.b.b.b) {
                  var _v44 = typeAnnotation.a;
                  var _v45 = _v44.a;
                  var fst = _v45.b;
                  var _v46 = _v44.b;
                  var _v47 = _v46.a;
                  var snd = _v47.b;
                  return A3($elm$core$Result$map2, F2(function(fstView, sndView) {
                    return $the_sett$elm_syntax_dsl$Elm$CodeGen$parens($the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, "viewTuple"), fstView, sndView])));
                  }), A3($author$project$Derive$Html$generateViewFromTypeAnnotation, depth + 1, file, fst), A3($author$project$Derive$Html$generateViewFromTypeAnnotation, depth + 1, file, snd));
                } else {
                  break _v0$14;
                }
              case "Unit":
                return $elm$core$Result$Ok($the_sett$elm_syntax_dsl$Elm$CodeGen$parens(A2($the_sett$elm_syntax_dsl$Elm$CodeGen$lambda, _List_fromArray([$the_sett$elm_syntax_dsl$Elm$CodeGen$unitPattern]), A3($author$project$Derive$Html$element, "div", _List_Nil, _List_fromArray([$author$project$Derive$Html$text("")])))));
              case "Typed":
                if (!typeAnnotation.a.b.a.b) {
                  if (typeAnnotation.b.b) {
                    if (!typeAnnotation.b.b.b) {
                      switch (typeAnnotation.a.b.b) {
                        case "List":
                          var _v13 = typeAnnotation.a;
                          var _v14 = _v13.b;
                          var _v15 = typeAnnotation.b;
                          var _v16 = _v15.a;
                          var content = _v16.b;
                          return A2($elm$core$Result$map, function(decoder) {
                            return $the_sett$elm_syntax_dsl$Elm$CodeGen$parens($the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, "viewList"), decoder])));
                          }, A3($author$project$Derive$Html$generateViewFromTypeAnnotation, depth + 1, file, content));
                        case "Array":
                          var _v17 = typeAnnotation.a;
                          var _v18 = _v17.b;
                          var _v19 = typeAnnotation.b;
                          var _v20 = _v19.a;
                          var content = _v20.b;
                          return A2($elm$core$Result$map, function(decoder) {
                            return $the_sett$elm_syntax_dsl$Elm$CodeGen$parens($the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, "viewArray"), decoder])));
                          }, A3($author$project$Derive$Html$generateViewFromTypeAnnotation, depth + 1, file, content));
                        case "Set":
                          var _v21 = typeAnnotation.a;
                          var _v22 = _v21.b;
                          var _v23 = typeAnnotation.b;
                          var _v24 = _v23.a;
                          var content = _v24.b;
                          return A2($elm$core$Result$map, function(decoder) {
                            return $the_sett$elm_syntax_dsl$Elm$CodeGen$parens($the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, "viewSet"), decoder])));
                          }, A3($author$project$Derive$Html$generateViewFromTypeAnnotation, depth + 1, file, content));
                        case "Maybe":
                          var _v25 = typeAnnotation.a;
                          var _v26 = _v25.b;
                          var _v27 = typeAnnotation.b;
                          var _v28 = _v27.a;
                          var content = _v28.b;
                          return A2($elm$core$Result$map, function(decoder) {
                            return $the_sett$elm_syntax_dsl$Elm$CodeGen$parens($the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, "viewMaybe"), decoder])));
                          }, A3($author$project$Derive$Html$generateViewFromTypeAnnotation, depth + 1, file, content));
                        default:
                          break _v0$14;
                      }
                    } else {
                      if (!typeAnnotation.b.b.b.b) {
                        switch (typeAnnotation.a.b.b) {
                          case "Result":
                            var _v29 = typeAnnotation.a;
                            var _v30 = _v29.b;
                            var _v31 = typeAnnotation.b;
                            var _v32 = _v31.a;
                            var err = _v32.b;
                            var _v33 = _v31.b;
                            var _v34 = _v33.a;
                            var ok = _v34.b;
                            return A3($elm$core$Result$map2, F2(function(errView, okView) {
                              return $the_sett$elm_syntax_dsl$Elm$CodeGen$parens($the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, "viewResult"), errView, okView])));
                            }), A3($author$project$Derive$Html$generateViewFromTypeAnnotation, depth + 1, file, err), A3($author$project$Derive$Html$generateViewFromTypeAnnotation, depth + 1, file, ok));
                          case "Dict":
                            if (typeAnnotation.b.a.b.$ === "Typed" && !typeAnnotation.b.a.b.a.b.a.b && typeAnnotation.b.a.b.a.b.b === "String") {
                              var _v35 = typeAnnotation.a;
                              var _v36 = _v35.b;
                              var _v37 = typeAnnotation.b;
                              var _v38 = _v37.a;
                              var _v39 = _v38.b;
                              var _v40 = _v39.a;
                              var _v41 = _v40.b;
                              var _v42 = _v37.b;
                              var _v43 = _v42.a;
                              var content = _v43.b;
                              return A2($elm$core$Result$map, function(decoder) {
                                return $the_sett$elm_syntax_dsl$Elm$CodeGen$parens($the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, "viewDict"), decoder])));
                              }, A3($author$project$Derive$Html$generateViewFromTypeAnnotation, depth + 1, file, content));
                            } else {
                              break _v0$14;
                            }
                          default:
                            break _v0$14;
                        }
                      } else {
                        break _v0$14;
                      }
                    }
                  } else {
                    switch (typeAnnotation.a.b.b) {
                      case "Bool":
                        var _v5 = typeAnnotation.a;
                        var _v6 = _v5.b;
                        return $elm$core$Result$Ok(A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, "viewBool"));
                      case "Int":
                        var _v7 = typeAnnotation.a;
                        var _v8 = _v7.b;
                        return $elm$core$Result$Ok(A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, "viewInt"));
                      case "Float":
                        var _v9 = typeAnnotation.a;
                        var _v10 = _v9.b;
                        return $elm$core$Result$Ok(A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, "viewFloat"));
                      case "String":
                        var _v11 = typeAnnotation.a;
                        var _v12 = _v11.b;
                        return $elm$core$Result$Ok(A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, "viewString"));
                      default:
                        var _v48 = typeAnnotation.a;
                        var _v49 = _v48.b;
                        var name = _v49.b;
                        return $elm$core$Result$Ok(A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, "view" + name));
                    }
                  }
                } else {
                  break _v0$14;
                }
              default:
                break _v0$14;
            }
          }
        return $elm$core$Result$Err(_List_fromArray(["Html: Unsupported Data Type: "]));
      });
      var $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericType = function(a) {
        return {
          $: "GenericType",
          a
        };
      };
      var $the_sett$elm_syntax_dsl$Elm$CodeGen$typeVar = function(name) {
        return $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericType(name);
      };
      var $author$project$Derive$Html$generateViewFromDeclaration = F2(function(file, declaration) {
        var typeName = function() {
          switch (declaration.$) {
            case "AliasDeclaration":
              var aliasDecl2 = declaration.a;
              return $author$project$Derive$Util$nodeValue(aliasDecl2.name);
            case "CustomTypeDeclaration":
              var customTypeDecl2 = declaration.a;
              return $author$project$Derive$Util$nodeValue(customTypeDecl2.name);
            default:
              return "<<<Html: INTERNAL ERROR>>>";
          }
        }();
        var typeAnnotation = A2($the_sett$elm_syntax_dsl$Elm$CodeGen$funAnn, A3($the_sett$elm_syntax_dsl$Elm$CodeGen$fqTyped, _List_Nil, typeName, _List_Nil), A3($the_sett$elm_syntax_dsl$Elm$CodeGen$fqTyped, _List_fromArray(["Html"]), "Html", _List_fromArray([$the_sett$elm_syntax_dsl$Elm$CodeGen$typeVar("msg")])));
        var decoderName = "view" + typeName;
        switch (declaration.$) {
          case "AliasDeclaration":
            var aliasDecl = declaration.a;
            return A2($elm$core$Result$map, function(expr) {
              return _List_fromArray([A5($the_sett$elm_syntax_dsl$Elm$CodeGen$funDecl, $elm$core$Maybe$Nothing, $elm$core$Maybe$Just(typeAnnotation), decoderName, _List_Nil, expr)]);
            }, A3($author$project$Derive$Html$generateViewFromTypeAnnotation, 0, file, $author$project$Derive$Util$nodeValue(aliasDecl.typeAnnotation)));
          case "CustomTypeDeclaration":
            var customTypeDecl = declaration.a;
            return A2($elm$core$Result$map, function(pairs) {
              var caseExpression = function(pair) {
                return _Utils_Tuple2(A2($the_sett$elm_syntax_dsl$Elm$CodeGen$namedPattern, $author$project$Derive$Util$nodeValue(pair.constructor.name), A2($elm$core$List$map, A2($elm$core$Basics$composeL, $the_sett$elm_syntax_dsl$Elm$CodeGen$varPattern, $elm$core$String$fromChar), $author$project$Derive$Util$alphabets($elm$core$List$length(pair.view)))), $the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([A3($author$project$Derive$Html$element, "table", _List_Nil, A2($elm$core$List$indexedMap, F2(function(i, field) {
                  return A3($author$project$Derive$Html$element, "tr", _List_Nil, _List_fromArray([$the_sett$elm_syntax_dsl$Elm$CodeGen$apply(_List_fromArray([field, A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, $elm$core$String$fromChar($author$project$Derive$Util$alphabet(i)))]))]));
                }), pair.view))])));
              };
              var expr = A2($the_sett$elm_syntax_dsl$Elm$CodeGen$lambda, _List_fromArray([$the_sett$elm_syntax_dsl$Elm$CodeGen$varPattern("customTypeValue")]), A2($the_sett$elm_syntax_dsl$Elm$CodeGen$caseExpr, A2($the_sett$elm_syntax_dsl$Elm$CodeGen$fqFun, _List_Nil, "customTypeValue"), A2($elm$core$List$map, caseExpression, pairs)));
              return _List_fromArray([A5($the_sett$elm_syntax_dsl$Elm$CodeGen$funDecl, $elm$core$Maybe$Nothing, $elm$core$Maybe$Just(typeAnnotation), decoderName, _List_Nil, $the_sett$elm_syntax_dsl$Elm$CodeGen$parens(expr))]);
            }, A2($author$project$Derive$Util$concatResults, function(_v1) {
              var constructor = _v1.b;
              return A2($elm$core$Result$map, function(view) {
                return {
                  constructor,
                  view
                };
              }, A2($author$project$Derive$Util$concatResults, function(_v2) {
                var argument = _v2.b;
                return A3($author$project$Derive$Html$generateViewFromTypeAnnotation, 0, file, argument);
              }, constructor._arguments));
            }, customTypeDecl.constructors));
          default:
            return $elm$core$Result$Ok(_List_Nil);
        }
      });
      var $author$project$Derive$Html$generateView = function(file) {
        return A2($elm$core$Result$map, $elm$core$List$concat, A2($author$project$Derive$Util$concatResults, function(node) {
          return A2($author$project$Derive$Html$generateViewFromDeclaration, file, $author$project$Derive$Util$nodeValue(node));
        }, file.declarations));
      };
      var $the_sett$elm_syntax_dsl$Elm$CodeGen$importStmt = F3(function(modName, aliasName, exposes) {
        return {
          exposingList: $the_sett$elm_syntax_dsl$Util$nodifyMaybe(exposes),
          moduleAlias: $the_sett$elm_syntax_dsl$Util$nodifyMaybe(aliasName),
          moduleName: $the_sett$elm_syntax_dsl$Util$nodify(modName)
        };
      });
      var $stil4m$elm_syntax$Elm$Syntax$Module$NormalModule = function(a) {
        return {
          $: "NormalModule",
          a
        };
      };
      var $the_sett$elm_syntax_dsl$Elm$CodeGen$defaultModuleData = F2(function(name, exposes) {
        return {
          exposingList: $the_sett$elm_syntax_dsl$Util$nodify(exposes),
          moduleName: $the_sett$elm_syntax_dsl$Util$nodify(name)
        };
      });
      var $stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit = function(a) {
        return {
          $: "Explicit",
          a
        };
      };
      var $the_sett$elm_syntax_dsl$Elm$CodeGen$exposing_ = function(exposes) {
        if (!exposes.b) {
          return $stil4m$elm_syntax$Elm$Syntax$Exposing$All($stil4m$elm_syntax$Elm$Syntax$Range$emptyRange);
        } else {
          var es = exposes;
          return $stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit($the_sett$elm_syntax_dsl$Util$nodifyAll(exposes));
        }
      };
      var $the_sett$elm_syntax_dsl$Elm$CodeGen$normalModule = F2(function(name, exposes) {
        return $stil4m$elm_syntax$Elm$Syntax$Module$NormalModule(A2($the_sett$elm_syntax_dsl$Elm$CodeGen$defaultModuleData, name, $the_sett$elm_syntax_dsl$Elm$CodeGen$exposing_(exposes)));
      });
      var $stil4m$elm_syntax$Elm$Processing$ProcessContext = function(a) {
        return {
          $: "ProcessContext",
          a
        };
      };
      var $stil4m$elm_syntax$Elm$Processing$init = $stil4m$elm_syntax$Elm$Processing$ProcessContext($elm$core$Dict$empty);
      var $stil4m$elm_syntax$Elm$Parser$State$State = function(a) {
        return {
          $: "State",
          a
        };
      };
      var $stil4m$elm_syntax$Elm$Parser$State$emptyState = $stil4m$elm_syntax$Elm$Parser$State$State({
        comments: _List_Nil,
        indents: _List_Nil
      });
      var $stil4m$elm_syntax$Elm$Syntax$File$File = F4(function(moduleDefinition, imports, declarations, comments) {
        return {
          comments,
          declarations,
          imports,
          moduleDefinition
        };
      });
      var $stil4m$elm_syntax$Combine$Parser = function(a) {
        return {
          $: "Parser",
          a
        };
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
      var $elm$parser$Parser$Advanced$Parser = function(a) {
        return {
          $: "Parser",
          a
        };
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
      var $elm$parser$Parser$andThen = $elm$parser$Parser$Advanced$andThen;
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
      var $elm$core$Tuple$mapSecond = F2(function(func, _v0) {
        var x = _v0.a;
        var y = _v0.b;
        return _Utils_Tuple2(x, func(y));
      });
      var $stil4m$elm_syntax$Combine$andMap = F2(function(_v0, _v1) {
        var rp = _v0.a;
        var lp = _v1.a;
        return $stil4m$elm_syntax$Combine$Parser(function(state) {
          return A2($elm$parser$Parser$andThen, function(_v2) {
            var newState = _v2.a;
            var a = _v2.b;
            return A2($elm$parser$Parser$map, $elm$core$Tuple$mapSecond(a), rp(newState));
          }, lp(state));
        });
      });
      var $elm$core$Basics$composeR = F3(function(f, g, x) {
        return g(f(x));
      });
      var $stil4m$elm_syntax$Elm$Parser$State$getComments = function(_v0) {
        var s = _v0.a;
        return s.comments;
      };
      var $elm$parser$Parser$Advanced$succeed = function(a) {
        return $elm$parser$Parser$Advanced$Parser(function(s) {
          return A3($elm$parser$Parser$Advanced$Good, false, a, s);
        });
      };
      var $elm$parser$Parser$succeed = $elm$parser$Parser$Advanced$succeed;
      var $stil4m$elm_syntax$Combine$succeed = function(res) {
        return $stil4m$elm_syntax$Combine$Parser(function(state) {
          return $elm$parser$Parser$succeed(_Utils_Tuple2(state, res));
        });
      };
      var $stil4m$elm_syntax$Combine$withState = function(f) {
        return $stil4m$elm_syntax$Combine$Parser(function(state) {
          return function(_v0) {
            var p = _v0.a;
            return p(state);
          }(f(state));
        });
      };
      var $stil4m$elm_syntax$Elm$Parser$File$collectComments = $stil4m$elm_syntax$Combine$withState(A2($elm$core$Basics$composeR, $stil4m$elm_syntax$Elm$Parser$State$getComments, $stil4m$elm_syntax$Combine$succeed));
      var $stil4m$elm_syntax$Elm$Syntax$Declaration$AliasDeclaration = function(a) {
        return {
          $: "AliasDeclaration",
          a
        };
      };
      var $stil4m$elm_syntax$Elm$Syntax$Declaration$CustomTypeDeclaration = function(a) {
        return {
          $: "CustomTypeDeclaration",
          a
        };
      };
      var $elm$parser$Parser$Advanced$Empty = {
        $: "Empty"
      };
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
      var $stil4m$elm_syntax$Combine$choice = function(xs) {
        return $stil4m$elm_syntax$Combine$Parser(function(state) {
          return $elm$parser$Parser$oneOf(A2($elm$core$List$map, function(_v0) {
            var x = _v0.a;
            return x(state);
          }, xs));
        });
      };
      var $stil4m$elm_syntax$Elm$Syntax$Declaration$Destructuring = F2(function(a, b) {
        return {
          $: "Destructuring",
          a,
          b
        };
      });
      var $stil4m$elm_syntax$Elm$Syntax$Range$Range = F2(function(start, end) {
        return {
          end,
          start
        };
      });
      var $elm$core$Maybe$map2 = F3(function(func, ma, mb) {
        if (ma.$ === "Nothing") {
          return $elm$core$Maybe$Nothing;
        } else {
          var a = ma.a;
          if (mb.$ === "Nothing") {
            return $elm$core$Maybe$Nothing;
          } else {
            var b = mb.a;
            return $elm$core$Maybe$Just(A2(func, a, b));
          }
        }
      });
      var $elm$core$Basics$compare = _Utils_compare;
      var $stil4m$elm_syntax$Elm$Syntax$Range$compareLocations = F2(function(left, right) {
        return _Utils_cmp(left.row, right.row) < 0 ? $elm$core$Basics$LT : _Utils_cmp(right.row, left.row) < 0 ? $elm$core$Basics$GT : A2($elm$core$Basics$compare, left.column, right.column);
      });
      var $elm$core$List$sortWith = _List_sortWith;
      var $stil4m$elm_syntax$Elm$Syntax$Range$sortLocations = $elm$core$List$sortWith($stil4m$elm_syntax$Elm$Syntax$Range$compareLocations);
      var $stil4m$elm_syntax$Elm$Syntax$Range$combine = function(ranges) {
        var starts = $stil4m$elm_syntax$Elm$Syntax$Range$sortLocations(A2($elm$core$List$map, function($) {
          return $.start;
        }, ranges));
        var ends = $elm$core$List$reverse($stil4m$elm_syntax$Elm$Syntax$Range$sortLocations(A2($elm$core$List$map, function($) {
          return $.end;
        }, ranges)));
        return A2($elm$core$Maybe$withDefault, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, A3($elm$core$Maybe$map2, $stil4m$elm_syntax$Elm$Syntax$Range$Range, $elm$core$List$head(starts), $elm$core$List$head(ends)));
      };
      var $stil4m$elm_syntax$Elm$Syntax$Node$combine = F3(function(f, a, b) {
        var r1 = a.a;
        var r2 = b.a;
        return A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$combine(_List_fromArray([r1, r2])), A2(f, a, b));
      });
      var $stil4m$elm_syntax$Elm$Syntax$Expression$CaseBlock = F2(function(expression, cases) {
        return {
          cases,
          expression
        };
      });
      var $stil4m$elm_syntax$Combine$Done = function(a) {
        return {
          $: "Done",
          a
        };
      };
      var $stil4m$elm_syntax$Elm$Syntax$Expression$Function = F3(function(documentation, signature, declaration) {
        return {
          declaration,
          documentation,
          signature
        };
      });
      var $stil4m$elm_syntax$Elm$Syntax$Expression$FunctionImplementation = F3(function(name, _arguments, expression) {
        return {
          _arguments,
          expression,
          name
        };
      });
      var $stil4m$elm_syntax$Elm$Syntax$Expression$IfBlock = F3(function(a, b, c) {
        return {
          $: "IfBlock",
          a,
          b,
          c
        };
      });
      var $stil4m$elm_syntax$Elm$Syntax$Expression$Lambda = F2(function(args, expression) {
        return {
          args,
          expression
        };
      });
      var $stil4m$elm_syntax$Elm$Syntax$Expression$LetBlock = F2(function(declarations, expression) {
        return {
          declarations,
          expression
        };
      });
      var $stil4m$elm_syntax$Elm$Syntax$Expression$LetDestructuring = F2(function(a, b) {
        return {
          $: "LetDestructuring",
          a,
          b
        };
      });
      var $stil4m$elm_syntax$Combine$Loop = function(a) {
        return {
          $: "Loop",
          a
        };
      };
      var $stil4m$elm_syntax$Elm$Syntax$Expression$Negation = function(a) {
        return {
          $: "Negation",
          a
        };
      };
      var $stil4m$elm_syntax$Elm$Syntax$Expression$PrefixOperator = function(a) {
        return {
          $: "PrefixOperator",
          a
        };
      };
      var $stil4m$elm_syntax$Elm$Syntax$Expression$RecordUpdateExpression = F2(function(a, b) {
        return {
          $: "RecordUpdateExpression",
          a,
          b
        };
      });
      var $stil4m$elm_syntax$Combine$andThen = F2(function(f, _v0) {
        var p = _v0.a;
        return $stil4m$elm_syntax$Combine$Parser(function(state) {
          return A2($elm$parser$Parser$andThen, function(_v1) {
            var s = _v1.a;
            var a = _v1.b;
            return function(_v2) {
              var x = _v2.a;
              return x(s);
            }(f(a));
          }, p(state));
        });
      });
      var $elm$parser$Parser$Advanced$backtrackable = function(_v0) {
        var parse = _v0.a;
        return $elm$parser$Parser$Advanced$Parser(function(s0) {
          var _v1 = parse(s0);
          if (_v1.$ === "Bad") {
            var x = _v1.b;
            return A2($elm$parser$Parser$Advanced$Bad, false, x);
          } else {
            var a = _v1.b;
            var s1 = _v1.c;
            return A3($elm$parser$Parser$Advanced$Good, false, a, s1);
          }
        });
      };
      var $elm$parser$Parser$backtrackable = $elm$parser$Parser$Advanced$backtrackable;
      var $stil4m$elm_syntax$Combine$backtrackable = function(_v0) {
        var p = _v0.a;
        return $stil4m$elm_syntax$Combine$Parser(function(state) {
          return $elm$parser$Parser$backtrackable(p(state));
        });
      };
      var $elm$parser$Parser$Advanced$mapChompedString = F2(function(func, _v0) {
        var parse = _v0.a;
        return $elm$parser$Parser$Advanced$Parser(function(s0) {
          var _v1 = parse(s0);
          if (_v1.$ === "Bad") {
            var p = _v1.a;
            var x = _v1.b;
            return A2($elm$parser$Parser$Advanced$Bad, p, x);
          } else {
            var p = _v1.a;
            var a = _v1.b;
            var s1 = _v1.c;
            return A3($elm$parser$Parser$Advanced$Good, p, A2(func, A3($elm$core$String$slice, s0.offset, s1.offset, s0.src), a), s1);
          }
        });
      });
      var $elm$parser$Parser$Advanced$getChompedString = function(parser) {
        return A2($elm$parser$Parser$Advanced$mapChompedString, $elm$core$Basics$always, parser);
      };
      var $elm$parser$Parser$getChompedString = $elm$parser$Parser$Advanced$getChompedString;
      var $elm$parser$Parser$Expecting = function(a) {
        return {
          $: "Expecting",
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
      var $elm$parser$Parser$toToken = function(str) {
        return A2($elm$parser$Parser$Advanced$Token, str, $elm$parser$Parser$Expecting(str));
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
      var $elm$parser$Parser$Advanced$fromState = F2(function(s, x) {
        return A2($elm$parser$Parser$Advanced$AddRight, $elm$parser$Parser$Advanced$Empty, A4($elm$parser$Parser$Advanced$DeadEnd, s.row, s.col, x, s.context));
      });
      var $elm$core$String$isEmpty = function(string) {
        return string === "";
      };
      var $elm$parser$Parser$Advanced$isSubString = _Parser_isSubString;
      var $elm$core$Basics$not = _Basics_not;
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
      var $elm$parser$Parser$token = function(str) {
        return $elm$parser$Parser$Advanced$token($elm$parser$Parser$toToken(str));
      };
      var $stil4m$elm_syntax$Combine$string = function(s) {
        return $stil4m$elm_syntax$Combine$Parser(function(state) {
          return A2($elm$parser$Parser$map, function(x) {
            return _Utils_Tuple2(state, x);
          }, $elm$parser$Parser$getChompedString($elm$parser$Parser$token(s)));
        });
      };
      var $stil4m$elm_syntax$Elm$Parser$Tokens$caseToken = $stil4m$elm_syntax$Combine$string("case");
      var $stil4m$elm_syntax$Elm$Syntax$Expression$CharLiteral = function(a) {
        return {
          $: "CharLiteral",
          a
        };
      };
      var $elm$parser$Parser$Problem = function(a) {
        return {
          $: "Problem",
          a
        };
      };
      var $elm$parser$Parser$Advanced$problem = function(x) {
        return $elm$parser$Parser$Advanced$Parser(function(s) {
          return A2($elm$parser$Parser$Advanced$Bad, false, A2($elm$parser$Parser$Advanced$fromState, s, x));
        });
      };
      var $elm$parser$Parser$problem = function(msg) {
        return $elm$parser$Parser$Advanced$problem($elm$parser$Parser$Problem(msg));
      };
      var $stil4m$elm_syntax$Combine$fail = function(m) {
        return $stil4m$elm_syntax$Combine$Parser(function(state) {
          return A2($elm$parser$Parser$map, function(x) {
            return _Utils_Tuple2(state, x);
          }, $elm$parser$Parser$problem(m));
        });
      };
      var $elm$parser$Parser$UnexpectedChar = {
        $: "UnexpectedChar"
      };
      var $elm$parser$Parser$Advanced$isSubChar = _Parser_isSubChar;
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
      var $elm$parser$Parser$chompIf = function(isGood) {
        return A2($elm$parser$Parser$Advanced$chompIf, isGood, $elm$parser$Parser$UnexpectedChar);
      };
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
      var $elm$parser$Parser$Advanced$keeper = F2(function(parseFunc, parseArg) {
        return A3($elm$parser$Parser$Advanced$map2, $elm$core$Basics$apL, parseFunc, parseArg);
      });
      var $elm$parser$Parser$keeper = $elm$parser$Parser$Advanced$keeper;
      var $stil4m$elm_syntax$Combine$fromCore = function(p) {
        return $stil4m$elm_syntax$Combine$Parser(function(state) {
          return A2($elm$parser$Parser$keeper, $elm$parser$Parser$succeed(function(v) {
            return _Utils_Tuple2(state, v);
          }), p);
        });
      };
      var $elm$core$String$foldr = _String_foldr;
      var $elm$core$String$toList = function(string) {
        return A3($elm$core$String$foldr, $elm$core$List$cons, _List_Nil, string);
      };
      var $stil4m$elm_syntax$Combine$Char$satisfy = function(pred) {
        return $stil4m$elm_syntax$Combine$fromCore(A2($elm$parser$Parser$andThen, function(s) {
          var _v0 = $elm$core$String$toList(s);
          if (!_v0.b) {
            return $elm$parser$Parser$succeed($elm$core$Maybe$Nothing);
          } else {
            var c = _v0.a;
            return $elm$parser$Parser$succeed($elm$core$Maybe$Just(c));
          }
        }, $elm$parser$Parser$getChompedString($elm$parser$Parser$chompIf(pred))));
      };
      var $stil4m$elm_syntax$Combine$Char$anyChar = A2($stil4m$elm_syntax$Combine$andThen, A2($elm$core$Basics$composeR, $elm$core$Maybe$map($stil4m$elm_syntax$Combine$succeed), $elm$core$Maybe$withDefault($stil4m$elm_syntax$Combine$fail("expected any character"))), $stil4m$elm_syntax$Combine$Char$satisfy($elm$core$Basics$always(true)));
      var $elm$core$String$fromList = _String_fromList;
      var $stil4m$elm_syntax$Combine$Char$char = function(c) {
        return A2($stil4m$elm_syntax$Combine$andThen, A2($elm$core$Basics$composeR, $elm$core$Maybe$map($stil4m$elm_syntax$Combine$succeed), $elm$core$Maybe$withDefault($stil4m$elm_syntax$Combine$fail("expected '" + ($elm$core$String$fromList(_List_fromArray([c])) + "'")))), $stil4m$elm_syntax$Combine$Char$satisfy($elm$core$Basics$eq(c)));
      };
      var $stil4m$elm_syntax$Combine$map = F2(function(f, _v0) {
        var p = _v0.a;
        return $stil4m$elm_syntax$Combine$Parser(function(state) {
          return A2($elm$parser$Parser$map, function(_v1) {
            var s = _v1.a;
            var a = _v1.b;
            return _Utils_Tuple2(s, f(a));
          }, p(state));
        });
      });
      var $stil4m$elm_syntax$Combine$continueWith = F2(function(target, dropped) {
        return A2($stil4m$elm_syntax$Combine$andMap, target, A2($stil4m$elm_syntax$Combine$map, F2(function(b, a) {
          return A2($elm$core$Basics$always, a, b);
        }), dropped));
      });
      var $stil4m$elm_syntax$Combine$ignore = F2(function(dropped, target) {
        return A2($stil4m$elm_syntax$Combine$andMap, dropped, A2($stil4m$elm_syntax$Combine$map, $elm$core$Basics$always, target));
      });
      var $stil4m$elm_syntax$Combine$or = F2(function(_v0, _v1) {
        var lp = _v0.a;
        var rp = _v1.a;
        return $stil4m$elm_syntax$Combine$Parser(function(state) {
          return $elm$parser$Parser$oneOf(_List_fromArray([lp(state), rp(state)]));
        });
      });
      var $elm$core$String$any = _String_any;
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
      var $elm$core$Basics$pow = _Basics_pow;
      var $rtfeldman$elm_hex$Hex$fromStringHelp = F3(function(position, chars, accumulated) {
        fromStringHelp:
          while (true) {
            if (!chars.b) {
              return $elm$core$Result$Ok(accumulated);
            } else {
              var _char = chars.a;
              var rest = chars.b;
              switch (_char.valueOf()) {
                case "0":
                  var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated;
                  position = $temp$position;
                  chars = $temp$chars;
                  accumulated = $temp$accumulated;
                  continue fromStringHelp;
                case "1":
                  var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + A2($elm$core$Basics$pow, 16, position);
                  position = $temp$position;
                  chars = $temp$chars;
                  accumulated = $temp$accumulated;
                  continue fromStringHelp;
                case "2":
                  var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + 2 * A2($elm$core$Basics$pow, 16, position);
                  position = $temp$position;
                  chars = $temp$chars;
                  accumulated = $temp$accumulated;
                  continue fromStringHelp;
                case "3":
                  var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + 3 * A2($elm$core$Basics$pow, 16, position);
                  position = $temp$position;
                  chars = $temp$chars;
                  accumulated = $temp$accumulated;
                  continue fromStringHelp;
                case "4":
                  var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + 4 * A2($elm$core$Basics$pow, 16, position);
                  position = $temp$position;
                  chars = $temp$chars;
                  accumulated = $temp$accumulated;
                  continue fromStringHelp;
                case "5":
                  var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + 5 * A2($elm$core$Basics$pow, 16, position);
                  position = $temp$position;
                  chars = $temp$chars;
                  accumulated = $temp$accumulated;
                  continue fromStringHelp;
                case "6":
                  var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + 6 * A2($elm$core$Basics$pow, 16, position);
                  position = $temp$position;
                  chars = $temp$chars;
                  accumulated = $temp$accumulated;
                  continue fromStringHelp;
                case "7":
                  var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + 7 * A2($elm$core$Basics$pow, 16, position);
                  position = $temp$position;
                  chars = $temp$chars;
                  accumulated = $temp$accumulated;
                  continue fromStringHelp;
                case "8":
                  var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + 8 * A2($elm$core$Basics$pow, 16, position);
                  position = $temp$position;
                  chars = $temp$chars;
                  accumulated = $temp$accumulated;
                  continue fromStringHelp;
                case "9":
                  var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + 9 * A2($elm$core$Basics$pow, 16, position);
                  position = $temp$position;
                  chars = $temp$chars;
                  accumulated = $temp$accumulated;
                  continue fromStringHelp;
                case "a":
                  var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + 10 * A2($elm$core$Basics$pow, 16, position);
                  position = $temp$position;
                  chars = $temp$chars;
                  accumulated = $temp$accumulated;
                  continue fromStringHelp;
                case "b":
                  var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + 11 * A2($elm$core$Basics$pow, 16, position);
                  position = $temp$position;
                  chars = $temp$chars;
                  accumulated = $temp$accumulated;
                  continue fromStringHelp;
                case "c":
                  var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + 12 * A2($elm$core$Basics$pow, 16, position);
                  position = $temp$position;
                  chars = $temp$chars;
                  accumulated = $temp$accumulated;
                  continue fromStringHelp;
                case "d":
                  var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + 13 * A2($elm$core$Basics$pow, 16, position);
                  position = $temp$position;
                  chars = $temp$chars;
                  accumulated = $temp$accumulated;
                  continue fromStringHelp;
                case "e":
                  var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + 14 * A2($elm$core$Basics$pow, 16, position);
                  position = $temp$position;
                  chars = $temp$chars;
                  accumulated = $temp$accumulated;
                  continue fromStringHelp;
                case "f":
                  var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + 15 * A2($elm$core$Basics$pow, 16, position);
                  position = $temp$position;
                  chars = $temp$chars;
                  accumulated = $temp$accumulated;
                  continue fromStringHelp;
                default:
                  var nonHex = _char;
                  return $elm$core$Result$Err($elm$core$String$fromChar(nonHex) + " is not a valid hexadecimal character.");
              }
            }
          }
      });
      var $elm$core$Result$mapError = F2(function(f, result) {
        if (result.$ === "Ok") {
          var v = result.a;
          return $elm$core$Result$Ok(v);
        } else {
          var e = result.a;
          return $elm$core$Result$Err(f(e));
        }
      });
      var $elm$core$String$startsWith = _String_startsWith;
      var $elm$core$List$tail = function(list) {
        if (list.b) {
          var x = list.a;
          var xs = list.b;
          return $elm$core$Maybe$Just(xs);
        } else {
          return $elm$core$Maybe$Nothing;
        }
      };
      var $rtfeldman$elm_hex$Hex$fromString = function(str) {
        if ($elm$core$String$isEmpty(str)) {
          return $elm$core$Result$Err("Empty strings are not valid hexadecimal strings.");
        } else {
          var result = function() {
            if (A2($elm$core$String$startsWith, "-", str)) {
              var list = A2($elm$core$Maybe$withDefault, _List_Nil, $elm$core$List$tail($elm$core$String$toList(str)));
              return A2($elm$core$Result$map, $elm$core$Basics$negate, A3($rtfeldman$elm_hex$Hex$fromStringHelp, $elm$core$List$length(list) - 1, list, 0));
            } else {
              return A3($rtfeldman$elm_hex$Hex$fromStringHelp, $elm$core$String$length(str) - 1, $elm$core$String$toList(str), 0);
            }
          }();
          var formatError = function(err) {
            return A2($elm$core$String$join, " ", _List_fromArray(['"' + (str + '"'), "is not a valid hexadecimal string because", err]));
          };
          return A2($elm$core$Result$mapError, formatError, result);
        }
      };
      var $elm$parser$Parser$Advanced$ignorer = F2(function(keepParser, ignoreParser) {
        return A3($elm$parser$Parser$Advanced$map2, $elm$core$Basics$always, keepParser, ignoreParser);
      });
      var $elm$parser$Parser$ignorer = $elm$parser$Parser$Advanced$ignorer;
      var $elm$parser$Parser$ExpectingSymbol = function(a) {
        return {
          $: "ExpectingSymbol",
          a
        };
      };
      var $elm$parser$Parser$Advanced$symbol = $elm$parser$Parser$Advanced$token;
      var $elm$parser$Parser$symbol = function(str) {
        return $elm$parser$Parser$Advanced$symbol(A2($elm$parser$Parser$Advanced$Token, str, $elm$parser$Parser$ExpectingSymbol(str)));
      };
      var $elm$core$Result$withDefault = F2(function(def, result) {
        if (result.$ === "Ok") {
          var a = result.a;
          return a;
        } else {
          return def;
        }
      });
      var $stil4m$elm_syntax$Elm$Parser$Tokens$escapedCharValue = $elm$parser$Parser$oneOf(_List_fromArray([A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed(_Utils_chr("'")), $elm$parser$Parser$symbol("'")), A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed(_Utils_chr('"')), $elm$parser$Parser$symbol('"')), A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed(_Utils_chr("\n")), $elm$parser$Parser$symbol("n")), A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed(_Utils_chr("	")), $elm$parser$Parser$symbol("t")), A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed(_Utils_chr("\r")), $elm$parser$Parser$symbol("r")), A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed(_Utils_chr("\\")), $elm$parser$Parser$symbol("\\")), A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed(A2($elm$core$Basics$composeR, $elm$core$String$toLower, A2($elm$core$Basics$composeR, $rtfeldman$elm_hex$Hex$fromString, A2($elm$core$Basics$composeR, $elm$core$Result$withDefault(0), $elm$core$Char$fromCode)))), $elm$parser$Parser$symbol("u")), $elm$parser$Parser$symbol("{")), A2($elm$parser$Parser$ignorer, $elm$parser$Parser$getChompedString($elm$parser$Parser$chompWhile(function(c) {
        return A2($elm$core$String$any, $elm$core$Basics$eq(c), "0123456789ABCDEFabcdef");
      })), $elm$parser$Parser$symbol("}")))]));
      var $elm$core$List$singleton = function(value) {
        return _List_fromArray([value]);
      };
      var $stil4m$elm_syntax$Elm$Parser$Tokens$quotedSingleQuote = $stil4m$elm_syntax$Combine$fromCore(A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed(A2($elm$core$Basics$composeR, $elm$core$String$toList, A2($elm$core$Basics$composeR, $elm$core$List$head, $elm$core$Maybe$withDefault(_Utils_chr(" "))))), $elm$parser$Parser$symbol("'")), A2($elm$parser$Parser$ignorer, $elm$parser$Parser$oneOf(_List_fromArray([A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed(A2($elm$core$Basics$composeR, $elm$core$List$singleton, $elm$core$String$fromList)), $elm$parser$Parser$symbol("\\")), $stil4m$elm_syntax$Elm$Parser$Tokens$escapedCharValue), $elm$parser$Parser$getChompedString($elm$parser$Parser$chompIf($elm$core$Basics$always(true)))])), $elm$parser$Parser$symbol("'"))));
      var $stil4m$elm_syntax$Elm$Parser$Tokens$characterLiteral = A2($stil4m$elm_syntax$Combine$or, $stil4m$elm_syntax$Elm$Parser$Tokens$quotedSingleQuote, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$Char$char(_Utils_chr("'")), A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Combine$Char$anyChar, $stil4m$elm_syntax$Combine$Char$char(_Utils_chr("'")))));
      var $stil4m$elm_syntax$Elm$Parser$Node$asPointerLocation = function(_v0) {
        var line = _v0.line;
        var column = _v0.column;
        return {
          column,
          row: line
        };
      };
      var $stil4m$elm_syntax$Combine$app = function(_v0) {
        var inner = _v0.a;
        return inner;
      };
      var $elm$parser$Parser$Advanced$getPosition = $elm$parser$Parser$Advanced$Parser(function(s) {
        return A3($elm$parser$Parser$Advanced$Good, false, _Utils_Tuple2(s.row, s.col), s);
      });
      var $elm$parser$Parser$getPosition = $elm$parser$Parser$Advanced$getPosition;
      var $stil4m$elm_syntax$Combine$withLocation = function(f) {
        return $stil4m$elm_syntax$Combine$Parser(function(state) {
          return A2($elm$parser$Parser$andThen, function(loc) {
            return A2($stil4m$elm_syntax$Combine$app, f(loc), state);
          }, A2($elm$parser$Parser$map, function(_v0) {
            var row = _v0.a;
            var col = _v0.b;
            return {
              column: col,
              line: row
            };
          }, $elm$parser$Parser$getPosition));
        });
      };
      var $stil4m$elm_syntax$Elm$Parser$Node$parser = function(p) {
        return $stil4m$elm_syntax$Combine$withLocation(function(start) {
          return A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Combine$withLocation(function(end) {
            return $stil4m$elm_syntax$Combine$succeed({
              end: $stil4m$elm_syntax$Elm$Parser$Node$asPointerLocation(end),
              start: $stil4m$elm_syntax$Elm$Parser$Node$asPointerLocation(start)
            });
          }), A2($stil4m$elm_syntax$Combine$andMap, p, $stil4m$elm_syntax$Combine$succeed(F2(function(v, r) {
            return A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, r, v);
          }))));
        });
      };
      var $stil4m$elm_syntax$Elm$Parser$Declarations$charLiteralExpression = $stil4m$elm_syntax$Elm$Parser$Node$parser(A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Syntax$Expression$CharLiteral, $stil4m$elm_syntax$Elm$Parser$Tokens$characterLiteral));
      var $stil4m$elm_syntax$Elm$Parser$Tokens$elseToken = $stil4m$elm_syntax$Combine$string("else");
      var $stil4m$elm_syntax$Elm$Parser$State$currentIndent = function(_v0) {
        var indents = _v0.a.indents;
        return A2($elm$core$Maybe$withDefault, 0, $elm$core$List$head(indents));
      };
      var $stil4m$elm_syntax$Elm$Parser$State$expectedColumn = A2($elm$core$Basics$composeR, $stil4m$elm_syntax$Elm$Parser$State$currentIndent, $elm$core$Basics$add(1));
      var $stil4m$elm_syntax$Elm$Syntax$Pattern$AsPattern = F2(function(a, b) {
        return {
          $: "AsPattern",
          a,
          b
        };
      });
      var $stil4m$elm_syntax$Elm$Syntax$Pattern$CharPattern = function(a) {
        return {
          $: "CharPattern",
          a
        };
      };
      var $stil4m$elm_syntax$Elm$Syntax$Pattern$ListPattern = function(a) {
        return {
          $: "ListPattern",
          a
        };
      };
      var $stil4m$elm_syntax$Elm$Syntax$Pattern$QualifiedNameRef = F2(function(moduleName, name) {
        return {
          moduleName,
          name
        };
      });
      var $stil4m$elm_syntax$Elm$Syntax$Pattern$UnConsPattern = F2(function(a, b) {
        return {
          $: "UnConsPattern",
          a,
          b
        };
      });
      var $stil4m$elm_syntax$Combine$between = F3(function(lp, rp, p) {
        return A2($stil4m$elm_syntax$Combine$ignore, rp, A2($stil4m$elm_syntax$Combine$continueWith, p, lp));
      });
      var $elm$core$Set$Set_elm_builtin = function(a) {
        return {
          $: "Set_elm_builtin",
          a
        };
      };
      var $elm$core$Set$empty = $elm$core$Set$Set_elm_builtin($elm$core$Dict$empty);
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
      var $stil4m$elm_syntax$Elm$Parser$Tokens$reservedList = _List_fromArray(["module", "exposing", "import", "as", "if", "then", "else", "let", "in", "case", "of", "port", "infixr", "infixl", "type", "where"]);
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
      var $stil4m$elm_syntax$Elm$Parser$Tokens$functionName = $stil4m$elm_syntax$Combine$fromCore($elm$parser$Parser$variable({
        inner: function(c) {
          return $elm$core$Char$isAlphaNum(c) || _Utils_eq(c, _Utils_chr("_"));
        },
        reserved: $elm$core$Set$fromList($stil4m$elm_syntax$Elm$Parser$Tokens$reservedList),
        start: $elm$core$Char$isLower
      }));
      var $elm$parser$Parser$ExpectingKeyword = function(a) {
        return {
          $: "ExpectingKeyword",
          a
        };
      };
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
      var $elm$parser$Parser$Advanced$lazy = function(thunk) {
        return $elm$parser$Parser$Advanced$Parser(function(s) {
          var _v0 = thunk(_Utils_Tuple0);
          var parse = _v0.a;
          return parse(s);
        });
      };
      var $elm$parser$Parser$lazy = $elm$parser$Parser$Advanced$lazy;
      var $stil4m$elm_syntax$Combine$lazy = function(t) {
        return $stil4m$elm_syntax$Combine$Parser(function(state) {
          return $elm$parser$Parser$lazy(function(_v0) {
            return function(_v1) {
              var t_ = _v1.a;
              return t_(state);
            }(t(_Utils_Tuple0));
          });
        });
      };
      var $elm$parser$Parser$Nestable = {
        $: "Nestable"
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
      var $elm$core$Basics$neq = _Utils_notEqual;
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
      var $elm$parser$Parser$multiComment = F3(function(open, close, nestable) {
        return A3($elm$parser$Parser$Advanced$multiComment, $elm$parser$Parser$toToken(open), $elm$parser$Parser$toToken(close), $elm$parser$Parser$toAdvancedNestable(nestable));
      });
      var $stil4m$elm_syntax$Elm$Parser$Comments$multilineCommentInner = $stil4m$elm_syntax$Combine$fromCore($elm$parser$Parser$getChompedString(A3($elm$parser$Parser$multiComment, "{-", "-}", $elm$parser$Parser$Nestable)));
      var $stil4m$elm_syntax$Elm$Parser$State$addComment = F2(function(pair, _v0) {
        var s = _v0.a;
        return $stil4m$elm_syntax$Elm$Parser$State$State(_Utils_update(s, {
          comments: A2($elm$core$List$cons, pair, s.comments)
        }));
      });
      var $stil4m$elm_syntax$Combine$modifyState = function(f) {
        return $stil4m$elm_syntax$Combine$Parser(function(state) {
          return $elm$parser$Parser$succeed(_Utils_Tuple2(f(state), _Utils_Tuple0));
        });
      };
      var $stil4m$elm_syntax$Elm$Parser$Comments$addCommentToState = function(p) {
        return A2($stil4m$elm_syntax$Combine$andThen, function(pair) {
          return A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Combine$succeed(_Utils_Tuple0), $stil4m$elm_syntax$Combine$modifyState($stil4m$elm_syntax$Elm$Parser$State$addComment(pair)));
        }, p);
      };
      var $stil4m$elm_syntax$Elm$Parser$Comments$parseComment = function(commentParser) {
        return $stil4m$elm_syntax$Elm$Parser$Comments$addCommentToState($stil4m$elm_syntax$Elm$Parser$Node$parser(commentParser));
      };
      var $stil4m$elm_syntax$Elm$Parser$Comments$multilineComment = $stil4m$elm_syntax$Combine$lazy(function(_v0) {
        return $stil4m$elm_syntax$Elm$Parser$Comments$parseComment($stil4m$elm_syntax$Elm$Parser$Comments$multilineCommentInner);
      });
      var $stil4m$elm_syntax$Elm$Parser$Whitespace$untilNewlineToken = $stil4m$elm_syntax$Combine$fromCore($elm$parser$Parser$getChompedString($elm$parser$Parser$chompWhile(function(c) {
        return !_Utils_eq(c, _Utils_chr("\r")) && !_Utils_eq(c, _Utils_chr("\n"));
      })));
      var $stil4m$elm_syntax$Elm$Parser$Comments$singleLineComment = $stil4m$elm_syntax$Elm$Parser$Comments$parseComment(A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$Whitespace$untilNewlineToken, A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Combine$string("--"), $stil4m$elm_syntax$Combine$succeed($elm$core$Basics$append))));
      var $stil4m$elm_syntax$Elm$Parser$Layout$anyComment = A2($stil4m$elm_syntax$Combine$or, $stil4m$elm_syntax$Elm$Parser$Comments$singleLineComment, $stil4m$elm_syntax$Elm$Parser$Comments$multilineComment);
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
      var $stil4m$elm_syntax$Combine$many = function(p) {
        var helper = function(_v2) {
          var oldState = _v2.a;
          var items = _v2.b;
          return $elm$parser$Parser$oneOf(_List_fromArray([A2($elm$parser$Parser$keeper, $elm$parser$Parser$succeed(function(_v0) {
            var newState = _v0.a;
            var item = _v0.b;
            return $elm$parser$Parser$Loop(_Utils_Tuple2(newState, A2($elm$core$List$cons, item, items)));
          }), A2($stil4m$elm_syntax$Combine$app, p, oldState)), A2($elm$parser$Parser$map, function(_v1) {
            return $elm$parser$Parser$Done(_Utils_Tuple2(oldState, $elm$core$List$reverse(items)));
          }, $elm$parser$Parser$succeed(_Utils_Tuple0))]));
        };
        return $stil4m$elm_syntax$Combine$Parser(function(state) {
          return A2($elm$parser$Parser$loop, _Utils_Tuple2(state, _List_Nil), helper);
        });
      };
      var $stil4m$elm_syntax$Combine$many1 = function(p) {
        return A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Combine$many(p), A2($stil4m$elm_syntax$Combine$andMap, p, $stil4m$elm_syntax$Combine$succeed($elm$core$List$cons)));
      };
      var $stil4m$elm_syntax$Elm$Parser$Whitespace$many1Spaces = $stil4m$elm_syntax$Combine$fromCore(A2($elm$parser$Parser$ignorer, $elm$parser$Parser$token(" "), $elm$parser$Parser$chompWhile(function(c) {
        return _Utils_eq(c, _Utils_chr(" "));
      })));
      var $stil4m$elm_syntax$Elm$Parser$Whitespace$realNewLine = $stil4m$elm_syntax$Combine$fromCore($elm$parser$Parser$getChompedString(A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed(_Utils_Tuple0), $elm$parser$Parser$oneOf(_List_fromArray([$elm$parser$Parser$chompIf($elm$core$Basics$eq(_Utils_chr("\r"))), $elm$parser$Parser$succeed(_Utils_Tuple0)]))), $elm$parser$Parser$symbol("\n"))));
      var $stil4m$elm_syntax$Elm$Parser$Layout$verifyIndent = function(f) {
        return $stil4m$elm_syntax$Combine$withState(function(s) {
          return $stil4m$elm_syntax$Combine$withLocation(function(l) {
            return A2(f, $stil4m$elm_syntax$Elm$Parser$State$expectedColumn(s), l.column) ? $stil4m$elm_syntax$Combine$succeed(_Utils_Tuple0) : $stil4m$elm_syntax$Combine$fail("Expected higher indent than " + $elm$core$String$fromInt(l.column));
          });
        });
      };
      var $stil4m$elm_syntax$Elm$Parser$Layout$layout = A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Layout$verifyIndent(F2(function(stateIndent, current) {
        return _Utils_cmp(stateIndent, current) < 0;
      })), $stil4m$elm_syntax$Combine$many1($stil4m$elm_syntax$Combine$choice(_List_fromArray([$stil4m$elm_syntax$Elm$Parser$Layout$anyComment, A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Combine$choice(_List_fromArray([$stil4m$elm_syntax$Elm$Parser$Whitespace$many1Spaces, $stil4m$elm_syntax$Elm$Parser$Layout$anyComment])), $stil4m$elm_syntax$Combine$many1($stil4m$elm_syntax$Elm$Parser$Whitespace$realNewLine)), $stil4m$elm_syntax$Elm$Parser$Whitespace$many1Spaces]))));
      var $stil4m$elm_syntax$Combine$maybe = function(_v0) {
        var p = _v0.a;
        return $stil4m$elm_syntax$Combine$Parser(function(state) {
          return $elm$parser$Parser$oneOf(_List_fromArray([A2($elm$parser$Parser$map, function(_v1) {
            var c = _v1.a;
            var v = _v1.b;
            return _Utils_Tuple2(c, $elm$core$Maybe$Just(v));
          }, p(state)), $elm$parser$Parser$succeed(_Utils_Tuple2(state, $elm$core$Maybe$Nothing))]));
        });
      };
      var $stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides = function(x) {
        return A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), A2($stil4m$elm_syntax$Combine$continueWith, x, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout)));
      };
      var $stil4m$elm_syntax$Elm$Syntax$Pattern$FloatPattern = function(a) {
        return {
          $: "FloatPattern",
          a
        };
      };
      var $stil4m$elm_syntax$Elm$Syntax$Pattern$HexPattern = function(a) {
        return {
          $: "HexPattern",
          a
        };
      };
      var $stil4m$elm_syntax$Elm$Syntax$Pattern$IntPattern = function(a) {
        return {
          $: "IntPattern",
          a
        };
      };
      var $elm$parser$Parser$ExpectingBinary = {
        $: "ExpectingBinary"
      };
      var $elm$parser$Parser$ExpectingFloat = {
        $: "ExpectingFloat"
      };
      var $elm$parser$Parser$ExpectingHex = {
        $: "ExpectingHex"
      };
      var $elm$parser$Parser$ExpectingInt = {
        $: "ExpectingInt"
      };
      var $elm$parser$Parser$ExpectingNumber = {
        $: "ExpectingNumber"
      };
      var $elm$parser$Parser$ExpectingOctal = {
        $: "ExpectingOctal"
      };
      var $elm$core$Result$fromMaybe = F2(function(err, maybe) {
        if (maybe.$ === "Just") {
          var v = maybe.a;
          return $elm$core$Result$Ok(v);
        } else {
          return $elm$core$Result$Err(err);
        }
      });
      var $elm$parser$Parser$Advanced$consumeBase = _Parser_consumeBase;
      var $elm$parser$Parser$Advanced$consumeBase16 = _Parser_consumeBase16;
      var $elm$parser$Parser$Advanced$bumpOffset = F2(function(newOffset, s) {
        return {
          col: s.col + (newOffset - s.offset),
          context: s.context,
          indent: s.indent,
          offset: newOffset,
          row: s.row,
          src: s.src
        };
      });
      var $elm$parser$Parser$Advanced$chompBase10 = _Parser_chompBase10;
      var $elm$parser$Parser$Advanced$isAsciiCode = _Parser_isAsciiCode;
      var $elm$parser$Parser$Advanced$consumeExp = F2(function(offset, src) {
        if (A3($elm$parser$Parser$Advanced$isAsciiCode, 101, offset, src) || A3($elm$parser$Parser$Advanced$isAsciiCode, 69, offset, src)) {
          var eOffset = offset + 1;
          var expOffset = A3($elm$parser$Parser$Advanced$isAsciiCode, 43, eOffset, src) || A3($elm$parser$Parser$Advanced$isAsciiCode, 45, eOffset, src) ? eOffset + 1 : eOffset;
          var newOffset = A2($elm$parser$Parser$Advanced$chompBase10, expOffset, src);
          return _Utils_eq(expOffset, newOffset) ? -newOffset : newOffset;
        } else {
          return offset;
        }
      });
      var $elm$parser$Parser$Advanced$consumeDotAndExp = F2(function(offset, src) {
        return A3($elm$parser$Parser$Advanced$isAsciiCode, 46, offset, src) ? A2($elm$parser$Parser$Advanced$consumeExp, A2($elm$parser$Parser$Advanced$chompBase10, offset + 1, src), src) : A2($elm$parser$Parser$Advanced$consumeExp, offset, src);
      });
      var $elm$parser$Parser$Advanced$finalizeInt = F5(function(invalid, handler, startOffset, _v0, s) {
        var endOffset = _v0.a;
        var n = _v0.b;
        if (handler.$ === "Err") {
          var x = handler.a;
          return A2($elm$parser$Parser$Advanced$Bad, true, A2($elm$parser$Parser$Advanced$fromState, s, x));
        } else {
          var toValue = handler.a;
          return _Utils_eq(startOffset, endOffset) ? A2($elm$parser$Parser$Advanced$Bad, _Utils_cmp(s.offset, startOffset) < 0, A2($elm$parser$Parser$Advanced$fromState, s, invalid)) : A3($elm$parser$Parser$Advanced$Good, true, toValue(n), A2($elm$parser$Parser$Advanced$bumpOffset, endOffset, s));
        }
      });
      var $elm$core$String$toFloat = _String_toFloat;
      var $elm$parser$Parser$Advanced$finalizeFloat = F6(function(invalid, expecting, intSettings, floatSettings, intPair, s) {
        var intOffset = intPair.a;
        var floatOffset = A2($elm$parser$Parser$Advanced$consumeDotAndExp, intOffset, s.src);
        if (floatOffset < 0) {
          return A2($elm$parser$Parser$Advanced$Bad, true, A4($elm$parser$Parser$Advanced$fromInfo, s.row, s.col - (floatOffset + s.offset), invalid, s.context));
        } else {
          if (_Utils_eq(s.offset, floatOffset)) {
            return A2($elm$parser$Parser$Advanced$Bad, false, A2($elm$parser$Parser$Advanced$fromState, s, expecting));
          } else {
            if (_Utils_eq(intOffset, floatOffset)) {
              return A5($elm$parser$Parser$Advanced$finalizeInt, invalid, intSettings, s.offset, intPair, s);
            } else {
              if (floatSettings.$ === "Err") {
                var x = floatSettings.a;
                return A2($elm$parser$Parser$Advanced$Bad, true, A2($elm$parser$Parser$Advanced$fromState, s, invalid));
              } else {
                var toValue = floatSettings.a;
                var _v1 = $elm$core$String$toFloat(A3($elm$core$String$slice, s.offset, floatOffset, s.src));
                if (_v1.$ === "Nothing") {
                  return A2($elm$parser$Parser$Advanced$Bad, true, A2($elm$parser$Parser$Advanced$fromState, s, invalid));
                } else {
                  var n = _v1.a;
                  return A3($elm$parser$Parser$Advanced$Good, true, toValue(n), A2($elm$parser$Parser$Advanced$bumpOffset, floatOffset, s));
                }
              }
            }
          }
        }
      });
      var $elm$parser$Parser$Advanced$number = function(c) {
        return $elm$parser$Parser$Advanced$Parser(function(s) {
          if (A3($elm$parser$Parser$Advanced$isAsciiCode, 48, s.offset, s.src)) {
            var zeroOffset = s.offset + 1;
            var baseOffset = zeroOffset + 1;
            return A3($elm$parser$Parser$Advanced$isAsciiCode, 120, zeroOffset, s.src) ? A5($elm$parser$Parser$Advanced$finalizeInt, c.invalid, c.hex, baseOffset, A2($elm$parser$Parser$Advanced$consumeBase16, baseOffset, s.src), s) : A3($elm$parser$Parser$Advanced$isAsciiCode, 111, zeroOffset, s.src) ? A5($elm$parser$Parser$Advanced$finalizeInt, c.invalid, c.octal, baseOffset, A3($elm$parser$Parser$Advanced$consumeBase, 8, baseOffset, s.src), s) : A3($elm$parser$Parser$Advanced$isAsciiCode, 98, zeroOffset, s.src) ? A5($elm$parser$Parser$Advanced$finalizeInt, c.invalid, c.binary, baseOffset, A3($elm$parser$Parser$Advanced$consumeBase, 2, baseOffset, s.src), s) : A6($elm$parser$Parser$Advanced$finalizeFloat, c.invalid, c.expecting, c._int, c._float, _Utils_Tuple2(zeroOffset, 0), s);
          } else {
            return A6($elm$parser$Parser$Advanced$finalizeFloat, c.invalid, c.expecting, c._int, c._float, A3($elm$parser$Parser$Advanced$consumeBase, 10, s.offset, s.src), s);
          }
        });
      };
      var $elm$parser$Parser$number = function(i) {
        return $elm$parser$Parser$Advanced$number({
          binary: A2($elm$core$Result$fromMaybe, $elm$parser$Parser$ExpectingBinary, i.binary),
          expecting: $elm$parser$Parser$ExpectingNumber,
          _float: A2($elm$core$Result$fromMaybe, $elm$parser$Parser$ExpectingFloat, i._float),
          hex: A2($elm$core$Result$fromMaybe, $elm$parser$Parser$ExpectingHex, i.hex),
          _int: A2($elm$core$Result$fromMaybe, $elm$parser$Parser$ExpectingInt, i._int),
          invalid: $elm$parser$Parser$ExpectingNumber,
          octal: A2($elm$core$Result$fromMaybe, $elm$parser$Parser$ExpectingOctal, i.octal)
        });
      };
      var $stil4m$elm_syntax$Elm$Parser$Numbers$raw = F3(function(floatf, intf, hexf) {
        return $elm$parser$Parser$number({
          binary: $elm$core$Maybe$Nothing,
          _float: $elm$core$Maybe$Just(floatf),
          hex: $elm$core$Maybe$Just(hexf),
          _int: $elm$core$Maybe$Just(intf),
          octal: $elm$core$Maybe$Nothing
        });
      });
      var $stil4m$elm_syntax$Elm$Parser$Numbers$number = F3(function(floatf, intf, hexf) {
        return $stil4m$elm_syntax$Combine$fromCore(A3($stil4m$elm_syntax$Elm$Parser$Numbers$raw, floatf, intf, hexf));
      });
      var $stil4m$elm_syntax$Elm$Parser$Patterns$numberPart = A3($stil4m$elm_syntax$Elm$Parser$Numbers$number, $stil4m$elm_syntax$Elm$Syntax$Pattern$FloatPattern, $stil4m$elm_syntax$Elm$Syntax$Pattern$IntPattern, $stil4m$elm_syntax$Elm$Syntax$Pattern$HexPattern);
      var $stil4m$elm_syntax$Combine$parens = A2($stil4m$elm_syntax$Combine$between, $stil4m$elm_syntax$Combine$string("("), $stil4m$elm_syntax$Combine$string(")"));
      var $stil4m$elm_syntax$Elm$Syntax$Pattern$RecordPattern = function(a) {
        return {
          $: "RecordPattern",
          a
        };
      };
      var $stil4m$elm_syntax$Combine$sepBy1 = F2(function(sep, p) {
        return A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Combine$many(A2($stil4m$elm_syntax$Combine$continueWith, p, sep)), A2($stil4m$elm_syntax$Combine$andMap, p, $stil4m$elm_syntax$Combine$succeed($elm$core$List$cons)));
      });
      var $stil4m$elm_syntax$Elm$Parser$Patterns$recordPart = $stil4m$elm_syntax$Combine$lazy(function(_v0) {
        return $stil4m$elm_syntax$Elm$Parser$Node$parser(A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Syntax$Pattern$RecordPattern, A3($stil4m$elm_syntax$Combine$between, A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), $stil4m$elm_syntax$Combine$string("{")), A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Combine$string("}"), $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout)), A2($stil4m$elm_syntax$Combine$sepBy1, $stil4m$elm_syntax$Combine$string(","), $stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides($stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$functionName))))));
      });
      var $stil4m$elm_syntax$Combine$sepBy = F2(function(sep, p) {
        return A2($stil4m$elm_syntax$Combine$or, A2($stil4m$elm_syntax$Combine$sepBy1, sep, p), $stil4m$elm_syntax$Combine$succeed(_List_Nil));
      });
      var $elm$core$String$concat = function(strings) {
        return A2($elm$core$String$join, "", strings);
      };
      var $elm$parser$Parser$Advanced$getOffset = $elm$parser$Parser$Advanced$Parser(function(s) {
        return A3($elm$parser$Parser$Advanced$Good, false, s.offset, s);
      });
      var $elm$parser$Parser$getOffset = $elm$parser$Parser$Advanced$getOffset;
      var $stil4m$elm_syntax$Elm$Parser$Tokens$stringLiteral = function() {
        var helper = function(s) {
          return s.escaped ? A2($elm$parser$Parser$map, function(v) {
            return $elm$parser$Parser$Loop(_Utils_update(s, {
              escaped: false,
              parts: A2($elm$core$List$cons, $elm$core$String$fromList(_List_fromArray([v])), s.parts)
            }));
          }, $stil4m$elm_syntax$Elm$Parser$Tokens$escapedCharValue) : $elm$parser$Parser$oneOf(_List_fromArray([A2($elm$parser$Parser$map, function(_v0) {
            return $elm$parser$Parser$Done($elm$core$String$concat($elm$core$List$reverse(s.parts)));
          }, $elm$parser$Parser$symbol('"')), A2($elm$parser$Parser$map, function(_v1) {
            return $elm$parser$Parser$Loop(_Utils_update(s, {
              escaped: true,
              parts: s.parts
            }));
          }, $elm$parser$Parser$getChompedString($elm$parser$Parser$symbol("\\"))), A2($elm$parser$Parser$andThen, function(_v2) {
            var start = _v2.a;
            var value = _v2.b;
            var end = _v2.c;
            return _Utils_eq(start, end) ? $elm$parser$Parser$problem("Expected a string character or a double quote") : $elm$parser$Parser$succeed($elm$parser$Parser$Loop(_Utils_update(s, {
              parts: A2($elm$core$List$cons, value, s.parts)
            })));
          }, A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$keeper, $elm$parser$Parser$succeed(F3(function(start, value, end) {
            return _Utils_Tuple3(start, value, end);
          })), $elm$parser$Parser$getOffset), $elm$parser$Parser$getChompedString($elm$parser$Parser$chompWhile(function(c) {
            return !_Utils_eq(c, _Utils_chr('"')) && !_Utils_eq(c, _Utils_chr("\\"));
          }))), $elm$parser$Parser$getOffset))]));
        };
        return $stil4m$elm_syntax$Combine$fromCore(A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed($elm$core$Basics$identity), $elm$parser$Parser$symbol('"')), A2($elm$parser$Parser$loop, {
          escaped: false,
          parts: _List_Nil
        }, helper)));
      }();
      var $stil4m$elm_syntax$Elm$Parser$Tokens$typeName = $stil4m$elm_syntax$Combine$fromCore($elm$parser$Parser$variable({
        inner: function(c) {
          return $elm$core$Char$isAlphaNum(c) || _Utils_eq(c, _Utils_chr("_"));
        },
        reserved: $elm$core$Set$fromList($stil4m$elm_syntax$Elm$Parser$Tokens$reservedList),
        start: $elm$core$Char$isUpper
      }));
      var $stil4m$elm_syntax$Elm$Parser$Base$typeIndicator = function() {
        var helper = function(_v0) {
          var n = _v0.a;
          var xs = _v0.b;
          return $stil4m$elm_syntax$Combine$choice(_List_fromArray([A2($stil4m$elm_syntax$Combine$andThen, function(t) {
            return helper(_Utils_Tuple2(t, A2($elm$core$List$cons, n, xs)));
          }, A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Tokens$typeName, $stil4m$elm_syntax$Combine$string("."))), $stil4m$elm_syntax$Combine$succeed(_Utils_Tuple2(n, xs))]));
        };
        return A2($stil4m$elm_syntax$Combine$map, function(_v1) {
          var t = _v1.a;
          var xs = _v1.b;
          return _Utils_Tuple2($elm$core$List$reverse(xs), t);
        }, A2($stil4m$elm_syntax$Combine$andThen, function(t) {
          return helper(_Utils_Tuple2(t, _List_Nil));
        }, $stil4m$elm_syntax$Elm$Parser$Tokens$typeName));
      }();
      var $stil4m$elm_syntax$Elm$Parser$Patterns$variablePart = $stil4m$elm_syntax$Elm$Parser$Node$parser(A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Syntax$Pattern$VarPattern, $stil4m$elm_syntax$Elm$Parser$Tokens$functionName));
      var $stil4m$elm_syntax$Elm$Parser$Patterns$qualifiedPattern = function(consumeArgs) {
        return A2($stil4m$elm_syntax$Combine$andThen, function(_v0) {
          var range = _v0.a;
          var _v1 = _v0.b;
          var mod = _v1.a;
          var name = _v1.b;
          return A2($stil4m$elm_syntax$Combine$map, function(args) {
            return A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$combine(A2($elm$core$List$cons, range, A2($elm$core$List$map, function(_v2) {
              var r = _v2.a;
              return r;
            }, args))), A2($stil4m$elm_syntax$Elm$Syntax$Pattern$NamedPattern, A2($stil4m$elm_syntax$Elm$Syntax$Pattern$QualifiedNameRef, mod, name), args));
          }, consumeArgs ? $stil4m$elm_syntax$Combine$many(A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$qualifiedPatternArg())) : $stil4m$elm_syntax$Combine$succeed(_List_Nil));
        }, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Base$typeIndicator)));
      };
      var $stil4m$elm_syntax$Elm$Parser$Patterns$tryToCompose = function(x) {
        return A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Combine$choice(_List_fromArray([A2($stil4m$elm_syntax$Combine$map, function(y) {
          return A3($stil4m$elm_syntax$Elm$Syntax$Node$combine, $stil4m$elm_syntax$Elm$Syntax$Pattern$AsPattern, x, y);
        }, A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$functionName), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Layout$layout, $stil4m$elm_syntax$Combine$fromCore($elm$parser$Parser$keyword("as"))))), A2($stil4m$elm_syntax$Combine$map, function(y) {
          return A3($stil4m$elm_syntax$Elm$Syntax$Node$combine, $stil4m$elm_syntax$Elm$Syntax$Pattern$UnConsPattern, x, y);
        }, A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$pattern(), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), $stil4m$elm_syntax$Combine$fromCore($elm$parser$Parser$symbol("::"))))), $stil4m$elm_syntax$Combine$succeed(x)])), $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout));
      };
      function $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$pattern() {
        return A2($stil4m$elm_syntax$Combine$andThen, $stil4m$elm_syntax$Elm$Parser$Patterns$tryToCompose, $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$composablePattern());
      }
      function $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$composablePattern() {
        return $stil4m$elm_syntax$Combine$choice(_List_fromArray([$stil4m$elm_syntax$Elm$Parser$Patterns$variablePart, $stil4m$elm_syntax$Elm$Parser$Patterns$qualifiedPattern(true), $stil4m$elm_syntax$Elm$Parser$Node$parser(A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Syntax$Pattern$StringPattern, $stil4m$elm_syntax$Elm$Parser$Tokens$stringLiteral)), $stil4m$elm_syntax$Elm$Parser$Node$parser(A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Syntax$Pattern$CharPattern, $stil4m$elm_syntax$Elm$Parser$Tokens$characterLiteral)), $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Patterns$numberPart), $stil4m$elm_syntax$Elm$Parser$Node$parser(A2($stil4m$elm_syntax$Combine$map, $elm$core$Basics$always($stil4m$elm_syntax$Elm$Syntax$Pattern$UnitPattern), $stil4m$elm_syntax$Combine$fromCore($elm$parser$Parser$symbol("()")))), $stil4m$elm_syntax$Elm$Parser$Node$parser(A2($stil4m$elm_syntax$Combine$map, $elm$core$Basics$always($stil4m$elm_syntax$Elm$Syntax$Pattern$AllPattern), $stil4m$elm_syntax$Combine$fromCore($elm$parser$Parser$symbol("_")))), $stil4m$elm_syntax$Elm$Parser$Patterns$recordPart, $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$listPattern(), $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$parensPattern()]));
      }
      function $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$qualifiedPatternArg() {
        return $stil4m$elm_syntax$Combine$choice(_List_fromArray([$stil4m$elm_syntax$Elm$Parser$Patterns$variablePart, $stil4m$elm_syntax$Elm$Parser$Patterns$qualifiedPattern(false), $stil4m$elm_syntax$Elm$Parser$Node$parser(A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Syntax$Pattern$StringPattern, $stil4m$elm_syntax$Elm$Parser$Tokens$stringLiteral)), $stil4m$elm_syntax$Elm$Parser$Node$parser(A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Syntax$Pattern$CharPattern, $stil4m$elm_syntax$Elm$Parser$Tokens$characterLiteral)), $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Patterns$numberPart), $stil4m$elm_syntax$Elm$Parser$Node$parser(A2($stil4m$elm_syntax$Combine$map, $elm$core$Basics$always($stil4m$elm_syntax$Elm$Syntax$Pattern$UnitPattern), $stil4m$elm_syntax$Combine$fromCore($elm$parser$Parser$symbol("()")))), $stil4m$elm_syntax$Elm$Parser$Node$parser(A2($stil4m$elm_syntax$Combine$map, $elm$core$Basics$always($stil4m$elm_syntax$Elm$Syntax$Pattern$AllPattern), $stil4m$elm_syntax$Combine$fromCore($elm$parser$Parser$symbol("_")))), $stil4m$elm_syntax$Elm$Parser$Patterns$recordPart, $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$listPattern(), $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$parensPattern()]));
      }
      function $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$listPattern() {
        return $stil4m$elm_syntax$Combine$lazy(function(_v5) {
          return $stil4m$elm_syntax$Elm$Parser$Node$parser(A3($stil4m$elm_syntax$Combine$between, $stil4m$elm_syntax$Combine$string("["), $stil4m$elm_syntax$Combine$string("]"), A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Syntax$Pattern$ListPattern, A2($stil4m$elm_syntax$Combine$sepBy, $stil4m$elm_syntax$Combine$string(","), $stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides($stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$pattern())))));
        });
      }
      function $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$parensPattern() {
        return $stil4m$elm_syntax$Combine$lazy(function(_v3) {
          return $stil4m$elm_syntax$Elm$Parser$Node$parser(A2($stil4m$elm_syntax$Combine$map, function(c) {
            if (c.b && !c.b.b) {
              var x = c.a;
              return $stil4m$elm_syntax$Elm$Syntax$Pattern$ParenthesizedPattern(x);
            } else {
              return $stil4m$elm_syntax$Elm$Syntax$Pattern$TuplePattern(c);
            }
          }, $stil4m$elm_syntax$Combine$parens(A2($stil4m$elm_syntax$Combine$sepBy, $stil4m$elm_syntax$Combine$string(","), $stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides($stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$pattern())))));
        });
      }
      try {
        var $stil4m$elm_syntax$Elm$Parser$Patterns$pattern = $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$pattern();
        $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$pattern = function() {
          return $stil4m$elm_syntax$Elm$Parser$Patterns$pattern;
        };
        var $stil4m$elm_syntax$Elm$Parser$Patterns$composablePattern = $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$composablePattern();
        $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$composablePattern = function() {
          return $stil4m$elm_syntax$Elm$Parser$Patterns$composablePattern;
        };
        var $stil4m$elm_syntax$Elm$Parser$Patterns$qualifiedPatternArg = $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$qualifiedPatternArg();
        $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$qualifiedPatternArg = function() {
          return $stil4m$elm_syntax$Elm$Parser$Patterns$qualifiedPatternArg;
        };
        var $stil4m$elm_syntax$Elm$Parser$Patterns$listPattern = $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$listPattern();
        $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$listPattern = function() {
          return $stil4m$elm_syntax$Elm$Parser$Patterns$listPattern;
        };
        var $stil4m$elm_syntax$Elm$Parser$Patterns$parensPattern = $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$parensPattern();
        $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$parensPattern = function() {
          return $stil4m$elm_syntax$Elm$Parser$Patterns$parensPattern;
        };
      } catch ($) {
        throw "Some top-level definitions from `Elm.Parser.Patterns` are causing infinite recursion:\n\n  ┌─────┐\n  │    pattern\n  │     ↓\n  │    composablePattern\n  │     ↓\n  │    qualifiedPatternArg\n  │     ↓\n  │    listPattern\n  │     ↓\n  │    parensPattern\n  │     ↓\n  │    qualifiedPattern\n  │     ↓\n  │    tryToCompose\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.1/bad-recursion to learn how to fix it!";
      }
      var $stil4m$elm_syntax$Elm$Parser$Declarations$functionArgument = $stil4m$elm_syntax$Elm$Parser$Patterns$pattern;
      var $stil4m$elm_syntax$Elm$Syntax$Signature$Signature = F2(function(name, typeAnnotation) {
        return {
          name,
          typeAnnotation
        };
      });
      var $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$Eager = {
        $: "Eager"
      };
      var $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericRecord = F2(function(a, b) {
        return {
          $: "GenericRecord",
          a,
          b
        };
      });
      var $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$Lazy = {
        $: "Lazy"
      };
      var $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Record = function(a) {
        return {
          $: "Record",
          a
        };
      };
      var $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Unit = {
        $: "Unit"
      };
      var $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Tupled = function(a) {
        return {
          $: "Tupled",
          a
        };
      };
      var $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$asTypeAnnotation = F2(function(x, xs) {
        var value = x.b;
        if (!xs.b) {
          return value;
        } else {
          return $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Tupled(A2($elm$core$List$cons, x, xs));
        }
      });
      var $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$genericTypeAnnotation = $stil4m$elm_syntax$Combine$lazy(function(_v0) {
        return $stil4m$elm_syntax$Elm$Parser$Node$parser(A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericType, $stil4m$elm_syntax$Elm$Parser$Tokens$functionName));
      });
      var $stil4m$elm_syntax$Elm$Parser$Layout$Indented = {
        $: "Indented"
      };
      var $stil4m$elm_syntax$Elm$Parser$Layout$Strict = {
        $: "Strict"
      };
      var $elm$core$List$any = F2(function(isOkay, list) {
        any:
          while (true) {
            if (!list.b) {
              return false;
            } else {
              var x = list.a;
              var xs = list.b;
              if (isOkay(x)) {
                return true;
              } else {
                var $temp$isOkay = isOkay, $temp$list = xs;
                isOkay = $temp$isOkay;
                list = $temp$list;
                continue any;
              }
            }
          }
      });
      var $elm$core$List$member = F2(function(x, xs) {
        return A2($elm$core$List$any, function(a) {
          return _Utils_eq(a, x);
        }, xs);
      });
      var $stil4m$elm_syntax$Elm$Parser$State$storedColumns = function(_v0) {
        var indents = _v0.a.indents;
        return A2($elm$core$List$map, $elm$core$Basics$add(1), indents);
      };
      var $stil4m$elm_syntax$Elm$Parser$Layout$compute = $stil4m$elm_syntax$Combine$withState(function(s) {
        return $stil4m$elm_syntax$Combine$withLocation(function(l) {
          var known = A2($elm$core$List$cons, 1, $stil4m$elm_syntax$Elm$Parser$State$storedColumns(s));
          return A2($elm$core$List$member, l.column, known) ? $stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Parser$Layout$Strict) : $stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Parser$Layout$Indented);
        });
      });
      var $stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayout = A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Layout$compute, $stil4m$elm_syntax$Combine$many($stil4m$elm_syntax$Combine$choice(_List_fromArray([$stil4m$elm_syntax$Elm$Parser$Layout$anyComment, A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Combine$choice(_List_fromArray([$stil4m$elm_syntax$Elm$Parser$Whitespace$many1Spaces, $stil4m$elm_syntax$Elm$Parser$Layout$anyComment, $stil4m$elm_syntax$Combine$succeed(_Utils_Tuple0)])), $stil4m$elm_syntax$Combine$many1($stil4m$elm_syntax$Elm$Parser$Whitespace$realNewLine)), $stil4m$elm_syntax$Elm$Parser$Whitespace$many1Spaces]))));
      var $stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayoutWith = F2(function(onStrict, onIndented) {
        return A2($stil4m$elm_syntax$Combine$andThen, function(ind) {
          if (ind.$ === "Strict") {
            return onStrict(_Utils_Tuple0);
          } else {
            return onIndented(_Utils_Tuple0);
          }
        }, $stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayout);
      });
      var $elm$core$Tuple$pair = F2(function(a, b) {
        return _Utils_Tuple2(a, b);
      });
      var $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typeAnnotationNoFn = function(mode) {
        return $stil4m$elm_syntax$Combine$lazy(function(_v7) {
          return $stil4m$elm_syntax$Combine$choice(_List_fromArray([$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$parensTypeAnnotation(), $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typedTypeAnnotation(mode), $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$genericTypeAnnotation, $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordTypeAnnotation()]));
        });
      };
      var $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typedTypeAnnotation = function(mode) {
        return $stil4m$elm_syntax$Combine$lazy(function(_v0) {
          var nodeRanges = $elm$core$List$map(function(_v6) {
            var r = _v6.a;
            return r;
          });
          var genericHelper = function(items) {
            return A2($stil4m$elm_syntax$Combine$or, A2($stil4m$elm_syntax$Combine$andThen, function(next) {
              return A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), A2($stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayoutWith, function(_v1) {
                return $stil4m$elm_syntax$Combine$succeed($elm$core$List$reverse(A2($elm$core$List$cons, next, items)));
              }, function(_v2) {
                return genericHelper(A2($elm$core$List$cons, next, items));
              }));
            }, $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typeAnnotationNoFn($stil4m$elm_syntax$Elm$Parser$TypeAnnotation$Lazy)), $stil4m$elm_syntax$Combine$succeed($elm$core$List$reverse(items)));
          };
          return A2($stil4m$elm_syntax$Combine$andThen, function(original) {
            var tir = original.a;
            return A2($stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayoutWith, function(_v3) {
              return $stil4m$elm_syntax$Combine$succeed(A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, tir, A2($stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Typed, original, _List_Nil)));
            }, function(_v4) {
              if (mode.$ === "Eager") {
                return A2($stil4m$elm_syntax$Combine$map, function(args) {
                  return A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$combine(A2($elm$core$List$cons, tir, nodeRanges(args))), A2($stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Typed, original, args));
                }, genericHelper(_List_Nil));
              } else {
                return $stil4m$elm_syntax$Combine$succeed(A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, tir, A2($stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Typed, original, _List_Nil)));
              }
            });
          }, $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Base$typeIndicator));
        });
      };
      function $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$parensTypeAnnotation() {
        return $stil4m$elm_syntax$Combine$lazy(function(_v14) {
          var commaSep = $stil4m$elm_syntax$Combine$many(A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$typeAnnotation(), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), $stil4m$elm_syntax$Combine$string(",")))));
          var nested = A2($stil4m$elm_syntax$Combine$andMap, commaSep, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$typeAnnotation(), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), $stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Parser$TypeAnnotation$asTypeAnnotation)))));
          return $stil4m$elm_syntax$Elm$Parser$Node$parser(A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Combine$choice(_List_fromArray([A2($stil4m$elm_syntax$Combine$map, $elm$core$Basics$always($stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Unit), $stil4m$elm_syntax$Combine$string(")")), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$string(")"), nested)])), $stil4m$elm_syntax$Combine$string("(")));
        });
      }
      function $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordFieldDefinition() {
        return $stil4m$elm_syntax$Combine$lazy(function(_v13) {
          return A2($stil4m$elm_syntax$Combine$andMap, A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$typeAnnotation(), A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Combine$string(":"), $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout)))), A2($stil4m$elm_syntax$Combine$andMap, A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$functionName), $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout)), $stil4m$elm_syntax$Combine$succeed($elm$core$Tuple$pair)));
        });
      }
      function $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordFieldsTypeAnnotation() {
        return $stil4m$elm_syntax$Combine$lazy(function(_v12) {
          return A2($stil4m$elm_syntax$Combine$sepBy, $stil4m$elm_syntax$Combine$string(","), $stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides($stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordFieldDefinition())));
        });
      }
      function $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordTypeAnnotation() {
        return $stil4m$elm_syntax$Combine$lazy(function(_v11) {
          var nextField = A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayout, A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$typeAnnotation(), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$string(":"), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$functionName), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$string(","), $stil4m$elm_syntax$Combine$succeed(F2(function(a, b) {
            return _Utils_Tuple2(a, b);
          }))))))))));
          var additionalRecordFields = function(items) {
            return $stil4m$elm_syntax$Combine$choice(_List_fromArray([A2($stil4m$elm_syntax$Combine$andThen, function(next) {
              return additionalRecordFields(A2($elm$core$List$cons, next, items));
            }, $stil4m$elm_syntax$Elm$Parser$Node$parser(nextField)), $stil4m$elm_syntax$Combine$succeed($elm$core$List$reverse(items))]));
          };
          return $stil4m$elm_syntax$Elm$Parser$Node$parser(A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Combine$choice(_List_fromArray([A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Record(_List_Nil)), $stil4m$elm_syntax$Combine$string("}")), A2($stil4m$elm_syntax$Combine$andThen, function(fname) {
            return $stil4m$elm_syntax$Combine$choice(_List_fromArray([A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$string("}"), A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordFieldsTypeAnnotation()), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$string("|"), $stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericRecord(fname))))), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$string("}"), A2($stil4m$elm_syntax$Combine$andThen, function(ta) {
              return A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Record, additionalRecordFields(_List_fromArray([A3($stil4m$elm_syntax$Elm$Syntax$Node$combine, $elm$core$Tuple$pair, fname, ta)])));
            }, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$typeAnnotation(), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), $stil4m$elm_syntax$Combine$string(":"))))))]));
          }, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$functionName)))])), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), $stil4m$elm_syntax$Combine$string("{"))));
        });
      }
      function $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$typeAnnotation() {
        return $stil4m$elm_syntax$Combine$lazy(function(_v8) {
          return A2($stil4m$elm_syntax$Combine$andThen, function(typeRef) {
            return A2($stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayoutWith, function(_v9) {
              return $stil4m$elm_syntax$Combine$succeed(typeRef);
            }, function(_v10) {
              return A2($stil4m$elm_syntax$Combine$or, A2($stil4m$elm_syntax$Combine$map, function(ta) {
                return A3($stil4m$elm_syntax$Elm$Syntax$Node$combine, $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$FunctionTypeAnnotation, typeRef, ta);
              }, A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$typeAnnotation(), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), $stil4m$elm_syntax$Combine$string("->")))), $stil4m$elm_syntax$Combine$succeed(typeRef));
            });
          }, $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typeAnnotationNoFn($stil4m$elm_syntax$Elm$Parser$TypeAnnotation$Eager));
        });
      }
      try {
        var $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$parensTypeAnnotation = $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$parensTypeAnnotation();
        $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$parensTypeAnnotation = function() {
          return $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$parensTypeAnnotation;
        };
        var $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$recordFieldDefinition = $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordFieldDefinition();
        $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordFieldDefinition = function() {
          return $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$recordFieldDefinition;
        };
        var $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$recordFieldsTypeAnnotation = $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordFieldsTypeAnnotation();
        $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordFieldsTypeAnnotation = function() {
          return $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$recordFieldsTypeAnnotation;
        };
        var $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$recordTypeAnnotation = $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordTypeAnnotation();
        $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordTypeAnnotation = function() {
          return $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$recordTypeAnnotation;
        };
        var $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typeAnnotation = $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$typeAnnotation();
        $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$typeAnnotation = function() {
          return $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typeAnnotation;
        };
      } catch ($) {
        throw "Some top-level definitions from `Elm.Parser.TypeAnnotation` are causing infinite recursion:\n\n  ┌─────┐\n  │    parensTypeAnnotation\n  │     ↓\n  │    recordFieldDefinition\n  │     ↓\n  │    recordFieldsTypeAnnotation\n  │     ↓\n  │    recordTypeAnnotation\n  │     ↓\n  │    typeAnnotation\n  │     ↓\n  │    typeAnnotationNoFn\n  │     ↓\n  │    typedTypeAnnotation\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.1/bad-recursion to learn how to fix it!";
      }
      var $stil4m$elm_syntax$Elm$Parser$Declarations$functionSignatureFromVarPointer = function(varPointer) {
        return A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typeAnnotation, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$string(":"), $stil4m$elm_syntax$Combine$succeed(function(ta) {
          return A3($stil4m$elm_syntax$Elm$Syntax$Node$combine, $stil4m$elm_syntax$Elm$Syntax$Signature$Signature, varPointer, ta);
        }))));
      };
      var $stil4m$elm_syntax$Elm$Syntax$Expression$GLSLExpression = function(a) {
        return {
          $: "GLSLExpression",
          a
        };
      };
      var $elm$parser$Parser$NotNestable = {
        $: "NotNestable"
      };
      var $elm$core$String$dropLeft = F2(function(n, string) {
        return n < 1 ? string : A3($elm$core$String$slice, n, $elm$core$String$length(string), string);
      });
      var $stil4m$elm_syntax$Elm$Parser$Declarations$glslExpression = function() {
        var start = "[glsl|";
        var end = "|]";
        return $stil4m$elm_syntax$Elm$Parser$Node$parser(A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$string(end), A2($stil4m$elm_syntax$Combine$map, A2($elm$core$Basics$composeR, $elm$core$String$dropLeft($elm$core$String$length(start)), $stil4m$elm_syntax$Elm$Syntax$Expression$GLSLExpression), $stil4m$elm_syntax$Combine$fromCore($elm$parser$Parser$getChompedString(A3($elm$parser$Parser$multiComment, start, end, $elm$parser$Parser$NotNestable))))));
      }();
      var $stil4m$elm_syntax$Elm$Parser$Tokens$ifToken = $stil4m$elm_syntax$Combine$string("if");
      var $stil4m$elm_syntax$Elm$Parser$Tokens$allowedOperatorTokens = _List_fromArray([_Utils_chr("+"), _Utils_chr("-"), _Utils_chr(":"), _Utils_chr("/"), _Utils_chr("*"), _Utils_chr(">"), _Utils_chr("<"), _Utils_chr("="), _Utils_chr("/"), _Utils_chr("&"), _Utils_chr("^"), _Utils_chr("%"), _Utils_chr("|"), _Utils_chr("!"), _Utils_chr("."), _Utils_chr("#"), _Utils_chr("$"), _Utils_chr("≡"), _Utils_chr("~"), _Utils_chr("?"), _Utils_chr("@")]);
      var $stil4m$elm_syntax$Elm$Parser$Tokens$excludedOperators = _List_fromArray([":", "->", "--", "="]);
      var $stil4m$elm_syntax$Combine$Char$oneOf = function(cs) {
        return A2($stil4m$elm_syntax$Combine$andThen, A2($elm$core$Basics$composeR, $elm$core$Maybe$map($stil4m$elm_syntax$Combine$succeed), $elm$core$Maybe$withDefault($stil4m$elm_syntax$Combine$fail("expected one of '" + ($elm$core$String$fromList(cs) + "'")))), $stil4m$elm_syntax$Combine$Char$satisfy(function(a) {
          return A2($elm$core$List$member, a, cs);
        }));
      };
      var $stil4m$elm_syntax$Elm$Parser$Tokens$operatorTokenFromList = function(allowedChars) {
        return A2($stil4m$elm_syntax$Combine$andThen, function(m) {
          return A2($elm$core$List$member, m, $stil4m$elm_syntax$Elm$Parser$Tokens$excludedOperators) ? $stil4m$elm_syntax$Combine$fail("operator is not allowed") : $stil4m$elm_syntax$Combine$succeed(m);
        }, A2($stil4m$elm_syntax$Combine$map, $elm$core$String$fromList, $stil4m$elm_syntax$Combine$many1($stil4m$elm_syntax$Combine$Char$oneOf(allowedChars))));
      };
      var $stil4m$elm_syntax$Elm$Parser$Tokens$infixOperatorToken = $stil4m$elm_syntax$Elm$Parser$Tokens$operatorTokenFromList($stil4m$elm_syntax$Elm$Parser$Tokens$allowedOperatorTokens);
      var $stil4m$elm_syntax$Elm$Parser$Layout$layoutStrict = A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Layout$verifyIndent(F2(function(stateIndent, current) {
        return _Utils_eq(stateIndent, current);
      })), $stil4m$elm_syntax$Combine$many1($stil4m$elm_syntax$Combine$choice(_List_fromArray([$stil4m$elm_syntax$Elm$Parser$Layout$anyComment, A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Combine$succeed(_Utils_Tuple0), $stil4m$elm_syntax$Combine$many1($stil4m$elm_syntax$Elm$Parser$Whitespace$realNewLine)), $stil4m$elm_syntax$Elm$Parser$Whitespace$many1Spaces]))));
      var $stil4m$elm_syntax$Elm$Parser$Declarations$liftRecordAccess = function(e) {
        return $stil4m$elm_syntax$Combine$lazy(function(_v0) {
          return A2($stil4m$elm_syntax$Combine$or, A2($stil4m$elm_syntax$Combine$andThen, $stil4m$elm_syntax$Elm$Parser$Declarations$liftRecordAccess, A2($stil4m$elm_syntax$Combine$map, function(f) {
            return A3($stil4m$elm_syntax$Elm$Syntax$Node$combine, $stil4m$elm_syntax$Elm$Syntax$Expression$RecordAccess, e, f);
          }, A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$functionName), $stil4m$elm_syntax$Combine$string(".")))), $stil4m$elm_syntax$Combine$succeed(e));
        });
      };
      var $stil4m$elm_syntax$Elm$Parser$Tokens$multiLineStringLiteral = function() {
        var helper = function(s) {
          return s.escaped ? A2($elm$parser$Parser$map, function(v) {
            return $elm$parser$Parser$Loop(_Utils_update(s, {
              escaped: false,
              parts: A2($elm$core$List$cons, $elm$core$String$fromList(_List_fromArray([v])), s.parts)
            }));
          }, $stil4m$elm_syntax$Elm$Parser$Tokens$escapedCharValue) : $elm$parser$Parser$oneOf(_List_fromArray([A2($elm$parser$Parser$map, function(_v0) {
            return $elm$parser$Parser$Done($elm$core$String$concat(s.parts));
          }, $elm$parser$Parser$symbol('"""')), A2($elm$parser$Parser$map, function(v) {
            return $elm$parser$Parser$Loop(_Utils_update(s, {
              counter: s.counter + 1,
              parts: A2($elm$core$List$cons, v, s.parts)
            }));
          }, $elm$parser$Parser$getChompedString($elm$parser$Parser$symbol('"'))), A2($elm$parser$Parser$map, function(_v1) {
            return $elm$parser$Parser$Loop(_Utils_update(s, {
              counter: s.counter + 1,
              escaped: true,
              parts: s.parts
            }));
          }, $elm$parser$Parser$getChompedString($elm$parser$Parser$symbol("\\"))), A2($elm$parser$Parser$andThen, function(_v2) {
            var start = _v2.a;
            var value = _v2.b;
            var end = _v2.c;
            return _Utils_eq(start, end) ? $elm$parser$Parser$problem("Expected a string character or a triple double quote") : $elm$parser$Parser$succeed($elm$parser$Parser$Loop(_Utils_update(s, {
              counter: s.counter + 1,
              parts: A2($elm$core$List$cons, value, s.parts)
            })));
          }, A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$keeper, $elm$parser$Parser$succeed(F3(function(start, value, end) {
            return _Utils_Tuple3(start, value, end);
          })), $elm$parser$Parser$getOffset), $elm$parser$Parser$getChompedString($elm$parser$Parser$chompWhile(function(c) {
            return !_Utils_eq(c, _Utils_chr('"')) && !_Utils_eq(c, _Utils_chr("\\"));
          }))), $elm$parser$Parser$getOffset))]));
        };
        return $stil4m$elm_syntax$Combine$fromCore(A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed($elm$core$Basics$identity), $elm$parser$Parser$symbol('"""')), A2($elm$parser$Parser$loop, {
          counter: 0,
          escaped: false,
          parts: _List_Nil
        }, helper)));
      }();
      var $stil4m$elm_syntax$Elm$Parser$Declarations$literalExpression = $stil4m$elm_syntax$Combine$lazy(function(_v0) {
        return $stil4m$elm_syntax$Elm$Parser$Node$parser(A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Syntax$Expression$Literal, A2($stil4m$elm_syntax$Combine$or, $stil4m$elm_syntax$Elm$Parser$Tokens$multiLineStringLiteral, $stil4m$elm_syntax$Elm$Parser$Tokens$stringLiteral)));
      });
      var $stil4m$elm_syntax$Combine$loop = F2(function(init, stepper) {
        var wrapper = function(_v3) {
          var oldState = _v3.a;
          var v = _v3.b;
          var _v0 = stepper(v);
          var p = _v0.a;
          return A2($elm$parser$Parser$map, function(_v1) {
            var newState = _v1.a;
            var r = _v1.b;
            if (r.$ === "Loop") {
              var l = r.a;
              return $elm$parser$Parser$Loop(_Utils_Tuple2(newState, l));
            } else {
              var d = r.a;
              return $elm$parser$Parser$Done(_Utils_Tuple2(newState, d));
            }
          }, p(oldState));
        };
        return $stil4m$elm_syntax$Combine$Parser(function(state) {
          return A2($elm$parser$Parser$loop, _Utils_Tuple2(state, init), wrapper);
        });
      });
      var $stil4m$elm_syntax$Elm$Parser$Whitespace$manySpaces = $stil4m$elm_syntax$Combine$fromCore($elm$parser$Parser$chompWhile(function(c) {
        return _Utils_eq(c, _Utils_chr(" "));
      }));
      var $stil4m$elm_syntax$Elm$Syntax$Expression$Floatable = function(a) {
        return {
          $: "Floatable",
          a
        };
      };
      var $stil4m$elm_syntax$Elm$Syntax$Expression$Hex = function(a) {
        return {
          $: "Hex",
          a
        };
      };
      var $stil4m$elm_syntax$Elm$Parser$Numbers$forgivingNumber = F3(function(floatf, intf, hexf) {
        return $stil4m$elm_syntax$Combine$fromCore($elm$parser$Parser$backtrackable(A3($stil4m$elm_syntax$Elm$Parser$Numbers$raw, floatf, intf, hexf)));
      });
      var $stil4m$elm_syntax$Elm$Parser$Declarations$numberExpression = $stil4m$elm_syntax$Elm$Parser$Node$parser(A3($stil4m$elm_syntax$Elm$Parser$Numbers$forgivingNumber, $stil4m$elm_syntax$Elm$Syntax$Expression$Floatable, $stil4m$elm_syntax$Elm$Syntax$Expression$Integer, $stil4m$elm_syntax$Elm$Syntax$Expression$Hex));
      var $stil4m$elm_syntax$Elm$Parser$Tokens$ofToken = $stil4m$elm_syntax$Combine$string("of");
      var $stil4m$elm_syntax$Elm$Parser$Tokens$allowedPrefixOperatorTokens = A2($elm$core$List$cons, _Utils_chr(","), $stil4m$elm_syntax$Elm$Parser$Tokens$allowedOperatorTokens);
      var $stil4m$elm_syntax$Elm$Parser$Tokens$prefixOperatorToken = $stil4m$elm_syntax$Elm$Parser$Tokens$operatorTokenFromList($stil4m$elm_syntax$Elm$Parser$Tokens$allowedPrefixOperatorTokens);
      var $stil4m$elm_syntax$Elm$Syntax$Node$range = function(_v0) {
        var r = _v0.a;
        return r;
      };
      var $stil4m$elm_syntax$Elm$Syntax$Expression$RecordAccessFunction = function(a) {
        return {
          $: "RecordAccessFunction",
          a
        };
      };
      var $stil4m$elm_syntax$Elm$Parser$Declarations$recordAccessFunctionExpression = $stil4m$elm_syntax$Elm$Parser$Node$parser(A2($stil4m$elm_syntax$Combine$map, A2($elm$core$Basics$composeR, $elm$core$Basics$append("."), $stil4m$elm_syntax$Elm$Syntax$Expression$RecordAccessFunction), A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Tokens$functionName, $stil4m$elm_syntax$Combine$string("."))));
      var $stil4m$elm_syntax$Elm$Parser$Declarations$reference = function() {
        var justFunction = A2($stil4m$elm_syntax$Combine$map, function(v) {
          return _Utils_Tuple2(_List_Nil, v);
        }, $stil4m$elm_syntax$Elm$Parser$Tokens$functionName);
        var helper = function(_v0) {
          var n = _v0.a;
          var xs = _v0.b;
          return $stil4m$elm_syntax$Combine$choice(_List_fromArray([A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Combine$choice(_List_fromArray([A2($stil4m$elm_syntax$Combine$andThen, function(t) {
            return helper(_Utils_Tuple2(t, A2($elm$core$List$cons, n, xs)));
          }, $stil4m$elm_syntax$Elm$Parser$Tokens$typeName), A2($stil4m$elm_syntax$Combine$map, function(t) {
            return _Utils_Tuple2(t, A2($elm$core$List$cons, n, xs));
          }, $stil4m$elm_syntax$Elm$Parser$Tokens$functionName)])), $stil4m$elm_syntax$Combine$string(".")), $stil4m$elm_syntax$Combine$succeed(_Utils_Tuple2(n, xs))]));
        };
        var recurring = A2($stil4m$elm_syntax$Combine$map, function(_v1) {
          var t = _v1.a;
          var xs = _v1.b;
          return _Utils_Tuple2($elm$core$List$reverse(xs), t);
        }, A2($stil4m$elm_syntax$Combine$andThen, function(t) {
          return helper(_Utils_Tuple2(t, _List_Nil));
        }, $stil4m$elm_syntax$Elm$Parser$Tokens$typeName));
        return $stil4m$elm_syntax$Combine$choice(_List_fromArray([recurring, justFunction]));
      }();
      var $stil4m$elm_syntax$Elm$Parser$Declarations$referenceExpression = $stil4m$elm_syntax$Elm$Parser$Node$parser(A2($stil4m$elm_syntax$Combine$map, function(_v0) {
        var xs = _v0.a;
        var x = _v0.b;
        return A2($stil4m$elm_syntax$Elm$Syntax$Expression$FunctionOrValue, xs, x);
      }, $stil4m$elm_syntax$Elm$Parser$Declarations$reference));
      var $elm$core$Tuple$second = function(_v0) {
        var y = _v0.b;
        return y;
      };
      var $stil4m$elm_syntax$Elm$Parser$Tokens$thenToken = $stil4m$elm_syntax$Combine$string("then");
      var $stil4m$elm_syntax$Elm$Parser$State$popIndent = function(_v0) {
        var s = _v0.a;
        return $stil4m$elm_syntax$Elm$Parser$State$State(_Utils_update(s, {
          indents: A2($elm$core$List$drop, 1, s.indents)
        }));
      };
      var $stil4m$elm_syntax$Elm$Parser$State$pushIndent = F2(function(x, _v0) {
        var s = _v0.a;
        return $stil4m$elm_syntax$Elm$Parser$State$State(_Utils_update(s, {
          indents: A2($elm$core$List$cons, x, s.indents)
        }));
      });
      var $stil4m$elm_syntax$Elm$Parser$State$pushColumn = F2(function(col, state) {
        return A2($stil4m$elm_syntax$Elm$Parser$State$pushIndent, col - 1, state);
      });
      var $stil4m$elm_syntax$Elm$Parser$Declarations$withIndentedState = function(p) {
        return $stil4m$elm_syntax$Combine$withLocation(function(location) {
          return A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$modifyState($stil4m$elm_syntax$Elm$Parser$State$popIndent), A2($stil4m$elm_syntax$Combine$continueWith, p, $stil4m$elm_syntax$Combine$modifyState($stil4m$elm_syntax$Elm$Parser$State$pushColumn(location.column))));
        });
      };
      var $stil4m$elm_syntax$Elm$Parser$Declarations$functionWithNameNode = function(pointer) {
        var functionImplementationFromVarPointer = function(varPointer) {
          return A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$string("="), A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Combine$many(A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), $stil4m$elm_syntax$Elm$Parser$Declarations$functionArgument)), $stil4m$elm_syntax$Combine$succeed(F2(function(args, expr) {
            return A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$combine(_List_fromArray([$stil4m$elm_syntax$Elm$Syntax$Node$range(varPointer), $stil4m$elm_syntax$Elm$Syntax$Node$range(expr)])), A3($stil4m$elm_syntax$Elm$Syntax$Expression$FunctionImplementation, varPointer, args, expr));
          }))))));
        };
        var functionWithoutSignature = function(varPointer) {
          return A2($stil4m$elm_syntax$Combine$map, A2($stil4m$elm_syntax$Elm$Syntax$Expression$Function, $elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing), functionImplementationFromVarPointer(varPointer));
        };
        var fromParts = F2(function(sig, decl) {
          return {
            declaration: decl,
            documentation: $elm$core$Maybe$Nothing,
            signature: $elm$core$Maybe$Just(sig)
          };
        });
        var functionWithSignature = function(varPointer) {
          return A2($stil4m$elm_syntax$Combine$andThen, function(sig) {
            return A2($stil4m$elm_syntax$Combine$map, fromParts(sig), A2($stil4m$elm_syntax$Combine$andThen, functionImplementationFromVarPointer, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$functionName), $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layoutStrict)))));
          }, $stil4m$elm_syntax$Elm$Parser$Declarations$functionSignatureFromVarPointer(varPointer));
        };
        return $stil4m$elm_syntax$Combine$choice(_List_fromArray([functionWithSignature(pointer), functionWithoutSignature(pointer)]));
      };
      var $stil4m$elm_syntax$Elm$Parser$Declarations$letDestructuringDeclarationWithPattern = function(p) {
        return $stil4m$elm_syntax$Combine$lazy(function(_v7) {
          return A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Layout$layout, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$string("="), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), $stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Syntax$Expression$LetDestructuring(p))))));
        });
      };
      function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseBlock() {
        return $stil4m$elm_syntax$Combine$lazy(function(_v23) {
          return A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Tokens$ofToken, A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(), A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Layout$layout, $stil4m$elm_syntax$Elm$Parser$Tokens$caseToken)));
        });
      }
      function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseExpression() {
        return $stil4m$elm_syntax$Combine$lazy(function(_v21) {
          return A2($stil4m$elm_syntax$Combine$andThen, function(_v22) {
            var start = _v22.a;
            return A2($stil4m$elm_syntax$Combine$map, function(cb) {
              return A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$combine(A2($elm$core$List$cons, start, A2($elm$core$List$map, A2($elm$core$Basics$composeR, $elm$core$Tuple$second, $stil4m$elm_syntax$Elm$Syntax$Node$range), cb.cases))), $stil4m$elm_syntax$Elm$Syntax$Expression$CaseExpression(cb));
            }, A2($stil4m$elm_syntax$Combine$andMap, A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Declarations$withIndentedState($stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseStatements()), $stil4m$elm_syntax$Elm$Parser$Layout$layout), A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseBlock(), $stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Syntax$Expression$CaseBlock))));
          }, $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Combine$succeed(_Utils_Tuple0)));
        });
      }
      function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseStatement() {
        return $stil4m$elm_syntax$Combine$lazy(function(_v20) {
          return A2($stil4m$elm_syntax$Combine$andMap, A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(), A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Combine$string("->"), $stil4m$elm_syntax$Combine$maybe(A2($stil4m$elm_syntax$Combine$or, $stil4m$elm_syntax$Elm$Parser$Layout$layout, $stil4m$elm_syntax$Elm$Parser$Layout$layoutStrict))))), A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$Patterns$pattern, $stil4m$elm_syntax$Combine$succeed($elm$core$Tuple$pair)));
        });
      }
      function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseStatements() {
        return $stil4m$elm_syntax$Combine$lazy(function(_v19) {
          var helper = function(last) {
            return $stil4m$elm_syntax$Combine$withState(function(s) {
              return $stil4m$elm_syntax$Combine$withLocation(function(l) {
                return _Utils_eq($stil4m$elm_syntax$Elm$Parser$State$expectedColumn(s), l.column) ? A2($stil4m$elm_syntax$Combine$map, function(c) {
                  return $stil4m$elm_syntax$Combine$Loop(A2($elm$core$List$cons, c, last));
                }, $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseStatement()) : $stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Combine$Done($elm$core$List$reverse(last)));
              });
            });
          };
          return A2($stil4m$elm_syntax$Combine$andThen, function(v) {
            return A2($stil4m$elm_syntax$Combine$loop, v, helper);
          }, A2($stil4m$elm_syntax$Combine$map, $elm$core$List$singleton, $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseStatement()));
        });
      }
      function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression() {
        return $stil4m$elm_syntax$Combine$lazy(function(_v15) {
          return A2($stil4m$elm_syntax$Combine$andThen, function(first) {
            var complete = function(rest) {
              return $stil4m$elm_syntax$Combine$succeed(function() {
                if (!rest.b) {
                  return first;
                } else {
                  return A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$combine(A2($elm$core$List$cons, $stil4m$elm_syntax$Elm$Syntax$Node$range(first), A2($elm$core$List$map, $stil4m$elm_syntax$Elm$Syntax$Node$range, rest))), $stil4m$elm_syntax$Elm$Syntax$Expression$Application(A2($elm$core$List$cons, first, $elm$core$List$reverse(rest))));
                }
              }());
            };
            var promoter = function(rest) {
              return A2($stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayoutWith, function(_v16) {
                return complete(rest);
              }, function(_v17) {
                return A2($stil4m$elm_syntax$Combine$or, A2($stil4m$elm_syntax$Combine$andThen, function(next) {
                  return promoter(A2($elm$core$List$cons, next, rest));
                }, $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expressionNotApplication()), complete(rest));
              });
            };
            return promoter(_List_Nil);
          }, $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expressionNotApplication());
        });
      }
      function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expressionNotApplication() {
        return $stil4m$elm_syntax$Combine$lazy(function(_v14) {
          return A2($stil4m$elm_syntax$Combine$andThen, $stil4m$elm_syntax$Elm$Parser$Declarations$liftRecordAccess, $stil4m$elm_syntax$Combine$choice(_List_fromArray([$stil4m$elm_syntax$Elm$Parser$Declarations$numberExpression, $stil4m$elm_syntax$Elm$Parser$Declarations$referenceExpression, $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$ifBlockExpression(), $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$tupledExpression(), $stil4m$elm_syntax$Elm$Parser$Declarations$recordAccessFunctionExpression, $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$operatorExpression(), $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letExpression(), $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$lambdaExpression(), $stil4m$elm_syntax$Elm$Parser$Declarations$literalExpression, $stil4m$elm_syntax$Elm$Parser$Declarations$charLiteralExpression, $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$recordExpression(), $stil4m$elm_syntax$Elm$Parser$Declarations$glslExpression, $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$listExpression(), $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseExpression()])));
        });
      }
      function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$ifBlockExpression() {
        return $stil4m$elm_syntax$Elm$Parser$Node$parser(A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Combine$lazy(function(_v13) {
          return A2($stil4m$elm_syntax$Combine$andMap, A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(), A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Layout$layout, $stil4m$elm_syntax$Elm$Parser$Tokens$elseToken)), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Tokens$thenToken, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), $stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Syntax$Expression$IfBlock)))))))));
        }), $stil4m$elm_syntax$Elm$Parser$Tokens$ifToken));
      }
      function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$lambdaExpression() {
        return $stil4m$elm_syntax$Combine$lazy(function(_v12) {
          return $stil4m$elm_syntax$Elm$Parser$Node$parser(A2($stil4m$elm_syntax$Combine$andMap, A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(), $stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides($stil4m$elm_syntax$Combine$string("->"))), A2($stil4m$elm_syntax$Combine$andMap, A2($stil4m$elm_syntax$Combine$sepBy1, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), $stil4m$elm_syntax$Elm$Parser$Declarations$functionArgument), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$string("\\"), $stil4m$elm_syntax$Combine$succeed(F2(function(args, expr) {
            return $stil4m$elm_syntax$Elm$Syntax$Expression$LambdaExpression(A2($stil4m$elm_syntax$Elm$Syntax$Expression$Lambda, args, expr));
          })))))));
        });
      }
      function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letBlock() {
        return $stil4m$elm_syntax$Combine$lazy(function(_v11) {
          return A2($stil4m$elm_syntax$Combine$ignore, A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Combine$string("in"), $stil4m$elm_syntax$Combine$choice(_List_fromArray([$stil4m$elm_syntax$Elm$Parser$Layout$layout, $stil4m$elm_syntax$Elm$Parser$Whitespace$manySpaces]))), A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Declarations$withIndentedState($stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letBody()), A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Layout$layout, $stil4m$elm_syntax$Combine$string("let"))));
        });
      }
      function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letBody() {
        return $stil4m$elm_syntax$Combine$lazy(function(_v8) {
          var blockElement = A2($stil4m$elm_syntax$Combine$andThen, function(_v9) {
            var r = _v9.a;
            var p = _v9.b;
            if (p.$ === "VarPattern") {
              var v = p.a;
              return A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Syntax$Expression$LetFunction, $stil4m$elm_syntax$Elm$Parser$Declarations$functionWithNameNode(A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, r, v)));
            } else {
              return $stil4m$elm_syntax$Elm$Parser$Declarations$letDestructuringDeclarationWithPattern(A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, r, p));
            }
          }, $stil4m$elm_syntax$Elm$Parser$Patterns$pattern);
          return A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Combine$many(A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), $stil4m$elm_syntax$Elm$Parser$Node$parser(blockElement))), A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$Node$parser(blockElement), $stil4m$elm_syntax$Combine$succeed($elm$core$List$cons)));
        });
      }
      function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letExpression() {
        return $stil4m$elm_syntax$Combine$lazy(function(_v6) {
          return $stil4m$elm_syntax$Elm$Parser$Node$parser(A2($stil4m$elm_syntax$Combine$andMap, A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(), $stil4m$elm_syntax$Elm$Parser$Layout$layout), A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letBlock(), $stil4m$elm_syntax$Combine$succeed(function(decls) {
            return A2($elm$core$Basics$composeR, $stil4m$elm_syntax$Elm$Syntax$Expression$LetBlock(decls), $stil4m$elm_syntax$Elm$Syntax$Expression$LetExpression);
          }))));
        });
      }
      function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$listExpression() {
        return $stil4m$elm_syntax$Combine$lazy(function(_v5) {
          var innerExpressions = A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Syntax$Expression$ListExpr, A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Combine$many(A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), $stil4m$elm_syntax$Combine$string(",")))), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(), $stil4m$elm_syntax$Combine$succeed($elm$core$List$cons)))));
          return $stil4m$elm_syntax$Elm$Parser$Node$parser(A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Combine$choice(_List_fromArray([A2($stil4m$elm_syntax$Combine$map, $elm$core$Basics$always($stil4m$elm_syntax$Elm$Syntax$Expression$ListExpr(_List_Nil)), $stil4m$elm_syntax$Combine$string("]")), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$string("]"), innerExpressions)])), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), $stil4m$elm_syntax$Combine$string("["))));
        });
      }
      function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$operatorExpression() {
        var negationExpression = $stil4m$elm_syntax$Combine$lazy(function(_v4) {
          return A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Syntax$Expression$Negation, A2($stil4m$elm_syntax$Combine$andThen, $stil4m$elm_syntax$Elm$Parser$Declarations$liftRecordAccess, $stil4m$elm_syntax$Combine$choice(_List_fromArray([$stil4m$elm_syntax$Elm$Parser$Declarations$referenceExpression, $stil4m$elm_syntax$Elm$Parser$Declarations$numberExpression, $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$tupledExpression()]))));
        });
        return $stil4m$elm_syntax$Combine$lazy(function(_v3) {
          return $stil4m$elm_syntax$Combine$choice(_List_fromArray([$stil4m$elm_syntax$Elm$Parser$Node$parser(A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Combine$choice(_List_fromArray([negationExpression, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Layout$layout, $stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Syntax$Expression$Operator("-")))])), $stil4m$elm_syntax$Combine$string("-"))), $stil4m$elm_syntax$Elm$Parser$Node$parser(A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Syntax$Expression$Operator, $stil4m$elm_syntax$Elm$Parser$Tokens$infixOperatorToken))]));
        });
      }
      function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$recordExpression() {
        return $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Combine$lazy(function(_v2) {
          var recordField = $stil4m$elm_syntax$Elm$Parser$Node$parser(A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$string("="), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$functionName), $stil4m$elm_syntax$Combine$succeed($elm$core$Tuple$pair)))))));
          var recordFields = A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Combine$many(A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), A2($stil4m$elm_syntax$Combine$continueWith, recordField, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), $stil4m$elm_syntax$Combine$string(","))))), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), A2($stil4m$elm_syntax$Combine$andMap, recordField, $stil4m$elm_syntax$Combine$succeed($elm$core$List$cons))));
          var recordUpdateSyntaxParser = function(fname) {
            return A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$string("}"), A2($stil4m$elm_syntax$Combine$map, function(e) {
              return A2($stil4m$elm_syntax$Elm$Syntax$Expression$RecordUpdateExpression, fname, e);
            }, A2($stil4m$elm_syntax$Combine$continueWith, recordFields, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), $stil4m$elm_syntax$Combine$string("|")))));
          };
          var recordContents = A2($stil4m$elm_syntax$Combine$andThen, function(fname) {
            return $stil4m$elm_syntax$Combine$choice(_List_fromArray([recordUpdateSyntaxParser(fname), A2($stil4m$elm_syntax$Combine$andThen, function(fieldUpdate) {
              return $stil4m$elm_syntax$Combine$choice(_List_fromArray([A2($stil4m$elm_syntax$Combine$map, $elm$core$Basics$always($stil4m$elm_syntax$Elm$Syntax$Expression$RecordExpr(_List_fromArray([fieldUpdate]))), $stil4m$elm_syntax$Combine$string("}")), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$string("}"), A2($stil4m$elm_syntax$Combine$map, function(fieldUpdates) {
                return $stil4m$elm_syntax$Elm$Syntax$Expression$RecordExpr(A2($elm$core$List$cons, fieldUpdate, fieldUpdates));
              }, A2($stil4m$elm_syntax$Combine$continueWith, recordFields, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), $stil4m$elm_syntax$Combine$string(",")))))]));
            }, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), A2($stil4m$elm_syntax$Combine$continueWith, A2($stil4m$elm_syntax$Combine$map, function(e) {
              return A3($stil4m$elm_syntax$Elm$Syntax$Node$combine, $elm$core$Tuple$pair, fname, e);
            }, $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression()), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), $stil4m$elm_syntax$Combine$string("=")))))]));
          }, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$functionName)));
          return A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Combine$choice(_List_fromArray([A2($stil4m$elm_syntax$Combine$map, $elm$core$Basics$always($stil4m$elm_syntax$Elm$Syntax$Expression$RecordExpr(_List_Nil)), $stil4m$elm_syntax$Combine$string("}")), recordContents])), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), $stil4m$elm_syntax$Combine$string("{")));
        }));
      }
      function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$tupledExpression() {
        return $stil4m$elm_syntax$Combine$lazy(function(_v0) {
          var commaSep = $stil4m$elm_syntax$Combine$many(A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), $stil4m$elm_syntax$Combine$string(",")))));
          var closingParen = $stil4m$elm_syntax$Combine$fromCore($elm$parser$Parser$symbol(")"));
          var asExpression = F2(function(x, xs) {
            if (!xs.b) {
              return $stil4m$elm_syntax$Elm$Syntax$Expression$ParenthesizedExpression(x);
            } else {
              return $stil4m$elm_syntax$Elm$Syntax$Expression$TupledExpression(A2($elm$core$List$cons, x, xs));
            }
          });
          var nested = A2($stil4m$elm_syntax$Combine$andMap, commaSep, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), $stil4m$elm_syntax$Combine$succeed(asExpression)))));
          return $stil4m$elm_syntax$Elm$Parser$Node$parser(A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Combine$choice(_List_fromArray([A2($stil4m$elm_syntax$Combine$map, $elm$core$Basics$always($stil4m$elm_syntax$Elm$Syntax$Expression$UnitExpr), closingParen), $stil4m$elm_syntax$Combine$backtrackable(A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Syntax$Expression$PrefixOperator, A2($stil4m$elm_syntax$Combine$ignore, closingParen, $stil4m$elm_syntax$Elm$Parser$Tokens$prefixOperatorToken))), A2($stil4m$elm_syntax$Combine$ignore, closingParen, nested)])), $stil4m$elm_syntax$Combine$fromCore($elm$parser$Parser$symbol("("))));
        });
      }
      try {
        var $stil4m$elm_syntax$Elm$Parser$Declarations$caseBlock = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseBlock();
        $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseBlock = function() {
          return $stil4m$elm_syntax$Elm$Parser$Declarations$caseBlock;
        };
        var $stil4m$elm_syntax$Elm$Parser$Declarations$caseExpression = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseExpression();
        $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseExpression = function() {
          return $stil4m$elm_syntax$Elm$Parser$Declarations$caseExpression;
        };
        var $stil4m$elm_syntax$Elm$Parser$Declarations$caseStatement = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseStatement();
        $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseStatement = function() {
          return $stil4m$elm_syntax$Elm$Parser$Declarations$caseStatement;
        };
        var $stil4m$elm_syntax$Elm$Parser$Declarations$caseStatements = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseStatements();
        $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseStatements = function() {
          return $stil4m$elm_syntax$Elm$Parser$Declarations$caseStatements;
        };
        var $stil4m$elm_syntax$Elm$Parser$Declarations$expression = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression();
        $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression = function() {
          return $stil4m$elm_syntax$Elm$Parser$Declarations$expression;
        };
        var $stil4m$elm_syntax$Elm$Parser$Declarations$expressionNotApplication = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expressionNotApplication();
        $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expressionNotApplication = function() {
          return $stil4m$elm_syntax$Elm$Parser$Declarations$expressionNotApplication;
        };
        var $stil4m$elm_syntax$Elm$Parser$Declarations$ifBlockExpression = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$ifBlockExpression();
        $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$ifBlockExpression = function() {
          return $stil4m$elm_syntax$Elm$Parser$Declarations$ifBlockExpression;
        };
        var $stil4m$elm_syntax$Elm$Parser$Declarations$lambdaExpression = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$lambdaExpression();
        $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$lambdaExpression = function() {
          return $stil4m$elm_syntax$Elm$Parser$Declarations$lambdaExpression;
        };
        var $stil4m$elm_syntax$Elm$Parser$Declarations$letBlock = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letBlock();
        $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letBlock = function() {
          return $stil4m$elm_syntax$Elm$Parser$Declarations$letBlock;
        };
        var $stil4m$elm_syntax$Elm$Parser$Declarations$letBody = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letBody();
        $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letBody = function() {
          return $stil4m$elm_syntax$Elm$Parser$Declarations$letBody;
        };
        var $stil4m$elm_syntax$Elm$Parser$Declarations$letExpression = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letExpression();
        $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letExpression = function() {
          return $stil4m$elm_syntax$Elm$Parser$Declarations$letExpression;
        };
        var $stil4m$elm_syntax$Elm$Parser$Declarations$listExpression = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$listExpression();
        $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$listExpression = function() {
          return $stil4m$elm_syntax$Elm$Parser$Declarations$listExpression;
        };
        var $stil4m$elm_syntax$Elm$Parser$Declarations$operatorExpression = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$operatorExpression();
        $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$operatorExpression = function() {
          return $stil4m$elm_syntax$Elm$Parser$Declarations$operatorExpression;
        };
        var $stil4m$elm_syntax$Elm$Parser$Declarations$recordExpression = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$recordExpression();
        $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$recordExpression = function() {
          return $stil4m$elm_syntax$Elm$Parser$Declarations$recordExpression;
        };
        var $stil4m$elm_syntax$Elm$Parser$Declarations$tupledExpression = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$tupledExpression();
        $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$tupledExpression = function() {
          return $stil4m$elm_syntax$Elm$Parser$Declarations$tupledExpression;
        };
      } catch ($) {
        throw "Some top-level definitions from `Elm.Parser.Declarations` are causing infinite recursion:\n\n  ┌─────┐\n  │    caseBlock\n  │     ↓\n  │    caseExpression\n  │     ↓\n  │    caseStatement\n  │     ↓\n  │    caseStatements\n  │     ↓\n  │    expression\n  │     ↓\n  │    expressionNotApplication\n  │     ↓\n  │    functionWithNameNode\n  │     ↓\n  │    ifBlockExpression\n  │     ↓\n  │    lambdaExpression\n  │     ↓\n  │    letBlock\n  │     ↓\n  │    letBody\n  │     ↓\n  │    letDestructuringDeclarationWithPattern\n  │     ↓\n  │    letExpression\n  │     ↓\n  │    listExpression\n  │     ↓\n  │    operatorExpression\n  │     ↓\n  │    recordExpression\n  │     ↓\n  │    tupledExpression\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.1/bad-recursion to learn how to fix it!";
      }
      var $stil4m$elm_syntax$Elm$Parser$Declarations$destructuringDeclaration = $stil4m$elm_syntax$Combine$lazy(function(_v0) {
        return A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$Declarations$expression, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Layout$layout, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$string("="), A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$Patterns$pattern, $stil4m$elm_syntax$Combine$succeed(F2(function(x, y) {
          return A3($stil4m$elm_syntax$Elm$Syntax$Node$combine, $stil4m$elm_syntax$Elm$Syntax$Declaration$Destructuring, x, y);
        }))))));
      });
      var $stil4m$elm_syntax$Elm$Syntax$Node$value = function(_v0) {
        var v = _v0.b;
        return v;
      };
      var $stil4m$elm_syntax$Elm$Syntax$Expression$functionRange = function(_function) {
        return $stil4m$elm_syntax$Elm$Syntax$Range$combine(_List_fromArray([function() {
          var _v0 = _function.documentation;
          if (_v0.$ === "Just") {
            var documentation = _v0.a;
            return $stil4m$elm_syntax$Elm$Syntax$Node$range(documentation);
          } else {
            return A2($elm$core$Maybe$withDefault, function(_v3) {
              var r = _v3.a;
              return r;
            }($stil4m$elm_syntax$Elm$Syntax$Node$value(_function.declaration).name), A2($elm$core$Maybe$map, function(_v1) {
              var value = _v1.b;
              var _v2 = value.name;
              var r = _v2.a;
              return r;
            }, _function.signature));
          }
        }(), function(_v4) {
          var r = _v4.a;
          return r;
        }($stil4m$elm_syntax$Elm$Syntax$Node$value(_function.declaration).expression)]));
      };
      var $stil4m$elm_syntax$Elm$Parser$Declarations$function = $stil4m$elm_syntax$Combine$lazy(function(_v0) {
        return A2($stil4m$elm_syntax$Combine$map, function(f) {
          return A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Expression$functionRange(f), $stil4m$elm_syntax$Elm$Syntax$Declaration$FunctionDeclaration(f));
        }, A2($stil4m$elm_syntax$Combine$andThen, $stil4m$elm_syntax$Elm$Parser$Declarations$functionWithNameNode, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$functionName))));
      });
      var $stil4m$elm_syntax$Elm$Syntax$Declaration$InfixDeclaration = function(a) {
        return {
          $: "InfixDeclaration",
          a
        };
      };
      var $stil4m$elm_syntax$Elm$Syntax$Infix$Infix = F4(function(direction, precedence, operator, _function) {
        return {
          direction,
          _function,
          operator,
          precedence
        };
      });
      var $stil4m$elm_syntax$Elm$Syntax$Infix$Non = {
        $: "Non"
      };
      var $stil4m$elm_syntax$Elm$Parser$Infix$infixDirection = $stil4m$elm_syntax$Combine$choice(_List_fromArray([A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$string("right"), $stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Syntax$Infix$Right)), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$string("left"), $stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Syntax$Infix$Left)), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$string("non"), $stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Syntax$Infix$Non))]));
      var $elm$parser$Parser$Advanced$int = F2(function(expecting, invalid) {
        return $elm$parser$Parser$Advanced$number({
          binary: $elm$core$Result$Err(invalid),
          expecting,
          _float: $elm$core$Result$Err(invalid),
          hex: $elm$core$Result$Err(invalid),
          _int: $elm$core$Result$Ok($elm$core$Basics$identity),
          invalid,
          octal: $elm$core$Result$Err(invalid)
        });
      });
      var $elm$parser$Parser$int = A2($elm$parser$Parser$Advanced$int, $elm$parser$Parser$ExpectingInt, $elm$parser$Parser$ExpectingInt);
      var $stil4m$elm_syntax$Combine$Num$int = $stil4m$elm_syntax$Combine$fromCore($elm$parser$Parser$int);
      var $stil4m$elm_syntax$Elm$Parser$Infix$infixDefinition = A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$functionName), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Layout$layout, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$string("="), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Layout$layout, A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Combine$parens($stil4m$elm_syntax$Elm$Parser$Tokens$prefixOperatorToken)), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Layout$layout, A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Combine$Num$int), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Layout$layout, A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Infix$infixDirection), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Layout$layout, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$fromCore($elm$parser$Parser$keyword("infix")), $stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Syntax$Infix$Infix))))))))))));
      var $stil4m$elm_syntax$Elm$Parser$Ranges$asPointerLocation = function(_v0) {
        var line = _v0.line;
        var column = _v0.column;
        return {
          column,
          row: line
        };
      };
      var $stil4m$elm_syntax$Elm$Parser$Ranges$withCurrentPoint = function(p) {
        return $stil4m$elm_syntax$Combine$withLocation(function(start) {
          var k = $stil4m$elm_syntax$Elm$Parser$Ranges$asPointerLocation(start);
          return p({
            end: k,
            start: k
          });
        });
      };
      var $stil4m$elm_syntax$Elm$Parser$Declarations$infixDeclaration = $stil4m$elm_syntax$Elm$Parser$Ranges$withCurrentPoint(function(current) {
        return A2($stil4m$elm_syntax$Combine$map, function(inf) {
          return A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$combine(_List_fromArray([current, $stil4m$elm_syntax$Elm$Syntax$Node$range(inf._function)])), $stil4m$elm_syntax$Elm$Syntax$Declaration$InfixDeclaration(inf));
        }, $stil4m$elm_syntax$Elm$Parser$Infix$infixDefinition);
      });
      var $stil4m$elm_syntax$Elm$Syntax$Declaration$PortDeclaration = function(a) {
        return {
          $: "PortDeclaration",
          a
        };
      };
      var $stil4m$elm_syntax$Elm$Parser$Tokens$portToken = $stil4m$elm_syntax$Combine$string("port");
      var $stil4m$elm_syntax$Elm$Parser$Declarations$signature = A2($stil4m$elm_syntax$Combine$andMap, A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typeAnnotation, A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), $stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides($stil4m$elm_syntax$Combine$string(":")))), A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$functionName), $stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Syntax$Signature$Signature)));
      var $stil4m$elm_syntax$Elm$Parser$Declarations$portDeclaration = $stil4m$elm_syntax$Elm$Parser$Ranges$withCurrentPoint(function(current) {
        return A2($stil4m$elm_syntax$Combine$map, function(sig) {
          return A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$combine(_List_fromArray([current, function(_v0) {
            var r = _v0.a;
            return r;
          }(sig.typeAnnotation)])), $stil4m$elm_syntax$Elm$Syntax$Declaration$PortDeclaration(sig));
        }, A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Declarations$signature, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Layout$layout, $stil4m$elm_syntax$Elm$Parser$Tokens$portToken)));
      });
      var $stil4m$elm_syntax$Elm$Parser$Typings$DefinedAlias = F2(function(a, b) {
        return {
          $: "DefinedAlias",
          a,
          b
        };
      });
      var $stil4m$elm_syntax$Elm$Parser$Typings$DefinedType = F2(function(a, b) {
        return {
          $: "DefinedType",
          a,
          b
        };
      });
      var $stil4m$elm_syntax$Elm$Syntax$Type$Type = F4(function(documentation, name, generics, constructors) {
        return {
          constructors,
          documentation,
          generics,
          name
        };
      });
      var $stil4m$elm_syntax$Elm$Syntax$TypeAlias$TypeAlias = F4(function(documentation, name, generics, typeAnnotation) {
        return {
          documentation,
          generics,
          name,
          typeAnnotation
        };
      });
      var $stil4m$elm_syntax$Elm$Parser$Typings$genericList = $stil4m$elm_syntax$Combine$many(A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Layout$layout, $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$functionName)));
      var $stil4m$elm_syntax$Elm$Parser$Typings$typePrefix = A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Layout$layout, $stil4m$elm_syntax$Combine$string("type"));
      var $stil4m$elm_syntax$Elm$Syntax$Type$ValueConstructor = F2(function(name, _arguments) {
        return {
          _arguments,
          name
        };
      });
      var $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typeAnnotationNonGreedy = $stil4m$elm_syntax$Combine$choice(_List_fromArray([$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$parensTypeAnnotation, $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typedTypeAnnotation($stil4m$elm_syntax$Elm$Parser$TypeAnnotation$Lazy), $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$genericTypeAnnotation, $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$recordTypeAnnotation]));
      var $stil4m$elm_syntax$Elm$Parser$Typings$valueConstructor = A2($stil4m$elm_syntax$Combine$andThen, function(tnn) {
        var range = tnn.a;
        var complete = function(args) {
          return $stil4m$elm_syntax$Combine$succeed(A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$combine(A2($elm$core$List$cons, range, A2($elm$core$List$map, $stil4m$elm_syntax$Elm$Syntax$Node$range, args))), A2($stil4m$elm_syntax$Elm$Syntax$Type$ValueConstructor, tnn, args)));
        };
        var argHelper = function(xs) {
          return A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Combine$choice(_List_fromArray([A2($stil4m$elm_syntax$Combine$andThen, function(ta) {
            return A2($stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayoutWith, function(_v0) {
              return $stil4m$elm_syntax$Combine$succeed($elm$core$List$reverse(A2($elm$core$List$cons, ta, xs)));
            }, function(_v1) {
              return argHelper(A2($elm$core$List$cons, ta, xs));
            });
          }, $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typeAnnotationNonGreedy), $stil4m$elm_syntax$Combine$succeed($elm$core$List$reverse(xs))])), $stil4m$elm_syntax$Combine$succeed(_Utils_Tuple0));
        };
        return A2($stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayoutWith, function(_v2) {
          return complete(_List_Nil);
        }, function(_v3) {
          return A2($stil4m$elm_syntax$Combine$andThen, complete, argHelper(_List_Nil));
        });
      }, A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$typeName), $stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Syntax$Type$ValueConstructor)));
      var $stil4m$elm_syntax$Elm$Parser$Typings$valueConstructors = A2($stil4m$elm_syntax$Combine$sepBy1, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), $stil4m$elm_syntax$Combine$string("|")), $stil4m$elm_syntax$Elm$Parser$Typings$valueConstructor);
      var $stil4m$elm_syntax$Elm$Parser$Typings$typeDefinition = $stil4m$elm_syntax$Elm$Parser$Ranges$withCurrentPoint(function(start) {
        return A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Combine$choice(_List_fromArray([A2($stil4m$elm_syntax$Combine$map, function(typeAlias) {
          return A2($stil4m$elm_syntax$Elm$Parser$Typings$DefinedAlias, $stil4m$elm_syntax$Elm$Syntax$Range$combine(_List_fromArray([start, $stil4m$elm_syntax$Elm$Syntax$Node$range(typeAlias.typeAnnotation)])), typeAlias);
        }, A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typeAnnotation, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Layout$layout, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$string("="), A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$Typings$genericList, A2($stil4m$elm_syntax$Combine$andMap, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Layout$layout, $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$typeName)), A2($stil4m$elm_syntax$Combine$ignore, A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Layout$layout, $stil4m$elm_syntax$Combine$string("alias")), $stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Syntax$TypeAlias$TypeAlias($elm$core$Maybe$Nothing))))))))), A2($stil4m$elm_syntax$Combine$map, function(tipe) {
          return A2($stil4m$elm_syntax$Elm$Parser$Typings$DefinedType, $stil4m$elm_syntax$Elm$Syntax$Range$combine(A2($elm$core$List$cons, start, A2($elm$core$List$map, function(_v0) {
            var r = _v0.a;
            return r;
          }, tipe.constructors))), tipe);
        }, A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$Typings$valueConstructors, A2($stil4m$elm_syntax$Combine$ignore, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), $stil4m$elm_syntax$Combine$string("=")), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$Typings$genericList, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$typeName), $stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Syntax$Type$Type($elm$core$Maybe$Nothing)))))))))])), $stil4m$elm_syntax$Elm$Parser$Typings$typePrefix);
      });
      var $stil4m$elm_syntax$Elm$Parser$Declarations$declaration = $stil4m$elm_syntax$Combine$lazy(function(_v0) {
        return $stil4m$elm_syntax$Combine$choice(_List_fromArray([$stil4m$elm_syntax$Elm$Parser$Declarations$infixDeclaration, $stil4m$elm_syntax$Elm$Parser$Declarations$function, A2($stil4m$elm_syntax$Combine$map, function(v) {
          if (v.$ === "DefinedType") {
            var r = v.a;
            var t = v.b;
            return A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, r, $stil4m$elm_syntax$Elm$Syntax$Declaration$CustomTypeDeclaration(t));
          } else {
            var r = v.a;
            var a = v.b;
            return A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, r, $stil4m$elm_syntax$Elm$Syntax$Declaration$AliasDeclaration(a));
          }
        }, $stil4m$elm_syntax$Elm$Parser$Typings$typeDefinition), $stil4m$elm_syntax$Elm$Parser$Declarations$portDeclaration, $stil4m$elm_syntax$Elm$Parser$Declarations$destructuringDeclaration]));
      });
      var $stil4m$elm_syntax$Elm$Parser$File$fileDeclarations = $stil4m$elm_syntax$Combine$many(A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layoutStrict), $stil4m$elm_syntax$Elm$Parser$Declarations$declaration));
      var $stil4m$elm_syntax$Elm$Syntax$Import$Import = F3(function(moduleName, moduleAlias, exposingList) {
        return {
          exposingList,
          moduleAlias,
          moduleName
        };
      });
      var $stil4m$elm_syntax$Elm$Parser$Tokens$asToken = $stil4m$elm_syntax$Combine$fromCore($elm$parser$Parser$keyword("as"));
      var $stil4m$elm_syntax$Elm$Syntax$Exposing$FunctionExpose = function(a) {
        return {
          $: "FunctionExpose",
          a
        };
      };
      var $stil4m$elm_syntax$Elm$Parser$Expose$functionExpose = $stil4m$elm_syntax$Elm$Parser$Node$parser(A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Syntax$Exposing$FunctionExpose, $stil4m$elm_syntax$Elm$Parser$Tokens$functionName));
      var $stil4m$elm_syntax$Elm$Syntax$Exposing$InfixExpose = function(a) {
        return {
          $: "InfixExpose",
          a
        };
      };
      var $stil4m$elm_syntax$Combine$while = function(pred) {
        return $stil4m$elm_syntax$Combine$Parser(function(state) {
          return A2($elm$parser$Parser$map, function(x) {
            return _Utils_Tuple2(state, x);
          }, $elm$parser$Parser$getChompedString($elm$parser$Parser$chompWhile(pred)));
        });
      };
      var $stil4m$elm_syntax$Elm$Parser$Expose$infixExpose = $stil4m$elm_syntax$Combine$lazy(function(_v0) {
        return $stil4m$elm_syntax$Elm$Parser$Node$parser(A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Syntax$Exposing$InfixExpose, $stil4m$elm_syntax$Combine$parens($stil4m$elm_syntax$Combine$while($elm$core$Basics$neq(_Utils_chr(")"))))));
      });
      var $stil4m$elm_syntax$Elm$Syntax$Exposing$ExposedType = F2(function(name, open) {
        return {
          name,
          open
        };
      });
      var $stil4m$elm_syntax$Elm$Syntax$Exposing$TypeExpose = function(a) {
        return {
          $: "TypeExpose",
          a
        };
      };
      var $stil4m$elm_syntax$Elm$Syntax$Exposing$TypeOrAliasExpose = function(a) {
        return {
          $: "TypeOrAliasExpose",
          a
        };
      };
      var $stil4m$elm_syntax$Elm$Parser$Expose$exposedType = A2($stil4m$elm_syntax$Combine$andThen, function(tipe) {
        return $stil4m$elm_syntax$Combine$choice(_List_fromArray([A2($stil4m$elm_syntax$Combine$map, A2($elm$core$Basics$composeR, $stil4m$elm_syntax$Elm$Syntax$Node$range, A2($elm$core$Basics$composeR, $elm$core$Maybe$Just, A2($elm$core$Basics$composeR, function(v) {
          return A2($stil4m$elm_syntax$Elm$Syntax$Exposing$ExposedType, tipe, v);
        }, $stil4m$elm_syntax$Elm$Syntax$Exposing$TypeExpose))), $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Combine$parens($stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides($stil4m$elm_syntax$Combine$string(".."))))), $stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Syntax$Exposing$TypeOrAliasExpose(tipe))]));
      }, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$Tokens$typeName, $stil4m$elm_syntax$Combine$succeed($elm$core$Basics$identity))));
      var $stil4m$elm_syntax$Elm$Parser$Expose$typeExpose = $stil4m$elm_syntax$Combine$lazy(function(_v0) {
        return $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Expose$exposedType);
      });
      var $stil4m$elm_syntax$Elm$Parser$Expose$exposable = $stil4m$elm_syntax$Combine$lazy(function(_v0) {
        return $stil4m$elm_syntax$Combine$choice(_List_fromArray([$stil4m$elm_syntax$Elm$Parser$Expose$typeExpose, $stil4m$elm_syntax$Elm$Parser$Expose$infixExpose, $stil4m$elm_syntax$Elm$Parser$Expose$functionExpose]));
      });
      var $stil4m$elm_syntax$Elm$Parser$Ranges$withRange = function(p) {
        return $stil4m$elm_syntax$Combine$withLocation(function(start) {
          return A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Combine$withLocation(function(end) {
            return $stil4m$elm_syntax$Combine$succeed({
              end: $stil4m$elm_syntax$Elm$Parser$Ranges$asPointerLocation(end),
              start: $stil4m$elm_syntax$Elm$Parser$Ranges$asPointerLocation(start)
            });
          }), p);
        });
      };
      var $stil4m$elm_syntax$Elm$Parser$Expose$exposingListInner = $stil4m$elm_syntax$Combine$lazy(function(_v0) {
        return A2($stil4m$elm_syntax$Combine$or, $stil4m$elm_syntax$Elm$Parser$Ranges$withRange(A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides($stil4m$elm_syntax$Combine$string("..")), $stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Syntax$Exposing$All))), A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit, A2($stil4m$elm_syntax$Combine$sepBy, $stil4m$elm_syntax$Combine$Char$char(_Utils_chr(",")), $stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides($stil4m$elm_syntax$Elm$Parser$Expose$exposable))));
      });
      var $stil4m$elm_syntax$Elm$Parser$Expose$exposeListWith = $stil4m$elm_syntax$Combine$parens(A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayout, A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Expose$exposingListInner, $stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayout)));
      var $stil4m$elm_syntax$Elm$Parser$Tokens$exposingToken = $stil4m$elm_syntax$Combine$string("exposing");
      var $stil4m$elm_syntax$Elm$Parser$Expose$exposeDefinition = A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Expose$exposeListWith, A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), $stil4m$elm_syntax$Elm$Parser$Tokens$exposingToken));
      var $stil4m$elm_syntax$Elm$Parser$Tokens$importToken = $stil4m$elm_syntax$Combine$fromCore($elm$parser$Parser$keyword("import"));
      var $stil4m$elm_syntax$Elm$Parser$Base$moduleName = A2($stil4m$elm_syntax$Combine$sepBy1, $stil4m$elm_syntax$Combine$string("."), $stil4m$elm_syntax$Elm$Parser$Tokens$typeName);
      var $stil4m$elm_syntax$Elm$Parser$Imports$setupNode = F2(function(start, imp) {
        var allRanges = _List_fromArray([$elm$core$Maybe$Just(start), $elm$core$Maybe$Just($stil4m$elm_syntax$Elm$Syntax$Node$range(imp.moduleName)), A2($elm$core$Maybe$map, $stil4m$elm_syntax$Elm$Syntax$Node$range, imp.exposingList), A2($elm$core$Maybe$map, $stil4m$elm_syntax$Elm$Syntax$Node$range, imp.moduleAlias)]);
        return A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$combine(A2($elm$core$List$filterMap, $elm$core$Basics$identity, allRanges)), imp);
      });
      var $stil4m$elm_syntax$Elm$Parser$Imports$importDefinition = function() {
        var parseExposingDefinition = F2(function(mod, asDef) {
          return $stil4m$elm_syntax$Combine$choice(_List_fromArray([A2($stil4m$elm_syntax$Combine$map, A2($elm$core$Basics$composeR, $elm$core$Maybe$Just, A2($stil4m$elm_syntax$Elm$Syntax$Import$Import, mod, asDef)), $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Expose$exposeDefinition)), $stil4m$elm_syntax$Combine$succeed(A3($stil4m$elm_syntax$Elm$Syntax$Import$Import, mod, asDef, $elm$core$Maybe$Nothing))]));
        });
        var importAndModuleName = A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Base$moduleName), A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Layout$layout, $stil4m$elm_syntax$Elm$Parser$Tokens$importToken));
        var asDefinition = A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Base$moduleName), A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Layout$layout, $stil4m$elm_syntax$Elm$Parser$Tokens$asToken));
        var parseAsDefinition = function(mod) {
          return $stil4m$elm_syntax$Combine$choice(_List_fromArray([A2($stil4m$elm_syntax$Combine$andThen, A2($elm$core$Basics$composeR, $elm$core$Maybe$Just, parseExposingDefinition(mod)), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayout, asDefinition)), A2(parseExposingDefinition, mod, $elm$core$Maybe$Nothing)]));
        };
        return A2($stil4m$elm_syntax$Combine$andThen, function(_v0) {
          var start = _v0.a;
          return A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Parser$Imports$setupNode(start), A2($stil4m$elm_syntax$Combine$andThen, parseAsDefinition, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayout, importAndModuleName)));
        }, $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Combine$succeed(_Utils_Tuple0)));
      }();
      var $stil4m$elm_syntax$Elm$Syntax$Module$EffectModule = function(a) {
        return {
          $: "EffectModule",
          a
        };
      };
      var $stil4m$elm_syntax$Elm$Parser$Modules$effectWhereClause = A2($stil4m$elm_syntax$Combine$andMap, A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$typeName), $stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides($stil4m$elm_syntax$Combine$string("="))), A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$Tokens$functionName, $stil4m$elm_syntax$Combine$succeed($elm$core$Tuple$pair)));
      var $stil4m$elm_syntax$Elm$Parser$Modules$whereBlock = A2($stil4m$elm_syntax$Combine$map, function(pairs) {
        return {
          command: A2($elm$core$Maybe$map, $elm$core$Tuple$second, $elm$core$List$head(A2($elm$core$List$filter, A2($elm$core$Basics$composeR, $elm$core$Tuple$first, $elm$core$Basics$eq("command")), pairs))),
          subscription: A2($elm$core$Maybe$map, $elm$core$Tuple$second, $elm$core$List$head(A2($elm$core$List$filter, A2($elm$core$Basics$composeR, $elm$core$Tuple$first, $elm$core$Basics$eq("subscription")), pairs)))
        };
      }, A3($stil4m$elm_syntax$Combine$between, $stil4m$elm_syntax$Combine$string("{"), $stil4m$elm_syntax$Combine$string("}"), A2($stil4m$elm_syntax$Combine$sepBy1, $stil4m$elm_syntax$Combine$string(","), $stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides($stil4m$elm_syntax$Elm$Parser$Modules$effectWhereClause))));
      var $stil4m$elm_syntax$Elm$Parser$Modules$effectWhereClauses = A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Modules$whereBlock, A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Layout$layout, $stil4m$elm_syntax$Combine$string("where")));
      var $stil4m$elm_syntax$Elm$Parser$Tokens$moduleToken = $stil4m$elm_syntax$Combine$string("module");
      var $stil4m$elm_syntax$Elm$Parser$Modules$effectModuleDefinition = function() {
        var createEffectModule = F3(function(name, whereClauses, exp) {
          return $stil4m$elm_syntax$Elm$Syntax$Module$EffectModule({
            command: whereClauses.command,
            exposingList: exp,
            moduleName: name,
            subscription: whereClauses.subscription
          });
        });
        return A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Expose$exposeDefinition), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Layout$layout, A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$Modules$effectWhereClauses, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Layout$layout, A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Base$moduleName), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Layout$layout, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Tokens$moduleToken, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Layout$layout, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$string("effect"), $stil4m$elm_syntax$Combine$succeed(createEffectModule))))))))));
      }();
      var $stil4m$elm_syntax$Elm$Syntax$Module$DefaultModuleData = F2(function(moduleName, exposingList) {
        return {
          exposingList,
          moduleName
        };
      });
      var $stil4m$elm_syntax$Elm$Parser$Modules$normalModuleDefinition = A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Syntax$Module$NormalModule, A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Expose$exposeDefinition), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Layout$layout, A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Base$moduleName), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Layout$layout, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Tokens$moduleToken, $stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Syntax$Module$DefaultModuleData)))))));
      var $stil4m$elm_syntax$Elm$Syntax$Module$PortModule = function(a) {
        return {
          $: "PortModule",
          a
        };
      };
      var $stil4m$elm_syntax$Elm$Parser$Modules$portModuleDefinition = A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Syntax$Module$PortModule, A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Expose$exposeDefinition), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Layout$layout, A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Base$moduleName), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Layout$layout, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Tokens$moduleToken, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Layout$layout, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Tokens$portToken, $stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Syntax$Module$DefaultModuleData)))))))));
      var $stil4m$elm_syntax$Elm$Parser$Modules$moduleDefinition = $stil4m$elm_syntax$Combine$choice(_List_fromArray([$stil4m$elm_syntax$Elm$Parser$Modules$normalModuleDefinition, $stil4m$elm_syntax$Elm$Parser$Modules$portModuleDefinition, $stil4m$elm_syntax$Elm$Parser$Modules$effectModuleDefinition]));
      var $stil4m$elm_syntax$Elm$Parser$File$file = A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayout, A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$File$collectComments, A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$File$fileDeclarations, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layoutStrict), A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Combine$many(A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayout, $stil4m$elm_syntax$Elm$Parser$Imports$importDefinition)), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layoutStrict), A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Modules$moduleDefinition), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layoutStrict), $stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Syntax$File$File)))))))));
      var $stil4m$elm_syntax$Elm$Internal$RawFile$Raw = function(a) {
        return {
          $: "Raw",
          a
        };
      };
      var $stil4m$elm_syntax$Elm$Internal$RawFile$fromFile = $stil4m$elm_syntax$Elm$Internal$RawFile$Raw;
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
      var $stil4m$elm_syntax$Combine$runParser = F3(function(_v0, st, s) {
        var p = _v0.a;
        return A2($elm$parser$Parser$run, p(st), s);
      });
      var $elm$parser$Parser$ExpectingEnd = {
        $: "ExpectingEnd"
      };
      var $elm$parser$Parser$Advanced$end = function(x) {
        return $elm$parser$Parser$Advanced$Parser(function(s) {
          return _Utils_eq($elm$core$String$length(s.src), s.offset) ? A3($elm$parser$Parser$Advanced$Good, false, _Utils_Tuple0, s) : A2($elm$parser$Parser$Advanced$Bad, false, A2($elm$parser$Parser$Advanced$fromState, s, x));
        });
      };
      var $elm$parser$Parser$end = $elm$parser$Parser$Advanced$end($elm$parser$Parser$ExpectingEnd);
      var $stil4m$elm_syntax$Combine$end = $stil4m$elm_syntax$Combine$Parser(function(state) {
        return A2($elm$parser$Parser$map, function(x) {
          return _Utils_Tuple2(state, x);
        }, $elm$parser$Parser$end);
      });
      var $stil4m$elm_syntax$Elm$Parser$withEnd = function(p) {
        return A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$withLocation(function(_v0) {
          return $stil4m$elm_syntax$Combine$end;
        }), p);
      };
      var $stil4m$elm_syntax$Elm$Parser$parse = function(input) {
        var _v0 = A3($stil4m$elm_syntax$Combine$runParser, $stil4m$elm_syntax$Elm$Parser$withEnd($stil4m$elm_syntax$Elm$Parser$File$file), $stil4m$elm_syntax$Elm$Parser$State$emptyState, input + "\n");
        if (_v0.$ === "Ok") {
          var _v1 = _v0.a;
          var r = _v1.b;
          return $elm$core$Result$Ok($stil4m$elm_syntax$Elm$Internal$RawFile$fromFile(r));
        } else {
          var s = _v0.a;
          return $elm$core$Result$Err(s);
        }
      };
      var $the_sett$elm_syntax_dsl$Util$denode = $stil4m$elm_syntax$Elm$Syntax$Node$value;
      var $the_sett$elm_syntax_dsl$Util$denodeAll = $elm$core$List$map($the_sett$elm_syntax_dsl$Util$denode);
      var $the_sett$elm_syntax_dsl$Elm$Comments$Markdown = function(a) {
        return {
          $: "Markdown",
          a
        };
      };
      var $the_sett$elm_syntax_dsl$Elm$Comments$Comment = function(a) {
        return {
          $: "Comment",
          a
        };
      };
      var $the_sett$elm_syntax_dsl$Elm$Comments$addPart = F2(function(_v0, part) {
        var parts = _v0.a;
        return $the_sett$elm_syntax_dsl$Elm$Comments$Comment(A2($elm$core$List$cons, part, parts));
      });
      var $the_sett$elm_syntax_dsl$Elm$Comments$emptyComment = $the_sett$elm_syntax_dsl$Elm$Comments$Comment(_List_Nil);
      var $elm$core$String$trim = _String_trim;
      var $the_sett$elm_syntax_dsl$Elm$DSLParser$removeDelims = function(val) {
        return $elm$core$String$trim(A3($elm$core$String$slice, 3, -2, val));
      };
      var $the_sett$elm_syntax_dsl$Elm$DSLParser$commentParser = A2($elm$parser$Parser$keeper, $elm$parser$Parser$succeed(function(val) {
        return A2($the_sett$elm_syntax_dsl$Elm$Comments$addPart, $the_sett$elm_syntax_dsl$Elm$Comments$emptyComment, $the_sett$elm_syntax_dsl$Elm$Comments$Markdown($the_sett$elm_syntax_dsl$Elm$DSLParser$removeDelims(val)));
      }), $elm$parser$Parser$getChompedString(A3($elm$parser$Parser$multiComment, "{-|", "-}", $elm$parser$Parser$Nestable)));
      var $the_sett$elm_syntax_dsl$Elm$DSLParser$findFirstComment = function(comments) {
        findFirstComment:
          while (true) {
            if (!comments.b) {
              return $elm$core$Maybe$Nothing;
            } else {
              var c = comments.a;
              var cs = comments.b;
              var _v1 = A2($elm$parser$Parser$run, $the_sett$elm_syntax_dsl$Elm$DSLParser$commentParser, c);
              if (_v1.$ === "Err") {
                var $temp$comments = cs;
                comments = $temp$comments;
                continue findFirstComment;
              } else {
                var val = _v1.a;
                return $elm$core$Maybe$Just(val);
              }
            }
          }
      };
      var $elm$core$Maybe$andThen = F2(function(callback, maybeValue) {
        if (maybeValue.$ === "Just") {
          var value = maybeValue.a;
          return callback(value);
        } else {
          return $elm$core$Maybe$Nothing;
        }
      });
      var $the_sett$elm_syntax_dsl$Elm$DSLParser$declNoDocs = function(decl) {
        switch (decl.$) {
          case "FunctionDeclaration":
            var funDecl = decl.a;
            return $stil4m$elm_syntax$Elm$Syntax$Declaration$FunctionDeclaration(_Utils_update(funDecl, {
              documentation: $elm$core$Maybe$Nothing
            }));
          case "AliasDeclaration":
            var aliasDecl = decl.a;
            return $stil4m$elm_syntax$Elm$Syntax$Declaration$AliasDeclaration(_Utils_update(aliasDecl, {
              documentation: $elm$core$Maybe$Nothing
            }));
          case "CustomTypeDeclaration":
            var customTypeDecl = decl.a;
            return $stil4m$elm_syntax$Elm$Syntax$Declaration$CustomTypeDeclaration(_Utils_update(customTypeDecl, {
              documentation: $elm$core$Maybe$Nothing
            }));
          default:
            return decl;
        }
      };
      var $the_sett$elm_syntax_dsl$Elm$DSLParser$declWithDocs = F2(function(decl, docs) {
        switch (decl.$) {
          case "FunctionDeclaration":
            var funDecl = decl.a;
            return $stil4m$elm_syntax$Elm$Syntax$Declaration$FunctionDeclaration(_Utils_update(funDecl, {
              documentation: $elm$core$Maybe$Just($the_sett$elm_syntax_dsl$Util$nodify(docs))
            }));
          case "AliasDeclaration":
            var aliasDecl = decl.a;
            return $stil4m$elm_syntax$Elm$Syntax$Declaration$AliasDeclaration(_Utils_update(aliasDecl, {
              documentation: $elm$core$Maybe$Just($the_sett$elm_syntax_dsl$Util$nodify(docs))
            }));
          case "CustomTypeDeclaration":
            var customTypeDecl = decl.a;
            return $stil4m$elm_syntax$Elm$Syntax$Declaration$CustomTypeDeclaration(_Utils_update(customTypeDecl, {
              documentation: $elm$core$Maybe$Just($the_sett$elm_syntax_dsl$Util$nodify(docs))
            }));
          default:
            return decl;
        }
      });
      var $the_sett$elm_syntax_dsl$Util$denodeMaybe = $elm$core$Maybe$map($the_sett$elm_syntax_dsl$Util$denode);
      var $the_sett$elm_syntax_dsl$Elm$DSLParser$docsFromDecl = function(decl) {
        switch (decl.$) {
          case "FunctionDeclaration":
            var funDecl = decl.a;
            return $the_sett$elm_syntax_dsl$Util$denodeMaybe(funDecl.documentation);
          case "AliasDeclaration":
            var aliasDecl = decl.a;
            return $the_sett$elm_syntax_dsl$Util$denodeMaybe(aliasDecl.documentation);
          case "CustomTypeDeclaration":
            var customTypeDecl = decl.a;
            return $the_sett$elm_syntax_dsl$Util$denodeMaybe(customTypeDecl.documentation);
          default:
            return $elm$core$Maybe$Nothing;
        }
      };
      var $the_sett$elm_syntax_dsl$Elm$DSLParser$tryParseComment = function(comment) {
        return $elm$core$Result$toMaybe(A2($elm$parser$Parser$run, $the_sett$elm_syntax_dsl$Elm$DSLParser$commentParser, comment));
      };
      var $the_sett$elm_syntax_dsl$Elm$DSLParser$parseDeclComments = function(decl) {
        var docComments = A2($elm$core$Maybe$andThen, $the_sett$elm_syntax_dsl$Elm$DSLParser$tryParseComment, $the_sett$elm_syntax_dsl$Elm$DSLParser$docsFromDecl(decl));
        if (docComments.$ === "Nothing") {
          return $the_sett$elm_syntax_dsl$Elm$CodeGen$DeclNoComment($the_sett$elm_syntax_dsl$Elm$DSLParser$declNoDocs(decl));
        } else {
          var val = docComments.a;
          return A2($the_sett$elm_syntax_dsl$Elm$CodeGen$DeclWithComment, val, $the_sett$elm_syntax_dsl$Elm$DSLParser$declWithDocs(decl));
        }
      };
      var $the_sett$elm_syntax_dsl$Elm$DSLParser$parseFileComments = function(file) {
        var fileComments = $the_sett$elm_syntax_dsl$Elm$DSLParser$findFirstComment($the_sett$elm_syntax_dsl$Util$denodeAll($elm$core$List$reverse(file.comments)));
        return A4($the_sett$elm_syntax_dsl$Elm$CodeGen$file, $the_sett$elm_syntax_dsl$Util$denode(file.moduleDefinition), $the_sett$elm_syntax_dsl$Util$denodeAll(file.imports), A2($elm$core$List$map, $the_sett$elm_syntax_dsl$Elm$DSLParser$parseDeclComments, $the_sett$elm_syntax_dsl$Util$denodeAll(file.declarations)), fileComments);
      };
      var $stil4m$elm_syntax$Elm$Processing$expressionOperators = function(_v0) {
        var expression = _v0.b;
        if (expression.$ === "Operator") {
          var s = expression.a;
          return $elm$core$Maybe$Just(s);
        } else {
          return $elm$core$Maybe$Nothing;
        }
      };
      var $elm_community$list_extra$List$Extra$takeWhile = function(predicate) {
        var takeWhileMemo = F2(function(memo, list) {
          takeWhileMemo:
            while (true) {
              if (!list.b) {
                return $elm$core$List$reverse(memo);
              } else {
                var x = list.a;
                var xs = list.b;
                if (predicate(x)) {
                  var $temp$memo = A2($elm$core$List$cons, x, memo), $temp$list = xs;
                  memo = $temp$memo;
                  list = $temp$list;
                  continue takeWhileMemo;
                } else {
                  return $elm$core$List$reverse(memo);
                }
              }
            }
        });
        return takeWhileMemo(_List_Nil);
      };
      var $stil4m$elm_syntax$Elm$Processing$findNextSplit = F2(function(dict, exps) {
        var prefix = A2($elm_community$list_extra$List$Extra$takeWhile, function(x) {
          return _Utils_eq($elm$core$Maybe$Nothing, A2($elm$core$Maybe$andThen, function(key) {
            return A2($elm$core$Dict$get, key, dict);
          }, $stil4m$elm_syntax$Elm$Processing$expressionOperators(x)));
        }, exps);
        var suffix = A2($elm$core$List$drop, $elm$core$List$length(prefix) + 1, exps);
        return A2($elm$core$Maybe$map, function(x) {
          return _Utils_Tuple3(prefix, x, suffix);
        }, A2($elm$core$Maybe$andThen, function(x) {
          return A2($elm$core$Dict$get, x, dict);
        }, A2($elm$core$Maybe$andThen, $stil4m$elm_syntax$Elm$Processing$expressionOperators, $elm$core$List$head(A2($elm$core$List$drop, $elm$core$List$length(prefix), exps)))));
      });
      var $elm$core$Dict$isEmpty = function(dict) {
        if (dict.$ === "RBEmpty_elm_builtin") {
          return true;
        } else {
          return false;
        }
      };
      var $elm$core$Dict$fromList = function(assocs) {
        return A3($elm$core$List$foldl, F2(function(_v0, dict) {
          var key = _v0.a;
          var value = _v0.b;
          return A3($elm$core$Dict$insert, key, value, dict);
        }), $elm$core$Dict$empty, assocs);
      };
      var $elm$core$Basics$min = F2(function(x, y) {
        return _Utils_cmp(x, y) < 0 ? x : y;
      });
      var $elm$core$List$minimum = function(list) {
        if (list.b) {
          var x = list.a;
          var xs = list.b;
          return $elm$core$Maybe$Just(A3($elm$core$List$foldl, $elm$core$Basics$min, x, xs));
        } else {
          return $elm$core$Maybe$Nothing;
        }
      };
      var $stil4m$elm_syntax$Elm$Processing$lowestPrecedence = function(input) {
        return $elm$core$Dict$fromList(A2($elm$core$Maybe$withDefault, _List_Nil, A2($elm$core$Maybe$map, function(m) {
          return A2($elm$core$List$filter, A2($elm$core$Basics$composeR, $elm$core$Tuple$second, A2($elm$core$Basics$composeR, function($) {
            return $.precedence;
          }, A2($elm$core$Basics$composeR, $stil4m$elm_syntax$Elm$Syntax$Node$value, $elm$core$Basics$eq(m)))), input);
        }, $elm$core$List$minimum(A2($elm$core$List$map, A2($elm$core$Basics$composeR, $elm$core$Tuple$second, A2($elm$core$Basics$composeR, function($) {
          return $.precedence;
        }, $stil4m$elm_syntax$Elm$Syntax$Node$value)), input)))));
      };
      var $stil4m$elm_syntax$Elm$Processing$fixApplication = F2(function(operators, expressions) {
        var ops = $stil4m$elm_syntax$Elm$Processing$lowestPrecedence(A2($elm$core$List$map, function(x) {
          return _Utils_Tuple2(x, A2($elm$core$Maybe$withDefault, {
            direction: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, $stil4m$elm_syntax$Elm$Syntax$Infix$Left),
            _function: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, "todo"),
            operator: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, x),
            precedence: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 5)
          }, A2($elm$core$Dict$get, x, operators)));
        }, A2($elm$core$List$filterMap, $stil4m$elm_syntax$Elm$Processing$expressionOperators, expressions)));
        var fixExprs = function(exps) {
          if (exps.b && !exps.b.b) {
            var _v2 = exps.a;
            var x = _v2.b;
            return x;
          } else {
            return $stil4m$elm_syntax$Elm$Syntax$Expression$Application(exps);
          }
        };
        var divideAndConquer = function(exps) {
          return $elm$core$Dict$isEmpty(ops) ? fixExprs(exps) : A2($elm$core$Maybe$withDefault, fixExprs(exps), A2($elm$core$Maybe$map, function(_v0) {
            var p = _v0.a;
            var infix = _v0.b;
            var s = _v0.c;
            return A4($stil4m$elm_syntax$Elm$Syntax$Expression$OperatorApplication, $stil4m$elm_syntax$Elm$Syntax$Node$value(infix.operator), $stil4m$elm_syntax$Elm$Syntax$Node$value(infix.direction), A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$combine(A2($elm$core$List$map, $stil4m$elm_syntax$Elm$Syntax$Node$range, p)), divideAndConquer(p)), A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$combine(A2($elm$core$List$map, $stil4m$elm_syntax$Elm$Syntax$Node$range, s)), divideAndConquer(s)));
          }, A2($stil4m$elm_syntax$Elm$Processing$findNextSplit, ops, exps)));
        };
        return divideAndConquer(expressions);
      });
      var $stil4m$elm_syntax$Elm$Inspector$Post = function(a) {
        return {
          $: "Post",
          a
        };
      };
      var $stil4m$elm_syntax$Elm$Inspector$Continue = {
        $: "Continue"
      };
      var $stil4m$elm_syntax$Elm$Inspector$defaultConfig = {
        onCase: $stil4m$elm_syntax$Elm$Inspector$Continue,
        onDestructuring: $stil4m$elm_syntax$Elm$Inspector$Continue,
        onExpression: $stil4m$elm_syntax$Elm$Inspector$Continue,
        onFile: $stil4m$elm_syntax$Elm$Inspector$Continue,
        onFunction: $stil4m$elm_syntax$Elm$Inspector$Continue,
        onFunctionOrValue: $stil4m$elm_syntax$Elm$Inspector$Continue,
        onImport: $stil4m$elm_syntax$Elm$Inspector$Continue,
        onInfixDeclaration: $stil4m$elm_syntax$Elm$Inspector$Continue,
        onLambda: $stil4m$elm_syntax$Elm$Inspector$Continue,
        onLetBlock: $stil4m$elm_syntax$Elm$Inspector$Continue,
        onOperatorApplication: $stil4m$elm_syntax$Elm$Inspector$Continue,
        onPortDeclaration: $stil4m$elm_syntax$Elm$Inspector$Continue,
        onRecordAccess: $stil4m$elm_syntax$Elm$Inspector$Continue,
        onRecordUpdate: $stil4m$elm_syntax$Elm$Inspector$Continue,
        onSignature: $stil4m$elm_syntax$Elm$Inspector$Continue,
        onType: $stil4m$elm_syntax$Elm$Inspector$Continue,
        onTypeAlias: $stil4m$elm_syntax$Elm$Inspector$Continue,
        onTypeAnnotation: $stil4m$elm_syntax$Elm$Inspector$Continue
      };
      var $stil4m$elm_syntax$Elm$Inspector$actionLambda = function(act) {
        switch (act.$) {
          case "Skip":
            return F3(function(_v1, _v2, c) {
              return c;
            });
          case "Continue":
            return F3(function(f, _v3, c) {
              return f(c);
            });
          case "Pre":
            var g = act.a;
            return F3(function(f, x, c) {
              return f(A2(g, x, c));
            });
          case "Post":
            var g = act.a;
            return F3(function(f, x, c) {
              return A2(g, x, f(c));
            });
          default:
            var g = act.a;
            return F3(function(f, x, c) {
              return A3(g, f, x, c);
            });
        }
      };
      var $stil4m$elm_syntax$Elm$Inspector$inspectTypeAnnotation = F3(function(config, typeAnnotation, context) {
        return A4($stil4m$elm_syntax$Elm$Inspector$actionLambda, config.onTypeAnnotation, A2($stil4m$elm_syntax$Elm$Inspector$inspectTypeAnnotationInner, config, typeAnnotation), typeAnnotation, context);
      });
      var $stil4m$elm_syntax$Elm$Inspector$inspectTypeAnnotationInner = F3(function(config, _v0, context) {
        var typeRefence = _v0.b;
        switch (typeRefence.$) {
          case "Typed":
            var typeArgs = typeRefence.b;
            return A3($elm$core$List$foldl, $stil4m$elm_syntax$Elm$Inspector$inspectTypeAnnotation(config), context, typeArgs);
          case "Tupled":
            var typeAnnotations = typeRefence.a;
            return A3($elm$core$List$foldl, $stil4m$elm_syntax$Elm$Inspector$inspectTypeAnnotation(config), context, typeAnnotations);
          case "Record":
            var recordDefinition = typeRefence.a;
            return A3($elm$core$List$foldl, $stil4m$elm_syntax$Elm$Inspector$inspectTypeAnnotation(config), context, A2($elm$core$List$map, A2($elm$core$Basics$composeR, $stil4m$elm_syntax$Elm$Syntax$Node$value, $elm$core$Tuple$second), recordDefinition));
          case "GenericRecord":
            var recordDefinition = typeRefence.b;
            return A3($elm$core$List$foldl, $stil4m$elm_syntax$Elm$Inspector$inspectTypeAnnotation(config), context, A2($elm$core$List$map, A2($elm$core$Basics$composeR, $stil4m$elm_syntax$Elm$Syntax$Node$value, $elm$core$Tuple$second), $stil4m$elm_syntax$Elm$Syntax$Node$value(recordDefinition)));
          case "FunctionTypeAnnotation":
            var left = typeRefence.a;
            var right = typeRefence.b;
            return A3($elm$core$List$foldl, $stil4m$elm_syntax$Elm$Inspector$inspectTypeAnnotation(config), context, _List_fromArray([left, right]));
          case "Unit":
            return context;
          default:
            return context;
        }
      });
      var $stil4m$elm_syntax$Elm$Inspector$inspectSignature = F3(function(config, node, context) {
        var signature = node.b;
        return A4($stil4m$elm_syntax$Elm$Inspector$actionLambda, config.onSignature, A2($stil4m$elm_syntax$Elm$Inspector$inspectTypeAnnotation, config, signature.typeAnnotation), node, context);
      });
      var $stil4m$elm_syntax$Elm$Inspector$inspectCase = F3(function(config, caze, context) {
        return A4($stil4m$elm_syntax$Elm$Inspector$actionLambda, config.onCase, A2($stil4m$elm_syntax$Elm$Inspector$inspectExpression, config, caze.b), caze, context);
      });
      var $stil4m$elm_syntax$Elm$Inspector$inspectDestructuring = F3(function(config, destructuring, context) {
        return A4($stil4m$elm_syntax$Elm$Inspector$actionLambda, config.onDestructuring, function(c) {
          return A3($stil4m$elm_syntax$Elm$Inspector$inspectExpression, config, $stil4m$elm_syntax$Elm$Syntax$Node$value(destructuring).b, c);
        }, destructuring, context);
      });
      var $stil4m$elm_syntax$Elm$Inspector$inspectExpression = F3(function(config, node, context) {
        var expression = node.b;
        return A4($stil4m$elm_syntax$Elm$Inspector$actionLambda, config.onExpression, A2($stil4m$elm_syntax$Elm$Inspector$inspectInnerExpression, config, expression), node, context);
      });
      var $stil4m$elm_syntax$Elm$Inspector$inspectFunction = F3(function(config, node, context) {
        var _function = node.b;
        return A4($stil4m$elm_syntax$Elm$Inspector$actionLambda, config.onFunction, A2($elm$core$Basics$composeR, A2($stil4m$elm_syntax$Elm$Inspector$inspectExpression, config, $stil4m$elm_syntax$Elm$Syntax$Node$value(_function.declaration).expression), A2($elm$core$Maybe$withDefault, $elm$core$Basics$identity, A2($elm$core$Maybe$map, $stil4m$elm_syntax$Elm$Inspector$inspectSignature(config), _function.signature))), node, context);
      });
      var $stil4m$elm_syntax$Elm$Inspector$inspectInnerExpression = F3(function(config, expression, context) {
        switch (expression.$) {
          case "UnitExpr":
            return context;
          case "FunctionOrValue":
            var moduleName = expression.a;
            var functionOrVal = expression.b;
            return A4($stil4m$elm_syntax$Elm$Inspector$actionLambda, config.onFunctionOrValue, $elm$core$Basics$identity, _Utils_Tuple2(moduleName, functionOrVal), context);
          case "PrefixOperator":
            return context;
          case "Operator":
            return context;
          case "Hex":
            return context;
          case "Integer":
            return context;
          case "Floatable":
            return context;
          case "Negation":
            var x = expression.a;
            return A3($stil4m$elm_syntax$Elm$Inspector$inspectExpression, config, x, context);
          case "Literal":
            return context;
          case "CharLiteral":
            return context;
          case "RecordAccess":
            var ex1 = expression.a;
            var key = expression.b;
            return A4($stil4m$elm_syntax$Elm$Inspector$actionLambda, config.onRecordAccess, A2($stil4m$elm_syntax$Elm$Inspector$inspectExpression, config, ex1), _Utils_Tuple2(ex1, key), context);
          case "RecordAccessFunction":
            return context;
          case "GLSLExpression":
            return context;
          case "Application":
            var expressionList = expression.a;
            return A3($elm$core$List$foldl, $stil4m$elm_syntax$Elm$Inspector$inspectExpression(config), context, expressionList);
          case "OperatorApplication":
            var op = expression.a;
            var dir = expression.b;
            var left = expression.c;
            var right = expression.d;
            return A4($stil4m$elm_syntax$Elm$Inspector$actionLambda, config.onOperatorApplication, function(base) {
              return A3($elm$core$List$foldl, $stil4m$elm_syntax$Elm$Inspector$inspectExpression(config), base, _List_fromArray([left, right]));
            }, {
              direction: dir,
              left,
              operator: op,
              right
            }, context);
          case "IfBlock":
            var e1 = expression.a;
            var e2 = expression.b;
            var e3 = expression.c;
            return A3($elm$core$List$foldl, $stil4m$elm_syntax$Elm$Inspector$inspectExpression(config), context, _List_fromArray([e1, e2, e3]));
          case "TupledExpression":
            var expressionList = expression.a;
            return A3($elm$core$List$foldl, $stil4m$elm_syntax$Elm$Inspector$inspectExpression(config), context, expressionList);
          case "ParenthesizedExpression":
            var inner = expression.a;
            return A3($stil4m$elm_syntax$Elm$Inspector$inspectExpression, config, inner, context);
          case "LetExpression":
            var letBlock = expression.a;
            var next = A2($elm$core$Basics$composeR, A2($stil4m$elm_syntax$Elm$Inspector$inspectLetDeclarations, config, letBlock.declarations), A2($stil4m$elm_syntax$Elm$Inspector$inspectExpression, config, letBlock.expression));
            return A4($stil4m$elm_syntax$Elm$Inspector$actionLambda, config.onLetBlock, next, letBlock, context);
          case "CaseExpression":
            var caseBlock = expression.a;
            var context2 = A3($stil4m$elm_syntax$Elm$Inspector$inspectExpression, config, caseBlock.expression, context);
            var context3 = A3($elm$core$List$foldl, F2(function(a, b) {
              return A3($stil4m$elm_syntax$Elm$Inspector$inspectCase, config, a, b);
            }), context2, caseBlock.cases);
            return context3;
          case "LambdaExpression":
            var lambda = expression.a;
            return A4($stil4m$elm_syntax$Elm$Inspector$actionLambda, config.onLambda, A2($stil4m$elm_syntax$Elm$Inspector$inspectExpression, config, lambda.expression), lambda, context);
          case "ListExpr":
            var expressionList = expression.a;
            return A3($elm$core$List$foldl, $stil4m$elm_syntax$Elm$Inspector$inspectExpression(config), context, expressionList);
          case "RecordExpr":
            var expressionStringList = expression.a;
            return A3($elm$core$List$foldl, F2(function(a, b) {
              return A3($stil4m$elm_syntax$Elm$Inspector$inspectExpression, config, $stil4m$elm_syntax$Elm$Syntax$Node$value(a).b, b);
            }), context, expressionStringList);
          default:
            var name = expression.a;
            var updates = expression.b;
            return A4($stil4m$elm_syntax$Elm$Inspector$actionLambda, config.onRecordUpdate, function(c) {
              return A3($elm$core$List$foldl, F2(function(a, b) {
                return A3($stil4m$elm_syntax$Elm$Inspector$inspectExpression, config, $stil4m$elm_syntax$Elm$Syntax$Node$value(a).b, b);
              }), c, updates);
            }, _Utils_Tuple2(name, updates), context);
        }
      });
      var $stil4m$elm_syntax$Elm$Inspector$inspectLetDeclaration = F3(function(config, _v0, context) {
        var range = _v0.a;
        var declaration = _v0.b;
        if (declaration.$ === "LetFunction") {
          var _function = declaration.a;
          return A3($stil4m$elm_syntax$Elm$Inspector$inspectFunction, config, A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, range, _function), context);
        } else {
          var pattern = declaration.a;
          var expression = declaration.b;
          return A3($stil4m$elm_syntax$Elm$Inspector$inspectDestructuring, config, A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, range, _Utils_Tuple2(pattern, expression)), context);
        }
      });
      var $stil4m$elm_syntax$Elm$Inspector$inspectLetDeclarations = F3(function(config, declarations, context) {
        return A3($elm$core$List$foldl, $stil4m$elm_syntax$Elm$Inspector$inspectLetDeclaration(config), context, declarations);
      });
      var $stil4m$elm_syntax$Elm$Inspector$inspectPortDeclaration = F3(function(config, signature, context) {
        return A4($stil4m$elm_syntax$Elm$Inspector$actionLambda, config.onPortDeclaration, A2($stil4m$elm_syntax$Elm$Inspector$inspectSignature, config, signature), signature, context);
      });
      var $stil4m$elm_syntax$Elm$Inspector$inspectValueConstructor = F3(function(config, _v0, context) {
        var valueConstructor = _v0.b;
        return A3($elm$core$List$foldl, $stil4m$elm_syntax$Elm$Inspector$inspectTypeAnnotation(config), context, valueConstructor._arguments);
      });
      var $stil4m$elm_syntax$Elm$Inspector$inspectTypeInner = F3(function(config, typeDecl, context) {
        return A3($elm$core$List$foldl, $stil4m$elm_syntax$Elm$Inspector$inspectValueConstructor(config), context, typeDecl.constructors);
      });
      var $stil4m$elm_syntax$Elm$Inspector$inspectType = F3(function(config, tipe, context) {
        return A4($stil4m$elm_syntax$Elm$Inspector$actionLambda, config.onType, A2($stil4m$elm_syntax$Elm$Inspector$inspectTypeInner, config, $stil4m$elm_syntax$Elm$Syntax$Node$value(tipe)), tipe, context);
      });
      var $stil4m$elm_syntax$Elm$Inspector$inspectTypeAlias = F3(function(config, pair, context) {
        var typeAlias = pair.b;
        return A4($stil4m$elm_syntax$Elm$Inspector$actionLambda, config.onTypeAlias, A2($stil4m$elm_syntax$Elm$Inspector$inspectTypeAnnotation, config, typeAlias.typeAnnotation), pair, context);
      });
      var $stil4m$elm_syntax$Elm$Inspector$inspectDeclaration = F3(function(config, _v0, context) {
        var r = _v0.a;
        var declaration = _v0.b;
        switch (declaration.$) {
          case "FunctionDeclaration":
            var _function = declaration.a;
            return A3($stil4m$elm_syntax$Elm$Inspector$inspectFunction, config, A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, r, _function), context);
          case "AliasDeclaration":
            var typeAlias = declaration.a;
            return A3($stil4m$elm_syntax$Elm$Inspector$inspectTypeAlias, config, A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, r, typeAlias), context);
          case "CustomTypeDeclaration":
            var typeDecl = declaration.a;
            return A3($stil4m$elm_syntax$Elm$Inspector$inspectType, config, A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, r, typeDecl), context);
          case "PortDeclaration":
            var signature = declaration.a;
            return A3($stil4m$elm_syntax$Elm$Inspector$inspectPortDeclaration, config, A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, r, signature), context);
          case "InfixDeclaration":
            var inf = declaration.a;
            return A4($stil4m$elm_syntax$Elm$Inspector$actionLambda, config.onInfixDeclaration, $elm$core$Basics$identity, A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, r, inf), context);
          default:
            var pattern = declaration.a;
            var expresion = declaration.b;
            return A3($stil4m$elm_syntax$Elm$Inspector$inspectDestructuring, config, A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, r, _Utils_Tuple2(pattern, expresion)), context);
        }
      });
      var $stil4m$elm_syntax$Elm$Inspector$inspectDeclarations = F3(function(config, declarations, context) {
        return A3($elm$core$List$foldl, $stil4m$elm_syntax$Elm$Inspector$inspectDeclaration(config), context, declarations);
      });
      var $stil4m$elm_syntax$Elm$Inspector$inspectImport = F3(function(config, imp, context) {
        return A4($stil4m$elm_syntax$Elm$Inspector$actionLambda, config.onImport, $elm$core$Basics$identity, imp, context);
      });
      var $stil4m$elm_syntax$Elm$Inspector$inspectImports = F3(function(config, imports, context) {
        return A3($elm$core$List$foldl, $stil4m$elm_syntax$Elm$Inspector$inspectImport(config), context, imports);
      });
      var $stil4m$elm_syntax$Elm$Inspector$inspect = F3(function(config, file, context) {
        return A4($stil4m$elm_syntax$Elm$Inspector$actionLambda, config.onFile, A2($elm$core$Basics$composeR, A2($stil4m$elm_syntax$Elm$Inspector$inspectImports, config, file.imports), A2($stil4m$elm_syntax$Elm$Inspector$inspectDeclarations, config, file.declarations)), file, context);
      });
      var $stil4m$elm_syntax$Elm$Processing$Documentation$isDocumentationForRange = F2(function(range, _v0) {
        var commentRange = _v0.a;
        var commentText = _v0.b;
        if (A2($elm$core$String$startsWith, "{-|", commentText)) {
          var functionStartRow = range.start.row;
          return _Utils_eq(commentRange.end.row + 1, functionStartRow);
        } else {
          return false;
        }
      });
      var $stil4m$elm_syntax$Elm$Processing$Documentation$replaceDeclaration = F2(function(_v0, _v1) {
        var r1 = _v0.a;
        var _new = _v0.b;
        var r2 = _v1.a;
        var old = _v1.b;
        return A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, r2, _Utils_eq(r1, r2) ? _new : old);
      });
      var $stil4m$elm_syntax$Elm$Processing$Documentation$onFunction = F2(function(_v0, file) {
        var functionRange = _v0.a;
        var _function = _v0.b;
        var docs = A2($elm$core$List$filter, $stil4m$elm_syntax$Elm$Processing$Documentation$isDocumentationForRange(functionRange), file.comments);
        var _v1 = $elm$core$List$head(docs);
        if (_v1.$ === "Just") {
          var doc = _v1.a;
          var docRange = doc.a;
          var docString = doc.b;
          return _Utils_update(file, {
            comments: A2($elm$core$List$filter, $elm$core$Basics$neq(doc), file.comments),
            declarations: A2($elm$core$List$map, $stil4m$elm_syntax$Elm$Processing$Documentation$replaceDeclaration(A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, functionRange, $stil4m$elm_syntax$Elm$Syntax$Declaration$FunctionDeclaration(_Utils_update(_function, {
              documentation: $elm$core$Maybe$Just(A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, docRange, docString))
            })))), file.declarations)
          });
        } else {
          return file;
        }
      });
      var $stil4m$elm_syntax$Elm$Processing$Documentation$onType = F2(function(_v0, file) {
        var r = _v0.a;
        var customType = _v0.b;
        var docs = A2($elm$core$List$filter, $stil4m$elm_syntax$Elm$Processing$Documentation$isDocumentationForRange(r), file.comments);
        var _v1 = $elm$core$List$head(docs);
        if (_v1.$ === "Just") {
          var doc = _v1.a;
          var docRange = doc.a;
          var docString = doc.b;
          return _Utils_update(file, {
            comments: A2($elm$core$List$filter, $elm$core$Basics$neq(doc), file.comments),
            declarations: A2($elm$core$List$map, $stil4m$elm_syntax$Elm$Processing$Documentation$replaceDeclaration(A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, r, $stil4m$elm_syntax$Elm$Syntax$Declaration$CustomTypeDeclaration(_Utils_update(customType, {
              documentation: $elm$core$Maybe$Just(A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, docRange, docString))
            })))), file.declarations)
          });
        } else {
          return file;
        }
      });
      var $stil4m$elm_syntax$Elm$Processing$Documentation$onTypeAlias = F2(function(_v0, file) {
        var r = _v0.a;
        var typeAlias = _v0.b;
        var docs = A2($elm$core$List$filter, $stil4m$elm_syntax$Elm$Processing$Documentation$isDocumentationForRange(r), file.comments);
        var _v1 = $elm$core$List$head(docs);
        if (_v1.$ === "Just") {
          var doc = _v1.a;
          var docRange = doc.a;
          var docString = doc.b;
          return _Utils_update(file, {
            comments: A2($elm$core$List$filter, $elm$core$Basics$neq(doc), file.comments),
            declarations: A2($elm$core$List$map, $stil4m$elm_syntax$Elm$Processing$Documentation$replaceDeclaration(A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, r, $stil4m$elm_syntax$Elm$Syntax$Declaration$AliasDeclaration(_Utils_update(typeAlias, {
              documentation: $elm$core$Maybe$Just(A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, docRange, docString))
            })))), file.declarations)
          });
        } else {
          return file;
        }
      });
      var $stil4m$elm_syntax$Elm$Processing$Documentation$postProcess = function(file) {
        return A3($stil4m$elm_syntax$Elm$Inspector$inspect, _Utils_update($stil4m$elm_syntax$Elm$Inspector$defaultConfig, {
          onFunction: $stil4m$elm_syntax$Elm$Inspector$Post($stil4m$elm_syntax$Elm$Processing$Documentation$onFunction),
          onType: $stil4m$elm_syntax$Elm$Inspector$Post($stil4m$elm_syntax$Elm$Processing$Documentation$onType),
          onTypeAlias: $stil4m$elm_syntax$Elm$Inspector$Post($stil4m$elm_syntax$Elm$Processing$Documentation$onTypeAlias)
        }), file, file);
      };
      var $stil4m$elm_syntax$Elm$Interface$operators = $elm$core$List$filterMap(function(i) {
        if (i.$ === "Operator") {
          var o = i.a;
          return $elm$core$Maybe$Just(o);
        } else {
          return $elm$core$Maybe$Nothing;
        }
      });
      var $stil4m$elm_syntax$Elm$Syntax$Exposing$operator = function(t) {
        if (t.$ === "InfixExpose") {
          var s = t.a;
          return $elm$core$Maybe$Just(s);
        } else {
          return $elm$core$Maybe$Nothing;
        }
      };
      var $stil4m$elm_syntax$Elm$Syntax$Exposing$operators = function(l) {
        return A2($elm$core$List$filterMap, $stil4m$elm_syntax$Elm$Syntax$Exposing$operator, l);
      };
      var $stil4m$elm_syntax$Elm$Processing$buildSingle = F2(function(imp, moduleIndex) {
        var _v0 = imp.exposingList;
        if (_v0.$ === "Nothing") {
          return _List_Nil;
        } else {
          if (_v0.a.b.$ === "All") {
            var _v1 = _v0.a;
            return A2($elm$core$List$map, function(x) {
              return _Utils_Tuple2($stil4m$elm_syntax$Elm$Syntax$Node$value(x.operator), x);
            }, $stil4m$elm_syntax$Elm$Interface$operators(A2($elm$core$Maybe$withDefault, _List_Nil, A2($elm$core$Dict$get, $stil4m$elm_syntax$Elm$Syntax$Node$value(imp.moduleName), moduleIndex))));
          } else {
            var _v2 = _v0.a;
            var l = _v2.b.a;
            var selectedOperators = $stil4m$elm_syntax$Elm$Syntax$Exposing$operators(A2($elm$core$List$map, $stil4m$elm_syntax$Elm$Syntax$Node$value, l));
            return A2($elm$core$List$filter, A2($elm$core$Basics$composeR, $elm$core$Tuple$first, function(elem) {
              return A2($elm$core$List$member, elem, selectedOperators);
            }), A2($elm$core$List$map, function(x) {
              return _Utils_Tuple2($stil4m$elm_syntax$Elm$Syntax$Node$value(x.operator), x);
            }, $stil4m$elm_syntax$Elm$Interface$operators(A2($elm$core$Maybe$withDefault, _List_Nil, A2($elm$core$Dict$get, $stil4m$elm_syntax$Elm$Syntax$Node$value(imp.moduleName), moduleIndex)))));
          }
        }
      });
      var $stil4m$elm_syntax$Elm$DefaultImports$defaults = _List_fromArray([{
        exposingList: $elm$core$Maybe$Just(A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, $stil4m$elm_syntax$Elm$Syntax$Exposing$All($stil4m$elm_syntax$Elm$Syntax$Range$emptyRange))),
        moduleAlias: $elm$core$Maybe$Nothing,
        moduleName: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, _List_fromArray(["Basics"]))
      }, {
        exposingList: $elm$core$Maybe$Just(A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, $stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit(_List_fromArray([A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, $stil4m$elm_syntax$Elm$Syntax$Exposing$TypeExpose(A2($stil4m$elm_syntax$Elm$Syntax$Exposing$ExposedType, "List", $elm$core$Maybe$Nothing))), A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, $stil4m$elm_syntax$Elm$Syntax$Exposing$InfixExpose("::"))])))),
        moduleAlias: $elm$core$Maybe$Nothing,
        moduleName: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, _List_fromArray(["List"]))
      }, {
        exposingList: $elm$core$Maybe$Just(A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, $stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit(_List_fromArray([A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, $stil4m$elm_syntax$Elm$Syntax$Exposing$TypeExpose(A2($stil4m$elm_syntax$Elm$Syntax$Exposing$ExposedType, "Maybe", $elm$core$Maybe$Just($stil4m$elm_syntax$Elm$Syntax$Range$emptyRange))))])))),
        moduleAlias: $elm$core$Maybe$Nothing,
        moduleName: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, _List_fromArray(["Maybe"]))
      }, {
        exposingList: $elm$core$Maybe$Just(A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, $stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit(_List_fromArray([A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, $stil4m$elm_syntax$Elm$Syntax$Exposing$TypeExpose(A2($stil4m$elm_syntax$Elm$Syntax$Exposing$ExposedType, "Result", $elm$core$Maybe$Just($stil4m$elm_syntax$Elm$Syntax$Range$emptyRange))))])))),
        moduleAlias: $elm$core$Maybe$Nothing,
        moduleName: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, _List_fromArray(["Result"]))
      }, {
        exposingList: $elm$core$Maybe$Nothing,
        moduleAlias: $elm$core$Maybe$Nothing,
        moduleName: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, _List_fromArray(["String"]))
      }, {
        exposingList: $elm$core$Maybe$Nothing,
        moduleAlias: $elm$core$Maybe$Nothing,
        moduleName: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, _List_fromArray(["Tuple"]))
      }, {
        exposingList: $elm$core$Maybe$Nothing,
        moduleAlias: $elm$core$Maybe$Nothing,
        moduleName: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, _List_fromArray(["Debug"]))
      }, {
        exposingList: $elm$core$Maybe$Just(A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, $stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit(_List_fromArray([A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, $stil4m$elm_syntax$Elm$Syntax$Exposing$TypeExpose(A2($stil4m$elm_syntax$Elm$Syntax$Exposing$ExposedType, "Program", $elm$core$Maybe$Nothing)))])))),
        moduleAlias: $elm$core$Maybe$Nothing,
        moduleName: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, _List_fromArray(["Platform"]))
      }, {
        exposingList: $elm$core$Maybe$Just(A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, $stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit(_List_fromArray([A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, $stil4m$elm_syntax$Elm$Syntax$Exposing$TypeExpose(A2($stil4m$elm_syntax$Elm$Syntax$Exposing$ExposedType, "Cmd", $elm$core$Maybe$Nothing))), A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, $stil4m$elm_syntax$Elm$Syntax$Exposing$InfixExpose("!"))])))),
        moduleAlias: $elm$core$Maybe$Nothing,
        moduleName: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, _List_fromArray(["Platform", "Cmd"]))
      }, {
        exposingList: $elm$core$Maybe$Just(A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, $stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit(_List_fromArray([A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, $stil4m$elm_syntax$Elm$Syntax$Exposing$TypeExpose(A2($stil4m$elm_syntax$Elm$Syntax$Exposing$ExposedType, "Sub", $elm$core$Maybe$Nothing)))])))),
        moduleAlias: $elm$core$Maybe$Nothing,
        moduleName: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, _List_fromArray(["Platform", "Sub"]))
      }]);
      var $stil4m$elm_syntax$Elm$RawFile$imports = function(_v0) {
        var file = _v0.a;
        return A2($elm$core$List$map, $stil4m$elm_syntax$Elm$Syntax$Node$value, file.imports);
      };
      var $stil4m$elm_syntax$Elm$Processing$tableForFile = F2(function(rawFile, _v0) {
        var moduleIndex = _v0.a;
        return $elm$core$Dict$fromList(A2($elm$core$List$concatMap, function(a) {
          return A2($stil4m$elm_syntax$Elm$Processing$buildSingle, a, moduleIndex);
        }, _Utils_ap($stil4m$elm_syntax$Elm$DefaultImports$defaults, $stil4m$elm_syntax$Elm$RawFile$imports(rawFile))));
      });
      var $stil4m$elm_syntax$Elm$Syntax$Node$map = F2(function(f, _v0) {
        var r = _v0.a;
        var a = _v0.b;
        return A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, r, f(a));
      });
      var $stil4m$elm_syntax$Elm$Processing$visitExpression = F3(function(visitor, context, expression) {
        var inner = A2($stil4m$elm_syntax$Elm$Processing$visitExpressionInner, visitor, context);
        return A3(A2($elm$core$Maybe$withDefault, F3(function(_v4, nest, expr) {
          return nest(expr);
        }), visitor), context, inner, expression);
      });
      var $stil4m$elm_syntax$Elm$Processing$visitExpressionInner = F3(function(visitor, context, _v2) {
        var range = _v2.a;
        var expression = _v2.b;
        var subVisit = A2($stil4m$elm_syntax$Elm$Processing$visitExpression, visitor, context);
        return function(newExpr) {
          return A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, range, newExpr);
        }(function() {
          switch (expression.$) {
            case "Application":
              var expressionList = expression.a;
              return $stil4m$elm_syntax$Elm$Syntax$Expression$Application(A2($elm$core$List$map, subVisit, expressionList));
            case "OperatorApplication":
              var op = expression.a;
              var dir = expression.b;
              var left = expression.c;
              var right = expression.d;
              return A4($stil4m$elm_syntax$Elm$Syntax$Expression$OperatorApplication, op, dir, subVisit(left), subVisit(right));
            case "IfBlock":
              var e1 = expression.a;
              var e2 = expression.b;
              var e3 = expression.c;
              return A3($stil4m$elm_syntax$Elm$Syntax$Expression$IfBlock, subVisit(e1), subVisit(e2), subVisit(e3));
            case "TupledExpression":
              var expressionList = expression.a;
              return $stil4m$elm_syntax$Elm$Syntax$Expression$TupledExpression(A2($elm$core$List$map, subVisit, expressionList));
            case "ParenthesizedExpression":
              var expr1 = expression.a;
              return $stil4m$elm_syntax$Elm$Syntax$Expression$ParenthesizedExpression(subVisit(expr1));
            case "LetExpression":
              var letBlock = expression.a;
              return $stil4m$elm_syntax$Elm$Syntax$Expression$LetExpression({
                declarations: A3($stil4m$elm_syntax$Elm$Processing$visitLetDeclarations, visitor, context, letBlock.declarations),
                expression: subVisit(letBlock.expression)
              });
            case "CaseExpression":
              var caseBlock = expression.a;
              return $stil4m$elm_syntax$Elm$Syntax$Expression$CaseExpression({
                cases: A2($elm$core$List$map, $elm$core$Tuple$mapSecond(subVisit), caseBlock.cases),
                expression: subVisit(caseBlock.expression)
              });
            case "LambdaExpression":
              var lambda = expression.a;
              return $stil4m$elm_syntax$Elm$Syntax$Expression$LambdaExpression(_Utils_update(lambda, {
                expression: subVisit(lambda.expression)
              }));
            case "RecordExpr":
              var expressionStringList = expression.a;
              return $stil4m$elm_syntax$Elm$Syntax$Expression$RecordExpr(A2($elm$core$List$map, $stil4m$elm_syntax$Elm$Syntax$Node$map($elm$core$Tuple$mapSecond(subVisit)), expressionStringList));
            case "ListExpr":
              var expressionList = expression.a;
              return $stil4m$elm_syntax$Elm$Syntax$Expression$ListExpr(A2($elm$core$List$map, subVisit, expressionList));
            case "RecordUpdateExpression":
              var name = expression.a;
              var updates = expression.b;
              return A2($stil4m$elm_syntax$Elm$Syntax$Expression$RecordUpdateExpression, name, A2($elm$core$List$map, $stil4m$elm_syntax$Elm$Syntax$Node$map($elm$core$Tuple$mapSecond(subVisit)), updates));
            default:
              return expression;
          }
        }());
      });
      var $stil4m$elm_syntax$Elm$Processing$visitFunctionDecl = F3(function(visitor, context, _function) {
        var newFunctionDeclaration = A2($stil4m$elm_syntax$Elm$Syntax$Node$map, A2($stil4m$elm_syntax$Elm$Processing$visitFunctionDeclaration, visitor, context), _function.declaration);
        return _Utils_update(_function, {
          declaration: newFunctionDeclaration
        });
      });
      var $stil4m$elm_syntax$Elm$Processing$visitFunctionDeclaration = F3(function(visitor, context, functionDeclaration) {
        var newExpression = A3($stil4m$elm_syntax$Elm$Processing$visitExpression, visitor, context, functionDeclaration.expression);
        return _Utils_update(functionDeclaration, {
          expression: newExpression
        });
      });
      var $stil4m$elm_syntax$Elm$Processing$visitLetDeclaration = F3(function(visitor, context, _v0) {
        var range = _v0.a;
        var declaration = _v0.b;
        return A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, range, function() {
          if (declaration.$ === "LetFunction") {
            var _function = declaration.a;
            return $stil4m$elm_syntax$Elm$Syntax$Expression$LetFunction(A3($stil4m$elm_syntax$Elm$Processing$visitFunctionDecl, visitor, context, _function));
          } else {
            var pattern = declaration.a;
            var expression = declaration.b;
            return A2($stil4m$elm_syntax$Elm$Syntax$Expression$LetDestructuring, pattern, A3($stil4m$elm_syntax$Elm$Processing$visitExpression, visitor, context, expression));
          }
        }());
      });
      var $stil4m$elm_syntax$Elm$Processing$visitLetDeclarations = F3(function(visitor, context, declarations) {
        return A2($elm$core$List$map, A2($stil4m$elm_syntax$Elm$Processing$visitLetDeclaration, visitor, context), declarations);
      });
      var $stil4m$elm_syntax$Elm$Processing$visitDeclaration = F3(function(visitor, context, _v0) {
        var range = _v0.a;
        var declaration = _v0.b;
        return A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, range, function() {
          if (declaration.$ === "FunctionDeclaration") {
            var _function = declaration.a;
            return $stil4m$elm_syntax$Elm$Syntax$Declaration$FunctionDeclaration(A3($stil4m$elm_syntax$Elm$Processing$visitFunctionDecl, visitor, context, _function));
          } else {
            return declaration;
          }
        }());
      });
      var $stil4m$elm_syntax$Elm$Processing$visitDeclarations = F3(function(visitor, context, declarations) {
        return A2($elm$core$List$map, A2($stil4m$elm_syntax$Elm$Processing$visitDeclaration, visitor, context), declarations);
      });
      var $stil4m$elm_syntax$Elm$Processing$visit = F3(function(visitor, context, file) {
        var newDeclarations = A3($stil4m$elm_syntax$Elm$Processing$visitDeclarations, visitor, context, file.declarations);
        return _Utils_update(file, {
          declarations: newDeclarations
        });
      });
      var $stil4m$elm_syntax$Elm$Processing$process = F2(function(processContext, rawFile) {
        var file = rawFile.a;
        var table = A2($stil4m$elm_syntax$Elm$Processing$tableForFile, rawFile, processContext);
        var operatorFixed = A3($stil4m$elm_syntax$Elm$Processing$visit, $elm$core$Maybe$Just(F3(function(context, inner, expression) {
          return inner(function() {
            if (expression.b.$ === "Application") {
              var r = expression.a;
              var args = expression.b.a;
              return A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, r, A2($stil4m$elm_syntax$Elm$Processing$fixApplication, context, args));
            } else {
              return expression;
            }
          }());
        })), table, file);
        var documentationFixed = $stil4m$elm_syntax$Elm$Processing$Documentation$postProcess(operatorFixed);
        return documentationFixed;
      });
      var $the_sett$elm_syntax_dsl$Elm$DSLParser$parse = function(val) {
        return A2($elm$core$Result$map, $the_sett$elm_syntax_dsl$Elm$DSLParser$parseFileComments, A2($elm$core$Result$map, $stil4m$elm_syntax$Elm$Processing$process($stil4m$elm_syntax$Elm$Processing$init), $stil4m$elm_syntax$Elm$Parser$parse(val)));
      };
      var $author$project$Derive$template = `
module Template exposing (..)

decodeChar : Json.Decode.Decoder Char 
decodeChar = Json.Decode.andThen (\\str -> case String.toList str of
    [c] -> Json.Decode.succeed c
    _ -> Json.Decode.fail "decodeChar: too many charactors for Char type") Json.Decode.string 

decodeResult : Json.Decode.Decoder err -> Json.Decode.Decoder ok -> Json.Decode.Decoder (Result err ok)
decodeResult errDecoder okDecoder =
    Json.Decode.andThen (\\tag -> case tag of 
        "Err" -> Json.Decode.map Err (Json.Decode.field "a" errDecoder)
        "Ok" -> Json.Decode.map Ok (Json.Decode.field "a" okDecoder)
        _ -> Json.Decode.fail ("decodeResult: Invalid tag name: " ++ tag)) (Json.Decode.field "tag" Json.Decode.string)

encodeMaybe : (a -> Json.Encode.Value) -> Maybe a -> Json.Encode.Value
encodeMaybe f encodeMaybeValue = case encodeMaybeValue of 
    Nothing -> Json.Encode.null
    Just justValue -> f justValue

encodeChar : Char -> Json.Encode.Value
encodeChar value = Json.Encode.string (String.fromChar value)

encodeResult : (err -> Json.Encode.Value) -> (ok -> Json.Encode.Value) -> Result err ok -> Json.Encode.Value
encodeResult errEncoder okEncoder value = case value of 
    Err err -> Json.Encode.object [("tag", Json.Encode.string "Err"), ("a", errEncoder err)]
    Ok ok -> Json.Encode.object [("tag", Json.Encode.string "Ok"), ("a", okEncoder ok)]

randomInt : Random.Generator Int
randomInt = Random.int 0 100

randomString : Random.Generator String
randomString = Random.uniform "Alpha" ["Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf", "Hotel", "India", "Juliet ", "Kilo", "Lima", "Mike", "Novenber", "Oscar", "Papa", "Quebec", "Romeo", "Sierra", "Tango", "Uniform", "Victor", "Whiskey", "X-ray", "Yankee", "Zulu"]

randomChar : Random.Generator Char
randomChar = Random.uniform 'a' (String.toList "bcdefghijklmnopqlstuvwxyz")

randomFloat : Random.Generator Float
randomFloat = Random.float 0 1

randomList : Random.Generator a -> Random.Generator (List a)
randomList gen = Random.andThen (\\n -> Random.list (3 + n) gen) (Random.int 0 7)

randomArray : Random.Generator a -> Random.Generator (Array.Array a)
randomArray gen = Random.map Array.fromList (randomList gen)

randomSet : Random.Generator comparable -> Random.Generator (Set.Set comparable)
randomSet gen = Random.map Set.fromList (randomList gen)

randomDict : Random.Generator a -> Random.Generator (Dict.Dict String a)
randomDict gen = Random.map Dict.fromList (randomList (Random.map2 (\\k v -> (k, v)) randomString gen))

viewList : (a -> Html.Html msg) -> List a -> Html.Html msg
viewList f xs = Html.table []
    [ Html.caption [] [Html.text "List"]
    , Html.tbody [] (List.indexedMap (\\i x -> Html.tr [] [ Html.td [] [Html.text <| String.fromInt i], Html.td [] [f x]   ]) xs)
    ]

viewArray : (a -> Html.Html msg) -> Array.Array a -> Html.Html msg
viewArray f xs = viewList f (Array.toList xs)

viewSet : (a -> Html.Html msg) -> Set.Set a -> Html.Html msg
viewSet f xs = viewList f (Set.toList xs)

viewMaybe : (a -> Html.Html msg) -> Maybe a -> Html.Html msg
viewMaybe f m = case m of
    Nothing -> Html.div [Html.Attributes.class "elm-derive-maybe"] [Html.text "null"]
    Just a -> Html.div [Html.Attributes.class "elm-derive-maybe"] [f a]

viewResult : (err -> Html.Html msg) -> (ok -> Html.Html msg) -> Result err ok -> Html.Html msg 
viewResult errView okView value = case value of 
    Err err -> Html.div [Html.Attributes.class "elm-derive-result"] [errView err] 
    Ok ok -> Html.div [Html.Attributes.class "elm-derive-result"] [okView ok]

viewBool : Bool -> Html.Html msg
viewBool value = Html.div [Html.Attributes.class "elm-derive-primitive"] [Html.text <| if value then "True" else "False"]

viewInt : Int -> Html.Html msg
viewInt value = Html.div [Html.Attributes.class "elm-derive-primitive"] [Html.text <| String.fromInt value]

viewString : String -> Html.Html msg
viewString value = Html.div [Html.Attributes.class "elm-derive-primitive"] [Html.text value]

viewChar : Char -> Html.Html msg
viewChar value = Html.div [Html.Attributes.class "elm-derive-primitive"] [Html.text <| String.fromChar value]

viewFloat : Float -> Html.Html msg
viewFloat value = Html.div [Html.Attributes.class "elm-derive-primitive"] [Html.text <| String.fromFloat value]

viewDict : (a -> Html.Html msg) -> Dict.Dict String a -> Html.Html msg
viewDict f dict = Html.table []
    [ Html.caption [] [Html.text "Dict"]
    , Html.tbody [] (List.map (\\(k, v) -> Html.tr [] [Html.td [] [Html.text k], Html.td [] [f v]]) (Dict.toList dict))
    ]

viewTuple : (a -> Html.Html msg) -> (b -> Html.Html msg) -> (a, b) -> Html.Html msg
viewTuple fa fb (a, b) = Html.table []
    [ Html.caption [] [Html.text "Dict"]
    , Html.tbody [] 
        [ Html.tr [] 
            [ Html.td [] [Html.text "fst"] 
            , Html.td [] [fa a]    
            ]
        , Html.tr [] 
            [ Html.td [] [Html.text "snd"] 
            , Html.td [] [fb b]    
            ]
        ]
    ]

compareList : (a -> a -> Order) -> List a -> List a -> Order
compareList f lhs rhs 
    = case (lhs, rhs) of 
        ([], []) -> EQ
        (x :: xs, []) -> GT    
        ([], y :: ys) -> LT
        (x :: xs, y :: ys) -> 
            case f x y of 
                EQ -> compareList f xs ys
                ret -> ret

compareMaybe : (a -> a -> Order) -> Maybe a -> Maybe a -> Order
compareMaybe f lhs rhs 
    = case (lhs, rhs) of 
        (Nothing, Nothing) -> EQ
        (Nothing, Just _) -> GT    
        (Just _, Nothing) -> LT
        (Just x, Just y) -> f x y


compareBool : Bool -> Bool -> Order
compareBool lhs rhs 
    = case (lhs, rhs) of 
        (False, False) -> EQ
        (False, True) -> LT
        (True, False) -> GT
        (True, True) -> EQ

compareSet : (comparable -> comparable -> Order) -> Set.Set comparable -> Set.Set comparable -> Order
compareSet f lhs rhs 
    = compareList f (Set.toList lhs) (Set.toList rhs)

compareArray : (a -> a -> Order) -> Array.Array a -> Array.Array a -> Order
compareArray f lhs rhs 
    = compareList f (Array.toList lhs) (Array.toList rhs)

compareDict : (a -> a -> Order) -> Dict.Dict comparable a -> Dict.Dict comparable a -> Order
compareDict f lhs rhs 
    = compareList (\\ls rs -> compareTuple compare f ls rs) (Dict.toList lhs) (Dict.toList rhs)

compareTuple : (a -> a -> Order) -> (b -> b -> Order) -> (a, b) -> (a, b) -> Order
compareTuple f g  (la, lb) (ra, rb) 
    = case f la ra of 
        EQ -> g lb rb 
        ord -> ord

compareResult : (err -> err -> Order) -> (ok -> ok -> Order) -> Result err ok -> Result err ok -> Order 
compareResult f g lhs rhs 
    = case (lhs, rhs) of 
        (Err l, Err r) -> f l r
        (Err _, _) -> LT
        (_, Err _) -> GT
        (Ok l, Ok r) -> g l r

`;
      var $author$project$Derive$generate = F2(function(_v0, file) {
        var encode = _v0.encode;
        var decode = _v0.decode;
        var random = _v0.random;
        var html = _v0.html;
        var ord = _v0.ord;
        var _v1 = $the_sett$elm_syntax_dsl$Elm$DSLParser$parse($author$project$Derive$template);
        if (_v1.$ === "Err") {
          return $elm$core$Result$Err(_List_fromArray(["template parse error"]));
        } else {
          var templateFile = _v1.a;
          var on = F2(function(flag, gen) {
            return flag ? $elm$core$Maybe$Just(gen) : $elm$core$Maybe$Nothing;
          });
          var generated = A2($elm$core$List$filterMap, $elm$core$Basics$identity, _List_fromArray([A2(on, encode, $author$project$Derive$Encoder$generateEncoder), A2(on, decode, $author$project$Derive$Decoder$generateDecoder), A2(on, random, $author$project$Derive$Random$generateRandom), A2(on, ord, $author$project$Derive$Ord$generate), A2(on, html, $author$project$Derive$Html$generateView)]));
          return A2($elm$core$Result$map, function(results) {
            return A4($the_sett$elm_syntax_dsl$Elm$CodeGen$file, A2($the_sett$elm_syntax_dsl$Elm$CodeGen$normalModule, $author$project$Derive$Util$derivedModuleName(file), _List_Nil), _List_fromArray([A3($the_sett$elm_syntax_dsl$Elm$CodeGen$importStmt, _List_fromArray(["Dict"]), $elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing), A3($the_sett$elm_syntax_dsl$Elm$CodeGen$importStmt, _List_fromArray(["Html"]), $elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing), A3($the_sett$elm_syntax_dsl$Elm$CodeGen$importStmt, _List_fromArray(["Html", "Attributes"]), $elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing), A3($the_sett$elm_syntax_dsl$Elm$CodeGen$importStmt, _List_fromArray(["Json", "Encode"]), $elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing), A3($the_sett$elm_syntax_dsl$Elm$CodeGen$importStmt, _List_fromArray(["Json", "Decode"]), $elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing), A3($the_sett$elm_syntax_dsl$Elm$CodeGen$importStmt, _List_fromArray(["Json", "Decode", "Extra"]), $elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing), A3($the_sett$elm_syntax_dsl$Elm$CodeGen$importStmt, _List_fromArray(["Random"]), $elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing), A3($the_sett$elm_syntax_dsl$Elm$CodeGen$importStmt, _List_fromArray(["Random", "Extra"]), $elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing), A3($the_sett$elm_syntax_dsl$Elm$CodeGen$importStmt, _List_fromArray(["Array"]), $elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing), A3($the_sett$elm_syntax_dsl$Elm$CodeGen$importStmt, _List_fromArray(["Set"]), $elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing), A3($the_sett$elm_syntax_dsl$Elm$CodeGen$importStmt, $author$project$Elm$Syntax$Module$moduleName($author$project$Derive$Util$nodeValue(file.moduleDefinition)), $elm$core$Maybe$Nothing, $elm$core$Maybe$Just($the_sett$elm_syntax_dsl$Elm$CodeGen$exposeAll))]), $elm$core$List$concat(_List_fromArray([A2($elm$core$List$concatMap, $elm$core$Basics$identity, results), templateFile.declarations])), $elm$core$Maybe$Nothing);
          }, A2($author$project$Derive$Util$concatResults, function(gen) {
            return gen(file);
          }, generated));
        }
      });
      var $author$project$Elm$Processing$ProcessContext = function(a) {
        return {
          $: "ProcessContext",
          a
        };
      };
      var $author$project$Elm$Processing$init = $author$project$Elm$Processing$ProcessContext($elm$core$Dict$empty);
      var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
      var $author$project$Elm$Parser$State$State = function(a) {
        return {
          $: "State",
          a
        };
      };
      var $author$project$Elm$Parser$State$emptyState = $author$project$Elm$Parser$State$State({
        comments: _List_Nil,
        indents: _List_Nil
      });
      var $author$project$Elm$Syntax$File$File = F4(function(moduleDefinition, imports, declarations, comments) {
        return {
          comments,
          declarations,
          imports,
          moduleDefinition
        };
      });
      var $author$project$Combine$Parser = function(a) {
        return {
          $: "Parser",
          a
        };
      };
      var $author$project$Combine$andMap = F2(function(_v0, _v1) {
        var rp = _v0.a;
        var lp = _v1.a;
        return $author$project$Combine$Parser(function(state) {
          return A2($elm$parser$Parser$andThen, function(_v2) {
            var newState = _v2.a;
            var a = _v2.b;
            return A2($elm$parser$Parser$map, $elm$core$Tuple$mapSecond(a), rp(newState));
          }, lp(state));
        });
      });
      var $author$project$Elm$Parser$State$getComments = function(_v0) {
        var s = _v0.a;
        return s.comments;
      };
      var $author$project$Combine$succeed = function(res) {
        return $author$project$Combine$Parser(function(state) {
          return $elm$parser$Parser$succeed(_Utils_Tuple2(state, res));
        });
      };
      var $author$project$Combine$withState = function(f) {
        return $author$project$Combine$Parser(function(state) {
          return function(_v0) {
            var p = _v0.a;
            return p(state);
          }(f(state));
        });
      };
      var $author$project$Elm$Parser$File$collectComments = $author$project$Combine$withState(A2($elm$core$Basics$composeR, $author$project$Elm$Parser$State$getComments, $author$project$Combine$succeed));
      var $author$project$Elm$Syntax$Declaration$AliasDeclaration = function(a) {
        return {
          $: "AliasDeclaration",
          a
        };
      };
      var $author$project$Elm$Syntax$Declaration$CustomTypeDeclaration = function(a) {
        return {
          $: "CustomTypeDeclaration",
          a
        };
      };
      var $author$project$Elm$Syntax$Node$Node = F2(function(a, b) {
        return {
          $: "Node",
          a,
          b
        };
      });
      var $author$project$Combine$choice = function(xs) {
        return $author$project$Combine$Parser(function(state) {
          return $elm$parser$Parser$oneOf(A2($elm$core$List$map, function(_v0) {
            var x = _v0.a;
            return x(state);
          }, xs));
        });
      };
      var $author$project$Elm$Syntax$Declaration$Destructuring = F2(function(a, b) {
        return {
          $: "Destructuring",
          a,
          b
        };
      });
      var $author$project$Elm$Syntax$Range$Range = F2(function(start, end) {
        return {
          end,
          start
        };
      });
      var $author$project$Elm$Syntax$Range$emptyRange = {
        end: {
          column: 0,
          row: 0
        },
        start: {
          column: 0,
          row: 0
        }
      };
      var $author$project$Elm$Syntax$Range$compareLocations = F2(function(left, right) {
        return _Utils_cmp(left.row, right.row) < 0 ? $elm$core$Basics$LT : _Utils_cmp(right.row, left.row) < 0 ? $elm$core$Basics$GT : A2($elm$core$Basics$compare, left.column, right.column);
      });
      var $author$project$Elm$Syntax$Range$sortLocations = $elm$core$List$sortWith($author$project$Elm$Syntax$Range$compareLocations);
      var $author$project$Elm$Syntax$Range$combine = function(ranges) {
        var starts = $author$project$Elm$Syntax$Range$sortLocations(A2($elm$core$List$map, function($) {
          return $.start;
        }, ranges));
        var ends = $elm$core$List$reverse($author$project$Elm$Syntax$Range$sortLocations(A2($elm$core$List$map, function($) {
          return $.end;
        }, ranges)));
        return A2($elm$core$Maybe$withDefault, $author$project$Elm$Syntax$Range$emptyRange, A3($elm$core$Maybe$map2, $author$project$Elm$Syntax$Range$Range, $elm$core$List$head(starts), $elm$core$List$head(ends)));
      };
      var $author$project$Elm$Syntax$Node$combine = F3(function(f, a, b) {
        var r1 = a.a;
        var r2 = b.a;
        return A2($author$project$Elm$Syntax$Node$Node, $author$project$Elm$Syntax$Range$combine(_List_fromArray([r1, r2])), A2(f, a, b));
      });
      var $author$project$Elm$Syntax$Expression$Application = function(a) {
        return {
          $: "Application",
          a
        };
      };
      var $author$project$Elm$Syntax$Expression$CaseBlock = F2(function(expression, cases) {
        return {
          cases,
          expression
        };
      });
      var $author$project$Elm$Syntax$Expression$CaseExpression = function(a) {
        return {
          $: "CaseExpression",
          a
        };
      };
      var $author$project$Combine$Done = function(a) {
        return {
          $: "Done",
          a
        };
      };
      var $author$project$Elm$Syntax$Expression$Function = F3(function(documentation, signature, declaration) {
        return {
          declaration,
          documentation,
          signature
        };
      });
      var $author$project$Elm$Syntax$Expression$FunctionImplementation = F3(function(name, _arguments, expression) {
        return {
          _arguments,
          expression,
          name
        };
      });
      var $author$project$Elm$Syntax$Expression$IfBlock = F3(function(a, b, c) {
        return {
          $: "IfBlock",
          a,
          b,
          c
        };
      });
      var $author$project$Elm$Syntax$Expression$Lambda = F2(function(args, expression) {
        return {
          args,
          expression
        };
      });
      var $author$project$Elm$Syntax$Expression$LambdaExpression = function(a) {
        return {
          $: "LambdaExpression",
          a
        };
      };
      var $author$project$Elm$Syntax$Expression$LetBlock = F2(function(declarations, expression) {
        return {
          declarations,
          expression
        };
      });
      var $author$project$Elm$Syntax$Expression$LetDestructuring = F2(function(a, b) {
        return {
          $: "LetDestructuring",
          a,
          b
        };
      });
      var $author$project$Elm$Syntax$Expression$LetExpression = function(a) {
        return {
          $: "LetExpression",
          a
        };
      };
      var $author$project$Elm$Syntax$Expression$LetFunction = function(a) {
        return {
          $: "LetFunction",
          a
        };
      };
      var $author$project$Elm$Syntax$Expression$ListExpr = function(a) {
        return {
          $: "ListExpr",
          a
        };
      };
      var $author$project$Combine$Loop = function(a) {
        return {
          $: "Loop",
          a
        };
      };
      var $author$project$Elm$Syntax$Expression$Negation = function(a) {
        return {
          $: "Negation",
          a
        };
      };
      var $author$project$Elm$Syntax$Expression$Operator = function(a) {
        return {
          $: "Operator",
          a
        };
      };
      var $author$project$Elm$Syntax$Expression$ParenthesizedExpression = function(a) {
        return {
          $: "ParenthesizedExpression",
          a
        };
      };
      var $author$project$Elm$Syntax$Expression$PrefixOperator = function(a) {
        return {
          $: "PrefixOperator",
          a
        };
      };
      var $author$project$Elm$Syntax$Expression$RecordExpr = function(a) {
        return {
          $: "RecordExpr",
          a
        };
      };
      var $author$project$Elm$Syntax$Expression$RecordUpdateExpression = F2(function(a, b) {
        return {
          $: "RecordUpdateExpression",
          a,
          b
        };
      });
      var $author$project$Elm$Syntax$Expression$TupledExpression = function(a) {
        return {
          $: "TupledExpression",
          a
        };
      };
      var $author$project$Elm$Syntax$Expression$UnitExpr = {
        $: "UnitExpr"
      };
      var $author$project$Combine$andThen = F2(function(f, _v0) {
        var p = _v0.a;
        return $author$project$Combine$Parser(function(state) {
          return A2($elm$parser$Parser$andThen, function(_v1) {
            var s = _v1.a;
            var a = _v1.b;
            return function(_v2) {
              var x = _v2.a;
              return x(s);
            }(f(a));
          }, p(state));
        });
      });
      var $author$project$Combine$backtrackable = function(_v0) {
        var p = _v0.a;
        return $author$project$Combine$Parser(function(state) {
          return $elm$parser$Parser$backtrackable(p(state));
        });
      };
      var $author$project$Combine$string = function(s) {
        return $author$project$Combine$Parser(function(state) {
          return A2($elm$parser$Parser$map, function(x) {
            return _Utils_Tuple2(state, x);
          }, $elm$parser$Parser$getChompedString($elm$parser$Parser$token(s)));
        });
      };
      var $author$project$Elm$Parser$Tokens$caseToken = $author$project$Combine$string("case");
      var $author$project$Elm$Syntax$Expression$CharLiteral = function(a) {
        return {
          $: "CharLiteral",
          a
        };
      };
      var $author$project$Combine$fail = function(m) {
        return $author$project$Combine$Parser(function(state) {
          return A2($elm$parser$Parser$map, function(x) {
            return _Utils_Tuple2(state, x);
          }, $elm$parser$Parser$problem(m));
        });
      };
      var $author$project$Combine$fromCore = function(p) {
        return $author$project$Combine$Parser(function(state) {
          return A2($elm$parser$Parser$keeper, $elm$parser$Parser$succeed(function(v) {
            return _Utils_Tuple2(state, v);
          }), p);
        });
      };
      var $author$project$Combine$Char$satisfy = function(pred) {
        return $author$project$Combine$fromCore(A2($elm$parser$Parser$andThen, function(s) {
          var _v0 = $elm$core$String$toList(s);
          if (!_v0.b) {
            return $elm$parser$Parser$succeed($elm$core$Maybe$Nothing);
          } else {
            var c = _v0.a;
            return $elm$parser$Parser$succeed($elm$core$Maybe$Just(c));
          }
        }, $elm$parser$Parser$getChompedString($elm$parser$Parser$chompIf(pred))));
      };
      var $author$project$Combine$Char$anyChar = A2($author$project$Combine$andThen, A2($elm$core$Basics$composeR, $elm$core$Maybe$map($author$project$Combine$succeed), $elm$core$Maybe$withDefault($author$project$Combine$fail("expected any character"))), $author$project$Combine$Char$satisfy($elm$core$Basics$always(true)));
      var $author$project$Combine$Char$char = function(c) {
        return A2($author$project$Combine$andThen, A2($elm$core$Basics$composeR, $elm$core$Maybe$map($author$project$Combine$succeed), $elm$core$Maybe$withDefault($author$project$Combine$fail("expected '" + ($elm$core$String$fromList(_List_fromArray([c])) + "'")))), $author$project$Combine$Char$satisfy($elm$core$Basics$eq(c)));
      };
      var $author$project$Combine$map = F2(function(f, _v0) {
        var p = _v0.a;
        return $author$project$Combine$Parser(function(state) {
          return A2($elm$parser$Parser$map, function(_v1) {
            var s = _v1.a;
            var a = _v1.b;
            return _Utils_Tuple2(s, f(a));
          }, p(state));
        });
      });
      var $author$project$Combine$continueWith = F2(function(target, dropped) {
        return A2($author$project$Combine$andMap, target, A2($author$project$Combine$map, F2(function(b, a) {
          return A2($elm$core$Basics$always, a, b);
        }), dropped));
      });
      var $author$project$Combine$ignore = F2(function(dropped, target) {
        return A2($author$project$Combine$andMap, dropped, A2($author$project$Combine$map, $elm$core$Basics$always, target));
      });
      var $author$project$Combine$or = F2(function(_v0, _v1) {
        var lp = _v0.a;
        var rp = _v1.a;
        return $author$project$Combine$Parser(function(state) {
          return $elm$parser$Parser$oneOf(_List_fromArray([lp(state), rp(state)]));
        });
      });
      var $author$project$Elm$Parser$Tokens$escapedCharValue = $elm$parser$Parser$oneOf(_List_fromArray([A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed(_Utils_chr("'")), $elm$parser$Parser$symbol("'")), A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed(_Utils_chr('"')), $elm$parser$Parser$symbol('"')), A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed(_Utils_chr("\n")), $elm$parser$Parser$symbol("n")), A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed(_Utils_chr("	")), $elm$parser$Parser$symbol("t")), A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed(_Utils_chr("\r")), $elm$parser$Parser$symbol("r")), A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed(_Utils_chr("\\")), $elm$parser$Parser$symbol("\\")), A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed(A2($elm$core$Basics$composeR, $elm$core$String$toLower, A2($elm$core$Basics$composeR, $rtfeldman$elm_hex$Hex$fromString, A2($elm$core$Basics$composeR, $elm$core$Result$withDefault(0), $elm$core$Char$fromCode)))), $elm$parser$Parser$symbol("u")), $elm$parser$Parser$symbol("{")), A2($elm$parser$Parser$ignorer, $elm$parser$Parser$getChompedString($elm$parser$Parser$chompWhile(function(c) {
        return A2($elm$core$String$any, $elm$core$Basics$eq(c), "0123456789ABCDEFabcdef");
      })), $elm$parser$Parser$symbol("}")))]));
      var $author$project$Elm$Parser$Tokens$quotedSingleQuote = $author$project$Combine$fromCore(A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed(A2($elm$core$Basics$composeR, $elm$core$String$toList, A2($elm$core$Basics$composeR, $elm$core$List$head, $elm$core$Maybe$withDefault(_Utils_chr(" "))))), $elm$parser$Parser$symbol("'")), A2($elm$parser$Parser$ignorer, $elm$parser$Parser$oneOf(_List_fromArray([A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed(A2($elm$core$Basics$composeR, $elm$core$List$singleton, $elm$core$String$fromList)), $elm$parser$Parser$symbol("\\")), $author$project$Elm$Parser$Tokens$escapedCharValue), $elm$parser$Parser$getChompedString($elm$parser$Parser$chompIf($elm$core$Basics$always(true)))])), $elm$parser$Parser$symbol("'"))));
      var $author$project$Elm$Parser$Tokens$characterLiteral = A2($author$project$Combine$or, $author$project$Elm$Parser$Tokens$quotedSingleQuote, A2($author$project$Combine$ignore, $author$project$Combine$Char$char(_Utils_chr("'")), A2($author$project$Combine$continueWith, $author$project$Combine$Char$anyChar, $author$project$Combine$Char$char(_Utils_chr("'")))));
      var $author$project$Elm$Parser$Node$asPointerLocation = function(_v0) {
        var line = _v0.line;
        var column = _v0.column;
        return {
          column,
          row: line
        };
      };
      var $author$project$Combine$app = function(_v0) {
        var inner = _v0.a;
        return inner;
      };
      var $author$project$Combine$withLocation = function(f) {
        return $author$project$Combine$Parser(function(state) {
          return A2($elm$parser$Parser$andThen, function(loc) {
            return A2($author$project$Combine$app, f(loc), state);
          }, A2($elm$parser$Parser$map, function(_v0) {
            var row = _v0.a;
            var col = _v0.b;
            return {
              column: col,
              line: row
            };
          }, $elm$parser$Parser$getPosition));
        });
      };
      var $author$project$Elm$Parser$Node$parser = function(p) {
        return $author$project$Combine$withLocation(function(start) {
          return A2($author$project$Combine$andMap, $author$project$Combine$withLocation(function(end) {
            return $author$project$Combine$succeed({
              end: $author$project$Elm$Parser$Node$asPointerLocation(end),
              start: $author$project$Elm$Parser$Node$asPointerLocation(start)
            });
          }), A2($author$project$Combine$andMap, p, $author$project$Combine$succeed(F2(function(v, r) {
            return A2($author$project$Elm$Syntax$Node$Node, r, v);
          }))));
        });
      };
      var $author$project$Elm$Parser$Declarations$charLiteralExpression = $author$project$Elm$Parser$Node$parser(A2($author$project$Combine$map, $author$project$Elm$Syntax$Expression$CharLiteral, $author$project$Elm$Parser$Tokens$characterLiteral));
      var $author$project$Elm$Parser$Tokens$elseToken = $author$project$Combine$string("else");
      var $author$project$Elm$Parser$State$currentIndent = function(_v0) {
        var indents = _v0.a.indents;
        return A2($elm$core$Maybe$withDefault, 0, $elm$core$List$head(indents));
      };
      var $author$project$Elm$Parser$State$expectedColumn = A2($elm$core$Basics$composeR, $author$project$Elm$Parser$State$currentIndent, $elm$core$Basics$add(1));
      var $author$project$Elm$Syntax$Pattern$AllPattern = {
        $: "AllPattern"
      };
      var $author$project$Elm$Syntax$Pattern$AsPattern = F2(function(a, b) {
        return {
          $: "AsPattern",
          a,
          b
        };
      });
      var $author$project$Elm$Syntax$Pattern$CharPattern = function(a) {
        return {
          $: "CharPattern",
          a
        };
      };
      var $author$project$Elm$Syntax$Pattern$ListPattern = function(a) {
        return {
          $: "ListPattern",
          a
        };
      };
      var $author$project$Elm$Syntax$Pattern$NamedPattern = F2(function(a, b) {
        return {
          $: "NamedPattern",
          a,
          b
        };
      });
      var $author$project$Elm$Syntax$Pattern$ParenthesizedPattern = function(a) {
        return {
          $: "ParenthesizedPattern",
          a
        };
      };
      var $author$project$Elm$Syntax$Pattern$QualifiedNameRef = F2(function(moduleName, name) {
        return {
          moduleName,
          name
        };
      });
      var $author$project$Elm$Syntax$Pattern$StringPattern = function(a) {
        return {
          $: "StringPattern",
          a
        };
      };
      var $author$project$Elm$Syntax$Pattern$TuplePattern = function(a) {
        return {
          $: "TuplePattern",
          a
        };
      };
      var $author$project$Elm$Syntax$Pattern$UnConsPattern = F2(function(a, b) {
        return {
          $: "UnConsPattern",
          a,
          b
        };
      });
      var $author$project$Elm$Syntax$Pattern$UnitPattern = {
        $: "UnitPattern"
      };
      var $author$project$Combine$between = F3(function(lp, rp, p) {
        return A2($author$project$Combine$ignore, rp, A2($author$project$Combine$continueWith, p, lp));
      });
      var $author$project$Elm$Parser$Tokens$reservedList = _List_fromArray(["module", "exposing", "import", "as", "if", "then", "else", "let", "in", "case", "of", "port", "infixr", "infixl", "type", "where"]);
      var $author$project$Elm$Parser$Tokens$functionName = $author$project$Combine$fromCore($elm$parser$Parser$variable({
        inner: function(c) {
          return $elm$core$Char$isAlphaNum(c) || _Utils_eq(c, _Utils_chr("_"));
        },
        reserved: $elm$core$Set$fromList($author$project$Elm$Parser$Tokens$reservedList),
        start: $elm$core$Char$isLower
      }));
      var $author$project$Combine$lazy = function(t) {
        return $author$project$Combine$Parser(function(state) {
          return $elm$parser$Parser$lazy(function(_v0) {
            return function(_v1) {
              var t_ = _v1.a;
              return t_(state);
            }(t(_Utils_Tuple0));
          });
        });
      };
      var $author$project$Elm$Parser$Comments$multilineCommentInner = $author$project$Combine$fromCore($elm$parser$Parser$getChompedString(A3($elm$parser$Parser$multiComment, "{-", "-}", $elm$parser$Parser$Nestable)));
      var $author$project$Elm$Parser$State$addComment = F2(function(pair, _v0) {
        var s = _v0.a;
        return $author$project$Elm$Parser$State$State(_Utils_update(s, {
          comments: A2($elm$core$List$cons, pair, s.comments)
        }));
      });
      var $author$project$Combine$modifyState = function(f) {
        return $author$project$Combine$Parser(function(state) {
          return $elm$parser$Parser$succeed(_Utils_Tuple2(f(state), _Utils_Tuple0));
        });
      };
      var $author$project$Elm$Parser$Comments$addCommentToState = function(p) {
        return A2($author$project$Combine$andThen, function(pair) {
          return A2($author$project$Combine$continueWith, $author$project$Combine$succeed(_Utils_Tuple0), $author$project$Combine$modifyState($author$project$Elm$Parser$State$addComment(pair)));
        }, p);
      };
      var $author$project$Elm$Parser$Comments$parseComment = function(commentParser) {
        return $author$project$Elm$Parser$Comments$addCommentToState($author$project$Elm$Parser$Node$parser(commentParser));
      };
      var $author$project$Elm$Parser$Comments$multilineComment = $author$project$Combine$lazy(function(_v0) {
        return $author$project$Elm$Parser$Comments$parseComment($author$project$Elm$Parser$Comments$multilineCommentInner);
      });
      var $author$project$Elm$Parser$Whitespace$untilNewlineToken = $author$project$Combine$fromCore($elm$parser$Parser$getChompedString($elm$parser$Parser$chompWhile(function(c) {
        return !_Utils_eq(c, _Utils_chr("\r")) && !_Utils_eq(c, _Utils_chr("\n"));
      })));
      var $author$project$Elm$Parser$Comments$singleLineComment = $author$project$Elm$Parser$Comments$parseComment(A2($author$project$Combine$andMap, $author$project$Elm$Parser$Whitespace$untilNewlineToken, A2($author$project$Combine$andMap, $author$project$Combine$string("--"), $author$project$Combine$succeed($elm$core$Basics$append))));
      var $author$project$Elm$Parser$Layout$anyComment = A2($author$project$Combine$or, $author$project$Elm$Parser$Comments$singleLineComment, $author$project$Elm$Parser$Comments$multilineComment);
      var $author$project$Combine$many = function(p) {
        var helper = function(_v2) {
          var oldState = _v2.a;
          var items = _v2.b;
          return $elm$parser$Parser$oneOf(_List_fromArray([A2($elm$parser$Parser$keeper, $elm$parser$Parser$succeed(function(_v0) {
            var newState = _v0.a;
            var item = _v0.b;
            return $elm$parser$Parser$Loop(_Utils_Tuple2(newState, A2($elm$core$List$cons, item, items)));
          }), A2($author$project$Combine$app, p, oldState)), A2($elm$parser$Parser$map, function(_v1) {
            return $elm$parser$Parser$Done(_Utils_Tuple2(oldState, $elm$core$List$reverse(items)));
          }, $elm$parser$Parser$succeed(_Utils_Tuple0))]));
        };
        return $author$project$Combine$Parser(function(state) {
          return A2($elm$parser$Parser$loop, _Utils_Tuple2(state, _List_Nil), helper);
        });
      };
      var $author$project$Combine$many1 = function(p) {
        return A2($author$project$Combine$andMap, $author$project$Combine$many(p), A2($author$project$Combine$andMap, p, $author$project$Combine$succeed($elm$core$List$cons)));
      };
      var $author$project$Elm$Parser$Whitespace$many1Spaces = $author$project$Combine$fromCore(A2($elm$parser$Parser$ignorer, $elm$parser$Parser$token(" "), $elm$parser$Parser$chompWhile(function(c) {
        return _Utils_eq(c, _Utils_chr(" "));
      })));
      var $author$project$Elm$Parser$Whitespace$realNewLine = $author$project$Combine$fromCore($elm$parser$Parser$getChompedString(A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed(_Utils_Tuple0), $elm$parser$Parser$oneOf(_List_fromArray([$elm$parser$Parser$chompIf($elm$core$Basics$eq(_Utils_chr("\r"))), $elm$parser$Parser$succeed(_Utils_Tuple0)]))), $elm$parser$Parser$symbol("\n"))));
      var $author$project$Elm$Parser$Layout$verifyIndent = function(f) {
        return $author$project$Combine$withState(function(s) {
          return $author$project$Combine$withLocation(function(l) {
            return A2(f, $author$project$Elm$Parser$State$expectedColumn(s), l.column) ? $author$project$Combine$succeed(_Utils_Tuple0) : $author$project$Combine$fail("Expected higher indent than " + $elm$core$String$fromInt(l.column));
          });
        });
      };
      var $author$project$Elm$Parser$Layout$layout = A2($author$project$Combine$continueWith, $author$project$Elm$Parser$Layout$verifyIndent(F2(function(stateIndent, current) {
        return _Utils_cmp(stateIndent, current) < 0;
      })), $author$project$Combine$many1($author$project$Combine$choice(_List_fromArray([$author$project$Elm$Parser$Layout$anyComment, A2($author$project$Combine$continueWith, $author$project$Combine$choice(_List_fromArray([$author$project$Elm$Parser$Whitespace$many1Spaces, $author$project$Elm$Parser$Layout$anyComment])), $author$project$Combine$many1($author$project$Elm$Parser$Whitespace$realNewLine)), $author$project$Elm$Parser$Whitespace$many1Spaces]))));
      var $author$project$Combine$maybe = function(_v0) {
        var p = _v0.a;
        return $author$project$Combine$Parser(function(state) {
          return $elm$parser$Parser$oneOf(_List_fromArray([A2($elm$parser$Parser$map, function(_v1) {
            var c = _v1.a;
            var v = _v1.b;
            return _Utils_Tuple2(c, $elm$core$Maybe$Just(v));
          }, p(state)), $elm$parser$Parser$succeed(_Utils_Tuple2(state, $elm$core$Maybe$Nothing))]));
        });
      };
      var $author$project$Elm$Parser$Layout$maybeAroundBothSides = function(x) {
        return A2($author$project$Combine$ignore, $author$project$Combine$maybe($author$project$Elm$Parser$Layout$layout), A2($author$project$Combine$continueWith, x, $author$project$Combine$maybe($author$project$Elm$Parser$Layout$layout)));
      };
      var $author$project$Elm$Syntax$Pattern$FloatPattern = function(a) {
        return {
          $: "FloatPattern",
          a
        };
      };
      var $author$project$Elm$Syntax$Pattern$HexPattern = function(a) {
        return {
          $: "HexPattern",
          a
        };
      };
      var $author$project$Elm$Syntax$Pattern$IntPattern = function(a) {
        return {
          $: "IntPattern",
          a
        };
      };
      var $author$project$Elm$Parser$Numbers$raw = F3(function(floatf, intf, hexf) {
        return $elm$parser$Parser$number({
          binary: $elm$core$Maybe$Nothing,
          _float: $elm$core$Maybe$Just(floatf),
          hex: $elm$core$Maybe$Just(hexf),
          _int: $elm$core$Maybe$Just(intf),
          octal: $elm$core$Maybe$Nothing
        });
      });
      var $author$project$Elm$Parser$Numbers$number = F3(function(floatf, intf, hexf) {
        return $author$project$Combine$fromCore(A3($author$project$Elm$Parser$Numbers$raw, floatf, intf, hexf));
      });
      var $author$project$Elm$Parser$Patterns$numberPart = A3($author$project$Elm$Parser$Numbers$number, $author$project$Elm$Syntax$Pattern$FloatPattern, $author$project$Elm$Syntax$Pattern$IntPattern, $author$project$Elm$Syntax$Pattern$HexPattern);
      var $author$project$Combine$parens = A2($author$project$Combine$between, $author$project$Combine$string("("), $author$project$Combine$string(")"));
      var $author$project$Elm$Syntax$Pattern$RecordPattern = function(a) {
        return {
          $: "RecordPattern",
          a
        };
      };
      var $author$project$Combine$sepBy1 = F2(function(sep, p) {
        return A2($author$project$Combine$andMap, $author$project$Combine$many(A2($author$project$Combine$continueWith, p, sep)), A2($author$project$Combine$andMap, p, $author$project$Combine$succeed($elm$core$List$cons)));
      });
      var $author$project$Elm$Parser$Patterns$recordPart = $author$project$Combine$lazy(function(_v0) {
        return $author$project$Elm$Parser$Node$parser(A2($author$project$Combine$map, $author$project$Elm$Syntax$Pattern$RecordPattern, A3($author$project$Combine$between, A2($author$project$Combine$continueWith, $author$project$Combine$maybe($author$project$Elm$Parser$Layout$layout), $author$project$Combine$string("{")), A2($author$project$Combine$continueWith, $author$project$Combine$string("}"), $author$project$Combine$maybe($author$project$Elm$Parser$Layout$layout)), A2($author$project$Combine$sepBy1, $author$project$Combine$string(","), $author$project$Elm$Parser$Layout$maybeAroundBothSides($author$project$Elm$Parser$Node$parser($author$project$Elm$Parser$Tokens$functionName))))));
      });
      var $author$project$Combine$sepBy = F2(function(sep, p) {
        return A2($author$project$Combine$or, A2($author$project$Combine$sepBy1, sep, p), $author$project$Combine$succeed(_List_Nil));
      });
      var $author$project$Elm$Parser$Tokens$stringLiteral = function() {
        var helper = function(s) {
          return s.escaped ? A2($elm$parser$Parser$map, function(v) {
            return $elm$parser$Parser$Loop(_Utils_update(s, {
              escaped: false,
              parts: A2($elm$core$List$cons, $elm$core$String$fromList(_List_fromArray([v])), s.parts)
            }));
          }, $author$project$Elm$Parser$Tokens$escapedCharValue) : $elm$parser$Parser$oneOf(_List_fromArray([A2($elm$parser$Parser$map, function(_v0) {
            return $elm$parser$Parser$Done($elm$core$String$concat($elm$core$List$reverse(s.parts)));
          }, $elm$parser$Parser$symbol('"')), A2($elm$parser$Parser$map, function(_v1) {
            return $elm$parser$Parser$Loop(_Utils_update(s, {
              escaped: true,
              parts: s.parts
            }));
          }, $elm$parser$Parser$getChompedString($elm$parser$Parser$symbol("\\"))), A2($elm$parser$Parser$andThen, function(_v2) {
            var start = _v2.a;
            var value = _v2.b;
            var end = _v2.c;
            return _Utils_eq(start, end) ? $elm$parser$Parser$problem("Expected a string character or a double quote") : $elm$parser$Parser$succeed($elm$parser$Parser$Loop(_Utils_update(s, {
              parts: A2($elm$core$List$cons, value, s.parts)
            })));
          }, A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$keeper, $elm$parser$Parser$succeed(F3(function(start, value, end) {
            return _Utils_Tuple3(start, value, end);
          })), $elm$parser$Parser$getOffset), $elm$parser$Parser$getChompedString($elm$parser$Parser$chompWhile(function(c) {
            return !_Utils_eq(c, _Utils_chr('"')) && !_Utils_eq(c, _Utils_chr("\\"));
          }))), $elm$parser$Parser$getOffset))]));
        };
        return $author$project$Combine$fromCore(A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed($elm$core$Basics$identity), $elm$parser$Parser$symbol('"')), A2($elm$parser$Parser$loop, {
          escaped: false,
          parts: _List_Nil
        }, helper)));
      }();
      var $author$project$Elm$Parser$Tokens$typeName = $author$project$Combine$fromCore($elm$parser$Parser$variable({
        inner: function(c) {
          return $elm$core$Char$isAlphaNum(c) || _Utils_eq(c, _Utils_chr("_"));
        },
        reserved: $elm$core$Set$fromList($author$project$Elm$Parser$Tokens$reservedList),
        start: $elm$core$Char$isUpper
      }));
      var $author$project$Elm$Parser$Base$typeIndicator = function() {
        var helper = function(_v0) {
          var n = _v0.a;
          var xs = _v0.b;
          return $author$project$Combine$choice(_List_fromArray([A2($author$project$Combine$andThen, function(t) {
            return helper(_Utils_Tuple2(t, A2($elm$core$List$cons, n, xs)));
          }, A2($author$project$Combine$continueWith, $author$project$Elm$Parser$Tokens$typeName, $author$project$Combine$string("."))), $author$project$Combine$succeed(_Utils_Tuple2(n, xs))]));
        };
        return A2($author$project$Combine$map, function(_v1) {
          var t = _v1.a;
          var xs = _v1.b;
          return _Utils_Tuple2($elm$core$List$reverse(xs), t);
        }, A2($author$project$Combine$andThen, function(t) {
          return helper(_Utils_Tuple2(t, _List_Nil));
        }, $author$project$Elm$Parser$Tokens$typeName));
      }();
      var $author$project$Elm$Syntax$Pattern$VarPattern = function(a) {
        return {
          $: "VarPattern",
          a
        };
      };
      var $author$project$Elm$Parser$Patterns$variablePart = $author$project$Elm$Parser$Node$parser(A2($author$project$Combine$map, $author$project$Elm$Syntax$Pattern$VarPattern, $author$project$Elm$Parser$Tokens$functionName));
      var $author$project$Elm$Parser$Patterns$qualifiedPattern = function(consumeArgs) {
        return A2($author$project$Combine$andThen, function(_v0) {
          var range = _v0.a;
          var _v1 = _v0.b;
          var mod = _v1.a;
          var name = _v1.b;
          return A2($author$project$Combine$map, function(args) {
            return A2($author$project$Elm$Syntax$Node$Node, $author$project$Elm$Syntax$Range$combine(A2($elm$core$List$cons, range, A2($elm$core$List$map, function(_v2) {
              var r = _v2.a;
              return r;
            }, args))), A2($author$project$Elm$Syntax$Pattern$NamedPattern, A2($author$project$Elm$Syntax$Pattern$QualifiedNameRef, mod, name), args));
          }, consumeArgs ? $author$project$Combine$many(A2($author$project$Combine$ignore, $author$project$Combine$maybe($author$project$Elm$Parser$Layout$layout), $author$project$Elm$Parser$Patterns$cyclic$qualifiedPatternArg())) : $author$project$Combine$succeed(_List_Nil));
        }, A2($author$project$Combine$ignore, $author$project$Combine$maybe($author$project$Elm$Parser$Layout$layout), $author$project$Elm$Parser$Node$parser($author$project$Elm$Parser$Base$typeIndicator)));
      };
      var $author$project$Elm$Parser$Patterns$tryToCompose = function(x) {
        return A2($author$project$Combine$continueWith, $author$project$Combine$choice(_List_fromArray([A2($author$project$Combine$map, function(y) {
          return A3($author$project$Elm$Syntax$Node$combine, $author$project$Elm$Syntax$Pattern$AsPattern, x, y);
        }, A2($author$project$Combine$continueWith, $author$project$Elm$Parser$Node$parser($author$project$Elm$Parser$Tokens$functionName), A2($author$project$Combine$ignore, $author$project$Elm$Parser$Layout$layout, $author$project$Combine$fromCore($elm$parser$Parser$keyword("as"))))), A2($author$project$Combine$map, function(y) {
          return A3($author$project$Elm$Syntax$Node$combine, $author$project$Elm$Syntax$Pattern$UnConsPattern, x, y);
        }, A2($author$project$Combine$continueWith, $author$project$Elm$Parser$Patterns$cyclic$pattern(), A2($author$project$Combine$ignore, $author$project$Combine$maybe($author$project$Elm$Parser$Layout$layout), $author$project$Combine$fromCore($elm$parser$Parser$symbol("::"))))), $author$project$Combine$succeed(x)])), $author$project$Combine$maybe($author$project$Elm$Parser$Layout$layout));
      };
      function $author$project$Elm$Parser$Patterns$cyclic$pattern() {
        return A2($author$project$Combine$andThen, $author$project$Elm$Parser$Patterns$tryToCompose, $author$project$Elm$Parser$Patterns$cyclic$composablePattern());
      }
      function $author$project$Elm$Parser$Patterns$cyclic$composablePattern() {
        return $author$project$Combine$choice(_List_fromArray([$author$project$Elm$Parser$Patterns$variablePart, $author$project$Elm$Parser$Patterns$qualifiedPattern(true), $author$project$Elm$Parser$Node$parser(A2($author$project$Combine$map, $author$project$Elm$Syntax$Pattern$StringPattern, $author$project$Elm$Parser$Tokens$stringLiteral)), $author$project$Elm$Parser$Node$parser(A2($author$project$Combine$map, $author$project$Elm$Syntax$Pattern$CharPattern, $author$project$Elm$Parser$Tokens$characterLiteral)), $author$project$Elm$Parser$Node$parser($author$project$Elm$Parser$Patterns$numberPart), $author$project$Elm$Parser$Node$parser(A2($author$project$Combine$map, $elm$core$Basics$always($author$project$Elm$Syntax$Pattern$UnitPattern), $author$project$Combine$fromCore($elm$parser$Parser$symbol("()")))), $author$project$Elm$Parser$Node$parser(A2($author$project$Combine$map, $elm$core$Basics$always($author$project$Elm$Syntax$Pattern$AllPattern), $author$project$Combine$fromCore($elm$parser$Parser$symbol("_")))), $author$project$Elm$Parser$Patterns$recordPart, $author$project$Elm$Parser$Patterns$cyclic$listPattern(), $author$project$Elm$Parser$Patterns$cyclic$parensPattern()]));
      }
      function $author$project$Elm$Parser$Patterns$cyclic$qualifiedPatternArg() {
        return $author$project$Combine$choice(_List_fromArray([$author$project$Elm$Parser$Patterns$variablePart, $author$project$Elm$Parser$Patterns$qualifiedPattern(false), $author$project$Elm$Parser$Node$parser(A2($author$project$Combine$map, $author$project$Elm$Syntax$Pattern$StringPattern, $author$project$Elm$Parser$Tokens$stringLiteral)), $author$project$Elm$Parser$Node$parser(A2($author$project$Combine$map, $author$project$Elm$Syntax$Pattern$CharPattern, $author$project$Elm$Parser$Tokens$characterLiteral)), $author$project$Elm$Parser$Node$parser($author$project$Elm$Parser$Patterns$numberPart), $author$project$Elm$Parser$Node$parser(A2($author$project$Combine$map, $elm$core$Basics$always($author$project$Elm$Syntax$Pattern$UnitPattern), $author$project$Combine$fromCore($elm$parser$Parser$symbol("()")))), $author$project$Elm$Parser$Node$parser(A2($author$project$Combine$map, $elm$core$Basics$always($author$project$Elm$Syntax$Pattern$AllPattern), $author$project$Combine$fromCore($elm$parser$Parser$symbol("_")))), $author$project$Elm$Parser$Patterns$recordPart, $author$project$Elm$Parser$Patterns$cyclic$listPattern(), $author$project$Elm$Parser$Patterns$cyclic$parensPattern()]));
      }
      function $author$project$Elm$Parser$Patterns$cyclic$listPattern() {
        return $author$project$Combine$lazy(function(_v5) {
          return $author$project$Elm$Parser$Node$parser(A3($author$project$Combine$between, $author$project$Combine$string("["), $author$project$Combine$string("]"), A2($author$project$Combine$map, $author$project$Elm$Syntax$Pattern$ListPattern, A2($author$project$Combine$sepBy, $author$project$Combine$string(","), $author$project$Elm$Parser$Layout$maybeAroundBothSides($author$project$Elm$Parser$Patterns$cyclic$pattern())))));
        });
      }
      function $author$project$Elm$Parser$Patterns$cyclic$parensPattern() {
        return $author$project$Combine$lazy(function(_v3) {
          return $author$project$Elm$Parser$Node$parser(A2($author$project$Combine$map, function(c) {
            if (c.b && !c.b.b) {
              var x = c.a;
              return $author$project$Elm$Syntax$Pattern$ParenthesizedPattern(x);
            } else {
              return $author$project$Elm$Syntax$Pattern$TuplePattern(c);
            }
          }, $author$project$Combine$parens(A2($author$project$Combine$sepBy, $author$project$Combine$string(","), $author$project$Elm$Parser$Layout$maybeAroundBothSides($author$project$Elm$Parser$Patterns$cyclic$pattern())))));
        });
      }
      try {
        var $author$project$Elm$Parser$Patterns$pattern = $author$project$Elm$Parser$Patterns$cyclic$pattern();
        $author$project$Elm$Parser$Patterns$cyclic$pattern = function() {
          return $author$project$Elm$Parser$Patterns$pattern;
        };
        var $author$project$Elm$Parser$Patterns$composablePattern = $author$project$Elm$Parser$Patterns$cyclic$composablePattern();
        $author$project$Elm$Parser$Patterns$cyclic$composablePattern = function() {
          return $author$project$Elm$Parser$Patterns$composablePattern;
        };
        var $author$project$Elm$Parser$Patterns$qualifiedPatternArg = $author$project$Elm$Parser$Patterns$cyclic$qualifiedPatternArg();
        $author$project$Elm$Parser$Patterns$cyclic$qualifiedPatternArg = function() {
          return $author$project$Elm$Parser$Patterns$qualifiedPatternArg;
        };
        var $author$project$Elm$Parser$Patterns$listPattern = $author$project$Elm$Parser$Patterns$cyclic$listPattern();
        $author$project$Elm$Parser$Patterns$cyclic$listPattern = function() {
          return $author$project$Elm$Parser$Patterns$listPattern;
        };
        var $author$project$Elm$Parser$Patterns$parensPattern = $author$project$Elm$Parser$Patterns$cyclic$parensPattern();
        $author$project$Elm$Parser$Patterns$cyclic$parensPattern = function() {
          return $author$project$Elm$Parser$Patterns$parensPattern;
        };
      } catch ($) {
        throw "Some top-level definitions from `Elm.Parser.Patterns` are causing infinite recursion:\n\n  ┌─────┐\n  │    pattern\n  │     ↓\n  │    composablePattern\n  │     ↓\n  │    qualifiedPatternArg\n  │     ↓\n  │    listPattern\n  │     ↓\n  │    parensPattern\n  │     ↓\n  │    qualifiedPattern\n  │     ↓\n  │    tryToCompose\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.1/bad-recursion to learn how to fix it!";
      }
      var $author$project$Elm$Parser$Declarations$functionArgument = $author$project$Elm$Parser$Patterns$pattern;
      var $author$project$Elm$Syntax$Signature$Signature = F2(function(name, typeAnnotation) {
        return {
          name,
          typeAnnotation
        };
      });
      var $author$project$Elm$Parser$TypeAnnotation$Eager = {
        $: "Eager"
      };
      var $author$project$Elm$Syntax$TypeAnnotation$FunctionTypeAnnotation = F2(function(a, b) {
        return {
          $: "FunctionTypeAnnotation",
          a,
          b
        };
      });
      var $author$project$Elm$Syntax$TypeAnnotation$GenericRecord = F2(function(a, b) {
        return {
          $: "GenericRecord",
          a,
          b
        };
      });
      var $author$project$Elm$Parser$TypeAnnotation$Lazy = {
        $: "Lazy"
      };
      var $author$project$Elm$Syntax$TypeAnnotation$Record = function(a) {
        return {
          $: "Record",
          a
        };
      };
      var $author$project$Elm$Syntax$TypeAnnotation$Typed = F2(function(a, b) {
        return {
          $: "Typed",
          a,
          b
        };
      });
      var $author$project$Elm$Syntax$TypeAnnotation$Unit = {
        $: "Unit"
      };
      var $author$project$Elm$Syntax$TypeAnnotation$Tupled = function(a) {
        return {
          $: "Tupled",
          a
        };
      };
      var $author$project$Elm$Parser$TypeAnnotation$asTypeAnnotation = F2(function(x, xs) {
        var value = x.b;
        if (!xs.b) {
          return value;
        } else {
          return $author$project$Elm$Syntax$TypeAnnotation$Tupled(A2($elm$core$List$cons, x, xs));
        }
      });
      var $author$project$Elm$Syntax$TypeAnnotation$GenericType = function(a) {
        return {
          $: "GenericType",
          a
        };
      };
      var $author$project$Elm$Parser$TypeAnnotation$genericTypeAnnotation = $author$project$Combine$lazy(function(_v0) {
        return $author$project$Elm$Parser$Node$parser(A2($author$project$Combine$map, $author$project$Elm$Syntax$TypeAnnotation$GenericType, $author$project$Elm$Parser$Tokens$functionName));
      });
      var $author$project$Elm$Parser$Layout$Indented = {
        $: "Indented"
      };
      var $author$project$Elm$Parser$Layout$Strict = {
        $: "Strict"
      };
      var $author$project$Elm$Parser$State$storedColumns = function(_v0) {
        var indents = _v0.a.indents;
        return A2($elm$core$List$map, $elm$core$Basics$add(1), indents);
      };
      var $author$project$Elm$Parser$Layout$compute = $author$project$Combine$withState(function(s) {
        return $author$project$Combine$withLocation(function(l) {
          var known = A2($elm$core$List$cons, 1, $author$project$Elm$Parser$State$storedColumns(s));
          return A2($elm$core$List$member, l.column, known) ? $author$project$Combine$succeed($author$project$Elm$Parser$Layout$Strict) : $author$project$Combine$succeed($author$project$Elm$Parser$Layout$Indented);
        });
      });
      var $author$project$Elm$Parser$Layout$optimisticLayout = A2($author$project$Combine$continueWith, $author$project$Elm$Parser$Layout$compute, $author$project$Combine$many($author$project$Combine$choice(_List_fromArray([$author$project$Elm$Parser$Layout$anyComment, A2($author$project$Combine$continueWith, $author$project$Combine$choice(_List_fromArray([$author$project$Elm$Parser$Whitespace$many1Spaces, $author$project$Elm$Parser$Layout$anyComment, $author$project$Combine$succeed(_Utils_Tuple0)])), $author$project$Combine$many1($author$project$Elm$Parser$Whitespace$realNewLine)), $author$project$Elm$Parser$Whitespace$many1Spaces]))));
      var $author$project$Elm$Parser$Layout$optimisticLayoutWith = F2(function(onStrict, onIndented) {
        return A2($author$project$Combine$andThen, function(ind) {
          if (ind.$ === "Strict") {
            return onStrict(_Utils_Tuple0);
          } else {
            return onIndented(_Utils_Tuple0);
          }
        }, $author$project$Elm$Parser$Layout$optimisticLayout);
      });
      var $author$project$Elm$Parser$TypeAnnotation$typeAnnotationNoFn = function(mode) {
        return $author$project$Combine$lazy(function(_v7) {
          return $author$project$Combine$choice(_List_fromArray([$author$project$Elm$Parser$TypeAnnotation$cyclic$parensTypeAnnotation(), $author$project$Elm$Parser$TypeAnnotation$typedTypeAnnotation(mode), $author$project$Elm$Parser$TypeAnnotation$genericTypeAnnotation, $author$project$Elm$Parser$TypeAnnotation$cyclic$recordTypeAnnotation()]));
        });
      };
      var $author$project$Elm$Parser$TypeAnnotation$typedTypeAnnotation = function(mode) {
        return $author$project$Combine$lazy(function(_v0) {
          var nodeRanges = $elm$core$List$map(function(_v6) {
            var r = _v6.a;
            return r;
          });
          var genericHelper = function(items) {
            return A2($author$project$Combine$or, A2($author$project$Combine$andThen, function(next) {
              return A2($author$project$Combine$ignore, $author$project$Combine$maybe($author$project$Elm$Parser$Layout$layout), A2($author$project$Elm$Parser$Layout$optimisticLayoutWith, function(_v1) {
                return $author$project$Combine$succeed($elm$core$List$reverse(A2($elm$core$List$cons, next, items)));
              }, function(_v2) {
                return genericHelper(A2($elm$core$List$cons, next, items));
              }));
            }, $author$project$Elm$Parser$TypeAnnotation$typeAnnotationNoFn($author$project$Elm$Parser$TypeAnnotation$Lazy)), $author$project$Combine$succeed($elm$core$List$reverse(items)));
          };
          return A2($author$project$Combine$andThen, function(original) {
            var tir = original.a;
            return A2($author$project$Elm$Parser$Layout$optimisticLayoutWith, function(_v3) {
              return $author$project$Combine$succeed(A2($author$project$Elm$Syntax$Node$Node, tir, A2($author$project$Elm$Syntax$TypeAnnotation$Typed, original, _List_Nil)));
            }, function(_v4) {
              if (mode.$ === "Eager") {
                return A2($author$project$Combine$map, function(args) {
                  return A2($author$project$Elm$Syntax$Node$Node, $author$project$Elm$Syntax$Range$combine(A2($elm$core$List$cons, tir, nodeRanges(args))), A2($author$project$Elm$Syntax$TypeAnnotation$Typed, original, args));
                }, genericHelper(_List_Nil));
              } else {
                return $author$project$Combine$succeed(A2($author$project$Elm$Syntax$Node$Node, tir, A2($author$project$Elm$Syntax$TypeAnnotation$Typed, original, _List_Nil)));
              }
            });
          }, $author$project$Elm$Parser$Node$parser($author$project$Elm$Parser$Base$typeIndicator));
        });
      };
      function $author$project$Elm$Parser$TypeAnnotation$cyclic$parensTypeAnnotation() {
        return $author$project$Combine$lazy(function(_v14) {
          var commaSep = $author$project$Combine$many(A2($author$project$Combine$ignore, $author$project$Combine$maybe($author$project$Elm$Parser$Layout$layout), A2($author$project$Combine$continueWith, $author$project$Elm$Parser$TypeAnnotation$cyclic$typeAnnotation(), A2($author$project$Combine$ignore, $author$project$Combine$maybe($author$project$Elm$Parser$Layout$layout), $author$project$Combine$string(",")))));
          var nested = A2($author$project$Combine$andMap, commaSep, A2($author$project$Combine$ignore, $author$project$Combine$maybe($author$project$Elm$Parser$Layout$layout), A2($author$project$Combine$andMap, $author$project$Elm$Parser$TypeAnnotation$cyclic$typeAnnotation(), A2($author$project$Combine$ignore, $author$project$Combine$maybe($author$project$Elm$Parser$Layout$layout), $author$project$Combine$succeed($author$project$Elm$Parser$TypeAnnotation$asTypeAnnotation)))));
          return $author$project$Elm$Parser$Node$parser(A2($author$project$Combine$continueWith, $author$project$Combine$choice(_List_fromArray([A2($author$project$Combine$map, $elm$core$Basics$always($author$project$Elm$Syntax$TypeAnnotation$Unit), $author$project$Combine$string(")")), A2($author$project$Combine$ignore, $author$project$Combine$string(")"), nested)])), $author$project$Combine$string("(")));
        });
      }
      function $author$project$Elm$Parser$TypeAnnotation$cyclic$recordFieldDefinition() {
        return $author$project$Combine$lazy(function(_v13) {
          return A2($author$project$Combine$andMap, A2($author$project$Combine$continueWith, $author$project$Elm$Parser$TypeAnnotation$cyclic$typeAnnotation(), A2($author$project$Combine$continueWith, $author$project$Combine$maybe($author$project$Elm$Parser$Layout$layout), A2($author$project$Combine$continueWith, $author$project$Combine$string(":"), $author$project$Combine$maybe($author$project$Elm$Parser$Layout$layout)))), A2($author$project$Combine$andMap, A2($author$project$Combine$continueWith, $author$project$Elm$Parser$Node$parser($author$project$Elm$Parser$Tokens$functionName), $author$project$Combine$maybe($author$project$Elm$Parser$Layout$layout)), $author$project$Combine$succeed($elm$core$Tuple$pair)));
        });
      }
      function $author$project$Elm$Parser$TypeAnnotation$cyclic$recordFieldsTypeAnnotation() {
        return $author$project$Combine$lazy(function(_v12) {
          return A2($author$project$Combine$sepBy, $author$project$Combine$string(","), $author$project$Elm$Parser$Layout$maybeAroundBothSides($author$project$Elm$Parser$Node$parser($author$project$Elm$Parser$TypeAnnotation$cyclic$recordFieldDefinition())));
        });
      }
      function $author$project$Elm$Parser$TypeAnnotation$cyclic$recordTypeAnnotation() {
        return $author$project$Combine$lazy(function(_v11) {
          var nextField = A2($author$project$Combine$ignore, $author$project$Elm$Parser$Layout$optimisticLayout, A2($author$project$Combine$andMap, $author$project$Elm$Parser$TypeAnnotation$cyclic$typeAnnotation(), A2($author$project$Combine$ignore, $author$project$Combine$maybe($author$project$Elm$Parser$Layout$layout), A2($author$project$Combine$ignore, $author$project$Combine$string(":"), A2($author$project$Combine$ignore, $author$project$Combine$maybe($author$project$Elm$Parser$Layout$layout), A2($author$project$Combine$andMap, $author$project$Elm$Parser$Node$parser($author$project$Elm$Parser$Tokens$functionName), A2($author$project$Combine$ignore, $author$project$Combine$maybe($author$project$Elm$Parser$Layout$layout), A2($author$project$Combine$ignore, $author$project$Combine$string(","), $author$project$Combine$succeed(F2(function(a, b) {
            return _Utils_Tuple2(a, b);
          }))))))))));
          var additionalRecordFields = function(items) {
            return $author$project$Combine$choice(_List_fromArray([A2($author$project$Combine$andThen, function(next) {
              return additionalRecordFields(A2($elm$core$List$cons, next, items));
            }, $author$project$Elm$Parser$Node$parser(nextField)), $author$project$Combine$succeed($elm$core$List$reverse(items))]));
          };
          return $author$project$Elm$Parser$Node$parser(A2($author$project$Combine$continueWith, $author$project$Combine$choice(_List_fromArray([A2($author$project$Combine$continueWith, $author$project$Combine$succeed($author$project$Elm$Syntax$TypeAnnotation$Record(_List_Nil)), $author$project$Combine$string("}")), A2($author$project$Combine$andThen, function(fname) {
            return $author$project$Combine$choice(_List_fromArray([A2($author$project$Combine$ignore, $author$project$Combine$string("}"), A2($author$project$Combine$andMap, $author$project$Elm$Parser$Node$parser($author$project$Elm$Parser$TypeAnnotation$cyclic$recordFieldsTypeAnnotation()), A2($author$project$Combine$ignore, $author$project$Combine$string("|"), $author$project$Combine$succeed($author$project$Elm$Syntax$TypeAnnotation$GenericRecord(fname))))), A2($author$project$Combine$ignore, $author$project$Combine$string("}"), A2($author$project$Combine$andThen, function(ta) {
              return A2($author$project$Combine$map, $author$project$Elm$Syntax$TypeAnnotation$Record, additionalRecordFields(_List_fromArray([A3($author$project$Elm$Syntax$Node$combine, $elm$core$Tuple$pair, fname, ta)])));
            }, A2($author$project$Combine$ignore, $author$project$Combine$maybe($author$project$Elm$Parser$Layout$layout), A2($author$project$Combine$continueWith, $author$project$Elm$Parser$TypeAnnotation$cyclic$typeAnnotation(), A2($author$project$Combine$ignore, $author$project$Combine$maybe($author$project$Elm$Parser$Layout$layout), $author$project$Combine$string(":"))))))]));
          }, A2($author$project$Combine$ignore, $author$project$Combine$maybe($author$project$Elm$Parser$Layout$layout), $author$project$Elm$Parser$Node$parser($author$project$Elm$Parser$Tokens$functionName)))])), A2($author$project$Combine$ignore, $author$project$Combine$maybe($author$project$Elm$Parser$Layout$layout), $author$project$Combine$string("{"))));
        });
      }
      function $author$project$Elm$Parser$TypeAnnotation$cyclic$typeAnnotation() {
        return $author$project$Combine$lazy(function(_v8) {
          return A2($author$project$Combine$andThen, function(typeRef) {
            return A2($author$project$Elm$Parser$Layout$optimisticLayoutWith, function(_v9) {
              return $author$project$Combine$succeed(typeRef);
            }, function(_v10) {
              return A2($author$project$Combine$or, A2($author$project$Combine$map, function(ta) {
                return A3($author$project$Elm$Syntax$Node$combine, $author$project$Elm$Syntax$TypeAnnotation$FunctionTypeAnnotation, typeRef, ta);
              }, A2($author$project$Combine$continueWith, $author$project$Elm$Parser$TypeAnnotation$cyclic$typeAnnotation(), A2($author$project$Combine$ignore, $author$project$Combine$maybe($author$project$Elm$Parser$Layout$layout), $author$project$Combine$string("->")))), $author$project$Combine$succeed(typeRef));
            });
          }, $author$project$Elm$Parser$TypeAnnotation$typeAnnotationNoFn($author$project$Elm$Parser$TypeAnnotation$Eager));
        });
      }
      try {
        var $author$project$Elm$Parser$TypeAnnotation$parensTypeAnnotation = $author$project$Elm$Parser$TypeAnnotation$cyclic$parensTypeAnnotation();
        $author$project$Elm$Parser$TypeAnnotation$cyclic$parensTypeAnnotation = function() {
          return $author$project$Elm$Parser$TypeAnnotation$parensTypeAnnotation;
        };
        var $author$project$Elm$Parser$TypeAnnotation$recordFieldDefinition = $author$project$Elm$Parser$TypeAnnotation$cyclic$recordFieldDefinition();
        $author$project$Elm$Parser$TypeAnnotation$cyclic$recordFieldDefinition = function() {
          return $author$project$Elm$Parser$TypeAnnotation$recordFieldDefinition;
        };
        var $author$project$Elm$Parser$TypeAnnotation$recordFieldsTypeAnnotation = $author$project$Elm$Parser$TypeAnnotation$cyclic$recordFieldsTypeAnnotation();
        $author$project$Elm$Parser$TypeAnnotation$cyclic$recordFieldsTypeAnnotation = function() {
          return $author$project$Elm$Parser$TypeAnnotation$recordFieldsTypeAnnotation;
        };
        var $author$project$Elm$Parser$TypeAnnotation$recordTypeAnnotation = $author$project$Elm$Parser$TypeAnnotation$cyclic$recordTypeAnnotation();
        $author$project$Elm$Parser$TypeAnnotation$cyclic$recordTypeAnnotation = function() {
          return $author$project$Elm$Parser$TypeAnnotation$recordTypeAnnotation;
        };
        var $author$project$Elm$Parser$TypeAnnotation$typeAnnotation = $author$project$Elm$Parser$TypeAnnotation$cyclic$typeAnnotation();
        $author$project$Elm$Parser$TypeAnnotation$cyclic$typeAnnotation = function() {
          return $author$project$Elm$Parser$TypeAnnotation$typeAnnotation;
        };
      } catch ($) {
        throw "Some top-level definitions from `Elm.Parser.TypeAnnotation` are causing infinite recursion:\n\n  ┌─────┐\n  │    parensTypeAnnotation\n  │     ↓\n  │    recordFieldDefinition\n  │     ↓\n  │    recordFieldsTypeAnnotation\n  │     ↓\n  │    recordTypeAnnotation\n  │     ↓\n  │    typeAnnotation\n  │     ↓\n  │    typeAnnotationNoFn\n  │     ↓\n  │    typedTypeAnnotation\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.1/bad-recursion to learn how to fix it!";
      }
      var $author$project$Elm$Parser$Declarations$functionSignatureFromVarPointer = function(varPointer) {
        return A2($author$project$Combine$andMap, $author$project$Elm$Parser$TypeAnnotation$typeAnnotation, A2($author$project$Combine$ignore, $author$project$Combine$maybe($author$project$Elm$Parser$Layout$layout), A2($author$project$Combine$ignore, $author$project$Combine$string(":"), $author$project$Combine$succeed(function(ta) {
          return A3($author$project$Elm$Syntax$Node$combine, $author$project$Elm$Syntax$Signature$Signature, varPointer, ta);
        }))));
      };
      var $author$project$Elm$Syntax$Expression$GLSLExpression = function(a) {
        return {
          $: "GLSLExpression",
          a
        };
      };
      var $author$project$Elm$Parser$Declarations$glslExpression = function() {
        var start = "[glsl|";
        var end = "|]";
        return $author$project$Elm$Parser$Node$parser(A2($author$project$Combine$ignore, $author$project$Combine$string(end), A2($author$project$Combine$map, A2($elm$core$Basics$composeR, $elm$core$String$dropLeft($elm$core$String$length(start)), $author$project$Elm$Syntax$Expression$GLSLExpression), $author$project$Combine$fromCore($elm$parser$Parser$getChompedString(A3($elm$parser$Parser$multiComment, start, end, $elm$parser$Parser$NotNestable))))));
      }();
      var $author$project$Elm$Parser$Tokens$ifToken = $author$project$Combine$string("if");
      var $author$project$Elm$Parser$Tokens$allowedOperatorTokens = _List_fromArray([_Utils_chr("+"), _Utils_chr("-"), _Utils_chr(":"), _Utils_chr("/"), _Utils_chr("*"), _Utils_chr(">"), _Utils_chr("<"), _Utils_chr("="), _Utils_chr("/"), _Utils_chr("&"), _Utils_chr("^"), _Utils_chr("%"), _Utils_chr("|"), _Utils_chr("!"), _Utils_chr("."), _Utils_chr("#"), _Utils_chr("$"), _Utils_chr("≡"), _Utils_chr("~"), _Utils_chr("?"), _Utils_chr("@")]);
      var $author$project$Elm$Parser$Tokens$excludedOperators = _List_fromArray([":", "->", "--", "="]);
      var $author$project$Combine$Char$oneOf = function(cs) {
        return A2($author$project$Combine$andThen, A2($elm$core$Basics$composeR, $elm$core$Maybe$map($author$project$Combine$succeed), $elm$core$Maybe$withDefault($author$project$Combine$fail("expected one of '" + ($elm$core$String$fromList(cs) + "'")))), $author$project$Combine$Char$satisfy(function(a) {
          return A2($elm$core$List$member, a, cs);
        }));
      };
      var $author$project$Elm$Parser$Tokens$operatorTokenFromList = function(allowedChars) {
        return A2($author$project$Combine$andThen, function(m) {
          return A2($elm$core$List$member, m, $author$project$Elm$Parser$Tokens$excludedOperators) ? $author$project$Combine$fail("operator is not allowed") : $author$project$Combine$succeed(m);
        }, A2($author$project$Combine$map, $elm$core$String$fromList, $author$project$Combine$many1($author$project$Combine$Char$oneOf(allowedChars))));
      };
      var $author$project$Elm$Parser$Tokens$infixOperatorToken = $author$project$Elm$Parser$Tokens$operatorTokenFromList($author$project$Elm$Parser$Tokens$allowedOperatorTokens);
      var $author$project$Elm$Parser$Layout$layoutStrict = A2($author$project$Combine$continueWith, $author$project$Elm$Parser$Layout$verifyIndent(F2(function(stateIndent, current) {
        return _Utils_eq(stateIndent, current);
      })), $author$project$Combine$many1($author$project$Combine$choice(_List_fromArray([$author$project$Elm$Parser$Layout$anyComment, A2($author$project$Combine$continueWith, $author$project$Combine$succeed(_Utils_Tuple0), $author$project$Combine$many1($author$project$Elm$Parser$Whitespace$realNewLine)), $author$project$Elm$Parser$Whitespace$many1Spaces]))));
      var $author$project$Elm$Syntax$Expression$RecordAccess = F2(function(a, b) {
        return {
          $: "RecordAccess",
          a,
          b
        };
      });
      var $author$project$Elm$Parser$Declarations$liftRecordAccess = function(e) {
        return $author$project$Combine$lazy(function(_v0) {
          return A2($author$project$Combine$or, A2($author$project$Combine$andThen, $author$project$Elm$Parser$Declarations$liftRecordAccess, $author$project$Elm$Parser$Node$parser(A2($author$project$Combine$map, $author$project$Elm$Syntax$Expression$RecordAccess(e), A2($author$project$Combine$continueWith, $author$project$Elm$Parser$Node$parser($author$project$Elm$Parser$Tokens$functionName), $author$project$Combine$string("."))))), $author$project$Combine$succeed(e));
        });
      };
      var $author$project$Elm$Syntax$Expression$Literal = function(a) {
        return {
          $: "Literal",
          a
        };
      };
      var $author$project$Elm$Parser$Tokens$multiLineStringLiteral = function() {
        var helper = function(s) {
          return s.escaped ? A2($elm$parser$Parser$map, function(v) {
            return $elm$parser$Parser$Loop(_Utils_update(s, {
              escaped: false,
              parts: A2($elm$core$List$cons, $elm$core$String$fromList(_List_fromArray([v])), s.parts)
            }));
          }, $author$project$Elm$Parser$Tokens$escapedCharValue) : $elm$parser$Parser$oneOf(_List_fromArray([A2($elm$parser$Parser$map, function(_v0) {
            return $elm$parser$Parser$Done($elm$core$String$concat(s.parts));
          }, $elm$parser$Parser$symbol('"""')), A2($elm$parser$Parser$map, function(v) {
            return $elm$parser$Parser$Loop(_Utils_update(s, {
              counter: s.counter + 1,
              parts: A2($elm$core$List$cons, v, s.parts)
            }));
          }, $elm$parser$Parser$getChompedString($elm$parser$Parser$symbol('"'))), A2($elm$parser$Parser$map, function(_v1) {
            return $elm$parser$Parser$Loop(_Utils_update(s, {
              counter: s.counter + 1,
              escaped: true,
              parts: s.parts
            }));
          }, $elm$parser$Parser$getChompedString($elm$parser$Parser$symbol("\\"))), A2($elm$parser$Parser$andThen, function(_v2) {
            var start = _v2.a;
            var value = _v2.b;
            var end = _v2.c;
            return _Utils_eq(start, end) ? $elm$parser$Parser$problem("Expected a string character or a triple double quote") : $elm$parser$Parser$succeed($elm$parser$Parser$Loop(_Utils_update(s, {
              counter: s.counter + 1,
              parts: A2($elm$core$List$cons, value, s.parts)
            })));
          }, A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$keeper, $elm$parser$Parser$succeed(F3(function(start, value, end) {
            return _Utils_Tuple3(start, value, end);
          })), $elm$parser$Parser$getOffset), $elm$parser$Parser$getChompedString($elm$parser$Parser$chompWhile(function(c) {
            return !_Utils_eq(c, _Utils_chr('"')) && !_Utils_eq(c, _Utils_chr("\\"));
          }))), $elm$parser$Parser$getOffset))]));
        };
        return $author$project$Combine$fromCore(A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed($elm$core$Basics$identity), $elm$parser$Parser$symbol('"""')), A2($elm$parser$Parser$loop, {
          counter: 0,
          escaped: false,
          parts: _List_Nil
        }, helper)));
      }();
      var $author$project$Elm$Parser$Declarations$literalExpression = $author$project$Combine$lazy(function(_v0) {
        return $author$project$Elm$Parser$Node$parser(A2($author$project$Combine$map, $author$project$Elm$Syntax$Expression$Literal, A2($author$project$Combine$or, $author$project$Elm$Parser$Tokens$multiLineStringLiteral, $author$project$Elm$Parser$Tokens$stringLiteral)));
      });
      var $author$project$Combine$loop = F2(function(init, stepper) {
        var wrapper = function(_v3) {
          var oldState = _v3.a;
          var v = _v3.b;
          var _v0 = stepper(v);
          var p = _v0.a;
          return A2($elm$parser$Parser$map, function(_v1) {
            var newState = _v1.a;
            var r = _v1.b;
            if (r.$ === "Loop") {
              var l = r.a;
              return $elm$parser$Parser$Loop(_Utils_Tuple2(newState, l));
            } else {
              var d = r.a;
              return $elm$parser$Parser$Done(_Utils_Tuple2(newState, d));
            }
          }, p(oldState));
        };
        return $author$project$Combine$Parser(function(state) {
          return A2($elm$parser$Parser$loop, _Utils_Tuple2(state, init), wrapper);
        });
      });
      var $author$project$Elm$Parser$Whitespace$manySpaces = $author$project$Combine$fromCore($elm$parser$Parser$chompWhile(function(c) {
        return _Utils_eq(c, _Utils_chr(" "));
      }));
      var $author$project$Elm$Syntax$Expression$Floatable = function(a) {
        return {
          $: "Floatable",
          a
        };
      };
      var $author$project$Elm$Syntax$Expression$Hex = function(a) {
        return {
          $: "Hex",
          a
        };
      };
      var $author$project$Elm$Syntax$Expression$Integer = function(a) {
        return {
          $: "Integer",
          a
        };
      };
      var $author$project$Elm$Parser$Numbers$forgivingNumber = F3(function(floatf, intf, hexf) {
        return $author$project$Combine$fromCore($elm$parser$Parser$backtrackable(A3($author$project$Elm$Parser$Numbers$raw, floatf, intf, hexf)));
      });
      var $author$project$Elm$Parser$Declarations$numberExpression = $author$project$Elm$Parser$Node$parser(A3($author$project$Elm$Parser$Numbers$forgivingNumber, $author$project$Elm$Syntax$Expression$Floatable, $author$project$Elm$Syntax$Expression$Integer, $author$project$Elm$Syntax$Expression$Hex));
      var $author$project$Elm$Parser$Tokens$ofToken = $author$project$Combine$string("of");
      var $author$project$Elm$Parser$Tokens$allowedPrefixOperatorTokens = A2($elm$core$List$cons, _Utils_chr(","), $author$project$Elm$Parser$Tokens$allowedOperatorTokens);
      var $author$project$Elm$Parser$Tokens$prefixOperatorToken = $author$project$Elm$Parser$Tokens$operatorTokenFromList($author$project$Elm$Parser$Tokens$allowedPrefixOperatorTokens);
      var $author$project$Elm$Syntax$Node$range = function(_v0) {
        var r = _v0.a;
        return r;
      };
      var $author$project$Elm$Syntax$Expression$RecordAccessFunction = function(a) {
        return {
          $: "RecordAccessFunction",
          a
        };
      };
      var $author$project$Elm$Parser$Declarations$recordAccessFunctionExpression = $author$project$Elm$Parser$Node$parser(A2($author$project$Combine$map, A2($elm$core$Basics$composeR, $elm$core$Basics$append("."), $author$project$Elm$Syntax$Expression$RecordAccessFunction), A2($author$project$Combine$continueWith, $author$project$Elm$Parser$Tokens$functionName, $author$project$Combine$string("."))));
      var $author$project$Elm$Syntax$Expression$FunctionOrValue = F2(function(a, b) {
        return {
          $: "FunctionOrValue",
          a,
          b
        };
      });
      var $author$project$Elm$Parser$Declarations$reference = function() {
        var justFunction = A2($author$project$Combine$map, function(v) {
          return _Utils_Tuple2(_List_Nil, v);
        }, $author$project$Elm$Parser$Tokens$functionName);
        var helper = function(_v0) {
          var n = _v0.a;
          var xs = _v0.b;
          return $author$project$Combine$choice(_List_fromArray([A2($author$project$Combine$continueWith, $author$project$Combine$choice(_List_fromArray([A2($author$project$Combine$andThen, function(t) {
            return helper(_Utils_Tuple2(t, A2($elm$core$List$cons, n, xs)));
          }, $author$project$Elm$Parser$Tokens$typeName), A2($author$project$Combine$map, function(t) {
            return _Utils_Tuple2(t, A2($elm$core$List$cons, n, xs));
          }, $author$project$Elm$Parser$Tokens$functionName)])), $author$project$Combine$string(".")), $author$project$Combine$succeed(_Utils_Tuple2(n, xs))]));
        };
        var recurring = A2($author$project$Combine$map, function(_v1) {
          var t = _v1.a;
          var xs = _v1.b;
          return _Utils_Tuple2($elm$core$List$reverse(xs), t);
        }, A2($author$project$Combine$andThen, function(t) {
          return helper(_Utils_Tuple2(t, _List_Nil));
        }, $author$project$Elm$Parser$Tokens$typeName));
        return $author$project$Combine$choice(_List_fromArray([recurring, justFunction]));
      }();
      var $author$project$Elm$Parser$Declarations$referenceExpression = $author$project$Elm$Parser$Node$parser(A2($author$project$Combine$map, function(_v0) {
        var xs = _v0.a;
        var x = _v0.b;
        return A2($author$project$Elm$Syntax$Expression$FunctionOrValue, xs, x);
      }, $author$project$Elm$Parser$Declarations$reference));
      var $author$project$Elm$Parser$Tokens$thenToken = $author$project$Combine$string("then");
      var $author$project$Elm$Parser$State$popIndent = function(_v0) {
        var s = _v0.a;
        return $author$project$Elm$Parser$State$State(_Utils_update(s, {
          indents: A2($elm$core$List$drop, 1, s.indents)
        }));
      };
      var $author$project$Elm$Parser$State$pushIndent = F2(function(x, _v0) {
        var s = _v0.a;
        return $author$project$Elm$Parser$State$State(_Utils_update(s, {
          indents: A2($elm$core$List$cons, x, s.indents)
        }));
      });
      var $author$project$Elm$Parser$State$pushColumn = F2(function(col, state) {
        return A2($author$project$Elm$Parser$State$pushIndent, col - 1, state);
      });
      var $author$project$Elm$Parser$Declarations$withIndentedState = function(p) {
        return $author$project$Combine$withLocation(function(location) {
          return A2($author$project$Combine$ignore, $author$project$Combine$modifyState($author$project$Elm$Parser$State$popIndent), A2($author$project$Combine$continueWith, p, $author$project$Combine$modifyState($author$project$Elm$Parser$State$pushColumn(location.column))));
        });
      };
      var $author$project$Elm$Parser$Declarations$functionWithNameNode = function(pointer) {
        var functionImplementationFromVarPointer = function(varPointer) {
          return A2($author$project$Combine$andMap, $author$project$Elm$Parser$Declarations$cyclic$expression(), A2($author$project$Combine$ignore, $author$project$Combine$maybe($author$project$Elm$Parser$Layout$layout), A2($author$project$Combine$ignore, $author$project$Combine$string("="), A2($author$project$Combine$andMap, $author$project$Combine$many(A2($author$project$Combine$ignore, $author$project$Combine$maybe($author$project$Elm$Parser$Layout$layout), $author$project$Elm$Parser$Declarations$functionArgument)), $author$project$Combine$succeed(F2(function(args, expr) {
            return A2($author$project$Elm$Syntax$Node$Node, $author$project$Elm$Syntax$Range$combine(_List_fromArray([$author$project$Elm$Syntax$Node$range(varPointer), $author$project$Elm$Syntax$Node$range(expr)])), A3($author$project$Elm$Syntax$Expression$FunctionImplementation, varPointer, args, expr));
          }))))));
        };
        var functionWithoutSignature = function(varPointer) {
          return A2($author$project$Combine$map, A2($author$project$Elm$Syntax$Expression$Function, $elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing), functionImplementationFromVarPointer(varPointer));
        };
        var fromParts = F2(function(sig, decl) {
          return {
            declaration: decl,
            documentation: $elm$core$Maybe$Nothing,
            signature: $elm$core$Maybe$Just(sig)
          };
        });
        var functionWithSignature = function(varPointer) {
          return A2($author$project$Combine$andThen, function(sig) {
            return A2($author$project$Combine$map, fromParts(sig), A2($author$project$Combine$andThen, functionImplementationFromVarPointer, A2($author$project$Combine$ignore, $author$project$Combine$maybe($author$project$Elm$Parser$Layout$layout), A2($author$project$Combine$continueWith, $author$project$Elm$Parser$Node$parser($author$project$Elm$Parser$Tokens$functionName), $author$project$Combine$maybe($author$project$Elm$Parser$Layout$layoutStrict)))));
          }, $author$project$Elm$Parser$Declarations$functionSignatureFromVarPointer(varPointer));
        };
        return $author$project$Combine$choice(_List_fromArray([functionWithSignature(pointer), functionWithoutSignature(pointer)]));
      };
      var $author$project$Elm$Parser$Declarations$letDestructuringDeclarationWithPattern = function(p) {
        return $author$project$Combine$lazy(function(_v7) {
          return A2($author$project$Combine$andMap, $author$project$Elm$Parser$Declarations$cyclic$expression(), A2($author$project$Combine$ignore, $author$project$Elm$Parser$Layout$layout, A2($author$project$Combine$ignore, $author$project$Combine$string("="), A2($author$project$Combine$ignore, $author$project$Combine$maybe($author$project$Elm$Parser$Layout$layout), $author$project$Combine$succeed($author$project$Elm$Syntax$Expression$LetDestructuring(p))))));
        });
      };
      function $author$project$Elm$Parser$Declarations$cyclic$caseBlock() {
        return $author$project$Combine$lazy(function(_v23) {
          return A2($author$project$Combine$ignore, $author$project$Elm$Parser$Tokens$ofToken, A2($author$project$Combine$continueWith, $author$project$Elm$Parser$Declarations$cyclic$expression(), A2($author$project$Combine$continueWith, $author$project$Elm$Parser$Layout$layout, $author$project$Elm$Parser$Tokens$caseToken)));
        });
      }
      function $author$project$Elm$Parser$Declarations$cyclic$caseExpression() {
        return $author$project$Combine$lazy(function(_v21) {
          return A2($author$project$Combine$andThen, function(_v22) {
            var start = _v22.a;
            return A2($author$project$Combine$map, function(cb) {
              return A2($author$project$Elm$Syntax$Node$Node, $author$project$Elm$Syntax$Range$combine(A2($elm$core$List$cons, start, A2($elm$core$List$map, A2($elm$core$Basics$composeR, $elm$core$Tuple$second, $author$project$Elm$Syntax$Node$range), cb.cases))), $author$project$Elm$Syntax$Expression$CaseExpression(cb));
            }, A2($author$project$Combine$andMap, A2($author$project$Combine$continueWith, $author$project$Elm$Parser$Declarations$withIndentedState($author$project$Elm$Parser$Declarations$cyclic$caseStatements()), $author$project$Elm$Parser$Layout$layout), A2($author$project$Combine$andMap, $author$project$Elm$Parser$Declarations$cyclic$caseBlock(), $author$project$Combine$succeed($author$project$Elm$Syntax$Expression$CaseBlock))));
          }, $author$project$Elm$Parser$Node$parser($author$project$Combine$succeed(_Utils_Tuple0)));
        });
      }
      function $author$project$Elm$Parser$Declarations$cyclic$caseStatement() {
        return $author$project$Combine$lazy(function(_v20) {
          return A2($author$project$Combine$andMap, A2($author$project$Combine$continueWith, $author$project$Elm$Parser$Declarations$cyclic$expression(), A2($author$project$Combine$continueWith, $author$project$Combine$maybe($author$project$Elm$Parser$Layout$layout), A2($author$project$Combine$continueWith, $author$project$Combine$string("->"), $author$project$Combine$maybe(A2($author$project$Combine$or, $author$project$Elm$Parser$Layout$layout, $author$project$Elm$Parser$Layout$layoutStrict))))), A2($author$project$Combine$andMap, $author$project$Elm$Parser$Patterns$pattern, $author$project$Combine$succeed($elm$core$Tuple$pair)));
        });
      }
      function $author$project$Elm$Parser$Declarations$cyclic$caseStatements() {
        return $author$project$Combine$lazy(function(_v19) {
          var helper = function(last) {
            return $author$project$Combine$withState(function(s) {
              return $author$project$Combine$withLocation(function(l) {
                return _Utils_eq($author$project$Elm$Parser$State$expectedColumn(s), l.column) ? A2($author$project$Combine$map, function(c) {
                  return $author$project$Combine$Loop(A2($elm$core$List$cons, c, last));
                }, $author$project$Elm$Parser$Declarations$cyclic$caseStatement()) : $author$project$Combine$succeed($author$project$Combine$Done($elm$core$List$reverse(last)));
              });
            });
          };
          return A2($author$project$Combine$andThen, function(v) {
            return A2($author$project$Combine$loop, v, helper);
          }, A2($author$project$Combine$map, $elm$core$List$singleton, $author$project$Elm$Parser$Declarations$cyclic$caseStatement()));
        });
      }
      function $author$project$Elm$Parser$Declarations$cyclic$expression() {
        return $author$project$Combine$lazy(function(_v15) {
          return A2($author$project$Combine$andThen, function(first) {
            var complete = function(rest) {
              return $author$project$Combine$succeed(function() {
                if (!rest.b) {
                  return first;
                } else {
                  return A2($author$project$Elm$Syntax$Node$Node, $author$project$Elm$Syntax$Range$combine(A2($elm$core$List$cons, $author$project$Elm$Syntax$Node$range(first), A2($elm$core$List$map, $author$project$Elm$Syntax$Node$range, rest))), $author$project$Elm$Syntax$Expression$Application(A2($elm$core$List$cons, first, $elm$core$List$reverse(rest))));
                }
              }());
            };
            var promoter = function(rest) {
              return A2($author$project$Elm$Parser$Layout$optimisticLayoutWith, function(_v16) {
                return complete(rest);
              }, function(_v17) {
                return A2($author$project$Combine$or, A2($author$project$Combine$andThen, function(next) {
                  return promoter(A2($elm$core$List$cons, next, rest));
                }, $author$project$Elm$Parser$Declarations$cyclic$expressionNotApplication()), complete(rest));
              });
            };
            return promoter(_List_Nil);
          }, $author$project$Elm$Parser$Declarations$cyclic$expressionNotApplication());
        });
      }
      function $author$project$Elm$Parser$Declarations$cyclic$expressionNotApplication() {
        return $author$project$Combine$lazy(function(_v14) {
          return A2($author$project$Combine$andThen, $author$project$Elm$Parser$Declarations$liftRecordAccess, $author$project$Combine$choice(_List_fromArray([$author$project$Elm$Parser$Declarations$numberExpression, $author$project$Elm$Parser$Declarations$referenceExpression, $author$project$Elm$Parser$Declarations$cyclic$ifBlockExpression(), $author$project$Elm$Parser$Declarations$cyclic$tupledExpression(), $author$project$Elm$Parser$Declarations$recordAccessFunctionExpression, $author$project$Elm$Parser$Declarations$cyclic$operatorExpression(), $author$project$Elm$Parser$Declarations$cyclic$letExpression(), $author$project$Elm$Parser$Declarations$cyclic$lambdaExpression(), $author$project$Elm$Parser$Declarations$literalExpression, $author$project$Elm$Parser$Declarations$charLiteralExpression, $author$project$Elm$Parser$Declarations$cyclic$recordExpression(), $author$project$Elm$Parser$Declarations$glslExpression, $author$project$Elm$Parser$Declarations$cyclic$listExpression(), $author$project$Elm$Parser$Declarations$cyclic$caseExpression()])));
        });
      }
      function $author$project$Elm$Parser$Declarations$cyclic$ifBlockExpression() {
        return $author$project$Elm$Parser$Node$parser(A2($author$project$Combine$continueWith, $author$project$Combine$lazy(function(_v13) {
          return A2($author$project$Combine$andMap, A2($author$project$Combine$continueWith, $author$project$Elm$Parser$Declarations$cyclic$expression(), A2($author$project$Combine$continueWith, $author$project$Elm$Parser$Layout$layout, $author$project$Elm$Parser$Tokens$elseToken)), A2($author$project$Combine$ignore, $author$project$Combine$maybe($author$project$Elm$Parser$Layout$layout), A2($author$project$Combine$andMap, $author$project$Elm$Parser$Declarations$cyclic$expression(), A2($author$project$Combine$ignore, $author$project$Combine$maybe($author$project$Elm$Parser$Layout$layout), A2($author$project$Combine$ignore, $author$project$Elm$Parser$Tokens$thenToken, A2($author$project$Combine$ignore, $author$project$Combine$maybe($author$project$Elm$Parser$Layout$layout), A2($author$project$Combine$andMap, $author$project$Elm$Parser$Declarations$cyclic$expression(), A2($author$project$Combine$ignore, $author$project$Combine$maybe($author$project$Elm$Parser$Layout$layout), $author$project$Combine$succeed($author$project$Elm$Syntax$Expression$IfBlock)))))))));
        }), $author$project$Elm$Parser$Tokens$ifToken));
      }
      function $author$project$Elm$Parser$Declarations$cyclic$lambdaExpression() {
        return $author$project$Combine$lazy(function(_v12) {
          return $author$project$Elm$Parser$Node$parser(A2($author$project$Combine$andMap, A2($author$project$Combine$continueWith, $author$project$Elm$Parser$Declarations$cyclic$expression(), $author$project$Elm$Parser$Layout$maybeAroundBothSides($author$project$Combine$string("->"))), A2($author$project$Combine$andMap, A2($author$project$Combine$sepBy1, $author$project$Combine$maybe($author$project$Elm$Parser$Layout$layout), $author$project$Elm$Parser$Declarations$functionArgument), A2($author$project$Combine$ignore, $author$project$Combine$maybe($author$project$Elm$Parser$Layout$layout), A2($author$project$Combine$ignore, $author$project$Combine$string("\\"), $author$project$Combine$succeed(F2(function(args, expr) {
            return $author$project$Elm$Syntax$Expression$LambdaExpression(A2($author$project$Elm$Syntax$Expression$Lambda, args, expr));
          })))))));
        });
      }
      function $author$project$Elm$Parser$Declarations$cyclic$letBlock() {
        return $author$project$Combine$lazy(function(_v11) {
          return A2($author$project$Combine$ignore, A2($author$project$Combine$continueWith, $author$project$Combine$string("in"), $author$project$Combine$choice(_List_fromArray([$author$project$Elm$Parser$Layout$layout, $author$project$Elm$Parser$Whitespace$manySpaces]))), A2($author$project$Combine$continueWith, $author$project$Elm$Parser$Declarations$withIndentedState($author$project$Elm$Parser$Declarations$cyclic$letBody()), A2($author$project$Combine$continueWith, $author$project$Elm$Parser$Layout$layout, $author$project$Combine$string("let"))));
        });
      }
      function $author$project$Elm$Parser$Declarations$cyclic$letBody() {
        return $author$project$Combine$lazy(function(_v8) {
          var blockElement = A2($author$project$Combine$andThen, function(_v9) {
            var r = _v9.a;
            var p = _v9.b;
            if (p.$ === "VarPattern") {
              var v = p.a;
              return A2($author$project$Combine$map, $author$project$Elm$Syntax$Expression$LetFunction, $author$project$Elm$Parser$Declarations$functionWithNameNode(A2($author$project$Elm$Syntax$Node$Node, r, v)));
            } else {
              return $author$project$Elm$Parser$Declarations$letDestructuringDeclarationWithPattern(A2($author$project$Elm$Syntax$Node$Node, r, p));
            }
          }, $author$project$Elm$Parser$Patterns$pattern);
          return A2($author$project$Combine$andMap, $author$project$Combine$many(A2($author$project$Combine$ignore, $author$project$Combine$maybe($author$project$Elm$Parser$Layout$layout), $author$project$Elm$Parser$Node$parser(blockElement))), A2($author$project$Combine$andMap, $author$project$Elm$Parser$Node$parser(blockElement), $author$project$Combine$succeed($elm$core$List$cons)));
        });
      }
      function $author$project$Elm$Parser$Declarations$cyclic$letExpression() {
        return $author$project$Combine$lazy(function(_v6) {
          return $author$project$Elm$Parser$Node$parser(A2($author$project$Combine$andMap, A2($author$project$Combine$continueWith, $author$project$Elm$Parser$Declarations$cyclic$expression(), $author$project$Elm$Parser$Layout$layout), A2($author$project$Combine$andMap, $author$project$Elm$Parser$Declarations$cyclic$letBlock(), $author$project$Combine$succeed(function(decls) {
            return A2($elm$core$Basics$composeR, $author$project$Elm$Syntax$Expression$LetBlock(decls), $author$project$Elm$Syntax$Expression$LetExpression);
          }))));
        });
      }
      function $author$project$Elm$Parser$Declarations$cyclic$listExpression() {
        return $author$project$Combine$lazy(function(_v5) {
          var innerExpressions = A2($author$project$Combine$map, $author$project$Elm$Syntax$Expression$ListExpr, A2($author$project$Combine$andMap, $author$project$Combine$many(A2($author$project$Combine$continueWith, $author$project$Elm$Parser$Declarations$cyclic$expression(), A2($author$project$Combine$ignore, $author$project$Combine$maybe($author$project$Elm$Parser$Layout$layout), $author$project$Combine$string(",")))), A2($author$project$Combine$ignore, $author$project$Combine$maybe($author$project$Elm$Parser$Layout$layout), A2($author$project$Combine$andMap, $author$project$Elm$Parser$Declarations$cyclic$expression(), $author$project$Combine$succeed($elm$core$List$cons)))));
          return $author$project$Elm$Parser$Node$parser(A2($author$project$Combine$continueWith, $author$project$Combine$choice(_List_fromArray([A2($author$project$Combine$map, $elm$core$Basics$always($author$project$Elm$Syntax$Expression$ListExpr(_List_Nil)), $author$project$Combine$string("]")), A2($author$project$Combine$ignore, $author$project$Combine$string("]"), innerExpressions)])), A2($author$project$Combine$ignore, $author$project$Combine$maybe($author$project$Elm$Parser$Layout$layout), $author$project$Combine$string("["))));
        });
      }
      function $author$project$Elm$Parser$Declarations$cyclic$operatorExpression() {
        var negationExpression = $author$project$Combine$lazy(function(_v4) {
          return A2($author$project$Combine$map, $author$project$Elm$Syntax$Expression$Negation, A2($author$project$Combine$andThen, $author$project$Elm$Parser$Declarations$liftRecordAccess, $author$project$Combine$choice(_List_fromArray([$author$project$Elm$Parser$Declarations$referenceExpression, $author$project$Elm$Parser$Declarations$numberExpression, $author$project$Elm$Parser$Declarations$cyclic$tupledExpression()]))));
        });
        return $author$project$Combine$lazy(function(_v3) {
          return $author$project$Combine$choice(_List_fromArray([$author$project$Elm$Parser$Node$parser(A2($author$project$Combine$continueWith, $author$project$Combine$choice(_List_fromArray([negationExpression, A2($author$project$Combine$ignore, $author$project$Elm$Parser$Layout$layout, $author$project$Combine$succeed($author$project$Elm$Syntax$Expression$Operator("-")))])), $author$project$Combine$string("-"))), $author$project$Elm$Parser$Node$parser(A2($author$project$Combine$map, $author$project$Elm$Syntax$Expression$Operator, $author$project$Elm$Parser$Tokens$infixOperatorToken))]));
        });
      }
      function $author$project$Elm$Parser$Declarations$cyclic$recordExpression() {
        return $author$project$Elm$Parser$Node$parser($author$project$Combine$lazy(function(_v2) {
          var recordField = $author$project$Elm$Parser$Node$parser(A2($author$project$Combine$andMap, $author$project$Elm$Parser$Declarations$cyclic$expression(), A2($author$project$Combine$ignore, $author$project$Combine$maybe($author$project$Elm$Parser$Layout$layout), A2($author$project$Combine$ignore, $author$project$Combine$string("="), A2($author$project$Combine$ignore, $author$project$Combine$maybe($author$project$Elm$Parser$Layout$layout), A2($author$project$Combine$andMap, $author$project$Elm$Parser$Node$parser($author$project$Elm$Parser$Tokens$functionName), $author$project$Combine$succeed($elm$core$Tuple$pair)))))));
          var recordFields = A2($author$project$Combine$andMap, $author$project$Combine$many(A2($author$project$Combine$ignore, $author$project$Combine$maybe($author$project$Elm$Parser$Layout$layout), A2($author$project$Combine$continueWith, recordField, A2($author$project$Combine$ignore, $author$project$Combine$maybe($author$project$Elm$Parser$Layout$layout), $author$project$Combine$string(","))))), A2($author$project$Combine$ignore, $author$project$Combine$maybe($author$project$Elm$Parser$Layout$layout), A2($author$project$Combine$andMap, recordField, $author$project$Combine$succeed($elm$core$List$cons))));
          var recordUpdateSyntaxParser = function(fname) {
            return A2($author$project$Combine$ignore, $author$project$Combine$string("}"), A2($author$project$Combine$map, function(e) {
              return A2($author$project$Elm$Syntax$Expression$RecordUpdateExpression, fname, e);
            }, A2($author$project$Combine$continueWith, recordFields, A2($author$project$Combine$ignore, $author$project$Combine$maybe($author$project$Elm$Parser$Layout$layout), $author$project$Combine$string("|")))));
          };
          var recordContents = A2($author$project$Combine$andThen, function(fname) {
            return $author$project$Combine$choice(_List_fromArray([recordUpdateSyntaxParser(fname), A2($author$project$Combine$andThen, function(fieldUpdate) {
              return $author$project$Combine$choice(_List_fromArray([A2($author$project$Combine$map, $elm$core$Basics$always($author$project$Elm$Syntax$Expression$RecordExpr(_List_fromArray([fieldUpdate]))), $author$project$Combine$string("}")), A2($author$project$Combine$ignore, $author$project$Combine$string("}"), A2($author$project$Combine$map, function(fieldUpdates) {
                return $author$project$Elm$Syntax$Expression$RecordExpr(A2($elm$core$List$cons, fieldUpdate, fieldUpdates));
              }, A2($author$project$Combine$continueWith, recordFields, A2($author$project$Combine$ignore, $author$project$Combine$maybe($author$project$Elm$Parser$Layout$layout), $author$project$Combine$string(",")))))]));
            }, A2($author$project$Combine$ignore, $author$project$Combine$maybe($author$project$Elm$Parser$Layout$layout), A2($author$project$Combine$continueWith, A2($author$project$Combine$map, function(e) {
              return A3($author$project$Elm$Syntax$Node$combine, $elm$core$Tuple$pair, fname, e);
            }, $author$project$Elm$Parser$Declarations$cyclic$expression()), A2($author$project$Combine$ignore, $author$project$Combine$maybe($author$project$Elm$Parser$Layout$layout), $author$project$Combine$string("=")))))]));
          }, A2($author$project$Combine$ignore, $author$project$Combine$maybe($author$project$Elm$Parser$Layout$layout), $author$project$Elm$Parser$Node$parser($author$project$Elm$Parser$Tokens$functionName)));
          return A2($author$project$Combine$continueWith, $author$project$Combine$choice(_List_fromArray([A2($author$project$Combine$map, $elm$core$Basics$always($author$project$Elm$Syntax$Expression$RecordExpr(_List_Nil)), $author$project$Combine$string("}")), recordContents])), A2($author$project$Combine$ignore, $author$project$Combine$maybe($author$project$Elm$Parser$Layout$layout), $author$project$Combine$string("{")));
        }));
      }
      function $author$project$Elm$Parser$Declarations$cyclic$tupledExpression() {
        return $author$project$Combine$lazy(function(_v0) {
          var commaSep = $author$project$Combine$many(A2($author$project$Combine$ignore, $author$project$Combine$maybe($author$project$Elm$Parser$Layout$layout), A2($author$project$Combine$continueWith, $author$project$Elm$Parser$Declarations$cyclic$expression(), A2($author$project$Combine$ignore, $author$project$Combine$maybe($author$project$Elm$Parser$Layout$layout), $author$project$Combine$string(",")))));
          var closingParen = $author$project$Combine$fromCore($elm$parser$Parser$symbol(")"));
          var asExpression = F2(function(x, xs) {
            if (!xs.b) {
              return $author$project$Elm$Syntax$Expression$ParenthesizedExpression(x);
            } else {
              return $author$project$Elm$Syntax$Expression$TupledExpression(A2($elm$core$List$cons, x, xs));
            }
          });
          var nested = A2($author$project$Combine$andMap, commaSep, A2($author$project$Combine$ignore, $author$project$Combine$maybe($author$project$Elm$Parser$Layout$layout), A2($author$project$Combine$andMap, $author$project$Elm$Parser$Declarations$cyclic$expression(), A2($author$project$Combine$ignore, $author$project$Combine$maybe($author$project$Elm$Parser$Layout$layout), $author$project$Combine$succeed(asExpression)))));
          return $author$project$Elm$Parser$Node$parser(A2($author$project$Combine$continueWith, $author$project$Combine$choice(_List_fromArray([A2($author$project$Combine$map, $elm$core$Basics$always($author$project$Elm$Syntax$Expression$UnitExpr), closingParen), $author$project$Combine$backtrackable(A2($author$project$Combine$map, $author$project$Elm$Syntax$Expression$PrefixOperator, A2($author$project$Combine$ignore, closingParen, $author$project$Elm$Parser$Tokens$prefixOperatorToken))), A2($author$project$Combine$ignore, closingParen, nested)])), $author$project$Combine$fromCore($elm$parser$Parser$symbol("("))));
        });
      }
      try {
        var $author$project$Elm$Parser$Declarations$caseBlock = $author$project$Elm$Parser$Declarations$cyclic$caseBlock();
        $author$project$Elm$Parser$Declarations$cyclic$caseBlock = function() {
          return $author$project$Elm$Parser$Declarations$caseBlock;
        };
        var $author$project$Elm$Parser$Declarations$caseExpression = $author$project$Elm$Parser$Declarations$cyclic$caseExpression();
        $author$project$Elm$Parser$Declarations$cyclic$caseExpression = function() {
          return $author$project$Elm$Parser$Declarations$caseExpression;
        };
        var $author$project$Elm$Parser$Declarations$caseStatement = $author$project$Elm$Parser$Declarations$cyclic$caseStatement();
        $author$project$Elm$Parser$Declarations$cyclic$caseStatement = function() {
          return $author$project$Elm$Parser$Declarations$caseStatement;
        };
        var $author$project$Elm$Parser$Declarations$caseStatements = $author$project$Elm$Parser$Declarations$cyclic$caseStatements();
        $author$project$Elm$Parser$Declarations$cyclic$caseStatements = function() {
          return $author$project$Elm$Parser$Declarations$caseStatements;
        };
        var $author$project$Elm$Parser$Declarations$expression = $author$project$Elm$Parser$Declarations$cyclic$expression();
        $author$project$Elm$Parser$Declarations$cyclic$expression = function() {
          return $author$project$Elm$Parser$Declarations$expression;
        };
        var $author$project$Elm$Parser$Declarations$expressionNotApplication = $author$project$Elm$Parser$Declarations$cyclic$expressionNotApplication();
        $author$project$Elm$Parser$Declarations$cyclic$expressionNotApplication = function() {
          return $author$project$Elm$Parser$Declarations$expressionNotApplication;
        };
        var $author$project$Elm$Parser$Declarations$ifBlockExpression = $author$project$Elm$Parser$Declarations$cyclic$ifBlockExpression();
        $author$project$Elm$Parser$Declarations$cyclic$ifBlockExpression = function() {
          return $author$project$Elm$Parser$Declarations$ifBlockExpression;
        };
        var $author$project$Elm$Parser$Declarations$lambdaExpression = $author$project$Elm$Parser$Declarations$cyclic$lambdaExpression();
        $author$project$Elm$Parser$Declarations$cyclic$lambdaExpression = function() {
          return $author$project$Elm$Parser$Declarations$lambdaExpression;
        };
        var $author$project$Elm$Parser$Declarations$letBlock = $author$project$Elm$Parser$Declarations$cyclic$letBlock();
        $author$project$Elm$Parser$Declarations$cyclic$letBlock = function() {
          return $author$project$Elm$Parser$Declarations$letBlock;
        };
        var $author$project$Elm$Parser$Declarations$letBody = $author$project$Elm$Parser$Declarations$cyclic$letBody();
        $author$project$Elm$Parser$Declarations$cyclic$letBody = function() {
          return $author$project$Elm$Parser$Declarations$letBody;
        };
        var $author$project$Elm$Parser$Declarations$letExpression = $author$project$Elm$Parser$Declarations$cyclic$letExpression();
        $author$project$Elm$Parser$Declarations$cyclic$letExpression = function() {
          return $author$project$Elm$Parser$Declarations$letExpression;
        };
        var $author$project$Elm$Parser$Declarations$listExpression = $author$project$Elm$Parser$Declarations$cyclic$listExpression();
        $author$project$Elm$Parser$Declarations$cyclic$listExpression = function() {
          return $author$project$Elm$Parser$Declarations$listExpression;
        };
        var $author$project$Elm$Parser$Declarations$operatorExpression = $author$project$Elm$Parser$Declarations$cyclic$operatorExpression();
        $author$project$Elm$Parser$Declarations$cyclic$operatorExpression = function() {
          return $author$project$Elm$Parser$Declarations$operatorExpression;
        };
        var $author$project$Elm$Parser$Declarations$recordExpression = $author$project$Elm$Parser$Declarations$cyclic$recordExpression();
        $author$project$Elm$Parser$Declarations$cyclic$recordExpression = function() {
          return $author$project$Elm$Parser$Declarations$recordExpression;
        };
        var $author$project$Elm$Parser$Declarations$tupledExpression = $author$project$Elm$Parser$Declarations$cyclic$tupledExpression();
        $author$project$Elm$Parser$Declarations$cyclic$tupledExpression = function() {
          return $author$project$Elm$Parser$Declarations$tupledExpression;
        };
      } catch ($) {
        throw "Some top-level definitions from `Elm.Parser.Declarations` are causing infinite recursion:\n\n  ┌─────┐\n  │    caseBlock\n  │     ↓\n  │    caseExpression\n  │     ↓\n  │    caseStatement\n  │     ↓\n  │    caseStatements\n  │     ↓\n  │    expression\n  │     ↓\n  │    expressionNotApplication\n  │     ↓\n  │    functionWithNameNode\n  │     ↓\n  │    ifBlockExpression\n  │     ↓\n  │    lambdaExpression\n  │     ↓\n  │    letBlock\n  │     ↓\n  │    letBody\n  │     ↓\n  │    letDestructuringDeclarationWithPattern\n  │     ↓\n  │    letExpression\n  │     ↓\n  │    listExpression\n  │     ↓\n  │    operatorExpression\n  │     ↓\n  │    recordExpression\n  │     ↓\n  │    tupledExpression\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.1/bad-recursion to learn how to fix it!";
      }
      var $author$project$Elm$Parser$Declarations$destructuringDeclaration = $author$project$Combine$lazy(function(_v0) {
        return A2($author$project$Combine$andMap, $author$project$Elm$Parser$Declarations$expression, A2($author$project$Combine$ignore, $author$project$Elm$Parser$Layout$layout, A2($author$project$Combine$ignore, $author$project$Combine$string("="), A2($author$project$Combine$andMap, $author$project$Elm$Parser$Patterns$pattern, $author$project$Combine$succeed(F2(function(x, y) {
          return A3($author$project$Elm$Syntax$Node$combine, $author$project$Elm$Syntax$Declaration$Destructuring, x, y);
        }))))));
      });
      var $author$project$Elm$Syntax$Declaration$FunctionDeclaration = function(a) {
        return {
          $: "FunctionDeclaration",
          a
        };
      };
      var $author$project$Elm$Syntax$Expression$functionRange = function(_function) {
        return $author$project$Elm$Syntax$Range$combine(_List_fromArray([function() {
          var _v0 = _function.documentation;
          if (_v0.$ === "Just") {
            var documentation = _v0.a;
            return $author$project$Elm$Syntax$Node$range(documentation);
          } else {
            return A2($elm$core$Maybe$withDefault, function(_v3) {
              var r = _v3.a;
              return r;
            }($author$project$Elm$Syntax$Node$value(_function.declaration).name), A2($elm$core$Maybe$map, function(_v1) {
              var value = _v1.b;
              var _v2 = value.name;
              var r = _v2.a;
              return r;
            }, _function.signature));
          }
        }(), function(_v4) {
          var r = _v4.a;
          return r;
        }($author$project$Elm$Syntax$Node$value(_function.declaration).expression)]));
      };
      var $author$project$Elm$Parser$Declarations$function = $author$project$Combine$lazy(function(_v0) {
        return A2($author$project$Combine$map, function(f) {
          return A2($author$project$Elm$Syntax$Node$Node, $author$project$Elm$Syntax$Expression$functionRange(f), $author$project$Elm$Syntax$Declaration$FunctionDeclaration(f));
        }, A2($author$project$Combine$andThen, $author$project$Elm$Parser$Declarations$functionWithNameNode, A2($author$project$Combine$ignore, $author$project$Combine$maybe($author$project$Elm$Parser$Layout$layout), $author$project$Elm$Parser$Node$parser($author$project$Elm$Parser$Tokens$functionName))));
      });
      var $author$project$Elm$Syntax$Declaration$InfixDeclaration = function(a) {
        return {
          $: "InfixDeclaration",
          a
        };
      };
      var $author$project$Elm$Syntax$Infix$Infix = F4(function(direction, precedence, operator, _function) {
        return {
          direction,
          _function,
          operator,
          precedence
        };
      });
      var $author$project$Elm$Syntax$Infix$Left = {
        $: "Left"
      };
      var $author$project$Elm$Syntax$Infix$Non = {
        $: "Non"
      };
      var $author$project$Elm$Syntax$Infix$Right = {
        $: "Right"
      };
      var $author$project$Elm$Parser$Infix$infixDirection = $author$project$Combine$choice(_List_fromArray([A2($author$project$Combine$ignore, $author$project$Combine$string("right"), $author$project$Combine$succeed($author$project$Elm$Syntax$Infix$Right)), A2($author$project$Combine$ignore, $author$project$Combine$string("left"), $author$project$Combine$succeed($author$project$Elm$Syntax$Infix$Left)), A2($author$project$Combine$ignore, $author$project$Combine$string("non"), $author$project$Combine$succeed($author$project$Elm$Syntax$Infix$Non))]));
      var $author$project$Combine$Num$int = $author$project$Combine$fromCore($elm$parser$Parser$int);
      var $author$project$Elm$Parser$Infix$infixDefinition = A2($author$project$Combine$andMap, $author$project$Elm$Parser$Node$parser($author$project$Elm$Parser$Tokens$functionName), A2($author$project$Combine$ignore, $author$project$Elm$Parser$Layout$layout, A2($author$project$Combine$ignore, $author$project$Combine$string("="), A2($author$project$Combine$ignore, $author$project$Elm$Parser$Layout$layout, A2($author$project$Combine$andMap, $author$project$Elm$Parser$Node$parser($author$project$Combine$parens($author$project$Elm$Parser$Tokens$prefixOperatorToken)), A2($author$project$Combine$ignore, $author$project$Elm$Parser$Layout$layout, A2($author$project$Combine$andMap, $author$project$Elm$Parser$Node$parser($author$project$Combine$Num$int), A2($author$project$Combine$ignore, $author$project$Elm$Parser$Layout$layout, A2($author$project$Combine$andMap, $author$project$Elm$Parser$Node$parser($author$project$Elm$Parser$Infix$infixDirection), A2($author$project$Combine$ignore, $author$project$Elm$Parser$Layout$layout, A2($author$project$Combine$ignore, $author$project$Combine$fromCore($elm$parser$Parser$keyword("infix")), $author$project$Combine$succeed($author$project$Elm$Syntax$Infix$Infix))))))))))));
      var $author$project$Elm$Parser$Ranges$asPointerLocation = function(_v0) {
        var line = _v0.line;
        var column = _v0.column;
        return {
          column,
          row: line
        };
      };
      var $author$project$Elm$Parser$Ranges$withCurrentPoint = function(p) {
        return $author$project$Combine$withLocation(function(start) {
          var k = $author$project$Elm$Parser$Ranges$asPointerLocation(start);
          return p({
            end: k,
            start: k
          });
        });
      };
      var $author$project$Elm$Parser$Declarations$infixDeclaration = $author$project$Elm$Parser$Ranges$withCurrentPoint(function(current) {
        return A2($author$project$Combine$map, function(inf) {
          return A2($author$project$Elm$Syntax$Node$Node, $author$project$Elm$Syntax$Range$combine(_List_fromArray([current, $author$project$Elm$Syntax$Node$range(inf._function)])), $author$project$Elm$Syntax$Declaration$InfixDeclaration(inf));
        }, $author$project$Elm$Parser$Infix$infixDefinition);
      });
      var $author$project$Elm$Syntax$Declaration$PortDeclaration = function(a) {
        return {
          $: "PortDeclaration",
          a
        };
      };
      var $author$project$Elm$Parser$Tokens$portToken = $author$project$Combine$string("port");
      var $author$project$Elm$Parser$Declarations$signature = A2($author$project$Combine$andMap, A2($author$project$Combine$continueWith, $author$project$Elm$Parser$TypeAnnotation$typeAnnotation, A2($author$project$Combine$continueWith, $author$project$Combine$maybe($author$project$Elm$Parser$Layout$layout), $author$project$Elm$Parser$Layout$maybeAroundBothSides($author$project$Combine$string(":")))), A2($author$project$Combine$andMap, $author$project$Elm$Parser$Node$parser($author$project$Elm$Parser$Tokens$functionName), $author$project$Combine$succeed($author$project$Elm$Syntax$Signature$Signature)));
      var $author$project$Elm$Parser$Declarations$portDeclaration = $author$project$Elm$Parser$Ranges$withCurrentPoint(function(current) {
        return A2($author$project$Combine$map, function(sig) {
          return A2($author$project$Elm$Syntax$Node$Node, $author$project$Elm$Syntax$Range$combine(_List_fromArray([current, function(_v0) {
            var r = _v0.a;
            return r;
          }(sig.typeAnnotation)])), $author$project$Elm$Syntax$Declaration$PortDeclaration(sig));
        }, A2($author$project$Combine$continueWith, $author$project$Elm$Parser$Declarations$signature, A2($author$project$Combine$ignore, $author$project$Elm$Parser$Layout$layout, $author$project$Elm$Parser$Tokens$portToken)));
      });
      var $author$project$Elm$Parser$Typings$DefinedAlias = F2(function(a, b) {
        return {
          $: "DefinedAlias",
          a,
          b
        };
      });
      var $author$project$Elm$Parser$Typings$DefinedType = F2(function(a, b) {
        return {
          $: "DefinedType",
          a,
          b
        };
      });
      var $author$project$Elm$Syntax$Type$Type = F4(function(documentation, name, generics, constructors) {
        return {
          constructors,
          documentation,
          generics,
          name
        };
      });
      var $author$project$Elm$Syntax$TypeAlias$TypeAlias = F4(function(documentation, name, generics, typeAnnotation) {
        return {
          documentation,
          generics,
          name,
          typeAnnotation
        };
      });
      var $author$project$Elm$Parser$Typings$genericList = $author$project$Combine$many(A2($author$project$Combine$ignore, $author$project$Elm$Parser$Layout$layout, $author$project$Elm$Parser$Node$parser($author$project$Elm$Parser$Tokens$functionName)));
      var $author$project$Elm$Parser$Typings$typePrefix = A2($author$project$Combine$continueWith, $author$project$Elm$Parser$Layout$layout, $author$project$Combine$string("type"));
      var $author$project$Elm$Syntax$Type$ValueConstructor = F2(function(name, _arguments) {
        return {
          _arguments,
          name
        };
      });
      var $author$project$Elm$Parser$TypeAnnotation$typeAnnotationNonGreedy = $author$project$Combine$choice(_List_fromArray([$author$project$Elm$Parser$TypeAnnotation$parensTypeAnnotation, $author$project$Elm$Parser$TypeAnnotation$typedTypeAnnotation($author$project$Elm$Parser$TypeAnnotation$Lazy), $author$project$Elm$Parser$TypeAnnotation$genericTypeAnnotation, $author$project$Elm$Parser$TypeAnnotation$recordTypeAnnotation]));
      var $author$project$Elm$Parser$Typings$valueConstructor = A2($author$project$Combine$andThen, function(tnn) {
        var range = tnn.a;
        var complete = function(args) {
          return $author$project$Combine$succeed(A2($author$project$Elm$Syntax$Node$Node, $author$project$Elm$Syntax$Range$combine(A2($elm$core$List$cons, range, A2($elm$core$List$map, $author$project$Elm$Syntax$Node$range, args))), A2($author$project$Elm$Syntax$Type$ValueConstructor, tnn, args)));
        };
        var argHelper = function(xs) {
          return A2($author$project$Combine$continueWith, $author$project$Combine$choice(_List_fromArray([A2($author$project$Combine$andThen, function(ta) {
            return A2($author$project$Elm$Parser$Layout$optimisticLayoutWith, function(_v0) {
              return $author$project$Combine$succeed($elm$core$List$reverse(A2($elm$core$List$cons, ta, xs)));
            }, function(_v1) {
              return argHelper(A2($elm$core$List$cons, ta, xs));
            });
          }, $author$project$Elm$Parser$TypeAnnotation$typeAnnotationNonGreedy), $author$project$Combine$succeed($elm$core$List$reverse(xs))])), $author$project$Combine$succeed(_Utils_Tuple0));
        };
        return A2($author$project$Elm$Parser$Layout$optimisticLayoutWith, function(_v2) {
          return complete(_List_Nil);
        }, function(_v3) {
          return A2($author$project$Combine$andThen, complete, argHelper(_List_Nil));
        });
      }, A2($author$project$Combine$continueWith, $author$project$Elm$Parser$Node$parser($author$project$Elm$Parser$Tokens$typeName), $author$project$Combine$succeed($author$project$Elm$Syntax$Type$ValueConstructor)));
      var $author$project$Elm$Parser$Typings$valueConstructors = A2($author$project$Combine$sepBy1, A2($author$project$Combine$ignore, $author$project$Combine$maybe($author$project$Elm$Parser$Layout$layout), $author$project$Combine$string("|")), $author$project$Elm$Parser$Typings$valueConstructor);
      var $author$project$Elm$Parser$Typings$typeDefinition = $author$project$Elm$Parser$Ranges$withCurrentPoint(function(start) {
        return A2($author$project$Combine$continueWith, $author$project$Combine$choice(_List_fromArray([A2($author$project$Combine$map, function(typeAlias) {
          return A2($author$project$Elm$Parser$Typings$DefinedAlias, $author$project$Elm$Syntax$Range$combine(_List_fromArray([start, $author$project$Elm$Syntax$Node$range(typeAlias.typeAnnotation)])), typeAlias);
        }, A2($author$project$Combine$andMap, $author$project$Elm$Parser$TypeAnnotation$typeAnnotation, A2($author$project$Combine$ignore, $author$project$Elm$Parser$Layout$layout, A2($author$project$Combine$ignore, $author$project$Combine$string("="), A2($author$project$Combine$andMap, $author$project$Elm$Parser$Typings$genericList, A2($author$project$Combine$andMap, A2($author$project$Combine$ignore, $author$project$Elm$Parser$Layout$layout, $author$project$Elm$Parser$Node$parser($author$project$Elm$Parser$Tokens$typeName)), A2($author$project$Combine$ignore, A2($author$project$Combine$continueWith, $author$project$Elm$Parser$Layout$layout, $author$project$Combine$string("alias")), $author$project$Combine$succeed($author$project$Elm$Syntax$TypeAlias$TypeAlias($elm$core$Maybe$Nothing))))))))), A2($author$project$Combine$map, function(tipe) {
          return A2($author$project$Elm$Parser$Typings$DefinedType, $author$project$Elm$Syntax$Range$combine(A2($elm$core$List$cons, start, A2($elm$core$List$map, function(_v0) {
            var r = _v0.a;
            return r;
          }, tipe.constructors))), tipe);
        }, A2($author$project$Combine$andMap, $author$project$Elm$Parser$Typings$valueConstructors, A2($author$project$Combine$ignore, A2($author$project$Combine$ignore, $author$project$Combine$maybe($author$project$Elm$Parser$Layout$layout), $author$project$Combine$string("=")), A2($author$project$Combine$ignore, $author$project$Combine$maybe($author$project$Elm$Parser$Layout$layout), A2($author$project$Combine$andMap, $author$project$Elm$Parser$Typings$genericList, A2($author$project$Combine$ignore, $author$project$Combine$maybe($author$project$Elm$Parser$Layout$layout), A2($author$project$Combine$andMap, $author$project$Elm$Parser$Node$parser($author$project$Elm$Parser$Tokens$typeName), $author$project$Combine$succeed($author$project$Elm$Syntax$Type$Type($elm$core$Maybe$Nothing)))))))))])), $author$project$Elm$Parser$Typings$typePrefix);
      });
      var $author$project$Elm$Parser$Declarations$declaration = $author$project$Combine$lazy(function(_v0) {
        return $author$project$Combine$choice(_List_fromArray([$author$project$Elm$Parser$Declarations$infixDeclaration, $author$project$Elm$Parser$Declarations$function, A2($author$project$Combine$map, function(v) {
          if (v.$ === "DefinedType") {
            var r = v.a;
            var t = v.b;
            return A2($author$project$Elm$Syntax$Node$Node, r, $author$project$Elm$Syntax$Declaration$CustomTypeDeclaration(t));
          } else {
            var r = v.a;
            var a = v.b;
            return A2($author$project$Elm$Syntax$Node$Node, r, $author$project$Elm$Syntax$Declaration$AliasDeclaration(a));
          }
        }, $author$project$Elm$Parser$Typings$typeDefinition), $author$project$Elm$Parser$Declarations$portDeclaration, $author$project$Elm$Parser$Declarations$destructuringDeclaration]));
      });
      var $author$project$Elm$Parser$File$fileDeclarations = $author$project$Combine$many(A2($author$project$Combine$ignore, $author$project$Combine$maybe($author$project$Elm$Parser$Layout$layoutStrict), $author$project$Elm$Parser$Declarations$declaration));
      var $author$project$Elm$Syntax$Import$Import = F3(function(moduleName, moduleAlias, exposingList) {
        return {
          exposingList,
          moduleAlias,
          moduleName
        };
      });
      var $author$project$Elm$Parser$Tokens$asToken = $author$project$Combine$fromCore($elm$parser$Parser$keyword("as"));
      var $author$project$Elm$Syntax$Exposing$All = function(a) {
        return {
          $: "All",
          a
        };
      };
      var $author$project$Elm$Syntax$Exposing$Explicit = function(a) {
        return {
          $: "Explicit",
          a
        };
      };
      var $author$project$Elm$Syntax$Exposing$FunctionExpose = function(a) {
        return {
          $: "FunctionExpose",
          a
        };
      };
      var $author$project$Elm$Parser$Expose$functionExpose = $author$project$Elm$Parser$Node$parser(A2($author$project$Combine$map, $author$project$Elm$Syntax$Exposing$FunctionExpose, $author$project$Elm$Parser$Tokens$functionName));
      var $author$project$Elm$Syntax$Exposing$InfixExpose = function(a) {
        return {
          $: "InfixExpose",
          a
        };
      };
      var $author$project$Combine$while = function(pred) {
        return $author$project$Combine$Parser(function(state) {
          return A2($elm$parser$Parser$map, function(x) {
            return _Utils_Tuple2(state, x);
          }, $elm$parser$Parser$getChompedString($elm$parser$Parser$chompWhile(pred)));
        });
      };
      var $author$project$Elm$Parser$Expose$infixExpose = $author$project$Combine$lazy(function(_v0) {
        return $author$project$Elm$Parser$Node$parser(A2($author$project$Combine$map, $author$project$Elm$Syntax$Exposing$InfixExpose, $author$project$Combine$parens($author$project$Combine$while($elm$core$Basics$neq(_Utils_chr(")"))))));
      });
      var $author$project$Elm$Syntax$Exposing$ExposedType = F2(function(name, open) {
        return {
          name,
          open
        };
      });
      var $author$project$Elm$Syntax$Exposing$TypeExpose = function(a) {
        return {
          $: "TypeExpose",
          a
        };
      };
      var $author$project$Elm$Syntax$Exposing$TypeOrAliasExpose = function(a) {
        return {
          $: "TypeOrAliasExpose",
          a
        };
      };
      var $author$project$Elm$Parser$Expose$exposedType = A2($author$project$Combine$andThen, function(tipe) {
        return $author$project$Combine$choice(_List_fromArray([A2($author$project$Combine$map, A2($elm$core$Basics$composeR, $author$project$Elm$Syntax$Node$range, A2($elm$core$Basics$composeR, $elm$core$Maybe$Just, A2($elm$core$Basics$composeR, function(v) {
          return A2($author$project$Elm$Syntax$Exposing$ExposedType, tipe, v);
        }, $author$project$Elm$Syntax$Exposing$TypeExpose))), $author$project$Elm$Parser$Node$parser($author$project$Combine$parens($author$project$Elm$Parser$Layout$maybeAroundBothSides($author$project$Combine$string(".."))))), $author$project$Combine$succeed($author$project$Elm$Syntax$Exposing$TypeOrAliasExpose(tipe))]));
      }, A2($author$project$Combine$ignore, $author$project$Combine$maybe($author$project$Elm$Parser$Layout$layout), A2($author$project$Combine$andMap, $author$project$Elm$Parser$Tokens$typeName, $author$project$Combine$succeed($elm$core$Basics$identity))));
      var $author$project$Elm$Parser$Expose$typeExpose = $author$project$Combine$lazy(function(_v0) {
        return $author$project$Elm$Parser$Node$parser($author$project$Elm$Parser$Expose$exposedType);
      });
      var $author$project$Elm$Parser$Expose$exposable = $author$project$Combine$lazy(function(_v0) {
        return $author$project$Combine$choice(_List_fromArray([$author$project$Elm$Parser$Expose$typeExpose, $author$project$Elm$Parser$Expose$infixExpose, $author$project$Elm$Parser$Expose$functionExpose]));
      });
      var $author$project$Elm$Parser$Ranges$withRange = function(p) {
        return $author$project$Combine$withLocation(function(start) {
          return A2($author$project$Combine$andMap, $author$project$Combine$withLocation(function(end) {
            return $author$project$Combine$succeed({
              end: $author$project$Elm$Parser$Ranges$asPointerLocation(end),
              start: $author$project$Elm$Parser$Ranges$asPointerLocation(start)
            });
          }), p);
        });
      };
      var $author$project$Elm$Parser$Expose$exposingListInner = $author$project$Combine$lazy(function(_v0) {
        return A2($author$project$Combine$or, $author$project$Elm$Parser$Ranges$withRange(A2($author$project$Combine$ignore, $author$project$Elm$Parser$Layout$maybeAroundBothSides($author$project$Combine$string("..")), $author$project$Combine$succeed($author$project$Elm$Syntax$Exposing$All))), A2($author$project$Combine$map, $author$project$Elm$Syntax$Exposing$Explicit, A2($author$project$Combine$sepBy, $author$project$Combine$Char$char(_Utils_chr(",")), $author$project$Elm$Parser$Layout$maybeAroundBothSides($author$project$Elm$Parser$Expose$exposable))));
      });
      var $author$project$Elm$Parser$Expose$exposeListWith = $author$project$Combine$parens(A2($author$project$Combine$ignore, $author$project$Elm$Parser$Layout$optimisticLayout, A2($author$project$Combine$continueWith, $author$project$Elm$Parser$Expose$exposingListInner, $author$project$Elm$Parser$Layout$optimisticLayout)));
      var $author$project$Elm$Parser$Tokens$exposingToken = $author$project$Combine$string("exposing");
      var $author$project$Elm$Parser$Expose$exposeDefinition = A2($author$project$Combine$continueWith, $author$project$Elm$Parser$Expose$exposeListWith, A2($author$project$Combine$continueWith, $author$project$Combine$maybe($author$project$Elm$Parser$Layout$layout), $author$project$Elm$Parser$Tokens$exposingToken));
      var $author$project$Elm$Parser$Tokens$importToken = $author$project$Combine$fromCore($elm$parser$Parser$keyword("import"));
      var $author$project$Elm$Parser$Base$moduleName = A2($author$project$Combine$sepBy1, $author$project$Combine$string("."), $author$project$Elm$Parser$Tokens$typeName);
      var $author$project$Elm$Parser$Imports$setupNode = F2(function(start, imp) {
        var allRanges = _List_fromArray([$elm$core$Maybe$Just(start), $elm$core$Maybe$Just($author$project$Elm$Syntax$Node$range(imp.moduleName)), A2($elm$core$Maybe$map, $author$project$Elm$Syntax$Node$range, imp.exposingList), A2($elm$core$Maybe$map, $author$project$Elm$Syntax$Node$range, imp.moduleAlias)]);
        return A2($author$project$Elm$Syntax$Node$Node, $author$project$Elm$Syntax$Range$combine(A2($elm$core$List$filterMap, $elm$core$Basics$identity, allRanges)), imp);
      });
      var $author$project$Elm$Parser$Imports$importDefinition = function() {
        var parseExposingDefinition = F2(function(mod, asDef) {
          return $author$project$Combine$choice(_List_fromArray([A2($author$project$Combine$map, A2($elm$core$Basics$composeR, $elm$core$Maybe$Just, A2($author$project$Elm$Syntax$Import$Import, mod, asDef)), $author$project$Elm$Parser$Node$parser($author$project$Elm$Parser$Expose$exposeDefinition)), $author$project$Combine$succeed(A3($author$project$Elm$Syntax$Import$Import, mod, asDef, $elm$core$Maybe$Nothing))]));
        });
        var importAndModuleName = A2($author$project$Combine$continueWith, $author$project$Elm$Parser$Node$parser($author$project$Elm$Parser$Base$moduleName), A2($author$project$Combine$continueWith, $author$project$Elm$Parser$Layout$layout, $author$project$Elm$Parser$Tokens$importToken));
        var asDefinition = A2($author$project$Combine$continueWith, $author$project$Elm$Parser$Node$parser($author$project$Elm$Parser$Base$moduleName), A2($author$project$Combine$continueWith, $author$project$Elm$Parser$Layout$layout, $author$project$Elm$Parser$Tokens$asToken));
        var parseAsDefinition = function(mod) {
          return $author$project$Combine$choice(_List_fromArray([A2($author$project$Combine$andThen, A2($elm$core$Basics$composeR, $elm$core$Maybe$Just, parseExposingDefinition(mod)), A2($author$project$Combine$ignore, $author$project$Elm$Parser$Layout$optimisticLayout, asDefinition)), A2(parseExposingDefinition, mod, $elm$core$Maybe$Nothing)]));
        };
        return A2($author$project$Combine$andThen, function(_v0) {
          var start = _v0.a;
          return A2($author$project$Combine$map, $author$project$Elm$Parser$Imports$setupNode(start), A2($author$project$Combine$andThen, parseAsDefinition, A2($author$project$Combine$ignore, $author$project$Elm$Parser$Layout$optimisticLayout, importAndModuleName)));
        }, $author$project$Elm$Parser$Node$parser($author$project$Combine$succeed(_Utils_Tuple0)));
      }();
      var $author$project$Elm$Syntax$Module$EffectModule = function(a) {
        return {
          $: "EffectModule",
          a
        };
      };
      var $author$project$Elm$Parser$Modules$effectWhereClause = A2($author$project$Combine$andMap, A2($author$project$Combine$continueWith, $author$project$Elm$Parser$Node$parser($author$project$Elm$Parser$Tokens$typeName), $author$project$Elm$Parser$Layout$maybeAroundBothSides($author$project$Combine$string("="))), A2($author$project$Combine$andMap, $author$project$Elm$Parser$Tokens$functionName, $author$project$Combine$succeed($elm$core$Tuple$pair)));
      var $author$project$Elm$Parser$Modules$whereBlock = A2($author$project$Combine$map, function(pairs) {
        return {
          command: A2($elm$core$Maybe$map, $elm$core$Tuple$second, $elm$core$List$head(A2($elm$core$List$filter, A2($elm$core$Basics$composeR, $elm$core$Tuple$first, $elm$core$Basics$eq("command")), pairs))),
          subscription: A2($elm$core$Maybe$map, $elm$core$Tuple$second, $elm$core$List$head(A2($elm$core$List$filter, A2($elm$core$Basics$composeR, $elm$core$Tuple$first, $elm$core$Basics$eq("subscription")), pairs)))
        };
      }, A3($author$project$Combine$between, $author$project$Combine$string("{"), $author$project$Combine$string("}"), A2($author$project$Combine$sepBy1, $author$project$Combine$string(","), $author$project$Elm$Parser$Layout$maybeAroundBothSides($author$project$Elm$Parser$Modules$effectWhereClause))));
      var $author$project$Elm$Parser$Modules$effectWhereClauses = A2($author$project$Combine$continueWith, $author$project$Elm$Parser$Modules$whereBlock, A2($author$project$Combine$continueWith, $author$project$Elm$Parser$Layout$layout, $author$project$Combine$string("where")));
      var $author$project$Elm$Parser$Tokens$moduleToken = $author$project$Combine$string("module");
      var $author$project$Elm$Parser$Modules$effectModuleDefinition = function() {
        var createEffectModule = F3(function(name, whereClauses, exp) {
          return $author$project$Elm$Syntax$Module$EffectModule({
            command: whereClauses.command,
            exposingList: exp,
            moduleName: name,
            subscription: whereClauses.subscription
          });
        });
        return A2($author$project$Combine$andMap, $author$project$Elm$Parser$Node$parser($author$project$Elm$Parser$Expose$exposeDefinition), A2($author$project$Combine$ignore, $author$project$Elm$Parser$Layout$layout, A2($author$project$Combine$andMap, $author$project$Elm$Parser$Modules$effectWhereClauses, A2($author$project$Combine$ignore, $author$project$Elm$Parser$Layout$layout, A2($author$project$Combine$andMap, $author$project$Elm$Parser$Node$parser($author$project$Elm$Parser$Base$moduleName), A2($author$project$Combine$ignore, $author$project$Elm$Parser$Layout$layout, A2($author$project$Combine$ignore, $author$project$Elm$Parser$Tokens$moduleToken, A2($author$project$Combine$ignore, $author$project$Elm$Parser$Layout$layout, A2($author$project$Combine$ignore, $author$project$Combine$string("effect"), $author$project$Combine$succeed(createEffectModule))))))))));
      }();
      var $author$project$Elm$Syntax$Module$DefaultModuleData = F2(function(moduleName, exposingList) {
        return {
          exposingList,
          moduleName
        };
      });
      var $author$project$Elm$Syntax$Module$NormalModule = function(a) {
        return {
          $: "NormalModule",
          a
        };
      };
      var $author$project$Elm$Parser$Modules$normalModuleDefinition = A2($author$project$Combine$map, $author$project$Elm$Syntax$Module$NormalModule, A2($author$project$Combine$andMap, $author$project$Elm$Parser$Node$parser($author$project$Elm$Parser$Expose$exposeDefinition), A2($author$project$Combine$ignore, $author$project$Elm$Parser$Layout$layout, A2($author$project$Combine$andMap, $author$project$Elm$Parser$Node$parser($author$project$Elm$Parser$Base$moduleName), A2($author$project$Combine$ignore, $author$project$Elm$Parser$Layout$layout, A2($author$project$Combine$ignore, $author$project$Elm$Parser$Tokens$moduleToken, $author$project$Combine$succeed($author$project$Elm$Syntax$Module$DefaultModuleData)))))));
      var $author$project$Elm$Syntax$Module$PortModule = function(a) {
        return {
          $: "PortModule",
          a
        };
      };
      var $author$project$Elm$Parser$Modules$portModuleDefinition = A2($author$project$Combine$map, $author$project$Elm$Syntax$Module$PortModule, A2($author$project$Combine$andMap, $author$project$Elm$Parser$Node$parser($author$project$Elm$Parser$Expose$exposeDefinition), A2($author$project$Combine$ignore, $author$project$Elm$Parser$Layout$layout, A2($author$project$Combine$andMap, $author$project$Elm$Parser$Node$parser($author$project$Elm$Parser$Base$moduleName), A2($author$project$Combine$ignore, $author$project$Elm$Parser$Layout$layout, A2($author$project$Combine$ignore, $author$project$Elm$Parser$Tokens$moduleToken, A2($author$project$Combine$ignore, $author$project$Elm$Parser$Layout$layout, A2($author$project$Combine$ignore, $author$project$Elm$Parser$Tokens$portToken, $author$project$Combine$succeed($author$project$Elm$Syntax$Module$DefaultModuleData)))))))));
      var $author$project$Elm$Parser$Modules$moduleDefinition = $author$project$Combine$choice(_List_fromArray([$author$project$Elm$Parser$Modules$normalModuleDefinition, $author$project$Elm$Parser$Modules$portModuleDefinition, $author$project$Elm$Parser$Modules$effectModuleDefinition]));
      var $author$project$Elm$Parser$File$file = A2($author$project$Combine$ignore, $author$project$Elm$Parser$Layout$optimisticLayout, A2($author$project$Combine$andMap, $author$project$Elm$Parser$File$collectComments, A2($author$project$Combine$andMap, $author$project$Elm$Parser$File$fileDeclarations, A2($author$project$Combine$ignore, $author$project$Combine$maybe($author$project$Elm$Parser$Layout$layoutStrict), A2($author$project$Combine$andMap, $author$project$Combine$many(A2($author$project$Combine$ignore, $author$project$Elm$Parser$Layout$optimisticLayout, $author$project$Elm$Parser$Imports$importDefinition)), A2($author$project$Combine$ignore, $author$project$Combine$maybe($author$project$Elm$Parser$Layout$layoutStrict), A2($author$project$Combine$andMap, $author$project$Elm$Parser$Node$parser($author$project$Elm$Parser$Modules$moduleDefinition), A2($author$project$Combine$ignore, $author$project$Combine$maybe($author$project$Elm$Parser$Layout$layoutStrict), $author$project$Combine$succeed($author$project$Elm$Syntax$File$File)))))))));
      var $author$project$Elm$Internal$RawFile$Raw = function(a) {
        return {
          $: "Raw",
          a
        };
      };
      var $author$project$Elm$Internal$RawFile$fromFile = $author$project$Elm$Internal$RawFile$Raw;
      var $author$project$Combine$runParser = F3(function(_v0, st, s) {
        var p = _v0.a;
        return A2($elm$parser$Parser$run, p(st), s);
      });
      var $author$project$Combine$end = $author$project$Combine$Parser(function(state) {
        return A2($elm$parser$Parser$map, function(x) {
          return _Utils_Tuple2(state, x);
        }, $elm$parser$Parser$end);
      });
      var $author$project$Elm$Parser$withEnd = function(p) {
        return A2($author$project$Combine$ignore, $author$project$Combine$withLocation(function(_v0) {
          return $author$project$Combine$end;
        }), p);
      };
      var $author$project$Elm$Parser$parse = function(input) {
        var _v0 = A3($author$project$Combine$runParser, $author$project$Elm$Parser$withEnd($author$project$Elm$Parser$File$file), $author$project$Elm$Parser$State$emptyState, input + "\n");
        if (_v0.$ === "Ok") {
          var _v1 = _v0.a;
          var r = _v1.b;
          return $elm$core$Result$Ok($author$project$Elm$Internal$RawFile$fromFile(r));
        } else {
          var s = _v0.a;
          return $elm$core$Result$Err(s);
        }
      };
      var $the_sett$elm_pretty_printer$Pretty$Concatenate = F2(function(a, b) {
        return {
          $: "Concatenate",
          a,
          b
        };
      });
      var $the_sett$elm_pretty_printer$Pretty$append = F2(function(doc1, doc2) {
        return A2($the_sett$elm_pretty_printer$Pretty$Concatenate, function(_v0) {
          return doc1;
        }, function(_v1) {
          return doc2;
        });
      });
      var $elm_community$basics_extra$Basics$Extra$flip = F3(function(f, b, a) {
        return A2(f, a, b);
      });
      var $the_sett$elm_pretty_printer$Pretty$a = $elm_community$basics_extra$Basics$Extra$flip($the_sett$elm_pretty_printer$Pretty$append);
      var $the_sett$elm_pretty_printer$Pretty$Line = F2(function(a, b) {
        return {
          $: "Line",
          a,
          b
        };
      });
      var $the_sett$elm_pretty_printer$Pretty$line = A2($the_sett$elm_pretty_printer$Pretty$Line, " ", "");
      var $the_sett$elm_pretty_printer$Pretty$Empty = {
        $: "Empty"
      };
      var $the_sett$elm_pretty_printer$Pretty$empty = $the_sett$elm_pretty_printer$Pretty$Empty;
      var $the_sett$elm_pretty_printer$Pretty$join = F2(function(sep, docs) {
        join:
          while (true) {
            if (!docs.b) {
              return $the_sett$elm_pretty_printer$Pretty$empty;
            } else {
              if (docs.a.$ === "Empty") {
                var _v1 = docs.a;
                var ds = docs.b;
                var $temp$sep = sep, $temp$docs = ds;
                sep = $temp$sep;
                docs = $temp$docs;
                continue join;
              } else {
                var d = docs.a;
                var ds = docs.b;
                var step = F2(function(x, rest) {
                  if (x.$ === "Empty") {
                    return rest;
                  } else {
                    var doc = x;
                    return A2($the_sett$elm_pretty_printer$Pretty$append, sep, A2($the_sett$elm_pretty_printer$Pretty$append, doc, rest));
                  }
                });
                var spersed = A3($elm$core$List$foldr, step, $the_sett$elm_pretty_printer$Pretty$empty, ds);
                return A2($the_sett$elm_pretty_printer$Pretty$append, d, spersed);
              }
            }
          }
      });
      var $the_sett$elm_pretty_printer$Pretty$lines = $the_sett$elm_pretty_printer$Pretty$join($the_sett$elm_pretty_printer$Pretty$line);
      var $the_sett$elm_pretty_printer$Pretty$Text = function(a) {
        return {
          $: "Text",
          a
        };
      };
      var $the_sett$elm_pretty_printer$Pretty$char = function(c) {
        return $the_sett$elm_pretty_printer$Pretty$Text($elm$core$String$fromChar(c));
      };
      var $the_sett$elm_pretty_printer$Pretty$surround = F3(function(left, right, doc) {
        return A2($the_sett$elm_pretty_printer$Pretty$append, A2($the_sett$elm_pretty_printer$Pretty$append, left, doc), right);
      });
      var $the_sett$elm_pretty_printer$Pretty$parens = function(doc) {
        return A3($the_sett$elm_pretty_printer$Pretty$surround, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr("(")), $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr(")")), doc);
      };
      var $the_sett$elm_pretty_printer$Pretty$string = $the_sett$elm_pretty_printer$Pretty$Text;
      var $the_sett$elm_syntax_dsl$Elm$Pretty$prettyTopLevelExpose = function(tlExpose) {
        switch (tlExpose.$) {
          case "InfixExpose":
            var val = tlExpose.a;
            return $the_sett$elm_pretty_printer$Pretty$parens($the_sett$elm_pretty_printer$Pretty$string(val));
          case "FunctionExpose":
            var val = tlExpose.a;
            return $the_sett$elm_pretty_printer$Pretty$string(val);
          case "TypeOrAliasExpose":
            var val = tlExpose.a;
            return $the_sett$elm_pretty_printer$Pretty$string(val);
          default:
            var exposedType = tlExpose.a;
            var _v1 = exposedType.open;
            if (_v1.$ === "Nothing") {
              return $the_sett$elm_pretty_printer$Pretty$string(exposedType.name);
            } else {
              return A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string("(..)"), $the_sett$elm_pretty_printer$Pretty$string(exposedType.name));
            }
        }
      };
      var $the_sett$elm_syntax_dsl$Elm$Pretty$prettyTopLevelExposes = function(exposes) {
        return A2($the_sett$elm_pretty_printer$Pretty$join, $the_sett$elm_pretty_printer$Pretty$string(", "), A2($elm$core$List$map, $the_sett$elm_syntax_dsl$Elm$Pretty$prettyTopLevelExpose, exposes));
      };
      var $the_sett$elm_syntax_dsl$ImportsAndExposing$combineTopLevelExposes = function(exposes) {
        if (!exposes.b) {
          return $stil4m$elm_syntax$Elm$Syntax$Exposing$InfixExpose("");
        } else {
          var hd = exposes.a;
          var tl = exposes.b;
          return A3($elm$core$List$foldl, F2(function(exp, result) {
            var _v1 = _Utils_Tuple2(exp, result);
            if (_v1.a.$ === "TypeExpose") {
              var typeExpose = _v1.a.a;
              var _v2 = typeExpose.open;
              if (_v2.$ === "Just") {
                return exp;
              } else {
                return result;
              }
            } else {
              if (_v1.b.$ === "TypeExpose") {
                var typeExpose = _v1.b.a;
                var _v3 = typeExpose.open;
                if (_v3.$ === "Just") {
                  return result;
                } else {
                  return exp;
                }
              } else {
                return result;
              }
            }
          }), hd, tl);
        }
      };
      var $the_sett$elm_syntax_dsl$ImportsAndExposing$topLevelExposeName = function(tle) {
        switch (tle.$) {
          case "InfixExpose":
            var val = tle.a;
            return val;
          case "FunctionExpose":
            var val = tle.a;
            return val;
          case "TypeOrAliasExpose":
            var val = tle.a;
            return val;
          default:
            var exposedType = tle.a;
            return exposedType.name;
        }
      };
      var $the_sett$elm_syntax_dsl$ImportsAndExposing$groupByExposingName = function(innerImports) {
        var _v0 = function() {
          if (!innerImports.b) {
            return _Utils_Tuple3("", _List_Nil, _List_fromArray([_List_Nil]));
          } else {
            var hd = innerImports.a;
            return A3($elm$core$List$foldl, F2(function(exp, _v2) {
              var currName = _v2.a;
              var currAccum = _v2.b;
              var accum = _v2.c;
              var nextName = $the_sett$elm_syntax_dsl$ImportsAndExposing$topLevelExposeName(exp);
              return _Utils_eq(nextName, currName) ? _Utils_Tuple3(currName, A2($elm$core$List$cons, exp, currAccum), accum) : _Utils_Tuple3(nextName, _List_fromArray([exp]), A2($elm$core$List$cons, currAccum, accum));
            }), _Utils_Tuple3($the_sett$elm_syntax_dsl$ImportsAndExposing$topLevelExposeName(hd), _List_Nil, _List_Nil), innerImports);
          }
        }();
        var hdGroup = _v0.b;
        var remGroups = _v0.c;
        return $elm$core$List$reverse(A2($elm$core$List$cons, hdGroup, remGroups));
      };
      var $the_sett$elm_syntax_dsl$ImportsAndExposing$topLevelExposeOrder = F2(function(tlel, tler) {
        var _v0 = _Utils_Tuple2(tlel, tler);
        if (_v0.a.$ === "InfixExpose") {
          if (_v0.b.$ === "InfixExpose") {
            return A2($elm$core$Basics$compare, $the_sett$elm_syntax_dsl$ImportsAndExposing$topLevelExposeName(tlel), $the_sett$elm_syntax_dsl$ImportsAndExposing$topLevelExposeName(tler));
          } else {
            return $elm$core$Basics$LT;
          }
        } else {
          if (_v0.b.$ === "InfixExpose") {
            return $elm$core$Basics$GT;
          } else {
            return A2($elm$core$Basics$compare, $the_sett$elm_syntax_dsl$ImportsAndExposing$topLevelExposeName(tlel), $the_sett$elm_syntax_dsl$ImportsAndExposing$topLevelExposeName(tler));
          }
        }
      });
      var $the_sett$elm_syntax_dsl$ImportsAndExposing$sortAndDedupExposings = function(tlExposings) {
        return A2($elm$core$List$map, $the_sett$elm_syntax_dsl$ImportsAndExposing$combineTopLevelExposes, $the_sett$elm_syntax_dsl$ImportsAndExposing$groupByExposingName(A2($elm$core$List$sortWith, $the_sett$elm_syntax_dsl$ImportsAndExposing$topLevelExposeOrder, tlExposings)));
      };
      var $the_sett$elm_pretty_printer$Pretty$space = $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr(" "));
      var $the_sett$elm_syntax_dsl$Elm$Pretty$prettyExposing = function(exposing_) {
        var exposings = function() {
          if (exposing_.$ === "All") {
            return $the_sett$elm_pretty_printer$Pretty$parens($the_sett$elm_pretty_printer$Pretty$string(".."));
          } else {
            var tll = exposing_.a;
            return $the_sett$elm_pretty_printer$Pretty$parens($the_sett$elm_syntax_dsl$Elm$Pretty$prettyTopLevelExposes($the_sett$elm_syntax_dsl$ImportsAndExposing$sortAndDedupExposings($the_sett$elm_syntax_dsl$Util$denodeAll(tll))));
          }
        }();
        return A2($the_sett$elm_pretty_printer$Pretty$a, exposings, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$space, $the_sett$elm_pretty_printer$Pretty$string("exposing")));
      };
      var $the_sett$elm_syntax_dsl$Elm$Pretty$prettyMaybe = F2(function(prettyFn, maybeVal) {
        return A2($elm$core$Maybe$withDefault, $the_sett$elm_pretty_printer$Pretty$empty, A2($elm$core$Maybe$map, prettyFn, maybeVal));
      });
      var $the_sett$elm_syntax_dsl$Elm$Pretty$dot = $the_sett$elm_pretty_printer$Pretty$string(".");
      var $the_sett$elm_syntax_dsl$Elm$Pretty$prettyModuleName = function(name) {
        return A2($the_sett$elm_pretty_printer$Pretty$join, $the_sett$elm_syntax_dsl$Elm$Pretty$dot, A2($elm$core$List$map, $the_sett$elm_pretty_printer$Pretty$string, name));
      };
      var $the_sett$elm_syntax_dsl$Elm$Pretty$prettyModuleNameAlias = function(name) {
        if (!name.b) {
          return $the_sett$elm_pretty_printer$Pretty$empty;
        } else {
          return A2($the_sett$elm_pretty_printer$Pretty$a, A2($the_sett$elm_pretty_printer$Pretty$join, $the_sett$elm_syntax_dsl$Elm$Pretty$dot, A2($elm$core$List$map, $the_sett$elm_pretty_printer$Pretty$string, name)), $the_sett$elm_pretty_printer$Pretty$string("as "));
        }
      };
      var $the_sett$elm_syntax_dsl$Elm$Pretty$prettyImport = function(import_) {
        return A2($the_sett$elm_pretty_printer$Pretty$join, $the_sett$elm_pretty_printer$Pretty$space, _List_fromArray([$the_sett$elm_pretty_printer$Pretty$string("import"), $the_sett$elm_syntax_dsl$Elm$Pretty$prettyModuleName($the_sett$elm_syntax_dsl$Util$denode(import_.moduleName)), A2($the_sett$elm_syntax_dsl$Elm$Pretty$prettyMaybe, $the_sett$elm_syntax_dsl$Elm$Pretty$prettyModuleNameAlias, $the_sett$elm_syntax_dsl$Util$denodeMaybe(import_.moduleAlias)), A2($the_sett$elm_syntax_dsl$Elm$Pretty$prettyMaybe, $the_sett$elm_syntax_dsl$Elm$Pretty$prettyExposing, $the_sett$elm_syntax_dsl$Util$denodeMaybe(import_.exposingList))]));
      };
      var $the_sett$elm_syntax_dsl$ImportsAndExposing$denode = $stil4m$elm_syntax$Elm$Syntax$Node$value;
      var $the_sett$elm_syntax_dsl$ImportsAndExposing$denodeMaybe = $elm$core$Maybe$map($the_sett$elm_syntax_dsl$ImportsAndExposing$denode);
      var $the_sett$elm_syntax_dsl$ImportsAndExposing$denodeAll = $elm$core$List$map($the_sett$elm_syntax_dsl$ImportsAndExposing$denode);
      var $the_sett$elm_syntax_dsl$ImportsAndExposing$nodify = function(exp) {
        return A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, exp);
      };
      var $the_sett$elm_syntax_dsl$ImportsAndExposing$nodifyAll = $elm$core$List$map($the_sett$elm_syntax_dsl$ImportsAndExposing$nodify);
      var $the_sett$elm_syntax_dsl$ImportsAndExposing$joinExposings = F2(function(left, right) {
        var _v0 = _Utils_Tuple2(left, right);
        if (_v0.a.$ === "All") {
          var range = _v0.a.a;
          return $stil4m$elm_syntax$Elm$Syntax$Exposing$All(range);
        } else {
          if (_v0.b.$ === "All") {
            var range = _v0.b.a;
            return $stil4m$elm_syntax$Elm$Syntax$Exposing$All(range);
          } else {
            var leftNodes = _v0.a.a;
            var rightNodes = _v0.b.a;
            return $stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit($the_sett$elm_syntax_dsl$ImportsAndExposing$nodifyAll(A2($elm$core$List$append, $the_sett$elm_syntax_dsl$ImportsAndExposing$denodeAll(leftNodes), $the_sett$elm_syntax_dsl$ImportsAndExposing$denodeAll(rightNodes))));
          }
        }
      });
      var $the_sett$elm_syntax_dsl$ImportsAndExposing$joinMaybeExposings = F2(function(maybeLeft, maybeRight) {
        var _v0 = _Utils_Tuple2(maybeLeft, maybeRight);
        if (_v0.a.$ === "Nothing") {
          if (_v0.b.$ === "Nothing") {
            var _v1 = _v0.a;
            var _v2 = _v0.b;
            return $elm$core$Maybe$Nothing;
          } else {
            var _v4 = _v0.a;
            var right = _v0.b.a;
            return $elm$core$Maybe$Just(right);
          }
        } else {
          if (_v0.b.$ === "Nothing") {
            var left = _v0.a.a;
            var _v3 = _v0.b;
            return $elm$core$Maybe$Just(left);
          } else {
            var left = _v0.a.a;
            var right = _v0.b.a;
            return $elm$core$Maybe$Just(A2($the_sett$elm_syntax_dsl$ImportsAndExposing$joinExposings, left, right));
          }
        }
      });
      var $the_sett$elm_syntax_dsl$ImportsAndExposing$nodifyMaybe = $elm$core$Maybe$map($the_sett$elm_syntax_dsl$ImportsAndExposing$nodify);
      var $elm_community$maybe_extra$Maybe$Extra$or = F2(function(ma, mb) {
        if (ma.$ === "Nothing") {
          return mb;
        } else {
          return ma;
        }
      });
      var $the_sett$elm_syntax_dsl$ImportsAndExposing$sortAndDedupExposing = function(exp) {
        if (exp.$ === "All") {
          var range = exp.a;
          return $stil4m$elm_syntax$Elm$Syntax$Exposing$All(range);
        } else {
          var nodes = exp.a;
          return $stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit($the_sett$elm_syntax_dsl$ImportsAndExposing$nodifyAll($the_sett$elm_syntax_dsl$ImportsAndExposing$sortAndDedupExposings($the_sett$elm_syntax_dsl$ImportsAndExposing$denodeAll(nodes))));
        }
      };
      var $the_sett$elm_syntax_dsl$ImportsAndExposing$combineImports = function(innerImports) {
        if (!innerImports.b) {
          return {
            exposingList: $elm$core$Maybe$Nothing,
            moduleAlias: $elm$core$Maybe$Nothing,
            moduleName: $the_sett$elm_syntax_dsl$ImportsAndExposing$nodify(_List_Nil)
          };
        } else {
          var hd = innerImports.a;
          var tl = innerImports.b;
          var combinedImports = A3($elm$core$List$foldl, F2(function(imp, result) {
            return {
              exposingList: $the_sett$elm_syntax_dsl$ImportsAndExposing$nodifyMaybe(A2($the_sett$elm_syntax_dsl$ImportsAndExposing$joinMaybeExposings, $the_sett$elm_syntax_dsl$ImportsAndExposing$denodeMaybe(imp.exposingList), $the_sett$elm_syntax_dsl$ImportsAndExposing$denodeMaybe(result.exposingList))),
              moduleAlias: A2($elm_community$maybe_extra$Maybe$Extra$or, imp.moduleAlias, result.moduleAlias),
              moduleName: imp.moduleName
            };
          }), hd, tl);
          return _Utils_update(combinedImports, {
            exposingList: A2($elm$core$Maybe$map, A2($elm$core$Basics$composeR, $the_sett$elm_syntax_dsl$ImportsAndExposing$denode, A2($elm$core$Basics$composeR, $the_sett$elm_syntax_dsl$ImportsAndExposing$sortAndDedupExposing, $the_sett$elm_syntax_dsl$ImportsAndExposing$nodify)), combinedImports.exposingList)
          });
        }
      };
      var $the_sett$elm_syntax_dsl$ImportsAndExposing$groupByModuleName = function(innerImports) {
        var _v0 = function() {
          if (!innerImports.b) {
            return _Utils_Tuple3(_List_Nil, _List_Nil, _List_fromArray([_List_Nil]));
          } else {
            var hd = innerImports.a;
            return A3($elm$core$List$foldl, F2(function(imp, _v2) {
              var currName = _v2.a;
              var currAccum = _v2.b;
              var accum = _v2.c;
              var nextName = $the_sett$elm_syntax_dsl$ImportsAndExposing$denode(imp.moduleName);
              return _Utils_eq(nextName, currName) ? _Utils_Tuple3(currName, A2($elm$core$List$cons, imp, currAccum), accum) : _Utils_Tuple3(nextName, _List_fromArray([imp]), A2($elm$core$List$cons, currAccum, accum));
            }), _Utils_Tuple3($the_sett$elm_syntax_dsl$ImportsAndExposing$denode(hd.moduleName), _List_Nil, _List_Nil), innerImports);
          }
        }();
        var hdGroup = _v0.b;
        var remGroups = _v0.c;
        return $elm$core$List$reverse(A2($elm$core$List$cons, hdGroup, remGroups));
      };
      var $elm$core$List$sortBy = _List_sortBy;
      var $the_sett$elm_syntax_dsl$ImportsAndExposing$sortAndDedupImports = function(imports) {
        var impName = function(imp) {
          return $the_sett$elm_syntax_dsl$ImportsAndExposing$denode(imp.moduleName);
        };
        return A2($elm$core$List$map, $the_sett$elm_syntax_dsl$ImportsAndExposing$combineImports, $the_sett$elm_syntax_dsl$ImportsAndExposing$groupByModuleName(A2($elm$core$List$sortBy, impName, imports)));
      };
      var $the_sett$elm_syntax_dsl$Elm$Pretty$prettyImports = function(imports) {
        return $the_sett$elm_pretty_printer$Pretty$lines(A2($elm$core$List$map, $the_sett$elm_syntax_dsl$Elm$Pretty$prettyImport, $the_sett$elm_syntax_dsl$ImportsAndExposing$sortAndDedupImports(imports)));
      };
      var $the_sett$elm_syntax_dsl$Elm$Pretty$importsPretty = function(file) {
        var _v0 = file.imports;
        if (!_v0.b) {
          return $the_sett$elm_pretty_printer$Pretty$line;
        } else {
          return A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, $the_sett$elm_syntax_dsl$Elm$Pretty$prettyImports($the_sett$elm_syntax_dsl$Util$denodeAll(file.imports)))));
        }
      };
      var $the_sett$elm_syntax_dsl$Elm$Pretty$prettyComments = function(comments) {
        if (!comments.b) {
          return $the_sett$elm_pretty_printer$Pretty$empty;
        } else {
          return A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, $the_sett$elm_pretty_printer$Pretty$lines(A2($elm$core$List$map, $the_sett$elm_pretty_printer$Pretty$string, comments))));
        }
      };
      var $the_sett$elm_syntax_dsl$Elm$Pretty$doubleLines = $the_sett$elm_pretty_printer$Pretty$join(A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, $the_sett$elm_pretty_printer$Pretty$line));
      var $the_sett$elm_pretty_printer$Pretty$Nest = F2(function(a, b) {
        return {
          $: "Nest",
          a,
          b
        };
      });
      var $the_sett$elm_pretty_printer$Pretty$nest = F2(function(depth, doc) {
        return A2($the_sett$elm_pretty_printer$Pretty$Nest, depth, function(_v0) {
          return doc;
        });
      });
      var $the_sett$elm_syntax_dsl$Elm$Pretty$prettyDocumentation = function(docs) {
        return $the_sett$elm_pretty_printer$Pretty$string(docs);
      };
      var $the_sett$elm_pretty_printer$Pretty$Union = F2(function(a, b) {
        return {
          $: "Union",
          a,
          b
        };
      });
      var $the_sett$elm_pretty_printer$Pretty$flatten = function(doc) {
        flatten:
          while (true) {
            switch (doc.$) {
              case "Concatenate":
                var doc1 = doc.a;
                var doc2 = doc.b;
                return A2($the_sett$elm_pretty_printer$Pretty$Concatenate, function(_v1) {
                  return $the_sett$elm_pretty_printer$Pretty$flatten(doc1(_Utils_Tuple0));
                }, function(_v2) {
                  return $the_sett$elm_pretty_printer$Pretty$flatten(doc2(_Utils_Tuple0));
                });
              case "Nest":
                var i = doc.a;
                var doc1 = doc.b;
                return A2($the_sett$elm_pretty_printer$Pretty$Nest, i, function(_v3) {
                  return $the_sett$elm_pretty_printer$Pretty$flatten(doc1(_Utils_Tuple0));
                });
              case "Union":
                var doc1 = doc.a;
                var doc2 = doc.b;
                var $temp$doc = doc1;
                doc = $temp$doc;
                continue flatten;
              case "Line":
                var hsep = doc.a;
                return $the_sett$elm_pretty_printer$Pretty$Text(hsep);
              case "Nesting":
                var fn = doc.a;
                var $temp$doc = fn(0);
                doc = $temp$doc;
                continue flatten;
              case "Column":
                var fn = doc.a;
                var $temp$doc = fn(0);
                doc = $temp$doc;
                continue flatten;
              default:
                var x = doc;
                return x;
            }
          }
      };
      var $the_sett$elm_pretty_printer$Pretty$group = function(doc) {
        return A2($the_sett$elm_pretty_printer$Pretty$Union, $the_sett$elm_pretty_printer$Pretty$flatten(doc), doc);
      };
      var $the_sett$elm_syntax_dsl$Elm$Pretty$isNakedCompound = function(typeAnn) {
        switch (typeAnn.$) {
          case "Typed":
            if (!typeAnn.b.b) {
              return false;
            } else {
              var args = typeAnn.b;
              return true;
            }
          case "FunctionTypeAnnotation":
            return true;
          default:
            return false;
        }
      };
      var $elm$core$Tuple$mapBoth = F3(function(funcA, funcB, _v0) {
        var x = _v0.a;
        var y = _v0.b;
        return _Utils_Tuple2(funcA(x), funcB(y));
      });
      var $the_sett$elm_syntax_dsl$Elm$Pretty$prettyModuleNameDot = function(name) {
        if (!name.b) {
          return $the_sett$elm_pretty_printer$Pretty$empty;
        } else {
          return A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_syntax_dsl$Elm$Pretty$dot, A2($the_sett$elm_pretty_printer$Pretty$join, $the_sett$elm_syntax_dsl$Elm$Pretty$dot, A2($elm$core$List$map, $the_sett$elm_pretty_printer$Pretty$string, name)));
        }
      };
      var $the_sett$elm_pretty_printer$Pretty$separators = function(sep) {
        return $the_sett$elm_pretty_printer$Pretty$join(A2($the_sett$elm_pretty_printer$Pretty$Line, sep, sep));
      };
      var $the_sett$elm_pretty_printer$Pretty$words = $the_sett$elm_pretty_printer$Pretty$join($the_sett$elm_pretty_printer$Pretty$space);
      var $the_sett$elm_syntax_dsl$Elm$Pretty$prettyFieldTypeAnn = function(_v8) {
        var name = _v8.a;
        var ann = _v8.b;
        return $the_sett$elm_pretty_printer$Pretty$group(A2($the_sett$elm_pretty_printer$Pretty$nest, 4, $the_sett$elm_pretty_printer$Pretty$lines(_List_fromArray([$the_sett$elm_pretty_printer$Pretty$words(_List_fromArray([$the_sett$elm_pretty_printer$Pretty$string(name), $the_sett$elm_pretty_printer$Pretty$string(":")])), $the_sett$elm_syntax_dsl$Elm$Pretty$prettyTypeAnnotation(ann)]))));
      };
      var $the_sett$elm_syntax_dsl$Elm$Pretty$prettyFunctionTypeAnnotation = F2(function(left, right) {
        var expandLeft = function(ann) {
          if (ann.$ === "FunctionTypeAnnotation") {
            return $the_sett$elm_syntax_dsl$Elm$Pretty$prettyTypeAnnotationParens(ann);
          } else {
            return $the_sett$elm_syntax_dsl$Elm$Pretty$prettyTypeAnnotation(ann);
          }
        };
        var innerFnTypeAnn = F2(function(innerLeft, innerRight) {
          var rightSide = expandRight($the_sett$elm_syntax_dsl$Util$denode(innerRight));
          if (rightSide.b) {
            var hd = rightSide.a;
            var tl = rightSide.b;
            return A2($elm$core$List$cons, expandLeft($the_sett$elm_syntax_dsl$Util$denode(innerLeft)), A2($elm$core$List$cons, $the_sett$elm_pretty_printer$Pretty$words(_List_fromArray([$the_sett$elm_pretty_printer$Pretty$string("->"), hd])), tl));
          } else {
            return _List_Nil;
          }
        });
        var expandRight = function(ann) {
          if (ann.$ === "FunctionTypeAnnotation") {
            var innerLeft = ann.a;
            var innerRight = ann.b;
            return A2(innerFnTypeAnn, innerLeft, innerRight);
          } else {
            return _List_fromArray([$the_sett$elm_syntax_dsl$Elm$Pretty$prettyTypeAnnotation(ann)]);
          }
        };
        return $the_sett$elm_pretty_printer$Pretty$group($the_sett$elm_pretty_printer$Pretty$lines(A2(innerFnTypeAnn, left, right)));
      });
      var $the_sett$elm_syntax_dsl$Elm$Pretty$prettyGenericRecord = F2(function(paramName, fields) {
        var open = A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, $the_sett$elm_pretty_printer$Pretty$words(_List_fromArray([$the_sett$elm_pretty_printer$Pretty$string("{"), $the_sett$elm_pretty_printer$Pretty$string(paramName)])));
        var close = A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string("}"), $the_sett$elm_pretty_printer$Pretty$line);
        var addBarToFirst = function(exprs) {
          if (!exprs.b) {
            return _List_Nil;
          } else {
            var hd = exprs.a;
            var tl = exprs.b;
            return A2($elm$core$List$cons, A2($the_sett$elm_pretty_printer$Pretty$a, hd, $the_sett$elm_pretty_printer$Pretty$string("| ")), tl);
          }
        };
        if (!fields.b) {
          return $the_sett$elm_pretty_printer$Pretty$string("{}");
        } else {
          return $the_sett$elm_pretty_printer$Pretty$group(A3($the_sett$elm_pretty_printer$Pretty$surround, $the_sett$elm_pretty_printer$Pretty$empty, close, A2($the_sett$elm_pretty_printer$Pretty$nest, 4, A2($the_sett$elm_pretty_printer$Pretty$a, A2($the_sett$elm_pretty_printer$Pretty$separators, ", ", addBarToFirst(A2($elm$core$List$map, $the_sett$elm_syntax_dsl$Elm$Pretty$prettyFieldTypeAnn, A2($elm$core$List$map, A2($elm$core$Tuple$mapBoth, $the_sett$elm_syntax_dsl$Util$denode, $the_sett$elm_syntax_dsl$Util$denode), fields)))), open))));
        }
      });
      var $the_sett$elm_syntax_dsl$Elm$Pretty$prettyRecord = function(fields) {
        var open = A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$space, $the_sett$elm_pretty_printer$Pretty$string("{"));
        var close = A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string("}"), $the_sett$elm_pretty_printer$Pretty$line);
        if (!fields.b) {
          return $the_sett$elm_pretty_printer$Pretty$string("{}");
        } else {
          return $the_sett$elm_pretty_printer$Pretty$group(A3($the_sett$elm_pretty_printer$Pretty$surround, open, close, A2($the_sett$elm_pretty_printer$Pretty$separators, ", ", A2($elm$core$List$map, $the_sett$elm_syntax_dsl$Elm$Pretty$prettyFieldTypeAnn, A2($elm$core$List$map, A2($elm$core$Tuple$mapBoth, $the_sett$elm_syntax_dsl$Util$denode, $the_sett$elm_syntax_dsl$Util$denode), fields)))));
        }
      };
      var $the_sett$elm_syntax_dsl$Elm$Pretty$prettyTupled = function(anns) {
        return $the_sett$elm_pretty_printer$Pretty$parens(A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$space, A2($the_sett$elm_pretty_printer$Pretty$a, A2($the_sett$elm_pretty_printer$Pretty$join, $the_sett$elm_pretty_printer$Pretty$string(", "), A2($elm$core$List$map, $the_sett$elm_syntax_dsl$Elm$Pretty$prettyTypeAnnotation, $the_sett$elm_syntax_dsl$Util$denodeAll(anns))), $the_sett$elm_pretty_printer$Pretty$space)));
      };
      var $the_sett$elm_syntax_dsl$Elm$Pretty$prettyTypeAnnotation = function(typeAnn) {
        switch (typeAnn.$) {
          case "GenericType":
            var val = typeAnn.a;
            return $the_sett$elm_pretty_printer$Pretty$string(val);
          case "Typed":
            var fqName = typeAnn.a;
            var anns = typeAnn.b;
            return A2($the_sett$elm_syntax_dsl$Elm$Pretty$prettyTyped, fqName, anns);
          case "Unit":
            return $the_sett$elm_pretty_printer$Pretty$string("()");
          case "Tupled":
            var anns = typeAnn.a;
            return $the_sett$elm_syntax_dsl$Elm$Pretty$prettyTupled(anns);
          case "Record":
            var recordDef = typeAnn.a;
            return $the_sett$elm_syntax_dsl$Elm$Pretty$prettyRecord($the_sett$elm_syntax_dsl$Util$denodeAll(recordDef));
          case "GenericRecord":
            var paramName = typeAnn.a;
            var recordDef = typeAnn.b;
            return A2($the_sett$elm_syntax_dsl$Elm$Pretty$prettyGenericRecord, $the_sett$elm_syntax_dsl$Util$denode(paramName), $the_sett$elm_syntax_dsl$Util$denodeAll($the_sett$elm_syntax_dsl$Util$denode(recordDef)));
          default:
            var fromAnn = typeAnn.a;
            var toAnn = typeAnn.b;
            return A2($the_sett$elm_syntax_dsl$Elm$Pretty$prettyFunctionTypeAnnotation, fromAnn, toAnn);
        }
      };
      var $the_sett$elm_syntax_dsl$Elm$Pretty$prettyTypeAnnotationParens = function(typeAnn) {
        return $the_sett$elm_syntax_dsl$Elm$Pretty$isNakedCompound(typeAnn) ? $the_sett$elm_pretty_printer$Pretty$parens($the_sett$elm_syntax_dsl$Elm$Pretty$prettyTypeAnnotation(typeAnn)) : $the_sett$elm_syntax_dsl$Elm$Pretty$prettyTypeAnnotation(typeAnn);
      };
      var $the_sett$elm_syntax_dsl$Elm$Pretty$prettyTyped = F2(function(fqName, anns) {
        var argsDoc = $the_sett$elm_pretty_printer$Pretty$words(A2($elm$core$List$map, $the_sett$elm_syntax_dsl$Elm$Pretty$prettyTypeAnnotationParens, $the_sett$elm_syntax_dsl$Util$denodeAll(anns)));
        var _v0 = $the_sett$elm_syntax_dsl$Util$denode(fqName);
        var moduleName = _v0.a;
        var typeName = _v0.b;
        var typeDoc = A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(typeName), $the_sett$elm_syntax_dsl$Elm$Pretty$prettyModuleNameDot(moduleName));
        return $the_sett$elm_pretty_printer$Pretty$words(_List_fromArray([typeDoc, argsDoc]));
      });
      var $the_sett$elm_syntax_dsl$Elm$Pretty$prettyValueConstructor = function(cons) {
        return A2($the_sett$elm_pretty_printer$Pretty$nest, 4, $the_sett$elm_pretty_printer$Pretty$group($the_sett$elm_pretty_printer$Pretty$lines(_List_fromArray([$the_sett$elm_pretty_printer$Pretty$string($the_sett$elm_syntax_dsl$Util$denode(cons.name)), $the_sett$elm_pretty_printer$Pretty$lines(A2($elm$core$List$map, $the_sett$elm_syntax_dsl$Elm$Pretty$prettyTypeAnnotationParens, $the_sett$elm_syntax_dsl$Util$denodeAll(cons._arguments)))]))));
      };
      var $the_sett$elm_syntax_dsl$Elm$Pretty$prettyValueConstructors = function(constructors) {
        return A2($the_sett$elm_pretty_printer$Pretty$join, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string("| "), $the_sett$elm_pretty_printer$Pretty$line), A2($elm$core$List$map, $the_sett$elm_syntax_dsl$Elm$Pretty$prettyValueConstructor, constructors));
      };
      var $the_sett$elm_syntax_dsl$Elm$Pretty$prettyCustomType = function(type_) {
        var customTypePretty = A2($the_sett$elm_pretty_printer$Pretty$nest, 4, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_syntax_dsl$Elm$Pretty$prettyValueConstructors($the_sett$elm_syntax_dsl$Util$denodeAll(type_.constructors)), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string("= "), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, $the_sett$elm_pretty_printer$Pretty$words(_List_fromArray([$the_sett$elm_pretty_printer$Pretty$string("type"), $the_sett$elm_pretty_printer$Pretty$string($the_sett$elm_syntax_dsl$Util$denode(type_.name)), $the_sett$elm_pretty_printer$Pretty$words(A2($elm$core$List$map, $the_sett$elm_pretty_printer$Pretty$string, $the_sett$elm_syntax_dsl$Util$denodeAll(type_.generics)))]))))));
        return $the_sett$elm_pretty_printer$Pretty$lines(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$Pretty$prettyMaybe, $the_sett$elm_syntax_dsl$Elm$Pretty$prettyDocumentation, $the_sett$elm_syntax_dsl$Util$denodeMaybe(type_.documentation)), customTypePretty]));
      };
      var $the_sett$elm_syntax_dsl$Elm$Pretty$adjustExpressionParentheses = F2(function(context, expression) {
        var shouldRemove = function(expr) {
          var _v3 = _Utils_Tuple3(context.isTop, context.isLeftPipe, expr);
          _v3$1:
            while (true) {
              if (_v3.a) {
                return true;
              } else {
                switch (_v3.c.$) {
                  case "Application":
                    if (_v3.b) {
                      break _v3$1;
                    } else {
                      return context.precedence < 11 ? true : false;
                    }
                  case "FunctionOrValue":
                    if (_v3.b) {
                      break _v3$1;
                    } else {
                      var _v4 = _v3.c;
                      return true;
                    }
                  case "Integer":
                    if (_v3.b) {
                      break _v3$1;
                    } else {
                      return true;
                    }
                  case "Hex":
                    if (_v3.b) {
                      break _v3$1;
                    } else {
                      return true;
                    }
                  case "Floatable":
                    if (_v3.b) {
                      break _v3$1;
                    } else {
                      return true;
                    }
                  case "Negation":
                    if (_v3.b) {
                      break _v3$1;
                    } else {
                      return true;
                    }
                  case "Literal":
                    if (_v3.b) {
                      break _v3$1;
                    } else {
                      return true;
                    }
                  case "CharLiteral":
                    if (_v3.b) {
                      break _v3$1;
                    } else {
                      return true;
                    }
                  case "TupledExpression":
                    if (_v3.b) {
                      break _v3$1;
                    } else {
                      return true;
                    }
                  case "RecordExpr":
                    if (_v3.b) {
                      break _v3$1;
                    } else {
                      return true;
                    }
                  case "ListExpr":
                    if (_v3.b) {
                      break _v3$1;
                    } else {
                      return true;
                    }
                  case "RecordAccess":
                    if (_v3.b) {
                      break _v3$1;
                    } else {
                      var _v5 = _v3.c;
                      return true;
                    }
                  case "RecordAccessFunction":
                    if (_v3.b) {
                      break _v3$1;
                    } else {
                      return true;
                    }
                  case "RecordUpdateExpression":
                    if (_v3.b) {
                      break _v3$1;
                    } else {
                      var _v6 = _v3.c;
                      return true;
                    }
                  default:
                    if (_v3.b) {
                      break _v3$1;
                    } else {
                      return false;
                    }
                }
              }
            }
          return true;
        };
        var removeParens = function(expr) {
          if (expr.$ === "ParenthesizedExpression") {
            var innerExpr = expr.a;
            return shouldRemove($the_sett$elm_syntax_dsl$Util$denode(innerExpr)) ? removeParens($the_sett$elm_syntax_dsl$Util$denode(innerExpr)) : expr;
          } else {
            return expr;
          }
        };
        var addParens = function(expr) {
          var _v1 = _Utils_Tuple3(context.isTop, context.isLeftPipe, expr);
          _v1$4:
            while (true) {
              if (!_v1.a && !_v1.b) {
                switch (_v1.c.$) {
                  case "LetExpression":
                    return $stil4m$elm_syntax$Elm$Syntax$Expression$ParenthesizedExpression($the_sett$elm_syntax_dsl$Util$nodify(expr));
                  case "CaseExpression":
                    return $stil4m$elm_syntax$Elm$Syntax$Expression$ParenthesizedExpression($the_sett$elm_syntax_dsl$Util$nodify(expr));
                  case "LambdaExpression":
                    return $stil4m$elm_syntax$Elm$Syntax$Expression$ParenthesizedExpression($the_sett$elm_syntax_dsl$Util$nodify(expr));
                  case "IfBlock":
                    var _v2 = _v1.c;
                    return $stil4m$elm_syntax$Elm$Syntax$Expression$ParenthesizedExpression($the_sett$elm_syntax_dsl$Util$nodify(expr));
                  default:
                    break _v1$4;
                }
              } else {
                break _v1$4;
              }
            }
          return expr;
        };
        return addParens(removeParens(expression));
      });
      var $the_sett$elm_pretty_printer$Pretty$Column = function(a) {
        return {
          $: "Column",
          a
        };
      };
      var $the_sett$elm_pretty_printer$Pretty$column = $the_sett$elm_pretty_printer$Pretty$Column;
      var $the_sett$elm_pretty_printer$Pretty$Nesting = function(a) {
        return {
          $: "Nesting",
          a
        };
      };
      var $the_sett$elm_pretty_printer$Pretty$nesting = $the_sett$elm_pretty_printer$Pretty$Nesting;
      var $the_sett$elm_pretty_printer$Pretty$align = function(doc) {
        return $the_sett$elm_pretty_printer$Pretty$column(function(currentColumn) {
          return $the_sett$elm_pretty_printer$Pretty$nesting(function(indentLvl) {
            return A2($the_sett$elm_pretty_printer$Pretty$nest, currentColumn - indentLvl, doc);
          });
        });
      };
      var $Chadtech$elm_bool_extra$Bool$Extra$any = $elm$core$List$any($elm$core$Basics$identity);
      var $elm$core$Basics$modBy = _Basics_modBy;
      var $the_sett$elm_syntax_dsl$Elm$Pretty$decrementIndent = F2(function(currentIndent, spaces) {
        var modded = A2($elm$core$Basics$modBy, 4, currentIndent - spaces);
        return !modded ? 4 : modded;
      });
      var $the_sett$elm_syntax_dsl$Elm$Pretty$escapeChar = function(val) {
        if ("'" === val.valueOf()) {
          return "\\'";
        } else {
          var c = val;
          return $elm$core$String$fromChar(c);
        }
      };
      var $elm$core$String$fromFloat = _String_fromNumber;
      var $the_sett$elm_pretty_printer$Pretty$copy = F2(function(i, s) {
        return !i ? "" : _Utils_ap(s, A2($the_sett$elm_pretty_printer$Pretty$copy, i - 1, s));
      });
      var $the_sett$elm_pretty_printer$Pretty$hang = F2(function(spaces, doc) {
        return $the_sett$elm_pretty_printer$Pretty$align(A2($the_sett$elm_pretty_printer$Pretty$nest, spaces, doc));
      });
      var $the_sett$elm_pretty_printer$Pretty$indent = F2(function(spaces, doc) {
        return A2($the_sett$elm_pretty_printer$Pretty$hang, spaces, A2($the_sett$elm_pretty_printer$Pretty$append, $the_sett$elm_pretty_printer$Pretty$string(A2($the_sett$elm_pretty_printer$Pretty$copy, spaces, " ")), doc));
      });
      var $the_sett$elm_syntax_dsl$Elm$Pretty$optionalGroup = F2(function(flag, doc) {
        return flag ? doc : $the_sett$elm_pretty_printer$Pretty$group(doc);
      });
      var $the_sett$elm_syntax_dsl$Elm$Pretty$precedence = function(symbol) {
        switch (symbol) {
          case ">>":
            return 9;
          case "<<":
            return 9;
          case "^":
            return 8;
          case "*":
            return 7;
          case "/":
            return 7;
          case "//":
            return 7;
          case "%":
            return 7;
          case "rem":
            return 7;
          case "+":
            return 6;
          case "-":
            return 6;
          case "++":
            return 5;
          case "::":
            return 5;
          case "==":
            return 4;
          case "/=":
            return 4;
          case "<":
            return 4;
          case ">":
            return 4;
          case "<=":
            return 4;
          case ">=":
            return 4;
          case "&&":
            return 3;
          case "||":
            return 2;
          case "|>":
            return 0;
          case "<|":
            return 0;
          default:
            return 0;
        }
      };
      var $the_sett$elm_syntax_dsl$Elm$Pretty$adjustPatternParentheses = F2(function(isTop, pattern) {
        var shouldRemove = function(pat) {
          var _v5 = _Utils_Tuple2(isTop, pat);
          _v5$2:
            while (true) {
              switch (_v5.b.$) {
                case "NamedPattern":
                  if (!_v5.a) {
                    var _v6 = _v5.b;
                    return false;
                  } else {
                    break _v5$2;
                  }
                case "AsPattern":
                  var _v7 = _v5.b;
                  return false;
                default:
                  break _v5$2;
              }
            }
          return isTop;
        };
        var removeParens = function(pat) {
          if (pat.$ === "ParenthesizedPattern") {
            var innerPat = pat.a;
            return shouldRemove($the_sett$elm_syntax_dsl$Util$denode(innerPat)) ? removeParens($the_sett$elm_syntax_dsl$Util$denode(innerPat)) : pat;
          } else {
            return pat;
          }
        };
        var addParens = function(pat) {
          var _v1 = _Utils_Tuple2(isTop, pat);
          _v1$2:
            while (true) {
              if (!_v1.a) {
                switch (_v1.b.$) {
                  case "NamedPattern":
                    if (_v1.b.b.b) {
                      var _v2 = _v1.b;
                      var _v3 = _v2.b;
                      return $stil4m$elm_syntax$Elm$Syntax$Pattern$ParenthesizedPattern($the_sett$elm_syntax_dsl$Util$nodify(pat));
                    } else {
                      break _v1$2;
                    }
                  case "AsPattern":
                    var _v4 = _v1.b;
                    return $stil4m$elm_syntax$Elm$Syntax$Pattern$ParenthesizedPattern($the_sett$elm_syntax_dsl$Util$nodify(pat));
                  default:
                    break _v1$2;
                }
              } else {
                break _v1$2;
              }
            }
          return pat;
        };
        return addParens(removeParens(pattern));
      });
      var $the_sett$elm_pretty_printer$Pretty$braces = function(doc) {
        return A3($the_sett$elm_pretty_printer$Pretty$surround, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr("{")), $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr("}")), doc);
      };
      var $the_sett$elm_syntax_dsl$Elm$Pretty$quotes = function(doc) {
        return A3($the_sett$elm_pretty_printer$Pretty$surround, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('"')), $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('"')), doc);
      };
      var $the_sett$elm_syntax_dsl$Elm$Pretty$singleQuotes = function(doc) {
        return A3($the_sett$elm_pretty_printer$Pretty$surround, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr("'")), $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr("'")), doc);
      };
      var $rtfeldman$elm_hex$Hex$unsafeToDigit = function(num) {
        unsafeToDigit:
          while (true) {
            switch (num) {
              case 0:
                return _Utils_chr("0");
              case 1:
                return _Utils_chr("1");
              case 2:
                return _Utils_chr("2");
              case 3:
                return _Utils_chr("3");
              case 4:
                return _Utils_chr("4");
              case 5:
                return _Utils_chr("5");
              case 6:
                return _Utils_chr("6");
              case 7:
                return _Utils_chr("7");
              case 8:
                return _Utils_chr("8");
              case 9:
                return _Utils_chr("9");
              case 10:
                return _Utils_chr("a");
              case 11:
                return _Utils_chr("b");
              case 12:
                return _Utils_chr("c");
              case 13:
                return _Utils_chr("d");
              case 14:
                return _Utils_chr("e");
              case 15:
                return _Utils_chr("f");
              default:
                var $temp$num = num;
                num = $temp$num;
                continue unsafeToDigit;
            }
          }
      };
      var $rtfeldman$elm_hex$Hex$unsafePositiveToDigits = F2(function(digits, num) {
        unsafePositiveToDigits:
          while (true) {
            if (num < 16) {
              return A2($elm$core$List$cons, $rtfeldman$elm_hex$Hex$unsafeToDigit(num), digits);
            } else {
              var $temp$digits = A2($elm$core$List$cons, $rtfeldman$elm_hex$Hex$unsafeToDigit(A2($elm$core$Basics$modBy, 16, num)), digits), $temp$num = num / 16 | 0;
              digits = $temp$digits;
              num = $temp$num;
              continue unsafePositiveToDigits;
            }
          }
      });
      var $rtfeldman$elm_hex$Hex$toString = function(num) {
        return $elm$core$String$fromList(num < 0 ? A2($elm$core$List$cons, _Utils_chr("-"), A2($rtfeldman$elm_hex$Hex$unsafePositiveToDigits, _List_Nil, -num)) : A2($rtfeldman$elm_hex$Hex$unsafePositiveToDigits, _List_Nil, num));
      };
      var $the_sett$elm_syntax_dsl$Elm$Pretty$prettyPatternInner = F2(function(isTop, pattern) {
        var _v0 = A2($the_sett$elm_syntax_dsl$Elm$Pretty$adjustPatternParentheses, isTop, pattern);
        switch (_v0.$) {
          case "AllPattern":
            return $the_sett$elm_pretty_printer$Pretty$string("_");
          case "UnitPattern":
            return $the_sett$elm_pretty_printer$Pretty$string("()");
          case "CharPattern":
            var val = _v0.a;
            return $the_sett$elm_syntax_dsl$Elm$Pretty$singleQuotes($the_sett$elm_pretty_printer$Pretty$string($the_sett$elm_syntax_dsl$Elm$Pretty$escapeChar(val)));
          case "StringPattern":
            var val = _v0.a;
            return $the_sett$elm_syntax_dsl$Elm$Pretty$quotes($the_sett$elm_pretty_printer$Pretty$string(val));
          case "IntPattern":
            var val = _v0.a;
            return $the_sett$elm_pretty_printer$Pretty$string($elm$core$String$fromInt(val));
          case "HexPattern":
            var val = _v0.a;
            return $the_sett$elm_pretty_printer$Pretty$string($rtfeldman$elm_hex$Hex$toString(val));
          case "FloatPattern":
            var val = _v0.a;
            return $the_sett$elm_pretty_printer$Pretty$string($elm$core$String$fromFloat(val));
          case "TuplePattern":
            var vals = _v0.a;
            return $the_sett$elm_pretty_printer$Pretty$parens(A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$space, A2($the_sett$elm_pretty_printer$Pretty$a, A2($the_sett$elm_pretty_printer$Pretty$join, $the_sett$elm_pretty_printer$Pretty$string(", "), A2($elm$core$List$map, $the_sett$elm_syntax_dsl$Elm$Pretty$prettyPatternInner(true), $the_sett$elm_syntax_dsl$Util$denodeAll(vals))), $the_sett$elm_pretty_printer$Pretty$space)));
          case "RecordPattern":
            var fields = _v0.a;
            return $the_sett$elm_pretty_printer$Pretty$braces(A3($the_sett$elm_pretty_printer$Pretty$surround, $the_sett$elm_pretty_printer$Pretty$space, $the_sett$elm_pretty_printer$Pretty$space, A2($the_sett$elm_pretty_printer$Pretty$join, $the_sett$elm_pretty_printer$Pretty$string(", "), A2($elm$core$List$map, $the_sett$elm_pretty_printer$Pretty$string, $the_sett$elm_syntax_dsl$Util$denodeAll(fields)))));
          case "UnConsPattern":
            var hdPat = _v0.a;
            var tlPat = _v0.b;
            return $the_sett$elm_pretty_printer$Pretty$words(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$Pretty$prettyPatternInner, false, $the_sett$elm_syntax_dsl$Util$denode(hdPat)), $the_sett$elm_pretty_printer$Pretty$string("::"), A2($the_sett$elm_syntax_dsl$Elm$Pretty$prettyPatternInner, false, $the_sett$elm_syntax_dsl$Util$denode(tlPat))]));
          case "ListPattern":
            var listPats = _v0.a;
            if (!listPats.b) {
              return $the_sett$elm_pretty_printer$Pretty$string("[]");
            } else {
              var open = A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$space, $the_sett$elm_pretty_printer$Pretty$string("["));
              var close = A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string("]"), $the_sett$elm_pretty_printer$Pretty$space);
              return A3($the_sett$elm_pretty_printer$Pretty$surround, open, close, A2($the_sett$elm_pretty_printer$Pretty$join, $the_sett$elm_pretty_printer$Pretty$string(", "), A2($elm$core$List$map, $the_sett$elm_syntax_dsl$Elm$Pretty$prettyPatternInner(false), $the_sett$elm_syntax_dsl$Util$denodeAll(listPats))));
            }
          case "VarPattern":
            var _var = _v0.a;
            return $the_sett$elm_pretty_printer$Pretty$string(_var);
          case "NamedPattern":
            var qnRef = _v0.a;
            var listPats = _v0.b;
            return $the_sett$elm_pretty_printer$Pretty$words(A2($elm$core$List$cons, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(qnRef.name), $the_sett$elm_syntax_dsl$Elm$Pretty$prettyModuleNameDot(qnRef.moduleName)), A2($elm$core$List$map, $the_sett$elm_syntax_dsl$Elm$Pretty$prettyPatternInner(false), $the_sett$elm_syntax_dsl$Util$denodeAll(listPats))));
          case "AsPattern":
            var pat = _v0.a;
            var name = _v0.b;
            return $the_sett$elm_pretty_printer$Pretty$words(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$Pretty$prettyPatternInner, false, $the_sett$elm_syntax_dsl$Util$denode(pat)), $the_sett$elm_pretty_printer$Pretty$string("as"), $the_sett$elm_pretty_printer$Pretty$string($the_sett$elm_syntax_dsl$Util$denode(name))]));
          default:
            var pat = _v0.a;
            return $the_sett$elm_pretty_printer$Pretty$parens(A2($the_sett$elm_syntax_dsl$Elm$Pretty$prettyPatternInner, true, $the_sett$elm_syntax_dsl$Util$denode(pat)));
        }
      });
      var $the_sett$elm_syntax_dsl$Elm$Pretty$prettyArgs = function(args) {
        return $the_sett$elm_pretty_printer$Pretty$words(A2($elm$core$List$map, $the_sett$elm_syntax_dsl$Elm$Pretty$prettyPatternInner(false), args));
      };
      var $elm$core$String$replace = F3(function(before, after, string) {
        return A2($elm$core$String$join, after, A2($elm$core$String$split, before, string));
      });
      var $the_sett$elm_syntax_dsl$Elm$Pretty$escape = function(val) {
        return A3($elm$core$String$replace, "	", "\\t", A3($elm$core$String$replace, "\n", "\\n", A3($elm$core$String$replace, '"', '\\"', A3($elm$core$String$replace, "\\", "\\\\", val))));
      };
      var $the_sett$elm_syntax_dsl$Elm$Pretty$prettyLiteral = function(val) {
        return $the_sett$elm_syntax_dsl$Elm$Pretty$quotes($the_sett$elm_pretty_printer$Pretty$string($the_sett$elm_syntax_dsl$Elm$Pretty$escape(val)));
      };
      var $the_sett$elm_syntax_dsl$Elm$Pretty$prettyPattern = function(pattern) {
        return A2($the_sett$elm_syntax_dsl$Elm$Pretty$prettyPatternInner, true, pattern);
      };
      var $the_sett$elm_syntax_dsl$Elm$Pretty$prettySignature = function(sig) {
        return $the_sett$elm_pretty_printer$Pretty$group(A2($the_sett$elm_pretty_printer$Pretty$nest, 4, $the_sett$elm_pretty_printer$Pretty$lines(_List_fromArray([$the_sett$elm_pretty_printer$Pretty$words(_List_fromArray([$the_sett$elm_pretty_printer$Pretty$string($the_sett$elm_syntax_dsl$Util$denode(sig.name)), $the_sett$elm_pretty_printer$Pretty$string(":")])), $the_sett$elm_syntax_dsl$Elm$Pretty$prettyTypeAnnotation($the_sett$elm_syntax_dsl$Util$denode(sig.typeAnnotation))]))));
      };
      var $the_sett$elm_pretty_printer$Pretty$tightline = A2($the_sett$elm_pretty_printer$Pretty$Line, "", "");
      var $elm$core$String$toUpper = _String_toUpper;
      var $the_sett$elm_syntax_dsl$Elm$Pretty$toHexString = function(val) {
        var padWithZeros = function(str) {
          var length = $elm$core$String$length(str);
          return length < 2 ? A3($elm$core$String$padLeft, 2, _Utils_chr("0"), str) : length > 2 && length < 4 ? A3($elm$core$String$padLeft, 4, _Utils_chr("0"), str) : length > 4 && length < 8 ? A3($elm$core$String$padLeft, 8, _Utils_chr("0"), str) : str;
        };
        return "0x" + padWithZeros($elm$core$String$toUpper($rtfeldman$elm_hex$Hex$toString(val)));
      };
      var $the_sett$elm_syntax_dsl$Elm$Pretty$topContext = {
        isLeftPipe: false,
        isTop: true,
        precedence: 11
      };
      var $elm$core$List$unzip = function(pairs) {
        var step = F2(function(_v0, _v1) {
          var x = _v0.a;
          var y = _v0.b;
          var xs = _v1.a;
          var ys = _v1.b;
          return _Utils_Tuple2(A2($elm$core$List$cons, x, xs), A2($elm$core$List$cons, y, ys));
        });
        return A3($elm$core$List$foldr, step, _Utils_Tuple2(_List_Nil, _List_Nil), pairs);
      };
      var $the_sett$elm_syntax_dsl$Elm$Pretty$prettyApplication = F2(function(indent, exprs) {
        var _v30 = A2($elm$core$Tuple$mapSecond, $Chadtech$elm_bool_extra$Bool$Extra$any, $elm$core$List$unzip(A2($elm$core$List$map, A2($the_sett$elm_syntax_dsl$Elm$Pretty$prettyExpressionInner, {
          isLeftPipe: false,
          isTop: false,
          precedence: 11
        }, 4), $the_sett$elm_syntax_dsl$Util$denodeAll(exprs))));
        var prettyExpressions = _v30.a;
        var alwaysBreak = _v30.b;
        return _Utils_Tuple2(A2($the_sett$elm_syntax_dsl$Elm$Pretty$optionalGroup, alwaysBreak, $the_sett$elm_pretty_printer$Pretty$align(A2($the_sett$elm_pretty_printer$Pretty$nest, indent, $the_sett$elm_pretty_printer$Pretty$lines(prettyExpressions)))), alwaysBreak);
      });
      var $the_sett$elm_syntax_dsl$Elm$Pretty$prettyCaseBlock = F2(function(indent, caseBlock) {
        var prettyCase = function(_v29) {
          var pattern = _v29.a;
          var expr = _v29.b;
          return A2($the_sett$elm_pretty_printer$Pretty$indent, indent, A2($the_sett$elm_pretty_printer$Pretty$a, A2($the_sett$elm_pretty_printer$Pretty$indent, 4, A3($the_sett$elm_syntax_dsl$Elm$Pretty$prettyExpressionInner, $the_sett$elm_syntax_dsl$Elm$Pretty$topContext, 4, $the_sett$elm_syntax_dsl$Util$denode(expr)).a), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(" ->"), $the_sett$elm_syntax_dsl$Elm$Pretty$prettyPattern($the_sett$elm_syntax_dsl$Util$denode(pattern))))));
        };
        var patternsPart = $the_sett$elm_syntax_dsl$Elm$Pretty$doubleLines(A2($elm$core$List$map, prettyCase, caseBlock.cases));
        var casePart = function() {
          var _v28 = A3($the_sett$elm_syntax_dsl$Elm$Pretty$prettyExpressionInner, $the_sett$elm_syntax_dsl$Elm$Pretty$topContext, 4, $the_sett$elm_syntax_dsl$Util$denode(caseBlock.expression));
          var caseExpression = _v28.a;
          var alwaysBreak = _v28.b;
          return A2($the_sett$elm_syntax_dsl$Elm$Pretty$optionalGroup, alwaysBreak, $the_sett$elm_pretty_printer$Pretty$lines(_List_fromArray([A2($the_sett$elm_pretty_printer$Pretty$nest, indent, A2($the_sett$elm_syntax_dsl$Elm$Pretty$optionalGroup, alwaysBreak, $the_sett$elm_pretty_printer$Pretty$lines(_List_fromArray([$the_sett$elm_pretty_printer$Pretty$string("case"), caseExpression])))), $the_sett$elm_pretty_printer$Pretty$string("of")])));
        }();
        return _Utils_Tuple2($the_sett$elm_pretty_printer$Pretty$align($the_sett$elm_pretty_printer$Pretty$lines(_List_fromArray([casePart, patternsPart]))), true);
      });
      var $the_sett$elm_syntax_dsl$Elm$Pretty$prettyExpression = function(expression) {
        return A3($the_sett$elm_syntax_dsl$Elm$Pretty$prettyExpressionInner, $the_sett$elm_syntax_dsl$Elm$Pretty$topContext, 4, expression).a;
      };
      var $the_sett$elm_syntax_dsl$Elm$Pretty$prettyExpressionInner = F3(function(context, indent, expression) {
        var _v26 = A2($the_sett$elm_syntax_dsl$Elm$Pretty$adjustExpressionParentheses, context, expression);
        switch (_v26.$) {
          case "UnitExpr":
            return _Utils_Tuple2($the_sett$elm_pretty_printer$Pretty$string("()"), false);
          case "Application":
            var exprs = _v26.a;
            return A2($the_sett$elm_syntax_dsl$Elm$Pretty$prettyApplication, indent, exprs);
          case "OperatorApplication":
            var symbol = _v26.a;
            var dir = _v26.b;
            var exprl = _v26.c;
            var exprr = _v26.d;
            return A5($the_sett$elm_syntax_dsl$Elm$Pretty$prettyOperatorApplication, indent, symbol, dir, exprl, exprr);
          case "FunctionOrValue":
            var modl = _v26.a;
            var val = _v26.b;
            return _Utils_Tuple2(A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(val), $the_sett$elm_syntax_dsl$Elm$Pretty$prettyModuleNameDot(modl)), false);
          case "IfBlock":
            var exprBool = _v26.a;
            var exprTrue = _v26.b;
            var exprFalse = _v26.c;
            return A4($the_sett$elm_syntax_dsl$Elm$Pretty$prettyIfBlock, indent, exprBool, exprTrue, exprFalse);
          case "PrefixOperator":
            var symbol = _v26.a;
            return _Utils_Tuple2($the_sett$elm_pretty_printer$Pretty$parens($the_sett$elm_pretty_printer$Pretty$string(symbol)), false);
          case "Operator":
            var symbol = _v26.a;
            return _Utils_Tuple2($the_sett$elm_pretty_printer$Pretty$string(symbol), false);
          case "Integer":
            var val = _v26.a;
            return _Utils_Tuple2($the_sett$elm_pretty_printer$Pretty$string($elm$core$String$fromInt(val)), false);
          case "Hex":
            var val = _v26.a;
            return _Utils_Tuple2($the_sett$elm_pretty_printer$Pretty$string($the_sett$elm_syntax_dsl$Elm$Pretty$toHexString(val)), false);
          case "Floatable":
            var val = _v26.a;
            return _Utils_Tuple2($the_sett$elm_pretty_printer$Pretty$string($elm$core$String$fromFloat(val)), false);
          case "Negation":
            var expr = _v26.a;
            var _v27 = A3($the_sett$elm_syntax_dsl$Elm$Pretty$prettyExpressionInner, $the_sett$elm_syntax_dsl$Elm$Pretty$topContext, 4, $the_sett$elm_syntax_dsl$Util$denode(expr));
            var prettyExpr = _v27.a;
            var alwaysBreak = _v27.b;
            return _Utils_Tuple2(A2($the_sett$elm_pretty_printer$Pretty$a, prettyExpr, $the_sett$elm_pretty_printer$Pretty$string("-")), alwaysBreak);
          case "Literal":
            var val = _v26.a;
            return _Utils_Tuple2($the_sett$elm_syntax_dsl$Elm$Pretty$prettyLiteral(val), false);
          case "CharLiteral":
            var val = _v26.a;
            return _Utils_Tuple2($the_sett$elm_syntax_dsl$Elm$Pretty$singleQuotes($the_sett$elm_pretty_printer$Pretty$string($the_sett$elm_syntax_dsl$Elm$Pretty$escapeChar(val))), false);
          case "TupledExpression":
            var exprs = _v26.a;
            return A2($the_sett$elm_syntax_dsl$Elm$Pretty$prettyTupledExpression, indent, exprs);
          case "ParenthesizedExpression":
            var expr = _v26.a;
            return A2($the_sett$elm_syntax_dsl$Elm$Pretty$prettyParenthesizedExpression, indent, expr);
          case "LetExpression":
            var letBlock = _v26.a;
            return A2($the_sett$elm_syntax_dsl$Elm$Pretty$prettyLetBlock, indent, letBlock);
          case "CaseExpression":
            var caseBlock = _v26.a;
            return A2($the_sett$elm_syntax_dsl$Elm$Pretty$prettyCaseBlock, indent, caseBlock);
          case "LambdaExpression":
            var lambda = _v26.a;
            return A2($the_sett$elm_syntax_dsl$Elm$Pretty$prettyLambdaExpression, indent, lambda);
          case "RecordExpr":
            var setters = _v26.a;
            return $the_sett$elm_syntax_dsl$Elm$Pretty$prettyRecordExpr(setters);
          case "ListExpr":
            var exprs = _v26.a;
            return A2($the_sett$elm_syntax_dsl$Elm$Pretty$prettyList, indent, exprs);
          case "RecordAccess":
            var expr = _v26.a;
            var field = _v26.b;
            return A2($the_sett$elm_syntax_dsl$Elm$Pretty$prettyRecordAccess, expr, field);
          case "RecordAccessFunction":
            var field = _v26.a;
            return _Utils_Tuple2($the_sett$elm_pretty_printer$Pretty$string(field), false);
          case "RecordUpdateExpression":
            var _var = _v26.a;
            var setters = _v26.b;
            return A3($the_sett$elm_syntax_dsl$Elm$Pretty$prettyRecordUpdateExpression, indent, _var, setters);
          default:
            var val = _v26.a;
            return _Utils_Tuple2($the_sett$elm_pretty_printer$Pretty$string("glsl"), true);
        }
      });
      var $the_sett$elm_syntax_dsl$Elm$Pretty$prettyFun = function(fn) {
        return $the_sett$elm_pretty_printer$Pretty$lines(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$Pretty$prettyMaybe, $the_sett$elm_syntax_dsl$Elm$Pretty$prettyDocumentation, $the_sett$elm_syntax_dsl$Util$denodeMaybe(fn.documentation)), A2($the_sett$elm_syntax_dsl$Elm$Pretty$prettyMaybe, $the_sett$elm_syntax_dsl$Elm$Pretty$prettySignature, $the_sett$elm_syntax_dsl$Util$denodeMaybe(fn.signature)), $the_sett$elm_syntax_dsl$Elm$Pretty$prettyFunctionImplementation($the_sett$elm_syntax_dsl$Util$denode(fn.declaration))]));
      };
      var $the_sett$elm_syntax_dsl$Elm$Pretty$prettyFunctionImplementation = function(impl) {
        return A2($the_sett$elm_pretty_printer$Pretty$nest, 4, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_syntax_dsl$Elm$Pretty$prettyExpression($the_sett$elm_syntax_dsl$Util$denode(impl.expression)), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, $the_sett$elm_pretty_printer$Pretty$words(_List_fromArray([$the_sett$elm_pretty_printer$Pretty$string($the_sett$elm_syntax_dsl$Util$denode(impl.name)), $the_sett$elm_syntax_dsl$Elm$Pretty$prettyArgs($the_sett$elm_syntax_dsl$Util$denodeAll(impl._arguments)), $the_sett$elm_pretty_printer$Pretty$string("=")])))));
      };
      var $the_sett$elm_syntax_dsl$Elm$Pretty$prettyIfBlock = F4(function(indent, exprBool, exprTrue, exprFalse) {
        var innerIfBlock = F3(function(innerExprBool, innerExprTrue, innerExprFalse) {
          var truePart = A2($the_sett$elm_pretty_printer$Pretty$indent, indent, A3($the_sett$elm_syntax_dsl$Elm$Pretty$prettyExpressionInner, $the_sett$elm_syntax_dsl$Elm$Pretty$topContext, 4, $the_sett$elm_syntax_dsl$Util$denode(innerExprTrue)).a);
          var ifPart = function() {
            var _v25 = A3($the_sett$elm_syntax_dsl$Elm$Pretty$prettyExpressionInner, $the_sett$elm_syntax_dsl$Elm$Pretty$topContext, 4, $the_sett$elm_syntax_dsl$Util$denode(innerExprBool));
            var prettyBoolExpr = _v25.a;
            var alwaysBreak = _v25.b;
            return A2($the_sett$elm_syntax_dsl$Elm$Pretty$optionalGroup, alwaysBreak, $the_sett$elm_pretty_printer$Pretty$lines(_List_fromArray([A2($the_sett$elm_pretty_printer$Pretty$nest, indent, A2($the_sett$elm_syntax_dsl$Elm$Pretty$optionalGroup, alwaysBreak, $the_sett$elm_pretty_printer$Pretty$lines(_List_fromArray([$the_sett$elm_pretty_printer$Pretty$string("if"), A3($the_sett$elm_syntax_dsl$Elm$Pretty$prettyExpressionInner, $the_sett$elm_syntax_dsl$Elm$Pretty$topContext, 4, $the_sett$elm_syntax_dsl$Util$denode(innerExprBool)).a])))), $the_sett$elm_pretty_printer$Pretty$string("then")])));
          }();
          var falsePart = function() {
            var _v24 = $the_sett$elm_syntax_dsl$Util$denode(innerExprFalse);
            if (_v24.$ === "IfBlock") {
              var nestedExprBool = _v24.a;
              var nestedExprTrue = _v24.b;
              var nestedExprFalse = _v24.c;
              return A3(innerIfBlock, nestedExprBool, nestedExprTrue, nestedExprFalse);
            } else {
              return _List_fromArray([A2($the_sett$elm_pretty_printer$Pretty$indent, indent, A3($the_sett$elm_syntax_dsl$Elm$Pretty$prettyExpressionInner, $the_sett$elm_syntax_dsl$Elm$Pretty$topContext, 4, $the_sett$elm_syntax_dsl$Util$denode(innerExprFalse)).a)]);
            }
          }();
          var elsePart = A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string("else"), $the_sett$elm_pretty_printer$Pretty$line);
          var context = $the_sett$elm_syntax_dsl$Elm$Pretty$topContext;
          if (!falsePart.b) {
            return _List_Nil;
          } else {
            if (!falsePart.b.b) {
              var falseExpr = falsePart.a;
              return _List_fromArray([ifPart, truePart, elsePart, falseExpr]);
            } else {
              var hd = falsePart.a;
              var tl = falsePart.b;
              return A2($elm$core$List$append, _List_fromArray([ifPart, truePart, $the_sett$elm_pretty_printer$Pretty$words(_List_fromArray([elsePart, hd]))]), tl);
            }
          }
        });
        var prettyExpressions = A3(innerIfBlock, exprBool, exprTrue, exprFalse);
        return _Utils_Tuple2($the_sett$elm_pretty_printer$Pretty$align($the_sett$elm_pretty_printer$Pretty$lines(prettyExpressions)), true);
      });
      var $the_sett$elm_syntax_dsl$Elm$Pretty$prettyLambdaExpression = F2(function(indent, lambda) {
        var _v22 = A3($the_sett$elm_syntax_dsl$Elm$Pretty$prettyExpressionInner, $the_sett$elm_syntax_dsl$Elm$Pretty$topContext, 4, $the_sett$elm_syntax_dsl$Util$denode(lambda.expression));
        var prettyExpr = _v22.a;
        var alwaysBreak = _v22.b;
        return _Utils_Tuple2(A2($the_sett$elm_syntax_dsl$Elm$Pretty$optionalGroup, alwaysBreak, $the_sett$elm_pretty_printer$Pretty$align(A2($the_sett$elm_pretty_printer$Pretty$nest, indent, $the_sett$elm_pretty_printer$Pretty$lines(_List_fromArray([A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(" ->"), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$words(A2($elm$core$List$map, $the_sett$elm_syntax_dsl$Elm$Pretty$prettyPatternInner(false), $the_sett$elm_syntax_dsl$Util$denodeAll(lambda.args))), $the_sett$elm_pretty_printer$Pretty$string("\\"))), prettyExpr]))))), alwaysBreak);
      });
      var $the_sett$elm_syntax_dsl$Elm$Pretty$prettyLetBlock = F2(function(indent, letBlock) {
        return _Utils_Tuple2($the_sett$elm_pretty_printer$Pretty$align($the_sett$elm_pretty_printer$Pretty$lines(_List_fromArray([$the_sett$elm_pretty_printer$Pretty$string("let"), A2($the_sett$elm_pretty_printer$Pretty$indent, indent, $the_sett$elm_syntax_dsl$Elm$Pretty$doubleLines(A2($elm$core$List$map, $the_sett$elm_syntax_dsl$Elm$Pretty$prettyLetDeclaration(indent), $the_sett$elm_syntax_dsl$Util$denodeAll(letBlock.declarations)))), $the_sett$elm_pretty_printer$Pretty$string("in"), A3($the_sett$elm_syntax_dsl$Elm$Pretty$prettyExpressionInner, $the_sett$elm_syntax_dsl$Elm$Pretty$topContext, 4, $the_sett$elm_syntax_dsl$Util$denode(letBlock.expression)).a]))), true);
      });
      var $the_sett$elm_syntax_dsl$Elm$Pretty$prettyLetDeclaration = F2(function(indent, letDecl) {
        if (letDecl.$ === "LetFunction") {
          var fn = letDecl.a;
          return $the_sett$elm_syntax_dsl$Elm$Pretty$prettyFun(fn);
        } else {
          var pattern = letDecl.a;
          var expr = letDecl.b;
          return A2($the_sett$elm_pretty_printer$Pretty$a, A2($the_sett$elm_pretty_printer$Pretty$indent, indent, A3($the_sett$elm_syntax_dsl$Elm$Pretty$prettyExpressionInner, $the_sett$elm_syntax_dsl$Elm$Pretty$topContext, 4, $the_sett$elm_syntax_dsl$Util$denode(expr)).a), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, $the_sett$elm_pretty_printer$Pretty$words(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$Pretty$prettyPatternInner, false, $the_sett$elm_syntax_dsl$Util$denode(pattern)), $the_sett$elm_pretty_printer$Pretty$string("=")]))));
        }
      });
      var $the_sett$elm_syntax_dsl$Elm$Pretty$prettyList = F2(function(indent, exprs) {
        var open = A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$space, $the_sett$elm_pretty_printer$Pretty$string("["));
        var close = A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string("]"), $the_sett$elm_pretty_printer$Pretty$line);
        if (!exprs.b) {
          return _Utils_Tuple2($the_sett$elm_pretty_printer$Pretty$string("[]"), false);
        } else {
          var _v20 = A2($elm$core$Tuple$mapSecond, $Chadtech$elm_bool_extra$Bool$Extra$any, $elm$core$List$unzip(A2($elm$core$List$map, A2($the_sett$elm_syntax_dsl$Elm$Pretty$prettyExpressionInner, $the_sett$elm_syntax_dsl$Elm$Pretty$topContext, A2($the_sett$elm_syntax_dsl$Elm$Pretty$decrementIndent, indent, 2)), $the_sett$elm_syntax_dsl$Util$denodeAll(exprs))));
          var prettyExpressions = _v20.a;
          var alwaysBreak = _v20.b;
          return _Utils_Tuple2(A2($the_sett$elm_syntax_dsl$Elm$Pretty$optionalGroup, alwaysBreak, $the_sett$elm_pretty_printer$Pretty$align(A3($the_sett$elm_pretty_printer$Pretty$surround, open, close, A2($the_sett$elm_pretty_printer$Pretty$separators, ", ", prettyExpressions)))), alwaysBreak);
        }
      });
      var $the_sett$elm_syntax_dsl$Elm$Pretty$prettyOperatorApplication = F5(function(indent, symbol, dir, exprl, exprr) {
        return symbol === "<|" ? A5($the_sett$elm_syntax_dsl$Elm$Pretty$prettyOperatorApplicationLeft, indent, symbol, dir, exprl, exprr) : A5($the_sett$elm_syntax_dsl$Elm$Pretty$prettyOperatorApplicationRight, indent, symbol, dir, exprl, exprr);
      });
      var $the_sett$elm_syntax_dsl$Elm$Pretty$prettyOperatorApplicationLeft = F5(function(indent, symbol, _v16, exprl, exprr) {
        var context = {
          isLeftPipe: true,
          isTop: false,
          precedence: $the_sett$elm_syntax_dsl$Elm$Pretty$precedence(symbol)
        };
        var _v17 = A3($the_sett$elm_syntax_dsl$Elm$Pretty$prettyExpressionInner, context, 4, $the_sett$elm_syntax_dsl$Util$denode(exprr));
        var prettyExpressionRight = _v17.a;
        var alwaysBreakRight = _v17.b;
        var _v18 = A3($the_sett$elm_syntax_dsl$Elm$Pretty$prettyExpressionInner, context, 4, $the_sett$elm_syntax_dsl$Util$denode(exprl));
        var prettyExpressionLeft = _v18.a;
        var alwaysBreakLeft = _v18.b;
        var alwaysBreak = alwaysBreakLeft || alwaysBreakRight;
        return _Utils_Tuple2(A2($the_sett$elm_pretty_printer$Pretty$nest, 4, A2($the_sett$elm_syntax_dsl$Elm$Pretty$optionalGroup, alwaysBreak, $the_sett$elm_pretty_printer$Pretty$lines(_List_fromArray([$the_sett$elm_pretty_printer$Pretty$words(_List_fromArray([prettyExpressionLeft, $the_sett$elm_pretty_printer$Pretty$string(symbol)])), prettyExpressionRight])))), alwaysBreak);
      });
      var $the_sett$elm_syntax_dsl$Elm$Pretty$prettyOperatorApplicationRight = F5(function(indent, symbol, _v11, exprl, exprr) {
        var expandExpr = F3(function(innerIndent, context, expr) {
          if (expr.$ === "OperatorApplication") {
            var sym = expr.a;
            var left = expr.c;
            var right = expr.d;
            return A4(innerOpApply, false, sym, left, right);
          } else {
            return _List_fromArray([A3($the_sett$elm_syntax_dsl$Elm$Pretty$prettyExpressionInner, context, innerIndent, expr)]);
          }
        });
        var innerOpApply = F4(function(isTop, sym, left, right) {
          var innerIndent = A2($the_sett$elm_syntax_dsl$Elm$Pretty$decrementIndent, 4, $elm$core$String$length(symbol) + 1);
          var leftIndent = isTop ? indent : innerIndent;
          var context = {
            isLeftPipe: "<|" === sym,
            isTop: false,
            precedence: $the_sett$elm_syntax_dsl$Elm$Pretty$precedence(sym)
          };
          var rightSide = A3(expandExpr, innerIndent, context, $the_sett$elm_syntax_dsl$Util$denode(right));
          if (rightSide.b) {
            var _v14 = rightSide.a;
            var hdExpr = _v14.a;
            var hdBreak = _v14.b;
            var tl = rightSide.b;
            return A2($elm$core$List$append, A3(expandExpr, leftIndent, context, $the_sett$elm_syntax_dsl$Util$denode(left)), A2($elm$core$List$cons, _Utils_Tuple2(A2($the_sett$elm_pretty_printer$Pretty$a, hdExpr, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$space, $the_sett$elm_pretty_printer$Pretty$string(sym))), hdBreak), tl));
          } else {
            return _List_Nil;
          }
        });
        var _v12 = A2($elm$core$Tuple$mapSecond, $Chadtech$elm_bool_extra$Bool$Extra$any, $elm$core$List$unzip(A4(innerOpApply, true, symbol, exprl, exprr)));
        var prettyExpressions = _v12.a;
        var alwaysBreak = _v12.b;
        return _Utils_Tuple2(A2($the_sett$elm_syntax_dsl$Elm$Pretty$optionalGroup, alwaysBreak, $the_sett$elm_pretty_printer$Pretty$align(A2($the_sett$elm_pretty_printer$Pretty$join, A2($the_sett$elm_pretty_printer$Pretty$nest, indent, $the_sett$elm_pretty_printer$Pretty$line), prettyExpressions))), alwaysBreak);
      });
      var $the_sett$elm_syntax_dsl$Elm$Pretty$prettyParenthesizedExpression = F2(function(indent, expr) {
        var open = $the_sett$elm_pretty_printer$Pretty$string("(");
        var close = A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(")"), $the_sett$elm_pretty_printer$Pretty$tightline);
        var _v10 = A3($the_sett$elm_syntax_dsl$Elm$Pretty$prettyExpressionInner, $the_sett$elm_syntax_dsl$Elm$Pretty$topContext, A2($the_sett$elm_syntax_dsl$Elm$Pretty$decrementIndent, indent, 1), $the_sett$elm_syntax_dsl$Util$denode(expr));
        var prettyExpr = _v10.a;
        var alwaysBreak = _v10.b;
        return _Utils_Tuple2(A2($the_sett$elm_syntax_dsl$Elm$Pretty$optionalGroup, alwaysBreak, $the_sett$elm_pretty_printer$Pretty$align(A3($the_sett$elm_pretty_printer$Pretty$surround, open, close, A2($the_sett$elm_pretty_printer$Pretty$nest, 1, prettyExpr)))), alwaysBreak);
      });
      var $the_sett$elm_syntax_dsl$Elm$Pretty$prettyRecordAccess = F2(function(expr, field) {
        var _v9 = A3($the_sett$elm_syntax_dsl$Elm$Pretty$prettyExpressionInner, $the_sett$elm_syntax_dsl$Elm$Pretty$topContext, 4, $the_sett$elm_syntax_dsl$Util$denode(expr));
        var prettyExpr = _v9.a;
        var alwaysBreak = _v9.b;
        return _Utils_Tuple2(A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string($the_sett$elm_syntax_dsl$Util$denode(field)), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_syntax_dsl$Elm$Pretty$dot, prettyExpr)), alwaysBreak);
      });
      var $the_sett$elm_syntax_dsl$Elm$Pretty$prettyRecordExpr = function(setters) {
        var open = A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$space, $the_sett$elm_pretty_printer$Pretty$string("{"));
        var close = A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string("}"), $the_sett$elm_pretty_printer$Pretty$line);
        if (!setters.b) {
          return _Utils_Tuple2($the_sett$elm_pretty_printer$Pretty$string("{}"), false);
        } else {
          var _v8 = A2($elm$core$Tuple$mapSecond, $Chadtech$elm_bool_extra$Bool$Extra$any, $elm$core$List$unzip(A2($elm$core$List$map, $the_sett$elm_syntax_dsl$Elm$Pretty$prettySetter, $the_sett$elm_syntax_dsl$Util$denodeAll(setters))));
          var prettyExpressions = _v8.a;
          var alwaysBreak = _v8.b;
          return _Utils_Tuple2(A2($the_sett$elm_syntax_dsl$Elm$Pretty$optionalGroup, alwaysBreak, $the_sett$elm_pretty_printer$Pretty$align(A3($the_sett$elm_pretty_printer$Pretty$surround, open, close, A2($the_sett$elm_pretty_printer$Pretty$separators, ", ", prettyExpressions)))), alwaysBreak);
        }
      };
      var $the_sett$elm_syntax_dsl$Elm$Pretty$prettyRecordUpdateExpression = F3(function(indent, _var, setters) {
        var open = A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, $the_sett$elm_pretty_printer$Pretty$words(_List_fromArray([$the_sett$elm_pretty_printer$Pretty$string("{"), $the_sett$elm_pretty_printer$Pretty$string($the_sett$elm_syntax_dsl$Util$denode(_var))])));
        var close = A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string("}"), $the_sett$elm_pretty_printer$Pretty$line);
        var addBarToFirst = function(exprs) {
          if (!exprs.b) {
            return _List_Nil;
          } else {
            var hd = exprs.a;
            var tl = exprs.b;
            return A2($elm$core$List$cons, A2($the_sett$elm_pretty_printer$Pretty$a, hd, $the_sett$elm_pretty_printer$Pretty$string("| ")), tl);
          }
        };
        if (!setters.b) {
          return _Utils_Tuple2($the_sett$elm_pretty_printer$Pretty$string("{}"), false);
        } else {
          var _v5 = A2($elm$core$Tuple$mapSecond, $Chadtech$elm_bool_extra$Bool$Extra$any, $elm$core$List$unzip(A2($elm$core$List$map, $the_sett$elm_syntax_dsl$Elm$Pretty$prettySetter, $the_sett$elm_syntax_dsl$Util$denodeAll(setters))));
          var prettyExpressions = _v5.a;
          var alwaysBreak = _v5.b;
          return _Utils_Tuple2(A2($the_sett$elm_syntax_dsl$Elm$Pretty$optionalGroup, alwaysBreak, $the_sett$elm_pretty_printer$Pretty$align(A3($the_sett$elm_pretty_printer$Pretty$surround, $the_sett$elm_pretty_printer$Pretty$empty, close, A2($the_sett$elm_pretty_printer$Pretty$nest, indent, A2($the_sett$elm_pretty_printer$Pretty$a, A2($the_sett$elm_pretty_printer$Pretty$separators, ", ", addBarToFirst(prettyExpressions)), open))))), alwaysBreak);
        }
      });
      var $the_sett$elm_syntax_dsl$Elm$Pretty$prettySetter = function(_v2) {
        var fld = _v2.a;
        var val = _v2.b;
        var _v3 = A3($the_sett$elm_syntax_dsl$Elm$Pretty$prettyExpressionInner, $the_sett$elm_syntax_dsl$Elm$Pretty$topContext, 4, $the_sett$elm_syntax_dsl$Util$denode(val));
        var prettyExpr = _v3.a;
        var alwaysBreak = _v3.b;
        return _Utils_Tuple2(A2($the_sett$elm_pretty_printer$Pretty$nest, 4, A2($the_sett$elm_syntax_dsl$Elm$Pretty$optionalGroup, alwaysBreak, $the_sett$elm_pretty_printer$Pretty$lines(_List_fromArray([$the_sett$elm_pretty_printer$Pretty$words(_List_fromArray([$the_sett$elm_pretty_printer$Pretty$string($the_sett$elm_syntax_dsl$Util$denode(fld)), $the_sett$elm_pretty_printer$Pretty$string("=")])), prettyExpr])))), alwaysBreak);
      };
      var $the_sett$elm_syntax_dsl$Elm$Pretty$prettyTupledExpression = F2(function(indent, exprs) {
        var open = A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$space, $the_sett$elm_pretty_printer$Pretty$string("("));
        var close = A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(")"), $the_sett$elm_pretty_printer$Pretty$line);
        if (!exprs.b) {
          return _Utils_Tuple2($the_sett$elm_pretty_printer$Pretty$string("()"), false);
        } else {
          var _v1 = A2($elm$core$Tuple$mapSecond, $Chadtech$elm_bool_extra$Bool$Extra$any, $elm$core$List$unzip(A2($elm$core$List$map, A2($the_sett$elm_syntax_dsl$Elm$Pretty$prettyExpressionInner, $the_sett$elm_syntax_dsl$Elm$Pretty$topContext, A2($the_sett$elm_syntax_dsl$Elm$Pretty$decrementIndent, indent, 2)), $the_sett$elm_syntax_dsl$Util$denodeAll(exprs))));
          var prettyExpressions = _v1.a;
          var alwaysBreak = _v1.b;
          return _Utils_Tuple2(A2($the_sett$elm_syntax_dsl$Elm$Pretty$optionalGroup, alwaysBreak, $the_sett$elm_pretty_printer$Pretty$align(A3($the_sett$elm_pretty_printer$Pretty$surround, open, close, A2($the_sett$elm_pretty_printer$Pretty$separators, ", ", prettyExpressions)))), alwaysBreak);
        }
      });
      var $the_sett$elm_syntax_dsl$Elm$Pretty$prettyDestructuring = F2(function(pattern, expr) {
        return A2($the_sett$elm_pretty_printer$Pretty$nest, 4, $the_sett$elm_pretty_printer$Pretty$lines(_List_fromArray([$the_sett$elm_pretty_printer$Pretty$words(_List_fromArray([$the_sett$elm_syntax_dsl$Elm$Pretty$prettyPattern(pattern), $the_sett$elm_pretty_printer$Pretty$string("=")])), $the_sett$elm_syntax_dsl$Elm$Pretty$prettyExpression(expr)])));
      });
      var $the_sett$elm_syntax_dsl$Elm$Pretty$prettyInfix = function(infix_) {
        var dirToString = function(direction) {
          switch (direction.$) {
            case "Left":
              return "left";
            case "Right":
              return "right";
            default:
              return "non";
          }
        };
        return $the_sett$elm_pretty_printer$Pretty$words(_List_fromArray([$the_sett$elm_pretty_printer$Pretty$string("infix"), $the_sett$elm_pretty_printer$Pretty$string(dirToString($the_sett$elm_syntax_dsl$Util$denode(infix_.direction))), $the_sett$elm_pretty_printer$Pretty$string($elm$core$String$fromInt($the_sett$elm_syntax_dsl$Util$denode(infix_.precedence))), $the_sett$elm_pretty_printer$Pretty$parens($the_sett$elm_pretty_printer$Pretty$string($the_sett$elm_syntax_dsl$Util$denode(infix_.operator))), $the_sett$elm_pretty_printer$Pretty$string("="), $the_sett$elm_pretty_printer$Pretty$string($the_sett$elm_syntax_dsl$Util$denode(infix_._function))]));
      };
      var $the_sett$elm_syntax_dsl$Elm$Pretty$prettyPortDeclaration = function(sig) {
        return $the_sett$elm_pretty_printer$Pretty$words(_List_fromArray([$the_sett$elm_pretty_printer$Pretty$string("port"), $the_sett$elm_syntax_dsl$Elm$Pretty$prettySignature(sig)]));
      };
      var $the_sett$elm_syntax_dsl$Elm$Pretty$prettyTypeAlias = function(tAlias) {
        var typeAliasPretty = A2($the_sett$elm_pretty_printer$Pretty$nest, 4, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_syntax_dsl$Elm$Pretty$prettyTypeAnnotation($the_sett$elm_syntax_dsl$Util$denode(tAlias.typeAnnotation)), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, $the_sett$elm_pretty_printer$Pretty$words(_List_fromArray([$the_sett$elm_pretty_printer$Pretty$string("type alias"), $the_sett$elm_pretty_printer$Pretty$string($the_sett$elm_syntax_dsl$Util$denode(tAlias.name)), $the_sett$elm_pretty_printer$Pretty$words(A2($elm$core$List$map, $the_sett$elm_pretty_printer$Pretty$string, $the_sett$elm_syntax_dsl$Util$denodeAll(tAlias.generics))), $the_sett$elm_pretty_printer$Pretty$string("=")])))));
        return $the_sett$elm_pretty_printer$Pretty$lines(_List_fromArray([A2($the_sett$elm_syntax_dsl$Elm$Pretty$prettyMaybe, $the_sett$elm_syntax_dsl$Elm$Pretty$prettyDocumentation, $the_sett$elm_syntax_dsl$Util$denodeMaybe(tAlias.documentation)), typeAliasPretty]));
      };
      var $the_sett$elm_syntax_dsl$Elm$Pretty$prettyElmSyntaxDeclaration = function(decl) {
        switch (decl.$) {
          case "FunctionDeclaration":
            var fn = decl.a;
            return $the_sett$elm_syntax_dsl$Elm$Pretty$prettyFun(fn);
          case "AliasDeclaration":
            var tAlias = decl.a;
            return $the_sett$elm_syntax_dsl$Elm$Pretty$prettyTypeAlias(tAlias);
          case "CustomTypeDeclaration":
            var type_ = decl.a;
            return $the_sett$elm_syntax_dsl$Elm$Pretty$prettyCustomType(type_);
          case "PortDeclaration":
            var sig = decl.a;
            return $the_sett$elm_syntax_dsl$Elm$Pretty$prettyPortDeclaration(sig);
          case "InfixDeclaration":
            var infix_ = decl.a;
            return $the_sett$elm_syntax_dsl$Elm$Pretty$prettyInfix(infix_);
          default:
            var pattern = decl.a;
            var expr = decl.b;
            return A2($the_sett$elm_syntax_dsl$Elm$Pretty$prettyDestructuring, $the_sett$elm_syntax_dsl$Util$denode(pattern), $the_sett$elm_syntax_dsl$Util$denode(expr));
        }
      };
      var $the_sett$elm_syntax_dsl$Elm$Pretty$prettyDeclarations = function(decls) {
        return $the_sett$elm_syntax_dsl$Elm$Pretty$doubleLines(A2($elm$core$List$map, function(decl) {
          return A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, $the_sett$elm_syntax_dsl$Elm$Pretty$prettyElmSyntaxDeclaration(decl));
        }, decls));
      };
      var $the_sett$elm_syntax_dsl$Elm$Comments$delimeters = function(doc) {
        return A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string("-}"), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, A2($the_sett$elm_pretty_printer$Pretty$a, doc, $the_sett$elm_pretty_printer$Pretty$string("{-| "))));
      };
      var $the_sett$elm_syntax_dsl$Elm$Comments$getParts = function(_v0) {
        var parts = _v0.a;
        return $elm$core$List$reverse(parts);
      };
      var $the_sett$elm_pretty_printer$Pretty$NLine = F3(function(a, b, c) {
        return {
          $: "NLine",
          a,
          b,
          c
        };
      });
      var $the_sett$elm_pretty_printer$Pretty$NNil = {
        $: "NNil"
      };
      var $the_sett$elm_pretty_printer$Pretty$NText = F2(function(a, b) {
        return {
          $: "NText",
          a,
          b
        };
      });
      var $the_sett$elm_pretty_printer$Pretty$fits = F2(function(w, normal) {
        fits:
          while (true) {
            if (w < 0) {
              return false;
            } else {
              switch (normal.$) {
                case "NNil":
                  return true;
                case "NText":
                  var text = normal.a;
                  var innerNormal = normal.b;
                  var $temp$w = w - $elm$core$String$length(text), $temp$normal = innerNormal(_Utils_Tuple0);
                  w = $temp$w;
                  normal = $temp$normal;
                  continue fits;
                default:
                  return true;
              }
            }
          }
      });
      var $the_sett$elm_pretty_printer$Pretty$better = F4(function(w, k, doc, doc2Fn) {
        return A2($the_sett$elm_pretty_printer$Pretty$fits, w - k, doc) ? doc : doc2Fn(_Utils_Tuple0);
      });
      var $the_sett$elm_pretty_printer$Pretty$best = F3(function(width, startCol, x) {
        var be = F3(function(w, k, docs) {
          be:
            while (true) {
              if (!docs.b) {
                return $the_sett$elm_pretty_printer$Pretty$NNil;
              } else {
                switch (docs.a.b.$) {
                  case "Empty":
                    var _v1 = docs.a;
                    var i = _v1.a;
                    var _v2 = _v1.b;
                    var ds = docs.b;
                    var $temp$w = w, $temp$k = k, $temp$docs = ds;
                    w = $temp$w;
                    k = $temp$k;
                    docs = $temp$docs;
                    continue be;
                  case "Concatenate":
                    var _v3 = docs.a;
                    var i = _v3.a;
                    var _v4 = _v3.b;
                    var doc = _v4.a;
                    var doc2 = _v4.b;
                    var ds = docs.b;
                    var $temp$w = w, $temp$k = k, $temp$docs = A2($elm$core$List$cons, _Utils_Tuple2(i, doc(_Utils_Tuple0)), A2($elm$core$List$cons, _Utils_Tuple2(i, doc2(_Utils_Tuple0)), ds));
                    w = $temp$w;
                    k = $temp$k;
                    docs = $temp$docs;
                    continue be;
                  case "Nest":
                    var _v5 = docs.a;
                    var i = _v5.a;
                    var _v6 = _v5.b;
                    var j = _v6.a;
                    var doc = _v6.b;
                    var ds = docs.b;
                    var $temp$w = w, $temp$k = k, $temp$docs = A2($elm$core$List$cons, _Utils_Tuple2(i + j, doc(_Utils_Tuple0)), ds);
                    w = $temp$w;
                    k = $temp$k;
                    docs = $temp$docs;
                    continue be;
                  case "Text":
                    var _v7 = docs.a;
                    var i = _v7.a;
                    var text = _v7.b.a;
                    var ds = docs.b;
                    return A2($the_sett$elm_pretty_printer$Pretty$NText, text, function(_v8) {
                      return A3(be, w, k + $elm$core$String$length(text), ds);
                    });
                  case "Line":
                    var _v9 = docs.a;
                    var i = _v9.a;
                    var _v10 = _v9.b;
                    var vsep = _v10.b;
                    var ds = docs.b;
                    return A3($the_sett$elm_pretty_printer$Pretty$NLine, i, vsep, function(_v11) {
                      return A3(be, w, i + $elm$core$String$length(vsep), ds);
                    });
                  case "Union":
                    var _v12 = docs.a;
                    var i = _v12.a;
                    var _v13 = _v12.b;
                    var doc = _v13.a;
                    var doc2 = _v13.b;
                    var ds = docs.b;
                    return A4($the_sett$elm_pretty_printer$Pretty$better, w, k, A3(be, w, k, A2($elm$core$List$cons, _Utils_Tuple2(i, doc), ds)), function(_v14) {
                      return A3(be, w, k, A2($elm$core$List$cons, _Utils_Tuple2(i, doc2), ds));
                    });
                  case "Nesting":
                    var _v15 = docs.a;
                    var i = _v15.a;
                    var fn = _v15.b.a;
                    var ds = docs.b;
                    var $temp$w = w, $temp$k = k, $temp$docs = A2($elm$core$List$cons, _Utils_Tuple2(i, fn(i)), ds);
                    w = $temp$w;
                    k = $temp$k;
                    docs = $temp$docs;
                    continue be;
                  default:
                    var _v16 = docs.a;
                    var i = _v16.a;
                    var fn = _v16.b.a;
                    var ds = docs.b;
                    var $temp$w = w, $temp$k = k, $temp$docs = A2($elm$core$List$cons, _Utils_Tuple2(i, fn(k)), ds);
                    w = $temp$w;
                    k = $temp$k;
                    docs = $temp$docs;
                    continue be;
                }
              }
            }
        });
        return A3(be, width, startCol, _List_fromArray([_Utils_Tuple2(0, x)]));
      });
      var $the_sett$elm_pretty_printer$Pretty$layout = function(normal) {
        var layoutInner = F2(function(normal2, acc) {
          layoutInner:
            while (true) {
              switch (normal2.$) {
                case "NNil":
                  return acc;
                case "NText":
                  var text = normal2.a;
                  var innerNormal = normal2.b;
                  var $temp$normal2 = innerNormal(_Utils_Tuple0), $temp$acc = A2($elm$core$List$cons, text, acc);
                  normal2 = $temp$normal2;
                  acc = $temp$acc;
                  continue layoutInner;
                default:
                  var i = normal2.a;
                  var sep = normal2.b;
                  var innerNormal = normal2.c;
                  var norm = innerNormal(_Utils_Tuple0);
                  if (norm.$ === "NLine") {
                    var $temp$normal2 = innerNormal(_Utils_Tuple0), $temp$acc = A2($elm$core$List$cons, "\n" + sep, acc);
                    normal2 = $temp$normal2;
                    acc = $temp$acc;
                    continue layoutInner;
                  } else {
                    var $temp$normal2 = innerNormal(_Utils_Tuple0), $temp$acc = A2($elm$core$List$cons, "\n" + (A2($the_sett$elm_pretty_printer$Pretty$copy, i, " ") + sep), acc);
                    normal2 = $temp$normal2;
                    acc = $temp$acc;
                    continue layoutInner;
                  }
              }
            }
        });
        return $elm$core$String$concat($elm$core$List$reverse(A2(layoutInner, normal, _List_Nil)));
      };
      var $the_sett$elm_pretty_printer$Pretty$pretty = F2(function(w, doc) {
        return $the_sett$elm_pretty_printer$Pretty$layout(A3($the_sett$elm_pretty_printer$Pretty$best, w, 0, doc));
      });
      var $the_sett$elm_syntax_dsl$Elm$Comments$prettyCode = function(val) {
        return A2($the_sett$elm_pretty_printer$Pretty$indent, 4, $the_sett$elm_pretty_printer$Pretty$string(val));
      };
      var $the_sett$elm_syntax_dsl$Elm$Comments$prettyMarkdown = function(val) {
        return A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, $the_sett$elm_pretty_printer$Pretty$string(val)));
      };
      var $the_sett$elm_syntax_dsl$Elm$Comments$prettyTags = function(tags) {
        return $the_sett$elm_pretty_printer$Pretty$words(_List_fromArray([$the_sett$elm_pretty_printer$Pretty$string("@docs"), A2($the_sett$elm_pretty_printer$Pretty$join, $the_sett$elm_pretty_printer$Pretty$string(", "), A2($elm$core$List$map, $the_sett$elm_pretty_printer$Pretty$string, tags))]));
      };
      var $the_sett$elm_syntax_dsl$Elm$Comments$prettyCommentPart = function(part) {
        switch (part.$) {
          case "Markdown":
            var val = part.a;
            return $the_sett$elm_syntax_dsl$Elm$Comments$prettyMarkdown(val);
          case "Code":
            var val = part.a;
            return $the_sett$elm_syntax_dsl$Elm$Comments$prettyCode(val);
          default:
            var tags = part.a;
            return $the_sett$elm_syntax_dsl$Elm$Comments$prettyTags(tags);
        }
      };
      var $the_sett$elm_syntax_dsl$Elm$Comments$prettyDocComment = F2(function(width, comment) {
        return A2($the_sett$elm_pretty_printer$Pretty$pretty, width, $the_sett$elm_syntax_dsl$Elm$Comments$delimeters($the_sett$elm_pretty_printer$Pretty$lines(A2($elm$core$List$map, $the_sett$elm_syntax_dsl$Elm$Comments$prettyCommentPart, $the_sett$elm_syntax_dsl$Elm$Comments$getParts(comment)))));
      });
      var $the_sett$elm_syntax_dsl$Elm$Pretty$prettyDocComment = F2(function(width, decl) {
        if (decl.$ === "DeclWithComment") {
          var comment = decl.a;
          var declFn = decl.b;
          return declFn(A2($the_sett$elm_syntax_dsl$Elm$Comments$prettyDocComment, width, comment));
        } else {
          var declNoComment = decl.a;
          return declNoComment;
        }
      });
      var $the_sett$elm_syntax_dsl$Elm$Comments$DocTags = function(a) {
        return {
          $: "DocTags",
          a
        };
      };
      var $the_sett$elm_syntax_dsl$Elm$Comments$fitAndSplit = F2(function(width, tags) {
        if (!tags.b) {
          return _List_Nil;
        } else {
          var t = tags.a;
          var ts = tags.b;
          var _v1 = A3($elm$core$List$foldl, F2(function(tag, _v2) {
            var allSplits = _v2.a;
            var curSplit = _v2.b;
            var remaining = _v2.c;
            return _Utils_cmp($elm$core$String$length(tag), remaining) < 1 ? _Utils_Tuple3(allSplits, A2($elm$core$List$cons, tag, curSplit), remaining - $elm$core$String$length(tag)) : _Utils_Tuple3(_Utils_ap(allSplits, _List_fromArray([$elm$core$List$reverse(curSplit)])), _List_fromArray([tag]), width - $elm$core$String$length(tag));
          }), _Utils_Tuple3(_List_Nil, _List_fromArray([t]), width - $elm$core$String$length(t)), ts);
          var splitsExceptLast = _v1.a;
          var lastSplit = _v1.b;
          return _Utils_ap(splitsExceptLast, _List_fromArray([$elm$core$List$reverse(lastSplit)]));
        }
      });
      var $elm$core$List$sort = function(xs) {
        return A2($elm$core$List$sortBy, $elm$core$Basics$identity, xs);
      };
      var $the_sett$elm_syntax_dsl$Elm$Comments$mergeDocTags = function(innerParts) {
        var _v0 = A3($elm$core$List$foldr, F2(function(part, _v1) {
          var accum = _v1.a;
          var context = _v1.b;
          if (context.$ === "Nothing") {
            if (part.$ === "DocTags") {
              var tags2 = part.a;
              return _Utils_Tuple2(accum, $elm$core$Maybe$Just(tags2));
            } else {
              var otherPart = part;
              return _Utils_Tuple2(A2($elm$core$List$cons, otherPart, accum), $elm$core$Maybe$Nothing);
            }
          } else {
            var contextTags = context.a;
            if (part.$ === "DocTags") {
              var tags2 = part.a;
              return _Utils_Tuple2(accum, $elm$core$Maybe$Just(_Utils_ap(contextTags, tags2)));
            } else {
              var otherPart = part;
              return _Utils_Tuple2(A2($elm$core$List$cons, otherPart, A2($elm$core$List$cons, $the_sett$elm_syntax_dsl$Elm$Comments$DocTags($elm$core$List$sort(contextTags)), accum)), $elm$core$Maybe$Nothing);
            }
          }
        }), _Utils_Tuple2(_List_Nil, $elm$core$Maybe$Nothing), innerParts);
        var partsExceptMaybeFirst = _v0.a;
        var maybeFirstPart = _v0.b;
        if (maybeFirstPart.$ === "Nothing") {
          return partsExceptMaybeFirst;
        } else {
          var tags = maybeFirstPart.a;
          return A2($elm$core$List$cons, $the_sett$elm_syntax_dsl$Elm$Comments$DocTags($elm$core$List$sort(tags)), partsExceptMaybeFirst);
        }
      };
      var $the_sett$elm_syntax_dsl$Elm$Comments$layoutTags = F2(function(width, parts) {
        return A3($elm$core$List$foldr, F2(function(part, _v0) {
          var accumParts = _v0.a;
          var accumDocTags = _v0.b;
          if (part.$ === "DocTags") {
            var tags = part.a;
            var splits = A2($the_sett$elm_syntax_dsl$Elm$Comments$fitAndSplit, width, tags);
            return _Utils_Tuple2(_Utils_ap(A2($elm$core$List$map, $the_sett$elm_syntax_dsl$Elm$Comments$DocTags, splits), accumParts), _Utils_ap(accumDocTags, splits));
          } else {
            var otherPart = part;
            return _Utils_Tuple2(A2($elm$core$List$cons, otherPart, accumParts), accumDocTags);
          }
        }), _Utils_Tuple2(_List_Nil, _List_Nil), $the_sett$elm_syntax_dsl$Elm$Comments$mergeDocTags(parts));
      });
      var $the_sett$elm_syntax_dsl$Elm$Comments$prettyFileComment = F2(function(width, comment) {
        var _v0 = A2($the_sett$elm_syntax_dsl$Elm$Comments$layoutTags, width, $the_sett$elm_syntax_dsl$Elm$Comments$getParts(comment));
        var parts = _v0.a;
        var splits = _v0.b;
        return _Utils_Tuple2(A2($the_sett$elm_pretty_printer$Pretty$pretty, width, $the_sett$elm_syntax_dsl$Elm$Comments$delimeters($the_sett$elm_pretty_printer$Pretty$lines(A2($elm$core$List$map, $the_sett$elm_syntax_dsl$Elm$Comments$prettyCommentPart, parts)))), splits);
      });
      var $the_sett$elm_syntax_dsl$Elm$Pretty$prettyDefaultModuleData = function(moduleData) {
        return $the_sett$elm_pretty_printer$Pretty$words(_List_fromArray([$the_sett$elm_pretty_printer$Pretty$string("module"), $the_sett$elm_syntax_dsl$Elm$Pretty$prettyModuleName($the_sett$elm_syntax_dsl$Util$denode(moduleData.moduleName)), $the_sett$elm_syntax_dsl$Elm$Pretty$prettyExposing($the_sett$elm_syntax_dsl$Util$denode(moduleData.exposingList))]));
      };
      var $the_sett$elm_syntax_dsl$Elm$Pretty$prettyEffectModuleData = function(moduleData) {
        var prettyCmdAndSub = F2(function(maybeCmd, maybeSub) {
          var _v0 = _Utils_Tuple2(maybeCmd, maybeSub);
          if (_v0.a.$ === "Just") {
            if (_v0.b.$ === "Just") {
              var cmdName = _v0.a.a;
              var subName = _v0.b.a;
              return $elm$core$Maybe$Just($the_sett$elm_pretty_printer$Pretty$words(_List_fromArray([$the_sett$elm_pretty_printer$Pretty$string("where { command ="), $the_sett$elm_pretty_printer$Pretty$string(cmdName), $the_sett$elm_pretty_printer$Pretty$string(","), $the_sett$elm_pretty_printer$Pretty$string("subscription ="), $the_sett$elm_pretty_printer$Pretty$string(subName), $the_sett$elm_pretty_printer$Pretty$string("}")])));
            } else {
              var cmdName = _v0.a.a;
              var _v3 = _v0.b;
              return $elm$core$Maybe$Just($the_sett$elm_pretty_printer$Pretty$words(_List_fromArray([$the_sett$elm_pretty_printer$Pretty$string("where { command ="), $the_sett$elm_pretty_printer$Pretty$string(cmdName), $the_sett$elm_pretty_printer$Pretty$string("}")])));
            }
          } else {
            if (_v0.b.$ === "Nothing") {
              var _v1 = _v0.a;
              var _v2 = _v0.b;
              return $elm$core$Maybe$Nothing;
            } else {
              var _v4 = _v0.a;
              var subName = _v0.b.a;
              return $elm$core$Maybe$Just($the_sett$elm_pretty_printer$Pretty$words(_List_fromArray([$the_sett$elm_pretty_printer$Pretty$string("where { subscription ="), $the_sett$elm_pretty_printer$Pretty$string(subName), $the_sett$elm_pretty_printer$Pretty$string("}")])));
            }
          }
        });
        return $the_sett$elm_pretty_printer$Pretty$words(_List_fromArray([$the_sett$elm_pretty_printer$Pretty$string("effect module"), $the_sett$elm_syntax_dsl$Elm$Pretty$prettyModuleName($the_sett$elm_syntax_dsl$Util$denode(moduleData.moduleName)), A2($the_sett$elm_syntax_dsl$Elm$Pretty$prettyMaybe, $elm$core$Basics$identity, A2(prettyCmdAndSub, $the_sett$elm_syntax_dsl$Util$denodeMaybe(moduleData.command), $the_sett$elm_syntax_dsl$Util$denodeMaybe(moduleData.subscription))), $the_sett$elm_syntax_dsl$Elm$Pretty$prettyExposing($the_sett$elm_syntax_dsl$Util$denode(moduleData.exposingList))]));
      };
      var $the_sett$elm_syntax_dsl$Elm$Pretty$prettyPortModuleData = function(moduleData) {
        return $the_sett$elm_pretty_printer$Pretty$words(_List_fromArray([$the_sett$elm_pretty_printer$Pretty$string("port module"), $the_sett$elm_syntax_dsl$Elm$Pretty$prettyModuleName($the_sett$elm_syntax_dsl$Util$denode(moduleData.moduleName)), $the_sett$elm_syntax_dsl$Elm$Pretty$prettyExposing($the_sett$elm_syntax_dsl$Util$denode(moduleData.exposingList))]));
      };
      var $the_sett$elm_syntax_dsl$Elm$Pretty$prettyModule = function(mod) {
        switch (mod.$) {
          case "NormalModule":
            var defaultModuleData = mod.a;
            return $the_sett$elm_syntax_dsl$Elm$Pretty$prettyDefaultModuleData(defaultModuleData);
          case "PortModule":
            var defaultModuleData = mod.a;
            return $the_sett$elm_syntax_dsl$Elm$Pretty$prettyPortModuleData(defaultModuleData);
          default:
            var effectModuleData = mod.a;
            return $the_sett$elm_syntax_dsl$Elm$Pretty$prettyEffectModuleData(effectModuleData);
        }
      };
      var $the_sett$elm_syntax_dsl$Elm$Pretty$prepareLayout = F2(function(width, file) {
        var layoutDeclComments = function(decls) {
          return A2($elm$core$List$map, $the_sett$elm_syntax_dsl$Elm$Pretty$prettyDocComment(width), decls);
        };
        var _v0 = function() {
          var _v1 = file.comments;
          if (_v1.$ === "Just") {
            var comment = _v1.a;
            var _v2 = A2($the_sett$elm_syntax_dsl$Elm$Comments$prettyFileComment, width, comment);
            var fileCommentStr = _v2.a;
            var innerTags = _v2.b;
            return _Utils_Tuple2({
              comments: $the_sett$elm_syntax_dsl$Util$nodifyAll(_List_fromArray([fileCommentStr])),
              declarations: $the_sett$elm_syntax_dsl$Util$nodifyAll(layoutDeclComments(file.declarations)),
              imports: file.imports,
              moduleDefinition: file.moduleDefinition
            }, innerTags);
          } else {
            return _Utils_Tuple2({
              comments: _List_Nil,
              declarations: $the_sett$elm_syntax_dsl$Util$nodifyAll(layoutDeclComments(file.declarations)),
              imports: file.imports,
              moduleDefinition: file.moduleDefinition
            }, _List_Nil);
          }
        }();
        var innerFile = _v0.a;
        var tags = _v0.b;
        return A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_syntax_dsl$Elm$Pretty$prettyDeclarations($the_sett$elm_syntax_dsl$Util$denodeAll(innerFile.declarations)), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_syntax_dsl$Elm$Pretty$importsPretty(innerFile), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_syntax_dsl$Elm$Pretty$prettyComments($the_sett$elm_syntax_dsl$Util$denodeAll(innerFile.comments)), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, $the_sett$elm_syntax_dsl$Elm$Pretty$prettyModule($the_sett$elm_syntax_dsl$Util$denode(innerFile.moduleDefinition)))))));
      });
      var $the_sett$elm_syntax_dsl$Elm$Pretty$pretty = F2(function(width, file) {
        return A2($the_sett$elm_pretty_printer$Pretty$pretty, width, A2($the_sett$elm_syntax_dsl$Elm$Pretty$prepareLayout, width, file));
      });
      var $author$project$Elm$Syntax$Expression$OperatorApplication = F4(function(a, b, c, d) {
        return {
          $: "OperatorApplication",
          a,
          b,
          c,
          d
        };
      });
      var $author$project$Elm$Processing$expressionOperators = function(_v0) {
        var expression = _v0.b;
        if (expression.$ === "Operator") {
          var s = expression.a;
          return $elm$core$Maybe$Just(s);
        } else {
          return $elm$core$Maybe$Nothing;
        }
      };
      var $author$project$Elm$Processing$findNextSplit = F2(function(dict, exps) {
        var prefix = A2($elm_community$list_extra$List$Extra$takeWhile, function(x) {
          return _Utils_eq($elm$core$Maybe$Nothing, A2($elm$core$Maybe$andThen, function(key) {
            return A2($elm$core$Dict$get, key, dict);
          }, $author$project$Elm$Processing$expressionOperators(x)));
        }, exps);
        var suffix = A2($elm$core$List$drop, $elm$core$List$length(prefix) + 1, exps);
        return A2($elm$core$Maybe$map, function(x) {
          return _Utils_Tuple3(prefix, x, suffix);
        }, A2($elm$core$Maybe$andThen, function(x) {
          return A2($elm$core$Dict$get, x, dict);
        }, A2($elm$core$Maybe$andThen, $author$project$Elm$Processing$expressionOperators, $elm$core$List$head(A2($elm$core$List$drop, $elm$core$List$length(prefix), exps)))));
      });
      var $elm$core$List$maximum = function(list) {
        if (list.b) {
          var x = list.a;
          var xs = list.b;
          return $elm$core$Maybe$Just(A3($elm$core$List$foldl, $elm$core$Basics$max, x, xs));
        } else {
          return $elm$core$Maybe$Nothing;
        }
      };
      var $author$project$Elm$Processing$highestPrecedence = function(input) {
        var maxi = $elm$core$List$maximum(A2($elm$core$List$map, A2($elm$core$Basics$composeR, $elm$core$Tuple$second, A2($elm$core$Basics$composeR, function($) {
          return $.precedence;
        }, $author$project$Elm$Syntax$Node$value)), input));
        return $elm$core$Dict$fromList(A2($elm$core$Maybe$withDefault, _List_Nil, A2($elm$core$Maybe$map, function(m) {
          return A2($elm$core$List$filter, A2($elm$core$Basics$composeR, $elm$core$Tuple$second, A2($elm$core$Basics$composeR, function($) {
            return $.precedence;
          }, A2($elm$core$Basics$composeR, $author$project$Elm$Syntax$Node$value, $elm$core$Basics$eq(m)))), input);
        }, maxi)));
      };
      var $author$project$Elm$Processing$fixApplication = F2(function(operators, expressions) {
        var ops = $author$project$Elm$Processing$highestPrecedence(A2($elm$core$List$map, function(x) {
          return _Utils_Tuple2(x, A2($elm$core$Maybe$withDefault, {
            direction: A2($author$project$Elm$Syntax$Node$Node, $author$project$Elm$Syntax$Range$emptyRange, $author$project$Elm$Syntax$Infix$Left),
            _function: A2($author$project$Elm$Syntax$Node$Node, $author$project$Elm$Syntax$Range$emptyRange, "todo"),
            operator: A2($author$project$Elm$Syntax$Node$Node, $author$project$Elm$Syntax$Range$emptyRange, x),
            precedence: A2($author$project$Elm$Syntax$Node$Node, $author$project$Elm$Syntax$Range$emptyRange, 5)
          }, A2($elm$core$Dict$get, x, operators)));
        }, A2($elm$core$List$filterMap, $author$project$Elm$Processing$expressionOperators, expressions)));
        var fixExprs = function(exps) {
          if (exps.b && !exps.b.b) {
            var _v2 = exps.a;
            var x = _v2.b;
            return x;
          } else {
            return $author$project$Elm$Syntax$Expression$Application(exps);
          }
        };
        var divideAndConquer = function(exps) {
          return $elm$core$Dict$isEmpty(ops) ? fixExprs(exps) : A2($elm$core$Maybe$withDefault, fixExprs(exps), A2($elm$core$Maybe$map, function(_v0) {
            var p = _v0.a;
            var infix = _v0.b;
            var s = _v0.c;
            return A4($author$project$Elm$Syntax$Expression$OperatorApplication, $author$project$Elm$Syntax$Node$value(infix.operator), $author$project$Elm$Syntax$Node$value(infix.direction), A2($author$project$Elm$Syntax$Node$Node, $author$project$Elm$Syntax$Range$combine(A2($elm$core$List$map, $author$project$Elm$Syntax$Node$range, p)), divideAndConquer(p)), A2($author$project$Elm$Syntax$Node$Node, $author$project$Elm$Syntax$Range$combine(A2($elm$core$List$map, $author$project$Elm$Syntax$Node$range, s)), divideAndConquer(s)));
          }, A2($author$project$Elm$Processing$findNextSplit, ops, exps)));
        };
        return divideAndConquer(expressions);
      });
      var $author$project$Elm$Inspector$Post = function(a) {
        return {
          $: "Post",
          a
        };
      };
      var $author$project$Elm$Inspector$Continue = {
        $: "Continue"
      };
      var $author$project$Elm$Inspector$defaultConfig = {
        onCase: $author$project$Elm$Inspector$Continue,
        onDestructuring: $author$project$Elm$Inspector$Continue,
        onExpression: $author$project$Elm$Inspector$Continue,
        onFile: $author$project$Elm$Inspector$Continue,
        onFunction: $author$project$Elm$Inspector$Continue,
        onFunctionOrValue: $author$project$Elm$Inspector$Continue,
        onImport: $author$project$Elm$Inspector$Continue,
        onInfixDeclaration: $author$project$Elm$Inspector$Continue,
        onLambda: $author$project$Elm$Inspector$Continue,
        onLetBlock: $author$project$Elm$Inspector$Continue,
        onOperatorApplication: $author$project$Elm$Inspector$Continue,
        onPortDeclaration: $author$project$Elm$Inspector$Continue,
        onRecordAccess: $author$project$Elm$Inspector$Continue,
        onRecordUpdate: $author$project$Elm$Inspector$Continue,
        onSignature: $author$project$Elm$Inspector$Continue,
        onType: $author$project$Elm$Inspector$Continue,
        onTypeAlias: $author$project$Elm$Inspector$Continue,
        onTypeAnnotation: $author$project$Elm$Inspector$Continue
      };
      var $author$project$Elm$Inspector$actionLambda = function(act) {
        switch (act.$) {
          case "Skip":
            return F3(function(_v1, _v2, c) {
              return c;
            });
          case "Continue":
            return F3(function(f, _v3, c) {
              return f(c);
            });
          case "Pre":
            var g = act.a;
            return F3(function(f, x, c) {
              return f(A2(g, x, c));
            });
          case "Post":
            var g = act.a;
            return F3(function(f, x, c) {
              return A2(g, x, f(c));
            });
          default:
            var g = act.a;
            return F3(function(f, x, c) {
              return A3(g, f, x, c);
            });
        }
      };
      var $author$project$Elm$Inspector$inspectTypeAnnotation = F3(function(config, typeAnnotation, context) {
        return A4($author$project$Elm$Inspector$actionLambda, config.onTypeAnnotation, A2($author$project$Elm$Inspector$inspectTypeAnnotationInner, config, typeAnnotation), typeAnnotation, context);
      });
      var $author$project$Elm$Inspector$inspectTypeAnnotationInner = F3(function(config, _v0, context) {
        var typeRefence = _v0.b;
        switch (typeRefence.$) {
          case "Typed":
            var typeArgs = typeRefence.b;
            return A3($elm$core$List$foldl, $author$project$Elm$Inspector$inspectTypeAnnotation(config), context, typeArgs);
          case "Tupled":
            var typeAnnotations = typeRefence.a;
            return A3($elm$core$List$foldl, $author$project$Elm$Inspector$inspectTypeAnnotation(config), context, typeAnnotations);
          case "Record":
            var recordDefinition = typeRefence.a;
            return A3($elm$core$List$foldl, $author$project$Elm$Inspector$inspectTypeAnnotation(config), context, A2($elm$core$List$map, A2($elm$core$Basics$composeR, $author$project$Elm$Syntax$Node$value, $elm$core$Tuple$second), recordDefinition));
          case "GenericRecord":
            var recordDefinition = typeRefence.b;
            return A3($elm$core$List$foldl, $author$project$Elm$Inspector$inspectTypeAnnotation(config), context, A2($elm$core$List$map, A2($elm$core$Basics$composeR, $author$project$Elm$Syntax$Node$value, $elm$core$Tuple$second), $author$project$Elm$Syntax$Node$value(recordDefinition)));
          case "FunctionTypeAnnotation":
            var left = typeRefence.a;
            var right = typeRefence.b;
            return A3($elm$core$List$foldl, $author$project$Elm$Inspector$inspectTypeAnnotation(config), context, _List_fromArray([left, right]));
          case "Unit":
            return context;
          default:
            return context;
        }
      });
      var $author$project$Elm$Inspector$inspectSignature = F3(function(config, node, context) {
        var signature = node.b;
        return A4($author$project$Elm$Inspector$actionLambda, config.onSignature, A2($author$project$Elm$Inspector$inspectTypeAnnotation, config, signature.typeAnnotation), node, context);
      });
      var $author$project$Elm$Inspector$inspectCase = F3(function(config, caze, context) {
        return A4($author$project$Elm$Inspector$actionLambda, config.onCase, A2($author$project$Elm$Inspector$inspectExpression, config, caze.b), caze, context);
      });
      var $author$project$Elm$Inspector$inspectDestructuring = F3(function(config, destructuring, context) {
        return A4($author$project$Elm$Inspector$actionLambda, config.onDestructuring, function(c) {
          return A3($author$project$Elm$Inspector$inspectExpression, config, $author$project$Elm$Syntax$Node$value(destructuring).b, c);
        }, destructuring, context);
      });
      var $author$project$Elm$Inspector$inspectExpression = F3(function(config, node, context) {
        var expression = node.b;
        return A4($author$project$Elm$Inspector$actionLambda, config.onExpression, A2($author$project$Elm$Inspector$inspectInnerExpression, config, expression), node, context);
      });
      var $author$project$Elm$Inspector$inspectFunction = F3(function(config, node, context) {
        var _function = node.b;
        return A4($author$project$Elm$Inspector$actionLambda, config.onFunction, A2($elm$core$Basics$composeR, A2($author$project$Elm$Inspector$inspectExpression, config, $author$project$Elm$Syntax$Node$value(_function.declaration).expression), A2($elm$core$Maybe$withDefault, $elm$core$Basics$identity, A2($elm$core$Maybe$map, $author$project$Elm$Inspector$inspectSignature(config), _function.signature))), node, context);
      });
      var $author$project$Elm$Inspector$inspectInnerExpression = F3(function(config, expression, context) {
        switch (expression.$) {
          case "UnitExpr":
            return context;
          case "FunctionOrValue":
            var moduleName = expression.a;
            var functionOrVal = expression.b;
            return A4($author$project$Elm$Inspector$actionLambda, config.onFunctionOrValue, $elm$core$Basics$identity, _Utils_Tuple2(moduleName, functionOrVal), context);
          case "PrefixOperator":
            return context;
          case "Operator":
            return context;
          case "Hex":
            return context;
          case "Integer":
            return context;
          case "Floatable":
            return context;
          case "Negation":
            var x = expression.a;
            return A3($author$project$Elm$Inspector$inspectExpression, config, x, context);
          case "Literal":
            return context;
          case "CharLiteral":
            return context;
          case "RecordAccess":
            var ex1 = expression.a;
            var key = expression.b;
            return A4($author$project$Elm$Inspector$actionLambda, config.onRecordAccess, A2($author$project$Elm$Inspector$inspectExpression, config, ex1), _Utils_Tuple2(ex1, key), context);
          case "RecordAccessFunction":
            return context;
          case "GLSLExpression":
            return context;
          case "Application":
            var expressionList = expression.a;
            return A3($elm$core$List$foldl, $author$project$Elm$Inspector$inspectExpression(config), context, expressionList);
          case "OperatorApplication":
            var op = expression.a;
            var dir = expression.b;
            var left = expression.c;
            var right = expression.d;
            return A4($author$project$Elm$Inspector$actionLambda, config.onOperatorApplication, function(base) {
              return A3($elm$core$List$foldl, $author$project$Elm$Inspector$inspectExpression(config), base, _List_fromArray([left, right]));
            }, {
              direction: dir,
              left,
              operator: op,
              right
            }, context);
          case "IfBlock":
            var e1 = expression.a;
            var e2 = expression.b;
            var e3 = expression.c;
            return A3($elm$core$List$foldl, $author$project$Elm$Inspector$inspectExpression(config), context, _List_fromArray([e1, e2, e3]));
          case "TupledExpression":
            var expressionList = expression.a;
            return A3($elm$core$List$foldl, $author$project$Elm$Inspector$inspectExpression(config), context, expressionList);
          case "ParenthesizedExpression":
            var inner = expression.a;
            return A3($author$project$Elm$Inspector$inspectExpression, config, inner, context);
          case "LetExpression":
            var letBlock = expression.a;
            var next = A2($elm$core$Basics$composeR, A2($author$project$Elm$Inspector$inspectLetDeclarations, config, letBlock.declarations), A2($author$project$Elm$Inspector$inspectExpression, config, letBlock.expression));
            return A4($author$project$Elm$Inspector$actionLambda, config.onLetBlock, next, letBlock, context);
          case "CaseExpression":
            var caseBlock = expression.a;
            var context2 = A3($author$project$Elm$Inspector$inspectExpression, config, caseBlock.expression, context);
            var context3 = A3($elm$core$List$foldl, F2(function(a, b) {
              return A3($author$project$Elm$Inspector$inspectCase, config, a, b);
            }), context2, caseBlock.cases);
            return context3;
          case "LambdaExpression":
            var lambda = expression.a;
            return A4($author$project$Elm$Inspector$actionLambda, config.onLambda, A2($author$project$Elm$Inspector$inspectExpression, config, lambda.expression), lambda, context);
          case "ListExpr":
            var expressionList = expression.a;
            return A3($elm$core$List$foldl, $author$project$Elm$Inspector$inspectExpression(config), context, expressionList);
          case "RecordExpr":
            var expressionStringList = expression.a;
            return A3($elm$core$List$foldl, F2(function(a, b) {
              return A3($author$project$Elm$Inspector$inspectExpression, config, $author$project$Elm$Syntax$Node$value(a).b, b);
            }), context, expressionStringList);
          default:
            var name = expression.a;
            var updates = expression.b;
            return A4($author$project$Elm$Inspector$actionLambda, config.onRecordUpdate, function(c) {
              return A3($elm$core$List$foldl, F2(function(a, b) {
                return A3($author$project$Elm$Inspector$inspectExpression, config, $author$project$Elm$Syntax$Node$value(a).b, b);
              }), c, updates);
            }, _Utils_Tuple2(name, updates), context);
        }
      });
      var $author$project$Elm$Inspector$inspectLetDeclaration = F3(function(config, _v0, context) {
        var range = _v0.a;
        var declaration = _v0.b;
        if (declaration.$ === "LetFunction") {
          var _function = declaration.a;
          return A3($author$project$Elm$Inspector$inspectFunction, config, A2($author$project$Elm$Syntax$Node$Node, range, _function), context);
        } else {
          var pattern = declaration.a;
          var expression = declaration.b;
          return A3($author$project$Elm$Inspector$inspectDestructuring, config, A2($author$project$Elm$Syntax$Node$Node, range, _Utils_Tuple2(pattern, expression)), context);
        }
      });
      var $author$project$Elm$Inspector$inspectLetDeclarations = F3(function(config, declarations, context) {
        return A3($elm$core$List$foldl, $author$project$Elm$Inspector$inspectLetDeclaration(config), context, declarations);
      });
      var $author$project$Elm$Inspector$inspectPortDeclaration = F3(function(config, signature, context) {
        return A4($author$project$Elm$Inspector$actionLambda, config.onPortDeclaration, A2($author$project$Elm$Inspector$inspectSignature, config, signature), signature, context);
      });
      var $author$project$Elm$Inspector$inspectValueConstructor = F3(function(config, _v0, context) {
        var valueConstructor = _v0.b;
        return A3($elm$core$List$foldl, $author$project$Elm$Inspector$inspectTypeAnnotation(config), context, valueConstructor._arguments);
      });
      var $author$project$Elm$Inspector$inspectTypeInner = F3(function(config, typeDecl, context) {
        return A3($elm$core$List$foldl, $author$project$Elm$Inspector$inspectValueConstructor(config), context, typeDecl.constructors);
      });
      var $author$project$Elm$Inspector$inspectType = F3(function(config, tipe, context) {
        return A4($author$project$Elm$Inspector$actionLambda, config.onType, A2($author$project$Elm$Inspector$inspectTypeInner, config, $author$project$Elm$Syntax$Node$value(tipe)), tipe, context);
      });
      var $author$project$Elm$Inspector$inspectTypeAlias = F3(function(config, pair, context) {
        var typeAlias = pair.b;
        return A4($author$project$Elm$Inspector$actionLambda, config.onTypeAlias, A2($author$project$Elm$Inspector$inspectTypeAnnotation, config, typeAlias.typeAnnotation), pair, context);
      });
      var $author$project$Elm$Inspector$inspectDeclaration = F3(function(config, _v0, context) {
        var r = _v0.a;
        var declaration = _v0.b;
        switch (declaration.$) {
          case "FunctionDeclaration":
            var _function = declaration.a;
            return A3($author$project$Elm$Inspector$inspectFunction, config, A2($author$project$Elm$Syntax$Node$Node, r, _function), context);
          case "AliasDeclaration":
            var typeAlias = declaration.a;
            return A3($author$project$Elm$Inspector$inspectTypeAlias, config, A2($author$project$Elm$Syntax$Node$Node, r, typeAlias), context);
          case "CustomTypeDeclaration":
            var typeDecl = declaration.a;
            return A3($author$project$Elm$Inspector$inspectType, config, A2($author$project$Elm$Syntax$Node$Node, r, typeDecl), context);
          case "PortDeclaration":
            var signature = declaration.a;
            return A3($author$project$Elm$Inspector$inspectPortDeclaration, config, A2($author$project$Elm$Syntax$Node$Node, r, signature), context);
          case "InfixDeclaration":
            var inf = declaration.a;
            return A4($author$project$Elm$Inspector$actionLambda, config.onInfixDeclaration, $elm$core$Basics$identity, A2($author$project$Elm$Syntax$Node$Node, r, inf), context);
          default:
            var pattern = declaration.a;
            var expresion = declaration.b;
            return A3($author$project$Elm$Inspector$inspectDestructuring, config, A2($author$project$Elm$Syntax$Node$Node, r, _Utils_Tuple2(pattern, expresion)), context);
        }
      });
      var $author$project$Elm$Inspector$inspectDeclarations = F3(function(config, declarations, context) {
        return A3($elm$core$List$foldl, $author$project$Elm$Inspector$inspectDeclaration(config), context, declarations);
      });
      var $author$project$Elm$Inspector$inspectImport = F3(function(config, imp, context) {
        return A4($author$project$Elm$Inspector$actionLambda, config.onImport, $elm$core$Basics$identity, imp, context);
      });
      var $author$project$Elm$Inspector$inspectImports = F3(function(config, imports, context) {
        return A3($elm$core$List$foldl, $author$project$Elm$Inspector$inspectImport(config), context, imports);
      });
      var $author$project$Elm$Inspector$inspect = F3(function(config, file, context) {
        return A4($author$project$Elm$Inspector$actionLambda, config.onFile, A2($elm$core$Basics$composeR, A2($author$project$Elm$Inspector$inspectImports, config, file.imports), A2($author$project$Elm$Inspector$inspectDeclarations, config, file.declarations)), file, context);
      });
      var $author$project$Elm$Processing$Documentation$isDocumentationForRange = F2(function(range, _v0) {
        var commentRange = _v0.a;
        var commentText = _v0.b;
        if (A2($elm$core$String$startsWith, "{-|", commentText)) {
          var functionStartRow = range.start.row;
          return _Utils_eq(commentRange.end.row + 1, functionStartRow);
        } else {
          return false;
        }
      });
      var $author$project$Elm$Processing$Documentation$replaceDeclaration = F2(function(_v0, _v1) {
        var r1 = _v0.a;
        var _new = _v0.b;
        var r2 = _v1.a;
        var old = _v1.b;
        return A2($author$project$Elm$Syntax$Node$Node, r2, _Utils_eq(r1, r2) ? _new : old);
      });
      var $author$project$Elm$Processing$Documentation$onFunction = F2(function(_v0, file) {
        var functionRange = _v0.a;
        var _function = _v0.b;
        var docs = A2($elm$core$List$filter, $author$project$Elm$Processing$Documentation$isDocumentationForRange(functionRange), file.comments);
        var _v1 = $elm$core$List$head(docs);
        if (_v1.$ === "Just") {
          var doc = _v1.a;
          var docRange = doc.a;
          var docString = doc.b;
          return _Utils_update(file, {
            comments: A2($elm$core$List$filter, $elm$core$Basics$neq(doc), file.comments),
            declarations: A2($elm$core$List$map, $author$project$Elm$Processing$Documentation$replaceDeclaration(A2($author$project$Elm$Syntax$Node$Node, functionRange, $author$project$Elm$Syntax$Declaration$FunctionDeclaration(_Utils_update(_function, {
              documentation: $elm$core$Maybe$Just(A2($author$project$Elm$Syntax$Node$Node, docRange, docString))
            })))), file.declarations)
          });
        } else {
          return file;
        }
      });
      var $author$project$Elm$Processing$Documentation$onType = F2(function(_v0, file) {
        var r = _v0.a;
        var customType = _v0.b;
        var docs = A2($elm$core$List$filter, $author$project$Elm$Processing$Documentation$isDocumentationForRange(r), file.comments);
        var _v1 = $elm$core$List$head(docs);
        if (_v1.$ === "Just") {
          var doc = _v1.a;
          var docRange = doc.a;
          var docString = doc.b;
          return _Utils_update(file, {
            comments: A2($elm$core$List$filter, $elm$core$Basics$neq(doc), file.comments),
            declarations: A2($elm$core$List$map, $author$project$Elm$Processing$Documentation$replaceDeclaration(A2($author$project$Elm$Syntax$Node$Node, r, $author$project$Elm$Syntax$Declaration$CustomTypeDeclaration(_Utils_update(customType, {
              documentation: $elm$core$Maybe$Just(A2($author$project$Elm$Syntax$Node$Node, docRange, docString))
            })))), file.declarations)
          });
        } else {
          return file;
        }
      });
      var $author$project$Elm$Processing$Documentation$onTypeAlias = F2(function(_v0, file) {
        var r = _v0.a;
        var typeAlias = _v0.b;
        var docs = A2($elm$core$List$filter, $author$project$Elm$Processing$Documentation$isDocumentationForRange(r), file.comments);
        var _v1 = $elm$core$List$head(docs);
        if (_v1.$ === "Just") {
          var doc = _v1.a;
          var docRange = doc.a;
          var docString = doc.b;
          return _Utils_update(file, {
            comments: A2($elm$core$List$filter, $elm$core$Basics$neq(doc), file.comments),
            declarations: A2($elm$core$List$map, $author$project$Elm$Processing$Documentation$replaceDeclaration(A2($author$project$Elm$Syntax$Node$Node, r, $author$project$Elm$Syntax$Declaration$AliasDeclaration(_Utils_update(typeAlias, {
              documentation: $elm$core$Maybe$Just(A2($author$project$Elm$Syntax$Node$Node, docRange, docString))
            })))), file.declarations)
          });
        } else {
          return file;
        }
      });
      var $author$project$Elm$Processing$Documentation$postProcess = function(file) {
        return A3($author$project$Elm$Inspector$inspect, _Utils_update($author$project$Elm$Inspector$defaultConfig, {
          onFunction: $author$project$Elm$Inspector$Post($author$project$Elm$Processing$Documentation$onFunction),
          onType: $author$project$Elm$Inspector$Post($author$project$Elm$Processing$Documentation$onType),
          onTypeAlias: $author$project$Elm$Inspector$Post($author$project$Elm$Processing$Documentation$onTypeAlias)
        }), file, file);
      };
      var $author$project$Elm$Interface$operators = $elm$core$List$filterMap(function(i) {
        if (i.$ === "Operator") {
          var o = i.a;
          return $elm$core$Maybe$Just(o);
        } else {
          return $elm$core$Maybe$Nothing;
        }
      });
      var $author$project$Elm$Syntax$Exposing$operator = function(t) {
        if (t.$ === "InfixExpose") {
          var s = t.a;
          return $elm$core$Maybe$Just(s);
        } else {
          return $elm$core$Maybe$Nothing;
        }
      };
      var $author$project$Elm$Syntax$Exposing$operators = function(l) {
        return A2($elm$core$List$filterMap, $author$project$Elm$Syntax$Exposing$operator, l);
      };
      var $author$project$Elm$Processing$buildSingle = F2(function(imp, moduleIndex) {
        var _v0 = imp.exposingList;
        if (_v0.$ === "Nothing") {
          return _List_Nil;
        } else {
          if (_v0.a.b.$ === "All") {
            var _v1 = _v0.a;
            return A2($elm$core$List$map, function(x) {
              return _Utils_Tuple2($author$project$Elm$Syntax$Node$value(x.operator), x);
            }, $author$project$Elm$Interface$operators(A2($elm$core$Maybe$withDefault, _List_Nil, A2($elm$core$Dict$get, $author$project$Elm$Syntax$Node$value(imp.moduleName), moduleIndex))));
          } else {
            var _v2 = _v0.a;
            var l = _v2.b.a;
            var selectedOperators = $author$project$Elm$Syntax$Exposing$operators(A2($elm$core$List$map, $author$project$Elm$Syntax$Node$value, l));
            return A2($elm$core$List$filter, A2($elm$core$Basics$composeR, $elm$core$Tuple$first, function(elem) {
              return A2($elm$core$List$member, elem, selectedOperators);
            }), A2($elm$core$List$map, function(x) {
              return _Utils_Tuple2($author$project$Elm$Syntax$Node$value(x.operator), x);
            }, $author$project$Elm$Interface$operators(A2($elm$core$Maybe$withDefault, _List_Nil, A2($elm$core$Dict$get, $author$project$Elm$Syntax$Node$value(imp.moduleName), moduleIndex)))));
          }
        }
      });
      var $author$project$Elm$DefaultImports$defaults = _List_fromArray([{
        exposingList: $elm$core$Maybe$Just(A2($author$project$Elm$Syntax$Node$Node, $author$project$Elm$Syntax$Range$emptyRange, $author$project$Elm$Syntax$Exposing$All($author$project$Elm$Syntax$Range$emptyRange))),
        moduleAlias: $elm$core$Maybe$Nothing,
        moduleName: A2($author$project$Elm$Syntax$Node$Node, $author$project$Elm$Syntax$Range$emptyRange, _List_fromArray(["Basics"]))
      }, {
        exposingList: $elm$core$Maybe$Just(A2($author$project$Elm$Syntax$Node$Node, $author$project$Elm$Syntax$Range$emptyRange, $author$project$Elm$Syntax$Exposing$Explicit(_List_fromArray([A2($author$project$Elm$Syntax$Node$Node, $author$project$Elm$Syntax$Range$emptyRange, $author$project$Elm$Syntax$Exposing$TypeExpose(A2($author$project$Elm$Syntax$Exposing$ExposedType, "List", $elm$core$Maybe$Nothing))), A2($author$project$Elm$Syntax$Node$Node, $author$project$Elm$Syntax$Range$emptyRange, $author$project$Elm$Syntax$Exposing$InfixExpose("::"))])))),
        moduleAlias: $elm$core$Maybe$Nothing,
        moduleName: A2($author$project$Elm$Syntax$Node$Node, $author$project$Elm$Syntax$Range$emptyRange, _List_fromArray(["List"]))
      }, {
        exposingList: $elm$core$Maybe$Just(A2($author$project$Elm$Syntax$Node$Node, $author$project$Elm$Syntax$Range$emptyRange, $author$project$Elm$Syntax$Exposing$Explicit(_List_fromArray([A2($author$project$Elm$Syntax$Node$Node, $author$project$Elm$Syntax$Range$emptyRange, $author$project$Elm$Syntax$Exposing$TypeExpose(A2($author$project$Elm$Syntax$Exposing$ExposedType, "Maybe", $elm$core$Maybe$Just($author$project$Elm$Syntax$Range$emptyRange))))])))),
        moduleAlias: $elm$core$Maybe$Nothing,
        moduleName: A2($author$project$Elm$Syntax$Node$Node, $author$project$Elm$Syntax$Range$emptyRange, _List_fromArray(["Maybe"]))
      }, {
        exposingList: $elm$core$Maybe$Just(A2($author$project$Elm$Syntax$Node$Node, $author$project$Elm$Syntax$Range$emptyRange, $author$project$Elm$Syntax$Exposing$Explicit(_List_fromArray([A2($author$project$Elm$Syntax$Node$Node, $author$project$Elm$Syntax$Range$emptyRange, $author$project$Elm$Syntax$Exposing$TypeExpose(A2($author$project$Elm$Syntax$Exposing$ExposedType, "Result", $elm$core$Maybe$Just($author$project$Elm$Syntax$Range$emptyRange))))])))),
        moduleAlias: $elm$core$Maybe$Nothing,
        moduleName: A2($author$project$Elm$Syntax$Node$Node, $author$project$Elm$Syntax$Range$emptyRange, _List_fromArray(["Result"]))
      }, {
        exposingList: $elm$core$Maybe$Nothing,
        moduleAlias: $elm$core$Maybe$Nothing,
        moduleName: A2($author$project$Elm$Syntax$Node$Node, $author$project$Elm$Syntax$Range$emptyRange, _List_fromArray(["String"]))
      }, {
        exposingList: $elm$core$Maybe$Nothing,
        moduleAlias: $elm$core$Maybe$Nothing,
        moduleName: A2($author$project$Elm$Syntax$Node$Node, $author$project$Elm$Syntax$Range$emptyRange, _List_fromArray(["Tuple"]))
      }, {
        exposingList: $elm$core$Maybe$Nothing,
        moduleAlias: $elm$core$Maybe$Nothing,
        moduleName: A2($author$project$Elm$Syntax$Node$Node, $author$project$Elm$Syntax$Range$emptyRange, _List_fromArray(["Debug"]))
      }, {
        exposingList: $elm$core$Maybe$Just(A2($author$project$Elm$Syntax$Node$Node, $author$project$Elm$Syntax$Range$emptyRange, $author$project$Elm$Syntax$Exposing$Explicit(_List_fromArray([A2($author$project$Elm$Syntax$Node$Node, $author$project$Elm$Syntax$Range$emptyRange, $author$project$Elm$Syntax$Exposing$TypeExpose(A2($author$project$Elm$Syntax$Exposing$ExposedType, "Program", $elm$core$Maybe$Nothing)))])))),
        moduleAlias: $elm$core$Maybe$Nothing,
        moduleName: A2($author$project$Elm$Syntax$Node$Node, $author$project$Elm$Syntax$Range$emptyRange, _List_fromArray(["Platform"]))
      }, {
        exposingList: $elm$core$Maybe$Just(A2($author$project$Elm$Syntax$Node$Node, $author$project$Elm$Syntax$Range$emptyRange, $author$project$Elm$Syntax$Exposing$Explicit(_List_fromArray([A2($author$project$Elm$Syntax$Node$Node, $author$project$Elm$Syntax$Range$emptyRange, $author$project$Elm$Syntax$Exposing$TypeExpose(A2($author$project$Elm$Syntax$Exposing$ExposedType, "Cmd", $elm$core$Maybe$Nothing))), A2($author$project$Elm$Syntax$Node$Node, $author$project$Elm$Syntax$Range$emptyRange, $author$project$Elm$Syntax$Exposing$InfixExpose("!"))])))),
        moduleAlias: $elm$core$Maybe$Nothing,
        moduleName: A2($author$project$Elm$Syntax$Node$Node, $author$project$Elm$Syntax$Range$emptyRange, _List_fromArray(["Platform", "Cmd"]))
      }, {
        exposingList: $elm$core$Maybe$Just(A2($author$project$Elm$Syntax$Node$Node, $author$project$Elm$Syntax$Range$emptyRange, $author$project$Elm$Syntax$Exposing$Explicit(_List_fromArray([A2($author$project$Elm$Syntax$Node$Node, $author$project$Elm$Syntax$Range$emptyRange, $author$project$Elm$Syntax$Exposing$TypeExpose(A2($author$project$Elm$Syntax$Exposing$ExposedType, "Sub", $elm$core$Maybe$Nothing)))])))),
        moduleAlias: $elm$core$Maybe$Nothing,
        moduleName: A2($author$project$Elm$Syntax$Node$Node, $author$project$Elm$Syntax$Range$emptyRange, _List_fromArray(["Platform", "Sub"]))
      }]);
      var $author$project$Elm$RawFile$imports = function(_v0) {
        var file = _v0.a;
        return A2($elm$core$List$map, $author$project$Elm$Syntax$Node$value, file.imports);
      };
      var $author$project$Elm$Processing$tableForFile = F2(function(rawFile, _v0) {
        var moduleIndex = _v0.a;
        return $elm$core$Dict$fromList(A2($elm$core$List$concatMap, function(a) {
          return A2($author$project$Elm$Processing$buildSingle, a, moduleIndex);
        }, _Utils_ap($author$project$Elm$DefaultImports$defaults, $author$project$Elm$RawFile$imports(rawFile))));
      });
      var $author$project$Elm$Syntax$Node$map = F2(function(f, _v0) {
        var r = _v0.a;
        var a = _v0.b;
        return A2($author$project$Elm$Syntax$Node$Node, r, f(a));
      });
      var $author$project$Elm$Processing$visitExpression = F3(function(visitor, context, expression) {
        var inner = A2($author$project$Elm$Processing$visitExpressionInner, visitor, context);
        return A3(A2($elm$core$Maybe$withDefault, F3(function(_v4, nest, expr) {
          return nest(expr);
        }), visitor), context, inner, expression);
      });
      var $author$project$Elm$Processing$visitExpressionInner = F3(function(visitor, context, _v2) {
        var range = _v2.a;
        var expression = _v2.b;
        var subVisit = A2($author$project$Elm$Processing$visitExpression, visitor, context);
        return function(newExpr) {
          return A2($author$project$Elm$Syntax$Node$Node, range, newExpr);
        }(function() {
          switch (expression.$) {
            case "Application":
              var expressionList = expression.a;
              return $author$project$Elm$Syntax$Expression$Application(A2($elm$core$List$map, subVisit, expressionList));
            case "OperatorApplication":
              var op = expression.a;
              var dir = expression.b;
              var left = expression.c;
              var right = expression.d;
              return A4($author$project$Elm$Syntax$Expression$OperatorApplication, op, dir, subVisit(left), subVisit(right));
            case "IfBlock":
              var e1 = expression.a;
              var e2 = expression.b;
              var e3 = expression.c;
              return A3($author$project$Elm$Syntax$Expression$IfBlock, subVisit(e1), subVisit(e2), subVisit(e3));
            case "TupledExpression":
              var expressionList = expression.a;
              return $author$project$Elm$Syntax$Expression$TupledExpression(A2($elm$core$List$map, subVisit, expressionList));
            case "ParenthesizedExpression":
              var expr1 = expression.a;
              return $author$project$Elm$Syntax$Expression$ParenthesizedExpression(subVisit(expr1));
            case "LetExpression":
              var letBlock = expression.a;
              return $author$project$Elm$Syntax$Expression$LetExpression({
                declarations: A3($author$project$Elm$Processing$visitLetDeclarations, visitor, context, letBlock.declarations),
                expression: subVisit(letBlock.expression)
              });
            case "CaseExpression":
              var caseBlock = expression.a;
              return $author$project$Elm$Syntax$Expression$CaseExpression({
                cases: A2($elm$core$List$map, $elm$core$Tuple$mapSecond(subVisit), caseBlock.cases),
                expression: subVisit(caseBlock.expression)
              });
            case "LambdaExpression":
              var lambda = expression.a;
              return $author$project$Elm$Syntax$Expression$LambdaExpression(_Utils_update(lambda, {
                expression: subVisit(lambda.expression)
              }));
            case "RecordExpr":
              var expressionStringList = expression.a;
              return $author$project$Elm$Syntax$Expression$RecordExpr(A2($elm$core$List$map, $author$project$Elm$Syntax$Node$map($elm$core$Tuple$mapSecond(subVisit)), expressionStringList));
            case "ListExpr":
              var expressionList = expression.a;
              return $author$project$Elm$Syntax$Expression$ListExpr(A2($elm$core$List$map, subVisit, expressionList));
            case "RecordUpdateExpression":
              var name = expression.a;
              var updates = expression.b;
              return A2($author$project$Elm$Syntax$Expression$RecordUpdateExpression, name, A2($elm$core$List$map, $author$project$Elm$Syntax$Node$map($elm$core$Tuple$mapSecond(subVisit)), updates));
            default:
              return expression;
          }
        }());
      });
      var $author$project$Elm$Processing$visitFunctionDecl = F3(function(visitor, context, _function) {
        var newFunctionDeclaration = A2($author$project$Elm$Syntax$Node$map, A2($author$project$Elm$Processing$visitFunctionDeclaration, visitor, context), _function.declaration);
        return _Utils_update(_function, {
          declaration: newFunctionDeclaration
        });
      });
      var $author$project$Elm$Processing$visitFunctionDeclaration = F3(function(visitor, context, functionDeclaration) {
        var newExpression = A3($author$project$Elm$Processing$visitExpression, visitor, context, functionDeclaration.expression);
        return _Utils_update(functionDeclaration, {
          expression: newExpression
        });
      });
      var $author$project$Elm$Processing$visitLetDeclaration = F3(function(visitor, context, _v0) {
        var range = _v0.a;
        var declaration = _v0.b;
        return A2($author$project$Elm$Syntax$Node$Node, range, function() {
          if (declaration.$ === "LetFunction") {
            var _function = declaration.a;
            return $author$project$Elm$Syntax$Expression$LetFunction(A3($author$project$Elm$Processing$visitFunctionDecl, visitor, context, _function));
          } else {
            var pattern = declaration.a;
            var expression = declaration.b;
            return A2($author$project$Elm$Syntax$Expression$LetDestructuring, pattern, A3($author$project$Elm$Processing$visitExpression, visitor, context, expression));
          }
        }());
      });
      var $author$project$Elm$Processing$visitLetDeclarations = F3(function(visitor, context, declarations) {
        return A2($elm$core$List$map, A2($author$project$Elm$Processing$visitLetDeclaration, visitor, context), declarations);
      });
      var $author$project$Elm$Processing$visitDeclaration = F3(function(visitor, context, _v0) {
        var range = _v0.a;
        var declaration = _v0.b;
        return A2($author$project$Elm$Syntax$Node$Node, range, function() {
          if (declaration.$ === "FunctionDeclaration") {
            var _function = declaration.a;
            return $author$project$Elm$Syntax$Declaration$FunctionDeclaration(A3($author$project$Elm$Processing$visitFunctionDecl, visitor, context, _function));
          } else {
            return declaration;
          }
        }());
      });
      var $author$project$Elm$Processing$visitDeclarations = F3(function(visitor, context, declarations) {
        return A2($elm$core$List$map, A2($author$project$Elm$Processing$visitDeclaration, visitor, context), declarations);
      });
      var $author$project$Elm$Processing$visit = F3(function(visitor, context, file) {
        var newDeclarations = A3($author$project$Elm$Processing$visitDeclarations, visitor, context, file.declarations);
        return _Utils_update(file, {
          declarations: newDeclarations
        });
      });
      var $author$project$Elm$Processing$process = F2(function(processContext, rawFile) {
        var file = rawFile.a;
        var table = A2($author$project$Elm$Processing$tableForFile, rawFile, processContext);
        var operatorFixed = A3($author$project$Elm$Processing$visit, $elm$core$Maybe$Just(F3(function(context, inner, expression) {
          return inner(function() {
            if (expression.b.$ === "Application") {
              var r = expression.a;
              var args = expression.b.a;
              return A2($author$project$Elm$Syntax$Node$Node, r, A2($author$project$Elm$Processing$fixApplication, context, args));
            } else {
              return expression;
            }
          }());
        })), table, file);
        var documentationFixed = $author$project$Elm$Processing$Documentation$postProcess(operatorFixed);
        return documentationFixed;
      });
      var $elm$core$Dict$getMin = function(dict) {
        getMin:
          while (true) {
            if (dict.$ === "RBNode_elm_builtin" && dict.d.$ === "RBNode_elm_builtin") {
              var left = dict.d;
              var $temp$dict = left;
              dict = $temp$dict;
              continue getMin;
            } else {
              return dict;
            }
          }
      };
      var $elm$core$Dict$moveRedLeft = function(dict) {
        if (dict.$ === "RBNode_elm_builtin" && dict.d.$ === "RBNode_elm_builtin" && dict.e.$ === "RBNode_elm_builtin") {
          if (dict.e.d.$ === "RBNode_elm_builtin" && dict.e.d.a.$ === "Red") {
            var clr = dict.a;
            var k = dict.b;
            var v = dict.c;
            var _v1 = dict.d;
            var lClr = _v1.a;
            var lK = _v1.b;
            var lV = _v1.c;
            var lLeft = _v1.d;
            var lRight = _v1.e;
            var _v2 = dict.e;
            var rClr = _v2.a;
            var rK = _v2.b;
            var rV = _v2.c;
            var rLeft = _v2.d;
            var _v3 = rLeft.a;
            var rlK = rLeft.b;
            var rlV = rLeft.c;
            var rlL = rLeft.d;
            var rlR = rLeft.e;
            var rRight = _v2.e;
            return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rlK, rlV, A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight), rlL), A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rlR, rRight));
          } else {
            var clr = dict.a;
            var k = dict.b;
            var v = dict.c;
            var _v4 = dict.d;
            var lClr = _v4.a;
            var lK = _v4.b;
            var lV = _v4.c;
            var lLeft = _v4.d;
            var lRight = _v4.e;
            var _v5 = dict.e;
            var rClr = _v5.a;
            var rK = _v5.b;
            var rV = _v5.c;
            var rLeft = _v5.d;
            var rRight = _v5.e;
            if (clr.$ === "Black") {
              return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight), A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
            } else {
              return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight), A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
            }
          }
        } else {
          return dict;
        }
      };
      var $elm$core$Dict$moveRedRight = function(dict) {
        if (dict.$ === "RBNode_elm_builtin" && dict.d.$ === "RBNode_elm_builtin" && dict.e.$ === "RBNode_elm_builtin") {
          if (dict.d.d.$ === "RBNode_elm_builtin" && dict.d.d.a.$ === "Red") {
            var clr = dict.a;
            var k = dict.b;
            var v = dict.c;
            var _v1 = dict.d;
            var lClr = _v1.a;
            var lK = _v1.b;
            var lV = _v1.c;
            var _v2 = _v1.d;
            var _v3 = _v2.a;
            var llK = _v2.b;
            var llV = _v2.c;
            var llLeft = _v2.d;
            var llRight = _v2.e;
            var lRight = _v1.e;
            var _v4 = dict.e;
            var rClr = _v4.a;
            var rK = _v4.b;
            var rV = _v4.c;
            var rLeft = _v4.d;
            var rRight = _v4.e;
            return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight), A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, lRight, A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight)));
          } else {
            var clr = dict.a;
            var k = dict.b;
            var v = dict.c;
            var _v5 = dict.d;
            var lClr = _v5.a;
            var lK = _v5.b;
            var lV = _v5.c;
            var lLeft = _v5.d;
            var lRight = _v5.e;
            var _v6 = dict.e;
            var rClr = _v6.a;
            var rK = _v6.b;
            var rV = _v6.c;
            var rLeft = _v6.d;
            var rRight = _v6.e;
            if (clr.$ === "Black") {
              return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight), A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
            } else {
              return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight), A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
            }
          }
        } else {
          return dict;
        }
      };
      var $elm$core$Dict$removeHelpPrepEQGT = F7(function(targetKey, dict, color, key, value, left, right) {
        if (left.$ === "RBNode_elm_builtin" && left.a.$ === "Red") {
          var _v1 = left.a;
          var lK = left.b;
          var lV = left.c;
          var lLeft = left.d;
          var lRight = left.e;
          return A5($elm$core$Dict$RBNode_elm_builtin, color, lK, lV, lLeft, A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, lRight, right));
        } else {
          _v2$2:
            while (true) {
              if (right.$ === "RBNode_elm_builtin" && right.a.$ === "Black") {
                if (right.d.$ === "RBNode_elm_builtin") {
                  if (right.d.a.$ === "Black") {
                    var _v3 = right.a;
                    var _v4 = right.d;
                    var _v5 = _v4.a;
                    return $elm$core$Dict$moveRedRight(dict);
                  } else {
                    break _v2$2;
                  }
                } else {
                  var _v6 = right.a;
                  var _v7 = right.d;
                  return $elm$core$Dict$moveRedRight(dict);
                }
              } else {
                break _v2$2;
              }
            }
          return dict;
        }
      });
      var $elm$core$Dict$removeMin = function(dict) {
        if (dict.$ === "RBNode_elm_builtin" && dict.d.$ === "RBNode_elm_builtin") {
          var color = dict.a;
          var key = dict.b;
          var value = dict.c;
          var left = dict.d;
          var lColor = left.a;
          var lLeft = left.d;
          var right = dict.e;
          if (lColor.$ === "Black") {
            if (lLeft.$ === "RBNode_elm_builtin" && lLeft.a.$ === "Red") {
              var _v3 = lLeft.a;
              return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, $elm$core$Dict$removeMin(left), right);
            } else {
              var _v4 = $elm$core$Dict$moveRedLeft(dict);
              if (_v4.$ === "RBNode_elm_builtin") {
                var nColor = _v4.a;
                var nKey = _v4.b;
                var nValue = _v4.c;
                var nLeft = _v4.d;
                var nRight = _v4.e;
                return A5($elm$core$Dict$balance, nColor, nKey, nValue, $elm$core$Dict$removeMin(nLeft), nRight);
              } else {
                return $elm$core$Dict$RBEmpty_elm_builtin;
              }
            }
          } else {
            return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, $elm$core$Dict$removeMin(left), right);
          }
        } else {
          return $elm$core$Dict$RBEmpty_elm_builtin;
        }
      };
      var $elm$core$Dict$removeHelp = F2(function(targetKey, dict) {
        if (dict.$ === "RBEmpty_elm_builtin") {
          return $elm$core$Dict$RBEmpty_elm_builtin;
        } else {
          var color = dict.a;
          var key = dict.b;
          var value = dict.c;
          var left = dict.d;
          var right = dict.e;
          if (_Utils_cmp(targetKey, key) < 0) {
            if (left.$ === "RBNode_elm_builtin" && left.a.$ === "Black") {
              var _v4 = left.a;
              var lLeft = left.d;
              if (lLeft.$ === "RBNode_elm_builtin" && lLeft.a.$ === "Red") {
                var _v6 = lLeft.a;
                return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, A2($elm$core$Dict$removeHelp, targetKey, left), right);
              } else {
                var _v7 = $elm$core$Dict$moveRedLeft(dict);
                if (_v7.$ === "RBNode_elm_builtin") {
                  var nColor = _v7.a;
                  var nKey = _v7.b;
                  var nValue = _v7.c;
                  var nLeft = _v7.d;
                  var nRight = _v7.e;
                  return A5($elm$core$Dict$balance, nColor, nKey, nValue, A2($elm$core$Dict$removeHelp, targetKey, nLeft), nRight);
                } else {
                  return $elm$core$Dict$RBEmpty_elm_builtin;
                }
              }
            } else {
              return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, A2($elm$core$Dict$removeHelp, targetKey, left), right);
            }
          } else {
            return A2($elm$core$Dict$removeHelpEQGT, targetKey, A7($elm$core$Dict$removeHelpPrepEQGT, targetKey, dict, color, key, value, left, right));
          }
        }
      });
      var $elm$core$Dict$removeHelpEQGT = F2(function(targetKey, dict) {
        if (dict.$ === "RBNode_elm_builtin") {
          var color = dict.a;
          var key = dict.b;
          var value = dict.c;
          var left = dict.d;
          var right = dict.e;
          if (_Utils_eq(targetKey, key)) {
            var _v1 = $elm$core$Dict$getMin(right);
            if (_v1.$ === "RBNode_elm_builtin") {
              var minKey = _v1.b;
              var minValue = _v1.c;
              return A5($elm$core$Dict$balance, color, minKey, minValue, left, $elm$core$Dict$removeMin(right));
            } else {
              return $elm$core$Dict$RBEmpty_elm_builtin;
            }
          } else {
            return A5($elm$core$Dict$balance, color, key, value, left, A2($elm$core$Dict$removeHelp, targetKey, right));
          }
        } else {
          return $elm$core$Dict$RBEmpty_elm_builtin;
        }
      });
      var $elm$core$Dict$remove = F2(function(key, dict) {
        var _v0 = A2($elm$core$Dict$removeHelp, key, dict);
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
      var $author$project$Derive$Util$unlines = $elm$core$String$join("\n");
      var $elm$json$Json$Encode$object = function(pairs) {
        return _Json_wrap(A3($elm$core$List$foldl, F2(function(_v0, obj) {
          var k = _v0.a;
          var v = _v0.b;
          return A3(_Json_addField, k, v, obj);
        }), _Json_emptyObject(_Utils_Tuple0), pairs));
      };
      var $author$project$Port$writeFile = _Platform_outgoingPort("writeFile", function($) {
        return $elm$json$Json$Encode$object(_List_fromArray([_Utils_Tuple2("path", $elm$json$Json$Encode$string($.path)), _Utils_Tuple2("source", $elm$json$Json$Encode$string($.source))]));
      });
      var $author$project$Main$update = F2(function(msg, model) {
        var path = msg.a.path;
        var source = msg.a.source;
        var _v1 = $author$project$Elm$Parser$parse(source);
        if (_v1.$ === "Err") {
          var err = _v1.a;
          return _Utils_Tuple2(model, $author$project$Port$exitWithError("Parse Error: " + $author$project$Derive$Util$unlines(A2($elm$core$List$map, $author$project$Parser$Extra$deadEndToString(source), err))));
        } else {
          var rawFile = _v1.a;
          var moduleName = A3($elm$core$String$replace, "/", ".", A2($elm$core$String$dropRight, $elm$core$String$length(".elm"), path));
          var model_ = _Utils_update(model, {
            files: A3($elm$core$Dict$insert, moduleName, rawFile, model.files),
            requestingFiles: A2($elm$core$Dict$remove, path, model.requestingFiles)
          });
          if ($elm$core$Dict$isEmpty(model_.requestingFiles)) {
            var targetModuleName = A3($elm$core$String$replace, "/", ".", A2($elm$core$String$dropRight, $elm$core$String$length(".elm"), model.flags.target));
            var _v2 = A2($elm$core$Dict$get, targetModuleName, model_.files);
            if (_v2.$ === "Nothing") {
              return _Utils_Tuple2(model_, $author$project$Port$exitWithError("Internal Error"));
            } else {
              var targetRawFile = _v2.a;
              var file = A2($author$project$Elm$Processing$process, $author$project$Elm$Processing$init, targetRawFile);
              var result = A2($author$project$Derive$generate, model.flags, file);
              if (result.$ === "Err") {
                var err = result.a;
                return _Utils_Tuple2(model_, $author$project$Port$exitWithError("Generation Error: " + A2($elm$core$String$join, " ", err)));
              } else {
                var generated = result.a;
                return _Utils_Tuple2(model_, $elm$core$Platform$Cmd$batch(_List_fromArray([$author$project$Port$writeFile({
                  path: A3($elm$core$String$replace, ".", "/", targetModuleName) + "/Derive.elm",
                  source: A2($the_sett$elm_syntax_dsl$Elm$Pretty$pretty, 120, generated)
                }), $author$project$Port$exit(_Utils_Tuple0)])));
              }
            }
          } else {
            return _Utils_Tuple2(model_, $elm$core$Platform$Cmd$none);
          }
        }
      });
      var $elm$core$Platform$worker = _Platform_worker;
      var $author$project$Main$main = $elm$core$Platform$worker({
        init: function(flags) {
          return _Utils_Tuple2({
            files: $elm$core$Dict$empty,
            flags,
            requestingFiles: A2($elm$core$Dict$singleton, flags.target, _Utils_Tuple0)
          }, $author$project$Port$requestFile(flags.target));
        },
        subscriptions: $elm$core$Basics$always($author$project$Port$receiveFile($author$project$Main$ReceiveFile)),
        update: $author$project$Main$update
      });
      _Platform_export({
        Main: {
          init: $author$project$Main$main(A2($elm$json$Json$Decode$andThen, function(target) {
            return A2($elm$json$Json$Decode$andThen, function(random) {
              return A2($elm$json$Json$Decode$andThen, function(ord) {
                return A2($elm$json$Json$Decode$andThen, function(html) {
                  return A2($elm$json$Json$Decode$andThen, function(encode) {
                    return A2($elm$json$Json$Decode$andThen, function(decode) {
                      return $elm$json$Json$Decode$succeed({
                        decode,
                        encode,
                        html,
                        ord,
                        random,
                        target
                      });
                    }, A2($elm$json$Json$Decode$field, "decode", $elm$json$Json$Decode$bool));
                  }, A2($elm$json$Json$Decode$field, "encode", $elm$json$Json$Decode$bool));
                }, A2($elm$json$Json$Decode$field, "html", $elm$json$Json$Decode$bool));
              }, A2($elm$json$Json$Decode$field, "ord", $elm$json$Json$Decode$bool));
            }, A2($elm$json$Json$Decode$field, "random", $elm$json$Json$Decode$bool));
          }, A2($elm$json$Json$Decode$field, "target", $elm$json$Json$Decode$string)))(0)
        }
      });
    })(exports);
  },

  39(exports) {
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
    const u = __require(39 /* universalify */).fromCallback;
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
        mode: 511
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
    const u = __require(39 /* universalify */).fromPromise;
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
    const u = __require(39 /* universalify */).fromPromise;
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
    const u = __require(39 /* universalify */).fromCallback;
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
    const u = __require(39 /* universalify */).fromCallback;
    const rimraf = __require(29 /* ./rimraf */);
    module.exports = {
      remove: u(rimraf),
      removeSync: rimraf.sync
    };
  },

  7(exports, module) {
    // node_modules\fs-extra\lib\empty\index.js
    "use strict";
    const u = __require(39 /* universalify */).fromCallback;
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
    const u = __require(39 /* universalify */).fromCallback;
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
    const u = __require(39 /* universalify */).fromCallback;
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
    const u = __require(39 /* universalify */).fromCallback;
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
    const universalify = __require(39 /* universalify */);
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
    const u = __require(39 /* universalify */).fromCallback;
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
    const u = __require(39 /* universalify */).fromPromise;
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
    const u = __require(39 /* universalify */).fromCallback;
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

  38(exports, module) {
    // node_modules\minimist\index.js
    module.exports = function(args, opts) {
      if (!opts)
        opts = {};
      var flags = {
        bools: {},
        strings: {},
        unknownFn: null
      };
      if (typeof opts["unknown"] === "function") {
        flags.unknownFn = opts["unknown"];
      }
      if (typeof opts["boolean"] === "boolean" && opts["boolean"]) {
        flags.allBools = true;
      } else {
        [].concat(opts["boolean"]).filter(Boolean).forEach(function(key2) {
          flags.bools[key2] = true;
        });
      }
      var aliases = {};
      Object.keys(opts.alias || {}).forEach(function(key2) {
        aliases[key2] = [].concat(opts.alias[key2]);
        aliases[key2].forEach(function(x) {
          aliases[x] = [key2].concat(aliases[key2].filter(function(y) {
            return x !== y;
          }));
        });
      });
      [].concat(opts.string).filter(Boolean).forEach(function(key2) {
        flags.strings[key2] = true;
        if (aliases[key2]) {
          flags.strings[aliases[key2]] = true;
        }
      });
      var defaults = opts["default"] || {};
      var argv = {
        _: []
      };
      Object.keys(flags.bools).forEach(function(key2) {
        setArg(key2, defaults[key2] === void 0 ? false : defaults[key2]);
      });
      var notFlags = [];
      if (args.indexOf("--") !== -1) {
        notFlags = args.slice(args.indexOf("--") + 1);
        args = args.slice(0, args.indexOf("--"));
      }
      function argDefined(key2, arg2) {
        return flags.allBools && /^--[^=]+$/.test(arg2) || flags.strings[key2] || flags.bools[key2] || aliases[key2];
      }
      function setArg(key2, val, arg2) {
        if (arg2 && flags.unknownFn && !argDefined(key2, arg2)) {
          if (flags.unknownFn(arg2) === false)
            return;
        }
        var value2 = !flags.strings[key2] && isNumber(val) ? Number(val) : val;
        setKey(argv, key2.split("."), value2);
        (aliases[key2] || []).forEach(function(x) {
          setKey(argv, x.split("."), value2);
        });
      }
      function setKey(obj, keys, value2) {
        var o = obj;
        for (var i2 = 0; i2 < keys.length - 1; i2++) {
          var key2 = keys[i2];
          if (key2 === "__proto__")
            return;
          if (o[key2] === void 0)
            o[key2] = {};
          if (o[key2] === Object.prototype || o[key2] === Number.prototype || o[key2] === String.prototype)
            o[key2] = {};
          if (o[key2] === Array.prototype)
            o[key2] = [];
          o = o[key2];
        }
        var key2 = keys[keys.length - 1];
        if (key2 === "__proto__")
          return;
        if (o === Object.prototype || o === Number.prototype || o === String.prototype)
          o = {};
        if (o === Array.prototype)
          o = [];
        if (o[key2] === void 0 || flags.bools[key2] || typeof o[key2] === "boolean") {
          o[key2] = value2;
        } else if (Array.isArray(o[key2])) {
          o[key2].push(value2);
        } else {
          o[key2] = [o[key2], value2];
        }
      }
      function aliasIsBoolean(key2) {
        return aliases[key2].some(function(x) {
          return flags.bools[x];
        });
      }
      for (var i = 0; i < args.length; i++) {
        var arg = args[i];
        if (/^--.+=/.test(arg)) {
          var m = arg.match(/^--([^=]+)=([\s\S]*)$/);
          var key = m[1];
          var value = m[2];
          if (flags.bools[key]) {
            value = value !== "false";
          }
          setArg(key, value, arg);
        } else if (/^--no-.+/.test(arg)) {
          var key = arg.match(/^--no-(.+)/)[1];
          setArg(key, false, arg);
        } else if (/^--.+/.test(arg)) {
          var key = arg.match(/^--(.+)/)[1];
          var next = args[i + 1];
          if (next !== void 0 && !/^-/.test(next) && !flags.bools[key] && !flags.allBools && (aliases[key] ? !aliasIsBoolean(key) : true)) {
            setArg(key, next, arg);
            i++;
          } else if (/^(true|false)$/.test(next)) {
            setArg(key, next === "true", arg);
            i++;
          } else {
            setArg(key, flags.strings[key] ? "" : true, arg);
          }
        } else if (/^-[^-]+/.test(arg)) {
          var letters = arg.slice(1, -1).split("");
          var broken = false;
          for (var j = 0; j < letters.length; j++) {
            var next = arg.slice(j + 2);
            if (next === "-") {
              setArg(letters[j], next, arg);
              continue;
            }
            if (/[A-Za-z]/.test(letters[j]) && /=/.test(next)) {
              setArg(letters[j], next.split("=")[1], arg);
              broken = true;
              break;
            }
            if (/[A-Za-z]/.test(letters[j]) && /-?\d+(\.\d*)?(e-?\d+)?$/.test(next)) {
              setArg(letters[j], next, arg);
              broken = true;
              break;
            }
            if (letters[j + 1] && letters[j + 1].match(/\W/)) {
              setArg(letters[j], arg.slice(j + 2), arg);
              broken = true;
              break;
            } else {
              setArg(letters[j], flags.strings[letters[j]] ? "" : true, arg);
            }
          }
          var key = arg.slice(-1)[0];
          if (!broken && key !== "-") {
            if (args[i + 1] && !/^(-|--)[^-]/.test(args[i + 1]) && !flags.bools[key] && (aliases[key] ? !aliasIsBoolean(key) : true)) {
              setArg(key, args[i + 1], arg);
              i++;
            } else if (args[i + 1] && /^(true|false)$/.test(args[i + 1])) {
              setArg(key, args[i + 1] === "true", arg);
              i++;
            } else {
              setArg(key, flags.strings[key] ? "" : true, arg);
            }
          }
        } else {
          if (!flags.unknownFn || flags.unknownFn(arg) !== false) {
            argv._.push(flags.strings["_"] || !isNumber(arg) ? arg : Number(arg));
          }
          if (opts.stopEarly) {
            argv._.push.apply(argv._, args.slice(i + 1));
            break;
          }
        }
      }
      Object.keys(defaults).forEach(function(key2) {
        if (!hasKey(argv, key2.split("."))) {
          setKey(argv, key2.split("."), defaults[key2]);
          (aliases[key2] || []).forEach(function(x) {
            setKey(argv, x.split("."), defaults[key2]);
          });
        }
      });
      if (opts["--"]) {
        argv["--"] = new Array();
        notFlags.forEach(function(key2) {
          argv["--"].push(key2);
        });
      } else {
        notFlags.forEach(function(key2) {
          argv._.push(key2);
        });
      }
      return argv;
    };
    function hasKey(obj, keys) {
      var o = obj;
      keys.slice(0, -1).forEach(function(key2) {
        o = o[key2] || {};
      });
      var key = keys[keys.length - 1];
      return key in o;
    }
    function isNumber(x) {
      if (typeof x === "number")
        return true;
      if (/^0x[0-9a-f]+$/i.test(x))
        return true;
      return /^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(x);
    }
  },

  40() {
    // src\index.mjs
    const elm_derive = __import(1 /* ../dist/elm-derive.js */);
    const fs = __toModule(require("fs"));
    const fs_extra = __import(15 /* fs-extra */);
    const path = __toModule(require("path"));
    const minimist = __import(38 /* minimist */);
    const argv = minimist.default(process.argv.slice(2), {
      boolean: true
    });
    const dir = argv.dir || "src";
    const dest = argv.dest || "generated";
    const target = argv._[0];
    const all = !(argv.encode || argv.decode || argv.random || argv.html || argv.ord);
    const encode = all || (argv.encode ? true : false);
    const decode = all || (argv.decode ? true : false);
    const random = all || (argv.random ? true : false);
    const html = all || (argv.html ? true : false);
    const ord = all || (argv.ord ? true : false);
    if (target) {
      const app = elm_derive.default.Elm.Main.init({
        flags: {
          target,
          encode,
          decode,
          random,
          html,
          ord
        }
      });
      app.ports.requestFile.subscribe(async (filePath) => {
        const buffer = await fs_extra.default.readFile(path.default.resolve(dir, filePath));
        app.ports.receiveFile.send({
          path: filePath,
          source: buffer.toString()
        });
      });
      app.ports.exitWithError.subscribe((message) => {
        process.on("exit", function() {
          process.exit(0);
        });
      });
      app.ports.exitWithError.subscribe((message) => {
        console.error(message);
        process.on("exit", function() {
          process.exit(1);
        });
      });
      app.ports.writeFile.subscribe(async (args) => {
        await fs_extra.default.ensureDir(path.default.resolve(dest, path.default.dirname(args.path)));
        await fs_extra.default.writeFile(path.default.resolve(dest, args.path), args.source);
      });
    } else {
      console.log("elm-derive v0.0.1");
    }
  }
};
module.exports = __require(40);
