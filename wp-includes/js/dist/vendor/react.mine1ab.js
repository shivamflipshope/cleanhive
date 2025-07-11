/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
!(function () {
  "use strict";
  var e, t;
  (e = this),
    (t = function (e) {
      function t(e, t, n) {
        (this.props = e),
          (this.context = t),
          (this.refs = F),
          (this.updater = n || O);
      }
      function n() {}
      function r(e, t, n) {
        (this.props = e),
          (this.context = t),
          (this.refs = F),
          (this.updater = n || O);
      }
      function o(e, t, n) {
        var r,
          o = {},
          u = null,
          a = null;
        if (null != t)
          for (r in (void 0 !== t.ref && (a = t.ref),
          void 0 !== t.key && (u = "" + t.key),
          t))
            U.call(t, r) && !q.hasOwnProperty(r) && (o[r] = t[r]);
        var i = arguments.length - 2;
        if (1 === i) o.children = n;
        else if (1 < i) {
          for (var l = Array(i), c = 0; c < i; c++) l[c] = arguments[c + 2];
          o.children = l;
        }
        if (e && e.defaultProps)
          for (r in (i = e.defaultProps)) void 0 === o[r] && (o[r] = i[r]);
        return {
          $$typeof: k,
          type: e,
          key: u,
          ref: a,
          props: o,
          _owner: V.current,
        };
      }
      function u(e) {
        return "object" == typeof e && null !== e && e.$$typeof === k;
      }
      function a(e, t) {
        return "object" == typeof e && null !== e && null != e.key
          ? (function (e) {
              var t = { "=": "=0", ":": "=2" };
              return (
                "$" +
                e.replace(/[=:]/g, function (e) {
                  return t[e];
                })
              );
            })("" + e.key)
          : t.toString(36);
      }
      function i(e, t, n, r, o) {
        var l = typeof e;
        ("undefined" !== l && "boolean" !== l) || (e = null);
        var c = !1;
        if (null === e) c = !0;
        else
          switch (l) {
            case "string":
            case "number":
              c = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case k:
                case w:
                  c = !0;
              }
          }
        if (c)
          return (
            (o = o((c = e))),
            (e = "" === r ? "." + a(c, 0) : r),
            D(o)
              ? ((n = ""),
                null != e && (n = e.replace(A, "%24%26/") + "/"),
                i(o, t, n, "", function (e) {
                  return e;
                }))
              : null != o &&
                (u(o) &&
                  (o = (function (e, t) {
                    return {
                      $$typeof: k,
                      type: e.type,
                      key: t,
                      ref: e.ref,
                      props: e.props,
                      _owner: e._owner,
                    };
                  })(
                    o,
                    n +
                      (!o.key || (c && c.key === o.key)
                        ? ""
                        : ("" + o.key).replace(A, "%24%26/") + "/") +
                      e
                  )),
                t.push(o)),
            1
          );
        if (((c = 0), (r = "" === r ? "." : r + ":"), D(e)))
          for (var f = 0; f < e.length; f++) {
            var s = r + a((l = e[f]), f);
            c += i(l, t, n, s, o);
          }
        else if (
          ((s = (function (e) {
            return null === e || "object" != typeof e
              ? null
              : "function" == typeof (e = (T && e[T]) || e["@@iterator"])
              ? e
              : null;
          })(e)),
          "function" == typeof s)
        )
          for (e = s.call(e), f = 0; !(l = e.next()).done; )
            c += i((l = l.value), t, n, (s = r + a(l, f++)), o);
        else if ("object" === l)
          throw (
            ((t = String(e)),
            Error(
              "Objects are not valid as a React child (found: " +
                ("[object Object]" === t
                  ? "object with keys {" + Object.keys(e).join(", ") + "}"
                  : t) +
                "). If you meant to render a collection of children, use an array instead."
            ))
          );
        return c;
      }
      function l(e, t, n) {
        if (null == e) return e;
        var r = [],
          o = 0;
        return (
          i(e, r, "", "", function (e) {
            return t.call(n, e, o++);
          }),
          r
        );
      }
      function c(e) {
        if (-1 === e._status) {
          var t = e._result;
          (t = t()).then(
            function (t) {
              (0 !== e._status && -1 !== e._status) ||
                ((e._status = 1), (e._result = t));
            },
            function (t) {
              (0 !== e._status && -1 !== e._status) ||
                ((e._status = 2), (e._result = t));
            }
          ),
            -1 === e._status && ((e._status = 0), (e._result = t));
        }
        if (1 === e._status) return e._result.default;
        throw e._result;
      }
      function f(e, t) {
        var n = e.length;
        e.push(t);
        e: for (; 0 < n; ) {
          var r = (n - 1) >>> 1,
            o = e[r];
          if (!(0 < y(o, t))) break e;
          (e[r] = t), (e[n] = o), (n = r);
        }
      }
      function s(e) {
        return 0 === e.length ? null : e[0];
      }
      function p(e) {
        if (0 === e.length) return null;
        var t = e[0],
          n = e.pop();
        if (n !== t) {
          e[0] = n;
          e: for (var r = 0, o = e.length, u = o >>> 1; r < u; ) {
            var a = 2 * (r + 1) - 1,
              i = e[a],
              l = a + 1,
              c = e[l];
            if (0 > y(i, n))
              l < o && 0 > y(c, i)
                ? ((e[r] = c), (e[l] = n), (r = l))
                : ((e[r] = i), (e[a] = n), (r = a));
            else {
              if (!(l < o && 0 > y(c, n))) break e;
              (e[r] = c), (e[l] = n), (r = l);
            }
          }
        }
        return t;
      }
      function y(e, t) {
        var n = e.sortIndex - t.sortIndex;
        return 0 !== n ? n : e.id - t.id;
      }
      function d(e) {
        for (var t = s(J); null !== t; ) {
          if (null === t.callback) p(J);
          else {
            if (!(t.startTime <= e)) break;
            p(J), (t.sortIndex = t.expirationTime), f(G, t);
          }
          t = s(J);
        }
      }
      function b(e) {
        if (((te = !1), d(e), !ee))
          if (null !== s(G)) (ee = !0), _(v);
          else {
            var t = s(J);
            null !== t && h(b, t.startTime - e);
          }
      }
      function v(e, t) {
        (ee = !1), te && ((te = !1), re(ie), (ie = -1)), (Z = !0);
        var n = X;
        try {
          for (
            d(t), Q = s(G);
            null !== Q && (!(Q.expirationTime > t) || (e && !m()));

          ) {
            var r = Q.callback;
            if ("function" == typeof r) {
              (Q.callback = null), (X = Q.priorityLevel);
              var o = r(Q.expirationTime <= t);
              (t = H()),
                "function" == typeof o ? (Q.callback = o) : Q === s(G) && p(G),
                d(t);
            } else p(G);
            Q = s(G);
          }
          if (null !== Q) var u = !0;
          else {
            var a = s(J);
            null !== a && h(b, a.startTime - t), (u = !1);
          }
          return u;
        } finally {
          (Q = null), (X = n), (Z = !1);
        }
      }
      function m() {
        return !(H() - ce < le);
      }
      function _(e) {
        (ae = e), ue || ((ue = !0), se());
      }
      function h(e, t) {
        ie = ne(function () {
          e(H());
        }, t);
      }
      function g(e) {
        throw Error("act(...) is not supported in production builds of React.");
      }
      var k = Symbol.for("react.element"),
        w = Symbol.for("react.portal"),
        S = Symbol.for("react.fragment"),
        x = Symbol.for("react.strict_mode"),
        C = Symbol.for("react.profiler"),
        E = Symbol.for("react.provider"),
        R = Symbol.for("react.context"),
        P = Symbol.for("react.forward_ref"),
        $ = Symbol.for("react.suspense"),
        I = Symbol.for("react.memo"),
        j = Symbol.for("react.lazy"),
        T = Symbol.iterator,
        O = {
          isMounted: function (e) {
            return !1;
          },
          enqueueForceUpdate: function (e, t, n) {},
          enqueueReplaceState: function (e, t, n, r) {},
          enqueueSetState: function (e, t, n, r) {},
        },
        L = Object.assign,
        F = {};
      (t.prototype.isReactComponent = {}),
        (t.prototype.setState = function (e, t) {
          if ("object" != typeof e && "function" != typeof e && null != e)
            throw Error(
              "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
            );
          this.updater.enqueueSetState(this, e, t, "setState");
        }),
        (t.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, "forceUpdate");
        }),
        (n.prototype = t.prototype);
      var M = (r.prototype = new n());
      (M.constructor = r), L(M, t.prototype), (M.isPureReactComponent = !0);
      var D = Array.isArray,
        U = Object.prototype.hasOwnProperty,
        V = { current: null },
        q = { key: !0, ref: !0, __self: !0, __source: !0 },
        A = /\/+/g,
        N = { current: null },
        B = { transition: null };
      if (
        "object" == typeof performance &&
        "function" == typeof performance.now
      )
        var z = performance,
          H = function () {
            return z.now();
          };
      else {
        var W = Date,
          Y = W.now();
        H = function () {
          return W.now() - Y;
        };
      }
      var G = [],
        J = [],
        K = 1,
        Q = null,
        X = 3,
        Z = !1,
        ee = !1,
        te = !1,
        ne = "function" == typeof setTimeout ? setTimeout : null,
        re = "function" == typeof clearTimeout ? clearTimeout : null,
        oe = "undefined" != typeof setImmediate ? setImmediate : null;
      "undefined" != typeof navigator &&
        void 0 !== navigator.scheduling &&
        void 0 !== navigator.scheduling.isInputPending &&
        navigator.scheduling.isInputPending.bind(navigator.scheduling);
      var ue = !1,
        ae = null,
        ie = -1,
        le = 5,
        ce = -1,
        fe = function () {
          if (null !== ae) {
            var e = H();
            ce = e;
            var t = !0;
            try {
              t = ae(!0, e);
            } finally {
              t ? se() : ((ue = !1), (ae = null));
            }
          } else ue = !1;
        };
      if ("function" == typeof oe)
        var se = function () {
          oe(fe);
        };
      else if ("undefined" != typeof MessageChannel) {
        var pe = (M = new MessageChannel()).port2;
        (M.port1.onmessage = fe),
          (se = function () {
            pe.postMessage(null);
          });
      } else
        se = function () {
          ne(fe, 0);
        };
      (M = {
        ReactCurrentDispatcher: N,
        ReactCurrentOwner: V,
        ReactCurrentBatchConfig: B,
        Scheduler: {
          __proto__: null,
          unstable_ImmediatePriority: 1,
          unstable_UserBlockingPriority: 2,
          unstable_NormalPriority: 3,
          unstable_IdlePriority: 5,
          unstable_LowPriority: 4,
          unstable_runWithPriority: function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = X;
            X = e;
            try {
              return t();
            } finally {
              X = n;
            }
          },
          unstable_next: function (e) {
            switch (X) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = X;
            }
            var n = X;
            X = t;
            try {
              return e();
            } finally {
              X = n;
            }
          },
          unstable_scheduleCallback: function (e, t, n) {
            var r = H();
            switch (
              ((n =
                "object" == typeof n &&
                null !== n &&
                "number" == typeof (n = n.delay) &&
                0 < n
                  ? r + n
                  : r),
              e)
            ) {
              case 1:
                var o = -1;
                break;
              case 2:
                o = 250;
                break;
              case 5:
                o = 1073741823;
                break;
              case 4:
                o = 1e4;
                break;
              default:
                o = 5e3;
            }
            return (
              (e = {
                id: K++,
                callback: t,
                priorityLevel: e,
                startTime: n,
                expirationTime: (o = n + o),
                sortIndex: -1,
              }),
              n > r
                ? ((e.sortIndex = n),
                  f(J, e),
                  null === s(G) &&
                    e === s(J) &&
                    (te ? (re(ie), (ie = -1)) : (te = !0), h(b, n - r)))
                : ((e.sortIndex = o), f(G, e), ee || Z || ((ee = !0), _(v))),
              e
            );
          },
          unstable_cancelCallback: function (e) {
            e.callback = null;
          },
          unstable_wrapCallback: function (e) {
            var t = X;
            return function () {
              var n = X;
              X = t;
              try {
                return e.apply(this, arguments);
              } finally {
                X = n;
              }
            };
          },
          unstable_getCurrentPriorityLevel: function () {
            return X;
          },
          unstable_shouldYield: m,
          unstable_requestPaint: function () {},
          unstable_continueExecution: function () {
            ee || Z || ((ee = !0), _(v));
          },
          unstable_pauseExecution: function () {},
          unstable_getFirstCallbackNode: function () {
            return s(G);
          },
          get unstable_now() {
            return H;
          },
          unstable_forceFrameRate: function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (le = 0 < e ? Math.floor(1e3 / e) : 5);
          },
          unstable_Profiling: null,
        },
      }),
        (e.Children = {
          map: l,
          forEach: function (e, t, n) {
            l(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              l(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              l(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!u(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
        (e.Component = t),
        (e.Fragment = S),
        (e.Profiler = C),
        (e.PureComponent = r),
        (e.StrictMode = x),
        (e.Suspense = $),
        (e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = M),
        (e.act = g),
        (e.cloneElement = function (e, t, n) {
          if (null == e)
            throw Error(
              "React.cloneElement(...): The argument must be a React element, but you passed " +
                e +
                "."
            );
          var r = L({}, e.props),
            o = e.key,
            u = e.ref,
            a = e._owner;
          if (null != t) {
            if (
              (void 0 !== t.ref && ((u = t.ref), (a = V.current)),
              void 0 !== t.key && (o = "" + t.key),
              e.type && e.type.defaultProps)
            )
              var i = e.type.defaultProps;
            for (l in t)
              U.call(t, l) &&
                !q.hasOwnProperty(l) &&
                (r[l] = void 0 === t[l] && void 0 !== i ? i[l] : t[l]);
          }
          var l = arguments.length - 2;
          if (1 === l) r.children = n;
          else if (1 < l) {
            i = Array(l);
            for (var c = 0; c < l; c++) i[c] = arguments[c + 2];
            r.children = i;
          }
          return {
            $$typeof: k,
            type: e.type,
            key: o,
            ref: u,
            props: r,
            _owner: a,
          };
        }),
        (e.createContext = function (e) {
          return (
            ((e = {
              $$typeof: R,
              _currentValue: e,
              _currentValue2: e,
              _threadCount: 0,
              Provider: null,
              Consumer: null,
              _defaultValue: null,
              _globalName: null,
            }).Provider = { $$typeof: E, _context: e }),
            (e.Consumer = e)
          );
        }),
        (e.createElement = o),
        (e.createFactory = function (e) {
          var t = o.bind(null, e);
          return (t.type = e), t;
        }),
        (e.createRef = function () {
          return { current: null };
        }),
        (e.forwardRef = function (e) {
          return { $$typeof: P, render: e };
        }),
        (e.isValidElement = u),
        (e.lazy = function (e) {
          return {
            $$typeof: j,
            _payload: { _status: -1, _result: e },
            _init: c,
          };
        }),
        (e.memo = function (e, t) {
          return { $$typeof: I, type: e, compare: void 0 === t ? null : t };
        }),
        (e.startTransition = function (e, t) {
          (t = B.transition), (B.transition = {});
          try {
            e();
          } finally {
            B.transition = t;
          }
        }),
        (e.unstable_act = g),
        (e.useCallback = function (e, t) {
          return N.current.useCallback(e, t);
        }),
        (e.useContext = function (e) {
          return N.current.useContext(e);
        }),
        (e.useDebugValue = function (e, t) {}),
        (e.useDeferredValue = function (e) {
          return N.current.useDeferredValue(e);
        }),
        (e.useEffect = function (e, t) {
          return N.current.useEffect(e, t);
        }),
        (e.useId = function () {
          return N.current.useId();
        }),
        (e.useImperativeHandle = function (e, t, n) {
          return N.current.useImperativeHandle(e, t, n);
        }),
        (e.useInsertionEffect = function (e, t) {
          return N.current.useInsertionEffect(e, t);
        }),
        (e.useLayoutEffect = function (e, t) {
          return N.current.useLayoutEffect(e, t);
        }),
        (e.useMemo = function (e, t) {
          return N.current.useMemo(e, t);
        }),
        (e.useReducer = function (e, t, n) {
          return N.current.useReducer(e, t, n);
        }),
        (e.useRef = function (e) {
          return N.current.useRef(e);
        }),
        (e.useState = function (e) {
          return N.current.useState(e);
        }),
        (e.useSyncExternalStore = function (e, t, n) {
          return N.current.useSyncExternalStore(e, t, n);
        }),
        (e.useTransition = function () {
          return N.current.useTransition();
        }),
        (e.version = "18.3.1");
    }),
    "object" == typeof exports && "undefined" != typeof module
      ? t(exports)
      : "function" == typeof define && define.amd
      ? define(["exports"], t)
      : t(((e = e || self).React = {}));
})();
