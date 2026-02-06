(function () {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload")) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) r(c);
  new MutationObserver((c) => {
    for (const B of c)
      if (B.type === "childList")
        for (const o of B.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(c) {
    const B = {};
    return (
      c.integrity && (B.integrity = c.integrity),
      c.referrerPolicy && (B.referrerPolicy = c.referrerPolicy),
      c.crossOrigin === "use-credentials"
        ? (B.credentials = "include")
        : c.crossOrigin === "anonymous"
        ? (B.credentials = "omit")
        : (B.credentials = "same-origin"),
      B
    );
  }
  function r(c) {
    if (c.ep) return;
    c.ep = !0;
    const B = i(c);
    fetch(c.href, B);
  }
})();
function Gh(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default")
    ? l.default
    : l;
}
var yc = { exports: {} },
  ml = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xQ;
function gU() {
  if (xQ) return ml;
  xQ = 1;
  var l = Symbol.for("react.transitional.element"),
    n = Symbol.for("react.fragment");
  function i(r, c, B) {
    var o = null;
    if (
      (B !== void 0 && (o = "" + B),
      c.key !== void 0 && (o = "" + c.key),
      "key" in c)
    ) {
      B = {};
      for (var h in c) h !== "key" && (B[h] = c[h]);
    } else B = c;
    return (
      (c = B.ref),
      { $$typeof: l, type: r, key: o, ref: c !== void 0 ? c : null, props: B }
    );
  }
  return (ml.Fragment = n), (ml.jsx = i), (ml.jsxs = i), ml;
}
var KQ;
function QU() {
  return KQ || ((KQ = 1), (yc.exports = gU())), yc.exports;
}
var O = QU(),
  mc = { exports: {} },
  rA = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var DQ;
function hU() {
  if (DQ) return rA;
  DQ = 1;
  var l = Symbol.for("react.transitional.element"),
    n = Symbol.for("react.portal"),
    i = Symbol.for("react.fragment"),
    r = Symbol.for("react.strict_mode"),
    c = Symbol.for("react.profiler"),
    B = Symbol.for("react.consumer"),
    o = Symbol.for("react.context"),
    h = Symbol.for("react.forward_ref"),
    g = Symbol.for("react.suspense"),
    w = Symbol.for("react.memo"),
    d = Symbol.for("react.lazy"),
    U = Symbol.for("react.activity"),
    y = Symbol.iterator;
  function L(v) {
    return v === null || typeof v != "object"
      ? null
      : ((v = (y && v[y]) || v["@@iterator"]),
        typeof v == "function" ? v : null);
  }
  var I = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    R = Object.assign,
    AA = {};
  function _(v, x, G) {
    (this.props = v),
      (this.context = x),
      (this.refs = AA),
      (this.updater = G || I);
  }
  (_.prototype.isReactComponent = {}),
    (_.prototype.setState = function (v, x) {
      if (typeof v != "object" && typeof v != "function" && v != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, v, x, "setState");
    }),
    (_.prototype.forceUpdate = function (v) {
      this.updater.enqueueForceUpdate(this, v, "forceUpdate");
    });
  function X() {}
  X.prototype = _.prototype;
  function aA(v, x, G) {
    (this.props = v),
      (this.context = x),
      (this.refs = AA),
      (this.updater = G || I);
  }
  var z = (aA.prototype = new X());
  (z.constructor = aA), R(z, _.prototype), (z.isPureReactComponent = !0);
  var J = Array.isArray;
  function M() {}
  var V = { H: null, A: null, T: null, S: null },
    eA = Object.prototype.hasOwnProperty;
  function W(v, x, G) {
    var Z = G.ref;
    return {
      $$typeof: l,
      type: v,
      key: x,
      ref: Z !== void 0 ? Z : null,
      props: G,
    };
  }
  function FA(v, x) {
    return W(v.type, x, v.props);
  }
  function xA(v) {
    return typeof v == "object" && v !== null && v.$$typeof === l;
  }
  function HA(v) {
    var x = { "=": "=0", ":": "=2" };
    return (
      "$" +
      v.replace(/[=:]/g, function (G) {
        return x[G];
      })
    );
  }
  var fA = /\/+/g;
  function KA(v, x) {
    return typeof v == "object" && v !== null && v.key != null
      ? HA("" + v.key)
      : x.toString(36);
  }
  function JA(v) {
    switch (v.status) {
      case "fulfilled":
        return v.value;
      case "rejected":
        throw v.reason;
      default:
        switch (
          (typeof v.status == "string"
            ? v.then(M, M)
            : ((v.status = "pending"),
              v.then(
                function (x) {
                  v.status === "pending" &&
                    ((v.status = "fulfilled"), (v.value = x));
                },
                function (x) {
                  v.status === "pending" &&
                    ((v.status = "rejected"), (v.reason = x));
                }
              )),
          v.status)
        ) {
          case "fulfilled":
            return v.value;
          case "rejected":
            throw v.reason;
        }
    }
    throw v;
  }
  function b(v, x, G, Z, tA) {
    var lA = typeof v;
    (lA === "undefined" || lA === "boolean") && (v = null);
    var gA = !1;
    if (v === null) gA = !0;
    else
      switch (lA) {
        case "bigint":
        case "string":
        case "number":
          gA = !0;
          break;
        case "object":
          switch (v.$$typeof) {
            case l:
            case n:
              gA = !0;
              break;
            case d:
              return (gA = v._init), b(gA(v._payload), x, G, Z, tA);
          }
      }
    if (gA)
      return (
        (tA = tA(v)),
        (gA = Z === "" ? "." + KA(v, 0) : Z),
        J(tA)
          ? ((G = ""),
            gA != null && (G = gA.replace(fA, "$&/") + "/"),
            b(tA, x, G, "", function (Kn) {
              return Kn;
            }))
          : tA != null &&
            (xA(tA) &&
              (tA = FA(
                tA,
                G +
                  (tA.key == null || (v && v.key === tA.key)
                    ? ""
                    : ("" + tA.key).replace(fA, "$&/") + "/") +
                  gA
              )),
            x.push(tA)),
        1
      );
    gA = 0;
    var oe = Z === "" ? "." : Z + ":";
    if (J(v))
      for (var _A = 0; _A < v.length; _A++)
        (Z = v[_A]), (lA = oe + KA(Z, _A)), (gA += b(Z, x, G, lA, tA));
    else if (((_A = L(v)), typeof _A == "function"))
      for (v = _A.call(v), _A = 0; !(Z = v.next()).done; )
        (Z = Z.value), (lA = oe + KA(Z, _A++)), (gA += b(Z, x, G, lA, tA));
    else if (lA === "object") {
      if (typeof v.then == "function") return b(JA(v), x, G, Z, tA);
      throw (
        ((x = String(v)),
        Error(
          "Objects are not valid as a React child (found: " +
            (x === "[object Object]"
              ? "object with keys {" + Object.keys(v).join(", ") + "}"
              : x) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return gA;
  }
  function N(v, x, G) {
    if (v == null) return v;
    var Z = [],
      tA = 0;
    return (
      b(v, Z, "", "", function (lA) {
        return x.call(G, lA, tA++);
      }),
      Z
    );
  }
  function P(v) {
    if (v._status === -1) {
      var x = v._result;
      (x = x()),
        x.then(
          function (G) {
            (v._status === 0 || v._status === -1) &&
              ((v._status = 1), (v._result = G));
          },
          function (G) {
            (v._status === 0 || v._status === -1) &&
              ((v._status = 2), (v._result = G));
          }
        ),
        v._status === -1 && ((v._status = 0), (v._result = x));
    }
    if (v._status === 1) return v._result.default;
    throw v._result;
  }
  var sA =
      typeof reportError == "function"
        ? reportError
        : function (v) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var x = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof v == "object" &&
                  v !== null &&
                  typeof v.message == "string"
                    ? String(v.message)
                    : String(v),
                error: v,
              });
              if (!window.dispatchEvent(x)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", v);
              return;
            }
            console.error(v);
          },
    oA = {
      map: N,
      forEach: function (v, x, G) {
        N(
          v,
          function () {
            x.apply(this, arguments);
          },
          G
        );
      },
      count: function (v) {
        var x = 0;
        return (
          N(v, function () {
            x++;
          }),
          x
        );
      },
      toArray: function (v) {
        return (
          N(v, function (x) {
            return x;
          }) || []
        );
      },
      only: function (v) {
        if (!xA(v))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return v;
      },
    };
  return (
    (rA.Activity = U),
    (rA.Children = oA),
    (rA.Component = _),
    (rA.Fragment = i),
    (rA.Profiler = c),
    (rA.PureComponent = aA),
    (rA.StrictMode = r),
    (rA.Suspense = g),
    (rA.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = V),
    (rA.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (v) {
        return V.H.useMemoCache(v);
      },
    }),
    (rA.cache = function (v) {
      return function () {
        return v.apply(null, arguments);
      };
    }),
    (rA.cacheSignal = function () {
      return null;
    }),
    (rA.cloneElement = function (v, x, G) {
      if (v == null)
        throw Error(
          "The argument must be a React element, but you passed " + v + "."
        );
      var Z = R({}, v.props),
        tA = v.key;
      if (x != null)
        for (lA in (x.key !== void 0 && (tA = "" + x.key), x))
          !eA.call(x, lA) ||
            lA === "key" ||
            lA === "__self" ||
            lA === "__source" ||
            (lA === "ref" && x.ref === void 0) ||
            (Z[lA] = x[lA]);
      var lA = arguments.length - 2;
      if (lA === 1) Z.children = G;
      else if (1 < lA) {
        for (var gA = Array(lA), oe = 0; oe < lA; oe++)
          gA[oe] = arguments[oe + 2];
        Z.children = gA;
      }
      return W(v.type, tA, Z);
    }),
    (rA.createContext = function (v) {
      return (
        (v = {
          $$typeof: o,
          _currentValue: v,
          _currentValue2: v,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (v.Provider = v),
        (v.Consumer = { $$typeof: B, _context: v }),
        v
      );
    }),
    (rA.createElement = function (v, x, G) {
      var Z,
        tA = {},
        lA = null;
      if (x != null)
        for (Z in (x.key !== void 0 && (lA = "" + x.key), x))
          eA.call(x, Z) &&
            Z !== "key" &&
            Z !== "__self" &&
            Z !== "__source" &&
            (tA[Z] = x[Z]);
      var gA = arguments.length - 2;
      if (gA === 1) tA.children = G;
      else if (1 < gA) {
        for (var oe = Array(gA), _A = 0; _A < gA; _A++)
          oe[_A] = arguments[_A + 2];
        tA.children = oe;
      }
      if (v && v.defaultProps)
        for (Z in ((gA = v.defaultProps), gA))
          tA[Z] === void 0 && (tA[Z] = gA[Z]);
      return W(v, lA, tA);
    }),
    (rA.createRef = function () {
      return { current: null };
    }),
    (rA.forwardRef = function (v) {
      return { $$typeof: h, render: v };
    }),
    (rA.isValidElement = xA),
    (rA.lazy = function (v) {
      return { $$typeof: d, _payload: { _status: -1, _result: v }, _init: P };
    }),
    (rA.memo = function (v, x) {
      return { $$typeof: w, type: v, compare: x === void 0 ? null : x };
    }),
    (rA.startTransition = function (v) {
      var x = V.T,
        G = {};
      V.T = G;
      try {
        var Z = v(),
          tA = V.S;
        tA !== null && tA(G, Z),
          typeof Z == "object" &&
            Z !== null &&
            typeof Z.then == "function" &&
            Z.then(M, sA);
      } catch (lA) {
        sA(lA);
      } finally {
        x !== null && G.types !== null && (x.types = G.types), (V.T = x);
      }
    }),
    (rA.unstable_useCacheRefresh = function () {
      return V.H.useCacheRefresh();
    }),
    (rA.use = function (v) {
      return V.H.use(v);
    }),
    (rA.useActionState = function (v, x, G) {
      return V.H.useActionState(v, x, G);
    }),
    (rA.useCallback = function (v, x) {
      return V.H.useCallback(v, x);
    }),
    (rA.useContext = function (v) {
      return V.H.useContext(v);
    }),
    (rA.useDebugValue = function () {}),
    (rA.useDeferredValue = function (v, x) {
      return V.H.useDeferredValue(v, x);
    }),
    (rA.useEffect = function (v, x) {
      return V.H.useEffect(v, x);
    }),
    (rA.useEffectEvent = function (v) {
      return V.H.useEffectEvent(v);
    }),
    (rA.useId = function () {
      return V.H.useId();
    }),
    (rA.useImperativeHandle = function (v, x, G) {
      return V.H.useImperativeHandle(v, x, G);
    }),
    (rA.useInsertionEffect = function (v, x) {
      return V.H.useInsertionEffect(v, x);
    }),
    (rA.useLayoutEffect = function (v, x) {
      return V.H.useLayoutEffect(v, x);
    }),
    (rA.useMemo = function (v, x) {
      return V.H.useMemo(v, x);
    }),
    (rA.useOptimistic = function (v, x) {
      return V.H.useOptimistic(v, x);
    }),
    (rA.useReducer = function (v, x, G) {
      return V.H.useReducer(v, x, G);
    }),
    (rA.useRef = function (v) {
      return V.H.useRef(v);
    }),
    (rA.useState = function (v) {
      return V.H.useState(v);
    }),
    (rA.useSyncExternalStore = function (v, x, G) {
      return V.H.useSyncExternalStore(v, x, G);
    }),
    (rA.useTransition = function () {
      return V.H.useTransition();
    }),
    (rA.version = "19.2.4"),
    rA
  );
}
var OQ;
function dB() {
  return OQ || ((OQ = 1), (mc.exports = hU())), mc.exports;
}
var Ye = dB();
const wU = Gh(Ye);
var Hc = { exports: {} },
  Hl = {},
  pc = { exports: {} },
  Sc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var IQ;
function CU() {
  return (
    IQ ||
      ((IQ = 1),
      (function (l) {
        function n(b, N) {
          var P = b.length;
          b.push(N);
          A: for (; 0 < P; ) {
            var sA = (P - 1) >>> 1,
              oA = b[sA];
            if (0 < c(oA, N)) (b[sA] = N), (b[P] = oA), (P = sA);
            else break A;
          }
        }
        function i(b) {
          return b.length === 0 ? null : b[0];
        }
        function r(b) {
          if (b.length === 0) return null;
          var N = b[0],
            P = b.pop();
          if (P !== N) {
            b[0] = P;
            A: for (var sA = 0, oA = b.length, v = oA >>> 1; sA < v; ) {
              var x = 2 * (sA + 1) - 1,
                G = b[x],
                Z = x + 1,
                tA = b[Z];
              if (0 > c(G, P))
                Z < oA && 0 > c(tA, G)
                  ? ((b[sA] = tA), (b[Z] = P), (sA = Z))
                  : ((b[sA] = G), (b[x] = P), (sA = x));
              else if (Z < oA && 0 > c(tA, P))
                (b[sA] = tA), (b[Z] = P), (sA = Z);
              else break A;
            }
          }
          return N;
        }
        function c(b, N) {
          var P = b.sortIndex - N.sortIndex;
          return P !== 0 ? P : b.id - N.id;
        }
        if (
          ((l.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var B = performance;
          l.unstable_now = function () {
            return B.now();
          };
        } else {
          var o = Date,
            h = o.now();
          l.unstable_now = function () {
            return o.now() - h;
          };
        }
        var g = [],
          w = [],
          d = 1,
          U = null,
          y = 3,
          L = !1,
          I = !1,
          R = !1,
          AA = !1,
          _ = typeof setTimeout == "function" ? setTimeout : null,
          X = typeof clearTimeout == "function" ? clearTimeout : null,
          aA = typeof setImmediate < "u" ? setImmediate : null;
        function z(b) {
          for (var N = i(w); N !== null; ) {
            if (N.callback === null) r(w);
            else if (N.startTime <= b)
              r(w), (N.sortIndex = N.expirationTime), n(g, N);
            else break;
            N = i(w);
          }
        }
        function J(b) {
          if (((R = !1), z(b), !I))
            if (i(g) !== null) (I = !0), M || ((M = !0), HA());
            else {
              var N = i(w);
              N !== null && JA(J, N.startTime - b);
            }
        }
        var M = !1,
          V = -1,
          eA = 5,
          W = -1;
        function FA() {
          return AA ? !0 : !(l.unstable_now() - W < eA);
        }
        function xA() {
          if (((AA = !1), M)) {
            var b = l.unstable_now();
            W = b;
            var N = !0;
            try {
              A: {
                (I = !1), R && ((R = !1), X(V), (V = -1)), (L = !0);
                var P = y;
                try {
                  e: {
                    for (
                      z(b), U = i(g);
                      U !== null && !(U.expirationTime > b && FA());

                    ) {
                      var sA = U.callback;
                      if (typeof sA == "function") {
                        (U.callback = null), (y = U.priorityLevel);
                        var oA = sA(U.expirationTime <= b);
                        if (((b = l.unstable_now()), typeof oA == "function")) {
                          (U.callback = oA), z(b), (N = !0);
                          break e;
                        }
                        U === i(g) && r(g), z(b);
                      } else r(g);
                      U = i(g);
                    }
                    if (U !== null) N = !0;
                    else {
                      var v = i(w);
                      v !== null && JA(J, v.startTime - b), (N = !1);
                    }
                  }
                  break A;
                } finally {
                  (U = null), (y = P), (L = !1);
                }
                N = void 0;
              }
            } finally {
              N ? HA() : (M = !1);
            }
          }
        }
        var HA;
        if (typeof aA == "function")
          HA = function () {
            aA(xA);
          };
        else if (typeof MessageChannel < "u") {
          var fA = new MessageChannel(),
            KA = fA.port2;
          (fA.port1.onmessage = xA),
            (HA = function () {
              KA.postMessage(null);
            });
        } else
          HA = function () {
            _(xA, 0);
          };
        function JA(b, N) {
          V = _(function () {
            b(l.unstable_now());
          }, N);
        }
        (l.unstable_IdlePriority = 5),
          (l.unstable_ImmediatePriority = 1),
          (l.unstable_LowPriority = 4),
          (l.unstable_NormalPriority = 3),
          (l.unstable_Profiling = null),
          (l.unstable_UserBlockingPriority = 2),
          (l.unstable_cancelCallback = function (b) {
            b.callback = null;
          }),
          (l.unstable_forceFrameRate = function (b) {
            0 > b || 125 < b
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (eA = 0 < b ? Math.floor(1e3 / b) : 5);
          }),
          (l.unstable_getCurrentPriorityLevel = function () {
            return y;
          }),
          (l.unstable_next = function (b) {
            switch (y) {
              case 1:
              case 2:
              case 3:
                var N = 3;
                break;
              default:
                N = y;
            }
            var P = y;
            y = N;
            try {
              return b();
            } finally {
              y = P;
            }
          }),
          (l.unstable_requestPaint = function () {
            AA = !0;
          }),
          (l.unstable_runWithPriority = function (b, N) {
            switch (b) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                b = 3;
            }
            var P = y;
            y = b;
            try {
              return N();
            } finally {
              y = P;
            }
          }),
          (l.unstable_scheduleCallback = function (b, N, P) {
            var sA = l.unstable_now();
            switch (
              (typeof P == "object" && P !== null
                ? ((P = P.delay),
                  (P = typeof P == "number" && 0 < P ? sA + P : sA))
                : (P = sA),
              b)
            ) {
              case 1:
                var oA = -1;
                break;
              case 2:
                oA = 250;
                break;
              case 5:
                oA = 1073741823;
                break;
              case 4:
                oA = 1e4;
                break;
              default:
                oA = 5e3;
            }
            return (
              (oA = P + oA),
              (b = {
                id: d++,
                callback: N,
                priorityLevel: b,
                startTime: P,
                expirationTime: oA,
                sortIndex: -1,
              }),
              P > sA
                ? ((b.sortIndex = P),
                  n(w, b),
                  i(g) === null &&
                    b === i(w) &&
                    (R ? (X(V), (V = -1)) : (R = !0), JA(J, P - sA)))
                : ((b.sortIndex = oA),
                  n(g, b),
                  I || L || ((I = !0), M || ((M = !0), HA()))),
              b
            );
          }),
          (l.unstable_shouldYield = FA),
          (l.unstable_wrapCallback = function (b) {
            var N = y;
            return function () {
              var P = y;
              y = N;
              try {
                return b.apply(this, arguments);
              } finally {
                y = P;
              }
            };
          });
      })(Sc)),
    Sc
  );
}
var LQ;
function UU() {
  return LQ || ((LQ = 1), (pc.exports = CU())), pc.exports;
}
var bc = { exports: {} },
  ce = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var MQ;
function dU() {
  if (MQ) return ce;
  MQ = 1;
  var l = dB();
  function n(g) {
    var w = "https://react.dev/errors/" + g;
    if (1 < arguments.length) {
      w += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var d = 2; d < arguments.length; d++)
        w += "&args[]=" + encodeURIComponent(arguments[d]);
    }
    return (
      "Minified React error #" +
      g +
      "; visit " +
      w +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function i() {}
  var r = {
      d: {
        f: i,
        r: function () {
          throw Error(n(522));
        },
        D: i,
        C: i,
        L: i,
        m: i,
        X: i,
        S: i,
        M: i,
      },
      p: 0,
      findDOMNode: null,
    },
    c = Symbol.for("react.portal");
  function B(g, w, d) {
    var U =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: U == null ? null : "" + U,
      children: g,
      containerInfo: w,
      implementation: d,
    };
  }
  var o = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function h(g, w) {
    if (g === "font") return "";
    if (typeof w == "string") return w === "use-credentials" ? w : "";
  }
  return (
    (ce.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r),
    (ce.createPortal = function (g, w) {
      var d =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!w || (w.nodeType !== 1 && w.nodeType !== 9 && w.nodeType !== 11))
        throw Error(n(299));
      return B(g, w, null, d);
    }),
    (ce.flushSync = function (g) {
      var w = o.T,
        d = r.p;
      try {
        if (((o.T = null), (r.p = 2), g)) return g();
      } finally {
        (o.T = w), (r.p = d), r.d.f();
      }
    }),
    (ce.preconnect = function (g, w) {
      typeof g == "string" &&
        (w
          ? ((w = w.crossOrigin),
            (w =
              typeof w == "string"
                ? w === "use-credentials"
                  ? w
                  : ""
                : void 0))
          : (w = null),
        r.d.C(g, w));
    }),
    (ce.prefetchDNS = function (g) {
      typeof g == "string" && r.d.D(g);
    }),
    (ce.preinit = function (g, w) {
      if (typeof g == "string" && w && typeof w.as == "string") {
        var d = w.as,
          U = h(d, w.crossOrigin),
          y = typeof w.integrity == "string" ? w.integrity : void 0,
          L = typeof w.fetchPriority == "string" ? w.fetchPriority : void 0;
        d === "style"
          ? r.d.S(g, typeof w.precedence == "string" ? w.precedence : void 0, {
              crossOrigin: U,
              integrity: y,
              fetchPriority: L,
            })
          : d === "script" &&
            r.d.X(g, {
              crossOrigin: U,
              integrity: y,
              fetchPriority: L,
              nonce: typeof w.nonce == "string" ? w.nonce : void 0,
            });
      }
    }),
    (ce.preinitModule = function (g, w) {
      if (typeof g == "string")
        if (typeof w == "object" && w !== null) {
          if (w.as == null || w.as === "script") {
            var d = h(w.as, w.crossOrigin);
            r.d.M(g, {
              crossOrigin: d,
              integrity: typeof w.integrity == "string" ? w.integrity : void 0,
              nonce: typeof w.nonce == "string" ? w.nonce : void 0,
            });
          }
        } else w == null && r.d.M(g);
    }),
    (ce.preload = function (g, w) {
      if (
        typeof g == "string" &&
        typeof w == "object" &&
        w !== null &&
        typeof w.as == "string"
      ) {
        var d = w.as,
          U = h(d, w.crossOrigin);
        r.d.L(g, d, {
          crossOrigin: U,
          integrity: typeof w.integrity == "string" ? w.integrity : void 0,
          nonce: typeof w.nonce == "string" ? w.nonce : void 0,
          type: typeof w.type == "string" ? w.type : void 0,
          fetchPriority:
            typeof w.fetchPriority == "string" ? w.fetchPriority : void 0,
          referrerPolicy:
            typeof w.referrerPolicy == "string" ? w.referrerPolicy : void 0,
          imageSrcSet:
            typeof w.imageSrcSet == "string" ? w.imageSrcSet : void 0,
          imageSizes: typeof w.imageSizes == "string" ? w.imageSizes : void 0,
          media: typeof w.media == "string" ? w.media : void 0,
        });
      }
    }),
    (ce.preloadModule = function (g, w) {
      if (typeof g == "string")
        if (w) {
          var d = h(w.as, w.crossOrigin);
          r.d.m(g, {
            as: typeof w.as == "string" && w.as !== "script" ? w.as : void 0,
            crossOrigin: d,
            integrity: typeof w.integrity == "string" ? w.integrity : void 0,
          });
        } else r.d.m(g);
    }),
    (ce.requestFormReset = function (g) {
      r.d.r(g);
    }),
    (ce.unstable_batchedUpdates = function (g, w) {
      return g(w);
    }),
    (ce.useFormState = function (g, w, d) {
      return o.H.useFormState(g, w, d);
    }),
    (ce.useFormStatus = function () {
      return o.H.useHostTransitionStatus();
    }),
    (ce.version = "19.2.4"),
    ce
  );
}
var RQ;
function vU() {
  if (RQ) return bc.exports;
  RQ = 1;
  function l() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (n) {
        console.error(n);
      }
  }
  return l(), (bc.exports = dU()), bc.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var NQ;
function FU() {
  if (NQ) return Hl;
  NQ = 1;
  var l = UU(),
    n = dB(),
    i = vU();
  function r(A) {
    var e = "https://react.dev/errors/" + A;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var t = 2; t < arguments.length; t++)
        e += "&args[]=" + encodeURIComponent(arguments[t]);
    }
    return (
      "Minified React error #" +
      A +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function c(A) {
    return !(!A || (A.nodeType !== 1 && A.nodeType !== 9 && A.nodeType !== 11));
  }
  function B(A) {
    var e = A,
      t = A;
    if (A.alternate) for (; e.return; ) e = e.return;
    else {
      A = e;
      do (e = A), (e.flags & 4098) !== 0 && (t = e.return), (A = e.return);
      while (A);
    }
    return e.tag === 3 ? t : null;
  }
  function o(A) {
    if (A.tag === 13) {
      var e = A.memoizedState;
      if (
        (e === null && ((A = A.alternate), A !== null && (e = A.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function h(A) {
    if (A.tag === 31) {
      var e = A.memoizedState;
      if (
        (e === null && ((A = A.alternate), A !== null && (e = A.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function g(A) {
    if (B(A) !== A) throw Error(r(188));
  }
  function w(A) {
    var e = A.alternate;
    if (!e) {
      if (((e = B(A)), e === null)) throw Error(r(188));
      return e !== A ? null : A;
    }
    for (var t = A, a = e; ; ) {
      var u = t.return;
      if (u === null) break;
      var s = u.alternate;
      if (s === null) {
        if (((a = u.return), a !== null)) {
          t = a;
          continue;
        }
        break;
      }
      if (u.child === s.child) {
        for (s = u.child; s; ) {
          if (s === t) return g(u), A;
          if (s === a) return g(u), e;
          s = s.sibling;
        }
        throw Error(r(188));
      }
      if (t.return !== a.return) (t = u), (a = s);
      else {
        for (var f = !1, Q = u.child; Q; ) {
          if (Q === t) {
            (f = !0), (t = u), (a = s);
            break;
          }
          if (Q === a) {
            (f = !0), (a = u), (t = s);
            break;
          }
          Q = Q.sibling;
        }
        if (!f) {
          for (Q = s.child; Q; ) {
            if (Q === t) {
              (f = !0), (t = s), (a = u);
              break;
            }
            if (Q === a) {
              (f = !0), (a = s), (t = u);
              break;
            }
            Q = Q.sibling;
          }
          if (!f) throw Error(r(189));
        }
      }
      if (t.alternate !== a) throw Error(r(190));
    }
    if (t.tag !== 3) throw Error(r(188));
    return t.stateNode.current === t ? A : e;
  }
  function d(A) {
    var e = A.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return A;
    for (A = A.child; A !== null; ) {
      if (((e = d(A)), e !== null)) return e;
      A = A.sibling;
    }
    return null;
  }
  var U = Object.assign,
    y = Symbol.for("react.element"),
    L = Symbol.for("react.transitional.element"),
    I = Symbol.for("react.portal"),
    R = Symbol.for("react.fragment"),
    AA = Symbol.for("react.strict_mode"),
    _ = Symbol.for("react.profiler"),
    X = Symbol.for("react.consumer"),
    aA = Symbol.for("react.context"),
    z = Symbol.for("react.forward_ref"),
    J = Symbol.for("react.suspense"),
    M = Symbol.for("react.suspense_list"),
    V = Symbol.for("react.memo"),
    eA = Symbol.for("react.lazy"),
    W = Symbol.for("react.activity"),
    FA = Symbol.for("react.memo_cache_sentinel"),
    xA = Symbol.iterator;
  function HA(A) {
    return A === null || typeof A != "object"
      ? null
      : ((A = (xA && A[xA]) || A["@@iterator"]),
        typeof A == "function" ? A : null);
  }
  var fA = Symbol.for("react.client.reference");
  function KA(A) {
    if (A == null) return null;
    if (typeof A == "function")
      return A.$$typeof === fA ? null : A.displayName || A.name || null;
    if (typeof A == "string") return A;
    switch (A) {
      case R:
        return "Fragment";
      case _:
        return "Profiler";
      case AA:
        return "StrictMode";
      case J:
        return "Suspense";
      case M:
        return "SuspenseList";
      case W:
        return "Activity";
    }
    if (typeof A == "object")
      switch (A.$$typeof) {
        case I:
          return "Portal";
        case aA:
          return A.displayName || "Context";
        case X:
          return (A._context.displayName || "Context") + ".Consumer";
        case z:
          var e = A.render;
          return (
            (A = A.displayName),
            A ||
              ((A = e.displayName || e.name || ""),
              (A = A !== "" ? "ForwardRef(" + A + ")" : "ForwardRef")),
            A
          );
        case V:
          return (
            (e = A.displayName || null), e !== null ? e : KA(A.type) || "Memo"
          );
        case eA:
          (e = A._payload), (A = A._init);
          try {
            return KA(A(e));
          } catch {}
      }
    return null;
  }
  var JA = Array.isArray,
    b = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    N = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    P = { pending: !1, data: null, method: null, action: null },
    sA = [],
    oA = -1;
  function v(A) {
    return { current: A };
  }
  function x(A) {
    0 > oA || ((A.current = sA[oA]), (sA[oA] = null), oA--);
  }
  function G(A, e) {
    oA++, (sA[oA] = A.current), (A.current = e);
  }
  var Z = v(null),
    tA = v(null),
    lA = v(null),
    gA = v(null);
  function oe(A, e) {
    switch ((G(lA, e), G(tA, A), G(Z, null), e.nodeType)) {
      case 9:
      case 11:
        A = (A = e.documentElement) && (A = A.namespaceURI) ? AQ(A) : 0;
        break;
      default:
        if (((A = e.tagName), (e = e.namespaceURI)))
          (e = AQ(e)), (A = eQ(e, A));
        else
          switch (A) {
            case "svg":
              A = 1;
              break;
            case "math":
              A = 2;
              break;
            default:
              A = 0;
          }
    }
    x(Z), G(Z, A);
  }
  function _A() {
    x(Z), x(tA), x(lA);
  }
  function Kn(A) {
    A.memoizedState !== null && G(gA, A);
    var e = Z.current,
      t = eQ(e, A.type);
    e !== t && (G(tA, A), G(Z, t));
  }
  function ql(A) {
    tA.current === A && (x(Z), x(tA)),
      gA.current === A && (x(gA), (vl._currentValue = P));
  }
  var ru, SB;
  function Ba(A) {
    if (ru === void 0)
      try {
        throw Error();
      } catch (t) {
        var e = t.stack.trim().match(/\n( *(at )?)/);
        (ru = (e && e[1]) || ""),
          (SB =
            -1 <
            t.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < t.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      ru +
      A +
      SB
    );
  }
  var iu = !1;
  function uu(A, e) {
    if (!A || iu) return "";
    iu = !0;
    var t = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var D = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(D.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(D, []);
                } catch (S) {
                  var p = S;
                }
                Reflect.construct(A, [], D);
              } else {
                try {
                  D.call();
                } catch (S) {
                  p = S;
                }
                A.call(D.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (S) {
                p = S;
              }
              (D = A()) &&
                typeof D.catch == "function" &&
                D.catch(function () {});
            }
          } catch (S) {
            if (S && p && typeof S.stack == "string") return [S.stack, p.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      u &&
        u.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var s = a.DetermineComponentFrameRoot(),
        f = s[0],
        Q = s[1];
      if (f && Q) {
        var C = f.split(`
`),
          H = Q.split(`
`);
        for (
          u = a = 0;
          a < C.length && !C[a].includes("DetermineComponentFrameRoot");

        )
          a++;
        for (; u < H.length && !H[u].includes("DetermineComponentFrameRoot"); )
          u++;
        if (a === C.length || u === H.length)
          for (
            a = C.length - 1, u = H.length - 1;
            1 <= a && 0 <= u && C[a] !== H[u];

          )
            u--;
        for (; 1 <= a && 0 <= u; a--, u--)
          if (C[a] !== H[u]) {
            if (a !== 1 || u !== 1)
              do
                if ((a--, u--, 0 > u || C[a] !== H[u])) {
                  var T =
                    `
` + C[a].replace(" at new ", " at ");
                  return (
                    A.displayName &&
                      T.includes("<anonymous>") &&
                      (T = T.replace("<anonymous>", A.displayName)),
                    T
                  );
                }
              while (1 <= a && 0 <= u);
            break;
          }
      }
    } finally {
      (iu = !1), (Error.prepareStackTrace = t);
    }
    return (t = A ? A.displayName || A.name : "") ? Ba(t) : "";
  }
  function Y0(A, e) {
    switch (A.tag) {
      case 26:
      case 27:
      case 5:
        return Ba(A.type);
      case 16:
        return Ba("Lazy");
      case 13:
        return A.child !== e && e !== null
          ? Ba("Suspense Fallback")
          : Ba("Suspense");
      case 19:
        return Ba("SuspenseList");
      case 0:
      case 15:
        return uu(A.type, !1);
      case 11:
        return uu(A.type.render, !1);
      case 1:
        return uu(A.type, !0);
      case 31:
        return Ba("Activity");
      default:
        return "";
    }
  }
  function bB(A) {
    try {
      var e = "",
        t = null;
      do (e += Y0(A, t)), (t = A), (A = A.return);
      while (A);
      return e;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  var su = Object.prototype.hasOwnProperty,
    cu = l.unstable_scheduleCallback,
    Bu = l.unstable_cancelCallback,
    J0 = l.unstable_shouldYield,
    Z0 = l.unstable_requestPaint,
    ye = l.unstable_now,
    j0 = l.unstable_getCurrentPriorityLevel,
    TB = l.unstable_ImmediatePriority,
    xB = l.unstable_UserBlockingPriority,
    kl = l.unstable_NormalPriority,
    q0 = l.unstable_LowPriority,
    KB = l.unstable_IdlePriority,
    k0 = l.log,
    W0 = l.unstable_setDisableYieldValue,
    Dn = null,
    me = null;
  function xt(A) {
    if (
      (typeof k0 == "function" && W0(A),
      me && typeof me.setStrictMode == "function")
    )
      try {
        me.setStrictMode(Dn, A);
      } catch {}
  }
  var He = Math.clz32 ? Math.clz32 : Aw,
    P0 = Math.log,
    $0 = Math.LN2;
  function Aw(A) {
    return (A >>>= 0), A === 0 ? 32 : (31 - ((P0(A) / $0) | 0)) | 0;
  }
  var Wl = 256,
    Pl = 262144,
    $l = 4194304;
  function fa(A) {
    var e = A & 42;
    if (e !== 0) return e;
    switch (A & -A) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return A & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return A & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return A & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return A;
    }
  }
  function Ar(A, e, t) {
    var a = A.pendingLanes;
    if (a === 0) return 0;
    var u = 0,
      s = A.suspendedLanes,
      f = A.pingedLanes;
    A = A.warmLanes;
    var Q = a & 134217727;
    return (
      Q !== 0
        ? ((a = Q & ~s),
          a !== 0
            ? (u = fa(a))
            : ((f &= Q),
              f !== 0
                ? (u = fa(f))
                : t || ((t = Q & ~A), t !== 0 && (u = fa(t)))))
        : ((Q = a & ~s),
          Q !== 0
            ? (u = fa(Q))
            : f !== 0
            ? (u = fa(f))
            : t || ((t = a & ~A), t !== 0 && (u = fa(t)))),
      u === 0
        ? 0
        : e !== 0 &&
          e !== u &&
          (e & s) === 0 &&
          ((s = u & -u),
          (t = e & -e),
          s >= t || (s === 32 && (t & 4194048) !== 0))
        ? e
        : u
    );
  }
  function On(A, e) {
    return (A.pendingLanes & ~(A.suspendedLanes & ~A.pingedLanes) & e) === 0;
  }
  function ew(A, e) {
    switch (A) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function DB() {
    var A = $l;
    return ($l <<= 1), ($l & 62914560) === 0 && ($l = 4194304), A;
  }
  function fu(A) {
    for (var e = [], t = 0; 31 > t; t++) e.push(A);
    return e;
  }
  function In(A, e) {
    (A.pendingLanes |= e),
      e !== 268435456 &&
        ((A.suspendedLanes = 0), (A.pingedLanes = 0), (A.warmLanes = 0));
  }
  function tw(A, e, t, a, u, s) {
    var f = A.pendingLanes;
    (A.pendingLanes = t),
      (A.suspendedLanes = 0),
      (A.pingedLanes = 0),
      (A.warmLanes = 0),
      (A.expiredLanes &= t),
      (A.entangledLanes &= t),
      (A.errorRecoveryDisabledLanes &= t),
      (A.shellSuspendCounter = 0);
    var Q = A.entanglements,
      C = A.expirationTimes,
      H = A.hiddenUpdates;
    for (t = f & ~t; 0 < t; ) {
      var T = 31 - He(t),
        D = 1 << T;
      (Q[T] = 0), (C[T] = -1);
      var p = H[T];
      if (p !== null)
        for (H[T] = null, T = 0; T < p.length; T++) {
          var S = p[T];
          S !== null && (S.lane &= -536870913);
        }
      t &= ~D;
    }
    a !== 0 && OB(A, a, 0),
      s !== 0 && u === 0 && A.tag !== 0 && (A.suspendedLanes |= s & ~(f & ~e));
  }
  function OB(A, e, t) {
    (A.pendingLanes |= e), (A.suspendedLanes &= ~e);
    var a = 31 - He(e);
    (A.entangledLanes |= e),
      (A.entanglements[a] = A.entanglements[a] | 1073741824 | (t & 261930));
  }
  function IB(A, e) {
    var t = (A.entangledLanes |= e);
    for (A = A.entanglements; t; ) {
      var a = 31 - He(t),
        u = 1 << a;
      (u & e) | (A[a] & e) && (A[a] |= e), (t &= ~u);
    }
  }
  function LB(A, e) {
    var t = e & -e;
    return (
      (t = (t & 42) !== 0 ? 1 : ou(t)),
      (t & (A.suspendedLanes | e)) !== 0 ? 0 : t
    );
  }
  function ou(A) {
    switch (A) {
      case 2:
        A = 1;
        break;
      case 8:
        A = 4;
        break;
      case 32:
        A = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        A = 128;
        break;
      case 268435456:
        A = 134217728;
        break;
      default:
        A = 0;
    }
    return A;
  }
  function gu(A) {
    return (
      (A &= -A),
      2 < A ? (8 < A ? ((A & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function MB() {
    var A = N.p;
    return A !== 0 ? A : ((A = window.event), A === void 0 ? 32 : yQ(A.type));
  }
  function RB(A, e) {
    var t = N.p;
    try {
      return (N.p = A), e();
    } finally {
      N.p = t;
    }
  }
  var Kt = Math.random().toString(36).slice(2),
    ae = "__reactFiber$" + Kt,
    he = "__reactProps$" + Kt,
    Ia = "__reactContainer$" + Kt,
    Qu = "__reactEvents$" + Kt,
    aw = "__reactListeners$" + Kt,
    nw = "__reactHandles$" + Kt,
    NB = "__reactResources$" + Kt,
    Ln = "__reactMarker$" + Kt;
  function hu(A) {
    delete A[ae], delete A[he], delete A[Qu], delete A[aw], delete A[nw];
  }
  function La(A) {
    var e = A[ae];
    if (e) return e;
    for (var t = A.parentNode; t; ) {
      if ((e = t[Ia] || t[ae])) {
        if (
          ((t = e.alternate),
          e.child !== null || (t !== null && t.child !== null))
        )
          for (A = uQ(A); A !== null; ) {
            if ((t = A[ae])) return t;
            A = uQ(A);
          }
        return e;
      }
      (A = t), (t = A.parentNode);
    }
    return null;
  }
  function Ma(A) {
    if ((A = A[ae] || A[Ia])) {
      var e = A.tag;
      if (
        e === 5 ||
        e === 6 ||
        e === 13 ||
        e === 31 ||
        e === 26 ||
        e === 27 ||
        e === 3
      )
        return A;
    }
    return null;
  }
  function Mn(A) {
    var e = A.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return A.stateNode;
    throw Error(r(33));
  }
  function Ra(A) {
    var e = A[NB];
    return (
      e ||
        (e = A[NB] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function Ae(A) {
    A[Ln] = !0;
  }
  var GB = new Set(),
    _B = {};
  function oa(A, e) {
    Na(A, e), Na(A + "Capture", e);
  }
  function Na(A, e) {
    for (_B[A] = e, A = 0; A < e.length; A++) GB.add(e[A]);
  }
  var lw = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    VB = {},
    XB = {};
  function rw(A) {
    return su.call(XB, A)
      ? !0
      : su.call(VB, A)
      ? !1
      : lw.test(A)
      ? (XB[A] = !0)
      : ((VB[A] = !0), !1);
  }
  function er(A, e, t) {
    if (rw(e))
      if (t === null) A.removeAttribute(e);
      else {
        switch (typeof t) {
          case "undefined":
          case "function":
          case "symbol":
            A.removeAttribute(e);
            return;
          case "boolean":
            var a = e.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              A.removeAttribute(e);
              return;
            }
        }
        A.setAttribute(e, "" + t);
      }
  }
  function tr(A, e, t) {
    if (t === null) A.removeAttribute(e);
    else {
      switch (typeof t) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          A.removeAttribute(e);
          return;
      }
      A.setAttribute(e, "" + t);
    }
  }
  function ut(A, e, t, a) {
    if (a === null) A.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          A.removeAttribute(t);
          return;
      }
      A.setAttributeNS(e, t, "" + a);
    }
  }
  function Ie(A) {
    switch (typeof A) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return A;
      case "object":
        return A;
      default:
        return "";
    }
  }
  function zB(A) {
    var e = A.type;
    return (
      (A = A.nodeName) &&
      A.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function iw(A, e, t) {
    var a = Object.getOwnPropertyDescriptor(A.constructor.prototype, e);
    if (
      !A.hasOwnProperty(e) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var u = a.get,
        s = a.set;
      return (
        Object.defineProperty(A, e, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (f) {
            (t = "" + f), s.call(this, f);
          },
        }),
        Object.defineProperty(A, e, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return t;
          },
          setValue: function (f) {
            t = "" + f;
          },
          stopTracking: function () {
            (A._valueTracker = null), delete A[e];
          },
        }
      );
    }
  }
  function wu(A) {
    if (!A._valueTracker) {
      var e = zB(A) ? "checked" : "value";
      A._valueTracker = iw(A, e, "" + A[e]);
    }
  }
  function YB(A) {
    if (!A) return !1;
    var e = A._valueTracker;
    if (!e) return !0;
    var t = e.getValue(),
      a = "";
    return (
      A && (a = zB(A) ? (A.checked ? "true" : "false") : A.value),
      (A = a),
      A !== t ? (e.setValue(A), !0) : !1
    );
  }
  function ar(A) {
    if (
      ((A = A || (typeof document < "u" ? document : void 0)), typeof A > "u")
    )
      return null;
    try {
      return A.activeElement || A.body;
    } catch {
      return A.body;
    }
  }
  var uw = /[\n"\\]/g;
  function Le(A) {
    return A.replace(uw, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function Cu(A, e, t, a, u, s, f, Q) {
    (A.name = ""),
      f != null &&
      typeof f != "function" &&
      typeof f != "symbol" &&
      typeof f != "boolean"
        ? (A.type = f)
        : A.removeAttribute("type"),
      e != null
        ? f === "number"
          ? ((e === 0 && A.value === "") || A.value != e) &&
            (A.value = "" + Ie(e))
          : A.value !== "" + Ie(e) && (A.value = "" + Ie(e))
        : (f !== "submit" && f !== "reset") || A.removeAttribute("value"),
      e != null
        ? Uu(A, f, Ie(e))
        : t != null
        ? Uu(A, f, Ie(t))
        : a != null && A.removeAttribute("value"),
      u == null && s != null && (A.defaultChecked = !!s),
      u != null &&
        (A.checked = u && typeof u != "function" && typeof u != "symbol"),
      Q != null &&
      typeof Q != "function" &&
      typeof Q != "symbol" &&
      typeof Q != "boolean"
        ? (A.name = "" + Ie(Q))
        : A.removeAttribute("name");
  }
  function JB(A, e, t, a, u, s, f, Q) {
    if (
      (s != null &&
        typeof s != "function" &&
        typeof s != "symbol" &&
        typeof s != "boolean" &&
        (A.type = s),
      e != null || t != null)
    ) {
      if (!((s !== "submit" && s !== "reset") || e != null)) {
        wu(A);
        return;
      }
      (t = t != null ? "" + Ie(t) : ""),
        (e = e != null ? "" + Ie(e) : t),
        Q || e === A.value || (A.value = e),
        (A.defaultValue = e);
    }
    (a = a ?? u),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (A.checked = Q ? A.checked : !!a),
      (A.defaultChecked = !!a),
      f != null &&
        typeof f != "function" &&
        typeof f != "symbol" &&
        typeof f != "boolean" &&
        (A.name = f),
      wu(A);
  }
  function Uu(A, e, t) {
    (e === "number" && ar(A.ownerDocument) === A) ||
      A.defaultValue === "" + t ||
      (A.defaultValue = "" + t);
  }
  function Ga(A, e, t, a) {
    if (((A = A.options), e)) {
      e = {};
      for (var u = 0; u < t.length; u++) e["$" + t[u]] = !0;
      for (t = 0; t < A.length; t++)
        (u = e.hasOwnProperty("$" + A[t].value)),
          A[t].selected !== u && (A[t].selected = u),
          u && a && (A[t].defaultSelected = !0);
    } else {
      for (t = "" + Ie(t), e = null, u = 0; u < A.length; u++) {
        if (A[u].value === t) {
          (A[u].selected = !0), a && (A[u].defaultSelected = !0);
          return;
        }
        e !== null || A[u].disabled || (e = A[u]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function ZB(A, e, t) {
    if (
      e != null &&
      ((e = "" + Ie(e)), e !== A.value && (A.value = e), t == null)
    ) {
      A.defaultValue !== e && (A.defaultValue = e);
      return;
    }
    A.defaultValue = t != null ? "" + Ie(t) : "";
  }
  function jB(A, e, t, a) {
    if (e == null) {
      if (a != null) {
        if (t != null) throw Error(r(92));
        if (JA(a)) {
          if (1 < a.length) throw Error(r(93));
          a = a[0];
        }
        t = a;
      }
      t == null && (t = ""), (e = t);
    }
    (t = Ie(e)),
      (A.defaultValue = t),
      (a = A.textContent),
      a === t && a !== "" && a !== null && (A.value = a),
      wu(A);
  }
  function _a(A, e) {
    if (e) {
      var t = A.firstChild;
      if (t && t === A.lastChild && t.nodeType === 3) {
        t.nodeValue = e;
        return;
      }
    }
    A.textContent = e;
  }
  var sw = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function qB(A, e, t) {
    var a = e.indexOf("--") === 0;
    t == null || typeof t == "boolean" || t === ""
      ? a
        ? A.setProperty(e, "")
        : e === "float"
        ? (A.cssFloat = "")
        : (A[e] = "")
      : a
      ? A.setProperty(e, t)
      : typeof t != "number" || t === 0 || sw.has(e)
      ? e === "float"
        ? (A.cssFloat = t)
        : (A[e] = ("" + t).trim())
      : (A[e] = t + "px");
  }
  function kB(A, e, t) {
    if (e != null && typeof e != "object") throw Error(r(62));
    if (((A = A.style), t != null)) {
      for (var a in t)
        !t.hasOwnProperty(a) ||
          (e != null && e.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? A.setProperty(a, "")
            : a === "float"
            ? (A.cssFloat = "")
            : (A[a] = ""));
      for (var u in e)
        (a = e[u]), e.hasOwnProperty(u) && t[u] !== a && qB(A, u, a);
    } else for (var s in e) e.hasOwnProperty(s) && qB(A, s, e[s]);
  }
  function du(A) {
    if (A.indexOf("-") === -1) return !1;
    switch (A) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var cw = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Bw =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function nr(A) {
    return Bw.test("" + A)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : A;
  }
  function st() {}
  var vu = null;
  function Fu(A) {
    return (
      (A = A.target || A.srcElement || window),
      A.correspondingUseElement && (A = A.correspondingUseElement),
      A.nodeType === 3 ? A.parentNode : A
    );
  }
  var Va = null,
    Xa = null;
  function WB(A) {
    var e = Ma(A);
    if (e && (A = e.stateNode)) {
      var t = A[he] || null;
      A: switch (((A = e.stateNode), e.type)) {
        case "input":
          if (
            (Cu(
              A,
              t.value,
              t.defaultValue,
              t.defaultValue,
              t.checked,
              t.defaultChecked,
              t.type,
              t.name
            ),
            (e = t.name),
            t.type === "radio" && e != null)
          ) {
            for (t = A; t.parentNode; ) t = t.parentNode;
            for (
              t = t.querySelectorAll(
                'input[name="' + Le("" + e) + '"][type="radio"]'
              ),
                e = 0;
              e < t.length;
              e++
            ) {
              var a = t[e];
              if (a !== A && a.form === A.form) {
                var u = a[he] || null;
                if (!u) throw Error(r(90));
                Cu(
                  a,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name
                );
              }
            }
            for (e = 0; e < t.length; e++)
              (a = t[e]), a.form === A.form && YB(a);
          }
          break A;
        case "textarea":
          ZB(A, t.value, t.defaultValue);
          break A;
        case "select":
          (e = t.value), e != null && Ga(A, !!t.multiple, e, !1);
      }
    }
  }
  var Eu = !1;
  function PB(A, e, t) {
    if (Eu) return A(e, t);
    Eu = !0;
    try {
      var a = A(e);
      return a;
    } finally {
      if (
        ((Eu = !1),
        (Va !== null || Xa !== null) &&
          (Yr(), Va && ((e = Va), (A = Xa), (Xa = Va = null), WB(e), A)))
      )
        for (e = 0; e < A.length; e++) WB(A[e]);
    }
  }
  function Rn(A, e) {
    var t = A.stateNode;
    if (t === null) return null;
    var a = t[he] || null;
    if (a === null) return null;
    t = a[e];
    A: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) ||
          ((A = A.type),
          (a = !(
            A === "button" ||
            A === "input" ||
            A === "select" ||
            A === "textarea"
          ))),
          (A = !a);
        break A;
      default:
        A = !1;
    }
    if (A) return null;
    if (t && typeof t != "function") throw Error(r(231, e, typeof t));
    return t;
  }
  var ct = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    yu = !1;
  if (ct)
    try {
      var Nn = {};
      Object.defineProperty(Nn, "passive", {
        get: function () {
          yu = !0;
        },
      }),
        window.addEventListener("test", Nn, Nn),
        window.removeEventListener("test", Nn, Nn);
    } catch {
      yu = !1;
    }
  var Dt = null,
    mu = null,
    lr = null;
  function $B() {
    if (lr) return lr;
    var A,
      e = mu,
      t = e.length,
      a,
      u = "value" in Dt ? Dt.value : Dt.textContent,
      s = u.length;
    for (A = 0; A < t && e[A] === u[A]; A++);
    var f = t - A;
    for (a = 1; a <= f && e[t - a] === u[s - a]; a++);
    return (lr = u.slice(A, 1 < a ? 1 - a : void 0));
  }
  function rr(A) {
    var e = A.keyCode;
    return (
      "charCode" in A
        ? ((A = A.charCode), A === 0 && e === 13 && (A = 13))
        : (A = e),
      A === 10 && (A = 13),
      32 <= A || A === 13 ? A : 0
    );
  }
  function ir() {
    return !0;
  }
  function Af() {
    return !1;
  }
  function we(A) {
    function e(t, a, u, s, f) {
      (this._reactName = t),
        (this._targetInst = u),
        (this.type = a),
        (this.nativeEvent = s),
        (this.target = f),
        (this.currentTarget = null);
      for (var Q in A)
        A.hasOwnProperty(Q) && ((t = A[Q]), (this[Q] = t ? t(s) : s[Q]));
      return (
        (this.isDefaultPrevented = (
          s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
        )
          ? ir
          : Af),
        (this.isPropagationStopped = Af),
        this
      );
    }
    return (
      U(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var t = this.nativeEvent;
          t &&
            (t.preventDefault
              ? t.preventDefault()
              : typeof t.returnValue != "unknown" && (t.returnValue = !1),
            (this.isDefaultPrevented = ir));
        },
        stopPropagation: function () {
          var t = this.nativeEvent;
          t &&
            (t.stopPropagation
              ? t.stopPropagation()
              : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0),
            (this.isPropagationStopped = ir));
        },
        persist: function () {},
        isPersistent: ir,
      }),
      e
    );
  }
  var ga = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (A) {
        return A.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ur = we(ga),
    Gn = U({}, ga, { view: 0, detail: 0 }),
    fw = we(Gn),
    Hu,
    pu,
    _n,
    sr = U({}, Gn, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: bu,
      button: 0,
      buttons: 0,
      relatedTarget: function (A) {
        return A.relatedTarget === void 0
          ? A.fromElement === A.srcElement
            ? A.toElement
            : A.fromElement
          : A.relatedTarget;
      },
      movementX: function (A) {
        return "movementX" in A
          ? A.movementX
          : (A !== _n &&
              (_n && A.type === "mousemove"
                ? ((Hu = A.screenX - _n.screenX), (pu = A.screenY - _n.screenY))
                : (pu = Hu = 0),
              (_n = A)),
            Hu);
      },
      movementY: function (A) {
        return "movementY" in A ? A.movementY : pu;
      },
    }),
    ef = we(sr),
    ow = U({}, sr, { dataTransfer: 0 }),
    gw = we(ow),
    Qw = U({}, Gn, { relatedTarget: 0 }),
    Su = we(Qw),
    hw = U({}, ga, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    ww = we(hw),
    Cw = U({}, ga, {
      clipboardData: function (A) {
        return "clipboardData" in A ? A.clipboardData : window.clipboardData;
      },
    }),
    Uw = we(Cw),
    dw = U({}, ga, { data: 0 }),
    tf = we(dw),
    vw = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Fw = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Ew = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function yw(A) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(A)
      : (A = Ew[A])
      ? !!e[A]
      : !1;
  }
  function bu() {
    return yw;
  }
  var mw = U({}, Gn, {
      key: function (A) {
        if (A.key) {
          var e = vw[A.key] || A.key;
          if (e !== "Unidentified") return e;
        }
        return A.type === "keypress"
          ? ((A = rr(A)), A === 13 ? "Enter" : String.fromCharCode(A))
          : A.type === "keydown" || A.type === "keyup"
          ? Fw[A.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: bu,
      charCode: function (A) {
        return A.type === "keypress" ? rr(A) : 0;
      },
      keyCode: function (A) {
        return A.type === "keydown" || A.type === "keyup" ? A.keyCode : 0;
      },
      which: function (A) {
        return A.type === "keypress"
          ? rr(A)
          : A.type === "keydown" || A.type === "keyup"
          ? A.keyCode
          : 0;
      },
    }),
    Hw = we(mw),
    pw = U({}, sr, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    af = we(pw),
    Sw = U({}, Gn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: bu,
    }),
    bw = we(Sw),
    Tw = U({}, ga, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    xw = we(Tw),
    Kw = U({}, sr, {
      deltaX: function (A) {
        return "deltaX" in A
          ? A.deltaX
          : "wheelDeltaX" in A
          ? -A.wheelDeltaX
          : 0;
      },
      deltaY: function (A) {
        return "deltaY" in A
          ? A.deltaY
          : "wheelDeltaY" in A
          ? -A.wheelDeltaY
          : "wheelDelta" in A
          ? -A.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Dw = we(Kw),
    Ow = U({}, ga, { newState: 0, oldState: 0 }),
    Iw = we(Ow),
    Lw = [9, 13, 27, 32],
    Tu = ct && "CompositionEvent" in window,
    Vn = null;
  ct && "documentMode" in document && (Vn = document.documentMode);
  var Mw = ct && "TextEvent" in window && !Vn,
    nf = ct && (!Tu || (Vn && 8 < Vn && 11 >= Vn)),
    lf = " ",
    rf = !1;
  function uf(A, e) {
    switch (A) {
      case "keyup":
        return Lw.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function sf(A) {
    return (A = A.detail), typeof A == "object" && "data" in A ? A.data : null;
  }
  var za = !1;
  function Rw(A, e) {
    switch (A) {
      case "compositionend":
        return sf(e);
      case "keypress":
        return e.which !== 32 ? null : ((rf = !0), lf);
      case "textInput":
        return (A = e.data), A === lf && rf ? null : A;
      default:
        return null;
    }
  }
  function Nw(A, e) {
    if (za)
      return A === "compositionend" || (!Tu && uf(A, e))
        ? ((A = $B()), (lr = mu = Dt = null), (za = !1), A)
        : null;
    switch (A) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return nf && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var Gw = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function cf(A) {
    var e = A && A.nodeName && A.nodeName.toLowerCase();
    return e === "input" ? !!Gw[A.type] : e === "textarea";
  }
  function Bf(A, e, t, a) {
    Va ? (Xa ? Xa.push(a) : (Xa = [a])) : (Va = a),
      (e = Pr(e, "onChange")),
      0 < e.length &&
        ((t = new ur("onChange", "change", null, t, a)),
        A.push({ event: t, listeners: e }));
  }
  var Xn = null,
    zn = null;
  function _w(A) {
    jg(A, 0);
  }
  function cr(A) {
    var e = Mn(A);
    if (YB(e)) return A;
  }
  function ff(A, e) {
    if (A === "change") return e;
  }
  var of = !1;
  if (ct) {
    var xu;
    if (ct) {
      var Ku = "oninput" in document;
      if (!Ku) {
        var gf = document.createElement("div");
        gf.setAttribute("oninput", "return;"),
          (Ku = typeof gf.oninput == "function");
      }
      xu = Ku;
    } else xu = !1;
    of = xu && (!document.documentMode || 9 < document.documentMode);
  }
  function Qf() {
    Xn && (Xn.detachEvent("onpropertychange", hf), (zn = Xn = null));
  }
  function hf(A) {
    if (A.propertyName === "value" && cr(zn)) {
      var e = [];
      Bf(e, zn, A, Fu(A)), PB(_w, e);
    }
  }
  function Vw(A, e, t) {
    A === "focusin"
      ? (Qf(), (Xn = e), (zn = t), Xn.attachEvent("onpropertychange", hf))
      : A === "focusout" && Qf();
  }
  function Xw(A) {
    if (A === "selectionchange" || A === "keyup" || A === "keydown")
      return cr(zn);
  }
  function zw(A, e) {
    if (A === "click") return cr(e);
  }
  function Yw(A, e) {
    if (A === "input" || A === "change") return cr(e);
  }
  function Jw(A, e) {
    return (A === e && (A !== 0 || 1 / A === 1 / e)) || (A !== A && e !== e);
  }
  var pe = typeof Object.is == "function" ? Object.is : Jw;
  function Yn(A, e) {
    if (pe(A, e)) return !0;
    if (
      typeof A != "object" ||
      A === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var t = Object.keys(A),
      a = Object.keys(e);
    if (t.length !== a.length) return !1;
    for (a = 0; a < t.length; a++) {
      var u = t[a];
      if (!su.call(e, u) || !pe(A[u], e[u])) return !1;
    }
    return !0;
  }
  function wf(A) {
    for (; A && A.firstChild; ) A = A.firstChild;
    return A;
  }
  function Cf(A, e) {
    var t = wf(A);
    A = 0;
    for (var a; t; ) {
      if (t.nodeType === 3) {
        if (((a = A + t.textContent.length), A <= e && a >= e))
          return { node: t, offset: e - A };
        A = a;
      }
      A: {
        for (; t; ) {
          if (t.nextSibling) {
            t = t.nextSibling;
            break A;
          }
          t = t.parentNode;
        }
        t = void 0;
      }
      t = wf(t);
    }
  }
  function Uf(A, e) {
    return A && e
      ? A === e
        ? !0
        : A && A.nodeType === 3
        ? !1
        : e && e.nodeType === 3
        ? Uf(A, e.parentNode)
        : "contains" in A
        ? A.contains(e)
        : A.compareDocumentPosition
        ? !!(A.compareDocumentPosition(e) & 16)
        : !1
      : !1;
  }
  function df(A) {
    A =
      A != null &&
      A.ownerDocument != null &&
      A.ownerDocument.defaultView != null
        ? A.ownerDocument.defaultView
        : window;
    for (var e = ar(A.document); e instanceof A.HTMLIFrameElement; ) {
      try {
        var t = typeof e.contentWindow.location.href == "string";
      } catch {
        t = !1;
      }
      if (t) A = e.contentWindow;
      else break;
      e = ar(A.document);
    }
    return e;
  }
  function Du(A) {
    var e = A && A.nodeName && A.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (A.type === "text" ||
          A.type === "search" ||
          A.type === "tel" ||
          A.type === "url" ||
          A.type === "password")) ||
        e === "textarea" ||
        A.contentEditable === "true")
    );
  }
  var Zw = ct && "documentMode" in document && 11 >= document.documentMode,
    Ya = null,
    Ou = null,
    Jn = null,
    Iu = !1;
  function vf(A, e, t) {
    var a =
      t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    Iu ||
      Ya == null ||
      Ya !== ar(a) ||
      ((a = Ya),
      "selectionStart" in a && Du(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (Jn && Yn(Jn, a)) ||
        ((Jn = a),
        (a = Pr(Ou, "onSelect")),
        0 < a.length &&
          ((e = new ur("onSelect", "select", null, e, t)),
          A.push({ event: e, listeners: a }),
          (e.target = Ya))));
  }
  function Qa(A, e) {
    var t = {};
    return (
      (t[A.toLowerCase()] = e.toLowerCase()),
      (t["Webkit" + A] = "webkit" + e),
      (t["Moz" + A] = "moz" + e),
      t
    );
  }
  var Ja = {
      animationend: Qa("Animation", "AnimationEnd"),
      animationiteration: Qa("Animation", "AnimationIteration"),
      animationstart: Qa("Animation", "AnimationStart"),
      transitionrun: Qa("Transition", "TransitionRun"),
      transitionstart: Qa("Transition", "TransitionStart"),
      transitioncancel: Qa("Transition", "TransitionCancel"),
      transitionend: Qa("Transition", "TransitionEnd"),
    },
    Lu = {},
    Ff = {};
  ct &&
    ((Ff = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Ja.animationend.animation,
      delete Ja.animationiteration.animation,
      delete Ja.animationstart.animation),
    "TransitionEvent" in window || delete Ja.transitionend.transition);
  function ha(A) {
    if (Lu[A]) return Lu[A];
    if (!Ja[A]) return A;
    var e = Ja[A],
      t;
    for (t in e) if (e.hasOwnProperty(t) && t in Ff) return (Lu[A] = e[t]);
    return A;
  }
  var Ef = ha("animationend"),
    yf = ha("animationiteration"),
    mf = ha("animationstart"),
    jw = ha("transitionrun"),
    qw = ha("transitionstart"),
    kw = ha("transitioncancel"),
    Hf = ha("transitionend"),
    pf = new Map(),
    Mu =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  Mu.push("scrollEnd");
  function ke(A, e) {
    pf.set(A, e), oa(e, [A]);
  }
  var Br =
      typeof reportError == "function"
        ? reportError
        : function (A) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var e = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof A == "object" &&
                  A !== null &&
                  typeof A.message == "string"
                    ? String(A.message)
                    : String(A),
                error: A,
              });
              if (!window.dispatchEvent(e)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", A);
              return;
            }
            console.error(A);
          },
    Me = [],
    Za = 0,
    Ru = 0;
  function fr() {
    for (var A = Za, e = (Ru = Za = 0); e < A; ) {
      var t = Me[e];
      Me[e++] = null;
      var a = Me[e];
      Me[e++] = null;
      var u = Me[e];
      Me[e++] = null;
      var s = Me[e];
      if (((Me[e++] = null), a !== null && u !== null)) {
        var f = a.pending;
        f === null ? (u.next = u) : ((u.next = f.next), (f.next = u)),
          (a.pending = u);
      }
      s !== 0 && Sf(t, u, s);
    }
  }
  function or(A, e, t, a) {
    (Me[Za++] = A),
      (Me[Za++] = e),
      (Me[Za++] = t),
      (Me[Za++] = a),
      (Ru |= a),
      (A.lanes |= a),
      (A = A.alternate),
      A !== null && (A.lanes |= a);
  }
  function Nu(A, e, t, a) {
    return or(A, e, t, a), gr(A);
  }
  function wa(A, e) {
    return or(A, null, null, e), gr(A);
  }
  function Sf(A, e, t) {
    A.lanes |= t;
    var a = A.alternate;
    a !== null && (a.lanes |= t);
    for (var u = !1, s = A.return; s !== null; )
      (s.childLanes |= t),
        (a = s.alternate),
        a !== null && (a.childLanes |= t),
        s.tag === 22 &&
          ((A = s.stateNode), A === null || A._visibility & 1 || (u = !0)),
        (A = s),
        (s = s.return);
    return A.tag === 3
      ? ((s = A.stateNode),
        u &&
          e !== null &&
          ((u = 31 - He(t)),
          (A = s.hiddenUpdates),
          (a = A[u]),
          a === null ? (A[u] = [e]) : a.push(e),
          (e.lane = t | 536870912)),
        s)
      : null;
  }
  function gr(A) {
    if (50 < gl) throw ((gl = 0), (js = null), Error(r(185)));
    for (var e = A.return; e !== null; ) (A = e), (e = A.return);
    return A.tag === 3 ? A.stateNode : null;
  }
  var ja = {};
  function Ww(A, e, t, a) {
    (this.tag = A),
      (this.key = t),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Se(A, e, t, a) {
    return new Ww(A, e, t, a);
  }
  function Gu(A) {
    return (A = A.prototype), !(!A || !A.isReactComponent);
  }
  function Bt(A, e) {
    var t = A.alternate;
    return (
      t === null
        ? ((t = Se(A.tag, e, A.key, A.mode)),
          (t.elementType = A.elementType),
          (t.type = A.type),
          (t.stateNode = A.stateNode),
          (t.alternate = A),
          (A.alternate = t))
        : ((t.pendingProps = e),
          (t.type = A.type),
          (t.flags = 0),
          (t.subtreeFlags = 0),
          (t.deletions = null)),
      (t.flags = A.flags & 65011712),
      (t.childLanes = A.childLanes),
      (t.lanes = A.lanes),
      (t.child = A.child),
      (t.memoizedProps = A.memoizedProps),
      (t.memoizedState = A.memoizedState),
      (t.updateQueue = A.updateQueue),
      (e = A.dependencies),
      (t.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (t.sibling = A.sibling),
      (t.index = A.index),
      (t.ref = A.ref),
      (t.refCleanup = A.refCleanup),
      t
    );
  }
  function bf(A, e) {
    A.flags &= 65011714;
    var t = A.alternate;
    return (
      t === null
        ? ((A.childLanes = 0),
          (A.lanes = e),
          (A.child = null),
          (A.subtreeFlags = 0),
          (A.memoizedProps = null),
          (A.memoizedState = null),
          (A.updateQueue = null),
          (A.dependencies = null),
          (A.stateNode = null))
        : ((A.childLanes = t.childLanes),
          (A.lanes = t.lanes),
          (A.child = t.child),
          (A.subtreeFlags = 0),
          (A.deletions = null),
          (A.memoizedProps = t.memoizedProps),
          (A.memoizedState = t.memoizedState),
          (A.updateQueue = t.updateQueue),
          (A.type = t.type),
          (e = t.dependencies),
          (A.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      A
    );
  }
  function Qr(A, e, t, a, u, s) {
    var f = 0;
    if (((a = A), typeof A == "function")) Gu(A) && (f = 1);
    else if (typeof A == "string")
      f = tU(A, t, Z.current)
        ? 26
        : A === "html" || A === "head" || A === "body"
        ? 27
        : 5;
    else
      A: switch (A) {
        case W:
          return (A = Se(31, t, e, u)), (A.elementType = W), (A.lanes = s), A;
        case R:
          return Ca(t.children, u, s, e);
        case AA:
          (f = 8), (u |= 24);
          break;
        case _:
          return (
            (A = Se(12, t, e, u | 2)), (A.elementType = _), (A.lanes = s), A
          );
        case J:
          return (A = Se(13, t, e, u)), (A.elementType = J), (A.lanes = s), A;
        case M:
          return (A = Se(19, t, e, u)), (A.elementType = M), (A.lanes = s), A;
        default:
          if (typeof A == "object" && A !== null)
            switch (A.$$typeof) {
              case aA:
                f = 10;
                break A;
              case X:
                f = 9;
                break A;
              case z:
                f = 11;
                break A;
              case V:
                f = 14;
                break A;
              case eA:
                (f = 16), (a = null);
                break A;
            }
          (f = 29),
            (t = Error(r(130, A === null ? "null" : typeof A, ""))),
            (a = null);
      }
    return (
      (e = Se(f, t, e, u)), (e.elementType = A), (e.type = a), (e.lanes = s), e
    );
  }
  function Ca(A, e, t, a) {
    return (A = Se(7, A, a, e)), (A.lanes = t), A;
  }
  function _u(A, e, t) {
    return (A = Se(6, A, null, e)), (A.lanes = t), A;
  }
  function Tf(A) {
    var e = Se(18, null, null, 0);
    return (e.stateNode = A), e;
  }
  function Vu(A, e, t) {
    return (
      (e = Se(4, A.children !== null ? A.children : [], A.key, e)),
      (e.lanes = t),
      (e.stateNode = {
        containerInfo: A.containerInfo,
        pendingChildren: null,
        implementation: A.implementation,
      }),
      e
    );
  }
  var xf = new WeakMap();
  function Re(A, e) {
    if (typeof A == "object" && A !== null) {
      var t = xf.get(A);
      return t !== void 0
        ? t
        : ((e = { value: A, source: e, stack: bB(e) }), xf.set(A, e), e);
    }
    return { value: A, source: e, stack: bB(e) };
  }
  var qa = [],
    ka = 0,
    hr = null,
    Zn = 0,
    Ne = [],
    Ge = 0,
    Ot = null,
    et = 1,
    tt = "";
  function ft(A, e) {
    (qa[ka++] = Zn), (qa[ka++] = hr), (hr = A), (Zn = e);
  }
  function Kf(A, e, t) {
    (Ne[Ge++] = et), (Ne[Ge++] = tt), (Ne[Ge++] = Ot), (Ot = A);
    var a = et;
    A = tt;
    var u = 32 - He(a) - 1;
    (a &= ~(1 << u)), (t += 1);
    var s = 32 - He(e) + u;
    if (30 < s) {
      var f = u - (u % 5);
      (s = (a & ((1 << f) - 1)).toString(32)),
        (a >>= f),
        (u -= f),
        (et = (1 << (32 - He(e) + u)) | (t << u) | a),
        (tt = s + A);
    } else (et = (1 << s) | (t << u) | a), (tt = A);
  }
  function Xu(A) {
    A.return !== null && (ft(A, 1), Kf(A, 1, 0));
  }
  function zu(A) {
    for (; A === hr; )
      (hr = qa[--ka]), (qa[ka] = null), (Zn = qa[--ka]), (qa[ka] = null);
    for (; A === Ot; )
      (Ot = Ne[--Ge]),
        (Ne[Ge] = null),
        (tt = Ne[--Ge]),
        (Ne[Ge] = null),
        (et = Ne[--Ge]),
        (Ne[Ge] = null);
  }
  function Df(A, e) {
    (Ne[Ge++] = et),
      (Ne[Ge++] = tt),
      (Ne[Ge++] = Ot),
      (et = e.id),
      (tt = e.overflow),
      (Ot = A);
  }
  var ne = null,
    IA = null,
    CA = !1,
    It = null,
    _e = !1,
    Yu = Error(r(519));
  function Lt(A) {
    var e = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        ""
      )
    );
    throw (jn(Re(e, A)), Yu);
  }
  function Of(A) {
    var e = A.stateNode,
      t = A.type,
      a = A.memoizedProps;
    switch (((e[ae] = A), (e[he] = a), t)) {
      case "dialog":
        BA("cancel", e), BA("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        BA("load", e);
        break;
      case "video":
      case "audio":
        for (t = 0; t < hl.length; t++) BA(hl[t], e);
        break;
      case "source":
        BA("error", e);
        break;
      case "img":
      case "image":
      case "link":
        BA("error", e), BA("load", e);
        break;
      case "details":
        BA("toggle", e);
        break;
      case "input":
        BA("invalid", e),
          JB(
            e,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0
          );
        break;
      case "select":
        BA("invalid", e);
        break;
      case "textarea":
        BA("invalid", e), jB(e, a.value, a.defaultValue, a.children);
    }
    (t = a.children),
      (typeof t != "string" && typeof t != "number" && typeof t != "bigint") ||
      e.textContent === "" + t ||
      a.suppressHydrationWarning === !0 ||
      Pg(e.textContent, t)
        ? (a.popover != null && (BA("beforetoggle", e), BA("toggle", e)),
          a.onScroll != null && BA("scroll", e),
          a.onScrollEnd != null && BA("scrollend", e),
          a.onClick != null && (e.onclick = st),
          (e = !0))
        : (e = !1),
      e || Lt(A, !0);
  }
  function If(A) {
    for (ne = A.return; ne; )
      switch (ne.tag) {
        case 5:
        case 31:
        case 13:
          _e = !1;
          return;
        case 27:
        case 3:
          _e = !0;
          return;
        default:
          ne = ne.return;
      }
  }
  function Wa(A) {
    if (A !== ne) return !1;
    if (!CA) return If(A), (CA = !0), !1;
    var e = A.tag,
      t;
    if (
      ((t = e !== 3 && e !== 27) &&
        ((t = e === 5) &&
          ((t = A.type),
          (t =
            !(t !== "form" && t !== "button") || sc(A.type, A.memoizedProps))),
        (t = !t)),
      t && IA && Lt(A),
      If(A),
      e === 13)
    ) {
      if (((A = A.memoizedState), (A = A !== null ? A.dehydrated : null), !A))
        throw Error(r(317));
      IA = iQ(A);
    } else if (e === 31) {
      if (((A = A.memoizedState), (A = A !== null ? A.dehydrated : null), !A))
        throw Error(r(317));
      IA = iQ(A);
    } else
      e === 27
        ? ((e = IA), kt(A.type) ? ((A = gc), (gc = null), (IA = A)) : (IA = e))
        : (IA = ne ? Xe(A.stateNode.nextSibling) : null);
    return !0;
  }
  function Ua() {
    (IA = ne = null), (CA = !1);
  }
  function Ju() {
    var A = It;
    return (
      A !== null &&
        (ve === null ? (ve = A) : ve.push.apply(ve, A), (It = null)),
      A
    );
  }
  function jn(A) {
    It === null ? (It = [A]) : It.push(A);
  }
  var Zu = v(null),
    da = null,
    ot = null;
  function Mt(A, e, t) {
    G(Zu, e._currentValue), (e._currentValue = t);
  }
  function gt(A) {
    (A._currentValue = Zu.current), x(Zu);
  }
  function ju(A, e, t) {
    for (; A !== null; ) {
      var a = A.alternate;
      if (
        ((A.childLanes & e) !== e
          ? ((A.childLanes |= e), a !== null && (a.childLanes |= e))
          : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e),
        A === t)
      )
        break;
      A = A.return;
    }
  }
  function qu(A, e, t, a) {
    var u = A.child;
    for (u !== null && (u.return = A); u !== null; ) {
      var s = u.dependencies;
      if (s !== null) {
        var f = u.child;
        s = s.firstContext;
        A: for (; s !== null; ) {
          var Q = s;
          s = u;
          for (var C = 0; C < e.length; C++)
            if (Q.context === e[C]) {
              (s.lanes |= t),
                (Q = s.alternate),
                Q !== null && (Q.lanes |= t),
                ju(s.return, t, A),
                a || (f = null);
              break A;
            }
          s = Q.next;
        }
      } else if (u.tag === 18) {
        if (((f = u.return), f === null)) throw Error(r(341));
        (f.lanes |= t),
          (s = f.alternate),
          s !== null && (s.lanes |= t),
          ju(f, t, A),
          (f = null);
      } else f = u.child;
      if (f !== null) f.return = u;
      else
        for (f = u; f !== null; ) {
          if (f === A) {
            f = null;
            break;
          }
          if (((u = f.sibling), u !== null)) {
            (u.return = f.return), (f = u);
            break;
          }
          f = f.return;
        }
      u = f;
    }
  }
  function Pa(A, e, t, a) {
    A = null;
    for (var u = e, s = !1; u !== null; ) {
      if (!s) {
        if ((u.flags & 524288) !== 0) s = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var f = u.alternate;
        if (f === null) throw Error(r(387));
        if (((f = f.memoizedProps), f !== null)) {
          var Q = u.type;
          pe(u.pendingProps.value, f.value) ||
            (A !== null ? A.push(Q) : (A = [Q]));
        }
      } else if (u === gA.current) {
        if (((f = u.alternate), f === null)) throw Error(r(387));
        f.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (A !== null ? A.push(vl) : (A = [vl]));
      }
      u = u.return;
    }
    A !== null && qu(e, A, t, a), (e.flags |= 262144);
  }
  function wr(A) {
    for (A = A.firstContext; A !== null; ) {
      if (!pe(A.context._currentValue, A.memoizedValue)) return !0;
      A = A.next;
    }
    return !1;
  }
  function va(A) {
    (da = A),
      (ot = null),
      (A = A.dependencies),
      A !== null && (A.firstContext = null);
  }
  function le(A) {
    return Lf(da, A);
  }
  function Cr(A, e) {
    return da === null && va(A), Lf(A, e);
  }
  function Lf(A, e) {
    var t = e._currentValue;
    if (((e = { context: e, memoizedValue: t, next: null }), ot === null)) {
      if (A === null) throw Error(r(308));
      (ot = e),
        (A.dependencies = { lanes: 0, firstContext: e }),
        (A.flags |= 524288);
    } else ot = ot.next = e;
    return t;
  }
  var Pw =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var A = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (t, a) {
                  A.push(a);
                },
              });
            this.abort = function () {
              (e.aborted = !0),
                A.forEach(function (t) {
                  return t();
                });
            };
          },
    $w = l.unstable_scheduleCallback,
    AC = l.unstable_NormalPriority,
    ZA = {
      $$typeof: aA,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function ku() {
    return { controller: new Pw(), data: new Map(), refCount: 0 };
  }
  function qn(A) {
    A.refCount--,
      A.refCount === 0 &&
        $w(AC, function () {
          A.controller.abort();
        });
  }
  var kn = null,
    Wu = 0,
    $a = 0,
    An = null;
  function eC(A, e) {
    if (kn === null) {
      var t = (kn = []);
      (Wu = 0),
        ($a = Ac()),
        (An = {
          status: "pending",
          value: void 0,
          then: function (a) {
            t.push(a);
          },
        });
    }
    return Wu++, e.then(Mf, Mf), e;
  }
  function Mf() {
    if (--Wu === 0 && kn !== null) {
      An !== null && (An.status = "fulfilled");
      var A = kn;
      (kn = null), ($a = 0), (An = null);
      for (var e = 0; e < A.length; e++) (0, A[e])();
    }
  }
  function tC(A, e) {
    var t = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (u) {
          t.push(u);
        },
      };
    return (
      A.then(
        function () {
          (a.status = "fulfilled"), (a.value = e);
          for (var u = 0; u < t.length; u++) (0, t[u])(e);
        },
        function (u) {
          for (a.status = "rejected", a.reason = u, u = 0; u < t.length; u++)
            (0, t[u])(void 0);
        }
      ),
      a
    );
  }
  var Rf = b.S;
  b.S = function (A, e) {
    (Fg = ye()),
      typeof e == "object" &&
        e !== null &&
        typeof e.then == "function" &&
        eC(A, e),
      Rf !== null && Rf(A, e);
  };
  var Fa = v(null);
  function Pu() {
    var A = Fa.current;
    return A !== null ? A : DA.pooledCache;
  }
  function Ur(A, e) {
    e === null ? G(Fa, Fa.current) : G(Fa, e.pool);
  }
  function Nf() {
    var A = Pu();
    return A === null ? null : { parent: ZA._currentValue, pool: A };
  }
  var en = Error(r(460)),
    $u = Error(r(474)),
    dr = Error(r(542)),
    vr = { then: function () {} };
  function Gf(A) {
    return (A = A.status), A === "fulfilled" || A === "rejected";
  }
  function _f(A, e, t) {
    switch (
      ((t = A[t]),
      t === void 0 ? A.push(e) : t !== e && (e.then(st, st), (e = t)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((A = e.reason), Xf(A), A);
      default:
        if (typeof e.status == "string") e.then(st, st);
        else {
          if (((A = DA), A !== null && 100 < A.shellSuspendCounter))
            throw Error(r(482));
          (A = e),
            (A.status = "pending"),
            A.then(
              function (a) {
                if (e.status === "pending") {
                  var u = e;
                  (u.status = "fulfilled"), (u.value = a);
                }
              },
              function (a) {
                if (e.status === "pending") {
                  var u = e;
                  (u.status = "rejected"), (u.reason = a);
                }
              }
            );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((A = e.reason), Xf(A), A);
        }
        throw ((ya = e), en);
    }
  }
  function Ea(A) {
    try {
      var e = A._init;
      return e(A._payload);
    } catch (t) {
      throw t !== null && typeof t == "object" && typeof t.then == "function"
        ? ((ya = t), en)
        : t;
    }
  }
  var ya = null;
  function Vf() {
    if (ya === null) throw Error(r(459));
    var A = ya;
    return (ya = null), A;
  }
  function Xf(A) {
    if (A === en || A === dr) throw Error(r(483));
  }
  var tn = null,
    Wn = 0;
  function Fr(A) {
    var e = Wn;
    return (Wn += 1), tn === null && (tn = []), _f(tn, A, e);
  }
  function Pn(A, e) {
    (e = e.props.ref), (A.ref = e !== void 0 ? e : null);
  }
  function Er(A, e) {
    throw e.$$typeof === y
      ? Error(r(525))
      : ((A = Object.prototype.toString.call(e)),
        Error(
          r(
            31,
            A === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : A
          )
        ));
  }
  function zf(A) {
    function e(E, F) {
      if (A) {
        var m = E.deletions;
        m === null ? ((E.deletions = [F]), (E.flags |= 16)) : m.push(F);
      }
    }
    function t(E, F) {
      if (!A) return null;
      for (; F !== null; ) e(E, F), (F = F.sibling);
      return null;
    }
    function a(E) {
      for (var F = new Map(); E !== null; )
        E.key !== null ? F.set(E.key, E) : F.set(E.index, E), (E = E.sibling);
      return F;
    }
    function u(E, F) {
      return (E = Bt(E, F)), (E.index = 0), (E.sibling = null), E;
    }
    function s(E, F, m) {
      return (
        (E.index = m),
        A
          ? ((m = E.alternate),
            m !== null
              ? ((m = m.index), m < F ? ((E.flags |= 67108866), F) : m)
              : ((E.flags |= 67108866), F))
          : ((E.flags |= 1048576), F)
      );
    }
    function f(E) {
      return A && E.alternate === null && (E.flags |= 67108866), E;
    }
    function Q(E, F, m, K) {
      return F === null || F.tag !== 6
        ? ((F = _u(m, E.mode, K)), (F.return = E), F)
        : ((F = u(F, m)), (F.return = E), F);
    }
    function C(E, F, m, K) {
      var $ = m.type;
      return $ === R
        ? T(E, F, m.props.children, K, m.key)
        : F !== null &&
          (F.elementType === $ ||
            (typeof $ == "object" &&
              $ !== null &&
              $.$$typeof === eA &&
              Ea($) === F.type))
        ? ((F = u(F, m.props)), Pn(F, m), (F.return = E), F)
        : ((F = Qr(m.type, m.key, m.props, null, E.mode, K)),
          Pn(F, m),
          (F.return = E),
          F);
    }
    function H(E, F, m, K) {
      return F === null ||
        F.tag !== 4 ||
        F.stateNode.containerInfo !== m.containerInfo ||
        F.stateNode.implementation !== m.implementation
        ? ((F = Vu(m, E.mode, K)), (F.return = E), F)
        : ((F = u(F, m.children || [])), (F.return = E), F);
    }
    function T(E, F, m, K, $) {
      return F === null || F.tag !== 7
        ? ((F = Ca(m, E.mode, K, $)), (F.return = E), F)
        : ((F = u(F, m)), (F.return = E), F);
    }
    function D(E, F, m) {
      if (
        (typeof F == "string" && F !== "") ||
        typeof F == "number" ||
        typeof F == "bigint"
      )
        return (F = _u("" + F, E.mode, m)), (F.return = E), F;
      if (typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case L:
            return (
              (m = Qr(F.type, F.key, F.props, null, E.mode, m)),
              Pn(m, F),
              (m.return = E),
              m
            );
          case I:
            return (F = Vu(F, E.mode, m)), (F.return = E), F;
          case eA:
            return (F = Ea(F)), D(E, F, m);
        }
        if (JA(F) || HA(F))
          return (F = Ca(F, E.mode, m, null)), (F.return = E), F;
        if (typeof F.then == "function") return D(E, Fr(F), m);
        if (F.$$typeof === aA) return D(E, Cr(E, F), m);
        Er(E, F);
      }
      return null;
    }
    function p(E, F, m, K) {
      var $ = F !== null ? F.key : null;
      if (
        (typeof m == "string" && m !== "") ||
        typeof m == "number" ||
        typeof m == "bigint"
      )
        return $ !== null ? null : Q(E, F, "" + m, K);
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case L:
            return m.key === $ ? C(E, F, m, K) : null;
          case I:
            return m.key === $ ? H(E, F, m, K) : null;
          case eA:
            return (m = Ea(m)), p(E, F, m, K);
        }
        if (JA(m) || HA(m)) return $ !== null ? null : T(E, F, m, K, null);
        if (typeof m.then == "function") return p(E, F, Fr(m), K);
        if (m.$$typeof === aA) return p(E, F, Cr(E, m), K);
        Er(E, m);
      }
      return null;
    }
    function S(E, F, m, K, $) {
      if (
        (typeof K == "string" && K !== "") ||
        typeof K == "number" ||
        typeof K == "bigint"
      )
        return (E = E.get(m) || null), Q(F, E, "" + K, $);
      if (typeof K == "object" && K !== null) {
        switch (K.$$typeof) {
          case L:
            return (
              (E = E.get(K.key === null ? m : K.key) || null), C(F, E, K, $)
            );
          case I:
            return (
              (E = E.get(K.key === null ? m : K.key) || null), H(F, E, K, $)
            );
          case eA:
            return (K = Ea(K)), S(E, F, m, K, $);
        }
        if (JA(K) || HA(K)) return (E = E.get(m) || null), T(F, E, K, $, null);
        if (typeof K.then == "function") return S(E, F, m, Fr(K), $);
        if (K.$$typeof === aA) return S(E, F, m, Cr(F, K), $);
        Er(F, K);
      }
      return null;
    }
    function q(E, F, m, K) {
      for (
        var $ = null, UA = null, k = F, uA = (F = 0), hA = null;
        k !== null && uA < m.length;
        uA++
      ) {
        k.index > uA ? ((hA = k), (k = null)) : (hA = k.sibling);
        var dA = p(E, k, m[uA], K);
        if (dA === null) {
          k === null && (k = hA);
          break;
        }
        A && k && dA.alternate === null && e(E, k),
          (F = s(dA, F, uA)),
          UA === null ? ($ = dA) : (UA.sibling = dA),
          (UA = dA),
          (k = hA);
      }
      if (uA === m.length) return t(E, k), CA && ft(E, uA), $;
      if (k === null) {
        for (; uA < m.length; uA++)
          (k = D(E, m[uA], K)),
            k !== null &&
              ((F = s(k, F, uA)),
              UA === null ? ($ = k) : (UA.sibling = k),
              (UA = k));
        return CA && ft(E, uA), $;
      }
      for (k = a(k); uA < m.length; uA++)
        (hA = S(k, E, uA, m[uA], K)),
          hA !== null &&
            (A &&
              hA.alternate !== null &&
              k.delete(hA.key === null ? uA : hA.key),
            (F = s(hA, F, uA)),
            UA === null ? ($ = hA) : (UA.sibling = hA),
            (UA = hA));
      return (
        A &&
          k.forEach(function (ea) {
            return e(E, ea);
          }),
        CA && ft(E, uA),
        $
      );
    }
    function nA(E, F, m, K) {
      if (m == null) throw Error(r(151));
      for (
        var $ = null, UA = null, k = F, uA = (F = 0), hA = null, dA = m.next();
        k !== null && !dA.done;
        uA++, dA = m.next()
      ) {
        k.index > uA ? ((hA = k), (k = null)) : (hA = k.sibling);
        var ea = p(E, k, dA.value, K);
        if (ea === null) {
          k === null && (k = hA);
          break;
        }
        A && k && ea.alternate === null && e(E, k),
          (F = s(ea, F, uA)),
          UA === null ? ($ = ea) : (UA.sibling = ea),
          (UA = ea),
          (k = hA);
      }
      if (dA.done) return t(E, k), CA && ft(E, uA), $;
      if (k === null) {
        for (; !dA.done; uA++, dA = m.next())
          (dA = D(E, dA.value, K)),
            dA !== null &&
              ((F = s(dA, F, uA)),
              UA === null ? ($ = dA) : (UA.sibling = dA),
              (UA = dA));
        return CA && ft(E, uA), $;
      }
      for (k = a(k); !dA.done; uA++, dA = m.next())
        (dA = S(k, E, uA, dA.value, K)),
          dA !== null &&
            (A &&
              dA.alternate !== null &&
              k.delete(dA.key === null ? uA : dA.key),
            (F = s(dA, F, uA)),
            UA === null ? ($ = dA) : (UA.sibling = dA),
            (UA = dA));
      return (
        A &&
          k.forEach(function (oU) {
            return e(E, oU);
          }),
        CA && ft(E, uA),
        $
      );
    }
    function bA(E, F, m, K) {
      if (
        (typeof m == "object" &&
          m !== null &&
          m.type === R &&
          m.key === null &&
          (m = m.props.children),
        typeof m == "object" && m !== null)
      ) {
        switch (m.$$typeof) {
          case L:
            A: {
              for (var $ = m.key; F !== null; ) {
                if (F.key === $) {
                  if ((($ = m.type), $ === R)) {
                    if (F.tag === 7) {
                      t(E, F.sibling),
                        (K = u(F, m.props.children)),
                        (K.return = E),
                        (E = K);
                      break A;
                    }
                  } else if (
                    F.elementType === $ ||
                    (typeof $ == "object" &&
                      $ !== null &&
                      $.$$typeof === eA &&
                      Ea($) === F.type)
                  ) {
                    t(E, F.sibling),
                      (K = u(F, m.props)),
                      Pn(K, m),
                      (K.return = E),
                      (E = K);
                    break A;
                  }
                  t(E, F);
                  break;
                } else e(E, F);
                F = F.sibling;
              }
              m.type === R
                ? ((K = Ca(m.props.children, E.mode, K, m.key)),
                  (K.return = E),
                  (E = K))
                : ((K = Qr(m.type, m.key, m.props, null, E.mode, K)),
                  Pn(K, m),
                  (K.return = E),
                  (E = K));
            }
            return f(E);
          case I:
            A: {
              for ($ = m.key; F !== null; ) {
                if (F.key === $)
                  if (
                    F.tag === 4 &&
                    F.stateNode.containerInfo === m.containerInfo &&
                    F.stateNode.implementation === m.implementation
                  ) {
                    t(E, F.sibling),
                      (K = u(F, m.children || [])),
                      (K.return = E),
                      (E = K);
                    break A;
                  } else {
                    t(E, F);
                    break;
                  }
                else e(E, F);
                F = F.sibling;
              }
              (K = Vu(m, E.mode, K)), (K.return = E), (E = K);
            }
            return f(E);
          case eA:
            return (m = Ea(m)), bA(E, F, m, K);
        }
        if (JA(m)) return q(E, F, m, K);
        if (HA(m)) {
          if ((($ = HA(m)), typeof $ != "function")) throw Error(r(150));
          return (m = $.call(m)), nA(E, F, m, K);
        }
        if (typeof m.then == "function") return bA(E, F, Fr(m), K);
        if (m.$$typeof === aA) return bA(E, F, Cr(E, m), K);
        Er(E, m);
      }
      return (typeof m == "string" && m !== "") ||
        typeof m == "number" ||
        typeof m == "bigint"
        ? ((m = "" + m),
          F !== null && F.tag === 6
            ? (t(E, F.sibling), (K = u(F, m)), (K.return = E), (E = K))
            : (t(E, F), (K = _u(m, E.mode, K)), (K.return = E), (E = K)),
          f(E))
        : t(E, F);
    }
    return function (E, F, m, K) {
      try {
        Wn = 0;
        var $ = bA(E, F, m, K);
        return (tn = null), $;
      } catch (k) {
        if (k === en || k === dr) throw k;
        var UA = Se(29, k, null, E.mode);
        return (UA.lanes = K), (UA.return = E), UA;
      } finally {
      }
    };
  }
  var ma = zf(!0),
    Yf = zf(!1),
    Rt = !1;
  function As(A) {
    A.updateQueue = {
      baseState: A.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function es(A, e) {
    (A = A.updateQueue),
      e.updateQueue === A &&
        (e.updateQueue = {
          baseState: A.baseState,
          firstBaseUpdate: A.firstBaseUpdate,
          lastBaseUpdate: A.lastBaseUpdate,
          shared: A.shared,
          callbacks: null,
        });
  }
  function Nt(A) {
    return { lane: A, tag: 0, payload: null, callback: null, next: null };
  }
  function Gt(A, e, t) {
    var a = A.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (vA & 2) !== 0)) {
      var u = a.pending;
      return (
        u === null ? (e.next = e) : ((e.next = u.next), (u.next = e)),
        (a.pending = e),
        (e = gr(A)),
        Sf(A, null, t),
        e
      );
    }
    return or(A, a, e, t), gr(A);
  }
  function $n(A, e, t) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (t & 4194048) !== 0))
    ) {
      var a = e.lanes;
      (a &= A.pendingLanes), (t |= a), (e.lanes = t), IB(A, t);
    }
  }
  function ts(A, e) {
    var t = A.updateQueue,
      a = A.alternate;
    if (a !== null && ((a = a.updateQueue), t === a)) {
      var u = null,
        s = null;
      if (((t = t.firstBaseUpdate), t !== null)) {
        do {
          var f = {
            lane: t.lane,
            tag: t.tag,
            payload: t.payload,
            callback: null,
            next: null,
          };
          s === null ? (u = s = f) : (s = s.next = f), (t = t.next);
        } while (t !== null);
        s === null ? (u = s = e) : (s = s.next = e);
      } else u = s = e;
      (t = {
        baseState: a.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: s,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (A.updateQueue = t);
      return;
    }
    (A = t.lastBaseUpdate),
      A === null ? (t.firstBaseUpdate = e) : (A.next = e),
      (t.lastBaseUpdate = e);
  }
  var as = !1;
  function Al() {
    if (as) {
      var A = An;
      if (A !== null) throw A;
    }
  }
  function el(A, e, t, a) {
    as = !1;
    var u = A.updateQueue;
    Rt = !1;
    var s = u.firstBaseUpdate,
      f = u.lastBaseUpdate,
      Q = u.shared.pending;
    if (Q !== null) {
      u.shared.pending = null;
      var C = Q,
        H = C.next;
      (C.next = null), f === null ? (s = H) : (f.next = H), (f = C);
      var T = A.alternate;
      T !== null &&
        ((T = T.updateQueue),
        (Q = T.lastBaseUpdate),
        Q !== f &&
          (Q === null ? (T.firstBaseUpdate = H) : (Q.next = H),
          (T.lastBaseUpdate = C)));
    }
    if (s !== null) {
      var D = u.baseState;
      (f = 0), (T = H = C = null), (Q = s);
      do {
        var p = Q.lane & -536870913,
          S = p !== Q.lane;
        if (S ? (QA & p) === p : (a & p) === p) {
          p !== 0 && p === $a && (as = !0),
            T !== null &&
              (T = T.next =
                {
                  lane: 0,
                  tag: Q.tag,
                  payload: Q.payload,
                  callback: null,
                  next: null,
                });
          A: {
            var q = A,
              nA = Q;
            p = e;
            var bA = t;
            switch (nA.tag) {
              case 1:
                if (((q = nA.payload), typeof q == "function")) {
                  D = q.call(bA, D, p);
                  break A;
                }
                D = q;
                break A;
              case 3:
                q.flags = (q.flags & -65537) | 128;
              case 0:
                if (
                  ((q = nA.payload),
                  (p = typeof q == "function" ? q.call(bA, D, p) : q),
                  p == null)
                )
                  break A;
                D = U({}, D, p);
                break A;
              case 2:
                Rt = !0;
            }
          }
          (p = Q.callback),
            p !== null &&
              ((A.flags |= 64),
              S && (A.flags |= 8192),
              (S = u.callbacks),
              S === null ? (u.callbacks = [p]) : S.push(p));
        } else
          (S = {
            lane: p,
            tag: Q.tag,
            payload: Q.payload,
            callback: Q.callback,
            next: null,
          }),
            T === null ? ((H = T = S), (C = D)) : (T = T.next = S),
            (f |= p);
        if (((Q = Q.next), Q === null)) {
          if (((Q = u.shared.pending), Q === null)) break;
          (S = Q),
            (Q = S.next),
            (S.next = null),
            (u.lastBaseUpdate = S),
            (u.shared.pending = null);
        }
      } while (!0);
      T === null && (C = D),
        (u.baseState = C),
        (u.firstBaseUpdate = H),
        (u.lastBaseUpdate = T),
        s === null && (u.shared.lanes = 0),
        (Yt |= f),
        (A.lanes = f),
        (A.memoizedState = D);
    }
  }
  function Jf(A, e) {
    if (typeof A != "function") throw Error(r(191, A));
    A.call(e);
  }
  function Zf(A, e) {
    var t = A.callbacks;
    if (t !== null)
      for (A.callbacks = null, A = 0; A < t.length; A++) Jf(t[A], e);
  }
  var an = v(null),
    yr = v(0);
  function jf(A, e) {
    (A = Et), G(yr, A), G(an, e), (Et = A | e.baseLanes);
  }
  function ns() {
    G(yr, Et), G(an, an.current);
  }
  function ls() {
    (Et = yr.current), x(an), x(yr);
  }
  var be = v(null),
    Ve = null;
  function _t(A) {
    var e = A.alternate;
    G(VA, VA.current & 1),
      G(be, A),
      Ve === null &&
        (e === null || an.current !== null || e.memoizedState !== null) &&
        (Ve = A);
  }
  function rs(A) {
    G(VA, VA.current), G(be, A), Ve === null && (Ve = A);
  }
  function qf(A) {
    A.tag === 22
      ? (G(VA, VA.current), G(be, A), Ve === null && (Ve = A))
      : Vt();
  }
  function Vt() {
    G(VA, VA.current), G(be, be.current);
  }
  function Te(A) {
    x(be), Ve === A && (Ve = null), x(VA);
  }
  var VA = v(0);
  function mr(A) {
    for (var e = A; e !== null; ) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (t !== null && ((t = t.dehydrated), t === null || fc(t) || oc(t)))
          return e;
      } else if (
        e.tag === 19 &&
        (e.memoizedProps.revealOrder === "forwards" ||
          e.memoizedProps.revealOrder === "backwards" ||
          e.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          e.memoizedProps.revealOrder === "together")
      ) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        (e.child.return = e), (e = e.child);
        continue;
      }
      if (e === A) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === A) return null;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
    return null;
  }
  var Qt = 0,
    iA = null,
    pA = null,
    jA = null,
    Hr = !1,
    nn = !1,
    Ha = !1,
    pr = 0,
    tl = 0,
    ln = null,
    aC = 0;
  function NA() {
    throw Error(r(321));
  }
  function is(A, e) {
    if (e === null) return !1;
    for (var t = 0; t < e.length && t < A.length; t++)
      if (!pe(A[t], e[t])) return !1;
    return !0;
  }
  function us(A, e, t, a, u, s) {
    return (
      (Qt = s),
      (iA = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (b.H = A === null || A.memoizedState === null ? Do : Es),
      (Ha = !1),
      (s = t(a, u)),
      (Ha = !1),
      nn && (s = Wf(e, t, a, u)),
      kf(A),
      s
    );
  }
  function kf(A) {
    b.H = ll;
    var e = pA !== null && pA.next !== null;
    if (((Qt = 0), (jA = pA = iA = null), (Hr = !1), (tl = 0), (ln = null), e))
      throw Error(r(300));
    A === null ||
      qA ||
      ((A = A.dependencies), A !== null && wr(A) && (qA = !0));
  }
  function Wf(A, e, t, a) {
    iA = A;
    var u = 0;
    do {
      if ((nn && (ln = null), (tl = 0), (nn = !1), 25 <= u))
        throw Error(r(301));
      if (((u += 1), (jA = pA = null), A.updateQueue != null)) {
        var s = A.updateQueue;
        (s.lastEffect = null),
          (s.events = null),
          (s.stores = null),
          s.memoCache != null && (s.memoCache.index = 0);
      }
      (b.H = Oo), (s = e(t, a));
    } while (nn);
    return s;
  }
  function nC() {
    var A = b.H,
      e = A.useState()[0];
    return (
      (e = typeof e.then == "function" ? al(e) : e),
      (A = A.useState()[0]),
      (pA !== null ? pA.memoizedState : null) !== A && (iA.flags |= 1024),
      e
    );
  }
  function ss() {
    var A = pr !== 0;
    return (pr = 0), A;
  }
  function cs(A, e, t) {
    (e.updateQueue = A.updateQueue), (e.flags &= -2053), (A.lanes &= ~t);
  }
  function Bs(A) {
    if (Hr) {
      for (A = A.memoizedState; A !== null; ) {
        var e = A.queue;
        e !== null && (e.pending = null), (A = A.next);
      }
      Hr = !1;
    }
    (Qt = 0), (jA = pA = iA = null), (nn = !1), (tl = pr = 0), (ln = null);
  }
  function ge() {
    var A = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return jA === null ? (iA.memoizedState = jA = A) : (jA = jA.next = A), jA;
  }
  function XA() {
    if (pA === null) {
      var A = iA.alternate;
      A = A !== null ? A.memoizedState : null;
    } else A = pA.next;
    var e = jA === null ? iA.memoizedState : jA.next;
    if (e !== null) (jA = e), (pA = A);
    else {
      if (A === null)
        throw iA.alternate === null ? Error(r(467)) : Error(r(310));
      (pA = A),
        (A = {
          memoizedState: pA.memoizedState,
          baseState: pA.baseState,
          baseQueue: pA.baseQueue,
          queue: pA.queue,
          next: null,
        }),
        jA === null ? (iA.memoizedState = jA = A) : (jA = jA.next = A);
    }
    return jA;
  }
  function Sr() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function al(A) {
    var e = tl;
    return (
      (tl += 1),
      ln === null && (ln = []),
      (A = _f(ln, A, e)),
      (e = iA),
      (jA === null ? e.memoizedState : jA.next) === null &&
        ((e = e.alternate),
        (b.H = e === null || e.memoizedState === null ? Do : Es)),
      A
    );
  }
  function br(A) {
    if (A !== null && typeof A == "object") {
      if (typeof A.then == "function") return al(A);
      if (A.$$typeof === aA) return le(A);
    }
    throw Error(r(438, String(A)));
  }
  function fs(A) {
    var e = null,
      t = iA.updateQueue;
    if ((t !== null && (e = t.memoCache), e == null)) {
      var a = iA.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (e = {
              data: a.data.map(function (u) {
                return u.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      t === null && ((t = Sr()), (iA.updateQueue = t)),
      (t.memoCache = e),
      (t = e.data[e.index]),
      t === void 0)
    )
      for (t = e.data[e.index] = Array(A), a = 0; a < A; a++) t[a] = FA;
    return e.index++, t;
  }
  function ht(A, e) {
    return typeof e == "function" ? e(A) : e;
  }
  function Tr(A) {
    var e = XA();
    return os(e, pA, A);
  }
  function os(A, e, t) {
    var a = A.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = t;
    var u = A.baseQueue,
      s = a.pending;
    if (s !== null) {
      if (u !== null) {
        var f = u.next;
        (u.next = s.next), (s.next = f);
      }
      (e.baseQueue = u = s), (a.pending = null);
    }
    if (((s = A.baseState), u === null)) A.memoizedState = s;
    else {
      e = u.next;
      var Q = (f = null),
        C = null,
        H = e,
        T = !1;
      do {
        var D = H.lane & -536870913;
        if (D !== H.lane ? (QA & D) === D : (Qt & D) === D) {
          var p = H.revertLane;
          if (p === 0)
            C !== null &&
              (C = C.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: H.action,
                  hasEagerState: H.hasEagerState,
                  eagerState: H.eagerState,
                  next: null,
                }),
              D === $a && (T = !0);
          else if ((Qt & p) === p) {
            (H = H.next), p === $a && (T = !0);
            continue;
          } else
            (D = {
              lane: 0,
              revertLane: H.revertLane,
              gesture: null,
              action: H.action,
              hasEagerState: H.hasEagerState,
              eagerState: H.eagerState,
              next: null,
            }),
              C === null ? ((Q = C = D), (f = s)) : (C = C.next = D),
              (iA.lanes |= p),
              (Yt |= p);
          (D = H.action),
            Ha && t(s, D),
            (s = H.hasEagerState ? H.eagerState : t(s, D));
        } else
          (p = {
            lane: D,
            revertLane: H.revertLane,
            gesture: H.gesture,
            action: H.action,
            hasEagerState: H.hasEagerState,
            eagerState: H.eagerState,
            next: null,
          }),
            C === null ? ((Q = C = p), (f = s)) : (C = C.next = p),
            (iA.lanes |= D),
            (Yt |= D);
        H = H.next;
      } while (H !== null && H !== e);
      if (
        (C === null ? (f = s) : (C.next = Q),
        !pe(s, A.memoizedState) && ((qA = !0), T && ((t = An), t !== null)))
      )
        throw t;
      (A.memoizedState = s),
        (A.baseState = f),
        (A.baseQueue = C),
        (a.lastRenderedState = s);
    }
    return u === null && (a.lanes = 0), [A.memoizedState, a.dispatch];
  }
  function gs(A) {
    var e = XA(),
      t = e.queue;
    if (t === null) throw Error(r(311));
    t.lastRenderedReducer = A;
    var a = t.dispatch,
      u = t.pending,
      s = e.memoizedState;
    if (u !== null) {
      t.pending = null;
      var f = (u = u.next);
      do (s = A(s, f.action)), (f = f.next);
      while (f !== u);
      pe(s, e.memoizedState) || (qA = !0),
        (e.memoizedState = s),
        e.baseQueue === null && (e.baseState = s),
        (t.lastRenderedState = s);
    }
    return [s, a];
  }
  function Pf(A, e, t) {
    var a = iA,
      u = XA(),
      s = CA;
    if (s) {
      if (t === void 0) throw Error(r(407));
      t = t();
    } else t = e();
    var f = !pe((pA || u).memoizedState, t);
    if (
      (f && ((u.memoizedState = t), (qA = !0)),
      (u = u.queue),
      ws(eo.bind(null, a, u, A), [A]),
      u.getSnapshot !== e || f || (jA !== null && jA.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        rn(9, { destroy: void 0 }, Ao.bind(null, a, u, t, e), null),
        DA === null)
      )
        throw Error(r(349));
      s || (Qt & 127) !== 0 || $f(a, e, t);
    }
    return t;
  }
  function $f(A, e, t) {
    (A.flags |= 16384),
      (A = { getSnapshot: e, value: t }),
      (e = iA.updateQueue),
      e === null
        ? ((e = Sr()), (iA.updateQueue = e), (e.stores = [A]))
        : ((t = e.stores), t === null ? (e.stores = [A]) : t.push(A));
  }
  function Ao(A, e, t, a) {
    (e.value = t), (e.getSnapshot = a), to(e) && ao(A);
  }
  function eo(A, e, t) {
    return t(function () {
      to(e) && ao(A);
    });
  }
  function to(A) {
    var e = A.getSnapshot;
    A = A.value;
    try {
      var t = e();
      return !pe(A, t);
    } catch {
      return !0;
    }
  }
  function ao(A) {
    var e = wa(A, 2);
    e !== null && Fe(e, A, 2);
  }
  function Qs(A) {
    var e = ge();
    if (typeof A == "function") {
      var t = A;
      if (((A = t()), Ha)) {
        xt(!0);
        try {
          t();
        } finally {
          xt(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = A),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ht,
        lastRenderedState: A,
      }),
      e
    );
  }
  function no(A, e, t, a) {
    return (A.baseState = t), os(A, pA, typeof a == "function" ? a : ht);
  }
  function lC(A, e, t, a, u) {
    if (Dr(A)) throw Error(r(485));
    if (((A = e.action), A !== null)) {
      var s = {
        payload: u,
        action: A,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (f) {
          s.listeners.push(f);
        },
      };
      b.T !== null ? t(!0) : (s.isTransition = !1),
        a(s),
        (t = e.pending),
        t === null
          ? ((s.next = e.pending = s), lo(e, s))
          : ((s.next = t.next), (e.pending = t.next = s));
    }
  }
  function lo(A, e) {
    var t = e.action,
      a = e.payload,
      u = A.state;
    if (e.isTransition) {
      var s = b.T,
        f = {};
      b.T = f;
      try {
        var Q = t(u, a),
          C = b.S;
        C !== null && C(f, Q), ro(A, e, Q);
      } catch (H) {
        hs(A, e, H);
      } finally {
        s !== null && f.types !== null && (s.types = f.types), (b.T = s);
      }
    } else
      try {
        (s = t(u, a)), ro(A, e, s);
      } catch (H) {
        hs(A, e, H);
      }
  }
  function ro(A, e, t) {
    t !== null && typeof t == "object" && typeof t.then == "function"
      ? t.then(
          function (a) {
            io(A, e, a);
          },
          function (a) {
            return hs(A, e, a);
          }
        )
      : io(A, e, t);
  }
  function io(A, e, t) {
    (e.status = "fulfilled"),
      (e.value = t),
      uo(e),
      (A.state = t),
      (e = A.pending),
      e !== null &&
        ((t = e.next),
        t === e ? (A.pending = null) : ((t = t.next), (e.next = t), lo(A, t)));
  }
  function hs(A, e, t) {
    var a = A.pending;
    if (((A.pending = null), a !== null)) {
      a = a.next;
      do (e.status = "rejected"), (e.reason = t), uo(e), (e = e.next);
      while (e !== a);
    }
    A.action = null;
  }
  function uo(A) {
    A = A.listeners;
    for (var e = 0; e < A.length; e++) (0, A[e])();
  }
  function so(A, e) {
    return e;
  }
  function co(A, e) {
    if (CA) {
      var t = DA.formState;
      if (t !== null) {
        A: {
          var a = iA;
          if (CA) {
            if (IA) {
              e: {
                for (var u = IA, s = _e; u.nodeType !== 8; ) {
                  if (!s) {
                    u = null;
                    break e;
                  }
                  if (((u = Xe(u.nextSibling)), u === null)) {
                    u = null;
                    break e;
                  }
                }
                (s = u.data), (u = s === "F!" || s === "F" ? u : null);
              }
              if (u) {
                (IA = Xe(u.nextSibling)), (a = u.data === "F!");
                break A;
              }
            }
            Lt(a);
          }
          a = !1;
        }
        a && (e = t[0]);
      }
    }
    return (
      (t = ge()),
      (t.memoizedState = t.baseState = e),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: so,
        lastRenderedState: e,
      }),
      (t.queue = a),
      (t = To.bind(null, iA, a)),
      (a.dispatch = t),
      (a = Qs(!1)),
      (s = Fs.bind(null, iA, !1, a.queue)),
      (a = ge()),
      (u = { state: e, dispatch: null, action: A, pending: null }),
      (a.queue = u),
      (t = lC.bind(null, iA, u, s, t)),
      (u.dispatch = t),
      (a.memoizedState = A),
      [e, t, !1]
    );
  }
  function Bo(A) {
    var e = XA();
    return fo(e, pA, A);
  }
  function fo(A, e, t) {
    if (
      ((e = os(A, e, so)[0]),
      (A = Tr(ht)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var a = al(e);
      } catch (f) {
        throw f === en ? dr : f;
      }
    else a = e;
    e = XA();
    var u = e.queue,
      s = u.dispatch;
    return (
      t !== e.memoizedState &&
        ((iA.flags |= 2048),
        rn(9, { destroy: void 0 }, rC.bind(null, u, t), null)),
      [a, s, A]
    );
  }
  function rC(A, e) {
    A.action = e;
  }
  function oo(A) {
    var e = XA(),
      t = pA;
    if (t !== null) return fo(e, t, A);
    XA(), (e = e.memoizedState), (t = XA());
    var a = t.queue.dispatch;
    return (t.memoizedState = A), [e, a, !1];
  }
  function rn(A, e, t, a) {
    return (
      (A = { tag: A, create: t, deps: a, inst: e, next: null }),
      (e = iA.updateQueue),
      e === null && ((e = Sr()), (iA.updateQueue = e)),
      (t = e.lastEffect),
      t === null
        ? (e.lastEffect = A.next = A)
        : ((a = t.next), (t.next = A), (A.next = a), (e.lastEffect = A)),
      A
    );
  }
  function go() {
    return XA().memoizedState;
  }
  function xr(A, e, t, a) {
    var u = ge();
    (iA.flags |= A),
      (u.memoizedState = rn(
        1 | e,
        { destroy: void 0 },
        t,
        a === void 0 ? null : a
      ));
  }
  function Kr(A, e, t, a) {
    var u = XA();
    a = a === void 0 ? null : a;
    var s = u.memoizedState.inst;
    pA !== null && a !== null && is(a, pA.memoizedState.deps)
      ? (u.memoizedState = rn(e, s, t, a))
      : ((iA.flags |= A), (u.memoizedState = rn(1 | e, s, t, a)));
  }
  function Qo(A, e) {
    xr(8390656, 8, A, e);
  }
  function ws(A, e) {
    Kr(2048, 8, A, e);
  }
  function iC(A) {
    iA.flags |= 4;
    var e = iA.updateQueue;
    if (e === null) (e = Sr()), (iA.updateQueue = e), (e.events = [A]);
    else {
      var t = e.events;
      t === null ? (e.events = [A]) : t.push(A);
    }
  }
  function ho(A) {
    var e = XA().memoizedState;
    return (
      iC({ ref: e, nextImpl: A }),
      function () {
        if ((vA & 2) !== 0) throw Error(r(440));
        return e.impl.apply(void 0, arguments);
      }
    );
  }
  function wo(A, e) {
    return Kr(4, 2, A, e);
  }
  function Co(A, e) {
    return Kr(4, 4, A, e);
  }
  function Uo(A, e) {
    if (typeof e == "function") {
      A = A();
      var t = e(A);
      return function () {
        typeof t == "function" ? t() : e(null);
      };
    }
    if (e != null)
      return (
        (A = A()),
        (e.current = A),
        function () {
          e.current = null;
        }
      );
  }
  function vo(A, e, t) {
    (t = t != null ? t.concat([A]) : null), Kr(4, 4, Uo.bind(null, e, A), t);
  }
  function Cs() {}
  function Fo(A, e) {
    var t = XA();
    e = e === void 0 ? null : e;
    var a = t.memoizedState;
    return e !== null && is(e, a[1]) ? a[0] : ((t.memoizedState = [A, e]), A);
  }
  function Eo(A, e) {
    var t = XA();
    e = e === void 0 ? null : e;
    var a = t.memoizedState;
    if (e !== null && is(e, a[1])) return a[0];
    if (((a = A()), Ha)) {
      xt(!0);
      try {
        A();
      } finally {
        xt(!1);
      }
    }
    return (t.memoizedState = [a, e]), a;
  }
  function Us(A, e, t) {
    return t === void 0 || ((Qt & 1073741824) !== 0 && (QA & 261930) === 0)
      ? (A.memoizedState = e)
      : ((A.memoizedState = t), (A = yg()), (iA.lanes |= A), (Yt |= A), t);
  }
  function yo(A, e, t, a) {
    return pe(t, e)
      ? t
      : an.current !== null
      ? ((A = Us(A, t, a)), pe(A, e) || (qA = !0), A)
      : (Qt & 42) === 0 || ((Qt & 1073741824) !== 0 && (QA & 261930) === 0)
      ? ((qA = !0), (A.memoizedState = t))
      : ((A = yg()), (iA.lanes |= A), (Yt |= A), e);
  }
  function mo(A, e, t, a, u) {
    var s = N.p;
    N.p = s !== 0 && 8 > s ? s : 8;
    var f = b.T,
      Q = {};
    (b.T = Q), Fs(A, !1, e, t);
    try {
      var C = u(),
        H = b.S;
      if (
        (H !== null && H(Q, C),
        C !== null && typeof C == "object" && typeof C.then == "function")
      ) {
        var T = tC(C, a);
        nl(A, e, T, De(A));
      } else nl(A, e, a, De(A));
    } catch (D) {
      nl(A, e, { then: function () {}, status: "rejected", reason: D }, De());
    } finally {
      (N.p = s),
        f !== null && Q.types !== null && (f.types = Q.types),
        (b.T = f);
    }
  }
  function uC() {}
  function ds(A, e, t, a) {
    if (A.tag !== 5) throw Error(r(476));
    var u = Ho(A).queue;
    mo(
      A,
      u,
      e,
      P,
      t === null
        ? uC
        : function () {
            return po(A), t(a);
          }
    );
  }
  function Ho(A) {
    var e = A.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: P,
      baseState: P,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ht,
        lastRenderedState: P,
      },
      next: null,
    };
    var t = {};
    return (
      (e.next = {
        memoizedState: t,
        baseState: t,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: ht,
          lastRenderedState: t,
        },
        next: null,
      }),
      (A.memoizedState = e),
      (A = A.alternate),
      A !== null && (A.memoizedState = e),
      e
    );
  }
  function po(A) {
    var e = Ho(A);
    e.next === null && (e = A.alternate.memoizedState),
      nl(A, e.next.queue, {}, De());
  }
  function vs() {
    return le(vl);
  }
  function So() {
    return XA().memoizedState;
  }
  function bo() {
    return XA().memoizedState;
  }
  function sC(A) {
    for (var e = A.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var t = De();
          A = Nt(t);
          var a = Gt(e, A, t);
          a !== null && (Fe(a, e, t), $n(a, e, t)),
            (e = { cache: ku() }),
            (A.payload = e);
          return;
      }
      e = e.return;
    }
  }
  function cC(A, e, t) {
    var a = De();
    (t = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Dr(A)
        ? xo(e, t)
        : ((t = Nu(A, e, t, a)), t !== null && (Fe(t, A, a), Ko(t, e, a)));
  }
  function To(A, e, t) {
    var a = De();
    nl(A, e, t, a);
  }
  function nl(A, e, t, a) {
    var u = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Dr(A)) xo(e, u);
    else {
      var s = A.alternate;
      if (
        A.lanes === 0 &&
        (s === null || s.lanes === 0) &&
        ((s = e.lastRenderedReducer), s !== null)
      )
        try {
          var f = e.lastRenderedState,
            Q = s(f, t);
          if (((u.hasEagerState = !0), (u.eagerState = Q), pe(Q, f)))
            return or(A, e, u, 0), DA === null && fr(), !1;
        } catch {
        } finally {
        }
      if (((t = Nu(A, e, u, a)), t !== null))
        return Fe(t, A, a), Ko(t, e, a), !0;
    }
    return !1;
  }
  function Fs(A, e, t, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: Ac(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Dr(A))
    ) {
      if (e) throw Error(r(479));
    } else (e = Nu(A, t, a, 2)), e !== null && Fe(e, A, 2);
  }
  function Dr(A) {
    var e = A.alternate;
    return A === iA || (e !== null && e === iA);
  }
  function xo(A, e) {
    nn = Hr = !0;
    var t = A.pending;
    t === null ? (e.next = e) : ((e.next = t.next), (t.next = e)),
      (A.pending = e);
  }
  function Ko(A, e, t) {
    if ((t & 4194048) !== 0) {
      var a = e.lanes;
      (a &= A.pendingLanes), (t |= a), (e.lanes = t), IB(A, t);
    }
  }
  var ll = {
    readContext: le,
    use: br,
    useCallback: NA,
    useContext: NA,
    useEffect: NA,
    useImperativeHandle: NA,
    useLayoutEffect: NA,
    useInsertionEffect: NA,
    useMemo: NA,
    useReducer: NA,
    useRef: NA,
    useState: NA,
    useDebugValue: NA,
    useDeferredValue: NA,
    useTransition: NA,
    useSyncExternalStore: NA,
    useId: NA,
    useHostTransitionStatus: NA,
    useFormState: NA,
    useActionState: NA,
    useOptimistic: NA,
    useMemoCache: NA,
    useCacheRefresh: NA,
  };
  ll.useEffectEvent = NA;
  var Do = {
      readContext: le,
      use: br,
      useCallback: function (A, e) {
        return (ge().memoizedState = [A, e === void 0 ? null : e]), A;
      },
      useContext: le,
      useEffect: Qo,
      useImperativeHandle: function (A, e, t) {
        (t = t != null ? t.concat([A]) : null),
          xr(4194308, 4, Uo.bind(null, e, A), t);
      },
      useLayoutEffect: function (A, e) {
        return xr(4194308, 4, A, e);
      },
      useInsertionEffect: function (A, e) {
        xr(4, 2, A, e);
      },
      useMemo: function (A, e) {
        var t = ge();
        e = e === void 0 ? null : e;
        var a = A();
        if (Ha) {
          xt(!0);
          try {
            A();
          } finally {
            xt(!1);
          }
        }
        return (t.memoizedState = [a, e]), a;
      },
      useReducer: function (A, e, t) {
        var a = ge();
        if (t !== void 0) {
          var u = t(e);
          if (Ha) {
            xt(!0);
            try {
              t(e);
            } finally {
              xt(!1);
            }
          }
        } else u = e;
        return (
          (a.memoizedState = a.baseState = u),
          (A = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: A,
            lastRenderedState: u,
          }),
          (a.queue = A),
          (A = A.dispatch = cC.bind(null, iA, A)),
          [a.memoizedState, A]
        );
      },
      useRef: function (A) {
        var e = ge();
        return (A = { current: A }), (e.memoizedState = A);
      },
      useState: function (A) {
        A = Qs(A);
        var e = A.queue,
          t = To.bind(null, iA, e);
        return (e.dispatch = t), [A.memoizedState, t];
      },
      useDebugValue: Cs,
      useDeferredValue: function (A, e) {
        var t = ge();
        return Us(t, A, e);
      },
      useTransition: function () {
        var A = Qs(!1);
        return (
          (A = mo.bind(null, iA, A.queue, !0, !1)),
          (ge().memoizedState = A),
          [!1, A]
        );
      },
      useSyncExternalStore: function (A, e, t) {
        var a = iA,
          u = ge();
        if (CA) {
          if (t === void 0) throw Error(r(407));
          t = t();
        } else {
          if (((t = e()), DA === null)) throw Error(r(349));
          (QA & 127) !== 0 || $f(a, e, t);
        }
        u.memoizedState = t;
        var s = { value: t, getSnapshot: e };
        return (
          (u.queue = s),
          Qo(eo.bind(null, a, s, A), [A]),
          (a.flags |= 2048),
          rn(9, { destroy: void 0 }, Ao.bind(null, a, s, t, e), null),
          t
        );
      },
      useId: function () {
        var A = ge(),
          e = DA.identifierPrefix;
        if (CA) {
          var t = tt,
            a = et;
          (t = (a & ~(1 << (32 - He(a) - 1))).toString(32) + t),
            (e = "_" + e + "R_" + t),
            (t = pr++),
            0 < t && (e += "H" + t.toString(32)),
            (e += "_");
        } else (t = aC++), (e = "_" + e + "r_" + t.toString(32) + "_");
        return (A.memoizedState = e);
      },
      useHostTransitionStatus: vs,
      useFormState: co,
      useActionState: co,
      useOptimistic: function (A) {
        var e = ge();
        e.memoizedState = e.baseState = A;
        var t = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (e.queue = t),
          (e = Fs.bind(null, iA, !0, t)),
          (t.dispatch = e),
          [A, e]
        );
      },
      useMemoCache: fs,
      useCacheRefresh: function () {
        return (ge().memoizedState = sC.bind(null, iA));
      },
      useEffectEvent: function (A) {
        var e = ge(),
          t = { impl: A };
        return (
          (e.memoizedState = t),
          function () {
            if ((vA & 2) !== 0) throw Error(r(440));
            return t.impl.apply(void 0, arguments);
          }
        );
      },
    },
    Es = {
      readContext: le,
      use: br,
      useCallback: Fo,
      useContext: le,
      useEffect: ws,
      useImperativeHandle: vo,
      useInsertionEffect: wo,
      useLayoutEffect: Co,
      useMemo: Eo,
      useReducer: Tr,
      useRef: go,
      useState: function () {
        return Tr(ht);
      },
      useDebugValue: Cs,
      useDeferredValue: function (A, e) {
        var t = XA();
        return yo(t, pA.memoizedState, A, e);
      },
      useTransition: function () {
        var A = Tr(ht)[0],
          e = XA().memoizedState;
        return [typeof A == "boolean" ? A : al(A), e];
      },
      useSyncExternalStore: Pf,
      useId: So,
      useHostTransitionStatus: vs,
      useFormState: Bo,
      useActionState: Bo,
      useOptimistic: function (A, e) {
        var t = XA();
        return no(t, pA, A, e);
      },
      useMemoCache: fs,
      useCacheRefresh: bo,
    };
  Es.useEffectEvent = ho;
  var Oo = {
    readContext: le,
    use: br,
    useCallback: Fo,
    useContext: le,
    useEffect: ws,
    useImperativeHandle: vo,
    useInsertionEffect: wo,
    useLayoutEffect: Co,
    useMemo: Eo,
    useReducer: gs,
    useRef: go,
    useState: function () {
      return gs(ht);
    },
    useDebugValue: Cs,
    useDeferredValue: function (A, e) {
      var t = XA();
      return pA === null ? Us(t, A, e) : yo(t, pA.memoizedState, A, e);
    },
    useTransition: function () {
      var A = gs(ht)[0],
        e = XA().memoizedState;
      return [typeof A == "boolean" ? A : al(A), e];
    },
    useSyncExternalStore: Pf,
    useId: So,
    useHostTransitionStatus: vs,
    useFormState: oo,
    useActionState: oo,
    useOptimistic: function (A, e) {
      var t = XA();
      return pA !== null
        ? no(t, pA, A, e)
        : ((t.baseState = A), [A, t.queue.dispatch]);
    },
    useMemoCache: fs,
    useCacheRefresh: bo,
  };
  Oo.useEffectEvent = ho;
  function ys(A, e, t, a) {
    (e = A.memoizedState),
      (t = t(a, e)),
      (t = t == null ? e : U({}, e, t)),
      (A.memoizedState = t),
      A.lanes === 0 && (A.updateQueue.baseState = t);
  }
  var ms = {
    enqueueSetState: function (A, e, t) {
      A = A._reactInternals;
      var a = De(),
        u = Nt(a);
      (u.payload = e),
        t != null && (u.callback = t),
        (e = Gt(A, u, a)),
        e !== null && (Fe(e, A, a), $n(e, A, a));
    },
    enqueueReplaceState: function (A, e, t) {
      A = A._reactInternals;
      var a = De(),
        u = Nt(a);
      (u.tag = 1),
        (u.payload = e),
        t != null && (u.callback = t),
        (e = Gt(A, u, a)),
        e !== null && (Fe(e, A, a), $n(e, A, a));
    },
    enqueueForceUpdate: function (A, e) {
      A = A._reactInternals;
      var t = De(),
        a = Nt(t);
      (a.tag = 2),
        e != null && (a.callback = e),
        (e = Gt(A, a, t)),
        e !== null && (Fe(e, A, t), $n(e, A, t));
    },
  };
  function Io(A, e, t, a, u, s, f) {
    return (
      (A = A.stateNode),
      typeof A.shouldComponentUpdate == "function"
        ? A.shouldComponentUpdate(a, s, f)
        : e.prototype && e.prototype.isPureReactComponent
        ? !Yn(t, a) || !Yn(u, s)
        : !0
    );
  }
  function Lo(A, e, t, a) {
    (A = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(t, a),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(t, a),
      e.state !== A && ms.enqueueReplaceState(e, e.state, null);
  }
  function pa(A, e) {
    var t = e;
    if ("ref" in e) {
      t = {};
      for (var a in e) a !== "ref" && (t[a] = e[a]);
    }
    if ((A = A.defaultProps)) {
      t === e && (t = U({}, t));
      for (var u in A) t[u] === void 0 && (t[u] = A[u]);
    }
    return t;
  }
  function Mo(A) {
    Br(A);
  }
  function Ro(A) {
    console.error(A);
  }
  function No(A) {
    Br(A);
  }
  function Or(A, e) {
    try {
      var t = A.onUncaughtError;
      t(e.value, { componentStack: e.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function Go(A, e, t) {
    try {
      var a = A.onCaughtError;
      a(t.value, {
        componentStack: t.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function Hs(A, e, t) {
    return (
      (t = Nt(t)),
      (t.tag = 3),
      (t.payload = { element: null }),
      (t.callback = function () {
        Or(A, e);
      }),
      t
    );
  }
  function _o(A) {
    return (A = Nt(A)), (A.tag = 3), A;
  }
  function Vo(A, e, t, a) {
    var u = t.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var s = a.value;
      (A.payload = function () {
        return u(s);
      }),
        (A.callback = function () {
          Go(e, t, a);
        });
    }
    var f = t.stateNode;
    f !== null &&
      typeof f.componentDidCatch == "function" &&
      (A.callback = function () {
        Go(e, t, a),
          typeof u != "function" &&
            (Jt === null ? (Jt = new Set([this])) : Jt.add(this));
        var Q = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: Q !== null ? Q : "",
        });
      });
  }
  function BC(A, e, t, a, u) {
    if (
      ((t.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((e = t.alternate),
        e !== null && Pa(e, t, u, !0),
        (t = be.current),
        t !== null)
      ) {
        switch (t.tag) {
          case 31:
          case 13:
            return (
              Ve === null ? Jr() : t.alternate === null && GA === 0 && (GA = 3),
              (t.flags &= -257),
              (t.flags |= 65536),
              (t.lanes = u),
              a === vr
                ? (t.flags |= 16384)
                : ((e = t.updateQueue),
                  e === null ? (t.updateQueue = new Set([a])) : e.add(a),
                  Ws(A, a, u)),
              !1
            );
          case 22:
            return (
              (t.flags |= 65536),
              a === vr
                ? (t.flags |= 16384)
                : ((e = t.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (t.updateQueue = e))
                    : ((t = e.retryQueue),
                      t === null ? (e.retryQueue = new Set([a])) : t.add(a)),
                  Ws(A, a, u)),
              !1
            );
        }
        throw Error(r(435, t.tag));
      }
      return Ws(A, a, u), Jr(), !1;
    }
    if (CA)
      return (
        (e = be.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = u),
            a !== Yu && ((A = Error(r(422), { cause: a })), jn(Re(A, t))))
          : (a !== Yu && ((e = Error(r(423), { cause: a })), jn(Re(e, t))),
            (A = A.current.alternate),
            (A.flags |= 65536),
            (u &= -u),
            (A.lanes |= u),
            (a = Re(a, t)),
            (u = Hs(A.stateNode, a, u)),
            ts(A, u),
            GA !== 4 && (GA = 2)),
        !1
      );
    var s = Error(r(520), { cause: a });
    if (
      ((s = Re(s, t)),
      ol === null ? (ol = [s]) : ol.push(s),
      GA !== 4 && (GA = 2),
      e === null)
    )
      return !0;
    (a = Re(a, t)), (t = e);
    do {
      switch (t.tag) {
        case 3:
          return (
            (t.flags |= 65536),
            (A = u & -u),
            (t.lanes |= A),
            (A = Hs(t.stateNode, a, A)),
            ts(t, A),
            !1
          );
        case 1:
          if (
            ((e = t.type),
            (s = t.stateNode),
            (t.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (s !== null &&
                  typeof s.componentDidCatch == "function" &&
                  (Jt === null || !Jt.has(s)))))
          )
            return (
              (t.flags |= 65536),
              (u &= -u),
              (t.lanes |= u),
              (u = _o(u)),
              Vo(u, A, t, a),
              ts(t, u),
              !1
            );
      }
      t = t.return;
    } while (t !== null);
    return !1;
  }
  var ps = Error(r(461)),
    qA = !1;
  function re(A, e, t, a) {
    e.child = A === null ? Yf(e, null, t, a) : ma(e, A.child, t, a);
  }
  function Xo(A, e, t, a, u) {
    t = t.render;
    var s = e.ref;
    if ("ref" in a) {
      var f = {};
      for (var Q in a) Q !== "ref" && (f[Q] = a[Q]);
    } else f = a;
    return (
      va(e),
      (a = us(A, e, t, f, s, u)),
      (Q = ss()),
      A !== null && !qA
        ? (cs(A, e, u), wt(A, e, u))
        : (CA && Q && Xu(e), (e.flags |= 1), re(A, e, a, u), e.child)
    );
  }
  function zo(A, e, t, a, u) {
    if (A === null) {
      var s = t.type;
      return typeof s == "function" &&
        !Gu(s) &&
        s.defaultProps === void 0 &&
        t.compare === null
        ? ((e.tag = 15), (e.type = s), Yo(A, e, s, a, u))
        : ((A = Qr(t.type, null, a, e, e.mode, u)),
          (A.ref = e.ref),
          (A.return = e),
          (e.child = A));
    }
    if (((s = A.child), !Is(A, u))) {
      var f = s.memoizedProps;
      if (
        ((t = t.compare), (t = t !== null ? t : Yn), t(f, a) && A.ref === e.ref)
      )
        return wt(A, e, u);
    }
    return (
      (e.flags |= 1),
      (A = Bt(s, a)),
      (A.ref = e.ref),
      (A.return = e),
      (e.child = A)
    );
  }
  function Yo(A, e, t, a, u) {
    if (A !== null) {
      var s = A.memoizedProps;
      if (Yn(s, a) && A.ref === e.ref)
        if (((qA = !1), (e.pendingProps = a = s), Is(A, u)))
          (A.flags & 131072) !== 0 && (qA = !0);
        else return (e.lanes = A.lanes), wt(A, e, u);
    }
    return Ss(A, e, t, a, u);
  }
  function Jo(A, e, t, a) {
    var u = a.children,
      s = A !== null ? A.memoizedState : null;
    if (
      (A === null &&
        e.stateNode === null &&
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      a.mode === "hidden")
    ) {
      if ((e.flags & 128) !== 0) {
        if (((s = s !== null ? s.baseLanes | t : t), A !== null)) {
          for (a = e.child = A.child, u = 0; a !== null; )
            (u = u | a.lanes | a.childLanes), (a = a.sibling);
          a = u & ~s;
        } else (a = 0), (e.child = null);
        return Zo(A, e, s, t, a);
      }
      if ((t & 536870912) !== 0)
        (e.memoizedState = { baseLanes: 0, cachePool: null }),
          A !== null && Ur(e, s !== null ? s.cachePool : null),
          s !== null ? jf(e, s) : ns(),
          qf(e);
      else
        return (
          (a = e.lanes = 536870912),
          Zo(A, e, s !== null ? s.baseLanes | t : t, t, a)
        );
    } else
      s !== null
        ? (Ur(e, s.cachePool), jf(e, s), Vt(), (e.memoizedState = null))
        : (A !== null && Ur(e, null), ns(), Vt());
    return re(A, e, u, t), e.child;
  }
  function rl(A, e) {
    return (
      (A !== null && A.tag === 22) ||
        e.stateNode !== null ||
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      e.sibling
    );
  }
  function Zo(A, e, t, a, u) {
    var s = Pu();
    return (
      (s = s === null ? null : { parent: ZA._currentValue, pool: s }),
      (e.memoizedState = { baseLanes: t, cachePool: s }),
      A !== null && Ur(e, null),
      ns(),
      qf(e),
      A !== null && Pa(A, e, a, !0),
      (e.childLanes = u),
      null
    );
  }
  function Ir(A, e) {
    return (
      (e = Mr({ mode: e.mode, children: e.children }, A.mode)),
      (e.ref = A.ref),
      (A.child = e),
      (e.return = A),
      e
    );
  }
  function jo(A, e, t) {
    return (
      ma(e, A.child, null, t),
      (A = Ir(e, e.pendingProps)),
      (A.flags |= 2),
      Te(e),
      (e.memoizedState = null),
      A
    );
  }
  function fC(A, e, t) {
    var a = e.pendingProps,
      u = (e.flags & 128) !== 0;
    if (((e.flags &= -129), A === null)) {
      if (CA) {
        if (a.mode === "hidden")
          return (A = Ir(e, a)), (e.lanes = 536870912), rl(null, A);
        if (
          (rs(e),
          (A = IA)
            ? ((A = rQ(A, _e)),
              (A = A !== null && A.data === "&" ? A : null),
              A !== null &&
                ((e.memoizedState = {
                  dehydrated: A,
                  treeContext: Ot !== null ? { id: et, overflow: tt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (t = Tf(A)),
                (t.return = e),
                (e.child = t),
                (ne = e),
                (IA = null)))
            : (A = null),
          A === null)
        )
          throw Lt(e);
        return (e.lanes = 536870912), null;
      }
      return Ir(e, a);
    }
    var s = A.memoizedState;
    if (s !== null) {
      var f = s.dehydrated;
      if ((rs(e), u))
        if (e.flags & 256) (e.flags &= -257), (e = jo(A, e, t));
        else if (e.memoizedState !== null)
          (e.child = A.child), (e.flags |= 128), (e = null);
        else throw Error(r(558));
      else if (
        (qA || Pa(A, e, t, !1), (u = (t & A.childLanes) !== 0), qA || u)
      ) {
        if (
          ((a = DA),
          a !== null && ((f = LB(a, t)), f !== 0 && f !== s.retryLane))
        )
          throw ((s.retryLane = f), wa(A, f), Fe(a, A, f), ps);
        Jr(), (e = jo(A, e, t));
      } else
        (A = s.treeContext),
          (IA = Xe(f.nextSibling)),
          (ne = e),
          (CA = !0),
          (It = null),
          (_e = !1),
          A !== null && Df(e, A),
          (e = Ir(e, a)),
          (e.flags |= 4096);
      return e;
    }
    return (
      (A = Bt(A.child, { mode: a.mode, children: a.children })),
      (A.ref = e.ref),
      (e.child = A),
      (A.return = e),
      A
    );
  }
  function Lr(A, e) {
    var t = e.ref;
    if (t === null) A !== null && A.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof t != "function" && typeof t != "object") throw Error(r(284));
      (A === null || A.ref !== t) && (e.flags |= 4194816);
    }
  }
  function Ss(A, e, t, a, u) {
    return (
      va(e),
      (t = us(A, e, t, a, void 0, u)),
      (a = ss()),
      A !== null && !qA
        ? (cs(A, e, u), wt(A, e, u))
        : (CA && a && Xu(e), (e.flags |= 1), re(A, e, t, u), e.child)
    );
  }
  function qo(A, e, t, a, u, s) {
    return (
      va(e),
      (e.updateQueue = null),
      (t = Wf(e, a, t, u)),
      kf(A),
      (a = ss()),
      A !== null && !qA
        ? (cs(A, e, s), wt(A, e, s))
        : (CA && a && Xu(e), (e.flags |= 1), re(A, e, t, s), e.child)
    );
  }
  function ko(A, e, t, a, u) {
    if ((va(e), e.stateNode === null)) {
      var s = ja,
        f = t.contextType;
      typeof f == "object" && f !== null && (s = le(f)),
        (s = new t(a, s)),
        (e.memoizedState =
          s.state !== null && s.state !== void 0 ? s.state : null),
        (s.updater = ms),
        (e.stateNode = s),
        (s._reactInternals = e),
        (s = e.stateNode),
        (s.props = a),
        (s.state = e.memoizedState),
        (s.refs = {}),
        As(e),
        (f = t.contextType),
        (s.context = typeof f == "object" && f !== null ? le(f) : ja),
        (s.state = e.memoizedState),
        (f = t.getDerivedStateFromProps),
        typeof f == "function" && (ys(e, t, f, a), (s.state = e.memoizedState)),
        typeof t.getDerivedStateFromProps == "function" ||
          typeof s.getSnapshotBeforeUpdate == "function" ||
          (typeof s.UNSAFE_componentWillMount != "function" &&
            typeof s.componentWillMount != "function") ||
          ((f = s.state),
          typeof s.componentWillMount == "function" && s.componentWillMount(),
          typeof s.UNSAFE_componentWillMount == "function" &&
            s.UNSAFE_componentWillMount(),
          f !== s.state && ms.enqueueReplaceState(s, s.state, null),
          el(e, a, s, u),
          Al(),
          (s.state = e.memoizedState)),
        typeof s.componentDidMount == "function" && (e.flags |= 4194308),
        (a = !0);
    } else if (A === null) {
      s = e.stateNode;
      var Q = e.memoizedProps,
        C = pa(t, Q);
      s.props = C;
      var H = s.context,
        T = t.contextType;
      (f = ja), typeof T == "object" && T !== null && (f = le(T));
      var D = t.getDerivedStateFromProps;
      (T =
        typeof D == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function"),
        (Q = e.pendingProps !== Q),
        T ||
          (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
            typeof s.componentWillReceiveProps != "function") ||
          ((Q || H !== f) && Lo(e, s, a, f)),
        (Rt = !1);
      var p = e.memoizedState;
      (s.state = p),
        el(e, a, s, u),
        Al(),
        (H = e.memoizedState),
        Q || p !== H || Rt
          ? (typeof D == "function" && (ys(e, t, D, a), (H = e.memoizedState)),
            (C = Rt || Io(e, t, C, a, p, H, f))
              ? (T ||
                  (typeof s.UNSAFE_componentWillMount != "function" &&
                    typeof s.componentWillMount != "function") ||
                  (typeof s.componentWillMount == "function" &&
                    s.componentWillMount(),
                  typeof s.UNSAFE_componentWillMount == "function" &&
                    s.UNSAFE_componentWillMount()),
                typeof s.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof s.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = a),
                (e.memoizedState = H)),
            (s.props = a),
            (s.state = H),
            (s.context = f),
            (a = C))
          : (typeof s.componentDidMount == "function" && (e.flags |= 4194308),
            (a = !1));
    } else {
      (s = e.stateNode),
        es(A, e),
        (f = e.memoizedProps),
        (T = pa(t, f)),
        (s.props = T),
        (D = e.pendingProps),
        (p = s.context),
        (H = t.contextType),
        (C = ja),
        typeof H == "object" && H !== null && (C = le(H)),
        (Q = t.getDerivedStateFromProps),
        (H =
          typeof Q == "function" ||
          typeof s.getSnapshotBeforeUpdate == "function") ||
          (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
            typeof s.componentWillReceiveProps != "function") ||
          ((f !== D || p !== C) && Lo(e, s, a, C)),
        (Rt = !1),
        (p = e.memoizedState),
        (s.state = p),
        el(e, a, s, u),
        Al();
      var S = e.memoizedState;
      f !== D ||
      p !== S ||
      Rt ||
      (A !== null && A.dependencies !== null && wr(A.dependencies))
        ? (typeof Q == "function" && (ys(e, t, Q, a), (S = e.memoizedState)),
          (T =
            Rt ||
            Io(e, t, T, a, p, S, C) ||
            (A !== null && A.dependencies !== null && wr(A.dependencies)))
            ? (H ||
                (typeof s.UNSAFE_componentWillUpdate != "function" &&
                  typeof s.componentWillUpdate != "function") ||
                (typeof s.componentWillUpdate == "function" &&
                  s.componentWillUpdate(a, S, C),
                typeof s.UNSAFE_componentWillUpdate == "function" &&
                  s.UNSAFE_componentWillUpdate(a, S, C)),
              typeof s.componentDidUpdate == "function" && (e.flags |= 4),
              typeof s.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof s.componentDidUpdate != "function" ||
                (f === A.memoizedProps && p === A.memoizedState) ||
                (e.flags |= 4),
              typeof s.getSnapshotBeforeUpdate != "function" ||
                (f === A.memoizedProps && p === A.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = a),
              (e.memoizedState = S)),
          (s.props = a),
          (s.state = S),
          (s.context = C),
          (a = T))
        : (typeof s.componentDidUpdate != "function" ||
            (f === A.memoizedProps && p === A.memoizedState) ||
            (e.flags |= 4),
          typeof s.getSnapshotBeforeUpdate != "function" ||
            (f === A.memoizedProps && p === A.memoizedState) ||
            (e.flags |= 1024),
          (a = !1));
    }
    return (
      (s = a),
      Lr(A, e),
      (a = (e.flags & 128) !== 0),
      s || a
        ? ((s = e.stateNode),
          (t =
            a && typeof t.getDerivedStateFromError != "function"
              ? null
              : s.render()),
          (e.flags |= 1),
          A !== null && a
            ? ((e.child = ma(e, A.child, null, u)),
              (e.child = ma(e, null, t, u)))
            : re(A, e, t, u),
          (e.memoizedState = s.state),
          (A = e.child))
        : (A = wt(A, e, u)),
      A
    );
  }
  function Wo(A, e, t, a) {
    return Ua(), (e.flags |= 256), re(A, e, t, a), e.child;
  }
  var bs = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Ts(A) {
    return { baseLanes: A, cachePool: Nf() };
  }
  function xs(A, e, t) {
    return (A = A !== null ? A.childLanes & ~t : 0), e && (A |= Ke), A;
  }
  function Po(A, e, t) {
    var a = e.pendingProps,
      u = !1,
      s = (e.flags & 128) !== 0,
      f;
    if (
      ((f = s) ||
        (f =
          A !== null && A.memoizedState === null ? !1 : (VA.current & 2) !== 0),
      f && ((u = !0), (e.flags &= -129)),
      (f = (e.flags & 32) !== 0),
      (e.flags &= -33),
      A === null)
    ) {
      if (CA) {
        if (
          (u ? _t(e) : Vt(),
          (A = IA)
            ? ((A = rQ(A, _e)),
              (A = A !== null && A.data !== "&" ? A : null),
              A !== null &&
                ((e.memoizedState = {
                  dehydrated: A,
                  treeContext: Ot !== null ? { id: et, overflow: tt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (t = Tf(A)),
                (t.return = e),
                (e.child = t),
                (ne = e),
                (IA = null)))
            : (A = null),
          A === null)
        )
          throw Lt(e);
        return oc(A) ? (e.lanes = 32) : (e.lanes = 536870912), null;
      }
      var Q = a.children;
      return (
        (a = a.fallback),
        u
          ? (Vt(),
            (u = e.mode),
            (Q = Mr({ mode: "hidden", children: Q }, u)),
            (a = Ca(a, u, t, null)),
            (Q.return = e),
            (a.return = e),
            (Q.sibling = a),
            (e.child = Q),
            (a = e.child),
            (a.memoizedState = Ts(t)),
            (a.childLanes = xs(A, f, t)),
            (e.memoizedState = bs),
            rl(null, a))
          : (_t(e), Ks(e, Q))
      );
    }
    var C = A.memoizedState;
    if (C !== null && ((Q = C.dehydrated), Q !== null)) {
      if (s)
        e.flags & 256
          ? (_t(e), (e.flags &= -257), (e = Ds(A, e, t)))
          : e.memoizedState !== null
          ? (Vt(), (e.child = A.child), (e.flags |= 128), (e = null))
          : (Vt(),
            (Q = a.fallback),
            (u = e.mode),
            (a = Mr({ mode: "visible", children: a.children }, u)),
            (Q = Ca(Q, u, t, null)),
            (Q.flags |= 2),
            (a.return = e),
            (Q.return = e),
            (a.sibling = Q),
            (e.child = a),
            ma(e, A.child, null, t),
            (a = e.child),
            (a.memoizedState = Ts(t)),
            (a.childLanes = xs(A, f, t)),
            (e.memoizedState = bs),
            (e = rl(null, a)));
      else if ((_t(e), oc(Q))) {
        if (((f = Q.nextSibling && Q.nextSibling.dataset), f)) var H = f.dgst;
        (f = H),
          (a = Error(r(419))),
          (a.stack = ""),
          (a.digest = f),
          jn({ value: a, source: null, stack: null }),
          (e = Ds(A, e, t));
      } else if (
        (qA || Pa(A, e, t, !1), (f = (t & A.childLanes) !== 0), qA || f)
      ) {
        if (
          ((f = DA),
          f !== null && ((a = LB(f, t)), a !== 0 && a !== C.retryLane))
        )
          throw ((C.retryLane = a), wa(A, a), Fe(f, A, a), ps);
        fc(Q) || Jr(), (e = Ds(A, e, t));
      } else
        fc(Q)
          ? ((e.flags |= 192), (e.child = A.child), (e = null))
          : ((A = C.treeContext),
            (IA = Xe(Q.nextSibling)),
            (ne = e),
            (CA = !0),
            (It = null),
            (_e = !1),
            A !== null && Df(e, A),
            (e = Ks(e, a.children)),
            (e.flags |= 4096));
      return e;
    }
    return u
      ? (Vt(),
        (Q = a.fallback),
        (u = e.mode),
        (C = A.child),
        (H = C.sibling),
        (a = Bt(C, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = C.subtreeFlags & 65011712),
        H !== null ? (Q = Bt(H, Q)) : ((Q = Ca(Q, u, t, null)), (Q.flags |= 2)),
        (Q.return = e),
        (a.return = e),
        (a.sibling = Q),
        (e.child = a),
        rl(null, a),
        (a = e.child),
        (Q = A.child.memoizedState),
        Q === null
          ? (Q = Ts(t))
          : ((u = Q.cachePool),
            u !== null
              ? ((C = ZA._currentValue),
                (u = u.parent !== C ? { parent: C, pool: C } : u))
              : (u = Nf()),
            (Q = { baseLanes: Q.baseLanes | t, cachePool: u })),
        (a.memoizedState = Q),
        (a.childLanes = xs(A, f, t)),
        (e.memoizedState = bs),
        rl(A.child, a))
      : (_t(e),
        (t = A.child),
        (A = t.sibling),
        (t = Bt(t, { mode: "visible", children: a.children })),
        (t.return = e),
        (t.sibling = null),
        A !== null &&
          ((f = e.deletions),
          f === null ? ((e.deletions = [A]), (e.flags |= 16)) : f.push(A)),
        (e.child = t),
        (e.memoizedState = null),
        t);
  }
  function Ks(A, e) {
    return (
      (e = Mr({ mode: "visible", children: e }, A.mode)),
      (e.return = A),
      (A.child = e)
    );
  }
  function Mr(A, e) {
    return (A = Se(22, A, null, e)), (A.lanes = 0), A;
  }
  function Ds(A, e, t) {
    return (
      ma(e, A.child, null, t),
      (A = Ks(e, e.pendingProps.children)),
      (A.flags |= 2),
      (e.memoizedState = null),
      A
    );
  }
  function $o(A, e, t) {
    A.lanes |= e;
    var a = A.alternate;
    a !== null && (a.lanes |= e), ju(A.return, e, t);
  }
  function Os(A, e, t, a, u, s) {
    var f = A.memoizedState;
    f === null
      ? (A.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: t,
          tailMode: u,
          treeForkCount: s,
        })
      : ((f.isBackwards = e),
        (f.rendering = null),
        (f.renderingStartTime = 0),
        (f.last = a),
        (f.tail = t),
        (f.tailMode = u),
        (f.treeForkCount = s));
  }
  function Ag(A, e, t) {
    var a = e.pendingProps,
      u = a.revealOrder,
      s = a.tail;
    a = a.children;
    var f = VA.current,
      Q = (f & 2) !== 0;
    if (
      (Q ? ((f = (f & 1) | 2), (e.flags |= 128)) : (f &= 1),
      G(VA, f),
      re(A, e, a, t),
      (a = CA ? Zn : 0),
      !Q && A !== null && (A.flags & 128) !== 0)
    )
      A: for (A = e.child; A !== null; ) {
        if (A.tag === 13) A.memoizedState !== null && $o(A, t, e);
        else if (A.tag === 19) $o(A, t, e);
        else if (A.child !== null) {
          (A.child.return = A), (A = A.child);
          continue;
        }
        if (A === e) break A;
        for (; A.sibling === null; ) {
          if (A.return === null || A.return === e) break A;
          A = A.return;
        }
        (A.sibling.return = A.return), (A = A.sibling);
      }
    switch (u) {
      case "forwards":
        for (t = e.child, u = null; t !== null; )
          (A = t.alternate),
            A !== null && mr(A) === null && (u = t),
            (t = t.sibling);
        (t = u),
          t === null
            ? ((u = e.child), (e.child = null))
            : ((u = t.sibling), (t.sibling = null)),
          Os(e, !1, u, t, s, a);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (t = null, u = e.child, e.child = null; u !== null; ) {
          if (((A = u.alternate), A !== null && mr(A) === null)) {
            e.child = u;
            break;
          }
          (A = u.sibling), (u.sibling = t), (t = u), (u = A);
        }
        Os(e, !0, t, null, s, a);
        break;
      case "together":
        Os(e, !1, null, null, void 0, a);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function wt(A, e, t) {
    if (
      (A !== null && (e.dependencies = A.dependencies),
      (Yt |= e.lanes),
      (t & e.childLanes) === 0)
    )
      if (A !== null) {
        if ((Pa(A, e, t, !1), (t & e.childLanes) === 0)) return null;
      } else return null;
    if (A !== null && e.child !== A.child) throw Error(r(153));
    if (e.child !== null) {
      for (
        A = e.child, t = Bt(A, A.pendingProps), e.child = t, t.return = e;
        A.sibling !== null;

      )
        (A = A.sibling),
          (t = t.sibling = Bt(A, A.pendingProps)),
          (t.return = e);
      t.sibling = null;
    }
    return e.child;
  }
  function Is(A, e) {
    return (A.lanes & e) !== 0
      ? !0
      : ((A = A.dependencies), !!(A !== null && wr(A)));
  }
  function oC(A, e, t) {
    switch (e.tag) {
      case 3:
        oe(e, e.stateNode.containerInfo),
          Mt(e, ZA, A.memoizedState.cache),
          Ua();
        break;
      case 27:
      case 5:
        Kn(e);
        break;
      case 4:
        oe(e, e.stateNode.containerInfo);
        break;
      case 10:
        Mt(e, e.type, e.memoizedProps.value);
        break;
      case 31:
        if (e.memoizedState !== null) return (e.flags |= 128), rs(e), null;
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (_t(e), (e.flags |= 128), null)
            : (t & e.child.childLanes) !== 0
            ? Po(A, e, t)
            : (_t(e), (A = wt(A, e, t)), A !== null ? A.sibling : null);
        _t(e);
        break;
      case 19:
        var u = (A.flags & 128) !== 0;
        if (
          ((a = (t & e.childLanes) !== 0),
          a || (Pa(A, e, t, !1), (a = (t & e.childLanes) !== 0)),
          u)
        ) {
          if (a) return Ag(A, e, t);
          e.flags |= 128;
        }
        if (
          ((u = e.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          G(VA, VA.current),
          a)
        )
          break;
        return null;
      case 22:
        return (e.lanes = 0), Jo(A, e, t, e.pendingProps);
      case 24:
        Mt(e, ZA, A.memoizedState.cache);
    }
    return wt(A, e, t);
  }
  function eg(A, e, t) {
    if (A !== null)
      if (A.memoizedProps !== e.pendingProps) qA = !0;
      else {
        if (!Is(A, t) && (e.flags & 128) === 0) return (qA = !1), oC(A, e, t);
        qA = (A.flags & 131072) !== 0;
      }
    else (qA = !1), CA && (e.flags & 1048576) !== 0 && Kf(e, Zn, e.index);
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        A: {
          var a = e.pendingProps;
          if (((A = Ea(e.elementType)), (e.type = A), typeof A == "function"))
            Gu(A)
              ? ((a = pa(A, a)), (e.tag = 1), (e = ko(null, e, A, a, t)))
              : ((e.tag = 0), (e = Ss(null, e, A, a, t)));
          else {
            if (A != null) {
              var u = A.$$typeof;
              if (u === z) {
                (e.tag = 11), (e = Xo(null, e, A, a, t));
                break A;
              } else if (u === V) {
                (e.tag = 14), (e = zo(null, e, A, a, t));
                break A;
              }
            }
            throw ((e = KA(A) || A), Error(r(306, e, "")));
          }
        }
        return e;
      case 0:
        return Ss(A, e, e.type, e.pendingProps, t);
      case 1:
        return (a = e.type), (u = pa(a, e.pendingProps)), ko(A, e, a, u, t);
      case 3:
        A: {
          if ((oe(e, e.stateNode.containerInfo), A === null))
            throw Error(r(387));
          a = e.pendingProps;
          var s = e.memoizedState;
          (u = s.element), es(A, e), el(e, a, null, t);
          var f = e.memoizedState;
          if (
            ((a = f.cache),
            Mt(e, ZA, a),
            a !== s.cache && qu(e, [ZA], t, !0),
            Al(),
            (a = f.element),
            s.isDehydrated)
          )
            if (
              ((s = { element: a, isDehydrated: !1, cache: f.cache }),
              (e.updateQueue.baseState = s),
              (e.memoizedState = s),
              e.flags & 256)
            ) {
              e = Wo(A, e, a, t);
              break A;
            } else if (a !== u) {
              (u = Re(Error(r(424)), e)), jn(u), (e = Wo(A, e, a, t));
              break A;
            } else {
              switch (((A = e.stateNode.containerInfo), A.nodeType)) {
                case 9:
                  A = A.body;
                  break;
                default:
                  A = A.nodeName === "HTML" ? A.ownerDocument.body : A;
              }
              for (
                IA = Xe(A.firstChild),
                  ne = e,
                  CA = !0,
                  It = null,
                  _e = !0,
                  t = Yf(e, null, a, t),
                  e.child = t;
                t;

              )
                (t.flags = (t.flags & -3) | 4096), (t = t.sibling);
            }
          else {
            if ((Ua(), a === u)) {
              e = wt(A, e, t);
              break A;
            }
            re(A, e, a, t);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          Lr(A, e),
          A === null
            ? (t = fQ(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = t)
              : CA ||
                ((t = e.type),
                (A = e.pendingProps),
                (a = $r(lA.current).createElement(t)),
                (a[ae] = e),
                (a[he] = A),
                ie(a, t, A),
                Ae(a),
                (e.stateNode = a))
            : (e.memoizedState = fQ(
                e.type,
                A.memoizedProps,
                e.pendingProps,
                A.memoizedState
              )),
          null
        );
      case 27:
        return (
          Kn(e),
          A === null &&
            CA &&
            ((a = e.stateNode = sQ(e.type, e.pendingProps, lA.current)),
            (ne = e),
            (_e = !0),
            (u = IA),
            kt(e.type) ? ((gc = u), (IA = Xe(a.firstChild))) : (IA = u)),
          re(A, e, e.pendingProps.children, t),
          Lr(A, e),
          A === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          A === null &&
            CA &&
            ((u = a = IA) &&
              ((a = XC(a, e.type, e.pendingProps, _e)),
              a !== null
                ? ((e.stateNode = a),
                  (ne = e),
                  (IA = Xe(a.firstChild)),
                  (_e = !1),
                  (u = !0))
                : (u = !1)),
            u || Lt(e)),
          Kn(e),
          (u = e.type),
          (s = e.pendingProps),
          (f = A !== null ? A.memoizedProps : null),
          (a = s.children),
          sc(u, s) ? (a = null) : f !== null && sc(u, f) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((u = us(A, e, nC, null, null, t)), (vl._currentValue = u)),
          Lr(A, e),
          re(A, e, a, t),
          e.child
        );
      case 6:
        return (
          A === null &&
            CA &&
            ((A = t = IA) &&
              ((t = zC(t, e.pendingProps, _e)),
              t !== null
                ? ((e.stateNode = t), (ne = e), (IA = null), (A = !0))
                : (A = !1)),
            A || Lt(e)),
          null
        );
      case 13:
        return Po(A, e, t);
      case 4:
        return (
          oe(e, e.stateNode.containerInfo),
          (a = e.pendingProps),
          A === null ? (e.child = ma(e, null, a, t)) : re(A, e, a, t),
          e.child
        );
      case 11:
        return Xo(A, e, e.type, e.pendingProps, t);
      case 7:
        return re(A, e, e.pendingProps, t), e.child;
      case 8:
        return re(A, e, e.pendingProps.children, t), e.child;
      case 12:
        return re(A, e, e.pendingProps.children, t), e.child;
      case 10:
        return (
          (a = e.pendingProps),
          Mt(e, e.type, a.value),
          re(A, e, a.children, t),
          e.child
        );
      case 9:
        return (
          (u = e.type._context),
          (a = e.pendingProps.children),
          va(e),
          (u = le(u)),
          (a = a(u)),
          (e.flags |= 1),
          re(A, e, a, t),
          e.child
        );
      case 14:
        return zo(A, e, e.type, e.pendingProps, t);
      case 15:
        return Yo(A, e, e.type, e.pendingProps, t);
      case 19:
        return Ag(A, e, t);
      case 31:
        return fC(A, e, t);
      case 22:
        return Jo(A, e, t, e.pendingProps);
      case 24:
        return (
          va(e),
          (a = le(ZA)),
          A === null
            ? ((u = Pu()),
              u === null &&
                ((u = DA),
                (s = ku()),
                (u.pooledCache = s),
                s.refCount++,
                s !== null && (u.pooledCacheLanes |= t),
                (u = s)),
              (e.memoizedState = { parent: a, cache: u }),
              As(e),
              Mt(e, ZA, u))
            : ((A.lanes & t) !== 0 && (es(A, e), el(e, null, null, t), Al()),
              (u = A.memoizedState),
              (s = e.memoizedState),
              u.parent !== a
                ? ((u = { parent: a, cache: a }),
                  (e.memoizedState = u),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = u),
                  Mt(e, ZA, a))
                : ((a = s.cache),
                  Mt(e, ZA, a),
                  a !== u.cache && qu(e, [ZA], t, !0))),
          re(A, e, e.pendingProps.children, t),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(r(156, e.tag));
  }
  function Ct(A) {
    A.flags |= 4;
  }
  function Ls(A, e, t, a, u) {
    if (((e = (A.mode & 32) !== 0) && (e = !1), e)) {
      if (((A.flags |= 16777216), (u & 335544128) === u))
        if (A.stateNode.complete) A.flags |= 8192;
        else if (Sg()) A.flags |= 8192;
        else throw ((ya = vr), $u);
    } else A.flags &= -16777217;
  }
  function tg(A, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      A.flags &= -16777217;
    else if (((A.flags |= 16777216), !wQ(e)))
      if (Sg()) A.flags |= 8192;
      else throw ((ya = vr), $u);
  }
  function Rr(A, e) {
    e !== null && (A.flags |= 4),
      A.flags & 16384 &&
        ((e = A.tag !== 22 ? DB() : 536870912), (A.lanes |= e), (Bn |= e));
  }
  function il(A, e) {
    if (!CA)
      switch (A.tailMode) {
        case "hidden":
          e = A.tail;
          for (var t = null; e !== null; )
            e.alternate !== null && (t = e), (e = e.sibling);
          t === null ? (A.tail = null) : (t.sibling = null);
          break;
        case "collapsed":
          t = A.tail;
          for (var a = null; t !== null; )
            t.alternate !== null && (a = t), (t = t.sibling);
          a === null
            ? e || A.tail === null
              ? (A.tail = null)
              : (A.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function LA(A) {
    var e = A.alternate !== null && A.alternate.child === A.child,
      t = 0,
      a = 0;
    if (e)
      for (var u = A.child; u !== null; )
        (t |= u.lanes | u.childLanes),
          (a |= u.subtreeFlags & 65011712),
          (a |= u.flags & 65011712),
          (u.return = A),
          (u = u.sibling);
    else
      for (u = A.child; u !== null; )
        (t |= u.lanes | u.childLanes),
          (a |= u.subtreeFlags),
          (a |= u.flags),
          (u.return = A),
          (u = u.sibling);
    return (A.subtreeFlags |= a), (A.childLanes = t), e;
  }
  function gC(A, e, t) {
    var a = e.pendingProps;
    switch ((zu(e), e.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return LA(e), null;
      case 1:
        return LA(e), null;
      case 3:
        return (
          (t = e.stateNode),
          (a = null),
          A !== null && (a = A.memoizedState.cache),
          e.memoizedState.cache !== a && (e.flags |= 2048),
          gt(ZA),
          _A(),
          t.pendingContext &&
            ((t.context = t.pendingContext), (t.pendingContext = null)),
          (A === null || A.child === null) &&
            (Wa(e)
              ? Ct(e)
              : A === null ||
                (A.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), Ju())),
          LA(e),
          null
        );
      case 26:
        var u = e.type,
          s = e.memoizedState;
        return (
          A === null
            ? (Ct(e),
              s !== null ? (LA(e), tg(e, s)) : (LA(e), Ls(e, u, null, a, t)))
            : s
            ? s !== A.memoizedState
              ? (Ct(e), LA(e), tg(e, s))
              : (LA(e), (e.flags &= -16777217))
            : ((A = A.memoizedProps),
              A !== a && Ct(e),
              LA(e),
              Ls(e, u, A, a, t)),
          null
        );
      case 27:
        if (
          (ql(e),
          (t = lA.current),
          (u = e.type),
          A !== null && e.stateNode != null)
        )
          A.memoizedProps !== a && Ct(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(r(166));
            return LA(e), null;
          }
          (A = Z.current),
            Wa(e) ? Of(e) : ((A = sQ(u, a, t)), (e.stateNode = A), Ct(e));
        }
        return LA(e), null;
      case 5:
        if ((ql(e), (u = e.type), A !== null && e.stateNode != null))
          A.memoizedProps !== a && Ct(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(r(166));
            return LA(e), null;
          }
          if (((s = Z.current), Wa(e))) Of(e);
          else {
            var f = $r(lA.current);
            switch (s) {
              case 1:
                s = f.createElementNS("http://www.w3.org/2000/svg", u);
                break;
              case 2:
                s = f.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                break;
              default:
                switch (u) {
                  case "svg":
                    s = f.createElementNS("http://www.w3.org/2000/svg", u);
                    break;
                  case "math":
                    s = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    (s = f.createElement("div")),
                      (s.innerHTML = "<script></script>"),
                      (s = s.removeChild(s.firstChild));
                    break;
                  case "select":
                    (s =
                      typeof a.is == "string"
                        ? f.createElement("select", { is: a.is })
                        : f.createElement("select")),
                      a.multiple
                        ? (s.multiple = !0)
                        : a.size && (s.size = a.size);
                    break;
                  default:
                    s =
                      typeof a.is == "string"
                        ? f.createElement(u, { is: a.is })
                        : f.createElement(u);
                }
            }
            (s[ae] = e), (s[he] = a);
            A: for (f = e.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6) s.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                (f.child.return = f), (f = f.child);
                continue;
              }
              if (f === e) break A;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === e) break A;
                f = f.return;
              }
              (f.sibling.return = f.return), (f = f.sibling);
            }
            e.stateNode = s;
            A: switch ((ie(s, u, a), u)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break A;
              case "img":
                a = !0;
                break A;
              default:
                a = !1;
            }
            a && Ct(e);
          }
        }
        return (
          LA(e),
          Ls(e, e.type, A === null ? null : A.memoizedProps, e.pendingProps, t),
          null
        );
      case 6:
        if (A && e.stateNode != null) A.memoizedProps !== a && Ct(e);
        else {
          if (typeof a != "string" && e.stateNode === null) throw Error(r(166));
          if (((A = lA.current), Wa(e))) {
            if (
              ((A = e.stateNode),
              (t = e.memoizedProps),
              (a = null),
              (u = ne),
              u !== null)
            )
              switch (u.tag) {
                case 27:
                case 5:
                  a = u.memoizedProps;
              }
            (A[ae] = e),
              (A = !!(
                A.nodeValue === t ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                Pg(A.nodeValue, t)
              )),
              A || Lt(e, !0);
          } else (A = $r(A).createTextNode(a)), (A[ae] = e), (e.stateNode = A);
        }
        return LA(e), null;
      case 31:
        if (((t = e.memoizedState), A === null || A.memoizedState !== null)) {
          if (((a = Wa(e)), t !== null)) {
            if (A === null) {
              if (!a) throw Error(r(318));
              if (
                ((A = e.memoizedState),
                (A = A !== null ? A.dehydrated : null),
                !A)
              )
                throw Error(r(557));
              A[ae] = e;
            } else
              Ua(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4);
            LA(e), (A = !1);
          } else
            (t = Ju()),
              A !== null &&
                A.memoizedState !== null &&
                (A.memoizedState.hydrationErrors = t),
              (A = !0);
          if (!A) return e.flags & 256 ? (Te(e), e) : (Te(e), null);
          if ((e.flags & 128) !== 0) throw Error(r(558));
        }
        return LA(e), null;
      case 13:
        if (
          ((a = e.memoizedState),
          A === null ||
            (A.memoizedState !== null && A.memoizedState.dehydrated !== null))
        ) {
          if (((u = Wa(e)), a !== null && a.dehydrated !== null)) {
            if (A === null) {
              if (!u) throw Error(r(318));
              if (
                ((u = e.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(r(317));
              u[ae] = e;
            } else
              Ua(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4);
            LA(e), (u = !1);
          } else
            (u = Ju()),
              A !== null &&
                A.memoizedState !== null &&
                (A.memoizedState.hydrationErrors = u),
              (u = !0);
          if (!u) return e.flags & 256 ? (Te(e), e) : (Te(e), null);
        }
        return (
          Te(e),
          (e.flags & 128) !== 0
            ? ((e.lanes = t), e)
            : ((t = a !== null),
              (A = A !== null && A.memoizedState !== null),
              t &&
                ((a = e.child),
                (u = null),
                a.alternate !== null &&
                  a.alternate.memoizedState !== null &&
                  a.alternate.memoizedState.cachePool !== null &&
                  (u = a.alternate.memoizedState.cachePool.pool),
                (s = null),
                a.memoizedState !== null &&
                  a.memoizedState.cachePool !== null &&
                  (s = a.memoizedState.cachePool.pool),
                s !== u && (a.flags |= 2048)),
              t !== A && t && (e.child.flags |= 8192),
              Rr(e, e.updateQueue),
              LA(e),
              null)
        );
      case 4:
        return _A(), A === null && nc(e.stateNode.containerInfo), LA(e), null;
      case 10:
        return gt(e.type), LA(e), null;
      case 19:
        if ((x(VA), (a = e.memoizedState), a === null)) return LA(e), null;
        if (((u = (e.flags & 128) !== 0), (s = a.rendering), s === null))
          if (u) il(a, !1);
          else {
            if (GA !== 0 || (A !== null && (A.flags & 128) !== 0))
              for (A = e.child; A !== null; ) {
                if (((s = mr(A)), s !== null)) {
                  for (
                    e.flags |= 128,
                      il(a, !1),
                      A = s.updateQueue,
                      e.updateQueue = A,
                      Rr(e, A),
                      e.subtreeFlags = 0,
                      A = t,
                      t = e.child;
                    t !== null;

                  )
                    bf(t, A), (t = t.sibling);
                  return (
                    G(VA, (VA.current & 1) | 2),
                    CA && ft(e, a.treeForkCount),
                    e.child
                  );
                }
                A = A.sibling;
              }
            a.tail !== null &&
              ye() > Xr &&
              ((e.flags |= 128), (u = !0), il(a, !1), (e.lanes = 4194304));
          }
        else {
          if (!u)
            if (((A = mr(s)), A !== null)) {
              if (
                ((e.flags |= 128),
                (u = !0),
                (A = A.updateQueue),
                (e.updateQueue = A),
                Rr(e, A),
                il(a, !0),
                a.tail === null &&
                  a.tailMode === "hidden" &&
                  !s.alternate &&
                  !CA)
              )
                return LA(e), null;
            } else
              2 * ye() - a.renderingStartTime > Xr &&
                t !== 536870912 &&
                ((e.flags |= 128), (u = !0), il(a, !1), (e.lanes = 4194304));
          a.isBackwards
            ? ((s.sibling = e.child), (e.child = s))
            : ((A = a.last),
              A !== null ? (A.sibling = s) : (e.child = s),
              (a.last = s));
        }
        return a.tail !== null
          ? ((A = a.tail),
            (a.rendering = A),
            (a.tail = A.sibling),
            (a.renderingStartTime = ye()),
            (A.sibling = null),
            (t = VA.current),
            G(VA, u ? (t & 1) | 2 : t & 1),
            CA && ft(e, a.treeForkCount),
            A)
          : (LA(e), null);
      case 22:
      case 23:
        return (
          Te(e),
          ls(),
          (a = e.memoizedState !== null),
          A !== null
            ? (A.memoizedState !== null) !== a && (e.flags |= 8192)
            : a && (e.flags |= 8192),
          a
            ? (t & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (LA(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : LA(e),
          (t = e.updateQueue),
          t !== null && Rr(e, t.retryQueue),
          (t = null),
          A !== null &&
            A.memoizedState !== null &&
            A.memoizedState.cachePool !== null &&
            (t = A.memoizedState.cachePool.pool),
          (a = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (a = e.memoizedState.cachePool.pool),
          a !== t && (e.flags |= 2048),
          A !== null && x(Fa),
          null
        );
      case 24:
        return (
          (t = null),
          A !== null && (t = A.memoizedState.cache),
          e.memoizedState.cache !== t && (e.flags |= 2048),
          gt(ZA),
          LA(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, e.tag));
  }
  function QC(A, e) {
    switch ((zu(e), e.tag)) {
      case 1:
        return (
          (A = e.flags), A & 65536 ? ((e.flags = (A & -65537) | 128), e) : null
        );
      case 3:
        return (
          gt(ZA),
          _A(),
          (A = e.flags),
          (A & 65536) !== 0 && (A & 128) === 0
            ? ((e.flags = (A & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return ql(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if ((Te(e), e.alternate === null)) throw Error(r(340));
          Ua();
        }
        return (
          (A = e.flags), A & 65536 ? ((e.flags = (A & -65537) | 128), e) : null
        );
      case 13:
        if (
          (Te(e), (A = e.memoizedState), A !== null && A.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(r(340));
          Ua();
        }
        return (
          (A = e.flags), A & 65536 ? ((e.flags = (A & -65537) | 128), e) : null
        );
      case 19:
        return x(VA), null;
      case 4:
        return _A(), null;
      case 10:
        return gt(e.type), null;
      case 22:
      case 23:
        return (
          Te(e),
          ls(),
          A !== null && x(Fa),
          (A = e.flags),
          A & 65536 ? ((e.flags = (A & -65537) | 128), e) : null
        );
      case 24:
        return gt(ZA), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function ag(A, e) {
    switch ((zu(e), e.tag)) {
      case 3:
        gt(ZA), _A();
        break;
      case 26:
      case 27:
      case 5:
        ql(e);
        break;
      case 4:
        _A();
        break;
      case 31:
        e.memoizedState !== null && Te(e);
        break;
      case 13:
        Te(e);
        break;
      case 19:
        x(VA);
        break;
      case 10:
        gt(e.type);
        break;
      case 22:
      case 23:
        Te(e), ls(), A !== null && x(Fa);
        break;
      case 24:
        gt(ZA);
    }
  }
  function ul(A, e) {
    try {
      var t = e.updateQueue,
        a = t !== null ? t.lastEffect : null;
      if (a !== null) {
        var u = a.next;
        t = u;
        do {
          if ((t.tag & A) === A) {
            a = void 0;
            var s = t.create,
              f = t.inst;
            (a = s()), (f.destroy = a);
          }
          t = t.next;
        } while (t !== u);
      }
    } catch (Q) {
      mA(e, e.return, Q);
    }
  }
  function Xt(A, e, t) {
    try {
      var a = e.updateQueue,
        u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var s = u.next;
        a = s;
        do {
          if ((a.tag & A) === A) {
            var f = a.inst,
              Q = f.destroy;
            if (Q !== void 0) {
              (f.destroy = void 0), (u = e);
              var C = t,
                H = Q;
              try {
                H();
              } catch (T) {
                mA(u, C, T);
              }
            }
          }
          a = a.next;
        } while (a !== s);
      }
    } catch (T) {
      mA(e, e.return, T);
    }
  }
  function ng(A) {
    var e = A.updateQueue;
    if (e !== null) {
      var t = A.stateNode;
      try {
        Zf(e, t);
      } catch (a) {
        mA(A, A.return, a);
      }
    }
  }
  function lg(A, e, t) {
    (t.props = pa(A.type, A.memoizedProps)), (t.state = A.memoizedState);
    try {
      t.componentWillUnmount();
    } catch (a) {
      mA(A, e, a);
    }
  }
  function sl(A, e) {
    try {
      var t = A.ref;
      if (t !== null) {
        switch (A.tag) {
          case 26:
          case 27:
          case 5:
            var a = A.stateNode;
            break;
          case 30:
            a = A.stateNode;
            break;
          default:
            a = A.stateNode;
        }
        typeof t == "function" ? (A.refCleanup = t(a)) : (t.current = a);
      }
    } catch (u) {
      mA(A, e, u);
    }
  }
  function at(A, e) {
    var t = A.ref,
      a = A.refCleanup;
    if (t !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (u) {
          mA(A, e, u);
        } finally {
          (A.refCleanup = null),
            (A = A.alternate),
            A != null && (A.refCleanup = null);
        }
      else if (typeof t == "function")
        try {
          t(null);
        } catch (u) {
          mA(A, e, u);
        }
      else t.current = null;
  }
  function rg(A) {
    var e = A.type,
      t = A.memoizedProps,
      a = A.stateNode;
    try {
      A: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          t.autoFocus && a.focus();
          break A;
        case "img":
          t.src ? (a.src = t.src) : t.srcSet && (a.srcset = t.srcSet);
      }
    } catch (u) {
      mA(A, A.return, u);
    }
  }
  function Ms(A, e, t) {
    try {
      var a = A.stateNode;
      MC(a, A.type, t, e), (a[he] = e);
    } catch (u) {
      mA(A, A.return, u);
    }
  }
  function ig(A) {
    return (
      A.tag === 5 ||
      A.tag === 3 ||
      A.tag === 26 ||
      (A.tag === 27 && kt(A.type)) ||
      A.tag === 4
    );
  }
  function Rs(A) {
    A: for (;;) {
      for (; A.sibling === null; ) {
        if (A.return === null || ig(A.return)) return null;
        A = A.return;
      }
      for (
        A.sibling.return = A.return, A = A.sibling;
        A.tag !== 5 && A.tag !== 6 && A.tag !== 18;

      ) {
        if (
          (A.tag === 27 && kt(A.type)) ||
          A.flags & 2 ||
          A.child === null ||
          A.tag === 4
        )
          continue A;
        (A.child.return = A), (A = A.child);
      }
      if (!(A.flags & 2)) return A.stateNode;
    }
  }
  function Ns(A, e, t) {
    var a = A.tag;
    if (a === 5 || a === 6)
      (A = A.stateNode),
        e
          ? (t.nodeType === 9
              ? t.body
              : t.nodeName === "HTML"
              ? t.ownerDocument.body
              : t
            ).insertBefore(A, e)
          : ((e =
              t.nodeType === 9
                ? t.body
                : t.nodeName === "HTML"
                ? t.ownerDocument.body
                : t),
            e.appendChild(A),
            (t = t._reactRootContainer),
            t != null || e.onclick !== null || (e.onclick = st));
    else if (
      a !== 4 &&
      (a === 27 && kt(A.type) && ((t = A.stateNode), (e = null)),
      (A = A.child),
      A !== null)
    )
      for (Ns(A, e, t), A = A.sibling; A !== null; )
        Ns(A, e, t), (A = A.sibling);
  }
  function Nr(A, e, t) {
    var a = A.tag;
    if (a === 5 || a === 6)
      (A = A.stateNode), e ? t.insertBefore(A, e) : t.appendChild(A);
    else if (
      a !== 4 &&
      (a === 27 && kt(A.type) && (t = A.stateNode), (A = A.child), A !== null)
    )
      for (Nr(A, e, t), A = A.sibling; A !== null; )
        Nr(A, e, t), (A = A.sibling);
  }
  function ug(A) {
    var e = A.stateNode,
      t = A.memoizedProps;
    try {
      for (var a = A.type, u = e.attributes; u.length; )
        e.removeAttributeNode(u[0]);
      ie(e, a, t), (e[ae] = A), (e[he] = t);
    } catch (s) {
      mA(A, A.return, s);
    }
  }
  var Ut = !1,
    kA = !1,
    Gs = !1,
    sg = typeof WeakSet == "function" ? WeakSet : Set,
    ee = null;
  function hC(A, e) {
    if (((A = A.containerInfo), (ic = ri), (A = df(A)), Du(A))) {
      if ("selectionStart" in A)
        var t = { start: A.selectionStart, end: A.selectionEnd };
      else
        A: {
          t = ((t = A.ownerDocument) && t.defaultView) || window;
          var a = t.getSelection && t.getSelection();
          if (a && a.rangeCount !== 0) {
            t = a.anchorNode;
            var u = a.anchorOffset,
              s = a.focusNode;
            a = a.focusOffset;
            try {
              t.nodeType, s.nodeType;
            } catch {
              t = null;
              break A;
            }
            var f = 0,
              Q = -1,
              C = -1,
              H = 0,
              T = 0,
              D = A,
              p = null;
            e: for (;;) {
              for (
                var S;
                D !== t || (u !== 0 && D.nodeType !== 3) || (Q = f + u),
                  D !== s || (a !== 0 && D.nodeType !== 3) || (C = f + a),
                  D.nodeType === 3 && (f += D.nodeValue.length),
                  (S = D.firstChild) !== null;

              )
                (p = D), (D = S);
              for (;;) {
                if (D === A) break e;
                if (
                  (p === t && ++H === u && (Q = f),
                  p === s && ++T === a && (C = f),
                  (S = D.nextSibling) !== null)
                )
                  break;
                (D = p), (p = D.parentNode);
              }
              D = S;
            }
            t = Q === -1 || C === -1 ? null : { start: Q, end: C };
          } else t = null;
        }
      t = t || { start: 0, end: 0 };
    } else t = null;
    for (
      uc = { focusedElem: A, selectionRange: t }, ri = !1, ee = e;
      ee !== null;

    )
      if (
        ((e = ee), (A = e.child), (e.subtreeFlags & 1028) !== 0 && A !== null)
      )
        (A.return = e), (ee = A);
      else
        for (; ee !== null; ) {
          switch (((e = ee), (s = e.alternate), (A = e.flags), e.tag)) {
            case 0:
              if (
                (A & 4) !== 0 &&
                ((A = e.updateQueue),
                (A = A !== null ? A.events : null),
                A !== null)
              )
                for (t = 0; t < A.length; t++)
                  (u = A[t]), (u.ref.impl = u.nextImpl);
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((A & 1024) !== 0 && s !== null) {
                (A = void 0),
                  (t = e),
                  (u = s.memoizedProps),
                  (s = s.memoizedState),
                  (a = t.stateNode);
                try {
                  var q = pa(t.type, u);
                  (A = a.getSnapshotBeforeUpdate(q, s)),
                    (a.__reactInternalSnapshotBeforeUpdate = A);
                } catch (nA) {
                  mA(t, t.return, nA);
                }
              }
              break;
            case 3:
              if ((A & 1024) !== 0) {
                if (
                  ((A = e.stateNode.containerInfo), (t = A.nodeType), t === 9)
                )
                  Bc(A);
                else if (t === 1)
                  switch (A.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Bc(A);
                      break;
                    default:
                      A.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((A & 1024) !== 0) throw Error(r(163));
          }
          if (((A = e.sibling), A !== null)) {
            (A.return = e.return), (ee = A);
            break;
          }
          ee = e.return;
        }
  }
  function cg(A, e, t) {
    var a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        vt(A, t), a & 4 && ul(5, t);
        break;
      case 1:
        if ((vt(A, t), a & 4))
          if (((A = t.stateNode), e === null))
            try {
              A.componentDidMount();
            } catch (f) {
              mA(t, t.return, f);
            }
          else {
            var u = pa(t.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              A.componentDidUpdate(u, e, A.__reactInternalSnapshotBeforeUpdate);
            } catch (f) {
              mA(t, t.return, f);
            }
          }
        a & 64 && ng(t), a & 512 && sl(t, t.return);
        break;
      case 3:
        if ((vt(A, t), a & 64 && ((A = t.updateQueue), A !== null))) {
          if (((e = null), t.child !== null))
            switch (t.child.tag) {
              case 27:
              case 5:
                e = t.child.stateNode;
                break;
              case 1:
                e = t.child.stateNode;
            }
          try {
            Zf(A, e);
          } catch (f) {
            mA(t, t.return, f);
          }
        }
        break;
      case 27:
        e === null && a & 4 && ug(t);
      case 26:
      case 5:
        vt(A, t), e === null && a & 4 && rg(t), a & 512 && sl(t, t.return);
        break;
      case 12:
        vt(A, t);
        break;
      case 31:
        vt(A, t), a & 4 && og(A, t);
        break;
      case 13:
        vt(A, t),
          a & 4 && gg(A, t),
          a & 64 &&
            ((A = t.memoizedState),
            A !== null &&
              ((A = A.dehydrated),
              A !== null && ((t = mC.bind(null, t)), YC(A, t))));
        break;
      case 22:
        if (((a = t.memoizedState !== null || Ut), !a)) {
          (e = (e !== null && e.memoizedState !== null) || kA), (u = Ut);
          var s = kA;
          (Ut = a),
            (kA = e) && !s ? Ft(A, t, (t.subtreeFlags & 8772) !== 0) : vt(A, t),
            (Ut = u),
            (kA = s);
        }
        break;
      case 30:
        break;
      default:
        vt(A, t);
    }
  }
  function Bg(A) {
    var e = A.alternate;
    e !== null && ((A.alternate = null), Bg(e)),
      (A.child = null),
      (A.deletions = null),
      (A.sibling = null),
      A.tag === 5 && ((e = A.stateNode), e !== null && hu(e)),
      (A.stateNode = null),
      (A.return = null),
      (A.dependencies = null),
      (A.memoizedProps = null),
      (A.memoizedState = null),
      (A.pendingProps = null),
      (A.stateNode = null),
      (A.updateQueue = null);
  }
  var MA = null,
    Ce = !1;
  function dt(A, e, t) {
    for (t = t.child; t !== null; ) fg(A, e, t), (t = t.sibling);
  }
  function fg(A, e, t) {
    if (me && typeof me.onCommitFiberUnmount == "function")
      try {
        me.onCommitFiberUnmount(Dn, t);
      } catch {}
    switch (t.tag) {
      case 26:
        kA || at(t, e),
          dt(A, e, t),
          t.memoizedState
            ? t.memoizedState.count--
            : t.stateNode && ((t = t.stateNode), t.parentNode.removeChild(t));
        break;
      case 27:
        kA || at(t, e);
        var a = MA,
          u = Ce;
        kt(t.type) && ((MA = t.stateNode), (Ce = !1)),
          dt(A, e, t),
          Cl(t.stateNode),
          (MA = a),
          (Ce = u);
        break;
      case 5:
        kA || at(t, e);
      case 6:
        if (
          ((a = MA),
          (u = Ce),
          (MA = null),
          dt(A, e, t),
          (MA = a),
          (Ce = u),
          MA !== null)
        )
          if (Ce)
            try {
              (MA.nodeType === 9
                ? MA.body
                : MA.nodeName === "HTML"
                ? MA.ownerDocument.body
                : MA
              ).removeChild(t.stateNode);
            } catch (s) {
              mA(t, e, s);
            }
          else
            try {
              MA.removeChild(t.stateNode);
            } catch (s) {
              mA(t, e, s);
            }
        break;
      case 18:
        MA !== null &&
          (Ce
            ? ((A = MA),
              nQ(
                A.nodeType === 9
                  ? A.body
                  : A.nodeName === "HTML"
                  ? A.ownerDocument.body
                  : A,
                t.stateNode
              ),
              Un(A))
            : nQ(MA, t.stateNode));
        break;
      case 4:
        (a = MA),
          (u = Ce),
          (MA = t.stateNode.containerInfo),
          (Ce = !0),
          dt(A, e, t),
          (MA = a),
          (Ce = u);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Xt(2, t, e), kA || Xt(4, t, e), dt(A, e, t);
        break;
      case 1:
        kA ||
          (at(t, e),
          (a = t.stateNode),
          typeof a.componentWillUnmount == "function" && lg(t, e, a)),
          dt(A, e, t);
        break;
      case 21:
        dt(A, e, t);
        break;
      case 22:
        (kA = (a = kA) || t.memoizedState !== null), dt(A, e, t), (kA = a);
        break;
      default:
        dt(A, e, t);
    }
  }
  function og(A, e) {
    if (
      e.memoizedState === null &&
      ((A = e.alternate), A !== null && ((A = A.memoizedState), A !== null))
    ) {
      A = A.dehydrated;
      try {
        Un(A);
      } catch (t) {
        mA(e, e.return, t);
      }
    }
  }
  function gg(A, e) {
    if (
      e.memoizedState === null &&
      ((A = e.alternate),
      A !== null &&
        ((A = A.memoizedState), A !== null && ((A = A.dehydrated), A !== null)))
    )
      try {
        Un(A);
      } catch (t) {
        mA(e, e.return, t);
      }
  }
  function wC(A) {
    switch (A.tag) {
      case 31:
      case 13:
      case 19:
        var e = A.stateNode;
        return e === null && (e = A.stateNode = new sg()), e;
      case 22:
        return (
          (A = A.stateNode),
          (e = A._retryCache),
          e === null && (e = A._retryCache = new sg()),
          e
        );
      default:
        throw Error(r(435, A.tag));
    }
  }
  function Gr(A, e) {
    var t = wC(A);
    e.forEach(function (a) {
      if (!t.has(a)) {
        t.add(a);
        var u = HC.bind(null, A, a);
        a.then(u, u);
      }
    });
  }
  function Ue(A, e) {
    var t = e.deletions;
    if (t !== null)
      for (var a = 0; a < t.length; a++) {
        var u = t[a],
          s = A,
          f = e,
          Q = f;
        A: for (; Q !== null; ) {
          switch (Q.tag) {
            case 27:
              if (kt(Q.type)) {
                (MA = Q.stateNode), (Ce = !1);
                break A;
              }
              break;
            case 5:
              (MA = Q.stateNode), (Ce = !1);
              break A;
            case 3:
            case 4:
              (MA = Q.stateNode.containerInfo), (Ce = !0);
              break A;
          }
          Q = Q.return;
        }
        if (MA === null) throw Error(r(160));
        fg(s, f, u),
          (MA = null),
          (Ce = !1),
          (s = u.alternate),
          s !== null && (s.return = null),
          (u.return = null);
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; ) Qg(e, A), (e = e.sibling);
  }
  var We = null;
  function Qg(A, e) {
    var t = A.alternate,
      a = A.flags;
    switch (A.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ue(e, A),
          de(A),
          a & 4 && (Xt(3, A, A.return), ul(3, A), Xt(5, A, A.return));
        break;
      case 1:
        Ue(e, A),
          de(A),
          a & 512 && (kA || t === null || at(t, t.return)),
          a & 64 &&
            Ut &&
            ((A = A.updateQueue),
            A !== null &&
              ((a = A.callbacks),
              a !== null &&
                ((t = A.shared.hiddenCallbacks),
                (A.shared.hiddenCallbacks = t === null ? a : t.concat(a)))));
        break;
      case 26:
        var u = We;
        if (
          (Ue(e, A),
          de(A),
          a & 512 && (kA || t === null || at(t, t.return)),
          a & 4)
        ) {
          var s = t !== null ? t.memoizedState : null;
          if (((a = A.memoizedState), t === null))
            if (a === null)
              if (A.stateNode === null) {
                A: {
                  (a = A.type),
                    (t = A.memoizedProps),
                    (u = u.ownerDocument || u);
                  e: switch (a) {
                    case "title":
                      (s = u.getElementsByTagName("title")[0]),
                        (!s ||
                          s[Ln] ||
                          s[ae] ||
                          s.namespaceURI === "http://www.w3.org/2000/svg" ||
                          s.hasAttribute("itemprop")) &&
                          ((s = u.createElement(a)),
                          u.head.insertBefore(
                            s,
                            u.querySelector("head > title")
                          )),
                        ie(s, a, t),
                        (s[ae] = A),
                        Ae(s),
                        (a = s);
                      break A;
                    case "link":
                      var f = QQ("link", "href", u).get(a + (t.href || ""));
                      if (f) {
                        for (var Q = 0; Q < f.length; Q++)
                          if (
                            ((s = f[Q]),
                            s.getAttribute("href") ===
                              (t.href == null || t.href === ""
                                ? null
                                : t.href) &&
                              s.getAttribute("rel") ===
                                (t.rel == null ? null : t.rel) &&
                              s.getAttribute("title") ===
                                (t.title == null ? null : t.title) &&
                              s.getAttribute("crossorigin") ===
                                (t.crossOrigin == null ? null : t.crossOrigin))
                          ) {
                            f.splice(Q, 1);
                            break e;
                          }
                      }
                      (s = u.createElement(a)),
                        ie(s, a, t),
                        u.head.appendChild(s);
                      break;
                    case "meta":
                      if (
                        (f = QQ("meta", "content", u).get(
                          a + (t.content || "")
                        ))
                      ) {
                        for (Q = 0; Q < f.length; Q++)
                          if (
                            ((s = f[Q]),
                            s.getAttribute("content") ===
                              (t.content == null ? null : "" + t.content) &&
                              s.getAttribute("name") ===
                                (t.name == null ? null : t.name) &&
                              s.getAttribute("property") ===
                                (t.property == null ? null : t.property) &&
                              s.getAttribute("http-equiv") ===
                                (t.httpEquiv == null ? null : t.httpEquiv) &&
                              s.getAttribute("charset") ===
                                (t.charSet == null ? null : t.charSet))
                          ) {
                            f.splice(Q, 1);
                            break e;
                          }
                      }
                      (s = u.createElement(a)),
                        ie(s, a, t),
                        u.head.appendChild(s);
                      break;
                    default:
                      throw Error(r(468, a));
                  }
                  (s[ae] = A), Ae(s), (a = s);
                }
                A.stateNode = a;
              } else hQ(u, A.type, A.stateNode);
            else A.stateNode = gQ(u, a, A.memoizedProps);
          else
            s !== a
              ? (s === null
                  ? t.stateNode !== null &&
                    ((t = t.stateNode), t.parentNode.removeChild(t))
                  : s.count--,
                a === null
                  ? hQ(u, A.type, A.stateNode)
                  : gQ(u, a, A.memoizedProps))
              : a === null &&
                A.stateNode !== null &&
                Ms(A, A.memoizedProps, t.memoizedProps);
        }
        break;
      case 27:
        Ue(e, A),
          de(A),
          a & 512 && (kA || t === null || at(t, t.return)),
          t !== null && a & 4 && Ms(A, A.memoizedProps, t.memoizedProps);
        break;
      case 5:
        if (
          (Ue(e, A),
          de(A),
          a & 512 && (kA || t === null || at(t, t.return)),
          A.flags & 32)
        ) {
          u = A.stateNode;
          try {
            _a(u, "");
          } catch (q) {
            mA(A, A.return, q);
          }
        }
        a & 4 &&
          A.stateNode != null &&
          ((u = A.memoizedProps), Ms(A, u, t !== null ? t.memoizedProps : u)),
          a & 1024 && (Gs = !0);
        break;
      case 6:
        if ((Ue(e, A), de(A), a & 4)) {
          if (A.stateNode === null) throw Error(r(162));
          (a = A.memoizedProps), (t = A.stateNode);
          try {
            t.nodeValue = a;
          } catch (q) {
            mA(A, A.return, q);
          }
        }
        break;
      case 3:
        if (
          ((ti = null),
          (u = We),
          (We = Ai(e.containerInfo)),
          Ue(e, A),
          (We = u),
          de(A),
          a & 4 && t !== null && t.memoizedState.isDehydrated)
        )
          try {
            Un(e.containerInfo);
          } catch (q) {
            mA(A, A.return, q);
          }
        Gs && ((Gs = !1), hg(A));
        break;
      case 4:
        (a = We),
          (We = Ai(A.stateNode.containerInfo)),
          Ue(e, A),
          de(A),
          (We = a);
        break;
      case 12:
        Ue(e, A), de(A);
        break;
      case 31:
        Ue(e, A),
          de(A),
          a & 4 &&
            ((a = A.updateQueue),
            a !== null && ((A.updateQueue = null), Gr(A, a)));
        break;
      case 13:
        Ue(e, A),
          de(A),
          A.child.flags & 8192 &&
            (A.memoizedState !== null) !=
              (t !== null && t.memoizedState !== null) &&
            (Vr = ye()),
          a & 4 &&
            ((a = A.updateQueue),
            a !== null && ((A.updateQueue = null), Gr(A, a)));
        break;
      case 22:
        u = A.memoizedState !== null;
        var C = t !== null && t.memoizedState !== null,
          H = Ut,
          T = kA;
        if (
          ((Ut = H || u),
          (kA = T || C),
          Ue(e, A),
          (kA = T),
          (Ut = H),
          de(A),
          a & 8192)
        )
          A: for (
            e = A.stateNode,
              e._visibility = u ? e._visibility & -2 : e._visibility | 1,
              u && (t === null || C || Ut || kA || Sa(A)),
              t = null,
              e = A;
            ;

          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (t === null) {
                C = t = e;
                try {
                  if (((s = C.stateNode), u))
                    (f = s.style),
                      typeof f.setProperty == "function"
                        ? f.setProperty("display", "none", "important")
                        : (f.display = "none");
                  else {
                    Q = C.stateNode;
                    var D = C.memoizedProps.style,
                      p =
                        D != null && D.hasOwnProperty("display")
                          ? D.display
                          : null;
                    Q.style.display =
                      p == null || typeof p == "boolean" ? "" : ("" + p).trim();
                  }
                } catch (q) {
                  mA(C, C.return, q);
                }
              }
            } else if (e.tag === 6) {
              if (t === null) {
                C = e;
                try {
                  C.stateNode.nodeValue = u ? "" : C.memoizedProps;
                } catch (q) {
                  mA(C, C.return, q);
                }
              }
            } else if (e.tag === 18) {
              if (t === null) {
                C = e;
                try {
                  var S = C.stateNode;
                  u ? lQ(S, !0) : lQ(C.stateNode, !1);
                } catch (q) {
                  mA(C, C.return, q);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) ||
                e.memoizedState === null ||
                e === A) &&
              e.child !== null
            ) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === A) break A;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === A) break A;
              t === e && (t = null), (e = e.return);
            }
            t === e && (t = null),
              (e.sibling.return = e.return),
              (e = e.sibling);
          }
        a & 4 &&
          ((a = A.updateQueue),
          a !== null &&
            ((t = a.retryQueue),
            t !== null && ((a.retryQueue = null), Gr(A, t))));
        break;
      case 19:
        Ue(e, A),
          de(A),
          a & 4 &&
            ((a = A.updateQueue),
            a !== null && ((A.updateQueue = null), Gr(A, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Ue(e, A), de(A);
    }
  }
  function de(A) {
    var e = A.flags;
    if (e & 2) {
      try {
        for (var t, a = A.return; a !== null; ) {
          if (ig(a)) {
            t = a;
            break;
          }
          a = a.return;
        }
        if (t == null) throw Error(r(160));
        switch (t.tag) {
          case 27:
            var u = t.stateNode,
              s = Rs(A);
            Nr(A, s, u);
            break;
          case 5:
            var f = t.stateNode;
            t.flags & 32 && (_a(f, ""), (t.flags &= -33));
            var Q = Rs(A);
            Nr(A, Q, f);
            break;
          case 3:
          case 4:
            var C = t.stateNode.containerInfo,
              H = Rs(A);
            Ns(A, H, C);
            break;
          default:
            throw Error(r(161));
        }
      } catch (T) {
        mA(A, A.return, T);
      }
      A.flags &= -3;
    }
    e & 4096 && (A.flags &= -4097);
  }
  function hg(A) {
    if (A.subtreeFlags & 1024)
      for (A = A.child; A !== null; ) {
        var e = A;
        hg(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (A = A.sibling);
      }
  }
  function vt(A, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) cg(A, e.alternate, e), (e = e.sibling);
  }
  function Sa(A) {
    for (A = A.child; A !== null; ) {
      var e = A;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Xt(4, e, e.return), Sa(e);
          break;
        case 1:
          at(e, e.return);
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && lg(e, e.return, t),
            Sa(e);
          break;
        case 27:
          Cl(e.stateNode);
        case 26:
        case 5:
          at(e, e.return), Sa(e);
          break;
        case 22:
          e.memoizedState === null && Sa(e);
          break;
        case 30:
          Sa(e);
          break;
        default:
          Sa(e);
      }
      A = A.sibling;
    }
  }
  function Ft(A, e, t) {
    for (t = t && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var a = e.alternate,
        u = A,
        s = e,
        f = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          Ft(u, s, t), ul(4, s);
          break;
        case 1:
          if (
            (Ft(u, s, t),
            (a = s),
            (u = a.stateNode),
            typeof u.componentDidMount == "function")
          )
            try {
              u.componentDidMount();
            } catch (H) {
              mA(a, a.return, H);
            }
          if (((a = s), (u = a.updateQueue), u !== null)) {
            var Q = a.stateNode;
            try {
              var C = u.shared.hiddenCallbacks;
              if (C !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < C.length; u++)
                  Jf(C[u], Q);
            } catch (H) {
              mA(a, a.return, H);
            }
          }
          t && f & 64 && ng(s), sl(s, s.return);
          break;
        case 27:
          ug(s);
        case 26:
        case 5:
          Ft(u, s, t), t && a === null && f & 4 && rg(s), sl(s, s.return);
          break;
        case 12:
          Ft(u, s, t);
          break;
        case 31:
          Ft(u, s, t), t && f & 4 && og(u, s);
          break;
        case 13:
          Ft(u, s, t), t && f & 4 && gg(u, s);
          break;
        case 22:
          s.memoizedState === null && Ft(u, s, t), sl(s, s.return);
          break;
        case 30:
          break;
        default:
          Ft(u, s, t);
      }
      e = e.sibling;
    }
  }
  function _s(A, e) {
    var t = null;
    A !== null &&
      A.memoizedState !== null &&
      A.memoizedState.cachePool !== null &&
      (t = A.memoizedState.cachePool.pool),
      (A = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (A = e.memoizedState.cachePool.pool),
      A !== t && (A != null && A.refCount++, t != null && qn(t));
  }
  function Vs(A, e) {
    (A = null),
      e.alternate !== null && (A = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== A && (e.refCount++, A != null && qn(A));
  }
  function Pe(A, e, t, a) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) wg(A, e, t, a), (e = e.sibling);
  }
  function wg(A, e, t, a) {
    var u = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Pe(A, e, t, a), u & 2048 && ul(9, e);
        break;
      case 1:
        Pe(A, e, t, a);
        break;
      case 3:
        Pe(A, e, t, a),
          u & 2048 &&
            ((A = null),
            e.alternate !== null && (A = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== A && (e.refCount++, A != null && qn(A)));
        break;
      case 12:
        if (u & 2048) {
          Pe(A, e, t, a), (A = e.stateNode);
          try {
            var s = e.memoizedProps,
              f = s.id,
              Q = s.onPostCommit;
            typeof Q == "function" &&
              Q(
                f,
                e.alternate === null ? "mount" : "update",
                A.passiveEffectDuration,
                -0
              );
          } catch (C) {
            mA(e, e.return, C);
          }
        } else Pe(A, e, t, a);
        break;
      case 31:
        Pe(A, e, t, a);
        break;
      case 13:
        Pe(A, e, t, a);
        break;
      case 23:
        break;
      case 22:
        (s = e.stateNode),
          (f = e.alternate),
          e.memoizedState !== null
            ? s._visibility & 2
              ? Pe(A, e, t, a)
              : cl(A, e)
            : s._visibility & 2
            ? Pe(A, e, t, a)
            : ((s._visibility |= 2),
              un(A, e, t, a, (e.subtreeFlags & 10256) !== 0 || !1)),
          u & 2048 && _s(f, e);
        break;
      case 24:
        Pe(A, e, t, a), u & 2048 && Vs(e.alternate, e);
        break;
      default:
        Pe(A, e, t, a);
    }
  }
  function un(A, e, t, a, u) {
    for (
      u = u && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child;
      e !== null;

    ) {
      var s = A,
        f = e,
        Q = t,
        C = a,
        H = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          un(s, f, Q, C, u), ul(8, f);
          break;
        case 23:
          break;
        case 22:
          var T = f.stateNode;
          f.memoizedState !== null
            ? T._visibility & 2
              ? un(s, f, Q, C, u)
              : cl(s, f)
            : ((T._visibility |= 2), un(s, f, Q, C, u)),
            u && H & 2048 && _s(f.alternate, f);
          break;
        case 24:
          un(s, f, Q, C, u), u && H & 2048 && Vs(f.alternate, f);
          break;
        default:
          un(s, f, Q, C, u);
      }
      e = e.sibling;
    }
  }
  function cl(A, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var t = A,
          a = e,
          u = a.flags;
        switch (a.tag) {
          case 22:
            cl(t, a), u & 2048 && _s(a.alternate, a);
            break;
          case 24:
            cl(t, a), u & 2048 && Vs(a.alternate, a);
            break;
          default:
            cl(t, a);
        }
        e = e.sibling;
      }
  }
  var Bl = 8192;
  function sn(A, e, t) {
    if (A.subtreeFlags & Bl)
      for (A = A.child; A !== null; ) Cg(A, e, t), (A = A.sibling);
  }
  function Cg(A, e, t) {
    switch (A.tag) {
      case 26:
        sn(A, e, t),
          A.flags & Bl &&
            A.memoizedState !== null &&
            aU(t, We, A.memoizedState, A.memoizedProps);
        break;
      case 5:
        sn(A, e, t);
        break;
      case 3:
      case 4:
        var a = We;
        (We = Ai(A.stateNode.containerInfo)), sn(A, e, t), (We = a);
        break;
      case 22:
        A.memoizedState === null &&
          ((a = A.alternate),
          a !== null && a.memoizedState !== null
            ? ((a = Bl), (Bl = 16777216), sn(A, e, t), (Bl = a))
            : sn(A, e, t));
        break;
      default:
        sn(A, e, t);
    }
  }
  function Ug(A) {
    var e = A.alternate;
    if (e !== null && ((A = e.child), A !== null)) {
      e.child = null;
      do (e = A.sibling), (A.sibling = null), (A = e);
      while (A !== null);
    }
  }
  function fl(A) {
    var e = A.deletions;
    if ((A.flags & 16) !== 0) {
      if (e !== null)
        for (var t = 0; t < e.length; t++) {
          var a = e[t];
          (ee = a), vg(a, A);
        }
      Ug(A);
    }
    if (A.subtreeFlags & 10256)
      for (A = A.child; A !== null; ) dg(A), (A = A.sibling);
  }
  function dg(A) {
    switch (A.tag) {
      case 0:
      case 11:
      case 15:
        fl(A), A.flags & 2048 && Xt(9, A, A.return);
        break;
      case 3:
        fl(A);
        break;
      case 12:
        fl(A);
        break;
      case 22:
        var e = A.stateNode;
        A.memoizedState !== null &&
        e._visibility & 2 &&
        (A.return === null || A.return.tag !== 13)
          ? ((e._visibility &= -3), _r(A))
          : fl(A);
        break;
      default:
        fl(A);
    }
  }
  function _r(A) {
    var e = A.deletions;
    if ((A.flags & 16) !== 0) {
      if (e !== null)
        for (var t = 0; t < e.length; t++) {
          var a = e[t];
          (ee = a), vg(a, A);
        }
      Ug(A);
    }
    for (A = A.child; A !== null; ) {
      switch (((e = A), e.tag)) {
        case 0:
        case 11:
        case 15:
          Xt(8, e, e.return), _r(e);
          break;
        case 22:
          (t = e.stateNode),
            t._visibility & 2 && ((t._visibility &= -3), _r(e));
          break;
        default:
          _r(e);
      }
      A = A.sibling;
    }
  }
  function vg(A, e) {
    for (; ee !== null; ) {
      var t = ee;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          Xt(8, t, e);
          break;
        case 23:
        case 22:
          if (t.memoizedState !== null && t.memoizedState.cachePool !== null) {
            var a = t.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          qn(t.memoizedState.cache);
      }
      if (((a = t.child), a !== null)) (a.return = t), (ee = a);
      else
        A: for (t = A; ee !== null; ) {
          a = ee;
          var u = a.sibling,
            s = a.return;
          if ((Bg(a), a === t)) {
            ee = null;
            break A;
          }
          if (u !== null) {
            (u.return = s), (ee = u);
            break A;
          }
          ee = s;
        }
    }
  }
  var CC = {
      getCacheForType: function (A) {
        var e = le(ZA),
          t = e.data.get(A);
        return t === void 0 && ((t = A()), e.data.set(A, t)), t;
      },
      cacheSignal: function () {
        return le(ZA).controller.signal;
      },
    },
    UC = typeof WeakMap == "function" ? WeakMap : Map,
    vA = 0,
    DA = null,
    cA = null,
    QA = 0,
    yA = 0,
    xe = null,
    zt = !1,
    cn = !1,
    Xs = !1,
    Et = 0,
    GA = 0,
    Yt = 0,
    ba = 0,
    zs = 0,
    Ke = 0,
    Bn = 0,
    ol = null,
    ve = null,
    Ys = !1,
    Vr = 0,
    Fg = 0,
    Xr = 1 / 0,
    zr = null,
    Jt = null,
    PA = 0,
    Zt = null,
    fn = null,
    yt = 0,
    Js = 0,
    Zs = null,
    Eg = null,
    gl = 0,
    js = null;
  function De() {
    return (vA & 2) !== 0 && QA !== 0 ? QA & -QA : b.T !== null ? Ac() : MB();
  }
  function yg() {
    if (Ke === 0)
      if ((QA & 536870912) === 0 || CA) {
        var A = Pl;
        (Pl <<= 1), (Pl & 3932160) === 0 && (Pl = 262144), (Ke = A);
      } else Ke = 536870912;
    return (A = be.current), A !== null && (A.flags |= 32), Ke;
  }
  function Fe(A, e, t) {
    ((A === DA && (yA === 2 || yA === 9)) || A.cancelPendingCommit !== null) &&
      (on(A, 0), jt(A, QA, Ke, !1)),
      In(A, t),
      ((vA & 2) === 0 || A !== DA) &&
        (A === DA &&
          ((vA & 2) === 0 && (ba |= t), GA === 4 && jt(A, QA, Ke, !1)),
        nt(A));
  }
  function mg(A, e, t) {
    if ((vA & 6) !== 0) throw Error(r(327));
    var a = (!t && (e & 127) === 0 && (e & A.expiredLanes) === 0) || On(A, e),
      u = a ? FC(A, e) : ks(A, e, !0),
      s = a;
    do {
      if (u === 0) {
        cn && !a && jt(A, e, 0, !1);
        break;
      } else {
        if (((t = A.current.alternate), s && !dC(t))) {
          (u = ks(A, e, !1)), (s = !1);
          continue;
        }
        if (u === 2) {
          if (((s = e), A.errorRecoveryDisabledLanes & s)) var f = 0;
          else
            (f = A.pendingLanes & -536870913),
              (f = f !== 0 ? f : f & 536870912 ? 536870912 : 0);
          if (f !== 0) {
            e = f;
            A: {
              var Q = A;
              u = ol;
              var C = Q.current.memoizedState.isDehydrated;
              if ((C && (on(Q, f).flags |= 256), (f = ks(Q, f, !1)), f !== 2)) {
                if (Xs && !C) {
                  (Q.errorRecoveryDisabledLanes |= s), (ba |= s), (u = 4);
                  break A;
                }
                (s = ve),
                  (ve = u),
                  s !== null && (ve === null ? (ve = s) : ve.push.apply(ve, s));
              }
              u = f;
            }
            if (((s = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          on(A, 0), jt(A, e, 0, !0);
          break;
        }
        A: {
          switch (((a = A), (s = u), s)) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              jt(a, e, Ke, !zt);
              break A;
            case 2:
              ve = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((e & 62914560) === e && ((u = Vr + 300 - ye()), 10 < u)) {
            if ((jt(a, e, Ke, !zt), Ar(a, 0, !0) !== 0)) break A;
            (yt = e),
              (a.timeoutHandle = tQ(
                Hg.bind(
                  null,
                  a,
                  t,
                  ve,
                  zr,
                  Ys,
                  e,
                  Ke,
                  ba,
                  Bn,
                  zt,
                  s,
                  "Throttled",
                  -0,
                  0
                ),
                u
              ));
            break A;
          }
          Hg(a, t, ve, zr, Ys, e, Ke, ba, Bn, zt, s, null, -0, 0);
        }
      }
      break;
    } while (!0);
    nt(A);
  }
  function Hg(A, e, t, a, u, s, f, Q, C, H, T, D, p, S) {
    if (
      ((A.timeoutHandle = -1),
      (D = e.subtreeFlags),
      D & 8192 || (D & 16785408) === 16785408)
    ) {
      (D = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: st,
      }),
        Cg(e, s, D);
      var q =
        (s & 62914560) === s ? Vr - ye() : (s & 4194048) === s ? Fg - ye() : 0;
      if (((q = nU(D, q)), q !== null)) {
        (yt = s),
          (A.cancelPendingCommit = q(
            Og.bind(null, A, e, s, t, a, u, f, Q, C, T, D, null, p, S)
          )),
          jt(A, s, f, !H);
        return;
      }
    }
    Og(A, e, s, t, a, u, f, Q, C);
  }
  function dC(A) {
    for (var e = A; ; ) {
      var t = e.tag;
      if (
        (t === 0 || t === 11 || t === 15) &&
        e.flags & 16384 &&
        ((t = e.updateQueue), t !== null && ((t = t.stores), t !== null))
      )
        for (var a = 0; a < t.length; a++) {
          var u = t[a],
            s = u.getSnapshot;
          u = u.value;
          try {
            if (!pe(s(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (((t = e.child), e.subtreeFlags & 16384 && t !== null))
        (t.return = e), (e = t);
      else {
        if (e === A) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === A) return !0;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    }
    return !0;
  }
  function jt(A, e, t, a) {
    (e &= ~zs),
      (e &= ~ba),
      (A.suspendedLanes |= e),
      (A.pingedLanes &= ~e),
      a && (A.warmLanes |= e),
      (a = A.expirationTimes);
    for (var u = e; 0 < u; ) {
      var s = 31 - He(u),
        f = 1 << s;
      (a[s] = -1), (u &= ~f);
    }
    t !== 0 && OB(A, t, e);
  }
  function Yr() {
    return (vA & 6) === 0 ? (Ql(0), !1) : !0;
  }
  function qs() {
    if (cA !== null) {
      if (yA === 0) var A = cA.return;
      else (A = cA), (ot = da = null), Bs(A), (tn = null), (Wn = 0), (A = cA);
      for (; A !== null; ) ag(A.alternate, A), (A = A.return);
      cA = null;
    }
  }
  function on(A, e) {
    var t = A.timeoutHandle;
    t !== -1 && ((A.timeoutHandle = -1), GC(t)),
      (t = A.cancelPendingCommit),
      t !== null && ((A.cancelPendingCommit = null), t()),
      (yt = 0),
      qs(),
      (DA = A),
      (cA = t = Bt(A.current, null)),
      (QA = e),
      (yA = 0),
      (xe = null),
      (zt = !1),
      (cn = On(A, e)),
      (Xs = !1),
      (Bn = Ke = zs = ba = Yt = GA = 0),
      (ve = ol = null),
      (Ys = !1),
      (e & 8) !== 0 && (e |= e & 32);
    var a = A.entangledLanes;
    if (a !== 0)
      for (A = A.entanglements, a &= e; 0 < a; ) {
        var u = 31 - He(a),
          s = 1 << u;
        (e |= A[u]), (a &= ~s);
      }
    return (Et = e), fr(), t;
  }
  function pg(A, e) {
    (iA = null),
      (b.H = ll),
      e === en || e === dr
        ? ((e = Vf()), (yA = 3))
        : e === $u
        ? ((e = Vf()), (yA = 4))
        : (yA =
            e === ps
              ? 8
              : e !== null &&
                typeof e == "object" &&
                typeof e.then == "function"
              ? 6
              : 1),
      (xe = e),
      cA === null && ((GA = 1), Or(A, Re(e, A.current)));
  }
  function Sg() {
    var A = be.current;
    return A === null
      ? !0
      : (QA & 4194048) === QA
      ? Ve === null
      : (QA & 62914560) === QA || (QA & 536870912) !== 0
      ? A === Ve
      : !1;
  }
  function bg() {
    var A = b.H;
    return (b.H = ll), A === null ? ll : A;
  }
  function Tg() {
    var A = b.A;
    return (b.A = CC), A;
  }
  function Jr() {
    (GA = 4),
      zt || ((QA & 4194048) !== QA && be.current !== null) || (cn = !0),
      ((Yt & 134217727) === 0 && (ba & 134217727) === 0) ||
        DA === null ||
        jt(DA, QA, Ke, !1);
  }
  function ks(A, e, t) {
    var a = vA;
    vA |= 2;
    var u = bg(),
      s = Tg();
    (DA !== A || QA !== e) && ((zr = null), on(A, e)), (e = !1);
    var f = GA;
    A: do
      try {
        if (yA !== 0 && cA !== null) {
          var Q = cA,
            C = xe;
          switch (yA) {
            case 8:
              qs(), (f = 6);
              break A;
            case 3:
            case 2:
            case 9:
            case 6:
              be.current === null && (e = !0);
              var H = yA;
              if (((yA = 0), (xe = null), gn(A, Q, C, H), t && cn)) {
                f = 0;
                break A;
              }
              break;
            default:
              (H = yA), (yA = 0), (xe = null), gn(A, Q, C, H);
          }
        }
        vC(), (f = GA);
        break;
      } catch (T) {
        pg(A, T);
      }
    while (!0);
    return (
      e && A.shellSuspendCounter++,
      (ot = da = null),
      (vA = a),
      (b.H = u),
      (b.A = s),
      cA === null && ((DA = null), (QA = 0), fr()),
      f
    );
  }
  function vC() {
    for (; cA !== null; ) xg(cA);
  }
  function FC(A, e) {
    var t = vA;
    vA |= 2;
    var a = bg(),
      u = Tg();
    DA !== A || QA !== e
      ? ((zr = null), (Xr = ye() + 500), on(A, e))
      : (cn = On(A, e));
    A: do
      try {
        if (yA !== 0 && cA !== null) {
          e = cA;
          var s = xe;
          e: switch (yA) {
            case 1:
              (yA = 0), (xe = null), gn(A, e, s, 1);
              break;
            case 2:
            case 9:
              if (Gf(s)) {
                (yA = 0), (xe = null), Kg(e);
                break;
              }
              (e = function () {
                (yA !== 2 && yA !== 9) || DA !== A || (yA = 7), nt(A);
              }),
                s.then(e, e);
              break A;
            case 3:
              yA = 7;
              break A;
            case 4:
              yA = 5;
              break A;
            case 7:
              Gf(s)
                ? ((yA = 0), (xe = null), Kg(e))
                : ((yA = 0), (xe = null), gn(A, e, s, 7));
              break;
            case 5:
              var f = null;
              switch (cA.tag) {
                case 26:
                  f = cA.memoizedState;
                case 5:
                case 27:
                  var Q = cA;
                  if (f ? wQ(f) : Q.stateNode.complete) {
                    (yA = 0), (xe = null);
                    var C = Q.sibling;
                    if (C !== null) cA = C;
                    else {
                      var H = Q.return;
                      H !== null ? ((cA = H), Zr(H)) : (cA = null);
                    }
                    break e;
                  }
              }
              (yA = 0), (xe = null), gn(A, e, s, 5);
              break;
            case 6:
              (yA = 0), (xe = null), gn(A, e, s, 6);
              break;
            case 8:
              qs(), (GA = 6);
              break A;
            default:
              throw Error(r(462));
          }
        }
        EC();
        break;
      } catch (T) {
        pg(A, T);
      }
    while (!0);
    return (
      (ot = da = null),
      (b.H = a),
      (b.A = u),
      (vA = t),
      cA !== null ? 0 : ((DA = null), (QA = 0), fr(), GA)
    );
  }
  function EC() {
    for (; cA !== null && !J0(); ) xg(cA);
  }
  function xg(A) {
    var e = eg(A.alternate, A, Et);
    (A.memoizedProps = A.pendingProps), e === null ? Zr(A) : (cA = e);
  }
  function Kg(A) {
    var e = A,
      t = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = qo(t, e, e.pendingProps, e.type, void 0, QA);
        break;
      case 11:
        e = qo(t, e, e.pendingProps, e.type.render, e.ref, QA);
        break;
      case 5:
        Bs(e);
      default:
        ag(t, e), (e = cA = bf(e, Et)), (e = eg(t, e, Et));
    }
    (A.memoizedProps = A.pendingProps), e === null ? Zr(A) : (cA = e);
  }
  function gn(A, e, t, a) {
    (ot = da = null), Bs(e), (tn = null), (Wn = 0);
    var u = e.return;
    try {
      if (BC(A, u, e, t, QA)) {
        (GA = 1), Or(A, Re(t, A.current)), (cA = null);
        return;
      }
    } catch (s) {
      if (u !== null) throw ((cA = u), s);
      (GA = 1), Or(A, Re(t, A.current)), (cA = null);
      return;
    }
    e.flags & 32768
      ? (CA || a === 1
          ? (A = !0)
          : cn || (QA & 536870912) !== 0
          ? (A = !1)
          : ((zt = A = !0),
            (a === 2 || a === 9 || a === 3 || a === 6) &&
              ((a = be.current),
              a !== null && a.tag === 13 && (a.flags |= 16384))),
        Dg(e, A))
      : Zr(e);
  }
  function Zr(A) {
    var e = A;
    do {
      if ((e.flags & 32768) !== 0) {
        Dg(e, zt);
        return;
      }
      A = e.return;
      var t = gC(e.alternate, e, Et);
      if (t !== null) {
        cA = t;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        cA = e;
        return;
      }
      cA = e = A;
    } while (e !== null);
    GA === 0 && (GA = 5);
  }
  function Dg(A, e) {
    do {
      var t = QC(A.alternate, A);
      if (t !== null) {
        (t.flags &= 32767), (cA = t);
        return;
      }
      if (
        ((t = A.return),
        t !== null &&
          ((t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null)),
        !e && ((A = A.sibling), A !== null))
      ) {
        cA = A;
        return;
      }
      cA = A = t;
    } while (A !== null);
    (GA = 6), (cA = null);
  }
  function Og(A, e, t, a, u, s, f, Q, C) {
    A.cancelPendingCommit = null;
    do jr();
    while (PA !== 0);
    if ((vA & 6) !== 0) throw Error(r(327));
    if (e !== null) {
      if (e === A.current) throw Error(r(177));
      if (
        ((s = e.lanes | e.childLanes),
        (s |= Ru),
        tw(A, t, s, f, Q, C),
        A === DA && ((cA = DA = null), (QA = 0)),
        (fn = e),
        (Zt = A),
        (yt = t),
        (Js = s),
        (Zs = u),
        (Eg = a),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((A.callbackNode = null),
            (A.callbackPriority = 0),
            pC(kl, function () {
              return Ng(), null;
            }))
          : ((A.callbackNode = null), (A.callbackPriority = 0)),
        (a = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || a)
      ) {
        (a = b.T), (b.T = null), (u = N.p), (N.p = 2), (f = vA), (vA |= 4);
        try {
          hC(A, e, t);
        } finally {
          (vA = f), (N.p = u), (b.T = a);
        }
      }
      (PA = 1), Ig(), Lg(), Mg();
    }
  }
  function Ig() {
    if (PA === 1) {
      PA = 0;
      var A = Zt,
        e = fn,
        t = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || t) {
        (t = b.T), (b.T = null);
        var a = N.p;
        N.p = 2;
        var u = vA;
        vA |= 4;
        try {
          Qg(e, A);
          var s = uc,
            f = df(A.containerInfo),
            Q = s.focusedElem,
            C = s.selectionRange;
          if (
            f !== Q &&
            Q &&
            Q.ownerDocument &&
            Uf(Q.ownerDocument.documentElement, Q)
          ) {
            if (C !== null && Du(Q)) {
              var H = C.start,
                T = C.end;
              if ((T === void 0 && (T = H), "selectionStart" in Q))
                (Q.selectionStart = H),
                  (Q.selectionEnd = Math.min(T, Q.value.length));
              else {
                var D = Q.ownerDocument || document,
                  p = (D && D.defaultView) || window;
                if (p.getSelection) {
                  var S = p.getSelection(),
                    q = Q.textContent.length,
                    nA = Math.min(C.start, q),
                    bA = C.end === void 0 ? nA : Math.min(C.end, q);
                  !S.extend && nA > bA && ((f = bA), (bA = nA), (nA = f));
                  var E = Cf(Q, nA),
                    F = Cf(Q, bA);
                  if (
                    E &&
                    F &&
                    (S.rangeCount !== 1 ||
                      S.anchorNode !== E.node ||
                      S.anchorOffset !== E.offset ||
                      S.focusNode !== F.node ||
                      S.focusOffset !== F.offset)
                  ) {
                    var m = D.createRange();
                    m.setStart(E.node, E.offset),
                      S.removeAllRanges(),
                      nA > bA
                        ? (S.addRange(m), S.extend(F.node, F.offset))
                        : (m.setEnd(F.node, F.offset), S.addRange(m));
                  }
                }
              }
            }
            for (D = [], S = Q; (S = S.parentNode); )
              S.nodeType === 1 &&
                D.push({ element: S, left: S.scrollLeft, top: S.scrollTop });
            for (
              typeof Q.focus == "function" && Q.focus(), Q = 0;
              Q < D.length;
              Q++
            ) {
              var K = D[Q];
              (K.element.scrollLeft = K.left), (K.element.scrollTop = K.top);
            }
          }
          (ri = !!ic), (uc = ic = null);
        } finally {
          (vA = u), (N.p = a), (b.T = t);
        }
      }
      (A.current = e), (PA = 2);
    }
  }
  function Lg() {
    if (PA === 2) {
      PA = 0;
      var A = Zt,
        e = fn,
        t = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || t) {
        (t = b.T), (b.T = null);
        var a = N.p;
        N.p = 2;
        var u = vA;
        vA |= 4;
        try {
          cg(A, e.alternate, e);
        } finally {
          (vA = u), (N.p = a), (b.T = t);
        }
      }
      PA = 3;
    }
  }
  function Mg() {
    if (PA === 4 || PA === 3) {
      (PA = 0), Z0();
      var A = Zt,
        e = fn,
        t = yt,
        a = Eg;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (PA = 5)
        : ((PA = 0), (fn = Zt = null), Rg(A, A.pendingLanes));
      var u = A.pendingLanes;
      if (
        (u === 0 && (Jt = null),
        gu(t),
        (e = e.stateNode),
        me && typeof me.onCommitFiberRoot == "function")
      )
        try {
          me.onCommitFiberRoot(Dn, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        (e = b.T), (u = N.p), (N.p = 2), (b.T = null);
        try {
          for (var s = A.onRecoverableError, f = 0; f < a.length; f++) {
            var Q = a[f];
            s(Q.value, { componentStack: Q.stack });
          }
        } finally {
          (b.T = e), (N.p = u);
        }
      }
      (yt & 3) !== 0 && jr(),
        nt(A),
        (u = A.pendingLanes),
        (t & 261930) !== 0 && (u & 42) !== 0
          ? A === js
            ? gl++
            : ((gl = 0), (js = A))
          : (gl = 0),
        Ql(0);
    }
  }
  function Rg(A, e) {
    (A.pooledCacheLanes &= e) === 0 &&
      ((e = A.pooledCache), e != null && ((A.pooledCache = null), qn(e)));
  }
  function jr() {
    return Ig(), Lg(), Mg(), Ng();
  }
  function Ng() {
    if (PA !== 5) return !1;
    var A = Zt,
      e = Js;
    Js = 0;
    var t = gu(yt),
      a = b.T,
      u = N.p;
    try {
      (N.p = 32 > t ? 32 : t), (b.T = null), (t = Zs), (Zs = null);
      var s = Zt,
        f = yt;
      if (((PA = 0), (fn = Zt = null), (yt = 0), (vA & 6) !== 0))
        throw Error(r(331));
      var Q = vA;
      if (
        ((vA |= 4),
        dg(s.current),
        wg(s, s.current, f, t),
        (vA = Q),
        Ql(0, !1),
        me && typeof me.onPostCommitFiberRoot == "function")
      )
        try {
          me.onPostCommitFiberRoot(Dn, s);
        } catch {}
      return !0;
    } finally {
      (N.p = u), (b.T = a), Rg(A, e);
    }
  }
  function Gg(A, e, t) {
    (e = Re(t, e)),
      (e = Hs(A.stateNode, e, 2)),
      (A = Gt(A, e, 2)),
      A !== null && (In(A, 2), nt(A));
  }
  function mA(A, e, t) {
    if (A.tag === 3) Gg(A, A, t);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          Gg(e, A, t);
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (Jt === null || !Jt.has(a)))
          ) {
            (A = Re(t, A)),
              (t = _o(2)),
              (a = Gt(e, t, 2)),
              a !== null && (Vo(t, a, e, A), In(a, 2), nt(a));
            break;
          }
        }
        e = e.return;
      }
  }
  function Ws(A, e, t) {
    var a = A.pingCache;
    if (a === null) {
      a = A.pingCache = new UC();
      var u = new Set();
      a.set(e, u);
    } else (u = a.get(e)), u === void 0 && ((u = new Set()), a.set(e, u));
    u.has(t) ||
      ((Xs = !0), u.add(t), (A = yC.bind(null, A, e, t)), e.then(A, A));
  }
  function yC(A, e, t) {
    var a = A.pingCache;
    a !== null && a.delete(e),
      (A.pingedLanes |= A.suspendedLanes & t),
      (A.warmLanes &= ~t),
      DA === A &&
        (QA & t) === t &&
        (GA === 4 || (GA === 3 && (QA & 62914560) === QA && 300 > ye() - Vr)
          ? (vA & 2) === 0 && on(A, 0)
          : (zs |= t),
        Bn === QA && (Bn = 0)),
      nt(A);
  }
  function _g(A, e) {
    e === 0 && (e = DB()), (A = wa(A, e)), A !== null && (In(A, e), nt(A));
  }
  function mC(A) {
    var e = A.memoizedState,
      t = 0;
    e !== null && (t = e.retryLane), _g(A, t);
  }
  function HC(A, e) {
    var t = 0;
    switch (A.tag) {
      case 31:
      case 13:
        var a = A.stateNode,
          u = A.memoizedState;
        u !== null && (t = u.retryLane);
        break;
      case 19:
        a = A.stateNode;
        break;
      case 22:
        a = A.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    a !== null && a.delete(e), _g(A, t);
  }
  function pC(A, e) {
    return cu(A, e);
  }
  var qr = null,
    Qn = null,
    Ps = !1,
    kr = !1,
    $s = !1,
    qt = 0;
  function nt(A) {
    A !== Qn &&
      A.next === null &&
      (Qn === null ? (qr = Qn = A) : (Qn = Qn.next = A)),
      (kr = !0),
      Ps || ((Ps = !0), bC());
  }
  function Ql(A, e) {
    if (!$s && kr) {
      $s = !0;
      do
        for (var t = !1, a = qr; a !== null; ) {
          if (A !== 0) {
            var u = a.pendingLanes;
            if (u === 0) var s = 0;
            else {
              var f = a.suspendedLanes,
                Q = a.pingedLanes;
              (s = (1 << (31 - He(42 | A) + 1)) - 1),
                (s &= u & ~(f & ~Q)),
                (s = s & 201326741 ? (s & 201326741) | 1 : s ? s | 2 : 0);
            }
            s !== 0 && ((t = !0), Yg(a, s));
          } else
            (s = QA),
              (s = Ar(
                a,
                a === DA ? s : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1
              )),
              (s & 3) === 0 || On(a, s) || ((t = !0), Yg(a, s));
          a = a.next;
        }
      while (t);
      $s = !1;
    }
  }
  function SC() {
    Vg();
  }
  function Vg() {
    kr = Ps = !1;
    var A = 0;
    qt !== 0 && NC() && (A = qt);
    for (var e = ye(), t = null, a = qr; a !== null; ) {
      var u = a.next,
        s = Xg(a, e);
      s === 0
        ? ((a.next = null),
          t === null ? (qr = u) : (t.next = u),
          u === null && (Qn = t))
        : ((t = a), (A !== 0 || (s & 3) !== 0) && (kr = !0)),
        (a = u);
    }
    (PA !== 0 && PA !== 5) || Ql(A), qt !== 0 && (qt = 0);
  }
  function Xg(A, e) {
    for (
      var t = A.suspendedLanes,
        a = A.pingedLanes,
        u = A.expirationTimes,
        s = A.pendingLanes & -62914561;
      0 < s;

    ) {
      var f = 31 - He(s),
        Q = 1 << f,
        C = u[f];
      C === -1
        ? ((Q & t) === 0 || (Q & a) !== 0) && (u[f] = ew(Q, e))
        : C <= e && (A.expiredLanes |= Q),
        (s &= ~Q);
    }
    if (
      ((e = DA),
      (t = QA),
      (t = Ar(
        A,
        A === e ? t : 0,
        A.cancelPendingCommit !== null || A.timeoutHandle !== -1
      )),
      (a = A.callbackNode),
      t === 0 ||
        (A === e && (yA === 2 || yA === 9)) ||
        A.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && Bu(a),
        (A.callbackNode = null),
        (A.callbackPriority = 0)
      );
    if ((t & 3) === 0 || On(A, t)) {
      if (((e = t & -t), e === A.callbackPriority)) return e;
      switch ((a !== null && Bu(a), gu(t))) {
        case 2:
        case 8:
          t = xB;
          break;
        case 32:
          t = kl;
          break;
        case 268435456:
          t = KB;
          break;
        default:
          t = kl;
      }
      return (
        (a = zg.bind(null, A)),
        (t = cu(t, a)),
        (A.callbackPriority = e),
        (A.callbackNode = t),
        e
      );
    }
    return (
      a !== null && a !== null && Bu(a),
      (A.callbackPriority = 2),
      (A.callbackNode = null),
      2
    );
  }
  function zg(A, e) {
    if (PA !== 0 && PA !== 5)
      return (A.callbackNode = null), (A.callbackPriority = 0), null;
    var t = A.callbackNode;
    if (jr() && A.callbackNode !== t) return null;
    var a = QA;
    return (
      (a = Ar(
        A,
        A === DA ? a : 0,
        A.cancelPendingCommit !== null || A.timeoutHandle !== -1
      )),
      a === 0
        ? null
        : (mg(A, a, e),
          Xg(A, ye()),
          A.callbackNode != null && A.callbackNode === t
            ? zg.bind(null, A)
            : null)
    );
  }
  function Yg(A, e) {
    if (jr()) return null;
    mg(A, e, !0);
  }
  function bC() {
    _C(function () {
      (vA & 6) !== 0 ? cu(TB, SC) : Vg();
    });
  }
  function Ac() {
    if (qt === 0) {
      var A = $a;
      A === 0 && ((A = Wl), (Wl <<= 1), (Wl & 261888) === 0 && (Wl = 256)),
        (qt = A);
    }
    return qt;
  }
  function Jg(A) {
    return A == null || typeof A == "symbol" || typeof A == "boolean"
      ? null
      : typeof A == "function"
      ? A
      : nr("" + A);
  }
  function Zg(A, e) {
    var t = e.ownerDocument.createElement("input");
    return (
      (t.name = e.name),
      (t.value = e.value),
      A.id && t.setAttribute("form", A.id),
      e.parentNode.insertBefore(t, e),
      (A = new FormData(A)),
      t.parentNode.removeChild(t),
      A
    );
  }
  function TC(A, e, t, a, u) {
    if (e === "submit" && t && t.stateNode === u) {
      var s = Jg((u[he] || null).action),
        f = a.submitter;
      f &&
        ((e = (e = f[he] || null)
          ? Jg(e.formAction)
          : f.getAttribute("formAction")),
        e !== null && ((s = e), (f = null)));
      var Q = new ur("action", "action", null, a, u);
      A.push({
        event: Q,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (qt !== 0) {
                  var C = f ? Zg(u, f) : new FormData(u);
                  ds(
                    t,
                    { pending: !0, data: C, method: u.method, action: s },
                    null,
                    C
                  );
                }
              } else
                typeof s == "function" &&
                  (Q.preventDefault(),
                  (C = f ? Zg(u, f) : new FormData(u)),
                  ds(
                    t,
                    { pending: !0, data: C, method: u.method, action: s },
                    s,
                    C
                  ));
            },
            currentTarget: u,
          },
        ],
      });
    }
  }
  for (var ec = 0; ec < Mu.length; ec++) {
    var tc = Mu[ec],
      xC = tc.toLowerCase(),
      KC = tc[0].toUpperCase() + tc.slice(1);
    ke(xC, "on" + KC);
  }
  ke(Ef, "onAnimationEnd"),
    ke(yf, "onAnimationIteration"),
    ke(mf, "onAnimationStart"),
    ke("dblclick", "onDoubleClick"),
    ke("focusin", "onFocus"),
    ke("focusout", "onBlur"),
    ke(jw, "onTransitionRun"),
    ke(qw, "onTransitionStart"),
    ke(kw, "onTransitionCancel"),
    ke(Hf, "onTransitionEnd"),
    Na("onMouseEnter", ["mouseout", "mouseover"]),
    Na("onMouseLeave", ["mouseout", "mouseover"]),
    Na("onPointerEnter", ["pointerout", "pointerover"]),
    Na("onPointerLeave", ["pointerout", "pointerover"]),
    oa(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    oa(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    oa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    oa(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    oa(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    oa(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var hl =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    DC = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(hl)
    );
  function jg(A, e) {
    e = (e & 4) !== 0;
    for (var t = 0; t < A.length; t++) {
      var a = A[t],
        u = a.event;
      a = a.listeners;
      A: {
        var s = void 0;
        if (e)
          for (var f = a.length - 1; 0 <= f; f--) {
            var Q = a[f],
              C = Q.instance,
              H = Q.currentTarget;
            if (((Q = Q.listener), C !== s && u.isPropagationStopped()))
              break A;
            (s = Q), (u.currentTarget = H);
            try {
              s(u);
            } catch (T) {
              Br(T);
            }
            (u.currentTarget = null), (s = C);
          }
        else
          for (f = 0; f < a.length; f++) {
            if (
              ((Q = a[f]),
              (C = Q.instance),
              (H = Q.currentTarget),
              (Q = Q.listener),
              C !== s && u.isPropagationStopped())
            )
              break A;
            (s = Q), (u.currentTarget = H);
            try {
              s(u);
            } catch (T) {
              Br(T);
            }
            (u.currentTarget = null), (s = C);
          }
      }
    }
  }
  function BA(A, e) {
    var t = e[Qu];
    t === void 0 && (t = e[Qu] = new Set());
    var a = A + "__bubble";
    t.has(a) || (qg(e, A, 2, !1), t.add(a));
  }
  function ac(A, e, t) {
    var a = 0;
    e && (a |= 4), qg(t, A, a, e);
  }
  var Wr = "_reactListening" + Math.random().toString(36).slice(2);
  function nc(A) {
    if (!A[Wr]) {
      (A[Wr] = !0),
        GB.forEach(function (t) {
          t !== "selectionchange" && (DC.has(t) || ac(t, !1, A), ac(t, !0, A));
        });
      var e = A.nodeType === 9 ? A : A.ownerDocument;
      e === null || e[Wr] || ((e[Wr] = !0), ac("selectionchange", !1, e));
    }
  }
  function qg(A, e, t, a) {
    switch (yQ(e)) {
      case 2:
        var u = iU;
        break;
      case 8:
        u = uU;
        break;
      default:
        u = Uc;
    }
    (t = u.bind(null, e, t, A)),
      (u = void 0),
      !yu ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (u = !0),
      a
        ? u !== void 0
          ? A.addEventListener(e, t, { capture: !0, passive: u })
          : A.addEventListener(e, t, !0)
        : u !== void 0
        ? A.addEventListener(e, t, { passive: u })
        : A.addEventListener(e, t, !1);
  }
  function lc(A, e, t, a, u) {
    var s = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      A: for (;;) {
        if (a === null) return;
        var f = a.tag;
        if (f === 3 || f === 4) {
          var Q = a.stateNode.containerInfo;
          if (Q === u) break;
          if (f === 4)
            for (f = a.return; f !== null; ) {
              var C = f.tag;
              if ((C === 3 || C === 4) && f.stateNode.containerInfo === u)
                return;
              f = f.return;
            }
          for (; Q !== null; ) {
            if (((f = La(Q)), f === null)) return;
            if (((C = f.tag), C === 5 || C === 6 || C === 26 || C === 27)) {
              a = s = f;
              continue A;
            }
            Q = Q.parentNode;
          }
        }
        a = a.return;
      }
    PB(function () {
      var H = s,
        T = Fu(t),
        D = [];
      A: {
        var p = pf.get(A);
        if (p !== void 0) {
          var S = ur,
            q = A;
          switch (A) {
            case "keypress":
              if (rr(t) === 0) break A;
            case "keydown":
            case "keyup":
              S = Hw;
              break;
            case "focusin":
              (q = "focus"), (S = Su);
              break;
            case "focusout":
              (q = "blur"), (S = Su);
              break;
            case "beforeblur":
            case "afterblur":
              S = Su;
              break;
            case "click":
              if (t.button === 2) break A;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              S = ef;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              S = gw;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              S = bw;
              break;
            case Ef:
            case yf:
            case mf:
              S = ww;
              break;
            case Hf:
              S = xw;
              break;
            case "scroll":
            case "scrollend":
              S = fw;
              break;
            case "wheel":
              S = Dw;
              break;
            case "copy":
            case "cut":
            case "paste":
              S = Uw;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              S = af;
              break;
            case "toggle":
            case "beforetoggle":
              S = Iw;
          }
          var nA = (e & 4) !== 0,
            bA = !nA && (A === "scroll" || A === "scrollend"),
            E = nA ? (p !== null ? p + "Capture" : null) : p;
          nA = [];
          for (var F = H, m; F !== null; ) {
            var K = F;
            if (
              ((m = K.stateNode),
              (K = K.tag),
              (K !== 5 && K !== 26 && K !== 27) ||
                m === null ||
                E === null ||
                ((K = Rn(F, E)), K != null && nA.push(wl(F, K, m))),
              bA)
            )
              break;
            F = F.return;
          }
          0 < nA.length &&
            ((p = new S(p, q, null, t, T)),
            D.push({ event: p, listeners: nA }));
        }
      }
      if ((e & 7) === 0) {
        A: {
          if (
            ((p = A === "mouseover" || A === "pointerover"),
            (S = A === "mouseout" || A === "pointerout"),
            p &&
              t !== vu &&
              (q = t.relatedTarget || t.fromElement) &&
              (La(q) || q[Ia]))
          )
            break A;
          if (
            (S || p) &&
            ((p =
              T.window === T
                ? T
                : (p = T.ownerDocument)
                ? p.defaultView || p.parentWindow
                : window),
            S
              ? ((q = t.relatedTarget || t.toElement),
                (S = H),
                (q = q ? La(q) : null),
                q !== null &&
                  ((bA = B(q)),
                  (nA = q.tag),
                  q !== bA || (nA !== 5 && nA !== 27 && nA !== 6)) &&
                  (q = null))
              : ((S = null), (q = H)),
            S !== q)
          ) {
            if (
              ((nA = ef),
              (K = "onMouseLeave"),
              (E = "onMouseEnter"),
              (F = "mouse"),
              (A === "pointerout" || A === "pointerover") &&
                ((nA = af),
                (K = "onPointerLeave"),
                (E = "onPointerEnter"),
                (F = "pointer")),
              (bA = S == null ? p : Mn(S)),
              (m = q == null ? p : Mn(q)),
              (p = new nA(K, F + "leave", S, t, T)),
              (p.target = bA),
              (p.relatedTarget = m),
              (K = null),
              La(T) === H &&
                ((nA = new nA(E, F + "enter", q, t, T)),
                (nA.target = m),
                (nA.relatedTarget = bA),
                (K = nA)),
              (bA = K),
              S && q)
            )
              e: {
                for (nA = OC, E = S, F = q, m = 0, K = E; K; K = nA(K)) m++;
                K = 0;
                for (var $ = F; $; $ = nA($)) K++;
                for (; 0 < m - K; ) (E = nA(E)), m--;
                for (; 0 < K - m; ) (F = nA(F)), K--;
                for (; m--; ) {
                  if (E === F || (F !== null && E === F.alternate)) {
                    nA = E;
                    break e;
                  }
                  (E = nA(E)), (F = nA(F));
                }
                nA = null;
              }
            else nA = null;
            S !== null && kg(D, p, S, nA, !1),
              q !== null && bA !== null && kg(D, bA, q, nA, !0);
          }
        }
        A: {
          if (
            ((p = H ? Mn(H) : window),
            (S = p.nodeName && p.nodeName.toLowerCase()),
            S === "select" || (S === "input" && p.type === "file"))
          )
            var UA = ff;
          else if (cf(p))
            if (of) UA = Yw;
            else {
              UA = Xw;
              var k = Vw;
            }
          else
            (S = p.nodeName),
              !S ||
              S.toLowerCase() !== "input" ||
              (p.type !== "checkbox" && p.type !== "radio")
                ? H && du(H.elementType) && (UA = ff)
                : (UA = zw);
          if (UA && (UA = UA(A, H))) {
            Bf(D, UA, t, T);
            break A;
          }
          k && k(A, p, H),
            A === "focusout" &&
              H &&
              p.type === "number" &&
              H.memoizedProps.value != null &&
              Uu(p, "number", p.value);
        }
        switch (((k = H ? Mn(H) : window), A)) {
          case "focusin":
            (cf(k) || k.contentEditable === "true") &&
              ((Ya = k), (Ou = H), (Jn = null));
            break;
          case "focusout":
            Jn = Ou = Ya = null;
            break;
          case "mousedown":
            Iu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Iu = !1), vf(D, t, T);
            break;
          case "selectionchange":
            if (Zw) break;
          case "keydown":
          case "keyup":
            vf(D, t, T);
        }
        var uA;
        if (Tu)
          A: {
            switch (A) {
              case "compositionstart":
                var hA = "onCompositionStart";
                break A;
              case "compositionend":
                hA = "onCompositionEnd";
                break A;
              case "compositionupdate":
                hA = "onCompositionUpdate";
                break A;
            }
            hA = void 0;
          }
        else
          za
            ? uf(A, t) && (hA = "onCompositionEnd")
            : A === "keydown" &&
              t.keyCode === 229 &&
              (hA = "onCompositionStart");
        hA &&
          (nf &&
            t.locale !== "ko" &&
            (za || hA !== "onCompositionStart"
              ? hA === "onCompositionEnd" && za && (uA = $B())
              : ((Dt = T),
                (mu = "value" in Dt ? Dt.value : Dt.textContent),
                (za = !0))),
          (k = Pr(H, hA)),
          0 < k.length &&
            ((hA = new tf(hA, A, null, t, T)),
            D.push({ event: hA, listeners: k }),
            uA
              ? (hA.data = uA)
              : ((uA = sf(t)), uA !== null && (hA.data = uA)))),
          (uA = Mw ? Rw(A, t) : Nw(A, t)) &&
            ((hA = Pr(H, "onBeforeInput")),
            0 < hA.length &&
              ((k = new tf("onBeforeInput", "beforeinput", null, t, T)),
              D.push({ event: k, listeners: hA }),
              (k.data = uA))),
          TC(D, A, H, t, T);
      }
      jg(D, e);
    });
  }
  function wl(A, e, t) {
    return { instance: A, listener: e, currentTarget: t };
  }
  function Pr(A, e) {
    for (var t = e + "Capture", a = []; A !== null; ) {
      var u = A,
        s = u.stateNode;
      if (
        ((u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          s === null ||
          ((u = Rn(A, t)),
          u != null && a.unshift(wl(A, u, s)),
          (u = Rn(A, e)),
          u != null && a.push(wl(A, u, s))),
        A.tag === 3)
      )
        return a;
      A = A.return;
    }
    return [];
  }
  function OC(A) {
    if (A === null) return null;
    do A = A.return;
    while (A && A.tag !== 5 && A.tag !== 27);
    return A || null;
  }
  function kg(A, e, t, a, u) {
    for (var s = e._reactName, f = []; t !== null && t !== a; ) {
      var Q = t,
        C = Q.alternate,
        H = Q.stateNode;
      if (((Q = Q.tag), C !== null && C === a)) break;
      (Q !== 5 && Q !== 26 && Q !== 27) ||
        H === null ||
        ((C = H),
        u
          ? ((H = Rn(t, s)), H != null && f.unshift(wl(t, H, C)))
          : u || ((H = Rn(t, s)), H != null && f.push(wl(t, H, C)))),
        (t = t.return);
    }
    f.length !== 0 && A.push({ event: e, listeners: f });
  }
  var IC = /\r\n?/g,
    LC = /\u0000|\uFFFD/g;
  function Wg(A) {
    return (typeof A == "string" ? A : "" + A)
      .replace(
        IC,
        `
`
      )
      .replace(LC, "");
  }
  function Pg(A, e) {
    return (e = Wg(e)), Wg(A) === e;
  }
  function SA(A, e, t, a, u, s) {
    switch (t) {
      case "children":
        typeof a == "string"
          ? e === "body" || (e === "textarea" && a === "") || _a(A, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            e !== "body" &&
            _a(A, "" + a);
        break;
      case "className":
        tr(A, "class", a);
        break;
      case "tabIndex":
        tr(A, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        tr(A, t, a);
        break;
      case "style":
        kB(A, a, s);
        break;
      case "data":
        if (e !== "object") {
          tr(A, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (e !== "a" || t !== "href")) {
          A.removeAttribute(t);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          A.removeAttribute(t);
          break;
        }
        (a = nr("" + a)), A.setAttribute(t, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          A.setAttribute(
            t,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof s == "function" &&
            (t === "formAction"
              ? (e !== "input" && SA(A, e, "name", u.name, u, null),
                SA(A, e, "formEncType", u.formEncType, u, null),
                SA(A, e, "formMethod", u.formMethod, u, null),
                SA(A, e, "formTarget", u.formTarget, u, null))
              : (SA(A, e, "encType", u.encType, u, null),
                SA(A, e, "method", u.method, u, null),
                SA(A, e, "target", u.target, u, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          A.removeAttribute(t);
          break;
        }
        (a = nr("" + a)), A.setAttribute(t, a);
        break;
      case "onClick":
        a != null && (A.onclick = st);
        break;
      case "onScroll":
        a != null && BA("scroll", A);
        break;
      case "onScrollEnd":
        a != null && BA("scrollend", A);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(r(61));
          if (((t = a.__html), t != null)) {
            if (u.children != null) throw Error(r(60));
            A.innerHTML = t;
          }
        }
        break;
      case "multiple":
        A.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        A.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          A.removeAttribute("xlink:href");
          break;
        }
        (t = nr("" + a)),
          A.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", t);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? A.setAttribute(t, "" + a)
          : A.removeAttribute(t);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol"
          ? A.setAttribute(t, "")
          : A.removeAttribute(t);
        break;
      case "capture":
      case "download":
        a === !0
          ? A.setAttribute(t, "")
          : a !== !1 &&
            a != null &&
            typeof a != "function" &&
            typeof a != "symbol"
          ? A.setAttribute(t, a)
          : A.removeAttribute(t);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? A.setAttribute(t, a)
          : A.removeAttribute(t);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? A.removeAttribute(t)
          : A.setAttribute(t, a);
        break;
      case "popover":
        BA("beforetoggle", A), BA("toggle", A), er(A, "popover", a);
        break;
      case "xlinkActuate":
        ut(A, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        ut(A, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        ut(A, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        ut(A, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        ut(A, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        ut(A, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        ut(A, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        ut(A, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        ut(A, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        er(A, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < t.length) ||
          (t[0] !== "o" && t[0] !== "O") ||
          (t[1] !== "n" && t[1] !== "N")) &&
          ((t = cw.get(t) || t), er(A, t, a));
    }
  }
  function rc(A, e, t, a, u, s) {
    switch (t) {
      case "style":
        kB(A, a, s);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(r(61));
          if (((t = a.__html), t != null)) {
            if (u.children != null) throw Error(r(60));
            A.innerHTML = t;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? _a(A, a)
          : (typeof a == "number" || typeof a == "bigint") && _a(A, "" + a);
        break;
      case "onScroll":
        a != null && BA("scroll", A);
        break;
      case "onScrollEnd":
        a != null && BA("scrollend", A);
        break;
      case "onClick":
        a != null && (A.onclick = st);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!_B.hasOwnProperty(t))
          A: {
            if (
              t[0] === "o" &&
              t[1] === "n" &&
              ((u = t.endsWith("Capture")),
              (e = t.slice(2, u ? t.length - 7 : void 0)),
              (s = A[he] || null),
              (s = s != null ? s[t] : null),
              typeof s == "function" && A.removeEventListener(e, s, u),
              typeof a == "function")
            ) {
              typeof s != "function" &&
                s !== null &&
                (t in A
                  ? (A[t] = null)
                  : A.hasAttribute(t) && A.removeAttribute(t)),
                A.addEventListener(e, a, u);
              break A;
            }
            t in A
              ? (A[t] = a)
              : a === !0
              ? A.setAttribute(t, "")
              : er(A, t, a);
          }
    }
  }
  function ie(A, e, t) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        BA("error", A), BA("load", A);
        var a = !1,
          u = !1,
          s;
        for (s in t)
          if (t.hasOwnProperty(s)) {
            var f = t[s];
            if (f != null)
              switch (s) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, e));
                default:
                  SA(A, e, s, f, t, null);
              }
          }
        u && SA(A, e, "srcSet", t.srcSet, t, null),
          a && SA(A, e, "src", t.src, t, null);
        return;
      case "input":
        BA("invalid", A);
        var Q = (s = f = u = null),
          C = null,
          H = null;
        for (a in t)
          if (t.hasOwnProperty(a)) {
            var T = t[a];
            if (T != null)
              switch (a) {
                case "name":
                  u = T;
                  break;
                case "type":
                  f = T;
                  break;
                case "checked":
                  C = T;
                  break;
                case "defaultChecked":
                  H = T;
                  break;
                case "value":
                  s = T;
                  break;
                case "defaultValue":
                  Q = T;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (T != null) throw Error(r(137, e));
                  break;
                default:
                  SA(A, e, a, T, t, null);
              }
          }
        JB(A, s, Q, C, H, f, u, !1);
        return;
      case "select":
        BA("invalid", A), (a = f = s = null);
        for (u in t)
          if (t.hasOwnProperty(u) && ((Q = t[u]), Q != null))
            switch (u) {
              case "value":
                s = Q;
                break;
              case "defaultValue":
                f = Q;
                break;
              case "multiple":
                a = Q;
              default:
                SA(A, e, u, Q, t, null);
            }
        (e = s),
          (t = f),
          (A.multiple = !!a),
          e != null ? Ga(A, !!a, e, !1) : t != null && Ga(A, !!a, t, !0);
        return;
      case "textarea":
        BA("invalid", A), (s = u = a = null);
        for (f in t)
          if (t.hasOwnProperty(f) && ((Q = t[f]), Q != null))
            switch (f) {
              case "value":
                a = Q;
                break;
              case "defaultValue":
                u = Q;
                break;
              case "children":
                s = Q;
                break;
              case "dangerouslySetInnerHTML":
                if (Q != null) throw Error(r(91));
                break;
              default:
                SA(A, e, f, Q, t, null);
            }
        jB(A, a, u, s);
        return;
      case "option":
        for (C in t)
          if (t.hasOwnProperty(C) && ((a = t[C]), a != null))
            switch (C) {
              case "selected":
                A.selected =
                  a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                SA(A, e, C, a, t, null);
            }
        return;
      case "dialog":
        BA("beforetoggle", A), BA("toggle", A), BA("cancel", A), BA("close", A);
        break;
      case "iframe":
      case "object":
        BA("load", A);
        break;
      case "video":
      case "audio":
        for (a = 0; a < hl.length; a++) BA(hl[a], A);
        break;
      case "image":
        BA("error", A), BA("load", A);
        break;
      case "details":
        BA("toggle", A);
        break;
      case "embed":
      case "source":
      case "link":
        BA("error", A), BA("load", A);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (H in t)
          if (t.hasOwnProperty(H) && ((a = t[H]), a != null))
            switch (H) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, e));
              default:
                SA(A, e, H, a, t, null);
            }
        return;
      default:
        if (du(e)) {
          for (T in t)
            t.hasOwnProperty(T) &&
              ((a = t[T]), a !== void 0 && rc(A, e, T, a, t, void 0));
          return;
        }
    }
    for (Q in t)
      t.hasOwnProperty(Q) && ((a = t[Q]), a != null && SA(A, e, Q, a, t, null));
  }
  function MC(A, e, t, a) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null,
          s = null,
          f = null,
          Q = null,
          C = null,
          H = null,
          T = null;
        for (S in t) {
          var D = t[S];
          if (t.hasOwnProperty(S) && D != null)
            switch (S) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                C = D;
              default:
                a.hasOwnProperty(S) || SA(A, e, S, null, a, D);
            }
        }
        for (var p in a) {
          var S = a[p];
          if (((D = t[p]), a.hasOwnProperty(p) && (S != null || D != null)))
            switch (p) {
              case "type":
                s = S;
                break;
              case "name":
                u = S;
                break;
              case "checked":
                H = S;
                break;
              case "defaultChecked":
                T = S;
                break;
              case "value":
                f = S;
                break;
              case "defaultValue":
                Q = S;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (S != null) throw Error(r(137, e));
                break;
              default:
                S !== D && SA(A, e, p, S, a, D);
            }
        }
        Cu(A, f, Q, C, H, T, s, u);
        return;
      case "select":
        S = f = Q = p = null;
        for (s in t)
          if (((C = t[s]), t.hasOwnProperty(s) && C != null))
            switch (s) {
              case "value":
                break;
              case "multiple":
                S = C;
              default:
                a.hasOwnProperty(s) || SA(A, e, s, null, a, C);
            }
        for (u in a)
          if (
            ((s = a[u]),
            (C = t[u]),
            a.hasOwnProperty(u) && (s != null || C != null))
          )
            switch (u) {
              case "value":
                p = s;
                break;
              case "defaultValue":
                Q = s;
                break;
              case "multiple":
                f = s;
              default:
                s !== C && SA(A, e, u, s, a, C);
            }
        (e = Q),
          (t = f),
          (a = S),
          p != null
            ? Ga(A, !!t, p, !1)
            : !!a != !!t &&
              (e != null ? Ga(A, !!t, e, !0) : Ga(A, !!t, t ? [] : "", !1));
        return;
      case "textarea":
        S = p = null;
        for (Q in t)
          if (
            ((u = t[Q]),
            t.hasOwnProperty(Q) && u != null && !a.hasOwnProperty(Q))
          )
            switch (Q) {
              case "value":
                break;
              case "children":
                break;
              default:
                SA(A, e, Q, null, a, u);
            }
        for (f in a)
          if (
            ((u = a[f]),
            (s = t[f]),
            a.hasOwnProperty(f) && (u != null || s != null))
          )
            switch (f) {
              case "value":
                p = u;
                break;
              case "defaultValue":
                S = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(r(91));
                break;
              default:
                u !== s && SA(A, e, f, u, a, s);
            }
        ZB(A, p, S);
        return;
      case "option":
        for (var q in t)
          if (
            ((p = t[q]),
            t.hasOwnProperty(q) && p != null && !a.hasOwnProperty(q))
          )
            switch (q) {
              case "selected":
                A.selected = !1;
                break;
              default:
                SA(A, e, q, null, a, p);
            }
        for (C in a)
          if (
            ((p = a[C]),
            (S = t[C]),
            a.hasOwnProperty(C) && p !== S && (p != null || S != null))
          )
            switch (C) {
              case "selected":
                A.selected =
                  p && typeof p != "function" && typeof p != "symbol";
                break;
              default:
                SA(A, e, C, p, a, S);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var nA in t)
          (p = t[nA]),
            t.hasOwnProperty(nA) &&
              p != null &&
              !a.hasOwnProperty(nA) &&
              SA(A, e, nA, null, a, p);
        for (H in a)
          if (
            ((p = a[H]),
            (S = t[H]),
            a.hasOwnProperty(H) && p !== S && (p != null || S != null))
          )
            switch (H) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (p != null) throw Error(r(137, e));
                break;
              default:
                SA(A, e, H, p, a, S);
            }
        return;
      default:
        if (du(e)) {
          for (var bA in t)
            (p = t[bA]),
              t.hasOwnProperty(bA) &&
                p !== void 0 &&
                !a.hasOwnProperty(bA) &&
                rc(A, e, bA, void 0, a, p);
          for (T in a)
            (p = a[T]),
              (S = t[T]),
              !a.hasOwnProperty(T) ||
                p === S ||
                (p === void 0 && S === void 0) ||
                rc(A, e, T, p, a, S);
          return;
        }
    }
    for (var E in t)
      (p = t[E]),
        t.hasOwnProperty(E) &&
          p != null &&
          !a.hasOwnProperty(E) &&
          SA(A, e, E, null, a, p);
    for (D in a)
      (p = a[D]),
        (S = t[D]),
        !a.hasOwnProperty(D) ||
          p === S ||
          (p == null && S == null) ||
          SA(A, e, D, p, a, S);
  }
  function $g(A) {
    switch (A) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function RC() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var A = 0, e = 0, t = performance.getEntriesByType("resource"), a = 0;
        a < t.length;
        a++
      ) {
        var u = t[a],
          s = u.transferSize,
          f = u.initiatorType,
          Q = u.duration;
        if (s && Q && $g(f)) {
          for (f = 0, Q = u.responseEnd, a += 1; a < t.length; a++) {
            var C = t[a],
              H = C.startTime;
            if (H > Q) break;
            var T = C.transferSize,
              D = C.initiatorType;
            T &&
              $g(D) &&
              ((C = C.responseEnd), (f += T * (C < Q ? 1 : (Q - H) / (C - H))));
          }
          if ((--a, (e += (8 * (s + f)) / (u.duration / 1e3)), A++, 10 < A))
            break;
        }
      }
      if (0 < A) return e / A / 1e6;
    }
    return navigator.connection &&
      ((A = navigator.connection.downlink), typeof A == "number")
      ? A
      : 5;
  }
  var ic = null,
    uc = null;
  function $r(A) {
    return A.nodeType === 9 ? A : A.ownerDocument;
  }
  function AQ(A) {
    switch (A) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function eQ(A, e) {
    if (A === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return A === 1 && e === "foreignObject" ? 0 : A;
  }
  function sc(A, e) {
    return (
      A === "textarea" ||
      A === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var cc = null;
  function NC() {
    var A = window.event;
    return A && A.type === "popstate"
      ? A === cc
        ? !1
        : ((cc = A), !0)
      : ((cc = null), !1);
  }
  var tQ = typeof setTimeout == "function" ? setTimeout : void 0,
    GC = typeof clearTimeout == "function" ? clearTimeout : void 0,
    aQ = typeof Promise == "function" ? Promise : void 0,
    _C =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof aQ < "u"
        ? function (A) {
            return aQ.resolve(null).then(A).catch(VC);
          }
        : tQ;
  function VC(A) {
    setTimeout(function () {
      throw A;
    });
  }
  function kt(A) {
    return A === "head";
  }
  function nQ(A, e) {
    var t = e,
      a = 0;
    do {
      var u = t.nextSibling;
      if ((A.removeChild(t), u && u.nodeType === 8))
        if (((t = u.data), t === "/$" || t === "/&")) {
          if (a === 0) {
            A.removeChild(u), Un(e);
            return;
          }
          a--;
        } else if (
          t === "$" ||
          t === "$?" ||
          t === "$~" ||
          t === "$!" ||
          t === "&"
        )
          a++;
        else if (t === "html") Cl(A.ownerDocument.documentElement);
        else if (t === "head") {
          (t = A.ownerDocument.head), Cl(t);
          for (var s = t.firstChild; s; ) {
            var f = s.nextSibling,
              Q = s.nodeName;
            s[Ln] ||
              Q === "SCRIPT" ||
              Q === "STYLE" ||
              (Q === "LINK" && s.rel.toLowerCase() === "stylesheet") ||
              t.removeChild(s),
              (s = f);
          }
        } else t === "body" && Cl(A.ownerDocument.body);
      t = u;
    } while (t);
    Un(e);
  }
  function lQ(A, e) {
    var t = A;
    A = 0;
    do {
      var a = t.nextSibling;
      if (
        (t.nodeType === 1
          ? e
            ? ((t._stashedDisplay = t.style.display),
              (t.style.display = "none"))
            : ((t.style.display = t._stashedDisplay || ""),
              t.getAttribute("style") === "" && t.removeAttribute("style"))
          : t.nodeType === 3 &&
            (e
              ? ((t._stashedText = t.nodeValue), (t.nodeValue = ""))
              : (t.nodeValue = t._stashedText || "")),
        a && a.nodeType === 8)
      )
        if (((t = a.data), t === "/$")) {
          if (A === 0) break;
          A--;
        } else (t !== "$" && t !== "$?" && t !== "$~" && t !== "$!") || A++;
      t = a;
    } while (t);
  }
  function Bc(A) {
    var e = A.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var t = e;
      switch (((e = e.nextSibling), t.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Bc(t), hu(t);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (t.rel.toLowerCase() === "stylesheet") continue;
      }
      A.removeChild(t);
    }
  }
  function XC(A, e, t, a) {
    for (; A.nodeType === 1; ) {
      var u = t;
      if (A.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (A.nodeName !== "INPUT" || A.type !== "hidden")) break;
      } else if (a) {
        if (!A[Ln])
          switch (e) {
            case "meta":
              if (!A.hasAttribute("itemprop")) break;
              return A;
            case "link":
              if (
                ((s = A.getAttribute("rel")),
                s === "stylesheet" && A.hasAttribute("data-precedence"))
              )
                break;
              if (
                s !== u.rel ||
                A.getAttribute("href") !==
                  (u.href == null || u.href === "" ? null : u.href) ||
                A.getAttribute("crossorigin") !==
                  (u.crossOrigin == null ? null : u.crossOrigin) ||
                A.getAttribute("title") !== (u.title == null ? null : u.title)
              )
                break;
              return A;
            case "style":
              if (A.hasAttribute("data-precedence")) break;
              return A;
            case "script":
              if (
                ((s = A.getAttribute("src")),
                (s !== (u.src == null ? null : u.src) ||
                  A.getAttribute("type") !== (u.type == null ? null : u.type) ||
                  A.getAttribute("crossorigin") !==
                    (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  s &&
                  A.hasAttribute("async") &&
                  !A.hasAttribute("itemprop"))
              )
                break;
              return A;
            default:
              return A;
          }
      } else if (e === "input" && A.type === "hidden") {
        var s = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && A.getAttribute("name") === s) return A;
      } else return A;
      if (((A = Xe(A.nextSibling)), A === null)) break;
    }
    return null;
  }
  function zC(A, e, t) {
    if (e === "") return null;
    for (; A.nodeType !== 3; )
      if (
        ((A.nodeType !== 1 || A.nodeName !== "INPUT" || A.type !== "hidden") &&
          !t) ||
        ((A = Xe(A.nextSibling)), A === null)
      )
        return null;
    return A;
  }
  function rQ(A, e) {
    for (; A.nodeType !== 8; )
      if (
        ((A.nodeType !== 1 || A.nodeName !== "INPUT" || A.type !== "hidden") &&
          !e) ||
        ((A = Xe(A.nextSibling)), A === null)
      )
        return null;
    return A;
  }
  function fc(A) {
    return A.data === "$?" || A.data === "$~";
  }
  function oc(A) {
    return (
      A.data === "$!" ||
      (A.data === "$?" && A.ownerDocument.readyState !== "loading")
    );
  }
  function YC(A, e) {
    var t = A.ownerDocument;
    if (A.data === "$~") A._reactRetry = e;
    else if (A.data !== "$?" || t.readyState !== "loading") e();
    else {
      var a = function () {
        e(), t.removeEventListener("DOMContentLoaded", a);
      };
      t.addEventListener("DOMContentLoaded", a), (A._reactRetry = a);
    }
  }
  function Xe(A) {
    for (; A != null; A = A.nextSibling) {
      var e = A.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = A.data),
          e === "$" ||
            e === "$!" ||
            e === "$?" ||
            e === "$~" ||
            e === "&" ||
            e === "F!" ||
            e === "F")
        )
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return A;
  }
  var gc = null;
  function iQ(A) {
    A = A.nextSibling;
    for (var e = 0; A; ) {
      if (A.nodeType === 8) {
        var t = A.data;
        if (t === "/$" || t === "/&") {
          if (e === 0) return Xe(A.nextSibling);
          e--;
        } else
          (t !== "$" && t !== "$!" && t !== "$?" && t !== "$~" && t !== "&") ||
            e++;
      }
      A = A.nextSibling;
    }
    return null;
  }
  function uQ(A) {
    A = A.previousSibling;
    for (var e = 0; A; ) {
      if (A.nodeType === 8) {
        var t = A.data;
        if (t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&") {
          if (e === 0) return A;
          e--;
        } else (t !== "/$" && t !== "/&") || e++;
      }
      A = A.previousSibling;
    }
    return null;
  }
  function sQ(A, e, t) {
    switch (((e = $r(t)), A)) {
      case "html":
        if (((A = e.documentElement), !A)) throw Error(r(452));
        return A;
      case "head":
        if (((A = e.head), !A)) throw Error(r(453));
        return A;
      case "body":
        if (((A = e.body), !A)) throw Error(r(454));
        return A;
      default:
        throw Error(r(451));
    }
  }
  function Cl(A) {
    for (var e = A.attributes; e.length; ) A.removeAttributeNode(e[0]);
    hu(A);
  }
  var ze = new Map(),
    cQ = new Set();
  function Ai(A) {
    return typeof A.getRootNode == "function"
      ? A.getRootNode()
      : A.nodeType === 9
      ? A
      : A.ownerDocument;
  }
  var mt = N.d;
  N.d = { f: JC, r: ZC, D: jC, C: qC, L: kC, m: WC, X: $C, S: PC, M: AU };
  function JC() {
    var A = mt.f(),
      e = Yr();
    return A || e;
  }
  function ZC(A) {
    var e = Ma(A);
    e !== null && e.tag === 5 && e.type === "form" ? po(e) : mt.r(A);
  }
  var hn = typeof document > "u" ? null : document;
  function BQ(A, e, t) {
    var a = hn;
    if (a && typeof e == "string" && e) {
      var u = Le(e);
      (u = 'link[rel="' + A + '"][href="' + u + '"]'),
        typeof t == "string" && (u += '[crossorigin="' + t + '"]'),
        cQ.has(u) ||
          (cQ.add(u),
          (A = { rel: A, crossOrigin: t, href: e }),
          a.querySelector(u) === null &&
            ((e = a.createElement("link")),
            ie(e, "link", A),
            Ae(e),
            a.head.appendChild(e)));
    }
  }
  function jC(A) {
    mt.D(A), BQ("dns-prefetch", A, null);
  }
  function qC(A, e) {
    mt.C(A, e), BQ("preconnect", A, e);
  }
  function kC(A, e, t) {
    mt.L(A, e, t);
    var a = hn;
    if (a && A && e) {
      var u = 'link[rel="preload"][as="' + Le(e) + '"]';
      e === "image" && t && t.imageSrcSet
        ? ((u += '[imagesrcset="' + Le(t.imageSrcSet) + '"]'),
          typeof t.imageSizes == "string" &&
            (u += '[imagesizes="' + Le(t.imageSizes) + '"]'))
        : (u += '[href="' + Le(A) + '"]');
      var s = u;
      switch (e) {
        case "style":
          s = wn(A);
          break;
        case "script":
          s = Cn(A);
      }
      ze.has(s) ||
        ((A = U(
          {
            rel: "preload",
            href: e === "image" && t && t.imageSrcSet ? void 0 : A,
            as: e,
          },
          t
        )),
        ze.set(s, A),
        a.querySelector(u) !== null ||
          (e === "style" && a.querySelector(Ul(s))) ||
          (e === "script" && a.querySelector(dl(s))) ||
          ((e = a.createElement("link")),
          ie(e, "link", A),
          Ae(e),
          a.head.appendChild(e)));
    }
  }
  function WC(A, e) {
    mt.m(A, e);
    var t = hn;
    if (t && A) {
      var a = e && typeof e.as == "string" ? e.as : "script",
        u =
          'link[rel="modulepreload"][as="' + Le(a) + '"][href="' + Le(A) + '"]',
        s = u;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          s = Cn(A);
      }
      if (
        !ze.has(s) &&
        ((A = U({ rel: "modulepreload", href: A }, e)),
        ze.set(s, A),
        t.querySelector(u) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (t.querySelector(dl(s))) return;
        }
        (a = t.createElement("link")),
          ie(a, "link", A),
          Ae(a),
          t.head.appendChild(a);
      }
    }
  }
  function PC(A, e, t) {
    mt.S(A, e, t);
    var a = hn;
    if (a && A) {
      var u = Ra(a).hoistableStyles,
        s = wn(A);
      e = e || "default";
      var f = u.get(s);
      if (!f) {
        var Q = { loading: 0, preload: null };
        if ((f = a.querySelector(Ul(s)))) Q.loading = 5;
        else {
          (A = U({ rel: "stylesheet", href: A, "data-precedence": e }, t)),
            (t = ze.get(s)) && Qc(A, t);
          var C = (f = a.createElement("link"));
          Ae(C),
            ie(C, "link", A),
            (C._p = new Promise(function (H, T) {
              (C.onload = H), (C.onerror = T);
            })),
            C.addEventListener("load", function () {
              Q.loading |= 1;
            }),
            C.addEventListener("error", function () {
              Q.loading |= 2;
            }),
            (Q.loading |= 4),
            ei(f, e, a);
        }
        (f = { type: "stylesheet", instance: f, count: 1, state: Q }),
          u.set(s, f);
      }
    }
  }
  function $C(A, e) {
    mt.X(A, e);
    var t = hn;
    if (t && A) {
      var a = Ra(t).hoistableScripts,
        u = Cn(A),
        s = a.get(u);
      s ||
        ((s = t.querySelector(dl(u))),
        s ||
          ((A = U({ src: A, async: !0 }, e)),
          (e = ze.get(u)) && hc(A, e),
          (s = t.createElement("script")),
          Ae(s),
          ie(s, "link", A),
          t.head.appendChild(s)),
        (s = { type: "script", instance: s, count: 1, state: null }),
        a.set(u, s));
    }
  }
  function AU(A, e) {
    mt.M(A, e);
    var t = hn;
    if (t && A) {
      var a = Ra(t).hoistableScripts,
        u = Cn(A),
        s = a.get(u);
      s ||
        ((s = t.querySelector(dl(u))),
        s ||
          ((A = U({ src: A, async: !0, type: "module" }, e)),
          (e = ze.get(u)) && hc(A, e),
          (s = t.createElement("script")),
          Ae(s),
          ie(s, "link", A),
          t.head.appendChild(s)),
        (s = { type: "script", instance: s, count: 1, state: null }),
        a.set(u, s));
    }
  }
  function fQ(A, e, t, a) {
    var u = (u = lA.current) ? Ai(u) : null;
    if (!u) throw Error(r(446));
    switch (A) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof t.precedence == "string" && typeof t.href == "string"
          ? ((e = wn(t.href)),
            (t = Ra(u).hoistableStyles),
            (a = t.get(e)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              t.set(e, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          t.rel === "stylesheet" &&
          typeof t.href == "string" &&
          typeof t.precedence == "string"
        ) {
          A = wn(t.href);
          var s = Ra(u).hoistableStyles,
            f = s.get(A);
          if (
            (f ||
              ((u = u.ownerDocument || u),
              (f = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              s.set(A, f),
              (s = u.querySelector(Ul(A))) &&
                !s._p &&
                ((f.instance = s), (f.state.loading = 5)),
              ze.has(A) ||
                ((t = {
                  rel: "preload",
                  as: "style",
                  href: t.href,
                  crossOrigin: t.crossOrigin,
                  integrity: t.integrity,
                  media: t.media,
                  hrefLang: t.hrefLang,
                  referrerPolicy: t.referrerPolicy,
                }),
                ze.set(A, t),
                s || eU(u, A, t, f.state))),
            e && a === null)
          )
            throw Error(r(528, ""));
          return f;
        }
        if (e && a !== null) throw Error(r(529, ""));
        return null;
      case "script":
        return (
          (e = t.async),
          (t = t.src),
          typeof t == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((e = Cn(t)),
              (t = Ra(u).hoistableScripts),
              (a = t.get(e)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                t.set(e, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(r(444, A));
    }
  }
  function wn(A) {
    return 'href="' + Le(A) + '"';
  }
  function Ul(A) {
    return 'link[rel="stylesheet"][' + A + "]";
  }
  function oQ(A) {
    return U({}, A, { "data-precedence": A.precedence, precedence: null });
  }
  function eU(A, e, t, a) {
    A.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (a.loading = 1)
      : ((e = A.createElement("link")),
        (a.preload = e),
        e.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        ie(e, "link", t),
        Ae(e),
        A.head.appendChild(e));
  }
  function Cn(A) {
    return '[src="' + Le(A) + '"]';
  }
  function dl(A) {
    return "script[async]" + A;
  }
  function gQ(A, e, t) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var a = A.querySelector('style[data-href~="' + Le(t.href) + '"]');
          if (a) return (e.instance = a), Ae(a), a;
          var u = U({}, t, {
            "data-href": t.href,
            "data-precedence": t.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (A.ownerDocument || A).createElement("style")),
            Ae(a),
            ie(a, "style", u),
            ei(a, t.precedence, A),
            (e.instance = a)
          );
        case "stylesheet":
          u = wn(t.href);
          var s = A.querySelector(Ul(u));
          if (s) return (e.state.loading |= 4), (e.instance = s), Ae(s), s;
          (a = oQ(t)),
            (u = ze.get(u)) && Qc(a, u),
            (s = (A.ownerDocument || A).createElement("link")),
            Ae(s);
          var f = s;
          return (
            (f._p = new Promise(function (Q, C) {
              (f.onload = Q), (f.onerror = C);
            })),
            ie(s, "link", a),
            (e.state.loading |= 4),
            ei(s, t.precedence, A),
            (e.instance = s)
          );
        case "script":
          return (
            (s = Cn(t.src)),
            (u = A.querySelector(dl(s)))
              ? ((e.instance = u), Ae(u), u)
              : ((a = t),
                (u = ze.get(s)) && ((a = U({}, t)), hc(a, u)),
                (A = A.ownerDocument || A),
                (u = A.createElement("script")),
                Ae(u),
                ie(u, "link", a),
                A.head.appendChild(u),
                (e.instance = u))
          );
        case "void":
          return null;
        default:
          throw Error(r(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((a = e.instance), (e.state.loading |= 4), ei(a, t.precedence, A));
    return e.instance;
  }
  function ei(A, e, t) {
    for (
      var a = t.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        u = a.length ? a[a.length - 1] : null,
        s = u,
        f = 0;
      f < a.length;
      f++
    ) {
      var Q = a[f];
      if (Q.dataset.precedence === e) s = Q;
      else if (s !== u) break;
    }
    s
      ? s.parentNode.insertBefore(A, s.nextSibling)
      : ((e = t.nodeType === 9 ? t.head : t), e.insertBefore(A, e.firstChild));
  }
  function Qc(A, e) {
    A.crossOrigin == null && (A.crossOrigin = e.crossOrigin),
      A.referrerPolicy == null && (A.referrerPolicy = e.referrerPolicy),
      A.title == null && (A.title = e.title);
  }
  function hc(A, e) {
    A.crossOrigin == null && (A.crossOrigin = e.crossOrigin),
      A.referrerPolicy == null && (A.referrerPolicy = e.referrerPolicy),
      A.integrity == null && (A.integrity = e.integrity);
  }
  var ti = null;
  function QQ(A, e, t) {
    if (ti === null) {
      var a = new Map(),
        u = (ti = new Map());
      u.set(t, a);
    } else (u = ti), (a = u.get(t)), a || ((a = new Map()), u.set(t, a));
    if (a.has(A)) return a;
    for (
      a.set(A, null), t = t.getElementsByTagName(A), u = 0;
      u < t.length;
      u++
    ) {
      var s = t[u];
      if (
        !(
          s[Ln] ||
          s[ae] ||
          (A === "link" && s.getAttribute("rel") === "stylesheet")
        ) &&
        s.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var f = s.getAttribute(e) || "";
        f = A + f;
        var Q = a.get(f);
        Q ? Q.push(s) : a.set(f, [s]);
      }
    }
    return a;
  }
  function hQ(A, e, t) {
    (A = A.ownerDocument || A),
      A.head.insertBefore(
        t,
        e === "title" ? A.querySelector("head > title") : null
      );
  }
  function tU(A, e, t) {
    if (t === 1 || e.itemProp != null) return !1;
    switch (A) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        switch (e.rel) {
          case "stylesheet":
            return (
              (A = e.disabled), typeof e.precedence == "string" && A == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function wQ(A) {
    return !(A.type === "stylesheet" && (A.state.loading & 3) === 0);
  }
  function aU(A, e, t, a) {
    if (
      t.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (t.state.loading & 4) === 0
    ) {
      if (t.instance === null) {
        var u = wn(a.href),
          s = e.querySelector(Ul(u));
        if (s) {
          (e = s._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (A.count++, (A = ai.bind(A)), e.then(A, A)),
            (t.state.loading |= 4),
            (t.instance = s),
            Ae(s);
          return;
        }
        (s = e.ownerDocument || e),
          (a = oQ(a)),
          (u = ze.get(u)) && Qc(a, u),
          (s = s.createElement("link")),
          Ae(s);
        var f = s;
        (f._p = new Promise(function (Q, C) {
          (f.onload = Q), (f.onerror = C);
        })),
          ie(s, "link", a),
          (t.instance = s);
      }
      A.stylesheets === null && (A.stylesheets = new Map()),
        A.stylesheets.set(t, e),
        (e = t.state.preload) &&
          (t.state.loading & 3) === 0 &&
          (A.count++,
          (t = ai.bind(A)),
          e.addEventListener("load", t),
          e.addEventListener("error", t));
    }
  }
  var wc = 0;
  function nU(A, e) {
    return (
      A.stylesheets && A.count === 0 && li(A, A.stylesheets),
      0 < A.count || 0 < A.imgCount
        ? function (t) {
            var a = setTimeout(function () {
              if ((A.stylesheets && li(A, A.stylesheets), A.unsuspend)) {
                var s = A.unsuspend;
                (A.unsuspend = null), s();
              }
            }, 6e4 + e);
            0 < A.imgBytes && wc === 0 && (wc = 62500 * RC());
            var u = setTimeout(function () {
              if (
                ((A.waitingForImages = !1),
                A.count === 0 &&
                  (A.stylesheets && li(A, A.stylesheets), A.unsuspend))
              ) {
                var s = A.unsuspend;
                (A.unsuspend = null), s();
              }
            }, (A.imgBytes > wc ? 50 : 800) + e);
            return (
              (A.unsuspend = t),
              function () {
                (A.unsuspend = null), clearTimeout(a), clearTimeout(u);
              }
            );
          }
        : null
    );
  }
  function ai() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) li(this, this.stylesheets);
      else if (this.unsuspend) {
        var A = this.unsuspend;
        (this.unsuspend = null), A();
      }
    }
  }
  var ni = null;
  function li(A, e) {
    (A.stylesheets = null),
      A.unsuspend !== null &&
        (A.count++,
        (ni = new Map()),
        e.forEach(lU, A),
        (ni = null),
        ai.call(A));
  }
  function lU(A, e) {
    if (!(e.state.loading & 4)) {
      var t = ni.get(A);
      if (t) var a = t.get(null);
      else {
        (t = new Map()), ni.set(A, t);
        for (
          var u = A.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            s = 0;
          s < u.length;
          s++
        ) {
          var f = u[s];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") &&
            (t.set(f.dataset.precedence, f), (a = f));
        }
        a && t.set(null, a);
      }
      (u = e.instance),
        (f = u.getAttribute("data-precedence")),
        (s = t.get(f) || a),
        s === a && t.set(null, u),
        t.set(f, u),
        this.count++,
        (a = ai.bind(this)),
        u.addEventListener("load", a),
        u.addEventListener("error", a),
        s
          ? s.parentNode.insertBefore(u, s.nextSibling)
          : ((A = A.nodeType === 9 ? A.head : A),
            A.insertBefore(u, A.firstChild)),
        (e.state.loading |= 4);
    }
  }
  var vl = {
    $$typeof: aA,
    Provider: null,
    Consumer: null,
    _currentValue: P,
    _currentValue2: P,
    _threadCount: 0,
  };
  function rU(A, e, t, a, u, s, f, Q, C) {
    (this.tag = 1),
      (this.containerInfo = A),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = fu(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = fu(0)),
      (this.hiddenUpdates = fu(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = u),
      (this.onCaughtError = s),
      (this.onRecoverableError = f),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = C),
      (this.incompleteTransitions = new Map());
  }
  function CQ(A, e, t, a, u, s, f, Q, C, H, T, D) {
    return (
      (A = new rU(A, e, t, f, C, H, T, D, Q)),
      (e = 1),
      s === !0 && (e |= 24),
      (s = Se(3, null, null, e)),
      (A.current = s),
      (s.stateNode = A),
      (e = ku()),
      e.refCount++,
      (A.pooledCache = e),
      e.refCount++,
      (s.memoizedState = { element: a, isDehydrated: t, cache: e }),
      As(s),
      A
    );
  }
  function UQ(A) {
    return A ? ((A = ja), A) : ja;
  }
  function dQ(A, e, t, a, u, s) {
    (u = UQ(u)),
      a.context === null ? (a.context = u) : (a.pendingContext = u),
      (a = Nt(e)),
      (a.payload = { element: t }),
      (s = s === void 0 ? null : s),
      s !== null && (a.callback = s),
      (t = Gt(A, a, e)),
      t !== null && (Fe(t, A, e), $n(t, A, e));
  }
  function vQ(A, e) {
    if (((A = A.memoizedState), A !== null && A.dehydrated !== null)) {
      var t = A.retryLane;
      A.retryLane = t !== 0 && t < e ? t : e;
    }
  }
  function Cc(A, e) {
    vQ(A, e), (A = A.alternate) && vQ(A, e);
  }
  function FQ(A) {
    if (A.tag === 13 || A.tag === 31) {
      var e = wa(A, 67108864);
      e !== null && Fe(e, A, 67108864), Cc(A, 67108864);
    }
  }
  function EQ(A) {
    if (A.tag === 13 || A.tag === 31) {
      var e = De();
      e = ou(e);
      var t = wa(A, e);
      t !== null && Fe(t, A, e), Cc(A, e);
    }
  }
  var ri = !0;
  function iU(A, e, t, a) {
    var u = b.T;
    b.T = null;
    var s = N.p;
    try {
      (N.p = 2), Uc(A, e, t, a);
    } finally {
      (N.p = s), (b.T = u);
    }
  }
  function uU(A, e, t, a) {
    var u = b.T;
    b.T = null;
    var s = N.p;
    try {
      (N.p = 8), Uc(A, e, t, a);
    } finally {
      (N.p = s), (b.T = u);
    }
  }
  function Uc(A, e, t, a) {
    if (ri) {
      var u = dc(a);
      if (u === null) lc(A, e, a, ii, t), mQ(A, a);
      else if (cU(u, A, e, t, a)) a.stopPropagation();
      else if ((mQ(A, a), e & 4 && -1 < sU.indexOf(A))) {
        for (; u !== null; ) {
          var s = Ma(u);
          if (s !== null)
            switch (s.tag) {
              case 3:
                if (((s = s.stateNode), s.current.memoizedState.isDehydrated)) {
                  var f = fa(s.pendingLanes);
                  if (f !== 0) {
                    var Q = s;
                    for (Q.pendingLanes |= 2, Q.entangledLanes |= 2; f; ) {
                      var C = 1 << (31 - He(f));
                      (Q.entanglements[1] |= C), (f &= ~C);
                    }
                    nt(s), (vA & 6) === 0 && ((Xr = ye() + 500), Ql(0));
                  }
                }
                break;
              case 31:
              case 13:
                (Q = wa(s, 2)), Q !== null && Fe(Q, s, 2), Yr(), Cc(s, 2);
            }
          if (((s = dc(a)), s === null && lc(A, e, a, ii, t), s === u)) break;
          u = s;
        }
        u !== null && a.stopPropagation();
      } else lc(A, e, a, null, t);
    }
  }
  function dc(A) {
    return (A = Fu(A)), vc(A);
  }
  var ii = null;
  function vc(A) {
    if (((ii = null), (A = La(A)), A !== null)) {
      var e = B(A);
      if (e === null) A = null;
      else {
        var t = e.tag;
        if (t === 13) {
          if (((A = o(e)), A !== null)) return A;
          A = null;
        } else if (t === 31) {
          if (((A = h(e)), A !== null)) return A;
          A = null;
        } else if (t === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          A = null;
        } else e !== A && (A = null);
      }
    }
    return (ii = A), null;
  }
  function yQ(A) {
    switch (A) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (j0()) {
          case TB:
            return 2;
          case xB:
            return 8;
          case kl:
          case q0:
            return 32;
          case KB:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Fc = !1,
    Wt = null,
    Pt = null,
    $t = null,
    Fl = new Map(),
    El = new Map(),
    Aa = [],
    sU =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function mQ(A, e) {
    switch (A) {
      case "focusin":
      case "focusout":
        Wt = null;
        break;
      case "dragenter":
      case "dragleave":
        Pt = null;
        break;
      case "mouseover":
      case "mouseout":
        $t = null;
        break;
      case "pointerover":
      case "pointerout":
        Fl.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        El.delete(e.pointerId);
    }
  }
  function yl(A, e, t, a, u, s) {
    return A === null || A.nativeEvent !== s
      ? ((A = {
          blockedOn: e,
          domEventName: t,
          eventSystemFlags: a,
          nativeEvent: s,
          targetContainers: [u],
        }),
        e !== null && ((e = Ma(e)), e !== null && FQ(e)),
        A)
      : ((A.eventSystemFlags |= a),
        (e = A.targetContainers),
        u !== null && e.indexOf(u) === -1 && e.push(u),
        A);
  }
  function cU(A, e, t, a, u) {
    switch (e) {
      case "focusin":
        return (Wt = yl(Wt, A, e, t, a, u)), !0;
      case "dragenter":
        return (Pt = yl(Pt, A, e, t, a, u)), !0;
      case "mouseover":
        return ($t = yl($t, A, e, t, a, u)), !0;
      case "pointerover":
        var s = u.pointerId;
        return Fl.set(s, yl(Fl.get(s) || null, A, e, t, a, u)), !0;
      case "gotpointercapture":
        return (
          (s = u.pointerId), El.set(s, yl(El.get(s) || null, A, e, t, a, u)), !0
        );
    }
    return !1;
  }
  function HQ(A) {
    var e = La(A.target);
    if (e !== null) {
      var t = B(e);
      if (t !== null) {
        if (((e = t.tag), e === 13)) {
          if (((e = o(t)), e !== null)) {
            (A.blockedOn = e),
              RB(A.priority, function () {
                EQ(t);
              });
            return;
          }
        } else if (e === 31) {
          if (((e = h(t)), e !== null)) {
            (A.blockedOn = e),
              RB(A.priority, function () {
                EQ(t);
              });
            return;
          }
        } else if (e === 3 && t.stateNode.current.memoizedState.isDehydrated) {
          A.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
          return;
        }
      }
    }
    A.blockedOn = null;
  }
  function ui(A) {
    if (A.blockedOn !== null) return !1;
    for (var e = A.targetContainers; 0 < e.length; ) {
      var t = dc(A.nativeEvent);
      if (t === null) {
        t = A.nativeEvent;
        var a = new t.constructor(t.type, t);
        (vu = a), t.target.dispatchEvent(a), (vu = null);
      } else return (e = Ma(t)), e !== null && FQ(e), (A.blockedOn = t), !1;
      e.shift();
    }
    return !0;
  }
  function pQ(A, e, t) {
    ui(A) && t.delete(e);
  }
  function BU() {
    (Fc = !1),
      Wt !== null && ui(Wt) && (Wt = null),
      Pt !== null && ui(Pt) && (Pt = null),
      $t !== null && ui($t) && ($t = null),
      Fl.forEach(pQ),
      El.forEach(pQ);
  }
  function si(A, e) {
    A.blockedOn === e &&
      ((A.blockedOn = null),
      Fc ||
        ((Fc = !0),
        l.unstable_scheduleCallback(l.unstable_NormalPriority, BU)));
  }
  var ci = null;
  function SQ(A) {
    ci !== A &&
      ((ci = A),
      l.unstable_scheduleCallback(l.unstable_NormalPriority, function () {
        ci === A && (ci = null);
        for (var e = 0; e < A.length; e += 3) {
          var t = A[e],
            a = A[e + 1],
            u = A[e + 2];
          if (typeof a != "function") {
            if (vc(a || t) === null) continue;
            break;
          }
          var s = Ma(t);
          s !== null &&
            (A.splice(e, 3),
            (e -= 3),
            ds(s, { pending: !0, data: u, method: t.method, action: a }, a, u));
        }
      }));
  }
  function Un(A) {
    function e(C) {
      return si(C, A);
    }
    Wt !== null && si(Wt, A),
      Pt !== null && si(Pt, A),
      $t !== null && si($t, A),
      Fl.forEach(e),
      El.forEach(e);
    for (var t = 0; t < Aa.length; t++) {
      var a = Aa[t];
      a.blockedOn === A && (a.blockedOn = null);
    }
    for (; 0 < Aa.length && ((t = Aa[0]), t.blockedOn === null); )
      HQ(t), t.blockedOn === null && Aa.shift();
    if (((t = (A.ownerDocument || A).$$reactFormReplay), t != null))
      for (a = 0; a < t.length; a += 3) {
        var u = t[a],
          s = t[a + 1],
          f = u[he] || null;
        if (typeof s == "function") f || SQ(t);
        else if (f) {
          var Q = null;
          if (s && s.hasAttribute("formAction")) {
            if (((u = s), (f = s[he] || null))) Q = f.formAction;
            else if (vc(u) !== null) continue;
          } else Q = f.action;
          typeof Q == "function" ? (t[a + 1] = Q) : (t.splice(a, 3), (a -= 3)),
            SQ(t);
        }
      }
  }
  function bQ() {
    function A(s) {
      s.canIntercept &&
        s.info === "react-transition" &&
        s.intercept({
          handler: function () {
            return new Promise(function (f) {
              return (u = f);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function e() {
      u !== null && (u(), (u = null)), a || setTimeout(t, 20);
    }
    function t() {
      if (!a && !navigation.transition) {
        var s = navigation.currentEntry;
        s &&
          s.url != null &&
          navigation.navigate(s.url, {
            state: s.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var a = !1,
        u = null;
      return (
        navigation.addEventListener("navigate", A),
        navigation.addEventListener("navigatesuccess", e),
        navigation.addEventListener("navigateerror", e),
        setTimeout(t, 100),
        function () {
          (a = !0),
            navigation.removeEventListener("navigate", A),
            navigation.removeEventListener("navigatesuccess", e),
            navigation.removeEventListener("navigateerror", e),
            u !== null && (u(), (u = null));
        }
      );
    }
  }
  function Ec(A) {
    this._internalRoot = A;
  }
  (Bi.prototype.render = Ec.prototype.render =
    function (A) {
      var e = this._internalRoot;
      if (e === null) throw Error(r(409));
      var t = e.current,
        a = De();
      dQ(t, a, A, e, null, null);
    }),
    (Bi.prototype.unmount = Ec.prototype.unmount =
      function () {
        var A = this._internalRoot;
        if (A !== null) {
          this._internalRoot = null;
          var e = A.containerInfo;
          dQ(A.current, 2, null, A, null, null), Yr(), (e[Ia] = null);
        }
      });
  function Bi(A) {
    this._internalRoot = A;
  }
  Bi.prototype.unstable_scheduleHydration = function (A) {
    if (A) {
      var e = MB();
      A = { blockedOn: null, target: A, priority: e };
      for (var t = 0; t < Aa.length && e !== 0 && e < Aa[t].priority; t++);
      Aa.splice(t, 0, A), t === 0 && HQ(A);
    }
  };
  var TQ = n.version;
  if (TQ !== "19.2.4") throw Error(r(527, TQ, "19.2.4"));
  N.findDOMNode = function (A) {
    var e = A._reactInternals;
    if (e === void 0)
      throw typeof A.render == "function"
        ? Error(r(188))
        : ((A = Object.keys(A).join(",")), Error(r(268, A)));
    return (
      (A = w(e)),
      (A = A !== null ? d(A) : null),
      (A = A === null ? null : A.stateNode),
      A
    );
  };
  var fU = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: b,
    reconcilerVersion: "19.2.4",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var fi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!fi.isDisabled && fi.supportsFiber)
      try {
        (Dn = fi.inject(fU)), (me = fi);
      } catch {}
  }
  return (
    (Hl.createRoot = function (A, e) {
      if (!c(A)) throw Error(r(299));
      var t = !1,
        a = "",
        u = Mo,
        s = Ro,
        f = No;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (t = !0),
          e.identifierPrefix !== void 0 && (a = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (u = e.onUncaughtError),
          e.onCaughtError !== void 0 && (s = e.onCaughtError),
          e.onRecoverableError !== void 0 && (f = e.onRecoverableError)),
        (e = CQ(A, 1, !1, null, null, t, a, null, u, s, f, bQ)),
        (A[Ia] = e.current),
        nc(A),
        new Ec(e)
      );
    }),
    (Hl.hydrateRoot = function (A, e, t) {
      if (!c(A)) throw Error(r(299));
      var a = !1,
        u = "",
        s = Mo,
        f = Ro,
        Q = No,
        C = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (a = !0),
          t.identifierPrefix !== void 0 && (u = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (s = t.onUncaughtError),
          t.onCaughtError !== void 0 && (f = t.onCaughtError),
          t.onRecoverableError !== void 0 && (Q = t.onRecoverableError),
          t.formState !== void 0 && (C = t.formState)),
        (e = CQ(A, 1, !0, e, t ?? null, a, u, C, s, f, Q, bQ)),
        (e.context = UQ(null)),
        (t = e.current),
        (a = De()),
        (a = ou(a)),
        (u = Nt(a)),
        (u.callback = null),
        Gt(t, u, a),
        (t = a),
        (e.current.lanes = t),
        In(e, t),
        nt(e),
        (A[Ia] = e.current),
        nc(A),
        new Bi(e)
      );
    }),
    (Hl.version = "19.2.4"),
    Hl
  );
}
var GQ;
function EU() {
  if (GQ) return Hc.exports;
  GQ = 1;
  function l() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (n) {
        console.error(n);
      }
  }
  return l(), (Hc.exports = FU()), Hc.exports;
}
var yU = EU();
const mU = Gh(yU),
  pl = [
    {
      id: 1,
      question: "무언가를 시도하다 실패했을 때, 나는 어떤 편인가?",
      choices: [
        {
          text: "실패 원인을 아주 세세하게 분석하고 보완한다.",
          scores: { RAT: 2, ROOSTER: 1, SNAKE: 1 },
        },
        {
          text: "아쉽지만 운이 없었다 생각하고 다음을 기약한다.",
          scores: { PIG: 2, HORSE: 1, MONKEY: 1 },
        },
        {
          text: "곧바로 다시 도전하거나 더 큰 목표를 세운다.",
          scores: { TIGER: 2, HORSE: 1, DRAGON: 1 },
        },
        {
          text: "주변의 위로를 받으며 천천히 기운을 차린다.",
          scores: { SHEEP: 2, RABBIT: 1, SNAKE: 1 },
        },
      ],
    },
    {
      id: 2,
      question: "계획해둔 일정이 갑자기 틀어졌을 때",
      choices: [
        {
          text: "순간적으로 스트레스를 받지만 대안 B를 바로 찾는다.",
          scores: { RAT: 2, ROOSTER: 1, SNAKE: 1 },
        },
        {
          text: "오히려 좋아! 즉흥적인 상황을 즐긴다.",
          scores: { PIG: 2, HORSE: 1, MONKEY: 1 },
        },
        {
          text: "누구 때문인지 확실히 짚고 넘어가야 직성이 풀린다.",
          scores: { ROOSTER: 2, OX: 1, DOG: 1 },
        },
        {
          text: "일단 상황을 지켜보며 흐름에 몸을 맡긴다.",
          scores: { HORSE: 2, MONKEY: 1, TIGER: 1 },
        },
      ],
    },
    {
      id: 3,
      question: "처음 가는 모임이나 자리에서 나는",
      choices: [
        {
          text: "먼저 말을 걸며 분위기를 주도하는 편이다.",
          scores: { MONKEY: 2, RABBIT: 1, SNAKE: 1 },
        },
        {
          text: "누가 말을 걸어줄 때까지 조용히 관찰한다.",
          scores: { SNAKE: 2, RAT: 1, RABBIT: 1 },
        },
        {
          text: "당당하게 내 의견을 피력하며 존재감을 드러낸다.",
          scores: { TIGER: 2, HORSE: 1, MONKEY: 1 },
        },
        {
          text: "주변 사람들을 챙기며 편안하게 해주려 노력한다.",
          scores: { DOG: 2, RABBIT: 1, OX: 1 },
        },
      ],
    },
    {
      id: 4,
      question: "중요한 결정을 앞두고 있을 때",
      choices: [
        {
          text: "가장 현실적이고 손해가 적은 방향을 택한다.",
          scores: { RAT: 2, SNAKE: 1, ROOSTER: 1 },
        },
        {
          text: "내 직관과 에너지가 이끄는 대로 움직인다.",
          scores: { HORSE: 2, PIG: 1, DRAGON: 1 },
        },
        {
          text: "충분한 시간을 두고 끝까지 고민하여 신중히 결정한다.",
          scores: { OX: 2, DOG: 1, ROOSTER: 1 },
        },
        {
          text: "이상적이고 원대한 가치를 보고 결정한다.",
          scores: { DRAGON: 2, TIGER: 1, SNAKE: 1 },
        },
      ],
    },
    {
      id: 5,
      question: "팀으로 무언가를 해야 할 때",
      choices: [
        {
          text: "내가 리더가 되어 방향을 지시하고 이끄는 편이다.",
          scores: { TIGER: 2, DRAGON: 1, DOG: 1 },
        },
        {
          text: "내 역할에만 완벽히 집중하여 결과물을 낸다.",
          scores: { ROOSTER: 2, RAT: 1, SNAKE: 1 },
        },
        {
          text: "팀원들 사이의 의견을 조율하고 화합을 돕는다.",
          scores: { RABBIT: 2, SHEEP: 1, MONKEY: 1 },
        },
        {
          text: "효율적인 시스템이나 추진력을 제공한다.",
          scores: { HORSE: 2, MONKEY: 1, OX: 1 },
        },
      ],
    },
    {
      id: 6,
      question: "문제가 생겼다는 걸 알게 되었을 때",
      choices: [
        {
          text: "차분하게 원인부터 파악하고 해결책을 구상한다.",
          scores: { SNAKE: 2, RAT: 1, ROOSTER: 1 },
        },
        {
          text: "일단 몸으로 부딪쳐서 어떻게든 해결한다.",
          scores: { HORSE: 2, TIGER: 1, MONKEY: 1 },
        },
        {
          text: "주변 전문가나 경험자에게 조언을 구한다.",
          scores: { ROOSTER: 2, TIGER: 1, SNAKE: 1 },
        },
        {
          text: "당황스럽지만 일단 마음을 다스리고 상황을 수용한다.",
          scores: { RABBIT: 2, SHEEP: 1, DOG: 1 },
        },
      ],
    },
    {
      id: 7,
      question: "돈이나 보상이 걸린 선택 앞에서",
      choices: [
        {
          text: "한 번에 큰 것보다 꾸준하고 확실한 수익을 원한다.",
          scores: { OX: 2, DOG: 1, ROOSTER: 1 },
        },
        {
          text: "리스크가 있더라도 큰 성취를 맛보고 싶다.",
          scores: { DRAGON: 2, TIGER: 1, HORSE: 1 },
        },
        {
          text: "작은 이익이라도 놓치지 않으려 꼼꼼히 챙긴다.",
          scores: { RAT: 2, SNAKE: 1, DOG: 1 },
        },
        {
          text: "나 혼자보다는 함께 나누는 즐거움을 고려한다.",
          scores: { PIG: 2, HORSE: 1, MONKEY: 1 },
        },
      ],
    },
    {
      id: 8,
      question: "사람 사이에 갈등이 생겼을 때",
      choices: [
        {
          text: "논리적으로 시시비비를 가려야 한다.",
          scores: { TIGER: 2, DOG: 1, DRAGON: 1 },
        },
        {
          text: "웃음으로 넘기거나 분위기를 전환하려 한다.",
          scores: { MONKEY: 2, PIG: 1, RABBIT: 1 },
        },
        {
          text: "참고 견디며 시간이 해결해주길 기다린다.",
          scores: { OX: 2, RABBIT: 1, DOG: 1 },
        },
        {
          text: "상대방의 감정을 먼저 살피고 공감해준다.",
          scores: { SHEEP: 2, RABBIT: 1, MONKEY: 1 },
        },
      ],
    },
    {
      id: 9,
      question: "새로운 기회가 눈앞에 왔을 때",
      choices: [
        {
          text: "철저히 조사하고 완벽한 타이밍을 기다린다.",
          scores: { RAT: 2, SNAKE: 1, ROOSTER: 1 },
        },
        {
          text: "고민하기보다 일단 긍정적으로 받아들인다.",
          scores: { PIG: 2, HORSE: 1, MONKEY: 1 },
        },
        {
          text: "앞뒤 재지 않고 열정적으로 뛰어든다.",
          scores: { HORSE: 2, TIGER: 1, DRAGON: 1 },
        },
        {
          text: "이 기회가 나에게 주는 의미를 깊게 되새긴다.",
          scores: { DOG: 2, OX: 1, RABBIT: 1 },
        },
      ],
    },
    {
      id: 10,
      question: "계획을 세울 때 나는",
      choices: [
        {
          text: "분 단위까지 세밀하게 계획하는 편이다.",
          scores: { ROOSTER: 2, RAT: 1, SNAKE: 1 },
        },
        {
          text: "큰 그림만 그리고 세부 사항은 유동적으로 둔다.",
          scores: { DRAGON: 2, TIGER: 1, MONKEY: 1 },
        },
        {
          text: "즐겁고 재미있는 요소들을 많이 포함시킨다.",
          scores: { MONKEY: 2, HORSE: 1, PIG: 1 },
        },
        {
          text: "일단 시작하고 상황에 따라 경로를 수정한다.",
          scores: { HORSE: 2, TIGER: 1, PIG: 1 },
        },
      ],
    },
    {
      id: 11,
      question: "책임이 무거운 일을 맡았을 때",
      choices: [
        {
          text: "부담스럽지만 묵묵하게 끝까지 완수한다.",
          scores: { OX: 2, DOG: 1, DRAGON: 1 },
        },
        {
          text: "사람들과 협력하여 짐을 나누어 진다.",
          scores: { RABBIT: 2, MONKEY: 1, DOG: 1 },
        },
        {
          text: "어떻게 하면 가장 효율적으로 끝낼지 잔머리를 쓴다.",
          scores: { RAT: 2, SNAKE: 1, DOG: 1 },
        },
        {
          text: "화려한 결과물로 나의 가치를 증명하려 한다.",
          scores: { HORSE: 2, ROOSTER: 1, TIGER: 1 },
        },
      ],
    },
    {
      id: 12,
      question: "사람을 판단할 때 더 중요하게 보는 건",
      choices: [
        {
          text: "그 사람의 성실함과 도덕적인 태도",
          scores: { DOG: 2, OX: 1, ROOSTER: 1 },
        },
        {
          text: "나와 대화가 얼마나 잘 통하고 재치 있는지",
          scores: { MONKEY: 2, HORSE: 1, RABBIT: 1 },
        },
        {
          text: "그 사람이 가진 능력과 추진력",
          scores: { ROOSTER: 2, TIGER: 1, DRAGON: 1 },
        },
        {
          text: "타인을 대하는 따뜻함과 배려심",
          scores: { RABBIT: 2, PIG: 1, DOG: 1 },
        },
      ],
    },
    {
      id: 13,
      question: "스트레스를 받을 때 나는",
      choices: [
        {
          text: "혼자만의 시간을 가지며 상황을 복기한다.",
          scores: { SNAKE: 2, RAT: 1, DRAGON: 1 },
        },
        {
          text: "맛있는 걸 먹거나 푹 자며 잊어버린다.",
          scores: { PIG: 2, OX: 1, RABBIT: 1 },
        },
        {
          text: "좋아하는 취미 활동이나 수다로 푼다.",
          scores: { RABBIT: 2, MONKEY: 1, SHEEP: 1 },
        },
        {
          text: "격렬한 운동이나 활동으로 에너지를 발산한다.",
          scores: { HORSE: 2, TIGER: 1, MONKEY: 1 },
        },
      ],
    },
    {
      id: 14,
      question:
        "예상하지 못한 문제를 혼자 해결해야 할 때, 나는 어떻게 하는 편인가?",
      choices: [
        {
          text: "다시 차분히 계산해서 방법을 찾는다",
          scores: { RAT: 2, SNAKE: 1, ROOSTER: 1 },
        },
        {
          text: "일단 밀어붙이며 해결을 시도한다",
          scores: { TIGER: 2, HORSE: 1, DRAGON: 1 },
        },
        {
          text: "우회할 수 있는 다른 방법을 찾는다",
          scores: { SNAKE: 2, MONKEY: 1, RAT: 1 },
        },
        {
          text: "잠시 멈추고 상황이 더 명확해질 때까지 기다린다",
          scores: { RABBIT: 2, SHEEP: 1, DOG: 1 },
        },
      ],
    },
    {
      id: 15,
      question: "목표를 세울 때 더 끌리는 건",
      choices: [
        {
          text: "작지만 확실하게 이룰 수 있는 실질적인 목표",
          scores: { OX: 2, DOG: 1, ROOSTER: 1 },
        },
        {
          text: "세상을 놀라게 할 만한 원대한 포부",
          scores: { DRAGON: 2, TIGER: 1, SNAKE: 1 },
        },
        {
          text: "과정 자체가 즐겁고 행복할 수 있는 일",
          scores: { PIG: 2, HORSE: 1, MONKEY: 1 },
        },
        {
          text: "누군가에게 도움이 될 수 있는 이타적인 목표",
          scores: { DOG: 2, RABBIT: 1, TIGER: 1 },
        },
      ],
    },
    {
      id: 16,
      question: "나는 휴일에 주로 ",
      choices: [
        {
          text: "집에서 밀린 휴식을 취하며 재충전한다.",
          scores: { PIG: 2, DOG: 1, OX: 1 },
        },
        {
          text: "미뤄둔 집안일을 하거나 계획을 세운다.",
          scores: { ROOSTER: 2, RAT: 1, OX: 1 },
        },
        {
          text: "멀리 여행을 가거나 새로운 곳을 탐험한다.",
          scores: { HORSE: 2, MONKEY: 1, PIG: 1 },
        },
        {
          text: "친한 친구들을 만나 즐거운 시간을 보낸다.",
          scores: { MONKEY: 2, RABBIT: 1, DOG: 1 },
        },
      ],
    },
    {
      id: 17,
      question: "두 가지 선택지가 있을 때 둘 다 마음에 들지 않는다면",
      choices: [
        {
          text: "제3의 대안을 직접 만들거나 찾아낸다.",
          scores: { RAT: 2, SNAKE: 1, DOG: 1 },
        },
        {
          text: "그중 덜 나쁜 것을 직관적으로 빨리 고른다.",
          scores: { PIG: 2, HORSE: 1, MONKEY: 1 },
        },
        {
          text: "원칙에 어긋나지 않는 쪽을 신중히 선택한다.",
          scores: { DOG: 2, RABBIT: 1, OX: 1 },
        },
        {
          text: "둘 다 포기하고 새로운 기회를 기다린다.",
          scores: { HORSE: 2, ROOSTER: 1, TIGER: 1 },
        },
      ],
    },
    {
      id: 18,
      question: "실패를 겪은 뒤 나는",
      choices: [
        {
          text: "오답 노트를 쓰듯 철저하게 배운다.",
          scores: { ROOSTER: 2, RAT: 1, SNAKE: 1 },
        },
        {
          text: "경험이라 생각하고 금방 툭툭 털어낸다.",
          scores: { HORSE: 2, PIG: 1, MONKEY: 1 },
        },
        {
          text: "자신을 위로하며 마음의 여유를 먼저 찾는다.",
          scores: { SHEEP: 2, RABBIT: 1, SNAKE: 1 },
        },
        {
          text: "독기를 품고 더 높은 목표를 향해 달려간다.",
          scores: { TIGER: 2, DRAGON: 1, HORSE: 1 },
        },
      ],
    },
  ],
  Ht = {
    RAT: {
      key: "RAT",
      name: "쥐",
      symbol: "🐀",
      yinYang: "음(陰)",
      element: "수(水)",
      season: "겨울",
      description:
        "당신은 선택의 순간에 현실적인 이득과 효율을 먼저 취합니다. 상황이 복잡해질수록 데이터와 실질적인 증거를 기준으로 움직이며, 성취를 통해 자신의 능력을 증명하려 합니다.",
      traits: [
        "현실적이고 계산적인 방식으로 결정을 내린다",
        "위기 상황에서 임기응변에 강점을 보인다",
        "장기적인 인내심에는 비교적 약하다",
        "실질적인 결과물을 중요하게 여긴다",
      ],
      worryMessage:
        "당신은 비슷한 순간마다, 가장 안전하고 효율적인 구멍을 찾아내는 습관이 있어요.",
      bestMatches: ["용", "원숭이"],
      worstMatches: ["말", "양"],
    },
    OX: {
      key: "OX",
      name: "소",
      symbol: "🐂",
      yinYang: "음(陰)",
      element: "토(土)",
      season: "겨울",
      description:
        "당신은 선택의 순간에 묵묵한 성실함과 신뢰를 먼저 취합니다. 상황이 복잡해질수록 원칙과 과거의 경험을 기준으로 움직이며, 성취보다는 과정의 정직함에 더 반응합니다.",
      traits: [
        "신중하고 일관된 방식으로 결정을 내린다",
        "장기적인 프로젝트나 인내가 필요한 상황에서 강점을 보인다",
        "갑작스러운 변화에 대응하는 속도는 비교적 약하다",
        "책임감과 신의를 중요하게 여긴다",
      ],
      worryMessage:
        "당신은 비슷한 순간마다, 느리지만 가장 단단한 발자국을 남기고 있네요.",
      bestMatches: ["쥐", "닭"],
      worstMatches: ["양", "말"],
    },
    TIGER: {
      key: "TIGER",
      name: "호랑이",
      symbol: "🐅",
      yinYang: "양(陽)",
      element: "목(木)",
      season: "봄",
      description:
        "당신은 선택의 순간에 주도권과 강력한 추진력을 먼저 취합니다. 상황이 복잡해질수록 자신의 자존감과 정의를 기준으로 움직이며, 관계보다는 성취를 위해 직진하는 편입니다.",
      traits: [
        "결단력 있고 시원시원한 방식으로 결정을 내린다",
        "모두가 주저하는 돌파구가 필요한 상황에서 강점을 보인다",
        "세밀한 감정 조율이나 타협에는 비교적 약하다",
        "자신의 명예와 리더십을 중요하게 여긴다",
      ],
      worryMessage:
        "당신은 비슷한 순간마다, 숲을 호령하는 왕처럼 당당하게 나아가고 있군요.",
      bestMatches: ["말", "개"],
      worstMatches: ["원숭이", "뱀"],
    },
    RABBIT: {
      key: "RABBIT",
      name: "토끼",
      symbol: "🐇",
      yinYang: "음(陰)",
      element: "목(木)",
      season: "봄",
      description:
        "당신은 선택의 순간에 조화로운 관계와 정서적 안정을 먼저 취합니다. 상황이 복잡해질수록 주변의 평판과 평화를 기준으로 움직이며, 성취보다는 사람 사이의 연결에 더 반응합니다.",
      traits: [
        "유연하고 사려 깊은 방식으로 결정을 내린다",
        "갈등을 중재하고 분위기를 편안하게 만드는 상황에서 강점을 보인다",
        "거절하거나 매정한 결단을 내리는 데는 비교적 약하다",
        "마음의 평온과 조화를 중요하게 여긴다",
      ],
      worryMessage:
        "당신은 비슷한 순간마다, 주변을 살피며 가장 따뜻한 길을 선택하고 있어요.",
      bestMatches: ["양", "돼지"],
      worstMatches: ["닭", "용"],
    },
    DRAGON: {
      key: "DRAGON",
      name: "용",
      symbol: "🐉",
      yinYang: "양(陽)",
      element: "토(土)",
      season: "봄",
      description:
        "당신은 선택의 순간에 원대한 비전과 창의적인 이상을 먼저 취합니다. 상황이 복잡해질수록 자신의 가치관과 미래의 가능성을 기준으로 움직이며, 현실적인 제약보다는 꿈을 쫓는 편입니다.",
      traits: [
        "독창적이고 대담한 방식으로 결정을 내린다",
        "새로운 패러다임을 제시해야 하는 상황에서 강점을 보인다",
        "일상의 지루한 반복 작업이나 세밀한 관리에는 비교적 약하다",
        "자유로운 영혼과 이상을 중요하게 여긴다",
      ],
      worryMessage:
        "당신은 비슷한 순간마다, 구름 위를 보며 자신만의 하늘을 그리고 있군요.",
      bestMatches: ["쥐", "원숭이"],
      worstMatches: ["개", "토끼"],
    },
    SNAKE: {
      key: "SNAKE",
      name: "뱀",
      symbol: "🐍",
      yinYang: "음(陰)",
      element: "화(火)",
      season: "여름",
      description:
        "당신은 선택의 순간에 냉철한 분석과 전략적인 판단을 먼저 취합니다. 상황이 복잡해질수록 인과관계와 본질적인 핵심을 기준으로 움직이며, 감정보다는 논리적인 완결성에 더 반응합니다.",
      traits: [
        "치밀하고 계획적인 방식으로 결정을 내린다",
        "복잡한 문제를 단순화하고 핵심을 찌르는 상황에서 강점을 보인다",
        "직설적인 화법으로 인한 오해를 푸는 데는 비교적 약하다",
        "지적인 깊이와 완벽함을 중요하게 여긴다",
      ],
      worryMessage:
        "당신은 비슷한 순간마다, 껍질을 벗듯 불필요한 것을 쳐내고 핵심만 보고 있네요.",
      bestMatches: ["소", "닭"],
      worstMatches: ["돼지", "호랑이"],
    },
    HORSE: {
      key: "HORSE",
      name: "말",
      symbol: "🐎",
      yinYang: "양(陽)",
      element: "화(火)",
      season: "여름",
      description:
        "당신은 선택의 순간에 자유로운 활동성과 즉각적인 실행을 먼저 취합니다. 상황이 복잡해질수록 자신의 직관과 에너지가 이끄는 곳을 기준으로 움직이며, 역동적인 성취를 선호합니다.",
      traits: [
        "정열적이고 행동 중심적인 방식으로 결정을 내린다",
        "빠른 실행력이 요구되거나 새로운 시작을 해야 하는 상황에서 강점을 보인다",
        "한 곳에 정착하여 꾸준히 마무리하는 데는 비교적 약하다",
        "자유와 열정적인 도전을 중요하게 여긴다",
      ],
      worryMessage:
        "당신은 비슷한 순간마다, 멈추지 않고 드넓은 초원을 달리고 싶어 하네요.",
      bestMatches: ["호랑이", "개"],
      worstMatches: ["쥐", "소"],
    },
    SHEEP: {
      key: "SHEEP",
      name: "양",
      symbol: "🐑",
      yinYang: "음(陰)",
      element: "토(土)",
      season: "여름",
      description:
        "당신은 선택의 순간에 포용력 있는 배려와 예술적 감수성을 먼저 취합니다. 상황이 복잡해질수록 공동체의 평화와 자신의 감수성을 기준으로 움직이며, 투쟁보다는 순응과 화합을 택합니다.",
      traits: [
        "부드럽고 이해심 깊은 방식으로 결정을 내린다",
        "사람들을 다독이고 정서적인 지지를 주는 상황에서 강점을 보인다",
        "주도적으로 환경을 바꾸거나 독해지는 데는 비교적 약하다",
        "정서적 교감과 안정감을 중요하게 여긴다",
      ],
      worryMessage:
        "당신은 비슷한 순간마다, 가시 돋친 세상에서 가장 보드라운 털을 내어주고 있군요.",
      bestMatches: ["토끼", "돼지"],
      worstMatches: ["소", "쥐"],
    },
    MONKEY: {
      key: "MONKEY",
      name: "원숭이",
      symbol: "🐒",
      yinYang: "양(陽)",
      element: "금(金)",
      season: "가을",
      description:
        "당신은 선택의 순간에 기발한 재치와 다재다능한 사교성을 먼저 취합니다. 상황이 복잡해질수록 재미와 효율적인 요령을 기준으로 움직이며, 고지식한 원칙보다는 유연한 대처에 더 반응합니다.",
      traits: [
        "영리하고 변화무쌍한 방식으로 결정을 내린다",
        "교착 상태에서 생각지 못한 돌파구를 찾는 상황에서 강점을 보인다",
        "진지한 분위기나 깊은 인내심 유지에는 비교적 약하다",
        "지적인 유희와 타인과의 소통을 중요하게 여긴다",
      ],
      worryMessage:
        "당신은 비슷한 순간마다, 가장 즐겁고 영리한 지름길을 찾아내고 있네요.",
      bestMatches: ["쥐", "용"],
      worstMatches: ["호랑이", "뱀"],
    },
    ROOSTER: {
      key: "ROOSTER",
      name: "닭",
      symbol: "🐓",
      yinYang: "음(陰)",
      element: "금(金)",
      season: "가을",
      description:
        "당신은 선택의 순간에 체계적인 완벽함과 분명한 자기 주관을 먼저 취합니다. 상황이 복잡해질수록 규율과 세부적인 완성도를 기준으로 움직이며, 성취를 위해 자신을 엄격히 관리하는 편입니다.",
      traits: [
        "분석적이고 체계적인 방식으로 결정을 내린다",
        "복잡한 일을 정리하고 완벽한 마무리를 지어야 하는 상황에서 강점을 보인다",
        "융통성을 발휘하거나 허술함을 견디는 데는 비교적 약하다",
        "자신의 전문성과 정확성을 중요하게 여긴다",
      ],
      worryMessage:
        "당신은 비슷한 순간마다, 새벽을 깨우듯 가장 명확한 답을 외치고 싶어 하네요.",
      bestMatches: ["소", "뱀"],
      worstMatches: ["토끼", "개"],
    },
    DOG: {
      key: "DOG",
      name: "개",
      symbol: "🐕",
      yinYang: "양(陽)",
      element: "토(土)",
      season: "가을",
      description:
        "당신은 선택의 순간에 정의로운 의리와 신의를 먼저 취합니다. 상황이 복잡해질수록 옳고 그름에 대한 가치관을 기준으로 움직이며, 자신의 이익보다는 관계와 약속에 더 반응합니다.",
      traits: [
        "직직하고 정직한 방식으로 결정을 내린다",
        "신뢰가 필요한 파트너십이나 원칙 고수가 필요한 상황에서 강점을 보인다",
        "지나친 경계심이나 융통성 없는 태도에는 비교적 약하다",
        "충성심과 도덕적 결백함을 중요하게 여긴다",
      ],
      worryMessage:
        "당신은 비슷한 순간마다, 비바람이 불어도 자신이 믿는 가치를 지키고 있군요.",
      bestMatches: ["호랑이", "말"],
      worstMatches: ["용", "닭"],
    },
    PIG: {
      key: "PIG",
      name: "돼지",
      symbol: "🐖",
      yinYang: "양(陽)",
      element: "수(水)",
      season: "겨울",
      description:
        "당신은 선택의 순간에 긍정적인 낙천성과 포용력 있는 너그러움을 먼저 취합니다. 상황이 복잡해질수록 현재의 행복과 공동의 만족을 기준으로 움직이며, 결과보다는 함께하는 즐거움을 선호합니다.",
      traits: [
        "여유롭고 낙관적인 방식으로 결정을 내린다",
        "경색된 분위기를 풀고 사람들 사이의 벽을 허무는 상황에서 강점을 보인다",
        "치열한 경쟁이나 세세한 숫자를 다루는 데는 비교적 약하다",
        "인생의 풍요로움과 사람 간의 정을 중요하게 여긴다",
      ],
      worryMessage:
        "당신은 비슷한 순간마다, 모든 걸 품어주는 넓은 대지처럼 웃고 있네요.",
      bestMatches: ["토끼", "양"],
      worstMatches: ["뱀", "원숭이"],
    },
  };
/*!
 * html2canvas 1.4.1 <https://html2canvas.hertzen.com>
 * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */ /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var Wc =
  function (l, n) {
    return (
      (Wc =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (i, r) {
            i.__proto__ = r;
          }) ||
        function (i, r) {
          for (var c in r)
            Object.prototype.hasOwnProperty.call(r, c) && (i[c] = r[c]);
        }),
      Wc(l, n)
    );
  };
function At(l, n) {
  if (typeof n != "function" && n !== null)
    throw new TypeError(
      "Class extends value " + String(n) + " is not a constructor or null"
    );
  Wc(l, n);
  function i() {
    this.constructor = l;
  }
  l.prototype =
    n === null ? Object.create(n) : ((i.prototype = n.prototype), new i());
}
var Pc = function () {
  return (
    (Pc =
      Object.assign ||
      function (n) {
        for (var i, r = 1, c = arguments.length; r < c; r++) {
          i = arguments[r];
          for (var B in i)
            Object.prototype.hasOwnProperty.call(i, B) && (n[B] = i[B]);
        }
        return n;
      }),
    Pc.apply(this, arguments)
  );
};
function Qe(l, n, i, r) {
  function c(B) {
    return B instanceof i
      ? B
      : new i(function (o) {
          o(B);
        });
  }
  return new (i || (i = Promise))(function (B, o) {
    function h(d) {
      try {
        w(r.next(d));
      } catch (U) {
        o(U);
      }
    }
    function g(d) {
      try {
        w(r.throw(d));
      } catch (U) {
        o(U);
      }
    }
    function w(d) {
      d.done ? B(d.value) : c(d.value).then(h, g);
    }
    w((r = r.apply(l, [])).next());
  });
}
function Be(l, n) {
  var i = {
      label: 0,
      sent: function () {
        if (B[0] & 1) throw B[1];
        return B[1];
      },
      trys: [],
      ops: [],
    },
    r,
    c,
    B,
    o;
  return (
    (o = { next: h(0), throw: h(1), return: h(2) }),
    typeof Symbol == "function" &&
      (o[Symbol.iterator] = function () {
        return this;
      }),
    o
  );
  function h(w) {
    return function (d) {
      return g([w, d]);
    };
  }
  function g(w) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; i; )
      try {
        if (
          ((r = 1),
          c &&
            (B =
              w[0] & 2
                ? c.return
                : w[0]
                ? c.throw || ((B = c.return) && B.call(c), 0)
                : c.next) &&
            !(B = B.call(c, w[1])).done)
        )
          return B;
        switch (((c = 0), B && (w = [w[0] & 2, B.value]), w[0])) {
          case 0:
          case 1:
            B = w;
            break;
          case 4:
            return i.label++, { value: w[1], done: !1 };
          case 5:
            i.label++, (c = w[1]), (w = [0]);
            continue;
          case 7:
            (w = i.ops.pop()), i.trys.pop();
            continue;
          default:
            if (
              ((B = i.trys),
              !(B = B.length > 0 && B[B.length - 1]) &&
                (w[0] === 6 || w[0] === 2))
            ) {
              i = 0;
              continue;
            }
            if (w[0] === 3 && (!B || (w[1] > B[0] && w[1] < B[3]))) {
              i.label = w[1];
              break;
            }
            if (w[0] === 6 && i.label < B[1]) {
              (i.label = B[1]), (B = w);
              break;
            }
            if (B && i.label < B[2]) {
              (i.label = B[2]), i.ops.push(w);
              break;
            }
            B[2] && i.ops.pop(), i.trys.pop();
            continue;
        }
        w = n.call(l, i);
      } catch (d) {
        (w = [6, d]), (c = 0);
      } finally {
        r = B = 0;
      }
    if (w[0] & 5) throw w[1];
    return { value: w[0] ? w[1] : void 0, done: !0 };
  }
}
function oi(l, n, i) {
  if (arguments.length === 2)
    for (var r = 0, c = n.length, B; r < c; r++)
      (B || !(r in n)) &&
        (B || (B = Array.prototype.slice.call(n, 0, r)), (B[r] = n[r]));
  return l.concat(B || n);
}
var Tt = (function () {
    function l(n, i, r, c) {
      (this.left = n), (this.top = i), (this.width = r), (this.height = c);
    }
    return (
      (l.prototype.add = function (n, i, r, c) {
        return new l(
          this.left + n,
          this.top + i,
          this.width + r,
          this.height + c
        );
      }),
      (l.fromClientRect = function (n, i) {
        return new l(
          i.left + n.windowBounds.left,
          i.top + n.windowBounds.top,
          i.width,
          i.height
        );
      }),
      (l.fromDOMRectList = function (n, i) {
        var r = Array.from(i).find(function (c) {
          return c.width !== 0;
        });
        return r
          ? new l(
              r.left + n.windowBounds.left,
              r.top + n.windowBounds.top,
              r.width,
              r.height
            )
          : l.EMPTY;
      }),
      (l.EMPTY = new l(0, 0, 0, 0)),
      l
    );
  })(),
  ki = function (l, n) {
    return Tt.fromClientRect(l, n.getBoundingClientRect());
  },
  HU = function (l) {
    var n = l.body,
      i = l.documentElement;
    if (!n || !i) throw new Error("Unable to get document size");
    var r = Math.max(
        Math.max(n.scrollWidth, i.scrollWidth),
        Math.max(n.offsetWidth, i.offsetWidth),
        Math.max(n.clientWidth, i.clientWidth)
      ),
      c = Math.max(
        Math.max(n.scrollHeight, i.scrollHeight),
        Math.max(n.offsetHeight, i.offsetHeight),
        Math.max(n.clientHeight, i.clientHeight)
      );
    return new Tt(0, 0, r, c);
  },
  Wi = function (l) {
    for (var n = [], i = 0, r = l.length; i < r; ) {
      var c = l.charCodeAt(i++);
      if (c >= 55296 && c <= 56319 && i < r) {
        var B = l.charCodeAt(i++);
        (B & 64512) === 56320
          ? n.push(((c & 1023) << 10) + (B & 1023) + 65536)
          : (n.push(c), i--);
      } else n.push(c);
    }
    return n;
  },
  YA = function () {
    for (var l = [], n = 0; n < arguments.length; n++) l[n] = arguments[n];
    if (String.fromCodePoint) return String.fromCodePoint.apply(String, l);
    var i = l.length;
    if (!i) return "";
    for (var r = [], c = -1, B = ""; ++c < i; ) {
      var o = l[c];
      o <= 65535
        ? r.push(o)
        : ((o -= 65536), r.push((o >> 10) + 55296, (o % 1024) + 56320)),
        (c + 1 === i || r.length > 16384) &&
          ((B += String.fromCharCode.apply(String, r)), (r.length = 0));
    }
    return B;
  },
  _Q = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  pU = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var gi = 0; gi < _Q.length; gi++) pU[_Q.charCodeAt(gi)] = gi;
var VQ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  Kl = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Qi = 0; Qi < VQ.length; Qi++) Kl[VQ.charCodeAt(Qi)] = Qi;
var SU = function (l) {
    var n = l.length * 0.75,
      i = l.length,
      r,
      c = 0,
      B,
      o,
      h,
      g;
    l[l.length - 1] === "=" && (n--, l[l.length - 2] === "=" && n--);
    var w =
        typeof ArrayBuffer < "u" &&
        typeof Uint8Array < "u" &&
        typeof Uint8Array.prototype.slice < "u"
          ? new ArrayBuffer(n)
          : new Array(n),
      d = Array.isArray(w) ? w : new Uint8Array(w);
    for (r = 0; r < i; r += 4)
      (B = Kl[l.charCodeAt(r)]),
        (o = Kl[l.charCodeAt(r + 1)]),
        (h = Kl[l.charCodeAt(r + 2)]),
        (g = Kl[l.charCodeAt(r + 3)]),
        (d[c++] = (B << 2) | (o >> 4)),
        (d[c++] = ((o & 15) << 4) | (h >> 2)),
        (d[c++] = ((h & 3) << 6) | (g & 63));
    return w;
  },
  bU = function (l) {
    for (var n = l.length, i = [], r = 0; r < n; r += 2)
      i.push((l[r + 1] << 8) | l[r]);
    return i;
  },
  TU = function (l) {
    for (var n = l.length, i = [], r = 0; r < n; r += 4)
      i.push((l[r + 3] << 24) | (l[r + 2] << 16) | (l[r + 1] << 8) | l[r]);
    return i;
  },
  Da = 5,
  vB = 11,
  Tc = 2,
  xU = vB - Da,
  _h = 65536 >> Da,
  KU = 1 << Da,
  xc = KU - 1,
  DU = 1024 >> Da,
  OU = _h + DU,
  IU = OU,
  LU = 32,
  MU = IU + LU,
  RU = 65536 >> vB,
  NU = 1 << xU,
  GU = NU - 1,
  XQ = function (l, n, i) {
    return l.slice
      ? l.slice(n, i)
      : new Uint16Array(Array.prototype.slice.call(l, n, i));
  },
  _U = function (l, n, i) {
    return l.slice
      ? l.slice(n, i)
      : new Uint32Array(Array.prototype.slice.call(l, n, i));
  },
  VU = function (l, n) {
    var i = SU(l),
      r = Array.isArray(i) ? TU(i) : new Uint32Array(i),
      c = Array.isArray(i) ? bU(i) : new Uint16Array(i),
      B = 24,
      o = XQ(c, B / 2, r[4] / 2),
      h = r[5] === 2 ? XQ(c, (B + r[4]) / 2) : _U(r, Math.ceil((B + r[4]) / 4));
    return new XU(r[0], r[1], r[2], r[3], o, h);
  },
  XU = (function () {
    function l(n, i, r, c, B, o) {
      (this.initialValue = n),
        (this.errorValue = i),
        (this.highStart = r),
        (this.highValueIndex = c),
        (this.index = B),
        (this.data = o);
    }
    return (
      (l.prototype.get = function (n) {
        var i;
        if (n >= 0) {
          if (n < 55296 || (n > 56319 && n <= 65535))
            return (
              (i = this.index[n >> Da]),
              (i = (i << Tc) + (n & xc)),
              this.data[i]
            );
          if (n <= 65535)
            return (
              (i = this.index[_h + ((n - 55296) >> Da)]),
              (i = (i << Tc) + (n & xc)),
              this.data[i]
            );
          if (n < this.highStart)
            return (
              (i = MU - RU + (n >> vB)),
              (i = this.index[i]),
              (i += (n >> Da) & GU),
              (i = this.index[i]),
              (i = (i << Tc) + (n & xc)),
              this.data[i]
            );
          if (n <= 1114111) return this.data[this.highValueIndex];
        }
        return this.errorValue;
      }),
      l
    );
  })(),
  zQ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  zU = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var hi = 0; hi < zQ.length; hi++) zU[zQ.charCodeAt(hi)] = hi;
var YU =
    "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==",
  YQ = 50,
  JU = 1,
  Vh = 2,
  Xh = 3,
  ZU = 4,
  jU = 5,
  JQ = 7,
  zh = 8,
  ZQ = 9,
  la = 10,
  $c = 11,
  jQ = 12,
  AB = 13,
  qU = 14,
  Dl = 15,
  eB = 16,
  wi = 17,
  Sl = 18,
  kU = 19,
  qQ = 20,
  tB = 21,
  bl = 22,
  Kc = 23,
  dn = 24,
  Oe = 25,
  Ol = 26,
  Il = 27,
  vn = 28,
  WU = 29,
  xa = 30,
  PU = 31,
  Ci = 32,
  Ui = 33,
  aB = 34,
  nB = 35,
  lB = 36,
  zl = 37,
  rB = 38,
  Li = 39,
  Mi = 40,
  Dc = 41,
  Yh = 42,
  $U = 43,
  Ad = [9001, 65288],
  Jh = "!",
  wA = "×",
  di = "÷",
  iB = VU(YU),
  pt = [xa, lB],
  uB = [JU, Vh, Xh, jU],
  Zh = [la, zh],
  kQ = [Il, Ol],
  ed = uB.concat(Zh),
  WQ = [rB, Li, Mi, aB, nB],
  td = [Dl, AB],
  ad = function (l, n) {
    n === void 0 && (n = "strict");
    var i = [],
      r = [],
      c = [];
    return (
      l.forEach(function (B, o) {
        var h = iB.get(B);
        if (
          (h > YQ ? (c.push(!0), (h -= YQ)) : c.push(!1),
          ["normal", "auto", "loose"].indexOf(n) !== -1 &&
            [8208, 8211, 12316, 12448].indexOf(B) !== -1)
        )
          return r.push(o), i.push(eB);
        if (h === ZU || h === $c) {
          if (o === 0) return r.push(o), i.push(xa);
          var g = i[o - 1];
          return ed.indexOf(g) === -1
            ? (r.push(r[o - 1]), i.push(g))
            : (r.push(o), i.push(xa));
        }
        if ((r.push(o), h === PU)) return i.push(n === "strict" ? tB : zl);
        if (h === Yh || h === WU) return i.push(xa);
        if (h === $U)
          return (B >= 131072 && B <= 196605) || (B >= 196608 && B <= 262141)
            ? i.push(zl)
            : i.push(xa);
        i.push(h);
      }),
      [r, i, c]
    );
  },
  Oc = function (l, n, i, r) {
    var c = r[i];
    if (Array.isArray(l) ? l.indexOf(c) !== -1 : l === c)
      for (var B = i; B <= r.length; ) {
        B++;
        var o = r[B];
        if (o === n) return !0;
        if (o !== la) break;
      }
    if (c === la)
      for (var B = i; B > 0; ) {
        B--;
        var h = r[B];
        if (Array.isArray(l) ? l.indexOf(h) !== -1 : l === h)
          for (var g = i; g <= r.length; ) {
            g++;
            var o = r[g];
            if (o === n) return !0;
            if (o !== la) break;
          }
        if (h !== la) break;
      }
    return !1;
  },
  PQ = function (l, n) {
    for (var i = l; i >= 0; ) {
      var r = n[i];
      if (r === la) i--;
      else return r;
    }
    return 0;
  },
  nd = function (l, n, i, r, c) {
    if (i[r] === 0) return wA;
    var B = r - 1;
    if (Array.isArray(c) && c[B] === !0) return wA;
    var o = B - 1,
      h = B + 1,
      g = n[B],
      w = o >= 0 ? n[o] : 0,
      d = n[h];
    if (g === Vh && d === Xh) return wA;
    if (uB.indexOf(g) !== -1) return Jh;
    if (uB.indexOf(d) !== -1 || Zh.indexOf(d) !== -1) return wA;
    if (PQ(B, n) === zh) return di;
    if (
      iB.get(l[B]) === $c ||
      ((g === Ci || g === Ui) && iB.get(l[h]) === $c) ||
      g === JQ ||
      d === JQ ||
      g === ZQ ||
      ([la, AB, Dl].indexOf(g) === -1 && d === ZQ) ||
      [wi, Sl, kU, dn, vn].indexOf(d) !== -1 ||
      PQ(B, n) === bl ||
      Oc(Kc, bl, B, n) ||
      Oc([wi, Sl], tB, B, n) ||
      Oc(jQ, jQ, B, n)
    )
      return wA;
    if (g === la) return di;
    if (g === Kc || d === Kc) return wA;
    if (d === eB || g === eB) return di;
    if (
      [AB, Dl, tB].indexOf(d) !== -1 ||
      g === qU ||
      (w === lB && td.indexOf(g) !== -1) ||
      (g === vn && d === lB) ||
      d === qQ ||
      (pt.indexOf(d) !== -1 && g === Oe) ||
      (pt.indexOf(g) !== -1 && d === Oe) ||
      (g === Il && [zl, Ci, Ui].indexOf(d) !== -1) ||
      ([zl, Ci, Ui].indexOf(g) !== -1 && d === Ol) ||
      (pt.indexOf(g) !== -1 && kQ.indexOf(d) !== -1) ||
      (kQ.indexOf(g) !== -1 && pt.indexOf(d) !== -1) ||
      ([Il, Ol].indexOf(g) !== -1 &&
        (d === Oe || ([bl, Dl].indexOf(d) !== -1 && n[h + 1] === Oe))) ||
      ([bl, Dl].indexOf(g) !== -1 && d === Oe) ||
      (g === Oe && [Oe, vn, dn].indexOf(d) !== -1)
    )
      return wA;
    if ([Oe, vn, dn, wi, Sl].indexOf(d) !== -1)
      for (var U = B; U >= 0; ) {
        var y = n[U];
        if (y === Oe) return wA;
        if ([vn, dn].indexOf(y) !== -1) U--;
        else break;
      }
    if ([Il, Ol].indexOf(d) !== -1)
      for (var U = [wi, Sl].indexOf(g) !== -1 ? o : B; U >= 0; ) {
        var y = n[U];
        if (y === Oe) return wA;
        if ([vn, dn].indexOf(y) !== -1) U--;
        else break;
      }
    if (
      (rB === g && [rB, Li, aB, nB].indexOf(d) !== -1) ||
      ([Li, aB].indexOf(g) !== -1 && [Li, Mi].indexOf(d) !== -1) ||
      ([Mi, nB].indexOf(g) !== -1 && d === Mi) ||
      (WQ.indexOf(g) !== -1 && [qQ, Ol].indexOf(d) !== -1) ||
      (WQ.indexOf(d) !== -1 && g === Il) ||
      (pt.indexOf(g) !== -1 && pt.indexOf(d) !== -1) ||
      (g === dn && pt.indexOf(d) !== -1) ||
      (pt.concat(Oe).indexOf(g) !== -1 &&
        d === bl &&
        Ad.indexOf(l[h]) === -1) ||
      (pt.concat(Oe).indexOf(d) !== -1 && g === Sl)
    )
      return wA;
    if (g === Dc && d === Dc) {
      for (var L = i[B], I = 1; L > 0 && (L--, n[L] === Dc); ) I++;
      if (I % 2 !== 0) return wA;
    }
    return g === Ci && d === Ui ? wA : di;
  },
  ld = function (l, n) {
    n || (n = { lineBreak: "normal", wordBreak: "normal" });
    var i = ad(l, n.lineBreak),
      r = i[0],
      c = i[1],
      B = i[2];
    (n.wordBreak === "break-all" || n.wordBreak === "break-word") &&
      (c = c.map(function (h) {
        return [Oe, xa, Yh].indexOf(h) !== -1 ? zl : h;
      }));
    var o =
      n.wordBreak === "keep-all"
        ? B.map(function (h, g) {
            return h && l[g] >= 19968 && l[g] <= 40959;
          })
        : void 0;
    return [r, c, o];
  },
  rd = (function () {
    function l(n, i, r, c) {
      (this.codePoints = n),
        (this.required = i === Jh),
        (this.start = r),
        (this.end = c);
    }
    return (
      (l.prototype.slice = function () {
        return YA.apply(void 0, this.codePoints.slice(this.start, this.end));
      }),
      l
    );
  })(),
  id = function (l, n) {
    var i = Wi(l),
      r = ld(i, n),
      c = r[0],
      B = r[1],
      o = r[2],
      h = i.length,
      g = 0,
      w = 0;
    return {
      next: function () {
        if (w >= h) return { done: !0, value: null };
        for (var d = wA; w < h && (d = nd(i, B, c, ++w, o)) === wA; );
        if (d !== wA || w === h) {
          var U = new rd(i, d, g, w);
          return (g = w), { value: U, done: !1 };
        }
        return { done: !0, value: null };
      },
    };
  },
  ud = 1,
  sd = 2,
  Zl = 4,
  $Q = 8,
  Gi = 10,
  Ah = 47,
  Nl = 92,
  cd = 9,
  Bd = 32,
  vi = 34,
  Tl = 61,
  fd = 35,
  od = 36,
  gd = 37,
  Fi = 39,
  Ei = 40,
  xl = 41,
  Qd = 95,
  Ee = 45,
  hd = 33,
  wd = 60,
  Cd = 62,
  Ud = 64,
  dd = 91,
  vd = 93,
  Fd = 61,
  Ed = 123,
  yi = 63,
  yd = 125,
  eh = 124,
  md = 126,
  Hd = 128,
  th = 65533,
  Ic = 42,
  Ka = 43,
  pd = 44,
  Sd = 58,
  bd = 59,
  Yl = 46,
  Td = 0,
  xd = 8,
  Kd = 11,
  Dd = 14,
  Od = 31,
  Id = 127,
  lt = -1,
  jh = 48,
  qh = 97,
  kh = 101,
  Ld = 102,
  Md = 117,
  Rd = 122,
  Wh = 65,
  Ph = 69,
  $h = 70,
  Nd = 85,
  Gd = 90,
  fe = function (l) {
    return l >= jh && l <= 57;
  },
  _d = function (l) {
    return l >= 55296 && l <= 57343;
  },
  Fn = function (l) {
    return fe(l) || (l >= Wh && l <= $h) || (l >= qh && l <= Ld);
  },
  Vd = function (l) {
    return l >= qh && l <= Rd;
  },
  Xd = function (l) {
    return l >= Wh && l <= Gd;
  },
  zd = function (l) {
    return Vd(l) || Xd(l);
  },
  Yd = function (l) {
    return l >= Hd;
  },
  mi = function (l) {
    return l === Gi || l === cd || l === Bd;
  },
  _i = function (l) {
    return zd(l) || Yd(l) || l === Qd;
  },
  ah = function (l) {
    return _i(l) || fe(l) || l === Ee;
  },
  Jd = function (l) {
    return (l >= Td && l <= xd) || l === Kd || (l >= Dd && l <= Od) || l === Id;
  },
  na = function (l, n) {
    return l !== Nl ? !1 : n !== Gi;
  },
  Hi = function (l, n, i) {
    return l === Ee ? _i(n) || na(n, i) : _i(l) ? !0 : !!(l === Nl && na(l, n));
  },
  Lc = function (l, n, i) {
    return l === Ka || l === Ee
      ? fe(n)
        ? !0
        : n === Yl && fe(i)
      : fe(l === Yl ? n : l);
  },
  Zd = function (l) {
    var n = 0,
      i = 1;
    (l[n] === Ka || l[n] === Ee) && (l[n] === Ee && (i = -1), n++);
    for (var r = []; fe(l[n]); ) r.push(l[n++]);
    var c = r.length ? parseInt(YA.apply(void 0, r), 10) : 0;
    l[n] === Yl && n++;
    for (var B = []; fe(l[n]); ) B.push(l[n++]);
    var o = B.length,
      h = o ? parseInt(YA.apply(void 0, B), 10) : 0;
    (l[n] === Ph || l[n] === kh) && n++;
    var g = 1;
    (l[n] === Ka || l[n] === Ee) && (l[n] === Ee && (g = -1), n++);
    for (var w = []; fe(l[n]); ) w.push(l[n++]);
    var d = w.length ? parseInt(YA.apply(void 0, w), 10) : 0;
    return i * (c + h * Math.pow(10, -o)) * Math.pow(10, g * d);
  },
  jd = { type: 2 },
  qd = { type: 3 },
  kd = { type: 4 },
  Wd = { type: 13 },
  Pd = { type: 8 },
  $d = { type: 21 },
  Av = { type: 9 },
  ev = { type: 10 },
  tv = { type: 11 },
  av = { type: 12 },
  nv = { type: 14 },
  pi = { type: 23 },
  lv = { type: 1 },
  rv = { type: 25 },
  iv = { type: 24 },
  uv = { type: 26 },
  sv = { type: 27 },
  cv = { type: 28 },
  Bv = { type: 29 },
  fv = { type: 31 },
  sB = { type: 32 },
  A0 = (function () {
    function l() {
      this._value = [];
    }
    return (
      (l.prototype.write = function (n) {
        this._value = this._value.concat(Wi(n));
      }),
      (l.prototype.read = function () {
        for (var n = [], i = this.consumeToken(); i !== sB; )
          n.push(i), (i = this.consumeToken());
        return n;
      }),
      (l.prototype.consumeToken = function () {
        var n = this.consumeCodePoint();
        switch (n) {
          case vi:
            return this.consumeStringToken(vi);
          case fd:
            var i = this.peekCodePoint(0),
              r = this.peekCodePoint(1),
              c = this.peekCodePoint(2);
            if (ah(i) || na(r, c)) {
              var B = Hi(i, r, c) ? sd : ud,
                o = this.consumeName();
              return { type: 5, value: o, flags: B };
            }
            break;
          case od:
            if (this.peekCodePoint(0) === Tl)
              return this.consumeCodePoint(), Wd;
            break;
          case Fi:
            return this.consumeStringToken(Fi);
          case Ei:
            return jd;
          case xl:
            return qd;
          case Ic:
            if (this.peekCodePoint(0) === Tl)
              return this.consumeCodePoint(), nv;
            break;
          case Ka:
            if (Lc(n, this.peekCodePoint(0), this.peekCodePoint(1)))
              return this.reconsumeCodePoint(n), this.consumeNumericToken();
            break;
          case pd:
            return kd;
          case Ee:
            var h = n,
              g = this.peekCodePoint(0),
              w = this.peekCodePoint(1);
            if (Lc(h, g, w))
              return this.reconsumeCodePoint(n), this.consumeNumericToken();
            if (Hi(h, g, w))
              return this.reconsumeCodePoint(n), this.consumeIdentLikeToken();
            if (g === Ee && w === Cd)
              return this.consumeCodePoint(), this.consumeCodePoint(), iv;
            break;
          case Yl:
            if (Lc(n, this.peekCodePoint(0), this.peekCodePoint(1)))
              return this.reconsumeCodePoint(n), this.consumeNumericToken();
            break;
          case Ah:
            if (this.peekCodePoint(0) === Ic)
              for (this.consumeCodePoint(); ; ) {
                var d = this.consumeCodePoint();
                if (d === Ic && ((d = this.consumeCodePoint()), d === Ah))
                  return this.consumeToken();
                if (d === lt) return this.consumeToken();
              }
            break;
          case Sd:
            return uv;
          case bd:
            return sv;
          case wd:
            if (
              this.peekCodePoint(0) === hd &&
              this.peekCodePoint(1) === Ee &&
              this.peekCodePoint(2) === Ee
            )
              return this.consumeCodePoint(), this.consumeCodePoint(), rv;
            break;
          case Ud:
            var U = this.peekCodePoint(0),
              y = this.peekCodePoint(1),
              L = this.peekCodePoint(2);
            if (Hi(U, y, L)) {
              var o = this.consumeName();
              return { type: 7, value: o };
            }
            break;
          case dd:
            return cv;
          case Nl:
            if (na(n, this.peekCodePoint(0)))
              return this.reconsumeCodePoint(n), this.consumeIdentLikeToken();
            break;
          case vd:
            return Bv;
          case Fd:
            if (this.peekCodePoint(0) === Tl)
              return this.consumeCodePoint(), Pd;
            break;
          case Ed:
            return tv;
          case yd:
            return av;
          case Md:
          case Nd:
            var I = this.peekCodePoint(0),
              R = this.peekCodePoint(1);
            return (
              I === Ka &&
                (Fn(R) || R === yi) &&
                (this.consumeCodePoint(), this.consumeUnicodeRangeToken()),
              this.reconsumeCodePoint(n),
              this.consumeIdentLikeToken()
            );
          case eh:
            if (this.peekCodePoint(0) === Tl)
              return this.consumeCodePoint(), Av;
            if (this.peekCodePoint(0) === eh)
              return this.consumeCodePoint(), $d;
            break;
          case md:
            if (this.peekCodePoint(0) === Tl)
              return this.consumeCodePoint(), ev;
            break;
          case lt:
            return sB;
        }
        return mi(n)
          ? (this.consumeWhiteSpace(), fv)
          : fe(n)
          ? (this.reconsumeCodePoint(n), this.consumeNumericToken())
          : _i(n)
          ? (this.reconsumeCodePoint(n), this.consumeIdentLikeToken())
          : { type: 6, value: YA(n) };
      }),
      (l.prototype.consumeCodePoint = function () {
        var n = this._value.shift();
        return typeof n > "u" ? -1 : n;
      }),
      (l.prototype.reconsumeCodePoint = function (n) {
        this._value.unshift(n);
      }),
      (l.prototype.peekCodePoint = function (n) {
        return n >= this._value.length ? -1 : this._value[n];
      }),
      (l.prototype.consumeUnicodeRangeToken = function () {
        for (var n = [], i = this.consumeCodePoint(); Fn(i) && n.length < 6; )
          n.push(i), (i = this.consumeCodePoint());
        for (var r = !1; i === yi && n.length < 6; )
          n.push(i), (i = this.consumeCodePoint()), (r = !0);
        if (r) {
          var c = parseInt(
              YA.apply(
                void 0,
                n.map(function (g) {
                  return g === yi ? jh : g;
                })
              ),
              16
            ),
            B = parseInt(
              YA.apply(
                void 0,
                n.map(function (g) {
                  return g === yi ? $h : g;
                })
              ),
              16
            );
          return { type: 30, start: c, end: B };
        }
        var o = parseInt(YA.apply(void 0, n), 16);
        if (this.peekCodePoint(0) === Ee && Fn(this.peekCodePoint(1))) {
          this.consumeCodePoint(), (i = this.consumeCodePoint());
          for (var h = []; Fn(i) && h.length < 6; )
            h.push(i), (i = this.consumeCodePoint());
          var B = parseInt(YA.apply(void 0, h), 16);
          return { type: 30, start: o, end: B };
        } else return { type: 30, start: o, end: o };
      }),
      (l.prototype.consumeIdentLikeToken = function () {
        var n = this.consumeName();
        return n.toLowerCase() === "url" && this.peekCodePoint(0) === Ei
          ? (this.consumeCodePoint(), this.consumeUrlToken())
          : this.peekCodePoint(0) === Ei
          ? (this.consumeCodePoint(), { type: 19, value: n })
          : { type: 20, value: n };
      }),
      (l.prototype.consumeUrlToken = function () {
        var n = [];
        if ((this.consumeWhiteSpace(), this.peekCodePoint(0) === lt))
          return { type: 22, value: "" };
        var i = this.peekCodePoint(0);
        if (i === Fi || i === vi) {
          var r = this.consumeStringToken(this.consumeCodePoint());
          return r.type === 0 &&
            (this.consumeWhiteSpace(),
            this.peekCodePoint(0) === lt || this.peekCodePoint(0) === xl)
            ? (this.consumeCodePoint(), { type: 22, value: r.value })
            : (this.consumeBadUrlRemnants(), pi);
        }
        for (;;) {
          var c = this.consumeCodePoint();
          if (c === lt || c === xl)
            return { type: 22, value: YA.apply(void 0, n) };
          if (mi(c))
            return (
              this.consumeWhiteSpace(),
              this.peekCodePoint(0) === lt || this.peekCodePoint(0) === xl
                ? (this.consumeCodePoint(),
                  { type: 22, value: YA.apply(void 0, n) })
                : (this.consumeBadUrlRemnants(), pi)
            );
          if (c === vi || c === Fi || c === Ei || Jd(c))
            return this.consumeBadUrlRemnants(), pi;
          if (c === Nl)
            if (na(c, this.peekCodePoint(0)))
              n.push(this.consumeEscapedCodePoint());
            else return this.consumeBadUrlRemnants(), pi;
          else n.push(c);
        }
      }),
      (l.prototype.consumeWhiteSpace = function () {
        for (; mi(this.peekCodePoint(0)); ) this.consumeCodePoint();
      }),
      (l.prototype.consumeBadUrlRemnants = function () {
        for (;;) {
          var n = this.consumeCodePoint();
          if (n === xl || n === lt) return;
          na(n, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
        }
      }),
      (l.prototype.consumeStringSlice = function (n) {
        for (var i = 5e4, r = ""; n > 0; ) {
          var c = Math.min(i, n);
          (r += YA.apply(void 0, this._value.splice(0, c))), (n -= c);
        }
        return this._value.shift(), r;
      }),
      (l.prototype.consumeStringToken = function (n) {
        var i = "",
          r = 0;
        do {
          var c = this._value[r];
          if (c === lt || c === void 0 || c === n)
            return (i += this.consumeStringSlice(r)), { type: 0, value: i };
          if (c === Gi) return this._value.splice(0, r), lv;
          if (c === Nl) {
            var B = this._value[r + 1];
            B !== lt &&
              B !== void 0 &&
              (B === Gi
                ? ((i += this.consumeStringSlice(r)),
                  (r = -1),
                  this._value.shift())
                : na(c, B) &&
                  ((i += this.consumeStringSlice(r)),
                  (i += YA(this.consumeEscapedCodePoint())),
                  (r = -1)));
          }
          r++;
        } while (!0);
      }),
      (l.prototype.consumeNumber = function () {
        var n = [],
          i = Zl,
          r = this.peekCodePoint(0);
        for (
          (r === Ka || r === Ee) && n.push(this.consumeCodePoint());
          fe(this.peekCodePoint(0));

        )
          n.push(this.consumeCodePoint());
        r = this.peekCodePoint(0);
        var c = this.peekCodePoint(1);
        if (r === Yl && fe(c))
          for (
            n.push(this.consumeCodePoint(), this.consumeCodePoint()), i = $Q;
            fe(this.peekCodePoint(0));

          )
            n.push(this.consumeCodePoint());
        (r = this.peekCodePoint(0)), (c = this.peekCodePoint(1));
        var B = this.peekCodePoint(2);
        if (
          (r === Ph || r === kh) &&
          (((c === Ka || c === Ee) && fe(B)) || fe(c))
        )
          for (
            n.push(this.consumeCodePoint(), this.consumeCodePoint()), i = $Q;
            fe(this.peekCodePoint(0));

          )
            n.push(this.consumeCodePoint());
        return [Zd(n), i];
      }),
      (l.prototype.consumeNumericToken = function () {
        var n = this.consumeNumber(),
          i = n[0],
          r = n[1],
          c = this.peekCodePoint(0),
          B = this.peekCodePoint(1),
          o = this.peekCodePoint(2);
        if (Hi(c, B, o)) {
          var h = this.consumeName();
          return { type: 15, number: i, flags: r, unit: h };
        }
        return c === gd
          ? (this.consumeCodePoint(), { type: 16, number: i, flags: r })
          : { type: 17, number: i, flags: r };
      }),
      (l.prototype.consumeEscapedCodePoint = function () {
        var n = this.consumeCodePoint();
        if (Fn(n)) {
          for (var i = YA(n); Fn(this.peekCodePoint(0)) && i.length < 6; )
            i += YA(this.consumeCodePoint());
          mi(this.peekCodePoint(0)) && this.consumeCodePoint();
          var r = parseInt(i, 16);
          return r === 0 || _d(r) || r > 1114111 ? th : r;
        }
        return n === lt ? th : n;
      }),
      (l.prototype.consumeName = function () {
        for (var n = ""; ; ) {
          var i = this.consumeCodePoint();
          if (ah(i)) n += YA(i);
          else if (na(i, this.peekCodePoint(0)))
            n += YA(this.consumeEscapedCodePoint());
          else return this.reconsumeCodePoint(i), n;
        }
      }),
      l
    );
  })(),
  e0 = (function () {
    function l(n) {
      this._tokens = n;
    }
    return (
      (l.create = function (n) {
        var i = new A0();
        return i.write(n), new l(i.read());
      }),
      (l.parseValue = function (n) {
        return l.create(n).parseComponentValue();
      }),
      (l.parseValues = function (n) {
        return l.create(n).parseComponentValues();
      }),
      (l.prototype.parseComponentValue = function () {
        for (var n = this.consumeToken(); n.type === 31; )
          n = this.consumeToken();
        if (n.type === 32)
          throw new SyntaxError(
            "Error parsing CSS component value, unexpected EOF"
          );
        this.reconsumeToken(n);
        var i = this.consumeComponentValue();
        do n = this.consumeToken();
        while (n.type === 31);
        if (n.type === 32) return i;
        throw new SyntaxError(
          "Error parsing CSS component value, multiple values found when expecting only one"
        );
      }),
      (l.prototype.parseComponentValues = function () {
        for (var n = []; ; ) {
          var i = this.consumeComponentValue();
          if (i.type === 32) return n;
          n.push(i), n.push();
        }
      }),
      (l.prototype.consumeComponentValue = function () {
        var n = this.consumeToken();
        switch (n.type) {
          case 11:
          case 28:
          case 2:
            return this.consumeSimpleBlock(n.type);
          case 19:
            return this.consumeFunction(n);
        }
        return n;
      }),
      (l.prototype.consumeSimpleBlock = function (n) {
        for (var i = { type: n, values: [] }, r = this.consumeToken(); ; ) {
          if (r.type === 32 || gv(r, n)) return i;
          this.reconsumeToken(r),
            i.values.push(this.consumeComponentValue()),
            (r = this.consumeToken());
        }
      }),
      (l.prototype.consumeFunction = function (n) {
        for (var i = { name: n.value, values: [], type: 18 }; ; ) {
          var r = this.consumeToken();
          if (r.type === 32 || r.type === 3) return i;
          this.reconsumeToken(r), i.values.push(this.consumeComponentValue());
        }
      }),
      (l.prototype.consumeToken = function () {
        var n = this._tokens.shift();
        return typeof n > "u" ? sB : n;
      }),
      (l.prototype.reconsumeToken = function (n) {
        this._tokens.unshift(n);
      }),
      l
    );
  })(),
  jl = function (l) {
    return l.type === 15;
  },
  xn = function (l) {
    return l.type === 17;
  },
  TA = function (l) {
    return l.type === 20;
  },
  ov = function (l) {
    return l.type === 0;
  },
  cB = function (l, n) {
    return TA(l) && l.value === n;
  },
  t0 = function (l) {
    return l.type !== 31;
  },
  Tn = function (l) {
    return l.type !== 31 && l.type !== 4;
  },
  rt = function (l) {
    var n = [],
      i = [];
    return (
      l.forEach(function (r) {
        if (r.type === 4) {
          if (i.length === 0)
            throw new Error("Error parsing function args, zero tokens for arg");
          n.push(i), (i = []);
          return;
        }
        r.type !== 31 && i.push(r);
      }),
      i.length && n.push(i),
      n
    );
  },
  gv = function (l, n) {
    return (n === 11 && l.type === 12) || (n === 28 && l.type === 29)
      ? !0
      : n === 2 && l.type === 3;
  },
  ca = function (l) {
    return l.type === 17 || l.type === 15;
  },
  WA = function (l) {
    return l.type === 16 || ca(l);
  },
  a0 = function (l) {
    return l.length > 1 ? [l[0], l[1]] : [l[0]];
  },
  se = { type: 17, number: 0, flags: Zl },
  FB = { type: 16, number: 50, flags: Zl },
  ra = { type: 16, number: 100, flags: Zl },
  Ll = function (l, n, i) {
    var r = l[0],
      c = l[1];
    return [OA(r, n), OA(typeof c < "u" ? c : r, i)];
  },
  OA = function (l, n) {
    if (l.type === 16) return (l.number / 100) * n;
    if (jl(l))
      switch (l.unit) {
        case "rem":
        case "em":
          return 16 * l.number;
        case "px":
        default:
          return l.number;
      }
    return l.number;
  },
  n0 = "deg",
  l0 = "grad",
  r0 = "rad",
  i0 = "turn",
  Pi = {
    name: "angle",
    parse: function (l, n) {
      if (n.type === 15)
        switch (n.unit) {
          case n0:
            return (Math.PI * n.number) / 180;
          case l0:
            return (Math.PI / 200) * n.number;
          case r0:
            return n.number;
          case i0:
            return Math.PI * 2 * n.number;
        }
      throw new Error("Unsupported angle type");
    },
  },
  u0 = function (l) {
    return (
      l.type === 15 &&
      (l.unit === n0 || l.unit === l0 || l.unit === r0 || l.unit === i0)
    );
  },
  s0 = function (l) {
    var n = l
      .filter(TA)
      .map(function (i) {
        return i.value;
      })
      .join(" ");
    switch (n) {
      case "to bottom right":
      case "to right bottom":
      case "left top":
      case "top left":
        return [se, se];
      case "to top":
      case "bottom":
        return je(0);
      case "to bottom left":
      case "to left bottom":
      case "right top":
      case "top right":
        return [se, ra];
      case "to right":
      case "left":
        return je(90);
      case "to top left":
      case "to left top":
      case "right bottom":
      case "bottom right":
        return [ra, ra];
      case "to bottom":
      case "top":
        return je(180);
      case "to top right":
      case "to right top":
      case "left bottom":
      case "bottom left":
        return [ra, se];
      case "to left":
      case "right":
        return je(270);
    }
    return 0;
  },
  je = function (l) {
    return (Math.PI * l) / 180;
  },
  ua = {
    name: "color",
    parse: function (l, n) {
      if (n.type === 18) {
        var i = Qv[n.name];
        if (typeof i > "u")
          throw new Error(
            'Attempting to parse an unsupported color function "' + n.name + '"'
          );
        return i(l, n.values);
      }
      if (n.type === 5) {
        if (n.value.length === 3) {
          var r = n.value.substring(0, 1),
            c = n.value.substring(1, 2),
            B = n.value.substring(2, 3);
          return ia(
            parseInt(r + r, 16),
            parseInt(c + c, 16),
            parseInt(B + B, 16),
            1
          );
        }
        if (n.value.length === 4) {
          var r = n.value.substring(0, 1),
            c = n.value.substring(1, 2),
            B = n.value.substring(2, 3),
            o = n.value.substring(3, 4);
          return ia(
            parseInt(r + r, 16),
            parseInt(c + c, 16),
            parseInt(B + B, 16),
            parseInt(o + o, 16) / 255
          );
        }
        if (n.value.length === 6) {
          var r = n.value.substring(0, 2),
            c = n.value.substring(2, 4),
            B = n.value.substring(4, 6);
          return ia(parseInt(r, 16), parseInt(c, 16), parseInt(B, 16), 1);
        }
        if (n.value.length === 8) {
          var r = n.value.substring(0, 2),
            c = n.value.substring(2, 4),
            B = n.value.substring(4, 6),
            o = n.value.substring(6, 8);
          return ia(
            parseInt(r, 16),
            parseInt(c, 16),
            parseInt(B, 16),
            parseInt(o, 16) / 255
          );
        }
      }
      if (n.type === 20) {
        var h = bt[n.value.toUpperCase()];
        if (typeof h < "u") return h;
      }
      return bt.TRANSPARENT;
    },
  },
  sa = function (l) {
    return (255 & l) === 0;
  },
  te = function (l) {
    var n = 255 & l,
      i = 255 & (l >> 8),
      r = 255 & (l >> 16),
      c = 255 & (l >> 24);
    return n < 255
      ? "rgba(" + c + "," + r + "," + i + "," + n / 255 + ")"
      : "rgb(" + c + "," + r + "," + i + ")";
  },
  ia = function (l, n, i, r) {
    return (
      ((l << 24) | (n << 16) | (i << 8) | (Math.round(r * 255) << 0)) >>> 0
    );
  },
  nh = function (l, n) {
    if (l.type === 17) return l.number;
    if (l.type === 16) {
      var i = n === 3 ? 1 : 255;
      return n === 3 ? (l.number / 100) * i : Math.round((l.number / 100) * i);
    }
    return 0;
  },
  lh = function (l, n) {
    var i = n.filter(Tn);
    if (i.length === 3) {
      var r = i.map(nh),
        c = r[0],
        B = r[1],
        o = r[2];
      return ia(c, B, o, 1);
    }
    if (i.length === 4) {
      var h = i.map(nh),
        c = h[0],
        B = h[1],
        o = h[2],
        g = h[3];
      return ia(c, B, o, g);
    }
    return 0;
  };
function Mc(l, n, i) {
  return (
    i < 0 && (i += 1),
    i >= 1 && (i -= 1),
    i < 1 / 6
      ? (n - l) * i * 6 + l
      : i < 1 / 2
      ? n
      : i < 2 / 3
      ? (n - l) * 6 * (2 / 3 - i) + l
      : l
  );
}
var rh = function (l, n) {
    var i = n.filter(Tn),
      r = i[0],
      c = i[1],
      B = i[2],
      o = i[3],
      h = (r.type === 17 ? je(r.number) : Pi.parse(l, r)) / (Math.PI * 2),
      g = WA(c) ? c.number / 100 : 0,
      w = WA(B) ? B.number / 100 : 0,
      d = typeof o < "u" && WA(o) ? OA(o, 1) : 1;
    if (g === 0) return ia(w * 255, w * 255, w * 255, 1);
    var U = w <= 0.5 ? w * (g + 1) : w + g - w * g,
      y = w * 2 - U,
      L = Mc(y, U, h + 1 / 3),
      I = Mc(y, U, h),
      R = Mc(y, U, h - 1 / 3);
    return ia(L * 255, I * 255, R * 255, d);
  },
  Qv = { hsl: rh, hsla: rh, rgb: lh, rgba: lh },
  Gl = function (l, n) {
    return ua.parse(l, e0.create(n).parseComponentValue());
  },
  bt = {
    ALICEBLUE: 4042850303,
    ANTIQUEWHITE: 4209760255,
    AQUA: 16777215,
    AQUAMARINE: 2147472639,
    AZURE: 4043309055,
    BEIGE: 4126530815,
    BISQUE: 4293182719,
    BLACK: 255,
    BLANCHEDALMOND: 4293643775,
    BLUE: 65535,
    BLUEVIOLET: 2318131967,
    BROWN: 2771004159,
    BURLYWOOD: 3736635391,
    CADETBLUE: 1604231423,
    CHARTREUSE: 2147418367,
    CHOCOLATE: 3530104575,
    CORAL: 4286533887,
    CORNFLOWERBLUE: 1687547391,
    CORNSILK: 4294499583,
    CRIMSON: 3692313855,
    CYAN: 16777215,
    DARKBLUE: 35839,
    DARKCYAN: 9145343,
    DARKGOLDENROD: 3095837695,
    DARKGRAY: 2846468607,
    DARKGREEN: 6553855,
    DARKGREY: 2846468607,
    DARKKHAKI: 3182914559,
    DARKMAGENTA: 2332068863,
    DARKOLIVEGREEN: 1433087999,
    DARKORANGE: 4287365375,
    DARKORCHID: 2570243327,
    DARKRED: 2332033279,
    DARKSALMON: 3918953215,
    DARKSEAGREEN: 2411499519,
    DARKSLATEBLUE: 1211993087,
    DARKSLATEGRAY: 793726975,
    DARKSLATEGREY: 793726975,
    DARKTURQUOISE: 13554175,
    DARKVIOLET: 2483082239,
    DEEPPINK: 4279538687,
    DEEPSKYBLUE: 12582911,
    DIMGRAY: 1768516095,
    DIMGREY: 1768516095,
    DODGERBLUE: 512819199,
    FIREBRICK: 2988581631,
    FLORALWHITE: 4294635775,
    FORESTGREEN: 579543807,
    FUCHSIA: 4278255615,
    GAINSBORO: 3705462015,
    GHOSTWHITE: 4177068031,
    GOLD: 4292280575,
    GOLDENROD: 3668254975,
    GRAY: 2155905279,
    GREEN: 8388863,
    GREENYELLOW: 2919182335,
    GREY: 2155905279,
    HONEYDEW: 4043305215,
    HOTPINK: 4285117695,
    INDIANRED: 3445382399,
    INDIGO: 1258324735,
    IVORY: 4294963455,
    KHAKI: 4041641215,
    LAVENDER: 3873897215,
    LAVENDERBLUSH: 4293981695,
    LAWNGREEN: 2096890111,
    LEMONCHIFFON: 4294626815,
    LIGHTBLUE: 2916673279,
    LIGHTCORAL: 4034953471,
    LIGHTCYAN: 3774873599,
    LIGHTGOLDENRODYELLOW: 4210742015,
    LIGHTGRAY: 3553874943,
    LIGHTGREEN: 2431553791,
    LIGHTGREY: 3553874943,
    LIGHTPINK: 4290167295,
    LIGHTSALMON: 4288707327,
    LIGHTSEAGREEN: 548580095,
    LIGHTSKYBLUE: 2278488831,
    LIGHTSLATEGRAY: 2005441023,
    LIGHTSLATEGREY: 2005441023,
    LIGHTSTEELBLUE: 2965692159,
    LIGHTYELLOW: 4294959359,
    LIME: 16711935,
    LIMEGREEN: 852308735,
    LINEN: 4210091775,
    MAGENTA: 4278255615,
    MAROON: 2147483903,
    MEDIUMAQUAMARINE: 1724754687,
    MEDIUMBLUE: 52735,
    MEDIUMORCHID: 3126187007,
    MEDIUMPURPLE: 2473647103,
    MEDIUMSEAGREEN: 1018393087,
    MEDIUMSLATEBLUE: 2070474495,
    MEDIUMSPRINGGREEN: 16423679,
    MEDIUMTURQUOISE: 1221709055,
    MEDIUMVIOLETRED: 3340076543,
    MIDNIGHTBLUE: 421097727,
    MINTCREAM: 4127193855,
    MISTYROSE: 4293190143,
    MOCCASIN: 4293178879,
    NAVAJOWHITE: 4292783615,
    NAVY: 33023,
    OLDLACE: 4260751103,
    OLIVE: 2155872511,
    OLIVEDRAB: 1804477439,
    ORANGE: 4289003775,
    ORANGERED: 4282712319,
    ORCHID: 3664828159,
    PALEGOLDENROD: 4008225535,
    PALEGREEN: 2566625535,
    PALETURQUOISE: 2951671551,
    PALEVIOLETRED: 3681588223,
    PAPAYAWHIP: 4293907967,
    PEACHPUFF: 4292524543,
    PERU: 3448061951,
    PINK: 4290825215,
    PLUM: 3718307327,
    POWDERBLUE: 2967529215,
    PURPLE: 2147516671,
    REBECCAPURPLE: 1714657791,
    RED: 4278190335,
    ROSYBROWN: 3163525119,
    ROYALBLUE: 1097458175,
    SADDLEBROWN: 2336560127,
    SALMON: 4202722047,
    SANDYBROWN: 4104413439,
    SEAGREEN: 780883967,
    SEASHELL: 4294307583,
    SIENNA: 2689740287,
    SILVER: 3233857791,
    SKYBLUE: 2278484991,
    SLATEBLUE: 1784335871,
    SLATEGRAY: 1887473919,
    SLATEGREY: 1887473919,
    SNOW: 4294638335,
    SPRINGGREEN: 16744447,
    STEELBLUE: 1182971135,
    TAN: 3535047935,
    TEAL: 8421631,
    THISTLE: 3636451583,
    TOMATO: 4284696575,
    TRANSPARENT: 0,
    TURQUOISE: 1088475391,
    VIOLET: 4001558271,
    WHEAT: 4125012991,
    WHITE: 4294967295,
    WHITESMOKE: 4126537215,
    YELLOW: 4294902015,
    YELLOWGREEN: 2597139199,
  },
  hv = {
    name: "background-clip",
    initialValue: "border-box",
    prefix: !1,
    type: 1,
    parse: function (l, n) {
      return n.map(function (i) {
        if (TA(i))
          switch (i.value) {
            case "padding-box":
              return 1;
            case "content-box":
              return 2;
          }
        return 0;
      });
    },
  },
  wv = {
    name: "background-color",
    initialValue: "transparent",
    prefix: !1,
    type: 3,
    format: "color",
  },
  $i = function (l, n) {
    var i = ua.parse(l, n[0]),
      r = n[1];
    return r && WA(r) ? { color: i, stop: r } : { color: i, stop: null };
  },
  ih = function (l, n) {
    var i = l[0],
      r = l[l.length - 1];
    i.stop === null && (i.stop = se), r.stop === null && (r.stop = ra);
    for (var c = [], B = 0, o = 0; o < l.length; o++) {
      var h = l[o].stop;
      if (h !== null) {
        var g = OA(h, n);
        g > B ? c.push(g) : c.push(B), (B = g);
      } else c.push(null);
    }
    for (var w = null, o = 0; o < c.length; o++) {
      var d = c[o];
      if (d === null) w === null && (w = o);
      else if (w !== null) {
        for (
          var U = o - w, y = c[w - 1], L = (d - y) / (U + 1), I = 1;
          I <= U;
          I++
        )
          c[w + I - 1] = L * I;
        w = null;
      }
    }
    return l.map(function (R, AA) {
      var _ = R.color;
      return { color: _, stop: Math.max(Math.min(1, c[AA] / n), 0) };
    });
  },
  Cv = function (l, n, i) {
    var r = n / 2,
      c = i / 2,
      B = OA(l[0], n) - r,
      o = c - OA(l[1], i);
    return (Math.atan2(o, B) + Math.PI * 2) % (Math.PI * 2);
  },
  Uv = function (l, n, i) {
    var r = typeof l == "number" ? l : Cv(l, n, i),
      c = Math.abs(n * Math.sin(r)) + Math.abs(i * Math.cos(r)),
      B = n / 2,
      o = i / 2,
      h = c / 2,
      g = Math.sin(r - Math.PI / 2) * h,
      w = Math.cos(r - Math.PI / 2) * h;
    return [c, B - w, B + w, o - g, o + g];
  },
  $e = function (l, n) {
    return Math.sqrt(l * l + n * n);
  },
  uh = function (l, n, i, r, c) {
    var B = [
      [0, 0],
      [0, n],
      [l, 0],
      [l, n],
    ];
    return B.reduce(
      function (o, h) {
        var g = h[0],
          w = h[1],
          d = $e(i - g, r - w);
        return (c ? d < o.optimumDistance : d > o.optimumDistance)
          ? { optimumCorner: h, optimumDistance: d }
          : o;
      },
      { optimumDistance: c ? 1 / 0 : -1 / 0, optimumCorner: null }
    ).optimumCorner;
  },
  dv = function (l, n, i, r, c) {
    var B = 0,
      o = 0;
    switch (l.size) {
      case 0:
        l.shape === 0
          ? (B = o =
              Math.min(
                Math.abs(n),
                Math.abs(n - r),
                Math.abs(i),
                Math.abs(i - c)
              ))
          : l.shape === 1 &&
            ((B = Math.min(Math.abs(n), Math.abs(n - r))),
            (o = Math.min(Math.abs(i), Math.abs(i - c))));
        break;
      case 2:
        if (l.shape === 0)
          B = o = Math.min(
            $e(n, i),
            $e(n, i - c),
            $e(n - r, i),
            $e(n - r, i - c)
          );
        else if (l.shape === 1) {
          var h =
              Math.min(Math.abs(i), Math.abs(i - c)) /
              Math.min(Math.abs(n), Math.abs(n - r)),
            g = uh(r, c, n, i, !0),
            w = g[0],
            d = g[1];
          (B = $e(w - n, (d - i) / h)), (o = h * B);
        }
        break;
      case 1:
        l.shape === 0
          ? (B = o =
              Math.max(
                Math.abs(n),
                Math.abs(n - r),
                Math.abs(i),
                Math.abs(i - c)
              ))
          : l.shape === 1 &&
            ((B = Math.max(Math.abs(n), Math.abs(n - r))),
            (o = Math.max(Math.abs(i), Math.abs(i - c))));
        break;
      case 3:
        if (l.shape === 0)
          B = o = Math.max(
            $e(n, i),
            $e(n, i - c),
            $e(n - r, i),
            $e(n - r, i - c)
          );
        else if (l.shape === 1) {
          var h =
              Math.max(Math.abs(i), Math.abs(i - c)) /
              Math.max(Math.abs(n), Math.abs(n - r)),
            U = uh(r, c, n, i, !1),
            w = U[0],
            d = U[1];
          (B = $e(w - n, (d - i) / h)), (o = h * B);
        }
        break;
    }
    return (
      Array.isArray(l.size) &&
        ((B = OA(l.size[0], r)),
        (o = l.size.length === 2 ? OA(l.size[1], c) : B)),
      [B, o]
    );
  },
  vv = function (l, n) {
    var i = je(180),
      r = [];
    return (
      rt(n).forEach(function (c, B) {
        if (B === 0) {
          var o = c[0];
          if (o.type === 20 && o.value === "to") {
            i = s0(c);
            return;
          } else if (u0(o)) {
            i = Pi.parse(l, o);
            return;
          }
        }
        var h = $i(l, c);
        r.push(h);
      }),
      { angle: i, stops: r, type: 1 }
    );
  },
  Si = function (l, n) {
    var i = je(180),
      r = [];
    return (
      rt(n).forEach(function (c, B) {
        if (B === 0) {
          var o = c[0];
          if (
            o.type === 20 &&
            ["top", "left", "right", "bottom"].indexOf(o.value) !== -1
          ) {
            i = s0(c);
            return;
          } else if (u0(o)) {
            i = (Pi.parse(l, o) + je(270)) % je(360);
            return;
          }
        }
        var h = $i(l, c);
        r.push(h);
      }),
      { angle: i, stops: r, type: 1 }
    );
  },
  Fv = function (l, n) {
    var i = je(180),
      r = [],
      c = 1,
      B = 0,
      o = 3,
      h = [];
    return (
      rt(n).forEach(function (g, w) {
        var d = g[0];
        if (w === 0) {
          if (TA(d) && d.value === "linear") {
            c = 1;
            return;
          } else if (TA(d) && d.value === "radial") {
            c = 2;
            return;
          }
        }
        if (d.type === 18) {
          if (d.name === "from") {
            var U = ua.parse(l, d.values[0]);
            r.push({ stop: se, color: U });
          } else if (d.name === "to") {
            var U = ua.parse(l, d.values[0]);
            r.push({ stop: ra, color: U });
          } else if (d.name === "color-stop") {
            var y = d.values.filter(Tn);
            if (y.length === 2) {
              var U = ua.parse(l, y[1]),
                L = y[0];
              xn(L) &&
                r.push({
                  stop: { type: 16, number: L.number * 100, flags: L.flags },
                  color: U,
                });
            }
          }
        }
      }),
      c === 1
        ? { angle: (i + je(180)) % je(360), stops: r, type: c }
        : { size: o, shape: B, stops: r, position: h, type: c }
    );
  },
  c0 = "closest-side",
  B0 = "farthest-side",
  f0 = "closest-corner",
  o0 = "farthest-corner",
  g0 = "circle",
  Q0 = "ellipse",
  h0 = "cover",
  w0 = "contain",
  Ev = function (l, n) {
    var i = 0,
      r = 3,
      c = [],
      B = [];
    return (
      rt(n).forEach(function (o, h) {
        var g = !0;
        if (h === 0) {
          var w = !1;
          g = o.reduce(function (U, y) {
            if (w)
              if (TA(y))
                switch (y.value) {
                  case "center":
                    return B.push(FB), U;
                  case "top":
                  case "left":
                    return B.push(se), U;
                  case "right":
                  case "bottom":
                    return B.push(ra), U;
                }
              else (WA(y) || ca(y)) && B.push(y);
            else if (TA(y))
              switch (y.value) {
                case g0:
                  return (i = 0), !1;
                case Q0:
                  return (i = 1), !1;
                case "at":
                  return (w = !0), !1;
                case c0:
                  return (r = 0), !1;
                case h0:
                case B0:
                  return (r = 1), !1;
                case w0:
                case f0:
                  return (r = 2), !1;
                case o0:
                  return (r = 3), !1;
              }
            else if (ca(y) || WA(y))
              return Array.isArray(r) || (r = []), r.push(y), !1;
            return U;
          }, g);
        }
        if (g) {
          var d = $i(l, o);
          c.push(d);
        }
      }),
      { size: r, shape: i, stops: c, position: B, type: 2 }
    );
  },
  bi = function (l, n) {
    var i = 0,
      r = 3,
      c = [],
      B = [];
    return (
      rt(n).forEach(function (o, h) {
        var g = !0;
        if (
          (h === 0
            ? (g = o.reduce(function (d, U) {
                if (TA(U))
                  switch (U.value) {
                    case "center":
                      return B.push(FB), !1;
                    case "top":
                    case "left":
                      return B.push(se), !1;
                    case "right":
                    case "bottom":
                      return B.push(ra), !1;
                  }
                else if (WA(U) || ca(U)) return B.push(U), !1;
                return d;
              }, g))
            : h === 1 &&
              (g = o.reduce(function (d, U) {
                if (TA(U))
                  switch (U.value) {
                    case g0:
                      return (i = 0), !1;
                    case Q0:
                      return (i = 1), !1;
                    case w0:
                    case c0:
                      return (r = 0), !1;
                    case B0:
                      return (r = 1), !1;
                    case f0:
                      return (r = 2), !1;
                    case h0:
                    case o0:
                      return (r = 3), !1;
                  }
                else if (ca(U) || WA(U))
                  return Array.isArray(r) || (r = []), r.push(U), !1;
                return d;
              }, g)),
          g)
        ) {
          var w = $i(l, o);
          c.push(w);
        }
      }),
      { size: r, shape: i, stops: c, position: B, type: 2 }
    );
  },
  yv = function (l) {
    return l.type === 1;
  },
  mv = function (l) {
    return l.type === 2;
  },
  EB = {
    name: "image",
    parse: function (l, n) {
      if (n.type === 22) {
        var i = { url: n.value, type: 0 };
        return l.cache.addImage(n.value), i;
      }
      if (n.type === 18) {
        var r = C0[n.name];
        if (typeof r > "u")
          throw new Error(
            'Attempting to parse an unsupported image function "' + n.name + '"'
          );
        return r(l, n.values);
      }
      throw new Error("Unsupported image type " + n.type);
    },
  };
function Hv(l) {
  return (
    !(l.type === 20 && l.value === "none") && (l.type !== 18 || !!C0[l.name])
  );
}
var C0 = {
    "linear-gradient": vv,
    "-moz-linear-gradient": Si,
    "-ms-linear-gradient": Si,
    "-o-linear-gradient": Si,
    "-webkit-linear-gradient": Si,
    "radial-gradient": Ev,
    "-moz-radial-gradient": bi,
    "-ms-radial-gradient": bi,
    "-o-radial-gradient": bi,
    "-webkit-radial-gradient": bi,
    "-webkit-gradient": Fv,
  },
  pv = {
    name: "background-image",
    initialValue: "none",
    type: 1,
    prefix: !1,
    parse: function (l, n) {
      if (n.length === 0) return [];
      var i = n[0];
      return i.type === 20 && i.value === "none"
        ? []
        : n
            .filter(function (r) {
              return Tn(r) && Hv(r);
            })
            .map(function (r) {
              return EB.parse(l, r);
            });
    },
  },
  Sv = {
    name: "background-origin",
    initialValue: "border-box",
    prefix: !1,
    type: 1,
    parse: function (l, n) {
      return n.map(function (i) {
        if (TA(i))
          switch (i.value) {
            case "padding-box":
              return 1;
            case "content-box":
              return 2;
          }
        return 0;
      });
    },
  },
  bv = {
    name: "background-position",
    initialValue: "0% 0%",
    type: 1,
    prefix: !1,
    parse: function (l, n) {
      return rt(n)
        .map(function (i) {
          return i.filter(WA);
        })
        .map(a0);
    },
  },
  Tv = {
    name: "background-repeat",
    initialValue: "repeat",
    prefix: !1,
    type: 1,
    parse: function (l, n) {
      return rt(n)
        .map(function (i) {
          return i
            .filter(TA)
            .map(function (r) {
              return r.value;
            })
            .join(" ");
        })
        .map(xv);
    },
  },
  xv = function (l) {
    switch (l) {
      case "no-repeat":
        return 1;
      case "repeat-x":
      case "repeat no-repeat":
        return 2;
      case "repeat-y":
      case "no-repeat repeat":
        return 3;
      case "repeat":
      default:
        return 0;
    }
  },
  bn;
(function (l) {
  (l.AUTO = "auto"), (l.CONTAIN = "contain"), (l.COVER = "cover");
})(bn || (bn = {}));
var Kv = {
    name: "background-size",
    initialValue: "0",
    prefix: !1,
    type: 1,
    parse: function (l, n) {
      return rt(n).map(function (i) {
        return i.filter(Dv);
      });
    },
  },
  Dv = function (l) {
    return TA(l) || WA(l);
  },
  Au = function (l) {
    return {
      name: "border-" + l + "-color",
      initialValue: "transparent",
      prefix: !1,
      type: 3,
      format: "color",
    };
  },
  Ov = Au("top"),
  Iv = Au("right"),
  Lv = Au("bottom"),
  Mv = Au("left"),
  eu = function (l) {
    return {
      name: "border-radius-" + l,
      initialValue: "0 0",
      prefix: !1,
      type: 1,
      parse: function (n, i) {
        return a0(i.filter(WA));
      },
    };
  },
  Rv = eu("top-left"),
  Nv = eu("top-right"),
  Gv = eu("bottom-right"),
  _v = eu("bottom-left"),
  tu = function (l) {
    return {
      name: "border-" + l + "-style",
      initialValue: "solid",
      prefix: !1,
      type: 2,
      parse: function (n, i) {
        switch (i) {
          case "none":
            return 0;
          case "dashed":
            return 2;
          case "dotted":
            return 3;
          case "double":
            return 4;
        }
        return 1;
      },
    };
  },
  Vv = tu("top"),
  Xv = tu("right"),
  zv = tu("bottom"),
  Yv = tu("left"),
  au = function (l) {
    return {
      name: "border-" + l + "-width",
      initialValue: "0",
      type: 0,
      prefix: !1,
      parse: function (n, i) {
        return jl(i) ? i.number : 0;
      },
    };
  },
  Jv = au("top"),
  Zv = au("right"),
  jv = au("bottom"),
  qv = au("left"),
  kv = {
    name: "color",
    initialValue: "transparent",
    prefix: !1,
    type: 3,
    format: "color",
  },
  Wv = {
    name: "direction",
    initialValue: "ltr",
    prefix: !1,
    type: 2,
    parse: function (l, n) {
      switch (n) {
        case "rtl":
          return 1;
        case "ltr":
        default:
          return 0;
      }
    },
  },
  Pv = {
    name: "display",
    initialValue: "inline-block",
    prefix: !1,
    type: 1,
    parse: function (l, n) {
      return n.filter(TA).reduce(function (i, r) {
        return i | $v(r.value);
      }, 0);
    },
  },
  $v = function (l) {
    switch (l) {
      case "block":
      case "-webkit-box":
        return 2;
      case "inline":
        return 4;
      case "run-in":
        return 8;
      case "flow":
        return 16;
      case "flow-root":
        return 32;
      case "table":
        return 64;
      case "flex":
      case "-webkit-flex":
        return 128;
      case "grid":
      case "-ms-grid":
        return 256;
      case "ruby":
        return 512;
      case "subgrid":
        return 1024;
      case "list-item":
        return 2048;
      case "table-row-group":
        return 4096;
      case "table-header-group":
        return 8192;
      case "table-footer-group":
        return 16384;
      case "table-row":
        return 32768;
      case "table-cell":
        return 65536;
      case "table-column-group":
        return 131072;
      case "table-column":
        return 262144;
      case "table-caption":
        return 524288;
      case "ruby-base":
        return 1048576;
      case "ruby-text":
        return 2097152;
      case "ruby-base-container":
        return 4194304;
      case "ruby-text-container":
        return 8388608;
      case "contents":
        return 16777216;
      case "inline-block":
        return 33554432;
      case "inline-list-item":
        return 67108864;
      case "inline-table":
        return 134217728;
      case "inline-flex":
        return 268435456;
      case "inline-grid":
        return 536870912;
    }
    return 0;
  },
  AF = {
    name: "float",
    initialValue: "none",
    prefix: !1,
    type: 2,
    parse: function (l, n) {
      switch (n) {
        case "left":
          return 1;
        case "right":
          return 2;
        case "inline-start":
          return 3;
        case "inline-end":
          return 4;
      }
      return 0;
    },
  },
  eF = {
    name: "letter-spacing",
    initialValue: "0",
    prefix: !1,
    type: 0,
    parse: function (l, n) {
      return n.type === 20 && n.value === "normal"
        ? 0
        : n.type === 17 || n.type === 15
        ? n.number
        : 0;
    },
  },
  Vi;
(function (l) {
  (l.NORMAL = "normal"), (l.STRICT = "strict");
})(Vi || (Vi = {}));
var tF = {
    name: "line-break",
    initialValue: "normal",
    prefix: !1,
    type: 2,
    parse: function (l, n) {
      switch (n) {
        case "strict":
          return Vi.STRICT;
        case "normal":
        default:
          return Vi.NORMAL;
      }
    },
  },
  aF = { name: "line-height", initialValue: "normal", prefix: !1, type: 4 },
  sh = function (l, n) {
    return TA(l) && l.value === "normal"
      ? 1.2 * n
      : l.type === 17
      ? n * l.number
      : WA(l)
      ? OA(l, n)
      : n;
  },
  nF = {
    name: "list-style-image",
    initialValue: "none",
    type: 0,
    prefix: !1,
    parse: function (l, n) {
      return n.type === 20 && n.value === "none" ? null : EB.parse(l, n);
    },
  },
  lF = {
    name: "list-style-position",
    initialValue: "outside",
    prefix: !1,
    type: 2,
    parse: function (l, n) {
      switch (n) {
        case "inside":
          return 0;
        case "outside":
        default:
          return 1;
      }
    },
  },
  BB = {
    name: "list-style-type",
    initialValue: "none",
    prefix: !1,
    type: 2,
    parse: function (l, n) {
      switch (n) {
        case "disc":
          return 0;
        case "circle":
          return 1;
        case "square":
          return 2;
        case "decimal":
          return 3;
        case "cjk-decimal":
          return 4;
        case "decimal-leading-zero":
          return 5;
        case "lower-roman":
          return 6;
        case "upper-roman":
          return 7;
        case "lower-greek":
          return 8;
        case "lower-alpha":
          return 9;
        case "upper-alpha":
          return 10;
        case "arabic-indic":
          return 11;
        case "armenian":
          return 12;
        case "bengali":
          return 13;
        case "cambodian":
          return 14;
        case "cjk-earthly-branch":
          return 15;
        case "cjk-heavenly-stem":
          return 16;
        case "cjk-ideographic":
          return 17;
        case "devanagari":
          return 18;
        case "ethiopic-numeric":
          return 19;
        case "georgian":
          return 20;
        case "gujarati":
          return 21;
        case "gurmukhi":
          return 22;
        case "hebrew":
          return 22;
        case "hiragana":
          return 23;
        case "hiragana-iroha":
          return 24;
        case "japanese-formal":
          return 25;
        case "japanese-informal":
          return 26;
        case "kannada":
          return 27;
        case "katakana":
          return 28;
        case "katakana-iroha":
          return 29;
        case "khmer":
          return 30;
        case "korean-hangul-formal":
          return 31;
        case "korean-hanja-formal":
          return 32;
        case "korean-hanja-informal":
          return 33;
        case "lao":
          return 34;
        case "lower-armenian":
          return 35;
        case "malayalam":
          return 36;
        case "mongolian":
          return 37;
        case "myanmar":
          return 38;
        case "oriya":
          return 39;
        case "persian":
          return 40;
        case "simp-chinese-formal":
          return 41;
        case "simp-chinese-informal":
          return 42;
        case "tamil":
          return 43;
        case "telugu":
          return 44;
        case "thai":
          return 45;
        case "tibetan":
          return 46;
        case "trad-chinese-formal":
          return 47;
        case "trad-chinese-informal":
          return 48;
        case "upper-armenian":
          return 49;
        case "disclosure-open":
          return 50;
        case "disclosure-closed":
          return 51;
        case "none":
        default:
          return -1;
      }
    },
  },
  nu = function (l) {
    return { name: "margin-" + l, initialValue: "0", prefix: !1, type: 4 };
  },
  rF = nu("top"),
  iF = nu("right"),
  uF = nu("bottom"),
  sF = nu("left"),
  cF = {
    name: "overflow",
    initialValue: "visible",
    prefix: !1,
    type: 1,
    parse: function (l, n) {
      return n.filter(TA).map(function (i) {
        switch (i.value) {
          case "hidden":
            return 1;
          case "scroll":
            return 2;
          case "clip":
            return 3;
          case "auto":
            return 4;
          case "visible":
          default:
            return 0;
        }
      });
    },
  },
  BF = {
    name: "overflow-wrap",
    initialValue: "normal",
    prefix: !1,
    type: 2,
    parse: function (l, n) {
      switch (n) {
        case "break-word":
          return "break-word";
        case "normal":
        default:
          return "normal";
      }
    },
  },
  lu = function (l) {
    return {
      name: "padding-" + l,
      initialValue: "0",
      prefix: !1,
      type: 3,
      format: "length-percentage",
    };
  },
  fF = lu("top"),
  oF = lu("right"),
  gF = lu("bottom"),
  QF = lu("left"),
  hF = {
    name: "text-align",
    initialValue: "left",
    prefix: !1,
    type: 2,
    parse: function (l, n) {
      switch (n) {
        case "right":
          return 2;
        case "center":
        case "justify":
          return 1;
        case "left":
        default:
          return 0;
      }
    },
  },
  wF = {
    name: "position",
    initialValue: "static",
    prefix: !1,
    type: 2,
    parse: function (l, n) {
      switch (n) {
        case "relative":
          return 1;
        case "absolute":
          return 2;
        case "fixed":
          return 3;
        case "sticky":
          return 4;
      }
      return 0;
    },
  },
  CF = {
    name: "text-shadow",
    initialValue: "none",
    type: 1,
    prefix: !1,
    parse: function (l, n) {
      return n.length === 1 && cB(n[0], "none")
        ? []
        : rt(n).map(function (i) {
            for (
              var r = {
                  color: bt.TRANSPARENT,
                  offsetX: se,
                  offsetY: se,
                  blur: se,
                },
                c = 0,
                B = 0;
              B < i.length;
              B++
            ) {
              var o = i[B];
              ca(o)
                ? (c === 0
                    ? (r.offsetX = o)
                    : c === 1
                    ? (r.offsetY = o)
                    : (r.blur = o),
                  c++)
                : (r.color = ua.parse(l, o));
            }
            return r;
          });
    },
  },
  UF = {
    name: "text-transform",
    initialValue: "none",
    prefix: !1,
    type: 2,
    parse: function (l, n) {
      switch (n) {
        case "uppercase":
          return 2;
        case "lowercase":
          return 1;
        case "capitalize":
          return 3;
      }
      return 0;
    },
  },
  dF = {
    name: "transform",
    initialValue: "none",
    prefix: !0,
    type: 0,
    parse: function (l, n) {
      if (n.type === 20 && n.value === "none") return null;
      if (n.type === 18) {
        var i = EF[n.name];
        if (typeof i > "u")
          throw new Error(
            'Attempting to parse an unsupported transform function "' +
              n.name +
              '"'
          );
        return i(n.values);
      }
      return null;
    },
  },
  vF = function (l) {
    var n = l
      .filter(function (i) {
        return i.type === 17;
      })
      .map(function (i) {
        return i.number;
      });
    return n.length === 6 ? n : null;
  },
  FF = function (l) {
    var n = l
        .filter(function (g) {
          return g.type === 17;
        })
        .map(function (g) {
          return g.number;
        }),
      i = n[0],
      r = n[1];
    n[2], n[3];
    var c = n[4],
      B = n[5];
    n[6], n[7], n[8], n[9], n[10], n[11];
    var o = n[12],
      h = n[13];
    return n[14], n[15], n.length === 16 ? [i, r, c, B, o, h] : null;
  },
  EF = { matrix: vF, matrix3d: FF },
  ch = { type: 16, number: 50, flags: Zl },
  yF = [ch, ch],
  mF = {
    name: "transform-origin",
    initialValue: "50% 50%",
    prefix: !0,
    type: 1,
    parse: function (l, n) {
      var i = n.filter(WA);
      return i.length !== 2 ? yF : [i[0], i[1]];
    },
  },
  HF = {
    name: "visible",
    initialValue: "none",
    prefix: !1,
    type: 2,
    parse: function (l, n) {
      switch (n) {
        case "hidden":
          return 1;
        case "collapse":
          return 2;
        case "visible":
        default:
          return 0;
      }
    },
  },
  _l;
(function (l) {
  (l.NORMAL = "normal"), (l.BREAK_ALL = "break-all"), (l.KEEP_ALL = "keep-all");
})(_l || (_l = {}));
var pF = {
    name: "word-break",
    initialValue: "normal",
    prefix: !1,
    type: 2,
    parse: function (l, n) {
      switch (n) {
        case "break-all":
          return _l.BREAK_ALL;
        case "keep-all":
          return _l.KEEP_ALL;
        case "normal":
        default:
          return _l.NORMAL;
      }
    },
  },
  SF = {
    name: "z-index",
    initialValue: "auto",
    prefix: !1,
    type: 0,
    parse: function (l, n) {
      if (n.type === 20) return { auto: !0, order: 0 };
      if (xn(n)) return { auto: !1, order: n.number };
      throw new Error("Invalid z-index number parsed");
    },
  },
  U0 = {
    name: "time",
    parse: function (l, n) {
      if (n.type === 15)
        switch (n.unit.toLowerCase()) {
          case "s":
            return 1e3 * n.number;
          case "ms":
            return n.number;
        }
      throw new Error("Unsupported time type");
    },
  },
  bF = {
    name: "opacity",
    initialValue: "1",
    type: 0,
    prefix: !1,
    parse: function (l, n) {
      return xn(n) ? n.number : 1;
    },
  },
  TF = {
    name: "text-decoration-color",
    initialValue: "transparent",
    prefix: !1,
    type: 3,
    format: "color",
  },
  xF = {
    name: "text-decoration-line",
    initialValue: "none",
    prefix: !1,
    type: 1,
    parse: function (l, n) {
      return n
        .filter(TA)
        .map(function (i) {
          switch (i.value) {
            case "underline":
              return 1;
            case "overline":
              return 2;
            case "line-through":
              return 3;
            case "none":
              return 4;
          }
          return 0;
        })
        .filter(function (i) {
          return i !== 0;
        });
    },
  },
  KF = {
    name: "font-family",
    initialValue: "",
    prefix: !1,
    type: 1,
    parse: function (l, n) {
      var i = [],
        r = [];
      return (
        n.forEach(function (c) {
          switch (c.type) {
            case 20:
            case 0:
              i.push(c.value);
              break;
            case 17:
              i.push(c.number.toString());
              break;
            case 4:
              r.push(i.join(" ")), (i.length = 0);
              break;
          }
        }),
        i.length && r.push(i.join(" ")),
        r.map(function (c) {
          return c.indexOf(" ") === -1 ? c : "'" + c + "'";
        })
      );
    },
  },
  DF = {
    name: "font-size",
    initialValue: "0",
    prefix: !1,
    type: 3,
    format: "length",
  },
  OF = {
    name: "font-weight",
    initialValue: "normal",
    type: 0,
    prefix: !1,
    parse: function (l, n) {
      if (xn(n)) return n.number;
      if (TA(n))
        switch (n.value) {
          case "bold":
            return 700;
          case "normal":
          default:
            return 400;
        }
      return 400;
    },
  },
  IF = {
    name: "font-variant",
    initialValue: "none",
    type: 1,
    prefix: !1,
    parse: function (l, n) {
      return n.filter(TA).map(function (i) {
        return i.value;
      });
    },
  },
  LF = {
    name: "font-style",
    initialValue: "normal",
    prefix: !1,
    type: 2,
    parse: function (l, n) {
      switch (n) {
        case "oblique":
          return "oblique";
        case "italic":
          return "italic";
        case "normal":
        default:
          return "normal";
      }
    },
  },
  $A = function (l, n) {
    return (l & n) !== 0;
  },
  MF = {
    name: "content",
    initialValue: "none",
    type: 1,
    prefix: !1,
    parse: function (l, n) {
      if (n.length === 0) return [];
      var i = n[0];
      return i.type === 20 && i.value === "none" ? [] : n;
    },
  },
  RF = {
    name: "counter-increment",
    initialValue: "none",
    prefix: !0,
    type: 1,
    parse: function (l, n) {
      if (n.length === 0) return null;
      var i = n[0];
      if (i.type === 20 && i.value === "none") return null;
      for (var r = [], c = n.filter(t0), B = 0; B < c.length; B++) {
        var o = c[B],
          h = c[B + 1];
        if (o.type === 20) {
          var g = h && xn(h) ? h.number : 1;
          r.push({ counter: o.value, increment: g });
        }
      }
      return r;
    },
  },
  NF = {
    name: "counter-reset",
    initialValue: "none",
    prefix: !0,
    type: 1,
    parse: function (l, n) {
      if (n.length === 0) return [];
      for (var i = [], r = n.filter(t0), c = 0; c < r.length; c++) {
        var B = r[c],
          o = r[c + 1];
        if (TA(B) && B.value !== "none") {
          var h = o && xn(o) ? o.number : 0;
          i.push({ counter: B.value, reset: h });
        }
      }
      return i;
    },
  },
  GF = {
    name: "duration",
    initialValue: "0s",
    prefix: !1,
    type: 1,
    parse: function (l, n) {
      return n.filter(jl).map(function (i) {
        return U0.parse(l, i);
      });
    },
  },
  _F = {
    name: "quotes",
    initialValue: "none",
    prefix: !0,
    type: 1,
    parse: function (l, n) {
      if (n.length === 0) return null;
      var i = n[0];
      if (i.type === 20 && i.value === "none") return null;
      var r = [],
        c = n.filter(ov);
      if (c.length % 2 !== 0) return null;
      for (var B = 0; B < c.length; B += 2) {
        var o = c[B].value,
          h = c[B + 1].value;
        r.push({ open: o, close: h });
      }
      return r;
    },
  },
  Bh = function (l, n, i) {
    if (!l) return "";
    var r = l[Math.min(n, l.length - 1)];
    return r ? (i ? r.open : r.close) : "";
  },
  VF = {
    name: "box-shadow",
    initialValue: "none",
    type: 1,
    prefix: !1,
    parse: function (l, n) {
      return n.length === 1 && cB(n[0], "none")
        ? []
        : rt(n).map(function (i) {
            for (
              var r = {
                  color: 255,
                  offsetX: se,
                  offsetY: se,
                  blur: se,
                  spread: se,
                  inset: !1,
                },
                c = 0,
                B = 0;
              B < i.length;
              B++
            ) {
              var o = i[B];
              cB(o, "inset")
                ? (r.inset = !0)
                : ca(o)
                ? (c === 0
                    ? (r.offsetX = o)
                    : c === 1
                    ? (r.offsetY = o)
                    : c === 2
                    ? (r.blur = o)
                    : (r.spread = o),
                  c++)
                : (r.color = ua.parse(l, o));
            }
            return r;
          });
    },
  },
  XF = {
    name: "paint-order",
    initialValue: "normal",
    prefix: !1,
    type: 1,
    parse: function (l, n) {
      var i = [0, 1, 2],
        r = [];
      return (
        n.filter(TA).forEach(function (c) {
          switch (c.value) {
            case "stroke":
              r.push(1);
              break;
            case "fill":
              r.push(0);
              break;
            case "markers":
              r.push(2);
              break;
          }
        }),
        i.forEach(function (c) {
          r.indexOf(c) === -1 && r.push(c);
        }),
        r
      );
    },
  },
  zF = {
    name: "-webkit-text-stroke-color",
    initialValue: "currentcolor",
    prefix: !1,
    type: 3,
    format: "color",
  },
  YF = {
    name: "-webkit-text-stroke-width",
    initialValue: "0",
    type: 0,
    prefix: !1,
    parse: function (l, n) {
      return jl(n) ? n.number : 0;
    },
  },
  JF = (function () {
    function l(n, i) {
      var r, c;
      (this.animationDuration = j(n, GF, i.animationDuration)),
        (this.backgroundClip = j(n, hv, i.backgroundClip)),
        (this.backgroundColor = j(n, wv, i.backgroundColor)),
        (this.backgroundImage = j(n, pv, i.backgroundImage)),
        (this.backgroundOrigin = j(n, Sv, i.backgroundOrigin)),
        (this.backgroundPosition = j(n, bv, i.backgroundPosition)),
        (this.backgroundRepeat = j(n, Tv, i.backgroundRepeat)),
        (this.backgroundSize = j(n, Kv, i.backgroundSize)),
        (this.borderTopColor = j(n, Ov, i.borderTopColor)),
        (this.borderRightColor = j(n, Iv, i.borderRightColor)),
        (this.borderBottomColor = j(n, Lv, i.borderBottomColor)),
        (this.borderLeftColor = j(n, Mv, i.borderLeftColor)),
        (this.borderTopLeftRadius = j(n, Rv, i.borderTopLeftRadius)),
        (this.borderTopRightRadius = j(n, Nv, i.borderTopRightRadius)),
        (this.borderBottomRightRadius = j(n, Gv, i.borderBottomRightRadius)),
        (this.borderBottomLeftRadius = j(n, _v, i.borderBottomLeftRadius)),
        (this.borderTopStyle = j(n, Vv, i.borderTopStyle)),
        (this.borderRightStyle = j(n, Xv, i.borderRightStyle)),
        (this.borderBottomStyle = j(n, zv, i.borderBottomStyle)),
        (this.borderLeftStyle = j(n, Yv, i.borderLeftStyle)),
        (this.borderTopWidth = j(n, Jv, i.borderTopWidth)),
        (this.borderRightWidth = j(n, Zv, i.borderRightWidth)),
        (this.borderBottomWidth = j(n, jv, i.borderBottomWidth)),
        (this.borderLeftWidth = j(n, qv, i.borderLeftWidth)),
        (this.boxShadow = j(n, VF, i.boxShadow)),
        (this.color = j(n, kv, i.color)),
        (this.direction = j(n, Wv, i.direction)),
        (this.display = j(n, Pv, i.display)),
        (this.float = j(n, AF, i.cssFloat)),
        (this.fontFamily = j(n, KF, i.fontFamily)),
        (this.fontSize = j(n, DF, i.fontSize)),
        (this.fontStyle = j(n, LF, i.fontStyle)),
        (this.fontVariant = j(n, IF, i.fontVariant)),
        (this.fontWeight = j(n, OF, i.fontWeight)),
        (this.letterSpacing = j(n, eF, i.letterSpacing)),
        (this.lineBreak = j(n, tF, i.lineBreak)),
        (this.lineHeight = j(n, aF, i.lineHeight)),
        (this.listStyleImage = j(n, nF, i.listStyleImage)),
        (this.listStylePosition = j(n, lF, i.listStylePosition)),
        (this.listStyleType = j(n, BB, i.listStyleType)),
        (this.marginTop = j(n, rF, i.marginTop)),
        (this.marginRight = j(n, iF, i.marginRight)),
        (this.marginBottom = j(n, uF, i.marginBottom)),
        (this.marginLeft = j(n, sF, i.marginLeft)),
        (this.opacity = j(n, bF, i.opacity));
      var B = j(n, cF, i.overflow);
      (this.overflowX = B[0]),
        (this.overflowY = B[B.length > 1 ? 1 : 0]),
        (this.overflowWrap = j(n, BF, i.overflowWrap)),
        (this.paddingTop = j(n, fF, i.paddingTop)),
        (this.paddingRight = j(n, oF, i.paddingRight)),
        (this.paddingBottom = j(n, gF, i.paddingBottom)),
        (this.paddingLeft = j(n, QF, i.paddingLeft)),
        (this.paintOrder = j(n, XF, i.paintOrder)),
        (this.position = j(n, wF, i.position)),
        (this.textAlign = j(n, hF, i.textAlign)),
        (this.textDecorationColor = j(
          n,
          TF,
          (r = i.textDecorationColor) !== null && r !== void 0 ? r : i.color
        )),
        (this.textDecorationLine = j(
          n,
          xF,
          (c = i.textDecorationLine) !== null && c !== void 0
            ? c
            : i.textDecoration
        )),
        (this.textShadow = j(n, CF, i.textShadow)),
        (this.textTransform = j(n, UF, i.textTransform)),
        (this.transform = j(n, dF, i.transform)),
        (this.transformOrigin = j(n, mF, i.transformOrigin)),
        (this.visibility = j(n, HF, i.visibility)),
        (this.webkitTextStrokeColor = j(n, zF, i.webkitTextStrokeColor)),
        (this.webkitTextStrokeWidth = j(n, YF, i.webkitTextStrokeWidth)),
        (this.wordBreak = j(n, pF, i.wordBreak)),
        (this.zIndex = j(n, SF, i.zIndex));
    }
    return (
      (l.prototype.isVisible = function () {
        return this.display > 0 && this.opacity > 0 && this.visibility === 0;
      }),
      (l.prototype.isTransparent = function () {
        return sa(this.backgroundColor);
      }),
      (l.prototype.isTransformed = function () {
        return this.transform !== null;
      }),
      (l.prototype.isPositioned = function () {
        return this.position !== 0;
      }),
      (l.prototype.isPositionedWithZIndex = function () {
        return this.isPositioned() && !this.zIndex.auto;
      }),
      (l.prototype.isFloating = function () {
        return this.float !== 0;
      }),
      (l.prototype.isInlineLevel = function () {
        return (
          $A(this.display, 4) ||
          $A(this.display, 33554432) ||
          $A(this.display, 268435456) ||
          $A(this.display, 536870912) ||
          $A(this.display, 67108864) ||
          $A(this.display, 134217728)
        );
      }),
      l
    );
  })(),
  ZF = (function () {
    function l(n, i) {
      (this.content = j(n, MF, i.content)), (this.quotes = j(n, _F, i.quotes));
    }
    return l;
  })(),
  fh = (function () {
    function l(n, i) {
      (this.counterIncrement = j(n, RF, i.counterIncrement)),
        (this.counterReset = j(n, NF, i.counterReset));
    }
    return l;
  })(),
  j = function (l, n, i) {
    var r = new A0(),
      c = i !== null && typeof i < "u" ? i.toString() : n.initialValue;
    r.write(c);
    var B = new e0(r.read());
    switch (n.type) {
      case 2:
        var o = B.parseComponentValue();
        return n.parse(l, TA(o) ? o.value : n.initialValue);
      case 0:
        return n.parse(l, B.parseComponentValue());
      case 1:
        return n.parse(l, B.parseComponentValues());
      case 4:
        return B.parseComponentValue();
      case 3:
        switch (n.format) {
          case "angle":
            return Pi.parse(l, B.parseComponentValue());
          case "color":
            return ua.parse(l, B.parseComponentValue());
          case "image":
            return EB.parse(l, B.parseComponentValue());
          case "length":
            var h = B.parseComponentValue();
            return ca(h) ? h : se;
          case "length-percentage":
            var g = B.parseComponentValue();
            return WA(g) ? g : se;
          case "time":
            return U0.parse(l, B.parseComponentValue());
        }
        break;
    }
  },
  jF = "data-html2canvas-debug",
  qF = function (l) {
    var n = l.getAttribute(jF);
    switch (n) {
      case "all":
        return 1;
      case "clone":
        return 2;
      case "parse":
        return 3;
      case "render":
        return 4;
      default:
        return 0;
    }
  },
  fB = function (l, n) {
    var i = qF(l);
    return i === 1 || n === i;
  },
  it = (function () {
    function l(n, i) {
      if (
        ((this.context = n),
        (this.textNodes = []),
        (this.elements = []),
        (this.flags = 0),
        fB(i, 3))
      )
        debugger;
      (this.styles = new JF(n, window.getComputedStyle(i, null))),
        QB(i) &&
          (this.styles.animationDuration.some(function (r) {
            return r > 0;
          }) && (i.style.animationDuration = "0s"),
          this.styles.transform !== null && (i.style.transform = "none")),
        (this.bounds = ki(this.context, i)),
        fB(i, 4) && (this.flags |= 16);
    }
    return l;
  })(),
  kF =
    "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=",
  oh = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  Ml = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Ti = 0; Ti < oh.length; Ti++) Ml[oh.charCodeAt(Ti)] = Ti;
var WF = function (l) {
    var n = l.length * 0.75,
      i = l.length,
      r,
      c = 0,
      B,
      o,
      h,
      g;
    l[l.length - 1] === "=" && (n--, l[l.length - 2] === "=" && n--);
    var w =
        typeof ArrayBuffer < "u" &&
        typeof Uint8Array < "u" &&
        typeof Uint8Array.prototype.slice < "u"
          ? new ArrayBuffer(n)
          : new Array(n),
      d = Array.isArray(w) ? w : new Uint8Array(w);
    for (r = 0; r < i; r += 4)
      (B = Ml[l.charCodeAt(r)]),
        (o = Ml[l.charCodeAt(r + 1)]),
        (h = Ml[l.charCodeAt(r + 2)]),
        (g = Ml[l.charCodeAt(r + 3)]),
        (d[c++] = (B << 2) | (o >> 4)),
        (d[c++] = ((o & 15) << 4) | (h >> 2)),
        (d[c++] = ((h & 3) << 6) | (g & 63));
    return w;
  },
  PF = function (l) {
    for (var n = l.length, i = [], r = 0; r < n; r += 2)
      i.push((l[r + 1] << 8) | l[r]);
    return i;
  },
  $F = function (l) {
    for (var n = l.length, i = [], r = 0; r < n; r += 4)
      i.push((l[r + 3] << 24) | (l[r + 2] << 16) | (l[r + 1] << 8) | l[r]);
    return i;
  },
  Oa = 5,
  yB = 11,
  Rc = 2,
  AE = yB - Oa,
  d0 = 65536 >> Oa,
  eE = 1 << Oa,
  Nc = eE - 1,
  tE = 1024 >> Oa,
  aE = d0 + tE,
  nE = aE,
  lE = 32,
  rE = nE + lE,
  iE = 65536 >> yB,
  uE = 1 << AE,
  sE = uE - 1,
  gh = function (l, n, i) {
    return l.slice
      ? l.slice(n, i)
      : new Uint16Array(Array.prototype.slice.call(l, n, i));
  },
  cE = function (l, n, i) {
    return l.slice
      ? l.slice(n, i)
      : new Uint32Array(Array.prototype.slice.call(l, n, i));
  },
  BE = function (l, n) {
    var i = WF(l),
      r = Array.isArray(i) ? $F(i) : new Uint32Array(i),
      c = Array.isArray(i) ? PF(i) : new Uint16Array(i),
      B = 24,
      o = gh(c, B / 2, r[4] / 2),
      h = r[5] === 2 ? gh(c, (B + r[4]) / 2) : cE(r, Math.ceil((B + r[4]) / 4));
    return new fE(r[0], r[1], r[2], r[3], o, h);
  },
  fE = (function () {
    function l(n, i, r, c, B, o) {
      (this.initialValue = n),
        (this.errorValue = i),
        (this.highStart = r),
        (this.highValueIndex = c),
        (this.index = B),
        (this.data = o);
    }
    return (
      (l.prototype.get = function (n) {
        var i;
        if (n >= 0) {
          if (n < 55296 || (n > 56319 && n <= 65535))
            return (
              (i = this.index[n >> Oa]),
              (i = (i << Rc) + (n & Nc)),
              this.data[i]
            );
          if (n <= 65535)
            return (
              (i = this.index[d0 + ((n - 55296) >> Oa)]),
              (i = (i << Rc) + (n & Nc)),
              this.data[i]
            );
          if (n < this.highStart)
            return (
              (i = rE - iE + (n >> yB)),
              (i = this.index[i]),
              (i += (n >> Oa) & sE),
              (i = this.index[i]),
              (i = (i << Rc) + (n & Nc)),
              this.data[i]
            );
          if (n <= 1114111) return this.data[this.highValueIndex];
        }
        return this.errorValue;
      }),
      l
    );
  })(),
  Qh = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  oE = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var xi = 0; xi < Qh.length; xi++) oE[Qh.charCodeAt(xi)] = xi;
var gE = 1,
  Gc = 2,
  _c = 3,
  hh = 4,
  wh = 5,
  QE = 7,
  Ch = 8,
  Vc = 9,
  Xc = 10,
  Uh = 11,
  dh = 12,
  vh = 13,
  Fh = 14,
  zc = 15,
  hE = function (l) {
    for (var n = [], i = 0, r = l.length; i < r; ) {
      var c = l.charCodeAt(i++);
      if (c >= 55296 && c <= 56319 && i < r) {
        var B = l.charCodeAt(i++);
        (B & 64512) === 56320
          ? n.push(((c & 1023) << 10) + (B & 1023) + 65536)
          : (n.push(c), i--);
      } else n.push(c);
    }
    return n;
  },
  wE = function () {
    for (var l = [], n = 0; n < arguments.length; n++) l[n] = arguments[n];
    if (String.fromCodePoint) return String.fromCodePoint.apply(String, l);
    var i = l.length;
    if (!i) return "";
    for (var r = [], c = -1, B = ""; ++c < i; ) {
      var o = l[c];
      o <= 65535
        ? r.push(o)
        : ((o -= 65536), r.push((o >> 10) + 55296, (o % 1024) + 56320)),
        (c + 1 === i || r.length > 16384) &&
          ((B += String.fromCharCode.apply(String, r)), (r.length = 0));
    }
    return B;
  },
  CE = BE(kF),
  Je = "×",
  Yc = "÷",
  UE = function (l) {
    return CE.get(l);
  },
  dE = function (l, n, i) {
    var r = i - 2,
      c = n[r],
      B = n[i - 1],
      o = n[i];
    if (B === Gc && o === _c) return Je;
    if (B === Gc || B === _c || B === hh || o === Gc || o === _c || o === hh)
      return Yc;
    if (
      (B === Ch && [Ch, Vc, Uh, dh].indexOf(o) !== -1) ||
      ((B === Uh || B === Vc) && (o === Vc || o === Xc)) ||
      ((B === dh || B === Xc) && o === Xc) ||
      o === vh ||
      o === wh ||
      o === QE ||
      B === gE
    )
      return Je;
    if (B === vh && o === Fh) {
      for (; c === wh; ) c = n[--r];
      if (c === Fh) return Je;
    }
    if (B === zc && o === zc) {
      for (var h = 0; c === zc; ) h++, (c = n[--r]);
      if (h % 2 === 0) return Je;
    }
    return Yc;
  },
  vE = function (l) {
    var n = hE(l),
      i = n.length,
      r = 0,
      c = 0,
      B = n.map(UE);
    return {
      next: function () {
        if (r >= i) return { done: !0, value: null };
        for (var o = Je; r < i && (o = dE(n, B, ++r)) === Je; );
        if (o !== Je || r === i) {
          var h = wE.apply(null, n.slice(c, r));
          return (c = r), { value: h, done: !1 };
        }
        return { done: !0, value: null };
      },
    };
  },
  FE = function (l) {
    for (var n = vE(l), i = [], r; !(r = n.next()).done; )
      r.value && i.push(r.value.slice());
    return i;
  },
  EE = function (l) {
    var n = 123;
    if (l.createRange) {
      var i = l.createRange();
      if (i.getBoundingClientRect) {
        var r = l.createElement("boundtest");
        (r.style.height = n + "px"),
          (r.style.display = "block"),
          l.body.appendChild(r),
          i.selectNode(r);
        var c = i.getBoundingClientRect(),
          B = Math.round(c.height);
        if ((l.body.removeChild(r), B === n)) return !0;
      }
    }
    return !1;
  },
  yE = function (l) {
    var n = l.createElement("boundtest");
    (n.style.width = "50px"),
      (n.style.display = "block"),
      (n.style.fontSize = "12px"),
      (n.style.letterSpacing = "0px"),
      (n.style.wordSpacing = "0px"),
      l.body.appendChild(n);
    var i = l.createRange();
    n.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
    var r = n.firstChild,
      c = Wi(r.data).map(function (g) {
        return YA(g);
      }),
      B = 0,
      o = {},
      h = c.every(function (g, w) {
        i.setStart(r, B), i.setEnd(r, B + g.length);
        var d = i.getBoundingClientRect();
        B += g.length;
        var U = d.x > o.x || d.y > o.y;
        return (o = d), w === 0 ? !0 : U;
      });
    return l.body.removeChild(n), h;
  },
  mE = function () {
    return typeof new Image().crossOrigin < "u";
  },
  HE = function () {
    return typeof new XMLHttpRequest().responseType == "string";
  },
  pE = function (l) {
    var n = new Image(),
      i = l.createElement("canvas"),
      r = i.getContext("2d");
    if (!r) return !1;
    n.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
    try {
      r.drawImage(n, 0, 0), i.toDataURL();
    } catch {
      return !1;
    }
    return !0;
  },
  Eh = function (l) {
    return l[0] === 0 && l[1] === 255 && l[2] === 0 && l[3] === 255;
  },
  SE = function (l) {
    var n = l.createElement("canvas"),
      i = 100;
    (n.width = i), (n.height = i);
    var r = n.getContext("2d");
    if (!r) return Promise.reject(!1);
    (r.fillStyle = "rgb(0, 255, 0)"), r.fillRect(0, 0, i, i);
    var c = new Image(),
      B = n.toDataURL();
    c.src = B;
    var o = oB(i, i, 0, 0, c);
    return (
      (r.fillStyle = "red"),
      r.fillRect(0, 0, i, i),
      yh(o)
        .then(function (h) {
          r.drawImage(h, 0, 0);
          var g = r.getImageData(0, 0, i, i).data;
          (r.fillStyle = "red"), r.fillRect(0, 0, i, i);
          var w = l.createElement("div");
          return (
            (w.style.backgroundImage = "url(" + B + ")"),
            (w.style.height = i + "px"),
            Eh(g) ? yh(oB(i, i, 0, 0, w)) : Promise.reject(!1)
          );
        })
        .then(function (h) {
          return r.drawImage(h, 0, 0), Eh(r.getImageData(0, 0, i, i).data);
        })
        .catch(function () {
          return !1;
        })
    );
  },
  oB = function (l, n, i, r, c) {
    var B = "http://www.w3.org/2000/svg",
      o = document.createElementNS(B, "svg"),
      h = document.createElementNS(B, "foreignObject");
    return (
      o.setAttributeNS(null, "width", l.toString()),
      o.setAttributeNS(null, "height", n.toString()),
      h.setAttributeNS(null, "width", "100%"),
      h.setAttributeNS(null, "height", "100%"),
      h.setAttributeNS(null, "x", i.toString()),
      h.setAttributeNS(null, "y", r.toString()),
      h.setAttributeNS(null, "externalResourcesRequired", "true"),
      o.appendChild(h),
      h.appendChild(c),
      o
    );
  },
  yh = function (l) {
    return new Promise(function (n, i) {
      var r = new Image();
      (r.onload = function () {
        return n(r);
      }),
        (r.onerror = i),
        (r.src =
          "data:image/svg+xml;charset=utf-8," +
          encodeURIComponent(new XMLSerializer().serializeToString(l)));
    });
  },
  ue = {
    get SUPPORT_RANGE_BOUNDS() {
      var l = EE(document);
      return Object.defineProperty(ue, "SUPPORT_RANGE_BOUNDS", { value: l }), l;
    },
    get SUPPORT_WORD_BREAKING() {
      var l = ue.SUPPORT_RANGE_BOUNDS && yE(document);
      return (
        Object.defineProperty(ue, "SUPPORT_WORD_BREAKING", { value: l }), l
      );
    },
    get SUPPORT_SVG_DRAWING() {
      var l = pE(document);
      return Object.defineProperty(ue, "SUPPORT_SVG_DRAWING", { value: l }), l;
    },
    get SUPPORT_FOREIGNOBJECT_DRAWING() {
      var l =
        typeof Array.from == "function" && typeof window.fetch == "function"
          ? SE(document)
          : Promise.resolve(!1);
      return (
        Object.defineProperty(ue, "SUPPORT_FOREIGNOBJECT_DRAWING", {
          value: l,
        }),
        l
      );
    },
    get SUPPORT_CORS_IMAGES() {
      var l = mE();
      return Object.defineProperty(ue, "SUPPORT_CORS_IMAGES", { value: l }), l;
    },
    get SUPPORT_RESPONSE_TYPE() {
      var l = HE();
      return (
        Object.defineProperty(ue, "SUPPORT_RESPONSE_TYPE", { value: l }), l
      );
    },
    get SUPPORT_CORS_XHR() {
      var l = "withCredentials" in new XMLHttpRequest();
      return Object.defineProperty(ue, "SUPPORT_CORS_XHR", { value: l }), l;
    },
    get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
      var l = !!(typeof Intl < "u" && Intl.Segmenter);
      return (
        Object.defineProperty(ue, "SUPPORT_NATIVE_TEXT_SEGMENTATION", {
          value: l,
        }),
        l
      );
    },
  },
  Vl = (function () {
    function l(n, i) {
      (this.text = n), (this.bounds = i);
    }
    return l;
  })(),
  bE = function (l, n, i, r) {
    var c = KE(n, i),
      B = [],
      o = 0;
    return (
      c.forEach(function (h) {
        if (i.textDecorationLine.length || h.trim().length > 0)
          if (ue.SUPPORT_RANGE_BOUNDS) {
            var g = mh(r, o, h.length).getClientRects();
            if (g.length > 1) {
              var w = mB(h),
                d = 0;
              w.forEach(function (y) {
                B.push(
                  new Vl(
                    y,
                    Tt.fromDOMRectList(
                      l,
                      mh(r, d + o, y.length).getClientRects()
                    )
                  )
                ),
                  (d += y.length);
              });
            } else B.push(new Vl(h, Tt.fromDOMRectList(l, g)));
          } else {
            var U = r.splitText(h.length);
            B.push(new Vl(h, TE(l, r))), (r = U);
          }
        else ue.SUPPORT_RANGE_BOUNDS || (r = r.splitText(h.length));
        o += h.length;
      }),
      B
    );
  },
  TE = function (l, n) {
    var i = n.ownerDocument;
    if (i) {
      var r = i.createElement("html2canvaswrapper");
      r.appendChild(n.cloneNode(!0));
      var c = n.parentNode;
      if (c) {
        c.replaceChild(r, n);
        var B = ki(l, r);
        return r.firstChild && c.replaceChild(r.firstChild, r), B;
      }
    }
    return Tt.EMPTY;
  },
  mh = function (l, n, i) {
    var r = l.ownerDocument;
    if (!r) throw new Error("Node has no owner document");
    var c = r.createRange();
    return c.setStart(l, n), c.setEnd(l, n + i), c;
  },
  mB = function (l) {
    if (ue.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
      var n = new Intl.Segmenter(void 0, { granularity: "grapheme" });
      return Array.from(n.segment(l)).map(function (i) {
        return i.segment;
      });
    }
    return FE(l);
  },
  xE = function (l, n) {
    if (ue.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
      var i = new Intl.Segmenter(void 0, { granularity: "word" });
      return Array.from(i.segment(l)).map(function (r) {
        return r.segment;
      });
    }
    return OE(l, n);
  },
  KE = function (l, n) {
    return n.letterSpacing !== 0 ? mB(l) : xE(l, n);
  },
  DE = [32, 160, 4961, 65792, 65793, 4153, 4241],
  OE = function (l, n) {
    for (
      var i = id(l, {
          lineBreak: n.lineBreak,
          wordBreak:
            n.overflowWrap === "break-word" ? "break-word" : n.wordBreak,
        }),
        r = [],
        c,
        B = function () {
          if (c.value) {
            var o = c.value.slice(),
              h = Wi(o),
              g = "";
            h.forEach(function (w) {
              DE.indexOf(w) === -1
                ? (g += YA(w))
                : (g.length && r.push(g), r.push(YA(w)), (g = ""));
            }),
              g.length && r.push(g);
          }
        };
      !(c = i.next()).done;

    )
      B();
    return r;
  },
  IE = (function () {
    function l(n, i, r) {
      (this.text = LE(i.data, r.textTransform)),
        (this.textBounds = bE(n, this.text, r, i));
    }
    return l;
  })(),
  LE = function (l, n) {
    switch (n) {
      case 1:
        return l.toLowerCase();
      case 3:
        return l.replace(ME, RE);
      case 2:
        return l.toUpperCase();
      default:
        return l;
    }
  },
  ME = /(^|\s|:|-|\(|\))([a-z])/g,
  RE = function (l, n, i) {
    return l.length > 0 ? n + i.toUpperCase() : l;
  },
  v0 = (function (l) {
    At(n, l);
    function n(i, r) {
      var c = l.call(this, i, r) || this;
      return (
        (c.src = r.currentSrc || r.src),
        (c.intrinsicWidth = r.naturalWidth),
        (c.intrinsicHeight = r.naturalHeight),
        c.context.cache.addImage(c.src),
        c
      );
    }
    return n;
  })(it),
  F0 = (function (l) {
    At(n, l);
    function n(i, r) {
      var c = l.call(this, i, r) || this;
      return (
        (c.canvas = r),
        (c.intrinsicWidth = r.width),
        (c.intrinsicHeight = r.height),
        c
      );
    }
    return n;
  })(it),
  E0 = (function (l) {
    At(n, l);
    function n(i, r) {
      var c = l.call(this, i, r) || this,
        B = new XMLSerializer(),
        o = ki(i, r);
      return (
        r.setAttribute("width", o.width + "px"),
        r.setAttribute("height", o.height + "px"),
        (c.svg =
          "data:image/svg+xml," + encodeURIComponent(B.serializeToString(r))),
        (c.intrinsicWidth = r.width.baseVal.value),
        (c.intrinsicHeight = r.height.baseVal.value),
        c.context.cache.addImage(c.svg),
        c
      );
    }
    return n;
  })(it),
  y0 = (function (l) {
    At(n, l);
    function n(i, r) {
      var c = l.call(this, i, r) || this;
      return (c.value = r.value), c;
    }
    return n;
  })(it),
  gB = (function (l) {
    At(n, l);
    function n(i, r) {
      var c = l.call(this, i, r) || this;
      return (
        (c.start = r.start),
        (c.reversed = typeof r.reversed == "boolean" && r.reversed === !0),
        c
      );
    }
    return n;
  })(it),
  NE = [{ type: 15, flags: 0, unit: "px", number: 3 }],
  GE = [{ type: 16, flags: 0, number: 50 }],
  _E = function (l) {
    return l.width > l.height
      ? new Tt(l.left + (l.width - l.height) / 2, l.top, l.height, l.height)
      : l.width < l.height
      ? new Tt(l.left, l.top + (l.height - l.width) / 2, l.width, l.width)
      : l;
  },
  VE = function (l) {
    var n = l.type === XE ? new Array(l.value.length + 1).join("•") : l.value;
    return n.length === 0 ? l.placeholder || "" : n;
  },
  Xi = "checkbox",
  zi = "radio",
  XE = "password",
  Hh = 707406591,
  HB = (function (l) {
    At(n, l);
    function n(i, r) {
      var c = l.call(this, i, r) || this;
      switch (
        ((c.type = r.type.toLowerCase()),
        (c.checked = r.checked),
        (c.value = VE(r)),
        (c.type === Xi || c.type === zi) &&
          ((c.styles.backgroundColor = 3739148031),
          (c.styles.borderTopColor =
            c.styles.borderRightColor =
            c.styles.borderBottomColor =
            c.styles.borderLeftColor =
              2779096575),
          (c.styles.borderTopWidth =
            c.styles.borderRightWidth =
            c.styles.borderBottomWidth =
            c.styles.borderLeftWidth =
              1),
          (c.styles.borderTopStyle =
            c.styles.borderRightStyle =
            c.styles.borderBottomStyle =
            c.styles.borderLeftStyle =
              1),
          (c.styles.backgroundClip = [0]),
          (c.styles.backgroundOrigin = [0]),
          (c.bounds = _E(c.bounds))),
        c.type)
      ) {
        case Xi:
          c.styles.borderTopRightRadius =
            c.styles.borderTopLeftRadius =
            c.styles.borderBottomRightRadius =
            c.styles.borderBottomLeftRadius =
              NE;
          break;
        case zi:
          c.styles.borderTopRightRadius =
            c.styles.borderTopLeftRadius =
            c.styles.borderBottomRightRadius =
            c.styles.borderBottomLeftRadius =
              GE;
          break;
      }
      return c;
    }
    return n;
  })(it),
  m0 = (function (l) {
    At(n, l);
    function n(i, r) {
      var c = l.call(this, i, r) || this,
        B = r.options[r.selectedIndex || 0];
      return (c.value = (B && B.text) || ""), c;
    }
    return n;
  })(it),
  H0 = (function (l) {
    At(n, l);
    function n(i, r) {
      var c = l.call(this, i, r) || this;
      return (c.value = r.value), c;
    }
    return n;
  })(it),
  p0 = (function (l) {
    At(n, l);
    function n(i, r) {
      var c = l.call(this, i, r) || this;
      (c.src = r.src),
        (c.width = parseInt(r.width, 10) || 0),
        (c.height = parseInt(r.height, 10) || 0),
        (c.backgroundColor = c.styles.backgroundColor);
      try {
        if (
          r.contentWindow &&
          r.contentWindow.document &&
          r.contentWindow.document.documentElement
        ) {
          c.tree = b0(i, r.contentWindow.document.documentElement);
          var B = r.contentWindow.document.documentElement
              ? Gl(
                  i,
                  getComputedStyle(r.contentWindow.document.documentElement)
                    .backgroundColor
                )
              : bt.TRANSPARENT,
            o = r.contentWindow.document.body
              ? Gl(
                  i,
                  getComputedStyle(r.contentWindow.document.body)
                    .backgroundColor
                )
              : bt.TRANSPARENT;
          c.backgroundColor = sa(B)
            ? sa(o)
              ? c.styles.backgroundColor
              : o
            : B;
        }
      } catch {}
      return c;
    }
    return n;
  })(it),
  zE = ["OL", "UL", "MENU"],
  Ri = function (l, n, i, r) {
    for (var c = n.firstChild, B = void 0; c; c = B)
      if (((B = c.nextSibling), T0(c) && c.data.trim().length > 0))
        i.textNodes.push(new IE(l, c, i.styles));
      else if (Sn(c))
        if (O0(c) && c.assignedNodes)
          c.assignedNodes().forEach(function (h) {
            return Ri(l, h, i, r);
          });
        else {
          var o = S0(l, c);
          o.styles.isVisible() &&
            (YE(c, o, r) ? (o.flags |= 4) : JE(o.styles) && (o.flags |= 2),
            zE.indexOf(c.tagName) !== -1 && (o.flags |= 8),
            i.elements.push(o),
            c.slot,
            c.shadowRoot
              ? Ri(l, c.shadowRoot, o, r)
              : !Yi(c) && !x0(c) && !Ji(c) && Ri(l, c, o, r));
        }
  },
  S0 = function (l, n) {
    return hB(n)
      ? new v0(l, n)
      : K0(n)
      ? new F0(l, n)
      : x0(n)
      ? new E0(l, n)
      : ZE(n)
      ? new y0(l, n)
      : jE(n)
      ? new gB(l, n)
      : qE(n)
      ? new HB(l, n)
      : Ji(n)
      ? new m0(l, n)
      : Yi(n)
      ? new H0(l, n)
      : D0(n)
      ? new p0(l, n)
      : new it(l, n);
  },
  b0 = function (l, n) {
    var i = S0(l, n);
    return (i.flags |= 4), Ri(l, n, i, i), i;
  },
  YE = function (l, n, i) {
    return (
      n.styles.isPositionedWithZIndex() ||
      n.styles.opacity < 1 ||
      n.styles.isTransformed() ||
      (pB(l) && i.styles.isTransparent())
    );
  },
  JE = function (l) {
    return l.isPositioned() || l.isFloating();
  },
  T0 = function (l) {
    return l.nodeType === Node.TEXT_NODE;
  },
  Sn = function (l) {
    return l.nodeType === Node.ELEMENT_NODE;
  },
  QB = function (l) {
    return Sn(l) && typeof l.style < "u" && !Ni(l);
  },
  Ni = function (l) {
    return typeof l.className == "object";
  },
  ZE = function (l) {
    return l.tagName === "LI";
  },
  jE = function (l) {
    return l.tagName === "OL";
  },
  qE = function (l) {
    return l.tagName === "INPUT";
  },
  kE = function (l) {
    return l.tagName === "HTML";
  },
  x0 = function (l) {
    return l.tagName === "svg";
  },
  pB = function (l) {
    return l.tagName === "BODY";
  },
  K0 = function (l) {
    return l.tagName === "CANVAS";
  },
  ph = function (l) {
    return l.tagName === "VIDEO";
  },
  hB = function (l) {
    return l.tagName === "IMG";
  },
  D0 = function (l) {
    return l.tagName === "IFRAME";
  },
  Sh = function (l) {
    return l.tagName === "STYLE";
  },
  WE = function (l) {
    return l.tagName === "SCRIPT";
  },
  Yi = function (l) {
    return l.tagName === "TEXTAREA";
  },
  Ji = function (l) {
    return l.tagName === "SELECT";
  },
  O0 = function (l) {
    return l.tagName === "SLOT";
  },
  bh = function (l) {
    return l.tagName.indexOf("-") > 0;
  },
  PE = (function () {
    function l() {
      this.counters = {};
    }
    return (
      (l.prototype.getCounterValue = function (n) {
        var i = this.counters[n];
        return i && i.length ? i[i.length - 1] : 1;
      }),
      (l.prototype.getCounterValues = function (n) {
        var i = this.counters[n];
        return i || [];
      }),
      (l.prototype.pop = function (n) {
        var i = this;
        n.forEach(function (r) {
          return i.counters[r].pop();
        });
      }),
      (l.prototype.parse = function (n) {
        var i = this,
          r = n.counterIncrement,
          c = n.counterReset,
          B = !0;
        r !== null &&
          r.forEach(function (h) {
            var g = i.counters[h.counter];
            g &&
              h.increment !== 0 &&
              ((B = !1),
              g.length || g.push(1),
              (g[Math.max(0, g.length - 1)] += h.increment));
          });
        var o = [];
        return (
          B &&
            c.forEach(function (h) {
              var g = i.counters[h.counter];
              o.push(h.counter),
                g || (g = i.counters[h.counter] = []),
                g.push(h.reset);
            }),
          o
        );
      }),
      l
    );
  })(),
  Th = {
    integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
    values: [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I",
    ],
  },
  xh = {
    integers: [
      9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400,
      300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2,
      1,
    ],
    values: [
      "Ք",
      "Փ",
      "Ւ",
      "Ց",
      "Ր",
      "Տ",
      "Վ",
      "Ս",
      "Ռ",
      "Ջ",
      "Պ",
      "Չ",
      "Ո",
      "Շ",
      "Ն",
      "Յ",
      "Մ",
      "Ճ",
      "Ղ",
      "Ձ",
      "Հ",
      "Կ",
      "Ծ",
      "Խ",
      "Լ",
      "Ի",
      "Ժ",
      "Թ",
      "Ը",
      "Է",
      "Զ",
      "Ե",
      "Դ",
      "Գ",
      "Բ",
      "Ա",
    ],
  },
  $E = {
    integers: [
      1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 400, 300, 200, 100, 90,
      80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3,
      2, 1,
    ],
    values: [
      "י׳",
      "ט׳",
      "ח׳",
      "ז׳",
      "ו׳",
      "ה׳",
      "ד׳",
      "ג׳",
      "ב׳",
      "א׳",
      "ת",
      "ש",
      "ר",
      "ק",
      "צ",
      "פ",
      "ע",
      "ס",
      "נ",
      "מ",
      "ל",
      "כ",
      "יט",
      "יח",
      "יז",
      "טז",
      "טו",
      "י",
      "ט",
      "ח",
      "ז",
      "ו",
      "ה",
      "ד",
      "ג",
      "ב",
      "א",
    ],
  },
  Ay = {
    integers: [
      1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500,
      400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4,
      3, 2, 1,
    ],
    values: [
      "ჵ",
      "ჰ",
      "ჯ",
      "ჴ",
      "ხ",
      "ჭ",
      "წ",
      "ძ",
      "ც",
      "ჩ",
      "შ",
      "ყ",
      "ღ",
      "ქ",
      "ფ",
      "ჳ",
      "ტ",
      "ს",
      "რ",
      "ჟ",
      "პ",
      "ო",
      "ჲ",
      "ნ",
      "მ",
      "ლ",
      "კ",
      "ი",
      "თ",
      "ჱ",
      "ზ",
      "ვ",
      "ე",
      "დ",
      "გ",
      "ბ",
      "ა",
    ],
  },
  En = function (l, n, i, r, c, B) {
    return l < n || l > i
      ? Jl(l, c, B.length > 0)
      : r.integers.reduce(function (o, h, g) {
          for (; l >= h; ) (l -= h), (o += r.values[g]);
          return o;
        }, "") + B;
  },
  I0 = function (l, n, i, r) {
    var c = "";
    do i || l--, (c = r(l) + c), (l /= n);
    while (l * n >= n);
    return c;
  },
  zA = function (l, n, i, r, c) {
    var B = i - n + 1;
    return (
      (l < 0 ? "-" : "") +
      (I0(Math.abs(l), B, r, function (o) {
        return YA(Math.floor(o % B) + n);
      }) +
        c)
    );
  },
  Ta = function (l, n, i) {
    i === void 0 && (i = ". ");
    var r = n.length;
    return (
      I0(Math.abs(l), r, !1, function (c) {
        return n[Math.floor(c % r)];
      }) + i
    );
  },
  Hn = 1,
  ta = 2,
  aa = 4,
  Rl = 8,
  St = function (l, n, i, r, c, B) {
    if (l < -9999 || l > 9999) return Jl(l, 4, c.length > 0);
    var o = Math.abs(l),
      h = c;
    if (o === 0) return n[0] + h;
    for (var g = 0; o > 0 && g <= 4; g++) {
      var w = o % 10;
      w === 0 && $A(B, Hn) && h !== ""
        ? (h = n[w] + h)
        : w > 1 ||
          (w === 1 && g === 0) ||
          (w === 1 && g === 1 && $A(B, ta)) ||
          (w === 1 && g === 1 && $A(B, aa) && l > 100) ||
          (w === 1 && g > 1 && $A(B, Rl))
        ? (h = n[w] + (g > 0 ? i[g - 1] : "") + h)
        : w === 1 && g > 0 && (h = i[g - 1] + h),
        (o = Math.floor(o / 10));
    }
    return (l < 0 ? r : "") + h;
  },
  Kh = "十百千萬",
  Dh = "拾佰仟萬",
  Oh = "マイナス",
  Jc = "마이너스",
  Jl = function (l, n, i) {
    var r = i ? ". " : "",
      c = i ? "、" : "",
      B = i ? ", " : "",
      o = i ? " " : "";
    switch (n) {
      case 0:
        return "•" + o;
      case 1:
        return "◦" + o;
      case 2:
        return "◾" + o;
      case 5:
        var h = zA(l, 48, 57, !0, r);
        return h.length < 4 ? "0" + h : h;
      case 4:
        return Ta(l, "〇一二三四五六七八九", c);
      case 6:
        return En(l, 1, 3999, Th, 3, r).toLowerCase();
      case 7:
        return En(l, 1, 3999, Th, 3, r);
      case 8:
        return zA(l, 945, 969, !1, r);
      case 9:
        return zA(l, 97, 122, !1, r);
      case 10:
        return zA(l, 65, 90, !1, r);
      case 11:
        return zA(l, 1632, 1641, !0, r);
      case 12:
      case 49:
        return En(l, 1, 9999, xh, 3, r);
      case 35:
        return En(l, 1, 9999, xh, 3, r).toLowerCase();
      case 13:
        return zA(l, 2534, 2543, !0, r);
      case 14:
      case 30:
        return zA(l, 6112, 6121, !0, r);
      case 15:
        return Ta(l, "子丑寅卯辰巳午未申酉戌亥", c);
      case 16:
        return Ta(l, "甲乙丙丁戊己庚辛壬癸", c);
      case 17:
      case 48:
        return St(l, "零一二三四五六七八九", Kh, "負", c, ta | aa | Rl);
      case 47:
        return St(l, "零壹貳參肆伍陸柒捌玖", Dh, "負", c, Hn | ta | aa | Rl);
      case 42:
        return St(l, "零一二三四五六七八九", Kh, "负", c, ta | aa | Rl);
      case 41:
        return St(l, "零壹贰叁肆伍陆柒捌玖", Dh, "负", c, Hn | ta | aa | Rl);
      case 26:
        return St(l, "〇一二三四五六七八九", "十百千万", Oh, c, 0);
      case 25:
        return St(l, "零壱弐参四伍六七八九", "拾百千万", Oh, c, Hn | ta | aa);
      case 31:
        return St(l, "영일이삼사오육칠팔구", "십백천만", Jc, B, Hn | ta | aa);
      case 33:
        return St(l, "零一二三四五六七八九", "十百千萬", Jc, B, 0);
      case 32:
        return St(l, "零壹貳參四五六七八九", "拾百千", Jc, B, Hn | ta | aa);
      case 18:
        return zA(l, 2406, 2415, !0, r);
      case 20:
        return En(l, 1, 19999, Ay, 3, r);
      case 21:
        return zA(l, 2790, 2799, !0, r);
      case 22:
        return zA(l, 2662, 2671, !0, r);
      case 22:
        return En(l, 1, 10999, $E, 3, r);
      case 23:
        return Ta(
          l,
          "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん"
        );
      case 24:
        return Ta(
          l,
          "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす"
        );
      case 27:
        return zA(l, 3302, 3311, !0, r);
      case 28:
        return Ta(
          l,
          "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン",
          c
        );
      case 29:
        return Ta(
          l,
          "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス",
          c
        );
      case 34:
        return zA(l, 3792, 3801, !0, r);
      case 37:
        return zA(l, 6160, 6169, !0, r);
      case 38:
        return zA(l, 4160, 4169, !0, r);
      case 39:
        return zA(l, 2918, 2927, !0, r);
      case 40:
        return zA(l, 1776, 1785, !0, r);
      case 43:
        return zA(l, 3046, 3055, !0, r);
      case 44:
        return zA(l, 3174, 3183, !0, r);
      case 45:
        return zA(l, 3664, 3673, !0, r);
      case 46:
        return zA(l, 3872, 3881, !0, r);
      case 3:
      default:
        return zA(l, 48, 57, !0, r);
    }
  },
  L0 = "data-html2canvas-ignore",
  Ih = (function () {
    function l(n, i, r) {
      if (
        ((this.context = n),
        (this.options = r),
        (this.scrolledElements = []),
        (this.referenceElement = i),
        (this.counters = new PE()),
        (this.quoteDepth = 0),
        !i.ownerDocument)
      )
        throw new Error("Cloned element does not have an owner document");
      this.documentElement = this.cloneNode(
        i.ownerDocument.documentElement,
        !1
      );
    }
    return (
      (l.prototype.toIFrame = function (n, i) {
        var r = this,
          c = ey(n, i);
        if (!c.contentWindow)
          return Promise.reject("Unable to find iframe window");
        var B = n.defaultView.pageXOffset,
          o = n.defaultView.pageYOffset,
          h = c.contentWindow,
          g = h.document,
          w = ny(c).then(function () {
            return Qe(r, void 0, void 0, function () {
              var d, U;
              return Be(this, function (y) {
                switch (y.label) {
                  case 0:
                    return (
                      this.scrolledElements.forEach(uy),
                      h &&
                        (h.scrollTo(i.left, i.top),
                        /(iPad|iPhone|iPod)/g.test(navigator.userAgent) &&
                          (h.scrollY !== i.top || h.scrollX !== i.left) &&
                          (this.context.logger.warn(
                            "Unable to restore scroll position for cloned document"
                          ),
                          (this.context.windowBounds =
                            this.context.windowBounds.add(
                              h.scrollX - i.left,
                              h.scrollY - i.top,
                              0,
                              0
                            )))),
                      (d = this.options.onclone),
                      (U = this.clonedReferenceElement),
                      typeof U > "u"
                        ? [
                            2,
                            Promise.reject(
                              "Error finding the " +
                                this.referenceElement.nodeName +
                                " in the cloned document"
                            ),
                          ]
                        : g.fonts && g.fonts.ready
                        ? [4, g.fonts.ready]
                        : [3, 2]
                    );
                  case 1:
                    y.sent(), (y.label = 2);
                  case 2:
                    return /(AppleWebKit)/g.test(navigator.userAgent)
                      ? [4, ay(g)]
                      : [3, 4];
                  case 3:
                    y.sent(), (y.label = 4);
                  case 4:
                    return typeof d == "function"
                      ? [
                          2,
                          Promise.resolve()
                            .then(function () {
                              return d(g, U);
                            })
                            .then(function () {
                              return c;
                            }),
                        ]
                      : [2, c];
                }
              });
            });
          });
        return (
          g.open(),
          g.write(ry(document.doctype) + "<html></html>"),
          iy(this.referenceElement.ownerDocument, B, o),
          g.replaceChild(g.adoptNode(this.documentElement), g.documentElement),
          g.close(),
          w
        );
      }),
      (l.prototype.createElementClone = function (n) {
        if (fB(n, 2)) debugger;
        if (K0(n)) return this.createCanvasClone(n);
        if (ph(n)) return this.createVideoClone(n);
        if (Sh(n)) return this.createStyleClone(n);
        var i = n.cloneNode(!1);
        return (
          hB(i) &&
            (hB(n) &&
              n.currentSrc &&
              n.currentSrc !== n.src &&
              ((i.src = n.currentSrc), (i.srcset = "")),
            i.loading === "lazy" && (i.loading = "eager")),
          bh(i) ? this.createCustomElementClone(i) : i
        );
      }),
      (l.prototype.createCustomElementClone = function (n) {
        var i = document.createElement("html2canvascustomelement");
        return Zc(n.style, i), i;
      }),
      (l.prototype.createStyleClone = function (n) {
        try {
          var i = n.sheet;
          if (i && i.cssRules) {
            var r = [].slice.call(i.cssRules, 0).reduce(function (B, o) {
                return o && typeof o.cssText == "string" ? B + o.cssText : B;
              }, ""),
              c = n.cloneNode(!1);
            return (c.textContent = r), c;
          }
        } catch (B) {
          if (
            (this.context.logger.error("Unable to access cssRules property", B),
            B.name !== "SecurityError")
          )
            throw B;
        }
        return n.cloneNode(!1);
      }),
      (l.prototype.createCanvasClone = function (n) {
        var i;
        if (this.options.inlineImages && n.ownerDocument) {
          var r = n.ownerDocument.createElement("img");
          try {
            return (r.src = n.toDataURL()), r;
          } catch {
            this.context.logger.info(
              "Unable to inline canvas contents, canvas is tainted",
              n
            );
          }
        }
        var c = n.cloneNode(!1);
        try {
          (c.width = n.width), (c.height = n.height);
          var B = n.getContext("2d"),
            o = c.getContext("2d");
          if (o)
            if (!this.options.allowTaint && B)
              o.putImageData(B.getImageData(0, 0, n.width, n.height), 0, 0);
            else {
              var h =
                (i = n.getContext("webgl2")) !== null && i !== void 0
                  ? i
                  : n.getContext("webgl");
              if (h) {
                var g = h.getContextAttributes();
                (g == null ? void 0 : g.preserveDrawingBuffer) === !1 &&
                  this.context.logger.warn(
                    "Unable to clone WebGL context as it has preserveDrawingBuffer=false",
                    n
                  );
              }
              o.drawImage(n, 0, 0);
            }
          return c;
        } catch {
          this.context.logger.info(
            "Unable to clone canvas as it is tainted",
            n
          );
        }
        return c;
      }),
      (l.prototype.createVideoClone = function (n) {
        var i = n.ownerDocument.createElement("canvas");
        (i.width = n.offsetWidth), (i.height = n.offsetHeight);
        var r = i.getContext("2d");
        try {
          return (
            r &&
              (r.drawImage(n, 0, 0, i.width, i.height),
              this.options.allowTaint ||
                r.getImageData(0, 0, i.width, i.height)),
            i
          );
        } catch {
          this.context.logger.info("Unable to clone video as it is tainted", n);
        }
        var c = n.ownerDocument.createElement("canvas");
        return (c.width = n.offsetWidth), (c.height = n.offsetHeight), c;
      }),
      (l.prototype.appendChildNode = function (n, i, r) {
        (!Sn(i) ||
          (!WE(i) &&
            !i.hasAttribute(L0) &&
            (typeof this.options.ignoreElements != "function" ||
              !this.options.ignoreElements(i)))) &&
          (!this.options.copyStyles || !Sn(i) || !Sh(i)) &&
          n.appendChild(this.cloneNode(i, r));
      }),
      (l.prototype.cloneChildNodes = function (n, i, r) {
        for (
          var c = this,
            B = n.shadowRoot ? n.shadowRoot.firstChild : n.firstChild;
          B;
          B = B.nextSibling
        )
          if (Sn(B) && O0(B) && typeof B.assignedNodes == "function") {
            var o = B.assignedNodes();
            o.length &&
              o.forEach(function (h) {
                return c.appendChildNode(i, h, r);
              });
          } else this.appendChildNode(i, B, r);
      }),
      (l.prototype.cloneNode = function (n, i) {
        if (T0(n)) return document.createTextNode(n.data);
        if (!n.ownerDocument) return n.cloneNode(!1);
        var r = n.ownerDocument.defaultView;
        if (r && Sn(n) && (QB(n) || Ni(n))) {
          var c = this.createElementClone(n);
          c.style.transitionProperty = "none";
          var B = r.getComputedStyle(n),
            o = r.getComputedStyle(n, ":before"),
            h = r.getComputedStyle(n, ":after");
          this.referenceElement === n &&
            QB(c) &&
            (this.clonedReferenceElement = c),
            pB(c) && By(c);
          var g = this.counters.parse(new fh(this.context, B)),
            w = this.resolvePseudoContent(n, c, o, Xl.BEFORE);
          bh(n) && (i = !0),
            ph(n) || this.cloneChildNodes(n, c, i),
            w && c.insertBefore(w, c.firstChild);
          var d = this.resolvePseudoContent(n, c, h, Xl.AFTER);
          return (
            d && c.appendChild(d),
            this.counters.pop(g),
            ((B && (this.options.copyStyles || Ni(n)) && !D0(n)) || i) &&
              Zc(B, c),
            (n.scrollTop !== 0 || n.scrollLeft !== 0) &&
              this.scrolledElements.push([c, n.scrollLeft, n.scrollTop]),
            (Yi(n) || Ji(n)) && (Yi(c) || Ji(c)) && (c.value = n.value),
            c
          );
        }
        return n.cloneNode(!1);
      }),
      (l.prototype.resolvePseudoContent = function (n, i, r, c) {
        var B = this;
        if (r) {
          var o = r.content,
            h = i.ownerDocument;
          if (
            !(
              !h ||
              !o ||
              o === "none" ||
              o === "-moz-alt-content" ||
              r.display === "none"
            )
          ) {
            this.counters.parse(new fh(this.context, r));
            var g = new ZF(this.context, r),
              w = h.createElement("html2canvaspseudoelement");
            Zc(r, w),
              g.content.forEach(function (U) {
                if (U.type === 0) w.appendChild(h.createTextNode(U.value));
                else if (U.type === 22) {
                  var y = h.createElement("img");
                  (y.src = U.value), (y.style.opacity = "1"), w.appendChild(y);
                } else if (U.type === 18) {
                  if (U.name === "attr") {
                    var L = U.values.filter(TA);
                    L.length &&
                      w.appendChild(
                        h.createTextNode(n.getAttribute(L[0].value) || "")
                      );
                  } else if (U.name === "counter") {
                    var I = U.values.filter(Tn),
                      R = I[0],
                      AA = I[1];
                    if (R && TA(R)) {
                      var _ = B.counters.getCounterValue(R.value),
                        X = AA && TA(AA) ? BB.parse(B.context, AA.value) : 3;
                      w.appendChild(h.createTextNode(Jl(_, X, !1)));
                    }
                  } else if (U.name === "counters") {
                    var aA = U.values.filter(Tn),
                      R = aA[0],
                      z = aA[1],
                      AA = aA[2];
                    if (R && TA(R)) {
                      var J = B.counters.getCounterValues(R.value),
                        M = AA && TA(AA) ? BB.parse(B.context, AA.value) : 3,
                        V = z && z.type === 0 ? z.value : "",
                        eA = J.map(function (xA) {
                          return Jl(xA, M, !1);
                        }).join(V);
                      w.appendChild(h.createTextNode(eA));
                    }
                  }
                } else if (U.type === 20)
                  switch (U.value) {
                    case "open-quote":
                      w.appendChild(
                        h.createTextNode(Bh(g.quotes, B.quoteDepth++, !0))
                      );
                      break;
                    case "close-quote":
                      w.appendChild(
                        h.createTextNode(Bh(g.quotes, --B.quoteDepth, !1))
                      );
                      break;
                    default:
                      w.appendChild(h.createTextNode(U.value));
                  }
              }),
              (w.className = wB + " " + CB);
            var d = c === Xl.BEFORE ? " " + wB : " " + CB;
            return Ni(i) ? (i.className.baseValue += d) : (i.className += d), w;
          }
        }
      }),
      (l.destroy = function (n) {
        return n.parentNode ? (n.parentNode.removeChild(n), !0) : !1;
      }),
      l
    );
  })(),
  Xl;
(function (l) {
  (l[(l.BEFORE = 0)] = "BEFORE"), (l[(l.AFTER = 1)] = "AFTER");
})(Xl || (Xl = {}));
var ey = function (l, n) {
    var i = l.createElement("iframe");
    return (
      (i.className = "html2canvas-container"),
      (i.style.visibility = "hidden"),
      (i.style.position = "fixed"),
      (i.style.left = "-10000px"),
      (i.style.top = "0px"),
      (i.style.border = "0"),
      (i.width = n.width.toString()),
      (i.height = n.height.toString()),
      (i.scrolling = "no"),
      i.setAttribute(L0, "true"),
      l.body.appendChild(i),
      i
    );
  },
  ty = function (l) {
    return new Promise(function (n) {
      if (l.complete) {
        n();
        return;
      }
      if (!l.src) {
        n();
        return;
      }
      (l.onload = n), (l.onerror = n);
    });
  },
  ay = function (l) {
    return Promise.all([].slice.call(l.images, 0).map(ty));
  },
  ny = function (l) {
    return new Promise(function (n, i) {
      var r = l.contentWindow;
      if (!r) return i("No window assigned for iframe");
      var c = r.document;
      r.onload = l.onload = function () {
        r.onload = l.onload = null;
        var B = setInterval(function () {
          c.body.childNodes.length > 0 &&
            c.readyState === "complete" &&
            (clearInterval(B), n(l));
        }, 50);
      };
    });
  },
  ly = ["all", "d", "content"],
  Zc = function (l, n) {
    for (var i = l.length - 1; i >= 0; i--) {
      var r = l.item(i);
      ly.indexOf(r) === -1 && n.style.setProperty(r, l.getPropertyValue(r));
    }
    return n;
  },
  ry = function (l) {
    var n = "";
    return (
      l &&
        ((n += "<!DOCTYPE "),
        l.name && (n += l.name),
        l.internalSubset && (n += l.internalSubset),
        l.publicId && (n += '"' + l.publicId + '"'),
        l.systemId && (n += '"' + l.systemId + '"'),
        (n += ">")),
      n
    );
  },
  iy = function (l, n, i) {
    l &&
      l.defaultView &&
      (n !== l.defaultView.pageXOffset || i !== l.defaultView.pageYOffset) &&
      l.defaultView.scrollTo(n, i);
  },
  uy = function (l) {
    var n = l[0],
      i = l[1],
      r = l[2];
    (n.scrollLeft = i), (n.scrollTop = r);
  },
  sy = ":before",
  cy = ":after",
  wB = "___html2canvas___pseudoelement_before",
  CB = "___html2canvas___pseudoelement_after",
  Lh = `{
    content: "" !important;
    display: none !important;
}`,
  By = function (l) {
    fy(
      l,
      "." +
        wB +
        sy +
        Lh +
        `
         .` +
        CB +
        cy +
        Lh
    );
  },
  fy = function (l, n) {
    var i = l.ownerDocument;
    if (i) {
      var r = i.createElement("style");
      (r.textContent = n), l.appendChild(r);
    }
  },
  M0 = (function () {
    function l() {}
    return (
      (l.getOrigin = function (n) {
        var i = l._link;
        return i
          ? ((i.href = n), (i.href = i.href), i.protocol + i.hostname + i.port)
          : "about:blank";
      }),
      (l.isSameOrigin = function (n) {
        return l.getOrigin(n) === l._origin;
      }),
      (l.setContext = function (n) {
        (l._link = n.document.createElement("a")),
          (l._origin = l.getOrigin(n.location.href));
      }),
      (l._origin = "about:blank"),
      l
    );
  })(),
  oy = (function () {
    function l(n, i) {
      (this.context = n), (this._options = i), (this._cache = {});
    }
    return (
      (l.prototype.addImage = function (n) {
        var i = Promise.resolve();
        return (
          this.has(n) ||
            ((qc(n) || wy(n)) &&
              (this._cache[n] = this.loadImage(n)).catch(function () {})),
          i
        );
      }),
      (l.prototype.match = function (n) {
        return this._cache[n];
      }),
      (l.prototype.loadImage = function (n) {
        return Qe(this, void 0, void 0, function () {
          var i,
            r,
            c,
            B,
            o = this;
          return Be(this, function (h) {
            switch (h.label) {
              case 0:
                return (
                  (i = M0.isSameOrigin(n)),
                  (r =
                    !jc(n) &&
                    this._options.useCORS === !0 &&
                    ue.SUPPORT_CORS_IMAGES &&
                    !i),
                  (c =
                    !jc(n) &&
                    !i &&
                    !qc(n) &&
                    typeof this._options.proxy == "string" &&
                    ue.SUPPORT_CORS_XHR &&
                    !r),
                  !i &&
                  this._options.allowTaint === !1 &&
                  !jc(n) &&
                  !qc(n) &&
                  !c &&
                  !r
                    ? [2]
                    : ((B = n), c ? [4, this.proxy(B)] : [3, 2])
                );
              case 1:
                (B = h.sent()), (h.label = 2);
              case 2:
                return (
                  this.context.logger.debug(
                    "Added image " + n.substring(0, 256)
                  ),
                  [
                    4,
                    new Promise(function (g, w) {
                      var d = new Image();
                      (d.onload = function () {
                        return g(d);
                      }),
                        (d.onerror = w),
                        (Cy(B) || r) && (d.crossOrigin = "anonymous"),
                        (d.src = B),
                        d.complete === !0 &&
                          setTimeout(function () {
                            return g(d);
                          }, 500),
                        o._options.imageTimeout > 0 &&
                          setTimeout(function () {
                            return w(
                              "Timed out (" +
                                o._options.imageTimeout +
                                "ms) loading image"
                            );
                          }, o._options.imageTimeout);
                    }),
                  ]
                );
              case 3:
                return [2, h.sent()];
            }
          });
        });
      }),
      (l.prototype.has = function (n) {
        return typeof this._cache[n] < "u";
      }),
      (l.prototype.keys = function () {
        return Promise.resolve(Object.keys(this._cache));
      }),
      (l.prototype.proxy = function (n) {
        var i = this,
          r = this._options.proxy;
        if (!r) throw new Error("No proxy defined");
        var c = n.substring(0, 256);
        return new Promise(function (B, o) {
          var h = ue.SUPPORT_RESPONSE_TYPE ? "blob" : "text",
            g = new XMLHttpRequest();
          (g.onload = function () {
            if (g.status === 200)
              if (h === "text") B(g.response);
              else {
                var U = new FileReader();
                U.addEventListener(
                  "load",
                  function () {
                    return B(U.result);
                  },
                  !1
                ),
                  U.addEventListener(
                    "error",
                    function (y) {
                      return o(y);
                    },
                    !1
                  ),
                  U.readAsDataURL(g.response);
              }
            else
              o(
                "Failed to proxy resource " +
                  c +
                  " with status code " +
                  g.status
              );
          }),
            (g.onerror = o);
          var w = r.indexOf("?") > -1 ? "&" : "?";
          if (
            (g.open(
              "GET",
              "" + r + w + "url=" + encodeURIComponent(n) + "&responseType=" + h
            ),
            h !== "text" && g instanceof XMLHttpRequest && (g.responseType = h),
            i._options.imageTimeout)
          ) {
            var d = i._options.imageTimeout;
            (g.timeout = d),
              (g.ontimeout = function () {
                return o("Timed out (" + d + "ms) proxying " + c);
              });
          }
          g.send();
        });
      }),
      l
    );
  })(),
  gy = /^data:image\/svg\+xml/i,
  Qy = /^data:image\/.*;base64,/i,
  hy = /^data:image\/.*/i,
  wy = function (l) {
    return ue.SUPPORT_SVG_DRAWING || !Uy(l);
  },
  jc = function (l) {
    return hy.test(l);
  },
  Cy = function (l) {
    return Qy.test(l);
  },
  qc = function (l) {
    return l.substr(0, 4) === "blob";
  },
  Uy = function (l) {
    return l.substr(-3).toLowerCase() === "svg" || gy.test(l);
  },
  Y = (function () {
    function l(n, i) {
      (this.type = 0), (this.x = n), (this.y = i);
    }
    return (
      (l.prototype.add = function (n, i) {
        return new l(this.x + n, this.y + i);
      }),
      l
    );
  })(),
  yn = function (l, n, i) {
    return new Y(l.x + (n.x - l.x) * i, l.y + (n.y - l.y) * i);
  },
  Ki = (function () {
    function l(n, i, r, c) {
      (this.type = 1),
        (this.start = n),
        (this.startControl = i),
        (this.endControl = r),
        (this.end = c);
    }
    return (
      (l.prototype.subdivide = function (n, i) {
        var r = yn(this.start, this.startControl, n),
          c = yn(this.startControl, this.endControl, n),
          B = yn(this.endControl, this.end, n),
          o = yn(r, c, n),
          h = yn(c, B, n),
          g = yn(o, h, n);
        return i ? new l(this.start, r, o, g) : new l(g, h, B, this.end);
      }),
      (l.prototype.add = function (n, i) {
        return new l(
          this.start.add(n, i),
          this.startControl.add(n, i),
          this.endControl.add(n, i),
          this.end.add(n, i)
        );
      }),
      (l.prototype.reverse = function () {
        return new l(this.end, this.endControl, this.startControl, this.start);
      }),
      l
    );
  })(),
  Ze = function (l) {
    return l.type === 1;
  },
  dy = (function () {
    function l(n) {
      var i = n.styles,
        r = n.bounds,
        c = Ll(i.borderTopLeftRadius, r.width, r.height),
        B = c[0],
        o = c[1],
        h = Ll(i.borderTopRightRadius, r.width, r.height),
        g = h[0],
        w = h[1],
        d = Ll(i.borderBottomRightRadius, r.width, r.height),
        U = d[0],
        y = d[1],
        L = Ll(i.borderBottomLeftRadius, r.width, r.height),
        I = L[0],
        R = L[1],
        AA = [];
      AA.push((B + g) / r.width),
        AA.push((I + U) / r.width),
        AA.push((o + R) / r.height),
        AA.push((w + y) / r.height);
      var _ = Math.max.apply(Math, AA);
      _ > 1 &&
        ((B /= _),
        (o /= _),
        (g /= _),
        (w /= _),
        (U /= _),
        (y /= _),
        (I /= _),
        (R /= _));
      var X = r.width - g,
        aA = r.height - y,
        z = r.width - U,
        J = r.height - R,
        M = i.borderTopWidth,
        V = i.borderRightWidth,
        eA = i.borderBottomWidth,
        W = i.borderLeftWidth,
        FA = OA(i.paddingTop, n.bounds.width),
        xA = OA(i.paddingRight, n.bounds.width),
        HA = OA(i.paddingBottom, n.bounds.width),
        fA = OA(i.paddingLeft, n.bounds.width);
      (this.topLeftBorderDoubleOuterBox =
        B > 0 || o > 0
          ? RA(r.left + W / 3, r.top + M / 3, B - W / 3, o - M / 3, EA.TOP_LEFT)
          : new Y(r.left + W / 3, r.top + M / 3)),
        (this.topRightBorderDoubleOuterBox =
          B > 0 || o > 0
            ? RA(r.left + X, r.top + M / 3, g - V / 3, w - M / 3, EA.TOP_RIGHT)
            : new Y(r.left + r.width - V / 3, r.top + M / 3)),
        (this.bottomRightBorderDoubleOuterBox =
          U > 0 || y > 0
            ? RA(r.left + z, r.top + aA, U - V / 3, y - eA / 3, EA.BOTTOM_RIGHT)
            : new Y(r.left + r.width - V / 3, r.top + r.height - eA / 3)),
        (this.bottomLeftBorderDoubleOuterBox =
          I > 0 || R > 0
            ? RA(
                r.left + W / 3,
                r.top + J,
                I - W / 3,
                R - eA / 3,
                EA.BOTTOM_LEFT
              )
            : new Y(r.left + W / 3, r.top + r.height - eA / 3)),
        (this.topLeftBorderDoubleInnerBox =
          B > 0 || o > 0
            ? RA(
                r.left + (W * 2) / 3,
                r.top + (M * 2) / 3,
                B - (W * 2) / 3,
                o - (M * 2) / 3,
                EA.TOP_LEFT
              )
            : new Y(r.left + (W * 2) / 3, r.top + (M * 2) / 3)),
        (this.topRightBorderDoubleInnerBox =
          B > 0 || o > 0
            ? RA(
                r.left + X,
                r.top + (M * 2) / 3,
                g - (V * 2) / 3,
                w - (M * 2) / 3,
                EA.TOP_RIGHT
              )
            : new Y(r.left + r.width - (V * 2) / 3, r.top + (M * 2) / 3)),
        (this.bottomRightBorderDoubleInnerBox =
          U > 0 || y > 0
            ? RA(
                r.left + z,
                r.top + aA,
                U - (V * 2) / 3,
                y - (eA * 2) / 3,
                EA.BOTTOM_RIGHT
              )
            : new Y(
                r.left + r.width - (V * 2) / 3,
                r.top + r.height - (eA * 2) / 3
              )),
        (this.bottomLeftBorderDoubleInnerBox =
          I > 0 || R > 0
            ? RA(
                r.left + (W * 2) / 3,
                r.top + J,
                I - (W * 2) / 3,
                R - (eA * 2) / 3,
                EA.BOTTOM_LEFT
              )
            : new Y(r.left + (W * 2) / 3, r.top + r.height - (eA * 2) / 3)),
        (this.topLeftBorderStroke =
          B > 0 || o > 0
            ? RA(
                r.left + W / 2,
                r.top + M / 2,
                B - W / 2,
                o - M / 2,
                EA.TOP_LEFT
              )
            : new Y(r.left + W / 2, r.top + M / 2)),
        (this.topRightBorderStroke =
          B > 0 || o > 0
            ? RA(r.left + X, r.top + M / 2, g - V / 2, w - M / 2, EA.TOP_RIGHT)
            : new Y(r.left + r.width - V / 2, r.top + M / 2)),
        (this.bottomRightBorderStroke =
          U > 0 || y > 0
            ? RA(r.left + z, r.top + aA, U - V / 2, y - eA / 2, EA.BOTTOM_RIGHT)
            : new Y(r.left + r.width - V / 2, r.top + r.height - eA / 2)),
        (this.bottomLeftBorderStroke =
          I > 0 || R > 0
            ? RA(
                r.left + W / 2,
                r.top + J,
                I - W / 2,
                R - eA / 2,
                EA.BOTTOM_LEFT
              )
            : new Y(r.left + W / 2, r.top + r.height - eA / 2)),
        (this.topLeftBorderBox =
          B > 0 || o > 0
            ? RA(r.left, r.top, B, o, EA.TOP_LEFT)
            : new Y(r.left, r.top)),
        (this.topRightBorderBox =
          g > 0 || w > 0
            ? RA(r.left + X, r.top, g, w, EA.TOP_RIGHT)
            : new Y(r.left + r.width, r.top)),
        (this.bottomRightBorderBox =
          U > 0 || y > 0
            ? RA(r.left + z, r.top + aA, U, y, EA.BOTTOM_RIGHT)
            : new Y(r.left + r.width, r.top + r.height)),
        (this.bottomLeftBorderBox =
          I > 0 || R > 0
            ? RA(r.left, r.top + J, I, R, EA.BOTTOM_LEFT)
            : new Y(r.left, r.top + r.height)),
        (this.topLeftPaddingBox =
          B > 0 || o > 0
            ? RA(
                r.left + W,
                r.top + M,
                Math.max(0, B - W),
                Math.max(0, o - M),
                EA.TOP_LEFT
              )
            : new Y(r.left + W, r.top + M)),
        (this.topRightPaddingBox =
          g > 0 || w > 0
            ? RA(
                r.left + Math.min(X, r.width - V),
                r.top + M,
                X > r.width + V ? 0 : Math.max(0, g - V),
                Math.max(0, w - M),
                EA.TOP_RIGHT
              )
            : new Y(r.left + r.width - V, r.top + M)),
        (this.bottomRightPaddingBox =
          U > 0 || y > 0
            ? RA(
                r.left + Math.min(z, r.width - W),
                r.top + Math.min(aA, r.height - eA),
                Math.max(0, U - V),
                Math.max(0, y - eA),
                EA.BOTTOM_RIGHT
              )
            : new Y(r.left + r.width - V, r.top + r.height - eA)),
        (this.bottomLeftPaddingBox =
          I > 0 || R > 0
            ? RA(
                r.left + W,
                r.top + Math.min(J, r.height - eA),
                Math.max(0, I - W),
                Math.max(0, R - eA),
                EA.BOTTOM_LEFT
              )
            : new Y(r.left + W, r.top + r.height - eA)),
        (this.topLeftContentBox =
          B > 0 || o > 0
            ? RA(
                r.left + W + fA,
                r.top + M + FA,
                Math.max(0, B - (W + fA)),
                Math.max(0, o - (M + FA)),
                EA.TOP_LEFT
              )
            : new Y(r.left + W + fA, r.top + M + FA)),
        (this.topRightContentBox =
          g > 0 || w > 0
            ? RA(
                r.left + Math.min(X, r.width + W + fA),
                r.top + M + FA,
                X > r.width + W + fA ? 0 : g - W + fA,
                w - (M + FA),
                EA.TOP_RIGHT
              )
            : new Y(r.left + r.width - (V + xA), r.top + M + FA)),
        (this.bottomRightContentBox =
          U > 0 || y > 0
            ? RA(
                r.left + Math.min(z, r.width - (W + fA)),
                r.top + Math.min(aA, r.height + M + FA),
                Math.max(0, U - (V + xA)),
                y - (eA + HA),
                EA.BOTTOM_RIGHT
              )
            : new Y(r.left + r.width - (V + xA), r.top + r.height - (eA + HA))),
        (this.bottomLeftContentBox =
          I > 0 || R > 0
            ? RA(
                r.left + W + fA,
                r.top + J,
                Math.max(0, I - (W + fA)),
                R - (eA + HA),
                EA.BOTTOM_LEFT
              )
            : new Y(r.left + W + fA, r.top + r.height - (eA + HA)));
    }
    return l;
  })(),
  EA;
(function (l) {
  (l[(l.TOP_LEFT = 0)] = "TOP_LEFT"),
    (l[(l.TOP_RIGHT = 1)] = "TOP_RIGHT"),
    (l[(l.BOTTOM_RIGHT = 2)] = "BOTTOM_RIGHT"),
    (l[(l.BOTTOM_LEFT = 3)] = "BOTTOM_LEFT");
})(EA || (EA = {}));
var RA = function (l, n, i, r, c) {
    var B = 4 * ((Math.sqrt(2) - 1) / 3),
      o = i * B,
      h = r * B,
      g = l + i,
      w = n + r;
    switch (c) {
      case EA.TOP_LEFT:
        return new Ki(
          new Y(l, w),
          new Y(l, w - h),
          new Y(g - o, n),
          new Y(g, n)
        );
      case EA.TOP_RIGHT:
        return new Ki(
          new Y(l, n),
          new Y(l + o, n),
          new Y(g, w - h),
          new Y(g, w)
        );
      case EA.BOTTOM_RIGHT:
        return new Ki(
          new Y(g, n),
          new Y(g, n + h),
          new Y(l + o, w),
          new Y(l, w)
        );
      case EA.BOTTOM_LEFT:
      default:
        return new Ki(
          new Y(g, w),
          new Y(g - o, w),
          new Y(l, n + h),
          new Y(l, n)
        );
    }
  },
  Zi = function (l) {
    return [
      l.topLeftBorderBox,
      l.topRightBorderBox,
      l.bottomRightBorderBox,
      l.bottomLeftBorderBox,
    ];
  },
  vy = function (l) {
    return [
      l.topLeftContentBox,
      l.topRightContentBox,
      l.bottomRightContentBox,
      l.bottomLeftContentBox,
    ];
  },
  ji = function (l) {
    return [
      l.topLeftPaddingBox,
      l.topRightPaddingBox,
      l.bottomRightPaddingBox,
      l.bottomLeftPaddingBox,
    ];
  },
  Fy = (function () {
    function l(n, i, r) {
      (this.offsetX = n),
        (this.offsetY = i),
        (this.matrix = r),
        (this.type = 0),
        (this.target = 6);
    }
    return l;
  })(),
  Di = (function () {
    function l(n, i) {
      (this.path = n), (this.target = i), (this.type = 1);
    }
    return l;
  })(),
  Ey = (function () {
    function l(n) {
      (this.opacity = n), (this.type = 2), (this.target = 6);
    }
    return l;
  })(),
  yy = function (l) {
    return l.type === 0;
  },
  R0 = function (l) {
    return l.type === 1;
  },
  my = function (l) {
    return l.type === 2;
  },
  Mh = function (l, n) {
    return l.length === n.length
      ? l.some(function (i, r) {
          return i === n[r];
        })
      : !1;
  },
  Hy = function (l, n, i, r, c) {
    return l.map(function (B, o) {
      switch (o) {
        case 0:
          return B.add(n, i);
        case 1:
          return B.add(n + r, i);
        case 2:
          return B.add(n + r, i + c);
        case 3:
          return B.add(n, i + c);
      }
      return B;
    });
  },
  N0 = (function () {
    function l(n) {
      (this.element = n),
        (this.inlineLevel = []),
        (this.nonInlineLevel = []),
        (this.negativeZIndex = []),
        (this.zeroOrAutoZIndexOrTransformedOrOpacity = []),
        (this.positiveZIndex = []),
        (this.nonPositionedFloats = []),
        (this.nonPositionedInlineLevel = []);
    }
    return l;
  })(),
  G0 = (function () {
    function l(n, i) {
      if (
        ((this.container = n),
        (this.parent = i),
        (this.effects = []),
        (this.curves = new dy(this.container)),
        this.container.styles.opacity < 1 &&
          this.effects.push(new Ey(this.container.styles.opacity)),
        this.container.styles.transform !== null)
      ) {
        var r =
            this.container.bounds.left +
            this.container.styles.transformOrigin[0].number,
          c =
            this.container.bounds.top +
            this.container.styles.transformOrigin[1].number,
          B = this.container.styles.transform;
        this.effects.push(new Fy(r, c, B));
      }
      if (this.container.styles.overflowX !== 0) {
        var o = Zi(this.curves),
          h = ji(this.curves);
        Mh(o, h)
          ? this.effects.push(new Di(o, 6))
          : (this.effects.push(new Di(o, 2)), this.effects.push(new Di(h, 4)));
      }
    }
    return (
      (l.prototype.getEffects = function (n) {
        for (
          var i = [2, 3].indexOf(this.container.styles.position) === -1,
            r = this.parent,
            c = this.effects.slice(0);
          r;

        ) {
          var B = r.effects.filter(function (g) {
            return !R0(g);
          });
          if (i || r.container.styles.position !== 0 || !r.parent) {
            if (
              (c.unshift.apply(c, B),
              (i = [2, 3].indexOf(r.container.styles.position) === -1),
              r.container.styles.overflowX !== 0)
            ) {
              var o = Zi(r.curves),
                h = ji(r.curves);
              Mh(o, h) || c.unshift(new Di(h, 6));
            }
          } else c.unshift.apply(c, B);
          r = r.parent;
        }
        return c.filter(function (g) {
          return $A(g.target, n);
        });
      }),
      l
    );
  })(),
  UB = function (l, n, i, r) {
    l.container.elements.forEach(function (c) {
      var B = $A(c.flags, 4),
        o = $A(c.flags, 2),
        h = new G0(c, l);
      $A(c.styles.display, 2048) && r.push(h);
      var g = $A(c.flags, 8) ? [] : r;
      if (B || o) {
        var w = B || c.styles.isPositioned() ? i : n,
          d = new N0(h);
        if (
          c.styles.isPositioned() ||
          c.styles.opacity < 1 ||
          c.styles.isTransformed()
        ) {
          var U = c.styles.zIndex.order;
          if (U < 0) {
            var y = 0;
            w.negativeZIndex.some(function (I, R) {
              return U > I.element.container.styles.zIndex.order
                ? ((y = R), !1)
                : y > 0;
            }),
              w.negativeZIndex.splice(y, 0, d);
          } else if (U > 0) {
            var L = 0;
            w.positiveZIndex.some(function (I, R) {
              return U >= I.element.container.styles.zIndex.order
                ? ((L = R + 1), !1)
                : L > 0;
            }),
              w.positiveZIndex.splice(L, 0, d);
          } else w.zeroOrAutoZIndexOrTransformedOrOpacity.push(d);
        } else
          c.styles.isFloating()
            ? w.nonPositionedFloats.push(d)
            : w.nonPositionedInlineLevel.push(d);
        UB(h, d, B ? d : i, g);
      } else c.styles.isInlineLevel() ? n.inlineLevel.push(h) : n.nonInlineLevel.push(h), UB(h, n, i, g);
      $A(c.flags, 8) && _0(c, g);
    });
  },
  _0 = function (l, n) {
    for (
      var i = l instanceof gB ? l.start : 1,
        r = l instanceof gB ? l.reversed : !1,
        c = 0;
      c < n.length;
      c++
    ) {
      var B = n[c];
      B.container instanceof y0 &&
        typeof B.container.value == "number" &&
        B.container.value !== 0 &&
        (i = B.container.value),
        (B.listValue = Jl(i, B.container.styles.listStyleType, !0)),
        (i += r ? -1 : 1);
    }
  },
  py = function (l) {
    var n = new G0(l, null),
      i = new N0(n),
      r = [];
    return UB(n, i, i, r), _0(n.container, r), i;
  },
  Rh = function (l, n) {
    switch (n) {
      case 0:
        return qe(
          l.topLeftBorderBox,
          l.topLeftPaddingBox,
          l.topRightBorderBox,
          l.topRightPaddingBox
        );
      case 1:
        return qe(
          l.topRightBorderBox,
          l.topRightPaddingBox,
          l.bottomRightBorderBox,
          l.bottomRightPaddingBox
        );
      case 2:
        return qe(
          l.bottomRightBorderBox,
          l.bottomRightPaddingBox,
          l.bottomLeftBorderBox,
          l.bottomLeftPaddingBox
        );
      case 3:
      default:
        return qe(
          l.bottomLeftBorderBox,
          l.bottomLeftPaddingBox,
          l.topLeftBorderBox,
          l.topLeftPaddingBox
        );
    }
  },
  Sy = function (l, n) {
    switch (n) {
      case 0:
        return qe(
          l.topLeftBorderBox,
          l.topLeftBorderDoubleOuterBox,
          l.topRightBorderBox,
          l.topRightBorderDoubleOuterBox
        );
      case 1:
        return qe(
          l.topRightBorderBox,
          l.topRightBorderDoubleOuterBox,
          l.bottomRightBorderBox,
          l.bottomRightBorderDoubleOuterBox
        );
      case 2:
        return qe(
          l.bottomRightBorderBox,
          l.bottomRightBorderDoubleOuterBox,
          l.bottomLeftBorderBox,
          l.bottomLeftBorderDoubleOuterBox
        );
      case 3:
      default:
        return qe(
          l.bottomLeftBorderBox,
          l.bottomLeftBorderDoubleOuterBox,
          l.topLeftBorderBox,
          l.topLeftBorderDoubleOuterBox
        );
    }
  },
  by = function (l, n) {
    switch (n) {
      case 0:
        return qe(
          l.topLeftBorderDoubleInnerBox,
          l.topLeftPaddingBox,
          l.topRightBorderDoubleInnerBox,
          l.topRightPaddingBox
        );
      case 1:
        return qe(
          l.topRightBorderDoubleInnerBox,
          l.topRightPaddingBox,
          l.bottomRightBorderDoubleInnerBox,
          l.bottomRightPaddingBox
        );
      case 2:
        return qe(
          l.bottomRightBorderDoubleInnerBox,
          l.bottomRightPaddingBox,
          l.bottomLeftBorderDoubleInnerBox,
          l.bottomLeftPaddingBox
        );
      case 3:
      default:
        return qe(
          l.bottomLeftBorderDoubleInnerBox,
          l.bottomLeftPaddingBox,
          l.topLeftBorderDoubleInnerBox,
          l.topLeftPaddingBox
        );
    }
  },
  Ty = function (l, n) {
    switch (n) {
      case 0:
        return Oi(l.topLeftBorderStroke, l.topRightBorderStroke);
      case 1:
        return Oi(l.topRightBorderStroke, l.bottomRightBorderStroke);
      case 2:
        return Oi(l.bottomRightBorderStroke, l.bottomLeftBorderStroke);
      case 3:
      default:
        return Oi(l.bottomLeftBorderStroke, l.topLeftBorderStroke);
    }
  },
  Oi = function (l, n) {
    var i = [];
    return (
      Ze(l) ? i.push(l.subdivide(0.5, !1)) : i.push(l),
      Ze(n) ? i.push(n.subdivide(0.5, !0)) : i.push(n),
      i
    );
  },
  qe = function (l, n, i, r) {
    var c = [];
    return (
      Ze(l) ? c.push(l.subdivide(0.5, !1)) : c.push(l),
      Ze(i) ? c.push(i.subdivide(0.5, !0)) : c.push(i),
      Ze(r) ? c.push(r.subdivide(0.5, !0).reverse()) : c.push(r),
      Ze(n) ? c.push(n.subdivide(0.5, !1).reverse()) : c.push(n),
      c
    );
  },
  V0 = function (l) {
    var n = l.bounds,
      i = l.styles;
    return n.add(
      i.borderLeftWidth,
      i.borderTopWidth,
      -(i.borderRightWidth + i.borderLeftWidth),
      -(i.borderTopWidth + i.borderBottomWidth)
    );
  },
  qi = function (l) {
    var n = l.styles,
      i = l.bounds,
      r = OA(n.paddingLeft, i.width),
      c = OA(n.paddingRight, i.width),
      B = OA(n.paddingTop, i.width),
      o = OA(n.paddingBottom, i.width);
    return i.add(
      r + n.borderLeftWidth,
      B + n.borderTopWidth,
      -(n.borderRightWidth + n.borderLeftWidth + r + c),
      -(n.borderTopWidth + n.borderBottomWidth + B + o)
    );
  },
  xy = function (l, n) {
    return l === 0 ? n.bounds : l === 2 ? qi(n) : V0(n);
  },
  Ky = function (l, n) {
    return l === 0 ? n.bounds : l === 2 ? qi(n) : V0(n);
  },
  kc = function (l, n, i) {
    var r = xy(pn(l.styles.backgroundOrigin, n), l),
      c = Ky(pn(l.styles.backgroundClip, n), l),
      B = Dy(pn(l.styles.backgroundSize, n), i, r),
      o = B[0],
      h = B[1],
      g = Ll(pn(l.styles.backgroundPosition, n), r.width - o, r.height - h),
      w = Oy(pn(l.styles.backgroundRepeat, n), g, B, r, c),
      d = Math.round(r.left + g[0]),
      U = Math.round(r.top + g[1]);
    return [w, d, U, o, h];
  },
  mn = function (l) {
    return TA(l) && l.value === bn.AUTO;
  },
  Ii = function (l) {
    return typeof l == "number";
  },
  Dy = function (l, n, i) {
    var r = n[0],
      c = n[1],
      B = n[2],
      o = l[0],
      h = l[1];
    if (!o) return [0, 0];
    if (WA(o) && h && WA(h)) return [OA(o, i.width), OA(h, i.height)];
    var g = Ii(B);
    if (TA(o) && (o.value === bn.CONTAIN || o.value === bn.COVER)) {
      if (Ii(B)) {
        var w = i.width / i.height;
        return w < B != (o.value === bn.COVER)
          ? [i.width, i.width / B]
          : [i.height * B, i.height];
      }
      return [i.width, i.height];
    }
    var d = Ii(r),
      U = Ii(c),
      y = d || U;
    if (mn(o) && (!h || mn(h))) {
      if (d && U) return [r, c];
      if (!g && !y) return [i.width, i.height];
      if (y && g) {
        var L = d ? r : c * B,
          I = U ? c : r / B;
        return [L, I];
      }
      var R = d ? r : i.width,
        AA = U ? c : i.height;
      return [R, AA];
    }
    if (g) {
      var _ = 0,
        X = 0;
      return (
        WA(o) ? (_ = OA(o, i.width)) : WA(h) && (X = OA(h, i.height)),
        mn(o) ? (_ = X * B) : (!h || mn(h)) && (X = _ / B),
        [_, X]
      );
    }
    var aA = null,
      z = null;
    if (
      (WA(o) ? (aA = OA(o, i.width)) : h && WA(h) && (z = OA(h, i.height)),
      aA !== null && (!h || mn(h)) && (z = d && U ? (aA / r) * c : i.height),
      z !== null && mn(o) && (aA = d && U ? (z / c) * r : i.width),
      aA !== null && z !== null)
    )
      return [aA, z];
    throw new Error("Unable to calculate background-size for element");
  },
  pn = function (l, n) {
    var i = l[n];
    return typeof i > "u" ? l[0] : i;
  },
  Oy = function (l, n, i, r, c) {
    var B = n[0],
      o = n[1],
      h = i[0],
      g = i[1];
    switch (l) {
      case 2:
        return [
          new Y(Math.round(r.left), Math.round(r.top + o)),
          new Y(Math.round(r.left + r.width), Math.round(r.top + o)),
          new Y(Math.round(r.left + r.width), Math.round(g + r.top + o)),
          new Y(Math.round(r.left), Math.round(g + r.top + o)),
        ];
      case 3:
        return [
          new Y(Math.round(r.left + B), Math.round(r.top)),
          new Y(Math.round(r.left + B + h), Math.round(r.top)),
          new Y(Math.round(r.left + B + h), Math.round(r.height + r.top)),
          new Y(Math.round(r.left + B), Math.round(r.height + r.top)),
        ];
      case 1:
        return [
          new Y(Math.round(r.left + B), Math.round(r.top + o)),
          new Y(Math.round(r.left + B + h), Math.round(r.top + o)),
          new Y(Math.round(r.left + B + h), Math.round(r.top + o + g)),
          new Y(Math.round(r.left + B), Math.round(r.top + o + g)),
        ];
      default:
        return [
          new Y(Math.round(c.left), Math.round(c.top)),
          new Y(Math.round(c.left + c.width), Math.round(c.top)),
          new Y(Math.round(c.left + c.width), Math.round(c.height + c.top)),
          new Y(Math.round(c.left), Math.round(c.height + c.top)),
        ];
    }
  },
  Iy =
    "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  Nh = "Hidden Text",
  Ly = (function () {
    function l(n) {
      (this._data = {}), (this._document = n);
    }
    return (
      (l.prototype.parseMetrics = function (n, i) {
        var r = this._document.createElement("div"),
          c = this._document.createElement("img"),
          B = this._document.createElement("span"),
          o = this._document.body;
        (r.style.visibility = "hidden"),
          (r.style.fontFamily = n),
          (r.style.fontSize = i),
          (r.style.margin = "0"),
          (r.style.padding = "0"),
          (r.style.whiteSpace = "nowrap"),
          o.appendChild(r),
          (c.src = Iy),
          (c.width = 1),
          (c.height = 1),
          (c.style.margin = "0"),
          (c.style.padding = "0"),
          (c.style.verticalAlign = "baseline"),
          (B.style.fontFamily = n),
          (B.style.fontSize = i),
          (B.style.margin = "0"),
          (B.style.padding = "0"),
          B.appendChild(this._document.createTextNode(Nh)),
          r.appendChild(B),
          r.appendChild(c);
        var h = c.offsetTop - B.offsetTop + 2;
        r.removeChild(B),
          r.appendChild(this._document.createTextNode(Nh)),
          (r.style.lineHeight = "normal"),
          (c.style.verticalAlign = "super");
        var g = c.offsetTop - r.offsetTop + 2;
        return o.removeChild(r), { baseline: h, middle: g };
      }),
      (l.prototype.getMetrics = function (n, i) {
        var r = n + " " + i;
        return (
          typeof this._data[r] > "u" &&
            (this._data[r] = this.parseMetrics(n, i)),
          this._data[r]
        );
      }),
      l
    );
  })(),
  X0 = (function () {
    function l(n, i) {
      (this.context = n), (this.options = i);
    }
    return l;
  })(),
  My = 1e4,
  Ry = (function (l) {
    At(n, l);
    function n(i, r) {
      var c = l.call(this, i, r) || this;
      return (
        (c._activeEffects = []),
        (c.canvas = r.canvas ? r.canvas : document.createElement("canvas")),
        (c.ctx = c.canvas.getContext("2d")),
        r.canvas ||
          ((c.canvas.width = Math.floor(r.width * r.scale)),
          (c.canvas.height = Math.floor(r.height * r.scale)),
          (c.canvas.style.width = r.width + "px"),
          (c.canvas.style.height = r.height + "px")),
        (c.fontMetrics = new Ly(document)),
        c.ctx.scale(c.options.scale, c.options.scale),
        c.ctx.translate(-r.x, -r.y),
        (c.ctx.textBaseline = "bottom"),
        (c._activeEffects = []),
        c.context.logger.debug(
          "Canvas renderer initialized (" +
            r.width +
            "x" +
            r.height +
            ") with scale " +
            r.scale
        ),
        c
      );
    }
    return (
      (n.prototype.applyEffects = function (i) {
        for (var r = this; this._activeEffects.length; ) this.popEffect();
        i.forEach(function (c) {
          return r.applyEffect(c);
        });
      }),
      (n.prototype.applyEffect = function (i) {
        this.ctx.save(),
          my(i) && (this.ctx.globalAlpha = i.opacity),
          yy(i) &&
            (this.ctx.translate(i.offsetX, i.offsetY),
            this.ctx.transform(
              i.matrix[0],
              i.matrix[1],
              i.matrix[2],
              i.matrix[3],
              i.matrix[4],
              i.matrix[5]
            ),
            this.ctx.translate(-i.offsetX, -i.offsetY)),
          R0(i) && (this.path(i.path), this.ctx.clip()),
          this._activeEffects.push(i);
      }),
      (n.prototype.popEffect = function () {
        this._activeEffects.pop(), this.ctx.restore();
      }),
      (n.prototype.renderStack = function (i) {
        return Qe(this, void 0, void 0, function () {
          var r;
          return Be(this, function (c) {
            switch (c.label) {
              case 0:
                return (
                  (r = i.element.container.styles),
                  r.isVisible() ? [4, this.renderStackContent(i)] : [3, 2]
                );
              case 1:
                c.sent(), (c.label = 2);
              case 2:
                return [2];
            }
          });
        });
      }),
      (n.prototype.renderNode = function (i) {
        return Qe(this, void 0, void 0, function () {
          return Be(this, function (r) {
            switch (r.label) {
              case 0:
                if ($A(i.container.flags, 16)) debugger;
                return i.container.styles.isVisible()
                  ? [4, this.renderNodeBackgroundAndBorders(i)]
                  : [3, 3];
              case 1:
                return r.sent(), [4, this.renderNodeContent(i)];
              case 2:
                r.sent(), (r.label = 3);
              case 3:
                return [2];
            }
          });
        });
      }),
      (n.prototype.renderTextWithLetterSpacing = function (i, r, c) {
        var B = this;
        if (r === 0) this.ctx.fillText(i.text, i.bounds.left, i.bounds.top + c);
        else {
          var o = mB(i.text);
          o.reduce(function (h, g) {
            return (
              B.ctx.fillText(g, h, i.bounds.top + c),
              h + B.ctx.measureText(g).width
            );
          }, i.bounds.left);
        }
      }),
      (n.prototype.createFontStyle = function (i) {
        var r = i.fontVariant
            .filter(function (o) {
              return o === "normal" || o === "small-caps";
            })
            .join(""),
          c = Xy(i.fontFamily).join(", "),
          B = jl(i.fontSize)
            ? "" + i.fontSize.number + i.fontSize.unit
            : i.fontSize.number + "px";
        return [[i.fontStyle, r, i.fontWeight, B, c].join(" "), c, B];
      }),
      (n.prototype.renderTextNode = function (i, r) {
        return Qe(this, void 0, void 0, function () {
          var c,
            B,
            o,
            h,
            g,
            w,
            d,
            U,
            y = this;
          return Be(this, function (L) {
            return (
              (c = this.createFontStyle(r)),
              (B = c[0]),
              (o = c[1]),
              (h = c[2]),
              (this.ctx.font = B),
              (this.ctx.direction = r.direction === 1 ? "rtl" : "ltr"),
              (this.ctx.textAlign = "left"),
              (this.ctx.textBaseline = "alphabetic"),
              (g = this.fontMetrics.getMetrics(o, h)),
              (w = g.baseline),
              (d = g.middle),
              (U = r.paintOrder),
              i.textBounds.forEach(function (I) {
                U.forEach(function (R) {
                  switch (R) {
                    case 0:
                      (y.ctx.fillStyle = te(r.color)),
                        y.renderTextWithLetterSpacing(I, r.letterSpacing, w);
                      var AA = r.textShadow;
                      AA.length &&
                        I.text.trim().length &&
                        (AA.slice(0)
                          .reverse()
                          .forEach(function (_) {
                            (y.ctx.shadowColor = te(_.color)),
                              (y.ctx.shadowOffsetX =
                                _.offsetX.number * y.options.scale),
                              (y.ctx.shadowOffsetY =
                                _.offsetY.number * y.options.scale),
                              (y.ctx.shadowBlur = _.blur.number),
                              y.renderTextWithLetterSpacing(
                                I,
                                r.letterSpacing,
                                w
                              );
                          }),
                        (y.ctx.shadowColor = ""),
                        (y.ctx.shadowOffsetX = 0),
                        (y.ctx.shadowOffsetY = 0),
                        (y.ctx.shadowBlur = 0)),
                        r.textDecorationLine.length &&
                          ((y.ctx.fillStyle = te(
                            r.textDecorationColor || r.color
                          )),
                          r.textDecorationLine.forEach(function (_) {
                            switch (_) {
                              case 1:
                                y.ctx.fillRect(
                                  I.bounds.left,
                                  Math.round(I.bounds.top + w),
                                  I.bounds.width,
                                  1
                                );
                                break;
                              case 2:
                                y.ctx.fillRect(
                                  I.bounds.left,
                                  Math.round(I.bounds.top),
                                  I.bounds.width,
                                  1
                                );
                                break;
                              case 3:
                                y.ctx.fillRect(
                                  I.bounds.left,
                                  Math.ceil(I.bounds.top + d),
                                  I.bounds.width,
                                  1
                                );
                                break;
                            }
                          }));
                      break;
                    case 1:
                      r.webkitTextStrokeWidth &&
                        I.text.trim().length &&
                        ((y.ctx.strokeStyle = te(r.webkitTextStrokeColor)),
                        (y.ctx.lineWidth = r.webkitTextStrokeWidth),
                        (y.ctx.lineJoin = window.chrome ? "miter" : "round"),
                        y.ctx.strokeText(
                          I.text,
                          I.bounds.left,
                          I.bounds.top + w
                        )),
                        (y.ctx.strokeStyle = ""),
                        (y.ctx.lineWidth = 0),
                        (y.ctx.lineJoin = "miter");
                      break;
                  }
                });
              }),
              [2]
            );
          });
        });
      }),
      (n.prototype.renderReplacedElement = function (i, r, c) {
        if (c && i.intrinsicWidth > 0 && i.intrinsicHeight > 0) {
          var B = qi(i),
            o = ji(r);
          this.path(o),
            this.ctx.save(),
            this.ctx.clip(),
            this.ctx.drawImage(
              c,
              0,
              0,
              i.intrinsicWidth,
              i.intrinsicHeight,
              B.left,
              B.top,
              B.width,
              B.height
            ),
            this.ctx.restore();
        }
      }),
      (n.prototype.renderNodeContent = function (i) {
        return Qe(this, void 0, void 0, function () {
          var r,
            c,
            B,
            o,
            h,
            g,
            X,
            X,
            w,
            d,
            U,
            y,
            z,
            L,
            I,
            J,
            R,
            AA,
            _,
            X,
            aA,
            z,
            J;
          return Be(this, function (M) {
            switch (M.label) {
              case 0:
                this.applyEffects(i.getEffects(4)),
                  (r = i.container),
                  (c = i.curves),
                  (B = r.styles),
                  (o = 0),
                  (h = r.textNodes),
                  (M.label = 1);
              case 1:
                return o < h.length
                  ? ((g = h[o]), [4, this.renderTextNode(g, B)])
                  : [3, 4];
              case 2:
                M.sent(), (M.label = 3);
              case 3:
                return o++, [3, 1];
              case 4:
                if (!(r instanceof v0)) return [3, 8];
                M.label = 5;
              case 5:
                return (
                  M.trys.push([5, 7, , 8]), [4, this.context.cache.match(r.src)]
                );
              case 6:
                return (
                  (X = M.sent()), this.renderReplacedElement(r, c, X), [3, 8]
                );
              case 7:
                return (
                  M.sent(),
                  this.context.logger.error("Error loading image " + r.src),
                  [3, 8]
                );
              case 8:
                if (
                  (r instanceof F0 &&
                    this.renderReplacedElement(r, c, r.canvas),
                  !(r instanceof E0))
                )
                  return [3, 12];
                M.label = 9;
              case 9:
                return (
                  M.trys.push([9, 11, , 12]),
                  [4, this.context.cache.match(r.svg)]
                );
              case 10:
                return (
                  (X = M.sent()), this.renderReplacedElement(r, c, X), [3, 12]
                );
              case 11:
                return (
                  M.sent(),
                  this.context.logger.error(
                    "Error loading svg " + r.svg.substring(0, 255)
                  ),
                  [3, 12]
                );
              case 12:
                return r instanceof p0 && r.tree
                  ? ((w = new n(this.context, {
                      scale: this.options.scale,
                      backgroundColor: r.backgroundColor,
                      x: 0,
                      y: 0,
                      width: r.width,
                      height: r.height,
                    })),
                    [4, w.render(r.tree)])
                  : [3, 14];
              case 13:
                (d = M.sent()),
                  r.width &&
                    r.height &&
                    this.ctx.drawImage(
                      d,
                      0,
                      0,
                      r.width,
                      r.height,
                      r.bounds.left,
                      r.bounds.top,
                      r.bounds.width,
                      r.bounds.height
                    ),
                  (M.label = 14);
              case 14:
                if (
                  (r instanceof HB &&
                    ((U = Math.min(r.bounds.width, r.bounds.height)),
                    r.type === Xi
                      ? r.checked &&
                        (this.ctx.save(),
                        this.path([
                          new Y(
                            r.bounds.left + U * 0.39363,
                            r.bounds.top + U * 0.79
                          ),
                          new Y(
                            r.bounds.left + U * 0.16,
                            r.bounds.top + U * 0.5549
                          ),
                          new Y(
                            r.bounds.left + U * 0.27347,
                            r.bounds.top + U * 0.44071
                          ),
                          new Y(
                            r.bounds.left + U * 0.39694,
                            r.bounds.top + U * 0.5649
                          ),
                          new Y(
                            r.bounds.left + U * 0.72983,
                            r.bounds.top + U * 0.23
                          ),
                          new Y(
                            r.bounds.left + U * 0.84,
                            r.bounds.top + U * 0.34085
                          ),
                          new Y(
                            r.bounds.left + U * 0.39363,
                            r.bounds.top + U * 0.79
                          ),
                        ]),
                        (this.ctx.fillStyle = te(Hh)),
                        this.ctx.fill(),
                        this.ctx.restore())
                      : r.type === zi &&
                        r.checked &&
                        (this.ctx.save(),
                        this.ctx.beginPath(),
                        this.ctx.arc(
                          r.bounds.left + U / 2,
                          r.bounds.top + U / 2,
                          U / 4,
                          0,
                          Math.PI * 2,
                          !0
                        ),
                        (this.ctx.fillStyle = te(Hh)),
                        this.ctx.fill(),
                        this.ctx.restore())),
                  Ny(r) && r.value.length)
                ) {
                  switch (
                    ((y = this.createFontStyle(B)),
                    (z = y[0]),
                    (L = y[1]),
                    (I = this.fontMetrics.getMetrics(z, L).baseline),
                    (this.ctx.font = z),
                    (this.ctx.fillStyle = te(B.color)),
                    (this.ctx.textBaseline = "alphabetic"),
                    (this.ctx.textAlign = _y(r.styles.textAlign)),
                    (J = qi(r)),
                    (R = 0),
                    r.styles.textAlign)
                  ) {
                    case 1:
                      R += J.width / 2;
                      break;
                    case 2:
                      R += J.width;
                      break;
                  }
                  (AA = J.add(R, 0, 0, -J.height / 2 + 1)),
                    this.ctx.save(),
                    this.path([
                      new Y(J.left, J.top),
                      new Y(J.left + J.width, J.top),
                      new Y(J.left + J.width, J.top + J.height),
                      new Y(J.left, J.top + J.height),
                    ]),
                    this.ctx.clip(),
                    this.renderTextWithLetterSpacing(
                      new Vl(r.value, AA),
                      B.letterSpacing,
                      I
                    ),
                    this.ctx.restore(),
                    (this.ctx.textBaseline = "alphabetic"),
                    (this.ctx.textAlign = "left");
                }
                if (!$A(r.styles.display, 2048)) return [3, 20];
                if (r.styles.listStyleImage === null) return [3, 19];
                if (((_ = r.styles.listStyleImage), _.type !== 0))
                  return [3, 18];
                (X = void 0), (aA = _.url), (M.label = 15);
              case 15:
                return (
                  M.trys.push([15, 17, , 18]), [4, this.context.cache.match(aA)]
                );
              case 16:
                return (
                  (X = M.sent()),
                  this.ctx.drawImage(
                    X,
                    r.bounds.left - (X.width + 10),
                    r.bounds.top
                  ),
                  [3, 18]
                );
              case 17:
                return (
                  M.sent(),
                  this.context.logger.error(
                    "Error loading list-style-image " + aA
                  ),
                  [3, 18]
                );
              case 18:
                return [3, 20];
              case 19:
                i.listValue &&
                  r.styles.listStyleType !== -1 &&
                  ((z = this.createFontStyle(B)[0]),
                  (this.ctx.font = z),
                  (this.ctx.fillStyle = te(B.color)),
                  (this.ctx.textBaseline = "middle"),
                  (this.ctx.textAlign = "right"),
                  (J = new Tt(
                    r.bounds.left,
                    r.bounds.top + OA(r.styles.paddingTop, r.bounds.width),
                    r.bounds.width,
                    sh(B.lineHeight, B.fontSize.number) / 2 + 1
                  )),
                  this.renderTextWithLetterSpacing(
                    new Vl(i.listValue, J),
                    B.letterSpacing,
                    sh(B.lineHeight, B.fontSize.number) / 2 + 2
                  ),
                  (this.ctx.textBaseline = "bottom"),
                  (this.ctx.textAlign = "left")),
                  (M.label = 20);
              case 20:
                return [2];
            }
          });
        });
      }),
      (n.prototype.renderStackContent = function (i) {
        return Qe(this, void 0, void 0, function () {
          var r, c, _, B, o, _, h, g, _, w, d, _, U, y, _, L, I, _, R, AA, _;
          return Be(this, function (X) {
            switch (X.label) {
              case 0:
                if ($A(i.element.container.flags, 16)) debugger;
                return [4, this.renderNodeBackgroundAndBorders(i.element)];
              case 1:
                X.sent(), (r = 0), (c = i.negativeZIndex), (X.label = 2);
              case 2:
                return r < c.length
                  ? ((_ = c[r]), [4, this.renderStack(_)])
                  : [3, 5];
              case 3:
                X.sent(), (X.label = 4);
              case 4:
                return r++, [3, 2];
              case 5:
                return [4, this.renderNodeContent(i.element)];
              case 6:
                X.sent(), (B = 0), (o = i.nonInlineLevel), (X.label = 7);
              case 7:
                return B < o.length
                  ? ((_ = o[B]), [4, this.renderNode(_)])
                  : [3, 10];
              case 8:
                X.sent(), (X.label = 9);
              case 9:
                return B++, [3, 7];
              case 10:
                (h = 0), (g = i.nonPositionedFloats), (X.label = 11);
              case 11:
                return h < g.length
                  ? ((_ = g[h]), [4, this.renderStack(_)])
                  : [3, 14];
              case 12:
                X.sent(), (X.label = 13);
              case 13:
                return h++, [3, 11];
              case 14:
                (w = 0), (d = i.nonPositionedInlineLevel), (X.label = 15);
              case 15:
                return w < d.length
                  ? ((_ = d[w]), [4, this.renderStack(_)])
                  : [3, 18];
              case 16:
                X.sent(), (X.label = 17);
              case 17:
                return w++, [3, 15];
              case 18:
                (U = 0), (y = i.inlineLevel), (X.label = 19);
              case 19:
                return U < y.length
                  ? ((_ = y[U]), [4, this.renderNode(_)])
                  : [3, 22];
              case 20:
                X.sent(), (X.label = 21);
              case 21:
                return U++, [3, 19];
              case 22:
                (L = 0),
                  (I = i.zeroOrAutoZIndexOrTransformedOrOpacity),
                  (X.label = 23);
              case 23:
                return L < I.length
                  ? ((_ = I[L]), [4, this.renderStack(_)])
                  : [3, 26];
              case 24:
                X.sent(), (X.label = 25);
              case 25:
                return L++, [3, 23];
              case 26:
                (R = 0), (AA = i.positiveZIndex), (X.label = 27);
              case 27:
                return R < AA.length
                  ? ((_ = AA[R]), [4, this.renderStack(_)])
                  : [3, 30];
              case 28:
                X.sent(), (X.label = 29);
              case 29:
                return R++, [3, 27];
              case 30:
                return [2];
            }
          });
        });
      }),
      (n.prototype.mask = function (i) {
        this.ctx.beginPath(),
          this.ctx.moveTo(0, 0),
          this.ctx.lineTo(this.canvas.width, 0),
          this.ctx.lineTo(this.canvas.width, this.canvas.height),
          this.ctx.lineTo(0, this.canvas.height),
          this.ctx.lineTo(0, 0),
          this.formatPath(i.slice(0).reverse()),
          this.ctx.closePath();
      }),
      (n.prototype.path = function (i) {
        this.ctx.beginPath(), this.formatPath(i), this.ctx.closePath();
      }),
      (n.prototype.formatPath = function (i) {
        var r = this;
        i.forEach(function (c, B) {
          var o = Ze(c) ? c.start : c;
          B === 0 ? r.ctx.moveTo(o.x, o.y) : r.ctx.lineTo(o.x, o.y),
            Ze(c) &&
              r.ctx.bezierCurveTo(
                c.startControl.x,
                c.startControl.y,
                c.endControl.x,
                c.endControl.y,
                c.end.x,
                c.end.y
              );
        });
      }),
      (n.prototype.renderRepeat = function (i, r, c, B) {
        this.path(i),
          (this.ctx.fillStyle = r),
          this.ctx.translate(c, B),
          this.ctx.fill(),
          this.ctx.translate(-c, -B);
      }),
      (n.prototype.resizeImage = function (i, r, c) {
        var B;
        if (i.width === r && i.height === c) return i;
        var o =
            (B = this.canvas.ownerDocument) !== null && B !== void 0
              ? B
              : document,
          h = o.createElement("canvas");
        (h.width = Math.max(1, r)), (h.height = Math.max(1, c));
        var g = h.getContext("2d");
        return g.drawImage(i, 0, 0, i.width, i.height, 0, 0, r, c), h;
      }),
      (n.prototype.renderBackgroundImage = function (i) {
        return Qe(this, void 0, void 0, function () {
          var r, c, B, o, h, g;
          return Be(this, function (w) {
            switch (w.label) {
              case 0:
                (r = i.styles.backgroundImage.length - 1),
                  (c = function (d) {
                    var U,
                      y,
                      L,
                      FA,
                      b,
                      N,
                      fA,
                      KA,
                      eA,
                      I,
                      FA,
                      b,
                      N,
                      fA,
                      KA,
                      R,
                      AA,
                      _,
                      X,
                      aA,
                      z,
                      J,
                      M,
                      V,
                      eA,
                      W,
                      FA,
                      xA,
                      HA,
                      fA,
                      KA,
                      JA,
                      b,
                      N,
                      P,
                      sA,
                      oA,
                      v,
                      x,
                      G,
                      Z,
                      tA;
                    return Be(this, function (lA) {
                      switch (lA.label) {
                        case 0:
                          if (d.type !== 0) return [3, 5];
                          (U = void 0), (y = d.url), (lA.label = 1);
                        case 1:
                          return (
                            lA.trys.push([1, 3, , 4]),
                            [4, B.context.cache.match(y)]
                          );
                        case 2:
                          return (U = lA.sent()), [3, 4];
                        case 3:
                          return (
                            lA.sent(),
                            B.context.logger.error(
                              "Error loading background-image " + y
                            ),
                            [3, 4]
                          );
                        case 4:
                          return (
                            U &&
                              ((L = kc(i, r, [
                                U.width,
                                U.height,
                                U.width / U.height,
                              ])),
                              (FA = L[0]),
                              (b = L[1]),
                              (N = L[2]),
                              (fA = L[3]),
                              (KA = L[4]),
                              (eA = B.ctx.createPattern(
                                B.resizeImage(U, fA, KA),
                                "repeat"
                              )),
                              B.renderRepeat(FA, eA, b, N)),
                            [3, 6]
                          );
                        case 5:
                          yv(d)
                            ? ((I = kc(i, r, [null, null, null])),
                              (FA = I[0]),
                              (b = I[1]),
                              (N = I[2]),
                              (fA = I[3]),
                              (KA = I[4]),
                              (R = Uv(d.angle, fA, KA)),
                              (AA = R[0]),
                              (_ = R[1]),
                              (X = R[2]),
                              (aA = R[3]),
                              (z = R[4]),
                              (J = document.createElement("canvas")),
                              (J.width = fA),
                              (J.height = KA),
                              (M = J.getContext("2d")),
                              (V = M.createLinearGradient(_, aA, X, z)),
                              ih(d.stops, AA).forEach(function (gA) {
                                return V.addColorStop(gA.stop, te(gA.color));
                              }),
                              (M.fillStyle = V),
                              M.fillRect(0, 0, fA, KA),
                              fA > 0 &&
                                KA > 0 &&
                                ((eA = B.ctx.createPattern(J, "repeat")),
                                B.renderRepeat(FA, eA, b, N)))
                            : mv(d) &&
                              ((W = kc(i, r, [null, null, null])),
                              (FA = W[0]),
                              (xA = W[1]),
                              (HA = W[2]),
                              (fA = W[3]),
                              (KA = W[4]),
                              (JA =
                                d.position.length === 0 ? [FB] : d.position),
                              (b = OA(JA[0], fA)),
                              (N = OA(JA[JA.length - 1], KA)),
                              (P = dv(d, b, N, fA, KA)),
                              (sA = P[0]),
                              (oA = P[1]),
                              sA > 0 &&
                                oA > 0 &&
                                ((v = B.ctx.createRadialGradient(
                                  xA + b,
                                  HA + N,
                                  0,
                                  xA + b,
                                  HA + N,
                                  sA
                                )),
                                ih(d.stops, sA * 2).forEach(function (gA) {
                                  return v.addColorStop(gA.stop, te(gA.color));
                                }),
                                B.path(FA),
                                (B.ctx.fillStyle = v),
                                sA !== oA
                                  ? ((x = i.bounds.left + 0.5 * i.bounds.width),
                                    (G = i.bounds.top + 0.5 * i.bounds.height),
                                    (Z = oA / sA),
                                    (tA = 1 / Z),
                                    B.ctx.save(),
                                    B.ctx.translate(x, G),
                                    B.ctx.transform(1, 0, 0, Z, 0, 0),
                                    B.ctx.translate(-x, -G),
                                    B.ctx.fillRect(
                                      xA,
                                      tA * (HA - G) + G,
                                      fA,
                                      KA * tA
                                    ),
                                    B.ctx.restore())
                                  : B.ctx.fill())),
                            (lA.label = 6);
                        case 6:
                          return r--, [2];
                      }
                    });
                  }),
                  (B = this),
                  (o = 0),
                  (h = i.styles.backgroundImage.slice(0).reverse()),
                  (w.label = 1);
              case 1:
                return o < h.length ? ((g = h[o]), [5, c(g)]) : [3, 4];
              case 2:
                w.sent(), (w.label = 3);
              case 3:
                return o++, [3, 1];
              case 4:
                return [2];
            }
          });
        });
      }),
      (n.prototype.renderSolidBorder = function (i, r, c) {
        return Qe(this, void 0, void 0, function () {
          return Be(this, function (B) {
            return (
              this.path(Rh(c, r)),
              (this.ctx.fillStyle = te(i)),
              this.ctx.fill(),
              [2]
            );
          });
        });
      }),
      (n.prototype.renderDoubleBorder = function (i, r, c, B) {
        return Qe(this, void 0, void 0, function () {
          var o, h;
          return Be(this, function (g) {
            switch (g.label) {
              case 0:
                return r < 3 ? [4, this.renderSolidBorder(i, c, B)] : [3, 2];
              case 1:
                return g.sent(), [2];
              case 2:
                return (
                  (o = Sy(B, c)),
                  this.path(o),
                  (this.ctx.fillStyle = te(i)),
                  this.ctx.fill(),
                  (h = by(B, c)),
                  this.path(h),
                  this.ctx.fill(),
                  [2]
                );
            }
          });
        });
      }),
      (n.prototype.renderNodeBackgroundAndBorders = function (i) {
        return Qe(this, void 0, void 0, function () {
          var r,
            c,
            B,
            o,
            h,
            g,
            w,
            d,
            U = this;
          return Be(this, function (y) {
            switch (y.label) {
              case 0:
                return (
                  this.applyEffects(i.getEffects(2)),
                  (r = i.container.styles),
                  (c = !sa(r.backgroundColor) || r.backgroundImage.length),
                  (B = [
                    {
                      style: r.borderTopStyle,
                      color: r.borderTopColor,
                      width: r.borderTopWidth,
                    },
                    {
                      style: r.borderRightStyle,
                      color: r.borderRightColor,
                      width: r.borderRightWidth,
                    },
                    {
                      style: r.borderBottomStyle,
                      color: r.borderBottomColor,
                      width: r.borderBottomWidth,
                    },
                    {
                      style: r.borderLeftStyle,
                      color: r.borderLeftColor,
                      width: r.borderLeftWidth,
                    },
                  ]),
                  (o = Gy(pn(r.backgroundClip, 0), i.curves)),
                  c || r.boxShadow.length
                    ? (this.ctx.save(),
                      this.path(o),
                      this.ctx.clip(),
                      sa(r.backgroundColor) ||
                        ((this.ctx.fillStyle = te(r.backgroundColor)),
                        this.ctx.fill()),
                      [4, this.renderBackgroundImage(i.container)])
                    : [3, 2]
                );
              case 1:
                y.sent(),
                  this.ctx.restore(),
                  r.boxShadow
                    .slice(0)
                    .reverse()
                    .forEach(function (L) {
                      U.ctx.save();
                      var I = Zi(i.curves),
                        R = L.inset ? 0 : My,
                        AA = Hy(
                          I,
                          -R + (L.inset ? 1 : -1) * L.spread.number,
                          (L.inset ? 1 : -1) * L.spread.number,
                          L.spread.number * (L.inset ? -2 : 2),
                          L.spread.number * (L.inset ? -2 : 2)
                        );
                      L.inset
                        ? (U.path(I), U.ctx.clip(), U.mask(AA))
                        : (U.mask(I), U.ctx.clip(), U.path(AA)),
                        (U.ctx.shadowOffsetX = L.offsetX.number + R),
                        (U.ctx.shadowOffsetY = L.offsetY.number),
                        (U.ctx.shadowColor = te(L.color)),
                        (U.ctx.shadowBlur = L.blur.number),
                        (U.ctx.fillStyle = L.inset
                          ? te(L.color)
                          : "rgba(0,0,0,1)"),
                        U.ctx.fill(),
                        U.ctx.restore();
                    }),
                  (y.label = 2);
              case 2:
                (h = 0), (g = 0), (w = B), (y.label = 3);
              case 3:
                return g < w.length
                  ? ((d = w[g]),
                    d.style !== 0 && !sa(d.color) && d.width > 0
                      ? d.style !== 2
                        ? [3, 5]
                        : [
                            4,
                            this.renderDashedDottedBorder(
                              d.color,
                              d.width,
                              h,
                              i.curves,
                              2
                            ),
                          ]
                      : [3, 11])
                  : [3, 13];
              case 4:
                return y.sent(), [3, 11];
              case 5:
                return d.style !== 3
                  ? [3, 7]
                  : [
                      4,
                      this.renderDashedDottedBorder(
                        d.color,
                        d.width,
                        h,
                        i.curves,
                        3
                      ),
                    ];
              case 6:
                return y.sent(), [3, 11];
              case 7:
                return d.style !== 4
                  ? [3, 9]
                  : [4, this.renderDoubleBorder(d.color, d.width, h, i.curves)];
              case 8:
                return y.sent(), [3, 11];
              case 9:
                return [4, this.renderSolidBorder(d.color, h, i.curves)];
              case 10:
                y.sent(), (y.label = 11);
              case 11:
                h++, (y.label = 12);
              case 12:
                return g++, [3, 3];
              case 13:
                return [2];
            }
          });
        });
      }),
      (n.prototype.renderDashedDottedBorder = function (i, r, c, B, o) {
        return Qe(this, void 0, void 0, function () {
          var h, g, w, d, U, y, L, I, R, AA, _, X, aA, z, J, M, J, M;
          return Be(this, function (V) {
            return (
              this.ctx.save(),
              (h = Ty(B, c)),
              (g = Rh(B, c)),
              o === 2 && (this.path(g), this.ctx.clip()),
              Ze(g[0])
                ? ((w = g[0].start.x), (d = g[0].start.y))
                : ((w = g[0].x), (d = g[0].y)),
              Ze(g[1])
                ? ((U = g[1].end.x), (y = g[1].end.y))
                : ((U = g[1].x), (y = g[1].y)),
              c === 0 || c === 2
                ? (L = Math.abs(w - U))
                : (L = Math.abs(d - y)),
              this.ctx.beginPath(),
              o === 3 ? this.formatPath(h) : this.formatPath(g.slice(0, 2)),
              (I = r < 3 ? r * 3 : r * 2),
              (R = r < 3 ? r * 2 : r),
              o === 3 && ((I = r), (R = r)),
              (AA = !0),
              L <= I * 2
                ? (AA = !1)
                : L <= I * 2 + R
                ? ((_ = L / (2 * I + R)), (I *= _), (R *= _))
                : ((X = Math.floor((L + R) / (I + R))),
                  (aA = (L - X * I) / (X - 1)),
                  (z = (L - (X + 1) * I) / X),
                  (R = z <= 0 || Math.abs(R - aA) < Math.abs(R - z) ? aA : z)),
              AA &&
                (o === 3
                  ? this.ctx.setLineDash([0, I + R])
                  : this.ctx.setLineDash([I, R])),
              o === 3
                ? ((this.ctx.lineCap = "round"), (this.ctx.lineWidth = r))
                : (this.ctx.lineWidth = r * 2 + 1.1),
              (this.ctx.strokeStyle = te(i)),
              this.ctx.stroke(),
              this.ctx.setLineDash([]),
              o === 2 &&
                (Ze(g[0]) &&
                  ((J = g[3]),
                  (M = g[0]),
                  this.ctx.beginPath(),
                  this.formatPath([
                    new Y(J.end.x, J.end.y),
                    new Y(M.start.x, M.start.y),
                  ]),
                  this.ctx.stroke()),
                Ze(g[1]) &&
                  ((J = g[1]),
                  (M = g[2]),
                  this.ctx.beginPath(),
                  this.formatPath([
                    new Y(J.end.x, J.end.y),
                    new Y(M.start.x, M.start.y),
                  ]),
                  this.ctx.stroke())),
              this.ctx.restore(),
              [2]
            );
          });
        });
      }),
      (n.prototype.render = function (i) {
        return Qe(this, void 0, void 0, function () {
          var r;
          return Be(this, function (c) {
            switch (c.label) {
              case 0:
                return (
                  this.options.backgroundColor &&
                    ((this.ctx.fillStyle = te(this.options.backgroundColor)),
                    this.ctx.fillRect(
                      this.options.x,
                      this.options.y,
                      this.options.width,
                      this.options.height
                    )),
                  (r = py(i)),
                  [4, this.renderStack(r)]
                );
              case 1:
                return c.sent(), this.applyEffects([]), [2, this.canvas];
            }
          });
        });
      }),
      n
    );
  })(X0),
  Ny = function (l) {
    return l instanceof H0 || l instanceof m0
      ? !0
      : l instanceof HB && l.type !== zi && l.type !== Xi;
  },
  Gy = function (l, n) {
    switch (l) {
      case 0:
        return Zi(n);
      case 2:
        return vy(n);
      case 1:
      default:
        return ji(n);
    }
  },
  _y = function (l) {
    switch (l) {
      case 1:
        return "center";
      case 2:
        return "right";
      case 0:
      default:
        return "left";
    }
  },
  Vy = ["-apple-system", "system-ui"],
  Xy = function (l) {
    return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent)
      ? l.filter(function (n) {
          return Vy.indexOf(n) === -1;
        })
      : l;
  },
  zy = (function (l) {
    At(n, l);
    function n(i, r) {
      var c = l.call(this, i, r) || this;
      return (
        (c.canvas = r.canvas ? r.canvas : document.createElement("canvas")),
        (c.ctx = c.canvas.getContext("2d")),
        (c.options = r),
        (c.canvas.width = Math.floor(r.width * r.scale)),
        (c.canvas.height = Math.floor(r.height * r.scale)),
        (c.canvas.style.width = r.width + "px"),
        (c.canvas.style.height = r.height + "px"),
        c.ctx.scale(c.options.scale, c.options.scale),
        c.ctx.translate(-r.x, -r.y),
        c.context.logger.debug(
          "EXPERIMENTAL ForeignObject renderer initialized (" +
            r.width +
            "x" +
            r.height +
            " at " +
            r.x +
            "," +
            r.y +
            ") with scale " +
            r.scale
        ),
        c
      );
    }
    return (
      (n.prototype.render = function (i) {
        return Qe(this, void 0, void 0, function () {
          var r, c;
          return Be(this, function (B) {
            switch (B.label) {
              case 0:
                return (
                  (r = oB(
                    this.options.width * this.options.scale,
                    this.options.height * this.options.scale,
                    this.options.scale,
                    this.options.scale,
                    i
                  )),
                  [4, Yy(r)]
                );
              case 1:
                return (
                  (c = B.sent()),
                  this.options.backgroundColor &&
                    ((this.ctx.fillStyle = te(this.options.backgroundColor)),
                    this.ctx.fillRect(
                      0,
                      0,
                      this.options.width * this.options.scale,
                      this.options.height * this.options.scale
                    )),
                  this.ctx.drawImage(
                    c,
                    -this.options.x * this.options.scale,
                    -this.options.y * this.options.scale
                  ),
                  [2, this.canvas]
                );
            }
          });
        });
      }),
      n
    );
  })(X0),
  Yy = function (l) {
    return new Promise(function (n, i) {
      var r = new Image();
      (r.onload = function () {
        n(r);
      }),
        (r.onerror = i),
        (r.src =
          "data:image/svg+xml;charset=utf-8," +
          encodeURIComponent(new XMLSerializer().serializeToString(l)));
    });
  },
  Jy = (function () {
    function l(n) {
      var i = n.id,
        r = n.enabled;
      (this.id = i), (this.enabled = r), (this.start = Date.now());
    }
    return (
      (l.prototype.debug = function () {
        for (var n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i];
        this.enabled &&
          (typeof window < "u" &&
          window.console &&
          typeof console.debug == "function"
            ? console.debug.apply(
                console,
                oi([this.id, this.getTime() + "ms"], n)
              )
            : this.info.apply(this, n));
      }),
      (l.prototype.getTime = function () {
        return Date.now() - this.start;
      }),
      (l.prototype.info = function () {
        for (var n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i];
        this.enabled &&
          typeof window < "u" &&
          window.console &&
          typeof console.info == "function" &&
          console.info.apply(console, oi([this.id, this.getTime() + "ms"], n));
      }),
      (l.prototype.warn = function () {
        for (var n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i];
        this.enabled &&
          (typeof window < "u" &&
          window.console &&
          typeof console.warn == "function"
            ? console.warn.apply(
                console,
                oi([this.id, this.getTime() + "ms"], n)
              )
            : this.info.apply(this, n));
      }),
      (l.prototype.error = function () {
        for (var n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i];
        this.enabled &&
          (typeof window < "u" &&
          window.console &&
          typeof console.error == "function"
            ? console.error.apply(
                console,
                oi([this.id, this.getTime() + "ms"], n)
              )
            : this.info.apply(this, n));
      }),
      (l.instances = {}),
      l
    );
  })(),
  Zy = (function () {
    function l(n, i) {
      var r;
      (this.windowBounds = i),
        (this.instanceName = "#" + l.instanceCount++),
        (this.logger = new Jy({ id: this.instanceName, enabled: n.logging })),
        (this.cache =
          (r = n.cache) !== null && r !== void 0 ? r : new oy(this, n));
    }
    return (l.instanceCount = 1), l;
  })(),
  jy = function (l, n) {
    return n === void 0 && (n = {}), qy(l, n);
  };
typeof window < "u" && M0.setContext(window);
var qy = function (l, n) {
    return Qe(void 0, void 0, void 0, function () {
      var i,
        r,
        c,
        B,
        o,
        h,
        g,
        w,
        d,
        U,
        y,
        L,
        I,
        R,
        AA,
        _,
        X,
        aA,
        z,
        J,
        V,
        M,
        V,
        eA,
        W,
        FA,
        xA,
        HA,
        fA,
        KA,
        JA,
        b,
        N,
        P,
        sA,
        oA,
        v,
        x,
        G,
        Z;
      return Be(this, function (tA) {
        switch (tA.label) {
          case 0:
            if (!l || typeof l != "object")
              return [
                2,
                Promise.reject("Invalid element provided as first argument"),
              ];
            if (((i = l.ownerDocument), !i))
              throw new Error("Element is not attached to a Document");
            if (((r = i.defaultView), !r))
              throw new Error("Document is not attached to a Window");
            return (
              (c = {
                allowTaint:
                  (eA = n.allowTaint) !== null && eA !== void 0 ? eA : !1,
                imageTimeout:
                  (W = n.imageTimeout) !== null && W !== void 0 ? W : 15e3,
                proxy: n.proxy,
                useCORS: (FA = n.useCORS) !== null && FA !== void 0 ? FA : !1,
              }),
              (B = Pc(
                {
                  logging: (xA = n.logging) !== null && xA !== void 0 ? xA : !0,
                  cache: n.cache,
                },
                c
              )),
              (o = {
                windowWidth:
                  (HA = n.windowWidth) !== null && HA !== void 0
                    ? HA
                    : r.innerWidth,
                windowHeight:
                  (fA = n.windowHeight) !== null && fA !== void 0
                    ? fA
                    : r.innerHeight,
                scrollX:
                  (KA = n.scrollX) !== null && KA !== void 0
                    ? KA
                    : r.pageXOffset,
                scrollY:
                  (JA = n.scrollY) !== null && JA !== void 0
                    ? JA
                    : r.pageYOffset,
              }),
              (h = new Tt(o.scrollX, o.scrollY, o.windowWidth, o.windowHeight)),
              (g = new Zy(B, h)),
              (w =
                (b = n.foreignObjectRendering) !== null && b !== void 0
                  ? b
                  : !1),
              (d = {
                allowTaint:
                  (N = n.allowTaint) !== null && N !== void 0 ? N : !1,
                onclone: n.onclone,
                ignoreElements: n.ignoreElements,
                inlineImages: w,
                copyStyles: w,
              }),
              g.logger.debug(
                "Starting document clone with size " +
                  h.width +
                  "x" +
                  h.height +
                  " scrolled to " +
                  -h.left +
                  "," +
                  -h.top
              ),
              (U = new Ih(g, l, d)),
              (y = U.clonedReferenceElement),
              y
                ? [4, U.toIFrame(i, h)]
                : [2, Promise.reject("Unable to find element in cloned iframe")]
            );
          case 1:
            return (
              (L = tA.sent()),
              (I = pB(y) || kE(y) ? HU(y.ownerDocument) : ki(g, y)),
              (R = I.width),
              (AA = I.height),
              (_ = I.left),
              (X = I.top),
              (aA = ky(g, y, n.backgroundColor)),
              (z = {
                canvas: n.canvas,
                backgroundColor: aA,
                scale:
                  (sA =
                    (P = n.scale) !== null && P !== void 0
                      ? P
                      : r.devicePixelRatio) !== null && sA !== void 0
                    ? sA
                    : 1,
                x: ((oA = n.x) !== null && oA !== void 0 ? oA : 0) + _,
                y: ((v = n.y) !== null && v !== void 0 ? v : 0) + X,
                width:
                  (x = n.width) !== null && x !== void 0 ? x : Math.ceil(R),
                height:
                  (G = n.height) !== null && G !== void 0 ? G : Math.ceil(AA),
              }),
              w
                ? (g.logger.debug(
                    "Document cloned, using foreign object rendering"
                  ),
                  (V = new zy(g, z)),
                  [4, V.render(y)])
                : [3, 3]
            );
          case 2:
            return (J = tA.sent()), [3, 5];
          case 3:
            return (
              g.logger.debug(
                "Document cloned, element located at " +
                  _ +
                  "," +
                  X +
                  " with size " +
                  R +
                  "x" +
                  AA +
                  " using computed rendering"
              ),
              g.logger.debug("Starting DOM parsing"),
              (M = b0(g, y)),
              aA === M.styles.backgroundColor &&
                (M.styles.backgroundColor = bt.TRANSPARENT),
              g.logger.debug(
                "Starting renderer for element at " +
                  z.x +
                  "," +
                  z.y +
                  " with size " +
                  z.width +
                  "x" +
                  z.height
              ),
              (V = new Ry(g, z)),
              [4, V.render(M)]
            );
          case 4:
            (J = tA.sent()), (tA.label = 5);
          case 5:
            return (
              (!((Z = n.removeContainer) !== null && Z !== void 0) || Z) &&
                (Ih.destroy(L) ||
                  g.logger.error(
                    "Cannot detach cloned iframe as it is not in the DOM anymore"
                  )),
              g.logger.debug("Finished rendering"),
              [2, J]
            );
        }
      });
    });
  },
  ky = function (l, n, i) {
    var r = n.ownerDocument,
      c = r.documentElement
        ? Gl(l, getComputedStyle(r.documentElement).backgroundColor)
        : bt.TRANSPARENT,
      B = r.body
        ? Gl(l, getComputedStyle(r.body).backgroundColor)
        : bt.TRANSPARENT,
      o =
        typeof i == "string"
          ? Gl(l, i)
          : i === null
          ? bt.TRANSPARENT
          : 4294967295;
    return n === r.documentElement ? (sa(c) ? (sa(B) ? o : B) : c) : o;
  };
const Wy = () => {
    const [l, n] = Ye.useState("START"),
      [i, r] = Ye.useState(0),
      [c, B] = Ye.useState([]),
      [o, h] = Ye.useState(null),
      [g, w] = Ye.useState(null),
      [d, U] = Ye.useState(null);
    Ye.useEffect(() => {
      const J = new URLSearchParams(window.location.search).get("result");
      J && Ht[J] && (w(J), n("RESULT"));
    }, []);
    const y = () => {
        try {
          window.history.replaceState({}, "", window.location.pathname);
        } catch {}
        n("PROGRESS"), r(0), B([]), h(null), w(null), U(null);
      },
      L = () => {
        try {
          window.history.replaceState({}, "", window.location.pathname);
        } catch {}
        n("START"), r(0), B([]), h(null), w(null), U(null);
      },
      I = () => {
        i > 0 && (B((z) => z.slice(0, -1)), r((z) => z - 1), h(null));
      },
      R = (z) => {
        h(z),
          i < pl.length - 1 &&
            setTimeout(() => {
              B((J) => [...J, z]), r((J) => J + 1), h(null);
            }, 150);
      },
      AA = () => {
        o !== null && (B((z) => [...z, o]), n("RESULT"));
      },
      _ = Ye.useCallback(() => {
        if (g && c.length === 0) return Ht[g];
        if (c.length < pl.length) return Ht.RAT;
        const z = {};
        Object.keys(Ht).forEach((M) => (z[M] = 0)),
          c.forEach((M, V) => {
            var W;
            const eA = (W = pl[V]) == null ? void 0 : W.choices[M];
            eA &&
              Object.entries(eA.scores).forEach(([FA, xA]) => {
                z[FA] = (z[FA] || 0) + xA;
              });
          });
        const J = Object.keys(Ht).reduce((M, V) => (z[M] >= z[V] ? M : V));
        return Ht[J];
      }, [c, g]),
      X = Ye.useMemo(
        () => (l === "RESULT" ? _() : l === "VIEW_OTHER" && g ? Ht[g] : null),
        [l, _, g]
      ),
      aA = (z, J) => {
        const M = Object.keys(Ht).find((V) => Ht[V].name === z);
        M &&
          (w(M),
          U(J),
          n("VIEW_OTHER"),
          window.scrollTo({ top: 0, behavior: "smooth" }));
      };
    return O.jsx("div", {
      className:
        "min-h-screen flex items-center justify-center p-4 bg-[#fdfbf7]",
      children: O.jsxs("div", {
        className: `max-w-md w-full bg-white rounded-3xl shadow-xl border border-slate-100 flex flex-col min-h-[680px] transition-all duration-300 ${
          l === "PROGRESS" ? "overflow-hidden" : "overflow-visible"
        }`,
        children: [
          l === "START" && O.jsx(Py, { onStart: y }),
          l === "PROGRESS" &&
            O.jsx($y, {
              currentStep: i,
              totalSteps: pl.length,
              question: pl[i],
              onChoice: R,
              onBack: I,
              selectedChoice: o,
              onShowResult: AA,
            }),
          (l === "RESULT" || l === "VIEW_OTHER") &&
            X &&
            O.jsx(em, {
              animal: X,
              onRestart: L,
              onViewAnimal: aA,
              isBrowsing: l === "VIEW_OTHER",
              viewingContext: d,
              onGoBackToResult: () => {
                n("RESULT"), U(null);
              },
            }),
        ],
      }),
    });
  },
  Py = ({ onStart: l }) =>
    O.jsxs("div", {
      className:
        "p-10 text-center fade-in flex flex-col items-center justify-center flex-grow",
      children: [
        O.jsxs("div", {
          className: "mb-8 relative",
          children: [
            O.jsx("div", {
              className:
                "absolute -inset-4 bg-orange-100 rounded-full blur-xl opacity-50 animate-pulse",
            }),
            O.jsx("div", {
              className:
                "relative p-6 bg-white rounded-full shadow-inner border-2 border-orange-50",
              children: O.jsx("span", {
                className: "text-7xl",
                children: "🏮",
              }),
            }),
          ],
        }),
        O.jsxs("h1", {
          className: "text-2xl font-bold mb-1 text-slate-800 leading-tight",
          children: ["내 성격과 가장 가까운", O.jsx("br", {}), "띠는 뭘까?"],
        }),
        O.jsx("p", {
          className:
            "text-orange-500 font-bold mb-8 text-sm tracking-widest uppercase",
          children: "총 18문항",
        }),
        O.jsxs("div", {
          className:
            "bg-slate-50 p-6 rounded-2xl mb-10 text-sm leading-relaxed text-slate-600 text-left border border-slate-100",
          children: [
            O.jsx("p", {
              className: "mb-3 font-bold text-slate-800",
              children: "아래 질문에는 정답이 없습니다.",
            }),
            O.jsx("p", {
              children:
                "실제 상황에서 내가 더 자주 보이는 행동을 떠올리며 가장 가까운 선택지를 골라주세요.",
            }),
          ],
        }),
        O.jsx("button", {
          onClick: l,
          className:
            "w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-5 rounded-2xl transition-all active:scale-95 shadow-lg shadow-orange-200 text-lg",
          children: "테스트 시작하기",
        }),
      ],
    }),
  $y = ({
    currentStep: l,
    totalSteps: n,
    question: i,
    onChoice: r,
    onBack: c,
    selectedChoice: B,
    onShowResult: o,
  }) => {
    if (!i) return null;
    const h = ((l + 1) / n) * 100;
    return O.jsxs("div", {
      className: "p-8 fade-in flex flex-col flex-grow",
      children: [
        O.jsxs("div", {
          className: "mb-8",
          children: [
            O.jsxs("div", {
              className: "flex justify-between items-center mb-3",
              children: [
                O.jsxs("button", {
                  onClick: c,
                  className: `text-slate-400 hover:text-slate-600 flex items-center gap-1 transition-colors ${
                    l === 0 ? "invisible" : ""
                  }`,
                  children: [
                    O.jsx("svg", {
                      className: "w-4 h-4",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: O.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M15 19l-7-7 7-7",
                      }),
                    }),
                    O.jsx("span", {
                      className: "text-xs font-bold",
                      children: "이전",
                    }),
                  ],
                }),
                O.jsxs("div", {
                  className: "text-right",
                  children: [
                    O.jsxs("span", {
                      className:
                        "text-xs font-bold text-orange-500 tracking-wider",
                      children: ["Q", l + 1],
                    }),
                    O.jsxs("span", {
                      className: "text-xs font-medium text-slate-300 ml-1",
                      children: ["/ ", n],
                    }),
                  ],
                }),
              ],
            }),
            O.jsx("div", {
              className:
                "w-full bg-slate-100 h-1.5 rounded-full overflow-hidden",
              children: O.jsx("div", {
                className:
                  "bg-orange-500 h-full transition-all duration-500 ease-out",
                style: { width: `${h}%` },
              }),
            }),
          ],
        }),
        O.jsxs("div", {
          className: "flex-grow",
          children: [
            O.jsx("h2", {
              className:
                "text-xl font-bold mb-8 text-slate-800 leading-tight min-h-[3rem]",
              children: i.question,
            }),
            O.jsx("div", {
              className: "space-y-3",
              children: i.choices.map((g, w) =>
                O.jsx(
                  "button",
                  {
                    onClick: () => r(w),
                    className: `w-full text-left p-5 border-2 rounded-2xl transition-all group active:scale-[0.98] ${
                      B === w
                        ? "border-orange-500 bg-orange-50 ring-2 ring-orange-100 shadow-sm"
                        : "border-slate-100 hover:border-orange-200 hover:bg-slate-50"
                    }`,
                    children: O.jsx("span", {
                      className: `text-sm font-semibold leading-relaxed ${
                        B === w ? "text-orange-700" : "text-slate-700"
                      }`,
                      children: g.text,
                    }),
                  },
                  w
                )
              ),
            }),
          ],
        }),
        l === n - 1 &&
          B !== null &&
          O.jsx("button", {
            onClick: o,
            className:
              "mt-8 w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-all animate-bounce shadow-lg shadow-orange-200 text-lg",
            children: "결과 보기",
          }),
      ],
    });
  },
  Am = () =>
    O.jsx("div", {
      "data-html2canvas-ignore": "true",
      className: "my-8 px-2",
      children: O.jsxs("a", {
        href: "https://link.coupang.com/a/dHytTn",
        target: "_blank",
        rel: "noopener noreferrer",
        className:
          "block bg-white border border-slate-100 rounded-2xl overflow-hidden transition-all hover:border-[#00b01b] group shadow-sm",
        children: [
          O.jsxs("div", {
            className: "flex items-center p-3 gap-4",
            children: [
              O.jsx("div", {
                className:
                  "w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-slate-50 border border-slate-100",
                children: O.jsx("img", {
                  src: "https://ssumk1n.github.io/animalTest/assets/animalImg.png",
                  alt: "Rocket Fresh",
                  className:
                    "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500",
                }),
              }),
              O.jsxs("div", {
                className: "flex-grow min-w-0",
                children: [
                  O.jsxs("div", {
                    className: "flex items-center gap-1.5 mb-1",
                    children: [
                      O.jsx("span", {
                        className:
                          "text-[8px] font-bold text-white bg-[#00b01b] px-1.5 py-0.5 rounded leading-none",
                        children: "로켓프레시",
                      }),
                      O.jsx("span", {
                        className: "text-[8px] font-bold text-slate-300",
                        children: "AD",
                      }),
                    ],
                  }),
                  O.jsx("h3", {
                    className:
                      "text-slate-800 text-xs font-bold truncate leading-tight mb-0.5 group-hover:text-[#00b01b]",
                    children: "내일 아침 도착! 신선함 그대로",
                  }),
                  O.jsx("p", {
                    className:
                      "text-slate-500 text-[10px] leading-tight mb-1 truncate",
                    children: "무료배송 혜택과 최저가 혜택을 확인하세요.",
                  }),
                  O.jsxs("div", {
                    className:
                      "text-[10px] font-bold text-[#00b01b] flex items-center gap-1",
                    children: [
                      "장보러 가기",
                      " ",
                      O.jsx("svg", {
                        className:
                          "w-2.5 h-2.5 group-hover:translate-x-1 transition-transform",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: O.jsx("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "3",
                          d: "M9 5l7 7-7 7",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          O.jsx("div", {
            className:
              "bg-slate-50 py-1 px-3 text-[9px] text-slate-400 text-center border-t border-slate-50 leading-tight",
            children:
              '"이 포스팅은 쿠팡 파트너스 활동의 일환으로 일정액의 수수료를 제공받습니다."',
          }),
        ],
      }),
    }),
  em = ({
    animal: l,
    onRestart: n,
    onViewAnimal: i,
    isBrowsing: r,
    viewingContext: c,
    onGoBackToResult: B,
  }) => {
    const o = Ye.useRef(null),
      [h, g] = Ye.useState(!1),
      w = async () => {
        if (o.current) {
          g(!0);
          try {
            const y = await jy(o.current, {
                scale: 2,
                backgroundColor: "#fdfbf7",
                useCORS: !0,
                logging: !1,
                ignoreElements: (I) =>
                  I.hasAttribute("data-html2canvas-ignore"),
              }),
              L = document.createElement("a");
            (L.download = `zodiac_result_${l.name}.png`),
              (L.href = y.toDataURL("image/png")),
              L.click();
          } catch {
            alert("이미지 저장에 실패했습니다.");
          } finally {
            g(!1);
          }
        }
      },
      d = () => {
        const y = `${window.location.origin}${window.location.pathname}?result=${l.key}`;
        if (navigator.clipboard)
          navigator.clipboard
            .writeText(y)
            .then(() =>
              alert(
                "나의 결과 전용 링크가 복사되었습니다! 친구들에게 공유해보세요."
              )
            )
            .catch(() => alert("복사에 실패했습니다."));
        else {
          const L = document.createElement("textarea");
          (L.value = y),
            document.body.appendChild(L),
            L.select(),
            document.execCommand("copy"),
            document.body.removeChild(L),
            alert("나의 결과 전용 링크가 복사되었습니다!");
        }
      },
      U = r
        ? c === "BEST"
          ? "bg-blue-50/40"
          : "bg-red-50/40"
        : "bg-[#fdfbf7]";
    return O.jsxs("div", {
      className: `fade-in ${U} flex flex-col h-full rounded-3xl transition-colors duration-500`,
      children: [
        O.jsx("div", {
          className: `p-4 flex items-center justify-between sticky top-0 ${U} backdrop-blur-sm z-20 rounded-t-3xl`,
          children: r
            ? O.jsxs("button", {
                onClick: B,
                className:
                  "text-slate-400 hover:text-slate-600 flex items-center gap-1 font-bold text-xs",
                children: [
                  O.jsx("svg", {
                    className: "w-4 h-4",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: O.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                      d: "M15 19l-7-7 7-7",
                    }),
                  }),
                  "내 결과로 돌아가기",
                ],
              })
            : O.jsx("div", { className: "h-4" }),
        }),
        O.jsx("div", {
          className: "flex-grow overflow-y-auto custom-scrollbar",
          children: O.jsxs("div", {
            ref: o,
            className: "p-6 pt-2 pb-10",
            children: [
              O.jsx("div", {
                className: "text-center mb-8",
                children: O.jsxs("h1", {
                  className: "text-2xl font-bold text-slate-800",
                  children: [
                    r ? "" : "당신은 띠는 ",
                    " ",
                    O.jsxs("span", {
                      className: "text-orange-500",
                      children: ["[", l.name, "]"],
                    }),
                    "",
                  ],
                }),
              }),
              O.jsxs("div", {
                className: "relative mb-10 flex justify-center",
                children: [
                  O.jsx("div", {
                    className:
                      "w-36 h-36 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-orange-100 relative z-10",
                    children: O.jsx("span", {
                      className: "text-7xl",
                      children: l.symbol,
                    }),
                  }),
                  O.jsx("div", {
                    className:
                      "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-orange-100 rounded-full blur-3xl opacity-40",
                  }),
                ],
              }),
              O.jsx("div", {
                className: "grid grid-cols-3 gap-3 mb-8",
                children: [
                  { l: "음양", v: l.yinYang },
                  { l: "오행", v: l.element },
                  { l: "계절", v: l.season },
                ].map((y, L) =>
                  O.jsxs(
                    "div",
                    {
                      className:
                        "bg-white p-3 rounded-2xl shadow-sm text-center border border-slate-100",
                      children: [
                        O.jsx("div", {
                          className:
                            "text-[10px] text-slate-400 font-bold mb-1",
                          children: y.l,
                        }),
                        O.jsx("div", {
                          className: "text-sm font-bold text-slate-700",
                          children: y.v,
                        }),
                      ],
                    },
                    L
                  )
                ),
              }),
              O.jsxs("div", {
                className:
                  "bg-white rounded-3xl p-6 shadow-sm border border-slate-100 mb-8",
                children: [
                  O.jsx("p", {
                    className:
                      "text-slate-700 text-sm leading-relaxed mb-8 font-medium italic",
                    children: l.description,
                  }),
                  O.jsx("div", {
                    className: "space-y-4 mb-8",
                    children: l.traits.map((y, L) =>
                      O.jsxs(
                        "div",
                        {
                          className: "flex items-start gap-4",
                          children: [
                            O.jsx("div", {
                              className:
                                "w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5",
                              children: O.jsx("svg", {
                                className: "w-3 h-3 text-orange-500",
                                fill: "currentColor",
                                viewBox: "0 0 20 20",
                                children: O.jsx("path", {
                                  d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                }),
                              }),
                            }),
                            O.jsx("span", {
                              className:
                                "text-sm text-slate-600 leading-snug font-semibold",
                              children: y,
                            }),
                          ],
                        },
                        L
                      )
                    ),
                  }),
                  O.jsxs("div", {
                    className:
                      "relative pt-6 border-t border-slate-50 italic text-slate-500 text-sm text-center",
                    children: [
                      O.jsx("div", {
                        className:
                          "absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2",
                        children: O.jsx("span", {
                          className: "text-orange-200",
                          children: "✨",
                        }),
                      }),
                      '"',
                      l.worryMessage,
                      '"',
                    ],
                  }),
                ],
              }),
              O.jsxs("div", {
                className: "grid grid-cols-2 gap-4",
                children: [
                  O.jsxs("div", {
                    className: "space-y-3",
                    children: [
                      O.jsx("div", {
                        className:
                          "text-[10px] font-bold text-blue-500 tracking-widest uppercase ml-1",
                        children: "잘 맞는 띠",
                      }),
                      O.jsx("div", {
                        className: "flex flex-col gap-2",
                        children: l.bestMatches.map((y, L) =>
                          O.jsxs(
                            "button",
                            {
                              onClick: () => i(y, "BEST"),
                              className:
                                "text-sm font-bold text-slate-700 bg-white px-4 py-3 rounded-2xl border border-blue-100 shadow-sm hover:border-blue-400 transition-all text-left flex justify-between items-center group",
                              children: [
                                y,
                                O.jsx("svg", {
                                  className:
                                    "w-3 h-3 text-blue-300 group-hover:translate-x-1 transition-transform",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                  children: O.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                    d: "M9 5l7 7-7 7",
                                  }),
                                }),
                              ],
                            },
                            L
                          )
                        ),
                      }),
                    ],
                  }),
                  O.jsxs("div", {
                    className: "space-y-3",
                    children: [
                      O.jsx("div", {
                        className:
                          "text-[10px] font-bold text-red-400 tracking-widest uppercase ml-1",
                        children: "안 맞는 띠",
                      }),
                      O.jsx("div", {
                        className: "flex flex-col gap-2",
                        children: l.worstMatches.map((y, L) =>
                          O.jsxs(
                            "button",
                            {
                              onClick: () => i(y, "WORST"),
                              className:
                                "text-sm font-bold text-slate-700 bg-white px-4 py-3 rounded-2xl border border-red-100 shadow-sm hover:border-red-400 transition-all text-left flex justify-between items-center group",
                              children: [
                                y,
                                O.jsx("svg", {
                                  className:
                                    "w-3 h-3 text-red-200 group-hover:translate-x-1 transition-transform",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                  children: O.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                    d: "M9 5l7 7-7 7",
                                  }),
                                }),
                              ],
                            },
                            L
                          )
                        ),
                      }),
                    ],
                  }),
                ],
              }),
              O.jsx(Am, {}),
            ],
          }),
        }),
        O.jsxs("div", {
          className:
            "p-6 bg-white border-t border-slate-50 space-y-4 rounded-b-3xl",
          children: [
            O.jsxs("div", {
              className: "grid grid-cols-2 gap-3",
              children: [
                O.jsxs("button", {
                  onClick: w,
                  disabled: h,
                  className:
                    "flex-1 bg-white border border-slate-100 hover:border-orange-200 text-slate-800 font-bold py-4 rounded-2xl transition-all active:scale-95 flex items-center justify-center gap-2.5 shadow-sm",
                  children: [
                    h
                      ? O.jsx("span", {
                          className:
                            "w-5 h-5 border-2 border-orange-500 border-t-transparent rounded-full animate-spin",
                        })
                      : O.jsx("svg", {
                          className: "w-5 h-5 text-orange-500",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "2",
                          viewBox: "0 0 24 24",
                          children: O.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4",
                          }),
                        }),
                    O.jsx("span", {
                      className: "text-sm font-bold",
                      children: "저장",
                    }),
                  ],
                }),
                O.jsxs("button", {
                  onClick: d,
                  className:
                    "flex-1 bg-white border border-slate-100 hover:border-orange-200 text-slate-800 font-bold py-4 rounded-2xl transition-all active:scale-95 flex items-center justify-center gap-2.5 shadow-sm",
                  children: [
                    O.jsx("svg", {
                      className: "w-5 h-5 text-orange-500",
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: "2",
                      viewBox: "0 0 24 24",
                      children: O.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
                      }),
                    }),
                    O.jsx("span", {
                      className: "text-sm font-bold",
                      children: "공유하기",
                    }),
                  ],
                }),
              ],
            }),
            O.jsx("button", {
              onClick: n,
              className:
                "w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-5 rounded-2xl transition-all active:scale-95 shadow-lg shadow-orange-100 text-lg",
              children: "테스트 다시하기",
            }),
          ],
        }),
      ],
    });
  },
  z0 = document.getElementById("root");
if (!z0) throw new Error("Could not find root element to mount to");
const tm = mU.createRoot(z0);
tm.render(O.jsx(wU.StrictMode, { children: O.jsx(Wy, {}) }));
