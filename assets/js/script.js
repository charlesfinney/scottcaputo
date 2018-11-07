! function (t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function (t, e) {
    function n(t) {
        var e = !!t && "length" in t && t.length,
            n = ot.type(t);
        return "function" !== n && !ot.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }

    function i(t, e, n) {
        if (ot.isFunction(e)) return ot.grep(t, function (t, i) {
            return !!e.call(t, i, t) !== n
        });
        if (e.nodeType) return ot.grep(t, function (t) {
            return t === e !== n
        });
        if ("string" == typeof e) {
            if (gt.test(e)) return ot.filter(e, t, n);
            e = ot.filter(e, t)
        }
        return ot.grep(t, function (t) {
            return J.call(e, t) > -1 !== n
        })
    }

    function r(t, e) {
        for (;
            (t = t[e]) && 1 !== t.nodeType;);
        return t
    }

    function o(t) {
        var e = {};
        return ot.each(t.match(bt) || [], function (t, n) {
            e[n] = !0
        }), e
    }

    function s() {
        G.removeEventListener("DOMContentLoaded", s), t.removeEventListener("load", s), ot.ready()
    }

    function a() {
        this.expando = ot.expando + a.uid++
    }

    function l(t, e, n) {
        var i;
        if (void 0 === n && 1 === t.nodeType)
            if (i = "data-" + e.replace(St, "-$&").toLowerCase(), n = t.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : At.test(n) ? ot.parseJSON(n) : n)
                } catch (r) {}
                Et.set(t, e, n)
            } else n = void 0;
        return n
    }

    function c(t, e, n, i) {
        var r, o = 1,
            s = 20,
            a = i ? function () {
                return i.cur()
            } : function () {
                return ot.css(t, e, "")
            },
            l = a(),
            c = n && n[3] || (ot.cssNumber[e] ? "" : "px"),
            u = (ot.cssNumber[e] || "px" !== c && +l) && Pt.exec(ot.css(t, e));
        if (u && u[3] !== c) {
            c = c || u[3], n = n || [], u = +l || 1;
            do o = o || ".5", u /= o, ot.style(t, e, u + c); while (o !== (o = a() / l) && 1 !== o && --s)
        }
        return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = r)), r
    }

    function u(t, e) {
        var n = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
        return void 0 === e || e && ot.nodeName(t, e) ? ot.merge([t], n) : n
    }

    function h(t, e) {
        for (var n = 0, i = t.length; i > n; n++) Ct.set(t[n], "globalEval", !e || Ct.get(e[n], "globalEval"))
    }

    function p(t, e, n, i, r) {
        for (var o, s, a, l, c, p, f = e.createDocumentFragment(), d = [], g = 0, m = t.length; m > g; g++)
            if (o = t[g], o || 0 === o)
                if ("object" === ot.type(o)) ot.merge(d, o.nodeType ? [o] : o);
                else if (Rt.test(o)) {
            for (s = s || f.appendChild(e.createElement("div")), a = ($t.exec(o) || ["", ""])[1].toLowerCase(), l = Mt[a] || Mt._default, s.innerHTML = l[1] + ot.htmlPrefilter(o) + l[2], p = l[0]; p--;) s = s.lastChild;
            ot.merge(d, s.childNodes), s = f.firstChild, s.textContent = ""
        } else d.push(e.createTextNode(o));
        for (f.textContent = "", g = 0; o = d[g++];)
            if (i && ot.inArray(o, i) > -1) r && r.push(o);
            else if (c = ot.contains(o.ownerDocument, o), s = u(f.appendChild(o), "script"), c && h(s), n)
            for (p = 0; o = s[p++];) Nt.test(o.type || "") && n.push(o);
        return f
    }

    function f() {
        return !0
    }

    function d() {
        return !1
    }

    function g() {
        try {
            return G.activeElement
        } catch (t) {}
    }

    function m(t, e, n, i, r, o) {
        var s, a;
        if ("object" == typeof e) {
            "string" != typeof n && (i = i || n, n = void 0);
            for (a in e) m(t, a, n, i, e[a], o);
            return t
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), r === !1) r = d;
        else if (!r) return t;
        return 1 === o && (s = r, r = function (t) {
            return ot().off(t), s.apply(this, arguments)
        }, r.guid = s.guid || (s.guid = ot.guid++)), t.each(function () {
            ot.event.add(this, e, r, i, n)
        })
    }

    function v(t, e) {
        return ot.nodeName(t, "table") && ot.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function y(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function _(t) {
        var e = Xt.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function x(t, e) {
        var n, i, r, o, s, a, l, c;
        if (1 === e.nodeType) {
            if (Ct.hasData(t) && (o = Ct.access(t), s = Ct.set(e, o), c = o.events)) {
                delete s.handle, s.events = {};
                for (r in c)
                    for (n = 0, i = c[r].length; i > n; n++) ot.event.add(e, r, c[r][n])
            }
            Et.hasData(t) && (a = Et.access(t), l = ot.extend({}, a), Et.set(e, l))
        }
    }

    function b(t, e) {
        var n = e.nodeName.toLowerCase();
        "input" === n && Ot.test(t.type) ? e.checked = t.checked : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
    }

    function w(t, e, n, i) {
        e = Z.apply([], e);
        var r, o, s, a, l, c, h = 0,
            f = t.length,
            d = f - 1,
            g = e[0],
            m = ot.isFunction(g);
        if (m || f > 1 && "string" == typeof g && !it.checkClone && zt.test(g)) return t.each(function (r) {
            var o = t.eq(r);
            m && (e[0] = g.call(this, r, o.html())), w(o, e, n, i)
        });
        if (f && (r = p(e, t[0].ownerDocument, !1, t, i), o = r.firstChild, 1 === r.childNodes.length && (r = o), o || i)) {
            for (s = ot.map(u(r, "script"), y), a = s.length; f > h; h++) l = r, h !== d && (l = ot.clone(l, !0, !0), a && ot.merge(s, u(l, "script"))), n.call(t[h], l, h);
            if (a)
                for (c = s[s.length - 1].ownerDocument, ot.map(s, _), h = 0; a > h; h++) l = s[h], Nt.test(l.type || "") && !Ct.access(l, "globalEval") && ot.contains(c, l) && (l.src ? ot._evalUrl && ot._evalUrl(l.src) : ot.globalEval(l.textContent.replace(Wt, "")))
        }
        return t
    }

    function T(t, e, n) {
        for (var i, r = e ? ot.filter(e, t) : t, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || ot.cleanData(u(i)), i.parentNode && (n && ot.contains(i.ownerDocument, i) && h(u(i, "script")), i.parentNode.removeChild(i));
        return t
    }

    function k(t, e) {
        var n = ot(e.createElement(t)).appendTo(e.body),
            i = ot.css(n[0], "display");
        return n.detach(), i
    }

    function C(t) {
        var e = G,
            n = Vt[t];
        return n || (n = k(t, e), "none" !== n && n || (Yt = (Yt || ot("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = Yt[0].contentDocument, e.write(), e.close(), n = k(t, e), Yt.detach()), Vt[t] = n), n
    }

    function E(t, e, n) {
        var i, r, o, s, a = t.style;
        return n = n || Qt(t), s = n ? n.getPropertyValue(e) || n[e] : void 0, "" !== s && void 0 !== s || ot.contains(t.ownerDocument, t) || (s = ot.style(t, e)), n && !it.pixelMarginRight() && Gt.test(s) && Ut.test(e) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o), void 0 !== s ? s + "" : s
    }

    function A(t, e) {
        return {
            get: function () {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }

    function S(t) {
        if (t in ie) return t;
        for (var e = t[0].toUpperCase() + t.slice(1), n = ne.length; n--;)
            if (t = ne[n] + e, t in ie) return t
    }

    function F(t, e, n) {
        var i = Pt.exec(e);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
    }

    function P(t, e, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > o; o += 2) "margin" === n && (s += ot.css(t, n + Dt[o], !0, r)), i ? ("content" === n && (s -= ot.css(t, "padding" + Dt[o], !0, r)), "margin" !== n && (s -= ot.css(t, "border" + Dt[o] + "Width", !0, r))) : (s += ot.css(t, "padding" + Dt[o], !0, r), "padding" !== n && (s += ot.css(t, "border" + Dt[o] + "Width", !0, r)));
        return s
    }

    function D(e, n, i) {
        var r = !0,
            o = "width" === n ? e.offsetWidth : e.offsetHeight,
            s = Qt(e),
            a = "border-box" === ot.css(e, "boxSizing", !1, s);
        if (G.msFullscreenElement && t.top !== t && e.getClientRects().length && (o = Math.round(100 * e.getBoundingClientRect()[n])), 0 >= o || null == o) {
            if (o = E(e, n, s), (0 > o || null == o) && (o = e.style[n]), Gt.test(o)) return o;
            r = a && (it.boxSizingReliable() || o === e.style[n]), o = parseFloat(o) || 0
        }
        return o + P(e, n, i || (a ? "border" : "content"), r, s) + "px"
    }

    function j(t, e) {
        for (var n, i, r, o = [], s = 0, a = t.length; a > s; s++) i = t[s], i.style && (o[s] = Ct.get(i, "olddisplay"), n = i.style.display, e ? (o[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && jt(i) && (o[s] = Ct.access(i, "olddisplay", C(i.nodeName)))) : (r = jt(i), "none" === n && r || Ct.set(i, "olddisplay", r ? n : ot.css(i, "display"))));
        for (s = 0; a > s; s++) i = t[s], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? o[s] || "" : "none"));
        return t
    }

    function O(t, e, n, i, r) {
        return new O.prototype.init(t, e, n, i, r)
    }

    function $() {
        return t.setTimeout(function () {
            re = void 0
        }), re = ot.now()
    }

    function N(t, e) {
        var n, i = 0,
            r = {
                height: t
            };
        for (e = e ? 1 : 0; 4 > i; i += 2 - e) n = Dt[i], r["margin" + n] = r["padding" + n] = t;
        return e && (r.opacity = r.width = t), r
    }

    function M(t, e, n) {
        for (var i, r = (I.tweeners[e] || []).concat(I.tweeners["*"]), o = 0, s = r.length; s > o; o++)
            if (i = r[o].call(n, e, t)) return i
    }

    function R(t, e, n) {
        var i, r, o, s, a, l, c, u, h = this,
            p = {},
            f = t.style,
            d = t.nodeType && jt(t),
            g = Ct.get(t, "fxshow");
        n.queue || (a = ot._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
            a.unqueued || l()
        }), a.unqueued++, h.always(function () {
            h.always(function () {
                a.unqueued--, ot.queue(t, "fx").length || a.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], c = ot.css(t, "display"), u = "none" === c ? Ct.get(t, "olddisplay") || C(t.nodeName) : c, "inline" === u && "none" === ot.css(t, "float") && (f.display = "inline-block")), n.overflow && (f.overflow = "hidden", h.always(function () {
            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
        }));
        for (i in e)
            if (r = e[i], se.exec(r)) {
                if (delete e[i], o = o || "toggle" === r, r === (d ? "hide" : "show")) {
                    if ("show" !== r || !g || void 0 === g[i]) continue;
                    d = !0
                }
                p[i] = g && g[i] || ot.style(t, i)
            } else c = void 0;
        if (ot.isEmptyObject(p)) "inline" === ("none" === c ? C(t.nodeName) : c) && (f.display = c);
        else {
            g ? "hidden" in g && (d = g.hidden) : g = Ct.access(t, "fxshow", {}), o && (g.hidden = !d), d ? ot(t).show() : h.done(function () {
                ot(t).hide()
            }), h.done(function () {
                var e;
                Ct.remove(t, "fxshow");
                for (e in p) ot.style(t, e, p[e])
            });
            for (i in p) s = M(d ? g[i] : 0, i, h), i in g || (g[i] = s.start, d && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function L(t, e) {
        var n, i, r, o, s;
        for (n in t)
            if (i = ot.camelCase(n), r = e[i], o = t[n], ot.isArray(o) && (r = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), s = ot.cssHooks[i], s && "expand" in s) {
                o = s.expand(o), delete t[i];
                for (n in o) n in t || (t[n] = o[n], e[n] = r)
            } else e[i] = r
    }

    function I(t, e, n) {
        var i, r, o = 0,
            s = I.prefilters.length,
            a = ot.Deferred().always(function () {
                delete l.elem
            }),
            l = function () {
                if (r) return !1;
                for (var e = re || $(), n = Math.max(0, c.startTime + c.duration - e), i = n / c.duration || 0, o = 1 - i, s = 0, l = c.tweens.length; l > s; s++) c.tweens[s].run(o);
                return a.notifyWith(t, [c, o, n]), 1 > o && l ? n : (a.resolveWith(t, [c]), !1)
            },
            c = a.promise({
                elem: t,
                props: ot.extend({}, e),
                opts: ot.extend(!0, {
                    specialEasing: {},
                    easing: ot.easing._default
                }, n),
                originalProperties: e,
                originalOptions: n,
                startTime: re || $(),
                duration: n.duration,
                tweens: [],
                createTween: function (e, n) {
                    var i = ot.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function (e) {
                    var n = 0,
                        i = e ? c.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; i > n; n++) c.tweens[n].run(1);
                    return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]), this
                }
            }),
            u = c.props;
        for (L(u, c.opts.specialEasing); s > o; o++)
            if (i = I.prefilters[o].call(c, t, u, c.opts)) return ot.isFunction(i.stop) && (ot._queueHooks(c.elem, c.opts.queue).stop = ot.proxy(i.stop, i)), i;
        return ot.map(u, M, c), ot.isFunction(c.opts.start) && c.opts.start.call(t, c), ot.fx.timer(ot.extend(l, {
            elem: t,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function B(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }

    function q(t) {
        return function (e, n) {
            "string" != typeof e && (n = e, e = "*");
            var i, r = 0,
                o = e.toLowerCase().match(bt) || [];
            if (ot.isFunction(n))
                for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
    }

    function H(t, e, n, i) {
        function r(a) {
            var l;
            return o[a] = !0, ot.each(t[a] || [], function (t, a) {
                var c = a(e, n, i);
                return "string" != typeof c || s || o[c] ? s ? !(l = c) : void 0 : (e.dataTypes.unshift(c), r(c), !1)
            }), l
        }
        var o = {},
            s = t === Ce;
        return r(e.dataTypes[0]) || !o["*"] && r("*")
    }

    function z(t, e) {
        var n, i, r = ot.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
        return i && ot.extend(!0, t, i), t
    }

    function X(t, e, n) {
        for (var i, r, o, s, a = t.contents, l = t.dataTypes;
            "*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
        if (i)
            for (r in a)
                if (a[r] && a[r].test(i)) {
                    l.unshift(r);
                    break
                }
        if (l[0] in n) o = l[0];
        else {
            for (r in n) {
                if (!l[0] || t.converters[r + " " + l[0]]) {
                    o = r;
                    break
                }
                s || (s = r)
            }
            o = o || s
        }
        return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
    }

    function W(t, e, n, i) {
        var r, o, s, a, l, c = {},
            u = t.dataTypes.slice();
        if (u[1])
            for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
        for (o = u.shift(); o;)
            if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = u.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
            if (s = c[l + " " + o] || c["* " + o], !s)
                for (r in c)
                    if (a = r.split(" "), a[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                        s === !0 ? s = c[r] : c[r] !== !0 && (o = a[0], u.unshift(a[1]));
                        break
                    }
            if (s !== !0)
                if (s && t["throws"]) e = s(e);
                else try {
                    e = s(e)
                } catch (h) {
                    return {
                        state: "parsererror",
                        error: s ? h : "No conversion from " + l + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: e
        }
    }

    function Y(t, e, n, i) {
        var r;
        if (ot.isArray(e)) ot.each(e, function (e, r) {
            n || Fe.test(t) ? i(t, r) : Y(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, n, i)
        });
        else if (n || "object" !== ot.type(e)) i(t, e);
        else
            for (r in e) Y(t + "[" + r + "]", e[r], n, i)
    }

    function V(t) {
        return ot.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
    }
    var U = [],
        G = t.document,
        Q = U.slice,
        Z = U.concat,
        K = U.push,
        J = U.indexOf,
        tt = {},
        et = tt.toString,
        nt = tt.hasOwnProperty,
        it = {},
        rt = "2.2.1",
        ot = function (t, e) {
            return new ot.fn.init(t, e)
        },
        st = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        at = /^-ms-/,
        lt = /-([\da-z])/gi,
        ct = function (t, e) {
            return e.toUpperCase()
        };
    ot.fn = ot.prototype = {
        jquery: rt,
        constructor: ot,
        selector: "",
        length: 0,
        toArray: function () {
            return Q.call(this)
        },
        get: function (t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : Q.call(this)
        },
        pushStack: function (t) {
            var e = ot.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function (t) {
            return ot.each(this, t)
        },
        map: function (t) {
            return this.pushStack(ot.map(this, function (e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function () {
            return this.pushStack(Q.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (t) {
            var e = this.length,
                n = +t + (0 > t ? e : 0);
            return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: K,
        sort: U.sort,
        splice: U.splice
    }, ot.extend = ot.fn.extend = function () {
        var t, e, n, i, r, o, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || ot.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)
            if (null != (t = arguments[a]))
                for (e in t) n = s[e], i = t[e], s !== i && (c && i && (ot.isPlainObject(i) || (r = ot.isArray(i))) ? (r ? (r = !1, o = n && ot.isArray(n) ? n : []) : o = n && ot.isPlainObject(n) ? n : {}, s[e] = ot.extend(c, o, i)) : void 0 !== i && (s[e] = i));
        return s
    }, ot.extend({
        expando: "jQuery" + (rt + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (t) {
            throw new Error(t)
        },
        noop: function () {},
        isFunction: function (t) {
            return "function" === ot.type(t)
        },
        isArray: Array.isArray,
        isWindow: function (t) {
            return null != t && t === t.window
        },
        isNumeric: function (t) {
            var e = t && t.toString();
            return !ot.isArray(t) && e - parseFloat(e) + 1 >= 0
        },
        isPlainObject: function (t) {
            return "object" === ot.type(t) && !t.nodeType && !ot.isWindow(t) && !(t.constructor && !nt.call(t.constructor.prototype, "isPrototypeOf"))
        },
        isEmptyObject: function (t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        type: function (t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? tt[et.call(t)] || "object" : typeof t
        },
        globalEval: function (t) {
            var e, n = eval;
            t = ot.trim(t), t && (1 === t.indexOf("use strict") ? (e = G.createElement("script"), e.text = t, G.head.appendChild(e).parentNode.removeChild(e)) : n(t))
        },
        camelCase: function (t) {
            return t.replace(at, "ms-").replace(lt, ct)
        },
        nodeName: function (t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function (t, e) {
            var i, r = 0;
            if (n(t))
                for (i = t.length; i > r && e.call(t[r], r, t[r]) !== !1; r++);
            else
                for (r in t)
                    if (e.call(t[r], r, t[r]) === !1) break;
            return t
        },
        trim: function (t) {
            return null == t ? "" : (t + "").replace(st, "")
        },
        makeArray: function (t, e) {
            var i = e || [];
            return null != t && (n(Object(t)) ? ot.merge(i, "string" == typeof t ? [t] : t) : K.call(i, t)), i
        },
        inArray: function (t, e, n) {
            return null == e ? -1 : J.call(e, t, n)
        },
        merge: function (t, e) {
            for (var n = +e.length, i = 0, r = t.length; n > i; i++) t[r++] = e[i];
            return t.length = r, t
        },
        grep: function (t, e, n) {
            for (var i, r = [], o = 0, s = t.length, a = !n; s > o; o++) i = !e(t[o], o), i !== a && r.push(t[o]);
            return r
        },
        map: function (t, e, i) {
            var r, o, s = 0,
                a = [];
            if (n(t))
                for (r = t.length; r > s; s++) o = e(t[s], s, i), null != o && a.push(o);
            else
                for (s in t) o = e(t[s], s, i), null != o && a.push(o);
            return Z.apply([], a)
        },
        guid: 1,
        proxy: function (t, e) {
            var n, i, r;
            return "string" == typeof e && (n = t[e], e = t, t = n), ot.isFunction(t) ? (i = Q.call(arguments, 2), r = function () {
                return t.apply(e || this, i.concat(Q.call(arguments)))
            }, r.guid = t.guid = t.guid || ot.guid++, r) : void 0
        },
        now: Date.now,
        support: it
    }), "function" == typeof Symbol && (ot.fn[Symbol.iterator] = U[Symbol.iterator]), ot.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
        tt["[object " + e + "]"] = e.toLowerCase()
    });
    var ut = function (t) {
        function e(t, e, n, i) {
            var r, o, s, a, l, c, h, f, d = e && e.ownerDocument,
                g = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== g && 9 !== g && 11 !== g) return n;
            if (!i && ((e ? e.ownerDocument || e : B) !== j && D(e), e = e || j, $)) {
                if (11 !== g && (c = vt.exec(t)))
                    if (r = c[1]) {
                        if (9 === g) {
                            if (!(s = e.getElementById(r))) return n;
                            if (s.id === r) return n.push(s), n
                        } else if (d && (s = d.getElementById(r)) && L(e, s) && s.id === r) return n.push(s), n
                    } else {
                        if (c[2]) return K.apply(n, e.getElementsByTagName(t)), n;
                        if ((r = c[3]) && b.getElementsByClassName && e.getElementsByClassName) return K.apply(n, e.getElementsByClassName(r)), n
                    }
                if (b.qsa && !W[t + " "] && (!N || !N.test(t))) {
                    if (1 !== g) d = e, f = t;
                    else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((a = e.getAttribute("id")) ? a = a.replace(_t, "\\$&") : e.setAttribute("id", a = I), h = C(t), o = h.length, l = pt.test(a) ? "#" + a : "[id='" + a + "']"; o--;) h[o] = l + " " + p(h[o]);
                        f = h.join(","), d = yt.test(t) && u(e.parentNode) || e
                    }
                    if (f) try {
                        return K.apply(n, d.querySelectorAll(f)), n
                    } catch (m) {} finally {
                        a === I && e.removeAttribute("id")
                    }
                }
            }
            return A(t.replace(at, "$1"), e, n, i)
        }

        function n() {
            function t(n, i) {
                return e.push(n + " ") > w.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
            var e = [];
            return t
        }

        function i(t) {
            return t[I] = !0, t
        }

        function r(t) {
            var e = j.createElement("div");
            try {
                return !!t(e)
            } catch (n) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function o(t, e) {
            for (var n = t.split("|"), i = n.length; i--;) w.attrHandle[n[i]] = e
        }

        function s(t, e) {
            var n = e && t,
                i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || V) - (~t.sourceIndex || V);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === e) return -1;
            return t ? 1 : -1
        }

        function a(t) {
            return function (e) {
                var n = e.nodeName.toLowerCase();
                return "input" === n && e.type === t
            }
        }

        function l(t) {
            return function (e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }

        function c(t) {
            return i(function (e) {
                return e = +e, i(function (n, i) {
                    for (var r, o = t([], n.length, e), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }

        function u(t) {
            return t && "undefined" != typeof t.getElementsByTagName && t
        }

        function h() {}

        function p(t) {
            for (var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
            return i
        }

        function f(t, e, n) {
            var i = e.dir,
                r = n && "parentNode" === i,
                o = H++;
            return e.first ? function (e, n, o) {
                for (; e = e[i];)
                    if (1 === e.nodeType || r) return t(e, n, o)
            } : function (e, n, s) {
                var a, l, c, u = [q, o];
                if (s) {
                    for (; e = e[i];)
                        if ((1 === e.nodeType || r) && t(e, n, s)) return !0
                } else
                    for (; e = e[i];)
                        if (1 === e.nodeType || r) {
                            if (c = e[I] || (e[I] = {}), l = c[e.uniqueID] || (c[e.uniqueID] = {}), (a = l[i]) && a[0] === q && a[1] === o) return u[2] = a[2];
                            if (l[i] = u, u[2] = t(e, n, s)) return !0
                        }
            }
        }

        function d(t) {
            return t.length > 1 ? function (e, n, i) {
                for (var r = t.length; r--;)
                    if (!t[r](e, n, i)) return !1;
                return !0
            } : t[0]
        }

        function g(t, n, i) {
            for (var r = 0, o = n.length; o > r; r++) e(t, n[r], i);
            return i
        }

        function m(t, e, n, i, r) {
            for (var o, s = [], a = 0, l = t.length, c = null != e; l > a; a++)(o = t[a]) && (!n || n(o, i, r)) && (s.push(o), c && e.push(a));
            return s
        }

        function v(t, e, n, r, o, s) {
            return r && !r[I] && (r = v(r)), o && !o[I] && (o = v(o, s)), i(function (i, s, a, l) {
                var c, u, h, p = [],
                    f = [],
                    d = s.length,
                    v = i || g(e || "*", a.nodeType ? [a] : a, []),
                    y = !t || !i && e ? v : m(v, p, t, a, l),
                    _ = n ? o || (i ? t : d || r) ? [] : s : y;
                if (n && n(y, _, a, l), r)
                    for (c = m(_, f), r(c, [], a, l), u = c.length; u--;)(h = c[u]) && (_[f[u]] = !(y[f[u]] = h));
                if (i) {
                    if (o || t) {
                        if (o) {
                            for (c = [], u = _.length; u--;)(h = _[u]) && c.push(y[u] = h);
                            o(null, _ = [], c, l)
                        }
                        for (u = _.length; u--;)(h = _[u]) && (c = o ? tt(i, h) : p[u]) > -1 && (i[c] = !(s[c] = h))
                    }
                } else _ = m(_ === s ? _.splice(d, _.length) : _), o ? o(null, s, _, l) : K.apply(s, _)
            })
        }

        function y(t) {
            for (var e, n, i, r = t.length, o = w.relative[t[0].type], s = o || w.relative[" "], a = o ? 1 : 0, l = f(function (t) {
                    return t === e
                }, s, !0), c = f(function (t) {
                    return tt(e, t) > -1
                }, s, !0), u = [function (t, n, i) {
                    var r = !o && (i || n !== S) || ((e = n).nodeType ? l(t, n, i) : c(t, n, i));
                    return e = null, r
                }]; r > a; a++)
                if (n = w.relative[t[a].type]) u = [f(d(u), n)];
                else {
                    if (n = w.filter[t[a].type].apply(null, t[a].matches), n[I]) {
                        for (i = ++a; r > i && !w.relative[t[i].type]; i++);
                        return v(a > 1 && d(u), a > 1 && p(t.slice(0, a - 1).concat({
                            value: " " === t[a - 2].type ? "*" : ""
                        })).replace(at, "$1"), n, i > a && y(t.slice(a, i)), r > i && y(t = t.slice(i)), r > i && p(t))
                    }
                    u.push(n)
                }
            return d(u)
        }

        function _(t, n) {
            var r = n.length > 0,
                o = t.length > 0,
                s = function (i, s, a, l, c) {
                    var u, h, p, f = 0,
                        d = "0",
                        g = i && [],
                        v = [],
                        y = S,
                        _ = i || o && w.find.TAG("*", c),
                        x = q += null == y ? 1 : Math.random() || .1,
                        b = _.length;
                    for (c && (S = s === j || s || c); d !== b && null != (u = _[d]); d++) {
                        if (o && u) {
                            for (h = 0, s || u.ownerDocument === j || (D(u), a = !$); p = t[h++];)
                                if (p(u, s || j, a)) {
                                    l.push(u);
                                    break
                                }
                            c && (q = x)
                        }
                        r && ((u = !p && u) && f--, i && g.push(u))
                    }
                    if (f += d, r && d !== f) {
                        for (h = 0; p = n[h++];) p(g, v, s, a);
                        if (i) {
                            if (f > 0)
                                for (; d--;) g[d] || v[d] || (v[d] = Q.call(l));
                            v = m(v)
                        }
                        K.apply(l, v), c && !i && v.length > 0 && f + n.length > 1 && e.uniqueSort(l)
                    }
                    return c && (q = x, S = y), g
                };
            return r ? i(s) : s
        }
        var x, b, w, T, k, C, E, A, S, F, P, D, j, O, $, N, M, R, L, I = "sizzle" + 1 * new Date,
            B = t.document,
            q = 0,
            H = 0,
            z = n(),
            X = n(),
            W = n(),
            Y = function (t, e) {
                return t === e && (P = !0), 0
            },
            V = 1 << 31,
            U = {}.hasOwnProperty,
            G = [],
            Q = G.pop,
            Z = G.push,
            K = G.push,
            J = G.slice,
            tt = function (t, e) {
                for (var n = 0, i = t.length; i > n; n++)
                    if (t[n] === e) return n;
                return -1
            },
            et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            nt = "[\\x20\\t\\r\\n\\f]",
            it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            rt = "\\[" + nt + "*(" + it + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + it + "))|)" + nt + "*\\]",
            ot = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + rt + ")*)|.*)\\)|)",
            st = new RegExp(nt + "+", "g"),
            at = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
            lt = new RegExp("^" + nt + "*," + nt + "*"),
            ct = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
            ut = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
            ht = new RegExp(ot),
            pt = new RegExp("^" + it + "$"),
            ft = {
                ID: new RegExp("^#(" + it + ")"),
                CLASS: new RegExp("^\\.(" + it + ")"),
                TAG: new RegExp("^(" + it + "|[*])"),
                ATTR: new RegExp("^" + rt),
                PSEUDO: new RegExp("^" + ot),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + et + ")$", "i"),
                needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
            },
            dt = /^(?:input|select|textarea|button)$/i,
            gt = /^h\d$/i,
            mt = /^[^{]+\{\s*\[native \w/,
            vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            yt = /[+~]/,
            _t = /'|\\/g,
            xt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
            bt = function (t, e, n) {
                var i = "0x" + e - 65536;
                return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            wt = function () {
                D()
            };
        try {
            K.apply(G = J.call(B.childNodes), B.childNodes), G[B.childNodes.length].nodeType
        } catch (Tt) {
            K = {
                apply: G.length ? function (t, e) {
                    Z.apply(t, J.call(e))
                } : function (t, e) {
                    for (var n = t.length, i = 0; t[n++] = e[i++];);
                    t.length = n - 1
                }
            }
        }
        b = e.support = {}, k = e.isXML = function (t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && "HTML" !== e.nodeName
        }, D = e.setDocument = function (t) {
            var e, n, i = t ? t.ownerDocument || t : B;
            return i !== j && 9 === i.nodeType && i.documentElement ? (j = i, O = j.documentElement, $ = !k(j), (n = j.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", wt, !1) : n.attachEvent && n.attachEvent("onunload", wt)), b.attributes = r(function (t) {
                return t.className = "i", !t.getAttribute("className")
            }), b.getElementsByTagName = r(function (t) {
                return t.appendChild(j.createComment("")), !t.getElementsByTagName("*").length
            }), b.getElementsByClassName = mt.test(j.getElementsByClassName), b.getById = r(function (t) {
                return O.appendChild(t).id = I, !j.getElementsByName || !j.getElementsByName(I).length
            }), b.getById ? (w.find.ID = function (t, e) {
                if ("undefined" != typeof e.getElementById && $) {
                    var n = e.getElementById(t);
                    return n ? [n] : []
                }
            }, w.filter.ID = function (t) {
                var e = t.replace(xt, bt);
                return function (t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete w.find.ID, w.filter.ID = function (t) {
                var e = t.replace(xt, bt);
                return function (t) {
                    var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                    return n && n.value === e
                }
            }), w.find.TAG = b.getElementsByTagName ? function (t, e) {
                return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : b.qsa ? e.querySelectorAll(t) : void 0
            } : function (t, e) {
                var n, i = [],
                    r = 0,
                    o = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }, w.find.CLASS = b.getElementsByClassName && function (t, e) {
                return "undefined" != typeof e.getElementsByClassName && $ ? e.getElementsByClassName(t) : void 0
            }, M = [], N = [], (b.qsa = mt.test(j.querySelectorAll)) && (r(function (t) {
                O.appendChild(t).innerHTML = "<a id='" + I + "'></a><select id='" + I + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && N.push("[*^$]=" + nt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || N.push("\\[" + nt + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + I + "-]").length || N.push("~="), t.querySelectorAll(":checked").length || N.push(":checked"), t.querySelectorAll("a#" + I + "+*").length || N.push(".#.+[+~]")
            }), r(function (t) {
                var e = j.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && N.push("name" + nt + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || N.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), N.push(",.*:")
            })), (b.matchesSelector = mt.test(R = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && r(function (t) {
                b.disconnectedMatch = R.call(t, "div"), R.call(t, "[s!='']:x"), M.push("!=", ot)
            }), N = N.length && new RegExp(N.join("|")), M = M.length && new RegExp(M.join("|")), e = mt.test(O.compareDocumentPosition), L = e || mt.test(O.contains) ? function (t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t,
                    i = e && e.parentNode;
                return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
            } : function (t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t) return !0;
                return !1
            }, Y = e ? function (t, e) {
                if (t === e) return P = !0, 0;
                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !b.sortDetached && e.compareDocumentPosition(t) === n ? t === j || t.ownerDocument === B && L(B, t) ? -1 : e === j || e.ownerDocument === B && L(B, e) ? 1 : F ? tt(F, t) - tt(F, e) : 0 : 4 & n ? -1 : 1)
            } : function (t, e) {
                if (t === e) return P = !0, 0;
                var n, i = 0,
                    r = t.parentNode,
                    o = e.parentNode,
                    a = [t],
                    l = [e];
                if (!r || !o) return t === j ? -1 : e === j ? 1 : r ? -1 : o ? 1 : F ? tt(F, t) - tt(F, e) : 0;
                if (r === o) return s(t, e);
                for (n = t; n = n.parentNode;) a.unshift(n);
                for (n = e; n = n.parentNode;) l.unshift(n);
                for (; a[i] === l[i];) i++;
                return i ? s(a[i], l[i]) : a[i] === B ? -1 : l[i] === B ? 1 : 0
            }, j) : j
        }, e.matches = function (t, n) {
            return e(t, null, null, n)
        }, e.matchesSelector = function (t, n) {
            if ((t.ownerDocument || t) !== j && D(t), n = n.replace(ut, "='$1']"), b.matchesSelector && $ && !W[n + " "] && (!M || !M.test(n)) && (!N || !N.test(n))) try {
                var i = R.call(t, n);
                if (i || b.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
            } catch (r) {}
            return e(n, j, null, [t]).length > 0
        }, e.contains = function (t, e) {
            return (t.ownerDocument || t) !== j && D(t), L(t, e)
        }, e.attr = function (t, e) {
            (t.ownerDocument || t) !== j && D(t);
            var n = w.attrHandle[e.toLowerCase()],
                i = n && U.call(w.attrHandle, e.toLowerCase()) ? n(t, e, !$) : void 0;
            return void 0 !== i ? i : b.attributes || !$ ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }, e.error = function (t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function (t) {
            var e, n = [],
                i = 0,
                r = 0;
            if (P = !b.detectDuplicates, F = !b.sortStable && t.slice(0), t.sort(Y), P) {
                for (; e = t[r++];) e === t[r] && (i = n.push(r));
                for (; i--;) t.splice(n[i], 1)
            }
            return F = null, t
        }, T = e.getText = function (t) {
            var e, n = "",
                i = 0,
                r = t.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) n += T(t)
                } else if (3 === r || 4 === r) return t.nodeValue
            } else
                for (; e = t[i++];) n += T(e);
            return n
        }, w = e.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: ft,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (t) {
                    return t[1] = t[1].replace(xt, bt), t[3] = (t[3] || t[4] || t[5] || "").replace(xt, bt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },
                CHILD: function (t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                },
                PSEUDO: function (t) {
                    var e, n = !t[6] && t[2];
                    return ft.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && ht.test(n) && (e = C(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function (t) {
                    var e = t.replace(xt, bt).toLowerCase();
                    return "*" === t ? function () {
                        return !0
                    } : function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function (t) {
                    var e = z[t + " "];
                    return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && z(t, function (t) {
                        return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                    })
                },
                ATTR: function (t, n, i) {
                    return function (r) {
                        var o = e.attr(r, t);
                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(st, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function (t, e, n, i, r) {
                    var o = "nth" !== t.slice(0, 3),
                        s = "last" !== t.slice(-4),
                        a = "of-type" === e;
                    return 1 === i && 0 === r ? function (t) {
                        return !!t.parentNode
                    } : function (e, n, l) {
                        var c, u, h, p, f, d, g = o !== s ? "nextSibling" : "previousSibling",
                            m = e.parentNode,
                            v = a && e.nodeName.toLowerCase(),
                            y = !l && !a,
                            _ = !1;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (p = e; p = p[g];)
                                        if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                    d = g = "only" === t && !d && "nextSibling"
                                }
                                return !0
                            }
                            if (d = [s ? m.firstChild : m.lastChild], s && y) {
                                for (p = m, h = p[I] || (p[I] = {}), u = h[p.uniqueID] || (h[p.uniqueID] = {}), c = u[t] || [], f = c[0] === q && c[1], _ = f && c[2], p = f && m.childNodes[f]; p = ++f && p && p[g] || (_ = f = 0) || d.pop();)
                                    if (1 === p.nodeType && ++_ && p === e) {
                                        u[t] = [q, f, _];
                                        break
                                    }
                            } else if (y && (p = e, h = p[I] || (p[I] = {}), u = h[p.uniqueID] || (h[p.uniqueID] = {}), c = u[t] || [], f = c[0] === q && c[1], _ = f), _ === !1)
                                for (;
                                    (p = ++f && p && p[g] || (_ = f = 0) || d.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++_ || (y && (h = p[I] || (p[I] = {}), u = h[p.uniqueID] || (h[p.uniqueID] = {}), u[t] = [q, _]), p !== e)););
                            return _ -= r, _ === i || _ % i === 0 && _ / i >= 0
                        }
                    }
                },
                PSEUDO: function (t, n) {
                    var r, o = w.pseudos[t] || w.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return o[I] ? o(n) : o.length > 1 ? (r = [t, t, "", n], w.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function (t, e) {
                        for (var i, r = o(t, n), s = r.length; s--;) i = tt(t, r[s]), t[i] = !(e[i] = r[s])
                    }) : function (t) {
                        return o(t, 0, r)
                    }) : o
                }
            },
            pseudos: {
                not: i(function (t) {
                    var e = [],
                        n = [],
                        r = E(t.replace(at, "$1"));
                    return r[I] ? i(function (t, e, n, i) {
                        for (var o, s = r(t, null, i, []), a = t.length; a--;)(o = s[a]) && (t[a] = !(e[a] = o))
                    }) : function (t, i, o) {
                        return e[0] = t, r(e, null, o, n), e[0] = null, !n.pop()
                    }
                }),
                has: i(function (t) {
                    return function (n) {
                        return e(t, n).length > 0
                    }
                }),
                contains: i(function (t) {
                    return t = t.replace(xt, bt),
                        function (e) {
                            return (e.textContent || e.innerText || T(e)).indexOf(t) > -1
                        }
                }),
                lang: i(function (t) {
                    return pt.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(xt, bt).toLowerCase(),
                        function (e) {
                            var n;
                            do
                                if (n = $ ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                }),
                target: function (e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id
                },
                root: function (t) {
                    return t === O
                },
                focus: function (t) {
                    return t === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: function (t) {
                    return t.disabled === !1
                },
                disabled: function (t) {
                    return t.disabled === !0
                },
                checked: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function (t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                },
                empty: function (t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6) return !1;
                    return !0
                },
                parent: function (t) {
                    return !w.pseudos.empty(t)
                },
                header: function (t) {
                    return gt.test(t.nodeName)
                },
                input: function (t) {
                    return dt.test(t.nodeName)
                },
                button: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function (t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: c(function () {
                    return [0]
                }),
                last: c(function (t, e) {
                    return [e - 1]
                }),
                eq: c(function (t, e, n) {
                    return [0 > n ? n + e : n]
                }),
                even: c(function (t, e) {
                    for (var n = 0; e > n; n += 2) t.push(n);
                    return t;
                }),
                odd: c(function (t, e) {
                    for (var n = 1; e > n; n += 2) t.push(n);
                    return t
                }),
                lt: c(function (t, e, n) {
                    for (var i = 0 > n ? n + e : n; --i >= 0;) t.push(i);
                    return t
                }),
                gt: c(function (t, e, n) {
                    for (var i = 0 > n ? n + e : n; ++i < e;) t.push(i);
                    return t
                })
            }
        }, w.pseudos.nth = w.pseudos.eq;
        for (x in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) w.pseudos[x] = a(x);
        for (x in {
                submit: !0,
                reset: !0
            }) w.pseudos[x] = l(x);
        return h.prototype = w.filters = w.pseudos, w.setFilters = new h, C = e.tokenize = function (t, n) {
            var i, r, o, s, a, l, c, u = X[t + " "];
            if (u) return n ? 0 : u.slice(0);
            for (a = t, l = [], c = w.preFilter; a;) {
                (!i || (r = lt.exec(a))) && (r && (a = a.slice(r[0].length) || a), l.push(o = [])), i = !1, (r = ct.exec(a)) && (i = r.shift(), o.push({
                    value: i,
                    type: r[0].replace(at, " ")
                }), a = a.slice(i.length));
                for (s in w.filter) !(r = ft[s].exec(a)) || c[s] && !(r = c[s](r)) || (i = r.shift(), o.push({
                    value: i,
                    type: s,
                    matches: r
                }), a = a.slice(i.length));
                if (!i) break
            }
            return n ? a.length : a ? e.error(t) : X(t, l).slice(0)
        }, E = e.compile = function (t, e) {
            var n, i = [],
                r = [],
                o = W[t + " "];
            if (!o) {
                for (e || (e = C(t)), n = e.length; n--;) o = y(e[n]), o[I] ? i.push(o) : r.push(o);
                o = W(t, _(r, i)), o.selector = t
            }
            return o
        }, A = e.select = function (t, e, n, i) {
            var r, o, s, a, l, c = "function" == typeof t && t,
                h = !i && C(t = c.selector || t);
            if (n = n || [], 1 === h.length) {
                if (o = h[0] = h[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && b.getById && 9 === e.nodeType && $ && w.relative[o[1].type]) {
                    if (e = (w.find.ID(s.matches[0].replace(xt, bt), e) || [])[0], !e) return n;
                    c && (e = e.parentNode), t = t.slice(o.shift().value.length)
                }
                for (r = ft.needsContext.test(t) ? 0 : o.length; r-- && (s = o[r], !w.relative[a = s.type]);)
                    if ((l = w.find[a]) && (i = l(s.matches[0].replace(xt, bt), yt.test(o[0].type) && u(e.parentNode) || e))) {
                        if (o.splice(r, 1), t = i.length && p(o), !t) return K.apply(n, i), n;
                        break
                    }
            }
            return (c || E(t, h))(i, e, !$, n, !e || yt.test(t) && u(e.parentNode) || e), n
        }, b.sortStable = I.split("").sort(Y).join("") === I, b.detectDuplicates = !!P, D(), b.sortDetached = r(function (t) {
            return 1 & t.compareDocumentPosition(j.createElement("div"))
        }), r(function (t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function (t, e, n) {
            return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), b.attributes && r(function (t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || o("value", function (t, e, n) {
            return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }), r(function (t) {
            return null == t.getAttribute("disabled")
        }) || o(et, function (t, e, n) {
            var i;
            return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }), e
    }(t);
    ot.find = ut, ot.expr = ut.selectors, ot.expr[":"] = ot.expr.pseudos, ot.uniqueSort = ot.unique = ut.uniqueSort, ot.text = ut.getText, ot.isXMLDoc = ut.isXML, ot.contains = ut.contains;
    var ht = function (t, e, n) {
            for (var i = [], r = void 0 !== n;
                (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (r && ot(t).is(n)) break;
                    i.push(t)
                }
            return i
        },
        pt = function (t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n
        },
        ft = ot.expr.match.needsContext,
        dt = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        gt = /^.[^:#\[\.,]*$/;
    ot.filter = function (t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? ot.find.matchesSelector(i, t) ? [i] : [] : ot.find.matches(t, ot.grep(e, function (t) {
            return 1 === t.nodeType
        }))
    }, ot.fn.extend({
        find: function (t) {
            var e, n = this.length,
                i = [],
                r = this;
            if ("string" != typeof t) return this.pushStack(ot(t).filter(function () {
                for (e = 0; n > e; e++)
                    if (ot.contains(r[e], this)) return !0
            }));
            for (e = 0; n > e; e++) ot.find(t, r[e], i);
            return i = this.pushStack(n > 1 ? ot.unique(i) : i), i.selector = this.selector ? this.selector + " " + t : t, i
        },
        filter: function (t) {
            return this.pushStack(i(this, t || [], !1))
        },
        not: function (t) {
            return this.pushStack(i(this, t || [], !0))
        },
        is: function (t) {
            return !!i(this, "string" == typeof t && ft.test(t) ? ot(t) : t || [], !1).length
        }
    });
    var mt, vt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        yt = ot.fn.init = function (t, e, n) {
            var i, r;
            if (!t) return this;
            if (n = n || mt, "string" == typeof t) {
                if (i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : vt.exec(t), !i || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                if (i[1]) {
                    if (e = e instanceof ot ? e[0] : e, ot.merge(this, ot.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : G, !0)), dt.test(i[1]) && ot.isPlainObject(e))
                        for (i in e) ot.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                    return this
                }
                return r = G.getElementById(i[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = G, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : ot.isFunction(t) ? void 0 !== n.ready ? n.ready(t) : t(ot) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), ot.makeArray(t, this))
        };
    yt.prototype = ot.fn, mt = ot(G);
    var _t = /^(?:parents|prev(?:Until|All))/,
        xt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ot.fn.extend({
        has: function (t) {
            var e = ot(t, this),
                n = e.length;
            return this.filter(function () {
                for (var t = 0; n > t; t++)
                    if (ot.contains(this, e[t])) return !0
            })
        },
        closest: function (t, e) {
            for (var n, i = 0, r = this.length, o = [], s = ft.test(t) || "string" != typeof t ? ot(t, e || this.context) : 0; r > i; i++)
                for (n = this[i]; n && n !== e; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && ot.find.matchesSelector(n, t))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? ot.uniqueSort(o) : o)
        },
        index: function (t) {
            return t ? "string" == typeof t ? J.call(ot(t), this[0]) : J.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (t, e) {
            return this.pushStack(ot.uniqueSort(ot.merge(this.get(), ot(t, e))))
        },
        addBack: function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), ot.each({
        parent: function (t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function (t) {
            return ht(t, "parentNode")
        },
        parentsUntil: function (t, e, n) {
            return ht(t, "parentNode", n)
        },
        next: function (t) {
            return r(t, "nextSibling")
        },
        prev: function (t) {
            return r(t, "previousSibling")
        },
        nextAll: function (t) {
            return ht(t, "nextSibling")
        },
        prevAll: function (t) {
            return ht(t, "previousSibling")
        },
        nextUntil: function (t, e, n) {
            return ht(t, "nextSibling", n)
        },
        prevUntil: function (t, e, n) {
            return ht(t, "previousSibling", n)
        },
        siblings: function (t) {
            return pt((t.parentNode || {}).firstChild, t)
        },
        children: function (t) {
            return pt(t.firstChild)
        },
        contents: function (t) {
            return t.contentDocument || ot.merge([], t.childNodes)
        }
    }, function (t, e) {
        ot.fn[t] = function (n, i) {
            var r = ot.map(this, e, n);
            return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = ot.filter(i, r)), this.length > 1 && (xt[t] || ot.uniqueSort(r), _t.test(t) && r.reverse()), this.pushStack(r)
        }
    });
    var bt = /\S+/g;
    ot.Callbacks = function (t) {
        t = "string" == typeof t ? o(t) : ot.extend({}, t);
        var e, n, i, r, s = [],
            a = [],
            l = -1,
            c = function () {
                for (r = t.once, i = e = !0; a.length; l = -1)
                    for (n = a.shift(); ++l < s.length;) s[l].apply(n[0], n[1]) === !1 && t.stopOnFalse && (l = s.length, n = !1);
                t.memory || (n = !1), e = !1, r && (s = n ? [] : "")
            },
            u = {
                add: function () {
                    return s && (n && !e && (l = s.length - 1, a.push(n)), function i(e) {
                        ot.each(e, function (e, n) {
                            ot.isFunction(n) ? t.unique && u.has(n) || s.push(n) : n && n.length && "string" !== ot.type(n) && i(n)
                        })
                    }(arguments), n && !e && c()), this
                },
                remove: function () {
                    return ot.each(arguments, function (t, e) {
                        for (var n;
                            (n = ot.inArray(e, s, n)) > -1;) s.splice(n, 1), l >= n && l--
                    }), this
                },
                has: function (t) {
                    return t ? ot.inArray(t, s) > -1 : s.length > 0
                },
                empty: function () {
                    return s && (s = []), this
                },
                disable: function () {
                    return r = a = [], s = n = "", this
                },
                disabled: function () {
                    return !s
                },
                lock: function () {
                    return r = a = [], n || (s = n = ""), this
                },
                locked: function () {
                    return !!r
                },
                fireWith: function (t, n) {
                    return r || (n = n || [], n = [t, n.slice ? n.slice() : n], a.push(n), e || c()), this
                },
                fire: function () {
                    return u.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!i
                }
            };
        return u
    }, ot.extend({
        Deferred: function (t) {
            var e = [["resolve", "done", ot.Callbacks("once memory"), "resolved"], ["reject", "fail", ot.Callbacks("once memory"), "rejected"], ["notify", "progress", ot.Callbacks("memory")]],
                n = "pending",
                i = {
                    state: function () {
                        return n
                    },
                    always: function () {
                        return r.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var t = arguments;
                        return ot.Deferred(function (n) {
                            ot.each(e, function (e, o) {
                                var s = ot.isFunction(t[e]) && t[e];
                                r[o[1]](function () {
                                    var t = s && s.apply(this, arguments);
                                    t && ot.isFunction(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === i ? n.promise() : this, s ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    promise: function (t) {
                        return null != t ? ot.extend(t, i) : i
                    }
                },
                r = {};
            return i.pipe = i.then, ot.each(e, function (t, o) {
                var s = o[2],
                    a = o[3];
                i[o[1]] = s.add, a && s.add(function () {
                    n = a
                }, e[1 ^ t][2].disable, e[2][2].lock), r[o[0]] = function () {
                    return r[o[0] + "With"](this === r ? i : this, arguments), this
                }, r[o[0] + "With"] = s.fireWith
            }), i.promise(r), t && t.call(r, r), r
        },
        when: function (t) {
            var e, n, i, r = 0,
                o = Q.call(arguments),
                s = o.length,
                a = 1 !== s || t && ot.isFunction(t.promise) ? s : 0,
                l = 1 === a ? t : ot.Deferred(),
                c = function (t, n, i) {
                    return function (r) {
                        n[t] = this, i[t] = arguments.length > 1 ? Q.call(arguments) : r, i === e ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                    }
                };
            if (s > 1)
                for (e = new Array(s), n = new Array(s), i = new Array(s); s > r; r++) o[r] && ot.isFunction(o[r].promise) ? o[r].promise().progress(c(r, n, e)).done(c(r, i, o)).fail(l.reject) : --a;
            return a || l.resolveWith(i, o), l.promise()
        }
    });
    var wt;
    ot.fn.ready = function (t) {
        return ot.ready.promise().done(t), this
    }, ot.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (t) {
            t ? ot.readyWait++ : ot.ready(!0)
        },
        ready: function (t) {
            (t === !0 ? --ot.readyWait : ot.isReady) || (ot.isReady = !0, t !== !0 && --ot.readyWait > 0 || (wt.resolveWith(G, [ot]), ot.fn.triggerHandler && (ot(G).triggerHandler("ready"), ot(G).off("ready"))))
        }
    }), ot.ready.promise = function (e) {
        return wt || (wt = ot.Deferred(), "complete" === G.readyState || "loading" !== G.readyState && !G.documentElement.doScroll ? t.setTimeout(ot.ready) : (G.addEventListener("DOMContentLoaded", s), t.addEventListener("load", s))), wt.promise(e)
    }, ot.ready.promise();
    var Tt = function (t, e, n, i, r, o, s) {
            var a = 0,
                l = t.length,
                c = null == n;
            if ("object" === ot.type(n)) {
                r = !0;
                for (a in n) Tt(t, e, a, n[a], !0, o, s)
            } else if (void 0 !== i && (r = !0, ot.isFunction(i) || (s = !0), c && (s ? (e.call(t, i), e = null) : (c = e, e = function (t, e, n) {
                    return c.call(ot(t), n)
                })), e))
                for (; l > a; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
            return r ? t : c ? e.call(t) : l ? e(t[0], n) : o
        },
        kt = function (t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        };
    a.uid = 1, a.prototype = {
        register: function (t, e) {
            var n = e || {};
            return t.nodeType ? t[this.expando] = n : Object.defineProperty(t, this.expando, {
                value: n,
                writable: !0,
                configurable: !0
            }), t[this.expando]
        },
        cache: function (t) {
            if (!kt(t)) return {};
            var e = t[this.expando];
            return e || (e = {}, kt(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))), e
        },
        set: function (t, e, n) {
            var i, r = this.cache(t);
            if ("string" == typeof e) r[e] = n;
            else
                for (i in e) r[i] = e[i];
            return r
        },
        get: function (t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][e]
        },
        access: function (t, e, n) {
            var i;
            return void 0 === e || e && "string" == typeof e && void 0 === n ? (i = this.get(t, e), void 0 !== i ? i : this.get(t, ot.camelCase(e))) : (this.set(t, e, n), void 0 !== n ? n : e)
        },
        remove: function (t, e) {
            var n, i, r, o = t[this.expando];
            if (void 0 !== o) {
                if (void 0 === e) this.register(t);
                else {
                    ot.isArray(e) ? i = e.concat(e.map(ot.camelCase)) : (r = ot.camelCase(e), e in o ? i = [e, r] : (i = r, i = i in o ? [i] : i.match(bt) || [])), n = i.length;
                    for (; n--;) delete o[i[n]]
                }(void 0 === e || ot.isEmptyObject(o)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        },
        hasData: function (t) {
            var e = t[this.expando];
            return void 0 !== e && !ot.isEmptyObject(e)
        }
    };
    var Ct = new a,
        Et = new a,
        At = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        St = /[A-Z]/g;
    ot.extend({
        hasData: function (t) {
            return Et.hasData(t) || Ct.hasData(t)
        },
        data: function (t, e, n) {
            return Et.access(t, e, n)
        },
        removeData: function (t, e) {
            Et.remove(t, e)
        },
        _data: function (t, e, n) {
            return Ct.access(t, e, n)
        },
        _removeData: function (t, e) {
            Ct.remove(t, e)
        }
    }), ot.fn.extend({
        data: function (t, e) {
            var n, i, r, o = this[0],
                s = o && o.attributes;
            if (void 0 === t) {
                if (this.length && (r = Et.get(o), 1 === o.nodeType && !Ct.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = ot.camelCase(i.slice(5)), l(o, i, r[i])));
                    Ct.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof t ? this.each(function () {
                Et.set(this, t)
            }) : Tt(this, function (e) {
                var n, i;
                if (o && void 0 === e) {
                    if (n = Et.get(o, t) || Et.get(o, t.replace(St, "-$&").toLowerCase()), void 0 !== n) return n;
                    if (i = ot.camelCase(t), n = Et.get(o, i), void 0 !== n) return n;
                    if (n = l(o, i, void 0), void 0 !== n) return n
                } else i = ot.camelCase(t), this.each(function () {
                    var n = Et.get(this, i);
                    Et.set(this, i, e), t.indexOf("-") > -1 && void 0 !== n && Et.set(this, t, e)
                })
            }, null, e, arguments.length > 1, null, !0)
        },
        removeData: function (t) {
            return this.each(function () {
                Et.remove(this, t)
            })
        }
    }), ot.extend({
        queue: function (t, e, n) {
            var i;
            return t ? (e = (e || "fx") + "queue", i = Ct.get(t, e), n && (!i || ot.isArray(n) ? i = Ct.access(t, e, ot.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function (t, e) {
            e = e || "fx";
            var n = ot.queue(t, e),
                i = n.length,
                r = n.shift(),
                o = ot._queueHooks(t, e),
                s = function () {
                    ot.dequeue(t, e)
                };
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete o.stop, r.call(t, s, o)), !i && o && o.empty.fire()
        },
        _queueHooks: function (t, e) {
            var n = e + "queueHooks";
            return Ct.get(t, n) || Ct.access(t, n, {
                empty: ot.Callbacks("once memory").add(function () {
                    Ct.remove(t, [e + "queue", n])
                })
            })
        }
    }), ot.fn.extend({
        queue: function (t, e) {
            var n = 2;
            return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? ot.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                var n = ot.queue(this, t, e);
                ot._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && ot.dequeue(this, t)
            })
        },
        dequeue: function (t) {
            return this.each(function () {
                ot.dequeue(this, t)
            })
        },
        clearQueue: function (t) {
            return this.queue(t || "fx", [])
        },
        promise: function (t, e) {
            var n, i = 1,
                r = ot.Deferred(),
                o = this,
                s = this.length,
                a = function () {
                    --i || r.resolveWith(o, [o])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;) n = Ct.get(o[s], t + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
            return a(), r.promise(e)
        }
    });
    var Ft = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Pt = new RegExp("^(?:([+-])=|)(" + Ft + ")([a-z%]*)$", "i"),
        Dt = ["Top", "Right", "Bottom", "Left"],
        jt = function (t, e) {
            return t = e || t, "none" === ot.css(t, "display") || !ot.contains(t.ownerDocument, t)
        },
        Ot = /^(?:checkbox|radio)$/i,
        $t = /<([\w:-]+)/,
        Nt = /^$|\/(?:java|ecma)script/i,
        Mt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Mt.optgroup = Mt.option, Mt.tbody = Mt.tfoot = Mt.colgroup = Mt.caption = Mt.thead, Mt.th = Mt.td;
    var Rt = /<|&#?\w+;/;
    ! function () {
        var t = G.createDocumentFragment(),
            e = t.appendChild(G.createElement("div")),
            n = G.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), it.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", it.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var Lt = /^key/,
        It = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Bt = /^([^.]*)(?:\.(.+)|)/;
    ot.event = {
        global: {},
        add: function (t, e, n, i, r) {
            var o, s, a, l, c, u, h, p, f, d, g, m = Ct.get(t);
            if (m)
                for (n.handler && (o = n, n = o.handler, r = o.selector), n.guid || (n.guid = ot.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function (e) {
                        return "undefined" != typeof ot && ot.event.triggered !== e.type ? ot.event.dispatch.apply(t, arguments) : void 0
                    }), e = (e || "").match(bt) || [""], c = e.length; c--;) a = Bt.exec(e[c]) || [], f = g = a[1], d = (a[2] || "").split(".").sort(), f && (h = ot.event.special[f] || {}, f = (r ? h.delegateType : h.bindType) || f, h = ot.event.special[f] || {}, u = ot.extend({
                    type: f,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && ot.expr.match.needsContext.test(r),
                    namespace: d.join(".")
                }, o), (p = l[f]) || (p = l[f] = [], p.delegateCount = 0, h.setup && h.setup.call(t, i, d, s) !== !1 || t.addEventListener && t.addEventListener(f, s)), h.add && (h.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), r ? p.splice(p.delegateCount++, 0, u) : p.push(u), ot.event.global[f] = !0)
        },
        remove: function (t, e, n, i, r) {
            var o, s, a, l, c, u, h, p, f, d, g, m = Ct.hasData(t) && Ct.get(t);
            if (m && (l = m.events)) {
                for (e = (e || "").match(bt) || [""], c = e.length; c--;)
                    if (a = Bt.exec(e[c]) || [], f = g = a[1], d = (a[2] || "").split(".").sort(), f) {
                        for (h = ot.event.special[f] || {}, f = (i ? h.delegateType : h.bindType) || f, p = l[f] || [], a = a[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;) u = p[o], !r && g !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (p.splice(o, 1), u.selector && p.delegateCount--, h.remove && h.remove.call(t, u));
                        s && !p.length && (h.teardown && h.teardown.call(t, d, m.handle) !== !1 || ot.removeEvent(t, f, m.handle), delete l[f])
                    } else
                        for (f in l) ot.event.remove(t, f + e[c], n, i, !0);
                ot.isEmptyObject(l) && Ct.remove(t, "handle events")
            }
        },
        dispatch: function (t) {
            t = ot.event.fix(t);
            var e, n, i, r, o, s = [],
                a = Q.call(arguments),
                l = (Ct.get(this, "events") || {})[t.type] || [],
                c = ot.event.special[t.type] || {};
            if (a[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
                for (s = ot.event.handlers.call(this, t, l), e = 0;
                    (r = s[e++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = r.elem, n = 0;
                        (o = r.handlers[n++]) && !t.isImmediatePropagationStopped();)(!t.rnamespace || t.rnamespace.test(o.namespace)) && (t.handleObj = o, t.data = o.data, i = ((ot.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a), void 0 !== i && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, t), t.result
            }
        },
        handlers: function (t, e) {
            var n, i, r, o, s = [],
                a = e.delegateCount,
                l = t.target;
            if (a && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                        for (i = [], n = 0; a > n; n++) o = e[n], r = o.selector + " ", void 0 === i[r] && (i[r] = o.needsContext ? ot(r, this).index(l) > -1 : ot.find(r, this, null, [l]).length), i[r] && i.push(o);
                        i.length && s.push({
                            elem: l,
                            handlers: i
                        })
                    }
            return a < e.length && s.push({
                elem: this,
                handlers: e.slice(a)
            }), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (t, e) {
                var n, i, r, o = e.button;
                return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || G, i = n.documentElement, r = n.body, t.pageX = e.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), t.pageY = e.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
            }
        },
        fix: function (t) {
            if (t[ot.expando]) return t;
            var e, n, i, r = t.type,
                o = t,
                s = this.fixHooks[r];
            for (s || (this.fixHooks[r] = s = It.test(r) ? this.mouseHooks : Lt.test(r) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, t = new ot.Event(o), e = i.length; e--;) n = i[e], t[n] = o[n];
            return t.target || (t.target = G), 3 === t.target.nodeType && (t.target = t.target.parentNode), s.filter ? s.filter(t, o) : t
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    return this !== g() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === g() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    return "checkbox" === this.type && this.click && ot.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function (t) {
                    return ot.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    }, ot.removeEvent = function (t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n)
    }, ot.Event = function (t, e) {
        return this instanceof ot.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? f : d) : this.type = t, e && ot.extend(this, e), this.timeStamp = t && t.timeStamp || ot.now(), void(this[ot.expando] = !0)) : new ot.Event(t, e)
    }, ot.Event.prototype = {
        constructor: ot.Event,
        isDefaultPrevented: d,
        isPropagationStopped: d,
        isImmediatePropagationStopped: d,
        preventDefault: function () {
            var t = this.originalEvent;
            this.isDefaultPrevented = f, t && t.preventDefault()
        },
        stopPropagation: function () {
            var t = this.originalEvent;
            this.isPropagationStopped = f, t && t.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = f, t && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, ot.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (t, e) {
        ot.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function (t) {
                var n, i = this,
                    r = t.relatedTarget,
                    o = t.handleObj;
                return (!r || r !== i && !ot.contains(i, r)) && (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
            }
        }
    }), ot.fn.extend({
        on: function (t, e, n, i) {
            return m(this, t, e, n, i)
        },
        one: function (t, e, n, i) {
            return m(this, t, e, n, i, 1)
        },
        off: function (t, e, n) {
            var i, r;
            if (t && t.preventDefault && t.handleObj) return i = t.handleObj, ot(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof t) {
                for (r in t) this.off(r, e, t[r]);
                return this
            }
            return (e === !1 || "function" == typeof e) && (n = e, e = void 0), n === !1 && (n = d), this.each(function () {
                ot.event.remove(this, t, n, e)
            })
        }
    });
    var qt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        Ht = /<script|<style|<link/i,
        zt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Xt = /^true\/(.*)/,
        Wt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    ot.extend({
        htmlPrefilter: function (t) {
            return t.replace(qt, "<$1></$2>")
        },
        clone: function (t, e, n) {
            var i, r, o, s, a = t.cloneNode(!0),
                l = ot.contains(t.ownerDocument, t);
            if (!(it.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ot.isXMLDoc(t)))
                for (s = u(a), o = u(t), i = 0, r = o.length; r > i; i++) b(o[i], s[i]);
            if (e)
                if (n)
                    for (o = o || u(t), s = s || u(a), i = 0, r = o.length; r > i; i++) x(o[i], s[i]);
                else x(t, a);
            return s = u(a, "script"), s.length > 0 && h(s, !l && u(t, "script")), a
        },
        cleanData: function (t) {
            for (var e, n, i, r = ot.event.special, o = 0; void 0 !== (n = t[o]); o++)
                if (kt(n)) {
                    if (e = n[Ct.expando]) {
                        if (e.events)
                            for (i in e.events) r[i] ? ot.event.remove(n, i) : ot.removeEvent(n, i, e.handle);
                        n[Ct.expando] = void 0
                    }
                    n[Et.expando] && (n[Et.expando] = void 0)
                }
        }
    }), ot.fn.extend({
        domManip: w,
        detach: function (t) {
            return T(this, t, !0)
        },
        remove: function (t) {
            return T(this, t)
        },
        text: function (t) {
            return Tt(this, function (t) {
                return void 0 === t ? ot.text(this) : this.empty().each(function () {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function () {
            return w(this, arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = v(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function () {
            return w(this, arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = v(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function () {
            return w(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function () {
            return w(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function () {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (ot.cleanData(u(t, !1)), t.textContent = "");
            return this
        },
        clone: function (t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function () {
                return ot.clone(this, t, e)
            })
        },
        html: function (t) {
            return Tt(this, function (t) {
                var e = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !Ht.test(t) && !Mt[($t.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = ot.htmlPrefilter(t);
                    try {
                        for (; i > n; n++) e = this[n] || {}, 1 === e.nodeType && (ot.cleanData(u(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (r) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function () {
            var t = [];
            return w(this, arguments, function (e) {
                var n = this.parentNode;
                ot.inArray(this, t) < 0 && (ot.cleanData(u(this)), n && n.replaceChild(e, this))
            }, t)
        }
    }), ot.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (t, e) {
        ot.fn[t] = function (t) {
            for (var n, i = [], r = ot(t), o = r.length - 1, s = 0; o >= s; s++) n = s === o ? this : this.clone(!0), ot(r[s])[e](n), K.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Yt, Vt = {
            HTML: "block",
            BODY: "block"
        },
        Ut = /^margin/,
        Gt = new RegExp("^(" + Ft + ")(?!px)[a-z%]+$", "i"),
        Qt = function (e) {
            var n = e.ownerDocument.defaultView;
            return n && n.opener || (n = t), n.getComputedStyle(e)
        },
        Zt = function (t, e, n, i) {
            var r, o, s = {};
            for (o in e) s[o] = t.style[o], t.style[o] = e[o];
            r = n.apply(t, i || []);
            for (o in e) t.style[o] = s[o];
            return r
        },
        Kt = G.documentElement;
    ! function () {
        function e() {
            a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Kt.appendChild(s);
            var e = t.getComputedStyle(a);
            n = "1%" !== e.top, o = "2px" === e.marginLeft, i = "4px" === e.width, a.style.marginRight = "50%", r = "4px" === e.marginRight, Kt.removeChild(s)
        }
        var n, i, r, o, s = G.createElement("div"),
            a = G.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", it.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), ot.extend(it, {
            pixelPosition: function () {
                return e(), n
            },
            boxSizingReliable: function () {
                return null == i && e(), i
            },
            pixelMarginRight: function () {
                return null == i && e(), r
            },
            reliableMarginLeft: function () {
                return null == i && e(), o
            },
            reliableMarginRight: function () {
                var e, n = a.appendChild(G.createElement("div"));
                return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", Kt.appendChild(s), e = !parseFloat(t.getComputedStyle(n).marginRight), Kt.removeChild(s), a.removeChild(n), e
            }
        }))
    }();
    var Jt = /^(none|table(?!-c[ea]).+)/,
        te = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        ee = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        ne = ["Webkit", "O", "Moz", "ms"],
        ie = G.createElement("div").style;
    ot.extend({
        cssHooks: {
            opacity: {
                get: function (t, e) {
                    if (e) {
                        var n = E(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function (t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, o, s, a = ot.camelCase(e),
                    l = t.style;
                return e = ot.cssProps[a] || (ot.cssProps[a] = S(a) || a), s = ot.cssHooks[e] || ot.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (r = s.get(t, !1, i)) ? r : l[e] : (o = typeof n, "string" === o && (r = Pt.exec(n)) && r[1] && (n = c(t, e, r), o = "number"), void(null != n && n === n && ("number" === o && (n += r && r[3] || (ot.cssNumber[a] ? "" : "px")), it.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), s && "set" in s && void 0 === (n = s.set(t, n, i)) || (l[e] = n))))
            }
        },
        css: function (t, e, n, i) {
            var r, o, s, a = ot.camelCase(e);
            return e = ot.cssProps[a] || (ot.cssProps[a] = S(a) || a), s = ot.cssHooks[e] || ot.cssHooks[a], s && "get" in s && (r = s.get(t, !0, n)), void 0 === r && (r = E(t, e, i)), "normal" === r && e in ee && (r = ee[e]), "" === n || n ? (o = parseFloat(r), n === !0 || isFinite(o) ? o || 0 : r) : r
        }
    }), ot.each(["height", "width"], function (t, e) {
        ot.cssHooks[e] = {
            get: function (t, n, i) {
                return n ? Jt.test(ot.css(t, "display")) && 0 === t.offsetWidth ? Zt(t, te, function () {
                    return D(t, e, i)
                }) : D(t, e, i) : void 0
            },
            set: function (t, n, i) {
                var r, o = i && Qt(t),
                    s = i && P(t, e, i, "border-box" === ot.css(t, "boxSizing", !1, o), o);
                return s && (r = Pt.exec(n)) && "px" !== (r[3] || "px") && (t.style[e] = n, n = ot.css(t, e)), F(t, n, s)
            }
        }
    }), ot.cssHooks.marginLeft = A(it.reliableMarginLeft, function (t, e) {
        return e ? (parseFloat(E(t, "marginLeft")) || t.getBoundingClientRect().left - Zt(t, {
            marginLeft: 0
        }, function () {
            return t.getBoundingClientRect().left
        })) + "px" : void 0
    }), ot.cssHooks.marginRight = A(it.reliableMarginRight, function (t, e) {
        return e ? Zt(t, {
            display: "inline-block"
        }, E, [t, "marginRight"]) : void 0
    }), ot.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (t, e) {
        ot.cssHooks[t + e] = {
            expand: function (n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[t + Dt[i] + e] = o[i] || o[i - 2] || o[0];
                return r
            }
        }, Ut.test(t) || (ot.cssHooks[t + e].set = F)
    }), ot.fn.extend({
        css: function (t, e) {
            return Tt(this, function (t, e, n) {
                var i, r, o = {},
                    s = 0;
                if (ot.isArray(e)) {
                    for (i = Qt(t), r = e.length; r > s; s++) o[e[s]] = ot.css(t, e[s], !1, i);
                    return o
                }
                return void 0 !== n ? ot.style(t, e, n) : ot.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function () {
            return j(this, !0)
        },
        hide: function () {
            return j(this)
        },
        toggle: function (t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                jt(this) ? ot(this).show() : ot(this).hide()
            })
        }
    }), ot.Tween = O, O.prototype = {
        constructor: O,
        init: function (t, e, n, i, r, o) {
            this.elem = t, this.prop = n, this.easing = r || ot.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = o || (ot.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var t = O.propHooks[this.prop];
            return t && t.get ? t.get(this) : O.propHooks._default.get(this)
        },
        run: function (t) {
            var e, n = O.propHooks[this.prop];
            return this.options.duration ? this.pos = e = ot.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : O.propHooks._default.set(this), this
        }
    }, O.prototype.init.prototype = O.prototype, O.propHooks = {
        _default: {
            get: function (t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = ot.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
            },
            set: function (t) {
                ot.fx.step[t.prop] ? ot.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[ot.cssProps[t.prop]] && !ot.cssHooks[t.prop] ? t.elem[t.prop] = t.now : ot.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }, O.propHooks.scrollTop = O.propHooks.scrollLeft = {
        set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, ot.easing = {
        linear: function (t) {
            return t
        },
        swing: function (t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    }, ot.fx = O.prototype.init, ot.fx.step = {};
    var re, oe, se = /^(?:toggle|show|hide)$/,
        ae = /queueHooks$/;
    ot.Animation = ot.extend(I, {
            tweeners: {
                "*": [function (t, e) {
                    var n = this.createTween(t, e);
                    return c(n.elem, t, Pt.exec(e), n), n
                }]
            },
            tweener: function (t, e) {
                ot.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(bt);
                for (var n, i = 0, r = t.length; r > i; i++) n = t[i], I.tweeners[n] = I.tweeners[n] || [], I.tweeners[n].unshift(e)
            },
            prefilters: [R],
            prefilter: function (t, e) {
                e ? I.prefilters.unshift(t) : I.prefilters.push(t)
            }
        }), ot.speed = function (t, e, n) {
            var i = t && "object" == typeof t ? ot.extend({}, t) : {
                complete: n || !n && e || ot.isFunction(t) && t,
                duration: t,
                easing: n && e || e && !ot.isFunction(e) && e
            };
            return i.duration = ot.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ot.fx.speeds ? ot.fx.speeds[i.duration] : ot.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                ot.isFunction(i.old) && i.old.call(this), i.queue && ot.dequeue(this, i.queue)
            }, i
        }, ot.fn.extend({
            fadeTo: function (t, e, n, i) {
                return this.filter(jt).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, n, i)
            },
            animate: function (t, e, n, i) {
                var r = ot.isEmptyObject(t),
                    o = ot.speed(e, n, i),
                    s = function () {
                        var e = I(this, ot.extend({}, t), o);
                        (r || Ct.get(this, "finish")) && e.stop(!0)
                    };
                return s.finish = s, r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
            },
            stop: function (t, e, n) {
                var i = function (t) {
                    var e = t.stop;
                    delete t.stop, e(n)
                };
                return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function () {
                    var e = !0,
                        r = null != t && t + "queueHooks",
                        o = ot.timers,
                        s = Ct.get(this);
                    if (r) s[r] && s[r].stop && i(s[r]);
                    else
                        for (r in s) s[r] && s[r].stop && ae.test(r) && i(s[r]);
                    for (r = o.length; r--;) o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(n), e = !1, o.splice(r, 1));
                    (e || !n) && ot.dequeue(this, t)
                })
            },
            finish: function (t) {
                return t !== !1 && (t = t || "fx"), this.each(function () {
                    var e, n = Ct.get(this),
                        i = n[t + "queue"],
                        r = n[t + "queueHooks"],
                        o = ot.timers,
                        s = i ? i.length : 0;
                    for (n.finish = !0, ot.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                    for (e = 0; s > e; e++) i[e] && i[e].finish && i[e].finish.call(this);
                    delete n.finish
                })
            }
        }), ot.each(["toggle", "show", "hide"], function (t, e) {
            var n = ot.fn[e];
            ot.fn[e] = function (t, i, r) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(N(e, !0), t, i, r)
            }
        }), ot.each({
            slideDown: N("show"),
            slideUp: N("hide"),
            slideToggle: N("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (t, e) {
            ot.fn[t] = function (t, n, i) {
                return this.animate(e, t, n, i)
            }
        }), ot.timers = [], ot.fx.tick = function () {
            var t, e = 0,
                n = ot.timers;
            for (re = ot.now(); e < n.length; e++) t = n[e], t() || n[e] !== t || n.splice(e--, 1);
            n.length || ot.fx.stop(),
                re = void 0
        }, ot.fx.timer = function (t) {
            ot.timers.push(t), t() ? ot.fx.start() : ot.timers.pop()
        }, ot.fx.interval = 13, ot.fx.start = function () {
            oe || (oe = t.setInterval(ot.fx.tick, ot.fx.interval))
        }, ot.fx.stop = function () {
            t.clearInterval(oe), oe = null
        }, ot.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, ot.fn.delay = function (e, n) {
            return e = ot.fx ? ot.fx.speeds[e] || e : e, n = n || "fx", this.queue(n, function (n, i) {
                var r = t.setTimeout(n, e);
                i.stop = function () {
                    t.clearTimeout(r)
                }
            })
        },
        function () {
            var t = G.createElement("input"),
                e = G.createElement("select"),
                n = e.appendChild(G.createElement("option"));
            t.type = "checkbox", it.checkOn = "" !== t.value, it.optSelected = n.selected, e.disabled = !0, it.optDisabled = !n.disabled, t = G.createElement("input"), t.value = "t", t.type = "radio", it.radioValue = "t" === t.value
        }();
    var le, ce = ot.expr.attrHandle;
    ot.fn.extend({
        attr: function (t, e) {
            return Tt(this, ot.attr, t, e, arguments.length > 1)
        },
        removeAttr: function (t) {
            return this.each(function () {
                ot.removeAttr(this, t)
            })
        }
    }), ot.extend({
        attr: function (t, e, n) {
            var i, r, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof t.getAttribute ? ot.prop(t, e, n) : (1 === o && ot.isXMLDoc(t) || (e = e.toLowerCase(), r = ot.attrHooks[e] || (ot.expr.match.bool.test(e) ? le : void 0)), void 0 !== n ? null === n ? void ot.removeAttr(t, e) : r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : r && "get" in r && null !== (i = r.get(t, e)) ? i : (i = ot.find.attr(t, e), null == i ? void 0 : i))
        },
        attrHooks: {
            type: {
                set: function (t, e) {
                    if (!it.radioValue && "radio" === e && ot.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        },
        removeAttr: function (t, e) {
            var n, i, r = 0,
                o = e && e.match(bt);
            if (o && 1 === t.nodeType)
                for (; n = o[r++];) i = ot.propFix[n] || n, ot.expr.match.bool.test(n) && (t[i] = !1), t.removeAttribute(n)
        }
    }), le = {
        set: function (t, e, n) {
            return e === !1 ? ot.removeAttr(t, n) : t.setAttribute(n, n), n
        }
    }, ot.each(ot.expr.match.bool.source.match(/\w+/g), function (t, e) {
        var n = ce[e] || ot.find.attr;
        ce[e] = function (t, e, i) {
            var r, o;
            return i || (o = ce[e], ce[e] = r, r = null != n(t, e, i) ? e.toLowerCase() : null, ce[e] = o), r
        }
    });
    var ue = /^(?:input|select|textarea|button)$/i,
        he = /^(?:a|area)$/i;
    ot.fn.extend({
        prop: function (t, e) {
            return Tt(this, ot.prop, t, e, arguments.length > 1)
        },
        removeProp: function (t) {
            return this.each(function () {
                delete this[ot.propFix[t] || t]
            })
        }
    }), ot.extend({
        prop: function (t, e, n) {
            var i, r, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && ot.isXMLDoc(t) || (e = ot.propFix[e] || e, r = ot.propHooks[e]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function (t) {
                    var e = ot.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : ue.test(t.nodeName) || he.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), it.optSelected || (ot.propHooks.selected = {
        get: function (t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        }
    }), ot.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        ot.propFix[this.toLowerCase()] = this
    });
    var pe = /[\t\r\n\f]/g;
    ot.fn.extend({
        addClass: function (t) {
            var e, n, i, r, o, s, a, l = 0;
            if (ot.isFunction(t)) return this.each(function (e) {
                ot(this).addClass(t.call(this, e, B(this)))
            });
            if ("string" == typeof t && t)
                for (e = t.match(bt) || []; n = this[l++];)
                    if (r = B(n), i = 1 === n.nodeType && (" " + r + " ").replace(pe, " ")) {
                        for (s = 0; o = e[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        a = ot.trim(i), r !== a && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function (t) {
            var e, n, i, r, o, s, a, l = 0;
            if (ot.isFunction(t)) return this.each(function (e) {
                ot(this).removeClass(t.call(this, e, B(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t)
                for (e = t.match(bt) || []; n = this[l++];)
                    if (r = B(n), i = 1 === n.nodeType && (" " + r + " ").replace(pe, " ")) {
                        for (s = 0; o = e[s++];)
                            for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                        a = ot.trim(i), r !== a && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function (t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : ot.isFunction(t) ? this.each(function (n) {
                ot(this).toggleClass(t.call(this, n, B(this), e), e)
            }) : this.each(function () {
                var e, i, r, o;
                if ("string" === n)
                    for (i = 0, r = ot(this), o = t.match(bt) || []; e = o[i++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                else(void 0 === t || "boolean" === n) && (e = B(this), e && Ct.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || t === !1 ? "" : Ct.get(this, "__className__") || ""))
            })
        },
        hasClass: function (t) {
            var e, n, i = 0;
            for (e = " " + t + " "; n = this[i++];)
                if (1 === n.nodeType && (" " + B(n) + " ").replace(pe, " ").indexOf(e) > -1) return !0;
            return !1
        }
    });
    var fe = /\r/g;
    ot.fn.extend({
        val: function (t) {
            var e, n, i, r = this[0];
            return arguments.length ? (i = ot.isFunction(t), this.each(function (n) {
                var r;
                1 === this.nodeType && (r = i ? t.call(this, n, ot(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : ot.isArray(r) && (r = ot.map(r, function (t) {
                    return null == t ? "" : t + ""
                })), e = ot.valHooks[this.type] || ot.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
            })) : r ? (e = ot.valHooks[r.type] || ot.valHooks[r.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(fe, "") : null == n ? "" : n)) : void 0
        }
    }), ot.extend({
        valHooks: {
            option: {
                get: function (t) {
                    return ot.trim(t.value)
                }
            },
            select: {
                get: function (t) {
                    for (var e, n, i = t.options, r = t.selectedIndex, o = "select-one" === t.type || 0 > r, s = o ? null : [], a = o ? r + 1 : i.length, l = 0 > r ? a : o ? r : 0; a > l; l++)
                        if (n = i[l], (n.selected || l === r) && (it.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ot.nodeName(n.parentNode, "optgroup"))) {
                            if (e = ot(n).val(), o) return e;
                            s.push(e)
                        }
                    return s
                },
                set: function (t, e) {
                    for (var n, i, r = t.options, o = ot.makeArray(e), s = r.length; s--;) i = r[s], (i.selected = ot.inArray(ot.valHooks.option.get(i), o) > -1) && (n = !0);
                    return n || (t.selectedIndex = -1), o
                }
            }
        }
    }), ot.each(["radio", "checkbox"], function () {
        ot.valHooks[this] = {
            set: function (t, e) {
                return ot.isArray(e) ? t.checked = ot.inArray(ot(t).val(), e) > -1 : void 0
            }
        }, it.checkOn || (ot.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var de = /^(?:focusinfocus|focusoutblur)$/;
    ot.extend(ot.event, {
        trigger: function (e, n, i, r) {
            var o, s, a, l, c, u, h, p = [i || G],
                f = nt.call(e, "type") ? e.type : e,
                d = nt.call(e, "namespace") ? e.namespace.split(".") : [];
            if (s = a = i = i || G, 3 !== i.nodeType && 8 !== i.nodeType && !de.test(f + ot.event.triggered) && (f.indexOf(".") > -1 && (d = f.split("."), f = d.shift(), d.sort()), c = f.indexOf(":") < 0 && "on" + f, e = e[ot.expando] ? e : new ot.Event(f, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = d.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : ot.makeArray(n, [e]), h = ot.event.special[f] || {}, r || !h.trigger || h.trigger.apply(i, n) !== !1)) {
                if (!r && !h.noBubble && !ot.isWindow(i)) {
                    for (l = h.delegateType || f, de.test(l + f) || (s = s.parentNode); s; s = s.parentNode) p.push(s), a = s;
                    a === (i.ownerDocument || G) && p.push(a.defaultView || a.parentWindow || t)
                }
                for (o = 0;
                    (s = p[o++]) && !e.isPropagationStopped();) e.type = o > 1 ? l : h.bindType || f, u = (Ct.get(s, "events") || {})[e.type] && Ct.get(s, "handle"), u && u.apply(s, n), u = c && s[c], u && u.apply && kt(s) && (e.result = u.apply(s, n), e.result === !1 && e.preventDefault());
                return e.type = f, r || e.isDefaultPrevented() || h._default && h._default.apply(p.pop(), n) !== !1 || !kt(i) || c && ot.isFunction(i[f]) && !ot.isWindow(i) && (a = i[c], a && (i[c] = null), ot.event.triggered = f, i[f](), ot.event.triggered = void 0, a && (i[c] = a)), e.result
            }
        },
        simulate: function (t, e, n) {
            var i = ot.extend(new ot.Event, n, {
                type: t,
                isSimulated: !0
            });
            ot.event.trigger(i, null, e), i.isDefaultPrevented() && n.preventDefault()
        }
    }), ot.fn.extend({
        trigger: function (t, e) {
            return this.each(function () {
                ot.event.trigger(t, e, this)
            })
        },
        triggerHandler: function (t, e) {
            var n = this[0];
            return n ? ot.event.trigger(t, e, n, !0) : void 0
        }
    }), ot.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, e) {
        ot.fn[e] = function (t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }), ot.fn.extend({
        hover: function (t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }), it.focusin = "onfocusin" in t, it.focusin || ot.each({
        focus: "focusin",
        blur: "focusout"
    }, function (t, e) {
        var n = function (t) {
            ot.event.simulate(e, t.target, ot.event.fix(t))
        };
        ot.event.special[e] = {
            setup: function () {
                var i = this.ownerDocument || this,
                    r = Ct.access(i, e);
                r || i.addEventListener(t, n, !0), Ct.access(i, e, (r || 0) + 1)
            },
            teardown: function () {
                var i = this.ownerDocument || this,
                    r = Ct.access(i, e) - 1;
                r ? Ct.access(i, e, r) : (i.removeEventListener(t, n, !0), Ct.remove(i, e))
            }
        }
    });
    var ge = t.location,
        me = ot.now(),
        ve = /\?/;
    ot.parseJSON = function (t) {
        return JSON.parse(t + "")
    }, ot.parseXML = function (e) {
        var n;
        if (!e || "string" != typeof e) return null;
        try {
            n = (new t.DOMParser).parseFromString(e, "text/xml")
        } catch (i) {
            n = void 0
        }
        return (!n || n.getElementsByTagName("parsererror").length) && ot.error("Invalid XML: " + e), n
    };
    var ye = /#.*$/,
        _e = /([?&])_=[^&]*/,
        xe = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        be = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        we = /^(?:GET|HEAD)$/,
        Te = /^\/\//,
        ke = {},
        Ce = {},
        Ee = "*/".concat("*"),
        Ae = G.createElement("a");
    Ae.href = ge.href, ot.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ge.href,
            type: "GET",
            isLocal: be.test(ge.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ee,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ot.parseJSON,
                "text xml": ot.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (t, e) {
            return e ? z(z(t, ot.ajaxSettings), e) : z(ot.ajaxSettings, t)
        },
        ajaxPrefilter: q(ke),
        ajaxTransport: q(Ce),
        ajax: function (e, n) {
            function i(e, n, i, a) {
                var c, h, y, _, b, T = n;
                2 !== x && (x = 2, l && t.clearTimeout(l), r = void 0, s = a || "", w.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, i && (_ = X(p, w, i)), _ = W(p, _, w, c), c ? (p.ifModified && (b = w.getResponseHeader("Last-Modified"), b && (ot.lastModified[o] = b), b = w.getResponseHeader("etag"), b && (ot.etag[o] = b)), 204 === e || "HEAD" === p.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = _.state, h = _.data, y = _.error, c = !y)) : (y = T, (e || !T) && (T = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (n || T) + "", c ? g.resolveWith(f, [h, T, w]) : g.rejectWith(f, [w, T, y]), w.statusCode(v), v = void 0, u && d.trigger(c ? "ajaxSuccess" : "ajaxError", [w, p, c ? h : y]), m.fireWith(f, [w, T]), u && (d.trigger("ajaxComplete", [w, p]), --ot.active || ot.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (n = e, e = void 0), n = n || {};
            var r, o, s, a, l, c, u, h, p = ot.ajaxSetup({}, n),
                f = p.context || p,
                d = p.context && (f.nodeType || f.jquery) ? ot(f) : ot.event,
                g = ot.Deferred(),
                m = ot.Callbacks("once memory"),
                v = p.statusCode || {},
                y = {},
                _ = {},
                x = 0,
                b = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function (t) {
                        var e;
                        if (2 === x) {
                            if (!a)
                                for (a = {}; e = xe.exec(s);) a[e[1].toLowerCase()] = e[2];
                            e = a[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function () {
                        return 2 === x ? s : null
                    },
                    setRequestHeader: function (t, e) {
                        var n = t.toLowerCase();
                        return x || (t = _[n] = _[n] || t, y[t] = e), this
                    },
                    overrideMimeType: function (t) {
                        return x || (p.mimeType = t), this
                    },
                    statusCode: function (t) {
                        var e;
                        if (t)
                            if (2 > x)
                                for (e in t) v[e] = [v[e], t[e]];
                            else w.always(t[w.status]);
                        return this
                    },
                    abort: function (t) {
                        var e = t || b;
                        return r && r.abort(e), i(0, e), this
                    }
                };
            if (g.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, p.url = ((e || p.url || ge.href) + "").replace(ye, "").replace(Te, ge.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = ot.trim(p.dataType || "*").toLowerCase().match(bt) || [""], null == p.crossDomain) {
                c = G.createElement("a");
                try {
                    c.href = p.url, c.href = c.href, p.crossDomain = Ae.protocol + "//" + Ae.host != c.protocol + "//" + c.host
                } catch (T) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = ot.param(p.data, p.traditional)), H(ke, p, n, w), 2 === x) return w;
            u = ot.event && p.global, u && 0 === ot.active++ && ot.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !we.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (ve.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = _e.test(o) ? o.replace(_e, "$1_=" + me++) : o + (ve.test(o) ? "&" : "?") + "_=" + me++)), p.ifModified && (ot.lastModified[o] && w.setRequestHeader("If-Modified-Since", ot.lastModified[o]), ot.etag[o] && w.setRequestHeader("If-None-Match", ot.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && w.setRequestHeader("Content-Type", p.contentType), w.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Ee + "; q=0.01" : "") : p.accepts["*"]);
            for (h in p.headers) w.setRequestHeader(h, p.headers[h]);
            if (p.beforeSend && (p.beforeSend.call(f, w, p) === !1 || 2 === x)) return w.abort();
            b = "abort";
            for (h in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[h](p[h]);
            if (r = H(Ce, p, n, w)) {
                if (w.readyState = 1, u && d.trigger("ajaxSend", [w, p]), 2 === x) return w;
                p.async && p.timeout > 0 && (l = t.setTimeout(function () {
                    w.abort("timeout")
                }, p.timeout));
                try {
                    x = 1, r.send(y, i)
                } catch (T) {
                    if (!(2 > x)) throw T;
                    i(-1, T)
                }
            } else i(-1, "No Transport");
            return w
        },
        getJSON: function (t, e, n) {
            return ot.get(t, e, n, "json")
        },
        getScript: function (t, e) {
            return ot.get(t, void 0, e, "script")
        }
    }), ot.each(["get", "post"], function (t, e) {
        ot[e] = function (t, n, i, r) {
            return ot.isFunction(n) && (r = r || i, i = n, n = void 0), ot.ajax(ot.extend({
                url: t,
                type: e,
                dataType: r,
                data: n,
                success: i
            }, ot.isPlainObject(t) && t))
        }
    }), ot._evalUrl = function (t) {
        return ot.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, ot.fn.extend({
        wrapAll: function (t) {
            var e;
            return ot.isFunction(t) ? this.each(function (e) {
                ot(this).wrapAll(t.call(this, e))
            }) : (this[0] && (e = ot(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this)
        },
        wrapInner: function (t) {
            return ot.isFunction(t) ? this.each(function (e) {
                ot(this).wrapInner(t.call(this, e))
            }) : this.each(function () {
                var e = ot(this),
                    n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function (t) {
            var e = ot.isFunction(t);
            return this.each(function (n) {
                ot(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                ot.nodeName(this, "body") || ot(this).replaceWith(this.childNodes)
            }).end()
        }
    }), ot.expr.filters.hidden = function (t) {
        return !ot.expr.filters.visible(t)
    }, ot.expr.filters.visible = function (t) {
        return t.offsetWidth > 0 || t.offsetHeight > 0 || t.getClientRects().length > 0
    };
    var Se = /%20/g,
        Fe = /\[\]$/,
        Pe = /\r?\n/g,
        De = /^(?:submit|button|image|reset|file)$/i,
        je = /^(?:input|select|textarea|keygen)/i;
    ot.param = function (t, e) {
        var n, i = [],
            r = function (t, e) {
                e = ot.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (void 0 === e && (e = ot.ajaxSettings && ot.ajaxSettings.traditional), ot.isArray(t) || t.jquery && !ot.isPlainObject(t)) ot.each(t, function () {
            r(this.name, this.value)
        });
        else
            for (n in t) Y(n, t[n], e, r);
        return i.join("&").replace(Se, "+")
    }, ot.fn.extend({
        serialize: function () {
            return ot.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var t = ot.prop(this, "elements");
                return t ? ot.makeArray(t) : this
            }).filter(function () {
                var t = this.type;
                return this.name && !ot(this).is(":disabled") && je.test(this.nodeName) && !De.test(t) && (this.checked || !Ot.test(t))
            }).map(function (t, e) {
                var n = ot(this).val();
                return null == n ? null : ot.isArray(n) ? ot.map(n, function (t) {
                    return {
                        name: e.name,
                        value: t.replace(Pe, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(Pe, "\r\n")
                }
            }).get()
        }
    }), ot.ajaxSettings.xhr = function () {
        try {
            return new t.XMLHttpRequest
        } catch (e) {}
    };
    var Oe = {
            0: 200,
            1223: 204
        },
        $e = ot.ajaxSettings.xhr();
    it.cors = !!$e && "withCredentials" in $e, it.ajax = $e = !!$e, ot.ajaxTransport(function (e) {
        var n, i;
        return it.cors || $e && !e.crossDomain ? {
            send: function (r, o) {
                var s, a = e.xhr();
                if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (s in e.xhrFields) a[s] = e.xhrFields[s];
                e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                for (s in r) a.setRequestHeader(s, r[s]);
                n = function (t) {
                    return function () {
                        n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Oe[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()))
                    }
                }, a.onload = n(), i = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () {
                    4 === a.readyState && t.setTimeout(function () {
                        n && i()
                    })
                }, n = n("abort");
                try {
                    a.send(e.hasContent && e.data || null)
                } catch (l) {
                    if (n) throw l
                }
            },
            abort: function () {
                n && n()
            }
        } : void 0
    }), ot.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (t) {
                return ot.globalEval(t), t
            }
        }
    }), ot.ajaxPrefilter("script", function (t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), ot.ajaxTransport("script", function (t) {
        if (t.crossDomain) {
            var e, n;
            return {
                send: function (i, r) {
                    e = ot("<script>").prop({
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", n = function (t) {
                        e.remove(), n = null, t && r("error" === t.type ? 404 : 200, t.type)
                    }), G.head.appendChild(e[0])
                },
                abort: function () {
                    n && n()
                }
            }
        }
    });
    var Ne = [],
        Me = /(=)\?(?=&|$)|\?\?/;
    ot.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var t = Ne.pop() || ot.expando + "_" + me++;
            return this[t] = !0, t
        }
    }), ot.ajaxPrefilter("json jsonp", function (e, n, i) {
        var r, o, s, a = e.jsonp !== !1 && (Me.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Me.test(e.data) && "data");
        return a || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = ot.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Me, "$1" + r) : e.jsonp !== !1 && (e.url += (ve.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
            return s || ot.error(r + " was not called"), s[0]
        }, e.dataTypes[0] = "json", o = t[r], t[r] = function () {
            s = arguments
        }, i.always(function () {
            void 0 === o ? ot(t).removeProp(r) : t[r] = o, e[r] && (e.jsonpCallback = n.jsonpCallback, Ne.push(r)), s && ot.isFunction(o) && o(s[0]), s = o = void 0
        }), "script") : void 0
    }), it.createHTMLDocument = function () {
        var t = G.implementation.createHTMLDocument("").body;
        return t.innerHTML = "<form></form><form></form>", 2 === t.childNodes.length
    }(), ot.parseHTML = function (t, e, n) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (n = e, e = !1), e = e || (it.createHTMLDocument ? G.implementation.createHTMLDocument("") : G);
        var i = dt.exec(t),
            r = !n && [];
        return i ? [e.createElement(i[1])] : (i = p([t], e, r), r && r.length && ot(r).remove(), ot.merge([], i.childNodes))
    };
    var Re = ot.fn.load;
    ot.fn.load = function (t, e, n) {
        if ("string" != typeof t && Re) return Re.apply(this, arguments);
        var i, r, o, s = this,
            a = t.indexOf(" ");
        return a > -1 && (i = ot.trim(t.slice(a)), t = t.slice(0, a)), ot.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), s.length > 0 && ot.ajax({
            url: t,
            type: r || "GET",
            dataType: "html",
            data: e
        }).done(function (t) {
            o = arguments, s.html(i ? ot("<div>").append(ot.parseHTML(t)).find(i) : t)
        }).always(n && function (t, e) {
            s.each(function () {
                n.apply(s, o || [t.responseText, e, t])
            })
        }), this
    }, ot.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
        ot.fn[e] = function (t) {
            return this.on(e, t)
        }
    }), ot.expr.filters.animated = function (t) {
        return ot.grep(ot.timers, function (e) {
            return t === e.elem
        }).length
    }, ot.offset = {
        setOffset: function (t, e, n) {
            var i, r, o, s, a, l, c, u = ot.css(t, "position"),
                h = ot(t),
                p = {};
            "static" === u && (t.style.position = "relative"), a = h.offset(), o = ot.css(t, "top"), l = ot.css(t, "left"), c = ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1, c ? (i = h.position(), s = i.top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), ot.isFunction(e) && (e = e.call(t, n, ot.extend({}, a))), null != e.top && (p.top = e.top - a.top + s), null != e.left && (p.left = e.left - a.left + r), "using" in e ? e.using.call(t, p) : h.css(p)
        }
    }, ot.fn.extend({
        offset: function (t) {
            if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                ot.offset.setOffset(this, t, e)
            });
            var e, n, i = this[0],
                r = {
                    top: 0,
                    left: 0
                },
                o = i && i.ownerDocument;
            return o ? (e = o.documentElement, ot.contains(e, i) ? (r = i.getBoundingClientRect(), n = V(o), {
                top: r.top + n.pageYOffset - e.clientTop,
                left: r.left + n.pageXOffset - e.clientLeft
            }) : r) : void 0
        },
        position: function () {
            if (this[0]) {
                var t, e, n = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === ot.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), ot.nodeName(t[0], "html") || (i = t.offset()), i.top += ot.css(t[0], "borderTopWidth", !0), i.left += ot.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - i.top - ot.css(n, "marginTop", !0),
                    left: e.left - i.left - ot.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var t = this.offsetParent; t && "static" === ot.css(t, "position");) t = t.offsetParent;
                return t || Kt
            })
        }
    }), ot.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (t, e) {
        var n = "pageYOffset" === e;
        ot.fn[t] = function (i) {
            return Tt(this, function (t, i, r) {
                var o = V(t);
                return void 0 === r ? o ? o[e] : t[i] : void(o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : t[i] = r)
            }, t, i, arguments.length)
        }
    }), ot.each(["top", "left"], function (t, e) {
        ot.cssHooks[e] = A(it.pixelPosition, function (t, n) {
            return n ? (n = E(t, e), Gt.test(n) ? ot(t).position()[e] + "px" : n) : void 0
        })
    }), ot.each({
        Height: "height",
        Width: "width"
    }, function (t, e) {
        ot.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function (n, i) {
            ot.fn[i] = function (i, r) {
                var o = arguments.length && (n || "boolean" != typeof i),
                    s = n || (i === !0 || r === !0 ? "margin" : "border");
                return Tt(this, function (e, n, i) {
                    var r;
                    return ot.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === i ? ot.css(e, n, s) : ot.style(e, n, i, s)
                }, e, o ? i : void 0, o, null)
            }
        })
    }), ot.fn.extend({
        bind: function (t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function (t, e) {
            return this.off(t, null, e)
        },
        delegate: function (t, e, n, i) {
            return this.on(e, t, n, i)
        },
        undelegate: function (t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        },
        size: function () {
            return this.length
        }
    }), ot.fn.andSelf = ot.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return ot
    });
    var Le = t.jQuery,
        Ie = t.$;
    return ot.noConflict = function (e) {
        return t.$ === ot && (t.$ = Ie), e && t.jQuery === ot && (t.jQuery = Le), ot
    }, e || (t.jQuery = t.$ = ot), ot
});
var Burno = B = function (t, e, n) {
    "use strict";
    "document" in self && ("classList" in e.createElement("_") ? ! function () {
            var t = e.createElement("_");
            if (t.classList.add("c1", "c2"), !t.classList.contains("c2")) {
                var n = function (t) {
                    var e = DOMTokenList.prototype[t];
                    DOMTokenList.prototype[t] = function (t) {
                        var n, i = arguments.length;
                        for (n = 0; n < i; n++) t = arguments[n], e.call(this, t)
                    }
                };
                n("add"), n("remove")
            }
            if (t.classList.toggle("c3", !1), t.classList.contains("c3")) {
                var i = DOMTokenList.prototype.toggle;
                DOMTokenList.prototype.toggle = function (t, e) {
                    return 1 in arguments && !this.contains(t) == !e ? e : i.call(this, t)
                }
            }
            t = null
        }() : ! function (t) {
            if ("Element" in t) {
                var e = "classList",
                    n = "prototype",
                    i = t.Element[n],
                    r = Object,
                    o = String[n].trim || function () {
                        return this.replace(/^\s+|\s+$/g, "")
                    },
                    s = Array[n].indexOf || function (t) {
                        for (var e = 0, n = this.length; e < n; e++)
                            if (e in this && this[e] === t) return e;
                        return -1
                    },
                    a = function (t, e) {
                        this.name = t, this.code = DOMException[t], this.message = e
                    },
                    l = function (t, e) {
                        if ("" === e) throw new a("SYNTAX_ERR", "An invalid or illegal string was specified");
                        if (/\s/.test(e)) throw new a("INVALID_CHARACTER_ERR", "String contains an invalid character");
                        return s.call(t, e)
                    },
                    c = function (t) {
                        for (var e = o.call(t.getAttribute("class") || ""), n = e ? e.split(/\s+/) : [], i = 0, r = n.length; i < r; i++) this.push(n[i]);
                        this._updateClassName = function () {
                            t.setAttribute("class", this.toString())
                        }
                    },
                    u = c[n] = [],
                    h = function () {
                        return new c(this)
                    };
                if (a[n] = Error[n], u.item = function (t) {
                        return this[t] || null
                    }, u.contains = function (t) {
                        return t += "", l(this, t) !== -1
                    }, u.add = function () {
                        var t, e = arguments,
                            n = 0,
                            i = e.length,
                            r = !1;
                        do t = e[n] + "", l(this, t) === -1 && (this.push(t), r = !0); while (++n < i);
                        r && this._updateClassName()
                    }, u.remove = function () {
                        var t, e, n = arguments,
                            i = 0,
                            r = n.length,
                            o = !1;
                        do
                            for (t = n[i] + "", e = l(this, t); e !== -1;) this.splice(e, 1), o = !0, e = l(this, t); while (++i < r);
                        o && this._updateClassName()
                    }, u.toggle = function (t, e) {
                        t += "";
                        var n = this.contains(t),
                            i = n ? e !== !0 && "remove" : e !== !1 && "add";
                        return i && this[i](t), e === !0 || e === !1 ? e : !n
                    }, u.toString = function () {
                        return this.join(" ")
                    }, r.defineProperty) {
                    var p = {
                        get: h,
                        enumerable: !0,
                        configurable: !0
                    };
                    try {
                        r.defineProperty(i, e, p)
                    } catch (f) {
                        f.number === -2146823252 && (p.enumerable = !1, r.defineProperty(i, e, p))
                    }
                } else r[n].__defineGetter__ && i.__defineGetter__(e, h)
            }
        }(self)), Array.prototype.forEach || (Array.prototype.forEach = function (t, e) {
            var n, i;
            if (null == this) throw new TypeError(" this vaut null ou n est pas dÃ©fini");
            var r = Object(this),
                o = r.length >>> 0;
            if ("function" != typeof t) throw new TypeError(t + " n est pas une fonction");
            for (arguments.length > 1 && (n = e), i = 0; i < o;) {
                var s;
                i in r && (s = r[i], t.call(n, s, i, r)), i++
            }
        }), t.getComputedStyle || (t.getComputedStyle = function (t, e) {
            return this.el = t, this.getPropertyValue = function (e) {
                var n = /(\-([a-z]){1})/g;
                return "float" == e && (e = "styleFloat"), n.test(e) && (e = e.replace(n, function () {
                    return arguments[2].toUpperCase()
                })), t.currentStyle[e] ? t.currentStyle[e] : null
            }, this
        }), t.HTMLElement || (t.HTMLElement = t.Element), Array.prototype.indexOf || (Array.prototype.indexOf = function (t, e) {
            var n;
            if (null == this) throw new TypeError('"this" is null or not defined');
            var i = Object(this),
                r = i.length >>> 0;
            if (0 === r) return -1;
            var o = +e || 0;
            if (Math.abs(o) === 1 / 0 && (o = 0), o >= r) return -1;
            for (n = Math.max(o >= 0 ? o : r - Math.abs(o), 0); n < r;) {
                if (n in i && i[n] === t) return n;
                n++
            }
            return -1
        }), "function" != typeof Object.create && (Object.create = function () {
            var t = function () {};
            return function (e) {
                if (arguments.length > 1) throw Error("Cette prothÃ¨se ne supporte pas le second argument");
                if ("object" != typeof e) throw TypeError("L'argument doit Ãªtre un objet");
                t.prototype = e;
                var n = new t;
                return t.prototype = null, n
            }
        }()), Object.keys || (Object.keys = function () {
            var t = Object.prototype.hasOwnProperty,
                e = !{
                    toString: null
                }.propertyIsEnumerable("toString"),
                n = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                i = n.length;
            return function (r) {
                if ("object" != typeof r && ("function" != typeof r || null === r)) throw new TypeError("Object.keys called on non-object");
                var o, s, a = [];
                for (o in r) t.call(r, o) && a.push(o);
                if (e)
                    for (s = 0; s < i; s++) t.call(r, n[s]) && a.push(n[s]);
                return a
            }
        }()),
        function () {
            for (var e = 0, n = ["ms", "moz", "webkit", "o"], i = 0; i < n.length && !t.requestAnimationFrame; ++i) t.requestAnimationFrame = t[n[i] + "RequestAnimationFrame"], t.cancelAnimationFrame = t[n[i] + "CancelAnimationFrame"] || t[n[i] + "CancelRequestAnimationFrame"];
            t.requestAnimationFrame || (t.requestAnimationFrame = function (n, i) {
                var r = (new Date).getTime(),
                    o = Math.max(0, 16 - (r - e)),
                    s = t.setTimeout(function () {
                        n(r + o)
                    }, o);
                return e = r + o, s
            }), t.cancelAnimationFrame || (t.cancelAnimationFrame = function (t) {
                clearTimeout(t)
            })
        }();
    var i = {
        Core: {},
        Tools: {},
        Components: {}
    };
    i.copy = function (t) {
        var e = null;
        if ("undefined" == typeof t || t && t.constructor === Object) {
            e = {};
            for (var n in t) e[n] = i.copy(t[n]);
            return e
        }
        if (t instanceof Array) {
            e = [];
            for (var r = 0, o = t.length; r < o; r++) e[r] = i.copy(t[r]);
            return e
        }
        return t
    }, i.merge = function (t, e) {
        for (var n in e) {
            var r = e[n];
            r.constructor === Object ? (t[n] || (t[n] = {}), t[n] = i.merge(t[n], r)) : t[n] = r
        }
        return t
    };
    var r = !1,
        o = /xyz/.test(function () {
            xyz
        }) ? /\b_super\b/ : /.*/;
    i.Class = function () {};
    var s = function (t) {
        var e = this.prototype,
            n = {};
        for (var i in t) "function" == typeof t[i] && "function" == typeof e[i] && o.test(t[i]) ? (n[i] = e[i], e[i] = function (t, e) {
            return function () {
                var i = this._super;
                this._super = n[t];
                var r = e.apply(this, arguments);
                return this._super = i, r
            }
        }(i, t[i])) : e[i] = t[i]
    };
    return i.Class.extend = function (t) {
        function e() {
            if (!r) {
                if (this.static_instantiate) {
                    var t = this.static_instantiate.apply(this, arguments);
                    if (t) return t
                }
                for (var e in this) "object" == typeof this[e] && (this[e] = i.copy(this[e]));
                this.construct ? this.construct.apply(this, arguments) : this.init && this.init.apply(this, arguments)
            }
            return this
        }
        var n = this.prototype;
        r = !0;
        var a = new this;
        r = !1;
        for (var l in t)
            if ("function" == typeof t[l] && "function" == typeof n[l] && o.test(t[l])) a[l] = function (t, e) {
                return function () {
                    var i = this._super;
                    this._super = n[t];
                    var r = e.apply(this, arguments);
                    return this._super = i, r
                }
            }(l, t[l]);
            else if ("options" === l) {
            "undefined" == typeof a[l] && (a[l] = {});
            var c = i.copy(a[l]),
                u = i.copy(t[l]);
            a[l] = i.merge(c, u)
        } else a[l] = t[l];
        return e.prototype = a, e.prototype.constructor = e, e.extend = i.Class.extend, e.inject = s, e
    }, i.Core.Abstract = i.Class.extend({
        options: {},
        "static": !1,
        construct: function (t) {
            if ("undefined" == typeof t && (t = {}), i.merge(this.options, t), this.$ = {}, "object" != typeof i.Statics && (i.Statics = {}), t.register && "string" == typeof t.register) {
                var e = new i.Tools.Registry;
                e.set(t.register, this)
            }
            this["static"] && "string" == typeof this["static"] && (i.Statics[this["static"]] = this)
        },
        static_instantiate: function () {
            return i.Statics && i.Statics[this["static"]] ? i.Statics[this["static"]] : null
        },
        destroy: function () {}
    }), i.Core.EventEmitter = i.Core.Event_Emitter = i.Core.Abstract.extend({
        "static": !1,
        options: {},
        construct: function (t) {
            this._super(t), this.callbacks = {}, this.callbacks.base = {}
        },
        on: function (t, e) {
            var n = this;
            return "undefined" == typeof t || "" === t ? (console.warn("wrong names"), !1) : "undefined" == typeof e ? (console.warn("wrong callback"), !1) : (t = this.resolve_names(t), t.forEach(function (t) {
                t = n.resolve_name(t), n.callbacks[t.namespace] instanceof Object || (n.callbacks[t.namespace] = {}), n.callbacks[t.namespace][t.value] instanceof Array || (n.callbacks[t.namespace][t.value] = []), n.callbacks[t.namespace][t.value].push(e)
            }), this)
        },
        off: function (t) {
            var e = this;
            return "undefined" == typeof t || "" === t ? (console.warn("wrong name"), !1) : (t = this.resolve_names(t), t.forEach(function (t) {
                if (t = e.resolve_name(t), "base" !== t.namespace && "" === t.value) delete e.callbacks[t.namespace];
                else if ("base" === t.namespace)
                    for (var n in e.callbacks) e.callbacks[n] instanceof Object && e.callbacks[n][t.value] instanceof Array && (delete e.callbacks[n][t.value], 0 === Object.keys(e.callbacks[n]).length && delete e.callbacks[n]);
                else e.callbacks[t.namespace] instanceof Object && e.callbacks[t.namespace][t.value] instanceof Array && (delete e.callbacks[t.namespace][t.value], 0 === Object.keys(e.callbacks[t.namespace]).length && delete e.callbacks[t.namespace])
            }), this)
        },
        trigger: function (t, e) {
            if ("undefined" == typeof t || "" === t) return console.warn("wrong name"), !1;
            var n, i, r = this;
            if (e instanceof Array || (e = []), t = this.resolve_names(t), t = r.resolve_name(t[0]), "base" === t.namespace)
                for (var o in r.callbacks) r.callbacks[o] instanceof Object && r.callbacks[o][t.value] instanceof Array && r.callbacks[o][t.value].forEach(function (t) {
                    i = t.apply(r, e), "undefined" == typeof n && (n = i)
                });
            else if (this.callbacks[t.namespace] instanceof Object) {
                if ("" === t.value) return console.warn("wrong name"), this;
                r.callbacks[t.namespace][t.value].forEach(function (t) {
                    i = t.apply(r, e), "undefined" == typeof n && (n = i)
                })
            }
            return n
        },
        trigga: function (t, e) {
            return this.trigger(t, e)
        },
        dispatch: function (t, e) {
            return this.trigger(t, e)
        },
        fire: function (t, e) {
            return this.trigger(t, e)
        },
        resolve_names: function (t) {
            return t = t.replace(/[^a-zA-Z0-9 ,\/.]/g, ""), t = t.replace(/[,\/]+/g, " "), t = t.split(" ")
        },
        resolve_name: function (t) {
            var e = {},
                n = t.split(".");
            return e.original = t, e.value = n[0], e.namespace = "base", n.length > 1 && "" !== n[1] && (e.namespace = n[1]), e
        }
    }), i.Tools.Breakpoints = i.Core.Event_Emitter.extend({
        "static": "breakpoints",
        options: {
            breakpoints: []
        },
        construct: function (t) {
            this._super(t), this.viewport = new i.Tools.Viewport, this.all = {}, this.actives = {}, this.first_test = !0, this.add(this.options.breakpoints), this.init_events()
        },
        init_events: function () {
            var t = this;
            return this.viewport.on("resize", function () {
                t.test()
            }), this
        },
        add: function (t, e) {
            e = "undefined" == typeof e, t instanceof Array || (t = [t]);
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                this.all[i.name] = i
            }
            return e || this.test(), this
        },
        remove: function (t, e) {
            t instanceof Array || (t = [t]), "object" == typeof breakpoint && "string" == typeof breakpoint.name && (breakpoint = breakpoint.name), e = "undefined" != typeof e;
            for (var n = 0; n < t.length; n++) delete this.all[t[n]];
            return e || this.test(), this
        },
        test: function () {
            for (var t = {}, e = Object.keys(this.all), n = 0, i = e.length; n < i; n++) {
                var r = this.all[e[n]],
                    o = !r.width,
                    s = !r.height;
                o || ("min" === r.width.extreme ? (r.width.included && this.viewport.width >= r.width.value || !r.width.included && this.viewport.width > r.width.value) && (o = !0) : (r.width.included && this.viewport.width <= r.width.value || !r.width.included && this.viewport.width < r.width.value) && (o = !0)),
                    s || ("min" === r.height.extreme ? (r.height.included && this.viewport.height >= r.height.value || !r.height.included && this.viewport.height > r.height.value) && (s = !0) : (r.height.included && this.viewport.height <= r.height.value || !r.height.included && this.viewport.height < r.height.value) && (s = !0)), o && s && (t[r.name] = r)
            }
            var a = Object.keys(t),
                l = Object.keys(this.actives),
                c = this.get_arrays_differences(a, l);
            return (c.length || this.first_test) && (this.actives = t, this.first_test = !1, this.trigger("update change", [this.actives])), this
        },
        is_active: function (t) {
            return "object" == typeof t && "string" == typeof t.name && (t = t.name), "undefined" != typeof this.actives[t]
        },
        get_arrays_differences: function (t, e) {
            for (var n = [], i = [], r = 0; r < t.length; r++) n[t[r]] = !0;
            for (r = 0; r < e.length; r++) n[e[r]] ? delete n[e[r]] : n[e[r]] = !0;
            for (var o in n) i.push(o);
            return i
        }
    }), i.Tools.Colors = i.Core.Abstract.extend({
        "static": "colors",
        options: {
            gradients: {
                parse: !0,
                target: e.body,
                classes: {
                    to_convert: "b-gradient-text",
                    converted: "b-gradient-text-converted"
                }
            }
        },
        names: {
            aliceblue: "F0F8FF",
            antiquewhite: "FAEBD7",
            aqua: "00FFFF",
            aquamarine: "7FFFD4",
            azure: "F0FFFF",
            beige: "F5F5DC",
            bisque: "FFE4C4",
            black: "000000",
            blanchedalmond: "FFEBCD",
            blue: "0000FF",
            blueviolet: "8A2BE2",
            brown: "A52A2A",
            burlywood: "DEB887",
            cadetblue: "5F9EA0",
            chartreuse: "7FFF00",
            chocolate: "D2691E",
            coral: "FF7F50",
            cornflowerblue: "6495ED",
            cornsilk: "FFF8DC",
            crimson: "DC143C",
            cyan: "00FFFF",
            darkblue: "00008B",
            darkcyan: "008B8B",
            darkgoldenrod: "B8860B",
            darkgray: "A9A9A9",
            darkgreen: "006400",
            darkkhaki: "BDB76B",
            darkmagenta: "8B008B",
            darkolivegreen: "556B2F",
            darkorange: "FF8C00",
            darkorchid: "9932CC",
            darkred: "8B0000",
            darksalmon: "E9967A",
            darkseagreen: "8FBC8F",
            darkslateblue: "483D8B",
            darkslategray: "2F4F4F",
            darkturquoise: "00CED1",
            darkviolet: "9400D3",
            deeppink: "FF1493",
            deepskyblue: "00BFFF",
            dimgray: "696969",
            dodgerblue: "1E90FF",
            firebrick: "B22222",
            floralwhite: "FFFAF0",
            forestgreen: "228B22",
            fuchsia: "FF00FF",
            gainsboro: "DCDCDC",
            ghostwhite: "F8F8FF",
            gold: "FFD700",
            goldenrod: "DAA520",
            gray: "808080",
            green: "008000",
            greenyellow: "ADFF2F",
            honeydew: "F0FFF0",
            hotpink: "FF69B4",
            indianred: "CD5C5C",
            indigo: "4B0082",
            ivory: "FFFFF0",
            khaki: "F0E68C",
            lavender: "E6E6FA",
            lavenderblush: "FFF0F5",
            lawngreen: "7CFC00",
            lemonchiffon: "FFFACD",
            lightblue: "ADD8E6",
            lightcoral: "F08080",
            lightcyan: "E0FFFF",
            lightgoldenrodyellow: "FAFAD2",
            lightgray: "D3D3D3",
            lightgreen: "90EE90",
            lightpink: "FFB6C1",
            lightsalmon: "FFA07A",
            lightseagreen: "20B2AA",
            lightskyblue: "87CEFA",
            lightslategray: "778899",
            lightsteelblue: "B0C4DE",
            lightyellow: "FFFFE0",
            lime: "00FF00",
            limegreen: "32CD32",
            linen: "FAF0E6",
            magenta: "FF00FF",
            maroon: "800000",
            mediumaquamarine: "66CDAA",
            mediumblue: "0000CD",
            mediumorchid: "BA55D3",
            mediumpurple: "9370DB",
            mediumseagreen: "3CB371",
            mediumslateblue: "7B68EE",
            mediumspringgreen: "00FA9A",
            mediumturquoise: "48D1CC",
            mediumvioletred: "C71585",
            midnightblue: "191970",
            mintcream: "F5FFFA",
            mistyrose: "FFE4E1",
            moccasin: "FFE4B5",
            navajowhite: "FFDEAD",
            navy: "000080",
            oldlace: "FDF5E6",
            olive: "808000",
            olivedrab: "6B8E23",
            orange: "FFA500",
            orangered: "FF4500",
            orchid: "DA70D6",
            palegoldenrod: "EEE8AA",
            palegreen: "#98FB98",
            paleturquoise: "#AFEEEE",
            palevioletred: "#DB7093",
            papayawhip: "#FFEFD5",
            peachpuff: "#FFDAB9",
            peru: "#CD853F",
            pink: "#FFC0CB",
            plum: "#DDA0DD",
            powderblue: "#B0E0E6",
            purple: "#800080",
            rebeccapurple: "#663399",
            red: "#FF0000",
            rosybrown: "#BC8F8F",
            royalblue: "#4169E1",
            saddlebrown: "#8B4513",
            salmon: "#FA8072",
            sandybrown: "#F4A460",
            seagreen: "#2E8B57",
            seashell: "#FFF5EE",
            sienna: "#A0522D",
            silver: "#C0C0C0",
            skyblue: "#87CEEB",
            slateblue: "#6A5ACD",
            slategray: "#708090",
            snow: "#FFFAFA",
            springgreen: "#00FF7F",
            steelblue: "#4682B4",
            tan: "#D2B48C",
            teal: "#008080",
            thistle: "#D8BFD8",
            tomato: "#FF6347",
            turquoise: "#40E0D0",
            violet: "#EE82EE",
            wheat: "#F5DEB3",
            white: "#FFFFFF",
            whitesmoke: "#F5F5F5",
            yellow: "#FFFF00",
            yellowgreen: "#9ACD32"
        },
        construct: function (t) {
            this._super(t), this.options.gradients.parse && this.parse()
        },
        any_to_rgb: function (t) {
            if (t = "" + t, t = t.toLowerCase(), t = t.replace(/[\s-]/g, ""), "undefined" != typeof this.names[t]) return this.hexa_to_rgb(this.names[t]);
            if (0 === t.indexOf("0x")) return this.hexa_to_rgb(t.replace("0x", ""));
            if (0 === t.indexOf("#") && (t = t.replace("#", "")), 6 === t.length) return this.hexa_to_rgb(t);
            if (3 === t.length) {
                for (var e = "", n = 0; n < t.length; n++) e += t[n] + t[n];
                return this.hexa_to_rgb(e)
            }
            try {
                if (t = JSON.parse(t), "undefined" != typeof t.r && "undefined" != typeof t.g && "undefined" != typeof t.b) return t;
                if ("undefined" != typeof t.h && "undefined" != typeof t.s && "undefined" != typeof t.l) return this.hsl_to_rgb(t)
            } catch (i) {}
            return console.warn("Wrong color value : " + t), {
                r: 0,
                g: 0,
                b: 0
            }
        },
        parse: function (t, e) {
            t = t || this.options.gradients.target, e = e || this.options.gradients.classes.to_convert;
            for (var n = this, i = t.querySelectorAll("." + e), r = 0, o = i.length; r < o; r++) {
                var s = i[r];
                if (!s.classList.contains(this.options.gradients.classes.converted)) {
                    var a = "",
                        l = s.textContent,
                        c = s.getAttribute("data-gradient-start"),
                        u = s.getAttribute("data-gradient-end"),
                        h = null;
                    c || (c = "#47add9"), u || (u = "#3554e9"), h = n.get_steps_colors(c, u, l.length, "rgb");
                    for (var p = 0, f = l.length; p < f; p++) a += '<span style="color:rgb(' + h[p].r + "," + h[p].g + "," + h[p].b + ')">' + l[p] + "</span>";
                    s.innerHTML = a
                }
            }
            return this
        },
        get_steps_colors: function (t, e, n, i) {
            ("number" != typeof n || n < 2) && (n = 2), t = this.rgb_to_hsl(this.any_to_rgb(t)), e = this.rgb_to_hsl(this.any_to_rgb(e));
            for (var r = [], o = 0, s = {}, a = 0; a < n + 1; a++) o = a / n, s.h = t.h + (e.h - t.h) * o, s.s = t.s + (e.s - t.s) * o, s.l = t.l + (e.l - t.l) * o, "rgb" === i && (s = this.hsl_to_rgb(s)), r.push(s);
            return r
        },
        hexa_to_rgb: function (t) {
            var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
            return {
                r: parseInt(e[1], 16),
                g: parseInt(e[2], 16),
                b: parseInt(e[3], 16)
            }
        },
        rgb_to_hsl: function (t) {
            t.r /= 255, t.g /= 255, t.b /= 255;
            var e = Math.max(t.r, t.g, t.b),
                n = Math.min(t.r, t.g, t.b),
                i = {};
            if (i.h = (e + n) / 2, i.s = (e + n) / 2, i.l = (e + n) / 2, e === n) i.h = 0, i.s = 0;
            else {
                var r = e - n;
                switch (i.s = i.l > .5 ? r / (2 - e - n) : r / (e + n), e) {
                    case t.r:
                        i.h = (t.g - t.b) / r + (t.g < t.b ? 6 : 0);
                        break;
                    case t.g:
                        i.h = (t.b - t.r) / r + 2;
                        break;
                    case t.b:
                        i.h = (t.r - t.g) / r + 4
                }
                i.h /= 6
            }
            return i
        },
        hsl_to_rgb: function (t) {
            var e = {};
            if (0 === t.s) e.r = t.l, e.g = t.l, e.b = t.l;
            else {
                var n = function (t, e, n) {
                        return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
                    },
                    i = t.l < .5 ? t.l * (1 + t.s) : t.l + t.s - t.l * t.s,
                    r = 2 * t.l - i;
                e.r = n(r, i, t.h + 1 / 3), e.g = n(r, i, t.h), e.b = n(r, i, t.h - 1 / 3)
            }
            return e.r = Math.round(255 * e.r), e.g = Math.round(255 * e.g), e.b = Math.round(255 * e.b), e
        }
    }), i.Tools.Css = i.Core.Abstract.extend({
        "static": "css",
        options: {
            prefixes: ["webkit", "moz", "o", "ms", ""]
        },
        construct: function (t) {
            this._super(t), this.detector = new i.Tools.Detector, this.strings = new i.Tools.Strings
        },
        apply: function (t, e, n, i) {
            if ("undefined" != typeof jQuery && t instanceof jQuery && (t = t.toArray()), "undefined" == typeof t.length && (t = [t]), "undefined" == typeof n && (n = !1), n === !0 && (n = this.options.prefixes), ("undefined" == typeof i || i) && (e = this.clean_style(e)), n instanceof Array) {
                var r = {};
                for (var o in e)
                    for (var s in n) {
                        var a = null;
                        a = n[s] ? n[s] + (o.charAt(0).toUpperCase() + o.slice(1)) : o, r[a] = e[o]
                    }
                e = r
            }
            for (var l in t)
                if (l = t[l], l instanceof HTMLElement)
                    for (var c in e) l.style[c] = e[c];
            return t
        },
        clean_style: function (t) {
            var e = {};
            for (var n in t) {
                var i = t[n];
                e[this.clean_property(n)] = this.clean_value(i)
            }
            return e
        },
        clean_property: function (t) {
            return t = t.replace(/(webkit|moz|o|ms)?/i, ""), t = this.strings.convert_case(t, "camel")
        },
        clean_value: function (t) {
            return 9 === this.detector.browser.ie && (/translateZ/.test(t) && (t = t.replace(/translateZ\([^)]*\)/g, "")), /   /.test(t) && (t = t.replace(/translate3d\(([^,]*),([^,]*),([^)])*\)/g, "translateX($1) translateY($2)"))), t
        }
    }), i.Tools.Detector = i.Core.Event_Emitter.extend({
        "static": "detector",
        options: {
            targets: ["html"]
        },
        construct: function (t) {
            this._super(t), this.init_detection(), this.init_classes()
        },
        init_detection: function () {
            var n = {
                    ie: 0,
                    gecko: 0,
                    webkit: 0,
                    khtml: 0,
                    opera: 0,
                    version: 0
                },
                i = {
                    ie: 0,
                    firefox: 0,
                    safari: 0,
                    konq: 0,
                    opera: 0,
                    chrome: 0,
                    version: 0
                },
                r = {
                    windows: !1,
                    mac: !1,
                    osx: !1,
                    iphone: !1,
                    ipod: !1,
                    ipad: !1,
                    ios: !1,
                    blackberry: !1,
                    android: !1,
                    opera_mini: !1,
                    windows_mobile: !1,
                    wii: !1,
                    ps: !1
                },
                o = {
                    touch: !1,
                    media_query: !1
                },
                s = navigator.userAgent;
            if (t.opera) n.version = i.version = t.opera.version(), n.opera = i.opera = parseInt(n.version);
            else if (/AppleWebKit\/(\S+)/.test(s) || /AppleWebkit\/(\S+)/.test(s))
                if (n.version = RegExp.$1, n.webkit = parseInt(n.version), /Chrome\/(\S+)/.test(s)) i.version = RegExp.$1, i.chrome = parseInt(i.version);
                else if (/Version\/(\S+)/.test(s)) i.version = RegExp.$1, i.safari = parseInt(i.version);
            else {
                var a = 1;
                a = n.webkit < 100 ? 1 : n.webkit < 312 ? 1.2 : n.webkit < 412 ? 1.3 : 2, i.safari = i.version = a
            } else /KHTML\/(\S+)/.test(s) || /Konqueror\/([^;]+)/.test(s) ? (n.version = i.version = RegExp.$1, n.khtml = i.konq = parseInt(n.version)) : /rv:([^\)]+)\) Gecko\/\d{8}/.test(s) ? (n.version = RegExp.$1, n.gecko = parseInt(n.version), /Firefox\/(\S+)/.test(s) && (i.version = RegExp.$1, i.firefox = parseInt(i.version))) : /MSIE ([^;]+)/.test(s) ? (n.version = i.version = RegExp.$1, n.ie = i.ie = parseInt(n.version)) : /Trident.*rv[ :]*(11[\.\d]+)/.test(s) && (n.version = i.version = RegExp.$1, n.ie = i.ie = parseInt(n.version));
            i.ie = n.ie, i.opera = n.opera;
            var l = navigator.platform;
            if (r.windows = !!s.match(/Win/), r.mac = !!s.match(/Mac/), r.windows && /Win(?:dows )?([^do]{2})\s?(\d+\.\d+)?/.test(s))
                if ("NT" === RegExp.$1) switch (RegExp.$2) {
                    case "5.0":
                        r.windows = "2000";
                        break;
                    case "5.1":
                        r.windows = "XP";
                        break;
                    case "6.0":
                        r.windows = "Vista";
                        break;
                    default:
                        r.windows = "NT"
                } else "9x" === RegExp.$1 ? r.windows = "ME" : r.windows = RegExp.$1;
            r.nokia = !!s.match(/Nokia/i), r.kindle_fire = !!s.match(/Silk/), r.iphone = !!s.match(/iPhone/), r.ipod = !!s.match(/iPod/), r.ipad = !!s.match(/iPad/), r.blackberry = !!s.match(/BlackBerry/) || !!s.match(/BB[0-9]+/) || !!s.match(/PlayBook/), r.android = !!s.match(/Android/), r.opera_mini = !!s.match(/Opera Mini/i), r.windows_mobile = !!s.match(/IEMobile/i), r.ios = r.iphone || r.ipod || r.ipad, r.osx = !r.ios && !!s.match(/OS X/), r.wii = s.indexOf("Wii") > -1, r.playstation = /playstation/i.test(s), o.touch = !!("ontouchstart" in t || t.DocumentTouch && e instanceof DocumentTouch), o.media_query = !(!t.matchMedia && !t.msMatchMedia), this.user_agent = s, this.plateform = l, this.browser = i, this.engine = n, this.system = r, this.features = o, this.categories = ["engine", "browser", "system", "features"]
        },
        init_classes: function () {
            if (!this.options.targets || 0 === this.options.targets.length) return !1;
            for (var t = [], n = null, i = 0, r = this.options.targets.length; i < r; i++) {
                if (n = this.options.targets[i], "string" == typeof n) switch (n) {
                    case "html":
                        t.push(e.documentElement);
                        break;
                    case "body":
                        t.push(e.body);
                        break;
                    default:
                        for (var o = e.querySelectorAll(n), s = 0; s < o.length; s++) t.push(o[s])
                } else n instanceof Element && t.push(n);
                if (t.length) {
                    this.classes = [];
                    for (var a in this)
                        if (this.categories.indexOf(a) !== -1)
                            for (var l in this[a]) {
                                var c = this[a][l];
                                "version" !== l && ("features" === a ? this.classes.push(a + "-" + (c ? "" : "no-") + l) : c && (this.classes.push(a + "-" + l), "browser" === a && this.classes.push(a + "-" + l + "-" + c)))
                            }
                    for (var s = 0; s < t.length; s++) t[s].classList.add.apply(t[s].classList, this.classes)
                }
            }
            return this
        }
    }), i.Tools.GATags = i.Tools.GA_Tags = i.Core.Event_Emitter.extend({
        "static": "ga_tags",
        options: {
            testing: !1,
            send: !0,
            parse: !0,
            true_link_duration: 300,
            target: e.body,
            classes: {
                to_tag: "b-tag",
                tagged: "b-tagged"
            },
            logs: {
                warnings: !1,
                send: !1
            }
        },
        construct: function (t) {
            this._super(t), this.unique_sent = [], this.options.parse && this.parse()
        },
        parse: function (e, n) {
            function i(e) {
                e = e || t.event;
                var n = this,
                    i = n.getAttribute("data-tag-true-link"),
                    o = {};
                if (i = !(!i || ["0", "false", "nop", "no"].indexOf(i.toLowerCase()) !== -1), o.category = n.getAttribute("data-tag-category"), o.action = n.getAttribute("data-tag-action"), o.label = n.getAttribute("data-tag-label"), o.value = n.getAttribute("data-tag-value"), o.unique = n.getAttribute("data-tag-unique"), r.send(o), i) {
                    var s = n.getAttribute("href"),
                        a = n.getAttribute("target");
                    a || (a = "_self"), "_blank" !== a && (t.setTimeout(function () {
                        t.open(s, a)
                    }, r.options.true_link_duration), e.preventDefault ? e.preventDefault() : e.returnValue = !1)
                }
            }
            e = e || this.options.target, n = n || this.options.classes.to_tag;
            for (var r = this, o = e.querySelectorAll("." + n), s = 0, a = o.length; s < a; s++) {
                var l = o[s];
                l.classList.contains(this.options.classes.tagged) || (l.onclick = i, l.classList.add(this.options.classes.tagged))
            }
            return this
        },
        send: function (t) {
            var e = [],
                n = !1;
            return "object" != typeof t ? (this.options.logs.warnings && console.warn("tag wrong datas"), !1) : t.unique && this.unique_sent.indexOf(t.unique) !== -1 ? (this.options.logs.warnings && console.warn("tag prevent : " + t.unique), !1) : (this.options.send && ("undefined" != typeof t.category ? (e.push(t.category), "undefined" != typeof t.action ? (e.push(t.action), "undefined" != typeof t.label && (e.push(t.label), "undefined" != typeof t.value && e.push(t.value)), "undefined" != typeof _gaq ? (_gaq.push(["_trackEvent"].concat(e)), n = !0) : "undefined" != typeof ga ? (ga.apply(ga, ["send", "event"].concat(e)), n = !0) : this.options.testing ? n = !0 : this.options.logs.warnings && console.warn("tag _gaq not defined"), this.options.logs.send && console.log("tag", e)) : this.options.logs.warnings && console.warn("tag missing action")) : this.options.logs.warnings && console.warn("tag missing category")), n && (t.unique && this.unique_sent.push(t.unique), this.trigger("send", [e])), this)
        }
    }), i.Tools.Keyboard = i.Core.Event_Emitter.extend({
        "static": "keyboard",
        options: {},
        keycode_names: {
            91: "cmd",
            17: "ctrl",
            32: "space",
            16: "shift",
            18: "alt",
            20: "caps",
            9: "tab",
            13: "enter",
            8: "backspace",
            38: "up",
            39: "right",
            40: "down",
            37: "left",
            27: "esc"
        },
        construct: function (t) {
            this._super(t), this.downs = [], this.listen_to_events()
        },
        listen_to_events: function () {
            function n(e) {
                var n = r.keycode_to_character(e.keyCode);
                r.downs.indexOf(n) === -1 && r.downs.push(n), r.trigger("down", [e.keyCode, n]) === !1 && (e = e || t.event, e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            }

            function i(t) {
                var e = r.keycode_to_character(t.keyCode);
                r.downs.indexOf(e) !== -1 && r.downs.splice(r.downs.indexOf(e), 1), r.trigger("up", [t.keyCode, e])
            }
            var r = this;
            return e.addEventListener ? (e.addEventListener("keydown", n, !1), e.addEventListener("keyup", i, !1)) : (e.attachEvent("onkeydown", n, !1), e.attachEvent("onkeyup", i, !1)), this
        },
        keycode_to_character: function (t) {
            var e = this.keycode_names[t];
            return e || (e = String.fromCharCode(t).toLowerCase()), e
        },
        are_down: function (t) {
            for (var e = !0, n = 0; n < t.length; n++) {
                var i = t[n];
                "number" == typeof i && (i = this.keycode_to_character(i)), this.downs.indexOf(i) === -1 && (e = !1)
            }
            return e
        },
        is_down: function (t) {
            return this.are_down([t])
        }
    }), i.Tools.KonamiCode = i.Tools.Konami_Code = i.Core.Event_Emitter.extend({
        "static": "konami_code",
        options: {
            reset_duration: 1e3,
            sequence: ["up", "up", "down", "down", "left", "right", "left", "right", "b", "a"]
        },
        construct: function (t) {
            this._super(t), this.index = 0, this.timeout = null, this.keyboard = new i.Tools.Keyboard, this.listen_to_events()
        },
        listen_to_events: function () {
            var e = this;
            this.keyboard.on("down", function (n, i) {
                e.timeout && t.clearTimeout(e.timeout), i === e.options.sequence[e.index] ? (e.index++, e.timeout = t.setTimeout(function () {
                    e.trigger("timeout", [e.index]), e.index = 0
                }, e.options.reset_duration)) : (e.index && e.trigger("wrong", [e.index]), e.index = 0), e.index >= e.options.sequence.length && (e.trigger("used"), e.index = 0, t.clearTimeout(e.timeout))
            })
        }
    }), i.Tools.Mouse = i.Core.Event_Emitter.extend({
        "static": "mouse",
        options: {},
        construct: function (t) {
            this._super(t), this.viewport = new i.Tools.Viewport, this.down = !1, this.position = {}, this.position.x = 0, this.position.y = 0, this.position.ratio = {}, this.position.ratio.x = 0, this.position.ratio.y = 0, this.wheel = {}, this.wheel.delta = 0, this.listen_to_events()
        },
        listen_to_events: function () {
            function t(t) {
                o.down = !0, o.trigger("down", [o.position, t.target]) === !1 && t.preventDefault()
            }

            function n(t) {
                o.down = !1, o.trigger("up", [o.position, t.target])
            }

            function i(t) {
                o.position.x = t.clientX, o.position.y = t.clientY, o.position.ratio.x = o.position.x / o.viewport.width, o.position.ratio.y = o.position.y / o.viewport.height, o.trigger("move", [o.position, t.target])
            }

            function r(t) {
                if (o.wheel.delta = t.wheelDeltaY || t.wheelDelta || -t.detail, o.trigger("wheel", [o.wheel]) === !1) return t.preventDefault(), !1
            }
            var o = this;
            return e.addEventListener ? (e.addEventListener("mousedown", t, !1), e.addEventListener("mouseup", n, !1), e.addEventListener("mousemove", i, !1), e.addEventListener("mousewheel", r, !1), e.addEventListener("DOMMouseScroll", r, !1)) : (e.attachEvent("onmousedown", t, !1), e.attachEvent("onmouseup", n, !1), e.attachEvent("onmousemove", i, !1), e.attachEvent("onmousewheel", r, !1)), this
        }
    }), i.Tools.Offline = i.Core.Event_Emitter.extend({
        "static": "offline",
        options: {
            classes: {
                active: !0,
                target: e.body,
                offline: "offline",
                online: "online"
            }
        },
        construct: function (t) {
            this._super(t), this.status = null, this.listen_to_events()
        },
        listen_to_events: function () {
            function n() {
                navigator.onLine ? (i.options.classes.active && (i.options.classes.target.classList.remove(i.options.classes.offline), i.options.classes.target.classList.add(i.options.classes.online)), i.status = "online", i.trigger("online"), i.trigger("change", [i.status])) : (i.options.classes.active && (i.options.classes.target.classList.remove(i.options.classes.online), i.options.classes.target.classList.add(i.options.classes.offline)), i.status = "online", i.trigger("offline"), i.trigger("change", [i.status]))
            }
            var i = this;
            return t.addEventListener ? (t.addEventListener("online", n, !1), t.addEventListener("offline", n, !1)) : (e.body.ononline = n, e.body.onoffline = n), n(), this
        }
    }), i.Tools.Registry = i.Core.Event_Emitter.extend({
        "static": "registry",
        options: {},
        construct: function (t) {
            this._super(t), this.items = {}
        },
        get: function (t, e) {
            return "undefined" != typeof this.items[t] ? this.items[t] : "function" == typeof e ? e.apply(this) : n
        },
        set: function (t, e) {
            return this.items[t] = e, this.trigger("update", [t, e]), e
        }
    }), i.Tools.Resizer = i.Core.Abstract.extend({
        "static": "resizer",
        options: {
            force_style: !0,
            parse: !0,
            target: e.body,
            auto_resize: !0,
            classes: {
                to_resize: "b-resize",
                content: "b-content"
            }
        },
        construct: function (t) {
            this._super(t), this.elements = [], this.options.parse && this.parse(), this.options.auto_resize && this.init_auto_resize()
        },
        init_auto_resize: function () {
            var t = this;
            return this.viewport = new i.Tools.Viewport, this.viewport.on("resize", function () {
                t.resize_all()
            }), this
        },
        parse: function (t, e) {
            t = t || this.options.target, e = e || this.options.classes.to_resize, this.elements = [];
            for (var n = t.querySelectorAll("." + e), i = 0, r = n.length; i < r; i++) {
                var o = n[i],
                    s = o.querySelector("." + this.options.classes.content);
                s && this.elements.push({
                    container: o,
                    content: s
                })
            }
            return this
        },
        resize_all: function () {
            for (var t = 0, e = this.elements.length; t < e; t++) {
                var n = this.elements[t];
                this.resize(n.container, n.content)
            }
            return this
        },
        resize: function (e, n, i) {
            var r = [];
            if (e instanceof HTMLElement || r.push("wrong container parameter"), n instanceof HTMLElement || r.push("wrong content parameter"), r.length) {
                for (var o = 0; o < r.length; o++) console.warn(r[o]);
                return !1
            }
            var s = {};
            s.container_width = e.getAttribute("data-width") || e.getAttribute("width") || e.offsetWidth, s.container_height = e.getAttribute("data-height") || e.getAttribute("height") || e.offsetHeight, s.content_width = n.getAttribute("data-width") || n.getAttribute("width") || n.offsetWidth, s.content_height = n.getAttribute("data-height") || n.getAttribute("height") || n.offsetHeight, s.fit_type = n.getAttribute("data-fit-type"), s.align_x = n.getAttribute("data-align-x"), s.align_y = n.getAttribute("data-align-y"), s.rounding = n.getAttribute("data-rounding");
            var a = this.get_sizes(s);
            if (!a) return !1;
            if (i = "undefined" == typeof i ? this.options.force_style : i) {
                var l = t.getComputedStyle(e),
                    c = t.getComputedStyle(n);
                "fixed" !== l.position && "relative" !== l.position && "absolute" !== l.position && (e.style.position = "relative"), "fixed" !== c.position && "relative" !== c.position && "absolute" !== c.position && (n.style.position = "absolute"), "hidden" !== l.overflow && (e.style.overflow = "hidden")
            }
            return n.style.top = a.css.top, n.style.left = a.css.left, n.style.width = a.css.width, n.style.height = a.css.height, this
        },
        get_sizes: function (t, e) {
            var n = [];
            if ("undefined" != typeof t.content_width && 0 !== parseInt(t.content_width, 10) || n.push("content width must be specified"), "undefined" != typeof t.content_height && 0 !== parseInt(t.content_height, 10) || n.push("content height must be specified"), "undefined" != typeof t.container_width && 0 !== parseInt(t.container_width, 10) || n.push("container width must be specified"), "undefined" != typeof t.container_height && 0 !== parseInt(t.container_height, 10) || n.push("container height must be specified"), n.length) return !1;
            "undefined" == typeof e && (e = "both"), t.fit_type = t.fit_type || "fill", t.align_x = t.align_x || "center", t.align_y = t.align_y || "center", t.rounding = t.rounding || "ceil";
            var i = t.content_width / t.content_height,
                r = t.container_width / t.container_height,
                o = 0,
                s = 0,
                a = 0,
                l = 0,
                c = null;
            t.fit_type = t.fit_type.toLowerCase(), t.align_x = t.align_x.toLowerCase(), t.align_y = t.align_y.toLowerCase(), t.rounding = t.rounding.toLowerCase(), "undefined" != typeof t.align_x && ["left", "center", "middle", "right"].indexOf(t.align_x) !== -1 || (t.align_x = "center"), "undefined" != typeof t.align_y && ["top", "center", "middle", "bottom"].indexOf(t.align_y) !== -1 || (t.align_y = "center");
            var u = function () {
                    switch (o = t.container_width, s = t.container_width / t.content_width * t.content_height, a = 0, c = "width", t.align_y) {
                        case "top":
                            l = 0;
                            break;
                        case "middle":
                        case "center":
                            l = (t.container_height - s) / 2;
                            break;
                        case "bottom":
                            l = t.container_height - s
                    }
                },
                h = function () {
                    switch (s = t.container_height, o = t.container_height / t.content_height * t.content_width, l = 0, c = "height", t.align_x) {
                        case "left":
                            a = 0;
                            break;
                        case "middle":
                        case "center":
                            a = (t.container_width - o) / 2;
                            break;
                        case "right":
                            a = t.container_width - o
                    }
                };
            ["fill", "full", "cover"].indexOf(t.fit_type) !== -1 ? i < r ? u() : h() : ["fit", "i sits", "contain"].indexOf(t.fit_type) !== -1 && (i < r ? h() : u()), ["ceil", "floor", "round"].indexOf(t.rounding) !== -1 && (o = Math[t.rounding].call(this, o), s = Math[t.rounding].call(this, s), a = Math[t.rounding].call(this, a), l = Math[t.rounding].call(this, l));
            var p = {};
            return p.cartesian = {}, p.cartesian.width = o, p.cartesian.height = s, p.cartesian.x = a, p.cartesian.y = l, p.css = {}, p.css.width = o + "px", p.css.height = s + "px", p.css.left = a + "px", p.css.top = l + "px", p.fit_in = c, "both" === e ? p : "cartesian" === e ? p.cartesian : "css" === e ? p.css : void 0
        }
    }), i.Tools.Strings = i.Core.Abstract.extend({
        "static": "strings",
        options: {},
        cases: {
            camel: ["camel", "camelback", "compoundnames"],
            pascal: ["pascal", "uppercamelcase", "bumpycaps", "camelcaps", "capitalizedwords", "capwords"],
            snake: ["snake", "underscore", "plissken"],
            titlesnake: ["titlesnake", "capitalsnake"],
            screamingsnake: ["screamingsnake", "uppersnake"],
            dash: ["dash", "dashed", "hyphen", "kebab", "spinal"],
            train: ["train"],
            space: ["space"],
            title: ["title"],
            dot: ["dot"],
            slash: ["slash", "forwardslash", "path"],
            backslash: ["backslash", "hack", "whack", "escape", "reverseslash", "slosh", "backslant", "downhill", "backwhack"],
            lower: ["lower"],
            upper: ["upper"],
            studlycaps: ["studlycaps"],
            burno: ["burno", "lol", "yolo"]
        },
        negatives: ["0", "false", "nop", ":(", "nee", "jo", "naÃ¯", "laa", "votch", "xeyir", "ez", "hÐµ nie", "nie", "na", "aÃ¯lle", "ne", "nann", "nÃ©", "ma hoke phu", "hmar te", "no", "tla", "hla", "pÃ¹ shi", "nÃ²", "nej", "ei", "nei", "non", "nanni", "ara", "nein", "ohi", "nahÃ¡niri", "Ê»aole", "aole", "lo", "nahin", "nem", "mba", "tidak", "iiÃ©", "ala", "thay", "oya", "ahneo", "na", "bo", "minime", "nÄ“", "te", "neen", "Ð½Ðµ", "he", "tsia", "le", "kaore", "ugui", "yÐ³vÐ¹", "nennin", "nenn", "Ð½Ã¦Ð¹", "kheyr", "nie", "nÃ£o", "nu", "Ð½ÐµÑ‚", "niet", "ag", "aiwa", "nae", "aÃ¯", "siyo", "hapana", "hindi", "po", "aita", "lla", "illaÃ¯", "yuk", "kadhu", "à¹„à¸¡à¹ˆ", "maÃ¯", "hayir", "oevoel", "ug", "Ð½Ñ–", "ni", "Ù†Ù‡ÙŠÙ†", "neni", "nage", "awa", "dÃ©edÃ©et", "rara", "cha"],
        convert_case: function (t, e) {
            t = this.trim(t), e = e.toLowerCase(), e = e.replace(/[^[a-z]]*/g, ""), e = e.replace(/case/g, "");
            var n = null;
            for (var i in this.cases)
                for (var r in this.cases[i]) {
                    var o = this.cases[i][r];
                    o === e && (n = o)
                }
            if (!n) return t;
            t = t.replace(/([a-z])([A-Z])/g, "$1-$2"), t = t.toLowerCase();
            var s = t.split(/[-_ .\/\\]/g),
                a = null,
                l = null,
                c = null;
            switch (n) {
                case "camel":
                    for (l = 0, c = s.length; l < c; l++) 0 !== l && (s[l] = s[l].charAt(0).toUpperCase() + s[l].slice(1));
                    a = s.join("");
                    break;
                case "pascal":
                    for (l = 0, c = s.length; l < c; l++) s[l] = s[l].charAt(0).toUpperCase() + s[l].slice(1);
                    a = s.join("");
                    break;
                case "snake":
                    a = s.join("_");
                    break;
                case "titlesnake":
                    for (l = 0, c = s.length; l < c; l++) s[l] = s[l].charAt(0).toUpperCase() + s[l].slice(1);
                    a = s.join("_");
                    break;
                case "screamingsnake":
                    a = s.join("_"), a = a.toUpperCase();
                    break;
                case "dash":
                    a = s.join("-");
                    break;
                case "train":
                    for (l = 0, c = s.length; l < c; l++) s[l] = s[l].charAt(0).toUpperCase() + s[l].slice(1);
                    a = s.join("-");
                    break;
                case "space":
                    a = s.join(" ");
                    break;
                case "title":
                    for (l = 0, c = s.length; l < c; l++) s[l] = s[l].charAt(0).toUpperCase() + s[l].slice(1);
                    a = s.join(" ");
                    break;
                case "dot":
                    a = s.join(".");
                    break;
                case "slash":
                    a = s.join("/");
                    break;
                case "backslash":
                    a = s.join("\\");
                    break;
                case "lower":
                    a = s.join("");
                    break;
                case "upper":
                    a = s.join(""), a = a.toUpperCase();
                    break;
                case "studlycaps":
                    for (a = s.join(""), l = 0, c = a.length; l < c; l++) Math.random() > .5 && (a = a.substr(0, l) + a[l].toUpperCase() + a.substr(l + 1));
                    break;
                case "burno":
                    for (l = 0, c = s.length; l < c; l++) s[l] = "burno";
                    a = s.join(" ")
            }
            return a
        },
        to_boolean: function (t) {
            return "undefined" != typeof t && null !== t && (t = "" + t, t = this.trim(t), t = t.toLowerCase(), this.negatives.indexOf(t) === -1)
        },
        trim: function (t, e) {
            return "undefined" == typeof e ? t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "") : (t = t.replace(new RegExp("^[" + e + "]+"), ""), t = t.replace(new RegExp("[" + e + "]+$"), ""))
        },
        to_slug: function (t) {
            t = this.trim(t), t = t.toLowerCase();
            for (var e = "Ã£Ã Ã¡Ã¤Ã¢áº½Ã¨Ã©Ã«ÃªÃ¬Ã­Ã¯Ã®ÃµÃ²Ã³Ã¶Ã´Ã¹ÃºÃ¼Ã»Ã±Ã§Â·/,:;", n = "aaaaaeeeeeiiiiooooouuuunc-----", i = 0, r = e.length; i < r; i++) t = t.replace(new RegExp(e.charAt(i), "g"), n.charAt(i));
            return t = t.replace(/[^a-z0-9 _-]/g, ""), t = t.replace(/\s+/g, "-"), t = t.replace(/-+/g, "-"), t = this.trim(t, "-")
        },
        slugify: function (t) {
            return this.to_slug(t)
        }
    }), i.Tools.Ticker = i.Core.Event_Emitter.extend({
        "static": "ticker",
        options: {
            auto_run: !0
        },
        construct: function (t) {
            this._super(t), this.reseted = !1, this.running = !1, this.time = {}, this.time.start = 0, this.time.elapsed = 0, this.time.delta = 0, this.time.current = 0, this.waits = {}, this.waits.before = [], this.waits.after = [], this.intervals = {}, this.options.auto_run && this.run()
        },
        reset: function (t) {
            return this.reseted = !0, this.time.start = +new Date, this.time.current = this.time.start, this.time.elapsed = 0, this.time.delta = 0, t && this.run(), this
        },
        run: function () {
            var e = this;
            if (!this.running) {
                this.running = !0;
                var n = function () {
                    e.running && t.requestAnimationFrame(n), e.tick()
                };
                return n(), this
            }
        },
        stop: function () {
            return this.running = !1, this
        },
        tick: function () {
            this.reseted || this.reset(), this.time.current = +new Date, this.time.delta = this.time.current - this.time.start - this.time.elapsed, this.time.elapsed = this.time.current - this.time.start;
            for (var t = 0, e = this.waits.before.length, n = null; t < e; t++) n = this.waits.before[t], 0 === --n.frames_count && (n.action.apply(this, [this.time]), this.waits.before.splice(t, 1), t--, e--);
            for (this.trigger("tick", [this.time]), this.trigger_intervals(), t = 0, e = this.waits.after.length; t < e; t++) n = this.waits.after[t], 0 === --n.frames_count && (n.action.apply(this, [this.time]), this.waits.after.splice(t, 1), t--, e--);
            return this
        },
        wait: function (t, e, n) {
            return "function" == typeof e && ("number" == typeof t && (this.waits[n ? "after" : "before"].push({
                frames_count: t,
                action: e
            }), this))
        },
        create_interval: function (t) {
            return this.intervals[t] = {
                interval: t,
                next_trigger: t,
                start: this.time.elapsed,
                last_trigger: this.time.elapsed
            }, this
        },
        destroy_interval: function (t) {
            return delete this.intervals[t], this
        },
        trigger_intervals: function () {
            for (var t in this.intervals) {
                var e = this.intervals[t];
                this.time.elapsed - e.last_trigger > e.next_trigger && (e.next_trigger = e.interval - (this.time.elapsed - e.start) % e.interval, e.last_trigger = this.time.elapsed, this.trigger("tick-" + e.interval, [this.time, e]))
            }
            return this
        },
        on: function (t, e) {
            var n = this,
                i = this.resolve_names(t);
            return i.forEach(function (t) {
                if (t.match(/^tick([0-9]+)$/)) {
                    var e = parseInt(t.replace(/^tick([0-9]+)$/, "$1"));
                    e && n.create_interval(e)
                }
            }), this._super(t, e)
        },
        off: function (t) {
            var e = this,
                n = this.resolve_names(t);
            return n.forEach(function (t) {
                if (t.match(/^tick([0-9]+)$/)) {
                    var n = parseInt(t.replace(/^tick([0-9]+)$/, "$1"));
                    n && e.destroy_interval(n)
                }
            }), this._super(t)
        }
    }), i.Tools.Viewport = i.Core.Event_Emitter.extend({
        "static": "viewport",
        options: {
            disable_hover_on_scroll: !1,
            initial_triggers: ["resize", "scroll"]
        },
        construct: function (n) {
            this._super(n), this.ticker = new i.Tools.Ticker, this.detector = new i.Tools.Detector, this.top = 0, this.left = 0, this.y = 0, this.x = 0, this.scroll = {}, this.scroll.delta = {}, this.scroll.delta.top = 0, this.scroll.delta.left = 0, this.scroll.delta.y = 0, this.scroll.delta.x = 0, this.scroll.direction = {}, this.scroll.direction.x = null, this.scroll.direction.y = null, this.width = t.innerWidth || e.documentElement.clientWidth || e.body.clientWidth, this.height = t.innerHeight || e.documentElement.clientHeight || e.body.clientHeight, this.pixel_ratio = t.devicePixelRatio || 1, this.init_disabling_hover_on_scroll(), this.init_events()
        },
        init_events: function () {
            function e() {
                i.resize_handler()
            }

            function n() {
                i.scroll_handler()
            }
            var i = this;
            return t.addEventListener ? (t.addEventListener("resize", e), t.addEventListener("scroll", n)) : (t.attachEvent("onresize", e), t.attachEvent("onscroll", n)), this.options.initial_triggers.length && this.ticker.wait(1, function () {
                for (var t = 0; t < i.options.initial_triggers.length; t++) {
                    var e = i.options.initial_triggers[t],
                        n = i[e + "_handler"];
                    "function" == typeof n && n.apply(i)
                }
            }), this
        },
        resize_handler: function () {
            return this.width = t.innerWidth || e.documentElement.clientWidth || e.body.clientWidth, this.height = t.innerHeight || e.documentElement.clientHeight || e.body.clientHeight, this.trigger("resize", [this.width, this.height]), this
        },
        scroll_handler: function () {
            var e = "undefined" != typeof t.pageYOffset ? t.pageYOffset : t.document.documentElement.scrollTop,
                n = "undefined" != typeof t.pageXOffset ? t.pageXOffset : t.document.documentElement.scrollLeft;
            return this.scroll.direction.y = e > this.top ? "down" : "up", this.scroll.direction.x = n > this.left ? "right" : "left", this.scroll.delta.top = e - this.top, this.scroll.delta.left = n - this.left, this.top = e, this.left = n, this.y = this.top, this.x = this.left, this.scroll.delta.y = this.scroll.delta.top, this.scroll.delta.x = this.scroll.delta.left, this.trigger("scroll", [this.top, this.left, this.scroll]), this
        },
        init_disabling_hover_on_scroll: function () {
            var n = this,
                i = null,
                r = !1;
            return this.on("scroll", function () {
                n.options.disable_hover_on_scroll && (i && t.clearTimeout(i), r || (r = !0, e.body.style.pointerEvents = "none"), i = t.setTimeout(function () {
                    r = !1, e.body.style.pointerEvents = "auto"
                }, 60))
            }), this
        },
        match_media: function (e) {
            return !(!this.detector.features.media_query || "string" != typeof e || "" === e) && !!t.matchMedia(e).matches
        }
    }), i
}(window, document);
! function () {
    "use strict";

    function t(e, i) {
        function r(t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }
        var o;
        if (i = i || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = i.touchBoundary || 10, this.layer = e, this.tapDelay = i.tapDelay || 200, this.tapTimeout = i.tapTimeout || 700, !t.notNeeded(e)) {
            for (var s = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], a = this, l = 0, c = s.length; l < c; l++) a[s[l]] = r(a[s[l]], a);
            n && (e.addEventListener("mouseover", this.onMouse, !0), e.addEventListener("mousedown", this.onMouse, !0), e.addEventListener("mouseup", this.onMouse, !0)), e.addEventListener("click", this.onClick, !0), e.addEventListener("touchstart", this.onTouchStart, !1), e.addEventListener("touchmove", this.onTouchMove, !1), e.addEventListener("touchend", this.onTouchEnd, !1), e.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (e.removeEventListener = function (t, n, i) {
                var r = Node.prototype.removeEventListener;
                "click" === t ? r.call(e, t, n.hijacked || n, i) : r.call(e, t, n, i)
            }, e.addEventListener = function (t, n, i) {
                var r = Node.prototype.addEventListener;
                "click" === t ? r.call(e, t, n.hijacked || (n.hijacked = function (t) {
                    t.propagationStopped || n(t)
                }), i) : r.call(e, t, n, i)
            }), "function" == typeof e.onclick && (o = e.onclick, e.addEventListener("click", function (t) {
                o(t)
            }, !1), e.onclick = null)
        }
    }
    var e = navigator.userAgent.indexOf("Windows Phone") >= 0,
        n = navigator.userAgent.indexOf("Android") > 0 && !e,
        i = /iP(ad|hone|od)/.test(navigator.userAgent) && !e,
        r = i && /OS 4_\d(_\d)?/.test(navigator.userAgent),
        o = i && /OS [6-7]_\d/.test(navigator.userAgent),
        s = navigator.userAgent.indexOf("BB10") > 0;
    t.prototype.needsClick = function (t) {
        switch (t.nodeName.toLowerCase()) {
            case "button":
            case "select":
            case "textarea":
                if (t.disabled) return !0;
                break;
            case "input":
                if (i && "file" === t.type || t.disabled) return !0;
                break;
            case "label":
            case "iframe":
            case "video":
                return !0
        }
        return /\bneedsclick\b/.test(t.className)
    }, t.prototype.needsFocus = function (t) {
        switch (t.nodeName.toLowerCase()) {
            case "textarea":
                return !0;
            case "select":
                return !n;
            case "input":
                switch (t.type) {
                    case "button":
                    case "checkbox":
                    case "file":
                    case "image":
                    case "radio":
                    case "submit":
                        return !1
                }
                return !t.disabled && !t.readOnly;
            default:
                return /\bneedsfocus\b/.test(t.className)
        }
    }, t.prototype.sendClick = function (t, e) {
        var n, i;
        document.activeElement && document.activeElement !== t && document.activeElement.blur(),
            i = e.changedTouches[0], n = document.createEvent("MouseEvents"), n.initMouseEvent(this.determineEventType(t), !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), n.forwardedTouchEvent = !0, t.dispatchEvent(n)
    }, t.prototype.determineEventType = function (t) {
        return n && "select" === t.tagName.toLowerCase() ? "mousedown" : "click"
    }, t.prototype.focus = function (t) {
        var e;
        i && t.setSelectionRange && 0 !== t.type.indexOf("date") && "time" !== t.type && "month" !== t.type ? (e = t.value.length, t.setSelectionRange(e, e)) : t.focus()
    }, t.prototype.updateScrollParent = function (t) {
        var e, n;
        if (e = t.fastClickScrollParent, !e || !e.contains(t)) {
            n = t;
            do {
                if (n.scrollHeight > n.offsetHeight) {
                    e = n, t.fastClickScrollParent = n;
                    break
                }
                n = n.parentElement
            } while (n)
        }
        e && (e.fastClickLastScrollTop = e.scrollTop)
    }, t.prototype.getTargetElementFromEventTarget = function (t) {
        return t.nodeType === Node.TEXT_NODE ? t.parentNode : t
    }, t.prototype.onTouchStart = function (t) {
        var e, n, o;
        if (t.targetTouches.length > 1) return !0;
        if (e = this.getTargetElementFromEventTarget(t.target), n = t.targetTouches[0], i) {
            if (o = window.getSelection(), o.rangeCount && !o.isCollapsed) return !0;
            if (!r) {
                if (n.identifier && n.identifier === this.lastTouchIdentifier) return t.preventDefault(), !1;
                this.lastTouchIdentifier = n.identifier, this.updateScrollParent(e)
            }
        }
        return this.trackingClick = !0, this.trackingClickStart = t.timeStamp, this.targetElement = e, this.touchStartX = n.pageX, this.touchStartY = n.pageY, t.timeStamp - this.lastClickTime < this.tapDelay && t.preventDefault(), !0
    }, t.prototype.touchHasMoved = function (t) {
        var e = t.changedTouches[0],
            n = this.touchBoundary;
        return Math.abs(e.pageX - this.touchStartX) > n || Math.abs(e.pageY - this.touchStartY) > n
    }, t.prototype.onTouchMove = function (t) {
        return !this.trackingClick || ((this.targetElement !== this.getTargetElementFromEventTarget(t.target) || this.touchHasMoved(t)) && (this.trackingClick = !1, this.targetElement = null), !0)
    }, t.prototype.findControl = function (t) {
        return void 0 !== t.control ? t.control : t.htmlFor ? document.getElementById(t.htmlFor) : t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
    }, t.prototype.onTouchEnd = function (t) {
        var e, s, a, l, c, u = this.targetElement;
        if (!this.trackingClick) return !0;
        if (t.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0, !0;
        if (t.timeStamp - this.trackingClickStart > this.tapTimeout) return !0;
        if (this.cancelNextClick = !1, this.lastClickTime = t.timeStamp, s = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, o && (c = t.changedTouches[0], u = document.elementFromPoint(c.pageX - window.pageXOffset, c.pageY - window.pageYOffset) || u, u.fastClickScrollParent = this.targetElement.fastClickScrollParent), a = u.tagName.toLowerCase(), "label" === a) {
            if (e = this.findControl(u)) {
                if (this.focus(u), n) return !1;
                u = e
            }
        } else if (this.needsFocus(u)) return t.timeStamp - s > 100 || i && window.top !== window && "input" === a ? (this.targetElement = null, !1) : (this.focus(u), this.sendClick(u, t), i && "select" === a || (this.targetElement = null, t.preventDefault()), !1);
        return !(!i || r || (l = u.fastClickScrollParent, !l || l.fastClickLastScrollTop === l.scrollTop)) || (this.needsClick(u) || (t.preventDefault(), this.sendClick(u, t)), !1)
    }, t.prototype.onTouchCancel = function () {
        this.trackingClick = !1, this.targetElement = null
    }, t.prototype.onMouse = function (t) {
        return !this.targetElement || (!!t.forwardedTouchEvent || (!t.cancelable || (!(!this.needsClick(this.targetElement) || this.cancelNextClick) || (t.stopImmediatePropagation ? t.stopImmediatePropagation() : t.propagationStopped = !0, t.stopPropagation(), t.preventDefault(), !1))))
    }, t.prototype.onClick = function (t) {
        var e;
        return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === t.target.type && 0 === t.detail || (e = this.onMouse(t), e || (this.targetElement = null), e)
    }, t.prototype.destroy = function () {
        var t = this.layer;
        n && (t.removeEventListener("mouseover", this.onMouse, !0), t.removeEventListener("mousedown", this.onMouse, !0), t.removeEventListener("mouseup", this.onMouse, !0)), t.removeEventListener("click", this.onClick, !0), t.removeEventListener("touchstart", this.onTouchStart, !1), t.removeEventListener("touchmove", this.onTouchMove, !1), t.removeEventListener("touchend", this.onTouchEnd, !1), t.removeEventListener("touchcancel", this.onTouchCancel, !1)
    }, t.notNeeded = function (t) {
        var e, i, r, o;
        if ("undefined" == typeof window.ontouchstart) return !0;
        if (i = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
            if (!n) return !0;
            if (e = document.querySelector("meta[name=viewport]")) {
                if (e.content.indexOf("user-scalable=no") !== -1) return !0;
                if (i > 31 && document.documentElement.scrollWidth <= window.outerWidth) return !0
            }
        }
        if (s && (r = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), r[1] >= 10 && r[2] >= 3 && (e = document.querySelector("meta[name=viewport]")))) {
            if (e.content.indexOf("user-scalable=no") !== -1) return !0;
            if (document.documentElement.scrollWidth <= window.outerWidth) return !0
        }
        return "none" === t.style.msTouchAction || "manipulation" === t.style.touchAction || (o = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1], !!(o >= 27 && (e = document.querySelector("meta[name=viewport]"), e && (e.content.indexOf("user-scalable=no") !== -1 || document.documentElement.scrollWidth <= window.outerWidth))) || ("none" === t.style.touchAction || "manipulation" === t.style.touchAction))
    }, t.attach = function (e, n) {
        return new t(e, n)
    }, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function () {
        return t
    }) : "undefined" != typeof module && module.exports ? (module.exports = t.attach, module.exports.FastClick = t) : window.FastClick = t
}(), ! function (t, e, n, i) {
    "use strict";

    function r(t, e, n) {
        return setTimeout(c(t, n), e)
    }

    function o(t, e, n) {
        return !!Array.isArray(t) && (s(t, n[e], n), !0)
    }

    function s(t, e, n) {
        var r;
        if (t)
            if (t.forEach) t.forEach(e, n);
            else if (t.length !== i)
            for (r = 0; r < t.length;) e.call(n, t[r], r, t), r++;
        else
            for (r in t) t.hasOwnProperty(r) && e.call(n, t[r], r, t)
    }

    function a(e, n, i) {
        var r = "DEPRECATED METHOD: " + n + "\n" + i + " AT \n";
        return function () {
            var n = new Error("get-stack-trace"),
                i = n && n.stack ? n.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
                o = t.console && (t.console.warn || t.console.log);
            return o && o.call(t.console, r, i), e.apply(this, arguments)
        }
    }

    function l(t, e, n) {
        var i, r = e.prototype;
        i = t.prototype = Object.create(r), i.constructor = t, i._super = r, n && at(i, n)
    }

    function c(t, e) {
        return function () {
            return t.apply(e, arguments)
        }
    }

    function u(t, e) {
        return typeof t == ut ? t.apply(e ? e[0] || i : i, e) : t
    }

    function h(t, e) {
        return t === i ? e : t
    }

    function p(t, e, n) {
        s(m(e), function (e) {
            t.addEventListener(e, n, !1)
        })
    }

    function f(t, e, n) {
        s(m(e), function (e) {
            t.removeEventListener(e, n, !1)
        })
    }

    function d(t, e) {
        for (; t;) {
            if (t == e) return !0;
            t = t.parentNode
        }
        return !1
    }

    function g(t, e) {
        return t.indexOf(e) > -1
    }

    function m(t) {
        return t.trim().split(/\s+/g)
    }

    function v(t, e, n) {
        if (t.indexOf && !n) return t.indexOf(e);
        for (var i = 0; i < t.length;) {
            if (n && t[i][n] == e || !n && t[i] === e) return i;
            i++
        }
        return -1
    }

    function y(t) {
        return Array.prototype.slice.call(t, 0)
    }

    function _(t, e, n) {
        for (var i = [], r = [], o = 0; o < t.length;) {
            var s = e ? t[o][e] : t[o];
            v(r, s) < 0 && i.push(t[o]), r[o] = s, o++
        }
        return n && (i = e ? i.sort(function (t, n) {
            return t[e] > n[e]
        }) : i.sort()), i
    }

    function x(t, e) {
        for (var n, r, o = e[0].toUpperCase() + e.slice(1), s = 0; s < lt.length;) {
            if (n = lt[s], r = n ? n + o : e, r in t) return r;
            s++
        }
        return i
    }

    function b() {
        return mt++
    }

    function w(e) {
        var n = e.ownerDocument || e;
        return n.defaultView || n.parentWindow || t
    }

    function T(t, e) {
        var n = this;
        this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function (e) {
            u(t.options.enable, [t]) && n.handler(e)
        }, this.init()
    }

    function k(t) {
        var e, n = t.options.inputClass;
        return new(e = n ? n : _t ? L : xt ? q : yt ? z : R)(t, C)
    }

    function C(t, e, n) {
        var i = n.pointers.length,
            r = n.changedPointers.length,
            o = e & Et && i - r === 0,
            s = e & (St | Ft) && i - r === 0;
        n.isFirst = !!o, n.isFinal = !!s, o && (t.session = {}), n.eventType = e, E(t, n), t.emit("hammer.input", n), t.recognize(n), t.session.prevInput = n
    }

    function E(t, e) {
        var n = t.session,
            i = e.pointers,
            r = i.length;
        n.firstInput || (n.firstInput = F(e)), r > 1 && !n.firstMultiple ? n.firstMultiple = F(e) : 1 === r && (n.firstMultiple = !1);
        var o = n.firstInput,
            s = n.firstMultiple,
            a = s ? s.center : o.center,
            l = e.center = P(i);
        e.timeStamp = ft(), e.deltaTime = e.timeStamp - o.timeStamp, e.angle = $(a, l), e.distance = O(a, l), A(n, e), e.offsetDirection = j(e.deltaX, e.deltaY);
        var c = D(e.deltaTime, e.deltaX, e.deltaY);
        e.overallVelocityX = c.x, e.overallVelocityY = c.y, e.overallVelocity = pt(c.x) > pt(c.y) ? c.x : c.y, e.scale = s ? M(s.pointers, i) : 1, e.rotation = s ? N(s.pointers, i) : 0, e.maxPointers = n.prevInput ? e.pointers.length > n.prevInput.maxPointers ? e.pointers.length : n.prevInput.maxPointers : e.pointers.length, S(n, e);
        var u = t.element;
        d(e.srcEvent.target, u) && (u = e.srcEvent.target), e.target = u
    }

    function A(t, e) {
        var n = e.center,
            i = t.offsetDelta || {},
            r = t.prevDelta || {},
            o = t.prevInput || {};
        (e.eventType === Et || o.eventType === St) && (r = t.prevDelta = {
            x: o.deltaX || 0,
            y: o.deltaY || 0
        }, i = t.offsetDelta = {
            x: n.x,
            y: n.y
        }), e.deltaX = r.x + (n.x - i.x), e.deltaY = r.y + (n.y - i.y)
    }

    function S(t, e) {
        var n, r, o, s, a = t.lastInterval || e,
            l = e.timeStamp - a.timeStamp;
        if (e.eventType != Ft && (l > Ct || a.velocity === i)) {
            var c = e.deltaX - a.deltaX,
                u = e.deltaY - a.deltaY,
                h = D(l, c, u);
            r = h.x, o = h.y, n = pt(h.x) > pt(h.y) ? h.x : h.y, s = j(c, u), t.lastInterval = e
        } else n = a.velocity, r = a.velocityX, o = a.velocityY, s = a.direction;
        e.velocity = n, e.velocityX = r, e.velocityY = o, e.direction = s
    }

    function F(t) {
        for (var e = [], n = 0; n < t.pointers.length;) e[n] = {
            clientX: ht(t.pointers[n].clientX),
            clientY: ht(t.pointers[n].clientY)
        }, n++;
        return {
            timeStamp: ft(),
            pointers: e,
            center: P(e),
            deltaX: t.deltaX,
            deltaY: t.deltaY
        }
    }

    function P(t) {
        var e = t.length;
        if (1 === e) return {
            x: ht(t[0].clientX),
            y: ht(t[0].clientY)
        };
        for (var n = 0, i = 0, r = 0; e > r;) n += t[r].clientX, i += t[r].clientY, r++;
        return {
            x: ht(n / e),
            y: ht(i / e)
        }
    }

    function D(t, e, n) {
        return {
            x: e / t || 0,
            y: n / t || 0
        }
    }

    function j(t, e) {
        return t === e ? Pt : pt(t) >= pt(e) ? 0 > t ? Dt : jt : 0 > e ? Ot : $t
    }

    function O(t, e, n) {
        n || (n = Lt);
        var i = e[n[0]] - t[n[0]],
            r = e[n[1]] - t[n[1]];
        return Math.sqrt(i * i + r * r)
    }

    function $(t, e, n) {
        n || (n = Lt);
        var i = e[n[0]] - t[n[0]],
            r = e[n[1]] - t[n[1]];
        return 180 * Math.atan2(r, i) / Math.PI
    }

    function N(t, e) {
        return $(e[1], e[0], It) + $(t[1], t[0], It)
    }

    function M(t, e) {
        return O(e[0], e[1], It) / O(t[0], t[1], It)
    }

    function R() {
        this.evEl = qt, this.evWin = Ht, this.allow = !0, this.pressed = !1, T.apply(this, arguments)
    }

    function L() {
        this.evEl = Wt, this.evWin = Yt, T.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
    }

    function I() {
        this.evTarget = Ut, this.evWin = Gt, this.started = !1, T.apply(this, arguments)
    }

    function B(t, e) {
        var n = y(t.touches),
            i = y(t.changedTouches);
        return e & (St | Ft) && (n = _(n.concat(i), "identifier", !0)), [n, i]
    }

    function q() {
        this.evTarget = Zt, this.targetIds = {}, T.apply(this, arguments)
    }

    function H(t, e) {
        var n = y(t.touches),
            i = this.targetIds;
        if (e & (Et | At) && 1 === n.length) return i[n[0].identifier] = !0, [n, n];
        var r, o, s = y(t.changedTouches),
            a = [],
            l = this.target;
        if (o = n.filter(function (t) {
                return d(t.target, l)
            }), e === Et)
            for (r = 0; r < o.length;) i[o[r].identifier] = !0, r++;
        for (r = 0; r < s.length;) i[s[r].identifier] && a.push(s[r]), e & (St | Ft) && delete i[s[r].identifier], r++;
        return a.length ? [_(o.concat(a), "identifier", !0), a] : void 0
    }

    function z() {
        T.apply(this, arguments);
        var t = c(this.handler, this);
        this.touch = new q(this.manager, t), this.mouse = new R(this.manager, t)
    }

    function X(t, e) {
        this.manager = t, this.set(e)
    }

    function W(t) {
        if (g(t, ie)) return ie;
        var e = g(t, re),
            n = g(t, oe);
        return e && n ? ie : e || n ? e ? re : oe : g(t, ne) ? ne : ee
    }

    function Y(t) {
        this.options = at({}, this.defaults, t || {}), this.id = b(), this.manager = null, this.options.enable = h(this.options.enable, !0), this.state = se, this.simultaneous = {}, this.requireFail = []
    }

    function V(t) {
        return t & he ? "cancel" : t & ce ? "end" : t & le ? "move" : t & ae ? "start" : ""
    }

    function U(t) {
        return t == $t ? "down" : t == Ot ? "up" : t == Dt ? "left" : t == jt ? "right" : ""
    }

    function G(t, e) {
        var n = e.manager;
        return n ? n.get(t) : t
    }

    function Q() {
        Y.apply(this, arguments)
    }

    function Z() {
        Q.apply(this, arguments), this.pX = null, this.pY = null
    }

    function K() {
        Q.apply(this, arguments)
    }

    function J() {
        Y.apply(this, arguments), this._timer = null, this._input = null
    }

    function tt() {
        Q.apply(this, arguments)
    }

    function et() {
        Q.apply(this, arguments)
    }

    function nt() {
        Y.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
    }

    function it(t, e) {
        return e = e || {}, e.recognizers = h(e.recognizers, it.defaults.preset), new rt(t, e)
    }

    function rt(t, e) {
        this.options = at({}, it.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.element = t, this.input = k(this), this.touchAction = new X(this, this.options.touchAction), ot(this, !0), s(this.options.recognizers, function (t) {
            var e = this.add(new t[0](t[1]));
            t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3])
        }, this)
    }

    function ot(t, e) {
        var n = t.element;
        n.style && s(t.options.cssProps, function (t, i) {
            n.style[x(n.style, i)] = e ? t : ""
        })
    }

    function st(t, n) {
        var i = e.createEvent("Event");
        i.initEvent(t, !0, !0), i.gesture = n, n.target.dispatchEvent(i)
    }
    var at, lt = ["", "webkit", "Moz", "MS", "ms", "o"],
        ct = e.createElement("div"),
        ut = "function",
        ht = Math.round,
        pt = Math.abs,
        ft = Date.now;
    at = "function" != typeof Object.assign ? function (t) {
        if (t === i || null === t) throw new TypeError("Cannot convert undefined or null to object");
        for (var e = Object(t), n = 1; n < arguments.length; n++) {
            var r = arguments[n];
            if (r !== i && null !== r)
                for (var o in r) r.hasOwnProperty(o) && (e[o] = r[o])
        }
        return e
    } : Object.assign;
    var dt = a(function (t, e, n) {
            for (var r = Object.keys(e), o = 0; o < r.length;)(!n || n && t[r[o]] === i) && (t[r[o]] = e[r[o]]), o++;
            return t
        }, "extend", "Use `assign`."),
        gt = a(function (t, e) {
            return dt(t, e, !0)
        }, "merge", "Use `assign`."),
        mt = 1,
        vt = /mobile|tablet|ip(ad|hone|od)|android/i,
        yt = "ontouchstart" in t,
        _t = x(t, "PointerEvent") !== i,
        xt = yt && vt.test(navigator.userAgent),
        bt = "touch",
        wt = "pen",
        Tt = "mouse",
        kt = "kinect",
        Ct = 25,
        Et = 1,
        At = 2,
        St = 4,
        Ft = 8,
        Pt = 1,
        Dt = 2,
        jt = 4,
        Ot = 8,
        $t = 16,
        Nt = Dt | jt,
        Mt = Ot | $t,
        Rt = Nt | Mt,
        Lt = ["x", "y"],
        It = ["clientX", "clientY"];
    T.prototype = {
        handler: function () {},
        init: function () {
            this.evEl && p(this.element, this.evEl, this.domHandler), this.evTarget && p(this.target, this.evTarget, this.domHandler), this.evWin && p(w(this.element), this.evWin, this.domHandler)
        },
        destroy: function () {
            this.evEl && f(this.element, this.evEl, this.domHandler), this.evTarget && f(this.target, this.evTarget, this.domHandler), this.evWin && f(w(this.element), this.evWin, this.domHandler)
        }
    };
    var Bt = {
            mousedown: Et,
            mousemove: At,
            mouseup: St
        },
        qt = "mousedown",
        Ht = "mousemove mouseup";
    l(R, T, {
        handler: function (t) {
            var e = Bt[t.type];
            e & Et && 0 === t.button && (this.pressed = !0), e & At && 1 !== t.which && (e = St), this.pressed && this.allow && (e & St && (this.pressed = !1), this.callback(this.manager, e, {
                pointers: [t],
                changedPointers: [t],
                pointerType: Tt,
                srcEvent: t
            }))
        }
    });
    var zt = {
            pointerdown: Et,
            pointermove: At,
            pointerup: St,
            pointercancel: Ft,
            pointerout: Ft
        },
        Xt = {
            2: bt,
            3: wt,
            4: Tt,
            5: kt
        },
        Wt = "pointerdown",
        Yt = "pointermove pointerup pointercancel";
    t.MSPointerEvent && !t.PointerEvent && (Wt = "MSPointerDown", Yt = "MSPointerMove MSPointerUp MSPointerCancel"), l(L, T, {
        handler: function (t) {
            var e = this.store,
                n = !1,
                i = t.type.toLowerCase().replace("ms", ""),
                r = zt[i],
                o = Xt[t.pointerType] || t.pointerType,
                s = o == bt,
                a = v(e, t.pointerId, "pointerId");
            r & Et && (0 === t.button || s) ? 0 > a && (e.push(t), a = e.length - 1) : r & (St | Ft) && (n = !0), 0 > a || (e[a] = t, this.callback(this.manager, r, {
                pointers: e,
                changedPointers: [t],
                pointerType: o,
                srcEvent: t
            }), n && e.splice(a, 1))
        }
    });
    var Vt = {
            touchstart: Et,
            touchmove: At,
            touchend: St,
            touchcancel: Ft
        },
        Ut = "touchstart",
        Gt = "touchstart touchmove touchend touchcancel";
    l(I, T, {
        handler: function (t) {
            var e = Vt[t.type];
            if (e === Et && (this.started = !0), this.started) {
                var n = B.call(this, t, e);
                e & (St | Ft) && n[0].length - n[1].length === 0 && (this.started = !1), this.callback(this.manager, e, {
                    pointers: n[0],
                    changedPointers: n[1],
                    pointerType: bt,
                    srcEvent: t
                })
            }
        }
    });
    var Qt = {
            touchstart: Et,
            touchmove: At,
            touchend: St,
            touchcancel: Ft
        },
        Zt = "touchstart touchmove touchend touchcancel";
    l(q, T, {
        handler: function (t) {
            var e = Qt[t.type],
                n = H.call(this, t, e);
            n && this.callback(this.manager, e, {
                pointers: n[0],
                changedPointers: n[1],
                pointerType: bt,
                srcEvent: t
            })
        }
    }), l(z, T, {
        handler: function (t, e, n) {
            var i = n.pointerType == bt,
                r = n.pointerType == Tt;
            if (i) this.mouse.allow = !1;
            else if (r && !this.mouse.allow) return;
            e & (St | Ft) && (this.mouse.allow = !0), this.callback(t, e, n)
        },
        destroy: function () {
            this.touch.destroy(), this.mouse.destroy()
        }
    });
    var Kt = x(ct.style, "touchAction"),
        Jt = Kt !== i,
        te = "compute",
        ee = "auto",
        ne = "manipulation",
        ie = "none",
        re = "pan-x",
        oe = "pan-y";
    X.prototype = {
        set: function (t) {
            t == te && (t = this.compute()), Jt && this.manager.element.style && (this.manager.element.style[Kt] = t), this.actions = t.toLowerCase().trim()
        },
        update: function () {
            this.set(this.manager.options.touchAction)
        },
        compute: function () {
            var t = [];
            return s(this.manager.recognizers, function (e) {
                u(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
            }), W(t.join(" "))
        },
        preventDefaults: function (t) {
            if (!Jt) {
                var e = t.srcEvent,
                    n = t.offsetDirection;
                if (this.manager.session.prevented) return void e.preventDefault();
                var i = this.actions,
                    r = g(i, ie),
                    o = g(i, oe),
                    s = g(i, re);
                if (r) {
                    var a = 1 === t.pointers.length,
                        l = t.distance < 2,
                        c = t.deltaTime < 250;
                    if (a && l && c) return
                }
                if (!s || !o) return r || o && n & Nt || s && n & Mt ? this.preventSrc(e) : void 0
            }
        },
        preventSrc: function (t) {
            this.manager.session.prevented = !0, t.preventDefault()
        }
    };
    var se = 1,
        ae = 2,
        le = 4,
        ce = 8,
        ue = ce,
        he = 16,
        pe = 32;
    Y.prototype = {
        defaults: {},
        set: function (t) {
            return at(this.options, t), this.manager && this.manager.touchAction.update(), this
        },
        recognizeWith: function (t) {
            if (o(t, "recognizeWith", this)) return this;
            var e = this.simultaneous;
            return t = G(t, this), e[t.id] || (e[t.id] = t, t.recognizeWith(this)), this
        },
        dropRecognizeWith: function (t) {
            return o(t, "dropRecognizeWith", this) ? this : (t = G(t, this), delete this.simultaneous[t.id], this)
        },
        requireFailure: function (t) {
            if (o(t, "requireFailure", this)) return this;
            var e = this.requireFail;
            return t = G(t, this), -1 === v(e, t) && (e.push(t), t.requireFailure(this)), this
        },
        dropRequireFailure: function (t) {
            if (o(t, "dropRequireFailure", this)) return this;
            t = G(t, this);
            var e = v(this.requireFail, t);
            return e > -1 && this.requireFail.splice(e, 1), this
        },
        hasRequireFailures: function () {
            return this.requireFail.length > 0
        },
        canRecognizeWith: function (t) {
            return !!this.simultaneous[t.id]
        },
        emit: function (t) {
            function e(e) {
                n.manager.emit(e, t)
            }
            var n = this,
                i = this.state;
            ce > i && e(n.options.event + V(i)), e(n.options.event), t.additionalEvent && e(t.additionalEvent), i >= ce && e(n.options.event + V(i))
        },
        tryEmit: function (t) {
            return this.canEmit() ? this.emit(t) : void(this.state = pe)
        },
        canEmit: function () {
            for (var t = 0; t < this.requireFail.length;) {
                if (!(this.requireFail[t].state & (pe | se))) return !1;
                t++
            }
            return !0
        },
        recognize: function (t) {
            var e = at({}, t);
            return u(this.options.enable, [this, e]) ? (this.state & (ue | he | pe) && (this.state = se), this.state = this.process(e), void(this.state & (ae | le | ce | he) && this.tryEmit(e))) : (this.reset(), void(this.state = pe))
        },
        process: function (t) {},
        getTouchAction: function () {},
        reset: function () {}
    }, l(Q, Y, {
        defaults: {
            pointers: 1
        },
        attrTest: function (t) {
            var e = this.options.pointers;
            return 0 === e || t.pointers.length === e
        },
        process: function (t) {
            var e = this.state,
                n = t.eventType,
                i = e & (ae | le),
                r = this.attrTest(t);
            return i && (n & Ft || !r) ? e | he : i || r ? n & St ? e | ce : e & ae ? e | le : ae : pe
        }
    }), l(Z, Q, {
        defaults: {
            event: "pan",
            threshold: 10,
            pointers: 1,
            direction: Rt
        },
        getTouchAction: function () {
            var t = this.options.direction,
                e = [];
            return t & Nt && e.push(oe), t & Mt && e.push(re), e
        },
        directionTest: function (t) {
            var e = this.options,
                n = !0,
                i = t.distance,
                r = t.direction,
                o = t.deltaX,
                s = t.deltaY;
            return r & e.direction || (e.direction & Nt ? (r = 0 === o ? Pt : 0 > o ? Dt : jt, n = o != this.pX, i = Math.abs(t.deltaX)) : (r = 0 === s ? Pt : 0 > s ? Ot : $t, n = s != this.pY, i = Math.abs(t.deltaY))), t.direction = r, n && i > e.threshold && r & e.direction
        },
        attrTest: function (t) {
            return Q.prototype.attrTest.call(this, t) && (this.state & ae || !(this.state & ae) && this.directionTest(t))
        },
        emit: function (t) {
            this.pX = t.deltaX, this.pY = t.deltaY;
            var e = U(t.direction);
            e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t)
        }
    }), l(K, Q, {
        defaults: {
            event: "pinch",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function () {
            return [ie]
        },
        attrTest: function (t) {
            return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & ae)
        },
        emit: function (t) {
            if (1 !== t.scale) {
                var e = t.scale < 1 ? "in" : "out";
                t.additionalEvent = this.options.event + e
            }
            this._super.emit.call(this, t)
        }
    }), l(J, Y, {
        defaults: {
            event: "press",
            pointers: 1,
            time: 251,
            threshold: 9
        },
        getTouchAction: function () {
            return [ee]
        },
        process: function (t) {
            var e = this.options,
                n = t.pointers.length === e.pointers,
                i = t.distance < e.threshold,
                o = t.deltaTime > e.time;
            if (this._input = t, !i || !n || t.eventType & (St | Ft) && !o) this.reset();
            else if (t.eventType & Et) this.reset(), this._timer = r(function () {
                this.state = ue, this.tryEmit()
            }, e.time, this);
            else if (t.eventType & St) return ue;
            return pe
        },
        reset: function () {
            clearTimeout(this._timer)
        },
        emit: function (t) {
            this.state === ue && (t && t.eventType & St ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = ft(), this.manager.emit(this.options.event, this._input)))
        }
    }), l(tt, Q, {
        defaults: {
            event: "rotate",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function () {
            return [ie]
        },
        attrTest: function (t) {
            return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & ae)
        }
    }), l(et, Q, {
        defaults: {
            event: "swipe",
            threshold: 10,
            velocity: .3,
            direction: Nt | Mt,
            pointers: 1
        },
        getTouchAction: function () {
            return Z.prototype.getTouchAction.call(this)
        },
        attrTest: function (t) {
            var e, n = this.options.direction;
            return n & (Nt | Mt) ? e = t.overallVelocity : n & Nt ? e = t.overallVelocityX : n & Mt && (e = t.overallVelocityY), this._super.attrTest.call(this, t) && n & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && pt(e) > this.options.velocity && t.eventType & St
        },
        emit: function (t) {
            var e = U(t.offsetDirection);
            e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
        }
    }), l(nt, Y, {
        defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 9,
            posThreshold: 10
        },
        getTouchAction: function () {
            return [ne]
        },
        process: function (t) {
            var e = this.options,
                n = t.pointers.length === e.pointers,
                i = t.distance < e.threshold,
                o = t.deltaTime < e.time;
            if (this.reset(), t.eventType & Et && 0 === this.count) return this.failTimeout();
            if (i && o && n) {
                if (t.eventType != St) return this.failTimeout();
                var s = !this.pTime || t.timeStamp - this.pTime < e.interval,
                    a = !this.pCenter || O(this.pCenter, t.center) < e.posThreshold;
                this.pTime = t.timeStamp, this.pCenter = t.center, a && s ? this.count += 1 : this.count = 1, this._input = t;
                var l = this.count % e.taps;
                if (0 === l) return this.hasRequireFailures() ? (this._timer = r(function () {
                    this.state = ue, this.tryEmit()
                }, e.interval, this), ae) : ue
            }
            return pe
        },
        failTimeout: function () {
            return this._timer = r(function () {
                this.state = pe
            }, this.options.interval, this), pe
        },
        reset: function () {
            clearTimeout(this._timer)
        },
        emit: function () {
            this.state == ue && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
        }
    }), it.VERSION = "2.0.6", it.defaults = {
        domEvents: !1,
        touchAction: te,
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [[tt, {
            enable: !1
        }], [K, {
            enable: !1
        }, ["rotate"]], [et, {
            direction: Nt
        }], [Z, {
            direction: Nt
        }, ["swipe"]], [nt], [nt, {
            event: "doubletap",
            taps: 2
        }, ["tap"]], [J]],
        cssProps: {
            userSelect: "none",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    };
    var fe = 1,
        de = 2;
    rt.prototype = {
        set: function (t) {
            return at(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this
        },
        stop: function (t) {
            this.session.stopped = t ? de : fe
        },
        recognize: function (t) {
            var e = this.session;
            if (!e.stopped) {
                this.touchAction.preventDefaults(t);
                var n, i = this.recognizers,
                    r = e.curRecognizer;
                (!r || r && r.state & ue) && (r = e.curRecognizer = null);
                for (var o = 0; o < i.length;) n = i[o], e.stopped === de || r && n != r && !n.canRecognizeWith(r) ? n.reset() : n.recognize(t), !r && n.state & (ae | le | ce) && (r = e.curRecognizer = n), o++
            }
        },
        get: function (t) {
            if (t instanceof Y) return t;
            for (var e = this.recognizers, n = 0; n < e.length; n++)
                if (e[n].options.event == t) return e[n];
            return null
        },
        add: function (t) {
            if (o(t, "add", this)) return this;
            var e = this.get(t.options.event);
            return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t
        },
        remove: function (t) {
            if (o(t, "remove", this)) return this;
            if (t = this.get(t)) {
                var e = this.recognizers,
                    n = v(e, t); - 1 !== n && (e.splice(n, 1), this.touchAction.update())
            }
            return this
        },
        on: function (t, e) {
            var n = this.handlers;
            return s(m(t), function (t) {
                n[t] = n[t] || [], n[t].push(e)
            }), this
        },
        off: function (t, e) {
            var n = this.handlers;
            return s(m(t), function (t) {
                e ? n[t] && n[t].splice(v(n[t], e), 1) : delete n[t]
            }), this
        },
        emit: function (t, e) {
            this.options.domEvents && st(t, e);
            var n = this.handlers[t] && this.handlers[t].slice();
            if (n && n.length) {
                e.type = t, e.preventDefault = function () {
                    e.srcEvent.preventDefault()
                };
                for (var i = 0; i < n.length;) n[i](e), i++
            }
        },
        destroy: function () {
            this.element && ot(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
        }
    }, at(it, {
        INPUT_START: Et,
        INPUT_MOVE: At,
        INPUT_END: St,
        INPUT_CANCEL: Ft,
        STATE_POSSIBLE: se,
        STATE_BEGAN: ae,
        STATE_CHANGED: le,
        STATE_ENDED: ce,
        STATE_RECOGNIZED: ue,
        STATE_CANCELLED: he,
        STATE_FAILED: pe,
        DIRECTION_NONE: Pt,
        DIRECTION_LEFT: Dt,
        DIRECTION_RIGHT: jt,
        DIRECTION_UP: Ot,
        DIRECTION_DOWN: $t,
        DIRECTION_HORIZONTAL: Nt,
        DIRECTION_VERTICAL: Mt,
        DIRECTION_ALL: Rt,
        Manager: rt,
        Input: T,
        TouchAction: X,
        TouchInput: q,
        MouseInput: R,
        PointerEventInput: L,
        TouchMouseInput: z,
        SingleTouchInput: I,
        Recognizer: Y,
        AttrRecognizer: Q,
        Tap: nt,
        Pan: Z,
        Swipe: et,
        Pinch: K,
        Rotate: tt,
        Press: J,
        on: p,
        off: f,
        each: s,
        merge: gt,
        extend: dt,
        assign: at,
        inherit: l,
        bindFn: c,
        prefixed: x
    });
    var ge = "undefined" != typeof t ? t : "undefined" != typeof self ? self : {};
    ge.Hammer = it, "function" == typeof define && define.amd ? define(function () {
        return it
    }) : "undefined" != typeof module && module.exports ? module.exports = it : t[n] = it
}(window, document, "Hammer"),
function (t) {
    "use strict";
    var e, n, i, r, o, s = t.GreenSockGlobals || t,
        a = function (t) {
            var e, n = t.split("."),
                i = s;
            for (e = 0; n.length > e; e++) i[n[e]] = i = i[n[e]] || {};
            return i
        },
        l = a("com.greensock"),
        c = [].slice,
        u = function () {},
        h = {},
        p = function (e, n, i, r) {
            this.sc = h[e] ? h[e].sc : [], h[e] = this, this.gsClass = null, this.func = i;
            var o = [];
            this.check = function (l) {
                for (var c, u, f, d, g = n.length, m = g; --g > -1;)(c = h[n[g]] || new p(n[g], [])).gsClass ? (o[g] = c.gsClass, m--) : l && c.sc.push(this);
                if (0 === m && i)
                    for (u = ("com.greensock." + e).split("."), f = u.pop(), d = a(u.join("."))[f] = this.gsClass = i.apply(i, o), r && (s[f] = d, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + e.split(".").join("/"), [], function () {
                            return d
                        }) : "undefined" != typeof module && module.exports && (module.exports = d)), g = 0; this.sc.length > g; g++) this.sc[g].check()
            }, this.check(!0)
        },
        f = t._gsDefine = function (t, e, n, i) {
            return new p(t, e, n, i)
        },
        d = l._class = function (t, e, n) {
            return e = e || function () {}, f(t, [], function () {
                return e
            }, n), e
        };
    f.globals = s;
    var g = [0, 0, 1, 1],
        m = [],
        v = d("easing.Ease", function (t, e, n, i) {
            this._func = t, this._type = n || 0, this._power = i || 0, this._params = e ? g.concat(e) : g
        }, !0),
        y = v.map = {},
        _ = v.register = function (t, e, n, i) {
            for (var r, o, s, a, c = e.split(","), u = c.length, h = (n || "easeIn,easeOut,easeInOut").split(","); --u > -1;)
                for (o = c[u], r = i ? d("easing." + o, null, !0) : l.easing[o] || {}, s = h.length; --s > -1;) a = h[s], y[o + "." + a] = y[a + o] = r[a] = t.getRatio ? t : t[a] || new t
        };
    for (i = v.prototype, i._calcEnd = !1, i.getRatio = function (t) {
            if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
            var e = this._type,
                n = this._power,
                i = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
            return 1 === n ? i *= i : 2 === n ? i *= i * i : 3 === n ? i *= i * i * i : 4 === n && (i *= i * i * i * i), 1 === e ? 1 - i : 2 === e ? i : .5 > t ? i / 2 : 1 - i / 2
        }, e = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], n = e.length; --n > -1;) i = e[n] + ",Power" + n, _(new v(null, null, 1, n), i, "easeOut", !0), _(new v(null, null, 2, n), i, "easeIn" + (0 === n ? ",easeNone" : "")), _(new v(null, null, 3, n), i, "easeInOut");
    y.linear = l.easing.Linear.easeIn, y.swing = l.easing.Quad.easeInOut;
    var x = d("events.EventDispatcher", function (t) {
        this._listeners = {}, this._eventTarget = t || this
    });
    i = x.prototype, i.addEventListener = function (t, e, n, i, s) {
        s = s || 0;
        var a, l, c = this._listeners[t],
            u = 0;
        for (null == c && (this._listeners[t] = c = []), l = c.length; --l > -1;) a = c[l], a.c === e && a.s === n ? c.splice(l, 1) : 0 === u && s > a.pr && (u = l + 1);
        c.splice(u, 0, {
            c: e,
            s: n,
            up: i,
            pr: s
        }), this !== r || o || r.wake()
    }, i.removeEventListener = function (t, e) {
        var n, i = this._listeners[t];
        if (i)
            for (n = i.length; --n > -1;)
                if (i[n].c === e) return void i.splice(n, 1)
    }, i.dispatchEvent = function (t) {
        var e, n, i, r = this._listeners[t];
        if (r)
            for (e = r.length, n = this._eventTarget; --e > -1;) i = r[e], i.up ? i.c.call(i.s || n, {
                type: t,
                target: n
            }) : i.c.call(i.s || n)
    };
    var b = t.requestAnimationFrame,
        w = t.cancelAnimationFrame,
        T = Date.now || function () {
            return (new Date).getTime()
        },
        k = T();
    for (e = ["ms", "moz", "webkit", "o"], n = e.length; --n > -1 && !b;) b = t[e[n] + "RequestAnimationFrame"], w = t[e[n] + "CancelAnimationFrame"] || t[e[n] + "CancelRequestAnimationFrame"];
    d("Ticker", function (t, e) {
        var n, i, s, a, l, c = this,
            h = T(),
            p = e !== !1 && b,
            f = function (t) {
                k = T(), c.time = (k - h) / 1e3;
                var e, r = c.time - l;
                (!n || r > 0 || t === !0) && (c.frame++, l += r + (r >= a ? .004 : a - r), e = !0), t !== !0 && (s = i(f)), e && c.dispatchEvent("tick")
            };
        x.call(c), this.time = this.frame = 0, this.tick = function () {
            f(!0)
        }, this.sleep = function () {
            null != s && (p && w ? w(s) : clearTimeout(s), i = u, s = null, c === r && (o = !1))
        }, this.wake = function () {
            null !== s && c.sleep(), i = 0 === n ? u : p && b ? b : function (t) {
                return setTimeout(t, 0 | 1e3 * (l - c.time) + 1)
            }, c === r && (o = !0), f(2)
        }, this.fps = function (t) {
            return arguments.length ? (n = t, a = 1 / (n || 60), l = this.time + a, void c.wake()) : n
        }, this.useRAF = function (t) {
            return arguments.length ? (c.sleep(), p = t, void c.fps(n)) : p
        }, c.fps(t), setTimeout(function () {
            p && (!s || 5 > c.frame) && c.useRAF(!1)
        }, 1500)
    }), i = l.Ticker.prototype = new l.events.EventDispatcher, i.constructor = l.Ticker;
    var C = d("core.Animation", function (t, e) {
        if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, L) {
            o || r.wake();
            var n = this.vars.useFrames ? R : L;
            n.add(this, n._time), this.vars.paused && this.paused(!0)
        }
    });
    r = C.ticker = new l.Ticker, i = C.prototype, i._dirty = i._gc = i._initted = i._paused = !1, i._totalTime = i._time = 0, i._rawPrevTime = -1, i._next = i._last = i._onUpdate = i._timeline = i.timeline = null, i._paused = !1;
    var E = function () {
        T() - k > 2e3 && r.wake(), setTimeout(E, 2e3)
    };
    E(), i.play = function (t, e) {
        return arguments.length && this.seek(t, e), this.reversed(!1).paused(!1)
    }, i.pause = function (t, e) {
        return arguments.length && this.seek(t, e), this.paused(!0)
    }, i.resume = function (t, e) {
        return arguments.length && this.seek(t, e), this.paused(!1)
    }, i.seek = function (t, e) {
        return this.totalTime(Number(t), e !== !1)
    }, i.restart = function (t, e) {
        return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
    }, i.reverse = function (t, e) {
        return arguments.length && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
    }, i.render = function () {}, i.invalidate = function () {
        return this
    }, i._enabled = function (t, e) {
        return o || r.wake(), this._gc = !t, this._active = t && !this._paused && this._totalTime > 0 && this._totalTime < this._totalDuration, e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
    }, i._kill = function () {
        return this._enabled(!1, !1)
    }, i.kill = function (t, e) {
        return this._kill(t, e), this
    }, i._uncache = function (t) {
        for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
        return this
    }, i._swapSelfInParams = function (t) {
        for (var e = t.length, n = t.concat(); --e > -1;) "{self}" === t[e] && (n[e] = this);
        return n
    }, i.eventCallback = function (t, e, n, i) {
        if ("on" === (t || "").substr(0, 2)) {
            var r = this.vars;
            if (1 === arguments.length) return r[t];
            null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = n instanceof Array && -1 !== n.join("").indexOf("{self}") ? this._swapSelfInParams(n) : n, r[t + "Scope"] = i), "onUpdate" === t && (this._onUpdate = e)
        }
        return this
    }, i.delay = function (t) {
        return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
    }, i.duration = function (t) {
        return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
    }, i.totalDuration = function (t) {
        return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
    }, i.time = function (t, e) {
        return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
    }, i.totalTime = function (t, e, n) {
        if (o || r.wake(), !arguments.length) return this._totalTime;
        if (this._timeline) {
            if (0 > t && !n && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                this._dirty && this.totalDuration();
                var i = this._totalDuration,
                    s = this._timeline;
                if (t > i && !n && (t = i), this._startTime = (this._paused ? this._pauseTime : s._time) - (this._reversed ? i - t : t) / this._timeScale, s._dirty || this._uncache(!1), s._timeline)
                    for (; s._timeline;) s._timeline._time !== (s._startTime + s._totalTime) / s._timeScale && s.totalTime(s._totalTime, !0), s = s._timeline
            }
            this._gc && this._enabled(!0, !1), this._totalTime !== t && this.render(t, e, !1);
        }
        return this
    }, i.startTime = function (t) {
        return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
    }, i.timeScale = function (t) {
        if (!arguments.length) return this._timeScale;
        if (t = t || 1e-6, this._timeline && this._timeline.smoothChildTiming) {
            var e = this._pauseTime,
                n = e || 0 === e ? e : this._timeline.totalTime();
            this._startTime = n - (n - this._startTime) * this._timeScale / t
        }
        return this._timeScale = t, this._uncache(!1)
    }, i.reversed = function (t) {
        return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._totalTime, !0)), this) : this._reversed
    }, i.paused = function (t) {
        if (!arguments.length) return this._paused;
        if (t != this._paused && this._timeline) {
            o || t || r.wake();
            var e = this._timeline,
                n = e.rawTime(),
                i = n - this._pauseTime;
            !t && e.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? n : null, this._paused = t, this._active = !t && this._totalTime > 0 && this._totalTime < this._totalDuration, t || 0 === i || 0 === this._duration || this.render(e.smoothChildTiming ? this._totalTime : (n - this._startTime) / this._timeScale, !0, !0)
        }
        return this._gc && !t && this._enabled(!0, !1), this
    };
    var A = d("core.SimpleTimeline", function (t) {
        C.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
    });
    i = A.prototype = new C, i.constructor = A, i.kill()._gc = !1, i._first = i._last = null, i._sortChildren = !1, i.add = i.insert = function (t, e) {
        var n, i;
        if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), n = this._last, this._sortChildren)
            for (i = t._startTime; n && n._startTime > i;) n = n._prev;
        return n ? (t._next = n._next, n._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = n, this._timeline && this._uncache(!0), this
    }, i._remove = function (t, e) {
        return t.timeline === this && (e || t._enabled(!1, !0), t.timeline = null, t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), this._timeline && this._uncache(!0)), this
    }, i.render = function (t, e, n) {
        var i, r = this._first;
        for (this._totalTime = this._time = this._rawPrevTime = t; r;) i = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, n) : r.render((t - r._startTime) * r._timeScale, e, n)), r = i
    }, i.rawTime = function () {
        return o || r.wake(), this._totalTime
    };
    var S = d("TweenLite", function (e, n, i) {
            if (C.call(this, n, i), this.render = S.prototype.render, null == e) throw "Cannot tween a null target.";
            this.target = e = "string" != typeof e ? e : S.selector(e) || e;
            var r, o, s, a = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                l = this.vars.overwrite;
            if (this._overwrite = l = null == l ? M[S.defaultOverwrite] : "number" == typeof l ? l >> 0 : M[l], (a || e instanceof Array) && "number" != typeof e[0])
                for (this._targets = s = c.call(e, 0), this._propLookup = [], this._siblings = [], r = 0; s.length > r; r++) o = s[r], o ? "string" != typeof o ? o.length && o !== t && o[0] && (o[0] === t || o[0].nodeType && o[0].style && !o.nodeType) ? (s.splice(r--, 1), this._targets = s = s.concat(c.call(o, 0))) : (this._siblings[r] = I(o, this, !1), 1 === l && this._siblings[r].length > 1 && B(o, this, null, 1, this._siblings[r])) : (o = s[r--] = S.selector(o), "string" == typeof o && s.splice(r + 1, 1)) : s.splice(r--, 1);
            else this._propLookup = {}, this._siblings = I(e, this, !1), 1 === l && this._siblings.length > 1 && B(e, this, null, 1, this._siblings);
            (this.vars.immediateRender || 0 === n && 0 === this._delay && this.vars.immediateRender !== !1) && this.render(-this._delay, !1, !0)
        }, !0),
        F = function (e) {
            return e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
        },
        P = function (t, e) {
            var n, i = {};
            for (n in t) N[n] || n in e && "x" !== n && "y" !== n && "width" !== n && "height" !== n && "className" !== n && "border" !== n || !(!j[n] || j[n] && j[n]._autoCSS) || (i[n] = t[n], delete t[n]);
            t.css = i
        };
    i = S.prototype = new C, i.constructor = S, i.kill()._gc = !1, i.ratio = 0, i._firstPT = i._targets = i._overwrittenProps = i._startAt = null, i._notifyPluginsOfEnabled = !1, S.version = "1.10.2", S.defaultEase = i._ease = new v(null, null, 1, 1), S.defaultOverwrite = "auto", S.ticker = r, S.autoSleep = !0, S.selector = t.$ || t.jQuery || function (e) {
        return t.$ ? (S.selector = t.$, t.$(e)) : t.document ? t.document.getElementById("#" === e.charAt(0) ? e.substr(1) : e) : e
    };
    var D = S._internals = {},
        j = S._plugins = {},
        O = S._tweenLookup = {},
        $ = 0,
        N = D.reservedProps = {
            ease: 1,
            delay: 1,
            overwrite: 1,
            onComplete: 1,
            onCompleteParams: 1,
            onCompleteScope: 1,
            useFrames: 1,
            runBackwards: 1,
            startAt: 1,
            onUpdate: 1,
            onUpdateParams: 1,
            onUpdateScope: 1,
            onStart: 1,
            onStartParams: 1,
            onStartScope: 1,
            onReverseComplete: 1,
            onReverseCompleteParams: 1,
            onReverseCompleteScope: 1,
            onRepeat: 1,
            onRepeatParams: 1,
            onRepeatScope: 1,
            easeParams: 1,
            yoyo: 1,
            immediateRender: 1,
            repeat: 1,
            repeatDelay: 1,
            data: 1,
            paused: 1,
            reversed: 1,
            autoCSS: 1
        },
        M = {
            none: 0,
            all: 1,
            auto: 2,
            concurrent: 3,
            allOnStart: 4,
            preexisting: 5,
            "true": 1,
            "false": 0
        },
        R = C._rootFramesTimeline = new A,
        L = C._rootTimeline = new A;
    L._startTime = r.time, R._startTime = r.frame, L._active = R._active = !0, C._updateRoot = function () {
        if (L.render((r.time - L._startTime) * L._timeScale, !1, !1), R.render((r.frame - R._startTime) * R._timeScale, !1, !1), !(r.frame % 120)) {
            var t, e, n;
            for (n in O) {
                for (e = O[n].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                0 === e.length && delete O[n]
            }
            if (n = L._first, (!n || n._paused) && S.autoSleep && !R._first && 1 === r._listeners.tick.length) {
                for (; n && n._paused;) n = n._next;
                n || r.sleep()
            }
        }
    }, r.addEventListener("tick", C._updateRoot);
    var I = function (t, e, n) {
            var i, r, o = t._gsTweenID;
            if (O[o || (t._gsTweenID = o = "t" + $++)] || (O[o] = {
                    target: t,
                    tweens: []
                }), e && (i = O[o].tweens, i[r = i.length] = e, n))
                for (; --r > -1;) i[r] === e && i.splice(r, 1);
            return O[o].tweens
        },
        B = function (t, e, n, i, r) {
            var o, s, a, l;
            if (1 === i || i >= 4) {
                for (l = r.length, o = 0; l > o; o++)
                    if ((a = r[o]) !== e) a._gc || a._enabled(!1, !1) && (s = !0);
                    else if (5 === i) break;
                return s
            }
            var c, u = e._startTime + 1e-10,
                h = [],
                p = 0,
                f = 0 === e._duration;
            for (o = r.length; --o > -1;)(a = r[o]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (c = c || q(e, 0, f), 0 === q(a, c, f) && (h[p++] = a)) : u >= a._startTime && a._startTime + a.totalDuration() / a._timeScale + 1e-10 > u && ((f || !a._initted) && 2e-10 >= u - a._startTime || (h[p++] = a)));
            for (o = p; --o > -1;) a = h[o], 2 === i && a._kill(n, t) && (s = !0), (2 !== i || !a._firstPT && a._initted) && a._enabled(!1, !1) && (s = !0);
            return s
        },
        q = function (t, e, n) {
            for (var i = t._timeline, r = i._timeScale, o = t._startTime, s = 1e-10; i._timeline;) {
                if (o += i._startTime, r *= i._timeScale, i._paused) return -100;
                i = i._timeline
            }
            return o /= r, o > e ? o - e : n && o === e || !t._initted && 2 * s > o - e ? s : (o += t.totalDuration() / t._timeScale / r) > e + s ? 0 : o - e - s
        };
    i._init = function () {
        var t, e, n, i, r = this.vars,
            o = this._overwrittenProps,
            s = this._duration,
            a = r.immediateRender,
            l = r.ease;
        if (r.startAt) {
            if (this._startAt && this._startAt.render(-1, !0), r.startAt.overwrite = 0, r.startAt.immediateRender = !0, this._startAt = S.to(this.target, 0, r.startAt), a)
                if (this._time > 0) this._startAt = null;
                else if (0 !== s) return
        } else if (r.runBackwards && r.immediateRender && 0 !== s)
            if (this._startAt) this._startAt.render(-1, !0), this._startAt = null;
            else if (0 === this._time) {
            n = {};
            for (i in r) N[i] && "autoCSS" !== i || (n[i] = r[i]);
            return n.overwrite = 0, void(this._startAt = S.to(this.target, 0, n))
        }
        if (this._ease = l ? l instanceof v ? r.easeParams instanceof Array ? l.config.apply(l, r.easeParams) : l : "function" == typeof l ? new v(l, r.easeParams) : y[l] || S.defaultEase : S.defaultEase, this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
            for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], o ? o[t] : null) && (e = !0);
        else e = this._initProps(this.target, this._propLookup, this._siblings, o);
        if (e && S._onPluginEvent("_onInitAllProps", this), o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), r.runBackwards)
            for (n = this._firstPT; n;) n.s += n.c, n.c = -n.c, n = n._next;
        this._onUpdate = r.onUpdate, this._initted = !0
    }, i._initProps = function (e, n, i, r) {
        var o, s, a, l, c, u;
        if (null == e) return !1;
        this.vars.css || e.style && e !== t && e.nodeType && j.css && this.vars.autoCSS !== !1 && P(this.vars, e);
        for (o in this.vars) {
            if (u = this.vars[o], N[o]) u instanceof Array && -1 !== u.join("").indexOf("{self}") && (this.vars[o] = u = this._swapSelfInParams(u, this));
            else if (j[o] && (l = new j[o])._onInitTween(e, this.vars[o], this)) {
                for (this._firstPT = c = {
                        _next: this._firstPT,
                        t: l,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: !0,
                        n: o,
                        pg: !0,
                        pr: l._priority
                    }, s = l._overwriteProps.length; --s > -1;) n[l._overwriteProps[s]] = this._firstPT;
                (l._priority || l._onInitAllProps) && (a = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0)
            } else this._firstPT = n[o] = c = {
                _next: this._firstPT,
                t: e,
                p: o,
                f: "function" == typeof e[o],
                n: o,
                pg: !1,
                pr: 0
            }, c.s = c.f ? e[o.indexOf("set") || "function" != typeof e["get" + o.substr(3)] ? o : "get" + o.substr(3)]() : parseFloat(e[o]), c.c = "string" == typeof u && "=" === u.charAt(1) ? parseInt(u.charAt(0) + "1", 10) * Number(u.substr(2)) : Number(u) - c.s || 0;
            c && c._next && (c._next._prev = c)
        }
        return r && this._kill(r, e) ? this._initProps(e, n, i, r) : this._overwrite > 1 && this._firstPT && i.length > 1 && B(e, this, n, this._overwrite, i) ? (this._kill(n, e), this._initProps(e, n, i, r)) : a
    }, i.render = function (t, e, n) {
        var i, r, o, s = this._time;
        if (t >= this._duration) this._totalTime = this._time = this._duration, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (i = !0, r = "onComplete"), 0 === this._duration && ((0 === t || 0 > this._rawPrevTime) && this._rawPrevTime !== t && (n = !0, this._rawPrevTime > 0 && (r = "onReverseComplete", e && (t = -1))), this._rawPrevTime = t);
        else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== s || 0 === this._duration && this._rawPrevTime > 0) && (r = "onReverseComplete", i = this._reversed), 0 > t ? (this._active = !1, 0 === this._duration && (this._rawPrevTime >= 0 && (n = !0), this._rawPrevTime = t)) : this._initted || (n = !0);
        else if (this._totalTime = this._time = t, this._easeType) {
            var a = t / this._duration,
                l = this._easeType,
                c = this._easePower;
            (1 === l || 3 === l && a >= .5) && (a = 1 - a), 3 === l && (a *= 2), 1 === c ? a *= a : 2 === c ? a *= a * a : 3 === c ? a *= a * a * a : 4 === c && (a *= a * a * a * a), this.ratio = 1 === l ? 1 - a : 2 === l ? a : .5 > t / this._duration ? a / 2 : 1 - a / 2
        } else this.ratio = this._ease.getRatio(t / this._duration);
        if (this._time !== s || n) {
            if (!this._initted) {
                if (this._init(), !this._initted) return;
                this._time && !i ? this.ratio = this._ease.getRatio(this._time / this._duration) : i && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
            }
            for (this._active || !this._paused && this._time !== s && t >= 0 && (this._active = !0), 0 === s && (this._startAt && (t >= 0 ? this._startAt.render(t, e, n) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === this._duration) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || m))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
            this._onUpdate && (0 > t && this._startAt && this._startAt.render(t, e, n), e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || m)), r && (this._gc || (0 > t && this._startAt && !this._onUpdate && this._startAt.render(t, e, n), i && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || m)))
        }
    }, i._kill = function (t, e) {
        if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._enabled(!1, !1);
        e = "string" != typeof e ? e || this._targets || this.target : S.selector(e) || e;
        var n, i, r, o, s, a, l, c;
        if ((e instanceof Array || F(e)) && "number" != typeof e[0])
            for (n = e.length; --n > -1;) this._kill(t, e[n]) && (a = !0);
        else {
            if (this._targets) {
                for (n = this._targets.length; --n > -1;)
                    if (e === this._targets[n]) {
                        s = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], i = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                        break
                    }
            } else {
                if (e !== this.target) return !1;
                s = this._propLookup, i = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
            }
            if (s) {
                l = t || s, c = t !== i && "all" !== i && t !== s && (null == t || t._tempKill !== !0);
                for (r in l)(o = s[r]) && (o.pg && o.t._kill(l) && (a = !0), o.pg && 0 !== o.t._overwriteProps.length || (o._prev ? o._prev._next = o._next : o === this._firstPT && (this._firstPT = o._next), o._next && (o._next._prev = o._prev), o._next = o._prev = null), delete s[r]), c && (i[r] = 1);
                !this._firstPT && this._initted && this._enabled(!1, !1)
            }
        }
        return a
    }, i.invalidate = function () {
        return this._notifyPluginsOfEnabled && S._onPluginEvent("_onDisable", this), this._firstPT = null, this._overwrittenProps = null, this._onUpdate = null, this._startAt = null, this._initted = this._active = this._notifyPluginsOfEnabled = !1, this._propLookup = this._targets ? {} : [], this
    }, i._enabled = function (t, e) {
        if (o || r.wake(), t && this._gc) {
            var n, i = this._targets;
            if (i)
                for (n = i.length; --n > -1;) this._siblings[n] = I(i[n], this, !0);
            else this._siblings = I(this.target, this, !0)
        }
        return C.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && S._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
    }, S.to = function (t, e, n) {
        return new S(t, e, n)
    }, S.from = function (t, e, n) {
        return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, new S(t, e, n)
    }, S.fromTo = function (t, e, n, i) {
        return i.startAt = n, i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender, new S(t, e, i)
    }, S.delayedCall = function (t, e, n, i, r) {
        return new S(e, 0, {
            delay: t,
            onComplete: e,
            onCompleteParams: n,
            onCompleteScope: i,
            onReverseComplete: e,
            onReverseCompleteParams: n,
            onReverseCompleteScope: i,
            immediateRender: !1,
            useFrames: r,
            overwrite: 0
        })
    }, S.set = function (t, e) {
        return new S(t, 0, e)
    }, S.killTweensOf = S.killDelayedCallsTo = function (t, e) {
        for (var n = S.getTweensOf(t), i = n.length; --i > -1;) n[i]._kill(e, t)
    }, S.getTweensOf = function (t) {
        if (null == t) return [];
        t = "string" != typeof t ? t : S.selector(t) || t;
        var e, n, i, r;
        if ((t instanceof Array || F(t)) && "number" != typeof t[0]) {
            for (e = t.length, n = []; --e > -1;) n = n.concat(S.getTweensOf(t[e]));
            for (e = n.length; --e > -1;)
                for (r = n[e], i = e; --i > -1;) r === n[i] && n.splice(e, 1)
        } else
            for (n = I(t).concat(), e = n.length; --e > -1;) n[e]._gc && n.splice(e, 1);
        return n
    };
    var H = d("plugins.TweenPlugin", function (t, e) {
        this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = H.prototype
    }, !0);
    if (i = H.prototype, H.version = "1.10.1", H.API = 2, i._firstPT = null, i._addTween = function (t, e, n, i, r, o) {
            var s, a;
            return null != i && (s = "number" == typeof i || "=" !== i.charAt(1) ? Number(i) - n : parseInt(i.charAt(0) + "1", 10) * Number(i.substr(2))) ? (this._firstPT = a = {
                _next: this._firstPT,
                t: t,
                p: e,
                s: n,
                c: s,
                f: "function" == typeof t[e],
                n: r || e,
                r: o
            }, a._next && (a._next._prev = a), a) : void 0
        }, i.setRatio = function (t) {
            for (var e, n = this._firstPT, i = 1e-6; n;) e = n.c * t + n.s, n.r ? e = 0 | e + (e > 0 ? .5 : -.5) : i > e && e > -i && (e = 0), n.f ? n.t[n.p](e) : n.t[n.p] = e, n = n._next
        }, i._kill = function (t) {
            var e, n = this._overwriteProps,
                i = this._firstPT;
            if (null != t[this._propName]) this._overwriteProps = [];
            else
                for (e = n.length; --e > -1;) null != t[n[e]] && n.splice(e, 1);
            for (; i;) null != t[i.n] && (i._next && (i._next._prev = i._prev), i._prev ? (i._prev._next = i._next, i._prev = null) : this._firstPT === i && (this._firstPT = i._next)), i = i._next;
            return !1
        }, i._roundProps = function (t, e) {
            for (var n = this._firstPT; n;)(t[this._propName] || null != n.n && t[n.n.split(this._propName + "_").join("")]) && (n.r = e), n = n._next
        }, S._onPluginEvent = function (t, e) {
            var n, i, r, o, s, a = e._firstPT;
            if ("_onInitAllProps" === t) {
                for (; a;) {
                    for (s = a._next, i = r; i && i.pr > a.pr;) i = i._next;
                    (a._prev = i ? i._prev : o) ? a._prev._next = a: r = a, (a._next = i) ? i._prev = a : o = a, a = s
                }
                a = e._firstPT = r
            }
            for (; a;) a.pg && "function" == typeof a.t[t] && a.t[t]() && (n = !0), a = a._next;
            return n
        }, H.activate = function (t) {
            for (var e = t.length; --e > -1;) t[e].API === H.API && (j[(new t[e])._propName] = t[e]);
            return !0
        }, f.plugin = function (t) {
            if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
            var e, n = t.propName,
                i = t.priority || 0,
                r = t.overwriteProps,
                o = {
                    init: "_onInitTween",
                    set: "setRatio",
                    kill: "_kill",
                    round: "_roundProps",
                    initAll: "_onInitAllProps"
                },
                s = d("plugins." + n.charAt(0).toUpperCase() + n.substr(1) + "Plugin", function () {
                    H.call(this, n, i), this._overwriteProps = r || []
                }, t.global === !0),
                a = s.prototype = new H(n);
            a.constructor = s, s.API = t.API;
            for (e in o) "function" == typeof t[e] && (a[o[e]] = t[e]);
            return s.version = t.version, H.activate([s]), s
        }, e = t._gsQueue) {
        for (n = 0; e.length > n; n++) e[n]();
        for (i in h) h[i].func || t.console.log("GSAP encountered missing dependency: com.greensock." + i)
    }
    o = !1
}(window), (window._gsQueue || (window._gsQueue = [])).push(function () {
        "use strict";
        window._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (t, e) {
            var n, i, r, o, s = function () {
                    t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = s.prototype.setRatio
                },
                a = {},
                l = s.prototype = new t("css");
            l.constructor = s, s.version = "1.10.2", s.API = 2, s.defaultTransformPerspective = 0, l = "px", s.suffixMap = {
                top: l,
                right: l,
                bottom: l,
                left: l,
                width: l,
                height: l,
                fontSize: l,
                padding: l,
                margin: l,
                perspective: l
            };
            var c, u, h, p, f, d, g = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                m = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                y = /[^\d\-\.]/g,
                _ = /(?:\d|\-|\+|=|#|\.)*/g,
                x = /opacity *= *([^)]*)/,
                b = /opacity:([^;]*)/,
                w = /alpha\(opacity *=.+?\)/i,
                T = /^(rgb|hsl)/,
                k = /([A-Z])/g,
                C = /-([a-z])/gi,
                E = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                A = function (t, e) {
                    return e.toUpperCase()
                },
                S = /(?:Left|Right|Width)/i,
                F = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                P = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                D = /,(?=[^\)]*(?:\(|$))/gi,
                j = Math.PI / 180,
                O = 180 / Math.PI,
                $ = {},
                N = document,
                M = N.createElement("div"),
                R = N.createElement("img"),
                L = s._internals = {
                    _specialProps: a
                },
                I = navigator.userAgent,
                B = function () {
                    var t, e = I.indexOf("Android"),
                        n = N.createElement("div");
                    return h = -1 !== I.indexOf("Safari") && -1 === I.indexOf("Chrome") && (-1 === e || Number(I.substr(e + 8, 1)) > 3), f = h && 6 > Number(I.substr(I.indexOf("Version/") + 8, 1)), p = -1 !== I.indexOf("Firefox"), /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(I), d = parseFloat(RegExp.$1), n.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>", t = n.getElementsByTagName("a")[0], !!t && /^0.55/.test(t.style.opacity)
                }(),
                q = function (t) {
                    return x.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                },
                H = function (t) {
                    window.console && console.log(t)
                },
                z = "",
                X = "",
                W = function (t, e) {
                    e = e || M;
                    var n, i, r = e.style;
                    if (void 0 !== r[t]) return t;
                    for (t = t.charAt(0).toUpperCase() + t.substr(1), n = ["O", "Moz", "ms", "Ms", "Webkit"], i = 5; --i > -1 && void 0 === r[n[i] + t];);
                    return i >= 0 ? (X = 3 === i ? "ms" : n[i], z = "-" + X.toLowerCase() + "-", X + t) : null
                },
                Y = N.defaultView ? N.defaultView.getComputedStyle : function () {},
                V = s.getStyle = function (t, e, n, i, r) {
                    var o;
                    return B || "opacity" !== e ? (!i && t.style[e] ? o = t.style[e] : (n = n || Y(t, null)) ? (t = n.getPropertyValue(e.replace(k, "-$1").toLowerCase()), o = t || n.length ? t : n[e]) : t.currentStyle && (o = t.currentStyle[e]), null == r || o && "none" !== o && "auto" !== o && "auto auto" !== o ? o : r) : q(t)
                },
                U = function (t, e, n, i, r) {
                    if ("px" === i || !i) return n;
                    if ("auto" === i || !n) return 0;
                    var o, s = S.test(e),
                        a = t,
                        l = M.style,
                        c = 0 > n;
                    return c && (n = -n), "%" === i && -1 !== e.indexOf("border") ? o = n / 100 * (s ? t.clientWidth : t.clientHeight) : (l.cssText = "border-style:solid; border-width:0; position:absolute; line-height:0;", "%" !== i && a.appendChild ? l[s ? "borderLeftWidth" : "borderTopWidth"] = n + i : (a = t.parentNode || N.body, l[s ? "width" : "height"] = n + i), a.appendChild(M), o = parseFloat(M[s ? "offsetWidth" : "offsetHeight"]), a.removeChild(M), 0 !== o || r || (o = U(t, e, n, i, !0))), c ? -o : o
                },
                G = function (t, e, n) {
                    if ("absolute" !== V(t, "position", n)) return 0;
                    var i = "left" === e ? "Left" : "Top",
                        r = V(t, "margin" + i, n);
                    return t["offset" + i] - (U(t, e, parseFloat(r), r.replace(_, "")) || 0)
                },
                Q = function (t, e) {
                    var n, i, r = {};
                    if (e = e || Y(t, null))
                        if (n = e.length)
                            for (; --n > -1;) r[e[n].replace(C, A)] = e.getPropertyValue(e[n]);
                        else
                            for (n in e) r[n] = e[n];
                    else if (e = t.currentStyle || t.style)
                        for (n in e) r[n.replace(C, A)] = e[n];
                    return B || (r.opacity = q(t)), i = Tt(t, e, !1), r.rotation = i.rotation * O, r.skewX = i.skewX * O, r.scaleX = i.scaleX, r.scaleY = i.scaleY, r.x = i.x, r.y = i.y, wt && (r.z = i.z, r.rotationX = i.rotationX * O, r.rotationY = i.rotationY * O, r.scaleZ = i.scaleZ), r.filters && delete r.filters, r
                },
                Z = function (t, e, n, i, r) {
                    var o, s, a, l = {},
                        c = t.style;
                    for (s in n) "cssText" !== s && "length" !== s && isNaN(s) && (e[s] !== (o = n[s]) || r && r[s]) && -1 === s.indexOf("Origin") && ("number" == typeof o || "string" == typeof o) && (l[s] = "auto" !== o || "left" !== s && "top" !== s ? "" !== o && "auto" !== o && "none" !== o || "string" != typeof e[s] || "" === e[s].replace(y, "") ? o : 0 : G(t, s), void 0 !== c[s] && (a = new ht(c, s, c[s], a)));
                    if (i)
                        for (s in i) "className" !== s && (l[s] = i[s]);
                    return {
                        difs: l,
                        firstMPT: a
                    }
                },
                K = {
                    width: ["Left", "Right"],
                    height: ["Top", "Bottom"]
                },
                J = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                tt = function (t, e, n) {
                    var i = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                        r = K[e],
                        o = r.length;
                    for (n = n || Y(t, null); --o > -1;) i -= parseFloat(V(t, "padding" + r[o], n, !0)) || 0, i -= parseFloat(V(t, "border" + r[o] + "Width", n, !0)) || 0;
                    return i
                },
                et = function (t, e) {
                    (null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0");
                    var n = t.split(" "),
                        i = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : n[0],
                        r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : n[1];
                    return null == r ? r = "0" : "center" === r && (r = "50%"), ("center" === i || isNaN(parseFloat(i)) && -1 === (i + "").indexOf("=")) && (i = "50%"), e && (e.oxp = -1 !== i.indexOf("%"), e.oyp = -1 !== r.indexOf("%"), e.oxr = "=" === i.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(i.replace(y, "")), e.oy = parseFloat(r.replace(y, ""))), i + " " + r + (n.length > 2 ? " " + n[2] : "")
                },
                nt = function (t, e) {
                    return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
                },
                it = function (t, e) {
                    return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * Number(t.substr(2)) + e : parseFloat(t)
                },
                rt = function (t, e, n, i) {
                    var r, o, s, a, l = 1e-6;
                    return null == t ? a = e : "number" == typeof t ? a = t * j : (r = 2 * Math.PI, o = t.split("_"), s = Number(o[0].replace(y, "")) * (-1 === t.indexOf("rad") ? j : 1) - ("=" === t.charAt(1) ? 0 : e), o.length && (i && (i[n] = e + s), -1 !== t.indexOf("short") && (s %= r, s !== s % (r / 2) && (s = 0 > s ? s + r : s - r)), -1 !== t.indexOf("_cw") && 0 > s ? s = (s + 9999999999 * r) % r - (0 | s / r) * r : -1 !== t.indexOf("ccw") && s > 0 && (s = (s - 9999999999 * r) % r - (0 | s / r) * r)), a = e + s), l > a && a > -l && (a = 0), a
                },
                ot = {
                    aqua: [0, 255, 255],
                    lime: [0, 255, 0],
                    silver: [192, 192, 192],
                    black: [0, 0, 0],
                    maroon: [128, 0, 0],
                    teal: [0, 128, 128],
                    blue: [0, 0, 255],
                    navy: [0, 0, 128],
                    white: [255, 255, 255],
                    fuchsia: [255, 0, 255],
                    olive: [128, 128, 0],
                    yellow: [255, 255, 0],
                    orange: [255, 165, 0],
                    gray: [128, 128, 128],
                    purple: [128, 0, 128],
                    green: [0, 128, 0],
                    red: [255, 0, 0],
                    pink: [255, 192, 203],
                    cyan: [0, 255, 255],
                    transparent: [255, 255, 255, 0]
                },
                st = function (t, e, n) {
                    return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 0 | 255 * (1 > 6 * t ? e + 6 * (n - e) * t : .5 > t ? n : 2 > 3 * t ? e + 6 * (n - e) * (2 / 3 - t) : e) + .5
                },
                at = function (t) {
                    var e, n, i, r, o, s;
                    return t && "" !== t ? "number" == typeof t ? [t >> 16, 255 & t >> 8, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ot[t] ? ot[t] : "#" === t.charAt(0) ? (4 === t.length && (e = t.charAt(1), n = t.charAt(2), i = t.charAt(3), t = "#" + e + e + n + n + i + i), t = parseInt(t.substr(1), 16), [t >> 16, 255 & t >> 8, 255 & t]) : "hsl" === t.substr(0, 3) ? (t = t.match(g), r = Number(t[0]) % 360 / 360, o = Number(t[1]) / 100, s = Number(t[2]) / 100, n = .5 >= s ? s * (o + 1) : s + o - s * o, e = 2 * s - n, t.length > 3 && (t[3] = Number(t[3])), t[0] = st(r + 1 / 3, e, n), t[1] = st(r, e, n), t[2] = st(r - 1 / 3, e, n), t) : (t = t.match(g) || ot.transparent, t[0] = Number(t[0]), t[1] = Number(t[1]), t[2] = Number(t[2]), t.length > 3 && (t[3] = Number(t[3])), t)) : ot.black
                },
                lt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
            for (l in ot) lt += "|" + l + "\\b";
            lt = RegExp(lt + ")", "gi");
            var ct = function (t, e, n, i) {
                    if (null == t) return function (t) {
                        return t
                    };
                    var r, o = e ? (t.match(lt) || [""])[0] : "",
                        s = t.split(o).join("").match(v) || [],
                        a = t.substr(0, t.indexOf(s[0])),
                        l = ")" === t.charAt(t.length - 1) ? ")" : "",
                        c = -1 !== t.indexOf(" ") ? " " : ",",
                        u = s.length,
                        h = u > 0 ? s[0].replace(g, "") : "";
                    return u ? r = e ? function (t) {
                        var e, p, f, d;
                        if ("number" == typeof t) t += h;
                        else if (i && D.test(t)) {
                            for (d = t.replace(D, "|").split("|"), f = 0; d.length > f; f++) d[f] = r(d[f]);
                            return d.join(",")
                        }
                        if (e = (t.match(lt) || [o])[0], p = t.split(e).join("").match(v) || [], f = p.length, u > f--)
                            for (; u > ++f;) p[f] = n ? p[0 | (f - 1) / 2] : s[f];
                        return a + p.join(c) + c + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
                    } : function (t) {
                        var e, o, p;
                        if ("number" == typeof t) t += h;
                        else if (i && D.test(t)) {
                            for (o = t.replace(D, "|").split("|"), p = 0; o.length > p; p++) o[p] = r(o[p]);
                            return o.join(",")
                        }
                        if (e = t.match(v) || [], p = e.length, u > p--)
                            for (; u > ++p;) e[p] = n ? e[0 | (p - 1) / 2] : s[p];
                        return a + e.join(c) + l
                    } : function (t) {
                        return t
                    }
                },
                ut = function (t) {
                    return t = t.split(","),
                        function (e, n, i, r, o, s, a) {
                            var l, c = (n + "").split(" ");
                            for (a = {}, l = 0; 4 > l; l++) a[t[l]] = c[l] = c[l] || c[(l - 1) / 2 >> 0];
                            return r.parse(e, a, o, s)
                        }
                },
                ht = (L._setPluginRatio = function (t) {
                    this.plugin.setRatio(t);
                    for (var e, n, i, r, o = this.data, s = o.proxy, a = o.firstMPT, l = 1e-6; a;) e = s[a.v], a.r ? e = e > 0 ? 0 | e + .5 : 0 | e - .5 : l > e && e > -l && (e = 0), a.t[a.p] = e, a = a._next;
                    if (o.autoRotate && (o.autoRotate.rotation = s.rotation), 1 === t)
                        for (a = o.firstMPT; a;) {
                            if (n = a.t, n.type) {
                                if (1 === n.type) {
                                    for (r = n.xs0 + n.s + n.xs1, i = 1; n.l > i; i++) r += n["xn" + i] + n["xs" + (i + 1)];
                                    n.e = r
                                }
                            } else n.e = n.s + n.xs0;
                            a = a._next
                        }
                }, function (t, e, n, i, r) {
                    this.t = t, this.p = e, this.v = n, this.r = r, i && (i._prev = this, this._next = i)
                }),
                pt = (L._parseToProxy = function (t, e, n, i, r, o) {
                    var s, a, l, c, u, h = i,
                        p = {},
                        f = {},
                        d = n._transform,
                        g = $;
                    for (n._transform = null, $ = e, i = u = n.parse(t, e, i, r), $ = g, o && (n._transform = d, h && (h._prev = null, h._prev && (h._prev._next = null))); i && i !== h;) {
                        if (1 >= i.type && (a = i.p, f[a] = i.s + i.c, p[a] = i.s, o || (c = new ht(i, "s", a, c, i.r), i.c = 0), 1 === i.type))
                            for (s = i.l; --s > 0;) l = "xn" + s, a = i.p + "_" + l, f[a] = i.data[l], p[a] = i[l], o || (c = new ht(i, l, a, c, i.rxp[l]));
                        i = i._next
                    }
                    return {
                        proxy: p,
                        end: f,
                        firstMPT: c,
                        pt: u
                    }
                }, L.CSSPropTween = function (t, e, i, r, s, a, l, c, u, h, p) {
                    this.t = t, this.p = e, this.s = i, this.c = r, this.n = l || e, t instanceof pt || o.push(this.n), this.r = c, this.type = a || 0, u && (this.pr = u, n = !0), this.b = void 0 === h ? i : h, this.e = void 0 === p ? i + r : p, s && (this._next = s, s._prev = this)
                }),
                ft = s.parseComplex = function (t, e, n, i, r, o, s, a, l, u) {
                    n = n || o || "", s = new pt(t, e, 0, 0, s, u ? 2 : 1, null, (!1), a, n, i), i += "";
                    var h, p, f, d, v, y, _, x, b, w, k, C, E = n.split(", ").join(",").split(" "),
                        A = i.split(", ").join(",").split(" "),
                        S = E.length,
                        F = c !== !1;
                    for ((-1 !== i.indexOf(",") || -1 !== n.indexOf(",")) && (E = E.join(" ").replace(D, ", ").split(" "), A = A.join(" ").replace(D, ", ").split(" "), S = E.length), S !== A.length && (E = (o || "").split(" "), S = E.length), s.plugin = l, s.setRatio = u, h = 0; S > h; h++)
                        if (d = E[h], v = A[h], x = parseFloat(d), x || 0 === x) s.appendXtra("", x, nt(v, x), v.replace(m, ""), F && -1 !== v.indexOf("px"), !0);
                        else if (r && ("#" === d.charAt(0) || ot[d] || T.test(d))) C = "," === v.charAt(v.length - 1) ? ")," : ")", d = at(d), v = at(v), b = d.length + v.length > 6, b && !B && 0 === v[3] ? (s["xs" + s.l] += s.l ? " transparent" : "transparent", s.e = s.e.split(A[h]).join("transparent")) : (B || (b = !1), s.appendXtra(b ? "rgba(" : "rgb(", d[0], v[0] - d[0], ",", !0, !0).appendXtra("", d[1], v[1] - d[1], ",", !0).appendXtra("", d[2], v[2] - d[2], b ? "," : C, !0), b && (d = 4 > d.length ? 1 : d[3], s.appendXtra("", d, (4 > v.length ? 1 : v[3]) - d, C, !1)));
                    else if (y = d.match(g)) {
                        if (_ = v.match(m), !_ || _.length !== y.length) return s;
                        for (f = 0, p = 0; y.length > p; p++) k = y[p], w = d.indexOf(k, f), s.appendXtra(d.substr(f, w - f), Number(k), nt(_[p], k), "", F && "px" === d.substr(w + k.length, 2), 0 === p), f = w + k.length;
                        s["xs" + s.l] += d.substr(f)
                    } else s["xs" + s.l] += s.l ? " " + d : d;
                    if (-1 !== i.indexOf("=") && s.data) {
                        for (C = s.xs0 + s.data.s, h = 1; s.l > h; h++) C += s["xs" + h] + s.data["xn" + h];
                        s.e = C + s["xs" + h]
                    }
                    return s.l || (s.type = -1, s.xs0 = s.e), s.xfirst || s
                },
                dt = 9;
            for (l = pt.prototype, l.l = l.pr = 0; --dt > 0;) l["xn" + dt] = 0, l["xs" + dt] = "";
            l.xs0 = "", l._next = l._prev = l.xfirst = l.data = l.plugin = l.setRatio = l.rxp = null, l.appendXtra = function (t, e, n, i, r, o) {
                var s = this,
                    a = s.l;
                return s["xs" + a] += o && a ? " " + t : t || "", n || 0 === a || s.plugin ? (s.l++, s.type = s.setRatio ? 2 : 1, s["xs" + s.l] = i || "", a > 0 ? (s.data["xn" + a] = e + n, s.rxp["xn" + a] = r, s["xn" + a] = e, s.plugin || (s.xfirst = new pt(s, "xn" + a, e, n, s.xfirst || s, 0, s.n, r, s.pr), s.xfirst.xs0 = 0), s) : (s.data = {
                    s: e + n
                }, s.rxp = {}, s.s = e, s.c = n, s.r = r, s)) : (s["xs" + a] += e + (i || ""), s)
            };
            var gt = function (t, e) {
                    e = e || {}, this.p = e.prefix ? W(t) || t : t, a[t] = a[this.p] = this, this.format = e.formatter || ct(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                },
                mt = L._registerComplexSpecialProp = function (t, e, n) {
                    "object" != typeof e && (e = {
                        parser: n
                    });
                    var i, r, o = t.split(","),
                        s = e.defaultValue;
                    for (n = n || [s], i = 0; o.length > i; i++) e.prefix = 0 === i && e.prefix, e.defaultValue = n[i] || s, r = new gt(o[i], e)
                },
                vt = function (t) {
                    if (!a[t]) {
                        var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                        mt(t, {
                            parser: function (t, n, i, r, o, s, l) {
                                var c = (window.GreenSockGlobals || window).com.greensock.plugins[e];
                                return c ? (c._cssRegister(), a[i].parse(t, n, i, r, o, s, l)) : (H("Error: " + e + " js file not loaded."), o)
                            }
                        })
                    }
                };
            l = gt.prototype, l.parseComplex = function (t, e, n, i, r, o) {
                var s, a, l, c, u, h, p = this.keyword;
                if (this.multi && (D.test(n) || D.test(e) ? (a = e.replace(D, "|").split("|"), l = n.replace(D, "|").split("|")) : p && (a = [e], l = [n])), l) {
                    for (c = l.length > a.length ? l.length : a.length, s = 0; c > s; s++) e = a[s] = a[s] || this.dflt, n = l[s] = l[s] || this.dflt, p && (u = e.indexOf(p), h = n.indexOf(p), u !== h && (n = -1 === h ? l : a, n[s] += " " + p));
                    e = a.join(", "), n = l.join(", ")
                }
                return ft(t, this.p, e, n, this.clrs, this.dflt, i, this.pr, r, o)
            }, l.parse = function (t, e, n, i, o, s) {
                return this.parseComplex(t.style, this.format(V(t, this.p, r, !1, this.dflt)), this.format(e), o, s)
            }, s.registerSpecialProp = function (t, e, n) {
                mt(t, {
                    parser: function (t, i, r, o, s, a) {
                        var l = new pt(t, r, 0, 0, s, 2, r, (!1), n);
                        return l.plugin = a, l.setRatio = e(t, i, o._tween, r), l
                    },
                    priority: n
                })
            };
            var yt = "scaleX,scaleY,scaleZ,x,y,z,skewX,rotation,rotationX,rotationY,perspective".split(","),
                _t = W("transform"),
                xt = z + "transform",
                bt = W("transformOrigin"),
                wt = null !== W("perspective"),
                Tt = function (t, e, n, i) {
                    if (t._gsTransform && n && !i) return t._gsTransform;
                    var r, o, a, l, c, u, h, p, f, d, g, m, v, y = n ? t._gsTransform || {
                            skewY: 0
                        } : {
                            skewY: 0
                        },
                        _ = 0 > y.scaleX,
                        x = 2e-5,
                        b = 1e5,
                        w = -Math.PI + 1e-4,
                        T = Math.PI - 1e-4,
                        k = wt ? parseFloat(V(t, bt, e, !1, "0 0 0").split(" ")[2]) || y.zOrigin || 0 : 0;
                    for (_t ? r = V(t, xt, e, !0) : t.currentStyle && (r = t.currentStyle.filter.match(F), r = r && 4 === r.length ? [r[0].substr(4), Number(r[2].substr(4)), Number(r[1].substr(4)), r[3].substr(4), y.x || 0, y.y || 0].join(",") : ""), o = (r || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], a = o.length; --a > -1;) l = Number(o[a]), o[a] = (c = l - (l |= 0)) ? (0 | c * b + (0 > c ? -.5 : .5)) / b + l : l;
                    if (16 === o.length) {
                        var C = o[8],
                            E = o[9],
                            A = o[10],
                            S = o[12],
                            P = o[13],
                            D = o[14];
                        if (y.zOrigin && (D = -y.zOrigin, S = C * D - o[12], P = E * D - o[13], D = A * D + y.zOrigin - o[14]), !n || i || null == y.rotationX) {
                            var j, O, $, N, M, R, L, I = o[0],
                                B = o[1],
                                q = o[2],
                                H = o[3],
                                z = o[4],
                                X = o[5],
                                W = o[6],
                                Y = o[7],
                                U = o[11],
                                G = y.rotationX = Math.atan2(W, A),
                                Q = w > G || G > T;
                            G && (N = Math.cos(-G), M = Math.sin(-G), j = z * N + C * M, O = X * N + E * M, $ = W * N + A * M, C = z * -M + C * N, E = X * -M + E * N, A = W * -M + A * N, U = Y * -M + U * N, z = j, X = O, W = $), G = y.rotationY = Math.atan2(C, I), G && (R = w > G || G > T, N = Math.cos(-G), M = Math.sin(-G), j = I * N - C * M, O = B * N - E * M, $ = q * N - A * M, E = B * M + E * N, A = q * M + A * N, U = H * M + U * N, I = j, B = O, q = $), G = y.rotation = Math.atan2(B, X), G && (L = w > G || G > T, N = Math.cos(-G), M = Math.sin(-G), I = I * N + z * M, O = B * N + X * M, X = B * -M + X * N, W = q * -M + W * N, B = O), L && Q ? y.rotation = y.rotationX = 0 : L && R ? y.rotation = y.rotationY = 0 : R && Q && (y.rotationY = y.rotationX = 0), y.scaleX = (0 | Math.sqrt(I * I + B * B) * b + .5) / b, y.scaleY = (0 | Math.sqrt(X * X + E * E) * b + .5) / b, y.scaleZ = (0 | Math.sqrt(W * W + A * A) * b + .5) / b, y.skewX = 0, y.perspective = U ? 1 / (0 > U ? -U : U) : 0, y.x = S, y.y = P, y.z = D
                        }
                    } else if (!(wt && !i && o.length && y.x === o[4] && y.y === o[5] && (y.rotationX || y.rotationY) || void 0 !== y.x && "none" === V(t, "display", e))) {
                        var Z = o.length >= 6,
                            K = Z ? o[0] : 1,
                            J = o[1] || 0,
                            tt = o[2] || 0,
                            et = Z ? o[3] : 1;
                        y.x = o[4] || 0, y.y = o[5] || 0, u = Math.sqrt(K * K + J * J), h = Math.sqrt(et * et + tt * tt), p = K || J ? Math.atan2(J, K) : y.rotation || 0, f = tt || et ? Math.atan2(tt, et) + p : y.skewX || 0, d = u - Math.abs(y.scaleX || 0), g = h - Math.abs(y.scaleY || 0), Math.abs(f) > Math.PI / 2 && Math.abs(f) < 1.5 * Math.PI && (_ ? (u *= -1, f += 0 >= p ? Math.PI : -Math.PI, p += 0 >= p ? Math.PI : -Math.PI) : (h *= -1, f += 0 >= f ? Math.PI : -Math.PI)), m = (p - y.rotation) % Math.PI, v = (f - y.skewX) % Math.PI, (void 0 === y.skewX || d > x || -x > d || g > x || -x > g || m > w && T > m && !1 | m * b || v > w && T > v && !1 | v * b) && (y.scaleX = u, y.scaleY = h, y.rotation = p, y.skewX = f), wt && (y.rotationX = y.rotationY = y.z = 0, y.perspective = parseFloat(s.defaultTransformPerspective) || 0, y.scaleZ = 1)
                    }
                    y.zOrigin = k;
                    for (a in y) x > y[a] && y[a] > -x && (y[a] = 0);
                    return n && (t._gsTransform = y), y
                },
                kt = function (t) {
                    var e, n, i = this.data,
                        r = -i.rotation,
                        o = r + i.skewX,
                        s = 1e5,
                        a = (0 | Math.cos(r) * i.scaleX * s) / s,
                        l = (0 | Math.sin(r) * i.scaleX * s) / s,
                        c = (0 | Math.sin(o) * -i.scaleY * s) / s,
                        u = (0 | Math.cos(o) * i.scaleY * s) / s,
                        h = this.t.style,
                        p = this.t.currentStyle;
                    if (p) {
                        n = l, l = -c, c = -n, e = p.filter, h.filter = "";
                        var f, g, m = this.t.offsetWidth,
                            v = this.t.offsetHeight,
                            y = "absolute" !== p.position,
                            b = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + c + ", M22=" + u,
                            w = i.x,
                            T = i.y;
                        if (null != i.ox && (f = (i.oxp ? .01 * m * i.ox : i.ox) - m / 2, g = (i.oyp ? .01 * v * i.oy : i.oy) - v / 2, w += f - (f * a + g * l), T += g - (f * c + g * u)), y) f = m / 2, g = v / 2, b += ", Dx=" + (f - (f * a + g * l) + w) + ", Dy=" + (g - (f * c + g * u) + T) + ")";
                        else {
                            var k, C, E, A = 8 > d ? 1 : -1;
                            for (f = i.ieOffsetX || 0, g = i.ieOffsetY || 0, i.ieOffsetX = Math.round((m - ((0 > a ? -a : a) * m + (0 > l ? -l : l) * v)) / 2 + w), i.ieOffsetY = Math.round((v - ((0 > u ? -u : u) * v + (0 > c ? -c : c) * m)) / 2 + T), dt = 0; 4 > dt; dt++) C = J[dt], k = p[C], n = -1 !== k.indexOf("px") ? parseFloat(k) : U(this.t, C, parseFloat(k), k.replace(_, "")) || 0, E = n !== i[C] ? 2 > dt ? -i.ieOffsetX : -i.ieOffsetY : 2 > dt ? f - i.ieOffsetX : g - i.ieOffsetY, h[C] = (i[C] = Math.round(n - E * (0 === dt || 2 === dt ? 1 : A))) + "px";
                            b += ", sizingMethod='auto expand')";
                        }
                        h.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(P, b) : b + " " + e, (0 === t || 1 === t) && 1 === a && 0 === l && 0 === c && 1 === u && (y && -1 === b.indexOf("Dx=0, Dy=0") || x.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf("gradient(") && h.removeAttribute("filter"))
                    }
                },
                Ct = function () {
                    var t, e, n, i, r, o, s, a, l, c, u, h, f, d, g, m, v, y, _, x, b, w, T, k, C, E, A, S = this.data,
                        F = this.t.style,
                        P = S.rotation,
                        D = S.scaleX,
                        j = S.scaleY,
                        O = S.scaleZ;
                    if (p && (C = F.top ? "top" : F.bottom ? "bottom" : parseFloat(V(this.t, "top", null, !1)) ? "bottom" : "top", b = V(this.t, C, null, !1), E = parseFloat(b) || 0, A = b.substr((E + "").length) || "px", S._ffFix = !S._ffFix, F[C] = (S._ffFix ? E + .05 : E - .05) + A), P || S.skewX) _ = Math.cos(P), x = Math.sin(P), t = _, r = x, S.skewX && (P -= S.skewX, _ = Math.cos(P), x = Math.sin(P)), e = -x, o = _;
                    else {
                        if (!S.rotationY && !S.rotationX && 1 === O) return void(F[_t] = "translate3d(" + S.x + "px," + S.y + "px," + S.z + "px)" + (1 !== D || 1 !== j ? " scale(" + D + "," + j + ")" : ""));
                        t = o = 1, e = r = 0
                    }
                    u = 1, n = i = s = a = l = c = h = f = d = 0, m = S.perspective, g = m ? -1 / m : 0, v = S.zOrigin, y = 1e5, P = S.rotationY, P && (_ = Math.cos(P), x = Math.sin(P), l = u * -x, f = g * -x, n = t * x, s = r * x, u *= _, g *= _, t *= _, r *= _), P = S.rotationX, P && (_ = Math.cos(P), x = Math.sin(P), b = e * _ + n * x, w = o * _ + s * x, T = c * _ + u * x, k = d * _ + g * x, n = e * -x + n * _, s = o * -x + s * _, u = c * -x + u * _, g = d * -x + g * _, e = b, o = w, c = T, d = k), 1 !== O && (n *= O, s *= O, u *= O, g *= O), 1 !== j && (e *= j, o *= j, c *= j, d *= j), 1 !== D && (t *= D, r *= D, l *= D, f *= D), v && (h -= v, i = n * h, a = s * h, h = u * h + v), i = (b = (i += S.x) - (i |= 0)) ? (0 | b * y + (0 > b ? -.5 : .5)) / y + i : i, a = (b = (a += S.y) - (a |= 0)) ? (0 | b * y + (0 > b ? -.5 : .5)) / y + a : a, h = (b = (h += S.z) - (h |= 0)) ? (0 | b * y + (0 > b ? -.5 : .5)) / y + h : h, F[_t] = "matrix3d(" + [(0 | t * y) / y, (0 | r * y) / y, (0 | l * y) / y, (0 | f * y) / y, (0 | e * y) / y, (0 | o * y) / y, (0 | c * y) / y, (0 | d * y) / y, (0 | n * y) / y, (0 | s * y) / y, (0 | u * y) / y, (0 | g * y) / y, i, a, h, m ? 1 + -h / m : 1].join(",") + ")"
                },
                Et = function () {
                    var t, e, n, i, r, o, s, a, l, c = this.data,
                        u = this.t,
                        h = u.style;
                    p && (t = h.top ? "top" : h.bottom ? "bottom" : parseFloat(V(u, "top", null, !1)) ? "bottom" : "top", e = V(u, t, null, !1), n = parseFloat(e) || 0, i = e.substr((n + "").length) || "px", c._ffFix = !c._ffFix, h[t] = (c._ffFix ? n + .05 : n - .05) + i), c.rotation || c.skewX ? (r = c.rotation, o = r - c.skewX, s = 1e5, a = c.scaleX * s, l = c.scaleY * s, h[_t] = "matrix(" + (0 | Math.cos(r) * a) / s + "," + (0 | Math.sin(r) * a) / s + "," + (0 | Math.sin(o) * -l) / s + "," + (0 | Math.cos(o) * l) / s + "," + c.x + "," + c.y + ")") : h[_t] = "matrix(" + c.scaleX + ",0,0," + c.scaleY + "," + c.x + "," + c.y + ")"
                };
            mt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D", {
                parser: function (t, e, n, i, o, s, a) {
                    if (i._transform) return o;
                    var l, c, u, h, p, f, d, g = i._transform = Tt(t, r, !0, a.parseTransform),
                        m = t.style,
                        v = 1e-6,
                        y = yt.length,
                        _ = a,
                        x = {};
                    if ("string" == typeof _.transform && _t) u = m.cssText, m[_t] = _.transform, m.display = "block", l = Tt(t, null, !1), m.cssText = u;
                    else if ("object" == typeof _) {
                        if (l = {
                                scaleX: it(null != _.scaleX ? _.scaleX : _.scale, g.scaleX),
                                scaleY: it(null != _.scaleY ? _.scaleY : _.scale, g.scaleY),
                                scaleZ: it(null != _.scaleZ ? _.scaleZ : _.scale, g.scaleZ),
                                x: it(_.x, g.x),
                                y: it(_.y, g.y),
                                z: it(_.z, g.z),
                                perspective: it(_.transformPerspective, g.perspective)
                            }, d = _.directionalRotation, null != d)
                            if ("object" == typeof d)
                                for (u in d) _[u] = d[u];
                            else _.rotation = d;
                        l.rotation = rt("rotation" in _ ? _.rotation : "shortRotation" in _ ? _.shortRotation + "_short" : "rotationZ" in _ ? _.rotationZ : g.rotation * O, g.rotation, "rotation", x), wt && (l.rotationX = rt("rotationX" in _ ? _.rotationX : "shortRotationX" in _ ? _.shortRotationX + "_short" : g.rotationX * O || 0, g.rotationX, "rotationX", x), l.rotationY = rt("rotationY" in _ ? _.rotationY : "shortRotationY" in _ ? _.shortRotationY + "_short" : g.rotationY * O || 0, g.rotationY, "rotationY", x)), l.skewX = null == _.skewX ? g.skewX : rt(_.skewX, g.skewX), l.skewY = null == _.skewY ? g.skewY : rt(_.skewY, g.skewY), (c = l.skewY - g.skewY) && (l.skewX += c, l.rotation += c)
                    }
                    for (null != _.force3D && (g.force3D = _.force3D, f = !0), p = g.force3D || g.z || g.rotationX || g.rotationY || l.z || l.rotationX || l.rotationY || l.perspective, p || null == _.scale || (l.scaleZ = 1); --y > -1;) n = yt[y], h = l[n] - g[n], (h > v || -v > h || null != $[n]) && (f = !0, o = new pt(g, n, g[n], h, o), n in x && (o.e = x[n]), o.xs0 = 0, o.plugin = s, i._overwriteProps.push(o.n));
                    return h = _.transformOrigin, (h || wt && p && g.zOrigin) && (_t ? (f = !0, n = bt, h = (h || V(t, n, r, !1, "50% 50%")) + "", o = new pt(m, n, 0, 0, o, (-1), "transformOrigin"), o.b = m[n], o.plugin = s, wt ? (u = g.zOrigin, h = h.split(" "), g.zOrigin = (h.length > 2 && (0 === u || "0px" !== h[2]) ? parseFloat(h[2]) : u) || 0, o.xs0 = o.e = m[n] = h[0] + " " + (h[1] || "50%") + " 0px", o = new pt(g, "zOrigin", 0, 0, o, (-1), o.n), o.b = u, o.xs0 = o.e = g.zOrigin) : o.xs0 = o.e = m[n] = h) : et(h + "", g)), f && (i._transformType = p || 3 === this._transformType ? 3 : 2), o
                },
                prefix: !0
            }), mt("boxShadow", {
                defaultValue: "0px 0px 0px 0px #999",
                prefix: !0,
                color: !0,
                multi: !0,
                keyword: "inset"
            }), mt("borderRadius", {
                defaultValue: "0px",
                parser: function (t, e, n, o, s) {
                    e = this.format(e);
                    var a, l, c, u, h, p, f, d, g, m, v, y, _, x, b, w, T = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                        k = t.style;
                    for (g = parseFloat(t.offsetWidth), m = parseFloat(t.offsetHeight), a = e.split(" "), l = 0; T.length > l; l++) this.p.indexOf("border") && (T[l] = W(T[l])), h = u = V(t, T[l], r, !1, "0px"), -1 !== h.indexOf(" ") && (u = h.split(" "), h = u[0], u = u[1]), p = c = a[l], f = parseFloat(h), y = h.substr((f + "").length), _ = "=" === p.charAt(1), _ ? (d = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), d *= parseFloat(p), v = p.substr((d + "").length - (0 > d ? 1 : 0)) || "") : (d = parseFloat(p), v = p.substr((d + "").length)), "" === v && (v = i[n] || y), v !== y && (x = U(t, "borderLeft", f, y), b = U(t, "borderTop", f, y), "%" === v ? (h = 100 * (x / g) + "%", u = 100 * (b / m) + "%") : "em" === v ? (w = U(t, "borderLeft", 1, "em"), h = x / w + "em", u = b / w + "em") : (h = x + "px", u = b + "px"), _ && (p = parseFloat(h) + d + v, c = parseFloat(u) + d + v)), s = ft(k, T[l], h + " " + u, p + " " + c, !1, "0px", s);
                    return s
                },
                prefix: !0,
                formatter: ct("0px 0px 0px 0px", !1, !0)
            }), mt("backgroundPosition", {
                defaultValue: "0 0",
                parser: function (t, e, n, i, o, s) {
                    var a, l, c, u, h, p, f = "background-position",
                        g = r || Y(t, null),
                        m = this.format((g ? d ? g.getPropertyValue(f + "-x") + " " + g.getPropertyValue(f + "-y") : g.getPropertyValue(f) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                        v = this.format(e);
                    if (-1 !== m.indexOf("%") != (-1 !== v.indexOf("%")) && (p = V(t, "backgroundImage").replace(E, ""), p && "none" !== p)) {
                        for (a = m.split(" "), l = v.split(" "), R.setAttribute("src", p), c = 2; --c > -1;) m = a[c], u = -1 !== m.indexOf("%"), u !== (-1 !== l[c].indexOf("%")) && (h = 0 === c ? t.offsetWidth - R.width : t.offsetHeight - R.height, a[c] = u ? parseFloat(m) / 100 * h + "px" : 100 * (parseFloat(m) / h) + "%");
                        m = a.join(" ")
                    }
                    return this.parseComplex(t.style, m, v, o, s)
                },
                formatter: et
            }), mt("backgroundSize", {
                defaultValue: "0 0",
                formatter: et
            }), mt("perspective", {
                defaultValue: "0px",
                prefix: !0
            }), mt("perspectiveOrigin", {
                defaultValue: "50% 50%",
                prefix: !0
            }), mt("transformStyle", {
                prefix: !0
            }), mt("backfaceVisibility", {
                prefix: !0
            }), mt("margin", {
                parser: ut("marginTop,marginRight,marginBottom,marginLeft")
            }), mt("padding", {
                parser: ut("paddingTop,paddingRight,paddingBottom,paddingLeft")
            }), mt("clip", {
                defaultValue: "rect(0px,0px,0px,0px)",
                parser: function (t, e, n, i, o, s) {
                    var a, l, c;
                    return 9 > d ? (l = t.currentStyle, c = 8 > d ? " " : ",", a = "rect(" + l.clipTop + c + l.clipRight + c + l.clipBottom + c + l.clipLeft + ")", e = this.format(e).split(",").join(c)) : (a = this.format(V(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, a, e, o, s)
                }
            }), mt("textShadow", {
                defaultValue: "0px 0px 0px #999",
                color: !0,
                multi: !0
            }), mt("autoRound,strictUnits", {
                parser: function (t, e, n, i, r) {
                    return r
                }
            }), mt("border", {
                defaultValue: "0px solid #000",
                parser: function (t, e, n, i, o, s) {
                    return this.parseComplex(t.style, this.format(V(t, "borderTopWidth", r, !1, "0px") + " " + V(t, "borderTopStyle", r, !1, "solid") + " " + V(t, "borderTopColor", r, !1, "#000")), this.format(e), o, s)
                },
                color: !0,
                formatter: function (t) {
                    var e = t.split(" ");
                    return e[0] + " " + (e[1] || "solid") + " " + (t.match(lt) || ["#000"])[0]
                }
            }), mt("float,cssFloat,styleFloat", {
                parser: function (t, e, n, i, r) {
                    var o = t.style,
                        s = "cssFloat" in o ? "cssFloat" : "styleFloat";
                    return new pt(o, s, 0, 0, r, (-1), n, (!1), 0, o[s], e)
                }
            });
            var At = function (t) {
                var e, n = this.t,
                    i = n.filter || V(this.data, "filter"),
                    r = 0 | this.s + this.c * t;
                100 === r && (-1 === i.indexOf("atrix(") && -1 === i.indexOf("radient(") ? (n.removeAttribute("filter"), e = !V(this.data, "filter")) : (n.filter = i.replace(w, ""), e = !0)), e || (this.xn1 && (n.filter = i = i || "alpha(opacity=" + r + ")"), -1 === i.indexOf("opacity") ? 0 === r && this.xn1 || (n.filter += " alpha(opacity=" + r + ")") : n.filter = i.replace(x, "opacity=" + r))
            };
            mt("opacity,alpha,autoAlpha", {
                defaultValue: "1",
                parser: function (t, e, n, i, o, s) {
                    var a = parseFloat(V(t, "opacity", r, !1, "1")),
                        l = t.style,
                        c = "autoAlpha" === n;
                    return e = parseFloat(e), c && 1 === a && "hidden" === V(t, "visibility", r) && 0 !== e && (a = 0), B ? o = new pt(l, "opacity", a, e - a, o) : (o = new pt(l, "opacity", 100 * a, 100 * (e - a), o), o.xn1 = c ? 1 : 0, l.zoom = 1, o.type = 2, o.b = "alpha(opacity=" + o.s + ")", o.e = "alpha(opacity=" + (o.s + o.c) + ")", o.data = t, o.plugin = s, o.setRatio = At), c && (o = new pt(l, "visibility", 0, 0, o, (-1), null, (!1), 0, 0 !== a ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), o.xs0 = "inherit", i._overwriteProps.push(o.n)), o
                }
            });
            var St = function (t, e) {
                    e && (t.removeProperty ? t.removeProperty(e.replace(k, "-$1").toLowerCase()) : t.removeAttribute(e))
                },
                Ft = function (t) {
                    if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                        this.t.className = 0 === t ? this.b : this.e;
                        for (var e = this.data, n = this.t.style; e;) e.v ? n[e.p] = e.v : St(n, e.p), e = e._next;
                        1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                    } else this.t.className !== this.e && (this.t.className = this.e)
                };
            mt("className", {
                parser: function (t, e, i, o, s, a, l) {
                    var c, u, h, p, f, d = t.className,
                        g = t.style.cssText;
                    if (s = o._classNamePT = new pt(t, i, 0, 0, s, 2), s.setRatio = Ft, s.pr = -11, n = !0, s.b = d, u = Q(t, r), h = t._gsClassPT) {
                        for (p = {}, f = h.data; f;) p[f.p] = 1, f = f._next;
                        h.setRatio(1)
                    }
                    return t._gsClassPT = s, s.e = "=" !== e.charAt(1) ? e : d.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), o._tween._duration && (t.className = s.e, c = Z(t, u, Q(t), l, p), t.className = d, s.data = c.firstMPT, t.style.cssText = g, s = s.xfirst = o.parse(t, c.difs, s, a)), s
                }
            });
            var Pt = function (t) {
                if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration) {
                    if ("all" === this.e) return this.t.style.cssText = "", void(this.t._gsTransform && delete this.t._gsTransform);
                    for (var e, n = this.t.style, i = this.e.split(","), r = i.length, o = a.transform.parse; --r > -1;) e = i[r], a[e] && (e = a[e].parse === o ? _t : a[e].p), St(n, e)
                }
            };
            for (mt("clearProps", {
                    parser: function (t, e, i, r, o) {
                        return o = new pt(t, i, 0, 0, o, 2), o.setRatio = Pt, o.e = e, o.pr = -10, o.data = r._tween, n = !0, o
                    }
                }), l = "bezier,throwProps,physicsProps,physics2D".split(","), dt = l.length; dt--;) vt(l[dt]);
            l = s.prototype, l._firstPT = null, l._onInitTween = function (t, e, a) {
                if (!t.nodeType) return !1;
                this._target = t, this._tween = a, this._vars = e, c = e.autoRound, n = !1, i = e.suffixMap || s.suffixMap, r = Y(t, ""), o = this._overwriteProps;
                var l, p, d, g, m, v, y, _, x, w = t.style;
                if (u && "" === w.zIndex && (l = V(t, "zIndex", r), ("auto" === l || "" === l) && (w.zIndex = 0)), "string" == typeof e && (g = w.cssText, l = Q(t, r), w.cssText = g + ";" + e, l = Z(t, l, Q(t)).difs, !B && b.test(e) && (l.opacity = parseFloat(RegExp.$1)), e = l, w.cssText = g), this._firstPT = p = this.parse(t, e, null), this._transformType) {
                    for (x = 3 === this._transformType, _t ? h && (u = !0, "" === w.zIndex && (y = V(t, "zIndex", r), ("auto" === y || "" === y) && (w.zIndex = 0)), f && (w.WebkitBackfaceVisibility = this._vars.WebkitBackfaceVisibility || (x ? "visible" : "hidden"))) : w.zoom = 1, d = p; d && d._next;) d = d._next;
                    _ = new pt(t, "transform", 0, 0, null, 2), this._linkCSSP(_, null, d), _.setRatio = x && wt ? Ct : _t ? Et : kt, _.data = this._transform || Tt(t, r, !0), o.pop()
                }
                if (n) {
                    for (; p;) {
                        for (v = p._next, d = g; d && d.pr > p.pr;) d = d._next;
                        (p._prev = d ? d._prev : m) ? p._prev._next = p: g = p, (p._next = d) ? d._prev = p : m = p, p = v
                    }
                    this._firstPT = g
                }
                return !0
            }, l.parse = function (t, e, n, o) {
                var s, l, u, h, p, f, d, g, m, v, y = t.style;
                for (s in e) f = e[s], l = a[s], l ? n = l.parse(t, f, s, this, n, o, e) : (p = V(t, s, r) + "", m = "string" == typeof f, "color" === s || "fill" === s || "stroke" === s || -1 !== s.indexOf("Color") || m && T.test(f) ? (m || (f = at(f), f = (f.length > 3 ? "rgba(" : "rgb(") + f.join(",") + ")"), n = ft(y, s, p, f, !0, "transparent", n, 0, o)) : !m || -1 === f.indexOf(" ") && -1 === f.indexOf(",") ? (u = parseFloat(p), d = u || 0 === u ? p.substr((u + "").length) : "", ("" === p || "auto" === p) && ("width" === s || "height" === s ? (u = tt(t, s, r), d = "px") : "left" === s || "top" === s ? (u = G(t, s, r), d = "px") : (u = "opacity" !== s ? 0 : 1, d = "")), v = m && "=" === f.charAt(1), v ? (h = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), h *= parseFloat(f), g = f.replace(_, "")) : (h = parseFloat(f), g = m ? f.substr((h + "").length) || "" : ""), "" === g && (g = i[s] || d), f = h || 0 === h ? (v ? h + u : h) + g : e[s], d !== g && "" !== g && (h || 0 === h) && (u || 0 === u) && (u = U(t, s, u, d), "%" === g ? (u /= U(t, s, 100, "%") / 100, u > 100 && (u = 100), e.strictUnits !== !0 && (p = u + "%")) : "em" === g ? u /= U(t, s, 1, "em") : (h = U(t, s, h, g), g = "px"), v && (h || 0 === h) && (f = h + u + g)), v && (h += u), !u && 0 !== u || !h && 0 !== h ? void 0 !== y[s] && (f || "NaN" != f + "" && null != f) ? (n = new pt(y, s, h || u || 0, 0, n, (-1), s, (!1), 0, p, f), n.xs0 = "none" !== f || "display" !== s && -1 === s.indexOf("Style") ? f : p) : H("invalid " + s + " tween value: " + e[s]) : (n = new pt(y, s, u, h - u, n, 0, s, c !== !1 && ("px" === g || "zIndex" === s), 0, p, f), n.xs0 = g)) : n = ft(y, s, p, f, !0, null, n, 0, o)), o && n && !n.plugin && (n.plugin = o);
                return n
            }, l.setRatio = function (t) {
                var e, n, i, r = this._firstPT,
                    o = 1e-6;
                if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                    if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                        for (; r;) {
                            if (e = r.c * t + r.s, r.r ? e = e > 0 ? 0 | e + .5 : 0 | e - .5 : o > e && e > -o && (e = 0), r.type)
                                if (1 === r.type)
                                    if (i = r.l, 2 === i) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                    else if (3 === i) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                            else if (4 === i) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                            else if (5 === i) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                            else {
                                for (n = r.xs0 + e + r.xs1, i = 1; r.l > i; i++) n += r["xn" + i] + r["xs" + (i + 1)];
                                r.t[r.p] = n
                            } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                            else r.t[r.p] = e + r.xs0;
                            r = r._next
                        } else
                            for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
                    else
                        for (; r;) 2 !== r.type ? r.t[r.p] = r.e : r.setRatio(t), r = r._next
            }, l._enableTransforms = function (t) {
                this._transformType = t || 3 === this._transformType ? 3 : 2, this._transform = this._transform || Tt(this._target, r, !0)
            }, l._linkCSSP = function (t, e, n, i) {
                return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, i = !0), n ? n._next = t : i || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = n), t
            }, l._kill = function (e) {
                var n, i, r, o = e;
                if (e.autoAlpha || e.alpha) {
                    o = {};
                    for (i in e) o[i] = e[i];
                    o.opacity = 1, o.autoAlpha && (o.visibility = 1)
                }
                return e.className && (n = this._classNamePT) && (r = n.xfirst, r && r._prev ? this._linkCSSP(r._prev, n._next, r._prev._prev) : r === this._firstPT && (this._firstPT = n._next), n._next && this._linkCSSP(n._next, n._next._next, r._prev), this._classNamePT = null), t.prototype._kill.call(this, o)
            };
            var Dt = function (t, e, n) {
                var i, r, o, s;
                if (t.slice)
                    for (r = t.length; --r > -1;) Dt(t[r], e, n);
                else
                    for (i = t.childNodes, r = i.length; --r > -1;) o = i[r], s = o.type, o.style && (e.push(Q(o)), n && n.push(o)), 1 !== s && 9 !== s && 11 !== s || !o.childNodes.length || Dt(o, e, n)
            };
            return s.cascadeTo = function (t, n, i) {
                var r, o, s, a = e.to(t, n, i),
                    l = [a],
                    c = [],
                    u = [],
                    h = [],
                    p = e._internals.reservedProps;
                for (t = a._targets || a.target, Dt(t, c, h), a.render(n, !0), Dt(t, u), a.render(0, !0), a._enabled(!0), r = h.length; --r > -1;)
                    if (o = Z(h[r], c[r], u[r]), o.firstMPT) {
                        o = o.difs;
                        for (s in i) p[s] && (o[s] = i[s]);
                        l.push(e.to(h[r], n, o))
                    }
                return l
            }, t.activate([s]), s
        }, !0)
    }), window._gsDefine && window._gsQueue.pop()(),
    function (t) {
        "use strict";
        if ("function" == typeof bootstrap) bootstrap("promise", t);
        else if ("object" == typeof exports && "object" == typeof module) module.exports = t();
        else if ("function" == typeof define && define.amd) define(t);
        else if ("undefined" != typeof ses) {
            if (!ses.ok()) return;
            ses.makeQ = t
        } else {
            if ("undefined" == typeof self) throw new Error("This environment was not anticiapted by Q. Please file a bug.");
            self.Q = t()
        }
    }(function () {
        "use strict";

        function t(t) {
            return function () {
                return V.apply(t, arguments)
            }
        }

        function e(t) {
            return t === Object(t)
        }

        function n(t) {
            return "[object StopIteration]" === et(t) || t instanceof z
        }

        function i(t, e) {
            if (B && e.stack && "object" == typeof t && null !== t && t.stack && t.stack.indexOf(nt) === -1) {
                for (var n = [], i = e; i; i = i.source) i.stack && n.unshift(i.stack);
                n.unshift(t.stack);
                var o = n.join("\n" + nt + "\n");
                t.stack = r(o)
            }
        }

        function r(t) {
            for (var e = t.split("\n"), n = [], i = 0; i < e.length; ++i) {
                var r = e[i];
                a(r) || o(r) || !r || n.push(r)
            }
            return n.join("\n")
        }

        function o(t) {
            return t.indexOf("(module.js:") !== -1 || t.indexOf("(node.js:") !== -1
        }

        function s(t) {
            var e = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(t);
            if (e) return [e[1], Number(e[2])];
            var n = /at ([^ ]+):(\d+):(?:\d+)$/.exec(t);
            if (n) return [n[1], Number(n[2])];
            var i = /.*@(.+):(\d+)$/.exec(t);
            return i ? [i[1], Number(i[2])] : void 0
        }

        function a(t) {
            var e = s(t);
            if (!e) return !1;
            var n = e[0],
                i = e[1];
            return n === H && i >= X && i <= st
        }

        function l() {
            if (B) try {
                throw new Error
            } catch (t) {
                var e = t.stack.split("\n"),
                    n = e[0].indexOf("@") > 0 ? e[1] : e[2],
                    i = s(n);
                if (!i) return;
                return H = i[0], i[1]
            }
        }

        function c(t, e, n) {
            return function () {
                return "undefined" != typeof console && "function" == typeof console.warn && console.warn(e + " is deprecated, use " + n + " instead.", new Error("").stack), t.apply(t, arguments)
            }
        }

        function u(t) {
            return t instanceof d ? t : y(t) ? A(t) : E(t)
        }

        function h() {
            function t(t) {
                e = t, o.source = t, G(n, function (e, n) {
                    u.nextTick(function () {
                        t.promiseDispatch.apply(t, n)
                    })
                }, void 0), n = void 0, i = void 0
            }
            var e, n = [],
                i = [],
                r = K(h.prototype),
                o = K(d.prototype);
            if (o.promiseDispatch = function (t, r, o) {
                    var s = U(arguments);
                    n ? (n.push(s), "when" === r && o[1] && i.push(o[1])) : u.nextTick(function () {
                        e.promiseDispatch.apply(e, s)
                    })
                }, o.valueOf = function () {
                    if (n) return o;
                    var t = m(e);
                    return v(t) && (e = t), t
                }, o.inspect = function () {
                    return e ? e.inspect() : {
                        state: "pending"
                    }
                }, u.longStackSupport && B) try {
                throw new Error
            } catch (s) {
                o.stack = s.stack.substring(s.stack.indexOf("\n") + 1)
            }
            return r.promise = o, r.resolve = function (n) {
                e || t(u(n))
            }, r.fulfill = function (n) {
                e || t(E(n))
            }, r.reject = function (n) {
                e || t(C(n))
            }, r.notify = function (t) {
                e || G(i, function (e, n) {
                    u.nextTick(function () {
                        n(t)
                    })
                }, void 0)
            }, r
        }

        function p(t) {
            if ("function" != typeof t) throw new TypeError("resolver must be a function.");
            var e = h();
            try {
                t(e.resolve, e.reject, e.notify)
            } catch (n) {
                e.reject(n)
            }
            return e.promise
        }

        function f(t) {
            return p(function (e, n) {
                for (var i = 0, r = t.length; i < r; i++) u(t[i]).then(e, n)
            })
        }

        function d(t, e, n) {
            void 0 === e && (e = function (t) {
                return C(new Error("Promise does not support operation: " + t))
            }), void 0 === n && (n = function () {
                return {
                    state: "unknown"
                }
            });
            var i = K(d.prototype);
            if (i.promiseDispatch = function (n, r, o) {
                    var s;
                    try {
                        s = t[r] ? t[r].apply(i, o) : e.call(i, r, o)
                    } catch (a) {
                        s = C(a)
                    }
                    n && n(s)
                }, i.inspect = n, n) {
                var r = n();
                "rejected" === r.state && (i.exception = r.reason), i.valueOf = function () {
                    var t = n();
                    return "pending" === t.state || "rejected" === t.state ? i : t.value
                }
            }
            return i
        }

        function g(t, e, n, i) {
            return u(t).then(e, n, i)
        }

        function m(t) {
            if (v(t)) {
                var e = t.inspect();
                if ("fulfilled" === e.state) return e.value
            }
            return t
        }

        function v(t) {
            return t instanceof d
        }

        function y(t) {
            return e(t) && "function" == typeof t.then
        }

        function _(t) {
            return v(t) && "pending" === t.inspect().state
        }

        function x(t) {
            return !v(t) || "fulfilled" === t.inspect().state
        }

        function b(t) {
            return v(t) && "rejected" === t.inspect().state
        }

        function w() {
            it.length = 0, rt.length = 0, ot || (ot = !0)
        }

        function T(t, e) {
            ot && (rt.push(t), e && "undefined" != typeof e.stack ? it.push(e.stack) : it.push("(no stack) " + e))
        }

        function k(t) {
            if (ot) {
                var e = Q(rt, t);
                e !== -1 && (rt.splice(e, 1), it.splice(e, 1))
            }
        }

        function C(t) {
            var e = d({
                when: function (e) {
                    return e && k(this), e ? e(t) : this
                }
            }, function () {
                return this
            }, function () {
                return {
                    state: "rejected",
                    reason: t
                }
            });
            return T(e, t), e
        }

        function E(t) {
            return d({
                when: function () {
                    return t
                },
                get: function (e) {
                    return t[e]
                },
                set: function (e, n) {
                    t[e] = n
                },
                "delete": function (e) {
                    delete t[e]
                },
                post: function (e, n) {
                    return null === e || void 0 === e ? t.apply(void 0, n) : t[e].apply(t, n)
                },
                apply: function (e, n) {
                    return t.apply(e, n)
                },
                keys: function () {
                    return tt(t)
                }
            }, void 0, function () {
                return {
                    state: "fulfilled",
                    value: t
                }
            })
        }

        function A(t) {
            var e = h();
            return u.nextTick(function () {
                try {
                    t.then(e.resolve, e.reject, e.notify)
                } catch (n) {
                    e.reject(n)
                }
            }), e.promise
        }

        function S(t) {
            return d({
                isDef: function () {}
            }, function (e, n) {
                return $(t, e, n)
            }, function () {
                return u(t).inspect()
            })
        }

        function F(t, e, n) {
            return u(t).spread(e, n)
        }

        function P(t) {
            return function () {
                function e(t, e) {
                    var s;
                    if ("undefined" == typeof StopIteration) {
                        try {
                            s = i[t](e)
                        } catch (a) {
                            return C(a)
                        }
                        return s.done ? u(s.value) : g(s.value, r, o)
                    }
                    try {
                        s = i[t](e)
                    } catch (a) {
                        return n(a) ? u(a.value) : C(a)
                    }
                    return g(s, r, o)
                }
                var i = t.apply(this, arguments),
                    r = e.bind(e, "next"),
                    o = e.bind(e, "throw");
                return r()
            }
        }

        function D(t) {
            u.done(u.async(t)())
        }

        function j(t) {
            throw new z(t)
        }

        function O(t) {
            return function () {
                return F([this, N(arguments)], function (e, n) {
                    return t.apply(e, n)
                })
            }
        }

        function $(t, e, n) {
            return u(t).dispatch(e, n)
        }

        function N(t) {
            return g(t, function (t) {
                var e = 0,
                    n = h();
                return G(t, function (i, r, o) {
                    var s;
                    v(r) && "fulfilled" === (s = r.inspect()).state ? t[o] = s.value : (++e, g(r, function (i) {
                        t[o] = i, 0 === --e && n.resolve(t)
                    }, n.reject, function (t) {
                        n.notify({
                            index: o,
                            value: t
                        })
                    }))
                }, void 0), 0 === e && n.resolve(t), n.promise
            })
        }

        function M(t) {
            return g(t, function (t) {
                return t = Z(t, u), g(N(Z(t, function (t) {
                    return g(t, W, W)
                })), function () {
                    return t
                })
            })
        }

        function R(t) {
            return u(t).allSettled()
        }

        function L(t, e) {
            return u(t).then(void 0, void 0, e)
        }

        function I(t, e) {
            return u(t).nodeify(e)
        }
        var B = !1;
        try {
            throw new Error
        } catch (q) {
            B = !!q.stack
        }
        var H, z, X = l(),
            W = function () {},
            Y = function () {
                function t() {
                    for (; e.next;) {
                        e = e.next;
                        var n = e.task;
                        e.task = void 0;
                        var r = e.domain;
                        r && (e.domain = void 0, r.enter());
                        try {
                            n()
                        } catch (s) {
                            if (o) throw r && r.exit(), setTimeout(t, 0), r && r.enter(), s;
                            setTimeout(function () {
                                throw s
                            }, 0)
                        }
                        r && r.exit()
                    }
                    i = !1
                }
                var e = {
                        task: void 0,
                        next: null
                    },
                    n = e,
                    i = !1,
                    r = void 0,
                    o = !1;
                if (Y = function (t) {
                        n = n.next = {
                            task: t,
                            domain: o && process.domain,
                            next: null
                        }, i || (i = !0, r())
                    }, "undefined" != typeof process && process.nextTick) o = !0, r = function () {
                    process.nextTick(t)
                };
                else if ("function" == typeof setImmediate) r = "undefined" != typeof window ? setImmediate.bind(window, t) : function () {
                    setImmediate(t)
                };
                else if ("undefined" != typeof MessageChannel) {
                    var s = new MessageChannel;
                    s.port1.onmessage = function () {
                        r = a, s.port1.onmessage = t, t()
                    };
                    var a = function () {
                        s.port2.postMessage(0)
                    };
                    r = function () {
                        setTimeout(t, 0), a()
                    }
                } else r = function () {
                    setTimeout(t, 0)
                };
                return Y
            }(),
            V = Function.call,
            U = t(Array.prototype.slice),
            G = t(Array.prototype.reduce || function (t, e) {
                var n = 0,
                    i = this.length;
                if (1 === arguments.length)
                    for (;;) {
                        if (n in this) {
                            e = this[n++];
                            break
                        }
                        if (++n >= i) throw new TypeError
                    }
                for (; n < i; n++) n in this && (e = t(e, this[n], n));
                return e
            }),
            Q = t(Array.prototype.indexOf || function (t) {
                for (var e = 0; e < this.length; e++)
                    if (this[e] === t) return e;
                return -1
            }),
            Z = t(Array.prototype.map || function (t, e) {
                var n = this,
                    i = [];
                return G(n, function (r, o, s) {
                    i.push(t.call(e, o, s, n))
                }, void 0), i
            }),
            K = Object.create || function (t) {
                function e() {}
                return e.prototype = t, new e
            },
            J = t(Object.prototype.hasOwnProperty),
            tt = Object.keys || function (t) {
                var e = [];
                for (var n in t) J(t, n) && e.push(n);
                return e
            },
            et = t(Object.prototype.toString);
        z = "undefined" != typeof ReturnValue ? ReturnValue : function (t) {
            this.value = t
        };
        var nt = "From previous event:";
        u.resolve = u, u.nextTick = Y, u.longStackSupport = !1, "object" == typeof process && process && process.env && process.env.Q_DEBUG && (u.longStackSupport = !0), u.defer = h, h.prototype.makeNodeResolver = function () {
            var t = this;
            return function (e, n) {
                e ? t.reject(e) : arguments.length > 2 ? t.resolve(U(arguments, 1)) : t.resolve(n)
            }
        }, u.Promise = p, u.promise = p, p.race = f, p.all = N, p.reject = C, p.resolve = u, u.passByCopy = function (t) {
            return t
        }, d.prototype.passByCopy = function () {
            return this
        }, u.join = function (t, e) {
            return u(t).join(e)
        }, d.prototype.join = function (t) {
            return u([this, t]).spread(function (t, e) {
                if (t === e) return t;
                throw new Error("Can't join: not the same: " + t + " " + e)
            })
        }, u.race = f, d.prototype.race = function () {
            return this.then(u.race)
        }, u.makePromise = d, d.prototype.toString = function () {
            return "[object Promise]"
        }, d.prototype.then = function (t, e, n) {
            function r(e) {
                try {
                    return "function" == typeof t ? t(e) : e
                } catch (n) {
                    return C(n)
                }
            }

            function o(t) {
                if ("function" == typeof e) {
                    i(t, a);
                    try {
                        return e(t)
                    } catch (n) {
                        return C(n)
                    }
                }
                return C(t)
            }

            function s(t) {
                return "function" == typeof n ? n(t) : t
            }
            var a = this,
                l = h(),
                c = !1;
            return u.nextTick(function () {
                a.promiseDispatch(function (t) {
                    c || (c = !0, l.resolve(r(t)))
                }, "when", [function (t) {
                    c || (c = !0, l.resolve(o(t)))
                }])
            }), a.promiseDispatch(void 0, "when", [void 0, function (t) {
                var e, n = !1;
                try {
                    e = s(t)
                } catch (i) {
                    if (n = !0, !u.onerror) throw i;
                    u.onerror(i)
                }
                n || l.notify(e)
            }]), l.promise
        }, u.tap = function (t, e) {
            return u(t).tap(e)
        }, d.prototype.tap = function (t) {
            return t = u(t), this.then(function (e) {
                return t.fcall(e).thenResolve(e)
            })
        }, u.when = g, d.prototype.thenResolve = function (t) {
            return this.then(function () {
                return t
            })
        }, u.thenResolve = function (t, e) {
            return u(t).thenResolve(e)
        }, d.prototype.thenReject = function (t) {
            return this.then(function () {
                throw t
            })
        }, u.thenReject = function (t, e) {
            return u(t).thenReject(e)
        }, u.nearer = m, u.isPromise = v, u.isPromiseAlike = y, u.isPending = _, d.prototype.isPending = function () {
            return "pending" === this.inspect().state
        }, u.isFulfilled = x, d.prototype.isFulfilled = function () {
            return "fulfilled" === this.inspect().state
        }, u.isRejected = b, d.prototype.isRejected = function () {
            return "rejected" === this.inspect().state
        };
        var it = [],
            rt = [],
            ot = !0;
        u.resetUnhandledRejections = w, u.getUnhandledReasons = function () {
            return it.slice()
        }, u.stopUnhandledRejectionTracking = function () {
            w(), ot = !1
        }, w(), u.reject = C, u.fulfill = E, u.master = S, u.spread = F, d.prototype.spread = function (t, e) {
            return this.all().then(function (e) {
                return t.apply(void 0, e)
            }, e)
        }, u.async = P, u.spawn = D, u["return"] = j, u.promised = O, u.dispatch = $, d.prototype.dispatch = function (t, e) {
            var n = this,
                i = h();
            return u.nextTick(function () {
                n.promiseDispatch(i.resolve, t, e)
            }), i.promise
        }, u.get = function (t, e) {
            return u(t).dispatch("get", [e])
        }, d.prototype.get = function (t) {
            return this.dispatch("get", [t])
        }, u.set = function (t, e, n) {
            return u(t).dispatch("set", [e, n])
        }, d.prototype.set = function (t, e) {
            return this.dispatch("set", [t, e])
        }, u.del = u["delete"] = function (t, e) {
            return u(t).dispatch("delete", [e])
        }, d.prototype.del = d.prototype["delete"] = function (t) {
            return this.dispatch("delete", [t])
        }, u.mapply = u.post = function (t, e, n) {
            return u(t).dispatch("post", [e, n])
        }, d.prototype.mapply = d.prototype.post = function (t, e) {
            return this.dispatch("post", [t, e])
        }, u.send = u.mcall = u.invoke = function (t, e) {
            return u(t).dispatch("post", [e, U(arguments, 2)])
        }, d.prototype.send = d.prototype.mcall = d.prototype.invoke = function (t) {
            return this.dispatch("post", [t, U(arguments, 1)])
        }, u.fapply = function (t, e) {
            return u(t).dispatch("apply", [void 0, e])
        }, d.prototype.fapply = function (t) {
            return this.dispatch("apply", [void 0, t])
        }, u["try"] = u.fcall = function (t) {
            return u(t).dispatch("apply", [void 0, U(arguments, 1)])
        }, d.prototype.fcall = function () {
            return this.dispatch("apply", [void 0, U(arguments)])
        }, u.fbind = function (t) {
            var e = u(t),
                n = U(arguments, 1);
            return function () {
                return e.dispatch("apply", [this, n.concat(U(arguments))])
            }
        }, d.prototype.fbind = function () {
            var t = this,
                e = U(arguments);
            return function () {
                return t.dispatch("apply", [this, e.concat(U(arguments))])
            }
        }, u.keys = function (t) {
            return u(t).dispatch("keys", [])
        }, d.prototype.keys = function () {
            return this.dispatch("keys", [])
        }, u.all = N, d.prototype.all = function () {
            return N(this)
        }, u.allResolved = c(M, "allResolved", "allSettled"), d.prototype.allResolved = function () {
            return M(this)
        }, u.allSettled = R, d.prototype.allSettled = function () {
            return this.then(function (t) {
                return N(Z(t, function (t) {
                    function e() {
                        return t.inspect()
                    }
                    return t = u(t), t.then(e, e)
                }))
            })
        }, u.fail = u["catch"] = function (t, e) {
            return u(t).then(void 0, e)
        }, d.prototype.fail = d.prototype["catch"] = function (t) {
            return this.then(void 0, t)
        }, u.progress = L, d.prototype.progress = function (t) {
            return this.then(void 0, void 0, t)
        }, u.fin = u["finally"] = function (t, e) {
            return u(t)["finally"](e)
        }, d.prototype.fin = d.prototype["finally"] = function (t) {
            return t = u(t), this.then(function (e) {
                return t.fcall().then(function () {
                    return e
                })
            }, function (e) {
                return t.fcall().then(function () {
                    throw e
                })
            })
        }, u.done = function (t, e, n, i) {
            return u(t).done(e, n, i)
        }, d.prototype.done = function (t, e, n) {
            var r = function (t) {
                    u.nextTick(function () {
                        if (i(t, o), !u.onerror) throw t;
                        u.onerror(t)
                    })
                },
                o = t || e || n ? this.then(t, e, n) : this;
            "object" == typeof process && process && process.domain && (r = process.domain.bind(r)), o.then(void 0, r)
        }, u.timeout = function (t, e, n) {
            return u(t).timeout(e, n)
        }, d.prototype.timeout = function (t, e) {
            var n = h(),
                i = setTimeout(function () {
                    e && "string" != typeof e || (e = new Error(e || "Timed out after " + t + " ms"), e.code = "ETIMEDOUT"), n.reject(e)
                }, t);
            return this.then(function (t) {
                clearTimeout(i), n.resolve(t)
            }, function (t) {
                clearTimeout(i), n.reject(t)
            }, n.notify), n.promise
        }, u.delay = function (t, e) {
            return void 0 === e && (e = t, t = void 0), u(t).delay(e)
        }, d.prototype.delay = function (t) {
            return this.then(function (e) {
                var n = h();
                return setTimeout(function () {
                    n.resolve(e)
                }, t), n.promise
            })
        }, u.nfapply = function (t, e) {
            return u(t).nfapply(e)
        }, d.prototype.nfapply = function (t) {
            var e = h(),
                n = U(t);
            return n.push(e.makeNodeResolver()), this.fapply(n).fail(e.reject), e.promise
        }, u.nfcall = function (t) {
            var e = U(arguments, 1);
            return u(t).nfapply(e)
        }, d.prototype.nfcall = function () {
            var t = U(arguments),
                e = h();
            return t.push(e.makeNodeResolver()), this.fapply(t).fail(e.reject), e.promise
        }, u.nfbind = u.denodeify = function (t) {
            var e = U(arguments, 1);
            return function () {
                var n = e.concat(U(arguments)),
                    i = h();
                return n.push(i.makeNodeResolver()), u(t).fapply(n).fail(i.reject), i.promise
            }
        }, d.prototype.nfbind = d.prototype.denodeify = function () {
            var t = U(arguments);
            return t.unshift(this), u.denodeify.apply(void 0, t)
        }, u.nbind = function (t, e) {
            var n = U(arguments, 2);
            return function () {
                function i() {
                    return t.apply(e, arguments)
                }
                var r = n.concat(U(arguments)),
                    o = h();
                return r.push(o.makeNodeResolver()), u(i).fapply(r).fail(o.reject), o.promise
            }
        }, d.prototype.nbind = function () {
            var t = U(arguments, 0);
            return t.unshift(this), u.nbind.apply(void 0, t)
        }, u.nmapply = u.npost = function (t, e, n) {
            return u(t).npost(e, n)
        }, d.prototype.nmapply = d.prototype.npost = function (t, e) {
            var n = U(e || []),
                i = h();
            return n.push(i.makeNodeResolver()), this.dispatch("post", [t, n]).fail(i.reject), i.promise
        }, u.nsend = u.nmcall = u.ninvoke = function (t, e) {
            var n = U(arguments, 2),
                i = h();
            return n.push(i.makeNodeResolver()), u(t).dispatch("post", [e, n]).fail(i.reject), i.promise
        }, d.prototype.nsend = d.prototype.nmcall = d.prototype.ninvoke = function (t) {
            var e = U(arguments, 1),
                n = h();
            return e.push(n.makeNodeResolver()), this.dispatch("post", [t, e]).fail(n.reject), n.promise
        }, u.nodeify = I, d.prototype.nodeify = function (t) {
            return t ? void this.then(function (e) {
                u.nextTick(function () {
                    t(null, e)
                })
            }, function (e) {
                u.nextTick(function () {
                    t(e)
                })
            }) : this
        };
        var st = l();
        return u
    }),
    function () {
        "use strict";
        B.Components.App = B.Core.Abstract.extend({
            options: {},
            construct: function (t) {
                this._super(t), this.viewport = new B.Tools.Viewport, this.scroller = new B.Tools.Scroller, this.keyboard = new B.Tools.Keyboard, this.mouse = new B.Tools.Mouse, this.detector = new B.Tools.Detector, this.parallax = new B.Tools.Parallax({
                    parse: !1
                }), this.loader = new B.Tools.Loader({
                    parse: !1
                }), this.resizer = new B.Tools.Resizer({
                    parse: !1
                }), this.popins = new B.Tools.Popins({
                    parse: !1
                }), this.magnetic_scroll = new B.Tools.Magnetic_Scroll({
                    active: !1
                }), this.header = new B.Components.Header, this.cookies = new B.Components.Cookies, this.init_carousels(), this.init_ajax(), this.init_page(this.options.page_data)
            },
            init_carousels: function () {
                var t = this;
                this.carousels_manager = new B.Tools.Carousels_Manager({
                    parse: !1
                }), this.magnetic_scroll.on("go-to", function (e) {
                    switch (e.name) {
                        case "kitchen":
                            t.carousels_manager.instances.kitchen.go_to(0);
                            break;
                        case "menu":
                            t.carousels_manager.instances.menu.go_to(0)
                    }
                })
            },
            init_ajax: function () {
                var t = this;
                this.ajax = new B.Tools.Ajax, this.ajax.on("init_page", function (e) {
                    t.init_page(e)
                })
            },
            init_page: function (t) {
                var e = this,
                    n = null;
                switch (this.page && this.page.destruct && "function" == typeof this.page.destruct && this.page.destruct(), t.name) {
                    case "index_index":
                        n = new B.Components.Home;
                        break;
                    case "index_test":
                        n = new B.Components.Test
                }
                this.page && (this.scroller.set_position(0), e.magnetic_scroll.update_sections()), this.header.update_from_page_data(t), this.loader.parse(), this.resizer.parse(), this.popins.parse(), this.carousels_manager.parse(), this.detector.features.touch || this.parallax.parse(), this.viewport.trigger("resize", [this.viewport.width, this.viewport.height]), this.viewport.trigger("scroll", [this.viewport.top, this.viewport.left]), this.page = n, FastClick.attach(document.body)
            }
        })
    }(),
    function () {
        "use strict";
        B.Components.Header = B.Core.Abstract.extend({
            options: {},
            construct: function (t) {
                this._super(t), this.magnetic_scroll = new B.Tools.Magnetic_Scroll, this.viewport = new B.Tools.Viewport, this.$.container = $("header.header"), this.$.ajaxContainer = $("#ajax-container"), this.$.partialMenu = this.$.container.find(".partial-navigation"), this.$.partialMenuLeft = this.$.container.find(".partial-navigation .left"), this.$.partialMenuRight = this.$.container.find(".partial-navigation .right .orange-background"), this.$.partialMenuCTA = this.$.container.find(".partial-navigation .right"), this.$.partialMenuBurger = this.$.container.find(".partial-navigation .right .burger-cta"), this.$.navTopRight = this.$.container.find("nav.links"), this.$.titles = this.$.container.find("a.title"),
                    this.init_langs(), this.init_nav_mobile()
            },
            init_langs: function () {
                this.langs = {
                    $: {}
                }, this.langs.$.container = this.$.container.find(".langs"), this.langs.$.items = this.langs.$.container.find("a")
            },
            update_from_page_data: function (t) {
                $("body").scrollTop(0);
                var e = this.$.titles.filter("." + t.name);
                this.$.titles.removeClass("active"), e.length && e.addClass("active"), this.set_theme(t.header_theme), this.update_langs(t.routes), this.$.partialMenuRight.hasClass("translate-top") && this.$.partialMenuCTA.trigger("click"), "index_index" === t.name ? this.$.partialMenuLeft.removeClass("translate-top-fixed") : this.$.partialMenuLeft.addClass("translate-top-fixed")
            },
            set_theme: function (t) {
                this.$.container.removeClass("light dark"), this.$.container.addClass(t)
            },
            update_langs: function (t) {
                "string" == typeof t && (t = JSON.parse(t));
                for (var e in t) {
                    var n = t[e],
                        i = this.langs.$.items.filter("." + e),
                        r = $("#footer-lang-" + e),
                        o = $("#header-lang-" + e);
                    i.length && i.attr("href", n), r.length && r.attr("href", n), o.length && o.attr("href", n)
                }
            },
            init_nav_mobile: function () {
                var t = this;
                this.$.partialMenuCTA.on("click", function (e) {
                    if (t.$.partialMenuRight.hasClass("translate-top")) t.$.partialMenuRight.removeClass("translate-top"), t.$.partialMenuLeft.removeClass("translate-top"), t.$.navTopRight.removeClass("translate-top"), t.$.partialMenuBurger.removeClass("closed"), t.$.ajaxContainer.find(".mask-menu").remove(), $("html").removeClass("no-scrolling"), $("body").removeClass("no-scrolling");
                    else {
                        t.$.partialMenuRight.addClass("translate-top"), t.$.partialMenuLeft.addClass("translate-top"), t.$.navTopRight.addClass("translate-top"), t.$.partialMenuBurger.addClass("closed");
                        var n = $('<div class="mask-menu" />');
                        t.$.ajaxContainer.append(n), n.css({
                            height: $("body").outerHeight() + "px"
                        }), $("html").addClass("no-scrolling"), $("body").addClass("no-scrolling")
                    }
                })
            }
        })
    }(),
    function () {
        "use strict";
        B.Components.Carousel = B.Core.Abstract.extend({
            options: {
                auto: {
                    active: !1,
                    interval_duration: 4e3
                }
            },
            construct: function (t) {
                this._super(t), this.$.container = this.options.target, this.set_options_from_dom(), this.detector = new B.Tools.Detector, this.viewport = new B.Tools.Viewport, this.keyboard = new B.Tools.Keyboard, this.scroller = new B.Tools.Scroller, this.indexes = {}, this.indexes.leaving = null, this.indexes.active = null, this.indexes.coming = null, this.init_siblings(), this.init_pagination(), this.init_items(), this.init_keyboard(), this.init_touch(), this.init_auto()
            },
            set_options_from_dom: function () {
                var t = this.$.container.data("carousel-options-auto-active"),
                    e = this.$.container.data("carousel-options-auto-interval-duration");
                !!navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
                "undefined" != typeof t && (this.options.auto.active = t), "undefined" != typeof e && (this.options.auto.interval_duration = e)
            },
            next: function (t) {
                "undefined" == typeof t && (t = !1);
                var e = this.indexes.active + 1;
                e > this.items.count - 1 && (e = 0), this.go_to(e, "next", t)
            },
            prev: function (t) {
                "undefined" == typeof t && (t = !1);
                var e = this.indexes.active - 1;
                e < 0 && (e = this.items.count - 1), this.go_to(e, "prev", t)
            },
            go_to: function (t, e, n, i) {
                if (this.indexes.active === t) return !1;
                this.viewport.trigger("resize"), "undefined" == typeof e && (e = "next"), "undefined" == typeof n && (n = !1), "undefined" == typeof i && (i = !0);
                var r = "next" === e ? 1 : -1;
                if (this.indexes.leaving = this.indexes.active, this.indexes.leaving < 0 ? this.indexes.leaving = this.items.count - 1 : this.indexes.leaving > this.items.count - 1 && (this.indexes.leaving = 0), this.indexes.active = t, this.indexes.coming = t + r, this.indexes.coming < 0 ? this.indexes.coming = this.items.count - 1 : this.indexes.coming > this.items.count - 1 && (this.indexes.coming = 0), n) {
                    var o = this.$.container.offset().top + .5 * this.$.container.outerHeight() - .5 * this.viewport.height;
                    this.scroller.animate_to(o, 600)
                }
                this.update_items(e), this.update_pagination()
            },
            init_items: function () {
                this.items = {
                    $: {}
                }, this.items.$.container = this.$.container.find(".content"), this.items.$.all = this.items.$.container.find(".item"), this.items.$.leaving = null, this.items.$.active = null, this.items.$.coming = null, this.items.count = this.items.$.all.length, this.go_to(0, void 0, void 0, !1)
            },
            update_items: function (t, e) {
                var n = this;
                "undefined" == typeof t && (t = "next"), "undefined" == typeof e && (e = !0), this.items.$.leaving = this.items.$.all.eq(this.indexes.leaving), this.items.$.active = this.items.$.all.eq(this.indexes.active), this.items.$.coming = this.items.$.all.eq(this.indexes.coming), this.items.$.all.removeClass("animated next-before before active after next-after"), "next" === t ? (this.items.$.leaving.addClass("active"), this.items.$.active.addClass("after"), this.items.count > 2 && this.items.$.coming.addClass("next-after")) : (this.items.$.leaving.addClass("active"), this.items.$.active.addClass("before"), this.items.count > 2 && this.items.$.coming.addClass("next-before")), window.setTimeout(function () {
                    e && n.items.$.all.addClass("animated"), n.items.$.all.removeClass("next-before before active after next-after"), "next" === t ? (n.items.$.leaving.addClass("before"), n.items.$.active.addClass("active"), n.items.count > 2 && n.items.$.coming.addClass("after")) : (n.items.$.leaving.addClass("after"), n.items.$.active.addClass("active"), n.items.count > 2 && n.items.$.coming.addClass("before"))
                }, 30)
            },
            init_siblings: function () {
                var t = this;
                this.siblings = {
                    $: {}
                }, this.siblings.$.container = this.$.container.find(".siblings"), this.siblings.$.next = this.siblings.$.container.find(".next"), this.siblings.$.prev = this.siblings.$.container.find(".prev"), this.siblings.active = !!this.siblings.$.container.length, this.siblings.active && (this.siblings.$.next.on("mouseenter mouseleave click", function (e) {
                    switch (e.type) {
                        case "mouseenter":
                            t.$.container.addClass("next-hover");
                            break;
                        case "mouseleave":
                            t.$.container.removeClass("next-hover");
                            break;
                        case "click":
                            t.next(!0)
                    }
                    return !1
                }), this.siblings.$.prev.on("mouseenter mouseleave click", function (e) {
                    switch (e.type) {
                        case "mouseenter":
                            t.$.container.addClass("prev-hover");
                            break;
                        case "mouseleave":
                            t.$.container.removeClass("prev-hover");
                            break;
                        case "click":
                            t.prev()
                    }
                    return !1
                }))
            },
            update_siblings: function () {
                !this.siblings.active
            },
            init_pagination: function () {
                var t = this;
                this.pagination = {
                    $: {}
                }, this.pagination.$.container = this.$.container.find(".pagination"), this.pagination.$.all = this.pagination.$.container.find(".item"), this.pagination.active = !!this.pagination.$.container.length, this.pagination.active && this.pagination.$.all.on("click", function () {
                    var e = $(this).index(),
                        n = e < t.indexes.active ? "prev" : "next";
                    return t.go_to(e, n, !0), !1
                })
            },
            update_pagination: function () {
                this.pagination.active && (this.pagination.$.all.removeClass("active"), this.pagination.$.all.eq(this.indexes.active).addClass("active"))
            },
            init_keyboard: function () {
                var t = this;
                this.keyboard.on("down", function (e, n) {
                    var i = t.$.container.offset().top + .5 * t.$.container.outerHeight();
                    if (i > t.viewport.top && i < t.viewport.top + t.viewport.height) {
                        if ("left" === n) return t.prev(!0), !1;
                        if ("right" === n) return t.next(!0), !1
                    }
                })
            },
            init_touch: function () {
                var t = this;
                return !!this.detector.features.touch && (this.hammertime = new Hammer(this.$.container[0]), this.hammertime.get("swipe").set({
                    direction: Hammer.DIRECTION_HORIZONTAL,
                    threshold: 5
                }), void this.hammertime.on("swipe", function (e) {
                    e.direction === Hammer.DIRECTION_LEFT ? t.next() : e.direction === Hammer.DIRECTION_RIGHT && t.prev()
                }))
            },
            init_auto: function () {
                var t = this;
                this.auto = this.options.auto, this.detector.features.touch && (this.auto.active = !1), this.auto.callback = function () {
                    t.next(), t.auto.timeout = window.setTimeout(t.auto.callback, t.auto.interval_duration)
                }, this.auto.stop = function () {
                    t.auto.timeout && window.clearTimeout(t.auto.timeout)
                }, this.auto.start = function () {
                    t.auto.timeout = window.setTimeout(t.auto.callback, t.auto.interval_duration)
                }, this.$.container.on("mouseenter", function () {
                    t.auto.stop()
                }), this.$.container.on("mouseleave", function () {
                    t.auto.active && t.auto.start()
                }), this.auto.active && this.auto.start()
            }
        })
    }(),
    function () {
        "use strict";
        B.Components.Cookies = B.Core.Abstract.extend({
            options: {},
            construct: function (t) {
                this._super(t), this.$.container = $(".cookies"), this.init_close()
            },
            init_close: function (t) {
                var e = this;
                this.$.close = this.$.container.find("a.close"), this.$.close.on("click", function () {
                    return e.$.container.removeClass("active"), !1
                })
            }
        })
    }(),
    function () {
        "use strict";
        B.Tools.Manager = B.Core.Abstract.extend({
            "static": "dummy",
            options: {
                default_constructor: B.Components.Dummy,
                data_attribute: "dummy-instance",
                parse: !0,
                classes: {
                    to_set: "b-dummy-to-set",
                    set: "b-dummy-set"
                }
            },
            construct: function (t) {
                this._super(t), this.instances = {}, this.all_instances = [], this.init_navigation(), this.options.parse && this.parse()
            },
            init_navigation: function () {
                var t = this;
                this.navigation = new B.Tools.Navigation, this.navigation.on("reset", function () {
                    for (var e in t.instances) {
                        var n = t.instances[e];
                        "function" == typeof n.reset && n.reset()
                    }
                })
            },
            parse: function (t) {
                var e = this;
                "undefined" != typeof t && t.length || (t = $("body"));
                var n = t.find("." + this.options.classes.to_set).not("." + this.options.classes.set);
                n.each(function () {
                    e.set($(this))
                })
            },
            set: function (t) {
                var e = t.data("constructor"),
                    n = null,
                    i = null,
                    r = t[0].id || t.data("id");
                n = e ? B.Components[e] : this.options.default_constructor, i = new n({
                    target: t
                }), r && (i.id = r, this.instances[r] = i), this.all_instances.push(i), t.addClass(this.options.classes.set), t.data(this.options.data_attribute, i)
            }
        })
    }(),
    function () {
        "use strict";
        B.Tools.Carousels_Manager = B.Tools.Manager.extend({
            "static": "carousels_manager",
            options: {
                default_constructor: B.Components.Carousel,
                data_attribute: "carousel-instance",
                parse: !0,
                classes: {
                    to_set: "b-carousel",
                    set: "b-carousel-set"
                }
            }
        })
    }(),
    function () {
        "use strict";
        B.Tools.Loader = B.Core.Abstract.extend({
            "static": "loader",
            options: {
                parse: !0,
                classes: {
                    to_load: "b-to-load",
                    loading: "b-loading",
                    loaded: "b-loaded"
                },
                retina: {
                    active: !0,
                    suffix: "-2x"
                }
            },
            construct: function (t) {
                this._super(t), this.viewport = new B.Tools.Viewport, this.resizer = new B.Tools.Resizer, this.options.parse && this.parse()
            },
            parse: function (t) {
                var e = this;
                "undefined" != typeof t && t.length || (t = $("body"));
                var n = t.find("." + this.options.classes.to_load);
                n.each(function () {
                    e.load($(this))
                })
            },
            load: function (t) {
                function e() {
                    i.addClass(n.options.classes.loaded), i.removeClass(n.options.classes.loading), "undefined" == typeof o.attr("width") && o.attr("width", Math.round(a.width * (r ? .5 : 1))), "undefined" == typeof o.attr("height") && o.attr("height", Math.round(a.height * (r ? .5 : 1))), i.hasClass("b-resize") && n.resizer.resize(i[0], o[0]), o.attr("src", s)
                }
                var n = this,
                    i = t,
                    r = this.options.retina.active && i.hasClass("retina") && this.viewport.pixel_ratio > 1.3,
                    o = i.find("img"),
                    s = o.attr("src"),
                    a = new Image,
                    l = +new Date,
                    c = i.data("loader-minimum-duration");
                "undefined" == typeof c && (c = 0), r && (s = this.get_retina_path(s)), i.addClass(this.options.classes.loading), o.attr("src", ""), a.onload = function () {
                    var t = +new Date,
                        n = t - l;
                    n < c ? window.setTimeout(e, Math.random() * c) : e()
                }, a.onerror = function () {}, a.src = s
            },
            get_retina_path: function (t) {
                var e = t.split(".");
                return e[e.length - 2] = e[e.length - 2] + this.options.retina.suffix, t = e.join(".")
            }
        })
    }(), B.Tools.Scroller = B.Core.Event_Emitter.extend({
        "static": "scroller",
        options: {
            default_duration: 900
        },
        construct: function (t) {
            this._super(t), this.viewport = new B.Tools.Viewport, this.default_duration = this.options.default_duration, this.animated = !1, this.callback = null, this.position = {}, this.position.start = null, this.position.offset = null, this.position.target = null, this.time = {}, this.time.start = null, this.time.current = null, this.time.delta = null, this.time.duration = null, this.init_eases(), this.init_ticker()
        },
        init_eases: function () {
            this.eases = {}, this.eases.inOutQuad = function (t, e, n, i) {
                return t /= i / 2, t < 1 ? n / 2 * t * t + e : (t--, -n / 2 * (t * (t - 2) - 1) + e)
            }, this.eases.inCubic = function (t, e, n, i) {
                var r = (t /= i) * t * t;
                return e + n * r
            }, this.eases.outQuintic = function (t, e, n, i) {
                var r = (t /= i) * t,
                    o = r * t;
                return e + n * (6 * o * r + -15 * r * r + 10 * o)
            }
        },
        init_ticker: function () {
            var t = this;
            this.ticker = new B.Tools.Ticker, this.ticker.on("tick", function (e) {
                if (t.animated) {
                    var n = e.current - t.time.start;
                    if (n < t.time.duration) {
                        var i = t.eases.inOutQuad(n, t.position.start, t.position.offset, t.time.duration);
                        t.set_position(i), t.trigger("progress")
                    } else t.set_position(t.position.target), t.animated = !1, "function" == typeof t.callback && t.callback.apply(t), t.trigger("end")
                }
            })
        },
        set_position: function (t) {
            document.documentElement.scrollTop = t, document.body.parentNode.scrollTop = t, document.body.scrollTop = t
        },
        animate_to: function (t, e, n) {
            if ("object" == typeof HTMLElement ? t instanceof HTMLElement : t && "object" == typeof t && null !== t && 1 === t.nodeType && "string" == typeof t.nodeName) t = t.offsetTop;
            else {
                if ("number" != typeof t) return !1;
                t = ~~t
            }
            this.animated = !0, this.position.start = this.viewport.top, this.position.target = t, this.position.offset = this.position.target - this.position.start, this.time.start = +new Date, this.time.current = 0, this.time.duration = "undefined" == typeof e ? this.default_duration : e, this.callback = n, this.trigger("start")
        }
    }),
    function () {
        "use strict";
        B.Tools.Parallax = B.Core.Abstract.extend({
            "static": "parallax",
            options: {
                parse: !0,
                classes: {
                    to_parallax: "b-parallax",
                    loading: "b-parallaxed",
                    stop: "b-no-parallaxed"
                }
            },
            construct: function (t) {
                this._super(t), this.viewport = new B.Tools.Viewport, this.options.parse && this.parse()
            },
            parse: function (t) {
                var e = this;
                "undefined" != typeof t && t.length || (t = $("body"));
                var n = t.find("." + this.options.classes.to_parallax);
                n.each(function () {
                    e.set_parallax($(this))
                })
            },
            set_parallax: function (t) {
                var e = this,
                    n = t.offset().top,
                    i = n - this.viewport.height,
                    r = n + a + o,
                    o = t.data("parallax-amplitude") ? t.data("parallax-amplitude") : 150,
                    s = t.data("parallax-height-offset") ? t.data("parallax-height-offset") : 0,
                    a = t.outerHeight() + s,
                    l = 0;
                this.viewport.on("resize", function () {
                    n = t.offset().top, i = n - e.viewport.height, r = n + a + o, i < 0 && (i = 0)
                }), this.viewport.on("scroll", function () {
                    t.hasClass(e.options.classes.stop) || (l = (e.viewport.top - i) / (r - i), l < 0 || isNaN(l) ? l = 0 : l > 1 && (l = 1), t.css("transform", "translateY(" + l * o + "px) translateZ(0)"))
                })
            }
        })
    }(),
    function () {
        "use strict";
        B.Tools.Popins = B.Core.Event_Emitter.extend({
            "static": "popin",
            options: {
                parse: !0,
                classes: {
                    contents: {
                        to_set: "b-popin-content",
                        set: "b-popin-content-set"
                    },
                    triggers: {
                        to_set: "b-popin-trigger",
                        set: "b-popin-trigger-set"
                    }
                }
            },
            construct: function (t) {
                this._super(t), this.$.container = $(".b-popin-container"), this.$.inner = this.$.container.find(".inner"), this.$.contents = $(), this.$.content = null, this.$.body = $("body"), this.viewport = new B.Tools.Viewport, this.keyboard = new B.Tools.Keyboard, this.mode = "default", this.opened = !1, this.isMobileTablet = !!navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i), this.init_close(), this.init_resize(), this.options.parse && this.parse()
            },
            init_resize: function () {
                var t = this;
                this.viewport.on("resize", function () {
                    t.check_popin_content_size()
                })
            },
            parse: function (t) {
                this.parse_contents(), this.parse_triggers()
            },
            parse_contents: function (t) {
                var e = this;
                "undefined" != typeof t && t.length || (t = this.$.body);
                var n = t.find("." + this.options.classes.contents.to_set).not("." + this.options.classes.contents.set);
                n.each(function () {
                    e.set_content($(this))
                }), this.$.contents = this.$.container.find("." + this.options.classes.contents.to_set)
            },
            parse_triggers: function (t) {
                var e = this;
                "undefined" != typeof t && t.length || (t = this.$.body);
                var n = t.find("." + this.options.classes.triggers.to_set).not("." + this.options.classes.triggers.set);
                n.each(function () {
                    e.set_trigger($(this))
                })
            },
            set_content: function (t) {
                t.addClass(this.options.classes.contents.set), t.detach().appendTo(this.$.inner)
            },
            set_trigger: function (t) {
                var e = this,
                    n = t.data("popin-id");
                t.addClass(this.options.classes.triggers.set), t.on("click", function () {
                    return e.open(n), !1
                })
            },
            init_close: function () {
                var t = this;
                this.$.close = this.$.container.find("a.close"), this.$.background = this.$.container.find(".background"), this.$.close.add(this.$.background).on("click touchstart", function (e) {
                    return e.preventDefault(), e.stopPropagation(), t.close(), !1
                }), this.keyboard.on("down", function (e, n) {
                    if ("esc" === n) return t.close(), !1
                })
            },
            open: function (t) {
                var e = this;
                if (t) {
                    var n = this.$.contents.filter("." + t);
                    if (n.length) {
                        TweenLite.set(this.$.container, {
                            display: "table",
                            autoAlpha: 0
                        }), TweenLite.to(this.$.container, .3, {
                            autoAlpha: 1
                        }), TweenLite.set(n, {
                            display: "inline-block"
                        }), TweenLite.set(this.$.contents.not(n), {
                            display: "none"
                        }), window.setTimeout(function () {
                            e.check_popin_content_size(), e.$.container[0].scrollTop = 0, e.$.container.find(".inner").scrollTop(0), e.viewport.trigger("resize", [e.viewport.width, e.viewport.height])
                        }, 10);
                        var i = n.data("popin-classes") || "";
                        this.$.container.removeClass(this.classes), this.$.container.addClass(i), this.classes = i, this.$.content = n, this.opened = !0, e.trigger("open")
                    }
                }
            },
            close: function (t) {
                var e = this;
                this.opened && (t = "undefined" == typeof t ? .2 : t, TweenLite.to(this.$.container, t, {
                    autoAlpha: 0,
                    onComplete: function () {
                        TweenLite.to(e.$.container, {
                            display: "none"
                        }), e.mode && (TweenLite.set(e.$.container, {
                            display: "table"
                        }), e.$.container.removeClass("scroll"), e.$.body.removeClass("scroll-locked"), e.mode = "default")
                    }
                }), this.$.content = null, this.opened = !1)
            },
            check_popin_content_size: function (t) {
                this.opened && (this.$.content.outerHeight() > this.viewport.height ? "default" === this.mode && (TweenLite.set(this.$.container, {
                    display: "block"
                }), this.$.container.addClass("scroll"), this.$.body.addClass("scroll-locked"), this.mode = "scroll") : "scroll" === this.mode && (TweenLite.set(this.$.container, {
                    display: "table"
                }), this.$.container.removeClass("scroll"), this.$.body.removeClass("scroll-locked"), this.mode = "default"))
            }
        })
    }(),
    function () {
        "use strict";
        B.Tools.Magnetic_Scroll = B.Core.Event_Emitter.extend({
            "static": "magnetic-scroll",
            options: {
                active: !0,
                classes: {
                    sections: "b-magnetic-scroll-section"
                }
            },
            construct: function (t) {
                this._super(t), this.viewport = new B.Tools.Viewport, this.scroller = new B.Tools.Scroller, this.active = this.options.active, this.classes = this.options.classes, this.index = 0, this.animating = !1, this.init_sections(), this.init_keyboard(), this.init_mouse(), this.init_viewport(), this.init_first()
            },
            init_first: function () {
                var t = this,
                    e = window.location.hash;
                e.length && (e = e.substr(1, e.length - 1), e.length && window.setTimeout(function () {
                    t.go_to(e, 100)
                }, 100))
            },
            init_sections: function () {
                this.sections = {
                    $: {}
                }, this.sections.current = null, this.sections.all = []
            },
            update_sections: function () {
                var t = this,
                    e = $("." + this.classes.sections),
                    n = [],
                    i = 0;
                e.each(function () {
                    var e = $(this),
                        r = {};
                    r.index = i++, r.top = e.offset().top, r.height = e.outerHeight(), r.bottom = r.top + r.height, r.name = e.data("magnetic-scroll-section"), r.hash = e.data("magnetic-scroll-hash"), r.hash || (r.hash = !1), t.sections.current && t.sections.current.index === r.index && t.set_current(r), n.push(r)
                }), this.sections.all = n
            },
            get_section_for_y: function (t) {
                for (var e in this.sections.all) {
                    var n = this.sections.all[e];
                    if (t >= n.top && t < n.bottom) return n
                }
                return !1
            },
            init_viewport: function () {
                var t = this;
                this.viewport = new B.Tools.Viewport, this.viewport.on("resize", function () {
                    t.update_sections(), t.active && t.sections.current && t.scroller.set_position(t.sections.current.top)
                }), this.viewport.on("scroll", function () {
                    var e = t.get_section_for_y(t.viewport.top + .5 * t.viewport.height);
                    e && t.set_current(e)
                })
            },
            init_keyboard: function () {
                var t = this;
                this.keyboard = new B.Tools.Keyboard, this.keyboard.on("down", function (e, n) {
                    switch (n) {
                        case "down":
                        case "j":
                            t.next();
                            break;
                        case "up":
                        case "k":
                            t.prev()
                    }
                    if (["down", "j", "up", "k"].indexOf(n) !== -1) return !1
                })
            },
            init_mouse: function () {
                var t = this;
                this.mouse = new B.Tools.Mouse, this.mouse.on("wheel", function (e) {
                    if (t.active) return e.delta ? t.wheeling(e.delta) : void 0
                })
            },
            wheeling: function (t) {
                var e = null,
                    n = t < 0 ? "down" : "up";
                return !this.animating && (e = "up" === n ? this.get_section_for_y(this.viewport.top) : this.get_section_for_y(this.viewport.top + this.viewport.height), this.sections.current && e.index !== this.sections.current.index ? ("up" === n ? this.prev() : this.next(), !1) : void 0)
            },
            next: function () {
                this.go_to(this.sections.current.index + 1)
            },
            prev: function () {
                this.go_to(this.sections.current.index - 1)
            },
            go_to: function (t, e) {
                var n = this,
                    i = null;
                if ("number" == typeof t) i = this.sections.all[t];
                else if ("string" == typeof t)
                    for (var r in this.sections.all) this.sections.all[r].name === t && (i = this.sections.all[r]);
                if (!i) return !1;
                e = "undefined" == typeof e ? 900 : e;
                var o = null !== this.sections.current && t.index < this.sections.current.index ? "up" : "down",
                    s = null;
                "down" === o ? s = i.top : "up" === o && (s = i.height > this.viewport.height ? i.bottom - this.viewport.height : i.top), n.animating = !0, this.scroller.animate_to(s, e, function () {
                    n.animating = !1
                }), this.sections.current = i, this.trigger("go-to", [this.sections.current])
            },
            set_current: function (t) {
                this.sections.current && t.name === this.sections.current.name || (this.sections.current = t, window.location.hash = t.hash ? t.hash : "", this.trigger("current-section-change", [t]))
            }
        })
    }(),
    function () {
        "use strict";
        B.Tools.Ajax = B.Core.Event_Emitter.extend({
            "static": "ajax",
            options: {
                parse: !0,
                classes: {
                    container: "ajax-container",
                    to_set: "b-ajax",
                    set: "b-ajax-set"
                }
            },
            construct: function (t) {
                this._super(t), this.instance = null, this.$ = {}, this.$.container = $("." + this.options.classes.container), this.$.title = $("title"), this.$.body = $("body"), this.options.parse && this.parse(), this.init_navigation()
            },
            init_navigation: function () {
                var t = this;
                this.navigation = new B.Tools.Navigation, this.navigation.on("pop", function (e, n) {
                    t.load(n, !0)
                })
            },
            init_page: function (t) {
                var e = this,
                    n = this.extract_data($(t.html));
                for (var i in n) t[i] = n[i];
                this.$.container.html(t.html), this.$.body.data("name") !== t.name && (this.$.body.removeClass(this.$.body.data("name")), this.$.body.data("name", t.name), window.setTimeout(function () {
                    e.$.body.addClass(t.name)
                }, 30)), this.parse(), "undefined" != typeof t.title && this.$.title.text(t.title), "undefined" != typeof t.url && this.navigation.push(t, t.url), this.trigger("init_page", [t])
            },
            parse: function (t) {
                var e = this;
                "undefined" != typeof t && t.length || (t = $("body"));
                var n = t.find("." + this.options.classes.to_set).not("." + this.options.classes.set);
                n.each(function () {
                    e.ajaxify($(this))
                })
            },
            ajaxify: function (t) {
                var e = this;
                t && t.length && (t.addClass(this.options.classes.set), t.on("click", function () {
                    return e.load(t.attr("href")), !1
                }))
            },
            load: function (t, e) {
                var n = this;
                "undefined" == typeof e && (e = !1), Q.allSettled([this.hide(), this.call(t)]).then(function (i) {
                    var r = i[1].value;
                    e || (r.url = t), n.init_page(r), n.show()
                }), this.trigger("load")
            },
            call: function (t) {
                var e = Q.defer();
                return this.instance && this.instance.abort(), this.instance = $.ajax({
                    url: t,
                    dataType: "json",
                    data: "ajax=1",
                    success: function (t) {
                        e.resolve(t)
                    },
                    error: function () {
                        console.log("error"), e.resolve()
                    }
                }), e.promise
            },
            hide: function () {
                var t = Q.defer();
                return this.$.body.addClass("ajax-transition"), window.setTimeout(function () {
                    t.resolve()
                }, 600), this.trigger("hide"), t.promise
            },
            show: function () {
                this.$.body.removeClass("ajax-transition"), this.trigger("show")
            },
            extract_data: function (t) {
                var e = {};
                return t.find("input.ajax-data").each(function () {
                    var t = $(this),
                        n = t.data("ajax-key"),
                        i = t.attr("value");
                    e[n] = i
                }), e
            }
        })
    }(),
    function () {
        "use strict";
        B.Tools.Navigation = B.Core.Event_Emitter.extend({
            "static": "navigation",
            options: {},
            construct: function (t) {
                this._super(t), this.history = !!history.pushState && window.history, this.state_id = 0, this.history && this.update_state({
                    _prevent_default_tag: 1,
                    title: document.title,
                    id: this.state_id
                }), this.init_events()
            },
            init_events: function () {
                if (this.history) {
                    var t = this;
                    window.onpopstate = function (e) {
                        var n = Object.create(e.state);
                        n._prevent_default_tag && (n.title && (document.title = n.title), n.direction = n.id < t.state_id ? "backward" : "frontward", t.state_id = n.id, t.trigger("pop", [n, window.location.href]))
                    }
                }
            },
            update_state: function (t, e) {
                if (this.history)
                    if (t._prevent_default_tag = 1, e || !this.history.state) {
                        this.history.replaceState(t, document.title, window.location.href);
                        try {
                            this.history.state = t
                        } catch (n) {
                            console.log("catch")
                        }
                    } else {
                        for (var i in t) try {
                            this.history.state[i] = t[i]
                        } catch (n) {
                            console.log("catch")
                        }
                        this.history.replaceState(this.history.state, document.title, window.location.href)
                    }
            },
            push: function (t, e) {
                this.history && (t.title && (document.title = t.title), t.id = ++this.state_id, t.tag = "test", this.history.pushState(t, t.title, e), this.trigger("push", [t, e]))
            }
        })
    }(),
    function () {
        "use strict";
        B.Components.Home = B.Core.Abstract.extend({
            options: {},
            construct: function (t) {
                this._super(t)
            }
        })
    }(),
    function () {
        "use strict";
        B.Components.Test = B.Core.Abstract.extend({
            options: {},
            construct: function (t) {
                this._super(t)
            }
        })
    }();
