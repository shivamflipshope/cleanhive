(self.webpackChunkwebpackWcBlocksCartCheckoutFrontendJsonp =
  self.webpackChunkwebpackWcBlocksCartCheckoutFrontendJsonp || []).push([
  [3817],
  {
    3576: (e, t, r) => {
      "use strict";
      r.d(t, { S: () => m });
      var o = r(1609);
      if (/^(251|2895|7949)$/.test(r.j)) var n = r(7928);
      var s = r(5703),
        a = r(6087),
        c = r(4332),
        i = r(1e3),
        l = r(2807);
      const d = (e, t) => (e && t[e] ? t[e] : null),
        u = ({
          block: e,
          blockMap: t,
          blockWrapper: r,
          children: n,
          depth: m = 1,
        }) =>
          n && 0 !== n.length
            ? Array.from(n).map((n, p) => {
                const { blockName: h = "", ...g } = {
                    ...(n instanceof HTMLElement ? n.dataset : {}),
                    className:
                      n instanceof Element
                        ? null == n
                          ? void 0
                          : n.className
                        : "",
                  },
                  _ = `${e}_${m}_${p}`,
                  v = d(h, t);
                if (!v) {
                  const o = (0, c.Ay)(
                    (n instanceof Element &&
                      (null == n ? void 0 : n.outerHTML)) ||
                      (null == n ? void 0 : n.textContent) ||
                      ""
                  );
                  if ("string" == typeof o && o) return o;
                  if (!(0, a.isValidElement)(o)) return null;
                  if ("script" === (null == o ? void 0 : o.type)) return o;
                  const s = n.childNodes.length
                    ? u({
                        block: e,
                        blockMap: t,
                        children: n.childNodes,
                        depth: m + 1,
                        blockWrapper: r,
                      })
                    : void 0;
                  return s
                    ? (0, a.cloneElement)(
                        o,
                        { key: _, ...((null == o ? void 0 : o.props) || {}) },
                        s
                      )
                    : (0, a.cloneElement)(o, {
                        key: _,
                        ...((null == o ? void 0 : o.props) || {}),
                      });
                }
                const f = r || a.Fragment;
                return (0, o.createElement)(
                  a.Suspense,
                  {
                    key: `${e}_${m}_${p}_suspense`,
                    fallback: (0, o.createElement)("div", {
                      className: "wc-block-placeholder",
                    }),
                  },
                  (0, o.createElement)(
                    l.A,
                    {
                      text: `Unexpected error in: ${h}`,
                      showErrorBlock: s.CURRENT_USER_IS_ADMIN,
                    },
                    (0, o.createElement)(
                      f,
                      null,
                      (0, o.createElement)(
                        v,
                        { key: _, ...g },
                        u({
                          block: e,
                          blockMap: t,
                          children: n.childNodes,
                          depth: m + 1,
                          blockWrapper: r,
                        }),
                        ((e, t, r, n) => {
                          if (!(0, i.hasInnerBlocks)(e)) return null;
                          const c = r
                              ? Array.from(r)
                                  .map(
                                    (e) =>
                                      (e instanceof HTMLElement &&
                                        (null == e
                                          ? void 0
                                          : e.dataset.blockName)) ||
                                      null
                                  )
                                  .filter(Boolean)
                              : [],
                            u = (0, i.getRegisteredBlocks)(e).filter(
                              ({ blockName: e, force: t }) =>
                                !0 === t && !c.includes(e)
                            ),
                            m = n || a.Fragment;
                          return (0, o.createElement)(
                            a.Fragment,
                            null,
                            u.map(({ blockName: e, component: r }, n) => {
                              const a = r || d(e, t);
                              return a
                                ? (0, o.createElement)(
                                    l.A,
                                    {
                                      key: `${e}_blockerror`,
                                      text: `Unexpected error in: ${e}`,
                                      showErrorBlock: s.CURRENT_USER_IS_ADMIN,
                                    },
                                    (0, o.createElement)(
                                      m,
                                      null,
                                      (0, o.createElement)(a, {
                                        key: `${e}_forced_${n}`,
                                      })
                                    )
                                  )
                                : null;
                            })
                          );
                        })(h, t, n.childNodes, r)
                      )
                    )
                  )
                );
              })
            : null,
        m = ({
          Block: e,
          selector: t,
          blockName: r,
          getProps: o = () => ({}),
          blockMap: s,
          blockWrapper: a,
        }) =>
          (0, n.Fq)({
            Block: e,
            selector: t,
            getProps: (e, t) => {
              const n = u({
                block: r,
                blockMap: s,
                children: e.children || [],
                blockWrapper: a,
              });
              return { ...o(e, t), children: n };
            },
          });
    },
    2807: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => d });
      var o = r(2294),
        n = r(1609),
        s = r(6087),
        a = r(7723),
        c = r(2516);
      const i = ({
        imageUrl: e = `${c.sW}/block-error.svg`,
        header: t = (0, a.__)("Oops!", "woocommerce"),
        text: r = (0, a.__)(
          "There was an error loading the content.",
          "woocommerce"
        ),
        errorMessage: o,
        errorMessagePrefix: s = (0, a.__)("Error:", "woocommerce"),
        button: i,
        showErrorBlock: l = !0,
      }) =>
        l
          ? (0, n.createElement)(
              "div",
              { className: "wc-block-error wc-block-components-error" },
              e &&
                (0, n.createElement)("img", {
                  className:
                    "wc-block-error__image wc-block-components-error__image",
                  src: e,
                  alt: "",
                }),
              (0, n.createElement)(
                "div",
                {
                  className:
                    "wc-block-error__content wc-block-components-error__content",
                },
                t &&
                  (0, n.createElement)(
                    "p",
                    {
                      className:
                        "wc-block-error__header wc-block-components-error__header",
                    },
                    t
                  ),
                r &&
                  (0, n.createElement)(
                    "p",
                    {
                      className:
                        "wc-block-error__text wc-block-components-error__text",
                    },
                    r
                  ),
                o &&
                  (0, n.createElement)(
                    "p",
                    {
                      className:
                        "wc-block-error__message wc-block-components-error__message",
                    },
                    s ? s + " " : "",
                    o
                  ),
                i &&
                  (0, n.createElement)(
                    "p",
                    {
                      className:
                        "wc-block-error__button wc-block-components-error__button",
                    },
                    i
                  )
              )
            )
          : null;
      r(9407);
      class l extends s.Component {
        constructor(...e) {
          super(...e),
            (0, o.A)(this, "state", { errorMessage: "", hasError: !1 });
        }
        static getDerivedStateFromError(e) {
          return void 0 !== e.statusText && void 0 !== e.status
            ? {
                errorMessage: (0, n.createElement)(
                  n.Fragment,
                  null,
                  (0, n.createElement)("strong", null, e.status),
                  ": ",
                  e.statusText
                ),
                hasError: !0,
              }
            : { errorMessage: e.message, hasError: !0 };
        }
        render() {
          const {
              header: e,
              imageUrl: t,
              showErrorMessage: r = !0,
              showErrorBlock: o = !0,
              text: s,
              errorMessagePrefix: a,
              renderError: c,
              button: l,
            } = this.props,
            { errorMessage: d, hasError: u } = this.state;
          return u
            ? "function" == typeof c
              ? c({ errorMessage: d })
              : (0, n.createElement)(i, {
                  showErrorBlock: o,
                  errorMessage: r ? d : null,
                  header: e,
                  imageUrl: t,
                  text: s,
                  errorMessagePrefix: a,
                  button: l,
                })
            : this.props.children;
        }
      }
      const d = l;
    },
    3013: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => u });
      var o = r(1609),
        n = r(9155),
        s = r(6087),
        a = r(851),
        c = r(4040),
        i = r.n(c),
        l = (r(2080), r(354));
      const d = (0, s.forwardRef)((e, t) => {
          "showSpinner" in e &&
            i()("showSpinner prop", {
              version: "8.9.0",
              alternative: "Render a spinner in the button children instead.",
              plugin: "WooCommerce",
            });
          const {
              className: r,
              showSpinner: s = !1,
              children: c,
              variant: d = "contained",
              removeTextWrap: u = !1,
              ...m
            } = e,
            p = (0, a.A)(
              "wc-block-components-button",
              "wp-element-button",
              r,
              d,
              { "wc-block-components-button--loading": s }
            );
          if ("href" in e)
            return (0, o.createElement)(n.$, {
              render: (0, o.createElement)(
                "a",
                { ref: t, href: e.href },
                s && (0, o.createElement)(l.A, null),
                (0, o.createElement)(
                  "span",
                  { className: "wc-block-components-button__text" },
                  c
                )
              ),
              className: p,
              ...m,
            });
          const h = u
            ? e.children
            : (0, o.createElement)(
                "span",
                { className: "wc-block-components-button__text" },
                e.children
              );
          return (0, o.createElement)(
            n.$,
            { ref: t, className: p, ...m },
            s && (0, o.createElement)(l.A, null),
            h
          );
        }),
        u = 989 != r.j ? d : null;
    },
    2097: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => j });
      var o = r(1609),
        n = r(851),
        s = r(7723),
        a = r(6087),
        c = r(195),
        i = r(8558),
        l = r(4717);
      r(5193);
      const d = ({
        className: e,
        quantity: t = 1,
        minimum: r = 1,
        maximum: d,
        onChange: u = () => {},
        step: m = 1,
        itemName: p = "",
        disabled: h,
        editable: g,
      }) => {
        const _ = (0, n.A)("wc-block-components-quantity-selector", e),
          v = (0, a.useRef)(null),
          f = (0, a.useRef)(null),
          b = (0, a.useRef)(null),
          E = void 0 !== d,
          y = !h && t - m >= r,
          k = !h && (!E || t + m <= d),
          w = (0, a.useCallback)(
            (e) => {
              let t = e;
              E && (t = Math.min(t, Math.floor(d / m) * m)),
                (t = Math.max(t, Math.ceil(r / m) * m)),
                (t = Math.floor(t / m) * m),
                t !== e && u(t);
            },
            [E, d, r, u, m]
          ),
          S = (0, l.YQ)(w, 300);
        (0, a.useLayoutEffect)(() => {
          w(t);
        }, [t, w]);
        const C = (0, a.useCallback)(
          (e) => {
            const r =
                void 0 !== typeof e.key
                  ? "ArrowDown" === e.key
                  : e.keyCode === i.DOWN,
              o =
                void 0 !== typeof e.key
                  ? "ArrowUp" === e.key
                  : e.keyCode === i.UP;
            r && y && (e.preventDefault(), u(t - m)),
              o && k && (e.preventDefault(), u(t + m));
          },
          [t, u, k, y, m]
        );
        return (0, o.createElement)(
          "div",
          { className: _ },
          (0, o.createElement)("input", {
            ref: v,
            className: "wc-block-components-quantity-selector__input",
            disabled: h,
            readOnly: !g,
            type: "number",
            step: m,
            min: r,
            max: d,
            value: t,
            onKeyDown: C,
            onChange: (e) => {
              let r = parseInt(e.target.value, 10);
              (r = isNaN(r) ? t : r), r !== t && (u(r), S(r));
            },
            "aria-label": (0, s.sprintf)(
              /* translators: %s refers to the item name in the cart. */ /* translators: %s refers to the item name in the cart. */
              (0, s.__)("Quantity of %s in your cart.", "woocommerce"),
              p
            ),
          }),
          g &&
            (0, o.createElement)(
              o.Fragment,
              null,
              (0, o.createElement)(
                "button",
                {
                  ref: f,
                  "aria-label": (0, s.sprintf)(
                    /* translators: %s refers to the item name in the cart. */ /* translators: %s refers to the item name in the cart. */
                    (0, s.__)("Reduce quantity of %s", "woocommerce"),
                    p
                  ),
                  className:
                    "wc-block-components-quantity-selector__button wc-block-components-quantity-selector__button--minus",
                  disabled: !y,
                  onClick: () => {
                    const e = t - m;
                    u(e),
                      (0, c.speak)(
                        (0, s.sprintf)(
                          /* translators: %s refers to the item's new quantity in the cart. */ /* translators: %s refers to the item's new quantity in the cart. */
                          (0, s.__)("Quantity reduced to %s.", "woocommerce"),
                          e
                        )
                      ),
                      w(e);
                  },
                },
                "－"
              ),
              (0, o.createElement)(
                "button",
                {
                  ref: b,
                  "aria-label": (0, s.sprintf)(
                    /* translators: %s refers to the item's name in the cart. */ /* translators: %s refers to the item's name in the cart. */
                    (0, s.__)("Increase quantity of %s", "woocommerce"),
                    p
                  ),
                  disabled: !k,
                  className:
                    "wc-block-components-quantity-selector__button wc-block-components-quantity-selector__button--plus",
                  onClick: () => {
                    const e = t + m;
                    u(e),
                      (0, c.speak)(
                        (0, s.sprintf)(
                          /* translators: %s refers to the item's new quantity in the cart. */ /* translators: %s refers to the item's new quantity in the cart. */
                          (0, s.__)("Quantity increased to %s.", "woocommerce"),
                          e
                        )
                      ),
                      w(e);
                  },
                },
                "＋"
              )
            )
        );
      };
      var u = r(8834),
        m = r(7702),
        p = r(7143),
        h = r(7594),
        g = r(4015),
        _ = r(3993),
        v = r(8645);
      var f = r(9499),
        b = r(910),
        E = r(1e3),
        y = r(131),
        k = r(5703),
        w = r(8242),
        S = r(9792),
        C = r(7578),
        A = r(3776),
        N = r(4656),
        P = r(6802);
      const x = ({ currency: e, saleAmount: t, format: r = "<price/>" }) => {
          if (!t || t <= 0) return null;
          r.includes("<price/>") ||
            ((r = "<price/>"),
            console.error("Price formats need to include the `<price/>` tag."));
          const n = (0, s.sprintf)(
            /* translators: %s will be replaced by the discount amount */ /* translators: %s will be replaced by the discount amount */
            (0, s.__)("Save %s", "woocommerce"),
            r
          );
          return (0, o.createElement)(
            P.A,
            { className: "wc-block-components-sale-badge" },
            (0, a.createInterpolateElement)(n, {
              price: (0, o.createElement)(N.FormattedMonetaryAmount, {
                currency: e,
                value: t,
              }),
            })
          );
        },
        R = (e, t) => e.convertPrecision(t.minorUnit).getAmount(),
        I = (0, a.forwardRef)(
          ({ lineItem: e, onRemove: t = () => {}, tabIndex: r }, i) => {
            const {
                name: N = "",
                catalog_visibility: P = "visible",
                short_description: I = "",
                description: M = "",
                low_stock_remaining: T = null,
                show_backorder_badge: j = !1,
                quantity_limits: $ = {
                  minimum: 1,
                  maximum: 99,
                  multiple_of: 1,
                  editable: !0,
                },
                sold_individually: O = !1,
                permalink: L = "",
                images: D = [],
                variation: F = [],
                item_data: V = [],
                prices: B = {
                  currency_code: "USD",
                  currency_minor_unit: 2,
                  currency_symbol: "$",
                  currency_prefix: "$",
                  currency_suffix: "",
                  currency_decimal_separator: ".",
                  currency_thousand_separator: ",",
                  price: "0",
                  regular_price: "0",
                  sale_price: "0",
                  price_range: null,
                  raw_prices: {
                    precision: 6,
                    price: "0",
                    regular_price: "0",
                    sale_price: "0",
                  },
                },
                totals: H = {
                  currency_code: "USD",
                  currency_minor_unit: 2,
                  currency_symbol: "$",
                  currency_prefix: "$",
                  currency_suffix: "",
                  currency_decimal_separator: ".",
                  currency_thousand_separator: ",",
                  line_subtotal: "0",
                  line_subtotal_tax: "0",
                },
                extensions: U,
              } = e,
              {
                quantity: W,
                setItemQuantity: q,
                removeItem: z,
                isPendingDelete: G,
              } = ((e) => {
                const t = { key: "", quantity: 1 };
                ((e) =>
                  (0, _.isObject)(e) &&
                  (0, _.objectHasProp)(e, "key") &&
                  (0, _.objectHasProp)(e, "quantity") &&
                  (0, _.isString)(e.key) &&
                  (0, _.isNumber)(e.quantity))(e) &&
                  ((t.key = e.key), (t.quantity = e.quantity));
                const { key: r = "", quantity: o = 1 } = t,
                  { cartErrors: n } = (0, v.V)(),
                  {
                    __internalIncrementCalculating: s,
                    __internalDecrementCalculating: c,
                  } = (0, p.useDispatch)(h.checkoutStore),
                  [i, d] = (0, a.useState)(o),
                  [u] = (0, l.d7)(i, 400),
                  m = (0, g.Z)(u),
                  { removeItemFromCart: f, changeCartItemQuantity: b } = (0,
                  p.useDispatch)(h.cartStore);
                (0, a.useEffect)(() => d(o), [o]);
                const E = (0, p.useSelect)(
                    (e) => {
                      if (!r) return { quantity: !1, delete: !1 };
                      const t = e(h.cartStore);
                      return {
                        quantity: t.isItemPendingQuantity(r),
                        delete: t.isItemPendingDelete(r),
                      };
                    },
                    [r]
                  ),
                  y = (0, a.useCallback)(
                    () =>
                      r
                        ? f(r).catch((e) => {
                            (0, h.processErrorResponse)(e);
                          })
                        : Promise.resolve(!1),
                    [r, f]
                  );
                return (
                  (0, a.useEffect)(() => {
                    r &&
                      (0, _.isNumber)(m) &&
                      Number.isFinite(m) &&
                      m !== u &&
                      b(r, u).catch((e) => {
                        (0, h.processErrorResponse)(e);
                      });
                  }, [r, b, u, m]),
                  (0, a.useEffect)(
                    () => (
                      E.delete ? s() : c(),
                      () => {
                        E.delete && c();
                      }
                    ),
                    [c, s, E.delete]
                  ),
                  (0, a.useEffect)(
                    () => (
                      E.quantity || u !== i ? s() : c(),
                      () => {
                        (E.quantity || u !== i) && c();
                      }
                    ),
                    [s, c, E.quantity, u, i]
                  ),
                  {
                    isPendingDelete: E.delete,
                    quantity: i,
                    setItemQuantity: d,
                    removeItem: y,
                    cartItemQuantityErrors: n,
                  }
                );
              })(e),
              { dispatchStoreEvent: Y } = (0, f.y)(),
              { receiveCart: Z, ...K } = (0, v.V)(),
              Q = (0, a.useMemo)(
                () => ({ context: "cart", cartItem: e, cart: K }),
                [e, K]
              ),
              J = (0, b.getCurrencyFromPriceResponse)(B),
              X = (0, E.applyCheckoutFilter)({
                filterName: "itemName",
                defaultValue: N,
                extensions: U,
                arg: Q,
              }),
              ee = (0, y.A)({
                amount: parseInt(B.raw_prices.regular_price, 10),
                precision: B.raw_prices.precision,
              }),
              te = (0, y.A)({
                amount: parseInt(B.raw_prices.price, 10),
                precision: B.raw_prices.precision,
              }),
              re = ee.subtract(te),
              oe = re.multiply(W),
              ne = (0, b.getCurrencyFromPriceResponse)(H);
            let se = parseInt(H.line_subtotal, 10);
            (0, k.getSetting)("displayCartPricesIncludingTax", !1) &&
              (se += parseInt(H.line_subtotal_tax, 10));
            const ae = (0, y.A)({ amount: se, precision: ne.minorUnit }),
              ce = D.length ? D[0] : {},
              ie = "hidden" === P || "search" === P,
              le = (0, E.applyCheckoutFilter)({
                filterName: "cartItemClass",
                defaultValue: "",
                extensions: U,
                arg: Q,
              }),
              de = (0, E.applyCheckoutFilter)({
                filterName: "cartItemPrice",
                defaultValue: "<price/>",
                extensions: U,
                arg: Q,
                validation: E.productPriceValidation,
              }),
              ue = (0, E.applyCheckoutFilter)({
                filterName: "subtotalPriceFormat",
                defaultValue: "<price/>",
                extensions: U,
                arg: Q,
                validation: E.productPriceValidation,
              }),
              me = (0, E.applyCheckoutFilter)({
                filterName: "saleBadgePriceFormat",
                defaultValue: "<price/>",
                extensions: U,
                arg: Q,
                validation: E.productPriceValidation,
              }),
              pe = (0, E.applyCheckoutFilter)({
                filterName: "showRemoveItemLink",
                defaultValue: !0,
                extensions: U,
                arg: Q,
              });
            return (0, o.createElement)(
              "tr",
              {
                className: (0, n.A)("wc-block-cart-items__row", le, {
                  "is-disabled": G,
                }),
                ref: i,
                tabIndex: r,
              },
              (0, o.createElement)(
                "td",
                {
                  className: "wc-block-cart-item__image",
                  "aria-hidden": !(0, _.objectHasProp)(ce, "alt") || !ce.alt,
                },
                ie
                  ? (0, o.createElement)(S.A, { image: ce, fallbackAlt: X })
                  : (0, o.createElement)(
                      "a",
                      { href: L, tabIndex: -1 },
                      (0, o.createElement)(S.A, { image: ce, fallbackAlt: X })
                    )
              ),
              (0, o.createElement)(
                "td",
                { className: "wc-block-cart-item__product" },
                (0, o.createElement)(
                  "div",
                  { className: "wc-block-cart-item__wrap" },
                  (0, o.createElement)(m.A, {
                    disabled: G || ie,
                    name: X,
                    permalink: L,
                  }),
                  j
                    ? (0, o.createElement)(w.A, null)
                    : !!T &&
                        (0, o.createElement)(C.A, { lowStockRemaining: T }),
                  (0, o.createElement)(
                    "div",
                    { className: "wc-block-cart-item__prices" },
                    (0, o.createElement)(u.A, {
                      currency: J,
                      regularPrice: R(ee, J),
                      price: R(te, J),
                      format: ue,
                    })
                  ),
                  (0, o.createElement)(x, {
                    currency: J,
                    saleAmount: R(re, J),
                    format: me,
                  }),
                  (0, o.createElement)(A.A, {
                    shortDescription: I,
                    fullDescription: M,
                    itemData: V,
                    variation: F,
                  }),
                  (0, o.createElement)(
                    "div",
                    { className: "wc-block-cart-item__quantity" },
                    !O &&
                      (0, o.createElement)(d, {
                        disabled: G,
                        editable: $.editable,
                        quantity: W,
                        minimum: $.minimum,
                        maximum: $.maximum,
                        step: $.multiple_of,
                        onChange: (t) => {
                          q(t),
                            Y("cart-set-item-quantity", {
                              product: e,
                              quantity: t,
                            });
                        },
                        itemName: X,
                      }),
                    pe &&
                      (0, o.createElement)(
                        "button",
                        {
                          className: "wc-block-cart-item__remove-link",
                          "aria-label": (0, s.sprintf)(
                            /* translators: %s refers to the item's name in the cart. */ /* translators: %s refers to the item's name in the cart. */
                            (0, s.__)("Remove %s from cart", "woocommerce"),
                            X
                          ),
                          onClick: () => {
                            t(),
                              z(),
                              Y("cart-remove-item", {
                                product: e,
                                quantity: W,
                              }),
                              (0, c.speak)(
                                (0, s.sprintf)(
                                  /* translators: %s refers to the item name in the cart. */ /* translators: %s refers to the item name in the cart. */
                                  (0, s.__)(
                                    "%s has been removed from your cart.",
                                    "woocommerce"
                                  ),
                                  X
                                )
                              );
                          },
                          disabled: G,
                        },
                        (0, s.__)("Remove item", "woocommerce")
                      )
                  )
                )
              ),
              (0, o.createElement)(
                "td",
                { className: "wc-block-cart-item__total" },
                (0, o.createElement)(
                  "div",
                  {
                    className:
                      "wc-block-cart-item__total-price-and-sale-badge-wrapper",
                  },
                  (0, o.createElement)(u.A, {
                    currency: ne,
                    format: de,
                    price: ae.getAmount(),
                  }),
                  W > 1 &&
                    (0, o.createElement)(x, {
                      currency: J,
                      saleAmount: R(oe, J),
                      format: me,
                    })
                )
              )
            );
          }
        );
      r(1045);
      const M = [...Array(3)].map((_x, e) =>
          (0, o.createElement)(I, { lineItem: {}, key: e })
        ),
        T = (e) => {
          const t = {};
          return (
            e.forEach(({ key: e }) => {
              t[e] = (0, a.createRef)();
            }),
            t
          );
        },
        j = ({ lineItems: e = [], isLoading: t = !1, className: r }) => {
          const c = (0, a.useRef)(null),
            i = (0, a.useRef)(T(e));
          (0, a.useEffect)(() => {
            i.current = T(e);
          }, [e]);
          const l = (e) => () => {
              null != i &&
              i.current &&
              e &&
              i.current[e].current instanceof HTMLElement
                ? i.current[e].current.focus()
                : c.current instanceof HTMLElement && c.current.focus();
            },
            d = t
              ? M
              : e.map((t, r) => {
                  const n = e.length > r + 1 ? e[r + 1].key : null;
                  return (0, o.createElement)(I, {
                    key: t.key,
                    lineItem: t,
                    onRemove: l(n),
                    ref: i.current[t.key],
                    tabIndex: -1,
                  });
                });
          return (0, o.createElement)(
            "table",
            {
              className: (0, n.A)("wc-block-cart-items", r),
              ref: c,
              tabIndex: -1,
            },
            (0, o.createElement)(
              "caption",
              { className: "screen-reader-text" },
              (0, o.createElement)(
                "h2",
                null,
                (0, s.__)("Products in cart", "woocommerce")
              )
            ),
            (0, o.createElement)(
              "thead",
              null,
              (0, o.createElement)(
                "tr",
                { className: "wc-block-cart-items__header" },
                (0, o.createElement)(
                  "th",
                  { className: "wc-block-cart-items__header-image" },
                  (0, o.createElement)(
                    "span",
                    null,
                    (0, s.__)("Product", "woocommerce")
                  )
                ),
                (0, o.createElement)(
                  "th",
                  { className: "wc-block-cart-items__header-product" },
                  (0, o.createElement)(
                    "span",
                    null,
                    (0, s.__)("Details", "woocommerce")
                  )
                ),
                (0, o.createElement)(
                  "th",
                  { className: "wc-block-cart-items__header-total" },
                  (0, o.createElement)(
                    "span",
                    null,
                    (0, s.__)("Total", "woocommerce")
                  )
                )
              )
            ),
            (0, o.createElement)("tbody", null, d)
          );
        };
    },
    56: (e, t, r) => {
      "use strict";
      r.d(t, { l: () => G });
      var o = r(1609),
        n = r(6087),
        s = r(8537),
        a = r(851),
        c = (r(2931), r(7104)),
        i = r(224),
        l = r(7723),
        d = r(7143),
        u = r(7594),
        m = r(4656),
        p = r(1e3);
      r(5452);
      const h = (e) => {
          const {
              onChange: t,
              options: r,
              label: s,
              value: h = "",
              className: g,
              size: _,
              errorId: v,
              required: f,
              errorMessage: b = (0, l.__)(
                "Please select a valid option",
                "woocommerce"
              ),
              placeholder: E,
              ...y
            } = e,
            k = (0, n.useCallback)(
              (e) => {
                t(e.target.value);
              },
              [t]
            ),
            w = (0, p.getFieldLabel)(s),
            S = (0, n.useMemo)(
              () => ({
                value: "",
                label:
                  null != E
                    ? E
                    : (0, l.sprintf)(
                        // translators: %s will be label of the field. For example "country/region".
                        // translators: %s will be label of the field. For example "country/region".
                        (0, l.__)("Select a %s", "woocommerce"),
                        w
                      ),
                disabled: !!f,
              }),
              [E, f, w]
            ),
            C = (0, n.useId)(),
            A = y.id || `wc-blocks-components-select-${C}`,
            N = v || A,
            P = (0, n.useMemo)(
              () => (f && h ? r : [S].concat(r)),
              [f, h, S, r]
            ),
            { setValidationErrors: x, clearValidationError: R } = (0,
            d.useDispatch)(u.validationStore),
            { error: I, validationErrorId: M } = (0, d.useSelect)(
              (e) => {
                const t = e(u.validationStore);
                return {
                  error: t.getValidationError(N),
                  validationErrorId: t.getValidationErrorId(N),
                };
              },
              [N]
            );
          (0, n.useEffect)(
            () => (
              !f || h ? R(N) : x({ [N]: { message: b, hidden: !0 } }),
              () => {
                R(N);
              }
            ),
            [R, h, N, b, f, x]
          );
          const T = (0, d.useSelect)(
            (e) =>
              e(u.validationStore).getValidationError(N || "") || {
                hidden: !0,
              },
            [N]
          );
          return (0, o.createElement)(
            "div",
            { className: (0, a.A)(g, { "has-error": !T.hidden }) },
            (0, o.createElement)(
              "div",
              { className: "wc-blocks-components-select" },
              (0, o.createElement)(
                "div",
                { className: "wc-blocks-components-select__container" },
                (0, o.createElement)(
                  "label",
                  {
                    htmlFor: A,
                    className: "wc-blocks-components-select__label",
                  },
                  s
                ),
                (0, o.createElement)(
                  "select",
                  {
                    className: "wc-blocks-components-select__select",
                    id: A,
                    size: void 0 !== _ ? _ : 1,
                    onChange: k,
                    value: h,
                    "aria-invalid": !(
                      null == I ||
                      !I.message ||
                      (null != I && I.hidden)
                    ),
                    "aria-errormessage": M,
                    ...y,
                  },
                  P.map((e) =>
                    (0, o.createElement)(
                      "option",
                      {
                        key: e.value,
                        value: e.value,
                        "data-alternate-values": `[${e.label}]`,
                        disabled: void 0 !== e.disabled && e.disabled,
                      },
                      e.label
                    )
                  )
                ),
                (0, o.createElement)(c.A, {
                  className: "wc-blocks-components-select__expand",
                  icon: i.A,
                })
              )
            ),
            (0, o.createElement)(m.ValidationInputError, { propertyName: N })
          );
        },
        g = ({
          className: e,
          countries: t,
          id: r,
          label: c,
          onChange: i,
          value: l = "",
          autoComplete: d = "off",
          required: u = !1,
        }) => {
          const m = (0, n.useMemo)(
            () =>
              Object.entries(t).map(([e, t]) => ({
                value: e,
                label: (0, s.decodeEntities)(t),
              })),
            [t]
          );
          return (0, o.createElement)(h, {
            className: (0, a.A)(e, "wc-block-components-country-input"),
            id: r,
            label: c || "",
            onChange: i,
            options: m,
            value: l,
            required: u,
            autoComplete: d,
          });
        };
      var _ = r(2516);
      const v = (e) => {
          const { ...t } = e;
          return (0, o.createElement)(g, { countries: _.AG, ...t });
        },
        f = (e) => (0, o.createElement)(g, { countries: _.G3, ...e });
      r(8824);
      const b = (e, t) => {
          const r = t.find(
            (t) =>
              t.label.toLocaleUpperCase() === e.toLocaleUpperCase() ||
              t.value.toLocaleUpperCase() === e.toLocaleUpperCase()
          );
          return r ? r.value : "";
        },
        E = ({
          className: e,
          id: t,
          states: r,
          country: c,
          label: i,
          onChange: l,
          autoComplete: d = "off",
          value: u = "",
          required: p = !1,
        }) => {
          const g = r[c],
            _ = (0, n.useMemo)(
              () =>
                g && Object.keys(g).length > 0
                  ? Object.keys(g).map((e) => ({
                      value: e,
                      label: (0, s.decodeEntities)(g[e]),
                    }))
                  : [],
              [g]
            ),
            v = (0, n.useCallback)(
              (e) => {
                const t = _.length > 0 ? b(e, _) : e;
                t !== u && l(t);
              },
              [l, _, u]
            ),
            f = (0, n.useRef)(u);
          return (
            (0, n.useEffect)(() => {
              f.current !== u && (f.current = u);
            }, [u]),
            (0, n.useEffect)(() => {
              if (_.length > 0 && f.current) {
                const e = b(f.current, _);
                e !== f.current && v(e);
              }
            }, [_, v]),
            _.length > 0
              ? (0, o.createElement)(h, {
                  className: (0, a.$)(e, "wc-block-components-state-input"),
                  options: _,
                  label: i || "",
                  id: t,
                  onChange: v,
                  value: u,
                  autoComplete: d,
                  required: p,
                })
              : (0, o.createElement)(m.ValidatedTextInput, {
                  className: e,
                  id: t,
                  label: i,
                  onChange: v,
                  autoComplete: d,
                  value: u,
                  required: p,
                })
          );
        },
        y = (e) => {
          const { ...t } = e;
          return (0, o.createElement)(E, { states: _.uz, ...t });
        },
        k = (e) => (0, o.createElement)(E, { states: _.SL, ...e });
      var w = r(1019),
        S = r(7901),
        C = r(4015),
        A = r(3993),
        N = r(9491),
        P = r(923),
        x = r.n(P),
        R = r(458),
        I = r.n(R),
        M = r(9155);
      r(5684);
      const T = ({ field: e, props: t, onChange: r, value: s }) => {
          var a;
          const c =
              null !== (a = null == e ? void 0 : e.required) &&
              void 0 !== a &&
              a,
            i = (0, C.Z)(c),
            [d, u] = (0, n.useState)(() => Boolean(s) || c),
            h = (0, p.getFieldLabel)(e.label);
          (0, n.useEffect)(() => {
            i !== c && u(Boolean(s) || c);
          }, [s, i, c]);
          const g = (0, n.useCallback)(
            (e) => {
              r(e), u(!0);
            },
            [r]
          );
          return (0, o.createElement)(
            n.Fragment,
            null,
            d
              ? (0, o.createElement)(m.ValidatedTextInput, {
                  ...t,
                  type: e.type,
                  label: c ? e.label : e.optionalLabel,
                  className: "wc-block-components-address-form__address_2",
                  value: s,
                  onChange: (e) => r(e),
                })
              : (0, o.createElement)(
                  n.Fragment,
                  null,
                  (0, o.createElement)(
                    M.$,
                    {
                      render: (0, o.createElement)("span", null),
                      className:
                        "wc-block-components-address-form__address_2-toggle",
                      onClick: () => u(!0),
                    },
                    (0, l.sprintf)(
                      // translators: %s: address 2 field label.
                      // translators: %s: address 2 field label.
                      (0, l.__)("+ Add %s", "woocommerce"),
                      h
                    )
                  ),
                  (0, o.createElement)("input", {
                    type: "text",
                    tabIndex: -1,
                    className:
                      "wc-block-components-address-form__address_2-hidden-input",
                    "aria-hidden": "true",
                    "aria-label": e.label,
                    autoComplete: e.autocomplete,
                    id: null == t ? void 0 : t.id,
                    value: s,
                    onChange: (e) => g(e.target.value),
                  })
                )
          );
        },
        j = (e, t, r) => ({
          id: `${t}-${null == e ? void 0 : e.key}`.replaceAll("../../", "-"),
          errorId: `${r}_${null == e ? void 0 : e.key}`,
          label:
            (null != e && e.required
              ? null == e
                ? void 0
                : e.label
              : null == e
              ? void 0
              : e.optionalLabel) || "",
          autoCapitalize: null == e ? void 0 : e.autocapitalize,
          autoComplete: null == e ? void 0 : e.autocomplete,
          errorMessage: null == e ? void 0 : e.errorMessage,
          required: null == e ? void 0 : e.required,
          placeholder: null == e ? void 0 : e.placeholder,
          className: `wc-block-components-address-form__${
            null == e ? void 0 : e.key
          }`.replaceAll("../../", "-"),
          ...(null == e ? void 0 : e.attributes),
        }),
        $ = (e, t, r) => {
          const o = t.find((t) => t.key === e),
            n = (0, A.objectHasProp)(r, e) ? r[e] : "";
          return o ? { field: { ...o, key: e }, value: n } : null;
        },
        O = (e, t) =>
          (0, A.isObject)(e.rules) &&
          (0, A.isObject)(e.rules[t]) &&
          Object.keys(e.rules[t]).length > 0,
        L = ({
          formId: e,
          address1: t,
          address2: r,
          addressType: n,
          onChange: s,
        }) => {
          const a = j(t.field, e, n),
            c = j(r.field, e, n);
          return (0, o.createElement)(
            o.Fragment,
            null,
            t &&
              (0, o.createElement)(m.ValidatedTextInput, {
                ...a,
                type: t.field.type,
                label: t.field.label,
                className: "wc-block-components-address-form__address_1",
                value: t.value,
                onChange: (e) => s("address_1", e),
              }),
            r.field &&
              !r.field.hidden &&
              (0, o.createElement)(T, {
                field: r.field,
                props: c,
                onChange: (e) => s("address_2", e),
                value: r.value,
              })
          );
        };
      var D = r(5703),
        F = r(1269),
        V = r(7057),
        B = r(3832);
      const H = {};
      function U(e) {
        let t = e;
        return function (e) {
          const r = t;
          return (t = e), r;
        };
      }
      const W = U(),
        q = U(),
        z = ({
          id: e = "",
          fields: t,
          onChange: r,
          addressType: c = "shipping",
          values: i,
          children: g,
          isEditing: _,
          ariaDescribedBy: b = "",
        }) => {
          const E = (0, N.useInstanceId)(z),
            P = (0, n.useRef)(!0),
            { defaultFields: R } = (0, w.C)(),
            M = (0, S.c)(t),
            T = (0, S.c)("country" in i ? i.country : ""),
            U = ((e, t, r, o = "") => {
              const s = (0, n.useRef)([]),
                { parser: a, data: c } = (0, F.o)(r),
                i = (0, V.A)(e, t, o).map((e) => {
                  const r = t[e.key] || {};
                  if (r.rules && a) {
                    if (O(r, "required")) {
                      let t = {};
                      t = Object.keys(r.rules.required).some(
                        (e) =>
                          "cart" === e || "checkout" === e || "customer" === e
                      )
                        ? { type: "object", properties: r.rules.required }
                        : r.rules.required;
                      try {
                        const r = a.validate(t, c);
                        e.required = r;
                      } catch (e) {
                        D.CURRENT_USER_IS_ADMIN && console.error(e);
                      }
                    }
                    if (O(r, "hidden")) {
                      const t = { type: "object", properties: r.rules.hidden };
                      try {
                        const r = a.validate(t, c);
                        e.hidden = r;
                      } catch (e) {
                        D.CURRENT_USER_IS_ADMIN && console.error(e);
                      }
                    }
                  }
                  return e;
                });
              return (
                (s.current && I()(s.current, i)) || (s.current = i), s.current
              );
            })(M, R, c, T),
            G = (0, C.Z)(U),
            Y = (0, C.Z)(_),
            Z = (0, C.Z)(i),
            K = (0, n.useRef)({}),
            { errors: Q, previousErrors: J } = ((e, t, r) => {
              const { parser: o, data: s } = (0, F.o)(t),
                a = (0, n.useRef)(H),
                c = (0, C.Z)(a.current);
              if (!s) return { errors: a.current, previousErrors: c };
              let i;
              if (r) i = r;
              else
                switch (t) {
                  case "billing":
                  case "shipping":
                    i = s.customer.address || {};
                    break;
                  case "contact":
                  case "order":
                    i = s.checkout.additional_fields || {};
                    break;
                  default:
                    i = {};
                }
              const d = e.reduce(
                (e, t) => (
                  O(t, "validation") &&
                    !t.hidden &&
                    (t.required || i[t.key]) &&
                    (e[t.key] = t.rules.validation),
                  e
                ),
                {}
              );
              let u = H;
              if (Object.keys(d).length > 0 && o) {
                const r = { type: "object", properties: {} };
                switch (t) {
                  case "shipping":
                    r.properties = {
                      customer: {
                        type: "object",
                        properties: {
                          shipping_address: { type: "object", properties: d },
                        },
                      },
                    };
                    break;
                  case "billing":
                    r.properties = {
                      customer: {
                        type: "object",
                        properties: {
                          billing_address: { type: "object", properties: d },
                        },
                      },
                    };
                    break;
                  default:
                    r.properties = {
                      checkout: {
                        type: "object",
                        properties: {
                          additional_fields: { type: "object", properties: d },
                        },
                      },
                    };
                }
                const n = o.compile(r),
                  a = n(s);
                u =
                  !a && n.errors
                    ? ((e, t) =>
                        e.reduce((e, r) => {
                          var o;
                          const n =
                            null ===
                              (s = r.instancePath.split("../../").pop()) ||
                            void 0 === s
                              ? void 0
                              : s.replace("~1", "../../");
                          var s;
                          const a = t.find((e) => e.key === n);
                          if (!a || !n) return e;
                          const c = (0, p.getFieldLabel)(a.label),
                            i = (0, l.sprintf)(
                              // translators: %s is the label of the field.
                              // translators: %s is the label of the field.
                              (0, l.__)("%s is invalid", "woocommerce"),
                              c
                            );
                          if (n)
                            switch (r.keyword) {
                              case "errorMessage":
                                e[n] =
                                  null !== (o = r.message) && void 0 !== o
                                    ? o
                                    : i;
                                break;
                              case "pattern":
                                e[n] = (0, l.sprintf)(
                                  // translators: %1$s is the label of the field, %2$s is the pattern.
                                  // translators: %1$s is the label of the field, %2$s is the pattern.
                                  (0, l.__)(
                                    "%1$s must match the pattern %2$s",
                                    "woocommerce"
                                  ),
                                  c,
                                  r.params.pattern
                                );
                                break;
                              default:
                                e[n] = i;
                            }
                          return e;
                        }, {}))(n.errors, e)
                    : H;
              }
              const m = e
                .map((e) =>
                  u[e.key]
                    ? [e.key, u[e.key]]
                    : e.hidden || (!e.required && !i[e.key])
                    ? null
                    : "postcode" === e.key &&
                      "country" in i &&
                      !(0, p.isPostcode)({
                        postcode: i.postcode,
                        country: i.country,
                      })
                    ? [
                        e.key,
                        (0, l.__)(
                          "Please enter a valid postcode",
                          "woocommerce"
                        ),
                      ]
                    : "email" === e.key &&
                      "email" in i &&
                      !(0, B.isEmail)(i.email)
                    ? [
                        e.key,
                        (0, l.__)(
                          "Please enter a valid email address",
                          "woocommerce"
                        ),
                      ]
                    : null
                )
                .filter(A.nonNullable);
              return (
                I()(a.current, Object.fromEntries(m)) ||
                  (a.current = Object.fromEntries(m)),
                { errors: a.current, previousErrors: c }
              );
            })(U, c, "shipping" === c ? i : void 0);
          return (
            (0, n.useEffect)(() => {
              Object.entries(Q).forEach(([e, t]) => {
                const r = K.current[e];
                t &&
                  (null == r || r.setErrorMessage(t),
                  (0, d.dispatch)(u.validationStore).setValidationErrors({
                    [`${c}_${e}`]: {
                      message: t,
                      hidden: !(null == r || !r.isFocused()),
                    },
                  }),
                  (null != r && r.isFocused()) || null == r || r.revalidate());
              }),
                J &&
                  Object.entries(J).forEach(([e]) => {
                    const t = K.current[e];
                    e in Q ||
                      ((0, d.dispatch)(u.validationStore).clearValidationError(
                        `${c}_${e}`
                      ),
                      null == t || t.setErrorMessage(""));
                  });
            }, [Q, J, c, i]),
            (0, n.useEffect)(() => {
              var e;
              null === (e = K.current) ||
                void 0 === e ||
                null === (e = e.postcode) ||
                void 0 === e ||
                e.revalidate();
            }, [T]),
            (0, n.useEffect)(() => {
              let t;
              if (!P.current && _ && K.current && Y !== _) {
                const r = U.find((e) => !1 === e.hidden);
                if (!r) return;
                const { id: o } = j(r, e || `${E}`, c),
                  n = document.getElementById(o);
                n &&
                  (t = setTimeout(() => {
                    n.focus();
                  }, 300));
              }
              return (
                (P.current = !1),
                () => {
                  clearTimeout(t);
                }
              );
            }, [_, U, e, E, c, Y]),
            (0, n.useEffect)(() => {
              if (I()(G, U)) return;
              const e = {
                ...i,
                ...Object.fromEntries(
                  U.filter((e) => e.hidden).map((e) => [e.key, ""])
                ),
              };
              x()(i, e) || r(e);
            }, [r, U, G, i]),
            (0, n.useEffect)(() => {
              if (
                (!I()(G, U) || !I()(Z, i)) &&
                ("country" in i &&
                  ((e, t) => {
                    const r = `${e}_country`,
                      o = (0, d.select)(u.validationStore).getValidationError(
                        r
                      );
                    !t.country &&
                      (t.city || t.state || t.postcode) &&
                      (o
                        ? (0, d.dispatch)(
                            u.validationStore
                          ).showValidationError(r)
                        : (0, d.dispatch)(
                            u.validationStore
                          ).setValidationErrors({
                            [r]: {
                              message: (0, l.__)(
                                "Please select your country",
                                "woocommerce"
                              ),
                              hidden: !1,
                            },
                          })),
                      o &&
                        t.country &&
                        (0, d.dispatch)(u.validationStore).clearValidationError(
                          r
                        );
                  })(c, i),
                "state" in i)
              ) {
                const e = U.find((e) => "state" === e.key);
                e &&
                  ((e, t, r) => {
                    const o = `${e}_state`,
                      n = (0, d.select)(u.validationStore).getValidationError(
                        o
                      ),
                      s = r.required,
                      a = "shipping" === e ? W(t) : q(t),
                      c = !!a && !x()(a, t);
                    n
                      ? !s || t.state
                        ? (0, d.dispatch)(
                            u.validationStore
                          ).clearValidationError(o)
                        : c ||
                          (0, d.dispatch)(
                            u.validationStore
                          ).showValidationError(o)
                      : !n &&
                        s &&
                        !t.state &&
                        t.country &&
                        (0, d.dispatch)(u.validationStore).setValidationErrors({
                          [o]: {
                            message: (0, l.sprintf)(
                              /* translators: %s will be the state field label in lowercase e.g. "state" */ /* translators: %s will be the state field label in lowercase e.g. "state" */
                              (0, l.__)("Please select a %s", "woocommerce"),
                              r.label.toLowerCase()
                            ),
                            hidden: !0,
                          },
                        });
                  })(c, i, e);
              }
            }, [i, Z, c, U, G]),
            (e = e || `${E}`),
            (0, o.createElement)(
              "div",
              { id: e, className: "wc-block-components-address-form" },
              U.map((t) => {
                var n;
                if (t.hidden) return null;
                const l = j(t, e, c),
                  d = ((e) => {
                    const {
                      autoCapitalize: t,
                      autoComplete: r,
                      placeholder: o,
                      ...n
                    } = e;
                    return n;
                  })(l);
                if (
                  ("email" === t.key &&
                    ((l.id = "email"), (l.errorId = "billing_email")),
                  "checkbox" === t.type)
                ) {
                  const e = t.key in i && i[t.key],
                    n = {
                      checked: Boolean(e),
                      onChange: (e) => {
                        r({ ...i, [t.key]: e });
                      },
                      ...d,
                    };
                  return t.required
                    ? (0, o.createElement)(m.ValidatedCheckboxControl, {
                        key: t.key,
                        ...(t.errorMessage
                          ? { errorMessage: t.errorMessage }
                          : {}),
                        ...n,
                      })
                    : (0, o.createElement)(m.CheckboxControl, {
                        key: t.key,
                        ...n,
                      });
                }
                if ("address_1" === t.key && "address_1" in i) {
                  const n = $("address_1", U, i),
                    s = $("address_2", U, i);
                  return (0, A.isNull)(n) || (0, A.isNull)(s)
                    ? null
                    : (0, o.createElement)(L, {
                        address1: n,
                        address2: s,
                        addressType: c,
                        formId: e,
                        key: t.key,
                        onChange: (e, t) => {
                          r({ ...i, [e]: t });
                        },
                      });
                }
                if ("address_2" === t.key) return null;
                if ("country" === t.key && "country" in i) {
                  const e = "shipping" === c ? f : v;
                  return (0, o.createElement)(e, {
                    key: t.key,
                    ...l,
                    value: i.country,
                    onChange: (e) => {
                      r({ ...i, country: e, state: "", postcode: "" });
                    },
                  });
                }
                if ("state" === t.key && "state" in i && "country" in i) {
                  const e = "shipping" === c ? k : y;
                  return (0, o.createElement)(e, {
                    key: t.key,
                    ...l,
                    country: i.country,
                    value: i.state,
                    onChange: (e) => r({ ...i, state: e }),
                  });
                }
                return "select" === t.type && "options" in t
                  ? void 0 === t.options
                    ? null
                    : (0, o.createElement)(h, {
                        key: t.key,
                        ...l,
                        label: l.label || "",
                        className: (0, a.A)(
                          "wc-block-components-select-input",
                          `wc-block-components-select-input-${t.key}`.replaceAll(
                            "../../",
                            "-"
                          )
                        ),
                        value: t.key in i ? i[t.key] : "",
                        onChange: (e) => {
                          r({ ...i, [t.key]: e });
                        },
                        options: t.options,
                        required: t.required,
                        errorMessage: l.errorMessage || void 0,
                      })
                  : (0, o.createElement)(m.ValidatedTextInput, {
                      key: t.key,
                      ref: (e) => (K.current[t.key] = e),
                      ...l,
                      type: t.type,
                      ariaDescribedBy: b,
                      value:
                        null !== (n = (0, s.decodeEntities)(i[t.key])) &&
                        void 0 !== n
                          ? n
                          : "",
                      onChange: (e) => r({ ...i, [t.key]: e }),
                      customFormatter: (e) =>
                        "postcode" === t.key ? e.trimStart().toUpperCase() : e,
                    });
              }),
              g
            )
          );
        },
        G = z;
    },
    7057: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => c });
      var o = r(7723),
        n = r(3993),
        s = r(2516);
      const a = Object.entries(s.iI).reduce(
          (e, [t, r]) => (
            (e[t] = Object.entries(r).reduce(
              (e, [t, r]) => (
                (e[t] = ((e) => {
                  const t = {};
                  return (
                    void 0 !== e.label && (t.label = e.label),
                    void 0 !== e.required && (t.required = e.required),
                    void 0 !== e.hidden && (t.hidden = e.hidden),
                    void 0 === e.label ||
                      e.optionalLabel ||
                      (t.optionalLabel = (0, o.sprintf)(
                        /* translators: %s Field label. */ /* translators: %s Field label. */
                        (0, o.__)("%s (optional)", "woocommerce"),
                        e.label
                      )),
                    e.index &&
                      ((0, n.isNumber)(e.index) && (t.index = e.index),
                      (0, n.isString)(e.index) &&
                        (t.index = parseInt(e.index, 10))),
                    e.hidden && (t.required = !1),
                    t
                  );
                })(r)),
                e
              ),
              {}
            )),
            e
          ),
          {}
        ),
        c = /^(251|2895|7949)$/.test(r.j)
          ? (e, t, r = "") => {
              const o = r && void 0 !== a[r] ? a[r] : {};
              return e
                .map((e) => ({ key: e, ...(t[e] || {}), ...(o[e] || {}) }))
                .sort((e, t) => e.index - t.index);
            }
          : null;
    },
    1138: (e, t, r) => {
      "use strict";
      r.d(t, { G: () => c });
      var o = r(1609),
        n = r(4656),
        s = r(7594),
        a = r(7143);
      const c = ({
        title: e,
        setSelectedOption: t,
        selectedOption: r,
        pickupLocations: c,
        onSelectRate: i,
        renderPickupLocation: l,
        packageCount: d,
      }) => {
        const u =
          (0, a.useSelect)((e) => {
            var t;
            return null === (t = e(s.cartStore)) ||
              void 0 === t ||
              null === (t = t.getCartData()) ||
              void 0 === t ||
              null === (t = t.shippingRates) ||
              void 0 === t
              ? void 0
              : t.length;
          }) > 1 ||
          document.querySelectorAll(
            ".wc-block-components-local-pickup-select .wc-block-components-radio-control"
          ).length > 1;
        return (0, o.createElement)(
          "div",
          { className: "wc-block-components-local-pickup-select" },
          !(!u || !e) && (0, o.createElement)("div", null, e),
          (0, o.createElement)(n.RadioControl, {
            onChange: (e) => {
              t(e), i(e);
            },
            highlightChecked: !0,
            selected: r,
            options: c.map((e) => l(e, d)),
          })
        );
      };
    },
    1582: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => k });
      var o = r(1609),
        n = r(3160),
        s = r(851),
        a = r(7723),
        c = r(4656),
        i = r(8834),
        l = r(7702),
        d = r(910),
        u = r(1e3),
        m = r(131),
        p = r(5703),
        h = r(6087),
        g = r(8645),
        _ = r(3993),
        v = r(8242),
        f = r(9792),
        b = r(7578),
        E = r(3776);
      const y = ({ cartItem: e, disableProductDescriptions: t }) => {
        const {
            images: r,
            low_stock_remaining: n,
            show_backorder_badge: y,
            name: k,
            permalink: w,
            prices: S,
            quantity: C,
            short_description: A,
            description: N,
            item_data: P,
            variation: x,
            totals: R,
            extensions: I,
          } = e,
          { receiveCart: M, ...T } = (0, g.V)(),
          j = (0, h.useMemo)(
            () => ({ context: "summary", cartItem: e, cart: T }),
            [e, T]
          ),
          $ = (0, d.getCurrencyFromPriceResponse)(S),
          O = (0, u.applyCheckoutFilter)({
            filterName: "itemName",
            defaultValue: k,
            extensions: I,
            arg: j,
          }),
          L = (0, m.A)({
            amount: parseInt(S.raw_prices.regular_price, 10),
            precision: (0, _.isString)(S.raw_prices.precision)
              ? parseInt(S.raw_prices.precision, 10)
              : S.raw_prices.precision,
          })
            .convertPrecision($.minorUnit)
            .getAmount(),
          D = (0, m.A)({
            amount: parseInt(S.raw_prices.price, 10),
            precision: (0, _.isString)(S.raw_prices.precision)
              ? parseInt(S.raw_prices.precision, 10)
              : S.raw_prices.precision,
          })
            .convertPrecision($.minorUnit)
            .getAmount(),
          F = (0, d.getCurrencyFromPriceResponse)(R);
        let V = parseInt(R.line_subtotal, 10);
        (0, p.getSetting)("displayCartPricesIncludingTax", !1) &&
          (V += parseInt(R.line_subtotal_tax, 10));
        const B = (0, m.A)({ amount: V, precision: F.minorUnit }).getAmount(),
          H = (0, u.applyCheckoutFilter)({
            filterName: "subtotalPriceFormat",
            defaultValue: "<price/>",
            extensions: I,
            arg: j,
            validation: u.productPriceValidation,
          }),
          U = (0, u.applyCheckoutFilter)({
            filterName: "cartItemPrice",
            defaultValue: "<price/>",
            extensions: I,
            arg: j,
            validation: u.productPriceValidation,
          }),
          W = (0, u.applyCheckoutFilter)({
            filterName: "cartItemClass",
            defaultValue: "",
            extensions: I,
            arg: j,
          }),
          q = t
            ? { itemData: P, variation: x }
            : {
                itemData: P,
                variation: x,
                shortDescription: A,
                fullDescription: N,
              };
        return (0, o.createElement)(
          "div",
          { className: (0, s.A)("wc-block-components-order-summary-item", W) },
          (0, o.createElement)(
            "div",
            { className: "wc-block-components-order-summary-item__image" },
            (0, o.createElement)(
              "div",
              { className: "wc-block-components-order-summary-item__quantity" },
              (0, o.createElement)(c.Label, {
                label: C.toString(),
                screenReaderLabel: (0, a.sprintf)(
                  /* translators: %d number of products of the same type in the cart */ /* translators: %d number of products of the same type in the cart */
                  (0, a._n)("%d item", "%d items", C, "woocommerce"),
                  C
                ),
              })
            ),
            (0, o.createElement)(f.A, {
              image: r.length ? r[0] : {},
              fallbackAlt: O,
            })
          ),
          (0, o.createElement)(
            "div",
            {
              className: "wc-block-components-order-summary-item__description",
            },
            (0, o.createElement)(l.A, {
              disabled: !0,
              name: O,
              permalink: w,
              disabledTagName: "h3",
            }),
            (0, o.createElement)(i.A, {
              currency: $,
              price: D,
              regularPrice: L,
              className:
                "wc-block-components-order-summary-item__individual-prices",
              priceClassName:
                "wc-block-components-order-summary-item__individual-price",
              regularPriceClassName:
                "wc-block-components-order-summary-item__regular-individual-price",
              format: H,
            }),
            y
              ? (0, o.createElement)(v.A, null)
              : !!n && (0, o.createElement)(b.A, { lowStockRemaining: n }),
            (0, o.createElement)(E.A, { ...q })
          ),
          (0, o.createElement)(
            "span",
            { className: "screen-reader-text" },
            (0, a.sprintf)(
              /* translators: %1$d is the number of items, %2$s is the item name and %3$s is the total price including the currency symbol. */ /* translators: %1$d is the number of items, %2$s is the item name and %3$s is the total price including the currency symbol. */
              (0, a._n)(
                "Total price for %1$d %2$s item: %3$s",
                "Total price for %1$d %2$s items: %3$s",
                C,
                "woocommerce"
              ),
              C,
              O,
              (0, d.formatPrice)(B, F)
            )
          ),
          (0, o.createElement)(
            "div",
            {
              className: "wc-block-components-order-summary-item__total-price",
              "aria-hidden": "true",
            },
            (0, o.createElement)(i.A, { currency: F, format: U, price: B })
          )
        );
      };
      r(5415);
      const k = ({ cartItems: e = [], disableProductDescriptions: t = !1 }) => {
        const { isLarge: r, hasContainerWidth: a } = (0, n.G)();
        return a
          ? (0, o.createElement)(
              "div",
              {
                className: (0, s.A)("wc-block-components-order-summary", {
                  "is-large": r,
                }),
              },
              (0, o.createElement)(
                "div",
                { className: "wc-block-components-order-summary__content" },
                e.map((e) =>
                  (0, o.createElement)(y, {
                    disableProductDescriptions: t,
                    key: e.key,
                    cartItem: e,
                  })
                )
              )
            )
          : null;
      };
    },
    558: (e, t, r) => {
      "use strict";
      r.d(t, { Ay: () => m });
      var o = r(1609),
        n = r(7723),
        s = r(9491),
        a = r(3876);
      if (251 == r.j) var c = r(4015);
      var i = r(6087);
      if (251 == r.j) var l = r(851);
      r(3091);
      const d = [
          (0, n.__)("Too weak", "woocommerce"),
          (0, n.__)("Weak", "woocommerce"),
          (0, n.__)("Medium", "woocommerce"),
          (0, n.__)("Strong", "woocommerce"),
          (0, n.__)("Very strong", "woocommerce"),
        ],
        u = ({ password: e = "", onChange: t }) => {
          var r;
          const m = (0, s.useInstanceId)(
            u,
            "woocommerce-password-strength-meter"
          );
          let p = -1;
          e.length > 0 &&
            (p = ((e) =>
              void 0 === window.zxcvbn
                ? (0, a.Bi)(e, [
                    { id: 0, value: d[0], minDiversity: 0, minLength: 0 },
                    { id: 1, value: d[1], minDiversity: 1, minLength: 4 },
                    { id: 2, value: d[2], minDiversity: 2, minLength: 8 },
                    { id: 3, value: d[3], minDiversity: 4, minLength: 12 },
                    { id: 4, value: d[4], minDiversity: 4, minLength: 20 },
                  ]).id
                : window.zxcvbn(e).score)(e));
          const h = (0, c.Z)(p);
          return (
            (0, i.useEffect)(() => {
              p !== h && t && t(p);
            }, [p, h, t]),
            (0, o.createElement)(
              "div",
              {
                id: m,
                className: (0, l.A)("wc-block-components-password-strength", {
                  hidden: -1 === p,
                }),
              },
              (0, o.createElement)(
                "label",
                { htmlFor: m + "-meter", className: "screen-reader-text" },
                (0, n.__)("Password strength", "woocommerce")
              ),
              (0, o.createElement)(
                "meter",
                {
                  id: m + "-meter",
                  className: "wc-block-components-password-strength__meter",
                  min: 0,
                  max: 4,
                  value: p > -1 ? p : 0,
                },
                null !== (r = d[p]) && void 0 !== r ? r : ""
              ),
              !!d[p] &&
                (0, o.createElement)(
                  "div",
                  {
                    id: m + "-result",
                    className: "wc-block-components-password-strength__result",
                  },
                  (0, o.createElement)(
                    "span",
                    { className: "screen-reader-text", "aria-live": "polite" },
                    (0, n.sprintf)(
                      /* translators: %s: Password strength */ /* translators: %s: Password strength */
                      (0, n.__)(
                        "Password strength: %1$s (%2$d characters long)",
                        "woocommerce"
                      ),
                      d[p],
                      e.length
                    )
                  ),
                  " ",
                  (0, o.createElement)("span", { "aria-hidden": !0 }, d[p])
                )
            )
          );
        },
        m = 251 == r.j ? u : null;
    },
    61: (e, t, r) => {
      "use strict";
      r.d(t, { h: () => d });
      var o = r(1609),
        n = r(851);
      const s = (e) =>
          `wc-block-components-payment-method-icon wc-block-components-payment-method-icon--${e}`,
        a = ({ id: e, src: t = null, alt: r = "" }) =>
          t
            ? (0, o.createElement)("img", { className: s(e), src: t, alt: r })
            : null;
      var c = r(2516);
      const i = [
        {
          id: "alipay",
          alt: "Alipay",
          src: c.sW + "payment-methods/alipay.svg",
        },
        {
          id: "amex",
          alt: "American Express",
          src: c.sW + "payment-methods/amex.svg",
        },
        {
          id: "bancontact",
          alt: "Bancontact",
          src: c.sW + "payment-methods/bancontact.svg",
        },
        {
          id: "diners",
          alt: "Diners Club",
          src: c.sW + "payment-methods/diners.svg",
        },
        {
          id: "discover",
          alt: "Discover",
          src: c.sW + "payment-methods/discover.svg",
        },
        { id: "eps", alt: "EPS", src: c.sW + "payment-methods/eps.svg" },
        {
          id: "giropay",
          alt: "Giropay",
          src: c.sW + "payment-methods/giropay.svg",
        },
        { id: "ideal", alt: "iDeal", src: c.sW + "payment-methods/ideal.svg" },
        { id: "jcb", alt: "JCB", src: c.sW + "payment-methods/jcb.svg" },
        { id: "laser", alt: "Laser", src: c.sW + "payment-methods/laser.svg" },
        {
          id: "maestro",
          alt: "Maestro",
          src: c.sW + "payment-methods/maestro.svg",
        },
        {
          id: "mastercard",
          alt: "Mastercard",
          src: c.sW + "payment-methods/mastercard.svg",
        },
        {
          id: "multibanco",
          alt: "Multibanco",
          src: c.sW + "payment-methods/multibanco.svg",
        },
        { id: "p24", alt: "Przelewy24", src: c.sW + "payment-methods/p24.svg" },
        { id: "sepa", alt: "Sepa", src: c.sW + "payment-methods/sepa.svg" },
        {
          id: "sofort",
          alt: "Sofort",
          src: c.sW + "payment-methods/sofort.svg",
        },
        {
          id: "unionpay",
          alt: "Union Pay",
          src: c.sW + "payment-methods/unionpay.svg",
        },
        { id: "visa", alt: "Visa", src: c.sW + "payment-methods/visa.svg" },
        {
          id: "wechat",
          alt: "WeChat",
          src: c.sW + "payment-methods/wechat.svg",
        },
      ];
      var l = r(3993);
      r(4957);
      const d = ({ icons: e = [], align: t = "center", className: r }) => {
        const s = ((e) => {
          const t = {};
          return (
            e.forEach((e) => {
              let r = {};
              "string" == typeof e && (r = { id: e, alt: e, src: null }),
                "object" == typeof e &&
                  (r = {
                    id: e.id || "",
                    alt: e.alt || "",
                    src: e.src || null,
                  }),
                r.id && (0, l.isString)(r.id) && !t[r.id] && (t[r.id] = r);
            }),
            Object.values(t)
          );
        })(e);
        if (0 === s.length) return null;
        const c = (0, n.A)(
          "wc-block-components-payment-method-icons",
          {
            "wc-block-components-payment-method-icons--align-left":
              "left" === t,
            "wc-block-components-payment-method-icons--align-right":
              "right" === t,
          },
          r
        );
        return (0, o.createElement)(
          "div",
          { className: c },
          s.map((e) => {
            const t = {
              ...e,
              ...((r = e.id), i.find((e) => e.id === r) || {}),
            };
            var r;
            return (0, o.createElement)(a, {
              key: "payment-method-icon-" + e.id,
              ...t,
            });
          })
        );
      };
    },
    4340: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => m });
      var o = r(1609);
      if (251 == r.j) var n = r(851);
      if (251 == r.j) var s = r(2721);
      if (251 == r.j) var a = r(8645);
      if (251 == r.j) var c = r(7104);
      if (251 == r.j) var i = r(2900);
      var l = r(3013),
        d = r(910),
        u = r(4656);
      const m =
        251 == r.j
          ? ({
              label: e,
              fullWidth: t = !1,
              showPrice: r = !1,
              priceSeparator: m = "·",
            }) => {
              const {
                  onSubmit: p,
                  isCalculating: h,
                  isDisabled: g,
                  waitingForProcessing: _,
                  waitingForRedirect: v,
                } = (0, s.w)(),
                { cartTotals: f } = (0, a.V)(),
                b = (0, d.getCurrencyFromPriceResponse)(f),
                E = (0, o.createElement)(
                  "div",
                  {
                    "aria-hidden": _ || v,
                    className: (0, n.A)(
                      "wc-block-components-checkout-place-order-button__text",
                      {
                        "wc-block-components-checkout-place-order-button__text--visually-hidden":
                          _ || v,
                      }
                    ),
                  },
                  e,
                  r &&
                    (0, o.createElement)(
                      o.Fragment,
                      null,
                      (0, o.createElement)(
                        "style",
                        null,
                        `.wp-block-woocommerce-checkout-actions-block {\n\t\t\t\t\t\t\t.wc-block-components-checkout-place-order-button__separator {\n\t\t\t\t\t\t\t\t&::after {\n\t\t\t\t\t\t\t\t\tcontent: "${m}";\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}`
                      ),
                      (0, o.createElement)("div", {
                        className:
                          "wc-block-components-checkout-place-order-button__separator",
                      }),
                      (0, o.createElement)(
                        "div",
                        {
                          className:
                            "wc-block-components-checkout-place-order-button__price",
                        },
                        (0, o.createElement)(u.FormattedMonetaryAmount, {
                          value: f.total_price,
                          currency: b,
                        })
                      )
                    )
                );
              return (0, o.createElement)(
                l.A,
                {
                  className: (0, n.A)(
                    "wc-block-components-checkout-place-order-button",
                    {
                      "wc-block-components-checkout-place-order-button--full-width":
                        t,
                    },
                    { "wc-blocks-components-button--loading": _ }
                  ),
                  onClick: p,
                  disabled: h || g || _ || v,
                  showSpinner: _,
                },
                _ && (0, o.createElement)(u.Spinner, null),
                v && (0, o.createElement)(c.A, { icon: i.A }),
                E
              );
            }
          : null;
    },
    8242: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => a });
      var o = r(1609),
        n = r(7723),
        s = r(6802);
      const a = /^(251|2895|7949)$/.test(r.j)
        ? () =>
            (0, o.createElement)(
              s.A,
              { className: "wc-block-components-product-backorder-badge" },
              (0, n.__)("Available on backorder", "woocommerce")
            )
        : null;
    },
    6802: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => s });
      var o = r(1609);
      if (/^(251|2895|7949)$/.test(r.j)) var n = r(851);
      r(9507);
      const s = /^(251|2895|7949)$/.test(r.j)
        ? ({ children: e, className: t }) =>
            (0, o.createElement)(
              "div",
              { className: (0, n.A)("wc-block-components-product-badge", t) },
              e
            )
        : null;
    },
    9792: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => a });
      var o = r(1609),
        n = r(8537),
        s = r(5703);
      const a = /^(251|2895|7949)$/.test(r.j)
        ? ({ image: e = {}, fallbackAlt: t = "" }) => {
            const r = e.thumbnail
              ? {
                  src: e.thumbnail,
                  alt: (0, n.decodeEntities)(e.alt) || t || "Product Image",
                }
              : { src: s.PLACEHOLDER_IMG_SRC, alt: "" };
            return (0, o.createElement)("img", { ...r, alt: r.alt });
          }
        : null;
    },
    7578: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => a });
      var o = r(1609),
        n = r(7723),
        s = r(6802);
      const a = /^(251|2895|7949)$/.test(r.j)
        ? ({ lowStockRemaining: e }) =>
            e
              ? (0, o.createElement)(
                  s.A,
                  { className: "wc-block-components-product-low-stock-badge" },
                  (0, n.sprintf)(
                    /* translators: %d stock amount (number of items in stock for product) */ /* translators: %d stock amount (number of items in stock for product) */
                    (0, n.__)("%d left in stock", "woocommerce"),
                    e
                  )
                )
              : null
        : null;
    },
    3776: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => v });
      var o = r(1609),
        n = r(1194),
        s = r(8537);
      r(4982);
      const a = ({ details: e = [] }) => {
        if (!Array.isArray(e)) return null;
        if (0 === (e = e.filter((e) => !e.hidden)).length) return null;
        let t = "ul",
          r = "li";
        return (
          1 === e.length && ((t = "div"), (r = "div")),
          (0, o.createElement)(
            t,
            { className: "wc-block-components-product-details" },
            e.map((e) => {
              const t = (null == e ? void 0 : e.key) || e.name || "",
                a =
                  (null == e ? void 0 : e.className) ||
                  (t
                    ? `wc-block-components-product-details__${(0, n.c)(t)}`
                    : "");
              return (0, o.createElement)(
                r,
                { key: t + (e.display || e.value), className: a },
                t &&
                  (0, o.createElement)(
                    o.Fragment,
                    null,
                    (0, o.createElement)(
                      "span",
                      {
                        className: "wc-block-components-product-details__name",
                      },
                      (0, s.decodeEntities)(t),
                      ":"
                    ),
                    " "
                  ),
                (0, o.createElement)(
                  "span",
                  { className: "wc-block-components-product-details__value" },
                  (0, s.decodeEntities)(e.display || e.value)
                )
              );
            })
          )
        );
      };
      var c = r(6087),
        i = r(3398),
        l = r(6004),
        d = r(6769),
        u = r(9446);
      const m = [
          "a",
          "b",
          "em",
          "i",
          "strong",
          "p",
          "br",
          "ul",
          "ol",
          "li",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "pre",
          "blockquote",
          "img",
        ],
        p = [
          "target",
          "href",
          "rel",
          "name",
          "download",
          "src",
          "class",
          "alt",
          "style",
        ],
        h = ({
          source: e,
          maxLength: t = 15,
          countType: r = "words",
          className: n = "",
          style: s = {},
        }) => {
          const a = (0, c.useMemo)(
            () =>
              ((e, t = 15, r = "words") => {
                const o = (0, l.autop)(e);
                if ((0, u.count)(o, r) <= t) return o;
                const n = ((e) => {
                  const t = e.indexOf("</p>");
                  return -1 === t ? e : e.substr(0, t + 4);
                })(o);
                return (0, u.count)(n, r) <= t
                  ? n
                  : "words" === r
                  ? (0, d.G$)(n, t)
                  : (0, d.Bk)(n, t, "characters_including_spaces" === r);
              })(e, t, r),
            [e, t, r]
          );
          return (0, o.createElement)(
            c.RawHTML,
            { style: s, className: n },
            (0, i.p)(a, { tags: m, attr: p })
          );
        };
      var g = r(2516);
      const _ = ({
        className: e,
        shortDescription: t = "",
        fullDescription: r = "",
      }) => {
        const n = t || r;
        return n
          ? (0, o.createElement)(h, {
              className: e,
              source: n,
              maxLength: 15,
              countType: g.r7.wordCountType || "words",
            })
          : null;
      };
      r(401);
      const v = ({
        shortDescription: e = "",
        fullDescription: t = "",
        itemData: r = [],
        variation: n = [],
      }) =>
        (0, o.createElement)(
          "div",
          { className: "wc-block-components-product-metadata" },
          (0, o.createElement)(_, {
            className: "wc-block-components-product-metadata__description",
            shortDescription: e,
            fullDescription: t,
          }),
          (0, o.createElement)(a, { details: r }),
          (0, o.createElement)(a, {
            details: n.map(({ attribute: e = "", value: t }) => ({
              key: e,
              value: t,
            })),
          })
        );
    },
    6333: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => c });
      var o = r(1609),
        n = r(2516);
      if (251 == r.j) var s = r(7104);
      if (251 == r.j) var a = r(1387);
      r(718);
      const c =
        251 == r.j
          ? ({ href: e, children: t }) => {
              const r = e || n.Vo;
              return r
                ? (0, o.createElement)(
                    "a",
                    {
                      href: r,
                      className:
                        "wc-block-components-checkout-return-to-cart-button",
                    },
                    (0, o.createElement)(s.A, { icon: a.A }),
                    t
                  )
                : null;
            }
          : null;
    },
    6417: (e, t, r) => {
      "use strict";
      r.d(t, { S: () => o });
      const o = (0, r(6087).createContext)({
        shippingCalculatorID: "",
        showCalculator: !1,
        isShippingCalculatorOpen: !1,
        setIsShippingCalculatorOpen: () => {},
      });
    },
    4179: (e, t, r) => {
      "use strict";
      r.d(t, { Sp: () => v.S, fE: () => b });
      var o = r(1609),
        n = r(6087),
        s = r(8867),
        a = r(7143),
        c = r(7594),
        i = r(4656),
        l = r(108),
        d = r(7723),
        u = r(3013),
        m = r(923),
        p = r.n(m),
        h = r(5238),
        g = (r(7051), r(56));
      const _ = ({
        address: e,
        onUpdate: t,
        onCancel: r,
        addressFields: s,
      }) => {
        const [i, l] = (0, n.useState)(e),
          { showAllValidationErrors: m } = (0, a.useDispatch)(
            c.validationStore
          ),
          _ = (0, h.E)(),
          { hasValidationErrors: v, isCustomerDataUpdating: f } = (0,
          a.useSelect)((e) => ({
            hasValidationErrors: e(c.validationStore).hasValidationErrors,
            isCustomerDataUpdating: e(c.cartStore).isCustomerDataUpdating(),
          }));
        return (0, o.createElement)(
          "form",
          {
            className: "wc-block-components-shipping-calculator-address",
            ref: _,
          },
          (0, o.createElement)(g.l, { fields: s, onChange: l, values: i }),
          (0, o.createElement)(
            u.A,
            {
              className:
                "wc-block-components-shipping-calculator-address__button",
              disabled: f,
              variant: "outlined",
              onClick: (o) => {
                if ((o.preventDefault(), p()(i, e))) return r();
                if ((m(), !v())) {
                  const e = {};
                  return (
                    s.forEach((t) => {
                      void 0 !== i[t] && (e[t] = i[t]);
                    }),
                    t(e)
                  );
                }
              },
              type: "submit",
            },
            (0, d.__)("Check delivery options", "woocommerce")
          )
        );
      };
      var v = r(6417);
      const f = ({
          onUpdate: e = () => {},
          onCancel: t = () => {},
          addressFields: r = ["country", "state", "city", "postcode"],
        }) => {
          const {
              shippingCalculatorID: d,
              showCalculator: u,
              setIsShippingCalculatorOpen: m,
            } = (0, n.useContext)(v.S),
            { shippingAddress: p } = (0, s.q)(),
            h = "wc/cart/shipping-calculator",
            g = (0, n.useCallback)(() => {
              m(!1), t();
            }, [m, t]),
            f = (0, n.useCallback)(
              (t) => {
                (0, a.dispatch)(c.cartStore)
                  .updateCustomerData({ shipping_address: t }, !1)
                  .then(() => {
                    (0, l.jj)(h), m(!1), e(t);
                  })
                  .catch((e) => {
                    (0, c.processErrorResponse)(e, h);
                  });
              },
              [e, m]
            );
          return u
            ? (0, o.createElement)(
                "div",
                { className: "wc-block-components-shipping-calculator", id: d },
                (0, o.createElement)(i.StoreNoticesContainer, { context: h }),
                (0, o.createElement)(_, {
                  address: p,
                  addressFields: r,
                  onCancel: g,
                  onUpdate: f,
                })
              )
            : null;
        },
        b = ({ title: e }) => {
          const {
            isShippingCalculatorOpen: t,
            setIsShippingCalculatorOpen: r,
          } = (0, n.useContext)(v.S);
          return (0, o.createElement)(
            i.Panel,
            {
              className: "wc-block-components-totals-shipping-panel",
              initialOpen: !1,
              hasBorder: !1,
              title: e,
              state: [t, r],
            },
            (0, o.createElement)(f, null)
          );
        };
    },
    311: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => b });
      var o = r(1609),
        n = r(851),
        s = r(8537),
        a = r(4656),
        c = r(6087),
        i = r(5606),
        l = r(3398),
        d = r(7143),
        u = r(7594),
        m = r(4015),
        p = r(910),
        h = r(5703),
        g = r(7723);
      const _ = (e) => {
          const t = (0, h.getSetting)("displayCartPricesIncludingTax", !1)
            ? parseInt(e.price, 10) + parseInt(e.taxes, 10)
            : parseInt(e.price, 10);
          let r = (0, o.createElement)(
            o.Fragment,
            null,
            Number.isFinite(t) &&
              (0, o.createElement)(a.FormattedMonetaryAmount, {
                currency: (0, p.getCurrencyFromPriceResponse)(e),
                value: t,
              }),
            (0, o.createElement)(
              "span",
              {
                className:
                  "wc-block-components-shipping-rates-control__package__delivery_time",
              },
              Number.isFinite(t) && e.delivery_time ? " — " : null,
              (0, s.decodeEntities)(e.delivery_time)
            )
          );
          return (
            0 === t &&
              (r = (0, o.createElement)(
                "span",
                {
                  className:
                    "wc-block-components-shipping-rates-control__package__description--free",
                },
                (0, g.__)("Free", "woocommerce"),
                (0, o.createElement)(
                  "span",
                  {
                    className:
                      "wc-block-components-shipping-rates-control__package__delivery_time",
                  },
                  e.delivery_time &&
                    " — " + (0, s.decodeEntities)(e.delivery_time)
                )
              )),
            {
              label: (0, s.decodeEntities)(e.name),
              value: e.rate_id,
              description: r,
            }
          );
        },
        v = ({
          className: e = "",
          noResultsMessage: t,
          onSelectRate: r,
          rates: n,
          renderOption: s = _,
          selectedRate: i,
          disabled: l = !1,
          highlightChecked: d = !1,
        }) => {
          const u = (null == i ? void 0 : i.rate_id) || "",
            p = (0, m.Z)(u),
            [h, g] = (0, c.useState)(null != u ? u : "");
          return (
            (0, c.useEffect)(() => {
              u && u !== p && u !== h && g(u);
            }, [u, h, p]),
            (0, c.useEffect)(() => {
              !h && n.length > 0 && (g(n[0].rate_id), r(n[0].rate_id));
            }, [r, n, h]),
            0 === n.length
              ? t
              : (0, o.createElement)(a.RadioControl, {
                  className: e,
                  onChange: (e) => {
                    g(e), r(e);
                  },
                  highlightChecked: d,
                  disabled: l,
                  selected: h,
                  options: n.map(s),
                })
          );
        },
        f = ({ packageData: e }) =>
          (0, o.createElement)(
            "ul",
            {
              className:
                "wc-block-components-shipping-rates-control__package-items",
            },
            Object.values(e.items).map((e) => {
              const t = (0, s.decodeEntities)(e.name),
                r = e.quantity;
              return (0, o.createElement)(
                "li",
                {
                  key: e.key,
                  className:
                    "wc-block-components-shipping-rates-control__package-item",
                },
                (0, o.createElement)(a.Label, {
                  label: r > 1 ? `${t} × ${r}` : `${t}`,
                  allowHTML: !0,
                  screenReaderLabel: (0, g.sprintf)(
                    /* translators: %1$s name of the product (ie: Sunglasses), %2$d number of units in the current cart package */ /* translators: %1$s name of the product (ie: Sunglasses), %2$d number of units in the current cart package */
                    (0, g._n)(
                      "%1$s (%2$d unit)",
                      "%1$s (%2$d units)",
                      r,
                      "woocommerce"
                    ),
                    t,
                    r
                  ),
                })
              );
            })
          );
      r(2867);
      const b = ({
        packageId: e,
        className: t = "",
        noResultsMessage: r,
        renderOption: m,
        packageData: p,
        collapsible: h,
        showItems: g,
        highlightChecked: _ = !1,
      }) => {
        var b;
        const { selectShippingRate: E, isSelectingRate: y } = (0, i.m)(),
          k = (0, d.useSelect)((e) => {
            var t;
            return null === (t = e(u.cartStore)) ||
              void 0 === t ||
              null === (t = t.getCartData()) ||
              void 0 === t ||
              null === (t = t.shippingRates) ||
              void 0 === t
              ? void 0
              : t.length;
          }),
          [w, S] = (0, c.useState)(0),
          C = k > 1 || w > 1;
        (0, c.useEffect)(() => {
          const e = () => {
            S(
              document.querySelectorAll(
                ".wc-block-components-shipping-rates-control__package"
              ).length
            );
          };
          e();
          const t = new MutationObserver(e);
          return (
            t.observe(document.body, { childList: !0, subtree: !0 }),
            () => {
              t.disconnect();
            }
          );
        }, []);
        const A = null != g ? g : C,
          N = null != h ? h : C,
          { selectedOptionNumber: P, selectedOption: x } = (0,
          c.useMemo)(() => {
            var e, t;
            return {
              selectedOptionNumber:
                null == p || null === (e = p.shipping_rates) || void 0 === e
                  ? void 0
                  : e.findIndex((e) => (null == e ? void 0 : e.selected)),
              selectedOption:
                null == p || null === (t = p.shipping_rates) || void 0 === t
                  ? void 0
                  : t.find((e) => (null == e ? void 0 : e.selected)),
            };
          }, [null == p ? void 0 : p.shipping_rates]),
          R =
            N || A
              ? (0, o.createElement)(
                  "div",
                  {
                    className:
                      "wc-block-components-shipping-rates-control__package-header",
                  },
                  (0, o.createElement)("div", {
                    className:
                      "wc-block-components-shipping-rates-control__package-title",
                    dangerouslySetInnerHTML: { __html: (0, l.p)(p.name) },
                  }),
                  N &&
                    (0, o.createElement)(
                      "div",
                      { className: "wc-block-components-totals-shipping__via" },
                      (0, s.decodeEntities)(null == x ? void 0 : x.name)
                    ),
                  A && (0, o.createElement)(f, { packageData: p })
                )
              : null,
          I = (0, c.useCallback)(
            (t) => {
              E(t, e);
            },
            [e, E]
          ),
          M = {
            className: t,
            noResultsMessage: r,
            rates: p.shipping_rates,
            onSelectRate: I,
            selectedRate: p.shipping_rates.find((e) => e.selected),
            renderOption: m,
            disabled: y,
            highlightChecked: _,
          };
        return N
          ? (0, o.createElement)(
              a.Panel,
              {
                className: (0, n.A)(
                  "wc-block-components-shipping-rates-control__package",
                  t,
                  {
                    "wc-block-components-shipping-rates-control__package--disabled":
                      y,
                  }
                ),
                initialOpen: !1,
                title: R,
              },
              (0, o.createElement)(v, { ...M })
            )
          : (0, o.createElement)(
              "div",
              {
                className: (0, n.A)(
                  "wc-block-components-shipping-rates-control__package",
                  t,
                  {
                    "wc-block-components-shipping-rates-control__package--disabled":
                      y,
                    "wc-block-components-shipping-rates-control__package--first-selected":
                      !y && 0 === P,
                    "wc-block-components-shipping-rates-control__package--last-selected":
                      !y &&
                      P ===
                        (null == p ||
                        null === (b = p.shipping_rates) ||
                        void 0 === b
                          ? void 0
                          : b.length) -
                          1,
                  }
                ),
              },
              R,
              (0, o.createElement)(v, { ...M })
            );
      };
    },
    7874: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => f });
      var o = r(1609),
        n = r(7723),
        s = r(6087),
        a = r(4015),
        c = r(3872),
        i = r(1e3),
        l = r(3835),
        d = r(8645),
        u = r(1759),
        m = r(5606),
        p = r(4090),
        h = r(3993),
        g = r(311),
        _ = r(195);
      const v = ({
          packages: e,
          showItems: t,
          collapsible: r,
          noResultsMessage: n,
          renderOption: s,
          context: a = "",
        }) =>
          e.length
            ? (0, o.createElement)(
                o.Fragment,
                null,
                e.map(({ package_id: e, ...c }) =>
                  (0, o.createElement)(g.A, {
                    highlightChecked: "woocommerce/cart" !== a,
                    key: e,
                    packageId: e,
                    packageData: c,
                    collapsible: r,
                    showItems: t,
                    noResultsMessage: n,
                    renderOption: s,
                  })
                )
              )
            : null,
        f = ({
          shippingRates: e,
          isLoadingRates: t,
          className: r,
          collapsible: f,
          showItems: b,
          noResultsMessage: E = (0, o.createElement)(o.Fragment, null),
          renderOption: y,
          context: k,
        }) => {
          const w = (0, l.Lb)(e),
            S = (0, l.T4)(e),
            C = (0, a.Z)(w),
            A = (0, a.Z)(S);
          (0, s.useEffect)(() => {
            var e, r;
            t ||
              (C === w && A === S) ||
              ((r = w),
              1 === (e = S)
                ? (0, _.speak)(
                    (0, n.sprintf)(
                      /* translators: %d number of shipping options found. */ /* translators: %d number of shipping options found. */
                      (0, n._n)(
                        "%d shipping option was found.",
                        "%d shipping options were found.",
                        r,
                        "woocommerce"
                      ),
                      r
                    )
                  )
                : (0, _.speak)(
                    (0, n.sprintf)(
                      /* translators: %d number of shipping packages packages. */ /* translators: %d number of shipping packages packages. */
                      (0, n._n)(
                        "Shipping option searched for %d package.",
                        "Shipping options searched for %d packages.",
                        e,
                        "woocommerce"
                      ),
                      e
                    ) +
                      " " +
                      (0, n.sprintf)(
                        /* translators: %d number of shipping options available. */ /* translators: %d number of shipping options available. */
                        (0, n._n)(
                          "%d shipping option was found",
                          "%d shipping options were found",
                          r,
                          "woocommerce"
                        ),
                        r
                      )
                  ));
          }, [t, w, S, C, A]);
          const { extensions: N, receiveCart: P, ...x } = (0, d.V)(),
            R = {
              className: r,
              collapsible: f,
              showItems: b,
              noResultsMessage: E,
              renderOption: y,
              extensions: N,
              cart: x,
              components: { ShippingRatesControlPackage: g.A },
              context: k,
            },
            { isEditor: I } = (0, u.m)(),
            { hasSelectedLocalPickup: M, selectedRates: T } = (0, m.m)(),
            j = (0, h.isObject)(T) ? Object.values(T) : [],
            $ = j.every((e) => e === j[0]);
          return (0, o.createElement)(
            c.A,
            {
              isLoading: t,
              screenReaderLabel: (0, n.__)(
                "Loading shipping rates…",
                "woocommerce"
              ),
              showSpinner: !0,
            },
            M &&
              "woocommerce/cart" === k &&
              e.length > 1 &&
              !$ &&
              !I &&
              (0, o.createElement)(
                p.A,
                {
                  className: "wc-block-components-notice",
                  isDismissible: !1,
                  status: "warning",
                },
                (0, n.__)(
                  "Multiple shipments must have the same pickup location",
                  "woocommerce"
                )
              ),
            (0, o.createElement)(i.ExperimentalOrderShippingPackages.Slot, {
              ...R,
            }),
            (0, o.createElement)(
              i.ExperimentalOrderShippingPackages,
              null,
              (0, o.createElement)(v, {
                packages: e,
                noResultsMessage: E,
                renderOption: y,
              })
            )
          );
        };
    },
    8223: (e, t, r) => {
      "use strict";
      r.d(t, { _i: () => u, n$: () => g, Ay: () => b, w7: () => P });
      var o = r(1609),
        n = r(7723),
        s = r(6087),
        a = r(3013),
        c = r(3872),
        i = r(4656),
        l = r(7143),
        d = r(7594);
      r(3048);
      const u = ({
        instanceId: e,
        isLoading: t = !1,
        onSubmit: r,
        displayCouponForm: u = !1,
      }) => {
        const [m, p] = (0, s.useState)(""),
          [h, g] = (0, s.useState)(u),
          _ = `wc-block-components-totals-coupon__input-${e}`,
          { validationErrorId: v } = (0, l.useSelect)((t) => ({
            validationErrorId: t(d.validationStore).getValidationErrorId(e),
          })),
          f = (0, s.useRef)(null);
        return (0, o.createElement)(
          i.Panel,
          {
            className: "wc-block-components-totals-coupon",
            initialOpen: h,
            hasBorder: !1,
            headingLevel: 2,
            title: (0, n.__)("Add a coupon", "woocommerce"),
            state: [h, g],
          },
          (0, o.createElement)(
            c.A,
            {
              screenReaderLabel: (0, n.__)("Applying coupon…", "woocommerce"),
              isLoading: t,
              showSpinner: !1,
            },
            (0, o.createElement)(
              "div",
              { className: "wc-block-components-totals-coupon__content" },
              (0, o.createElement)(
                "form",
                {
                  className: "wc-block-components-totals-coupon__form",
                  id: "wc-block-components-totals-coupon__form",
                },
                (0, o.createElement)(i.ValidatedTextInput, {
                  id: _,
                  errorId: "coupon",
                  className: "wc-block-components-totals-coupon__input",
                  label: (0, n.__)("Enter code", "woocommerce"),
                  value: m,
                  ariaDescribedBy: v,
                  onChange: (e) => {
                    p(e);
                  },
                  focusOnMount: !0,
                  validateOnMount: !1,
                  showError: !1,
                  ref: f,
                }),
                (0, o.createElement)(
                  a.A,
                  {
                    className: "wc-block-components-totals-coupon__button",
                    disabled: t || !m,
                    showSpinner: t,
                    onClick: (e) => {
                      var t;
                      e.preventDefault(),
                        void 0 !== r
                          ? null === (t = r(m)) ||
                            void 0 === t ||
                            t.then((e) => {
                              var t;
                              e
                                ? (p(""), g(!1))
                                : null !== (t = f.current) &&
                                  void 0 !== t &&
                                  t.focus &&
                                  f.current.focus();
                            })
                          : (p(""), g(!0));
                    },
                    type: "submit",
                  },
                  (0, n.__)("Apply", "woocommerce")
                )
              ),
              (0, o.createElement)(i.ValidationInputError, {
                propertyName: "coupon",
                elementId: e,
              })
            )
          )
        );
      };
      var m = r(1e3),
        p = r(5703);
      r(265);
      const h = { context: "summary" },
        g = ({
          cartCoupons: e = [],
          currency: t,
          isRemovingCoupon: r,
          removeCoupon: s,
          values: a,
        }) => {
          const { total_discount: l, total_discount_tax: d } = a,
            u = parseInt(l, 10),
            g = (0, m.applyCheckoutFilter)({
              arg: h,
              filterName: "coupons",
              defaultValue: e,
            });
          if (!u && 0 === g.length) return null;
          const _ = parseInt(d, 10),
            v = (0, p.getSetting)("displayCartPricesIncludingTax", !1)
              ? u + _
              : u;
          return (0, o.createElement)(i.TotalsItem, {
            className: "wc-block-components-totals-discount",
            currency: t,
            description:
              0 !== g.length &&
              (0, o.createElement)(
                c.A,
                {
                  screenReaderLabel: (0, n.__)(
                    "Removing coupon…",
                    "woocommerce"
                  ),
                  isLoading: r,
                  showSpinner: !1,
                },
                (0, o.createElement)(
                  "ul",
                  {
                    className:
                      "wc-block-components-totals-discount__coupon-list",
                  },
                  g.map((e) =>
                    (0, o.createElement)(i.RemovableChip, {
                      key: "coupon-" + e.code,
                      className:
                        "wc-block-components-totals-discount__coupon-list-item",
                      text: e.label,
                      screenReaderText: (0, n.sprintf)(
                        /* translators: %s Coupon code. */ /* translators: %s Coupon code. */
                        (0, n.__)("Coupon: %s", "woocommerce"),
                        e.label
                      ),
                      disabled: r,
                      onRemove: () => {
                        s(e.code);
                      },
                      radius: "large",
                      ariaLabel: (0, n.sprintf)(
                        /* translators: %s is a coupon code. */ /* translators: %s is a coupon code. */
                        (0, n.__)('Remove coupon "%s"', "woocommerce"),
                        e.label
                      ),
                    })
                  )
                )
              ),
            label: v
              ? (0, n.__)("Discount", "woocommerce")
              : (0, n.__)("Coupons", "woocommerce"),
            value: v ? -1 * v : "-",
          });
        };
      var _ = r(851),
        v = r(8645),
        f = r(910);
      r(7919);
      const b = ({ currency: e, values: t, className: r }) => {
        const a =
            (0, p.getSetting)("taxesEnabled", !0) &&
            (0, p.getSetting)("displayCartPricesIncludingTax", !1),
          { total_price: c, total_tax: l, tax_lines: d } = t,
          { receiveCart: u, ...h } = (0, v.V)(),
          g = (0, m.applyCheckoutFilter)({
            filterName: "totalLabel",
            defaultValue: (0, n.__)("Total", "woocommerce"),
            extensions: h.extensions,
            arg: { cart: h },
          }),
          b = (0, m.applyCheckoutFilter)({
            filterName: "totalValue",
            defaultValue: "<price/>",
            extensions: h.extensions,
            arg: { cart: h },
            validation: m.productPriceValidation,
          }),
          E = (0, o.createElement)(i.FormattedMonetaryAmount, {
            className: "wc-block-components-totals-footer-item-tax-value",
            currency: e,
            value: parseInt(c, 10),
          }),
          y = (0, s.createInterpolateElement)(b, { price: E }),
          k = parseInt(l, 10),
          w =
            d && d.length > 0
              ? (0, n.sprintf)(
                  /* translators: %s is a list of tax rates */ /* translators: %s is a list of tax rates */
                  (0, n.__)("Including %s", "woocommerce"),
                  d
                    .map(
                      ({ name: t, price: r }) =>
                        `${(0, f.formatPrice)(r, e)} ${t}`
                    )
                    .join(", ")
                )
              : (0, n.__)("Including <TaxAmount/> in taxes", "woocommerce");
        return (0, o.createElement)(i.TotalsItem, {
          className: (0, _.A)("wc-block-components-totals-footer-item", r),
          currency: e,
          label: g,
          value: y,
          description:
            a &&
            0 !== k &&
            (0, o.createElement)(
              "p",
              { className: "wc-block-components-totals-footer-item-tax" },
              (0, s.createInterpolateElement)(w, {
                TaxAmount: (0, o.createElement)(i.FormattedMonetaryAmount, {
                  className: "wc-block-components-totals-footer-item-tax-value",
                  currency: e,
                  value: k,
                }),
              })
            ),
        });
      };
      var E = r(3835),
        y = r(8537);
      const k = () => {
        const { shippingRates: e } = (0, v.V)(),
          t = (0, E.qr)(e);
        return t
          ? (0, o.createElement)(
              "div",
              { className: "wc-block-components-totals-shipping__via" },
              (0, y.decodeEntities)(
                t.filter((e, r) => t.indexOf(e) === r).join(", ")
              )
            )
          : null;
      };
      var w = r(3643),
        S = r(4179),
        C = r(3993);
      const A = (e) => {
          const t = (0, E.mH)(e);
          return 0 === t
            ? (0, o.createElement)(
                "strong",
                null,
                (0, n.__)("Free", "woocommerce")
              )
            : t;
        },
        N = () => {
          const { shippingRates: e, shippingAddress: t } = (0, v.V)(),
            r = (0, l.useSelect)((e) => e(d.checkoutStore).prefersCollection()),
            a = (0, E.HI)(e),
            { showCalculator: c } = (0, s.useContext)(S.Sp),
            i = r
              ? ((e) => {
                  const t = (e || [])
                    .flatMap((e) => e.shipping_rates)
                    .find((e) => e.selected && (0, E.J_)(e));
                  if (
                    (0, C.isObject)(t) &&
                    (0, C.objectHasProp)(t, "meta_data")
                  ) {
                    const e = t.meta_data.find(
                      (e) => "pickup_address" === e.key
                    );
                    if (
                      (0, C.isObject)(e) &&
                      (0, C.objectHasProp)(e, "value") &&
                      e.value
                    )
                      return e.value;
                  }
                  return "";
                })(e)
              : (0, w.i0)(t),
            u = a
              ? // Translators: <address/> is the formatted shipping address.
                // Translators: <address/> is the formatted shipping address.
                (0, n.__)("Delivers to <address/>", "woocommerce")
              : // Translators: <address/> is the formatted shipping address.
                // Translators: <address/> is the formatted shipping address.
                (0, n.__)(
                  "No delivery options available for <address/>",
                  "woocommerce"
                ),
            m = (0, w.KY)(t, ["state", "city", "country", "postcode"]),
            h = (0, p.getSetting)("shippingCostRequiresAddress", !1) && !m,
            g = r
              ? // Translators: <address/> is the pickup location.
                // Translators: <address/> is the pickup location.
                (0, n.__)("Collection from <address/>", "woocommerce")
              : u,
            _ = (0, o.createElement)(
              "p",
              {
                className:
                  "wc-block-components-totals-shipping-address-summary",
              },
              i && !h
                ? (0, s.createInterpolateElement)(g, {
                    address: (0, o.createElement)("strong", null, i),
                  })
                : (0, o.createElement)(
                    o.Fragment,
                    null,
                    (0, n.__)(
                      "Enter address to check delivery options",
                      "woocommerce"
                    )
                  )
            );
          return (0, o.createElement)(
            "div",
            { className: "wc-block-components-shipping-address" },
            c && (0, o.createElement)(S.fE, { title: _ })
          );
        };
      r(780);
      const P = ({
        label: e = (0, n.__)("Shipping", "woocommerce"),
        placeholder: t = null,
        collaterals: r = null,
      }) => {
        const { cartTotals: s, shippingRates: a } = (0, v.V)(),
          c = (0, E.HI)(a);
        return (0, o.createElement)(
          "div",
          { className: "wc-block-components-totals-shipping" },
          (0, o.createElement)(i.TotalsItem, {
            label: e,
            value: c ? A(s) : t,
            description: (0, o.createElement)(
              o.Fragment,
              null,
              !!c && (0, o.createElement)(k, null),
              (0, o.createElement)(N, null),
              r &&
                (0, o.createElement)(
                  "div",
                  {
                    className:
                      "wc-block-components-totals-shipping__collaterals",
                  },
                  r
                )
            ),
            currency: (0, f.getCurrencyFromPriceResponse)(s),
          })
        );
      };
    },
    7332: (e, t, r) => {
      "use strict";
      r.d(t, { s: () => _, A: () => f });
      var o = r(1609),
        n = r(851),
        s = r(4717),
        a = r(7723),
        c = r(6087),
        i = r(7104),
        l = r(1208),
        d = r(9491),
        u = r(5238),
        m = r(3013);
      const p = new Set(["alert", "status", "log", "marquee", "timer"]);
      let h = [],
        g = !1;
      r(1041);
      const _ = () =>
          (0, o.createElement)("div", {
            className: "wc-block-components-drawer__close-wrapper",
          }),
        v = ({ onClick: e, contentRef: t }) => {
          var r;
          const n =
            null == t || null === (r = t.current) || void 0 === r
              ? void 0
              : r.querySelector(".wc-block-components-drawer__close-wrapper");
          return n
            ? (0, c.createPortal)(
                (0, o.createElement)(
                  m.A,
                  {
                    className: "wc-block-components-drawer__close",
                    onClick: e,
                    removeTextWrap: !0,
                    "aria-label": (0, a.__)("Close", "woocommerce"),
                  },
                  (0, o.createElement)(i.A, { icon: l.A })
                ),
                n
              )
            : null;
        },
        f = (0, c.forwardRef)(
          (
            {
              children: e,
              className: t,
              isOpen: r,
              onClose: a,
              slideIn: i = !0,
              slideOut: l = !0,
            },
            m
          ) => {
            const [_] = (0, s.d7)(r, 300),
              f = !r && _,
              b = "drawer-open",
              E = () => {
                document.body.classList.remove(b),
                  g &&
                    (h.forEach((e) => {
                      e.removeAttribute("aria-hidden");
                    }),
                    (h = []),
                    (g = !1)),
                  a();
              },
              y = (0, c.useRef)(),
              k = (0, d.useFocusOnMount)(),
              w = (0, d.useConstrainedTabbing)(),
              S = (0, u.E)(),
              C = (0, c.useRef)(null);
            (0, c.useEffect)(() => {
              var e;
              r &&
                ((e = y.current),
                g ||
                  (Array.from(document.body.children).forEach((t) => {
                    t !== e &&
                      (function (e) {
                        const t = e.getAttribute("role");
                        return !(
                          "SCRIPT" === e.tagName ||
                          e.hasAttribute("aria-hidden") ||
                          e.hasAttribute("aria-live") ||
                          (t && p.has(t))
                        );
                      })(t) &&
                      (t.setAttribute("aria-hidden", "true"), h.push(t));
                  }),
                  (g = !0)),
                document.body.classList.add(b));
            }, [r, b]);
            const A = (0, d.useMergeRefs)([y, m]),
              N = (0, d.useMergeRefs)([w, S, k]);
            return r || f
              ? (0, c.createPortal)(
                  (0, o.createElement)(
                    "div",
                    {
                      ref: A,
                      className: (0, n.A)(
                        "wc-block-components-drawer__screen-overlay",
                        {
                          "wc-block-components-drawer__screen-overlay--is-hidden":
                            !r,
                          "wc-block-components-drawer__screen-overlay--with-slide-in":
                            i,
                          "wc-block-components-drawer__screen-overlay--with-slide-out":
                            l,
                        }
                      ),
                      onKeyDown: function (e) {
                        e.nativeEvent.isComposing ||
                          229 === e.keyCode ||
                          "Escape" !== e.code ||
                          e.defaultPrevented ||
                          (e.preventDefault(), E());
                      },
                      onClick: (e) => {
                        e.target === y.current && E();
                      },
                    },
                    (0, o.createElement)(
                      "div",
                      {
                        className: (0, n.A)(t, "wc-block-components-drawer"),
                        ref: N,
                        role: "dialog",
                        tabIndex: -1,
                      },
                      (0, o.createElement)(
                        "div",
                        {
                          className: "wc-block-components-drawer__content",
                          role: "document",
                          ref: C,
                        },
                        (0, o.createElement)(v, { contentRef: C, onClick: E }),
                        e
                      )
                    )
                  ),
                  document.body
                )
              : null;
          }
        );
    },
    3872: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => c });
      var o = r(1609),
        n = r(7723);
      if (/^(251|7949)$/.test(r.j)) var s = r(851);
      var a = r(4656);
      r(8375);
      const c = /^(251|7949)$/.test(r.j)
        ? ({
            children: e,
            className: t,
            screenReaderLabel: r,
            showSpinner: c = !1,
            isLoading: i = !0,
          }) =>
            (0, o.createElement)(
              "div",
              {
                className: (0, s.A)(t, {
                  "wc-block-components-loading-mask": i,
                }),
              },
              i && c && (0, o.createElement)(a.Spinner, null),
              (0, o.createElement)(
                "div",
                {
                  className: (0, s.A)({
                    "wc-block-components-loading-mask__children": i,
                  }),
                  "aria-hidden": i,
                },
                e
              ),
              i &&
                (0, o.createElement)(
                  "span",
                  { className: "screen-reader-text" },
                  r || (0, n.__)("Loading…", "woocommerce")
                )
            )
        : null;
    },
    9006: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => i });
      var o = r(1609),
        n = r(6087),
        s = r(8107);
      if (251 == r.j) var a = r(4717);
      const c =
          251 == r.j
            ? [
                "BUTTON",
                "FIELDSET",
                "INPUT",
                "OPTGROUP",
                "OPTION",
                "SELECT",
                "TEXTAREA",
                "A",
              ]
            : null,
        i =
          251 == r.j
            ? ({ children: e, style: t = {}, ...r }) => {
                const i = (0, n.useRef)(null),
                  l = () => {
                    i.current &&
                      s.focus.focusable.find(i.current).forEach((e) => {
                        c.includes(e.nodeName) &&
                          e.setAttribute("tabindex", "-1"),
                          e.hasAttribute("contenteditable") &&
                            e.setAttribute("contenteditable", "false");
                      });
                  },
                  d = (0, a.YQ)(l, 0, { leading: !0 });
                return (
                  (0, n.useLayoutEffect)(() => {
                    let e;
                    return (
                      l(),
                      i.current &&
                        ((e = new window.MutationObserver(d)),
                        e.observe(i.current, {
                          childList: !0,
                          attributes: !0,
                          subtree: !0,
                        })),
                      () => {
                        e && e.disconnect(), d.cancel();
                      }
                    );
                  }, [d]),
                  (0, o.createElement)(
                    "div",
                    {
                      ref: i,
                      "aria-disabled": "true",
                      style: {
                        userSelect: "none",
                        pointerEvents: "none",
                        cursor: "normal",
                        ...t,
                      },
                      ...r,
                    },
                    e
                  )
                );
              }
            : null;
    },
    4090: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => g });
      var o = r(1609),
        n = r(851),
        s = r(7723),
        a = r(7104),
        c = r(1208),
        i = (r(9345), r(2900)),
        l = r(2478),
        d = r(8306);
      const u = (e) => {
          switch (e) {
            case "success":
            case "warning":
            case "info":
            case "default":
              return "polite";
            default:
              return "assertive";
          }
        },
        m = (e) => {
          switch (e) {
            case "success":
              return i.A;
            case "warning":
            case "info":
            case "error":
              return l.A;
            default:
              return d.A;
          }
        };
      var p = r(3013),
        h = r(7978);
      const g = ({
        className: e,
        status: t = "default",
        children: r,
        spokenMessage: i = r,
        onRemove: l = () => {},
        isDismissible: d = !0,
        politeness: g = u(t),
        summary: _,
      }) => (
        (0, h.$)(i, g),
        (0, o.createElement)(
          "div",
          {
            className: (0, n.A)(
              e,
              "wc-block-components-notice-banner",
              "is-" + t,
              { "is-dismissible": d }
            ),
          },
          (0, o.createElement)(a.A, { icon: m(t) }),
          (0, o.createElement)(
            "div",
            { className: "wc-block-components-notice-banner__content" },
            _ &&
              (0, o.createElement)(
                "p",
                { className: "wc-block-components-notice-banner__summary" },
                _
              ),
            r
          ),
          !!d &&
            (0, o.createElement)(
              p.A,
              {
                className: "wc-block-components-notice-banner__dismiss",
                "aria-label": (0, s.__)("Dismiss this notice", "woocommerce"),
                onClick: (e) => {
                  "function" ==
                    typeof (null == e ? void 0 : e.preventDefault) &&
                    e.preventDefault &&
                    e.preventDefault(),
                    l();
                },
                removeTextWrap: !0,
              },
              (0, o.createElement)(a.A, { icon: c.A })
            )
        )
      );
    },
    7702: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => s });
      var o = r(1609);
      if (/^(251|2895|7949)$/.test(r.j)) var n = r(851);
      r(6625);
      const s = /^(251|2895|7949)$/.test(r.j)
        ? ({
            className: e = "",
            disabled: t = !1,
            name: r,
            permalink: s = "",
            target: a,
            rel: c,
            style: i,
            onClick: l,
            disabledTagName: d = "span",
            ...u
          }) => {
            const m = (0, n.A)("wc-block-components-product-name", e),
              p = d;
            if (t) {
              const e = u;
              return (0, o.createElement)(p, {
                className: m,
                ...e,
                dangerouslySetInnerHTML: { __html: r },
              });
            }
            return (0, o.createElement)("a", {
              className: m,
              href: s,
              target: a,
              ...u,
              dangerouslySetInnerHTML: { __html: r },
              style: i,
            });
          }
        : null;
    },
    8834: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => u });
      var o = r(1609),
        n = r(7723),
        s = r(4656);
      if (/^(251|2895|7949)$/.test(r.j)) var a = r(851);
      var c = r(910),
        i = r(6087);
      r(4567);
      const l = ({
          currency: e,
          maxPrice: t,
          minPrice: r,
          priceClassName: i,
          priceStyle: l = {},
        }) =>
          (0, o.createElement)(
            o.Fragment,
            null,
            (0, o.createElement)(
              "span",
              { className: "screen-reader-text" },
              (0, n.sprintf)(
                /* translators: %1$s min price, %2$s max price */ /* translators: %1$s min price, %2$s max price */
                (0, n.__)("Price between %1$s and %2$s", "woocommerce"),
                (0, c.formatPrice)(r),
                (0, c.formatPrice)(t)
              )
            ),
            (0, o.createElement)(
              "span",
              { "aria-hidden": !0 },
              (0, o.createElement)(s.FormattedMonetaryAmount, {
                className: (0, a.A)(
                  "wc-block-components-product-price__value",
                  i
                ),
                currency: e,
                value: r,
                style: l,
              }),
              " — ",
              (0, o.createElement)(s.FormattedMonetaryAmount, {
                className: (0, a.A)(
                  "wc-block-components-product-price__value",
                  i
                ),
                currency: e,
                value: t,
                style: l,
              })
            )
          ),
        d = ({
          currency: e,
          regularPriceClassName: t,
          regularPriceStyle: r,
          regularPrice: c,
          priceClassName: i,
          priceStyle: l,
          price: d,
        }) =>
          (0, o.createElement)(
            o.Fragment,
            null,
            (0, o.createElement)(
              "span",
              { className: "screen-reader-text" },
              (0, n.__)("Previous price:", "woocommerce")
            ),
            (0, o.createElement)(s.FormattedMonetaryAmount, {
              currency: e,
              renderText: (e) =>
                (0, o.createElement)(
                  "del",
                  {
                    className: (0, a.A)(
                      "wc-block-components-product-price__regular",
                      t
                    ),
                    style: r,
                  },
                  e
                ),
              value: c,
            }),
            (0, o.createElement)(
              "span",
              { className: "screen-reader-text" },
              (0, n.__)("Discounted price:", "woocommerce")
            ),
            (0, o.createElement)(s.FormattedMonetaryAmount, {
              currency: e,
              renderText: (e) =>
                (0, o.createElement)(
                  "ins",
                  {
                    className: (0, a.A)(
                      "wc-block-components-product-price__value",
                      "is-discounted",
                      i
                    ),
                    style: l,
                  },
                  e
                ),
              value: d,
            })
          ),
        u = /^(251|2895|7949)$/.test(r.j)
          ? ({
              align: e,
              className: t,
              currency: r,
              format: n = "<price/>",
              maxPrice: c,
              minPrice: u,
              price: m,
              priceClassName: p,
              priceStyle: h,
              regularPrice: g,
              regularPriceClassName: _,
              regularPriceStyle: v,
              style: f,
            }) => {
              const b = (0, a.A)(
                t,
                "price",
                "wc-block-components-product-price",
                { [`wc-block-components-product-price--align-${e}`]: e }
              );
              n.includes("<price/>") ||
                ((n = "<price/>"),
                console.error(
                  "Price formats need to include the `<price/>` tag."
                ));
              const E = g && m && m < g;
              let y = (0, o.createElement)("span", {
                className: (0, a.A)(
                  "wc-block-components-product-price__value",
                  p
                ),
              });
              return (
                E
                  ? (y = (0, o.createElement)(d, {
                      currency: r,
                      price: m,
                      priceClassName: p,
                      priceStyle: h,
                      regularPrice: g,
                      regularPriceClassName: _,
                      regularPriceStyle: v,
                    }))
                  : void 0 !== u && void 0 !== c
                  ? (y = (0, o.createElement)(l, {
                      currency: r,
                      maxPrice: c,
                      minPrice: u,
                      priceClassName: p,
                      priceStyle: h,
                    }))
                  : m &&
                    (y = (0, o.createElement)(s.FormattedMonetaryAmount, {
                      className: (0, a.A)(
                        "wc-block-components-product-price__value",
                        p
                      ),
                      currency: r,
                      value: m,
                      style: h,
                    })),
                (0, o.createElement)(
                  "span",
                  { className: b, style: f },
                  (0, i.createInterpolateElement)(n, { price: y })
                )
              );
            }
          : null;
    },
    997: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => p });
      var o = r(2294),
        n = r(1609),
        s = r(6087),
        a = r(7723),
        c = r(7131);
      const i = (e, t, r = "...") => (0, c.Q)(e, { suffix: r, limit: t }).html,
        l = (e, t, r) => (
          t <= r ? (e.start = e.middle + 1) : (e.end = e.middle - 1), e
        ),
        d = (e, t, r, o) => {
          const n = ((e, t, r) => {
            let o = { start: 0, middle: 0, end: e.length };
            for (; o.start <= o.end; )
              (o.middle = Math.floor((o.start + o.end) / 2)),
                (t.innerHTML = i(e, o.middle)),
                (o = l(o, t.clientHeight, r));
            return o.middle;
          })(e, t, r);
          return i(e, n - o.length, o);
        },
        u = {
          className: "read-more-content",
          ellipsis: "&hellip;",
          lessText: (0, a.__)("Read less", "woocommerce"),
          maxLines: 3,
          moreText: (0, a.__)("Read more", "woocommerce"),
        };
      class m extends s.Component {
        constructor(e) {
          super(e),
            (0, o.A)(this, "reviewSummary", void 0),
            (0, o.A)(this, "reviewContent", void 0),
            (this.state = {
              isExpanded: !1,
              clampEnabled: null,
              content: e.children,
              summary: ".",
            }),
            (this.reviewContent = (0, s.createRef)()),
            (this.reviewSummary = (0, s.createRef)()),
            (this.getButton = this.getButton.bind(this)),
            (this.onClick = this.onClick.bind(this));
        }
        componentDidMount() {
          this.setSummary();
        }
        componentDidUpdate(e) {
          (e.maxLines === this.props.maxLines &&
            e.children === this.props.children) ||
            this.setState(
              { clampEnabled: null, summary: "." },
              this.setSummary
            );
        }
        setSummary() {
          if (this.props.children) {
            const { maxLines: e, ellipsis: t } = this.props;
            if (!this.reviewSummary.current || !this.reviewContent.current)
              return;
            const r = (this.reviewSummary.current.clientHeight + 1) * e + 1,
              o = this.reviewContent.current.clientHeight + 1 > r;
            this.setState({ clampEnabled: o }),
              o &&
                this.setState({
                  summary: d(
                    this.reviewContent.current.innerHTML,
                    this.reviewSummary.current,
                    r,
                    t
                  ),
                });
          }
        }
        getButton() {
          const { isExpanded: e } = this.state,
            { className: t, lessText: r, moreText: o } = this.props,
            s = e ? r : o;
          if (s)
            return (0, n.createElement)(
              "a",
              {
                href: "#more",
                className: t + "__read_more",
                onClick: this.onClick,
                "aria-expanded": !e,
                role: "button",
              },
              s
            );
        }
        onClick(e) {
          e.preventDefault();
          const { isExpanded: t } = this.state;
          this.setState({ isExpanded: !t });
        }
        render() {
          const { className: e } = this.props,
            {
              content: t,
              summary: r,
              clampEnabled: o,
              isExpanded: s,
            } = this.state;
          return t
            ? !1 === o
              ? (0, n.createElement)(
                  "div",
                  { className: e },
                  (0, n.createElement)("div", { ref: this.reviewContent }, t)
                )
              : (0, n.createElement)(
                  "div",
                  { className: e },
                  (!s || null === o) &&
                    (0, n.createElement)("div", {
                      ref: this.reviewSummary,
                      "aria-hidden": s,
                      dangerouslySetInnerHTML: { __html: r },
                    }),
                  (s || null === o) &&
                    (0, n.createElement)(
                      "div",
                      { ref: this.reviewContent, "aria-hidden": !s },
                      t
                    ),
                  this.getButton()
                )
            : null;
        }
      }
      (0, o.A)(m, "defaultProps", u);
      const p = m;
    },
    7131: (e, t, r) => {
      "use strict";
      function o(e) {
        let t,
          r,
          o,
          n = [];
        for (let s = 0; s < e.length; s++)
          (t = e.substring(s)),
            (r = t.match(/^&[a-z0-9#]+;/)),
            r ? ((o = r[0]), n.push(o), (s += o.length - 1)) : n.push(e[s]);
        return n;
      }
      function n(e, t) {
        const r = (t = t || {}).limit || 100,
          n = void 0 === t.preserveTags || t.preserveTags,
          s = void 0 !== t.wordBreak && t.wordBreak,
          a = t.suffix || "...",
          c = t.moreLink || "",
          i = t.moreText || "»",
          l = t.preserveWhiteSpace || !1,
          d = e
            .replace(/</g, "\n<")
            .replace(/>/g, ">\n")
            .replace(/\n\n/g, "\n")
            .replace(/^\n/g, "")
            .replace(/\n$/g, "")
            .split("\n");
        let u,
          m,
          p,
          h,
          g,
          _,
          v = 0,
          f = [],
          b = !1;
        for (let e = 0; e < d.length; e++) {
          if (((u = d[e]), (h = l ? u : u.replace(/[ ]+/g, " ")), !u.length))
            continue;
          const t = o(h);
          if ("<" !== u[0])
            if (v >= r) u = "";
            else if (v + t.length >= r) {
              if (((m = r - v), " " === t[m - 1]))
                for (; m && ((m -= 1), " " === t[m - 1]); );
              else
                (p = t.slice(m).indexOf(" ")),
                  s || (-1 !== p ? (m += p) : (m = u.length));
              if (((u = t.slice(0, m).join("") + a), c)) {
                const e = document.createElement("a");
                (e.href = c),
                  (e.style.display = "inline"),
                  (e.textContent = i),
                  (u += e.outerHTML);
              }
              (v = r), (b = !0);
            } else v += t.length;
          else if (n) {
            if (v >= r)
              if (((g = u.match(/[a-zA-Z]+/)), (_ = g ? g[0] : ""), _))
                if ("</" !== u.substring(0, 2)) f.push(_), (u = "");
                else {
                  for (; f[f.length - 1] !== _ && f.length; ) f.pop();
                  f.length && (u = ""), f.pop();
                }
              else u = "";
          } else u = "";
          d[e] = u;
        }
        return { html: d.join("\n").replace(/\n/g, ""), more: b };
      }
      r.d(t, { Q: () => n });
    },
    7579: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => c });
      var o = r(1609),
        n = r(6087),
        s = r(851);
      const a = (0, n.forwardRef)(({ children: e, className: t = "" }, r) =>
          (0, o.createElement)(
            "div",
            { ref: r, className: (0, s.A)("wc-block-components-main", t) },
            e
          )
        ),
        c = /^(251|7949)$/.test(r.j) ? a : null;
    },
    7323: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => a });
      var o = r(1609);
      if (/^(251|7949)$/.test(r.j)) var n = r(851);
      if (/^(251|7949)$/.test(r.j)) var s = r(3160);
      r(1221);
      const a = /^(251|7949)$/.test(r.j)
        ? ({ children: e, className: t }) =>
            (0, o.createElement)(
              s.u,
              { className: (0, n.A)("wc-block-components-sidebar-layout", t) },
              e
            )
        : null;
    },
    2890: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => c });
      var o = r(1609),
        n = r(6087),
        s = r(851);
      const a = (0, n.forwardRef)(({ children: e, className: t = "" }, r) =>
          (0, o.createElement)(
            "div",
            { ref: r, className: (0, s.A)("wc-block-components-sidebar", t) },
            e
          )
        ),
        c = /^(251|7949)$/.test(r.j) ? a : null;
    },
    5294: (e, t, r) => {
      "use strict";
      if ((r.d(t, { Y: () => n }), /^(251|2895|7949)$/.test(r.j)))
        var o = r(6392);
      const n =
        (e, t) =>
        (r, n = 10) => {
          const s = o.o1.addEventCallback(e, r, n);
          return (
            t(s),
            () => {
              t(o.o1.removeEventCallback(e, s.id));
            }
          );
        };
    },
    919: (e, t, r) => {
      "use strict";
      r.d(t, { _: () => a, c: () => s });
      var o = r(3993);
      if (/^(251|2895|7949)$/.test(r.j)) var n = r(8755);
      const s = async (e, t, r) => {
          const o = (0, n.fK)(e, t),
            s = [];
          for (const e of o)
            try {
              const t = await Promise.resolve(e.callback(r));
              "object" == typeof t && s.push(t);
            } catch (e) {
              console.error(e);
            }
          return !s.length || s;
        },
        a = async (e, t, r) => {
          const s = [],
            a = (0, n.fK)(e, t);
          for (const e of a)
            try {
              const t = await Promise.resolve(e.callback(r));
              if (!(0, o.isObserverResponse)(t)) continue;
              if (!t.hasOwnProperty("type"))
                throw new Error(
                  "Returned objects from event emitter observers must return an object with a type property"
                );
              if ((0, o.isErrorResponse)(t) || (0, o.isFailResponse)(t))
                return s.push(t), s;
              s.push(t);
            } catch (e) {
              return (
                console.error(e), s.push({ type: o.responseTypes.ERROR }), s
              );
            }
          return s;
        };
    },
    6392: (e, t, r) => {
      "use strict";
      r.d(t, { o1: () => n, Ff: () => a });
      let o = (function (e) {
        return (
          (e.ADD_EVENT_CALLBACK = "add_event_callback"),
          (e.REMOVE_EVENT_CALLBACK = "remove_event_callback"),
          e
        );
      })({});
      const n = {
          addEventCallback: (e, t, r = 10) => ({
            id: Math.floor(Math.random() * Date.now()).toString(),
            type: o.ADD_EVENT_CALLBACK,
            eventType: e,
            callback: t,
            priority: r,
          }),
          removeEventCallback: (e, t) => ({
            id: t,
            type: o.REMOVE_EVENT_CALLBACK,
            eventType: e,
          }),
        },
        s = {},
        a = (
          e = s,
          { type: t, eventType: r, id: n, callback: a, priority: c }
        ) => {
          const i = e.hasOwnProperty(r) ? new Map(e[r]) : new Map();
          switch (t) {
            case o.ADD_EVENT_CALLBACK:
              return i.set(n, { priority: c, callback: a }), { ...e, [r]: i };
            case o.REMOVE_EVENT_CALLBACK:
              return i.delete(n), { ...e, [r]: i };
          }
        };
    },
    8755: (e, t, r) => {
      "use strict";
      r.d(t, { fK: () => o, tG: () => n }), r(3993);
      const o = (e, t) =>
        e[t]
          ? Array.from(e[t].values()).sort((e, t) => e.priority - t.priority)
          : [];
      let n = (function (e) {
        return (
          (e.CART = "wc/cart"),
          (e.CHECKOUT = "wc/checkout"),
          (e.PAYMENTS = "wc/checkout/payments"),
          (e.EXPRESS_PAYMENTS = "wc/checkout/express-payments"),
          (e.CONTACT_INFORMATION = "wc/checkout/contact-information"),
          (e.SHIPPING_ADDRESS = "wc/checkout/shipping-address"),
          (e.BILLING_ADDRESS = "wc/checkout/billing-address"),
          (e.SHIPPING_METHODS = "wc/checkout/shipping-methods"),
          (e.CHECKOUT_ACTIONS = "wc/checkout/checkout-actions"),
          (e.ORDER_INFORMATION = "wc/checkout/order-information"),
          e
        );
      })({});
    },
    9335: (e, t, r) => {
      "use strict";
      r.d(t, { k: () => l });
      var o = r(7723),
        n = r(7143),
        s = r(7594),
        a = r(8537),
        c = r(1e3);
      if (/^(251|7949)$/.test(r.j)) var i = r(8645);
      const l = (e = "") => {
        const { cartCoupons: t, cartIsLoading: r } = (0, i.V)(),
          { createErrorNotice: l } = (0, n.useDispatch)("core/notices"),
          { createNotice: d } = (0, n.useDispatch)("core/notices"),
          { setValidationErrors: u } = (0, n.useDispatch)(s.validationStore),
          { isApplyingCoupon: m, isRemovingCoupon: p } = (0, n.useSelect)(
            (e) => {
              const t = e(s.cartStore);
              return {
                isApplyingCoupon: t.isApplyingCoupon(),
                isRemovingCoupon: t.isRemovingCoupon(),
              };
            }
          ),
          { applyCoupon: h, removeCoupon: g } = (0, n.useDispatch)(s.cartStore),
          _ = (0, n.useSelect)((e) => e(s.checkoutStore).getOrderId());
        return {
          appliedCoupons: t,
          isLoading: r,
          applyCoupon: (t) =>
            h(t)
              .then(
                () => (
                  (0, c.applyCheckoutFilter)({
                    filterName: "showApplyCouponNotice",
                    defaultValue: !0,
                    arg: { couponCode: t, context: e },
                  }) &&
                    d(
                      "info",
                      (0, o.sprintf)(
                        /* translators: %s coupon code. */ /* translators: %s coupon code. */
                        (0, o.__)(
                          'Coupon code "%s" has been applied to your cart.',
                          "woocommerce"
                        ),
                        t
                      ),
                      { id: "coupon-form", type: "snackbar", context: e }
                    ),
                  Promise.resolve(!0)
                )
              )
              .catch((e) => {
                const t = ((e) => {
                  var t, r;
                  return _ &&
                    _ > 0 &&
                    null != e &&
                    null !== (t = e.data) &&
                    void 0 !== t &&
                    null !== (t = t.details) &&
                    void 0 !== t &&
                    t.checkout
                    ? e.data.details.checkout
                    : null != e &&
                      null !== (r = e.data) &&
                      void 0 !== r &&
                      null !== (r = r.details) &&
                      void 0 !== r &&
                      r.cart
                    ? e.data.details.cart
                    : e.message;
                })(e);
                return (
                  u({
                    coupon: { message: (0, a.decodeEntities)(t), hidden: !1 },
                  }),
                  Promise.resolve(!1)
                );
              }),
          removeCoupon: (t) =>
            g(t)
              .then(
                () => (
                  (0, c.applyCheckoutFilter)({
                    filterName: "showRemoveCouponNotice",
                    defaultValue: !0,
                    arg: { couponCode: t, context: e },
                  }) &&
                    d(
                      "info",
                      (0, o.sprintf)(
                        /* translators: %s coupon code. */ /* translators: %s coupon code. */
                        (0, o.__)(
                          'Coupon code "%s" has been removed from your cart.',
                          "woocommerce"
                        ),
                        t
                      ),
                      { id: "coupon-form", type: "snackbar", context: e }
                    ),
                  Promise.resolve(!0)
                )
              )
              .catch(
                (t) => (
                  l(t.message, { id: "coupon-form", context: e }),
                  Promise.resolve(!1)
                )
              ),
          isApplyingCoupon: m,
          isRemovingCoupon: p,
        };
      };
    },
    52: (e, t, r) => {
      "use strict";
      r.d(t, { U: () => u });
      var o = r(6087),
        n = r(7594),
        s = r(7143);
      if (/^(251|2895|7949)$/.test(r.j)) var a = r(6367);
      if (/^(251|2895|7949)$/.test(r.j)) var c = r(7428);
      const i = (e) => {
          const t = null == e ? void 0 : e.detail;
          (t && t.preserveCartData) ||
            (0, s.dispatch)(n.cartStore).invalidateResolutionForStore();
        },
        l = (e) => {
          ((null != e && e.persisted) || "back_forward" === (0, a.F)()) &&
            (0, s.dispatch)(n.cartStore).invalidateResolutionForStore();
        },
        d = () => {
          1 === window.wcBlocksStoreCartListeners.count &&
            window.wcBlocksStoreCartListeners.remove(),
            window.wcBlocksStoreCartListeners.count--;
        },
        u = () => {
          (0, o.useEffect)(
            () => (
              (() => {
                if (
                  (window.wcBlocksStoreCartListeners ||
                    (window.wcBlocksStoreCartListeners = {
                      count: 0,
                      remove: () => {},
                    }),
                  (null === (e = window.wcBlocksStoreCartListeners) ||
                  void 0 === e
                    ? void 0
                    : e.count) > 0)
                )
                  return void window.wcBlocksStoreCartListeners.count++;
                var e;
                document.body.addEventListener("wc-blocks_added_to_cart", i),
                  document.body.addEventListener(
                    "wc-blocks_removed_from_cart",
                    i
                  ),
                  window.addEventListener("pageshow", l);
                const t = (0, c.f2)("added_to_cart", "wc-blocks_added_to_cart"),
                  r = (0, c.f2)(
                    "removed_from_cart",
                    "wc-blocks_removed_from_cart"
                  );
                (window.wcBlocksStoreCartListeners.count = 1),
                  (window.wcBlocksStoreCartListeners.remove = () => {
                    document.body.removeEventListener(
                      "wc-blocks_added_to_cart",
                      i
                    ),
                      document.body.removeEventListener(
                        "wc-blocks_removed_from_cart",
                        i
                      ),
                      window.removeEventListener("pageshow", l),
                      t(),
                      r();
                  });
              })(),
              d
            ),
            []
          );
        };
    },
    8645: (e, t, r) => {
      "use strict";
      r.d(t, { V: () => v });
      var o = r(458),
        n = r.n(o),
        s = r(6087),
        a = r(7594),
        c = r(7143),
        i = r(8537);
      if (/^(251|2895|7949)$/.test(r.j)) var l = r(3643);
      if (/^(251|2895|7949)$/.test(r.j)) var d = r(1759);
      if (/^(251|2895|7949)$/.test(r.j)) var u = r(52);
      const m = {
          first_name: "",
          last_name: "",
          company: "",
          address_1: "",
          address_2: "",
          city: "",
          state: "",
          postcode: "",
          country: "",
          phone: "",
        },
        p = { ...m, email: "" },
        h = {
          total_items: "",
          total_items_tax: "",
          total_fees: "",
          total_fees_tax: "",
          total_discount: "",
          total_discount_tax: "",
          total_shipping: "",
          total_shipping_tax: "",
          total_price: "",
          total_tax: "",
          tax_lines: a.EMPTY_TAX_LINES,
          currency_code: "",
          currency_symbol: "",
          currency_minor_unit: 2,
          currency_decimal_separator: "",
          currency_thousand_separator: "",
          currency_prefix: "",
          currency_suffix: "",
        },
        g = (e) =>
          Object.fromEntries(
            Object.entries(e).map(([e, t]) => [e, (0, i.decodeEntities)(t)])
          ),
        _ = {
          cartCoupons: a.EMPTY_CART_COUPONS,
          cartItems: a.EMPTY_CART_ITEMS,
          cartFees: a.EMPTY_CART_FEES,
          cartItemsCount: 0,
          cartItemsWeight: 0,
          crossSellsProducts: a.EMPTY_CART_CROSS_SELLS,
          cartNeedsPayment: !0,
          cartNeedsShipping: !0,
          cartItemErrors: a.EMPTY_CART_ITEM_ERRORS,
          cartTotals: h,
          cartIsLoading: !0,
          cartErrors: a.EMPTY_CART_ERRORS,
          billingData: p,
          billingAddress: p,
          shippingAddress: m,
          shippingRates: a.EMPTY_SHIPPING_RATES,
          isLoadingRates: !1,
          cartHasCalculatedShipping: !1,
          paymentMethods: a.EMPTY_PAYMENT_METHODS,
          paymentRequirements: a.EMPTY_PAYMENT_REQUIREMENTS,
          receiveCart: () => {},
          receiveCartContents: () => {},
          extensions: a.EMPTY_EXTENSIONS,
        },
        v = (e = { shouldSelect: !0 }) => {
          const { shouldSelect: t } = e,
            { isEditor: r, previewData: o } = (0, d.m)(),
            i = null == o ? void 0 : o.previewCart,
            h = (0, s.useRef)(),
            v = (0, s.useRef)(p),
            f = (0, s.useRef)(m);
          (0, u.U)();
          const b = (0, c.useSelect)(
            (e, { dispatch: o }) => {
              if (!t) return _;
              if (r)
                return {
                  ..._,
                  cartCoupons: i.coupons,
                  cartItems: i.items,
                  crossSellsProducts: i.cross_sells,
                  cartFees: i.fees,
                  cartItemsCount: i.items_count,
                  cartItemsWeight: i.items_weight,
                  cartNeedsPayment: i.needs_payment,
                  cartNeedsShipping: i.needs_shipping,
                  cartTotals: i.totals,
                  shippingRates: i.shipping_rates,
                  cartHasCalculatedShipping: i.has_calculated_shipping,
                  paymentMethods: i.payment_methods,
                  paymentRequirements: i.payment_requirements,
                  cartIsLoading: !1,
                  receiveCart:
                    "function" == typeof (null == i ? void 0 : i.receiveCart)
                      ? i.receiveCart
                      : () => {},
                  receiveCartContents:
                    "function" ==
                    typeof (null == i ? void 0 : i.receiveCartContents)
                      ? i.receiveCartContents
                      : () => {},
                };
              const s = e(a.cartStore),
                c = s.getCartData(),
                d = s.getCartErrors(),
                u = s.getCartTotals(),
                m = !s.hasFinishedResolution("getCartData"),
                p = s.isCustomerDataUpdating(),
                { receiveCart: h, receiveCartContents: b } = o(a.cartStore),
                E =
                  c.fees.length > 0
                    ? c.fees.map((e) => g(e))
                    : a.EMPTY_CART_FEES,
                y =
                  c.coupons.length > 0
                    ? c.coupons.map((e) => ({ ...e, label: e.code }))
                    : a.EMPTY_CART_COUPONS,
                k = (0, l.TU)(g(c.billingAddress)),
                w = c.needsShipping ? (0, l.TU)(g(c.shippingAddress)) : k;
              return (
                n()(k, v.current) || (v.current = k),
                n()(w, f.current) || (f.current = w),
                {
                  cartCoupons: y,
                  cartItems: c.items,
                  crossSellsProducts: c.crossSells,
                  cartFees: E,
                  cartItemsCount: c.itemsCount,
                  cartItemsWeight: c.itemsWeight,
                  cartNeedsPayment: c.needsPayment,
                  cartNeedsShipping: c.needsShipping,
                  cartItemErrors: c.errors,
                  cartTotals: u,
                  cartIsLoading: m,
                  cartErrors: d,
                  billingData: v.current,
                  billingAddress: v.current,
                  shippingAddress: f.current,
                  extensions: c.extensions,
                  shippingRates: c.shippingRates,
                  isLoadingRates: p,
                  cartHasCalculatedShipping: c.hasCalculatedShipping,
                  paymentRequirements: c.paymentRequirements,
                  receiveCart: h,
                  receiveCartContents: b,
                }
              );
            },
            [t, r]
          );
          return (h.current && n()(h.current, b)) || (h.current = b), h.current;
        };
    },
    449: (e, t, r) => {
      "use strict";
      r.d(t, { Y: () => j });
      var o = r(7723),
        n = r(910),
        s = r(6087),
        a = r(1609),
        c = r(851),
        i = r(5573);
      const l = (0, a.createElement)(
        i.SVG,
        { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
        (0, a.createElement)(
          "g",
          { fill: "none", fillRule: "evenodd" },
          (0, a.createElement)("path", { d: "M0 0h24v24H0z" }),
          (0, a.createElement)("path", {
            fill: "#000",
            fillRule: "nonzero",
            d: "M17.3 8v1c1 .2 1.4.9 1.4 1.7h-1c0-.6-.3-1-1-1-.8 0-1.3.4-1.3.9 0 .4.3.6 1.4 1 1 .2 2 .6 2 1.9 0 .9-.6 1.4-1.5 1.5v1H16v-1c-.9-.1-1.6-.7-1.7-1.7h1c0 .6.4 1 1.3 1 1 0 1.2-.5 1.2-.8 0-.4-.2-.8-1.3-1.1-1.3-.3-2.1-.8-2.1-1.8 0-.9.7-1.5 1.6-1.6V8h1.3zM12 10v1H6v-1h6zm2-2v1H6V8h8zM2 4v16h20V4H2zm2 14V6h16v12H4z",
          }),
          (0, a.createElement)("path", {
            stroke: "#000",
            strokeLinecap: "round",
            d: "M6 16c2.6 0 3.9-3 1.7-3-2 0-1 3 1.5 3 1 0 1-.8 2.8-.8",
          })
        )
      );
      var d = r(4166),
        u = r(1195),
        m = r(8994),
        p = r(7104),
        h = r(3993);
      r(777);
      const g = { bank: d.A, bill: u.A, card: m.A, checkPayment: l },
        _ = ({ icon: e = "", text: t = "" }) => {
          const r = !!e,
            o = (0, s.useCallback)(
              (e) => r && (0, h.isString)(e) && (0, h.objectHasProp)(g, e),
              [r]
            ),
            n = (0, c.A)("wc-block-components-payment-method-label", {
              "wc-block-components-payment-method-label--with-icon": r,
            });
          return (0, a.createElement)(
            "span",
            { className: n },
            o(e) ? (0, a.createElement)(p.A, { icon: g[e] }) : e,
            t
          );
        };
      var v = r(61),
        f = r(5703),
        b = r(4040),
        E = r.n(b),
        y = r(3872),
        k = r(7143),
        w = r(7594),
        S = r(2679),
        C = r(4656),
        A = r(8645),
        N = r(9335),
        P = r(8755),
        x = r(1329),
        R = r(8121),
        I = r(259),
        M = r(5845),
        T = r(5606);
      const j = () => {
        const {
            onCheckoutBeforeProcessing: e,
            onCheckoutValidationBeforeProcessing: t,
            onCheckoutAfterProcessingWithSuccess: r,
            onCheckoutAfterProcessingWithError: a,
            onSubmit: c,
          } = (0, x.E)(),
          {
            onCheckoutValidation: i,
            onCheckoutSuccess: l,
            onCheckoutFail: d,
          } = S.checkoutEvents,
          {
            isCalculating: u,
            isComplete: m,
            isIdle: p,
            isProcessing: g,
            customerId: b,
          } = (0, k.useSelect)((e) => {
            const t = e(w.checkoutStore);
            return {
              isComplete: t.isComplete(),
              isIdle: t.isIdle(),
              isProcessing: t.isProcessing(),
              customerId: t.getCustomerId(),
              isCalculating: t.isCalculating(),
            };
          }),
          {
            paymentStatus: j,
            activePaymentMethod: $,
            shouldSavePayment: O,
          } = (0, k.useSelect)((e) => {
            const t = e(w.paymentStore);
            return {
              paymentStatus: {
                get isPristine() {
                  return (
                    E()("isPristine", {
                      since: "9.6.0",
                      alternative: "isIdle",
                      plugin: "WooCommerce Blocks",
                      link: "https://github.com/woocommerce/woocommerce-blocks/pull/8110",
                    }),
                    t.isPaymentIdle()
                  );
                },
                isIdle: t.isPaymentIdle(),
                isStarted: t.isExpressPaymentStarted(),
                isProcessing: t.isPaymentProcessing(),
                get isFinished() {
                  return (
                    E()("isFinished", {
                      since: "9.6.0",
                      plugin: "WooCommerce Blocks",
                      link: "https://github.com/woocommerce/woocommerce-blocks/pull/8110",
                    }),
                    t.hasPaymentError() || t.isPaymentReady()
                  );
                },
                hasError: t.hasPaymentError(),
                get hasFailed() {
                  return (
                    E()("hasFailed", {
                      since: "9.6.0",
                      plugin: "WooCommerce Blocks",
                      link: "https://github.com/woocommerce/woocommerce-blocks/pull/8110",
                    }),
                    t.hasPaymentError()
                  );
                },
                get isSuccessful() {
                  return (
                    E()("isSuccessful", {
                      since: "9.6.0",
                      plugin: "WooCommerce Blocks",
                      link: "https://github.com/woocommerce/woocommerce-blocks/pull/8110",
                    }),
                    t.isPaymentReady()
                  );
                },
                isReady: t.isPaymentReady(),
                isDoingExpressPayment: t.isExpressPaymentMethodActive(),
              },
              activePaymentMethod: t.getActivePaymentMethod(),
              shouldSavePayment: t.getShouldSavePaymentMethod(),
            };
          }),
          { __internalSetExpressPaymentError: L } = (0, k.useDispatch)(
            w.paymentStore
          ),
          { onPaymentProcessing: D, onPaymentSetup: F } = (0, R.e)(),
          {
            shippingErrorStatus: V,
            shippingErrorTypes: B,
            onShippingRateSuccess: H,
            onShippingRateFail: U,
            onShippingRateSelectSuccess: W,
            onShippingRateSelectFail: q,
          } = (0, I.H)(),
          {
            shippingRates: z,
            isLoadingRates: G,
            selectedRates: Y,
            isSelectingRate: Z,
            selectShippingRate: K,
            needsShipping: Q,
          } = (0, T.m)(),
          { billingAddress: J, shippingAddress: X } = (0, k.useSelect)((e) =>
            e(w.cartStore).getCustomerData()
          ),
          { setShippingAddress: ee } = (0, k.useDispatch)(w.cartStore),
          {
            cartItems: te,
            cartFees: re,
            cartTotals: oe,
            extensions: ne,
          } = (0, A.V)(),
          { appliedCoupons: se } = (0, N.k)(),
          ae = (0, s.useRef)((0, M.G)(oe, Q)),
          ce = (0, s.useRef)({
            label: (0, o.__)("Total", "woocommerce"),
            value: parseInt(oe.total_price, 10),
          });
        (0, s.useEffect)(() => {
          (ae.current = (0, M.G)(oe, Q)),
            (ce.current = {
              label: (0, o.__)("Total", "woocommerce"),
              value: parseInt(oe.total_price, 10),
            });
        }, [oe, Q]);
        const ie = (0, s.useCallback)(
          (e = "") => {
            E()(
              "setExpressPaymentError should only be used by Express Payment Methods (using the provided onError handler).",
              {
                alternative: "",
                plugin: "woocommerce-gutenberg-products-block",
                link: "https://github.com/woocommerce/woocommerce-gutenberg-products-block/pull/4228",
              }
            ),
              L(e);
          },
          [L]
        );
        return {
          activePaymentMethod: $,
          billing: {
            appliedCoupons: se,
            billingAddress: J,
            billingData: J,
            cartTotal: ce.current,
            cartTotalItems: ae.current,
            currency: (0, n.getCurrencyFromPriceResponse)(oe),
            customerId: b,
            displayPricesIncludingTax: (0, f.getSetting)(
              "displayCartPricesIncludingTax",
              !1
            ),
          },
          cartData: { cartItems: te, cartFees: re, extensions: ne },
          checkoutStatus: {
            isCalculating: u,
            isComplete: m,
            isIdle: p,
            isProcessing: g,
          },
          components: {
            LoadingMask: y.A,
            PaymentMethodIcons: v.h,
            PaymentMethodLabel: _,
            ValidationInputError: C.ValidationInputError,
          },
          emitResponse: {
            noticeContexts: P.tG,
            responseTypes: h.responseTypes,
          },
          eventRegistration: {
            onCheckoutAfterProcessingWithError: a,
            onCheckoutAfterProcessingWithSuccess: r,
            onCheckoutBeforeProcessing: e,
            onCheckoutValidationBeforeProcessing: t,
            onCheckoutSuccess: l,
            onCheckoutFail: d,
            onCheckoutValidation: i,
            onPaymentProcessing: D,
            onPaymentSetup: F,
            onShippingRateFail: U,
            onShippingRateSelectFail: q,
            onShippingRateSelectSuccess: W,
            onShippingRateSuccess: H,
          },
          onSubmit: c,
          paymentStatus: j,
          setExpressPaymentError: ie,
          shippingData: {
            isSelectingRate: Z,
            needsShipping: Q,
            selectedRates: Y,
            setSelectedRates: K,
            setShippingAddress: ee,
            shippingAddress: X,
            shippingRates: z,
            shippingRatesLoading: G,
          },
          shippingStatus: { shippingErrorStatus: V, shippingErrorTypes: B },
          shouldSavePayment: O,
        };
      };
    },
    5171: (e, t, r) => {
      "use strict";
      if ((r.d(t, { m: () => i, u: () => l }), /^(251|2895|7949)$/.test(r.j)))
        var o = r(7901);
      var n = r(4083),
        s = r(7143),
        a = r(7594);
      const c = (e = !1) => {
          const {
              paymentMethodsInitialized: t,
              expressPaymentMethodsInitialized: r,
              availablePaymentMethods: c,
              availableExpressPaymentMethods: i,
            } = (0, s.useSelect)((e) => {
              const t = e(a.paymentStore);
              return {
                paymentMethodsInitialized: t.paymentMethodsInitialized(),
                expressPaymentMethodsInitialized:
                  t.expressPaymentMethodsInitialized(),
                availableExpressPaymentMethods:
                  t.getAvailableExpressPaymentMethods(),
                availablePaymentMethods: t.getAvailablePaymentMethods(),
              };
            }),
            l = Object.values(c).map(({ name: e }) => e),
            d = Object.values(i).map(({ name: e }) => e),
            u = (0, n.getPaymentMethods)(),
            m = (0, n.getExpressPaymentMethods)(),
            p = Object.keys(u).reduce(
              (e, t) => (l.includes(t) && (e[t] = u[t]), e),
              {}
            ),
            h = Object.keys(m).reduce(
              (e, t) => (d.includes(t) && (e[t] = m[t]), e),
              {}
            ),
            g = (0, o.c)(p),
            _ = (0, o.c)(h);
          return { paymentMethods: e ? _ : g, isInitialized: e ? r : t };
        },
        i = () => c(!1),
        l = () => c(!0);
    },
    5845: (e, t, r) => {
      "use strict";
      r.d(t, { G: () => s });
      var o = r(7723),
        n = r(3993);
      const s = (e, t) => {
        const r = [],
          s = (t, r) => {
            const o = r + "_tax",
              s =
                (0, n.objectHasProp)(e, r) && (0, n.isString)(e[r])
                  ? parseInt(e[r], 10)
                  : 0;
            return {
              key: r,
              label: t,
              value: s,
              valueWithTax:
                s +
                ((0, n.objectHasProp)(e, o) && (0, n.isString)(e[o])
                  ? parseInt(e[o], 10)
                  : 0),
            };
          };
        return (
          r.push(s((0, o.__)("Subtotal:", "woocommerce"), "total_items")),
          r.push(s((0, o.__)("Fees:", "woocommerce"), "total_fees")),
          r.push(s((0, o.__)("Discount:", "woocommerce"), "total_discount")),
          r.push({
            key: "total_tax",
            label: (0, o.__)("Taxes:", "woocommerce"),
            value: parseInt(e.total_tax, 10),
            valueWithTax: parseInt(e.total_tax, 10),
          }),
          t &&
            r.push(s((0, o.__)("Shipping:", "woocommerce"), "total_shipping")),
          r
        );
      };
    },
    5606: (e, t, r) => {
      "use strict";
      r.d(t, { m: () => h });
      var o = r(7594),
        n = r(7143),
        s = r(3993),
        a = r(6087);
      if (/^(251|7949)$/.test(r.j)) var c = r(3835);
      if (/^(251|7949)$/.test(r.j)) var i = r(8021);
      var l = r(923),
        d = r.n(l);
      if (/^(251|7949)$/.test(r.j)) var u = r(2969);
      if (/^(251|7949)$/.test(r.j)) var m = r(9499);
      if (/^(251|7949)$/.test(r.j)) var p = r(1759);
      const h = () => {
        const { isEditor: e } = (0, p.m)(),
          {
            shippingRates: t,
            needsShipping: r,
            hasCalculatedShipping: l,
            isLoadingRates: h,
            isCollectable: g,
            isSelectingRate: _,
          } = (0, n.useSelect)(
            (t) => {
              const r = t(o.cartStore),
                n = e ? u.B.shipping_rates : r.getShippingRates();
              return {
                shippingRates: n,
                needsShipping: e ? u.B.needs_shipping : r.getNeedsShipping(),
                hasCalculatedShipping: e
                  ? u.B.has_calculated_shipping
                  : r.getHasCalculatedShipping(),
                isLoadingRates: !e && r.isCustomerDataUpdating(),
                isCollectable: n.every(({ shipping_rates: e }) =>
                  e.find(({ method_id: e }) => (0, c.jV)(e))
                ),
                isSelectingRate: !e && r.isShippingRateBeingSelected(),
              };
            },
            [e]
          ),
          v = (0, a.useRef)({});
        (0, a.useEffect)(() => {
          const e = (0, i.k)(t);
          (0, s.isObject)(e) && !d()(v.current, e) && (v.current = e);
        }, [t]);
        const { selectShippingRate: f } = (0, n.useDispatch)(o.cartStore),
          b = (0, c.jV)(Object.values(v.current).map((e) => e.split(":")[0])),
          { dispatchCheckoutEvent: E } = (0, m.y)(),
          y = (0, a.useCallback)(
            (e, t) => {
              let r;
              void 0 !== e &&
                ((r = (0, c.jV)(e.split(":")[0]) ? f(e, null) : f(e, t)),
                r
                  .then(() => {
                    E("set-selected-shipping-rate", { shippingRateId: e });
                  })
                  .catch((e) => {
                    (0, o.processErrorResponse)(e);
                  }));
            },
            [f, E]
          );
        return {
          isSelectingRate: _,
          selectedRates: v.current,
          selectShippingRate: y,
          shippingRates: t,
          needsShipping: r,
          hasCalculatedShipping: l,
          isLoadingRates: h,
          isCollectable: g,
          hasSelectedLocalPickup: b,
        };
      };
    },
    1019: (e, t, r) => {
      "use strict";
      r.d(t, { C: () => d });
      var o = r(5703),
        n = r(6087),
        s = r(7143),
        a = r(7594);
      if (/^(251|7949)$/.test(r.j)) var c = r(8867);
      if (/^(251|7949)$/.test(r.j)) var i = r(5606);
      if (/^(251|7949)$/.test(r.j)) var l = r(1759);
      const d = () => {
        const { isEditor: e, getPreviewData: t } = (0, l.m)(),
          { needsShipping: r } = (0, i.m)(),
          {
            useShippingAsBilling: d,
            prefersCollection: u,
            editingBillingAddress: m,
            editingShippingAddress: p,
          } = (0, s.useSelect)((e) => ({
            useShippingAsBilling: e(a.checkoutStore).getUseShippingAsBilling(),
            prefersCollection: e(a.checkoutStore).prefersCollection(),
            editingBillingAddress: e(
              a.checkoutStore
            ).getEditingBillingAddress(),
            editingShippingAddress: e(
              a.checkoutStore
            ).getEditingShippingAddress(),
          })),
          {
            __internalSetUseShippingAsBilling: h,
            setEditingBillingAddress: g,
            setEditingShippingAddress: _,
          } = (0, s.useDispatch)(a.checkoutStore),
          {
            billingAddress: v,
            setBillingAddress: f,
            shippingAddress: b,
            setShippingAddress: E,
          } = (0, c.q)(),
          y = (0, n.useCallback)(
            (e) => {
              f({ email: e });
            },
            [f]
          ),
          k = (0, o.getSetting)("forcedBillingAddress", !1);
        return {
          shippingAddress: b,
          billingAddress: v,
          setShippingAddress: E,
          setBillingAddress: f,
          setEmail: y,
          defaultFields: e
            ? t("defaultFields", o.defaultFields)
            : o.defaultFields,
          useShippingAsBilling: d,
          setUseShippingAsBilling: h,
          editingBillingAddress: m,
          editingShippingAddress: p,
          setEditingBillingAddress: g,
          setEditingShippingAddress: _,
          needsShipping: r,
          showShippingFields: !k && r && !u,
          showShippingMethods: r && !u,
          showBillingFields: !r || !d || !!u,
          forcedBillingAddress: k,
          useBillingAsShipping: k || !!u,
        };
      };
    },
    4603: (e, t, r) => {
      "use strict";
      r.d(t, { v: () => a });
      var o = r(7143),
        n = r(6087),
        s = r(7594);
      const a = () => {
        const { __internalSetExtensionData: e } = (0, o.useDispatch)(
            s.checkoutStore
          ),
          t = (0, o.useSelect)((e) => e(s.checkoutStore).getExtensionData()),
          r = (0, n.useRef)(t),
          a = (0, n.useCallback)(
            (t, r, o) => {
              e(t, { [r]: o });
            },
            [e]
          );
        return { extensionData: r.current, setExtensionData: a };
      };
    },
    2721: (e, t, r) => {
      "use strict";
      r.d(t, { w: () => c });
      var o = r(7594),
        n = r(7143);
      if (251 == r.j) var s = r(1329);
      if (251 == r.j) var a = r(5171);
      const c = () => {
        const {
            isCalculating: e,
            isBeforeProcessing: t,
            isProcessing: r,
            isAfterProcessing: c,
            isComplete: i,
            hasError: l,
          } = (0, n.useSelect)((e) => {
            const t = e(o.checkoutStore);
            return {
              isCalculating: t.isCalculating(),
              isBeforeProcessing: t.isBeforeProcessing(),
              isProcessing: t.isProcessing(),
              isAfterProcessing: t.isAfterProcessing(),
              isComplete: t.isComplete(),
              hasError: t.hasError(),
            };
          }),
          { activePaymentMethod: d, isExpressPaymentMethodActive: u } = (0,
          n.useSelect)((e) => {
            const t = e(o.paymentStore);
            return {
              activePaymentMethod: t.getActivePaymentMethod(),
              isExpressPaymentMethodActive: t.isExpressPaymentMethodActive(),
            };
          }),
          { onSubmit: m } = (0, s.E)(),
          { paymentMethods: p = {} } = (0, a.m)(),
          h = r || c || t,
          g = i && !l;
        return {
          paymentMethodButtonLabel: (p[d] || {}).placeOrderButtonLabel,
          onSubmit: m,
          isCalculating: e,
          isDisabled: r || u,
          waitingForProcessing: h,
          waitingForRedirect: g,
        };
      };
    },
    8867: (e, t, r) => {
      "use strict";
      r.d(t, { q: () => s });
      var o = r(7143),
        n = r(7594);
      const s = () => {
        const { customerData: e, isInitialized: t } = (0, o.useSelect)((e) => {
            const t = e(n.cartStore);
            return {
              customerData: t.getCustomerData(),
              isInitialized: t.hasFinishedResolution("getCartData"),
            };
          }),
          { setShippingAddress: r, setBillingAddress: s } = (0, o.useDispatch)(
            n.cartStore
          );
        return {
          isInitialized: t,
          billingAddress: e.billingAddress,
          shippingAddress: e.shippingAddress,
          setBillingAddress: s,
          setShippingAddress: r,
        };
      };
    },
    5540: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => d });
      var o = r(7143),
        n = r(7594),
        s = r(6087),
        a = r(7723);
      if (251 == r.j) var c = r(3835);
      var i = r(692);
      if (251 == r.j) var l = r(5606);
      const d = () => {
        const e = "woocommerce/checkout-totals-block",
          t = "wc-blocks-totals-shipping-warning",
          { shippingRates: r, hasSelectedLocalPickup: d } = (0, l.m)(),
          u = (0, c.HI)(r),
          {
            prefersCollection: m,
            isRateBeingSelected: p,
            shippingNotices: h,
          } = (0, o.useSelect)(
            (t) => ({
              prefersCollection: t(n.checkoutStore).prefersCollection(),
              isRateBeingSelected: t(n.cartStore).isShippingRateBeingSelected(),
              shippingNotices: t(i.store).getNotices(e),
            }),
            []
          ),
          { createInfoNotice: g, removeNotice: _ } = (0, o.useDispatch)(
            i.store
          );
        (0, s.useEffect)(() => {
          const r = h.length > 0 && h.some((e) => e.id === t),
            o = !m && d;
          u && !p
            ? !o || r
              ? !o && r && _(t, e)
              : g(
                  (0, a.__)(
                    "Totals will be recalculated when a valid shipping method is selected.",
                    "woocommerce"
                  ),
                  {
                    id: "wc-blocks-totals-shipping-warning",
                    isDismissible: !1,
                    context: e,
                  }
                )
            : r && _(t, e);
        }, [d, g, u, p, m, _, h, r]);
      };
    },
    3564: (e, t, r) => {
      "use strict";
      r.d(t, { R: () => l });
      var o = r(6087),
        n = r(7143),
        s = r(7594),
        a = r(8537);
      if (7949 == r.j) var c = r(8645);
      const i = (e, t) => {
          const r = e.find(({ id: e }) => e === t);
          return r ? r.quantity : 0;
        },
        l = (e) => {
          const { addItemToCart: t } = (0, n.useDispatch)(s.cartStore),
            { cartItems: r, cartIsLoading: l } = (0, c.V)(),
            { createErrorNotice: d, removeNotice: u } = (0, n.useDispatch)(
              "core/notices"
            ),
            [m, p] = (0, o.useState)(!1),
            h = (0, o.useRef)(i(r, e));
          return (
            (0, o.useEffect)(() => {
              const t = i(r, e);
              t !== h.current && (h.current = t);
            }, [r, e]),
            {
              cartQuantity: Number.isFinite(h.current) ? h.current : 0,
              addingToCart: m,
              cartIsLoading: l,
              addToCart: (r = 1) => (
                p(!0),
                t(e, r)
                  .then(() => {
                    u("add-to-cart");
                  })
                  .catch((e) => {
                    d((0, a.decodeEntities)(e.message), {
                      id: "add-to-cart",
                      context: "wc/all-products",
                      isDismissible: !0,
                    });
                  })
                  .finally(() => {
                    p(!1);
                  })
              ),
            }
          );
        };
    },
    9499: (e, t, r) => {
      "use strict";
      r.d(t, { y: () => a });
      var o = r(2619),
        n = r(7143),
        s = r(6087);
      const a = () => ({
        dispatchStoreEvent: (0, s.useCallback)((e, t = {}) => {
          try {
            (0, o.doAction)(`experimental__woocommerce_blocks-${e}`, t);
          } catch (e) {
            console.error(e);
          }
        }, []),
        dispatchCheckoutEvent: (0, s.useCallback)((e, t = {}) => {
          try {
            (0, o.doAction)(`experimental__woocommerce_blocks-checkout-${e}`, {
              ...t,
              storeCart: (0, n.select)("wc/store/cart").getCartData(),
            });
          } catch (e) {
            console.error(e);
          }
        }, []),
      });
    },
    5657: (e, t, r) => {
      "use strict";
      r.d(t, { $: () => a });
      var o = r(6087),
        n = r(7143),
        s = r(7594);
      const a = () => {
        const {
            clearValidationError: e,
            hideValidationError: t,
            setValidationErrors: r,
          } = (0, n.useDispatch)(s.validationStore),
          a = "extensions-errors",
          { hasValidationErrors: c, getValidationError: i } = (0, n.useSelect)(
            (e) => {
              const t = e(s.validationStore);
              return {
                hasValidationErrors: t.hasValidationErrors(),
                getValidationError: (e) => t.getValidationError(`${a}-${e}`),
              };
            }
          );
        return {
          hasValidationErrors: c,
          getValidationError: i,
          clearValidationError: (0, o.useCallback)((t) => e(`${a}-${t}`), [e]),
          hideValidationError: (0, o.useCallback)((e) => t(`${a}-${e}`), [t]),
          setValidationErrors: (0, o.useCallback)(
            (e) =>
              r(
                Object.fromEntries(
                  Object.entries(e).map(([e, t]) => [`${a}-${e}`, t])
                )
              ),
            [r]
          ),
        };
      };
    },
    6881: (e, t, r) => {
      "use strict";
      r.d(t, { nE: () => a, qY: () => s });
      var o = r(6087);
      if (/^(2895|7949)$/.test(r.j)) var n = r(5294);
      const s = { PROCEED_TO_CHECKOUT: "cart_proceed_to_checkout" },
        a = (e) =>
          (0, o.useMemo)(
            () => ({ onProceedToCheckout: (0, n.Y)(s.PROCEED_TO_CHECKOUT, e) }),
            [e]
          );
    },
    7827: (e, t, r) => {
      "use strict";
      r.d(t, { e: () => l, r: () => d });
      var o = r(1609),
        n = r(6087);
      if (/^(2895|7949)$/.test(r.j)) var s = r(6392);
      if (/^(2895|7949)$/.test(r.j)) var a = r(6881);
      if (/^(2895|7949)$/.test(r.j)) var c = r(919);
      const i = (0, n.createContext)({
          onProceedToCheckout: () => () => {},
          dispatchOnProceedToCheckout: () => new Promise(() => {}),
        }),
        l = () => (0, n.useContext)(i),
        d = ({ children: e }) => {
          const [t, r] = (0, n.useReducer)(s.Ff, {}),
            l = (0, n.useRef)(t),
            { onProceedToCheckout: d } = (0, a.nE)(r);
          (0, n.useEffect)(() => {
            l.current = t;
          }, [t]);
          const u = {
            onProceedToCheckout: d,
            dispatchOnProceedToCheckout: async () =>
              await (0, c._)(l.current, a.qY.PROCEED_TO_CHECKOUT, null),
          };
          return (0, o.createElement)(i.Provider, { value: u }, e);
        };
    },
    5207: (e, t, r) => {
      "use strict";
      r.d(t, { e: () => s });
      var o = r(1609);
      if (7949 == r.j) var n = r(2518);
      const s = ({ children: e, redirectUrl: t }) =>
        (0, o.createElement)(n.s, { redirectUrl: t }, e);
    },
    1329: (e, t, r) => {
      "use strict";
      r.d(t, { E: () => f, H: () => b });
      var o = r(1609),
        n = r(6087);
      if (/^(251|7949)$/.test(r.j)) var s = r(4015);
      var a = r(4040),
        c = r.n(a),
        i = r(7143),
        l = r(7594),
        d = r(692),
        u = r(2679);
      if (/^(251|7949)$/.test(r.j)) var m = r(6392);
      if (/^(251|7949)$/.test(r.j)) var p = r(8755);
      if (/^(251|7949)$/.test(r.j)) var h = r(9499);
      if (/^(251|7949)$/.test(r.j)) var g = r(2889);
      if (/^(251|7949)$/.test(r.j)) var _ = r(1759);
      const v = (0, n.createContext)({
          onSubmit: () => {},
          onCheckoutAfterProcessingWithSuccess: () => () => {},
          onCheckoutAfterProcessingWithError: () => () => {},
          onCheckoutBeforeProcessing: () => () => {},
          onCheckoutValidationBeforeProcessing: () => () => {},
          onCheckoutSuccess: () => () => {},
          onCheckoutFail: () => () => {},
          onCheckoutValidation: () => () => {},
        }),
        f = () => (0, n.useContext)(v),
        b = ({ children: e, redirectUrl: t }) => {
          const r = (0, g.J5)(),
            a = (0, g.fD)(),
            { isEditor: f } = (0, _.m)(),
            { __internalUpdateAvailablePaymentMethods: b } = (0, i.useDispatch)(
              l.paymentStore
            );
          (0, n.useEffect)(() => {
            (f || 0 !== Object.keys(r).length || 0 !== Object.keys(a).length) &&
              b();
          }, [f, r, a, b]);
          const {
              __internalSetRedirectUrl: E,
              __internalEmitValidateEvent: y,
              __internalEmitAfterProcessingEvents: k,
              __internalSetBeforeProcessing: w,
            } = (0, i.useDispatch)(l.checkoutStore),
            {
              checkoutRedirectUrl: S,
              checkoutStatus: C,
              isCheckoutBeforeProcessing: A,
              isCheckoutAfterProcessing: N,
              checkoutHasError: P,
              checkoutOrderId: x,
              checkoutOrderNotes: R,
              checkoutCustomerId: I,
            } = (0, i.useSelect)((e) => {
              const t = e(l.checkoutStore);
              return {
                checkoutRedirectUrl: t.getRedirectUrl(),
                checkoutStatus: t.getCheckoutStatus(),
                isCheckoutBeforeProcessing: t.isBeforeProcessing(),
                isCheckoutAfterProcessing: t.isAfterProcessing(),
                checkoutHasError: t.hasError(),
                checkoutOrderId: t.getOrderId(),
                checkoutOrderNotes: t.getOrderNotes(),
                checkoutCustomerId: t.getCustomerId(),
              };
            });
          t && t !== S && E(t);
          const { setValidationErrors: M } = (0, i.useDispatch)(
              l.validationStore
            ),
            { dispatchCheckoutEvent: T } = (0, h.y)(),
            j = Object.values(p.tG).filter(
              (e) => e !== p.tG.PAYMENTS && e !== p.tG.EXPRESS_PAYMENTS
            ),
            $ = (0, i.useSelect)(
              (e) => {
                const { getNotices: t } = e(d.store);
                return j.reduce((e, r) => [...e, ...t(r)], []);
              },
              [j]
            ),
            { paymentNotices: O, expressPaymentNotices: L } = (0, i.useSelect)(
              (e) => {
                const { getNotices: t } = e(d.store);
                return {
                  paymentNotices: t(p.tG.PAYMENTS),
                  expressPaymentNotices: t(p.tG.EXPRESS_PAYMENTS),
                };
              },
              []
            ),
            [D] = (0, n.useReducer)(m.Ff, {}),
            F = (0, n.useRef)(D),
            {
              onCheckoutValidation: V,
              onCheckoutSuccess: B,
              onCheckoutFail: H,
            } = u.checkoutEvents;
          (0, n.useEffect)(() => {
            F.current = D;
          }, [D]);
          const U = (0, n.useMemo)(
              () =>
                function (...e) {
                  return (
                    c()("onCheckoutBeforeProcessing", {
                      alternative: "onCheckoutValidation",
                      plugin: "WooCommerce Blocks",
                    }),
                    V(...e)
                  );
                },
              [V]
            ),
            W = (0, n.useMemo)(
              () =>
                function (...e) {
                  return (
                    c()("onCheckoutValidationBeforeProcessing", {
                      since: "9.7.0",
                      alternative: "onCheckoutValidation",
                      plugin: "WooCommerce Blocks",
                      link: "https://github.com/woocommerce/woocommerce-blocks/pull/8381",
                    }),
                    V(...e)
                  );
                },
              [V]
            ),
            q = (0, n.useMemo)(
              () =>
                function (...e) {
                  return (
                    c()("onCheckoutAfterProcessingWithSuccess", {
                      since: "9.7.0",
                      alternative: "onCheckoutSuccess",
                      plugin: "WooCommerce Blocks",
                      link: "https://github.com/woocommerce/woocommerce-blocks/pull/8381",
                    }),
                    B(...e)
                  );
                },
              [B]
            ),
            z = (0, n.useMemo)(
              () =>
                function (...e) {
                  return (
                    c()("onCheckoutAfterProcessingWithError", {
                      since: "9.7.0",
                      alternative: "onCheckoutFail",
                      plugin: "WooCommerce Blocks",
                      link: "https://github.com/woocommerce/woocommerce-blocks/pull/8381",
                    }),
                    H(...e)
                  );
                },
              [H]
            );
          (0, n.useEffect)(() => {
            A && y({ setValidationErrors: M });
          }, [A, M, y]);
          const G = (0, s.Z)(C),
            Y = (0, s.Z)(P);
          (0, n.useEffect)(() => {
            (C === G && P === Y) ||
              (N &&
                k({
                  notices: {
                    checkoutNotices: $,
                    paymentNotices: O,
                    expressPaymentNotices: L,
                  },
                }));
          }, [C, P, S, x, I, R, N, A, G, Y, $, L, O, y, k]);
          const Z = {
            onSubmit: (0, n.useCallback)(() => {
              T("submit"), w();
            }, [T, w]),
            onCheckoutBeforeProcessing: U,
            onCheckoutValidationBeforeProcessing: W,
            onCheckoutAfterProcessingWithSuccess: q,
            onCheckoutAfterProcessingWithError: z,
            onCheckoutSuccess: B,
            onCheckoutFail: H,
            onCheckoutValidation: V,
          };
          return (0, o.createElement)(v.Provider, { value: Z }, e);
        };
    },
    433: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => v });
      var o = r(7723),
        n = r(1455),
        s = r.n(n),
        a = r(6087);
      if (/^(251|7949)$/.test(r.j)) var c = r(108);
      if (/^(251|7949)$/.test(r.j)) var i = r(3643);
      var l = r(7143),
        d = r(7594),
        u = r(4083),
        m = r(3993),
        p = r(2679);
      if (/^(251|7949)$/.test(r.j)) var h = r(2559);
      if (/^(251|7949)$/.test(r.j)) var g = r(259);
      if (/^(251|7949)$/.test(r.j)) var _ = r(8645);
      const v = /^(251|7949)$/.test(r.j)
        ? () => {
            const { onCheckoutValidation: e } = p.checkoutEvents,
              {
                additionalFields: t,
                customerId: r,
                customerPassword: n,
                extensionData: v,
                hasError: f,
                isBeforeProcessing: b,
                isComplete: E,
                isProcessing: y,
                orderNotes: k,
                redirectUrl: w,
                shouldCreateAccount: S,
              } = (0, l.useSelect)((e) => {
                const t = e(d.checkoutStore);
                return {
                  additionalFields: t.getAdditionalFields(),
                  customerId: t.getCustomerId(),
                  customerPassword: t.getCustomerPassword(),
                  extensionData: t.getExtensionData(),
                  hasError: t.hasError(),
                  isBeforeProcessing: t.isBeforeProcessing(),
                  isComplete: t.isComplete(),
                  isProcessing: t.isProcessing(),
                  orderNotes: t.getOrderNotes(),
                  redirectUrl: t.getRedirectUrl(),
                  shouldCreateAccount: t.getShouldCreateAccount(),
                };
              }),
              {
                __internalSetHasError: C,
                __internalProcessCheckoutResponse: A,
              } = (0, l.useDispatch)(d.checkoutStore),
              N = (0, l.useSelect)(
                (e) => e(d.validationStore).hasValidationErrors
              ),
              { shippingErrorStatus: P } = (0, g.H)(),
              { billingAddress: x, shippingAddress: R } = (0, l.useSelect)(
                (e) => e(d.cartStore).getCustomerData()
              ),
              {
                cartNeedsPayment: I,
                cartNeedsShipping: M,
                receiveCartContents: T,
              } = (0, _.V)(),
              {
                activePaymentMethod: j,
                paymentMethodData: $,
                isExpressPaymentMethodActive: O,
                hasPaymentError: L,
                isPaymentReady: D,
                shouldSavePayment: F,
              } = (0, l.useSelect)((e) => {
                const t = e(d.paymentStore);
                return {
                  activePaymentMethod: t.getActivePaymentMethod(),
                  paymentMethodData: t.getPaymentMethodData(),
                  isExpressPaymentMethodActive:
                    t.isExpressPaymentMethodActive(),
                  hasPaymentError: t.hasPaymentError(),
                  isPaymentReady: t.isPaymentReady(),
                  shouldSavePayment: t.getShouldSavePaymentMethod(),
                };
              }, []),
              V = (0, u.getPaymentMethods)(),
              B = (0, u.getExpressPaymentMethods)(),
              H = (0, a.useRef)(x),
              U = (0, a.useRef)(R),
              W = (0, a.useRef)(w),
              [q, z] = (0, a.useState)(!1),
              G = (0, a.useMemo)(() => {
                var e;
                const t = { ...B, ...V };
                return null == t || null === (e = t[j]) || void 0 === e
                  ? void 0
                  : e.paymentMethodId;
              }, [j, B, V]),
              Y = (N() && !O) || L || P.hasError,
              Z = !f && !Y && (D || !I) && y;
            (0, a.useEffect)(() => {
              Y === f || (!y && !b) || O || C(Y);
            }, [Y, f, y, b, O, C]),
              (0, a.useEffect)(() => {
                (H.current = x), (U.current = R), (W.current = w);
              }, [x, R, w]);
            const K = (0, a.useCallback)(
              () =>
                N()
                  ? void 0 !==
                      (0, l.select)(d.validationStore).getValidationError(
                        "shipping-rates-error"
                      ) && {
                      errorMessage: (0, o.__)(
                        "Sorry, this order requires a shipping option.",
                        "woocommerce"
                      ),
                    }
                  : L
                  ? {
                      errorMessage: (0, o.__)(
                        "There was a problem with your payment option.",
                        "woocommerce"
                      ),
                      context: "wc/checkout/payments",
                    }
                  : !P.hasError || {
                      errorMessage: (0, o.__)(
                        "There was a problem with your shipping option.",
                        "woocommerce"
                      ),
                      context: "wc/checkout/shipping-methods",
                    },
              [N, L, P.hasError]
            );
            (0, a.useEffect)(() => {
              let t;
              return (
                O || (t = e(K, 0)),
                () => {
                  O || "function" != typeof t || t();
                }
              );
            }, [e, K, O]),
              (0, a.useEffect)(() => {
                window.localStorage.removeItem(
                  "WOOCOMMERCE_CHECKOUT_IS_CUSTOMER_DATA_DIRTY"
                ),
                  W.current && (window.location.href = W.current);
              }, [E]);
            const Q = (0, a.useCallback)(async () => {
              if (q) return;
              z(!0), (0, c.Jq)();
              const e = I
                  ? { payment_method: G, payment_data: (0, h.s)($, F, j) }
                  : {},
                a = {
                  additional_fields: t,
                  billing_address: (0, i.TU)(H.current),
                  create_account: S,
                  customer_note: k,
                  customer_password: n,
                  extensions: { ...v },
                  shipping_address: M ? (0, i.TU)(U.current) : void 0,
                  ...e,
                };
              (0, d.clearCheckoutPutRequests)(),
                s()({
                  path: "/wc/store/v1/checkout",
                  method: "POST",
                  data: a,
                  cache: "no-store",
                  parse: !1,
                })
                  .then((e) => {
                    if (
                      ((0, m.assertResponseIsValid)(e),
                      (0, h.x)(e.headers),
                      !e.ok)
                    )
                      throw e;
                    return e.json();
                  })
                  .then((e) => {
                    A(e), z(!1);
                  })
                  .catch((e) => {
                    (0, h.x)(null == e ? void 0 : e.headers);
                    try {
                      e.json()
                        .then((e) => e)
                        .then((e) => {
                          var t;
                          null !== (t = e.data) &&
                            void 0 !== t &&
                            t.cart &&
                            T(e.data.cart),
                            (0, d.processErrorResponse)(e),
                            A(e);
                        });
                    } catch {
                      let e = (0, o.__)(
                        "Something went wrong when placing the order. Check your email for order updates before retrying.",
                        "woocommerce"
                      );
                      0 !== r &&
                        (e = (0, o.__)(
                          "Something went wrong when placing the order. Check your account's order history or your email for order updates before retrying.",
                          "woocommerce"
                        )),
                        (0, d.processErrorResponse)({
                          code: "unknown_error",
                          message: e,
                          data: null,
                        });
                    }
                    C(!0), z(!1);
                  });
            }, [q, I, G, $, F, j, k, S, r, n, v, t, M, T, C, A]);
            return (
              (0, a.useEffect)(() => {
                Z && !q && Q();
              }, [Q, Z, q]),
              null
            );
          }
        : null;
    },
    2518: (e, t, r) => {
      "use strict";
      r.d(t, { s: () => u });
      var o = r(1609),
        n = r(2279),
        s = r(5703),
        a = r(2807);
      if (/^(251|7949)$/.test(r.j)) var c = r(8121);
      if (/^(251|7949)$/.test(r.j)) var i = r(259);
      if (/^(251|7949)$/.test(r.j)) var l = r(1329);
      if (/^(251|7949)$/.test(r.j)) var d = r(433);
      const u = ({ children: e, redirectUrl: t }) =>
        (0, o.createElement)(
          l.H,
          { redirectUrl: t },
          (0, o.createElement)(
            i.o,
            null,
            (0, o.createElement)(
              c.n,
              null,
              e,
              (0, o.createElement)(
                a.A,
                { renderError: s.CURRENT_USER_IS_ADMIN ? null : () => null },
                (0, o.createElement)(n.PluginArea, {
                  scope: "woocommerce-checkout",
                })
              ),
              (0, o.createElement)(d.A, null)
            )
          )
        );
    },
    5427: (e, t, r) => {
      "use strict";
      r.d(t, { nE: () => s });
      var o = r(6087);
      if (/^(251|2895|7949)$/.test(r.j)) var n = r(5294);
      const s = (e) =>
        (0, o.useMemo)(
          () => ({ onPaymentSetup: (0, n.Y)("payment_setup", e) }),
          [e]
        );
    },
    8121: (e, t, r) => {
      "use strict";
      r.d(t, { e: () => m, n: () => p });
      var o = r(1609),
        n = r(6087),
        s = r(7143),
        a = r(7594),
        c = r(4040),
        i = r.n(c);
      if (/^(251|2895|7949)$/.test(r.j)) var l = r(6392);
      if (/^(251|2895|7949)$/.test(r.j)) var d = r(5427);
      const u = (0, n.createContext)({
          onPaymentProcessing: () => () => () => {},
          onPaymentSetup: () => () => () => {},
        }),
        m = () => (0, n.useContext)(u),
        p = ({ children: e }) => {
          const {
              isProcessing: t,
              isIdle: r,
              isCalculating: c,
              hasError: m,
            } = (0, s.useSelect)((e) => {
              const t = e(a.checkoutStore);
              return {
                isProcessing: t.isProcessing(),
                isIdle: t.isIdle(),
                hasError: t.hasError(),
                isCalculating: t.isCalculating(),
              };
            }),
            { isPaymentReady: p } = (0, s.useSelect)((e) => {
              const t = e(a.paymentStore);
              return {
                isPaymentProcessing: t.isPaymentProcessing(),
                isPaymentReady: t.isPaymentReady(),
              };
            }),
            { setValidationErrors: h } = (0, s.useDispatch)(a.validationStore),
            [g, _] = (0, n.useReducer)(l.Ff, {}),
            { onPaymentSetup: v } = (0, d.nE)(_),
            f = (0, n.useRef)(g);
          (0, n.useEffect)(() => {
            f.current = g;
          }, [g]);
          const {
            __internalSetPaymentProcessing: b,
            __internalSetPaymentIdle: E,
            __internalEmitPaymentProcessingEvent: y,
          } = (0, s.useDispatch)(a.paymentStore);
          (0, n.useEffect)(() => {
            !t || m || c || (b(), y(f.current, h));
          }, [t, m, c, b, y, h]),
            (0, n.useEffect)(() => {
              r && !p && E();
            }, [r, p, E]),
            (0, n.useEffect)(() => {
              m && p && E();
            }, [m, p, E]);
          const k = {
            onPaymentProcessing: (0, n.useMemo)(
              () =>
                function (...e) {
                  return (
                    i()("onPaymentProcessing", {
                      alternative: "onPaymentSetup",
                      plugin: "WooCommerce Blocks",
                    }),
                    v(...e)
                  );
                },
              [v]
            ),
            onPaymentSetup: v,
          };
          return (0, o.createElement)(u.Provider, { value: k }, e);
        };
    },
    4968: (e, t, r) => {
      "use strict";
      r.d(t, { Kh: () => s, LY: () => o, dr: () => n });
      const o = {
          NONE: "none",
          INVALID_ADDRESS: "invalid_address",
          UNKNOWN: "unknown_error",
        },
        n = {
          INVALID_COUNTRY:
            "woocommerce_rest_cart_shipping_rates_invalid_country",
          MISSING_COUNTRY:
            "woocommerce_rest_cart_shipping_rates_missing_country",
          INVALID_STATE: "woocommerce_rest_cart_shipping_rates_invalid_state",
        },
        s = {
          shippingErrorStatus: {
            isPristine: !0,
            isValid: !1,
            hasInvalidAddress: !1,
            hasError: !1,
          },
          dispatchErrorStatus: (e) => e,
          shippingErrorTypes: o,
          onShippingRateSuccess: () => () => {},
          onShippingRateFail: () => () => {},
          onShippingRateSelectSuccess: () => () => {},
          onShippingRateSelectFail: () => () => {},
        };
    },
    8235: (e, t, r) => {
      "use strict";
      if ((r.d(t, { U9: () => s, Ww: () => n }), /^(251|7949)$/.test(r.j)))
        var o = r(5294);
      const n = {
          SHIPPING_RATES_SUCCESS: "shipping_rates_success",
          SHIPPING_RATES_FAIL: "shipping_rates_fail",
          SHIPPING_RATE_SELECT_SUCCESS: "shipping_rate_select_success",
          SHIPPING_RATE_SELECT_FAIL: "shipping_rate_select_fail",
        },
        s = (e) => ({
          onSuccess: (0, o.Y)(n.SHIPPING_RATES_SUCCESS, e),
          onFail: (0, o.Y)(n.SHIPPING_RATES_FAIL, e),
          onSelectSuccess: (0, o.Y)(n.SHIPPING_RATE_SELECT_SUCCESS, e),
          onSelectFail: (0, o.Y)(n.SHIPPING_RATE_SELECT_FAIL, e),
        });
    },
    259: (e, t, r) => {
      "use strict";
      r.d(t, { H: () => b, o: () => E });
      var o = r(1609),
        n = r(6087),
        s = r(7143),
        a = r(7594),
        c = r(4968);
      if (/^(251|7949)$/.test(r.j)) var i = r(5022);
      if (/^(251|7949)$/.test(r.j)) var l = r(8470);
      if (/^(251|7949)$/.test(r.j)) var d = r(6392);
      if (/^(251|7949)$/.test(r.j)) var u = r(8235);
      if (/^(251|7949)$/.test(r.j)) var m = r(919);
      if (/^(251|7949)$/.test(r.j)) var p = r(8645);
      if (/^(251|7949)$/.test(r.j)) var h = r(5606);
      const { NONE: g, INVALID_ADDRESS: _, UNKNOWN: v } = c.LY,
        f = (0, n.createContext)(c.Kh),
        b = () => (0, n.useContext)(f),
        E = ({ children: e }) => {
          const {
              __internalIncrementCalculating: t,
              __internalDecrementCalculating: r,
            } = (0, s.useDispatch)(a.checkoutStore),
            { shippingRates: b, isLoadingRates: E, cartErrors: y } = (0, p.V)(),
            { selectedRates: k, isSelectingRate: w } = (0, h.m)(),
            [S, C] = (0, n.useReducer)(l.b, g),
            [A, N] = (0, n.useReducer)(d.Ff, {}),
            P = (0, n.useRef)(A),
            x = (0, n.useMemo)(
              () => ({
                onShippingRateSuccess: (0, u.U9)(N).onSuccess,
                onShippingRateFail: (0, u.U9)(N).onFail,
                onShippingRateSelectSuccess: (0, u.U9)(N).onSelectSuccess,
                onShippingRateSelectFail: (0, u.U9)(N).onSelectFail,
              }),
              [N]
            );
          (0, n.useEffect)(() => {
            P.current = A;
          }, [A]),
            (0, n.useEffect)(() => {
              E ? t() : r();
            }, [E, t, r]),
            (0, n.useEffect)(() => {
              w ? t() : r();
            }, [t, r, w]),
            (0, n.useEffect)(() => {
              y.length > 0 && (0, i.S)(y) ? C({ type: _ }) : C({ type: g });
            }, [y]);
          const R = (0, n.useMemo)(
            () => ({
              isPristine: S === g,
              isValid: S === g,
              hasInvalidAddress: S === _,
              hasError: S === v || S === _,
            }),
            [S]
          );
          (0, n.useEffect)(() => {
            E ||
              (0 !== b.length && !R.hasError) ||
              (0, m.c)(P.current, u.Ww.SHIPPING_RATES_FAIL, {
                hasInvalidAddress: R.hasInvalidAddress,
                hasError: R.hasError,
              });
          }, [b, E, R.hasError, R.hasInvalidAddress]),
            (0, n.useEffect)(() => {
              !E &&
                b.length > 0 &&
                !R.hasError &&
                (0, m.c)(P.current, u.Ww.SHIPPING_RATES_SUCCESS, b);
            }, [b, E, R.hasError]),
            (0, n.useEffect)(() => {
              w ||
                (R.hasError
                  ? (0, m.c)(P.current, u.Ww.SHIPPING_RATE_SELECT_FAIL, {
                      hasError: R.hasError,
                      hasInvalidAddress: R.hasInvalidAddress,
                    })
                  : (0, m.c)(
                      P.current,
                      u.Ww.SHIPPING_RATE_SELECT_SUCCESS,
                      k.current
                    ));
            }, [k, w, R.hasError, R.hasInvalidAddress]);
          const I = {
            shippingErrorStatus: R,
            dispatchErrorStatus: C,
            shippingErrorTypes: c.LY,
            ...x,
          };
          return (0, o.createElement)(
            o.Fragment,
            null,
            (0, o.createElement)(f.Provider, { value: I }, e)
          );
        };
    },
    8470: (e, t, r) => {
      "use strict";
      if ((r.d(t, { b: () => n }), /^(251|7949)$/.test(r.j))) var o = r(4968);
      const n = (e, { type: t }) => (Object.values(o.LY).includes(t) ? t : e);
    },
    5022: (e, t, r) => {
      "use strict";
      if ((r.d(t, { S: () => n }), /^(251|7949)$/.test(r.j))) var o = r(4968);
      const n = (e) =>
        e.some((e) => !(!e.code || !Object.values(o.dr).includes(e.code)));
    },
    2559: (e, t, r) => {
      "use strict";
      r.d(t, { s: () => c, x: () => i });
      var o = r(1455),
        n = r.n(o),
        s = r(7143),
        a = r(7594);
      const c = (e, t, r) => {
          const o = Object.keys(e).map((t) => ({ key: t, value: e[t] }), []),
            n = `wc-${r}-new-payment-method`;
          return o.push({ key: n, value: t }), o;
        },
        i = (e) => {
          if (!e) return;
          const { __internalSetCustomerId: t } = (0, s.dispatch)(
            a.checkoutStore
          );
          n().setNonce && "function" == typeof n().setNonce && n().setNonce(e),
            n().setCartHash &&
              "function" == typeof n().setCartHash &&
              n().setCartHash(e),
            null != e &&
              e.get("User-ID") &&
              t(parseInt(e.get("User-ID") || "0", 10));
        };
    },
    3160: (e, t, r) => {
      "use strict";
      r.d(t, { G: () => i, u: () => l });
      var o = r(1609),
        n = r(6087);
      if (/^(251|7949)$/.test(r.j)) var s = r(2062);
      if (/^(251|7949)$/.test(r.j)) var a = r(851);
      const c = (0, n.createContext)({
          hasContainerWidth: !1,
          containerClassName: "",
          isMobile: !1,
          isSmall: !1,
          isMedium: !1,
          isLarge: !1,
        }),
        i = () => (0, n.useContext)(c),
        l = ({ children: e, className: t = "" }) => {
          const [r, n] = (0, s.B)(),
            i = {
              hasContainerWidth: "" !== n,
              containerClassName: n,
              isMobile: "is-mobile" === n,
              isSmall: "is-small" === n,
              isMedium: "is-medium" === n,
              isLarge: "is-large" === n,
            };
          return (0, o.createElement)(
            c.Provider,
            { value: i },
            (0, o.createElement)("div", { className: (0, a.A)(t, n) }, r, e)
          );
        };
    },
    1759: (e, t, r) => {
      "use strict";
      r.d(t, { m: () => s }), r(1609);
      var o = r(6087);
      r(7143);
      const n = (0, o.createContext)({
          isEditor: !1,
          currentPostId: 0,
          currentView: "",
          previewData: {},
          getPreviewData: () => ({}),
        }),
        s = () => (0, o.useContext)(n);
    },
    8040: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => a });
      var o = r(1609),
        n = r(6087);
      r(3135);
      const s = (e) => {
          if (!e) return;
          const t = e.getBoundingClientRect().bottom;
          (t >= 0 && t <= window.innerHeight) || e.scrollIntoView();
        },
        a = /^(251|7949)$/.test(r.j)
          ? (e) => (t) => {
              const r = (0, n.useRef)(null);
              return (0, o.createElement)(
                o.Fragment,
                null,
                (0, o.createElement)("div", {
                  className: "with-scroll-to-top__scroll-point",
                  ref: r,
                  "aria-hidden": !0,
                }),
                (0, o.createElement)(e, {
                  ...t,
                  scrollToTop: (e) => {
                    null !== r.current &&
                      ((e, t) => {
                        const { focusableSelector: r } = t || {};
                        window &&
                          Number.isFinite(window.innerHeight) &&
                          (r
                            ? ((e, t) => {
                                var r;
                                const o =
                                  (null === (r = e.parentElement) ||
                                  void 0 === r
                                    ? void 0
                                    : r.querySelectorAll(t)) || [];
                                if (o.length) {
                                  const e = o[0];
                                  s(e), null == e || e.focus();
                                } else s(e);
                              })(e, r)
                            : s(e));
                      })(r.current, e);
                  },
                })
              );
            }
          : null;
    },
    2062: (e, t, r) => {
      "use strict";
      r.d(t, { B: () => n });
      var o = r(9491);
      const n = () => {
        const [e, { width: t }] = (0, o.useResizeObserver)();
        let r = "";
        return (
          t > 700
            ? (r = "is-large")
            : t > 520
            ? (r = "is-medium")
            : t > 400
            ? (r = "is-small")
            : t && (r = "is-mobile"),
          [e, r]
        );
      };
    },
    5213: (e, t, r) => {
      "use strict";
      r.d(t, { E: () => n });
      var o = r(6087);
      function n() {
        const [e, t] = (0, o.useState)({ height: 0, width: 0 }),
          [r, n] = (0, o.useState)({ height: 0, width: 0 }),
          s = (0, o.useRef)(null);
        return (
          (0, o.useEffect)(() => {
            if (!s.current) return;
            const e = s.current,
              r = new ResizeObserver((r) => {
                r.forEach((r) => {
                  if (r.target === e) {
                    let n = "0";
                    var o;
                    n = e.computedStyleMap
                      ? (null === (o = e.computedStyleMap().get("top")) ||
                        void 0 === o
                          ? void 0
                          : o.toString()) || n
                      : getComputedStyle(e).top || n;
                    const { height: s, width: a } = r.contentRect;
                    t({ height: s + parseInt(n, 10), width: a });
                  }
                });
              }),
              o = new IntersectionObserver(
                (e) => {
                  e.forEach((e) => {
                    const { height: r, width: o } = e.boundingClientRect;
                    var s, a;
                    t({ height: r, width: o }),
                      e.target.ownerDocument.defaultView &&
                        n({
                          height:
                            null === (s = e.target.ownerDocument.defaultView) ||
                            void 0 === s
                              ? void 0
                              : s.innerHeight,
                          width:
                            null === (a = e.target.ownerDocument.defaultView) ||
                            void 0 === a
                              ? void 0
                              : a.innerWidth,
                        });
                  });
                },
                { root: null, rootMargin: "0px", threshold: 1 }
              );
            return (
              r.observe(e),
              o.observe(e),
              () => {
                e && (r.unobserve(e), o.unobserve(e));
              }
            );
          }, []),
          [s, e, r]
        );
      }
    },
    6239: (e, t, r) => {
      "use strict";
      r.d(t, { E: () => a });
      var o = r(1609),
        n = r(6087);
      const s = {
          bottom: 0,
          left: 0,
          opacity: 0,
          pointerEvents: "none",
          position: "absolute",
          right: 0,
          top: 0,
          zIndex: -1,
        },
        a = () => {
          const [e, t] = (0, n.useState)(""),
            r = (0, n.useRef)(null),
            a = (0, n.useRef)(
              new IntersectionObserver(
                (e) => {
                  e[0].isIntersecting
                    ? t("visible")
                    : t(e[0].boundingClientRect.top > 0 ? "below" : "above");
                },
                { threshold: [0, 0.5, 1] }
              )
            );
          return (
            (0, n.useLayoutEffect)(() => {
              const e = r.current,
                t = a.current;
              return (
                e && t.observe(e),
                () => {
                  t.unobserve(e);
                }
              );
            }, []),
            [
              (0, o.createElement)("div", {
                "aria-hidden": !0,
                ref: r,
                style: s,
              }),
              e,
            ]
          );
        };
    },
    4015: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => n });
      var o = r(6087);
      function n(e, t) {
        const r = (0, o.useRef)();
        return (
          (0, o.useEffect)(() => {
            r.current === e || (t && !t(e, r.current)) || (r.current = e);
          }, [e, t]),
          r.current
        );
      }
    },
    1269: (e, t, r) => {
      "use strict";
      r.d(t, { o: () => l });
      var o = r(6087),
        n = r(7143);
      if (/^(251|7949)$/.test(r.j)) var s = r(7849);
      var a = r(458),
        c = r.n(a),
        i = r(7594);
      const l = (e) => {
        const t = ((e) => {
          const t = (0, o.useRef)({ cart: {}, checkout: {}, customer: {} }),
            r = (0, n.useSelect)(
              (t) => {
                const r = t(i.cartStore),
                  o = t(i.checkoutStore),
                  n = t(i.paymentStore),
                  a = r.getCartData(),
                  {
                    coupons: c,
                    shippingRates: l,
                    shippingAddress: d,
                    billingAddress: u,
                    items: m,
                    itemsCount: p,
                    itemsWeight: h,
                    needsShipping: g,
                    totals: _,
                  } = a,
                  v = {
                    cart: {
                      coupons: c.map((e) => e.code),
                      shippingRates: [
                        ...new Set(
                          l
                            .map((e) => {
                              var t;
                              return null ===
                                (t = e.shipping_rates.find(
                                  (e) => e.selected
                                )) || void 0 === t
                                ? void 0
                                : t.rate_id;
                            })
                            .filter(Boolean)
                        ),
                      ],
                      items: m.map((e) => Array(e.quantity).fill(e.id)).flat(),
                      itemsType: [...new Set(m.map((e) => e.type))],
                      itemsCount: p,
                      itemsWeight: h,
                      needsShipping: g,
                      prefersCollection:
                        "boolean" == typeof o.prefersCollection() &&
                        o.prefersCollection(),
                      totals: {
                        totalPrice: Number(_.total_price),
                        totalTax: Number(_.total_tax),
                      },
                      extensions: a.extensions,
                    },
                    checkout: {
                      createAccount: o.getShouldCreateAccount(),
                      customerNote: o.getOrderNotes(),
                      additionalFields: o.getAdditionalFields(),
                      paymentMethod: n.getActivePaymentMethod(),
                    },
                    customer: {
                      id: o.getCustomerId(),
                      billingAddress: u,
                      shippingAddress: d,
                      ...("billing" === e || "shipping" === e
                        ? { address: "billing" === e ? u : d }
                        : {}),
                    },
                  };
                return {
                  cart: (0, s.f)(v.cart),
                  checkout: (0, s.f)(v.checkout),
                  customer: (0, s.f)(v.customer),
                };
              },
              [e]
            );
          return (t.current && c()(t.current, r)) || (t.current = r), t.current;
        })(e);
        return window.schemaParser
          ? { parser: window.schemaParser, data: t }
          : { parser: null, data: t };
      };
    },
    7901: (e, t, r) => {
      "use strict";
      r.d(t, { c: () => a });
      var o = r(6087),
        n = r(923),
        s = r.n(n);
      function a(e) {
        const t = (0, o.useRef)(e);
        return s()(e, t.current) || (t.current = e), t.current;
      }
    },
    7978: (e, t, r) => {
      "use strict";
      r.d(t, { $: () => s });
      var o = r(6087),
        n = r(195);
      const s = (e, t) => {
        const r = "string" == typeof e ? e : (0, o.renderToString)(e);
        (0, o.useEffect)(() => {
          r && (0, n.speak)(r, t);
        }, [r, t]);
      };
    },
    2150: (e, t, r) => {
      "use strict";
      if ((r.d(t, { p: () => c }), /^(2895|7949)$/.test(r.j))) var o = r(851);
      var n = r(3993);
      if (/^(2895|7949)$/.test(r.j)) var s = r(3924);
      if (/^(2895|7949)$/.test(r.j)) var a = r(104);
      const c = (e) => {
        const t = ((e) => {
            const t = (0, n.isObject)(e) ? e : { style: {} };
            let r = t.style;
            return (
              (0, n.isString)(r) && (r = JSON.parse(r) || {}),
              (0, n.isObject)(r) || (r = {}),
              { ...t, style: r }
            );
          })(e),
          r = (0, a.BK)(t),
          c = (0, a.aR)(t),
          i = (0, a.fo)(t),
          l = (0, s.x)(t);
        return {
          className: (0, o.A)(
            l.className,
            r.className,
            c.className,
            i.className
          ),
          style: { ...l.style, ...r.style, ...c.style, ...i.style },
        };
      };
    },
    3924: (e, t, r) => {
      "use strict";
      r.d(t, { x: () => n });
      var o = r(3993);
      const n = (e) => {
        const t = (0, o.isObject)(e.style.typography) ? e.style.typography : {},
          r = (0, o.isString)(t.fontFamily) ? t.fontFamily : "";
        return {
          className: e.fontFamily ? `has-${e.fontFamily}-font-family` : r,
          style: {
            fontSize: e.fontSize
              ? `var(--wp--preset--font-size--${e.fontSize})`
              : t.fontSize,
            fontStyle: t.fontStyle,
            fontWeight: t.fontWeight,
            letterSpacing: t.letterSpacing,
            lineHeight: t.lineHeight,
            textDecoration: t.textDecoration,
            textTransform: t.textTransform,
          },
        };
      };
    },
    3643: (e, t, r) => {
      "use strict";
      r.d(t, { KY: () => m, TU: () => l, i0: () => u, ln: () => d });
      var o = r(7057),
        n = (r(3832), r(3993)),
        s = r(5703),
        a = r(8537),
        c = r(2516);
      const i = (e, t) => e in t,
        l = (e) => {
          const t = (0, o.A)(c.Hw, s.defaultFields, e.country),
            r = Object.assign({}, e);
          return (
            t.forEach(({ key: t, hidden: o }) => {
              o && i(t, e) && (r[t] = "");
            }),
            r
          );
        },
        d = (e) => {
          const t = (0, o.A)(c.Hw, s.defaultFields, e.country),
            r = Object.assign({}, e);
          return (
            t.forEach(({ key: t }) => {
              "country" !== t && "state" !== t && i(t, e) && (r[t] = "");
            }),
            r
          );
        },
        u = (e) => {
          if (0 === Object.values(e).length) return null;
          const t = (0, n.isString)(c.G3[e.country])
              ? (0, a.decodeEntities)(c.G3[e.country])
              : "",
            r =
              (0, n.isObject)(c.SL[e.country]) &&
              (0, n.isString)(c.SL[e.country][e.state])
                ? (0, a.decodeEntities)(c.SL[e.country][e.state])
                : e.state,
            o = [];
          o.push(e.postcode.toUpperCase()),
            o.push(e.city),
            o.push(r),
            o.push(t);
          return o.filter(Boolean).join(", ") || null;
        },
        m = (e, t = []) => {
          if (!e.country) return !1;
          const r = (0, o.A)(c.Hw, s.defaultFields, e.country);
          return (
            t.length > 0 ? r.filter(({ key: e }) => t.includes(e)) : r
          ).every(
            ({ key: t, hidden: r, required: o }) =>
              !(!r && o) || (i(t, e) && "" !== e[t])
          );
        };
    },
    108: (e, t, r) => {
      "use strict";
      r.d(t, { Jq: () => i, h5: () => c, jj: () => l });
      var o = r(7723),
        n = r(692),
        s = r(7143);
      if (/^(6981|8157)$/.test(r.j)) var a = r(8755);
      (0, o.__)(
        "Something went wrong. Please contact us to get assistance.",
        "woocommerce"
      );
      const c = () => Object.values(a.tG),
        i = () => {
          const e = (0, s.select)(
              "wc/store/store-notices"
            ).getRegisteredContainers(),
            { removeNotice: t } = (0, s.dispatch)(n.store),
            { getNotices: r } = (0, s.select)(n.store);
          e.forEach((e) => {
            r(e).forEach((r) => {
              t(r.id, e);
            });
          });
        },
        l = (e) => {
          const { removeNotice: t } = (0, s.dispatch)(n.store),
            { getNotices: r } = (0, s.select)(n.store);
          r(e).forEach((r) => {
            t(r.id, e);
          });
        };
    },
    8021: (e, t, r) => {
      "use strict";
      r.d(t, { k: () => o });
      const o = (e) =>
        Object.fromEntries(
          e.map(({ package_id: e, shipping_rates: t }) => {
            var r;
            return [
              e,
              (null === (r = t.find((e) => e.selected)) || void 0 === r
                ? void 0
                : r.rate_id) || "",
            ];
          })
        );
    },
    3709: (e, t, r) => {
      "use strict";
      r.d(t, { R: () => o });
      const o = (e) =>
        Object.values(e).reduce(
          (e, t) => (null !== t.icons && (e = e.concat(t.icons)), e),
          []
        );
    },
    104: (e, t, r) => {
      "use strict";
      if (
        (r.d(t, { BK: () => l, aR: () => d, fo: () => u }),
        /^(2895|7949)$/.test(r.j))
      )
        var o = r(851);
      if (/^(2895|7949)$/.test(r.j)) var n = r(1194);
      var s = r(9786),
        a = r(3993);
      function c(e = {}) {
        const t = {};
        return (
          (0, s.getCSSRules)(e, { selector: "" }).forEach((e) => {
            t[e.key] = e.value;
          }),
          t
        );
      }
      function i(e, t) {
        return e && t ? `has-${(0, n.c)(t)}-${e}` : "";
      }
      function l(e) {
        var t, r, n, s, l, d;
        const { backgroundColor: u, textColor: m, gradient: p, style: h } = e,
          g = i("background-color", u),
          _ = i("color", m),
          v = (function (e) {
            if (e) return `has-${e}-gradient-background`;
          })(p),
          f =
            v ||
            (null == h || null === (t = h.color) || void 0 === t
              ? void 0
              : t.gradient);
        return {
          className: (0, o.A)(_, v, {
            [g]: !f && !!g,
            "has-text-color":
              m ||
              (null == h || null === (r = h.color) || void 0 === r
                ? void 0
                : r.text),
            "has-background":
              u ||
              (null == h || null === (n = h.color) || void 0 === n
                ? void 0
                : n.background) ||
              p ||
              (null == h || null === (s = h.color) || void 0 === s
                ? void 0
                : s.gradient),
            "has-link-color": (0, a.isObject)(
              null == h || null === (l = h.elements) || void 0 === l
                ? void 0
                : l.link
            )
              ? null == h ||
                null === (d = h.elements) ||
                void 0 === d ||
                null === (d = d.link) ||
                void 0 === d
                ? void 0
                : d.color
              : void 0,
          }),
          style: c({ color: (null == h ? void 0 : h.color) || {} }),
        };
      }
      function d(e) {
        var t;
        const r =
          (null === (t = e.style) || void 0 === t ? void 0 : t.border) || {};
        return {
          className: (function (e) {
            var t;
            const { borderColor: r, style: n } = e,
              s = r ? i("border-color", r) : "";
            return (0, o.A)({
              "has-border-color":
                !!r ||
                !(
                  null == n ||
                  null === (t = n.border) ||
                  void 0 === t ||
                  !t.color
                ),
              [s]: !!s,
            });
          })(e),
          style: c({ border: r }),
        };
      }
      function u(e) {
        var t;
        return {
          className: void 0,
          style: c({
            spacing:
              (null === (t = e.style) || void 0 === t ? void 0 : t.spacing) ||
              {},
          }),
        };
      }
    },
    6367: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => n, F: () => o });
      const o = () =>
          window.performance &&
          window.performance.getEntriesByType("navigation").length
            ? window.performance.getEntriesByType("navigation")[0].type
            : "",
        n = 989 == r.j ? o : null;
    },
    2466: (e, t, r) => {
      "use strict";
      r.d(t, { N: () => o });
      const o = (e, t) => {
        const r = [];
        return (
          Object.keys(e).forEach((o) => {
            if (void 0 !== t[o])
              switch (e[o].type) {
                case "boolean":
                  r[o] = "false" !== t[o] && !1 !== t[o];
                  break;
                case "number":
                  r[o] = parseInt(t[o], 10);
                  break;
                case "array":
                case "object":
                  r[o] = JSON.parse(t[o]);
                  break;
                default:
                  r[o] = t[o];
              }
            else r[o] = e[o].default;
          }),
          r
        );
      };
    },
    5868: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => a });
      var o = r(3993);
      const n = (e, t = "") => {
          var r;
          if (
            "wc-blocks-registry-js" === e &&
            "object" ==
              typeof (null === (r = window) ||
              void 0 === r ||
              null === (r = r.wc) ||
              void 0 === r
                ? void 0
                : r.wcBlocksRegistry)
          )
            return !0;
          const o = t.split("?");
          (null == o ? void 0 : o.length) > 1 && (t = o[0]);
          const n = t ? `script#${e}, script[src*="${t}"]` : `script#${e}`;
          return document.querySelectorAll(n).length > 0;
        },
        s = (e) => {
          if (!(0, o.isString)(e.id) || n(e.id, null == e ? void 0 : e.src))
            return;
          const t = document.createElement("script");
          for (const r in e) {
            if (!e.hasOwnProperty(r)) continue;
            const n = r;
            if ("onload" === n || "onerror" === n) continue;
            const s = e[n];
            (0, o.isString)(s) && (t[n] = s);
          }
          "function" == typeof e.onload && (t.onload = e.onload),
            "function" == typeof e.onerror && (t.onerror = e.onerror),
            document.body.appendChild(t);
        },
        a =
          989 == r.j
            ? ({
                handle: e,
                src: t,
                version: r,
                after: o,
                before: a,
                translations: c,
              }) =>
                new Promise((i, l) => {
                  n(`${e}-js`, t) && i(),
                    c && s({ id: `${e}-js-translations`, innerHTML: c }),
                    a && s({ id: `${e}-js-before`, innerHTML: a }),
                    s({
                      id: `${e}-js`,
                      onerror: l,
                      onload: () => {
                        o && s({ id: `${e}-js-after`, innerHTML: o }), i();
                      },
                      src: r ? `${t}?ver=${r}` : t,
                    });
                })
            : null;
    },
    7428: (e, t, r) => {
      "use strict";
      r.d(t, { Pt: () => n, f2: () => s });
      const o = window.CustomEvent || null,
        n = (
          e,
          { bubbles: t = !1, cancelable: r = !1, element: n, detail: s = {} }
        ) => {
          if (!o) return;
          n || (n = document.body);
          const a = new o(e, { bubbles: t, cancelable: r, detail: s });
          n.dispatchEvent(a);
        },
        s = (e, t, r = !1, o = !1) => {
          if ("function" != typeof jQuery) return () => {};
          const s = () => {
            n(t, { bubbles: r, cancelable: o });
          };
          return jQuery(document).on(e, s), () => jQuery(document).off(e, s);
        };
    },
    7786: (e, t, r) => {
      "use strict";
      r.d(t, { d: () => o });
      const o = (e, t) =>
        Object.entries(e).reduce((e, [r, o]) => ({ ...e, [t(o, r)]: o }), {});
    },
    6136: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => o });
      const o =
        989 == r.j
          ? ({ handle: e, src: t, version: r }) => {
              const o = t.split("?");
              (null == o ? void 0 : o.length) > 1 && (t = o[0]);
              const n = `#${e}-js, #${e}-js-prefetch, script[src*="${t}"]`;
              if (0 === document.querySelectorAll(n).length) {
                const o = document.createElement("link");
                (o.href = r ? `${t}?ver=${r}` : t),
                  (o.rel = "preload"),
                  (o.as = "script"),
                  (o.id = `${e}-js-prefetch`),
                  document.head.appendChild(o);
              }
            }
          : null;
    },
    7928: (e, t, r) => {
      "use strict";
      r.d(t, { Fq: () => l });
      var o = r(1609),
        n = r(6087),
        s = r(2807);
      const a = /^(251|2895|7949)$/.test(r.j)
          ? [".wp-block-woocommerce-cart"]
          : null,
        c = ({
          Block: e,
          container: t,
          attributes: r = {},
          props: a = {},
          errorBoundaryProps: c = {},
        }) => {
          const i = (0, n.createRoot)(t);
          return (
            i.render(
              (0, o.createElement)(
                () => (
                  (0, n.useEffect)(() => {
                    t.classList && t.classList.remove("is-loading");
                  }, []),
                  (0, o.createElement)(
                    s.A,
                    { ...c },
                    (0, o.createElement)(
                      n.Suspense,
                      {
                        fallback: (0, o.createElement)(
                          "div",
                          { className: "wc-block-placeholder" },
                          "Loading..."
                        ),
                      },
                      e && (0, o.createElement)(e, { ...a, attributes: r })
                    )
                  )
                ),
                null
              )
            ),
            i
          );
        },
        i = ({
          Block: e,
          containers: t,
          getProps: r = () => ({}),
          getErrorBoundaryProps: o = () => ({}),
        }) => {
          if (0 === t.length) return [];
          const n = [];
          return (
            Array.prototype.forEach.call(t, (t, s) => {
              const a = r(t, s),
                i = o(t, s),
                l = { ...t.dataset, ...(a.attributes || {}) };
              n.push({
                container: t,
                root: c({
                  Block: e,
                  container: t,
                  props: a,
                  attributes: l,
                  errorBoundaryProps: i,
                }),
              });
            }),
            n
          );
        },
        l = (e) => {
          const t = document.body.querySelectorAll(a.join(",")),
            {
              Block: r,
              getProps: o,
              getErrorBoundaryProps: n,
              selector: s,
            } = e,
            c = (({
              Block: e,
              getProps: t,
              getErrorBoundaryProps: r,
              selector: o,
              wrappers: n,
            }) => {
              const s = document.body.querySelectorAll(o);
              return (
                n &&
                  n.length > 0 &&
                  Array.prototype.filter.call(
                    s,
                    (e) =>
                      !((e, t) =>
                        Array.prototype.some.call(
                          t,
                          (t) => t.contains(e) && !t.isSameNode(e)
                        ))(e, n)
                  ),
                i({
                  Block: e,
                  containers: s,
                  getProps: t,
                  getErrorBoundaryProps: r,
                })
              );
            })({
              Block: r,
              getProps: o,
              getErrorBoundaryProps: n,
              selector: s,
              wrappers: t,
            });
          return (
            Array.prototype.forEach.call(t, (t) => {
              t.addEventListener("wc-blocks_render_blocks_frontend", () => {
                (({
                  Block: e,
                  getProps: t,
                  getErrorBoundaryProps: r,
                  selector: o,
                  wrapper: n,
                }) => {
                  const s = n.querySelectorAll(o);
                  i({
                    Block: e,
                    containers: s,
                    getProps: t,
                    getErrorBoundaryProps: r,
                  });
                })({ ...e, wrapper: t });
              });
            }),
            c
          );
        };
    },
    3835: (e, t, r) => {
      "use strict";
      r.d(t, {
        $u: () => g,
        HI: () => d,
        J_: () => c,
        Lb: () => l,
        PU: () => h,
        T4: () => s,
        jV: () => i,
        mH: () => m,
        qr: () => p,
        uo: () => u,
      });
      var o = r(5703),
        n = r(2516);
      const s = (e) => e.length,
        a = (0, o.getSetting)("collectableMethodIds", []),
        c = (e) => a.includes(e.method_id),
        i = (e) =>
          !!n.F7 &&
          (Array.isArray(e) ? !!e.find((e) => a.includes(e)) : a.includes(e)),
        l = (e) =>
          e.reduce(function (e, t) {
            return e + t.shipping_rates.length;
          }, 0),
        d = (e) => e.some((e) => !!e.shipping_rates.length),
        u = (e, t) =>
          e.map((e) => ({
            ...e,
            shipping_rates: e.shipping_rates.filter((e) => {
              const r = i(e.method_id);
              return t ? r : !r;
            }),
          })),
        m = (e) =>
          (0, o.getSetting)("displayCartPricesIncludingTax", !1)
            ? parseInt(e.total_shipping, 10) +
              parseInt(e.total_shipping_tax, 10)
            : parseInt(e.total_shipping, 10),
        p = (e) =>
          e.flatMap((e) =>
            e.shipping_rates.filter((e) => e.selected).flatMap((e) => e.name)
          ),
        h = (e) =>
          !!d(e) &&
          e.every((e) => e.shipping_rates.every((e) => !e.selected || c(e))),
        g = (e) =>
          !!d(e) && e.every((e) => e.shipping_rates.every((e) => c(e)));
    },
    7849: (e, t, r) => {
      "use strict";
      if ((r.d(t, { f: () => s }), /^(251|7949)$/.test(r.j))) var o = r(4370);
      if (/^(251|7949)$/.test(r.j)) var n = r(7786);
      const s = (e) => (0, n.d)(e, (e, t) => (0, o.L)(t));
    },
    5238: (e, t, r) => {
      "use strict";
      r.d(t, { E: () => s });
      var o = r(6087);
      let n = null;
      function s(e) {
        const t = (0, o.useRef)(null),
          r = (0, o.useRef)(null),
          s = (0, o.useRef)(e);
        return (
          (0, o.useEffect)(() => {
            s.current = e;
          }, [e]),
          (0, o.useCallback)((e) => {
            if (e) (t.current = e), (r.current = e.ownerDocument.activeElement);
            else if (r.current) {
              var o, a, c;
              const e =
                null === (o = t.current) || void 0 === o
                  ? void 0
                  : o.contains(
                      null === (a = t.current) || void 0 === a
                        ? void 0
                        : a.ownerDocument.activeElement
                    );
              var i;
              if (
                (null !== (c = t.current) &&
                  void 0 !== c &&
                  c.isConnected &&
                  !e &&
                  ((null !== (i = n) && void 0 !== i) || (n = r.current)),
                s.current)
              )
                s.current();
              else {
                var l;
                const e = r.current;
                null === (l = null != e && e.isConnected ? e : n) ||
                  void 0 === l ||
                  l.focus();
              }
              n = null;
            }
          }, [])
        );
      }
    },
    8967: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => g });
      var o = r(1609),
        n = r(7723);
      if (/^(251|7949)$/.test(r.j)) var s = r(5171);
      if (/^(251|7949)$/.test(r.j)) var a = r(449);
      var c = r(6087);
      if (/^(251|7949)$/.test(r.j)) var i = r(1759);
      var l = r(4040),
        d = r.n(l),
        u = r(7143);
      if (/^(251|7949)$/.test(r.j)) var m = r(5788);
      if (/^(251|7949)$/.test(r.j)) var p = r(8868);
      if (/^(251|7949)$/.test(r.j)) var h = r(6865);
      const g = /^(251|7949)$/.test(r.j)
        ? () => {
            const { isEditor: e } = (0, i.m)(),
              {
                showButtonStyles: t,
                buttonHeight: r,
                buttonBorderRadius: l,
              } = (0, h.V)(),
              g = t ? { height: r, borderRadius: l } : void 0,
              { activePaymentMethod: _, paymentMethodData: v } = (0,
              u.useSelect)((e) => {
                const t = e(p.U);
                return {
                  activePaymentMethod: t.getActivePaymentMethod(),
                  paymentMethodData: t.getPaymentMethodData(),
                };
              }),
              {
                __internalSetActivePaymentMethod: f,
                __internalSetExpressPaymentStarted: b,
                __internalSetPaymentIdle: E,
                __internalSetPaymentError: y,
                __internalSetPaymentMethodData: k,
                __internalSetExpressPaymentError: w,
              } = (0, u.useDispatch)(p.U),
              { paymentMethods: S } = (0, s.u)(),
              C = (0, a.Y)(),
              A = (0, c.useRef)(_),
              N = (0, c.useRef)(v),
              P = (0, c.useCallback)(
                (e) => () => {
                  (A.current = _), (N.current = v), b(), f(e);
                },
                [_, v, f, b]
              ),
              x = (0, c.useCallback)(() => {
                E(), f(A.current, N.current);
              }, [f, E]),
              R = (0, c.useCallback)(
                (e) => {
                  y(), k(e), w(e), f(A.current, N.current);
                },
                [f, y, k, w]
              ),
              I = (0, c.useCallback)(
                (e = "") => {
                  d()(
                    "Express Payment Methods should use the provided onError handler instead.",
                    {
                      alternative: "onError",
                      plugin: "woocommerce-gutenberg-products-block",
                      link: "https://github.com/woocommerce/woocommerce-gutenberg-products-block/pull/4228",
                    }
                  ),
                    e ? R(e) : w("");
                },
                [w, R]
              ),
              M = Object.entries(S),
              T =
                M.length > 0
                  ? M.map(([t, r]) => {
                      const n = e ? r.edit : r.content;
                      return (0, c.isValidElement)(n)
                        ? (0, o.createElement)(
                            "li",
                            { key: t, id: `express-payment-method-${t}` },
                            (0, c.cloneElement)(n, {
                              ...C,
                              onClick: P(t),
                              onClose: x,
                              onError: R,
                              setExpressPaymentError: I,
                              buttonAttributes: g,
                            })
                          )
                        : null;
                    })
                  : (0, o.createElement)(
                      "li",
                      { key: "noneRegistered" },
                      (0, n.__)("No registered Payment Methods", "woocommerce")
                    );
            return (0, o.createElement)(
              m.A,
              { isEditor: e },
              (0, o.createElement)(
                "ul",
                {
                  className:
                    "wc-block-components-express-payment__event-buttons",
                },
                T
              )
            );
          }
        : null;
    },
    3472: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => m });
      var o = r(1609),
        n = r(7723);
      if (7949 == r.j) var s = r(5171);
      if (7949 == r.j) var a = r(8755);
      var c = r(4656),
        i = r(3872),
        l = r(7143),
        d = r(7594);
      if (7949 == r.j) var u = r(8967);
      r(9569);
      const m =
        7949 == r.j
          ? () => {
              const { paymentMethods: e, isInitialized: t } = (0, s.u)(),
                {
                  isCalculating: r,
                  isProcessing: m,
                  isAfterProcessing: p,
                  isBeforeProcessing: h,
                  isComplete: g,
                  hasError: _,
                } = (0, l.useSelect)((e) => {
                  const t = e(d.checkoutStore);
                  return {
                    isCalculating: t.isCalculating(),
                    isProcessing: t.isProcessing(),
                    isAfterProcessing: t.isAfterProcessing(),
                    isBeforeProcessing: t.isBeforeProcessing(),
                    isComplete: t.isComplete(),
                    hasError: t.hasError(),
                  };
                }),
                v = (0, l.useSelect)((e) =>
                  e(d.paymentStore).isExpressPaymentMethodActive()
                );
              if (!t || (t && 0 === Object.keys(e).length)) return null;
              const f = m || p || h || (g && !_);
              return (0, o.createElement)(
                o.Fragment,
                null,
                (0, o.createElement)(
                  i.A,
                  { isLoading: r || f || v },
                  (0, o.createElement)(
                    "div",
                    {
                      className:
                        "wc-block-components-express-payment wc-block-components-express-payment--cart",
                    },
                    (0, o.createElement)(
                      "div",
                      {
                        className:
                          "wc-block-components-express-payment__content",
                      },
                      (0, o.createElement)(c.StoreNoticesContainer, {
                        context: a.tG.EXPRESS_PAYMENTS,
                      }),
                      (0, o.createElement)(u.A, null)
                    )
                  )
                ),
                (0, o.createElement)(
                  "div",
                  {
                    className:
                      "wc-block-components-express-payment-continue-rule wc-block-components-express-payment-continue-rule--cart",
                  },
                  (0, n.__)("Or", "woocommerce")
                )
              );
            }
          : null;
    },
    9280: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => p });
      var o = r(1609),
        n = r(7723);
      if (251 == r.j) var s = r(1759);
      if (251 == r.j) var a = r(8755);
      var c = r(4656),
        i = r(3872),
        l = r(5703),
        d = r(7594),
        u = r(7143);
      if (251 == r.j) var m = r(8967);
      r(9569);
      const p =
        251 == r.j
          ? () => {
              const {
                  isCalculating: e,
                  isProcessing: t,
                  isAfterProcessing: r,
                  isBeforeProcessing: p,
                  isComplete: h,
                  hasError: g,
                } = (0, u.useSelect)((e) => {
                  const t = e(d.checkoutStore);
                  return {
                    isCalculating: t.isCalculating(),
                    isProcessing: t.isProcessing(),
                    isAfterProcessing: t.isAfterProcessing(),
                    isBeforeProcessing: t.isBeforeProcessing(),
                    isComplete: t.isComplete(),
                    hasError: t.hasError(),
                  };
                }),
                {
                  availableExpressPaymentMethods: _,
                  expressPaymentMethodsInitialized: v,
                  isExpressPaymentMethodActive: f,
                } = (0, u.useSelect)((e) => {
                  const t = e(d.paymentStore);
                  return {
                    availableExpressPaymentMethods:
                      t.getAvailableExpressPaymentMethods(),
                    expressPaymentMethodsInitialized:
                      t.expressPaymentMethodsInitialized(),
                    isExpressPaymentMethodActive:
                      t.isExpressPaymentMethodActive(),
                  };
                }),
                { isEditor: b } = (0, s.m)();
              if (!v || (v && 0 === Object.keys(_).length))
                return b || l.CURRENT_USER_IS_ADMIN
                  ? (0, o.createElement)(c.StoreNoticesContainer, {
                      context: a.tG.EXPRESS_PAYMENTS,
                    })
                  : null;
              const E = t || r || p || (h && !g);
              return (0, o.createElement)(
                o.Fragment,
                null,
                (0, o.createElement)(
                  i.A,
                  { isLoading: e || E || f },
                  (0, o.createElement)(
                    "div",
                    {
                      className:
                        "wc-block-components-express-payment wc-block-components-express-payment--checkout",
                    },
                    (0, o.createElement)(
                      "div",
                      {
                        className:
                          "wc-block-components-express-payment__title-container",
                      },
                      (0, o.createElement)(
                        c.Title,
                        {
                          className:
                            "wc-block-components-express-payment__title",
                          headingLevel: "2",
                        },
                        (0, n.__)("Express Checkout", "woocommerce")
                      )
                    ),
                    (0, o.createElement)(
                      "div",
                      {
                        className:
                          "wc-block-components-express-payment__content",
                      },
                      (0, o.createElement)(c.StoreNoticesContainer, {
                        context: a.tG.EXPRESS_PAYMENTS,
                      }),
                      (0, o.createElement)(m.A, null)
                    )
                  )
                ),
                (0, o.createElement)(
                  "div",
                  {
                    className:
                      "wc-block-components-express-payment-continue-rule wc-block-components-express-payment-continue-rule--checkout",
                  },
                  (0, n.__)("Or continue below", "woocommerce")
                )
              );
            }
          : null;
    },
    6865: (e, t, r) => {
      "use strict";
      r.d(t, { V: () => s, W: () => n });
      var o = r(6087);
      const n = (0, o.createContext)({
          showButtonStyles: !1,
          buttonHeight: "48",
          buttonBorderRadius: "4",
        }),
        s = () => (0, o.useContext)(n);
    },
    1395: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => a });
      var o = r(1609),
        n = r(7723),
        s = r(4090);
      r(1637);
      const a =
        251 == r.j
          ? () =>
              (0, o.createElement)(
                s.A,
                {
                  isDismissible: !1,
                  className: "wc-block-checkout__no-payment-methods-notice",
                  status: "error",
                },
                (0, n.__)(
                  "There are no payment methods available. This may be an error on our side. Please contact us if you need any help placing your order.",
                  "woocommerce"
                )
              )
          : null;
    },
    1995: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => d });
      var o = r(1609),
        n = r(7723);
      if (251 == r.j) var s = r(1759);
      var a = r(4656),
        c = r(7143),
        i = r(7594);
      if (251 == r.j) var l = r(5788);
      const d =
        251 == r.j
          ? ({ children: e, showSaveOption: t }) => {
              const { isEditor: r } = (0, s.m)(),
                { shouldSavePaymentMethod: d, customerId: u } = (0,
                c.useSelect)((e) => {
                  const t = e(i.paymentStore),
                    r = e(i.checkoutStore);
                  return {
                    shouldSavePaymentMethod: t.getShouldSavePaymentMethod(),
                    customerId: r.getCustomerId(),
                  };
                }),
                { __internalSetShouldSavePaymentMethod: m } = (0,
                c.useDispatch)(i.paymentStore);
              return (0, o.createElement)(
                l.A,
                { isEditor: r },
                e,
                u > 0 &&
                  t &&
                  (0, o.createElement)(a.CheckboxControl, {
                    className:
                      "wc-block-components-payment-methods__save-card-info",
                    label: (0, n.__)(
                      "Save payment information to my account for future purchases.",
                      "woocommerce"
                    ),
                    checked: d,
                    onChange: () => m(!d),
                  })
              );
            }
          : null;
    },
    5788: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => u });
      var o = r(2294),
        n = r(1609),
        s = r(7723),
        a = r(6087),
        c = r(5703),
        i = r(4656),
        l = r(8755);
      class d extends a.Component {
        constructor(...e) {
          super(...e),
            (0, o.A)(this, "state", { errorMessage: "", hasError: !1 });
        }
        static getDerivedStateFromError(e) {
          return { errorMessage: e.message, hasError: !0 };
        }
        render() {
          const { hasError: e, errorMessage: t } = this.state,
            { isEditor: r } = this.props;
          if (e) {
            let e = (0, s.__)(
              "We are experiencing difficulties with this payment method. Please contact us for assistance.",
              "woocommerce"
            );
            (r || c.CURRENT_USER_IS_ADMIN) &&
              (e =
                t ||
                (0, s.__)(
                  "There was an error with this payment method. Please verify it's configured correctly.",
                  "woocommerce"
                ));
            const o = [
              { id: "0", content: e, isDismissible: !1, status: "error" },
            ];
            return (0, n.createElement)(i.StoreNoticesContainer, {
              additionalNotices: o,
              context: l.tG.PAYMENTS,
            });
          }
          return this.props.children;
        }
      }
      const u = /^(251|7949)$/.test(r.j) ? d : null;
    },
    4791: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => g });
      var o = r(1609);
      if (251 == r.j) var n = r(449);
      if (251 == r.j) var s = r(9499);
      var a = r(6087);
      if (251 == r.j) var c = r(1759);
      if (251 == r.j) var i = r(851);
      var l = r(4656),
        d = r(7143),
        u = r(4083),
        m = r(7594);
      if (251 == r.j) var p = r(1995);
      if (251 == r.j) var h = r(8755);
      const g =
        251 == r.j
          ? () => {
              const {
                  activeSavedToken: e,
                  activePaymentMethod: t,
                  isExpressPaymentMethodActive: r,
                  savedPaymentMethods: g,
                  availablePaymentMethods: _,
                } = (0, d.useSelect)((e) => {
                  const t = e(m.paymentStore);
                  return {
                    activeSavedToken: t.getActiveSavedToken(),
                    activePaymentMethod: t.getActivePaymentMethod(),
                    isExpressPaymentMethodActive:
                      t.isExpressPaymentMethodActive(),
                    savedPaymentMethods: t.getSavedPaymentMethods(),
                    availablePaymentMethods: t.getAvailablePaymentMethods(),
                  };
                }),
                { __internalSetActivePaymentMethod: v } = (0, d.useDispatch)(
                  m.paymentStore
                ),
                f = (0, u.getPaymentMethods)(),
                { ...b } = (0, n.Y)(),
                { removeNotice: E } = (0, d.useDispatch)("core/notices"),
                { dispatchCheckoutEvent: y } = (0, s.y)(),
                { isEditor: k } = (0, c.m)(),
                w = Object.keys(_).map((e) => {
                  const { edit: t, content: r, label: n, supports: s } = f[e],
                    c = k ? t : r;
                  return {
                    value: e,
                    label:
                      "string" == typeof n
                        ? n
                        : (0, a.cloneElement)(n, { components: b.components }),
                    name: `wc-saved-payment-method-token-${e}`,
                    content: (0, o.createElement)(
                      p.A,
                      { showSaveOption: s.showSaveOption },
                      (0, a.cloneElement)(c, {
                        __internalSetActivePaymentMethod: v,
                        ...b,
                      })
                    ),
                  };
                }),
                S = (0, a.useCallback)(
                  (e) => {
                    v(e),
                      E("wc-payment-error", h.tG.PAYMENTS),
                      y("set-active-payment-method", { paymentMethodSlug: e });
                  },
                  [y, E, v]
                ),
                C = 0 === Object.keys(g).length && 1 === Object.keys(f).length,
                A = (0, i.A)({ "disable-radio-control": C });
              return r
                ? null
                : (0, o.createElement)(l.RadioControlAccordion, {
                    highlightChecked: !0,
                    id: "wc-payment-method-options",
                    className: A,
                    selected: e ? null : t,
                    onChange: S,
                    options: w,
                  });
            }
          : null;
    },
    4187: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => u });
      var o = r(1609),
        n = r(7723),
        s = r(4656),
        a = r(7143),
        c = r(7594);
      if (251 == r.j) var i = r(1395);
      if (251 == r.j) var l = r(4791);
      if (251 == r.j) var d = r(3169);
      r(181);
      const u =
        251 == r.j
          ? ({ noPaymentMethods: e = (0, o.createElement)(i.A, null) }) => {
              const {
                paymentMethodsInitialized: t,
                availablePaymentMethods: r,
                savedPaymentMethods: u,
              } = (0, a.useSelect)((e) => {
                const t = e(c.paymentStore);
                return {
                  paymentMethodsInitialized: t.paymentMethodsInitialized(),
                  availablePaymentMethods: t.getAvailablePaymentMethods(),
                  savedPaymentMethods: t.getSavedPaymentMethods(),
                };
              });
              return t && 0 === Object.keys(r).length
                ? e
                : (0, o.createElement)(
                    o.Fragment,
                    null,
                    (0, o.createElement)(d.A, null),
                    Object.keys(u).length > 0 &&
                      (0, o.createElement)(s.Label, {
                        label: (0, n.__)(
                          "Use another payment method.",
                          "woocommerce"
                        ),
                        screenReaderLabel: (0, n.__)(
                          "Other available payment methods",
                          "woocommerce"
                        ),
                        wrapperElement: "p",
                        wrapperProps: {
                          className: [
                            "wc-block-components-checkout-step__description wc-block-components-checkout-step__description-payments-aligned",
                          ],
                        },
                      }),
                    (0, o.createElement)(l.A, null)
                  );
            }
          : null;
    },
    3169: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => v });
      var o = r(1609),
        n = r(6087),
        s = r(7723);
      if (251 == r.j) var a = r(8755);
      var c = r(4656);
      if (251 == r.j) var i = r(449);
      if (251 == r.j) var l = r(9499);
      var d = r(7594),
        u = r(7143),
        m = r(4083),
        p = r(3993);
      if (251 == r.j) var h = r(5807);
      const g = ({ method: e, expires: t }) => {
          var r, o, n;
          return (0, s.sprintf)(
            /* translators: %1$s is referring to the payment method brand, %2$s is referring to the last 4 digits of the payment card, %3$s is referring to the expiry date.  */ /* translators: %1$s is referring to the payment method brand, %2$s is referring to the last 4 digits of the payment card, %3$s is referring to the expiry date.  */
            (0, s.__)("%1$s ending in %2$s (expires %3$s)", "woocommerce"),
            null !==
              (r =
                null !== (o = null == e ? void 0 : e.display_brand) &&
                void 0 !== o
                  ? o
                  : null == e || null === (n = e.networks) || void 0 === n
                  ? void 0
                  : n.preferred) && void 0 !== r
              ? r
              : e.brand,
            e.last4,
            t
          );
        },
        _ = ({ method: e }) =>
          e.brand && e.last4
            ? (0, s.sprintf)(
                /* translators: %1$s is referring to the payment method brand, %2$s is referring to the last 4 digits of the payment card. */ /* translators: %1$s is referring to the payment method brand, %2$s is referring to the last 4 digits of the payment card. */
                (0, s.__)("%1$s ending in %2$s", "woocommerce"),
                e.brand,
                e.last4
              )
            : (0, s.sprintf)(
                /* translators: %s is the name of the payment method gateway. */ /* translators: %s is the name of the payment method gateway. */
                (0, s.__)("Saved token for %s", "woocommerce"),
                e.gateway
              ),
        v =
          251 == r.j
            ? () => {
                var e;
                const {
                    activeSavedToken: t,
                    activePaymentMethod: r,
                    savedPaymentMethods: s,
                  } = (0, u.useSelect)((e) => {
                    const t = e(d.paymentStore);
                    return {
                      activeSavedToken: t.getActiveSavedToken(),
                      activePaymentMethod: t.getActivePaymentMethod(),
                      savedPaymentMethods: t.getSavedPaymentMethods(),
                    };
                  }),
                  { __internalSetActivePaymentMethod: v } = (0, u.useDispatch)(
                    d.paymentStore
                  ),
                  f = (0, h.z)(),
                  b = (0, m.getPaymentMethods)(),
                  E = (0, i.Y)(),
                  { removeNotice: y } = (0, u.useDispatch)("core/notices"),
                  { dispatchCheckoutEvent: k } = (0, l.y)(),
                  w = (0, n.useMemo)(() => {
                    const e = Object.keys(s),
                      t = new Set(
                        e.flatMap((e) => s[e].map((e) => e.method.gateway))
                      ),
                      r = Array.from(t).filter((e) => {
                        var t;
                        return null === (t = b[e]) || void 0 === t
                          ? void 0
                          : t.canMakePayment(f);
                      });
                    return e
                      .flatMap((e) =>
                        s[e].map((t) => {
                          if (!r.includes(t.method.gateway)) return;
                          const o = "cc" === e || "echeck" === e,
                            n = t.method.gateway;
                          return {
                            name: `wc-saved-payment-method-token-${n}`,
                            label: o ? g(t) : _(t),
                            value: t.tokenId.toString(),
                            onChange: (e) => {
                              const t = `wc-${n}-payment-token`;
                              v(n, {
                                token: e,
                                payment_method: n,
                                [t]: e.toString(),
                                isSavedToken: !0,
                              }),
                                y("wc-payment-error", a.tG.PAYMENTS),
                                k("set-active-payment-method", {
                                  paymentMethodSlug: n,
                                });
                            },
                          };
                        })
                      )
                      .filter((e) => void 0 !== e);
                  }, [s, b, v, y, k, f]),
                  S =
                    t &&
                    b[r] &&
                    void 0 !==
                      (null === (e = b[r]) || void 0 === e
                        ? void 0
                        : e.savedTokenComponent) &&
                    !(0, p.isNull)(b[r].savedTokenComponent)
                      ? (0, n.cloneElement)(b[r].savedTokenComponent, {
                          token: t,
                          ...E,
                        })
                      : null;
                return w.length > 0
                  ? (0, o.createElement)(
                      o.Fragment,
                      null,
                      (0, o.createElement)(c.RadioControl, {
                        highlightChecked: !0,
                        id: "wc-payment-method-saved-tokens",
                        selected: t,
                        options: w,
                        onChange: () => {},
                      }),
                      S
                    )
                  : null;
              }
            : null;
    },
    630: (e, t, r) => {
      "use strict";
      r.d(t, { U: () => n });
      var o = r(7723);
      const n = "wc/store/cart";
      (0, o.__)("Unable to get cart data from the API.", "woocommerce");
    },
    5910: (e, t, r) => {
      "use strict";
      r.d(t, { r: () => c });
      var o = r(2516),
        n = r(1853);
      const s = {};
      o.Hw.forEach((e) => {
        s[e] = "";
      });
      const a = {};
      o.Hw.forEach((e) => {
        a[e] = "";
      }),
        (a.email = "");
      const c = {
        cartItemsPendingQuantity: [],
        cartItemsPendingDelete: [],
        productsPendingAdd: [],
        cartData: {
          coupons: n.fH,
          shippingRates: n.BE,
          shippingAddress: s,
          billingAddress: a,
          items: n.Kx,
          itemsCount: 0,
          itemsWeight: 0,
          crossSells: n.kB,
          needsShipping: !0,
          needsPayment: !1,
          hasCalculatedShipping: !0,
          fees: n.xH,
          totals: {
            currency_code: "",
            currency_symbol: "",
            currency_minor_unit: 2,
            currency_decimal_separator: ".",
            currency_thousand_separator: ",",
            currency_prefix: "",
            currency_suffix: "",
            total_items: "0",
            total_items_tax: "0",
            total_fees: "0",
            total_fees_tax: "0",
            total_discount: "0",
            total_discount_tax: "0",
            total_shipping: "0",
            total_shipping_tax: "0",
            total_price: "0",
            total_tax: "0",
            tax_lines: n.gp,
          },
          errors: n.vP,
          paymentMethods: n.I0,
          paymentRequirements: n.uk,
          extensions: n.Vi,
        },
        metaData: {
          updatingCustomerData: !1,
          updatingSelectedRate: !1,
          applyingCoupon: "",
          removingCoupon: "",
          isCartDataStale: !1,
        },
        errors: n.FU,
      };
    },
    8682: (e, t, r) => {
      "use strict";
      r.d(t, { ND: () => s });
      var o = r(7143);
      r(3832);
      var n = r(9495);
      const s = () => {
        const e = (0, o.select)(n.U),
          t = e.getValidationError("shipping_state"),
          r = e.getValidationError("shipping_address_1"),
          s = e.getValidationError("shipping_country"),
          a = e.getValidationError("shipping_postcode");
        return [e.getValidationError("shipping_city"), t, r, s, a].some(
          (e) => void 0 !== e
        );
      };
      ((e) => {
        let t,
          r = null;
        const o = (...o) => {
          (r = o),
            t && clearTimeout(t),
            (t = setTimeout(() => {
              (t = null), r && e(...r);
            }, 300));
        };
        (o.flush = () => {
          t && r && (e(...r), clearTimeout(t), (t = null));
        }),
          (o.clear = () => {
            t && clearTimeout(t), (t = null);
          });
      })((e) => {
        window.localStorage.setItem(
          "WOOCOMMERCE_CHECKOUT_IS_CUSTOMER_DATA_DIRTY",
          e ? "true" : "false"
        );
      });
    },
    1853: (e, t, r) => {
      "use strict";
      r.d(t, {
        BE: () => l,
        FU: () => i,
        I0: () => d,
        Kx: () => n,
        Vi: () => m,
        fH: () => o,
        gp: () => p,
        kB: () => s,
        uk: () => u,
        vP: () => c,
        xH: () => a,
      });
      const o = 251 == r.j ? [] : null,
        n = 251 == r.j ? [] : null,
        s = 251 == r.j ? [] : null,
        a = 251 == r.j ? [] : null,
        c = 251 == r.j ? [] : null,
        i = 251 == r.j ? [] : null,
        l = 251 == r.j ? [] : null,
        d = 251 == r.j ? [] : null,
        u = 251 == r.j ? [] : null,
        m = {},
        p = 251 == r.j ? [] : null;
    },
    8868: (e, t, r) => {
      "use strict";
      r.d(t, { U: () => o });
      const o = "wc/store/payment";
    },
    5807: (e, t, r) => {
      "use strict";
      r.d(t, { z: () => d }), r(5703);
      var o = r(7143);
      if (251 == r.j) var n = r(8021);
      if (251 == r.j) var s = r(3643);
      if ((r(7723), r(4083), 251 == r.j)) var a = r(2969);
      if (251 == r.j) var c = r(630);
      if (251 == r.j) var i = r(1853);
      if (251 == r.j) var l = r(5910);
      const d = () => {
        let e;
        if ((0, o.select)("core/editor")) {
          const t = {
            cartCoupons: a.B.coupons,
            cartItems: a.B.items,
            crossSellsProducts: a.B.cross_sells,
            cartFees: a.B.fees,
            cartItemsCount: a.B.items_count,
            cartItemsWeight: a.B.items_weight,
            cartNeedsPayment: a.B.needs_payment,
            cartNeedsShipping: a.B.needs_shipping,
            cartItemErrors: i.vP,
            cartTotals: a.B.totals,
            cartIsLoading: !1,
            cartErrors: i.FU,
            billingData: l.r.cartData.billingAddress,
            billingAddress: l.r.cartData.billingAddress,
            shippingAddress: l.r.cartData.shippingAddress,
            extensions: i.Vi,
            shippingRates: a.B.shipping_rates,
            isLoadingRates: !1,
            cartHasCalculatedShipping: a.B.has_calculated_shipping,
            paymentRequirements: a.B.payment_requirements,
            receiveCart: () => {},
          };
          e = {
            cart: t,
            cartTotals: t.cartTotals,
            cartNeedsShipping: t.cartNeedsShipping,
            billingData: t.billingAddress,
            billingAddress: t.billingAddress,
            shippingAddress: t.shippingAddress,
            selectedShippingMethods: (0, n.k)(t.shippingRates),
            paymentMethods: a.B.payment_methods,
            paymentRequirements: t.paymentRequirements,
          };
        } else {
          const t = (0, o.select)(c.U),
            r = t.getCartData(),
            a = t.getCartErrors(),
            i = t.getCartTotals(),
            l = !t.hasFinishedResolution("getCartData"),
            d = t.isCustomerDataUpdating(),
            u = (0, n.k)(r.shippingRates);
          e = {
            cart: {
              cartCoupons: r.coupons,
              cartItems: r.items,
              crossSellsProducts: r.crossSells,
              cartFees: r.fees,
              cartItemsCount: r.itemsCount,
              cartItemsWeight: r.itemsWeight,
              cartNeedsPayment: r.needsPayment,
              cartNeedsShipping: r.needsShipping,
              cartItemErrors: r.errors,
              cartTotals: i,
              cartIsLoading: l,
              cartErrors: a,
              billingData: (0, s.TU)(r.billingAddress),
              billingAddress: (0, s.TU)(r.billingAddress),
              shippingAddress: (0, s.TU)(r.shippingAddress),
              extensions: r.extensions,
              shippingRates: r.shippingRates,
              isLoadingRates: d,
              cartHasCalculatedShipping: r.hasCalculatedShipping,
              paymentRequirements: r.paymentRequirements,
              receiveCart: (0, o.dispatch)(c.U).receiveCart,
            },
            cartTotals: r.totals,
            cartNeedsShipping: r.needsShipping,
            billingData: r.billingAddress,
            billingAddress: r.billingAddress,
            shippingAddress: r.shippingAddress,
            selectedShippingMethods: u,
            paymentMethods: r.paymentMethods,
            paymentRequirements: r.paymentRequirements,
          };
        }
        return e;
      };
    },
    9495: (e, t, r) => {
      "use strict";
      r.d(t, { U: () => o });
      const o = "wc/store/validation";
    },
    2922: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => a });
      var o = r(1609),
        n = r(5573);
      const s = (0, o.createElement)(
          n.SVG,
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 32 32",
            fill: "none",
          },
          (0, o.createElement)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M19.5556 12.3333C19.0646 12.3333 18.6667 11.9354 18.6667 11.4444C18.6667 10.7372 18.3857 8.05893 17.8856 7.55883C17.3855 7.05873 16.7073 6.77778 16 6.77778C15.2928 6.77778 14.6145 7.05873 14.1144 7.55883C13.6143 8.05893 13.3333 10.7372 13.3333 11.4444C13.3333 11.9354 12.9354 12.3333 12.4445 12.3333C11.9535 12.3333 11.5556 11.9354 11.5556 11.4444C11.5556 10.2657 12.0238 7.13524 12.8573 6.30175C13.6908 5.46825 14.8213 5 16 5C17.1788 5 18.3092 5.46825 19.1427 6.30175C19.9762 7.13524 20.4445 10.2657 20.4445 11.4444C20.4445 11.9354 20.0465 12.3333 19.5556 12.3333Z",
            fill: "currentColor",
          }),
          (0, o.createElement)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M7.5 12C7.5 11.4477 7.94772 11 8.5 11H23.5C24.0523 11 24.5 11.4477 24.5 12V25.3333C24.5 25.8856 24.0523 26.3333 23.5 26.3333H8.5C7.94772 26.3333 7.5 25.8856 7.5 25.3333V12ZM9.5 13V24.3333H22.5V13H9.5Z",
            fill: "currentColor",
          })
        ),
        a = 2895 == r.j ? s : null;
    },
    2344: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => a });
      var o = r(1609),
        n = r(5573);
      const s = (0, o.createElement)(
          n.SVG,
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 32 32",
            fill: "none",
          },
          (0, o.createElement)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12.4444 14.2222C12.9354 14.2222 13.3333 14.6202 13.3333 15.1111C13.3333 15.8183 13.6143 16.4966 14.1144 16.9967C14.6145 17.4968 15.2927 17.7778 16 17.7778C16.7072 17.7778 17.3855 17.4968 17.8856 16.9967C18.3857 16.4966 18.6667 15.8183 18.6667 15.1111C18.6667 14.6202 19.0646 14.2222 19.5555 14.2222C20.0465 14.2222 20.4444 14.6202 20.4444 15.1111C20.4444 16.2898 19.9762 17.4203 19.1427 18.2538C18.3092 19.0873 17.1787 19.5555 16 19.5555C14.8212 19.5555 13.6908 19.0873 12.8573 18.2538C12.0238 17.4203 11.5555 16.2898 11.5555 15.1111C11.5555 14.6202 11.9535 14.2222 12.4444 14.2222Z",
            fill: "currentColor",
          }),
          (0, o.createElement)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M11.2408 6.68254C11.4307 6.46089 11.7081 6.33333 12 6.33333H20C20.2919 6.33333 20.5693 6.46089 20.7593 6.68254L24.7593 11.3492C25.0134 11.6457 25.0717 12.0631 24.9085 12.4179C24.7453 12.7727 24.3905 13 24 13H8.00001C7.60948 13 7.25469 12.7727 7.0915 12.4179C6.92832 12.0631 6.9866 11.6457 7.24076 11.3492L11.2408 6.68254ZM12.4599 8.33333L10.1742 11H21.8258L19.5401 8.33333H12.4599Z",
            fill: "currentColor",
          }),
          (0, o.createElement)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M7 12C7 11.4477 7.44772 11 8 11H24C24.5523 11 25 11.4477 25 12V25.3333C25 25.8856 24.5523 26.3333 24 26.3333H8C7.44772 26.3333 7 25.8856 7 25.3333V12ZM9 13V24.3333H23V13H9Z",
            fill: "currentColor",
          })
        ),
        a = 2895 == r.j ? s : null;
    },
    5e3: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => a });
      var o = r(1609),
        n = r(5573);
      const s = (0, o.createElement)(
          n.SVG,
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 32 32",
            fill: "none",
          },
          (0, o.createElement)("circle", {
            cx: "12.6667",
            cy: "24.6667",
            r: "2",
            fill: "currentColor",
          }),
          (0, o.createElement)("circle", {
            cx: "23.3333",
            cy: "24.6667",
            r: "2",
            fill: "currentColor",
          }),
          (0, o.createElement)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M9.28491 10.0356C9.47481 9.80216 9.75971 9.66667 10.0606 9.66667H25.3333C25.6232 9.66667 25.8989 9.79247 26.0888 10.0115C26.2787 10.2305 26.3643 10.5211 26.3233 10.8081L24.99 20.1414C24.9196 20.6341 24.4977 21 24 21H12C11.5261 21 11.1173 20.6674 11.0209 20.2034L9.08153 10.8701C9.02031 10.5755 9.09501 10.269 9.28491 10.0356ZM11.2898 11.6667L12.8136 19H23.1327L24.1803 11.6667H11.2898Z",
            fill: "currentColor",
          }),
          (0, o.createElement)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M5.66669 6.66667C5.66669 6.11438 6.1144 5.66667 6.66669 5.66667H9.33335C9.81664 5.66667 10.2308 6.01229 10.3172 6.48778L11.0445 10.4878C11.1433 11.0312 10.7829 11.5517 10.2395 11.6505C9.69614 11.7493 9.17555 11.3889 9.07676 10.8456L8.49878 7.66667H6.66669C6.1144 7.66667 5.66669 7.21895 5.66669 6.66667Z",
            fill: "currentColor",
          })
        ),
        a = 2895 == r.j ? s : null;
    },
    9602: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => a });
      var o = r(1609),
        n = r(5573);
      const s = (0, o.createElement)(
          n.SVG,
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
          (0, o.createElement)("path", { fill: "none", d: "M0 0h24v24H0V0z" }),
          (0, o.createElement)("path", {
            d: "M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z",
          })
        ),
        a = 251 == r.j ? s : null;
    },
    833: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => a });
      var o = r(1609),
        n = r(5573);
      const s = (0, o.createElement)(
          n.SVG,
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
          (0, o.createElement)(
            "g",
            { fill: "none", fillRule: "evenodd" },
            (0, o.createElement)("path", { d: "M0 0h24v24H0z" }),
            (0, o.createElement)("path", {
              fill: "currentColor",
              fillRule: "nonzero",
              d: "M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 20.01 4H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45ZM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2Zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2Z",
            })
          ),
          " "
        ),
        a = /^(2895|7949)$/.test(r.j) ? s : null;
    },
    3253: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => a });
      var o = r(1609),
        n = r(5573);
      const s = (0, o.createElement)(
          n.SVG,
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
          (0, o.createElement)("path", {
            d: "M22.7 22.7l-20-20L2 2l-.7-.7L0 2.5 4.4 7l2.2 4.7L5.2 14A2 2 0 007 17h7.5l1.3 1.4a2 2 0 102.8 2.8l2.9 2.8 1.2-1.3zM7.4 15a.2.2 0 01-.2-.3l.9-1.7h2.4l2 2h-5zm8.2-2a2 2 0 001.7-1l3.6-6.5.1-.5c0-.6-.4-1-1-1H6.5l9 9zM7 18a2 2 0 100 4 2 2 0 000-4z",
          }),
          (0, o.createElement)("path", { fill: "none", d: "M0 0h24v24H0z" })
        ),
        a = /^(251|2895|7949)$/.test(r.j) ? s : null;
    },
    2969: (e, t, r) => {
      "use strict";
      r.d(t, { B: () => g });
      var o = r(7723),
        n = r(2516),
        s = r(5703);
      const a = {
          currency_code: s.SITE_CURRENCY.code,
          currency_symbol: s.SITE_CURRENCY.symbol,
          currency_minor_unit: s.SITE_CURRENCY.minorUnit,
          currency_decimal_separator: s.SITE_CURRENCY.decimalSeparator,
          currency_thousand_separator: s.SITE_CURRENCY.thousandSeparator,
          currency_prefix: s.SITE_CURRENCY.prefix,
          currency_suffix: s.SITE_CURRENCY.suffix,
        },
        c = (e, t = 2) => {
          const r = s.SITE_CURRENCY.minorUnit;
          if (r === t || !e) return e;
          const o = Math.pow(10, r);
          return (Math.round(parseInt(e, 10) / Math.pow(10, t)) * o).toString();
        },
        i = (0, s.getSetting)("localPickupEnabled", !1),
        l = (0, s.getSetting)(
          "localPickupText",
          (0, o.__)("Local pickup", "woocommerce")
        ),
        d = (0, s.getSetting)("localPickupCost", ""),
        u = i ? (0, s.getSetting)("localPickupLocations", []) : [],
        m = u
          ? Object.values(u).map((e, t) => ({
              ...a,
              name: `${l} (${e.name})`,
              description: "",
              delivery_time: "",
              price: c(d, 0) || "0",
              taxes: "0",
              rate_id: `pickup_location:${t + 1}`,
              instance_id: t + 1,
              meta_data: [
                { key: "pickup_location", value: e.name },
                { key: "pickup_address", value: e.formatted_address },
                { key: "pickup_details", value: e.details },
              ],
              method_id: "pickup_location",
              selected: !1,
            }))
          : [],
        p = [
          {
            destination: {
              address_1: "",
              address_2: "",
              city: "",
              state: "",
              postcode: "",
              country: "",
            },
            package_id: 0,
            name: (0, o.__)("Shipping", "woocommerce"),
            items: [
              {
                key: "33e75ff09dd601bbe69f351039152189",
                name: (0, o._x)(
                  "Beanie with Logo",
                  "example product in Cart Block",
                  "woocommerce"
                ),
                quantity: 2,
              },
              {
                key: "6512bd43d9caa6e02c990b0a82652dca",
                name: (0, o._x)(
                  "Beanie",
                  "example product in Cart Block",
                  "woocommerce"
                ),
                quantity: 1,
              },
            ],
            shipping_rates: [
              {
                ...a,
                name: (0, o.__)("Flat rate shipping", "woocommerce"),
                description: "",
                delivery_time: "",
                price: c("500"),
                taxes: "0",
                rate_id: "flat_rate:0",
                instance_id: 0,
                meta_data: [],
                method_id: "flat_rate",
                selected: !1,
              },
              {
                ...a,
                name: (0, o.__)("Free shipping", "woocommerce"),
                description: "",
                delivery_time: "",
                price: "0",
                taxes: "0",
                rate_id: "free_shipping:1",
                instance_id: 0,
                meta_data: [],
                method_id: "flat_rate",
                selected: !0,
              },
              ...m,
            ],
          },
        ],
        h = (0, s.getSetting)("displayCartPricesIncludingTax", !1),
        g = {
          coupons: [],
          shipping_rates:
            (0, s.getSetting)("shippingMethodsExist", !1) ||
            (0, s.getSetting)("localPickupEnabled", !1)
              ? p
              : [],
          items: [
            {
              key: "1",
              id: 1,
              type: "simple",
              quantity: 2,
              catalog_visibility: "visible",
              name: (0, o.__)("Beanie", "woocommerce"),
              summary: (0, o.__)("Beanie", "woocommerce"),
              short_description: (0, o.__)(
                "Warm hat for winter",
                "woocommerce"
              ),
              description:
                "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
              sku: "woo-beanie",
              permalink: "https://example.org",
              low_stock_remaining: 2,
              backorders_allowed: !1,
              show_backorder_badge: !1,
              sold_individually: !1,
              quantity_limits: {
                minimum: 1,
                maximum: 99,
                multiple_of: 1,
                editable: !0,
              },
              images: [
                {
                  id: 10,
                  src: n.sW + "previews/beanie.jpg",
                  thumbnail: n.sW + "previews/beanie.jpg",
                  srcset: "",
                  sizes: "",
                  name: "",
                  alt: "",
                },
              ],
              variation: [
                {
                  attribute: (0, o.__)("Color", "woocommerce"),
                  value: (0, o.__)("Yellow", "woocommerce"),
                },
                {
                  attribute: (0, o.__)("Size", "woocommerce"),
                  value: (0, o.__)("Small", "woocommerce"),
                },
              ],
              prices: {
                ...a,
                price: c(h ? "12000" : "10000"),
                regular_price: c(h ? "120" : "100"),
                sale_price: c(h ? "12000" : "10000"),
                price_range: null,
                raw_prices: {
                  precision: 6,
                  price: h ? "12000000" : "10000000",
                  regular_price: h ? "12000000" : "10000000",
                  sale_price: h ? "12000000" : "10000000",
                },
              },
              totals: {
                ...a,
                line_subtotal: c("2000"),
                line_subtotal_tax: c("400"),
                line_total: c("2000"),
                line_total_tax: c("400"),
              },
              extensions: {},
              item_data: [],
            },
            {
              key: "2",
              id: 2,
              type: "simple",
              quantity: 1,
              catalog_visibility: "visible",
              name: (0, o.__)("Cap", "woocommerce"),
              summary: (0, o.__)("Cap", "woocommerce"),
              short_description: (0, o.__)(
                "Lightweight baseball cap",
                "woocommerce"
              ),
              description:
                "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
              sku: "woo-cap",
              low_stock_remaining: null,
              permalink: "https://example.org",
              backorders_allowed: !1,
              show_backorder_badge: !1,
              sold_individually: !1,
              quantity_limits: {
                minimum: 1,
                maximum: 99,
                multiple_of: 1,
                editable: !0,
              },
              images: [
                {
                  id: 11,
                  src: n.sW + "previews/cap.jpg",
                  thumbnail: n.sW + "previews/cap.jpg",
                  srcset: "",
                  sizes: "",
                  name: "",
                  alt: "",
                },
              ],
              variation: [
                {
                  attribute: (0, o.__)("Color", "woocommerce"),
                  value: (0, o.__)("Orange", "woocommerce"),
                },
              ],
              prices: {
                ...a,
                price: c(h ? "2400" : "2000"),
                regular_price: c(h ? "2400" : "2000"),
                sale_price: c(h ? "2400" : "2000"),
                price_range: null,
                raw_prices: {
                  precision: 6,
                  price: h ? "24000000" : "20000000",
                  regular_price: h ? "24000000" : "20000000",
                  sale_price: h ? "24000000" : "20000000",
                },
              },
              totals: {
                ...a,
                line_subtotal: c("2000"),
                line_subtotal_tax: c("400"),
                line_total: c("2000"),
                line_total_tax: c("400"),
              },
              extensions: {},
              item_data: [],
            },
          ],
          cross_sells: [
            {
              id: 1,
              name: (0, o.__)("Polo", "woocommerce"),
              slug: "polo",
              parent: 0,
              type: "simple",
              variation: "",
              permalink: "https://example.org",
              sku: "woo-polo",
              short_description: (0, o.__)("Polo", "woocommerce"),
              description: (0, o.__)("Polo", "woocommerce"),
              on_sale: !1,
              prices: {
                ...a,
                price: c(h ? "24000" : "20000"),
                regular_price: c(h ? "24000" : "20000"),
                sale_price: c(h ? "12000" : "10000"),
                price_range: null,
              },
              price_html: "",
              average_rating: "4.5",
              review_count: 2,
              images: [
                {
                  id: 17,
                  src: n.sW + "previews/polo.jpg",
                  thumbnail: n.sW + "previews/polo.jpg",
                  srcset: "",
                  sizes: "",
                  name: "",
                  alt: "",
                },
              ],
              categories: [],
              tags: [],
              attributes: [],
              variations: [],
              has_options: !1,
              is_purchasable: !0,
              is_in_stock: !0,
              is_on_backorder: !1,
              low_stock_remaining: null,
              sold_individually: !1,
              add_to_cart: {
                text: "",
                description: "",
                url: "",
                minimum: 1,
                maximum: 99,
                multiple_of: 1,
              },
            },
            {
              id: 2,
              name: (0, o.__)("Long Sleeve Tee", "woocommerce"),
              slug: "long-sleeve-tee",
              parent: 0,
              type: "simple",
              variation: "",
              permalink: "https://example.org",
              sku: "woo-long-sleeve-tee",
              short_description: (0, o.__)("Long Sleeve Tee", "woocommerce"),
              description: (0, o.__)("Long Sleeve Tee", "woocommerce"),
              on_sale: !1,
              prices: {
                ...a,
                price: c(h ? "30000" : "25000"),
                regular_price: c(h ? "30000" : "25000"),
                sale_price: c(h ? "30000" : "25000"),
                price_range: null,
              },
              price_html: "",
              average_rating: "4",
              review_count: 2,
              images: [
                {
                  id: 17,
                  src: n.sW + "previews/long-sleeve-tee.jpg",
                  thumbnail: n.sW + "previews/long-sleeve-tee.jpg",
                  srcset: "",
                  sizes: "",
                  name: "",
                  alt: "",
                },
              ],
              categories: [],
              tags: [],
              attributes: [],
              variations: [],
              has_options: !1,
              is_purchasable: !0,
              is_in_stock: !0,
              is_on_backorder: !1,
              low_stock_remaining: null,
              sold_individually: !1,
              add_to_cart: {
                text: "",
                description: "",
                url: "",
                minimum: 1,
                maximum: 99,
                multiple_of: 1,
              },
            },
            {
              id: 3,
              name: (0, o.__)("Hoodie with Zipper", "woocommerce"),
              slug: "hoodie-with-zipper",
              parent: 0,
              type: "simple",
              variation: "",
              permalink: "https://example.org",
              sku: "woo-hoodie-with-zipper",
              short_description: (0, o.__)("Hoodie with Zipper", "woocommerce"),
              description: (0, o.__)("Hoodie with Zipper", "woocommerce"),
              on_sale: !0,
              prices: {
                ...a,
                price: c(h ? "15000" : "12500"),
                regular_price: c(h ? "30000" : "25000"),
                sale_price: c(h ? "15000" : "12500"),
                price_range: null,
              },
              price_html: "",
              average_rating: "1",
              review_count: 2,
              images: [
                {
                  id: 17,
                  src: n.sW + "previews/hoodie-with-zipper.jpg",
                  thumbnail: n.sW + "previews/hoodie-with-zipper.jpg",
                  srcset: "",
                  sizes: "",
                  name: "",
                  alt: "",
                },
              ],
              categories: [],
              tags: [],
              attributes: [],
              variations: [],
              has_options: !1,
              is_purchasable: !0,
              is_in_stock: !0,
              is_on_backorder: !1,
              low_stock_remaining: null,
              sold_individually: !1,
              add_to_cart: {
                text: "",
                description: "",
                url: "",
                minimum: 1,
                maximum: 99,
                multiple_of: 1,
              },
            },
            {
              id: 4,
              name: (0, o.__)("Hoodie with Logo", "woocommerce"),
              slug: "hoodie-with-logo",
              parent: 0,
              type: "simple",
              variation: "",
              permalink: "https://example.org",
              sku: "woo-hoodie-with-logo",
              short_description: (0, o.__)("Polo", "woocommerce"),
              description: (0, o.__)("Polo", "woocommerce"),
              on_sale: !1,
              prices: {
                ...a,
                price: c(h ? "4500" : "4250"),
                regular_price: c(h ? "4500" : "4250"),
                sale_price: c(h ? "4500" : "4250"),
                price_range: null,
              },
              price_html: "",
              average_rating: "5",
              review_count: 2,
              images: [
                {
                  id: 17,
                  src: n.sW + "previews/hoodie-with-logo.jpg",
                  thumbnail: n.sW + "previews/hoodie-with-logo.jpg",
                  srcset: "",
                  sizes: "",
                  name: "",
                  alt: "",
                },
              ],
              categories: [],
              tags: [],
              attributes: [],
              variations: [],
              has_options: !1,
              is_purchasable: !0,
              is_in_stock: !0,
              is_on_backorder: !1,
              low_stock_remaining: null,
              sold_individually: !1,
              add_to_cart: {
                text: "",
                description: "",
                url: "",
                minimum: 1,
                maximum: 99,
                multiple_of: 1,
              },
            },
            {
              id: 5,
              name: (0, o.__)("Hoodie with Pocket", "woocommerce"),
              slug: "hoodie-with-pocket",
              parent: 0,
              type: "simple",
              variation: "",
              permalink: "https://example.org",
              sku: "woo-hoodie-with-pocket",
              short_description: (0, o.__)("Hoodie with Pocket", "woocommerce"),
              description: (0, o.__)("Hoodie with Pocket", "woocommerce"),
              on_sale: !0,
              prices: {
                ...a,
                price: c(h ? "3500" : "3250"),
                regular_price: c(h ? "4500" : "4250"),
                sale_price: c(h ? "3500" : "3250"),
                price_range: null,
              },
              price_html: "",
              average_rating: "3.75",
              review_count: 4,
              images: [
                {
                  id: 17,
                  src: n.sW + "previews/hoodie-with-pocket.jpg",
                  thumbnail: n.sW + "previews/hoodie-with-pocket.jpg",
                  srcset: "",
                  sizes: "",
                  name: "",
                  alt: "",
                },
              ],
              categories: [],
              tags: [],
              attributes: [],
              variations: [],
              has_options: !1,
              is_purchasable: !0,
              is_in_stock: !0,
              is_on_backorder: !1,
              low_stock_remaining: null,
              sold_individually: !1,
              add_to_cart: {
                text: "",
                description: "",
                url: "",
                minimum: 1,
                maximum: 99,
                multiple_of: 1,
              },
            },
            {
              id: 6,
              name: (0, o.__)("T-Shirt", "woocommerce"),
              slug: "t-shirt",
              parent: 0,
              type: "simple",
              variation: "",
              permalink: "https://example.org",
              sku: "woo-t-shirt",
              short_description: (0, o.__)("T-Shirt", "woocommerce"),
              description: (0, o.__)("T-Shirt", "woocommerce"),
              on_sale: !1,
              prices: {
                ...a,
                price: c(h ? "1800" : "1500"),
                regular_price: c(h ? "1800" : "1500"),
                sale_price: c(h ? "1800" : "1500"),
                price_range: null,
              },
              price_html: "",
              average_rating: "3",
              review_count: 2,
              images: [
                {
                  id: 17,
                  src: n.sW + "previews/tshirt.jpg",
                  thumbnail: n.sW + "previews/tshirt.jpg",
                  srcset: "",
                  sizes: "",
                  name: "",
                  alt: "",
                },
              ],
              categories: [],
              tags: [],
              attributes: [],
              variations: [],
              has_options: !1,
              is_purchasable: !0,
              is_in_stock: !0,
              is_on_backorder: !1,
              low_stock_remaining: null,
              sold_individually: !1,
              add_to_cart: {
                text: "",
                description: "",
                url: "",
                minimum: 1,
                maximum: 99,
                multiple_of: 1,
              },
            },
          ],
          fees: [
            {
              id: "fee",
              name: (0, o.__)("Fee", "woocommerce"),
              totals: { ...a, total: c("100"), total_tax: c("20") },
            },
          ],
          items_count: 3,
          items_weight: 0,
          needs_payment: !0,
          needs_shipping: n.h0,
          has_calculated_shipping: !0,
          shipping_address: {
            first_name: "",
            last_name: "",
            company: "",
            address_1: "",
            address_2: "",
            city: "",
            state: "",
            postcode: "",
            country: "",
            phone: "",
          },
          billing_address: {
            first_name: "",
            last_name: "",
            company: "",
            address_1: "",
            address_2: "",
            city: "",
            state: "",
            postcode: "",
            country: "",
            email: "",
            phone: "",
          },
          totals: {
            ...a,
            total_items: c("4000"),
            total_items_tax: c("800"),
            total_fees: c("100"),
            total_fees_tax: c("20"),
            total_discount: "0",
            total_discount_tax: "0",
            total_shipping: "0",
            total_shipping_tax: "0",
            total_tax: c("820"),
            total_price: c("4920"),
            tax_lines: [
              {
                name: (0, o.__)("Sales tax", "woocommerce"),
                rate: "20%",
                price: c("820"),
              },
            ],
          },
          errors: [],
          payment_methods: ["cod", "bacs", "cheque"],
          payment_requirements: ["products"],
          extensions: {},
        };
    },
    2897: (e, t, r) => {
      "use strict";
      r.d(t, {
        AG: () => P,
        F7: () => w,
        G3: () => R,
        Hw: () => j,
        Jn: () => v,
        SL: () => I,
        Vo: () => y,
        XK: () => _,
        aW: () => k,
        fO: () => $,
        gu: () => E,
        h0: () => C,
        iI: () => M,
        mH: () => S,
        pk: () => b,
        pt: () => O,
        r7: () => h,
        sW: () => g,
        tn: () => f,
        uz: () => x,
      });
      var o,
        n,
        s,
        a,
        c,
        i,
        l,
        d,
        u,
        m,
        p = r(5703);
      const h = (0, p.getSetting)("wcBlocksConfig", {
          pluginUrl: "",
          productCount: 0,
          defaultAvatar: "",
          restApiRoutes: {},
          wordCountType: "words",
        }),
        g = h.pluginUrl + "assets/images/",
        _ = h.pluginUrl + "assets/client/blocks/",
        v =
          null === (o = p.STORE_PAGES.shop) || void 0 === o
            ? void 0
            : o.permalink,
        f =
          (null === (n = p.STORE_PAGES.checkout) || void 0 === n || n.id,
          null === (s = p.STORE_PAGES.checkout) || void 0 === s
            ? void 0
            : s.permalink),
        b =
          null === (a = p.STORE_PAGES.privacy) || void 0 === a
            ? void 0
            : a.permalink,
        E =
          (null === (c = p.STORE_PAGES.privacy) || void 0 === c || c.title,
          null === (i = p.STORE_PAGES.terms) || void 0 === i
            ? void 0
            : i.permalink),
        y =
          (null === (l = p.STORE_PAGES.terms) || void 0 === l || l.title,
          null === (d = p.STORE_PAGES.cart) || void 0 === d || d.id,
          null === (u = p.STORE_PAGES.cart) || void 0 === u
            ? void 0
            : u.permalink),
        k =
          null !== (m = p.STORE_PAGES.myaccount) && void 0 !== m && m.permalink
            ? p.STORE_PAGES.myaccount.permalink
            : (0, p.getSetting)("wpLoginUrl", "../../wp-login.html"),
        w = (0, p.getSetting)("localPickupEnabled", !1),
        S = (0, p.getSetting)("shippingMethodsExist", !1),
        C = (0, p.getSetting)("shippingEnabled", !0),
        A = (0, p.getSetting)("countries", {}),
        N = (0, p.getSetting)("countryData", {}),
        P = Object.fromEntries(
          Object.keys(N)
            .filter((e) => !0 === N[e].allowBilling)
            .map((e) => [e, A[e] || ""])
        ),
        x = Object.fromEntries(
          Object.keys(N)
            .filter((e) => !0 === N[e].allowBilling)
            .map((e) => [e, N[e].states || {}])
        ),
        R = Object.fromEntries(
          Object.keys(N)
            .filter((e) => !0 === N[e].allowShipping)
            .map((e) => [e, A[e] || ""])
        ),
        I = Object.fromEntries(
          Object.keys(N)
            .filter((e) => !0 === N[e].allowShipping)
            .map((e) => [e, N[e].states || {}])
        ),
        M = Object.fromEntries(
          Object.keys(N).map((e) => [e, N[e].locale || {}])
        ),
        T = {
          address: [
            "first_name",
            "last_name",
            "company",
            "address_1",
            "address_2",
            "city",
            "postcode",
            "country",
            "state",
            "phone",
          ],
          contact: ["email"],
          order: [],
        },
        j = (0, p.getSetting)("addressFieldsLocations", T).address,
        $ = (0, p.getSetting)("addressFieldsLocations", T).contact,
        O = (0, p.getSetting)("addressFieldsLocations", T).order;
      (0, p.getSetting)("additionalOrderFields", {}),
        (0, p.getSetting)("additionalContactFields", {}),
        (0, p.getSetting)("additionalAddressFields", {});
    },
    2516: (e, t, r) => {
      "use strict";
      if (
        (r.d(t, {
          AG: () => o.AG,
          F7: () => o.F7,
          G3: () => o.G3,
          Hw: () => o.Hw,
          Jn: () => o.Jn,
          SL: () => o.SL,
          Vo: () => o.Vo,
          XK: () => o.XK,
          aW: () => o.aW,
          fO: () => o.fO,
          gu: () => o.gu,
          h0: () => o.h0,
          iI: () => o.iI,
          mH: () => o.mH,
          pk: () => o.pk,
          pt: () => o.pt,
          r7: () => o.r7,
          sW: () => o.sW,
          tn: () => o.tn,
          uz: () => o.uz,
        }),
        /^(251|2895|7949)$/.test(r.j))
      )
        var o = r(2897);
    },
    3398: (e, t, r) => {
      "use strict";
      r.d(t, { p: () => c });
      var o = r(7674),
        n = r.n(o);
      const s = 989 != r.j ? ["a", "b", "em", "i", "strong", "p", "br"] : null,
        a = 989 != r.j ? ["target", "href", "rel", "name", "download"] : null,
        c = (e, t) => {
          const r = (null == t ? void 0 : t.tags) || s,
            o = (null == t ? void 0 : t.attr) || a;
          return n().sanitize(e, { ALLOWED_TAGS: r, ALLOWED_ATTR: o });
        };
    },
    6769: (e, t, r) => {
      "use strict";
      r.d(t, { Bk: () => c, G$: () => a });
      var o = r(6004);
      const n = (e) => e.replace(/<\/?[a-z][^>]*?>/gi, ""),
        s = (e, t) => e.replace(/[\s|\.\,]+$/i, "") + t,
        a = (e, t, r = "&hellip;", a = !0) => {
          const c = n(e),
            i = c.split(" ").splice(0, t).join(" ");
          return i === c
            ? a
              ? (0, o.autop)(c)
              : c
            : a
            ? (0, o.autop)(s(i, r))
            : s(i, r);
        },
        c = (e, t, r = !0, a = "&hellip;", c = !0) => {
          const i = n(e),
            l = i.slice(0, t);
          if (l === i) return c ? (0, o.autop)(i) : i;
          if (r) return (0, o.autop)(s(l, a));
          const d = l.match(/([\s]+)/g),
            u = d ? d.length : 0,
            m = i.slice(0, t + u);
          return c ? (0, o.autop)(s(m, a)) : s(m, a);
        };
    },
    1810: (e, t, r) => {
      "use strict";
      r.r(t),
        r.d(t, {
          Button: () => M.A,
          CheckboxControl: () => $.CheckboxControl,
          ExperimentalDiscountsMeta: () => S,
          ExperimentalOrderLocalPickupPackages: () => R,
          ExperimentalOrderMeta: () => E,
          ExperimentalOrderShippingPackages: () => N,
          Label: () => T,
          Panel: () => I.A,
          SlotFillProvider: () => l.Kq,
          StoreNotice: () => F.A,
          StoreNoticesContainer: () => j.A,
          Subtotal: () => o.Ve,
          TextInput: () => L.A,
          TotalsFees: () => o.ht,
          TotalsItem: () => o.Zi,
          TotalsTaxes: () => o.Zv,
          TotalsWrapper: () => n.A,
          ValidatedTextInput: () => O.A,
          ValidatedTextInputHandle: () => O.ValidatedTextInputHandle,
          ValidationInputError: () => D.A,
          __experimentalApplyCheckoutFilter: () => re,
          __experimentalRegisterCheckoutFilters: () => Q,
          applyCheckoutFilter: () => te,
          createSlotFill: () => _,
          extensionCartUpdate: () => V.jx,
          getFieldLabel: () => V.lu,
          getRegisteredBlocks: () => ae,
          getValidityMessageForInput: () => V.N2,
          hasInnerBlocks: () => se,
          hasValidFills: () => g,
          innerBlockAreas: () => oe,
          isPostcode: () => V.ow,
          mustContain: () => V.sH,
          productPriceValidation: () => V.mT,
          registerCheckoutBlock: () => ie,
          registerCheckoutFilters: () => K,
          useSlot: () => d.A,
          useSlotFills: () => u.A,
        });
      var o = r(3410),
        n = r(6828),
        s = r(1609),
        a = r(851),
        c = r(5703),
        i = r(6087),
        l = r(5869),
        d = r(6568),
        u = r(4771),
        m = r(2294);
      class p extends i.Component {
        constructor(...e) {
          super(...e),
            (0, m.A)(this, "state", { errorMessage: "", hasError: !1 });
        }
        static getDerivedStateFromError(e) {
          return void 0 !== e.statusText && void 0 !== e.status
            ? {
                errorMessage: (0, s.createElement)(
                  s.Fragment,
                  null,
                  (0, s.createElement)("strong", null, e.status),
                  ": " + e.statusText
                ),
                hasError: !0,
              }
            : { errorMessage: e.message, hasError: !0 };
        }
        render() {
          const { renderError: e } = this.props,
            { errorMessage: t, hasError: r } = this.state;
          return r
            ? "function" == typeof e
              ? e(t)
              : (0, s.createElement)("p", null, t)
            : this.props.children;
        }
      }
      const h = p,
        g = (e) => Array.isArray(e) && e.filter(Boolean).length > 0,
        _ = (e, t = null) => {
          const { Fill: r, Slot: o } = (0, l.QJ)(e);
          return {
            Fill: ({ children: e }) =>
              (0, s.createElement)(r, null, (r) =>
                i.Children.map(e, (e) =>
                  (0, s.createElement)(
                    h,
                    { renderError: c.CURRENT_USER_IS_ADMIN ? t : () => null },
                    (0, i.cloneElement)(e, r)
                  )
                )
              ),
            Slot: (e) =>
              (0, s.createElement)(o, { ...e, bubblesVirtually: !0 }),
          };
        },
        v = "__experimentalOrderMeta",
        { Fill: f, Slot: b } = _(v);
      f.Slot = ({ className: e, extensions: t, cart: r, context: o }) => {
        const c = (0, u.A)(v);
        return (
          g(c) &&
          (0, s.createElement)(
            n.A,
            { slotWrapper: !0 },
            (0, s.createElement)(b, {
              className: (0, a.A)(e, "wc-block-components-order-meta"),
              fillProps: { extensions: t, cart: r, context: o },
            })
          )
        );
      };
      const E = f,
        y = "__experimentalDiscountsMeta",
        { Fill: k, Slot: w } = _(y);
      k.Slot = ({ className: e, extensions: t, cart: r, context: o }) => {
        const c = (0, u.A)(y);
        return (
          g(c) &&
          (0, s.createElement)(
            n.A,
            { slotWrapper: !0 },
            (0, s.createElement)(w, {
              className: (0, a.A)(e, "wc-block-components-discounts-meta"),
              fillProps: { extensions: t, cart: r, context: o },
            })
          )
        );
      };
      const S = k,
        { Fill: C, Slot: A } = _("__experimentalOrderShippingPackages");
      C.Slot = ({
        className: e,
        noResultsMessage: t,
        renderOption: r,
        extensions: o,
        cart: n,
        components: c,
        context: i,
        collapsible: l,
        showItems: d,
      }) =>
        (0, s.createElement)(A, {
          className: (0, a.A)("wc-block-components-shipping-rates-control", e),
          fillProps: {
            collapse: l,
            collapsible: l,
            showItems: d,
            noResultsMessage: t,
            renderOption: r,
            extensions: o,
            cart: n,
            components: c,
            context: i,
          },
        });
      const N = C,
        { Fill: P, Slot: x } = _("__experimentalOrderLocalPickupPackages");
      P.Slot = ({
        extensions: e,
        cart: t,
        components: r,
        renderPickupLocation: o,
      }) =>
        (0, s.createElement)(x, {
          className: (0, a.A)("wc-block-components-local-pickup-rates-control"),
          fillProps: {
            extensions: e,
            cart: t,
            components: r,
            renderPickupLocation: o,
          },
        });
      const R = P;
      var I = r(3439),
        M = r(4997);
      const T = r(7407).A;
      var j = r(4104),
        $ = r(4656),
        O = r(6696),
        L = r(5175),
        D = r(5632),
        F = r(4751),
        V = r(2611),
        B = r(7723),
        H = r(4040),
        U = r.n(H),
        W = r(923),
        q = r.n(W),
        z = r(3993);
      const G = () => !0;
      let Y = {},
        Z = {};
      const K = (e, t) => {
          Object.keys(t).includes("couponName") &&
            U()("couponName", {
              alternative: "coupons",
              plugin: "WooCommerce Blocks",
              link: "https://github.com/woocommerce/woocommerce-gutenberg-products-block/blob/bb921d21f42e21f38df2b1c87b48e07aa4cb0538/docs/extensibility/available-filters.md#coupons",
            }),
            (Z = {}),
            (Y = { ...Y, [e]: t });
        },
        Q = (e, t) => {
          U()("__experimentalRegisterCheckoutFilters", {
            alternative: "registerCheckoutFilters",
            plugin: "WooCommerce Blocks",
            link: "https://github.com/woocommerce/woocommerce-blocks/pull/8346",
            since: "9.6.0",
            hint: "__experimentalRegisterCheckoutFilters has graduated to stable and this experimental function will be removed.",
          }),
            K(e, t);
        },
        J = {},
        X = (e, t, r, o) => {
          J[e] = { arg: t, extensions: r, defaultValue: o };
        },
        ee = (e, t) =>
          !(!(0, z.isNull)(e) || !(0, z.isNull)(t)) ||
          ((0, z.isObject)(e) &&
            (0, z.isObject)(t) &&
            Object.keys(e).length === Object.keys(t).length &&
            Object.keys(e).every(
              (r) => (0, z.objectHasProp)(t, r) && q()(e[r], t[r])
            )),
        te = ({
          filterName: e,
          defaultValue: t,
          extensions: r = null,
          arg: o = null,
          validation: n = G,
        }) => {
          if (
            !((e, t, r, o) => {
              const n = J[e];
              if (!n) return X(e, t, r, o), !0;
              const {
                arg: s = {},
                extensions: a = {},
                defaultValue: c = null,
              } = n;
              return ee(t, s)
                ? !((o === c && ee(r, a)) || (X(e, t, r, o), 0))
                : (X(e, t, r, o), !0);
            })(e, o, r, t) &&
            void 0 !== Z[e]
          )
            return Z[e];
          const s = ((e) =>
            Object.keys(Y)
              .map((t) => Y[t][e])
              .filter(Boolean))(e);
          let a = t;
          return (
            s.forEach((e) => {
              try {
                const t = e(a, r || {}, o);
                if (typeof t != typeof a)
                  throw new Error(
                    (0, B.sprintf)(
                      /* translators: %1$s is the type of the variable passed to the filter function, %2$s is the type of the value returned by the filter function. */ /* translators: %1$s is the type of the variable passed to the filter function, %2$s is the type of the value returned by the filter function. */
                      (0, B.__)(
                        "The type returned by checkout filters must be the same as the type they receive. The function received %1$s but returned %2$s.",
                        "woocommerce"
                      ),
                      typeof a,
                      typeof t
                    )
                  );
                a = n(t) ? t : a;
              } catch (e) {
                if (c.CURRENT_USER_IS_ADMIN) throw e;
                console.error(e);
              }
            }),
            (Z[e] = a),
            a
          );
        },
        re = ({
          filterName: e,
          defaultValue: t,
          extensions: r = null,
          arg: o = null,
          validation: n = G,
        }) => (
          U()("__experimentalApplyCheckoutFilter", {
            alternative: "applyCheckoutFilter",
            plugin: "WooCommerce Blocks",
            link: "https://github.com/woocommerce/woocommerce-blocks/pull/8346",
            since: "9.6.0",
            hint: "__experimentalApplyCheckoutFilter has graduated to stable and this experimental function will be removed.",
          }),
          te({
            filterName: e,
            defaultValue: t,
            extensions: r,
            arg: o,
            validation: n,
          })
        );
      let oe = (function (e) {
        return (
          (e.CHECKOUT = "woocommerce/checkout"),
          (e.CHECKOUT_FIELDS = "woocommerce/checkout-fields-block"),
          (e.CHECKOUT_TOTALS = "woocommerce/checkout-totals-block"),
          (e.CONTACT_INFORMATION =
            "woocommerce/checkout-contact-information-block"),
          (e.SHIPPING_ADDRESS = "woocommerce/checkout-shipping-address-block"),
          (e.BILLING_ADDRESS = "woocommerce/checkout-billing-address-block"),
          (e.SHIPPING_METHOD = "woocommerce/checkout-shipping-method-block"),
          (e.SHIPPING_METHODS = "woocommerce/checkout-shipping-methods-block"),
          (e.PICKUP_LOCATION = "woocommerce/checkout-pickup-options-block"),
          (e.PAYMENT_METHODS = "woocommerce/checkout-payment-methods-block"),
          (e.CART = "woocommerce/cart"),
          (e.EMPTY_CART = "woocommerce/empty-cart-block"),
          (e.FILLED_CART = "woocommerce/filled-cart-block"),
          (e.CART_ITEMS = "woocommerce/cart-items-block"),
          (e.CART_CROSS_SELLS = "woocommerce/cart-cross-sells-block"),
          (e.CART_TOTALS = "woocommerce/cart-totals-block"),
          (e.MINI_CART = "woocommerce/mini-cart-contents"),
          (e.EMPTY_MINI_CART = "woocommerce/empty-mini-cart-contents-block"),
          (e.FILLED_MINI_CART = "woocommerce/filled-mini-cart-contents-block"),
          (e.MINI_CART_TITLE = "woocommerce/mini-cart-title-block"),
          (e.MINI_CART_ITEMS = "woocommerce/mini-cart-items-block"),
          (e.MINI_CART_FOOTER = "woocommerce/mini-cart-footer-block"),
          (e.CART_ORDER_SUMMARY = "woocommerce/cart-order-summary-block"),
          (e.CART_ORDER_SUMMARY_TOTALS =
            "woocommerce/cart-order-summary-totals-block"),
          (e.CHECKOUT_ORDER_SUMMARY =
            "woocommerce/checkout-order-summary-block"),
          (e.CHECKOUT_ORDER_SUMMARY_TOTALS =
            "woocommerce/checkout-order-summary-totals-block"),
          e
        );
      })({});
      const ne = {},
        se = (e) => Object.values(oe).includes(e),
        ae = (e) =>
          se(e)
            ? Object.values(ne).filter(({ metadata: t }) =>
                ((null == t ? void 0 : t.parent) || []).includes(e)
              )
            : [];
      var ce = r(4083);
      const ie = (e) => {
        var t;
        ((e, t, r) => {
          if (!(0, z.isObject)(e)) return;
          const o = typeof e[t];
          if (o !== r)
            throw new Error(
              `Incorrect value for the ${t} argument when registering a block component. It was a ${o}, but must be a ${r}.`
            );
        })(e, "metadata", "object"),
          ((e) => {
            if (
              (((e, t, r) => {
                const o = typeof t;
                if (o !== r)
                  throw new Error(
                    `Incorrect value for the blockName argument when registering a checkout block. It was a ${o}, but must be a ${r}.`
                  );
              })(0, e, "string"),
              !e)
            )
              throw new Error(
                "Value for the blockName argument must not be empty."
              );
          })(e.metadata.name),
          ((e) => {
            if ("string" != typeof e && !Array.isArray(e))
              throw new Error(
                `Incorrect value for the parent argument when registering a checkout block. It was a ${typeof e}, but must be a string or array of strings.`
              );
            if ("string" == typeof e && !se(e))
              throw new Error(
                "When registering a checkout block, the parent must be a valid inner block area."
              );
            if (Array.isArray(e) && !e.some((e) => se(e)))
              throw new Error(
                "When registering a checkout block, the parent must be a valid inner block area."
              );
          })(e.metadata.parent),
          ((e, t) => {
            const r = e[t];
            if (r) {
              if ("function" == typeof r) return;
              if (
                (0, z.isObject)(r) &&
                r.$$typeof &&
                r.$$typeof === Symbol.for("react.lazy")
              )
                return;
            }
            throw new Error(
              `Incorrect value for the ${t} argument when registering a block component. Component must be a valid React Element or Lazy callback.`
            );
          })(e, "component"),
          (0, ce.registerBlockComponent)({
            blockName: e.metadata.name,
            component: e.component,
          });
        const r =
          "boolean" == typeof e.force
            ? e.force
            : Boolean(
                null === (t = e.metadata) ||
                  void 0 === t ||
                  null === (t = t.attributes) ||
                  void 0 === t ||
                  null === (t = t.lock) ||
                  void 0 === t ||
                  null === (t = t.default) ||
                  void 0 === t
                  ? void 0
                  : t.remove
              );
        ne[e.metadata.name] = {
          blockName: e.metadata.name,
          metadata: e.metadata,
          component: e.component,
          force: r,
        };
      };
    },
    2611: (e, t, r) => {
      "use strict";
      r.d(t, {
        jx: () => g,
        lu: () => s,
        N2: () => a,
        ow: () => d,
        sH: () => n,
        mT: () => u,
      });
      var o = r(7723);
      const n =
          8157 == r.j
            ? (e, t) => {
                if (!e.includes(t))
                  throw Error(
                    (0, o.sprintf)(
                      /* translators: %1$s value passed to filter, %2$s : value that must be included. */ /* translators: %1$s value passed to filter, %2$s : value that must be included. */
                      (0, o.__)(
                        'Returned value must include %1$s, you passed "%2$s"',
                        "woocommerce"
                      ),
                      t,
                      e
                    )
                  );
                return !0;
              }
            : null,
        s = (e) => {
          var t, r;
          const n = (0, o.getLocaleData)();
          return ["de", "de_AT", "de_CH"].includes(
            null !==
              (t =
                null == n || null === (r = n[""]) || void 0 === r
                  ? void 0
                  : r.lang) && void 0 !== t
              ? t
              : "en"
          )
            ? e
            : (null == e ? void 0 : e.toLocaleLowerCase()) ||
                (0, o.__)("field", "woocommerce");
        },
        a = (e, t, r) => {
          if (t.validity.valid || t.validity.customError)
            return t.validationMessage;
          const n =
            r ||
            ((e, t) => (r) => {
              const n = s(e);
              let a = (0, o.sprintf)(
                /* translators: %s field label */ /* translators: %s field label */
                (0, o.__)("Please enter a valid %s", "woocommerce"),
                n
              );
              if (
                ("checkbox" === t.type &&
                  (a = (0, o.__)(
                    "Please check this box if you want to proceed.",
                    "woocommerce"
                  )),
                r.valueMissing || r.badInput || r.typeMismatch)
              )
                return a;
            })(e, t);
          return n(t.validity) || t.validationMessage;
        };
      var c = r(6698);
      const i = new Map([
          ["BA", /^([7-8]{1})([0-9]{4})$/],
          [
            "GB",
            /^([A-Z]){1}([0-9]{1,2}|[A-Z][0-9][A-Z]|[A-Z][0-9]{2}|[A-Z][0-9]|[0-9][A-Z]){1}([ ])?([0-9][A-Z]{2}){1}|BFPO(?:\s)?([0-9]{1,4})$|BFPO(c\/o[0-9]{1,3})$/i,
          ],
          ["IN", /^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/],
          ["JP", /^([0-9]{3})([-]?)([0-9]{4})$/],
          ["KH", /^[0-9]{6}$/],
          ["LI", /^(94[8-9][0-9])$/],
          ["MN", /^[0-9]{5}(-[0-9]{4})?$/],
          ["NI", /^[1-9]{1}[0-9]{4}$/],
          ["NL", /^([1-9][0-9]{3})(\s?)(?!SA|SD|SS)[A-Z]{2}$/i],
          ["SI", /^([1-9][0-9]{3})$/],
        ]),
        l = new Map([...c.O, ...i]),
        d =
          8157 == r.j
            ? ({ postcode: e, country: t }) => {
                var r;
                const o =
                  null === (r = l.get(t)) || void 0 === r ? void 0 : r.test(e);
                return void 0 === o || o;
              }
            : null,
        u = (e) => n(e, "<price/>");
      var m = r(7143),
        p = r(7594);
      if (8157 == r.j) var h = r(630);
      const g = (e) => {
        const { applyExtensionCartUpdate: t } = (0, m.dispatch)(h.U);
        return t(e).catch(
          (e) => (
            "woocommerce_rest_cart_extensions_error" ===
              (null == e ? void 0 : e.code) && (0, p.processErrorResponse)(e),
            Promise.reject(e)
          )
        );
      };
    },
    4997: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => n });
      var o = r(3013);
      const n = /^(6981|8157)$/.test(r.j) ? o.A : null;
    },
    1228: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => i });
      var o = r(1609),
        n = r(6175);
      if (/^(251|6981|8157)$/.test(r.j)) var s = r(851);
      var a = r(5703);
      r(9297);
      const c = (e) => {
          const {
              prefix: t,
              suffix: r,
              thousandSeparator: o,
              decimalSeparator: n,
            } = e,
            s = o === n;
          return (
            s &&
              console.warn(
                "Thousand separator and decimal separator are the same. This may cause formatting issues."
              ),
            {
              thousandSeparator: s ? "" : o,
              decimalSeparator: n,
              fixedDecimalScale: !0,
              prefix: t,
              suffix: r,
              isNumericString: !0,
            }
          );
        },
        i = /^(251|6981|8157)$/.test(r.j)
          ? ({
              className: e,
              value: t,
              currency: r = a.SITE_CURRENCY,
              onValueChange: i,
              displayType: l = "text",
              ...d
            }) => {
              var u;
              const m = { ...a.SITE_CURRENCY, ...r },
                p = "string" == typeof t ? parseInt(t, 10) : t;
              if (!Number.isFinite(p)) return null;
              const h = p / 10 ** m.minorUnit;
              if (!Number.isFinite(h)) return null;
              const g = (0, s.A)(
                  "wc-block-formatted-money-amount",
                  "wc-block-components-formatted-money-amount",
                  e
                ),
                _ =
                  null !== (u = d.decimalScale) && void 0 !== u
                    ? u
                    : null == m
                    ? void 0
                    : m.minorUnit,
                v = {
                  ...d,
                  ...c(m),
                  decimalScale: _,
                  value: void 0,
                  currency: void 0,
                  onValueChange: void 0,
                },
                f = i
                  ? (e) => {
                      const t = +e.value * 10 ** m.minorUnit;
                      i(t);
                    }
                  : () => {};
              return (0, o.createElement)(n.A, {
                className: g,
                displayType: l,
                ...v,
                value: h,
                onValueChange: f,
              });
            }
          : null;
    },
    4209: (e, t, r) => {
      "use strict";
      r.r(t),
        r.d(t, {
          Button: () => o.A,
          CheckboxControl: () => l,
          CheckboxList: () => b,
          Chip: () => E,
          FormStep: () => A,
          FormattedMonetaryAmount: () => N.A,
          Label: () => P.A,
          Panel: () => x.A,
          RadioControl: () => T,
          RadioControlAccordion: () => j,
          RadioControlOption: () => I,
          RadioControlOptionLayout: () => R,
          RemovableChip: () => w,
          SortSelect: () => $,
          Spinner: () => O.A,
          StoreNotice: () => L.A,
          StoreNoticesContainer: () => D.A,
          Subtotal: () => H.Ve,
          TextInput: () => B.A,
          Textarea: () => F,
          Title: () => S,
          TotalsFees: () => H.ht,
          TotalsItem: () => H.Zi,
          TotalsTaxes: () => H.Zv,
          TotalsWrapper: () => U.A,
          ValidatedCheckboxControl: () => _,
          ValidatedTextInput: () => V.A,
          ValidationInputError: () => p.A,
        });
      var o = r(4997),
        n = r(1609),
        s = r(851),
        a = r(9491),
        c = r(6087);
      r(2031);
      const i = (0, c.forwardRef)(
          (
            {
              className: e,
              label: t,
              id: r,
              onChange: o,
              children: c,
              hasError: l = !1,
              checked: d = !1,
              disabled: u = !1,
              errorId: m,
              errorMessage: p,
              ...h
            },
            g
          ) => {
            const _ = (0, a.useInstanceId)(i),
              v = r || `checkbox-control-${_}`;
            return (0, n.createElement)(
              "div",
              {
                className: (0, s.A)(
                  "wc-block-components-checkbox",
                  { "has-error": l },
                  e
                ),
              },
              (0, n.createElement)(
                "label",
                { htmlFor: v },
                (0, n.createElement)("input", {
                  ref: g,
                  id: v,
                  className: "wc-block-components-checkbox__input",
                  type: "checkbox",
                  onChange: (e) => o(e.target.checked),
                  "aria-invalid": !0 === l,
                  checked: d,
                  disabled: !!u,
                  ...h,
                }),
                (0, n.createElement)(
                  "svg",
                  {
                    className: "wc-block-components-checkbox__mark",
                    "aria-hidden": "true",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 20",
                  },
                  (0, n.createElement)("path", {
                    d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z",
                  })
                ),
                t &&
                  (0, n.createElement)(
                    "span",
                    { className: "wc-block-components-checkbox__label" },
                    t
                  ),
                c
              )
            );
          }
        ),
        l = i;
      var d = r(3993),
        u = r(7143),
        m = r(7594),
        p = r(5632),
        h = r(2611);
      const g = (0, c.forwardRef)(
          (
            {
              className: e,
              id: t,
              "aria-describedby": r,
              errorId: o,
              onChange: a,
              showError: i = !0,
              errorMessage: g = "",
              checked: _ = !1,
              customValidation: v = () => !0,
              customValidityMessage: f,
              label: b,
              validateOnMount: E = !0,
              instanceId: y = "",
              ...k
            },
            w
          ) => {
            const S = (0, c.useRef)(null),
              C = (0, c.useId)(),
              A = t || `textinput-${y || C}`,
              N = o || A,
              { setValidationErrors: P, clearValidationError: x } = (0,
              u.useDispatch)(m.validationStore),
              R = (0, c.useRef)(v);
            (0, c.useEffect)(() => {
              R.current = v;
            }, [v]);
            const { validationError: I, validationErrorId: M } = (0,
              u.useSelect)(
                (e) => {
                  const t = e(m.validationStore);
                  return {
                    validationError: t.getValidationError(N),
                    validationErrorId: t.getValidationErrorId(N),
                  };
                },
                [N]
              ),
              T = (0, c.useCallback)(
                (e = !0) => {
                  const t = S.current || null;
                  null !== t &&
                    (t.checkValidity() && R.current(t)
                      ? x(N)
                      : P({ [N]: { message: (0, h.N2)(b, t, f), hidden: e } }));
                },
                [x, N, P, b, f]
              );
            (0, c.useImperativeHandle)(
              w,
              function () {
                return {
                  focus() {
                    var e;
                    null === (e = S.current) || void 0 === e || e.focus();
                  },
                  revalidate() {
                    T(!1);
                  },
                };
              },
              [T]
            ),
              (0, c.useEffect)(() => {
                E && T(!0);
              }, [E, T]),
              (0, c.useEffect)(
                () => () => {
                  x(N);
                },
                [x, N]
              ),
              "" !== g && (0, d.isObject)(I) && (I.message = g);
            const j =
              (null == I ? void 0 : I.message) && !(null != I && I.hidden);
            return (0, n.createElement)(
              l,
              {
                className: (0, s.A)(
                  "wc-block-components-validated-checkbox-control",
                  e,
                  { "has-error": j }
                ),
                "aria-invalid": !0 === j,
                id: A,
                "aria-errormessage": i && j && M ? M : void 0,
                ref: S,
                onChange: (0, c.useCallback)(
                  (e) => {
                    T(!1), a(e);
                  },
                  [a, T]
                ),
                "aria-describedby": r,
                checked: _,
                title: "",
                label: b,
                ...k,
              },
              (0, n.createElement)(p.a, { propertyName: N })
            );
          }
        ),
        _ = 6981 == r.j ? g : null;
      var v = r(7723);
      function f({
        option: e,
        shouldTruncateOptions: t,
        showExpanded: r,
        index: o,
        limit: s,
        checked: c,
        disabled: l,
        renderedShowMore: d,
        onChange: u,
      }) {
        const m = (0, a.useInstanceId)(f, "wc-block-checkbox-list-option");
        return (0, n.createElement)(
          n.Fragment,
          null,
          (0, n.createElement)(
            "li",
            { ...(t && !r && o >= s && { hidden: !0 }) },
            (0, n.createElement)(i, {
              id: m,
              className: "wc-block-checkbox-list__checkbox",
              label: e.label,
              checked: c,
              value: e.value,
              onChange: () => {
                u(e.value);
              },
              disabled: l,
            })
          ),
          t && o === s - 1 && d
        );
      }
      r(294);
      const b =
        6981 == r.j
          ? ({
              className: e,
              onChange: t,
              options: r = [],
              checked: o = [],
              isLoading: a = !1,
              isDisabled: i = !1,
              limit: l = 10,
            }) => {
              const [d, u] = (0, c.useState)(!1),
                m = (0, c.useMemo)(
                  () =>
                    [...Array(5)].map((e, t) =>
                      (0, n.createElement)(
                        "li",
                        {
                          key: t,
                          style: {
                            width: Math.floor(75 * Math.random()) + 25 + "%",
                          },
                        },
                        " "
                      )
                    ),
                  []
                ),
                p = (0, c.useMemo)(() => {
                  const e = r.length - l;
                  return (
                    !d &&
                    (0, n.createElement)(
                      "li",
                      { key: "show-more", className: "show-more" },
                      (0, n.createElement)(
                        "button",
                        {
                          onClick: () => {
                            u(!0);
                          },
                          "aria-expanded": !1,
                          "aria-label": (0, v.sprintf)(
                            /* translators: %s is referring the remaining count of options */ /* translators: %s is referring the remaining count of options */
                            (0, v._n)(
                              "Show %s more option",
                              "Show %s more options",
                              e,
                              "woocommerce"
                            ),
                            e
                          ),
                        },
                        (0, v.sprintf)(
                          /* translators: %s number of options to reveal. */ /* translators: %s number of options to reveal. */
                          (0, v._n)(
                            "Show %s more",
                            "Show %s more",
                            e,
                            "woocommerce"
                          ),
                          e
                        )
                      )
                    )
                  );
                }, [r, l, d]),
                h = (0, c.useMemo)(
                  () =>
                    d &&
                    (0, n.createElement)(
                      "li",
                      { key: "show-less", className: "show-less" },
                      (0, n.createElement)(
                        "button",
                        {
                          onClick: () => {
                            u(!1);
                          },
                          "aria-expanded": !0,
                          "aria-label": (0, v.__)(
                            "Show less options",
                            "woocommerce"
                          ),
                        },
                        (0, v.__)("Show less", "woocommerce")
                      )
                    ),
                  [d]
                ),
                g = (0, c.useMemo)(() => {
                  const e = r.length > l + 5;
                  return (0, n.createElement)(
                    n.Fragment,
                    null,
                    r.map((r, s) =>
                      (0, n.createElement)(f, {
                        key: r.value,
                        option: r,
                        shouldTruncateOptions: e,
                        showExpanded: d,
                        index: s,
                        limit: l,
                        checked: o.includes(r.value),
                        disabled: i,
                        renderedShowMore: p,
                        onChange: t,
                      })
                    ),
                    e && h
                  );
                }, [r, t, o, d, l, h, p, i]),
                _ = (0, s.A)(
                  "wc-block-checkbox-list",
                  "wc-block-components-checkbox-list",
                  { "is-loading": a },
                  e
                );
              return (0, n.createElement)("ul", { className: _ }, a ? m : g);
            }
          : null;
      r(4456);
      const E =
        6981 == r.j
          ? ({
              text: e,
              screenReaderText: t = "",
              element: r = "li",
              className: o = "",
              radius: a = "small",
              children: c = null,
              ...i
            }) => {
              const l = r,
                d = (0, s.A)(
                  o,
                  "wc-block-components-chip",
                  "wc-block-components-chip--radius-" + a
                ),
                u = Boolean(t && t !== e);
              return (0, n.createElement)(
                l,
                { className: d, ...i },
                (0, n.createElement)(
                  "span",
                  {
                    "aria-hidden": u,
                    className: "wc-block-components-chip__text",
                  },
                  e
                ),
                u &&
                  (0, n.createElement)(
                    "span",
                    { className: "screen-reader-text" },
                    t
                  ),
                c
              );
            }
          : null;
      if (6981 == r.j) var y = r(7104);
      if (6981 == r.j) var k = r(8098);
      const w =
        6981 == r.j
          ? ({
              ariaLabel: e = "",
              className: t = "",
              disabled: r = !1,
              onRemove: o = () => {},
              removeOnAnyClick: a = !1,
              text: c,
              screenReaderText: i = "",
              ...l
            }) => {
              const d = a ? "span" : "button";
              if (!e) {
                const t = i && "string" == typeof i ? i : c;
                e =
                  "string" !=
                  typeof t /* translators: Remove chip. */ /* translators: Remove chip. */
                    ? (0, v.__)("Remove", "woocommerce")
                    : (0, v.sprintf)(
                        /* translators: %s text of the chip to remove. */ /* translators: %s text of the chip to remove. */
                        (0, v.__)('Remove "%s"', "woocommerce"),
                        t
                      );
              }
              const u = {
                  "aria-label": e,
                  disabled: r,
                  onClick: o,
                  onKeyDown: (e) => {
                    ("Backspace" !== e.key && "Delete" !== e.key) || o();
                  },
                },
                m = a ? u : {},
                p = a ? { "aria-hidden": !0 } : u;
              return (0, n.createElement)(
                E,
                {
                  ...l,
                  ...m,
                  className: (0, s.A)(t, "is-removable"),
                  element: a ? "button" : l.element,
                  screenReaderText: i,
                  text: c,
                },
                (0, n.createElement)(
                  d,
                  { className: "wc-block-components-chip__remove", ...p },
                  (0, n.createElement)(y.A, {
                    className: "wc-block-components-chip__remove-icon",
                    icon: k.A,
                    size: 16,
                    role: "img",
                  })
                )
              );
            }
          : null;
      r(2849), r(1908);
      const S =
          6981 == r.j
            ? ({ children: e, className: t = "", headingLevel: r, ...o }) => {
                const a = (0, s.A)("wc-block-components-title", t),
                  c = `h${r}`;
                return (0, n.createElement)(c, { className: a, ...o }, e);
              }
            : null,
        C = ({ title: e, stepHeadingContent: t }) =>
          (0, n.createElement)(
            "div",
            { className: "wc-block-components-checkout-step__heading" },
            (0, n.createElement)(
              S,
              {
                className: "wc-block-components-checkout-step__title",
                headingLevel: "2",
              },
              e
            ),
            !!t &&
              (0, n.createElement)(
                "span",
                {
                  className:
                    "wc-block-components-checkout-step__heading-content",
                },
                t
              )
          ),
        A =
          6981 == r.j
            ? ({
                id: e,
                className: t,
                title: r,
                legend: o,
                description: a,
                children: c,
                disabled: i = !1,
                showStepNumber: l = !0,
                stepHeadingContent: d = () => {},
              }) => {
                const u = o || r ? "fieldset" : "div";
                return (0, n.createElement)(
                  u,
                  {
                    className: (0, s.A)(
                      t,
                      "wc-block-components-checkout-step",
                      {
                        "wc-block-components-checkout-step--with-step-number":
                          l,
                        "wc-block-components-checkout-step--disabled": i,
                      }
                    ),
                    id: e,
                    disabled: i,
                  },
                  !(!o && !r) &&
                    (0, n.createElement)(
                      "legend",
                      { className: "screen-reader-text" },
                      o || r
                    ),
                  !!r &&
                    (0, n.createElement)(C, {
                      title: r,
                      stepHeadingContent: d(),
                    }),
                  (0, n.createElement)(
                    "div",
                    {
                      className: "wc-block-components-checkout-step__container",
                    },
                    !!a &&
                      (0, n.createElement)(
                        "p",
                        {
                          className:
                            "wc-block-components-checkout-step__description",
                        },
                        a
                      ),
                    (0, n.createElement)(
                      "div",
                      {
                        className: "wc-block-components-checkout-step__content",
                      },
                      c
                    )
                  )
                );
              }
            : null;
      var N = r(1228),
        P = r(7407),
        x = r(3439);
      const R = ({
          label: e,
          secondaryLabel: t,
          description: r,
          secondaryDescription: o,
          id: s,
        }) =>
          (0, n.createElement)(
            "div",
            { className: "wc-block-components-radio-control__option-layout" },
            (0, n.createElement)(
              "div",
              { className: "wc-block-components-radio-control__label-group" },
              e &&
                (0, n.createElement)(
                  "span",
                  {
                    id: s && `${s}__label`,
                    className: "wc-block-components-radio-control__label",
                  },
                  e
                ),
              t &&
                (0, n.createElement)(
                  "span",
                  {
                    id: s && `${s}__secondary-label`,
                    className:
                      "wc-block-components-radio-control__secondary-label",
                  },
                  t
                )
            ),
            (r || o) &&
              (0, n.createElement)(
                "div",
                {
                  className:
                    "wc-block-components-radio-control__description-group",
                },
                r &&
                  (0, n.createElement)(
                    "span",
                    {
                      id: s && `${s}__description`,
                      className:
                        "wc-block-components-radio-control__description",
                    },
                    r
                  ),
                o &&
                  (0, n.createElement)(
                    "span",
                    {
                      id: s && `${s}__secondary-description`,
                      className:
                        "wc-block-components-radio-control__secondary-description",
                    },
                    o
                  )
              )
          ),
        I = ({
          checked: e,
          name: t,
          onChange: r,
          option: o,
          disabled: a = !1,
          highlightChecked: c = !1,
        }) => {
          const {
            value: i,
            label: l,
            description: d,
            secondaryLabel: u,
            secondaryDescription: m,
            content: p,
          } = o;
          return (0, n.createElement)(
            "label",
            {
              className: (0, s.A)("wc-block-components-radio-control__option", {
                "wc-block-components-radio-control__option-checked": e,
                "wc-block-components-radio-control__option--checked-option-highlighted":
                  e && c,
              }),
              htmlFor: `${t}-${i}`,
            },
            (0, n.createElement)("input", {
              id: `${t}-${i}`,
              className: "wc-block-components-radio-control__input",
              type: "radio",
              name: t,
              value: i,
              onChange: (e) => r(e.target.value),
              checked: e,
              "aria-describedby": (0, s.A)({
                [`${t}-${i}__secondary-label`]: u,
                [`${t}-${i}__description`]: d,
                [`${t}-${i}__secondary-description`]: m,
                [`${t}-${i}__content`]: p,
              }),
              "aria-disabled": a,
              onKeyDown: (e) => {
                a &&
                  ["ArrowUp", "ArrowDown", "AllowLeft", "ArrowRight"].includes(
                    e.key
                  ) &&
                  e.preventDefault();
              },
            }),
            (0, n.createElement)(R, {
              id: `${t}-${i}`,
              label: l,
              secondaryLabel: u,
              description: d,
              secondaryDescription: m,
            })
          );
        };
      r(6785);
      const M = ({
          className: e = "",
          id: t,
          selected: r = "",
          onChange: o,
          options: i = [],
          disabled: l = !1,
          highlightChecked: d = !1,
        }) => {
          const u = (0, a.useInstanceId)(M),
            m = t || u,
            p = (0, c.useMemo)(() => i.findIndex((e) => e.value === r), [i, r]);
          return i.length
            ? (0, n.createElement)(
                "div",
                {
                  className: (0, s.A)(
                    "wc-block-components-radio-control",
                    {
                      "wc-block-components-radio-control--highlight-checked--first-selected":
                        d && 0 === p,
                      "wc-block-components-radio-control--highlight-checked--last-selected":
                        d && p === i.length - 1,
                      "wc-block-components-radio-control--highlight-checked": d,
                    },
                    e
                  ),
                },
                i.map((e) =>
                  (0, n.createElement)(I, {
                    highlightChecked: d,
                    key: `${m}-${e.value}`,
                    name: `radio-control-${m}`,
                    checked: e.value === r,
                    option: e,
                    onChange: (t) => {
                      o(t), "function" == typeof e.onChange && e.onChange(t);
                    },
                    disabled: l,
                  })
                )
              )
            : null;
        },
        T = 6981 == r.j ? M : null,
        j = (0, a.withInstanceId)(
          ({
            className: e,
            instanceId: t,
            id: r,
            selected: o,
            onChange: a,
            options: i = [],
            highlightChecked: l = !1,
          }) => {
            const d = r || t,
              u = (0, c.useMemo)(
                () => i.findIndex((e) => e.value === o),
                [i, o]
              );
            return i.length
              ? (0, n.createElement)(
                  "div",
                  {
                    className: (0, s.A)(
                      "wc-block-components-radio-control",
                      {
                        "wc-block-components-radio-control--highlight-checked":
                          l,
                        "wc-block-components-radio-control--highlight-checked--first-selected":
                          l && 0 === u,
                        "wc-block-components-radio-control--highlight-checked--last-selected":
                          l && u === i.length - 1,
                      },
                      e
                    ),
                  },
                  i.map((e) => {
                    const t = "object" == typeof e && "content" in e,
                      r = e.value === o,
                      c = `radio-control-${d}`;
                    return (0, n.createElement)(
                      "div",
                      {
                        className: (0, s.A)(
                          "wc-block-components-radio-control-accordion-option",
                          {
                            "wc-block-components-radio-control-accordion-option--checked-option-highlighted":
                              r && l,
                          }
                        ),
                        key: e.value,
                      },
                      (0, n.createElement)(I, {
                        name: c,
                        checked: r,
                        option: e,
                        onChange: (t) => {
                          a(t),
                            "function" == typeof e.onChange && e.onChange(t);
                        },
                      }),
                      t &&
                        r &&
                        (0, n.createElement)(
                          "div",
                          {
                            id: `${c}-${e.value}__content`,
                            className: (0, s.A)(
                              "wc-block-components-radio-control-accordion-content",
                              {
                                "wc-block-components-radio-control-accordion-content-hide":
                                  !r,
                              }
                            ),
                          },
                          e.content
                        )
                    );
                  })
                )
              : null;
          }
        );
      r(3149);
      const $ = (0, a.withInstanceId)(
        ({
          className: e,
          instanceId: t,
          label: r = "",
          onChange: o,
          options: a,
          screenReaderLabel: c,
          value: i = "",
          readOnly: l = !1,
        }) => {
          const d = `wc-block-components-sort-select__select-${t}`;
          return (0, n.createElement)(
            "div",
            {
              className: (0, s.A)(
                "wc-block-sort-select",
                "wc-block-components-sort-select",
                e
              ),
            },
            (0, n.createElement)(P.A, {
              label: r,
              screenReaderLabel: c,
              wrapperElement: "label",
              wrapperProps: {
                className:
                  "wc-block-sort-select__label wc-block-components-sort-select__label",
                htmlFor: d,
              },
            }),
            (0, n.createElement)(
              "select",
              {
                disabled: !!l,
                id: d,
                className:
                  "wc-block-sort-select__select wc-block-components-sort-select__select",
                onChange: o,
                value: i,
              },
              a &&
                a.map((e) =>
                  (0, n.createElement)(
                    "option",
                    { key: e.key, value: e.key },
                    e.label
                  )
                )
            )
          );
        }
      );
      var O = r(354),
        L = r(4751),
        D = r(4104);
      r(8112);
      const F =
        6981 == r.j
          ? ({
              className: e = "",
              disabled: t = !1,
              onTextChange: r,
              placeholder: o,
              value: a = "",
            }) =>
              (0, n.createElement)("textarea", {
                className: (0, s.A)("wc-block-components-textarea", e),
                disabled: t,
                onChange: (e) => {
                  r(e.target.value);
                },
                placeholder: o,
                rows: 2,
                value: a,
              })
          : null;
      var V = r(6696),
        B = r(5175),
        H = r(3410),
        U = r(6828);
    },
    7407: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => c });
      var o = r(1609),
        n = r(6087);
      if (/^(251|6981|8157)$/.test(r.j)) var s = r(3398);
      if (/^(251|6981|8157)$/.test(r.j)) var a = r(851);
      const c = /^(251|6981|8157)$/.test(r.j)
        ? ({
            label: e,
            screenReaderLabel: t,
            wrapperElement: r,
            wrapperProps: c = {},
            allowHTML: i = !1,
          }) => {
            let l;
            const d = null != e,
              u = null != t;
            return !d && u
              ? ((l = r || "span"),
                (c = {
                  ...c,
                  className: (0, a.A)(c.className, "screen-reader-text"),
                }),
                (0, o.createElement)(l, { ...c }, t))
              : ((l = r || n.Fragment),
                d && u && e !== t
                  ? (0, o.createElement)(
                      l,
                      { ...c },
                      i
                        ? (0, o.createElement)(
                            n.RawHTML,
                            null,
                            (0, s.p)(e, {
                              tags: [
                                "b",
                                "em",
                                "i",
                                "strong",
                                "p",
                                "br",
                                "span",
                              ],
                              attr: ["style"],
                            })
                          )
                        : (0, o.createElement)(
                            "span",
                            { "aria-hidden": "true" },
                            e
                          ),
                      (0, o.createElement)(
                        "span",
                        { className: "screen-reader-text" },
                        t
                      )
                    )
                  : (0, o.createElement)(l, { ...c }, e));
          }
        : null;
    },
    3439: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => m });
      var o = r(1609),
        n = r(6087);
      if (/^(6981|8157)$/.test(r.j)) var s = r(851);
      if (/^(6981|8157)$/.test(r.j)) var a = r(7104);
      if (/^(6981|8157)$/.test(r.j)) var c = r(9813);
      if (/^(6981|8157)$/.test(r.j)) var i = r(224);
      if (/^(6981|8157)$/.test(r.j)) var l = r(9155);
      var d = r(4040),
        u = r.n(d);
      r(5440);
      const m = /^(6981|8157)$/.test(r.j)
        ? ({
            children: e,
            className: t,
            initialOpen: r = !1,
            hasBorder: d = !1,
            headingLevel: m,
            title: p,
            titleTag: h,
            state: g,
          }) => {
            let [_, v] = (0, n.useState)(r);
            return (
              Array.isArray(g) && 2 === g.length && ([_, v] = g),
              h && u()("Panel component's titleTag prop", { since: "9.4.0" }),
              (0, o.createElement)(
                "div",
                {
                  role: m ? "heading" : void 0,
                  "aria-level": m || void 0,
                  className: (0, s.A)(t, "wc-block-components-panel", {
                    "has-border": d,
                  }),
                },
                (0, o.createElement)(
                  l.$,
                  {
                    render: (0, o.createElement)("div", null),
                    "aria-expanded": _,
                    className: "wc-block-components-panel__button",
                    onClick: () => v(!_),
                  },
                  (0, o.createElement)(a.A, {
                    "aria-hidden": "true",
                    className: "wc-block-components-panel__button-icon",
                    icon: _ ? c.A : i.A,
                  }),
                  p
                ),
                _ &&
                  (0, o.createElement)(
                    "div",
                    { className: "wc-block-components-panel__content" },
                    e
                  )
              )
            );
          }
        : null;
    },
    354: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => n });
      var o = r(1609);
      r(7791);
      const n =
        989 != r.j
          ? () =>
              (0, o.createElement)("span", {
                className: "wc-block-components-spinner",
                "aria-hidden": "true",
              })
          : null;
    },
    4751: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => a });
      var o = r(1609);
      if (/^(6981|8157)$/.test(r.j)) var n = r(851);
      var s = r(4090);
      const a = /^(6981|8157)$/.test(r.j)
        ? ({ className: e, children: t, status: r, ...a }) =>
            (0, o.createElement)(
              s.A,
              {
                className: (0, n.A)("wc-block-store-notice", e),
                status: r,
                ...a,
              },
              t
            )
        : null;
    },
    4104: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => w });
      var o = r(1609),
        n = r(7143),
        s = r(7594);
      if (251 != r.j) var a = r(108);
      var c = r(6087),
        i = (r(6249), r(7723));
      if (251 != r.j) var l = r(851);
      if (251 != r.j) var d = r(3398);
      if (251 != r.j) var u = r(4015);
      var m = r(8537),
        p = r(4751);
      const h =
        251 != r.j
          ? ({ className: e, notices: t }) => {
              const r = (0, c.useRef)(null),
                { removeNotice: s } = (0, n.useDispatch)("core/notices"),
                a = t.map((e) => e.id),
                h = (0, u.Z)(a);
              (0, c.useEffect)(() => {
                const e = r.current;
                if (!e) return;
                const t = e.ownerDocument.activeElement;
                (t &&
                  -1 !==
                    ["input", "select", "button", "textarea"].indexOf(
                      t.tagName.toLowerCase()
                    ) &&
                  "radio" !== t.getAttribute("type")) ||
                  (a.filter((e) => !h || !h.includes(e)).length &&
                    null != e &&
                    e.scrollIntoView &&
                    e.scrollIntoView({ behavior: "smooth" }));
              }, [a, h, r]);
              const g = t.filter(({ isDismissible: e }) => !!e),
                _ = t.filter(({ isDismissible: e }) => !e),
                v = {
                  error: g.filter(({ status: e }) => "error" === e),
                  success: g.filter(({ status: e }) => "success" === e),
                  warning: g.filter(({ status: e }) => "warning" === e),
                  info: g.filter(({ status: e }) => "info" === e),
                  default: g.filter(({ status: e }) => "default" === e),
                };
              return (0, o.createElement)(
                "div",
                {
                  ref: r,
                  className: (0, l.A)(e, "wc-block-components-notices"),
                },
                _.map((e) =>
                  (0, o.createElement)(
                    p.A,
                    { key: e.id + "-" + e.context, ...e },
                    (0, o.createElement)(
                      c.RawHTML,
                      null,
                      (0, d.p)((0, m.decodeEntities)(e.content))
                    )
                  )
                ),
                Object.entries(v).map(([e, t]) => {
                  if (!t.length) return null;
                  const r = t
                      .filter(
                        (e, t, r) =>
                          r.findIndex((t) => t.content === e.content) === t
                      )
                      .map((e) => ({
                        ...e,
                        content: (0, d.p)((0, m.decodeEntities)(e.content)),
                      })),
                    n = {
                      key: `store-notice-${e}`,
                      status: e,
                      onRemove: () => {
                        t.forEach((e) => {
                          s(e.id, e.context);
                        });
                      },
                    };
                  return 1 === r.length
                    ? (0, o.createElement)(
                        p.A,
                        { ...n },
                        (0, o.createElement)(c.RawHTML, null, t[0].content)
                      )
                    : (0, o.createElement)(
                        p.A,
                        {
                          ...n,
                          summary:
                            "error" === e
                              ? (0, i.__)(
                                  "Please fix the following errors before continuing",
                                  "woocommerce"
                                )
                              : "",
                        },
                        (0, o.createElement)(
                          "ul",
                          null,
                          r.map((e) =>
                            (0, o.createElement)(
                              "li",
                              { key: e.id + "-" + e.context },
                              (0, o.createElement)(c.RawHTML, null, e.content)
                            )
                          )
                        )
                      );
                })
              );
            }
          : null;
      var g = r(9491);
      if (251 != r.j) var _ = r(847);
      if (251 != r.j) var v = r(6648);
      r(230);
      var f = r(4090);
      const b =
          251 != r.j
            ? ({
                onRemove: e = () => {},
                children: t,
                listRef: r,
                className: n,
                ...s
              }) => (
                (0, c.useEffect)(() => {
                  const t = setTimeout(() => {
                    e();
                  }, 1e4);
                  return () => clearTimeout(t);
                }, [e]),
                (0, o.createElement)(
                  f.A,
                  {
                    className: (0, l.A)(
                      n,
                      "wc-block-components-notice-snackbar"
                    ),
                    ...s,
                    onRemove: () => {
                      r && r.current && r.current.focus(), e();
                    },
                  },
                  t
                )
              )
            : null,
        E =
          251 != r.j
            ? ({ notices: e, className: t, onRemove: r = () => {} }) => {
                const n = (0, c.useRef)(null),
                  s = (0, g.useReducedMotion)(),
                  a = (e) => () => r((null == e ? void 0 : e.id) || "");
                return (0, o.createElement)(
                  "div",
                  {
                    className: (0, l.A)(
                      t,
                      "wc-block-components-notice-snackbar-list"
                    ),
                    tabIndex: -1,
                    ref: n,
                  },
                  s
                    ? e.map((e) => {
                        const { content: t, ...r } = e;
                        return (0, o.createElement)(
                          b,
                          { ...r, onRemove: a(e), listRef: n, key: e.id },
                          e.content
                        );
                      })
                    : (0, o.createElement)(
                        _.A,
                        null,
                        e.map((e) => {
                          const { content: t, ...r } = e;
                          return (0, o.createElement)(
                            v.A,
                            {
                              key: "snackbar-" + e.id,
                              timeout: 500,
                              classNames: "notice-transition",
                            },
                            (0, o.createElement)(
                              b,
                              { ...r, onRemove: a(e), listRef: n },
                              t
                            )
                          );
                        })
                      )
                );
              }
            : null,
        y =
          251 != r.j
            ? ({ className: e, notices: t }) => {
                const { removeNotice: r } = (0, n.useDispatch)("core/notices");
                return (0, o.createElement)(E, {
                  className: (0, l.A)(
                    e,
                    "wc-block-components-notices__snackbar"
                  ),
                  notices: t,
                  onRemove: (e) => {
                    t.forEach((t) => {
                      t.explicitDismiss && t.id === e
                        ? r(t.id, t.context)
                        : t.explicitDismiss || r(t.id, t.context);
                    });
                  },
                });
              }
            : null,
        k = (e, t) => e.map((e) => ({ ...e, context: t })),
        w =
          251 != r.j
            ? ({
                className: e = "",
                context: t = "",
                additionalNotices: r = [],
              }) => {
                const { registerContainer: i, unregisterContainer: l } = (0,
                  n.useDispatch)(s.storeNoticesStore),
                  { suppressNotices: d, registeredContainers: u } = (0,
                  n.useSelect)((e) => ({
                    suppressNotices: e(
                      s.paymentStore
                    ).isExpressPaymentMethodActive(),
                    registeredContainers: e(
                      s.storeNoticesStore
                    ).getRegisteredContainers(),
                  })),
                  m = (0, c.useMemo)(() => (Array.isArray(t) ? t : [t]), [t]),
                  p = (0, a.h5)().filter(
                    (e) => m.some((t) => e.includes(t + "/")) && !u.includes(e)
                  ),
                  g = (0, n.useSelect)((e) => {
                    const { getNotices: t } = e("core/notices");
                    return [
                      ...p.flatMap((e) => k(t(e), e)),
                      ...m.flatMap((e) => k(t(e).concat(r), e)),
                    ].filter(Boolean);
                  });
                return (
                  (0, c.useEffect)(
                    () => (
                      m.map((e) => i(e)),
                      () => {
                        m.map((e) => l(e));
                      }
                    ),
                    [m, i, l]
                  ),
                  d
                    ? null
                    : (0, o.createElement)(
                        o.Fragment,
                        null,
                        (0, o.createElement)(h, {
                          className: e,
                          notices: g.filter((e) => "default" === e.type),
                        }),
                        (0, o.createElement)(y, {
                          className: e,
                          notices: g.filter((e) => "snackbar" === e.type),
                        })
                      )
                );
              }
            : null;
    },
    5175: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => l });
      var o = r(1609),
        n = r(851),
        s = r(6087),
        a = r(8537),
        c = r(7407);
      r(4632);
      const i = (0, s.forwardRef)(
          (
            {
              className: e,
              id: t,
              type: r = "text",
              ariaLabel: i,
              ariaDescribedBy: l,
              label: d,
              screenReaderLabel: u,
              disabled: m,
              help: p,
              autoCapitalize: h = "off",
              autoComplete: g = "off",
              value: _ = "",
              onChange: v,
              required: f = !1,
              onBlur: b = () => {},
              feedback: E,
              ...y
            },
            k
          ) => {
            const [w, S] = (0, s.useState)(!1);
            return (0, o.createElement)(
              "div",
              {
                className: (0, n.A)("wc-block-components-text-input", e, {
                  "is-active": w || _,
                }),
              },
              (0, o.createElement)("input", {
                type: r,
                id: t,
                value: (0, a.decodeEntities)(_),
                ref: k,
                autoCapitalize: h,
                autoComplete: g,
                onChange: (e) => {
                  v(e.target.value);
                },
                onFocus: () => S(!0),
                onBlur: (e) => {
                  b(e.target.value), S(!1);
                },
                "aria-label": i || d,
                disabled: m,
                "aria-describedby": p && !l ? t + "__help" : l,
                required: f,
                ...y,
              }),
              (0, o.createElement)(c.A, {
                label: d,
                screenReaderLabel: u || d,
                wrapperElement: "label",
                wrapperProps: { htmlFor: t },
                htmlFor: t,
              }),
              !!p &&
                (0, o.createElement)(
                  "p",
                  {
                    id: t + "__help",
                    className: "wc-block-components-text-input__help",
                  },
                  p
                ),
              E
            );
          }
        ),
        l = /^(251|6981|8157)$/.test(r.j) ? i : null;
    },
    6696: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => g });
      var o = r(1609),
        n = r(6087),
        s = r(851),
        a = r(3993),
        c = r(7143),
        i = r(7594),
        l = r(4015),
        d = r(9491),
        u = r(5175),
        m = (r(4632), r(5632)),
        p = r(2611);
      const h = (0, n.forwardRef)(
          (
            {
              className: e,
              id: t,
              type: r = "text",
              ariaDescribedBy: g = "",
              errorId: _,
              focusOnMount: v = !1,
              onChange: f,
              showError: b = !0,
              errorMessage: E = "",
              value: y = "",
              customValidation: k = () => !0,
              customValidityMessage: w,
              feedback: S = null,
              customFormatter: C = (e) => e,
              label: A,
              validateOnMount: N = !0,
              instanceId: P = "",
              ...x
            },
            R
          ) => {
            const [I, M] = (0, n.useState)(!0),
              T = (0, l.Z)(y),
              j = (0, n.useRef)(null),
              $ = (0, d.useInstanceId)(h, "", P),
              O = void 0 !== t ? t : "textinput-" + $,
              L = void 0 !== _ ? _ : O,
              {
                setValidationErrors: D,
                hideValidationError: F,
                clearValidationError: V,
                showValidationError: B,
              } = (0, c.useDispatch)(i.validationStore),
              H = (0, n.useRef)(k);
            (0, n.useEffect)(() => {
              H.current = k;
            }, [k]);
            const { validationError: U, validationErrorId: W } = (0,
              c.useSelect)(
                (e) => {
                  const t = e(i.validationStore);
                  return {
                    validationError: t.getValidationError(L),
                    validationErrorId: t.getValidationErrorId(L),
                  };
                },
                [L]
              ),
              q = (0, n.useCallback)(
                (e = !0) => {
                  const t = j.current || null;
                  if (null === t) return;
                  if (
                    ((t.value = t.value.trim()),
                    t.setCustomValidity(""),
                    t.checkValidity() && H.current(t) && e)
                  )
                    return void V(L);
                  e || B(L);
                  const r = (0, p.N2)(A, t, w);
                  r && D({ [L]: { message: r, hidden: e } });
                },
                [V, L, D, A, w, B]
              );
            (0, n.useImperativeHandle)(
              R,
              function () {
                return {
                  focus() {
                    var e;
                    null === (e = j.current) || void 0 === e || e.focus();
                  },
                  revalidate() {
                    q(!y);
                  },
                  isFocused() {
                    var e;
                    return (
                      (null === (e = j.current) ||
                      void 0 === e ||
                      null === (e = e.ownerDocument) ||
                      void 0 === e
                        ? void 0
                        : e.activeElement) === j.current
                    );
                  },
                  setErrorMessage(e) {
                    var t;
                    null === (t = j.current) ||
                      void 0 === t ||
                      t.setCustomValidity(e);
                  },
                };
              },
              [q, y]
            ),
              (0, n.useEffect)(() => {
                var e;
                if (
                  y !== T &&
                  (y || T) &&
                  j &&
                  null !== j.current &&
                  (null === (e = j.current) ||
                  void 0 === e ||
                  null === (e = e.ownerDocument) ||
                  void 0 === e
                    ? void 0
                    : e.activeElement) !== j.current
                ) {
                  const e = C(j.current.value);
                  e !== y ? f(e) : q(!0);
                }
              }, [q, C, y, T, f]),
              (0, n.useEffect)(() => {
                var e;
                I &&
                  (M(!1),
                  v && (null === (e = j.current) || void 0 === e || e.focus()),
                  (!N && v) || q(!0));
              }, [N, v, I, M, q]),
              (0, n.useEffect)(
                () => () => {
                  V(L);
                },
                [V, L]
              ),
              "" !== E && (0, a.isObject)(U) && (U.message = E);
            const z =
              (null == U ? void 0 : U.message) && !(null != U && U.hidden);
            return (0, o.createElement)(u.A, {
              className: (0, s.A)(e, { "has-error": z }),
              "aria-invalid": !0 === z,
              id: O,
              "aria-errormessage": b && z && W ? W : void 0,
              type: r,
              feedback:
                b && z
                  ? (0, o.createElement)(m.a, {
                      errorMessage: E,
                      propertyName: L,
                      elementId: L,
                    })
                  : S,
              ref: j,
              onChange: (e) => {
                F(L), q(!0);
                const t = C(e);
                t !== y && f(t);
              },
              onBlur: () => q(!1),
              "aria-describedby": g,
              value: y,
              title: "",
              label: A,
              ...x,
            });
          }
        ),
        g = /^(6981|8157)$/.test(r.j) ? h : null;
    },
    6828: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => a });
      var o = r(1609);
      if (/^(6981|8157)$/.test(r.j)) var n = r(851);
      var s = r(6087);
      r(7015);
      const a = /^(6981|8157)$/.test(r.j)
        ? ({ children: e, slotWrapper: t = !1, className: r }) =>
            s.Children.count(e)
              ? (0, o.createElement)(
                  "div",
                  {
                    className: (0, n.A)(
                      r,
                      "wc-block-components-totals-wrapper",
                      { "slot-wrapper": t }
                    ),
                  },
                  e
                )
              : null
        : null;
    },
    3410: (e, t, r) => {
      "use strict";
      r.d(t, { Ve: () => u, ht: () => p, Zi: () => i, Zv: () => m });
      var o = r(1609);
      if (251 != r.j) var n = r(851);
      var s = r(6087),
        a = (r(1157), r(1228));
      const c = ({ value: e, currency: t }) =>
          (0, s.isValidElement)(e)
            ? (0, o.createElement)(
                "div",
                { className: "wc-block-components-totals-item__value" },
                e
              )
            : Number.isFinite(e)
            ? (0, o.createElement)(a.A, {
                className: "wc-block-components-totals-item__value",
                currency: t || {},
                value: e,
              })
            : null,
        i =
          251 != r.j
            ? ({
                className: e,
                currency: t,
                label: r,
                value: s,
                description: a,
              }) =>
                (0, o.createElement)(
                  "div",
                  { className: (0, n.A)("wc-block-components-totals-item", e) },
                  (0, o.createElement)(
                    "span",
                    { className: "wc-block-components-totals-item__label" },
                    r
                  ),
                  (0, o.createElement)(c, { value: s, currency: t }),
                  (0, o.createElement)(
                    "div",
                    {
                      className: "wc-block-components-totals-item__description",
                    },
                    a
                  )
                )
            : null;
      var l = r(7723),
        d = r(5703);
      const u =
          251 != r.j
            ? ({ currency: e, values: t, className: r }) => {
                const { total_items: n, total_items_tax: s } = t,
                  a = parseInt(n, 10),
                  c = parseInt(s, 10);
                return (0, o.createElement)(i, {
                  className: r,
                  currency: e,
                  label: (0, l.__)("Subtotal", "woocommerce"),
                  value: (0, d.getSetting)("displayCartPricesIncludingTax", !1)
                    ? a + c
                    : a,
                });
              }
            : null,
        m =
          251 != r.j
            ? ({
                currency: e,
                values: t,
                className: r,
                showRateAfterTaxName: s,
              }) => {
                const { total_tax: a, tax_lines: c } = t;
                if (
                  !(0, d.getSetting)("taxesEnabled", !0) &&
                  parseInt(a, 10) <= 0
                )
                  return null;
                const u = (0, d.getSetting)("displayItemizedTaxes", !1),
                  m =
                    u && c.length > 0
                      ? (0, o.createElement)(
                          o.Fragment,
                          null,
                          c.map(({ name: t, rate: a, price: c }, l) => {
                            const d = `${t}${s ? ` ${a}` : ""}`;
                            return (0, o.createElement)(i, {
                              key: `tax-line-${l}`,
                              className: (0, n.A)(
                                "wc-block-components-totals-taxes",
                                r
                              ),
                              currency: e,
                              label: d,
                              value: parseInt(c, 10),
                            });
                          }),
                          " "
                        )
                      : null;
                return u
                  ? m
                  : (0, o.createElement)(
                      o.Fragment,
                      null,
                      (0, o.createElement)(i, {
                        className: (0, n.A)(
                          "wc-block-components-totals-taxes",
                          r
                        ),
                        currency: e,
                        label: (0, l.__)("Taxes", "woocommerce"),
                        value: parseInt(a, 10),
                        description: null,
                      })
                    );
              }
            : null,
        p =
          251 != r.j
            ? ({ currency: e, cartFees: t, className: r }) =>
                (0, o.createElement)(
                  o.Fragment,
                  null,
                  t.map(({ id: t, key: s, name: a, totals: c }, u) => {
                    const m = parseInt(c.total, 10);
                    if (!m) return null;
                    const p = parseInt(c.total_tax, 10);
                    return (0, o.createElement)(i, {
                      key: t || `${u}-${a}`,
                      className: (0, n.A)(
                        "wc-block-components-totals-fees",
                        "wc-block-components-totals-fees__" + s,
                        r
                      ),
                      currency: e,
                      label: a || (0, l.__)("Fee", "woocommerce"),
                      value: (0, d.getSetting)(
                        "displayCartPricesIncludingTax",
                        !1
                      )
                        ? m + p
                        : m,
                    });
                  })
                )
            : null;
    },
    5632: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => l, a: () => i });
      var o = r(1609),
        n = r(7143),
        s = r(7594);
      if (/^(251|6981|8157)$/.test(r.j)) var a = r(7104);
      if (/^(251|6981|8157)$/.test(r.j)) var c = r(1207);
      r(7235);
      const i = ({
          errorMessage: e = "",
          propertyName: t = "",
          elementId: r = "",
        }) => {
          const { validationError: i, validationErrorId: l } = (0, n.useSelect)(
            (e) => {
              const o = e(s.validationStore);
              return {
                validationError: o.getValidationError(t),
                validationErrorId: o.getValidationErrorId(r),
              };
            }
          );
          if (!e || "string" != typeof e) {
            if (null == i || !i.message || (null != i && i.hidden)) return null;
            e = i.message;
          }
          return (0, o.createElement)(
            "div",
            {
              className: "wc-block-components-validation-error",
              role: "alert",
            },
            (0, o.createElement)(
              "p",
              { id: l },
              (0, o.createElement)(a.A, { icon: c.A }),
              (0, o.createElement)("span", null, e)
            )
          );
        },
        l = /^(6981|8157)$/.test(r.j) ? i : null;
    },
    9407: () => {},
    2080: () => {},
    1045: () => {},
    5684: () => {},
    5415: () => {},
    3091: () => {},
    4957: () => {},
    777: () => {},
    9507: () => {},
    4982: () => {},
    401: () => {},
    718: () => {},
    7051: () => {},
    2867: () => {},
    3048: () => {},
    265: () => {},
    7919: () => {},
    780: () => {},
    2931: () => {},
    1041: () => {},
    8375: () => {},
    9345: () => {},
    6625: () => {},
    4567: () => {},
    5193: () => {},
    5452: () => {},
    1221: () => {},
    230: () => {},
    8824: () => {},
    3135: () => {},
    9569: () => {},
    1637: () => {},
    181: () => {},
    2031: () => {},
    294: () => {},
    4456: () => {},
    2849: () => {},
    9297: () => {},
    5440: () => {},
    6785: () => {},
    3149: () => {},
    7791: () => {},
    6249: () => {},
    4632: () => {},
    8112: () => {},
    1908: () => {},
    7015: () => {},
    1157: () => {},
    7235: () => {},
  },
]);
