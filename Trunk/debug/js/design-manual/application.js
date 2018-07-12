/*! ICAEW design-manual 2018-07-11 */
!function(a, b, c, d) {
    "use strict";
    function e(a) {
        var b, c = this;
        if (this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, 
        this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = 10, 
        this.layer = a, !a || !a.nodeType) throw new TypeError("Layer must be a document node");
        this.onClick = function() {
            return e.prototype.onClick.apply(c, arguments);
        }, this.onMouse = function() {
            return e.prototype.onMouse.apply(c, arguments);
        }, this.onTouchStart = function() {
            return e.prototype.onTouchStart.apply(c, arguments);
        }, this.onTouchMove = function() {
            return e.prototype.onTouchMove.apply(c, arguments);
        }, this.onTouchEnd = function() {
            return e.prototype.onTouchEnd.apply(c, arguments);
        }, this.onTouchCancel = function() {
            return e.prototype.onTouchCancel.apply(c, arguments);
        }, e.notNeeded(a) || (this.deviceIsAndroid && (a.addEventListener("mouseover", this.onMouse, !0), 
        a.addEventListener("mousedown", this.onMouse, !0), a.addEventListener("mouseup", this.onMouse, !0)), 
        a.addEventListener("click", this.onClick, !0), a.addEventListener("touchstart", this.onTouchStart, !1), 
        a.addEventListener("touchmove", this.onTouchMove, !1), a.addEventListener("touchend", this.onTouchEnd, !1), 
        a.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (a.removeEventListener = function(b, c, d) {
            var e = Node.prototype.removeEventListener;
            "click" === b ? e.call(a, b, c.hijacked || c, d) : e.call(a, b, c, d);
        }, a.addEventListener = function(b, c, d) {
            var e = Node.prototype.addEventListener;
            "click" === b ? e.call(a, b, c.hijacked || (c.hijacked = function(a) {
                a.propagationStopped || c(a);
            }), d) : e.call(a, b, c, d);
        }), "function" == typeof a.onclick && (b = a.onclick, a.addEventListener("click", function(a) {
            b(a);
        }, !1), a.onclick = null));
    }
    function f(a) {
        return ("string" == typeof a || a instanceof String) && (a = a.replace(/^[\\/'"]+|(;\s?})+|[\\/'"]+$/g, "")), 
        a;
    }
    0 === a("head").has(".foundation-mq-small").length && a("head").append('<meta class="foundation-mq-small">'), 
    0 === a("head").has(".foundation-mq-medium").length && a("head").append('<meta class="foundation-mq-medium">'), 
    0 === a("head").has(".foundation-mq-large").length && a("head").append('<meta class="foundation-mq-large">'), 
    0 === a("head").has(".foundation-mq-xlarge").length && a("head").append('<meta class="foundation-mq-xlarge">'), 
    0 === a("head").has(".foundation-mq-xxlarge").length && a("head").append('<meta class="foundation-mq-xxlarge">'), 
    e.prototype.deviceIsAndroid = navigator.userAgent.indexOf("Android") > 0, e.prototype.deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent), 
    e.prototype.deviceIsIOS4 = e.prototype.deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent), 
    e.prototype.deviceIsIOSWithBadTarget = e.prototype.deviceIsIOS && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent), 
    e.prototype.needsClick = function(a) {
        switch (a.nodeName.toLowerCase()) {
          case "button":
          case "select":
          case "textarea":
            if (a.disabled) return !0;
            break;

          case "input":
            if (this.deviceIsIOS && "file" === a.type || a.disabled) return !0;
            break;

          case "label":
          case "video":
            return !0;
        }
        return /\bneedsclick\b/.test(a.className);
    }, e.prototype.needsFocus = function(a) {
        switch (a.nodeName.toLowerCase()) {
          case "textarea":
          case "select":
            return !0;

          case "input":
            switch (a.type) {
              case "button":
              case "checkbox":
              case "file":
              case "image":
              case "radio":
              case "submit":
                return !1;
            }
            return !a.disabled && !a.readOnly;

          default:
            return /\bneedsfocus\b/.test(a.className);
        }
    }, e.prototype.sendClick = function(a, d) {
        var e, f;
        c.activeElement && c.activeElement !== a && c.activeElement.blur(), f = d.changedTouches[0], 
        e = c.createEvent("MouseEvents"), e.initMouseEvent("click", !0, !0, b, 1, f.screenX, f.screenY, f.clientX, f.clientY, !1, !1, !1, !1, 0, null), 
        e.forwardedTouchEvent = !0, a.dispatchEvent(e);
    }, e.prototype.focus = function(a) {
        var b;
        this.deviceIsIOS && a.setSelectionRange ? (b = a.value.length, a.setSelectionRange(b, b)) : a.focus();
    }, e.prototype.updateScrollParent = function(a) {
        var b, c;
        if (b = a.fastClickScrollParent, !b || !b.contains(a)) {
            c = a;
            do {
                if (c.scrollHeight > c.offsetHeight) {
                    b = c, a.fastClickScrollParent = c;
                    break;
                }
                c = c.parentElement;
            } while (c);
        }
        b && (b.fastClickLastScrollTop = b.scrollTop);
    }, e.prototype.getTargetElementFromEventTarget = function(a) {
        return a.nodeType === Node.TEXT_NODE ? a.parentNode : a;
    }, e.prototype.onTouchStart = function(a) {
        var c, d, e;
        if (a.targetTouches.length > 1) return !0;
        if (c = this.getTargetElementFromEventTarget(a.target), d = a.targetTouches[0], 
        this.deviceIsIOS) {
            if (e = b.getSelection(), e.rangeCount && !e.isCollapsed) return !0;
            if (!this.deviceIsIOS4) {
                if (d.identifier === this.lastTouchIdentifier) return a.preventDefault(), !1;
                this.lastTouchIdentifier = d.identifier, this.updateScrollParent(c);
            }
        }
        return this.trackingClick = !0, this.trackingClickStart = a.timeStamp, this.targetElement = c, 
        this.touchStartX = d.pageX, this.touchStartY = d.pageY, a.timeStamp - this.lastClickTime < 200 && a.preventDefault(), 
        !0;
    }, e.prototype.touchHasMoved = function(a) {
        var b = a.changedTouches[0], c = this.touchBoundary;
        return Math.abs(b.pageX - this.touchStartX) > c || Math.abs(b.pageY - this.touchStartY) > c ? !0 : !1;
    }, e.prototype.onTouchMove = function(a) {
        return this.trackingClick ? ((this.targetElement !== this.getTargetElementFromEventTarget(a.target) || this.touchHasMoved(a)) && (this.trackingClick = !1, 
        this.targetElement = null), !0) : !0;
    }, e.prototype.findControl = function(a) {
        return a.control !== d ? a.control : a.htmlFor ? c.getElementById(a.htmlFor) : a.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea");
    }, e.prototype.onTouchEnd = function(a) {
        var d, e, f, g, h, i = this.targetElement;
        if (!this.trackingClick) return !0;
        if (a.timeStamp - this.lastClickTime < 200) return this.cancelNextClick = !0, !0;
        if (this.lastClickTime = a.timeStamp, e = this.trackingClickStart, this.trackingClick = !1, 
        this.trackingClickStart = 0, this.deviceIsIOSWithBadTarget && (h = a.changedTouches[0], 
        i = c.elementFromPoint(h.pageX - b.pageXOffset, h.pageY - b.pageYOffset) || i, i.fastClickScrollParent = this.targetElement.fastClickScrollParent), 
        f = i.tagName.toLowerCase(), "label" === f) {
            if (d = this.findControl(i)) {
                if (this.focus(i), this.deviceIsAndroid) return !1;
                i = d;
            }
        } else if (this.needsFocus(i)) return a.timeStamp - e > 100 || this.deviceIsIOS && b.top !== b && "input" === f ? (this.targetElement = null, 
        !1) : (this.focus(i), this.deviceIsIOS4 && "select" === f || (this.targetElement = null, 
        a.preventDefault()), !1);
        return this.deviceIsIOS && !this.deviceIsIOS4 && (g = i.fastClickScrollParent, g && g.fastClickLastScrollTop !== g.scrollTop) ? !0 : (this.needsClick(i) || (a.preventDefault(), 
        this.sendClick(i, a)), !1);
    }, e.prototype.onTouchCancel = function() {
        this.trackingClick = !1, this.targetElement = null;
    }, e.prototype.onMouse = function(a) {
        return this.targetElement ? a.forwardedTouchEvent ? !0 : a.cancelable ? !this.needsClick(this.targetElement) || this.cancelNextClick ? (a.stopImmediatePropagation ? a.stopImmediatePropagation() : a.propagationStopped = !0, 
        a.stopPropagation(), a.preventDefault(), !1) : !0 : !0 : !0;
    }, e.prototype.onClick = function(a) {
        var b;
        return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, 
        !0) : "submit" === a.target.type && 0 === a.detail ? !0 : (b = this.onMouse(a), 
        b || (this.targetElement = null), b);
    }, e.prototype.destroy = function() {
        var a = this.layer;
        this.deviceIsAndroid && (a.removeEventListener("mouseover", this.onMouse, !0), a.removeEventListener("mousedown", this.onMouse, !0), 
        a.removeEventListener("mouseup", this.onMouse, !0)), a.removeEventListener("click", this.onClick, !0), 
        a.removeEventListener("touchstart", this.onTouchStart, !1), a.removeEventListener("touchmove", this.onTouchMove, !1), 
        a.removeEventListener("touchend", this.onTouchEnd, !1), a.removeEventListener("touchcancel", this.onTouchCancel, !1);
    }, e.notNeeded = function(a) {
        var d;
        if ("undefined" == typeof b.ontouchstart) return !0;
        if (/Chrome\/[0-9]+/.test(navigator.userAgent)) {
            if (!e.prototype.deviceIsAndroid) return !0;
            if (d = c.querySelector("meta[name=viewport]"), d && -1 !== d.content.indexOf("user-scalable=no")) return !0;
        }
        return "none" === a.style.msTouchAction ? !0 : !1;
    }, e.attach = function(a) {
        return new e(a);
    }, "undefined" != typeof define && define.amd ? define(function() {
        return e;
    }) : "undefined" != typeof module && module.exports ? (module.exports = e.attach, 
    module.exports.FastClick = e) : b.FastClick = e, "undefined" != typeof e && e.attach(c.body);
    var g = function(b, d) {
        return "string" == typeof b ? d ? a(d.querySelectorAll(b)) : a(c.querySelectorAll(b)) : a(b, d);
    };
    b.matchMedia = b.matchMedia || function(a) {
        var b, c = a.documentElement, d = c.firstElementChild || c.firstChild, e = a.createElement("body"), f = a.createElement("div");
        return f.id = "mq-test-1", f.style.cssText = "position:absolute;top:-100em", e.style.background = "none", 
        e.appendChild(f), function(a) {
            return f.innerHTML = '&shy;<style media="' + a + '"> #mq-test-1 { width: 42px; }</style>', 
            c.insertBefore(e, d), b = 42 === f.offsetWidth, c.removeChild(e), {
                matches: b,
                media: a
            };
        };
    }(c), function() {
        function a() {
            c && (f(a), jQuery.fx.tick());
        }
        for (var c, d = 0, e = [ "webkit", "moz" ], f = b.requestAnimationFrame, g = b.cancelAnimationFrame; d < e.length && !f; d++) f = b[e[d] + "RequestAnimationFrame"], 
        g = g || b[e[d] + "CancelAnimationFrame"] || b[e[d] + "CancelRequestAnimationFrame"];
        f ? (b.requestAnimationFrame = f, b.cancelAnimationFrame = g, jQuery.fx.timer = function(b) {
            b() && jQuery.timers.push(b) && !c && (c = !0, a());
        }, jQuery.fx.stop = function() {
            c = !1;
        }) : (b.requestAnimationFrame = function(a) {
            var c = new Date().getTime(), e = Math.max(0, 16 - (c - d)), f = b.setTimeout(function() {
                a(c + e);
            }, e);
            return d = c + e, f;
        }, b.cancelAnimationFrame = function(a) {
            clearTimeout(a);
        });
    }(jQuery), b.Foundation = {
        name: "Foundation",
        version: "5.0.0",
        media_queries: {
            small: g(".foundation-mq-small").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            medium: g(".foundation-mq-medium").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            large: g(".foundation-mq-large").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            xlarge: g(".foundation-mq-xlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            xxlarge: g(".foundation-mq-xxlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, "")
        },
        stylesheet: a("<style></style>").appendTo("head")[0].sheet,
        init: function(a, b, c, d, e) {
            var f = [ a, c, d, e ], h = [];
            if (this.rtl = /rtl/i.test(g("html").attr("dir")), this.scope = a || this.scope, 
            b && "string" == typeof b && !/reflow/i.test(b)) this.libs.hasOwnProperty(b) && h.push(this.init_lib(b, f)); else for (var i in this.libs) h.push(this.init_lib(i, b));
            return a;
        },
        init_lib: function(a, b) {
            return this.libs.hasOwnProperty(a) ? (this.patch(this.libs[a]), b && b.hasOwnProperty(a) ? this.libs[a].init.apply(this.libs[a], [ this.scope, b[a] ]) : this.libs[a].init.apply(this.libs[a], b)) : function() {};
        },
        patch: function(a) {
            a.scope = this.scope, a.data_options = this.lib_methods.data_options, a.bindings = this.lib_methods.bindings, 
            a.S = g, a.rtl = this.rtl;
        },
        inherit: function(a, b) {
            for (var c = b.split(" "), d = c.length - 1; d >= 0; d--) this.lib_methods.hasOwnProperty(c[d]) && (this.libs[a.name][c[d]] = this.lib_methods[c[d]]);
        },
        random_str: function(a) {
            var b = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
            a || (a = Math.floor(Math.random() * b.length));
            for (var c = "", d = 0; a > d; d++) c += b[Math.floor(Math.random() * b.length)];
            return c;
        },
        libs: {},
        lib_methods: {
            throttle: function(a, b) {
                var c = null;
                return function() {
                    var d = this, e = arguments;
                    clearTimeout(c), c = setTimeout(function() {
                        a.apply(d, e);
                    }, b);
                };
            },
            data_options: function(b) {
                function c(a) {
                    return !isNaN(a - 0) && null !== a && "" !== a && a !== !1 && a !== !0;
                }
                function d(b) {
                    return "string" == typeof b ? a.trim(b) : b;
                }
                var e, f, g, h, i = {}, j = b.data("options");
                if ("object" == typeof j) return j;
                for (g = (j || ":").split(";"), h = g.length, e = h - 1; e >= 0; e--) f = g[e].split(":"), 
                /true/i.test(f[1]) && (f[1] = !0), /false/i.test(f[1]) && (f[1] = !1), c(f[1]) && (f[1] = parseInt(f[1], 10)), 
                2 === f.length && f[0].length > 0 && (i[d(f[0])] = d(f[1]));
                return i;
            },
            delay: function(a, b) {
                return setTimeout(a, b);
            },
            empty: function(a) {
                if (a.length && a.length > 0) return !1;
                if (a.length && 0 === a.length) return !0;
                for (var b in a) if (hasOwnProperty.call(a, b)) return !1;
                return !0;
            },
            register_media: function(b, c) {
                Foundation.media_queries[b] === d && (a("head").append('<meta class="' + c + '">'), 
                Foundation.media_queries[b] = f(a("." + c).css("font-family")));
            },
            addCustomRule: function(a, b) {
                if (b === d) Foundation.stylesheet.insertRule(a, Foundation.stylesheet.cssRules.length); else {
                    var c = Foundation.media_queries[b];
                    c !== d && Foundation.stylesheet.insertRule("@media " + Foundation.media_queries[b] + "{ " + a + " }");
                }
            },
            loaded: function(a, b) {
                function c() {
                    b(a[0]);
                }
                function d() {
                    if (this.one("load", c), /MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
                        var a = this.attr("src"), b = a.match(/\?/) ? "&" : "?";
                        b += "random=" + new Date().getTime(), this.attr("src", a + b);
                    }
                }
                return a.attr("src") ? (a[0].complete || 4 === a[0].readyState ? c() : d.call(a), 
                void 0) : (c(), void 0);
            },
            bindings: function(b, c) {
                var d = this, e = !g(this).data(this.name + "-init");
                return "string" == typeof b ? this[b].call(this) : (g(this.scope).is("[data-" + this.name + "]") ? (g(this.scope).data(this.name + "-init", a.extend({}, this.settings, c || b, this.data_options(g(this.scope)))), 
                e && this.events(this.scope)) : g("[data-" + this.name + "]", this.scope).each(function() {
                    var e = !g(this).data(d.name + "-init");
                    g(this).data(d.name + "-init", a.extend({}, d.settings, c || b, d.data_options(g(this)))), 
                    e && d.events(this);
                }), void 0);
            }
        }
    }, a.fn.foundation = function() {
        var a = Array.prototype.slice.call(arguments, 0);
        return this.each(function() {
            return Foundation.init.apply(Foundation, [ this ].concat(a)), this;
        });
    };
}(jQuery, this, this.document), $(document).ready(function() {
    $(document).foundation(), $(document).foundation("interchange", {
        named_queries: {
            medium: "only screen and (max-width: 960px)",
            large: "only screen and (min-width: 961px)"
        }
    }, "reflow"), $(document).on("replace", "#menu", function() {
        $(document).foundation();
    });
});