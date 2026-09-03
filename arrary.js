!function() {
    "use strict";
    var t = "undefined" != typeof window ? window : void 0
      , i = "undefined" != typeof globalThis ? globalThis : t
      , e = null == i ? void 0 : i.navigator
      , r = null == i ? void 0 : i.document
      , s = null == i ? void 0 : i.location
      , n = null == i ? void 0 : i.fetch
      , o = null != i && i.XMLHttpRequest && "withCredentials"in new i.XMLHttpRequest ? i.XMLHttpRequest : void 0
      , a = null == i ? void 0 : i.AbortController
      , l = null == i ? void 0 : i.CompressionStream
      , h = null == e ? void 0 : e.userAgent;
    function u() {
        return !(!t || !1 === t.navigator.onLine)
    }
    var d = "undefined" != typeof globalThis ? globalThis : t;
    d && "undefined" == typeof self && (d.self = d),
    d && "undefined" == typeof File && (d.File = function() {}
    );
    var v = null != t ? t : {}
      , c = {
        DEBUG: !1,
        LIB_VERSION: "0.5.0",
        LIB_NAME: "browser-common"
    };
    function f(t, i, e, r, s, n, o) {
        try {
            var a = t[n](o)
              , l = a.value
        } catch (t) {
            return void e(t)
        }
        a.done ? i(l) : Promise.resolve(l).then(r, s)
    }
    function p(t) {
        return function() {
            var i = this
              , e = arguments;
            return new Promise((function(r, s) {
                var n = t.apply(i, e);
                function o(t) {
                    f(n, r, s, o, a, "next", t)
                }
                function a(t) {
                    f(n, r, s, o, a, "throw", t)
                }
                o(void 0)
            }
            ))
        }
    }
    function g() {
        return g = Object.assign ? Object.assign.bind() : function(t) {
            for (var i = 1; arguments.length > i; i++) {
                var e = arguments[i];
                for (var r in e)
                    ({}).hasOwnProperty.call(e, r) && (t[r] = e[r])
            }
            return t
        }
        ,
        g.apply(null, arguments)
    }
    function _(t, i) {
        if (null == t)
            return {};
        var e = {};
        for (var r in t)
            if ({}.hasOwnProperty.call(t, r)) {
                if (-1 !== i.indexOf(r))
                    continue;
                e[r] = t[r]
            }
        return e
    }
    var m = t => {
        if ("string" != typeof t)
            return t;
        try {
            return JSON.parse(t)
        } catch (i) {
            return t
        }
    }
    ;
    function y(t) {
        return "string" == typeof t || t
    }
    function b(t) {
        return "string" == typeof t ? t : void 0
    }
    var w, x = ["$feature_flag", "$feature_flag_response", "$feature_flag_has_experiment", "$feature_flag_id", "$feature_flag_version", "$feature_flag_reason", "$feature_flag_request_id", "$feature_flag_evaluated_at", "$feature_flag_error", "locally_evaluated", "$groups", "$process_person_profile", "$geoip_disable", "$current_url", "$pathname", "$referring_domain", "utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gad_source", "mc_cid", "gclid", "gclsrc", "dclid", "gbraid", "wbraid", "fbclid", "msclkid", "twclid", "li_fat_id", "igshid", "ttclid", "rdt_cid", "epik", "qclid", "sccid", "irclid", "_kx", "$session_id", "$window_id", "$lib", "$lib_version", "$device_id", "$is_server"], S = function(t) {
        return t.AnonymousId = "anonymous_id",
        t.DistinctId = "distinct_id",
        t.Props = "props",
        t.EnablePersonProcessing = "enable_person_processing",
        t.PersonMode = "person_mode",
        t.FeatureFlagDetails = "feature_flag_details",
        t.FeatureFlags = "feature_flags",
        t.FeatureFlagPayloads = "feature_flag_payloads",
        t.BootstrapFeatureFlagDetails = "bootstrap_feature_flag_details",
        t.BootstrapFeatureFlags = "bootstrap_feature_flags",
        t.BootstrapFeatureFlagPayloads = "bootstrap_feature_flag_payloads",
        t.OverrideFeatureFlags = "override_feature_flags",
        t.Queue = "queue",
        t.AiQueue = "ai_queue",
        t.AiCaptureQueue = "ai_capture_queue",
        t.LogsQueue = "logs_queue",
        t.OptedOut = "opted_out",
        t.SessionId = "session_id",
        t.SessionStartTimestamp = "session_start_timestamp",
        t.SessionLastTimestamp = "session_timestamp",
        t.PersonProperties = "person_properties",
        t.GroupProperties = "group_properties",
        t.InstalledAppBuild = "installed_app_build",
        t.InstalledAppVersion = "installed_app_version",
        t.SessionReplay = "session_replay",
        t.PushRegistered = "push_registered",
        t.SessionReplayEventTriggerActivatedSession = "session_replay_event_trigger_activated_session",
        t.SurveyLastSeenDate = "survey_last_seen_date",
        t.SurveysSeen = "surveys_seen",
        t.Surveys = "surveys",
        t.RemoteConfig = "remote_config",
        t.FlagsEndpointWasHit = "flags_endpoint_was_hit",
        t.DeviceId = "device_id",
        t
    }({}), k = function(t) {
        return t.GZipJS = "gzip-js",
        t.Base64 = "base64",
        t
    }({}), E = ["$snapshot", "$pageview", "$pageleave", "$set", "survey dismissed", "survey sent", "survey shown", "$identify", "$groupidentify", "$create_alias", "$$client_ingestion_warning", "$web_experiment_applied", "$feature_enrollment_update", "$feature_flag_called"], P = ["token"], T = "NativeGzipValidationError", F = t => t.length >= 2 && 31 === t[0] && 139 === t[1], R = (t, i) => t === k.GZipJS || i === k.GZipJS || "gzip" === i, C = t => !(!t || "object" != typeof t) && "NotReadableError" === ("name"in t ? String(t.name) : ""), M = t => {
        var i = new Error("Native gzip produced invalid output: " + t);
        throw i.name = T,
        i
    }
    , I = function() {
        var t = p((function*(t, i) {
            18 > t.size && M("too-short");
            var e = new Uint8Array(yield t.slice(0, 10).arrayBuffer());
            F(e) && 8 === e[2] || M("invalid-header");
            var r = new DataView(yield t.slice(t.size - 8).arrayBuffer());
            r.getUint32(0, !0) !== (t => {
                for (var i = ( () => {
                    if (w)
                        return w;
                    w = [];
                    for (var t = 0; 256 > t; t++) {
                        for (var i = t, e = 0; 8 > e; e++)
                            i = 1 & i ? 3988292384 ^ i >>> 1 : i >>> 1;
                        w[t] = i >>> 0
                    }
                    return w
                }
                )(), e = 4294967295, r = 0; t.length > r; r++)
                    e = i[255 & (e ^ t[r])] ^ e >>> 8;
                return (4294967295 ^ e) >>> 0
            }
            )(i) && M("invalid-crc");
            var s = i.length >>> 0;
            r.getUint32(4, !0) !== s && M("invalid-size")
        }
        ));
        return function(i, e) {
            return t.apply(this, arguments)
        }
    }();
    function A() {
        return A = p((function*(t, i, e) {
            void 0 === i && (i = !0);
            try {
                var r = (new TextEncoder).encode(t)
                  , s = new globalThis.CompressionStream("gzip")
                  , n = s.writable.getWriter()
                  , o = n.write(r).then(( () => n.close())).catch(function() {
                    var t = p((function*(t) {
                        try {
                            yield n.abort(t)
                        } catch (t) {}
                        throw t
                    }
                    ));
                    return function(i) {
                        return t.apply(this, arguments)
                    }
                }())
                  , a = new Response(s.readable).blob()
                  , l = (yield Promise.all([a, o]))[0];
                return yield I(l, r),
                l
            } catch (t) {
                if (null != e && e.rethrow)
                    throw t;
                return i && console.error("Failed to gzip compress data", t),
                null
            }
        }
        )),
        A.apply(this, arguments)
    }
    var O = ["amazonbot", "amazonproductbot", "app.hypefactors.com", "applebot", "archive.org_bot", "awariobot", "backlinksextendedbot", "baiduspider", "bingbot", "bingpreview", "chrome-lighthouse", "dataforseobot", "deepscan", "duckduckbot", "facebookexternal", "facebookcatalog", "http://yandex.com/bots", "hubspot", "ia_archiver", "leikibot", "linkedinbot", "meta-externalagent", "mj12bot", "msnbot", "nessus", "petalbot", "pinterest", "prerender", "rogerbot", "screaming frog", "sebot-wa", "sitebulb", "slackbot", "slurp", "trendictionbot", "turnitin", "twitterbot", "vercel-screenshot", "vercelbot", "yahoo! slurp", "yandexbot", "zoombot", "bot.htm", "bot.php", "(bot;", "bot/", "crawler", "ahrefsbot", "ahrefssiteaudit", "semrushbot", "siteauditbot", "splitsignalbot", "gptbot", "oai-searchbot", "chatgpt-user", "perplexitybot", "better uptime bot", "sentryuptimebot", "uptimerobot", "headlesschrome", "cypress", "google-hoteladsverifier", "adsbot-google", "apis-google", "duplexweb-google", "feedfetcher-google", "google favicon", "google web preview", "google-read-aloud", "googlebot", "googleother", "google-cloudvertexbot", "googleweblight", "mediapartners-google", "storebot-google", "google-inspectiontool", "bytespider"]
      , D = function(t, i) {
        if (void 0 === i && (i = []),
        !t)
            return !1;
        var e = t.toLowerCase();
        return O.concat(i).some((t => {
            var i = t.toLowerCase();
            return -1 !== e.indexOf(i)
        }
        ))
    };
    function j(t, i) {
        return -1 !== t.indexOf(i)
    }
    var L = function(t) {
        return t.trim()
    }
      , N = function(t) {
        return t.replace(/^\$/, "")
    };
    function B(t) {
        var i, e = [];
        return null !== (i = JSON.stringify(t, (function(t, i) {
            if ("bigint" == typeof i)
                return i.toString();
            if ("function" != typeof i && "symbol" != typeof i) {
                if (i instanceof Error)
                    return {
                        name: i.name,
                        message: i.message,
                        stack: i.stack
                    };
                if (i && "object" == typeof i) {
                    for (; e.length > 0 && e[e.length - 1] !== this; )
                        e.pop();
                    if (e.includes(i))
                        return "[Circular]";
                    e.push(i)
                }
                return i
            }
        }
        ))) && void 0 !== i ? i : "null"
    }
    var z = Object.prototype
      , U = z.hasOwnProperty
      , q = z.toString
      , H = Array.isArray || function(t) {
        return "[object Array]" === q.call(t)
    }
      , V = t => "function" == typeof t
      , W = t => t === Object(t) && !H(t)
      , G = t => {
        if (W(t)) {
            for (var i in t)
                if (U.call(t, i))
                    return !1;
            return !0
        }
        return !1
    }
      , J = t => void 0 === t
      , K = t => "[object String]" == q.call(t)
      , Y = t => K(t) && 0 === t.trim().length
      , Q = t => null === t
      , X = t => J(t) || Q(t)
      , Z = t => "[object Number]" == q.call(t) && t == t
      , tt = t => Z(t) && t > 0
      , it = t => "[object Boolean]" === q.call(t)
      , et = t => t instanceof FormData
      , rt = t => j(E, t)
      , st = t => j(P, t);
    function nt(t) {
        return null === t || "object" != typeof t
    }
    function ot(t, i) {
        return {}.toString.call(t) === "[object " + i + "]"
    }
    function at(t) {
        switch ({}.toString.call(t)) {
        case "[object Error]":
        case "[object Exception]":
        case "[object DOMException]":
        case "[object DOMError]":
        case "[object WebAssembly.Exception]":
            return !0;
        default:
            return ht(t, Error)
        }
    }
    function lt(t) {
        return "undefined" != typeof Event && ht(t, Event)
    }
    function ht(t, i) {
        try {
            return t instanceof i
        } catch (t) {
            return !1
        }
    }
    var ut = [!0, "true", 1, "1", "yes"]
      , dt = t => j(ut, t)
      , vt = [!1, "false", 0, "0", "no"];
    function ct(t, i, e, r, s) {
        return i > e && (r.warn("min cannot be greater than max."),
        i = e),
        Z(t) ? t > e ? (r.warn(" cannot be  greater than max: " + e + ". Using max value instead."),
        e) : i > t ? (r.warn(" cannot be less than min: " + i + ". Using min value instead."),
        i) : t : (r.warn(" must be a number. using max or fallback. max: " + e + ", fallback: " + s),
        ct(s || e, i, e, r))
    }
    class ft {
        constructor(t) {
            this.it = {},
            this.rt = t.rt,
            this.nt = ct(t.bucketSize, 0, 100, t.st),
            this.ot = ct(t.refillRate, 0, this.nt, t.st),
            this.ut = ct(t.refillInterval, 0, 864e5, t.st)
        }
        ht(t, i) {
            var e = Math.floor((i - t.lastAccess) / this.ut);
            e > 0 && (t.tokens = Math.min(t.tokens + e * this.ot, this.nt),
            t.lastAccess = t.lastAccess + e * this.ut)
        }
        consumeRateLimit(t) {
            var i, e = Date.now(), r = String(t), s = this.it[r];
            return s ? this.ht(s, e) : this.it[r] = s = {
                tokens: this.nt,
                lastAccess: e
            },
            0 === s.tokens || (s.tokens--,
            0 === s.tokens && (null == (i = this.rt) || i.call(this, t)),
            0 === s.tokens)
        }
        stop() {
            this.it = {}
        }
    }
    var pt = "Mobile"
      , gt = "iOS"
      , _t = "Android"
      , mt = "Tablet"
      , yt = _t + " " + mt
      , bt = "iPad"
      , wt = "Apple"
      , xt = wt + " Watch"
      , St = "Safari"
      , kt = "BlackBerry"
      , Et = "Samsung"
      , $t = Et + "Browser"
      , Pt = Et + " Internet"
      , Tt = "Chrome"
      , Ft = Tt + " OS"
      , Rt = Tt + " " + gt
      , Ct = "Internet Explorer"
      , Mt = Ct + " " + pt
      , It = "Opera"
      , At = It + " Mini"
      , Ot = "Edge"
      , Dt = "Microsoft " + Ot
      , jt = "Firefox"
      , Lt = jt + " " + gt
      , Nt = "Nintendo"
      , Bt = "PlayStation"
      , zt = "Xbox"
      , Ut = _t + " " + pt
      , qt = pt + " " + St
      , Ht = "Windows"
      , Vt = Ht + " Phone"
      , Wt = "Nokia"
      , Gt = "Ouya"
      , Jt = "Generic"
      , Kt = Jt + " " + pt.toLowerCase()
      , Yt = Jt + " " + mt.toLowerCase()
      , Qt = "Konqueror"
      , Xt = "Oculus Browser"
      , Zt = "Vivaldi"
      , ti = "Yandex"
      , ii = "Whale"
      , ei = "DuckDuckGo"
      , ri = "Pale Moon"
      , si = "Waterfox"
      , ni = "Brave"
      , oi = "Google Search App"
      , ai = "(\\d+(\\.\\d+)?)"
      , li = new RegExp("Version/" + ai)
      , hi = new RegExp(zt,"i")
      , ui = new RegExp(Bt + " \\w+","i")
      , di = new RegExp(Nt + " \\w+","i")
      , vi = new RegExp(kt + "|PlayBook|BB10","i")
      , ci = {
        "NT3.51": "NT 3.11",
        "NT4.0": "NT 4.0",
        "5.0": "2000",
        5.1: "XP",
        5.2: "XP",
        "6.0": "Vista",
        6.1: "7",
        6.2: "8",
        6.3: "8.1",
        6.4: "10",
        "10.0": "10"
    }
      , fi = function(t, i, e, r) {
        i = i || "";
        var s = function(t) {
            return null != t && t.brave ? ni : null
        }(e);
        return s || (null != r && r.detectGoogleSearchApp && j(t, "GSA/") ? oi : j(t, " OPR/") && j(t, "Mini") ? At : j(t, " OPR/") ? It : vi.test(t) ? kt : j(t, "IE" + pt) || j(t, "WPDesktop") ? Mt : j(t, "OculusBrowser") ? Xt : j(t, $t) ? Pt : j(t, Ot) || j(t, "Edg/") ? Dt : j(t, Zt + "/") ? Zt : j(t, "YaBrowser/") ? ti : j(t, ii + "/") ? ii : j(t, ei + "/") || j(t, "Ddg/") ? ei : j(t, "FBIOS") ? "Facebook " + pt : j(t, "UCWEB") || j(t, "UCBrowser") ? "UC Browser" : j(t, "CriOS") ? Rt : j(t, "CrMo") || j(t, Tt) ? Tt : j(t, _t) && j(t, St) ? Ut : j(t, "FxiOS") ? Lt : j(t.toLowerCase(), Qt.toLowerCase()) ? Qt : j(t, ni + "/") ? ni : ( (t, i) => i && j(i, wt) || function(t) {
            return j(t, St) && !j(t, Tt) && !j(t, _t)
        }(t))(t, i) ? j(t, pt) ? qt : St : j(t, "PaleMoon/") ? ri : j(t, si + "/") ? si : j(t, jt) ? jt : j(t, "MSIE") || j(t, "Trident/") ? Ct : j(t, "Gecko") ? jt : "")
    }
      , pi = {
        [Mt]: [new RegExp("rv:" + ai)],
        [Dt]: [new RegExp(Ot + "?\\/" + ai)],
        [Tt]: [new RegExp("(" + Tt + "|CrMo)\\/" + ai)],
        [Rt]: [new RegExp("CriOS\\/" + ai)],
        "UC Browser": [new RegExp("(UCBrowser|UCWEB)\\/" + ai)],
        [St]: [li],
        [qt]: [li],
        [It]: [new RegExp("(Opera|OPR)\\/" + ai)],
        [jt]: [new RegExp(jt + "\\/" + ai)],
        [Lt]: [new RegExp("FxiOS\\/" + ai)],
        [Qt]: [new RegExp("Konqueror[:/]?" + ai,"i")],
        [kt]: [new RegExp(kt + " " + ai), li],
        [Ut]: [new RegExp("android\\s" + ai,"i")],
        [Pt]: [new RegExp($t + "\\/" + ai)],
        [Xt]: [new RegExp("OculusBrowser\\/" + ai)],
        [Zt]: [new RegExp(Zt + "\\/" + ai)],
        [ti]: [new RegExp("YaBrowser\\/" + ai)],
        [ii]: [new RegExp(ii + "\\/" + ai)],
        [ni]: [new RegExp(ni + "\\/" + ai)],
        [ei]: [new RegExp("(DuckDuckGo|Ddg)\\/" + ai)],
        [ri]: [new RegExp("PaleMoon\\/" + ai)],
        [si]: [new RegExp(si + "\\/" + ai)],
        [oi]: [new RegExp("GSA\\/" + ai)],
        [Ct]: [new RegExp("(rv:|MSIE )" + ai)],
        Mozilla: [new RegExp("rv:" + ai)]
    }
      , gi = function(t, i, e, r) {
        var s = fi(t, i, e, r)
          , n = pi[s];
        if (J(n))
            return null;
        for (var o = 0; n.length > o; o++) {
            var a = t.match(n[o]);
            if (a)
                return parseFloat(a[a.length - 2])
        }
        return null
    }
      , _i = [[new RegExp(zt + "; " + zt + " (.*?)[);]","i"), t => [zt, t && t[1] || ""]], [new RegExp(Nt,"i"), [Nt, ""]], [new RegExp(Bt,"i"), [Bt, ""]], [vi, [kt, ""]], [new RegExp(Ht,"i"), (t, i) => {
        if (/Phone/.test(i) || /WPDesktop/.test(i))
            return [Vt, ""];
        if (new RegExp(pt).test(i) && !/IEMobile\b/.test(i))
            return [Ht + " " + pt, ""];
        var e = /Windows NT ([0-9.]+)/i.exec(i);
        if (e && e[1]) {
            var r = ci[e[1]] || "";
            return /arm/i.test(i) && (r = "RT"),
            [Ht, r]
        }
        return [Ht, ""]
    }
    ], [/((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/, t => t && t[3] ? [gt, [t[3], t[4], t[5] || "0"].join(".")] : [gt, ""]], [/(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i, t => {
        var i = "";
        return t && t.length >= 3 && (i = J(t[2]) ? t[3] : t[2]),
        ["watchOS", i]
    }
    ], [new RegExp("(" + _t + " (\\d+)\\.(\\d+)\\.?(\\d+)?|" + _t + ")","i"), t => t && t[2] ? [_t, [t[2], t[3], t[4] || "0"].join(".")] : [_t, ""]], [/Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i, t => {
        var i = ["Mac OS X", ""];
        return t && t[1] && (i[1] = [t[1], t[2], t[3] || "0"].join(".")),
        i
    }
    ], [/Mac/i, ["Mac OS X", ""]], [/CrOS/, [Ft, ""]], [/Linux|debian/i, ["Linux", ""]]]
      , mi = function(t) {
        return di.test(t) ? Nt : ui.test(t) ? Bt : hi.test(t) ? zt : new RegExp(Gt,"i").test(t) ? Gt : new RegExp("(" + Vt + "|WPDesktop)","i").test(t) ? Vt : /iPad/.test(t) ? bt : /iPod/.test(t) ? "iPod Touch" : /iPhone/.test(t) ? "iPhone" : /(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(t) ? xt : vi.test(t) ? kt : /(kobo)\s(ereader|touch)/i.test(t) ? "Kobo" : new RegExp(Wt,"i").test(t) ? Wt : /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(t) || /(kf[a-z]+)( bui|\)).+silk\//i.test(t) ? "Kindle Fire" : /(Android|ZTE)/i.test(t) ? new RegExp(pt).test(t) && !/(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(t) || /pixel[\daxl ]{1,6}/i.test(t) && !/pixel c/i.test(t) || /(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(t) || /lmy47v/i.test(t) && !/QTAQZ3/i.test(t) ? _t : yt : new RegExp("(pda|" + pt + ")","i").test(t) ? Kt : new RegExp(mt,"i").test(t) && !new RegExp(mt + " pc","i").test(t) ? Yt : ""
    }
      , yi = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    function bi(t, i) {
        return "string" == typeof (e = t) && yi.test(e) ? t : i();
        var e
    }
    function wi(t) {
        return t ? t.split("#")[0] : t
    }
    function xi(t, i) {
        var e = setTimeout(t, i);
        return (null == e ? void 0 : e.unref) && (null == e || e.unref()),
        e
    }
    function Si(t, i, e) {
        return ki.apply(this, arguments)
    }
    function ki() {
        return (ki = p((function*(t, i, e) {
            var r;
            try {
                return yield Promise.race([t, new Promise(( (t, s) => {
                    r = xi(( () => {
                        try {
                            null == e || e(),
                            t()
                        } catch (t) {
                            s(t)
                        }
                    }
                    ), i)
                }
                ))])
            } finally {
                clearTimeout(r)
            }
        }
        ))).apply(this, arguments)
    }
    var Ei = {
        trace: {
            text: "TRACE",
            number: 1
        },
        debug: {
            text: "DEBUG",
            number: 5
        },
        info: {
            text: "INFO",
            number: 9
        },
        warn: {
            text: "WARN",
            number: 13
        },
        error: {
            text: "ERROR",
            number: 17
        },
        fatal: {
            text: "FATAL",
            number: 21
        }
    }
      , $i = Ei.info;
    function Pi(t) {
        if (it(t))
            return {
                boolValue: t
            };
        if ("number" == typeof t)
            return Number.isFinite(t) ? Number.isInteger(t) ? {
                intValue: t
            } : {
                doubleValue: t
            } : {
                stringValue: String(t)
            };
        if ("string" == typeof t)
            return {
                stringValue: t
            };
        if (H(t))
            return {
                arrayValue: {
                    values: t.map((t => Pi(t)))
                }
            };
        try {
            return {
                stringValue: JSON.stringify(t)
            }
        } catch (i) {
            return {
                stringValue: String(t)
            }
        }
    }
    function Ti(t) {
        var i = [];
        for (var e in t) {
            var r = t[e];
            Q(r) || J(r) || i.push({
                key: e,
                value: Pi(r)
            })
        }
        return i
    }
    function Fi(t, i) {
        var e = Ei[t.level || "info"] || $i
          , r = e.text
          , s = e.number
          , n = String(Date.now()) + "000000"
          , o = {};
        i.distinctId && (o.posthogDistinctId = i.distinctId),
        i.sessionId && (o.sessionId = i.sessionId),
        i.windowId && (o["window.id"] = i.windowId),
        X(i.sessionStartTimestamp) || (o.sessionStartTimestamp = String(i.sessionStartTimestamp)),
        X(i.lastActivityTimestamp) || (o.lastActivityTimestamp = String(i.lastActivityTimestamp)),
        i.currentUrl && (o["url.full"] = i.currentUrl),
        i.screenName && (o["screen.name"] = i.screenName),
        i.appState && (o["app.state"] = i.appState),
        i.activeFeatureFlags && i.activeFeatureFlags.length > 0 && (o.feature_flags = i.activeFeatureFlags);
        var a = g({}, o, t.attributes || {})
          , l = {
            timeUnixNano: n,
            observedTimeUnixNano: n,
            severityNumber: s,
            severityText: r,
            body: {
                stringValue: t.body
            },
            attributes: Ti(a)
        };
        return t.trace_id && (l.traceId = t.trace_id),
        t.span_id && (l.spanId = t.span_id),
        J(t.trace_flags) || (l.flags = t.trace_flags),
        l
    }
    function Ri(t, i, e) {
        return g({}, t.resourceAttributes, {
            "service.name": t.serviceName || "unknown_service"
        }, t.environment && {
            "deployment.environment": t.environment
        }, t.serviceVersion && {
            "service.version": t.serviceVersion
        }, {
            "telemetry.sdk.name": i,
            "telemetry.sdk.version": e
        })
    }
    function Ci(t, i, e, r) {
        return {
            resourceLogs: [{
                resource: {
                    attributes: Ti(i)
                },
                scopeLogs: [{
                    scope: {
                        name: e,
                        version: r
                    },
                    logRecords: t
                }]
            }]
        }
    }
    let Mi = class {
        constructor(t, i, e, r, s, n, o) {
            var a;
            void 0 === n && (n = () => Promise.resolve()),
            this._instance = t,
            this.qe = i,
            this.st = e,
            this.dt = r,
            this.vt = s,
            this.ct = n,
            this.ft = o,
            this.yt = null,
            this.bt = 0,
            this._t = 0,
            this.wt = 0,
            this.kt = 0,
            this.xt = !1,
            this.St = i.maxBufferSize,
            this.Ct = Math.max(null !== (a = i.maxQueueSize) && void 0 !== a ? a : i.maxBufferSize, i.maxBufferSize),
            this.Mt = i.flushIntervalMs,
            this.Tt = i.maxBatchRecordsPerPost,
            this.Et = i.rateCapWindowMs,
            this.It = i.maxLogsPerInterval
        }
        reset() {
            this.Pt(),
            this.yt = null,
            this.wt = 0,
            this.kt = 0,
            this.xt = !1,
            this.bt = 0,
            this._t = 0,
            this.Tt = this.qe.maxBatchRecordsPerPost
        }
        onReconnect() {
            this._t = 0,
            this.Rt()
        }
        captureLog(t) {
            if (!this._instance.isDisabled && !this._instance.optedOut && null != t && t.body) {
                var i = this.At(t);
                if (null !== i)
                    if (i.body) {
                        if (this.Ft()) {
                            var e = {
                                record: Fi(i, this.dt())
                            };
                            this.vt(( () => this.Ot(e)))
                        }
                    } else
                        this.st.info("Log was rejected in beforeSend function")
            }
        }
        At(t) {
            var i = this.qe.beforeSend;
            if (!i)
                return t;
            var e = H(i) ? i : [i]
              , r = t;
            for (var s of e)
                try {
                    var n = s(r);
                    if (!n)
                        return this.st.info("Log was rejected in beforeSend function"),
                        null;
                    r = n
                } catch (t) {
                    return this.st.error("Error in beforeSend function for log:", t),
                    null
                }
            return r
        }
        Ft() {
            if (void 0 === this.It)
                return !0;
            var t = Date.now()
              , i = t - this.wt;
            return this.Et > i && i >= 0 || (this.wt = t,
            this.kt = 0,
            this.xt = !1),
            this.It > this.kt ? (this.kt++,
            !0) : (this.xt || (this.st.warn("captureLog dropping logs: exceeded " + this.It + " logs per " + this.Et + "ms"),
            this.xt = !0),
            !1)
        }
        flush() {
            var t = this;
            return p((function*() {
                if (!t._instance.isDisabled)
                    return t.yt || (t.yt = t.Lt().finally(( () => {
                        t.yt = null
                    }
                    ))),
                    t.yt
            }
            ))()
        }
        Lt() {
            var t = this;
            return p((function*() {
                var i;
                t.Pt();
                var e = null !== (i = t._instance.getPersistedProperty(S.LogsQueue)) && void 0 !== i ? i : [];
                if (0 !== e.length)
                    for (var r = e.length, s = 0; e.length > 0 && r > s; ) {
                        var n, o;
                        t.bt = 0;
                        var a = Math.min(e.length, t.Tt)
                          , l = e.slice(0, a)
                          , h = Ci(l.map((t => t.record)), t.Dt(), null !== (n = t.ft) && void 0 !== n ? n : t._instance.getLibraryId(), t._instance.getLibraryVersion())
                          , u = yield t._instance.$t(h);
                        if ("too-large" === u.kind && l.length > 1)
                            t.Tt = Math.max(1, Math.floor(l.length / 2)),
                            t.st.warn("Received 413 when sending logs batch of size " + l.length + ", reducing batch size to " + t.Tt);
                        else {
                            if ("retry-later" === u.kind)
                                throw u.error;
                            if ("too-large" === u.kind ? t.st.warn("Dropping a single log record after 413 with batch size 1 — the record is larger than the server cap and cannot be split further.") : "ok" === u.kind && t.qe.maxBatchRecordsPerPost > t.Tt && (t.Tt = Math.min(t.qe.maxBatchRecordsPerPost, t.Tt + 1)),
                            yield t.Nt(l.length),
                            e = null !== (o = t._instance.getPersistedProperty(S.LogsQueue)) && void 0 !== o ? o : [],
                            s += l.length,
                            "fatal" === u.kind)
                                throw u.error
                        }
                    }
            }
            ))()
        }
        Nt(t) {
            var i = this;
            return p((function*() {
                var e, r = Math.max(0, t - i.bt), s = null !== (e = i._instance.getPersistedProperty(S.LogsQueue)) && void 0 !== e ? e : [];
                i._instance.setPersistedProperty(S.LogsQueue, s.slice(r)),
                yield i.ct()
            }
            ))()
        }
        Dt() {
            return Ri(this.qe, this._instance.getLibraryId(), this._instance.getLibraryVersion())
        }
        Ot(t) {
            var i;
            if (!this._instance.optedOut) {
                var e = null !== (i = this._instance.getPersistedProperty(S.LogsQueue)) && void 0 !== i ? i : [];
                this.Ct > e.length || (e.shift(),
                this.bt++,
                this.st.info("Logs queue is full, dropping oldest record.")),
                e.push(t),
                this._instance.setPersistedProperty(S.LogsQueue, e),
                this.St > e.length ? this.qt() : this.Rt()
            }
        }
        qt(t) {
            void 0 === t && (t = this.Mt),
            this.jt || (this.jt = xi(( () => {
                this.jt = void 0,
                this.Rt()
            }
            ), t))
        }
        Bt() {
            var t = Math.min(Math.max(0, this._t - 1), 6);
            return this.Mt * Math.pow(2, t)
        }
        Ht() {
            var t = this._instance.getPersistedProperty(S.LogsQueue);
            return !!t && t.length > 0
        }
        shutdown(t) {
            var i = this;
            return p((function*() {
                i.Pt();
                var e = i.flush().catch(( () => {}
                ));
                void 0 !== t ? yield Si(e, t) : yield e
            }
            ))()
        }
        flushWithTimeout(t) {
            var i = this;
            return p((function*() {
                var e = i.flush();
                yield Si(e, t, ( () => {
                    e.catch(( () => {}
                    ))
                }
                ))
            }
            ))()
        }
        Rt() {
            this.flush().then(( () => {
                this._t = 0
            }
            ), (t => {
                this._t++,
                this.st.error("PostHog logs flush failed:", t)
            }
            )).finally(( () => {
                !this._instance.isDisabled && this.Ht() && this.qt(this.Bt())
            }
            ))
        }
        Pt() {
            this.jt && (clearTimeout(this.jt),
            this.jt = void 0)
        }
    }
    ;
    var Ii = [0, 5, 10, 25, 50, 75, 100, 250, 500, 750, 1e3, 2500, 5e3, 7500, 1e4];
    function Ai(t) {
        return String(t) + "000000"
    }
    function Oi(t, i, e, r) {
        var s = "";
        return r && (s = Object.keys(r).sort().map((t => JSON.stringify(t) + ":" + JSON.stringify(r[t]))).join(",")),
        t + "\0" + i + "\0" + (null != e ? e : "") + "\0" + s
    }
    let Di = class {
        constructor(t, i, e) {
            this._instance = t,
            this.qe = i,
            this.st = e,
            this.Ut = new Map,
            this.yt = null,
            this.zt = !1,
            this.Wt = new Map,
            this.Vt = new Set,
            this.Zt = 0
        }
        count(t, i, e) {
            void 0 === i && (i = 1),
            this.Gt({
                name: t,
                type: "count",
                value: i,
                unit: null == e ? void 0 : e.unit,
                attributes: null == e ? void 0 : e.attributes
            })
        }
        gauge(t, i, e) {
            this.Gt({
                name: t,
                type: "gauge",
                value: i,
                unit: null == e ? void 0 : e.unit,
                attributes: null == e ? void 0 : e.attributes
            })
        }
        histogram(t, i, e) {
            this.Gt({
                name: t,
                type: "histogram",
                value: i,
                unit: null == e ? void 0 : e.unit,
                attributes: null == e ? void 0 : e.attributes
            })
        }
        flush() {
            var t = this
              , i = this.yt
              , e = function() {
                var e = p((function*() {
                    i && (yield i.catch(( () => {}
                    ))),
                    yield t.Qt()
                }
                ));
                return function() {
                    return e.apply(this, arguments)
                }
            }()
              , r = e().finally(( () => {
                this.yt === r && (this.yt = null)
            }
            ));
            return this.yt = r,
            r
        }
        drainWindow() {
            if (0 === this.Ut.size)
                return null;
            var t = this.Ut;
            return this.Ut = new Map,
            this.zt = !1,
            this.Wt = new Map,
            this.Vt = new Set,
            this.Jt(t)
        }
        reset() {
            this.Zt++,
            this.Pt(),
            this.Ut = new Map,
            this.yt = null,
            this.zt = !1,
            this.Wt = new Map,
            this.Vt = new Set
        }
        Gt(t) {
            if (!this._instance.isDisabled && !this._instance.optedOut) {
                var i = this.At(t);
                if (null !== i)
                    if (i.name && "string" == typeof i.name)
                        if ("number" == typeof i.value && Number.isFinite(i.value))
                            if ("count" === i.type && 0 > i.value)
                                this.st.warn("Dropping count '" + i.name + "': counters are monotonic, value must be >= 0");
                            else {
                                var e, r;
                                try {
                                    e = i.attributes ? g({}, i.attributes) : void 0,
                                    r = Oi(i.type, i.name, i.unit, e)
                                } catch (t) {
                                    return void this.st.warn("Dropping metric '" + i.name + "': attributes could not be serialized", t)
                                }
                                var s = this.Ut.get(r);
                                if (!s) {
                                    if (!this.Kt())
                                        return;
                                    s = {
                                        name: i.name,
                                        type: i.type,
                                        unit: i.unit,
                                        attributes: e,
                                        windowStartMs: Date.now()
                                    },
                                    this.Ut.set(r, s)
                                }
                                var n = this.Wt.get(i.name);
                                void 0 === n ? this.Wt.set(i.name, i.type) : n === i.type || this.Vt.has(i.name) || (this.Vt.add(i.name),
                                this.st.warn("Metric name '" + i.name + "' is already used as a " + n + "; recording it as a " + i.type + " too will blend both series in charts. Use a distinct name.")),
                                this.Yt(s, i.value),
                                this.qt()
                            }
                        else
                            this.st.warn("Dropping metric '" + i.name + "': value must be a finite number");
                    else
                        this.st.warn("Dropping metric with empty name")
            }
        }
        Kt() {
            return this.qe.maxSeriesPerFlush > this.Ut.size || (this.zt || (this.zt = !0,
            this.st.warn("Metric series cap reached (" + this.qe.maxSeriesPerFlush + " per flush window); dropping new series until the next flush. Reduce attribute cardinality.")),
            !1)
        }
        Yt(t, i) {
            var e;
            switch (t.type) {
            case "count":
                t.total = (null !== (e = t.total) && void 0 !== e ? e : 0) + i;
                break;
            case "gauge":
                t.last = i;
                break;
            case "histogram":
                t.hist || (t.hist = {
                    count: 0,
                    sum: 0,
                    min: i,
                    max: i,
                    bucketCounts: new Array(Ii.length + 1).fill(0)
                });
                var r = t.hist;
                r.count += 1,
                r.sum += i,
                r.min = Math.min(r.min, i),
                r.max = Math.max(r.max, i),
                r.bucketCounts[function(t, i) {
                    for (var e = 0; i.length > e; e++)
                        if (i[e] >= t)
                            return e;
                    return i.length
                }(i, Ii)] += 1
            }
        }
        At(t) {
            var i = this.qe.beforeSend;
            if (!i)
                return t;
            var e = H(i) ? i : [i]
              , r = t;
            for (var s of e)
                try {
                    var n = s(r);
                    if (!n)
                        return this.st.info("Metric was rejected in beforeSend function"),
                        null;
                    r = n
                } catch (t) {
                    return this.st.error("Error in beforeSend function for metric:", t),
                    null
                }
            return r
        }
        qt() {
            this.jt || (this.jt = xi(( () => {
                this.jt = void 0,
                this.flush().catch((t => {
                    this.st.error("Metrics flush failed:", t)
                }
                ))
            }
            ), this.qe.flushIntervalMs))
        }
        Pt() {
            this.jt && (clearTimeout(this.jt),
            this.jt = void 0)
        }
        Qt() {
            var t = this;
            return p((function*() {
                if (0 !== t.Ut.size) {
                    var i = t.Ut;
                    t.Ut = new Map,
                    t.zt = !1,
                    t.Wt = new Map,
                    t.Vt = new Set;
                    var e = t.Zt
                      , r = yield t._instance.Xt(t.Jt(i));
                    if (e === t.Zt)
                        switch (r.kind) {
                        case "ok":
                            return;
                        case "retry-later":
                            return t.ti(i),
                            void t.qt();
                        case "too-large":
                            return void t.st.warn("Metrics batch exceeded the server size limit and was dropped");
                        case "fatal":
                            return void t.st.error("Failed to send metrics batch:", r.error)
                        }
                }
            }
            ))()
        }
        Jt(t) {
            return i = this.ei(t),
            e = function(t, i, e) {
                return g({}, t.resourceAttributes, {
                    "service.name": t.serviceName || "unknown_service"
                }, t.environment && {
                    "deployment.environment": t.environment
                }, t.serviceVersion && {
                    "service.version": t.serviceVersion
                }, {
                    "telemetry.sdk.name": i,
                    "telemetry.sdk.version": e
                })
            }(this.qe, this._instance.getLibraryId(), this._instance.getLibraryVersion()),
            r = this._instance.getLibraryId(),
            s = this._instance.getLibraryVersion(),
            {
                resourceMetrics: [{
                    resource: {
                        attributes: Ti(e)
                    },
                    scopeMetrics: [{
                        scope: {
                            name: r,
                            version: s
                        },
                        metrics: i
                    }]
                }]
            };
            var i, e, r, s
        }
        ei(t) {
            var i = Ai(Date.now())
              , e = new Map;
            for (var r of t.values()) {
                var s, n = Oi(r.type, r.name, r.unit, void 0), o = e.get(n);
                o || (o = g({
                    name: r.name
                }, r.unit && {
                    unit: r.unit
                }),
                "count" === r.type ? o.sum = {
                    aggregationTemporality: 1,
                    isMonotonic: !0,
                    dataPoints: []
                } : "gauge" === r.type ? o.gauge = {
                    dataPoints: []
                } : o.histogram = {
                    aggregationTemporality: 1,
                    dataPoints: []
                },
                e.set(n, o));
                var a = Ti(null !== (s = r.attributes) && void 0 !== s ? s : {})
                  , l = Ai(r.windowStartMs);
                if ("count" === r.type) {
                    var h, u = {
                        attributes: a,
                        startTimeUnixNano: l,
                        timeUnixNano: i,
                        asDouble: null !== (h = r.total) && void 0 !== h ? h : 0
                    };
                    o.sum.dataPoints.push(u)
                } else if ("gauge" === r.type) {
                    var d, v = {
                        attributes: a,
                        timeUnixNano: i,
                        asDouble: null !== (d = r.last) && void 0 !== d ? d : 0
                    };
                    o.gauge.dataPoints.push(v)
                } else
                    r.hist && o.histogram.dataPoints.push({
                        attributes: a,
                        startTimeUnixNano: l,
                        timeUnixNano: i,
                        count: r.hist.count,
                        sum: r.hist.sum,
                        min: r.hist.min,
                        max: r.hist.max,
                        bucketCounts: r.hist.bucketCounts,
                        explicitBounds: Ii
                    })
            }
            return Array.from(e.values())
        }
        ti(t) {
            var i, e;
            for (var r of t) {
                var s = r[0]
                  , n = r[1]
                  , o = this.Ut.get(s);
                if (o)
                    switch (o.windowStartMs = Math.min(o.windowStartMs, n.windowStartMs),
                    o.type) {
                    case "count":
                        o.total = (null !== (i = o.total) && void 0 !== i ? i : 0) + (null !== (e = n.total) && void 0 !== e ? e : 0);
                        break;
                    case "gauge":
                        break;
                    case "histogram":
                        if (n.hist)
                            if (o.hist) {
                                o.hist.count += n.hist.count,
                                o.hist.sum += n.hist.sum,
                                o.hist.min = Math.min(o.hist.min, n.hist.min),
                                o.hist.max = Math.max(o.hist.max, n.hist.max);
                                for (var a = 0; o.hist.bucketCounts.length > a; a++)
                                    o.hist.bucketCounts[a] += n.hist.bucketCounts[a]
                            } else
                                o.hist = n.hist
                    }
                else
                    this.Kt() && this.Ut.set(s, n)
            }
        }
    }
    ;
    var ji, Li, Ni;
    function Bi(t) {
        var i = globalThis._posthogChunkIds;
        if (i) {
            var e = Object.keys(i);
            return Ni && e.length === Li || (Li = e.length,
            Ni = e.reduce(( (e, r) => {
                ji || (ji = {});
                var s = ji[r];
                if (s)
                    e[s[0]] = s[1];
                else
                    for (var n = t(r), o = n.length - 1; o >= 0; o--) {
                        var a = n[o]
                          , l = null == a ? void 0 : a.filename
                          , h = i[r];
                        if (l && h) {
                            e[l] = h,
                            ji[r] = [l, h];
                            break
                        }
                    }
                return e
            }
            ), {})),
            Ni
        }
    }
    class zi {
        constructor(t, i, e) {
            void 0 === e && (e = []),
            this.coercers = t,
            this.stackParser = i,
            this.modifiers = e
        }
        buildFromUnknown(t, i) {
            void 0 === i && (i = {});
            var e = i && i.mechanism || {
                handled: !0,
                type: "generic"
            }
              , r = this.buildCoercingContext(e, i, 0).apply(t)
              , s = this.buildParsingContext(i)
              , n = this.parseStacktrace(r, s);
            return {
                $exception_list: this.convertToExceptionList(n, e),
                $exception_level: "error"
            }
        }
        modifyFrames(t) {
            var i = this;
            return p((function*() {
                for (var e of t)
                    e.stacktrace && e.stacktrace.frames && H(e.stacktrace.frames) && (e.stacktrace.frames = yield i.applyModifiers(e.stacktrace.frames));
                return t
            }
            ))()
        }
        coerceFallback(t) {
            var i;
            return {
                type: "Error",
                value: "Unknown error",
                stack: null == (i = t.syntheticException) ? void 0 : i.stack,
                synthetic: !0
            }
        }
        parseStacktrace(t, i) {
            var e, r;
            return null != t.cause && (e = this.parseStacktrace(t.cause, i)),
            "" != t.stack && null != t.stack && (r = this.applyChunkIds(this.stackParser(t.stack, t.synthetic ? i.skipFirstLines : 0), i.chunkIdMap)),
            g({}, t, {
                cause: e,
                stack: r
            })
        }
        applyChunkIds(t, i) {
            return t.map((t => (t.filename && i && (t.chunk_id = i[t.filename]),
            t)))
        }
        applyCoercers(t, i) {
            for (var e of this.coercers)
                if (e.match(t))
                    return e.coerce(t, i);
            return this.coerceFallback(i)
        }
        applyModifiers(t) {
            var i = this;
            return p((function*() {
                var e = t;
                for (var r of i.modifiers)
                    e = yield r(e);
                return e
            }
            ))()
        }
        convertToExceptionList(t, i) {
            var e, r, s, n = {
                type: t.type,
                value: t.value,
                mechanism: {
                    type: null !== (e = i.type) && void 0 !== e ? e : "generic",
                    handled: null === (r = i.handled) || void 0 === r || r,
                    synthetic: null !== (s = t.synthetic) && void 0 !== s && s
                }
            };
            t.stack && (n.stacktrace = {
                type: "raw",
                frames: t.stack
            });
            var o = [n];
            return null != t.cause && o.push(...this.convertToExceptionList(t.cause, g({}, i, {
                handled: !0
            }))),
            o
        }
        buildParsingContext(t) {
            var i;
            return {
                chunkIdMap: Bi(this.stackParser),
                skipFirstLines: null !== (i = t.skipFirstLines) && void 0 !== i ? i : 1
            }
        }
        buildCoercingContext(t, i, e) {
            void 0 === e && (e = 0);
            var r = (e, r) => {
                if (4 >= r) {
                    var s = this.buildCoercingContext(t, i, r);
                    return this.applyCoercers(e, s)
                }
            }
            ;
            return g({}, i, {
                syntheticException: 0 == e ? i.syntheticException : void 0,
                mechanism: t,
                apply: t => r(t, e),
                next: t => r(t, e + 1)
            })
        }
    }
    var Ui = "?";
    function qi(t, i, e, r, s) {
        var n = {
            platform: t,
            filename: i,
            function: "<anonymous>" === e ? Ui : e,
            in_app: !0
        };
        return J(r) || (n.lineno = r),
        J(s) || (n.colno = s),
        n
    }
    var Hi = (t, i) => {
        var e = -1 !== t.indexOf("safari-extension")
          , r = -1 !== t.indexOf("safari-web-extension");
        return e || r ? [-1 !== t.indexOf("@") ? t.split("@")[0] : Ui, e ? "safari-extension:" + i : "safari-web-extension:" + i] : [t, i]
    }
      , Vi = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i
      , Wi = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i
      , Gi = /\((\S*)(?::(\d+))(?::(\d+))\)/
      , Ji = (t, i) => {
        var e = Vi.exec(t);
        if (e)
            return qi(i, e[1], Ui, +e[2], +e[3]);
        var r = Wi.exec(t);
        if (r) {
            if (r[2] && 0 === r[2].indexOf("eval")) {
                var s = Gi.exec(r[2]);
                s && (r[2] = s[1],
                r[3] = s[2],
                r[4] = s[3])
            }
            var n = Hi(r[1] || Ui, r[2]);
            return qi(i, n[1], n[0], r[3] ? +r[3] : void 0, r[4] ? +r[4] : void 0)
        }
    }
      , Ki = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i
      , Yi = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i
      , Qi = (t, i) => {
        var e = Ki.exec(t);
        if (e) {
            if (e[3] && e[3].indexOf(" > eval") > -1) {
                var r = Yi.exec(e[3]);
                r && (e[1] = e[1] || "eval",
                e[3] = r[1],
                e[4] = r[2],
                e[5] = "")
            }
            var s = e[3]
              , n = e[1] || Ui
              , o = Hi(n, s);
            return qi(i, s = o[1], n = o[0], e[4] ? +e[4] : void 0, e[5] ? +e[5] : void 0)
        }
    }
      , Xi = /\(error: (.*)\)/;
    class Zi {
        match(t) {
            return this.isDOMException(t) || this.isDOMError(t)
        }
        coerce(t, i) {
            var e = K(t.stack);
            return {
                type: this.getType(t),
                value: this.getValue(t),
                stack: e ? t.stack : void 0,
                cause: t.cause ? i.next(t.cause) : void 0,
                synthetic: !1
            }
        }
        getType(t) {
            return this.isDOMError(t) ? "DOMError" : "DOMException"
        }
        getValue(t) {
            var i = t.name || (this.isDOMError(t) ? "DOMError" : "DOMException");
            return t.message ? i + ": " + t.message : i
        }
        isDOMException(t) {
            return ot(t, "DOMException")
        }
        isDOMError(t) {
            return ot(t, "DOMError")
        }
    }
    class te {
        match(t) {
            return at(t)
        }
        coerce(t, i) {
            return {
                type: this.getType(t),
                value: this.getMessage(t, i),
                stack: this.getStack(t),
                cause: t.cause ? i.next(t.cause) : void 0,
                synthetic: !1
            }
        }
        getType(t) {
            return t.name || t.constructor.name
        }
        getMessage(t, i) {
            var e = t.message;
            return String(e.error && "string" == typeof e.error.message ? e.error.message : e)
        }
        getStack(t) {
            return t.stacktrace || t.stack || void 0
        }
    }
    class ie {
        constructor() {}
        match(t) {
            return !!ot(t, "ErrorEvent") && (null != t.error || this.fe(t))
        }
        coerce(t, i) {
            var e;
            if (null != t.error)
                return i.apply(t.error);
            var r = i.apply(t.message);
            return g({}, r, {
                stack: null !== (e = this.pe(t)) && void 0 !== e ? e : r.stack,
                synthetic: !0
            })
        }
        fe(t) {
            return K(t.message) && t.message.length > 0
        }
        pe(t) {
            var i = t;
            if (K(i.filename) && i.filename.length > 0) {
                var e, r, s = null !== (e = i.lineno) && void 0 !== e ? e : 0, n = null !== (r = i.colno) && void 0 !== r ? r : 0;
                return "Error\n    at " + i.filename + ":" + s + ":" + n
            }
        }
    }
    var ee = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
    class re {
        match(t) {
            return "string" == typeof t
        }
        coerce(t, i) {
            var e, r = this.getInfos(t), s = r[0], n = r[1];
            return {
                type: null != s ? s : "Error",
                value: null != n ? n : t,
                stack: null == (e = i.syntheticException) ? void 0 : e.stack,
                synthetic: !0
            }
        }
        getInfos(t) {
            var i = "Error"
              , e = t
              , r = t.match(ee);
            return r && (i = r[1],
            e = r[2]),
            [i, e]
        }
    }
    var se = ["fatal", "error", "warning", "log", "info", "debug"];
    function ne(t, i) {
        void 0 === i && (i = 40);
        var e = Object.keys(t);
        if (e.sort(),
        !e.length)
            return "[object has no keys]";
        for (var r = e.length; r > 0; r--) {
            var s = e.slice(0, r).join(", ");
            if (i >= s.length)
                return r === e.length ? s : s.length > i ? s.slice(0, i) + "..." : s
        }
        return ""
    }
    class oe {
        match(t) {
            return "object" == typeof t && null !== t
        }
        coerce(t, i) {
            var e, r, s = this.getErrorPropertyFromObject(t);
            return s ? i.apply(s) : {
                type: this.getType(t),
                value: this.getValue(t),
                stack: null !== (e = this.getStack(t)) && void 0 !== e ? e : null == (r = i.syntheticException) ? void 0 : r.stack,
                level: this.isSeverityLevel(t.level) ? t.level : "error",
                synthetic: !0
            }
        }
        getType(t) {
            if (lt(t))
                return t.constructor.name;
            var i = "name"in t ? t.name : void 0;
            return K(i) && !Y(i) ? i : "Error"
        }
        getValue(t) {
            if ("name"in t && "string" == typeof t.name) {
                var i = "'" + t.name + "' captured as exception";
                return "message"in t && "string" == typeof t.message && (i += " with message: '" + t.message + "'"),
                i
            }
            if ("message"in t && "string" == typeof t.message)
                return t.message;
            var e = this.getObjectClassName(t);
            return (e && "Object" !== e ? "'" + e + "'" : "Object") + " captured as exception with keys: " + ne(t)
        }
        isSeverityLevel(t) {
            return K(t) && !Y(t) && se.indexOf(t) >= 0
        }
        getStack(t) {
            try {
                return K(t.stacktrace) && t.stacktrace.length > 0 ? t.stacktrace : K(t.stack) && t.stack.length > 0 ? t.stack : void 0
            } catch (t) {
                return
            }
        }
        getErrorPropertyFromObject(t) {
            for (var i in t)
                if ({}.hasOwnProperty.call(t, i)) {
                    var e = t[i];
                    if (at(e))
                        return e
                }
        }
        getObjectClassName(t) {
            try {
                var i = Object.getPrototypeOf(t);
                return i ? i.constructor.name : void 0
            } catch (t) {
                return
            }
        }
    }
    class ae {
        match(t) {
            return lt(t)
        }
        coerce(t, i) {
            var e, r = t.constructor.name;
            return {
                type: r,
                value: r + " captured as exception with keys: " + ne(t),
                stack: null == (e = i.syntheticException) ? void 0 : e.stack,
                synthetic: !0
            }
        }
    }
    class le {
        match(t) {
            return nt(t)
        }
        coerce(t, i) {
            var e;
            return {
                type: "Error",
                value: "Primitive value captured as exception: " + String(t),
                stack: null == (e = i.syntheticException) ? void 0 : e.stack,
                synthetic: !0
            }
        }
    }
    class he {
        match(t) {
            return ot(t, "PromiseRejectionEvent") || this.isCustomEventWrappingRejection(t)
        }
        isCustomEventWrappingRejection(t) {
            if (!lt(t))
                return !1;
            try {
                var i = t.detail;
                return null != i && "object" == typeof i && "reason"in i
            } catch (t) {
                return !1
            }
        }
        coerce(t, i) {
            var e, r = this.getUnhandledRejectionReason(t);
            return nt(r) ? {
                type: "UnhandledRejection",
                value: "Non-Error promise rejection captured with value: " + String(r),
                stack: null == (e = i.syntheticException) ? void 0 : e.stack,
                synthetic: !0
            } : i.apply(r)
        }
        getUnhandledRejectionReason(t) {
            try {
                if ("reason"in t)
                    return t.reason;
                if ("detail"in t && null != t.detail && "object" == typeof t.detail && "reason"in t.detail)
                    return t.detail.reason
            } catch (t) {}
            return t
        }
    }
    var ue = "$message"
      , de = "$timestamp"
      , ve = new Set([ue, de])
      , ce = {
        enabled: !0,
        max_bytes: 32768
    };
    function fe(t) {
        var i;
        return t ? {
            enabled: null !== (i = t.enabled) && void 0 !== i ? i : ce.enabled,
            max_bytes: ge(t.max_bytes, ce.max_bytes)
        } : g({}, ce)
    }
    class pe {
        constructor(t) {
            this.ii = [],
            this.ri = 0,
            this.qe = fe(t)
        }
        setConfig(t) {
            this.qe = fe(t),
            this.ni()
        }
        add(t) {
            var i = function(t) {
                var i;
                try {
                    i = B(t)
                } catch (t) {
                    return
                }
                try {
                    var e = JSON.parse(i);
                    if (!W(e))
                        return;
                    var r = e
                      , s = r[ue]
                      , n = r[de];
                    if (!K(s) || 0 === s.trim().length)
                        return;
                    if (!K(n) && !Z(n))
                        return;
                    return {
                        step: r,
                        json: i
                    }
                } catch (t) {
                    return
                }
            }(t);
            if (i) {
                var e = function(t) {
                    if ("undefined" != typeof TextEncoder)
                        return (new TextEncoder).encode(t).length;
                    for (var i = encodeURIComponent(t), e = 0, r = 0; i.length > r; r++)
                        "%" === i[r] ? (e += 1,
                        r += 2) : e += 1;
                    return e
                }(i.json);
                e > this.qe.max_bytes || (this.ii.push({
                    step: i.step,
                    bytes: e
                }),
                this.ri += e,
                this.ni())
            }
        }
        getAttachable() {
            return this.ii.map((t => t.step))
        }
        clear() {
            this.ii = [],
            this.ri = 0
        }
        size() {
            return this.ii.length
        }
        ni() {
            for (; this.ri > this.qe.max_bytes && this.ii.length > 0; ) {
                var t = this.ii.shift();
                t && (this.ri -= t.bytes)
            }
        }
    }
    function ge(t, i) {
        if (!Z(t) || t === 1 / 0 || t === -1 / 0)
            return i;
        var e = Math.floor(t);
        return 0 > e ? i : e
    }
    var _e = function(i, e) {
        var r = (void 0 === e ? {} : e).debugEnabled
          , s = {
            k(e) {
                if (t && (c.DEBUG || t.POSTHOG_DEBUG || r) && !J(t.console) && t.console) {
                    for (var s = ("__rrweb_original__"in t.console[e] ? t.console[e].__rrweb_original__ : t.console[e]), n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), a = 1; n > a; a++)
                        o[a - 1] = arguments[a];
                    s(i, ...o)
                }
            },
            debug() {
                for (var t = arguments.length, i = new Array(t), e = 0; t > e; e++)
                    i[e] = arguments[e];
                s.k("debug", ...i)
            },
            info() {
                for (var t = arguments.length, i = new Array(t), e = 0; t > e; e++)
                    i[e] = arguments[e];
                s.k("log", ...i)
            },
            warn() {
                for (var t = arguments.length, i = new Array(t), e = 0; t > e; e++)
                    i[e] = arguments[e];
                s.k("warn", ...i)
            },
            error() {
                for (var t = arguments.length, i = new Array(t), e = 0; t > e; e++)
                    i[e] = arguments[e];
                s.k("error", ...i)
            },
            critical() {
                for (var t = arguments.length, e = new Array(t), r = 0; t > r; r++)
                    e[r] = arguments[r];
                console.error(i, ...e)
            },
            uninitializedWarning(t) {
                s.error("You must initialize PostHog before calling " + t)
            },
            createLogger: (t, e) => _e(i + " " + t, e)
        };
        return s
    }
      , me = _e("[PostHog.js]")
      , ye = me.createLogger
      , be = ye("[ExternalScriptsLoader]")
      , we = t => {
        var i = null == r ? void 0 : r.querySelectorAll("script");
        if (i)
            for (var e = 0; i.length > e; e++)
                if (i[e].src === t)
                    return i[e]
    }
      , xe = (t, i, e) => {
        if (t.config.disable_external_dependency_loading)
            return be.warn(i + " was requested but loading of external scripts is disabled."),
            e("Loading of external scripts is disabled");
        var s = we(i);
        if (s) {
            if (s.__posthog_loading_callback_fired)
                return e();
            var n = s.__posthog_loading_error;
            return n ? e(n) : (s.addEventListener("load", (t => {
                s.__posthog_loading_callback_fired = !0,
                e(void 0, t)
            }
            )),
            void s.addEventListener("error", (t => {
                s.__posthog_loading_error = t,
                e(t)
            }
            )))
        }
        var o = () => {
            if (!r)
                return e("document not found");
            if (we(i))
                return xe(t, i, e);
            var s = r.createElement("script");
            if (s.type = "text/javascript",
            s.crossOrigin = "anonymous",
            s.src = i,
            s.onload = t => {
                s.__posthog_loading_callback_fired = !0,
                e(void 0, t)
            }
            ,
            s.onerror = t => {
                s.__posthog_loading_error = t,
                e(t)
            }
            ,
            t.config.prepare_external_dependency_script && (s = t.config.prepare_external_dependency_script(s)),
            !s)
                return e("prepare_external_dependency_script returned null");
            if ("head" === t.config.external_scripts_inject_target)
                r.head.appendChild(s);
            else {
                var n, o = r.querySelectorAll("body > script");
                o.length > 0 ? null == (n = o[0].parentNode) || n.insertBefore(s, o[0]) : r.body.appendChild(s)
            }
        }
        ;
        null != r && r.body ? o() : null == r || r.addEventListener("DOMContentLoaded", o)
    }
      , Se = {}
      , ke = (t, i) => {
        var e = "/static/" + i + ".js?v=" + t.version;
        if ("toolbar" === i) {
            var r = 3e5;
            e = e + "&t=" + Math.floor(Date.now() / r) * r
        }
        return t.requestRouter.endpointFor("assets", e)
    }
    ;
    v.__PosthogExtensions__ = v.__PosthogExtensions__ || {},
    v.__PosthogExtensions__.loadExternalDependency = (t, i, e) => {
        if ("remote-config" !== i) {
            var r = t.config.strict_script_versioning;
            if (r) {
                var s = t.requestRouter.endpointFor("assets", "/static/" + t.version + "/" + i + ".js")
                  , n = Se[s];
                if ("fallback" === r && n) {
                    if (we(n))
                        return void xe(t, n, e);
                    delete Se[s]
                }
                xe(t, s, "fallback" === r ? (r, n) => {
                    if (r)
                        if ("string" == typeof r)
                            e(r);
                        else {
                            var o, a = ke(t, i);
                            Se[s] = a;
                            var l = we(s);
                            null == l || null == (o = l.parentNode) || o.removeChild(l),
                            xe(t, a, e)
                        }
                    else
                        e(void 0, n)
                }
                : e)
            } else
                xe(t, ke(t, i), e)
        } else {
            var o = t.requestRouter.endpointFor("assets", "/array/" + t.config.token + "/config.js");
            xe(t, o, e)
        }
    }
    ,
    v.__PosthogExtensions__.loadSiteApp = (t, i, e) => {
        var r = t.requestRouter.endpointFor("api", i);
        xe(t, r, e)
    }
    ;
    c.DEBUG = !1,
    c.LIB_VERSION = "1.418.0",
    c.LIB_NAME = "web";
    var Ee = "$people_distinct_id"
      , $e = "distinct_id"
      , Pe = "$device_id"
      , Te = "$device_model"
      , Fe = "__alias"
      , Re = "__timers"
      , Ce = "$autocapture_disabled_server_side"
      , Me = "$heatmaps_enabled_server_side"
      , Ie = "$exception_capture_enabled_server_side"
      , Ae = "$error_tracking_suppression_rules"
      , Oe = "$error_tracking_capture_extension_exceptions"
      , De = "$web_vitals_enabled_server_side"
      , je = "$dead_clicks_enabled_server_side"
      , Le = "$product_tours_enabled_server_side"
      , Ne = "$web_vitals_allowed_metrics"
      , Be = "$session_recording_remote_config"
      , ze = "$replay_sample_rate"
      , Ue = "$replay_override_sampling"
      , qe = "$replay_override_linked_flag"
      , He = "$replay_override_url_trigger"
      , Ve = "$replay_override_event_trigger"
      , We = "$sesid"
      , Ge = "$session_is_sampled"
      , Je = "$enabled_feature_flags"
      , Ke = "$active_feature_flags"
      , Ye = "$early_access_features"
      , Qe = "$feature_flag_details"
      , Xe = "$feature_flag_payloads"
      , Ze = "$feature_flag_request_id"
      , tr = "$minimal_flag_called_events"
      , ir = "$override_feature_flags"
      , er = "$override_feature_flag_payloads"
      , rr = "$stored_person_properties"
      , sr = "$stored_group_properties"
      , nr = "$groups"
      , or = "$surveys"
      , ar = "$surveys_loaded_at"
      , lr = "$surveys_activated"
      , hr = "$surveys_activated_session"
      , ur = "$surveys_activated_timestamps"
      , dr = "ph_product_tours"
      , vr = "$flag_call_reported"
      , cr = "$flag_call_reported_session_id"
      , fr = "$feature_flag_errors"
      , pr = "$feature_flag_evaluated_at"
      , gr = "$user_state"
      , _r = "$client_session_props"
      , mr = "$capture_rate_limit"
      , yr = "$initial_campaign_params"
      , br = "$initial_referrer_info"
      , wr = "$initial_person_info"
      , xr = "$epp"
      , Sr = "$posthog_cookieless"
      , kr = "$cookieless_mode"
      , Er = "$sdk_debug_extensions_init_method"
      , $r = "$sdk_debug_extensions_init_time_ms"
      , Pr = "$sdk_debug_recording_script_not_loaded"
      , Tr = "PostHog loadExternalDependency extension not found."
      , Fr = "on_reject"
      , Rr = "always"
      , Cr = "anonymous"
      , Mr = "identified"
      , Ir = "identified_only"
      , Ar = "visibilitychange"
      , Or = "beforeunload"
      , Dr = "$pageview"
      , jr = "$pageleave"
      , Lr = "$identify"
      , Nr = "$groupidentify";
    function Br(t, i) {
        H(t) && t.forEach(i)
    }
    function zr(t, i) {
        if (!X(t))
            if (H(t))
                t.forEach(i);
            else if (et(t))
                t.forEach(( (t, e) => i(t, e)));
            else
                for (var e in t)
                    U.call(t, e) && i(t[e], e)
    }
    var Ur = function(t) {
        for (var i = arguments.length, e = new Array(i > 1 ? i - 1 : 0), r = 1; i > r; r++)
            e[r - 1] = arguments[r];
        for (var s of e)
            for (var n in s)
                void 0 !== s[n] && (t[n] = s[n]);
        return t
    };
    function qr(t) {
        for (var i = Object.keys(t), e = i.length, r = new Array(e); e--; )
            r[e] = [i[e], t[i[e]]];
        return r
    }
    var Hr = function(t) {
        try {
            return t()
        } catch (t) {
            return
        }
    }
      , Vr = function(t) {
        return function() {
            try {
                for (var i = arguments.length, e = new Array(i), r = 0; i > r; r++)
                    e[r] = arguments[r];
                return t.apply(this, e)
            } catch (t) {
                me.critical("Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A."),
                me.critical(t)
            }
        }
    }
      , Wr = function(t) {
        var i = {};
        return zr(t, (function(t, e) {
            (K(t) && t.length > 0 || Z(t)) && (i[e] = t)
        }
        )),
        i
    };
    var Gr = ["herokuapp.com", "vercel.app", "netlify.app"];
    function Jr(t) {
        var i = null == t ? void 0 : t.hostname;
        if (!K(i))
            return !1;
        var e = i.split(".").slice(-2).join(".");
        for (var r of Gr)
            if (e === r)
                return !1;
        return !0
    }
    function Kr(t, i, e, r) {
        var s = null != r ? r : {}
          , n = s.capture
          , o = s.passive;
        null == t || t.addEventListener(i, e, {
            capture: void 0 !== n && n,
            passive: void 0 === o || o
        })
    }
    function Yr(t) {
        return "ph_toolbar_internal" === t.name
    }
    var Qr = t => {
        if (r) {
            try {
                for (var i = t + "=", e = r.cookie.split(";").filter((t => t.length)), s = 0; e.length > s; s++) {
                    for (var n = e[s]; " " == n.charAt(0); )
                        n = n.substring(1, n.length);
                    if (0 === n.indexOf(i))
                        return decodeURIComponent(n.substring(i.length, n.length))
                }
            } catch (t) {}
            return null
        }
    }
    ;
    Math.trunc || (Math.trunc = function(t) {
        return 0 > t ? Math.ceil(t) : Math.floor(t)
    }
    ),
    Number.isInteger || (Number.isInteger = function(t) {
        return Z(t) && isFinite(t) && Math.floor(t) === t
    }
    );
    class Xr {
        constructor(t) {
            if (this.bytes = t,
            16 !== t.length)
                throw new TypeError("not 128-bit length")
        }
        static fromFieldsV7(t, i, e, r) {
            if (!Number.isInteger(t) || !Number.isInteger(i) || !Number.isInteger(e) || !Number.isInteger(r) || 0 > t || 0 > i || 0 > e || 0 > r || t > 0xffffffffffff || i > 4095 || e > 1073741823 || r > 4294967295)
                throw new RangeError("invalid field value");
            var s = new Uint8Array(16);
            return s[0] = t / Math.pow(2, 40),
            s[1] = t / Math.pow(2, 32),
            s[2] = t / Math.pow(2, 24),
            s[3] = t / Math.pow(2, 16),
            s[4] = t / 256,
            s[5] = t,
            s[6] = 112 | i >>> 8,
            s[7] = i,
            s[8] = 128 | e >>> 24,
            s[9] = e >>> 16,
            s[10] = e >>> 8,
            s[11] = e,
            s[12] = r >>> 24,
            s[13] = r >>> 16,
            s[14] = r >>> 8,
            s[15] = r,
            new Xr(s)
        }
        toString() {
            for (var t = "", i = 0; this.bytes.length > i; i++)
                t = t + (this.bytes[i] >>> 4).toString(16) + (15 & this.bytes[i]).toString(16),
                3 !== i && 5 !== i && 7 !== i && 9 !== i || (t += "-");
            if (36 !== t.length)
                throw new Error("Invalid UUIDv7 was generated");
            return t
        }
        clone() {
            return new Xr(this.bytes.slice(0))
        }
        equals(t) {
            return 0 === this.compareTo(t)
        }
        compareTo(t) {
            for (var i = 0; 16 > i; i++) {
                var e = this.bytes[i] - t.bytes[i];
                if (0 !== e)
                    return Math.sign(e)
            }
            return 0
        }
    }
    class Zr {
        generate() {
            var t = this.generateOrAbort();
            if (!J(t))
                return t;
            this.S = 0;
            var i = this.generateOrAbort();
            if (J(i))
                throw new Error("Could not generate UUID after timestamp reset");
            return i
        }
        generateOrAbort() {
            var t = Date.now();
            if (t > this.S)
                this.S = t,
                this.C();
            else {
                if (this.S >= t + 1e4)
                    return;
                this.I++,
                this.I > 4398046511103 && (this.S++,
                this.C())
            }
            return Xr.fromFieldsV7(this.S, Math.trunc(this.I / Math.pow(2, 30)), this.I & Math.pow(2, 30) - 1, this.A.nextUint32())
        }
        C() {
            this.I = 1024 * this.A.nextUint32() + (1023 & this.A.nextUint32())
        }
        constructor() {
            this.S = 0,
            this.I = 0,
            this.A = new es
        }
    }
    var ts, is = t => {
        if ("undefined" != typeof UUIDV7_DENY_WEAK_RNG && UUIDV7_DENY_WEAK_RNG)
            throw new Error("no cryptographically strong RNG available");
        for (var i = 0; t.length > i; i++)
            t[i] = 65536 * Math.trunc(65536 * Math.random()) + Math.trunc(65536 * Math.random());
        return t
    }
    ;
    t && !J(t.crypto) && crypto.getRandomValues && (is = t => crypto.getRandomValues(t));
    class es {
        nextUint32() {
            return this.R.length > this.O || (is(this.R),
            this.O = 0),
            this.R[this.O++]
        }
        constructor() {
            this.R = new Uint32Array(8),
            this.O = 1 / 0
        }
    }
    var rs = () => ss().toString()
      , ss = () => (ts || (ts = new Zr)).generate()
      , ns = ""
      , os = /[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i;
    var as = {
        N: () => !!r,
        j(t) {
            me.error("cookieStore error: " + t)
        },
        P: Qr,
        H(t) {
            var i;
            try {
                i = JSON.parse(as.P(t)) || {}
            } catch (t) {}
            return i
        },
        F(t, i, e, s, n) {
            if (!r)
                return !1;
            try {
                var o = ""
                  , a = ""
                  , l = function(t, i) {
                    if (i) {
                        var e = function(t, i) {
                            if (void 0 === i && (i = r),
                            ns)
                                return ns;
                            if (!i)
                                return "";
                            if (["localhost", "127.0.0.1"].includes(t))
                                return "";
                            for (var e = t.split("."), s = Math.min(e.length, 8), n = "dmn_chk_" + rs(); !ns && s--; ) {
                                var o = e.slice(s).join(".")
                                  , a = n + "=1;domain=." + o + ";path=/";
                                i.cookie = a + ";max-age=3",
                                i.cookie.includes(n) && (i.cookie = a + ";max-age=0",
                                ns = o)
                            }
                            return ns
                        }(t);
                        if (!e) {
                            var s = (t => {
                                var i = t.match(os);
                                return i ? i[0] : ""
                            }
                            )(t);
                            s !== e && me.info("Warning: cookie subdomain discovery mismatch", s, e),
                            e = s
                        }
                        return e ? "; domain=." + e : ""
                    }
                    return ""
                }(r.location.hostname, s);
                if (e) {
                    var h = new Date;
                    h.setTime(h.getTime() + 864e5 * e),
                    o = "; expires=" + h.toUTCString()
                }
                n && (a = "; secure");
                var u = t + "=" + encodeURIComponent(JSON.stringify(i)) + o + "; SameSite=Lax; path=/" + l + a;
                return u.length > 3686.4 && me.warn("cookieStore warning: large cookie, len=" + u.length),
                r.cookie = u,
                !0
            } catch (t) {
                return !1
            }
        },
        q(t, i) {
            if (null != r && r.cookie)
                try {
                    as.F(t, "", -1, i)
                } catch (t) {
                    return
                }
        }
    }
      , ls = null
      , hs = {
        N() {
            if (!Q(ls))
                return ls;
            var i = !0;
            if (J(t))
                i = !1;
            else
                try {
                    var e = "__mplssupport__";
                    hs.F(e, "xyz"),
                    '"xyz"' !== hs.P(e) && (i = !1),
                    hs.q(e)
                } catch (t) {
                    i = !1
                }
            return i || me.error("localStorage unsupported; falling back to cookie store"),
            ls = i,
            i
        },
        j(t) {
            me.error("localStorage error: " + t)
        },
        P(i) {
            try {
                return null == t ? void 0 : t.localStorage.getItem(i)
            } catch (t) {
                hs.j(t)
            }
            return null
        },
        H(t) {
            try {
                return JSON.parse(hs.P(t)) || {}
            } catch (t) {}
            return null
        },
        F(i, e) {
            try {
                return null == t || t.localStorage.setItem(i, JSON.stringify(e)),
                !0
            } catch (t) {
                hs.j(t)
            }
            return !1
        },
        q(i) {
            try {
                null == t || t.localStorage.removeItem(i)
            } catch (t) {
                hs.j(t)
            }
        }
    }
      , us = [rr, Ke, Je, Qe, Xe, Ze, pr, fr, vr]
      , ds = [Pe, $e, We, Ge, xr, wr, gr]
      , vs = t => t + "_cpm"
      , cs = ["__proto__", "constructor", "prototype"]
      , fs = t => {
        if (!W(t))
            return {};
        var i = {};
        return Object.keys(t).forEach((e => {
            -1 === cs.indexOf(e) && (i[e] = t[e])
        }
        )),
        i
    }
      , ps = function(t, i) {
        void 0 === i && (i = []);
        var e = {};
        return [...ds, ...i].forEach((i => {
            var r = t[i];
            J(r) || Q(r) || "" === r || (e[i] = r)
        }
        )),
        e
    }
      , gs = t => {
        for (var i = 5381, e = 2166136261, r = 0; t.length > r; r++) {
            var s = t.charCodeAt(r);
            i = 33 * i ^ s,
            e = Math.imul(e ^ s, 16777619)
        }
        return t.length.toString(36) + "." + (i >>> 0).toString(36) + "." + (e >>> 0).toString(36)
    }
      , _s = (t, i) => ({
        p: i,
        f: gs(JSON.stringify(t))
    })
      , ms = (t, i) => {
        if (!i)
            return {
                properties: [],
                isValid: !1
            };
        try {
            var e = as.H(vs(t))
              , r = (null == e ? void 0 : e.f) === gs(i) && H(e.p);
            return {
                properties: r ? e.p : [],
                isValid: r
            }
        } catch (t) {
            return {
                properties: [],
                isValid: !1
            }
        }
    }
      , ys = (t, i) => i + "|" + (as.P(vs(t)) || "")
      , bs = {}
      , ws = {
        N: () => !0,
        j(t) {
            me.error("memoryStorage error: " + t)
        },
        P: t => bs[t] || null,
        H: t => bs[t] || null,
        F: (t, i) => (bs[t] = i,
        !0),
        q(t) {
            delete bs[t]
        }
    }
      , xs = null
      , Ss = {
        N() {
            if (!Q(xs))
                return xs;
            if (xs = !0,
            J(t))
                xs = !1;
            else
                try {
                    var i = "__support__";
                    Ss.F(i, "xyz"),
                    '"xyz"' !== Ss.P(i) && (xs = !1),
                    Ss.q(i)
                } catch (t) {
                    xs = !1
                }
            return xs
        },
        j(t) {
            me.error("sessionStorage error: ", t)
        },
        P(i) {
            try {
                return null == t ? void 0 : t.sessionStorage.getItem(i)
            } catch (t) {
                Ss.j(t)
            }
            return null
        },
        H(t) {
            try {
                return JSON.parse(Ss.P(t)) || null
            } catch (t) {}
            return null
        },
        F(i, e) {
            try {
                return null == t || t.sessionStorage.setItem(i, JSON.stringify(e)),
                !0
            } catch (t) {
                Ss.j(t)
            }
            return !1
        },
        q(i) {
            try {
                null == t || t.sessionStorage.removeItem(i)
            } catch (t) {
                Ss.j(t)
            }
        }
    };
    class ks {
        constructor(t) {
            this._instance = t
        }
        get qe() {
            return this._instance.config
        }
        get consent() {
            return this.si() ? 0 : this.ai
        }
        isOptedOut() {
            return this.qe.cookieless_mode === Rr || this.isRejected() || -1 === this.consent && this.qe.cookieless_mode === Fr
        }
        isOptedIn() {
            return !this.isOptedOut()
        }
        isExplicitlyOptedOut() {
            return 0 === this.consent
        }
        isRejected() {
            return 0 === this.consent || -1 === this.consent && this.qe.opt_out_capturing_by_default
        }
        optInOut(t) {
            this.oi.F(this.li, t ? 1 : 0, this.qe.cookie_expiration, this.qe.cross_subdomain_cookie, this.qe.secure_cookie)
        }
        reset() {
            this.oi.q(this.li, this.qe.cross_subdomain_cookie)
        }
        get li() {
            var t = this._instance.config
              , i = t.token
              , e = t.opt_out_capturing_cookie_prefix;
            return t.consent_persistence_name || (e ? e + i : "__ph_opt_in_out_" + i)
        }
        get ai() {
            var t = this.oi.P(this.li);
            return dt(t) ? 1 : j(vt, t) ? 0 : -1
        }
        get oi() {
            var t = this.qe.opt_out_capturing_persistence_type
              , i = "localStorage" === t ? hs : as;
            if (!this.ui || this.ui !== i) {
                this.ui = i;
                var e = "localStorage" === t ? as : hs;
                e.P(this.li) && (this.ui.P(this.li) || this.optInOut(dt(e.P(this.li))),
                e.q(this.li, this.qe.cross_subdomain_cookie))
            }
            return this.ui
        }
        si() {
            return !!this.qe.respect_dnt && [null == e ? void 0 : e.doNotTrack, null == e ? void 0 : e.msDoNotTrack, v.doNotTrack].some((t => dt(t)))
        }
    }
    function Es(t, i) {
        var e, r = null == t || null == (e = t.config) ? void 0 : e.get_current_url;
        if (!V(r))
            return i;
        try {
            var s = r(i);
            return K(s) && s ? s : i
        } catch (t) {
            return me.error("Error in get_current_url, falling back to window.location.href", t),
            i
        }
    }
    var $s = "__POSTHOG_TOOLBAR__"
      , Ps = 1
      , Ts = 3
      , Fs = 11;
    function Rs(t) {
        return t instanceof Element && (t.id === $s || !(null == t.closest || !t.closest(".toolbar-global-fade-container")))
    }
    function Cs(t) {
        return !!t && t.nodeType === Ps
    }
    function Ms(t, i) {
        return !!t && !!t.tagName && t.tagName.toLowerCase() === i.toLowerCase()
    }
    function Is(t) {
        return !!t && t.nodeType === Ts
    }
    function As(t) {
        return !!t && t.nodeType === Fs && Cs(t.host)
    }
    var Os = 1e3;
    function Ds(t) {
        return t ? L(t).split(/\s+/) : []
    }
    function js(i, e) {
        var r = function(i) {
            var e, r = null == t || null == (e = t.location) ? void 0 : e.href;
            return J(r) ? void 0 : Es(i, r)
        }(e);
        return !!(r && i && i.some((t => r.match(t))))
    }
    function Ls(t) {
        var i = "";
        switch (typeof t.className) {
        case "string":
            i = t.className;
            break;
        case "object":
            i = (t.className && "baseVal"in t.className ? t.className.baseVal : null) || t.getAttribute("class") || "";
            break;
        default:
            i = ""
        }
        return Ds(i)
    }
    function Ns(t) {
        return X(t) ? null : L(t).split(/(\s+)/).filter((t => un(t))).join("").replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255)
    }
    function Bs(t) {
        var i = "";
        return tn(t) && !en(t) && t.childNodes && t.childNodes.length && zr(t.childNodes, (function(t) {
            var e;
            Is(t) && t.textContent && (i += null !== (e = Ns(t.textContent)) && void 0 !== e ? e : "")
        }
        )),
        L(i)
    }
    function zs(t) {
        var i;
        return J(t.target) ? t.srcElement || null : null != (i = t.target) && i.shadowRoot ? t.composedPath()[0] || null : t.target || null
    }
    var Us = ["a", "button", "form", "input", "select", "textarea", "label"];
    function qs(t, i) {
        if (J(i))
            return !0;
        var e, r = function(t) {
            if (i.some((i => function(t, i) {
                var e = t.matches || t.matchesSelector || t.msMatchesSelector || t.mozMatchesSelector || t.webkitMatchesSelector || t.oMatchesSelector;
                try {
                    return !!e && e.call(t, i)
                } catch (t) {
                    return !1
                }
            }(t, i))))
                return {
                    v: !0
                }
        };
        for (var s of t)
            if (e = r(s))
                return e.v;
        return !1
    }
    function Hs(t) {
        var i = t.parentNode;
        return !(!i || !Cs(i)) && i
    }
    var Vs = [".ph-no-autocapture", "[data-ph-no-autocapture]"]
      , Ws = ["next", "previous", "prev", ">", "<"]
      , Gs = [...Ws, "+", "-", "−", "–"]
      , Js = (t, i) => /[a-z0-9]/i.test(i) ? t.includes(i) : t === i
      , Ks = [".ph-no-rageclick", ".ph-no-capture"]
      , Ys = ["", "text", "search", "email", "password", "url", "tel", "number"];
    function Qs(i, e) {
        if (!t || Xs(i))
            return !1;
        var r, s, n, o, a;
        if (it(e) ? (r = !!e && Ks,
        s = void 0,
        n = !1) : (r = null !== (o = null == e ? void 0 : e.css_selector_ignorelist) && void 0 !== o ? o : Ks,
        s = null == e ? void 0 : e.content_ignorelist,
        n = null !== (a = null == e ? void 0 : e.ignore_text_selection) && void 0 !== a && a),
        !1 === r)
            return !1;
        if (n && function(t) {
            return !(!t || !Cs(t)) && (!!Ms(t, "textarea") || (Ms(t, "input") ? j(Ys, (t.getAttribute("type") || "").toLowerCase()) : function(t) {
                if (t.isContentEditable)
                    return !0;
                var i = null == t.getAttribute ? void 0 : t.getAttribute("contenteditable");
                return "true" === i || "" === i
            }(t)))
        }(i))
            return !1;
        var l = Zs(i, !1).targetElementList;
        return !function(t, i) {
            if (!1 === t || J(t))
                return !1;
            var e;
            if (!0 === t)
                e = Ws;
            else {
                if (!H(t))
                    return !1;
                if (t.length > 10)
                    return me.error("[PostHog] content_ignorelist array cannot exceed 10 items. Use css_selector_ignorelist for more complex matching."),
                    !1;
                e = t.map((t => t.toLowerCase()))
            }
            return i.some((t => {
                var i = t.safeText
                  , r = t.ariaLabel;
                return e.some((t => Js(i, t) || Js(r, t)))
            }
            ))
        }(s, l.map((t => {
            var i;
            return {
                safeText: Bs(t).toLowerCase(),
                ariaLabel: (null == (i = t.getAttribute("aria-label")) ? void 0 : i.toLowerCase().trim()) || ""
            }
        }
        ))) && !qs(l, r)
    }
    var Xs = t => !t || Ms(t, "html") || !Cs(t)
      , Zs = (i, e) => {
        if (!t || Xs(i))
            return {
                parentIsUsefulElement: !1,
                targetElementList: []
            };
        for (var r = !1, s = [i], n = i; n.parentNode && !Ms(n, "body"); )
            if (As(n.parentNode))
                s.push(n.parentNode.host),
                n = n.parentNode.host;
            else {
                var o = Hs(n);
                if (!o)
                    break;
                if (e || Us.indexOf(o.tagName.toLowerCase()) > -1)
                    r = !0;
                else
                    try {
                        var a = t.getComputedStyle(o);
                        a && "pointer" === a.getPropertyValue("cursor") && (r = !0)
                    } catch (t) {}
                s.push(o),
                n = o
            }
        return {
            parentIsUsefulElement: r,
            targetElementList: s
        }
    }
    ;
    function tn(t) {
        for (var i = new Set, e = 0, r = t; r.parentNode && !Ms(r, "body"); r = r.parentNode) {
            if (e++ >= Os || i.has(r))
                return !1;
            i.add(r);
            var s = Ls(r);
            if (j(s, "ph-sensitive") || j(s, "ph-no-capture"))
                return !1
        }
        if (j(Ls(t), "ph-include"))
            return !0;
        var n = t.type || "";
        if (K(n))
            switch (n.toLowerCase()) {
            case "hidden":
            case "password":
                return !1
            }
        var o = t.name || t.id || "";
        return !K(o) || !/^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(o.replace(/[^a-zA-Z0-9]/g, ""))
    }
    function en(t) {
        return !!(Ms(t, "input") && !["button", "checkbox", "submit", "reset"].includes(t.type) || Ms(t, "select") || Ms(t, "textarea") || "true" === t.getAttribute("contenteditable"))
    }
    var rn = new RegExp("^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$")
      , sn = /(^|[^0-9A-Za-z_])([0-9][0-9 -]*[0-9])(?=$|[^0-9A-Za-z_])/g
      , nn = [16, 15, 14, 13]
      , on = new RegExp("^(\\d{3}-?\\d{2}-?\\d{4})$")
      , an = new RegExp("(^|[^0-9])((?!000|666)[0-9]{3}-?(?!00)[0-9]{2}-?(?!0000)[0-9]{4})(?=$|([^0-9]))","g")
      , ln = /[0-9A-Za-z_]/;
    function hn(t) {
        for (var i = 0, e = !1, r = t.length - 1; r >= 0; r--) {
            var s = t.charCodeAt(r) - 48;
            e && (s *= 2) > 9 && (s -= 9),
            i += s,
            e = !e
        }
        return i % 10 == 0
    }
    function un(t, i) {
        if (void 0 === i && (i = !0),
        X(t))
            return !1;
        if (K(t)) {
            t = L(t);
            var e = i ? rn.test((t || "").replace(/[- ]/g, "")) : function(t) {
                var i;
                for (sn.lastIndex = 0; i = sn.exec(t); ) {
                    var e = i[2];
                    if (e)
                        for (var r = e.replace(/[- ]/g, ""), s = 0; r.length > s; s++)
                            for (var n of nn) {
                                var o = s + n;
                                if (r.length >= o) {
                                    var a = r.slice(s, o);
                                    if (rn.test(a) && hn(a))
                                        return !0
                                }
                            }
                }
                return !1
            }(t);
            if (e)
                return !1;
            var r = i ? on.test(t) : function(t) {
                var i;
                for (an.lastIndex = 0; i = an.exec(t); ) {
                    var e = i[1]
                      , r = i[3];
                    if (!(e && r && ln.test(e) && ln.test(r)))
                        return !0
                }
                return !1
            }(t);
            if (r)
                return !1
        }
        return !0
    }
    function dn(t) {
        var i = Bs(t);
        return un(i = (i + " " + vn(t)).trim()) ? i : ""
    }
    function vn(t) {
        var i = "";
        return t && t.childNodes && t.childNodes.length && zr(t.childNodes, (function(t) {
            var e;
            if (t && "span" === (null == (e = t.tagName) ? void 0 : e.toLowerCase()))
                try {
                    var r = Bs(t);
                    i = (i + " " + r).trim(),
                    t.childNodes && t.childNodes.length && (i = (i + " " + vn(t)).trim())
                } catch (t) {
                    me.error("[AutoCapture]", t)
                }
        }
        )),
        i
    }
    function cn(t) {
        return t.replace(/"|\\"/g, '\\"')
    }
    function fn(t) {
        var i = t.attr__class;
        if (i)
            return H(i) ? i : Ds(i)
    }
    var pn = ye("[Dead Clicks]")
      , gn = () => !0
      , _n = t => {
        var i, e = !(null == (i = t.instance.persistence) || !i.get_property(je)), r = t.instance.config.capture_dead_clicks;
        return it(r) ? r : !!W(r) || e
    }
    ;
    class mn {
        get lazyLoadedDeadClicksAutocapture() {
            return this.hi
        }
        constructor(t, i, e) {
            this.instance = t,
            this.isEnabled = i,
            this.onCapture = e,
            this.startIfEnabledOrStop()
        }
        onRemoteConfig(t) {
            if (t.ok) {
                var i = t.config;
                "captureDeadClicks"in i && (this.instance.persistence && this.instance.persistence.register({
                    [je]: i.captureDeadClicks
                }),
                this.startIfEnabledOrStop())
            }
        }
        startIfEnabledOrStop() {
            this.isEnabled(this) ? this.di(( () => {
                this.vi()
            }
            )) : this.stop()
        }
        di(t) {
            var i, e;
            null != (i = v.__PosthogExtensions__) && i.initDeadClicksAutocapture ? t() : null == (e = v.__PosthogExtensions__) || null == e.loadExternalDependency || e.loadExternalDependency(this.instance, "dead-clicks-autocapture", (i => {
                i ? pn.error("failed to load script", i) : t()
            }
            ))
        }
        vi() {
            var t;
            if (r) {
                if (!this.hi && null != (t = v.__PosthogExtensions__) && t.initDeadClicksAutocapture) {
                    var i = W(this.instance.config.capture_dead_clicks) ? g({}, this.instance.config.capture_dead_clicks) : {};
                    i.__onCapture = this.onCapture,
                    this.onCapture && (i.capture_dead_swipes = !1),
                    this.hi = v.__PosthogExtensions__.initDeadClicksAutocapture(this.instance, i),
                    this.hi.start(r),
                    pn.info("starting...")
                }
            } else
                pn.error("`document` not found. Cannot start.")
        }
        stop() {
            this.hi && (this.hi.stop(),
            this.hi = void 0,
            pn.info("stopping..."))
        }
    }
    var yn = ye("[SegmentIntegration]");
    var bn = "posthog-js";
    function wn(t, i) {
        var e = void 0 === i ? {} : i
          , r = e.organization
          , s = e.projectId
          , n = e.prefix
          , o = e.severityAllowList
          , a = void 0 === o ? ["error"] : o
          , l = e.sendExceptionsToPostHog
          , h = void 0 === l || l;
        return i => {
            var e, o, l, u, d;
            if ("*" !== a && !a.includes(i.level) || !t.__loaded)
                return i;
            i.tags || (i.tags = {});
            var v = t.requestRouter.endpointFor("ui", "/project/" + t.config.token + "/person/" + t.get_distinct_id());
            i.tags["PostHog Person URL"] = v,
            t.sessionRecordingStarted() && (i.tags["PostHog Recording URL"] = t.get_session_replay_url({
                withTimestamp: !0
            }));
            var c, f = (null == (e = i.exception) ? void 0 : e.values) || [], p = f.map((t => g({}, t, {
                stacktrace: t.stacktrace ? g({}, t.stacktrace, {
                    type: "raw",
                    frames: (t.stacktrace.frames || []).map((t => g({}, t, {
                        platform: "web:javascript"
                    })))
                }) : void 0
            }))), _ = {
                $exception_message: (null == (o = f[0]) ? void 0 : o.value) || i.message,
                $exception_type: null == (l = f[0]) ? void 0 : l.type,
                $exception_level: i.level,
                $exception_list: p,
                $sentry_event_id: i.event_id,
                $sentry_exception: i.exception,
                $sentry_exception_message: (null == (u = f[0]) ? void 0 : u.value) || i.message,
                $sentry_exception_type: null == (d = f[0]) ? void 0 : d.type,
                $sentry_tags: i.tags
            };
            return r && s && (_.$sentry_url = (n || "https://sentry.io/organizations/") + r + "/issues/?project=" + s + "&query=" + i.event_id),
            h && (null == (c = t.exceptions) || c.sendExceptionEvent(_)),
            i
        }
    }
    class xn {
        constructor(t, i, e, r, s, n) {
            this.name = bn,
            this.setupOnce = function(o) {
                o(wn(t, {
                    organization: i,
                    projectId: e,
                    prefix: r,
                    severityAllowList: s,
                    sendExceptionsToPostHog: null == n || n
                }))
            }
        }
    }
    class Sn {
        constructor(t) {
            this.ci = (t, i, e) => {
                e && (e.noSessionId || e.activityTimeout || e.sessionPastMaximumLength || e.crossTabAdoption) && (me.info("[PageViewManager] Session rotated, clearing pageview state", {
                    sessionId: t,
                    changeReason: e
                }),
                this.fi = void 0,
                this._instance.scrollManager.resetContext())
            }
            ,
            this._instance = t,
            this.pi()
        }
        pi() {
            var t;
            this.gi = null == (t = this._instance.sessionManager) ? void 0 : t.onSessionId(this.ci)
        }
        destroy() {
            var t;
            null == (t = this.gi) || t.call(this),
            this.gi = void 0
        }
        doPageView(i, e) {
            var r, s = this.mi(i, e);
            return this.fi = {
                pathname: null !== (r = null == t ? void 0 : t.location.pathname) && void 0 !== r ? r : "",
                pageViewId: e,
                timestamp: i
            },
            this._instance.scrollManager.resetContext(),
            s
        }
        doPageLeave(t) {
            var i;
            return this.mi(t, null == (i = this.fi) ? void 0 : i.pageViewId)
        }
        doEvent() {
            var t;
            return {
                $pageview_id: null == (t = this.fi) ? void 0 : t.pageViewId
            }
        }
        mi(t, i) {
            var e = this.fi;
            if (!e)
                return {
                    $pageview_id: i
                };
            var r = {
                $pageview_id: i,
                $prev_pageview_id: e.pageViewId
            }
              , s = this._instance.scrollManager.getContext();
            if (s && !this._instance.config.disable_scroll_properties) {
                var n = s.maxScrollHeight
                  , o = s.lastScrollY
                  , a = s.maxScrollY
                  , l = s.maxContentHeight
                  , h = s.lastContentY
                  , u = s.maxContentY;
                if (!(J(n) || J(o) || J(a) || J(l) || J(h) || J(u))) {
                    n = Math.ceil(n),
                    o = Math.ceil(o),
                    a = Math.ceil(a),
                    l = Math.ceil(l),
                    h = Math.ceil(h),
                    u = Math.ceil(u);
                    var d = n > 1 ? ct(o / n, 0, 1, me) : 1
                      , v = n > 1 ? ct(a / n, 0, 1, me) : 1
                      , c = l > 1 ? ct(h / l, 0, 1, me) : 1
                      , f = l > 1 ? ct(u / l, 0, 1, me) : 1;
                    r = Ur(r, {
                        $prev_pageview_last_scroll: o,
                        $prev_pageview_last_scroll_percentage: d,
                        $prev_pageview_max_scroll: a,
                        $prev_pageview_max_scroll_percentage: v,
                        $prev_pageview_last_content: h,
                        $prev_pageview_last_content_percentage: c,
                        $prev_pageview_max_content: u,
                        $prev_pageview_max_content_percentage: f
                    })
                }
            }
            return e.pathname && (r.$prev_pageview_pathname = e.pathname),
            e.timestamp && (r.$prev_pageview_duration = (t.getTime() - e.timestamp.getTime()) / 1e3),
            r
        }
    }
    var kn = ["flags", "surveys"]
      , En = {
        [Ee]: {
            exposure: "hidden"
        },
        [Fe]: {
            exposure: "hidden"
        },
        __cmpns: {
            exposure: "hidden"
        },
        [Re]: {
            exposure: "hidden"
        },
        [Ce]: {
            exposure: "event"
        },
        [Me]: {
            exposure: "hidden"
        },
        [Ie]: {
            exposure: "event"
        },
        [Ae]: {
            exposure: "hidden"
        },
        [Oe]: {
            exposure: "event"
        },
        [De]: {
            exposure: "event"
        },
        [je]: {
            exposure: "event"
        },
        [Le]: {
            exposure: "hidden"
        },
        [Ne]: {
            exposure: "event"
        },
        [Be]: {
            exposure: "hidden"
        },
        $session_recording_enabled_server_side: {
            exposure: "hidden"
        },
        [We]: {
            exposure: "hidden"
        },
        [Ge]: {
            exposure: "event"
        },
        [ze]: {
            exposure: "event",
            shouldSkipFromEventProperties: t => Q(t)
        },
        $session_past_minimum_duration: {
            exposure: "event"
        },
        $session_recording_url_trigger_activated_session: {
            exposure: "event"
        },
        $session_recording_event_trigger_activated_session: {
            exposure: "event"
        },
        $debug_first_full_snapshot_timestamp: {
            exposure: "event"
        },
        $sess_rec_flush_size: {
            exposure: "hidden"
        },
        [Je]: {
            exposure: "hidden",
            storageGroup: "flags"
        },
        [Ke]: {
            exposure: "hidden",
            storageGroup: "flags"
        },
        [Ye]: {
            exposure: "hidden"
        },
        [Qe]: {
            exposure: "hidden",
            storageGroup: "flags"
        },
        [Xe]: {
            exposure: "hidden",
            storageGroup: "flags"
        },
        [Ze]: {
            exposure: "hidden",
            storageGroup: "flags",
            volatile: !0
        },
        [tr]: {
            exposure: "hidden",
            storageGroup: "flags"
        },
        [ir]: {
            exposure: "hidden"
        },
        [er]: {
            exposure: "hidden"
        },
        [rr]: {
            exposure: "hidden"
        },
        [sr]: {
            exposure: "hidden"
        },
        [or]: {
            exposure: "hidden",
            storageGroup: "surveys"
        },
        [ar]: {
            exposure: "hidden",
            storageGroup: "surveys",
            volatile: !0
        },
        [lr]: {
            exposure: "event"
        },
        [hr]: {
            exposure: "hidden"
        },
        [ur]: {
            exposure: "hidden"
        },
        [dr]: {
            exposure: "hidden"
        },
        $product_tours_activated: {
            exposure: "hidden"
        },
        $product_tours_activated_session: {
            exposure: "hidden"
        },
        $conversations_widget_session_id: {
            exposure: "event"
        },
        $conversations_ticket_id: {
            exposure: "event"
        },
        $conversations_widget_state: {
            exposure: "event"
        },
        $conversations_user_traits: {
            exposure: "event"
        },
        [vr]: {
            exposure: "hidden"
        },
        [cr]: {
            exposure: "hidden"
        },
        [nr]: {
            exposure: "event"
        },
        [fr]: {
            exposure: "hidden"
        },
        [pr]: {
            exposure: "hidden",
            storageGroup: "flags",
            volatile: !0
        },
        [gr]: {
            exposure: "hidden"
        },
        [_r]: {
            exposure: "hidden"
        },
        [mr]: {
            exposure: "hidden"
        },
        [yr]: {
            exposure: "hidden"
        },
        [br]: {
            exposure: "hidden"
        },
        [wr]: {
            exposure: "hidden"
        },
        [xr]: {
            exposure: "hidden"
        },
        [Ue]: {
            exposure: "event"
        },
        [qe]: {
            exposure: "event"
        },
        [He]: {
            exposure: "event"
        },
        [Ve]: {
            exposure: "event"
        },
        [Er]: {
            exposure: "event"
        },
        [$r]: {
            exposure: "event"
        },
        [Pr]: {
            exposure: "event"
        },
        $sdk_debug_replay_event_trigger_status: {
            exposure: "event"
        },
        $sdk_debug_replay_linked_flag_trigger_status: {
            exposure: "event"
        },
        $sdk_debug_replay_matched_recording_trigger_groups: {
            exposure: "event"
        },
        $sdk_debug_replay_remote_trigger_matching_config: {
            exposure: "event"
        },
        $sdk_debug_replay_trigger_groups_count: {
            exposure: "event"
        },
        $sdk_debug_replay_url_trigger_status: {
            exposure: "event"
        },
        $session_recording_start_reason: {
            exposure: "event"
        }
    }
      , $n = [["$posthog_sr_group_event_trigger_", {
        exposure: "hidden"
    }], ["$posthog_sr_group_url_trigger_", {
        exposure: "hidden"
    }], ["$posthog_sr_group_sampling_", {
        exposure: "hidden"
    }]]
      , Pn = t => {
        var i = En[t];
        if (i)
            return i;
        for (var e of $n) {
            var r = e[1];
            if (0 === t.indexOf(e[0]))
                return r
        }
    }
      , Tn = (t, i) => {
        try {
            return JSON.stringify(t, ( (t, i) => "bigint" == typeof i ? i.toString() : i), i)
        } catch (i) {
            return B(t)
        }
    }
      , Fn = t => {
        var i = null == r ? void 0 : r.createElement("a");
        return J(i) ? null : (i.href = t,
        i)
    }
      , Rn = function(t, i) {
        for (var e, r = ((t.split("#")[0] || "").split(/\?(.*)/)[1] || "").replace(/^\?+/g, "").split("&"), s = 0; r.length > s; s++) {
            var n = r[s].split("=");
            if (n[0] === i) {
                e = n;
                break
            }
        }
        if (!H(e) || 2 > e.length)
            return "";
        var o = e[1];
        try {
            o = decodeURIComponent(o)
        } catch (t) {
            me.error("Skipping decoding for malformed query param: " + o)
        }
        return o.replace(/\+/g, " ")
    }
      , Cn = function(t, i, e) {
        if (!t || !i || !i.length)
            return t;
        for (var r = t.split("#"), s = r[1], n = (r[0] || "").split("?"), o = n[1], a = n[0], l = (o || "").split("&"), h = [], u = 0; l.length > u; u++) {
            var d = l[u].split("=");
            H(d) && (i.includes(d[0]) ? h.push(d[0] + "=" + e) : h.push(l[u]))
        }
        var v = a;
        return null != o && (v += "?" + h.join("&")),
        null != s && (v += "#" + s),
        v
    }
      , Mn = function(t, i) {
        var e = t.match(new RegExp(i + "=([^&]*)"));
        return e ? e[1] : null
    }
      , In = (t, i) => t >= i && u()
      , An = (t, i, e, r) => {
        if (0 === t) {
            if (u()) {
                var s = i + 1;
                return s === e && r(),
                s
            }
            return i
        }
        return 0
    }
      , On = "https?://(.*)"
      , Dn = ["gclid", "gclsrc", "dclid", "gbraid", "wbraid", "fbclid", "msclkid", "twclid", "li_fat_id", "igshid", "ttclid", "rdt_cid", "epik", "qclid", "sccid", "irclid", "_kx"]
      , jn = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gad_source", "mc_cid", ...Dn]
      , Ln = "<masked>"
      , Nn = ["li_fat_id"];
    function Bn(t, i, e) {
        if (!r)
            return {};
        var s, n = i ? [...Dn, ...e || []] : [], o = zn(Cn(r.URL, n, Ln), t), a = (s = {},
        zr(Nn, (function(t) {
            var i = Qr(t);
            s[t] = i || null
        }
        )),
        s);
        return Ur(a, o)
    }
    function zn(t, i) {
        var e = jn.concat(i || [])
          , r = {};
        return zr(e, (function(i) {
            var e = Rn(t, i);
            r[i] = e || null
        }
        )),
        r
    }
    function Un(t) {
        var i = function(t) {
            return t ? 0 === t.search(On + "google.([^/?]*)") ? "google" : 0 === t.search(On + "bing.com") ? "bing" : 0 === t.search(On + "yahoo.com") ? "yahoo" : 0 === t.search(On + "duckduckgo.com") ? "duckduckgo" : null : null
        }(t)
          , e = "yahoo" != i ? "q" : "p"
          , s = {};
        if (!Q(i)) {
            s.$search_engine = i;
            var n = r ? Rn(r.referrer, e) : "";
            n.length && (s.ph_keyword = n)
        }
        return s
    }
    function qn() {
        return navigator.language || navigator.userLanguage
    }
    var Hn = "$direct";
    function Vn() {
        return (null == r ? void 0 : r.referrer) || Hn
    }
    function Wn(t, i, e) {
        void 0 === e && (e = !1);
        var r = t ? [...Dn, ...i || []] : []
          , n = e ? wi(null == s ? void 0 : s.href) : null == s ? void 0 : s.href
          , o = null == n ? void 0 : n.substring(0, 1e3);
        return {
            r: Vn().substring(0, 1e3),
            u: o ? Cn(o, r, Ln) : void 0
        }
    }
    function Gn(t, i) {
        var e;
        void 0 === i && (i = !1);
        var r = t.r
          , s = t.u
          , n = i ? wi(s) : s
          , o = {
            $referrer: r,
            $referring_domain: null == r ? void 0 : r == Hn ? Hn : null == (e = Fn(r)) ? void 0 : e.host
        };
        if (n) {
            o.$current_url = n;
            var a = Fn(n);
            o.$host = null == a ? void 0 : a.host,
            o.$pathname = null == a ? void 0 : a.pathname;
            var l = zn(n);
            Ur(o, l)
        }
        if (r) {
            var h = Un(r);
            Ur(o, h)
        }
        return o
    }
    function Jn() {
        try {
            return Intl.DateTimeFormat().resolvedOptions().timeZone
        } catch (t) {
            return
        }
    }
    function Kn() {
        try {
            return (new Date).getTimezoneOffset()
        } catch (t) {
            return
        }
    }
    var Yn = {
        flags: pr,
        surveys: ar
    }
      , Qn = ["cookie", "localstorage", "localstorage+cookie", "sessionstorage", "memory"]
      , Xn = t => t + "_cookie_identity_change_pending"
      , Zn = "main"
      , to = (t, i) => {
        zr(t, ( (e, r) => {
            var s = Pn(r);
            s && "event" !== s.exposure || {}.hasOwnProperty.call(i, r) || delete t[r]
        }
        ))
    }
    ;
    class io {
        constructor(i, e, r) {
            if (void 0 === r && (r = !0),
            this.yi = {},
            this.bi = !1,
            this.wi = !1,
            this.ki = !1,
            this.xi = !1,
            this.qe = i,
            this.Si = r,
            this.props = {},
            this.Ci = void 0,
            this.Mi = (t => {
                var i = "";
                return t.token && (i = t.token.replace(/\+/g, "PL").replace(/\//g, "SL").replace(/=/g, "EQ")),
                t.persistence_name ? "ph_" + t.persistence_name : "ph_" + i + "_posthog"
            }
            )(i),
            this.oi = this.Ti(i),
            this.wi = this.Ei(i),
            this.load(),
            i.debug && me.info("Persistence loaded", i.persistence, g({}, this.props)),
            this.update_config(i, i, e),
            this.save(),
            t) {
                var s = () => this.flush();
                Kr(t, "beforeunload", s, {
                    capture: !1
                }),
                Kr(t, "pagehide", s, {
                    capture: !1
                })
            }
        }
        Ii() {
            var t, i = null == (t = this.qe) ? void 0 : t.persistence_save_debounce_ms;
            return Z(i) && i > 0 ? i : 0
        }
        Pi(t) {
            if (this.qe.cookieWinsOnConflict && "localstorage+cookie" === this.qe.persistence.toLowerCase())
                if (t)
                    try {
                        var i = ps(t, this.qe.cookie_persisted_properties || [])
                          , e = _s(i, this.qe.cookie_persisted_properties || [])
                          , r = JSON.stringify(i) + "|" + JSON.stringify(e)
                          , s = as.P(this.Mi) || void 0;
                        s && ys(this.Mi, s) === r && (this.Ri = r,
                        this.Ai = s)
                    } catch (t) {}
                else
                    try {
                        var n = as.P(this.Mi) || void 0;
                        this.Ri = n ? ys(this.Mi, n) : void 0,
                        this.Ai = n
                    } catch (t) {}
        }
        syncCookieProperties() {
            return this.Fi(this.qe)
        }
        Fi(t, i) {
            if (void 0 === i && (i = !1),
            this.Oi && !i || this.xi || !t.cookieWinsOnConflict || "localstorage+cookie" !== t.persistence.toLowerCase())
                return !1;
            var e;
            try {
                e = as.P(this.Mi) || void 0
            } catch (t) {}
            if (!e || e === this.Ai)
                return !1;
            var r, s = ys(this.Mi, e);
            try {
                r = fs(JSON.parse(e))
            } catch (t) {
                return !1
            }
            if ((as.P(this.Mi) || void 0) !== e)
                return !1;
            this.Ri = s,
            this.Ai = e;
            var n = ms(this.Mi, e)
              , o = [...ds, ...n.properties]
              , a = {};
            if (Object.keys(r).forEach((t => {
                var i = r[t];
                (J(i) || Q(i) || "" === i || t === gr && i !== Cr && i !== Mr) && (a[t] = !0,
                delete r[t])
            }
            )),
            G(r))
                return !1;
            var l = $e in r || r[gr] === Cr || r[gr] === Mr
              , h = this.props[$e]
              , u = this.props[gr]
              , d = Ur({}, this.props);
            [...ds, ...t.cookie_persisted_properties || []].forEach((t => {
                if (-1 !== o.indexOf(t) && !(t in r) && !a[t] && (l || t !== $e && t !== gr)) {
                    var i = d[t];
                    !n.isValid && -1 !== ds.indexOf(t) && (!1 === i || 0 === i) || delete d[t]
                }
            }
            )),
            this.props = Ur(d, r),
            !l || gr in r || gr in this.props || this.Li(gr, Cr);
            var v = this.props[$e]
              , c = this.props[gr];
            return !l || v === h && c === u || (this.ki = !0,
            Ss.F(Xn(this.Mi), !0),
            this.Di(rr),
            this.Di(Ke),
            this.Di(Je),
            this.Di(Qe),
            this.Di(Xe),
            this.Di(Ze),
            this.Di(pr),
            this.Di(fr),
            this.Di(vr),
            c === Cr && (u === Mr || r[gr] === Cr || !J(h) && v !== h) && (to(this.props, r),
            this.Di(sr)),
            c === Mr ? this.props.$user_id = v : delete this.props.$user_id,
            this.Di(Fe)),
            !0
        }
        consumeCookieIdentityChange() {
            var t = Xn(this.Mi)
              , i = this.ki || !!Ss.P(t);
            return this.ki = !1,
            i && Ss.q(t),
            i
        }
        $i(t) {
            return void 0 === t && (t = !1),
            !(this.xi || this.Oi && !t || !this.qe.cookieWinsOnConflict || "localstorage+cookie" !== this.qe.persistence.toLowerCase() || (this.xi = !0,
            0))
        }
        Ni() {
            this.xi && (J(this.qi) || (clearTimeout(this.qi),
            this.qi = void 0),
            delete this.yi[Zn],
            this.ji(!0))
        }
        Bi(t) {
            if (void 0 === t && (t = !0),
            this.xi)
                try {
                    t ? this.Ni() : J(this.qi) || (clearTimeout(this.qi),
                    this.qi = void 0)
                } finally {
                    this.xi = !1
                }
        }
        isDisabled() {
            return !!this.Oi
        }
        Ti(i) {
            -1 === Qn.indexOf(i.persistence.toLowerCase()) && (me.critical("Unknown persistence type " + i.persistence + "; falling back to localStorage+cookie"),
            i.persistence = "localStorage+cookie");
            var e, r = function(i, e) {
                void 0 === i && (i = []),
                void 0 === e && (e = !1);
                var r = [...ds, ...i];
                return g({}, hs, {
                    H(t) {
                        try {
                            var i, s = {};
                            try {
                                i = as.P(t) || void 0,
                                s = i ? fs(JSON.parse(i)) : {}
                            } catch (t) {}
                            var n, o = JSON.parse(hs.P(t) || "{}");
                            if (e) {
                                var a = ms(t, i)
                                  , l = [...ds, ...a.properties]
                                  , h = {};
                                Object.keys(s).forEach((t => {
                                    var i = s[t];
                                    Q(i) || "" === i || t === gr && i !== Cr && i !== Mr || (h[t] = i)
                                }
                                ));
                                var u = $e in h || h[gr] === Cr || h[gr] === Mr;
                                if (Object.keys(h).length > 0) {
                                    var d, v = o[$e], c = null !== (d = o[gr]) && void 0 !== d ? d : Cr;
                                    r.forEach((t => {
                                        if (-1 !== l.indexOf(t) && !(t in s) && (u || t !== $e && t !== gr)) {
                                            var i = o[t];
                                            !a.isValid && -1 !== ds.indexOf(t) && (!1 === i || 0 === i) || delete o[t]
                                        }
                                    }
                                    )),
                                    !u || gr in s || gr in o || (o[gr] = Cr),
                                    !u || ($e in h ? h[$e] : o[$e]) === v && (gr in h ? h[gr] : o[gr]) === c || (us.forEach((t => delete o[t])),
                                    h[gr] === Mr && $e in h ? o.$user_id = h[$e] : delete o.$user_id,
                                    h[gr] !== Mr && (delete o[nr],
                                    delete o[sr]),
                                    delete o.__alias)
                                }
                                n = Ur(o, h)
                            } else
                                n = Ur(s, o);
                            return hs.F(t, n),
                            n
                        } catch (t) {}
                        return null
                    },
                    F(t, r, s, n, o, a) {
                        var l = hs.F(t, r, void 0, void 0, a);
                        try {
                            var h = ps(r, i);
                            if (Object.keys(h).length) {
                                if (e) {
                                    var u = vs(t)
                                      , d = _s(h, i);
                                    if (as.F(u, d, s, n, o, a),
                                    as.P(u) !== JSON.stringify(d)) {
                                        as.q(u, n);
                                        var v = ps(r);
                                        return as.F(t, v, s, n, o, a),
                                        l
                                    }
                                }
                                as.F(t, h, s, n, o, a)
                            }
                        } catch (t) {
                            hs.j(t)
                        }
                        return l
                    },
                    q(i, e) {
                        try {
                            null == t || t.localStorage.removeItem(i),
                            as.q(i, e),
                            as.q(vs(i), e)
                        } catch (t) {
                            hs.j(t)
                        }
                    }
                })
            }(i.cookie_persisted_properties || [], i.cookieWinsOnConflict), s = !1, n = i.persistence.toLowerCase();
            return "localstorage" === n && hs.N() ? (e = hs,
            s = !0) : "localstorage+cookie" === n && r.N() ? (e = r,
            s = !0) : "sessionstorage" === n && Ss.N() ? e = Ss : "memory" === n ? e = ws : "cookie" === n ? e = as : r.N() ? (e = r,
            s = !0) : e = as,
            this.bi = s,
            e
        }
        Hi(t) {
            return this.Mi + "__" + t
        }
        Ei(t) {
            return this.bi && !!t.split_storage
        }
        properties() {
            var t = {};
            return zr(this.props, ( (i, e) => {
                var r = Pn(e);
                if (!r || "event" === r.exposure) {
                    if (null != r && null != r.shouldSkipFromEventProperties && r.shouldSkipFromEventProperties(i))
                        return;
                    t[e] = i
                }
            }
            )),
            t
        }
        load() {
            if (!this.Oi) {
                var t = this.qe.cookieWinsOnConflict && "localstorage+cookie" === this.qe.persistence.toLowerCase()
                  , i = t ? hs.H(this.Mi) : null
                  , e = {};
                if (t)
                    try {
                        zr(e = fs(as.H(this.Mi)), ( (t, i) => {
                            (J(t) || Q(t) || "" === t) && delete e[i]
                        }
                        ))
                    } catch (t) {}
                var r = this.oi.H(this.Mi);
                if (r && (this.props = Ur({}, r)),
                this.wi && this.Ui(),
                t && r) {
                    var s, n, o = null == i ? void 0 : i[$e], a = null !== (s = null == i ? void 0 : i[gr]) && void 0 !== s ? s : Cr, l = r[$e], h = null !== (n = r[gr]) && void 0 !== n ? n : Cr;
                    if (l !== o || h !== a) {
                        this.ki = !0,
                        Ss.F(Xn(this.Mi), !0);
                        var u = Ur({}, this.props);
                        us.forEach((t => delete u[t])),
                        h === Cr && (a === Mr || e[gr] === Cr || !J(o) && l !== o) && (to(u, e),
                        delete u[sr]),
                        this.props = u;
                        var d = new Set;
                        us.forEach((t => {
                            var i, e = null == (i = Pn(t)) ? void 0 : i.storageGroup;
                            e && d.add(e)
                        }
                        )),
                        d.forEach((t => {
                            var i = {};
                            zr(this.props, ( (e, r) => {
                                var s;
                                (null == (s = Pn(r)) ? void 0 : s.storageGroup) === t && (i[r] = e)
                            }
                            )),
                            G(i) ? (hs.q(this.Hi(t)),
                            this.yi[t] = {}) : hs.F(this.Hi(t), i) && (this.yi[t] = {
                                persisted: !0,
                                fingerprint: this.zi(i, t)
                            })
                        }
                        ))
                    }
                }
                Ss.P(Xn(this.Mi)) && (this.ki = !0)
            }
        }
        Ui() {
            for (var t of kn) {
                var i = hs.H(this.Hi(t));
                if (i && !G(i)) {
                    var e = this.Wi(t);
                    e.persisted = !0,
                    this.Vi(t) || (e.fingerprint = this.zi(i, t)),
                    this.Zi(t, i) || Ur(this.props, i)
                }
            }
        }
        Vi(t) {
            return Object.keys(this.props).some((i => {
                var e;
                return (null == (e = Pn(i)) ? void 0 : e.storageGroup) === t
            }
            ))
        }
        Zi(t, i) {
            var e = Yn[t];
            if (!e)
                return !1;
            var r = i[e]
              , s = this.props[e];
            return Z(r) && Z(s) && s > r
        }
        refreshKey(t) {
            var i;
            if (!this.Oi) {
                var e = this.wi ? null == (i = Pn(t)) ? void 0 : i.storageGroup : void 0
                  , r = e ? hs.H(this.Hi(e)) : this.oi.H(this.Mi);
                if (r && t in r)
                    this.Li(t, r[t]);
                else {
                    if (e) {
                        var s = this.oi.H(this.Mi);
                        if (s && t in s)
                            return void this.Li(t, s[t])
                    }
                    this.Di(t)
                }
            }
        }
        save() {
            if (!this.Oi) {
                var t = this.Ii();
                t > 0 ? J(this.qi) && (this.qi = setTimeout(( () => {
                    this.qi = void 0,
                    this.ji()
                }
                ), t)) : this.ji()
            }
        }
        flush() {
            J(this.qi) || (clearTimeout(this.qi),
            this.qi = void 0,
            this.ji())
        }
        ji(t) {
            void 0 === t && (t = !1),
            this.Oi || this.xi && !t || (t || this.syncCookieProperties(),
            this.wi ? this.Gi() : this.Qi(this.oi, this.Mi, this.props, Zn) && this.Pi(this.props))
        }
        Gi() {
            var t = this.Ji()
              , i = t.main
              , e = t.groups;
            for (var r of (this.Qi(this.oi, this.Mi, i, Zn) && this.Pi(i),
            kn)) {
                var s, n = e[r];
                (!G(n) || null != (s = this.yi[r]) && s.persisted) && this.Qi(hs, this.Hi(r), n, r)
            }
        }
        Ji() {
            var t = {}
              , i = {
                flags: {},
                surveys: {}
            };
            return zr(this.props, ( (e, r) => {
                var s, n = null == (s = Pn(r)) ? void 0 : s.storageGroup;
                n ? i[n][r] = e : t[r] = e
            }
            )),
            {
                main: t,
                groups: i
            }
        }
        zi(t, i) {
            if (i === Zn)
                return JSON.stringify(t) + "|" + this.Ki + "|" + this.Yi + "|" + this.Xi;
            var e = {};
            return zr(t, ( (t, i) => {
                var r;
                e[i] = null != (r = Pn(i)) && r.volatile ? "__volatile__" : t
            }
            )),
            JSON.stringify(e)
        }
        Qi(t, i, e, r) {
            var s, n = this.Wi(r);
            if (r !== Zn && !n.dirty && !J(n.fingerprint))
                return !1;
            try {
                if ((s = this.zi(e, r)) === n.fingerprint)
                    return n.dirty = !1,
                    !1
            } catch (t) {
                s = void 0
            }
            return t.F(i, e, this.Ki, this.Yi, this.Xi, this.qe.debug) ? (n.dirty = !1,
            r !== Zn && (n.persisted = !0),
            J(s) || (n.fingerprint = s),
            !0) : (this.qe.debug && me.warn('failed to persist storage entry "' + i + '"; will retry on next save'),
            !1)
        }
        remove(t) {
            var i = (void 0 === t ? {} : t).keepGroupEntries
              , e = void 0 !== i && i;
            if (J(this.qi) || (clearTimeout(this.qi),
            this.qi = void 0),
            this.oi.q(this.Mi, !1),
            this.oi.q(this.Mi, !0),
            !e && this.Si)
                for (var r of kn)
                    hs.q(this.Hi(r));
            e ? delete this.yi[Zn] : this.yi = {},
            this.Ri = void 0,
            this.Ai = void 0
        }
        clear() {
            this.remove(),
            this.props = {}
        }
        register_once(t, i, e) {
            if (W(t)) {
                this.syncCookieProperties(),
                J(i) && (i = "None"),
                this.Ki = J(e) ? this.tr : e;
                var r = !1;
                if (zr(t, ( (t, e) => {
                    this.props.hasOwnProperty(e) && this.props[e] !== i || (this.Li(e, t),
                    r = !0)
                }
                )),
                r)
                    return this.save(),
                    !0
            }
            return !1
        }
        register(t, i) {
            if (W(t)) {
                this.syncCookieProperties(),
                this.Ki = J(i) ? this.tr : i;
                var e = !1;
                if (zr(t, ( (i, r) => {
                    t.hasOwnProperty(r) && (this.props[r] !== i || W(i) || H(i)) && (this.Li(r, i),
                    e = !0)
                }
                )),
                e)
                    return this.save(),
                    !0
            }
            return !1
        }
        unregister(t) {
            this.syncCookieProperties();
            var i = "string" == typeof t ? [t] : t
              , e = !1;
            for (var r of i)
                r in this.props && (this.Di(r),
                e = !0);
            e && this.save()
        }
        update_campaign_params() {
            var t = null == r ? void 0 : r.URL;
            if (t !== this.Ci) {
                var i = Bn(this.qe.custom_campaign_params, this.qe.mask_personal_data_properties, this.qe.custom_personal_data_properties);
                G(Wr(i)) || this.register(i),
                this.Ci = t
            }
        }
        update_search_keyword() {
            var t;
            this.register((t = null == r ? void 0 : r.referrer) ? Un(t) : {})
        }
        update_referrer_info() {
            var t;
            this.register_once({
                $referrer: Vn(),
                $referring_domain: null != r && r.referrer && (null == (t = Fn(r.referrer)) ? void 0 : t.host) || Hn
            }, void 0)
        }
        set_initial_person_info() {
            this.props[yr] || this.props[br] || this.register_once({
                [wr]: Wn(this.qe.mask_personal_data_properties, this.qe.custom_personal_data_properties, this.qe.disable_capture_url_hashes)
            }, void 0)
        }
        get_initial_props() {
            var t = {};
            zr([br, yr], (i => {
                var e = this.props[i];
                e && zr(e, (function(i, e) {
                    t["$initial_" + N(e)] = i
                }
                ))
            }
            ));
            var i = this.props[wr];
            if (i) {
                var e = function(t, i) {
                    void 0 === i && (i = !1);
                    var e = Gn(t, i)
                      , r = {};
                    return zr(e, (function(t, i) {
                        r["$initial_" + N(i)] = t
                    }
                    )),
                    r
                }(i, this.qe.disable_capture_url_hashes);
                Ur(t, e)
            }
            return t
        }
        safe_merge(t) {
            return zr(this.props, (function(i, e) {
                e in t || (t[e] = i)
            }
            )),
            t
        }
        update_config(t, i, e) {
            var r = t.persistence !== i.persistence
              , s = !( (t, i) => {
                if (t.length !== i.length)
                    return !1;
                var e = [...t].sort()
                  , r = [...i].sort();
                return e.every(( (t, i) => t === r[i]))
            }
            )(t.cookie_persisted_properties || [], i.cookie_persisted_properties || [])
              , n = r || s
              , o = t.cookieWinsOnConflict !== i.cookieWinsOnConflict
              , a = t.disable_persistence || !!e
              , l = !!this.Oi && !a;
            a || this.Fi(i, l),
            this.qe = t,
            !a && (r || s || o) && (this.Ri = void 0,
            this.Ai = void 0,
            this.Fi(g({}, t, {
                cookie_persisted_properties: i.cookie_persisted_properties
            }), l));
            var h = n || o ? this.Ti(t) : this.oi
              , u = this.Ei(t)
              , d = n || u !== this.wi
              , v = !a && (d || t.cross_subdomain_cookie !== this.Yi || t.secure_cookie !== this.Xi) && this.$i(l);
            try {
                if (this.tr = this.Ki = t.cookie_expiration,
                this.set_disabled(a),
                this.set_cross_subdomain(t.cross_subdomain_cookie),
                this.set_secure(t.secure_cookie),
                d) {
                    var c = this.props;
                    this.clear(),
                    this.oi = h,
                    this.wi = u,
                    this.props = c,
                    this.save()
                } else
                    o && (this.oi = h,
                    a || (delete this.yi[Zn],
                    this.ji()))
            } finally {
                v && this.Bi()
            }
        }
        set_disabled(t) {
            this.Oi = t,
            this.Oi ? this.remove() : this.save()
        }
        set_cross_subdomain(t) {
            t !== this.Yi && (this.Yi = t,
            this.remove({
                keepGroupEntries: !0
            }),
            this.save())
        }
        set_secure(t) {
            t !== this.Xi && (this.Xi = t,
            this.remove({
                keepGroupEntries: !0
            }),
            this.save())
        }
        set_event_timer(t, i) {
            var e = this.props[Re] || {};
            e[t] = i,
            this.Li(Re, e),
            this.save()
        }
        remove_event_timer(t) {
            var i = this.props[Re] || {}
              , e = i[t];
            return J(e) || (delete i[t],
            this.Li(Re, i),
            this.save()),
            e
        }
        get_property(t) {
            return this.props[t]
        }
        set_property(t, i) {
            this.Li(t, i),
            this.save()
        }
        Li(t, i) {
            var e;
            this.props[t] = i,
            null != (e = Pn(t)) && e.volatile || this.er(t)
        }
        Di(t) {
            delete this.props[t],
            this.er(t)
        }
        er(t) {
            var i, e = null == (i = Pn(t)) ? void 0 : i.storageGroup;
            e && (this.Wi(e).dirty = !0)
        }
        Wi(t) {
            return this.yi[t] || (this.yi[t] = {})
        }
    }
    function eo(t) {
        var i = !0;
        return {
            dispose() {
                if (i) {
                    i = !1;
                    var e = t();
                    e && V(e.then) && e.then(void 0, ( () => {}
                    ))
                }
            }
        }
    }
    var ro = "gzip-js"
      , so = "base64"
      , no = "events"
      , oo = "cancelEvents"
      , ao = "survey shown"
      , lo = "survey dismissed"
      , ho = "survey sent"
      , uo = "popover"
      , vo = ye("[RateLimiter]");
    class co {
        constructor(t) {
            this.serverLimits = {},
            this.lastEventRateLimited = !1,
            this.checkForLimiting = t => {
                var i = t.text;
                if (i && i.length)
                    try {
                        (JSON.parse(i).quota_limited || []).forEach((t => {
                            vo.info((t || "events") + " is quota limited."),
                            this.serverLimits[t] = (new Date).getTime() + 6e4
                        }
                        ))
                    } catch (t) {
                        return void vo.warn('could not rate limit - continuing. Error: "' + (null == t ? void 0 : t.message) + '"', {
                            text: i
                        })
                    }
            }
            ,
            this.instance = t,
            this.lastEventRateLimited = this.clientRateLimitContext(!0).isRateLimited
        }
        get captureEventsPerSecond() {
            var t;
            return (null == (t = this.instance.config.rate_limiting) ? void 0 : t.events_per_second) || 10
        }
        get captureEventsBurstLimit() {
            var t;
            return Math.max((null == (t = this.instance.config.rate_limiting) ? void 0 : t.events_burst_limit) || 10 * this.captureEventsPerSecond, this.captureEventsPerSecond)
        }
        clientRateLimitContext(t) {
            var i, e, r;
            void 0 === t && (t = !1);
            var s = this.captureEventsBurstLimit
              , n = this.captureEventsPerSecond
              , o = (new Date).getTime()
              , a = null !== (i = null == (e = this.instance.persistence) ? void 0 : e.get_property(mr)) && void 0 !== i ? i : {
                tokens: s,
                last: o
            };
            a.tokens += (o - a.last) / 1e3 * n,
            a.last = o,
            a.tokens > s && (a.tokens = s);
            var l = 1 > a.tokens;
            if (l || t || (a.tokens = Math.max(0, a.tokens - 1)),
            l && !t) {
                var h = (Z(a.dropped) ? a.dropped : 0) + 1;
                a.dropped = h,
                !this.lastEventRateLimited && this.ir(h) && (a.dropped = 0)
            }
            return this.lastEventRateLimited = l,
            null == (r = this.instance.persistence) || r.set_property(mr, a),
            {
                isRateLimited: l,
                remainingTokens: a.tokens
            }
        }
        rr(t) {
            var i = this.instance.config.property_denylist;
            return !H(i) || !i.includes(t)
        }
        nr() {
            var t;
            if (this.rr("$current_url") && this.rr("$pathname") && null != s && s.pathname)
                return "" + (null !== (t = s.origin) && void 0 !== t ? t : "") + s.pathname
        }
        ir(t) {
            var i, e, r = this.captureEventsBurstLimit, s = this.captureEventsPerSecond, n = this.nr(), o = this.rr("$session_id") ? null == (i = (e = this.instance).get_session_id) ? void 0 : i.call(e) : void 0, a = [t + " event(s) dropped since the last warning", n ? "triggered on " + n : void 0, o ? "session " + o : void 0].filter(Boolean).join(", ");
            return !!this.instance.capture("$$client_ingestion_warning", {
                $$client_ingestion_warning_message: "posthog-js client rate limited: " + a + ". Config is set to " + s + " events per second and " + r + " events burst limit."
            }, {
                skip_client_rate_limiting: !0
            })
        }
        isServerRateLimited(t) {
            var i = this.serverLimits[t || "events"] || !1;
            return !1 !== i && (new Date).getTime() < i
        }
    }
    var fo = ye("[RemoteConfig]");
    class po {
        constructor(t) {
            this._instance = t
        }
        get remoteConfig() {
            var t;
            return null == (t = v._POSTHOG_REMOTE_CONFIG) || null == (t = t[this._instance.config.token]) ? void 0 : t.config
        }
        sr(t) {
            var i, e;
            null != (i = v.__PosthogExtensions__) && i.loadExternalDependency ? null == (e = v.__PosthogExtensions__) || null == e.loadExternalDependency || e.loadExternalDependency(this._instance, "remote-config", ( () => t(this.remoteConfig))) : t()
        }
        ar(t) {
            this._instance._send_request({
                method: "GET",
                url: this._instance.requestRouter.endpointFor("assets", "/array/" + this._instance.config.token + "/config"),
                callback: t
            })
        }
        load() {
            try {
                if (this.remoteConfig)
                    return fo.info("Using preloaded remote config", this.remoteConfig),
                    this.lr(this.remoteConfig),
                    void this.ur();
                if (this._instance.hr())
                    return void fo.warn("Remote config is disabled. Falling back to local config.");
                this.sr((t => {
                    if (!t)
                        return fo.info("No config found after loading remote JS config. Falling back to JSON."),
                        void this.ar((t => {
                            this.lr(t.json, t),
                            this.ur()
                        }
                        ));
                    this.lr(t),
                    this.ur()
                }
                ))
            } catch (t) {
                fo.error("Error loading remote config", t),
                this.lr()
            }
        }
        stop() {
            this.dr && (clearInterval(this.dr),
            this.dr = void 0)
        }
        refresh() {
            !this._instance.hr() && r && "hidden" !== r.visibilityState && this._instance.reloadFeatureFlags()
        }
        ur() {
            var t;
            if (!this.dr) {
                var i = null !== (t = this._instance.config.remote_config_refresh_interval_ms) && void 0 !== t ? t : 3e5;
                0 !== i && (this.dr = setInterval(( () => {
                    this.refresh()
                }
                ), i))
            }
        }
        lr(t, i) {
            !t && i && (0 === i.statusCode ? i.error || fo.warn("Failed to fetch remote config from PostHog.") : fo.error("Failed to fetch remote config from PostHog."));
            try {
                this._instance.lr(t ? {
                    ok: !0,
                    config: t
                } : {
                    ok: !1
                })
            } catch (t) {
                fo.error("Error applying remote config", t)
            }
            if (!1 !== (null == t ? void 0 : t.hasFeatureFlags) && !this._instance.config.advanced_disable_feature_flags_on_first_load)
                try {
                    var e;
                    null == (e = this._instance.featureFlags) || e.ensureFlagsLoaded()
                } catch (t) {
                    fo.error("Error loading feature flags", t)
                }
        }
    }
    var go = Uint8Array
      , _o = Uint16Array
      , mo = Uint32Array
      , yo = new go([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0])
      , bo = new go([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0])
      , wo = new go([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15])
      , xo = function(t, i) {
        for (var e = new _o(31), r = 0; 31 > r; ++r)
            e[r] = i += 1 << t[r - 1];
        var s = new mo(e[30]);
        for (r = 1; 30 > r; ++r)
            for (var n = e[r]; e[r + 1] > n; ++n)
                s[n] = n - e[r] << 5 | r;
        return [e, s]
    }
      , So = xo(yo, 2)
      , ko = So[1];
    So[0][28] = 258,
    ko[258] = 28;
    for (var Eo = xo(bo, 0)[1], $o = new _o(32768), Po = 0; 32768 > Po; ++Po) {
        var To = (43690 & Po) >>> 1 | (21845 & Po) << 1;
        $o[Po] = ((65280 & (To = (61680 & (To = (52428 & To) >>> 2 | (13107 & To) << 2)) >>> 4 | (3855 & To) << 4)) >>> 8 | (255 & To) << 8) >>> 1
    }
    var Fo = function(t, i, e) {
        for (var r = t.length, s = 0, n = new _o(i); r > s; ++s)
            ++n[t[s] - 1];
        var o, a = new _o(i);
        for (s = 0; i > s; ++s)
            a[s] = a[s - 1] + n[s - 1] << 1;
        if (e) {
            o = new _o(1 << i);
            var l = 15 - i;
            for (s = 0; r > s; ++s)
                if (t[s])
                    for (var h = s << 4 | t[s], u = i - t[s], d = a[t[s] - 1]++ << u, v = d | (1 << u) - 1; v >= d; ++d)
                        o[$o[d] >>> l] = h
        } else
            for (o = new _o(r),
            s = 0; r > s; ++s)
                o[s] = $o[a[t[s] - 1]++] >>> 15 - t[s];
        return o
    }
      , Ro = new go(288);
    for (Po = 0; 144 > Po; ++Po)
        Ro[Po] = 8;
    for (Po = 144; 256 > Po; ++Po)
        Ro[Po] = 9;
    for (Po = 256; 280 > Po; ++Po)
        Ro[Po] = 7;
    for (Po = 280; 288 > Po; ++Po)
        Ro[Po] = 8;
    var Co = new go(32);
    for (Po = 0; 32 > Po; ++Po)
        Co[Po] = 5;
    var Mo = Fo(Ro, 9, 0)
      , Io = Fo(Co, 5, 0)
      , Ao = function(t) {
        return (t / 8 >> 0) + (7 & t && 1)
    }
      , Oo = function(t, i, e) {
        (null == e || e > t.length) && (e = t.length);
        var r = new (t instanceof _o ? _o : t instanceof mo ? mo : go)(e - i);
        return r.set(t.subarray(i, e)),
        r
    }
      , Do = function(t, i, e) {
        var r = i / 8 >> 0;
        t[r] |= e <<= 7 & i,
        t[r + 1] |= e >>> 8
    }
      , jo = function(t, i, e) {
        var r = i / 8 >> 0;
        t[r] |= e <<= 7 & i,
        t[r + 1] |= e >>> 8,
        t[r + 2] |= e >>> 16
    }
      , Lo = function(t, i) {
        for (var e = [], r = 0; t.length > r; ++r)
            t[r] && e.push({
                s: r,
                f: t[r]
            });
        var s = e.length
          , n = e.slice();
        if (!s)
            return [new go(0), 0];
        if (1 == s) {
            var o = new go(e[0].s + 1);
            return o[e[0].s] = 1,
            [o, 1]
        }
        e.sort((function(t, i) {
            return t.f - i.f
        }
        )),
        e.push({
            s: -1,
            f: 25001
        });
        var a = e[0]
          , l = e[1]
          , h = 0
          , u = 1
          , d = 2;
        for (e[0] = {
            s: -1,
            f: a.f + l.f,
            l: a,
            r: l
        }; u != s - 1; )
            a = e[e[d].f > e[h].f ? h++ : d++],
            l = e[h != u && e[d].f > e[h].f ? h++ : d++],
            e[u++] = {
                s: -1,
                f: a.f + l.f,
                l: a,
                r: l
            };
        var v = n[0].s;
        for (r = 1; s > r; ++r)
            n[r].s > v && (v = n[r].s);
        var c = new _o(v + 1)
          , f = No(e[u - 1], c, 0);
        if (f > i) {
            r = 0;
            var p = 0
              , g = f - i
              , _ = 1 << g;
            for (n.sort((function(t, i) {
                return c[i.s] - c[t.s] || t.f - i.f
            }
            )); s > r; ++r) {
                var m = n[r].s;
                if (i >= c[m])
                    break;
                p += _ - (1 << f - c[m]),
                c[m] = i
            }
            for (p >>>= g; p > 0; ) {
                var y = n[r].s;
                i > c[y] ? p -= 1 << i - c[y]++ - 1 : ++r
            }
            for (; r >= 0 && p; --r) {
                var b = n[r].s;
                c[b] == i && (--c[b],
                ++p)
            }
            f = i
        }
        return [new go(c), f]
    }
      , No = function(t, i, e) {
        return -1 == t.s ? Math.max(No(t.l, i, e + 1), No(t.r, i, e + 1)) : i[t.s] = e
    }
      , Bo = function(t) {
        for (var i = t.length; i && !t[--i]; )
            ;
        for (var e = new _o(++i), r = 0, s = t[0], n = 1, o = function(t) {
            e[r++] = t
        }, a = 1; i >= a; ++a)
            if (t[a] == s && a != i)
                ++n;
            else {
                if (!s && n > 2) {
                    for (; n > 138; n -= 138)
                        o(32754);
                    n > 2 && (o(n > 10 ? n - 11 << 5 | 28690 : n - 3 << 5 | 12305),
                    n = 0)
                } else if (n > 3) {
                    for (o(s),
                    --n; n > 6; n -= 6)
                        o(8304);
                    n > 2 && (o(n - 3 << 5 | 8208),
                    n = 0)
                }
                for (; n--; )
                    o(s);
                n = 1,
                s = t[a]
            }
        return [e.subarray(0, r), i]
    }
      , zo = function(t, i) {
        for (var e = 0, r = 0; i.length > r; ++r)
            e += t[r] * i[r];
        return e
    }
      , Uo = function(t, i, e) {
        var r = e.length
          , s = Ao(i + 2);
        t[s] = 255 & r,
        t[s + 1] = r >>> 8,
        t[s + 2] = 255 ^ t[s],
        t[s + 3] = 255 ^ t[s + 1];
        for (var n = 0; r > n; ++n)
            t[s + n + 4] = e[n];
        return 8 * (s + 4 + r)
    }
      , qo = function(t, i, e, r, s, n, o, a, l, h, u) {
        Do(i, u++, e),
        ++s[256];
        for (var d = Lo(s, 15), v = d[0], c = d[1], f = Lo(n, 15), p = f[0], g = f[1], _ = Bo(v), m = _[0], y = _[1], b = Bo(p), w = b[0], x = b[1], S = new _o(19), k = 0; m.length > k; ++k)
            S[31 & m[k]]++;
        for (k = 0; w.length > k; ++k)
            S[31 & w[k]]++;
        for (var E = Lo(S, 7), P = E[0], T = E[1], F = 19; F > 4 && !P[wo[F - 1]]; --F)
            ;
        var R, C, M, I, A = h + 5 << 3, O = zo(s, Ro) + zo(n, Co) + o, D = zo(s, v) + zo(n, p) + o + 14 + 3 * F + zo(S, P) + (2 * S[16] + 3 * S[17] + 7 * S[18]);
        if (O >= A && D >= A)
            return Uo(i, u, t.subarray(l, l + h));
        if (Do(i, u, 1 + (O > D)),
        u += 2,
        O > D) {
            R = Fo(v, c, 0),
            C = v,
            M = Fo(p, g, 0),
            I = p;
            var j = Fo(P, T, 0);
            for (Do(i, u, y - 257),
            Do(i, u + 5, x - 1),
            Do(i, u + 10, F - 4),
            u += 14,
            k = 0; F > k; ++k)
                Do(i, u + 3 * k, P[wo[k]]);
            u += 3 * F;
            for (var L = [m, w], N = 0; 2 > N; ++N) {
                var B = L[N];
                for (k = 0; B.length > k; ++k)
                    Do(i, u, j[z = 31 & B[k]]),
                    u += P[z],
                    z > 15 && (Do(i, u, B[k] >>> 5 & 127),
                    u += B[k] >>> 12)
            }
        } else
            R = Mo,
            C = Ro,
            M = Io,
            I = Co;
        for (k = 0; a > k; ++k)
            if (r[k] > 255) {
                var z;
                jo(i, u, R[257 + (z = r[k] >>> 18 & 31)]),
                u += C[z + 257],
                z > 7 && (Do(i, u, r[k] >>> 23 & 31),
                u += yo[z]);
                var U = 31 & r[k];
                jo(i, u, M[U]),
                u += I[U],
                U > 3 && (jo(i, u, r[k] >>> 5 & 8191),
                u += bo[U])
            } else
                jo(i, u, R[r[k]]),
                u += C[r[k]];
        return jo(i, u, R[256]),
        u + C[256]
    }
      , Ho = new mo([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632])
      , Vo = function() {
        for (var t = new mo(256), i = 0; 256 > i; ++i) {
            for (var e = i, r = 9; --r; )
                e = (1 & e && 3988292384) ^ e >>> 1;
            t[i] = e
        }
        return t
    }()
      , Wo = function(t, i, e) {
        for (; e; ++i)
            t[i] = e,
            e >>>= 8
    };
    function Go(t, i) {
        void 0 === i && (i = {});
        var e = function() {
            var t = 4294967295;
            return {
                p(i) {
                    for (var e = t, r = 0; i.length > r; ++r)
                        e = Vo[255 & e ^ i[r]] ^ e >>> 8;
                    t = e
                },
                d() {
                    return 4294967295 ^ t
                }
            }
        }()
          , r = t.length;
        e.p(t);
        var s, n, o, a, l, h = (a = 10 + ((s = i).filename && s.filename.length + 1 || 0),
        l = 8,
        function(t, i, e, r, s, n) {
            var o = t.length
              , a = new go(r + o + 5 * (1 + Math.floor(o / 7e3)) + s)
              , l = a.subarray(r, a.length - s)
              , h = 0;
            if (!i || 8 > o)
                for (var u = 0; o >= u; u += 65535) {
                    var d = u + 65535;
                    o > d ? h = Uo(l, h, t.subarray(u, d)) : (l[u] = !0,
                    h = Uo(l, h, t.subarray(u, o)))
                }
            else {
                for (var v = Ho[i - 1], c = v >>> 13, f = 8191 & v, p = (1 << e) - 1, g = new _o(32768), _ = new _o(p + 1), m = Math.ceil(e / 3), y = 2 * m, b = function(i) {
                    return (t[i] ^ t[i + 1] << m ^ t[i + 2] << y) & p
                }, w = new mo(25e3), x = new _o(288), S = new _o(32), k = 0, E = 0, P = (u = 0,
                0), T = 0, F = 0; o > u; ++u) {
                    var R = b(u)
                      , C = 32767 & u
                      , M = _[R];
                    if (g[C] = M,
                    _[R] = C,
                    u >= T) {
                        var I = o - u;
                        if ((k > 7e3 || P > 24576) && I > 423) {
                            h = qo(t, l, 0, w, x, S, E, P, F, u - F, h),
                            P = k = E = 0,
                            F = u;
                            for (var A = 0; 286 > A; ++A)
                                x[A] = 0;
                            for (A = 0; 30 > A; ++A)
                                S[A] = 0
                        }
                        var O = 2
                          , D = 0
                          , j = f
                          , L = C - M & 32767;
                        if (I > 2 && R == b(u - L))
                            for (var N = Math.min(c, I) - 1, B = Math.min(32767, u), z = Math.min(258, I); B >= L && --j && C != M; ) {
                                if (t[u + O] == t[u + O - L]) {
                                    for (var U = 0; z > U && t[u + U] == t[u + U - L]; ++U)
                                        ;
                                    if (U > O) {
                                        if (O = U,
                                        D = L,
                                        U > N)
                                            break;
                                        var q = Math.min(L, U - 2)
                                          , H = 0;
                                        for (A = 0; q > A; ++A) {
                                            var V = u - L + A + 32768 & 32767
                                              , W = V - g[V] + 32768 & 32767;
                                            W > H && (H = W,
                                            M = V)
                                        }
                                    }
                                }
                                L += (C = M) - (M = g[C]) + 32768 & 32767
                            }
                        if (D) {
                            w[P++] = 268435456 | ko[O] << 18 | Eo[D];
                            var G = 31 & ko[O]
                              , J = 31 & Eo[D];
                            E += yo[G] + bo[J],
                            ++x[257 + G],
                            ++S[J],
                            T = u + O,
                            ++k
                        } else
                            w[P++] = t[u],
                            ++x[t[u]]
                    }
                }
                h = qo(t, l, !0, w, x, S, E, P, F, u - F, h)
            }
            return Oo(a, 0, r + Ao(h) + s)
        }(n = t, null == (o = i).level ? 6 : o.level, null == o.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(n.length)))) : 12 + o.mem, a, l)), u = h.length;
        return function(t, i) {
            var e = i.filename;
            if (t[0] = 31,
            t[1] = 139,
            t[2] = 8,
            t[8] = 2 > i.level ? 4 : 9 == i.level ? 2 : 0,
            t[9] = 3,
            0 != i.mtime && Wo(t, 4, Math.floor(new Date(i.mtime || Date.now()) / 1e3)),
            e) {
                t[3] = 8;
                for (var r = 0; e.length >= r; ++r)
                    t[r + 10] = e.charCodeAt(r)
            }
        }(h, i),
        Wo(h, u - 8, e.d()),
        Wo(h, u - 4, r),
        h
    }
    var Jo = !!o || !!n
      , Ko = "text/plain"
      , Yo = !1
      , Qo = (t, i) => {
        var e = t.split("#")
          , r = e[1]
          , s = e[0].split("?")
          , n = s[0]
          , o = s[1];
        if (!o)
            return t;
        var a = o.split("&").filter((t => t.split("=")[0] !== i)).join("&");
        return n + (a ? "?" + a : "") + (r ? "#" + r : "")
    }
      , Xo = function(t, i, e) {
        var r;
        void 0 === e && (e = !0);
        var s = t.split("?")
          , n = s[0]
          , o = s[1]
          , a = g({}, i)
          , l = null !== (r = null == o ? void 0 : o.split("&").map((t => {
            var i, r = t.split("="), s = r[0], n = e && null !== (i = a[s]) && void 0 !== i ? i : r[1];
            return delete a[s],
            s + "=" + n
        }
        ))) && void 0 !== r ? r : []
          , h = function(t, i) {
            var e, r;
            void 0 === i && (i = "&");
            var s = [];
            return zr(t, (function(t, i) {
                J(t) || J(i) || "undefined" === i || (e = encodeURIComponent((t => t instanceof File)(t) ? t.name : t.toString()),
                r = encodeURIComponent(i),
                s[s.length] = r + "=" + e)
            }
            )),
            s.join(i)
        }(a);
        return h && l.push(h),
        l.length > 0 ? n + "?" + l.join("&") : n
    }
      , Zo = t => {
        if (t.vr)
            return t.vr;
        var i = t.data
          , e = t.compression;
        if (i) {
            if (e === ro) {
                var r = Go(function(t, i) {
                    var e = t.length;
                    if ("undefined" != typeof TextEncoder)
                        return (new TextEncoder).encode(t);
                    for (var r = new go(t.length + (t.length >>> 1)), s = 0, n = function(t) {
                        r[s++] = t
                    }, o = 0; e > o; ++o) {
                        if (s + 5 > r.length) {
                            var a = new go(s + 8 + (e - o << 1));
                            a.set(r),
                            r = a
                        }
                        var l = t.charCodeAt(o);
                        128 > l ? n(l) : 2048 > l ? (n(192 | l >>> 6),
                        n(128 | 63 & l)) : l > 55295 && 57344 > l ? (n(240 | (l = 65536 + (1047552 & l) | 1023 & t.charCodeAt(++o)) >>> 18),
                        n(128 | l >>> 12 & 63),
                        n(128 | l >>> 6 & 63),
                        n(128 | 63 & l)) : (n(224 | l >>> 12),
                        n(128 | l >>> 6 & 63),
                        n(128 | 63 & l))
                    }
                    return Oo(r, 0, s)
                }(Tn(i)), {
                    mtime: 0
                });
                return {
                    contentType: Ko,
                    body: r.buffer.slice(r.byteOffset, r.byteOffset + r.byteLength),
                    estimatedSize: r.byteLength
                }
            }
            if (e === so) {
                var s = function(t) {
                    return t ? btoa(encodeURIComponent(t).replace(/%([0-9A-F]{2})/g, ( (t, i) => String.fromCharCode(parseInt(i, 16))))) : t
                }(Tn(i))
                  , n = (t => "data=" + encodeURIComponent("string" == typeof t ? t : Tn(t)))(s);
                return {
                    contentType: "application/x-www-form-urlencoded",
                    body: n,
                    estimatedSize: new Blob([n]).size
                }
            }
            var o = Tn(i);
            return {
                contentType: "application/json",
                body: o,
                estimatedSize: new Blob([o]).size
            }
        }
    }
      , ta = t => {
        var i, e, r = () => "sendBeacon" === t.transport ? {
            url: Xo(t.url, {
                compression: so
            }),
            encodedBody: Zo(g({}, t, {
                compression: so,
                vr: void 0
            }))
        } : {
            url: Qo(t.url, "compression"),
            encodedBody: Zo(g({}, t, {
                compression: void 0,
                vr: void 0
            }))
        };
        try {
            i = Zo(t)
        } catch (i) {
            if (R(t.compression, Rn(t.url, "compression")))
                return me.error("Failed to gzip request body, sending uncompressed payload", i),
                r();
            throw i
        }
        return i && R(t.compression, Rn(t.url, "compression")) && !((e = i.body)instanceof ArrayBuffer ? F(new Uint8Array(e)) : ArrayBuffer.isView(e) && F(new Uint8Array(e.buffer,e.byteOffset,e.byteLength))) ? (Yo = !0,
        r()) : {
            url: t.url,
            encodedBody: i
        }
    }
      , ia = t => {
        try {
            return ta(t)
        } catch (i) {
            return me.error(i),
            void (null == t.callback || t.callback({
                statusCode: 0,
                error: i
            }))
        }
    }
      , ea = function() {
        var t = p((function*(t) {
            var i = Tn(t.data)
              , e = yield function(t, i, e) {
                return A.apply(this, arguments)
            }(i, c.DEBUG, {
                rethrow: !0
            });
            if (!e)
                return t;
            var r = yield e.arrayBuffer();
            return g({}, t, {
                vr: {
                    contentType: Ko,
                    body: r,
                    estimatedSize: r.byteLength
                }
            })
        }
        ));
        return function(i) {
            return t.apply(this, arguments)
        }
    }()
      , ra = /Failed to fetch|NetworkError|Load failed/i
      , sa = t => "TypeError" === (null == t ? void 0 : t.name) && ra.test((null == t ? void 0 : t.message) || "")
      , na = t => {
        var i = ia(t);
        if (i) {
            var e = i.url
              , r = i.encodedBody
              , s = null != r ? r : {}
              , o = s.contentType
              , l = s.body
              , h = s.estimatedSize
              , u = new Headers;
            zr(t.headers, (function(t, i) {
                u.append(i, t)
            }
            )),
            o && u.append("Content-Type", o);
            var d = null
              , v = !1;
            if (a) {
                var c = new a;
                d = {
                    signal: c.signal,
                    timeout: setTimeout(( () => {
                        var i, e;
                        v = !0,
                        c.abort((i = t.timeout,
                        (e = new Error("PostHog request timed out" + (i ? " after " + i + "ms" : ""))).name = "AbortError",
                        e))
                    }
                    ), t.timeout)
                }
            }
            var f = i => {
                v && "AbortError" === (null == i ? void 0 : i.name) || sa(i) ? me.warn(i) : me.error(i),
                null == t.callback || t.callback({
                    statusCode: 0,
                    error: i
                })
            }
            ;
            try {
                var p;
                n(e, g({
                    method: (null == t ? void 0 : t.method) || "GET",
                    headers: u,
                    keepalive: "POST" === t.method && !t.cr && 52428.8 > (h || 0),
                    body: l,
                    signal: null == (p = d) ? void 0 : p.signal
                }, t.fetchOptions)).then((i => i.text().then((e => {
                    var r = {
                        statusCode: i.status,
                        text: e
                    };
                    if (200 === i.status)
                        try {
                            r.json = JSON.parse(e)
                        } catch (t) {
                            me.error(t)
                        }
                    null == t.callback || t.callback(r)
                }
                )))).catch(f).finally(( () => d ? clearTimeout(d.timeout) : null))
            } catch (t) {
                d && clearTimeout(d.timeout),
                f(t)
            }
        }
    }
      , oa = t => {
        try {
            var i, r = ta(t), s = r.url, n = r.encodedBody, o = null != n ? n : {}, a = o.body, l = o.estimatedSize;
            if (!a)
                return;
            var h = a instanceof Blob ? a : new Blob([a],{
                type: o.contentType
            });
            if (e.sendBeacon(s, h))
                return;
            var u = H(t.data) ? t.data : null == (i = t.data) ? void 0 : i.batch;
            if (H(u) && u.length > 1 && (null != l ? l : 0) > 16384) {
                var d = Math.ceil(u.length / 2)
                  , v = i => H(t.data) ? i : g({}, t.data, {
                    batch: i
                });
                return oa(g({}, t, {
                    data: v(u.slice(0, d))
                })),
                void oa(g({}, t, {
                    data: v(u.slice(d))
                }))
            }
            me.warn("Beacon of ~" + (null != l ? l : 0) + " bytes was rejected by the browser, falling back to fetch"),
            na(g({}, t, {
                cr: !0
            }))
        } catch (t) {
            me.warn("Beacon send failed", t)
        }
    }
      , aa = (t, i, e, r) => {
        var s = "query" === r ? "POST" === i ? "sent_at" : "_" : void 0;
        return Xo(e === ro ? Qo(t, "compression") : t, g({}, s ? {
            [s]: Date.now().toString()
        } : {}, e === ro ? {} : {
            compression: e
        }))
    }
      , la = [];
    n && la.push({
        transport: "fetch",
        method: na
    }),
    o && la.push({
        transport: "XHR",
        method(t) {
            var i = ia(t);
            if (i) {
                var e = new o
                  , r = i.encodedBody;
                e.open(t.method || "GET", i.url, !0);
                var s = null != r ? r : {}
                  , n = s.contentType
                  , a = s.body;
                zr(t.headers, (function(t, i) {
                    e.setRequestHeader(i, t)
                }
                )),
                n && e.setRequestHeader("Content-Type", n),
                t.timeout && (e.timeout = t.timeout),
                e.onreadystatechange = () => {
                    if (4 === e.readyState) {
                        var i = {
                            statusCode: e.status,
                            text: e.responseText
                        };
                        if (200 === e.status)
                            try {
                                i.json = JSON.parse(e.responseText)
                            } catch (t) {}
                        null == t.callback || t.callback(i)
                    }
                }
                ,
                e.send(a)
            }
        }
    }),
    null != e && e.sendBeacon && la.push({
        transport: "sendBeacon",
        method: oa
    });
    var ha = 3e3;
    class ua {
        constructor(t, i) {
            this.pr = !0,
            this.gr = [],
            this.mr = ct((null == i ? void 0 : i.flush_interval_ms) || ha, 250, 5e3, me.createLogger("flush interval"), ha),
            this.yr = t
        }
        enqueue(t) {
            this.gr.push(t),
            this.br || this._r()
        }
        unload() {
            this.wr();
            var t = this.gr.length > 0 ? this.kr() : {}
              , i = Object.values(t);
            [...i.filter((t => 0 === t.url.indexOf("/e"))), ...i.filter((t => 0 !== t.url.indexOf("/e")))].map((t => {
                this.Sr(g({}, t, {
                    transport: "sendBeacon"
                }))
            }
            ))
        }
        enable() {
            this.pr = !1,
            this._r()
        }
        _r() {
            var t = this;
            this.pr || (this.br = setTimeout(( () => {
                if (this.wr(),
                this.gr.length > 0) {
                    var i = this.kr()
                      , e = function() {
                        var e = i[r]
                          , s = (new Date).getTime();
                        e.data && H(e.data) && zr(e.data, (t => {
                            t.offset = Math.abs(t.timestamp - s),
                            delete t.timestamp
                        }
                        )),
                        t.Sr(e)
                    };
                    for (var r in i)
                        e()
                }
            }
            ), this.mr))
        }
        Sr(t) {
            try {
                this.yr(t)
            } catch (t) {
                me.error(t)
            }
        }
        wr() {
            clearTimeout(this.br),
            this.br = void 0
        }
        kr() {
            var t = {};
            return zr(this.gr, (i => {
                var e, r = i, s = (r ? r.batchKey : null) || r.url;
                J(t[s]) && (t[s] = g({}, r, {
                    data: []
                })),
                null == (e = t[s].data) || e.push(r.data)
            }
            )),
            this.gr = [],
            t
        }
    }
    var da = ["retriesPerformedSoFar"];
    class va {
        constructor(i) {
            this.Cr = !1,
            this.Mr = 3e3,
            this.gr = [],
            this._instance = i,
            this.gr = [],
            this.Tr = !0,
            !J(t) && "onLine"in t.navigator && (this.Tr = t.navigator.onLine,
            this.Er = () => {
                this.Tr = !0,
                this.Ir()
            }
            ,
            this.Pr = () => {
                this.Tr = !1
            }
            ,
            Kr(t, "online", this.Er),
            Kr(t, "offline", this.Pr))
        }
        get length() {
            return this.gr.length
        }
        retriableRequest(t) {
            var i = t.retriesPerformedSoFar
              , e = _(t, da);
            tt(i) && (e.url = Xo(e.url, {
                retry_count: i
            })),
            this._instance._send_request(g({}, e, {
                callback: t => {
                    if (200 !== t.statusCode && (400 > t.statusCode || t.statusCode >= 500)) {
                        if ((0 === t.statusCode ? 3 : 10) > (null != i ? i : 0))
                            return void this.Ot(g({
                                retriesPerformedSoFar: i
                            }, e));
                        0 === t.statusCode && me.warn("Request failed before receiving an HTTP response; this can happen due to network issues, CORS, browser blocking, or ad blockers. Stopped retrying after " + (null != i ? i : 0) + " retries.")
                    }
                    null == e.callback || e.callback(t)
                }
            }))
        }
        Ot(t) {
            var i = t.retriesPerformedSoFar || 0;
            t.retriesPerformedSoFar = i + 1;
            var e = function(t) {
                var i = 3e3 * Math.pow(2, t)
                  , e = i / 2
                  , r = Math.min(18e5, i)
                  , s = Math.random() - .5;
                return Math.ceil(r + s * (r - e))
            }(i)
              , r = Date.now() + e;
            this.gr.push({
                retryAt: r,
                requestOptions: t
            });
            var s = "Enqueued failed request for retry in " + e;
            navigator.onLine || (s += " (Browser is offline)"),
            me.warn(s),
            this.Cr || (this.Cr = !0,
            this.Rr())
        }
        Rr() {
            if (this.Ar && clearTimeout(this.Ar),
            0 === this.gr.length)
                return this.Cr = !1,
                void (this.Ar = void 0);
            this.Ar = setTimeout(( () => {
                this.Tr && this.gr.length > 0 && this.Ir(),
                this.Rr()
            }
            ), this.Mr)
        }
        Ir() {
            var t = Date.now()
              , i = []
              , e = this.gr.filter((e => t > e.retryAt || (i.push(e),
            !1)));
            if (this.gr = i,
            e.length > 0)
                for (var r of e)
                    this.retriableRequest(r.requestOptions)
        }
        unload() {
            for (var i of (this.Ar && (clearTimeout(this.Ar),
            this.Ar = void 0),
            this.Cr = !1,
            J(t) || (this.Er && (t.removeEventListener("online", this.Er),
            this.Er = void 0),
            this.Pr && (t.removeEventListener("offline", this.Pr),
            this.Pr = void 0)),
            this.gr)) {
                var e = i.requestOptions;
                try {
                    this._instance._send_request(g({}, e, {
                        transport: "sendBeacon"
                    }))
                } catch (t) {
                    me.error(t)
                }
            }
            this.gr = []
        }
    }
    class ca {
        constructor(t) {
            this.Fr = () => {
                var t, i, e, r;
                this.Or || (this.Or = {});
                var s = this.scrollElement()
                  , n = this.scrollY()
                  , o = s ? Math.max(0, s.scrollHeight - s.clientHeight) : 0
                  , a = n + ((null == s ? void 0 : s.clientHeight) || 0)
                  , l = (null == s ? void 0 : s.scrollHeight) || 0;
                this.Or.lastScrollY = Math.ceil(n),
                this.Or.maxScrollY = Math.max(n, null !== (t = this.Or.maxScrollY) && void 0 !== t ? t : 0),
                this.Or.maxScrollHeight = Math.max(o, null !== (i = this.Or.maxScrollHeight) && void 0 !== i ? i : 0),
                this.Or.lastContentY = a,
                this.Or.maxContentY = Math.max(a, null !== (e = this.Or.maxContentY) && void 0 !== e ? e : 0),
                this.Or.maxContentHeight = Math.max(l, null !== (r = this.Or.maxContentHeight) && void 0 !== r ? r : 0)
            }
            ,
            this._instance = t
        }
        get Lr() {
            return this._instance.config.scroll_root_selector
        }
        getContext() {
            return this.Or
        }
        resetContext() {
            var t = this.Or;
            return setTimeout(this.Fr, 0),
            t
        }
        startMeasuringScrollPosition() {
            Kr(t, "scroll", this.Fr, {
                capture: !0
            }),
            Kr(t, "scrollend", this.Fr, {
                capture: !0
            }),
            Kr(t, "resize", this.Fr)
        }
        scrollElement() {
            if (!this.Lr)
                return null == t ? void 0 : t.document.documentElement;
            var i = H(this.Lr) ? this.Lr : [this.Lr];
            for (var e of i) {
                var r = null == t ? void 0 : t.document.querySelector(e);
                if (r)
                    return r
            }
        }
        Dr(i) {
            var e = "y" === i ? "scrollTop" : "scrollLeft";
            if (this.Lr) {
                var r = this.scrollElement();
                return r && r[e] || 0
            }
            return t ? "y" === i ? t.scrollY || t.pageYOffset || t.document.documentElement.scrollTop || 0 : t.scrollX || t.pageXOffset || t.document.documentElement.scrollLeft || 0 : 0
        }
        scrollY() {
            return this.Dr("y")
        }
        scrollX() {
            return this.Dr("x")
        }
    }
    var fa = t => Wn(null == t ? void 0 : t.config.mask_personal_data_properties, null == t ? void 0 : t.config.custom_personal_data_properties, null == t ? void 0 : t.config.disable_capture_url_hashes);
    class pa {
        constructor(t, i, e, r) {
            this.$r = t => {
                var i = this.Nr();
                if (!i || i.sessionId !== t) {
                    var e = {
                        sessionId: t,
                        props: this.qr(this._instance)
                    };
                    this.jr.register({
                        [_r]: e
                    })
                }
            }
            ,
            this._instance = t,
            this.Br = i,
            this.jr = e,
            this.qr = r || fa,
            this.Br.onSessionId(this.$r)
        }
        Nr() {
            return this.jr.props[_r]
        }
        getSetOnceProps() {
            var t, i = null == (t = this.Nr()) ? void 0 : t.props;
            return i ? "r"in i ? Gn(i, this._instance.config.disable_capture_url_hashes) : {
                $referring_domain: i.referringDomain,
                $pathname: i.initialPathName,
                utm_source: i.utm_source,
                utm_campaign: i.utm_campaign,
                utm_medium: i.utm_medium,
                utm_content: i.utm_content,
                utm_term: i.utm_term
            } : {}
        }
        getSessionProps() {
            var t = {};
            return zr(Wr(this.getSetOnceProps()), ( (i, e) => {
                "$current_url" === e && (e = "url"),
                t["$session_entry_" + N(e)] = i
            }
            )),
            t
        }
    }
    class ga {
        on(t, i) {
            return this.Hr[t] || (this.Hr[t] = []),
            this.Hr[t].push(i),
            () => {
                this.Hr[t] = this.Hr[t].filter((t => t !== i))
            }
        }
        emit(t, i) {
            for (var e of this.Hr[t] || [])
                e(i);
            for (var r of this.Hr["*"] || [])
                r(t, i)
        }
        constructor() {
            this.Hr = {}
        }
    }
    var _a = ye("[SessionId]")
      , ma = 864e5;
    class ya {
        on(t, i) {
            return this.Ur.on(t, i)
        }
        constructor(t, i, e) {
            var r;
            if (this.zr = null,
            this.Wr = null,
            this.Vr = [],
            this.Zr = void 0,
            this.Gr = !1,
            this.Ur = new ga,
            this.Qr = (t, i) => !(!tt(t) || !tt(i)) && Math.abs(t - i) > this.sessionTimeoutMs,
            !t.persistence)
                throw new Error("SessionIdManager requires a PostHogPersistence instance");
            if (t.config.cookieless_mode === Rr)
                throw new Error('SessionIdManager cannot be used with cookieless_mode="always"');
            this.qe = t.config,
            this.jr = t.persistence,
            this.Jr = void 0,
            this.Kr = void 0,
            this._sessionStartTimestamp = null,
            this.Yr = void 0,
            this._sessionActivityTimestamp = null,
            this.Xr = i || rs,
            this.tn = e || rs;
            var s = this.qe.persistence_name || this.qe.token;
            if (this._sessionTimeoutMs = 1e3 * ct(this.qe.session_idle_timeout_seconds || 1800, 60, 36e3, _a.createLogger("session_idle_timeout_seconds"), 1800),
            t.register({
                $configured_session_timeout_ms: this._sessionTimeoutMs
            }),
            this.en(),
            this.rn = "ph_" + s + "_window_id",
            this.nn = "ph_" + s + "_primary_window_exists",
            this.sn()) {
                var n = Ss.H(this.rn)
                  , o = Ss.H(this.nn);
                n && !o ? this.Jr = n : Ss.q(this.rn),
                Ss.F(this.nn, !0)
            }
            null != (r = this.qe.bootstrap) && r.sessionID && this.setBootstrapSessionId(this.qe.bootstrap.sessionID),
            this.an()
        }
        get sessionTimeoutMs() {
            return this._sessionTimeoutMs
        }
        onSessionId(t) {
            return J(this.Vr) && (this.Vr = []),
            this.Vr.push(t),
            this.Kr && t(this.Kr, this.Jr),
            () => {
                this.Vr = this.Vr.filter((i => i !== t))
            }
        }
        sn() {
            return "memory" !== this.qe.persistence && !this.jr.Oi && Ss.N()
        }
        ln(t) {
            t !== this.Jr && (this.Jr = t,
            this.sn() && Ss.F(this.rn, t))
        }
        un() {
            return this.Jr ? this.Jr : this.sn() ? Ss.H(this.rn) : null
        }
        hn(t) {
            var i = this.zr;
            return !Q(i) && !Q(t) && 5e3 > Math.abs(t - i)
        }
        dn(t, i, e) {
            var r = i !== this._sessionActivityTimestamp
              , s = !(t !== this.Kr || e !== this._sessionStartTimestamp);
            this._sessionStartTimestamp = e,
            this._sessionActivityTimestamp = i,
            this.Kr = t,
            s && !r || s && this.hn(i) || (this.zr = i,
            this.jr.register({
                [We]: [i, t, e]
            }))
        }
        vn() {
            var t, i = null == (t = this.qe) ? void 0 : t.persistence_save_debounce_ms;
            return tt(i) && i > 0
        }
        cn() {
            this.vn() ? this.jr.refreshKey(We) : (this.jr.flush(),
            this.jr.load())
        }
        fn() {
            var t;
            if (!Q(this._sessionActivityTimestamp) && this._sessionActivityTimestamp !== this.zr) {
                this.cn();
                var i = this.pn();
                i[1] === this.Kr && i[2] === this._sessionStartTimestamp && (this.zr = this._sessionActivityTimestamp,
                this.jr.register({
                    [We]: [this._sessionActivityTimestamp, null !== (t = this.Kr) && void 0 !== t ? t : null, this._sessionStartTimestamp]
                }),
                this.jr.flush())
            }
        }
        gn() {
            var t = this.pn()[0]
              , i = tt(t) ? t : 0
              , e = tt(this._sessionActivityTimestamp) ? this._sessionActivityTimestamp : 0;
            return Math.max(i, e)
        }
        mn(t) {
            return this.cn(),
            this.Qr(t, this.gn())
        }
        pn() {
            var t = this.jr.props[We];
            return H(t) && 2 === t.length && t.push(t[0]),
            t || [0, null, 0]
        }
        resetSessionId() {
            this.zr = null,
            this.Yr = void 0,
            clearTimeout(this.yn),
            this.yn = void 0,
            this.dn(null, null, null)
        }
        setBootstrapSessionId(t, i) {
            void 0 === i && (i = !1);
            var e = function(t, i) {
                void 0 === i && (i = (new Date).getTime());
                try {
                    var e = (t => {
                        var i = t.replace(/-/g, "");
                        if (32 !== i.length)
                            throw new Error("Not a valid UUID");
                        if ("7" !== i[12])
                            throw new Error("Not a UUIDv7");
                        return parseInt(i.substring(0, 12), 16)
                    }
                    )(t);
                    return e > i + 6e4 ? void _a.error("Bootstrap sessionID cannot be in the future") : e
                } catch (t) {
                    return void _a.error("Invalid sessionID in bootstrap", t)
                }
            }(t);
            return !J(e) && (i ? this.Yr = {
                sessionId: t,
                sessionStartTimestamp: e
            } : this.dn(t, (new Date).getTime(), e),
            !0)
        }
        destroy() {
            this.Gr = !0,
            this.fn(),
            clearTimeout(this.yn),
            this.yn = void 0,
            this.Zr && t && (t.removeEventListener(Or, this.Zr, {
                capture: !1
            }),
            this.Zr = void 0),
            this.Vr = []
        }
        an() {
            this.Zr = () => {
                this.fn(),
                this.sn() && Ss.q(this.nn)
            }
            ,
            Kr(t, Or, this.Zr, {
                capture: !1
            })
        }
        checkAndGetSessionAndWindowId(t, i, e) {
            if (void 0 === t && (t = !1),
            void 0 === i && (i = null),
            void 0 === e && (e = !1),
            this.qe.cookieless_mode === Rr)
                throw new Error('checkAndGetSessionAndWindowId should not be called with cookieless_mode="always"');
            var r = i || (new Date).getTime()
              , s = this.Kr;
            if (e)
                this.Wr = r;
            else if (Q(this.Wr) || this.Wr > r || r - this.Wr >= 1e3) {
                var n, o;
                null == (n = (o = this.jr).syncCookieProperties) || n.call(o),
                this.Wr = r
            }
            var a = this.pn()
              , l = a[1]
              , h = a[2]
              , u = !J(s) && l !== s
              , d = this.gn()
              , v = this.un()
              , c = this.Yr
              , f = !!c && (c.sessionStartTimestamp > r + 6e4 || r - c.sessionStartTimestamp > ma)
              , p = c ? f : tt(h) && Math.abs(r - h) > ma
              , g = !1
              , _ = u
              , m = !l || !!c
              , y = l
              , b = !m && !t && this.Qr(r, d);
            if (b) {
                (b = this.mn(r)) || _a.info("cross-tab refresh kept the session alive", {
                    sessionId: l
                });
                var w = this.pn();
                l = w[1],
                h = w[2]
            }
            if (m || b || p) {
                _ = !1;
                var x = c && !f;
                l = x ? c.sessionId : this.Xr(),
                v = this.tn(),
                _a.info("new session ID assigned", {
                    sessionId: l,
                    windowId: v,
                    bootstrapped: !!x,
                    changeReason: {
                        noSessionId: m,
                        activityTimeout: b,
                        sessionPastMaximumLength: p
                    }
                }),
                h = x ? c.sessionStartTimestamp : r,
                this.Yr = void 0,
                g = !0
            } else
                v || (v = this.tn(),
                g = !0),
                (_ = _ || l !== y) && (_a.info("adopted cross-tab session id", {
                    sessionId: l,
                    windowId: v
                }),
                g = !0);
            var S = tt(d) && t && !p ? d : r
              , k = tt(h) ? h : (new Date).getTime();
            this.ln(v),
            this.dn(l, S, k),
            t || this.en();
            var E = {
                noSessionId: m,
                activityTimeout: b,
                sessionPastMaximumLength: p,
                crossTabAdoption: _
            };
            return g && this.Vr.forEach((t => t(l, v, E))),
            {
                sessionId: l,
                windowId: v,
                sessionStartTimestamp: k,
                changeReason: g ? E : void 0,
                lastActivityTimestamp: d
            }
        }
        en() {
            this.Gr || (clearTimeout(this.yn),
            this.yn = setTimeout(( () => {
                if (!this.Gr)
                    if (this.mn((new Date).getTime())) {
                        var t = this.Kr;
                        this.resetSessionId(),
                        this.Ur.emit("forcedIdleReset", {
                            idleSessionId: t
                        })
                    } else
                        this.en()
            }
            ), 1.1 * this.sessionTimeoutMs))
        }
    }
    var ba = function(t, i) {
        if (!t)
            return !1;
        var e = t.userAgent;
        if (e && D(e, i))
            return !0;
        try {
            var r = null == t ? void 0 : t.userAgentData;
            if (null != r && r.brands && r.brands.some((t => D(null == t ? void 0 : t.brand, i))))
                return !0
        } catch (t) {}
        return !!t.webdriver
    };
    function wa() {
        return (wa = p((function*() {
            var t = null == e ? void 0 : e.userAgentData;
            if (null != t && t.getHighEntropyValues)
                try {
                    var i = yield t.getHighEntropyValues(["model"])
                      , r = null == i ? void 0 : i.model;
                    return K(r) && r.length > 0 ? r : void 0
                } catch (t) {
                    return void me.info("Unable to resolve $device_model from userAgentData.getHighEntropyValues", t)
                }
        }
        ))).apply(this, arguments)
    }
    var xa = function(t, i) {
        if (!function(t) {
            try {
                new RegExp(t)
            } catch (t) {
                return !1
            }
            return !0
        }(i))
            return !1;
        try {
            return new RegExp(i).test(t)
        } catch (t) {
            return !1
        }
    };
    function Sa(t, i, e) {
        return Tn({
            distinct_id: t,
            userPropertiesToSet: i,
            userPropertiesToSetOnce: e
        })
    }
    var ka = {
        exact: (t, i) => i.some((i => t.some((t => i === t)))),
        is_not: (t, i) => i.every((i => t.every((t => i !== t)))),
        regex: (t, i) => i.some((i => t.some((t => xa(i, t))))),
        not_regex: (t, i) => i.every((i => t.every((t => !xa(i, t))))),
        icontains: (t, i) => i.map(Ea).some((i => t.map(Ea).some((t => i.includes(t))))),
        not_icontains: (t, i) => i.map(Ea).every((i => t.map(Ea).every((t => !i.includes(t))))),
        gt: (t, i) => i.some((i => {
            var e = parseFloat(i);
            return !isNaN(e) && t.some((t => e > parseFloat(t)))
        }
        )),
        lt: (t, i) => i.some((i => {
            var e = parseFloat(i);
            return !isNaN(e) && t.some((t => e < parseFloat(t)))
        }
        ))
    }
      , Ea = t => t.toLowerCase();
    function $a(t, i) {
        return !t || Object.entries(t).every((t => {
            var e = t[1]
              , r = null == i ? void 0 : i[t[0]];
            if (J(r) || Q(r))
                return !1;
            var s = [String(r)]
              , n = ka[e.operator];
            return !!n && n(e.values, s)
        }
        ))
    }
    var Pa = "custom"
      , Ta = "i.posthog.com"
      , Fa = /^\/static\//
      , Ra = ["/s/", "/e/", "/i/"];
    class Ca {
        constructor(t) {
            this.bn = {},
            this.instance = t
        }
        get apiHost() {
            var t = this.instance.config.api_host.trim().replace(/\/$/, "");
            return "https://app.posthog.com" === t ? "https://us.i.posthog.com" : t
        }
        get flagsApiHost() {
            var t = this.instance.config.flags_api_host;
            return t ? t.trim().replace(/\/$/, "") : this.apiHost
        }
        get uiHost() {
            var t, i = null == (t = this.instance.config.ui_host) ? void 0 : t.replace(/\/$/, "");
            return i || (i = this.apiHost.replace("." + Ta, ".posthog.com")),
            "https://app.posthog.com" === i ? "https://us.posthog.com" : i
        }
        get region() {
            return this.bn[this.apiHost] || (this.bn[this.apiHost] = /https:\/\/(app|us|us-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? "us" : /https:\/\/(eu|eu-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? "eu" : Pa),
            this.bn[this.apiHost]
        }
        _n(t) {
            if (Fa.test(t)) {
                var i = this.instance.config.asset_host;
                if ("string" == typeof i)
                    return i.trim().replace(/\/$/, "") || void 0
            }
        }
        wn(t) {
            var i = Fn(t);
            return i ? i.protocol + "//" + i.host + i.pathname : void 0
        }
        kn(t, i, e) {
            if ("ui" === t)
                return e;
            var r = e
              , s = this.instance.config.rewriteRequestPath;
            if (s) {
                var n, o = (null == (n = Fn(e)) ? void 0 : n.href) || e;
                r = s(new URL(o)).toString()
            }
            if (s && "api" === t && Ra.some((t => 0 === i.indexOf(t)))) {
                var a = this.wn(r);
                if (a) {
                    var l, h = this.apiHost, u = this.xn;
                    (null == (l = u) ? void 0 : l.apiHost) === h && u.rewriteRequestPath === s || (u = {
                        apiHost: h,
                        rewriteRequestPath: s,
                        urls: new Set
                    },
                    this.xn = u),
                    u.urls.add(a)
                }
            }
            return r
        }
        isIngestionEndpoint(t) {
            var i = this.xn
              , e = this.wn(t);
            return (null == i ? void 0 : i.apiHost) === this.apiHost && i.rewriteRequestPath === this.instance.config.rewriteRequestPath && !!e && i.urls.has(e)
        }
        endpointFor(t, i) {
            if (void 0 === i && (i = ""),
            i && (i = "/" === i[0] ? i : "/" + i),
            "ui" === t)
                return this.kn(t, i, this.uiHost + i);
            if ("flags" === t)
                return this.kn(t, i, this.flagsApiHost + i);
            if ("assets" === t) {
                var e = this._n(i);
                if (e)
                    return this.kn(t, i, "" + e + i)
            }
            if (this.region === Pa)
                return this.kn(t, i, this.apiHost + i);
            var r = Ta + i;
            switch (t) {
            case "assets":
                return this.kn(t, i, "https://" + this.region + "-assets." + r);
            case "api":
                return this.kn(t, i, "https://" + this.region + "." + r)
            }
        }
    }
    function Ma(t) {
        var i;
        return !(null == (i = t.conditions) || null == (i = i.events) || null == (i = i.values) || !i.length)
    }
    var Ia = ye("[Surveys]")
      , Aa = "seenSurvey_"
      , Oa = t => {
        try {
            var i = (t => ( (t, i) => "" + t + function(t) {
                return t.current_iteration && t.current_iteration > 0 ? t.id + "_" + t.current_iteration : t.id
            }(i))(Aa, t))(t);
            if (localStorage.getItem(i))
                return;
            localStorage.setItem(i, "true")
        } catch (t) {
            Ia.error("Failed to persist survey seen state", t)
        }
    }
      , Da = ["popover", "widget", "api"]
      , ja = {
        ignoreConditions: !1,
        ignoreDelay: !1,
        displayType: uo
    }
      , La = ye("[PostHog ExternalIntegrations]")
      , Na = {
        intercom: "intercom-integration",
        crispChat: "crisp-chat-integration"
    };
    class Ba {
        constructor(t) {
            this._instance = t
        }
        di(t, i) {
            var e;
            null == (e = v.__PosthogExtensions__) || null == e.loadExternalDependency || e.loadExternalDependency(this._instance, t, (t => {
                if (t)
                    return La.error("failed to load script", t);
                i()
            }
            ))
        }
        startIfEnabledOrStop() {
            var t = this
              , i = function() {
                var i, r, s, n = e[0], o = e[1];
                !o || null != (i = v.__PosthogExtensions__) && null != (i = i.integrations) && i[n] || t.di(Na[n], ( () => {
                    var i;
                    null == (i = v.__PosthogExtensions__) || null == (i = i.integrations) || null == (i = i[n]) || i.start(t._instance)
                }
                )),
                !o && null != (r = v.__PosthogExtensions__) && null != (r = r.integrations) && r[n] && (null == (s = v.__PosthogExtensions__) || null == (s = s.integrations) || null == (s = s[n]) || s.stop())
            };
            for (var e of Object.entries(null !== (r = this._instance.config.integrations) && void 0 !== r ? r : {})) {
                var r;
                i()
            }
        }
    }
    class za {
        constructor(t, i) {
            this.st = t,
            this.Sn = i,
            this.Cn = new Map,
            this.Mn = !1
        }
        add(t) {
            var i = this;
            return p((function*() {
                if (i.Mn)
                    throw new Error("Cannot add an extension to a disposed ExtensionRuntime");
                if (i.Cn.has(t.name))
                    throw new Error('Browser extension "' + t.name + '" is already registered');
                i.Cn.set(t.name, t);
                try {
                    var e = t.setup(i.Sn);
                    e && (yield e)
                } catch (e) {
                    var r = i.Cn.get(t.name) === t;
                    r && i.Cn.delete(t.name),
                    i.st.error('Failed to set up browser extension "' + t.name + '"', e),
                    r && i.Tn(t)
                }
            }
            ))()
        }
        dispose() {
            if (!this.Mn) {
                this.Mn = !0;
                var t = Array.from(this.Cn.values()).reverse();
                for (var i of (this.Cn.clear(),
                t))
                    this.Tn(i)
            }
        }
        Tn(t) {
            try {
                var i = null == t.dispose ? void 0 : t.dispose();
                i && V(i.then) && i.then(void 0, (i => {
                    this.st.error('Failed to dispose browser extension "' + t.name + '"', i)
                }
                ))
            } catch (i) {
                this.st.error('Failed to dispose browser extension "' + t.name + '"', i)
            }
        }
    }
    class Ua {
        constructor(t) {
            this._instance = t
        }
        initialize() {}
        get(t) {
            var i = this._instance.persistence;
            if ("string" == typeof t)
                return null == i ? void 0 : i.get_property(t);
            var e = {};
            for (var r of t) {
                var s = null == i ? void 0 : i.get_property(r);
                J(s) || (e[r] = s)
            }
            return e
        }
        set(t, i) {
            var e;
            null == (e = this._instance.persistence) || e.register("string" == typeof t ? {
                [t]: i
            } : t)
        }
        remove(t) {
            var i;
            null == (i = this._instance.persistence) || i.unregister(t)
        }
    }
    var qa = "extensionsRemoteConfig";
    class Ha {
        constructor(t) {
            this.Mn = !1,
            this.instance = t,
            this.st = me,
            this.En = t.In,
            this.kv = new Ua(t),
            this.onEvent = t => eo(this.instance.on("eventCaptured", (i => {
                try {
                    t({
                        event: i.event,
                        properties: i.properties
                    })
                } catch (t) {
                    this.st.error("Browser extension event listener failed", t)
                }
            }
            ))),
            this.onRemoteConfig = t => {
                if (this.Mn)
                    return eo(( () => {}
                    ));
                var i = i => {
                    try {
                        t(i)
                    } catch (t) {
                        this.st.error("Browser extension remote config listener failed", t)
                    }
                }
                  , e = this.instance.Pn.on(qa, i);
                return this.En && i(this.En),
                eo(e)
            }
            ,
            this.Rn = new za(me.createLogger("[BrowserExtensions]"),this)
        }
        get logger() {
            return this.st
        }
        get distinctId() {
            return this.instance.get_distinct_id()
        }
        get anonymousId() {
            var t;
            return null !== (t = this.instance.get_property(Pe)) && void 0 !== t ? t : this.distinctId
        }
        get deviceId() {
            var t = this.instance.get_property(Pe);
            return "string" == typeof t ? t : void 0
        }
        get library() {
            return {
                name: c.LIB_NAME,
                version: c.LIB_VERSION
            }
        }
        get initialPersonProperties() {
            var t, i;
            return null !== (t = null == (i = this.instance.persistence) ? void 0 : i.get_initial_props()) && void 0 !== t ? t : {}
        }
        get groups() {
            return this.instance.getGroups()
        }
        get session() {
            try {
                var t, i, e, r, s = null == (t = this.instance.sessionManager) ? void 0 : t.checkAndGetSessionAndWindowId(!0);
                return {
                    sessionId: null !== (i = null == s ? void 0 : s.sessionId) && void 0 !== i ? i : "",
                    windowId: null !== (e = null == s ? void 0 : s.windowId) && void 0 !== e ? e : "",
                    sessionStartTimestamp: null !== (r = null == s ? void 0 : s.sessionStartTimestamp) && void 0 !== r ? r : 0
                }
            } catch (t) {
                return {
                    sessionId: "",
                    windowId: "",
                    sessionStartTimestamp: 0
                }
            }
        }
        get projectToken() {
            return this.instance.config.token
        }
        add(t) {
            return this.Rn.add(t)
        }
        capture(t, i, e) {
            var r = this;
            return p((function*() {
                e ? r.instance.capture(t, i, {
                    timestamp: e.timestamp,
                    uuid: e.uuid,
                    $set: e.set,
                    $set_once: e.setOnce
                }) : r.instance.capture(t, i)
            }
            ))()
        }
        registerDynamicEventProperties(t) {
            return eo(this.instance.An(t))
        }
        handleRemoteConfig(t) {
            this.Mn || (this.En = t,
            this.instance.Pn.emit(qa, t))
        }
        sendRequest(t, i) {
            var e = this;
            return p((function*() {
                var r;
                void 0 === i && (i = {});
                var s = e.instance.requestRouter.endpointFor(null !== (r = i.target) && void 0 !== r ? r : "api", t)
                  , n = {
                    method: i.method,
                    url: i.query ? Xo(s, i.query) : s,
                    data: i.body,
                    headers: i.headers,
                    timeout: i.timeoutMs,
                    fireCallbackOnDrop: !0,
                    transport: i.transport,
                    compression: i.compression,
                    timestampMode: i.sentAt
                };
                return "sendBeacon" === i.transport ? (e.instance._send_request(n),
                {
                    statusCode: 202
                }) : new Promise((t => {
                    n.callback = t,
                    e.instance._send_request(n)
                }
                ))
            }
            ))()
        }
        dispose() {
            this.Mn || (this.Mn = !0,
            this.Rn.dispose())
        }
    }
    var Va = {}
      , Wa = 0
      , Ga = () => {}
      , Ja = 'Consent opt in/out is not valid with cookieless_mode="always" and will be ignored'
      , Ka = "Surveys module not available"
      , Ya = "sanitize_properties is deprecated. Use before_send instead"
      , Qa = "Invalid value for property_denylist config: "
      , Xa = ["token", "distinct_id", kr]
      , Za = "posthog"
      , tl = !Jo && -1 === (null == h ? void 0 : h.indexOf("MSIE")) && -1 === (null == h ? void 0 : h.indexOf("Mozilla"))
      , il = i => {
        var e;
        return g({
            api_host: "https://us.i.posthog.com",
            flags_api_host: null,
            ui_host: null,
            asset_host: null,
            token: "",
            autocapture: !0,
            cross_subdomain_cookie: Jr(null == r ? void 0 : r.location),
            persistence: "localStorage+cookie",
            persistence_name: "",
            cookie_persisted_properties: [],
            loaded: Ga,
            save_campaign_params: !0,
            custom_campaign_params: [],
            custom_blocked_useragents: [],
            save_referrer: !0,
            capture_pageleave: "if_capture_pageview",
            defaults: null != i ? i : "unset",
            __preview_deferred_init_extensions: !1,
            __preview_external_dependency_versioned_paths: !1,
            __preview_cookie_wins_on_conflict: !1,
            debug: s && K(null == s ? void 0 : s.search) && -1 !== s.search.indexOf("__posthog_debug=true") || !1,
            cookie_expiration: 365,
            upgrade: !1,
            disable_session_recording: !1,
            disable_persistence: !1,
            disable_web_experiments: !0,
            disable_surveys: !1,
            disable_surveys_automatic_display: !1,
            disable_conversations: !1,
            disable_product_tours: !1,
            disableDeviceModel: !1,
            disable_external_dependency_loading: !1,
            strict_script_versioning: "fallback",
            enable_recording_console_log: void 0,
            secure_cookie: "https:" === (null == t || null == (e = t.location) ? void 0 : e.protocol),
            ip: !1,
            opt_out_capturing_by_default: !1,
            opt_out_persistence_by_default: !1,
            opt_out_useragent_filter: !1,
            opt_out_capturing_persistence_type: "localStorage",
            consent_persistence_name: null,
            opt_out_capturing_cookie_prefix: null,
            opt_in_site_apps: !1,
            property_denylist: [],
            respect_dnt: !1,
            sanitize_properties: null,
            request_headers: {},
            request_batching: !0,
            properties_string_max_length: 65535,
            mask_all_element_attributes: !1,
            mask_all_text: !1,
            mask_personal_data_properties: !1,
            custom_personal_data_properties: [],
            advanced_disable_flags: !1,
            advanced_disable_decide: !1,
            advanced_disable_feature_flags: !1,
            advanced_disable_feature_flags_on_first_load: !1,
            advanced_only_evaluate_survey_feature_flags: !1,
            advanced_feature_flags_dedup_per_session: !1,
            advanced_enable_surveys: !1,
            advanced_disable_toolbar_metrics: !1,
            feature_flag_request_timeout_ms: 3e3,
            surveys_request_timeout_ms: 1e4,
            on_request_error(t) {
                me.error("Bad HTTP status: " + t.statusCode + " " + t.text)
            },
            get_device_id: t => t,
            capture_performance: void 0,
            name: "posthog",
            bootstrap: {},
            disable_compression: !1,
            session_idle_timeout_seconds: 1800,
            person_profiles: Ir,
            before_send: void 0,
            get_current_url: void 0,
            request_queue_config: {
                flush_interval_ms: ha
            },
            error_tracking: {},
            _onCapture: Ga
        }, (t => ({
            rageclick: t && t >= "2026-05-30" ? {
                content_ignorelist: Gs,
                ignore_text_selection: !0
            } : !t || "2025-11-30" > t || {
                content_ignorelist: !0
            },
            capture_pageview: !t || "2025-05-24" > t || "history_change",
            session_recording: t && t >= "2026-06-25" ? {
                strictMinimumDuration: !0,
                canvasCapture: {
                    resolutionScale: .6
                },
                streamNetworkBody: !0
            } : t && t >= "2026-05-30" ? {
                strictMinimumDuration: !0,
                canvasCapture: {
                    resolutionScale: .6
                }
            } : t && t >= "2025-11-30" ? {
                strictMinimumDuration: !0
            } : {},
            external_scripts_inject_target: t && t >= "2026-01-30" ? "head" : "body",
            internal_or_test_user_hostname: t && t >= "2026-01-30" ? /^(localhost|127\.0\.0\.1)$/ : void 0,
            persistence_save_debounce_ms: t && t >= "2026-05-30" ? 250 : 0,
            split_storage: !(!t || "2026-05-30" > t),
            detect_google_search_app: !(!t || "2026-05-30" > t),
            disable_capture_url_hashes: !(!t || "2026-06-25" > t),
            cookieWinsOnConflict: !(!t || "unset" === t || "2026-08-29" > t)
        }))(i))
    }
      , el = [["process_person", "person_profiles"], ["xhr_headers", "request_headers"], ["cookie_name", "persistence_name"], ["disable_cookie", "disable_persistence"], ["__preview_disable_beacon", "disable_beacon"], ["store_google", "save_campaign_params"], ["verbose", "debug"], ["__preview_cookie_wins_on_conflict", "cookieWinsOnConflict"]]
      , rl = t => {
        var i = {};
        for (var e of el) {
            var r = e[0]
              , s = e[1];
            J(t[r]) || (i[s] = t[r])
        }
        var n = Ur({}, i, t)
          , o = t.__preview_external_dependency_versioned_paths;
        return J(o) || (J(t.strict_script_versioning) && (n.strict_script_versioning = !!o),
        K(o) && J(t.asset_host) && (n.asset_host = o)),
        H(t.property_blacklist) && (J(t.property_denylist) ? n.property_denylist = t.property_blacklist : H(t.property_denylist) ? n.property_denylist = [...t.property_blacklist, ...t.property_denylist] : me.error(Qa + t.property_denylist)),
        n
    }
    ;
    class sl {
        constructor() {
            this.__forceAllowLocalhost = !1
        }
        get Fn() {
            return this.__forceAllowLocalhost
        }
        set Fn(t) {
            me.error("WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"),
            this.__forceAllowLocalhost = t
        }
    }
    class nl {
        On(t, i) {
            if (t) {
                var e = this.Cn.indexOf(t);
                -1 !== e && this.Cn.splice(e, 1)
            }
            return this.Cn.push(i),
            null == i.initialize || i.initialize(),
            i
        }
        Ln() {
            return this.config.cookieless_mode === Rr || this.config.cookieless_mode === Fr && this.consent.isRejected()
        }
        get decideEndpointWasHit() {
            var t, i;
            return null !== (t = null == (i = this.featureFlags) ? void 0 : i.hasLoadedFlags) && void 0 !== t && t
        }
        get flagsEndpointWasHit() {
            var t, i;
            return null !== (t = null == (i = this.featureFlags) ? void 0 : i.hasLoadedFlags) && void 0 !== t && t
        }
        constructor() {
            var t;
            this.webPerformance = new sl,
            this.Dn = !1,
            this.version = c.LIB_VERSION,
            this.$n = new Set,
            this.Nn = "",
            this.Pn = new ga,
            this.Cn = [],
            this.qn = [],
            this._calculate_event_properties = this.calculateEventProperties.bind(this),
            this.config = il(),
            this.SentryIntegration = xn,
            this.sentryIntegration = t => function(t, i) {
                var e = wn(t, i);
                return {
                    name: bn,
                    processEvent: t => e(t)
                }
            }(this, t),
            this.__request_queue = [],
            this.__loaded = !1,
            this.analyticsDefaultEndpoint = "/e/",
            this.jn = !1,
            this.Bn = null,
            this.Hn = null,
            this.Un = null,
            this.scrollManager = new ca(this),
            this.pageViewManager = new Sn(this),
            this.rateLimiter = new co(this),
            this.requestRouter = new Ca(this),
            this.consent = new ks(this),
            this.externalIntegrations = new Ba(this);
            var i = null !== (t = nl.__defaultExtensionClasses) && void 0 !== t ? t : {};
            this.featureFlags = i.featureFlags && new i.featureFlags(this),
            this.toolbar = i.toolbar && new i.toolbar(this),
            this.surveys = i.surveys && new i.surveys(this),
            this.conversations = i.conversations && new i.conversations(this),
            this.logs = i.logs && new i.logs(this),
            this.metrics = i.metrics && new i.metrics(this),
            this.experiments = i.experiments && new i.experiments(this),
            this.exceptions = i.exceptions && new i.exceptions(this),
            this.people = {
                set: (t, i, e) => {
                    var r = K(t) ? {
                        [t]: i
                    } : t;
                    this.setPersonProperties(r),
                    null == e || e({})
                }
                ,
                set_once: (t, i, e) => {
                    var r = K(t) ? {
                        [t]: i
                    } : t;
                    this.setPersonProperties(void 0, r),
                    null == e || e({})
                }
            },
            this.on("eventCaptured", (t => me.info('send "' + (null == t ? void 0 : t.event) + '"', t)))
        }
        init(t, i, e) {
            if (e && e !== Za) {
                var r, s = null !== (r = Va[e]) && void 0 !== r ? r : new nl;
                return s._init(t, i, e),
                Va[e] = s,
                Va[Za][e] = s,
                s
            }
            return this._init(t, i, e)
        }
        _init(i, e, r) {
            var s, n;
            void 0 === e && (e = {});
            var o, a = K(i) ? i.trim() : "";
            if (!a)
                return me.critical("PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()"),
                this;
            if (this.__loaded)
                return a !== (null == (o = this.config) ? void 0 : o.token) ? console.warn("[PostHog.js]", "You have already initialized PostHog with a different project token! Re-initializing is a no-op, so events will keep going to the project this instance was initialized with. To capture into a second project, load PostHog once, then initialize a named instance after the SDK has loaded, e.g. posthog.init('" + a + "', { ... }, 'project2')") : console.warn("[PostHog.js]", "You have already initialized PostHog! Re-initializing is a no-op"),
                this;
            this.__loaded = !0,
            this.config = il(e.defaults),
            e.debug = this.zn(e.debug),
            this.Wn = e,
            this.Vn = [],
            e.person_profiles ? this.Hn = e.person_profiles : e.process_person && (this.Hn = e.process_person);
            var l = il(e.defaults)
              , h = rl(e)
              , u = Ur({}, l, h, {
                name: r,
                token: a
            });
            W(l.rageclick) && W(h.rageclick) && (u.rageclick = Ur({}, l.rageclick, h.rageclick)),
            W(l.session_recording) && W(h.session_recording) && (u.session_recording = Ur({}, l.session_recording, h.session_recording)),
            this.set_config(u),
            this.config.on_xhr_error && me.error("on_xhr_error is deprecated. Use on_request_error instead"),
            this.compression = e.disable_compression ? void 0 : ro;
            var d = this.Zn();
            if (this.persistence = new io(this.config,d),
            this.sessionPersistence = "sessionStorage" === this.config.persistence || "memory" === this.config.persistence ? this.persistence : new io(g({}, this.config, {
                persistence: "sessionStorage"
            }),d,!1),
            this.Nn = "ph_" + (this.config.persistence_name || this.config.token) + "_session_registered_properties",
            "memory" !== this.config.persistence && !d && Ss.N()) {
                var v = Ss.H(this.Nn);
                H(v) && v.forEach((t => {
                    K(t) && this.$n.add(t)
                }
                ))
            } else
                Ss.q(this.Nn);
            var f = g({}, this.persistence.props)
              , p = g({}, this.sessionPersistence.props);
            this.register({
                $initialization_time: (new Date).toISOString()
            }),
            this.Gn = new ua((t => this.Qn(t)),this.config.request_queue_config),
            this.Jn = new va(this),
            this.__request_queue = [];
            var _ = this.Ln();
            if (_ || (this.sessionManager = new ya(this),
            this.sessionPropsManager = new pa(this,this.sessionManager,this.persistence),
            this.sessionManager.onSessionId(( (t, i, e) => {
                (null != e && e.activityTimeout || null != e && e.sessionPastMaximumLength || null != e && e.crossTabAdoption) && this.Kn()
            }
            ))),
            this.Yn(),
            this.config.__preview_deferred_init_extensions ? (me.info("Deferring extension initialization to improve startup performance"),
            setTimeout(( () => {
                this.Xn(_)
            }
            ), 0)) : (me.info("Initializing extensions synchronously"),
            this.Xn(_)),
            c.DEBUG = c.DEBUG || this.config.debug,
            c.DEBUG && me.info("Starting in debug mode", {
                this: this,
                config: e,
                thisC: g({}, this.config),
                p: f,
                s: p
            }),
            !this.config.identity_distinct_id || null != (s = e.bootstrap) && s.distinctID || (e.bootstrap = g({}, e.bootstrap, {
                distinctID: this.config.identity_distinct_id,
                isIdentifiedID: !0
            })),
            void 0 !== (null == (n = e.bootstrap) ? void 0 : n.distinctID)) {
                var m = e.bootstrap.distinctID
                  , y = this.get_distinct_id()
                  , b = this.persistence.get_property(gr);
                if (e.bootstrap.isIdentifiedID && null != y && y !== m && b === Cr)
                    this.identify(m);
                else if (e.bootstrap.isIdentifiedID && null != y && y !== m && b === Mr)
                    me.warn("Bootstrap distinctID differs from an already-identified user. The existing identity is preserved. Call reset() before reinitializing if you intend to switch users.");
                else {
                    var w = this.config.get_device_id(rs())
                      , x = e.bootstrap.isIdentifiedID ? w : m;
                    this.persistence.set_property(gr, e.bootstrap.isIdentifiedID ? Mr : Cr),
                    this.register({
                        distinct_id: m,
                        $device_id: x
                    })
                }
            }
            if (_)
                this.register_once({
                    distinct_id: Sr,
                    $device_id: null
                }, "");
            else if (!this.get_distinct_id()) {
                var S = this.config.get_device_id(rs());
                this.register_once({
                    distinct_id: S,
                    $device_id: S
                }, ""),
                this.persistence.set_property(gr, Cr)
            }
            return Kr(t, "onpagehide"in self ? "pagehide" : "unload", this._handle_unload.bind(this), {
                passive: !1
            }),
            e.segment ? function(t, i) {
                var e = t.config.segment;
                if (!e)
                    return i();
                !function(t, i) {
                    var e = t.config.segment;
                    if (!e)
                        return i();
                    var r = e => {
                        var r = () => e.anonymousId() || rs();
                        t.config.get_device_id = r,
                        e.id() && (t.register({
                            distinct_id: e.id(),
                            $device_id: r()
                        }),
                        t.persistence.set_property(gr, Mr)),
                        i()
                    }
                      , s = e.user();
                    "then"in s && V(s.then) ? s.then(r) : r(s)
                }(t, ( () => {
                    e.register((t => {
                        "undefined" != typeof Promise && Promise.resolve || yn.warn("This browser does not have Promise support, and can not use the segment integration");
                        var i = (i, e) => {
                            if (!e)
                                return i;
                            i.event.userId || i.event.anonymousId === t.get_distinct_id() || (yn.info("No userId set, resetting PostHog"),
                            t.reset()),
                            i.event.userId && i.event.userId !== t.get_distinct_id() && (yn.info("UserId set, identifying with PostHog"),
                            t.identify(i.event.userId));
                            var r = t.calculateEventProperties(e, i.event.properties);
                            return i.event.properties = Object.assign({}, r, i.event.properties),
                            i
                        }
                        ;
                        return {
                            name: "PostHog JS",
                            type: "enrichment",
                            version: "1.0.0",
                            isLoaded: () => !0,
                            load: () => Promise.resolve(),
                            track: t => i(t, t.event.event),
                            page: t => i(t, Dr),
                            identify: t => i(t, Lr),
                            screen: t => i(t, "$screen")
                        }
                    }
                    )(t)).then(( () => {
                        i()
                    }
                    ))
                }
                ))
            }(this, ( () => this.ts())) : this.ts(),
            V(this.config._onCapture) && this.config._onCapture !== Ga && (me.warn("onCapture is deprecated. Please use `before_send` instead"),
            this.on("eventCaptured", (t => this.config._onCapture(t.event, t)))),
            this.config.ip && me.warn('The `ip` config option has NO EFFECT AT ALL and has been deprecated. Use a custom transformation or "Discard IP data" project setting instead. See https://posthog.com/tutorials/web-redact-properties#hiding-customer-ip-address for more information.'),
            this.config.disableDeviceModel || function() {
                return wa.apply(this, arguments)
            }().then((t => {
                t && this.register({
                    [Te]: t
                })
            }
            )).catch(Ga),
            this
        }
        Yn() {
            var t, i, e, r, s, n, o = null !== (t = null == (i = this.config.__extensionClasses) ? void 0 : i.featureFlags) && void 0 !== t ? t : null == (e = nl.__defaultExtensionClasses) ? void 0 : e.featureFlags;
            o && (this.featureFlags && this.featureFlags instanceof o || (null == (r = this.es) || r.call(this),
            this.es = void 0,
            this.featureFlags = new o(this)),
            V(this.featureFlags.onReloading) && V(this.featureFlags.setup) ? this.es || (this.es = this.featureFlags.onReloading(( () => {
                this.Pn.emit("featureFlagsReloading", !0)
            }
            )),
            this.rs().add(this.featureFlags)) : null == (s = (n = this.featureFlags).initialize) || s.call(n))
        }
        Xn(t) {
            var i, e, r, s, n, o, a, l = performance.now(), h = g({}, nl.__defaultExtensionClasses, this.config.__extensionClasses), u = [];
            h.exceptions && this.Cn.push(this.exceptions = null !== (i = this.exceptions) && void 0 !== i ? i : new h.exceptions(this)),
            h.historyAutocapture && this.Cn.push(this.historyAutocapture = new h.historyAutocapture(this)),
            h.tracingHeaders && this.Cn.push(this.tracingHeaders = new h.tracingHeaders(this)),
            h.siteApps && this.Cn.push(this.siteApps = new h.siteApps(this)),
            h.sessionRecording && !t && this.Cn.push(this.sessionRecording = new h.sessionRecording(this)),
            this.config.disable_scroll_properties || u.push(( () => {
                this.scrollManager.startMeasuringScrollPosition()
            }
            )),
            h.autocapture && this.Cn.push(this.autocapture = new h.autocapture(this)),
            h.surveys && this.Cn.push(this.surveys = null !== (e = this.surveys) && void 0 !== e ? e : new h.surveys(this)),
            h.logs && this.Cn.push(this.logs = null !== (r = this.logs) && void 0 !== r ? r : new h.logs(this)),
            h.metrics && this.Cn.push(this.metrics = null !== (s = this.metrics) && void 0 !== s ? s : new h.metrics(this)),
            h.conversations && this.Cn.push(this.conversations = null !== (n = this.conversations) && void 0 !== n ? n : new h.conversations(this)),
            h.productTours && this.Cn.push(this.productTours = new h.productTours(this)),
            h.heatmaps && this.Cn.push(this.heatmaps = new h.heatmaps(this)),
            h.webVitalsAutocapture && this.Cn.push(this.webVitalsAutocapture = new h.webVitalsAutocapture(this)),
            h.exceptionObserver && this.Cn.push(this.exceptionObserver = new h.exceptionObserver(this)),
            h.deadClicksAutocapture && this.Cn.push(this.deadClicksAutocapture = new h.deadClicksAutocapture(this,_n)),
            h.toolbar && this.Cn.push(this.toolbar = null !== (o = this.toolbar) && void 0 !== o ? o : new h.toolbar(this)),
            h.experiments && this.Cn.push(this.experiments = null !== (a = this.experiments) && void 0 !== a ? a : new h.experiments(this)),
            this.Cn.forEach((t => {
                t.initialize && u.push(( () => {
                    null == t.initialize || t.initialize()
                }
                ))
            }
            )),
            u.push(( () => {
                if (this.ns) {
                    var t = this.ns;
                    this.ns = void 0,
                    this.Cn.forEach((i => null == i.onRemoteConfig ? void 0 : i.onRemoteConfig(t)))
                }
            }
            )),
            this.ss(u, l)
        }
        ss(t, i) {
            for (; t.length > 0; ) {
                if (this.config.__preview_deferred_init_extensions && performance.now() - i >= 30 && t.length > 0)
                    return void setTimeout(( () => {
                        this.ss(t, i)
                    }
                    ), 0);
                var e = t.shift();
                if (e)
                    try {
                        e()
                    } catch (t) {
                        me.error("Error initializing extension:", t)
                    }
            }
            var r = Math.round(performance.now() - i);
            this.register_for_session({
                [Er]: this.config.__preview_deferred_init_extensions ? "deferred" : "synchronous",
                [$r]: r
            }),
            this.config.__preview_deferred_init_extensions && me.info("PostHog extensions initialized (" + r + "ms)")
        }
        lr(t) {
            var i;
            if (!r || !r.body)
                return me.info("document not ready yet, trying again in 500 milliseconds..."),
                void setTimeout(( () => {
                    this.lr(t)
                }
                ), 500);
            if (this.config.__preview_deferred_init_extensions && (this.ns = t),
            this.In = t,
            this.compression = void 0,
            t.ok) {
                var e, s = t.config;
                s.supportedCompression && !this.config.disable_compression && (this.compression = j(s.supportedCompression, ro) ? ro : j(s.supportedCompression, so) ? so : void 0),
                null != (e = s.analytics) && e.endpoint && (this.analyticsDefaultEndpoint = s.analytics.endpoint)
            }
            this.set_config({
                person_profiles: this.Hn ? this.Hn : Ir
            }),
            null == (i = this.os) || i.handleRemoteConfig(t),
            this.Cn.forEach((i => null == i.onRemoteConfig ? void 0 : i.onRemoteConfig(t)))
        }
        ts() {
            try {
                this.config.loaded(this)
            } catch (t) {
                me.critical("`loaded` function failed", t)
            }
            if (this.ls(),
            this.config.internal_or_test_user_hostname && null != s && s.hostname) {
                var t = s.hostname
                  , i = this.config.internal_or_test_user_hostname;
                ("string" == typeof i ? t === i : i.test(t)) && this.setInternalOrTestUser()
            }
            this.config.capture_pageview && setTimeout(( () => {
                (this.consent.isOptedIn() || this.Ln()) && this.us()
            }
            ), 1),
            this.hs = new po(this),
            this.hs.load()
        }
        ls() {
            var t;
            this.is_capturing() && this.config.request_batching && (null == (t = this.Gn) || t.enable())
        }
        _dom_loaded() {
            this.is_capturing() && Br(this.__request_queue, (t => this.Qn(t))),
            this.__request_queue = [],
            this.ls()
        }
        _handle_unload() {
            var t, i, e, r, s;
            null == (t = this.surveys) || null == t.handlePageUnload || t.handlePageUnload(),
            null == (i = this.metrics) || i.flush("sendBeacon"),
            this.config.request_batching ? (this.ds() && this.capture(jr),
            null == (e = this.logs) || e.flushLogs("sendBeacon"),
            null == (r = this.Gn) || r.unload(),
            null == (s = this.Jn) || s.unload()) : this.ds() && this.capture(jr, null, {
                transport: "sendBeacon"
            })
        }
        _send_request(t) {
            this.__loaded ? tl ? this.__request_queue.push(t) : this.rateLimiter.isServerRateLimited(t.batchKey) ? t.fireCallbackOnDrop && (null == t.callback || t.callback({
                statusCode: 429
            })) : (t.transport = t.transport || this.config.api_transport,
            t.headers = g({}, this.config.request_headers, t.headers),
            t.compression = "best-available" === t.compression ? this.compression : t.compression,
            (J(this.config.disable_beacon) ? this.config.__preview_disable_beacon : this.config.disable_beacon) && (t.disableTransport = ["sendBeacon"]),
            t.fetchOptions = t.fetchOptions || this.config.fetch_options,
            (t => {
                var i, e, r, s = g({}, t);
                s.timeout = s.timeout || 6e4;
                var n, o, a, h, u, d = null !== (i = s.transport) && void 0 !== i ? i : "fetch";
                "sendBeacon" === d && J(s.compression) && s.data && (s.compression = so),
                "POST" === s.method && s.data && ("capture-body" === s.timestampMode ? s.data = {
                    api_key: null !== (o = null == (u = (h = (H(n = s.data) ? n : [n]).map((t => g({}, t, t.timestamp instanceof Date && !isNaN(t.timestamp.getTime()) ? {
                        timestamp: t.timestamp.toISOString()
                    } : {}))))[0]) || null == (a = u.properties) ? void 0 : a.token) && void 0 !== o ? o : null == u ? void 0 : u.token,
                    batch: h,
                    sent_at: (new Date).toISOString()
                } : "body" === s.timestampMode && (s.data = function(t, i) {
                    return void 0 === i && (i = (new Date).toISOString()),
                    H(t) ? t.map((t => g({}, t, {
                        sent_at: i
                    }))) : g({}, t, {
                        sent_at: i
                    })
                }(s.data))),
                s.url = aa(s.url, s.method, s.compression, s.timestampMode);
                var v = la.filter((t => !s.disableTransport || !t.transport || !s.disableTransport.includes(t.transport)))
                  , c = null !== (e = null == (r = function(t, i) {
                    for (var e = 0; t.length > e; e++)
                        if (t[e].transport === d)
                            return t[e]
                }(v)) ? void 0 : r.method) && void 0 !== e ? e : v[0].method;
                if (!c)
                    throw new Error("No available transport method");
                var f = t => {
                    try {
                        c(t)
                    } catch (t) {
                        sa(t) ? me.warn(t) : me.error(t),
                        null == s.callback || s.callback({
                            statusCode: 0,
                            error: t
                        })
                    }
                }
                ;
                "sendBeacon" !== d && s.data && s.compression === ro && l && "undefined" != typeof Promise && !Yo ? ea(s).then((t => {
                    f(t)
                }
                )).catch((i => {
                    if (C(i))
                        return Yo = !0,
                        void f(g({}, s, {
                            compression: void 0,
                            url: aa(t.url, t.method, void 0, t.timestampMode)
                        }));
                    (t => {
                        if (!t || "object" != typeof t)
                            return !1;
                        var i = "name"in t ? String(t.name) : "";
                        return C(t) || i === T
                    }
                    )(i) && (Yo = !0),
                    f(s)
                }
                )) : c(s)
            }
            )(g({}, t, {
                callback: i => {
                    var e, r;
                    this.rateLimiter.checkForLimiting(i),
                    400 > i.statusCode || null == (e = (r = this.config).on_request_error) || e.call(r, i),
                    null == t.callback || t.callback(i)
                }
            }))) : t.fireCallbackOnDrop && (null == t.callback || t.callback({
                statusCode: 0
            }))
        }
        Qn(t) {
            this.Jn ? this.Jn.retriableRequest(t) : this._send_request(t)
        }
        _execute_array(t) {
            Wa++;
            try {
                var i, e = [], r = [], s = [];
                Br(t, (t => {
                    if (t)
                        if (H(i = t[0]))
                            s.push(t);
                        else if (V(t))
                            try {
                                t.call(this)
                            } catch (i) {
                                me.error("Error executing queued PostHog call", t, i)
                            }
                        else
                            H(t) && "alias" === i ? e.push(t) : H(t) && -1 !== i.indexOf("capture") && V(this[i]) ? s.push(t) : r.push(t)
                }
                ));
                var n = function(t, i) {
                    Br(t, (function(t) {
                        try {
                            if (H(t[0])) {
                                var e = i;
                                zr(t, (function(t) {
                                    e = e[t[0]].apply(e, t.slice(1))
                                }
                                ))
                            } else
                                i[t[0]].apply(i, t.slice(1))
                        } catch (i) {
                            me.error("Error executing queued PostHog call", t, i)
                        }
                    }
                    ))
                };
                n(e, this),
                n(r, this),
                n(s, this)
            } finally {
                Wa--
            }
        }
        push(t) {
            if (Wa > 0 && H(t) && K(t[0])) {
                var i = nl.prototype[t[0]];
                V(i) && i.apply(this, t.slice(1))
            } else
                this._execute_array([t])
        }
        capture(t, i, e) {
            var r, s, n, o, a;
            if (this.__loaded && this.persistence && this.sessionPersistence && this.Gn) {
                if (this.is_capturing())
                    if (!J(t) && K(t)) {
                        var l = !this.config.opt_out_useragent_filter && this._is_bot();
                        if (!l || this.config.__preview_capture_bot_pageviews) {
                            var h = null != e && e.skip_client_rate_limiting ? void 0 : this.rateLimiter.clientRateLimitContext();
                            if (null == h || !h.isRateLimited) {
                                null != i && i.$current_url && !K(null == i ? void 0 : i.$current_url) && (me.error("Invalid `$current_url` property provided to `posthog.capture`. Input must be a string. Ignoring provided value."),
                                null == i || delete i.$current_url),
                                "$exception" !== t || null != e && e.vs || me.warn("Using `posthog.capture('$exception')` is unreliable because it does not attach required metadata. Use `posthog.captureException(error)` instead, which attaches required metadata automatically."),
                                this.sessionPersistence.update_search_keyword(),
                                this.config.save_campaign_params && this.sessionPersistence.update_campaign_params(),
                                this.config.save_referrer && this.sessionPersistence.update_referrer_info(),
                                (this.config.save_campaign_params || this.config.save_referrer) && this.persistence.set_initial_person_info();
                                var u = new Date
                                  , d = (null == e ? void 0 : e.timestamp) || u
                                  , v = bi(null == e ? void 0 : e.uuid, rs)
                                  , c = {
                                    uuid: v,
                                    event: t,
                                    properties: this.calculateEventProperties(t, i || {}, d, v)
                                };
                                t === Dr && this.config.__preview_capture_bot_pageviews && l && (c.event = "$bot_pageview",
                                c.properties.$browser_type = "bot"),
                                h && (c.properties.$lib_rate_limit_remaining_tokens = h.remainingTokens);
                                var f = "$feature_flag_called" === t && !1 === c.properties.$feature_flag_has_experiment && !0 === this.get_property(tr);
                                (null == e ? void 0 : e.$set) && !f && (c.$set = null == e ? void 0 : e.$set);
                                var p = null == e ? void 0 : e.$unset;
                                p && (c.$unset = p);
                                var _, m, y, b = f ? void 0 : this.cs(null == e ? void 0 : e.$set_once, t !== Nr, t === Lr);
                                if (b && (c.$set_once = b),
                                null != e && e._noTruncate || (s = this.config.properties_string_max_length,
                                n = c,
                                o = t => K(t) ? t.slice(0, s) : t,
                                a = new Set,
                                c = function t(i, e) {
                                    if (i !== Object(i))
                                        return o ? o(i) : i;
                                    if (!a.has(i)) {
                                        var r;
                                        if (a.add(i),
                                        H(i))
                                            r = [],
                                            Br(i, (i => {
                                                r.push(t(i))
                                            }
                                            ));
                                        else {
                                            var s = {};
                                            zr(i, ( (i, e) => {
                                                a.has(i) || (s[e] = t(i, e))
                                            }
                                            )),
                                            r = s
                                        }
                                        return r
                                    }
                                }(n)),
                                c.timestamp = d,
                                J(null == e ? void 0 : e.timestamp) || (c.properties.$event_time_override_provided = !0,
                                c.properties.$event_time_override_system_time = u),
                                f && (c.properties = function(t, i) {
                                    void 0 === i && (i = []);
                                    var e = {}
                                      , r = i => {
                                        void 0 !== t[i] && (e[i] = t[i])
                                    }
                                    ;
                                    return x.forEach(r),
                                    i.forEach(r),
                                    e
                                }(c.properties, Xa)),
                                t === lo || t === ho) {
                                    var w = null == i ? void 0 : i.$survey_id
                                      , S = null == i ? void 0 : i.$survey_iteration;
                                    Oa({
                                        id: w,
                                        current_iteration: S
                                    }),
                                    c.$set = g({}, c.$set, {
                                        [(_ = {
                                            id: w,
                                            current_iteration: S
                                        },
                                        m = t === ho ? "responded" : "dismissed",
                                        y = "$survey_" + m + "/" + _.id,
                                        _.current_iteration && _.current_iteration > 0 && (y = "$survey_" + m + "/" + _.id + "/" + _.current_iteration),
                                        y)]: !0
                                    })
                                } else
                                    t === ao && (c.$set = g({}, c.$set, {
                                        $survey_last_seen_date: (new Date).toISOString()
                                    }));
                                if ("product tour shown" === t) {
                                    var k = null == i ? void 0 : i.$product_tour_type;
                                    k && (c.$set = g({}, c.$set, {
                                        ["$product_tour_last_seen_date/" + k]: (new Date).toISOString()
                                    }))
                                }
                                var E = g({}, c.properties.$set, c.$set);
                                if (G(E) || this.setPersonPropertiesForFlags(E),
                                !X(this.config.before_send)) {
                                    var P = this.At(c);
                                    if (!P)
                                        return;
                                    (c = P).uuid = bi(c.uuid, rs)
                                }
                                this.Pn.emit("eventCaptured", c);
                                var T = null !== (r = null == e ? void 0 : e._url) && void 0 !== r ? r : this.requestRouter.endpointFor("api", this.analyticsDefaultEndpoint)
                                  , F = {
                                    method: "POST",
                                    url: T,
                                    data: c,
                                    compression: "best-available",
                                    timestampMode: "recordings" === (null == e ? void 0 : e._batchKey) || /\/s\/(?:\?|$)/.test(T) ? "body" : "capture-body",
                                    batchKey: null == e ? void 0 : e._batchKey,
                                    transport: null == e ? void 0 : e.transport
                                };
                                return !this.config.request_batching || e && (null == e || !e._batchKey) || null != e && e.send_instantly ? this.Qn(F) : this.Gn.enqueue(F),
                                c
                            }
                            me.critical("This capture call is ignored due to client rate limiting.")
                        }
                    } else
                        me.error("No event name provided to posthog.capture")
            } else
                me.uninitializedWarning("posthog.capture")
        }
        _addCaptureHook(t) {
            return this.on("eventCaptured", (i => t(i.event, i)))
        }
        rs() {
            var t;
            return null !== (t = this.os) && void 0 !== t ? t : this.os = new Ha(this)
        }
        An(t) {
            this.qn.push(t);
            var i = !0;
            return () => {
                if (i) {
                    i = !1;
                    var e = this.qn.indexOf(t);
                    -1 !== e && this.qn.splice(e, 1)
                }
            }
        }
        fs(t) {
            var i, e, r;
            return void 0 === t && (t = !0),
            !(null == (i = this.persistence) || !i.consumeCookieIdentityChange()) && (this.Un = null,
            this.persistence.get_property(gr) === Cr && (null == (r = this.sessionPersistence) || r.clear(),
            this.$n.clear(),
            this.ps()),
            null == (e = this.featureFlags) || e.reset(),
            t && this.reloadFeatureFlags(),
            !0)
        }
        calculateEventProperties(i, e, n, o, a) {
            if (n = n || new Date,
            !this.persistence || !this.sessionPersistence)
                return e;
            this.persistence.syncCookieProperties(),
            this.fs();
            var l = a ? void 0 : this.persistence.remove_event_timer(i)
              , u = g({}, e);
            if (u.token = this.config.token,
            u.$config_defaults = this.config.defaults,
            this.Ln() && (u[kr] = !0),
            "$snapshot" === i) {
                var d = g({}, this.persistence.properties(), this.sessionPersistence.properties());
                return u.distinct_id = d.distinct_id,
                (!K(u.distinct_id) && !Z(u.distinct_id) || Y(u.distinct_id)) && me.error("Invalid distinct_id for replay event. This indicates a bug in your implementation"),
                u
            }
            var v, f = function(i, e, r, n) {
                var o, a, l, u;
                if (void 0 === n && (n = !1),
                !h)
                    return {};
                var d, v = i ? [...Dn, ...e || []] : [], f = function(t) {
                    for (var i = 0; _i.length > i; i++) {
                        var e = _i[i]
                          , r = e[1]
                          , s = e[0].exec(t)
                          , n = s && (V(r) ? r(s, t) : r);
                        if (n)
                            return n
                    }
                    return ["", ""]
                }(h), p = f[0], g = f[1], _ = null != (d = "undefined" != typeof navigator ? navigator : void 0) && d.brave ? {
                    brave: !0
                } : {}, m = {};
                J(r) || (m.detectGoogleSearchApp = r);
                var y = {}
                  , b = null == (o = navigator) || null == (o = o.userAgentData) ? void 0 : o.platform
                  , w = null == (a = navigator) ? void 0 : a.maxTouchPoints
                  , x = null == t || null == (l = t.screen) ? void 0 : l.width
                  , S = null == t || null == (u = t.screen) ? void 0 : u.height
                  , k = null == t ? void 0 : t.devicePixelRatio;
                J(b) || (y.userAgentDataPlatform = b),
                J(w) || (y.maxTouchPoints = w),
                J(x) || (y.screenWidth = x),
                J(S) || (y.screenHeight = S),
                J(k) || (y.devicePixelRatio = k);
                var E, P, T, F, R, C, M, I, A = Ur(Wr({
                    $os: p,
                    $os_version: g,
                    $browser: fi(h, navigator.vendor, _, m),
                    $device: mi(h),
                    $device_type: (P = h,
                    T = y,
                    I = mi(P),
                    I === bt || I === yt || "Kobo" === I || "Kindle Fire" === I || I === Yt ? mt : I === Nt || I === zt || I === Bt || I === Gt ? "Console" : I === xt ? "Wearable" : I ? pt : "Android" === (null == T ? void 0 : T.userAgentDataPlatform) && (null !== (F = null == T ? void 0 : T.maxTouchPoints) && void 0 !== F ? F : 0) > 0 ? 600 > Math.min(null !== (R = null == T ? void 0 : T.screenWidth) && void 0 !== R ? R : 0, null !== (C = null == T ? void 0 : T.screenHeight) && void 0 !== C ? C : 0) / (null !== (M = null == T ? void 0 : T.devicePixelRatio) && void 0 !== M ? M : 1) ? pt : mt : "Desktop"),
                    $timezone: Jn(),
                    $timezone_offset: Kn()
                }), {
                    $current_url: Cn(n ? wi(null == s ? void 0 : s.href) : null == s ? void 0 : s.href, v, Ln),
                    $host: null == s ? void 0 : s.host,
                    $pathname: null == s ? void 0 : s.pathname,
                    $raw_user_agent: h.length > 1e3 ? h.substring(0, 997) + "..." : h,
                    $browser_version: gi(h, navigator.vendor, _, m),
                    $browser_language: qn(),
                    $browser_language_prefix: (E = qn(),
                    "string" == typeof E ? E.split("-")[0] : void 0),
                    $screen_height: null == t ? void 0 : t.screen.height,
                    $screen_width: null == t ? void 0 : t.screen.width,
                    $viewport_height: null == t ? void 0 : t.innerHeight,
                    $viewport_width: null == t ? void 0 : t.innerWidth,
                    $lib: c.LIB_NAME,
                    $lib_version: c.LIB_VERSION,
                    $insert_id: Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10),
                    $time: Date.now() / 1e3
                });
                return c.SDK_DIST_CHANNEL && (A.$sdk_dist_channel = c.SDK_DIST_CHANNEL),
                A
            }(this.config.mask_personal_data_properties, this.config.custom_personal_data_properties, this.config.detect_google_search_app, this.config.disable_capture_url_hashes);
            if (this.sessionManager) {
                var p = this.sessionManager.checkAndGetSessionAndWindowId(a, n.getTime(), !0)
                  , _ = p.windowId;
                u.$session_id = p.sessionId,
                u.$window_id = _
            }
            this.sessionPropsManager && Ur(u, this.sessionPropsManager.getSessionProps());
            try {
                var m;
                this.sessionRecording && Ur(u, this.sessionRecording.sdkDebugProperties),
                u.$sdk_debug_retry_queue_size = null == (m = this.Jn) ? void 0 : m.length
            } catch (t) {
                u.$sdk_debug_error_capturing_properties = String(t)
            }
            if (this.requestRouter.region === Pa && (u.$lib_custom_api_host = this.config.api_host),
            v = i !== Dr || a ? i !== jr || a ? this.pageViewManager.doEvent() : this.pageViewManager.doPageLeave(n) : this.pageViewManager.doPageView(n, o),
            u = Ur(u, v),
            i === Dr && r && (u.title = r.title),
            !J(l)) {
                var y = n.getTime() - l;
                u.$duration = parseFloat((y / 1e3).toFixed(3))
            }
            h && this.config.opt_out_useragent_filter && (u.$browser_type = this._is_bot() ? "bot" : "browser");
            var b = this.persistence.properties()
              , w = this.sessionPersistence.properties();
            zr(["$referrer", "$referring_domain"], (t => {
                t in b && delete w[t]
            }
            ));
            var x = {};
            if (this.qn.length > 0)
                for (var S of this.qn.slice())
                    try {
                        Ur(x, S())
                    } catch (t) {
                        me.error("Failed to produce browser extension event properties", t)
                    }
            (u = Ur({}, f, b, w, g({}, x, u))).$is_identified = this._isIdentified(),
            H(this.config.property_denylist) ? zr(this.config.property_denylist, (function(t) {
                delete u[t]
            }
            )) : me.error(Qa + this.config.property_denylist + " or property_blacklist config: " + this.config.property_blacklist);
            var k = this.config.sanitize_properties;
            k && (me.error(Ya),
            u = k(u, i));
            var E = this.gs();
            return u.$process_person_profile = E,
            E && !a && this.ys("_calculate_event_properties"),
            u
        }
        cs(t, i, e) {
            var r;
            if (void 0 === i && (i = !0),
            void 0 === e && (e = !1),
            !this.persistence || !this.gs())
                return t;
            if (this.Dn && !e)
                return t;
            var s = this.persistence.get_initial_props()
              , n = null == (r = this.sessionPropsManager) ? void 0 : r.getSetOnceProps()
              , o = Ur({}, s, n || {}, t || {})
              , a = this.config.sanitize_properties;
            return a && (me.error(Ya),
            o = a(o, "$set_once")),
            i && (this.Dn = !0),
            G(o) ? void 0 : o
        }
        register(t, i) {
            var e;
            null == (e = this.persistence) || e.register(t, i)
        }
        register_once(t, i, e) {
            var r;
            null == (r = this.persistence) || r.register_once(t, i, e)
        }
        register_for_session(t) {
            var i, e;
            null == (i = this.persistence) || i.syncCookieProperties(),
            this.fs(),
            null == (e = this.sessionPersistence) || e.register(t),
            Object.keys(t).forEach((t => this.$n.add(t))),
            this.ps()
        }
        unregister(t) {
            var i;
            null == (i = this.persistence) || i.unregister(t)
        }
        unregister_for_session(t) {
            var i;
            null == (i = this.sessionPersistence) || i.unregister(t),
            this.$n.delete(t),
            this.ps()
        }
        bs(t, i) {
            this.register({
                [t]: i
            })
        }
        Kn() {
            this.$n.forEach((t => {
                var i;
                null == (i = this.sessionPersistence) || i.unregister(t)
            }
            )),
            this.$n.clear(),
            this.ps()
        }
        ps() {
            var t;
            if (this.Nn)
                if ("memory" === this.config.persistence || null != (t = this.sessionPersistence) && t.Oi || !Ss.N())
                    Ss.q(this.Nn);
                else {
                    var i = [];
                    this.$n.forEach((t => i.push(t))),
                    i.length > 0 ? Ss.F(this.Nn, i) : Ss.q(this.Nn)
                }
        }
        getFeatureFlag(t, i) {
            var e;
            return null == (e = this.featureFlags) ? void 0 : e.getFeatureFlag(t, i)
        }
        getFeatureFlagPayload(t) {
            var i;
            return null == (i = this.featureFlags) ? void 0 : i.getFeatureFlagPayload(t)
        }
        getFeatureFlagResult(t, i) {
            var e;
            return null == (e = this.featureFlags) ? void 0 : e.getFeatureFlagResult(t, i)
        }
        getAllFeatureFlags() {
            var t, i;
            return null !== (t = null == (i = this.featureFlags) ? void 0 : i.getAllFeatureFlags()) && void 0 !== t ? t : []
        }
        isFeatureEnabled(t, i) {
            var e, r;
            return null !== (e = null == (r = this.featureFlags) ? void 0 : r.isFeatureEnabled(t, i)) && void 0 !== e ? e : null == i ? void 0 : i.defaultValue
        }
        reloadFeatureFlags() {
            var t;
            null == (t = this.featureFlags) || t.reloadFeatureFlags()
        }
        updateFlags(t, i, e) {
            var r;
            null == (r = this.featureFlags) || r.updateFlags(t, i, e)
        }
        updateEarlyAccessFeatureEnrollment(t, i, e) {
            var r;
            null == (r = this.featureFlags) || r.updateEarlyAccessFeatureEnrollment(t, i, e)
        }
        getEarlyAccessFeatures(t, i, e) {
            var r;
            return void 0 === i && (i = !1),
            null == (r = this.featureFlags) ? void 0 : r.getEarlyAccessFeatures(t, i, e)
        }
        on(t, i) {
            return this.Pn.on(t, i)
        }
        onFeatureFlags(t) {
            return this.featureFlags ? this.featureFlags.onFeatureFlags(t) : (t([], {}, {
                errorsLoading: !0
            }),
            () => {}
            )
        }
        onSurveysLoaded(t) {
            return this.surveys ? this.surveys.onSurveysLoaded(t) : (t([], {
                isLoaded: !1,
                error: Ka
            }),
            () => {}
            )
        }
        onSessionId(t) {
            var i, e;
            return null !== (i = null == (e = this.sessionManager) ? void 0 : e.onSessionId(t)) && void 0 !== i ? i : () => {}
        }
        getSurveys(t, i) {
            void 0 === i && (i = !1),
            this.surveys ? this.surveys.getSurveys(t, i) : t([], {
                isLoaded: !1,
                error: Ka
            })
        }
        getActiveMatchingSurveys(t, i) {
            void 0 === i && (i = !1),
            this.surveys ? this.surveys.getActiveMatchingSurveys(t, i) : t([], {
                isLoaded: !1,
                error: Ka
            })
        }
        renderSurvey(t, i) {
            var e;
            null == (e = this.surveys) || e.renderSurvey(t, i)
        }
        displaySurvey(t, i) {
            var e;
            void 0 === i && (i = ja),
            null == (e = this.surveys) || e.displaySurvey(t, i)
        }
        cancelPendingSurvey(t) {
            var i;
            null == (i = this.surveys) || i.cancelPendingSurvey(t)
        }
        canRenderSurvey(t) {
            var i, e;
            return null !== (i = null == (e = this.surveys) ? void 0 : e.canRenderSurvey(t)) && void 0 !== i ? i : {
                visible: !1,
                disabledReason: Ka
            }
        }
        canRenderSurveyAsync(t, i) {
            var e, r;
            return void 0 === i && (i = !1),
            null !== (e = null == (r = this.surveys) ? void 0 : r.canRenderSurveyAsync(t, i)) && void 0 !== e ? e : Promise.resolve({
                visible: !1,
                disabledReason: Ka
            })
        }
        _s(t) {
            return !t || Y(t) ? (me.critical("Unique user id has not been set in posthog.identify"),
            !1) : t === Sr ? (me.critical('The string "' + t + '" was set in posthog.identify which indicates an error. This ID is only used as a sentinel value.'),
            !1) : !["distinct_id", "distinctid"].includes(t.toLowerCase()) && !["undefined", "null"].includes(t.toLowerCase()) || (me.critical('The string "' + t + '" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.'),
            !1)
        }
        identify(t, i, e) {
            if (!this.__loaded || !this.persistence)
                return me.uninitializedWarning("posthog.identify");
            if (Z(t) && (t = t.toString(),
            me.warn("The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string.")),
            this._s(t) && this.ys("posthog.identify")) {
                var r = this.get_distinct_id()
                  , s = this.persistence.syncCookieProperties() && this.get_distinct_id() !== r
                  , n = this.fs(!1)
                  , o = this.persistence.$i()
                  , a = !1;
                try {
                    var l = this.get_distinct_id();
                    this.register({
                        $user_id: t
                    }),
                    this.get_property(Pe) || this.register_once({
                        $had_persisted_distinct_id: !0,
                        $device_id: l
                    }, ""),
                    t !== l && t !== this.get_property(Fe) && (this.unregister(Fe),
                    this.register({
                        distinct_id: t
                    }));
                    var h, u = (this.persistence.get_property(gr) || Cr) === Cr, d = t !== l, v = !d && u;
                    if (d && u)
                        this.persistence.set_property(gr, Mr),
                        this.setPersonPropertiesForFlags({
                            $set: i || {},
                            $set_once: e || {}
                        }, !1),
                        this.config.cookieWinsOnConflict && this.persistence.Ni(),
                        this.capture(Lr, {
                            distinct_id: t,
                            $anon_distinct_id: l
                        }, {
                            $set: i || {},
                            $set_once: e || {}
                        }),
                        this.Un = Sa(t, i, e),
                        null == (h = this.featureFlags) || h.setAnonymousDistinctId(l);
                    else if (v) {
                        this.persistence.set_property(gr, Mr);
                        var c = i || {}
                          , f = e || {};
                        this.setPersonPropertiesForFlags({
                            $set: c,
                            $set_once: f
                        }, !1),
                        this.config.cookieWinsOnConflict && this.persistence.Ni(),
                        this.capture("$set", {
                            $set: c,
                            $set_once: f
                        }),
                        this.Un = Sa(t, i, e)
                    } else
                        (i || e) && this.setPersonProperties(i, e);
                    d || s || n ? (this.reloadFeatureFlags(),
                    this.featureFlags ? this.featureFlags.resetFlagCallReported() : this.unregister(vr)) : v && (i || e) && this.reloadFeatureFlags(),
                    a = !0
                } finally {
                    o && this.persistence.Bi(a)
                }
            }
        }
        setPersonProperties(t, i) {
            if ((t || i) && this.ys("posthog.setPersonProperties")) {
                var e = Sa(this.get_distinct_id(), t, i);
                this.Un !== e ? (this.setPersonPropertiesForFlags({
                    $set: t || {},
                    $set_once: i || {}
                }, !0),
                this.capture("$set", {
                    $set: t || {},
                    $set_once: i || {}
                }),
                this.Un = e) : me.info("A duplicate setPersonProperties call was made with the same properties. It has been ignored.")
            }
        }
        unsetPersonProperties(t) {
            var i, e = (H(t) ? t : [t]).filter((t => K(t) && t.length > 0));
            0 !== e.length && this.ys("posthog.unsetPersonProperties") && (null == (i = this.featureFlags) || i.unsetPersonPropertiesForFlags(e, !0),
            this.capture("$set", {
                $unset: e
            }),
            this.Un = null)
        }
        group(t, i, e) {
            var r;
            if (t && i) {
                null == (r = this.persistence) || r.syncCookieProperties(),
                this.fs();
                var s = this.getGroups()
                  , n = s[t] !== i;
                if (n && this.resetGroupPropertiesForFlags(t),
                this.register({
                    $groups: g({}, s, {
                        [t]: i
                    })
                }),
                n || e) {
                    var o = {
                        $group_type: t,
                        $group_key: i
                    };
                    e && (o.$group_set = e),
                    this.capture(Nr, o)
                }
                e && this.setGroupPropertiesForFlags({
                    [t]: e
                }),
                n && !e && this.reloadFeatureFlags()
            } else
                me.error("posthog.group requires a group type and group key")
        }
        resetGroups() {
            this.register({
                $groups: {}
            }),
            this.resetGroupPropertiesForFlags(),
            this.reloadFeatureFlags()
        }
        setPersonPropertiesForFlags(t, i) {
            var e;
            void 0 === i && (i = !0),
            null == (e = this.featureFlags) || e.setPersonPropertiesForFlags(t, i)
        }
        resetPersonPropertiesForFlags(t) {
            var i;
            void 0 === t && (t = !0),
            null == (i = this.featureFlags) || i.resetPersonPropertiesForFlags(t)
        }
        setGroupPropertiesForFlags(t, i) {
            var e;
            void 0 === i && (i = !0),
            this.ys("posthog.setGroupPropertiesForFlags") && (null == (e = this.featureFlags) || e.setGroupPropertiesForFlags(t, i))
        }
        resetGroupPropertiesForFlags(t) {
            var i;
            null == (i = this.featureFlags) || i.resetGroupPropertiesForFlags(t)
        }
        reset(t) {
            var i = it(t) ? t : null == t ? void 0 : t.resetDeviceID
              , e = it(t) || null == t ? void 0 : t.bootstrap;
            this.ws(i, !1, e)
        }
        ws(t, i, e) {
            var r, s, n;
            if (void 0 === i && (i = !1),
            me.info("reset"),
            !this.__loaded)
                return me.uninitializedWarning("posthog.reset");
            var o = null == e ? void 0 : e.sessionID;
            this.config.bootstrap = e || (null == (r = this.Wn) ? void 0 : r.bootstrap) || {},
            null == (s = this.featureFlags) || null == s.updateConfig || s.updateConfig(this.config, this.hr());
            var a = this.get_property(Pe)
              , l = this.get_property(Te)
              , h = this.get_property(Be)
              , u = this.is_capturing();
            this.consent.reset(),
            i || !u || this.is_capturing() || console.warn("[PostHog.js]", "reset() cleared the stored consent, and capturing is now off because of `opt_out_capturing_by_default`. Call opt_in_capturing() again, and prefer calling reset() before opting in rather than after.");
            var d = null == (n = this.persistence) || null == n.$i ? void 0 : n.$i()
              , v = !1;
            try {
                var c, f, p, _, m, y, b, w, x, S, k, E, P, T;
                if (null == (c = this.persistence) || c.clear(),
                null == (f = this.sessionPersistence) || f.clear(),
                this.$n.clear(),
                this.ps(),
                J(h) || null == (k = this.persistence) || k.register({
                    [Be]: h
                }),
                null == (p = this.surveys) || p.reset(),
                null == (_ = this.hs) || _.stop(),
                null == (m = this.featureFlags) || m.reset(),
                null == (y = this.conversations) || y.reset(),
                null == (b = this.logs) || b.reset(),
                null == (w = this.metrics) || w.reset(),
                null == (x = this.persistence) || x.set_property(gr, Cr),
                null == (S = this.sessionManager) || S.resetSessionId(),
                this.Un = null,
                this.config.cookieless_mode === Rr)
                    this.register_once({
                        distinct_id: Sr,
                        $device_id: null
                    }, "");
                else {
                    var F = this.config.get_device_id(rs());
                    this.register_once({
                        distinct_id: F,
                        $device_id: t ? F : a
                    }, ""),
                    t || J(l) || this.register({
                        [Te]: l
                    })
                }
                if (this.register({
                    $last_posthog_reset: (new Date).toISOString()
                }, 1),
                e)
                    if (void 0 === e.distinctID || this.Ln() || (null == (T = this.persistence) || T.set_property(gr, e.isIdentifiedID ? Mr : Cr),
                    this.register({
                        distinct_id: e.distinctID
                    })),
                    null == (E = this.featureFlags) || E.initialize(),
                    !(J(o) || null != (P = this.sessionManager) && P.setBootstrapSessionId(o, !0))) {
                        var R = g({}, e);
                        delete R.sessionID,
                        this.config.bootstrap = R
                    }
                delete this.config.identity_distinct_id,
                delete this.config.identity_hash,
                v = !0
            } finally {
                var C;
                d && (null == (C = this.persistence) || null == C.Bi || C.Bi(v))
            }
            this.reloadFeatureFlags()
        }
        shutdown(t) {
            var i = this;
            return p((function*() {
                var t, e, r, s, n, o, a;
                if (i.__loaded) {
                    null == (t = i.hs) || t.stop(),
                    null == (e = i.os) || e.dispose(),
                    null == (r = i.sessionRecording) || r.dispose(),
                    null == (s = i.logs) || s.flushLogs("sendBeacon"),
                    null == (n = i.metrics) || n.flush("sendBeacon"),
                    null == (o = i.Gn) || o.unload(),
                    null == (a = i.Jn) || a.unload();
                    try {
                        var l;
                        null == (l = i.featureFlags) || l.destroy()
                    } catch (t) {
                        me.error("Error while destroying feature flags", t)
                    }
                } else
                    me.uninitializedWarning("posthog.shutdown")
            }
            ))()
        }
        setIdentity(t, i) {
            var e;
            this.config.identity_distinct_id = t,
            this.config.identity_hash = i,
            this.alias(t),
            null == (e = this.conversations) || e.ks()
        }
        clearIdentity() {
            var t;
            delete this.config.identity_distinct_id,
            delete this.config.identity_hash,
            null == (t = this.conversations) || t.xs()
        }
        get_distinct_id() {
            return this.get_property("distinct_id")
        }
        getGroups() {
            return this.get_property("$groups") || {}
        }
        get_session_id() {
            var t, i;
            return null !== (t = null == (i = this.sessionManager) ? void 0 : i.checkAndGetSessionAndWindowId(!0).sessionId) && void 0 !== t ? t : ""
        }
        get_session_replay_url(t) {
            if (!this.sessionManager)
                return "";
            var i = this.sessionManager.checkAndGetSessionAndWindowId(!0)
              , e = i.sessionStartTimestamp
              , r = this.requestRouter.endpointFor("ui", "/project/" + this.config.token + "/replay/" + i.sessionId);
            if (null != t && t.withTimestamp && e) {
                var s, n = null !== (s = t.timestampLookBack) && void 0 !== s ? s : 10;
                if (!e)
                    return r;
                r += "?t=" + Math.max(Math.floor(((new Date).getTime() - e) / 1e3) - n, 0)
            }
            return r
        }
        alias(t, i) {
            return t === this.get_property(Ee) ? (me.critical("Attempting to create alias for existing People user - aborting."),
            -2) : this.ys("posthog.alias") ? (J(i) && (i = this.get_distinct_id()),
            t !== i ? (this.bs(Fe, t),
            this.capture("$create_alias", {
                alias: t,
                distinct_id: i
            })) : (me.warn("alias matches current distinct_id - skipping api call."),
            this.identify(t),
            -1)) : void 0
        }
        set_config(t) {
            var i = g({}, this.config);
            if (W(t)) {
                var e, r, s, n, o, a, l, h, u, d, v, f;
                Ur(this.config, rl(t));
                var p = this.Zn();
                null == (e = this.persistence) || e.update_config(this.config, i, p),
                this.sessionPersistence = "sessionStorage" === this.config.persistence || "memory" === this.config.persistence ? this.persistence : new io(g({}, this.config, {
                    persistence: "sessionStorage"
                }),p,!1);
                var _ = this.zn(this.config.debug);
                it(_) && (this.config.debug = _),
                it(this.config.debug) && (this.config.debug ? (c.DEBUG = !0,
                hs.N() && hs.F("ph_debug", !0),
                me.info("set_config", {
                    config: t,
                    oldConfig: i,
                    newConfig: g({}, this.config)
                })) : (c.DEBUG = !1,
                hs.N() && hs.q("ph_debug"))),
                null == (r = this.featureFlags) || null == r.updateConfig || r.updateConfig(this.config, this.hr()),
                null == (s = this.exceptionObserver) || s.onConfigChange(),
                null == (n = this.exceptions) || n.onConfigChange(),
                null == (o = this.sessionRecording) || o.startIfEnabledOrStop(),
                null == (a = this.tracingHeaders) || a.startIfEnabledOrStop(),
                null == (l = this.autocapture) || l.startIfEnabled(),
                null == (h = this.heatmaps) || h.startIfEnabled(),
                null == (u = this.exceptionObserver) || u.startIfEnabledOrStop(),
                null == (d = this.deadClicksAutocapture) || d.startIfEnabledOrStop(),
                null == (v = this.surveys) || v.loadIfEnabled(),
                this.Ss(),
                null == (f = this.externalIntegrations) || f.startIfEnabledOrStop()
            }
        }
        _overrideSDKInfo(t, i) {
            c.LIB_NAME = t,
            c.LIB_VERSION = i
        }
        startSessionRecording(t) {
            var i, e, r, s, n, o = !0 === t, a = {
                sampling: o || !(null == t || !t.sampling),
                linked_flag: o || !(null == t || !t.linked_flag),
                url_trigger: o || !(null == t || !t.url_trigger),
                event_trigger: o || !(null == t || !t.event_trigger)
            };
            Object.values(a).some(Boolean) && (null == (i = this.sessionManager) || i.checkAndGetSessionAndWindowId(),
            a.sampling && (null == (e = this.sessionRecording) || e.overrideSampling()),
            a.linked_flag && (null == (r = this.sessionRecording) || r.overrideLinkedFlag()),
            a.url_trigger && (null == (s = this.sessionRecording) || s.overrideTrigger("url")),
            a.event_trigger && (null == (n = this.sessionRecording) || n.overrideTrigger("event")));
            this.set_config({
                disable_session_recording: !1
            })
        }
        stopSessionRecording() {
            this.set_config({
                disable_session_recording: !0
            })
        }
        sessionRecordingStarted() {
            var t;
            return !(null == (t = this.sessionRecording) || !t.started)
        }
        captureException(t, i) {
            if (this.exceptions) {
                var e = new Error("PostHog syntheticException")
                  , r = this.exceptions.buildProperties(t, {
                    handled: !0,
                    syntheticException: e
                });
                return this.exceptions.sendExceptionEvent(g({}, r, i))
            }
        }
        addExceptionStep(t, i) {
            var e;
            null == (e = this.exceptions) || e.addExceptionStep(t, i)
        }
        captureLog(t) {
            var i;
            null == (i = this.logs) || i.captureLog(t)
        }
        get logger() {
            var t, i;
            return null !== (t = null == (i = this.logs) ? void 0 : i.logger) && void 0 !== t ? t : nl.Cs
        }
        startExceptionAutocapture(t) {
            this.set_config({
                capture_exceptions: null == t || t
            })
        }
        stopExceptionAutocapture() {
            this.set_config({
                capture_exceptions: !1
            })
        }
        loadToolbar(t) {
            var i, e;
            return null !== (i = null == (e = this.toolbar) ? void 0 : e.loadToolbar(t)) && void 0 !== i && i
        }
        get_property(t) {
            var i;
            return null == (i = this.persistence) ? void 0 : i.props[t]
        }
        getSessionProperty(t) {
            var i;
            return null == (i = this.sessionPersistence) ? void 0 : i.props[t]
        }
        toString() {
            var t, i = null !== (t = this.config.name) && void 0 !== t ? t : Za;
            return i !== Za && (i = Za + "." + i),
            i
        }
        _isIdentified() {
            var t, i;
            return (null == (t = this.persistence) ? void 0 : t.get_property(gr)) === Mr || (null == (i = this.sessionPersistence) ? void 0 : i.get_property(gr)) === Mr
        }
        gs() {
            var t, i;
            return !("never" === this.config.person_profiles || this.config.person_profiles === Ir && !this._isIdentified() && G(this.getGroups()) && (null == (t = this.persistence) || null == (t = t.props) || !t[Fe]) && (null == (i = this.persistence) || null == (i = i.props) || !i[xr]))
        }
        ds() {
            return !0 === this.config.capture_pageleave || "if_capture_pageview" === this.config.capture_pageleave && (!0 === this.config.capture_pageview || "history_change" === this.config.capture_pageview)
        }
        createPersonProfile() {
            this.gs() || this.ys("posthog.createPersonProfile") && this.setPersonProperties({}, {})
        }
        setInternalOrTestUser() {
            this.ys("posthog.setInternalOrTestUser") && this.setPersonProperties({
                $internal_or_test_user: !0
            })
        }
        ys(t) {
            return "never" === this.config.person_profiles ? (me.error(t + ' was called, but process_person is set to "never". This call will be ignored.'),
            !1) : (this.bs(xr, !0),
            !0)
        }
        Zn() {
            if ("always" === this.config.cookieless_mode)
                return !0;
            var t = this.consent.isOptedOut();
            return this.config.disable_persistence || t && !(!this.config.opt_out_persistence_by_default && this.config.cookieless_mode !== Fr)
        }
        Ss() {
            var t, i, e, r, s = this.Zn();
            return (null == (t = this.persistence) ? void 0 : t.Oi) !== s && (null == (e = this.persistence) || e.set_disabled(s)),
            (null == (i = this.sessionPersistence) ? void 0 : i.Oi) !== s && (null == (r = this.sessionPersistence) || r.set_disabled(s)),
            s && (this.$n.clear(),
            this.ps()),
            s
        }
        opt_in_capturing(t) {
            var i;
            if (this.config.cookieless_mode !== Rr) {
                if (this.Ln()) {
                    var e, r, s, n, o;
                    this.ws(!0, !0),
                    null == (e = this.sessionManager) || e.destroy(),
                    null == (r = this.pageViewManager) || r.destroy(),
                    this.sessionManager = new ya(this),
                    this.pageViewManager = new Sn(this),
                    this.persistence && (this.sessionPropsManager = new pa(this,this.sessionManager,this.persistence));
                    var a, l = null !== (s = null == (n = this.config.__extensionClasses) ? void 0 : n.sessionRecording) && void 0 !== s ? s : null == (o = nl.__defaultExtensionClasses) ? void 0 : o.sessionRecording;
                    l && (this.sessionRecording = this.On(this.sessionRecording, new l(this)),
                    this.In && (null == (a = this.sessionRecording) || null == a.onRemoteConfig || a.onRemoteConfig(this.In)))
                }
                var h, u;
                this.consent.optInOut(!0),
                this.Ss(),
                this.ls(),
                null == (i = this.sessionRecording) || i.startIfEnabledOrStop(),
                this.config.cookieless_mode == Fr && (null == (h = this.surveys) || h.loadIfEnabled()),
                (J(null == t ? void 0 : t.captureEventName) || null != t && t.captureEventName) && this.capture(null !== (u = null == t ? void 0 : t.captureEventName) && void 0 !== u ? u : "$opt_in", null == t ? void 0 : t.captureProperties, {
                    send_instantly: !0
                }),
                this.config.capture_pageview && this.us()
            } else
                me.warn(Ja)
        }
        opt_out_capturing() {
            var t, i, e;
            this.config.cookieless_mode !== Rr ? (this.config.cookieless_mode === Fr && this.consent.isOptedIn() && this.ws(!0, !0),
            this.consent.optInOut(!1),
            this.Ss(),
            this.config.cookieless_mode === Fr && (this.register({
                distinct_id: Sr,
                $device_id: null
            }),
            null == (t = this.sessionRecording) || t.stopRecording(),
            this.sessionRecording = void 0,
            null == (i = this.sessionManager) || i.destroy(),
            null == (e = this.pageViewManager) || e.destroy(),
            this.sessionManager = void 0,
            this.sessionPropsManager = void 0,
            this.config.capture_pageview && this.us(),
            this.ls())) : me.warn(Ja)
        }
        has_opted_in_capturing() {
            return this.consent.isOptedIn()
        }
        has_opted_out_capturing() {
            return this.consent.isOptedOut()
        }
        get_explicit_consent_status() {
            var t = this.consent.consent;
            return 1 === t ? "granted" : 0 === t ? "denied" : "pending"
        }
        is_capturing() {
            return this.config.cookieless_mode === Rr || (this.config.cookieless_mode === Fr ? this.consent.isRejected() || this.consent.isOptedIn() : !this.has_opted_out_capturing())
        }
        clear_opt_in_out_capturing() {
            this.consent.reset(),
            this.Ss()
        }
        _is_bot() {
            return e ? ba(e, this.config.custom_blocked_useragents) : void 0
        }
        us() {
            r && ("visible" === r.visibilityState ? this.jn || (this.jn = !0,
            this.capture(Dr, {
                title: r.title
            }, {
                send_instantly: !0
            }),
            this.Bn && (r.removeEventListener(Ar, this.Bn),
            this.Bn = null)) : this.Bn || (this.Bn = this.us.bind(this),
            Kr(r, Ar, this.Bn)))
        }
        debug(i) {
            !1 === i ? (null == t || t.console.log("You've disabled debug mode."),
            this.set_config({
                debug: !1
            })) : (null == t || t.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."),
            this.set_config({
                debug: !0
            }))
        }
        hr() {
            var t = this.Wn || {};
            return "advanced_disable_flags"in t ? !!t.advanced_disable_flags : !1 !== this.config.advanced_disable_flags ? !!this.config.advanced_disable_flags : !0 === this.config.advanced_disable_decide ? (me.warn("Config field 'advanced_disable_decide' is deprecated. Please use 'advanced_disable_flags' instead. The old field will be removed in a future major version."),
            !0) : function(t, i, e, r, s) {
                var n = i in t && !X(t[i])
                  , o = e in t && !X(t[e]);
                return n ? t[i] : !!o && (s && s.warn("Config field '" + e + "' is deprecated. Please use '" + i + "' instead. The old field will be removed in a future major version."),
                t[e])
            }(t, "advanced_disable_flags", "advanced_disable_decide", 0, me)
        }
        At(t) {
            var i;
            if (X(this.config.before_send))
                return t;
            var e = Object.keys(null !== (i = t.properties) && void 0 !== i ? i : {}).filter(st)
              , r = H(this.config.before_send) ? this.config.before_send : [this.config.before_send]
              , s = t;
            for (var n of r) {
                if (s = n(s),
                X(s)) {
                    var o = "Event '" + t.event + "' was rejected in beforeSend function";
                    return rt(t.event) ? me.warn(o + ". This can cause unexpected behavior.") : me.info(o),
                    null
                }
                s.properties && !G(s.properties) || me.warn("Event '" + t.event + "' has no properties after beforeSend function, this is likely an error.")
            }
            for (var a of e)
                if (s.properties && X(s.properties[a]))
                    return me.warn("Event '" + t.event + "' had its '" + a + "' property removed in a beforeSend function. This property is required for ingestion, so the event will be dropped."),
                    null;
            return s
        }
        getPageViewId() {
            var t;
            return null == (t = this.pageViewManager.fi) ? void 0 : t.pageViewId
        }
        captureTraceFeedback(t, i) {
            this.capture("$ai_feedback", {
                $ai_trace_id: String(t),
                $ai_feedback_text: i
            })
        }
        captureTraceMetric(t, i, e) {
            this.capture("$ai_metric", {
                $ai_trace_id: String(t),
                $ai_metric_name: i,
                $ai_metric_value: String(e)
            })
        }
        zn(t) {
            var i = it(t) && !t
              , e = hs.N() && "true" === hs.P("ph_debug");
            return !i && (!!e || t)
        }
    }
    nl.__defaultExtensionClasses = {},
    nl.Cs = ( () => {
        var t = () => {}
        ;
        return {
            trace: t,
            debug: t,
            info: t,
            warn: t,
            error: t,
            fatal: t
        }
    }
    )(),
    function(t, i) {
        for (var e = 0; i.length > e; e++)
            t.prototype[i[e]] = Vr(t.prototype[i[e]])
    }(nl, ["identify"]);
    class ol {
        constructor(t) {
            this.disabled = !1 === t;
            var i = W(t) ? t : {};
            this.thresholdPx = i.threshold_px || 30,
            this.timeoutMs = i.timeout_ms || 1e3,
            this.clickCount = i.click_count || 3,
            this.clicks = []
        }
        isRageClick(t, i, e) {
            if (this.disabled)
                return !1;
            var r = this.clicks[this.clicks.length - 1];
            if (r && Math.abs(t - r.x) + Math.abs(i - r.y) < this.thresholdPx && this.timeoutMs > e - r.timestamp) {
                if (this.clicks.push({
                    x: t,
                    y: i,
                    timestamp: e
                }),
                this.clicks.length === this.clickCount)
                    return !0
            } else
                this.clicks = [{
                    x: t,
                    y: i,
                    timestamp: e
                }];
            return !1
        }
    }
    var al = "$copy_autocapture"
      , ll = ye("[AutoCapture]");
    function hl(t, i) {
        return i.length > t ? i.slice(0, t) + "..." : i
    }
    function ul(t) {
        if (t.previousElementSibling)
            return t.previousElementSibling;
        var i = t;
        do {
            i = i.previousSibling
        } while (i && !Cs(i));
        return i
    }
    function dl(i, e) {
        var r, s, n = e.e, o = e.maskAllElementAttributes, a = e.maskAllText, l = e.elementAttributeIgnoreList, h = e.elementsChainAsString, u = e.disableCaptureUrlHashes;
        if (!Cs(i))
            return {
                props: {}
            };
        for (var d = [i], v = new Set([i]), c = i; c.parentNode && !Ms(c, "body") && Os > d.length; )
            if (As(c.parentNode)) {
                var f = c.parentNode.host;
                if (v.has(f))
                    break;
                v.add(f),
                d.push(f),
                c = f
            } else {
                if (!Cs(c.parentNode))
                    break;
                if (v.has(c.parentNode))
                    break;
                v.add(c.parentNode),
                d.push(c.parentNode),
                c = c.parentNode
            }
        var p, _, m = [], y = {}, b = !1, w = !1;
        if (zr(d, (t => {
            var i = tn(t);
            if (Ms(t, "a")) {
                var e = t.getAttribute("href");
                b = !!(i && e && un(e)) && (u ? wi(e) : e)
            }
            j(Ls(t), "ph-no-capture") && (w = !0),
            m.push(function(t, i, e, r, s) {
                void 0 === s && (s = !1);
                var n = t.tagName.toLowerCase()
                  , o = {
                    tag_name: n
                };
                Us.indexOf(n) > -1 && !e && (o.$el_text = "a" === n.toLowerCase() || "button" === n.toLowerCase() ? hl(1024, dn(t)) : hl(1024, Bs(t)));
                var a = Ls(t);
                a.length > 0 && (o.classes = a.filter((function(t) {
                    return "" !== t
                }
                ))),
                zr(t.attributes, (function(e) {
                    var n;
                    if ((!en(t) || -1 !== ["name", "id", "class", "aria-label"].indexOf(e.name)) && (null == r || !r.includes(e.name)) && !i && un(e.value) && (!K(n = e.name) || "_ngcontent" !== n.substring(0, 10) && "_nghost" !== n.substring(0, 7))) {
                        var a = e.value;
                        "class" === e.name && (a = Ds(a).join(" ")),
                        o["attr__" + e.name] = hl(1024, "href" === e.name && s ? wi(a) : a)
                    }
                }
                ));
                for (var l = 1, h = 1, u = t; u = ul(u); )
                    l++,
                    u.tagName === t.tagName && h++;
                return o.nth_child = l,
                o.nth_of_type = h,
                o
            }(t, o, a, l, u));
            var r = function(t) {
                if (!tn(t))
                    return {};
                var i = {};
                return zr(t.attributes, (function(t) {
                    if (t.name && 0 === t.name.indexOf("data-ph-capture-attribute")) {
                        var e = t.name.replace("data-ph-capture-attribute-", "")
                          , r = t.value;
                        e && r && un(r) && (i[e] = r)
                    }
                }
                )),
                i
            }(t);
            Ur(y, r)
        }
        )),
        w)
            return {
                props: {},
                explicitNoCapture: w
            };
        if (a || (m[0].$el_text = Ms(i, "a") || Ms(i, "button") ? dn(i) : Bs(i)),
        b) {
            var x, S;
            m[0].attr__href = b;
            var k = null == (x = Fn(b)) ? void 0 : x.host
              , E = null == t || null == (S = t.location) ? void 0 : S.host;
            k && E && k !== E && (p = b)
        }
        return {
            props: Ur({
                $event_type: n.type,
                $ce_version: 1
            }, h ? {} : {
                $elements: m
            }, {
                $elements_chain: (_ = m,
                function(t) {
                    return t.map((t => {
                        var i, e, r = "";
                        if (t.tag_name && (r += t.tag_name),
                        t.attr_class)
                            for (var s of (t.attr_class.sort(),
                            t.attr_class))
                                r += "." + s.replace(/"/g, "");
                        var n = g({}, t.text ? {
                            text: t.text
                        } : {}, {
                            "nth-child": null !== (i = t.nth_child) && void 0 !== i ? i : 0,
                            "nth-of-type": null !== (e = t.nth_of_type) && void 0 !== e ? e : 0
                        }, t.href ? {
                            href: t.href
                        } : {}, t.attr_id ? {
                            attr_id: t.attr_id
                        } : {}, t.attributes)
                          , o = {};
                        return qr(n).sort(( (t, i) => t[0].localeCompare(i[0]))).forEach((t => {
                            var i = t[1];
                            return o[cn(t[0].toString())] = cn(i.toString())
                        }
                        )),
                        (r += ":") + qr(o).map((t => t[0] + '="' + t[1] + '"')).join("")
                    }
                    )).join(";")
                }(function(t) {
                    return t.map((t => {
                        var i, e, r = {
                            text: null == (i = t.$el_text) ? void 0 : i.slice(0, 400),
                            tag_name: t.tag_name,
                            href: null == (e = t.attr__href) ? void 0 : e.slice(0, 2048),
                            attr_class: fn(t),
                            attr_id: t.attr__id,
                            nth_child: t.nth_child,
                            nth_of_type: t.nth_of_type,
                            attributes: {}
                        };
                        return qr(t).filter((t => 0 === t[0].indexOf("attr__"))).forEach((t => r.attributes[t[0]] = t[1])),
                        r
                    }
                    ))
                }(_)))
            }, null != (r = m[0]) && r.$el_text ? {
                $el_text: null == (s = m[0]) ? void 0 : s.$el_text
            } : {}, p && "click" === n.type ? {
                $external_click_url: p
            } : {}, y)
        }
    }
    var vl = ye("[ExceptionAutocapture]")
      , cl = () => {}
      , fl = ye("[TracingHeaders]")
      , pl = ye("[Web Vitals]")
      , gl = 9e5
      , _l = "disabled"
      , ml = "lazy_loading"
      , yl = "awaiting_config"
      , bl = "missing_config";
    ye("[SessionRecording]"),
    ye("[SessionRecording]");
    var wl = "[SessionRecording]"
      , xl = ye(wl)
      , Sl = ye("[Heatmaps]");
    function kl(t) {
        return W(t) && "clientX"in t && "clientY"in t && Z(t.clientX) && Z(t.clientY)
    }
    var El = ye("[Product Tours]")
      , $l = t => {
        var i;
        return !t.config.disable_product_tours && !(null == (i = t.persistence) || !i.get_property(Le))
    }
      , Pl = ["$set_once", "$set"]
      , Tl = ye("[SiteApps]")
      , Fl = "Error while initializing PostHog app with config id ";
    function Rl(t, i, e) {
        if (X(t))
            return !1;
        switch (e) {
        case "exact":
            return t === i;
        case "contains":
            var r = i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/_/g, ".").replace(/%/g, ".*");
            return new RegExp(r,"i").test(t);
        case "regex":
            try {
                return new RegExp(i).test(t)
            } catch (t) {
                return !1
            }
        default:
            return !1
        }
    }
    class Cl {
        constructor(t) {
            this.Ms = new ga,
            this.Ts = (t, i) => this.Es(t, i) && this.Is(t, i) && this.Ps(t, i) && this.Rs(t, i),
            this.Es = (t, i) => null == i || !i.event || (null == t ? void 0 : t.event) === (null == i ? void 0 : i.event),
            this._instance = t,
            this.As = new Set,
            this.Fs = new Set
        }
        init() {
            var t, i;
            J(null == (t = this._instance) ? void 0 : t._addCaptureHook) || (null == (i = this._instance) || i._addCaptureHook(( (t, i) => {
                this.on(t, i)
            }
            )))
        }
        register(t) {
            var i, e;
            if (!J(null == (i = this._instance) ? void 0 : i._addCaptureHook) && (t.forEach((t => {
                var i, e;
                null == (i = this.Fs) || i.add(t),
                null == (e = t.steps) || e.forEach((t => {
                    var i;
                    null == (i = this.As) || i.add((null == t ? void 0 : t.event) || "")
                }
                ))
            }
            )),
            null != (e = this._instance) && e.autocapture)) {
                var r, s = new Set;
                t.forEach((t => {
                    var i;
                    null == (i = t.steps) || i.forEach((t => {
                        null != t && t.selector && s.add(null == t ? void 0 : t.selector)
                    }
                    ))
                }
                )),
                null == (r = this._instance) || r.autocapture.setElementSelectors(s)
            }
        }
        on(t, i) {
            var e;
            null != i && 0 != t.length && (this.As.has(t) || this.As.has(i.event)) && this.Fs && (null == (e = this.Fs) ? void 0 : e.size) > 0 && this.Fs.forEach((t => {
                this.Os(i, t) && this.Ms.emit("actionCaptured", t.name)
            }
            ))
        }
        Ls(t) {
            this.onAction("actionCaptured", (i => t(i)))
        }
        Os(t, i) {
            if (null == (null == i ? void 0 : i.steps))
                return !1;
            for (var e of i.steps)
                if (this.Ts(t, e))
                    return !0;
            return !1
        }
        onAction(t, i) {
            return this.Ms.on(t, i)
        }
        Is(t, i) {
            if (null != i && i.url) {
                var e, r = null == t || null == (e = t.properties) ? void 0 : e.$current_url;
                if (!r || "string" != typeof r)
                    return !1;
                if (!Rl(r, i.url, i.url_matching || "contains"))
                    return !1
            }
            return !0
        }
        Ps(t, i) {
            return !!this.Ds(t, i) && !!this.$s(t, i) && !!this.Ns(t, i)
        }
        Ds(t, i) {
            var e;
            if (null == i || !i.href)
                return !0;
            var r = this.qs(t);
            if (r.length > 0)
                return r.some((t => Rl(t.href, i.href, i.href_matching || "exact")));
            var s, n = (null == t || null == (e = t.properties) ? void 0 : e.$elements_chain) || "";
            return !!n && Rl((s = n.match(/(?::|")href="(.*?)"/)) ? s[1] : "", i.href, i.href_matching || "exact")
        }
        $s(t, i) {
            var e;
            if (null == i || !i.text)
                return !0;
            var r = this.qs(t);
            if (r.length > 0)
                return r.some((t => Rl(t.text, i.text, i.text_matching || "exact") || Rl(t.$el_text, i.text, i.text_matching || "exact")));
            var s, n, o, a = (null == t || null == (e = t.properties) ? void 0 : e.$elements_chain) || "";
            return !!a && (s = function(t) {
                for (var i, e = [], r = /(?::|")text="(.*?)"/g; !X(i = r.exec(t)); )
                    e.includes(i[1]) || e.push(i[1]);
                return e
            }(a),
            n = i.text,
            o = i.text_matching || "exact",
            s.some((t => Rl(t, n, o))))
        }
        Ns(t, i) {
            var e, r;
            if (null == i || !i.selector)
                return !0;
            var s = null == t || null == (e = t.properties) ? void 0 : e.$element_selectors;
            if (null != s && s.includes(i.selector))
                return !0;
            var n = (null == t || null == (r = t.properties) ? void 0 : r.$elements_chain) || "";
            if (i.selector_regex && n)
                try {
                    return new RegExp(i.selector_regex).test(n)
                } catch (t) {
                    return !1
                }
            return !1
        }
        qs(t) {
            var i;
            return null == (null == t || null == (i = t.properties) ? void 0 : i.$elements) ? [] : null == t ? void 0 : t.properties.$elements
        }
        Rs(t, i) {
            return null == i || !i.properties || 0 === i.properties.length || $a(i.properties.reduce(( (t, i) => {
                var e = H(i.value) ? i.value.map(String) : null != i.value ? [String(i.value)] : [];
                return t[i.key] = {
                    values: e,
                    operator: i.operator || "exact"
                },
                t
            }
            ), {}), null == t ? void 0 : t.properties)
        }
    }
    class Ml {
        constructor(t) {
            var i;
            this.js = [],
            this._instance = t,
            this.Bs = new Map,
            this.Hs = new Map,
            this.Us = new Map,
            null == (i = this._instance) || null == i.onSessionId || i.onSessionId((t => this.zs(t)))
        }
        Ws(t) {
            return !1
        }
        Vs() {
            return null
        }
        Zs(t) {}
        Gs() {}
        Qs(t, i) {
            return !!t && $a(t.propertyFilters, null == i ? void 0 : i.properties)
        }
        Js(t, i) {
            var e = new Map;
            return t.forEach((t => {
                var r;
                null == (r = t.conditions) || null == (r = r[i]) || null == (r = r.values) || r.forEach((i => {
                    if (null != i && i.name) {
                        var r = e.get(i.name) || [];
                        r.push(t.id),
                        e.set(i.name, r)
                    }
                }
                ))
            }
            )),
            e
        }
        Ks(t, i, e) {
            var r = (e === no ? this.Bs : this.Hs).get(t)
              , s = [];
            return this.Ys((t => {
                s = t.filter((t => null == r ? void 0 : r.includes(t.id)))
            }
            )),
            s.filter((r => {
                var s, n = null == (s = r.conditions) || null == (s = s[e]) || null == (s = s.values) ? void 0 : s.find((i => i.name === t));
                return this.Qs(n, i)
            }
            ))
        }
        register(t) {
            var i;
            J(null == (i = this._instance) ? void 0 : i._addCaptureHook) || (this.Xs(t),
            this.ta(t))
        }
        ta(t) {
            var i = t.filter((t => {
                var i, e;
                return (null == (i = t.conditions) ? void 0 : i.actions) && (null == (e = t.conditions) || null == (e = e.actions) || null == (e = e.values) ? void 0 : e.length) > 0
            }
            ));
            0 !== i.length && (null == this.ea && (this.ea = new Cl(this._instance),
            this.ea.init(),
            this.ea.Ls((t => {
                this.onAction(t)
            }
            ))),
            i.forEach((t => {
                var i, e, r, s, n;
                t.conditions && null != (i = t.conditions) && i.actions && null != (e = t.conditions) && null != (e = e.actions) && e.values && (null == (r = t.conditions) || null == (r = r.actions) || null == (r = r.values) ? void 0 : r.length) > 0 && (null == (s = this.ea) || s.register(t.conditions.actions.values),
                null == (n = t.conditions) || null == (n = n.actions) || null == (n = n.values) || n.forEach((i => {
                    if (i && i.name) {
                        var e = this.Us.get(i.name);
                        e && e.push(t.id),
                        this.Us.set(i.name, e || [t.id])
                    }
                }
                )))
            }
            )))
        }
        Xs(t) {
            var i, e = t.filter((t => {
                var i, e;
                return (null == (i = t.conditions) ? void 0 : i.events) && (null == (e = t.conditions) || null == (e = e.events) || null == (e = e.values) ? void 0 : e.length) > 0
            }
            )), r = t.filter((t => {
                var i, e;
                return (null == (i = t.conditions) ? void 0 : i.cancelEvents) && (null == (e = t.conditions) || null == (e = e.cancelEvents) || null == (e = e.values) ? void 0 : e.length) > 0
            }
            ));
            0 === e.length && 0 === r.length || (null == (i = this._instance) || i._addCaptureHook(( (t, i) => {
                this.onEvent(t, i)
            }
            )),
            this.Bs = this.Js(t, no),
            this.Hs = this.Js(t, oo))
        }
        onEvent(t, i) {
            var e, r, s = this.ia(), n = (null == i || null == (e = i.properties) ? void 0 : e.$survey_id) || (null == i || null == (r = i.properties) ? void 0 : r.$product_tour_id);
            if (n && this.getActivatedIds().includes(n)) {
                var o = this.ra(t, n);
                if ("consume" === o)
                    return s.info("event consumed activated item, removing it", {
                        event: t,
                        itemId: n
                    }),
                    void this.na([n]);
                if ("persist" === o)
                    return s.info("shown item promoted to persisted activation", {
                        event: t,
                        itemId: n
                    }),
                    this.sa(n),
                    void this.aa([n])
            }
            if (this.Hs.has(t)) {
                var a = this.Ks(t, i, oo);
                a.length > 0 && (s.info("cancel event matched, cancelling items", {
                    event: t,
                    itemsToCancel: a.map((t => t.id))
                }),
                this.na(a.map((t => t.id))),
                a.forEach((t => this.oa(t.id))))
            }
            if (this.Bs.has(t)) {
                s.info("event name matched", {
                    event: t,
                    eventPayload: i,
                    items: this.Bs.get(t)
                });
                var l = this.Ks(t, i, no);
                this.la(l.map((t => t.id)))
            }
        }
        onAction(t) {
            this.Us.has(t) && this.la(this.Us.get(t) || [])
        }
        la(t) {
            var i;
            if (0 !== t.length) {
                var e = !(null == (i = this._instance) || null == i.get_session_id || !i.get_session_id())
                  , r = [];
                for (var s of t)
                    e && this.Ws(s) ? this.sa(s) && this.ua(s) : r.push(s);
                r.length > 0 && (this.js = [...new Set([...this.js, ...r])]),
                this.ia().info("updating activated items", {
                    activatedItems: this.getActivatedIds()
                })
            }
        }
        sa(t) {
            this.js = this.js.filter((i => i !== t));
            var i = this.ha();
            return !i.includes(t) && (this.da([...i, t]),
            this.va(),
            !0)
        }
        na(t) {
            var i = new Set(t);
            this.js = this.js.filter((t => !i.has(t)));
            var e = this.ca()
              , r = e.filter((t => !i.has(t)));
            r.length !== e.length && (this.da(r),
            0 === r.length && this.fa()),
            this.aa(t)
        }
        pa() {
            var t, i = this.Vs();
            if (!i)
                return {};
            var e = null == (t = this._instance) || null == (t = t.persistence) ? void 0 : t.props[i];
            return e && "object" == typeof e ? e : {}
        }
        ua(t) {
            if (this.Vs()) {
                var i = this.pa();
                this.Zs(g({}, i, {
                    [t]: Date.now()
                }))
            }
        }
        aa(t) {
            if (this.Vs()) {
                var i = this.pa()
                  , e = {}
                  , r = !1;
                for (var s of Object.entries(i)) {
                    var n = s[0]
                      , o = s[1];
                    t.includes(n) ? r = !0 : e[n] = o
                }
                r && (G(e) ? this.Gs() : this.Zs(e))
            }
        }
        ga() {
            this.Vs() && this.Gs()
        }
        getActivationTimestamp(t) {
            if (this.ha().includes(t)) {
                var i = this.pa()[t];
                return Z(i) ? i : void 0
            }
        }
        ca() {
            var t, i = this.ma();
            return (null == (t = this._instance) || null == (t = t.persistence) ? void 0 : t.props[i]) || []
        }
        ha() {
            var t, i, e = this.ca();
            if (0 === e.length)
                return [];
            var r = null == (t = this._instance) || null == (t = t.persistence) ? void 0 : t.props[this.ya()]
              , s = null == (i = this._instance) || null == i.get_session_id ? void 0 : i.get_session_id();
            return s && r === s ? e : []
        }
        va() {
            var t, i = null == (t = this._instance) || null == t.get_session_id ? void 0 : t.get_session_id();
            i && this.ba(i)
        }
        fa() {
            this._a()
        }
        zs(t) {
            var i, e = null == (i = this._instance) || null == (i = i.persistence) ? void 0 : i.props[this.ya()];
            if (e && e !== t) {
                var r = this.ca()
                  , s = this.pa();
                r.length > 0 && (this.da([]),
                r.filter((t => Z(s[t]))).forEach((t => this.oa(t)))),
                this.fa(),
                this.ga()
            }
        }
        getActivatedIds() {
            return [...new Set([...this.ha(), ...this.js])].filter((t => !this.wa(t)))
        }
        reset() {
            this.js = [],
            this.ca().length > 0 && this.da([]),
            this.fa(),
            this.ga()
        }
        getEventToItemsMap() {
            return this.Bs
        }
        ka() {
            return this.ea
        }
    }
    class Il extends Ml {
        constructor(t) {
            super(t)
        }
        ma() {
            return lr
        }
        ya() {
            return hr
        }
        Vs() {
            return ur
        }
        Zs(t) {
            var i;
            null == (i = this._instance) || null == (i = i.persistence) || i.register({
                [ur]: t
            })
        }
        Gs() {
            var t;
            null == (t = this._instance) || null == (t = t.persistence) || t.unregister(ur)
        }
        Ws(t) {
            var i, e;
            this.Ys((i => {
                e = i.find((i => i.id === t))
            }
            ));
            var r = null == (i = e) || null == (i = i.appearance) ? void 0 : i.surveyPopupDelaySeconds;
            return Z(r) && r > 0
        }
        xa() {
            return ao
        }
        Ys(t) {
            var i;
            null == (i = this._instance) || i.getSurveys(t)
        }
        oa(t) {
            var i;
            null == (i = this._instance) || i.cancelPendingSurvey(t)
        }
        ia() {
            return Ia
        }
        da(t) {
            var i;
            null == (i = this._instance) || null == (i = i.persistence) || i.register({
                [lr]: t
            })
        }
        ba(t) {
            var i;
            null == (i = this._instance) || null == (i = i.persistence) || i.register({
                [hr]: t
            })
        }
        _a() {
            var t;
            null == (t = this._instance) || null == (t = t.persistence) || t.unregister(hr)
        }
        wa() {
            return !1
        }
        ra(t, i) {
            var e;
            this.Ys((t => {
                e = t.find((t => t.id === i))
            }
            ));
            var r = !e || function(t) {
                var i;
                return Ma(t) && !(null == (i = t.conditions) || null == (i = i.events) || !i.repeatedActivation) || "always" === t.schedule
            }(e);
            return r ? t === ao ? "consume" : "ignore" : t === ao ? "persist" : t === lo || t === ho ? "consume" : "ignore"
        }
        getSurveys() {
            return this.getActivatedIds()
        }
        getEventToSurveys() {
            return this.getEventToItemsMap()
        }
    }
    var Al = "SDK is not enabled or survey functionality is not yet loaded"
      , Ol = "Disabled. Not loading surveys."
      , Dl = null != t && t.location ? Mn(t.location.hash, "__posthog") || Mn(location.hash, "state") : null
      , jl = "_postHogToolbarParams"
      , Ll = ye("[Toolbar]")
      , Nl = ye("[FeatureFlags]");
    class Bl {
        constructor(t, i) {
            void 0 === i && (i = !1),
            this.Sa = !1,
            this.update(t, i)
        }
        update(t, i) {
            this.Ca = ( (t, i) => {
                var e, r, s, n;
                return {
                    bootstrap: {
                        featureFlags: null == (e = t.bootstrap) ? void 0 : e.featureFlags,
                        featureFlagPayloads: null == (r = t.bootstrap) ? void 0 : r.featureFlagPayloads
                    },
                    remoteRequestsDisabled: i,
                    featureFlagsDisabled: !!t.advanced_disable_feature_flags,
                    onlyEvaluateSurveyFeatureFlags: !!t.advanced_only_evaluate_survey_feature_flags,
                    deduplicateCallsPerSession: !!t.advanced_feature_flags_dedup_per_session,
                    cacheTtlMs: t.feature_flag_cache_ttl_ms,
                    requestTimeoutMs: t.feature_flag_request_timeout_ms,
                    compression: t.disable_compression ? "none" : "base64",
                    evaluationContexts: null !== (s = null !== (n = t.evaluation_contexts) && void 0 !== n ? n : t.evaluation_environments) && void 0 !== s ? s : [],
                    flagKeys: H(t.flag_keys) ? t.flag_keys : void 0
                }
            }
            )(t, i),
            !t.evaluation_environments || t.evaluation_contexts || this.Sa || (Nl.warn("evaluation_environments is deprecated. Use evaluation_contexts instead. evaluation_environments will be removed in a future version."),
            this.Sa = !0),
            J(t.flag_keys) || H(t.flag_keys) || Nl.error("Invalid flag_keys found:", t.flag_keys, "Expected array of non-empty strings")
        }
        get() {
            return this.Ca
        }
    }
    var zl = ye("[FeatureFlags]")
      , Ul = ye("[FeatureFlags]", {
        debugEnabled: !0
    })
      , ql = "\" failed. Feature flags didn't load in time."
      , Hl = "connection_error"
      , Vl = t => {
        for (var i = {}, e = 0; t.length > e; e++)
            i[t[e]] = !0;
        return i
    }
      , Wl = t => {
        var i = {};
        for (var e of qr(t || {})) {
            var r = e[1];
            r && (i[e[0]] = r)
        }
        return i
    }
      , Gl = ye("[Error tracking]")
      , Jl = "Refusing to render web experiment since the viewer is a likely bot"
      , Kl = {
        icontains: (t, i) => i.toLowerCase().indexOf(t.toLowerCase()) > -1,
        not_icontains: (t, i) => -1 === i.toLowerCase().indexOf(t.toLowerCase()),
        regex: (t, i) => xa(i, t),
        not_regex: (t, i) => !xa(i, t),
        exact: (t, i) => i === t,
        is_not: (t, i) => i !== t
    };
    class Yl {
        get qe() {
            return this._instance.config
        }
        constructor(t) {
            var i = this;
            this.getWebExperimentsAndEvaluateDisplayLogic = function(t) {
                void 0 === t && (t = !1),
                i.getWebExperiments((t => {
                    Yl.Ma("retrieved web experiments from the server"),
                    i.Ta = new Map,
                    t.forEach((t => {
                        if (t.feature_flag_key) {
                            var e;
                            i.Ta && (Yl.Ma("setting flag key ", t.feature_flag_key, " to web experiment ", t),
                            null == (e = i.Ta) || e.set(t.feature_flag_key, t));
                            var r = i._instance.getFeatureFlag(t.feature_flag_key);
                            K(r) && t.variants[r] && i.Ea(t.name, r, t.variants[r].transforms)
                        } else if (t.variants)
                            for (var s in t.variants) {
                                var n = t.variants[s];
                                Yl.Ia(n, i._instance) && i.Ea(t.name, s, n.transforms)
                            }
                    }
                    ))
                }
                ), t)
            }
            ,
            this._instance = t,
            this._instance.onFeatureFlags((t => {
                this.onFeatureFlags(t)
            }
            ))
        }
        initialize() {}
        onFeatureFlags(t) {
            if (this._is_bot())
                Yl.Ma(Jl);
            else if (!this.qe.disable_web_experiments) {
                if (X(this.Ta))
                    return this.Ta = new Map,
                    this.loadIfEnabled(),
                    void this.previewWebExperiment();
                Yl.Ma("applying feature flags", t),
                t.forEach((t => {
                    var i;
                    if (this.Ta && null != (i = this.Ta) && i.has(t)) {
                        var e, r = this._instance.getFeatureFlag(t), s = null == (e = this.Ta) ? void 0 : e.get(t);
                        r && null != s && s.variants[r] && this.Ea(s.name, r, s.variants[r].transforms)
                    }
                }
                ))
            }
        }
        previewWebExperiment() {
            var t = Yl.getWindowLocation();
            if (null != t && t.search) {
                var i = Rn(null == t ? void 0 : t.search, "__experiment_id")
                  , e = Rn(null == t ? void 0 : t.search, "__experiment_variant");
                i && e && (Yl.Ma("previewing web experiments " + i + " && " + e),
                this.getWebExperiments((t => {
                    this.Pa(parseInt(i), e, t)
                }
                ), !1, !0))
            }
        }
        loadIfEnabled() {
            this.qe.disable_web_experiments || this.getWebExperimentsAndEvaluateDisplayLogic()
        }
        getWebExperiments(t, i, e) {
            if (this.qe.disable_web_experiments && !e)
                return t([]);
            var r = this._instance.get_property("$web_experiments");
            if (r && !i)
                return t(r);
            this._instance._send_request({
                url: this._instance.requestRouter.endpointFor("api", "/api/web_experiments/?token=" + this.qe.token),
                method: "GET",
                timestampMode: "query",
                callback: i => t(200 === i.statusCode && i.json && i.json.experiments || [])
            })
        }
        Pa(t, i, e) {
            var r = e.filter((i => i.id === t));
            r && r.length > 0 && (Yl.Ma("Previewing web experiment [" + r[0].name + "] with variant [" + i + "]"),
            this.Ea(r[0].name, i, r[0].variants[i].transforms))
        }
        static Ia(t, i) {
            return !X(t.conditions) && Yl.Ra(t, i) && Yl.Aa(t)
        }
        static Ra(t, i) {
            var e;
            if (X(t.conditions) || X(null == (e = t.conditions) ? void 0 : e.url))
                return !0;
            var r = Yl.getWindowLocation();
            if (r) {
                var s, n, o, a = Es(i, r.href);
                return null == (s = t.conditions) || !s.url || Kl[null !== (n = null == (o = t.conditions) ? void 0 : o.urlMatchType) && void 0 !== n ? n : "icontains"](t.conditions.url, a)
            }
            return !1
        }
        static getWindowLocation() {
            return null == t ? void 0 : t.location
        }
        static Aa(t) {
            var i;
            if (X(t.conditions) || X(null == (i = t.conditions) ? void 0 : i.utm))
                return !0;
            var e = Bn();
            if (e.utm_source) {
                var r, s, n, o, a, l, h, u, d = null == (r = t.conditions) || null == (r = r.utm) || !r.utm_campaign || (null == (s = t.conditions) || null == (s = s.utm) ? void 0 : s.utm_campaign) == e.utm_campaign, v = null == (n = t.conditions) || null == (n = n.utm) || !n.utm_source || (null == (o = t.conditions) || null == (o = o.utm) ? void 0 : o.utm_source) == e.utm_source, c = null == (a = t.conditions) || null == (a = a.utm) || !a.utm_medium || (null == (l = t.conditions) || null == (l = l.utm) ? void 0 : l.utm_medium) == e.utm_medium, f = null == (h = t.conditions) || null == (h = h.utm) || !h.utm_term || (null == (u = t.conditions) || null == (u = u.utm) ? void 0 : u.utm_term) == e.utm_term;
                return d && c && f && v
            }
            return !1
        }
        static Ma(t) {
            for (var i = arguments.length, e = new Array(i > 1 ? i - 1 : 0), r = 1; i > r; r++)
                e[r - 1] = arguments[r];
            me.info("[WebExperiments] " + t, e)
        }
        Ea(t, i, e) {
            this._is_bot() ? Yl.Ma(Jl) : "control" !== i ? e.forEach((e => {
                if (e.selector) {
                    var r;
                    Yl.Ma("applying transform of variant " + i + " for experiment " + t + " ", e);
                    var s = null == (r = document) ? void 0 : r.querySelectorAll(e.selector);
                    null == s || s.forEach((t => {
                        var i = t;
                        e.html && (i.innerHTML = e.html),
                        e.css && i.setAttribute("style", e.css)
                    }
                    ))
                }
            }
            )) : Yl.Ma("Control variants leave the page unmodified.")
        }
        _is_bot() {
            return e && this._instance ? ba(e, this.qe.custom_blocked_useragents) : void 0
        }
    }
    var Ql = ye("[Conversations]")
      , Xl = "Conversations not available yet."
      , Zl = "console"
      , th = "__posthogHandledLogsRequestError"
      , ih = (t, i) => {
        var e = t instanceof Error ? t : new Error(i);
        return e[th] = !0,
        e
    }
      , eh = t => !!t && "object" == typeof t && !0 === t[th]
      , rh = {
        featureFlags: class {
            constructor(t) {
                this.name = "featureFlags",
                this.Fa = !1,
                this.featureFlagEventHandlers = [],
                this.st = zl,
                this.Oa = {},
                this.La = {},
                this.Da = [],
                this.$a = !1,
                this.Na = !1,
                this.qa = 0,
                this.ja = !1,
                this.Ba = !1,
                this.Ha = !1,
                this.Ua = !1,
                this.za = 0,
                this.Wa = () => {
                    var t = this.Va();
                    this.za = 0,
                    t && this.reloadFeatureFlags()
                }
                ,
                "get"in t ? this.Za = t : (this.Ga = new Bl(t.config,t.hr()),
                this.Za = this.Ga)
            }
            updateConfig(t, i) {
                var e;
                null == (e = this.Ga) || e.update(t, i)
            }
            setup(t) {
                return this.Qa = t,
                this.st = t.logger.createLogger("[FeatureFlags]"),
                e = () => {
                    this.Qa === t && (this.Qa = void 0,
                    this.Sn = t,
                    this.Ja(t))
                }
                ,
                null != (i = t.kv.initialize()) && i.then ? i.then(e) : e();
                var i, e
            }
            Ja(i) {
                if (this.Sn === i)
                    return t && Kr(t, "online", this.Wa),
                    this.Ka = i.registerDynamicEventProperties(( () => this.Ya() ? this.Oa : this.La)),
                    this.Xa(),
                    this.initialize()
            }
            destroy() {
                null == t || t.removeEventListener("online", this.Wa)
            }
            dispose() {
                var i;
                this.qa++,
                this.Ba = !1,
                this.Qa = void 0,
                this.Sn && (this.eo(),
                null == (i = this.Ka) || i.dispose(),
                this.Ka = void 0,
                this.Da = [],
                null == t || t.removeEventListener("online", this.Wa),
                this.Sn = void 0)
            }
            get qe() {
                return this.Za.get()
            }
            io(t) {
                var i;
                return null == (i = this.Sn) ? void 0 : i.kv.get(t)
            }
            F(t) {
                this.ro(( () => {
                    var i;
                    return null == (i = this.Sn) ? void 0 : i.kv.set(t)
                }
                ))
            }
            q(t) {
                this.ro(( () => {
                    var i;
                    return null == (i = this.Sn) ? void 0 : i.kv.remove(t)
                }
                ))
            }
            ro(t) {
                try {
                    t()
                } catch (t) {
                    this.st.error("Failed to update feature flag persistence", t)
                }
            }
            Xa() {
                var t = {};
                for (var i of [Ke, Xe, Ze, ir]) {
                    var e = this.io(i);
                    J(e) || (t[i] = e)
                }
                this.Oa = t;
                var r = g({}, t)
                  , s = this.io(Je);
                if (s)
                    for (var n of Object.entries(s))
                        r["$feature/" + n[0]] = n[1];
                this.La = r
            }
            Ya() {
                var t = this.qe.cacheTtlMs;
                if (!t || 0 >= t)
                    return !1;
                var i = this.io(pr);
                return "number" != typeof i || Date.now() - i > t
            }
            no() {
                return !!this.Ya() && (this.Ua || this.Na || (this.Ua = !0,
                this.st.warn("Feature flag cache is stale, triggering refresh..."),
                this.reloadFeatureFlags()),
                !0)
            }
            so() {
                var t = this.qe.evaluationContexts;
                return null != t && t.length ? t.filter((t => {
                    var i = t && "string" == typeof t && t.trim().length > 0;
                    return i || this.st.error("Invalid evaluation context found:", t, "Expected non-empty string"),
                    i
                }
                )) : []
            }
            ao() {
                var t = this.qe.flagKeys;
                if (!J(t))
                    return t.filter((t => {
                        var i = t && "string" == typeof t && t.trim().length > 0;
                        return i || this.st.error("Invalid flag key found:", t, "Expected non-empty string"),
                        i
                    }
                    ))
            }
            initialize() {
                var t, i, e = this.qe, r = null !== (t = null == (i = e.bootstrap) ? void 0 : i.featureFlags) && void 0 !== t ? t : {};
                if (Object.keys(r).length) {
                    var s, n, o = null !== (s = null == (n = e.bootstrap) ? void 0 : n.featureFlagPayloads) && void 0 !== s ? s : {}, a = Object.keys(r).filter((t => !!r[t])).reduce(( (t, i) => (t[i] = r[i] || !1,
                    t)), {}), l = Object.keys(o).filter((t => a[t])).reduce(( (t, i) => (t[i] = o[i],
                    t)), {});
                    return this.oo({
                        featureFlags: a,
                        featureFlagPayloads: l
                    })
                }
            }
            updateFlags(t, i, e) {
                var r, s, n = null != e && e.merge && null !== (r = this.io(Je)) && void 0 !== r ? r : {}, o = null != e && e.merge && null !== (s = this.io(Xe)) && void 0 !== s ? s : {}, a = g({}, n, t), l = g({}, o, i), h = {};
                for (var u of Object.entries(a)) {
                    var d = u[0]
                      , v = u[1];
                    h[d] = {
                        key: d,
                        enabled: y(v),
                        variant: b(v),
                        reason: void 0,
                        metadata: J(null == l ? void 0 : l[d]) ? void 0 : {
                            id: 0,
                            version: void 0,
                            description: void 0,
                            payload: l[d]
                        }
                    }
                }
                this.oo({
                    flags: h
                })
            }
            get hasLoadedFlags() {
                return this.$a
            }
            getFlags() {
                return Object.keys(this.getFlagVariants())
            }
            getFlagsWithDetails() {
                var t = this.io(Qe)
                  , i = this.io(ir)
                  , e = this.io(er);
                if (!e && !i)
                    return t || {};
                var r = Ur({}, t || {})
                  , s = [...new Set([...Object.keys(e || {}), ...Object.keys(i || {})])];
                for (var n of s) {
                    var o, a, l = r[n], h = null == i ? void 0 : i[n], u = J(h) ? null !== (o = null == l ? void 0 : l.enabled) && void 0 !== o && o : !!h, d = J(h) ? null == l ? void 0 : l.variant : "string" == typeof h ? h : void 0, v = null == e ? void 0 : e[n], c = g({}, l, {
                        enabled: u,
                        variant: u ? null != d ? d : null == l ? void 0 : l.variant : void 0
                    });
                    u !== (null == l ? void 0 : l.enabled) && (c.original_enabled = null == l ? void 0 : l.enabled),
                    d !== (null == l ? void 0 : l.variant) && (c.original_variant = null == l ? void 0 : l.variant),
                    v && (c.metadata = g({}, null == l ? void 0 : l.metadata, {
                        payload: v,
                        original_payload: null == l || null == (a = l.metadata) ? void 0 : a.payload
                    })),
                    r[n] = c
                }
                return this.Fa || (this.st.warn(" Overriding feature flag details!", {
                    flagDetails: t,
                    overriddenPayloads: e,
                    finalDetails: r
                }),
                this.Fa = !0),
                r
            }
            getAllFeatureFlags() {
                var t = this.getFlagVariants()
                  , i = this.getFlagPayloads();
                return Object.keys(t).map((e => {
                    var r = t[e];
                    return {
                        key: e,
                        enabled: y(r),
                        variant: b(r),
                        payload: m(i[e])
                    }
                }
                ))
            }
            getFlagVariants() {
                var t = this.io(Je)
                  , i = this.io(ir);
                if (!i)
                    return t || {};
                for (var e = Ur({}, t || {}), r = Object.keys(i), s = 0; r.length > s; s++)
                    e[r[s]] = i[r[s]];
                return this.Fa || (this.st.warn(" Overriding feature flags!", {
                    enabledFlags: t,
                    overriddenFlags: i,
                    finalFlags: e
                }),
                this.Fa = !0),
                e
            }
            getFlagPayloads() {
                var t = this.io(Xe)
                  , i = this.io(er);
                if (!i)
                    return t || {};
                for (var e = Ur({}, t || {}), r = Object.keys(i), s = 0; r.length > s; s++)
                    e[r[s]] = i[r[s]];
                return this.Fa || (this.st.warn(" Overriding feature flag payloads!", {
                    flagPayloads: t,
                    overriddenPayloads: i,
                    finalPayloads: e
                }),
                this.Fa = !0),
                e
            }
            reloadFeatureFlags() {
                this.ja || this.qe.featureFlagsDisabled || this.Va() || this.lo || (this.Da.slice().forEach((t => {
                    try {
                        t()
                    } catch (t) {
                        this.st.error("Error while running feature flags reloading callback", t)
                    }
                }
                )),
                this.lo = setTimeout(( () => {
                    this.uo()
                }
                ), 5))
            }
            eo() {
                clearTimeout(this.lo),
                this.lo = void 0
            }
            onReloading(t) {
                return this.Da.push(t),
                () => {
                    this.Da = this.Da.filter((i => i !== t))
                }
            }
            ensureFlagsLoaded() {
                this.$a || this.Na || this.lo || this.reloadFeatureFlags()
            }
            setAnonymousDistinctId(t) {
                this.$anon_distinct_id = t
            }
            setReloadingPaused(t) {
                this.ja = t
            }
            resetFlagCallReported() {
                this.q(vr)
            }
            uo(t) {
                this.eo();
                var i = this.Sn;
                if (i && !this.qe.remoteRequestsDisabled && !this.Va())
                    if (this.Na)
                        this.Ba = !0;
                    else {
                        var e = {
                            token: i.projectToken,
                            distinct_id: i.distinctId,
                            groups: i.groups,
                            $anon_distinct_id: this.$anon_distinct_id,
                            person_properties: g({}, i.initialPersonProperties, this.io(rr) || {}, {
                                $lib: i.library.name,
                                $lib_version: i.library.version
                            }),
                            group_properties: this.io(sr),
                            timezone: Jn()
                        };
                        J(i.deviceId) || (e.$device_id = i.deviceId),
                        (null != t && t.disableFlags || this.qe.featureFlagsDisabled) && (e.disable_flags = !0);
                        var r = this.so();
                        r.length && (e.evaluation_contexts = r);
                        var s = this.ao();
                        J(s) || (e.flag_keys = s);
                        var n = this.qe.onlyEvaluateSurveyFeatureFlags
                          , o = "/flags/?v=2" + (n ? "&only_evaluate_survey_feature_flags=true" : "")
                          , a = this.qa;
                        this.Na = !0;
                        var l = () => {
                            this.Ba && (this.Ba = !1,
                            this.uo())
                        }
                          , h = t => {
                            this.Na = !1,
                            a === this.qa ? (this.F({
                                [fr]: [Hl]
                            }),
                            this.st.error("Feature flag request failed", t),
                            l()) : l()
                        }
                        ;
                        try {
                            i.sendRequest(o, {
                                target: "flags",
                                method: "POST",
                                body: e,
                                compression: "base64" === this.qe.compression ? so : void 0,
                                sentAt: "body",
                                timeoutMs: this.qe.requestTimeoutMs
                            }).then((t => {
                                var i, r, s = null !== (i = t.json) && void 0 !== i ? i : {}, o = 200 !== t.statusCode;
                                if (this.Na = !1,
                                a === this.qa) {
                                    if (this.ho(t.statusCode),
                                    o || this.Ba || (this.$anon_distinct_id = void 0),
                                    !e.disable_flags || this.Ba) {
                                        this.Ha = !o;
                                        var h = [];
                                        t.error ? h.push(t.error instanceof Error && "AbortError" === t.error.name ? "timeout" : t.error instanceof Error ? Hl : "unknown_error") : 200 !== t.statusCode && h.push("api_error_" + t.statusCode),
                                        s.errorsWhileComputingFlags && h.push("errors_while_computing_flags");
                                        var u = !(null == (r = s.quotaLimited) || !r.includes("feature_flags"));
                                        u && h.push("quota_limited"),
                                        this.F({
                                            [fr]: h
                                        }),
                                        u ? this.st.warn("You have hit your feature flags quota limit, and will not be able to load feature flags until the quota is reset.  Please visit https://posthog.com/docs/billing/limits-alerts to learn more.") : e.disable_flags || this.oo(s, o, {
                                            partialResponse: n
                                        }),
                                        l()
                                    }
                                } else
                                    l()
                            }
                            )).catch(h)
                        } catch (t) {
                            h(t)
                        }
                    }
            }
            Va() {
                return In(this.za, 3)
            }
            ho(t) {
                this.za = An(t, this.za, 3, ( () => this.st.warn("Feature flag requests are failing before receiving an HTTP response; this can happen due to network issues, CORS, browser blocking, or ad blockers. Stopped refreshing feature flags; will try again when connectivity changes.")))
            }
            getFeatureFlag(t, i) {
                var e;
                if (void 0 === i && (i = {}),
                !i.fresh || this.Ha)
                    if (this.$a || this.getFlags() && this.getFlags().length > 0) {
                        if (!this.no()) {
                            var r = this.getFeatureFlagResult(t, i);
                            return null !== (e = null == r ? void 0 : r.variant) && void 0 !== e ? e : null == r ? void 0 : r.enabled
                        }
                    } else
                        this.st.warn('getFeatureFlag for key "' + t + ql)
            }
            getFeatureFlagDetails(t) {
                return this.getFlagsWithDetails()[t]
            }
            getFeatureFlagPayload(t) {
                var i = this.getFeatureFlagResult(t, {
                    send_event: !1
                });
                return null == i ? void 0 : i.payload
            }
            getFeatureFlagResult(t, i) {
                if (void 0 === i && (i = {}),
                !i.fresh || this.Ha)
                    if (this.$a || this.getFlags() && this.getFlags().length > 0) {
                        if (!this.no()) {
                            var e, r = this.getFlagVariants(), s = t in r, n = r[t], o = this.getFlagPayloads()[t], a = String(n), l = this.io(Ze) || void 0, h = this.io(pr) || void 0, u = this.io(vr) || {};
                            if (this.qe.deduplicateCallsPerSession) {
                                var d, v = null == (d = this.Sn) ? void 0 : d.session.sessionId, c = this.io(cr);
                                v && v !== c && (u = {},
                                e = v)
                            }
                            if (i.send_event || !("send_event"in i))
                                if (t in u && u[t].includes(a))
                                    e && this.F({
                                        [vr]: u,
                                        [cr]: e
                                    });
                                else {
                                    var f, p, _, y, b, w, x, S, k, E, P, T;
                                    H(u[t]) ? u[t].push(a) : u[t] = [a],
                                    this.F(g({
                                        [vr]: u
                                    }, e ? {
                                        [cr]: e
                                    } : {}));
                                    var F = this.getFeatureFlagDetails(t)
                                      , R = [...null !== (f = this.io(fr)) && void 0 !== f ? f : []];
                                    J(n) && R.push("flag_missing");
                                    var C = {
                                        $feature_flag: t,
                                        $feature_flag_response: n,
                                        $feature_flag_payload: null != o ? o : null,
                                        $feature_flag_request_id: l,
                                        $feature_flag_evaluated_at: h,
                                        $feature_flag_bootstrapped_response: null !== (p = null == (_ = this.qe.bootstrap) || null == (_ = _.featureFlags) ? void 0 : _[t]) && void 0 !== p ? p : null,
                                        $feature_flag_bootstrapped_payload: null !== (y = null == (b = this.qe.bootstrap) || null == (b = b.featureFlagPayloads) ? void 0 : b[t]) && void 0 !== y ? y : null,
                                        $used_bootstrap_value: !this.Ha
                                    };
                                    J(null == F || null == (w = F.metadata) ? void 0 : w.has_experiment) || (C.$feature_flag_has_experiment = F.metadata.has_experiment),
                                    J(null == F || null == (x = F.metadata) ? void 0 : x.version) || (C.$feature_flag_version = F.metadata.version);
                                    var M, I = null !== (S = null == F || null == (k = F.reason) ? void 0 : k.description) && void 0 !== S ? S : null == F || null == (E = F.reason) ? void 0 : E.code;
                                    I && (C.$feature_flag_reason = I),
                                    null != F && null != (P = F.metadata) && P.id && (C.$feature_flag_id = F.metadata.id),
                                    J(null == F ? void 0 : F.original_variant) && J(null == F ? void 0 : F.original_enabled) || (C.$feature_flag_original_response = J(F.original_variant) ? F.original_enabled : F.original_variant),
                                    null != F && null != (T = F.metadata) && T.original_payload && (C.$feature_flag_original_payload = null == F || null == (M = F.metadata) ? void 0 : M.original_payload),
                                    R.length && (C.$feature_flag_error = R.join(",")),
                                    this.do(C)
                                }
                            else
                                e && this.F({
                                    [vr]: u,
                                    [cr]: e
                                });
                            if (s)
                                return {
                                    key: t,
                                    enabled: !!n,
                                    variant: "string" == typeof n ? n : void 0,
                                    payload: m(o)
                                }
                        }
                    } else
                        this.st.warn('getFeatureFlagResult for key "' + t + ql)
            }
            do(t) {
                try {
                    var i;
                    null == (i = this.Sn) || i.capture("$feature_flag_called", t).catch((t => {
                        this.st.error("Failed to capture feature flag call", t)
                    }
                    ))
                } catch (t) {
                    this.st.error("Failed to capture feature flag call", t)
                }
            }
            getRemoteConfigPayload(t, i) {
                this.vo(t, i)
            }
            vo(t, i) {
                var e = this;
                return p((function*() {
                    var r = e.Sn;
                    if (r) {
                        var s = {
                            distinct_id: r.distinctId,
                            token: r.projectToken,
                            person_properties: {
                                $lib: r.library.name,
                                $lib_version: r.library.version
                            }
                        }
                          , n = e.so();
                        n.length && (s.evaluation_contexts = n);
                        var o, a = e.ao();
                        J(a) || (s.flag_keys = a);
                        try {
                            var l, h = null == (l = (yield r.sendRequest("/flags/?v=2", {
                                target: "flags",
                                method: "POST",
                                body: s,
                                compression: "base64" === e.qe.compression ? so : void 0,
                                sentAt: "body",
                                timeoutMs: e.qe.requestTimeoutMs
                            })).json) ? void 0 : l.featureFlagPayloads;
                            o = (null == h ? void 0 : h[t]) || void 0
                        } catch (t) {
                            return void e.st.error("Remote config feature flag request failed", t)
                        }
                        try {
                            i(o)
                        } catch (t) {
                            e.st.error("Remote config feature flag callback failed", t)
                        }
                    }
                }
                ))()
            }
            isFeatureEnabled(t, i) {
                if (void 0 === i && (i = {}),
                i.fresh && !this.Ha)
                    return i.defaultValue;
                if (!(this.$a || this.getFlags() && this.getFlags().length > 0))
                    return this.st.warn('isFeatureEnabled for key "' + t + ql),
                    i.defaultValue;
                var e = this.getFeatureFlag(t, i);
                return J(e) ? i.defaultValue : !!e
            }
            addFeatureFlagsHandler(t) {
                this.featureFlagEventHandlers.push(t)
            }
            removeFeatureFlagsHandler(t) {
                this.featureFlagEventHandlers = this.featureFlagEventHandlers.filter((i => i !== t))
            }
            receivedFeatureFlags(t, i, e) {
                this.oo(t, i, e)
            }
            oo(t, i, e) {
                if (this.Sn) {
                    this.$a = !0;
                    var r = function(t, i, e, r, s, n) {
                        void 0 === i && (i = {}),
                        void 0 === e && (e = {}),
                        void 0 === r && (r = {}),
                        void 0 === n && (n = zl);
                        var o = ( (t, i) => {
                            var e = t.flags;
                            return e ? g({}, t, {
                                featureFlags: Object.fromEntries(Object.keys(e).map((t => {
                                    var i;
                                    return [t, null !== (i = e[t].variant) && void 0 !== i ? i : e[t].enabled]
                                }
                                ))),
                                featureFlagPayloads: Object.fromEntries(Object.keys(e).filter((t => e[t].enabled)).filter((t => {
                                    var i;
                                    return null == (i = e[t].metadata) ? void 0 : i.payload
                                }
                                )).map((t => {
                                    var i;
                                    return [t, null == (i = e[t].metadata) ? void 0 : i.payload]
                                }
                                )))
                            }) : (t.featureFlags && i.warn("Using an older version of the feature flags endpoint. Please upgrade your PostHog server to the latest version"),
                            t)
                        }
                        )(t, n)
                          , a = o.flags
                          , l = o.featureFlags
                          , h = o.featureFlagPayloads;
                        if (l) {
                            var u = t.requestId
                              , d = t.evaluatedAt;
                            if (H(l)) {
                                n.warn("v1 of the feature flags endpoint is deprecated. Please use the latest version.");
                                var v = {};
                                if (l)
                                    for (var c = 0; l.length > c; c++)
                                        v[l[c]] = !0;
                                return {
                                    [Ke]: l,
                                    [Je]: v,
                                    [tr]: !1
                                }
                            }
                            var f = l
                              , p = h
                              , _ = a;
                            if (null != s && s.partialResponse)
                                f = g({}, i, f),
                                p = g({}, e, p),
                                _ = g({}, r, _);
                            else if (t.errorsWhileComputingFlags)
                                if (a) {
                                    var m = new Set(Object.keys(a).filter((t => {
                                        var i;
                                        return !(null != (i = a[t]) && i.failed)
                                    }
                                    )));
                                    f = g({}, i, Object.fromEntries(Object.entries(f).filter((t => m.has(t[0]))))),
                                    p = g({}, e, Object.fromEntries(Object.entries(p || {}).filter((t => m.has(t[0]))))),
                                    _ = g({}, r, Object.fromEntries(Object.entries(_ || {}).filter((t => m.has(t[0])))))
                                } else
                                    f = g({}, i, f),
                                    p = g({}, e, p),
                                    _ = g({}, r, _);
                            return g({
                                [Ke]: Object.keys(Wl(f)),
                                [Je]: f || {},
                                [Xe]: p || {},
                                [Qe]: _ || {},
                                [tr]: !0 === t.minimalFlagCalledEvents
                            }, u ? {
                                [Ze]: u
                            } : {}, d ? {
                                [pr]: d
                            } : {})
                        }
                    }(t, this.getFlagVariants(), this.getFlagPayloads(), this.getFlagsWithDetails(), e, this.st);
                    r && this.F(r),
                    i || (this.Ua = !1),
                    this.co(i)
                }
            }
            override(t, i) {
                void 0 === i && (i = !1),
                this.st.warn("override is deprecated. Please use overrideFeatureFlags instead."),
                this.overrideFeatureFlags({
                    flags: t,
                    suppressWarning: i
                })
            }
            overrideFeatureFlags(t) {
                this.fo(t)
            }
            fo(t) {
                if (this.Sn) {
                    if (!1 === t)
                        return this.q([ir, er]),
                        this.co(),
                        void Ul.info("All overrides cleared");
                    if (H(t))
                        return this.F({
                            [ir]: Vl(t)
                        }),
                        this.co(),
                        void Ul.info("Flag overrides set", {
                            flags: t
                        });
                    if (t && "object" == typeof t && ("flags"in t || "payloads"in t)) {
                        var i, e = t;
                        this.Fa = Boolean(null !== (i = e.suppressWarning) && void 0 !== i && i);
                        var r = {}
                          , s = e.flags
                          , n = e.payloads;
                        return s && (r[ir] = H(s) ? Vl(s) : s),
                        n && (r[er] = n),
                        Object.keys(r).length && this.F(r),
                        !1 === s && !1 === n ? this.q([ir, er]) : !1 === s ? this.q(ir) : !1 === n && this.q(er),
                        this.co(),
                        !1 === s ? Ul.info("Flag overrides cleared") : s && Ul.info("Flag overrides set", {
                            flags: s
                        }),
                        void (!1 === n ? Ul.info("Payload overrides cleared") : n && Ul.info("Payload overrides set", {
                            payloads: n
                        }))
                    }
                    if (t && "object" == typeof t)
                        return this.F({
                            [ir]: t
                        }),
                        this.co(),
                        void Ul.info("Flag overrides set", {
                            flags: t
                        });
                    this.st.warn("Invalid overrideOptions provided to overrideFeatureFlags", {
                        overrideOptions: t
                    })
                } else
                    this.st.warn("posthog.featureFlags.overrideFeatureFlags called before feature flags were ready")
            }
            onFeatureFlags(t) {
                if (this.addFeatureFlagsHandler(t),
                this.$a) {
                    var i = this.po()
                      , e = i.flags
                      , r = i.flagVariants;
                    try {
                        t(e, r)
                    } catch (t) {
                        this.st.error("Error while running feature flags callback", t)
                    }
                }
                return () => this.removeFeatureFlagsHandler(t)
            }
            updateEarlyAccessFeatureEnrollment(t, i, e) {
                var r = (this.io(Ye) || []).find((i => i.flagKey === t))
                  , s = {
                    ["$feature_enrollment/" + t]: i
                }
                  , n = {
                    $feature_flag: t,
                    $feature_enrollment: i,
                    $set: s
                };
                r && (n.$early_access_feature_name = r.name),
                e && (n.$feature_enrollment_stage = e);
                var o = g({}, this.getFlagVariants(), {
                    [t]: i
                });
                this.F({
                    [Ke]: Object.keys(Wl(o)),
                    [Je]: o,
                    [rr]: g({}, this.io(rr) || {}, s)
                }),
                this.co();
                try {
                    var a;
                    null == (a = this.Sn) || a.capture("$feature_enrollment_update", n).catch((t => {
                        this.st.error("Failed to capture early access feature enrollment", t)
                    }
                    ))
                } catch (t) {
                    this.st.error("Failed to capture early access feature enrollment", t)
                }
            }
            getEarlyAccessFeatures(t, i, e) {
                void 0 === i && (i = !1);
                var r = this.io(Ye);
                !r || i ? this.mo(t, e) : t(r)
            }
            mo(t, i) {
                var e = this;
                return p((function*() {
                    var r = e.Sn;
                    if (r) {
                        var s, n = i ? "&" + i.map((t => "stage=" + t)).join("&") : "";
                        try {
                            var o = yield r.sendRequest("/api/early_access_features/?token=" + r.projectToken + n, {
                                target: "api",
                                method: "GET",
                                sentAt: "query"
                            });
                            if (!o.json)
                                return;
                            e.F({
                                [Ye]: s = o.json.earlyAccessFeatures
                            })
                        } catch (t) {
                            return void e.st.error("Early access feature request failed", t)
                        }
                        try {
                            t(s)
                        } catch (t) {
                            e.st.error("Early access feature callback failed", t)
                        }
                    }
                }
                ))()
            }
            po() {
                var t = this.getFlags()
                  , i = this.getFlagVariants();
                return {
                    flags: t.filter((t => i[t])),
                    flagVariants: Object.keys(i).filter((t => i[t])).reduce(( (t, e) => (t[e] = i[e],
                    t)), {})
                }
            }
            co(t) {
                this.Xa();
                var i = this.po()
                  , e = i.flags
                  , r = i.flagVariants;
                this.featureFlagEventHandlers.forEach((i => {
                    try {
                        i(e, r, {
                            errorsLoading: t
                        })
                    } catch (t) {
                        this.st.error("Error while running feature flags callback", t)
                    }
                }
                ))
            }
            setPersonPropertiesForFlags(t, i) {
                void 0 === i && (i = !0),
                this.yo(t, i)
            }
            yo(t, i) {
                void 0 === i && (i = !0);
                var e = this.io(rr) || {}
                  , r = (null == t ? void 0 : t.$set) || (null != t && t.$set_once ? {} : t)
                  , s = null == t ? void 0 : t.$set_once
                  , n = {};
                if (s)
                    for (var o in s)
                        ({}).hasOwnProperty.call(s, o) && (o in e || (n[o] = s[o]));
                this.F({
                    [rr]: g({}, e, n, r)
                }),
                i && this.reloadFeatureFlags()
            }
            unsetPersonPropertiesForFlags(t, i) {
                void 0 === i && (i = !0);
                var e = g({}, this.io(rr) || {});
                t.forEach((t => {
                    delete e[t]
                }
                )),
                this.F({
                    [rr]: e
                }),
                i && this.reloadFeatureFlags()
            }
            resetPersonPropertiesForFlags(t) {
                void 0 === t && (t = !0),
                this.q(rr),
                t && this.reloadFeatureFlags()
            }
            setGroupPropertiesForFlags(t, i) {
                void 0 === i && (i = !0);
                var e = this.io(sr) || {}
                  , r = g({}, e);
                for (var s of Object.keys(t))
                    r[s] = g({}, e[s], t[s]);
                this.F({
                    [sr]: r
                }),
                i && this.reloadFeatureFlags()
            }
            resetGroupPropertiesForFlags(t) {
                if (t) {
                    var i = this.io(sr) || {};
                    this.F({
                        [sr]: g({}, i, {
                            [t]: {}
                        })
                    })
                } else
                    this.q(sr)
            }
            reset() {
                this.qa++,
                this.Ba = !1,
                this.Oa = {},
                this.La = {},
                this.$a = !1,
                this.ja = !1,
                this.Ha = !1,
                this.$anon_distinct_id = void 0,
                this.eo(),
                this.Fa = !1,
                this.za = 0
            }
        }
    }
      , sh = {
        sessionRecording: class {
            get qe() {
                return this._instance.config
            }
            get jr() {
                return this._instance.persistence
            }
            get started() {
                var t;
                return !(null == (t = this.bo) || !t.isStarted)
            }
            get status() {
                var t, i;
                return this._o === yl || this._o === bl ? this._o : null !== (t = null == (i = this.bo) ? void 0 : i.status) && void 0 !== t ? t : this._o
            }
            constructor(i) {
                if (this._forceAllowLocalhostNetworkCapture = !1,
                this._o = _l,
                this.wo = void 0,
                this.ko = !1,
                this.xo = ( () => {
                    var i;
                    if (null == r || !r.visibilityState || "visible" === r.visibilityState)
                        return !0;
                    var e = null == t || null == (i = t.performance) || null == i.getEntriesByType ? void 0 : i.getEntriesByType("visibility-state");
                    return !(null != e && e.length) || e.some((t => "visible" === t.name))
                }
                )(),
                this.Ee = () => {
                    var t;
                    "visible" === (null == r ? void 0 : r.visibilityState) && (this.xo = !0,
                    null == (t = this.bo) || null == t.setDocumentWasEverVisible || t.setDocumentWasEverVisible(!0))
                }
                ,
                this._instance = i,
                !this._instance.sessionManager)
                    throw xl.error("started without valid sessionManager"),
                    new Error(wl + " started without valid sessionManager. This is a bug.");
                if (this.qe.cookieless_mode === Rr)
                    throw new Error(wl + ' cannot be used with cookieless_mode="always"');
                null != r && r.addEventListener && Kr(r, "visibilitychange", this.Ee)
            }
            initialize() {
                this.startIfEnabledOrStop()
            }
            dispose() {
                this.ko = !0,
                null == r || null == r.removeEventListener || r.removeEventListener("visibilitychange", this.Ee),
                this.stopRecording()
            }
            get So() {
                var i, e = !(null == (i = this._instance.get_property(Be)) || !i.enabled), r = !this.qe.disable_session_recording, s = this.qe.disable_session_recording || this._instance.consent.isOptedOut();
                return t && e && r && !s
            }
            startIfEnabledOrStop(t) {
                var i;
                if (!(this.ko || this.So && null != (i = this.bo) && i.isStarted)) {
                    var e = !J(Object.assign) && !J(Array.from);
                    this.So && e ? (this.Co(t),
                    xl.info("starting")) : (this._o = _l,
                    this.stopRecording())
                }
            }
            Co(t) {
                var i, e, r;
                this.So && (this._o !== yl && this._o !== bl && (this._o = ml),
                null != v && null != (i = v.__PosthogExtensions__) && null != (i = i.rrweb) && i.record && null != (e = v.__PosthogExtensions__) && e.initSessionRecording ? this.Mo(t) : null == (r = v.__PosthogExtensions__) || null == r.loadExternalDependency || r.loadExternalDependency(this._instance, this.To, (i => {
                    if (i)
                        return xl.error("could not load recorder", i);
                    this.Mo(t)
                }
                )))
            }
            stopRecording() {
                var t, i;
                null == (t = this.wo) || t.call(this),
                this.wo = void 0,
                null == (i = this.bo) || i.stop()
            }
            Eo() {
                var t, i;
                null == (t = this.wo) || t.call(this),
                this.wo = void 0,
                null == (i = this.bo) || i.discard()
            }
            Io() {
                var t, i;
                null == (t = this.jr) || t.unregister(Ge),
                null == (i = this.jr) || i.unregister(ze)
            }
            Po(t, i) {
                if (X(t))
                    return null;
                var e, r = Z(t) ? t : parseFloat(t);
                return "number" != typeof (e = r) || !Number.isFinite(e) || 0 > e || e > 1 ? (xl.warn(i + " must be between 0 and 1. Ignoring invalid value:", t),
                null) : r
            }
            Ro(t) {
                if (this.jr) {
                    var i, e, r = this.jr, s = () => {
                        var i, e = !1 === t.sessionRecording ? void 0 : t.sessionRecording, s = this.Po(null == (i = this.qe.session_recording) ? void 0 : i.sampleRate, "session_recording.sampleRate"), n = this.Po(null == e ? void 0 : e.sampleRate, "remote config sampleRate"), o = null != s ? s : n;
                        X(o) && this.Io();
                        var a = null == e ? void 0 : e.minimumDurationMilliseconds;
                        r.register({
                            [Be]: g({
                                cache_timestamp: Date.now(),
                                enabled: !!e
                            }, e, {
                                networkPayloadCapture: g({
                                    capturePerformance: t.capturePerformance
                                }, null == e ? void 0 : e.networkPayloadCapture),
                                canvasRecording: {
                                    enabled: null == e ? void 0 : e.recordCanvas,
                                    fps: null == e ? void 0 : e.canvasFps,
                                    quality: null == e ? void 0 : e.canvasQuality
                                },
                                sampleRate: o,
                                minimumDurationMilliseconds: J(a) ? null : a,
                                endpoint: null == e ? void 0 : e.endpoint,
                                triggerMatchType: null == e ? void 0 : e.triggerMatchType,
                                masking: null == e ? void 0 : e.masking,
                                urlTriggers: null == e ? void 0 : e.urlTriggers,
                                version: null == e ? void 0 : e.version,
                                triggerGroups: null == e ? void 0 : e.triggerGroups
                            })
                        })
                    }
                    ;
                    s(),
                    null == (i = this.wo) || i.call(this),
                    this.wo = null == (e = this._instance.sessionManager) ? void 0 : e.onSessionId(s)
                }
            }
            onRemoteConfig(t) {
                var i = t.ok ? t.config : void 0;
                return i && "sessionRecording"in i ? !1 === i.sessionRecording ? (this.Ro(i),
                void this.Eo()) : (this.Ro(i),
                void this.startIfEnabledOrStop()) : (this._o === yl && (this._o = bl,
                xl.warn("config refresh failed, recording will not start until page reload")),
                void this.startIfEnabledOrStop())
            }
            log(t, i) {
                var e;
                void 0 === i && (i = "log"),
                null != (e = this.bo) && e.log ? this.bo.log(t, i) : xl.warn("log called before recorder was ready")
            }
            get To() {
                var t, i, e = null == (t = this._instance) || null == (t = t.persistence) ? void 0 : t.get_property(Be);
                return (null == e || null == (i = e.scriptConfig) ? void 0 : i.script) || "lazy-recorder"
            }
            Ao() {
                var t, i = this._instance.get_property(Be);
                if (!i)
                    return !1;
                try {
                    t = "object" == typeof i ? i : JSON.parse(i)
                } catch (t) {
                    return xl.warn("persisted remote config for session recording is invalid and will be ignored", t),
                    !1
                }
                return !X(t.cache_timestamp) && 36e5 >= Date.now() - t.cache_timestamp
            }
            Mo(t) {
                var i, e, r;
                if (!this.ko) {
                    if (null == (i = v.__PosthogExtensions__) || !i.initSessionRecording)
                        return xl.warn("Called on script loaded before session recording is available. This can be caused by adblockers."),
                        void this._instance.register_for_session({
                            [Pr]: !0
                        });
                    var s;
                    if (this.bo || (this.bo = null == (s = v.__PosthogExtensions__) ? void 0 : s.initSessionRecording(this._instance, this.xo),
                    this.bo._forceAllowLocalhostNetworkCapture = this._forceAllowLocalhostNetworkCapture),
                    !this.Ao()) {
                        if (this._o === bl || this._o === yl)
                            return;
                        return this._o = yl,
                        xl.info("persisted remote config is stale, requesting fresh config before starting"),
                        void new po(this._instance).load()
                    }
                    this._o = ml,
                    null == (e = (r = this.bo).setDocumentWasEverVisible) || e.call(r, this.xo),
                    this.bo.start(t)
                }
            }
            onRRwebEmit(t) {
                var i;
                null == (i = this.bo) || null == i.onRRwebEmit || i.onRRwebEmit(t)
            }
            overrideLinkedFlag() {
                var t, i;
                this.bo || null == (i = this.jr) || i.register({
                    [qe]: !0
                }),
                null == (t = this.bo) || t.overrideLinkedFlag()
            }
            overrideSampling() {
                var t, i;
                this.bo || null == (i = this.jr) || i.register({
                    [Ue]: !0
                }),
                null == (t = this.bo) || t.overrideSampling()
            }
            overrideTrigger(t) {
                var i, e;
                this.bo || null == (e = this.jr) || e.register({
                    ["url" === t ? He : Ve]: !0
                }),
                null == (i = this.bo) || i.overrideTrigger(t)
            }
            get sdkDebugProperties() {
                var t;
                return (null == (t = this.bo) ? void 0 : t.sdkDebugProperties) || {
                    $recording_status: this.status
                }
            }
            tryAddCustomEvent(t, i) {
                var e;
                return !(null == (e = this.bo) || !e.tryAddCustomEvent(t, i))
            }
        }
    }
      , nh = {
        autocapture: class {
            constructor(t) {
                this.Fo = !1,
                this.Oo = null,
                this.Lo = !1,
                this.Do = !1,
                this.instance = t,
                this.rageclicks = new ol(t.config.rageclick),
                this.$o = null
            }
            initialize() {
                this.startIfEnabled()
            }
            get qe() {
                var t, i, e = W(this.instance.config.autocapture) ? this.instance.config.autocapture : {};
                return e.url_allowlist = null == (t = e.url_allowlist) ? void 0 : t.map((t => new RegExp(t))),
                e.url_ignorelist = null == (i = e.url_ignorelist) ? void 0 : i.map((t => new RegExp(t))),
                e
            }
            No() {
                if (this.isBrowserSupported()) {
                    if (t && r) {
                        var i = i => {
                            i = i || (null == t ? void 0 : t.event);
                            try {
                                this.qo(i)
                            } catch (t) {
                                ll.error("Failed to capture event", t)
                            }
                        }
                        ;
                        if (Kr(r, "submit", i, {
                            capture: !0
                        }),
                        Kr(r, "change", i, {
                            capture: !0
                        }),
                        Kr(r, "click", i, {
                            capture: !0
                        }),
                        this.qe.capture_copied_text) {
                            var e = i => {
                                i = i || (null == t ? void 0 : t.event);
                                try {
                                    this.qo(i, al)
                                } catch (t) {
                                    ll.error("Failed to capture copy/cut event", t)
                                }
                            }
                            ;
                            Kr(r, "copy", e, {
                                capture: !0
                            }),
                            Kr(r, "cut", e, {
                                capture: !0
                            })
                        }
                    }
                } else
                    ll.info("Disabling Automatic Event Collection because this browser is not supported")
            }
            startIfEnabled() {
                this.isEnabled && !this.Fo && (this.No(),
                this.Fo = !0)
            }
            onRemoteConfig(t) {
                if (this.Lo = !0,
                t.ok) {
                    var i = t.config;
                    i.elementsChainAsString && (this.Do = i.elementsChainAsString);
                    var e = i.autocapture_opt_out;
                    it(e) && (this.instance.persistence && this.instance.persistence.register({
                        [Ce]: e
                    }),
                    this.Oo = e),
                    this.startIfEnabled()
                } else
                    this.startIfEnabled()
            }
            setElementSelectors(t) {
                this.$o = t
            }
            getElementSelectors(t) {
                var i, e = [];
                return null == (i = this.$o) || i.forEach((i => {
                    var s = null == r ? void 0 : r.querySelectorAll(i);
                    null == s || s.forEach((r => {
                        t === r && e.push(i)
                    }
                    ))
                }
                )),
                e
            }
            get isEnabled() {
                var t, i, e = null == (t = this.instance.persistence) ? void 0 : t.props[Ce], r = this.Oo, s = this.instance.hr() && !this.Lo;
                if (Q(r) && !it(e) && !s)
                    return !1;
                var n = null !== (i = this.Oo) && void 0 !== i ? i : !!e;
                return !!this.instance.config.autocapture && !n
            }
            qo(i, e) {
                if (void 0 === e && (e = "$autocapture"),
                this.isEnabled) {
                    var r, s = zs(i);
                    Is(s) && (s = s.parentNode || null),
                    "$autocapture" === e && "click" === i.type && i instanceof MouseEvent && this.instance.config.rageclick && null != (r = this.rageclicks) && r.isRageClick(i.clientX, i.clientY, i.timeStamp || (new Date).getTime()) && Qs(s, this.instance.config.rageclick) && this.qo(i, "$rageclick");
                    var n = e === al;
                    if (s && function(i, e, r, s, n, o) {
                        var a;
                        if (!t || Xs(i))
                            return !1;
                        if (null != r && r.url_allowlist && !js(r.url_allowlist, o))
                            return !1;
                        if (null != r && r.url_ignorelist && js(r.url_ignorelist, o))
                            return !1;
                        if (null != r && r.dom_event_allowlist) {
                            var l = r.dom_event_allowlist;
                            if (l && !l.some((t => e.type === t)))
                                return !1
                        }
                        var h = Zs(i, s)
                          , u = h.parentIsUsefulElement
                          , d = h.targetElementList;
                        if (!function(t, i) {
                            var e = null == i ? void 0 : i.element_allowlist;
                            if (J(e))
                                return !0;
                            var r, s = function(t) {
                                if (e.some((i => t.tagName.toLowerCase() === i)))
                                    return {
                                        v: !0
                                    }
                            };
                            for (var n of t)
                                if (r = s(n))
                                    return r.v;
                            return !1
                        }(d, r))
                            return !1;
                        if (!qs(d, null == r ? void 0 : r.css_selector_allowlist))
                            return !1;
                        if (qs(d, null !== (a = null == r ? void 0 : r.css_selector_ignorelist) && void 0 !== a ? a : Vs))
                            return !1;
                        try {
                            var v = t.getComputedStyle(i);
                            if (v && "pointer" === v.getPropertyValue("cursor") && "click" === e.type)
                                return !0
                        } catch (t) {}
                        var c = i.tagName.toLowerCase();
                        switch (c) {
                        case "html":
                            return !1;
                        case "form":
                            return (n || ["submit"]).indexOf(e.type) >= 0;
                        case "input":
                        case "select":
                        case "textarea":
                            return (n || ["change", "click"]).indexOf(e.type) >= 0;
                        default:
                            return u ? (n || ["click"]).indexOf(e.type) >= 0 : (n || ["click"]).indexOf(e.type) >= 0 && (Us.indexOf(c) > -1 || "true" === i.getAttribute("contenteditable"))
                        }
                    }(s, i, this.qe, n, n ? ["copy", "cut"] : void 0, this.instance)) {
                        var o = dl(s, {
                            e: i,
                            maskAllElementAttributes: this.instance.config.mask_all_element_attributes,
                            maskAllText: this.instance.config.mask_all_text,
                            elementAttributeIgnoreList: this.qe.element_attribute_ignorelist,
                            elementsChainAsString: this.Do,
                            disableCaptureUrlHashes: this.instance.config.disable_capture_url_hashes
                        })
                          , a = o.props;
                        if (o.explicitNoCapture)
                            return !1;
                        var l = this.getElementSelectors(s);
                        if (l && l.length > 0 && (a.$element_selectors = l),
                        e === al) {
                            var h, u = Ns(null == t || null == (h = t.getSelection()) ? void 0 : h.toString()), d = i.type || "clipboard";
                            if (!u)
                                return !1;
                            a.$selected_content = u,
                            a.$copy_type = d
                        }
                        return this.instance.capture(e, a),
                        !0
                    }
                }
            }
            isBrowserSupported() {
                return V(null == r ? void 0 : r.querySelectorAll)
            }
        }
        ,
        historyAutocapture: class {
            constructor(i) {
                var e;
                this._instance = i,
                this.jo = (null == t || null == (e = t.location) ? void 0 : e.pathname) || ""
            }
            initialize() {
                this.startIfEnabled()
            }
            get isEnabled() {
                return "history_change" === this._instance.config.capture_pageview
            }
            startIfEnabled() {
                this.isEnabled && (me.info("History API monitoring enabled, starting..."),
                this.monitorHistoryChanges())
            }
            stop() {
                this.Bo && this.Bo(),
                this.Bo = void 0,
                me.info("History API monitoring stopped")
            }
            monitorHistoryChanges() {
                t && t.history && (this.Ho("pushState"),
                this.Ho("replaceState"),
                this.Uo())
            }
            Ho(i) {
                var e;
                if (t && (null == (e = t.history[i]) || !e.__posthog_wrapped__)) {
                    var r = this;
                    !function(t, i, e) {
                        try {
                            if (!(i in t))
                                return cl;
                            var r = {
                                next: t[i]
                            }
                              , s = e((function() {
                                for (var t = arguments.length, i = new Array(t), e = 0; t > e; e++)
                                    i[e] = arguments[e];
                                return r.next.apply(this, i)
                            }
                            ));
                            return V(s) && (s.prototype = s.prototype || {},
                            Object.defineProperties(s, {
                                __posthog_wrapped__: {
                                    enumerable: !1,
                                    value: !0
                                },
                                __posthog_layer__: {
                                    enumerable: !1,
                                    value: r
                                }
                            })),
                            t[i] = s,
                            () => {
                                if (t[i] !== s)
                                    for (var e = t[i]; V(e) && e.__posthog_layer__; ) {
                                        var n = e.__posthog_layer__;
                                        if (n.next === s)
                                            return void (n.next = r.next);
                                        e = n.next
                                    }
                                else
                                    t[i] = r.next
                            }
                        } catch (t) {
                            return cl
                        }
                    }(t.history, i, (t => function(e, s, n) {
                        t.call(this, e, s, n),
                        r.zo(i)
                    }
                    ))
                }
            }
            zo(i) {
                try {
                    var e, r = null == t || null == (e = t.location) ? void 0 : e.pathname;
                    if (!r)
                        return;
                    r !== this.jo && this.isEnabled && this._instance.capture(Dr, {
                        navigation_type: i
                    }),
                    this.jo = r
                } catch (t) {
                    me.error("Error capturing " + i + " pageview", t)
                }
            }
            Uo() {
                if (!this.Bo) {
                    var i = () => {
                        this.zo("popstate")
                    }
                    ;
                    Kr(t, "popstate", i),
                    this.Bo = () => {
                        t && t.removeEventListener("popstate", i)
                    }
                }
            }
        }
        ,
        heatmaps: class {
            get qe() {
                return this.instance.config
            }
            constructor(t) {
                var i;
                this.Wo = !1,
                this.Fo = !1,
                this.Vo = null,
                this.instance = t,
                this.Wo = !(null == (i = this.instance.persistence) || !i.props[Me]),
                this.rageclicks = new ol(t.config.rageclick)
            }
            initialize() {
                this.startIfEnabled()
            }
            get flushIntervalMilliseconds() {
                var t = 5e3;
                return W(this.qe.capture_heatmaps) && this.qe.capture_heatmaps.flush_interval_milliseconds && (t = this.qe.capture_heatmaps.flush_interval_milliseconds),
                t
            }
            get isEnabled() {
                return X(this.qe.capture_heatmaps) ? X(this.qe.enable_heatmaps) ? this.Wo : this.qe.enable_heatmaps : !1 !== this.qe.capture_heatmaps
            }
            startIfEnabled() {
                if (this.isEnabled) {
                    if (this.Fo)
                        return;
                    Sl.info("starting..."),
                    this.Zo(),
                    this.Ee()
                } else {
                    var t;
                    clearInterval(null !== (t = this.Vo) && void 0 !== t ? t : void 0),
                    this.Go(),
                    this.getAndClearBuffer()
                }
            }
            onRemoteConfig(t) {
                if (t.ok) {
                    var i = t.config;
                    if ("heatmaps"in i) {
                        var e = !!i.heatmaps;
                        this.instance.persistence && this.instance.persistence.register({
                            [Me]: e
                        }),
                        this.Wo = e,
                        this.startIfEnabled()
                    }
                }
            }
            getAndClearBuffer() {
                var t = this.R;
                return this.R = void 0,
                t
            }
            Qo(t) {
                kl(t.originalEvent) && this.ke(t.originalEvent, "deadclick")
            }
            Ee() {
                this.Vo && clearInterval(this.Vo),
                this.Vo = function(t) {
                    return "visible" === (null == t ? void 0 : t.visibilityState)
                }(r) ? setInterval(this.Ir.bind(this), this.flushIntervalMilliseconds) : null
            }
            Zo() {
                t && r && (this.Jo = this.Ir.bind(this),
                Kr(t, Or, this.Jo),
                this.Ko = i => this.ke(i || (null == t ? void 0 : t.event)),
                Kr(r, "click", this.Ko, {
                    capture: !0
                }),
                this.Yo = i => this.Xo(i || (null == t ? void 0 : t.event)),
                Kr(r, "mousemove", this.Yo, {
                    capture: !0
                }),
                this.tl = new mn(this.instance,gn,this.Qo.bind(this)),
                this.tl.startIfEnabledOrStop(),
                this.el = this.Ee.bind(this),
                Kr(r, Ar, this.el),
                this.Fo = !0)
            }
            Go() {
                var i;
                t && r && (this.Jo && t.removeEventListener(Or, this.Jo),
                this.Ko && r.removeEventListener("click", this.Ko, {
                    capture: !0
                }),
                this.Yo && r.removeEventListener("mousemove", this.Yo, {
                    capture: !0
                }),
                this.el && r.removeEventListener(Ar, this.el),
                clearTimeout(this.il),
                null == (i = this.tl) || i.stop(),
                this.Fo = !1)
            }
            rl(i, e) {
                var r = this.instance.scrollManager.scrollY()
                  , s = this.instance.scrollManager.scrollX()
                  , n = this.instance.scrollManager.scrollElement()
                  , o = function(i, e, r) {
                    for (var s = i; s && Cs(s) && !Ms(s, "body"); ) {
                        if (s === r)
                            return !1;
                        var n = void 0;
                        try {
                            var o, a, l;
                            n = null == (o = null !== (a = null == (l = s.ownerDocument) ? void 0 : l.defaultView) && void 0 !== a ? a : t) ? void 0 : o.getComputedStyle(s).position
                        } catch (t) {
                            return !1
                        }
                        if (j(e, n))
                            return !0;
                        s = Hs(s)
                    }
                    return !1
                }(zs(i), ["fixed", "sticky"], n);
                return {
                    x: i.clientX + (o ? 0 : s),
                    y: i.clientY + (o ? 0 : r),
                    target_fixed: o,
                    type: e
                }
            }
            ke(t, i) {
                var e;
                if (void 0 === i && (i = "click"),
                !Rs(t.target) && kl(t)) {
                    var r = this.rl(t, i);
                    null != (e = this.rageclicks) && e.isRageClick(t.clientX, t.clientY, (new Date).getTime()) && Qs(zs(t), this.instance.config.rageclick) && this.Gt(g({}, r, {
                        type: "rageclick"
                    })),
                    this.Gt(r)
                }
            }
            Xo(t) {
                !Rs(t.target) && kl(t) && (clearTimeout(this.il),
                this.il = setTimeout(( () => {
                    this.Gt(this.rl(t, "mousemove"))
                }
                ), 500))
            }
            Gt(i) {
                if (t) {
                    var e = this.qe.disable_capture_url_hashes ? wi(t.location.href) : t.location.href
                      , r = this.qe.custom_personal_data_properties
                      , s = this.qe.mask_personal_data_properties ? [...Dn, ...r || []] : []
                      , n = Cn(e, s, Ln);
                    this.R = this.R || {},
                    this.R[n] || (this.R[n] = []),
                    this.R[n].push(i)
                }
            }
            Ir() {
                this.R && !G(this.R) && this.instance.capture("$$heatmap", {
                    $heatmap_data: this.getAndClearBuffer()
                })
            }
        }
        ,
        deadClicksAutocapture: mn,
        webVitalsAutocapture: class {
            constructor(t) {
                var i;
                this.Wo = !1,
                this.Fo = !1,
                this.R = {
                    navigationKey: void 0,
                    url: void 0,
                    metrics: [],
                    firstMetricTimestamp: void 0
                },
                this.nl = () => {
                    clearTimeout(this.sl),
                    this.sl = void 0,
                    0 !== this.R.metrics.length && (this._instance.capture("$web_vitals", g({
                        $current_url: this.R.url
                    }, this.R.metrics.reduce(( (t, i) => g({}, t, {
                        ["$web_vitals_" + i.name + "_event"]: g({}, i),
                        ["$web_vitals_" + i.name + "_value"]: i.value
                    })), {}))),
                    this.R = {
                        navigationKey: void 0,
                        url: void 0,
                        metrics: [],
                        firstMetricTimestamp: void 0
                    })
                }
                ,
                this.al = t => {
                    var i;
                    if (this.R = this.R || {
                        navigationKey: void 0,
                        url: void 0,
                        metrics: [],
                        firstMetricTimestamp: void 0
                    },
                    X(null == t ? void 0 : t.name) || X(null == t ? void 0 : t.value))
                        pl.error("Invalid metric received", t);
                    else {
                        var e = "string" == typeof t.navigationURL ? t.navigationURL : void 0
                          , r = this.ol(e);
                        if (!J(r)) {
                            var s = Z(t.navigationId) || "string" == typeof t.navigationId ? "navigation:" + t.navigationId : "url:" + r;
                            if (!this.ll || this.ll > t.value) {
                                this.R.navigationKey !== s && (this.nl(),
                                this.sl = setTimeout(this.nl, this.flushToCaptureTimeoutMs)),
                                J(this.R.navigationKey) && (this.R.navigationKey = s,
                                this.R.url = r),
                                this.R.firstMetricTimestamp = J(this.R.firstMetricTimestamp) ? Date.now() : this.R.firstMetricTimestamp,
                                t.attribution && t.attribution.interactionTargetElement && (t.attribution.interactionTargetElement = void 0);
                                var n = null == (i = this._instance.sessionManager) ? void 0 : i.checkAndGetSessionAndWindowId(!0)
                                  , o = g({}, t, e ? {
                                    navigationURL: r
                                } : {}, {
                                    $current_url: r,
                                    timestamp: Date.now()
                                });
                                J(n) || (o.$session_id = n.sessionId,
                                o.$window_id = n.windowId),
                                this.R.metrics.push(o),
                                this.R.metrics.length === this.allowedMetrics.length && this.nl()
                            } else
                                pl.error("Ignoring metric with value >= " + this.ll, t)
                        }
                    }
                }
                ,
                this.ul = () => {
                    if (!this.Fo) {
                        var t, i, e, r, s = v.__PosthogExtensions__, n = null == s ? void 0 : s.postHogWebVitalsCallbacksByFlavor, o = (null == n ? void 0 : n[this.hl]) || ("web-vitals" === this.hl && J(n) ? null == s ? void 0 : s.postHogWebVitalsCallbacks : void 0);
                        if (J(o) || (t = o.onLCP,
                        i = o.onCLS,
                        e = o.onFCP,
                        r = o.onINP),
                        t && i && e && r) {
                            var a = {
                                reportSoftNavs: this.useSoftNavs
                            };
                            this.allowedMetrics.indexOf("LCP") > -1 && t(this.al.bind(this), a),
                            this.allowedMetrics.indexOf("CLS") > -1 && i(this.al.bind(this), a),
                            this.allowedMetrics.indexOf("FCP") > -1 && e(this.al.bind(this), a),
                            this.allowedMetrics.indexOf("INP") > -1 && r(this.al.bind(this), a),
                            this.Fo = !0
                        } else
                            pl.error("web vitals callbacks not loaded - not starting")
                    }
                }
                ,
                this._instance = t,
                this.Wo = !(null == (i = this._instance.persistence) || !i.props[De]),
                this.startIfEnabled()
            }
            get dl() {
                return this._instance.config.capture_performance
            }
            get allowedMetrics() {
                var t, i, e = W(this.dl) ? null == (t = this.dl) ? void 0 : t.web_vitals_allowed_metrics : void 0;
                return X(e) ? (null == (i = this._instance.persistence) ? void 0 : i.props[Ne]) || ["CLS", "FCP", "INP", "LCP"] : e
            }
            get flushToCaptureTimeoutMs() {
                return (W(this.dl) ? this.dl.web_vitals_delayed_flush_ms : void 0) || 5e3
            }
            get useAttribution() {
                var t = W(this.dl) ? this.dl.web_vitals_attribution : void 0;
                return null != t && t
            }
            get useSoftNavs() {
                var t = W(this.dl) ? this.dl.__preview_web_vitals_soft_navs : void 0;
                return null != t && t
            }
            get ll() {
                var t = W(this.dl) && Z(this.dl.__web_vitals_max_value) ? this.dl.__web_vitals_max_value : gl;
                return t > 0 && 6e4 >= t ? gl : t
            }
            get isEnabled() {
                var t = null == s ? void 0 : s.protocol;
                if ("http:" !== t && "https:" !== t)
                    return pl.info("Web Vitals are disabled on non-http/https protocols"),
                    !1;
                var i = W(this.dl) ? this.dl.web_vitals : it(this.dl) ? this.dl : void 0;
                return it(i) ? i : this.Wo
            }
            startIfEnabled() {
                this.isEnabled && !this.Fo && (pl.info("enabled, starting..."),
                this.di(this.ul))
            }
            onRemoteConfig(t) {
                if (t.ok) {
                    var i = t.config;
                    if ("capturePerformance"in i) {
                        var e = W(i.capturePerformance) && !!i.capturePerformance.web_vitals
                          , r = W(i.capturePerformance) ? i.capturePerformance.web_vitals_allowed_metrics : void 0;
                        this._instance.persistence && (this._instance.persistence.register({
                            [De]: e
                        }),
                        this._instance.persistence.register({
                            [Ne]: r
                        })),
                        this.Wo = e,
                        this.startIfEnabled()
                    }
                }
            }
            get hl() {
                return this.useSoftNavs ? this.useAttribution ? "web-vitals-with-attribution-soft-navs" : "web-vitals-soft-navs" : this.useAttribution ? "web-vitals-with-attribution" : "web-vitals"
            }
            di(t) {
                var i = v.__PosthogExtensions__
                  , e = this.hl
                  , r = null == i ? void 0 : i.postHogWebVitalsCallbacksByFlavor;
                null != r && r[e] || "web-vitals" === e && J(r) && null != i && i.postHogWebVitalsCallbacks ? t() : null == i || null == i.loadExternalDependency || i.loadExternalDependency(this._instance, e, (i => {
                    i ? pl.error("failed to load script", i) : t()
                }
                ))
            }
            ol(i) {
                var e = i || (null == t ? void 0 : t.location.href);
                if (e) {
                    var r = this._instance.config.disable_capture_url_hashes ? wi(e) : e
                      , s = this._instance.config.custom_personal_data_properties
                      , n = this._instance.config.mask_personal_data_properties ? [...Dn, ...s || []] : [];
                    return Cn(r, n, Ln)
                }
                pl.error("Could not determine current URL")
            }
        }
    }
      , oh = {
        exceptionObserver: class {
            constructor(i) {
                var e;
                this.ul = () => {
                    var i;
                    if (t && this.isEnabled && null != (i = v.__PosthogExtensions__) && i.errorWrappingFunctions) {
                        var e = v.__PosthogExtensions__.errorWrappingFunctions.wrapOnError
                          , r = v.__PosthogExtensions__.errorWrappingFunctions.wrapUnhandledRejection
                          , s = v.__PosthogExtensions__.errorWrappingFunctions.wrapConsoleError;
                        try {
                            !this.vl && this.qe.capture_unhandled_errors && (this.vl = e(this.captureException.bind(this))),
                            !this.cl && this.qe.capture_unhandled_rejections && (this.cl = r(this.captureException.bind(this))),
                            !this.fl && this.qe.capture_console_errors && (this.fl = s(this.captureException.bind(this)))
                        } catch (t) {
                            vl.error("failed to start", t),
                            this.pl()
                        }
                    }
                }
                ,
                this._instance = i,
                this.gl = !(null == (e = this._instance.persistence) || !e.props[Ie]),
                this.ml = new ft(g({}, function(t) {
                    var i, e, r, s;
                    return void 0 === t && (t = {}),
                    {
                        refillRate: null !== (i = null !== (e = t.exceptionRateLimiterRefillRate) && void 0 !== e ? e : t.__exceptionRateLimiterRefillRate) && void 0 !== i ? i : 1,
                        bucketSize: null !== (r = null !== (s = t.exceptionRateLimiterBucketSize) && void 0 !== s ? s : t.__exceptionRateLimiterBucketSize) && void 0 !== r ? r : 10
                    }
                }(this._instance.config.error_tracking), {
                    refillInterval: 1e4,
                    st: vl
                })),
                this.qe = this.yl(),
                this.startIfEnabledOrStop()
            }
            yl() {
                var t = this._instance.config.capture_exceptions
                  , i = {
                    capture_unhandled_errors: !1,
                    capture_unhandled_rejections: !1,
                    capture_console_errors: !1
                };
                return W(t) ? i = g({}, i, t) : (J(t) ? this.gl : t) && (i = g({}, i, {
                    capture_unhandled_errors: !0,
                    capture_unhandled_rejections: !0
                })),
                i
            }
            get isEnabled() {
                return this.qe.capture_console_errors || this.qe.capture_unhandled_errors || this.qe.capture_unhandled_rejections
            }
            startIfEnabledOrStop() {
                this.isEnabled ? (vl.info("enabled"),
                this.pl(),
                this.di(this.ul)) : this.pl()
            }
            di(t) {
                var i, e;
                null != (i = v.__PosthogExtensions__) && i.errorWrappingFunctions ? t() : null == (e = v.__PosthogExtensions__) || null == e.loadExternalDependency || e.loadExternalDependency(this._instance, "exception-autocapture", (i => {
                    if (i)
                        return vl.error("failed to load script", i);
                    t()
                }
                ))
            }
            pl() {
                var t, i, e;
                null == (t = this.vl) || t.call(this),
                this.vl = void 0,
                null == (i = this.cl) || i.call(this),
                this.cl = void 0,
                null == (e = this.fl) || e.call(this),
                this.fl = void 0
            }
            onRemoteConfig(t) {
                if (t.ok) {
                    var i = t.config;
                    "autocaptureExceptions"in i && (this.gl = !!i.autocaptureExceptions || !1,
                    this._instance.persistence && this._instance.persistence.register({
                        [Ie]: this.gl
                    }),
                    this.qe = this.yl(),
                    this.startIfEnabledOrStop())
                }
            }
            onConfigChange() {
                this.qe = this.yl()
            }
            captureException(t) {
                var i, e, r, s = null !== (i = null == t || null == (e = t.$exception_list) || null == (e = e[0]) ? void 0 : e.type) && void 0 !== i ? i : "Exception";
                this.ml.consumeRateLimit(s) ? vl.info("Skipping exception capture because of client rate limiting.", {
                    exception: s
                }) : null == (r = this._instance.exceptions) || r.sendExceptionEvent(t)
            }
        }
        ,
        exceptions: class {
            constructor(t) {
                var i, e;
                this.bl = [],
                this._l = new zi([new Zi, new he, new ie, new te, new ae, new oe, new re, new le],function(t) {
                    for (var i = arguments.length, e = new Array(i > 1 ? i - 1 : 0), r = 1; i > r; r++)
                        e[r - 1] = arguments[r];
                    return function(i, r) {
                        void 0 === r && (r = 0);
                        for (var s = [], n = i.split("\n"), o = r; n.length > o; o++) {
                            var a = n[o];
                            if (1024 >= a.length) {
                                var l = Xi.test(a) ? a.replace(Xi, "$1") : a;
                                if (!l.match(/\S*Error: /)) {
                                    for (var h of e) {
                                        var u = h(l, t);
                                        if (u) {
                                            s.push(u);
                                            break
                                        }
                                    }
                                    if (s.length >= 50)
                                        break
                                }
                            }
                        }
                        return function(t) {
                            if (!t.length)
                                return [];
                            var i = Array.from(t);
                            return i.reverse(),
                            i.slice(0, 50).map((t => {
                                return g({}, t, {
                                    filename: t.filename || (e = i,
                                    e[e.length - 1] || {}).filename,
                                    function: t.function || Ui
                                });
                                var e
                            }
                            ))
                        }(s)
                    }
                }("web:javascript", Ji, Qi)),
                this._instance = t,
                this.bl = null !== (i = null == (e = this._instance.persistence) ? void 0 : e.get_property(Ae)) && void 0 !== i ? i : [],
                this.wl = fe(this.kl()),
                this.xl = new pe(this.wl)
            }
            onConfigChange() {
                this.wl = fe(this.kl()),
                this.xl.setConfig(this.wl)
            }
            onRemoteConfig(t) {
                var i, e, r;
                if (t.ok) {
                    var s = t.config;
                    if ("errorTracking"in s) {
                        var n = null !== (i = null == (e = s.errorTracking) ? void 0 : e.suppressionRules) && void 0 !== i ? i : []
                          , o = null == (r = s.errorTracking) ? void 0 : r.captureExtensionExceptions;
                        this.bl = n,
                        this._instance.persistence && this._instance.persistence.register({
                            [Ae]: this.bl,
                            [Oe]: o
                        })
                    }
                }
            }
            get Sl() {
                var t, i = !!this._instance.get_property(Oe), e = this._instance.config.error_tracking.captureExtensionExceptions;
                return null !== (t = null != e ? e : i) && void 0 !== t && t
            }
            buildProperties(t, i) {
                return this._l.buildFromUnknown(t, {
                    syntheticException: null == i ? void 0 : i.syntheticException,
                    mechanism: {
                        handled: null == i ? void 0 : i.handled
                    }
                })
            }
            addExceptionStep(t, i) {
                if (this.wl.enabled)
                    try {
                        if (!K(t) || 0 === t.trim().length)
                            return void Gl.warn("Ignoring exception step because message must be a non-empty string");
                        var e = function(t) {
                            if (!t)
                                return {
                                    sanitizedProperties: {},
                                    droppedKeys: []
                                };
                            var i = [];
                            return {
                                sanitizedProperties: Object.keys(t).reduce(( (e, r) => ve.has(r) ? (i.push(r),
                                e) : (e[r] = t[r],
                                e)), {}),
                                droppedKeys: i
                            }
                        }(this.Cl(i))
                          , r = e.sanitizedProperties
                          , s = e.droppedKeys;
                        s.length > 0 && Gl.warn("Ignoring reserved exception step fields", {
                            droppedKeys: s
                        }),
                        this.xl.add(g({
                            [ue]: t,
                            [de]: (new Date).toISOString()
                        }, r))
                    } catch (t) {
                        Gl.error("Failed to add exception step. Ignoring breadcrumb.", t)
                    }
            }
            sendExceptionEvent(t) {
                try {
                    var i = t.$exception_list;
                    if (this.Ml(i)) {
                        if (this.Tl(i))
                            return this.El("Exception dropped: matched a suppression rule"),
                            void Gl.info("Skipping exception capture because a suppression rule matched");
                        if (!this.Sl && this.Il(i))
                            return this.El("Exception dropped: thrown by a browser extension"),
                            void Gl.info("Skipping exception capture because it was thrown by an extension");
                        if (!this._instance.config.error_tracking.__capturePostHogExceptions && this.Pl(i))
                            return this.El("Exception dropped: thrown by the PostHog SDK"),
                            void Gl.info("Skipping exception capture because it was thrown by the PostHog SDK")
                    }
                    var e = this.wl.enabled && X(t.$exception_steps) ? this.Rl(t) : t
                      , r = "string" == typeof (n = globalThis._posthogReleaseId) && n.length > 0 ? n : void 0;
                    r && (e.$release_id = r);
                    try {
                        var s = this._instance.capture("$exception", e, {
                            _noTruncate: !0,
                            _batchKey: "exceptionEvent",
                            vs: !0
                        });
                        return s && this.xl.clear(),
                        s
                    } catch (t) {
                        return Gl.error("Failed to capture exception event. Dropping this exception.", t),
                        void this.xl.clear()
                    }
                } catch (t) {
                    return void Gl.error("Failed to process exception event. Ignoring this exception.", t)
                }
                var n
            }
            Rl(t) {
                try {
                    var i = this.xl.getAttachable();
                    return 0 === i.length ? t : g({}, t, {
                        $exception_steps: i
                    })
                } catch (i) {
                    return Gl.error("Failed to read buffered exception steps. Capturing exception without steps.", i),
                    t
                }
            }
            El(t) {
                this.wl.enabled && this.xl.add({
                    [ue]: t,
                    [de]: (new Date).toISOString()
                })
            }
            Cl(t) {
                return W(t) ? g({}, t) : {}
            }
            kl() {
                var t, i;
                return null !== (t = null == (i = this._instance.config.error_tracking) ? void 0 : i.exception_steps) && void 0 !== t ? t : {}
            }
            Tl(t) {
                if (0 === t.length)
                    return !1;
                try {
                    var i = t.reduce(( (t, i) => {
                        var e = i.type
                          , r = i.value;
                        return K(e) && e.length > 0 && t.$exception_types.push(e),
                        K(r) && r.length > 0 && t.$exception_values.push(r),
                        t
                    }
                    ), {
                        $exception_types: [],
                        $exception_values: []
                    });
                    return this.bl.some((t => {
                        var e = t.values.map((t => {
                            var e = ka[t.operator]
                              , r = i[t.key];
                            if (!e || !r)
                                return !1;
                            var s = H(t.value) ? t.value : [t.value];
                            return s.length > 0 && e(s, r)
                        }
                        ));
                        return "OR" === t.type ? e.some(Boolean) : e.every(Boolean)
                    }
                    ))
                } catch (t) {
                    return Gl.warn("Failed to evaluate suppression rules. Capturing the exception.", t),
                    !1
                }
            }
            Il(t) {
                return t.flatMap((t => {
                    var i, e;
                    return null !== (i = null == (e = t.stacktrace) ? void 0 : e.frames) && void 0 !== i ? i : []
                }
                )).some((t => t.filename && t.filename.startsWith("chrome-extension://")))
            }
            Pl(t) {
                if (t.length > 0) {
                    var i, e, r, s, n = null !== (i = null == (e = t[0].stacktrace) ? void 0 : e.frames) && void 0 !== i ? i : [], o = n[n.length - 1];
                    return null !== (r = null == o || null == (s = o.filename) ? void 0 : s.includes("posthog.com/static")) && void 0 !== r && r
                }
                return !1
            }
            Ml(t) {
                return !X(t) && H(t)
            }
        }
    }
      , ah = g({
        productTours: class {
            get jr() {
                return this._instance.persistence
            }
            constructor(t) {
                this.Al = null,
                this.Fl = null,
                this._instance = t
            }
            initialize() {
                this.loadIfEnabled()
            }
            onRemoteConfig(t) {
                if (t.ok) {
                    var i = t.config;
                    if ("productTours"in i) {
                        var e, r;
                        if (this.jr && this.jr.register({
                            [Le]: !!i.productTours
                        }),
                        !$l(this._instance))
                            return !this.Al && X(null == (e = this.jr) ? void 0 : e.props[dr]) || El.info("product tours disabled; stopping and clearing cached tours"),
                            null == (r = this.Al) || r.stop(),
                            this.Al = null,
                            void this.clearCache();
                        this.loadIfEnabled()
                    }
                }
            }
            loadIfEnabled() {
                !this.Al && $l(this._instance) && this.di(( () => this.Ol()))
            }
            di(t) {
                var i, e;
                null != (i = v.__PosthogExtensions__) && i.generateProductTours ? t() : null == (e = v.__PosthogExtensions__) || null == e.loadExternalDependency || e.loadExternalDependency(this._instance, "product-tours", (i => {
                    i ? El.error("Could not load product tours script", i) : t()
                }
                ))
            }
            Ol() {
                var t;
                !this.Al && null != (t = v.__PosthogExtensions__) && t.generateProductTours && (this.Al = v.__PosthogExtensions__.generateProductTours(this._instance, !0))
            }
            getProductTours(t, i) {
                if (void 0 === i && (i = !1),
                !H(this.Fl) || i) {
                    var e = this.jr;
                    if (e) {
                        var r = e.props[dr];
                        if (H(r) && !i)
                            return this.Fl = r,
                            void t(r, {
                                isLoaded: !0
                            })
                    }
                    this._instance._send_request({
                        url: this._instance.requestRouter.endpointFor("api", "/api/product_tours/?token=" + this._instance.config.token),
                        method: "GET",
                        timestampMode: "query",
                        callback: i => {
                            if ($l(this._instance)) {
                                var r = i.statusCode;
                                if (200 !== r || !i.json) {
                                    var s = "Product Tours API could not be loaded, status: " + r;
                                    return 0 === r ? i.error || El.warn(s) : El.error(s),
                                    void t([], {
                                        isLoaded: !1,
                                        error: s
                                    })
                                }
                                var n = H(i.json.product_tours) ? i.json.product_tours : [];
                                this.Fl = n,
                                e && e.register({
                                    [dr]: n
                                }),
                                t(n, {
                                    isLoaded: !0
                                })
                            } else
                                t([], {
                                    isLoaded: !0
                                })
                        }
                    })
                } else
                    t(this.Fl, {
                        isLoaded: !0
                    })
            }
            getActiveProductTours(t) {
                X(this.Al) ? t([], {
                    isLoaded: !1,
                    error: "Product tours not loaded"
                }) : this.Al.getActiveProductTours(t)
            }
            showProductTour(t) {
                var i;
                null == (i = this.Al) || i.showTourById(t)
            }
            previewTour(t) {
                this.Al ? this.Al.previewTour(t) : this.di(( () => {
                    var i;
                    this.Ol(),
                    null == (i = this.Al) || i.previewTour(t)
                }
                ))
            }
            dismissProductTour() {
                var t;
                null == (t = this.Al) || t.dismissTour("user_clicked_skip")
            }
            nextStep() {
                var t;
                null == (t = this.Al) || t.nextStep()
            }
            previousStep() {
                var t;
                null == (t = this.Al) || t.previousStep()
            }
            clearCache() {
                var t;
                this.Fl = null,
                null == (t = this.jr) || t.unregister(dr)
            }
            resetTour(t) {
                var i;
                null == (i = this.Al) || i.resetTour(t)
            }
            resetAllTours() {
                var t;
                null == (t = this.Al) || t.resetAllTours()
            }
            cancelPendingTour(t) {
                var i;
                null == (i = this.Al) || i.cancelPendingTour(t)
            }
        }
    }, rh)
      , lh = {
        siteApps: class {
            constructor(t) {
                this.Ll = 0,
                this._instance = t,
                this.Dl = [],
                this.apps = {}
            }
            get isEnabled() {
                return !!this._instance.config.opt_in_site_apps
            }
            $l(t, i) {
                if (i) {
                    var e = this.globalsForEvent(i);
                    this.Dl.push(e),
                    this.Dl.length > 1e3 && (this.Dl = this.Dl.slice(10))
                }
            }
            get siteAppLoaders() {
                var t;
                return null == (t = v._POSTHOG_REMOTE_CONFIG) || null == (t = t[this._instance.config.token]) ? void 0 : t.siteApps
            }
            initialize() {
                if (this.isEnabled) {
                    var t = this._instance._addCaptureHook(this.$l.bind(this));
                    this.Nl = () => {
                        t(),
                        this.Dl = [],
                        this.Nl = void 0
                    }
                }
            }
            globalsForEvent(t) {
                var i, e, r, s, n, o, a;
                if (!t)
                    throw new Error("Event payload is required");
                var l = {}
                  , h = this._instance.get_property("$groups") || []
                  , u = this._instance.get_property("$stored_group_properties") || {};
                for (var d of Object.entries(u)) {
                    var v = d[0];
                    l[v] = {
                        id: h[v],
                        type: v,
                        properties: d[1]
                    }
                }
                var c = t.$set_once
                  , f = t.$set;
                return {
                    event: g({}, _(t, Pl), {
                        properties: g({}, t.properties, f ? {
                            $set: g({}, null !== (i = null == (e = t.properties) ? void 0 : e.$set) && void 0 !== i ? i : {}, f)
                        } : {}, c ? {
                            $set_once: g({}, null !== (r = null == (s = t.properties) ? void 0 : s.$set_once) && void 0 !== r ? r : {}, c)
                        } : {}),
                        elements_chain: null !== (n = null == (o = t.properties) ? void 0 : o.$elements_chain) && void 0 !== n ? n : "",
                        distinct_id: null == (a = t.properties) ? void 0 : a.distinct_id
                    }),
                    person: {
                        properties: this._instance.get_property("$stored_person_properties")
                    },
                    groups: l
                }
            }
            ql(t) {
                var i, e = null == (i = t.tagName) ? void 0 : i.toLowerCase();
                return "style" === e && this._instance.config.prepare_external_dependency_stylesheet ? this._instance.config.prepare_external_dependency_stylesheet(t) || (Tl.error("prepare_external_dependency_stylesheet returned null"),
                null) : "script" === e && this._instance.config.prepare_external_dependency_script ? this._instance.config.prepare_external_dependency_script(t) || (Tl.error("prepare_external_dependency_script returned null"),
                null) : t
            }
            jl() {
                var t, i, e, s, n, o, a, l;
                if (!this._instance.config.prepare_external_dependency_stylesheet && !this._instance.config.prepare_external_dependency_script)
                    return () => {}
                    ;
                var h = null == r ? void 0 : r.defaultView
                  , u = null == h || null == (t = h.Node) ? void 0 : t.prototype;
                if (!h || !u)
                    return () => {}
                    ;
                if (this.Ll++,
                this.Bl)
                    return this.Hl();
                var d = []
                  , v = this
                  , c = new WeakSet
                  , f = (t, i, e) => {
                    if (null != t && t[i]) {
                        var r = t[i];
                        t[i] = e(r),
                        d.push(( () => {
                            t[i] = r
                        }
                        ))
                    }
                }
                  , p = t => {
                    if (c.has(t))
                        return t;
                    var i = v.ql(t);
                    return i && c.add(i),
                    i
                }
                  , g = t => t.map((t => "string" == typeof t ? t : p(t))).filter((t => !Q(t)));
                return f(u, "appendChild", (t => function(i) {
                    var e = p(i);
                    return e ? t.call(this, e) : i
                }
                )),
                f(u, "insertBefore", (t => function(i, e) {
                    var r = p(i);
                    return r ? t.call(this, r, e) : i
                }
                )),
                f(u, "replaceChild", (t => function(i, e) {
                    var r = p(i);
                    return r ? t.call(this, r, e) : e
                }
                )),
                [null == (i = h.Element) ? void 0 : i.prototype, null == (e = h.Document) ? void 0 : e.prototype, null == (s = h.DocumentFragment) ? void 0 : s.prototype].forEach((t => {
                    f(t, "append", (t => function() {
                        for (var i = arguments.length, e = new Array(i), r = 0; i > r; r++)
                            e[r] = arguments[r];
                        return t.apply(this, g(e))
                    }
                    )),
                    f(t, "prepend", (t => function() {
                        for (var i = arguments.length, e = new Array(i), r = 0; i > r; r++)
                            e[r] = arguments[r];
                        return t.apply(this, g(e))
                    }
                    ))
                }
                )),
                [null == (n = h.Element) ? void 0 : n.prototype, null == (o = h.CharacterData) ? void 0 : o.prototype, null == (a = h.DocumentType) ? void 0 : a.prototype].forEach((t => {
                    f(t, "before", (t => function() {
                        for (var i = arguments.length, e = new Array(i), r = 0; i > r; r++)
                            e[r] = arguments[r];
                        return t.apply(this, g(e))
                    }
                    )),
                    f(t, "after", (t => function() {
                        for (var i = arguments.length, e = new Array(i), r = 0; i > r; r++)
                            e[r] = arguments[r];
                        return t.apply(this, g(e))
                    }
                    )),
                    f(t, "replaceWith", (t => function() {
                        for (var i = arguments.length, e = new Array(i), r = 0; i > r; r++)
                            e[r] = arguments[r];
                        var s = g(e);
                        return e.length && !s.length ? void 0 : t.apply(this, s)
                    }
                    ))
                }
                )),
                f(null == (l = h.Element) ? void 0 : l.prototype, "insertAdjacentElement", (t => function(i, e) {
                    var r = p(e);
                    return r ? t.call(this, i, r) : null
                }
                )),
                this.Bl = () => {
                    d.forEach((t => t())),
                    this.Bl = void 0
                }
                ,
                this.Hl()
            }
            Hl() {
                var t = !1;
                return () => {
                    var i;
                    t || (t = !0,
                    this.Ll--,
                    0 === this.Ll && (null == (i = this.Bl) || i.call(this)))
                }
            }
            Ul(t, i) {
                void 0 === i && (i = !0);
                var e = this.jl();
                try {
                    var r = t(e);
                    return i && e(),
                    r
                } catch (t) {
                    throw e(),
                    t
                }
            }
            setupSiteApp(t) {
                var i = this.apps[t.id]
                  , e = () => {
                    var e;
                    !i.errored && this.Dl.length && (Tl.info("Processing " + this.Dl.length + " events for site app with id " + t.id),
                    this.Dl.forEach((t => this.Ul(( () => null == i.processEvent ? void 0 : i.processEvent(t))))),
                    i.processedBuffer = !0),
                    Object.values(this.apps).every((t => t.processedBuffer || t.errored)) && (null == (e = this.Nl) || e.call(this))
                }
                  , r = !1
                  , s = s => {
                    i.errored = !s,
                    i.loaded = !0,
                    Tl.info("Site app with id " + t.id + " " + (s ? "loaded" : "errored")),
                    r && e()
                }
                ;
                try {
                    var n = this.Ul((i => t.init({
                        posthog: this._instance,
                        callback(t) {
                            i(),
                            s(t)
                        }
                    })), !1).processEvent;
                    n && (i.processEvent = n),
                    r = !0
                } catch (i) {
                    Tl.error(Fl + t.id, i),
                    s(!1)
                }
                if (r && i.loaded)
                    try {
                        e()
                    } catch (e) {
                        Tl.error("Error while processing buffered events PostHog app with config id " + t.id, e),
                        i.errored = !0
                    }
            }
            zl() {
                var t = this.siteAppLoaders || [];
                for (var i of t)
                    this.apps[i.id] = {
                        id: i.id,
                        loaded: !1,
                        errored: !1,
                        processedBuffer: !1
                    };
                for (var e of t)
                    this.setupSiteApp(e)
            }
            Wl(t) {
                var i = this;
                if (0 !== Object.keys(this.apps).length) {
                    var e = this.globalsForEvent(t)
                      , r = function(r) {
                        try {
                            i.Ul(( () => null == r.processEvent ? void 0 : r.processEvent(e)))
                        } catch (i) {
                            Tl.error("Error while processing event " + t.event + " for site app " + r.id, i)
                        }
                    };
                    for (var s of Object.values(this.apps))
                        r(s)
                }
            }
            onRemoteConfig(t) {
                var i, e, r, s = this;
                if (null != (i = this.siteAppLoaders) && i.length)
                    return this.isEnabled ? (this.zl(),
                    void this._instance.on("eventCaptured", (t => this.Wl(t)))) : void Tl.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.');
                if (null == (e = this.Nl) || e.call(this),
                t.ok) {
                    var n = t.config;
                    if (null != (r = n.siteApps) && r.length)
                        if (this.isEnabled) {
                            var o = function() {
                                var t, i = a.id, e = a.url;
                                v["__$$ph_site_app_" + i] = s._instance,
                                null == (t = v.__PosthogExtensions__) || null == t.loadSiteApp || t.loadSiteApp(s._instance, e, (t => {
                                    if (t)
                                        return Tl.error(Fl + i, t)
                                }
                                ))
                            };
                            for (var a of n.siteApps)
                                o()
                        } else
                            Tl.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.')
                }
            }
        }
    }
      , hh = {
        tracingHeaders: class {
            constructor(t) {
                this.Vl = void 0,
                this.Zl = void 0,
                this.Gl = void 0,
                this.ul = () => {
                    var t, i, e = this.Ql();
                    e ? (J(this.Vl) && (this.Vl = null == (t = v.__PosthogExtensions__) || null == (t = t.tracingHeadersPatchFns) ? void 0 : t._patchXHR(e, ( () => this._instance.get_distinct_id()), this._instance.sessionManager)),
                    J(this.Zl) && (this.Zl = null == (i = v.__PosthogExtensions__) || null == (i = i.tracingHeadersPatchFns) ? void 0 : i._patchFetch(e, ( () => this._instance.get_distinct_id()), this._instance.sessionManager))) : this.pl()
                }
                ,
                this._instance = t
            }
            initialize() {
                this.startIfEnabledOrStop()
            }
            di(t) {
                var i, e;
                null != (i = v.__PosthogExtensions__) && i.tracingHeadersPatchFns ? t() : null == (e = v.__PosthogExtensions__) || null == e.loadExternalDependency || e.loadExternalDependency(this._instance, "tracing-headers", (i => {
                    if (i)
                        return fl.error("failed to load script", i);
                    t()
                }
                ))
            }
            Jl() {
                var t, i;
                return null !== (t = null !== (i = this._instance.config.tracing_headers) && void 0 !== i ? i : this._instance.config.addTracingHeaders) && void 0 !== t ? t : this._instance.config.__add_tracing_headers
            }
            Ql() {
                var t = this.Jl();
                return H(t) ? (H(this.Gl) ? this.Gl.splice(0, this.Gl.length, ...t) : this.Gl = [...t],
                t.length > 0 ? this.Gl : void 0) : (H(this.Gl) && this.Gl.splice(0),
                this.Gl = t || void 0,
                this.Gl)
            }
            pl() {
                var t, i;
                null == (t = this.Vl) || t.call(this),
                null == (i = this.Zl) || i.call(this),
                this.Vl = void 0,
                this.Zl = void 0
            }
            startIfEnabledOrStop() {
                this.Ql() ? this.di(this.ul) : this.pl()
            }
        }
    }
      , uh = g({
        surveys: class {
            get qe() {
                return this._instance.config
            }
            constructor(t) {
                this.Kl = void 0,
                this._surveyManager = null,
                this.Yl = !1,
                this.Xl = [],
                this.tu = null,
                this.eu = null,
                this._instance = t,
                this._surveyEventReceiver = null
            }
            initialize() {
                this.loadIfEnabled()
            }
            onRemoteConfig(t) {
                if (!this.qe.disable_surveys) {
                    if (!t.ok)
                        return Ia.warn("Remote config unavailable. Not loading surveys.");
                    var i = t.config.surveys;
                    if (X(i))
                        return Ia.warn("Flags not loaded yet. Not loading surveys.");
                    var e = H(i);
                    this.Kl = e ? i.length > 0 : i,
                    Ia.info("flags response received, isSurveysEnabled: " + this.Kl),
                    this.loadIfEnabled()
                }
            }
            reset() {
                try {
                    var t;
                    null == (t = this._surveyEventReceiver) || t.reset(),
                    localStorage.removeItem("lastSeenSurveyDate");
                    for (var i = [], e = 0; e < localStorage.length; e++) {
                        var r = localStorage.key(e);
                        (null != r && r.startsWith(Aa) || null != r && r.startsWith("inProgressSurvey_")) && i.push(r)
                    }
                    i.forEach((t => localStorage.removeItem(t)))
                } catch (t) {}
            }
            loadIfEnabled() {
                if (!this._surveyManager)
                    if (this.Yl)
                        Ia.info("Already initializing surveys, skipping...");
                    else if (this.qe.disable_surveys)
                        Ia.info(Ol);
                    else if (this.qe.cookieless_mode && this._instance.consent.isOptedOut())
                        Ia.info("Not loading surveys in cookieless mode without consent.");
                    else {
                        var t = null == v ? void 0 : v.__PosthogExtensions__;
                        if (t) {
                            if (!J(this.Kl) || this.qe.advanced_enable_surveys) {
                                var i = this.Kl || this.qe.advanced_enable_surveys;
                                this.Yl = !0;
                                try {
                                    var e = t.generateSurveys;
                                    if (e)
                                        return void this.iu(e, i);
                                    var r = t.loadExternalDependency;
                                    if (!r)
                                        return void this.ru(Tr);
                                    r(this._instance, "surveys", (e => {
                                        e || !t.generateSurveys ? this.ru("Could not load surveys script", e) : this.iu(t.generateSurveys, i)
                                    }
                                    ))
                                } catch (t) {
                                    throw this.ru("Error initializing surveys", t),
                                    t
                                } finally {
                                    this.Yl = !1
                                }
                            }
                        } else
                            Ia.error("PostHog Extensions not found.")
                    }
            }
            iu(t, i) {
                this._surveyManager = t(this._instance, i),
                this._surveyEventReceiver = new Il(this._instance),
                Ia.info("Surveys loaded successfully"),
                this.nu({
                    isLoaded: !0
                })
            }
            ru(t, i) {
                Ia.error(t, i),
                this.nu({
                    isLoaded: !1,
                    error: t
                })
            }
            onSurveysLoaded(t) {
                return this.Xl.push(t),
                this._surveyManager && this.nu({
                    isLoaded: !0
                }),
                () => {
                    this.Xl = this.Xl.filter((i => i !== t))
                }
            }
            getSurveys(t, i) {
                if (void 0 === i && (i = !1),
                this.qe.disable_surveys)
                    return Ia.info(Ol),
                    t([]);
                var e, r = this._instance.get_property(or);
                if (r && !i)
                    return t(r, {
                        isLoaded: !0
                    }),
                    void (this.su() && this.getSurveys(( () => {}
                    ), !0));
                "undefined" != typeof Promise && this.tu ? this.tu.then((i => t(i.surveys, i.context))) : ("undefined" != typeof Promise && (this.tu = new Promise((t => {
                    e = t
                }
                ))),
                this._instance._send_request({
                    url: this._instance.requestRouter.endpointFor("api", "/api/surveys/?token=" + this.qe.token),
                    method: "GET",
                    timestampMode: "query",
                    timeout: this.qe.surveys_request_timeout_ms,
                    callback: i => {
                        var r;
                        this.tu = null;
                        var s = i.statusCode;
                        if (200 !== s || !i.json) {
                            var n = "Surveys API could not be loaded, status: " + s;
                            0 !== s ? Ia.error(n) : i.error || Ia.warn(n),
                            this.eu = Date.now();
                            var o = {
                                isLoaded: !1,
                                error: n
                            };
                            return t([], o),
                            void (null == e || e({
                                surveys: [],
                                context: o
                            }))
                        }
                        this.eu = null;
                        var a, l = i.json.surveys || [], h = l.filter((t => function(t) {
                            return !(!t.start_date || t.end_date)
                        }(t) && (Ma(t) || function(t) {
                            var i;
                            return !(null == (i = t.conditions) || null == (i = i.actions) || null == (i = i.values) || !i.length)
                        }(t))));
                        h.length > 0 && (null == (a = this._surveyEventReceiver) || a.register(h)),
                        null == (r = this._instance.persistence) || r.register({
                            [or]: l,
                            [ar]: Date.now()
                        });
                        var u = {
                            isLoaded: !0
                        };
                        t(l, u),
                        null == e || e({
                            surveys: l,
                            context: u
                        })
                    }
                }))
            }
            su() {
                return this.au() && !this.tu && !this.ou()
            }
            au() {
                var t = this._instance.get_property(ar);
                return Z(t) && Date.now() - t > 3e5
            }
            ou() {
                return Z(this.eu) && 3e5 > Date.now() - this.eu
            }
            markSurveyAsSeen(t, i) {
                var e, r = {
                    id: t,
                    current_iteration: null !== (e = null == i ? void 0 : i.iteration) && void 0 !== e ? e : null
                };
                Oa(r);
                try {
                    localStorage.setItem("lastSeenSurveyDate", (new Date).toISOString())
                } catch (t) {}
            }
            nu(t) {
                for (var i of this.Xl)
                    try {
                        if (!t.isLoaded)
                            return i([], t);
                        this.getSurveys(i)
                    } catch (t) {
                        Ia.error("Error in survey callback", t)
                    }
            }
            getActiveMatchingSurveys(t, i) {
                if (void 0 === i && (i = !1),
                !X(this._surveyManager))
                    return this._surveyManager.getActiveMatchingSurveys(t, i);
                Ia.warn("init was not called")
            }
            lu(t) {
                var i = null;
                return this.getSurveys((e => {
                    var r;
                    i = null !== (r = e.find((i => i.id === t))) && void 0 !== r ? r : null
                }
                )),
                i
            }
            uu(t) {
                if (X(this._surveyManager))
                    return {
                        eligible: !1,
                        reason: Al
                    };
                var i = "string" == typeof t ? this.lu(t) : t;
                return i ? this._surveyManager.checkSurveyEligibility(i) : {
                    eligible: !1,
                    reason: "Survey not found"
                }
            }
            hu(t) {
                if (X(this._surveyManager))
                    return {
                        eligible: !1,
                        reason: Al
                    };
                var i = "string" == typeof t ? this.lu(t) : t;
                return i ? this._surveyManager.checkSurveyRenderability(i) : {
                    eligible: !1,
                    reason: "Survey not found"
                }
            }
            canRenderSurvey(t) {
                if (X(this._surveyManager))
                    return Ia.warn("init was not called"),
                    {
                        visible: !1,
                        disabledReason: Al
                    };
                var i = this.hu(t);
                return {
                    visible: i.eligible,
                    disabledReason: i.reason
                }
            }
            canRenderSurveyAsync(t, i) {
                return X(this._surveyManager) ? (Ia.warn("init was not called"),
                Promise.resolve({
                    visible: !1,
                    disabledReason: Al
                })) : new Promise((e => {
                    this.getSurveys((i => {
                        var r, s = null !== (r = i.find((i => i.id === t))) && void 0 !== r ? r : null;
                        if (s) {
                            var n = this.hu(s);
                            e({
                                visible: n.eligible,
                                disabledReason: n.reason
                            })
                        } else
                            e({
                                visible: !1,
                                disabledReason: "Survey not found"
                            })
                    }
                    ), i)
                }
                ))
            }
            renderSurvey(t, i, e) {
                var s;
                if (X(this._surveyManager))
                    Ia.warn("init was not called");
                else {
                    var n = "string" == typeof t ? this.lu(t) : t;
                    if (null != n && n.id)
                        if (Da.includes(n.type)) {
                            var o = null == r ? void 0 : r.querySelector(i);
                            if (o)
                                return null != (s = n.appearance) && s.surveyPopupDelaySeconds ? (Ia.info("Rendering survey " + n.id + " with delay of " + n.appearance.surveyPopupDelaySeconds + " seconds"),
                                void setTimeout(( () => {
                                    var t, i;
                                    Ia.info("Rendering survey " + n.id + " with delay of " + (null == (t = n.appearance) ? void 0 : t.surveyPopupDelaySeconds) + " seconds"),
                                    null == (i = this._surveyManager) || i.renderSurvey(n, o, e),
                                    Ia.info("Survey " + n.id + " rendered")
                                }
                                ), 1e3 * n.appearance.surveyPopupDelaySeconds)) : void this._surveyManager.renderSurvey(n, o, e);
                            Ia.warn("Survey element not found")
                        } else
                            Ia.warn("Surveys of type " + n.type + " cannot be rendered in the app");
                    else
                        Ia.warn("Survey not found")
                }
            }
            displaySurvey(t, i) {
                var e;
                if (X(this._surveyManager))
                    Ia.warn("init was not called");
                else {
                    var r = this.lu(t);
                    if (r) {
                        var s = r;
                        if (null != (e = r.appearance) && e.surveyPopupDelaySeconds && i.ignoreDelay && (s = g({}, r, {
                            appearance: g({}, r.appearance, {
                                surveyPopupDelaySeconds: 0
                            })
                        })),
                        i.displayType !== uo && i.initialResponses && Ia.warn("initialResponses is only supported for popover surveys. prefill will not be applied."),
                        !1 === i.ignoreConditions) {
                            var n = this.uu(r);
                            if (!n.eligible)
                                return void Ia.warn("Survey is not eligible to be displayed: ", n.reason)
                        }
                        "inline" !== i.displayType ? this._surveyManager.handlePopoverSurvey(s, i) : this.renderSurvey(s, i.selector, i.properties)
                    } else
                        Ia.warn("Survey not found")
                }
            }
            cancelPendingSurvey(t) {
                X(this._surveyManager) ? Ia.warn("init was not called") : this._surveyManager.cancelSurvey(t)
            }
            handlePageUnload() {
                var t;
                null == (t = this._surveyManager) || null == t.handlePageUnload || t.handlePageUnload()
            }
        }
    }, rh)
      , dh = {
        toolbar: class {
            constructor(t) {
                this.instance = t
            }
            du(t) {
                v.ph_toolbar_state = t
            }
            vu() {
                var t;
                return null !== (t = v.ph_toolbar_state) && void 0 !== t ? t : 0
            }
            initialize() {
                return this.maybeLoadToolbar()
            }
            maybeLoadToolbar(i, e, s) {
                if (void 0 === i && (i = void 0),
                void 0 === e && (e = void 0),
                void 0 === s && (s = void 0),
                Yr(this.instance.config))
                    return !1;
                if (!t || !r)
                    return !1;
                i = null != i ? i : t.location,
                s = null != s ? s : t.history;
                try {
                    if (!e) {
                        try {
                            t.localStorage.setItem("test", "test"),
                            t.localStorage.removeItem("test")
                        } catch (t) {
                            return !1
                        }
                        e = null == t ? void 0 : t.localStorage
                    }
                    var n, o = Dl || Mn(i.hash, "__posthog") || Mn(i.hash, "state"), a = o ? Hr(( () => JSON.parse(atob(decodeURIComponent(o))))) || Hr(( () => JSON.parse(decodeURIComponent(o)))) : null;
                    return a && "ph_authorize" === a.action ? ((n = a).source = "url",
                    n && Object.keys(n).length > 0 && (a.desiredHash ? i.hash = a.desiredHash : s ? s.replaceState(s.state, "", i.pathname + i.search) : i.hash = "")) : ((n = JSON.parse(e.getItem(jl) || "{}")).source = "localstorage",
                    delete n.userIntent),
                    !(!n.token || this.instance.config.token !== n.token || (this.loadToolbar(n),
                    0))
                } catch (t) {
                    return !1
                }
            }
            cu(t) {
                var i = v.ph_load_toolbar || v.ph_load_editor;
                !X(i) && V(i) ? i(t, this.instance) : Ll.warn("No toolbar load function found")
            }
            loadToolbar(i) {
                var e = !(null == r || !r.getElementById($s));
                if (!t || e)
                    return !1;
                var s = "custom" === this.instance.requestRouter.region && this.instance.config.advanced_disable_toolbar_metrics
                  , n = g({
                    token: this.instance.config.token
                }, i, {
                    apiURL: this.instance.requestRouter.endpointFor("ui")
                }, s ? {
                    instrument: !1
                } : {});
                if (t.localStorage.setItem(jl, JSON.stringify(g({}, n, {
                    source: void 0
                }))),
                2 === this.vu())
                    this.cu(n);
                else if (0 === this.vu()) {
                    var o;
                    this.du(1),
                    null == (o = v.__PosthogExtensions__) || null == o.loadExternalDependency || o.loadExternalDependency(this.instance, "toolbar", (t => {
                        if (t)
                            return Ll.error("[Toolbar] Failed to load", t),
                            void this.du(0);
                        this.du(2),
                        this.cu(n)
                    }
                    )),
                    Kr(t, "turbolinks:load", ( () => {
                        this.du(0),
                        this.loadToolbar(n)
                    }
                    ))
                }
                return !0
            }
            fu(t) {
                return this.loadToolbar(t)
            }
            maybeLoadEditor(t, i, e) {
                return void 0 === t && (t = void 0),
                void 0 === i && (i = void 0),
                void 0 === e && (e = void 0),
                this.maybeLoadToolbar(t, i, e)
            }
        }
    }
      , vh = g({
        experiments: Yl
    }, rh)
      , ch = {
        conversations: class {
            constructor(t) {
                this.pu = void 0,
                this._conversationsManager = null,
                this.gu = !1,
                this.mu = null,
                this.yu = !1,
                this._instance = t
            }
            initialize() {
                this.loadIfEnabled()
            }
            onRemoteConfig(t) {
                if (!this._instance.config.disable_conversations && (this.bu = t.ok,
                t.ok)) {
                    var i = t.config.conversations;
                    X(i) || (it(i) ? this.pu = i : (this.pu = i.enabled,
                    this.mu = i),
                    this.loadIfEnabled())
                }
            }
            reset() {
                var t;
                null == (t = this._conversationsManager) || t.reset(),
                this._conversationsManager = null,
                this.pu = void 0,
                this.mu = null,
                this.bu = void 0,
                this.yu = !1
            }
            loadIfEnabled() {
                if (!(this._conversationsManager || this.gu || this._instance.config.disable_conversations || Yr(this._instance.config) || this._instance.config.cookieless_mode && this._instance.consent.isOptedOut())) {
                    var t = null == v ? void 0 : v.__PosthogExtensions__;
                    if (t && !J(this.pu) && this.pu)
                        if (this.mu && this.mu.token) {
                            this.gu = !0;
                            try {
                                var i = t.initConversations;
                                if (i)
                                    return this._u(i),
                                    void (this.gu = !1);
                                var e = t.loadExternalDependency;
                                if (!e)
                                    return void this.wu(Tr);
                                e(this._instance, "conversations", (i => {
                                    i || !t.initConversations ? this.wu("Could not load conversations script", i) : this._u(t.initConversations),
                                    this.gu = !1
                                }
                                ))
                            } catch (t) {
                                this.wu("Error initializing conversations", t),
                                this.gu = !1
                            }
                        } else
                            Ql.error("Conversations enabled but missing token in remote config.")
                }
            }
            _u(t) {
                if (this.mu)
                    try {
                        this._conversationsManager = t(this.mu, this._instance),
                        this.yu = !1,
                        Ql.info("Conversations loaded successfully")
                    } catch (t) {
                        this.wu("Error completing conversations initialization", t)
                    }
                else
                    Ql.error("Cannot complete initialization: remote config is null")
            }
            wu(t, i) {
                Ql.error(t, i),
                this._conversationsManager = null,
                this.gu = !1,
                this.yu = !0
            }
            show() {
                this._conversationsManager ? this._conversationsManager.show() : Ql.warn("Conversations not loaded yet.")
            }
            hide() {
                this._conversationsManager && this._conversationsManager.hide()
            }
            isAvailable() {
                return !0 === this.pu && !Q(this._conversationsManager)
            }
            getUnavailableReason() {
                return this.isAvailable() ? null : this._instance.config.disable_conversations ? "disabled_by_config" : Yr(this._instance.config) ? "disabled_for_toolbar" : this._instance.config.cookieless_mode && this._instance.consent.isOptedOut() ? "consent_opted_out" : !1 === this.bu ? "remote_config_failed" : J(this.pu) ? this.bu ? "disabled_in_project" : "remote_config_pending" : this.pu ? X(this.mu) || !this.mu.token ? "missing_token" : null != v && v.__PosthogExtensions__ ? this.gu ? "initializing" : this.yu ? "load_failed" : "not_loaded" : "extensions_unavailable" : "disabled_in_project"
            }
            isVisible() {
                var t, i;
                return null !== (t = null == (i = this._conversationsManager) ? void 0 : i.isVisible()) && void 0 !== t && t
            }
            sendMessage(t, i, e) {
                var r = this;
                return p((function*() {
                    return r._conversationsManager ? r._conversationsManager.sendMessage(t, i, e) : (Ql.warn(Xl),
                    null)
                }
                ))()
            }
            getMessages(t, i) {
                var e = this;
                return p((function*() {
                    return e._conversationsManager ? e._conversationsManager.getMessages(t, i) : (Ql.warn(Xl),
                    null)
                }
                ))()
            }
            markAsRead(t) {
                var i = this;
                return p((function*() {
                    return i._conversationsManager ? i._conversationsManager.markAsRead(t) : (Ql.warn(Xl),
                    null)
                }
                ))()
            }
            getTickets(t) {
                var i = this;
                return p((function*() {
                    return i._conversationsManager ? i._conversationsManager.getTickets(t) : (Ql.warn(Xl),
                    null)
                }
                ))()
            }
            requestRestoreLink(t) {
                var i = this;
                return p((function*() {
                    return i._conversationsManager ? i._conversationsManager.requestRestoreLink(t) : (Ql.warn(Xl),
                    null)
                }
                ))()
            }
            restoreFromToken(t) {
                var i = this;
                return p((function*() {
                    return i._conversationsManager ? i._conversationsManager.restoreFromToken(t) : (Ql.warn(Xl),
                    null)
                }
                ))()
            }
            restoreFromUrlToken() {
                var t = this;
                return p((function*() {
                    return t._conversationsManager ? t._conversationsManager.restoreFromUrlToken() : (Ql.warn(Xl),
                    null)
                }
                ))()
            }
            getCurrentTicketId() {
                var t, i;
                return null !== (t = null == (i = this._conversationsManager) ? void 0 : i.getCurrentTicketId()) && void 0 !== t ? t : null
            }
            getWidgetSessionId() {
                var t, i;
                return null !== (t = null == (i = this._conversationsManager) ? void 0 : i.getWidgetSessionId()) && void 0 !== t ? t : null
            }
            ks() {
                var t;
                null == (t = this._conversationsManager) || t.setIdentity()
            }
            xs() {
                var t;
                null == (t = this._conversationsManager) || t.clearIdentity()
            }
        }
    }
      , fh = {
        logs: class {
            constructor(i) {
                var e, r = this;
                this.ku = !1,
                this.xu = !1,
                this.st = ye("[logs]"),
                this.Su = g({}, this.st, {
                    error() {
                        for (var t = arguments.length, i = new Array(t), e = 0; t > e; e++)
                            i[e] = arguments[e];
                        i.some(eh) || r.st.error(...i)
                    }
                }),
                this.gr = [],
                this.Cu = [],
                this.za = 0,
                this.Mu = () => {
                    var t, i;
                    this.za = 0,
                    null == (t = this.Tu) || t.onReconnect(),
                    null == (i = this.Eu) || i.onReconnect()
                }
                ,
                this._instance = i,
                this._instance && null != (e = this._instance.config.logs) && e.captureConsoleLogs && (this.ku = !0),
                t && Kr(t, "online", this.Mu)
            }
            Iu(t, i, e, r) {
                var s, n = function(t, i) {
                    var e, r, s, n, o, a, l, h = null !== (e = null == t ? void 0 : t.flushIntervalMs) && void 0 !== e ? e : 3e3, u = null !== (r = null == t ? void 0 : t.maxBufferSize) && void 0 !== r ? r : 100, d = null != i && i.consoleCapture ? void 0 : null !== (s = null == t ? void 0 : t.maxLogsPerInterval) && void 0 !== s ? s : 1e3, v = J(d) ? Math.max(u, 2048) : Math.max(u, d), c = null == t ? void 0 : t.resourceAttributes;
                    return {
                        serviceName: null !== (n = null !== (o = null == c ? void 0 : c["service.name"]) && void 0 !== o ? o : null == t ? void 0 : t.serviceName) && void 0 !== n ? n : null == i ? void 0 : i.serviceNameDefault,
                        serviceVersion: null !== (a = null == c ? void 0 : c["service.version"]) && void 0 !== a ? a : null == t ? void 0 : t.serviceVersion,
                        environment: null !== (l = null == c ? void 0 : c["deployment.environment"]) && void 0 !== l ? l : null == t ? void 0 : t.environment,
                        resourceAttributes: c,
                        beforeSend: null == t ? void 0 : t.beforeSend,
                        flushIntervalMs: h,
                        maxBufferSize: u,
                        maxQueueSize: v,
                        maxBatchRecordsPerPost: 100,
                        rateCapWindowMs: h,
                        maxLogsPerInterval: d,
                        backgroundFlushBudgetMs: 0,
                        terminationFlushBudgetMs: 0
                    }
                }(null == (s = this._instance) || null == (s = s.config) ? void 0 : s.logs, e);
                return [new Mi(this.Pu(t, i),n,this.Su,( () => this.Ru()),(t => t()),void 0,r), n]
            }
            Au() {
                var t, i = null == (t = this._instance) || null == (t = t.config) ? void 0 : t.logs;
                if (!this.Tu || this.Fu !== i) {
                    var e;
                    null == (e = this.Tu) || e.reset(),
                    this.Fu = i;
                    var r = this.Iu(( () => this.gr), (t => {
                        this.gr = t
                    }
                    ));
                    this.Tu = r[0],
                    this.Ou = r[1]
                }
                return this.Tu
            }
            Lu() {
                var t, i = null == (t = this._instance) || null == (t = t.config) ? void 0 : t.logs;
                if (!this.Eu || this.Du !== i) {
                    var e;
                    null == (e = this.Eu) || e.reset(),
                    this.Du = i;
                    var r = this.Iu(( () => this.Cu), (t => {
                        this.Cu = t
                    }
                    ), {
                        serviceNameDefault: "posthog-browser-logs",
                        consoleCapture: !0
                    }, Zl);
                    this.Eu = r[0],
                    this.$u = r[1]
                }
                return this.Eu
            }
            initialize() {
                this.loadIfEnabled()
            }
            onRemoteConfig(t) {
                var i;
                if (t.ok) {
                    var e = null == (i = t.config.logs) ? void 0 : i.captureConsoleLogs;
                    !X(e) && e && (this.ku = !0,
                    this.loadIfEnabled())
                }
            }
            reset() {
                var t, i;
                this.gr = [],
                null == (t = this.Tu) || t.reset(),
                this.Cu = [],
                null == (i = this.Eu) || i.reset(),
                this.za = 0
            }
            captureLog(t) {
                this.Au().captureLog(t)
            }
            he(t) {
                this.Lu().captureLog(t)
            }
            get logger() {
                return this.Nu || (this.Nu = {
                    trace: (t, i) => this.captureLog({
                        body: t,
                        level: "trace",
                        attributes: i
                    }),
                    debug: (t, i) => this.captureLog({
                        body: t,
                        level: "debug",
                        attributes: i
                    }),
                    info: (t, i) => this.captureLog({
                        body: t,
                        level: "info",
                        attributes: i
                    }),
                    warn: (t, i) => this.captureLog({
                        body: t,
                        level: "warn",
                        attributes: i
                    }),
                    error: (t, i) => this.captureLog({
                        body: t,
                        level: "error",
                        attributes: i
                    }),
                    fatal: (t, i) => this.captureLog({
                        body: t,
                        level: "fatal",
                        attributes: i
                    })
                }),
                this.Nu
            }
            flushLogs(t) {
                t ? this.qu(t) : (this.Tu && this.Tu.flush().catch((t => this.ju(t))),
                this.Eu && this.Eu.flush().catch((t => this.ju(t))))
            }
            ju(t) {
                eh(t) || this.st.error("PostHog logs flush failed:", t)
            }
            loadIfEnabled() {
                if (this.ku && !this.xu) {
                    var t = null == v ? void 0 : v.__PosthogExtensions__;
                    if (t) {
                        var i = t.loadExternalDependency;
                        i ? i(this._instance, "logs", (i => {
                            var e;
                            i || null == (e = t.logs) || !e.initializeLogs ? this.st.error("Could not load logs script", i) : (t.logs.initializeLogs(this._instance),
                            this.xu = !0)
                        }
                        )) : this.st.error(Tr)
                    } else
                        this.st.error("PostHog Extensions not found.")
                }
            }
            Pu(t, i) {
                var e = this._instance;
                return {
                    get isDisabled() {
                        return !1
                    },
                    get optedOut() {
                        return !e.is_capturing()
                    },
                    getPersistedProperty: i => i === S.LogsQueue ? t() : void 0,
                    setPersistedProperty(t, e) {
                        var r;
                        t === S.LogsQueue && i(null !== (r = e) && void 0 !== r ? r : [])
                    },
                    $t: t => this.$t(t),
                    getLibraryId: () => c.LIB_NAME,
                    getLibraryVersion: () => c.LIB_VERSION
                }
            }
            $t(t) {
                return new Promise((i => {
                    if (In(this.za, 3))
                        i({
                            kind: "fatal",
                            error: ih(void 0, "logs endpoint is unreachable, dropping batch")
                        });
                    else {
                        var e = !1
                          , r = t => {
                            e || (e = !0,
                            clearTimeout(s),
                            i(t))
                        }
                          , s = setTimeout(( () => {
                            this.st.warn("Logs request timed out before receiving a response"),
                            r({
                                kind: "retry-later",
                                error: ih(void 0, "logs request timed out")
                            })
                        }
                        ), 9e4);
                        this._instance._send_request({
                            method: "POST",
                            url: this.Bu(),
                            data: t,
                            compression: "best-available",
                            batchKey: "logs",
                            fireCallbackOnDrop: !0,
                            callback: t => {
                                var i = t.statusCode;
                                if (this.Hu(i),
                                i >= 200 && 300 > i)
                                    r({
                                        kind: "ok"
                                    });
                                else if (413 === i)
                                    r({
                                        kind: "too-large"
                                    });
                                else if (0 !== i && 429 !== i && 500 > i)
                                    r({
                                        kind: "fatal",
                                        error: new Error("logs request failed with status " + i)
                                    });
                                else {
                                    var e;
                                    0 === i ? (t.error || this.st.warn("Logs request failed before receiving an HTTP response"),
                                    r({
                                        kind: "retry-later",
                                        error: ih(t.error, "logs request failed before receiving an HTTP response")
                                    })) : r({
                                        kind: "retry-later",
                                        error: null !== (e = t.error) && void 0 !== e ? e : new Error("logs request failed with status " + i)
                                    })
                                }
                            }
                        })
                    }
                }
                ))
            }
            Hu(t) {
                (0 !== t || this._instance.__loaded) && (this.za = An(t, this.za, 3, ( () => this.st.warn("Log requests are failing before receiving an HTTP response; this can happen due to network issues, CORS, browser blocking, or ad blockers. Stopped sending logs; will try again when connectivity changes."))))
            }
            qu(t) {
                this.gr.length > 0 && this.Uu(t, this.gr, this.Ou, c.LIB_NAME, (t => {
                    this.gr = t
                }
                )),
                this.Cu.length > 0 && this.Uu(t, this.Cu, this.$u, Zl, (t => {
                    this.Cu = t
                }
                ))
            }
            Uu(t, i, e, r, s) {
                if (0 !== i.length) {
                    var n = i.map((t => t.record));
                    s([]);
                    var o = Ci(n, Ri(e, c.LIB_NAME, c.LIB_VERSION), r, c.LIB_VERSION);
                    this._instance._send_request({
                        method: "POST",
                        url: this.Bu(),
                        data: o,
                        compression: "best-available",
                        batchKey: "logs",
                        transport: t
                    })
                }
            }
            Bu() {
                return this._instance.requestRouter.endpointFor("api", "/i/v1/logs") + "?token=" + encodeURIComponent(this._instance.config.token)
            }
            Ru() {
                var t, i = {};
                if (i.distinctId = this._instance.get_distinct_id(),
                this._instance.sessionManager) {
                    var e = this._instance.sessionManager.checkAndGetSessionAndWindowId(!0)
                      , r = e.windowId
                      , s = e.sessionStartTimestamp
                      , n = e.lastActivityTimestamp;
                    i.sessionId = e.sessionId,
                    i.windowId = r,
                    X(s) || (i.sessionStartTimestamp = s),
                    X(n) || (i.lastActivityTimestamp = n)
                }
                if (null != v && null != (t = v.location) && t.href && (i.currentUrl = this._instance.config.disable_capture_url_hashes ? wi(v.location.href) : v.location.href),
                this._instance.featureFlags) {
                    var o = this._instance.featureFlags.getFlags();
                    o && o.length > 0 && (i.activeFeatureFlags = o)
                }
                return i
            }
        }
    }
      , ph = {
        metrics: class {
            constructor(t) {
                this.st = ye("[metrics]"),
                this._instance = t
            }
            initialize() {}
            Au() {
                var t, i, e = null == (t = this._instance) || null == (t = t.config) ? void 0 : t.metrics;
                return this.Tu && this.Fu === e || (null == (i = this.Tu) || i.reset(),
                this.Fu = e,
                this.Tu = new Di(this.Pu(),function(t) {
                    var i, e, r, s, n, o = null == t ? void 0 : t.resourceAttributes;
                    return {
                        serviceName: null !== (i = null == o ? void 0 : o["service.name"]) && void 0 !== i ? i : null == t ? void 0 : t.serviceName,
                        serviceVersion: null !== (e = null == o ? void 0 : o["service.version"]) && void 0 !== e ? e : null == t ? void 0 : t.serviceVersion,
                        environment: null !== (r = null == o ? void 0 : o["deployment.environment"]) && void 0 !== r ? r : null == t ? void 0 : t.environment,
                        resourceAttributes: o,
                        beforeSend: null == t ? void 0 : t.beforeSend,
                        flushIntervalMs: null !== (s = null == t ? void 0 : t.flushIntervalMs) && void 0 !== s ? s : 1e4,
                        maxSeriesPerFlush: null !== (n = null == t ? void 0 : t.maxSeriesPerFlush) && void 0 !== n ? n : 1e3
                    }
                }(e),this.st)),
                this.Tu
            }
            count(t, i, e) {
                void 0 === i && (i = 1),
                this.Au().count(t, i, e)
            }
            gauge(t, i, e) {
                this.Au().gauge(t, i, e)
            }
            histogram(t, i, e) {
                this.Au().histogram(t, i, e)
            }
            flush(t) {
                if (!this.Tu)
                    return Promise.resolve();
                if (t) {
                    var i = this.Tu.drainWindow();
                    return i && this.Xt(i, t),
                    Promise.resolve()
                }
                return this.Tu.flush().catch((t => this.st.error("PostHog metrics flush failed:", t)))
            }
            reset() {
                var t;
                null == (t = this.Tu) || t.reset()
            }
            Pu() {
                var t = this._instance
                  , i = this;
                return {
                    get isDisabled() {
                        return !1
                    },
                    get optedOut() {
                        return !t.is_capturing()
                    },
                    Xt: t => i.Xt(t),
                    getLibraryId: () => c.LIB_NAME,
                    getLibraryVersion: () => c.LIB_VERSION
                }
            }
            Xt(t, i) {
                return new Promise((e => {
                    var r = !1
                      , s = t => {
                        r || (r = !0,
                        clearTimeout(n),
                        e(t))
                    }
                      , n = setTimeout(( () => s({
                        kind: "retry-later",
                        error: new Error("metrics request timed out")
                    })), 9e4);
                    this._instance._send_request(g({
                        method: "POST",
                        url: this.zu(),
                        data: t,
                        compression: "best-available",
                        batchKey: "metrics"
                    }, i && {
                        transport: i
                    }, {
                        fireCallbackOnDrop: !0,
                        callback(t) {
                            var i = t.statusCode;
                            if (i >= 200 && 300 > i)
                                s({
                                    kind: "ok"
                                });
                            else if (413 === i)
                                s({
                                    kind: "too-large"
                                });
                            else if (0 !== i && 429 !== i && 500 > i)
                                s({
                                    kind: "fatal",
                                    error: new Error("metrics request failed with status " + i)
                                });
                            else {
                                var e;
                                s({
                                    kind: "retry-later",
                                    error: null !== (e = t.error) && void 0 !== e ? e : new Error("metrics request failed with status " + i)
                                })
                            }
                        }
                    }))
                }
                ))
            }
            zu() {
                return this._instance.requestRouter.endpointFor("api", "/i/v1/metrics") + "?token=" + encodeURIComponent(this._instance.config.token)
            }
        }
    }
      , gh = g({}, rh, sh, nh, oh, ah, lh, uh, hh, dh, vh, ch, fh, ph);
    nl.__defaultExtensionClasses = g({}, gh),
    function() {
        c.SDK_DIST_CHANNEL = "cdn";
        var i = v.posthog;
        if (!i || H(i._i)) {
            var e = Va[Za] = new nl;
            if (i) {
                var s = [];
                zr(i._i, (function(t) {
                    if (t && H(t)) {
                        var r = e.init(t[0], t[1], t[2])
                          , n = i[t[2]] || i;
                        r.__loaded && -1 === s.indexOf(n) && (s.push(n),
                        r._execute_array.call(r.people, n.people),
                        r._execute_array(n))
                    }
                }
                ))
            }
            e.__SV = 1,
            v.posthog = e,
            function() {
                function i() {
                    i.done || (i.done = !0,
                    tl = !1,
                    zr(Va, (function(t) {
                        t._dom_loaded()
                    }
                    )))
                }
                null != r && r.addEventListener ? "complete" === r.readyState ? i() : Kr(r, "DOMContentLoaded", i, {
                    capture: !1
                }) : t && me.error("Browser doesn't support `document.addEventListener` so PostHog couldn't be initialized")
            }()
        }
    }()
}();
//# sourceMappingURL=array.js.map
