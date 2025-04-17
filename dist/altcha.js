const Qa = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(Qa);
const eo = 1, to = 4, ro = 8, no = 16, io = 1, ao = 2, Zr = "[", si = "[!", ui = "]", Rt = {}, pe = Symbol(), oo = "http://www.w3.org/1999/xhtml", Yn = !1;
function ci(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
var fi = Array.isArray, lo = Array.prototype.indexOf, so = Array.from, lr = Object.keys, Ht = Object.defineProperty, dt = Object.getOwnPropertyDescriptor, uo = Object.getOwnPropertyDescriptors, co = Object.prototype, fo = Array.prototype, di = Object.getPrototypeOf, Wn = Object.isExtensible;
const St = () => {
};
function hi(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function ho(e, t, r = !1) {
  return e === void 0 ? r ? (
    /** @type {() => V} */
    t()
  ) : (
    /** @type {V} */
    t
  ) : e;
}
const Se = 2, vi = 4, gr = 8, Jr = 16, He = 32, vt = 64, sr = 128, Ee = 256, ur = 512, me = 1024, Ue = 2048, gt = 4096, It = 8192, pr = 16384, vo = 32768, Xr = 65536, go = 1 << 19, gi = 1 << 20, Br = 1 << 21, jt = Symbol("$state"), pi = Symbol("legacy props"), po = Symbol("");
function mo(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function yo() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function _o(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function bo() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function wo() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Eo(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Co() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function xo() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ao() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function mr(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let O = !1;
function ze(e) {
  O = e;
}
let V;
function Je(e) {
  if (e === null)
    throw mr(), Rt;
  return V = e;
}
function $t() {
  return Je(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Ke(V)
  );
}
function F(e) {
  if (O) {
    if (/* @__PURE__ */ Ke(V) !== null)
      throw mr(), Rt;
    V = e;
  }
}
function zn(e = 1) {
  if (O) {
    for (var t = e, r = V; t--; )
      r = /** @type {TemplateNode} */
      /* @__PURE__ */ Ke(r);
    V = r;
  }
}
function ko() {
  for (var e = 0, t = V; ; ) {
    if (t.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === ui) {
        if (e === 0) return t;
        e -= 1;
      } else (r === Zr || r === si) && (e += 1);
    }
    var n = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ke(t)
    );
    t.remove(), t = n;
  }
}
let Ro = !1;
function Ne(e) {
  if (typeof e != "object" || e === null || jt in e)
    return e;
  const t = di(e);
  if (t !== co && t !== fo)
    return e;
  var r = /* @__PURE__ */ new Map(), n = fi(e), l = /* @__PURE__ */ S(0), a = U, s = (u) => {
    var c = U;
    ke(a);
    var d = u();
    return ke(c), d;
  };
  return n && r.set("length", /* @__PURE__ */ S(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(u, c, d) {
        (!("value" in d) || d.configurable === !1 || d.enumerable === !1 || d.writable === !1) && Co();
        var p = r.get(c);
        return p === void 0 ? (p = s(() => /* @__PURE__ */ S(d.value)), r.set(c, p)) : y(
          p,
          s(() => Ne(d.value))
        ), !0;
      },
      deleteProperty(u, c) {
        var d = r.get(c);
        if (d === void 0)
          c in u && (r.set(
            c,
            s(() => /* @__PURE__ */ S(pe))
          ), Fr(l));
        else {
          if (n && typeof c == "string") {
            var p = (
              /** @type {Source<number>} */
              r.get("length")
            ), h = Number(c);
            Number.isInteger(h) && h < p.v && y(p, h);
          }
          y(d, pe), Fr(l);
        }
        return !0;
      },
      get(u, c, d) {
        if (c === jt)
          return e;
        var p = r.get(c), h = c in u;
        if (p === void 0 && (!h || dt(u, c)?.writable) && (p = s(() => /* @__PURE__ */ S(Ne(h ? u[c] : pe))), r.set(c, p)), p !== void 0) {
          var g = o(p);
          return g === pe ? void 0 : g;
        }
        return Reflect.get(u, c, d);
      },
      getOwnPropertyDescriptor(u, c) {
        var d = Reflect.getOwnPropertyDescriptor(u, c);
        if (d && "value" in d) {
          var p = r.get(c);
          p && (d.value = o(p));
        } else if (d === void 0) {
          var h = r.get(c), g = h?.v;
          if (h !== void 0 && g !== pe)
            return {
              enumerable: !0,
              configurable: !0,
              value: g,
              writable: !0
            };
        }
        return d;
      },
      has(u, c) {
        if (c === jt)
          return !0;
        var d = r.get(c), p = d !== void 0 && d.v !== pe || Reflect.has(u, c);
        if (d !== void 0 || M !== null && (!p || dt(u, c)?.writable)) {
          d === void 0 && (d = s(() => /* @__PURE__ */ S(p ? Ne(u[c]) : pe)), r.set(c, d));
          var h = o(d);
          if (h === pe)
            return !1;
        }
        return p;
      },
      set(u, c, d, p) {
        var h = r.get(c), g = c in u;
        if (n && c === "length")
          for (var w = d; w < /** @type {Source<number>} */
          h.v; w += 1) {
            var T = r.get(w + "");
            T !== void 0 ? y(T, pe) : w in u && (T = s(() => /* @__PURE__ */ S(pe)), r.set(w + "", T));
          }
        h === void 0 ? (!g || dt(u, c)?.writable) && (h = s(() => /* @__PURE__ */ S(void 0)), y(
          h,
          s(() => Ne(d))
        ), r.set(c, h)) : (g = h.v !== pe, y(
          h,
          s(() => Ne(d))
        ));
        var I = Reflect.getOwnPropertyDescriptor(u, c);
        if (I?.set && I.set.call(p, d), !g) {
          if (n && typeof c == "string") {
            var N = (
              /** @type {Source<number>} */
              r.get("length")
            ), C = Number(c);
            Number.isInteger(C) && C >= N.v && y(N, C + 1);
          }
          Fr(l);
        }
        return !0;
      },
      ownKeys(u) {
        o(l);
        var c = Reflect.ownKeys(u).filter((h) => {
          var g = r.get(h);
          return g === void 0 || g.v !== pe;
        });
        for (var [d, p] of r)
          p.v !== pe && !(d in u) && c.push(d);
        return c;
      },
      setPrototypeOf() {
        xo();
      }
    }
  );
}
function Fr(e, t = 1) {
  y(e, e.v + t);
}
var Zn, mi, yi, _i;
function jr() {
  if (Zn === void 0) {
    Zn = window, mi = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    yi = dt(t, "firstChild").get, _i = dt(t, "nextSibling").get, Wn(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Wn(r) && (r.__t = void 0);
  }
}
function yr(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Ae(e) {
  return yi.call(e);
}
// @__NO_SIDE_EFFECTS__
function Ke(e) {
  return _i.call(e);
}
function D(e, t) {
  if (!O)
    return /* @__PURE__ */ Ae(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Ae(V)
  );
  return r === null && (r = V.appendChild(yr())), Je(r), r;
}
function Mt(e, t) {
  if (!O) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Ae(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Ke(r) : r;
  }
  return V;
}
function k(e, t = 1, r = !1) {
  let n = O ? V : e;
  for (var l; t--; )
    l = n, n = /** @type {TemplateNode} */
    /* @__PURE__ */ Ke(n);
  if (!O)
    return n;
  var a = n?.nodeType;
  if (r && a !== 3) {
    var s = yr();
    return n === null ? l?.after(s) : n.before(s), Je(s), s;
  }
  return Je(n), /** @type {TemplateNode} */
  n;
}
function So(e) {
  e.textContent = "";
}
function bi(e) {
  return e === this.v;
}
function wi(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Qr(e) {
  return !wi(e, this.v);
}
// @__NO_SIDE_EFFECTS__
function _r(e) {
  var t = Se | Ue, r = U !== null && (U.f & Se) !== 0 ? (
    /** @type {Derived} */
    U
  ) : null;
  return M === null || r !== null && (r.f & Ee) !== 0 ? t |= Ee : M.f |= gi, {
    ctx: ce,
    deps: null,
    effects: null,
    equals: bi,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: r ?? M
  };
}
// @__NO_SIDE_EFFECTS__
function Vt(e) {
  const t = /* @__PURE__ */ _r(e);
  return Ni(t), t;
}
// @__NO_SIDE_EFFECTS__
function Io(e) {
  const t = /* @__PURE__ */ _r(e);
  return t.equals = Qr, t;
}
function Ei(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      Xe(
        /** @type {Effect} */
        t[r]
      );
  }
}
function $o(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & Se) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Ci(e) {
  var t, r = M;
  Oe($o(e));
  try {
    Ei(e), t = Oi(e);
  } finally {
    Oe(r);
  }
  return t;
}
function xi(e) {
  var t = Ci(e), r = (Ze || (e.f & Ee) !== 0) && e.deps !== null ? gt : me;
  Ie(e, r), e.equals(t) || (e.v = t, e.wv = Di());
}
function Lo(e) {
  M === null && U === null && _o(), U !== null && (U.f & Ee) !== 0 && M === null && yo(), Wt && mo();
}
function Po(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function pt(e, t, r, n = !0) {
  var l = M, a = {
    ctx: ce,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Ue,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: l,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (r)
    try {
      rn(a), a.f |= vo;
    } catch (c) {
      throw Xe(a), c;
    }
  else t !== null && Cr(a);
  var s = r && a.deps === null && a.first === null && a.nodes_start === null && a.teardown === null && (a.f & (gi | sr)) === 0;
  if (!s && n && (l !== null && Po(a, l), U !== null && (U.f & Se) !== 0)) {
    var u = (
      /** @type {Derived} */
      U
    );
    (u.effects ??= []).push(a);
  }
  return a;
}
function en(e) {
  const t = pt(gr, null, !1);
  return Ie(t, me), t.teardown = e, t;
}
function cr(e) {
  Lo();
  var t = M !== null && (M.f & He) !== 0 && ce !== null && !ce.m;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      ce
    );
    (r.e ??= []).push({
      fn: e,
      effect: M,
      reaction: U
    });
  } else {
    var n = tn(e);
    return n;
  }
}
function To(e) {
  const t = pt(vt, e, !0);
  return () => {
    Xe(t);
  };
}
function No(e) {
  const t = pt(vt, e, !0);
  return (r = {}) => new Promise((n) => {
    r.outro ? Hr(t, () => {
      Xe(t), n(void 0);
    }) : (Xe(t), n(void 0));
  });
}
function tn(e) {
  return pt(vi, e, !1);
}
function br(e) {
  return pt(gr, e, !0);
}
function re(e, t = [], r = _r) {
  const n = t.map(r);
  return Ai(() => e(...n.map(o)));
}
function Ai(e, t = 0) {
  return pt(gr | Jr | t, e, !0);
}
function qr(e, t = !0) {
  return pt(gr | He, e, !0, t);
}
function ki(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Wt, n = U;
    Xn(!0), ke(null);
    try {
      t.call(null);
    } finally {
      Xn(r), ke(n);
    }
  }
}
function Ri(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var n = r.next;
    (r.f & vt) !== 0 ? r.parent = null : Xe(r, t), r = n;
  }
}
function Fo(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & He) === 0 && Xe(t), t = r;
  }
}
function Xe(e, t = !0) {
  var r = !1;
  (t || (e.f & go) !== 0) && e.nodes_start !== null && (Si(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), r = !0), Ri(e, t && !r), vr(e, 0), Ie(e, pr);
  var n = e.transitions;
  if (n !== null)
    for (const a of n)
      a.stop();
  ki(e);
  var l = e.parent;
  l !== null && l.first !== null && Ii(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function Si(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ke(e)
    );
    e.remove(), e = r;
  }
}
function Ii(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function Hr(e, t) {
  var r = [];
  $i(e, r, !0), Do(r, () => {
    Xe(e), t && t();
  });
}
function Do(e, t) {
  var r = e.length;
  if (r > 0) {
    var n = () => --r || t();
    for (var l of e)
      l.out(n);
  } else
    t();
}
function $i(e, t, r) {
  if ((e.f & It) === 0) {
    if (e.f ^= It, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || r) && t.push(s);
    for (var n = e.first; n !== null; ) {
      var l = n.next, a = (n.f & Xr) !== 0 || (n.f & He) !== 0;
      $i(n, t, a ? r : !1), n = l;
    }
  }
}
function Jn(e) {
  Li(e, !0);
}
function Li(e, t) {
  if ((e.f & It) !== 0) {
    e.f ^= It, (e.f & me) === 0 && (e.f ^= me), zt(e) && (Ie(e, Ue), Cr(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, l = (r.f & Xr) !== 0 || (r.f & He) !== 0;
      Li(r, l ? t : !1), r = n;
    }
    if (e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || t) && a.in();
  }
}
const Uo = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let Kt = [], Gt = [];
function Pi() {
  var e = Kt;
  Kt = [], hi(e);
}
function Ti() {
  var e = Gt;
  Gt = [], hi(e);
}
function wr(e) {
  Kt.length === 0 && queueMicrotask(Pi), Kt.push(e);
}
function Oo(e) {
  Gt.length === 0 && Uo(Ti), Gt.push(e);
}
function Mo() {
  Kt.length > 0 && Pi(), Gt.length > 0 && Ti();
}
let ir = !1, fr = !1, dr = null, ht = !1, Wt = !1;
function Xn(e) {
  Wt = e;
}
let qt = [];
let U = null, Fe = !1;
function ke(e) {
  U = e;
}
let M = null;
function Oe(e) {
  M = e;
}
let qe = null;
function Ni(e) {
  U !== null && U.f & Br && (qe === null ? qe = [e] : qe.push(e));
}
let ue = null, we = 0, xe = null;
function Vo(e) {
  xe = e;
}
let Fi = 1, hr = 0, Ze = !1;
function Di() {
  return ++Fi;
}
function zt(e) {
  var t = e.f;
  if ((t & Ue) !== 0)
    return !0;
  if ((t & gt) !== 0) {
    var r = e.deps, n = (t & Ee) !== 0;
    if (r !== null) {
      var l, a, s = (t & ur) !== 0, u = n && M !== null && !Ze, c = r.length;
      if (s || u) {
        var d = (
          /** @type {Derived} */
          e
        ), p = d.parent;
        for (l = 0; l < c; l++)
          a = r[l], (s || !a?.reactions?.includes(d)) && (a.reactions ??= []).push(d);
        s && (d.f ^= ur), u && p !== null && (p.f & Ee) === 0 && (d.f ^= Ee);
      }
      for (l = 0; l < c; l++)
        if (a = r[l], zt(
          /** @type {Derived} */
          a
        ) && xi(
          /** @type {Derived} */
          a
        ), a.wv > e.wv)
          return !0;
    }
    (!n || M !== null && !Ze) && Ie(e, me);
  }
  return !1;
}
function Bo(e, t) {
  for (var r = t; r !== null; ) {
    if ((r.f & sr) !== 0)
      try {
        r.fn(e);
        return;
      } catch {
        r.f ^= sr;
      }
    r = r.parent;
  }
  throw ir = !1, e;
}
function Qn(e) {
  return (e.f & pr) === 0 && (e.parent === null || (e.parent.f & sr) === 0);
}
function Er(e, t, r, n) {
  if (ir) {
    if (r === null && (ir = !1), Qn(t))
      throw e;
    return;
  }
  if (r !== null && (ir = !0), Bo(e, t), Qn(t))
    throw e;
}
function Ui(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null)
    for (var l = 0; l < n.length; l++) {
      var a = n[l];
      qe?.includes(e) || ((a.f & Se) !== 0 ? Ui(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (r ? Ie(a, Ue) : (a.f & me) !== 0 && Ie(a, gt), Cr(
        /** @type {Effect} */
        a
      )));
    }
}
function Oi(e) {
  var t = ue, r = we, n = xe, l = U, a = Ze, s = qe, u = ce, c = Fe, d = e.f;
  ue = /** @type {null | Value[]} */
  null, we = 0, xe = null, Ze = (d & Ee) !== 0 && (Fe || !ht || U === null), U = (d & (He | vt)) === 0 ? e : null, qe = null, ei(e.ctx), Fe = !1, hr++, e.f |= Br;
  try {
    var p = (
      /** @type {Function} */
      (0, e.fn)()
    ), h = e.deps;
    if (ue !== null) {
      var g;
      if (vr(e, we), h !== null && we > 0)
        for (h.length = we + ue.length, g = 0; g < ue.length; g++)
          h[we + g] = ue[g];
      else
        e.deps = h = ue;
      if (!Ze)
        for (g = we; g < h.length; g++)
          (h[g].reactions ??= []).push(e);
    } else h !== null && we < h.length && (vr(e, we), h.length = we);
    if (ji() && xe !== null && !Fe && h !== null && (e.f & (Se | gt | Ue)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      xe.length; g++)
        Ui(
          xe[g],
          /** @type {Effect} */
          e
        );
    return l !== null && l !== e && (hr++, xe !== null && (n === null ? n = xe : n.push(.../** @type {Source[]} */
    xe))), p;
  } finally {
    ue = t, we = r, xe = n, U = l, Ze = a, qe = s, ei(u), Fe = c, e.f ^= Br;
  }
}
function jo(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = lo.call(r, e);
    if (n !== -1) {
      var l = r.length - 1;
      l === 0 ? r = t.reactions = null : (r[n] = r[l], r.pop());
    }
  }
  r === null && (t.f & Se) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ue === null || !ue.includes(t)) && (Ie(t, gt), (t.f & (Ee | ur)) === 0 && (t.f ^= ur), Ei(
    /** @type {Derived} **/
    t
  ), vr(
    /** @type {Derived} **/
    t,
    0
  ));
}
function vr(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      jo(e, r[n]);
}
function rn(e) {
  var t = e.f;
  if ((t & pr) === 0) {
    Ie(e, me);
    var r = M, n = ce, l = ht;
    M = e, ht = !0;
    try {
      (t & Jr) !== 0 ? Fo(e) : Ri(e), ki(e);
      var a = Oi(e);
      e.teardown = typeof a == "function" ? a : null, e.wv = Fi;
      var s = e.deps, u;
      Yn && Ro && e.f & Ue;
    } catch (c) {
      Er(c, e, r, n || e.ctx);
    } finally {
      ht = l, M = r;
    }
  }
}
function qo() {
  try {
    bo();
  } catch (e) {
    if (dr !== null)
      Er(e, dr, null);
    else
      throw e;
  }
}
function Mi() {
  var e = ht;
  try {
    var t = 0;
    for (ht = !0; qt.length > 0; ) {
      t++ > 1e3 && qo();
      var r = qt, n = r.length;
      qt = [];
      for (var l = 0; l < n; l++) {
        var a = Ko(r[l]);
        Ho(a);
      }
      Yt.clear();
    }
  } finally {
    fr = !1, ht = e, dr = null;
  }
}
function Ho(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var n = e[r];
      if ((n.f & (pr | It)) === 0)
        try {
          zt(n) && (rn(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null ? Ii(n) : n.fn = null));
        } catch (l) {
          Er(l, n, null, n.ctx);
        }
    }
}
function Cr(e) {
  fr || (fr = !0, queueMicrotask(Mi));
  for (var t = dr = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if ((r & (vt | He)) !== 0) {
      if ((r & me) === 0) return;
      t.f ^= me;
    }
  }
  qt.push(t);
}
function Ko(e) {
  for (var t = [], r = e; r !== null; ) {
    var n = r.f, l = (n & (He | vt)) !== 0, a = l && (n & me) !== 0;
    if (!a && (n & It) === 0) {
      if ((n & vi) !== 0)
        t.push(r);
      else if (l)
        r.f ^= me;
      else
        try {
          zt(r) && rn(r);
        } catch (c) {
          Er(c, r, null, r.ctx);
        }
      var s = r.first;
      if (s !== null) {
        r = s;
        continue;
      }
    }
    var u = r.parent;
    for (r = r.next; r === null && u !== null; )
      r = u.next, u = u.parent;
  }
  return t;
}
function x(e) {
  for (var t; ; ) {
    if (Mo(), qt.length === 0)
      return (
        /** @type {T} */
        t
      );
    fr = !0, Mi();
  }
}
async function Dr() {
  await Promise.resolve(), x();
}
function o(e) {
  var t = e.f, r = (t & Se) !== 0;
  if (U !== null && !Fe) {
    if (!qe?.includes(e)) {
      var n = U.deps;
      e.rv < hr && (e.rv = hr, ue === null && n !== null && n[we] === e ? we++ : ue === null ? ue = [e] : (!Ze || !ue.includes(e)) && ue.push(e));
    }
  } else if (r && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var l = (
      /** @type {Derived} */
      e
    ), a = l.parent;
    a !== null && (a.f & Ee) === 0 && (l.f ^= Ee);
  }
  return r && (l = /** @type {Derived} */
  e, zt(l) && xi(l)), Wt && Yt.has(e) ? Yt.get(e) : e.v;
}
function Qe(e) {
  var t = Fe;
  try {
    return Fe = !0, e();
  } finally {
    Fe = t;
  }
}
const Go = -7169;
function Ie(e, t) {
  e.f = e.f & Go | t;
}
const Yt = /* @__PURE__ */ new Map();
function Vi(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: bi,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function S(e, t) {
  const r = Vi(e);
  return Ni(r), r;
}
// @__NO_SIDE_EFFECTS__
function nn(e, t = !1) {
  const r = Vi(e);
  return t || (r.equals = Qr), r;
}
function y(e, t, r = !1) {
  U !== null && !Fe && ji() && (U.f & (Se | Jr)) !== 0 && !qe?.includes(e) && Ao();
  let n = r ? Ne(t) : t;
  return Yo(e, n);
}
function Yo(e, t) {
  if (!e.equals(t)) {
    var r = e.v;
    Wt ? Yt.set(e, t) : Yt.set(e, r), e.v = t, (e.f & Se) !== 0 && ((e.f & Ue) !== 0 && Ci(
      /** @type {Derived} */
      e
    ), Ie(e, (e.f & Ee) === 0 ? me : gt)), e.wv = Di(), Bi(e, Ue), M !== null && (M.f & me) !== 0 && (M.f & (He | vt)) === 0 && (xe === null ? Vo([e]) : xe.push(e));
  }
  return t;
}
function Bi(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var n = r.length, l = 0; l < n; l++) {
      var a = r[l], s = a.f;
      (s & Ue) === 0 && (Ie(a, t), (s & (me | Ee)) !== 0 && ((s & Se) !== 0 ? Bi(
        /** @type {Derived} */
        a,
        gt
      ) : Cr(
        /** @type {Effect} */
        a
      )));
    }
}
let ce = null;
function ei(e) {
  ce = e;
}
function an(e, t = !1, r) {
  var n = ce = {
    p: ce,
    c: null,
    d: !1,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
  en(() => {
    n.d = !0;
  });
}
function on(e) {
  const t = ce;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const s = t.e;
    if (s !== null) {
      var r = M, n = U;
      t.e = null;
      try {
        for (var l = 0; l < s.length; l++) {
          var a = s[l];
          Oe(a.effect), ke(a.reaction), tn(a.fn);
        }
      } finally {
        Oe(r), ke(n);
      }
    }
    ce = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function ji() {
  return !0;
}
const Wo = ["touchstart", "touchmove"];
function zo(e) {
  return Wo.includes(e);
}
function Zo(e, t) {
  if (t) {
    const r = document.body;
    e.autofocus = !0, wr(() => {
      document.activeElement === r && e.focus();
    });
  }
}
let ti = !1;
function qi() {
  ti || (ti = !0, document.addEventListener(
    "reset",
    (e) => {
      Promise.resolve().then(() => {
        if (!e.defaultPrevented)
          for (
            const t of
            /**@type {HTMLFormElement} */
            e.target.elements
          )
            t.__on_r?.();
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
    { capture: !0 }
  ));
}
function Hi(e) {
  var t = U, r = M;
  ke(null), Oe(null);
  try {
    return e();
  } finally {
    ke(t), Oe(r);
  }
}
function Ki(e, t, r, n = r) {
  e.addEventListener(t, () => Hi(r));
  const l = e.__on_r;
  l ? e.__on_r = () => {
    l(), n(!0);
  } : e.__on_r = () => n(!0), qi();
}
const Gi = /* @__PURE__ */ new Set(), Kr = /* @__PURE__ */ new Set();
function Jo(e, t, r, n = {}) {
  function l(a) {
    if (n.capture || Bt.call(t, a), !a.cancelBubble)
      return Hi(() => r?.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? wr(() => {
    t.addEventListener(e, l, n);
  }) : t.addEventListener(e, l, n), l;
}
function te(e, t, r, n, l) {
  var a = { capture: n, passive: l }, s = Jo(e, t, r, a);
  (t === document.body || t === window || t === document) && en(() => {
    t.removeEventListener(e, s, a);
  });
}
function Xo(e) {
  for (var t = 0; t < e.length; t++)
    Gi.add(e[t]);
  for (var r of Kr)
    r(e);
}
function Bt(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, l = e.composedPath?.() || [], a = (
    /** @type {null | Element} */
    l[0] || e.target
  ), s = 0, u = e.__root;
  if (u) {
    var c = l.indexOf(u);
    if (c !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var d = l.indexOf(t);
    if (d === -1)
      return;
    c <= d && (s = c);
  }
  if (a = /** @type {Element} */
  l[s] || e.target, a !== t) {
    Ht(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      }
    });
    var p = U, h = M;
    ke(null), Oe(null);
    try {
      for (var g, w = []; a !== null; ) {
        var T = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var I = a["__" + n];
          if (I != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a))
            if (fi(I)) {
              var [N, ...C] = I;
              N.apply(a, [e, ...C]);
            } else
              I.call(a, e);
        } catch (X) {
          g ? w.push(X) : g = X;
        }
        if (e.cancelBubble || T === t || T === null)
          break;
        a = T;
      }
      if (g) {
        for (let X of w)
          queueMicrotask(() => {
            throw X;
          });
        throw g;
      }
    } finally {
      e.__root = t, delete e.currentTarget, ke(p), Oe(h);
    }
  }
}
function ln(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function De(e, t) {
  var r = (
    /** @type {Effect} */
    M
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function fe(e, t) {
  var r = (t & io) !== 0, n = (t & ao) !== 0, l, a = !e.startsWith("<!>");
  return () => {
    if (O)
      return De(V, null), V;
    l === void 0 && (l = ln(a ? e : "<!>" + e), r || (l = /** @type {Node} */
    /* @__PURE__ */ Ae(l)));
    var s = (
      /** @type {TemplateNode} */
      n || mi ? document.importNode(l, !0) : l.cloneNode(!0)
    );
    if (r) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ae(s)
      ), c = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      De(u, c);
    } else
      De(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function xr(e, t, r = "svg") {
  var n = !e.startsWith("<!>"), l = `<${r}>${n ? e : "<!>" + e}</${r}>`, a;
  return () => {
    if (O)
      return De(V, null), V;
    if (!a) {
      var s = (
        /** @type {DocumentFragment} */
        ln(l)
      ), u = (
        /** @type {Element} */
        /* @__PURE__ */ Ae(s)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ Ae(u);
    }
    var c = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return De(c, c), c;
  };
}
function rr() {
  if (O)
    return De(V, null), V;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = yr();
  return e.append(t, r), De(t, r), e;
}
function K(e, t) {
  if (O) {
    M.nodes_end = V, $t();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Yi(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ??= e.nodeValue) && (e.__t = r, e.nodeValue = r + "");
}
function sn(e, t) {
  return Wi(e, t);
}
function Qo(e, t) {
  jr(), t.intro = t.intro ?? !1;
  const r = t.target, n = O, l = V;
  try {
    for (var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ae(r)
    ); a && (a.nodeType !== 8 || /** @type {Comment} */
    a.data !== Zr); )
      a = /** @type {TemplateNode} */
      /* @__PURE__ */ Ke(a);
    if (!a)
      throw Rt;
    ze(!0), Je(
      /** @type {Comment} */
      a
    ), $t();
    const s = Wi(e, { ...t, anchor: a });
    if (V === null || V.nodeType !== 8 || /** @type {Comment} */
    V.data !== ui)
      throw mr(), Rt;
    return ze(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s === Rt)
      return t.recover === !1 && wo(), jr(), So(r), ze(!1), sn(e, t);
    throw s;
  } finally {
    ze(n), Je(l);
  }
}
const xt = /* @__PURE__ */ new Map();
function Wi(e, { target: t, anchor: r, props: n = {}, events: l, context: a, intro: s = !0 }) {
  jr();
  var u = /* @__PURE__ */ new Set(), c = (h) => {
    for (var g = 0; g < h.length; g++) {
      var w = h[g];
      if (!u.has(w)) {
        u.add(w);
        var T = zo(w);
        t.addEventListener(w, Bt, { passive: T });
        var I = xt.get(w);
        I === void 0 ? (document.addEventListener(w, Bt, { passive: T }), xt.set(w, 1)) : xt.set(w, I + 1);
      }
    }
  };
  c(so(Gi)), Kr.add(c);
  var d = void 0, p = No(() => {
    var h = r ?? t.appendChild(yr());
    return qr(() => {
      if (a) {
        an({});
        var g = (
          /** @type {ComponentContext} */
          ce
        );
        g.c = a;
      }
      l && (n.$$events = l), O && De(
        /** @type {TemplateNode} */
        h,
        null
      ), d = e(h, n) || {}, O && (M.nodes_end = V), a && on();
    }), () => {
      for (var g of u) {
        t.removeEventListener(g, Bt);
        var w = (
          /** @type {number} */
          xt.get(g)
        );
        --w === 0 ? (document.removeEventListener(g, Bt), xt.delete(g)) : xt.set(g, w);
      }
      Kr.delete(c), h !== r && h.parentNode?.removeChild(h);
    };
  });
  return Gr.set(d, p), d;
}
let Gr = /* @__PURE__ */ new WeakMap();
function el(e, t) {
  const r = Gr.get(e);
  return r ? (Gr.delete(e), r(t)) : Promise.resolve();
}
function J(e, t, [r, n] = [0, 0]) {
  O && r === 0 && $t();
  var l = e, a = null, s = null, u = pe, c = r > 0 ? Xr : 0, d = !1;
  const p = (g, w = !0) => {
    d = !0, h(w, g);
  }, h = (g, w) => {
    if (u === (u = g)) return;
    let T = !1;
    if (O && n !== -1) {
      if (r === 0) {
        const N = (
          /** @type {Comment} */
          l.data
        );
        N === Zr ? n = 0 : N === si ? n = 1 / 0 : (n = parseInt(N.substring(1)), n !== n && (n = u ? 1 / 0 : -1));
      }
      const I = n > r;
      !!u === I && (l = ko(), Je(l), ze(!1), T = !0, n = -1);
    }
    u ? (a ? Jn(a) : w && (a = qr(() => w(l))), s && Hr(s, () => {
      s = null;
    })) : (s ? Jn(s) : w && (s = qr(() => w(l, [r + 1, n]))), a && Hr(a, () => {
      a = null;
    })), T && ze(!0);
  };
  Ai(() => {
    d = !1, t(p), d || h(null, null);
  }, c), O && (l = V);
}
function ct(e, t, r = !1, n = !1, l = !1) {
  var a = e, s = "";
  re(() => {
    var u = (
      /** @type {Effect} */
      M
    );
    if (s === (s = t() ?? "")) {
      O && $t();
      return;
    }
    if (u.nodes_start !== null && (Si(
      u.nodes_start,
      /** @type {TemplateNode} */
      u.nodes_end
    ), u.nodes_start = u.nodes_end = null), s !== "") {
      if (O) {
        V.data;
        for (var c = $t(), d = c; c !== null && (c.nodeType !== 8 || /** @type {Comment} */
        c.data !== ""); )
          d = c, c = /** @type {TemplateNode} */
          /* @__PURE__ */ Ke(c);
        if (c === null)
          throw mr(), Rt;
        De(V, d), a = Je(c);
        return;
      }
      var p = s + "";
      r ? p = `<svg>${p}</svg>` : n && (p = `<math>${p}</math>`);
      var h = ln(p);
      if ((r || n) && (h = /** @type {Element} */
      /* @__PURE__ */ Ae(h)), De(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ae(h),
        /** @type {TemplateNode} */
        h.lastChild
      ), r || n)
        for (; /* @__PURE__ */ Ae(h); )
          a.before(
            /** @type {Node} */
            /* @__PURE__ */ Ae(h)
          );
      else
        a.before(h);
    }
  });
}
function tl(e, t, r, n, l) {
  O && $t();
  var a = t.$$slots?.[r], s = !1;
  a === !0 && (a = t.children, s = !0), a === void 0 || a(e, s ? () => n : n);
}
function rl(e, t) {
  wr(() => {
    var r = e.getRootNode(), n = (
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
    if (!n.querySelector("#" + t.hash)) {
      const l = document.createElement("style");
      l.id = t.hash, l.textContent = t.code, n.appendChild(l);
    }
  });
}
const ri = [...` 	
\r\f \v\uFEFF`];
function nl(e, t, r) {
  var n = "" + e;
  if (r) {
    for (var l in r)
      if (r[l])
        n = n ? n + " " + l : l;
      else if (n.length)
        for (var a = l.length, s = 0; (s = n.indexOf(l, s)) >= 0; ) {
          var u = s + a;
          (s === 0 || ri.includes(n[s - 1])) && (u === n.length || ri.includes(n[u])) ? n = (s === 0 ? "" : n.substring(0, s)) + n.substring(u + 1) : s = u;
        }
  }
  return n === "" ? null : n;
}
function il(e, t, r, n, l, a) {
  var s = e.__className;
  if (O || s !== r || s === void 0) {
    var u = nl(r, n, a);
    (!O || u !== e.getAttribute("class")) && (u == null ? e.removeAttribute("class") : e.className = u), e.__className = r;
  } else if (a && l !== a)
    for (var c in a) {
      var d = !!a[c];
      (l == null || d !== !!l[c]) && e.classList.toggle(c, d);
    }
  return a;
}
const al = Symbol("is custom element"), ol = Symbol("is html");
function kt(e) {
  if (O) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var n = e.value;
          P(e, "value", null), e.value = n;
        }
        if (e.hasAttribute("checked")) {
          var l = e.checked;
          P(e, "checked", null), e.checked = l;
        }
      }
    };
    e.__on_r = r, Oo(r), qi();
  }
}
function ll(e, t) {
  var r = zi(e);
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function P(e, t, r, n) {
  var l = zi(e);
  O && (l[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || l[t] !== (l[t] = r) && (t === "loading" && (e[po] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Zi(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function se(e, t, r) {
  var n = U, l = M;
  let a = O;
  O && ze(!1), ke(null), Oe(null);
  try {
    // `style` should use `set_attribute` rather than the setter
    t !== "style" && // Don't compute setters for custom elements while they aren't registered yet,
    // because during their upgrade/instantiation they might add more setters.
    // Instead, fall back to a simple "an object, then set as property" heuristic.
    (Yr.has(e.nodeName) || // customElements may not be available in browser extension contexts
    !customElements || customElements.get(e.tagName.toLowerCase()) ? Zi(e).includes(t) : r && typeof r == "object") ? e[t] = r : P(e, t, r == null ? r : String(r));
  } finally {
    ke(n), Oe(l), a && ze(!0);
  }
}
function zi(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [al]: e.nodeName.includes("-"),
      [ol]: e.namespaceURI === oo
    }
  );
}
var Yr = /* @__PURE__ */ new Map();
function Zi(e) {
  var t = Yr.get(e.nodeName);
  if (t) return t;
  Yr.set(e.nodeName, t = []);
  for (var r, n = e, l = Element.prototype; l !== n; ) {
    r = uo(n);
    for (var a in r)
      r[a].set && t.push(a);
    n = di(n);
  }
  return t;
}
function ni(e, t, r = t) {
  Ki(e, "input", (n) => {
    var l = n ? e.defaultValue : e.value;
    if (l = Ur(e) ? Or(l) : l, r(l), l !== (l = t())) {
      var a = e.selectionStart, s = e.selectionEnd;
      e.value = l ?? "", s !== null && (e.selectionStart = a, e.selectionEnd = Math.min(s, e.value.length));
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  (O && e.defaultValue !== e.value || // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Qe(t) == null && e.value) && r(Ur(e) ? Or(e.value) : e.value), br(() => {
    var n = t();
    Ur(e) && n === Or(e.value) || e.type === "date" && !n && !e.value || n !== e.value && (e.value = n ?? "");
  });
}
function Wr(e, t, r = t) {
  Ki(e, "change", (n) => {
    var l = n ? e.defaultChecked : e.checked;
    r(l);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  (O && e.defaultChecked !== e.checked || // If defaultChecked is set, then checked == defaultChecked
  Qe(t) == null) && r(e.checked), br(() => {
    var n = t();
    e.checked = !!n;
  });
}
function Ur(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function Or(e) {
  return e === "" ? null : +e;
}
function ii(e, t) {
  return e === t || e?.[jt] === t;
}
function ft(e = {}, t, r, n) {
  return tn(() => {
    var l, a;
    return br(() => {
      l = a, a = [], Qe(() => {
        e !== r(...a) && (t(e, ...a), l && ii(r(...l), e) && t(null, ...l));
      });
    }), () => {
      wr(() => {
        a && ii(r(...a), e) && t(null, ...a);
      });
    };
  }), e;
}
function un(e) {
  ce === null && ci(), cr(() => {
    const t = Qe(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function sl(e) {
  ce === null && ci(), un(() => () => Qe(e));
}
function Ji(e, t, r) {
  if (e == null)
    return t(void 0), St;
  const n = Qe(
    () => e.subscribe(
      t,
      // @ts-expect-error
      r
    )
  );
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
const At = [];
function ul(e, t = St) {
  let r = null;
  const n = /* @__PURE__ */ new Set();
  function l(u) {
    if (wi(e, u) && (e = u, r)) {
      const c = !At.length;
      for (const d of n)
        d[1](), At.push(d, e);
      if (c) {
        for (let d = 0; d < At.length; d += 2)
          At[d][0](At[d + 1]);
        At.length = 0;
      }
    }
  }
  function a(u) {
    l(u(
      /** @type {T} */
      e
    ));
  }
  function s(u, c = St) {
    const d = [u, c];
    return n.add(d), n.size === 1 && (r = t(l, a) || St), u(
      /** @type {T} */
      e
    ), () => {
      n.delete(d), n.size === 0 && r && (r(), r = null);
    };
  }
  return { set: l, update: a, subscribe: s };
}
function ar(e) {
  let t;
  return Ji(e, (r) => t = r)(), t;
}
let nr = !1, zr = Symbol();
function cl(e, t, r) {
  const n = r[t] ??= {
    store: null,
    source: /* @__PURE__ */ nn(void 0),
    unsubscribe: St
  };
  if (n.store !== e && !(zr in r))
    if (n.unsubscribe(), n.store = e ?? null, e == null)
      n.source.v = void 0, n.unsubscribe = St;
    else {
      var l = !0;
      n.unsubscribe = Ji(e, (a) => {
        l ? n.source.v = a : y(n.source, a);
      }), l = !1;
    }
  return e && zr in r ? ar(e) : o(n.source);
}
function fl() {
  const e = {};
  function t() {
    en(() => {
      for (var r in e)
        e[r].unsubscribe();
      Ht(e, zr, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function dl(e) {
  var t = nr;
  try {
    return nr = !1, [e(), nr];
  } finally {
    nr = t;
  }
}
function ai(e) {
  return e.ctx?.d ?? !1;
}
function A(e, t, r, n) {
  var l = (r & eo) !== 0, a = !0, s = (r & ro) !== 0, u = (r & no) !== 0, c = !1, d;
  s ? [d, c] = dl(() => (
    /** @type {V} */
    e[t]
  )) : d = /** @type {V} */
  e[t];
  var p = jt in e || pi in e, h = s && (dt(e, t)?.set ?? (p && t in e && ((q) => e[t] = q))) || void 0, g = (
    /** @type {V} */
    n
  ), w = !0, T = !1, I = () => (T = !0, w && (w = !1, u ? g = Qe(
    /** @type {() => V} */
    n
  ) : g = /** @type {V} */
  n), g);
  d === void 0 && n !== void 0 && (h && a && Eo(), d = I(), h && h(d));
  var N;
  if (N = () => {
    var q = (
      /** @type {V} */
      e[t]
    );
    return q === void 0 ? I() : (w = !0, T = !1, q);
  }, (r & to) === 0)
    return N;
  if (h) {
    var C = e.$$legacy;
    return function(q, ae) {
      return arguments.length > 0 ? ((!ae || C || c) && h(ae ? N() : q), q) : N();
    };
  }
  var X = !1, Ce = /* @__PURE__ */ nn(d), Z = /* @__PURE__ */ _r(() => {
    var q = N(), ae = o(Ce);
    return X ? (X = !1, ae) : Ce.v = q;
  });
  return s && o(Z), l || (Z.equals = Qr), function(q, ae) {
    if (arguments.length > 0) {
      const Me = ae ? o(Z) : s ? Ne(q) : q;
      if (!Z.equals(Me)) {
        if (X = !0, y(Ce, Me), T && g !== void 0 && (g = Me), ai(Z))
          return q;
        Qe(() => o(Z));
      }
      return q;
    }
    return ai(Z) ? Z.v : o(Z);
  };
}
function hl(e) {
  return new vl(e);
}
class vl {
  /** @type {any} */
  #t;
  /** @type {Record<string, any>} */
  #e;
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    var r = /* @__PURE__ */ new Map(), n = (a, s) => {
      var u = /* @__PURE__ */ nn(s);
      return r.set(a, u), u;
    };
    const l = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(a, s) {
          return o(r.get(s) ?? n(s, Reflect.get(a, s)));
        },
        has(a, s) {
          return s === pi ? !0 : (o(r.get(s) ?? n(s, Reflect.get(a, s))), Reflect.has(a, s));
        },
        set(a, s, u) {
          return y(r.get(s) ?? n(s, u), u), Reflect.set(a, s, u);
        }
      }
    );
    this.#e = (t.hydrate ? Qo : sn)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: l,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    }), (!t?.props?.$$host || t.sync === !1) && x(), this.#t = l.$$events;
    for (const a of Object.keys(this.#e))
      a === "$set" || a === "$destroy" || a === "$on" || Ht(this, a, {
        get() {
          return this.#e[a];
        },
        /** @param {any} value */
        set(s) {
          this.#e[a] = s;
        },
        enumerable: !0
      });
    this.#e.$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(l, a);
    }, this.#e.$destroy = () => {
      el(this.#e);
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    this.#e.$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    this.#t[t] = this.#t[t] || [];
    const n = (...l) => r.call(this, ...l);
    return this.#t[t].push(n), () => {
      this.#t[t] = this.#t[t].filter(
        /** @param {any} fn */
        (l) => l !== n
      );
    };
  }
  $destroy() {
    this.#e.$destroy();
  }
}
let Xi;
typeof HTMLElement == "function" && (Xi = class extends HTMLElement {
  /** The Svelte component constructor */
  $$ctor;
  /** Slots */
  $$s;
  /** @type {any} The Svelte component instance */
  $$c;
  /** Whether or not the custom element is connected */
  $$cn = !1;
  /** @type {Record<string, any>} Component props data */
  $$d = {};
  /** `true` if currently in the process of reflecting component props back to attributes */
  $$r = !1;
  /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
  $$p_d = {};
  /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
  $$l = {};
  /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
  $$l_u = /* @__PURE__ */ new Map();
  /** @type {any} The managed render effect for reflecting attributes */
  $$me;
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(e, t, r) {
    super(), this.$$ctor = e, this.$$s = t, r && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(e, t, r) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(t), this.$$c) {
      const n = this.$$c.$on(e, t);
      this.$$l_u.set(t, n);
    }
    super.addEventListener(e, t, r);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(e, t, r) {
    if (super.removeEventListener(e, t, r), this.$$c) {
      const n = this.$$l_u.get(t);
      n && (n(), this.$$l_u.delete(t));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let e = function(n) {
        return (l) => {
          const a = document.createElement("slot");
          n !== "default" && (a.name = n), K(l, a);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, r = gl(this);
      for (const n of this.$$s)
        n in r && (n === "default" && !this.$$d.children ? (this.$$d.children = e(n), t.default = !0) : t[n] = e(n));
      for (const n of this.attributes) {
        const l = this.$$g_p(n.name);
        l in this.$$d || (this.$$d[l] = or(l, n.value, this.$$p_d, "toProp"));
      }
      for (const n in this.$$p_d)
        !(n in this.$$d) && this[n] !== void 0 && (this.$$d[n] = this[n], delete this[n]);
      this.$$c = hl({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$host: this
        }
      }), this.$$me = To(() => {
        br(() => {
          this.$$r = !0;
          for (const n of lr(this.$$c)) {
            if (!this.$$p_d[n]?.reflect) continue;
            this.$$d[n] = this.$$c[n];
            const l = or(
              n,
              this.$$d[n],
              this.$$p_d,
              "toAttribute"
            );
            l == null ? this.removeAttribute(this.$$p_d[n].attribute || n) : this.setAttribute(this.$$p_d[n].attribute || n, l);
          }
          this.$$r = !1;
        });
      });
      for (const n in this.$$l)
        for (const l of this.$$l[n]) {
          const a = this.$$c.$on(n, l);
          this.$$l_u.set(l, a);
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
  attributeChangedCallback(e, t, r) {
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = or(e, r, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(e) {
    return lr(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function or(e, t, r, n) {
  const l = r[e]?.type;
  if (t = l === "Boolean" && typeof t != "boolean" ? t != null : t, !n || !r[e])
    return t;
  if (n === "toAttribute")
    switch (l) {
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
    switch (l) {
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
function gl(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function Qi(e, t, r, n, l, a) {
  let s = class extends Xi {
    constructor() {
      super(e, r, l), this.$$p_d = t;
    }
    static get observedAttributes() {
      return lr(t).map(
        (u) => (t[u].attribute || u).toLowerCase()
      );
    }
  };
  return lr(t).forEach((u) => {
    Ht(s.prototype, u, {
      get() {
        return this.$$c && u in this.$$c ? this.$$c[u] : this.$$d[u];
      },
      set(c) {
        c = or(u, c, t), this.$$d[u] = c;
        var d = this.$$c;
        if (d) {
          var p = dt(d, u)?.get;
          p ? d[u] = c : d.$set({ [u]: c });
        }
      }
    });
  }), n.forEach((u) => {
    Ht(s.prototype, u, {
      get() {
        return this.$$c?.[u];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
const ea = `(function(){"use strict";const d=new TextEncoder;function p(e){return[...new Uint8Array(e)].map(t=>t.toString(16).padStart(2,"0")).join("")}async function b(e,t,r){if(typeof crypto>"u"||!("subtle"in crypto)||!("digest"in crypto.subtle))throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");return p(await crypto.subtle.digest(r.toUpperCase(),d.encode(e+t)))}function w(e,t,r="SHA-256",n=1e6,l=0){const o=new AbortController,a=Date.now();return{promise:(async()=>{for(let c=l;c<=n;c+=1){if(o.signal.aborted)return null;if(await b(t,c,r)===e)return{number:c,took:Date.now()-a}}return null})(),controller:o}}function h(e){const t=atob(e),r=new Uint8Array(t.length);for(let n=0;n<t.length;n++)r[n]=t.charCodeAt(n);return r}function g(e,t=12){const r=new Uint8Array(t);for(let n=0;n<t;n++)r[n]=e%256,e=Math.floor(e/256);return r}async function m(e,t="",r=1e6,n=0){const l="AES-GCM",o=new AbortController,a=Date.now(),s=async()=>{for(let i=n;i<=r;i+=1){if(o.signal.aborted||!c||!u)return null;try{const f=await crypto.subtle.decrypt({name:l,iv:g(i)},c,u);if(f)return{clearText:new TextDecoder().decode(f),took:Date.now()-a}}catch{}}return null};let c=null,u=null;try{u=h(e);const i=await crypto.subtle.digest("SHA-256",d.encode(t));c=await crypto.subtle.importKey("raw",i,l,!1,["decrypt"])}catch{return{promise:Promise.reject(),controller:o}}return{promise:s(),controller:o}}let y;onmessage=async e=>{const{type:t,payload:r,start:n,max:l}=e.data;let o=null;if(t==="abort")y?.abort(),y=void 0;else if(t==="work"){if("obfuscated"in r){const{key:a,obfuscated:s}=r||{};o=await m(s,a,l,n)}else{const{algorithm:a,challenge:s,salt:c}=r||{};o=w(s,c,a,l,n)}y=o.controller,o.promise.then(a=>{self.postMessage(a&&{...a,worker:!0})})}}})();
`, oi = typeof self < "u" && self.Blob && new Blob(["(self.URL || self.webkitURL).revokeObjectURL(self.location.href);", ea], { type: "text/javascript;charset=utf-8" });
function pl(e) {
  let t;
  try {
    if (t = oi && (self.URL || self.webkitURL).createObjectURL(oi), !t) throw "";
    const r = new Worker(t, {
      name: e?.name
    });
    return r.addEventListener("error", () => {
      (self.URL || self.webkitURL).revokeObjectURL(t);
    }), r;
  } catch {
    return new Worker(
      "data:text/javascript;charset=utf-8," + encodeURIComponent(ea),
      {
        name: e?.name
      }
    );
  }
}
class Ar {
  /**
   * Constructs a new instance of the Plugin.
   * 
   * @param {PluginContext} context - The context provided to the plugin, containing necessary configurations and dependencies.
   */
  constructor(t) {
    this.context = t;
  }
  /**
   * A distinct name of the plugin. Every plugin must have it's own name.
   */
  static pluginName;
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
var E = /* @__PURE__ */ ((e) => (e.CODE = "code", e.ERROR = "error", e.VERIFIED = "verified", e.VERIFYING = "verifying", e.UNVERIFIED = "unverified", e.EXPIRED = "expired", e))(E || {}), oe = /* @__PURE__ */ ((e) => (e.ERROR = "error", e.LOADING = "loading", e.PLAYING = "playing", e.PAUSED = "paused", e.READY = "ready", e))(oe || {});
class ml extends Ar {
  static pluginName = "obfuscation";
  // The button element associated with revealing the obfuscated data
  elButton;
  // Bound method for handling button click events
  #t = this.#e.bind(this);
  /**
   * Creates an instance of PluginObfuscation.
   *
   * @param {PluginContext} context - The context object containing plugin configurations.
   */
  constructor(t) {
    super(t);
    const r = t.el;
    this.elButton = r.parentElement?.querySelector("[data-clarify-button]") || r.parentElement?.querySelector("button, a"), this.elButton && this.elButton.addEventListener("click", this.#t);
  }
  /**
   * Destroys the plugin instance, removing event listeners.
   */
  destroy() {
    this.elButton && this.elButton.removeEventListener("click", this.#t);
  }
  /**
   * Handles the clarification process by decrypting the obfuscated data and rendering the clear text.
   */
  async clarify() {
    const {
      el: t,
      getConfiguration: r,
      getFloatingAnchor: n,
      setFloatingAnchor: l,
      reset: a,
      solve: s,
      setState: u
    } = this.context, { delay: c, floating: d, maxnumber: p, obfuscated: h } = r();
    if (this.elButton && !n() && l(this.elButton), !h) {
      u(E.ERROR);
      return;
    }
    a(E.VERIFYING), await new Promise((C) => setTimeout(C, c || 0));
    const [g, w] = h.split("?");
    let I = new URLSearchParams(w || "").get("key") || void 0;
    if (I) {
      const C = I.match(/^\(prompt:?(.*)\)$/);
      C && (I = prompt(C[1] || "Enter Key:") || void 0);
    }
    const { solution: N } = await s({
      obfuscated: g,
      key: I,
      maxnumber: p
    });
    N && "clearText" in N ? (this.#r(N.clearText), u(E.VERIFIED), this.context.dispatch("cleartext", N.clearText), d && t && (t.style.display = "none")) : u(E.ERROR, "Unable to decrypt data.");
  }
  /**
   * Handles the button click event, triggering the clarification process.
   *
   * @param {Event} ev - The click event.
   */
  #e(t) {
    t.preventDefault();
    const { auto: r } = this.context.getConfiguration();
    r === "off" || this.clarify();
  }
  /**
   * Renders the clear text data by creating an appropriate element (e.g., a link or text node).
   *
   * @param {string} clearText - The decrypted clear text data to render.
   */
  #r(t) {
    const r = t.match(/^(mailto|tel|sms|https?):/);
    let n;
    if (r) {
      const [l] = t.slice(t.indexOf(":") + 1).replace(/^\/\//, "").split("?");
      n = document.createElement("a"), n.href = t, n.innerHTML = l;
    } else
      n = document.createTextNode(t);
    this.elButton && n && (this.elButton.after(n), this.elButton.parentElement?.removeChild(this.elButton));
  }
}
Ar.register(ml);
const Mr = {
  generateKey: yl,
  exportKey: _l,
  importKey: bl,
  decrypt: El,
  encrypt: wl
};
async function yl(e = 256) {
  return crypto.subtle.generateKey({
    name: "AES-GCM",
    length: e
  }, !0, ["encrypt", "decrypt"]);
}
async function _l(e) {
  return new Uint8Array(await crypto.subtle.exportKey("raw", e));
}
async function bl(e) {
  return crypto.subtle.importKey("raw", e, {
    name: "AES-GCM"
  }, !0, ["encrypt", "decrypt"]);
}
async function wl(e, t, r = 16) {
  const n = crypto.getRandomValues(new Uint8Array(r));
  return {
    encrypted: new Uint8Array(await crypto.subtle.encrypt({
      name: "AES-GCM",
      iv: n
    }, e, t)),
    iv: n
  };
}
async function El(e, t, r) {
  return new Uint8Array(await crypto.subtle.decrypt({
    name: "AES-GCM",
    iv: r
  }, e, t));
}
function Cl(e, t = !1) {
  return t && (e = e.replace(/_/g, "/").replace(/-/g, "+") + "=".repeat(3 - (3 + e.length) % 4)), Uint8Array.from(atob(e), (r) => r.charCodeAt(0));
}
function ta(e, t = !1) {
  const r = btoa(String.fromCharCode(...e));
  return t ? r.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "") : r;
}
function ra(e, t = 80) {
  let r = "";
  for (; e.length > 0; )
    r += e.slice(0, t) + `
`, e = e.slice(t);
  return r;
}
function na(e) {
  return Cl(e.split(/\r?\n/).filter((t) => !t.startsWith("-----")).join(""));
}
const Lt = "RSA-OAEP", kr = "SHA-256", xl = 2048, Al = new Uint8Array([1, 0, 1]), kl = {
  generateKeyPair: Rl,
  encrypt: Sl,
  decrypt: Il,
  exportPrivateKey: ia,
  exportPrivateKeyPem: Ll,
  exportPublicKey: cn,
  exportPublicKeyPem: $l,
  exportPublicKeyFromPrivateKey: Tl,
  importPrivateKey: la,
  importPrivateKeyPem: Pl,
  importPublicKey: aa,
  importPublicKeyPem: oa
};
async function Rl() {
  return crypto.subtle.generateKey({
    name: Lt,
    modulusLength: xl,
    publicExponent: Al,
    hash: kr
  }, !0, ["encrypt", "decrypt"]);
}
async function Sl(e, t) {
  return new Uint8Array(await crypto.subtle.encrypt({
    name: Lt
  }, e, t));
}
async function Il(e, t) {
  return new Uint8Array(await crypto.subtle.decrypt({
    name: Lt
  }, e, t));
}
async function cn(e) {
  return new Uint8Array(await crypto.subtle.exportKey("spki", e));
}
async function ia(e) {
  return new Uint8Array(await crypto.subtle.exportKey("pkcs8", e));
}
async function $l(e) {
  return `-----BEGIN PUBLIC KEY-----
` + ra(ta(await cn(e)), 64) + "-----END PUBLIC KEY-----";
}
async function Ll(e) {
  return `-----BEGIN PRIVATE KEY-----
` + ra(ta(await ia(e)), 64) + "-----END PRIVATE KEY-----";
}
async function aa(e) {
  return crypto.subtle.importKey("spki", e, {
    name: Lt,
    hash: kr
  }, !0, ["encrypt"]);
}
async function oa(e) {
  return aa(na(e));
}
async function la(e) {
  return crypto.subtle.importKey("pkcs8", e, {
    name: Lt,
    hash: kr
  }, !0, ["decrypt"]);
}
async function Pl(e) {
  return la(na(e));
}
async function Tl(e) {
  const t = await crypto.subtle.exportKey("jwk", e);
  delete t.d, delete t.dp, delete t.dq, delete t.q, delete t.qi, t.key_ops = ["encrypt"];
  const r = await crypto.subtle.importKey("jwk", t, {
    name: Lt,
    hash: kr
  }, !0, ["encrypt"]);
  return cn(r);
}
const Nl = new Uint8Array([1, 0, 1]), Fl = 256, Dl = 16;
async function Ul(e, t, r = {}) {
  const { aesIVLength: n = Dl, aesKeyLength: l = Fl } = r, a = await Mr.generateKey(l), { encrypted: s, iv: u } = await Mr.encrypt(a, t, n), c = await kl.encrypt(e, await Mr.exportKey(a));
  return new Uint8Array([
    ...Nl,
    ...new Uint8Array([c.length]),
    ...new Uint8Array([u.length]),
    ...c,
    ...u,
    ...s
  ]);
}
class Ol extends Ar {
  static pluginName = "upload";
  pendingFiles = [];
  uploadHandles = [];
  elForm;
  #t = this.#s.bind(this);
  #e = this.#u.bind(this);
  /**
   * Constructor initializes the plugin, setting up event listeners on the form.
   *
   * @param {PluginContext} context - Plugin context providing access to the element, configuration, and utility methods.
   */
  constructor(t) {
    super(t), this.elForm = this.context.el.closest("form"), this.elForm && (this.elForm.addEventListener("change", this.#t), this.elForm.addEventListener("submit", this.#e, {
      capture: !0
    }));
  }
  /**
   * Adds a file to the pending files list for upload.
   *
   * @param {string} fieldName - The field name associated with the file input.
   * @param {File} file - The file to be uploaded.
   */
  addFile(t, r) {
    this.pendingFiles.find(([n, l]) => n === t && l === r) || this.pendingFiles.push([t, r]);
  }
  /**
   * Cleans up event listeners and other resources when the plugin is destroyed.
   */
  destroy() {
    this.elForm && (this.elForm.removeEventListener("change", this.#t), this.elForm.removeEventListener("submit", this.#e));
  }
  /**
   * Uploads all pending files in the list.
   */
  async uploadPendingFiles() {
    const t = async () => {
      const r = this.pendingFiles[0];
      if (r && await this.#i(this.#a(r)), this.pendingFiles.length)
        return t();
    };
    try {
      await t();
    } catch (r) {
      return this.context.log("upload failed", r), this.context.dispatch("uploaderror", {
        error: r
      }), !1;
    }
    this.pendingFiles.length === 0 && (this.#r(), this.elForm?.requestSubmit());
  }
  /**
   * Adds hidden input fields to the form containing the file IDs of uploaded files.
   */
  #r() {
    const t = this.uploadHandles.reduce(
      (r, n) => (r[n.fieldName] || (r[n.fieldName] = []), n.fileId && r[n.fieldName].push(n.fileId), r),
      {}
    );
    for (const r in t) {
      const n = document.createElement("input");
      n.name = r, n.type = "hidden", n.value = t[r].join(","), this.elForm?.querySelector(`[name="${r}"]`)?.setAttribute("disabled", "disabled"), this.elForm?.appendChild(n);
    }
  }
  /**
   * Creates an upload handle for the specified pending file.
   *
   * @param {[string, File]} pendingFile - The field name and file to be uploaded.
   * @returns {UploadHandle} The created upload handle.
   * @throws Will throw an error if the upload handle cannot be created.
   */
  #a(t) {
    const r = this.pendingFiles.findIndex(
      ([l, a]) => l === t[0] && a === t[1]
    );
    if (r < 0)
      throw new Error("Cannot create upload handle.");
    const n = new Ml(t[0], t[1]);
    return this.uploadHandles.push(n), this.pendingFiles.splice(r, 1), this.#o(n), this.#n(), n;
  }
  /**
   * Dispatches a custom event when a file upload starts.
   *
   * @param {UploadHandle} handle - The upload handle associated with the file upload.
   */
  #o(t) {
    this.context.dispatch("upload", { handle: t });
  }
  /**
   * Dispatches a custom event to track the progress of ongoing file uploads.
   */
  #n() {
    const t = this.pendingFiles.reduce((n, [l, a]) => n + a.size, 0) + this.uploadHandles.reduce((n, { uploadSize: l }) => n + l, 0), r = this.uploadHandles.reduce(
      (n, { loaded: l }) => n + l,
      0
    );
    this.context.dispatch("uploadprogress", {
      bytesLoaded: r,
      bytesTotal: t,
      pendingFiles: this.pendingFiles,
      uploadHandles: this.uploadHandles
    });
  }
  /**
   * Retrieves the upload URL from the form's attributes.
   *
   * @returns {string | null} The upload URL, or null if not found.
   */
  #l() {
    if (this.elForm) {
      const t = this.elForm.getAttribute("action"), r = this.elForm.getAttribute("data-upload-url");
      if (r)
        return r;
      const n = new URL(t || location.origin);
      return n.pathname = n.pathname + "/file", n.toString();
    }
    return null;
  }
  /**
   * Handles the form's change event, adding files to the pending files list.
   *
   * @param {Event} ev - The change event.
   */
  #s(t) {
    const r = t.target;
    if (r && r.type === "file") {
      const n = r.files;
      if (n?.length)
        for (const l of n)
          this.addFile(r.name, l);
    }
  }
  /**
   * Handles the form's submit event, preventing submission until all pending files are uploaded.
   *
   * @param {SubmitEvent} ev - The submit event.
   */
  #u(t) {
    t.target?.hasAttribute(
      "data-code-challenge-form"
    ) || this.pendingFiles.length && (t.preventDefault(), t.stopPropagation(), this.uploadPendingFiles());
  }
  /**
   * Uploads a single file, handling encryption and ALTCHA challenges if necessary.
   *
   * @param {UploadHandle} handle - The upload handle associated with the file.
   * @param {string} [altchaPayload] - The ALTCHA payload, if available.
   * @returns {Promise<unknown>} A promise that resolves when the upload is complete.
   * @throws Will throw an error if the upload fails or if an ALTCHA challenge cannot be solved.
   */
  async #i(t, r) {
    const n = this.#l();
    if (!n)
      throw new Error("Upload url not specified.");
    const l = {
      "content-type": "application/json"
    };
    r && (l.authorization = "Altcha payload=" + r);
    const a = await fetch(n, {
      body: JSON.stringify({
        name: t.file.name || "file",
        size: t.file.size,
        type: t.file.type || "application/octet-stream"
      }),
      credentials: "include",
      headers: l,
      method: "POST"
    });
    if (a.status === 401)
      return this.#c(a, t);
    if (a.status !== 200)
      throw new Error(`Unexpected server response ${a.status}.`);
    const s = await a.json();
    let u = t.file;
    if (s.encrypted && s.encryptionPublicKey) {
      const c = await oa(s.encryptionPublicKey), p = await new Response(
        new ReadableStream({
          async start(h) {
            const g = t.file.stream().getReader();
            for (; ; ) {
              const { done: w, value: T } = await g.read();
              if (w)
                break;
              h.enqueue(T);
            }
            h.close();
          }
        })
      ).arrayBuffer();
      u = await Ul(c, new Uint8Array(p));
    }
    return t.uploadSize = u instanceof Uint8Array ? u.byteLength : t.file.size, await this.#d(s.uploadUrl, t, u, {
      "content-type": t.file.type || "application/octet-stream"
    }), s.finalizeUrl && await this.#f(s.finalizeUrl, t.uploadSize), t.fileId = s.fileId, t.resolve({
      encrypted: s.encrypted,
      fileId: s.fileId
    }), t.promise;
  }
  /**
   * Handles ALTCHA challenges during file upload, solving the challenge and retrying the upload.
   *
   * @param {Response} resp - The response from the server containing the ALTCHA challenge.
   * @param {UploadHandle} handle - The upload handle associated with the file.
   * @returns {Promise<unknown>} A promise that resolves when the challenge is solved and the upload is complete.
   * @throws Will throw an error if the challenge cannot be solved.
   */
  async #c(t, r) {
    try {
      const l = t.headers.get("www-authenticate")?.match(/challenge=(.*),/)?.[1];
      if (!l)
        throw new Error(
          "Unable to retrieve altcha challenge from www-authenticate header."
        );
      const a = JSON.parse(l);
      if (a && "challenge" in a) {
        const { solution: s } = await this.context.solve(a);
        if (s && "number" in s)
          return this.#i(
            r,
            btoa(
              JSON.stringify({
                ...a,
                number: s.number
              })
            )
          );
        throw new Error("Invalid challenge solution.");
      }
    } catch (n) {
      throw this.context.log(n), new Error("Unable to solve altcha challenge for upload.");
    }
  }
  /**
   * Finalizes the file upload by sending a request to the server.
   *
   * @param {string} finalizeUrl - The URL to finalize the upload.
   * @param {number} uploadSize - The size of the uploaded file.
   */
  async #f(t, r) {
    const n = await fetch(t, {
      body: JSON.stringify({
        uploadedBytes: r
      }),
      headers: {
        "content-type": "application/json"
      },
      method: "POST"
    });
    if (n.status > 204)
      throw new Error(`Unexpected server response ${n.status}.`);
    return !0;
  }
  /**
   * Uploads the file's contents to the server using the PUT method.
   *
   * @param {string} url - The URL to upload the file to.
   * @param {UploadHandle} handle - The upload handle associated with the file.
   * @param {Uint8Array | File} body - The file's contents.
   * @param {Record<string, string>} headers - Additional headers for the upload request.
   */
  async #d(t, r, n, l = {}) {
    return t = new URL(
      t,
      this.elForm?.getAttribute("action") || location.origin
    ).toString(), new Promise((a, s) => {
      const u = new XMLHttpRequest();
      r.controller.signal.addEventListener("abort", () => {
        u.abort();
      }), u.upload.addEventListener("progress", (c) => {
        r.setProgress(c.loaded), this.#n();
      }), u.addEventListener("error", (c) => {
        s(new Error("Upload failed."));
      }), u.addEventListener("load", () => {
        u.status >= 400 ? s(new Error(`Server responded with ${u.status}`)) : a(void 0);
      }), u.open("PUT", t);
      for (const c in l)
        u.setRequestHeader(c, l[c]);
      u.send(n);
    });
  }
}
class Ml {
  /**
   * Creates an instance of UploadHandle.
   *
   * @param {string} fieldName - The name of the field associated with the file upload.
   * @param {File} file - The file to be uploaded.
   */
  constructor(t, r) {
    this.fieldName = t, this.file = r, this.uploadSize = this.file.size, this.promise = new Promise((n, l) => {
      this.resolve = n, this.reject = l;
    });
  }
  controller = new AbortController();
  promise;
  fileId;
  loaded = 0;
  progress = 0;
  uploadSize = 0;
  resolve;
  reject;
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
Ar.register(Ol);
const sa = new TextEncoder();
function Vl(e) {
  return [...new Uint8Array(e)].map((t) => t.toString(16).padStart(2, "0")).join("");
}
async function Bl(e, t = "SHA-256", r = 1e5) {
  const n = Date.now().toString(16);
  e || (e = Math.round(Math.random() * r));
  const l = await ua(n, e, t);
  return {
    algorithm: t,
    challenge: l,
    salt: n,
    signature: ""
  };
}
async function ua(e, t, r) {
  if (typeof crypto > "u" || !("subtle" in crypto) || !("digest" in crypto.subtle))
    throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");
  return Vl(
    await crypto.subtle.digest(
      r.toUpperCase(),
      sa.encode(e + t)
    )
  );
}
function jl(e, t, r = "SHA-256", n = 1e6, l = 0) {
  const a = new AbortController(), s = Date.now();
  return {
    promise: (async () => {
      for (let c = l; c <= n; c += 1) {
        if (a.signal.aborted)
          return null;
        if (await ua(t, c, r) === e)
          return {
            number: c,
            took: Date.now() - s
          };
      }
      return null;
    })(),
    controller: a
  };
}
function li() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function ql(e) {
  const t = atob(e), r = new Uint8Array(t.length);
  for (let n = 0; n < t.length; n++)
    r[n] = t.charCodeAt(n);
  return r;
}
function Hl(e, t = 12) {
  const r = new Uint8Array(t);
  for (let n = 0; n < t; n++)
    r[n] = e % 256, e = Math.floor(e / 256);
  return r;
}
async function Kl(e, t = "", r = 1e6, n = 0) {
  const l = "AES-GCM", a = new AbortController(), s = Date.now(), u = async () => {
    for (let p = n; p <= r; p += 1) {
      if (a.signal.aborted || !c || !d)
        return null;
      try {
        const h = await crypto.subtle.decrypt(
          {
            name: l,
            iv: Hl(p)
          },
          c,
          d
        );
        if (h)
          return {
            clearText: new TextDecoder().decode(h),
            took: Date.now() - s
          };
      } catch {
      }
    }
    return null;
  };
  let c = null, d = null;
  try {
    d = ql(e);
    const p = await crypto.subtle.digest(
      "SHA-256",
      sa.encode(t)
    );
    c = await crypto.subtle.importKey(
      "raw",
      p,
      l,
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
    promise: u(),
    controller: a
  };
}
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
globalThis.altchaI18n = globalThis.altchaI18n || {
  get: (e) => ar(globalThis.altchaI18n.store)[e],
  set: (e, t) => {
    Object.assign(ar(globalThis.altchaI18n.store), {
      [e]: t
    }), globalThis.altchaI18n.store.set(ar(globalThis.altchaI18n.store));
  },
  store: ul({})
};
const Gl = {
  ariaLinkLabel: "Visit Altcha.org",
  enterCode: "Enter code",
  enterCodeAria: "Enter code you hear. Press Space to play audio.",
  error: "Verification failed. Try again later.",
  expired: "Verification expired. Try again.",
  footer: 'Protected by <a href="https://altcha.org/" target="_blank" aria-label="Visit Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Get an audio challenge",
  label: "I'm not a robot",
  loading: "Loading...",
  reload: "Reload",
  verify: "Verify",
  verificationRequired: "Verification required!",
  verified: "Verified",
  verifying: "Verifying...",
  waitAlert: "Verifying... please wait."
};
globalThis.altchaI18n.set("en", Gl);
const Vr = (e, t) => {
  let r = /* @__PURE__ */ Io(() => ho(t?.(), 24));
  var n = Zl();
  re(() => {
    P(n, "width", o(r)), P(n, "height", o(r));
  }), K(e, n);
};
function Yl(e, t) {
  e.code === "Space" && (e.preventDefault(), e.stopImmediatePropagation(), t());
}
function Wl(e, t) {
  e.preventDefault(), t();
}
function zl(e, t, r, n, l, a, s, u) {
  [
    E.UNVERIFIED,
    E.ERROR,
    E.EXPIRED,
    E.CODE
  ].includes(o(t)) ? r() !== !1 && o(n)?.reportValidity() === !1 ? y(l, !1) : a() ? s() : u() : y(l, !0);
}
var Zl = /* @__PURE__ */ xr('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="altcha-spinner"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" fill="currentColor" opacity=".25"></path><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" fill="currentColor"></path></svg>'), Jl = /* @__PURE__ */ fe('<input type="hidden">'), Xl = /* @__PURE__ */ fe('<div><a target="_blank" class="altcha-logo" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor"></path></svg></a></div>'), Ql = /* @__PURE__ */ xr('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z"></path></svg>'), es = /* @__PURE__ */ xr('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7ZM7 7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V7Z"></path></svg>'), ts = /* @__PURE__ */ xr('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 12H7C8.10457 12 9 12.8954 9 14V19C9 20.1046 8.10457 21 7 21H4C2.89543 21 2 20.1046 2 19V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V19C22 20.1046 21.1046 21 20 21H17C15.8954 21 15 20.1046 15 19V14C15 12.8954 15.8954 12 17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"></path></svg>'), rs = /* @__PURE__ */ fe('<button type="button" class="altcha-code-challenge-audio"><!></button>'), ns = /* @__PURE__ */ fe("<audio hidden autoplay><source></audio>"), is = /* @__PURE__ */ fe('<div class="altcha-code-challenge" role="dialog"><div class="altcha-code-challenge-arrow"></div> <form data-code-challenge-form="1"><img class="altcha-code-challenge-image" alt=""> <input type="text" autocomplete="off" name="code" class="altcha-code-challenge-input" required> <div class="altcha-code-challenge-buttons"><div class="altcha-code-challenge-buttons-left"><!> <button type="button" class="altcha-code-challenge-reload"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 9.25022 5.38734 6.82447 7.50024 5.38451L7.5 8H9.5V2L3.5 2V4L5.99918 3.99989C3.57075 5.82434 2 8.72873 2 12Z"></path></svg></button></div> <button type="submit" class="altcha-code-challenge-verify"><!> </button></div> <!></form></div>'), as = /* @__PURE__ */ fe("<div><!></div>"), os = /* @__PURE__ */ fe("<div><!></div>"), ls = /* @__PURE__ */ fe('<div class="altcha-error"><svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg> <!></div>'), ss = /* @__PURE__ */ fe('<div class="altcha-footer"><div><!></div></div>'), us = /* @__PURE__ */ fe('<div class="altcha-anchor-arrow"></div>'), cs = /* @__PURE__ */ fe('<!> <div class="altcha"><div class="altcha-main"><div><!> <input type="checkbox"></div> <label class="altcha-label"><!></label> <!> <!> <!></div> <!> <!> <!></div>', 1);
function fs(e, t) {
  an(t, !0);
  const [r, n] = fl(), l = () => cl(da, "$altchaI18nStore", r);
  let a = A(t, "auto", 7, void 0), s = A(t, "blockspam", 7, void 0), u = A(t, "challengeurl", 7, void 0), c = A(t, "challengejson", 7, void 0), d = A(t, "credentials", 7, void 0), p = A(t, "customfetch", 7, void 0), h = A(t, "debug", 7, !1), g = A(t, "delay", 7, 0), w = A(t, "disableautofocus", 7, !1), T = A(t, "refetchonexpire", 7, !0), I = A(t, "disablerefetchonexpire", 23, () => !T()), N = A(t, "expire", 7, void 0), C = A(t, "floating", 7, void 0), X = A(t, "floatinganchor", 7, void 0), Ce = A(t, "floatingoffset", 7, void 0), Z = A(t, "floatingpersist", 7, !1), q = A(t, "hidefooter", 7, !1), ae = A(t, "hidelogo", 7, !1), Me = A(t, "id", 7, void 0), et = A(t, "language", 7, void 0), Ve = A(t, "name", 7, "altcha"), ye = A(t, "maxnumber", 7, 1e6), de = A(t, "mockerror", 7, !1), he = A(t, "obfuscated", 7, void 0), G = A(t, "overlay", 7, void 0), tt = A(t, "overlaycontent", 7, void 0), mt = A(t, "plugins", 7, void 0), $e = A(t, "sentinel", 7, void 0), _e = A(t, "spamfilter", 7, !1), le = A(t, "strings", 7, void 0), b = A(t, "test", 7, !1), Y = A(t, "verifyurl", 7, void 0), Be = A(t, "workers", 23, () => Math.min(16, navigator.hardwareConcurrency || 8)), rt = A(t, "workerurl", 7, void 0);
  const { altchaI18n: fa } = globalThis, da = fa.store, fn = ["SHA-256", "SHA-384", "SHA-512"], ha = "https://altcha.org/", Ge = (i, f) => {
    t.$$host.dispatchEvent(new CustomEvent(i, { detail: f }));
  }, dn = document.documentElement.lang?.split("-")?.[0], Rr = /* @__PURE__ */ Vt(() => u() && new URL(u(), location.origin).host.endsWith(".altcha.org") && !!u()?.includes("apiKey=ckey_")), Zt = /* @__PURE__ */ Vt(() => c() ? kn(c()) : void 0), va = /* @__PURE__ */ Vt(() => le() ? kn(le()) : {}), H = /* @__PURE__ */ Vt(() => ({
    ...gn(l()),
    ...o(va)
  })), hn = /* @__PURE__ */ Vt(() => `${Me() || Ve()}_checkbox_${Math.round(Math.random() * 1e8)}`);
  let nt = /* @__PURE__ */ S(null), Pt = /* @__PURE__ */ S(!1), ee = /* @__PURE__ */ S(null), $ = /* @__PURE__ */ S(Ne(E.UNVERIFIED)), W = /* @__PURE__ */ S(void 0), Tt = /* @__PURE__ */ S(null), Ye = /* @__PURE__ */ S(null), be = /* @__PURE__ */ S(null), Sr = /* @__PURE__ */ S(null), yt = /* @__PURE__ */ S(null), B = /* @__PURE__ */ S(null), Nt = /* @__PURE__ */ S(null), it = /* @__PURE__ */ S(null), Le = null, ne = /* @__PURE__ */ S(null), at = /* @__PURE__ */ S(!1), We = [], Ir = /* @__PURE__ */ S(!1), Pe = /* @__PURE__ */ S(null);
  cr(() => {
    Ra(o(it));
  }), cr(() => {
    Sa(o($));
  }), sl(() => {
    ga(), y(Nt, null), o(B) && (o(B).removeEventListener("submit", wn), o(B).removeEventListener("reset", En), o(B).removeEventListener("focusin", bn), y(B, null)), Le && (clearTimeout(Le), Le = null), document.removeEventListener("click", yn), document.removeEventListener("scroll", _n), window.removeEventListener("resize", An);
  }), un(() => {
    L("mounted", "2.2.4"), L("workers", Be()), _a(), L("plugins", We.length ? We.map((i) => i.constructor.pluginName).join(", ") : "none"), b() && L("using test mode"), N() && Lr(N()), a() !== void 0 && L("auto", a()), C() !== void 0 && $n(C()), y(B, o(W)?.closest("form"), !0), o(B) && (o(B).addEventListener("submit", wn, { capture: !0 }), o(B).addEventListener("reset", En), (a() === "onfocus" || Z() === "focus") && o(B).addEventListener("focusin", bn)), G() && Ln(!0), a() === "onload" && (he() ? Ft() : je()), o(Rr) && (q() || ae()) && L("Attributes hidefooter and hidelogo ignored because usage with free API Keys requires attribution."), requestAnimationFrame(() => {
      Ge("load");
    });
  });
  function Jt(i, f) {
    return btoa(JSON.stringify({
      algorithm: i.algorithm,
      challenge: i.challenge,
      number: f.number,
      salt: i.salt,
      signature: i.signature,
      test: b() ? !0 : void 0,
      took: f.took
    }));
  }
  function ga() {
    for (const i of We)
      i.destroy();
  }
  function vn() {
    u() && !I() && o($) === E.VERIFIED ? je() : ot(E.EXPIRED, o(H).expired);
  }
  async function pa() {
    if (de())
      throw L("mocking error"), new Error("Mocked error.");
    if (o(Zt))
      return L("using provided json data"), Rn(o(Zt).salt), o(Zt);
    if (b())
      return L("generating test challenge", { test: b() }), Bl(typeof b() != "boolean" ? +b() : void 0);
    {
      if (!u() && o(B)) {
        const m = o(B).getAttribute("action");
        m?.includes("/form/") && u(m + "/altcha");
      }
      if (!u())
        throw new Error("Attribute challengeurl not set.");
      L("fetching challenge from", u());
      const i = {
        credentials: typeof d() == "boolean" ? "include" : d(),
        headers: _e() !== !1 ? { "x-altcha-spam-filter": "1" } : {}
      }, f = await $r()(u(), i);
      if (!f || !(f instanceof Response))
        throw new Error("Custom fetch function did not return a response.");
      if (f.status !== 200)
        throw new Error(`Server responded with ${f.status}.`);
      const v = f.headers.get("X-Altcha-Config"), _ = await f.json();
      if (Rn(_.salt), v)
        try {
          const m = JSON.parse(v);
          m && typeof m == "object" && (m.verifyurl && !m.verifyurl.startsWith("fn:") && (m.verifyurl = mn(m.verifyurl)), Nn(m));
        } catch (m) {
          L("unable to configure from X-Altcha-Config", m);
        }
      return _;
    }
  }
  function ma(i) {
    const f = o(B)?.querySelector(typeof i == "string" ? `input[name="${i}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return f?.value?.slice(f.value.indexOf("@")) || void 0;
  }
  function $r() {
    let i = fetch;
    if (p())
      if (L("using customfetch"), typeof p() == "string") {
        if (i = globalThis[p()] || null, !i)
          throw new Error(`Custom fetch function not found: ${p()}`);
      } else
        i = p();
    return i;
  }
  function gn(i, f = [
    et() || "",
    document.documentElement.lang || "",
    ...navigator.languages
  ]) {
    const v = Object.keys(i).map((m) => m.toLowerCase()), _ = f.reduce(
      (m, R) => (R = R.toLowerCase(), m || (i[R] ? R : null) || v.find((j) => R.split("-")[0] === j.split("-")[0]) || null),
      null
    );
    return i[_ || "en"];
  }
  function ya() {
    return _e() === "ipAddress" ? {
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
    } : typeof _e() == "object" ? _e() : {
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
  function pn(i) {
    return [
      ...o(B)?.querySelectorAll(i?.length ? i.map((v) => `input[name="${v}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])') || []
    ].reduce(
      (v, _) => {
        const m = _.name, R = _.value;
        return m && R && (v[m] = /\n/.test(R) ? R.replace(new RegExp("(?<!\\r)\\n", "g"), `\r
`) : R), v;
      },
      {}
    );
  }
  function mn(i, f) {
    const v = new URL(u() || location.origin), _ = new URL(i, v);
    if (_.search || (_.search = v.search), f)
      for (const m in f)
        f[m] !== void 0 && f[m] !== null && _.searchParams.set(m, f[m]);
    return _.toString();
  }
  function _a() {
    const i = mt() !== void 0 ? mt().split(",") : void 0;
    for (const f of globalThis.altchaPlugins)
      (!i || i.includes(f.pluginName)) && We.push(new f({
        el: o(W),
        clarify: Ft,
        dispatch: Ge,
        getConfiguration: Fn,
        getFloatingAnchor: Dn,
        getState: Un,
        log: L,
        reset: ot,
        solve: Tn,
        setState: Te,
        setFloatingAnchor: On,
        verify: je
      }));
  }
  function L(...i) {
    (h() || i.some((f) => f instanceof Error)) && console[i[0] instanceof Error ? "error" : "log"]("ALTCHA", `[name=${Ve()}]`, ...i);
  }
  function ba() {
    y(ne, oe.PAUSED, !0);
  }
  function wa(i) {
    y(ne, oe.ERROR, !0);
  }
  function Ea() {
    y(ne, oe.READY, !0);
  }
  function Ca() {
    y(ne, oe.LOADING, !0);
  }
  function xa() {
    y(ne, oe.PLAYING, !0);
  }
  function Aa() {
    y(ne, oe.PAUSED, !0);
  }
  function ka(i) {
    if (i.preventDefault(), i.stopPropagation(), o(ee)) {
      const f = new FormData(i.target), v = String(f.get("code"));
      if (Y()?.startsWith("fn:")) {
        const _ = Y().replace(/^fn:/, "");
        if (L(`calling ${_} function instead of verifyurl`), !(_ in globalThis))
          throw new Error(`Global function "${_}" is undefined.`);
        return globalThis[_]({
          challenge: o(ee).challenge,
          code: v,
          solution: o(ee).solution
        });
      }
      y(at, !0), Sn(Jt(o(ee).challenge, o(ee).solution), v).then(({ reason: _, verified: m }) => {
        m ? (y(ee, null), Te(E.VERIFIED), L("verified"), Dr().then(() => {
          o(Sr)?.focus(), Ge("verified", { payload: o(Pe) }), a() === "onsubmit" ? In(o(Nt)) : G() && Dt();
        })) : (ot(), y(it, _ || "Verification failed", !0));
      }).catch((_) => {
        y(ee, null), Te(E.ERROR, _), L("sentinel verification failed:", _);
      }).finally(() => {
        y(at, !1);
      });
    }
  }
  function yn(i) {
    const f = i.target;
    C() && f && !o(W).contains(f) && (o($) === E.VERIFIED && Z() === !1 || o($) === E.VERIFIED && Z() === "focus" && !o(B)?.matches(":focus-within") || a() === "off" && o($) === E.UNVERIFIED) && Dt();
  }
  function _n() {
    C() && o($) !== E.UNVERIFIED && Ut();
  }
  function Ra(i) {
    for (const f of We)
      typeof f.onErrorChange == "function" && f.onErrorChange(o(it));
  }
  function bn(i) {
    o($) === E.UNVERIFIED ? je() : C() && Z() === "focus" && o($) === E.VERIFIED && Xt();
  }
  function wn(i) {
    i.target?.hasAttribute("data-code-challenge-form") || (y(Nt, i.submitter, !0), o(B) && a() === "onsubmit" ? (o(Nt)?.blur(), o($) === E.UNVERIFIED ? (i.preventDefault(), i.stopPropagation(), je().then(() => {
      In(o(Nt));
    })) : o($) !== E.VERIFIED && (i.preventDefault(), i.stopPropagation(), o($) === E.VERIFYING && Cn())) : o(B) && C() && a() === "off" && o($) === E.UNVERIFIED && (i.preventDefault(), i.stopPropagation(), Xt()));
  }
  function En() {
    ot();
  }
  function Cn() {
    o($) === E.VERIFYING && o(H).waitAlert && alert(o(H).waitAlert);
  }
  function xn() {
    o(Ye) ? o(Ye).paused ? (o(Ye).currentTime = 0, o(Ye).play()) : o(Ye).pause() : (y(Ir, !0), requestAnimationFrame(() => {
      o(Ye)?.play();
    }));
  }
  function Sa(i) {
    for (const f of We)
      typeof f.onStateChange == "function" && f.onStateChange(o($));
    C() && o($) !== E.UNVERIFIED && requestAnimationFrame(() => {
      Ut();
    }), y(Pt, o($) === E.VERIFIED), G() && o(be) && (o($) !== E.UNVERIFIED ? Xt() : Dt());
  }
  function An() {
    C() && Ut();
  }
  function kn(i) {
    return JSON.parse(i);
  }
  function Rn(i) {
    const f = new URLSearchParams(i.split("?")?.[1]), v = f.get("expires") || f.get("expire");
    if (v) {
      const _ = new Date(+v * 1e3), m = isNaN(_.getTime()) ? 0 : _.getTime() - Date.now();
      m > 0 && Lr(m);
    } else Le && (clearTimeout(Le), Le = null);
  }
  async function Ia(i) {
    if (!Y())
      throw new Error("Attribute verifyurl not set.");
    L("requesting server verification from", Y());
    const f = { payload: i };
    if (_e() !== !1) {
      const {
        blockedCountries: m,
        classifier: R,
        disableRules: j,
        email: Q,
        expectedLanguages: z,
        expectedCountries: ve,
        fields: ge,
        ipAddress: st,
        text: bt,
        timeZone: ut
      } = ya();
      f.blockedCountries = m, f.classifier = R, f.disableRules = j, f.email = Q === !1 ? void 0 : ma(Q), f.expectedCountries = ve, f.expectedLanguages = z || (dn ? [dn] : void 0), f.fields = ge === !1 ? void 0 : pn(ge), f.ipAddress = st === !1 ? void 0 : st || "auto", f.text = bt, f.timeZone = ut === !1 ? void 0 : ut || li();
    }
    const v = await $r()(Y(), {
      body: JSON.stringify(f),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (!v || !(v instanceof Response))
      throw new Error("Custom fetch function did not return a response.");
    if (v.status !== 200)
      throw new Error(`Server responded with ${v.status}.`);
    const _ = await v.json();
    if (_?.payload && y(Pe, _.payload, !0), Ge("serververification", _), s() && _.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  async function Sn(i, f) {
    if (!Y())
      throw new Error("Attribute verifyurl not set.");
    L("requesting sentinel verification from", Y());
    const v = { code: f, payload: i };
    $e() && (v.fields = $e().fields ? pn() : void 0, v.timeZone = $e().timeZone ? li() : void 0);
    const _ = await $r()(Y(), {
      body: JSON.stringify(v),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (!_ || !(_ instanceof Response))
      throw new Error("Fetch function did not return a response.");
    if (_.status !== 200)
      throw new Error(`Server responded with ${_.status}.`);
    const m = await _.json();
    return m?.payload && y(Pe, m.payload, !0), Ge("sentinelverification", m), m;
  }
  function In(i) {
    o(B) && "requestSubmit" in o(B) ? o(B).requestSubmit(i) : o(B)?.reportValidity() && (i ? i.click() : o(B).submit());
  }
  function Lr(i) {
    L("expire", i), Le && (clearTimeout(Le), Le = null), i < 1 ? vn() : Le = setTimeout(vn, i);
  }
  function $n(i) {
    L("floating", i), C() !== i && (o(W).style.left = "", o(W).style.top = ""), C(i === !0 || i === "" ? "auto" : i === !1 || i === "false" ? void 0 : C()), C() ? (a() || a("onsubmit"), document.addEventListener("scroll", _n), document.addEventListener("click", yn), window.addEventListener("resize", An)) : a() === "onsubmit" && a(void 0);
  }
  function Ln(i) {
    if (L("overlay", i), G(i), i) {
      if (a() || a("onsubmit"), o(be) && o(W).parentElement && o(be).replaceWith(o(W).parentElement), o(W)?.parentElement?.parentElement) {
        y(be, document.createElement("div"), !0), o(W).parentElement.parentElement.appendChild(o(be));
        const f = document.createElement("div"), v = document.createElement("button");
        v.type = "button", v.innerHTML = "&times;", v.addEventListener("click", (_) => {
          _.preventDefault(), ot();
        }), o(be).classList.add("altcha-overlay-backdrop"), v.classList.add("altcha-overlay-close-button"), f.classList.add("altcha-overlay"), o(be).append(f), f.append(v), tt() && f.append(...document.querySelectorAll(tt())), f.append(o(W).parentElement);
      }
    } else o(be) && o(W).parentElement && (o(be).replaceWith(o(W).parentElement), o(W).style.display = "block");
  }
  function Pn(i) {
    if (!i.algorithm)
      throw new Error("Invalid challenge. Property algorithm is missing.");
    if (i.signature === void 0)
      throw new Error("Invalid challenge. Property signature is missing.");
    if (!fn.includes(i.algorithm.toUpperCase()))
      throw new Error(`Unknown algorithm value. Allowed values: ${fn.join(", ")}`);
    if (!i.challenge || i.challenge.length < 40)
      throw new Error("Challenge is too short. Min. 40 chars.");
    if (!i.salt || i.salt.length < 10)
      throw new Error("Salt is too short. Min. 10 chars.");
  }
  async function Tn(i) {
    let f = null, v = null;
    if ("Worker" in window) {
      try {
        f = $a(i, i.maxNumber || i.maxnumber || ye()), y(nt, f.controller, !0), v = await f.promise;
      } catch (_) {
        L(_);
      } finally {
        y(nt, null);
      }
      if (v === null || v?.number !== void 0 || "obfuscated" in i)
        return { data: i, solution: v };
    }
    if ("obfuscated" in i) {
      const _ = await Kl(i.obfuscated, i.key, i.maxNumber || i.maxnumber);
      return { data: i, solution: await _.promise };
    }
    f = jl(i.challenge, i.salt, i.algorithm, i.maxNumber || i.maxnumber || ye()), y(nt, f.controller, !0);
    try {
      v = await f.promise;
    } catch (_) {
      L(_);
    } finally {
      y(nt, null);
    }
    return { data: i, solution: v };
  }
  function $a(i, f = typeof b() == "number" ? b() : i.maxNumber || i.maxnumber || ye(), v = Math.ceil(Be())) {
    const _ = new AbortController(), m = [];
    v = Math.min(16, f, Math.max(1, v));
    for (let Q = 0; Q < v; Q++)
      m.push(altchaCreateWorker(rt()));
    const R = Math.ceil(f / v);
    return { promise: (async () => {
      const Q = await Promise.all(m.map((z, ve) => {
        const ge = ve * R;
        return _.signal.addEventListener("abort", () => {
          z.postMessage({ type: "abort" });
        }), new Promise((st) => {
          z.addEventListener("message", (bt) => {
            if (bt.data)
              for (const ut of m)
                ut !== z && ut.postMessage({ type: "abort" });
            st(bt.data);
          }), z.postMessage({
            payload: i,
            max: ge + R,
            start: ge,
            type: "work"
          });
        });
      }));
      for (const z of m)
        z.terminate();
      return Q.find((z) => !!z) || null;
    })(), controller: _ };
  }
  async function Ft() {
    if (!he()) {
      Te(E.ERROR);
      return;
    }
    const i = We.find((f) => f.constructor.pluginName === "obfuscation");
    if (!i || !("clarify" in i)) {
      Te(E.ERROR), L("Plugin `obfuscation` not found. Import `altcha/plugins/obfuscation` to load it.");
      return;
    }
    if ("clarify" in i && typeof i.clarify == "function")
      return i.clarify();
  }
  function Nn(i) {
    i.obfuscated !== void 0 && he(i.obfuscated), i.auto !== void 0 && (a(i.auto), a() === "onload" && (he() ? Ft() : je())), i.blockspam !== void 0 && s(!!i.blockspam), i.customfetch !== void 0 && p(i.customfetch), i.floatinganchor !== void 0 && X(i.floatinganchor), i.delay !== void 0 && g(i.delay), i.floatingoffset !== void 0 && Ce(i.floatingoffset), i.floating !== void 0 && $n(i.floating), i.expire !== void 0 && (Lr(i.expire), N(i.expire)), i.challenge && (c(typeof i.challenge == "string" ? i.challenge : JSON.stringify(i.challenge)), Pn(o(Zt))), i.challengeurl !== void 0 && u(i.challengeurl), i.debug !== void 0 && h(!!i.debug), i.hidefooter !== void 0 && q(!!i.hidefooter), i.hidelogo !== void 0 && ae(!!i.hidelogo), i.language !== void 0 && le(gn(l(), [i.language])), i.maxnumber !== void 0 && ye(+i.maxnumber), i.mockerror !== void 0 && de(!!i.mockerror), i.name !== void 0 && Ve(i.name), i.overlaycontent !== void 0 && tt(i.overlaycontent), i.overlay !== void 0 && Ln(i.overlay), i.refetchonexpire !== void 0 && I(!i.refetchonexpire), i.disablerefetchonexpire !== void 0 && I(!i.disablerefetchonexpire), i.sentinel !== void 0 && typeof i.sentinel == "object" && $e(i.sentinel), i.spamfilter !== void 0 && _e(typeof i.spamfilter == "object" ? i.spamfilter : !!i.spamfilter), i.strings && le(typeof i.strings == "string" ? i.strings : JSON.stringify(i.strings)), i.test !== void 0 && b(typeof i.test == "number" ? i.test : !!i.test), i.verifyurl !== void 0 && Y(i.verifyurl), i.workers !== void 0 && Be(+i.workers), i.workerurl !== void 0 && rt(i.workerurl);
  }
  function Fn() {
    return {
      auto: a(),
      blockspam: s(),
      challengeurl: u(),
      debug: h(),
      delay: g(),
      disableautofocus: w(),
      disablerefetchonexpire: I(),
      expire: N(),
      floating: C(),
      floatinganchor: X(),
      floatingoffset: Ce(),
      hidefooter: q(),
      hidelogo: ae(),
      name: Ve(),
      maxnumber: ye(),
      mockerror: de(),
      obfuscated: he(),
      overlay: G(),
      refetchonexpire: !I(),
      spamfilter: _e(),
      strings: o(H),
      test: b(),
      verifyurl: Y(),
      workers: Be(),
      workerurl: rt()
    };
  }
  function Dn() {
    return o(yt);
  }
  function La(i) {
    return We.find((f) => f.constructor.pluginName === i);
  }
  function Un() {
    return o($);
  }
  function Dt() {
    o(W).style.display = "none", G() && o(be) && (o(be).style.display = "none");
  }
  function Ut(i = 20) {
    if (o(W))
      if (o(yt) || y(yt, (X() ? document.querySelector(X()) : o(B)?.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || o(B), !0), o(yt)) {
        const f = parseInt(Ce(), 10) || 12, v = o(yt).getBoundingClientRect(), _ = o(W).getBoundingClientRect(), m = document.documentElement.clientHeight, R = document.documentElement.clientWidth, j = C() === "auto" ? v.bottom + _.height + f + i > m : C() === "top", Q = Math.max(i, Math.min(R - i - _.width, v.left + v.width / 2 - _.width / 2));
        if (j ? o(W).style.top = `${v.top - (_.height + f)}px` : o(W).style.top = `${v.bottom + f}px`, o(W).style.left = `${Q}px`, o(W).setAttribute("data-floating", j ? "top" : "bottom"), o(Tt)) {
          const z = o(Tt).getBoundingClientRect();
          o(Tt).style.left = v.left - Q + v.width / 2 - z.width / 2 + "px";
        }
      } else
        L("unable to find floating anchor element");
  }
  function ot(i = E.UNVERIFIED, f = null) {
    o(nt) && (o(nt).abort(), y(nt, null)), y(Pt, !1), y(Pe, null), y(ee, null), y(Ir, !1), y(ne, null), Te(i, f);
  }
  function On(i) {
    y(yt, i, !0);
  }
  function Te(i, f = null) {
    y($, i, !0), y(it, f, !0), Ge("statechange", {
      payload: o(Pe),
      state: o($)
    });
  }
  function Xt() {
    o(W).style.display = "block", C() && Ut(), G() && o(be) && (o(be).style.display = "flex");
  }
  async function je() {
    return ot(E.VERIFYING), await new Promise((i) => setTimeout(i, g() || 0)), pa().then((i) => (Pn(i), L("challenge", i), Tn(i))).then(({ data: i, solution: f }) => {
      if (L("solution", f), !f || i && "challenge" in i && !("clearText" in f)) {
        if (f?.number !== void 0 && "challenge" in i)
          if (Y() && "codeChallenge" in i)
            ["INPUT", "BUTTON", "SELECT", "TEXTAREA"].includes(document.activeElement?.tagName || "") && w() === !1 && document.activeElement.blur(), y(ee, { challenge: i, solution: f }, !0);
          else {
            if (Y() && $e() !== void 0)
              return Sn(Jt(i, f));
            if (Y())
              return Ia(Jt(i, f));
            y(Pe, Jt(i, f), !0), L("payload", o(Pe));
          }
        else if (o($) !== E.EXPIRED)
          throw L("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
      }
    }).then(() => {
      o(ee) ? (Te(E.CODE), Dr().then(() => {
        Ge("code", { codeChallenge: o(ee) });
      })) : o(Pe) && (Te(E.VERIFIED), L("verified"), Dr().then(() => {
        Ge("verified", { payload: o(Pe) }), G() && Dt();
      }));
    }).catch((i) => {
      L(i), Te(E.ERROR, i.message);
    });
  }
  var Mn = cs(), Vn = Mt(Mn);
  tl(Vn, t, "default", {});
  var _t = k(Vn, 2), Pr = D(_t), Qt = D(Pr);
  let Bn;
  var jn = D(Qt);
  {
    var Pa = (i) => {
      Vr(i);
    };
    J(jn, (i) => {
      o($) === E.VERIFYING && i(Pa);
    });
  }
  var lt = k(jn, 2);
  kt(lt), lt.__change = [
    zl,
    $,
    _e,
    B,
    Pt,
    he,
    Ft,
    je
  ], ft(lt, (i) => y(Sr, i), () => o(Sr)), F(Qt);
  var er = k(Qt, 2), Ta = D(er);
  {
    var Na = (i) => {
      var f = rr(), v = Mt(f);
      ct(v, () => o(H).verified), K(i, f);
    }, Fa = (i, f) => {
      {
        var v = (m) => {
          var R = rr(), j = Mt(R);
          ct(j, () => o(H).verifying), K(m, R);
        }, _ = (m, R) => {
          {
            var j = (z) => {
              var ve = rr(), ge = Mt(ve);
              ct(ge, () => o(H).verificationRequired), K(z, ve);
            }, Q = (z) => {
              var ve = rr(), ge = Mt(ve);
              ct(ge, () => o(H).label), K(z, ve);
            };
            J(
              m,
              (z) => {
                o($) === E.CODE ? z(j) : z(Q, !1);
              },
              R
            );
          }
        };
        J(
          i,
          (m) => {
            o($) === E.VERIFYING ? m(v) : m(_, !1);
          },
          f
        );
      }
    };
    J(Ta, (i) => {
      o($) === E.VERIFIED ? i(Na) : i(Fa, !1);
    });
  }
  F(er);
  var qn = k(er, 2);
  {
    var Da = (i) => {
      var f = Jl();
      kt(f), re(() => {
        P(f, "name", Ve()), ll(f, o(Pe));
      }), K(i, f);
    };
    J(qn, (i) => {
      o($) === E.VERIFIED && i(Da);
    });
  }
  var Hn = k(qn, 2);
  {
    var Ua = (i) => {
      var f = Xl(), v = D(f);
      P(v, "href", ha), F(f), re(() => P(v, "aria-label", o(H).ariaLinkLabel)), K(i, f);
    };
    J(Hn, (i) => {
      (ae() !== !0 || o(Rr)) && i(Ua);
    });
  }
  var Oa = k(Hn, 2);
  {
    var Ma = (i) => {
      var f = is(), v = k(D(f), 2), _ = D(v), m = k(_, 2);
      Zo(m, !w()), m.__keydown = [
        Yl,
        xn
      ];
      var R = k(m, 2), j = D(R), Q = D(j);
      {
        var z = (Re) => {
          var ie = rs();
          ie.__click = xn;
          var tr = D(ie);
          {
            var Ot = (wt) => {
              Vr(wt, () => 20);
            }, Ya = (wt, Wa) => {
              {
                var za = (Et) => {
                  var Tr = Ql();
                  K(Et, Tr);
                }, Za = (Et, Tr) => {
                  {
                    var Ja = (Ct) => {
                      var Nr = es();
                      K(Ct, Nr);
                    }, Xa = (Ct) => {
                      var Nr = ts();
                      K(Ct, Nr);
                    };
                    J(
                      Et,
                      (Ct) => {
                        o(ne) === oe.PLAYING ? Ct(Ja) : Ct(Xa, !1);
                      },
                      Tr
                    );
                  }
                };
                J(
                  wt,
                  (Et) => {
                    o(ne) === oe.ERROR ? Et(za) : Et(Za, !1);
                  },
                  Wa
                );
              }
            };
            J(tr, (wt) => {
              o(ne) === oe.LOADING ? wt(Ot) : wt(Ya, !1);
            });
          }
          F(ie), re(() => {
            P(ie, "title", o(H).getAudioChallenge), ie.disabled = o(ne) === oe.LOADING || o(ne) === oe.ERROR || o(at), P(ie, "aria-label", o(ne) === oe.LOADING ? o(H).loading : o(H).getAudioChallenge);
          }), K(Re, ie);
        };
        J(Q, (Re) => {
          o(ee).challenge.codeChallenge.audio && Re(z);
        });
      }
      var ve = k(Q, 2);
      ve.__click = [Wl, je], F(j);
      var ge = k(j, 2), st = D(ge);
      {
        var bt = (Re) => {
          Vr(Re, () => 16);
        };
        J(st, (Re) => {
          o(at) && Re(bt);
        });
      }
      var ut = k(st);
      F(ge), F(R);
      var Ka = k(R, 2);
      {
        var Ga = (Re) => {
          var ie = ns(), tr = D(ie);
          F(ie), ft(ie, (Ot) => y(Ye, Ot), () => o(Ye)), re((Ot) => P(tr, "src", Ot), [
            () => mn(o(ee).challenge.codeChallenge.audio, { language: et() })
          ]), te("loadstart", ie, Ca), te("canplay", ie, Ea), te("pause", ie, Aa), te("playing", ie, xa), te("ended", ie, ba), te("error", tr, wa), K(Re, ie);
        };
        J(Ka, (Re) => {
          o(ee).challenge.codeChallenge.audio && o(Ir) && Re(Ga);
        });
      }
      F(v), F(f), re(() => {
        P(f, "aria-label", o(H).verificationRequired), P(_, "src", o(ee).challenge.codeChallenge.image), P(m, "minlength", o(ee).challenge.codeChallenge.length || 1), P(m, "maxlength", o(ee).challenge.codeChallenge.length), P(m, "placeholder", o(H).enterCode), P(m, "aria-label", o(ne) === oe.LOADING ? o(H).loading : o(ne) === oe.PLAYING ? "" : o(H).enterCodeAria), P(m, "aria-live", o(ne) ? "assertive" : "polite"), P(m, "aria-busy", o(ne) === oe.LOADING), m.disabled = o(at), P(ve, "aria-label", o(H).reload), P(ve, "title", o(H).reload), ve.disabled = o(at), ge.disabled = o(at), P(ge, "aria-label", o(H).verify), Yi(ut, ` ${o(H).verify ?? ""}`);
      }), te("submit", v, ka, !0), K(i, f);
    };
    J(Oa, (i) => {
      o(ee)?.challenge.codeChallenge && i(Ma);
    });
  }
  F(Pr);
  var Kn = k(Pr, 2);
  {
    var Va = (i) => {
      var f = ls(), v = k(D(f), 2);
      {
        var _ = (R) => {
          var j = as(), Q = D(j);
          ct(Q, () => o(H).expired), F(j), re(() => P(j, "title", o(it))), K(R, j);
        }, m = (R) => {
          var j = os(), Q = D(j);
          ct(Q, () => o(H).error), F(j), re(() => P(j, "title", o(it))), K(R, j);
        };
        J(v, (R) => {
          o($) === E.EXPIRED ? R(_) : R(m, !1);
        });
      }
      F(f), K(i, f);
    };
    J(Kn, (i) => {
      (o(it) || o($) === E.EXPIRED) && i(Va);
    });
  }
  var Gn = k(Kn, 2);
  {
    var Ba = (i) => {
      var f = ss(), v = D(f), _ = D(v);
      ct(_, () => o(H).footer), F(v), F(f), K(i, f);
    };
    J(Gn, (i) => {
      o(H).footer && (q() !== !0 || o(Rr)) && i(Ba);
    });
  }
  var ja = k(Gn, 2);
  {
    var qa = (i) => {
      var f = us();
      ft(f, (v) => y(Tt, v), () => o(Tt)), K(i, f);
    };
    J(ja, (i) => {
      C() && i(qa);
    });
  }
  F(_t), ft(_t, (i) => y(W, i), () => o(W)), re(
    (i) => {
      P(_t, "data-state", o($)), P(_t, "data-floating", C()), P(_t, "data-overlay", G()), Bn = il(Qt, 1, "altcha-checkbox", null, Bn, i), P(lt, "id", o(hn)), lt.required = a() !== "onsubmit" && (!C() || a() !== "off"), P(er, "for", o(hn));
    },
    [
      () => ({
        "altcha-checkbox-verifying": o($) === E.VERIFYING
      })
    ]
  ), te("invalid", lt, Cn), Wr(lt, () => o(Pt), (i) => y(Pt, i)), K(e, Mn);
  var Ha = on({
    clarify: Ft,
    configure: Nn,
    getConfiguration: Fn,
    getFloatingAnchor: Dn,
    getPlugin: La,
    getState: Un,
    hide: Dt,
    repositionFloating: Ut,
    reset: ot,
    setFloatingAnchor: On,
    setState: Te,
    show: Xt,
    verify: je,
    get auto() {
      return a();
    },
    set auto(i = void 0) {
      a(i), x();
    },
    get blockspam() {
      return s();
    },
    set blockspam(i = void 0) {
      s(i), x();
    },
    get challengeurl() {
      return u();
    },
    set challengeurl(i = void 0) {
      u(i), x();
    },
    get challengejson() {
      return c();
    },
    set challengejson(i = void 0) {
      c(i), x();
    },
    get credentials() {
      return d();
    },
    set credentials(i = void 0) {
      d(i), x();
    },
    get customfetch() {
      return p();
    },
    set customfetch(i = void 0) {
      p(i), x();
    },
    get debug() {
      return h();
    },
    set debug(i = !1) {
      h(i), x();
    },
    get delay() {
      return g();
    },
    set delay(i = 0) {
      g(i), x();
    },
    get disableautofocus() {
      return w();
    },
    set disableautofocus(i = !1) {
      w(i), x();
    },
    get refetchonexpire() {
      return T();
    },
    set refetchonexpire(i = !0) {
      T(i), x();
    },
    get disablerefetchonexpire() {
      return I();
    },
    set disablerefetchonexpire(i = !T) {
      I(i), x();
    },
    get expire() {
      return N();
    },
    set expire(i = void 0) {
      N(i), x();
    },
    get floating() {
      return C();
    },
    set floating(i = void 0) {
      C(i), x();
    },
    get floatinganchor() {
      return X();
    },
    set floatinganchor(i = void 0) {
      X(i), x();
    },
    get floatingoffset() {
      return Ce();
    },
    set floatingoffset(i = void 0) {
      Ce(i), x();
    },
    get floatingpersist() {
      return Z();
    },
    set floatingpersist(i = !1) {
      Z(i), x();
    },
    get hidefooter() {
      return q();
    },
    set hidefooter(i = !1) {
      q(i), x();
    },
    get hidelogo() {
      return ae();
    },
    set hidelogo(i = !1) {
      ae(i), x();
    },
    get id() {
      return Me();
    },
    set id(i = void 0) {
      Me(i), x();
    },
    get language() {
      return et();
    },
    set language(i = void 0) {
      et(i), x();
    },
    get name() {
      return Ve();
    },
    set name(i = "altcha") {
      Ve(i), x();
    },
    get maxnumber() {
      return ye();
    },
    set maxnumber(i = 1e6) {
      ye(i), x();
    },
    get mockerror() {
      return de();
    },
    set mockerror(i = !1) {
      de(i), x();
    },
    get obfuscated() {
      return he();
    },
    set obfuscated(i = void 0) {
      he(i), x();
    },
    get overlay() {
      return G();
    },
    set overlay(i = void 0) {
      G(i), x();
    },
    get overlaycontent() {
      return tt();
    },
    set overlaycontent(i = void 0) {
      tt(i), x();
    },
    get plugins() {
      return mt();
    },
    set plugins(i = void 0) {
      mt(i), x();
    },
    get sentinel() {
      return $e();
    },
    set sentinel(i = void 0) {
      $e(i), x();
    },
    get spamfilter() {
      return _e();
    },
    set spamfilter(i = !1) {
      _e(i), x();
    },
    get strings() {
      return le();
    },
    set strings(i = void 0) {
      le(i), x();
    },
    get test() {
      return b();
    },
    set test(i = !1) {
      b(i), x();
    },
    get verifyurl() {
      return Y();
    },
    set verifyurl(i = void 0) {
      Y(i), x();
    },
    get workers() {
      return Be();
    },
    set workers(i = Math.min(16, navigator.hardwareConcurrency || 8)) {
      Be(i), x();
    },
    get workerurl() {
      return rt();
    },
    set workerurl(i = void 0) {
      rt(i), x();
    }
  });
  return n(), Ha;
}
Xo(["change", "keydown", "click"]);
customElements.define("altcha-widget", Qi(
  fs,
  {
    blockspam: { type: "Boolean" },
    debug: { type: "Boolean" },
    delay: { type: "Number" },
    disableautofocus: { type: "Boolean" },
    disablerefetchonexpire: { type: "Boolean" },
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
    credentials: {},
    customfetch: {},
    floating: {},
    floatinganchor: {},
    floatingpersist: {},
    id: {},
    language: {},
    name: {},
    obfuscated: {},
    overlay: {},
    overlaycontent: {},
    plugins: {},
    sentinel: {},
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
var ds = /* @__PURE__ */ fe('<div class="success svelte-10ae4fa">Form successfully submitted.</div>'), hs = /* @__PURE__ */ fe('<div class="failure svelte-10ae4fa">Failed to submit form.</div>'), vs = /* @__PURE__ */ fe("<div><div> </div></div>"), gs = /* @__PURE__ */ fe('<main class="svelte-10ae4fa"><h1>ALTCHA</h1> <div><label for="challengeUrl" class="svelte-10ae4fa">Challenge URL <small>(to fetch the challenge from)</small>:</label> <input type="url" id="challengeUrl" placeholder="http://..." class="svelte-10ae4fa"></div> <div><label for="submitUrl" class="svelte-10ae4fa">Submit URL <small>(to submit the data to)</small>:</label> <input type="url" id="submitUrl" placeholder="http://..." class="svelte-10ae4fa"></div> <div><label for="testMode" class="svelte-10ae4fa">Test mode:</label> <input type="checkbox" id="testMode" class="svelte-10ae4fa"></div> <div><label for="mockError" class="svelte-10ae4fa">Mock error:</label> <input type="checkbox" id="mockError" class="svelte-10ae4fa"></div> <!> <!> <form method="post" class="svelte-10ae4fa"><div>Test form</div> <div><input type="text" name="test_field" placeholder="Test field..." class="svelte-10ae4fa"></div> <altcha-widget></altcha-widget> <div><button type="submit">Submit</button> <button type="reset">Reset</button></div></form> <form method="post" class="svelte-10ae4fa"><div>File Upload</div> <div><input type="file" name="test_file" required class="svelte-10ae4fa"></div> <div><input type="file" name="test_file2" class="svelte-10ae4fa"></div> <altcha-widget></altcha-widget> <!> <div><button type="submit">Submit</button> <button type="reset">Reset</button></div></form> <div class="form svelte-10ae4fa"><div>Obfuscated Email: <altcha-widget><a href="#">(click to reveal)</a></altcha-widget></div></div></main>', 2);
const ps = {
  hash: "svelte-10ae4fa",
  code: "html {font-family:sans-serif;}main.svelte-10ae4fa {display:flex;flex-direction:column;gap:1rem;margin:6rem auto;max-width:600px;}input.svelte-10ae4fa:not([type=checkbox]) {box-sizing:border-box;font-family:inherit;font-size:inherit;padding:0.3rem;width:100%;}label.svelte-10ae4fa + input:where(.svelte-10ae4fa) {margin-top:0.3rem;}form.svelte-10ae4fa, .form.svelte-10ae4fa {border:1px solid #ddd;display:flex;flex-direction:column;gap:1rem;padding:1rem;}.success.svelte-10ae4fa {color:green;}.failure.svelte-10ae4fa {color:red;}"
};
function ca(e, t) {
  an(t, !0), rl(e, ps), globalThis.altchaCreateWorker = (b) => new pl();
  const r = location.hash.includes("success"), n = location.hash.includes("failure"), l = new URLSearchParams(location.search);
  let a = /* @__PURE__ */ S(Ne(l.get("challengeurl") || "")), s = /* @__PURE__ */ S(Ne(l.get("submiturl") || "")), u = /* @__PURE__ */ S(!1), c = /* @__PURE__ */ S(!1), d = /* @__PURE__ */ S(void 0), p = /* @__PURE__ */ S(void 0), h = /* @__PURE__ */ S(void 0), g = /* @__PURE__ */ S(null);
  cr(() => {
    y(u, !o(a) && l.get("test") !== "0" && !o(s), !0);
  }), un(() => {
    location.hash = "";
  });
  var w = gs(), T = k(D(w), 2), I = k(D(T), 2);
  kt(I), F(T);
  var N = k(T, 2), C = k(D(N), 2);
  kt(C), F(N);
  var X = k(N, 2), Ce = k(D(X), 2);
  kt(Ce), F(X);
  var Z = k(X, 2), q = k(D(Z), 2);
  kt(q), F(Z);
  var ae = k(Z, 2);
  {
    var Me = (b) => {
      var Y = ds();
      K(b, Y);
    };
    J(ae, (b) => {
      r && b(Me);
    });
  }
  var et = k(ae, 2);
  {
    var Ve = (b) => {
      var Y = hs();
      K(b, Y);
    };
    J(et, (b) => {
      n && b(Ve);
    });
  }
  var ye = k(et, 2), de = k(D(ye), 4);
  se(de, "debug", !0), re(() => se(de, "challengeurl", o(a))), re(() => se(de, "mockerror", o(c))), re(() => se(de, "test", o(u))), ft(de, (b) => y(d, b), () => o(d)), zn(2), F(ye);
  var he = k(ye, 2), G = k(D(he), 6);
  se(G, "debug", !0), se(G, "plugins", "upload"), re(() => se(G, "challengeurl", o(a))), re(() => se(G, "mockerror", o(c))), re(() => se(G, "test", o(u))), ft(G, (b) => y(p, b), () => o(p));
  var tt = k(G, 2);
  {
    var mt = (b) => {
      var Y = vs(), Be = D(Y), rt = D(Be);
      F(Be), F(Y), re(() => Yi(rt, `${o(g).bytesLoaded ?? ""} / ${o(g).bytesTotal ?? ""}`)), K(b, Y);
    };
    J(tt, (b) => {
      o(g) && b(mt);
    });
  }
  zn(2), F(he);
  var $e = k(he, 2), _e = D($e), le = k(D(_e));
  se(le, "obfuscated", "14tZkC2tFAQSrksIcD3OTD0u4ZWE4VkePJ5d0oVyoGmABDyW9YvNTA=="), se(le, "debug", !0), se(le, "delay", 1500), se(le, "name", "email"), se(le, "plugins", "obfuscation"), se(le, "floating", !0), ft(le, (b) => y(h, b), () => o(h)), F(_e), F($e), F(w), re(() => {
    I.disabled = o(u), C.disabled = o(u), P(ye, "action", o(s)), P(he, "action", o(s));
  }), ni(I, () => o(a), (b) => y(a, b)), ni(C, () => o(s), (b) => y(s, b)), Wr(Ce, () => o(u), (b) => y(u, b)), Wr(q, () => o(c), (b) => y(c, b)), te("submit", ye, (b) => o(u) ? b.preventDefault() : void 0), te("statechange", de, (b) => console.log("Event: statechange:", b)), te("verified", de, (b) => console.log("Event: verified:", b)), te("serververification", de, (b) => console.log("Event: serververification:", b)), te("submit", he, (b) => o(u) ? b.preventDefault() : void 0), te("upload", G, (b) => console.log("Event: upload", b.detail)), te("uploadprogress", G, (b) => {
    y(g, b.detail, !0), console.log("Event: uploadprogress", b.detail);
  }), te("serververification", G, (b) => console.log("Event: statechange:", b)), te("verified", G, (b) => console.log("Event: verified:", b)), te("cleartext", le, (b) => console.log("Event: cleartext:", b.detail)), K(e, w), on();
}
Qi(ca, {}, [], [], !0);
const ms = sn(ca, {
  target: document.getElementById("app")
});
export {
  ms as default
};
