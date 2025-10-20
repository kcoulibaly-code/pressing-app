(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_forms_afg_contre_etude_CA-CE3_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/carcasse_ppo/utils/GaugeV2.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/carcasse_ppo/utils/GaugeV2.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/gsap-core.js");
/* harmony import */ var _GetScoringColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GetScoringColor */ "./resources/js/components/forms/afg/carcasse_ppo/utils/GetScoringColor.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    maxScore: {
      type: Number,
      required: true
    },
    score: {
      type: Number,
      required: true
    },
    displayLabel: {
      type: Boolean,
      "default": true
    },
    disc: {
      type: Boolean,
      "default": false
    },
    label: {
      type: String
    },
    size: {
      type: Number,
      "default": 80
    },
    depth: {
      type: Number,
      "default": 10
    },
    valueStyle: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    getFillColor: {
      type: Function,
      "default": function _default() {
        return "blue";
      }
    },
    duration: {
      type: Number,
      "default": 1
    }
  },
  data: function data() {
    return {
      selected: this.score,
      gaugeSize: "".concat(this.size, "px"),
      valueSize: "".concat(this.size - this.depth, "px")
    };
  },
  mounted: function mounted() {
    if (!isNaN(Number(this.score))) {
      this.animateGauge(this.score);
    }
  },
  watch: {
    score: function score(newVal) {
      this.animateGauge(newVal);
    }
  },
  methods: {
    animateGauge: function animateGauge(val) {
      var _this = this;
      var fillPercentage = this.maxScore === 0 ? 0 : val / this.maxScore * 100;
      var startCount = 0;
      var endCount = val;
      var num = {
        "var": startCount
      };
      var changeNumber = function changeNumber() {
        if (_this.displayLabel) {
          _this.$refs.scoreValue.innerHTML = _this.label ? (0,_GetScoringColor__WEBPACK_IMPORTED_MODULE_0__.getScale)(num["var"].toFixed()) : num["var"].toFixed();
        }
        _this.$refs.scoreValue.style.color = _this.getFillColor(fillPercentage, _this.score);
      };
      var fillAnim = gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.fromTo(this.$refs.fill, {
        "--p": "0%"
      }, {
        duration: this.duration,
        "--p": "".concat(fillPercentage, "%"),
        "--c": this.getFillColor(fillPercentage, this.score)
      });
      if (this.displayLabel) {
        gsap__WEBPACK_IMPORTED_MODULE_1__.TweenMax.to(num, 1, {
          "var": endCount,
          onUpdate: changeNumber,
          ease: gsap__WEBPACK_IMPORTED_MODULE_2__.Power1.easeIn
        });
      }
      fillAnim.play();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/carcasse_ppo/utils/ScoringScale.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/carcasse_ppo/utils/ScoringScale.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ScoreScale"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/carcasse_ppo/utils/ScoringView.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/carcasse_ppo/utils/ScoringView.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GaugeV2_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GaugeV2.vue */ "./resources/js/components/forms/afg/carcasse_ppo/utils/GaugeV2.vue");
/* harmony import */ var _ScoringScale_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScoringScale.vue */ "./resources/js/components/forms/afg/carcasse_ppo/utils/ScoringScale.vue");
/* harmony import */ var _GetScoringColor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GetScoringColor */ "./resources/js/components/forms/afg/carcasse_ppo/utils/GetScoringColor.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    GaugeV2: _GaugeV2_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    ScoringScale: _ScoringScale_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    scale: {
      type: String,
      "default": 'A'
    },
    score: {
      type: Number,
      "default": undefined
    },
    risk: {
      type: String,
      "default": undefined
    },
    personalScore: {
      type: Number,
      "default": undefined
    },
    professionalScore: {
      type: Number,
      "default": undefined
    },
    stability: {
      type: Number,
      "default": undefined
    }
  },
  data: function data() {
    return {
      scoreValue: this.score
    };
  },
  computed: {
    getFillColorWrapper: function getFillColorWrapper() {
      return function (_, s) {
        return (0,_GetScoringColor__WEBPACK_IMPORTED_MODULE_2__.getFillColor)(s);
      };
    }
  },
  methods: {
    getFillColor: function getFillColor(score) {
      return (0,_GetScoringColor__WEBPACK_IMPORTED_MODULE_2__.getFillColor)(score);
    },
    getScoringObservation: function getScoringObservation(score) {
      return (0,_GetScoringColor__WEBPACK_IMPORTED_MODULE_2__.getScoringObservation)(score);
    },
    getScoringMsg: function getScoringMsg(score) {
      return (0,_GetScoringColor__WEBPACK_IMPORTED_MODULE_2__.getScoringMsg)(score);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude/CA-CE3.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude/CA-CE3.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/ContextMenu */ "./resources/js/components/shared/ContextMenu.vue");
/* harmony import */ var _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/ContextMenuItem */ "./resources/js/components/shared/ContextMenuItem.vue");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vueform/multiselect/dist/multiselect.vue2 */ "./node_modules/@vueform/multiselect/dist/multiselect.vue2.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../helpers/indexedDB */ "./resources/js/helpers/indexedDB.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_helpers_indexedDB__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_modals_ResultatScoringsRating_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/modals/ResultatScoringsRating.vue */ "./resources/js/components/modals/ResultatScoringsRating.vue");
/* harmony import */ var _carcasse_ppo_utils_ScoringView_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../carcasse_ppo/utils/ScoringView.vue */ "./resources/js/components/forms/afg/carcasse_ppo/utils/ScoringView.vue");
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }








// ? IndexedDB helper for formDataToBeWatched Cache management

;



/**
 * Cache Management variables
 */
var indexedDBName = "CREDITFLOW_TABLES";
var collectionName = "TABLES";
var documentName = "T";
var documentId = null;
var _cache,
  _lastSaveTime = null,
  _onlineSaveIntervalTimeInSeconds = 30;
var _DEBUG = process.env.MIX_APP_DEBUG;
var _cacheAutosaveInterval = null;
var _timeSpentInSeconds = 0;
// -- End Cache Management variables
window.$ = window.jQuery = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "FicheSignaletique",
  display: "FicheSignaletique",
  components: {
    ContextMenu: _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__["default"],
    ContextMenuItem: _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"],
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_9__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_9__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_9__.ChevronDownIcon,
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_9__.PlusIcon,
    BookOpenIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_9__.BookOpenIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_9__.TrashIcon,
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_9__.AirplayIcon,
    Multiselect: _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_5__["default"],
    ResultatScoringsRating: _components_modals_ResultatScoringsRating_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    ScoringView: _carcasse_ppo_utils_ScoringView_vue__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  computed: {
    getFaciliteSolicite: function getFaciliteSolicite() {
      if (this.meta_data["dossier_credit"]["cred_pub_tb_120004"] != undefined) {
        this.facilites_sollicitees = this.meta_data["dossier_credit"]["cred_pub_tb_120004"]["facilites_sollicitees"];
      }
      return this.facilites_sollicitees;
    },
    getNoteEtCouleursInitial: function getNoteEtCouleursInitial() {
      var colorMap = [{
        min: 0,
        max: 9,
        color: 'rgb(223, 92, 36)'
      },
      // Rouge-orangé (score très bas)
      {
        min: 10,
        max: 15,
        color: 'rgb(255, 153, 51)'
      },
      // Orange clair
      {
        min: 15,
        max: 20,
        color: 'rgb(163, 186, 120)'
      },
      // Vert clair
      {
        min: 20,
        max: 25,
        color: 'rgb(93, 203, 106)'
      },
      // Vert
      {
        min: 25,
        max: 30,
        color: 'rgb(46, 158, 85)'
      } // Vert foncé (maximum)
      ];
      function couleur(score) {
        for (var i = 0; i < colorMap.length; i++) {
          var range = colorMap[i];
          if (score >= range.min && score <= range.max) {
            return range.color;
          }
        }
        return 'rgb(175, 54, 18)';
      }
      var s = this.scores;
      var noteFinale = s.personnel * 0.20 + s.professionnel * 0.30 + s.stabilite * 0.30 + s.reputation * 0.20;
      return {
        couleurs: {
          personnel: couleur(s.personnel),
          professionnel: couleur(s.professionnel),
          stabilite: couleur(s.stabilite),
          reputation: couleur(s.reputation)
        },
        note: Math.round(noteFinale * 100) / 100,
        couleurFinale: couleur(noteFinale)
      };
    },
    getNoteEtCouleursFinal: function getNoteEtCouleursFinal() {
      var colorMap = [{
        min: 0,
        max: 9,
        color: 'rgb(223, 92, 36)'
      },
      // Rouge-orangé (score très bas)
      {
        min: 10,
        max: 15,
        color: 'rgb(255, 153, 51)'
      },
      // Orange clair
      {
        min: 15,
        max: 20,
        color: 'rgb(163, 186, 120)'
      },
      // Vert clair
      {
        min: 20,
        max: 25,
        color: 'rgb(93, 203, 106)'
      },
      // Vert
      {
        min: 25,
        max: 30,
        color: 'rgb(46, 158, 85)'
      } // Vert foncé (maximum)
      ];
      function couleur(score) {
        for (var i = 0; i < colorMap.length; i++) {
          var range = colorMap[i];
          if (score >= range.min && score <= range.max) {
            return range.color;
          }
        }
        return 'rgb(175, 54, 18)';
      }
      var s = this.scoresFinal;
      var noteFinale = s.personnel * 0.20 + s.professionnel * 0.30 + s.stabilite * 0.30 + s.reputation * 0.20;
      return {
        couleurs: {
          personnel: couleur(s.personnel),
          professionnel: couleur(s.professionnel),
          stabilite: couleur(s.stabilite),
          reputation: couleur(s.reputation)
        },
        note: Math.round(noteFinale * 100) / 100,
        couleurFinale: couleur(noteFinale)
      };
    }
  },
  created: function created() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["default"].loadUserData().then(function (res) {
              var _this$authcheckUsr, _this$meta_data$dossi, _this$authcheckUsr2, _this$meta_data$dossi2;
              _this.authcheck = true;
              _this.authcheckUsr = res.data;
              _this.authcheckStatus = res.status;
              _this.formDataToBeWatched.use_analyste = (_this$authcheckUsr = _this.authcheckUsr) === null || _this$authcheckUsr === void 0 ? void 0 : _this$authcheckUsr.name;
              if (((_this$meta_data$dossi = _this.meta_data['dossier_credit']) === null || _this$meta_data$dossi === void 0 || (_this$meta_data$dossi = _this$meta_data$dossi.final_outcome) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.outcome) == 0 && ['DUxMP2ZQheGFreQt5z2s', 'r472oAxtaFJSlsh5'].includes((_this$authcheckUsr2 = _this.authcheckUsr) === null || _this$authcheckUsr2 === void 0 ? void 0 : _this$authcheckUsr2.role_uuid) && ((_this$meta_data$dossi2 = _this.meta_data['dossier_credit']) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2.is_ajournee) == true) {
                _this.onClasseRisqueChange();
              }
            })["catch"](function (err) {
              _this.loadWithError(err);
            });
          case 2:
            EventBus.$on("dossier-updated-dcp-1", _this.handleDossierUpdate);
            EventBus.$on("dossier-updated-ca-ce-2", function (data) {
              _this.calculeScolariaFinalScore();
            });
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  mounted: function mounted() {
    var _this2 = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var personnel, professionnel, stabilite;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _this2.loadRetrieved();
            _this2.loadTbAttrs();
            _this2.tableClosedOrOpened();
            _this2.calculeScolariaFinalScore();
            _this2.loadScoringData();
            EventBus.$on('update-sni', function () {
              _this2.onClasseRisqueChange();
            });

            // this.loadDate();
            _this2.scoresParFaciliteInitial = [];
            _this2.scores.personnel = _this2.getAgeInterval() * 0.3 + _this2.getMatrimonialeInterval() * 0.3 + _this2.getNombreEnfantsInterval() * 0.4;
            // this.scores.professionnel =  (this.formDataToBeWatched.scolaria_type_contrat_ponderation*0.4) + (this.formDataToBeWatched.scolaria_statut_ponderation*0.35);
            // this.scores.stabilite = (this.formDataToBeWatched.scolaria_anciennete_emploi_ponderation*0.45) + (this.formDataToBeWatched.scolaria_habitation_ponderation*0.55);
            _this2.scores.professionnel = _this2.formDataToBeWatched.scolaria_type_contrat_ponderation * 0.3 + _this2.formDataToBeWatched.scolaria_statut_ponderation * 0.70;
            _this2.scores.stabilite = _this2.formDataToBeWatched.scolaria_anciennete_emploi_ponderation * 0.60 + _this2.formDataToBeWatched.scolaria_habitation_ponderation * 0.40;
            _this2.scores.reputation = (_this2.formDataToBeWatched.scolaria_relation_ponderation || 0) * 0.1 + (_this2.formDataToBeWatched.scolaria_credit_anterieur_ponderation || 0) * 0.3 + _this2.formDataToBeWatched.scolaria_credit_en_cours_ponderation * 0.2 || 0;
            if (_this2.meta_data["dossier_credit"]["cred_pub_tb_120004"] != undefined) {
              _this2.facilites_sollicitees = _this2.meta_data["dossier_credit"]["cred_pub_tb_120004"]["facilites_sollicitees"];
              _this2.facilites_sollicitees.forEach(function (facilite) {
                var _this2$getGarantiesDe;
                var garantieScore = ((_this2$getGarantiesDe = _this2.getGarantiesDetailsForFaciliteInit(facilite.uuid)) === null || _this2$getGarantiesDe === void 0 ? void 0 : _this2$getGarantiesDe.total) || 0;
                var reputationWithGarantie = _this2.scores.reputation + garantieScore * 0.40;
                _this2.scores.reputation = Math.floor(reputationWithGarantie * 100) / 100; //reputationWithGarantie; //reputationWithGarantie;
                var score = _this2.scores.personnel * 0.20 + _this2.scores.professionnel * 0.30 + _this2.scores.stabilite * 0.30 + _this2.scores.reputation * 0.20;
                var note = Math.round(score * 100) / 100;
                _this2.scoresParFaciliteInitial.push({
                  facilite: facilite,
                  note: note,
                  reputation: _this2.scores.reputation
                });
              });
              personnel = _this2.scores.personnel;
              professionnel = _this2.scores.professionnel;
              stabilite = _this2.scores.stabilite;
              _this2.scores.personnel = Math.round(personnel);
              _this2.scores.professionnel = Math.round(professionnel);
              _this2.scores.stabilite = Math.round(stabilite);
            }
          case 12:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  },
  data: function data() {
    var _this$meta_data, _this$meta_data2, _this$meta_data3, _this$meta_data4, _this$meta_data5, _this$meta_data6, _this$meta_data7, _this$meta_data8, _this$meta_data9, _this$meta_data0, _this$meta_data1, _this$meta_data10, _this$meta_data11, _this$meta_data12, _this$meta_data13, _this$meta_data14, _this$meta_data15, _this$meta_data16, _this$meta_data17, _this$meta_data18, _this$meta_data19, _this$meta_data20, _this$meta_data21, _this$meta_data22, _this$meta_data23, _ref;
    var vm = this;
    return _ref = {
      scoraliaHost: "https://ebapis.com/api/v2.1/single-predict/",
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_2__["default"].host,
      classe_riques_bg_color: {
        'background-color': "#e9ecef"
      },
      scoring_panels: [{
        id: 2,
        name: "Scoring DCPP",
        slug: "scocing_initial"
      }, {
        id: 1,
        name: "Scoring DE",
        slug: "scocing_final"
      }],
      selectedScoring: null,
      seen: true,
      seen1: true,
      seen2: true,
      seen3: true,
      seen4: true,
      seen5: true,
      seen6: true,
      seen_2: true,
      seen8: true,
      authcheck: false,
      authcheckUsr: null,
      authcheckStatus: null,
      watchInPause: false,
      initLoad: true,
      cafInfo: null,
      clients: [],
      encours: null,
      gl_key: null,
      contextList: [
      // Ajouter note
      {
        title: "Commenter",
        icon: "icofont icofont-comment",
        handler: function () {
          this.openNotesModal();
        }.bind(vm),
        disabled: false
      }, {
        title: "Assigner",
        icon: "icofont icofont-check",
        handler: function handler() {},
        disabled: true
      }, {
        title: "Supprimer",
        icon: "icofont icofont-trash",
        handler: this.startDeletingTbFromContext,
        disabled: false
      }],
      meta_parseable: {
        cred_pub_key: this.meta_data['cred_pub_key'],
        tb_name: this.tb_name
      },
      AGE_RETRAITE: 60,
      formDataToBeWatched: {
        notes: [],
        global_env_entity: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_2__["default"].loadableEntity()[0].toUpperCase(),
        score_global_scolaria: "",
        use_analyste: "",
        date_saisie: "",
        credit_ant_imp: "",
        credit_encours: "",
        total_score: 15,
        score_minimal_pour_accord: "9",
        score_global: 0,
        score_global_scoring: "",
        observations: "",
        sf_score_global: 0,
        sf_total_score: 0,
        sf_score_minimal_pour_accord: "83",
        scolaria_age_ponderation: "",
        scolaria_age_ponderation_final: "",
        scolaria_matrimonial_ponderation: "",
        scolaria_matrimonial_ponderation_final: "",
        scolaria_nb_enfants_ponderation: "",
        scolaria_nb_enfants_ponderation_final: "",
        scolaria_retraite_ponderation: "",
        scolaria_retraite_ponderation_final: "",
        scolaria_statut_ponderation: "",
        scolaria_statut_ponderation_final: "",
        scolaria_type_contrat_ponderation: "",
        scolaria_type_contrat_ponderation_final: "",
        scolaria_habitation_ponderation: "",
        scolaria_habitation_ponderation_final: "",
        scolaria_relation_ponderation: "",
        scolaria_relation_ponderation_final: "",
        scolaria_credit_anterieur_ponderation: "",
        scolaria_credit_anterieur_ponderation_final: "",
        scolaria_credit_en_cours_ponderation: "",
        scolaria_credit_en_cours_ponderation_final: "",
        scolaria_garanties_ponderation: "",
        scolaria_garanties_ponderation_final: "",
        scolaria_anciennete_emploi_ponderation: "",
        scolaria_anciennete_emploi_ponderation_final: "",
        nbre_enfant: ((_this$meta_data = this.meta_data) === null || _this$meta_data === void 0 || (_this$meta_data = _this$meta_data.dossier_credit) === null || _this$meta_data === void 0 || (_this$meta_data = _this$meta_data.cred_pub_tb_14073) === null || _this$meta_data === void 0 ? void 0 : _this$meta_data.nbre_enfant) != null ? this.meta_data.dossier_credit.cred_pub_tb_14073.nbre_enfant : (_this$meta_data2 = this.meta_data) === null || _this$meta_data2 === void 0 || (_this$meta_data2 = _this$meta_data2.dossier_credit) === null || _this$meta_data2 === void 0 || (_this$meta_data2 = _this$meta_data2.cred_pub_tb_120001) === null || _this$meta_data2 === void 0 ? void 0 : _this$meta_data2.nbre_enfant,
        matrimoniale: ((_this$meta_data3 = this.meta_data) === null || _this$meta_data3 === void 0 || (_this$meta_data3 = _this$meta_data3.dossier_credit) === null || _this$meta_data3 === void 0 || (_this$meta_data3 = _this$meta_data3.cred_pub_tb_14073) === null || _this$meta_data3 === void 0 ? void 0 : _this$meta_data3.matrimoniale) != null ? this.meta_data.dossier_credit.cred_pub_tb_14073.matrimoniale : (_this$meta_data4 = this.meta_data) === null || _this$meta_data4 === void 0 || (_this$meta_data4 = _this$meta_data4.dossier_credit) === null || _this$meta_data4 === void 0 || (_this$meta_data4 = _this$meta_data4.cred_pub_tb_120001) === null || _this$meta_data4 === void 0 ? void 0 : _this$meta_data4.matrimoniale,
        date_naissance: ((_this$meta_data5 = this.meta_data) === null || _this$meta_data5 === void 0 || (_this$meta_data5 = _this$meta_data5.dossier_credit) === null || _this$meta_data5 === void 0 || (_this$meta_data5 = _this$meta_data5.cred_pub_tb_14073) === null || _this$meta_data5 === void 0 ? void 0 : _this$meta_data5.date_naissance) != null ? this.meta_data.dossier_credit.cred_pub_tb_14073.date_naissance : (_this$meta_data6 = this.meta_data) === null || _this$meta_data6 === void 0 || (_this$meta_data6 = _this$meta_data6.dossier_credit) === null || _this$meta_data6 === void 0 || (_this$meta_data6 = _this$meta_data6.cred_pub_tb_120001) === null || _this$meta_data6 === void 0 ? void 0 : _this$meta_data6.date_naissance,
        type_contrat: ((_this$meta_data7 = this.meta_data) === null || _this$meta_data7 === void 0 || (_this$meta_data7 = _this$meta_data7.dossier_credit) === null || _this$meta_data7 === void 0 || (_this$meta_data7 = _this$meta_data7.cred_pub_tb_14073) === null || _this$meta_data7 === void 0 ? void 0 : _this$meta_data7.type_contrat) != null ? this.meta_data.dossier_credit.cred_pub_tb_14073.type_contrat : (_this$meta_data8 = this.meta_data) === null || _this$meta_data8 === void 0 || (_this$meta_data8 = _this$meta_data8.dossier_credit) === null || _this$meta_data8 === void 0 || (_this$meta_data8 = _this$meta_data8.cred_pub_tb_120002) === null || _this$meta_data8 === void 0 ? void 0 : _this$meta_data8.type_contrat,
        statut_client: ((_this$meta_data9 = this.meta_data) === null || _this$meta_data9 === void 0 || (_this$meta_data9 = _this$meta_data9.dossier_credit) === null || _this$meta_data9 === void 0 || (_this$meta_data9 = _this$meta_data9.cred_pub_tb_14073) === null || _this$meta_data9 === void 0 ? void 0 : _this$meta_data9.statut_client) != null ? this.meta_data.dossier_credit.cred_pub_tb_14073.statut_client : (_this$meta_data0 = this.meta_data) === null || _this$meta_data0 === void 0 || (_this$meta_data0 = _this$meta_data0.dossier_credit) === null || _this$meta_data0 === void 0 || (_this$meta_data0 = _this$meta_data0.cred_pub_tb_120002) === null || _this$meta_data0 === void 0 ? void 0 : _this$meta_data0.statut_client,
        annee_act_emploi: ((_this$meta_data1 = this.meta_data) === null || _this$meta_data1 === void 0 || (_this$meta_data1 = _this$meta_data1.dossier_credit) === null || _this$meta_data1 === void 0 || (_this$meta_data1 = _this$meta_data1.cred_pub_tb_14073) === null || _this$meta_data1 === void 0 ? void 0 : _this$meta_data1.annee_act_emploi) != null ? this.meta_data.dossier_credit.cred_pub_tb_14073.annee_act_emploi : (_this$meta_data10 = this.meta_data) === null || _this$meta_data10 === void 0 || (_this$meta_data10 = _this$meta_data10.dossier_credit) === null || _this$meta_data10 === void 0 || (_this$meta_data10 = _this$meta_data10.cred_pub_tb_120002) === null || _this$meta_data10 === void 0 ? void 0 : _this$meta_data10.annee_act_emploi,
        credit_en_cours: ((_this$meta_data11 = this.meta_data) === null || _this$meta_data11 === void 0 || (_this$meta_data11 = _this$meta_data11.dossier_credit) === null || _this$meta_data11 === void 0 || (_this$meta_data11 = _this$meta_data11.cred_pub_tb_14073) === null || _this$meta_data11 === void 0 ? void 0 : _this$meta_data11.credit_en_cours) != null ? this.meta_data.dossier_credit.cred_pub_tb_14073.credit_en_cours : (_this$meta_data12 = this.meta_data) === null || _this$meta_data12 === void 0 || (_this$meta_data12 = _this$meta_data12.dossier_credit) === null || _this$meta_data12 === void 0 || (_this$meta_data12 = _this$meta_data12.cred_pub_tb_120004) === null || _this$meta_data12 === void 0 ? void 0 : _this$meta_data12.credit_en_cours,
        credits_anterieurs: ((_this$meta_data13 = this.meta_data) === null || _this$meta_data13 === void 0 || (_this$meta_data13 = _this$meta_data13.dossier_credit) === null || _this$meta_data13 === void 0 || (_this$meta_data13 = _this$meta_data13.cred_pub_tb_14073) === null || _this$meta_data13 === void 0 ? void 0 : _this$meta_data13.credits_anterieurs) != null ? this.meta_data.dossier_credit.cred_pub_tb_14073.credits_anterieurs : (_this$meta_data14 = this.meta_data) === null || _this$meta_data14 === void 0 || (_this$meta_data14 = _this$meta_data14.dossier_credit) === null || _this$meta_data14 === void 0 || (_this$meta_data14 = _this$meta_data14.cred_pub_tb_120001) === null || _this$meta_data14 === void 0 ? void 0 : _this$meta_data14.credits_anterieurs,
        date_entree_en_relation: ((_this$meta_data15 = this.meta_data) === null || _this$meta_data15 === void 0 || (_this$meta_data15 = _this$meta_data15.dossier_credit) === null || _this$meta_data15 === void 0 || (_this$meta_data15 = _this$meta_data15.cred_pub_tb_14073) === null || _this$meta_data15 === void 0 ? void 0 : _this$meta_data15.date_entree_en_relation) != null ? this.meta_data.dossier_credit.cred_pub_tb_14073.date_entree_en_relation : (_this$meta_data16 = this.meta_data) === null || _this$meta_data16 === void 0 || (_this$meta_data16 = _this$meta_data16.dossier_credit) === null || _this$meta_data16 === void 0 || (_this$meta_data16 = _this$meta_data16.cred_pub_tb_120001) === null || _this$meta_data16 === void 0 ? void 0 : _this$meta_data16.date_entree_en_relation,
        habitation: ((_this$meta_data17 = this.meta_data) === null || _this$meta_data17 === void 0 || (_this$meta_data17 = _this$meta_data17.dossier_credit) === null || _this$meta_data17 === void 0 || (_this$meta_data17 = _this$meta_data17.cred_pub_tb_14073) === null || _this$meta_data17 === void 0 ? void 0 : _this$meta_data17.habitation) != null ? this.meta_data.dossier_credit.cred_pub_tb_14073.habitation : (_this$meta_data18 = this.meta_data) === null || _this$meta_data18 === void 0 || (_this$meta_data18 = _this$meta_data18.dossier_credit) === null || _this$meta_data18 === void 0 || (_this$meta_data18 = _this$meta_data18.cred_pub_tb_120001) === null || _this$meta_data18 === void 0 ? void 0 : _this$meta_data18.habitation,
        date_depart_retraite: (_this$meta_data19 = this.meta_data) === null || _this$meta_data19 === void 0 || (_this$meta_data19 = _this$meta_data19.dossier_credit) === null || _this$meta_data19 === void 0 || (_this$meta_data19 = _this$meta_data19.cred_pub_tb_120002) === null || _this$meta_data19 === void 0 ? void 0 : _this$meta_data19.date_depart_retraite,
        date_debut_cdd_interim: ((_this$meta_data20 = this.meta_data) === null || _this$meta_data20 === void 0 || (_this$meta_data20 = _this$meta_data20.dossier_credit) === null || _this$meta_data20 === void 0 || (_this$meta_data20 = _this$meta_data20.cred_pub_tb_14073) === null || _this$meta_data20 === void 0 ? void 0 : _this$meta_data20.date_debut_cdd_interim) != null ? this.meta_data.dossier_credit.cred_pub_tb_14073.date_debut_cdd_interim : (_this$meta_data21 = this.meta_data) === null || _this$meta_data21 === void 0 || (_this$meta_data21 = _this$meta_data21.dossier_credit) === null || _this$meta_data21 === void 0 || (_this$meta_data21 = _this$meta_data21.cred_pub_tb_120002) === null || _this$meta_data21 === void 0 ? void 0 : _this$meta_data21.date_debut_cdd_interim,
        data_expiration_cdd_interim: ((_this$meta_data22 = this.meta_data) === null || _this$meta_data22 === void 0 || (_this$meta_data22 = _this$meta_data22.dossier_credit) === null || _this$meta_data22 === void 0 || (_this$meta_data22 = _this$meta_data22.cred_pub_tb_14073) === null || _this$meta_data22 === void 0 ? void 0 : _this$meta_data22.data_expiration_cdd_interim) != null ? this.meta_data.dossier_credit.cred_pub_tb_14073.data_expiration_cdd_interim : (_this$meta_data23 = this.meta_data) === null || _this$meta_data23 === void 0 || (_this$meta_data23 = _this$meta_data23.dossier_credit) === null || _this$meta_data23 === void 0 || (_this$meta_data23 = _this$meta_data23.cred_pub_tb_120002) === null || _this$meta_data23 === void 0 ? void 0 : _this$meta_data23.data_expiration_cdd_interim
      },
      listingNote: false,
      loadTypeCredit: false,
      data_credits_en_cours: [],
      data_anciennete_de_la_relation: [],
      data_le_financement_sera: [],
      data_le_client_a_t_il: [],
      data_date_de_depart_a_la_retraite: [],
      data_statut_du_client_selon_lemployeur: [],
      data_type_de_contrat: [],
      data_anciennete_chez_lemployeur: [],
      data_credits_anterieurs: [],
      data_garanties: [],
      lastReceivedData: null,
      debounceUpdate: null,
      note_info: 0,
      info_garanties: [],
      coef_endettement: "",
      scoresParFacilite: {},
      nombre_d_engagement: "",
      engagement_global_sollicite: "",
      observations: [{
        date: '',
        nom: '',
        decision: '',
        observation: ''
      }],
      duree_remboursement: "",
      periodicite: "",
      charge_emprunt: "",
      revenu_domicilie: [],
      selectedFacilite: null,
      source_remboursement: "",
      isLoadingData: false,
      seen9: true
    }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_ref, "selectedScoring", null), "loadingScoralia", true), "scoringFailure", false), "facilites_sollicitees", []), "scoresScoralia", {}), "response_scoralia", null), "scoreGlobal", null), "msgScoringFailure", ""), "sf_selectedScoring", null), "sf_note_info", 0), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_ref, "sf_scoresParFacilite", {}), "sf_lastReceivedData", null), "scores", {
      personnel: 0,
      professionnel: 0,
      stabilite: 0,
      reputation: 0,
      total: 0
    }), "scoresFinal", {
      personnel: 0,
      professionnel: 0,
      stabilite: 0,
      reputation: 0,
      total: 0
    }), "scoresParFaciliteInitial", []), "scoresParFaciliteFinal", []), "noteGlobale", 0), "data_statut_du_client", []), "age_depart_retraite", "");
  },
  methods: _defineProperty(_defineProperty(_defineProperty(_defineProperty({
    extractInnerText: function extractInnerText(htmlString) {
      // Créer un élément conteneur temporaire
      var tempElement = document.createElement('div');
      // Insérer la chaîne HTML dans le conteneur
      tempElement.innerHTML = htmlString;
      // Extraire et retourner le texte intérieur du conteneur
      return tempElement.innerText;
    },
    cafData: function cafData(res) {
      var _this$formDataToBeWat;
      this.cafInfo = res.data;
      if (this.formDataToBeWatched.telephone_principal_dirg == undefined || ((_this$formDataToBeWat = this.formDataToBeWatched.telephone_principal_dirg) === null || _this$formDataToBeWat === void 0 ? void 0 : _this$formDataToBeWat.length) === 0) {
        this.formDataToBeWatched.telephone_principal_dirg = this.cafInfo.phonecode;
      }
      // this.formDataToBeWatched.filiale = this.cafInfo.codecaf.replace(/[0-9]/g, "");
      if (this.entityType.toUpperCase() == 'BANK') {
        this.formDataToBeWatched.filiale = "AFG CIV";
      } else {
        this.formDataToBeWatched.filiale = "CFN CIV";
      }
      this.formDataToBeWatched.agence = this.cafInfo.agence.replaceAll("_", " ");
      this.formDataToBeWatched.agence = this.formDataToBeWatched.agence.replace(this.formDataToBeWatched.filiale, "");
      this.formDataToBeWatched.caf = this.cafInfo.codecaf ? this.cafInfo.nom + " (" + this.cafInfo.codecaf + ")" : this.cafInfo.nom;
      this.formDataToBeWatched.pays = this.list_entites[this.formDataToBeWatched.filiale];
      this.formDataToBeWatched.nom_complet_caf = this.cafInfo.nom;
      this.formDataToBeWatched.email_caf = this.cafInfo.email;
      this.formDataToBeWatched.id_caf = this.cafInfo.id;
      this.formDataToBeWatched.chef_agence = this.cafInfo.chef_agence;
      this.formDataToBeWatched.chef_zone = this.cafInfo.chef_zone;
      this.formDataToBeWatched.dri_1 = this.cafInfo.dri_1;
      this.formDataToBeWatched.dir_engagement = this.cafInfo.dir_engagement;
      this.formDataToBeWatched.disp_engagement = this.cafInfo.disp_engagement;
      this.formDataToBeWatched.centrale_app = this.cafInfo.centrale_app;

      /************************************************************************/
      // this.formDataToBeWatched.chef_depart_dcei = this.cafInfo.chef_depart_dcei
      this.formDataToBeWatched.dir_dcei = this.cafInfo.dir_dcei;
      this.formDataToBeWatched.disp_dsm = this.cafInfo.disp_dsm;
      this.formDataToBeWatched.dir_centr_exploi = this.cafInfo.dir_centr_exploi;
      this.formDataToBeWatched.assistant_rse = this.cafInfo.assistant_rse;
      this.formDataToBeWatched.chef_serv_rse = this.cafInfo.chef_serv_rse;
      this.formDataToBeWatched.chef_depart_rse = this.cafInfo.chef_depart_rse;
      this.formDataToBeWatched.dir_rse = this.cafInfo.dir_rse;
      // this.formDataToBeWatched.disp_dc = this.cafInfo.disp_dc
      this.formDataToBeWatched.analyste_risq_cred = this.cafInfo.analyste_risq_cred;
      this.formDataToBeWatched.chef_serv_acei = this.cafInfo.chef_serv_acei;
      this.formDataToBeWatched.chef_depart_dc = this.cafInfo.chef_depart_dc;
      this.formDataToBeWatched.dir_cred = this.cafInfo.dir_cred;
      this.formDataToBeWatched.disp_dgr = this.cafInfo.disp_dgr;
      this.formDataToBeWatched.agent_grc = this.cafInfo.agent_grc;
      this.formDataToBeWatched.chef_serv_grc = this.cafInfo.chef_serv_grc;
      this.formDataToBeWatched.dir_grc = this.cafInfo.dir_grc;
      this.formDataToBeWatched.disp_grc = this.cafInfo.disp_grc;
      this.formDataToBeWatched.chef_serv_rcg = this.cafInfo.chef_serv_rcg;
      this.formDataToBeWatched.chef_dept_rcg = this.cafInfo.chef_dept_rcg;
      this.formDataToBeWatched.dir_rcg = this.cafInfo.dir_rcg;
      this.formDataToBeWatched.dir_ccca = this.cafInfo.dir_ccca;
      this.formDataToBeWatched.dir_ca = this.cafInfo.dir_ca;
      this.formDataToBeWatched.dir_dcp = this.cafInfo.dir_dcp;
      /************************************************************************/
      //this.formDataToBeWatched.cofiscore = this.meta_data.dossier_credit?.cred_pub_tb_000?.note_interne
    },
    loadTbAttrs: function loadTbAttrs() {
      var l = [];
      var topdivel = this.$refs.topdiv;
      // let k = document.querySelectorAll('.subdiv')
      var k = document.querySelectorAll('.subdiv' + this.tb_name);
      // console.log(k)
      k.forEach(function (e) {
        l.push(e.innerText);
      });
      var p = {
        'name_of_title': topdivel.innerText,
        'list_of_content': l,
        id: "f0-head"
      };
      // console.log(p)
      this.$emit('load-buffer', p);
    },
    tableClosedOrOpened: function tableClosedOrOpened() {
      this.seen = this.fetchClosedTables(this.tb_name + this.meta_data['cred_pub_key']);
    },
    openNotesModal: function openNotesModal() {
      var listing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.listingNote = listing;
      this.$modal.show(this.tb_name);
    },
    loadScoringData: function loadScoringData() {
      var _this3 = this;
      var cachedScoringCritere = localStorage.getItem('scoring_criteres');
      if (!cachedScoringCritere) {
        _services_credit_service__WEBPACK_IMPORTED_MODULE_4__["default"].loadScoringData().then(function (res) {
          _this3.scoringData(res);
          localStorage.setItem('scoring_criteres', JSON.stringify(res));
        })["catch"](function (err) {
          console.log(err);
        });
      } else {
        var data = JSON.parse(cachedScoringCritere);
        this.scoringData(data);
      }
    },
    scoringData: function scoringData(res) {
      var _this4 = this;
      var criteres = res.data.data.criteres;
      criteres.forEach(function (element) {
        if (element.type == 'ppo' || element.type == null) {
          if (element.slug == 'statut_du_client_selon_lemployeur') {
            _this4.data_statut_du_client = element.elements.filter(function (item) {
              return item.type == 'ppo' || item.type == null;
            });
          }
          if (element.slug == 'type_de_contrat') {
            _this4.data_type_de_contrat = element.elements.filter(function (item) {
              return item.type == 'ppo' || item.type == null;
            });
          }
          if (element.slug == 'le_client_a_t_il_acheve_sa_periode_dessai_professionnel') {
            _this4.data_le_client_a_t_il = element.elements.filter(function (item) {
              return item.type == 'ppo' || item.type == null;
            });
          }
          if (element.slug == 'date_de_depart_a_la_retraite_ou_06_mois_apres_lecheance_du_credit') {
            _this4.data_date_de_depart_a_la_retraite = element.elements.filter(function (item) {
              return item.type == 'ppo' || item.type == null;
            });
          }
        }
      });
    },
    loadRetrieved: function loadRetrieved() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var lentb, createdKey, createdKeyArr, data, engagements_en_cours, cred_pub_tb_10008;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              lentb = _this5.meta_data['dossier_credit']['tbs_in_use'];
              createdKey = _this5.tb_name;
              createdKeyArr = createdKey.split("tb");
              createdKey = "cred_pub_tb_" + createdKeyArr[1];
              _this5.gl_key = createdKey;
              _this5.facilites_sollicitees = _this5.meta_data["dossier_credit"]["cred_pub_tb_120004"]["facilites_sollicitees"];
              if (_this5.meta_data['dossier_credit'][createdKey] == undefined) {}
              if ((lentb === null || lentb === void 0 ? void 0 : lentb.length) > 0) {
                if (_this5.meta_data['dossier_credit'][createdKey] != undefined) {} else {}
                // SET FIRST TIME TO FALSE
                _this5.formDataToBeWatched.is_first_time = false;
              } else {}
              _this5.echeance = 0;
              _this5.echeance_total = 0;
              _this5.source_remboursement = 0;
              if (_this5.meta_data["dossier_credit"]["cred_pub_tb_120001"] != undefined) {
                data = _this5.meta_data["dossier_credit"]["cred_pub_tb_120001"];
                _this5.revenu_domicilie = data === null || data === void 0 ? void 0 : data.revenu_domicilie;
                engagements_en_cours = data === null || data === void 0 ? void 0 : data.engagements_en_cours;
                if (engagements_en_cours) {
                  engagements_en_cours.forEach(function (element) {
                    var _element$encours, _element$mensualite;
                    var mt = Number(element === null || element === void 0 || (_element$encours = element.encours) === null || _element$encours === void 0 ? void 0 : _element$encours.toString().replace(/\s/g, ""));
                    var mt_m = Number(element === null || element === void 0 || (_element$mensualite = element.mensualite) === null || _element$mensualite === void 0 ? void 0 : _element$mensualite.toString().replace(/\s/g, ""));
                    if (mt > 0) {
                      if ((element === null || element === void 0 ? void 0 : element.banque) == "AFG BANQUE-CI") {
                        var _this5$nombre_d_engag, _this5$engagement_glo, _this5$echeance_total;
                        _this5.nombre_d_engagement = Number((_this5$nombre_d_engag = _this5.nombre_d_engagement) === null || _this5$nombre_d_engag === void 0 ? void 0 : _this5$nombre_d_engag.toString().replace(/\s/g, "")) + 1;
                        _this5.engagement_global_sollicite = Number((_this5$engagement_glo = _this5.engagement_global_sollicite) === null || _this5$engagement_glo === void 0 ? void 0 : _this5$engagement_glo.toString().replace(/\s/g, "")) + mt;
                        _this5.echeance_total = Number((_this5$echeance_total = _this5.echeance_total) === null || _this5$echeance_total === void 0 ? void 0 : _this5$echeance_total.toString().replace(/\s/g, "")) + mt_m;
                      }
                    }
                  });
                }
                if (_this5.revenu_domicilie != '' && _this5.revenu_domicilie.length > 0) {
                  _this5.revenu_domicilie.forEach(function (element) {
                    var _element$montant_pond;
                    var mt = Number(element === null || element === void 0 || (_element$montant_pond = element.montant_pondere) === null || _element$montant_pond === void 0 ? void 0 : _element$montant_pond.toString().replace(/\s/g, ""));
                    if (mt > 0 && element.eligible && element.source_remboursement) {
                      var _this5$source_rembour;
                      _this5.source_remboursement = Number((_this5$source_rembour = _this5.source_remboursement) === null || _this5$source_rembour === void 0 ? void 0 : _this5$source_rembour.toString().replace(/\s/g, "")) + mt;
                    }
                  });
                }
                _this5.handleInput();
              }
              cred_pub_tb_10008 = _this5.meta_data["dossier_credit"]["cred_pub_tb_10008"];
              _this5.formDataToBeWatched.credit_ant_imp = cred_pub_tb_10008 === null || cred_pub_tb_10008 === void 0 ? void 0 : cred_pub_tb_10008.credit_ant_imp;
              _this5.formDataToBeWatched.credit_encours = cred_pub_tb_10008 === null || cred_pub_tb_10008 === void 0 ? void 0 : cred_pub_tb_10008.credit_encours;
              if (_this5.selectedScoring == null) {
                _this5.selectedScoring = _this5.scoring_panels[0];
              }
            case 16:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    send2Backend: function send2Backend(res, newVal, oldVal) {
      this.authcheck = true;
      this.authcheckUsr = res.data;
      this.authcheckStatus = res.status;
      if (this.authcheckStatus === 401) {
        // // window.location.href = "/login";
      }
      if (this.authcheck === true) {
        this.$emit("autosaving");
        this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/autosaving/", {
          user: this.authcheckUsr,
          meta_parseable: this.meta_parseable,
          filledData: this.formDataToBeWatched
        }).then(function (response) {
          this.$emit("autosaving");
          var tbFetcheData = response.data;
          if (tbFetcheData["is_success"] === true) {
            this.$emit("load-shell");
          }
        }.bind(this))["catch"](function (error) {
          this.$Progress.finish();
          console.log(error);
        }.bind(this));
      } else {
        alert("Unauthenticated");
      }
    },
    retract: function retract() {
      this.seen = !this.seen;
      var a = {
        "tb_name": this.tb_name + this.meta_data['cred_pub_key'],
        "status": this.seen
      };
      EventBus.$emit("savedclosed-table", a);
    },
    updateValueSelected: function updateValueSelected() {
      var _this6 = this;
      if (this.formDataToBeWatched.secteur_activite != "") {
        var found = this.secteurs_activites.filter(function (item) {
          return item.intitule == _this6.formDataToBeWatched.secteur_activite;
        });
        if (found.length > 0) {
          this.selected_secteur_activite = found[0];
        }
      }
      if (this.formDataToBeWatched.groupe_activite != "") {
        var _found = this.groupes_activites.filter(function (item) {
          return item.intitule == _this6.formDataToBeWatched.groupe_activite;
        });
        if (_found.length > 0) {
          this.selected_groupe_secteur = _found[0];
        }
      }
    },
    loadScoraliaEdane: function loadScoraliaEdane() {
      var _this$selectedScoring,
        _this7 = this;
      this.loadingScoralia = true;
      this.scoringFailure = false;
      if (this.selectedScoring && ((_this$selectedScoring = this.selectedScoring) === null || _this$selectedScoring === void 0 ? void 0 : _this$selectedScoring.slug) == 'scocing_edane') {
        var jour,
          mois,
          annee,
          sexe,
          nationalite,
          situation_matrimoniale,
          type_logement,
          profession,
          objet_du_pret = "";
        var montant_pret,
          salaire_net_mensuel,
          duree_credit = 0;
        if (this.meta_data['dossier_credit']["cred_pub_tb_120001"] != undefined) {
          var tb_profil_perso = this.meta_data['dossier_credit']["cred_pub_tb_120001"];
          if (!["", null, undefined].includes(tb_profil_perso["date_naissance"])) {
            var date_naissance = tb_profil_perso["date_naissance"];
            jour = date_naissance.split('-')[2];
            mois = date_naissance.split('-')[1];
            annee = date_naissance.split('-')[0];
          } else {
            this.showErrorChecking('date de naissance', "DCPP-PCP1");
          }
          if (!["", null, undefined].includes(tb_profil_perso["sexe"])) {
            sexe = tb_profil_perso["sexe"] === "Homme" ? "M" : tb_profil_perso["sexe"] === "Femme" ? "F" : "";
          } else {
            this.showErrorChecking('sexe', "DCPP-PCP1");
          }
          if (!["", null, undefined].includes(tb_profil_perso["nationnalite"])) {
            nationalite = tb_profil_perso["nationnalite"] === "Ivoirienne" ? "Ivoirien" : "'Non Ivoirien";
          } else {
            this.showErrorChecking('nationalité', "DCPP-PCP1");
          }
          if (!["", null, undefined].includes(tb_profil_perso["matrimoniale"])) {
            situation_matrimoniale = tb_profil_perso["matrimoniale"];
          } else {
            this.showErrorChecking('matrimoniale', "DCPP-PCP1");
          }
          if (!["", null, undefined].includes(tb_profil_perso["habitation"])) {
            type_logement = tb_profil_perso["habitation"];
          } else {
            this.showErrorChecking('habitation', "DCPP-PCP1");
          }
        } else {
          this.scoringFailure = true;
          this.loadingScoralia = false;
          this.msgScoringFailure = "Impossible de continuer.<br><br><i style='color:red;'>Assurez-vous d'avoir saisi correctement les données du tableau DCPP-PCP1</i>";
          return;
        }
        if (this.meta_data['dossier_credit']["cred_pub_tb_120002"] != undefined) {
          var profil_perso_tb3 = this.meta_data['dossier_credit']["cred_pub_tb_120002"];
          if (profil_perso_tb3["profession"]) {
            var list_profession = [{
              "value": "Employé",
              "description": "Employé/ouvrier qualifié"
            }, {
              "value": "Cadre",
              "description": "Cadre moyen/agent de maîtrise"
            }, {
              "value": "Ouvrier",
              "description": "Employé/ouvrier non qualifié"
            }, {
              "value": "Cadre supérieur",
              "description": "Cadre supérieur/ingénieur assimilé"
            }, {
              "value": "Technicien supérieur",
              "description": "Technicien Superieur ( DUT -BTS)"
            }];
            var profess = list_profession.find(function (el) {
              return el.description == profil_perso_tb3["profession"];
            });
            if (profess != undefined) {
              profession = profess["value"];
            }
          } else {
            this.showErrorChecking('catégorie professionelle', "DCPP-PCP2");
          }
        } else {
          this.scoringFailure = true;
          this.loadingScoralia = false;
          this.msgScoringFailure = "Impossible de continuer.<br><br><i style='color:red;'>Assurez-vous d'avoir saisi correctement les données du tableau DCPP-PCP2</i>";
          return;
        }
        if (this.meta_data['dossier_credit']["cred_pub_tb_120001"] != undefined) {
          var _fiche_endettement$re;
          var fiche_endettement = this.meta_data['dossier_credit']["cred_pub_tb_120001"];
          if (((_fiche_endettement$re = fiche_endettement["revenu_domicilie"]) === null || _fiche_endettement$re === void 0 ? void 0 : _fiche_endettement$re.length) > 0) {
            var details_revenu = fiche_endettement["revenu_domicilie"].find(function (el) {
              return el.checked == true && el.libelle == 'Salaire net';
            });
            if (details_revenu != undefined) {
              var montant_emprunteur = details_revenu["montant_salaire"];
              if (typeof montant_emprunteur === "string") {
                salaire_net_mensuel = Number(montant_emprunteur.replace(/\s/g, ""));
              }

              // dans le cas ou le revenu nest pas mensuel
              if (details_revenu['periodicite'] == 'Bimensuelle') {
                salaire_net_mensuel = salaire_net_mensuel * 2;
              }
              if (details_revenu['periodicite'] == 'Trimestrielle') {
                salaire_net_mensuel = salaire_net_mensuel / 3;
              }
              if (details_revenu['periodicite'] == 'Semestrielle') {
                salaire_net_mensuel = salaire_net_mensuel / 6;
              }
              if (details_revenu['periodicite'] == 'Annuelle') {
                salaire_net_mensuel = salaire_net_mensuel / 12;
              }
            }

            // cas du montant revenu incorrect
            if (["", 0, undefined, null].includes(salaire_net_mensuel)) {
              this.showErrorChecking('Salaire net', "DCPP-PCP1");
            }
          }
          var scores = [];
          var requests = [];
          if (this.facilites_sollicitees) {
            this.facilites_sollicitees.forEach(function (facilite, index) {
              if (!["", "0", 0, undefined, null].includes(facilite["duree"])) {
                duree_credit = facilite["duree"];
                var montantDemandeStr = String((facilite === null || facilite === void 0 ? void 0 : facilite.montant_demande) || '').replace(/\s/g, '');
                var montantDuPret = parseInt(montantDemandeStr || '0', 10);
                var scoraliaBodyRequest = {
                  "type_duree_pret": 1,
                  "dessembled_dob": 1,
                  "sexe": sexe,
                  "dd": jour,
                  "mm": mois,
                  "yyyy": annee,
                  "nationalite": nationalite,
                  "situation_matrimoniale": situation_matrimoniale,
                  "statut_de_proprietaire": type_logement,
                  "objet_du_pret": facilite.type_facilite,
                  "montant_du_pret": montantDuPret,
                  "profession": profession,
                  "salaire_net_mensuel": salaire_net_mensuel,
                  "duree_du_pret": duree_credit
                };

                // Ajoute chaque promesse dans un tableau
                requests.push(_this7.launchRequestScoralia(scoraliaBodyRequest).then(function (score) {
                  if (score !== undefined) {
                    scores.push(score);
                    _this7.scoresScoralia[index] = {
                      score: score,
                      facilite: facilite
                    };
                  }
                }));
              } else {
                _this7.showErrorChecking('duree_credit', "DCPP-PCP4");
              }
            });

            // Attendre que toutes les requêtes soient terminées
            Promise.all(requests).then(function () {
              if (scores.length > 0) {
                // Calcul de la note pondérée
                _this7.scoreGlobal = _this7.calculateWeightedScore(scores);
                _this7.formDataToBeWatched.score_global_scolaria = _this7.scoreGlobal;
              } else {
                _this7.scoringFailure = true;
                _this7.msgScoringFailure = "Aucun score valide retourné.";
              }
              _this7.loadingScoralia = false;
            })["catch"](function (error) {
              console.error("Erreur dans les requêtes Scoralia :", error);
              _this7.scoringFailure = true;
              _this7.msgScoringFailure = "Erreur lors du calcul du score.";
              _this7.loadingScoralia = false;
            });
          } else {
            this.scoringFailure = true;
            this.loadingScoralia = false;
            this.msgScoringFailure = "Impossible de continuer.<br><br><i style='color:red;'>Assurez-vous d'avoir saisi correctement les données du tableau DCPP-PCP4</i>";
            return;
          }
        } else {
          this.scoringFailure = true;
          this.loadingScoralia = false;
          this.msgScoringFailure = "Impossible de continuer.<br><br><i style='color:red;'>Assurez-vous d'avoir saisi correctement les données du tableau DCP-FED</i>";
          return;
        }
      }
    },
    showErrorChecking: function showErrorChecking(champ, tabName) {
      this.scoringFailure = true;
      this.loadingScoralia = false;
      var txt = "V\xE9rifiez que le champ <b style='color:red;'> ".concat(champ, " </b> dans le tableau <b style='color:red;'> ").concat(tabName, " </b> est correctement saisi avant de continuer.");
      this.msgScoringFailure = txt;
      return;
    },
    launchRequestScoralia: function launchRequestScoralia(myPayload) {
      var _this8 = this;
      var headers = new Headers();
      var body = new FormData();
      for (var key in myPayload) {
        body.append(key, myPayload[key]);
      }
      return fetch(this.scoraliaHost, {
        method: "POST",
        headers: headers,
        redirect: "follow",
        body: body
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        if (_typeof(data) === 'object') {
          _this8.scoringFailure = true;
          _this8.msgScoringFailure = data[0];
          return undefined;
        }
        if (typeof data === 'string') {
          _this8.msgScoringFailure = "";
          _this8.response_scoralia = JSON.parse(data)[0];
          _this8.scoringFailure = false;

          // Retourne le score individuel
          var score = parseInt(_this8.response_scoralia.QUOTITE_CESSIBLE_INPL_PTS);
          return score;
        }
      })["catch"](function (error) {
        console.error("Erreur dans launchRequestScoralia :", error);
        _this8.scoringFailure = true;
        _this8.msgScoringFailure = "Erreur lors de la requête Scoralia.";
        return undefined;
      });
    },
    calculateWeightedScore: function calculateWeightedScore(scores) {
      if (!scores || scores.length === 0) return 0;
      var weights = scores.map(function (_, index) {
        return 1 / scores.length;
      });
      if (weights.length !== scores.length) {
        console.warn("Nombre de poids ne correspond pas au nombre de scores, utilisation de la somme simple.");
        return scores.reduce(function (sum, score) {
          return sum + score;
        }, 0);
      }

      // Calcul pondéré
      var weightedSum = scores.reduce(function (sum, score, index) {
        return sum + score * weights[index];
      }, 0);
      var sumOfWeights = weights.reduce(function (sum, weight) {
        return sum + weight;
      }, 0);
      return weightedSum / sumOfWeights;
    },
    handleDossierUpdate: function handleDossierUpdate(d) {
      var _this9 = this;
      this.lastReceivedData = d;
      if (this.debounceUpdate) {
        clearTimeout(this.debounceUpdate);
      }
      this.debounceUpdate = setTimeout(function () {
        _this9.processLastUpdate();
      }, 500);
    },
    processLastUpdate: function processLastUpdate() {
      var d = this.lastReceivedData;
      if ((d === null || d === void 0 ? void 0 : d.data_tb1) !== undefined && Array.isArray(d.data_tb1.facilites_sollicitees)) {
        this.facilites_sollicitees = d.data_tb1.facilites_sollicitees;
        this.$nextTick(function () {});
      } else {
        // console.warn('Données invalides ou absentes dans data_tb1.facilites_sollicitees');
      }
    },
    handleInput: function handleInput() {
      this.observations[0].date = this.formDataToBeWatched.date_saisie;
      this.observations[0].nom = this.formDataToBeWatched.use_analyste;
      this.observations[0].decision = '';
      this.observations[0].observation = this.formDataToBeWatched.commentaire_score;
      this.formDataToBeWatched["observations"] = this.observations;
    },
    handleInputV2: function handleInputV2() {},
    loadDate: function loadDate() {
      var options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };
      var today = new Date();
      this.formDataToBeWatched.date_saisie = today.toLocaleDateString("fr-FR").split('/').reverse().join('-');
    },
    showFaciliteDetails: function showFaciliteDetails(index, facilite) {
      var _this$scoresScoralia$;
      this.selectedFacilite = {
        index: index,
        data: facilite,
        score: ((_this$scoresScoralia$ = this.scoresScoralia[index]) === null || _this$scoresScoralia$ === void 0 ? void 0 : _this$scoresScoralia$.score) || 'Non calculé'
      };
      this.formDataToBeWatched.score_global = parseInt(this.handleInputV2().scoresIndividuels[index].score);
      this.$modal.show('show-more-details');
    },
    formDataVars: function formDataVars(event) {
      this.formDataToBeWatched[event[0]] = event[1];
    },
    formatAmount: function formatAmount(x) {
      return x === null || x === void 0 ? void 0 : x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    getGarantiesDetailsForFaciliteInit: function getGarantiesDetailsForFaciliteInit(faciliteUUID) {
      var _this$_garantiesDetai, _this$meta_data24, _this$meta_data25;
      // Check cache
      if ((_this$_garantiesDetai = this._garantiesDetailsCache) !== null && _this$_garantiesDetai !== void 0 && _this$_garantiesDetai[faciliteUUID]) {
        return this._garantiesDetailsCache[faciliteUUID];
      }

      // Utility to clean number strings
      var cleanNumber = function cleanNumber(value) {
        return value ? value.toString().replace(/[\s ]/g, '') : '0';
      };

      // Access data with fallback to empty arrays
      var allGaranties = ((_this$meta_data24 = this.meta_data) === null || _this$meta_data24 === void 0 || (_this$meta_data24 = _this$meta_data24.dossier_credit) === null || _this$meta_data24 === void 0 || (_this$meta_data24 = _this$meta_data24.cred_pub_tb_120008) === null || _this$meta_data24 === void 0 ? void 0 : _this$meta_data24.garanties) || [];
      var facilites = ((_this$meta_data25 = this.meta_data) === null || _this$meta_data25 === void 0 || (_this$meta_data25 = _this$meta_data25.dossier_credit) === null || _this$meta_data25 === void 0 || (_this$meta_data25 = _this$meta_data25.cred_pub_tb_120004) === null || _this$meta_data25 === void 0 ? void 0 : _this$meta_data25.facilites_sollicitees) || [];

      // Validate input data
      if (!facilites.length || !allGaranties.length) {
        // console.warn('No facilites or garanties found:', { facilites, allGaranties });
        return {
          list: [],
          total: 0
        };
      }
      var facilite = facilites.find(function (f) {
        return f.uuid === faciliteUUID;
      });
      if (!facilite) {
        console.warn("No facilite found for UUID: ".concat(faciliteUUID));
        return {
          list: [],
          total: 0
        };
      }
      var montantPret = parseFloat(cleanNumber(facilite.montant_credit));
      if (isNaN(montantPret)) {
        console.warn("Invalid montant_credit for facilite: ".concat(faciliteUUID));
        return {
          list: [],
          total: 0
        };
      }

      // Filter guarantees associated with the given faciliteUUID
      var garantiesForFacilite = allGaranties.filter(function (g) {
        var _g$infos;
        return g === null || g === void 0 || (_g$infos = g.infos) === null || _g$infos === void 0 ? void 0 : _g$infos.some(function (i) {
          return i.ligneCredit === faciliteUUID;
        });
      });

      // Define guarantee types and their weights
      var garantieDefinitions = [{
        id: 'avi',
        libelle: 'Attestation de Virement Irrévocable (AVI) / Domiciliation Irrévocable de salaire',
        ponderation: 0
      }, {
        id: 'cash_collateral',
        libelle: 'Cash collatéral(Déposit, DAT, etc)',
        ponderation: 1
      }, {
        id: 'or',
        libelle: 'OR',
        ponderation: 1
      }, {
        id: 'titre_dette',
        libelle: 'Titres de dettes',
        ponderation: 1
      }, {
        id: 'actions',
        libelle: 'Actions ou obligations convertibles en actions',
        ponderation: 1
      }, {
        id: 'assurance',
        libelle: 'Assurance',
        ponderation: 0.75
      }, {
        id: 'caution_premiere_demande',
        libelle: 'Caution à première demande',
        ponderation: 0.75
      }, {
        id: 'caution',
        libelle: 'Caution personnelle et solidaire (CPS)',
        ponderation: 0.25
      }, {
        id: 'hypotheque',
        libelle: 'Hypothèque',
        ponderation: 0.75
      }, {
        id: 'gage',
        libelle: 'Gage',
        ponderation: 0.75
      }, {
        id: 'divers',
        libelle: 'Divers',
        ponderation: 0
      }];
      var details = [];

      // Process each guarantee definition
      var _loop = function _loop() {
        var garantie = _garantieDefinitions[_i];
        var match = garantiesForFacilite.find(function (g) {
          return g.id === garantie.id;
        });
        if (match) {
          // Sum montant from infos for this faciliteUUID
          var infos = match.infos.filter(function (i) {
            return i.ligneCredit === faciliteUUID;
          });
          var montantGarantie = 0;
          infos.forEach(function (info) {
            // Handle different fields based on guarantee type
            // const montantField = info.montant ? 'montant' : info.valeurAssuree ? 'valeurAssuree' : 'valeur_caution';
            var montantField = info.montant ? 'montant' : info.valeurAssuree ? 'valeurAssuree' : info.valeur_considere ? 'valeur_considere' : 'valeur_caution';
            var montant = parseFloat(cleanNumber(info[montantField]));
            if (!isNaN(montant)) montantGarantie += montant;
          });
          var taux = montantPret > 0 ? montantGarantie / montantPret : 0;
          var note1 = Math.round(garantie.ponderation * 15 * taux * 100) / 100;
          var note = garantie.ponderation * 15 * taux;
          var formule = garantie.ponderation > 0 ? "(".concat(garantie.ponderation, " * 15 * ").concat(taux.toFixed(2), ")") : '0';
          details.push({
            id: garantie.id,
            libelle: garantie.libelle,
            montant: montantGarantie,
            point: taux,
            formule: formule,
            note: note,
            isSelected: true
          });
        } else {
          details.push({
            id: garantie.id,
            libelle: garantie.libelle,
            montant: 0,
            point: 0,
            formule: '',
            note: 0,
            isSelected: false
          });
        }
      };
      for (var _i = 0, _garantieDefinitions = garantieDefinitions; _i < _garantieDefinitions.length; _i++) {
        _loop();
      }

      // Calculate total, capped at 15
      // let total = Math.round(details.reduce((sum, g) => sum + g.note, 0) * 100) / 100;
      var total = details.reduce(function (sum, g) {
        return sum + g.note;
      }, 0);
      if (total > 15) total = 15;

      // Save to cache
      if (!this._garantiesDetailsCache) this._garantiesDetailsCache = {};
      this._garantiesDetailsCache[faciliteUUID] = {
        list: details,
        total: total
      };
      return {
        list: details,
        total: total
      };
    },
    getGarantiesDetailsForFacilite: function getGarantiesDetailsForFacilite(faciliteUUID) {
      var _this$_garantiesDetai2, _this$meta_data26, _this$meta_data27;
      // Check cache
      if ((_this$_garantiesDetai2 = this._garantiesDetailsCache) !== null && _this$_garantiesDetai2 !== void 0 && _this$_garantiesDetai2[faciliteUUID]) {
        return this._garantiesDetailsCache[faciliteUUID];
      }

      // Utility to clean number strings
      var cleanNumber = function cleanNumber(value) {
        return value ? value.toString().replace(/[\s ]/g, '') : '0';
      };

      // Access data with fallback to empty arrays
      var allGaranties = ((_this$meta_data26 = this.meta_data) === null || _this$meta_data26 === void 0 || (_this$meta_data26 = _this$meta_data26.dossier_credit) === null || _this$meta_data26 === void 0 || (_this$meta_data26 = _this$meta_data26.cred_pub_tb_14072) === null || _this$meta_data26 === void 0 ? void 0 : _this$meta_data26.garanties) || [];
      var facilites = ((_this$meta_data27 = this.meta_data) === null || _this$meta_data27 === void 0 || (_this$meta_data27 = _this$meta_data27.dossier_credit) === null || _this$meta_data27 === void 0 || (_this$meta_data27 = _this$meta_data27.cred_pub_tb_120004) === null || _this$meta_data27 === void 0 ? void 0 : _this$meta_data27.facilites_sollicitees) || [];

      // Validate input data
      if (!facilites.length || !allGaranties.length) {
        // console.warn('No facilites or garanties found:', { facilites, allGaranties });
        return {
          list: [],
          total: 0
        };
      }
      var facilite = facilites.find(function (f) {
        return f.uuid === faciliteUUID;
      });
      if (!facilite) {
        console.warn("No facilite found for UUID: ".concat(faciliteUUID));
        return {
          list: [],
          total: 0
        };
      }
      var montantPret = parseFloat(cleanNumber(facilite.montant_credit));
      if (isNaN(montantPret)) {
        console.warn("Invalid montant_credit for facilite: ".concat(faciliteUUID));
        return {
          list: [],
          total: 0
        };
      }

      // Filter guarantees associated with the given faciliteUUID
      var garantiesForFacilite = allGaranties.filter(function (g) {
        var _g$infos2;
        return g === null || g === void 0 || (_g$infos2 = g.infos) === null || _g$infos2 === void 0 ? void 0 : _g$infos2.some(function (i) {
          return i.ligneCredit === faciliteUUID;
        });
      });

      // Define guarantee types and their weights
      var garantieDefinitions = [{
        id: 'avi',
        libelle: 'Attestation de Virement Irrévocable (AVI) / Domiciliation Irrévocable de salaire',
        ponderation: 0
      }, {
        id: 'cash_collateral',
        libelle: 'Cash collatéral(Déposit, DAT, etc)',
        ponderation: 1
      }, {
        id: 'or',
        libelle: 'OR',
        ponderation: 1
      }, {
        id: 'titre_dette',
        libelle: 'Titres de dettes',
        ponderation: 1
      }, {
        id: 'actions',
        libelle: 'Actions ou obligations convertibles en actions',
        ponderation: 1
      }, {
        id: 'assurance',
        libelle: 'Assurance',
        ponderation: 0.75
      }, {
        id: 'caution_premiere_demande',
        libelle: 'Caution à première demande',
        ponderation: 0.75
      }, {
        id: 'caution',
        libelle: 'Caution personnelle et solidaire (CPS)',
        ponderation: 0.25
      }, {
        id: 'hypotheque',
        libelle: 'Hypothèque',
        ponderation: 0.75
      }, {
        id: 'gage',
        libelle: 'Gage',
        ponderation: 0.75
      }, {
        id: 'divers',
        libelle: 'Divers',
        ponderation: 0
      }];
      var details = [];

      // Process each guarantee definition
      var _loop2 = function _loop2() {
        var garantie = _garantieDefinitions2[_i2];
        var match = garantiesForFacilite.find(function (g) {
          return g.id === garantie.id;
        });
        if (match) {
          // Sum montant from infos for this faciliteUUID
          var infos = match.infos.filter(function (i) {
            return i.ligneCredit === faciliteUUID;
          });
          var montantGarantie = 0;
          infos.forEach(function (info) {
            // Handle different fields based on guarantee type
            // const montantField = info.montant ? 'montant' : info.valeurAssuree ? 'valeurAssuree' : 'valeur_caution';
            var montantField = info.montant ? 'montant' : info.valeurAssuree ? 'valeurAssuree' : info.valeur_considere ? 'valeur_considere' : 'valeur_caution';
            var montant = parseFloat(cleanNumber(info[montantField]));
            if (!isNaN(montant)) montantGarantie += montant;
          });
          var taux = montantPret > 0 ? montantGarantie / montantPret : 0;
          var note1 = Math.round(garantie.ponderation * 15 * taux * 100) / 100;
          var note = garantie.ponderation * 15 * taux;
          var formule = garantie.ponderation > 0 ? "(".concat(garantie.ponderation, " * 15 * ").concat(taux.toFixed(2), ")") : '0';
          details.push({
            id: garantie.id,
            libelle: garantie.libelle,
            montant: montantGarantie,
            point: taux,
            formule: formule,
            note: note,
            note1: note1,
            isSelected: true
          });
        } else {
          details.push({
            id: garantie.id,
            libelle: garantie.libelle,
            montant: 0,
            point: 0,
            formule: '',
            note: 0,
            note1: 0,
            isSelected: false
          });
        }
      };
      for (var _i2 = 0, _garantieDefinitions2 = garantieDefinitions; _i2 < _garantieDefinitions2.length; _i2++) {
        _loop2();
      }

      // Calculate total, capped at 15
      // let total = Math.round(details.reduce((sum, g) => sum + g.note, 0) * 100) / 100;
      var total = details.reduce(function (sum, g) {
        return sum + g.note;
      }, 0);
      if (total > 15) total = 15;

      // Save to cache
      if (!this._garantiesDetailsCache) this._garantiesDetailsCache = {};
      this._garantiesDetailsCache[faciliteUUID] = {
        list: details,
        total: total
      };
      return {
        list: details,
        total: total
      };
    },
    getColorByNote: function getColorByNote(note, libelle, faciliteUUID) {
      var _this$meta_data28;
      var allGaranties = ((_this$meta_data28 = this.meta_data) === null || _this$meta_data28 === void 0 || (_this$meta_data28 = _this$meta_data28.dossier_credit) === null || _this$meta_data28 === void 0 || (_this$meta_data28 = _this$meta_data28.cred_pub_tb_14072) === null || _this$meta_data28 === void 0 ? void 0 : _this$meta_data28.garanties) || [];
      var garantieDefinitions = [{
        id: 'avi',
        libelle: 'Attestation de Virement Irrévocable (AVI) / Domiciliation Irrévocable de salaire'
      }, {
        id: 'assurance',
        libelle: 'Assurance'
      }, {
        id: 'cash_collateral',
        libelle: 'Cash collatéral(Déposit, DAT, etc)'
      }, {
        id: 'hypotheque',
        libelle: 'Hypothèque'
      }, {
        id: 'gage',
        libelle: 'Gage'
      }, {
        id: 'divers',
        libelle: 'Divers'
      },
      // { id: 'caution', name: 'Caution personnelle et solidaire (CPS)', ponderation: 0.25},
      {
        id: 'or',
        libelle: 'OR'
      }, {
        id: 'titre_dette',
        libelle: 'Titres de dettes'
      }, {
        id: 'actions',
        libelle: 'Actions ou obligations convertibles en actions'
      }, {
        id: 'caution_premiere_demande',
        libelle: 'Caution à première demande'
      }, {
        id: 'caution',
        libelle: 'Caution personnelle et solidaire (CPS)'
      }, {
        id: 'hypotheque',
        libelle: 'Hypothèque'
      }, {
        id: 'gage',
        libelle: 'Gage'
      }, {
        id: 'divers',
        libelle: 'Divers'
      }];
      var garantieDef = garantieDefinitions.find(function (def) {
        return def.libelle === libelle;
      });
      if (!garantieDef) {
        console.warn("No guarantee definition found for libelle: ".concat(libelle));
        return '';
      }
      var isInFacilite = allGaranties.some(function (g) {
        var _g$infos3;
        return g.id === garantieDef.id && ((_g$infos3 = g.infos) === null || _g$infos3 === void 0 ? void 0 : _g$infos3.some(function (i) {
          return i.ligneCredit === faciliteUUID;
        }));
      });
      if (!isInFacilite) {
        return '';
      }
      if (note >= 15) return 'background-color: #d4edda';
      if (note >= 5) return 'background-color: #fff3cd';
      if (note >= 0) return 'background-color: #f8d7da';
      return '';
    },
    getColorByNoteInit: function getColorByNoteInit(note, libelle, faciliteUUID) {
      var _this$meta_data29;
      var allGaranties = ((_this$meta_data29 = this.meta_data) === null || _this$meta_data29 === void 0 || (_this$meta_data29 = _this$meta_data29.dossier_credit) === null || _this$meta_data29 === void 0 || (_this$meta_data29 = _this$meta_data29.cred_pub_tb_120008) === null || _this$meta_data29 === void 0 ? void 0 : _this$meta_data29.garanties) || [];
      var garantieDefinitions = [{
        id: 'avi',
        libelle: 'Attestation de Virement Irrévocable (AVI) / Domiciliation Irrévocable de salaire'
      }, {
        id: 'assurance',
        libelle: 'Assurance'
      }, {
        id: 'cash_collateral',
        libelle: 'Cash collatéral(Déposit, DAT, etc)'
      }, {
        id: 'hypotheque',
        libelle: 'Hypothèque'
      }, {
        id: 'gage',
        libelle: 'Gage'
      }, {
        id: 'divers',
        libelle: 'Divers'
      },
      // { id: 'caution', name: 'Caution personnelle et solidaire (CPS)', ponderation: 0.25},
      {
        id: 'or',
        libelle: 'OR'
      }, {
        id: 'titre_dette',
        libelle: 'Titres de dettes'
      }, {
        id: 'actions',
        libelle: 'Actions ou obligations convertibles en actions'
      }, {
        id: 'caution_premiere_demande',
        libelle: 'Caution à première demande'
      }, {
        id: 'caution',
        libelle: 'Caution personnelle et solidaire (CPS)'
      }, {
        id: 'hypotheque',
        libelle: 'Hypothèque'
      }, {
        id: 'gage',
        libelle: 'Gage'
      }, {
        id: 'divers',
        libelle: 'Divers'
      }];
      var garantieDef = garantieDefinitions.find(function (def) {
        return def.libelle === libelle;
      });
      if (!garantieDef) {
        console.warn("No guarantee definition found for libelle: ".concat(libelle));
        return '';
      }
      var isInFacilite = allGaranties.some(function (g) {
        var _g$infos4;
        return g.id === garantieDef.id && ((_g$infos4 = g.infos) === null || _g$infos4 === void 0 ? void 0 : _g$infos4.some(function (i) {
          return i.ligneCredit === faciliteUUID;
        }));
      });
      if (!isInFacilite) {
        return '';
      }
      if (note >= 15) return 'background-color: #d4edda';
      if (note >= 5) return 'background-color: #fff3cd';
      if (note >= 0) return 'background-color: #f8d7da';
      return '';
    },
    getAge: function getAge() {
      var _this$meta_data30;
      var birthTimestamp = (_this$meta_data30 = this.meta_data) === null || _this$meta_data30 === void 0 || (_this$meta_data30 = _this$meta_data30.dossier_credit) === null || _this$meta_data30 === void 0 || (_this$meta_data30 = _this$meta_data30.cred_pub_tb_120001) === null || _this$meta_data30 === void 0 ? void 0 : _this$meta_data30.date_naissance;
      if (!birthTimestamp) return null;
      return Math.floor((Date.now() - new Date(birthTimestamp).getTime()) / (1000 * 60 * 60 * 24 * 365));
    },
    getFinalAge: function getFinalAge() {
      var birthTimestamp = this.formDataToBeWatched.date_naissance;
      if (!birthTimestamp) return null;
      return Math.floor((Date.now() - new Date(birthTimestamp).getTime()) / (1000 * 60 * 60 * 24 * 365));
    },
    getFinalAgeInterval: function getFinalAgeInterval() {
      var age = this.getFinalAge();
      if (age === null) return null;
      if (age < 20) return 0;
      if (age < 30) return 3;
      if (age < 50) return 15;
      if (age < 60) return 12;
      return 6;
    },
    getAgeInterval: function getAgeInterval() {
      var age = this.getAge();
      if (age === null) return null;
      if (age < 20) return 0;
      if (age < 30) return 3;
      if (age < 50) return 15;
      if (age < 60) return 12;
      return 6;
    },
    getFinalAgeColorRange: function getFinalAgeColorRange(min) {
      var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var age = this.getFinalAge();
      if (age === null) return {};
      var color = "";
      if (age < 20) {
        color = "rgb(175, 54, 18)";
      } else if (age < 30) {
        color = "rgb(223, 92, 36)";
      } else if (age < 50) {
        color = "rgb(93, 203, 106)";
      } else if (age < 60) {
        color = "rgb(163, 186, 120)";
      } else {
        color = "rgb(223, 92, 36)";
      }
      var inRange = max ? age >= min && age < max : age >= min;
      this.formDataToBeWatched.scolaria_age_ponderation_final = this.getFinalAgeInterval();
      return inRange ? {
        backgroundColor: color,
        color: "#fff"
      } : {};
    },
    getAgeColorRange: function getAgeColorRange(min) {
      var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var age = this.getAge();
      if (age === null) return {};
      var color = "";
      if (age < 20) {
        color = "rgb(175, 54, 18)";
      } else if (age < 30) {
        color = "rgb(223, 92, 36)";
      } else if (age < 50) {
        color = "rgb(93, 203, 106)";
      } else if (age < 60) {
        color = "rgb(163, 186, 120)";
      } else {
        color = "rgb(223, 92, 36)";
      }
      var inRange = max ? age >= min && age < max : age >= min;
      this.formDataToBeWatched.scolaria_age_ponderation = this.getAgeInterval();
      return inRange ? {
        backgroundColor: color,
        color: "#fff"
      } : {};
    },
    getSituationMatrimoniale: function getSituationMatrimoniale() {
      var _this$meta_data31;
      var matrimoniale = (_this$meta_data31 = this.meta_data) === null || _this$meta_data31 === void 0 || (_this$meta_data31 = _this$meta_data31.dossier_credit) === null || _this$meta_data31 === void 0 || (_this$meta_data31 = _this$meta_data31.cred_pub_tb_120001) === null || _this$meta_data31 === void 0 ? void 0 : _this$meta_data31.matrimoniale;
      if (!matrimoniale) return null;
      return matrimoniale;
    },
    getFinalSituationMatrimoniale: function getFinalSituationMatrimoniale() {
      var matrimoniale = this.formDataToBeWatched.matrimoniale;
      if (!matrimoniale) return null;
      return matrimoniale;
    },
    getMatrimonialeInterval: function getMatrimonialeInterval() {
      var matrimoniale = this.getSituationMatrimoniale();
      if (matrimoniale === null) return null;
      if (matrimoniale === 'Divorcé(e)') return 4;
      if (matrimoniale === 'Célibataire') return 7.5;
      if (matrimoniale === 'Marié(e)') return 15;
      if (matrimoniale === 'Veuf(ve)') return 12;
      return 6;
    },
    getFinalMatrimonialeInterval: function getFinalMatrimonialeInterval() {
      var matrimoniale = this.getFinalSituationMatrimoniale();
      if (matrimoniale === null) return null;
      if (matrimoniale === 'Divorcé(e)') return 4;
      if (matrimoniale === 'Célibataire') return 7.5;
      if (matrimoniale === 'Marié(e)') return 15;
      if (matrimoniale === 'Veuf(ve)') return 12;
      return 6;
    },
    getFinalMatrimonialeColorRange: function getFinalMatrimonialeColorRange(value) {
      var selected = this.getFinalSituationMatrimoniale();
      if (!selected) return {};
      var colors = {
        'Divorcé(e)': 'rgb(175, 54, 18)',
        'Célibataire': 'rgb(223, 92, 36)',
        'Marié(e)': 'rgb(93, 203, 106)',
        'Veuf(ve)': 'rgb(163, 186, 120)'
      };
      if (value === selected) {
        this.formDataToBeWatched.scolaria_matrimonial_ponderation_final = this.getFinalMatrimonialeInterval();
        return {
          backgroundColor: colors[value] || 'rgb(223, 92, 36)',
          color: '#fff'
        };
      }
      return {};
    },
    getMatrimonialeColorRange: function getMatrimonialeColorRange(value) {
      var selected = this.getSituationMatrimoniale();
      if (!selected) return {};
      var colors = {
        'Divorcé(e)': 'rgb(175, 54, 18)',
        'Célibataire': 'rgb(223, 92, 36)',
        'Marié(e)': 'rgb(93, 203, 106)',
        'Veuf(ve)': 'rgb(163, 186, 120)'
      };
      if (value === selected) {
        this.formDataToBeWatched.scolaria_matrimonial_ponderation = this.getMatrimonialeInterval();
        return {
          backgroundColor: colors[value] || 'rgb(223, 92, 36)',
          color: '#fff'
        };
      }
      return {};
    },
    getNombreEnfants: function getNombreEnfants() {
      var _this$meta_data32;
      var nombreEnfants = (_this$meta_data32 = this.meta_data) === null || _this$meta_data32 === void 0 || (_this$meta_data32 = _this$meta_data32.dossier_credit) === null || _this$meta_data32 === void 0 || (_this$meta_data32 = _this$meta_data32.cred_pub_tb_120001) === null || _this$meta_data32 === void 0 ? void 0 : _this$meta_data32.nbre_enfant;
      return nombreEnfants;
    },
    geFinalNombreEnfants: function geFinalNombreEnfants() {
      var nombreEnfants = this.formDataToBeWatched.nbre_enfant;
      return nombreEnfants;
    },
    getFinalNombreEnfantsInterval: function getFinalNombreEnfantsInterval() {
      var nombreEnfants = this.geFinalNombreEnfants();
      if (nombreEnfants === null) return null;
      if (nombreEnfants <= 3) return 15;
      if (nombreEnfants <= 6) return 9;
      if (nombreEnfants > 6) return 3;
      return 0;
    },
    getNombreEnfantsInterval: function getNombreEnfantsInterval() {
      var nombreEnfants = this.getNombreEnfants();
      if (nombreEnfants === null) return null;
      if (nombreEnfants <= 3) return 15;
      if (nombreEnfants <= 6) return 9;
      if (nombreEnfants > 6) return 3;
      return 0;
    },
    getNombreEnfantsColorRange: function getNombreEnfantsColorRange(min) {
      var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var nombreEnfants = this.getNombreEnfants();
      // console.log("nombreEnfants", nombreEnfants)
      if (nombreEnfants === null) return {};
      var color = "";
      if (nombreEnfants < 3) {
        color = "rgb(93, 203, 106)";
      } else if (nombreEnfants <= 6) {
        color = "rgb(223, 92, 36)";
      } else if (nombreEnfants > 6) {
        color = "rgb(175, 54, 18)";
      } else {
        color = "rgb(223, 92, 36)";
      }
      var inRange = max ? nombreEnfants >= min && nombreEnfants <= max : nombreEnfants >= min;
      this.formDataToBeWatched.scolaria_nb_enfants_ponderation = this.getNombreEnfantsInterval();
      return inRange ? {
        backgroundColor: color,
        color: "#fff"
      } : {};
    },
    getFinalNombreEnfantsColorRange: function getFinalNombreEnfantsColorRange(min) {
      var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var nombreEnfants = this.geFinalNombreEnfants();
      // console.log("nombreEnfants", nombreEnfants)
      if (nombreEnfants === null) return {};
      var color = "";
      if (nombreEnfants < 3) {
        color = "rgb(93, 203, 106)";
      } else if (nombreEnfants <= 6) {
        color = "rgb(223, 92, 36)";
      } else if (nombreEnfants > 6) {
        color = "rgb(175, 54, 18)";
      } else {
        color = "rgb(223, 92, 36)";
      }
      var inRange = max ? nombreEnfants >= min && nombreEnfants <= max : nombreEnfants >= min;
      this.formDataToBeWatched.scolaria_nb_enfants_ponderation_final = this.getFinalNombreEnfantsInterval();
      return inRange ? {
        backgroundColor: color,
        color: "#fff"
      } : {};
    },
    getDepartRetraite: function getDepartRetraite() {
      var _this$meta_data33, _this$meta_data34;
      var dateStr = (_this$meta_data33 = this.meta_data) === null || _this$meta_data33 === void 0 || (_this$meta_data33 = _this$meta_data33.dossier_credit) === null || _this$meta_data33 === void 0 || (_this$meta_data33 = _this$meta_data33.cred_pub_tb_120002) === null || _this$meta_data33 === void 0 ? void 0 : _this$meta_data33.date_depart_retraite;
      var facilites_solicitees = (_this$meta_data34 = this.meta_data) === null || _this$meta_data34 === void 0 || (_this$meta_data34 = _this$meta_data34.dossier_credit) === null || _this$meta_data34 === void 0 || (_this$meta_data34 = _this$meta_data34.cred_pub_tb_120004) === null || _this$meta_data34 === void 0 ? void 0 : _this$meta_data34.facilites_sollicitees;
      if (!dateStr || !(facilites_solicitees !== null && facilites_solicitees !== void 0 && facilites_solicitees.length)) return null;
      var retirementDate = new Date(dateStr);
      if (isNaN(retirementDate.getTime())) return null;
      var today = new Date();
      today.setHours(0, 0, 0, 0);
      var conditionRespectee = facilites_solicitees.every(function (facilite) {
        var dureeMois = parseInt(facilite.duree, 10);
        if (isNaN(dureeMois)) return false;
        var creditEndDate = new Date(today);
        creditEndDate.setMonth(creditEndDate.getMonth() + dureeMois);

        // Ajout d’un mois après la fin du crédit
        var limite = new Date(creditEndDate);
        limite.setMonth(limite.getMonth() + 1);
        return retirementDate >= limite;
      });
      return conditionRespectee ? 'Oui' : 'Non';
    },
    getFinalDepartRetraite: function getFinalDepartRetraite() {
      var _this$meta_data35;
      var dateStr = this.formDataToBeWatched.date_depart_retraite;
      var facilites_solicitees = (_this$meta_data35 = this.meta_data) === null || _this$meta_data35 === void 0 || (_this$meta_data35 = _this$meta_data35.dossier_credit) === null || _this$meta_data35 === void 0 || (_this$meta_data35 = _this$meta_data35.cred_pub_tb_120004) === null || _this$meta_data35 === void 0 ? void 0 : _this$meta_data35.facilites_sollicitees;
      if (!dateStr || !(facilites_solicitees !== null && facilites_solicitees !== void 0 && facilites_solicitees.length)) return null;
      var retirementDate = new Date(dateStr);
      if (isNaN(retirementDate.getTime())) return null;
      var today = new Date();
      today.setHours(0, 0, 0, 0);
      var conditionRespectee = facilites_solicitees.every(function (facilite) {
        var dureeMois = parseInt(facilite.duree, 10);
        if (isNaN(dureeMois)) return false;
        var creditEndDate = new Date(today);
        creditEndDate.setMonth(creditEndDate.getMonth() + dureeMois);

        // Ajout d’un mois après la fin du crédit
        var limite = new Date(creditEndDate);
        limite.setMonth(limite.getMonth() + 1);
        return retirementDate >= limite;
      });
      return conditionRespectee ? 'Oui' : 'Non';
    },
    getDepartRetraiteInterval: function getDepartRetraiteInterval() {
      var status = this.getDepartRetraite();
      if (status === 'Oui') return 15;
      if (status === 'Non') return 0;
      return 0;
    },
    getFinalDepartRetraiteInterval: function getFinalDepartRetraiteInterval() {
      var status = this.getFinalDepartRetraite();
      if (status === 'Oui') return 15;
      if (status === 'Non') return 0;
      return 0;
    },
    getFinalDepartRetraiteColorRange: function getFinalDepartRetraiteColorRange(value) {
      var selected = this.getFinalDepartRetraite();
      if (!selected) return {};
      var colors = {
        'Oui': 'rgb(93, 203, 106)',
        // Vert (déjà à la retraite)
        'Non': 'rgb(175, 54, 18)' // Rouge (pas encore à la retraite)
      };
      if (value === selected) {
        this.formDataToBeWatched.scolaria_retraite_ponderation_final = this.getFinalDepartRetraiteInterval();
        return {
          backgroundColor: colors[value] || 'rgb(223, 92, 36)',
          color: '#fff'
        };
      }
      return {};
    },
    getDepartRetraiteColorRange: function getDepartRetraiteColorRange(value) {
      var selected = this.getDepartRetraite();
      if (!selected) return {};
      var colors = {
        'Oui': 'rgb(93, 203, 106)',
        // Vert (déjà à la retraite)
        'Non': 'rgb(175, 54, 18)' // Rouge (pas encore à la retraite)
      };
      if (value === selected) {
        this.formDataToBeWatched.scolaria_retraite_ponderation = this.getDepartRetraiteInterval();
        return {
          backgroundColor: colors[value] || 'rgb(223, 92, 36)',
          color: '#fff'
        };
      }
      return {};
    },
    getStatutClient: function getStatutClient() {
      var _this$meta_data36;
      return ((_this$meta_data36 = this.meta_data) === null || _this$meta_data36 === void 0 || (_this$meta_data36 = _this$meta_data36.dossier_credit) === null || _this$meta_data36 === void 0 || (_this$meta_data36 = _this$meta_data36.cred_pub_tb_120002) === null || _this$meta_data36 === void 0 ? void 0 : _this$meta_data36.statut_client) || null;
    },
    getFinalStatutClient: function getFinalStatutClient() {
      return this.formDataToBeWatched.statut_client || null;
    },
    getFinalStatutClientColorRange: function getFinalStatutClientColorRange(value) {
      var selected = this.getFinalStatutClient();
      if (!selected) return {};
      var colorMap = {
        0: 'rgb(175, 54, 18)',
        // Rouge
        6: 'rgb(223, 92, 36)',
        // Orange
        9: 'rgb(163, 186, 120)',
        // Vert clair
        12: 'rgb(163, 186, 120)',
        // Vert
        15: 'rgb(93, 203, 106)' // Vert foncé
      };
      var scoreMap = {
        "Non salarié et autres types de revenus": 0,
        "Salarié d'entreprise privée non target": 6,
        "Agent de l'Etat (non fonctionnaire)": 9,
        "Salarié d'entreprise privée target Tiers 1": 12,
        "Salarié d'entreprise privée target Tiers 2 & 3": 9,
        "Retraité": 9,
        "Fonctionnaire": 15
      };
      if (value == selected) {
        var _scoreMap$value;
        // console.log(value);
        var score = (_scoreMap$value = scoreMap[value]) !== null && _scoreMap$value !== void 0 ? _scoreMap$value : 0;
        this.formDataToBeWatched.scolaria_statut_ponderation_final = score;
        return {
          backgroundColor: colorMap[score],
          color: '#fff'
        };
      }
      return {};
    },
    getStatutClientColorRange: function getStatutClientColorRange(value) {
      var selected = this.getStatutClient();
      if (!selected) return {};
      var colorMap = {
        0: 'rgb(175, 54, 18)',
        // Rouge
        6: 'rgb(223, 92, 36)',
        // Orange
        9: 'rgb(163, 186, 120)',
        // Vert clair
        12: 'rgb(163, 186, 120)',
        // Vert
        15: 'rgb(93, 203, 106)' // Vert foncé
      };
      var scoreMap = {
        "Non salarié et autres types de revenus": 0,
        "Salarié d'entreprise privée non target": 6,
        "Agent de l'Etat (non fonctionnaire)": 9,
        "Salarié d'entreprise privée target Tiers 1": 12,
        "Salarié d'entreprise privée target Tiers 2 & 3": 9,
        "Retraité": 9,
        "Fonctionnaire": 15
      };
      if (value == selected) {
        var _scoreMap$value2;
        // console.log(value);
        var score = (_scoreMap$value2 = scoreMap[value]) !== null && _scoreMap$value2 !== void 0 ? _scoreMap$value2 : 0;
        this.formDataToBeWatched.scolaria_statut_ponderation = score;
        return {
          backgroundColor: colorMap[score],
          color: '#fff'
        };
      }
      return {};
    },
    getTypeContrat: function getTypeContrat() {
      var _this$meta_data37;
      return ((_this$meta_data37 = this.meta_data) === null || _this$meta_data37 === void 0 || (_this$meta_data37 = _this$meta_data37.dossier_credit) === null || _this$meta_data37 === void 0 || (_this$meta_data37 = _this$meta_data37.cred_pub_tb_120002) === null || _this$meta_data37 === void 0 ? void 0 : _this$meta_data37.type_contrat) || null;
    },
    getFinalTypeContrat: function getFinalTypeContrat() {
      return this.formDataToBeWatched.type_contrat || null;
    },
    getFinalTypeContratInterval: function getFinalTypeContratInterval() {
      var contrat = this.getFinalTypeContrat();
      if (!contrat) return null;
      switch (contrat) {
        case 'CDI':
          return 15;
        case 'CDD':
          return 10;
        case 'INTERIM':
          return 5;
        default:
          return 0;
      }
    },
    getFinalTypeContratColorRange: function getFinalTypeContratColorRange(value) {
      var selected = this.getFinalTypeContrat();
      if (!selected) return {};
      var scoreMap = {
        'CDI': 15,
        'CDD': 10,
        'INTERIM': 5
      };
      var colorMap = {
        15: 'rgb(93, 203, 106)',
        // Vert foncé
        10: 'rgb(163, 186, 120)',
        // Vert clair
        5: 'rgb(223, 92, 36)' // Orange
      };
      if (value === selected) {
        var _scoreMap$value3;
        var score = (_scoreMap$value3 = scoreMap[value]) !== null && _scoreMap$value3 !== void 0 ? _scoreMap$value3 : 0;
        this.formDataToBeWatched.scolaria_type_contrat_ponderation_final = score;
        return {
          backgroundColor: colorMap[score] || 'rgb(175, 54, 18)',
          color: '#fff'
        };
      }
      return {};
    },
    getTypeContratInterval: function getTypeContratInterval() {
      var contrat = this.getTypeContrat();
      if (!contrat) return null;
      switch (contrat) {
        case 'CDI':
          return 15;
        case 'CDD':
          return 10;
        case 'INTERIM':
          return 5;
        default:
          return 0;
      }
    },
    getTypeContratColorRange: function getTypeContratColorRange(value) {
      var selected = this.getTypeContrat();
      if (!selected) return {};
      var scoreMap = {
        'CDI': 15,
        'CDD': 10,
        'INTERIM': 5
      };
      var colorMap = {
        15: 'rgb(93, 203, 106)',
        // Vert foncé
        10: 'rgb(163, 186, 120)',
        // Vert clair
        5: 'rgb(223, 92, 36)' // Orange
      };
      if (value === selected) {
        var _scoreMap$value4;
        var score = (_scoreMap$value4 = scoreMap[value]) !== null && _scoreMap$value4 !== void 0 ? _scoreMap$value4 : 0;
        this.formDataToBeWatched.scolaria_type_contrat_ponderation = score;
        return {
          backgroundColor: colorMap[score] || 'rgb(175, 54, 18)',
          color: '#fff'
        };
      }
      return {};
    },
    getAncienneteEmploi: function getAncienneteEmploi() {
      var _this$meta_data38;
      var contratData = (_this$meta_data38 = this.meta_data) === null || _this$meta_data38 === void 0 || (_this$meta_data38 = _this$meta_data38.dossier_credit) === null || _this$meta_data38 === void 0 ? void 0 : _this$meta_data38.cred_pub_tb_120002;
      var contrat = contratData === null || contratData === void 0 ? void 0 : contratData.type_contrat;
      var dateDebut = contratData === null || contratData === void 0 ? void 0 : contratData.date_debut_cdd_interim;
      var dateFin = contratData === null || contratData === void 0 ? void 0 : contratData.data_expiration_cdd_interim;
      var dateLongTerme = contratData === null || contratData === void 0 ? void 0 : contratData.annee_act_emploi;
      var dateStr;
      if (contrat === 'CDD' || contrat === 'INTERIM') {
        if (!dateFin || new Date(dateFin) < new Date()) {
          // Le contrat est expiré ou la date de fin est invalide
          return 0;
        }
        dateStr = dateDebut;
      } else {
        dateStr = dateLongTerme;
      }
      if (!dateStr) return null;
      var startDate = new Date(dateStr.length === 7 ? dateStr + '-01' : dateStr);
      if (isNaN(startDate.getTime())) return null;
      var today = new Date();
      var diffTime = today.getTime() - startDate.getTime();
      var diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);
      return diffYears;
    },
    getAncienneteEmploiInterval: function getAncienneteEmploiInterval() {
      var years = this.getAncienneteEmploi();
      if (years === null) return null;
      if (years < 1) return 0;
      if (years >= 1 && years < 3) return 3;
      if (years >= 3 && years < 5) return 9;
      if (years >= 5 && years < 7) return 12;
      if (years >= 7) return 15;
      return 0;
    },
    getAncienneteEmploiColorRange: function getAncienneteEmploiColorRange(score) {
      var currentScore = this.getAncienneteEmploiInterval();
      if (currentScore !== score) return {};
      var colorMap = {
        0: 'rgb(223, 92, 36)',
        // Orange
        3: 'rgb(255, 153, 51)',
        // Orange clair
        9: 'rgb(163, 186, 120)',
        // Vert clair
        12: 'rgb(93, 203, 106)',
        // Vert
        15: 'rgb(46, 158, 85)' // Vert foncé
      };
      this.formDataToBeWatched.scolaria_anciennete_emploi_ponderation = currentScore;
      return {
        backgroundColor: colorMap[currentScore] || '#ccc',
        color: '#fff'
      };
    },
    getFinalAncienneteEmploi: function getFinalAncienneteEmploi() {
      var dateStr;
      var contrat = this.formDataToBeWatched.type_contrat;
      var dateDebut = this.formDataToBeWatched.date_debut_cdd_interim;
      var dateFin = this.formDataToBeWatched.data_expiration_cdd_interim;
      var dateLongTerme = this.formDataToBeWatched.annee_act_emploi;
      if (contrat === 'CDD' || contrat === 'INTERIM') {
        if (!dateFin || new Date(dateFin) < new Date()) {
          // Le contrat est expiré ou la date de fin est invalide
          return 0;
        }
        dateStr = dateDebut;
      } else {
        dateStr = dateLongTerme;
      }
      if (!dateStr) return null;
      var startDate = new Date(dateStr.length === 7 ? dateStr + '-01' : dateStr);
      if (isNaN(startDate.getTime())) {
        // console.warn('Date invalide :', startDate);
        return null;
      }
      var today = new Date();
      var diffTime = today.getTime() - startDate.getTime();
      var diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);
      return diffYears;
    },
    getFinalAncienneteEmploiInterval: function getFinalAncienneteEmploiInterval() {
      var years = this.getFinalAncienneteEmploi();
      if (years === null) return null;
      if (years < 1) return 0;
      if (years >= 1 && years < 3) return 3;
      if (years >= 3 && years < 5) return 9;
      if (years >= 5 && years < 7) return 12;
      if (years >= 7) return 15;
      return 0;
    },
    getFinalAncienneteEmploiColorRange: function getFinalAncienneteEmploiColorRange(score) {
      var currentScore = this.getFinalAncienneteEmploiInterval();
      if (currentScore !== score) return {};
      var colorMap = {
        0: 'rgb(223, 92, 36)',
        // Orange
        3: 'rgb(255, 153, 51)',
        // Orange clair
        9: 'rgb(163, 186, 120)',
        // Vert clair
        12: 'rgb(93, 203, 106)',
        // Vert
        15: 'rgb(46, 158, 85)' // Vert foncé
      };
      this.formDataToBeWatched.scolaria_anciennete_emploi_ponderation_final = currentScore;
      return {
        backgroundColor: colorMap[currentScore] || '#ccc',
        color: '#fff'
      };
    },
    getHabitationScore: function getHabitationScore() {
      var _this$meta_data39;
      var statut = (_this$meta_data39 = this.meta_data) === null || _this$meta_data39 === void 0 || (_this$meta_data39 = _this$meta_data39.dossier_credit) === null || _this$meta_data39 === void 0 || (_this$meta_data39 = _this$meta_data39.cred_pub_tb_120001) === null || _this$meta_data39 === void 0 ? void 0 : _this$meta_data39.habitation;
      if (!statut) return null;
      var mapping = {
        'Locataire': 6,
        'appartement des parents': 10,
        'Propriétaire': 15
      };
      return mapping[statut.trim()] || null;
    },
    getHabitationStyle: function getHabitationStyle(score) {
      var currentScore = this.getHabitationScore();
      // console.log("currentScore", currentScore, "score", score);

      if (currentScore !== score) return {};
      var colorMap = {
        6: 'rgb(223, 92, 36)',
        // rouge
        10: 'rgb(255, 153, 51)',
        // orange
        15: 'rgb(46, 158, 85)' // vert
      };
      this.formDataToBeWatched.scolaria_habitation_ponderation = currentScore;
      return {
        backgroundColor: colorMap[score] || '#ccc',
        color: '#fff'
      };
    },
    getFinalHabitationScore: function getFinalHabitationScore() {
      var statut = this.formDataToBeWatched.habitation;
      if (!statut) return null;
      var mapping = {
        'Locataire': 6,
        'appartement des parents': 10,
        'Propriétaire': 15
      };
      return mapping[statut.trim()] || null;
    },
    getFinalHabitationStyle: function getFinalHabitationStyle(score) {
      var currentScore = this.getFinalHabitationScore();
      // console.log("currentScore", currentScore, "score", score);

      if (currentScore !== score) return {};
      var colorMap = {
        6: 'rgb(223, 92, 36)',
        // rouge
        10: 'rgb(255, 153, 51)',
        // orange
        15: 'rgb(46, 158, 85)' // vert
      };
      this.formDataToBeWatched.scolaria_habitation_ponderation_final = currentScore;
      return {
        backgroundColor: colorMap[score] || '#ccc',
        color: '#fff'
      };
    },
    getDateEntreeRelationScore: function getDateEntreeRelationScore() {
      var _this$meta_data40;
      var dateStr = (_this$meta_data40 = this.meta_data) === null || _this$meta_data40 === void 0 || (_this$meta_data40 = _this$meta_data40.dossier_credit) === null || _this$meta_data40 === void 0 || (_this$meta_data40 = _this$meta_data40.cred_pub_tb_120001) === null || _this$meta_data40 === void 0 ? void 0 : _this$meta_data40.date_entree_en_relation;
      if (!dateStr) return null;
      var date = new Date(dateStr); // Exemple : "2018-06"
      if (isNaN(date.getTime())) return null;
      var today = new Date();
      var months = (today.getFullYear() - date.getFullYear()) * 12 + (today.getMonth() - date.getMonth());
      if (months > 0 && months <= 3) return 3;
      if (months <= 12) return 6;
      if (months <= 36) return 9;
      if (months <= 120) return 12;
      return 15;
    },
    getDateEntreeRelationStyle: function getDateEntreeRelationStyle(score) {
      var currentScore = this.getDateEntreeRelationScore();
      if (currentScore !== score) return {};
      var colorMap = {
        3: 'rgb(223, 92, 36)',
        // rouge
        6: 'rgb(255, 153, 51)',
        // orange
        9: 'rgb(255, 204, 0)',
        // jaune foncé
        12: 'rgb(163, 186, 120)',
        // vert clair
        15: 'rgb(93, 203, 106)' // vert
      };
      this.formDataToBeWatched.scolaria_relation_ponderation = currentScore;
      return {
        backgroundColor: colorMap[score] || '#ccc',
        color: '#fff'
      };
    },
    getFinalDateEntreeRelationScore: function getFinalDateEntreeRelationScore() {
      var dateStr = this.formDataToBeWatched.date_entree_en_relation;
      if (!dateStr) return null;
      var date = new Date(dateStr); // Exemple : "2018-06"
      if (isNaN(date.getTime())) return null;
      var today = new Date();
      var months = (today.getFullYear() - date.getFullYear()) * 12 + (today.getMonth() - date.getMonth());
      if (months > 0 && months <= 3) return 3;
      if (months <= 12) return 6;
      if (months <= 36) return 9;
      if (months <= 120) return 12;
      return 15;
    },
    getFinalDateEntreeRelationStyle: function getFinalDateEntreeRelationStyle(score) {
      var currentScore = this.getFinalDateEntreeRelationScore();
      if (currentScore !== score) return {};
      var colorMap = {
        3: 'rgb(223, 92, 36)',
        // rouge
        6: 'rgb(255, 153, 51)',
        // orange
        9: 'rgb(255, 204, 0)',
        // jaune foncé
        12: 'rgb(163, 186, 120)',
        // vert clair
        15: 'rgb(93, 203, 106)' // vert
      };
      this.formDataToBeWatched.scolaria_relation_ponderation_final = currentScore;
      return {
        backgroundColor: colorMap[score] || '#ccc',
        color: '#fff'
      };
    },
    getCreditsAnterieursScore: function getCreditsAnterieursScore() {
      var _this$meta_data41;
      var statut = (_this$meta_data41 = this.meta_data) === null || _this$meta_data41 === void 0 || (_this$meta_data41 = _this$meta_data41.dossier_credit) === null || _this$meta_data41 === void 0 || (_this$meta_data41 = _this$meta_data41.cred_pub_tb_120001) === null || _this$meta_data41 === void 0 ? void 0 : _this$meta_data41.credits_anterieurs;
      if (!statut) return null;
      var normalized = statut.trim().toLowerCase();
      if (normalized === 'Première demande sans incident antérieur (dépassement de plus de 90 jours, déclassement)'.trim().toLowerCase()) return 9;
      if (normalized === "Nième demande (à partir de la deuxième demande) sans incident enregistré : absence d'impayé ou déclassement sur un ou des crédits antérieurs)".trim().toLowerCase()) return 15;
      if (normalized === "Client ayant enregistré un incident : au moins 2 impayés ou déclassement sur un ou des crédits antérieurs".trim().toLowerCase()) return 0;
      return null;
    },
    getCreditsAnterieursStyle: function getCreditsAnterieursStyle(score) {
      var currentScore = this.getCreditsAnterieursScore();
      if (currentScore !== score) return {};
      var colorMap = {
        0: 'rgb(223, 92, 36)',
        // rouge
        9: 'rgb(255, 153, 51)',
        // orange
        15: 'rgb(93, 203, 106)' // vert
      };
      this.formDataToBeWatched.scolaria_credit_anterieur_ponderation = currentScore;
      return {
        backgroundColor: colorMap[score] || '#ccc',
        color: '#fff'
      };
    },
    getFinalCreditsAnterieursScore: function getFinalCreditsAnterieursScore() {
      var statut = this.formDataToBeWatched.credits_anterieurs;
      // console.log("statut", statut);
      if (!statut) return null;
      var normalized = statut.trim().toLowerCase();
      if (normalized === 'Première demande sans incident antérieur (dépassement de plus de 90 jours, déclassement)'.trim().toLowerCase()) return 9;
      if (normalized === "Nième demande (à partir de la deuxième demande) sans incident enregistré : absence d'impayé ou déclassement sur un ou des crédits antérieurs)".trim().toLowerCase()) return 15;
      if (normalized === "Client ayant enregistré un incident : au moins 2 impayés ou déclassement sur un ou des crédits antérieurs".trim().toLowerCase()) return 0;
      return null;
    },
    getFinalCreditsAnterieursStyle: function getFinalCreditsAnterieursStyle(score) {
      var currentScore = this.getFinalCreditsAnterieursScore();
      // console.log("currentScore", currentScore, "score", score);
      if (currentScore !== score) return {};
      // console.log("score", score);

      var colorMap = {
        0: 'rgb(223, 92, 36)',
        // rouge
        9: 'rgb(255, 153, 51)',
        15: 'rgb(93, 203, 106)' // vert
      };
      this.formDataToBeWatched.scolaria_credit_anterieur_ponderation_final = currentScore;
      return {
        backgroundColor: colorMap[score] || '#ccc',
        color: '#fff'
      };
    },
    getCreditEnCours: function getCreditEnCours() {
      var _this$meta_data42;
      return (_this$meta_data42 = this.meta_data) === null || _this$meta_data42 === void 0 || (_this$meta_data42 = _this$meta_data42.dossier_credit) === null || _this$meta_data42 === void 0 || (_this$meta_data42 = _this$meta_data42.cred_pub_tb_120004) === null || _this$meta_data42 === void 0 ? void 0 : _this$meta_data42.credit_en_cours;
    },
    getCreditEnCoursStyle: function getCreditEnCoursStyle(value) {
      var selected = this.getCreditEnCours();
      if (selected !== value) return {};
      var colorMap = {
        0: 'rgb(223, 92, 36)',
        // rouge
        6: 'rgb(255, 165, 0)',
        // orange
        12: 'rgb(93, 203, 106)' // vert
      };
      var scoreMap = {
        "Impayé constaté sur la période allant de l'instruction à la décision de crédit": 0,
        "Pas d'impayé sur la période allant de l'instruction à la décision de crédit": 12,
        "Cas de prospect: impayé chez le confère ou BIC": 0,
        "Cas de prospect: absence d'impayé chez le confère ou BIC": 6
      };
      if (value == selected) {
        var _scoreMap$value5;
        var score = (_scoreMap$value5 = scoreMap[value]) !== null && _scoreMap$value5 !== void 0 ? _scoreMap$value5 : 0;
        // console.log(value, scoreMap[value]);
        this.formDataToBeWatched.scolaria_credit_en_cours_ponderation = score;
        return {
          backgroundColor: colorMap[score],
          color: '#fff'
        };
      }
      return {};
    },
    getFinalCreditEnCours: function getFinalCreditEnCours() {
      return this.formDataToBeWatched.credit_en_cours;
    },
    getFinalCreditEnCoursStyle: function getFinalCreditEnCoursStyle(value) {
      var selected = this.getFinalCreditEnCours();
      if (selected !== value) return {};

      // console.log("selected", selected, "value", value);

      var colorMap = {
        0: 'rgb(223, 92, 36)',
        // rouge
        6: 'rgb(255, 165, 0)',
        // orange
        12: 'rgb(93, 203, 106)' // vert
      };
      var scoreMap = {
        "Impayé constaté sur la période allant de l'instruction à la décision de crédit": 0,
        "Pas d'impayé sur la période allant de l'instruction à la décision de crédit": 12,
        "Cas de prospect: impayé chez le confère ou BIC": 0,
        "Cas de prospect: absence d'impayé chez le confère ou BIC": 6
      };
      if (value == selected) {
        var _scoreMap$value6;
        var score = (_scoreMap$value6 = scoreMap[value]) !== null && _scoreMap$value6 !== void 0 ? _scoreMap$value6 : 0;
        // console.log(value, scoreMap[value]);
        this.formDataToBeWatched.scolaria_credit_en_cours_ponderation_final = score;
        return {
          backgroundColor: colorMap[score],
          color: '#fff'
        };
      }
      return {};
    },
    getAppreciation: function getAppreciation(note) {
      if (note >= 0 && note < 4) {
        return 'Risque très élevé';
      } else if (note >= 4 && note < 9) {
        return 'Risque élevé';
      } else if (note >= 9 && note < 11) {
        return 'Acceptable';
      } else if (note >= 11 && note <= 15) {
        return 'Bon';
      } else {
        return 'Non défini';
      }
    },
    couleur: function couleur(score) {
      if (score >= 0 && score < 4) return 'rgb(223, 92, 36)'; // très élevé
      else if (score >= 4 && score < 9) return 'rgb(255, 153, 51)'; // élevé
      else if (score >= 9 && score < 11) return 'rgb(163, 186, 120)'; // acceptable
      else if (score >= 11 && score <= 15) return 'rgb(46, 158, 85)'; // bon
      else return ''; // hors échelle
    },
    calculeScolariaFinalScore: function calculeScolariaFinalScore() {
      var _this$meta_data43,
        _this$meta_data$dossi3,
        _this0 = this;
      // Reset scoresParFaciliteFinal to avoid duplicates
      this.scoresParFaciliteFinal = [];
      this.noteGlobale = 0;

      // Validate input data
      if (!((_this$meta_data43 = this.meta_data) !== null && _this$meta_data43 !== void 0 && (_this$meta_data43 = _this$meta_data43.dossier_credit) !== null && _this$meta_data43 !== void 0 && (_this$meta_data43 = _this$meta_data43.cred_pub_tb_120004) !== null && _this$meta_data43 !== void 0 && _this$meta_data43.facilites_sollicitees)) {
        console.error('Missing or invalid dossier_credit or facilites_sollicitees data');
        return;
      }

      // Initialize scoresFinal
      this.scoresFinal = {
        personnel: 0,
        professionnel: 0,
        stabilite: 0,
        reputation: 0,
        total: 0
      };

      // Calculate component scores with validation
      try {
        var _this$getFinalAgeInte, _this$getFinalMatrimo, _this$getFinalNombreE;
        // Personnel score (30% age + 30% matrimoniale + 40% nombre d'enfants)
        var ageScore = (_this$getFinalAgeInte = this.getFinalAgeInterval()) !== null && _this$getFinalAgeInte !== void 0 ? _this$getFinalAgeInte : 0;
        // console.log(ageScore);
        var matrimonialScore = (_this$getFinalMatrimo = this.getFinalMatrimonialeInterval()) !== null && _this$getFinalMatrimo !== void 0 ? _this$getFinalMatrimo : 0;
        var enfantsScore = (_this$getFinalNombreE = this.getFinalNombreEnfantsInterval()) !== null && _this$getFinalNombreE !== void 0 ? _this$getFinalNombreE : 0;
        this.scoresFinal.personnel = ageScore * 0.3 + matrimonialScore * 0.3 + enfantsScore * 0.4;

        // Professionnel score (30% contrat + 70% statut)
        // const retraiteScore = this.getFinalDepartRetraiteInterval() ?? 0;
        var contratScore = this.formDataToBeWatched.scolaria_type_contrat_ponderation_final || 0;
        var statutScore = this.formDataToBeWatched.scolaria_statut_ponderation_final || 0;
        this.scoresFinal.professionnel = contratScore * 0.3 + statutScore * 0.70;

        // Stabilite score (60% anciennete + 40% habitation)
        var ancienneteScore = this.formDataToBeWatched.scolaria_anciennete_emploi_ponderation_final || 0;
        var habitationScore = this.formDataToBeWatched.scolaria_habitation_ponderation_final || 0;
        this.scoresFinal.stabilite = ancienneteScore * 0.60 + habitationScore * 0.40;

        // Reputation score (10% relation + 30% credit anterieur + 20% credit en cours)
        var relationScore = this.formDataToBeWatched.scolaria_relation_ponderation_final || 0;
        var creditAnterieurScore = this.formDataToBeWatched.scolaria_credit_anterieur_ponderation_final || 0;
        var creditEnCoursScore = this.formDataToBeWatched.scolaria_credit_en_cours_ponderation_final || 0;
        this.scoresFinal.reputation = relationScore * 0.1 + creditAnterieurScore * 0.3 + creditEnCoursScore * 0.2;
      } catch (error) {
        console.error('Error calculating component scores:', error);
        return;
      }

      // Process each facility
      this.facilites_sollicitees = (_this$meta_data$dossi3 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi3 === void 0 || (_this$meta_data$dossi3 = _this$meta_data$dossi3.cred_pub_tb_120004) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3.facilites_sollicitees;
      var totalScore = 0;
      var validFacilities = 0;
      this.facilites_sollicitees.forEach(function (facilite) {
        try {
          var _this0$getGarantiesDe;
          // Get garantie score for the facility (capped at 15)
          var garantieScore = (_this0$getGarantiesDe = _this0.getGarantiesDetailsForFacilite(facilite.uuid)) === null || _this0$getGarantiesDe === void 0 ? void 0 : _this0$getGarantiesDe.total;
          var reputationWithGarantie = _this0.scoresFinal.reputation + garantieScore * 0.40;
          _this0.scoresFinal.reputation = Math.floor(reputationWithGarantie * 100) / 100;
          var score = _this0.scoresFinal.personnel * 0.20 + _this0.scoresFinal.professionnel * 0.30 + _this0.scoresFinal.stabilite * 0.30 + reputationWithGarantie * 0.20;

          // Round to 2 decimal places
          var note = Math.round(score * 100) / 100;

          // Store the score for this facility
          _this0.scoresParFaciliteFinal.push({
            facilite: facilite,
            note: note,
            reputation: _this0.scoresFinal.reputation
          });

          // Accumulate for global score
          totalScore += note;
          validFacilities++;
        } catch (error) {}
      });
      var personnel = this.scores.personnel;
      var professionnel = this.scores.professionnel;
      var stabilite = this.scores.stabilite;
      this.scoresFinal.personnel = Math.round(personnel);
      this.scoresFinal.professionnel = Math.round(professionnel);
      this.scoresFinal.stabilite = Math.round(stabilite);
      if (validFacilities > 0) {
        this.noteGlobale = Math.round(totalScore / validFacilities * 100) / 100;
        this.formDataToBeWatched.score_global = this.noteGlobale;
        // console.log('Global Score (noteGlobale):', this.noteGlobale);
      } else {
        this.noteGlobale = 0;
      }

      // Update scoresFinal.total for reference
      this.scoresFinal.total = this.noteGlobale;
    },
    checkValueNbreEnfant: function checkValueNbreEnfant() {
      this.formDataToBeWatched.nbre_enfant = Number(this.formDataToBeWatched.nbre_enfant.toString().replace(/\s/g, ''));
      if (this.formDataToBeWatched.nbre_enfant > 20) {
        this.formDataToBeWatched.nbre_enfant = '20';
      } else if (this.formDataToBeWatched.nbre_enfant < 0 && this.formDataToBeWatched.nbre_enfant == '00') {
        this.formDataToBeWatched.nbre_enfant = '0';
      }
    }
  }, "formDataVars", function formDataVars(event) {
    this.formDataToBeWatched[event[0]] = event[1];
    this.handleInput();
  }), "updateDateDepartRetraite", function updateDateDepartRetraite() {
    var _this1 = this;
    if (this.data_date_de_depart_a_la_retraite.length > 0) {
      var date_retraite = [];
      if (!['', null, undefined].includes(this.formDataToBeWatched.date_depart_retraite)) {
        date_retraite = this.formDataToBeWatched.date_depart_retraite.split('-');
      }
      if (date_retraite.length > 1) {
        var _this$duree_credit;
        var date_ = new Date();
        date_retraite[0] = Number(date_retraite[0]);
        date_retraite[1] = Number(date_retraite[1]);
        if (this.date_naissance != "") {
          var _this$date_naissance;
          var annee_naissance = Number((_this$date_naissance = this.date_naissance) === null || _this$date_naissance === void 0 || (_this$date_naissance = _this$date_naissance.toString()) === null || _this$date_naissance === void 0 ? void 0 : _this$date_naissance.split('-')[0]);
          if (annee_naissance > 0) {
            this.age_depart_retraite = Number(date_retraite[0]) - annee_naissance;
          }
        }
        date_retraite = new Date(date_retraite[0], date_retraite[1], 1);
        this.duree_credit = Number((_this$duree_credit = this.duree_credit) === null || _this$duree_credit === void 0 ? void 0 : _this$duree_credit.toString().replace(/\s/g, ""));
        var date_echeance = new Date(date_.setMonth(date_.getMonth() + this.duree_credit));
        var diff_month = this.dateDiffInMonths(date_echeance, date_retraite);
        if (diff_month >= 6) {
          this.data_date_de_depart_a_la_retraite.forEach(function (el) {
            if (el.libelle == 'OUI') {
              _this1.formDataToBeWatched.depart_retraite = el.libelle;
            }
          });
        } else {
          this.data_date_de_depart_a_la_retraite.forEach(function (el) {
            if (el.libelle == 'NON') {
              _this1.formDataToBeWatched.depart_retraite = el.libelle;
            }
          });
        }
      } else {
        var date_naissance = [];
        if (!['', null, undefined].includes(this.date_naissance)) {
          date_naissance = this.date_naissance.split('-');
        }
        if (date_naissance.length > 1) {
          var _date_ = new Date(date_naissance[0], date_naissance[1], date_naissance[2]);
          _date_ = new Date(_date_.setFullYear(_date_.getFullYear() + this.AGE_RETRAITE));
          this.formDataToBeWatched.date_depart_retraite = _date_.getFullYear() + '-' + (_date_.getMonth() + 1 >= 10 ? _date_.getMonth() + 1 : '0' + (_date_.getMonth() + 1));
          this.updateDateDepartRetraite();
        }
      }
      this.handleInput();
    } else {
      setTimeout(function () {
        _this1.updateDateDepartRetraite();
      }, 1500);
    }
  }), "dateDiffInMonths", function dateDiffInMonths(d1, d2) {
    var d1Y = d1.getFullYear();
    var d2Y = d2.getFullYear();
    var d1M = d1.getMonth();
    var d2M = d2.getMonth();
    return d2M + 12 * d2Y - (d1M + 12 * d1Y);
  }), "handleDateInput", function handleDateInput(event) {
    var _this$meta_data44;
    this.formDataToBeWatched[event[0]] = event[1];
    var d2 = new Date((_this$meta_data44 = this.meta_data) === null || _this$meta_data44 === void 0 || (_this$meta_data44 = _this$meta_data44.dossier_credit) === null || _this$meta_data44 === void 0 ? void 0 : _this$meta_data44.created_at);
    var DateRelation = new Date(this.formDataToBeWatched.date_entree_en_relation);
    if (DateRelation > d2) {
      this.formDataToBeWatched.date_entree_en_relation = '';
      this.$toasted.show("La date d'entrée en relation doit être anterieur à la date de création du dossier");
    } else {
      this.handleInput();
    }
  }),
  watch: {
    formDataToBeWatched: {
      handler: function handler(newVal, oldVal) {
        this.autosaving(newVal, oldVal);
        this.calculeScolariaFinalScore();
        // this.getFinalAge();
        // this.$nextTick(() => {
        // this.getFinalAgeColorRange();
        // });
        // console.log(newVal);
      },
      deep: true,
      immediate: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/carcasse_ppo/utils/GaugeV2.vue?vue&type=template&id=294336fa&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/carcasse_ppo/utils/GaugeV2.vue?vue&type=template&id=294336fa&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    ref: "gauge",
    staticClass: "gauge",
    style: {
      width: _vm.gaugeSize,
      height: _vm.gaugeSize
    }
  }, [_c("div", {
    ref: "fill",
    staticClass: "fill"
  }), _vm._v(" "), _vm.displayLabel || !_vm.disc ? _c("div", {
    ref: "scoreValue",
    staticClass: "value",
    style: _objectSpread({
      width: _vm.valueSize,
      height: _vm.valueSize
    }, _vm.valueStyle),
    attrs: {
      id: "numbers"
    }
  }) : _vm._e()]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/carcasse_ppo/utils/ScoringScale.vue?vue&type=template&id=e4890906&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/carcasse_ppo/utils/ScoringScale.vue?vue&type=template&id=e4890906&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm._m(0);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "score-scale"
  }, [_c("div", {
    staticClass: "score-section tres-risque"
  }, [_c("div", [_vm._v("0-380")]), _vm._v(" "), _c("p", [_vm._v("Très risqué")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/carcasse_ppo/utils/ScoringView.vue?vue&type=template&id=ab87c27c":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/carcasse_ppo/utils/ScoringView.vue?vue&type=template&id=ab87c27c ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-md-6 p-3"
  }, [_c("GaugeV2", {
    attrs: {
      score: _vm.score,
      maxScore: 950,
      getFillColor: _vm.getFillColorWrapper,
      size: 180,
      depth: 20,
      valueStyle: {
        fontSize: "38px"
      }
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-md-6 p-3"
  }, [_vm.score !== undefined ? _c("p", {
    staticClass: "text-center text-md-start"
  }, [_c("span", {
    staticClass: "fw-bold"
  }, [_vm._v("Score :")]), _vm._v(" "), _c("span", {
    staticClass: "fw-bold",
    style: {
      color: _vm.getFillColor(_vm.score)
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.scale) + "\n                ")])]) : _vm._e(), _vm._v(" "), _vm.risk !== undefined ? _c("p", {
    staticClass: "text-center text-md-start"
  }, [_c("span", {
    staticClass: "fw-bold"
  }, [_vm._v("Risque :")]), _vm._v(" "), _c("span", {
    staticClass: "fw-bold",
    style: {
      color: _vm.getFillColor(_vm.score)
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.risk) + "\n                ")])]) : _vm._e(), _vm._v(" "), _vm.personalScore !== undefined && _vm.personalScore !== null ? _c("p", {
    staticClass: "text-center text-md-start"
  }, [_c("span", {
    staticClass: "fw-bold"
  }, [_vm._v("Note du profil personnel :")]), _vm._v(" "), _c("span", {
    staticClass: "fw-bold",
    style: {
      color: "#D39E0A"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.personalScore) + "\n                ")])]) : _vm._e(), _vm._v(" "), _vm.professionalScore !== undefined && _vm.professionalScore !== null ? _c("p", {
    staticClass: "text-center text-md-start"
  }, [_c("span", {
    staticClass: "fw-bold"
  }, [_vm._v("Note du profil professionel :")]), _vm._v(" "), _c("span", {
    staticClass: "fw-bold",
    style: {
      color: "#D39E0A"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.professionalScore) + "\n                ")])]) : _vm._e(), _vm._v(" "), _vm.stability !== undefined && _vm.stability !== null ? _c("p", {
    staticClass: "text-center text-md-start"
  }, [_c("span", {
    staticClass: "fw-bold"
  }, [_vm._v("Stabilité :")]), _vm._v(" "), _c("span", {
    staticClass: "fw-bold",
    style: {
      color: "#D39E0A"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.stability) + "\n                ")])]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-md-6 p-3"
  }, [_c("GaugeV2", {
    attrs: {
      score: _vm.score,
      label: _vm.scale,
      maxScore: 950,
      getFillColor: _vm.getFillColorWrapper,
      depth: 20,
      size: 180,
      valueStyle: {
        fontSize: "38px"
      },
      duration: 1
    }
  })], 1)]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("img", {
    staticClass: "img-fluid",
    staticStyle: {
      padding: "10px"
    },
    attrs: {
      src: __webpack_require__(/*! ./echelle_edane.png */ "./resources/js/components/forms/afg/carcasse_ppo/utils/echelle_edane.png"),
      alt: "mockup"
    }
  })]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude/CA-CE3.vue?vue&type=template&id=2b15095c&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude/CA-CE3.vue?vue&type=template&id=2b15095c&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render=function render(){var _vm$formDataToBeWatch,_vm$formDataToBeWatch2,_vm$selectedScoring2,_vm$selectedScoring3,_vm$formDataToBeWatch3;var _vm=this,_c=_vm._self._c;return _c("div",{on:{contextmenu:function contextmenu($event){return _vm.$refs.menu.open($event,_vm.tb_name);}}},[_c("div",{staticClass:"row bg-light position-relative",staticStyle:{width:"100%",height:"100%"}},[_c("ContextMenu",{ref:"menu",attrs:{cred_pub_key:_vm.meta_parseable.cred_pub_key,id:_vm.tb_name,contextList:_vm.contextList}}),_vm._v(" "),_vm.seen===true?_c("div",{staticClass:"card card-width-height"},[_c("br"),_vm._v(" "),_c("div",{staticClass:"card-header hdc pb-0 pt-2"},[_c("h6",{ref:"topdiv",staticClass:"head",attrs:{id:"f0-head"}},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col"},[_vm._v("\n                            "+_vm._s(_vm.tb_display_name)+" : Résultats Scoring\n                        ")]),_vm._v(" "),_c("div",{staticClass:"col-auto"},[((_vm$formDataToBeWatch=_vm.formDataToBeWatched.notes)===null||_vm$formDataToBeWatch===void 0?void 0:_vm$formDataToBeWatch.length)>0?_c("div",{staticStyle:{display:"inline-block",position:"relative"}},[_c("span",{attrs:{type:"button"},on:{click:function click($event){return _vm.openNotesModal(true);}}},[_c("i",{staticClass:"icofont icofont-comment text-white px-2",staticStyle:{"font-size":"12px"},attrs:{role:"button"}}),_vm._v(" "),_c("span",{staticClass:"badge-sm"},[_c("span",[_vm._v(" "+_vm._s((_vm$formDataToBeWatch2=_vm.formDataToBeWatched.notes)===null||_vm$formDataToBeWatch2===void 0?void 0:_vm$formDataToBeWatch2.length)+" ")])])])]):_vm._e(),_vm._v(" "),_c("chevron-up-icon",{staticClass:"custom-class",staticStyle:{cursor:"pointer"},attrs:{size:"21"},on:{click:function click($event){return _vm.retract();}}})],1)])])]),_vm._v(" "),_c("div",{staticClass:"row p-0"},[_c("div",{staticClass:"col-12 position-relative"},[_vm.seen9===true?_c("div",{staticClass:"card",staticStyle:{width:"100%",height:"100%"}},[_c("div",{staticClass:"col-12 d-flex border-bottom"},_vm._l(_vm.scoring_panels,function(scoring,idx){var _vm$selectedScoring;return _c("div",{key:idx,staticClass:"col cursor-pointer border-end d-flex justify-content-center align-items-center text-center bg-deep-blue p-2","class":[((_vm$selectedScoring=_vm.selectedScoring)===null||_vm$selectedScoring===void 0?void 0:_vm$selectedScoring.id)==(scoring===null||scoring===void 0?void 0:scoring.id)?"bg-white text-orange fw-semibold":""],on:{click:function click($event){_vm.selectedScoring=scoring;}}},[_vm._v("\n                                    "+_vm._s(scoring.name)+"\n                                   \n                                ")]);}),0),_vm._v(" "),[((_vm$selectedScoring2=_vm.selectedScoring)===null||_vm$selectedScoring2===void 0?void 0:_vm$selectedScoring2.id)==2||_vm.selectedScoring==null?_c("div",[_vm.seen1?_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"relook-header"},[_c("h6",{"class":" subdiv"+this.tb_name,attrs:{id:"scoring-initial"}},[_vm._v("\n                                            Scoring DCPP\n                                            "),_c("chevron-up-icon",{staticClass:"custom-class",staticStyle:{"float":"right",cursor:"pointer"},attrs:{size:"21"},on:{click:function click($event){_vm.seen1=!_vm.seen1;}}})],1)]),_vm._v(" "),_c("div",[_c("div",{staticClass:"card-body"},[_vm._m(0),_vm._v(" "),_c("div",{staticClass:"card-body"},[_c("table",{staticClass:"table table-bordered"},[_vm._m(1),_vm._v(" "),_c("tbody",[_c("tr",[_c("td",{attrs:{colspan:"3",rowspan:"5"}},[_vm._v(" Âge")]),_vm._v(" "),_c("td",{style:_vm.getAgeColorRange(0,20)},[_vm._v("Inf à 20 ans")]),_vm._v(" "),_c("td",{style:_vm.getAgeColorRange(0,20)},[_vm._v("0")]),_vm._v(" "),_c("td",{attrs:{rowspan:"5"}},[_vm._v("30")])]),_vm._v(" "),_c("tr",[_c("td",{style:_vm.getAgeColorRange(20,30)},[_vm._v("[20 - 30 ans[")]),_vm._v(" "),_c("td",{style:_vm.getAgeColorRange(20,30)},[_vm._v("3")])]),_vm._v(" "),_c("tr",[_c("td",{style:_vm.getAgeColorRange(30,50)},[_vm._v("[30 - 50 ans[")]),_vm._v(" "),_c("td",{style:_vm.getAgeColorRange(30,50)},[_vm._v("15")])]),_vm._v(" "),_c("tr",[_c("td",{style:_vm.getAgeColorRange(50,60)},[_vm._v("[50 - 60 ans[")]),_vm._v(" "),_c("td",{style:_vm.getAgeColorRange(50,60)},[_vm._v("12")])]),_vm._v(" "),_c("tr",[_c("td",{style:_vm.getAgeColorRange(60,150)},[_vm._v("Sup ou égal à 60 ans")]),_vm._v(" "),_c("td",{style:_vm.getAgeColorRange(60,150)},[_vm._v("6")])])])]),_vm._v(" "),_c("table",{staticClass:"table table-bordered"},[_vm._m(2),_vm._v(" "),_c("tbody",[_c("tr",[_c("td",{attrs:{colspan:"3",rowspan:"4"}},[_vm._v("Situation matrimoniale")]),_vm._v(" "),_c("td",{style:_vm.getMatrimonialeColorRange("Divorcé(e)")},[_vm._v("Divorcé")]),_vm._v(" "),_c("td",{style:_vm.getMatrimonialeColorRange("Divorcé(e)")},[_vm._v("4")]),_vm._v(" "),_c("td",{attrs:{rowspan:"4"}},[_vm._v("30")])]),_vm._v(" "),_c("tr",[_c("td",{style:_vm.getMatrimonialeColorRange("Célibataire")},[_vm._v("Célibataire")]),_vm._v(" "),_c("td",{style:_vm.getMatrimonialeColorRange("Célibataire")},[_vm._v("7,5")])]),_vm._v(" "),_c("tr",[_c("td",{style:_vm.getMatrimonialeColorRange("Marié(e)")},[_vm._v("Marié")]),_vm._v(" "),_c("td",{style:_vm.getMatrimonialeColorRange("Marié(e)")},[_vm._v("15")])]),_vm._v(" "),_c("tr",[_c("td",{style:_vm.getMatrimonialeColorRange("Veuf(ve)")},[_vm._v("Veuf")]),_vm._v(" "),_c("td",{style:_vm.getMatrimonialeColorRange("Veuf(ve)")},[_vm._v("12")])])])]),_vm._v(" "),_c("table",{staticClass:"table table-bordered"},[_vm._m(3),_vm._v(" "),_c("tbody",[_c("tr",[_c("td",{attrs:{colspan:"3",rowspan:"3"}},[_vm._v("Nombre d'enfants")]),_vm._v(" "),_c("td",{style:_vm.getNombreEnfantsColorRange(7,150)},[_vm._v("Sup à 6")]),_vm._v(" "),_c("td",{style:_vm.getNombreEnfantsColorRange(7,150)},[_vm._v("3")]),_vm._v(" "),_c("td",{attrs:{rowspan:"3"}},[_vm._v("40")])]),_vm._v(" "),_c("tr",[_c("td",{style:_vm.getNombreEnfantsColorRange(4,6)},[_vm._v("De 4 à 6")]),_vm._v(" "),_c("td",{style:_vm.getNombreEnfantsColorRange(4,6)},[_vm._v("9")])]),_vm._v(" "),_c("tr",[_c("td",{style:_vm.getNombreEnfantsColorRange(0,3)},[_vm._v("De 0 à 3")]),_vm._v(" "),_c("td",{style:_vm.getNombreEnfantsColorRange(0,3)},[_vm._v("15")])])])])])]),_vm._v(" "),_c("div",[_vm._m(4),_vm._v(" "),_c("div",{staticClass:"card-body"},[_c("table",{staticClass:"table table-bordered"},[_vm._m(5),_vm._v(" "),_c("tbody",[_c("tr",[_c("td",{attrs:{rowspan:"10"}},[_vm._v("Statut du client selon l'employeur")]),_vm._v(" "),_c("td",{style:_vm.getStatutClientColorRange("Non salarié et autres types de revenus")},[_vm._v("Non salarié et autres types de revenus")]),_vm._v(" "),_c("td",{style:_vm.getStatutClientColorRange("Non salarié et autres types de revenus")},[_vm._v("0")]),_vm._v(" "),_c("td",{attrs:{rowspan:"10"}},[_vm._v("70")])]),_vm._v(" "),_c("tr",[_c("td",{style:_vm.getStatutClientColorRange("Salarié d'entreprise privée non target")},[_vm._v("Salarié d’entreprise privée non target")]),_vm._v(" "),_c("td",{style:_vm.getStatutClientColorRange("Salarié d'entreprise privée non target")},[_vm._v("6")])]),_vm._v(" "),_c("tr",[_c("td",{style:_vm.getStatutClientColorRange("Salarié d'entreprise privée target Tiers 1")},[_vm._v("Salarié d’entreprise privée target Tiers 1")]),_vm._v(" "),_c("td",{style:_vm.getStatutClientColorRange("Salarié d'entreprise privée target Tiers 1")},[_vm._v("12")])]),_vm._v(" "),_c("tr",[_c("td",{style:_vm.getStatutClientColorRange("Salarié d'entreprise privée target Tiers 2 & 3")},[_vm._v("Salarié d'entreprise privée target Tiers 2 & 3")]),_vm._v(" "),_c("td",{style:_vm.getStatutClientColorRange("Salarié d'entreprise privée target Tiers 2 & 3")},[_vm._v("9")])]),_vm._v(" "),_c("tr",[_c("td",{style:_vm.getStatutClientColorRange("Salarié d'entreprise privées")},[_vm._v("Salarié d’entreprise privées")]),_vm._v(" "),_c("td",{style:_vm.getStatutClientColorRange("Salarié d'entreprise privées")},[_vm._v("9")])]),_vm._v(" "),_c("tr",[_c("td",{style:_vm.getStatutClientColorRange("Agent de l'Etat (non fonctionnaire)")},[_vm._v("Agent de l’Etat (non fonctionnaire)")]),_vm._v(" "),_c("td",{style:_vm.getStatutClientColorRange("Agent de l'Etat (non fonctionnaire)")},[_vm._v("9")])]),_vm._v(" "),_c("tr",[_c("td",{style:_vm.getStatutClientColorRange("Retraité")},[_vm._v("Retraité")]),_vm._v(" "),_c("td",{style:_vm.getStatutClientColorRange("Retraité")},[_vm._v("9")])]),_vm._v(" "),_c("tr",[_c("td",{style:_vm.getStatutClientColorRange("Fonctionnaire")},[_vm._v("Fonctionnaire")]),_vm._v(" "),_c("td",{style:_vm.getStatutClientColorRange("Fonctionnaire")},[_vm._v("15")])])])]),_vm._v(" "),_c("table",{staticClass:"table table-bordered"},[_vm._m(6),_vm._v(" "),_c("tbody",[_c("tr",[_c("td",{attrs:{colspan:"3",rowspan:"3"}},[_vm._v("Type de contrat")]),_vm._v(" "),_c("td",{style:_vm.getTypeContratColorRange("CDI")},[_vm._v("CDI")]),_vm._v(" "),_c("td",{style:_vm.getTypeContratColorRange("CDI")},[_vm._v("15")]),_vm._v(" "),_c("td",{attrs:{rowspan:"3"}},[_vm._v("30")])]),_vm._v(" "),_c("tr",[_c("td",{style:_vm.getTypeContratColorRange("CDD")},[_vm._v("CDD")]),_vm._v(" "),_c("td",{style:_vm.getTypeContratColorRange("CDD")},[_vm._v("10")])])])])])]),_vm._v(" "),_c("div",{staticClass:"card-body"},[_vm._m(7),_vm._v(" "),_c("div",{staticClass:"card-body"},[_c("table",{staticClass:"table table-bordered"},[_vm._m(8),_vm._v(" "),_c("tbody",[_c("tr",[_c("td",{attrs:{colspan:"5",rowspan:"5"}},[_vm._v(" Ancienneté professionnelle à l'emploi actuel")]),_vm._v(" "),_c("td",{style:_vm.getAncienneteEmploiColorRange(3)},[_vm._v("Inf à 1 ans")]),_vm._v(" "),_c("td",{style:_vm.getAncienneteEmploiColorRange(3)},[_vm._v("0")]),_vm._v(" "),_c("td",{attrs:{rowspan:"5"}},[_vm._v("60")])]),_vm._v(" "),_c("tr",[_c("td",{style:_vm.getAncienneteEmploiColorRange(6)},[_vm._v("[1 - 3 ans[")]),_vm._v(" "),_c("td",{style:_vm.getAncienneteEmploiColorRange(6)},[_vm._v("3")])]),_vm._v(" "),_c("tr",[_c("td",{style:_vm.getAncienneteEmploiColorRange(9)},[_vm._v("[3 - 5 ans[")]),_vm._v(" "),_c("td",{style:_vm.getAncienneteEmploiColorRange(9)},[_vm._v("9")])]),_vm._v(" "),_c("tr",[_c("td",{style:_vm.getAncienneteEmploiColorRange(12)},[_vm._v("[5 - 7 ans[")]),_vm._v(" "),_c("td",{style:_vm.getAncienneteEmploiColorRange(12)},[_vm._v("12")])]),_vm._v(" "),_c("tr",[_c("td",{style:_vm.getAncienneteEmploiColorRange(15)},[_vm._v("Sup ou égal à 7 ans")]),_vm._v(" "),_c("td",{style:_vm.getAncienneteEmploiColorRange(15)},[_vm._v("15")])])])]),_vm._v(" "),_c("table",{staticClass:"table table-bordered"},[_vm._m(9),_vm._v(" "),_c("tbody",[_c("tr",[_c("td",{attrs:{colspan:"4",rowspan:"4"}},[_vm._v("Status de Propriétaire")]),_vm._v(" "),_c("td",{style:_vm.getHabitationStyle(6)},[_vm._v("Locataire")]),_vm._v(" "),_c("td",{style:_vm.getHabitationStyle(6)},[_vm._v("6")]),_vm._v(" "),_c("td",{attrs:{rowspan:"4"}},[_vm._v("40")])]),_vm._v(" "),_c("tr",[_c("td",{style:_vm.getHabitationStyle(10)},[_vm._v("Appartement des parents")]),_vm._v(" "),_c("td",{style:_vm.getHabitationStyle(10)},[_vm._v("10")])]),_vm._v(" "),_c("tr",[_c("td",{style:_vm.getHabitationStyle(15)},[_vm._v("Propriétaire")]),_vm._v(" "),_c("td",{style:_vm.getHabitationStyle(15)},[_vm._v("15")])])])])])]),_vm._v(" "),_c("div",{staticClass:"card-body"},[_vm._m(10),_vm._v(" "),_c("div",{staticClass:"card-body"},[_c("table",{staticClass:"table table-bordered"},[_vm._m(11),_vm._v(" "),_c("tbody",[_c("tr",[_c("td",{attrs:{colspan:"5",rowspan:"5"}},[_vm._v("Ancienneté de la relation")]),_vm._v(" "),_c("td",{style:_vm.getDateEntreeRelationStyle(3)},[_vm._v("]0 - 3 Mois]")]),_vm._v(" "),_c("td",{style:_vm.getDateEntreeRelationStyle(3)},[_vm._v("3")]),_vm._v(" "),_c("td",{attrs:{rowspan:"5"}},[_vm._v("10")])]),_vm._v(" "),_c("tr",[_c("td",{style:_vm.getDateEntreeRelationStyle(6)},[_vm._v("]3 Mois - 1 An]")]),_vm._v(" "),_c("td",{style:_vm.getDateEntreeRelationStyle(6)},[_vm._v("6")])]),_vm._v(" "),_c("tr",[_c("td",{style:_vm.getDateEntreeRelationStyle(9)},[_vm._v("]1 - 3 Ans]")]),_vm._v(" "),_c("td",{style:_vm.getDateEntreeRelationStyle(9)},[_vm._v("9")])]),_vm._v(" "),_c("tr",[_c("td",{style:_vm.getDateEntreeRelationStyle(12)},[_vm._v("]3 - 10 Ans]")]),_vm._v(" "),_c("td",{style:_vm.getDateEntreeRelationStyle(12)},[_vm._v("12")])]),_vm._v(" "),_c("tr",[_c("td",{style:_vm.getDateEntreeRelationStyle(15)},[_vm._v("Sup à 10 Ans")]),_vm._v(" "),_c("td",{style:_vm.getDateEntreeRelationStyle(15)},[_vm._v("15")])])])]),_vm._v(" "),_c("table",{staticClass:"table table-bordered"},[_vm._m(12),_vm._v(" "),_c("tbody",[_c("tr",[_c("td",{staticClass:"text-center align-middle",attrs:{colspan:"8",rowspan:"8"}},[_vm._v("Crédits antérieurs dans nos livres")]),_vm._v(" "),_c("td",{style:_vm.getCreditsAnterieursStyle(9)},[_vm._v("Première demande sans incident antérieur (dépassement de plus de 90 jours, déclassement)")]),_vm._v(" "),_c("td",{style:_vm.getCreditsAnterieursStyle(9)},[_vm._v("9")]),_vm._v(" "),_c("td",{staticClass:"text-center align-middle",attrs:{rowspan:"8"}},[_vm._v("30")])]),_vm._v(" "),_c("tr",[_c("td",{style:_vm.getCreditsAnterieursStyle(15)},[_vm._v("Nième demande (à partir de la deuxième demande) sans incident enregistré : absence d'impayé ou déclassement sur un ou des crédits antérieurs)")]),_vm._v(" "),_c("td",{style:_vm.getCreditsAnterieursStyle(15)},[_vm._v("15")])]),_vm._v(" "),_c("tr",[_c("td",{style:_vm.getCreditsAnterieursStyle(0)},[_vm._v("Client ayant enregistré un incident : au moins 2 impayés ou déclassement sur un ou des crédits antérieurs")]),_vm._v(" "),_c("td",{style:_vm.getCreditsAnterieursStyle(0)},[_vm._v("0")])])])]),_vm._v(" "),_c("table",{staticClass:"table table-bordered"},[_vm._m(13),_vm._v(" "),_c("tbody",[_c("tr",[_c("td",{attrs:{colspan:"4",rowspan:"4"}},[_vm._v("Crédits en cours (chez nous et à la concurrence)")]),_vm._v(" "),_c("td",{style:_vm.getCreditEnCoursStyle("Impayé constaté sur la période allant de l'instruction à la décision de crédit")},[_vm._v("Impayé constaté sur la période allant de l'instruction à la décision de crédit")]),_vm._v(" "),_c("td",{style:_vm.getCreditEnCoursStyle("Impayé constaté sur la période allant de l'instruction à la décision de crédit")},[_vm._v("0")]),_vm._v(" "),_c("td",{attrs:{rowspan:"4"}},[_vm._v("20")])]),_vm._v(" "),_c("tr",[_c("td",{style:_vm.getCreditEnCoursStyle("Pas d'impayé sur la période allant de l'instruction à la décision de crédit")},[_vm._v("Pas d'impayé sur la période allant de l'instruction à la décision de crédit")]),_vm._v(" "),_c("td",{style:_vm.getCreditEnCoursStyle("Pas d'impayé sur la période allant de l'instruction à la décision de crédit")},[_vm._v("12")])]),_vm._v(" "),_c("tr",[_c("td",{style:_vm.getCreditEnCoursStyle("Cas de prospect: impayé chez le confère ou BIC")},[_vm._v("Cas de prospect: impayé chez le confère ou BIC")]),_vm._v(" "),_c("td",{style:_vm.getCreditEnCoursStyle("Cas de prospect: impayé chez le confère ou BIC")},[_vm._v("0")])]),_vm._v(" "),_c("tr",[_c("td",{style:_vm.getCreditEnCoursStyle("Cas de prospect: absence d'impayé chez le confère ou BIC")},[_vm._v("Cas de prospect: absence d'impayé chez le confère ou BIC")]),_vm._v(" "),_c("td",{style:_vm.getCreditEnCoursStyle("Cas de prospect: absence d'impayé chez le confère ou BIC")},[_vm._v("6")])])])]),_vm._v(" "),_vm._l(_vm.scoresParFaciliteInitial,function(scoring,index){var _scoring$facilite;return _c("div",{key:index},[_c("div",{staticClass:"justify-content-center"},[_c("div",{staticClass:"head-memorandum-title px-3 mb-4",staticStyle:{"text-align":"center"}},[_vm._v("CORING GARNATIE : "+_vm._s(scoring===null||scoring===void 0||(_scoring$facilite=scoring.facilite)===null||_scoring$facilite===void 0?void 0:_scoring$facilite.type_facilite))])]),_vm._v(" "),_c("table",{staticClass:"table table-bordered"},[_vm._m(14,true),_vm._v(" "),_c("tbody",[_vm._l(_vm.getGarantiesDetailsForFaciliteInit(scoring.facilite.uuid).list,function(garantie,idx){return _vm.getGarantiesDetailsForFaciliteInit(scoring.facilite.uuid)?[_c("tr",[idx===0?_c("td",{attrs:{colspan:"3",rowspan:_vm.getGarantiesDetailsForFaciliteInit(scoring.facilite.uuid).list.length}},[_vm._v("Garanties")]):_vm._e(),_vm._v(" "),_c("td",{style:_vm.getColorByNote(garantie.note,garantie.libelle,scoring.facilite.uuid)},[_vm._v(_vm._s(garantie.libelle))]),_vm._v(" "),_c("td",[_vm._v(_vm._s(garantie.note1))]),_vm._v(" "),idx===0?_c("td",{attrs:{rowspan:_vm.getGarantiesDetailsForFaciliteInit(scoring.facilite.uuid).list.length}},[_vm._v("\n                                                                    40\n                                                                ")]):_vm._e()])]:_vm._e();})],2)])]);})],2)]),_vm._v(" "),_vm._l(_vm.scoresParFaciliteInitial,function(scoring,index){var _scoring$facilite2,_vm$scores,_vm$scores2,_vm$scores3;return _c("div",{key:index,staticClass:"card-body"},[_c("div",{staticClass:"justify-content-center"},[_c("div",{staticClass:"head-memorandum-title px-3 mb-4",staticStyle:{"text-align":"center"}},[_vm._v("NOTE FINALE : "+_vm._s(scoring===null||scoring===void 0||(_scoring$facilite2=scoring.facilite)===null||_scoring$facilite2===void 0?void 0:_scoring$facilite2.type_facilite))])]),_vm._v(" "),_c("div",{staticClass:"card-body"},[_c("table",{staticClass:"table table-bordered"},[_vm._m(15,true),_vm._v(" "),_c("tbody",[_c("tr",[_c("td",{style:{backgroundColor:_vm.getNoteEtCouleursInitial.couleurs.personnel,color:"white"}},[_vm._v("PROFIL PERSONNEL")]),_vm._v(" "),_c("td",{style:{backgroundColor:_vm.getNoteEtCouleursInitial.couleurs.personnel,color:"white"}},[_vm._v(_vm._s((_vm$scores=_vm.scores)===null||_vm$scores===void 0?void 0:_vm$scores.personnel)+"/15")]),_vm._v(" "),_c("td",{style:{backgroundColor:_vm.getNoteEtCouleursInitial.couleurs.personnel,color:"white"}},[_vm._v("15")])]),_vm._v(" "),_c("tr",[_c("td",{style:{backgroundColor:_vm.getNoteEtCouleursInitial.couleurs.professionnel,color:"white"}},[_vm._v("PROFIL PROFESSIONNEL")]),_vm._v(" "),_c("td",{style:{backgroundColor:_vm.getNoteEtCouleursInitial.couleurs.professionnel,color:"white"}},[_vm._v(_vm._s((_vm$scores2=_vm.scores)===null||_vm$scores2===void 0?void 0:_vm$scores2.professionnel)+"/15")]),_vm._v(" "),_c("td",{style:{backgroundColor:_vm.getNoteEtCouleursInitial.couleurs.professionnel,color:"white"}},[_vm._v("15")])]),_vm._v(" "),_c("tr",[_c("td",{style:{backgroundColor:_vm.getNoteEtCouleursInitial.couleurs.stabilite,color:"white"}},[_vm._v("STABILITE")]),_vm._v(" "),_c("td",{style:{backgroundColor:_vm.getNoteEtCouleursInitial.couleurs.stabilite,color:"white"}},[_vm._v(_vm._s((_vm$scores3=_vm.scores)===null||_vm$scores3===void 0?void 0:_vm$scores3.stabilite)+"/15")]),_vm._v(" "),_c("td",{style:{backgroundColor:_vm.getNoteEtCouleursInitial.couleurs.stabilite,color:"white"}},[_vm._v("15")])]),_vm._v(" "),_c("tr",[_c("td",{style:{backgroundColor:_vm.getNoteEtCouleursInitial.couleurs.reputation,color:"white"}},[_vm._v("REPUTATION & RELATION AVEC LA BANQUE")]),_vm._v(" "),_c("td",{style:{backgroundColor:_vm.getNoteEtCouleursInitial.couleurs.reputation,color:"white"}},[_vm._v(_vm._s(scoring===null||scoring===void 0?void 0:scoring.reputation)+"/15")]),_vm._v(" "),_c("td",{style:{backgroundColor:_vm.getNoteEtCouleursInitial.couleurs.reputation,color:"white"}},[_vm._v("15")])]),_vm._v(" "),_c("tr",[_c("th",{attrs:{colspan:"2"}},[_vm._v("TOTAL")]),_vm._v(" "),_c("td",{style:{backgroundColor:_vm.getNoteEtCouleursInitial.couleurFinale,color:"white"}},[_vm._v("100")])])])])])]);}),_vm._v(" "),_c("div",{staticClass:"card-body"},_vm._l(_vm.scoresParFaciliteInitial,function(scoring,index){var _scoring$facilite3;return _c("div",{key:index,staticClass:"card-body"},[_c("div",{staticClass:"justify-content-center"},[_c("div",{staticClass:"head-memorandum-title px-3 mb-4",staticStyle:{"text-align":"center"}},[_vm._v("SCORING de Facilité : "+_vm._s(scoring===null||scoring===void 0||(_scoring$facilite3=scoring.facilite)===null||_scoring$facilite3===void 0?void 0:_scoring$facilite3.type_facilite))])]),_vm._v(" "),_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-12"},[_c("ResultatScoringsRating",{attrs:{score:scoring===null||scoring===void 0?void 0:scoring.note,total_score:_vm.formDataToBeWatched.total_score,score_minimal_pour_accord:_vm.formDataToBeWatched.score_minimal_pour_accord}})],1)])]);}),0)],2)]):_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"relook-header",on:{click:function click($event){_vm.seen1=!_vm.seen1;}}},[_c("h6",{attrs:{id:"scoring-initial"}},[_vm._v("\n                                            Scoring DCPP\n                                            "),_c("chevron-down-icon",{staticClass:"custom-class",staticStyle:{"float":"right",cursor:"pointer"},attrs:{size:"21"}})],1)])])]):_vm._e()],_vm._v(" "),[((_vm$selectedScoring3=_vm.selectedScoring)===null||_vm$selectedScoring3===void 0?void 0:_vm$selectedScoring3.id)==1||_vm.selectedScoring==null?_c("div",[_vm.seen2?_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"relook-header"},[_c("h6",{"class":" subdiv"+this.tb_name,attrs:{id:"scoring-final"}},[_vm._v("\n                                        Scoring DE\n                                        "),_c("chevron-up-icon",{staticClass:"custom-class",staticStyle:{"float":"right",cursor:"pointer"},attrs:{size:"21"},on:{click:function click($event){_vm.seen2=!_vm.seen2;}}})],1)]),_vm._v(" "),_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"card",staticStyle:{width:"100%",height:"100%"}},[_c("div",[_vm.seen3?_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"relook-header"},[_c("h6",{"class":" subdiv"+this.tb_name,attrs:{id:"profile-personnel"}},[_vm._v("\n                                                        PROFIL PERSONNEL - SITUATION FAMILIALE\n                                                        "),_c("chevron-up-icon",{staticClass:"custom-class",staticStyle:{"float":"right",cursor:"pointer"},attrs:{size:"21"},on:{click:function click($event){_vm.seen3=!_vm.seen3;}}})],1)]),_vm._v(" "),_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-6 pl-4"},[_vm._m(16),_vm._v(" "),_c("date-input",{attrs:{value:_vm.formDataToBeWatched.date_naissance,id:"date_naissance",background:"background: #00ffff21"},on:{input:_vm.formDataVars}})],1),_vm._v(" "),_c("div",{staticClass:"col-md-6 pl-4"},[_vm._m(17),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model",value:_vm.formDataToBeWatched.matrimoniale,expression:"formDataToBeWatched.matrimoniale"}],staticClass:"form-control bg-blue",attrs:{id:"matrimoniale"},on:{change:[function($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.formDataToBeWatched,"matrimoniale",$event.target.multiple?$$selectedVal:$$selectedVal[0]);},_vm.handleInput]}},[_c("option",{attrs:{value:"",disabled:"",selected:""}},[_vm._v("\n                                                        --- Sélectionner la situation matrimoniale ---\n                                                    ")]),_vm._v(" "),_c("option",{attrs:{value:""}}),_vm._v(" "),_c("option",{attrs:{value:"Divorcé(e)"}},[_vm._v("Divorcé(e)")]),_vm._v(" "),_c("option",{attrs:{value:"Célibataire"}},[_vm._v("Célibataire")]),_vm._v(" "),_c("option",{attrs:{value:"Marié(e)"}},[_vm._v("Marié(e)")]),_vm._v(" "),_c("option",{attrs:{value:"Veuf(ve)"}},[_vm._v("Veuf(ve)")]),_vm._v(" "),_c("option",{attrs:{value:"Veuf(ve)"}},[_vm._v("Concubinage")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6 pl-4"},[_vm._m(18),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.formDataToBeWatched.nbre_enfant,expression:"formDataToBeWatched.nbre_enfant"}],staticClass:"form-control bg-blue",attrs:{type:"number",min:"0",id:"nbre_enfant"},domProps:{value:_vm.formDataToBeWatched.nbre_enfant},on:{input:[function($event){if($event.target.composing)return;_vm.$set(_vm.formDataToBeWatched,"nbre_enfant",$event.target.value);},_vm.checkValueNbreEnfant]}})])])]):_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"relook-header"},[_c("h6",{"class":" subdiv"+this.tb_name,attrs:{id:"profil-personnel"}},[_vm._v("\n                                                        PROFIL PERSONNEL - SITUATION FAMILIALE\n                                                        "),_c("chevron-down-icon",{staticClass:"custom-class",staticStyle:{"float":"right",cursor:"pointer"},attrs:{size:"21"},on:{click:function click($event){_vm.seen3=!_vm.seen3;}}})],1)])]),_vm._v(" "),_vm.seen4?_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"relook-header"},[_c("h6",{"class":" subdiv"+this.tb_name,attrs:{id:"profil-professionnel"}},[_vm._v("\n                                                        PROFIL PROFESSIONNEL\n                                                        "),_c("chevron-up-icon",{staticClass:"custom-class",staticStyle:{"float":"right",cursor:"pointer"},attrs:{size:"21"},on:{click:function click($event){_vm.seen4=!_vm.seen4;}}})],1)]),_vm._v(" "),_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-6 pl-4"},[_vm._m(19),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.formDataToBeWatched.date_depart_retraite,expression:"formDataToBeWatched.date_depart_retraite"}],"class":_vm.age_depart_retraite>_vm.AGE_RETRAITE?"is-invalid form-control":"form-control bg-blue",attrs:{required:"",type:"month",id:"date_depart_retraite"},domProps:{value:_vm.formDataToBeWatched.date_depart_retraite},on:{change:_vm.updateDateDepartRetraite,input:function input($event){if($event.target.composing)return;_vm.$set(_vm.formDataToBeWatched,"date_depart_retraite",$event.target.value);}}}),_vm._v(" "),_c("div",{staticClass:"invalid-feedback fw-bold",attrs:{id:"date_depart_retraiteFeedback"}},[_c("small",[_vm._v("Attention l'age de départ retraite est > "+_vm._s(_vm.AGE_RETRAITE)+" ans.")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6 pl-4"},[_vm._m(20),_vm._v(" "),_c("div",{staticClass:"d-flex position-relative align-items-center"},[_c("select",{directives:[{name:"model",rawName:"v-model",value:_vm.formDataToBeWatched.statut_client,expression:"formDataToBeWatched.statut_client"}],staticClass:"form-control bg-blue",attrs:{id:"statut_client"},on:{change:[function($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.formDataToBeWatched,"statut_client",$event.target.multiple?$$selectedVal:$$selectedVal[0]);},_vm.handleInput]}},[_c("option",{attrs:{value:"",disabled:"",selected:""}},[_vm._v("\n                                                                        --- Sélectionner ---\n                                                                    ")]),_vm._v(" "),_c("option",{attrs:{value:""}}),_vm._v(" "),_c("option",[_vm._v("Non salarié et autres types de revenus")]),_vm._v(" "),_c("option",[_vm._v("Salarié d'entreprise privée non target")]),_vm._v(" "),_c("option",[_vm._v("Agent de l'Etat (non fonctionnaire)")]),_vm._v(" "),_c("option",[_vm._v("Salarié d'entreprise privée target Tiers 1")]),_vm._v(" "),_c("option",[_vm._v("Salarié d'entreprise privée target Tiers 2 & 3")]),_vm._v(" "),_c("option",[_vm._v("Retraité")]),_vm._v(" "),_c("option",[_vm._v("Fonctionnaire")])])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6 pl-4"},[_vm._m(21),_vm._v(" "),_c("div",{staticClass:"d-flex position-relative align-items-center"},[_c("select",{directives:[{name:"model",rawName:"v-model",value:_vm.formDataToBeWatched.type_contrat,expression:"formDataToBeWatched.type_contrat"}],staticClass:"form-control bg-blue",attrs:{id:"type_contrat"},on:{change:[function($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.formDataToBeWatched,"type_contrat",$event.target.multiple?$$selectedVal:$$selectedVal[0]);},_vm.handleInput]}},[_c("option",{attrs:{value:"",disabled:"",selected:""}},[_vm._v("\n                                                                    --- Sélectionner le type de contrat ---\n                                                                ")]),_vm._v(" "),_c("option",{attrs:{value:""}}),_vm._v(" "),_vm._l(_vm.data_type_de_contrat,function(el,ind){return _c("option",{key:ind,domProps:{value:el.libelle}},[_vm._v(_vm._s(el.libelle))]);})],2),_vm._v(" "),_vm.data_type_de_contrat==""||_vm.data_type_de_contrat.length==0?_c("span",{staticClass:"spinner-border spinner-border spinner-custom-input"}):_vm._e()])])])]):_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"relook-header"},[_c("h6",{"class":" subdiv"+this.tb_name,attrs:{id:"profil-professionnel"}},[_vm._v("\n                                                        PROFIL PROFESSIONNEL\n                                                        "),_c("chevron-down-icon",{staticClass:"custom-class",staticStyle:{"float":"right",cursor:"pointer"},attrs:{size:"21"},on:{click:function click($event){_vm.seen4=!_vm.seen4;}}})],1)])]),_vm._v(" "),_vm.seen5?_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"relook-header"},[_c("h6",{"class":" subdiv"+this.tb_name,attrs:{id:"stabilite"}},[_vm._v("\n                                                        STABILITE\n                                                        "),_c("chevron-up-icon",{staticClass:"custom-class",staticStyle:{"float":"right",cursor:"pointer"},attrs:{size:"21"},on:{click:function click($event){_vm.seen5=!_vm.seen5;}}})],1)]),_vm._v(" "),_c("div",{staticClass:"row"},[["CDD","INTERIM"].indexOf(this.formDataToBeWatched.type_contrat)!=-1?_c("div",{staticClass:"col-md-6 pl-4"},[_vm._m(22),_vm._v(" "),_c("date-input",{attrs:{value:_vm.formDataToBeWatched.date_debut_cdd_interim,id:"date_debut_cdd_interim",background:"background: #00ffff21"},on:{input:_vm.formDataVars}})],1):_vm._e(),_vm._v(" "),_c("div",{staticClass:"col-md-6 pl-4"},[_c("label",[_c("b",[_vm._v(_vm._s(["CDD","INTERIM"].indexOf(this.formDataToBeWatched.type_contrat)!=-1?"Date d'expiration du CDD/INTERIM":"Date début emploi actuel"))])]),_vm._v(" "),this.formDataToBeWatched.type_contrat=="CDI"?_c("div",{staticClass:"d-flex"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.formDataToBeWatched.annee_act_emploi,expression:"formDataToBeWatched.annee_act_emploi"}],staticClass:"form-control bg-blue",attrs:{required:"",type:"month",id:"annee_act_emploi"},domProps:{value:_vm.formDataToBeWatched.annee_act_emploi},on:{change:_vm.handleInput,input:function input($event){if($event.target.composing)return;_vm.$set(_vm.formDataToBeWatched,"annee_act_emploi",$event.target.value);}}})]):_c("div",[_c("date-input",{attrs:{value:_vm.formDataToBeWatched.data_expiration_cdd_interim,id:"data_expiration_cdd_interim",background:"background: #00ffff21"},on:{input:_vm.formDataVars}})],1)]),_vm._v(" "),_c("div",{staticClass:"col-md-6 pl-4"},[_vm._m(23),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model",value:_vm.formDataToBeWatched.habitation,expression:"formDataToBeWatched.habitation"}],staticClass:"form-control bg-blue",attrs:{id:"habitation"},on:{change:[function($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.formDataToBeWatched,"habitation",$event.target.multiple?$$selectedVal:$$selectedVal[0]);},_vm.handleInput]}},[_c("option",{attrs:{value:"",disabled:"",selected:""}},[_vm._v("\n                                                                    --- Sélectionner le type de logement ---\n                                                                ")]),_vm._v(" "),_c("option",{attrs:{value:""}}),_vm._v(" "),_c("option",{attrs:{value:"Locataire"}},[_vm._v("Locataire")]),_vm._v(" "),_c("option",{attrs:{value:"Appartement des parents"}},[_vm._v("Appartement des parents/logé à titre gratuit")]),_vm._v(" "),_c("option",{attrs:{value:"Propriétaire"}},[_vm._v("Propriétaire")])])])])]):_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"relook-header"},[_c("h6",{"class":" subdiv"+this.tb_name,attrs:{id:"stabilite"}},[_vm._v("\n                                                        STABILITE\n                                                        "),_c("chevron-down-icon",{staticClass:"custom-class",staticStyle:{"float":"right",cursor:"pointer"},attrs:{size:"21"},on:{click:function click($event){_vm.seen5=!_vm.seen5;}}})],1)])]),_vm._v(" "),_vm.seen6?_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"relook-header"},[_c("h6",{"class":" subdiv"+this.tb_name,attrs:{id:"reputation-et-relation-avec-la-banquel"}},[_vm._v("\n                                                        REPUTATION ET RELATION AVEC LA BANQUE\n                                                        "),_c("chevron-up-icon",{staticClass:"custom-class",staticStyle:{"float":"right",cursor:"pointer"},attrs:{size:"21"},on:{click:function click($event){_vm.seen6=!_vm.seen6;}}})],1)]),_vm._v(" "),_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-6 pl-4"},[_vm._m(24),_vm._v(" "),_c("date-input",{staticClass:"bg-blue",attrs:{value:_vm.formDataToBeWatched.date_entree_en_relation,id:"date_entree_en_relation"},on:{change:_vm.handleDateInput}})],1),_vm._v(" "),_c("div",{staticClass:"col-md-6 pl-4"},[_vm._m(25),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model",value:_vm.formDataToBeWatched.credits_anterieurs,expression:"formDataToBeWatched.credits_anterieurs"}],staticClass:"form-select bg-blue",on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.formDataToBeWatched,"credits_anterieurs",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{value:"",disabled:"",selected:""}},[_vm._v(" --- Sélectionner l'assurance --- ")]),_vm._v(" "),_c("option",{attrs:{value:""}}),_vm._v(" "),_c("option",{attrs:{value:"Première demande sans incident antérieur (dépassement de plus de 90 jours, déclassement)"}},[_vm._v("Première demande sans incident antérieur (dépassement de plus de 90 jours, déclassement)")]),_vm._v(" "),_c("option",{attrs:{value:"Nième demande (à partir de la deuxième demande) sans incident enregistré : absence d'impayé ou déclassement sur un ou des crédits antérieurs)"}},[_vm._v("Nième demande (à partir de la deuxième demande) sans incident enregistré : absence d'impayé ou déclassement sur un ou des crédits antérieurs)")]),_vm._v(" "),_c("option",{attrs:{value:"Client ayant enregistré un incident : au moins 2 impayés ou déclassement sur un ou des créditsantérieurs"}},[_vm._v("Client ayant enregistré un incident : au moins 2 impayés ou déclassement sur un ou des crédits antérieurs")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6 pl-4"},[_vm._m(26),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model",value:_vm.formDataToBeWatched.credit_en_cours,expression:"formDataToBeWatched.credit_en_cours"}],staticClass:"form-select bg-blue",on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.formDataToBeWatched,"credit_en_cours",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{value:"",disabled:"",selected:""}},[_vm._v(" --- Sélectionner l'assurance --- ")]),_vm._v(" "),_c("option",{attrs:{value:""}}),_vm._v(" "),_c("option",{attrs:{value:"Impayé constaté sur la période allant de l'instruction à la décision de crédit"}},[_vm._v("Impayé constaté sur la période allant de l'instruction à la décision de crédit")]),_vm._v(" "),_c("option",{attrs:{value:"Pas d'impayé sur la période allant de l'instruction à la décision de crédit"}},[_vm._v("Pas d'impayé sur la période allant de l'instructionà la décision de crédit")]),_vm._v(" "),_c("option",{attrs:{value:"Cas de prospect: impayé chez le confère ou BIC"}},[_vm._v("Cas de prospect: impayé chez le confère ou BIC")]),_vm._v(" "),_c("option",{attrs:{value:"Cas de prospect: absence d'impayé chez le confère ou BIC"}},[_vm._v("Cas de prospect: absence d'impayé chez le confère ou BIC")])])])])]):_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"relook-header"},[_c("h6",{"class":" subdiv"+this.tb_name,attrs:{id:"reputation-et-relation-avec-la-banquel"}},[_vm._v("\n                                                        REPUTATION ET RELATION AVEC LA BANQUE\n                                                        "),_c("chevron-down-icon",{staticClass:"custom-class",staticStyle:{"float":"right",cursor:"pointer"},attrs:{size:"21"},on:{click:function click($event){_vm.seen6=!_vm.seen6;}}})],1)])]),_vm._v(" "),_c("div",{staticClass:"card-body"},[_vm._m(27),_vm._v(" "),_c("div",{staticClass:"card-body"},[_c("table",{staticClass:"table table-bordered"},[_vm._m(28),_vm._v(" "),_c("tbody",[_c("tr",[_c("td",{staticClass:"text-center align-middle",attrs:{colspan:"3",rowspan:"5"}},[_vm._v(" Âge")]),_vm._v(" "),_c("td",{style:_vm.getFinalAgeColorRange(0,20)},[_vm._v("Inf à 20 ans")]),_vm._v(" "),_c("td",{style:_vm.getFinalAgeColorRange(0,20)},[_vm._v("0")]),_vm._v(" "),_c("td",{staticClass:"text-center align-middle",attrs:{rowspan:"5"}},[_vm._v("30")])]),_vm._v(" "),_c("tr",[_c("td",{style:_vm.getFinalAgeColorRange(20,30)},[_vm._v("[20 - 30 ans[")]),_vm._v(" "),_c("td",{style:_vm.getFinalAgeColorRange(20,30)},[_vm._v("3")])]),_vm._v(" "),_c("tr",[_c("td",{style:_vm.getFinalAgeColorRange(30,50)},[_vm._v("[30 - 50 ans[")]),_vm._v(" "),_c("td",{style:_vm.getFinalAgeColorRange(30,50)},[_vm._v("15")])]),_vm._v(" "),_c("tr",[_c("td",{style:_vm.getFinalAgeColorRange(50,60)},[_vm._v("[50 - 60 ans[")]),_vm._v(" "),_c("td",{style:_vm.getFinalAgeColorRange(50,60)},[_vm._v("12")])]),_vm._v(" "),_c("tr",[_c("td",{style:_vm.getFinalAgeColorRange(60,150)},[_vm._v("Sup ou égal à 60 ans")]),_vm._v(" "),_c("td",{style:_vm.getFinalAgeColorRange(60,150)},[_vm._v("6")])])])]),_vm._v(" "),_c("table",{staticClass:"table table-bordered"},[_vm._m(29),_vm._v(" "),_c("tbody",[_c("tr",[_c("td",{staticClass:"text-center align-middle",attrs:{colspan:"3",rowspan:"4"}},[_vm._v("Situation matrimoniale")]),_vm._v(" "),_c("td",{style:_vm.getFinalMatrimonialeColorRange("Divorcé(e)")},[_vm._v("Divorcé")]),_vm._v(" "),_c("td",{style:_vm.getFinalMatrimonialeColorRange("Divorcé(e)")},[_vm._v("4")]),_vm._v(" "),_c("td",{staticClass:"text-center align-middle",attrs:{rowspan:"4"}},[_vm._v("30")])]),_vm._v(" "),_c("tr",[_c("td",{style:_vm.getFinalMatrimonialeColorRange("Célibataire")},[_vm._v("Célibataire")]),_vm._v(" "),_c("td",{style:_vm.getFinalMatrimonialeColorRange("Célibataire")},[_vm._v("7,5")])]),_vm._v(" "),_c("tr",[_c("td",{style:_vm.getFinalMatrimonialeColorRange("Marié(e)")},[_vm._v("Marié")]),_vm._v(" "),_c("td",{style:_vm.getFinalMatrimonialeColorRange("Marié(e)")},[_vm._v("15")])]),_vm._v(" "),_c("tr",[_c("td",{style:_vm.getFinalMatrimonialeColorRange("Veuf(ve)")},[_vm._v("Veuf")]),_vm._v(" "),_c("td",{style:_vm.getFinalMatrimonialeColorRange("Veuf(ve)")},[_vm._v("12")])])])]),_vm._v(" "),_c("table",{staticClass:"table table-bordered"},[_vm._m(30),_vm._v(" "),_c("tbody",[_c("tr",[_c("td",{staticClass:"text-center align-middle",attrs:{colspan:"3",rowspan:"3"}},[_vm._v("Nombre d'enfants")]),_vm._v(" "),_c("td",{style:_vm.getFinalNombreEnfantsColorRange(7,150)},[_vm._v("Sup à 6")]),_vm._v(" "),_c("td",{style:_vm.getFinalNombreEnfantsColorRange(7,150)},[_vm._v("3")]),_vm._v(" "),_c("td",{staticClass:"text-center align-middle",attrs:{rowspan:"3"}},[_vm._v("40")])]),_vm._v(" "),_c("tr",[_c("td",{style:_vm.getFinalNombreEnfantsColorRange(4,6)},[_vm._v("De 4 à 6")]),_vm._v(" "),_c("td",{style:_vm.getFinalNombreEnfantsColorRange(4,6)},[_vm._v("9")])]),_vm._v(" "),_c("tr",[_c("td",{style:_vm.getFinalNombreEnfantsColorRange(0,3)},[_vm._v("De 0 à 3")]),_vm._v(" "),_c("td",{style:_vm.getFinalNombreEnfantsColorRange(0,3)},[_vm._v("15")])])])])])]),_vm._v(" "),_c("div",[_vm._m(31),_vm._v(" "),_c("div",{staticClass:"card-body"},[_c("table",{staticClass:"table table-bordered"},[_vm._m(32),_vm._v(" "),_c("tbody",[_c("tr",[_c("td",{attrs:{rowspan:"10"}},[_vm._v("Statut du client selon l'employeur")]),_vm._v(" "),_c("td",{style:_vm.getFinalStatutClientColorRange("Non salarié et autres types de revenus")},[_vm._v("Non salarié et autres types de revenus")]),_vm._v(" "),_c("td",{style:_vm.getFinalStatutClientColorRange("Non salarié et autres types de revenus")},[_vm._v("0")]),_vm._v(" "),_c("td",{attrs:{rowspan:"10"}},[_vm._v("70")])]),_vm._v(" "),_c("tr",[_c("td",{style:_vm.getFinalStatutClientColorRange("Salarié d'entreprise privée non target")},[_vm._v("Salarié d’entreprise privée non target")]),_vm._v(" "),_c("td",{style:_vm.getFinalStatutClientColorRange("Salarié d'entreprise privée non target")},[_vm._v("6")])]),_vm._v(" "),_c("tr",[_c("td",{style:_vm.getFinalStatutClientColorRange("Salarié d'entreprise privée target Tiers 1")},[_vm._v("Salarié d'entreprise privée target Tiers 1")]),_vm._v(" "),_c("td",{style:_vm.getFinalStatutClientColorRange("Salarié d'entreprise privée target Tiers 1")},[_vm._v("12")])]),_vm._v(" "),_c("tr",[_c("td",{style:_vm.getFinalStatutClientColorRange("Salarié d'entreprise privée target Tiers 2 & 3")},[_vm._v("Salarié d'entreprise privée target Tiers 2 & 3")]),_vm._v(" "),_c("td",{style:_vm.getFinalStatutClientColorRange("Salarié d'entreprise privée target Tiers 2 & 3")},[_vm._v("9")])]),_vm._v(" "),_c("tr",[_c("td",{style:_vm.getFinalStatutClientColorRange("Agent de l'Etat (non fonctionnaire)")},[_vm._v("Agent de l’Etat (non fonctionnaire)")]),_vm._v(" "),_c("td",{style:_vm.getFinalStatutClientColorRange("Agent de l'Etat (non fonctionnaire)")},[_vm._v("9")])]),_vm._v(" "),_c("tr",[_c("td",{style:_vm.getFinalStatutClientColorRange("Retraité")},[_vm._v("Retraité")]),_vm._v(" "),_c("td",{style:_vm.getFinalStatutClientColorRange("Retraité")},[_vm._v("9")])]),_vm._v(" "),_c("tr",[_c("td",{style:_vm.getFinalStatutClientColorRange("Fonctionnaire")},[_vm._v("Fonctionnaire")]),_vm._v(" "),_c("td",{style:_vm.getFinalStatutClientColorRange("Fonctionnaire")},[_vm._v("15")])])])]),_vm._v(" "),_c("table",{staticClass:"table table-bordered"},[_vm._m(33),_vm._v(" "),_c("tbody",[_c("tr",[_c("td",{staticClass:"text-center align-middle",attrs:{colspan:"3",rowspan:"3"}},[_vm._v("Type de contrat")]),_vm._v(" "),_c("td",{style:_vm.getFinalTypeContratColorRange("CDI")},[_vm._v("CDI")]),_vm._v(" "),_c("td",{style:_vm.getFinalTypeContratColorRange("CDI")},[_vm._v("15")]),_vm._v(" "),_c("td",{staticClass:"text-center align-middle",attrs:{rowspan:"3"}},[_vm._v("35")])]),_vm._v(" "),_c("tr",[_c("td",{style:_vm.getFinalTypeContratColorRange("CDD")},[_vm._v("CDD")]),_vm._v(" "),_c("td",{style:_vm.getFinalTypeContratColorRange("CDD")},[_vm._v("10")])])])])])]),_vm._v(" "),_c("div",{staticClass:"card-body"},[_vm._m(34),_vm._v(" "),_c("div",{staticClass:"card-body"},[_c("table",{staticClass:"table table-bordered"},[_vm._m(35),_vm._v(" "),_c("tbody",[_c("tr",[_c("td",{staticClass:"text-center align-middle",attrs:{colspan:"5",rowspan:"5"}},[_vm._v(" Ancienneté professionnelle à l'emploi actuel")]),_vm._v(" "),_c("td",{style:_vm.getFinalAncienneteEmploiColorRange(0)},[_vm._v("Inf à 1 ans")]),_vm._v(" "),_c("td",{style:_vm.getFinalAncienneteEmploiColorRange(0)},[_vm._v("0")]),_vm._v(" "),_c("td",{staticClass:"text-center align-middle",attrs:{rowspan:"5"}},[_vm._v("60")])]),_vm._v(" "),_c("tr",[_c("td",{style:_vm.getFinalAncienneteEmploiColorRange(3)},[_vm._v("[1 - 3 ans[")]),_vm._v(" "),_c("td",{style:_vm.getFinalAncienneteEmploiColorRange(3)},[_vm._v("3")])]),_vm._v(" "),_c("tr",[_c("td",{style:_vm.getFinalAncienneteEmploiColorRange(9)},[_vm._v("[3 - 5 ans[")]),_vm._v(" "),_c("td",{style:_vm.getFinalAncienneteEmploiColorRange(9)},[_vm._v("9")])]),_vm._v(" "),_c("tr",[_c("td",{style:_vm.getFinalAncienneteEmploiColorRange(12)},[_vm._v("[5 - 7 ans[")]),_vm._v(" "),_c("td",{style:_vm.getFinalAncienneteEmploiColorRange(12)},[_vm._v("12")])]),_vm._v(" "),_c("tr",[_c("td",{style:_vm.getFinalAncienneteEmploiColorRange(15)},[_vm._v("Sup ou égal à 7 ans")]),_vm._v(" "),_c("td",{style:_vm.getFinalAncienneteEmploiColorRange(15)},[_vm._v("15")])])])]),_vm._v(" "),_c("table",{staticClass:"table table-bordered"},[_vm._m(36),_vm._v(" "),_c("tbody",[_c("tr",[_c("td",{staticClass:"text-center align-middle",attrs:{colspan:"4",rowspan:"4"}},[_vm._v("Status de Propriétaire")]),_vm._v(" "),_c("td",{style:_vm.getFinalHabitationStyle(6)},[_vm._v("Locataire")]),_vm._v(" "),_c("td",{style:_vm.getFinalHabitationStyle(6)},[_vm._v("6")]),_vm._v(" "),_c("td",{staticClass:"text-center align-middle",attrs:{rowspan:"4"}},[_vm._v("40")])]),_vm._v(" "),_c("tr",[_c("td",{style:_vm.getFinalHabitationStyle(10)},[_vm._v("Appartement des parents")]),_vm._v(" "),_c("td",{style:_vm.getFinalHabitationStyle(10)},[_vm._v("10")])]),_vm._v(" "),_c("tr",[_c("td",{style:_vm.getFinalHabitationStyle(15)},[_vm._v("Propriétaire")]),_vm._v(" "),_c("td",{style:_vm.getFinalHabitationStyle(15)},[_vm._v("15")])])])])])]),_vm._v(" "),_c("div",{staticClass:"card-body"},[_vm._m(37),_vm._v(" "),_c("div",{staticClass:"card-body"},[_c("table",{staticClass:"table table-bordered"},[_vm._m(38),_vm._v(" "),_c("tbody",[_c("tr",[_c("td",{staticClass:"text-center align-middle",attrs:{colspan:"5",rowspan:"5"}},[_vm._v("Ancienneté de la relation")]),_vm._v(" "),_c("td",{style:_vm.getFinalDateEntreeRelationStyle(3)},[_vm._v("]0 - 3 Mois]")]),_vm._v(" "),_c("td",{style:_vm.getFinalDateEntreeRelationStyle(3)},[_vm._v("3")]),_vm._v(" "),_c("td",{staticClass:"text-center align-middle",attrs:{rowspan:"5"}},[_vm._v("10")])]),_vm._v(" "),_c("tr",[_c("td",{style:_vm.getFinalDateEntreeRelationStyle(6)},[_vm._v("]3 Mois - 1 An]")]),_vm._v(" "),_c("td",{style:_vm.getFinalDateEntreeRelationStyle(6)},[_vm._v("6")])]),_vm._v(" "),_c("tr",[_c("td",{style:_vm.getFinalDateEntreeRelationStyle(9)},[_vm._v("]1 - 3 Ans]")]),_vm._v(" "),_c("td",{style:_vm.getFinalDateEntreeRelationStyle(9)},[_vm._v("9")])]),_vm._v(" "),_c("tr",[_c("td",{style:_vm.getFinalDateEntreeRelationStyle(12)},[_vm._v("]3 - 10 Ans]")]),_vm._v(" "),_c("td",{style:_vm.getFinalDateEntreeRelationStyle(12)},[_vm._v("12")])]),_vm._v(" "),_c("tr",[_c("td",{style:_vm.getFinalDateEntreeRelationStyle(15)},[_vm._v("Sup à 10 Ans")]),_vm._v(" "),_c("td",{style:_vm.getFinalDateEntreeRelationStyle(15)},[_vm._v("15")])])])]),_vm._v(" "),_c("table",{staticClass:"table table-bordered"},[_vm._m(39),_vm._v(" "),_c("tbody",[_c("tr",[_c("td",{staticClass:"text-center align-middle",attrs:{colspan:"8",rowspan:"8"}},[_vm._v("Crédits antérieurs dans nos livres")]),_vm._v(" "),_c("td",{style:_vm.getFinalCreditsAnterieursStyle(9)},[_vm._v("Première demande sans incident antérieur (dépassement de plus de 90 jours, déclassement)")]),_vm._v(" "),_c("td",{style:_vm.getFinalCreditsAnterieursStyle(9)},[_vm._v("9")]),_vm._v(" "),_c("td",{staticClass:"text-center align-middle",attrs:{rowspan:"8"}},[_vm._v("30")])]),_vm._v(" "),_c("tr",[_c("td",{style:_vm.getFinalCreditsAnterieursStyle(15)},[_vm._v("Nième demande (à partir de la deuxième demande) sans incident enregistré : absence d'impayé ou déclassement sur un ou des crédits antérieurs)")]),_vm._v(" "),_c("td",{style:_vm.getFinalCreditsAnterieursStyle(15)},[_vm._v("15")])]),_vm._v(" "),_c("tr",[_c("td",{style:_vm.getFinalCreditsAnterieursStyle(0)},[_vm._v("Client ayant enregistré un incident : au moins 2 impayés ou déclassement sur un ou des crédits antérieurs")]),_vm._v(" "),_c("td",{style:_vm.getFinalCreditsAnterieursStyle(0)},[_vm._v("0")])])])]),_vm._v(" "),_c("table",{staticClass:"table table-bordered"},[_vm._m(40),_vm._v(" "),_c("tbody",[_c("tr",[_c("td",{staticClass:"text-center align-middle",attrs:{colspan:"4",rowspan:"4"}},[_vm._v("Crédits en cours (chez nous et à la concurrence)")]),_vm._v(" "),_c("td",{style:_vm.getFinalCreditEnCoursStyle("Impayé constaté sur la période allant de l'instruction à la décision de crédit")},[_vm._v("Impayé constaté sur la période allant de l'instruction à la décision de crédit")]),_vm._v(" "),_c("td",{style:_vm.getFinalCreditEnCoursStyle("Impayé constaté sur la période allant de l'instruction à la décision de crédit")},[_vm._v("0")]),_vm._v(" "),_c("td",{staticClass:"text-center align-middle",attrs:{rowspan:"4"}},[_vm._v("20")])]),_vm._v(" "),_c("tr",[_c("td",{style:_vm.getFinalCreditEnCoursStyle("Pas d'impayé sur la période allant de l'instruction à la décision de crédit")},[_vm._v("Pas d'impayé sur la période allant de l'instruction à la décision de crédit")]),_vm._v(" "),_c("td",{style:_vm.getFinalCreditEnCoursStyle("Pas d'impayé sur la période allant de l'instruction à la décision de crédit")},[_vm._v("12")])]),_vm._v(" "),_c("tr",[_c("td",{style:_vm.getFinalCreditEnCoursStyle("Cas de prospect: impayé chez le confère ou BIC")},[_vm._v("Cas de prospect: impayé chez le confère ou BIC")]),_vm._v(" "),_c("td",{style:_vm.getFinalCreditEnCoursStyle("Cas de prospect: impayé chez le confère ou BIC")},[_vm._v("0")])]),_vm._v(" "),_c("tr",[_c("td",{style:_vm.getFinalCreditEnCoursStyle("Cas de prospect: absence d'impayé chez le confère ou BIC")},[_vm._v("Cas de prospect: absence d'impayé chez le confère ou BIC")]),_vm._v(" "),_c("td",{style:_vm.getFinalCreditEnCoursStyle("Cas de prospect: absence d'impayé chez le confère ou BIC")},[_vm._v("6")])])])]),_vm._v(" "),_vm._l(_vm.scoresParFaciliteFinal,function(scoring,index){var _scoring$facilite4;return _c("div",{key:index},[_c("div",{staticClass:"justify-content-center"},[_c("div",{staticClass:"head-memorandum-title px-3 mb-4",staticStyle:{"text-align":"center"}},[_vm._v("CORING GARNATIE : "+_vm._s(scoring===null||scoring===void 0||(_scoring$facilite4=scoring.facilite)===null||_scoring$facilite4===void 0?void 0:_scoring$facilite4.type_facilite))])]),_vm._v(" "),_c("table",{staticClass:"table table-bordered"},[_vm._m(41,true),_vm._v(" "),_c("tbody",[_vm._l(_vm.getGarantiesDetailsForFacilite(scoring.facilite.uuid).list,function(garantie,idx){return _vm.getGarantiesDetailsForFacilite(scoring.facilite.uuid)?[_c("tr",[idx===0?_c("td",{staticClass:"text-center align-middle",attrs:{colspan:"3",rowspan:_vm.getGarantiesDetailsForFacilite(scoring.facilite.uuid).list.length}},[_vm._v("Garanties")]):_vm._e(),_vm._v(" "),_c("td",{style:_vm.getColorByNote(garantie.note,garantie.libelle,scoring.facilite.uuid)},[_vm._v(_vm._s(garantie.libelle))]),_vm._v(" "),_c("td",[_vm._v(_vm._s(garantie.note1))]),_vm._v(" "),idx===0?_c("td",{staticClass:"text-center align-middle",attrs:{rowspan:_vm.getGarantiesDetailsForFacilite(scoring.facilite.uuid).list.length}},[_vm._v("\n                                                                        40\n                                                                    ")]):_vm._e()])]:_vm._e();})],2)])]);})],2)]),_vm._v(" "),_vm._l(_vm.scoresParFaciliteFinal,function(scoring,index){var _vm$scoresFinal,_vm$scoresFinal2,_vm$scoresFinal3;return _c("div",{key:index,staticClass:"card-body"},[_vm._m(42,true),_vm._v(" "),_c("div",{staticClass:"card-body"},[_c("table",{staticClass:"table table-bordered"},[_vm._m(43,true),_vm._v(" "),_c("tbody",[_c("tr",[_c("td",{style:{backgroundColor:_vm.getNoteEtCouleursFinal.couleurs.personnel,color:"white"}},[_vm._v("PROFIL PERSONNEL")]),_vm._v(" "),_c("td",{style:{backgroundColor:_vm.getNoteEtCouleursFinal.couleurs.personnel,color:"white"}},[_vm._v(_vm._s((_vm$scoresFinal=_vm.scoresFinal)===null||_vm$scoresFinal===void 0?void 0:_vm$scoresFinal.personnel))]),_vm._v(" "),_c("td",{style:{backgroundColor:_vm.getNoteEtCouleursFinal.couleurs.personnel,color:"white"}},[_vm._v("20")])]),_vm._v(" "),_c("tr",[_c("td",{style:{backgroundColor:_vm.getNoteEtCouleursFinal.couleurs.professionnel,color:"white"}},[_vm._v("PROFIL PROFESSIONNEL")]),_vm._v(" "),_c("td",{style:{backgroundColor:_vm.getNoteEtCouleursFinal.couleurs.professionnel,color:"white"}},[_vm._v(_vm._s((_vm$scoresFinal2=_vm.scoresFinal)===null||_vm$scoresFinal2===void 0?void 0:_vm$scoresFinal2.professionnel))]),_vm._v(" "),_c("td",{style:{backgroundColor:_vm.getNoteEtCouleursFinal.couleurs.professionnel,color:"white"}},[_vm._v("30")])]),_vm._v(" "),_c("tr",[_c("td",{style:{backgroundColor:_vm.getNoteEtCouleursFinal.couleurs.stabilite,color:"white"}},[_vm._v("STABILITE")]),_vm._v(" "),_c("td",{style:{backgroundColor:_vm.getNoteEtCouleursFinal.couleurs.stabilite,color:"white"}},[_vm._v(_vm._s((_vm$scoresFinal3=_vm.scoresFinal)===null||_vm$scoresFinal3===void 0?void 0:_vm$scoresFinal3.stabilite))]),_vm._v(" "),_c("td",{style:{backgroundColor:_vm.getNoteEtCouleursFinal.couleurs.stabilite,color:"white"}},[_vm._v("30")])]),_vm._v(" "),_c("tr",[_c("td",{style:{backgroundColor:_vm.getNoteEtCouleursFinal.couleurs.reputation,color:"white"}},[_vm._v("REPUTATION & RELATION AVEC LA BANQUE")]),_vm._v(" "),_c("td",{style:{backgroundColor:_vm.getNoteEtCouleursFinal.couleurs.reputation,color:"white"}},[_vm._v(_vm._s(scoring===null||scoring===void 0?void 0:scoring.reputation))]),_vm._v(" "),_c("td",{style:{backgroundColor:_vm.getNoteEtCouleursFinal.couleurs.reputation,color:"white"}},[_vm._v("20")])]),_vm._v(" "),_c("tr",[_c("th",{attrs:{colspan:"2"}},[_vm._v("TOTAL")]),_vm._v(" "),_c("td",{style:{backgroundColor:_vm.getNoteEtCouleursFinal.couleurFinale,color:"white"}},[_vm._v("100")])])])])])]);}),_vm._v(" "),_c("div",{staticClass:"card-body"},_vm._l(_vm.scoresParFaciliteFinal,function(scoring,index){var _scoring$facilite5;return _c("div",{key:index,staticClass:"card-body"},[_c("div",{staticClass:"justify-content-center"},[_c("div",{staticClass:"head-memorandum-title px-3 mb-4",staticStyle:{"text-align":"center"}},[_vm._v("SCORING de Facilité : "+_vm._s(scoring===null||scoring===void 0||(_scoring$facilite5=scoring.facilite)===null||_scoring$facilite5===void 0?void 0:_scoring$facilite5.type_facilite))])]),_vm._v(" "),_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-12"},[_c("ResultatScoringsRating",{attrs:{score:scoring===null||scoring===void 0?void 0:scoring.note,total_score:_vm.formDataToBeWatched.total_score,score_minimal_pour_accord:_vm.formDataToBeWatched.score_minimal_pour_accord}})],1)])]);}),0)],2)])])]):_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"relook-header"},[_c("h6",{attrs:{id:"scoring-final"}},[_vm._v("\n                                            Scoring DE\n                                            "),_c("chevron-down-icon",{staticClass:"custom-class",staticStyle:{"float":"right",cursor:"pointer"},attrs:{size:"21"},on:{click:function click($event){_vm.seen2=!_vm.seen2;}}})],1)])])]):_vm._e()]],2):_vm._e()]),_vm._v(" "),_c("div",{staticClass:"mb-5"}),_vm._v(" "),_c("button",{staticClass:"btn shadow-md text-white position-absolute",staticStyle:{cursor:"pointer",right:"16px",bottom:"10px",background:"#2c3e50","max-width":"max-content"},attrs:{type:"button",name:"button"},on:{click:function click($event){return _vm.retract();}}},[_vm._v("\n                    Fermer le tableau\n                ")])])]):_c("div",{staticClass:"card card-width-height"},[_c("br"),_vm._v(" "),_c("div",{staticClass:"card-header hdc pb-0 pt-2"},[_c("h6",{staticClass:"head",attrs:{id:"f0-head"}},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col"},[_vm._v("\n                            "+_vm._s(_vm.tb_display_name)+" : Résultats Scoring\n                        ")]),_vm._v(" "),_c("div",{staticClass:"col-auto"},[((_vm$formDataToBeWatch3=_vm.formDataToBeWatched.notes)===null||_vm$formDataToBeWatch3===void 0?void 0:_vm$formDataToBeWatch3.length)>0?_c("div",{staticStyle:{display:"inline-block",position:"relative"}},[_c("span",{attrs:{type:"button"},on:{click:function click($event){return _vm.openNotesModal(true);}}},[_c("i",{staticClass:"icofont icofont-comment text-white px-2",staticStyle:{"font-size":"12px"},attrs:{role:"button"}}),_vm._v(" "),_c("span",{staticClass:"badge-sm"},[_c("span",[_vm._v(" "+_vm._s(_vm.formDataToBeWatched.notes.length)+" ")])])])]):_vm._e(),_vm._v(" "),_c("chevron-down-icon",{staticClass:"custom-class",staticStyle:{cursor:"pointer"},attrs:{size:"21"},on:{click:function click($event){return _vm.retract();}}})],1)])])])])],1),_vm._v(" "),_c("note-modal",{attrs:{name:_vm.tb_name,listingNote:_vm.listingNote,notes:_vm.formDataToBeWatched.notes},on:{close:function close($event){return _vm.$modal.hide(_vm.tb_name);},addNote:function addNote($event){return _vm.formDataToBeWatched.notes.unshift($event);}},model:{value:_vm.formDataToBeWatched.notes,callback:function callback($$v){_vm.$set(_vm.formDataToBeWatched,"notes",$$v);},expression:"formDataToBeWatched.notes"}})],1);};var staticRenderFns=[function(){var _vm=this,_c=_vm._self._c;return _c("div",{staticClass:"justify-content-center"},[_c("div",{staticClass:"head-memorandum-title px-3 mb-4",staticStyle:{"text-align":"center"}},[_vm._v("PROFIL PERSONNEL - SITUATION FAMILIALE")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("thead",[_c("tr",[_c("th",{staticClass:"col-question",attrs:{colspan:"3"}},[_vm._v("Question 1")]),_vm._v(" "),_c("th",{staticClass:"col-attribut"},[_vm._v("Attribut")]),_vm._v(" "),_c("th",{staticClass:"col-note"},[_vm._v("Note")]),_vm._v(" "),_c("th",{staticClass:"col-ponderation"},[_vm._v("Pondération")])])]);},function(){var _vm=this,_c=_vm._self._c;return _c("thead",[_c("tr",[_c("th",{staticClass:"col-question",attrs:{colspan:"3"}},[_vm._v("Question 2")]),_vm._v(" "),_c("th",{staticClass:"col-attribut"},[_vm._v("Attribut")]),_vm._v(" "),_c("th",{staticClass:"col-note"},[_vm._v("Note")]),_vm._v(" "),_c("th",{staticClass:"col-ponderation"},[_vm._v("Pondération")])])]);},function(){var _vm=this,_c=_vm._self._c;return _c("thead",[_c("tr",[_c("th",{staticClass:"col-question",attrs:{colspan:"3"}},[_vm._v("Question 3")]),_vm._v(" "),_c("th",{staticClass:"col-attribut"},[_vm._v("Attribut")]),_vm._v(" "),_c("th",{staticClass:"col-note"},[_vm._v("Note")]),_vm._v(" "),_c("th",{staticClass:"col-ponderation"},[_vm._v("Pondération")])])]);},function(){var _vm=this,_c=_vm._self._c;return _c("div",{staticClass:"justify-content-center"},[_c("div",{staticClass:"head-memorandum-title px-3 mb-4",staticStyle:{"text-align":"center"}},[_vm._v("PROFIL PROFESSIONNEL")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("thead",[_c("tr",[_c("th",{staticClass:"col-question"},[_vm._v("Question 1")]),_vm._v(" "),_c("th",{staticClass:"col-attribut"},[_vm._v("Attribut")]),_vm._v(" "),_c("th",{staticClass:"col-note"},[_vm._v("Note")]),_vm._v(" "),_c("th",{staticClass:"col-ponderation"},[_vm._v("Pondération")])])]);},function(){var _vm=this,_c=_vm._self._c;return _c("thead",[_c("tr",[_c("th",{staticClass:"col-question",attrs:{colspan:"3",rowspan:"3"}},[_vm._v("Question 2")]),_vm._v(" "),_c("th",{staticClass:"col-attribut"},[_vm._v("Attribut")]),_vm._v(" "),_c("th",{staticClass:"col-note"},[_vm._v("Note")]),_vm._v(" "),_c("th",{staticClass:"col-ponderation"},[_vm._v("Pondération")])])]);},function(){var _vm=this,_c=_vm._self._c;return _c("div",{staticClass:"justify-content-center"},[_c("div",{staticClass:"head-memorandum-title px-3 mb-4",staticStyle:{"text-align":"center"}},[_vm._v("STABILITE")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("thead",[_c("tr",[_c("th",{staticClass:"col-question",attrs:{colspan:"5",rowspan:"5"}},[_vm._v("Question 1")]),_vm._v(" "),_c("th",{staticClass:"col-attribut"},[_vm._v("Attribut")]),_vm._v(" "),_c("th",{staticClass:"col-note"},[_vm._v("Note")]),_vm._v(" "),_c("th",{staticClass:"col-ponderation"},[_vm._v("Pondération")])])]);},function(){var _vm=this,_c=_vm._self._c;return _c("thead",[_c("tr",[_c("th",{staticClass:"col-question",attrs:{colspan:"4",role:"4"}},[_vm._v("Question 2")]),_vm._v(" "),_c("th",{staticClass:"col-attribut"},[_vm._v("Attribut")]),_vm._v(" "),_c("th",{staticClass:"col-note"},[_vm._v("Note")]),_vm._v(" "),_c("th",{staticClass:"col-ponderation"},[_vm._v("Pondération")])])]);},function(){var _vm=this,_c=_vm._self._c;return _c("div",{staticClass:"justify-content-center"},[_c("div",{staticClass:"head-memorandum-title px-3 mb-4",staticStyle:{"text-align":"center"}},[_vm._v("REPUTATION & RELATION AVEC LA BANQUE")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("thead",[_c("tr",[_c("th",{staticClass:"col-question",attrs:{colspan:"5",rowspan:"5"}},[_vm._v("Question 1")]),_vm._v(" "),_c("th",{staticClass:"col-attribut"},[_vm._v("Attribut")]),_vm._v(" "),_c("th",{staticClass:"col-note"},[_vm._v("Note")]),_vm._v(" "),_c("th",{staticClass:"col-ponderation"},[_vm._v("Pondération")])])]);},function(){var _vm=this,_c=_vm._self._c;return _c("thead",[_c("tr",[_c("th",{staticClass:"col-question",attrs:{colspan:"8",rowspan:"8"}},[_vm._v("Question 2")]),_vm._v(" "),_c("th",{staticClass:"col-attribut"},[_vm._v("Attribut")]),_vm._v(" "),_c("th",{staticClass:"col-note"},[_vm._v("Note")]),_vm._v(" "),_c("th",{staticClass:"col-ponderation"},[_vm._v("Pondération")])])]);},function(){var _vm=this,_c=_vm._self._c;return _c("thead",[_c("tr",[_c("th",{staticClass:"col-question",attrs:{colspan:"4",rowspan:"4"}},[_vm._v("Question 3")]),_vm._v(" "),_c("th",{staticClass:"col-attribut"},[_vm._v("Attribut")]),_vm._v(" "),_c("th",{staticClass:"col-note"},[_vm._v("Note")]),_vm._v(" "),_c("th",{staticClass:"col-ponderation"},[_vm._v("Pondération")])])]);},function(){var _vm=this,_c=_vm._self._c;return _c("thead",[_c("tr",[_c("th",{staticClass:"col-question",attrs:{colspan:"3",rowspan:"3"}},[_vm._v("Question 4")]),_vm._v(" "),_c("th",{staticClass:"col-attribut"},[_vm._v("Attribut")]),_vm._v(" "),_c("th",{staticClass:"col-note"},[_vm._v("Note")]),_vm._v(" "),_c("th",{staticClass:"col-ponderation"},[_vm._v("Pondération")])])]);},function(){var _vm=this,_c=_vm._self._c;return _c("thead",[_c("tr",[_c("th",[_vm._v("Groupes de variables")]),_vm._v(" "),_c("th",[_vm._v("Score")]),_vm._v(" "),_c("th",[_vm._v("Pondération")])])]);},function(){var _vm=this,_c=_vm._self._c;return _c("label",{attrs:{"for":"date_naissance"}},[_c("b",[_vm._v("Date de naissance")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("label",{attrs:{"for":"matrimoniale"}},[_vm._v("Situation matrimoniale "),_c("span",{staticClass:"text-danger"},[_vm._v("*")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("label",{attrs:{"for":"nbre_enfant"}},[_vm._v("Nombre d'enfants "),_c("span",{staticClass:"text-danger"},[_vm._v("*")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("label",{attrs:{"for":"date_depart_retraite"}},[_c("b",[_vm._v("Date de départ retraite")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("label",{attrs:{"for":"statut_client"}},[_c("b",[_vm._v("Statut professionel")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("label",{attrs:{"for":"type_contrat"}},[_c("b",[_vm._v("Type de contrat")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("label",{attrs:{"for":"date_debut_cdd_interim"}},[_c("b",[_vm._v("Date de début du CDD/INTERIM ")]),_c("span",{staticClass:"text-danger"},[_vm._v("*")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("label",{attrs:{"for":"habitation"}},[_vm._v("Type de logement "),_c("span",{staticClass:"text-danger"},[_vm._v("*")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("label",{attrs:{"for":"date_entree_en_relation"}},[_c("b",[_vm._v("Date d'entrée en relation")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("label",{attrs:{"for":"date_entree_en_relation"}},[_c("b",[_vm._v("Crédits antérieurs dans nos livres")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("label",{staticClass:"form-label"},[_c("b",[_vm._v("Produit d'assurance soucrit ?\n                                                                    ")]),_vm._v(" "),_c("span",{staticStyle:{color:"red"}},[_vm._v("*")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("div",{staticClass:"justify-content-center"},[_c("div",{staticClass:"head-memorandum-title px-3 mb-4",staticStyle:{"text-align":"center"}},[_vm._v("PROFIL PERSONNEL - SITUATION FAMILIALE")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("thead",[_c("tr",[_c("th",{staticClass:"col-question",attrs:{colspan:"3"}},[_vm._v("Question 1")]),_vm._v(" "),_c("th",{staticClass:"col-attribut"},[_vm._v("Attribut")]),_vm._v(" "),_c("th",{staticClass:"col-note"},[_vm._v("Note")]),_vm._v(" "),_c("th",{staticClass:"col-ponderation"},[_vm._v("Pondération")])])]);},function(){var _vm=this,_c=_vm._self._c;return _c("thead",[_c("tr",[_c("th",{staticClass:"col-question",attrs:{colspan:"3"}},[_vm._v("Question 2")]),_vm._v(" "),_c("th",{staticClass:"col-attribut"},[_vm._v("Attribut")]),_vm._v(" "),_c("th",{staticClass:"col-note"},[_vm._v("Note")]),_vm._v(" "),_c("th",{staticClass:"col-ponderation"},[_vm._v("Pondération")])])]);},function(){var _vm=this,_c=_vm._self._c;return _c("thead",[_c("tr",[_c("th",{staticClass:"col-question",attrs:{colspan:"3"}},[_vm._v("Question 3")]),_vm._v(" "),_c("th",{staticClass:"col-attribut"},[_vm._v("Attribut")]),_vm._v(" "),_c("th",{staticClass:"col-note"},[_vm._v("Note")]),_vm._v(" "),_c("th",{staticClass:"col-ponderation"},[_vm._v("Pondération")])])]);},function(){var _vm=this,_c=_vm._self._c;return _c("div",{staticClass:"justify-content-center"},[_c("div",{staticClass:"head-memorandum-title px-3 mb-4",staticStyle:{"text-align":"center"}},[_vm._v("PROFIL PROFESSIONNEL")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("thead",[_c("tr",[_c("th",{staticClass:"col-question"},[_vm._v("Question 1")]),_vm._v(" "),_c("th",{staticClass:"col-attribut"},[_vm._v("Attribut")]),_vm._v(" "),_c("th",{staticClass:"col-note"},[_vm._v("Note")]),_vm._v(" "),_c("th",{staticClass:"col-ponderation"},[_vm._v("Pondération")])])]);},function(){var _vm=this,_c=_vm._self._c;return _c("thead",[_c("tr",[_c("th",{staticClass:"col-question",attrs:{colspan:"3",rowspan:"3"}},[_vm._v("Question 2")]),_vm._v(" "),_c("th",{staticClass:"col-attribut"},[_vm._v("Attribut")]),_vm._v(" "),_c("th",{staticClass:"col-note"},[_vm._v("Note")]),_vm._v(" "),_c("th",{staticClass:"col-ponderation"},[_vm._v("Pondération")])])]);},function(){var _vm=this,_c=_vm._self._c;return _c("div",{staticClass:"justify-content-center"},[_c("div",{staticClass:"head-memorandum-title px-3 mb-4",staticStyle:{"text-align":"center"}},[_vm._v("STABILITE")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("thead",[_c("tr",[_c("th",{staticClass:"col-question",attrs:{colspan:"5",rowspan:"5"}},[_vm._v("Question 1")]),_vm._v(" "),_c("th",{staticClass:"col-attribut"},[_vm._v("Attribut")]),_vm._v(" "),_c("th",{staticClass:"col-note"},[_vm._v("Note")]),_vm._v(" "),_c("th",{staticClass:"col-ponderation"},[_vm._v("Pondération")])])]);},function(){var _vm=this,_c=_vm._self._c;return _c("thead",[_c("tr",[_c("th",{staticClass:"col-question",attrs:{colspan:"4",role:"4"}},[_vm._v("Question 2")]),_vm._v(" "),_c("th",{staticClass:"col-attribut"},[_vm._v("Attribut")]),_vm._v(" "),_c("th",{staticClass:"col-note"},[_vm._v("Note")]),_vm._v(" "),_c("th",{staticClass:"col-ponderation"},[_vm._v("Pondération")])])]);},function(){var _vm=this,_c=_vm._self._c;return _c("div",{staticClass:"justify-content-center"},[_c("div",{staticClass:"head-memorandum-title px-3 mb-4",staticStyle:{"text-align":"center"}},[_vm._v("REPUTATION & RELATION AVEC LA BANQUE")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("thead",[_c("tr",[_c("th",{staticClass:"col-question",attrs:{colspan:"5",rowspan:"5"}},[_vm._v("Question 1")]),_vm._v(" "),_c("th",{staticClass:"col-attribut"},[_vm._v("Attribut")]),_vm._v(" "),_c("th",{staticClass:"col-note"},[_vm._v("Note")]),_vm._v(" "),_c("th",{staticClass:"col-ponderation"},[_vm._v("Pondération")])])]);},function(){var _vm=this,_c=_vm._self._c;return _c("thead",[_c("tr",[_c("th",{staticClass:"col-question",attrs:{colspan:"8",rowspan:"8"}},[_vm._v("Question 2")]),_vm._v(" "),_c("th",{staticClass:"col-attribut"},[_vm._v("Attribut")]),_vm._v(" "),_c("th",{staticClass:"col-note"},[_vm._v("Note")]),_vm._v(" "),_c("th",{staticClass:"col-ponderation"},[_vm._v("Pondération")])])]);},function(){var _vm=this,_c=_vm._self._c;return _c("thead",[_c("tr",[_c("th",{staticClass:"col-question",attrs:{colspan:"4",rowspan:"4"}},[_vm._v("Question 3")]),_vm._v(" "),_c("th",{staticClass:"col-attribut"},[_vm._v("Attribut")]),_vm._v(" "),_c("th",{staticClass:"col-note"},[_vm._v("Note")]),_vm._v(" "),_c("th",{staticClass:"col-ponderation"},[_vm._v("Pondération")])])]);},function(){var _vm=this,_c=_vm._self._c;return _c("thead",[_c("tr",[_c("th",{staticClass:"col-question",attrs:{colspan:"3",rowspan:"3"}},[_vm._v("Question 4")]),_vm._v(" "),_c("th",{staticClass:"col-attribut"},[_vm._v("Attribut")]),_vm._v(" "),_c("th",{staticClass:"col-note"},[_vm._v("Note")]),_vm._v(" "),_c("th",{staticClass:"col-ponderation"},[_vm._v("Pondération")])])]);},function(){var _vm=this,_c=_vm._self._c;return _c("div",{staticClass:"justify-content-center"},[_c("div",{staticClass:"head-memorandum-title px-3 mb-4",staticStyle:{"text-align":"center"}},[_vm._v("NOTE FINALE")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("thead",[_c("tr",[_c("th",[_vm._v("Groupes de variables")]),_vm._v(" "),_c("th",[_vm._v("Score")]),_vm._v(" "),_c("th",[_vm._v("Pondération")])])]);}];render._withStripped=true;

/***/ }),

/***/ "./node_modules/gsap/CSSPlugin.js":
/*!****************************************!*\
  !*** ./node_modules/gsap/CSSPlugin.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSPlugin: () => (/* binding */ CSSPlugin),
/* harmony export */   _createElement: () => (/* binding */ _createElement),
/* harmony export */   _getBBox: () => (/* binding */ _getBBox),
/* harmony export */   checkPrefix: () => (/* binding */ _checkPropPrefix),
/* harmony export */   "default": () => (/* binding */ CSSPlugin)
/* harmony export */ });
/* harmony import */ var _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gsap-core.js */ "./node_modules/gsap/gsap-core.js");
/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */


var _win,
    _doc,
    _docElement,
    _pluginInitted,
    _tempDiv,
    _tempDivStyler,
    _recentSetterPlugin,
    _reverting,
    _windowExists = function _windowExists() {
  return typeof window !== "undefined";
},
    _transformProps = {},
    _RAD2DEG = 180 / Math.PI,
    _DEG2RAD = Math.PI / 180,
    _atan2 = Math.atan2,
    _bigNum = 1e8,
    _capsExp = /([A-Z])/g,
    _horizontalExp = /(left|right|width|margin|padding|x)/i,
    _complexExp = /[\s,\(]\S/,
    _propertyAliases = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
},
    _renderCSSProp = function _renderCSSProp(ratio, data) {
  return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
},
    _renderPropWithEnd = function _renderPropWithEnd(ratio, data) {
  return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
},
    _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning(ratio, data) {
  return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u : data.b, data);
},
    //if units change, we need a way to render the original unit/value when the tween goes all the way back to the beginning (ratio:0)
_renderRoundedCSSProp = function _renderRoundedCSSProp(ratio, data) {
  var value = data.s + data.c * ratio;
  data.set(data.t, data.p, ~~(value + (value < 0 ? -.5 : .5)) + data.u, data);
},
    _renderNonTweeningValue = function _renderNonTweeningValue(ratio, data) {
  return data.set(data.t, data.p, ratio ? data.e : data.b, data);
},
    _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd(ratio, data) {
  return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
},
    _setterCSSStyle = function _setterCSSStyle(target, property, value) {
  return target.style[property] = value;
},
    _setterCSSProp = function _setterCSSProp(target, property, value) {
  return target.style.setProperty(property, value);
},
    _setterTransform = function _setterTransform(target, property, value) {
  return target._gsap[property] = value;
},
    _setterScale = function _setterScale(target, property, value) {
  return target._gsap.scaleX = target._gsap.scaleY = value;
},
    _setterScaleWithRender = function _setterScaleWithRender(target, property, value, data, ratio) {
  var cache = target._gsap;
  cache.scaleX = cache.scaleY = value;
  cache.renderTransform(ratio, cache);
},
    _setterTransformWithRender = function _setterTransformWithRender(target, property, value, data, ratio) {
  var cache = target._gsap;
  cache[property] = value;
  cache.renderTransform(ratio, cache);
},
    _transformProp = "transform",
    _transformOriginProp = _transformProp + "Origin",
    _saveStyle = function _saveStyle(property, isNotCSS) {
  var _this = this;

  var target = this.target,
      style = target.style,
      cache = target._gsap;

  if (property in _transformProps && style) {
    this.tfm = this.tfm || {};

    if (property !== "transform") {
      property = _propertyAliases[property] || property;
      ~property.indexOf(",") ? property.split(",").forEach(function (a) {
        return _this.tfm[a] = _get(target, a);
      }) : this.tfm[property] = cache.x ? cache[property] : _get(target, property); // note: scale would map to "scaleX,scaleY", thus we loop and apply them both.

      property === _transformOriginProp && (this.tfm.zOrigin = cache.zOrigin);
    } else {
      return _propertyAliases.transform.split(",").forEach(function (p) {
        return _saveStyle.call(_this, p, isNotCSS);
      });
    }

    if (this.props.indexOf(_transformProp) >= 0) {
      return;
    }

    if (cache.svg) {
      this.svgo = target.getAttribute("data-svg-origin");
      this.props.push(_transformOriginProp, isNotCSS, "");
    }

    property = _transformProp;
  }

  (style || isNotCSS) && this.props.push(property, isNotCSS, style[property]);
},
    _removeIndependentTransforms = function _removeIndependentTransforms(style) {
  if (style.translate) {
    style.removeProperty("translate");
    style.removeProperty("scale");
    style.removeProperty("rotate");
  }
},
    _revertStyle = function _revertStyle() {
  var props = this.props,
      target = this.target,
      style = target.style,
      cache = target._gsap,
      i,
      p;

  for (i = 0; i < props.length; i += 3) {
    // stored like this: property, isNotCSS, value
    if (!props[i + 1]) {
      props[i + 2] ? style[props[i]] = props[i + 2] : style.removeProperty(props[i].substr(0, 2) === "--" ? props[i] : props[i].replace(_capsExp, "-$1").toLowerCase());
    } else if (props[i + 1] === 2) {
      // non-CSS value (function-based)
      target[props[i]](props[i + 2]);
    } else {
      // non-CSS value (not function-based)
      target[props[i]] = props[i + 2];
    }
  }

  if (this.tfm) {
    for (p in this.tfm) {
      cache[p] = this.tfm[p];
    }

    if (cache.svg) {
      cache.renderTransform();
      target.setAttribute("data-svg-origin", this.svgo || "");
    }

    i = _reverting();

    if ((!i || !i.isStart) && !style[_transformProp]) {
      _removeIndependentTransforms(style);

      if (cache.zOrigin && style[_transformOriginProp]) {
        style[_transformOriginProp] += " " + cache.zOrigin + "px"; // since we're uncaching, we must put the zOrigin back into the transformOrigin so that we can pull it out accurately when we parse again. Otherwise, we'd lose the z portion of the origin since we extract it to protect from Safari bugs.

        cache.zOrigin = 0;
        cache.renderTransform();
      }

      cache.uncache = 1; // if it's a startAt that's being reverted in the _initTween() of the core, we don't need to uncache transforms. This is purely a performance optimization.
    }
  }
},
    _getStyleSaver = function _getStyleSaver(target, properties) {
  var saver = {
    target: target,
    props: [],
    revert: _revertStyle,
    save: _saveStyle
  };
  target._gsap || _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.core.getCache(target); // just make sure there's a _gsap cache defined because we read from it in _saveStyle() and it's more efficient to just check it here once.

  properties && target.style && target.nodeType && properties.split(",").forEach(function (p) {
    return saver.save(p);
  }); // make sure it's a DOM node too.

  return saver;
},
    _supports3D,
    _createElement = function _createElement(type, ns) {
  var e = _doc.createElementNS ? _doc.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc.createElement(type); //some servers swap in https for http in the namespace which can break things, making "style" inaccessible.

  return e && e.style ? e : _doc.createElement(type); //some environments won't allow access to the element's style when created with a namespace in which case we default to the standard createElement() to work around the issue. Also note that when GSAP is embedded directly inside an SVG file, createElement() won't allow access to the style object in Firefox (see https://gsap.com/forums/topic/20215-problem-using-tweenmax-in-standalone-self-containing-svg-file-err-cannot-set-property-csstext-of-undefined/).
},
    _getComputedProperty = function _getComputedProperty(target, property, skipPrefixFallback) {
  var cs = getComputedStyle(target);
  return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty(target, _checkPropPrefix(property) || property, 1) || ""; //css variables may not need caps swapped out for dashes and lowercase.
},
    _prefixes = "O,Moz,ms,Ms,Webkit".split(","),
    _checkPropPrefix = function _checkPropPrefix(property, element, preferPrefix) {
  var e = element || _tempDiv,
      s = e.style,
      i = 5;

  if (property in s && !preferPrefix) {
    return property;
  }

  property = property.charAt(0).toUpperCase() + property.substr(1);

  while (i-- && !(_prefixes[i] + property in s)) {}

  return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
},
    _initCore = function _initCore() {
  if (_windowExists() && window.document) {
    _win = window;
    _doc = _win.document;
    _docElement = _doc.documentElement;
    _tempDiv = _createElement("div") || {
      style: {}
    };
    _tempDivStyler = _createElement("div");
    _transformProp = _checkPropPrefix(_transformProp);
    _transformOriginProp = _transformProp + "Origin";
    _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"; //make sure to override certain properties that may contaminate measurements, in case the user has overreaching style sheets.

    _supports3D = !!_checkPropPrefix("perspective");
    _reverting = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.core.reverting;
    _pluginInitted = 1;
  }
},
    _getReparentedCloneBBox = function _getReparentedCloneBBox(target) {
  //works around issues in some browsers (like Firefox) that don't correctly report getBBox() on SVG elements inside a <defs> element and/or <mask>. We try creating an SVG, adding it to the documentElement and toss the element in there so that it's definitely part of the rendering tree, then grab the bbox and if it works, we actually swap out the original getBBox() method for our own that does these extra steps whenever getBBox is needed. This helps ensure that performance is optimal (only do all these extra steps when absolutely necessary...most elements don't need it).
  var owner = target.ownerSVGElement,
      svg = _createElement("svg", owner && owner.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
      clone = target.cloneNode(true),
      bbox;

  clone.style.display = "block";
  svg.appendChild(clone);

  _docElement.appendChild(svg);

  try {
    bbox = clone.getBBox();
  } catch (e) {}

  svg.removeChild(clone);

  _docElement.removeChild(svg);

  return bbox;
},
    _getAttributeFallbacks = function _getAttributeFallbacks(target, attributesArray) {
  var i = attributesArray.length;

  while (i--) {
    if (target.hasAttribute(attributesArray[i])) {
      return target.getAttribute(attributesArray[i]);
    }
  }
},
    _getBBox = function _getBBox(target) {
  var bounds, cloned;

  try {
    bounds = target.getBBox(); //Firefox throws errors if you try calling getBBox() on an SVG element that's not rendered (like in a <symbol> or <defs>). https://bugzilla.mozilla.org/show_bug.cgi?id=612118
  } catch (error) {
    bounds = _getReparentedCloneBBox(target);
    cloned = 1;
  }

  bounds && (bounds.width || bounds.height) || cloned || (bounds = _getReparentedCloneBBox(target)); //some browsers (like Firefox) misreport the bounds if the element has zero width and height (it just assumes it's at x:0, y:0), thus we need to manually grab the position in that case.

  return bounds && !bounds.width && !bounds.x && !bounds.y ? {
    x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
    y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : bounds;
},
    _isSVG = function _isSVG(e) {
  return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
},
    //reports if the element is an SVG on which getBBox() actually works
_removeProperty = function _removeProperty(target, property) {
  if (property) {
    var style = target.style,
        first2Chars;

    if (property in _transformProps && property !== _transformOriginProp) {
      property = _transformProp;
    }

    if (style.removeProperty) {
      first2Chars = property.substr(0, 2);

      if (first2Chars === "ms" || property.substr(0, 6) === "webkit") {
        //Microsoft and some Webkit browsers don't conform to the standard of capitalizing the first prefix character, so we adjust so that when we prefix the caps with a dash, it's correct (otherwise it'd be "ms-transform" instead of "-ms-transform" for IE9, for example)
        property = "-" + property;
      }

      style.removeProperty(first2Chars === "--" ? property : property.replace(_capsExp, "-$1").toLowerCase());
    } else {
      //note: old versions of IE use "removeAttribute()" instead of "removeProperty()"
      style.removeAttribute(property);
    }
  }
},
    _addNonTweeningPT = function _addNonTweeningPT(plugin, target, property, beginning, end, onlySetAtEnd) {
  var pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
  plugin._pt = pt;
  pt.b = beginning;
  pt.e = end;

  plugin._props.push(property);

  return pt;
},
    _nonConvertibleUnits = {
  deg: 1,
  rad: 1,
  turn: 1
},
    _nonStandardLayouts = {
  grid: 1,
  flex: 1
},
    //takes a single value like 20px and converts it to the unit specified, like "%", returning only the numeric amount.
_convertToUnit = function _convertToUnit(target, property, value, unit) {
  var curValue = parseFloat(value) || 0,
      curUnit = (value + "").trim().substr((curValue + "").length) || "px",
      // some browsers leave extra whitespace at the beginning of CSS variables, hence the need to trim()
  style = _tempDiv.style,
      horizontal = _horizontalExp.test(property),
      isRootSVG = target.tagName.toLowerCase() === "svg",
      measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"),
      amount = 100,
      toPixels = unit === "px",
      toPercent = unit === "%",
      px,
      parent,
      cache,
      isSVG;

  if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
    return curValue;
  }

  curUnit !== "px" && !toPixels && (curValue = _convertToUnit(target, property, value, "px"));
  isSVG = target.getCTM && _isSVG(target);

  if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
    px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
    return (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(toPercent ? curValue / px * amount : curValue / 100 * px);
  }

  style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
  parent = unit !== "rem" && ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;

  if (isSVG) {
    parent = (target.ownerSVGElement || {}).parentNode;
  }

  if (!parent || parent === _doc || !parent.appendChild) {
    parent = _doc.body;
  }

  cache = parent._gsap;

  if (cache && toPercent && cache.width && horizontal && cache.time === _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._ticker.time && !cache.uncache) {
    return (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(curValue / cache.width * amount);
  } else {
    if (toPercent && (property === "height" || property === "width")) {
      // if we're dealing with width/height that's inside a container with padding and/or it's a flexbox/grid container, we must apply it to the target itself rather than the _tempDiv in order to ensure complete accuracy, factoring in the parent's padding.
      var v = target.style[property];
      target.style[property] = amount + unit;
      px = target[measureProperty];
      v ? target.style[property] = v : _removeProperty(target, property);
    } else {
      (toPercent || curUnit === "%") && !_nonStandardLayouts[_getComputedProperty(parent, "display")] && (style.position = _getComputedProperty(target, "position"));
      parent === target && (style.position = "static"); // like for borderRadius, if it's a % we must have it relative to the target itself but that may not have position: relative or position: absolute in which case it'd go up the chain until it finds its offsetParent (bad). position: static protects against that.

      parent.appendChild(_tempDiv);
      px = _tempDiv[measureProperty];
      parent.removeChild(_tempDiv);
      style.position = "absolute";
    }

    if (horizontal && toPercent) {
      cache = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._getCache)(parent);
      cache.time = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._ticker.time;
      cache.width = parent[measureProperty];
    }
  }

  return (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
},
    _get = function _get(target, property, unit, uncache) {
  var value;
  _pluginInitted || _initCore();

  if (property in _propertyAliases && property !== "transform") {
    property = _propertyAliases[property];

    if (~property.indexOf(",")) {
      property = property.split(",")[0];
    }
  }

  if (_transformProps[property] && property !== "transform") {
    value = _parseTransform(target, uncache);
    value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
  } else {
    value = target.style[property];

    if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
      value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._getProperty)(target, property) || (property === "opacity" ? 1 : 0); // note: some browsers, like Firefox, don't report borderRadius correctly! Instead, it only reports every corner like  borderTopLeftRadius
    }
  }

  return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
},
    _tweenComplexCSSString = function _tweenComplexCSSString(target, prop, start, end) {
  // note: we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
  if (!start || start === "none") {
    // some browsers like Safari actually PREFER the prefixed property and mis-report the unprefixed value like clipPath (BUG). In other words, even though clipPath exists in the style ("clipPath" in target.style) and it's set in the CSS properly (along with -webkit-clip-path), Safari reports clipPath as "none" whereas WebkitClipPath reports accurately like "ellipse(100% 0% at 50% 0%)", so in this case we must SWITCH to using the prefixed property instead. See https://gsap.com/forums/topic/18310-clippath-doesnt-work-on-ios/
    var p = _checkPropPrefix(prop, target, 1),
        s = p && _getComputedProperty(target, p, 1);

    if (s && s !== start) {
      prop = p;
      start = s;
    } else if (prop === "borderColor") {
      start = _getComputedProperty(target, "borderTopColor"); // Firefox bug: always reports "borderColor" as "", so we must fall back to borderTopColor. See https://gsap.com/forums/topic/24583-how-to-return-colors-that-i-had-after-reverse/
    }
  }

  var pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(this._pt, target.style, prop, 0, 1, _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._renderComplexString),
      index = 0,
      matchIndex = 0,
      a,
      result,
      startValues,
      startNum,
      color,
      startValue,
      endValue,
      endNum,
      chunk,
      endUnit,
      startUnit,
      endValues;
  pt.b = start;
  pt.e = end;
  start += ""; // ensure values are strings

  end += "";

  if (end === "auto") {
    startValue = target.style[prop];
    target.style[prop] = end;
    end = _getComputedProperty(target, prop) || end;
    startValue ? target.style[prop] = startValue : _removeProperty(target, prop);
  }

  a = [start, end];

  (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._colorStringFilter)(a); // pass an array with the starting and ending values and let the filter do whatever it needs to the values. If colors are found, it returns true and then we must match where the color shows up order-wise because for things like boxShadow, sometimes the browser provides the computed values with the color FIRST, but the user provides it with the color LAST, so flip them if necessary. Same for drop-shadow().


  start = a[0];
  end = a[1];
  startValues = start.match(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numWithUnitExp) || [];
  endValues = end.match(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numWithUnitExp) || [];

  if (endValues.length) {
    while (result = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numWithUnitExp.exec(end)) {
      endValue = result[0];
      chunk = end.substring(index, result.index);

      if (color) {
        color = (color + 1) % 5;
      } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
        color = 1;
      }

      if (endValue !== (startValue = startValues[matchIndex++] || "")) {
        startNum = parseFloat(startValue) || 0;
        startUnit = startValue.substr((startNum + "").length);
        endValue.charAt(1) === "=" && (endValue = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._parseRelative)(startNum, endValue) + startUnit);
        endNum = parseFloat(endValue);
        endUnit = endValue.substr((endNum + "").length);
        index = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numWithUnitExp.lastIndex - endUnit.length;

        if (!endUnit) {
          //if something like "perspective:300" is passed in and we must add a unit to the end
          endUnit = endUnit || _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[prop] || startUnit;

          if (index === end.length) {
            end += endUnit;
            pt.e += endUnit;
          }
        }

        if (startUnit !== endUnit) {
          startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
        } // these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.


        pt._pt = {
          _next: pt._pt,
          p: chunk || matchIndex === 1 ? chunk : ",",
          //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
          s: startNum,
          c: endNum - startNum,
          m: color && color < 4 || prop === "zIndex" ? Math.round : 0
        };
      }
    }

    pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)
  } else {
    pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
  }

  _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._relExp.test(end) && (pt.e = 0); //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).

  this._pt = pt; //start the linked list with this new PropTween. Remember, we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within another plugin too, thus "this" would refer to the plugin.

  return pt;
},
    _keywordToPercent = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
},
    _convertKeywordsToPercentages = function _convertKeywordsToPercentages(value) {
  var split = value.split(" "),
      x = split[0],
      y = split[1] || "50%";

  if (x === "top" || x === "bottom" || y === "left" || y === "right") {
    //the user provided them in the wrong order, so flip them
    value = x;
    x = y;
    y = value;
  }

  split[0] = _keywordToPercent[x] || x;
  split[1] = _keywordToPercent[y] || y;
  return split.join(" ");
},
    _renderClearProps = function _renderClearProps(ratio, data) {
  if (data.tween && data.tween._time === data.tween._dur) {
    var target = data.t,
        style = target.style,
        props = data.u,
        cache = target._gsap,
        prop,
        clearTransforms,
        i;

    if (props === "all" || props === true) {
      style.cssText = "";
      clearTransforms = 1;
    } else {
      props = props.split(",");
      i = props.length;

      while (--i > -1) {
        prop = props[i];

        if (_transformProps[prop]) {
          clearTransforms = 1;
          prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
        }

        _removeProperty(target, prop);
      }
    }

    if (clearTransforms) {
      _removeProperty(target, _transformProp);

      if (cache) {
        cache.svg && target.removeAttribute("transform");
        style.scale = style.rotate = style.translate = "none";

        _parseTransform(target, 1); // force all the cached values back to "normal"/identity, otherwise if there's another tween that's already set to render transforms on this element, it could display the wrong values.


        cache.uncache = 1;

        _removeIndependentTransforms(style);
      }
    }
  }
},
    // note: specialProps should return 1 if (and only if) they have a non-zero priority. It indicates we need to sort the linked list.
_specialProps = {
  clearProps: function clearProps(plugin, target, property, endValue, tween) {
    if (tween.data !== "isFromStart") {
      var pt = plugin._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
      pt.u = endValue;
      pt.pr = -10;
      pt.tween = tween;

      plugin._props.push(property);

      return 1;
    }
  }
  /* className feature (about 0.4kb gzipped).
  , className(plugin, target, property, endValue, tween) {
  	let _renderClassName = (ratio, data) => {
  			data.css.render(ratio, data.css);
  			if (!ratio || ratio === 1) {
  				let inline = data.rmv,
  					target = data.t,
  					p;
  				target.setAttribute("class", ratio ? data.e : data.b);
  				for (p in inline) {
  					_removeProperty(target, p);
  				}
  			}
  		},
  		_getAllStyles = (target) => {
  			let styles = {},
  				computed = getComputedStyle(target),
  				p;
  			for (p in computed) {
  				if (isNaN(p) && p !== "cssText" && p !== "length") {
  					styles[p] = computed[p];
  				}
  			}
  			_setDefaults(styles, _parseTransform(target, 1));
  			return styles;
  		},
  		startClassList = target.getAttribute("class"),
  		style = target.style,
  		cssText = style.cssText,
  		cache = target._gsap,
  		classPT = cache.classPT,
  		inlineToRemoveAtEnd = {},
  		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
  		changingVars = {},
  		startVars = _getAllStyles(target),
  		transformRelated = /(transform|perspective)/i,
  		endVars, p;
  	if (classPT) {
  		classPT.r(1, classPT.d);
  		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
  	}
  	target.setAttribute("class", data.e);
  	endVars = _getAllStyles(target, true);
  	target.setAttribute("class", startClassList);
  	for (p in endVars) {
  		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
  			changingVars[p] = endVars[p];
  			if (!style[p] && style[p] !== "0") {
  				inlineToRemoveAtEnd[p] = 1;
  			}
  		}
  	}
  	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
  	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://gsap.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
  		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
  	}
  	_parseTransform(target, true); //to clear the caching of transforms
  	data.css = new gsap.plugins.css();
  	data.css.init(target, changingVars, tween);
  	plugin._props.push(...data.css._props);
  	return 1;
  }
  */

},

/*
 * --------------------------------------------------------------------------------------
 * TRANSFORMS
 * --------------------------------------------------------------------------------------
 */
_identity2DMatrix = [1, 0, 0, 1, 0, 0],
    _rotationalProperties = {},
    _isNullTransform = function _isNullTransform(value) {
  return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
},
    _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray(target) {
  var matrixString = _getComputedProperty(target, _transformProp);

  return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numExp).map(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round);
},
    _getMatrix = function _getMatrix(target, force2D) {
  var cache = target._gsap || (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._getCache)(target),
      style = target.style,
      matrix = _getComputedTransformMatrixAsArray(target),
      parent,
      nextSibling,
      temp,
      addedToDOM;

  if (cache.svg && target.getAttribute("transform")) {
    temp = target.transform.baseVal.consolidate().matrix; //ensures that even complex values like "translate(50,60) rotate(135,0,0)" are parsed because it mashes it into a matrix.

    matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
    return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
  } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
    //note: if offsetParent is null, that means the element isn't in the normal document flow, like if it has display:none or one of its ancestors has display:none). Firefox returns null for getComputedStyle() if the element is in an iframe that has display:none. https://bugzilla.mozilla.org/show_bug.cgi?id=548397
    //browsers don't report transforms accurately unless the element is in the DOM and has a display value that's not "none". Firefox and Microsoft browsers have a partial bug where they'll report transforms even if display:none BUT not any percentage-based values like translate(-50%, 8px) will be reported as if it's translate(0, 8px).
    temp = style.display;
    style.display = "block";
    parent = target.parentNode;

    if (!parent || !target.offsetParent && !target.getBoundingClientRect().width) {
      // note: in 3.3.0 we switched target.offsetParent to _doc.body.contains(target) to avoid [sometimes unnecessary] MutationObserver calls but that wasn't adequate because there are edge cases where nested position: fixed elements need to get reparented to accurately sense transforms. See https://github.com/greensock/GSAP/issues/388 and https://github.com/greensock/GSAP/issues/375. Note: position: fixed elements report a null offsetParent but they could also be invisible because they're in an ancestor with display: none, so we check getBoundingClientRect(). We only want to alter the DOM if we absolutely have to because it can cause iframe content to reload, like a Vimeo video.
      addedToDOM = 1; //flag

      nextSibling = target.nextElementSibling;

      _docElement.appendChild(target); //we must add it to the DOM in order to get values properly

    }

    matrix = _getComputedTransformMatrixAsArray(target);
    temp ? style.display = temp : _removeProperty(target, "display");

    if (addedToDOM) {
      nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
    }
  }

  return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
},
    _applySVGOrigin = function _applySVGOrigin(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
  var cache = target._gsap,
      matrix = matrixArray || _getMatrix(target, true),
      xOriginOld = cache.xOrigin || 0,
      yOriginOld = cache.yOrigin || 0,
      xOffsetOld = cache.xOffset || 0,
      yOffsetOld = cache.yOffset || 0,
      a = matrix[0],
      b = matrix[1],
      c = matrix[2],
      d = matrix[3],
      tx = matrix[4],
      ty = matrix[5],
      originSplit = origin.split(" "),
      xOrigin = parseFloat(originSplit[0]) || 0,
      yOrigin = parseFloat(originSplit[1]) || 0,
      bounds,
      determinant,
      x,
      y;

  if (!originIsAbsolute) {
    bounds = _getBBox(target);
    xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
    yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin); // if (!("xOrigin" in cache) && (xOrigin || yOrigin)) { // added in 3.12.3, reverted in 3.12.4; requires more exploration
    // 	xOrigin -= bounds.x;
    // 	yOrigin -= bounds.y;
    // }
  } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
    //if it's zero (like if scaleX and scaleY are zero), skip it to avoid errors with dividing by zero.
    x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
    y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
    xOrigin = x;
    yOrigin = y; // theory: we only had to do this for smoothing and it assumes that the previous one was not originIsAbsolute.
  }

  if (smooth || smooth !== false && cache.smooth) {
    tx = xOrigin - xOriginOld;
    ty = yOrigin - yOriginOld;
    cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
    cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
  } else {
    cache.xOffset = cache.yOffset = 0;
  }

  cache.xOrigin = xOrigin;
  cache.yOrigin = yOrigin;
  cache.smooth = !!smooth;
  cache.origin = origin;
  cache.originIsAbsolute = !!originIsAbsolute;
  target.style[_transformOriginProp] = "0px 0px"; //otherwise, if someone sets  an origin via CSS, it will likely interfere with the SVG transform attribute ones (because remember, we're baking the origin into the matrix() value).

  if (pluginToAddPropTweensTo) {
    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);

    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);

    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);

    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
  }

  target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
},
    _parseTransform = function _parseTransform(target, uncache) {
  var cache = target._gsap || new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.GSCache(target);

  if ("x" in cache && !uncache && !cache.uncache) {
    return cache;
  }

  var style = target.style,
      invertedScaleX = cache.scaleX < 0,
      px = "px",
      deg = "deg",
      cs = getComputedStyle(target),
      origin = _getComputedProperty(target, _transformOriginProp) || "0",
      x,
      y,
      z,
      scaleX,
      scaleY,
      rotation,
      rotationX,
      rotationY,
      skewX,
      skewY,
      perspective,
      xOrigin,
      yOrigin,
      matrix,
      angle,
      cos,
      sin,
      a,
      b,
      c,
      d,
      a12,
      a22,
      t1,
      t2,
      t3,
      a13,
      a23,
      a33,
      a42,
      a43,
      a32;
  x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
  scaleX = scaleY = 1;
  cache.svg = !!(target.getCTM && _isSVG(target));

  if (cs.translate) {
    // accommodate independent transforms by combining them into normal ones.
    if (cs.translate !== "none" || cs.scale !== "none" || cs.rotate !== "none") {
      style[_transformProp] = (cs.translate !== "none" ? "translate3d(" + (cs.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (cs.rotate !== "none" ? "rotate(" + cs.rotate + ") " : "") + (cs.scale !== "none" ? "scale(" + cs.scale.split(" ").join(",") + ") " : "") + (cs[_transformProp] !== "none" ? cs[_transformProp] : "");
    }

    style.scale = style.rotate = style.translate = "none";
  }

  matrix = _getMatrix(target, cache.svg);

  if (cache.svg) {
    if (cache.uncache) {
      // if cache.uncache is true (and maybe if origin is 0,0), we need to set element.style.transformOrigin = (cache.xOrigin - bbox.x) + "px " + (cache.yOrigin - bbox.y) + "px". Previously we let the data-svg-origin stay instead, but when introducing revert(), it complicated things.
      t2 = target.getBBox();
      origin = cache.xOrigin - t2.x + "px " + (cache.yOrigin - t2.y) + "px";
      t1 = "";
    } else {
      t1 = !uncache && target.getAttribute("data-svg-origin"); //  Remember, to work around browser inconsistencies we always force SVG elements' transformOrigin to 0,0 and offset the translation accordingly.
    }

    _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
  }

  xOrigin = cache.xOrigin || 0;
  yOrigin = cache.yOrigin || 0;

  if (matrix !== _identity2DMatrix) {
    a = matrix[0]; //a11

    b = matrix[1]; //a21

    c = matrix[2]; //a31

    d = matrix[3]; //a41

    x = a12 = matrix[4];
    y = a22 = matrix[5]; //2D matrix

    if (matrix.length === 6) {
      scaleX = Math.sqrt(a * a + b * b);
      scaleY = Math.sqrt(d * d + c * c);
      rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0; //note: if scaleX is 0, we cannot accurately measure rotation. Same for skewX with a scaleY of 0. Therefore, we default to the previously recorded value (or zero if that doesn't exist).

      skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
      skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));

      if (cache.svg) {
        x -= xOrigin - (xOrigin * a + yOrigin * c);
        y -= yOrigin - (xOrigin * b + yOrigin * d);
      } //3D matrix

    } else {
      a32 = matrix[6];
      a42 = matrix[7];
      a13 = matrix[8];
      a23 = matrix[9];
      a33 = matrix[10];
      a43 = matrix[11];
      x = matrix[12];
      y = matrix[13];
      z = matrix[14];
      angle = _atan2(a32, a33);
      rotationX = angle * _RAD2DEG; //rotationX

      if (angle) {
        cos = Math.cos(-angle);
        sin = Math.sin(-angle);
        t1 = a12 * cos + a13 * sin;
        t2 = a22 * cos + a23 * sin;
        t3 = a32 * cos + a33 * sin;
        a13 = a12 * -sin + a13 * cos;
        a23 = a22 * -sin + a23 * cos;
        a33 = a32 * -sin + a33 * cos;
        a43 = a42 * -sin + a43 * cos;
        a12 = t1;
        a22 = t2;
        a32 = t3;
      } //rotationY


      angle = _atan2(-c, a33);
      rotationY = angle * _RAD2DEG;

      if (angle) {
        cos = Math.cos(-angle);
        sin = Math.sin(-angle);
        t1 = a * cos - a13 * sin;
        t2 = b * cos - a23 * sin;
        t3 = c * cos - a33 * sin;
        a43 = d * sin + a43 * cos;
        a = t1;
        b = t2;
        c = t3;
      } //rotationZ


      angle = _atan2(b, a);
      rotation = angle * _RAD2DEG;

      if (angle) {
        cos = Math.cos(angle);
        sin = Math.sin(angle);
        t1 = a * cos + b * sin;
        t2 = a12 * cos + a22 * sin;
        b = b * cos - a * sin;
        a22 = a22 * cos - a12 * sin;
        a = t1;
        a12 = t2;
      }

      if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
        //when rotationY is set, it will often be parsed as 180 degrees different than it should be, and rotationX and rotation both being 180 (it looks the same), so we adjust for that here.
        rotationX = rotation = 0;
        rotationY = 180 - rotationY;
      }

      scaleX = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(Math.sqrt(a * a + b * b + c * c));
      scaleY = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(Math.sqrt(a22 * a22 + a32 * a32));
      angle = _atan2(a12, a22);
      skewX = Math.abs(angle) > 0.0002 ? angle * _RAD2DEG : 0;
      perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
    }

    if (cache.svg) {
      //sense if there are CSS transforms applied on an SVG element in which case we must overwrite them when rendering. The transform attribute is more reliable cross-browser, but we can't just remove the CSS ones because they may be applied in a CSS rule somewhere (not just inline).
      t1 = target.getAttribute("transform");
      cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
      t1 && target.setAttribute("transform", t1);
    }
  }

  if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
    if (invertedScaleX) {
      scaleX *= -1;
      skewX += rotation <= 0 ? 180 : -180;
      rotation += rotation <= 0 ? 180 : -180;
    } else {
      scaleY *= -1;
      skewX += skewX <= 0 ? 180 : -180;
    }
  }

  uncache = uncache || cache.uncache;
  cache.x = x - ((cache.xPercent = x && (!uncache && cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
  cache.y = y - ((cache.yPercent = y && (!uncache && cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
  cache.z = z + px;
  cache.scaleX = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(scaleX);
  cache.scaleY = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(scaleY);
  cache.rotation = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(rotation) + deg;
  cache.rotationX = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(rotationX) + deg;
  cache.rotationY = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(rotationY) + deg;
  cache.skewX = skewX + deg;
  cache.skewY = skewY + deg;
  cache.transformPerspective = perspective + px;

  if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || !uncache && cache.zOrigin || 0) {
    style[_transformOriginProp] = _firstTwoOnly(origin);
  }

  cache.xOffset = cache.yOffset = 0;
  cache.force3D = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.force3D;
  cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
  cache.uncache = 0;
  return cache;
},
    _firstTwoOnly = function _firstTwoOnly(value) {
  return (value = value.split(" "))[0] + " " + value[1];
},
    //for handling transformOrigin values, stripping out the 3rd dimension
_addPxTranslate = function _addPxTranslate(target, start, value) {
  var unit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(start);
  return (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
},
    _renderNon3DTransforms = function _renderNon3DTransforms(ratio, cache) {
  cache.z = "0px";
  cache.rotationY = cache.rotationX = "0deg";
  cache.force3D = 0;

  _renderCSSTransforms(ratio, cache);
},
    _zeroDeg = "0deg",
    _zeroPx = "0px",
    _endParenthesis = ") ",
    _renderCSSTransforms = function _renderCSSTransforms(ratio, cache) {
  var _ref = cache || this,
      xPercent = _ref.xPercent,
      yPercent = _ref.yPercent,
      x = _ref.x,
      y = _ref.y,
      z = _ref.z,
      rotation = _ref.rotation,
      rotationY = _ref.rotationY,
      rotationX = _ref.rotationX,
      skewX = _ref.skewX,
      skewY = _ref.skewY,
      scaleX = _ref.scaleX,
      scaleY = _ref.scaleY,
      transformPerspective = _ref.transformPerspective,
      force3D = _ref.force3D,
      target = _ref.target,
      zOrigin = _ref.zOrigin,
      transforms = "",
      use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true; // Safari has a bug that causes it not to render 3D transform-origin values properly, so we force the z origin to 0, record it in the cache, and then do the math here to offset the translate values accordingly (basically do the 3D transform-origin part manually)


  if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
    var angle = parseFloat(rotationY) * _DEG2RAD,
        a13 = Math.sin(angle),
        a33 = Math.cos(angle),
        cos;

    angle = parseFloat(rotationX) * _DEG2RAD;
    cos = Math.cos(angle);
    x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
    y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
    z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
  }

  if (transformPerspective !== _zeroPx) {
    transforms += "perspective(" + transformPerspective + _endParenthesis;
  }

  if (xPercent || yPercent) {
    transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
  }

  if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
    transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
  }

  if (rotation !== _zeroDeg) {
    transforms += "rotate(" + rotation + _endParenthesis;
  }

  if (rotationY !== _zeroDeg) {
    transforms += "rotateY(" + rotationY + _endParenthesis;
  }

  if (rotationX !== _zeroDeg) {
    transforms += "rotateX(" + rotationX + _endParenthesis;
  }

  if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
    transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
  }

  if (scaleX !== 1 || scaleY !== 1) {
    transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
  }

  target.style[_transformProp] = transforms || "translate(0, 0)";
},
    _renderSVGTransforms = function _renderSVGTransforms(ratio, cache) {
  var _ref2 = cache || this,
      xPercent = _ref2.xPercent,
      yPercent = _ref2.yPercent,
      x = _ref2.x,
      y = _ref2.y,
      rotation = _ref2.rotation,
      skewX = _ref2.skewX,
      skewY = _ref2.skewY,
      scaleX = _ref2.scaleX,
      scaleY = _ref2.scaleY,
      target = _ref2.target,
      xOrigin = _ref2.xOrigin,
      yOrigin = _ref2.yOrigin,
      xOffset = _ref2.xOffset,
      yOffset = _ref2.yOffset,
      forceCSS = _ref2.forceCSS,
      tx = parseFloat(x),
      ty = parseFloat(y),
      a11,
      a21,
      a12,
      a22,
      temp;

  rotation = parseFloat(rotation);
  skewX = parseFloat(skewX);
  skewY = parseFloat(skewY);

  if (skewY) {
    //for performance reasons, we combine all skewing into the skewX and rotation values. Remember, a skewY of 10 degrees looks the same as a rotation of 10 degrees plus a skewX of 10 degrees.
    skewY = parseFloat(skewY);
    skewX += skewY;
    rotation += skewY;
  }

  if (rotation || skewX) {
    rotation *= _DEG2RAD;
    skewX *= _DEG2RAD;
    a11 = Math.cos(rotation) * scaleX;
    a21 = Math.sin(rotation) * scaleX;
    a12 = Math.sin(rotation - skewX) * -scaleY;
    a22 = Math.cos(rotation - skewX) * scaleY;

    if (skewX) {
      skewY *= _DEG2RAD;
      temp = Math.tan(skewX - skewY);
      temp = Math.sqrt(1 + temp * temp);
      a12 *= temp;
      a22 *= temp;

      if (skewY) {
        temp = Math.tan(skewY);
        temp = Math.sqrt(1 + temp * temp);
        a11 *= temp;
        a21 *= temp;
      }
    }

    a11 = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(a11);
    a21 = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(a21);
    a12 = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(a12);
    a22 = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(a22);
  } else {
    a11 = scaleX;
    a22 = scaleY;
    a21 = a12 = 0;
  }

  if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
    tx = _convertToUnit(target, "x", x, "px");
    ty = _convertToUnit(target, "y", y, "px");
  }

  if (xOrigin || yOrigin || xOffset || yOffset) {
    tx = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
    ty = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
  }

  if (xPercent || yPercent) {
    //The SVG spec doesn't support percentage-based translation in the "transform" attribute, so we merge it into the translation to simulate it.
    temp = target.getBBox();
    tx = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(tx + xPercent / 100 * temp.width);
    ty = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(ty + yPercent / 100 * temp.height);
  }

  temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
  target.setAttribute("transform", temp);
  forceCSS && (target.style[_transformProp] = temp); //some browsers prioritize CSS transforms over the transform attribute. When we sense that the user has CSS transforms applied, we must overwrite them this way (otherwise some browser simply won't render the transform attribute changes!)
},
    _addRotationalPropTween = function _addRotationalPropTween(plugin, target, property, startNum, endValue) {
  var cap = 360,
      isString = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._isString)(endValue),
      endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1),
      change = endNum - startNum,
      finalValue = startNum + change + "deg",
      direction,
      pt;

  if (isString) {
    direction = endValue.split("_")[1];

    if (direction === "short") {
      change %= cap;

      if (change !== change % (cap / 2)) {
        change += change < 0 ? cap : -cap;
      }
    }

    if (direction === "cw" && change < 0) {
      change = (change + cap * _bigNum) % cap - ~~(change / cap) * cap;
    } else if (direction === "ccw" && change > 0) {
      change = (change - cap * _bigNum) % cap - ~~(change / cap) * cap;
    }
  }

  plugin._pt = pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
  pt.e = finalValue;
  pt.u = "deg";

  plugin._props.push(property);

  return pt;
},
    _assign = function _assign(target, source) {
  // Internet Explorer doesn't have Object.assign(), so we recreate it here.
  for (var p in source) {
    target[p] = source[p];
  }

  return target;
},
    _addRawTransformPTs = function _addRawTransformPTs(plugin, transforms, target) {
  //for handling cases where someone passes in a whole transform string, like transform: "scale(2, 3) rotate(20deg) translateY(30em)"
  var startCache = _assign({}, target._gsap),
      exclude = "perspective,force3D,transformOrigin,svgOrigin",
      style = target.style,
      endCache,
      p,
      startValue,
      endValue,
      startNum,
      endNum,
      startUnit,
      endUnit;

  if (startCache.svg) {
    startValue = target.getAttribute("transform");
    target.setAttribute("transform", "");
    style[_transformProp] = transforms;
    endCache = _parseTransform(target, 1);

    _removeProperty(target, _transformProp);

    target.setAttribute("transform", startValue);
  } else {
    startValue = getComputedStyle(target)[_transformProp];
    style[_transformProp] = transforms;
    endCache = _parseTransform(target, 1);
    style[_transformProp] = startValue;
  }

  for (p in _transformProps) {
    startValue = startCache[p];
    endValue = endCache[p];

    if (startValue !== endValue && exclude.indexOf(p) < 0) {
      //tweening to no perspective gives very unintuitive results - just keep the same perspective in that case.
      startUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(startValue);
      endUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(endValue);
      startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
      endNum = parseFloat(endValue);
      plugin._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
      plugin._pt.u = endUnit || 0;

      plugin._props.push(p);
    }
  }

  _assign(endCache, startCache);
}; // handle splitting apart padding, margin, borderWidth, and borderRadius into their 4 components. Firefox, for example, won't report borderRadius correctly - it will only do borderTopLeftRadius and the other corners. We also want to handle paddingTop, marginLeft, borderRightWidth, etc.


(0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)("padding,margin,Width,Radius", function (name, index) {
  var t = "Top",
      r = "Right",
      b = "Bottom",
      l = "Left",
      props = (index < 3 ? [t, r, b, l] : [t + l, t + r, b + r, b + l]).map(function (side) {
    return index < 2 ? name + side : "border" + side + name;
  });

  _specialProps[index > 1 ? "border" + name : name] = function (plugin, target, property, endValue, tween) {
    var a, vars;

    if (arguments.length < 4) {
      // getter, passed target, property, and unit (from _get())
      a = props.map(function (prop) {
        return _get(plugin, prop, property);
      });
      vars = a.join(" ");
      return vars.split(a[0]).length === 5 ? a[0] : vars;
    }

    a = (endValue + "").split(" ");
    vars = {};
    props.forEach(function (prop, i) {
      return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
    });
    plugin.init(target, vars, tween);
  };
});

var CSSPlugin = {
  name: "css",
  register: _initCore,
  targetTest: function targetTest(target) {
    return target.style && target.nodeType;
  },
  init: function init(target, vars, tween, index, targets) {
    var props = this._props,
        style = target.style,
        startAt = tween.vars.startAt,
        startValue,
        endValue,
        endNum,
        startNum,
        type,
        specialProp,
        p,
        startUnit,
        endUnit,
        relative,
        isTransformRelated,
        transformPropTween,
        cache,
        smooth,
        hasPriority,
        inlineProps;
    _pluginInitted || _initCore(); // we may call init() multiple times on the same plugin instance, like when adding special properties, so make sure we don't overwrite the revert data or inlineProps

    this.styles = this.styles || _getStyleSaver(target);
    inlineProps = this.styles.props;
    this.tween = tween;

    for (p in vars) {
      if (p === "autoRound") {
        continue;
      }

      endValue = vars[p];

      if (_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._plugins[p] && (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._checkPlugin)(p, vars, tween, index, target, targets)) {
        // plugins
        continue;
      }

      type = typeof endValue;
      specialProp = _specialProps[p];

      if (type === "function") {
        endValue = endValue.call(tween, index, target, targets);
        type = typeof endValue;
      }

      if (type === "string" && ~endValue.indexOf("random(")) {
        endValue = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._replaceRandom)(endValue);
      }

      if (specialProp) {
        specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
      } else if (p.substr(0, 2) === "--") {
        //CSS variable
        startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
        endValue += "";
        _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._colorExp.lastIndex = 0;

        if (!_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._colorExp.test(startValue)) {
          // colors don't have units
          startUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(startValue);
          endUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(endValue);
        }

        endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
        this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
        props.push(p);
        inlineProps.push(p, 0, style[p]);
      } else if (type !== "undefined") {
        if (startAt && p in startAt) {
          // in case someone hard-codes a complex value as the start, like top: "calc(2vh / 2)". Without this, it'd use the computed value (always in px)
          startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
          (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._isString)(startValue) && ~startValue.indexOf("random(") && (startValue = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._replaceRandom)(startValue));
          (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(startValue + "") || startValue === "auto" || (startValue += _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[p] || (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(_get(target, p)) || ""); // for cases when someone passes in a unitless value like {x: 100}; if we try setting translate(100, 0px) it won't work.

          (startValue + "").charAt(1) === "=" && (startValue = _get(target, p)); // can't work with relative values
        } else {
          startValue = _get(target, p);
        }

        startNum = parseFloat(startValue);
        relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2);
        relative && (endValue = endValue.substr(2));
        endNum = parseFloat(endValue);

        if (p in _propertyAliases) {
          if (p === "autoAlpha") {
            //special case where we control the visibility along with opacity. We still allow the opacity value to pass through and get tweened.
            if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
              //if visibility is initially set to "hidden", we should interpret that as intent to make opacity 0 (a convenience)
              startNum = 0;
            }

            inlineProps.push("visibility", 0, style.visibility);

            _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
          }

          if (p !== "scale" && p !== "transform") {
            p = _propertyAliases[p];
            ~p.indexOf(",") && (p = p.split(",")[0]);
          }
        }

        isTransformRelated = p in _transformProps; //--- TRANSFORM-RELATED ---

        if (isTransformRelated) {
          this.styles.save(p);

          if (!transformPropTween) {
            cache = target._gsap;
            cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform); // if, for example, gsap.set(... {transform:"translateX(50vw)"}), the _get() call doesn't parse the transform, thus cache.renderTransform won't be set yet so force the parsing of the transform here.

            smooth = vars.smoothOrigin !== false && cache.smooth;
            transformPropTween = this._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1); //the first time through, create the rendering PropTween so that it runs LAST (in the linked list, we keep adding to the beginning)

            transformPropTween.dep = 1; //flag it as dependent so that if things get killed/overwritten and this is the only PropTween left, we can safely kill the whole tween.
          }

          if (p === "scale") {
            this._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(this._pt, cache, "scaleY", cache.scaleY, (relative ? (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._parseRelative)(cache.scaleY, relative + endNum) : endNum) - cache.scaleY || 0, _renderCSSProp);
            this._pt.u = 0;
            props.push("scaleY", p);
            p += "X";
          } else if (p === "transformOrigin") {
            inlineProps.push(_transformOriginProp, 0, style[_transformOriginProp]);
            endValue = _convertKeywordsToPercentages(endValue); //in case something like "left top" or "bottom right" is passed in. Convert to percentages.

            if (cache.svg) {
              _applySVGOrigin(target, endValue, 0, smooth, 0, this);
            } else {
              endUnit = parseFloat(endValue.split(" ")[2]) || 0; //handle the zOrigin separately!

              endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);

              _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
            }

            continue;
          } else if (p === "svgOrigin") {
            _applySVGOrigin(target, endValue, 1, smooth, 0, this);

            continue;
          } else if (p in _rotationalProperties) {
            _addRotationalPropTween(this, cache, p, startNum, relative ? (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._parseRelative)(startNum, relative + endValue) : endValue);

            continue;
          } else if (p === "smoothOrigin") {
            _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);

            continue;
          } else if (p === "force3D") {
            cache[p] = endValue;
            continue;
          } else if (p === "transform") {
            _addRawTransformPTs(this, endValue, target);

            continue;
          }
        } else if (!(p in style)) {
          p = _checkPropPrefix(p) || p;
        }

        if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
          startUnit = (startValue + "").substr((startNum + "").length);
          endNum || (endNum = 0); // protect against NaN

          endUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(endValue) || (p in _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units ? _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[p] : startUnit);
          startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
          this._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, (relative ? (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._parseRelative)(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
          this._pt.u = endUnit || 0;

          if (startUnit !== endUnit && endUnit !== "%") {
            //when the tween goes all the way back to the beginning, we need to revert it to the OLD/ORIGINAL value (with those units). We record that as a "b" (beginning) property and point to a render method that handles that. (performance optimization)
            this._pt.b = startValue;
            this._pt.r = _renderCSSPropWithBeginning;
          }
        } else if (!(p in style)) {
          if (p in target) {
            //maybe it's not a style - it could be a property added directly to an element in which case we'll try to animate that.
            this.add(target, p, startValue || target[p], relative ? relative + endValue : endValue, index, targets);
          } else if (p !== "parseTransform") {
            (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._missingPlugin)(p, endValue);

            continue;
          }
        } else {
          _tweenComplexCSSString.call(this, target, p, startValue, relative ? relative + endValue : endValue);
        }

        isTransformRelated || (p in style ? inlineProps.push(p, 0, style[p]) : typeof target[p] === "function" ? inlineProps.push(p, 2, target[p]()) : inlineProps.push(p, 1, startValue || target[p]));
        props.push(p);
      }
    }

    hasPriority && (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._sortPropTweensByPriority)(this);
  },
  render: function render(ratio, data) {
    if (data.tween._time || !_reverting()) {
      var pt = data._pt;

      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }
    } else {
      data.styles.revert();
    }
  },
  get: _get,
  aliases: _propertyAliases,
  getSetter: function getSetter(target, property, plugin) {
    //returns a setter function that accepts target, property, value and applies it accordingly. Remember, properties like "x" aren't as simple as target.style.property = value because they've got to be applied to a proxy object and then merged into a transform string in a renderer.
    var p = _propertyAliases[property];
    p && p.indexOf(",") < 0 && (property = p);
    return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !(0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._isUndefined)(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._getSetter)(target, property);
  },
  core: {
    _removeProperty: _removeProperty,
    _getMatrix: _getMatrix
  }
};
_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.utils.checkPrefix = _checkPropPrefix;
_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.core.getStyleSaver = _getStyleSaver;

(function (positionAndScale, rotation, others, aliases) {
  var all = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)(positionAndScale + "," + rotation + "," + others, function (name) {
    _transformProps[name] = 1;
  });

  (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)(rotation, function (name) {
    _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[name] = "deg";
    _rotationalProperties[name] = 1;
  });

  _propertyAliases[all[13]] = positionAndScale + "," + rotation;

  (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)(aliases, function (name) {
    var split = name.split(":");
    _propertyAliases[split[1]] = all[split[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");

(0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (name) {
  _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[name] = "px";
});

_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(CSSPlugin);


/***/ }),

/***/ "./node_modules/gsap/gsap-core.js":
/*!****************************************!*\
  !*** ./node_modules/gsap/gsap-core.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Animation: () => (/* binding */ Animation),
/* harmony export */   Back: () => (/* binding */ Back),
/* harmony export */   Bounce: () => (/* binding */ Bounce),
/* harmony export */   Circ: () => (/* binding */ Circ),
/* harmony export */   Cubic: () => (/* binding */ Cubic),
/* harmony export */   Elastic: () => (/* binding */ Elastic),
/* harmony export */   Expo: () => (/* binding */ Expo),
/* harmony export */   GSCache: () => (/* binding */ GSCache),
/* harmony export */   Linear: () => (/* binding */ Linear),
/* harmony export */   Power0: () => (/* binding */ Power0),
/* harmony export */   Power1: () => (/* binding */ Power1),
/* harmony export */   Power2: () => (/* binding */ Power2),
/* harmony export */   Power3: () => (/* binding */ Power3),
/* harmony export */   Power4: () => (/* binding */ Power4),
/* harmony export */   PropTween: () => (/* binding */ PropTween),
/* harmony export */   Quad: () => (/* binding */ Quad),
/* harmony export */   Quart: () => (/* binding */ Quart),
/* harmony export */   Quint: () => (/* binding */ Quint),
/* harmony export */   Sine: () => (/* binding */ Sine),
/* harmony export */   SteppedEase: () => (/* binding */ SteppedEase),
/* harmony export */   Strong: () => (/* binding */ Strong),
/* harmony export */   Timeline: () => (/* binding */ Timeline),
/* harmony export */   TimelineLite: () => (/* binding */ Timeline),
/* harmony export */   TimelineMax: () => (/* binding */ Timeline),
/* harmony export */   Tween: () => (/* binding */ Tween),
/* harmony export */   TweenLite: () => (/* binding */ Tween),
/* harmony export */   TweenMax: () => (/* binding */ Tween),
/* harmony export */   _checkPlugin: () => (/* binding */ _checkPlugin),
/* harmony export */   _colorExp: () => (/* binding */ _colorExp),
/* harmony export */   _colorStringFilter: () => (/* binding */ _colorStringFilter),
/* harmony export */   _config: () => (/* binding */ _config),
/* harmony export */   _forEachName: () => (/* binding */ _forEachName),
/* harmony export */   _getCache: () => (/* binding */ _getCache),
/* harmony export */   _getProperty: () => (/* binding */ _getProperty),
/* harmony export */   _getSetter: () => (/* binding */ _getSetter),
/* harmony export */   _isString: () => (/* binding */ _isString),
/* harmony export */   _isUndefined: () => (/* binding */ _isUndefined),
/* harmony export */   _missingPlugin: () => (/* binding */ _missingPlugin),
/* harmony export */   _numExp: () => (/* binding */ _numExp),
/* harmony export */   _numWithUnitExp: () => (/* binding */ _numWithUnitExp),
/* harmony export */   _parseRelative: () => (/* binding */ _parseRelative),
/* harmony export */   _plugins: () => (/* binding */ _plugins),
/* harmony export */   _relExp: () => (/* binding */ _relExp),
/* harmony export */   _removeLinkedListItem: () => (/* binding */ _removeLinkedListItem),
/* harmony export */   _renderComplexString: () => (/* binding */ _renderComplexString),
/* harmony export */   _replaceRandom: () => (/* binding */ _replaceRandom),
/* harmony export */   _round: () => (/* binding */ _round),
/* harmony export */   _roundModifier: () => (/* binding */ _roundModifier),
/* harmony export */   _setDefaults: () => (/* binding */ _setDefaults),
/* harmony export */   _sortPropTweensByPriority: () => (/* binding */ _sortPropTweensByPriority),
/* harmony export */   _ticker: () => (/* binding */ _ticker),
/* harmony export */   clamp: () => (/* binding */ clamp),
/* harmony export */   "default": () => (/* binding */ gsap),
/* harmony export */   distribute: () => (/* binding */ distribute),
/* harmony export */   getUnit: () => (/* binding */ getUnit),
/* harmony export */   gsap: () => (/* binding */ gsap),
/* harmony export */   interpolate: () => (/* binding */ interpolate),
/* harmony export */   mapRange: () => (/* binding */ mapRange),
/* harmony export */   normalize: () => (/* binding */ normalize),
/* harmony export */   pipe: () => (/* binding */ pipe),
/* harmony export */   random: () => (/* binding */ random),
/* harmony export */   selector: () => (/* binding */ selector),
/* harmony export */   shuffle: () => (/* binding */ shuffle),
/* harmony export */   snap: () => (/* binding */ snap),
/* harmony export */   splitColor: () => (/* binding */ splitColor),
/* harmony export */   toArray: () => (/* binding */ toArray),
/* harmony export */   unitize: () => (/* binding */ unitize),
/* harmony export */   wrap: () => (/* binding */ wrap),
/* harmony export */   wrapYoyo: () => (/* binding */ wrapYoyo)
/* harmony export */ });
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */
var _config = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
},
    _defaults = {
  duration: .5,
  overwrite: false,
  delay: 0
},
    _suppressOverwrites,
    _reverting,
    _context,
    _bigNum = 1e8,
    _tinyNum = 1 / _bigNum,
    _2PI = Math.PI * 2,
    _HALF_PI = _2PI / 4,
    _gsID = 0,
    _sqrt = Math.sqrt,
    _cos = Math.cos,
    _sin = Math.sin,
    _isString = function _isString(value) {
  return typeof value === "string";
},
    _isFunction = function _isFunction(value) {
  return typeof value === "function";
},
    _isNumber = function _isNumber(value) {
  return typeof value === "number";
},
    _isUndefined = function _isUndefined(value) {
  return typeof value === "undefined";
},
    _isObject = function _isObject(value) {
  return typeof value === "object";
},
    _isNotFalse = function _isNotFalse(value) {
  return value !== false;
},
    _windowExists = function _windowExists() {
  return typeof window !== "undefined";
},
    _isFuncOrString = function _isFuncOrString(value) {
  return _isFunction(value) || _isString(value);
},
    _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function () {},
    // note: IE10 has ArrayBuffer, but NOT ArrayBuffer.isView().
_isArray = Array.isArray,
    _strictNumExp = /(?:-?\.?\d|\.)+/gi,
    //only numbers (including negatives and decimals) but NOT relative values.
_numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    //finds any numbers, including ones that start with += or -=, negative numbers, and ones in scientific notation like 1e-8.
_numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    //duplicate so that while we're looping through matches from exec(), it doesn't contaminate the lastIndex of _numExp which we use to search for colors too.
_relExp = /[+-]=-?[.\d]+/,
    _delimitedValueExp = /[^,'"\[\]\s]+/gi,
    // previously /[#\-+.]*\b[a-z\d\-=+%.]+/gi but didn't catch special characters.
_unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    _globalTimeline,
    _win,
    _coreInitted,
    _doc,
    _globals = {},
    _installScope = {},
    _coreReady,
    _install = function _install(scope) {
  return (_installScope = _merge(scope, _globals)) && gsap;
},
    _missingPlugin = function _missingPlugin(property, value) {
  return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
},
    _warn = function _warn(message, suppress) {
  return !suppress && console.warn(message);
},
    _addGlobal = function _addGlobal(name, obj) {
  return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
},
    _emptyFunc = function _emptyFunc() {
  return 0;
},
    _startAtRevertConfig = {
  suppressEvents: true,
  isStart: true,
  kill: false
},
    _revertConfigNoKill = {
  suppressEvents: true,
  kill: false
},
    _revertConfig = {
  suppressEvents: true
},
    _reservedProps = {},
    _lazyTweens = [],
    _lazyLookup = {},
    _lastRenderedFrame,
    _plugins = {},
    _effects = {},
    _nextGCFrame = 30,
    _harnessPlugins = [],
    _callbackNames = "",
    _harness = function _harness(targets) {
  var target = targets[0],
      harnessPlugin,
      i;
  _isObject(target) || _isFunction(target) || (targets = [targets]);

  if (!(harnessPlugin = (target._gsap || {}).harness)) {
    // find the first target with a harness. We assume targets passed into an animation will be of similar type, meaning the same kind of harness can be used for them all (performance optimization)
    i = _harnessPlugins.length;

    while (i-- && !_harnessPlugins[i].targetTest(target)) {}

    harnessPlugin = _harnessPlugins[i];
  }

  i = targets.length;

  while (i--) {
    targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
  }

  return targets;
},
    _getCache = function _getCache(target) {
  return target._gsap || _harness(toArray(target))[0]._gsap;
},
    _getProperty = function _getProperty(target, property, v) {
  return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
},
    _forEachName = function _forEachName(names, func) {
  return (names = names.split(",")).forEach(func) || names;
},
    //split a comma-delimited list of names into an array, then run a forEach() function and return the split array (this is just a way to consolidate/shorten some code).
_round = function _round(value) {
  return Math.round(value * 100000) / 100000 || 0;
},
    _roundPrecise = function _roundPrecise(value) {
  return Math.round(value * 10000000) / 10000000 || 0;
},
    // increased precision mostly for timing values.
_parseRelative = function _parseRelative(start, value) {
  var operator = value.charAt(0),
      end = parseFloat(value.substr(2));
  start = parseFloat(start);
  return operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
},
    _arrayContainsAny = function _arrayContainsAny(toSearch, toFind) {
  //searches one array to find matches for any of the items in the toFind array. As soon as one is found, it returns true. It does NOT return all the matches; it's simply a boolean search.
  var l = toFind.length,
      i = 0;

  for (; toSearch.indexOf(toFind[i]) < 0 && ++i < l;) {}

  return i < l;
},
    _lazyRender = function _lazyRender() {
  var l = _lazyTweens.length,
      a = _lazyTweens.slice(0),
      i,
      tween;

  _lazyLookup = {};
  _lazyTweens.length = 0;

  for (i = 0; i < l; i++) {
    tween = a[i];
    tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
  }
},
    _lazySafeRender = function _lazySafeRender(animation, time, suppressEvents, force) {
  _lazyTweens.length && !_reverting && _lazyRender();
  animation.render(time, suppressEvents, force || _reverting && time < 0 && (animation._initted || animation._startAt));
  _lazyTweens.length && !_reverting && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when someone calls seek() or time() or progress(), they expect an immediate render.
},
    _numericIfPossible = function _numericIfPossible(value) {
  var n = parseFloat(value);
  return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
},
    _passThrough = function _passThrough(p) {
  return p;
},
    _setDefaults = function _setDefaults(obj, defaults) {
  for (var p in defaults) {
    p in obj || (obj[p] = defaults[p]);
  }

  return obj;
},
    _setKeyframeDefaults = function _setKeyframeDefaults(excludeDuration) {
  return function (obj, defaults) {
    for (var p in defaults) {
      p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults[p]);
    }
  };
},
    _merge = function _merge(base, toMerge) {
  for (var p in toMerge) {
    base[p] = toMerge[p];
  }

  return base;
},
    _mergeDeep = function _mergeDeep(base, toMerge) {
  for (var p in toMerge) {
    p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
  }

  return base;
},
    _copyExcluding = function _copyExcluding(obj, excluding) {
  var copy = {},
      p;

  for (p in obj) {
    p in excluding || (copy[p] = obj[p]);
  }

  return copy;
},
    _inheritDefaults = function _inheritDefaults(vars) {
  var parent = vars.parent || _globalTimeline,
      func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults;

  if (_isNotFalse(vars.inherit)) {
    while (parent) {
      func(vars, parent.vars.defaults);
      parent = parent.parent || parent._dp;
    }
  }

  return vars;
},
    _arraysMatch = function _arraysMatch(a1, a2) {
  var i = a1.length,
      match = i === a2.length;

  while (match && i-- && a1[i] === a2[i]) {}

  return i < 0;
},
    _addLinkedListItem = function _addLinkedListItem(parent, child, firstProp, lastProp, sortBy) {
  if (firstProp === void 0) {
    firstProp = "_first";
  }

  if (lastProp === void 0) {
    lastProp = "_last";
  }

  var prev = parent[lastProp],
      t;

  if (sortBy) {
    t = child[sortBy];

    while (prev && prev[sortBy] > t) {
      prev = prev._prev;
    }
  }

  if (prev) {
    child._next = prev._next;
    prev._next = child;
  } else {
    child._next = parent[firstProp];
    parent[firstProp] = child;
  }

  if (child._next) {
    child._next._prev = child;
  } else {
    parent[lastProp] = child;
  }

  child._prev = prev;
  child.parent = child._dp = parent;
  return child;
},
    _removeLinkedListItem = function _removeLinkedListItem(parent, child, firstProp, lastProp) {
  if (firstProp === void 0) {
    firstProp = "_first";
  }

  if (lastProp === void 0) {
    lastProp = "_last";
  }

  var prev = child._prev,
      next = child._next;

  if (prev) {
    prev._next = next;
  } else if (parent[firstProp] === child) {
    parent[firstProp] = next;
  }

  if (next) {
    next._prev = prev;
  } else if (parent[lastProp] === child) {
    parent[lastProp] = prev;
  }

  child._next = child._prev = child.parent = null; // don't delete the _dp just so we can revert if necessary. But parent should be null to indicate the item isn't in a linked list.
},
    _removeFromParent = function _removeFromParent(child, onlyIfParentHasAutoRemove) {
  child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove && child.parent.remove(child);
  child._act = 0;
},
    _uncache = function _uncache(animation, child) {
  if (animation && (!child || child._end > animation._dur || child._start < 0)) {
    // performance optimization: if a child animation is passed in we should only uncache if that child EXTENDS the animation (its end time is beyond the end)
    var a = animation;

    while (a) {
      a._dirty = 1;
      a = a.parent;
    }
  }

  return animation;
},
    _recacheAncestors = function _recacheAncestors(animation) {
  var parent = animation.parent;

  while (parent && parent.parent) {
    //sometimes we must force a re-sort of all children and update the duration/totalDuration of all ancestor timelines immediately in case, for example, in the middle of a render loop, one tween alters another tween's timeScale which shoves its startTime before 0, forcing the parent timeline to shift around and shiftChildren() which could affect that next tween's render (startTime). Doesn't matter for the root timeline though.
    parent._dirty = 1;
    parent.totalDuration();
    parent = parent.parent;
  }

  return animation;
},
    _rewindStartAt = function _rewindStartAt(tween, totalTime, suppressEvents, force) {
  return tween._startAt && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween.vars.immediateRender && !tween.vars.autoRevert || tween._startAt.render(totalTime, true, force));
},
    _hasNoPausedAncestors = function _hasNoPausedAncestors(animation) {
  return !animation || animation._ts && _hasNoPausedAncestors(animation.parent);
},
    _elapsedCycleDuration = function _elapsedCycleDuration(animation) {
  return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
},
    // feed in the totalTime and cycleDuration and it'll return the cycle (iteration minus 1) and if the playhead is exactly at the very END, it will NOT bump up to the next cycle.
_animationCycle = function _animationCycle(tTime, cycleDuration) {
  var whole = Math.floor(tTime = _roundPrecise(tTime / cycleDuration));
  return tTime && whole === tTime ? whole - 1 : whole;
},
    _parentToChildTotalTime = function _parentToChildTotalTime(parentTime, child) {
  return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
},
    _setEnd = function _setEnd(animation) {
  return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
},
    _alignPlayhead = function _alignPlayhead(animation, totalTime) {
  // adjusts the animation's _start and _end according to the provided totalTime (only if the parent's smoothChildTiming is true and the animation isn't paused). It doesn't do any rendering or forcing things back into parent timelines, etc. - that's what totalTime() is for.
  var parent = animation._dp;

  if (parent && parent.smoothChildTiming && animation._ts) {
    animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));

    _setEnd(animation);

    parent._dirty || _uncache(parent, animation); //for performance improvement. If the parent's cache is already dirty, it already took care of marking the ancestors as dirty too, so skip the function call here.
  }

  return animation;
},

/*
_totalTimeToTime = (clampedTotalTime, duration, repeat, repeatDelay, yoyo) => {
	let cycleDuration = duration + repeatDelay,
		time = _round(clampedTotalTime % cycleDuration);
	if (time > duration) {
		time = duration;
	}
	return (yoyo && (~~(clampedTotalTime / cycleDuration) & 1)) ? duration - time : time;
},
*/
_postAddChecks = function _postAddChecks(timeline, child) {
  var t;

  if (child._time || !child._dur && child._initted || child._start < timeline._time && (child._dur || !child.add)) {
    // in case, for example, the _start is moved on a tween that has already rendered, or if it's being inserted into a timeline BEFORE where the playhead is currently. Imagine it's at its end state, then the startTime is moved WAY later (after the end of this timeline), it should render at its beginning. Special case: if it's a timeline (has .add() method) and no duration, we can skip rendering because the user may be populating it AFTER adding it to a parent timeline (unconventional, but possible, and we wouldn't want it to get removed if the parent's autoRemoveChildren is true).
    t = _parentToChildTotalTime(timeline.rawTime(), child);

    if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) {
      child.render(t, true);
    }
  } //if the timeline has already ended but the inserted tween/timeline extends the duration, we should enable this timeline again so that it renders properly. We should also align the playhead with the parent timeline's when appropriate.


  if (_uncache(timeline, child)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
    //in case any of the ancestors had completed but should now be enabled...
    if (timeline._dur < timeline.duration()) {
      t = timeline;

      while (t._dp) {
        t.rawTime() >= 0 && t.totalTime(t._tTime); //moves the timeline (shifts its startTime) if necessary, and also enables it. If it's currently zero, though, it may not be scheduled to render until later so there's no need to force it to align with the current playhead position. Only move to catch up with the playhead.

        t = t._dp;
      }
    }

    timeline._zTime = -_tinyNum; // helps ensure that the next render() will be forced (crossingStart = true in render()), even if the duration hasn't changed (we're adding a child which would need to get rendered). Definitely an edge case. Note: we MUST do this AFTER the loop above where the totalTime() might trigger a render() because this _addToTimeline() method gets called from the Animation constructor, BEFORE tweens even record their targets, etc. so we wouldn't want things to get triggered in the wrong order.
  }
},
    _addToTimeline = function _addToTimeline(timeline, child, position, skipChecks) {
  child.parent && _removeFromParent(child);
  child._start = _roundPrecise((_isNumber(position) ? position : position || timeline !== _globalTimeline ? _parsePosition(timeline, position, child) : timeline._time) + child._delay);
  child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));

  _addLinkedListItem(timeline, child, "_first", "_last", timeline._sort ? "_start" : 0);

  _isFromOrFromStart(child) || (timeline._recent = child);
  skipChecks || _postAddChecks(timeline, child);
  timeline._ts < 0 && _alignPlayhead(timeline, timeline._tTime); // if the timeline is reversed and the new child makes it longer, we may need to adjust the parent's _start (push it back)

  return timeline;
},
    _scrollTrigger = function _scrollTrigger(animation, trigger) {
  return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
},
    _attemptInitTween = function _attemptInitTween(tween, time, force, suppressEvents, tTime) {
  _initTween(tween, time, tTime);

  if (!tween._initted) {
    return 1;
  }

  if (!force && tween._pt && !_reverting && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
    _lazyTweens.push(tween);

    tween._lazy = [tTime, suppressEvents];
    return 1;
  }
},
    _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart(_ref) {
  var parent = _ref.parent;
  return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart(parent));
},
    // check parent's _lock because when a timeline repeats/yoyos and does its artificial wrapping, we shouldn't force the ratio back to 0
_isFromOrFromStart = function _isFromOrFromStart(_ref2) {
  var data = _ref2.data;
  return data === "isFromStart" || data === "isStart";
},
    _renderZeroDurationTween = function _renderZeroDurationTween(tween, totalTime, suppressEvents, force) {
  var prevRatio = tween.ratio,
      ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1,
      // if the tween or its parent is reversed and the totalTime is 0, we should go to a ratio of 0. Edge case: if a from() or fromTo() stagger tween is placed later in a timeline, the "startAt" zero-duration tween could initially render at a time when the parent timeline's playhead is technically BEFORE where this tween is, so make sure that any "from" and "fromTo" startAt tweens are rendered the first time at a ratio of 1.
  repeatDelay = tween._rDelay,
      tTime = 0,
      pt,
      iteration,
      prevIteration;

  if (repeatDelay && tween._repeat) {
    // in case there's a zero-duration tween that has a repeat with a repeatDelay
    tTime = _clamp(0, tween._tDur, totalTime);
    iteration = _animationCycle(tTime, repeatDelay);
    tween._yoyo && iteration & 1 && (ratio = 1 - ratio);

    if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
      // if iteration changed
      prevRatio = 1 - ratio;
      tween.vars.repeatRefresh && tween._initted && tween.invalidate();
    }
  }

  if (ratio !== prevRatio || _reverting || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
    if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents, tTime)) {
      // if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately.
      return;
    }

    prevIteration = tween._zTime;
    tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0); // when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.

    suppressEvents || (suppressEvents = totalTime && !prevIteration); // if it was rendered previously at exactly 0 (_zTime) and now the playhead is moving away, DON'T fire callbacks otherwise they'll seem like duplicates.

    tween.ratio = ratio;
    tween._from && (ratio = 1 - ratio);
    tween._time = 0;
    tween._tTime = tTime;
    pt = tween._pt;

    while (pt) {
      pt.r(ratio, pt.d);
      pt = pt._next;
    }

    totalTime < 0 && _rewindStartAt(tween, totalTime, suppressEvents, true);
    tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
    tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");

    if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
      ratio && _removeFromParent(tween, 1);

      if (!suppressEvents && !_reverting) {
        _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);

        tween._prom && tween._prom();
      }
    }
  } else if (!tween._zTime) {
    tween._zTime = totalTime;
  }
},
    _findNextPauseTween = function _findNextPauseTween(animation, prevTime, time) {
  var child;

  if (time > prevTime) {
    child = animation._first;

    while (child && child._start <= time) {
      if (child.data === "isPause" && child._start > prevTime) {
        return child;
      }

      child = child._next;
    }
  } else {
    child = animation._last;

    while (child && child._start >= time) {
      if (child.data === "isPause" && child._start < prevTime) {
        return child;
      }

      child = child._prev;
    }
  }
},
    _setDuration = function _setDuration(animation, duration, skipUncache, leavePlayhead) {
  var repeat = animation._repeat,
      dur = _roundPrecise(duration) || 0,
      totalProgress = animation._tTime / animation._tDur;
  totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
  animation._dur = dur;
  animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
  totalProgress > 0 && !leavePlayhead && _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress);
  animation.parent && _setEnd(animation);
  skipUncache || _uncache(animation.parent, animation);
  return animation;
},
    _onUpdateTotalDuration = function _onUpdateTotalDuration(animation) {
  return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
},
    _zeroPosition = {
  _start: 0,
  endTime: _emptyFunc,
  totalDuration: _emptyFunc
},
    _parsePosition = function _parsePosition(animation, position, percentAnimation) {
  var labels = animation.labels,
      recent = animation._recent || _zeroPosition,
      clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur,
      //in case there's a child that infinitely repeats, users almost never intend for the insertion point of a new child to be based on a SUPER long value like that so we clip it and assume the most recently-added child's endTime should be used instead.
  i,
      offset,
      isPercent;

  if (_isString(position) && (isNaN(position) || position in labels)) {
    //if the string is a number like "1", check to see if there's a label with that name, otherwise interpret it as a number (absolute value).
    offset = position.charAt(0);
    isPercent = position.substr(-1) === "%";
    i = position.indexOf("=");

    if (offset === "<" || offset === ">") {
      i >= 0 && (position = position.replace(/=/, ""));
      return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
    }

    if (i < 0) {
      position in labels || (labels[position] = clippedDuration);
      return labels[position];
    }

    offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));

    if (isPercent && percentAnimation) {
      offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
    }

    return i > 1 ? _parsePosition(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
  }

  return position == null ? clippedDuration : +position;
},
    _createTweenType = function _createTweenType(type, params, timeline) {
  var isLegacy = _isNumber(params[1]),
      varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1),
      vars = params[varsIndex],
      irVars,
      parent;

  isLegacy && (vars.duration = params[1]);
  vars.parent = timeline;

  if (type) {
    irVars = vars;
    parent = timeline;

    while (parent && !("immediateRender" in irVars)) {
      // inheritance hasn't happened yet, but someone may have set a default in an ancestor timeline. We could do vars.immediateRender = _isNotFalse(_inheritDefaults(vars).immediateRender) but that'd exact a slight performance penalty because _inheritDefaults() also runs in the Tween constructor. We're paying a small kb price here to gain speed.
      irVars = parent.vars.defaults || {};
      parent = _isNotFalse(parent.vars.inherit) && parent.parent;
    }

    vars.immediateRender = _isNotFalse(irVars.immediateRender);
    type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1]; // "from" vars
  }

  return new Tween(params[0], vars, params[varsIndex + 1]);
},
    _conditionalReturn = function _conditionalReturn(value, func) {
  return value || value === 0 ? func(value) : func;
},
    _clamp = function _clamp(min, max, value) {
  return value < min ? min : value > max ? max : value;
},
    getUnit = function getUnit(value, v) {
  return !_isString(value) || !(v = _unitExp.exec(value)) ? "" : v[1];
},
    // note: protect against padded numbers as strings, like "100.100". That shouldn't return "00" as the unit. If it's numeric, return no unit.
clamp = function clamp(min, max, value) {
  return _conditionalReturn(value, function (v) {
    return _clamp(min, max, v);
  });
},
    _slice = [].slice,
    _isArrayLike = function _isArrayLike(value, nonEmpty) {
  return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
},
    _flatten = function _flatten(ar, leaveStrings, accumulator) {
  if (accumulator === void 0) {
    accumulator = [];
  }

  return ar.forEach(function (value) {
    var _accumulator;

    return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
  }) || accumulator;
},
    //takes any value and returns an array. If it's a string (and leaveStrings isn't true), it'll use document.querySelectorAll() and convert that to an array. It'll also accept iterables like jQuery objects.
toArray = function toArray(value, scope, leaveStrings) {
  return _context && !scope && _context.selector ? _context.selector(value) : _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call((scope || _doc).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
},
    selector = function selector(value) {
  value = toArray(value)[0] || _warn("Invalid scope") || {};
  return function (v) {
    var el = value.current || value.nativeElement || value;
    return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc.createElement("div") : value);
  };
},
    shuffle = function shuffle(a) {
  return a.sort(function () {
    return .5 - Math.random();
  });
},
    // alternative that's a bit faster and more reliably diverse but bigger:   for (let j, v, i = a.length; i; j = (Math.random() * i) | 0, v = a[--i], a[i] = a[j], a[j] = v); return a;
//for distributing values across an array. Can accept a number, a function or (most commonly) a function which can contain the following properties: {base, amount, from, ease, grid, axis, length, each}. Returns a function that expects the following parameters: index, target, array. Recognizes the following
distribute = function distribute(v) {
  if (_isFunction(v)) {
    return v;
  }

  var vars = _isObject(v) ? v : {
    each: v
  },
      //n:1 is just to indicate v was a number; we leverage that later to set v according to the length we get. If a number is passed in, we treat it like the old stagger value where 0.1, for example, would mean that things would be distributed with 0.1 between each element in the array rather than a total "amount" that's chunked out among them all.
  ease = _parseEase(vars.ease),
      from = vars.from || 0,
      base = parseFloat(vars.base) || 0,
      cache = {},
      isDecimal = from > 0 && from < 1,
      ratios = isNaN(from) || isDecimal,
      axis = vars.axis,
      ratioX = from,
      ratioY = from;

  if (_isString(from)) {
    ratioX = ratioY = {
      center: .5,
      edges: .5,
      end: 1
    }[from] || 0;
  } else if (!isDecimal && ratios) {
    ratioX = from[0];
    ratioY = from[1];
  }

  return function (i, target, a) {
    var l = (a || vars).length,
        distances = cache[l],
        originX,
        originY,
        x,
        y,
        d,
        j,
        max,
        min,
        wrapAt;

    if (!distances) {
      wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];

      if (!wrapAt) {
        max = -_bigNum;

        while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) {}

        wrapAt < l && wrapAt--;
      }

      distances = cache[l] = [];
      originX = ratios ? Math.min(wrapAt, l) * ratioX - .5 : from % wrapAt;
      originY = wrapAt === _bigNum ? 0 : ratios ? l * ratioY / wrapAt - .5 : from / wrapAt | 0;
      max = 0;
      min = _bigNum;

      for (j = 0; j < l; j++) {
        x = j % wrapAt - originX;
        y = originY - (j / wrapAt | 0);
        distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
        d > max && (max = d);
        d < min && (min = d);
      }

      from === "random" && shuffle(distances);
      distances.max = max - min;
      distances.min = min;
      distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
      distances.b = l < 0 ? base - l : base;
      distances.u = getUnit(vars.amount || vars.each) || 0; //unit

      ease = ease && l < 0 ? _invertEase(ease) : ease;
    }

    l = (distances[i] - distances.min) / distances.max || 0;
    return _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u; //round in order to work around floating point errors
  };
},
    _roundModifier = function _roundModifier(v) {
  //pass in 0.1 get a function that'll round to the nearest tenth, or 5 to round to the closest 5, or 0.001 to the closest 1000th, etc.
  var p = Math.pow(10, ((v + "").split(".")[1] || "").length); //to avoid floating point math errors (like 24 * 0.1 == 2.4000000000000004), we chop off at a specific number of decimal places (much faster than toFixed())

  return function (raw) {
    var n = _roundPrecise(Math.round(parseFloat(raw) / v) * v * p);

    return (n - n % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw)); // n - n % 1 replaces Math.floor() in order to handle negative values properly. For example, Math.floor(-150.00000000000003) is 151!
  };
},
    snap = function snap(snapTo, value) {
  var isArray = _isArray(snapTo),
      radius,
      is2D;

  if (!isArray && _isObject(snapTo)) {
    radius = isArray = snapTo.radius || _bigNum;

    if (snapTo.values) {
      snapTo = toArray(snapTo.values);

      if (is2D = !_isNumber(snapTo[0])) {
        radius *= radius; //performance optimization so we don't have to Math.sqrt() in the loop.
      }
    } else {
      snapTo = _roundModifier(snapTo.increment);
    }
  }

  return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function (raw) {
    is2D = snapTo(raw);
    return Math.abs(is2D - raw) <= radius ? is2D : raw;
  } : function (raw) {
    var x = parseFloat(is2D ? raw.x : raw),
        y = parseFloat(is2D ? raw.y : 0),
        min = _bigNum,
        closest = 0,
        i = snapTo.length,
        dx,
        dy;

    while (i--) {
      if (is2D) {
        dx = snapTo[i].x - x;
        dy = snapTo[i].y - y;
        dx = dx * dx + dy * dy;
      } else {
        dx = Math.abs(snapTo[i] - x);
      }

      if (dx < min) {
        min = dx;
        closest = i;
      }
    }

    closest = !radius || min <= radius ? snapTo[closest] : raw;
    return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
  });
},
    random = function random(min, max, roundingIncrement, returnFunction) {
  return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function () {
    return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * .99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
  });
},
    pipe = function pipe() {
  for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
    functions[_key] = arguments[_key];
  }

  return function (value) {
    return functions.reduce(function (v, f) {
      return f(v);
    }, value);
  };
},
    unitize = function unitize(func, unit) {
  return function (value) {
    return func(parseFloat(value)) + (unit || getUnit(value));
  };
},
    normalize = function normalize(min, max, value) {
  return mapRange(min, max, 0, 1, value);
},
    _wrapArray = function _wrapArray(a, wrapper, value) {
  return _conditionalReturn(value, function (index) {
    return a[~~wrapper(index)];
  });
},
    wrap = function wrap(min, max, value) {
  // NOTE: wrap() CANNOT be an arrow function! A very odd compiling bug causes problems (unrelated to GSAP).
  var range = max - min;
  return _isArray(min) ? _wrapArray(min, wrap(0, min.length), max) : _conditionalReturn(value, function (value) {
    return (range + (value - min) % range) % range + min;
  });
},
    wrapYoyo = function wrapYoyo(min, max, value) {
  var range = max - min,
      total = range * 2;
  return _isArray(min) ? _wrapArray(min, wrapYoyo(0, min.length - 1), max) : _conditionalReturn(value, function (value) {
    value = (total + (value - min) % total) % total || 0;
    return min + (value > range ? total - value : value);
  });
},
    _replaceRandom = function _replaceRandom(value) {
  //replaces all occurrences of random(...) in a string with the calculated random value. can be a range like random(-100, 100, 5) or an array like random([0, 100, 500])
  var prev = 0,
      s = "",
      i,
      nums,
      end,
      isArray;

  while (~(i = value.indexOf("random(", prev))) {
    end = value.indexOf(")", i);
    isArray = value.charAt(i + 7) === "[";
    nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
    s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
    prev = end + 1;
  }

  return s + value.substr(prev, value.length - prev);
},
    mapRange = function mapRange(inMin, inMax, outMin, outMax, value) {
  var inRange = inMax - inMin,
      outRange = outMax - outMin;
  return _conditionalReturn(value, function (value) {
    return outMin + ((value - inMin) / inRange * outRange || 0);
  });
},
    interpolate = function interpolate(start, end, progress, mutate) {
  var func = isNaN(start + end) ? 0 : function (p) {
    return (1 - p) * start + p * end;
  };

  if (!func) {
    var isString = _isString(start),
        master = {},
        p,
        i,
        interpolators,
        l,
        il;

    progress === true && (mutate = 1) && (progress = null);

    if (isString) {
      start = {
        p: start
      };
      end = {
        p: end
      };
    } else if (_isArray(start) && !_isArray(end)) {
      interpolators = [];
      l = start.length;
      il = l - 2;

      for (i = 1; i < l; i++) {
        interpolators.push(interpolate(start[i - 1], start[i])); //build the interpolators up front as a performance optimization so that when the function is called many times, it can just reuse them.
      }

      l--;

      func = function func(p) {
        p *= l;
        var i = Math.min(il, ~~p);
        return interpolators[i](p - i);
      };

      progress = end;
    } else if (!mutate) {
      start = _merge(_isArray(start) ? [] : {}, start);
    }

    if (!interpolators) {
      for (p in end) {
        _addPropTween.call(master, start, p, "get", end[p]);
      }

      func = function func(p) {
        return _renderPropTweens(p, master) || (isString ? start.p : start);
      };
    }
  }

  return _conditionalReturn(progress, func);
},
    _getLabelInDirection = function _getLabelInDirection(timeline, fromTime, backward) {
  //used for nextLabel() and previousLabel()
  var labels = timeline.labels,
      min = _bigNum,
      p,
      distance,
      label;

  for (p in labels) {
    distance = labels[p] - fromTime;

    if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
      label = p;
      min = distance;
    }
  }

  return label;
},
    _callback = function _callback(animation, type, executeLazyFirst) {
  var v = animation.vars,
      callback = v[type],
      prevContext = _context,
      context = animation._ctx,
      params,
      scope,
      result;

  if (!callback) {
    return;
  }

  params = v[type + "Params"];
  scope = v.callbackScope || animation;
  executeLazyFirst && _lazyTweens.length && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.

  context && (_context = context);
  result = params ? callback.apply(scope, params) : callback.call(scope);
  _context = prevContext;
  return result;
},
    _interrupt = function _interrupt(animation) {
  _removeFromParent(animation);

  animation.scrollTrigger && animation.scrollTrigger.kill(!!_reverting);
  animation.progress() < 1 && _callback(animation, "onInterrupt");
  return animation;
},
    _quickTween,
    _registerPluginQueue = [],
    _createPlugin = function _createPlugin(config) {
  if (!config) return;
  config = !config.name && config["default"] || config; // UMD packaging wraps things oddly, so for example MotionPathHelper becomes {MotionPathHelper:MotionPathHelper, default:MotionPathHelper}.

  if (_windowExists() || config.headless) {
    // edge case: some build tools may pass in a null/undefined value
    var name = config.name,
        isFunc = _isFunction(config),
        Plugin = name && !isFunc && config.init ? function () {
      this._props = [];
    } : config,
        //in case someone passes in an object that's not a plugin, like CustomEase
    instanceDefaults = {
      init: _emptyFunc,
      render: _renderPropTweens,
      add: _addPropTween,
      kill: _killPropTweensOf,
      modifier: _addPluginModifier,
      rawVars: 0
    },
        statics = {
      targetTest: 0,
      get: 0,
      getSetter: _getSetter,
      aliases: {},
      register: 0
    };

    _wake();

    if (config !== Plugin) {
      if (_plugins[name]) {
        return;
      }

      _setDefaults(Plugin, _setDefaults(_copyExcluding(config, instanceDefaults), statics)); //static methods


      _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config, statics))); //instance methods


      _plugins[Plugin.prop = name] = Plugin;

      if (config.targetTest) {
        _harnessPlugins.push(Plugin);

        _reservedProps[name] = 1;
      }

      name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin"; //for the global name. "motionPath" should become MotionPathPlugin
    }

    _addGlobal(name, Plugin);

    config.register && config.register(gsap, Plugin, PropTween);
  } else {
    _registerPluginQueue.push(config);
  }
},

/*
 * --------------------------------------------------------------------------------------
 * COLORS
 * --------------------------------------------------------------------------------------
 */
_255 = 255,
    _colorLookup = {
  aqua: [0, _255, _255],
  lime: [0, _255, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, _255],
  navy: [0, 0, 128],
  white: [_255, _255, _255],
  olive: [128, 128, 0],
  yellow: [_255, _255, 0],
  orange: [_255, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [_255, 0, 0],
  pink: [_255, 192, 203],
  cyan: [0, _255, _255],
  transparent: [_255, _255, _255, 0]
},
    // possible future idea to replace the hard-coded color name values - put this in the ticker.wake() where we set the _doc:
// let ctx = _doc.createElement("canvas").getContext("2d");
// _forEachName("aqua,lime,silver,black,maroon,teal,blue,navy,white,olive,yellow,orange,gray,purple,green,red,pink,cyan", color => {ctx.fillStyle = color; _colorLookup[color] = splitColor(ctx.fillStyle)});
_hue = function _hue(h, m1, m2) {
  h += h < 0 ? 1 : h > 1 ? -1 : 0;
  return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < .5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + .5 | 0;
},
    splitColor = function splitColor(v, toHSL, forceAlpha) {
  var a = !v ? _colorLookup.black : _isNumber(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0,
      r,
      g,
      b,
      h,
      s,
      l,
      max,
      min,
      d,
      wasHSL;

  if (!a) {
    if (v.substr(-1) === ",") {
      //sometimes a trailing comma is included and we should chop it off (typically from a comma-delimited list of values like a textShadow:"2px 2px 2px blue, 5px 5px 5px rgb(255,0,0)" - in this example "blue," has a trailing comma. We could strip it out inside parseComplex() but we'd need to do it to the beginning and ending values plus it wouldn't provide protection from other potential scenarios like if the user passes in a similar value.
      v = v.substr(0, v.length - 1);
    }

    if (_colorLookup[v]) {
      a = _colorLookup[v];
    } else if (v.charAt(0) === "#") {
      if (v.length < 6) {
        //for shorthand like #9F0 or #9F0F (could have alpha)
        r = v.charAt(1);
        g = v.charAt(2);
        b = v.charAt(3);
        v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
      }

      if (v.length === 9) {
        // hex with alpha, like #fd5e53ff
        a = parseInt(v.substr(1, 6), 16);
        return [a >> 16, a >> 8 & _255, a & _255, parseInt(v.substr(7), 16) / 255];
      }

      v = parseInt(v.substr(1), 16);
      a = [v >> 16, v >> 8 & _255, v & _255];
    } else if (v.substr(0, 3) === "hsl") {
      a = wasHSL = v.match(_strictNumExp);

      if (!toHSL) {
        h = +a[0] % 360 / 360;
        s = +a[1] / 100;
        l = +a[2] / 100;
        g = l <= .5 ? l * (s + 1) : l + s - l * s;
        r = l * 2 - g;
        a.length > 3 && (a[3] *= 1); //cast as number

        a[0] = _hue(h + 1 / 3, r, g);
        a[1] = _hue(h, r, g);
        a[2] = _hue(h - 1 / 3, r, g);
      } else if (~v.indexOf("=")) {
        //if relative values are found, just return the raw strings with the relative prefixes in place.
        a = v.match(_numExp);
        forceAlpha && a.length < 4 && (a[3] = 1);
        return a;
      }
    } else {
      a = v.match(_strictNumExp) || _colorLookup.transparent;
    }

    a = a.map(Number);
  }

  if (toHSL && !wasHSL) {
    r = a[0] / _255;
    g = a[1] / _255;
    b = a[2] / _255;
    max = Math.max(r, g, b);
    min = Math.min(r, g, b);
    l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
      h *= 60;
    }

    a[0] = ~~(h + .5);
    a[1] = ~~(s * 100 + .5);
    a[2] = ~~(l * 100 + .5);
  }

  forceAlpha && a.length < 4 && (a[3] = 1);
  return a;
},
    _colorOrderData = function _colorOrderData(v) {
  // strips out the colors from the string, finds all the numeric slots (with units) and returns an array of those. The Array also has a "c" property which is an Array of the index values where the colors belong. This is to help work around issues where there's a mis-matched order of color/numeric data like drop-shadow(#f00 0px 1px 2px) and drop-shadow(0x 1px 2px #f00). This is basically a helper function used in _formatColors()
  var values = [],
      c = [],
      i = -1;
  v.split(_colorExp).forEach(function (v) {
    var a = v.match(_numWithUnitExp) || [];
    values.push.apply(values, a);
    c.push(i += a.length + 1);
  });
  values.c = c;
  return values;
},
    _formatColors = function _formatColors(s, toHSL, orderMatchData) {
  var result = "",
      colors = (s + result).match(_colorExp),
      type = toHSL ? "hsla(" : "rgba(",
      i = 0,
      c,
      shell,
      d,
      l;

  if (!colors) {
    return s;
  }

  colors = colors.map(function (color) {
    return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
  });

  if (orderMatchData) {
    d = _colorOrderData(s);
    c = orderMatchData.c;

    if (c.join(result) !== d.c.join(result)) {
      shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
      l = shell.length - 1;

      for (; i < l; i++) {
        result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
      }
    }
  }

  if (!shell) {
    shell = s.split(_colorExp);
    l = shell.length - 1;

    for (; i < l; i++) {
      result += shell[i] + colors[i];
    }
  }

  return result + shell[l];
},
    _colorExp = function () {
  var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      //we'll dynamically build this Regular Expression to conserve file size. After building it, it will be able to find rgb(), rgba(), # (hexadecimal), and named color values like red, blue, purple, etc.,
  p;

  for (p in _colorLookup) {
    s += "|" + p + "\\b";
  }

  return new RegExp(s + ")", "gi");
}(),
    _hslExp = /hsl[a]?\(/,
    _colorStringFilter = function _colorStringFilter(a) {
  var combined = a.join(" "),
      toHSL;
  _colorExp.lastIndex = 0;

  if (_colorExp.test(combined)) {
    toHSL = _hslExp.test(combined);
    a[1] = _formatColors(a[1], toHSL);
    a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1])); // make sure the order of numbers/colors match with the END value.

    return true;
  }
},

/*
 * --------------------------------------------------------------------------------------
 * TICKER
 * --------------------------------------------------------------------------------------
 */
_tickerActive,
    _ticker = function () {
  var _getTime = Date.now,
      _lagThreshold = 500,
      _adjustedLag = 33,
      _startTime = _getTime(),
      _lastUpdate = _startTime,
      _gap = 1000 / 240,
      _nextTime = _gap,
      _listeners = [],
      _id,
      _req,
      _raf,
      _self,
      _delta,
      _i,
      _tick = function _tick(v) {
    var elapsed = _getTime() - _lastUpdate,
        manual = v === true,
        overlap,
        dispatch,
        time,
        frame;

    (elapsed > _lagThreshold || elapsed < 0) && (_startTime += elapsed - _adjustedLag);
    _lastUpdate += elapsed;
    time = _lastUpdate - _startTime;
    overlap = time - _nextTime;

    if (overlap > 0 || manual) {
      frame = ++_self.frame;
      _delta = time - _self.time * 1000;
      _self.time = time = time / 1000;
      _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
      dispatch = 1;
    }

    manual || (_id = _req(_tick)); //make sure the request is made before we dispatch the "tick" event so that timing is maintained. Otherwise, if processing the "tick" requires a bunch of time (like 15ms) and we're using a setTimeout() that's based on 16.7ms, it'd technically take 31.7ms between frames otherwise.

    if (dispatch) {
      for (_i = 0; _i < _listeners.length; _i++) {
        // use _i and check _listeners.length instead of a variable because a listener could get removed during the loop, and if that happens to an element less than the current index, it'd throw things off in the loop.
        _listeners[_i](time, _delta, frame, v);
      }
    }
  };

  _self = {
    time: 0,
    frame: 0,
    tick: function tick() {
      _tick(true);
    },
    deltaRatio: function deltaRatio(fps) {
      return _delta / (1000 / (fps || 60));
    },
    wake: function wake() {
      if (_coreReady) {
        if (!_coreInitted && _windowExists()) {
          _win = _coreInitted = window;
          _doc = _win.document || {};
          _globals.gsap = gsap;
          (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);

          _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});

          _registerPluginQueue.forEach(_createPlugin);
        }

        _raf = typeof requestAnimationFrame !== "undefined" && requestAnimationFrame;
        _id && _self.sleep();

        _req = _raf || function (f) {
          return setTimeout(f, _nextTime - _self.time * 1000 + 1 | 0);
        };

        _tickerActive = 1;

        _tick(2);
      }
    },
    sleep: function sleep() {
      (_raf ? cancelAnimationFrame : clearTimeout)(_id);
      _tickerActive = 0;
      _req = _emptyFunc;
    },
    lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
      _lagThreshold = threshold || Infinity; // zero should be interpreted as basically unlimited

      _adjustedLag = Math.min(adjustedLag || 33, _lagThreshold);
    },
    fps: function fps(_fps) {
      _gap = 1000 / (_fps || 240);
      _nextTime = _self.time * 1000 + _gap;
    },
    add: function add(callback, once, prioritize) {
      var func = once ? function (t, d, f, v) {
        callback(t, d, f, v);

        _self.remove(func);
      } : callback;

      _self.remove(callback);

      _listeners[prioritize ? "unshift" : "push"](func);

      _wake();

      return func;
    },
    remove: function remove(callback, i) {
      ~(i = _listeners.indexOf(callback)) && _listeners.splice(i, 1) && _i >= i && _i--;
    },
    _listeners: _listeners
  };
  return _self;
}(),
    _wake = function _wake() {
  return !_tickerActive && _ticker.wake();
},
    //also ensures the core classes are initialized.

/*
* -------------------------------------------------
* EASING
* -------------------------------------------------
*/
_easeMap = {},
    _customEaseExp = /^[\d.\-M][\d.\-,\s]/,
    _quotesExp = /["']/g,
    _parseObjectInString = function _parseObjectInString(value) {
  //takes a string like "{wiggles:10, type:anticipate})" and turns it into a real object. Notice it ends in ")" and includes the {} wrappers. This is because we only use this function for parsing ease configs and prioritized optimization rather than reusability.
  var obj = {},
      split = value.substr(1, value.length - 3).split(":"),
      key = split[0],
      i = 1,
      l = split.length,
      index,
      val,
      parsedVal;

  for (; i < l; i++) {
    val = split[i];
    index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
    parsedVal = val.substr(0, index);
    obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
    key = val.substr(index + 1).trim();
  }

  return obj;
},
    _valueInParentheses = function _valueInParentheses(value) {
  var open = value.indexOf("(") + 1,
      close = value.indexOf(")"),
      nested = value.indexOf("(", open);
  return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
},
    _configEaseFromString = function _configEaseFromString(name) {
  //name can be a string like "elastic.out(1,0.5)", and pass in _easeMap as obj and it'll parse it out and call the actual function like _easeMap.Elastic.easeOut.config(1,0.5). It will also parse custom ease strings as long as CustomEase is loaded and registered (internally as _easeMap._CE).
  var split = (name + "").split("("),
      ease = _easeMap[split[0]];
  return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
},
    _invertEase = function _invertEase(ease) {
  return function (p) {
    return 1 - ease(1 - p);
  };
},
    // allow yoyoEase to be set in children and have those affected when the parent/ancestor timeline yoyos.
_propagateYoyoEase = function _propagateYoyoEase(timeline, isYoyo) {
  var child = timeline._first,
      ease;

  while (child) {
    if (child instanceof Timeline) {
      _propagateYoyoEase(child, isYoyo);
    } else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
      if (child.timeline) {
        _propagateYoyoEase(child.timeline, isYoyo);
      } else {
        ease = child._ease;
        child._ease = child._yEase;
        child._yEase = ease;
        child._yoyo = isYoyo;
      }
    }

    child = child._next;
  }
},
    _parseEase = function _parseEase(ease, defaultEase) {
  return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
},
    _insertEase = function _insertEase(names, easeIn, easeOut, easeInOut) {
  if (easeOut === void 0) {
    easeOut = function easeOut(p) {
      return 1 - easeIn(1 - p);
    };
  }

  if (easeInOut === void 0) {
    easeInOut = function easeInOut(p) {
      return p < .5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
    };
  }

  var ease = {
    easeIn: easeIn,
    easeOut: easeOut,
    easeInOut: easeInOut
  },
      lowercaseName;

  _forEachName(names, function (name) {
    _easeMap[name] = _globals[name] = ease;
    _easeMap[lowercaseName = name.toLowerCase()] = easeOut;

    for (var p in ease) {
      _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
    }
  });

  return ease;
},
    _easeInOutFromOut = function _easeInOutFromOut(easeOut) {
  return function (p) {
    return p < .5 ? (1 - easeOut(1 - p * 2)) / 2 : .5 + easeOut((p - .5) * 2) / 2;
  };
},
    _configElastic = function _configElastic(type, amplitude, period) {
  var p1 = amplitude >= 1 ? amplitude : 1,
      //note: if amplitude is < 1, we simply adjust the period for a more natural feel. Otherwise the math doesn't work right and the curve starts at 1.
  p2 = (period || (type ? .3 : .45)) / (amplitude < 1 ? amplitude : 1),
      p3 = p2 / _2PI * (Math.asin(1 / p1) || 0),
      easeOut = function easeOut(p) {
    return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
  },
      ease = type === "out" ? easeOut : type === "in" ? function (p) {
    return 1 - easeOut(1 - p);
  } : _easeInOutFromOut(easeOut);

  p2 = _2PI / p2; //precalculate to optimize

  ease.config = function (amplitude, period) {
    return _configElastic(type, amplitude, period);
  };

  return ease;
},
    _configBack = function _configBack(type, overshoot) {
  if (overshoot === void 0) {
    overshoot = 1.70158;
  }

  var easeOut = function easeOut(p) {
    return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
  },
      ease = type === "out" ? easeOut : type === "in" ? function (p) {
    return 1 - easeOut(1 - p);
  } : _easeInOutFromOut(easeOut);

  ease.config = function (overshoot) {
    return _configBack(type, overshoot);
  };

  return ease;
}; // a cheaper (kb and cpu) but more mild way to get a parameterized weighted ease by feeding in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEase = ratio => {
// 	let y = 0.5 + ratio / 2;
// 	return p => (2 * (1 - p) * p * y + p * p);
// },
// a stronger (but more expensive kb/cpu) parameterized weighted ease that lets you feed in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEaseStrong = ratio => {
// 	ratio = .5 + ratio / 2;
// 	let o = 1 / 3 * (ratio < .5 ? ratio : 1 - ratio),
// 		b = ratio - o,
// 		c = ratio + o;
// 	return p => p === 1 ? p : 3 * b * (1 - p) * (1 - p) * p + 3 * c * (1 - p) * p * p + p * p * p;
// };


_forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function (name, i) {
  var power = i < 5 ? i + 1 : i;

  _insertEase(name + ",Power" + (power - 1), i ? function (p) {
    return Math.pow(p, power);
  } : function (p) {
    return p;
  }, function (p) {
    return 1 - Math.pow(1 - p, power);
  }, function (p) {
    return p < .5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
  });
});

_easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;

_insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());

(function (n, c) {
  var n1 = 1 / c,
      n2 = 2 * n1,
      n3 = 2.5 * n1,
      easeOut = function easeOut(p) {
    return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + .75 : p < n3 ? n * (p -= 2.25 / c) * p + .9375 : n * Math.pow(p - 2.625 / c, 2) + .984375;
  };

  _insertEase("Bounce", function (p) {
    return 1 - easeOut(1 - p);
  }, easeOut);
})(7.5625, 2.75);

_insertEase("Expo", function (p) {
  return Math.pow(2, 10 * (p - 1)) * p + p * p * p * p * p * p * (1 - p);
}); // previously 2 ** (10 * (p - 1)) but that doesn't end up with the value quite at the right spot so we do a blended ease to ensure it lands where it should perfectly.


_insertEase("Circ", function (p) {
  return -(_sqrt(1 - p * p) - 1);
});

_insertEase("Sine", function (p) {
  return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
});

_insertEase("Back", _configBack("in"), _configBack("out"), _configBack());

_easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
  config: function config(steps, immediateStart) {
    if (steps === void 0) {
      steps = 1;
    }

    var p1 = 1 / steps,
        p2 = steps + (immediateStart ? 0 : 1),
        p3 = immediateStart ? 1 : 0,
        max = 1 - _tinyNum;
    return function (p) {
      return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
    };
  }
};
_defaults.ease = _easeMap["quad.out"];

_forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (name) {
  return _callbackNames += name + "," + name + "Params,";
});
/*
 * --------------------------------------------------------------------------------------
 * CACHE
 * --------------------------------------------------------------------------------------
 */


var GSCache = function GSCache(target, harness) {
  this.id = _gsID++;
  target._gsap = this;
  this.target = target;
  this.harness = harness;
  this.get = harness ? harness.get : _getProperty;
  this.set = harness ? harness.getSetter : _getSetter;
};
/*
 * --------------------------------------------------------------------------------------
 * ANIMATION
 * --------------------------------------------------------------------------------------
 */

var Animation = /*#__PURE__*/function () {
  function Animation(vars) {
    this.vars = vars;
    this._delay = +vars.delay || 0;

    if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
      // TODO: repeat: Infinity on a timeline's children must flag that timeline internally and affect its totalDuration, otherwise it'll stop in the negative direction when reaching the start.
      this._rDelay = vars.repeatDelay || 0;
      this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
    }

    this._ts = 1;

    _setDuration(this, +vars.duration, 1, 1);

    this.data = vars.data;

    if (_context) {
      this._ctx = _context;

      _context.data.push(this);
    }

    _tickerActive || _ticker.wake();
  }

  var _proto = Animation.prototype;

  _proto.delay = function delay(value) {
    if (value || value === 0) {
      this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
      this._delay = value;
      return this;
    }

    return this._delay;
  };

  _proto.duration = function duration(value) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
  };

  _proto.totalDuration = function totalDuration(value) {
    if (!arguments.length) {
      return this._tDur;
    }

    this._dirty = 0;
    return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
  };

  _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
    _wake();

    if (!arguments.length) {
      return this._tTime;
    }

    var parent = this._dp;

    if (parent && parent.smoothChildTiming && this._ts) {
      _alignPlayhead(this, _totalTime);

      !parent._dp || parent.parent || _postAddChecks(parent, this); // edge case: if this is a child of a timeline that already completed, for example, we must re-activate the parent.
      //in case any of the ancestor timelines had completed but should now be enabled, we should reset their totalTime() which will also ensure that they're lined up properly and enabled. Skip for animations that are on the root (wasteful). Example: a TimelineLite.exportRoot() is performed when there's a paused tween on the root, the export will not complete until that tween is unpaused, but imagine a child gets restarted later, after all [unpaused] tweens have completed. The start of that child would get pushed out, but one of the ancestors may have completed.

      while (parent && parent.parent) {
        if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
          parent.totalTime(parent._tTime, true);
        }

        parent = parent.parent;
      }

      if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
        //if the animation doesn't have a parent, put it back into its last parent (recorded as _dp for exactly cases like this). Limit to parents with autoRemoveChildren (like globalTimeline) so that if the user manually removes an animation from a timeline and then alters its playhead, it doesn't get added back in.
        _addToTimeline(this._dp, this, this._start - this._delay);
      }
    }

    if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
      // check for _ptLookup on a Tween instance to ensure it has actually finished being instantiated, otherwise if this.reverse() gets called in the Animation constructor, it could trigger a render() here even though the _targets weren't populated, thus when _init() is called there won't be any PropTweens (it'll act like the tween is non-functional)
      this._ts || (this._pTime = _totalTime); // otherwise, if an animation is paused, then the playhead is moved back to zero, then resumed, it'd revert back to the original time at the pause
      //if (!this._lock) { // avoid endless recursion (not sure we need this yet or if it's worth the performance hit)
      //   this._lock = 1;

      _lazySafeRender(this, _totalTime, suppressEvents); //   this._lock = 0;
      //}

    }

    return this;
  };

  _proto.time = function time(value, suppressEvents) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time; // note: if the modulus results in 0, the playhead could be exactly at the end or the beginning, and we always defer to the END with a non-zero value, otherwise if you set the time() to the very end (duration()), it would render at the START!
  };

  _proto.totalProgress = function totalProgress(value, suppressEvents) {
    return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
  };

  _proto.progress = function progress(value, suppressEvents) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  };

  _proto.iteration = function iteration(value, suppressEvents) {
    var cycleDuration = this.duration() + this._rDelay;

    return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
  } // potential future addition:
  // isPlayingBackwards() {
  // 	let animation = this,
  // 		orientation = 1; // 1 = forward, -1 = backward
  // 	while (animation) {
  // 		orientation *= animation.reversed() || (animation.repeat() && !(animation.iteration() & 1)) ? -1 : 1;
  // 		animation = animation.parent;
  // 	}
  // 	return orientation < 0;
  // }
  ;

  _proto.timeScale = function timeScale(value, suppressEvents) {
    if (!arguments.length) {
      return this._rts === -_tinyNum ? 0 : this._rts; // recorded timeScale. Special case: if someone calls reverse() on an animation with timeScale of 0, we assign it -_tinyNum to remember it's reversed.
    }

    if (this._rts === value) {
      return this;
    }

    var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime; // make sure to do the parentToChildTotalTime() BEFORE setting the new _ts because the old one must be used in that calculation.
    // future addition? Up side: fast and minimal file size. Down side: only works on this animation; if a timeline is reversed, for example, its childrens' onReverse wouldn't get called.
    //(+value < 0 && this._rts >= 0) && _callback(this, "onReverse", true);
    // prioritize rendering where the parent's playhead lines up instead of this._tTime because there could be a tween that's animating another tween's timeScale in the same rendering loop (same parent), thus if the timeScale tween renders first, it would alter _start BEFORE _tTime was set on that tick (in the rendering loop), effectively freezing it until the timeScale tween finishes.

    this._rts = +value || 0;
    this._ts = this._ps || value === -_tinyNum ? 0 : this._rts; // _ts is the functional timeScale which would be 0 if the animation is paused.

    this.totalTime(_clamp(-Math.abs(this._delay), this._tDur, tTime), suppressEvents !== false);

    _setEnd(this); // if parent.smoothChildTiming was false, the end time didn't get updated in the _alignPlayhead() method, so do it here.


    return _recacheAncestors(this);
  };

  _proto.paused = function paused(value) {
    if (!arguments.length) {
      return this._ps;
    } // possible future addition - if an animation is removed from its parent and then .restart() or .play() or .resume() is called, perhaps we should force it back into the globalTimeline but be careful because what if it's already at its end? We don't want it to just persist forever and not get released for GC.
    // !this.parent && !value && this._tTime < this._tDur && this !== _globalTimeline && _globalTimeline.add(this);


    if (this._ps !== value) {
      this._ps = value;

      if (value) {
        this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()); // if the pause occurs during the delay phase, make sure that's factored in when resuming.

        this._ts = this._act = 0; // _ts is the functional timeScale, so a paused tween would effectively have a timeScale of 0. We record the "real" timeScale as _rts (recorded time scale)
      } else {
        _wake();

        this._ts = this._rts; //only defer to _pTime (pauseTime) if tTime is zero. Remember, someone could pause() an animation, then scrub the playhead and resume(). If the parent doesn't have smoothChildTiming, we render at the rawTime() because the startTime won't get updated.

        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum)); // edge case: animation.progress(1).pause().play() wouldn't render again because the playhead is already at the end, but the call to totalTime() below will add it back to its parent...and not remove it again (since removing only happens upon rendering at a new time). Offsetting the _tTime slightly is done simply to cause the final render in totalTime() that'll pop it off its timeline (if autoRemoveChildren is true, of course). Check to make sure _zTime isn't -_tinyNum to avoid an edge case where the playhead is pushed to the end but INSIDE a tween/callback, the timeline itself is paused thus halting rendering and leaving a few unrendered. When resuming, it wouldn't render those otherwise.
      }
    }

    return this;
  };

  _proto.startTime = function startTime(value) {
    if (arguments.length) {
      this._start = value;
      var parent = this.parent || this._dp;
      parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
      return this;
    }

    return this._start;
  };

  _proto.endTime = function endTime(includeRepeats) {
    return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  };

  _proto.rawTime = function rawTime(wrapRepeats) {
    var parent = this.parent || this._dp; // _dp = detached parent

    return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
  };

  _proto.revert = function revert(config) {
    if (config === void 0) {
      config = _revertConfig;
    }

    var prevIsReverting = _reverting;
    _reverting = config;

    if (this._initted || this._startAt) {
      this.timeline && this.timeline.revert(config);
      this.totalTime(-0.01, config.suppressEvents);
    }

    this.data !== "nested" && config.kill !== false && this.kill();
    _reverting = prevIsReverting;
    return this;
  };

  _proto.globalTime = function globalTime(rawTime) {
    var animation = this,
        time = arguments.length ? rawTime : animation.rawTime();

    while (animation) {
      time = animation._start + time / (Math.abs(animation._ts) || 1);
      animation = animation._dp;
    }

    return !this.parent && this._sat ? this._sat.globalTime(rawTime) : time; // the _startAt tweens for .fromTo() and .from() that have immediateRender should always be FIRST in the timeline (important for context.revert()). "_sat" stands for _startAtTween, referring to the parent tween that created the _startAt. We must discern if that tween had immediateRender so that we can know whether or not to prioritize it in revert().
  };

  _proto.repeat = function repeat(value) {
    if (arguments.length) {
      this._repeat = value === Infinity ? -2 : value;
      return _onUpdateTotalDuration(this);
    }

    return this._repeat === -2 ? Infinity : this._repeat;
  };

  _proto.repeatDelay = function repeatDelay(value) {
    if (arguments.length) {
      var time = this._time;
      this._rDelay = value;

      _onUpdateTotalDuration(this);

      return time ? this.time(time) : this;
    }

    return this._rDelay;
  };

  _proto.yoyo = function yoyo(value) {
    if (arguments.length) {
      this._yoyo = value;
      return this;
    }

    return this._yoyo;
  };

  _proto.seek = function seek(position, suppressEvents) {
    return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
  };

  _proto.restart = function restart(includeDelay, suppressEvents) {
    this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
    this._dur || (this._zTime = -_tinyNum); // ensures onComplete fires on a zero-duration animation that gets restarted.

    return this;
  };

  _proto.play = function play(from, suppressEvents) {
    from != null && this.seek(from, suppressEvents);
    return this.reversed(false).paused(false);
  };

  _proto.reverse = function reverse(from, suppressEvents) {
    from != null && this.seek(from || this.totalDuration(), suppressEvents);
    return this.reversed(true).paused(false);
  };

  _proto.pause = function pause(atTime, suppressEvents) {
    atTime != null && this.seek(atTime, suppressEvents);
    return this.paused(true);
  };

  _proto.resume = function resume() {
    return this.paused(false);
  };

  _proto.reversed = function reversed(value) {
    if (arguments.length) {
      !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0)); // in case timeScale is zero, reversing would have no effect so we use _tinyNum.

      return this;
    }

    return this._rts < 0;
  };

  _proto.invalidate = function invalidate() {
    this._initted = this._act = 0;
    this._zTime = -_tinyNum;
    return this;
  };

  _proto.isActive = function isActive() {
    var parent = this.parent || this._dp,
        start = this._start,
        rawTime;
    return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
  };

  _proto.eventCallback = function eventCallback(type, callback, params) {
    var vars = this.vars;

    if (arguments.length > 1) {
      if (!callback) {
        delete vars[type];
      } else {
        vars[type] = callback;
        params && (vars[type + "Params"] = params);
        type === "onUpdate" && (this._onUpdate = callback);
      }

      return this;
    }

    return vars[type];
  };

  _proto.then = function then(onFulfilled) {
    var self = this;
    return new Promise(function (resolve) {
      var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough,
          _resolve = function _resolve() {
        var _then = self.then;
        self.then = null; // temporarily null the then() method to avoid an infinite loop (see https://github.com/greensock/GSAP/issues/322)

        _isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
        resolve(f);
        self.then = _then;
      };

      if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) {
        _resolve();
      } else {
        self._prom = _resolve;
      }
    });
  };

  _proto.kill = function kill() {
    _interrupt(this);
  };

  return Animation;
}();

_setDefaults(Animation.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: false,
  parent: null,
  _initted: false,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -_tinyNum,
  _prom: 0,
  _ps: false,
  _rts: 1
});
/*
 * -------------------------------------------------
 * TIMELINE
 * -------------------------------------------------
 */


var Timeline = /*#__PURE__*/function (_Animation) {
  _inheritsLoose(Timeline, _Animation);

  function Timeline(vars, position) {
    var _this;

    if (vars === void 0) {
      vars = {};
    }

    _this = _Animation.call(this, vars) || this;
    _this.labels = {};
    _this.smoothChildTiming = !!vars.smoothChildTiming;
    _this.autoRemoveChildren = !!vars.autoRemoveChildren;
    _this._sort = _isNotFalse(vars.sortChildren);
    _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
    vars.reversed && _this.reverse();
    vars.paused && _this.paused(true);
    vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
    return _this;
  }

  var _proto2 = Timeline.prototype;

  _proto2.to = function to(targets, vars, position) {
    _createTweenType(0, arguments, this);

    return this;
  };

  _proto2.from = function from(targets, vars, position) {
    _createTweenType(1, arguments, this);

    return this;
  };

  _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
    _createTweenType(2, arguments, this);

    return this;
  };

  _proto2.set = function set(targets, vars, position) {
    vars.duration = 0;
    vars.parent = this;
    _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
    vars.immediateRender = !!vars.immediateRender;
    new Tween(targets, vars, _parsePosition(this, position), 1);
    return this;
  };

  _proto2.call = function call(callback, params, position) {
    return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
  } //ONLY for backward compatibility! Maybe delete?
  ;

  _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
    vars.duration = duration;
    vars.stagger = vars.stagger || stagger;
    vars.onComplete = onCompleteAll;
    vars.onCompleteParams = onCompleteAllParams;
    vars.parent = this;
    new Tween(targets, vars, _parsePosition(this, position));
    return this;
  };

  _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
    vars.runBackwards = 1;
    _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
    return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
  };

  _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
    toVars.startAt = fromVars;
    _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
    return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
  };

  _proto2.render = function render(totalTime, suppressEvents, force) {
    var prevTime = this._time,
        tDur = this._dirty ? this.totalDuration() : this._tDur,
        dur = this._dur,
        tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime),
        // if a paused timeline is resumed (or its _start is updated for another reason...which rounds it), that could result in the playhead shifting a **tiny** amount and a zero-duration child at that spot may get rendered at a different ratio, like its totalTime in render() may be 1e-17 instead of 0, for example.
    crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur),
        time,
        child,
        next,
        iteration,
        cycleDuration,
        prevPaused,
        pauseTween,
        timeScale,
        prevStart,
        prevIteration,
        yoyo,
        isYoyo;
    this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);

    if (tTime !== this._tTime || force || crossingStart) {
      if (prevTime !== this._time && dur) {
        //if totalDuration() finds a child with a negative startTime and smoothChildTiming is true, things get shifted around internally so we need to adjust the time accordingly. For example, if a tween starts at -30 we must shift EVERYTHING forward 30 seconds and move this timeline's startTime backward by 30 seconds so that things align with the playhead (no jump).
        tTime += this._time - prevTime;
        totalTime += this._time - prevTime;
      }

      time = tTime;
      prevStart = this._start;
      timeScale = this._ts;
      prevPaused = !timeScale;

      if (crossingStart) {
        dur || (prevTime = this._zTime); //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.

        (totalTime || !suppressEvents) && (this._zTime = totalTime);
      }

      if (this._repeat) {
        //adjust the time for repeats and yoyos
        yoyo = this._yoyo;
        cycleDuration = dur + this._rDelay;

        if (this._repeat < -1 && totalTime < 0) {
          return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
        }

        time = _roundPrecise(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)

        if (tTime === tDur) {
          // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
          iteration = this._repeat;
          time = dur;
        } else {
          prevIteration = _roundPrecise(tTime / cycleDuration); // full decimal version of iterations, not the previous iteration (we're reusing prevIteration variable for efficiency)

          iteration = ~~prevIteration;

          if (iteration && iteration === prevIteration) {
            time = dur;
            iteration--;
          }

          time > dur && (time = dur);
        }

        prevIteration = _animationCycle(this._tTime, cycleDuration);
        !prevTime && this._tTime && prevIteration !== iteration && this._tTime - prevIteration * cycleDuration - this._dur <= 0 && (prevIteration = iteration); // edge case - if someone does addPause() at the very beginning of a repeating timeline, that pause is technically at the same spot as the end which causes this._time to get set to 0 when the totalTime would normally place the playhead at the end. See https://gsap.com/forums/topic/23823-closing-nav-animation-not-working-on-ie-and-iphone-6-maybe-other-older-browser/?tab=comments#comment-113005 also, this._tTime - prevIteration * cycleDuration - this._dur <= 0 just checks to make sure it wasn't previously in the "repeatDelay" portion

        if (yoyo && iteration & 1) {
          time = dur - time;
          isYoyo = 1;
        }
        /*
        make sure children at the end/beginning of the timeline are rendered properly. If, for example,
        a 3-second long timeline rendered at 2.9 seconds previously, and now renders at 3.2 seconds (which
        would get translated to 2.8 seconds if the timeline yoyos or 0.2 seconds if it just repeats), there
        could be a callback or a short tween that's at 2.95 or 3 seconds in which wouldn't render. So
        we need to push the timeline to the end (and/or beginning depending on its yoyo value). Also we must
        ensure that zero-duration tweens at the very beginning or end of the Timeline work.
        */


        if (iteration !== prevIteration && !this._lock) {
          var rewinding = yoyo && prevIteration & 1,
              doesWrap = rewinding === (yoyo && iteration & 1);
          iteration < prevIteration && (rewinding = !rewinding);
          prevTime = rewinding ? 0 : tTime % dur ? dur : tTime; // if the playhead is landing exactly at the end of an iteration, use that totalTime rather than only the duration, otherwise it'll skip the 2nd render since it's effectively at the same time.

          this._lock = 1;
          this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
          this._tTime = tTime; // if a user gets the iteration() inside the onRepeat, for example, it should be accurate.

          !suppressEvents && this.parent && _callback(this, "onRepeat");
          this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);

          if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) {
            // if prevTime is 0 and we render at the very end, _time will be the end, thus won't match. So in this edge case, prevTime won't match _time but that's okay. If it gets killed in the onRepeat, eject as well.
            return this;
          }

          dur = this._dur; // in case the duration changed in the onRepeat

          tDur = this._tDur;

          if (doesWrap) {
            this._lock = 2;
            prevTime = rewinding ? dur : -0.0001;
            this.render(prevTime, true);
            this.vars.repeatRefresh && !isYoyo && this.invalidate();
          }

          this._lock = 0;

          if (!this._ts && !prevPaused) {
            return this;
          } //in order for yoyoEase to work properly when there's a stagger, we must swap out the ease in each sub-tween.


          _propagateYoyoEase(this, isYoyo);
        }
      }

      if (this._hasPause && !this._forcing && this._lock < 2) {
        pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));

        if (pauseTween) {
          tTime -= time - (time = pauseTween._start);
        }
      }

      this._tTime = tTime;
      this._time = time;
      this._act = !timeScale; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.

      if (!this._initted) {
        this._onUpdate = this.vars.onUpdate;
        this._initted = 1;
        this._zTime = totalTime;
        prevTime = 0; // upon init, the playhead should always go forward; someone could invalidate() a completed timeline and then if they restart(), that would make child tweens render in reverse order which could lock in the wrong starting values if they build on each other, like tl.to(obj, {x: 100}).to(obj, {x: 0}).
      }

      if (!prevTime && time && !suppressEvents && !iteration) {
        _callback(this, "onStart");

        if (this._tTime !== tTime) {
          // in case the onStart triggered a render at a different spot, eject. Like if someone did animation.pause(0.5) or something inside the onStart.
          return this;
        }
      }

      if (time >= prevTime && totalTime >= 0) {
        child = this._first;

        while (child) {
          next = child._next;

          if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
            if (child.parent !== this) {
              // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
              return this.render(totalTime, suppressEvents, force);
            }

            child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);

            if (time !== this._time || !this._ts && !prevPaused) {
              //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
              pauseTween = 0;
              next && (tTime += this._zTime = -_tinyNum); // it didn't finish rendering, so flag zTime as negative so that the next time render() is called it'll be forced (to render any remaining children)

              break;
            }
          }

          child = next;
        }
      } else {
        child = this._last;
        var adjustedTime = totalTime < 0 ? totalTime : time; //when the playhead goes backward beyond the start of this timeline, we must pass that information down to the child animations so that zero-duration tweens know whether to render their starting or ending values.

        while (child) {
          next = child._prev;

          if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
            if (child.parent !== this) {
              // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
              return this.render(totalTime, suppressEvents, force);
            }

            child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force || _reverting && (child._initted || child._startAt)); // if reverting, we should always force renders of initted tweens (but remember that .fromTo() or .from() may have a _startAt but not _initted yet). If, for example, a .fromTo() tween with a stagger (which creates an internal timeline) gets reverted BEFORE some of its child tweens render for the first time, it may not properly trigger them to revert.

            if (time !== this._time || !this._ts && !prevPaused) {
              //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
              pauseTween = 0;
              next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum); // it didn't finish rendering, so adjust zTime so that so that the next time render() is called it'll be forced (to render any remaining children)

              break;
            }
          }

          child = next;
        }
      }

      if (pauseTween && !suppressEvents) {
        this.pause();
        pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;

        if (this._ts) {
          //the callback resumed playback! So since we may have held back the playhead due to where the pause is positioned, go ahead and jump to where it's SUPPOSED to be (if no pause happened).
          this._start = prevStart; //if the pause was at an earlier time and the user resumed in the callback, it could reposition the timeline (changing its startTime), throwing things off slightly, so we make sure the _start doesn't shift.

          _setEnd(this);

          return this.render(totalTime, suppressEvents, force);
        }
      }

      this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
      if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) if (!this._lock) {
        // remember, a child's callback may alter this timeline's playhead or timeScale which is why we need to add some of these checks.
        (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.

        if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
          _callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);

          this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
        }
      }
    }

    return this;
  };

  _proto2.add = function add(child, position) {
    var _this2 = this;

    _isNumber(position) || (position = _parsePosition(this, position, child));

    if (!(child instanceof Animation)) {
      if (_isArray(child)) {
        child.forEach(function (obj) {
          return _this2.add(obj, position);
        });
        return this;
      }

      if (_isString(child)) {
        return this.addLabel(child, position);
      }

      if (_isFunction(child)) {
        child = Tween.delayedCall(0, child);
      } else {
        return this;
      }
    }

    return this !== child ? _addToTimeline(this, child, position) : this; //don't allow a timeline to be added to itself as a child!
  };

  _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
    if (nested === void 0) {
      nested = true;
    }

    if (tweens === void 0) {
      tweens = true;
    }

    if (timelines === void 0) {
      timelines = true;
    }

    if (ignoreBeforeTime === void 0) {
      ignoreBeforeTime = -_bigNum;
    }

    var a = [],
        child = this._first;

    while (child) {
      if (child._start >= ignoreBeforeTime) {
        if (child instanceof Tween) {
          tweens && a.push(child);
        } else {
          timelines && a.push(child);
          nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
        }
      }

      child = child._next;
    }

    return a;
  };

  _proto2.getById = function getById(id) {
    var animations = this.getChildren(1, 1, 1),
        i = animations.length;

    while (i--) {
      if (animations[i].vars.id === id) {
        return animations[i];
      }
    }
  };

  _proto2.remove = function remove(child) {
    if (_isString(child)) {
      return this.removeLabel(child);
    }

    if (_isFunction(child)) {
      return this.killTweensOf(child);
    }

    child.parent === this && _removeLinkedListItem(this, child);

    if (child === this._recent) {
      this._recent = this._last;
    }

    return _uncache(this);
  };

  _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
    if (!arguments.length) {
      return this._tTime;
    }

    this._forcing = 1;

    if (!this._dp && this._ts) {
      //special case for the global timeline (or any other that has no parent or detached parent).
      this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
    }

    _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);

    this._forcing = 0;
    return this;
  };

  _proto2.addLabel = function addLabel(label, position) {
    this.labels[label] = _parsePosition(this, position);
    return this;
  };

  _proto2.removeLabel = function removeLabel(label) {
    delete this.labels[label];
    return this;
  };

  _proto2.addPause = function addPause(position, callback, params) {
    var t = Tween.delayedCall(0, callback || _emptyFunc, params);
    t.data = "isPause";
    this._hasPause = 1;
    return _addToTimeline(this, t, _parsePosition(this, position));
  };

  _proto2.removePause = function removePause(position) {
    var child = this._first;
    position = _parsePosition(this, position);

    while (child) {
      if (child._start === position && child.data === "isPause") {
        _removeFromParent(child);
      }

      child = child._next;
    }
  };

  _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
    var tweens = this.getTweensOf(targets, onlyActive),
        i = tweens.length;

    while (i--) {
      _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
    }

    return this;
  };

  _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
    var a = [],
        parsedTargets = toArray(targets),
        child = this._first,
        isGlobalTime = _isNumber(onlyActive),
        // a number is interpreted as a global time. If the animation spans
    children;

    while (child) {
      if (child instanceof Tween) {
        if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
          // note: if this is for overwriting, it should only be for tweens that aren't paused and are initted.
          a.push(child);
        }
      } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
        a.push.apply(a, children);
      }

      child = child._next;
    }

    return a;
  } // potential future feature - targets() on timelines
  // targets() {
  // 	let result = [];
  // 	this.getChildren(true, true, false).forEach(t => result.push(...t.targets()));
  // 	return result.filter((v, i) => result.indexOf(v) === i);
  // }
  ;

  _proto2.tweenTo = function tweenTo(position, vars) {
    vars = vars || {};

    var tl = this,
        endTime = _parsePosition(tl, position),
        _vars = vars,
        startAt = _vars.startAt,
        _onStart = _vars.onStart,
        onStartParams = _vars.onStartParams,
        immediateRender = _vars.immediateRender,
        initted,
        tween = Tween.to(tl, _setDefaults({
      ease: vars.ease || "none",
      lazy: false,
      immediateRender: false,
      time: endTime,
      overwrite: "auto",
      duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
      onStart: function onStart() {
        tl.pause();

        if (!initted) {
          var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
          tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
          initted = 1;
        }

        _onStart && _onStart.apply(tween, onStartParams || []); //in case the user had an onStart in the vars - we don't want to overwrite it.
      }
    }, vars));

    return immediateRender ? tween.render(0) : tween;
  };

  _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
    return this.tweenTo(toPosition, _setDefaults({
      startAt: {
        time: _parsePosition(this, fromPosition)
      }
    }, vars));
  };

  _proto2.recent = function recent() {
    return this._recent;
  };

  _proto2.nextLabel = function nextLabel(afterTime) {
    if (afterTime === void 0) {
      afterTime = this._time;
    }

    return _getLabelInDirection(this, _parsePosition(this, afterTime));
  };

  _proto2.previousLabel = function previousLabel(beforeTime) {
    if (beforeTime === void 0) {
      beforeTime = this._time;
    }

    return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
  };

  _proto2.currentLabel = function currentLabel(value) {
    return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
  };

  _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
    if (ignoreBeforeTime === void 0) {
      ignoreBeforeTime = 0;
    }

    var child = this._first,
        labels = this.labels,
        p;

    while (child) {
      if (child._start >= ignoreBeforeTime) {
        child._start += amount;
        child._end += amount;
      }

      child = child._next;
    }

    if (adjustLabels) {
      for (p in labels) {
        if (labels[p] >= ignoreBeforeTime) {
          labels[p] += amount;
        }
      }
    }

    return _uncache(this);
  };

  _proto2.invalidate = function invalidate(soft) {
    var child = this._first;
    this._lock = 0;

    while (child) {
      child.invalidate(soft);
      child = child._next;
    }

    return _Animation.prototype.invalidate.call(this, soft);
  };

  _proto2.clear = function clear(includeLabels) {
    if (includeLabels === void 0) {
      includeLabels = true;
    }

    var child = this._first,
        next;

    while (child) {
      next = child._next;
      this.remove(child);
      child = next;
    }

    this._dp && (this._time = this._tTime = this._pTime = 0);
    includeLabels && (this.labels = {});
    return _uncache(this);
  };

  _proto2.totalDuration = function totalDuration(value) {
    var max = 0,
        self = this,
        child = self._last,
        prevStart = _bigNum,
        prev,
        start,
        parent;

    if (arguments.length) {
      return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
    }

    if (self._dirty) {
      parent = self.parent;

      while (child) {
        prev = child._prev; //record it here in case the tween changes position in the sequence...

        child._dirty && child.totalDuration(); //could change the tween._startTime, so make sure the animation's cache is clean before analyzing it.

        start = child._start;

        if (start > prevStart && self._sort && child._ts && !self._lock) {
          //in case one of the tweens shifted out of order, it needs to be re-inserted into the correct position in the sequence
          self._lock = 1; //prevent endless recursive calls - there are methods that get triggered that check duration/totalDuration when we add().

          _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
        } else {
          prevStart = start;
        }

        if (start < 0 && child._ts) {
          //children aren't allowed to have negative startTimes unless smoothChildTiming is true, so adjust here if one is found.
          max -= start;

          if (!parent && !self._dp || parent && parent.smoothChildTiming) {
            self._start += start / self._ts;
            self._time -= start;
            self._tTime -= start;
          }

          self.shiftChildren(-start, false, -1e999);
          prevStart = 0;
        }

        child._end > max && child._ts && (max = child._end);
        child = prev;
      }

      _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);

      self._dirty = 0;
    }

    return self._tDur;
  };

  Timeline.updateRoot = function updateRoot(time) {
    if (_globalTimeline._ts) {
      _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));

      _lastRenderedFrame = _ticker.frame;
    }

    if (_ticker.frame >= _nextGCFrame) {
      _nextGCFrame += _config.autoSleep || 120;
      var child = _globalTimeline._first;
      if (!child || !child._ts) if (_config.autoSleep && _ticker._listeners.length < 2) {
        while (child && !child._ts) {
          child = child._next;
        }

        child || _ticker.sleep();
      }
    }
  };

  return Timeline;
}(Animation);

_setDefaults(Timeline.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});

var _addComplexStringPropTween = function _addComplexStringPropTween(target, prop, start, end, setter, stringFilter, funcParam) {
  //note: we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
  var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter),
      index = 0,
      matchIndex = 0,
      result,
      startNums,
      color,
      endNum,
      chunk,
      startNum,
      hasRandom,
      a;
  pt.b = start;
  pt.e = end;
  start += ""; //ensure values are strings

  end += "";

  if (hasRandom = ~end.indexOf("random(")) {
    end = _replaceRandom(end);
  }

  if (stringFilter) {
    a = [start, end];
    stringFilter(a, target, prop); //pass an array with the starting and ending values and let the filter do whatever it needs to the values.

    start = a[0];
    end = a[1];
  }

  startNums = start.match(_complexStringNumExp) || [];

  while (result = _complexStringNumExp.exec(end)) {
    endNum = result[0];
    chunk = end.substring(index, result.index);

    if (color) {
      color = (color + 1) % 5;
    } else if (chunk.substr(-5) === "rgba(") {
      color = 1;
    }

    if (endNum !== startNums[matchIndex++]) {
      startNum = parseFloat(startNums[matchIndex - 1]) || 0; //these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.

      pt._pt = {
        _next: pt._pt,
        p: chunk || matchIndex === 1 ? chunk : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: startNum,
        c: endNum.charAt(1) === "=" ? _parseRelative(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
        m: color && color < 4 ? Math.round : 0
      };
      index = _complexStringNumExp.lastIndex;
    }
  }

  pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)

  pt.fp = funcParam;

  if (_relExp.test(end) || hasRandom) {
    pt.e = 0; //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
  }

  this._pt = pt; //start the linked list with this new PropTween. Remember, we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.

  return pt;
},
    _addPropTween = function _addPropTween(target, prop, start, end, index, targets, modifier, stringFilter, funcParam, optional) {
  _isFunction(end) && (end = end(index || 0, target, targets));
  var currentValue = target[prop],
      parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](),
      setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc,
      pt;

  if (_isString(end)) {
    if (~end.indexOf("random(")) {
      end = _replaceRandom(end);
    }

    if (end.charAt(1) === "=") {
      pt = _parseRelative(parsedStart, end) + (getUnit(parsedStart) || 0);

      if (pt || pt === 0) {
        // to avoid isNaN, like if someone passes in a value like "!= whatever"
        end = pt;
      }
    }
  }

  if (!optional || parsedStart !== end || _forceAllPropTweens) {
    if (!isNaN(parsedStart * end) && end !== "") {
      // fun fact: any number multiplied by "" is evaluated as the number 0!
      pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
      funcParam && (pt.fp = funcParam);
      modifier && pt.modifier(modifier, this, target);
      return this._pt = pt;
    }

    !currentValue && !(prop in target) && _missingPlugin(prop, end);
    return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
  }
},
    //creates a copy of the vars object and processes any function-based values (putting the resulting values directly into the copy) as well as strings with "random()" in them. It does NOT process relative values.
_processVars = function _processVars(vars, index, target, targets, tween) {
  _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));

  if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
    return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
  }

  var copy = {},
      p;

  for (p in vars) {
    copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
  }

  return copy;
},
    _checkPlugin = function _checkPlugin(property, vars, tween, index, target, targets) {
  var plugin, pt, ptLookup, i;

  if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
    tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);

    if (tween !== _quickTween) {
      ptLookup = tween._ptLookup[tween._targets.indexOf(target)]; //note: we can't use tween._ptLookup[index] because for staggered tweens, the index from the fullTargets array won't match what it is in each individual tween that spawns from the stagger.

      i = plugin._props.length;

      while (i--) {
        ptLookup[plugin._props[i]] = pt;
      }
    }
  }

  return plugin;
},
    _overwritingTween,
    //store a reference temporarily so we can avoid overwriting itself.
_forceAllPropTweens,
    _initTween = function _initTween(tween, time, tTime) {
  var vars = tween.vars,
      ease = vars.ease,
      startAt = vars.startAt,
      immediateRender = vars.immediateRender,
      lazy = vars.lazy,
      onUpdate = vars.onUpdate,
      runBackwards = vars.runBackwards,
      yoyoEase = vars.yoyoEase,
      keyframes = vars.keyframes,
      autoRevert = vars.autoRevert,
      dur = tween._dur,
      prevStartAt = tween._startAt,
      targets = tween._targets,
      parent = tween.parent,
      fullTargets = parent && parent.data === "nested" ? parent.vars.targets : targets,
      autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites,
      tl = tween.timeline,
      cleanVars,
      i,
      p,
      pt,
      target,
      hasPriority,
      gsData,
      harness,
      plugin,
      ptLookup,
      index,
      harnessVars,
      overwritten;
  tl && (!keyframes || !ease) && (ease = "none");
  tween._ease = _parseEase(ease, _defaults.ease);
  tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;

  if (yoyoEase && tween._yoyo && !tween._repeat) {
    //there must have been a parent timeline with yoyo:true that is currently in its yoyo phase, so flip the eases.
    yoyoEase = tween._yEase;
    tween._yEase = tween._ease;
    tween._ease = yoyoEase;
  }

  tween._from = !tl && !!vars.runBackwards; //nested timelines should never run backwards - the backwards-ness is in the child tweens.

  if (!tl || keyframes && !vars.stagger) {
    //if there's an internal timeline, skip all the parsing because we passed that task down the chain.
    harness = targets[0] ? _getCache(targets[0]).harness : 0;
    harnessVars = harness && vars[harness.prop]; //someone may need to specify CSS-specific values AND non-CSS values, like if the element has an "x" property plus it's a standard DOM element. We allow people to distinguish by wrapping plugin-specific stuff in a css:{} object for example.

    cleanVars = _copyExcluding(vars, _reservedProps);

    if (prevStartAt) {
      prevStartAt._zTime < 0 && prevStartAt.progress(1); // in case it's a lazy startAt that hasn't rendered yet.

      time < 0 && runBackwards && immediateRender && !autoRevert ? prevStartAt.render(-1, true) : prevStartAt.revert(runBackwards && dur ? _revertConfigNoKill : _startAtRevertConfig); // if it's a "startAt" (not "from()" or runBackwards: true), we only need to do a shallow revert (keep transforms cached in CSSPlugin)
      // don't just _removeFromParent(prevStartAt.render(-1, true)) because that'll leave inline styles. We're creating a new _startAt for "startAt" tweens that re-capture things to ensure that if the pre-tween values changed since the tween was created, they're recorded.

      prevStartAt._lazy = 0;
    }

    if (startAt) {
      _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
        data: "isStart",
        overwrite: false,
        parent: parent,
        immediateRender: true,
        lazy: !prevStartAt && _isNotFalse(lazy),
        startAt: null,
        delay: 0,
        onUpdate: onUpdate && function () {
          return _callback(tween, "onUpdate");
        },
        stagger: 0
      }, startAt))); //copy the properties/values into a new object to avoid collisions, like var to = {x:0}, from = {x:500}; timeline.fromTo(e, from, to).fromTo(e, to, from);


      tween._startAt._dp = 0; // don't allow it to get put back into root timeline! Like when revert() is called and totalTime() gets set.

      tween._startAt._sat = tween; // used in globalTime(). _sat stands for _startAtTween

      time < 0 && (_reverting || !immediateRender && !autoRevert) && tween._startAt.revert(_revertConfigNoKill); // rare edge case, like if a render is forced in the negative direction of a non-initted tween.

      if (immediateRender) {
        if (dur && time <= 0 && tTime <= 0) {
          // check tTime here because in the case of a yoyo tween whose playhead gets pushed to the end like tween.progress(1), we should allow it through so that the onComplete gets fired properly.
          time && (tween._zTime = time);
          return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a Timeline, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
        }
      }
    } else if (runBackwards && dur) {
      //from() tweens must be handled uniquely: their beginning values must be rendered but we don't want overwriting to occur yet (when time is still 0). Wait until the tween actually begins before doing all the routines like overwriting. At that time, we should render at the END of the tween to ensure that things initialize correctly (remember, from() tweens go backwards)
      if (!prevStartAt) {
        time && (immediateRender = false); //in rare cases (like if a from() tween runs and then is invalidate()-ed), immediateRender could be true but the initial forced-render gets skipped, so there's no need to force the render in this context when the _time is greater than 0

        p = _setDefaults({
          overwrite: false,
          data: "isFromStart",
          //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
          lazy: immediateRender && !prevStartAt && _isNotFalse(lazy),
          immediateRender: immediateRender,
          //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
          stagger: 0,
          parent: parent //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})

        }, cleanVars);
        harnessVars && (p[harness.prop] = harnessVars); // in case someone does something like .from(..., {css:{}})

        _removeFromParent(tween._startAt = Tween.set(targets, p));

        tween._startAt._dp = 0; // don't allow it to get put back into root timeline!

        tween._startAt._sat = tween; // used in globalTime()

        time < 0 && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween._startAt.render(-1, true));
        tween._zTime = time;

        if (!immediateRender) {
          _initTween(tween._startAt, _tinyNum, _tinyNum); //ensures that the initial values are recorded

        } else if (!time) {
          return;
        }
      }
    }

    tween._pt = tween._ptCache = 0;
    lazy = dur && _isNotFalse(lazy) || lazy && !dur;

    for (i = 0; i < targets.length; i++) {
      target = targets[i];
      gsData = target._gsap || _harness(targets)[i]._gsap;
      tween._ptLookup[i] = ptLookup = {};
      _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender(); //if other tweens of the same target have recently initted but haven't rendered yet, we've got to force the render so that the starting values are correct (imagine populating a timeline with a bunch of sequential tweens and then jumping to the end)

      index = fullTargets === targets ? i : fullTargets.indexOf(target);

      if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
        tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);

        plugin._props.forEach(function (name) {
          ptLookup[name] = pt;
        });

        plugin.priority && (hasPriority = 1);
      }

      if (!harness || harnessVars) {
        for (p in cleanVars) {
          if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) {
            plugin.priority && (hasPriority = 1);
          } else {
            ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
          }
        }
      }

      tween._op && tween._op[i] && tween.kill(target, tween._op[i]);

      if (autoOverwrite && tween._pt) {
        _overwritingTween = tween;

        _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time)); // make sure the overwriting doesn't overwrite THIS tween!!!


        overwritten = !tween.parent;
        _overwritingTween = 0;
      }

      tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
    }

    hasPriority && _sortPropTweensByPriority(tween);
    tween._onInit && tween._onInit(tween); //plugins like RoundProps must wait until ALL of the PropTweens are instantiated. In the plugin's init() function, it sets the _onInit on the tween instance. May not be pretty/intuitive, but it's fast and keeps file size down.
  }

  tween._onUpdate = onUpdate;
  tween._initted = (!tween._op || tween._pt) && !overwritten; // if overwrittenProps resulted in the entire tween being killed, do NOT flag it as initted or else it may render for one tick.

  keyframes && time <= 0 && tl.render(_bigNum, true, true); // if there's a 0% keyframe, it'll render in the "before" state for any staggered/delayed animations thus when the following tween initializes, it'll use the "before" state instead of the "after" state as the initial values.
},
    _updatePropTweens = function _updatePropTweens(tween, property, value, start, startIsRelative, ratio, time, skipRecursion) {
  var ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property],
      pt,
      rootPT,
      lookup,
      i;

  if (!ptCache) {
    ptCache = tween._ptCache[property] = [];
    lookup = tween._ptLookup;
    i = tween._targets.length;

    while (i--) {
      pt = lookup[i][property];

      if (pt && pt.d && pt.d._pt) {
        // it's a plugin, so find the nested PropTween
        pt = pt.d._pt;

        while (pt && pt.p !== property && pt.fp !== property) {
          // "fp" is functionParam for things like setting CSS variables which require .setProperty("--var-name", value)
          pt = pt._next;
        }
      }

      if (!pt) {
        // there is no PropTween associated with that property, so we must FORCE one to be created and ditch out of this
        // if the tween has other properties that already rendered at new positions, we'd normally have to rewind to put them back like tween.render(0, true) before forcing an _initTween(), but that can create another edge case like tweening a timeline's progress would trigger onUpdates to fire which could move other things around. It's better to just inform users that .resetTo() should ONLY be used for tweens that already have that property. For example, you can't gsap.to(...{ y: 0 }) and then tween.restTo("x", 200) for example.
        _forceAllPropTweens = 1; // otherwise, when we _addPropTween() and it finds no change between the start and end values, it skips creating a PropTween (for efficiency...why tween when there's no difference?) but in this case we NEED that PropTween created so we can edit it.

        tween.vars[property] = "+=0";

        _initTween(tween, time);

        _forceAllPropTweens = 0;
        return skipRecursion ? _warn(property + " not eligible for reset") : 1; // if someone tries to do a quickTo() on a special property like borderRadius which must get split into 4 different properties, that's not eligible for .resetTo().
      }

      ptCache.push(pt);
    }
  }

  i = ptCache.length;

  while (i--) {
    rootPT = ptCache[i];
    pt = rootPT._pt || rootPT; // complex values may have nested PropTweens. We only accommodate the FIRST value.

    pt.s = (start || start === 0) && !startIsRelative ? start : pt.s + (start || 0) + ratio * pt.c;
    pt.c = value - pt.s;
    rootPT.e && (rootPT.e = _round(value) + getUnit(rootPT.e)); // mainly for CSSPlugin (end value)

    rootPT.b && (rootPT.b = pt.s + getUnit(rootPT.b)); // (beginning value)
  }
},
    _addAliasesToVars = function _addAliasesToVars(targets, vars) {
  var harness = targets[0] ? _getCache(targets[0]).harness : 0,
      propertyAliases = harness && harness.aliases,
      copy,
      p,
      i,
      aliases;

  if (!propertyAliases) {
    return vars;
  }

  copy = _merge({}, vars);

  for (p in propertyAliases) {
    if (p in copy) {
      aliases = propertyAliases[p].split(",");
      i = aliases.length;

      while (i--) {
        copy[aliases[i]] = copy[p];
      }
    }
  }

  return copy;
},
    // parses multiple formats, like {"0%": {x: 100}, {"50%": {x: -20}} and { x: {"0%": 100, "50%": -20} }, and an "ease" can be set on any object. We populate an "allProps" object with an Array for each property, like {x: [{}, {}], y:[{}, {}]} with data for each property tween. The objects have a "t" (time), "v", (value), and "e" (ease) property. This allows us to piece together a timeline later.
_parseKeyframe = function _parseKeyframe(prop, obj, allProps, easeEach) {
  var ease = obj.ease || easeEach || "power1.inOut",
      p,
      a;

  if (_isArray(obj)) {
    a = allProps[prop] || (allProps[prop] = []); // t = time (out of 100), v = value, e = ease

    obj.forEach(function (value, i) {
      return a.push({
        t: i / (obj.length - 1) * 100,
        v: value,
        e: ease
      });
    });
  } else {
    for (p in obj) {
      a = allProps[p] || (allProps[p] = []);
      p === "ease" || a.push({
        t: parseFloat(prop),
        v: obj[p],
        e: ease
      });
    }
  }
},
    _parseFuncOrString = function _parseFuncOrString(value, tween, i, target, targets) {
  return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
},
    _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    _staggerPropsToSkip = {};

_forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function (name) {
  return _staggerPropsToSkip[name] = 1;
});
/*
 * --------------------------------------------------------------------------------------
 * TWEEN
 * --------------------------------------------------------------------------------------
 */


var Tween = /*#__PURE__*/function (_Animation2) {
  _inheritsLoose(Tween, _Animation2);

  function Tween(targets, vars, position, skipInherit) {
    var _this3;

    if (typeof vars === "number") {
      position.duration = vars;
      vars = position;
      position = null;
    }

    _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
    var _this3$vars = _this3.vars,
        duration = _this3$vars.duration,
        delay = _this3$vars.delay,
        immediateRender = _this3$vars.immediateRender,
        stagger = _this3$vars.stagger,
        overwrite = _this3$vars.overwrite,
        keyframes = _this3$vars.keyframes,
        defaults = _this3$vars.defaults,
        scrollTrigger = _this3$vars.scrollTrigger,
        yoyoEase = _this3$vars.yoyoEase,
        parent = vars.parent || _globalTimeline,
        parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [targets] : toArray(targets),
        tl,
        i,
        copy,
        l,
        p,
        curTarget,
        staggerFunc,
        staggerVarsToMerge;
    _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://gsap.com", !_config.nullTargetWarn) || [];
    _this3._ptLookup = []; //PropTween lookup. An array containing an object for each target, having keys for each tweening property

    _this3._overwrite = overwrite;

    if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
      vars = _this3.vars;
      tl = _this3.timeline = new Timeline({
        data: "nested",
        defaults: defaults || {},
        targets: parent && parent.data === "nested" ? parent.vars.targets : parsedTargets
      }); // we need to store the targets because for staggers and keyframes, we end up creating an individual tween for each but function-based values need to know the index and the whole Array of targets.

      tl.kill();
      tl.parent = tl._dp = _assertThisInitialized(_this3);
      tl._start = 0;

      if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
        l = parsedTargets.length;
        staggerFunc = stagger && distribute(stagger);

        if (_isObject(stagger)) {
          //users can pass in callbacks like onStart/onComplete in the stagger object. These should fire with each individual tween.
          for (p in stagger) {
            if (~_staggerTweenProps.indexOf(p)) {
              staggerVarsToMerge || (staggerVarsToMerge = {});
              staggerVarsToMerge[p] = stagger[p];
            }
          }
        }

        for (i = 0; i < l; i++) {
          copy = _copyExcluding(vars, _staggerPropsToSkip);
          copy.stagger = 0;
          yoyoEase && (copy.yoyoEase = yoyoEase);
          staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
          curTarget = parsedTargets[i]; //don't just copy duration or delay because if they're a string or function, we'd end up in an infinite loop because _isFuncOrString() would evaluate as true in the child tweens, entering this loop, etc. So we parse the value straight from vars and default to 0.

          copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
          copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;

          if (!stagger && l === 1 && copy.delay) {
            // if someone does delay:"random(1, 5)", repeat:-1, for example, the delay shouldn't be inside the repeat.
            _this3._delay = delay = copy.delay;
            _this3._start += delay;
            copy.delay = 0;
          }

          tl.to(curTarget, copy, staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0);
          tl._ease = _easeMap.none;
        }

        tl.duration() ? duration = delay = 0 : _this3.timeline = 0; // if the timeline's duration is 0, we don't need a timeline internally!
      } else if (keyframes) {
        _inheritDefaults(_setDefaults(tl.vars.defaults, {
          ease: "none"
        }));

        tl._ease = _parseEase(keyframes.ease || vars.ease || "none");
        var time = 0,
            a,
            kf,
            v;

        if (_isArray(keyframes)) {
          keyframes.forEach(function (frame) {
            return tl.to(parsedTargets, frame, ">");
          });
          tl.duration(); // to ensure tl._dur is cached because we tap into it for performance purposes in the render() method.
        } else {
          copy = {};

          for (p in keyframes) {
            p === "ease" || p === "easeEach" || _parseKeyframe(p, keyframes[p], copy, keyframes.easeEach);
          }

          for (p in copy) {
            a = copy[p].sort(function (a, b) {
              return a.t - b.t;
            });
            time = 0;

            for (i = 0; i < a.length; i++) {
              kf = a[i];
              v = {
                ease: kf.e,
                duration: (kf.t - (i ? a[i - 1].t : 0)) / 100 * duration
              };
              v[p] = kf.v;
              tl.to(parsedTargets, v, time);
              time += v.duration;
            }
          }

          tl.duration() < duration && tl.to({}, {
            duration: duration - tl.duration()
          }); // in case keyframes didn't go to 100%
        }
      }

      duration || _this3.duration(duration = tl.duration());
    } else {
      _this3.timeline = 0; //speed optimization, faster lookups (no going up the prototype chain)
    }

    if (overwrite === true && !_suppressOverwrites) {
      _overwritingTween = _assertThisInitialized(_this3);

      _globalTimeline.killTweensOf(parsedTargets);

      _overwritingTween = 0;
    }

    _addToTimeline(parent, _assertThisInitialized(_this3), position);

    vars.reversed && _this3.reverse();
    vars.paused && _this3.paused(true);

    if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
      _this3._tTime = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)

      _this3.render(Math.max(0, -delay) || 0); //in case delay is negative

    }

    scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
    return _this3;
  }

  var _proto3 = Tween.prototype;

  _proto3.render = function render(totalTime, suppressEvents, force) {
    var prevTime = this._time,
        tDur = this._tDur,
        dur = this._dur,
        isNegative = totalTime < 0,
        tTime = totalTime > tDur - _tinyNum && !isNegative ? tDur : totalTime < _tinyNum ? 0 : totalTime,
        time,
        pt,
        iteration,
        cycleDuration,
        prevIteration,
        isYoyo,
        ratio,
        timeline,
        yoyoEase;

    if (!dur) {
      _renderZeroDurationTween(this, totalTime, suppressEvents, force);
    } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== isNegative || this._lazy) {
      // this senses if we're crossing over the start time, in which case we must record _zTime and force the render, but we do it in this lengthy conditional way for performance reasons (usually we can skip the calculations): this._initted && (this._zTime < 0) !== (totalTime < 0)
      time = tTime;
      timeline = this.timeline;

      if (this._repeat) {
        //adjust the time for repeats and yoyos
        cycleDuration = dur + this._rDelay;

        if (this._repeat < -1 && isNegative) {
          return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
        }

        time = _roundPrecise(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)

        if (tTime === tDur) {
          // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
          iteration = this._repeat;
          time = dur;
        } else {
          prevIteration = _roundPrecise(tTime / cycleDuration); // full decimal version of iterations, not the previous iteration (we're reusing prevIteration variable for efficiency)

          iteration = ~~prevIteration;

          if (iteration && iteration === prevIteration) {
            time = dur;
            iteration--;
          } else if (time > dur) {
            time = dur;
          }
        }

        isYoyo = this._yoyo && iteration & 1;

        if (isYoyo) {
          yoyoEase = this._yEase;
          time = dur - time;
        }

        prevIteration = _animationCycle(this._tTime, cycleDuration);

        if (time === prevTime && !force && this._initted && iteration === prevIteration) {
          //could be during the repeatDelay part. No need to render and fire callbacks.
          this._tTime = tTime;
          return this;
        }

        if (iteration !== prevIteration) {
          timeline && this._yEase && _propagateYoyoEase(timeline, isYoyo); //repeatRefresh functionality

          if (this.vars.repeatRefresh && !isYoyo && !this._lock && time !== cycleDuration && this._initted) {
            // this._time will === cycleDuration when we render at EXACTLY the end of an iteration. Without this condition, it'd often do the repeatRefresh render TWICE (again on the very next tick).
            this._lock = force = 1; //force, otherwise if lazy is true, the _attemptInitTween() will return and we'll jump out and get caught bouncing on each tick.

            this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
          }
        }
      }

      if (!this._initted) {
        if (_attemptInitTween(this, isNegative ? totalTime : time, force, suppressEvents, tTime)) {
          this._tTime = 0; // in constructor if immediateRender is true, we set _tTime to -_tinyNum to have the playhead cross the starting point but we can't leave _tTime as a negative number.

          return this;
        }

        if (prevTime !== this._time && !(force && this.vars.repeatRefresh && iteration !== prevIteration)) {
          // rare edge case - during initialization, an onUpdate in the _startAt (.fromTo()) might force this tween to render at a different spot in which case we should ditch this render() call so that it doesn't revert the values. But we also don't want to dump if we're doing a repeatRefresh render!
          return this;
        }

        if (dur !== this._dur) {
          // while initting, a plugin like InertiaPlugin might alter the duration, so rerun from the start to ensure everything renders as it should.
          return this.render(totalTime, suppressEvents, force);
        }
      }

      this._tTime = tTime;
      this._time = time;

      if (!this._act && this._ts) {
        this._act = 1; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.

        this._lazy = 0;
      }

      this.ratio = ratio = (yoyoEase || this._ease)(time / dur);

      if (this._from) {
        this.ratio = ratio = 1 - ratio;
      }

      if (time && !prevTime && !suppressEvents && !iteration) {
        _callback(this, "onStart");

        if (this._tTime !== tTime) {
          // in case the onStart triggered a render at a different spot, eject. Like if someone did animation.pause(0.5) or something inside the onStart.
          return this;
        }
      }

      pt = this._pt;

      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }

      timeline && timeline.render(totalTime < 0 ? totalTime : timeline._dur * timeline._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);

      if (this._onUpdate && !suppressEvents) {
        isNegative && _rewindStartAt(this, totalTime, suppressEvents, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.

        _callback(this, "onUpdate");
      }

      this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");

      if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
        isNegative && !this._onUpdate && _rewindStartAt(this, totalTime, true, true);
        (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if we're rendering at exactly a time of 0, as there could be autoRevert values that should get set on the next tick (if the playhead goes backward beyond the startTime, negative totalTime). Don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.

        if (!suppressEvents && !(isNegative && !prevTime) && (tTime || prevTime || isYoyo)) {
          // if prevTime and tTime are zero, we shouldn't fire the onReverseComplete. This could happen if you gsap.to(... {paused:true}).play();
          _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);

          this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
        }
      }
    }

    return this;
  };

  _proto3.targets = function targets() {
    return this._targets;
  };

  _proto3.invalidate = function invalidate(soft) {
    // "soft" gives us a way to clear out everything EXCEPT the recorded pre-"from" portion of from() tweens. Otherwise, for example, if you tween.progress(1).render(0, true true).invalidate(), the "from" values would persist and then on the next render, the from() tweens would initialize and the current value would match the "from" values, thus animate from the same value to the same value (no animation). We tap into this in ScrollTrigger's refresh() where we must push a tween to completion and then back again but honor its init state in case the tween is dependent on another tween further up on the page.
    (!soft || !this.vars.runBackwards) && (this._startAt = 0);
    this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0;
    this._ptLookup = [];
    this.timeline && this.timeline.invalidate(soft);
    return _Animation2.prototype.invalidate.call(this, soft);
  };

  _proto3.resetTo = function resetTo(property, value, start, startIsRelative, skipRecursion) {
    _tickerActive || _ticker.wake();
    this._ts || this.play();
    var time = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        ratio;
    this._initted || _initTween(this, time);
    ratio = this._ease(time / this._dur); // don't just get tween.ratio because it may not have rendered yet.
    // possible future addition to allow an object with multiple values to update, like tween.resetTo({x: 100, y: 200}); At this point, it doesn't seem worth the added kb given the fact that most users will likely opt for the convenient gsap.quickTo() way of interacting with this method.
    // if (_isObject(property)) { // performance optimization
    // 	for (p in property) {
    // 		if (_updatePropTweens(this, p, property[p], value ? value[p] : null, start, ratio, time)) {
    // 			return this.resetTo(property, value, start, startIsRelative); // if a PropTween wasn't found for the property, it'll get forced with a re-initialization so we need to jump out and start over again.
    // 		}
    // 	}
    // } else {

    if (_updatePropTweens(this, property, value, start, startIsRelative, ratio, time, skipRecursion)) {
      return this.resetTo(property, value, start, startIsRelative, 1); // if a PropTween wasn't found for the property, it'll get forced with a re-initialization so we need to jump out and start over again.
    } //}


    _alignPlayhead(this, 0);

    this.parent || _addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
    return this.render(0);
  };

  _proto3.kill = function kill(targets, vars) {
    if (vars === void 0) {
      vars = "all";
    }

    if (!targets && (!vars || vars === "all")) {
      this._lazy = this._pt = 0;
      this.parent ? _interrupt(this) : this.scrollTrigger && this.scrollTrigger.kill(!!_reverting);
      return this;
    }

    if (this.timeline) {
      var tDur = this.timeline.totalDuration();
      this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this); // if nothing is left tweening, interrupt.

      this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1); // if a nested tween is killed that changes the duration, it should affect this tween's duration. We must use the ratio, though, because sometimes the internal timeline is stretched like for keyframes where they don't all add up to whatever the parent tween's duration was set to.

      return this;
    }

    var parsedTargets = this._targets,
        killingTargets = targets ? toArray(targets) : parsedTargets,
        propTweenLookup = this._ptLookup,
        firstPT = this._pt,
        overwrittenProps,
        curLookup,
        curOverwriteProps,
        props,
        p,
        pt,
        i;

    if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
      vars === "all" && (this._pt = 0);
      return _interrupt(this);
    }

    overwrittenProps = this._op = this._op || [];

    if (vars !== "all") {
      //so people can pass in a comma-delimited list of property names
      if (_isString(vars)) {
        p = {};

        _forEachName(vars, function (name) {
          return p[name] = 1;
        });

        vars = p;
      }

      vars = _addAliasesToVars(parsedTargets, vars);
    }

    i = parsedTargets.length;

    while (i--) {
      if (~killingTargets.indexOf(parsedTargets[i])) {
        curLookup = propTweenLookup[i];

        if (vars === "all") {
          overwrittenProps[i] = vars;
          props = curLookup;
          curOverwriteProps = {};
        } else {
          curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
          props = vars;
        }

        for (p in props) {
          pt = curLookup && curLookup[p];

          if (pt) {
            if (!("kill" in pt.d) || pt.d.kill(p) === true) {
              _removeLinkedListItem(this, pt, "_pt");
            }

            delete curLookup[p];
          }

          if (curOverwriteProps !== "all") {
            curOverwriteProps[p] = 1;
          }
        }
      }
    }

    this._initted && !this._pt && firstPT && _interrupt(this); //if all tweening properties are killed, kill the tween. Without this line, if there's a tween with multiple targets and then you killTweensOf() each target individually, the tween would technically still remain active and fire its onComplete even though there aren't any more properties tweening.

    return this;
  };

  Tween.to = function to(targets, vars) {
    return new Tween(targets, vars, arguments[2]);
  };

  Tween.from = function from(targets, vars) {
    return _createTweenType(1, arguments);
  };

  Tween.delayedCall = function delayedCall(delay, callback, params, scope) {
    return new Tween(callback, 0, {
      immediateRender: false,
      lazy: false,
      overwrite: false,
      delay: delay,
      onComplete: callback,
      onReverseComplete: callback,
      onCompleteParams: params,
      onReverseCompleteParams: params,
      callbackScope: scope
    }); // we must use onReverseComplete too for things like timeline.add(() => {...}) which should be triggered in BOTH directions (forward and reverse)
  };

  Tween.fromTo = function fromTo(targets, fromVars, toVars) {
    return _createTweenType(2, arguments);
  };

  Tween.set = function set(targets, vars) {
    vars.duration = 0;
    vars.repeatDelay || (vars.repeat = 0);
    return new Tween(targets, vars);
  };

  Tween.killTweensOf = function killTweensOf(targets, props, onlyActive) {
    return _globalTimeline.killTweensOf(targets, props, onlyActive);
  };

  return Tween;
}(Animation);

_setDefaults(Tween.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
}); //add the pertinent timeline methods to Tween instances so that users can chain conveniently and create a timeline automatically. (removed due to concerns that it'd ultimately add to more confusion especially for beginners)
// _forEachName("to,from,fromTo,set,call,add,addLabel,addPause", name => {
// 	Tween.prototype[name] = function() {
// 		let tl = new Timeline();
// 		return _addToTimeline(tl, this)[name].apply(tl, toArray(arguments));
// 	}
// });
//for backward compatibility. Leverage the timeline calls.


_forEachName("staggerTo,staggerFrom,staggerFromTo", function (name) {
  Tween[name] = function () {
    var tl = new Timeline(),
        params = _slice.call(arguments, 0);

    params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
    return tl[name].apply(tl, params);
  };
});
/*
 * --------------------------------------------------------------------------------------
 * PROPTWEEN
 * --------------------------------------------------------------------------------------
 */


var _setterPlain = function _setterPlain(target, property, value) {
  return target[property] = value;
},
    _setterFunc = function _setterFunc(target, property, value) {
  return target[property](value);
},
    _setterFuncWithParam = function _setterFuncWithParam(target, property, value, data) {
  return target[property](data.fp, value);
},
    _setterAttribute = function _setterAttribute(target, property, value) {
  return target.setAttribute(property, value);
},
    _getSetter = function _getSetter(target, property) {
  return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
},
    _renderPlain = function _renderPlain(ratio, data) {
  return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1000000) / 1000000, data);
},
    _renderBoolean = function _renderBoolean(ratio, data) {
  return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
},
    _renderComplexString = function _renderComplexString(ratio, data) {
  var pt = data._pt,
      s = "";

  if (!ratio && data.b) {
    //b = beginning string
    s = data.b;
  } else if (ratio === 1 && data.e) {
    //e = ending string
    s = data.e;
  } else {
    while (pt) {
      s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 10000) / 10000) + s; //we use the "p" property for the text inbetween (like a suffix). And in the context of a complex string, the modifier (m) is typically just Math.round(), like for RGB colors.

      pt = pt._next;
    }

    s += data.c; //we use the "c" of the PropTween to store the final chunk of non-numeric text.
  }

  data.set(data.t, data.p, s, data);
},
    _renderPropTweens = function _renderPropTweens(ratio, data) {
  var pt = data._pt;

  while (pt) {
    pt.r(ratio, pt.d);
    pt = pt._next;
  }
},
    _addPluginModifier = function _addPluginModifier(modifier, tween, target, property) {
  var pt = this._pt,
      next;

  while (pt) {
    next = pt._next;
    pt.p === property && pt.modifier(modifier, tween, target);
    pt = next;
  }
},
    _killPropTweensOf = function _killPropTweensOf(property) {
  var pt = this._pt,
      hasNonDependentRemaining,
      next;

  while (pt) {
    next = pt._next;

    if (pt.p === property && !pt.op || pt.op === property) {
      _removeLinkedListItem(this, pt, "_pt");
    } else if (!pt.dep) {
      hasNonDependentRemaining = 1;
    }

    pt = next;
  }

  return !hasNonDependentRemaining;
},
    _setterWithModifier = function _setterWithModifier(target, property, value, data) {
  data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
},
    _sortPropTweensByPriority = function _sortPropTweensByPriority(parent) {
  var pt = parent._pt,
      next,
      pt2,
      first,
      last; //sorts the PropTween linked list in order of priority because some plugins need to do their work after ALL of the PropTweens were created (like RoundPropsPlugin and ModifiersPlugin)

  while (pt) {
    next = pt._next;
    pt2 = first;

    while (pt2 && pt2.pr > pt.pr) {
      pt2 = pt2._next;
    }

    if (pt._prev = pt2 ? pt2._prev : last) {
      pt._prev._next = pt;
    } else {
      first = pt;
    }

    if (pt._next = pt2) {
      pt2._prev = pt;
    } else {
      last = pt;
    }

    pt = next;
  }

  parent._pt = first;
}; //PropTween key: t = target, p = prop, r = renderer, d = data, s = start, c = change, op = overwriteProperty (ONLY populated when it's different than p), pr = priority, _next/_prev for the linked list siblings, set = setter, m = modifier, mSet = modifierSetter (the original setter, before a modifier was added)


var PropTween = /*#__PURE__*/function () {
  function PropTween(next, target, prop, start, change, renderer, data, setter, priority) {
    this.t = target;
    this.s = start;
    this.c = change;
    this.p = prop;
    this.r = renderer || _renderPlain;
    this.d = data || this;
    this.set = setter || _setterPlain;
    this.pr = priority || 0;
    this._next = next;

    if (next) {
      next._prev = this;
    }
  }

  var _proto4 = PropTween.prototype;

  _proto4.modifier = function modifier(func, tween, target) {
    this.mSet = this.mSet || this.set; //in case it was already set (a PropTween can only have one modifier)

    this.set = _setterWithModifier;
    this.m = func;
    this.mt = target; //modifier target

    this.tween = tween;
  };

  return PropTween;
}(); //Initialization tasks

_forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (name) {
  return _reservedProps[name] = 1;
});

_globals.TweenMax = _globals.TweenLite = Tween;
_globals.TimelineLite = _globals.TimelineMax = Timeline;
_globalTimeline = new Timeline({
  sortChildren: false,
  defaults: _defaults,
  autoRemoveChildren: true,
  id: "root",
  smoothChildTiming: true
});
_config.stringFilter = _colorStringFilter;

var _media = [],
    _listeners = {},
    _emptyArray = [],
    _lastMediaTime = 0,
    _contextID = 0,
    _dispatch = function _dispatch(type) {
  return (_listeners[type] || _emptyArray).map(function (f) {
    return f();
  });
},
    _onMediaChange = function _onMediaChange() {
  var time = Date.now(),
      matches = [];

  if (time - _lastMediaTime > 2) {
    _dispatch("matchMediaInit");

    _media.forEach(function (c) {
      var queries = c.queries,
          conditions = c.conditions,
          match,
          p,
          anyMatch,
          toggled;

      for (p in queries) {
        match = _win.matchMedia(queries[p]).matches; // Firefox doesn't update the "matches" property of the MediaQueryList object correctly - it only does so as it calls its change handler - so we must re-create a media query here to ensure it's accurate.

        match && (anyMatch = 1);

        if (match !== conditions[p]) {
          conditions[p] = match;
          toggled = 1;
        }
      }

      if (toggled) {
        c.revert();
        anyMatch && matches.push(c);
      }
    });

    _dispatch("matchMediaRevert");

    matches.forEach(function (c) {
      return c.onMatch(c, function (func) {
        return c.add(null, func);
      });
    });
    _lastMediaTime = time;

    _dispatch("matchMedia");
  }
};

var Context = /*#__PURE__*/function () {
  function Context(func, scope) {
    this.selector = scope && selector(scope);
    this.data = [];
    this._r = []; // returned/cleanup functions

    this.isReverted = false;
    this.id = _contextID++; // to work around issues that frameworks like Vue cause by making things into Proxies which make it impossible to do something like _media.indexOf(this) because "this" would no longer refer to the Context instance itself - it'd refer to a Proxy! We needed a way to identify the context uniquely

    func && this.add(func);
  }

  var _proto5 = Context.prototype;

  _proto5.add = function add(name, func, scope) {
    // possible future addition if we need the ability to add() an animation to a context and for whatever reason cannot create that animation inside of a context.add(() => {...}) function.
    // if (name && _isFunction(name.revert)) {
    // 	this.data.push(name);
    // 	return (name._ctx = this);
    // }
    if (_isFunction(name)) {
      scope = func;
      func = name;
      name = _isFunction;
    }

    var self = this,
        f = function f() {
      var prev = _context,
          prevSelector = self.selector,
          result;
      prev && prev !== self && prev.data.push(self);
      scope && (self.selector = selector(scope));
      _context = self;
      result = func.apply(self, arguments);
      _isFunction(result) && self._r.push(result);
      _context = prev;
      self.selector = prevSelector;
      self.isReverted = false;
      return result;
    };

    self.last = f;
    return name === _isFunction ? f(self, function (func) {
      return self.add(null, func);
    }) : name ? self[name] = f : f;
  };

  _proto5.ignore = function ignore(func) {
    var prev = _context;
    _context = null;
    func(this);
    _context = prev;
  };

  _proto5.getTweens = function getTweens() {
    var a = [];
    this.data.forEach(function (e) {
      return e instanceof Context ? a.push.apply(a, e.getTweens()) : e instanceof Tween && !(e.parent && e.parent.data === "nested") && a.push(e);
    });
    return a;
  };

  _proto5.clear = function clear() {
    this._r.length = this.data.length = 0;
  };

  _proto5.kill = function kill(revert, matchMedia) {
    var _this4 = this;

    if (revert) {
      (function () {
        var tweens = _this4.getTweens(),
            i = _this4.data.length,
            t;

        while (i--) {
          // Flip plugin tweens are very different in that they should actually be pushed to their end. The plugin replaces the timeline's .revert() method to do exactly that. But we also need to remove any of those nested tweens inside the flip timeline so that they don't get individually reverted.
          t = _this4.data[i];

          if (t.data === "isFlip") {
            t.revert();
            t.getChildren(true, true, false).forEach(function (tween) {
              return tweens.splice(tweens.indexOf(tween), 1);
            });
          }
        } // save as an object so that we can cache the globalTime for each tween to optimize performance during the sort


        tweens.map(function (t) {
          return {
            g: t._dur || t._delay || t._sat && !t._sat.vars.immediateRender ? t.globalTime(0) : -Infinity,
            t: t
          };
        }).sort(function (a, b) {
          return b.g - a.g || -Infinity;
        }).forEach(function (o) {
          return o.t.revert(revert);
        }); // note: all of the _startAt tweens should be reverted in reverse order that they were created, and they'll all have the same globalTime (-1) so the " || -1" in the sort keeps the order properly.

        i = _this4.data.length;

        while (i--) {
          // make sure we loop backwards so that, for example, SplitTexts that were created later on the same element get reverted first
          t = _this4.data[i];

          if (t instanceof Timeline) {
            if (t.data !== "nested") {
              t.scrollTrigger && t.scrollTrigger.revert();
              t.kill(); // don't revert() the timeline because that's duplicating efforts since we already reverted all the tweens
            }
          } else {
            !(t instanceof Tween) && t.revert && t.revert(revert);
          }
        }

        _this4._r.forEach(function (f) {
          return f(revert, _this4);
        });

        _this4.isReverted = true;
      })();
    } else {
      this.data.forEach(function (e) {
        return e.kill && e.kill();
      });
    }

    this.clear();

    if (matchMedia) {
      var i = _media.length;

      while (i--) {
        // previously, we checked _media.indexOf(this), but some frameworks like Vue enforce Proxy objects that make it impossible to get the proper result that way, so we must use a unique ID number instead.
        _media[i].id === this.id && _media.splice(i, 1);
      }
    }
  } // killWithCleanup() {
  // 	this.kill();
  // 	this._r.forEach(f => f(false, this));
  // }
  ;

  _proto5.revert = function revert(config) {
    this.kill(config || {});
  };

  return Context;
}();

var MatchMedia = /*#__PURE__*/function () {
  function MatchMedia(scope) {
    this.contexts = [];
    this.scope = scope;
    _context && _context.data.push(this);
  }

  var _proto6 = MatchMedia.prototype;

  _proto6.add = function add(conditions, func, scope) {
    _isObject(conditions) || (conditions = {
      matches: conditions
    });
    var context = new Context(0, scope || this.scope),
        cond = context.conditions = {},
        mq,
        p,
        active;
    _context && !context.selector && (context.selector = _context.selector); // in case a context is created inside a context. Like a gsap.matchMedia() that's inside a scoped gsap.context()

    this.contexts.push(context);
    func = context.add("onMatch", func);
    context.queries = conditions;

    for (p in conditions) {
      if (p === "all") {
        active = 1;
      } else {
        mq = _win.matchMedia(conditions[p]);

        if (mq) {
          _media.indexOf(context) < 0 && _media.push(context);
          (cond[p] = mq.matches) && (active = 1);
          mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
        }
      }
    }

    active && func(context, function (f) {
      return context.add(null, f);
    });
    return this;
  } // refresh() {
  // 	let time = _lastMediaTime,
  // 		media = _media;
  // 	_lastMediaTime = -1;
  // 	_media = this.contexts;
  // 	_onMediaChange();
  // 	_lastMediaTime = time;
  // 	_media = media;
  // }
  ;

  _proto6.revert = function revert(config) {
    this.kill(config || {});
  };

  _proto6.kill = function kill(revert) {
    this.contexts.forEach(function (c) {
      return c.kill(revert, true);
    });
  };

  return MatchMedia;
}();
/*
 * --------------------------------------------------------------------------------------
 * GSAP
 * --------------------------------------------------------------------------------------
 */


var _gsap = {
  registerPlugin: function registerPlugin() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    args.forEach(function (config) {
      return _createPlugin(config);
    });
  },
  timeline: function timeline(vars) {
    return new Timeline(vars);
  },
  getTweensOf: function getTweensOf(targets, onlyActive) {
    return _globalTimeline.getTweensOf(targets, onlyActive);
  },
  getProperty: function getProperty(target, property, unit, uncache) {
    _isString(target) && (target = toArray(target)[0]); //in case selector text or an array is passed in

    var getter = _getCache(target || {}).get,
        format = unit ? _passThrough : _numericIfPossible;

    unit === "native" && (unit = "");
    return !target ? target : !property ? function (property, unit, uncache) {
      return format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
    } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
  },
  quickSetter: function quickSetter(target, property, unit) {
    target = toArray(target);

    if (target.length > 1) {
      var setters = target.map(function (t) {
        return gsap.quickSetter(t, property, unit);
      }),
          l = setters.length;
      return function (value) {
        var i = l;

        while (i--) {
          setters[i](value);
        }
      };
    }

    target = target[0] || {};

    var Plugin = _plugins[property],
        cache = _getCache(target),
        p = cache.harness && (cache.harness.aliases || {})[property] || property,
        // in case it's an alias, like "rotate" for "rotation".
    setter = Plugin ? function (value) {
      var p = new Plugin();
      _quickTween._pt = 0;
      p.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
      p.render(1, p);
      _quickTween._pt && _renderPropTweens(1, _quickTween);
    } : cache.set(target, p);

    return Plugin ? setter : function (value) {
      return setter(target, p, unit ? value + unit : value, cache, 1);
    };
  },
  quickTo: function quickTo(target, property, vars) {
    var _setDefaults2;

    var tween = gsap.to(target, _setDefaults((_setDefaults2 = {}, _setDefaults2[property] = "+=0.1", _setDefaults2.paused = true, _setDefaults2.stagger = 0, _setDefaults2), vars || {})),
        func = function func(value, start, startIsRelative) {
      return tween.resetTo(property, value, start, startIsRelative);
    };

    func.tween = tween;
    return func;
  },
  isTweening: function isTweening(targets) {
    return _globalTimeline.getTweensOf(targets, true).length > 0;
  },
  defaults: function defaults(value) {
    value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
    return _mergeDeep(_defaults, value || {});
  },
  config: function config(value) {
    return _mergeDeep(_config, value || {});
  },
  registerEffect: function registerEffect(_ref3) {
    var name = _ref3.name,
        effect = _ref3.effect,
        plugins = _ref3.plugins,
        defaults = _ref3.defaults,
        extendTimeline = _ref3.extendTimeline;
    (plugins || "").split(",").forEach(function (pluginName) {
      return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
    });

    _effects[name] = function (targets, vars, tl) {
      return effect(toArray(targets), _setDefaults(vars || {}, defaults), tl);
    };

    if (extendTimeline) {
      Timeline.prototype[name] = function (targets, vars, position) {
        return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
      };
    }
  },
  registerEase: function registerEase(name, ease) {
    _easeMap[name] = _parseEase(ease);
  },
  parseEase: function parseEase(ease, defaultEase) {
    return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
  },
  getById: function getById(id) {
    return _globalTimeline.getById(id);
  },
  exportRoot: function exportRoot(vars, includeDelayedCalls) {
    if (vars === void 0) {
      vars = {};
    }

    var tl = new Timeline(vars),
        child,
        next;
    tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);

    _globalTimeline.remove(tl);

    tl._dp = 0; //otherwise it'll get re-activated when adding children and be re-introduced into _globalTimeline's linked list (then added to itself).

    tl._time = tl._tTime = _globalTimeline._time;
    child = _globalTimeline._first;

    while (child) {
      next = child._next;

      if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
        _addToTimeline(tl, child, child._start - child._delay);
      }

      child = next;
    }

    _addToTimeline(_globalTimeline, tl, 0);

    return tl;
  },
  context: function context(func, scope) {
    return func ? new Context(func, scope) : _context;
  },
  matchMedia: function matchMedia(scope) {
    return new MatchMedia(scope);
  },
  matchMediaRefresh: function matchMediaRefresh() {
    return _media.forEach(function (c) {
      var cond = c.conditions,
          found,
          p;

      for (p in cond) {
        if (cond[p]) {
          cond[p] = false;
          found = 1;
        }
      }

      found && c.revert();
    }) || _onMediaChange();
  },
  addEventListener: function addEventListener(type, callback) {
    var a = _listeners[type] || (_listeners[type] = []);
    ~a.indexOf(callback) || a.push(callback);
  },
  removeEventListener: function removeEventListener(type, callback) {
    var a = _listeners[type],
        i = a && a.indexOf(callback);
    i >= 0 && a.splice(i, 1);
  },
  utils: {
    wrap: wrap,
    wrapYoyo: wrapYoyo,
    distribute: distribute,
    random: random,
    snap: snap,
    normalize: normalize,
    getUnit: getUnit,
    clamp: clamp,
    splitColor: splitColor,
    toArray: toArray,
    selector: selector,
    mapRange: mapRange,
    pipe: pipe,
    unitize: unitize,
    interpolate: interpolate,
    shuffle: shuffle
  },
  install: _install,
  effects: _effects,
  ticker: _ticker,
  updateRoot: Timeline.updateRoot,
  plugins: _plugins,
  globalTimeline: _globalTimeline,
  core: {
    PropTween: PropTween,
    globals: _addGlobal,
    Tween: Tween,
    Timeline: Timeline,
    Animation: Animation,
    getCache: _getCache,
    _removeLinkedListItem: _removeLinkedListItem,
    reverting: function reverting() {
      return _reverting;
    },
    context: function context(toAdd) {
      if (toAdd && _context) {
        _context.data.push(toAdd);

        toAdd._ctx = _context;
      }

      return _context;
    },
    suppressOverwrites: function suppressOverwrites(value) {
      return _suppressOverwrites = value;
    }
  }
};

_forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function (name) {
  return _gsap[name] = Tween[name];
});

_ticker.add(Timeline.updateRoot);

_quickTween = _gsap.to({}, {
  duration: 0
}); // ---- EXTRA PLUGINS --------------------------------------------------------

var _getPluginPropTween = function _getPluginPropTween(plugin, prop) {
  var pt = plugin._pt;

  while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
    pt = pt._next;
  }

  return pt;
},
    _addModifiers = function _addModifiers(tween, modifiers) {
  var targets = tween._targets,
      p,
      i,
      pt;

  for (p in modifiers) {
    i = targets.length;

    while (i--) {
      pt = tween._ptLookup[i][p];

      if (pt && (pt = pt.d)) {
        if (pt._pt) {
          // is a plugin
          pt = _getPluginPropTween(pt, p);
        }

        pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
      }
    }
  }
},
    _buildModifierPlugin = function _buildModifierPlugin(name, modifier) {
  return {
    name: name,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function init(target, vars, tween) {
      tween._onInit = function (tween) {
        var temp, p;

        if (_isString(vars)) {
          temp = {};

          _forEachName(vars, function (name) {
            return temp[name] = 1;
          }); //if the user passes in a comma-delimited list of property names to roundProps, like "x,y", we round to whole numbers.


          vars = temp;
        }

        if (modifier) {
          temp = {};

          for (p in vars) {
            temp[p] = modifier(vars[p]);
          }

          vars = temp;
        }

        _addModifiers(tween, vars);
      };
    }
  };
}; //register core plugins


var gsap = _gsap.registerPlugin({
  name: "attr",
  init: function init(target, vars, tween, index, targets) {
    var p, pt, v;
    this.tween = tween;

    for (p in vars) {
      v = target.getAttribute(p) || "";
      pt = this.add(target, "setAttribute", (v || 0) + "", vars[p], index, targets, 0, 0, p);
      pt.op = p;
      pt.b = v; // record the beginning value so we can revert()

      this._props.push(p);
    }
  },
  render: function render(ratio, data) {
    var pt = data._pt;

    while (pt) {
      _reverting ? pt.set(pt.t, pt.p, pt.b, pt) : pt.r(ratio, pt.d); // if reverting, go back to the original (pt.b)

      pt = pt._next;
    }
  }
}, {
  name: "endArray",
  init: function init(target, value) {
    var i = value.length;

    while (i--) {
      this.add(target, i, target[i] || 0, value[i], 0, 0, 0, 0, 0, 1);
    }
  }
}, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap; //to prevent the core plugins from being dropped via aggressive tree shaking, we must include them in the variable declaration in this way.

Tween.version = Timeline.version = gsap.version = "3.12.7";
_coreReady = 1;
_windowExists() && _wake();
var Power0 = _easeMap.Power0,
    Power1 = _easeMap.Power1,
    Power2 = _easeMap.Power2,
    Power3 = _easeMap.Power3,
    Power4 = _easeMap.Power4,
    Linear = _easeMap.Linear,
    Quad = _easeMap.Quad,
    Cubic = _easeMap.Cubic,
    Quart = _easeMap.Quart,
    Quint = _easeMap.Quint,
    Strong = _easeMap.Strong,
    Elastic = _easeMap.Elastic,
    Back = _easeMap.Back,
    SteppedEase = _easeMap.SteppedEase,
    Bounce = _easeMap.Bounce,
    Sine = _easeMap.Sine,
    Expo = _easeMap.Expo,
    Circ = _easeMap.Circ;

 //export some internal methods/orojects for use in CSSPlugin so that we can externalize that file and allow custom builds that exclude it.



/***/ }),

/***/ "./node_modules/gsap/index.js":
/*!************************************!*\
  !*** ./node_modules/gsap/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Back: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Back),
/* harmony export */   Bounce: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Bounce),
/* harmony export */   CSSPlugin: () => (/* reexport safe */ _CSSPlugin_js__WEBPACK_IMPORTED_MODULE_1__.CSSPlugin),
/* harmony export */   Circ: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Circ),
/* harmony export */   Cubic: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Cubic),
/* harmony export */   Elastic: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Elastic),
/* harmony export */   Expo: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Expo),
/* harmony export */   Linear: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Linear),
/* harmony export */   Power0: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power0),
/* harmony export */   Power1: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power1),
/* harmony export */   Power2: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power2),
/* harmony export */   Power3: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power3),
/* harmony export */   Power4: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power4),
/* harmony export */   Quad: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Quad),
/* harmony export */   Quart: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Quart),
/* harmony export */   Quint: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Quint),
/* harmony export */   Sine: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Sine),
/* harmony export */   SteppedEase: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.SteppedEase),
/* harmony export */   Strong: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Strong),
/* harmony export */   TimelineLite: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.TimelineLite),
/* harmony export */   TimelineMax: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.TimelineMax),
/* harmony export */   TweenLite: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.TweenLite),
/* harmony export */   TweenMax: () => (/* binding */ TweenMaxWithCSS),
/* harmony export */   "default": () => (/* binding */ gsapWithCSS),
/* harmony export */   gsap: () => (/* binding */ gsapWithCSS)
/* harmony export */ });
/* harmony import */ var _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gsap-core.js */ "./node_modules/gsap/gsap-core.js");
/* harmony import */ var _CSSPlugin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CSSPlugin.js */ "./node_modules/gsap/CSSPlugin.js");


var gsapWithCSS = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(_CSSPlugin_js__WEBPACK_IMPORTED_MODULE_1__.CSSPlugin) || _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap,
    // to protect from tree shaking
TweenMaxWithCSS = gsapWithCSS.core.Tween;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/carcasse_ppo/utils/GaugeV2.vue?vue&type=style&index=0&id=294336fa&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/carcasse_ppo/utils/GaugeV2.vue?vue&type=style&index=0&id=294336fa&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.gauge[data-v-294336fa] {\r\n    margin: auto;\r\n    border-radius: 50%;\r\n    background-color: lightgray;\r\n    position: relative;\r\n    overflow: hidden;\n}\n.fill[data-v-294336fa] {\r\n    --p: 33%;\r\n    background: conic-gradient(var(--c) var(--p), 0, #e2e2e2);\r\n    height: 100%;\r\n    font-size: 28px;\n}\n.value[data-v-294336fa] {\r\n    z-index: 2;\r\n    color: #000;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-radius: 50%;\r\n    background-color: #fff;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n            user-select: none;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/carcasse_ppo/utils/ScoringScale.vue?vue&type=style&index=0&id=e4890906&scoped=true&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/carcasse_ppo/utils/ScoringScale.vue?vue&type=style&index=0&id=e4890906&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.score-scale[data-v-e4890906] {\r\n    display: flex;\n}\n.score-section div[data-v-e4890906] {\r\n    text-align: center;\r\n    padding: 10px 30px;\r\n    font-size: 1.5rem;\r\n    color: #fff;\r\n    clip-path: polygon(0 0, 100% 50%, 0 100%);\n}\n.tres-risque div[data-v-e4890906] {\r\n    background-color: #A82B1F;\n}\n.tres-risque p[data-v-e4890906] {\r\n    color: #A82B1F;\n}\n.risque div[data-v-e4890906] {\r\n    background-color: #E9661F;\n}\n.risque p[data-v-e4890906] {\r\n    color: #E9661F;\n}\n.acceptable div[data-v-e4890906] {\r\n    background-color: #B8C990;\n}\n.acceptable p[data-v-e4890906] {\r\n    color: #B8C990;\n}\n.bon div[data-v-e4890906] {\r\n    background-color: #6FC06F;\n}\n.bon p[data-v-e4890906] {\r\n    color: #6FC06F;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude/CA-CE3.vue?vue&type=style&index=0&id=2b15095c&lang=css&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude/CA-CE3.vue?vue&type=style&index=0&id=2b15095c&lang=css&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\ninput[data-v-2b15095c] {\r\n    /*border: 1px solid red;*/\n}\n*[data-v-2b15095c] {\r\n\r\n    font-family: \"Google sans\";\n}\nlabel[data-v-2b15095c] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ninput[data-v-2b15095c],\r\nselect[data-v-2b15095c] {\r\n    height: 35px;\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n.card-width-height[data-v-2b15095c] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-2b15095c] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-2b15095c] {\r\n    background-color: #57606f;\n}\n.relook-header[data-v-2b15095c] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 2px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\r\n\r\n\r\n/* Ajouter note */\n.badge-sm[data-v-2b15095c] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\ninput[type=checkbox][data-v-2b15095c] {\r\n    /* Double-sized Checkboxes */\r\n    /* IE */\r\n    /* FF */\r\n    /* Safari and Chrome */\r\n    /* Opera */\r\n    transform: scale(2);\r\n    padding: 10px;\n}\ninput[type=checkbox].form-check-input[data-v-2b15095c] {\r\n    /* IE */\r\n    /* FF */\r\n    /* Safari and Chrome */\r\n    /* Opera */\r\n    transform: scale(1);\r\n    padding: 0px;\n}\r\n\r\n/* Might want to wrap a span around your checkbox text */\n.checkboxtext[data-v-2b15095c] {\r\n    /* Checkbox text */\r\n    font-size: 110%;\r\n    display: inline;\n}\n[data-v-2b15095c]::-webkit-calendar-picker-indicator {}\n#secteur_activite[data-v-2b15095c] {\r\n    background: #00ffff21;\r\n    color: #000;\n}\n.to-uppercase[data-v-2b15095c] {\r\n    text-transform: uppercase;\n}\n.dossier-table[data-v-2b15095c] {\r\n    width: 100%;\n}\n.dossier-cell[data-v-2b15095c]{\r\n    text-align: center; \r\n    vertical-align: middle; \r\n    /* padding-top: 0 !important;\r\n    padding-bottom: 0 !important; */\n}\ntextarea[data-v-2b15095c] {\r\n    width: 100%;\n}\n.custom-width[data-v-2b15095c] {\r\n    max-width: 100px !important;\n}\n.custom-font-weight[data-v-2b15095c] {\r\n    font-weight: bold !important;\n}\n.head-memorandum-title[data-v-2b15095c] {\r\n    font-weight: bold !important;\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n    border: 1px solid;\r\n    margin-bottom: 10px;\r\n    padding: 4px;\r\n    caption-side:top;\n}\n.bg-blue[data-v-2b15095c] {\r\n    background-color: #00ffff21 !important;\n}\n.table th[data-v-2b15095c], .table td[data-v-2b15095c] {\r\n        text-align: center;\r\n        vertical-align: middle;\n}\n.col-question[data-v-2b15095c] {\r\n        width: 15%;\n}\n.col-attribut[data-v-2b15095c] {\r\n        width: 35%;\n}\n.col-note[data-v-2b15095c] {\r\n        width: 10%;\n}\n.col-ponderation[data-v-2b15095c] {\r\n        width: 10%;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/carcasse_ppo/utils/GaugeV2.vue?vue&type=style&index=0&id=294336fa&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/carcasse_ppo/utils/GaugeV2.vue?vue&type=style&index=0&id=294336fa&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GaugeV2_vue_vue_type_style_index_0_id_294336fa_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GaugeV2.vue?vue&type=style&index=0&id=294336fa&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/carcasse_ppo/utils/GaugeV2.vue?vue&type=style&index=0&id=294336fa&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GaugeV2_vue_vue_type_style_index_0_id_294336fa_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GaugeV2_vue_vue_type_style_index_0_id_294336fa_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/carcasse_ppo/utils/ScoringScale.vue?vue&type=style&index=0&id=e4890906&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/carcasse_ppo/utils/ScoringScale.vue?vue&type=style&index=0&id=e4890906&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ScoringScale_vue_vue_type_style_index_0_id_e4890906_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ScoringScale.vue?vue&type=style&index=0&id=e4890906&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/carcasse_ppo/utils/ScoringScale.vue?vue&type=style&index=0&id=e4890906&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ScoringScale_vue_vue_type_style_index_0_id_e4890906_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ScoringScale_vue_vue_type_style_index_0_id_e4890906_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude/CA-CE3.vue?vue&type=style&index=0&id=2b15095c&lang=css&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude/CA-CE3.vue?vue&type=style&index=0&id=2b15095c&lang=css&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA_CE3_vue_vue_type_style_index_0_id_2b15095c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA-CE3.vue?vue&type=style&index=0&id=2b15095c&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude/CA-CE3.vue?vue&type=style&index=0&id=2b15095c&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA_CE3_vue_vue_type_style_index_0_id_2b15095c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA_CE3_vue_vue_type_style_index_0_id_2b15095c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/forms/afg/carcasse_ppo/utils/GaugeV2.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/forms/afg/carcasse_ppo/utils/GaugeV2.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GaugeV2_vue_vue_type_template_id_294336fa_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GaugeV2.vue?vue&type=template&id=294336fa&scoped=true */ "./resources/js/components/forms/afg/carcasse_ppo/utils/GaugeV2.vue?vue&type=template&id=294336fa&scoped=true");
/* harmony import */ var _GaugeV2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GaugeV2.vue?vue&type=script&lang=js */ "./resources/js/components/forms/afg/carcasse_ppo/utils/GaugeV2.vue?vue&type=script&lang=js");
/* harmony import */ var _GaugeV2_vue_vue_type_style_index_0_id_294336fa_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GaugeV2.vue?vue&type=style&index=0&id=294336fa&scoped=true&lang=css */ "./resources/js/components/forms/afg/carcasse_ppo/utils/GaugeV2.vue?vue&type=style&index=0&id=294336fa&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _GaugeV2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _GaugeV2_vue_vue_type_template_id_294336fa_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _GaugeV2_vue_vue_type_template_id_294336fa_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "294336fa",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/forms/afg/carcasse_ppo/utils/GaugeV2.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/afg/carcasse_ppo/utils/GaugeV2.vue?vue&type=script&lang=js":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/carcasse_ppo/utils/GaugeV2.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GaugeV2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GaugeV2.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/carcasse_ppo/utils/GaugeV2.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GaugeV2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/afg/carcasse_ppo/utils/GaugeV2.vue?vue&type=style&index=0&id=294336fa&scoped=true&lang=css":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/carcasse_ppo/utils/GaugeV2.vue?vue&type=style&index=0&id=294336fa&scoped=true&lang=css ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GaugeV2_vue_vue_type_style_index_0_id_294336fa_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GaugeV2.vue?vue&type=style&index=0&id=294336fa&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/carcasse_ppo/utils/GaugeV2.vue?vue&type=style&index=0&id=294336fa&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/forms/afg/carcasse_ppo/utils/GaugeV2.vue?vue&type=template&id=294336fa&scoped=true":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/carcasse_ppo/utils/GaugeV2.vue?vue&type=template&id=294336fa&scoped=true ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GaugeV2_vue_vue_type_template_id_294336fa_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GaugeV2_vue_vue_type_template_id_294336fa_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GaugeV2_vue_vue_type_template_id_294336fa_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GaugeV2.vue?vue&type=template&id=294336fa&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/carcasse_ppo/utils/GaugeV2.vue?vue&type=template&id=294336fa&scoped=true");


/***/ }),

/***/ "./resources/js/components/forms/afg/carcasse_ppo/utils/GetScoringColor.js":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/forms/afg/carcasse_ppo/utils/GetScoringColor.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFillColor: () => (/* binding */ getFillColor),
/* harmony export */   getScale: () => (/* binding */ getScale),
/* harmony export */   getScoringMsg: () => (/* binding */ getScoringMsg),
/* harmony export */   getScoringObservation: () => (/* binding */ getScoringObservation)
/* harmony export */ });
var getFillColor = function getFillColor(score) {
  if (score <= 380) {
    return "#ae3712";
  } else if (score <= 475) {
    return "#db5d25";
  } else if (score <= 760) {
    return "#a1b979";
  } else {
    return "#5dcb65";
  }
};
var getScale = function getScale(score) {
  if (score <= 380) {
    return "D";
  } else if (score <= 475) {
    return "C";
  } else if (score <= 760) {
    return "B";
  } else {
    return "A";
  }
};
var getScoringMsg = function getScoringMsg(score) {
  if (score <= 380) {
    return "Vous pourriez avoir beaucoup de difficultés à rembourser ce emprunt.";
  } else if (score <= 475) {
    return "Vous pourriez avoir quelques difficultés à rembourser cet emprunt.";
  } else if (score <= 760) {
    return "Votre demande est acceptable et réaliste";
  } else if (score <= 950) {
    return "Vous avez la capacité de rembourser votre prêt; Votre demande ne présente aucune difficulté particulière";
  } else {
    return "Vous n'aurez aucune difficulté à rembourser votre prêt";
  }
};
var getScoringObservation = function getScoringObservation(score) {
  return score <= 475 ? "Risqué" : "Banquable";
};

/***/ }),

/***/ "./resources/js/components/forms/afg/carcasse_ppo/utils/ScoringScale.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/forms/afg/carcasse_ppo/utils/ScoringScale.vue ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ScoringScale_vue_vue_type_template_id_e4890906_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScoringScale.vue?vue&type=template&id=e4890906&scoped=true */ "./resources/js/components/forms/afg/carcasse_ppo/utils/ScoringScale.vue?vue&type=template&id=e4890906&scoped=true");
/* harmony import */ var _ScoringScale_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScoringScale.vue?vue&type=script&lang=js */ "./resources/js/components/forms/afg/carcasse_ppo/utils/ScoringScale.vue?vue&type=script&lang=js");
/* harmony import */ var _ScoringScale_vue_vue_type_style_index_0_id_e4890906_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ScoringScale.vue?vue&type=style&index=0&id=e4890906&scoped=true&lang=css */ "./resources/js/components/forms/afg/carcasse_ppo/utils/ScoringScale.vue?vue&type=style&index=0&id=e4890906&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ScoringScale_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ScoringScale_vue_vue_type_template_id_e4890906_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _ScoringScale_vue_vue_type_template_id_e4890906_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "e4890906",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/forms/afg/carcasse_ppo/utils/ScoringScale.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/afg/carcasse_ppo/utils/ScoringScale.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/carcasse_ppo/utils/ScoringScale.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScoringScale_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ScoringScale.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/carcasse_ppo/utils/ScoringScale.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScoringScale_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/afg/carcasse_ppo/utils/ScoringScale.vue?vue&type=style&index=0&id=e4890906&scoped=true&lang=css":
/*!***************************************************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/carcasse_ppo/utils/ScoringScale.vue?vue&type=style&index=0&id=e4890906&scoped=true&lang=css ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ScoringScale_vue_vue_type_style_index_0_id_e4890906_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ScoringScale.vue?vue&type=style&index=0&id=e4890906&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/carcasse_ppo/utils/ScoringScale.vue?vue&type=style&index=0&id=e4890906&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/forms/afg/carcasse_ppo/utils/ScoringScale.vue?vue&type=template&id=e4890906&scoped=true":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/carcasse_ppo/utils/ScoringScale.vue?vue&type=template&id=e4890906&scoped=true ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ScoringScale_vue_vue_type_template_id_e4890906_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ScoringScale_vue_vue_type_template_id_e4890906_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ScoringScale_vue_vue_type_template_id_e4890906_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ScoringScale.vue?vue&type=template&id=e4890906&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/carcasse_ppo/utils/ScoringScale.vue?vue&type=template&id=e4890906&scoped=true");


/***/ }),

/***/ "./resources/js/components/forms/afg/carcasse_ppo/utils/ScoringView.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/components/forms/afg/carcasse_ppo/utils/ScoringView.vue ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ScoringView_vue_vue_type_template_id_ab87c27c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScoringView.vue?vue&type=template&id=ab87c27c */ "./resources/js/components/forms/afg/carcasse_ppo/utils/ScoringView.vue?vue&type=template&id=ab87c27c");
/* harmony import */ var _ScoringView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScoringView.vue?vue&type=script&lang=js */ "./resources/js/components/forms/afg/carcasse_ppo/utils/ScoringView.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ScoringView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ScoringView_vue_vue_type_template_id_ab87c27c__WEBPACK_IMPORTED_MODULE_0__.render,
  _ScoringView_vue_vue_type_template_id_ab87c27c__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/forms/afg/carcasse_ppo/utils/ScoringView.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/afg/carcasse_ppo/utils/ScoringView.vue?vue&type=script&lang=js":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/carcasse_ppo/utils/ScoringView.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScoringView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ScoringView.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/carcasse_ppo/utils/ScoringView.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScoringView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/afg/carcasse_ppo/utils/ScoringView.vue?vue&type=template&id=ab87c27c":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/carcasse_ppo/utils/ScoringView.vue?vue&type=template&id=ab87c27c ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ScoringView_vue_vue_type_template_id_ab87c27c__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ScoringView_vue_vue_type_template_id_ab87c27c__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ScoringView_vue_vue_type_template_id_ab87c27c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ScoringView.vue?vue&type=template&id=ab87c27c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/carcasse_ppo/utils/ScoringView.vue?vue&type=template&id=ab87c27c");


/***/ }),

/***/ "./resources/js/components/forms/afg/carcasse_ppo/utils/echelle_edane.png":
/*!********************************************************************************!*\
  !*** ./resources/js/components/forms/afg/carcasse_ppo/utils/echelle_edane.png ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "/images/echelle_edane.png?0fe3b5868d21c51e200651bba4ea8ba4";

/***/ }),

/***/ "./resources/js/components/forms/afg/contre_etude/CA-CE3.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/forms/afg/contre_etude/CA-CE3.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CA_CE3_vue_vue_type_template_id_2b15095c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CA-CE3.vue?vue&type=template&id=2b15095c&scoped=true */ "./resources/js/components/forms/afg/contre_etude/CA-CE3.vue?vue&type=template&id=2b15095c&scoped=true");
/* harmony import */ var _CA_CE3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CA-CE3.vue?vue&type=script&lang=js */ "./resources/js/components/forms/afg/contre_etude/CA-CE3.vue?vue&type=script&lang=js");
/* harmony import */ var _CA_CE3_vue_vue_type_style_index_0_id_2b15095c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CA-CE3.vue?vue&type=style&index=0&id=2b15095c&lang=css&scoped=true */ "./resources/js/components/forms/afg/contre_etude/CA-CE3.vue?vue&type=style&index=0&id=2b15095c&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CA_CE3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CA_CE3_vue_vue_type_template_id_2b15095c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _CA_CE3_vue_vue_type_template_id_2b15095c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2b15095c",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/forms/afg/contre_etude/CA-CE3.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/afg/contre_etude/CA-CE3.vue?vue&type=script&lang=js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/contre_etude/CA-CE3.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CA_CE3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA-CE3.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude/CA-CE3.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CA_CE3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/afg/contre_etude/CA-CE3.vue?vue&type=style&index=0&id=2b15095c&lang=css&scoped=true":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/contre_etude/CA-CE3.vue?vue&type=style&index=0&id=2b15095c&lang=css&scoped=true ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA_CE3_vue_vue_type_style_index_0_id_2b15095c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA-CE3.vue?vue&type=style&index=0&id=2b15095c&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude/CA-CE3.vue?vue&type=style&index=0&id=2b15095c&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/forms/afg/contre_etude/CA-CE3.vue?vue&type=template&id=2b15095c&scoped=true":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/contre_etude/CA-CE3.vue?vue&type=template&id=2b15095c&scoped=true ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA_CE3_vue_vue_type_template_id_2b15095c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA_CE3_vue_vue_type_template_id_2b15095c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA_CE3_vue_vue_type_template_id_2b15095c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA-CE3.vue?vue&type=template&id=2b15095c&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude/CA-CE3.vue?vue&type=template&id=2b15095c&scoped=true");


/***/ })

}]);