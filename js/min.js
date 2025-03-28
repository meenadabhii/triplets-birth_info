$(document).ready(function() {
    $('#content-item').after($('#vce-pagination'));
    $(".widget_categories>ul>li").each(function(){
        var that = $(this).find('a');
        $(this).removeClass('menu-item').addClass('cat-item');
        $(that).html("<span class=\"category-text\">"+that.text()+"</span>");
    });

    if (!$('#vce-pagination').has('a').length) {
        $('#vce-pagination').remove();
    }
});
var vce_js_settings = { "sticky_header": "1", "sticky_header_offset": "700", "sticky_header_logo": "", "logo": "", "logo_retina": "", "logo_mobile": "", "logo_mobile_retina": "", "rtl_mode": "0", "ajax_url": "", "ajax_mega_menu": "1", "mega_menu_slider": "", "mega_menu_subcats": "", "lay_fa_grid_center": "", "full_slider_autoplay": "", "grid_slider_autoplay": "", "grid_big_slider_autoplay": "", "fa_big_opacity": { "1": "0.5", "2": "0.7" }, "top_bar_mobile": "1", "top_bar_mobile_group": "1", "top_bar_more_link": "More" };
! function(t, e) {
    function i() { var t = g.elements; return "string" == typeof t ? t.split(" ") : t }

    function s(t) { var e = f[t[u]]; return e || (e = {}, p++, t[u] = p, f[p] = e), e }

    function n(t, i, n) { return i || (i = e), l ? i.createElement(t) : (n || (n = s(i)), i = n.cache[t] ? n.cache[t].cloneNode() : d.test(t) ? (n.cache[t] = n.createElem(t)).cloneNode() : n.createElem(t), i.canHaveChildren && !h.test(t) ? n.frag.appendChild(i) : i) }

    function o(t, e) { e.cache || (e.cache = {}, e.createElem = t.createElement, e.createFrag = t.createDocumentFragment, e.frag = e.createFrag()), t.createElement = function(i) { return g.shivMethods ? n(i, t, e) : e.createElem(i) }, t.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + i().join().replace(/\w+/g, function(t) { return e.createElem(t), e.frag.createElement(t), 'c("' + t + '")' }) + ");return n}")(g, e.frag) }

    function r(t) {
        t || (t = e);
        var i = s(t);
        if (g.shivCSS && !a && !i.hasCSS) {
            var n, r = t;
            n = r.createElement("p"), r = r.getElementsByTagName("head")[0] || r.documentElement, n.innerHTML = "x<style>article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}</style>", n = r.insertBefore(n.lastChild, r.firstChild), i.hasCSS = !!n
        }
        return l || o(t, i), t
    }
    var a, l, c = t.html5 || {},
        h = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        d = /^<|^(?:a|b|button|code|div|fieldset|form|h1|h2|h3|h4|h5|h6|i|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul)$/i,
        u = "_html5shiv",
        p = 0,
        f = {};
    ! function() {
        try {
            var t = e.createElement("a");
            t.innerHTML = "<xyz></xyz>", a = "hidden" in t;
            var i;
            if (!(i = 1 == t.childNodes.length)) {
                e.createElement("a");
                var s = e.createDocumentFragment();
                i = "undefined" == typeof s.cloneNode || "undefined" == typeof s.createDocumentFragment || "undefined" == typeof s.createElement
            }
            l = i
        } catch (n) { l = a = !0 }
    }();
    var g = { elements: c.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video", shivCSS: !1 !== c.shivCSS, supportsUnknownElements: l, shivMethods: !1 !== c.shivMethods, type: "default", shivDocument: r, createElement: n, createDocumentFragment: function(t, n) { if (t || (t = e), l) return t.createDocumentFragment(); for (var n = n || s(t), o = n.frag.cloneNode(), r = 0, a = i(), c = a.length; c > r; r++) o.createElement(a[r]); return o } };
    t.html5 = g, r(e)
}(this, document),
function() {
    function t() {}

    function e(t, e) {
        for (var i = t.length; i--;)
            if (t[i].listener === e) return i;
        return -1
    }

    function i(t) { return function() { return this[t].apply(this, arguments) } }
    var s = t.prototype,
        n = this,
        o = n.EventEmitter;
    s.getListeners = function(t) { var e, i, s = this._getEvents(); if ("object" == typeof t) { e = {}; for (i in s) s.hasOwnProperty(i) && t.test(i) && (e[i] = s[i]) } else e = s[t] || (s[t] = []); return e }, s.flattenListeners = function(t) { var e, i = []; for (e = 0; t.length > e; e += 1) i.push(t[e].listener); return i }, s.getListenersAsObject = function(t) { var e, i = this.getListeners(t); return i instanceof Array && (e = {}, e[t] = i), e || i }, s.addListener = function(t, i) {
        var s, n = this.getListenersAsObject(t),
            o = "object" == typeof i;
        for (s in n) n.hasOwnProperty(s) && -1 === e(n[s], i) && n[s].push(o ? i : { listener: i, once: !1 });
        return this
    }, s.on = i("addListener"), s.addOnceListener = function(t, e) { return this.addListener(t, { listener: e, once: !0 }) }, s.once = i("addOnceListener"), s.defineEvent = function(t) { return this.getListeners(t), this }, s.defineEvents = function(t) { for (var e = 0; t.length > e; e += 1) this.defineEvent(t[e]); return this }, s.removeListener = function(t, i) { var s, n, o = this.getListenersAsObject(t); for (n in o) o.hasOwnProperty(n) && (s = e(o[n], i), -1 !== s && o[n].splice(s, 1)); return this }, s.off = i("removeListener"), s.addListeners = function(t, e) { return this.manipulateListeners(!1, t, e) }, s.removeListeners = function(t, e) { return this.manipulateListeners(!0, t, e) }, s.manipulateListeners = function(t, e, i) {
        var s, n, o = t ? this.removeListener : this.addListener,
            r = t ? this.removeListeners : this.addListeners;
        if ("object" != typeof e || e instanceof RegExp)
            for (s = i.length; s--;) o.call(this, e, i[s]);
        else
            for (s in e) e.hasOwnProperty(s) && (n = e[s]) && ("function" == typeof n ? o.call(this, s, n) : r.call(this, s, n));
        return this
    }, s.removeEvent = function(t) {
        var e, i = typeof t,
            s = this._getEvents();
        if ("string" === i) delete s[t];
        else if ("object" === i)
            for (e in s) s.hasOwnProperty(e) && t.test(e) && delete s[e];
        else delete this._events;
        return this
    }, s.removeAllListeners = i("removeEvent"), s.emitEvent = function(t, e) {
        var i, s, n, o, r = this.getListenersAsObject(t);
        for (n in r)
            if (r.hasOwnProperty(n))
                for (s = r[n].length; s--;) i = r[n][s], i.once === !0 && this.removeListener(t, i.listener), o = i.listener.apply(this, e || []), o === this._getOnceReturnValue() && this.removeListener(t, i.listener);
        return this
    }, s.trigger = i("emitEvent"), s.emit = function(t) { var e = Array.prototype.slice.call(arguments, 1); return this.emitEvent(t, e) }, s.setOnceReturnValue = function(t) { return this._onceReturnValue = t, this }, s._getOnceReturnValue = function() { return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0 }, s._getEvents = function() { return this._events || (this._events = {}) }, t.noConflict = function() { return n.EventEmitter = o, t }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() { return t }) : "object" == typeof module && module.exports ? module.exports = t : this.EventEmitter = t
}.call(this),
    function(t) {
        function e(e) { var i = t.event; return i.target = i.target || i.srcElement || e, i }
        var i = document.documentElement,
            s = function() {};
        i.addEventListener ? s = function(t, e, i) { t.addEventListener(e, i, !1) } : i.attachEvent && (s = function(t, i, s) {
            t[i + s] = s.handleEvent ? function() {
                var i = e(t);
                s.handleEvent.call(s, i)
            } : function() {
                var i = e(t);
                s.call(t, i)
            }, t.attachEvent("on" + i, t[i + s])
        });
        var n = function() {};
        i.removeEventListener ? n = function(t, e, i) { t.removeEventListener(e, i, !1) } : i.detachEvent && (n = function(t, e, i) { t.detachEvent("on" + e, t[e + i]); try { delete t[e + i] } catch (s) { t[e + i] = void 0 } });
        var o = { bind: s, unbind: n };
        "function" == typeof define && define.amd ? define("eventie/eventie", o) : t.eventie = o
    }(this),
    function(t, e) { "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function(i, s) { return e(t, i, s) }) : "object" == typeof exports ? module.exports = e(t, require("wolfy87-eventemitter"), require("eventie")) : t.imagesLoaded = e(t, t.EventEmitter, t.eventie) }(window, function(t, e, i) {
        function s(t, e) { for (var i in e) t[i] = e[i]; return t }

        function n(t) { return "[object Array]" === u.call(t) }

        function o(t) {
            var e = [];
            if (n(t)) e = t;
            else if ("number" == typeof t.length)
                for (var i = 0, s = t.length; s > i; i++) e.push(t[i]);
            else e.push(t);
            return e
        }

        function r(t, e, i) {
            if (!(this instanceof r)) return new r(t, e);
            "string" == typeof t && (t = document.querySelectorAll(t)), this.elements = o(t), this.options = s({}, this.options), "function" == typeof e ? i = e : s(this.options, e), i && this.on("always", i), this.getImages(), c && (this.jqDeferred = new c.Deferred);
            var n = this;
            setTimeout(function() { n.check() })
        }

        function a(t) { this.img = t }

        function l(t) { this.src = t, p[t] = this }
        var c = t.jQuery,
            h = t.console,
            d = void 0 !== h,
            u = Object.prototype.toString;
        r.prototype = new e, r.prototype.options = {}, r.prototype.getImages = function() {
            this.images = [];
            for (var t = 0, e = this.elements.length; e > t; t++) {
                var i = this.elements[t];
                "IMG" === i.nodeName && this.addImage(i);
                var s = i.nodeType;
                if (s && (1 === s || 9 === s || 11 === s))
                    for (var n = i.querySelectorAll("img"), o = 0, r = n.length; r > o; o++) {
                        var a = n[o];
                        this.addImage(a)
                    }
            }
        }, r.prototype.addImage = function(t) {
            var e = new a(t);
            this.images.push(e)
        }, r.prototype.check = function() {
            function t(t, n) { return e.options.debug && d && h.log("confirm", t, n), e.progress(t), i++, i === s && e.complete(), !0 }
            var e = this,
                i = 0,
                s = this.images.length;
            if (this.hasAnyBroken = !1, !s) return void this.complete();
            for (var n = 0; s > n; n++) {
                var o = this.images[n];
                o.on("confirm", t), o.check()
            }
        }, r.prototype.progress = function(t) {
            this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded;
            var e = this;
            setTimeout(function() { e.emit("progress", e, t), e.jqDeferred && e.jqDeferred.notify && e.jqDeferred.notify(e, t) })
        }, r.prototype.complete = function() {
            var t = this.hasAnyBroken ? "fail" : "done";
            this.isComplete = !0;
            var e = this;
            setTimeout(function() {
                if (e.emit(t, e), e.emit("always", e), e.jqDeferred) {
                    var i = e.hasAnyBroken ? "reject" : "resolve";
                    e.jqDeferred[i](e)
                }
            })
        }, c && (c.fn.imagesLoaded = function(t, e) { var i = new r(this, t, e); return i.jqDeferred.promise(c(this)) }), a.prototype = new e, a.prototype.check = function() {
            var t = p[this.img.src] || new l(this.img.src);
            if (t.isConfirmed) return void this.confirm(t.isLoaded, "cached was confirmed");
            if (this.img.complete && void 0 !== this.img.naturalWidth) return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
            var e = this;
            t.on("confirm", function(t, i) { return e.confirm(t.isLoaded, i), !0 }), t.check()
        }, a.prototype.confirm = function(t, e) { this.isLoaded = t, this.emit("confirm", this, e) };
        var p = {};
        return l.prototype = new e, l.prototype.check = function() {
            if (!this.isChecked) {
                var t = new Image;
                i.bind(t, "load", this), i.bind(t, "error", this), t.src = this.src, this.isChecked = !0
            }
        }, l.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, l.prototype.onload = function(t) { this.confirm(!0, "onload"), this.unbindProxyEvents(t) }, l.prototype.onerror = function(t) { this.confirm(!1, "onerror"), this.unbindProxyEvents(t) }, l.prototype.confirm = function(t, e) { this.isConfirmed = !0, this.isLoaded = t, this.emit("confirm", this, e) }, l.prototype.unbindProxyEvents = function(t) { i.unbind(t.target, "load", this), i.unbind(t.target, "error", this) }, r
    }),
    function(t) {
        "use strict";
        t.fn.fitVids = function(e) {
            var i = { customSelector: null, ignore: null };
            if (!document.getElementById("fit-vids-style")) {
                var s = document.head || document.getElementsByTagName("head")[0],
                    n = ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",
                    o = document.createElement("div");
                o.innerHTML = '<p>x</p><style id="fit-vids-style">' + n + "</style>", s.appendChild(o.childNodes[1])
            }
            return e && t.extend(i, e), this.each(function() {
                var e = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', "object", "embed"];
                i.customSelector && e.push(i.customSelector);
                var s = ".fitvidsignore";
                i.ignore && (s = s + ", " + i.ignore);
                var n = t(this).find(e.join(","));
                n = n.not("object object"), n = n.not(s), n.each(function() {
                    var e = t(this);
                    if (!(e.parents(s).length > 0 || "embed" === this.tagName.toLowerCase() && e.parent("object").length || e.parent(".fluid-width-video-wrapper").length)) {
                        e.css("height") || e.css("width") || !isNaN(e.attr("height")) && !isNaN(e.attr("width")) || (e.attr("height", 9), e.attr("width", 16));
                        var i = "object" === this.tagName.toLowerCase() || e.attr("height") && !isNaN(parseInt(e.attr("height"), 10)) ? parseInt(e.attr("height"), 10) : e.height(),
                            n = isNaN(parseInt(e.attr("width"), 10)) ? e.width() : parseInt(e.attr("width"), 10),
                            o = i / n;
                        if (!e.attr("id")) {
                            var r = "fitvid" + Math.floor(999999 * Math.random());
                            e.attr("id", r)
                        }
                        e.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * o + "%"), e.removeAttr("height").removeAttr("width")
                    }
                })
            })
        }
    }(window.jQuery || window.Zepto),
    function(t) {
        var e, i, s, n, o, r, a, l = "Close",
            c = "BeforeClose",
            h = "AfterClose",
            d = "BeforeAppend",
            u = "MarkupParse",
            p = "Open",
            f = "Change",
            g = "mfp",
            m = "." + g,
            v = "mfp-ready",
            y = "mfp-removing",
            _ = "mfp-prevent-close",
            w = function() {},
            b = !!window.jQuery,
            C = t(window),
            x = function(t, i) { e.ev.on(g + t + m, i) },
            k = function(e, i, s, n) { var o = document.createElement("div"); return o.className = "mfp-" + e, s && (o.innerHTML = s), n ? i && i.appendChild(o) : (o = t(o), i && o.appendTo(i)), o },
            E = function(i, s) { e.ev.triggerHandler(g + i, s), e.st.callbacks && (i = i.charAt(0).toLowerCase() + i.slice(1), e.st.callbacks[i] && e.st.callbacks[i].apply(e, t.isArray(s) ? s : [s])) },
            T = function(i) { return i === a && e.currTemplate.closeBtn || (e.currTemplate.closeBtn = t(e.st.closeMarkup.replace("%title%", e.st.tClose)), a = i), e.currTemplate.closeBtn },
            S = function() { t.magnificPopup.instance || (e = new w, e.init(), t.magnificPopup.instance = e) },
            I = function() {
                var t = document.createElement("p").style,
                    e = ["ms", "O", "Moz", "Webkit"];
                if (void 0 !== t.transition) return !0;
                for (; e.length;)
                    if (e.pop() + "Transition" in t) return !0;
                return !1
            };
        w.prototype = {
            constructor: w,
            init: function() {
                var i = navigator.appVersion;
                e.isIE7 = -1 !== i.indexOf("MSIE 7."), e.isIE8 = -1 !== i.indexOf("MSIE 8."), e.isLowIE = e.isIE7 || e.isIE8, e.isAndroid = /android/gi.test(i), e.isIOS = /iphone|ipad|ipod/gi.test(i), e.supportsTransition = I(), e.probablyMobile = e.isAndroid || e.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), n = t(document), e.popupsCache = {}
            },
            open: function(i) {
                s || (s = t(document.body));
                var o;
                if (i.isObj === !1) {
                    e.items = i.items.toArray(), e.index = 0;
                    var a, l = i.items;
                    for (o = 0; l.length > o; o++)
                        if (a = l[o], a.parsed && (a = a.el[0]), a === i.el[0]) { e.index = o; break }
                } else e.items = t.isArray(i.items) ? i.items : [i.items], e.index = i.index || 0;
                if (e.isOpen) return void e.updateItemHTML();
                e.types = [], r = "", e.ev = i.mainEl && i.mainEl.length ? i.mainEl.eq(0) : n, i.key ? (e.popupsCache[i.key] || (e.popupsCache[i.key] = {}), e.currTemplate = e.popupsCache[i.key]) : e.currTemplate = {}, e.st = t.extend(!0, {}, t.magnificPopup.defaults, i), e.fixedContentPos = "auto" === e.st.fixedContentPos ? !e.probablyMobile : e.st.fixedContentPos, e.st.modal && (e.st.closeOnContentClick = !1, e.st.closeOnBgClick = !1, e.st.showCloseBtn = !1, e.st.enableEscapeKey = !1), e.bgOverlay || (e.bgOverlay = k("bg").on("click" + m, function() { e.close() }), e.wrap = k("wrap").attr("tabindex", -1).on("click" + m, function(t) { e._checkIfClose(t.target) && e.close() }), e.container = k("container", e.wrap)), e.contentContainer = k("content"), e.st.preloader && (e.preloader = k("preloader", e.container, e.st.tLoading));
                var c = t.magnificPopup.modules;
                for (o = 0; c.length > o; o++) {
                    var h = c[o];
                    h = h.charAt(0).toUpperCase() + h.slice(1), e["init" + h].call(e)
                }
                E("BeforeOpen"), e.st.showCloseBtn && (e.st.closeBtnInside ? (x(u, function(t, e, i, s) { i.close_replaceWith = T(s.type) }), r += " mfp-close-btn-in") : e.wrap.append(T())), e.st.alignTop && (r += " mfp-align-top"), e.fixedContentPos ? e.wrap.css({ overflow: e.st.overflowY, overflowX: "hidden", overflowY: e.st.overflowY }) : e.wrap.css({ top: C.scrollTop(), position: "absolute" }), (e.st.fixedBgPos === !1 || "auto" === e.st.fixedBgPos && !e.fixedContentPos) && e.bgOverlay.css({ height: n.height(), position: "absolute" }), e.st.enableEscapeKey && n.on("keyup" + m, function(t) { 27 === t.keyCode && e.close() }), C.on("resize" + m, function() { e.updateSize() }), e.st.closeOnContentClick || (r += " mfp-auto-cursor"), r && e.wrap.addClass(r);
                var d = e.wH = C.height(),
                    f = {};
                if (e.fixedContentPos && e._hasScrollBar(d)) {
                    var g = e._getScrollbarSize();
                    g && (f.marginRight = g)
                }
                e.fixedContentPos && (e.isIE7 ? t("body, html").css("overflow", "hidden") : f.overflow = "hidden");
                var y = e.st.mainClass;
                return e.isIE7 && (y += " mfp-ie7"), y && e._addClassToMFP(y), e.updateItemHTML(), E("BuildControls"), t("html").css(f), e.bgOverlay.add(e.wrap).prependTo(e.st.prependTo || s), e._lastFocusedEl = document.activeElement, setTimeout(function() { e.content ? (e._addClassToMFP(v), e._setFocus()) : e.bgOverlay.addClass(v), n.on("focusin" + m, e._onFocusIn) }, 16), e.isOpen = !0, e.updateSize(d), E(p), i
            },
            close: function() { e.isOpen && (E(c), e.isOpen = !1, e.st.removalDelay && !e.isLowIE && e.supportsTransition ? (e._addClassToMFP(y), setTimeout(function() { e._close() }, e.st.removalDelay)) : e._close()) },
            _close: function() {
                E(l);
                var i = y + " " + v + " ";
                if (e.bgOverlay.detach(), e.wrap.detach(), e.container.empty(), e.st.mainClass && (i += e.st.mainClass + " "), e._removeClassFromMFP(i), e.fixedContentPos) {
                    var s = { marginRight: "" };
                    e.isIE7 ? t("body, html").css("overflow", "") : s.overflow = "", t("html").css(s)
                }
                n.off("keyup" + m + " focusin" + m), e.ev.off(m), e.wrap.attr("class", "mfp-wrap").removeAttr("style"), e.bgOverlay.attr("class", "mfp-bg"), e.container.attr("class", "mfp-container"), !e.st.showCloseBtn || e.st.closeBtnInside && e.currTemplate[e.currItem.type] !== !0 || e.currTemplate.closeBtn && e.currTemplate.closeBtn.detach(), e._lastFocusedEl && t(e._lastFocusedEl).focus(), e.currItem = null, e.content = null, e.currTemplate = null, e.prevHeight = 0, E(h)
            },
            updateSize: function(t) {
                if (e.isIOS) {
                    var i = document.documentElement.clientWidth / window.innerWidth,
                        s = window.innerHeight * i;
                    e.wrap.css("height", s), e.wH = s
                } else e.wH = t || C.height();
                e.fixedContentPos || e.wrap.css("height", e.wH), E("Resize")
            },
            updateItemHTML: function() {
                var i = e.items[e.index];
                e.contentContainer.detach(), e.content && e.content.detach(), i.parsed || (i = e.parseEl(e.index));
                var s = i.type;
                if (E("BeforeChange", [e.currItem ? e.currItem.type : "", s]), e.currItem = i, !e.currTemplate[s]) {
                    var n = e.st[s] ? e.st[s].markup : !1;
                    E("FirstMarkupParse", n), e.currTemplate[s] = n ? t(n) : !0
                }
                o && o !== i.type && e.container.removeClass("mfp-" + o + "-holder");
                var r = e["get" + s.charAt(0).toUpperCase() + s.slice(1)](i, e.currTemplate[s]);
                e.appendContent(r, s), i.preloaded = !0, E(f, i), o = i.type, e.container.prepend(e.contentContainer), E("AfterChange")
            },
            appendContent: function(t, i) { e.content = t, t ? e.st.showCloseBtn && e.st.closeBtnInside && e.currTemplate[i] === !0 ? e.content.find(".mfp-close").length || e.content.append(T()) : e.content = t : e.content = "", E(d), e.container.addClass("mfp-" + i + "-holder"), e.contentContainer.append(e.content) },
            parseEl: function(i) {
                var s, n = e.items[i];
                if (n.tagName ? n = { el: t(n) } : (s = n.type, n = { data: n, src: n.src }), n.el) {
                    for (var o = e.types, r = 0; o.length > r; r++)
                        if (n.el.hasClass("mfp-" + o[r])) { s = o[r]; break }
                    n.src = n.el.attr("data-mfp-src"), n.src || (n.src = n.el.attr("href"))
                }
                return n.type = s || e.st.type || "inline", n.index = i, n.parsed = !0, e.items[i] = n, E("ElementParse", n), e.items[i]
            },
            addGroup: function(t, i) {
                var s = function(s) { s.mfpEl = this, e._openClick(s, t, i) };
                i || (i = {});
                var n = "click.magnificPopup";
                i.mainEl = t, i.items ? (i.isObj = !0, t.off(n).on(n, s)) : (i.isObj = !1, i.delegate ? t.off(n).on(n, i.delegate, s) : (i.items = t, t.off(n).on(n, s)))
            },
            _openClick: function(i, s, n) {
                var o = void 0 !== n.midClick ? n.midClick : t.magnificPopup.defaults.midClick;
                if (o || 2 !== i.which && !i.ctrlKey && !i.metaKey) {
                    var r = void 0 !== n.disableOn ? n.disableOn : t.magnificPopup.defaults.disableOn;
                    if (r)
                        if (t.isFunction(r)) { if (!r.call(e)) return !0 } else if (r > C.width()) return !0;
                    i.type && (i.preventDefault(), e.isOpen && i.stopPropagation()), n.el = t(i.mfpEl), n.delegate && (n.items = s.find(n.delegate)), e.open(n)
                }
            },
            updateStatus: function(t, s) {
                if (e.preloader) {
                    i !== t && e.container.removeClass("mfp-s-" + i), s || "loading" !== t || (s = e.st.tLoading);
                    var n = { status: t, text: s };
                    E("UpdateStatus", n), t = n.status, s = n.text, e.preloader.html(s), e.preloader.find("a").on("click", function(t) { t.stopImmediatePropagation() }), e.container.addClass("mfp-s-" + t), i = t
                }
            },
            _checkIfClose: function(i) {
                if (!t(i).hasClass(_)) {
                    var s = e.st.closeOnContentClick,
                        n = e.st.closeOnBgClick;
                    if (s && n) return !0;
                    if (!e.content || t(i).hasClass("mfp-close") || e.preloader && i === e.preloader[0]) return !0;
                    if (i === e.content[0] || t.contains(e.content[0], i)) { if (s) return !0 } else if (n && t.contains(document, i)) return !0;
                    return !1
                }
            },
            _addClassToMFP: function(t) { e.bgOverlay.addClass(t), e.wrap.addClass(t) },
            _removeClassFromMFP: function(t) { this.bgOverlay.removeClass(t), e.wrap.removeClass(t) },
            _hasScrollBar: function(t) { return (e.isIE7 ? n.height() : document.body.scrollHeight) > (t || C.height()) },
            _setFocus: function() {
                (e.st.focus ? e.content.find(e.st.focus).eq(0) : e.wrap).focus()
            },
            _onFocusIn: function(i) { return i.target === e.wrap[0] || t.contains(e.wrap[0], i.target) ? void 0 : (e._setFocus(), !1) },
            _parseMarkup: function(e, i, s) {
                var n;
                s.data && (i = t.extend(s.data, i)), E(u, [e, i, s]), t.each(i, function(t, i) { if (void 0 === i || i === !1) return !0; if (n = t.split("_"), n.length > 1) { var s = e.find(m + "-" + n[0]); if (s.length > 0) { var o = n[1]; "replaceWith" === o ? s[0] !== i[0] && s.replaceWith(i) : "img" === o ? s.is("img") ? s.attr("src", i) : s.replaceWith('<img src="' + i + '" class="' + s.attr("class") + '" />') : s.attr(n[1], i) } } else e.find(m + "-" + t).html(i) })
            },
            _getScrollbarSize: function() {
                if (void 0 === e.scrollbarSize) {
                    var t = document.createElement("div");
                    t.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(t), e.scrollbarSize = t.offsetWidth - t.clientWidth, document.body.removeChild(t)
                }
                return e.scrollbarSize
            }
        }, t.magnificPopup = { instance: null, proto: w.prototype, modules: [], open: function(e, i) { return S(), e = e ? t.extend(!0, {}, e) : {}, e.isObj = !0, e.index = i || 0, this.instance.open(e) }, close: function() { return t.magnificPopup.instance && t.magnificPopup.instance.close() }, registerModule: function(e, i) { i.options && (t.magnificPopup.defaults[e] = i.options), t.extend(this.proto, i.proto), this.modules.push(e) }, defaults: { disableOn: 0, key: null, midClick: !1, mainClass: "", preloader: !0, focus: "", closeOnContentClick: !1, closeOnBgClick: !0, closeBtnInside: !0, showCloseBtn: !0, enableEscapeKey: !0, modal: !1, alignTop: !1, removalDelay: 0, prependTo: null, fixedContentPos: "auto", fixedBgPos: "auto", overflowY: "auto", closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>', tClose: "Close (Esc)", tLoading: "Loading..." } }, t.fn.magnificPopup = function(i) {
            S();
            var s = t(this);
            if ("string" == typeof i)
                if ("open" === i) {
                    var n, o = b ? s.data("magnificPopup") : s[0].magnificPopup,
                        r = parseInt(arguments[1], 10) || 0;
                    o.items ? n = o.items[r] : (n = s, o.delegate && (n = n.find(o.delegate)), n = n.eq(r)), e._openClick({ mfpEl: n }, s, o)
                } else e.isOpen && e[i].apply(e, Array.prototype.slice.call(arguments, 1));
            else i = t.extend(!0, {}, i), b ? s.data("magnificPopup", i) : s[0].magnificPopup = i, e.addGroup(s, i);
            return s
        };
        var P, $, z, j = "inline",
            M = function() { z && ($.after(z.addClass(P)).detach(), z = null) };
        t.magnificPopup.registerModule(j, {
            options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" },
            proto: {
                initInline: function() { e.types.push(j), x(l + "." + j, function() { M() }) },
                getInline: function(i, s) {
                    if (M(), i.src) {
                        var n = e.st.inline,
                            o = t(i.src);
                        if (o.length) {
                            var r = o[0].parentNode;
                            r && r.tagName && ($ || (P = n.hiddenClass, $ = k(P), P = "mfp-" + P), z = o.after($).detach().removeClass(P)), e.updateStatus("ready")
                        } else e.updateStatus("error", n.tNotFound), o = t("<div>");
                        return i.inlineElement = o, o
                    }
                    return e.updateStatus("ready"), e._parseMarkup(s, {}, i), s
                }
            }
        });
        var L, O = "ajax",
            D = function() { L && s.removeClass(L) },
            H = function() { D(), e.req && e.req.abort() };
        t.magnificPopup.registerModule(O, {
            options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' },
            proto: {
                initAjax: function() { e.types.push(O), L = e.st.ajax.cursor, x(l + "." + O, H), x("BeforeChange." + O, H) },
                getAjax: function(i) {
                    L && s.addClass(L), e.updateStatus("loading");
                    var n = t.extend({
                        url: i.src,
                        success: function(s, n, o) {
                            var r = { data: s, xhr: o };
                            E("ParseAjax", r), e.appendContent(t(r.data), O), i.finished = !0, D(), e._setFocus(), setTimeout(function() { e.wrap.addClass(v) }, 16), e.updateStatus("ready"), E("AjaxContentAdded")
                        },
                        error: function() { D(), i.finished = i.loadError = !0, e.updateStatus("error", e.st.ajax.tError.replace("%url%", i.src)) }
                    }, e.st.ajax.settings);
                    return e.req = t.ajax(n), ""
                }
            }
        });
        var W, A = function(i) { if (i.data && void 0 !== i.data.title) return i.data.title; var s = e.st.image.titleSrc; if (s) { if (t.isFunction(s)) return s.call(e, i); if (i.el) return i.el.attr(s) || "" } return "" };
        t.magnificPopup.registerModule("image", {
            options: { markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>', cursor: "mfp-zoom-out-cur", titleSrc: "title", verticalFit: !0, tError: '<a href="%url%">The image</a> could not be loaded.' },
            proto: {
                initImage: function() {
                    var t = e.st.image,
                        i = ".image";
                    e.types.push("image"), x(p + i, function() { "image" === e.currItem.type && t.cursor && s.addClass(t.cursor) }), x(l + i, function() { t.cursor && s.removeClass(t.cursor), C.off("resize" + m) }), x("Resize" + i, e.resizeImage), e.isLowIE && x("AfterChange", e.resizeImage)
                },
                resizeImage: function() {
                    var t = e.currItem;
                    if (t && t.img && e.st.image.verticalFit) {
                        var i = 0;
                        e.isLowIE && (i = parseInt(t.img.css("padding-top"), 10) + parseInt(t.img.css("padding-bottom"), 10)), t.img.css("max-height", e.wH - i)
                    }
                },
                _onImageHasSize: function(t) { t.img && (t.hasSize = !0, W && clearInterval(W), t.isCheckingImgSize = !1, E("ImageHasSize", t), t.imgHidden && (e.content && e.content.removeClass("mfp-loading"), t.imgHidden = !1)) },
                findImageSize: function(t) {
                    var i = 0,
                        s = t.img[0],
                        n = function(o) { W && clearInterval(W), W = setInterval(function() { return s.naturalWidth > 0 ? void e._onImageHasSize(t) : (i > 200 && clearInterval(W), i++, void(3 === i ? n(10) : 40 === i ? n(50) : 100 === i && n(500))) }, o) };
                    n(1)
                },
                getImage: function(i, s) {
                    var n = 0,
                        o = function() { i && (i.img[0].complete ? (i.img.off(".mfploader"), i === e.currItem && (e._onImageHasSize(i), e.updateStatus("ready")), i.hasSize = !0, i.loaded = !0, E("ImageLoadComplete")) : (n++, 200 > n ? setTimeout(o, 100) : r())) },
                        r = function() { i && (i.img.off(".mfploader"), i === e.currItem && (e._onImageHasSize(i), e.updateStatus("error", a.tError.replace("%url%", i.src))), i.hasSize = !0, i.loaded = !0, i.loadError = !0) },
                        a = e.st.image,
                        l = s.find(".mfp-img");
                    if (l.length) {
                        var c = document.createElement("img");
                        c.className = "mfp-img", i.img = t(c).on("load.mfploader", o).on("error.mfploader", r), c.src = i.src, l.is("img") && (i.img = i.img.clone()), c = i.img[0], c.naturalWidth > 0 ? i.hasSize = !0 : c.width || (i.hasSize = !1)
                    }
                    return e._parseMarkup(s, { title: A(i), img_replaceWith: i.img }, i), e.resizeImage(), i.hasSize ? (W && clearInterval(W), i.loadError ? (s.addClass("mfp-loading"), e.updateStatus("error", a.tError.replace("%url%", i.src))) : (s.removeClass("mfp-loading"), e.updateStatus("ready")), s) : (e.updateStatus("loading"), i.loading = !0, i.hasSize || (i.imgHidden = !0, s.addClass("mfp-loading"), e.findImageSize(i)), s)
                }
            }
        });
        var B, F = function() { return void 0 === B && (B = void 0 !== document.createElement("p").style.MozTransform), B };
        t.magnificPopup.registerModule("zoom", {
            options: { enabled: !1, easing: "ease-in-out", duration: 300, opener: function(t) { return t.is("img") ? t : t.find("img") } },
            proto: {
                initZoom: function() {
                    var t, i = e.st.zoom,
                        s = ".zoom";
                    if (i.enabled && e.supportsTransition) {
                        var n, o, r = i.duration,
                            a = function(t) {
                                var e = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                    s = "all " + i.duration / 1e3 + "s " + i.easing,
                                    n = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" },
                                    o = "transition";
                                return n["-webkit-" + o] = n["-moz-" + o] = n["-o-" + o] = n[o] = s, e.css(n), e
                            },
                            h = function() { e.content.css("visibility", "visible") };
                        x("BuildControls" + s, function() {
                            if (e._allowZoom()) {
                                if (clearTimeout(n), e.content.css("visibility", "hidden"), t = e._getItemToZoom(), !t) return void h();
                                o = a(t), o.css(e._getOffset()), e.wrap.append(o), n = setTimeout(function() { o.css(e._getOffset(!0)), n = setTimeout(function() { h(), setTimeout(function() { o.remove(), t = o = null, E("ZoomAnimationEnded") }, 16) }, r) }, 16)
                            }
                        }), x(c + s, function() {
                            if (e._allowZoom()) {
                                if (clearTimeout(n), e.st.removalDelay = r, !t) {
                                    if (t = e._getItemToZoom(), !t) return;
                                    o = a(t)
                                }
                                o.css(e._getOffset(!0)), e.wrap.append(o), e.content.css("visibility", "hidden"), setTimeout(function() { o.css(e._getOffset()) }, 16)
                            }
                        }), x(l + s, function() { e._allowZoom() && (h(), o && o.remove(), t = null) })
                    }
                },
                _allowZoom: function() { return "image" === e.currItem.type },
                _getItemToZoom: function() { return e.currItem.hasSize ? e.currItem.img : !1 },
                _getOffset: function(i) {
                    var s;
                    s = i ? e.currItem.img : e.st.zoom.opener(e.currItem.el || e.currItem);
                    var n = s.offset(),
                        o = parseInt(s.css("padding-top"), 10),
                        r = parseInt(s.css("padding-bottom"), 10);
                    n.top -= t(window).scrollTop() - o;
                    var a = { width: s.width(), height: (b ? s.innerHeight() : s[0].offsetHeight) - r - o };
                    return F() ? a["-moz-transform"] = a.transform = "translate(" + n.left + "px," + n.top + "px)" : (a.left = n.left, a.top = n.top), a
                }
            }
        });
        var N = "iframe",
            R = "//about:blank",
            V = function(t) {
                if (e.currTemplate[N]) {
                    var i = e.currTemplate[N].find("iframe");
                    i.length && (t || (i[0].src = R), e.isIE8 && i.css("display", t ? "block" : "none"))
                }
            };
        t.magnificPopup.registerModule(N, {
            options: { markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>', srcAction: "iframe_src", patterns: { youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" }, vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" }, gmaps: { index: "//maps.google.", src: "%id%&output=embed" } } },
            proto: {
                initIframe: function() { e.types.push(N), x("BeforeChange", function(t, e, i) { e !== i && (e === N ? V() : i === N && V(!0)) }), x(l + "." + N, function() { V() }) },
                getIframe: function(i, s) {
                    var n = i.src,
                        o = e.st.iframe;
                    t.each(o.patterns, function() { return n.indexOf(this.index) > -1 ? (this.id && (n = "string" == typeof this.id ? n.substr(n.lastIndexOf(this.id) + this.id.length, n.length) : this.id.call(this, n)), n = this.src.replace("%id%", n), !1) : void 0 });
                    var r = {};
                    return o.srcAction && (r[o.srcAction] = n), e._parseMarkup(s, r, i), e.updateStatus("ready"), s
                }
            }
        });
        var X = function(t) { var i = e.items.length; return t > i - 1 ? t - i : 0 > t ? i + t : t },
            q = function(t, e, i) { return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, i) };
        t.magnificPopup.registerModule("gallery", {
            options: { enabled: !1, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', preload: [0, 2], navigateByImgClick: !0, arrows: !0, tPrev: "Previous (Left arrow key)", tNext: "Next (Right arrow key)", tCounter: "%curr% of %total%" },
            proto: {
                initGallery: function() {
                    var i = e.st.gallery,
                        s = ".mfp-gallery",
                        o = Boolean(t.fn.mfpFastClick);
                    return e.direction = !0, i && i.enabled ? (r += " mfp-gallery", x(p + s, function() { i.navigateByImgClick && e.wrap.on("click" + s, ".mfp-img", function() { return e.items.length > 1 ? (e.next(), !1) : void 0 }), n.on("keydown" + s, function(t) { 37 === t.keyCode ? e.prev() : 39 === t.keyCode && e.next() }) }), x("UpdateStatus" + s, function(t, i) { i.text && (i.text = q(i.text, e.currItem.index, e.items.length)) }), x(u + s, function(t, s, n, o) {
                        var r = e.items.length;
                        n.counter = r > 1 ? q(i.tCounter, o.index, r) : ""
                    }), x("BuildControls" + s, function() {
                        if (e.items.length > 1 && i.arrows && !e.arrowLeft) {
                            var s = i.arrowMarkup,
                                n = e.arrowLeft = t(s.replace(/%title%/gi, i.tPrev).replace(/%dir%/gi, "left")).addClass(_),
                                r = e.arrowRight = t(s.replace(/%title%/gi, i.tNext).replace(/%dir%/gi, "right")).addClass(_),
                                a = o ? "mfpFastClick" : "click";
                            n[a](function() { e.prev() }), r[a](function() { e.next() }), e.isIE7 && (k("b", n[0], !1, !0), k("a", n[0], !1, !0), k("b", r[0], !1, !0), k("a", r[0], !1, !0)), e.container.append(n.add(r))
                        }
                    }), x(f + s, function() { e._preloadTimeout && clearTimeout(e._preloadTimeout), e._preloadTimeout = setTimeout(function() { e.preloadNearbyImages(), e._preloadTimeout = null }, 16) }), void x(l + s, function() { n.off(s), e.wrap.off("click" + s), e.arrowLeft && o && e.arrowLeft.add(e.arrowRight).destroyMfpFastClick(), e.arrowRight = e.arrowLeft = null })) : !1
                },
                next: function() { e.direction = !0, e.index = X(e.index + 1), e.updateItemHTML() },
                prev: function() { e.direction = !1, e.index = X(e.index - 1), e.updateItemHTML() },
                goTo: function(t) { e.direction = t >= e.index, e.index = t, e.updateItemHTML() },
                preloadNearbyImages: function() {
                    var t, i = e.st.gallery.preload,
                        s = Math.min(i[0], e.items.length),
                        n = Math.min(i[1], e.items.length);
                    for (t = 1;
                        (e.direction ? n : s) >= t; t++) e._preloadItem(e.index + t);
                    for (t = 1;
                        (e.direction ? s : n) >= t; t++) e._preloadItem(e.index - t)
                },
                _preloadItem: function(i) {
                    if (i = X(i), !e.items[i].preloaded) {
                        var s = e.items[i];
                        s.parsed || (s = e.parseEl(i)), E("LazyLoad", s), "image" === s.type && (s.img = t('<img class="mfp-img" />').on("load.mfploader", function() { s.hasSize = !0 }).on("error.mfploader", function() { s.hasSize = !0, s.loadError = !0, E("LazyLoadError", s) }).attr("src", s.src)), s.preloaded = !0
                    }
                }
            }
        });
        var Z = "retina";
        t.magnificPopup.registerModule(Z, {
                options: { replaceSrc: function(t) { return t.src.replace(/\.\w+$/, function(t) { return "@2x" + t }) }, ratio: 1 },
                proto: {
                    initRetina: function() {
                        if (window.devicePixelRatio > 1) {
                            var t = e.st.retina,
                                i = t.ratio;
                            i = isNaN(i) ? i() : i, i > 1 && (x("ImageHasSize." + Z, function(t, e) { e.img.css({ "max-width": e.img[0].naturalWidth / i, width: "100%" }) }), x("ElementParse." + Z, function(e, s) { s.src = t.replaceSrc(s, i) }))
                        }
                    }
                }
            }),
            function() {
                var e = 1e3,
                    i = "ontouchstart" in window,
                    s = function() { C.off("touchmove" + o + " touchend" + o) },
                    n = "mfpFastClick",
                    o = "." + n;
                t.fn.mfpFastClick = function(n) {
                    return t(this).each(function() {
                        var r, a = t(this);
                        if (i) {
                            var l, c, h, d, u, p;
                            a.on("touchstart" + o, function(t) { d = !1, p = 1, u = t.originalEvent ? t.originalEvent.touches[0] : t.touches[0], c = u.clientX, h = u.clientY, C.on("touchmove" + o, function(t) { u = t.originalEvent ? t.originalEvent.touches : t.touches, p = u.length, u = u[0], (Math.abs(u.clientX - c) > 10 || Math.abs(u.clientY - h) > 10) && (d = !0, s()) }).on("touchend" + o, function(t) { s(), d || p > 1 || (r = !0, t.preventDefault(), clearTimeout(l), l = setTimeout(function() { r = !1 }, e), n()) }) })
                        }
                        a.on("click" + o, function() { r || n() })
                    })
                }, t.fn.destroyMfpFastClick = function() { t(this).off("touchstart" + o + " click" + o), i && C.off("touchmove" + o + " touchend" + o) }
            }(), S()
    }(window.jQuery || window.Zepto),
    function(t) {
        t.fn.matchHeight = function(e) {
            if ("remove" === e) { var i = this; return this.css("height", ""), t.each(t.fn.matchHeight._groups, function(t, e) { e.elements = e.elements.not(i) }), this }
            return 1 >= this.length ? this : (e = "undefined" != typeof e ? e : !0, t.fn.matchHeight._groups.push({ elements: this, byRow: e }), t.fn.matchHeight._apply(this, e),
                this)
        }, t.fn.matchHeight._apply = function(e, n) {
            var o = t(e),
                r = [o];
            return n && (o.css({ display: "block", "padding-top": "0", "padding-bottom": "0", "border-top": "0", "border-bottom": "0", height: "100px" }), r = i(o), o.css({ display: "", "padding-top": "", "padding-bottom": "", "border-top": "", "border-bottom": "", height: "" })), t.each(r, function(e, i) {
                var n = t(i),
                    o = 0;
                n.each(function() {
                    var e = t(this);
                    e.css({ display: "block", height: "" }), e.outerHeight(!1) > o && (o = e.outerHeight(!1)), e.css({ display: "" })
                }), n.each(function() {
                    var e = t(this),
                        i = 0;
                    "border-box" !== e.css("box-sizing") && (i += s(e.css("border-top-width")) + s(e.css("border-bottom-width")), i += s(e.css("padding-top")) + s(e.css("padding-bottom"))), e.css("height", o - i)
                })
            }), this
        }, t.fn.matchHeight._applyDataApi = function() {
            var e = {};
            t("[data-match-height], [data-mh]").each(function() {
                var i = t(this),
                    s = i.attr("data-match-height");
                e[s] = s in e ? e[s].add(i) : i
            }), t.each(e, function() { this.matchHeight(!0) })
        }, t.fn.matchHeight._groups = [];
        var e = -1;
        t.fn.matchHeight._update = function(i) {
            if (i && "resize" === i.type) {
                if (i = t(window).width(), i === e) return;
                e = i
            }
            t.each(t.fn.matchHeight._groups, function() { t.fn.matchHeight._apply(this.elements, this.byRow) })
        }, t(t.fn.matchHeight._applyDataApi), t(window).bind("load resize orientationchange", t.fn.matchHeight._update);
        var i = function(e) {
                var i = null,
                    n = [];
                return t(e).each(function() {
                    var e = t(this),
                        o = e.offset().top - s(e.css("margin-top")),
                        r = 0 < n.length ? n[n.length - 1] : null;
                    null === r ? n.push(e) : 1 >= Math.floor(Math.abs(i - o)) ? n[n.length - 1] = r.add(e) : n.push(e), i = o
                }), n
            },
            s = function(t) { return parseFloat(t) || 0 }
    }(jQuery),
    function(t) {
        var e = !1,
            i = !1,
            s = {
                isUrl: function(t) { var e = RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$", "i"); return e.test(t) ? !0 : !1 },
                loadContent: function(t, e) { t.html(e) },
                addPrefix: function(t) {
                    var e = t.attr("id"),
                        i = t.attr("class");
                    "string" == typeof e && "" !== e && t.attr("id", e.replace(/([A-Za-z0-9_.\-]+)/g, "sidr-id-$1")), "string" == typeof i && "" !== i && "sidr-inner" !== i && t.attr("class", i.replace(/([A-Za-z0-9_.\-]+)/g, "sidr-class-$1")), t.removeAttr("style")
                },
                execute: function(s, o, r) {
                    "function" == typeof o ? (r = o, o = "sidr") : o || (o = "sidr");
                    var a, l, c, h = t("#" + o),
                        d = t(h.data("body")),
                        u = t("html"),
                        p = h.outerWidth(!0),
                        f = h.data("speed"),
                        g = h.data("side"),
                        m = h.data("displace"),
                        v = h.data("onOpen"),
                        y = h.data("onClose"),
                        _ = "sidr" === o ? "sidr-open" : "sidr-open " + o + "-open";
                    if ("open" === s || "toggle" === s && !h.is(":visible")) {
                        if (h.is(":visible") || e) return;
                        if (i !== !1) return void n.close(i, function() { n.open(o) });
                        e = !0, "left" === g ? (a = { left: p + "px" }, l = { left: "0px" }) : (a = { right: p + "px" }, l = { right: "0px" }), d.is("body") && (c = u.scrollTop(), u.css("overflow-x", "hidden").scrollTop(c)), m ? d.addClass("sidr-animating").css({ width: d.width(), position: "absolute" }).animate(a, f, function() { t(this).addClass(_) }) : setTimeout(function() { t(this).addClass(_) }, f), h.css("display", "block").animate(l, f, function() { e = !1, i = o, "function" == typeof r && r(o), d.removeClass("sidr-animating") }), v()
                    } else {
                        if (!h.is(":visible") || e) return;
                        e = !0, "left" === g ? (a = { left: 0 }, l = { left: "-" + p + "px" }) : (a = { right: 0 }, l = { right: "-" + p + "px" }), d.is("body") && (c = u.scrollTop(), u.removeAttr("style").scrollTop(c)), d.addClass("sidr-animating").animate(a, f).removeClass(_), h.animate(l, f, function() { h.removeAttr("style").hide(), d.removeAttr("style"), t("html").removeAttr("style"), e = !1, i = !1, "function" == typeof r && r(o), d.removeClass("sidr-animating") }), y()
                    }
                }
            },
            n = { open: function(t, e) { s.execute("open", t, e) }, close: function(t, e) { s.execute("close", t, e) }, toggle: function(t, e) { s.execute("toggle", t, e) }, toogle: function(t, e) { s.execute("toggle", t, e) } };
        t.sidr = function(e) { return n[e] ? n[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "function" != typeof e && "string" != typeof e && e ? void t.error("Method " + e + " does not exist on jQuery.sidr") : n.toggle.apply(this, arguments) }, t.fn.sidr = function(e) {
            var i = t.extend({ name: "sidr", speed: 200, side: "left", source: null, renaming: !0, body: "body", displace: !0, onOpen: function() {}, onClose: function() {} }, e),
                o = i.name,
                r = t("#" + o);
            if (0 === r.length && (r = t("<div />").attr("id", o).appendTo(t("body"))), r.addClass("sidr").addClass(i.side).data({ speed: i.speed, side: i.side, body: i.body, displace: i.displace, onOpen: i.onOpen, onClose: i.onClose }), "function" == typeof i.source) {
                var a = i.source(o);
                s.loadContent(r, a)
            } else if ("string" == typeof i.source && s.isUrl(i.source)) t.get(i.source, function(t) { s.loadContent(r, t) });
            else if ("string" == typeof i.source) {
                var l = "",
                    c = i.source.split(",");
                if (t.each(c, function(e, i) { l += '<div class="sidr-inner">' + t(i).html() + "</div>" }), i.renaming) {
                    var h = t("<div />").html(l);
                    h.find("*").each(function(e, i) {
                        var n = t(i);
                        s.addPrefix(n)
                    }), l = h.html()
                }
                s.loadContent(r, l)
            } else null !== i.source && t.error("Invalid Sidr Source");
            return this.each(function() {
                var e = t(this),
                    i = e.data("sidr");
                i || (e.data("sidr", o), "ontouchstart" in document.documentElement ? (e.bind("touchstart", function(t) { t.originalEvent.touches[0], this.touched = t.timeStamp }), e.bind("touchend", function(t) {
                    var e = Math.abs(t.timeStamp - this.touched);
                    200 > e && (t.preventDefault(), n.toggle(o))
                })) : e.click(function(t) { t.preventDefault(), n.toggle(o) }))
            })
        }
    }(jQuery),
    function() {
        var t, e;
        t = this.jQuery || window.jQuery, e = t(window), t.fn.stick_in_parent = function(i) { var s, n, o, r, a, l, c, h, d, u, p, f, g; for (null == i && (i = {}), g = i.sticky_class, l = i.inner_scrolling, f = i.recalc_every, p = i.parent, d = i.offset_top, h = i.spacer, o = i.bottoming, null == d && (d = 0), null == p && (p = void 0), null == l && (l = !0), null == g && (g = "is_stuck"), s = t(document), null == o && (o = !0), u = function(t) { var e, i, s; return window.getComputedStyle ? (e = t[0], i = window.getComputedStyle(t[0]), s = parseFloat(i.getPropertyValue("width")) + parseFloat(i.getPropertyValue("margin-left")) + parseFloat(i.getPropertyValue("margin-right")), "border-box" !== i.getPropertyValue("box-sizing") && (s += parseFloat(i.getPropertyValue("border-left-width")) + parseFloat(i.getPropertyValue("border-right-width")) + parseFloat(i.getPropertyValue("padding-left")) + parseFloat(i.getPropertyValue("padding-right"))), s) : t.outerWidth(!0) }, r = function(i, n, r, a, c, m, v, y) { var _, w, b, C, x, k, E, T, S, I, P, $; if (!i.data("sticky_kit")) { if (i.data("sticky_kit", !0), x = s.height(), E = i.parent(), null != p && (E = E.closest(p)), !E.length) throw "failed to find stick parent"; if (b = !1, _ = !1, P = null != h ? h && i.closest(h) : t("<div />"), P && P.css("position", i.css("position")), T = function() { var t, e, o; if (!y) return x = s.height(), t = parseInt(E.css("border-top-width"), 10), e = parseInt(E.css("padding-top"), 10), n = parseInt(E.css("padding-bottom"), 10), r = E.offset().top + t + e, a = E.height(), b && (b = !1, _ = !1, null == h && (i.insertAfter(P), P.detach()), i.css({ position: "", width: "", bottom: "" }).removeClass(g), o = !0), c = i.offset().top - (parseInt(i.css("margin-top"), 10) || 0) - d, m = i.outerHeight(!0), v = i.css("float"), P && P.css({ width: u(i), height: m, display: i.css("display"), "vertical-align": i.css("vertical-align"), "float": v }), o ? $() : void 0 }, T(), m !== a) return C = void 0, k = d, I = f, $ = function() { var t, u, p, w, S, $; if (!y) return p = !1, null != I && (I -= 1, 0 >= I && (I = f, T(), p = !0)), p || s.height() === x || (T(), p = !0), w = e.scrollTop(), null != C && (u = w - C), C = w, b ? (o && (S = w + m + k > a + r, _ && !S && (_ = !1, i.css({ position: "fixed", bottom: "", top: "" }).trigger("sticky_kit:unbottom"))), c > w && (b = !1, k = d, null == h && (("left" === v || "right" === v) && i.insertAfter(P), P.detach()), t = { position: "", width: "" }, i.css(t).removeClass(g).trigger("sticky_kit:unstick")), l && ($ = e.height(), m + d > $ && (_ || (k -= u, k = Math.max($ - m, k), k = Math.min(d, k))))) : w > c && (b = !0, t = { position: "fixed" }, t.width = "border-box" === i.css("box-sizing") ? i.outerWidth() + "px" : i.width() + "px", i.css(t).addClass(g), null == h && (i.after(P), ("left" === v || "right" === v) && P.append(i)), i.trigger("sticky_kit:stick")), b && o && (null == S && (S = w + m + k > a + r), !_ && S) ? (_ = !0, "static" === E.css("position") && E.css({ position: "relative" }), i.css({ position: "absolute", bottom: n, top: "auto" }).trigger("sticky_kit:bottom")) : void 0 }, S = function() { return T(), $() }, w = function() { return y = !0, e.off("touchmove", $), e.off("scroll", $), e.off("resize", S), t(document.body).off("sticky_kit:recalc", S), i.off("sticky_kit:detach", w), i.removeData("sticky_kit"), i.css({ position: "", bottom: "", width: "" }), E.position("position", ""), b ? (null == h && (("left" === v || "right" === v) && i.insertAfter(P), P.remove()), i.removeClass(g)) : void 0 }, e.on("touchmove", $), e.on("scroll", $), e.on("resize", S), t(document.body).on("sticky_kit:recalc", S), i.on("sticky_kit:detach", w), setTimeout($, 0) } }, a = 0, c = this.length; c > a; a++) n = this[a], r(t(n)); return this }
    }.call(this), ! function(t, e, i, s) {
        function n(e, i) { this.settings = null, this.options = t.extend({}, n.Defaults, i), this.$element = t(e), this.drag = t.extend({}, u), this.state = t.extend({}, p), this.e = t.extend({}, f), this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._invalidated = {}, this._pipe = [], t.each(n.Plugins, t.proxy(function(t, e) { this._plugins[t[0].toLowerCase() + t.slice(1)] = new e(this) }, this)), t.each(n.Pipe, t.proxy(function(e, i) { this._pipe.push({ filter: i.filter, run: t.proxy(i.run, this) }) }, this)), this.setup(), this.initialize() }

        function o(t) { if (t.touches !== s) return { x: t.touches[0].pageX, y: t.touches[0].pageY }; if (t.touches === s) { if (t.pageX !== s) return { x: t.pageX, y: t.pageY }; if (t.pageX === s) return { x: t.clientX, y: t.clientY } } }

        function r(t) {
            var e, s, n = i.createElement("div"),
                o = t;
            for (e in o)
                if (s = o[e], "undefined" != typeof n.style[s]) return n = null, [s, e];
            return [!1]
        }

        function a() { return r(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1] }

        function l() { return r(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0] }

        function c() { return r(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0] }

        function h() { return "ontouchstart" in e || !!navigator.msMaxTouchPoints }

        function d() { return e.navigator.msPointerEnabled }
        var u, p, f;
        u = { start: 0, startX: 0, startY: 0, current: 0, currentX: 0, currentY: 0, offsetX: 0, offsetY: 0, distance: null, startTime: 0, endTime: 0, updatedX: 0, targetEl: null }, p = { isTouch: !1, isScrolling: !1, isSwiping: !1, direction: !1, inMotion: !1 }, f = { _onDragStart: null, _onDragMove: null, _onDragEnd: null, _transitionEnd: null, _resizer: null, _responsiveCall: null, _goToLoop: null, _checkVisibile: null }, n.Defaults = { items: 3, loop: !1, center: !1, mouseDrag: !0, touchDrag: !0, pullDrag: !0, freeDrag: !1, margin: 0, stagePadding: 0, merge: !1, mergeFit: !0, autoWidth: !1, startPosition: 0, rtl: !1, smartSpeed: 250, fluidSpeed: !1, dragEndSpeed: !1, responsive: {}, responsiveRefreshRate: 200, responsiveBaseElement: e, responsiveClass: !1, fallbackEasing: "swing", info: !1, nestedItemSelector: !1, itemElement: "div", stageElement: "div", themeClass: "owl-theme", baseClass: "owl-carousel", itemClass: "owl-item", centerClass: "center", activeClass: "active" }, n.Width = { Default: "default", Inner: "inner", Outer: "outer" }, n.Plugins = {}, n.Pipe = [{ filter: ["width", "items", "settings"], run: function(t) { t.current = this._items && this._items[this.relative(this._current)] } }, {
            filter: ["items", "settings"],
            run: function() {
                var t = this._clones,
                    e = this.$stage.children(".cloned");
                (e.length !== t.length || !this.settings.loop && t.length > 0) && (this.$stage.children(".cloned").remove(), this._clones = [])
            }
        }, {
            filter: ["items", "settings"],
            run: function() {
                var t, e, i = this._clones,
                    s = this._items,
                    n = this.settings.loop ? i.length - Math.max(2 * this.settings.items, 4) : 0;
                for (t = 0, e = Math.abs(n / 2); e > t; t++) n > 0 ? (this.$stage.children().eq(s.length + i.length - 1).remove(), i.pop(), this.$stage.children().eq(0).remove(), i.pop()) : (i.push(i.length / 2), this.$stage.append(s[i[i.length - 1]].clone().addClass("cloned")), i.push(s.length - 1 - (i.length - 1) / 2), this.$stage.prepend(s[i[i.length - 1]].clone().addClass("cloned")))
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function() {
                var t, e, i, s = this.settings.rtl ? 1 : -1,
                    n = (this.width() / this.settings.items).toFixed(3),
                    o = 0;
                for (this._coordinates = [], e = 0, i = this._clones.length + this._items.length; i > e; e++) t = this._mergers[this.relative(e)], t = this.settings.mergeFit && Math.min(t, this.settings.items) || t, o += (this.settings.autoWidth ? this._items[this.relative(e)].width() + this.settings.margin : n * t) * s, this._coordinates.push(o)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function() {
                var e, i, s = (this.width() / this.settings.items).toFixed(3),
                    n = { width: Math.abs(this._coordinates[this._coordinates.length - 1]) + 2 * this.settings.stagePadding, "padding-left": this.settings.stagePadding || "", "padding-right": this.settings.stagePadding || "" };
                if (this.$stage.css(n), n = { width: this.settings.autoWidth ? "auto" : s - this.settings.margin }, n[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin, !this.settings.autoWidth && t.grep(this._mergers, function(t) { return t > 1 }).length > 0)
                    for (e = 0, i = this._coordinates.length; i > e; e++) n.width = Math.abs(this._coordinates[e]) - Math.abs(this._coordinates[e - 1] || 0) - this.settings.margin, this.$stage.children().eq(e).css(n);
                else this.$stage.children().css(n)
            }
        }, { filter: ["width", "items", "settings"], run: function(t) { t.current && this.reset(this.$stage.children().index(t.current)) } }, { filter: ["position"], run: function() { this.animate(this.coordinates(this._current)) } }, {
            filter: ["width", "position", "items", "settings"],
            run: function() {
                var t, e, i, s, n = this.settings.rtl ? 1 : -1,
                    o = 2 * this.settings.stagePadding,
                    r = this.coordinates(this.current()) + o,
                    a = r + this.width() * n,
                    l = [];
                for (i = 0, s = this._coordinates.length; s > i; i++) t = this._coordinates[i - 1] || 0, e = Math.abs(this._coordinates[i]) + o * n, (this.op(t, "<=", r) && this.op(t, ">", a) || this.op(e, "<", r) && this.op(e, ">", a)) && l.push(i);
                this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass(this.settings.activeClass), this.settings.center && (this.$stage.children("." + this.settings.centerClass).removeClass(this.settings.centerClass), this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))
            }
        }], n.prototype.initialize = function() { if (this.trigger("initialize"), this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl), this.browserSupport(), this.settings.autoWidth && this.state.imagesLoaded !== !0) { var e, i, n; if (e = this.$element.find("img"), i = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : s, n = this.$element.children(i).width(), e.length && 0 >= n) return this.preloadAutoWidthImages(e), !1 } this.$element.addClass("owl-loading"), this.$stage = t("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this._width = this.$element.width(), this.refresh(), this.$element.removeClass("owl-loading").addClass("owl-loaded"), this.eventsCall(), this.internalEvents(), this.addTriggerableEvents(), this.trigger("initialized") }, n.prototype.setup = function() {
            var e = this.viewport(),
                i = this.options.responsive,
                s = -1,
                n = null;
            i ? (t.each(i, function(t) { e >= t && t > s && (s = Number(t)) }), n = t.extend({}, this.options, i[s]), delete n.responsive, n.responsiveClass && this.$element.attr("class", function(t, e) { return e.replace(/\b owl-responsive-\S+/g, "") }).addClass("owl-responsive-" + s)) : n = t.extend({}, this.options), (null === this.settings || this._breakpoint !== s) && (this.trigger("change", { property: { name: "settings", value: n } }), this._breakpoint = s, this.settings = n, this.invalidate("settings"), this.trigger("changed", { property: { name: "settings", value: this.settings } }))
        }, n.prototype.optionsLogic = function() { this.$element.toggleClass("owl-center", this.settings.center), this.settings.loop && this._items.length < this.settings.items && (this.settings.loop = !1), this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1) }, n.prototype.prepare = function(e) { var i = this.trigger("prepare", { content: e }); return i.data || (i.data = t("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass).append(e)), this.trigger("prepared", { content: i.data }), i.data }, n.prototype.update = function() {
            for (var e = 0, i = this._pipe.length, s = t.proxy(function(t) { return this[t] }, this._invalidated), n = {}; i > e;)(this._invalidated.all || t.grep(this._pipe[e].filter, s).length > 0) && this._pipe[e].run(n), e++;
            this._invalidated = {}
        }, n.prototype.width = function(t) {
            switch (t = t || n.Width.Default) {
                case n.Width.Inner:
                case n.Width.Outer:
                    return this._width;
                default:
                    return this._width - 2 * this.settings.stagePadding + this.settings.margin
            }
        }, n.prototype.refresh = function() { return 0 === this._items.length ? !1 : ((new Date).getTime(), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$stage.addClass("owl-refresh"), this.update(), this.$stage.removeClass("owl-refresh"), this.state.orientation = e.orientation, this.watchVisibility(), this.trigger("refreshed"), void 0) }, n.prototype.eventsCall = function() { this.e._onDragStart = t.proxy(function(t) { this.onDragStart(t) }, this), this.e._onDragMove = t.proxy(function(t) { this.onDragMove(t) }, this), this.e._onDragEnd = t.proxy(function(t) { this.onDragEnd(t) }, this), this.e._onResize = t.proxy(function(t) { this.onResize(t) }, this), this.e._transitionEnd = t.proxy(function(t) { this.transitionEnd(t) }, this), this.e._preventClick = t.proxy(function(t) { this.preventClick(t) }, this) }, n.prototype.onThrottledResize = function() { e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate) }, n.prototype.onResize = function() { return this._items.length ? this._width === this.$element.width() ? !1 : this.trigger("resize").isDefaultPrevented() ? !1 : (this._width = this.$element.width(), this.invalidate("width"), this.refresh(), void this.trigger("resized")) : !1 }, n.prototype.eventsRouter = function(t) { var e = t.type; "mousedown" === e || "touchstart" === e ? this.onDragStart(t) : "mousemove" === e || "touchmove" === e ? this.onDragMove(t) : "mouseup" === e || "touchend" === e ? this.onDragEnd(t) : "touchcancel" === e && this.onDragEnd(t) }, n.prototype.internalEvents = function() {
            var i = (h(), d());
            this.settings.mouseDrag ? (this.$stage.on("mousedown", t.proxy(function(t) { this.eventsRouter(t) }, this)), this.$stage.on("dragstart", function() { return !1 }), this.$stage.get(0).onselectstart = function() { return !1 }) : this.$element.addClass("owl-text-select-on"), this.settings.touchDrag && !i && this.$stage.on("touchstart touchcancel", t.proxy(function(t) { this.eventsRouter(t) }, this)), this.transitionEndVendor && this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, !1), this.settings.responsive !== !1 && this.on(e, "resize", t.proxy(this.onThrottledResize, this))
        }, n.prototype.onDragStart = function(s) {
            var n, r, a, l;
            if (n = s.originalEvent || s || e.event, 3 === n.which || this.state.isTouch) return !1;
            if ("mousedown" === n.type && this.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime = (new Date).getTime(), this.speed(0), this.state.isTouch = !0, this.state.isScrolling = !1, this.state.isSwiping = !1, this.drag.distance = 0, r = o(n).x, a = o(n).y, this.drag.offsetX = this.$stage.position().left, this.drag.offsetY = this.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin), this.state.inMotion && this.support3d) l = this.getTransformProperty(), this.drag.offsetX = l, this.animate(l), this.state.inMotion = !0;
            else if (this.state.inMotion && !this.support3d) return this.state.inMotion = !1, !1;
            this.drag.startX = r - this.drag.offsetX, this.drag.startY = a - this.drag.offsetY, this.drag.start = r - this.drag.startX, this.drag.targetEl = n.target || n.srcElement, this.drag.updatedX = this.drag.start, ("IMG" === this.drag.targetEl.tagName || "A" === this.drag.targetEl.tagName) && (this.drag.targetEl.draggable = !1), t(i).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", t.proxy(function(t) { this.eventsRouter(t) }, this))
        }, n.prototype.onDragMove = function(t) {
            var i, n, r, a, l, c;
            this.state.isTouch && (this.state.isScrolling || (i = t.originalEvent || t || e.event, n = o(i).x, r = o(i).y, this.drag.currentX = n - this.drag.startX, this.drag.currentY = r - this.drag.startY, this.drag.distance = this.drag.currentX - this.drag.offsetX, this.drag.distance < 0 ? this.state.direction = this.settings.rtl ? "right" : "left" : this.drag.distance > 0 && (this.state.direction = this.settings.rtl ? "left" : "right"), this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length)) : (a = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum()), l = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum()), c = this.settings.pullDrag ? this.drag.distance / 5 : 0, this.drag.currentX = Math.max(Math.min(this.drag.currentX, a + c), l + c)), (this.drag.distance > 8 || this.drag.distance < -8) && (i.preventDefault !== s ? i.preventDefault() : i.returnValue = !1, this.state.isSwiping = !0), this.drag.updatedX = this.drag.currentX, (this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === !1 && (this.state.isScrolling = !0, this.drag.updatedX = this.drag.start), this.animate(this.drag.updatedX)))
        }, n.prototype.onDragEnd = function(e) {
            var s, n, o;
            if (this.state.isTouch) {
                if ("mouseup" === e.type && this.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch = !1, this.state.isScrolling = !1, this.state.isSwiping = !1, 0 === this.drag.distance && this.state.inMotion !== !0) return this.state.inMotion = !1, !1;
                this.drag.endTime = (new Date).getTime(), s = this.drag.endTime - this.drag.startTime, n = Math.abs(this.drag.distance), (n > 3 || s > 300) && this.removeClick(this.drag.targetEl), o = this.closest(this.drag.updatedX), this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(o), this.invalidate("position"), this.update(), this.settings.pullDrag || this.drag.updatedX !== this.coordinates(o) || this.transitionEnd(), this.drag.distance = 0, t(i).off(".owl.dragEvents")
            }
        }, n.prototype.removeClick = function(i) { this.drag.targetEl = i, t(i).on("click.preventClick", this.e._preventClick), e.setTimeout(function() { t(i).off("click.preventClick") }, 300) }, n.prototype.preventClick = function(e) { e.preventDefault ? e.preventDefault() : e.returnValue = !1, e.stopPropagation && e.stopPropagation(), t(e.target).off("click.preventClick") }, n.prototype.getTransformProperty = function() { var t, i; return t = e.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform"), t = t.replace(/matrix(3d)?\(|\)/g, "").split(","), i = 16 === t.length, i !== !0 ? t[4] : t[12] }, n.prototype.closest = function(e) {
            var i = -1,
                s = 30,
                n = this.width(),
                o = this.coordinates();
            return this.settings.freeDrag || t.each(o, t.proxy(function(t, r) { return e > r - s && r + s > e ? i = t : this.op(e, "<", r) && this.op(e, ">", o[t + 1] || r - n) && (i = "left" === this.state.direction ? t + 1 : t), -1 === i }, this)), this.settings.loop || (this.op(e, ">", o[this.minimum()]) ? i = e = this.minimum() : this.op(e, "<", o[this.maximum()]) && (i = e = this.maximum())), i
        }, n.prototype.animate = function(e) { this.trigger("translate"), this.state.inMotion = this.speed() > 0, this.support3d ? this.$stage.css({ transform: "translate3d(" + Math.round(e) + "px,0px, 0px)", transition: this.speed() / 1e3 + "s" }) : this.state.isTouch ? this.$stage.css({ left: e + "px" }) : this.$stage.animate({ left: e }, this.speed() / 1e3, this.settings.fallbackEasing, t.proxy(function() { this.state.inMotion && this.transitionEnd() }, this)) }, n.prototype.current = function(t) {
            if (t === s) return this._current;
            if (0 === this._items.length) return s;
            if (t = this.normalize(t), this._current !== t) {
                var e = this.trigger("change", { property: { name: "position", value: t } });
                e.data !== s && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", { property: { name: "position", value: this._current } })
            }
            return this._current
        }, n.prototype.invalidate = function(t) { this._invalidated[t] = !0 }, n.prototype.reset = function(t) { t = this.normalize(t), t !== s && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"])) }, n.prototype.normalize = function(e, i) { var n = i ? this._items.length : this._items.length + this._clones.length; return !t.isNumeric(e) || 1 > n ? s : e = this._clones.length ? (e % n + n) % n : Math.max(this.minimum(i), Math.min(this.maximum(i), e)) }, n.prototype.relative = function(t) { return t = this.normalize(t), t -= this._clones.length / 2, this.normalize(t, !0) }, n.prototype.maximum = function(t) {
            var e, i, s, n = 0,
                o = this.settings;
            if (t) return this._items.length - 1;
            if (!o.loop && o.center) e = this._items.length - 1;
            else if (o.loop || o.center)
                if (o.loop || o.center) e = this._items.length + o.items;
                else {
                    if (!o.autoWidth && !o.merge) throw "Can not detect maximum absolute position.";
                    for (revert = o.rtl ? 1 : -1, i = this.$stage.width() - this.$element.width();
                        (s = this.coordinates(n)) && !(s * revert >= i);) e = ++n
                }
            else e = this._items.length - o.items;
            return e
        }, n.prototype.minimum = function(t) { return t ? 0 : this._clones.length / 2 }, n.prototype.items = function(t) { return t === s ? this._items.slice() : (t = this.normalize(t, !0), this._items[t]) }, n.prototype.mergers = function(t) { return t === s ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t]) }, n.prototype.clones = function(e) {
            var i = this._clones.length / 2,
                n = i + this._items.length,
                o = function(t) { return t % 2 === 0 ? n + t / 2 : i - (t + 1) / 2 };
            return e === s ? t.map(this._clones, function(t, e) { return o(e) }) : t.map(this._clones, function(t, i) { return t === e ? o(i) : null })
        }, n.prototype.speed = function(t) { return t !== s && (this._speed = t), this._speed }, n.prototype.coordinates = function(e) { var i = null; return e === s ? t.map(this._coordinates, t.proxy(function(t, e) { return this.coordinates(e) }, this)) : (this.settings.center ? (i = this._coordinates[e], i += (this.width() - i + (this._coordinates[e - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : i = this._coordinates[e - 1] || 0, i) }, n.prototype.duration = function(t, e, i) { return Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed) }, n.prototype.to = function(i, s) {
            if (this.settings.loop) {
                var n = i - this.relative(this.current()),
                    o = this.current(),
                    r = this.current(),
                    a = this.current() + n,
                    l = 0 > r - a ? !0 : !1,
                    c = this._clones.length + this._items.length;
                a < this.settings.items && l === !1 ? (o = r + this._items.length, this.reset(o)) : a >= c - this.settings.items && l === !0 && (o = r - this._items.length, this.reset(o)), e.clearTimeout(this.e._goToLoop), this.e._goToLoop = e.setTimeout(t.proxy(function() { this.speed(this.duration(this.current(), o + n, s)), this.current(o + n), this.update() }, this), 30)
            } else this.speed(this.duration(this.current(), i, s)), this.current(i), this.update()
        }, n.prototype.next = function(t) { t = t || !1, this.to(this.relative(this.current()) + 1, t) }, n.prototype.prev = function(t) { t = t || !1, this.to(this.relative(this.current()) - 1, t) }, n.prototype.transitionEnd = function(t) { return t !== s && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0)) ? !1 : (this.state.inMotion = !1, void this.trigger("translated")) }, n.prototype.viewport = function() {
            var s;
            if (this.options.responsiveBaseElement !== e) s = t(this.options.responsiveBaseElement).width();
            else if (e.innerWidth) s = e.innerWidth;
            else {
                if (!i.documentElement || !i.documentElement.clientWidth) throw "Can not detect viewport width.";
                s = i.documentElement.clientWidth
            }
            return s
        }, n.prototype.replace = function(e) { this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function() { return 1 === this.nodeType }).each(t.proxy(function(t, e) { e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1) }, this)), this.reset(t.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items") }, n.prototype.add = function(t, e) { e = e === s ? this._items.length : this.normalize(e, !0), this.trigger("add", { content: t, position: e }), 0 === this._items.length || e === this._items.length ? (this.$stage.append(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[e].before(t), this._items.splice(e, 0, t), this._mergers.splice(e, 0, 1 * t.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)), this.invalidate("items"), this.trigger("added", { content: t, position: e }) }, n.prototype.remove = function(t) { t = this.normalize(t, !0), t !== s && (this.trigger("remove", { content: this._items[t], position: t }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", { content: null, position: t })) }, n.prototype.addTriggerableEvents = function() {
            var e = t.proxy(function(e, i) { return t.proxy(function(t) { t.relatedTarget !== this && (this.suppress([i]), e.apply(this, [].slice.call(arguments, 1)), this.release([i])) }, this) }, this);
            t.each({ next: this.next, prev: this.prev, to: this.to, destroy: this.destroy, refresh: this.refresh, replace: this.replace, add: this.add, remove: this.remove }, t.proxy(function(t, i) { this.$element.on(t + ".owl.carousel", e(i, t + ".owl.carousel")) }, this))
        }, n.prototype.watchVisibility = function() {
            function i(t) { return t.offsetWidth > 0 && t.offsetHeight > 0 }

            function s() { i(this.$element.get(0)) && (this.$element.removeClass("owl-hidden"), this.refresh(), e.clearInterval(this.e._checkVisibile)) } i(this.$element.get(0)) || (this.$element.addClass("owl-hidden"), e.clearInterval(this.e._checkVisibile), this.e._checkVisibile = e.setInterval(t.proxy(s, this), 500))
        }, n.prototype.preloadAutoWidthImages = function(e) {
            var i, s, n, o;
            i = 0, s = this, e.each(function(r, a) { n = t(a), o = new Image, o.onload = function() { i++, n.attr("src", o.src), n.css("opacity", 1), i >= e.length && (s.state.imagesLoaded = !0, s.initialize()) }, o.src = n.attr("src") || n.attr("data-src") || n.attr("data-src-retina") })
        }, n.prototype.destroy = function() {
            this.$element.hasClass(this.settings.themeClass) && this.$element.removeClass(this.settings.themeClass), this.settings.responsive !== !1 && t(e).off("resize.owl.carousel"), this.transitionEndVendor && this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
            for (var s in this._plugins) this._plugins[s].destroy();
            (this.settings.mouseDrag || this.settings.touchDrag) && (this.$stage.off("mousedown touchstart touchcancel"), t(i).off(".owl.dragEvents"), this.$stage.get(0).onselectstart = function() {}, this.$stage.off("dragstart", function() { return !1 })), this.$element.off(".owl"), this.$stage.children(".cloned").remove(), this.e = null, this.$element.removeData("owlCarousel"), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.unwrap()
        }, n.prototype.op = function(t, e, i) {
            var s = this.settings.rtl;
            switch (e) {
                case "<":
                    return s ? t > i : i > t;
                case ">":
                    return s ? i > t : t > i;
                case ">=":
                    return s ? i >= t : t >= i;
                case "<=":
                    return s ? t >= i : i >= t
            }
        }, n.prototype.on = function(t, e, i, s) { t.addEventListener ? t.addEventListener(e, i, s) : t.attachEvent && t.attachEvent("on" + e, i) }, n.prototype.off = function(t, e, i, s) { t.removeEventListener ? t.removeEventListener(e, i, s) : t.detachEvent && t.detachEvent("on" + e, i) }, n.prototype.trigger = function(e, i, s) {
            var n = { item: { count: this._items.length, index: this.current() } },
                o = t.camelCase(t.grep(["on", e, s], function(t) { return t }).join("-").toLowerCase()),
                r = t.Event([e, "owl", s || "carousel"].join(".").toLowerCase(), t.extend({ relatedTarget: this }, n, i));
            return this._supress[e] || (t.each(this._plugins, function(t, e) { e.onTrigger && e.onTrigger(r) }), this.$element.trigger(r), this.settings && "function" == typeof this.settings[o] && this.settings[o].apply(this, r)), r
        }, n.prototype.suppress = function(e) { t.each(e, t.proxy(function(t, e) { this._supress[e] = !0 }, this)) }, n.prototype.release = function(e) { t.each(e, t.proxy(function(t, e) { delete this._supress[e] }, this)) }, n.prototype.browserSupport = function() {
            if (this.support3d = c(), this.support3d) {
                this.transformVendor = l();
                var t = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"];
                this.transitionEndVendor = t[a()], this.vendorName = this.transformVendor.replace(/Transform/i, ""), this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : ""
            }
            this.state.orientation = e.orientation
        }, t.fn.owlCarousel = function(e) { return this.each(function() { t(this).data("owlCarousel") || t(this).data("owlCarousel", new n(this, e)) }) }, t.fn.owlCarousel.Constructor = n
    }(window.Zepto || window.jQuery, window, document),
    function(t, e) {
        var i = function(e) {
            this._core = e, this._loaded = [], this._handlers = {
                "initialized.owl.carousel change.owl.carousel": t.proxy(function(e) {
                    if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type))
                        for (var i = this._core.settings, s = i.center && Math.ceil(i.items / 2) || i.items, n = i.center && -1 * s || 0, o = (e.property && e.property.value || this._core.current()) + n, r = this._core.clones().length, a = t.proxy(function(t, e) {
                                this.load(e)
                            }, this); n++ < s;) this.load(r / 2 + this._core.relative(o)), r && t.each(this._core.clones(this._core.relative(o++)), a)
                }, this)
            }, this._core.options = t.extend({}, i.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        i.Defaults = { lazyLoad: !1 }, i.prototype.load = function(i) {
            var s = this._core.$stage.children().eq(i),
                n = s && s.find(".owl-lazy");
            !n || t.inArray(s.get(0), this._loaded) > -1 || (n.each(t.proxy(function(i, s) {
                var n, o = t(s),
                    r = e.devicePixelRatio > 1 && o.attr("data-src-retina") || o.attr("data-src");
                this._core.trigger("load", { element: o, url: r }, "lazy"), o.is("img") ? o.one("load.owl.lazy", t.proxy(function() { o.css("opacity", 1), this._core.trigger("loaded", { element: o, url: r }, "lazy") }, this)).attr("src", r) : (n = new Image, n.onload = t.proxy(function() { o.css({ "background-image": "url(" + r + ")", opacity: "1" }), this._core.trigger("loaded", { element: o, url: r }, "lazy") }, this), n.src = r)
            }, this)), this._loaded.push(s.get(0)))
        }, i.prototype.destroy = function() { var t, e; for (t in this.handlers) this._core.$element.off(t, this.handlers[t]); for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null) }, t.fn.owlCarousel.Constructor.Plugins.Lazy = i
    }(window.Zepto || window.jQuery, window, document),
    function(t) {
        var e = function(i) { this._core = i, this._handlers = { "initialized.owl.carousel": t.proxy(function() { this._core.settings.autoHeight && this.update() }, this), "changed.owl.carousel": t.proxy(function(t) { this._core.settings.autoHeight && "position" == t.property.name && this.update() }, this), "loaded.owl.lazy": t.proxy(function(t) { this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current()) && this.update() }, this) }, this._core.options = t.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers) };
        e.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }, e.prototype.update = function() { this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass) }, e.prototype.destroy = function() { var t, e; for (t in this._handlers) this._core.$element.off(t, this._handlers[t]); for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null) }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, i) {
        var s = function(e) {
            this._core = e, this._videos = {}, this._playing = null, this._fullscreen = !1, this._handlers = {
                "resize.owl.carousel": t.proxy(function(t) { this._core.settings.video && !this.isInFullScreen() && t.preventDefault() }, this),
                "refresh.owl.carousel changed.owl.carousel": t.proxy(function() { this._playing && this.stop() }, this),
                "prepared.owl.carousel": t.proxy(function(e) {
                    var i = t(e.content).find(".owl-video");
                    i.length && (i.css("display", "none"), this.fetch(i, t(e.content)))
                }, this)
            }, this._core.options = t.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function(t) { this.play(t) }, this))
        };
        s.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }, s.prototype.fetch = function(t, e) {
            var i = t.attr("data-vimeo-id") ? "vimeo" : "youtube",
                s = t.attr("data-vimeo-id") || t.attr("data-youtube-id"),
                n = t.attr("data-width") || this._core.settings.videoWidth,
                o = t.attr("data-height") || this._core.settings.videoHeight,
                r = t.attr("href");
            if (!r) throw new Error("Missing video URL.");
            if (s = r.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), s[3].indexOf("youtu") > -1) i = "youtube";
            else {
                if (!(s[3].indexOf("vimeo") > -1)) throw new Error("Video URL not supported.");
                i = "vimeo"
            }
            s = s[6], this._videos[r] = { type: i, id: s, width: n, height: o }, e.attr("data-video", r), this.thumbnail(t, this._videos[r])
        }, s.prototype.thumbnail = function(e, i) {
            var s, n, o, r = i.width && i.height ? 'style="width:' + i.width + "px;height:" + i.height + 'px;"' : "",
                a = e.find("img"),
                l = "src",
                c = "",
                h = this._core.settings,
                d = function(t) { n = '<div class="owl-video-play-icon"></div>', s = h.lazyLoad ? '<div class="owl-video-tn ' + c + '" ' + l + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>', e.after(s), e.after(n) };
            return e.wrap('<div class="owl-video-wrapper"' + r + "></div>"), this._core.settings.lazyLoad && (l = "data-src", c = "owl-lazy"), a.length ? (d(a.attr(l)), a.remove(), !1) : void("youtube" === i.type ? (o = "http://img.youtube.com/vi/" + i.id + "/hqdefault.jpg", d(o)) : "vimeo" === i.type && t.ajax({ type: "GET", url: "http://vimeo.com/api/v2/video/" + i.id + ".json", jsonp: "callback", dataType: "jsonp", success: function(t) { o = t[0].thumbnail_large, d(o) } }))
        }, s.prototype.stop = function() { this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null }, s.prototype.play = function(e) {
            this._core.trigger("play", null, "video"), this._playing && this.stop();
            var i, s, n = t(e.target || e.srcElement),
                o = n.closest("." + this._core.settings.itemClass),
                r = this._videos[o.attr("data-video")],
                a = r.width || "100%",
                l = r.height || this._core.$stage.height();
            "youtube" === r.type ? i = '<iframe width="' + a + '" height="' + l + '" src="http://www.youtube.com/embed/' + r.id + "?autoplay=1&v=" + r.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === r.type && (i = '<iframe src="http://player.vimeo.com/video/' + r.id + '?autoplay=1" width="' + a + '" height="' + l + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), o.addClass("owl-video-playing"), this._playing = o, s = t('<div style="height:' + l + "px; width:" + a + 'px" class="owl-video-frame">' + i + "</div>"), n.after(s)
        }, s.prototype.isInFullScreen = function() { var s = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement; return s && t(s).parent().hasClass("owl-video-frame") && (this._core.speed(0), this._fullscreen = !0), s && this._fullscreen && this._playing ? !1 : this._fullscreen ? (this._fullscreen = !1, !1) : this._playing && this._core.state.orientation !== e.orientation ? (this._core.state.orientation = e.orientation, !1) : !0 }, s.prototype.destroy = function() {
            var t, e;
            this._core.$element.off("click.owl.video");
            for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.Video = s
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, i, s) {
        var n = function(e) { this.core = e, this.core.options = t.extend({}, n.Defaults, this.core.options), this.swapping = !0, this.previous = s, this.next = s, this.handlers = { "change.owl.carousel": t.proxy(function(t) { "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value) }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function(t) { this.swapping = "translated" == t.type }, this), "translate.owl.carousel": t.proxy(function() { this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap() }, this) }, this.core.$element.on(this.handlers) };
        n.Defaults = { animateOut: !1, animateIn: !1 }, n.prototype.swap = function() {
            if (1 === this.core.settings.items && this.core.support3d) {
                this.core.speed(0);
                var e, i = t.proxy(this.clear, this),
                    s = this.core.$stage.children().eq(this.previous),
                    n = this.core.$stage.children().eq(this.next),
                    o = this.core.settings.animateIn,
                    r = this.core.settings.animateOut;
                this.core.current() !== this.previous && (r && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), s.css({ left: e + "px" }).addClass("animated owl-animated-out").addClass(r).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", i)), o && n.addClass("animated owl-animated-in").addClass(o).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", i))
            }
        }, n.prototype.clear = function(e) { t(e.target).css({ left: "" }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.transitionEnd() }, n.prototype.destroy = function() { var t, e; for (t in this.handlers) this.core.$element.off(t, this.handlers[t]); for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null) }, t.fn.owlCarousel.Constructor.Plugins.Animate = n
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, i) {
        var s = function(e) { this.core = e, this.core.options = t.extend({}, s.Defaults, this.core.options), this.handlers = { "translated.owl.carousel refreshed.owl.carousel": t.proxy(function() { this.autoplay() }, this), "play.owl.autoplay": t.proxy(function(t, e, i) { this.play(e, i) }, this), "stop.owl.autoplay": t.proxy(function() { this.stop() }, this), "mouseover.owl.autoplay": t.proxy(function() { this.core.settings.autoplayHoverPause && this.pause() }, this), "mouseleave.owl.autoplay": t.proxy(function() { this.core.settings.autoplayHoverPause && this.autoplay() }, this) }, this.core.$element.on(this.handlers) };
        s.Defaults = { autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1 }, s.prototype.autoplay = function() { this.core.settings.autoplay && !this.core.state.videoPlay ? (e.clearInterval(this.interval), this.interval = e.setInterval(t.proxy(function() { this.play() }, this), this.core.settings.autoplayTimeout)) : e.clearInterval(this.interval) }, s.prototype.play = function() { return i.hidden === !0 || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion ? void 0 : this.core.settings.autoplay === !1 ? void e.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed) }, s.prototype.stop = function() { e.clearInterval(this.interval) }, s.prototype.pause = function() { e.clearInterval(this.interval) }, s.prototype.destroy = function() {
            var t, i;
            e.clearInterval(this.interval);
            for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
            for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.autoplay = s
    }(window.Zepto || window.jQuery, window, document),
    function(t) {
        "use strict";
        var e = function(i) {
            this._core = i, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = { next: this._core.next, prev: this._core.prev, to: this._core.to }, this._handlers = {
                "prepared.owl.carousel": t.proxy(function(e) { this._core.settings.dotsData && this._templates.push(t(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot")) }, this),
                "add.owl.carousel": t.proxy(function(e) { this._core.settings.dotsData && this._templates.splice(e.position, 0, t(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot")) }, this),
                "remove.owl.carousel prepared.owl.carousel": t.proxy(function(t) { this._core.settings.dotsData && this._templates.splice(t.position, 1) }, this),
                "change.owl.carousel": t.proxy(function(t) {
                    if ("position" == t.property.name && !this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
                        var e = this._core.current(),
                            i = this._core.maximum(),
                            s = this._core.minimum();
                        t.data = t.property.value > i ? e >= i ? s : i : t.property.value < s ? i : t.property.value
                    }
                }, this),
                "changed.owl.carousel": t.proxy(function(t) { "position" == t.property.name && this.draw() }, this),
                "refreshed.owl.carousel": t.proxy(function() { this._initialized || (this.initialize(), this._initialized = !0), this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation") }, this)
            }, this._core.options = t.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
        };
        e.Defaults = { nav: !1, navRewind: !0, navText: ["prev", "next"], navSpeed: !1, navElement: "div", navContainer: !1, navContainerClass: "owl-nav", navClass: ["owl-prev", "owl-next"], slideBy: 1, dotClass: "owl-dot", dotsClass: "owl-dots", dots: !0, dotsEach: !1, dotData: !1, dotsSpeed: !1, dotsContainer: !1, controlsClass: "owl-controls" }, e.prototype.initialize = function() {
            var e, i, s = this._core.settings;
            s.dotsData || (this._templates = [t("<div>").addClass(s.dotClass).append(t("<span>")).prop("outerHTML")]), s.navContainer && s.dotsContainer || (this._controls.$container = t("<div>").addClass(s.controlsClass).appendTo(this.$element)), this._controls.$indicators = s.dotsContainer ? t(s.dotsContainer) : t("<div>").hide().addClass(s.dotsClass).appendTo(this._controls.$container), this._controls.$indicators.on("click", "div", t.proxy(function(e) {
                var i = t(e.target).parent().is(this._controls.$indicators) ? t(e.target).index() : t(e.target).parent().index();
                e.preventDefault(), this.to(i, s.dotsSpeed)
            }, this)), e = s.navContainer ? t(s.navContainer) : t("<div>").addClass(s.navContainerClass).prependTo(this._controls.$container), this._controls.$next = t("<" + s.navElement + ">"), this._controls.$previous = this._controls.$next.clone(), this._controls.$previous.addClass(s.navClass[0]).html(s.navText[0]).hide().prependTo(e).on("click", t.proxy(function() { this.prev(s.navSpeed) }, this)), this._controls.$next.addClass(s.navClass[1]).html(s.navText[1]).hide().appendTo(e).on("click", t.proxy(function() { this.next(s.navSpeed) }, this));
            for (i in this._overrides) this._core[i] = t.proxy(this[i], this)
        }, e.prototype.destroy = function() { var t, e, i, s; for (t in this._handlers) this.$element.off(t, this._handlers[t]); for (e in this._controls) this._controls[e].remove(); for (s in this.overides) this._core[s] = this._overrides[s]; for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null) }, e.prototype.update = function() {
            var t, e, i, s = this._core.settings,
                n = this._core.clones().length / 2,
                o = n + this._core.items().length,
                r = s.center || s.autoWidth || s.dotData ? 1 : s.dotsEach || s.items;
            if ("page" !== s.slideBy && (s.slideBy = Math.min(s.slideBy, s.items)), s.dots || "page" == s.slideBy)
                for (this._pages = [], t = n, e = 0, i = 0; o > t; t++)(e >= r || 0 === e) && (this._pages.push({ start: t - n, end: t - n + r - 1 }), e = 0, ++i), e += this._core.mergers(this._core.relative(t))
        }, e.prototype.draw = function() {
            var e, i, s = "",
                n = this._core.settings,
                o = (this._core.$stage.children(), this._core.relative(this._core.current()));
            if (!n.nav || n.loop || n.navRewind || (this._controls.$previous.toggleClass("disabled", 0 >= o), this._controls.$next.toggleClass("disabled", o >= this._core.maximum())), this._controls.$previous.toggle(n.nav), this._controls.$next.toggle(n.nav), n.dots) {
                if (e = this._pages.length - this._controls.$indicators.children().length, n.dotData && 0 !== e) {
                    for (i = 0; i < this._controls.$indicators.children().length; i++) s += this._templates[this._core.relative(i)];
                    this._controls.$indicators.html(s)
                } else e > 0 ? (s = new Array(e + 1).join(this._templates[0]), this._controls.$indicators.append(s)) : 0 > e && this._controls.$indicators.children().slice(e).remove();
                this._controls.$indicators.find(".active").removeClass("active"), this._controls.$indicators.children().eq(t.inArray(this.current(), this._pages)).addClass("active")
            }
            this._controls.$indicators.toggle(n.dots)
        }, e.prototype.onTrigger = function(e) {
            var i = this._core.settings;
            e.page = { index: t.inArray(this.current(), this._pages), count: this._pages.length, size: i && (i.center || i.autoWidth || i.dotData ? 1 : i.dotsEach || i.items) }
        }, e.prototype.current = function() { var e = this._core.relative(this._core.current()); return t.grep(this._pages, function(t) { return t.start <= e && t.end >= e }).pop() }, e.prototype.getPosition = function(e) { var i, s, n = this._core.settings; return "page" == n.slideBy ? (i = t.inArray(this.current(), this._pages), s = this._pages.length, e ? ++i : --i, i = this._pages[(i % s + s) % s].start) : (i = this._core.relative(this._core.current()), s = this._core.items().length, e ? i += n.slideBy : i -= n.slideBy), i }, e.prototype.next = function(e) { t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e) }, e.prototype.prev = function(e) { t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e) }, e.prototype.to = function(e, i, s) {
            var n;
            s ? t.proxy(this._overrides.to, this._core)(e, i) : (n = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % n + n) % n].start, i))
        }, t.fn.owlCarousel.Constructor.Plugins.Navigation = e
    }(window.Zepto || window.jQuery, window, document),
    function(t, e) {
        "use strict";
        var i = function(s) {
            this._core = s, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
                "initialized.owl.carousel": t.proxy(function() { "URLHash" == this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation") }, this),
                "prepared.owl.carousel": t.proxy(function(e) {
                    var i = t(e.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
                    this._hashes[i] = e.content
                }, this)
            }, this._core.options = t.extend({}, i.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy(function() {
                var t = e.location.hash.substring(1),
                    i = this._core.$stage.children(),
                    s = this._hashes[t] && i.index(this._hashes[t]) || 0;
                return t ? void this._core.to(s, !1, !0) : !1
            }, this))
        };
        i.Defaults = { URLhashListener: !1 }, i.prototype.destroy = function() {
            var i, s;
            t(e).off("hashchange.owl.navigation");
            for (i in this._handlers) this._core.$element.off(i, this._handlers[i]);
            for (s in Object.getOwnPropertyNames(this)) "function" != typeof this[s] && (this[s] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.Hash = i
    }(window.Zepto || window.jQuery, window, document),
    function(t) {
        function e() {
            var e = t(window).scrollTop(),
                i = t("#header").outerHeight();
            t(window).scroll(function(s) {
                var n = t(this).scrollTop();
                n > e ? t("#sticky_header").removeClass("header-is-sticky") : i > n ? t("#sticky_header").removeClass("header-is-sticky") : t("#sticky_header").addClass("header-is-sticky"), e = n
            })
        }

        function i() {
            var e = t(".site-title").clone(!0),
                i = t(".main-navigation").clone(!0, !0),
                n = t(".vce-res-nav").clone(!0);
            t("body").prepend('<div id="sticky_header" class="header-sticky"><div class="container">' + n.html() + '<div class="site-title">' + e.html() + '</div><div class="main-navigation">' + i.html() + "</div></div></div>"), "" !== vce_js_settings.sticky_header_logo && t("#sticky_header .site-title a img").length > 0 && t("#sticky_header .site-title a img").attr("src", vce_js_settings.sticky_header_logo), t("#sticky_header .site-title a img").css("width", "auto"), vce_js_settings.mega_menu_slider && t("#sticky_header .vce-mega-menu-posts-wrap > ul").each(function() {
                t(this).removeClass("owl-carousel owl-theme owl-loaded");
                var e = t(this).find(".owl-item:not(.cloned) li");
                t(this).html("").append(e), s(t(this))
            })
        }

        function s(t) {
            var e = t.parent().attr("data-numposts");
            t.owlCarousel({ loop: !0, rtl: vce_js_settings.rtl_mode, nav: !0, center: !1, fluidSpeed: 100, items: e, navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'], responsive: { 0: { items: 1, nav: !0, autoWidth: !0 }, 600: { items: 2, autoWidth: !0 }, 768: { items: 3, autoWidth: !1 }, 1024: { items: e, autoWidth: !1 } } })
        }
        t(document).ready(function() {
            function n(e) {
                e.find(".vce-post-slider").each(function() {
                    var e = 1e3 * parseInt(t(this).attr("data-autoplay")),
                        i = e ? !0 : !1;
                    t(this).owlCarousel({ loop: !0, nav: !0, rtl: vce_js_settings.rtl_mode, autoplay: i, autoplayTimeout: e, autoplayHoverPause: !0, center: !0, fluidSpeed: 100, items: 1, navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'] })
                })
            }

            function o(t) {
                var e = t.find(".vce-image-format"),
                    i = e.length;
                i && e.magnificPopup({ type: "image", zoom: { enabled: !0, duration: 300, opener: function(t) { return t.find("img") } } })
            }

            function r(t) {
                var e = t.find(".vce-gallery-big"),
                    i = e.length;
                i && e.magnificPopup({ type: "image", delegate: "a", gallery: { enabled: !0 }, zoom: { enabled: !0, duration: 300, opener: function(t) { return t.find("img") } }, image: { titleSrc: function(t) { var e = t.el.closest(".big-gallery-item").find(".gallery-caption"); return "undefined" != e ? e.text() : "" } } })
            }

            function a(e) { e.find(".gallery .vce-gallery-slider").each(function() { t(this).owlCarousel({ margin: 1, loop: !0, rtl: vce_js_settings.rtl_mode, nav: !0, mouseDrag: !1, center: !1, fluidSpeed: 100, navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'], items: t(this).attr("data-columns"), autoWidth: !1 }) }) }

            function l(e) {
                if (t(window).width() >= 1024) {
                    if (t(".vce-sticky").length > 0) {
                        var i, s = t("#main-wrapper").find(".site-content").last().height(),
                            n = t("#main-wrapper").find(".sidebar").last().height();
                        i = t(".header-sticky").length ? 80 : 30, s > n ? (t("#main-wrapper").find(".sidebar").last().css("min-height", s - 30), t(".vce-sticky").stick_in_parent({ parent: ".sidebar", inner_scrolling: !1, offset_top: i }), e === !0 && "absolute" == t(".vce-sticky").last().css("position") && t(".vce-sticky").last().css("position", "fixed").css("top", i)) : t(".sidebar").css("min-height", n)
                    }
                } else t(".sidebar").each(function() { t(this).css("height", "auto"), t(this).css("min-height", "1px") }), t(".vce-sticky").trigger("sticky_kit:detach")
            }

            function c(e) { window.open(e, "Share", "height=500,width=760,top=" + (t(window).height() / 2 - 250) + ", left=" + (t(window).width() / 2 - 380) + "resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0") }

            function h(e) { e.find(".vce-post-slider, .vce-post-big").imagesLoaded().always(function(e) { t(".vce-post-slider .vce-posts-wrap, .vce-post-big .vce-posts-wrap").each(function() { t(this).vceCenter().animate({ opacity: 1 }, 400) }) }) }

            function d() {
                t(window).width() < 1024 ? (window.devicePixelRatio > 1 && vce_js_settings.logo_mobile_retina && t(".site-title a").hasClass("has-logo") ? (t(".site-title").imagesLoaded(function() { t(".site-title a img").each(function() { t(this).is(":visible") && t(this).attr("src", vce_js_settings.logo_mobile_retina).css("width", "auto") }) }), vce_retina_mobile_logo_done = !0) : "" !== vce_js_settings.logo_mobile && t(".site-title a").hasClass("has-logo") && t(".site-title a.has-logo img").attr("src") != vce_js_settings.logo_mobile && t(".site-title a.has-logo img").attr("src", vce_js_settings.logo_mobile), t(".site-title a img").css("width", "auto")) : window.devicePixelRatio > 1 && vce_js_settings.logo_retina && t(".site-title a").hasClass("has-logo") ? (t(".site-title").imagesLoaded(function() {
                    t(".site-title a img").each(function() {
                        if (t(this).is(":visible"))
                            if (t(this).attr("src", vce_js_settings.logo_retina), j) t(this).css("width", j + "px");
                            else {
                                t(this).css("width", "auto");
                                var e = t(this).width() / 2;
                                t(this).css("width", e + "px")
                            }
                    })
                }), vce_retina_logo_done = !0) : "" !== vce_js_settings.logo && t(".site-title a").hasClass("has-logo") && t(".site-title a.has-logo img").attr("src") != vce_js_settings.logo && t(".site-title a.has-logo img").attr("src", vce_js_settings.logo)
            }
            1 == parseInt(vce_js_settings.rtl_mode) ? vce_js_settings.rtl_mode = !0 : vce_js_settings.rtl_mode = !1;
            var u = { 0: { items: 1, nav: !0, autoWidth: !0 }, 600: { items: 2, autoWidth: !0 }, 768: { items: 3, autoWidth: !1 }, 1024: { items: 3, autoWidth: !0 } },
                p = vce_js_settings.grid_slider_autoplay;
            t("#vce-featured-grid").hasClass("vce-featured-grid-big") && (u = { 0: { items: 1, nav: !0, autoWidth: !0 }, 600: { items: 1, autoWidth: !0 }, 768: { items: 1, autoWidth: !0 }, 1024: { items: 1, autoWidth: !0 } }, p = vce_js_settings.grid_big_slider_autoplay), t("#vce-featured-grid").owlCarousel({ margin: 1, loop: !0, rtl: vce_js_settings.rtl_mode, autoplay: p, autoplaySpeed: 500, autoplayTimeout: p, autoplayHoverPause: !0, nav: !0, center: !0, fluidSpeed: 100, items: 1, navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'], responsive: u }), t(".vce-featured-full-slider").owlCarousel({ loop: !0, nav: !0, rtl: vce_js_settings.rtl_mode, autoplay: vce_js_settings.full_slider_autoplay, autoplaySpeed: 500, autoplayTimeout: vce_js_settings.full_slider_autoplay, autoplayHoverPause: !0, center: !0, items: 1, navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'] }), n(t(".site-content")), o(t(".site-content")), r(t(".site-content")), t("body").on("click", ".vce-gallery-slider a", function(e) {
                e.preventDefault();
                var i = t(this).closest(".gallery-item").attr("data-item"),
                    s = t(this).closest(".gallery"),
                    n = s.find(".vce-gallery-big");
                n.find(".big-gallery-item").fadeOut(400), n.find(".item-" + i).fadeIn(400)
            }), a(t(".site-content"));
            var f;
            f = t("body").hasClass("vce-sid-none") ? { b: 2, cdf: 3, e: 7, h: 3 } : { b: 1, cdf: 2, e: 5, h: 2 }, t(".vce-slider-pagination.vce-slider-a, .vce-slider-pagination.vce-slider-g").each(function() {
                var e;
                e = t(this).attr("data-autoplay"), t(this).owlCarousel({ loop: !0, autoHeight: !1, rtl: vce_js_settings.rtl_mode, autoWidth: !0, nav: !0, autoplay: e, autoplaySpeed: 500, autoplayTimeout: e, autoplayHoverPause: !0, fluidSpeed: 100, navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'], responsive: { 0: { items: 1, nav: !0, autoWidth: !1, margin: 10 }, 600: { items: 1, autoWidth: !1 }, 768: { items: 1, margin: 20, autoWidth: !1 }, 1023: { items: 1, autoWidth: !1, margin: 20 } } })
            }), t(".vce-slider-pagination.vce-slider-b").each(function() {
                var e;
                e = t(this).attr("data-autoplay"), t(this).owlCarousel({ loop: !0, autoHeight: !1, autoWidth: !0, rtl: vce_js_settings.rtl_mode, nav: !0, fluidSpeed: 100, autoplay: e, autoplaySpeed: 500, autoplayTimeout: e, autoplayHoverPause: !0, navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'], responsive: { 0: { items: 1, nav: !0, autoWidth: !1, margin: 10 }, 600: { items: 1, autoWidth: !1 }, 768: { items: 1, margin: 20, autoWidth: !1 }, 1023: { items: f.b, autoWidth: !1, margin: 20 } } })
            }), t(".vce-slider-pagination.vce-slider-c, .vce-slider-pagination.vce-slider-d, .vce-slider-pagination.vce-slider-f").each(function() {
                var e, i;
                t(this).parent().parent().hasClass("main-box-half") ? (e = 1, i = 1) : (e = f.cdf, i = 2);
                var s;
                s = t(this).attr("data-autoplay"), t(this).owlCarousel({ loop: !0, autoHeight: !1, rtl: vce_js_settings.rtl_mode, autoWidth: !0, nav: !0, fluidSpeed: 100, autoplay: s, autoplaySpeed: 500, autoplayTimeout: s, autoplayHoverPause: !0, navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'], responsive: { 0: { items: 1, nav: !0, autoWidth: !1, margin: 10 }, 670: { items: i, margin: 18, autoWidth: !1 }, 768: { items: i, margin: 15, autoWidth: !1 }, 1023: { items: e, autoWidth: !1, margin: 19 } } })
            });
            var g;
            if (g = t(this).attr("data-autoplay"), t(".vce-slider-pagination.vce-slider-e").each(function() {
                    var e;
                    e = t(this).attr("data-autoplay"), t(this).owlCarousel({ loop: !0, autoHeight: !1, autoWidth: !0, rtl: vce_js_settings.rtl_mode, nav: !0, fluidSpeed: 100, autoplay: e, autoplaySpeed: 500, autoplayTimeout: e, autoplayHoverPause: !0, navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'], responsive: { 0: { items: 2, nav: !0, autoWidth: !1, margin: 5 }, 600: { items: 3, margin: 18, autoWidth: !1 }, 768: { items: 5, margin: 15, autoWidth: !1 }, 1023: { items: f.e, autoWidth: !1, margin: 19 } } })
                }), t(".vce-slider-pagination.vce-slider-h").each(function() {
                    var e;
                    e = t(this).attr("data-autoplay"), t(this).owlCarousel({ loop: !0, autoHeight: !1, autoWidth: !0, rtl: vce_js_settings.rtl_mode, nav: !0, fluidSpeed: 100, autoplay: e, autoplaySpeed: 500, autoplayTimeout: e, autoplayHoverPause: !0, navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'], responsive: { 0: { items: 1, nav: !0, autoWidth: !1, margin: 10 }, 600: { items: 1, autoWidth: !1 }, 768: { items: 2, margin: 20, autoWidth: !1 }, 1023: { items: f.h, autoWidth: !1, margin: 20 } } })
                }), t(window).bind("resize", function() { t(window).width() < 1024 ? t(".sidebar.left").insertAfter(".vce-main-content") : (t(".sidebar.left").insertBefore(".vce-main-content"), t("body").hasClass("sidr-main-open") && (t.sidr("close", "sidr-main"), t(this).removeClass("nav-open"))), d(), l(), t(".vce-featured .vce-featured-info, .vce-lay-h .entry-header").each(function() { t(this).vceCenter() }), vce_js_settings.lay_fa_grid_center && t("#vce-featured-grid .vce-featured-info").each(function() { t(this).vceCenter() }) }), t("body").imagesLoaded(function() { t(".vce-lay-c, .vce-sid-none .vce-lay-b, .vce-lay-d, .vce-lay-e, .vce-lay-h").matchHeight(), t(".vce-lay-f").matchHeight(!1), t(".main-box-half .main-box-inside .vce-loop-wrap#content-item").matchHeight(), t(".main-box-half").matchHeight(), t(".vce-mega-menu-posts-wrap .mega-menu-link").matchHeight(), l() }), t(window).width() < 1024 && t(".sidebar.left").length ? t(".sidebar.left").insertAfter(".vce-main-content") : t(".sidebar.left").insertBefore(".vce-main-content"), t(".meta-media").fitVids(), t(".entry-content").fitVids(), t(".vce-featured-header .vce-hover-effect").hover(function() { t(".vce-featured-header .vce-featured-header-background").animate({ opacity: vce_js_settings.fa_big_opacity[2] }, 100) }, function() { t(".vce-featured-header .vce-featured-header-background").animate({ opacity: vce_js_settings.fa_big_opacity[1] }, 100) }), t(".nav-menu li").hover(function(e) { t(this).closest("body").width() < t(document).width() && t(this).find("ul").addClass("vce-rev") }, function() { t(this).find("ul").removeClass("vce-rev") }), t("#vce-responsive-nav").sidr({ name: "sidr-main", source: "#site-navigation", speed: 100 }), 0 != vce_js_settings.top_bar_mobile) {
                var m = t("#sidr-id-vce_main_navigation_menu");
                if (t("#vce_top_navigation_menu").length) {
                    var v = t("#vce_top_navigation_menu").children().clone(),
                        y = t('<li class="sidr-class-menu-item-has-children"></li>').append('<a href="#">' + vce_js_settings.top_bar_more_link + "</a>");
                    t(".sidr-class-search-header-wrap").length ? 0 != vce_js_settings.top_bar_mobile_group ? y.append(t('<ul class="sidr-class-sub-menu">').append(v)).insertBefore(m.find(".sidr-class-search-header-wrap")) : v.insertBefore(m.find(".sidr-class-search-header-wrap")) : 0 != vce_js_settings.top_bar_mobile_group ? m.append(v) : y.append(t('<ul class="sidr-class-sub-menu">').append(v))
                }
                if (t("#vce_social_menu").length) {
                    var _ = t("#vce_social_menu").clone().addClass("clear");
                    m.append(t("<li/>").append(_))
                }
            }
            if (t("body").on("touchend click", ".vce-responsive-nav", function(e) { e.stopPropagation(), e.preventDefault(), t(this).hasClass("nav-open") ? (t.sidr("close", "sidr-main"), t(this).removeClass("nav-open")) : (t.sidr("open", "sidr-main"), t(this).addClass("nav-open")) }), t("#vce-main").on("click", function(e) { t("body").hasClass("sidr-open") && (t.sidr("close", "sidr-main"), t(".vce-responsive-nav").removeClass("nav-open")) }), t(".sidr ul li").each(function() { t(this).hasClass("sidr-class-menu-item-has-children") && t(this).append('<span class="vce-menu-parent fa fa-angle-down"></span>') }), /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? (t(".vce-menu-parent").on("touchstart", function(e) { t(this).prev().slideToggle(), t(this).parent().toggleClass("sidr-class-current_page_item") }), t(".soc_sharing").on("click", function() { t(this).toggleClass("soc_active") })) : t(".vce-menu-parent").on("click", function(e) { t(this).prev().slideToggle(), t(this).parent().toggleClass("sidr-class-current_page_item") }), t("body").on("click", ".vce-single .entry-meta .comments a, body.single .vce-featured .entry-meta .comments a", function(e) {
                    e.preventDefault();
                    var i = t(this).closest(".site-content"),
                        s = this.hash,
                        n = i.find(s);
                    t("html, body").stop().animate({ scrollTop: n.offset().top }, 900, "swing", function() { window.location.hash = s })
                }), t(".vce-infinite-scroll").length || t(".vce-load-more").length || t(".vce-infinite-scroll-single").length) {
                var w = [],
                    b = 0,
                    C = 0,
                    x = { prev: window.location.href, next: "", offset: t(window).scrollTop(), prev_title: window.document.title, next_title: window.document.title };
                w.push(x), window.history.pushState(x, "", window.location.href);
                var k, E = 0;
                t(window).scroll(function() { w[b].offset != k && t(window).scrollTop() < w[b].offset && (k = w[b].offset, E = 0, window.document.title = w[b].prev_title, window.history.replaceState(w, "", w[b].prev), C = b, 0 != b && b--), w[C].offset != E && t(window).scrollTop() > w[C].offset && (E = w[C].offset, k = 0, window.document.title = w[C].next_title, window.history.replaceState(w, "", w[C].next), b = C, C < w.length - 1 && C++) })
            }
            var T = 0;

            t("body").on("click", ".vce-load-more a", function(e) {
                ShowLoading('');
                e.preventDefault();
                var i = t(this),
                    s = window.location.href,
                    n = window.document.title,
                    o = i.attr("href");
                    _scroll = t(this).offset().top - 200;
                    i.addClass("vce-loader"), t("<div>").load(o, function() {
                    var e = T.toString(),
                        r = i.closest(".main-box-inside").find(".vce-loop-wrap#content-item"),
                        a = t(this).find(".vce-loop-wrap#content-item .vce-post").addClass("vce-new-" + e),
                        c = t(this);
                    a.imagesLoaded(setTimeout(function() {
                        if (a.hide().appendTo(r).fadeIn(400),
                            a.eq(0).is(".vce-lay-c, .vce-lay-b, .vce-lay-d, .vce-lay-e, .vce-lay-f, .vce-lay-h") && t.fn.matchHeight._apply(".vce-loop-wrap#content-item .vce-new-" + e, !0),
                            c.find("#vce-pagination a").length ? i.closest(".main-box-inside").find("#vce-pagination").html(c.find("#vce-pagination").html()) : i.closest(".main-box-inside").find("#vce-pagination").fadeOut("fast").remove(),
                            o != window.location) {
                            b++, C++;
                            var h = c.find("title").text(),
                                d = { prev: s, next: o, prev_title: n, next_title: h };
                            w.push(d), window.document.title = h, window.history.pushState(d, "", o);
                            t("body,html").animate({ scrollTop: _scroll }, 800);
                        }
                        return T++, l(!0), !1
                    }, 1000));
                    HideLoading('');
                });
                t('#content-item').after(t('#vce-pagination'));
            });
            var S = !0;
            t(".vce-infinite-scroll").length && t(window).scroll(function() {
                if (S && t(".vce-infinite-scroll").length && t(this).scrollTop() > t(".vce-infinite-scroll").offset().top - t(this).height() - 200) {
                    var e = t(".vce-infinite-scroll a"),
                        i = e.attr("href"),
                        s = window.location.href,
                        n = window.document.title;
                    void 0 !== i && (e.parent().animate({ opacity: 1, height: 32 }, 300).css("padding", "20px"), S = !1, t("<div>").load(i, function() {
                        var o = T.toString(),
                            r = e.closest(".main-box-inside").find(".vce-loop-wrap#content-item"),
                            a = t(this).find(".vce-loop-wrap#content-item .vce-post").addClass("vce-new-" + o),
                            c = t(this);
                        a.imagesLoaded(function() {
                            if (a.hide().appendTo(r).fadeIn(400),
                                a.eq(0).is(".vce-lay-c, .vce-lay-b, .vce-lay-d, .vce-lay-e, .vce-lay-f, .vce-lay-h") && setTimeout(function() { t.fn.matchHeight._apply(".vce-loop-wrap#content-item .vce-new-" + o, !0) }, 1e3), c.find(".vce-infinite-scroll").length ? (e.closest(".main-box-inside").find(".vce-infinite-scroll").html(c.find(".vce-infinite-scroll").html()).animate({ opacity: 0, height: 0 }, 300).css("padding", "0"), S = !0) : e.closest(".main-box-inside").find(".vce-infinite-scroll").fadeOut("fast").remove(), i != window.location) {
                                b++, C++;
                                var h = c.find("title").text(),
                                    d = { prev: s, next: i, offset: t(window).scrollTop(), prev_title: n, next_title: h };
                                w.push(d), window.document.title = h, window.history.pushState(d, "", i)
                            }
                            return T++, l(!0), !1
                        })
                    }))
                }
            });
            var I = !0,
                P = 0;
            if (t(".vce-infinite-scroll-single").length && t(window).scroll(function() {
                    if (I && t(".vce-infinite-scroll-single").length && t(this).scrollTop() > t(".vce-infinite-scroll-single").offset().top - t(this).height() - 100) {
                        var e = t(".vce-infinite-scroll-single a"),
                            i = e.attr("href"),
                            s = window.location.href,
                            c = window.document.title;
                        void 0 !== i && (e.parent().animate({ opacity: 1, height: 32 }, 300).css("padding", "0 0 20px"), I = !1, t("<div>").load(i, function() {
                            var d = P.toString(),
                                u = e.closest("#main-wrapper").find(".site-content").last(),
                                p = t(this).find(".site-content").last().addClass("vce-new-" + d),
                                f = t(this).find(".vce-featured").last().addClass("vce-featured-opacity vce-featured-" + d);
                            f.find(".vce-featured-info").addClass("vce-info-opacity");
                            var g = t(this);
                            p.imagesLoaded(function() {
                                if (f.hasClass("vce-featured-opacity") ? (f.hide().insertAfter(u).fadeIn(400), p.hide().insertAfter(f).fadeIn(400)) : p.hide().insertAfter(u).fadeIn(400), t("body").removeClass("vce-sid-none", "vce-sid-left", "vce-sid-right"), o(p), r(p), a(p), n(p), h(p), g.find(".vce-infinite-scroll-single").length ? (e.closest("#main-wrapper").find(".vce-infinite-scroll-single").html(g.find(".vce-infinite-scroll-single").html()).animate({ opacity: 0, height: 0 }, 300).css("padding", "0"), I = !0) : e.closest("#main-wrapper").find(".vce-infinite-scroll-single").fadeOut("fast").remove(), i != window.location) {
                                    b++, C++;
                                    var d = g.find("title").text(),
                                        m = { prev: s, next: i, offset: t(window).scrollTop(), prev_title: c, next_title: d };
                                    w.push(m), window.document.title = d, window.history.pushState(m, "", i)
                                }
                                return P++, l(), !1
                            })
                        }))
                    }
                }), t(".widget_nav_menu .menu-item-has-children, .widget_pages .page_item_has_children").click(function() { t(this).find("ul.sub-menu:first, ul.children:first").slideToggle("fast") }), t("body").on("click", ".search_header", function() { t(this).find("i").toggleClass("fa-times", "fa-search"), t(this).toggleClass("vce-item-selected"), t(this).parent().toggleClass("vce-zoomed"), t(this).next().find(".search-input").focus() }), t(window).scroll(function() { t(this).scrollTop() > 400 ? t("#back-top").fadeIn() : t("#back-top").fadeOut() }), t("#back-top").click(function() { return t("body,html").animate({ scrollTop: 0 }, 800), !1 }), t("body").on("click", 'ul.vce-share-items a:not(".no-popup")', function(e) {
                    e.preventDefault();
                    var i = t(this).attr("data-url");
                    c(i)
                }), vce_js_settings.sticky_header) {
                var $ = !1;
                if (t("#header").length) {
                    var z = t("#header").offset().top + parseInt(vce_js_settings.sticky_header_offset);
                    t(window).scroll(function() { t(window).width() > 480 ? t(window).scrollTop() > z ? $ === !1 ? (i(), $ = !0, setTimeout(function() { t("body").addClass("sticky-active"), t("#sticky_header").addClass("header-is-sticky") }, 300)) : (t("body").addClass("sticky-active"), t("#sticky_header").addClass("header-is-sticky")) : (t("body").removeClass("sticky-active"), t("#sticky_header").removeClass("header-is-sticky")) : ($ === !1 ? (i(), $ = !0) : t("body").addClass("sticky-active"), e()) })
                }
            }
            vce_js_settings.ajax_mega_menu ? t("body").on("hover", "#vce_main_navigation_menu li.vce-mega-cat a", function() {
                var e = t(this).parent().find(".vce-mega-menu-wrapper");
                if (e.is(":empty")) {
                    e.addClass("vce-loader");
                    var i = { action: "vce_mega_menu", cat: t(this).attr("data-mega_cat_id") };
                    t.post(vce_js_settings.ajax_url, i, function(i) {
                        if (e.is(":empty")) {
                            var n = t(t.parseHTML(i));
                            e.removeClass("vce-loader"), setTimeout(function() { t.fn.matchHeight._apply(".vce-mega-menu-posts-wrap .mega-menu-link", !0) }, 300), n.hide().appendTo(e).fadeIn(400), vce_js_settings.mega_menu_slider && s(e.find(".vce-mega-menu-posts-wrap > ul"))
                        }
                    })
                }
            }) : vce_js_settings.mega_menu_slider && t("#header .vce-mega-menu-posts-wrap > ul").each(function() { s(t(this)) }), t.fn.vceCenter = function() { return this.css("position", "absolute"), this.css("top", (t(this).parent().height() - this.height()) / 2 + "px"), this }, t(".vce-featured").imagesLoaded().always(function(e) { t(".vce-featured .vce-featured-info").each(function() { t(this).vceCenter().animate({ opacity: 1 }, 400) }), t(".vce-featured").animate({ opacity: 1 }, 400) }), t(".vce-lay-h").imagesLoaded().always(function(e) { t(".vce-lay-h .entry-header").each(function() { t(this).vceCenter().animate({ opacity: 1 }, 400) }) }), t("#vce-featured-grid").imagesLoaded().always(function(e) { vce_js_settings.lay_fa_grid_center && t("#vce-featured-grid .vce-featured-info").each(function() { t(this).vceCenter() }), t("#vce-featured-grid .vce-grid-item").animate({ opacity: 1 }, 400) }), h(t(".site-content"));
            var j = !1;
            t(window).width() >= 1024 && t(".main-header .site-title a").hasClass("has-logo") && t(".main-header .site-title").imagesLoaded(function() { j = t(".main-header .site-title a img").width() }), d(), t(".vce-featured-info").clearBlur(), t(window).resize(function() { t(".vce-featured-info").clearBlur() })
        }), t.fn.clearBlur = function() {
            t(this).each(function(e, i) {
                var s = t(i),
                    n = s.height(),
                    o = n % 2;
                n = o ? n - 1 : n, s.css("height", n)
            })
        }
}(jQuery);

