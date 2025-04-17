var _s = Object.defineProperty;
var xn = (e) => {
  throw TypeError(e);
};
var bs = (e, t, r) => t in e ? _s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var k = (e, t, r) => bs(e, typeof t != "symbol" ? t + "" : t, r), br = (e, t, r) => t.has(e) || xn("Cannot " + r);
var w = (e, t, r) => (br(e, t, "read from private field"), r ? r.call(e) : t.get(e)), Q = (e, t, r) => t.has(e) ? xn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), ut = (e, t, r, i) => (br(e, t, "write to private field"), i ? i.call(e, r) : t.set(e, r), r), ee = (e, t, r) => (br(e, t, "access private method"), r);
const Es = "5";
var Nn;
typeof window < "u" && ((Nn = window.__svelte ?? (window.__svelte = {})).v ?? (Nn.v = /* @__PURE__ */ new Set())).add(Es);
const xs = 1, ks = 4, As = 8, Cs = 16, Ss = 1, $s = 2, Nr = "[", Un = "[!", Dn = "]", ht = {}, ue = Symbol(), Rs = "http://www.w3.org/1999/xhtml", kn = !1, Ce = 2, On = 4, or = 8, Ur = 16, Oe = 32, tt = 64, Jt = 128, pe = 256, Zt = 512, ve = 1024, Me = 2048, wt = 4096, gt = 8192, lr = 16384, Ts = 32768, Dr = 65536, Is = 1 << 19, Mn = 1 << 20, It = Symbol("$state"), Bn = Symbol("legacy props"), Fs = Symbol("");
var jn = Array.isArray, Ls = Array.prototype.indexOf, Ps = Array.from, Xt = Object.keys, Qt = Object.defineProperty, Ze = Object.getOwnPropertyDescriptor, Ns = Object.getOwnPropertyDescriptors, Us = Object.prototype, Ds = Array.prototype, Vn = Object.getPrototypeOf;
function Kn(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const Os = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let Pt = [], Nt = [];
function qn() {
  var e = Pt;
  Pt = [], Kn(e);
}
function Hn() {
  var e = Nt;
  Nt = [], Kn(e);
}
function Or(e) {
  Pt.length === 0 && queueMicrotask(qn), Pt.push(e);
}
function Ms(e) {
  Nt.length === 0 && Os(Hn), Nt.push(e);
}
function An() {
  Pt.length > 0 && qn(), Nt.length > 0 && Hn();
}
function zn(e) {
  return e === this.v;
}
function Bs(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Yn(e) {
  return !Bs(e, this.v);
}
function js(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Vs() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ks(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function qs() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Hs() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function zs(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Ys() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ws() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Gs() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function Js() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let Zs = !1;
function Re(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: zn,
    rv: 0,
    wv: 0
  };
  return r;
}
function he(e) {
  return /* @__PURE__ */ Xs(Re(e));
}
// @__NO_SIDE_EFFECTS__
function Wn(e, t = !1) {
  const r = Re(e);
  return t || (r.equals = Yn), r;
}
// @__NO_SIDE_EFFECTS__
function Xs(e) {
  return R !== null && !Ae && (R.f & Ce) !== 0 && (Ie === null ? ia([e]) : Ie.push(e)), e;
}
function C(e, t) {
  return R !== null && !Ae && di() && (R.f & (Ce | Ur)) !== 0 && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (Ie === null || !Ie.includes(e)) && Js(), Qs(e, t);
}
function Qs(e, t) {
  return e.equals(t) || (e.v, e.v = t, e.wv = ri(), Gn(e, Me), F !== null && (F.f & ve) !== 0 && (F.f & (Oe | tt)) === 0 && (Ne === null ? sa([e]) : Ne.push(e))), t;
}
function Gn(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var i = r.length, n = 0; n < i; n++) {
      var a = r[n], o = a.f;
      (o & Me) === 0 && (Pe(a, t), (o & (ve | pe)) !== 0 && ((o & Ce) !== 0 ? Gn(
        /** @type {Derived} */
        a,
        wt
      ) : dr(
        /** @type {Effect} */
        a
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function Je(e) {
  var t = Ce | Me, r = R !== null && (R.f & Ce) !== 0 ? (
    /** @type {Derived} */
    R
  ) : null;
  return F === null || r !== null && (r.f & pe) !== 0 ? t |= pe : F.f |= Mn, {
    ctx: ae,
    deps: null,
    effects: null,
    equals: zn,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: r ?? F
  };
}
function Jn(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      De(
        /** @type {Effect} */
        t[r]
      );
  }
}
function ea(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & Ce) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function ta(e) {
  var t, r = F;
  Le(ea(e));
  try {
    Jn(e), t = ii(e);
  } finally {
    Le(r);
  }
  return t;
}
function Zn(e) {
  var t = ta(e), r = (He || (e.f & pe) !== 0) && e.deps !== null ? wt : ve;
  Pe(e, r), e.equals(t) || (e.v = t, e.wv = ri());
}
function ur(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let M = !1;
function qe(e) {
  M = e;
}
let B;
function Ye(e) {
  if (e === null)
    throw ur(), ht;
  return B = e;
}
function pt() {
  return Ye(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Be(B)
  );
}
function K(e) {
  if (M) {
    if (/* @__PURE__ */ Be(B) !== null)
      throw ur(), ht;
    B = e;
  }
}
function Cr(e = 1) {
  if (M) {
    for (var t = e, r = B; t--; )
      r = /** @type {TemplateNode} */
      /* @__PURE__ */ Be(r);
    B = r;
  }
}
function ra() {
  for (var e = 0, t = B; ; ) {
    if (t.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === Dn) {
        if (e === 0) return t;
        e -= 1;
      } else (r === Nr || r === Un) && (e += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Be(t)
    );
    t.remove(), t = i;
  }
}
function se(e, t = null, r) {
  if (typeof e != "object" || e === null || It in e)
    return e;
  const i = Vn(e);
  if (i !== Us && i !== Ds)
    return e;
  var n = /* @__PURE__ */ new Map(), a = jn(e), o = Re(0);
  a && n.set("length", Re(
    /** @type {any[]} */
    e.length
  ));
  var l;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(u, f, h) {
        (!("value" in h) || h.configurable === !1 || h.enumerable === !1 || h.writable === !1) && Ys();
        var v = n.get(f);
        return v === void 0 ? (v = Re(h.value), n.set(f, v)) : C(v, se(h.value, l)), !0;
      },
      deleteProperty(u, f) {
        var h = n.get(f);
        if (h === void 0)
          f in u && n.set(f, Re(ue));
        else {
          if (a && typeof f == "string") {
            var v = (
              /** @type {Source<number>} */
              n.get("length")
            ), m = Number(f);
            Number.isInteger(m) && m < v.v && C(v, m);
          }
          C(h, ue), Cn(o);
        }
        return !0;
      },
      get(u, f, h) {
        var _;
        if (f === It)
          return e;
        var v = n.get(f), m = f in u;
        if (v === void 0 && (!m || (_ = Ze(u, f)) != null && _.writable) && (v = Re(se(m ? u[f] : ue, l)), n.set(f, v)), v !== void 0) {
          var g = c(v);
          return g === ue ? void 0 : g;
        }
        return Reflect.get(u, f, h);
      },
      getOwnPropertyDescriptor(u, f) {
        var h = Reflect.getOwnPropertyDescriptor(u, f);
        if (h && "value" in h) {
          var v = n.get(f);
          v && (h.value = c(v));
        } else if (h === void 0) {
          var m = n.get(f), g = m == null ? void 0 : m.v;
          if (m !== void 0 && g !== ue)
            return {
              enumerable: !0,
              configurable: !0,
              value: g,
              writable: !0
            };
        }
        return h;
      },
      has(u, f) {
        var g;
        if (f === It)
          return !0;
        var h = n.get(f), v = h !== void 0 && h.v !== ue || Reflect.has(u, f);
        if (h !== void 0 || F !== null && (!v || (g = Ze(u, f)) != null && g.writable)) {
          h === void 0 && (h = Re(v ? se(u[f], l) : ue), n.set(f, h));
          var m = c(h);
          if (m === ue)
            return !1;
        }
        return v;
      },
      set(u, f, h, v) {
        var H;
        var m = n.get(f), g = f in u;
        if (a && f === "length")
          for (var _ = h; _ < /** @type {Source<number>} */
          m.v; _ += 1) {
            var A = n.get(_ + "");
            A !== void 0 ? C(A, ue) : _ in u && (A = Re(ue), n.set(_ + "", A));
          }
        m === void 0 ? (!g || (H = Ze(u, f)) != null && H.writable) && (m = Re(void 0), C(m, se(h, l)), n.set(f, m)) : (g = m.v !== ue, C(m, se(h, l)));
        var S = Reflect.getOwnPropertyDescriptor(u, f);
        if (S != null && S.set && S.set.call(v, h), !g) {
          if (a && typeof f == "string") {
            var j = (
              /** @type {Source<number>} */
              n.get("length")
            ), L = Number(f);
            Number.isInteger(L) && L >= j.v && C(j, L + 1);
          }
          Cn(o);
        }
        return !0;
      },
      ownKeys(u) {
        c(o);
        var f = Reflect.ownKeys(u).filter((m) => {
          var g = n.get(m);
          return g === void 0 || g.v !== ue;
        });
        for (var [h, v] of n)
          v.v !== ue && !(h in u) && f.push(h);
        return f;
      },
      setPrototypeOf() {
        Ws();
      }
    }
  );
}
function Cn(e, t = 1) {
  C(e, e.v + t);
}
var Sn, Xn, Qn, ei;
function Sr() {
  if (Sn === void 0) {
    Sn = window, Xn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype;
    Qn = Ze(t, "firstChild").get, ei = Ze(t, "nextSibling").get, e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function cr(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Qe(e) {
  return Qn.call(e);
}
// @__NO_SIDE_EFFECTS__
function Be(e) {
  return ei.call(e);
}
function q(e, t) {
  if (!M)
    return /* @__PURE__ */ Qe(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Qe(B)
  );
  return r === null && (r = B.appendChild(cr())), Ye(r), r;
}
function zt(e, t) {
  if (!M) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Qe(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Be(r) : r;
  }
  return B;
}
function O(e, t = 1, r = !1) {
  let i = M ? B : e;
  for (var n; t--; )
    n = i, i = /** @type {TemplateNode} */
    /* @__PURE__ */ Be(i);
  if (!M)
    return i;
  var a = i == null ? void 0 : i.nodeType;
  if (r && a !== 3) {
    var o = cr();
    return i === null ? n == null || n.after(o) : i.before(o), Ye(o), o;
  }
  return Ye(i), /** @type {TemplateNode} */
  i;
}
function na(e) {
  e.textContent = "";
}
let Wt = !1, er = !1, tr = null, Xe = !1, Mr = !1;
function $n(e) {
  Mr = e;
}
let Ft = [];
let R = null, Ae = !1;
function Fe(e) {
  R = e;
}
let F = null;
function Le(e) {
  F = e;
}
let Ie = null;
function ia(e) {
  Ie = e;
}
let ie = null, fe = 0, Ne = null;
function sa(e) {
  Ne = e;
}
let ti = 1, rr = 0, He = !1;
function ri() {
  return ++ti;
}
function Kt(e) {
  var v;
  var t = e.f;
  if ((t & Me) !== 0)
    return !0;
  if ((t & wt) !== 0) {
    var r = e.deps, i = (t & pe) !== 0;
    if (r !== null) {
      var n, a, o = (t & Zt) !== 0, l = i && F !== null && !He, u = r.length;
      if (o || l) {
        var f = (
          /** @type {Derived} */
          e
        ), h = f.parent;
        for (n = 0; n < u; n++)
          a = r[n], (o || !((v = a == null ? void 0 : a.reactions) != null && v.includes(f))) && (a.reactions ?? (a.reactions = [])).push(f);
        o && (f.f ^= Zt), l && h !== null && (h.f & pe) === 0 && (f.f ^= pe);
      }
      for (n = 0; n < u; n++)
        if (a = r[n], Kt(
          /** @type {Derived} */
          a
        ) && Zn(
          /** @type {Derived} */
          a
        ), a.wv > e.wv)
          return !0;
    }
    (!i || F !== null && !He) && Pe(e, ve);
  }
  return !1;
}
function aa(e, t) {
  for (var r = t; r !== null; ) {
    if ((r.f & Jt) !== 0)
      try {
        r.fn(e);
        return;
      } catch {
        r.f ^= Jt;
      }
    r = r.parent;
  }
  throw Wt = !1, e;
}
function oa(e) {
  return (e.f & lr) === 0 && (e.parent === null || (e.parent.f & Jt) === 0);
}
function fr(e, t, r, i) {
  if (Wt) {
    if (r === null && (Wt = !1), oa(t))
      throw e;
    return;
  }
  r !== null && (Wt = !0);
  {
    aa(e, t);
    return;
  }
}
function ni(e, t, r = !0) {
  var i = e.reactions;
  if (i !== null)
    for (var n = 0; n < i.length; n++) {
      var a = i[n];
      (a.f & Ce) !== 0 ? ni(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (r ? Pe(a, Me) : (a.f & ve) !== 0 && Pe(a, wt), dr(
        /** @type {Effect} */
        a
      ));
    }
}
function ii(e) {
  var g;
  var t = ie, r = fe, i = Ne, n = R, a = He, o = Ie, l = ae, u = Ae, f = e.f;
  ie = /** @type {null | Value[]} */
  null, fe = 0, Ne = null, He = (f & pe) !== 0 && (Ae || !Xe || R === null), R = (f & (Oe | tt)) === 0 ? e : null, Ie = null, Tn(e.ctx), Ae = !1, rr++;
  try {
    var h = (
      /** @type {Function} */
      (0, e.fn)()
    ), v = e.deps;
    if (ie !== null) {
      var m;
      if (nr(e, fe), v !== null && fe > 0)
        for (v.length = fe + ie.length, m = 0; m < ie.length; m++)
          v[fe + m] = ie[m];
      else
        e.deps = v = ie;
      if (!He)
        for (m = fe; m < v.length; m++)
          ((g = v[m]).reactions ?? (g.reactions = [])).push(e);
    } else v !== null && fe < v.length && (nr(e, fe), v.length = fe);
    if (di() && Ne !== null && !Ae && v !== null && (e.f & (Ce | wt | Me)) === 0)
      for (m = 0; m < /** @type {Source[]} */
      Ne.length; m++)
        ni(
          Ne[m],
          /** @type {Effect} */
          e
        );
    return n !== null && rr++, h;
  } finally {
    ie = t, fe = r, Ne = i, R = n, He = a, Ie = o, Tn(l), Ae = u;
  }
}
function la(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var i = Ls.call(r, e);
    if (i !== -1) {
      var n = r.length - 1;
      n === 0 ? r = t.reactions = null : (r[i] = r[n], r.pop());
    }
  }
  r === null && (t.f & Ce) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ie === null || !ie.includes(t)) && (Pe(t, wt), (t.f & (pe | Zt)) === 0 && (t.f ^= Zt), Jn(
    /** @type {Derived} **/
    t
  ), nr(
    /** @type {Derived} **/
    t,
    0
  ));
}
function nr(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var i = t; i < r.length; i++)
      la(e, r[i]);
}
function Br(e) {
  var t = e.f;
  if ((t & lr) === 0) {
    Pe(e, ve);
    var r = F, i = ae, n = Xe;
    F = e, Xe = !0;
    try {
      (t & Ur) !== 0 ? wa(e) : oi(e), ai(e);
      var a = ii(e);
      e.teardown = typeof a == "function" ? a : null, e.wv = ti;
      var o = e.deps, l;
      kn && Zs && e.f & Me;
    } catch (u) {
      fr(u, e, r, i || e.ctx);
    } finally {
      Xe = n, F = r;
    }
  }
}
function ua() {
  try {
    qs();
  } catch (e) {
    if (tr !== null)
      fr(e, tr, null);
    else
      throw e;
  }
}
function si() {
  var e = Xe;
  try {
    var t = 0;
    for (Xe = !0; Ft.length > 0; ) {
      t++ > 1e3 && ua();
      var r = Ft, i = r.length;
      Ft = [];
      for (var n = 0; n < i; n++) {
        var a = fa(r[n]);
        ca(a);
      }
    }
  } finally {
    er = !1, Xe = e, tr = null;
  }
}
function ca(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var i = e[r];
      if ((i.f & (lr | gt)) === 0)
        try {
          Kt(i) && (Br(i), i.deps === null && i.first === null && i.nodes_start === null && (i.teardown === null ? li(i) : i.fn = null));
        } catch (n) {
          fr(n, i, null, i.ctx);
        }
    }
}
function dr(e) {
  er || (er = !0, queueMicrotask(si));
  for (var t = tr = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if ((r & (tt | Oe)) !== 0) {
      if ((r & ve) === 0) return;
      t.f ^= ve;
    }
  }
  Ft.push(t);
}
function fa(e) {
  for (var t = [], r = e; r !== null; ) {
    var i = r.f, n = (i & (Oe | tt)) !== 0, a = n && (i & ve) !== 0;
    if (!a && (i & gt) === 0) {
      if ((i & On) !== 0)
        t.push(r);
      else if (n)
        r.f ^= ve;
      else {
        var o = R;
        try {
          R = r, Kt(r) && Br(r);
        } catch (f) {
          fr(f, r, null, r.ctx);
        } finally {
          R = o;
        }
      }
      var l = r.first;
      if (l !== null) {
        r = l;
        continue;
      }
    }
    var u = r.parent;
    for (r = r.next; r === null && u !== null; )
      r = u.next, u = u.parent;
  }
  return t;
}
function $(e) {
  var t;
  for (An(); Ft.length > 0; )
    er = !0, si(), An();
  return (
    /** @type {T} */
    t
  );
}
async function da() {
  await Promise.resolve(), $();
}
function c(e) {
  var t = e.f, r = (t & Ce) !== 0;
  if (R !== null && !Ae) {
    Ie !== null && Ie.includes(e) && Gs();
    var i = R.deps;
    e.rv < rr && (e.rv = rr, ie === null && i !== null && i[fe] === e ? fe++ : ie === null ? ie = [e] : (!He || !ie.includes(e)) && ie.push(e));
  } else if (r && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var n = (
      /** @type {Derived} */
      e
    ), a = n.parent;
    a !== null && (a.f & pe) === 0 && (n.f ^= pe);
  }
  return r && (n = /** @type {Derived} */
  e, Kt(n) && Zn(n)), e.v;
}
function et(e) {
  var t = Ae;
  try {
    return Ae = !0, e();
  } finally {
    Ae = t;
  }
}
const ha = -7169;
function Pe(e, t) {
  e.f = e.f & ha | t;
}
function va(e) {
  F === null && R === null && Ks(), R !== null && (R.f & pe) !== 0 && F === null && Vs(), Mr && js();
}
function ma(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function rt(e, t, r, i = !0) {
  var n = F, a = {
    ctx: ae,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Me,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: n,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (r)
    try {
      Br(a), a.f |= Ts;
    } catch (u) {
      throw De(a), u;
    }
  else t !== null && dr(a);
  var o = r && a.deps === null && a.first === null && a.nodes_start === null && a.teardown === null && (a.f & (Mn | Jt)) === 0;
  if (!o && i && (n !== null && ma(a, n), R !== null && (R.f & Ce) !== 0)) {
    var l = (
      /** @type {Derived} */
      R
    );
    (l.effects ?? (l.effects = [])).push(a);
  }
  return a;
}
function ga(e) {
  const t = rt(or, null, !1);
  return Pe(t, ve), t.teardown = e, t;
}
function ir(e) {
  va();
  var t = F !== null && (F.f & Oe) !== 0 && ae !== null && !ae.m;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      ae
    );
    (r.e ?? (r.e = [])).push({
      fn: e,
      effect: F,
      reaction: R
    });
  } else {
    var i = jr(e);
    return i;
  }
}
function pa(e) {
  const t = rt(tt, e, !0);
  return () => {
    De(t);
  };
}
function ya(e) {
  const t = rt(tt, e, !0);
  return (r = {}) => new Promise((i) => {
    r.outro ? $r(t, () => {
      De(t), i(void 0);
    }) : (De(t), i(void 0));
  });
}
function jr(e) {
  return rt(On, e, !1);
}
function hr(e) {
  return rt(or, e, !0);
}
function de(e, t = [], r = Je) {
  const i = t.map(r);
  return Vr(() => e(...i.map(c)));
}
function Vr(e, t = 0) {
  return rt(or | Ur | t, e, !0);
}
function sr(e, t = !0) {
  return rt(or | Oe, e, !0, t);
}
function ai(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Mr, i = R;
    $n(!0), Fe(null);
    try {
      t.call(null);
    } finally {
      $n(r), Fe(i);
    }
  }
}
function oi(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var i = r.next;
    (r.f & tt) !== 0 ? r.parent = null : De(r, t), r = i;
  }
}
function wa(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Oe) === 0 && De(t), t = r;
  }
}
function De(e, t = !0) {
  var r = !1;
  if ((t || (e.f & Is) !== 0) && e.nodes_start !== null) {
    for (var i = e.nodes_start, n = e.nodes_end; i !== null; ) {
      var a = i === n ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Be(i)
      );
      i.remove(), i = a;
    }
    r = !0;
  }
  oi(e, t && !r), nr(e, 0), Pe(e, lr);
  var o = e.transitions;
  if (o !== null)
    for (const u of o)
      u.stop();
  ai(e);
  var l = e.parent;
  l !== null && l.first !== null && li(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function li(e) {
  var t = e.parent, r = e.prev, i = e.next;
  r !== null && (r.next = i), i !== null && (i.prev = r), t !== null && (t.first === e && (t.first = i), t.last === e && (t.last = r));
}
function $r(e, t) {
  var r = [];
  ui(e, r, !0), _a(r, () => {
    De(e), t && t();
  });
}
function _a(e, t) {
  var r = e.length;
  if (r > 0) {
    var i = () => --r || t();
    for (var n of e)
      n.out(i);
  } else
    t();
}
function ui(e, t, r) {
  if ((e.f & gt) === 0) {
    if (e.f ^= gt, e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || r) && t.push(o);
    for (var i = e.first; i !== null; ) {
      var n = i.next, a = (i.f & Dr) !== 0 || (i.f & Oe) !== 0;
      ui(i, t, a ? r : !1), i = n;
    }
  }
}
function Rn(e) {
  ci(e, !0);
}
function ci(e, t) {
  if ((e.f & gt) !== 0) {
    e.f ^= gt, (e.f & ve) === 0 && (e.f ^= ve), Kt(e) && (Pe(e, Me), dr(e));
    for (var r = e.first; r !== null; ) {
      var i = r.next, n = (r.f & Dr) !== 0 || (r.f & Oe) !== 0;
      ci(r, n ? t : !1), r = i;
    }
    if (e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || t) && a.in();
  }
}
function fi(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let ae = null;
function Tn(e) {
  ae = e;
}
function Kr(e, t = !1, r) {
  ae = {
    p: ae,
    c: null,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
}
function qr(e) {
  const t = ae;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const o = t.e;
    if (o !== null) {
      var r = F, i = R;
      t.e = null;
      try {
        for (var n = 0; n < o.length; n++) {
          var a = o[n];
          Le(a.effect), Fe(a.reaction), jr(a.fn);
        }
      } finally {
        Le(r), Fe(i);
      }
    }
    ae = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function di() {
  return !0;
}
const ba = ["touchstart", "touchmove"];
function Ea(e) {
  return ba.includes(e);
}
let In = !1;
function hi() {
  In || (In = !0, document.addEventListener(
    "reset",
    (e) => {
      Promise.resolve().then(() => {
        var t;
        if (!e.defaultPrevented)
          for (
            const r of
            /**@type {HTMLFormElement} */
            e.target.elements
          )
            (t = r.__on_r) == null || t.call(r);
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
    { capture: !0 }
  ));
}
function vi(e) {
  var t = R, r = F;
  Fe(null), Le(null);
  try {
    return e();
  } finally {
    Fe(t), Le(r);
  }
}
function mi(e, t, r, i = r) {
  e.addEventListener(t, () => vi(r));
  const n = e.__on_r;
  n ? e.__on_r = () => {
    n(), i(!0);
  } : e.__on_r = () => i(!0), hi();
}
const gi = /* @__PURE__ */ new Set(), Rr = /* @__PURE__ */ new Set();
function xa(e, t, r, i = {}) {
  function n(a) {
    if (i.capture || Tt.call(t, a), !a.cancelBubble)
      return vi(() => r == null ? void 0 : r.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Or(() => {
    t.addEventListener(e, n, i);
  }) : t.addEventListener(e, n, i), n;
}
function Ee(e, t, r, i, n) {
  var a = { capture: i, passive: n }, o = xa(e, t, r, a);
  (t === document.body || t === window || t === document) && ga(() => {
    t.removeEventListener(e, o, a);
  });
}
function ka(e) {
  for (var t = 0; t < e.length; t++)
    gi.add(e[t]);
  for (var r of Rr)
    r(e);
}
function Tt(e) {
  var L;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), i = e.type, n = ((L = e.composedPath) == null ? void 0 : L.call(e)) || [], a = (
    /** @type {null | Element} */
    n[0] || e.target
  ), o = 0, l = e.__root;
  if (l) {
    var u = n.indexOf(l);
    if (u !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var f = n.indexOf(t);
    if (f === -1)
      return;
    u <= f && (o = u);
  }
  if (a = /** @type {Element} */
  n[o] || e.target, a !== t) {
    Qt(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      }
    });
    var h = R, v = F;
    Fe(null), Le(null);
    try {
      for (var m, g = []; a !== null; ) {
        var _ = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var A = a["__" + i];
          if (A != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a))
            if (jn(A)) {
              var [S, ...j] = A;
              S.apply(a, [e, ...j]);
            } else
              A.call(a, e);
        } catch (H) {
          m ? g.push(H) : m = H;
        }
        if (e.cancelBubble || _ === t || _ === null)
          break;
        a = _;
      }
      if (m) {
        for (let H of g)
          queueMicrotask(() => {
            throw H;
          });
        throw m;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Fe(h), Le(v);
    }
  }
}
function pi(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function ze(e, t) {
  var r = (
    /** @type {Effect} */
    F
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function ye(e, t) {
  var r = (t & Ss) !== 0, i = (t & $s) !== 0, n, a = !e.startsWith("<!>");
  return () => {
    if (M)
      return ze(B, null), B;
    n === void 0 && (n = pi(a ? e : "<!>" + e), r || (n = /** @type {Node} */
    /* @__PURE__ */ Qe(n)));
    var o = (
      /** @type {TemplateNode} */
      i || Xn ? document.importNode(n, !0) : n.cloneNode(!0)
    );
    if (r) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Qe(o)
      ), u = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      ze(l, u);
    } else
      ze(o, o);
    return o;
  };
}
function Er() {
  if (M)
    return ze(B, null), B;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = cr();
  return e.append(t, r), ze(t, r), e;
}
function re(e, t) {
  if (M) {
    F.nodes_end = B, pt();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Aa(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = r + "");
}
function Hr(e, t) {
  return yi(e, t);
}
function Ca(e, t) {
  Sr(), t.intro = t.intro ?? !1;
  const r = t.target, i = M, n = B;
  try {
    for (var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Qe(r)
    ); a && (a.nodeType !== 8 || /** @type {Comment} */
    a.data !== Nr); )
      a = /** @type {TemplateNode} */
      /* @__PURE__ */ Be(a);
    if (!a)
      throw ht;
    qe(!0), Ye(
      /** @type {Comment} */
      a
    ), pt();
    const o = yi(e, { ...t, anchor: a });
    if (B === null || B.nodeType !== 8 || /** @type {Comment} */
    B.data !== Dn)
      throw ur(), ht;
    return qe(!1), /**  @type {Exports} */
    o;
  } catch (o) {
    if (o === ht)
      return t.recover === !1 && Hs(), Sr(), na(r), qe(!1), Hr(e, t);
    throw o;
  } finally {
    qe(i), Ye(n);
  }
}
const ct = /* @__PURE__ */ new Map();
function yi(e, { target: t, anchor: r, props: i = {}, events: n, context: a, intro: o = !0 }) {
  Sr();
  var l = /* @__PURE__ */ new Set(), u = (v) => {
    for (var m = 0; m < v.length; m++) {
      var g = v[m];
      if (!l.has(g)) {
        l.add(g);
        var _ = Ea(g);
        t.addEventListener(g, Tt, { passive: _ });
        var A = ct.get(g);
        A === void 0 ? (document.addEventListener(g, Tt, { passive: _ }), ct.set(g, 1)) : ct.set(g, A + 1);
      }
    }
  };
  u(Ps(gi)), Rr.add(u);
  var f = void 0, h = ya(() => {
    var v = r ?? t.appendChild(cr());
    return sr(() => {
      if (a) {
        Kr({});
        var m = (
          /** @type {ComponentContext} */
          ae
        );
        m.c = a;
      }
      n && (i.$$events = n), M && ze(
        /** @type {TemplateNode} */
        v,
        null
      ), f = e(v, i) || {}, M && (F.nodes_end = B), a && qr();
    }), () => {
      var _;
      for (var m of l) {
        t.removeEventListener(m, Tt);
        var g = (
          /** @type {number} */
          ct.get(m)
        );
        --g === 0 ? (document.removeEventListener(m, Tt), ct.delete(m)) : ct.set(m, g);
      }
      Rr.delete(u), v !== r && ((_ = v.parentNode) == null || _.removeChild(v));
    };
  });
  return Tr.set(f, h), f;
}
let Tr = /* @__PURE__ */ new WeakMap();
function Sa(e, t) {
  const r = Tr.get(e);
  return r ? (Tr.delete(e), r(t)) : Promise.resolve();
}
function xe(e, t, [r, i] = [0, 0]) {
  M && r === 0 && pt();
  var n = e, a = null, o = null, l = ue, u = r > 0 ? Dr : 0, f = !1;
  const h = (m, g = !0) => {
    f = !0, v(g, m);
  }, v = (m, g) => {
    if (l === (l = m)) return;
    let _ = !1;
    if (M && i !== -1) {
      if (r === 0) {
        const S = (
          /** @type {Comment} */
          n.data
        );
        S === Nr ? i = 0 : S === Un ? i = 1 / 0 : (i = parseInt(S.substring(1)), i !== i && (i = l ? 1 / 0 : -1));
      }
      const A = i > r;
      !!l === A && (n = ra(), Ye(n), qe(!1), _ = !0, i = -1);
    }
    l ? (a ? Rn(a) : g && (a = sr(() => g(n))), o && $r(o, () => {
      o = null;
    })) : (o ? Rn(o) : g && (o = sr(() => g(n, [r + 1, i]))), a && $r(a, () => {
      a = null;
    })), _ && qe(!0);
  };
  Vr(() => {
    f = !1, t(h), f || v(null, null);
  }, u), M && (n = B);
}
function ft(e, t, r, i, n) {
  var a = e, o = "", l;
  Vr(() => {
    if (o === (o = t() ?? "")) {
      M && pt();
      return;
    }
    l !== void 0 && (De(l), l = void 0), o !== "" && (l = sr(() => {
      if (M) {
        B.data;
        for (var u = pt(), f = u; u !== null && (u.nodeType !== 8 || /** @type {Comment} */
        u.data !== ""); )
          f = u, u = /** @type {TemplateNode} */
          /* @__PURE__ */ Be(u);
        if (u === null)
          throw ur(), ht;
        ze(B, f), a = Ye(u);
        return;
      }
      var h = o + "", v = pi(h);
      ze(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Qe(v),
        /** @type {TemplateNode} */
        v.lastChild
      ), a.before(v);
    }));
  });
}
function $a(e, t, r, i, n) {
  var l;
  M && pt();
  var a = (l = t.$$slots) == null ? void 0 : l[r], o = !1;
  a === !0 && (a = t.children, o = !0), a === void 0 || a(e, o ? () => i : i);
}
function wi(e, t) {
  Or(() => {
    var r = e.getRootNode(), i = (
      /** @type {ShadowRoot} */
      r.host ? (
        /** @type {ShadowRoot} */
        r
      ) : (
        /** @type {Document} */
        r.head ?? /** @type {Document} */
        r.ownerDocument.head
      )
    );
    if (!i.querySelector("#" + t.hash)) {
      const n = document.createElement("style");
      n.id = t.hash, n.textContent = t.code, i.appendChild(n);
    }
  });
}
const Ra = Symbol("is custom element"), Ta = Symbol("is html");
function dt(e) {
  if (M) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var i = e.value;
          ce(e, "value", null), e.value = i;
        }
        if (e.hasAttribute("checked")) {
          var n = e.checked;
          ce(e, "checked", null), e.checked = n;
        }
      }
    };
    e.__on_r = r, Ms(r), hi();
  }
}
function Ia(e, t) {
  var r = _i(e);
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function ce(e, t, r, i) {
  var n = _i(e);
  M && (n[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || n[t] !== (n[t] = r) && (t === "loading" && (e[Fs] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && bi(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function te(e, t, r) {
  var i = R, n = F;
  let a = M;
  M && qe(!1), Fe(null), Le(null);
  try {
    // `style` should use `set_attribute` rather than the setter
    t !== "style" && // Don't compute setters for custom elements while they aren't registered yet,
    // because during their upgrade/instantiation they might add more setters.
    // Instead, fall back to a simple "an object, then set as property" heuristic.
    (Ir.has(e.nodeName) || // customElements may not be available in browser extension contexts
    !customElements || customElements.get(e.tagName.toLowerCase()) ? bi(e).includes(t) : r && typeof r == "object") ? e[t] = r : ce(e, t, r == null ? r : String(r));
  } finally {
    Fe(i), Le(n), a && qe(!0);
  }
}
function _i(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Ra]: e.nodeName.includes("-"),
      [Ta]: e.namespaceURI === Rs
    })
  );
}
var Ir = /* @__PURE__ */ new Map();
function bi(e) {
  var t = Ir.get(e.nodeName);
  if (t) return t;
  Ir.set(e.nodeName, t = []);
  for (var r, i = e, n = Element.prototype; n !== i; ) {
    r = Ns(i);
    for (var a in r)
      r[a].set && t.push(a);
    i = Vn(i);
  }
  return t;
}
function Fn(e, t, r = t) {
  mi(e, "input", (i) => {
    var n = i ? e.defaultValue : e.value;
    if (n = xr(e) ? kr(n) : n, r(n), n !== (n = t())) {
      var a = e.selectionStart, o = e.selectionEnd;
      e.value = n ?? "", o !== null && (e.selectionStart = a, e.selectionEnd = Math.min(o, e.value.length));
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  (M && e.defaultValue !== e.value || // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  et(t) == null && e.value) && r(xr(e) ? kr(e.value) : e.value), hr(() => {
    var i = t();
    xr(e) && i === kr(e.value) || e.type === "date" && !i && !e.value || i !== e.value && (e.value = i ?? "");
  });
}
function Fr(e, t, r = t) {
  mi(e, "change", (i) => {
    var n = i ? e.defaultChecked : e.checked;
    r(n);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  (M && e.defaultChecked !== e.checked || // If defaultChecked is set, then checked == defaultChecked
  et(t) == null) && r(e.checked), hr(() => {
    var i = t();
    e.checked = !!i;
  });
}
function xr(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function kr(e) {
  return e === "" ? null : +e;
}
function Ln(e, t) {
  return e === t || (e == null ? void 0 : e[It]) === t;
}
function Lt(e = {}, t, r, i) {
  return jr(() => {
    var n, a;
    return hr(() => {
      n = a, a = [], et(() => {
        e !== r(...a) && (t(e, ...a), n && Ln(r(...n), e) && t(null, ...n));
      });
    }), () => {
      Or(() => {
        a && Ln(r(...a), e) && t(null, ...a);
      });
    };
  }), e;
}
function zr(e) {
  ae === null && fi(), ir(() => {
    const t = et(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Fa(e) {
  ae === null && fi(), zr(() => () => et(e));
}
let Yt = !1;
function La(e) {
  var t = Yt;
  try {
    return Yt = !1, [e(), Yt];
  } finally {
    Yt = t;
  }
}
function I(e, t, r, i) {
  var Se;
  var n = (r & xs) !== 0, a = !0, o = (r & As) !== 0, l = (r & Cs) !== 0, u = !1, f;
  o ? [f, u] = La(() => (
    /** @type {V} */
    e[t]
  )) : f = /** @type {V} */
  e[t];
  var h = It in e || Bn in e, v = o && (((Se = Ze(e, t)) == null ? void 0 : Se.set) ?? (h && t in e && ((z) => e[t] = z))) || void 0, m = (
    /** @type {V} */
    i
  ), g = !0, _ = !1, A = () => (_ = !0, g && (g = !1, l ? m = et(
    /** @type {() => V} */
    i
  ) : m = /** @type {V} */
  i), m);
  f === void 0 && i !== void 0 && (v && a && zs(), f = A(), v && v(f));
  var S;
  if (S = () => {
    var z = (
      /** @type {V} */
      e[t]
    );
    return z === void 0 ? A() : (g = !0, _ = !1, z);
  }, (r & ks) === 0)
    return S;
  if (v) {
    var j = e.$$legacy;
    return function(z, W) {
      return arguments.length > 0 ? ((!W || j || u) && v(W ? S() : z), z) : S();
    };
  }
  var L = !1, H = /* @__PURE__ */ Wn(f), Z = /* @__PURE__ */ Je(() => {
    var z = S(), W = c(H);
    return L ? (L = !1, W) : H.v = z;
  });
  return n || (Z.equals = Yn), function(z, W) {
    if (arguments.length > 0) {
      const we = W ? c(Z) : o ? se(z) : z;
      return Z.equals(we) || (L = !0, C(H, we), _ && m !== void 0 && (m = we), et(() => c(Z))), z;
    }
    return c(Z);
  };
}
function Pa(e) {
  return new Na(e);
}
var Ue, ge;
class Na {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    Q(this, Ue);
    /** @type {Record<string, any>} */
    Q(this, ge);
    var a;
    var r = /* @__PURE__ */ new Map(), i = (o, l) => {
      var u = /* @__PURE__ */ Wn(l);
      return r.set(o, u), u;
    };
    const n = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(o, l) {
          return c(r.get(l) ?? i(l, Reflect.get(o, l)));
        },
        has(o, l) {
          return l === Bn ? !0 : (c(r.get(l) ?? i(l, Reflect.get(o, l))), Reflect.has(o, l));
        },
        set(o, l, u) {
          return C(r.get(l) ?? i(l, u), u), Reflect.set(o, l, u);
        }
      }
    );
    ut(this, ge, (t.hydrate ? Ca : Hr)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: n,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((a = t == null ? void 0 : t.props) != null && a.$$host) || t.sync === !1) && $(), ut(this, Ue, n.$$events);
    for (const o of Object.keys(w(this, ge)))
      o === "$set" || o === "$destroy" || o === "$on" || Qt(this, o, {
        get() {
          return w(this, ge)[o];
        },
        /** @param {any} value */
        set(l) {
          w(this, ge)[o] = l;
        },
        enumerable: !0
      });
    w(this, ge).$set = /** @param {Record<string, any>} next */
    (o) => {
      Object.assign(n, o);
    }, w(this, ge).$destroy = () => {
      Sa(w(this, ge));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    w(this, ge).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    w(this, Ue)[t] = w(this, Ue)[t] || [];
    const i = (...n) => r.call(this, ...n);
    return w(this, Ue)[t].push(i), () => {
      w(this, Ue)[t] = w(this, Ue)[t].filter(
        /** @param {any} fn */
        (n) => n !== i
      );
    };
  }
  $destroy() {
    w(this, ge).$destroy();
  }
}
Ue = new WeakMap(), ge = new WeakMap();
let Ei;
typeof HTMLElement == "function" && (Ei = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, r, i) {
    super();
    /** The Svelte component constructor */
    k(this, "$$ctor");
    /** Slots */
    k(this, "$$s");
    /** @type {any} The Svelte component instance */
    k(this, "$$c");
    /** Whether or not the custom element is connected */
    k(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    k(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    k(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    k(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    k(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    k(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    k(this, "$$me");
    this.$$ctor = t, this.$$s = r, i && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(t, r, i) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(r), this.$$c) {
      const n = this.$$c.$on(t, r);
      this.$$l_u.set(r, n);
    }
    super.addEventListener(t, r, i);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(t, r, i) {
    if (super.removeEventListener(t, r, i), this.$$c) {
      const n = this.$$l_u.get(r);
      n && (n(), this.$$l_u.delete(r));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(n) {
        return (a) => {
          const o = document.createElement("slot");
          n !== "default" && (o.name = n), re(a, o);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, i = Ua(this);
      for (const n of this.$$s)
        n in i && (n === "default" && !this.$$d.children ? (this.$$d.children = t(n), r.default = !0) : r[n] = t(n));
      for (const n of this.attributes) {
        const a = this.$$g_p(n.name);
        a in this.$$d || (this.$$d[a] = Gt(a, n.value, this.$$p_d, "toProp"));
      }
      for (const n in this.$$p_d)
        !(n in this.$$d) && this[n] !== void 0 && (this.$$d[n] = this[n], delete this[n]);
      this.$$c = Pa({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = pa(() => {
        hr(() => {
          var n;
          this.$$r = !0;
          for (const a of Xt(this.$$c)) {
            if (!((n = this.$$p_d[a]) != null && n.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const o = Gt(
              a,
              this.$$d[a],
              this.$$p_d,
              "toAttribute"
            );
            o == null ? this.removeAttribute(this.$$p_d[a].attribute || a) : this.setAttribute(this.$$p_d[a].attribute || a, o);
          }
          this.$$r = !1;
        });
      });
      for (const n in this.$$l)
        for (const a of this.$$l[n]) {
          const o = this.$$c.$on(n, a);
          this.$$l_u.set(a, o);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  /**
   * @param {string} attr
   * @param {string} _oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(t, r, i) {
    var n;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = Gt(t, i, this.$$p_d, "toProp"), (n = this.$$c) == null || n.$set({ [t]: this.$$d[t] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(t) {
    return Xt(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function Gt(e, t, r, i) {
  var a;
  const n = (a = r[e]) == null ? void 0 : a.type;
  if (t = n === "Boolean" && typeof t != "boolean" ? t != null : t, !i || !r[e])
    return t;
  if (i === "toAttribute")
    switch (n) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t ?? null;
      default:
        return t;
    }
  else
    switch (n) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
        return t;
      // conversion already handled above
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
}
function Ua(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function xi(e, t, r, i, n, a) {
  let o = class extends Ei {
    constructor() {
      super(e, r, n), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Xt(t).map(
        (l) => (t[l].attribute || l).toLowerCase()
      );
    }
  };
  return Xt(t).forEach((l) => {
    Qt(o.prototype, l, {
      get() {
        return this.$$c && l in this.$$c ? this.$$c[l] : this.$$d[l];
      },
      set(u) {
        var v;
        u = Gt(l, u, t), this.$$d[l] = u;
        var f = this.$$c;
        if (f) {
          var h = (v = Ze(f, l)) == null ? void 0 : v.get;
          h ? f[l] = u : f.$set({ [l]: u });
        }
      }
    });
  }), i.forEach((l) => {
    Qt(o.prototype, l, {
      get() {
        var u;
        return (u = this.$$c) == null ? void 0 : u[l];
      }
    });
  }), e.element = /** @type {any} */
  o, o;
}
const ki = `(function(){"use strict";const d=new TextEncoder;function p(e){return[...new Uint8Array(e)].map(t=>t.toString(16).padStart(2,"0")).join("")}async function b(e,t,r){if(typeof crypto>"u"||!("subtle"in crypto)||!("digest"in crypto.subtle))throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");return p(await crypto.subtle.digest(r.toUpperCase(),d.encode(e+t)))}function w(e,t,r="SHA-256",n=1e6,s=0){const o=new AbortController,a=Date.now();return{promise:(async()=>{for(let c=s;c<=n;c+=1){if(o.signal.aborted)return null;if(await b(t,c,r)===e)return{number:c,took:Date.now()-a}}return null})(),controller:o}}function h(e){const t=atob(e),r=new Uint8Array(t.length);for(let n=0;n<t.length;n++)r[n]=t.charCodeAt(n);return r}function g(e,t=12){const r=new Uint8Array(t);for(let n=0;n<t;n++)r[n]=e%256,e=Math.floor(e/256);return r}async function m(e,t="",r=1e6,n=0){const s="AES-GCM",o=new AbortController,a=Date.now(),l=async()=>{for(let u=n;u<=r;u+=1){if(o.signal.aborted||!c||!y)return null;try{const f=await crypto.subtle.decrypt({name:s,iv:g(u)},c,y);if(f)return{clearText:new TextDecoder().decode(f),took:Date.now()-a}}catch{}}return null};let c=null,y=null;try{y=h(e);const u=await crypto.subtle.digest("SHA-256",d.encode(t));c=await crypto.subtle.importKey("raw",u,s,!1,["decrypt"])}catch{return{promise:Promise.reject(),controller:o}}return{promise:l(),controller:o}}let i;onmessage=async e=>{const{type:t,payload:r,start:n,max:s}=e.data;let o=null;if(t==="abort")i==null||i.abort(),i=void 0;else if(t==="work"){if("obfuscated"in r){const{key:a,obfuscated:l}=r||{};o=await m(l,a,s,n)}else{const{algorithm:a,challenge:l,salt:c}=r||{};o=w(l,c,a,s,n)}i=o.controller,o.promise.then(a=>{self.postMessage(a&&{...a,worker:!0})})}}})();
`, Pn = typeof self < "u" && self.Blob && new Blob([ki], { type: "text/javascript;charset=utf-8" });
function Da(e) {
  let t;
  try {
    if (t = Pn && (self.URL || self.webkitURL).createObjectURL(Pn), !t) throw "";
    const r = new Worker(t, {
      name: e == null ? void 0 : e.name
    });
    return r.addEventListener("error", () => {
      (self.URL || self.webkitURL).revokeObjectURL(t);
    }), r;
  } catch {
    return new Worker(
      "data:text/javascript;charset=utf-8," + encodeURIComponent(ki),
      {
        name: e == null ? void 0 : e.name
      }
    );
  } finally {
    t && (self.URL || self.webkitURL).revokeObjectURL(t);
  }
}
class nt {
  /**
   * Constructs a new instance of the Plugin.
   * 
   * @param {PluginContext} context - The context provided to the plugin, containing necessary configurations and dependencies.
   */
  constructor(t) {
    this.context = t;
  }
  /**
   * Registers a plugin class in the global `altchaPlugins` array.
   * Ensures the plugin is added only once.
   * 
   * @param {new(context: PluginContext) => Plugin} cls - The plugin class to register.
   */
  static register(t) {
    typeof globalThis.altchaPlugins != "object" && (globalThis.altchaPlugins = []), globalThis.altchaPlugins.includes(t) || globalThis.altchaPlugins.push(t);
  }
  /**
   * Clean up resources when the plugin is destroyed.
   * Override this method in subclasses to implement custom destruction logic.
   */
  destroy() {
  }
  /**
   * Callback triggered when an error changes.
   * Override this method in subclasses to handle error state changes.
   * 
   * @param {string | null} err - The error message or `null` if there's no error.
   */
  onErrorChange(t) {
  }
  /**
   * Callback triggered when the plugin state changes.
   * Override this method in subclasses to handle state changes.
   * 
   * @param {State} state - The new state of the plugin.
   */
  onStateChange(t) {
  }
}
/**
 * A distinct name of the plugin. Every plugin must have it's own name.
 */
k(nt, "pluginName");
var b = /* @__PURE__ */ ((e) => (e.ERROR = "error", e.VERIFIED = "verified", e.VERIFYING = "verifying", e.UNVERIFIED = "unverified", e.EXPIRED = "expired", e))(b || {}), Ut, yt, Ci, Si;
class Ai extends nt {
  /**
   * Creates an instance of PluginObfuscation.
   *
   * @param {PluginContext} context - The context object containing plugin configurations.
   */
  constructor(r) {
    var n, a;
    super(r);
    Q(this, yt);
    // The button element associated with revealing the obfuscated data
    k(this, "elButton");
    // Bound method for handling button click events
    Q(this, Ut, ee(this, yt, Ci).bind(this));
    const i = r.el;
    this.elButton = ((n = i.parentElement) == null ? void 0 : n.querySelector("[data-clarify-button]")) || ((a = i.parentElement) == null ? void 0 : a.querySelector("button, a")), this.elButton && this.elButton.addEventListener("click", w(this, Ut));
  }
  /**
   * Destroys the plugin instance, removing event listeners.
   */
  destroy() {
    this.elButton && this.elButton.removeEventListener("click", w(this, Ut));
  }
  /**
   * Handles the clarification process by decrypting the obfuscated data and rendering the clear text.
   */
  async clarify() {
    const {
      el: r,
      getConfiguration: i,
      getFloatingAnchor: n,
      setFloatingAnchor: a,
      reset: o,
      solve: l,
      setState: u
    } = this.context, { delay: f, floating: h, maxnumber: v, obfuscated: m } = i();
    if (this.elButton && !n() && a(this.elButton), !m) {
      u(b.ERROR);
      return;
    }
    o(b.VERIFYING), await new Promise((L) => setTimeout(L, f || 0));
    const [g, _] = m.split("?");
    let S = new URLSearchParams(_ || "").get("key") || void 0;
    if (S) {
      const L = S.match(/^\(prompt:?(.*)\)$/);
      L && (S = prompt(L[1] || "Enter Key:") || void 0);
    }
    const { solution: j } = await l({
      obfuscated: g,
      key: S,
      maxnumber: v
    });
    j && "clearText" in j ? (ee(this, yt, Si).call(this, j.clearText), u(b.VERIFIED), this.context.dispatch("cleartext", j.clearText), h && r && (r.style.display = "none")) : u(b.ERROR, "Unable to decrypt data.");
  }
}
Ut = new WeakMap(), yt = new WeakSet(), /**
 * Handles the button click event, triggering the clarification process.
 *
 * @param {Event} ev - The click event.
 */
Ci = function(r) {
  r.preventDefault();
  const { auto: i } = this.context.getConfiguration();
  i === "off" || this.clarify();
}, /**
 * Renders the clear text data by creating an appropriate element (e.g., a link or text node).
 *
 * @param {string} clearText - The decrypted clear text data to render.
 */
Si = function(r) {
  var a;
  const i = r.match(/^(mailto|tel|sms|https?):/);
  let n;
  if (i) {
    const [o] = r.slice(r.indexOf(":") + 1).replace(/^\/\//, "").split("?");
    n = document.createElement("a"), n.href = r, n.innerHTML = o;
  } else
    n = document.createTextNode(r);
  this.elButton && n && (this.elButton.after(n), (a = this.elButton.parentElement) == null || a.removeChild(this.elButton));
}, k(Ai, "pluginName", "obfuscation");
nt.register(Ai);
const $i = new TextEncoder();
function Oa(e) {
  return [...new Uint8Array(e)].map((t) => t.toString(16).padStart(2, "0")).join("");
}
async function Ma(e, t = "SHA-256", r = 1e5) {
  const i = Date.now().toString(16);
  e || (e = Math.round(Math.random() * r));
  const n = await Ri(i, e, t);
  return {
    algorithm: t,
    challenge: n,
    salt: i,
    signature: ""
  };
}
async function Ri(e, t, r) {
  if (typeof crypto > "u" || !("subtle" in crypto) || !("digest" in crypto.subtle))
    throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");
  return Oa(
    await crypto.subtle.digest(
      r.toUpperCase(),
      $i.encode(e + t)
    )
  );
}
function Ba(e, t, r = "SHA-256", i = 1e6, n = 0) {
  const a = new AbortController(), o = Date.now();
  return {
    promise: (async () => {
      for (let u = n; u <= i; u += 1) {
        if (a.signal.aborted)
          return null;
        if (await Ri(t, u, r) === e)
          return {
            number: u,
            took: Date.now() - o
          };
      }
      return null;
    })(),
    controller: a
  };
}
function Ti() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function ja(e) {
  const t = atob(e), r = new Uint8Array(t.length);
  for (let i = 0; i < t.length; i++)
    r[i] = t.charCodeAt(i);
  return r;
}
function Va(e, t = 12) {
  const r = new Uint8Array(t);
  for (let i = 0; i < t; i++)
    r[i] = e % 256, e = Math.floor(e / 256);
  return r;
}
async function Ka(e, t = "", r = 1e6, i = 0) {
  const n = "AES-GCM", a = new AbortController(), o = Date.now(), l = async () => {
    for (let h = i; h <= r; h += 1) {
      if (a.signal.aborted || !u || !f)
        return null;
      try {
        const v = await crypto.subtle.decrypt(
          {
            name: n,
            iv: Va(h)
          },
          u,
          f
        );
        if (v)
          return {
            clearText: new TextDecoder().decode(v),
            took: Date.now() - o
          };
      } catch {
      }
    }
    return null;
  };
  let u = null, f = null;
  try {
    f = ja(e);
    const h = await crypto.subtle.digest(
      "SHA-256",
      $i.encode(t)
    );
    u = await crypto.subtle.importKey(
      "raw",
      h,
      n,
      !1,
      ["decrypt"]
    );
  } catch {
    return {
      promise: Promise.reject(),
      controller: a
    };
  }
  return {
    promise: l(),
    controller: a
  };
}
var ke, Te, Dt, ar, Fi;
class Ii extends nt {
  /**
   * Creates an instance of PluginAnalytics.
   *
   * @param {PluginContext} context - The context object containing plugin configurations.
   */
  constructor(r) {
    super(r);
    Q(this, ar);
    // HTML form element associated with the plugin
    Q(this, ke);
    // Session instance for tracking analytics data
    Q(this, Te);
    // Bound method for form submission handling
    Q(this, Dt, ee(this, ar, Fi).bind(this));
    if (ut(this, ke, this.context.el.closest("form")), w(this, ke)) {
      let i = w(this, ke).getAttribute("data-beacon-url");
      const n = w(this, ke).getAttribute("action");
      !i && n && (i = n + "/beacon"), w(this, ke).addEventListener("submit", w(this, Dt)), ut(this, Te, new qa(w(this, ke), i));
    }
  }
  /**
   * Destroys the plugin instance, removing event listeners and cleaning up the session.
   */
  destroy() {
    var r, i;
    (r = w(this, ke)) == null || r.removeEventListener("submit", w(this, Dt)), (i = w(this, Te)) == null || i.destroy();
  }
  /**
   * Tracks errors by forwarding them to the session instance.
   *
   * @param {string | null} err - The error message, or `null` if no error exists.
   */
  onErrorChange(r) {
    var i;
    (i = w(this, Te)) == null || i.trackError(r);
  }
}
ke = new WeakMap(), Te = new WeakMap(), Dt = new WeakMap(), ar = new WeakSet(), /**
 * Handles form submission events, appending session data to the form if applicable.
 */
Fi = function() {
  var r;
  if (w(this, Te) && !w(this, Te).submitTime) {
    w(this, Te).end();
    const i = w(this, Te).dataAsBase64();
    this.context.dispatch("session", i);
    const n = document.createElement("input");
    n.type = "hidden", n.name = "__session", n.value = i, (r = w(this, ke)) == null || r.appendChild(n);
  }
}, k(Ii, "pluginName", "analytics");
var vt, mt, Ot, Mt, Bt;
class qa {
  /**
   * Creates a new Session instance.
   *
   * @param {HTMLFormElement} elForm - The form element being tracked.
   * @param {string | null} [beaconUrl=null] - The URL to send analytics data to.
   */
  constructor(t, r = null) {
    // Error message associated with the session
    k(this, "error", null);
    // Timestamp when the form was loaded
    k(this, "loadTime", Date.now());
    // Timestamp when the form was submitted
    k(this, "submitTime", null);
    // Timestamp when the user started interacting with the form
    k(this, "startTime", null);
    // Minimum time in milliseconds required to consider the form "viewed"
    k(this, "viewTimeThresholdMs", 1500);
    // Tracks the number of changes made to each form field
    Q(this, vt, {});
    // Name of the last input field focused by the user
    Q(this, mt, null);
    // Bound method for handling form change events
    Q(this, Ot, this.onFormChange.bind(this));
    // Bound method for handling form focus events
    Q(this, Mt, this.onFormFocus.bind(this));
    // Bound method for handling the unload event
    Q(this, Bt, this.onUnload.bind(this));
    this.elForm = t, this.beaconUrl = r, window.addEventListener("unload", w(this, Bt)), this.elForm.addEventListener("change", w(this, Ot)), this.elForm.addEventListener("focusin", w(this, Mt));
  }
  /**
   * Collects and returns analytics data about the form interaction.
   *
   * @returns {Record<string, unknown>} - An object containing analytics data.
   */
  data() {
    const t = Object.entries(w(this, vt));
    return {
      correction: t.length && t.filter(([r, i]) => i > 1).length / t.length || 0,
      dropoff: !this.submitTime && !this.error && w(this, mt) ? w(this, mt) : null,
      error: this.error,
      mobile: this.isMobile(),
      start: this.startTime,
      submit: this.submitTime,
      tz: Ti()
    };
  }
  /**
   * Encodes the session data as a base64 string.
   *
   * @returns {string} - The base64-encoded session data.
   */
  dataAsBase64() {
    try {
      return btoa(JSON.stringify(this.data()));
    } catch (t) {
      console.error("failed to encode ALTCHA session data to base64", t);
    }
    return "";
  }
  /**
   * Destroys the session, removing event listeners.
   */
  destroy() {
    window.removeEventListener("unload", w(this, Bt)), this.elForm.removeEventListener("change", w(this, Ot)), this.elForm.removeEventListener("focusin", w(this, Mt));
  }
  /**
   * Marks the session as ended by recording the submission time.
   */
  end() {
    this.submitTime || (this.submitTime = Date.now());
  }
  /**
   * Retrieves the name of a form field, including a group label if available.
   *
   * @param {HTMLInputElement} el - The input element.
   * @param {number} [maxLength=40] - The maximum length of the field name.
   * @returns {string} - The field name, truncated to `maxLength` if necessary.
   */
  getFieldName(t, r = 40) {
    const i = t.getAttribute("data-group-label"), n = t.getAttribute("name") || t.getAttribute("aria-label");
    return ((i ? i + ": " : "") + n).slice(0, r);
  }
  /**
   * Determines if the current device is a mobile device.
   *
   * @returns {boolean} - `true` if the device is mobile, otherwise `false`.
   */
  isMobile() {
    const t = "userAgentData" in navigator && navigator.userAgentData ? navigator.userAgentData : {};
    return "mobile" in t ? t.mobile === !0 : /Mobi/i.test(window.navigator.userAgent);
  }
  /**
   * Checks if a given element is an input element (input, select, or textarea).
   *
   * @param {HTMLElement} el - The element to check.
   * @returns {boolean} - `true` if the element is an input, otherwise `false`.
   */
  isInput(t) {
    return ["INPUT", "SELECT", "TEXTAREA"].includes(t.tagName);
  }
  /**
   * Tracks changes to a specific form field.
   *
   * @param {HTMLInputElement} el - The input element that changed.
   */
  onFormFieldChange(t) {
    const r = this.getFieldName(t);
    r && this.trackFieldChange(r);
  }
  /**
   * Handles form change events, tracking changes to input fields.
   *
   * @param {Event} ev - The change event.
   */
  onFormChange(t) {
    const r = t.target;
    r && this.isInput(r) && this.onFormFieldChange(r);
  }
  /**
   * Handles form focus events, marking the session start time and tracking the last focused field.
   *
   * @param {FocusEvent} ev - The focus event.
   */
  onFormFocus(t) {
    const r = t.target;
    if (this.startTime || this.start(), r && this.isInput(r)) {
      const i = this.getFieldName(r);
      i && ut(this, mt, i);
    }
  }
  /**
   * Handles the window unload event, sending a beacon with session data if the form was viewed but not submitted.
   */
  onUnload() {
    this.loadTime <= Date.now() - this.viewTimeThresholdMs && !this.submitTime && this.sendBeacon();
  }
  /**
   * Sends a beacon with session data to the specified beacon URL.
   */
  async sendBeacon() {
    if (this.beaconUrl && "sendBeacon" in navigator)
      try {
        navigator.sendBeacon(
          new URL(this.beaconUrl, location.origin),
          JSON.stringify(this.data())
        );
      } catch {
      }
  }
  /**
   * Marks the session as started by recording the start time.
   */
  start() {
    this.startTime = Date.now();
  }
  /**
   * Tracks an error associated with the session.
   *
   * @param {string | null} err - The error message, or `null` if no error exists.
   */
  trackError(t) {
    this.error = t === null ? null : String(t);
  }
  /**
   * Tracks a change to a specific form field.
   *
   * @param {string} name - The name of the form field.
   */
  trackFieldChange(t) {
    w(this, vt)[t] = (w(this, vt)[t] || 0) + 1;
  }
}
vt = new WeakMap(), mt = new WeakMap(), Ot = new WeakMap(), Mt = new WeakMap(), Bt = new WeakMap();
nt.register(Ii);
const Ar = {
  generateKey: Ha,
  exportKey: za,
  importKey: Ya,
  decrypt: Ga,
  encrypt: Wa
};
async function Ha(e = 256) {
  return crypto.subtle.generateKey({
    name: "AES-GCM",
    length: e
  }, !0, ["encrypt", "decrypt"]);
}
async function za(e) {
  return new Uint8Array(await crypto.subtle.exportKey("raw", e));
}
async function Ya(e) {
  return crypto.subtle.importKey("raw", e, {
    name: "AES-GCM"
  }, !0, ["encrypt", "decrypt"]);
}
async function Wa(e, t, r = 16) {
  const i = crypto.getRandomValues(new Uint8Array(r));
  return {
    encrypted: new Uint8Array(await crypto.subtle.encrypt({
      name: "AES-GCM",
      iv: i
    }, e, t)),
    iv: i
  };
}
async function Ga(e, t, r) {
  return new Uint8Array(await crypto.subtle.decrypt({
    name: "AES-GCM",
    iv: r
  }, e, t));
}
function Ja(e, t = !1) {
  return t && (e = e.replace(/_/g, "/").replace(/-/g, "+") + "=".repeat(3 - (3 + e.length) % 4)), Uint8Array.from(atob(e), (r) => r.charCodeAt(0));
}
function Li(e, t = !1) {
  const r = btoa(String.fromCharCode(...e));
  return t ? r.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "") : r;
}
function Pi(e, t = 80) {
  let r = "";
  for (; e.length > 0; )
    r += e.slice(0, t) + `
`, e = e.slice(t);
  return r;
}
function Ni(e) {
  return Ja(e.split(/\r?\n/).filter((t) => !t.startsWith("-----")).join(""));
}
const _t = "RSA-OAEP", vr = "SHA-256", Za = 2048, Xa = new Uint8Array([1, 0, 1]), Qa = {
  generateKeyPair: eo,
  encrypt: to,
  decrypt: ro,
  exportPrivateKey: Ui,
  exportPrivateKeyPem: io,
  exportPublicKey: Yr,
  exportPublicKeyPem: no,
  exportPublicKeyFromPrivateKey: ao,
  importPrivateKey: Mi,
  importPrivateKeyPem: so,
  importPublicKey: Di,
  importPublicKeyPem: Oi
};
async function eo() {
  return crypto.subtle.generateKey({
    name: _t,
    modulusLength: Za,
    publicExponent: Xa,
    hash: vr
  }, !0, ["encrypt", "decrypt"]);
}
async function to(e, t) {
  return new Uint8Array(await crypto.subtle.encrypt({
    name: _t
  }, e, t));
}
async function ro(e, t) {
  return new Uint8Array(await crypto.subtle.decrypt({
    name: _t
  }, e, t));
}
async function Yr(e) {
  return new Uint8Array(await crypto.subtle.exportKey("spki", e));
}
async function Ui(e) {
  return new Uint8Array(await crypto.subtle.exportKey("pkcs8", e));
}
async function no(e) {
  return `-----BEGIN PUBLIC KEY-----
` + Pi(Li(await Yr(e)), 64) + "-----END PUBLIC KEY-----";
}
async function io(e) {
  return `-----BEGIN PRIVATE KEY-----
` + Pi(Li(await Ui(e)), 64) + "-----END PRIVATE KEY-----";
}
async function Di(e) {
  return crypto.subtle.importKey("spki", e, {
    name: _t,
    hash: vr
  }, !0, ["encrypt"]);
}
async function Oi(e) {
  return Di(Ni(e));
}
async function Mi(e) {
  return crypto.subtle.importKey("pkcs8", e, {
    name: _t,
    hash: vr
  }, !0, ["decrypt"]);
}
async function so(e) {
  return Mi(Ni(e));
}
async function ao(e) {
  const t = await crypto.subtle.exportKey("jwk", e);
  delete t.d, delete t.dp, delete t.dq, delete t.q, delete t.qi, t.key_ops = ["encrypt"];
  const r = await crypto.subtle.importKey("jwk", t, {
    name: _t,
    hash: vr
  }, !0, ["encrypt"]);
  return Yr(r);
}
const oo = new Uint8Array([1, 0, 1]), lo = 256, uo = 16;
async function co(e, t, r = {}) {
  const { aesIVLength: i = uo, aesKeyLength: n = lo } = r, a = await Ar.generateKey(n), { encrypted: o, iv: l } = await Ar.encrypt(a, t, i), u = await Qa.encrypt(e, await Ar.exportKey(a));
  return new Uint8Array([
    ...oo,
    ...new Uint8Array([u.length]),
    ...new Uint8Array([l.length]),
    ...u,
    ...l,
    ...o
  ]);
}
var jt, Vt, U, ji, Vi, Ki, Lr, qi, Hi, zi, Pr, Yi, Wi, Gi;
class Bi extends nt {
  /**
   * Constructor initializes the plugin, setting up event listeners on the form.
   *
   * @param {PluginContext} context - Plugin context providing access to the element, configuration, and utility methods.
   */
  constructor(r) {
    super(r);
    Q(this, U);
    k(this, "pendingFiles", []);
    k(this, "uploadHandles", []);
    k(this, "elForm");
    Q(this, jt, ee(this, U, Hi).bind(this));
    Q(this, Vt, ee(this, U, zi).bind(this));
    this.elForm = this.context.el.closest("form"), this.elForm && (this.elForm.addEventListener("change", w(this, jt)), this.elForm.addEventListener("submit", w(this, Vt), {
      capture: !0
    }));
  }
  /**
   * Adds a file to the pending files list for upload.
   *
   * @param {string} fieldName - The field name associated with the file input.
   * @param {File} file - The file to be uploaded.
   */
  addFile(r, i) {
    this.pendingFiles.find(([n, a]) => n === r && a === i) || this.pendingFiles.push([r, i]);
  }
  /**
   * Cleans up event listeners and other resources when the plugin is destroyed.
   */
  destroy() {
    this.elForm && (this.elForm.removeEventListener("change", w(this, jt)), this.elForm.removeEventListener("submit", w(this, Vt)));
  }
  /**
   * Uploads all pending files in the list.
   */
  async uploadPendingFiles() {
    var i;
    const r = async () => {
      const n = this.pendingFiles[0];
      if (n && await ee(this, U, Pr).call(this, ee(this, U, Vi).call(this, n)), this.pendingFiles.length)
        return r();
    };
    await r(), this.pendingFiles.length === 0 && (ee(this, U, ji).call(this), (i = this.elForm) == null || i.requestSubmit());
  }
}
jt = new WeakMap(), Vt = new WeakMap(), U = new WeakSet(), /**
 * Adds hidden input fields to the form containing the file IDs of uploaded files.
 */
ji = function() {
  var i, n, a;
  const r = this.uploadHandles.reduce(
    (o, l) => (o[l.fieldName] || (o[l.fieldName] = []), l.fileId && o[l.fieldName].push(l.fileId), o),
    {}
  );
  for (const o in r) {
    const l = document.createElement("input");
    l.name = o, l.type = "hidden", l.value = r[o].join(","), (n = (i = this.elForm) == null ? void 0 : i.querySelector(`[name="${o}"]`)) == null || n.setAttribute("disabled", "disabled"), (a = this.elForm) == null || a.appendChild(l);
  }
}, /**
 * Creates an upload handle for the specified pending file.
 *
 * @param {[string, File]} pendingFile - The field name and file to be uploaded.
 * @returns {UploadHandle} The created upload handle.
 * @throws Will throw an error if the upload handle cannot be created.
 */
Vi = function(r) {
  const i = this.pendingFiles.findIndex(
    ([a, o]) => a === r[0] && o === r[1]
  );
  if (i < 0)
    throw new Error("Cannot create upload handle.");
  const n = new fo(r[0], r[1]);
  return this.uploadHandles.push(n), this.pendingFiles.splice(i, 1), ee(this, U, Ki).call(this, n), ee(this, U, Lr).call(this), n;
}, /**
 * Dispatches a custom event when a file upload starts.
 *
 * @param {UploadHandle} handle - The upload handle associated with the file upload.
 */
Ki = function(r) {
  this.context.dispatch("upload", { handle: r });
}, /**
 * Dispatches a custom event to track the progress of ongoing file uploads.
 */
Lr = function() {
  const r = this.pendingFiles.reduce((n, [a, o]) => n + o.size, 0) + this.uploadHandles.reduce((n, { uploadSize: a }) => n + a, 0), i = this.uploadHandles.reduce(
    (n, { loaded: a }) => n + a,
    0
  );
  this.context.dispatch("uploadprogress", {
    bytesLoaded: i,
    bytesTotal: r,
    pendingFiles: this.pendingFiles,
    uploadHandles: this.uploadHandles
  });
}, /**
 * Retrieves the upload URL from the form's attributes.
 *
 * @returns {string | null} The upload URL, or null if not found.
 */
qi = function() {
  if (this.elForm) {
    const r = this.elForm.getAttribute("action");
    return this.elForm.getAttribute("data-upload-url") || r + "/file";
  }
  return null;
}, /**
 * Handles the form's change event, adding files to the pending files list.
 *
 * @param {Event} ev - The change event.
 */
Hi = function(r) {
  const i = r.target;
  if (i && i.type === "file") {
    const n = i.files;
    if (n != null && n.length)
      for (const a of n)
        this.addFile(i.name, a);
  }
}, /**
 * Handles the form's submit event, preventing submission until all pending files are uploaded.
 *
 * @param {SubmitEvent} ev - The submit event.
 */
zi = function(r) {
  this.pendingFiles.length && (r.preventDefault(), r.stopPropagation(), this.uploadPendingFiles());
}, Pr = async function(r, i) {
  const n = ee(this, U, qi).call(this);
  if (!n)
    throw new Error("Upload url not specified.");
  const a = {
    "content-type": "application/json"
  };
  i && (a.authorization = "Altcha payload=" + i);
  const o = await fetch(n, {
    body: JSON.stringify({
      name: r.file.name || "file",
      size: r.file.size,
      type: r.file.type || "application/octet-stream"
    }),
    credentials: "include",
    headers: a,
    method: "POST"
  });
  if (o.status === 401)
    return ee(this, U, Yi).call(this, o, r);
  if (o.status !== 200)
    throw new Error(`Unexpected server response ${o.status}.`);
  const l = await o.json();
  let u = r.file;
  if (l.encrypted && l.encryptionPublicKey) {
    const f = await Oi(l.encryptionPublicKey), v = await new Response(
      new ReadableStream({
        async start(m) {
          const g = r.file.stream().getReader();
          for (; ; ) {
            const { done: _, value: A } = await g.read();
            if (_)
              break;
            m.enqueue(A);
          }
          m.close();
        }
      })
    ).arrayBuffer();
    u = await co(f, new Uint8Array(v));
  }
  return r.uploadSize = u instanceof Uint8Array ? u.byteLength : r.file.size, await ee(this, U, Gi).call(this, l.uploadUrl, r, u, {
    "content-type": r.file.type || "application/octet-stream"
  }), l.finalizeUrl && await ee(this, U, Wi).call(this, l.finalizeUrl, r.uploadSize), r.fileId = l.fileId, r.resolve({
    encrypted: l.encrypted,
    fileId: l.fileId
  }), r.promise;
}, Yi = async function(r, i) {
  var n;
  try {
    const a = r.headers.get("www-authenticate"), o = (n = a == null ? void 0 : a.match(/challenge=(.*),/)) == null ? void 0 : n[1];
    if (!o)
      throw new Error(
        "Unable to retrieve altcha challenge from www-authenticate header."
      );
    const l = JSON.parse(o);
    if (l && "challenge" in l) {
      const { solution: u } = await this.context.solve(l);
      if (u && "number" in u)
        return ee(this, U, Pr).call(this, i, btoa(
          JSON.stringify({
            ...l,
            number: u.number
          })
        ));
      throw new Error("Invalid challenge solution.");
    }
  } catch (a) {
    throw this.context.log(a), new Error("Unable to solve altcha challenge for upload.");
  }
}, Wi = async function(r, i) {
  const n = await fetch(r, {
    body: JSON.stringify({
      uploadedBytes: i
    }),
    headers: {
      "content-type": "application/json"
    },
    method: "POST"
  });
  if (n.status > 204)
    throw new Error(`Unexpected server response ${n.status}.`);
  return !0;
}, Gi = async function(r, i, n, a = {}) {
  return new Promise((o, l) => {
    const u = new XMLHttpRequest();
    i.controller.signal.addEventListener("abort", () => {
      u.abort();
    }), u.upload.addEventListener("progress", (f) => {
      i.setProgress(f.loaded), ee(this, U, Lr).call(this);
    }), u.addEventListener("error", (f) => {
      l(new Error("Upload failed."));
    }), u.addEventListener("load", () => {
      o(void 0);
    }), u.open("PUT", r);
    for (const f in a)
      u.setRequestHeader(f, a[f]);
    u.send(n);
  });
}, k(Bi, "pluginName", "upload");
class fo {
  /**
   * Creates an instance of UploadHandle.
   *
   * @param {string} fieldName - The name of the field associated with the file upload.
   * @param {File} file - The file to be uploaded.
   */
  constructor(t, r) {
    k(this, "controller", new AbortController());
    k(this, "promise");
    k(this, "fileId");
    k(this, "loaded", 0);
    k(this, "progress", 0);
    k(this, "uploadSize", 0);
    k(this, "resolve");
    k(this, "reject");
    this.fieldName = t, this.file = r, this.uploadSize = this.file.size, this.promise = new Promise((i, n) => {
      this.resolve = i, this.reject = n;
    });
  }
  /**
   * Aborts the file upload by invoking the AbortController's abort method.
   */
  abort() {
    this.controller.abort();
  }
  /**
   * Updates the progress of the file upload.
   *
   * @param {number} loaded - The number of bytes that have been uploaded.
   */
  setProgress(t) {
    this.loaded = t, this.progress = this.file.size && t ? Math.min(1, t / this.file.size) : 0;
  }
}
nt.register(Bi);
var ho = /* @__PURE__ */ ye('<input type="hidden" class="svelte-mrsw1u">'), vo = /* @__PURE__ */ ye('<div class="svelte-mrsw1u"><a target="_blank" class="altcha-logo svelte-mrsw1u"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-mrsw1u"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor" class="svelte-mrsw1u"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor" class="svelte-mrsw1u"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor" class="svelte-mrsw1u"></path></svg></a></div>'), mo = /* @__PURE__ */ ye('<div class="svelte-mrsw1u"><!></div>'), go = /* @__PURE__ */ ye('<div class="svelte-mrsw1u"><!></div>'), po = /* @__PURE__ */ ye('<div class="altcha-error svelte-mrsw1u"><svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="svelte-mrsw1u"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" class="svelte-mrsw1u"></path></svg> <!></div>'), yo = /* @__PURE__ */ ye('<div class="altcha-footer svelte-mrsw1u"><div class="svelte-mrsw1u"><!></div></div>'), wo = /* @__PURE__ */ ye('<div class="altcha-anchor-arrow svelte-mrsw1u"></div>'), _o = /* @__PURE__ */ ye('<!> <div class="altcha svelte-mrsw1u"><div class="altcha-main svelte-mrsw1u"><div class="altcha-checkbox svelte-mrsw1u"><input type="checkbox" class="svelte-mrsw1u"> <svg class="altcha-loader svelte-mrsw1u" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" fill="currentColor" opacity=".25" class="svelte-mrsw1u"></path><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" fill="currentColor" class="altcha-spinner svelte-mrsw1u"></path></svg></div> <!> <div class="altcha-label svelte-mrsw1u"><label class="svelte-mrsw1u"><!></label></div> <!></div> <!> <!> <!></div>', 1);
const bo = {
  hash: "svelte-mrsw1u",
  code: `.altcha.svelte-mrsw1u {background:var(--altcha-color-base, transparent);border:var(--altcha-border-width, 1px) solid var(--altcha-color-border, #a0a0a0);border-radius:var(--altcha-border-radius, 3px);color:var(--altcha-color-text, currentColor);display:flex;flex-direction:column;max-width:var(--altcha-max-width, 260px);position:relative;text-align:left;}.altcha.svelte-mrsw1u:focus-within {border-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating].svelte-mrsw1u {background:var(--altcha-color-base, white);display:none;filter:drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.2));left:-100%;position:fixed;top:-100%;width:var(--altcha-max-width, 260px);z-index:999999;}.altcha[data-floating=top].svelte-mrsw1u .altcha-anchor-arrow:where(.svelte-mrsw1u) {border-bottom-color:transparent;border-top-color:var(--altcha-color-border, #a0a0a0);bottom:-12px;top:auto;}.altcha[data-floating=bottom].svelte-mrsw1u:focus-within::after {border-bottom-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating=top].svelte-mrsw1u:focus-within::after {border-top-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating].svelte-mrsw1u:not([data-state=unverified]) {display:block;}.altcha-anchor-arrow.svelte-mrsw1u {border:6px solid transparent;border-bottom-color:var(--altcha-color-border, #a0a0a0);content:"";height:0;left:12px;position:absolute;top:-12px;width:0;}.altcha-main.svelte-mrsw1u {align-items:center;display:flex;gap:0.4rem;padding:0.7rem;}.altcha-label.svelte-mrsw1u {flex-grow:1;}.altcha-label.svelte-mrsw1u label:where(.svelte-mrsw1u) {cursor:pointer;}.altcha-logo.svelte-mrsw1u {color:currentColor;opacity:0.3;}.altcha-logo.svelte-mrsw1u:hover {opacity:1;}.altcha-error.svelte-mrsw1u {color:var(--altcha-color-error-text, #f23939);display:flex;font-size:0.85rem;gap:0.3rem;padding:0 0.7rem 0.7rem;}.altcha-footer.svelte-mrsw1u {align-items:center;background-color:var(--altcha-color-footer-bg, transparent);display:flex;font-size:0.75rem;opacity:0.4;padding:0.2rem 0.7rem;text-align:right;}.altcha-footer.svelte-mrsw1u:hover {opacity:1;}.altcha-footer.svelte-mrsw1u > :where(.svelte-mrsw1u):first-child {flex-grow:1;}.altcha-footer.svelte-mrsw1u a {color:currentColor;}.altcha-checkbox.svelte-mrsw1u {position:relative;display:flex;align-items:center;height:24px;width:24px;}.altcha-checkbox.svelte-mrsw1u input:where(.svelte-mrsw1u) {width:18px;height:18px;margin:0;}.altcha[data-state=verifying].svelte-mrsw1u .altcha-checkbox:where(.svelte-mrsw1u) input:where(.svelte-mrsw1u) {visibility:hidden;}.altcha-loader.svelte-mrsw1u {display:none;position:absolute;top:0;left:-3px;height:100%;}.altcha[data-state=verifying].svelte-mrsw1u .altcha-loader:where(.svelte-mrsw1u) {display:block;}.altcha-spinner.svelte-mrsw1u {
  animation: svelte-mrsw1u-altcha-spinner 0.75s infinite linear;transform-origin:center;}

@keyframes svelte-mrsw1u-altcha-spinner {
  100% {
    transform: rotate(360deg);
  }
}`
};
function Eo(e, t) {
  var _n, bn;
  Kr(t, !0), wi(e, bo);
  let r = I(t, "auto", 7, void 0), i = I(t, "blockspam", 7, void 0), n = I(t, "challengeurl", 7, void 0), a = I(t, "challengejson", 7, void 0), o = I(t, "customfetch", 7, void 0), l = I(t, "debug", 7, !1), u = I(t, "delay", 7, 0), f = I(t, "expire", 7, void 0), h = I(t, "floating", 7, void 0), v = I(t, "floatinganchor", 7, void 0), m = I(t, "floatingoffset", 7, void 0), g = I(t, "floatingpersist", 7, !1), _ = I(t, "hidefooter", 7, !1), A = I(t, "hidelogo", 7, !1), S = I(t, "id", 7, void 0), j = I(t, "name", 7, "altcha"), L = I(t, "maxnumber", 7, 1e6), H = I(t, "mockerror", 7, !1), Z = I(t, "obfuscated", 7, void 0), Se = I(t, "plugins", 7, void 0), z = I(t, "refetchonexpire", 7, !0), W = I(t, "spamfilter", 7, !1), we = I(t, "strings", 7, void 0), G = I(t, "test", 7, !1), X = I(t, "verifyurl", 7, void 0), me = I(t, "workers", 23, () => Math.min(16, navigator.hardwareConcurrency || 8)), J = I(t, "workerurl", 7, void 0);
  const qt = ["SHA-256", "SHA-384", "SHA-512"], Ht = "Visit Altcha.org", bt = "https://altcha.org/", je = (s, d) => {
    t.$$host.dispatchEvent(new CustomEvent(s, { detail: d }));
  }, _e = (bn = (_n = document.documentElement.lang) == null ? void 0 : _n.split("-")) == null ? void 0 : bn[0], p = /* @__PURE__ */ Je(() => {
    var s;
    return n() && new URL(n(), location.origin).host.endsWith(".altcha.org") && !!((s = n()) != null && s.includes("apiKey=ckey_"));
  }), be = /* @__PURE__ */ Je(() => a() ? sn(a()) : void 0), Et = /* @__PURE__ */ Je(() => we() ? sn(we()) : {}), oe = /* @__PURE__ */ Je(() => {
    var s;
    return {
      ariaLinkLabel: Ht,
      error: "Verification failed. Try again later.",
      expired: "Verification expired. Try again.",
      footer: `Protected by <a href="${bt}" target="_blank" aria-label="${((s = c(Et)) == null ? void 0 : s.ariaLinkLabel) || Ht}">ALTCHA</a>`,
      label: "I'm not a robot",
      verified: "Verified",
      verifying: "Verifying...",
      waitAlert: "Verifying... please wait.",
      ...c(Et)
    };
  }), Wr = /* @__PURE__ */ Je(() => S() || `${j()}_checkbox`);
  let it = he(!1), P = he(se(b.UNVERIFIED)), ne = he(void 0), xt = he(null), st = null, E = null, at = he(null), $e = null, Ve = [], We = he(null);
  ir(() => {
    is(c(at));
  }), ir(() => {
    ss(c(P));
  }), Fa(() => {
    Zi(), E && (E.removeEventListener("submit", en), E.removeEventListener("reset", tn), E.removeEventListener("focusin", Qr), E = null), $e && (clearTimeout($e), $e = null), document.removeEventListener("click", Zr), document.removeEventListener("scroll", Xr), window.removeEventListener("resize", nn);
  }), zr(() => {
    var s;
    D("mounted", "1.4.2"), D("workers", me()), rs(), D("plugins", Ve.length ? Ve.map((d) => d.constructor.pluginName).join(", ") : "none"), G() && D("using test mode"), f() && mr(f()), r() !== void 0 && D("auto", r()), h() !== void 0 && an(h()), E = (s = c(ne)) == null ? void 0 : s.closest("form"), E && (E.addEventListener("submit", en, { capture: !0 }), E.addEventListener("reset", tn), (r() === "onfocus" || g() === "focus") && E.addEventListener("focusin", Qr)), r() === "onload" && (Z() ? kt() : Ke()), c(p) && (_() || A()) && D("Attributes hidefooter and hidelogo ignored because usage with free API Keys requires attribution."), requestAnimationFrame(() => {
      je("load");
    });
  });
  function Gr(s, d) {
    return btoa(JSON.stringify({
      algorithm: s.algorithm,
      challenge: s.challenge,
      number: d.number,
      salt: s.salt,
      signature: s.signature,
      test: G() ? !0 : void 0,
      took: d.took
    }));
  }
  function Zi() {
    for (const s of Ve)
      s.destroy();
  }
  function Jr() {
    n() && z() && c(P) === b.VERIFIED ? Ke() : Ct(b.EXPIRED, c(oe).expired);
  }
  async function Xi() {
    var s;
    if (H())
      throw D("mocking error"), new Error("Mocked error.");
    if (c(be))
      return D("using provided json data"), c(be);
    if (G())
      return D("generating test challenge", { test: G() }), Ma(typeof G() != "boolean" ? +G() : void 0);
    {
      if (!n() && E) {
        const V = E.getAttribute("action");
        V != null && V.includes("/form/") && n(V + "/altcha");
      }
      if (!n())
        throw new Error("Attribute challengeurl not set.");
      D("fetching challenge from", n());
      let d = null, y = null;
      if (o())
        if (D("using customfetch"), typeof o() == "string") {
          if (d = globalThis[o()] || null, !d)
            throw new Error(`Custom fetch function not found: ${o()}`);
        } else
          d = o();
      const T = {
        headers: W() !== !1 ? { "x-altcha-spam-filter": "1" } : {}
      };
      if (d) {
        if (y = await d(n(), T), !y || !(y instanceof Response))
          throw new Error("Custom fetch function did not return a response.");
      } else
        y = await fetch(n(), T);
      if (y.status !== 200)
        throw new Error(`Server responded with ${y.status}.`);
      const Y = y.headers.get("X-Altcha-Config"), N = await y.json(), x = new URLSearchParams((s = N.salt.split("?")) == null ? void 0 : s[1]), le = x.get("expires") || x.get("expire");
      if (le) {
        const V = new Date(+le * 1e3), lt = isNaN(V.getTime()) ? 0 : V.getTime() - Date.now();
        lt > 0 && mr(lt);
      }
      if (Y)
        try {
          const V = JSON.parse(Y);
          V && typeof V == "object" && (V.verifyurl && (V.verifyurl = new URL(V.verifyurl, new URL(n())).toString()), un(V));
        } catch (V) {
          D("unable to configure from X-Altcha-Config", V);
        }
      return N;
    }
  }
  function Qi(s) {
    var y;
    const d = E == null ? void 0 : E.querySelector(typeof s == "string" ? `input[name="${s}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return ((y = d == null ? void 0 : d.value) == null ? void 0 : y.slice(d.value.indexOf("@"))) || void 0;
  }
  function es() {
    return W() === "ipAddress" ? {
      blockedCountries: void 0,
      classifier: void 0,
      disableRules: void 0,
      email: !1,
      expectedCountries: void 0,
      expectedLanguages: void 0,
      fields: !1,
      ipAddress: void 0,
      text: void 0,
      timeZone: void 0
    } : typeof W() == "object" ? W() : {
      blockedCountries: void 0,
      classifier: void 0,
      disableRules: void 0,
      email: void 0,
      expectedCountries: void 0,
      expectedLanguages: void 0,
      fields: void 0,
      ipAddress: void 0,
      text: void 0,
      timeZone: void 0
    };
  }
  function ts(s) {
    return [
      ...(E == null ? void 0 : E.querySelectorAll(s != null && s.length ? s.map((y) => `input[name="${y}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])')) || []
    ].reduce(
      (y, T) => {
        const Y = T.name, N = T.value;
        return Y && N && (y[Y] = /\n/.test(N) ? N.replace(new RegExp("(?<!\\r)\\n", "g"), `\r
`) : N), y;
      },
      {}
    );
  }
  function rs() {
    const s = Se() !== void 0 ? Se().split(",") : void 0;
    for (const d of globalThis.altchaPlugins)
      (!s || s.includes(d.pluginName)) && Ve.push(new d({
        el: c(ne),
        clarify: kt,
        dispatch: je,
        getConfiguration: cn,
        getFloatingAnchor: fn,
        getState: dn,
        log: D,
        reset: Ct,
        solve: ln,
        setState: Ge,
        setFloatingAnchor: vn,
        verify: Ke
      }));
  }
  function D(...s) {
    (l() || s.some((d) => d instanceof Error)) && console[s[0] instanceof Error ? "error" : "log"]("ALTCHA", `[name=${j()}]`, ...s);
  }
  function ns() {
    [b.UNVERIFIED, b.ERROR, b.EXPIRED].includes(c(P)) ? W() !== !1 && (E == null ? void 0 : E.reportValidity()) === !1 ? C(it, !1) : Z() ? kt() : Ke() : C(it, !0);
  }
  function Zr(s) {
    const d = s.target;
    h() && d && !c(ne).contains(d) && (c(P) === b.VERIFIED && g() === !1 || c(P) === b.VERIFIED && g() === "focus" && !(E != null && E.matches(":focus-within")) || r() === "off" && c(P) === b.UNVERIFIED) && hn();
  }
  function Xr() {
    h() && c(P) !== b.UNVERIFIED && At();
  }
  function is(s) {
    for (const d of Ve)
      typeof d.onErrorChange == "function" && d.onErrorChange(c(at));
  }
  function Qr(s) {
    c(P) === b.UNVERIFIED ? Ke() : h() && g() === "focus" && c(P) === b.VERIFIED && gr();
  }
  function en(s) {
    E && r() === "onsubmit" ? c(P) === b.UNVERIFIED ? (s.preventDefault(), s.stopPropagation(), Ke().then(() => {
      E == null || E.requestSubmit();
    })) : c(P) !== b.VERIFIED && (s.preventDefault(), s.stopPropagation(), c(P) === b.VERIFYING && rn()) : E && h() && r() === "off" && c(P) === b.UNVERIFIED && (s.preventDefault(), s.stopPropagation(), gr());
  }
  function tn() {
    Ct();
  }
  function rn() {
    c(P) === b.VERIFYING && c(oe).waitAlert && alert(c(oe).waitAlert);
  }
  function ss(s) {
    for (const d of Ve)
      typeof d.onStateChange == "function" && d.onStateChange(c(P));
    h() && c(P) !== b.UNVERIFIED && requestAnimationFrame(() => {
      At();
    }), C(it, c(P) === b.VERIFIED);
  }
  function nn() {
    h() && At();
  }
  function sn(s) {
    return JSON.parse(s);
  }
  async function as(s) {
    if (!X())
      throw new Error("Attribute verifyurl not set.");
    D("requesting server verification from", X());
    const d = { payload: s };
    if (W() !== !1) {
      const {
        blockedCountries: Y,
        classifier: N,
        disableRules: x,
        email: le,
        expectedLanguages: V,
        expectedCountries: lt,
        fields: $t,
        ipAddress: Rt,
        text: ws,
        timeZone: En
      } = es();
      d.blockedCountries = Y, d.classifier = N, d.disableRules = x, d.email = le === !1 ? void 0 : Qi(le), d.expectedCountries = lt, d.expectedLanguages = V || (_e ? [_e] : void 0), d.fields = $t === !1 ? void 0 : ts($t), d.ipAddress = Rt === !1 ? void 0 : Rt || "auto", d.text = ws, d.timeZone = En === !1 ? void 0 : En || Ti();
    }
    const y = await fetch(X(), {
      body: JSON.stringify(d),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (y.status !== 200)
      throw new Error(`Server responded with ${y.status}.`);
    const T = await y.json();
    if (T != null && T.payload && C(We, se(T.payload)), je("serververification", T), i() && T.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  function mr(s) {
    D("expire", s), $e && (clearTimeout($e), $e = null), s < 1 ? Jr() : $e = setTimeout(Jr, s);
  }
  function an(s) {
    D("floating", s), h() !== s && (c(ne).style.left = "", c(ne).style.top = ""), h(s === !0 || s === "" ? "auto" : s === !1 || s === "false" ? void 0 : h()), h() ? (r() || r("onsubmit"), document.addEventListener("scroll", Xr), document.addEventListener("click", Zr), window.addEventListener("resize", nn)) : r() === "onsubmit" && r(void 0);
  }
  function on(s) {
    if (!s.algorithm)
      throw new Error("Invalid challenge. Property algorithm is missing.");
    if (s.signature === void 0)
      throw new Error("Invalid challenge. Property signature is missing.");
    if (!qt.includes(s.algorithm.toUpperCase()))
      throw new Error(`Unknown algorithm value. Allowed values: ${qt.join(", ")}`);
    if (!s.challenge || s.challenge.length < 40)
      throw new Error("Challenge is too short. Min. 40 chars.");
    if (!s.salt || s.salt.length < 10)
      throw new Error("Salt is too short. Min. 10 chars.");
  }
  async function ln(s) {
    let d = null;
    if ("Worker" in window) {
      try {
        d = await os(s, s.maxNumber || s.maxnumber || L());
      } catch (y) {
        D(y);
      }
      if ((d == null ? void 0 : d.number) !== void 0 || "obfuscated" in s)
        return { data: s, solution: d };
    }
    if ("obfuscated" in s) {
      const y = await Ka(s.obfuscated, s.key, s.maxNumber || s.maxnumber);
      return { data: s, solution: await y.promise };
    }
    return {
      data: s,
      solution: await Ba(s.challenge, s.salt, s.algorithm, s.maxNumber || s.maxnumber || L()).promise
    };
  }
  async function os(s, d = typeof G() == "number" ? G() : s.maxNumber || s.maxnumber || L(), y = Math.ceil(me())) {
    const T = [];
    y = Math.min(16, d, Math.max(1, y));
    for (let x = 0; x < y; x++)
      T.push(altchaCreateWorker(J()));
    const Y = Math.ceil(d / y), N = await Promise.all(T.map((x, le) => {
      const V = le * Y;
      return new Promise((lt) => {
        x.addEventListener("message", ($t) => {
          if ($t.data)
            for (const Rt of T)
              Rt !== x && Rt.postMessage({ type: "abort" });
          lt($t.data);
        }), x.postMessage({
          payload: s,
          max: V + Y,
          start: V,
          type: "work"
        });
      });
    }));
    for (const x of T)
      x.terminate();
    return N.find((x) => !!x) || null;
  }
  async function kt() {
    if (!Z()) {
      Ge(b.ERROR);
      return;
    }
    const s = Ve.find((d) => d.constructor.pluginName === "obfuscation");
    if (!s || !("clarify" in s)) {
      Ge(b.ERROR), D("Plugin `obfuscation` not found. Import `altcha/plugins/obfuscation` to load it.");
      return;
    }
    if ("clarify" in s && typeof s.clarify == "function")
      return s.clarify();
  }
  function un(s) {
    s.obfuscated !== void 0 && Z(s.obfuscated), s.auto !== void 0 && (r(s.auto), r() === "onload" && (Z() ? kt() : Ke())), s.blockspam !== void 0 && i(!!s.blockspam), s.customfetch !== void 0 && o(s.customfetch), s.floatinganchor !== void 0 && v(s.floatinganchor), s.delay !== void 0 && u(s.delay), s.floatingoffset !== void 0 && m(s.floatingoffset), s.floating !== void 0 && an(s.floating), s.expire !== void 0 && (mr(s.expire), f(s.expire)), s.challenge && (a(typeof s.challenge == "string" ? s.challenge : JSON.stringify(s.challenge)), on(c(be))), s.challengeurl !== void 0 && n(s.challengeurl), s.debug !== void 0 && l(!!s.debug), s.hidefooter !== void 0 && _(!!s.hidefooter), s.hidelogo !== void 0 && A(!!s.hidelogo), s.maxnumber !== void 0 && L(+s.maxnumber), s.mockerror !== void 0 && H(!!s.mockerror), s.name !== void 0 && j(s.name), s.refetchonexpire !== void 0 && z(!!s.refetchonexpire), s.spamfilter !== void 0 && W(typeof s.spamfilter == "object" ? s.spamfilter : !!s.spamfilter), s.strings && we(typeof s.strings == "string" ? s.strings : JSON.stringify(s.strings)), s.test !== void 0 && G(typeof s.test == "number" ? s.test : !!s.test), s.verifyurl !== void 0 && X(s.verifyurl), s.workers !== void 0 && me(+s.workers), s.workerurl !== void 0 && J(s.workerurl);
  }
  function cn() {
    return {
      auto: r(),
      blockspam: i(),
      challengeurl: n(),
      debug: l(),
      delay: u(),
      expire: f(),
      floating: h(),
      floatinganchor: v(),
      floatingoffset: m(),
      hidefooter: _(),
      hidelogo: A(),
      name: j(),
      maxnumber: L(),
      mockerror: H(),
      obfuscated: Z(),
      refetchonexpire: z(),
      spamfilter: W(),
      strings: c(oe),
      test: G(),
      verifyurl: X(),
      workers: me(),
      workerurl: J()
    };
  }
  function fn() {
    return st;
  }
  function ls(s) {
    return Ve.find((d) => d.constructor.pluginName === s);
  }
  function dn() {
    return c(P);
  }
  function hn() {
    c(ne).style.display = "none";
  }
  function At(s = 20) {
    if (c(ne))
      if (st || (st = (v() ? document.querySelector(v()) : E == null ? void 0 : E.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || E), st) {
        const d = parseInt(m(), 10) || 12, y = st.getBoundingClientRect(), T = c(ne).getBoundingClientRect(), Y = document.documentElement.clientHeight, N = document.documentElement.clientWidth, x = h() === "auto" ? y.bottom + T.height + d + s > Y : h() === "top", le = Math.max(s, Math.min(N - s - T.width, y.left + y.width / 2 - T.width / 2));
        if (x ? c(ne).style.top = `${y.top - (T.height + d)}px` : c(ne).style.top = `${y.bottom + d}px`, c(ne).style.left = `${le}px`, c(ne).setAttribute("data-floating", x ? "top" : "bottom"), c(xt)) {
          const V = c(xt).getBoundingClientRect();
          c(xt).style.left = y.left - le + y.width / 2 - V.width / 2 + "px";
        }
      } else
        D("unable to find floating anchor element");
  }
  function Ct(s = b.UNVERIFIED, d = null) {
    $e && (clearTimeout($e), $e = null), C(it, !1), C(We, null), Ge(s, d);
  }
  function vn(s) {
    st = s;
  }
  function Ge(s, d = null) {
    C(P, se(s)), C(at, se(d)), je("statechange", {
      payload: c(We),
      state: c(P)
    });
  }
  function gr() {
    c(ne).style.display = "block", h() && At();
  }
  async function Ke() {
    return Ct(b.VERIFYING), await new Promise((s) => setTimeout(s, u() || 0)), Xi().then((s) => (on(s), D("challenge", s), ln(s))).then(({ data: s, solution: d }) => {
      if (D("solution", d), !d || s && "challenge" in s && !("clearText" in d))
        if ((d == null ? void 0 : d.number) !== void 0 && "challenge" in s) {
          if (X())
            return as(Gr(s, d));
          C(We, se(Gr(s, d))), D("payload", c(We));
        } else
          throw D("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
    }).then(() => {
      Ge(b.VERIFIED), D("verified"), da().then(() => {
        je("verified", { payload: c(We) });
      });
    }).catch((s) => {
      D(s), Ge(b.ERROR, s.message);
    });
  }
  var mn = _o(), gn = zt(mn);
  $a(gn, t, "default", {});
  var St = O(gn, 2), pr = q(St), yr = q(pr), ot = q(yr);
  dt(ot), ot.__change = ns, Cr(2), K(yr);
  var pn = O(yr, 2);
  {
    var us = (s) => {
      var d = ho();
      dt(d), de(() => {
        ce(d, "name", j()), Ia(d, c(We));
      }), re(s, d);
    };
    xe(pn, (s) => {
      c(P) === b.VERIFIED && s(us);
    });
  }
  var wr = O(pn, 2), _r = q(wr), cs = q(_r);
  {
    var fs = (s) => {
      var d = Er(), y = zt(d);
      ft(y, () => c(oe).verified), re(s, d);
    }, ds = (s, d) => {
      {
        var y = (Y) => {
          var N = Er(), x = zt(N);
          ft(x, () => c(oe).verifying), re(Y, N);
        }, T = (Y) => {
          var N = Er(), x = zt(N);
          ft(x, () => c(oe).label), re(Y, N);
        };
        xe(
          s,
          (Y) => {
            c(P) === b.VERIFYING ? Y(y) : Y(T, !1);
          },
          d
        );
      }
    };
    xe(cs, (s) => {
      c(P) === b.VERIFIED ? s(fs) : s(ds, !1);
    });
  }
  K(_r), K(wr);
  var hs = O(wr, 2);
  {
    var vs = (s) => {
      var d = vo(), y = q(d);
      ce(y, "href", bt), K(d), de(() => ce(y, "aria-label", c(oe).ariaLinkLabel)), re(s, d);
    };
    xe(hs, (s) => {
      (A() !== !0 || c(p)) && s(vs);
    });
  }
  K(pr);
  var yn = O(pr, 2);
  {
    var ms = (s) => {
      var d = po(), y = O(q(d), 2);
      {
        var T = (N) => {
          var x = mo(), le = q(x);
          ft(le, () => c(oe).expired), K(x), de(() => ce(x, "title", c(at))), re(N, x);
        }, Y = (N) => {
          var x = go(), le = q(x);
          ft(le, () => c(oe).error), K(x), de(() => ce(x, "title", c(at))), re(N, x);
        };
        xe(y, (N) => {
          c(P) === b.EXPIRED ? N(T) : N(Y, !1);
        });
      }
      K(d), re(s, d);
    };
    xe(yn, (s) => {
      (c(at) || c(P) === b.EXPIRED) && s(ms);
    });
  }
  var wn = O(yn, 2);
  {
    var gs = (s) => {
      var d = yo(), y = q(d), T = q(y);
      ft(T, () => c(oe).footer), K(y), K(d), re(s, d);
    };
    xe(wn, (s) => {
      c(oe).footer && (_() !== !0 || c(p)) && s(gs);
    });
  }
  var ps = O(wn, 2);
  {
    var ys = (s) => {
      var d = wo();
      Lt(d, (y) => C(xt, y), () => c(xt)), re(s, d);
    };
    xe(ps, (s) => {
      h() && s(ys);
    });
  }
  return K(St), Lt(St, (s) => C(ne, s), () => c(ne)), de(() => {
    ce(St, "data-state", c(P)), ce(St, "data-floating", h()), ce(ot, "id", c(Wr)), ot.required = r() !== "onsubmit" && (!h() || r() !== "off"), ce(_r, "for", c(Wr));
  }), Ee("invalid", ot, rn), Fr(ot, () => c(it), (s) => C(it, s)), re(e, mn), qr({
    clarify: kt,
    configure: un,
    getConfiguration: cn,
    getFloatingAnchor: fn,
    getPlugin: ls,
    getState: dn,
    hide: hn,
    repositionFloating: At,
    reset: Ct,
    setFloatingAnchor: vn,
    setState: Ge,
    show: gr,
    verify: Ke,
    get auto() {
      return r();
    },
    set auto(s = void 0) {
      r(s), $();
    },
    get blockspam() {
      return i();
    },
    set blockspam(s = void 0) {
      i(s), $();
    },
    get challengeurl() {
      return n();
    },
    set challengeurl(s = void 0) {
      n(s), $();
    },
    get challengejson() {
      return a();
    },
    set challengejson(s = void 0) {
      a(s), $();
    },
    get customfetch() {
      return o();
    },
    set customfetch(s = void 0) {
      o(s), $();
    },
    get debug() {
      return l();
    },
    set debug(s = !1) {
      l(s), $();
    },
    get delay() {
      return u();
    },
    set delay(s = 0) {
      u(s), $();
    },
    get expire() {
      return f();
    },
    set expire(s = void 0) {
      f(s), $();
    },
    get floating() {
      return h();
    },
    set floating(s = void 0) {
      h(s), $();
    },
    get floatinganchor() {
      return v();
    },
    set floatinganchor(s = void 0) {
      v(s), $();
    },
    get floatingoffset() {
      return m();
    },
    set floatingoffset(s = void 0) {
      m(s), $();
    },
    get floatingpersist() {
      return g();
    },
    set floatingpersist(s = !1) {
      g(s), $();
    },
    get hidefooter() {
      return _();
    },
    set hidefooter(s = !1) {
      _(s), $();
    },
    get hidelogo() {
      return A();
    },
    set hidelogo(s = !1) {
      A(s), $();
    },
    get id() {
      return S();
    },
    set id(s = void 0) {
      S(s), $();
    },
    get name() {
      return j();
    },
    set name(s = "altcha") {
      j(s), $();
    },
    get maxnumber() {
      return L();
    },
    set maxnumber(s = 1e6) {
      L(s), $();
    },
    get mockerror() {
      return H();
    },
    set mockerror(s = !1) {
      H(s), $();
    },
    get obfuscated() {
      return Z();
    },
    set obfuscated(s = void 0) {
      Z(s), $();
    },
    get plugins() {
      return Se();
    },
    set plugins(s = void 0) {
      Se(s), $();
    },
    get refetchonexpire() {
      return z();
    },
    set refetchonexpire(s = !0) {
      z(s), $();
    },
    get spamfilter() {
      return W();
    },
    set spamfilter(s = !1) {
      W(s), $();
    },
    get strings() {
      return we();
    },
    set strings(s = void 0) {
      we(s), $();
    },
    get test() {
      return G();
    },
    set test(s = !1) {
      G(s), $();
    },
    get verifyurl() {
      return X();
    },
    set verifyurl(s = void 0) {
      X(s), $();
    },
    get workers() {
      return me();
    },
    set workers(s = Math.min(16, navigator.hardwareConcurrency || 8)) {
      me(s), $();
    },
    get workerurl() {
      return J();
    },
    set workerurl(s = void 0) {
      J(s), $();
    }
  });
}
ka(["change"]);
customElements.define("altcha-widget", xi(
  Eo,
  {
    blockspam: { type: "Boolean" },
    debug: { type: "Boolean" },
    delay: { type: "Number" },
    expire: { type: "Number" },
    floatingoffset: { type: "Number" },
    hidefooter: { type: "Boolean" },
    hidelogo: { type: "Boolean" },
    maxnumber: { type: "Number" },
    mockerror: { type: "Boolean" },
    refetchonexpire: { type: "Boolean" },
    test: { type: "Boolean" },
    workers: { type: "Number" },
    auto: {},
    challengeurl: {},
    challengejson: {},
    customfetch: {},
    floating: {},
    floatinganchor: {},
    floatingpersist: {},
    id: {},
    name: {},
    obfuscated: {},
    plugins: {},
    spamfilter: {},
    strings: {},
    verifyurl: {},
    workerurl: {}
  },
  ["default"],
  [
    "clarify",
    "configure",
    "getConfiguration",
    "getFloatingAnchor",
    "getPlugin",
    "getState",
    "hide",
    "repositionFloating",
    "reset",
    "setFloatingAnchor",
    "setState",
    "show",
    "verify"
  ],
  !1
));
var xo = /* @__PURE__ */ ye('<div class="success svelte-pcfs9x">Form successfully submitted.</div>'), ko = /* @__PURE__ */ ye('<div class="failure svelte-pcfs9x">Failed to submit form.</div>'), Ao = /* @__PURE__ */ ye("<div><div> </div></div>"), Co = /* @__PURE__ */ ye('<main class="svelte-pcfs9x"><h1>ALTCHA</h1> <div><label for="challengeUrl" class="svelte-pcfs9x">Challenge URL <small>(to fetch the challenge from)</small>:</label> <input type="url" id="challengeUrl" placeholder="http://..." class="svelte-pcfs9x"></div> <div><label for="submitUrl" class="svelte-pcfs9x">Submit URL <small>(to submit the data to)</small>:</label> <input type="url" id="submitUrl" placeholder="http://..." class="svelte-pcfs9x"></div> <div><label for="testMode" class="svelte-pcfs9x">Test mode:</label> <input type="checkbox" id="testMode" class="svelte-pcfs9x"></div> <div><label for="mockError" class="svelte-pcfs9x">Mock error:</label> <input type="checkbox" id="mockError" class="svelte-pcfs9x"></div> <!> <!> <form method="post" class="svelte-pcfs9x"><div>Test form</div> <div><input type="text" name="test_field" placeholder="Test field..." class="svelte-pcfs9x"></div> <altcha-widget></altcha-widget> <div><button type="submit">Submit</button> <button type="reset">Reset</button></div></form> <form method="post" class="svelte-pcfs9x"><div>File Upload</div> <div><input type="file" name="test_file" required class="svelte-pcfs9x"></div> <div><input type="file" name="test_file2" class="svelte-pcfs9x"></div> <altcha-widget></altcha-widget> <!> <div><button type="submit">Submit</button> <button type="reset">Reset</button></div></form> <div class="form svelte-pcfs9x"><div>Obfuscated Email: <altcha-widget><a href="#">(click to reveal)</a></altcha-widget></div></div></main>', 2);
const So = {
  hash: "svelte-pcfs9x",
  code: "main.svelte-pcfs9x {display:flex;font-family:sans-serif;flex-direction:column;gap:1rem;margin:6rem auto;max-width:600px;}input.svelte-pcfs9x:not([type=checkbox]) {box-sizing:border-box;font-family:inherit;font-size:inherit;padding:0.3rem;width:100%;}label.svelte-pcfs9x + input:where(.svelte-pcfs9x) {margin-top:0.3rem;}form.svelte-pcfs9x, .form.svelte-pcfs9x {border:1px solid #ddd;display:flex;flex-direction:column;gap:1rem;padding:1rem;}.success.svelte-pcfs9x {color:green;}.failure.svelte-pcfs9x {color:red;}"
};
function Ji(e, t) {
  Kr(t, !0), wi(e, So), globalThis.altchaCreateWorker = (p) => new Da(), globalThis.altchaPlugins = globalThis.altchaPlugins || [];
  const r = location.hash.includes("success"), i = location.hash.includes("failure"), n = new URLSearchParams(location.search);
  let a = he(se(n.get("challengeurl") || "")), o = he(se(n.get("submiturl") || "")), l = he(!1), u = he(!1), f = he(void 0), h = he(void 0), v = he(null);
  ir(() => {
    C(l, se(!c(a) && n.get("test") !== "0" && !c(o)));
  }), zr(() => {
    location.hash = "";
  });
  var m = Co(), g = O(q(m), 2), _ = O(q(g), 2);
  dt(_), K(g);
  var A = O(g, 2), S = O(q(A), 2);
  dt(S), K(A);
  var j = O(A, 2), L = O(q(j), 2);
  dt(L), K(j);
  var H = O(j, 2), Z = O(q(H), 2);
  dt(Z), K(H);
  var Se = O(H, 2);
  {
    var z = (p) => {
      var be = xo();
      re(p, be);
    };
    xe(Se, (p) => {
      r && p(z);
    });
  }
  var W = O(Se, 2);
  {
    var we = (p) => {
      var be = ko();
      re(p, be);
    };
    xe(W, (p) => {
      i && p(we);
    });
  }
  var G = O(W, 2), X = O(q(G), 4);
  te(X, "debug", !0), de(() => te(X, "challengeurl", c(a))), de(() => te(X, "mockerror", c(u))), de(() => te(X, "test", c(l))), Lt(X, (p) => C(f, p), () => c(f)), Cr(2), K(G);
  var me = O(G, 2), J = O(q(me), 6);
  te(J, "debug", !0), te(J, "name", "upload"), te(J, "plugins", "upload"), de(() => te(J, "challengeurl", c(a))), de(() => te(J, "mockerror", c(u))), de(() => te(J, "test", c(l))), Lt(J, (p) => C(f, p), () => c(f));
  var qt = O(J, 2);
  {
    var Ht = (p) => {
      var be = Ao(), Et = q(be), oe = q(Et);
      K(Et), K(be), de(() => Aa(oe, `${c(v).bytesLoaded ?? ""} / ${c(v).bytesTotal ?? ""}`)), re(p, be);
    };
    xe(qt, (p) => {
      c(v) && p(Ht);
    });
  }
  Cr(2), K(me);
  var bt = O(me, 2), je = q(bt), _e = O(q(je));
  te(_e, "obfuscated", "14tZkC2tFAQSrksIcD3OTD0u4ZWE4VkePJ5d0oVyoGmABDyW9YvNTA=="), te(_e, "debug", !0), te(_e, "delay", 1500), te(_e, "name", "email"), te(_e, "plugins", "obfuscation"), te(_e, "floating", !0), Lt(_e, (p) => C(h, p), () => c(h)), K(je), K(bt), K(m), de(() => {
    _.disabled = c(l), S.disabled = c(l), ce(G, "action", c(o)), ce(me, "action", c(o));
  }), Fn(_, () => c(a), (p) => C(a, p)), Fn(S, () => c(o), (p) => C(o, p)), Fr(L, () => c(l), (p) => C(l, p)), Fr(Z, () => c(u), (p) => C(u, p)), Ee("submit", G, (p) => c(l) ? p.preventDefault() : void 0), Ee("statechange", X, (p) => console.log("Event: statechange:", p)), Ee("verified", X, (p) => console.log("Event: verified:", p)), Ee("serververification", X, (p) => console.log("Event: serververification:", p)), Ee("submit", me, (p) => c(l) ? p.preventDefault() : void 0), Ee("upload", J, (p) => console.log("Event: upload", p.detail)), Ee("uploadprogress", J, (p) => {
    C(v, se(p.detail)), console.log("Event: uploadprogress", p.detail);
  }), Ee("serververification", J, (p) => console.log("Event: statechange:", p)), Ee("verified", J, (p) => console.log("Event: verified:", p)), Ee("cleartext", _e, (p) => console.log("Event: cleartext:", p.detail)), re(e, m), qr();
}
xi(Ji, {}, [], [], !0);
const Ro = Hr(Ji, {
  target: document.getElementById("app")
});
export {
  Ro as default
};
