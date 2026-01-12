var aws_library;
(() => {
    var e = {
            260: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            },
            665: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            },
            470: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            },
            969: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            },
            287: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.isMsWindow = void 0;
                var r = ["decrypt", "digest", "encrypt", "exportKey", "generateKey", "importKey", "sign", "verify"];
                t.isMsWindow = function(e) {
                    if (function(e) {
                            return "MSInputMethodContext" in e && "msCrypto" in e
                        }(e) && void 0 !== e.msCrypto.subtle) {
                        var t = e.msCrypto,
                            n = t.getRandomValues,
                            o = t.subtle;
                        return r.map((function(e) {
                            return o[e]
                        })).concat(n).every((function(e) {
                            return "function" == typeof e
                        }))
                    }
                    return !1
                }
            },
            87: (e, t, r) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var n = r(980);
                n.__exportStar(r(260), t), n.__exportStar(r(665), t), n.__exportStar(r(470), t), n.__exportStar(r(969), t), n.__exportStar(r(287), t)
            },
            980: (e, t, r) => {
                "use strict";
                r.r(t), r.d(t, {
                    __assign: () => i,
                    __asyncDelegator: () => v,
                    __asyncGenerator: () => w,
                    __asyncValues: () => S,
                    __await: () => b,
                    __awaiter: () => d,
                    __classPrivateFieldGet: () => A,
                    __classPrivateFieldSet: () => _,
                    __createBinding: () => f,
                    __decorate: () => a,
                    __exportStar: () => p,
                    __extends: () => o,
                    __generator: () => l,
                    __importDefault: () => P,
                    __importStar: () => x,
                    __makeTemplateObject: () => E,
                    __metadata: () => u,
                    __param: () => c,
                    __read: () => g,
                    __rest: () => s,
                    __spread: () => m,
                    __spreadArrays: () => y,
                    __values: () => h
                });
                var n = function(e, t) {
                    return n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                    }, n(e, t)
                };

                function o(e, t) {
                    function r() {
                        this.constructor = e
                    }
                    n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
                }
                var i = function() {
                    return i = Object.assign || function(e) {
                        for (var t, r = 1, n = arguments.length; r < n; r++)
                            for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }, i.apply(this, arguments)
                };

                function s(e, t) {
                    var r = {};
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                        var o = 0;
                        for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
                    }
                    return r
                }

                function a(e, t, r, n) {
                    var o, i = arguments.length,
                        s = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, n);
                    else
                        for (var a = e.length - 1; a >= 0; a--)(o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
                    return i > 3 && s && Object.defineProperty(t, r, s), s
                }

                function c(e, t) {
                    return function(r, n) {
                        t(r, n, e)
                    }
                }

                function u(e, t) {
                    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
                }

                function d(e, t, r, n) {
                    return new(r || (r = Promise))((function(o, i) {
                        function s(e) {
                            try {
                                c(n.next(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function a(e) {
                            try {
                                c(n.throw(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function c(e) {
                            var t;
                            e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                                e(t)
                            }))).then(s, a)
                        }
                        c((n = n.apply(e, t || [])).next())
                    }))
                }

                function l(e, t) {
                    var r, n, o, i, s = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function a(i) {
                        return function(a) {
                            return function(i) {
                                if (r) throw new TypeError("Generator is already executing.");
                                for (; s;) try {
                                    if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                    switch (n = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            return s.label++, {
                                                value: i[1],
                                                done: !1
                                            };
                                        case 5:
                                            s.label++, n = i[1], i = [0];
                                            continue;
                                        case 7:
                                            i = s.ops.pop(), s.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = s.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                s.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && s.label < o[1]) {
                                                s.label = o[1], o = i;
                                                break
                                            }
                                            if (o && s.label < o[2]) {
                                                s.label = o[2], s.ops.push(i);
                                                break
                                            }
                                            o[2] && s.ops.pop(), s.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, s)
                                } catch (e) {
                                    i = [6, e], n = 0
                                } finally {
                                    r = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, a])
                        }
                    }
                }

                function f(e, t, r, n) {
                    void 0 === n && (n = r), e[n] = t[r]
                }

                function p(e, t) {
                    for (var r in e) "default" === r || t.hasOwnProperty(r) || (t[r] = e[r])
                }

                function h(e) {
                    var t = "function" == typeof Symbol && Symbol.iterator,
                        r = t && e[t],
                        n = 0;
                    if (r) return r.call(e);
                    if (e && "number" == typeof e.length) return {
                        next: function() {
                            return e && n >= e.length && (e = void 0), {
                                value: e && e[n++],
                                done: !e
                            }
                        }
                    };
                    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
                }

                function g(e, t) {
                    var r = "function" == typeof Symbol && e[Symbol.iterator];
                    if (!r) return e;
                    var n, o, i = r.call(e),
                        s = [];
                    try {
                        for (;
                            (void 0 === t || t-- > 0) && !(n = i.next()).done;) s.push(n.value)
                    } catch (e) {
                        o = {
                            error: e
                        }
                    } finally {
                        try {
                            n && !n.done && (r = i.return) && r.call(i)
                        } finally {
                            if (o) throw o.error
                        }
                    }
                    return s
                }

                function m() {
                    for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(g(arguments[t]));
                    return e
                }

                function y() {
                    for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
                    var n = Array(e),
                        o = 0;
                    for (t = 0; t < r; t++)
                        for (var i = arguments[t], s = 0, a = i.length; s < a; s++, o++) n[o] = i[s];
                    return n
                }

                function b(e) {
                    return this instanceof b ? (this.v = e, this) : new b(e)
                }

                function w(e, t, r) {
                    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                    var n, o = r.apply(e, t || []),
                        i = [];
                    return n = {}, s("next"), s("throw"), s("return"), n[Symbol.asyncIterator] = function() {
                        return this
                    }, n;

                    function s(e) {
                        o[e] && (n[e] = function(t) {
                            return new Promise((function(r, n) {
                                i.push([e, t, r, n]) > 1 || a(e, t)
                            }))
                        })
                    }

                    function a(e, t) {
                        try {
                            (r = o[e](t)).value instanceof b ? Promise.resolve(r.value.v).then(c, u) : d(i[0][2], r)
                        } catch (e) {
                            d(i[0][3], e)
                        }
                        var r
                    }

                    function c(e) {
                        a("next", e)
                    }

                    function u(e) {
                        a("throw", e)
                    }

                    function d(e, t) {
                        e(t), i.shift(), i.length && a(i[0][0], i[0][1])
                    }
                }

                function v(e) {
                    var t, r;
                    return t = {}, n("next"), n("throw", (function(e) {
                        throw e
                    })), n("return"), t[Symbol.iterator] = function() {
                        return this
                    }, t;

                    function n(n, o) {
                        t[n] = e[n] ? function(t) {
                            return (r = !r) ? {
                                value: b(e[n](t)),
                                done: "return" === n
                            } : o ? o(t) : t
                        } : o
                    }
                }

                function S(e) {
                    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                    var t, r = e[Symbol.asyncIterator];
                    return r ? r.call(e) : (e = h(e), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
                        return this
                    }, t);

                    function n(r) {
                        t[r] = e[r] && function(t) {
                            return new Promise((function(n, o) {
                                (function(e, t, r, n) {
                                    Promise.resolve(n).then((function(t) {
                                        e({
                                            value: t,
                                            done: r
                                        })
                                    }), t)
                                })(n, o, (t = e[r](t)).done, t.value)
                            }))
                        }
                    }
                }

                function E(e, t) {
                    return Object.defineProperty ? Object.defineProperty(e, "raw", {
                        value: t
                    }) : e.raw = t, e
                }

                function x(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t.default = e, t
                }

                function P(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }

                function A(e, t) {
                    if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
                    return t.get(e)
                }

                function _(e, t, r) {
                    if (!t.has(e)) throw new TypeError("attempted to set private field on non-instance");
                    return t.set(e, r), r
                }
            },
            333: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.EMPTY_DATA_SHA_256 = t.SHA_256_HMAC_ALGO = t.SHA_256_HASH = void 0, t.SHA_256_HASH = {
                    name: "SHA-256"
                }, t.SHA_256_HMAC_ALGO = {
                    name: "HMAC",
                    hash: t.SHA_256_HASH
                }, t.EMPTY_DATA_SHA_256 = new Uint8Array([227, 176, 196, 66, 152, 252, 28, 20, 154, 251, 244, 200, 153, 111, 185, 36, 39, 174, 65, 228, 100, 155, 147, 76, 164, 149, 153, 27, 120, 82, 184, 85])
            },
            769: (e, t, r) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.Sha256 = void 0;
                var n = r(479),
                    o = r(889),
                    i = r(938),
                    s = r(21),
                    a = r(87),
                    c = r(495),
                    u = r(658),
                    d = function() {
                        function e(e) {
                            (0, s.supportsWebCrypto)((0, c.locateWindow)()) ? this.hash = new o.Sha256(e): (0, a.isMsWindow)((0, c.locateWindow)()) ? this.hash = new n.Sha256(e) : this.hash = new i.Sha256(e)
                        }
                        return e.prototype.update = function(e, t) {
                            this.hash.update((0, u.convertToBuffer)(e))
                        }, e.prototype.digest = function() {
                            return this.hash.digest()
                        }, e.prototype.reset = function() {
                            this.hash.reset()
                        }, e
                    }();
                t.Sha256 = d
            },
            479: (e, t, r) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.Sha256 = void 0;
                var n = r(36),
                    o = r(333),
                    i = r(84),
                    s = r(495),
                    a = function() {
                        function e(e) {
                            this.secret = e, this.reset()
                        }
                        return e.prototype.update = function(e) {
                            var t = this;
                            (0, n.isEmptyData)(e) || (this.operation = this.operation.then((function(r) {
                                return r.onerror = function() {
                                    t.operation = Promise.reject(new Error("Error encountered updating hash"))
                                }, r.process(c(e)), r
                            })), this.operation.catch((function() {})))
                        }, e.prototype.digest = function() {
                            return this.operation.then((function(e) {
                                return new Promise((function(t, r) {
                                    e.onerror = function() {
                                        r(new Error("Error encountered finalizing hash"))
                                    }, e.oncomplete = function() {
                                        e.result && t(new Uint8Array(e.result)), r(new Error("Error encountered finalizing hash"))
                                    }, e.finish()
                                }))
                            }))
                        }, e.prototype.reset = function() {
                            var e;
                            this.secret ? (this.operation = (e = this.secret, new Promise((function(t, r) {
                                var n = (0, s.locateWindow)().msCrypto.subtle.importKey("raw", c(e), o.SHA_256_HMAC_ALGO, !1, ["sign"]);
                                n.oncomplete = function() {
                                    n.result && t(n.result), r(new Error("ImportKey completed without importing key."))
                                }, n.onerror = function() {
                                    r(new Error("ImportKey failed to import key."))
                                }
                            }))).then((function(e) {
                                return (0, s.locateWindow)().msCrypto.subtle.sign(o.SHA_256_HMAC_ALGO, e)
                            })), this.operation.catch((function() {}))) : this.operation = Promise.resolve((0, s.locateWindow)().msCrypto.subtle.digest("SHA-256"))
                        }, e
                    }();

                function c(e) {
                    return "string" == typeof e ? (0, i.fromUtf8)(e) : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(e)
                }
                t.Sha256 = a
            },
            643: (e, t, r) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.WebCryptoSha256 = t.Ie11Sha256 = void 0, r(789).__exportStar(r(769), t);
                var n = r(479);
                Object.defineProperty(t, "Ie11Sha256", {
                    enumerable: !0,
                    get: function() {
                        return n.Sha256
                    }
                });
                var o = r(889);
                Object.defineProperty(t, "WebCryptoSha256", {
                    enumerable: !0,
                    get: function() {
                        return o.Sha256
                    }
                })
            },
            36: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.isEmptyData = void 0, t.isEmptyData = function(e) {
                    return "string" == typeof e ? 0 === e.length : 0 === e.byteLength
                }
            },
            889: (e, t, r) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.Sha256 = void 0;
                var n = r(658),
                    o = r(333),
                    i = r(495),
                    s = function() {
                        function e(e) {
                            this.toHash = new Uint8Array(0), this.secret = e, this.reset()
                        }
                        return e.prototype.update = function(e) {
                            if (!(0, n.isEmptyData)(e)) {
                                var t = (0, n.convertToBuffer)(e),
                                    r = new Uint8Array(this.toHash.byteLength + t.byteLength);
                                r.set(this.toHash, 0), r.set(t, this.toHash.byteLength), this.toHash = r
                            }
                        }, e.prototype.digest = function() {
                            var e = this;
                            return this.key ? this.key.then((function(t) {
                                return (0, i.locateWindow)().crypto.subtle.sign(o.SHA_256_HMAC_ALGO, t, e.toHash).then((function(e) {
                                    return new Uint8Array(e)
                                }))
                            })) : (0, n.isEmptyData)(this.toHash) ? Promise.resolve(o.EMPTY_DATA_SHA_256) : Promise.resolve().then((function() {
                                return (0, i.locateWindow)().crypto.subtle.digest(o.SHA_256_HASH, e.toHash)
                            })).then((function(e) {
                                return Promise.resolve(new Uint8Array(e))
                            }))
                        }, e.prototype.reset = function() {
                            var e = this;
                            this.toHash = new Uint8Array(0), this.secret && void 0 !== this.secret && (this.key = new Promise((function(t, r) {
                                (0, i.locateWindow)().crypto.subtle.importKey("raw", (0, n.convertToBuffer)(e.secret), o.SHA_256_HMAC_ALGO, !1, ["sign"]).then(t, r)
                            })), this.key.catch((function() {})))
                        }, e
                    }();
                t.Sha256 = s
            },
            789: (e, t, r) => {
                "use strict";
                r.r(t), r.d(t, {
                    __assign: () => i,
                    __asyncDelegator: () => v,
                    __asyncGenerator: () => w,
                    __asyncValues: () => S,
                    __await: () => b,
                    __awaiter: () => d,
                    __classPrivateFieldGet: () => A,
                    __classPrivateFieldSet: () => _,
                    __createBinding: () => f,
                    __decorate: () => a,
                    __exportStar: () => p,
                    __extends: () => o,
                    __generator: () => l,
                    __importDefault: () => P,
                    __importStar: () => x,
                    __makeTemplateObject: () => E,
                    __metadata: () => u,
                    __param: () => c,
                    __read: () => g,
                    __rest: () => s,
                    __spread: () => m,
                    __spreadArrays: () => y,
                    __values: () => h
                });
                var n = function(e, t) {
                    return n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                    }, n(e, t)
                };

                function o(e, t) {
                    function r() {
                        this.constructor = e
                    }
                    n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
                }
                var i = function() {
                    return i = Object.assign || function(e) {
                        for (var t, r = 1, n = arguments.length; r < n; r++)
                            for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }, i.apply(this, arguments)
                };

                function s(e, t) {
                    var r = {};
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                        var o = 0;
                        for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
                    }
                    return r
                }

                function a(e, t, r, n) {
                    var o, i = arguments.length,
                        s = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, n);
                    else
                        for (var a = e.length - 1; a >= 0; a--)(o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
                    return i > 3 && s && Object.defineProperty(t, r, s), s
                }

                function c(e, t) {
                    return function(r, n) {
                        t(r, n, e)
                    }
                }

                function u(e, t) {
                    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
                }

                function d(e, t, r, n) {
                    return new(r || (r = Promise))((function(o, i) {
                        function s(e) {
                            try {
                                c(n.next(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function a(e) {
                            try {
                                c(n.throw(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function c(e) {
                            var t;
                            e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                                e(t)
                            }))).then(s, a)
                        }
                        c((n = n.apply(e, t || [])).next())
                    }))
                }

                function l(e, t) {
                    var r, n, o, i, s = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function a(i) {
                        return function(a) {
                            return function(i) {
                                if (r) throw new TypeError("Generator is already executing.");
                                for (; s;) try {
                                    if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                    switch (n = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            return s.label++, {
                                                value: i[1],
                                                done: !1
                                            };
                                        case 5:
                                            s.label++, n = i[1], i = [0];
                                            continue;
                                        case 7:
                                            i = s.ops.pop(), s.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = s.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                s.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && s.label < o[1]) {
                                                s.label = o[1], o = i;
                                                break
                                            }
                                            if (o && s.label < o[2]) {
                                                s.label = o[2], s.ops.push(i);
                                                break
                                            }
                                            o[2] && s.ops.pop(), s.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, s)
                                } catch (e) {
                                    i = [6, e], n = 0
                                } finally {
                                    r = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, a])
                        }
                    }
                }

                function f(e, t, r, n) {
                    void 0 === n && (n = r), e[n] = t[r]
                }

                function p(e, t) {
                    for (var r in e) "default" === r || t.hasOwnProperty(r) || (t[r] = e[r])
                }

                function h(e) {
                    var t = "function" == typeof Symbol && Symbol.iterator,
                        r = t && e[t],
                        n = 0;
                    if (r) return r.call(e);
                    if (e && "number" == typeof e.length) return {
                        next: function() {
                            return e && n >= e.length && (e = void 0), {
                                value: e && e[n++],
                                done: !e
                            }
                        }
                    };
                    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
                }

                function g(e, t) {
                    var r = "function" == typeof Symbol && e[Symbol.iterator];
                    if (!r) return e;
                    var n, o, i = r.call(e),
                        s = [];
                    try {
                        for (;
                            (void 0 === t || t-- > 0) && !(n = i.next()).done;) s.push(n.value)
                    } catch (e) {
                        o = {
                            error: e
                        }
                    } finally {
                        try {
                            n && !n.done && (r = i.return) && r.call(i)
                        } finally {
                            if (o) throw o.error
                        }
                    }
                    return s
                }

                function m() {
                    for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(g(arguments[t]));
                    return e
                }

                function y() {
                    for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
                    var n = Array(e),
                        o = 0;
                    for (t = 0; t < r; t++)
                        for (var i = arguments[t], s = 0, a = i.length; s < a; s++, o++) n[o] = i[s];
                    return n
                }

                function b(e) {
                    return this instanceof b ? (this.v = e, this) : new b(e)
                }

                function w(e, t, r) {
                    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                    var n, o = r.apply(e, t || []),
                        i = [];
                    return n = {}, s("next"), s("throw"), s("return"), n[Symbol.asyncIterator] = function() {
                        return this
                    }, n;

                    function s(e) {
                        o[e] && (n[e] = function(t) {
                            return new Promise((function(r, n) {
                                i.push([e, t, r, n]) > 1 || a(e, t)
                            }))
                        })
                    }

                    function a(e, t) {
                        try {
                            (r = o[e](t)).value instanceof b ? Promise.resolve(r.value.v).then(c, u) : d(i[0][2], r)
                        } catch (e) {
                            d(i[0][3], e)
                        }
                        var r
                    }

                    function c(e) {
                        a("next", e)
                    }

                    function u(e) {
                        a("throw", e)
                    }

                    function d(e, t) {
                        e(t), i.shift(), i.length && a(i[0][0], i[0][1])
                    }
                }

                function v(e) {
                    var t, r;
                    return t = {}, n("next"), n("throw", (function(e) {
                        throw e
                    })), n("return"), t[Symbol.iterator] = function() {
                        return this
                    }, t;

                    function n(n, o) {
                        t[n] = e[n] ? function(t) {
                            return (r = !r) ? {
                                value: b(e[n](t)),
                                done: "return" === n
                            } : o ? o(t) : t
                        } : o
                    }
                }

                function S(e) {
                    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                    var t, r = e[Symbol.asyncIterator];
                    return r ? r.call(e) : (e = h(e), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
                        return this
                    }, t);

                    function n(r) {
                        t[r] = e[r] && function(t) {
                            return new Promise((function(n, o) {
                                (function(e, t, r, n) {
                                    Promise.resolve(n).then((function(t) {
                                        e({
                                            value: t,
                                            done: r
                                        })
                                    }), t)
                                })(n, o, (t = e[r](t)).done, t.value)
                            }))
                        }
                    }
                }

                function E(e, t) {
                    return Object.defineProperty ? Object.defineProperty(e, "raw", {
                        value: t
                    }) : e.raw = t, e
                }

                function x(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t.default = e, t
                }

                function P(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }

                function A(e, t) {
                    if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
                    return t.get(e)
                }

                function _(e, t, r) {
                    if (!t.has(e)) throw new TypeError("attempted to set private field on non-instance");
                    return t.set(e, r), r
                }
            },
            914: (e, t, r) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.RawSha256 = void 0;
                var n = r(945),
                    o = function() {
                        function e() {
                            this.state = Int32Array.from(n.INIT), this.temp = new Int32Array(64), this.buffer = new Uint8Array(64), this.bufferLength = 0, this.bytesHashed = 0, this.finished = !1
                        }
                        return e.prototype.update = function(e) {
                            if (this.finished) throw new Error("Attempted to update an already finished hash.");
                            var t = 0,
                                r = e.byteLength;
                            if (this.bytesHashed += r, 8 * this.bytesHashed > n.MAX_HASHABLE_LENGTH) throw new Error("Cannot hash more than 2^53 - 1 bits");
                            for (; r > 0;) this.buffer[this.bufferLength++] = e[t++], r--, this.bufferLength === n.BLOCK_SIZE && (this.hashBuffer(), this.bufferLength = 0)
                        }, e.prototype.digest = function() {
                            if (!this.finished) {
                                var e = 8 * this.bytesHashed,
                                    t = new DataView(this.buffer.buffer, this.buffer.byteOffset, this.buffer.byteLength),
                                    r = this.bufferLength;
                                if (t.setUint8(this.bufferLength++, 128), r % n.BLOCK_SIZE >= n.BLOCK_SIZE - 8) {
                                    for (var o = this.bufferLength; o < n.BLOCK_SIZE; o++) t.setUint8(o, 0);
                                    this.hashBuffer(), this.bufferLength = 0
                                }
                                for (o = this.bufferLength; o < n.BLOCK_SIZE - 8; o++) t.setUint8(o, 0);
                                t.setUint32(n.BLOCK_SIZE - 8, Math.floor(e / 4294967296), !0), t.setUint32(n.BLOCK_SIZE - 4, e), this.hashBuffer(), this.finished = !0
                            }
                            var i = new Uint8Array(n.DIGEST_LENGTH);
                            for (o = 0; o < 8; o++) i[4 * o] = this.state[o] >>> 24 & 255, i[4 * o + 1] = this.state[o] >>> 16 & 255, i[4 * o + 2] = this.state[o] >>> 8 & 255, i[4 * o + 3] = this.state[o] >>> 0 & 255;
                            return i
                        }, e.prototype.hashBuffer = function() {
                            for (var e = this.buffer, t = this.state, r = t[0], o = t[1], i = t[2], s = t[3], a = t[4], c = t[5], u = t[6], d = t[7], l = 0; l < n.BLOCK_SIZE; l++) {
                                if (l < 16) this.temp[l] = (255 & e[4 * l]) << 24 | (255 & e[4 * l + 1]) << 16 | (255 & e[4 * l + 2]) << 8 | 255 & e[4 * l + 3];
                                else {
                                    var f = this.temp[l - 2],
                                        p = (f >>> 17 | f << 15) ^ (f >>> 19 | f << 13) ^ f >>> 10,
                                        h = ((f = this.temp[l - 15]) >>> 7 | f << 25) ^ (f >>> 18 | f << 14) ^ f >>> 3;
                                    this.temp[l] = (p + this.temp[l - 7] | 0) + (h + this.temp[l - 16] | 0)
                                }
                                var g = (((a >>> 6 | a << 26) ^ (a >>> 11 | a << 21) ^ (a >>> 25 | a << 7)) + (a & c ^ ~a & u) | 0) + (d + (n.KEY[l] + this.temp[l] | 0) | 0) | 0,
                                    m = ((r >>> 2 | r << 30) ^ (r >>> 13 | r << 19) ^ (r >>> 22 | r << 10)) + (r & o ^ r & i ^ o & i) | 0;
                                d = u, u = c, c = a, a = s + g | 0, s = i, i = o, o = r, r = g + m | 0
                            }
                            t[0] += r, t[1] += o, t[2] += i, t[3] += s, t[4] += a, t[5] += c, t[6] += u, t[7] += d
                        }, e
                    }();
                t.RawSha256 = o
            },
            945: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.MAX_HASHABLE_LENGTH = t.INIT = t.KEY = t.DIGEST_LENGTH = t.BLOCK_SIZE = void 0, t.BLOCK_SIZE = 64, t.DIGEST_LENGTH = 32, t.KEY = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2025104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]), t.INIT = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], t.MAX_HASHABLE_LENGTH = Math.pow(2, 53) - 1
            },
            938: (e, t, r) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), r(541).__exportStar(r(430), t)
            },
            430: (e, t, r) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.Sha256 = void 0;
                var n = r(541),
                    o = r(945),
                    i = r(914),
                    s = r(658),
                    a = function() {
                        function e(e) {
                            this.secret = e, this.hash = new i.RawSha256, this.reset()
                        }
                        return e.prototype.update = function(e) {
                            if (!(0, s.isEmptyData)(e) && !this.error) try {
                                this.hash.update((0, s.convertToBuffer)(e))
                            } catch (e) {
                                this.error = e
                            }
                        }, e.prototype.digestSync = function() {
                            if (this.error) throw this.error;
                            return this.outer ? (this.outer.finished || this.outer.update(this.hash.digest()), this.outer.digest()) : this.hash.digest()
                        }, e.prototype.digest = function() {
                            return n.__awaiter(this, void 0, void 0, (function() {
                                return n.__generator(this, (function(e) {
                                    return [2, this.digestSync()]
                                }))
                            }))
                        }, e.prototype.reset = function() {
                            if (this.hash = new i.RawSha256, this.secret) {
                                this.outer = new i.RawSha256;
                                var e = function(e) {
                                        var t = (0, s.convertToBuffer)(e);
                                        if (t.byteLength > o.BLOCK_SIZE) {
                                            var r = new i.RawSha256;
                                            r.update(t), t = r.digest()
                                        }
                                        var n = new Uint8Array(o.BLOCK_SIZE);
                                        return n.set(t), n
                                    }(this.secret),
                                    t = new Uint8Array(o.BLOCK_SIZE);
                                t.set(e);
                                for (var r = 0; r < o.BLOCK_SIZE; r++) e[r] ^= 54, t[r] ^= 92;
                                this.hash.update(e), this.outer.update(t);
                                for (r = 0; r < e.byteLength; r++) e[r] = 0
                            }
                        }, e
                    }();
                t.Sha256 = a
            },
            541: (e, t, r) => {
                "use strict";
                r.r(t), r.d(t, {
                    __assign: () => i,
                    __asyncDelegator: () => v,
                    __asyncGenerator: () => w,
                    __asyncValues: () => S,
                    __await: () => b,
                    __awaiter: () => d,
                    __classPrivateFieldGet: () => A,
                    __classPrivateFieldSet: () => _,
                    __createBinding: () => f,
                    __decorate: () => a,
                    __exportStar: () => p,
                    __extends: () => o,
                    __generator: () => l,
                    __importDefault: () => P,
                    __importStar: () => x,
                    __makeTemplateObject: () => E,
                    __metadata: () => u,
                    __param: () => c,
                    __read: () => g,
                    __rest: () => s,
                    __spread: () => m,
                    __spreadArrays: () => y,
                    __values: () => h
                });
                var n = function(e, t) {
                    return n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                    }, n(e, t)
                };

                function o(e, t) {
                    function r() {
                        this.constructor = e
                    }
                    n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
                }
                var i = function() {
                    return i = Object.assign || function(e) {
                        for (var t, r = 1, n = arguments.length; r < n; r++)
                            for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }, i.apply(this, arguments)
                };

                function s(e, t) {
                    var r = {};
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                        var o = 0;
                        for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
                    }
                    return r
                }

                function a(e, t, r, n) {
                    var o, i = arguments.length,
                        s = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, n);
                    else
                        for (var a = e.length - 1; a >= 0; a--)(o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
                    return i > 3 && s && Object.defineProperty(t, r, s), s
                }

                function c(e, t) {
                    return function(r, n) {
                        t(r, n, e)
                    }
                }

                function u(e, t) {
                    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
                }

                function d(e, t, r, n) {
                    return new(r || (r = Promise))((function(o, i) {
                        function s(e) {
                            try {
                                c(n.next(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function a(e) {
                            try {
                                c(n.throw(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function c(e) {
                            var t;
                            e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                                e(t)
                            }))).then(s, a)
                        }
                        c((n = n.apply(e, t || [])).next())
                    }))
                }

                function l(e, t) {
                    var r, n, o, i, s = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function a(i) {
                        return function(a) {
                            return function(i) {
                                if (r) throw new TypeError("Generator is already executing.");
                                for (; s;) try {
                                    if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                    switch (n = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            return s.label++, {
                                                value: i[1],
                                                done: !1
                                            };
                                        case 5:
                                            s.label++, n = i[1], i = [0];
                                            continue;
                                        case 7:
                                            i = s.ops.pop(), s.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = s.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                s.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && s.label < o[1]) {
                                                s.label = o[1], o = i;
                                                break
                                            }
                                            if (o && s.label < o[2]) {
                                                s.label = o[2], s.ops.push(i);
                                                break
                                            }
                                            o[2] && s.ops.pop(), s.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, s)
                                } catch (e) {
                                    i = [6, e], n = 0
                                } finally {
                                    r = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, a])
                        }
                    }
                }

                function f(e, t, r, n) {
                    void 0 === n && (n = r), e[n] = t[r]
                }

                function p(e, t) {
                    for (var r in e) "default" === r || t.hasOwnProperty(r) || (t[r] = e[r])
                }

                function h(e) {
                    var t = "function" == typeof Symbol && Symbol.iterator,
                        r = t && e[t],
                        n = 0;
                    if (r) return r.call(e);
                    if (e && "number" == typeof e.length) return {
                        next: function() {
                            return e && n >= e.length && (e = void 0), {
                                value: e && e[n++],
                                done: !e
                            }
                        }
                    };
                    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
                }

                function g(e, t) {
                    var r = "function" == typeof Symbol && e[Symbol.iterator];
                    if (!r) return e;
                    var n, o, i = r.call(e),
                        s = [];
                    try {
                        for (;
                            (void 0 === t || t-- > 0) && !(n = i.next()).done;) s.push(n.value)
                    } catch (e) {
                        o = {
                            error: e
                        }
                    } finally {
                        try {
                            n && !n.done && (r = i.return) && r.call(i)
                        } finally {
                            if (o) throw o.error
                        }
                    }
                    return s
                }

                function m() {
                    for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(g(arguments[t]));
                    return e
                }

                function y() {
                    for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
                    var n = Array(e),
                        o = 0;
                    for (t = 0; t < r; t++)
                        for (var i = arguments[t], s = 0, a = i.length; s < a; s++, o++) n[o] = i[s];
                    return n
                }

                function b(e) {
                    return this instanceof b ? (this.v = e, this) : new b(e)
                }

                function w(e, t, r) {
                    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                    var n, o = r.apply(e, t || []),
                        i = [];
                    return n = {}, s("next"), s("throw"), s("return"), n[Symbol.asyncIterator] = function() {
                        return this
                    }, n;

                    function s(e) {
                        o[e] && (n[e] = function(t) {
                            return new Promise((function(r, n) {
                                i.push([e, t, r, n]) > 1 || a(e, t)
                            }))
                        })
                    }

                    function a(e, t) {
                        try {
                            (r = o[e](t)).value instanceof b ? Promise.resolve(r.value.v).then(c, u) : d(i[0][2], r)
                        } catch (e) {
                            d(i[0][3], e)
                        }
                        var r
                    }

                    function c(e) {
                        a("next", e)
                    }

                    function u(e) {
                        a("throw", e)
                    }

                    function d(e, t) {
                        e(t), i.shift(), i.length && a(i[0][0], i[0][1])
                    }
                }

                function v(e) {
                    var t, r;
                    return t = {}, n("next"), n("throw", (function(e) {
                        throw e
                    })), n("return"), t[Symbol.iterator] = function() {
                        return this
                    }, t;

                    function n(n, o) {
                        t[n] = e[n] ? function(t) {
                            return (r = !r) ? {
                                value: b(e[n](t)),
                                done: "return" === n
                            } : o ? o(t) : t
                        } : o
                    }
                }

                function S(e) {
                    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                    var t, r = e[Symbol.asyncIterator];
                    return r ? r.call(e) : (e = h(e), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
                        return this
                    }, t);

                    function n(r) {
                        t[r] = e[r] && function(t) {
                            return new Promise((function(n, o) {
                                (function(e, t, r, n) {
                                    Promise.resolve(n).then((function(t) {
                                        e({
                                            value: t,
                                            done: r
                                        })
                                    }), t)
                                })(n, o, (t = e[r](t)).done, t.value)
                            }))
                        }
                    }
                }

                function E(e, t) {
                    return Object.defineProperty ? Object.defineProperty(e, "raw", {
                        value: t
                    }) : e.raw = t, e
                }

                function x(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t.default = e, t
                }

                function P(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }

                function A(e, t) {
                    if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
                    return t.get(e)
                }

                function _(e, t, r) {
                    if (!t.has(e)) throw new TypeError("attempted to set private field on non-instance");
                    return t.set(e, r), r
                }
            },
            21: (e, t, r) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), r(840).__exportStar(r(787), t)
            },
            787: (e, t, r) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.supportsZeroByteGCM = t.supportsSubtleCrypto = t.supportsSecureRandom = t.supportsWebCrypto = void 0;
                var n = r(840),
                    o = ["decrypt", "digest", "encrypt", "exportKey", "generateKey", "importKey", "sign", "verify"];

                function i(e) {
                    return "object" == typeof e && "object" == typeof e.crypto && "function" == typeof e.crypto.getRandomValues
                }

                function s(e) {
                    return e && o.every((function(t) {
                        return "function" == typeof e[t]
                    }))
                }
                t.supportsWebCrypto = function(e) {
                    return !(!i(e) || "object" != typeof e.crypto.subtle) && s(e.crypto.subtle)
                }, t.supportsSecureRandom = i, t.supportsSubtleCrypto = s, t.supportsZeroByteGCM = function(e) {
                    return n.__awaiter(this, void 0, void 0, (function() {
                        var t;
                        return n.__generator(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    if (!s(e)) return [2, !1];
                                    r.label = 1;
                                case 1:
                                    return r.trys.push([1, 4, , 5]), [4, e.generateKey({
                                        name: "AES-GCM",
                                        length: 128
                                    }, !1, ["encrypt"])];
                                case 2:
                                    return t = r.sent(), [4, e.encrypt({
                                        name: "AES-GCM",
                                        iv: new Uint8Array(Array(12)),
                                        additionalData: new Uint8Array(Array(16)),
                                        tagLength: 128
                                    }, t, new Uint8Array(0))];
                                case 3:
                                    return [2, 16 === r.sent().byteLength];
                                case 4:
                                    return r.sent(), [2, !1];
                                case 5:
                                    return [2]
                            }
                        }))
                    }))
                }
            },
            840: (e, t, r) => {
                "use strict";
                r.r(t), r.d(t, {
                    __assign: () => i,
                    __asyncDelegator: () => v,
                    __asyncGenerator: () => w,
                    __asyncValues: () => S,
                    __await: () => b,
                    __awaiter: () => d,
                    __classPrivateFieldGet: () => A,
                    __classPrivateFieldSet: () => _,
                    __createBinding: () => f,
                    __decorate: () => a,
                    __exportStar: () => p,
                    __extends: () => o,
                    __generator: () => l,
                    __importDefault: () => P,
                    __importStar: () => x,
                    __makeTemplateObject: () => E,
                    __metadata: () => u,
                    __param: () => c,
                    __read: () => g,
                    __rest: () => s,
                    __spread: () => m,
                    __spreadArrays: () => y,
                    __values: () => h
                });
                var n = function(e, t) {
                    return n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                    }, n(e, t)
                };

                function o(e, t) {
                    function r() {
                        this.constructor = e
                    }
                    n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
                }
                var i = function() {
                    return i = Object.assign || function(e) {
                        for (var t, r = 1, n = arguments.length; r < n; r++)
                            for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }, i.apply(this, arguments)
                };

                function s(e, t) {
                    var r = {};
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                        var o = 0;
                        for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
                    }
                    return r
                }

                function a(e, t, r, n) {
                    var o, i = arguments.length,
                        s = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, n);
                    else
                        for (var a = e.length - 1; a >= 0; a--)(o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
                    return i > 3 && s && Object.defineProperty(t, r, s), s
                }

                function c(e, t) {
                    return function(r, n) {
                        t(r, n, e)
                    }
                }

                function u(e, t) {
                    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
                }

                function d(e, t, r, n) {
                    return new(r || (r = Promise))((function(o, i) {
                        function s(e) {
                            try {
                                c(n.next(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function a(e) {
                            try {
                                c(n.throw(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function c(e) {
                            var t;
                            e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                                e(t)
                            }))).then(s, a)
                        }
                        c((n = n.apply(e, t || [])).next())
                    }))
                }

                function l(e, t) {
                    var r, n, o, i, s = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function a(i) {
                        return function(a) {
                            return function(i) {
                                if (r) throw new TypeError("Generator is already executing.");
                                for (; s;) try {
                                    if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                    switch (n = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            return s.label++, {
                                                value: i[1],
                                                done: !1
                                            };
                                        case 5:
                                            s.label++, n = i[1], i = [0];
                                            continue;
                                        case 7:
                                            i = s.ops.pop(), s.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = s.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                s.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && s.label < o[1]) {
                                                s.label = o[1], o = i;
                                                break
                                            }
                                            if (o && s.label < o[2]) {
                                                s.label = o[2], s.ops.push(i);
                                                break
                                            }
                                            o[2] && s.ops.pop(), s.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, s)
                                } catch (e) {
                                    i = [6, e], n = 0
                                } finally {
                                    r = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, a])
                        }
                    }
                }

                function f(e, t, r, n) {
                    void 0 === n && (n = r), e[n] = t[r]
                }

                function p(e, t) {
                    for (var r in e) "default" === r || t.hasOwnProperty(r) || (t[r] = e[r])
                }

                function h(e) {
                    var t = "function" == typeof Symbol && Symbol.iterator,
                        r = t && e[t],
                        n = 0;
                    if (r) return r.call(e);
                    if (e && "number" == typeof e.length) return {
                        next: function() {
                            return e && n >= e.length && (e = void 0), {
                                value: e && e[n++],
                                done: !e
                            }
                        }
                    };
                    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
                }

                function g(e, t) {
                    var r = "function" == typeof Symbol && e[Symbol.iterator];
                    if (!r) return e;
                    var n, o, i = r.call(e),
                        s = [];
                    try {
                        for (;
                            (void 0 === t || t-- > 0) && !(n = i.next()).done;) s.push(n.value)
                    } catch (e) {
                        o = {
                            error: e
                        }
                    } finally {
                        try {
                            n && !n.done && (r = i.return) && r.call(i)
                        } finally {
                            if (o) throw o.error
                        }
                    }
                    return s
                }

                function m() {
                    for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(g(arguments[t]));
                    return e
                }

                function y() {
                    for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
                    var n = Array(e),
                        o = 0;
                    for (t = 0; t < r; t++)
                        for (var i = arguments[t], s = 0, a = i.length; s < a; s++, o++) n[o] = i[s];
                    return n
                }

                function b(e) {
                    return this instanceof b ? (this.v = e, this) : new b(e)
                }

                function w(e, t, r) {
                    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                    var n, o = r.apply(e, t || []),
                        i = [];
                    return n = {}, s("next"), s("throw"), s("return"), n[Symbol.asyncIterator] = function() {
                        return this
                    }, n;

                    function s(e) {
                        o[e] && (n[e] = function(t) {
                            return new Promise((function(r, n) {
                                i.push([e, t, r, n]) > 1 || a(e, t)
                            }))
                        })
                    }

                    function a(e, t) {
                        try {
                            (r = o[e](t)).value instanceof b ? Promise.resolve(r.value.v).then(c, u) : d(i[0][2], r)
                        } catch (e) {
                            d(i[0][3], e)
                        }
                        var r
                    }

                    function c(e) {
                        a("next", e)
                    }

                    function u(e) {
                        a("throw", e)
                    }

                    function d(e, t) {
                        e(t), i.shift(), i.length && a(i[0][0], i[0][1])
                    }
                }

                function v(e) {
                    var t, r;
                    return t = {}, n("next"), n("throw", (function(e) {
                        throw e
                    })), n("return"), t[Symbol.iterator] = function() {
                        return this
                    }, t;

                    function n(n, o) {
                        t[n] = e[n] ? function(t) {
                            return (r = !r) ? {
                                value: b(e[n](t)),
                                done: "return" === n
                            } : o ? o(t) : t
                        } : o
                    }
                }

                function S(e) {
                    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                    var t, r = e[Symbol.asyncIterator];
                    return r ? r.call(e) : (e = h(e), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
                        return this
                    }, t);

                    function n(r) {
                        t[r] = e[r] && function(t) {
                            return new Promise((function(n, o) {
                                (function(e, t, r, n) {
                                    Promise.resolve(n).then((function(t) {
                                        e({
                                            value: t,
                                            done: r
                                        })
                                    }), t)
                                })(n, o, (t = e[r](t)).done, t.value)
                            }))
                        }
                    }
                }

                function E(e, t) {
                    return Object.defineProperty ? Object.defineProperty(e, "raw", {
                        value: t
                    }) : e.raw = t, e
                }

                function x(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t.default = e, t
                }

                function P(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }

                function A(e, t) {
                    if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
                    return t.get(e)
                }

                function _(e, t, r) {
                    if (!t.has(e)) throw new TypeError("attempted to set private field on non-instance");
                    return t.set(e, r), r
                }
            },
            106: (e, t, r) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.convertToBuffer = void 0;
                var n = r(84),
                    o = "undefined" != typeof Buffer && Buffer.from ? function(e) {
                        return Buffer.from(e, "utf8")
                    } : n.fromUtf8;
                t.convertToBuffer = function(e) {
                    return e instanceof Uint8Array ? e : "string" == typeof e ? o(e) : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(e)
                }
            },
            658: (e, t, r) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.uint32ArrayFrom = t.numToUint8 = t.isEmptyData = t.convertToBuffer = void 0;
                var n = r(106);
                Object.defineProperty(t, "convertToBuffer", {
                    enumerable: !0,
                    get: function() {
                        return n.convertToBuffer
                    }
                });
                var o = r(304);
                Object.defineProperty(t, "isEmptyData", {
                    enumerable: !0,
                    get: function() {
                        return o.isEmptyData
                    }
                });
                var i = r(174);
                Object.defineProperty(t, "numToUint8", {
                    enumerable: !0,
                    get: function() {
                        return i.numToUint8
                    }
                });
                var s = r(558);
                Object.defineProperty(t, "uint32ArrayFrom", {
                    enumerable: !0,
                    get: function() {
                        return s.uint32ArrayFrom
                    }
                })
            },
            304: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.isEmptyData = void 0, t.isEmptyData = function(e) {
                    return "string" == typeof e ? 0 === e.length : 0 === e.byteLength
                }
            },
            174: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.numToUint8 = void 0, t.numToUint8 = function(e) {
                    return new Uint8Array([(4278190080 & e) >> 24, (16711680 & e) >> 16, (65280 & e) >> 8, 255 & e])
                }
            },
            558: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.uint32ArrayFrom = void 0, t.uint32ArrayFrom = function(e) {
                    if (!Uint32Array.from) {
                        for (var t = new Uint32Array(e.length), r = 0; r < e.length;) t[r] = e[r], r += 1;
                        return t
                    }
                    return Uint32Array.from(e)
                }
            },
            495: (e, t, r) => {
                "use strict";
                r.r(t), r.d(t, {
                    locateWindow: () => o
                });
                const n = {};

                function o() {
                    return "undefined" != typeof window ? window : "undefined" != typeof self ? self : n
                }
            },
            84: (e, t, r) => {
                "use strict";
                r.r(t), r.d(t, {
                    fromUtf8: () => n,
                    toUtf8: () => o
                });
                const n = e => "function" == typeof TextEncoder ? function(e) {
                        return (new TextEncoder).encode(e)
                    }(e) : (e => {
                        const t = [];
                        for (let r = 0, n = e.length; r < n; r++) {
                            const n = e.charCodeAt(r);
                            if (n < 128) t.push(n);
                            else if (n < 2048) t.push(n >> 6 | 192, 63 & n | 128);
                            else if (r + 1 < e.length && 55296 == (64512 & n) && 56320 == (64512 & e.charCodeAt(r + 1))) {
                                const o = 65536 + ((1023 & n) << 10) + (1023 & e.charCodeAt(++r));
                                t.push(o >> 18 | 240, o >> 12 & 63 | 128, o >> 6 & 63 | 128, 63 & o | 128)
                            } else t.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                        }
                        return Uint8Array.from(t)
                    })(e),
                    o = e => "function" == typeof TextDecoder ? function(e) {
                        return new TextDecoder("utf-8").decode(e)
                    }(e) : (e => {
                        let t = "";
                        for (let r = 0, n = e.length; r < n; r++) {
                            const n = e[r];
                            if (n < 128) t += String.fromCharCode(n);
                            else if (192 <= n && n < 224) {
                                const o = e[++r];
                                t += String.fromCharCode((31 & n) << 6 | 63 & o)
                            } else if (240 <= n && n < 365) {
                                const o = "%" + [n, e[++r], e[++r], e[++r]].map((e => e.toString(16))).join("%");
                                t += decodeURIComponent(o)
                            } else t += String.fromCharCode((15 & n) << 12 | (63 & e[++r]) << 6 | 63 & e[++r])
                        }
                        return t
                    })(e)
            },
            206: function(e) {
                e.exports = function(e) {
                    var t = {};

                    function r(n) {
                        if (t[n]) return t[n].exports;
                        var o = t[n] = {
                            i: n,
                            l: !1,
                            exports: {}
                        };
                        return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
                    }
                    return r.m = e, r.c = t, r.d = function(e, t, n) {
                        r.o(e, t) || Object.defineProperty(e, t, {
                            enumerable: !0,
                            get: n
                        })
                    }, r.r = function(e) {
                        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                            value: "Module"
                        }), Object.defineProperty(e, "__esModule", {
                            value: !0
                        })
                    }, r.t = function(e, t) {
                        if (1 & t && (e = r(e)), 8 & t) return e;
                        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                        var n = Object.create(null);
                        if (r.r(n), Object.defineProperty(n, "default", {
                                enumerable: !0,
                                value: e
                            }), 2 & t && "string" != typeof e)
                            for (var o in e) r.d(n, o, function(t) {
                                return e[t]
                            }.bind(null, o));
                        return n
                    }, r.n = function(e) {
                        var t = e && e.__esModule ? function() {
                            return e.default
                        } : function() {
                            return e
                        };
                        return r.d(t, "a", t), t
                    }, r.o = function(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    }, r.p = "", r(r.s = 90)
                }({
                    17: function(e, t, r) {
                        "use strict";
                        t.__esModule = !0, t.default = void 0;
                        var n = r(18),
                            o = function() {
                                function e() {}
                                return e.getFirstMatch = function(e, t) {
                                    var r = t.match(e);
                                    return r && r.length > 0 && r[1] || ""
                                }, e.getSecondMatch = function(e, t) {
                                    var r = t.match(e);
                                    return r && r.length > 1 && r[2] || ""
                                }, e.matchAndReturnConst = function(e, t, r) {
                                    if (e.test(t)) return r
                                }, e.getWindowsVersionName = function(e) {
                                    switch (e) {
                                        case "NT":
                                            return "NT";
                                        case "XP":
                                        case "NT 5.1":
                                            return "XP";
                                        case "NT 5.0":
                                            return "2000";
                                        case "NT 5.2":
                                            return "2003";
                                        case "NT 6.0":
                                            return "Vista";
                                        case "NT 6.1":
                                            return "7";
                                        case "NT 6.2":
                                            return "8";
                                        case "NT 6.3":
                                            return "8.1";
                                        case "NT 10.0":
                                            return "10";
                                        default:
                                            return
                                    }
                                }, e.getMacOSVersionName = function(e) {
                                    var t = e.split(".").splice(0, 2).map((function(e) {
                                        return parseInt(e, 10) || 0
                                    }));
                                    if (t.push(0), 10 === t[0]) switch (t[1]) {
                                        case 5:
                                            return "Leopard";
                                        case 6:
                                            return "Snow Leopard";
                                        case 7:
                                            return "Lion";
                                        case 8:
                                            return "Mountain Lion";
                                        case 9:
                                            return "Mavericks";
                                        case 10:
                                            return "Yosemite";
                                        case 11:
                                            return "El Capitan";
                                        case 12:
                                            return "Sierra";
                                        case 13:
                                            return "High Sierra";
                                        case 14:
                                            return "Mojave";
                                        case 15:
                                            return "Catalina";
                                        default:
                                            return
                                    }
                                }, e.getAndroidVersionName = function(e) {
                                    var t = e.split(".").splice(0, 2).map((function(e) {
                                        return parseInt(e, 10) || 0
                                    }));
                                    if (t.push(0), !(1 === t[0] && t[1] < 5)) return 1 === t[0] && t[1] < 6 ? "Cupcake" : 1 === t[0] && t[1] >= 6 ? "Donut" : 2 === t[0] && t[1] < 2 ? "Eclair" : 2 === t[0] && 2 === t[1] ? "Froyo" : 2 === t[0] && t[1] > 2 ? "Gingerbread" : 3 === t[0] ? "Honeycomb" : 4 === t[0] && t[1] < 1 ? "Ice Cream Sandwich" : 4 === t[0] && t[1] < 4 ? "Jelly Bean" : 4 === t[0] && t[1] >= 4 ? "KitKat" : 5 === t[0] ? "Lollipop" : 6 === t[0] ? "Marshmallow" : 7 === t[0] ? "Nougat" : 8 === t[0] ? "Oreo" : 9 === t[0] ? "Pie" : void 0
                                }, e.getVersionPrecision = function(e) {
                                    return e.split(".").length
                                }, e.compareVersions = function(t, r, n) {
                                    void 0 === n && (n = !1);
                                    var o = e.getVersionPrecision(t),
                                        i = e.getVersionPrecision(r),
                                        s = Math.max(o, i),
                                        a = 0,
                                        c = e.map([t, r], (function(t) {
                                            var r = s - e.getVersionPrecision(t),
                                                n = t + new Array(r + 1).join(".0");
                                            return e.map(n.split("."), (function(e) {
                                                return new Array(20 - e.length).join("0") + e
                                            })).reverse()
                                        }));
                                    for (n && (a = s - Math.min(o, i)), s -= 1; s >= a;) {
                                        if (c[0][s] > c[1][s]) return 1;
                                        if (c[0][s] === c[1][s]) {
                                            if (s === a) return 0;
                                            s -= 1
                                        } else if (c[0][s] < c[1][s]) return -1
                                    }
                                }, e.map = function(e, t) {
                                    var r, n = [];
                                    if (Array.prototype.map) return Array.prototype.map.call(e, t);
                                    for (r = 0; r < e.length; r += 1) n.push(t(e[r]));
                                    return n
                                }, e.find = function(e, t) {
                                    var r, n;
                                    if (Array.prototype.find) return Array.prototype.find.call(e, t);
                                    for (r = 0, n = e.length; r < n; r += 1) {
                                        var o = e[r];
                                        if (t(o, r)) return o
                                    }
                                }, e.assign = function(e) {
                                    for (var t, r, n = e, o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), s = 1; s < o; s++) i[s - 1] = arguments[s];
                                    if (Object.assign) return Object.assign.apply(Object, [e].concat(i));
                                    var a = function() {
                                        var e = i[t];
                                        "object" == typeof e && null !== e && Object.keys(e).forEach((function(t) {
                                            n[t] = e[t]
                                        }))
                                    };
                                    for (t = 0, r = i.length; t < r; t += 1) a();
                                    return e
                                }, e.getBrowserAlias = function(e) {
                                    return n.BROWSER_ALIASES_MAP[e]
                                }, e.getBrowserTypeByAlias = function(e) {
                                    return n.BROWSER_MAP[e] || ""
                                }, e
                            }();
                        t.default = o, e.exports = t.default
                    },
                    18: function(e, t, r) {
                        "use strict";
                        t.__esModule = !0, t.ENGINE_MAP = t.OS_MAP = t.PLATFORMS_MAP = t.BROWSER_MAP = t.BROWSER_ALIASES_MAP = void 0, t.BROWSER_ALIASES_MAP = {
                            "Amazon Silk": "amazon_silk",
                            "Android Browser": "android",
                            Bada: "bada",
                            BlackBerry: "blackberry",
                            Chrome: "chrome",
                            Chromium: "chromium",
                            Electron: "electron",
                            Epiphany: "epiphany",
                            Firefox: "firefox",
                            Focus: "focus",
                            Generic: "generic",
                            "Google Search": "google_search",
                            Googlebot: "googlebot",
                            "Internet Explorer": "ie",
                            "K-Meleon": "k_meleon",
                            Maxthon: "maxthon",
                            "Microsoft Edge": "edge",
                            "MZ Browser": "mz",
                            "NAVER Whale Browser": "naver",
                            Opera: "opera",
                            "Opera Coast": "opera_coast",
                            PhantomJS: "phantomjs",
                            Puffin: "puffin",
                            QupZilla: "qupzilla",
                            QQ: "qq",
                            QQLite: "qqlite",
                            Safari: "safari",
                            Sailfish: "sailfish",
                            "Samsung Internet for Android": "samsung_internet",
                            SeaMonkey: "seamonkey",
                            Sleipnir: "sleipnir",
                            Swing: "swing",
                            Tizen: "tizen",
                            "UC Browser": "uc",
                            Vivaldi: "vivaldi",
                            "WebOS Browser": "webos",
                            WeChat: "wechat",
                            "Yandex Browser": "yandex",
                            Roku: "roku"
                        }, t.BROWSER_MAP = {
                            amazon_silk: "Amazon Silk",
                            android: "Android Browser",
                            bada: "Bada",
                            blackberry: "BlackBerry",
                            chrome: "Chrome",
                            chromium: "Chromium",
                            electron: "Electron",
                            epiphany: "Epiphany",
                            firefox: "Firefox",
                            focus: "Focus",
                            generic: "Generic",
                            googlebot: "Googlebot",
                            google_search: "Google Search",
                            ie: "Internet Explorer",
                            k_meleon: "K-Meleon",
                            maxthon: "Maxthon",
                            edge: "Microsoft Edge",
                            mz: "MZ Browser",
                            naver: "NAVER Whale Browser",
                            opera: "Opera",
                            opera_coast: "Opera Coast",
                            phantomjs: "PhantomJS",
                            puffin: "Puffin",
                            qupzilla: "QupZilla",
                            qq: "QQ Browser",
                            qqlite: "QQ Browser Lite",
                            safari: "Safari",
                            sailfish: "Sailfish",
                            samsung_internet: "Samsung Internet for Android",
                            seamonkey: "SeaMonkey",
                            sleipnir: "Sleipnir",
                            swing: "Swing",
                            tizen: "Tizen",
                            uc: "UC Browser",
                            vivaldi: "Vivaldi",
                            webos: "WebOS Browser",
                            wechat: "WeChat",
                            yandex: "Yandex Browser"
                        }, t.PLATFORMS_MAP = {
                            tablet: "tablet",
                            mobile: "mobile",
                            desktop: "desktop",
                            tv: "tv"
                        }, t.OS_MAP = {
                            WindowsPhone: "Windows Phone",
                            Windows: "Windows",
                            MacOS: "macOS",
                            iOS: "iOS",
                            Android: "Android",
                            WebOS: "WebOS",
                            BlackBerry: "BlackBerry",
                            Bada: "Bada",
                            Tizen: "Tizen",
                            Linux: "Linux",
                            ChromeOS: "Chrome OS",
                            PlayStation4: "PlayStation 4",
                            Roku: "Roku"
                        }, t.ENGINE_MAP = {
                            EdgeHTML: "EdgeHTML",
                            Blink: "Blink",
                            Trident: "Trident",
                            Presto: "Presto",
                            Gecko: "Gecko",
                            WebKit: "WebKit"
                        }
                    },
                    90: function(e, t, r) {
                        "use strict";
                        t.__esModule = !0, t.default = void 0;
                        var n, o = (n = r(91)) && n.__esModule ? n : {
                                default: n
                            },
                            i = r(18);

                        function s(e, t) {
                            for (var r = 0; r < t.length; r++) {
                                var n = t[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                            }
                        }
                        var a = function() {
                            function e() {}
                            var t, r, n;
                            return e.getParser = function(e, t) {
                                if (void 0 === t && (t = !1), "string" != typeof e) throw new Error("UserAgent should be a string");
                                return new o.default(e, t)
                            }, e.parse = function(e) {
                                return new o.default(e).getResult()
                            }, t = e, n = [{
                                key: "BROWSER_MAP",
                                get: function() {
                                    return i.BROWSER_MAP
                                }
                            }, {
                                key: "ENGINE_MAP",
                                get: function() {
                                    return i.ENGINE_MAP
                                }
                            }, {
                                key: "OS_MAP",
                                get: function() {
                                    return i.OS_MAP
                                }
                            }, {
                                key: "PLATFORMS_MAP",
                                get: function() {
                                    return i.PLATFORMS_MAP
                                }
                            }], (r = null) && s(t.prototype, r), n && s(t, n), e
                        }();
                        t.default = a, e.exports = t.default
                    },
                    91: function(e, t, r) {
                        "use strict";
                        t.__esModule = !0, t.default = void 0;
                        var n = c(r(92)),
                            o = c(r(93)),
                            i = c(r(94)),
                            s = c(r(95)),
                            a = c(r(17));

                        function c(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            }
                        }
                        var u = function() {
                            function e(e, t) {
                                if (void 0 === t && (t = !1), null == e || "" === e) throw new Error("UserAgent parameter can't be empty");
                                this._ua = e, this.parsedResult = {}, !0 !== t && this.parse()
                            }
                            var t = e.prototype;
                            return t.getUA = function() {
                                return this._ua
                            }, t.test = function(e) {
                                return e.test(this._ua)
                            }, t.parseBrowser = function() {
                                var e = this;
                                this.parsedResult.browser = {};
                                var t = a.default.find(n.default, (function(t) {
                                    if ("function" == typeof t.test) return t.test(e);
                                    if (t.test instanceof Array) return t.test.some((function(t) {
                                        return e.test(t)
                                    }));
                                    throw new Error("Browser's test function is not valid")
                                }));
                                return t && (this.parsedResult.browser = t.describe(this.getUA())), this.parsedResult.browser
                            }, t.getBrowser = function() {
                                return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser()
                            }, t.getBrowserName = function(e) {
                                return e ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || ""
                            }, t.getBrowserVersion = function() {
                                return this.getBrowser().version
                            }, t.getOS = function() {
                                return this.parsedResult.os ? this.parsedResult.os : this.parseOS()
                            }, t.parseOS = function() {
                                var e = this;
                                this.parsedResult.os = {};
                                var t = a.default.find(o.default, (function(t) {
                                    if ("function" == typeof t.test) return t.test(e);
                                    if (t.test instanceof Array) return t.test.some((function(t) {
                                        return e.test(t)
                                    }));
                                    throw new Error("Browser's test function is not valid")
                                }));
                                return t && (this.parsedResult.os = t.describe(this.getUA())), this.parsedResult.os
                            }, t.getOSName = function(e) {
                                var t = this.getOS().name;
                                return e ? String(t).toLowerCase() || "" : t || ""
                            }, t.getOSVersion = function() {
                                return this.getOS().version
                            }, t.getPlatform = function() {
                                return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform()
                            }, t.getPlatformType = function(e) {
                                void 0 === e && (e = !1);
                                var t = this.getPlatform().type;
                                return e ? String(t).toLowerCase() || "" : t || ""
                            }, t.parsePlatform = function() {
                                var e = this;
                                this.parsedResult.platform = {};
                                var t = a.default.find(i.default, (function(t) {
                                    if ("function" == typeof t.test) return t.test(e);
                                    if (t.test instanceof Array) return t.test.some((function(t) {
                                        return e.test(t)
                                    }));
                                    throw new Error("Browser's test function is not valid")
                                }));
                                return t && (this.parsedResult.platform = t.describe(this.getUA())), this.parsedResult.platform
                            }, t.getEngine = function() {
                                return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine()
                            }, t.getEngineName = function(e) {
                                return e ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || ""
                            }, t.parseEngine = function() {
                                var e = this;
                                this.parsedResult.engine = {};
                                var t = a.default.find(s.default, (function(t) {
                                    if ("function" == typeof t.test) return t.test(e);
                                    if (t.test instanceof Array) return t.test.some((function(t) {
                                        return e.test(t)
                                    }));
                                    throw new Error("Browser's test function is not valid")
                                }));
                                return t && (this.parsedResult.engine = t.describe(this.getUA())), this.parsedResult.engine
                            }, t.parse = function() {
                                return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this
                            }, t.getResult = function() {
                                return a.default.assign({}, this.parsedResult)
                            }, t.satisfies = function(e) {
                                var t = this,
                                    r = {},
                                    n = 0,
                                    o = {},
                                    i = 0;
                                if (Object.keys(e).forEach((function(t) {
                                        var s = e[t];
                                        "string" == typeof s ? (o[t] = s, i += 1) : "object" == typeof s && (r[t] = s, n += 1)
                                    })), n > 0) {
                                    var s = Object.keys(r),
                                        c = a.default.find(s, (function(e) {
                                            return t.isOS(e)
                                        }));
                                    if (c) {
                                        var u = this.satisfies(r[c]);
                                        if (void 0 !== u) return u
                                    }
                                    var d = a.default.find(s, (function(e) {
                                        return t.isPlatform(e)
                                    }));
                                    if (d) {
                                        var l = this.satisfies(r[d]);
                                        if (void 0 !== l) return l
                                    }
                                }
                                if (i > 0) {
                                    var f = Object.keys(o),
                                        p = a.default.find(f, (function(e) {
                                            return t.isBrowser(e, !0)
                                        }));
                                    if (void 0 !== p) return this.compareVersion(o[p])
                                }
                            }, t.isBrowser = function(e, t) {
                                void 0 === t && (t = !1);
                                var r = this.getBrowserName().toLowerCase(),
                                    n = e.toLowerCase(),
                                    o = a.default.getBrowserTypeByAlias(n);
                                return t && o && (n = o.toLowerCase()), n === r
                            }, t.compareVersion = function(e) {
                                var t = [0],
                                    r = e,
                                    n = !1,
                                    o = this.getBrowserVersion();
                                if ("string" == typeof o) return ">" === e[0] || "<" === e[0] ? (r = e.substr(1), "=" === e[1] ? (n = !0, r = e.substr(2)) : t = [], ">" === e[0] ? t.push(1) : t.push(-1)) : "=" === e[0] ? r = e.substr(1) : "~" === e[0] && (n = !0, r = e.substr(1)), t.indexOf(a.default.compareVersions(o, r, n)) > -1
                            }, t.isOS = function(e) {
                                return this.getOSName(!0) === String(e).toLowerCase()
                            }, t.isPlatform = function(e) {
                                return this.getPlatformType(!0) === String(e).toLowerCase()
                            }, t.isEngine = function(e) {
                                return this.getEngineName(!0) === String(e).toLowerCase()
                            }, t.is = function(e, t) {
                                return void 0 === t && (t = !1), this.isBrowser(e, t) || this.isOS(e) || this.isPlatform(e)
                            }, t.some = function(e) {
                                var t = this;
                                return void 0 === e && (e = []), e.some((function(e) {
                                    return t.is(e)
                                }))
                            }, e
                        }();
                        t.default = u, e.exports = t.default
                    },
                    92: function(e, t, r) {
                        "use strict";
                        t.__esModule = !0, t.default = void 0;
                        var n, o = (n = r(17)) && n.__esModule ? n : {
                                default: n
                            },
                            i = /version\/(\d+(\.?_?\d+)+)/i,
                            s = [{
                                test: [/googlebot/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Googlebot"
                                        },
                                        r = o.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e) || o.default.getFirstMatch(i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/opera/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Opera"
                                        },
                                        r = o.default.getFirstMatch(i, e) || o.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/opr\/|opios/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Opera"
                                        },
                                        r = o.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e) || o.default.getFirstMatch(i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/SamsungBrowser/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Samsung Internet for Android"
                                        },
                                        r = o.default.getFirstMatch(i, e) || o.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/Whale/i],
                                describe: function(e) {
                                    var t = {
                                            name: "NAVER Whale Browser"
                                        },
                                        r = o.default.getFirstMatch(i, e) || o.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/MZBrowser/i],
                                describe: function(e) {
                                    var t = {
                                            name: "MZ Browser"
                                        },
                                        r = o.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, e) || o.default.getFirstMatch(i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/focus/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Focus"
                                        },
                                        r = o.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, e) || o.default.getFirstMatch(i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/swing/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Swing"
                                        },
                                        r = o.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, e) || o.default.getFirstMatch(i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/coast/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Opera Coast"
                                        },
                                        r = o.default.getFirstMatch(i, e) || o.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/opt\/\d+(?:.?_?\d+)+/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Opera Touch"
                                        },
                                        r = o.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, e) || o.default.getFirstMatch(i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/yabrowser/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Yandex Browser"
                                        },
                                        r = o.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, e) || o.default.getFirstMatch(i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/ucbrowser/i],
                                describe: function(e) {
                                    var t = {
                                            name: "UC Browser"
                                        },
                                        r = o.default.getFirstMatch(i, e) || o.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/Maxthon|mxios/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Maxthon"
                                        },
                                        r = o.default.getFirstMatch(i, e) || o.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/epiphany/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Epiphany"
                                        },
                                        r = o.default.getFirstMatch(i, e) || o.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/puffin/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Puffin"
                                        },
                                        r = o.default.getFirstMatch(i, e) || o.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/sleipnir/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Sleipnir"
                                        },
                                        r = o.default.getFirstMatch(i, e) || o.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/k-meleon/i],
                                describe: function(e) {
                                    var t = {
                                            name: "K-Meleon"
                                        },
                                        r = o.default.getFirstMatch(i, e) || o.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/micromessenger/i],
                                describe: function(e) {
                                    var t = {
                                            name: "WeChat"
                                        },
                                        r = o.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, e) || o.default.getFirstMatch(i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/qqbrowser/i],
                                describe: function(e) {
                                    var t = {
                                            name: /qqbrowserlite/i.test(e) ? "QQ Browser Lite" : "QQ Browser"
                                        },
                                        r = o.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, e) || o.default.getFirstMatch(i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/msie|trident/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Internet Explorer"
                                        },
                                        r = o.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/\sedg\//i],
                                describe: function(e) {
                                    var t = {
                                            name: "Microsoft Edge"
                                        },
                                        r = o.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/edg([ea]|ios)/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Microsoft Edge"
                                        },
                                        r = o.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/vivaldi/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Vivaldi"
                                        },
                                        r = o.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/seamonkey/i],
                                describe: function(e) {
                                    var t = {
                                            name: "SeaMonkey"
                                        },
                                        r = o.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/sailfish/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Sailfish"
                                        },
                                        r = o.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/silk/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Amazon Silk"
                                        },
                                        r = o.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/phantom/i],
                                describe: function(e) {
                                    var t = {
                                            name: "PhantomJS"
                                        },
                                        r = o.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/slimerjs/i],
                                describe: function(e) {
                                    var t = {
                                            name: "SlimerJS"
                                        },
                                        r = o.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                                describe: function(e) {
                                    var t = {
                                            name: "BlackBerry"
                                        },
                                        r = o.default.getFirstMatch(i, e) || o.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/(web|hpw)[o0]s/i],
                                describe: function(e) {
                                    var t = {
                                            name: "WebOS Browser"
                                        },
                                        r = o.default.getFirstMatch(i, e) || o.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/bada/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Bada"
                                        },
                                        r = o.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/tizen/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Tizen"
                                        },
                                        r = o.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, e) || o.default.getFirstMatch(i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/qupzilla/i],
                                describe: function(e) {
                                    var t = {
                                            name: "QupZilla"
                                        },
                                        r = o.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, e) || o.default.getFirstMatch(i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/firefox|iceweasel|fxios/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Firefox"
                                        },
                                        r = o.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/electron/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Electron"
                                        },
                                        r = o.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/MiuiBrowser/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Miui"
                                        },
                                        r = o.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/chromium/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Chromium"
                                        },
                                        r = o.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, e) || o.default.getFirstMatch(i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/chrome|crios|crmo/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Chrome"
                                        },
                                        r = o.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/GSA/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Google Search"
                                        },
                                        r = o.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: function(e) {
                                    var t = !e.test(/like android/i),
                                        r = e.test(/android/i);
                                    return t && r
                                },
                                describe: function(e) {
                                    var t = {
                                            name: "Android Browser"
                                        },
                                        r = o.default.getFirstMatch(i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/playstation 4/i],
                                describe: function(e) {
                                    var t = {
                                            name: "PlayStation 4"
                                        },
                                        r = o.default.getFirstMatch(i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/safari|applewebkit/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Safari"
                                        },
                                        r = o.default.getFirstMatch(i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/.*/i],
                                describe: function(e) {
                                    var t = -1 !== e.search("\\(") ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
                                    return {
                                        name: o.default.getFirstMatch(t, e),
                                        version: o.default.getSecondMatch(t, e)
                                    }
                                }
                            }];
                        t.default = s, e.exports = t.default
                    },
                    93: function(e, t, r) {
                        "use strict";
                        t.__esModule = !0, t.default = void 0;
                        var n, o = (n = r(17)) && n.__esModule ? n : {
                                default: n
                            },
                            i = r(18),
                            s = [{
                                test: [/Roku\/DVP/],
                                describe: function(e) {
                                    var t = o.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e);
                                    return {
                                        name: i.OS_MAP.Roku,
                                        version: t
                                    }
                                }
                            }, {
                                test: [/windows phone/i],
                                describe: function(e) {
                                    var t = o.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, e);
                                    return {
                                        name: i.OS_MAP.WindowsPhone,
                                        version: t
                                    }
                                }
                            }, {
                                test: [/windows /i],
                                describe: function(e) {
                                    var t = o.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, e),
                                        r = o.default.getWindowsVersionName(t);
                                    return {
                                        name: i.OS_MAP.Windows,
                                        version: t,
                                        versionName: r
                                    }
                                }
                            }, {
                                test: [/Macintosh(.*?) FxiOS(.*?)\//],
                                describe: function(e) {
                                    var t = {
                                            name: i.OS_MAP.iOS
                                        },
                                        r = o.default.getSecondMatch(/(Version\/)(\d[\d.]+)/, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/macintosh/i],
                                describe: function(e) {
                                    var t = o.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e).replace(/[_\s]/g, "."),
                                        r = o.default.getMacOSVersionName(t),
                                        n = {
                                            name: i.OS_MAP.MacOS,
                                            version: t
                                        };
                                    return r && (n.versionName = r), n
                                }
                            }, {
                                test: [/(ipod|iphone|ipad)/i],
                                describe: function(e) {
                                    var t = o.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e).replace(/[_\s]/g, ".");
                                    return {
                                        name: i.OS_MAP.iOS,
                                        version: t
                                    }
                                }
                            }, {
                                test: function(e) {
                                    var t = !e.test(/like android/i),
                                        r = e.test(/android/i);
                                    return t && r
                                },
                                describe: function(e) {
                                    var t = o.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, e),
                                        r = o.default.getAndroidVersionName(t),
                                        n = {
                                            name: i.OS_MAP.Android,
                                            version: t
                                        };
                                    return r && (n.versionName = r), n
                                }
                            }, {
                                test: [/(web|hpw)[o0]s/i],
                                describe: function(e) {
                                    var t = o.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, e),
                                        r = {
                                            name: i.OS_MAP.WebOS
                                        };
                                    return t && t.length && (r.version = t), r
                                }
                            }, {
                                test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                                describe: function(e) {
                                    var t = o.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, e) || o.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, e) || o.default.getFirstMatch(/\bbb(\d+)/i, e);
                                    return {
                                        name: i.OS_MAP.BlackBerry,
                                        version: t
                                    }
                                }
                            }, {
                                test: [/bada/i],
                                describe: function(e) {
                                    var t = o.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e);
                                    return {
                                        name: i.OS_MAP.Bada,
                                        version: t
                                    }
                                }
                            }, {
                                test: [/tizen/i],
                                describe: function(e) {
                                    var t = o.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, e);
                                    return {
                                        name: i.OS_MAP.Tizen,
                                        version: t
                                    }
                                }
                            }, {
                                test: [/linux/i],
                                describe: function() {
                                    return {
                                        name: i.OS_MAP.Linux
                                    }
                                }
                            }, {
                                test: [/CrOS/],
                                describe: function() {
                                    return {
                                        name: i.OS_MAP.ChromeOS
                                    }
                                }
                            }, {
                                test: [/PlayStation 4/],
                                describe: function(e) {
                                    var t = o.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, e);
                                    return {
                                        name: i.OS_MAP.PlayStation4,
                                        version: t
                                    }
                                }
                            }];
                        t.default = s, e.exports = t.default
                    },
                    94: function(e, t, r) {
                        "use strict";
                        t.__esModule = !0, t.default = void 0;
                        var n, o = (n = r(17)) && n.__esModule ? n : {
                                default: n
                            },
                            i = r(18),
                            s = [{
                                test: [/googlebot/i],
                                describe: function() {
                                    return {
                                        type: "bot",
                                        vendor: "Google"
                                    }
                                }
                            }, {
                                test: [/huawei/i],
                                describe: function(e) {
                                    var t = o.default.getFirstMatch(/(can-l01)/i, e) && "Nova",
                                        r = {
                                            type: i.PLATFORMS_MAP.mobile,
                                            vendor: "Huawei"
                                        };
                                    return t && (r.model = t), r
                                }
                            }, {
                                test: [/nexus\s*(?:7|8|9|10).*/i],
                                describe: function() {
                                    return {
                                        type: i.PLATFORMS_MAP.tablet,
                                        vendor: "Nexus"
                                    }
                                }
                            }, {
                                test: [/ipad/i],
                                describe: function() {
                                    return {
                                        type: i.PLATFORMS_MAP.tablet,
                                        vendor: "Apple",
                                        model: "iPad"
                                    }
                                }
                            }, {
                                test: [/Macintosh(.*?) FxiOS(.*?)\//],
                                describe: function() {
                                    return {
                                        type: i.PLATFORMS_MAP.tablet,
                                        vendor: "Apple",
                                        model: "iPad"
                                    }
                                }
                            }, {
                                test: [/kftt build/i],
                                describe: function() {
                                    return {
                                        type: i.PLATFORMS_MAP.tablet,
                                        vendor: "Amazon",
                                        model: "Kindle Fire HD 7"
                                    }
                                }
                            }, {
                                test: [/silk/i],
                                describe: function() {
                                    return {
                                        type: i.PLATFORMS_MAP.tablet,
                                        vendor: "Amazon"
                                    }
                                }
                            }, {
                                test: [/tablet(?! pc)/i],
                                describe: function() {
                                    return {
                                        type: i.PLATFORMS_MAP.tablet
                                    }
                                }
                            }, {
                                test: function(e) {
                                    var t = e.test(/ipod|iphone/i),
                                        r = e.test(/like (ipod|iphone)/i);
                                    return t && !r
                                },
                                describe: function(e) {
                                    var t = o.default.getFirstMatch(/(ipod|iphone)/i, e);
                                    return {
                                        type: i.PLATFORMS_MAP.mobile,
                                        vendor: "Apple",
                                        model: t
                                    }
                                }
                            }, {
                                test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
                                describe: function() {
                                    return {
                                        type: i.PLATFORMS_MAP.mobile,
                                        vendor: "Nexus"
                                    }
                                }
                            }, {
                                test: [/[^-]mobi/i],
                                describe: function() {
                                    return {
                                        type: i.PLATFORMS_MAP.mobile
                                    }
                                }
                            }, {
                                test: function(e) {
                                    return "blackberry" === e.getBrowserName(!0)
                                },
                                describe: function() {
                                    return {
                                        type: i.PLATFORMS_MAP.mobile,
                                        vendor: "BlackBerry"
                                    }
                                }
                            }, {
                                test: function(e) {
                                    return "bada" === e.getBrowserName(!0)
                                },
                                describe: function() {
                                    return {
                                        type: i.PLATFORMS_MAP.mobile
                                    }
                                }
                            }, {
                                test: function(e) {
                                    return "windows phone" === e.getBrowserName()
                                },
                                describe: function() {
                                    return {
                                        type: i.PLATFORMS_MAP.mobile,
                                        vendor: "Microsoft"
                                    }
                                }
                            }, {
                                test: function(e) {
                                    var t = Number(String(e.getOSVersion()).split(".")[0]);
                                    return "android" === e.getOSName(!0) && t >= 3
                                },
                                describe: function() {
                                    return {
                                        type: i.PLATFORMS_MAP.tablet
                                    }
                                }
                            }, {
                                test: function(e) {
                                    return "android" === e.getOSName(!0)
                                },
                                describe: function() {
                                    return {
                                        type: i.PLATFORMS_MAP.mobile
                                    }
                                }
                            }, {
                                test: function(e) {
                                    return "macos" === e.getOSName(!0)
                                },
                                describe: function() {
                                    return {
                                        type: i.PLATFORMS_MAP.desktop,
                                        vendor: "Apple"
                                    }
                                }
                            }, {
                                test: function(e) {
                                    return "windows" === e.getOSName(!0)
                                },
                                describe: function() {
                                    return {
                                        type: i.PLATFORMS_MAP.desktop
                                    }
                                }
                            }, {
                                test: function(e) {
                                    return "linux" === e.getOSName(!0)
                                },
                                describe: function() {
                                    return {
                                        type: i.PLATFORMS_MAP.desktop
                                    }
                                }
                            }, {
                                test: function(e) {
                                    return "playstation 4" === e.getOSName(!0)
                                },
                                describe: function() {
                                    return {
                                        type: i.PLATFORMS_MAP.tv
                                    }
                                }
                            }, {
                                test: function(e) {
                                    return "roku" === e.getOSName(!0)
                                },
                                describe: function() {
                                    return {
                                        type: i.PLATFORMS_MAP.tv
                                    }
                                }
                            }];
                        t.default = s, e.exports = t.default
                    },
                    95: function(e, t, r) {
                        "use strict";
                        t.__esModule = !0, t.default = void 0;
                        var n, o = (n = r(17)) && n.__esModule ? n : {
                                default: n
                            },
                            i = r(18),
                            s = [{
                                test: function(e) {
                                    return "microsoft edge" === e.getBrowserName(!0)
                                },
                                describe: function(e) {
                                    if (/\sedg\//i.test(e)) return {
                                        name: i.ENGINE_MAP.Blink
                                    };
                                    var t = o.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e);
                                    return {
                                        name: i.ENGINE_MAP.EdgeHTML,
                                        version: t
                                    }
                                }
                            }, {
                                test: [/trident/i],
                                describe: function(e) {
                                    var t = {
                                            name: i.ENGINE_MAP.Trident
                                        },
                                        r = o.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: function(e) {
                                    return e.test(/presto/i)
                                },
                                describe: function(e) {
                                    var t = {
                                            name: i.ENGINE_MAP.Presto
                                        },
                                        r = o.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: function(e) {
                                    var t = e.test(/gecko/i),
                                        r = e.test(/like gecko/i);
                                    return t && !r
                                },
                                describe: function(e) {
                                    var t = {
                                            name: i.ENGINE_MAP.Gecko
                                        },
                                        r = o.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/(apple)?webkit\/537\.36/i],
                                describe: function() {
                                    return {
                                        name: i.ENGINE_MAP.Blink
                                    }
                                }
                            }, {
                                test: [/(apple)?webkit/i],
                                describe: function(e) {
                                    var t = {
                                            name: i.ENGINE_MAP.WebKit
                                        },
                                        r = o.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }];
                        t.default = s, e.exports = t.default
                    }
                })
            },
            932: (e, t, r) => {
                "use strict";
                const n = r(501),
                    o = r(844),
                    i = r(192);
                e.exports = {
                    XMLParser: o,
                    XMLValidator: n,
                    XMLBuilder: i
                }
            },
            849: (e, t) => {
                "use strict";
                const r = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",
                    n = "[" + r + "][" + (r + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040") + "]*",
                    o = new RegExp("^" + n + "$");
                t.isExist = function(e) {
                    return void 0 !== e
                }, t.isEmptyObject = function(e) {
                    return 0 === Object.keys(e).length
                }, t.merge = function(e, t, r) {
                    if (t) {
                        const n = Object.keys(t),
                            o = n.length;
                        for (let i = 0; i < o; i++) e[n[i]] = "strict" === r ? [t[n[i]]] : t[n[i]]
                    }
                }, t.getValue = function(e) {
                    return t.isExist(e) ? e : ""
                }, t.isName = function(e) {
                    const t = o.exec(e);
                    return !(null == t)
                }, t.getAllMatches = function(e, t) {
                    const r = [];
                    let n = t.exec(e);
                    for (; n;) {
                        const o = [];
                        o.startIndex = t.lastIndex - n[0].length;
                        const i = n.length;
                        for (let e = 0; e < i; e++) o.push(n[e]);
                        r.push(o), n = t.exec(e)
                    }
                    return r
                }, t.nameRegexp = n
            },
            501: (e, t, r) => {
                "use strict";
                const n = r(849),
                    o = {
                        allowBooleanAttributes: !1,
                        unpairedTags: []
                    };

                function i(e) {
                    return " " === e || "\t" === e || "\n" === e || "\r" === e
                }

                function s(e, t) {
                    const r = t;
                    for (; t < e.length; t++)
                        if ("?" != e[t] && " " != e[t]);
                        else {
                            const n = e.substr(r, t - r);
                            if (t > 5 && "xml" === n) return h("InvalidXml", "XML declaration allowed only at the start of the document.", m(e, t));
                            if ("?" == e[t] && ">" == e[t + 1]) {
                                t++;
                                break
                            }
                        } return t
                }

                function a(e, t) {
                    if (e.length > t + 5 && "-" === e[t + 1] && "-" === e[t + 2]) {
                        for (t += 3; t < e.length; t++)
                            if ("-" === e[t] && "-" === e[t + 1] && ">" === e[t + 2]) {
                                t += 2;
                                break
                            }
                    } else if (e.length > t + 8 && "D" === e[t + 1] && "O" === e[t + 2] && "C" === e[t + 3] && "T" === e[t + 4] && "Y" === e[t + 5] && "P" === e[t + 6] && "E" === e[t + 7]) {
                        let r = 1;
                        for (t += 8; t < e.length; t++)
                            if ("<" === e[t]) r++;
                            else if (">" === e[t] && (r--, 0 === r)) break
                    } else if (e.length > t + 9 && "[" === e[t + 1] && "C" === e[t + 2] && "D" === e[t + 3] && "A" === e[t + 4] && "T" === e[t + 5] && "A" === e[t + 6] && "[" === e[t + 7])
                        for (t += 8; t < e.length; t++)
                            if ("]" === e[t] && "]" === e[t + 1] && ">" === e[t + 2]) {
                                t += 2;
                                break
                            } return t
                }
                t.validate = function(e, t) {
                    t = Object.assign({}, o, t);
                    const r = [];
                    let c = !1,
                        u = !1;
                    "\ufeff" === e[0] && (e = e.substr(1));
                    for (let o = 0; o < e.length; o++)
                        if ("<" === e[o] && "?" === e[o + 1]) {
                            if (o += 2, o = s(e, o), o.err) return o
                        } else {
                            if ("<" !== e[o]) {
                                if (i(e[o])) continue;
                                return h("InvalidChar", "char '" + e[o] + "' is not expected.", m(e, o))
                            } {
                                let g = o;
                                if (o++, "!" === e[o]) {
                                    o = a(e, o);
                                    continue
                                } {
                                    let y = !1;
                                    "/" === e[o] && (y = !0, o++);
                                    let b = "";
                                    for (; o < e.length && ">" !== e[o] && " " !== e[o] && "\t" !== e[o] && "\n" !== e[o] && "\r" !== e[o]; o++) b += e[o];
                                    if (b = b.trim(), "/" === b[b.length - 1] && (b = b.substring(0, b.length - 1), o--), l = b, !n.isName(l)) {
                                        let t;
                                        return t = 0 === b.trim().length ? "Invalid space after '<'." : "Tag '" + b + "' is an invalid name.", h("InvalidTag", t, m(e, o))
                                    }
                                    const w = d(e, o);
                                    if (!1 === w) return h("InvalidAttr", "Attributes for '" + b + "' have open quote.", m(e, o));
                                    let v = w.value;
                                    if (o = w.index, "/" === v[v.length - 1]) {
                                        const r = o - v.length;
                                        v = v.substring(0, v.length - 1);
                                        const n = f(v, t);
                                        if (!0 !== n) return h(n.err.code, n.err.msg, m(e, r + n.err.line));
                                        c = !0
                                    } else if (y) {
                                        if (!w.tagClosed) return h("InvalidTag", "Closing tag '" + b + "' doesn't have proper closing.", m(e, o));
                                        if (v.trim().length > 0) return h("InvalidTag", "Closing tag '" + b + "' can't have attributes or invalid starting.", m(e, g));
                                        {
                                            const t = r.pop();
                                            if (b !== t.tagName) {
                                                let r = m(e, t.tagStartPos);
                                                return h("InvalidTag", "Expected closing tag '" + t.tagName + "' (opened in line " + r.line + ", col " + r.col + ") instead of closing tag '" + b + "'.", m(e, g))
                                            }
                                            0 == r.length && (u = !0)
                                        }
                                    } else {
                                        const n = f(v, t);
                                        if (!0 !== n) return h(n.err.code, n.err.msg, m(e, o - v.length + n.err.line));
                                        if (!0 === u) return h("InvalidXml", "Multiple possible root nodes found.", m(e, o)); - 1 !== t.unpairedTags.indexOf(b) || r.push({
                                            tagName: b,
                                            tagStartPos: g
                                        }), c = !0
                                    }
                                    for (o++; o < e.length; o++)
                                        if ("<" === e[o]) {
                                            if ("!" === e[o + 1]) {
                                                o++, o = a(e, o);
                                                continue
                                            }
                                            if ("?" !== e[o + 1]) break;
                                            if (o = s(e, ++o), o.err) return o
                                        } else if ("&" === e[o]) {
                                        const t = p(e, o);
                                        if (-1 == t) return h("InvalidChar", "char '&' is not expected.", m(e, o));
                                        o = t
                                    } else if (!0 === u && !i(e[o])) return h("InvalidXml", "Extra text at the end", m(e, o));
                                    "<" === e[o] && o--
                                }
                            }
                        } var l;
                    return c ? 1 == r.length ? h("InvalidTag", "Unclosed tag '" + r[0].tagName + "'.", m(e, r[0].tagStartPos)) : !(r.length > 0) || h("InvalidXml", "Invalid '" + JSON.stringify(r.map((e => e.tagName)), null, 4).replace(/\r?\n/g, "") + "' found.", {
                        line: 1,
                        col: 1
                    }) : h("InvalidXml", "Start tag expected.", 1)
                };
                const c = '"',
                    u = "'";

                function d(e, t) {
                    let r = "",
                        n = "",
                        o = !1;
                    for (; t < e.length; t++) {
                        if (e[t] === c || e[t] === u) "" === n ? n = e[t] : n !== e[t] || (n = "");
                        else if (">" === e[t] && "" === n) {
                            o = !0;
                            break
                        }
                        r += e[t]
                    }
                    return "" === n && {
                        value: r,
                        index: t,
                        tagClosed: o
                    }
                }
                const l = new RegExp("(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['\"])(([\\s\\S])*?)\\5)?", "g");

                function f(e, t) {
                    const r = n.getAllMatches(e, l),
                        o = {};
                    for (let e = 0; e < r.length; e++) {
                        if (0 === r[e][1].length) return h("InvalidAttr", "Attribute '" + r[e][2] + "' has no space in starting.", y(r[e]));
                        if (void 0 !== r[e][3] && void 0 === r[e][4]) return h("InvalidAttr", "Attribute '" + r[e][2] + "' is without value.", y(r[e]));
                        if (void 0 === r[e][3] && !t.allowBooleanAttributes) return h("InvalidAttr", "boolean attribute '" + r[e][2] + "' is not allowed.", y(r[e]));
                        const n = r[e][2];
                        if (!g(n)) return h("InvalidAttr", "Attribute '" + n + "' is an invalid name.", y(r[e]));
                        if (o.hasOwnProperty(n)) return h("InvalidAttr", "Attribute '" + n + "' is repeated.", y(r[e]));
                        o[n] = 1
                    }
                    return !0
                }

                function p(e, t) {
                    if (";" === e[++t]) return -1;
                    if ("#" === e[t]) return function(e, t) {
                        let r = /\d/;
                        for ("x" === e[t] && (t++, r = /[\da-fA-F]/); t < e.length; t++) {
                            if (";" === e[t]) return t;
                            if (!e[t].match(r)) break
                        }
                        return -1
                    }(e, ++t);
                    let r = 0;
                    for (; t < e.length; t++, r++)
                        if (!(e[t].match(/\w/) && r < 20)) {
                            if (";" === e[t]) break;
                            return -1
                        } return t
                }

                function h(e, t, r) {
                    return {
                        err: {
                            code: e,
                            msg: t,
                            line: r.line || r,
                            col: r.col
                        }
                    }
                }

                function g(e) {
                    return n.isName(e)
                }

                function m(e, t) {
                    const r = e.substring(0, t).split(/\r?\n/);
                    return {
                        line: r.length,
                        col: r[r.length - 1].length + 1
                    }
                }

                function y(e) {
                    return e.startIndex + e[1].length
                }
            },
            192: (e, t, r) => {
                "use strict";
                const n = r(592),
                    o = {
                        attributeNamePrefix: "@_",
                        attributesGroupName: !1,
                        textNodeName: "#text",
                        ignoreAttributes: !0,
                        cdataPropName: !1,
                        format: !1,
                        indentBy: "  ",
                        suppressEmptyNode: !1,
                        suppressUnpairedNode: !0,
                        suppressBooleanAttributes: !0,
                        tagValueProcessor: function(e, t) {
                            return t
                        },
                        attributeValueProcessor: function(e, t) {
                            return t
                        },
                        preserveOrder: !1,
                        commentPropName: !1,
                        unpairedTags: [],
                        entities: [{
                            regex: new RegExp("&", "g"),
                            val: "&amp;"
                        }, {
                            regex: new RegExp(">", "g"),
                            val: "&gt;"
                        }, {
                            regex: new RegExp("<", "g"),
                            val: "&lt;"
                        }, {
                            regex: new RegExp("'", "g"),
                            val: "&apos;"
                        }, {
                            regex: new RegExp('"', "g"),
                            val: "&quot;"
                        }],
                        processEntities: !0,
                        stopNodes: [],
                        transformTagName: !1
                    };

                function i(e) {
                    this.options = Object.assign({}, o, e), this.options.ignoreAttributes || this.options.attributesGroupName ? this.isAttribute = function() {
                        return !1
                    } : (this.attrPrefixLen = this.options.attributeNamePrefix.length, this.isAttribute = h), this.processTextOrObjNode = a, this.options.format ? (this.indentate = p, this.tagEndChar = ">\n", this.newLine = "\n") : (this.indentate = function() {
                        return ""
                    }, this.tagEndChar = ">", this.newLine = ""), this.options.suppressEmptyNode ? (this.buildTextNode = f, this.buildObjNode = u) : (this.buildTextNode = d, this.buildObjNode = c), this.buildTextValNode = d, this.buildObjectNode = c, this.replaceEntitiesValue = l, this.buildAttrPairStr = s
                }

                function s(e, t) {
                    return t = this.options.attributeValueProcessor(e, "" + t), t = this.replaceEntitiesValue(t), this.options.suppressBooleanAttributes && "true" === t ? " " + e : " " + e + '="' + t + '"'
                }

                function a(e, t, r) {
                    const n = this.j2x(e, r + 1);
                    return void 0 !== e[this.options.textNodeName] && 1 === Object.keys(e).length ? this.buildTextNode(e[this.options.textNodeName], t, n.attrStr, r) : this.buildObjNode(n.val, t, n.attrStr, r)
                }

                function c(e, t, r, n) {
                    let o = "</" + t + this.tagEndChar,
                        i = "";
                    return "?" === t[0] && (i = "?", o = ""), r && -1 === e.indexOf("<") ? this.indentate(n) + "<" + t + r + i + ">" + e + o : !1 !== this.options.commentPropName && t === this.options.commentPropName && 0 === i.length ? this.indentate(n) + `\x3c!--${e}--\x3e` + this.newLine : this.indentate(n) + "<" + t + r + i + this.tagEndChar + e + this.indentate(n) + o
                }

                function u(e, t, r, n) {
                    return "" !== e ? this.buildObjectNode(e, t, r, n) : "?" === t[0] ? this.indentate(n) + "<" + t + r + "?" + this.tagEndChar : this.indentate(n) + "<" + t + r + "/" + this.tagEndChar
                }

                function d(e, t, r, n) {
                    if (!1 !== this.options.cdataPropName && t === this.options.cdataPropName) return this.indentate(n) + `<![CDATA[${e}]]>` + this.newLine;
                    if (!1 !== this.options.commentPropName && t === this.options.commentPropName) return this.indentate(n) + `\x3c!--${e}--\x3e` + this.newLine;
                    {
                        let o = this.options.tagValueProcessor(t, e);
                        return o = this.replaceEntitiesValue(o), "" === o && -1 !== this.options.unpairedTags.indexOf(t) ? this.options.suppressUnpairedNode ? this.indentate(n) + "<" + t + this.tagEndChar : this.indentate(n) + "<" + t + "/" + this.tagEndChar : this.indentate(n) + "<" + t + r + ">" + o + "</" + t + this.tagEndChar
                    }
                }

                function l(e) {
                    if (e && e.length > 0 && this.options.processEntities)
                        for (let t = 0; t < this.options.entities.length; t++) {
                            const r = this.options.entities[t];
                            e = e.replace(r.regex, r.val)
                        }
                    return e
                }

                function f(e, t, r, n) {
                    return "" === e && -1 !== this.options.unpairedTags.indexOf(t) ? this.options.suppressUnpairedNode ? this.indentate(n) + "<" + t + this.tagEndChar : this.indentate(n) + "<" + t + "/" + this.tagEndChar : "" !== e ? this.buildTextValNode(e, t, r, n) : "?" === t[0] ? this.indentate(n) + "<" + t + r + "?" + this.tagEndChar : this.indentate(n) + "<" + t + r + "/" + this.tagEndChar
                }

                function p(e) {
                    return this.options.indentBy.repeat(e)
                }

                function h(e) {
                    return !!e.startsWith(this.options.attributeNamePrefix) && e.substr(this.attrPrefixLen)
                }
                i.prototype.build = function(e) {
                    return this.options.preserveOrder ? n(e, this.options) : (Array.isArray(e) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1 && (e = {
                        [this.options.arrayNodeName]: e
                    }), this.j2x(e, 0).val)
                }, i.prototype.j2x = function(e, t) {
                    let r = "",
                        n = "";
                    for (let o in e)
                        if (void 0 === e[o]);
                        else if (null === e[o]) "?" === o[0] ? n += this.indentate(t) + "<" + o + "?" + this.tagEndChar : n += this.indentate(t) + "<" + o + "/" + this.tagEndChar;
                    else if (e[o] instanceof Date) n += this.buildTextNode(e[o], o, "", t);
                    else if ("object" != typeof e[o]) {
                        const i = this.isAttribute(o);
                        if (i) r += this.buildAttrPairStr(i, "" + e[o]);
                        else if (o === this.options.textNodeName) {
                            let t = this.options.tagValueProcessor(o, "" + e[o]);
                            n += this.replaceEntitiesValue(t)
                        } else n += this.buildTextNode(e[o], o, "", t)
                    } else if (Array.isArray(e[o])) {
                        const r = e[o].length;
                        for (let i = 0; i < r; i++) {
                            const r = e[o][i];
                            void 0 === r || (null === r ? "?" === o[0] ? n += this.indentate(t) + "<" + o + "?" + this.tagEndChar : n += this.indentate(t) + "<" + o + "/" + this.tagEndChar : n += "object" == typeof r ? this.processTextOrObjNode(r, o, t) : this.buildTextNode(r, o, "", t))
                        }
                    } else if (this.options.attributesGroupName && o === this.options.attributesGroupName) {
                        const t = Object.keys(e[o]),
                            n = t.length;
                        for (let i = 0; i < n; i++) r += this.buildAttrPairStr(t[i], "" + e[o][t[i]])
                    } else n += this.processTextOrObjNode(e[o], o, t);
                    return {
                        attrStr: r,
                        val: n
                    }
                }, e.exports = i
            },
            592: e => {
                const t = "\n";

                function r(e, a, c, u) {
                    let d = "",
                        l = "";
                    a.format && a.indentBy.length > 0 && (l = t + "" + a.indentBy.repeat(u));
                    for (let t = 0; t < e.length; t++) {
                        const f = e[t],
                            p = n(f);
                        let h = "";
                        if (h = 0 === c.length ? p : `${c}.${p}`, p === a.textNodeName) {
                            let e = f[p];
                            i(h, a) || (e = a.tagValueProcessor(p, e), e = s(e, a)), d += l + e;
                            continue
                        }
                        if (p === a.cdataPropName) {
                            d += l + `<![CDATA[${f[p][0][a.textNodeName]}]]>`;
                            continue
                        }
                        if (p === a.commentPropName) {
                            d += l + `\x3c!--${f[p][0][a.textNodeName]}--\x3e`;
                            continue
                        }
                        if ("?" === p[0]) {
                            const e = o(f[":@"], a),
                                t = "?xml" === p ? "" : l;
                            let r = f[p][0][a.textNodeName];
                            r = 0 !== r.length ? " " + r : "", d += t + `<${p}${r}${e}?>`;
                            continue
                        }
                        let g = l + `<${p}${o(f[":@"],a)}`,
                            m = r(f[p], a, h, u + 1); - 1 !== a.unpairedTags.indexOf(p) ? a.suppressUnpairedNode ? d += g + ">" : d += g + "/>" : m && 0 !== m.length || !a.suppressEmptyNode ? d += g + `>${m}${l}</${p}>` : d += g + "/>"
                    }
                    return d
                }

                function n(e) {
                    const t = Object.keys(e);
                    for (let e = 0; e < t.length; e++) {
                        const r = t[e];
                        if (":@" !== r) return r
                    }
                }

                function o(e, t) {
                    let r = "";
                    if (e && !t.ignoreAttributes)
                        for (let n in e) {
                            let o = t.attributeValueProcessor(n, e[n]);
                            o = s(o, t), !0 === o && t.suppressBooleanAttributes ? r += ` ${n.substr(t.attributeNamePrefix.length)}` : r += ` ${n.substr(t.attributeNamePrefix.length)}="${o}"`
                        }
                    return r
                }

                function i(e, t) {
                    let r = (e = e.substr(0, e.length - t.textNodeName.length - 1)).substr(e.lastIndexOf(".") + 1);
                    for (let n in t.stopNodes)
                        if (t.stopNodes[n] === e || t.stopNodes[n] === "*." + r) return !0;
                    return !1
                }

                function s(e, t) {
                    if (e && e.length > 0 && t.processEntities)
                        for (let r = 0; r < t.entities.length; r++) {
                            const n = t.entities[r];
                            e = e.replace(n.regex, n.val)
                        }
                    return e
                }
                e.exports = function(e, t) {
                    return r(e, t, "", 0)
                }
            },
            780: e => {
                const t = RegExp("^\\s([a-zA-z0-0]+)[ \t](['\"])([^&]+)\\2");

                function r(e, r) {
                    const n = t.exec(e);
                    n && (r[n[1]] = {
                        regx: RegExp(`&${n[1]};`, "g"),
                        val: n[3]
                    })
                }
                e.exports = function(e, t) {
                    const n = {};
                    if ("O" !== e[t + 3] || "C" !== e[t + 4] || "T" !== e[t + 5] || "Y" !== e[t + 6] || "P" !== e[t + 7] || "E" !== e[t + 8]) throw new Error("Invalid Tag instead of DOCTYPE");
                    {
                        t += 9;
                        let o = 1,
                            i = !1,
                            s = !1,
                            a = !1,
                            c = "";
                        for (; t < e.length; t++)
                            if ("<" === e[t]) {
                                if (i && "!" === e[t + 1] && "E" === e[t + 2] && "N" === e[t + 3] && "T" === e[t + 4] && "I" === e[t + 5] && "T" === e[t + 6] && "Y" === e[t + 7]) t += 7, s = !0;
                                else if (i && "!" === e[t + 1] && "E" === e[t + 2] && "L" === e[t + 3] && "E" === e[t + 4] && "M" === e[t + 5] && "E" === e[t + 6] && "N" === e[t + 7] && "T" === e[t + 8]) t += 8;
                                else if (i && "!" === e[t + 1] && "A" === e[t + 2] && "T" === e[t + 3] && "T" === e[t + 4] && "L" === e[t + 5] && "I" === e[t + 6] && "S" === e[t + 7] && "T" === e[t + 8]) t += 8;
                                else if (i && "!" === e[t + 1] && "N" === e[t + 2] && "O" === e[t + 3] && "T" === e[t + 4] && "A" === e[t + 5] && "T" === e[t + 6] && "I" === e[t + 7] && "O" === e[t + 8] && "N" === e[t + 9]) t += 9;
                                else {
                                    if ("!" !== e[t + 1] || "-" !== e[t + 2] || "-" !== e[t + 3]) throw new Error("Invalid DOCTYPE");
                                    a = !0
                                }
                                o++, c = ""
                            } else if (">" === e[t]) {
                            if (a) {
                                if ("-" !== e[t - 1] || "-" !== e[t - 2]) throw new Error("Invalid XML comment in DOCTYPE");
                                a = !1
                            } else s && (r(c, n), s = !1);
                            if (o--, 0 === o) break
                        } else "[" === e[t] ? i = !0 : c += e[t];
                        if (0 !== o) throw new Error("Unclosed DOCTYPE")
                    }
                    return {
                        entities: n,
                        i: t
                    }
                }
            },
            745: (e, t) => {
                const r = {
                    preserveOrder: !1,
                    attributeNamePrefix: "@_",
                    attributesGroupName: !1,
                    textNodeName: "#text",
                    ignoreAttributes: !0,
                    removeNSPrefix: !1,
                    allowBooleanAttributes: !1,
                    parseTagValue: !0,
                    parseAttributeValue: !1,
                    trimValues: !0,
                    cdataPropName: !1,
                    numberParseOptions: {
                        hex: !0,
                        leadingZeros: !0
                    },
                    tagValueProcessor: function(e, t) {
                        return t
                    },
                    attributeValueProcessor: function(e, t) {
                        return t
                    },
                    stopNodes: [],
                    alwaysCreateTextNode: !1,
                    isArray: () => !1,
                    commentPropName: !1,
                    unpairedTags: [],
                    processEntities: !0,
                    htmlEntities: !1,
                    ignoreDeclaration: !1,
                    ignorePiTags: !1,
                    transformTagName: !1
                };
                t.buildOptions = function(e) {
                    return Object.assign({}, r, e)
                }, t.defaultOptions = r
            },
            78: (e, t, r) => {
                "use strict";
                const n = r(849),
                    o = r(311),
                    i = r(780),
                    s = r(153);
                "<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)".replace(/NAME/g, n.nameRegexp);

                function a(e) {
                    const t = Object.keys(e);
                    for (let r = 0; r < t.length; r++) {
                        const n = t[r];
                        this.lastEntities[n] = {
                            regex: new RegExp("&" + n + ";", "g"),
                            val: e[n]
                        }
                    }
                }

                function c(e, t, r, n, o, i, s) {
                    if (void 0 !== e && (this.options.trimValues && !n && (e = e.trim()), e.length > 0)) {
                        s || (e = this.replaceEntitiesValue(e));
                        const n = this.options.tagValueProcessor(t, e, r, o, i);
                        if (null == n) return e;
                        if (typeof n != typeof e || n !== e) return n;
                        if (this.options.trimValues) return w(e, this.options.parseTagValue, this.options.numberParseOptions);
                        return e.trim() === e ? w(e, this.options.parseTagValue, this.options.numberParseOptions) : e
                    }
                }

                function u(e) {
                    if (this.options.removeNSPrefix) {
                        const t = e.split(":"),
                            r = "/" === e.charAt(0) ? "/" : "";
                        if ("xmlns" === t[0]) return "";
                        2 === t.length && (e = r + t[1])
                    }
                    return e
                }
                const d = new RegExp("([^\\s=]+)\\s*(=\\s*(['\"])([\\s\\S]*?)\\3)?", "gm");

                function l(e, t) {
                    if (!this.options.ignoreAttributes && "string" == typeof e) {
                        const r = n.getAllMatches(e, d),
                            o = r.length,
                            i = {};
                        for (let e = 0; e < o; e++) {
                            const n = this.resolveNameSpace(r[e][1]);
                            let o = r[e][4];
                            const s = this.options.attributeNamePrefix + n;
                            if (n.length)
                                if (void 0 !== o) {
                                    this.options.trimValues && (o = o.trim()), o = this.replaceEntitiesValue(o);
                                    const e = this.options.attributeValueProcessor(n, o, t);
                                    i[s] = null == e ? o : typeof e != typeof o || e !== o ? e : w(o, this.options.parseAttributeValue, this.options.numberParseOptions)
                                } else this.options.allowBooleanAttributes && (i[s] = !0)
                        }
                        if (!Object.keys(i).length) return;
                        if (this.options.attributesGroupName) {
                            const e = {};
                            return e[this.options.attributesGroupName] = i, e
                        }
                        return i
                    }
                }
                const f = function(e) {
                        e = e.replace(/\r\n?/g, "\n");
                        const t = new o("!xml");
                        let r = t,
                            n = "",
                            s = "";
                        for (let a = 0; a < e.length; a++) {
                            if ("<" === e[a])
                                if ("/" === e[a + 1]) {
                                    const t = m(e, ">", a, "Closing Tag is not closed.");
                                    let o = e.substring(a + 2, t).trim();
                                    if (this.options.removeNSPrefix) {
                                        const e = o.indexOf(":"); - 1 !== e && (o = o.substr(e + 1))
                                    }
                                    this.options.transformTagName && (o = this.options.transformTagName(o)), r && (n = this.saveTextToParentTag(n, r, s)), s = s.substr(0, s.lastIndexOf(".")), r = this.tagsNodeStack.pop(), n = "", a = t
                                } else if ("?" === e[a + 1]) {
                                let t = y(e, a, !1, "?>");
                                if (!t) throw new Error("Pi Tag is not closed.");
                                if (n = this.saveTextToParentTag(n, r, s), this.options.ignoreDeclaration && "?xml" === t.tagName || this.options.ignorePiTags);
                                else {
                                    const e = new o(t.tagName);
                                    e.add(this.options.textNodeName, ""), t.tagName !== t.tagExp && t.attrExpPresent && (e[":@"] = this.buildAttributesMap(t.tagExp, s)), r.addChild(e)
                                }
                                a = t.closeIndex + 1
                            } else if ("!--" === e.substr(a + 1, 3)) {
                                const t = m(e, "--\x3e", a + 4, "Comment is not closed.");
                                if (this.options.commentPropName) {
                                    const o = e.substring(a + 4, t - 2);
                                    n = this.saveTextToParentTag(n, r, s), r.add(this.options.commentPropName, [{
                                        [this.options.textNodeName]: o
                                    }])
                                }
                                a = t
                            } else if ("!D" === e.substr(a + 1, 2)) {
                                const t = i(e, a);
                                this.docTypeEntities = t.entities, a = t.i
                            } else if ("![" === e.substr(a + 1, 2)) {
                                const t = m(e, "]]>", a, "CDATA is not closed.") - 2,
                                    o = e.substring(a + 9, t);
                                if (n = this.saveTextToParentTag(n, r, s), this.options.cdataPropName) r.add(this.options.cdataPropName, [{
                                    [this.options.textNodeName]: o
                                }]);
                                else {
                                    let e = this.parseTextData(o, r.tagname, s, !0, !1, !0);
                                    null == e && (e = ""), r.add(this.options.textNodeName, e)
                                }
                                a = t + 2
                            } else {
                                let i = y(e, a, this.options.removeNSPrefix),
                                    c = i.tagName,
                                    u = i.tagExp,
                                    d = i.attrExpPresent,
                                    l = i.closeIndex;
                                this.options.transformTagName && (c = this.options.transformTagName(c)), r && n && "!xml" !== r.tagname && (n = this.saveTextToParentTag(n, r, s, !1)), c !== t.tagname && (s += s ? "." + c : c);
                                const f = r;
                                if (f && -1 !== this.options.unpairedTags.indexOf(f.tagname) && (r = this.tagsNodeStack.pop()), this.isItStopNode(this.options.stopNodes, s, c)) {
                                    let t = "";
                                    if (u.length > 0 && u.lastIndexOf("/") === u.length - 1) a = i.closeIndex;
                                    else if (-1 !== this.options.unpairedTags.indexOf(c)) a = i.closeIndex;
                                    else {
                                        const r = this.readStopNodeData(e, c, l + 1);
                                        if (!r) throw new Error(`Unexpected end of ${c}`);
                                        a = r.i, t = r.tagContent
                                    }
                                    const n = new o(c);
                                    c !== u && d && (n[":@"] = this.buildAttributesMap(u, s)), t && (t = this.parseTextData(t, c, s, !0, d, !0, !0)), s = s.substr(0, s.lastIndexOf(".")), n.add(this.options.textNodeName, t), r.addChild(n)
                                } else {
                                    if (u.length > 0 && u.lastIndexOf("/") === u.length - 1) {
                                        "/" === c[c.length - 1] ? (c = c.substr(0, c.length - 1), u = c) : u = u.substr(0, u.length - 1), this.options.transformTagName && (c = this.options.transformTagName(c));
                                        const e = new o(c);
                                        c !== u && d && (e[":@"] = this.buildAttributesMap(u, s)), s = s.substr(0, s.lastIndexOf(".")), r.addChild(e)
                                    } else {
                                        const e = new o(c);
                                        this.tagsNodeStack.push(r), c !== u && d && (e[":@"] = this.buildAttributesMap(u, s)), r.addChild(e), r = e
                                    }
                                    n = "", a = l
                                }
                            } else n += e[a]
                        }
                        return t.child
                    },
                    p = function(e) {
                        if (this.options.processEntities) {
                            for (let t in this.docTypeEntities) {
                                const r = this.docTypeEntities[t];
                                e = e.replace(r.regx, r.val)
                            }
                            for (let t in this.lastEntities) {
                                const r = this.lastEntities[t];
                                e = e.replace(r.regex, r.val)
                            }
                            if (this.options.htmlEntities)
                                for (let t in this.htmlEntities) {
                                    const r = this.htmlEntities[t];
                                    e = e.replace(r.regex, r.val)
                                }
                            e = e.replace(this.ampEntity.regex, this.ampEntity.val)
                        }
                        return e
                    };

                function h(e, t, r, n) {
                    return e && (void 0 === n && (n = 0 === Object.keys(t.child).length), void 0 !== (e = this.parseTextData(e, t.tagname, r, !1, !!t[":@"] && 0 !== Object.keys(t[":@"]).length, n)) && "" !== e && t.add(this.options.textNodeName, e), e = ""), e
                }

                function g(e, t, r) {
                    const n = "*." + r;
                    for (const r in e) {
                        const o = e[r];
                        if (n === o || t === o) return !0
                    }
                    return !1
                }

                function m(e, t, r, n) {
                    const o = e.indexOf(t, r);
                    if (-1 === o) throw new Error(n);
                    return o + t.length - 1
                }

                function y(e, t, r, n = ">") {
                    const o = function(e, t, r = ">") {
                        let n, o = "";
                        for (let i = t; i < e.length; i++) {
                            let t = e[i];
                            if (n) t === n && (n = "");
                            else if ('"' === t || "'" === t) n = t;
                            else if (t === r[0]) {
                                if (!r[1]) return {
                                    data: o,
                                    index: i
                                };
                                if (e[i + 1] === r[1]) return {
                                    data: o,
                                    index: i
                                }
                            } else "\t" === t && (t = " ");
                            o += t
                        }
                    }(e, t + 1, n);
                    if (!o) return;
                    let i = o.data;
                    const s = o.index,
                        a = i.search(/\s/);
                    let c = i,
                        u = !0;
                    if (-1 !== a && (c = i.substr(0, a).replace(/\s\s*$/, ""), i = i.substr(a + 1)), r) {
                        const e = c.indexOf(":"); - 1 !== e && (c = c.substr(e + 1), u = c !== o.data.substr(e + 1))
                    }
                    return {
                        tagName: c,
                        tagExp: i,
                        closeIndex: s,
                        attrExpPresent: u
                    }
                }

                function b(e, t, r) {
                    const n = r;
                    let o = 1;
                    for (; r < e.length; r++)
                        if ("<" === e[r])
                            if ("/" === e[r + 1]) {
                                const i = m(e, ">", r, `${t} is not closed`);
                                if (e.substring(r + 2, i).trim() === t && (o--, 0 === o)) return {
                                    tagContent: e.substring(n, r),
                                    i
                                };
                                r = i
                            } else if ("?" === e[r + 1]) {
                        r = m(e, "?>", r + 1, "StopNode is not closed.")
                    } else if ("!--" === e.substr(r + 1, 3)) {
                        r = m(e, "--\x3e", r + 3, "StopNode is not closed.")
                    } else if ("![" === e.substr(r + 1, 2)) {
                        r = m(e, "]]>", r, "StopNode is not closed.") - 2
                    } else {
                        const n = y(e, r, ">");
                        if (n) {
                            (n && n.tagName) === t && "/" !== n.tagExp[n.tagExp.length - 1] && o++, r = n.closeIndex
                        }
                    }
                }

                function w(e, t, r) {
                    if (t && "string" == typeof e) {
                        const t = e.trim();
                        return "true" === t || "false" !== t && s(e, r)
                    }
                    return n.isExist(e) ? e : ""
                }
                e.exports = class {
                    constructor(e) {
                        this.options = e, this.currentNode = null, this.tagsNodeStack = [], this.docTypeEntities = {}, this.lastEntities = {
                            apos: {
                                regex: /&(apos|#39|#x27);/g,
                                val: "'"
                            },
                            gt: {
                                regex: /&(gt|#62|#x3E);/g,
                                val: ">"
                            },
                            lt: {
                                regex: /&(lt|#60|#x3C);/g,
                                val: "<"
                            },
                            quot: {
                                regex: /&(quot|#34|#x22);/g,
                                val: '"'
                            }
                        }, this.ampEntity = {
                            regex: /&(amp|#38|#x26);/g,
                            val: "&"
                        }, this.htmlEntities = {
                            space: {
                                regex: /&(nbsp|#160);/g,
                                val: " "
                            },
                            cent: {
                                regex: /&(cent|#162);/g,
                                val: "¢"
                            },
                            pound: {
                                regex: /&(pound|#163);/g,
                                val: "£"
                            },
                            yen: {
                                regex: /&(yen|#165);/g,
                                val: "¥"
                            },
                            euro: {
                                regex: /&(euro|#8364);/g,
                                val: "€"
                            },
                            copyright: {
                                regex: /&(copy|#169);/g,
                                val: "©"
                            },
                            reg: {
                                regex: /&(reg|#174);/g,
                                val: "®"
                            },
                            inr: {
                                regex: /&(inr|#8377);/g,
                                val: "₹"
                            }
                        }, this.addExternalEntities = a, this.parseXml = f, this.parseTextData = c, this.resolveNameSpace = u, this.buildAttributesMap = l, this.isItStopNode = g, this.replaceEntitiesValue = p, this.readStopNodeData = b, this.saveTextToParentTag = h
                    }
                }
            },
            844: (e, t, r) => {
                const {
                    buildOptions: n
                } = r(745), o = r(78), {
                    prettify: i
                } = r(997), s = r(501);
                e.exports = class {
                    constructor(e) {
                        this.externalEntities = {}, this.options = n(e)
                    }
                    parse(e, t) {
                        if ("string" == typeof e);
                        else {
                            if (!e.toString) throw new Error("XML data is accepted in String or Bytes[] form.");
                            e = e.toString()
                        }
                        if (t) {
                            !0 === t && (t = {});
                            const r = s.validate(e, t);
                            if (!0 !== r) throw Error(`${r.err.msg}:${r.err.line}:${r.err.col}`)
                        }
                        const r = new o(this.options);
                        r.addExternalEntities(this.externalEntities);
                        const n = r.parseXml(e);
                        return this.options.preserveOrder || void 0 === n ? n : i(n, this.options)
                    }
                    addEntity(e, t) {
                        if (-1 !== t.indexOf("&")) throw new Error("Entity value can't have '&'");
                        if (-1 !== e.indexOf("&") || -1 !== e.indexOf(";")) throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
                        if ("&" === t) throw new Error("An entity with value '&' is not permitted");
                        this.externalEntities[e] = t
                    }
                }
            },
            997: (e, t) => {
                "use strict";

                function r(e, t, s) {
                    let a;
                    const c = {};
                    for (let u = 0; u < e.length; u++) {
                        const d = e[u],
                            l = n(d);
                        let f = "";
                        if (f = void 0 === s ? l : s + "." + l, l === t.textNodeName) void 0 === a ? a = d[l] : a += "" + d[l];
                        else {
                            if (void 0 === l) continue;
                            if (d[l]) {
                                let e = r(d[l], t, f);
                                const n = i(e, t);
                                d[":@"] ? o(e, d[":@"], f, t) : 1 !== Object.keys(e).length || void 0 === e[t.textNodeName] || t.alwaysCreateTextNode ? 0 === Object.keys(e).length && (t.alwaysCreateTextNode ? e[t.textNodeName] = "" : e = "") : e = e[t.textNodeName], void 0 !== c[l] && c.hasOwnProperty(l) ? (Array.isArray(c[l]) || (c[l] = [c[l]]), c[l].push(e)) : t.isArray(l, f, n) ? c[l] = [e] : c[l] = e
                            }
                        }
                    }
                    return "string" == typeof a ? a.length > 0 && (c[t.textNodeName] = a) : void 0 !== a && (c[t.textNodeName] = a), c
                }

                function n(e) {
                    const t = Object.keys(e);
                    for (let e = 0; e < t.length; e++) {
                        const r = t[e];
                        if (":@" !== r) return r
                    }
                }

                function o(e, t, r, n) {
                    if (t) {
                        const o = Object.keys(t),
                            i = o.length;
                        for (let s = 0; s < i; s++) {
                            const i = o[s];
                            n.isArray(i, r + "." + i, !0, !0) ? e[i] = [t[i]] : e[i] = t[i]
                        }
                    }
                }

                function i(e, t) {
                    const r = Object.keys(e).length;
                    return !!(0 === r || 1 === r && e[t.textNodeName])
                }
                t.prettify = function(e, t) {
                    return r(e, t)
                }
            },
            311: e => {
                "use strict";
                e.exports = class {
                    constructor(e) {
                        this.tagname = e, this.child = [], this[":@"] = {}
                    }
                    add(e, t) {
                        this.child.push({
                            [e]: t
                        })
                    }
                    addChild(e) {
                        e[":@"] && Object.keys(e[":@"]).length > 0 ? this.child.push({
                            [e.tagname]: e.child,
                            ":@": e[":@"]
                        }) : this.child.push({
                            [e.tagname]: e.child
                        })
                    }
                }
            },
            153: e => {
                const t = /^[-+]?0x[a-fA-F0-9]+$/,
                    r = /^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;
                !Number.parseInt && window.parseInt && (Number.parseInt = window.parseInt), !Number.parseFloat && window.parseFloat && (Number.parseFloat = window.parseFloat);
                const n = {
                    hex: !0,
                    leadingZeros: !0,
                    decimalPoint: ".",
                    eNotation: !0
                };
                e.exports = function(e, o = {}) {
                    if (o = Object.assign({}, n, o), !e || "string" != typeof e) return e;
                    let i = e.trim();
                    if (void 0 !== o.skipLike && o.skipLike.test(i)) return e;
                    if (o.hex && t.test(i)) return Number.parseInt(i, 16);
                    {
                        const t = r.exec(i);
                        if (t) {
                            const r = t[1],
                                n = t[2];
                            let s = function(e) {
                                if (e && -1 !== e.indexOf(".")) return "." === (e = e.replace(/0+$/, "")) ? e = "0" : "." === e[0] ? e = "0" + e : "." === e[e.length - 1] && (e = e.substr(0, e.length - 1)), e;
                                return e
                            }(t[3]);
                            const a = t[4] || t[6];
                            if (!o.leadingZeros && n.length > 0 && r && "." !== i[2]) return e;
                            if (!o.leadingZeros && n.length > 0 && !r && "." !== i[1]) return e;
                            {
                                const t = Number(i),
                                    c = "" + t;
                                return -1 !== c.search(/[eE]/) || a ? o.eNotation ? t : e : -1 !== i.indexOf(".") ? "0" === c && "" === s || c === s || r && c === "-" + s ? t : e : n ? s === c || r + s === c ? t : e : i === c || i === r + c ? t : e
                            }
                        }
                        return e
                    }
                }
            }
        },
        t = {};

    function r(n) {
        var o = t[n];
        if (void 0 !== o) return o.exports;
        var i = t[n] = {
            exports: {}
        };
        return e[n].call(i.exports, i, i.exports, r), i.exports
    }
    r.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return r.d(t, {
            a: t
        }), t
    }, r.d = (e, t) => {
        for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
        })
    }, r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), r.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    };
    var n = {};
    (() => {
        "use strict";
        r.r(n), r.d(n, {
            asyncSESSend: () => Di
        });
        var e = {};
        r.r(e), r.d(e, {
            isVirtualHostableS3Bucket: () => rn,
            parseArn: () => nn,
            partition: () => Kr
        });
        var t = {};
        r.r(t), r.d(t, {
            aws: () => e,
            booleanEquals: () => on,
            getAttr: () => sn,
            isSet: () => an,
            isValidHostLabel: () => tn,
            not: () => cn,
            parseURL: () => pn,
            stringEquals: () => hn,
            substring: () => gn,
            uriEncode: () => mn
        });
        const o = (e, t) => (r, n) => async n => {
            const {
                response: o
            } = await r(n);
            try {
                return {
                    response: o,
                    output: await t(o, e)
                }
            } catch (e) {
                throw Object.defineProperty(e, "$response", {
                    value: o
                }), e
            }
        }, i = (e, t) => (r, n) => async o => {
            const i = n.endpointV2?.url && e.urlParser ? async () => e.urlParser(n.endpointV2.url): e.endpoint;
            if (!i) throw new Error("No valid endpoint provider available.");
            const s = await t(o.input, {
                ...e,
                endpoint: i
            });
            return r({
                ...o,
                request: s
            })
        }, s = {
            name: "deserializerMiddleware",
            step: "deserialize",
            tags: ["DESERIALIZER"],
            override: !0
        }, a = {
            name: "serializerMiddleware",
            step: "serialize",
            tags: ["SERIALIZER"],
            override: !0
        };

        function c(e, t, r) {
            return {
                applyToStack: n => {
                    n.add(o(e, r), s), n.add(i(e, t), a)
                }
            }
        }
        const u = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/,
            d = /(\d+\.){3}\d+/,
            l = /\.\./,
            f = e => u.test(e) && !d.test(e) && !l.test(e),
            p = e => {
                const [t, r, n, o, i, s] = e.split(":"), a = "arn" === t && e.split(":").length >= 6, c = 5 === [t, r, n, i, s].filter(Boolean).length;
                if (a && !c) throw new Error(`Invalid ARN: ${e} was an invalid ARN.`);
                return !!("arn" === t && r && n && i && s)
            },
            h = (e, t, r) => {
                const n = async () => {
                    const n = r[e] ?? r[t];
                    return "function" == typeof n ? n() : n
                };
                return "endpoint" === e || "endpoint" === t ? async () => {
                    const e = await n();
                    if (e && "object" == typeof e) {
                        if ("url" in e) return e.url.href;
                        if ("hostname" in e) {
                            const {
                                protocol: t,
                                hostname: r,
                                port: n,
                                path: o
                            } = e;
                            return `${t}//${r}${n?":"+n:""}${o}`
                        }
                    }
                    return e
                }: n
            },
            g = async (e, t, r) => {
                const n = {},
                    o = t?.getEndpointParameterInstructions?.() || {};
                for (const [t, i] of Object.entries(o)) switch (i.type) {
                    case "staticContextParams":
                        n[t] = i.value;
                        break;
                    case "contextParams":
                        n[t] = e[i.name];
                        break;
                    case "clientContextParams":
                    case "builtInParams":
                        n[t] = await h(i.name, t, r)();
                        break;
                    default:
                        throw new Error("Unrecognized endpoint parameter instruction: " + JSON.stringify(i))
                }
                return 0 === Object.keys(o).length && Object.assign(n, r), "s3" === String(r.serviceId).toLowerCase() && await (async e => {
                    const t = e?.Bucket || "";
                    if ("string" == typeof e.Bucket && (e.Bucket = t.replace(/#/g, encodeURIComponent("#")).replace(/\?/g, encodeURIComponent("?"))), p(t)) {
                        if (!0 === e.ForcePathStyle) throw new Error("Path-style addressing cannot be used with ARN buckets")
                    } else(!f(t) || -1 !== t.indexOf(".") && !String(e.Endpoint).startsWith("http:") || t.toLowerCase() !== t || t.length < 3) && (e.ForcePathStyle = !0);
                    return e.DisableMultiRegionAccessPoints && (e.disableMultiRegionAccessPoints = !0, e.DisableMRAP = !0), e
                })(n), n
            }, m = ({
                config: e,
                instructions: t
            }) => (r, n) => async o => {
                const i = await (async (e, t, r, n) => {
                    const o = await g(e, t, r);
                    if ("function" != typeof r.endpointProvider) throw new Error("config.endpointProvider is not set.");
                    return r.endpointProvider(o, n)
                })(o.input, {
                    getEndpointParameterInstructions: () => t
                }, {
                    ...e
                }, n);
                n.endpointV2 = i, n.authSchemes = i.properties?.authSchemes;
                const s = n.authSchemes?.[0];
                return s && (n.signing_region = s.signingRegion, n.signing_service = s.signingName), r({
                    ...o
                })
            }, y = {
                step: "serialize",
                tags: ["ENDPOINT_PARAMETERS", "ENDPOINT_V2", "ENDPOINT"],
                name: "endpointV2Middleware",
                override: !0,
                relation: "before",
                toMiddleware: a.name
            }, b = (e, t) => ({
                applyToStack: r => {
                    r.addRelativeTo(m({
                        config: e,
                        instructions: t
                    }), y)
                }
            }), w = e => {
                if ("function" == typeof e) return e;
                const t = Promise.resolve(e);
                return () => t
            };
        const v = e => {
                if ("string" == typeof e) return v(new URL(e));
                const {
                    hostname: t,
                    pathname: r,
                    port: n,
                    protocol: o,
                    search: i
                } = e;
                let s;
                return i && (s = function(e) {
                    const t = {};
                    if (e = e.replace(/^\?/, ""))
                        for (const r of e.split("&")) {
                            let [e, n = null] = r.split("=");
                            e = decodeURIComponent(e), n && (n = decodeURIComponent(n)), e in t ? Array.isArray(t[e]) ? t[e].push(n) : t[e] = [t[e], n] : t[e] = n
                        }
                    return t
                }(i)), {
                    hostname: t,
                    port: n ? parseInt(n) : void 0,
                    protocol: o,
                    path: r,
                    query: s
                }
            },
            S = e => {
                const t = e.tls ?? !0,
                    {
                        endpoint: r
                    } = e,
                    n = null != r ? async () => (e => "object" == typeof e ? "url" in e ? v(e.url) : e : v(e))(await w(r)()): void 0, o = !!r;
                return {
                    ...e,
                    endpoint: n,
                    tls: t,
                    isCustomEndpoint: o,
                    useDualstackEndpoint: w(e.useDualstackEndpoint ?? !1),
                    useFipsEndpoint: w(e.useFipsEndpoint ?? !1)
                }
            };
        class E {
            trace() {}
            debug() {}
            info() {}
            warn() {}
            error() {}
        }
        const x = () => {
                let e = [],
                    t = [];
                const r = new Set,
                    n = r => (e.forEach((e => {
                        r.add(e.middleware, {
                            ...e
                        })
                    })), t.forEach((e => {
                        r.addRelativeTo(e.middleware, {
                            ...e
                        })
                    })), r),
                    o = e => {
                        const t = [];
                        return e.before.forEach((e => {
                            0 === e.before.length && 0 === e.after.length ? t.push(e) : t.push(...o(e))
                        })), t.push(e), e.after.reverse().forEach((e => {
                            0 === e.before.length && 0 === e.after.length ? t.push(e) : t.push(...o(e))
                        })), t
                    },
                    i = (r = !1) => {
                        const n = [],
                            i = [],
                            s = {};
                        e.forEach((e => {
                            const t = {
                                ...e,
                                before: [],
                                after: []
                            };
                            t.name && (s[t.name] = t), n.push(t)
                        })), t.forEach((e => {
                            const t = {
                                ...e,
                                before: [],
                                after: []
                            };
                            t.name && (s[t.name] = t), i.push(t)
                        })), i.forEach((e => {
                            if (e.toMiddleware) {
                                const t = s[e.toMiddleware];
                                if (void 0 === t) {
                                    if (r) return;
                                    throw new Error(`${e.toMiddleware} is not found when adding ${e.name||"anonymous"} middleware ${e.relation} ${e.toMiddleware}`)
                                }
                                "after" === e.relation && t.after.push(e), "before" === e.relation && t.before.push(e)
                            }
                        }));
                        const a = (c = n, c.sort(((e, t) => P[t.step] - P[e.step] || A[t.priority || "normal"] - A[e.priority || "normal"]))).map(o).reduce(((e, t) => (e.push(...t), e)), []);
                        var c;
                        return a
                    },
                    s = {
                        add: (t, n = {}) => {
                            const {
                                name: o,
                                override: i
                            } = n, s = {
                                step: "initialize",
                                priority: "normal",
                                middleware: t,
                                ...n
                            };
                            if (o) {
                                if (r.has(o)) {
                                    if (!i) throw new Error(`Duplicate middleware name '${o}'`);
                                    const t = e.findIndex((e => e.name === o)),
                                        r = e[t];
                                    if (r.step !== s.step || r.priority !== s.priority) throw new Error(`"${o}" middleware with ${r.priority} priority in ${r.step} step cannot be overridden by same-name middleware with ${s.priority} priority in ${s.step} step.`);
                                    e.splice(t, 1)
                                }
                                r.add(o)
                            }
                            e.push(s)
                        },
                        addRelativeTo: (e, n) => {
                            const {
                                name: o,
                                override: i
                            } = n, s = {
                                middleware: e,
                                ...n
                            };
                            if (o) {
                                if (r.has(o)) {
                                    if (!i) throw new Error(`Duplicate middleware name '${o}'`);
                                    const e = t.findIndex((e => e.name === o)),
                                        r = t[e];
                                    if (r.toMiddleware !== s.toMiddleware || r.relation !== s.relation) throw new Error(`"${o}" middleware ${r.relation} "${r.toMiddleware}" middleware cannot be overridden by same-name middleware ${s.relation} "${s.toMiddleware}" middleware.`);
                                    t.splice(e, 1)
                                }
                                r.add(o)
                            }
                            t.push(s)
                        },
                        clone: () => n(x()),
                        use: e => {
                            e.applyToStack(s)
                        },
                        remove: n => "string" == typeof n ? (n => {
                            let o = !1;
                            const i = e => !e.name || e.name !== n || (o = !0, r.delete(n), !1);
                            return e = e.filter(i), t = t.filter(i), o
                        })(n) : (n => {
                            let o = !1;
                            const i = e => e.middleware !== n || (o = !0, e.name && r.delete(e.name), !1);
                            return e = e.filter(i), t = t.filter(i), o
                        })(n),
                        removeByTag: n => {
                            let o = !1;
                            const i = e => {
                                const {
                                    tags: t,
                                    name: i
                                } = e;
                                return !t || !t.includes(n) || (i && r.delete(i), o = !0, !1)
                            };
                            return e = e.filter(i), t = t.filter(i), o
                        },
                        concat: e => {
                            const t = n(x());
                            return t.use(e), t
                        },
                        applyToStack: n,
                        identify: () => i(!0).map((e => e.name + ": " + (e.tags || []).join(","))),
                        resolve: (e, t) => {
                            for (const r of i().map((e => e.middleware)).reverse()) e = r(e, t);
                            return e
                        }
                    };
                return s
            },
            P = {
                initialize: 5,
                serialize: 4,
                build: 3,
                finalizeRequest: 2,
                deserialize: 1
            },
            A = {
                high: 3,
                normal: 2,
                low: 1
            };
        class _ {
            constructor(e) {
                this.middlewareStack = x(), this.config = e
            }
            send(e, t, r) {
                const n = "function" != typeof t ? t : void 0,
                    o = "function" == typeof t ? t : r,
                    i = e.resolveMiddleware(this.middlewareStack, this.config, n);
                if (!o) return i(e).then((e => e.output));
                i(e).then((e => o(null, e.output)), (e => o(e))).catch((() => {}))
            }
            destroy() {
                this.config.requestHandler.destroy && this.config.requestHandler.destroy()
            }
        }
        class O {
            constructor() {
                this.middlewareStack = x()
            }
        }
        const T = e => {
                if (null != e) {
                    if ("string" == typeof e) {
                        const t = parseFloat(e);
                        if (!Number.isNaN(t)) return String(t) !== String(e) && j.warn(k(`Expected number but observed string: ${e}`)), t
                    }
                    if ("number" == typeof e) return e;
                    throw new TypeError(`Expected number, got ${typeof e}: ${e}`)
                }
            },
            R = (Math.ceil(2 ** 127 * (2 - 2 ** -23)), (e, t) => {
                if (null == e) {
                    if (t) throw new TypeError(`Expected a non-null value for ${t}`);
                    throw new TypeError("Expected a non-null value")
                }
                return e
            }),
            M = e => {
                if (null != e) {
                    if ("string" == typeof e) return e;
                    if (["boolean", "number", "bigint"].includes(typeof e)) return j.warn(k(`Expected string, got ${typeof e}: ${e}`)), String(e);
                    throw new TypeError(`Expected string, got ${typeof e}: ${e}`)
                }
            },
            N = e => T("string" == typeof e ? I(e) : e),
            C = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g,
            I = e => {
                const t = e.match(C);
                if (null === t || t[0].length !== e.length) throw new TypeError("Expected real number, got implicit NaN");
                return parseFloat(e)
            },
            k = e => String(new TypeError(e).stack || e).split("\n").slice(0, 5).filter((e => !e.includes("stackTraceWarning"))).join("\n"),
            j = {
                warn: console.warn
            };
        const F = e => {
            if (null == e) return;
            let t;
            if ("number" == typeof e) t = e;
            else {
                if ("string" != typeof e) throw new TypeError("Epoch timestamps must be expressed as floating point numbers or their string representation");
                t = N(e)
            }
            if (Number.isNaN(t) || t === 1 / 0 || t === -1 / 0) throw new TypeError("Epoch timestamps must be valid, non-Infinite, non-NaN numerics");
            return new Date(Math.round(1e3 * t))
        };
        class D extends Error {
            constructor(e) {
                super(e.message), Object.setPrototypeOf(this, D.prototype), this.name = e.name, this.$fault = e.$fault, this.$metadata = e.$metadata
            }
        }
        const $ = (e, t = {}) => {
                Object.entries(t).filter((([, e]) => void 0 !== e)).forEach((([t, r]) => {
                    null != e[t] && "" !== e[t] || (e[t] = r)
                }));
                const r = e.message || e.Message || "UnknownError";
                return e.message = r, delete e.Message, e
            },
            L = ({
                output: e,
                parsedBody: t,
                exceptionCtor: r,
                errorCode: n
            }) => {
                const o = B(e),
                    i = o.httpStatusCode ? o.httpStatusCode + "" : void 0,
                    s = new r({
                        name: t.code || t.Code || n || i || "UnknownError",
                        $fault: "client",
                        $metadata: o
                    });
                throw $(s, t)
            },
            B = e => ({
                httpStatusCode: e.statusCode,
                requestId: e.headers["x-amzn-requestid"] ?? e.headers["x-amzn-request-id"] ?? e.headers["x-amz-request-id"],
                extendedRequestId: e.headers["x-amz-id-2"],
                cfId: e.headers["x-amz-cf-id"]
            }),
            U = e => {
                switch (e) {
                    case "standard":
                    case "cross-region":
                        return {
                            retryMode: "standard", connectionTimeout: 3100
                        };
                    case "in-region":
                        return {
                            retryMode: "standard", connectionTimeout: 1100
                        };
                    case "mobile":
                        return {
                            retryMode: "standard", connectionTimeout: 3e4
                        };
                    default:
                        return {}
                }
            };

        function q(e) {
            return encodeURIComponent(e).replace(/[!'()*]/g, (function(e) {
                return "%" + e.charCodeAt(0).toString(16).toUpperCase()
            }))
        }
        const z = e => {
                const t = "#text";
                for (const r in e) e.hasOwnProperty(r) && void 0 !== e[r][t] ? e[r] = e[r][t] : "object" == typeof e[r] && null !== e[r] && (e[r] = z(e[r]));
                return e
            },
            H = function() {
                const e = Object.getPrototypeOf(this).constructor,
                    t = new(Function.bind.apply(String, [null, ...arguments]));
                return Object.setPrototypeOf(t, e.prototype), t
            };
        H.prototype = Object.create(String.prototype, {
            constructor: {
                value: H,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), Object.setPrototypeOf(H, String);
        class V extends D {
            constructor(e) {
                super(e), Object.setPrototypeOf(this, V.prototype)
            }
        }
        class G extends V {
            constructor(e) {
                super({
                    name: "AccountSendingPausedException",
                    $fault: "client",
                    ...e
                }), this.name = "AccountSendingPausedException", this.$fault = "client", Object.setPrototypeOf(this, G.prototype)
            }
        }
        var W, K, Z, X, Y, Q, J, ee, te, re, ne, oe;
        ! function(e) {
            e.RejectMessage = "RejectMessage", e.UseDefaultValue = "UseDefaultValue"
        }(W || (W = {})),
        function(e) {
            e.ContentRejected = "ContentRejected", e.DoesNotExist = "DoesNotExist", e.ExceededQuota = "ExceededQuota", e.MessageTooLarge = "MessageTooLarge", e.TemporaryFailure = "TemporaryFailure", e.Undefined = "Undefined"
        }(K || (K = {})),
        function(e) {
            e.DELAYED = "delayed", e.DELIVERED = "delivered", e.EXPANDED = "expanded", e.FAILED = "failed", e.RELAYED = "relayed"
        }(Z || (Z = {})),
        function(e) {
            e.AccountDailyQuotaExceeded = "AccountDailyQuotaExceeded", e.AccountSendingPaused = "AccountSendingPaused", e.AccountSuspended = "AccountSuspended", e.AccountThrottled = "AccountThrottled", e.ConfigurationSetDoesNotExist = "ConfigurationSetDoesNotExist", e.ConfigurationSetSendingPaused = "ConfigurationSetSendingPaused", e.Failed = "Failed", e.InvalidParameterValue = "InvalidParameterValue", e.InvalidSendingPoolName = "InvalidSendingPoolName", e.MailFromDomainNotVerified = "MailFromDomainNotVerified", e.MessageRejected = "MessageRejected", e.Success = "Success", e.TemplateDoesNotExist = "TemplateDoesNotExist", e.TransientFailure = "TransientFailure"
        }(X || (X = {}));
        ! function(e) {
            e.EMAIL_HEADER = "emailHeader", e.LINK_TAG = "linkTag", e.MESSAGE_TAG = "messageTag"
        }(Y || (Y = {}));
        ! function(e) {
            e.DELIVERY_OPTIONS = "deliveryOptions", e.EVENT_DESTINATIONS = "eventDestinations", e.REPUTATION_OPTIONS = "reputationOptions", e.TRACKING_OPTIONS = "trackingOptions"
        }(Q || (Q = {}));
        class ie extends V {
            constructor(e) {
                super({
                    name: "ConfigurationSetDoesNotExistException",
                    $fault: "client",
                    ...e
                }), this.name = "ConfigurationSetDoesNotExistException", this.$fault = "client", Object.setPrototypeOf(this, ie.prototype), this.ConfigurationSetName = e.ConfigurationSetName
            }
        }
        class se extends V {
            constructor(e) {
                super({
                    name: "ConfigurationSetSendingPausedException",
                    $fault: "client",
                    ...e
                }), this.name = "ConfigurationSetSendingPausedException", this.$fault = "client", Object.setPrototypeOf(this, se.prototype), this.ConfigurationSetName = e.ConfigurationSetName
            }
        }! function(e) {
            e.BOUNCE = "bounce", e.CLICK = "click", e.COMPLAINT = "complaint", e.DELIVERY = "delivery", e.OPEN = "open", e.REJECT = "reject", e.RENDERING_FAILURE = "renderingFailure", e.SEND = "send"
        }(J || (J = {}));
        ! function(e) {
            e.Allow = "Allow", e.Block = "Block"
        }(ee || (ee = {})),
        function(e) {
            e.Base64 = "Base64", e.UTF8 = "UTF-8"
        }(te || (te = {})),
        function(e) {
            e.RULE_SET = "RuleSet"
        }(re || (re = {})),
        function(e) {
            e.Optional = "Optional", e.Require = "Require"
        }(ne || (ne = {}));
        ! function(e) {
            e.Failed = "Failed", e.Pending = "Pending", e.Success = "Success", e.TemporaryFailure = "TemporaryFailure"
        }(oe || (oe = {}));
        class ae extends V {
            constructor(e) {
                super({
                    name: "MailFromDomainNotVerifiedException",
                    $fault: "client",
                    ...e
                }), this.name = "MailFromDomainNotVerifiedException", this.$fault = "client", Object.setPrototypeOf(this, ae.prototype)
            }
        }
        class ce extends V {
            constructor(e) {
                super({
                    name: "MessageRejected",
                    $fault: "client",
                    ...e
                }), this.name = "MessageRejected", this.$fault = "client", Object.setPrototypeOf(this, ce.prototype)
            }
        }
        const ue = e => ({
                ...e
            }),
            de = e => ({
                ...e
            });
        class le {
            constructor(e) {
                this.method = e.method || "GET", this.hostname = e.hostname || "localhost", this.port = e.port, this.query = e.query || {}, this.headers = e.headers || {}, this.body = e.body, this.protocol = e.protocol ? ":" !== e.protocol.slice(-1) ? `${e.protocol}:` : e.protocol : "https:", this.path = e.path ? "/" !== e.path.charAt(0) ? `/${e.path}` : e.path : "/"
            }
            static isInstance(e) {
                if (!e) return !1;
                const t = e;
                return "method" in t && "protocol" in t && "hostname" in t && "path" in t && "object" == typeof t.query && "object" == typeof t.headers
            }
            clone() {
                const e = new le({
                    ...this,
                    headers: {
                        ...this.headers
                    }
                });
                var t;
                return e.query && (e.query = (t = e.query, Object.keys(t).reduce(((e, r) => {
                    const n = t[r];
                    return {
                        ...e,
                        [r]: Array.isArray(n) ? [...n] : n
                    }
                }), {}))), e
            }
        }
        var fe = r(932);
        const pe = async (e, t) => {
            const r = {
                    ...e,
                    body: await Fe(e.body, t)
                },
                n = $e(e, r.body);
            switch (n) {
                case "AccountSendingPausedException":
                case "com.amazonaws.ses#AccountSendingPausedException":
                    throw await he(r, t);
                case "ConfigurationSetDoesNotExist":
                case "com.amazonaws.ses#ConfigurationSetDoesNotExistException":
                    throw await ge(r, t);
                case "ConfigurationSetSendingPausedException":
                case "com.amazonaws.ses#ConfigurationSetSendingPausedException":
                    throw await me(r, t);
                case "MailFromDomainNotVerifiedException":
                case "com.amazonaws.ses#MailFromDomainNotVerifiedException":
                    throw await ye(r, t);
                case "MessageRejected":
                case "com.amazonaws.ses#MessageRejected":
                    throw await be(r, t);
                default:
                    const o = r.body;
                    L({
                        output: e,
                        parsedBody: o.Error,
                        exceptionCtor: V,
                        errorCode: n
                    })
            }
        }, he = async (e, t) => {
            const r = e.body,
                n = _e(r.Error, t),
                o = new G({
                    $metadata: Ce(e),
                    ...n
                });
            return $(o, r)
        }, ge = async (e, t) => {
            const r = e.body,
                n = Oe(r.Error, t),
                o = new ie({
                    $metadata: Ce(e),
                    ...n
                });
            return $(o, r)
        }, me = async (e, t) => {
            const r = e.body,
                n = Te(r.Error, t),
                o = new se({
                    $metadata: Ce(e),
                    ...n
                });
            return $(o, r)
        }, ye = async (e, t) => {
            const r = e.body,
                n = Re(r.Error, t),
                o = new ae({
                    $metadata: Ce(e),
                    ...n
                });
            return $(o, r)
        }, be = async (e, t) => {
            const r = e.body,
                n = Me(r.Error, t),
                o = new ce({
                    $metadata: Ce(e),
                    ...n
                });
            return $(o, r)
        }, we = (e, t) => {
            const r = {};
            let n = 1;
            for (const t of e) null !== t && (r[`member.${n}`] = t, n++);
            return r
        }, ve = (e, t) => {
            const r = {};
            return null != e.Data && (r.Data = e.Data), null != e.Charset && (r.Charset = e.Charset), r
        }, Se = (e, t) => {
            const r = {};
            if (null != e.ToAddresses) {
                const t = we(e.ToAddresses);
                0 === e.ToAddresses?.length && (r.ToAddresses = []), Object.entries(t).forEach((([e, t]) => {
                    r[`ToAddresses.${e}`] = t
                }))
            }
            if (null != e.CcAddresses) {
                const t = we(e.CcAddresses);
                0 === e.CcAddresses?.length && (r.CcAddresses = []), Object.entries(t).forEach((([e, t]) => {
                    r[`CcAddresses.${e}`] = t
                }))
            }
            if (null != e.BccAddresses) {
                const t = we(e.BccAddresses);
                0 === e.BccAddresses?.length && (r.BccAddresses = []), Object.entries(t).forEach((([e, t]) => {
                    r[`BccAddresses.${e}`] = t
                }))
            }
            return r
        }, Ee = (e, t) => {
            const r = {};
            if (null != e.Subject) {
                const n = ve(e.Subject, t);
                Object.entries(n).forEach((([e, t]) => {
                    r[`Subject.${e}`] = t
                }))
            }
            if (null != e.Body) {
                const n = ((e, t) => {
                    const r = {};
                    if (null != e.Text) {
                        const n = ve(e.Text, t);
                        Object.entries(n).forEach((([e, t]) => {
                            r[`Text.${e}`] = t
                        }))
                    }
                    if (null != e.Html) {
                        const n = ve(e.Html, t);
                        Object.entries(n).forEach((([e, t]) => {
                            r[`Html.${e}`] = t
                        }))
                    }
                    return r
                })(e.Body, t);
                Object.entries(n).forEach((([e, t]) => {
                    r[`Body.${e}`] = t
                }))
            }
            return r
        }, xe = (e, t) => {
            const r = {};
            return null != e.Name && (r.Name = e.Name), null != e.Value && (r.Value = e.Value), r
        }, Pe = (e, t) => {
            const r = {};
            let n = 1;
            for (const t of e) {
                if (null === t) continue;
                const e = xe(t);
                Object.entries(e).forEach((([e, t]) => {
                    r[`member.${n}.${e}`] = t
                })), n++
            }
            return r
        }, Ae = (e, t) => {
            const r = {};
            if (null != e.Source && (r.Source = e.Source), null != e.Destination) {
                const n = Se(e.Destination, t);
                Object.entries(n).forEach((([e, t]) => {
                    r[`Destination.${e}`] = t
                }))
            }
            if (null != e.Message) {
                const n = Ee(e.Message, t);
                Object.entries(n).forEach((([e, t]) => {
                    r[`Message.${e}`] = t
                }))
            }
            if (null != e.ReplyToAddresses) {
                const t = we(e.ReplyToAddresses);
                0 === e.ReplyToAddresses?.length && (r.ReplyToAddresses = []), Object.entries(t).forEach((([e, t]) => {
                    r[`ReplyToAddresses.${e}`] = t
                }))
            }
            if (null != e.ReturnPath && (r.ReturnPath = e.ReturnPath), null != e.SourceArn && (r.SourceArn = e.SourceArn), null != e.ReturnPathArn && (r.ReturnPathArn = e.ReturnPathArn), null != e.Tags) {
                const n = Pe(e.Tags, t);
                0 === e.Tags?.length && (r.Tags = []), Object.entries(n).forEach((([e, t]) => {
                    r[`Tags.${e}`] = t
                }))
            }
            return null != e.ConfigurationSetName && (r.ConfigurationSetName = e.ConfigurationSetName), r
        }, _e = (e, t) => {
            const r = {
                message: void 0
            };
            return void 0 !== e.message && (r.message = M(e.message)), r
        }, Oe = (e, t) => {
            const r = {
                ConfigurationSetName: void 0,
                message: void 0
            };
            return void 0 !== e.ConfigurationSetName && (r.ConfigurationSetName = M(e.ConfigurationSetName)), void 0 !== e.message && (r.message = M(e.message)), r
        }, Te = (e, t) => {
            const r = {
                ConfigurationSetName: void 0,
                message: void 0
            };
            return void 0 !== e.ConfigurationSetName && (r.ConfigurationSetName = M(e.ConfigurationSetName)), void 0 !== e.message && (r.message = M(e.message)), r
        }, Re = (e, t) => {
            const r = {
                message: void 0
            };
            return void 0 !== e.message && (r.message = M(e.message)), r
        }, Me = (e, t) => {
            const r = {
                message: void 0
            };
            return void 0 !== e.message && (r.message = M(e.message)), r
        }, Ne = (e, t) => {
            const r = {
                MessageId: void 0
            };
            return void 0 !== e.MessageId && (r.MessageId = M(e.MessageId)), r
        }, Ce = e => ({
            httpStatusCode: e.statusCode,
            requestId: e.headers["x-amzn-requestid"] ?? e.headers["x-amzn-request-id"] ?? e.headers["x-amz-request-id"],
            extendedRequestId: e.headers["x-amz-id-2"],
            cfId: e.headers["x-amz-cf-id"]
        }), Ie = (e = new Uint8Array, t) => e instanceof Uint8Array ? Promise.resolve(e) : t.streamCollector(e) || Promise.resolve(new Uint8Array), ke = async (e, t, r, n, o) => {
            const {
                hostname: i,
                protocol: s = "https",
                port: a,
                path: c
            } = await e.endpoint(), u = {
                protocol: s,
                hostname: i,
                port: a,
                method: "POST",
                path: c.endsWith("/") ? c.slice(0, -1) + r : c + r,
                headers: t
            };
            return void 0 !== n && (u.hostname = n), void 0 !== o && (u.body = o), new le(u)
        }, je = (e, t) => ((e, t) => Ie(e, t).then((e => t.utf8Encoder(e))))(e, t).then((e => {
            if (e.length) {
                const t = new fe.XMLParser({
                    attributeNamePrefix: "",
                    htmlEntities: !0,
                    ignoreAttributes: !1,
                    ignoreDeclaration: !0,
                    parseTagValue: !1,
                    trimValues: !1,
                    tagValueProcessor: (e, t) => "" === t.trim() && t.includes("\n") ? "" : void 0
                });
                t.addEntity("#xD", "\r"), t.addEntity("#10", "\n");
                const r = t.parse(e),
                    n = "#text",
                    o = Object.keys(r)[0],
                    i = r[o];
                return i[n] && (i[o] = i[n], delete i[n]), z(i)
            }
            return {}
        })), Fe = async (e, t) => {
            const r = await je(e, t);
            return r.Error && (r.Error.message = r.Error.message ?? r.Error.Message), r
        }, De = e => Object.entries(e).map((([e, t]) => q(e) + "=" + q(t))).join("&"), $e = (e, t) => void 0 !== t.Error?.Code ? t.Error.Code : 404 == e.statusCode ? "NotFound" : void 0;
        class Le extends O {
            constructor(e) {
                super(), this.input = e
            }
            static getEndpointParameterInstructions() {
                return {
                    UseFIPS: {
                        type: "builtInParams",
                        name: "useFipsEndpoint"
                    },
                    Endpoint: {
                        type: "builtInParams",
                        name: "endpoint"
                    },
                    Region: {
                        type: "builtInParams",
                        name: "region"
                    },
                    UseDualStack: {
                        type: "builtInParams",
                        name: "useDualstackEndpoint"
                    }
                }
            }
            resolveMiddleware(e, t, r) {
                this.middlewareStack.use(c(t, this.serialize, this.deserialize)), this.middlewareStack.use(b(t, Le.getEndpointParameterInstructions()));
                const n = e.concat(this.middlewareStack),
                    {
                        logger: o
                    } = t,
                    i = {
                        logger: o,
                        clientName: "SESClient",
                        commandName: "SendEmailCommand",
                        inputFilterSensitiveLog: ue,
                        outputFilterSensitiveLog: de
                    },
                    {
                        requestHandler: s
                    } = t;
                return n.resolve((e => s.handle(e.request, r || {})), i)
            }
            serialize(e, t) {
                return (async (e, t) => {
                    let r;
                    return r = De({
                        ...Ae(e, t),
                        Action: "SendEmail",
                        Version: "2010-12-01"
                    }), ke(t, {
                        "content-type": "application/x-www-form-urlencoded"
                    }, "/", void 0, r)
                })(e, t)
            }
            deserialize(e, t) {
                return (async (e, t) => {
                    if (e.statusCode >= 300) return pe(e, t);
                    const r = await je(e.body, t);
                    let n = {};
                    n = Ne(r.SendEmailResult, t);
                    const o = {
                        $metadata: Ce(e),
                        ...n
                    };
                    return Promise.resolve(o)
                })(e, t)
            }
        }
        var Be;
        ! function(e) {
            e.ENV = "env", e.CONFIG = "shared config entry"
        }(Be || (Be = {}));
        const Ue = e => "string" == typeof e && (e.startsWith("fips-") || e.endsWith("-fips")),
            qe = e => Ue(e) ? ["fips-aws-global", "aws-fips"].includes(e) ? "us-east-1" : e.replace(/fips-(dkr-|prod-)?|-fips/, "") : e,
            ze = e => {
                const {
                    region: t,
                    useFipsEndpoint: r
                } = e;
                if (!t) throw new Error("Region is missing");
                return {
                    ...e,
                    region: async () => {
                        if ("string" == typeof t) return qe(t);
                        const e = await t();
                        return qe(e)
                    },
                    useFipsEndpoint: async () => {
                        const e = "string" == typeof t ? t : await t();
                        return !!Ue(e) || ("function" != typeof r ? Promise.resolve(!!r) : r())
                    }
                }
            },
            He = "content-length";
        const Ve = {
                step: "build",
                tags: ["SET_CONTENT_LENGTH", "CONTENT_LENGTH"],
                name: "contentLengthMiddleware",
                override: !0
            },
            Ge = e => ({
                applyToStack: t => {
                    var r;
                    t.add((r = e.bodyLengthChecker, e => async t => {
                        const n = t.request;
                        if (le.isInstance(n)) {
                            const {
                                body: e,
                                headers: t
                            } = n;
                            if (e && -1 === Object.keys(t).map((e => e.toLowerCase())).indexOf(He)) try {
                                const t = r(e);
                                n.headers = {
                                    ...n.headers,
                                    [He]: String(t)
                                }
                            } catch (e) {}
                        }
                        return e({
                            ...t,
                            request: n
                        })
                    }), Ve)
                }
            });
        const We = {
                name: "hostHeaderMiddleware",
                step: "build",
                priority: "low",
                tags: ["HOST"],
                override: !0
            },
            Ke = e => ({
                applyToStack: t => {
                    t.add((e => t => async r => {
                        if (!le.isInstance(r.request)) return t(r);
                        const {
                            request: n
                        } = r, {
                            handlerProtocol: o = ""
                        } = e.requestHandler.metadata || {};
                        return o.indexOf("h2") >= 0 && !n.headers[":authority"] ? (delete n.headers.host, n.headers[":authority"] = "") : n.headers.host || (n.headers.host = n.hostname), t(r)
                    })(e), We)
                }
            }),
            Ze = {
                name: "loggerMiddleware",
                tags: ["LOGGER"],
                step: "initialize",
                override: !0
            },
            Xe = e => ({
                applyToStack: e => {
                    e.add(((e, t) => async r => {
                        const n = await e(r),
                            {
                                clientName: o,
                                commandName: i,
                                logger: s,
                                inputFilterSensitiveLog: a,
                                outputFilterSensitiveLog: c,
                                dynamoDbDocumentClientOptions: u = {}
                            } = t,
                            {
                                overrideInputFilterSensitiveLog: d,
                                overrideOutputFilterSensitiveLog: l
                            } = u;
                        if (!s) return n;
                        if ("function" == typeof s.info) {
                            const {
                                $metadata: e,
                                ...t
                            } = n.output;
                            s.info({
                                clientName: o,
                                commandName: i,
                                input: (d ?? a)(r.input),
                                output: (l ?? c)(t),
                                metadata: e
                            })
                        }
                        return n
                    }), Ze)
                }
            }),
            Ye = "X-Amzn-Trace-Id",
            Qe = {
                step: "build",
                tags: ["RECURSION_DETECTION"],
                name: "recursionDetectionMiddleware",
                override: !0,
                priority: "low"
            },
            Je = e => ({
                applyToStack: t => {
                    t.add((e => t => async r => {
                        const {
                            request: n
                        } = r;
                        if (!le.isInstance(n) || "node" !== e.runtime || n.headers.hasOwnProperty(Ye)) return t(r);
                        const o = process.env.AWS_LAMBDA_FUNCTION_NAME,
                            i = process.env._X_AMZN_TRACE_ID,
                            s = e => "string" == typeof e && e.length > 0;
                        return s(o) && s(i) && (n.headers[Ye] = i), t({
                            ...r,
                            request: n
                        })
                    })(e), Qe)
                }
            });
        var et;
        ! function(e) {
            e.STANDARD = "standard", e.ADAPTIVE = "adaptive"
        }(et || (et = {}));
        const tt = "STANDARD",
            rt = ["BandwidthLimitExceeded", "EC2ThrottledException", "LimitExceededException", "PriorRequestNotComplete", "ProvisionedThroughputExceededException", "RequestLimitExceeded", "RequestThrottled", "RequestThrottledException", "SlowDown", "ThrottledException", "Throttling", "ThrottlingException", "TooManyRequestsException", "TransactionInProgressException"],
            nt = ["AbortError", "TimeoutError", "RequestTimeout", "RequestTimeoutException"],
            ot = [500, 502, 503, 504],
            it = ["ECONNRESET", "EPIPE", "ETIMEDOUT"],
            st = e => 429 === e.$metadata?.httpStatusCode || rt.includes(e.name) || 1 == e.$retryable?.throttling,
            at = e => nt.includes(e.name) || it.includes(e?.code || "") || ot.includes(e.$metadata?.httpStatusCode || 0);
        class ct {
            constructor(e) {
                this.currentCapacity = 0, this.enabled = !1, this.lastMaxRate = 0, this.measuredTxRate = 0, this.requestCount = 0, this.lastTimestamp = 0, this.timeWindow = 0, this.beta = e?.beta ?? .7, this.minCapacity = e?.minCapacity ?? 1, this.minFillRate = e?.minFillRate ?? .5, this.scaleConstant = e?.scaleConstant ?? .4, this.smooth = e?.smooth ?? .8;
                const t = this.getCurrentTimeInSeconds();
                this.lastThrottleTime = t, this.lastTxRateBucket = Math.floor(this.getCurrentTimeInSeconds()), this.fillRate = this.minFillRate, this.maxCapacity = this.minCapacity
            }
            getCurrentTimeInSeconds() {
                return Date.now() / 1e3
            }
            async getSendToken() {
                return this.acquireTokenBucket(1)
            }
            async acquireTokenBucket(e) {
                if (this.enabled) {
                    if (this.refillTokenBucket(), e > this.currentCapacity) {
                        const t = (e - this.currentCapacity) / this.fillRate * 1e3;
                        await new Promise((e => setTimeout(e, t)))
                    }
                    this.currentCapacity = this.currentCapacity - e
                }
            }
            refillTokenBucket() {
                const e = this.getCurrentTimeInSeconds();
                if (!this.lastTimestamp) return void(this.lastTimestamp = e);
                const t = (e - this.lastTimestamp) * this.fillRate;
                this.currentCapacity = Math.min(this.maxCapacity, this.currentCapacity + t), this.lastTimestamp = e
            }
            updateClientSendingRate(e) {
                let t;
                if (this.updateMeasuredRate(), st(e)) {
                    const e = this.enabled ? Math.min(this.measuredTxRate, this.fillRate) : this.measuredTxRate;
                    this.lastMaxRate = e, this.calculateTimeWindow(), this.lastThrottleTime = this.getCurrentTimeInSeconds(), t = this.cubicThrottle(e), this.enableTokenBucket()
                } else this.calculateTimeWindow(), t = this.cubicSuccess(this.getCurrentTimeInSeconds());
                const r = Math.min(t, 2 * this.measuredTxRate);
                this.updateTokenBucketRate(r)
            }
            calculateTimeWindow() {
                this.timeWindow = this.getPrecise(Math.pow(this.lastMaxRate * (1 - this.beta) / this.scaleConstant, 1 / 3))
            }
            cubicThrottle(e) {
                return this.getPrecise(e * this.beta)
            }
            cubicSuccess(e) {
                return this.getPrecise(this.scaleConstant * Math.pow(e - this.lastThrottleTime - this.timeWindow, 3) + this.lastMaxRate)
            }
            enableTokenBucket() {
                this.enabled = !0
            }
            updateTokenBucketRate(e) {
                this.refillTokenBucket(), this.fillRate = Math.max(e, this.minFillRate), this.maxCapacity = Math.max(e, this.minCapacity), this.currentCapacity = Math.min(this.currentCapacity, this.maxCapacity)
            }
            updateMeasuredRate() {
                const e = this.getCurrentTimeInSeconds(),
                    t = Math.floor(2 * e) / 2;
                if (this.requestCount++, t > this.lastTxRateBucket) {
                    const e = this.requestCount / (t - this.lastTxRateBucket);
                    this.measuredTxRate = this.getPrecise(e * this.smooth + this.measuredTxRate * (1 - this.smooth)), this.requestCount = 0, this.lastTxRateBucket = t
                }
            }
            getPrecise(e) {
                return parseFloat(e.toFixed(8))
            }
        }
        const ut = (e, t, r, n) => {
            const o = e,
                i = n?.retryCost ?? 5,
                s = n?.timeoutRetryCost ?? 10,
                a = n?.retryBackoffStrategy ?? (() => {
                    let e = 100;
                    return {
                        computeNextBackoffDelay: t => Math.floor(Math.min(2e4, Math.random() * 2 ** t * e)),
                        setDelayBase: t => {
                            e = t
                        }
                    }
                })();
            let c, u = e,
                d = Math.min(2e4, t),
                l = r ?? 0;
            const f = e => "TRANSIENT" === e ? s : i,
                p = e => f(e) <= u;
            return {
                getRetryCount: () => l,
                getRetryDelay: () => d,
                getLastRetryCost: () => c,
                hasRetryTokens: p,
                getRetryTokenCount: e => {
                    const t = e.errorType;
                    if (!p(t)) throw new Error("No retry token available");
                    const r = f(t),
                        n = "THROTTLING" === t ? 500 : 100;
                    a.setDelayBase(n);
                    const o = a.computeNextBackoffDelay(l);
                    if (e.retryAfterHint) {
                        const t = e.retryAfterHint.getTime() - Date.now();
                        d = Math.max(t || 0, o)
                    } else d = o;
                    return l++, c = r, u -= r, r
                },
                releaseRetryTokens: e => {
                    u += e ?? 1, u = Math.min(u, o)
                }
            }
        };
        class dt {
            constructor(e) {
                this.maxAttemptsProvider = e, this.mode = et.STANDARD, this.retryToken = ut(500, 100), this.maxAttemptsProvider = e
            }
            async acquireInitialRetryToken(e) {
                return this.retryToken
            }
            async refreshRetryTokenForRetry(e, t) {
                const r = await this.getMaxAttempts();
                if (this.shouldRetry(e, t, r)) return e.getRetryTokenCount(t), e;
                throw new Error("No retry token available")
            }
            recordSuccess(e) {
                this.retryToken.releaseRetryTokens(e.getLastRetryCost())
            }
            async getMaxAttempts() {
                try {
                    return await this.maxAttemptsProvider()
                } catch (e) {
                    return console.warn("Max attempts provider could not resolve. Using default of 3"), 3
                }
            }
            shouldRetry(e, t, r) {
                return e.getRetryCount() < r && e.hasRetryTokens(t.errorType) && this.isRetryableError(t.errorType)
            }
            isRetryableError(e) {
                return "THROTTLING" === e || "TRANSIENT" === e
            }
        }
        class lt {
            constructor(e, t) {
                this.maxAttemptsProvider = e, this.mode = et.ADAPTIVE;
                const {
                    rateLimiter: r
                } = t ?? {};
                this.rateLimiter = r ?? new ct, this.standardRetryStrategy = new dt(e)
            }
            async acquireInitialRetryToken(e) {
                return await this.rateLimiter.getSendToken(), this.standardRetryStrategy.acquireInitialRetryToken(e)
            }
            async refreshRetryTokenForRetry(e, t) {
                return this.rateLimiter.updateClientSendingRate(t), this.standardRetryStrategy.refreshRetryTokenForRetry(e, t)
            }
            recordSuccess(e) {
                this.rateLimiter.updateClientSendingRate({}), this.standardRetryStrategy.recordSuccess(e)
            }
        }
        const ft = e => {
            const {
                retryStrategy: t
            } = e, r = w(e.maxAttempts ?? 3);
            return {
                ...e,
                maxAttempts: r,
                retryStrategy: async () => {
                    if (t) return t;
                    return await w(e.retryMode)() === et.ADAPTIVE ? new lt(r) : new dt(r)
                }
            }
        };
        class pt {
            constructor(e) {
                this.statusCode = e.statusCode, this.headers = e.headers || {}, this.body = e.body
            }
            static isInstance(e) {
                if (!e) return !1;
                const t = e;
                return "number" == typeof t.statusCode && "object" == typeof t.headers
            }
        }
        var ht, gt = new Uint8Array(16);

        function mt() {
            if (!ht && !(ht = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
            return ht(gt)
        }
        const yt = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
        const bt = function(e) {
            return "string" == typeof e && yt.test(e)
        };
        for (var wt = [], vt = 0; vt < 256; ++vt) wt.push((vt + 256).toString(16).substr(1));
        const St = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                r = (wt[e[t + 0]] + wt[e[t + 1]] + wt[e[t + 2]] + wt[e[t + 3]] + "-" + wt[e[t + 4]] + wt[e[t + 5]] + "-" + wt[e[t + 6]] + wt[e[t + 7]] + "-" + wt[e[t + 8]] + wt[e[t + 9]] + "-" + wt[e[t + 10]] + wt[e[t + 11]] + wt[e[t + 12]] + wt[e[t + 13]] + wt[e[t + 14]] + wt[e[t + 15]]).toLowerCase();
            if (!bt(r)) throw TypeError("Stringified UUID is invalid");
            return r
        };
        const Et = function(e, t, r) {
                var n = (e = e || {}).random || (e.rng || mt)();
                if (n[6] = 15 & n[6] | 64, n[8] = 63 & n[8] | 128, t) {
                    r = r || 0;
                    for (var o = 0; o < 16; ++o) t[r + o] = n[o];
                    return t
                }
                return St(n)
            },
            xt = e => void 0 !== e.acquireInitialRetryToken && void 0 !== e.refreshRetryTokenForRetry && void 0 !== e.recordSuccess,
            Pt = e => {
                const t = {
                        errorType: At(e)
                    },
                    r = Tt(e.$response);
                return r && (t.retryAfterHint = r), t
            },
            At = e => st(e) ? "THROTTLING" : at(e) ? "TRANSIENT" : (e => {
                if (void 0 !== e.$metadata?.httpStatusCode) {
                    const t = e.$metadata.httpStatusCode;
                    return 500 <= t && t <= 599 && !at(e)
                }
                return !1
            })(e) ? "SERVER_ERROR" : "CLIENT_ERROR",
            _t = {
                name: "retryMiddleware",
                tags: ["RETRY"],
                step: "finalizeRequest",
                priority: "high",
                override: !0
            },
            Ot = e => ({
                applyToStack: t => {
                    t.add((e => (t, r) => async n => {
                        let o = await e.retryStrategy();
                        const i = await e.maxAttempts();
                        if (!xt(o)) return o?.mode && (r.userAgent = [...r.userAgent || [],
                            ["cfg/retry-mode", o.mode]
                        ]), o.retry(t, n);
                        {
                            let e = await o.acquireInitialRetryToken(r.partition_id),
                                a = new Error,
                                c = 0,
                                u = 0;
                            const {
                                request: d
                            } = n;
                            for (le.isInstance(d) && (d.headers["amz-sdk-invocation-id"] = Et());;) try {
                                le.isInstance(d) && (d.headers["amz-sdk-request"] = `attempt=${c+1}; max=${i}`);
                                const {
                                    response: r,
                                    output: s
                                } = await t(n);
                                return o.recordSuccess(e), s.$metadata.attempts = c + 1, s.$metadata.totalRetryDelay = u, {
                                    response: r,
                                    output: s
                                }
                            } catch (t) {
                                const r = Pt(t);
                                a = (s = t) instanceof Error ? s : s instanceof Object ? Object.assign(new Error, s) : "string" == typeof s ? new Error(s) : new Error(`AWS SDK error wrapper for ${s}`);
                                try {
                                    e = await o.refreshRetryTokenForRetry(e, r)
                                } catch (e) {
                                    throw a.$metadata || (a.$metadata = {}), a.$metadata.attempts = c + 1, a.$metadata.totalRetryDelay = u, a
                                }
                                c = e.getRetryCount();
                                const n = e.getRetryDelay();
                                u += n, await new Promise((e => setTimeout(e, n)))
                            }
                        }
                        var s
                    })(e), _t)
                }
            }),
            Tt = e => {
                if (!pt.isInstance(e)) return;
                const t = Object.keys(e.headers).find((e => "retry-after" === e.toLowerCase()));
                if (!t) return;
                const r = e.headers[t],
                    n = Number(r);
                if (!Number.isNaN(n)) return new Date(1e3 * n);
                return new Date(r)
            };
        class Rt extends Error {
            constructor(e, t = !0) {
                super(e), this.tryNextLink = t, this.name = "ProviderError", Object.setPrototypeOf(this, Rt.prototype)
            }
            static from(e, t = !0) {
                return Object.assign(new this(e.message, t), e)
            }
        }
        class Mt extends Rt {
            constructor(e, t = !0) {
                super(e, t), this.tryNextLink = t, this.name = "CredentialsProviderError", Object.setPrototypeOf(this, Mt.prototype)
            }
        }
        const Nt = (e, t, r) => {
                let n, o, i, s = !1;
                const a = async () => {
                    o || (o = e());
                    try {
                        n = await o, i = !0, s = !1
                    } finally {
                        o = void 0
                    }
                    return n
                };
                return void 0 === t ? async e => (i && !e?.forceRefresh || (n = await a()), n): async e => (i && !e?.forceRefresh || (n = await a()), s ? n : r && !r(n) ? (s = !0, n) : t(n) ? (await a(), n) : n)
            },
            Ct = {},
            It = {};
        for (let e = 0; e < 256; e++) {
            let t = e.toString(16).toLowerCase();
            1 === t.length && (t = `0${t}`), Ct[e] = t, It[t] = e
        }

        function kt(e) {
            let t = "";
            for (let r = 0; r < e.byteLength; r++) t += Ct[e[r]];
            return t
        }
        const jt = e => (new TextEncoder).encode(e),
            Ft = e => "string" == typeof e ? jt(e) : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(e),
            Dt = "X-Amz-Date",
            $t = "X-Amz-Signature",
            Lt = "X-Amz-Security-Token",
            Bt = "authorization",
            Ut = Dt.toLowerCase(),
            qt = [Bt, Ut, "date"],
            zt = $t.toLowerCase(),
            Ht = "x-amz-content-sha256",
            Vt = Lt.toLowerCase(),
            Gt = {
                authorization: !0,
                "cache-control": !0,
                connection: !0,
                expect: !0,
                from: !0,
                "keep-alive": !0,
                "max-forwards": !0,
                pragma: !0,
                referer: !0,
                te: !0,
                trailer: !0,
                "transfer-encoding": !0,
                upgrade: !0,
                "user-agent": !0,
                "x-amzn-trace-id": !0
            },
            Wt = /^proxy-/,
            Kt = /^sec-/,
            Zt = "AWS4-HMAC-SHA256",
            Xt = "AWS4-HMAC-SHA256-PAYLOAD",
            Yt = "aws4_request",
            Qt = {},
            Jt = [],
            er = (e, t, r) => `${e}/${t}/${r}/${Yt}`,
            tr = (e, t, r) => {
                const n = new e(t);
                return n.update(Ft(r)), n.digest()
            },
            rr = ({
                headers: e
            }, t, r) => {
                const n = {};
                for (const o of Object.keys(e).sort()) {
                    if (null == e[o]) continue;
                    const i = o.toLowerCase();
                    (i in Gt || t?.has(i) || Wt.test(i) || Kt.test(i)) && (!r || r && !r.has(i)) || (n[i] = e[o].trim().replace(/\s+/g, " "))
                }
                return n
            },
            nr = e => encodeURIComponent(e).replace(/[!'()*]/g, or),
            or = e => `%${e.charCodeAt(0).toString(16).toUpperCase()}`,
            ir = async ({
                headers: e,
                body: t
            }, r) => {
                for (const t of Object.keys(e))
                    if (t.toLowerCase() === Ht) return e[t];
                if (null == t) return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
                if ("string" == typeof t || ArrayBuffer.isView(t) || (n = t, "function" == typeof ArrayBuffer && n instanceof ArrayBuffer || "[object ArrayBuffer]" === Object.prototype.toString.call(n))) {
                    const e = new r;
                    return e.update(Ft(t)), kt(await e.digest())
                }
                var n;
                return "UNSIGNED-PAYLOAD"
            }, sr = ({
                headers: e,
                query: t,
                ...r
            }) => ({
                ...r,
                headers: {
                    ...e
                },
                query: t ? ar(t) : void 0
            }), ar = e => Object.keys(e).reduce(((t, r) => {
                const n = e[r];
                return {
                    ...t,
                    [r]: Array.isArray(n) ? [...n] : n
                }
            }), {}), cr = e => {
                e = "function" == typeof e.clone ? e.clone() : sr(e);
                for (const t of Object.keys(e.headers)) qt.indexOf(t.toLowerCase()) > -1 && delete e.headers[t];
                return e
            }, ur = e => "number" == typeof e ? new Date(1e3 * e) : "string" == typeof e ? Number(e) ? new Date(1e3 * Number(e)) : new Date(e) : e;
        class dr {
            constructor({
                applyChecksum: e,
                credentials: t,
                region: r,
                service: n,
                sha256: o,
                uriEscapePath: i = !0
            }) {
                this.service = n, this.sha256 = o, this.uriEscapePath = i, this.applyChecksum = "boolean" != typeof e || e, this.regionProvider = w(r), this.credentialProvider = w(t)
            }
            async presign(e, t = {}) {
                const {
                    signingDate: r = new Date,
                    expiresIn: n = 3600,
                    unsignableHeaders: o,
                    unhoistableHeaders: i,
                    signableHeaders: s,
                    signingRegion: a,
                    signingService: c
                } = t, u = await this.credentialProvider();
                this.validateResolvedCredentials(u);
                const d = a ?? await this.regionProvider(),
                    {
                        longDate: l,
                        shortDate: f
                    } = lr(r);
                if (n > 604800) return Promise.reject("Signature version 4 presigned URLs must have an expiration date less than one week in the future");
                const p = er(f, d, c ?? this.service),
                    h = ((e, t = {}) => {
                        const {
                            headers: r,
                            query: n = {}
                        } = "function" == typeof e.clone ? e.clone() : sr(e);
                        for (const e of Object.keys(r)) {
                            const o = e.toLowerCase();
                            "x-amz-" !== o.slice(0, 6) || t.unhoistableHeaders?.has(o) || (n[e] = r[e], delete r[e])
                        }
                        return {
                            ...e,
                            headers: r,
                            query: n
                        }
                    })(cr(e), {
                        unhoistableHeaders: i
                    });
                u.sessionToken && (h.query[Lt] = u.sessionToken), h.query["X-Amz-Algorithm"] = Zt, h.query["X-Amz-Credential"] = `${u.accessKeyId}/${p}`, h.query[Dt] = l, h.query["X-Amz-Expires"] = n.toString(10);
                const g = rr(h, o, s);
                return h.query["X-Amz-SignedHeaders"] = fr(g), h.query[$t] = await this.getSignature(l, p, this.getSigningKey(u, d, f, c), this.createCanonicalRequest(h, g, await ir(e, this.sha256))), h
            }
            async sign(e, t) {
                return "string" == typeof e ? this.signString(e, t) : e.headers && e.payload ? this.signEvent(e, t) : this.signRequest(e, t)
            }
            async signEvent({
                headers: e,
                payload: t
            }, {
                signingDate: r = new Date,
                priorSignature: n,
                signingRegion: o,
                signingService: i
            }) {
                const s = o ?? await this.regionProvider(),
                    {
                        shortDate: a,
                        longDate: c
                    } = lr(r),
                    u = er(a, s, i ?? this.service),
                    d = await ir({
                        headers: {},
                        body: t
                    }, this.sha256),
                    l = new this.sha256;
                l.update(e);
                const f = kt(await l.digest()),
                    p = [Xt, c, u, n, f, d].join("\n");
                return this.signString(p, {
                    signingDate: r,
                    signingRegion: s,
                    signingService: i
                })
            }
            async signString(e, {
                signingDate: t = new Date,
                signingRegion: r,
                signingService: n
            } = {}) {
                const o = await this.credentialProvider();
                this.validateResolvedCredentials(o);
                const i = r ?? await this.regionProvider(),
                    {
                        shortDate: s
                    } = lr(t),
                    a = new this.sha256(await this.getSigningKey(o, i, s, n));
                return a.update(Ft(e)), kt(await a.digest())
            }
            async signRequest(e, {
                signingDate: t = new Date,
                signableHeaders: r,
                unsignableHeaders: n,
                signingRegion: o,
                signingService: i
            } = {}) {
                const s = await this.credentialProvider();
                this.validateResolvedCredentials(s);
                const a = o ?? await this.regionProvider(),
                    c = cr(e),
                    {
                        longDate: u,
                        shortDate: d
                    } = lr(t),
                    l = er(d, a, i ?? this.service);
                c.headers[Ut] = u, s.sessionToken && (c.headers[Vt] = s.sessionToken);
                const f = await ir(c, this.sha256);
                !((e, t) => {
                    e = e.toLowerCase();
                    for (const r of Object.keys(t))
                        if (e === r.toLowerCase()) return !0;
                    return !1
                })(Ht, c.headers) && this.applyChecksum && (c.headers[Ht] = f);
                const p = rr(c, n, r),
                    h = await this.getSignature(u, l, this.getSigningKey(s, a, d, i), this.createCanonicalRequest(c, p, f));
                return c.headers[Bt] = `${Zt} Credential=${s.accessKeyId}/${l}, SignedHeaders=${fr(p)}, Signature=${h}`, c
            }
            createCanonicalRequest(e, t, r) {
                const n = Object.keys(t).sort();
                return `${e.method}\n${this.getCanonicalPath(e)}\n${(({query:e={}})=>{const t=[],r={};for(const n of Object.keys(e).sort()){if(n.toLowerCase()===zt)continue;t.push(n);const o=e[n];"string"==typeof o?r[n]=`
                $ {
                    nr(n)
                } = $ {
                    nr(o)
                }
                `:Array.isArray(o)&&(r[n]=o.slice(0).sort().reduce(((e,t)=>e.concat([`
                $ {
                    nr(n)
                } = $ {
                    nr(t)
                }
                `])),[]).join("&"))}return t.map((e=>r[e])).filter((e=>e)).join("&")})(e)}\n${n.map((e=>`${e}:${t[e]}`)).join("\n")}\n\n${n.join(";")}\n${r}`
            }
            async createStringToSign(e, t, r) {
                const n = new this.sha256;
                n.update(Ft(r));
                const o = await n.digest();
                return `${Zt}\n${e}\n${t}\n${kt(o)}`
            }
            getCanonicalPath({
                path: e
            }) {
                if (this.uriEscapePath) {
                    const t = [];
                    for (const r of e.split("/")) 0 !== r?.length && "." !== r && (".." === r ? t.pop() : t.push(r));
                    const r = `${e?.startsWith("/")?"/":""}${t.join("/")}${t.length>0&&e?.endsWith("/")?"/":""}`;
                    return encodeURIComponent(r).replace(/%2F/g, "/")
                }
                return e
            }
            async getSignature(e, t, r, n) {
                const o = await this.createStringToSign(e, t, n),
                    i = new this.sha256(await r);
                return i.update(Ft(o)), kt(await i.digest())
            }
            getSigningKey(e, t, r, n) {
                return (async (e, t, r, n, o) => {
                    const i = `${r}:${n}:${o}:${kt(await tr(e,t.secretAccessKey,t.accessKeyId))}:${t.sessionToken}`;
                    if (i in Qt) return Qt[i];
                    for (Jt.push(i); Jt.length > 50;) delete Qt[Jt.shift()];
                    let s = `AWS4${t.secretAccessKey}`;
                    for (const t of [r, n, o, Yt]) s = await tr(e, s, t);
                    return Qt[i] = s
                })(this.sha256, e, r, t, n || this.service)
            }
            validateResolvedCredentials(e) {
                if ("object" != typeof e || "string" != typeof e.accessKeyId || "string" != typeof e.secretAccessKey) throw new Error("Resolved credential object is not valid")
            }
        }
        const lr = e => {
                const t = (r = e, ur(r).toISOString().replace(/\.\d{3}Z$/, "Z")).replace(/[\-:]/g, "");
                var r;
                return {
                    longDate: t,
                    shortDate: t.slice(0, 8)
                }
            },
            fr = e => Object.keys(e).sort().join(";"),
            pr = e => {
                const t = e.credentials ? hr(e.credentials) : e.credentialDefaultProvider(e),
                    {
                        signingEscapePath: r = !0,
                        systemClockOffset: n = e.systemClockOffset || 0,
                        sha256: o
                    } = e;
                let i;
                return i = e.signer ? w(e.signer) : e.regionInfoProvider ? () => w(e.region)().then((async t => [await e.regionInfoProvider(t, {
                    useFipsEndpoint: await e.useFipsEndpoint(),
                    useDualstackEndpoint: await e.useDualstackEndpoint()
                }) || {}, t])).then((([n, i]) => {
                    const {
                        signingRegion: s,
                        signingService: a
                    } = n;
                    e.signingRegion = e.signingRegion || s || i, e.signingName = e.signingName || a || e.serviceId;
                    const c = {
                        ...e,
                        credentials: t,
                        region: e.signingRegion,
                        service: e.signingName,
                        sha256: o,
                        uriEscapePath: r
                    };
                    return new(e.signerConstructor || dr)(c)
                })) : async n => {
                    const i = (n = Object.assign({}, {
                            name: "sigv4",
                            signingName: e.signingName || e.defaultSigningName,
                            signingRegion: await w(e.region)(),
                            properties: {}
                        }, n)).signingRegion,
                        s = n.signingName;
                    e.signingRegion = e.signingRegion || i, e.signingName = e.signingName || s || e.serviceId;
                    const a = {
                        ...e,
                        credentials: t,
                        region: e.signingRegion,
                        service: e.signingName,
                        sha256: o,
                        uriEscapePath: r
                    };
                    return new(e.signerConstructor || dr)(a)
                }, {
                    ...e,
                    systemClockOffset: n,
                    signingEscapePath: r,
                    credentials: t,
                    signer: i
                }
            },
            hr = e => "function" == typeof e ? Nt(e, (e => void 0 !== e.expiration && e.expiration.getTime() - Date.now() < 3e5), (e => void 0 !== e.expiration)) : w(e),
            gr = e => new Date(Date.now() + e),
            mr = (e, t) => {
                const r = Date.parse(e);
                return ((e, t) => Math.abs(gr(t).getTime() - e) >= 3e5)(r, t) ? r - Date.now() : t
            },
            yr = e => pt.isInstance(e) ? e.headers?.date ?? e.headers?.Date : void 0,
            br = {
                name: "awsAuthMiddleware",
                tags: ["SIGNATURE", "AWSAUTH"],
                relation: "after",
                toMiddleware: "retryMiddleware",
                override: !0
            },
            wr = e => ({
                applyToStack: t => {
                    t.addRelativeTo((e => (t, r) => async function(n) {
                        if (!le.isInstance(n.request)) return t(n);
                        const o = r.endpointV2?.properties?.authSchemes?.[0],
                            i = "sigv4a" === o?.name ? o?.signingRegionSet?.join(",") : void 0,
                            s = await e.signer(o),
                            a = await t({
                                ...n,
                                request: await s.sign(n.request, {
                                    signingDate: gr(e.systemClockOffset),
                                    signingRegion: i || r.signing_region,
                                    signingService: r.signing_service
                                })
                            }).catch((t => {
                                const r = t.ServerTime ?? yr(t.$response);
                                throw r && (e.systemClockOffset = mr(r, e.systemClockOffset)), t
                            })),
                            c = yr(a.response);
                        return c && (e.systemClockOffset = mr(c, e.systemClockOffset)), a
                    })(e), br)
                }
            });

        function vr(e) {
            return {
                ...e,
                customUserAgent: "string" == typeof e.customUserAgent ? [
                    [e.customUserAgent]
                ] : e.customUserAgent
            }
        }
        const Sr = "user-agent",
            Er = "x-amz-user-agent",
            xr = /[^\!\#\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g,
            Pr = ([e, t]) => {
                const r = e.indexOf("/"),
                    n = e.substring(0, r);
                let o = e.substring(r + 1);
                return "api" === n && (o = o.toLowerCase()), [n, o, t].filter((e => e && e.length > 0)).map((e => e?.replace(xr, "_"))).join("/")
            },
            Ar = {
                name: "getUserAgentMiddleware",
                step: "build",
                priority: "low",
                tags: ["SET_USER_AGENT", "USER_AGENT"],
                override: !0
            },
            _r = e => ({
                applyToStack: t => {
                    var r;
                    t.add((r = e, (e, t) => async n => {
                        const {
                            request: o
                        } = n;
                        if (!le.isInstance(o)) return e(n);
                        const {
                            headers: i
                        } = o, s = t?.userAgent?.map(Pr) || [], a = (await r.defaultUserAgentProvider()).map(Pr), c = r?.customUserAgent?.map(Pr) || [], u = [...a, ...s, ...c].join(" "), d = [...a.filter((e => e.startsWith("aws-sdk-"))), ...c].join(" ");
                        return "browser" !== r.runtime ? (d && (i[Er] = i[Er] ? `${i[Sr]} ${d}` : d), i[Sr] = u) : i[Er] = u, e({
                            ...n,
                            request: o
                        })
                    }), Ar)
                }
            }),
            Or = "3.267.0";
        var Tr = r(643);

        function Rr(e = 0) {
            return new Promise(((t, r) => {
                e && setTimeout((() => {
                    const t = new Error(`Request did not complete within ${e} ms`);
                    t.name = "TimeoutError", r(t)
                }), e)
            }))
        }
        class Mr {
            constructor(e) {
                "function" == typeof e ? this.configProvider = e().then((e => e || {})) : (this.config = e ?? {}, this.configProvider = Promise.resolve(this.config))
            }
            destroy() {}
            async handle(e, {
                abortSignal: t
            } = {}) {
                this.config || (this.config = await this.configProvider);
                const r = this.config.requestTimeout;
                if (t?.aborted) {
                    const e = new Error("Request aborted");
                    return e.name = "AbortError", Promise.reject(e)
                }
                let n = e.path;
                if (e.query) {
                    const t = function(e) {
                        const t = [];
                        for (let r of Object.keys(e).sort()) {
                            const n = e[r];
                            if (r = nr(r), Array.isArray(n))
                                for (let e = 0, o = n.length; e < o; e++) t.push(`${r}=${nr(n[e])}`);
                            else {
                                let e = r;
                                (n || "string" == typeof n) && (e += `=${nr(n)}`), t.push(e)
                            }
                        }
                        return t.join("&")
                    }(e.query);
                    t && (n += `?${t}`)
                }
                const {
                    port: o,
                    method: i
                } = e, s = `${e.protocol}//${e.hostname}${o?`:${o}`:""}${n}`, a = {
                    body: "GET" === i || "HEAD" === i ? void 0 : e.body,
                    headers: new Headers(e.headers),
                    method: i
                };
                "undefined" != typeof AbortController && (a.signal = t);
                const c = new Request(s, a),
                    u = [fetch(c).then((e => {
                        const t = e.headers,
                            r = {};
                        for (const e of t.entries()) r[e[0]] = e[1];
                        return void 0 !== e.body ? {
                            response: new pt({
                                headers: r,
                                statusCode: e.status,
                                body: e.body
                            })
                        } : e.blob().then((t => ({
                            response: new pt({
                                headers: r,
                                statusCode: e.status,
                                body: t
                            })
                        })))
                    })), Rr(r)];
                return t && u.push(new Promise(((e, r) => {
                    t.onabort = () => {
                        const e = new Error("Request aborted");
                        e.name = "AbortError", r(e)
                    }
                }))), Promise.race(u)
            }
        }
        const Nr = {},
            Cr = new Array(64);
        for (let e = 0, t = "A".charCodeAt(0), r = "Z".charCodeAt(0); e + t <= r; e++) {
            const r = String.fromCharCode(e + t);
            Nr[r] = e, Cr[e] = r
        }
        for (let e = 0, t = "a".charCodeAt(0), r = "z".charCodeAt(0); e + t <= r; e++) {
            const r = String.fromCharCode(e + t),
                n = e + 26;
            Nr[r] = n, Cr[n] = r
        }
        for (let e = 0; e < 10; e++) {
            Nr[e.toString(10)] = e + 52;
            const t = e.toString(10),
                r = e + 52;
            Nr[t] = r, Cr[r] = t
        }
        Nr["+"] = 62, Cr[62] = "+", Nr["/"] = 63, Cr[63] = "/";
        const Ir = 6,
            kr = 8,
            jr = 63,
            Fr = e => {
                let t = e.length / 4 * 3;
                "==" === e.slice(-2) ? t -= 2 : "=" === e.slice(-1) && t--;
                const r = new ArrayBuffer(t),
                    n = new DataView(r);
                for (let t = 0; t < e.length; t += 4) {
                    let r = 0,
                        o = 0;
                    for (let n = t, i = t + 3; n <= i; n++)
                        if ("=" !== e[n]) {
                            if (!(e[n] in Nr)) throw new TypeError(`Invalid character ${e[n]} in base64 string.`);
                            r |= Nr[e[n]] << (i - n) * Ir, o += Ir
                        } else r >>= Ir;
                    const i = t / 4 * 3;
                    r >>= o % kr;
                    const s = Math.floor(o / kr);
                    for (let e = 0; e < s; e++) {
                        const t = (s - e - 1) * kr;
                        n.setUint8(i + e, (r & 255 << t) >> t)
                    }
                }
                return new Uint8Array(r)
            };

        function Dr(e) {
            let t = "";
            for (let r = 0; r < e.length; r += 3) {
                let n = 0,
                    o = 0;
                for (let t = r, i = Math.min(r + 3, e.length); t < i; t++) n |= e[t] << (i - t - 1) * kr, o += kr;
                const i = Math.ceil(o / Ir);
                n <<= i * Ir - o;
                for (let e = 1; e <= i; e++) {
                    const r = (i - e) * Ir;
                    t += Cr[(n & jr << r) >> r]
                }
                t += "==".slice(0, 4 - i)
            }
            return t
        }
        const $r = e => "function" == typeof Blob && e instanceof Blob ? async function(e) {
            const t = await
            function(e) {
                return new Promise(((t, r) => {
                    const n = new FileReader;
                    n.onloadend = () => {
                        if (2 !== n.readyState) return r(new Error("Reader aborted too early"));
                        const e = n.result ?? "",
                            o = e.indexOf(","),
                            i = o > -1 ? o + 1 : e.length;
                        t(e.substring(i))
                    }, n.onabort = () => r(new Error("Read aborted")), n.onerror = () => r(n.error), n.readAsDataURL(e)
                }))
            }(e), r = Fr(t);
            return new Uint8Array(r)
        }(e): async function(e) {
            let t = new Uint8Array(0);
            const r = e.getReader();
            let n = !1;
            for (; !n;) {
                const {
                    done: e,
                    value: o
                } = await r.read();
                if (o) {
                    const e = t;
                    t = new Uint8Array(e.length + o.length), t.set(e), t.set(o, e.length)
                }
                n = e
            }
            return t
        }(e);
        const Lr = e => () => Promise.reject(e),
            Br = e => {
                if ("string" == typeof e) {
                    let t = e.length;
                    for (let r = t - 1; r >= 0; r--) {
                        const n = e.charCodeAt(r);
                        n > 127 && n <= 2047 ? t++ : n > 2047 && n <= 65535 && (t += 2), n >= 56320 && n <= 57343 && r--
                    }
                    return t
                }
                if ("number" == typeof e.byteLength) return e.byteLength;
                if ("number" == typeof e.size) return e.size;
                throw new Error(`Body Length computation failed for ${e}`)
            };
        var Ur = r(206),
            qr = r.n(Ur);
        const zr = ({
            serviceId: e,
            clientVersion: t
        }) => async () => {
            const r = "undefined" != typeof window && window?.navigator?.userAgent ? qr().parse(window.navigator.userAgent) : void 0,
                n = [
                    ["aws-sdk-js", t],
                    [`os/${r?.os?.name||"other"}`, r?.os?.version],
                    ["lang/js"],
                    ["md/browser", `${r?.browser?.name??"unknown"}_${r?.browser?.version??"unknown"}`]
                ];
            return e && n.push([`api/${e}`, t]), n
        }, Hr = e => new TextDecoder("utf-8").decode(e), Vr = JSON.parse('{"partitions":[{"id":"aws","outputs":{"dnsSuffix":"amazonaws.com","dualStackDnsSuffix":"api.aws","name":"aws","supportsDualStack":true,"supportsFIPS":true},"regionRegex":"^(us|eu|ap|sa|ca|me|af)\\\\-\\\\w+\\\\-\\\\d+$","regions":{"af-south-1":{"description":"Africa (Cape Town)"},"ap-east-1":{"description":"Asia Pacific (Hong Kong)"},"ap-northeast-1":{"description":"Asia Pacific (Tokyo)"},"ap-northeast-2":{"description":"Asia Pacific (Seoul)"},"ap-northeast-3":{"description":"Asia Pacific (Osaka)"},"ap-south-1":{"description":"Asia Pacific (Mumbai)"},"ap-south-2":{"description":"Asia Pacific (Hyderabad)"},"ap-southeast-1":{"description":"Asia Pacific (Singapore)"},"ap-southeast-2":{"description":"Asia Pacific (Sydney)"},"ap-southeast-3":{"description":"Asia Pacific (Jakarta)"},"ap-southeast-4":{"description":"Asia Pacific (Melbourne)"},"aws-global":{"description":"AWS Standard global region"},"ca-central-1":{"description":"Canada (Central)"},"eu-central-1":{"description":"Europe (Frankfurt)"},"eu-central-2":{"description":"Europe (Zurich)"},"eu-north-1":{"description":"Europe (Stockholm)"},"eu-south-1":{"description":"Europe (Milan)"},"eu-south-2":{"description":"Europe (Spain)"},"eu-west-1":{"description":"Europe (Ireland)"},"eu-west-2":{"description":"Europe (London)"},"eu-west-3":{"description":"Europe (Paris)"},"me-central-1":{"description":"Middle East (UAE)"},"me-south-1":{"description":"Middle East (Bahrain)"},"sa-east-1":{"description":"South America (Sao Paulo)"},"us-east-1":{"description":"US East (N. Virginia)"},"us-east-2":{"description":"US East (Ohio)"},"us-west-1":{"description":"US West (N. California)"},"us-west-2":{"description":"US West (Oregon)"}}},{"id":"aws-cn","outputs":{"dnsSuffix":"amazonaws.com.cn","dualStackDnsSuffix":"api.amazonwebservices.com.cn","name":"aws-cn","supportsDualStack":true,"supportsFIPS":true},"regionRegex":"^cn\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-cn-global":{"description":"AWS China global region"},"cn-north-1":{"description":"China (Beijing)"},"cn-northwest-1":{"description":"China (Ningxia)"}}},{"id":"aws-us-gov","outputs":{"dnsSuffix":"amazonaws.com","dualStackDnsSuffix":"api.aws","name":"aws-us-gov","supportsDualStack":true,"supportsFIPS":true},"regionRegex":"^us\\\\-gov\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-us-gov-global":{"description":"AWS GovCloud (US) global region"},"us-gov-east-1":{"description":"AWS GovCloud (US-East)"},"us-gov-west-1":{"description":"AWS GovCloud (US-West)"}}},{"id":"aws-iso","outputs":{"dnsSuffix":"c2s.ic.gov","dualStackDnsSuffix":"c2s.ic.gov","name":"aws-iso","supportsDualStack":false,"supportsFIPS":true},"regionRegex":"^us\\\\-iso\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-iso-global":{"description":"AWS ISO (US) global region"},"us-iso-east-1":{"description":"US ISO East"},"us-iso-west-1":{"description":"US ISO WEST"}}},{"id":"aws-iso-b","outputs":{"dnsSuffix":"sc2s.sgov.gov","dualStackDnsSuffix":"sc2s.sgov.gov","name":"aws-iso-b","supportsDualStack":false,"supportsFIPS":true},"regionRegex":"^us\\\\-isob\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-iso-b-global":{"description":"AWS ISOB (US) global region"},"us-isob-east-1":{"description":"US ISOB East (Ohio)"}}}],"version":"1.1"}'), {
            partitions: Gr
        } = Vr, Wr = Gr.find((e => "aws" === e.id)), Kr = e => {
            for (const t of Gr) {
                const {
                    regions: r,
                    outputs: n
                } = t;
                for (const [t, o] of Object.entries(r))
                    if (t === e) return {
                        ...n,
                        ...o
                    }
            }
            for (const t of Gr) {
                const {
                    regionRegex: r,
                    outputs: n
                } = t;
                if (new RegExp(r).test(e)) return {
                    ...n
                }
            }
            if (!Wr) throw new Error("Provided region was not found in the partition array or regex, and default partition with id 'aws' doesn't exist.");
            return {
                ...Wr.outputs
            }
        }, Zr = "endpoints";

        function Xr(e) {
            return "object" != typeof e || null == e ? e : "ref" in e ? `$${Xr(e.ref)}` : "fn" in e ? `${e.fn}(${(e.argv||[]).map(Xr).join(", ")})` : JSON.stringify(e, null, 2)
        }
        class Yr extends Error {
            constructor(e) {
                super(e), this.name = "EndpointError"
            }
        }
        const Qr = new RegExp("^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$"),
            Jr = e => Qr.test(e) || e.startsWith("[") && e.endsWith("]"),
            en = new RegExp("^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$"),
            tn = (e, t = !1) => {
                if (!t) return en.test(e);
                const r = e.split(".");
                for (const e of r)
                    if (!tn(e)) return !1;
                return !0
            },
            rn = (e, t = !1) => {
                if (t) {
                    for (const t of e.split("."))
                        if (!rn(t)) return !1;
                    return !0
                }
                return !!tn(e) && (!(e.length < 3 || e.length > 63) && (e === e.toLowerCase() && !Jr(e)))
            },
            nn = e => {
                const t = e.split(":");
                if (t.length < 6) return null;
                const [r, n, o, i, s, ...a] = t;
                return "arn" !== r || "" === n || "" === o || "" === a[0] ? null : {
                    partition: n,
                    service: o,
                    region: i,
                    accountId: s,
                    resourceId: a[0].includes("/") ? a[0].split("/") : a
                }
            },
            on = (e, t) => e === t,
            sn = (e, t) => (e => {
                const t = e.split("."),
                    r = [];
                for (const n of t) {
                    const t = n.indexOf("[");
                    if (-1 !== t) {
                        if (n.indexOf("]") !== n.length - 1) throw new Yr(`Path: '${e}' does not end with ']'`);
                        const o = n.slice(t + 1, -1);
                        if (Number.isNaN(parseInt(o))) throw new Yr(`Invalid array index: '${o}' in path: '${e}'`);
                        0 !== t && r.push(n.slice(0, t)), r.push(o)
                    } else r.push(n)
                }
                return r
            })(t).reduce(((r, n) => {
                if ("object" != typeof r) throw new Yr(`Index '${n}' in '${t}' not found in '${JSON.stringify(e)}'`);
                return Array.isArray(r) ? r[parseInt(n)] : r[n]
            }), e),
            an = e => null != e,
            cn = e => !e;
        var un, dn, ln;
        ! function(e) {
            e.HEADER = "header", e.QUERY = "query"
        }(un || (un = {})),
        function(e) {
            e.AAAA = "AAAA", e.A = "A"
        }(dn || (dn = {})),
        function(e) {
            e.HTTP = "http", e.HTTPS = "https"
        }(ln || (ln = {}));
        const fn = {
                [ln.HTTP]: 80,
                [ln.HTTPS]: 443
            },
            pn = e => {
                const t = (() => {
                    try {
                        if (e instanceof URL) return e;
                        if ("object" == typeof e && "hostname" in e) {
                            const {
                                hostname: t,
                                port: r,
                                protocol: n = "",
                                path: o = "",
                                query: i = {}
                            } = e, s = new URL(`${n}//${t}${r?`:${r}`:""}${o}`);
                            return s.search = Object.entries(i).map((([e, t]) => `${e}=${t}`)).join("&"), s
                        }
                        return new URL(e)
                    } catch (e) {
                        return null
                    }
                })();
                if (!t) return console.error(`Unable to parse ${JSON.stringify(e)} as a whatwg URL.`), null;
                const r = t.href,
                    {
                        host: n,
                        hostname: o,
                        pathname: i,
                        protocol: s,
                        search: a
                    } = t;
                if (a) return null;
                const c = s.slice(0, -1);
                if (!Object.values(ln).includes(c)) return null;
                const u = Jr(o);
                return {
                    scheme: c,
                    authority: `${n}${r.includes(`${n}:${fn[c]}`)||"string"==typeof e&&e.includes(`${n}:${fn[c]}`)?`:${fn[c]}`:""}`,
                    path: i,
                    normalizedPath: i.endsWith("/") ? i : `${i}/`,
                    isIp: u
                }
            },
            hn = (e, t) => e === t,
            gn = (e, t, r, n) => t >= r || e.length < r ? null : n ? e.substring(e.length - r, e.length - t) : e.substring(t, r),
            mn = e => encodeURIComponent(e).replace(/[!*'()]/g, (e => `%${e.charCodeAt(0).toString(16).toUpperCase()}`)),
            yn = (e, t) => {
                const r = [],
                    n = {
                        ...t.endpointParams,
                        ...t.referenceRecord
                    };
                let o = 0;
                for (; o < e.length;) {
                    const t = e.indexOf("{", o);
                    if (-1 === t) {
                        r.push(e.slice(o));
                        break
                    }
                    r.push(e.slice(o, t));
                    const i = e.indexOf("}", t);
                    if (-1 === i) {
                        r.push(e.slice(t));
                        break
                    }
                    "{" === e[t + 1] && "}" === e[i + 1] && (r.push(e.slice(t + 1, i)), o = i + 2);
                    const s = e.substring(t + 1, i);
                    if (s.includes("#")) {
                        const [e, t] = s.split("#");
                        r.push(sn(n[e], t))
                    } else r.push(n[s]);
                    o = i + 1
                }
                return r.join("")
            },
            bn = (e, t, r) => {
                if ("string" == typeof e) return yn(e, r);
                if (e.fn) return wn(e, r);
                if (e.ref) return (({
                    ref: e
                }, t) => ({
                    ...t.endpointParams,
                    ...t.referenceRecord
                } [e]))(e, r);
                throw new Yr(`'${t}': ${String(e)} is not a string, function or reference.`)
            },
            wn = ({
                fn: e,
                argv: r
            }, n) => {
                const o = r.map((e => ["boolean", "number"].includes(typeof e) ? e : bn(e, "arg", n)));
                return e.split(".").reduce(((e, t) => e[t]), t)(...o)
            },
            vn = ({
                assign: e,
                ...t
            }, r) => {
                if (e && e in r.referenceRecord) throw new Yr(`'${e}' is already defined in Reference Record.`);
                const n = wn(t, r);
                return r.logger?.debug?.(Zr, `evaluateCondition: ${Xr(t)} = ${Xr(n)}`), {
                    result: "" === n || !!n,
                    ...null != e && {
                        toAssign: {
                            name: e,
                            value: n
                        }
                    }
                }
            },
            Sn = (e = [], t) => {
                const r = {};
                for (const n of e) {
                    const {
                        result: e,
                        toAssign: o
                    } = vn(n, {
                        ...t,
                        referenceRecord: {
                            ...t.referenceRecord,
                            ...r
                        }
                    });
                    if (!e) return {
                        result: e
                    };
                    o && (r[o.name] = o.value, t.logger?.debug?.(Zr, `assign: ${o.name} := ${Xr(o.value)}`))
                }
                return {
                    result: !0,
                    referenceRecord: r
                }
            },
            En = (e, t) => Object.entries(e).reduce(((e, [r, n]) => ({
                ...e,
                [r]: n.map((e => {
                    const n = bn(e, "Header value entry", t);
                    if ("string" != typeof n) throw new Yr(`Header '${r}' value '${n}' is not a string`);
                    return n
                }))
            })), {}),
            xn = (e, t) => {
                if (Array.isArray(e)) return e.map((e => xn(e, t)));
                switch (typeof e) {
                    case "string":
                        return yn(e, t);
                    case "object":
                        if (null === e) throw new Yr(`Unexpected endpoint property: ${e}`);
                        return Pn(e, t);
                    case "boolean":
                        return e;
                    default:
                        throw new Yr("Unexpected endpoint property type: " + typeof e)
                }
            },
            Pn = (e, t) => Object.entries(e).reduce(((e, [r, n]) => ({
                ...e,
                [r]: xn(n, t)
            })), {}),
            An = (e, t) => {
                const r = bn(e, "Endpoint URL", t);
                if ("string" == typeof r) try {
                    return new URL(r)
                } catch (e) {
                    throw console.error(`Failed to construct URL with ${r}`, e), e
                }
                throw new Yr("Endpoint URL must be a string, got " + typeof r)
            },
            _n = (e, t) => {
                const {
                    conditions: r,
                    endpoint: n
                } = e, {
                    result: o,
                    referenceRecord: i
                } = Sn(r, t);
                if (!o) return;
                const s = {
                        ...t,
                        referenceRecord: {
                            ...t.referenceRecord,
                            ...i
                        }
                    },
                    {
                        url: a,
                        properties: c,
                        headers: u
                    } = n;
                return t.logger?.debug?.(Zr, `Resolving endpoint from template: ${Xr(n)}`), {
                    ...null != u && {
                        headers: En(u, s)
                    },
                    ...null != c && {
                        properties: Pn(c, s)
                    },
                    url: An(a, s)
                }
            },
            On = (e, t) => {
                const {
                    conditions: r,
                    error: n
                } = e, {
                    result: o,
                    referenceRecord: i
                } = Sn(r, t);
                if (o) throw new Yr(bn(n, "Error", {
                    ...t,
                    referenceRecord: {
                        ...t.referenceRecord,
                        ...i
                    }
                }))
            },
            Tn = (e, t) => {
                const {
                    conditions: r,
                    rules: n
                } = e, {
                    result: o,
                    referenceRecord: i
                } = Sn(r, t);
                if (o) return Rn(n, {
                    ...t,
                    referenceRecord: {
                        ...t.referenceRecord,
                        ...i
                    }
                })
            },
            Rn = (e, t) => {
                for (const r of e)
                    if ("endpoint" === r.type) {
                        const e = _n(r, t);
                        if (e) return e
                    } else if ("error" === r.type) On(r, t);
                else {
                    if ("tree" !== r.type) throw new Yr(`Unknown endpoint rule: ${r}`);
                    {
                        const e = Tn(r, t);
                        if (e) return e
                    }
                }
                throw new Yr("Rules evaluation failed")
            },
            Mn = (e, t) => {
                const {
                    endpointParams: r,
                    logger: n
                } = t, {
                    parameters: o,
                    rules: i
                } = e;
                t.logger?.debug?.(Zr, `Initial EndpointParams: ${Xr(r)}`);
                const s = Object.entries(o).filter((([, e]) => null != e.default)).map((([e, t]) => [e, t.default]));
                if (s.length > 0)
                    for (const [e, t] of s) r[e] = r[e] ?? t;
                const a = Object.entries(o).filter((([, e]) => e.required)).map((([e]) => e));
                for (const e of a)
                    if (null == r[e]) throw new Yr(`Missing required parameter: '${e}'`);
                const c = Rn(i, {
                    endpointParams: r,
                    logger: n,
                    referenceRecord: {}
                });
                if (t.endpointParams?.Endpoint) try {
                    const e = new URL(t.endpointParams.Endpoint),
                        {
                            protocol: r,
                            port: n
                        } = e;
                    c.url.protocol = r, c.url.port = n
                } catch (e) {}
                return t.logger?.debug?.(Zr, `Resolved endpoint: ${Xr(c)}`), c
            },
            Nn = "required",
            Cn = "fn",
            In = "argv",
            kn = "ref",
            jn = "PartitionResult",
            Fn = "tree",
            Dn = "error",
            $n = "endpoint",
            Ln = {
                [Nn]: !1,
                type: "String"
            },
            Bn = {
                [Nn]: !0,
                default: !1,
                type: "Boolean"
            },
            Un = {
                [kn]: "Endpoint"
            },
            qn = {
                [Cn]: "booleanEquals",
                [In]: [{
                    [kn]: "UseFIPS"
                }, !0]
            },
            zn = {
                [Cn]: "booleanEquals",
                [In]: [{
                    [kn]: "UseDualStack"
                }, !0]
            },
            Hn = {},
            Vn = {
                [Cn]: "booleanEquals",
                [In]: [!0, {
                    [Cn]: "getAttr",
                    [In]: [{
                        [kn]: jn
                    }, "supportsFIPS"]
                }]
            },
            Gn = {
                [Cn]: "booleanEquals",
                [In]: [!0, {
                    [Cn]: "getAttr",
                    [In]: [{
                        [kn]: jn
                    }, "supportsDualStack"]
                }]
            },
            Wn = [Un],
            Kn = [qn],
            Zn = [zn],
            Xn = {
                version: "1.0",
                parameters: {
                    Region: Ln,
                    UseDualStack: Bn,
                    UseFIPS: Bn,
                    Endpoint: Ln
                },
                rules: [{
                    conditions: [{
                        [Cn]: "aws.partition",
                        [In]: [{
                            [kn]: "Region"
                        }],
                        assign: jn
                    }],
                    type: Fn,
                    rules: [{
                        conditions: [{
                            [Cn]: "isSet",
                            [In]: Wn
                        }, {
                            [Cn]: "parseURL",
                            [In]: Wn,
                            assign: "url"
                        }],
                        type: Fn,
                        rules: [{
                            conditions: Kn,
                            error: "Invalid Configuration: FIPS and custom endpoint are not supported",
                            type: Dn
                        }, {
                            type: Fn,
                            rules: [{
                                conditions: Zn,
                                error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
                                type: Dn
                            }, {
                                endpoint: {
                                    url: Un,
                                    properties: Hn,
                                    headers: Hn
                                },
                                type: $n
                            }]
                        }]
                    }, {
                        conditions: [qn, zn],
                        type: Fn,
                        rules: [{
                            conditions: [Vn, Gn],
                            type: Fn,
                            rules: [{
                                endpoint: {
                                    url: "https://email-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                    properties: Hn,
                                    headers: Hn
                                },
                                type: $n
                            }]
                        }, {
                            error: "FIPS and DualStack are enabled, but this partition does not support one or both",
                            type: Dn
                        }]
                    }, {
                        conditions: Kn,
                        type: Fn,
                        rules: [{
                            conditions: [Vn],
                            type: Fn,
                            rules: [{
                                type: Fn,
                                rules: [{
                                    endpoint: {
                                        url: "https://email-fips.{Region}.{PartitionResult#dnsSuffix}",
                                        properties: Hn,
                                        headers: Hn
                                    },
                                    type: $n
                                }]
                            }]
                        }, {
                            error: "FIPS is enabled but this partition does not support FIPS",
                            type: Dn
                        }]
                    }, {
                        conditions: Zn,
                        type: Fn,
                        rules: [{
                            conditions: [Gn],
                            type: Fn,
                            rules: [{
                                endpoint: {
                                    url: "https://email.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                    properties: Hn,
                                    headers: Hn
                                },
                                type: $n
                            }]
                        }, {
                            error: "DualStack is enabled but this partition does not support DualStack",
                            type: Dn
                        }]
                    }, {
                        endpoint: {
                            url: "https://email.{Region}.{PartitionResult#dnsSuffix}",
                            properties: Hn,
                            headers: Hn
                        },
                        type: $n
                    }]
                }]
            },
            Yn = (e, t = {}) => Mn(Xn, {
                endpointParams: e,
                logger: t.logger
            }),
            Qn = ["in-region", "cross-region", "mobile", "standard", "legacy"],
            Jn = ({
                defaultsMode: e
            } = {}) => Nt((async () => {
                const t = "function" == typeof e ? await e() : e;
                switch (t?.toLowerCase()) {
                    case "auto":
                        return Promise.resolve(eo() ? "mobile" : "standard");
                    case "mobile":
                    case "in-region":
                    case "cross-region":
                    case "standard":
                    case "legacy":
                        return Promise.resolve(t?.toLocaleLowerCase());
                    case void 0:
                        return Promise.resolve("legacy");
                    default:
                        throw new Error(`Invalid parameter for "defaultsMode", expect ${Qn.join(", ")}, got ${t}`)
                }
            })),
            eo = () => {
                const e = ("undefined" != typeof window && window?.navigator?.userAgent ? qr().parse(window.navigator.userAgent) : void 0)?.platform?.type;
                return "tablet" === e || "mobile" === e
            },
            to = e => {
                const t = Jn(e),
                    r = () => t().then(U),
                    n = (e => ({
                        apiVersion: "2010-12-01",
                        base64Decoder: e?.base64Decoder ?? Fr,
                        base64Encoder: e?.base64Encoder ?? Dr,
                        disableHostPrefix: e?.disableHostPrefix ?? !1,
                        endpointProvider: e?.endpointProvider ?? Yn,
                        logger: e?.logger ?? new E,
                        serviceId: e?.serviceId ?? "SES",
                        urlParser: e?.urlParser ?? v,
                        utf8Decoder: e?.utf8Decoder ?? jt,
                        utf8Encoder: e?.utf8Encoder ?? Hr
                    }))(e);
                return {
                    ...n,
                    ...e,
                    runtime: "browser",
                    defaultsMode: t,
                    bodyLengthChecker: e?.bodyLengthChecker ?? Br,
                    credentialDefaultProvider: e?.credentialDefaultProvider ?? (e => () => Promise.reject(new Error("Credential is missing"))),
                    defaultUserAgentProvider: e?.defaultUserAgentProvider ?? zr({
                        serviceId: n.serviceId,
                        clientVersion: Or
                    }),
                    maxAttempts: e?.maxAttempts ?? 3,
                    region: e?.region ?? Lr("Region is missing"),
                    requestHandler: e?.requestHandler ?? new Mr(r),
                    retryMode: e?.retryMode ?? (async () => (await r()).retryMode || tt),
                    sha256: e?.sha256 ?? Tr.Sha256,
                    streamCollector: e?.streamCollector ?? $r,
                    useDualstackEndpoint: e?.useDualstackEndpoint ?? (() => Promise.resolve(false)),
                    useFipsEndpoint: e?.useFipsEndpoint ?? (() => Promise.resolve(false))
                }
            };
        class ro extends _ {
            constructor(e) {
                const t = to(e),
                    r = (n = t, {
                        ...n,
                        useDualstackEndpoint: n.useDualstackEndpoint ?? !1,
                        useFipsEndpoint: n.useFipsEndpoint ?? !1,
                        defaultSigningName: "ses"
                    });
                var n;
                const o = ze(r),
                    i = S(o),
                    s = ft(i),
                    a = vr(pr(s));
                super(a), this.config = a, this.middlewareStack.use(Ot(this.config)), this.middlewareStack.use(Ge(this.config)), this.middlewareStack.use(Ke(this.config)), this.middlewareStack.use(Xe(this.config)), this.middlewareStack.use(Je(this.config)), this.middlewareStack.use(wr(this.config)), this.middlewareStack.use(_r(this.config))
            }
            destroy() {
                super.destroy()
            }
        }
        const no = "3.267.0",
            oo = "required",
            io = "fn",
            so = "argv",
            ao = "ref",
            co = "PartitionResult",
            uo = "tree",
            lo = "error",
            fo = "endpoint",
            po = {
                [oo]: !1,
                type: "String"
            },
            ho = {
                [oo]: !0,
                default: !1,
                type: "Boolean"
            },
            go = {
                [ao]: "Endpoint"
            },
            mo = {
                [io]: "booleanEquals",
                [so]: [{
                    [ao]: "UseFIPS"
                }, !0]
            },
            yo = {
                [io]: "booleanEquals",
                [so]: [{
                    [ao]: "UseDualStack"
                }, !0]
            },
            bo = {},
            wo = {
                [io]: "booleanEquals",
                [so]: [!0, {
                    [io]: "getAttr",
                    [so]: [{
                        [ao]: co
                    }, "supportsFIPS"]
                }]
            },
            vo = {
                [io]: "booleanEquals",
                [so]: [!0, {
                    [io]: "getAttr",
                    [so]: [{
                        [ao]: co
                    }, "supportsDualStack"]
                }]
            },
            So = [go],
            Eo = [mo],
            xo = [yo],
            Po = {
                version: "1.0",
                parameters: {
                    Region: po,
                    UseDualStack: ho,
                    UseFIPS: ho,
                    Endpoint: po
                },
                rules: [{
                    conditions: [{
                        [io]: "aws.partition",
                        [so]: [{
                            [ao]: "Region"
                        }],
                        assign: co
                    }],
                    type: uo,
                    rules: [{
                        conditions: [{
                            [io]: "isSet",
                            [so]: So
                        }, {
                            [io]: "parseURL",
                            [so]: So,
                            assign: "url"
                        }],
                        type: uo,
                        rules: [{
                            conditions: Eo,
                            error: "Invalid Configuration: FIPS and custom endpoint are not supported",
                            type: lo
                        }, {
                            type: uo,
                            rules: [{
                                conditions: xo,
                                error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
                                type: lo
                            }, {
                                endpoint: {
                                    url: go,
                                    properties: bo,
                                    headers: bo
                                },
                                type: fo
                            }]
                        }]
                    }, {
                        conditions: [mo, yo],
                        type: uo,
                        rules: [{
                            conditions: [wo, vo],
                            type: uo,
                            rules: [{
                                endpoint: {
                                    url: "https://cognito-identity-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                    properties: bo,
                                    headers: bo
                                },
                                type: fo
                            }]
                        }, {
                            error: "FIPS and DualStack are enabled, but this partition does not support one or both",
                            type: lo
                        }]
                    }, {
                        conditions: Eo,
                        type: uo,
                        rules: [{
                            conditions: [wo],
                            type: uo,
                            rules: [{
                                type: uo,
                                rules: [{
                                    endpoint: {
                                        url: "https://cognito-identity-fips.{Region}.{PartitionResult#dnsSuffix}",
                                        properties: bo,
                                        headers: bo
                                    },
                                    type: fo
                                }]
                            }]
                        }, {
                            error: "FIPS is enabled but this partition does not support FIPS",
                            type: lo
                        }]
                    }, {
                        conditions: xo,
                        type: uo,
                        rules: [{
                            conditions: [vo],
                            type: uo,
                            rules: [{
                                endpoint: {
                                    url: "https://cognito-identity.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                    properties: bo,
                                    headers: bo
                                },
                                type: fo
                            }]
                        }, {
                            error: "DualStack is enabled but this partition does not support DualStack",
                            type: lo
                        }]
                    }, {
                        endpoint: {
                            url: "https://cognito-identity.{Region}.{PartitionResult#dnsSuffix}",
                            properties: bo,
                            headers: bo
                        },
                        type: fo
                    }]
                }]
            },
            Ao = (e, t = {}) => Mn(Po, {
                endpointParams: e,
                logger: t.logger
            }),
            _o = e => {
                const t = Jn(e),
                    r = () => t().then(U),
                    n = (e => ({
                        apiVersion: "2014-06-30",
                        base64Decoder: e?.base64Decoder ?? Fr,
                        base64Encoder: e?.base64Encoder ?? Dr,
                        disableHostPrefix: e?.disableHostPrefix ?? !1,
                        endpointProvider: e?.endpointProvider ?? Ao,
                        logger: e?.logger ?? new E,
                        serviceId: e?.serviceId ?? "Cognito Identity",
                        urlParser: e?.urlParser ?? v,
                        utf8Decoder: e?.utf8Decoder ?? jt,
                        utf8Encoder: e?.utf8Encoder ?? Hr
                    }))(e);
                return {
                    ...n,
                    ...e,
                    runtime: "browser",
                    defaultsMode: t,
                    bodyLengthChecker: e?.bodyLengthChecker ?? Br,
                    credentialDefaultProvider: e?.credentialDefaultProvider ?? (e => () => Promise.reject(new Error("Credential is missing"))),
                    defaultUserAgentProvider: e?.defaultUserAgentProvider ?? zr({
                        serviceId: n.serviceId,
                        clientVersion: no
                    }),
                    maxAttempts: e?.maxAttempts ?? 3,
                    region: e?.region ?? Lr("Region is missing"),
                    requestHandler: e?.requestHandler ?? new Mr(r),
                    retryMode: e?.retryMode ?? (async () => (await r()).retryMode || tt),
                    sha256: e?.sha256 ?? Tr.Sha256,
                    streamCollector: e?.streamCollector ?? $r,
                    useDualstackEndpoint: e?.useDualstackEndpoint ?? (() => Promise.resolve(false)),
                    useFipsEndpoint: e?.useFipsEndpoint ?? (() => Promise.resolve(false))
                }
            };
        class Oo extends _ {
            constructor(e) {
                const t = _o(e),
                    r = (n = t, {
                        ...n,
                        useDualstackEndpoint: n.useDualstackEndpoint ?? !1,
                        useFipsEndpoint: n.useFipsEndpoint ?? !1,
                        defaultSigningName: "cognito-identity"
                    });
                var n;
                const o = ze(r),
                    i = S(o),
                    s = ft(i),
                    a = vr(pr(s));
                super(a), this.config = a, this.middlewareStack.use(Ot(this.config)), this.middlewareStack.use(Ge(this.config)), this.middlewareStack.use(Ke(this.config)), this.middlewareStack.use(Xe(this.config)), this.middlewareStack.use(Je(this.config)), this.middlewareStack.use(_r(this.config))
            }
            destroy() {
                super.destroy()
            }
        }
        class To extends D {
            constructor(e) {
                super(e), Object.setPrototypeOf(this, To.prototype)
            }
        }
        var Ro, Mo, No, Co;
        ! function(e) {
            e.AUTHENTICATED_ROLE = "AuthenticatedRole", e.DENY = "Deny"
        }(Ro || (Ro = {}));
        class Io extends To {
            constructor(e) {
                super({
                    name: "InternalErrorException",
                    $fault: "server",
                    ...e
                }), this.name = "InternalErrorException", this.$fault = "server", Object.setPrototypeOf(this, Io.prototype)
            }
        }
        class ko extends To {
            constructor(e) {
                super({
                    name: "InvalidParameterException",
                    $fault: "client",
                    ...e
                }), this.name = "InvalidParameterException", this.$fault = "client", Object.setPrototypeOf(this, ko.prototype)
            }
        }
        class jo extends To {
            constructor(e) {
                super({
                    name: "LimitExceededException",
                    $fault: "client",
                    ...e
                }), this.name = "LimitExceededException", this.$fault = "client", Object.setPrototypeOf(this, jo.prototype)
            }
        }
        class Fo extends To {
            constructor(e) {
                super({
                    name: "NotAuthorizedException",
                    $fault: "client",
                    ...e
                }), this.name = "NotAuthorizedException", this.$fault = "client", Object.setPrototypeOf(this, Fo.prototype)
            }
        }
        class Do extends To {
            constructor(e) {
                super({
                    name: "ResourceConflictException",
                    $fault: "client",
                    ...e
                }), this.name = "ResourceConflictException", this.$fault = "client", Object.setPrototypeOf(this, Do.prototype)
            }
        }
        class $o extends To {
            constructor(e) {
                super({
                    name: "TooManyRequestsException",
                    $fault: "client",
                    ...e
                }), this.name = "TooManyRequestsException", this.$fault = "client", Object.setPrototypeOf(this, $o.prototype)
            }
        }! function(e) {
            e.ACCESS_DENIED = "AccessDenied", e.INTERNAL_SERVER_ERROR = "InternalServerError"
        }(Mo || (Mo = {}));
        class Lo extends To {
            constructor(e) {
                super({
                    name: "ResourceNotFoundException",
                    $fault: "client",
                    ...e
                }), this.name = "ResourceNotFoundException", this.$fault = "client", Object.setPrototypeOf(this, Lo.prototype)
            }
        }
        class Bo extends To {
            constructor(e) {
                super({
                    name: "ExternalServiceException",
                    $fault: "client",
                    ...e
                }), this.name = "ExternalServiceException", this.$fault = "client", Object.setPrototypeOf(this, Bo.prototype)
            }
        }
        class Uo extends To {
            constructor(e) {
                super({
                    name: "InvalidIdentityPoolConfigurationException",
                    $fault: "client",
                    ...e
                }), this.name = "InvalidIdentityPoolConfigurationException", this.$fault = "client", Object.setPrototypeOf(this, Uo.prototype)
            }
        }! function(e) {
            e.CONTAINS = "Contains", e.EQUALS = "Equals", e.NOT_EQUAL = "NotEqual", e.STARTS_WITH = "StartsWith"
        }(No || (No = {})),
        function(e) {
            e.RULES = "Rules", e.TOKEN = "Token"
        }(Co || (Co = {}));
        const qo = e => ({
                ...e
            }),
            zo = e => ({
                ...e
            }),
            Ho = e => ({
                ...e
            }),
            Vo = e => ({
                ...e
            }),
            Go = async (e, t) => {
                const r = {
                        ...e,
                        body: await Ei(e.body, t)
                    },
                    n = xi(e, r.body);
                switch (n) {
                    case "ExternalServiceException":
                    case "com.amazonaws.cognitoidentity#ExternalServiceException":
                        throw await Ko(r, t);
                    case "InternalErrorException":
                    case "com.amazonaws.cognitoidentity#InternalErrorException":
                        throw await Zo(r, t);
                    case "InvalidIdentityPoolConfigurationException":
                    case "com.amazonaws.cognitoidentity#InvalidIdentityPoolConfigurationException":
                        throw await Xo(r, t);
                    case "InvalidParameterException":
                    case "com.amazonaws.cognitoidentity#InvalidParameterException":
                        throw await Yo(r, t);
                    case "NotAuthorizedException":
                    case "com.amazonaws.cognitoidentity#NotAuthorizedException":
                        throw await Jo(r, t);
                    case "ResourceConflictException":
                    case "com.amazonaws.cognitoidentity#ResourceConflictException":
                        throw await ei(r, t);
                    case "ResourceNotFoundException":
                    case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
                        throw await ti(r, t);
                    case "TooManyRequestsException":
                    case "com.amazonaws.cognitoidentity#TooManyRequestsException":
                        throw await ri(r, t);
                    default:
                        const o = r.body;
                        L({
                            output: e,
                            parsedBody: o,
                            exceptionCtor: To,
                            errorCode: n
                        })
                }
            }, Wo = async (e, t) => {
                const r = {
                        ...e,
                        body: await Ei(e.body, t)
                    },
                    n = xi(e, r.body);
                switch (n) {
                    case "ExternalServiceException":
                    case "com.amazonaws.cognitoidentity#ExternalServiceException":
                        throw await Ko(r, t);
                    case "InternalErrorException":
                    case "com.amazonaws.cognitoidentity#InternalErrorException":
                        throw await Zo(r, t);
                    case "InvalidParameterException":
                    case "com.amazonaws.cognitoidentity#InvalidParameterException":
                        throw await Yo(r, t);
                    case "LimitExceededException":
                    case "com.amazonaws.cognitoidentity#LimitExceededException":
                        throw await Qo(r, t);
                    case "NotAuthorizedException":
                    case "com.amazonaws.cognitoidentity#NotAuthorizedException":
                        throw await Jo(r, t);
                    case "ResourceConflictException":
                    case "com.amazonaws.cognitoidentity#ResourceConflictException":
                        throw await ei(r, t);
                    case "ResourceNotFoundException":
                    case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
                        throw await ti(r, t);
                    case "TooManyRequestsException":
                    case "com.amazonaws.cognitoidentity#TooManyRequestsException":
                        throw await ri(r, t);
                    default:
                        const o = r.body;
                        L({
                            output: e,
                            parsedBody: o,
                            exceptionCtor: To,
                            errorCode: n
                        })
                }
            }, Ko = async (e, t) => {
                const r = e.body,
                    n = ai(r, t),
                    o = new Bo({
                        $metadata: bi(e),
                        ...n
                    });
                return $(o, r)
            }, Zo = async (e, t) => {
                const r = e.body,
                    n = di(r, t),
                    o = new Io({
                        $metadata: bi(e),
                        ...n
                    });
                return $(o, r)
            }, Xo = async (e, t) => {
                const r = e.body,
                    n = li(r, t),
                    o = new Uo({
                        $metadata: bi(e),
                        ...n
                    });
                return $(o, r)
            }, Yo = async (e, t) => {
                const r = e.body,
                    n = fi(r, t),
                    o = new ko({
                        $metadata: bi(e),
                        ...n
                    });
                return $(o, r)
            }, Qo = async (e, t) => {
                const r = e.body,
                    n = pi(r, t),
                    o = new jo({
                        $metadata: bi(e),
                        ...n
                    });
                return $(o, r)
            }, Jo = async (e, t) => {
                const r = e.body,
                    n = hi(r, t),
                    o = new Fo({
                        $metadata: bi(e),
                        ...n
                    });
                return $(o, r)
            }, ei = async (e, t) => {
                const r = e.body,
                    n = gi(r, t),
                    o = new Do({
                        $metadata: bi(e),
                        ...n
                    });
                return $(o, r)
            }, ti = async (e, t) => {
                const r = e.body,
                    n = mi(r, t),
                    o = new Lo({
                        $metadata: bi(e),
                        ...n
                    });
                return $(o, r)
            }, ri = async (e, t) => {
                const r = e.body,
                    n = yi(r, t),
                    o = new $o({
                        $metadata: bi(e),
                        ...n
                    });
                return $(o, r)
            }, ni = (e, t) => ({
                ...null != e.CustomRoleArn && {
                    CustomRoleArn: e.CustomRoleArn
                },
                ...null != e.IdentityId && {
                    IdentityId: e.IdentityId
                },
                ...null != e.Logins && {
                    Logins: ii(e.Logins, t)
                }
            }), oi = (e, t) => ({
                ...null != e.AccountId && {
                    AccountId: e.AccountId
                },
                ...null != e.IdentityPoolId && {
                    IdentityPoolId: e.IdentityPoolId
                },
                ...null != e.Logins && {
                    Logins: ii(e.Logins, t)
                }
            }), ii = (e, t) => Object.entries(e).reduce(((e, [t, r]) => (null === r || (e[t] = r), e)), {}), si = (e, t) => ({
                AccessKeyId: M(e.AccessKeyId),
                Expiration: null != e.Expiration ? R(F(T(e.Expiration))) : void 0,
                SecretKey: M(e.SecretKey),
                SessionToken: M(e.SessionToken)
            }), ai = (e, t) => ({
                message: M(e.message)
            }), ci = (e, t) => ({
                Credentials: null != e.Credentials ? si(e.Credentials) : void 0,
                IdentityId: M(e.IdentityId)
            }), ui = (e, t) => ({
                IdentityId: M(e.IdentityId)
            }), di = (e, t) => ({
                message: M(e.message)
            }), li = (e, t) => ({
                message: M(e.message)
            }), fi = (e, t) => ({
                message: M(e.message)
            }), pi = (e, t) => ({
                message: M(e.message)
            }), hi = (e, t) => ({
                message: M(e.message)
            }), gi = (e, t) => ({
                message: M(e.message)
            }), mi = (e, t) => ({
                message: M(e.message)
            }), yi = (e, t) => ({
                message: M(e.message)
            }), bi = e => ({
                httpStatusCode: e.statusCode,
                requestId: e.headers["x-amzn-requestid"] ?? e.headers["x-amzn-request-id"] ?? e.headers["x-amz-request-id"],
                extendedRequestId: e.headers["x-amz-id-2"],
                cfId: e.headers["x-amz-cf-id"]
            }), wi = (e = new Uint8Array, t) => e instanceof Uint8Array ? Promise.resolve(e) : t.streamCollector(e) || Promise.resolve(new Uint8Array), vi = async (e, t, r, n, o) => {
                const {
                    hostname: i,
                    protocol: s = "https",
                    port: a,
                    path: c
                } = await e.endpoint(), u = {
                    protocol: s,
                    hostname: i,
                    port: a,
                    method: "POST",
                    path: c.endsWith("/") ? c.slice(0, -1) + r : c + r,
                    headers: t
                };
                return void 0 !== n && (u.hostname = n), void 0 !== o && (u.body = o), new le(u)
            }, Si = (e, t) => ((e, t) => wi(e, t).then((e => t.utf8Encoder(e))))(e, t).then((e => e.length ? JSON.parse(e) : {})), Ei = async (e, t) => {
                const r = await Si(e, t);
                return r.message = r.message ?? r.Message, r
            }, xi = (e, t) => {
                const r = e => {
                        let t = e;
                        return "number" == typeof t && (t = t.toString()), t.indexOf(",") >= 0 && (t = t.split(",")[0]), t.indexOf(":") >= 0 && (t = t.split(":")[0]), t.indexOf("#") >= 0 && (t = t.split("#")[1]), t
                    },
                    n = (o = e.headers, i = "x-amzn-errortype", Object.keys(o).find((e => e.toLowerCase() === i.toLowerCase())));
                var o, i;
                return void 0 !== n ? r(e.headers[n]) : void 0 !== t.code ? r(t.code) : void 0 !== t.__type ? r(t.__type) : void 0
            };
        class Pi extends O {
            constructor(e) {
                super(), this.input = e
            }
            static getEndpointParameterInstructions() {
                return {
                    UseFIPS: {
                        type: "builtInParams",
                        name: "useFipsEndpoint"
                    },
                    Endpoint: {
                        type: "builtInParams",
                        name: "endpoint"
                    },
                    Region: {
                        type: "builtInParams",
                        name: "region"
                    },
                    UseDualStack: {
                        type: "builtInParams",
                        name: "useDualstackEndpoint"
                    }
                }
            }
            resolveMiddleware(e, t, r) {
                this.middlewareStack.use(c(t, this.serialize, this.deserialize)), this.middlewareStack.use(b(t, Pi.getEndpointParameterInstructions()));
                const n = e.concat(this.middlewareStack),
                    {
                        logger: o
                    } = t,
                    i = {
                        logger: o,
                        clientName: "CognitoIdentityClient",
                        commandName: "GetIdCommand",
                        inputFilterSensitiveLog: Ho,
                        outputFilterSensitiveLog: Vo
                    },
                    {
                        requestHandler: s
                    } = t;
                return n.resolve((e => s.handle(e.request, r || {})), i)
            }
            serialize(e, t) {
                return (async (e, t) => {
                    let r;
                    return r = JSON.stringify(oi(e, t)), vi(t, {
                        "content-type": "application/x-amz-json-1.1",
                        "x-amz-target": "AWSCognitoIdentityService.GetId"
                    }, "/", void 0, r)
                })(e, t)
            }
            deserialize(e, t) {
                return (async (e, t) => {
                    if (e.statusCode >= 300) return Wo(e, t);
                    const r = await Si(e.body, t);
                    let n = {};
                    n = ui(r, t);
                    const o = {
                        $metadata: bi(e),
                        ...n
                    };
                    return Promise.resolve(o)
                })(e, t)
            }
        }
        class Ai extends O {
            constructor(e) {
                super(), this.input = e
            }
            static getEndpointParameterInstructions() {
                return {
                    UseFIPS: {
                        type: "builtInParams",
                        name: "useFipsEndpoint"
                    },
                    Endpoint: {
                        type: "builtInParams",
                        name: "endpoint"
                    },
                    Region: {
                        type: "builtInParams",
                        name: "region"
                    },
                    UseDualStack: {
                        type: "builtInParams",
                        name: "useDualstackEndpoint"
                    }
                }
            }
            resolveMiddleware(e, t, r) {
                this.middlewareStack.use(c(t, this.serialize, this.deserialize)), this.middlewareStack.use(b(t, Ai.getEndpointParameterInstructions()));
                const n = e.concat(this.middlewareStack),
                    {
                        logger: o
                    } = t,
                    i = {
                        logger: o,
                        clientName: "CognitoIdentityClient",
                        commandName: "GetCredentialsForIdentityCommand",
                        inputFilterSensitiveLog: qo,
                        outputFilterSensitiveLog: zo
                    },
                    {
                        requestHandler: s
                    } = t;
                return n.resolve((e => s.handle(e.request, r || {})), i)
            }
            serialize(e, t) {
                return (async (e, t) => {
                    let r;
                    return r = JSON.stringify(ni(e, t)), vi(t, {
                        "content-type": "application/x-amz-json-1.1",
                        "x-amz-target": "AWSCognitoIdentityService.GetCredentialsForIdentity"
                    }, "/", void 0, r)
                })(e, t)
            }
            deserialize(e, t) {
                return (async (e, t) => {
                    if (e.statusCode >= 300) return Go(e, t);
                    const r = await Si(e.body, t);
                    let n = {};
                    n = ci(r, t);
                    const o = {
                        $metadata: bi(e),
                        ...n
                    };
                    return Promise.resolve(o)
                })(e, t)
            }
        }

        function _i(e) {
            return Promise.all(Object.keys(e).reduce(((t, r) => {
                const n = e[r];
                return "string" == typeof n ? t.push([r, n]) : t.push(n().then((e => [r, e]))), t
            }), [])).then((e => e.reduce(((e, [t, r]) => (e[t] = r, e)), {})))
        }

        function Oi() {
            throw new Mt("Response from Amazon Cognito contained no access key ID")
        }

        function Ti() {
            throw new Mt("Response from Amazon Cognito contained no credentials")
        }

        function Ri() {
            throw new Mt("Response from Amazon Cognito contained no secret key")
        }
        const Mi = "IdentityIds";
        class Ni {
            constructor(e = "aws:cognito-identity-ids") {
                this.dbName = e
            }
            getItem(e) {
                return this.withObjectStore("readonly", (t => {
                    const r = t.get(e);
                    return new Promise((e => {
                        r.onerror = () => e(null), r.onsuccess = () => e(r.result ? r.result.value : null)
                    }))
                })).catch((() => null))
            }
            removeItem(e) {
                return this.withObjectStore("readwrite", (t => {
                    const r = t.delete(e);
                    return new Promise(((e, t) => {
                        r.onerror = () => t(r.error), r.onsuccess = () => e()
                    }))
                }))
            }
            setItem(e, t) {
                return this.withObjectStore("readwrite", (r => {
                    const n = r.put({
                        id: e,
                        value: t
                    });
                    return new Promise(((e, t) => {
                        n.onerror = () => t(n.error), n.onsuccess = () => e()
                    }))
                }))
            }
            getDb() {
                const e = self.indexedDB.open(this.dbName, 1);
                return new Promise(((t, r) => {
                    e.onsuccess = () => {
                        t(e.result)
                    }, e.onerror = () => {
                        r(e.error)
                    }, e.onblocked = () => {
                        r(new Error("Unable to access DB"))
                    }, e.onupgradeneeded = () => {
                        const t = e.result;
                        t.onerror = () => {
                            r(new Error("Failed to create object store"))
                        }, t.createObjectStore(Mi, {
                            keyPath: "id"
                        })
                    }
                }))
            }
            withObjectStore(e, t) {
                return this.getDb().then((r => {
                    const n = r.transaction(Mi, e);
                    return n.oncomplete = () => r.close(), new Promise(((e, r) => {
                        n.onerror = () => r(n.error), e(t(n.objectStore(Mi)))
                    })).catch((e => {
                        throw r.close(), e
                    }))
                }))
            }
        }
        const Ci = new class {
            constructor(e = {}) {
                this.store = e
            }
            getItem(e) {
                return e in this.store ? this.store[e] : null
            }
            removeItem(e) {
                delete this.store[e]
            }
            setItem(e, t) {
                this.store[e] = t
            }
        };

        function Ii() {
            return "object" == typeof self && self.indexedDB ? new Ni : "object" == typeof window && window.localStorage ? window.localStorage : Ci
        }

        function ki({
            accountId: e,
            cache: t = Ii(),
            client: r,
            customRoleArn: n,
            identityPoolId: o,
            logins: i,
            userIdentifier: s = (i && 0 !== Object.keys(i).length ? void 0 : "ANONYMOUS")
        }) {
            const a = s ? `aws:cognito-identity-credentials:${o}:${s}` : void 0;
            let c = async () => {
                let s = a && await t.getItem(a);
                if (!s) {
                    const {
                        IdentityId: n = ji()
                    } = await r.send(new Pi({
                        AccountId: e,
                        IdentityPoolId: o,
                        Logins: i ? await _i(i) : void 0
                    }));
                    s = n, a && Promise.resolve(t.setItem(a, s)).catch((() => {}))
                }
                var u;
                return u = {
                    client: r,
                    customRoleArn: n,
                    logins: i,
                    identityId: s
                }, c = async () => {
                    const {
                        Credentials: {
                            AccessKeyId: e = Oi(),
                            Expiration: t,
                            SecretKey: r = Ri(),
                            SessionToken: n
                        } = Ti()
                    } = await u.client.send(new Ai({
                        CustomRoleArn: u.customRoleArn,
                        IdentityId: u.identityId,
                        Logins: u.logins ? await _i(u.logins) : void 0
                    }));
                    return {
                        identityId: u.identityId,
                        accessKeyId: e,
                        secretAccessKey: r,
                        sessionToken: n,
                        expiration: t
                    }
                }, c()
            };
            return () => c().catch((async e => {
                throw a && Promise.resolve(t.removeItem(a)).catch((() => {})), e
            }))
        }

        function ji() {
            throw new Mt("Response from Amazon Cognito contained no identity ID")
        }
        const Fi = e => ki({
            ...e,
            client: new Oo(e.clientConfig ?? {})
        });
        async function Di(e, t, r, n, o, i, s, a, c) {
            var u = "",
                d = new Le({
                    Destination: {
                        CcAddresses: [o],
                        ToAddresses: [n]
                    },
                    Message: {
                        Body: {
                            Text: {
                                Charset: "UTF-8",
                                Data: u += "Name: " + s + "\r\nEmail: " + a + "\r\n" + c
                            }
                        },
                        Subject: {
                            Charset: "UTF-8",
                            Data: i + " - message from " + a
                        }
                    },
                    Source: r,
                    ReplyToAddresses: [a]
                }),
                l = new ro({
                    region: e,
                    credentials: Fi({
                        clientConfig: {
                            region: e
                        },
                        identityPoolId: t
                    })
                });
            try {
                return await l.send(d)
            } catch (e) {
                throw console.error("Failed to send email."), Error(e)
            }
        }
        window.getCookie = function(e) {
            var t = document.cookie.match(new RegExp("(^| )" + e + "=([^;]+)"));
            if (t) return t[2]
        }
    })(), aws_library = n
})();