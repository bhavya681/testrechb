import je, { useState as ee } from "react";
var re = { exports: {} }, $ = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se;
function pr() {
  if (Se) return $;
  Se = 1;
  var w = je, C = Symbol.for("react.element"), P = Symbol.for("react.fragment"), R = Object.prototype.hasOwnProperty, E = w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, S = { key: !0, ref: !0, __self: !0, __source: !0 };
  function _(x, u, T) {
    var v, m = {}, O = null, L = null;
    T !== void 0 && (O = "" + T), u.key !== void 0 && (O = "" + u.key), u.ref !== void 0 && (L = u.ref);
    for (v in u) R.call(u, v) && !S.hasOwnProperty(v) && (m[v] = u[v]);
    if (x && x.defaultProps) for (v in u = x.defaultProps, u) m[v] === void 0 && (m[v] = u[v]);
    return { $$typeof: C, type: x, key: O, ref: L, props: m, _owner: E.current };
  }
  return $.Fragment = P, $.jsx = _, $.jsxs = _, $;
}
var Y = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function vr() {
  return Oe || (Oe = 1, process.env.NODE_ENV !== "production" && function() {
    var w = je, C = Symbol.for("react.element"), P = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), _ = Symbol.for("react.provider"), x = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), L = Symbol.for("react.offscreen"), te = Symbol.iterator, ke = "@@iterator";
    function Pe(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = te && e[te] || e[ke];
      return typeof r == "function" ? r : null;
    }
    var A = w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function f(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Ae("error", e, t);
      }
    }
    function Ae(e, r, t) {
      {
        var n = A.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var s = t.map(function(o) {
          return String(o);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var De = !1, Fe = !1, Ie = !1, We = !1, Me = !1, ne;
    ne = Symbol.for("react.module.reference");
    function $e(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === R || e === S || Me || e === E || e === T || e === v || We || e === L || De || Fe || Ie || typeof e == "object" && e !== null && (e.$$typeof === O || e.$$typeof === m || e.$$typeof === _ || e.$$typeof === x || e.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ne || e.getModuleId !== void 0));
    }
    function Ye(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function ae(e) {
      return e.displayName || "Context";
    }
    function y(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && f("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case R:
          return "Fragment";
        case P:
          return "Portal";
        case S:
          return "Profiler";
        case E:
          return "StrictMode";
        case T:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case x:
            var r = e;
            return ae(r) + ".Consumer";
          case _:
            var t = e;
            return ae(t._context) + ".Provider";
          case u:
            return Ye(e, e.render, "ForwardRef");
          case m:
            var n = e.displayName || null;
            return n !== null ? n : y(e.type) || "Memo";
          case O: {
            var i = e, s = i._payload, o = i._init;
            try {
              return y(o(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var j = Object.assign, I = 0, oe, ie, se, ue, le, ce, fe;
    function de() {
    }
    de.__reactDisabledLog = !0;
    function Le() {
      {
        if (I === 0) {
          oe = console.log, ie = console.info, se = console.warn, ue = console.error, le = console.group, ce = console.groupCollapsed, fe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: de,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        I++;
      }
    }
    function Be() {
      {
        if (I--, I === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: j({}, e, {
              value: oe
            }),
            info: j({}, e, {
              value: ie
            }),
            warn: j({}, e, {
              value: se
            }),
            error: j({}, e, {
              value: ue
            }),
            group: j({}, e, {
              value: le
            }),
            groupCollapsed: j({}, e, {
              value: ce
            }),
            groupEnd: j({}, e, {
              value: fe
            })
          });
        }
        I < 0 && f("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var z = A.ReactCurrentDispatcher, J;
    function B(e, r, t) {
      {
        if (J === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            J = n && n[1] || "";
          }
        return `
` + J + e;
      }
    }
    var q = !1, V;
    {
      var Ve = typeof WeakMap == "function" ? WeakMap : Map;
      V = new Ve();
    }
    function pe(e, r) {
      if (!e || q)
        return "";
      {
        var t = V.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      q = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = z.current, z.current = null, Le();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (p) {
              n = p;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (p) {
              n = p;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (p) {
            n = p;
          }
          e();
        }
      } catch (p) {
        if (p && n && typeof p.stack == "string") {
          for (var a = p.stack.split(`
`), d = n.stack.split(`
`), l = a.length - 1, c = d.length - 1; l >= 1 && c >= 0 && a[l] !== d[c]; )
            c--;
          for (; l >= 1 && c >= 0; l--, c--)
            if (a[l] !== d[c]) {
              if (l !== 1 || c !== 1)
                do
                  if (l--, c--, c < 0 || a[l] !== d[c]) {
                    var h = `
` + a[l].replace(" at new ", " at ");
                    return e.displayName && h.includes("<anonymous>") && (h = h.replace("<anonymous>", e.displayName)), typeof e == "function" && V.set(e, h), h;
                  }
                while (l >= 1 && c >= 0);
              break;
            }
        }
      } finally {
        q = !1, z.current = s, Be(), Error.prepareStackTrace = i;
      }
      var F = e ? e.displayName || e.name : "", k = F ? B(F) : "";
      return typeof e == "function" && V.set(e, k), k;
    }
    function Ue(e, r, t) {
      return pe(e, !1);
    }
    function Ne(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function U(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return pe(e, Ne(e));
      if (typeof e == "string")
        return B(e);
      switch (e) {
        case T:
          return B("Suspense");
        case v:
          return B("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case u:
            return Ue(e.render);
          case m:
            return U(e.type, r, t);
          case O: {
            var n = e, i = n._payload, s = n._init;
            try {
              return U(s(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var W = Object.prototype.hasOwnProperty, ve = {}, he = A.ReactDebugCurrentFrame;
    function N(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        he.setExtraStackFrame(t);
      } else
        he.setExtraStackFrame(null);
    }
    function ze(e, r, t, n, i) {
      {
        var s = Function.call.bind(W);
        for (var o in e)
          if (s(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var d = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw d.name = "Invariant Violation", d;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (l) {
              a = l;
            }
            a && !(a instanceof Error) && (N(i), f("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), N(null)), a instanceof Error && !(a.message in ve) && (ve[a.message] = !0, N(i), f("Failed %s type: %s", t, a.message), N(null));
          }
      }
    }
    var Je = Array.isArray;
    function K(e) {
      return Je(e);
    }
    function qe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ke(e) {
      try {
        return ge(e), !1;
      } catch {
        return !0;
      }
    }
    function ge(e) {
      return "" + e;
    }
    function be(e) {
      if (Ke(e))
        return f("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qe(e)), ge(e);
    }
    var M = A.ReactCurrentOwner, Ge = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ye, xe, G;
    G = {};
    function He(e) {
      if (W.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Xe(e) {
      if (W.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ze(e, r) {
      if (typeof e.ref == "string" && M.current && r && M.current.stateNode !== r) {
        var t = y(M.current.type);
        G[t] || (f('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', y(M.current.type), e.ref), G[t] = !0);
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          ye || (ye = !0, f("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function er(e, r) {
      {
        var t = function() {
          xe || (xe = !0, f("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var rr = function(e, r, t, n, i, s, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: C,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: s
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function tr(e, r, t, n, i) {
      {
        var s, o = {}, a = null, d = null;
        t !== void 0 && (be(t), a = "" + t), Xe(r) && (be(r.key), a = "" + r.key), He(r) && (d = r.ref, Ze(r, i));
        for (s in r)
          W.call(r, s) && !Ge.hasOwnProperty(s) && (o[s] = r[s]);
        if (e && e.defaultProps) {
          var l = e.defaultProps;
          for (s in l)
            o[s] === void 0 && (o[s] = l[s]);
        }
        if (a || d) {
          var c = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Qe(o, c), d && er(o, c);
        }
        return rr(e, a, d, i, n, M.current, o);
      }
    }
    var H = A.ReactCurrentOwner, me = A.ReactDebugCurrentFrame;
    function D(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        me.setExtraStackFrame(t);
      } else
        me.setExtraStackFrame(null);
    }
    var X;
    X = !1;
    function Z(e) {
      return typeof e == "object" && e !== null && e.$$typeof === C;
    }
    function Re() {
      {
        if (H.current) {
          var e = y(H.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function nr(e) {
      return "";
    }
    var Ee = {};
    function ar(e) {
      {
        var r = Re();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function _e(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ar(r);
        if (Ee[t])
          return;
        Ee[t] = !0;
        var n = "";
        e && e._owner && e._owner !== H.current && (n = " It was passed a child from " + y(e._owner.type) + "."), D(e), f('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), D(null);
      }
    }
    function Te(e, r) {
      {
        if (typeof e != "object")
          return;
        if (K(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            Z(n) && _e(n, r);
          }
        else if (Z(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = Pe(e);
          if (typeof i == "function" && i !== e.entries)
            for (var s = i.call(e), o; !(o = s.next()).done; )
              Z(o.value) && _e(o.value, r);
        }
      }
    }
    function or(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === m))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = y(r);
          ze(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !X) {
          X = !0;
          var i = y(r);
          f("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && f("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ir(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            D(e), f("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), D(null);
            break;
          }
        }
        e.ref !== null && (D(e), f("Invalid attribute `ref` supplied to `React.Fragment`."), D(null));
      }
    }
    var we = {};
    function Ce(e, r, t, n, i, s) {
      {
        var o = $e(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var d = nr();
          d ? a += d : a += Re();
          var l;
          e === null ? l = "null" : K(e) ? l = "array" : e !== void 0 && e.$$typeof === C ? (l = "<" + (y(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : l = typeof e, f("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", l, a);
        }
        var c = tr(e, r, t, i, s);
        if (c == null)
          return c;
        if (o) {
          var h = r.children;
          if (h !== void 0)
            if (n)
              if (K(h)) {
                for (var F = 0; F < h.length; F++)
                  Te(h[F], e);
                Object.freeze && Object.freeze(h);
              } else
                f("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Te(h, e);
        }
        if (W.call(r, "key")) {
          var k = y(e), p = Object.keys(r).filter(function(dr) {
            return dr !== "key";
          }), Q = p.length > 0 ? "{key: someKey, " + p.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!we[k + Q]) {
            var fr = p.length > 0 ? "{" + p.join(": ..., ") + ": ...}" : "{}";
            f(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Q, k, fr, k), we[k + Q] = !0;
          }
        }
        return e === R ? ir(c) : or(c), c;
      }
    }
    function sr(e, r, t) {
      return Ce(e, r, t, !0);
    }
    function ur(e, r, t) {
      return Ce(e, r, t, !1);
    }
    var lr = ur, cr = sr;
    Y.Fragment = R, Y.jsx = lr, Y.jsxs = cr;
  }()), Y;
}
process.env.NODE_ENV === "production" ? re.exports = pr() : re.exports = vr();
var b = re.exports;
const gr = () => {
  const [w, C] = ee(!1), [P, R] = ee([
    { text: "Hi, how can I assist you?", sender: "bot" }
  ]), [E, S] = ee(""), _ = () => {
    C(!w);
  }, x = () => {
    if (E.trim() === "") return;
    const u = [
      ...P,
      { text: E, sender: "user" },
      { text: "I'm here to help you!", sender: "bot" }
    ];
    R(u), S("");
  };
  return /* @__PURE__ */ b.jsxs("div", { style: g.wrapper, children: [
    /* @__PURE__ */ b.jsx("button", { onClick: _, style: g.chatToggleButton, children: w ? "Close Chat" : "Open Chat" }),
    w && /* @__PURE__ */ b.jsxs("div", { style: g.chatWindow, children: [
      /* @__PURE__ */ b.jsxs("div", { style: g.chatHeader, children: [
        /* @__PURE__ */ b.jsx("h4", { style: g.headerText, children: "Support Chat" }),
        /* @__PURE__ */ b.jsx("button", { style: g.closeButton, onClick: _, children: "X" })
      ] }),
      /* @__PURE__ */ b.jsx("div", { style: g.chatBody, children: P.map((u, T) => /* @__PURE__ */ b.jsx(
        "div",
        {
          style: u.sender === "user" ? g.userMessage : g.botMessage,
          children: u.text
        },
        T
      )) }),
      /* @__PURE__ */ b.jsxs("div", { style: g.chatInputContainer, children: [
        /* @__PURE__ */ b.jsx(
          "input",
          {
            type: "text",
            value: E,
            onChange: (u) => S(u.target.value),
            placeholder: "Type your message...",
            style: g.chatInput
          }
        ),
        /* @__PURE__ */ b.jsx("button", { onClick: x, style: g.sendButton, children: "Send" })
      ] })
    ] })
  ] });
}, g = {
  wrapper: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    zIndex: 1e3
  },
  chatToggleButton: {
    padding: "10px 15px",
    borderRadius: "50px",
    backgroundColor: "#6200EA",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    fontSize: "16px"
  },
  chatWindow: {
    position: "absolute",
    bottom: "60px",
    right: "0",
    width: "350px",
    height: "450px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    transition: "width 0.3s, height 0.3s"
  },
  chatHeader: {
    backgroundColor: "#6200EA",
    color: "#fff",
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px"
  },
  headerText: {
    margin: 0,
    fontSize: "18px"
  },
  closeButton: {
    backgroundColor: "transparent",
    border: "none",
    color: "#fff",
    fontSize: "18px",
    cursor: "pointer"
  },
  chatBody: {
    flex: 1,
    padding: "10px",
    backgroundColor: "#f9f9f9",
    overflowY: "scroll",
    display: "flex",
    flexDirection: "column",
    scrollbarWidth: "none"
  },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#6200EA",
    color: "#fff",
    padding: "8px 12px",
    borderRadius: "15px",
    margin: "5px 0",
    maxWidth: "70%",
    wordWrap: "break-word"
  },
  botMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#f1f1f1",
    color: "#000",
    padding: "8px 12px",
    borderRadius: "15px",
    margin: "5px 0",
    maxWidth: "70%",
    wordWrap: "break-word"
  },
  chatInputContainer: {
    padding: "10px",
    display: "flex",
    borderTop: "1px solid #ccc"
  },
  chatInput: {
    flex: 1,
    padding: "10px",
    borderRadius: "20px",
    border: "1px solid #ccc",
    marginRight: "10px",
    outline: "none"
  },
  sendButton: {
    backgroundColor: "#6200EA",
    color: "#fff",
    padding: "10px 15px",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer"
  },
  // Media Queries
  "@media screen and (max-width: 600px)": {
    chatWindow: {
      width: "100%",
      height: "80vh",
      bottom: "0",
      right: "0",
      borderRadius: "0",
      transition: "width 0.3s, height 0.3s"
    },
    chatToggleButton: {
      bottom: "10px",
      right: "10px"
    }
  }
};
export {
  gr as default
};
