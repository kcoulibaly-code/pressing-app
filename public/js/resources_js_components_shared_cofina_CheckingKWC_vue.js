"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_shared_cofina_CheckingKWC_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/cofina/CheckingKWC.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/cofina/CheckingKWC.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_proxy_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/proxy.service */ "./resources/js/services/proxy.service.js");
/* harmony import */ var _services_connects_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/connects.service */ "./resources/js/services/connects.service.js");
/* harmony import */ var _lynxeye_Detail_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lynxeye/Detail.vue */ "./resources/js/components/lynxeye/Detail.vue");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "CheckingKWC",
  directives: {
    'numbers-only': {
      bind: function bind(el) {
        el.addEventListener('input', function () {
          el.value = el.value.replace(/[^0-9]/g, '');
          if (value !== e.target.value) {
            e.target.dispatchEvent(new Event('input'));
          }
        });
      }
    }
  },
  components: {
    Detail: _lynxeye_Detail_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    dossier_credit: Object,
    server: String,
    filiale: String
  },
  computed: {
    cleanAutreReferent: function cleanAutreReferent() {
      var _this$dossier_credit,
        _kwc_checklist$checke,
        _this = this;
      var tabs = {};
      var kwc_checklist = (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.kwc_checklist;
      var entries = kwc_checklist === null || kwc_checklist === void 0 || (_kwc_checklist$checke = kwc_checklist.checker_one) === null || _kwc_checklist$checke === void 0 ? void 0 : _kwc_checklist$checke.entries;
      if (![undefined, null, ''].includes(entries)) {
        tabs = entries === null || entries === void 0 ? void 0 : entries.autre_referent;
        if (![undefined, null, ''].includes(tabs)) {
          var _tabs;
          return (_tabs = tabs) === null || _tabs === void 0 ? void 0 : _tabs.filter(function (el) {
            return !_this.isEmpty(el);
          });
        } else {
          return [];
        }
      }
      return [];
    },
    iconClass: function iconClass() {
      return this.isHovered ? 'icofont-ui-delete' : 'icofont-trash';
    },
    typeClient: function typeClient() {
      var _this$dossier_credit$;
      var typeClient;
      var applied_templ_name = this.dossier_credit.applied_templ_name;
      typeClient = (_this$dossier_credit$ = this.dossier_credit[this.determineCredPubTables(applied_templ_name)[0]]) === null || _this$dossier_credit$ === void 0 ? void 0 : _this$dossier_credit$.type_de_clientele;
      return typeClient;
    }
  },
  mounted: function mounted() {
    var _this2 = this;
    this.whatWouldBeDone();
    this.getFiles();
    // EventBus.$on("come-back-for-ajournament-checklist",()=>this.isLoading = true)

    EventBus.$on("created-extra-file-template", function (data) {
      var slug_tb = ["actionnaires", "caution_solidaires", "dirigeants", "autre_referent"];
      //  const template_name = "Pièce jointe -verification_cni" + '_' + this.$route.params.templateId
      for (var _i = 0, _slug_tb = slug_tb; _i < _slug_tb.length; _i++) {
        var slug = _slug_tb[_i];
        if (![null, undefined, ''].includes(_this2[slug])) {
          if (![null, undefined, 0].includes(_this2[slug])) {
            for (var index = 0; index < _this2[slug].length; index++) {
              var _data$template;
              var template_name = "Pi\xE8ce jointe -".concat(slug, "_kwc_checklist") + index + '_' + _this2.$route.params.templateId;
              if (template_name == (data === null || data === void 0 || (_data$template = data.template) === null || _data$template === void 0 ? void 0 : _data$template.name)) {
                var _data$template2, _data$template3, _data$template4;
                _this2[slug][index]["template"] = {
                  id: data === null || data === void 0 || (_data$template2 = data.template) === null || _data$template2 === void 0 ? void 0 : _data$template2.id,
                  name: data === null || data === void 0 || (_data$template3 = data.template) === null || _data$template3 === void 0 ? void 0 : _data$template3.name,
                  slug: data === null || data === void 0 || (_data$template4 = data.template) === null || _data$template4 === void 0 ? void 0 : _data$template4.slug
                };
              }
            }
          }
        }
      }
      _this2.buildCHecklist();
    });
    EventBus.$on("extra-files-uploaded", function (data) {
      var slug_tb = ["actionnaires", "caution_solidaires", "dirigeants", "autre_referent"];
      //  const template_name = "Pièce jointe -verification_cni" + '_' + this.$route.params.templateId
      var _loop = function _loop() {
        var slug = _slug_tb2[_i2];
        var caution_added = _this2[slug];
        if (![undefined, null, ''].includes(caution_added)) {
          if (![undefined, null, 0].includes(caution_added.length)) {
            if ((caution_added === null || caution_added === void 0 ? void 0 : caution_added.length) > 0) {
              caution_added.forEach(function (element, index) {
                var _element$template2, _data$template6;
                var files = [];
                data.files.forEach(function (file) {
                  var _element$template, _data$template5;
                  if ((file === null || file === void 0 ? void 0 : file.extra_file_template_id) != null && (element === null || element === void 0 || (_element$template = element.template) === null || _element$template === void 0 ? void 0 : _element$template.id) == (data === null || data === void 0 || (_data$template5 = data.template) === null || _data$template5 === void 0 ? void 0 : _data$template5.id)) {
                    files.push(file);
                  }
                });
                if ((element === null || element === void 0 || (_element$template2 = element.template) === null || _element$template2 === void 0 ? void 0 : _element$template2.id) == (data === null || data === void 0 || (_data$template6 = data.template) === null || _data$template6 === void 0 ? void 0 : _data$template6.id)) {
                  var updatedArray = _toConsumableArray(_this2[slug]);
                  updatedArray[index] = _objectSpread(_objectSpread({}, updatedArray[index]), {}, {
                    files: files,
                    nb_files: (files === null || files === void 0 ? void 0 : files.length) || 0
                  });
                  _this2[slug] = updatedArray;
                }
              });
            }
          }
        }
      };
      for (var _i2 = 0, _slug_tb2 = slug_tb; _i2 < _slug_tb2.length; _i2++) {
        _loop();
      }
      _this2.buildCHecklist();
    });
  },
  data: function data() {
    return {
      connectsHost: _services_connects_service__WEBPACK_IMPORTED_MODULE_1__["default"].loadablehost(),
      seen_caution: {},
      seenActionnaires: {},
      seenDirigeants: {},
      currentAccordion: null,
      isLoading: false,
      schema: {
        nom_prenoms: "",
        date_naissance: "",
        lieu_naissance: "",
        nature_piece: "",
        numero_piece_identite: "",
        piece_authentified: ""
      },
      actionnaires: [{
        nom_prenoms: "",
        date_naissance: "",
        lieu_naissance: "",
        nature_piece: "",
        numero_piece_identite: "",
        piece_authentified: ""
      }],
      dirigeants: [{
        nom_prenoms: "",
        date_naissance: "",
        lieu_naissance: "",
        nature_piece: "",
        numero_piece_identite: "",
        piece_authentified: ""
      }],
      cautions: {
        detected_caution_sys: null,
        add_caution: ""
      },
      autre_referent: [{
        nom_prenoms: "",
        date_naissance: "",
        lieu_naissance: "",
        nature_piece: "",
        numero_piece_identite: "",
        piece_authentified: ""
      }],
      caution_solidaires: [],
      keysToHave: ["actionnaires", "dirigeants", "cautions", "autre_referent"],
      attributs: {
        UIN: "Nom",
        FIRST_NAME: "Nom",
        LAST_NAME: "Prenoms",
        BIRTH_DATE: "Date de naissance",
        GENDER: "Sexe",
        BIRTH_TOWN: "Lieu de naissance",
        BIRTH_COUNTRY: "Pays de naissance",
        RESIDENCE_ADR_1: "Adresse 1",
        RESIDENCE_ADR_2: "Adresse 2",
        RESIDENCE_TOWN: "Ville de residence",
        MOTHER_UIN: "NNI de la mère",
        FATHER_UIN: "NNI du père",
        ID_CARD_NUMBER: "Numero CNI",
        SPOUSE_NAME: "Conjoint(e)",
        FATHER_FIRST_NAME: "Nom du père",
        FATHER_LAST_NAME: "Prenoms du père",
        FATHER_BIRTH_DATE: "Date de naissance du père",
        MOTHER_FIRST_NAME: "Nom de la mère",
        MOTHER_LAST_NAME: "Prenoms de la mère",
        MOTHER_BIRTH_DATE: "Date de naissance de la mère",
        PROFESSION: "Prefession",
        NATIONALITY: "Nationalité"
      },
      error_message: "",
      idCardData: null,
      verifying: {},
      conformite_donnees: {
        donnees_verifiees: ""
      },
      seenAutreRef: {},
      categorieCreditConso: ['Crédit conso', 'Cofi-Express', "Fin'express"],
      messageError: null,
      verificationAutoLoading: false
    };
  },
  methods: {
    systemVerification: function systemVerification() {
      var errorOccured = false;
      this.verificationAutoLoading = true;
      this.messageError = {};
      var cardData = this.idCardData;
      var index = cardData.index;
      var section = cardData.vars;
      var inputedByCaf = this[section][index];
      var nom_prenoms = inputedByCaf.nom_prenoms;
      var first_name = cardData.first_name;
      var last_name = cardData.last_name;

      // Verifier si last name est dans nom_prenoms saisi par le CAF
      var t = nom_prenoms.split(' ');
      var ft = first_name.split(' ');
      var lt = last_name.split(' ');
      var allNames = [].concat(_toConsumableArray(ft), _toConsumableArray(lt));
      var _iterator = _createForOfIteratorHelper(allNames),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var n = _step.value;
          if (!t.map(function (el) {
            return el.toLowerCase();
          }).includes(n.toLowerCase())) {
            this.messageError['error_type'] = "UN_MATCH";
            this.messageError['message'] = "Unmatchable filed";
            // console.log(`this name: ${n} not in nom_prenoms`)
            errorOccured = true;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      var fieldset = ![undefined, null, ''].includes(this.messageError['fieldset']) ? this.messageError['fieldset'] : {};
      if (errorOccured) {
        this.messageError['fieldset'] = _objectSpread(_objectSpread({}, fieldset), {}, {
          nom_prenoms: nom_prenoms
        });
      }
      // const date_naissance = cardData.date_naissance
      // if (date_naissance != inputedByCaf.date_naissance) {
      //     this.messageError['fieldset'] =  {...fieldset, date_naissance: date_naissance}
      // }
      // const lieu_naissance = cardData.lieu_naissance
      // if (lieu_naissance != inputedByCaf.lieu_naissance) {
      //     this.messageError['fieldset'] =  {...fieldset, lieu_naissance: lieu_naissance}
      // }
      console.log("nom_prenoms en tableau", t);
      this.verificationAutoLoading = false;
      return !errorOccured;
    },
    setDateInput: function setDateInput(event) {
      var objectName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var property = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      if (this[objectName].length > 0) {
        var element = _objectSpread(_objectSpread({}, this[objectName][index]), {}, {
          date_naissance: event[1]
        });
        this[objectName][index] = element;
      }
      this[objectName][index][property] = event[1];
      this.buildCHecklist();
    },
    isEmpty: function isEmpty(el) {
      if (![undefined, null, ''].includes(el)) {
        for (var _i3 = 0, _Object$entries = Object.entries(el); _i3 < _Object$entries.length; _i3++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i3], 2),
            key = _Object$entries$_i[0],
            _value = _Object$entries$_i[1];
          if (Array.isArray(el[key])) {
            var _el$key;
            if (((_el$key = el[key]) === null || _el$key === void 0 ? void 0 : _el$key.length) > 0) {
              return false;
            }
          } else {
            if (![undefined, '', null, 0].includes(_value)) {
              return false;
            }
          }
        }
        return true;
      }
      return true;
    },
    resetVerification: function resetVerification(obj) {
      obj.piece_authentified = "";
      obj.id_card_data = null;
      this.buildCHecklist();
    },
    sendDecision: function sendDecision() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var res;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _this3.isLoading = true;

              // let data = {msg:msg, actionToBePerformed: "AVIS FAVORABLE", priorCheckDone:true}
              // const MIX_ONECI_ALLOW_VERIFICATION = process.env.MIX_ONECI_ALLOW_VERIFICATION
              // console.log("MIX_ONECI_ALLOW_VERIFICATION",process.env.MIX_ONECI_ALLOW_VERIFICATION)
              _context.next = 3;
              return _this3.doCheckBeforePub();
            case 3:
              res = _context.sent;
              // if ([true, "true",].includes(MIX_ONECI_ALLOW_VERIFICATION)) {
              // }
              // else {
              //     res = { success: true }
              //     this.buildCHecklist()
              // }

              if (res.success) {
                _this3.$emit('can-continuous-publication', true);
                _this3.$emit('closeCheckingKWC');
              } else {
                if (res.field === "piece_authentified") {
                  _this3.$toasted.show("Veuillez proc\xE9der \xE0 la verification de la pi\xE8ce de la ligne ".concat(res.index + 1, " dans la section ").concat(res.tab_name), {
                    duration: 8000
                  });
                } else if (res.field === 'fichier') {
                  _this3.$toasted.show("Veuillez joindre la pi\xE8ce d\u2019identit\xE9 de la ligne ".concat(res.index + 1, " dans la section ").concat(res.tab_name), {
                    duration: 8000
                  });
                } else if (res.field == undefined) {
                  _this3.isLoading = false;
                } else if (res.field == "BLOCKPROCESS") {
                  _this3.$toasted.error("Ce dossier ne peut \xEAtre publi\xE9, bien que tous les champs aient \xE9t\xE9 d\xFBment renseign\xE9s,\n                    car une pi\xE8ce justificative requise dans le cadre du processus KYC (Know Your Customer) ne satisfait pas aux exigences de conformit\xE9.", {
                    duration: Infinity,
                    position: 'top-center'
                  });
                } else {
                  _this3.$toasted.show("Veuillez renseigner le champ ".concat(res.field, " de la ligne ").concat(res.index + 1, " dans la section ").concat(res.tab_name), {
                    duration: 8000
                  });
                }
                _this3.isLoading = false;
              }
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    doCheckBeforePub: function doCheckBeforePub() {
      var _this$cleanAutreRefer, _this$dossier_credit2;
      var fieldset = [{
        variable: "nom_prenoms",
        libelle: "Nom et prénoms"
      }, {
        variable: "date_naissance",
        libelle: "Date de naissance"
      }, {
        variable: "lieu_naissance",
        libelle: "Lieu de naissance"
      }, {
        variable: "nature_piece",
        libelle: "Nature de la pièce"
      }, {
        variable: "numero_piece_identite",
        libelle: "Numero pièce d'identité"
      }, {
        variable: "nb_files",
        libelle: "Fichier"
      }];

      // check for actionnaires, dirigeants, cautions
      var tbs = this.keysToHave.filter(function (el) {
        return el != 'autre_referent';
      }).map(function (el) {
        if (el == "cautions") return 'caution_solidaires';else return el;
      });
      if (((_this$cleanAutreRefer = this.cleanAutreReferent) === null || _this$cleanAutreRefer === void 0 ? void 0 : _this$cleanAutreRefer.length) > 0) {
        tbs.push('autre_referent');
      }
      if (this.categorieCreditConso.includes((_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.applied_templ_name)) {
        var _this$cautions, _this$cautions2;
        tbs = ['autre_referent'];
        if (((_this$cautions = this.cautions) === null || _this$cautions === void 0 ? void 0 : _this$cautions.add_caution) === 'Oui') {
          tbs.unshift('caution_solidaires');
        }
        if ([undefined, null, ''].includes((_this$cautions2 = this.cautions) === null || _this$cautions2 === void 0 ? void 0 : _this$cautions2.add_caution)) {
          this.$toasted.show('Veuillez repondre à la question: Avez-vous des cautions solidaires à ajouter ?', {
            duration: 8000
          });
          return {
            "sucess": false,
            field: undefined
          };
        }
      }
      // tbs = tbs?.replace('cautions', 'caution_solidaires')
      for (var i = 0; i < tbs.length; i++) {
        var tb = tbs[i];
        var _iterator2 = _createForOfIteratorHelper(this[tb].entries()),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _step2$value = _slicedToArray(_step2.value, 2),
              index = _step2$value[0],
              line = _step2$value[1];
            var _iterator3 = _createForOfIteratorHelper(fieldset),
              _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var field = _step3.value;
                if ([undefined, null, '', 0].includes(line[field === null || field === void 0 ? void 0 : field.variable])) {
                  return {
                    success: false,
                    tab_name: tb === "caution_solidaires" ? "Cautions / Garants" : tb === "autre_referent" ? "Autres référents" : tb,
                    field: field.variable === "nb_files" ? "fichier" : field === null || field === void 0 ? void 0 : field.libelle,
                    index: index
                  };
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
            if (['CFN CIV', 'FINL'].includes(this.filiale)) {
              if (["Ancienne CNI", "Nouvelle CNI"].includes(line === null || line === void 0 ? void 0 : line.nature_piece)) {
                if ([false].includes(line === null || line === void 0 ? void 0 : line.piece_authentified)) {
                  return {
                    success: false,
                    tab_name: tb,
                    field: "BLOCKPROCESS",
                    index: index
                  };
                }
                if ([undefined, null, ''].includes(line === null || line === void 0 ? void 0 : line.piece_authentified)) {
                  return {
                    success: false,
                    tab_name: tb,
                    field: "piece_authentified",
                    index: index
                  };
                }
              }
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      return {
        success: true
      };
    },
    showIDDetails: function showIDDetails(index, objName) {
      if (objName && index) {
        var enr = this[objName][index];
        if (![undefined, null, ''].includes(enr.numero_piece_identite)) {}
      }
    },
    verifyIDCardAuthenticity: function verifyIDCardAuthenticity(index, vars) {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var person, element, nniOrMatr, naturePiece, pr;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              // const MIX_ONECI_ALLOW_VERIFICATION = process.env.MIX_ONECI_ALLOW_VERIFICATION
              // if (![true, "true",].includes(MIX_ONECI_ALLOW_VERIFICATION)) {
              //     this.$toasted.show("Cette fonctionnalité est temporairement désactivée. Merci d'approuver directement", { duration: 10000 })
              //     return
              // }
              person = _this4[vars][index];
              _this4.error_message = "";
              if (!['CFN CIV', 'FINL'].includes(_this4.filiale.toUpperCase())) {
                _context2.next = 27;
                break;
              }
              // verify if this line has already the id card data
              element = _this4[vars][index];
              if ([undefined, null, ''].includes(element.id_card_data)) {
                _context2.next = 8;
                break;
              }
              _this4.idCardData = element === null || element === void 0 ? void 0 : element.id_card_data;
              _this4.$modal.show('id-card-details');
              return _context2.abrupt("return");
            case 8:
              nniOrMatr = person.numero_piece_identite;
              naturePiece = person.nature_piece; // let arr = this.nni.toString().split().map(Number)
              // // console.log("arr", arr);
              // // if(['', null, undefined].includes(arr)){
              // //     this.error_message = "Veuillez renseigner le NNI SVP !"
              // //     return
              // // }
              if (![undefined, null, ''].includes(naturePiece)) {
                _context2.next = 13;
                break;
              }
              _this4.$toasted.info('Veuillez preciser la nature de la pièce');
              return _context2.abrupt("return");
            case 13:
              if (![undefined, null, ''].includes(nniOrMatr)) {
                _context2.next = 16;
                break;
              }
              _this4.$toasted.info('Veuillez preciser le numero de la pièce');
              return _context2.abrupt("return");
            case 16:
              // let arr = nniOrMatr.toString().split().map(Number)
              // if(['', null, undefined].includes(arr)){
              //     this.error_message = "Veuillez renseigner le NNI SVP !"
              //     return
              // }

              _this4.categorieCni = person.nature_piece == "Ancienne CNI" ? 'Ancienne CNI' : "Nouvelle CNI";
              if (!['', null, undefined].includes(_this4.categorieCni)) {
                _context2.next = 20;
                break;
              }
              _this4.error_message = "Veuillez cocher le type de carte à verifier";
              return _context2.abrupt("return");
            case 20:
              pr = vars + index;
              _this4.$set(_this4.verifying, pr, true);
              // this.verifying[vars + index] = true
              _context2.next = 24;
              return _this4.startProcessing(nniOrMatr, index, vars);
            case 24:
              // try {
              // } catch (error) {
              //     this.$toasted.show('Une erreur est survenue')
              //     console.log('Une erreur est survenue', error)
              // }
              _this4.buildCHecklist();
              _context2.next = 28;
              break;
            case 27:
              _this4.buildCHecklist();
            case 28:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    startProcessing: function startProcessing(nniOrMat, index, vars) {
      var _this5 = this;
      // this.isProcessing = true
      var default_meassage = "Après vérification du numéro de la pièce, nous n'avons pas pu determiner son authenticité. Source: ONECI";
      this.$axios.post('/api/lynx-eye/recovery-details-from-nni', {
        categorie: this.categorieCni,
        nni: nniOrMat,
        attributs: Object.keys(this.attributs)
      }).then(function (response) {
        if (!response.data.is_success) {
          _this5.idCardData = null;
          var updatedArray = _toConsumableArray(_this5[vars]);
          updatedArray[index] = _objectSpread(_objectSpread({}, updatedArray[index]), {}, {
            piece_authentified: ""
          });
          _this5[vars] = updatedArray;
          _this5.error_message = response.data.message;
          _this5.$toasted.show(response.data.message ? response.data.message : default_meassage, {
            duration: Infinity
          });
          var _pr = vars + index;
          _this5.$set(_this5.verifying, _pr, false);
          _this5.buildCHecklist();
          return;
        }
        var occur = response.data.data;
        if (![null, undefined, ''].includes(occur)) {
          var _this5$vars$index;
          var entrie = Object.fromEntries(Object.entries(occur).map(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
              key = _ref2[0],
              value = _ref2[1];
            return [key.toLowerCase(), value];
          }));
          var pieceAuth = (_this5$vars$index = _this5[vars][index]) === null || _this5$vars$index === void 0 ? void 0 : _this5$vars$index.piece_authentified;
          _this5.idCardData = _objectSpread(_objectSpread({}, entrie), {}, {
            piece_authentified: ![undefined, null].includes(pieceAuth) ? pieceAuth : '',
            index: index,
            vars: vars
          });
          var _updatedArray = _toConsumableArray(_this5[vars]);
          _updatedArray[index] = _objectSpread(_objectSpread({}, _updatedArray[index]), {}, {
            "id_card_data": _this5.idCardData
          });
          _this5[vars] = _updatedArray;
          _this5.$toasted.info("Client retrouvé");
          _this5.$modal.show('id-card-details');
        }
        var pr = vars + index;
        _this5.$set(_this5.verifying, pr, false);
        _this5.buildCHecklist();
      })["catch"](function (error) {
        if (error.response) {
          // L'API a répondu avec un code HTTP hors 2xx
          console.error('Erreur API :', error.response.status, error.response.data);
          _this5.error_message = "Erreur lors de la récupération des données.";
        } else if (error.request) {
          // La requête a été envoyée, mais aucune réponse reçue
          console.error('Erreur réseau ou absence de réponse :', error.request);
          _this5.error_message = "Impossible de joindre le serveur.";
        } else {
          // Autre type d'erreur
          console.error('Erreur inattendue :', error.message);
          _this5.error_message = "Une erreur inattendue s'est produite.";
        }
        var pr = vars + index;
        _this5.$set(_this5.verifying, pr, false);
        _this5.$toasted.info(_this5.error_message);
      });
    },
    addFiles: function addFiles() {
      var _arguments = arguments,
        _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var index, slug_, slug, name, element, _this6$slug, _element, _element2, _this6$$route;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              index = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : null;
              slug_ = _arguments.length > 1 && _arguments[1] !== undefined ? _arguments[1] : null;
              EventBus.$emit("open-extra-file-explorer");
              // const dateNow = new Date().toLocaleDateString();
              // const numeroPiece = this.caution_solidaires?.[index]?.numero_piece_identite?.trim() || '';
              // const result = numeroPiece;
              slug = null, name = null;
              if (slug_ != null && index != null) {
                element = {};
                if (![null, undefined, ""].includes(_this6[slug_])) {
                  if (![null, undefined, 0].includes(_this6[slug_])) {
                    element = (_this6$slug = _this6[slug]) === null || _this6$slug === void 0 ? void 0 : _this6$slug[index];
                    slug = (_element = element) !== null && _element !== void 0 && _element.from_caf && (_element2 = element) !== null && _element2 !== void 0 && _element2.has_file ? "cautionnement_solidaires" : slug_ + "_kwc_checklist";
                    name = "Pi\xE8ce jointe {(*)}".concat(slug) + index + '_' + ((_this6$$route = _this6.$route) === null || _this6$$route === void 0 || (_this6$$route = _this6$$route.params) === null || _this6$$route === void 0 ? void 0 : _this6$$route.templateId);
                  }
                }
              } else {
                slug = slug_;
                name = "Pi\xE8ce jointe {(*)}".concat(slug) + '_' + _this6.$route.params.templateId;
              }
              _context3.next = 7;
              return setTimeout(function () {
                EventBus.$emit("data-extra-file-explorer", {
                  name: name
                });
              }, 500);
            case 7:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    getFiles: function getFiles() {
      var _this7 = this;
      _services_proxy_service__WEBPACK_IMPORTED_MODULE_0__["default"].proxyEbapis({
        url: this.connectsHost + "api/get-files",
        method: "POST",
        data: {
          file_identity: this.dossier_credit.cred_pub_key
        }
      }).then(function (res) {
        var _res$data$data, _res$data$data2;
        res.data = JSON.parse(res.data);
        if (((_res$data$data = res.data.data) === null || _res$data$data === void 0 ? void 0 : _res$data$data.length) > 0 || ((_res$data$data2 = res.data.data) === null || _res$data$data2 === void 0 ? void 0 : _res$data$data2.length) != null) {
          var result = res.data.data;
          var slug_tb = ["actionnaires", "cautions", "dirigeants", "autre_referent"];
          var _loop2 = function _loop2() {
            var slug = _slug_tb3[_i4];
            if (![null, undefined, ""].includes(_this7[slug])) {
              if (![null, undefined, "", 0].includes(_this7[slug].length)) {
                _this7[slug].forEach(function (element, index) {
                  var files = [];
                  result.forEach(function (file) {
                    var _element$template3;
                    if ((file === null || file === void 0 ? void 0 : file.extra_file_template_id) != null && (element === null || element === void 0 || (_element$template3 = element.template) === null || _element$template3 === void 0 ? void 0 : _element$template3.id) == (file === null || file === void 0 ? void 0 : file.extra_file_template_id)) {
                      // element['nb_files'] = file?.file_url
                      files.push(file);
                    }
                  });
                  _this7[slug][index]["nb_files"] = files.length;
                  _this7[slug][index]["files"] = files;
                });
              }
            }
          };
          for (var _i4 = 0, _slug_tb3 = slug_tb; _i4 < _slug_tb3.length; _i4++) {
            _loop2();
          }
          // console.log("Verification_caution_solidaire", this.Verification_caution_solidaire.caution_added)
        }
      })["catch"](function (err) {
        console.error(err);
      });
    },
    retreivedChecklist: function retreivedChecklist() {
      var _this$dossier_credit3, _kwc_checklist$checke2, _kwc_checklist$checke3;
      var kwc_checklist = (_this$dossier_credit3 = this.dossier_credit) === null || _this$dossier_credit3 === void 0 ? void 0 : _this$dossier_credit3.kwc_checklist;
      var data = kwc_checklist === null || kwc_checklist === void 0 || (_kwc_checklist$checke2 = kwc_checklist.checker_one) === null || _kwc_checklist$checke2 === void 0 ? void 0 : _kwc_checklist$checke2.entries;
      this.conformite_donnees = kwc_checklist === null || kwc_checklist === void 0 || (_kwc_checklist$checke3 = kwc_checklist.checker_one) === null || _kwc_checklist$checke3 === void 0 ? void 0 : _kwc_checklist$checke3.conformite_donnees;
      var tb = Object.keys(data);
      // console.log({ tb_r: tb })
      // console.log({keysToHave_r: this.keysToHave})
      for (var _i5 = 0, _tb = tb; _i5 < _tb.length; _i5++) {
        var key = _tb[_i5];
        this[key] = data[key];
        // if(!this.keysToHave.includes(key)) this.keysToHave.push(key)
        if (key == "cautions") {
          var _data$cautions;
          this.caution_solidaires = data === null || data === void 0 || (_data$cautions = data.cautions) === null || _data$cautions === void 0 ? void 0 : _data$cautions.caution_added;
        }
      }
      this.keysToHave = [].concat(tb);

      // mettre a jour les lignes de chaque tableau en y ajoutant les champs: date_naisse, lieu_naissance
      var _iterator4 = _createForOfIteratorHelper(this.keysToHave),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var t = _step4.value;
          if (t === "cautions") {
            var updateArr = _toConsumableArray(this.caution_solidaires).map(function (el) {
              return _objectSpread({
                nom_prenoms: el === null || el === void 0 ? void 0 : el.nom_prenoms,
                date_naissance: el !== null && el !== void 0 && el.date_naissance ? el === null || el === void 0 ? void 0 : el.date_naissance : "",
                lieu_naissance: el !== null && el !== void 0 && el.lieu_naissance ? el === null || el === void 0 ? void 0 : el.lieu_naissance : ""
              }, el);
            });
            this.caution_solidaires = updateArr;
          } else {
            var _updateArr = _toConsumableArray(this[t]).map(function (el) {
              return _objectSpread({
                nom_prenoms: el === null || el === void 0 ? void 0 : el.nom_prenoms,
                date_naissance: el !== null && el !== void 0 && el.date_naissance ? el === null || el === void 0 ? void 0 : el.date_naissance : "",
                lieu_naissance: el !== null && el !== void 0 && el.lieu_naissance ? el === null || el === void 0 ? void 0 : el.lieu_naissance : ""
              }, el);
            });
            this[t] = _updateArr;
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    },
    removeAutreRef: function removeAutreRef(index) {
      this.autre_referent.splice(index, 1);
      this.buildCHecklist();
    },
    addMoreAutreRef: function addMoreAutreRef() {
      this.autre_referent.push(_objectSpread({}, this.schema));
      this.buildCHecklist();
    },
    removeDirigeant: function removeDirigeant(index) {
      this.dirigeants.splice(index, 1);
      this.buildCHecklist();
    },
    addMoreDirigeant: function addMoreDirigeant() {
      this.dirigeants.push(_objectSpread({}, this.schema));
      var treshold = 1;
      for (var index = 0; index < this.dirigeants.length - treshold; index++) {
        this.$set(this.seenDirigeants, index, true);
      }
      this.buildCHecklist();
    },
    removeActionnaire: function removeActionnaire(index) {
      this.actionnaires.splice(index, 1);
      this.buildCHecklist();
    },
    addMoreActionnaire: function addMoreActionnaire() {
      this.actionnaires.push(_objectSpread({}, this.schema));
      var treshold = 1;
      for (var index = 0; index < this.actionnaires.length - treshold; index++) {
        this.$set(this.seenActionnaires, index, true);
      }
      this.buildCHecklist();
    },
    removeCaution: function removeCaution(index) {
      this.caution_solidaires.splice(index, 1);
      this.cautions["caution_added"] = _toConsumableArray(this.caution_solidaires);
      this.buildCHecklist();
    },
    addMoreCaution: function addMoreCaution() {
      this.caution_solidaires.push(_objectSpread({}, this.caution));
      var treshold = 1;
      for (var index = 0; index < this.caution_solidaires.length - treshold; index++) {
        this.$set(this.seen_caution, index, true);
      }
      this.buildCHecklist();
    },
    retract: function retract(obj, index) {
      var seen = [undefined, null, ''].includes(this[obj][index]) ? true : !this[obj][index];
      this.$set(this[obj], index, seen);
    },
    verifyIfSomeCautionExist: function verifyIfSomeCautionExist(el) {
      var res = ![undefined, '', null].includes(el.indicatif_caution_solidaire) || ![undefined, '', null].includes(el.nom_prenoms);
      return res;
    },
    cautionNotFound: function cautionNotFound(msg) {
      this.cautions.detected_caution_sys = false;
      this.cautions['message'] = msg;
      this.caution_solidaires = [_objectSpread({}, this.schema)];
      this.cautions["caution_added"] = _toConsumableArray(this.caution_solidaires);
    },
    checkBoxChange: function checkBoxChange(event) {
      var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var e = arguments.length > 2 ? arguments[2] : undefined;
      if (event) {
        if (!!key) {
          if (e.target.checked) {
            this[key]["add_caution"] = event;
          } else {
            this[key]["add_caution"] = '';
          }
          this.buildCHecklist();
          return;
        }
        this.idCardData.piece_authentified = event === 'oui' ? true : false;
      } else {
        this.idCardData.piece_authentified = "";
      }
      var vars = this.idCardData.vars;
      var index = this.idCardData.index;
      var updatedArray = _toConsumableArray(this[vars]);
      var newElement = _objectSpread(_objectSpread({}, updatedArray[index]), {}, {
        piece_authentified: this.idCardData.piece_authentified
      });
      updatedArray[index] = newElement;
      this[vars] = updatedArray;
      var isverif = true;
      var _iterator5 = _createForOfIteratorHelper(this.keysToHave),
        _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var tb = _step5.value;
          if (Array.isArray(this[tb])) {
            var _iterator6 = _createForOfIteratorHelper(this[tb]),
              _step6;
            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var line = _step6.value;
                if ([undefined, null, '', false].includes(line.piece_authentified)) {
                  isverif = false;
                }
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
      this.conformite_donnees.donnees_verifiees = isverif;
      this.buildCHecklist();
      this.$modal.hide("id-card-details");
      // let res = this.systemVerification()
      // if (res) {
      // }
      // else {
      //    this.$modal.show('auto-verif')
      // }
    },
    isOpen: function isOpen(id) {
      this.currentAccordion = id;
    },
    whatWouldBeDone: function whatWouldBeDone() {
      if ([null, undefined, ""].includes(this.dossier_credit.kwc_checklist)) {
        this.settingChecklist();
      } else {
        this.retreivedChecklist();
      }
    },
    settingChecklist: function settingChecklist() {
      var _this8 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var _this8$dossier_credit, _this8$dossier_credit2, _credpubtb4$cautionne;
        var keyToPops, _loop3, _i6, _keyToPops, credpubtb4, caution_detected;
        return _regeneratorRuntime().wrap(function _callee4$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              if (!_this8.categorieCreditConso.includes((_this8$dossier_credit = _this8.dossier_credit) === null || _this8$dossier_credit === void 0 ? void 0 : _this8$dossier_credit.applied_templ_name)) {
                _context5.next = 4;
                break;
              }
              _this8.keysToHave = ['cautions', 'autre_referent'];
              _context5.next = 13;
              break;
            case 4:
              if (!(_this8.typeClient == "Retail")) {
                _context5.next = 13;
                break;
              }
              keyToPops = ['actionnaires', 'dirigeants'];
              _loop3 = /*#__PURE__*/_regeneratorRuntime().mark(function _loop3() {
                var keyToPop, keyToPopIndex;
                return _regeneratorRuntime().wrap(function _loop3$(_context4) {
                  while (1) switch (_context4.prev = _context4.next) {
                    case 0:
                      keyToPop = _keyToPops[_i6];
                      keyToPopIndex = _this8.keysToHave.findIndex(function (el) {
                        return el == keyToPop;
                      });
                      if (keyToPopIndex != -1) _this8.keysToHave.splice(keyToPopIndex, 1);
                    case 3:
                    case "end":
                      return _context4.stop();
                  }
                }, _loop3);
              });
              _i6 = 0, _keyToPops = keyToPops;
            case 8:
              if (!(_i6 < _keyToPops.length)) {
                _context5.next = 13;
                break;
              }
              return _context5.delegateYield(_loop3(), "t0", 10);
            case 10:
              _i6++;
              _context5.next = 8;
              break;
            case 13:
              // Verification cautionnement solidaire
              credpubtb4 = _this8.dossier_credit[_this8.determineCredPubTables((_this8$dossier_credit2 = _this8.dossier_credit) === null || _this8$dossier_credit2 === void 0 ? void 0 : _this8$dossier_credit2.applied_templ_name)[4]]; // console.log({credpubtb4})
              if (![null, undefined, ''].includes(credpubtb4)) {
                _context5.next = 17;
                break;
              }
              _this8.cautionNotFound("Le tableau de suretés est introuvable");
              return _context5.abrupt("return");
            case 17:
              if (![null, undefined, ''].includes(credpubtb4 === null || credpubtb4 === void 0 ? void 0 : credpubtb4.cautionnement_solidaires)) {
                _context5.next = 20;
                break;
              }
              _this8.cautionNotFound("Pas de cautionnement retrouvé dans le tableau des suretés");
              return _context5.abrupt("return");
            case 20:
              if (credpubtb4 !== null && credpubtb4 !== void 0 && (_credpubtb4$cautionne = credpubtb4.cautionnement_solidaires) !== null && _credpubtb4$cautionne !== void 0 && _credpubtb4$cautionne.some(function (el) {
                return _this8.verifyIfSomeCautionExist(el);
              })) {
                caution_detected = credpubtb4 === null || credpubtb4 === void 0 ? void 0 : credpubtb4.cautionnement_solidaires;
                _this8.cautions.detected_caution_sys = true;
                _this8.cautions.add_caution = "Oui";
                _this8.cautions["caution_detected"] = caution_detected;
                _this8.cautions['nombre_caution_detected'] = caution_detected.length;
                if (![null, undefined, ""].includes(caution_detected)) _this8.caution_solidaires = caution_detected.map(function (el) {
                  var newObject = {
                    nom_prenoms: el === null || el === void 0 ? void 0 : el.nom_prenoms,
                    date_naissance: "",
                    lieu_naissance: "",
                    numero_piece_identite: '',
                    nature_piece: ''
                    // from_caf: true,
                    // has_file: el.files > 0 || ![undefined, null, '', 0].includes(el.template),
                    // // files: [],
                    // nb_files: (el.files > 0 || ![undefined, null, '', 0].includes(el.template)) ? 1 : 0
                  };
                  delete newObject.indicatif_caution_solidaire;
                  return newObject;
                });
                _this8.cautions["caution_added"] = _toConsumableArray(_this8.caution_solidaires);
              } else {
                _this8.cautionNotFound("Pas de cautions renseigné par le Caf");
              }
              // console.log('keys to have', this.keysToHave)
              _this8.buildCHecklist();
              // console.log("keysToHave", this.keysToHave )
            case 22:
            case "end":
              return _context5.stop();
          }
        }, _callee4);
      }))();
    },
    buildCHecklist: function buildCHecklist() {
      var _this$dossier_credit4, _this$dossier_credit5;
      var kwc_checklist = {};
      var entries = {};
      var current_stage = 1;
      var who_has_done_it = _objectSpread({}, (_this$dossier_credit4 = this.dossier_credit) === null || _this$dossier_credit4 === void 0 || (_this$dossier_credit4 = _this$dossier_credit4.pub_workflow) === null || _this$dossier_credit4 === void 0 ? void 0 : _this$dossier_credit4[0]);
      var when_has_done_it = (_this$dossier_credit5 = this.dossier_credit) === null || _this$dossier_credit5 === void 0 || (_this$dossier_credit5 = _this$dossier_credit5.kwc_checklist) === null || _this$dossier_credit5 === void 0 || (_this$dossier_credit5 = _this$dossier_credit5.checker_one) === null || _this$dossier_credit5 === void 0 ? void 0 : _this$dossier_credit5.when_has_done_it;
      this.cautions["caution_added"] = this.caution_solidaires;
      // n_1_checklist['who_has_done_it'] = who_has_done_it
      kwc_checklist['has_done'] = true;
      for (var index = 0; index < this.keysToHave.length; index++) {
        var key = this.keysToHave[index];
        entries[key] = this[key];
      }
      // entries["conformite_donnees"] = this.conformite_donnees
      var dict = {
        who_has_done_it: who_has_done_it,
        when_has_done_it: [null, undefined, ''].includes(when_has_done_it) ? new Date() : when_has_done_it,
        stage: current_stage,
        entries: entries,
        conformite_donnees: this.conformite_donnees
      };
      // data = [dict]
      kwc_checklist["checker_one"] = dict;
      // const MIX_ONECI_ALLOW_VERIFICATION = process.env.MIX_ONECI_ALLOW_VERIFICATION
      // kwc_checklist['MIX_ONECI_ALLOW_VERIFICATION'] = MIX_ONECI_ALLOW_VERIFICATION

      this.autosavingAKey({
        cred_pub_key: this.dossier_credit.cred_pub_key,
        key_name: "kwc_checklist",
        key: kwc_checklist
      });
    },
    autosavingAKey: function autosavingAKey(data) {
      this.$axios.post(this.server + "creditbuilder/api/v1/autosaving-akey/", data).then(function (response) {
        EventBus.$emit("value-updated");
      }.bind(this))["catch"](function (error) {
        this.$console.log(error);
      }.bind(this));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/cofina/CheckingKWC.vue?vue&type=template&id=67ad9a42&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/cofina/CheckingKWC.vue?vue&type=template&id=67ad9a42&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$dossier_credit, _vm$cautions, _vm$dossier_credit2, _vm$dossier_credit3, _vm$idCardData, _vm$idCardData2, _vm$idCardData3, _vm$idCardData4, _vm$idCardData5, _vm$idCardData6, _vm$idCardData$birth_, _vm$idCardData7, _vm$idCardData$reside, _vm$idCardData8, _vm$idCardData9, _vm$idCardData0, _vm$idCardData1, _vm$idCardData10, _vm$idCardData11, _vm$idCardData12, _vm$idCardData13, _vm$idCardData14, _vm$idCardData15, _vm$idCardData16, _vm$idCardData17, _vm$idCardData18, _vm$idCardData19, _vm$idCardData20, _vm$messageError, _vm$messageError2, _vm$messageError3;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
    staticClass: "container py-3 mb-2",
    staticStyle: {
      "max-height": "95vh"
    }
  }, [_c("div", {
    staticClass: "modal-content"
  }, [_vm._m(0), _vm._v(" "), _c("button", {
    staticClass: "btn-close",
    staticStyle: {
      position: "absolute",
      right: "3px"
    },
    attrs: {
      type: "button"
    },
    on: {
      click: function click() {
        return _vm.$emit("closeCheckingKWC");
      }
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_c("div", {
    staticStyle: {
      "max-height": "82vh",
      overflow: "auto"
    }
  }, [_c("div", {
    staticClass: "accordion",
    attrs: {
      id: "accordionExample"
    }
  }, [_vm.keysToHave.includes("actionnaires") ? _c("div", {
    staticClass: "accordion-item"
  }, [_c("h2", {
    staticClass: "accordion-header",
    attrs: {
      id: "headingOne"
    }
  }, [_c("button", {
    staticClass: "accordion-button collapsed",
    attrs: {
      type: "button",
      "data-bs-toggle": "collapse",
      "data-bs-target": "#collapseOne",
      "aria-expanded": "true",
      "aria-controls": "collapseOne"
    },
    on: {
      click: function click($event) {
        return _vm.isOpen("collapseOne");
      }
    }
  }, [_c("div", {
    staticClass: "d-flex justify-content-between align-items-center w-100"
  }, [_c("div", [_vm._v("Actionnaires / Propriétaires")]), _vm._v(" "), _c("span", [_c("button", {
    staticStyle: {
      background: "#be5500",
      "border-radius": "15%"
    },
    attrs: {
      title: "Ajouter un nouvel actionnaire",
      type: "button"
    },
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.addMoreActionnaire();
      }
    }
  }, [_c("i", {
    staticClass: "icofont-plus-circle",
    staticStyle: {
      color: "white"
    }
  })])])])])]), _vm._v(" "), _c("div", {
    staticClass: "accordion-collapse collapse show",
    attrs: {
      id: "collapseOne",
      "aria-labelledby": "headingOne",
      "data-bs-parent": ""
    }
  }, [_c("div", {
    staticClass: "accordion-body"
  }, [_vm._l(_vm.actionnaires, function (actionnaire, index) {
    var _actionnaire$files;
    return _c("form", {
      key: "verif_caution" + index,
      staticClass: "form"
    }, [_c("fieldset", [[undefined, null, false].includes(_vm.seenActionnaires[index]) ? [_c("legend", {
      staticStyle: {
        cursor: "pointer"
      },
      on: {
        click: function click($event) {
          return _vm.retract("seenActionnaires", index);
        }
      }
    }, [_c("div", {
      staticClass: "d-flex justify-content-between align-items-center px-2",
      staticStyle: {
        background: "#f4f3f3"
      }
    }, [_c("h6", [_vm._v("Actionnaire / Propiétaire " + _vm._s(index + 1))]), _vm._v(" "), _c("span", [_c("i", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: index != 0,
        expression: "index != 0"
      }],
      "class": _vm.iconClass,
      staticStyle: {
        "font-size": "20px",
        color: "red"
      },
      attrs: {
        title: "Supprimer Cet actionnaire"
      },
      on: {
        click: function click($event) {
          $event.stopPropagation();
          return _vm.removeActionnaire(index);
        }
      }
    }), _vm._v(" "), _c("i", {
      staticClass: "icofont-thin-down",
      staticStyle: {
        color: "black"
      }
    })])])]), _vm._v(" "), _c("div", {
      staticClass: "table-responsive"
    }, [_c("table", {
      staticClass: "table table-borderless"
    }, [_vm._m(1, true), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: actionnaire.nom_prenoms,
        expression: "actionnaire.nom_prenoms"
      }],
      staticClass: "form-control",
      "class": {
        "from-caf": (actionnaire === null || actionnaire === void 0 ? void 0 : actionnaire.from_caf) == true
      },
      domProps: {
        value: actionnaire.nom_prenoms
      },
      on: {
        change: function change($event) {
          return _vm.buildCHecklist();
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(actionnaire, "nom_prenoms", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("date-input", {
      staticClass: "input-date",
      attrs: {
        value: actionnaire.date_naissance
      },
      on: {
        input: function input($event) {
          return _vm.setDateInput($event, "actionnaires", "date_naissance", index);
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: actionnaire.lieu_naissance,
        expression: "actionnaire.lieu_naissance"
      }],
      staticClass: "form-control",
      "class": {
        "from-caf": (actionnaire === null || actionnaire === void 0 ? void 0 : actionnaire.from_caf) == true
      },
      domProps: {
        value: actionnaire.lieu_naissance
      },
      on: {
        change: function change($event) {
          return _vm.buildCHecklist();
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(actionnaire, "lieu_naissance", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: actionnaire.nature_piece,
        expression: "actionnaire.nature_piece"
      }],
      staticClass: "form-select",
      "class": {
        "from-caf": (actionnaire === null || actionnaire === void 0 ? void 0 : actionnaire.from_caf) == true
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(actionnaire, "nature_piece", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.buildCHecklist();
        }]
      }
    }, [_c("option", {
      attrs: {
        value: ""
      }
    }), _vm._v(" "), ["CFN CIV", "FINL"].includes(_vm.filiale) ? [_c("option", {
      domProps: {
        value: "Ancienne CNI"
      }
    }, [_vm._v("Ancienne CNI")]), _vm._v(" "), _c("option", {
      domProps: {
        value: "Nouvelle CNI"
      }
    }, [_vm._v("Nouvelle CNI")])] : _c("option", {
      attrs: {
        value: "Carte nationale d'identité"
      }
    }, [_vm._v("Carte nationale d'identité")]), _vm._v(" "), _c("option", {
      domProps: {
        value: "Passeport"
      }
    }, [_vm._v("Passeport")]), _vm._v(" "), _c("option", {
      domProps: {
        value: "Permis de conduire"
      }
    }, [_vm._v("Permis de conduire")]), _vm._v(" "), _c("option", {
      domProps: {
        value: "Carte consulaire"
      }
    }, [_vm._v("Carte consulaire")])], 2)]), _vm._v(" "), _c("td", [_c("div", {
      staticClass: "input-group mb-3",
      staticStyle: {
        width: "100%"
      }
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: actionnaire.numero_piece_identite,
        expression: "actionnaire.numero_piece_identite"
      }],
      staticClass: "form-control",
      "class": {
        "from-caf": (actionnaire === null || actionnaire === void 0 ? void 0 : actionnaire.from_caf) == true
      },
      staticStyle: {
        "max-height": "38px"
      },
      attrs: {
        type: "text",
        "aria-label": "numero_piece_identite",
        "aria-describedby": "basic-addon2",
        placeholder: ["Ancienne CNI"].includes(actionnaire.nature_piece) ? "Numero matricule de la piece" : ["Nouvelle CNI"].includes(actionnaire.nature_piece) ? "NNI de la pièce" : "Numero de la pièce d'identité"
      },
      domProps: {
        value: actionnaire.numero_piece_identite
      },
      on: {
        change: function change($event) {
          return _vm.resetVerification(actionnaire);
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(actionnaire, "numero_piece_identite", $event.target.value);
        }
      }
    }), _vm._v(" "), ["CFN CIV", "FINL"].includes(_vm.filiale) && ["Ancienne CNI", "Nouvelle CNI"].includes(actionnaire.nature_piece) ? _c("span", {
      staticClass: "input-group-text",
      staticStyle: {
        "max-height": "38px",
        cursor: "pointer"
      },
      attrs: {
        id: "basic-addon2"
      }
    }, [_c("span", {
      staticClass: "d-flex align-items-center",
      attrs: {
        title: actionnaire.piece_authentified === true ? "Pièce d'identité authentifié" : actionnaire.piece_authentified === false ? "Pièce d'identité non authentifié" : "Pièce d'identité non verifié",
        id: "basic-addon2"
      }
    }, [_c("button", {
      staticStyle: {
        height: "24px",
        "font-size": "12px",
        border: "orangered",
        "border-radius": "14px",
        color: "white"
      },
      style: !["", null, undefined, false].includes(actionnaire.piece_authentified) ? "background:green" : "background-color: orangered",
      attrs: {
        type: "button",
        disabled: _vm.verifying["actionnaires" + index] === true
      },
      on: {
        click: function click($event) {
          return _vm.verifyIDCardAuthenticity(index, "actionnaires");
        }
      }
    }, [["", null, undefined].includes(actionnaire.piece_authentified) ? _c("span", [_vm._v("Vérifer")]) : _c("span", [_vm._v("Voir")])]), _vm._v(" "), [true].includes(_vm.verifying["actionnaires" + index]) ? _c("div", {
      staticClass: "mx-2 spinner-border text-warning",
      staticStyle: {
        width: "1.5em",
        height: "1.5em"
      },
      attrs: {
        role: "status"
      }
    }, [_c("span", {
      staticClass: "visually-hidden"
    }, [_vm._v("Loading...")])]) : [actionnaire.piece_authentified === false ? _c("span", {
      staticClass: "mx-2",
      staticStyle: {
        "font-size": "1.5em",
        color: "red"
      }
    }, [_c("i", {
      staticClass: "icofont-close-circled"
    })]) : _vm._e(), _vm._v(" "), actionnaire.piece_authentified ? _c("span", {
      staticClass: "mx-2",
      staticStyle: {
        "font-size": "1.5em",
        color: "green"
      }
    }, [_c("i", {
      staticClass: "icofont-check-circled"
    })]) : _vm._e()]], 2)]) : _vm._e()])]), _vm._v(" "), _c("td", [_c("div", {
      staticClass: "d-flex align-items-center"
    }, [_c("div", [(actionnaire === null || actionnaire === void 0 || (_actionnaire$files = actionnaire.files) === null || _actionnaire$files === void 0 ? void 0 : _actionnaire$files.length) > 0 ? _c("span", {
      staticClass: "p-1 px-2 mx-2 text-nowrap",
      staticStyle: {
        "background-color": "rgb(44, 62, 80)",
        color: "white",
        "font-size": "13px",
        "border-radius": "5px",
        "margin-left": "0 !important",
        width: "150px"
      }
    }, [_vm._v("\n                                                                                " + _vm._s((actionnaire === null || actionnaire === void 0 ? void 0 : actionnaire.nb_files) > 0 ? (actionnaire === null || actionnaire === void 0 ? void 0 : actionnaire.nb_files) + " fichier(s) uploadé(s)" : "") + "\n                                                                            ")]) : _vm._e()]), _vm._v(" "), _c("div", [_c("button", {
      staticClass: "btn shadow-md text-white",
      staticStyle: {
        cursor: "pointer",
        background: "#2c3e50",
        width: "26px",
        "font-size": "13px",
        padding: "1px",
        "margin-right": "7px"
      },
      attrs: {
        type: "button",
        name: "button",
        "data-toggle": "tooltip",
        title: "Cliquer ici pour uploader ou voir le(s) fichier(s)"
      },
      on: {
        click: function click($event) {
          return _vm.addFiles(index, "actionnaires");
        }
      }
    }, [_c("i", {
      staticClass: "icofont-attachment"
    })])])])])])])])])] : [_c("legend", {
      staticStyle: {
        cursor: "pointer"
      },
      on: {
        click: function click($event) {
          return _vm.retract("seenActionnaires", index);
        }
      }
    }, [_c("div", {
      staticClass: "d-flex justify-content-between align-items-center px-2",
      staticStyle: {
        background: "#f4f3f3"
      }
    }, [_c("h6", [_vm._v("Actionnaire / Propiétaire " + _vm._s(index + 1))]), _vm._v(" "), _c("span", [_c("i", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: index != 0,
        expression: "index != 0"
      }],
      "class": _vm.iconClass,
      staticStyle: {
        "font-size": "20px",
        color: "red"
      },
      attrs: {
        title: "Supprimer Cet actionnaire"
      },
      on: {
        click: function click($event) {
          $event.stopPropagation();
          return _vm.removeActionnaire(index);
        }
      }
    }), _vm._v(" "), _c("i", {
      staticClass: "icofont-thin-down",
      staticStyle: {
        color: "black"
      }
    })])])])]], 2)]);
  }), _vm._v(" "), _c("div", {
    staticClass: "flex"
  }, [_c("button", {
    staticClass: "add-button-class",
    attrs: {
      title: "Ajouter un nouvel actionnaire",
      type: "button"
    },
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.addMoreActionnaire();
      }
    }
  }, [_c("i", {
    staticClass: "icofont-plus-circle",
    staticStyle: {
      color: "white"
    }
  }), _vm._v("\n                                            Ajouter un nouveau\n                                        ")])])], 2)])]) : _vm._e(), _vm._v(" "), _vm.keysToHave.includes("dirigeants") ? _c("div", {
    staticClass: "accordion-item"
  }, [_c("h2", {
    staticClass: "accordion-header",
    attrs: {
      id: "headingTwo"
    }
  }, [_c("button", {
    staticClass: "accordion-button collapsed",
    attrs: {
      type: "button",
      "data-bs-toggle": "collapse",
      "data-bs-target": "#collapseTwo",
      "aria-expanded": "true",
      "aria-controls": "collapseTwo"
    },
    on: {
      click: function click($event) {
        return _vm.isOpen("collapseTwo");
      }
    }
  }, [_c("div", {
    staticClass: "d-flex justify-content-between align-items-center w-100"
  }, [_c("div", [_vm._v("Dirigeants")]), _vm._v(" "), _c("span", [_c("button", {
    staticStyle: {
      background: "#be5500",
      "border-radius": "15%"
    },
    attrs: {
      title: "Ajouter un nouveau dirigeant",
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.addMoreDirigeant();
      }
    }
  }, [_c("i", {
    staticClass: "icofont-plus-circle",
    staticStyle: {
      color: "white"
    }
  })])])])])]), _vm._v(" "), _c("div", {
    staticClass: "accordion-collapse collapse show",
    attrs: {
      id: "collapseTwo",
      "aria-labelledby": "headingTwo",
      "data-bs-parent": ""
    }
  }, [_c("div", {
    staticClass: "accordion-body"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_vm._l(_vm.dirigeants, function (dirigeant, index) {
    var _dirigeant$files, _dirigeant$files2;
    return _c("form", {
      key: "verif_caution" + index,
      staticClass: "form"
    }, [_c("fieldset", [[undefined, null, false].includes(_vm.seenDirigeants[index]) ? [_c("legend", {
      staticStyle: {
        cursor: "pointer"
      },
      on: {
        click: function click($event) {
          return _vm.retract("seenDirigeants", index);
        }
      }
    }, [_c("div", {
      staticClass: "d-flex justify-content-between align-items-center px-2",
      staticStyle: {
        background: "#f4f3f3"
      }
    }, [_c("h6", [_vm._v("Dirigeant " + _vm._s(index + 1))]), _vm._v(" "), _c("span", [_c("i", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: index != 0,
        expression: "index != 0"
      }],
      "class": _vm.iconClass,
      staticStyle: {
        "font-size": "20px",
        color: "red"
      },
      attrs: {
        title: "Supprimer Ce dirigeant"
      },
      on: {
        click: function click($event) {
          $event.stopPropagation();
          return _vm.removeDirigeant(index);
        }
      }
    }), _vm._v(" "), _c("i", {
      staticClass: "icofont-thin-down",
      staticStyle: {
        color: "black"
      }
    })])])]), _vm._v(" "), _c("div", {
      staticClass: "table-responsive"
    }, [_c("table", {
      staticClass: "table table-borderless"
    }, [_vm._m(2, true), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: dirigeant.nom_prenoms,
        expression: "dirigeant.nom_prenoms"
      }],
      staticClass: "form-control",
      "class": {
        "from-caf": (dirigeant === null || dirigeant === void 0 ? void 0 : dirigeant.from_caf) == true
      },
      domProps: {
        value: dirigeant.nom_prenoms
      },
      on: {
        change: function change($event) {
          return _vm.buildCHecklist();
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(dirigeant, "nom_prenoms", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("date-input", {
      staticClass: "input-date",
      attrs: {
        value: dirigeant.date_naissance
      },
      on: {
        input: function input($event) {
          return _vm.setDateInput($event, "dirigeants", "date_naissance", index);
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: dirigeant.lieu_naissance,
        expression: "dirigeant.lieu_naissance"
      }],
      staticClass: "form-control",
      "class": {
        "from-caf": (dirigeant === null || dirigeant === void 0 ? void 0 : dirigeant.from_caf) == true
      },
      domProps: {
        value: dirigeant.lieu_naissance
      },
      on: {
        change: function change($event) {
          return _vm.buildCHecklist();
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(dirigeant, "lieu_naissance", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: dirigeant.nature_piece,
        expression: "dirigeant.nature_piece"
      }],
      staticClass: "form-select",
      "class": {
        "from-caf": (dirigeant === null || dirigeant === void 0 ? void 0 : dirigeant.from_caf) == true
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(dirigeant, "nature_piece", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.buildCHecklist();
        }]
      }
    }, [_c("option", {
      attrs: {
        value: ""
      }
    }), _vm._v(" "), ["CFN CIV", "FINL"].includes(_vm.filiale) ? [_c("option", {
      domProps: {
        value: "Ancienne CNI"
      }
    }, [_vm._v("Ancienne CNI")]), _vm._v(" "), _c("option", {
      domProps: {
        value: "Nouvelle CNI"
      }
    }, [_vm._v("Nouvelle CNI")])] : _c("option", {
      attrs: {
        value: "Carte nationale d'identité"
      }
    }, [_vm._v("Carte nationale d'identité")]), _vm._v(" "), _c("option", {
      domProps: {
        value: "Passeport"
      }
    }, [_vm._v("Passeport")]), _vm._v(" "), _c("option", {
      domProps: {
        value: "Permis de conduire"
      }
    }, [_vm._v("Permis de conduire")]), _vm._v(" "), _c("option", {
      domProps: {
        value: "Carte consulaire"
      }
    }, [_vm._v("Carte consulaire")])], 2)]), _vm._v(" "), _c("td", [_c("div", {
      staticClass: "input-group mb-3",
      staticStyle: {
        width: "100%"
      }
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: dirigeant.numero_piece_identite,
        expression: "dirigeant.numero_piece_identite"
      }],
      staticClass: "form-control",
      "class": {
        "from-caf": (dirigeant === null || dirigeant === void 0 ? void 0 : dirigeant.from_caf) == true
      },
      staticStyle: {
        "max-height": "38px"
      },
      attrs: {
        type: "text",
        "aria-label": "numero_piece_identite",
        "aria-describedby": "basic-addon2",
        placeholder: ["Ancienne CNI"].includes(dirigeant.nature_piece) ? "Numero matricule de la piece" : ["Nouvelle CNI"].includes(dirigeant.nature_piece) ? "NNI de la pièce" : "Numero de la pièce d'identité"
      },
      domProps: {
        value: dirigeant.numero_piece_identite
      },
      on: {
        change: function change($event) {
          return _vm.resetVerification(dirigeant);
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(dirigeant, "numero_piece_identite", $event.target.value);
        }
      }
    }), _vm._v(" "), ["CFN CIV", "FINL"].includes(_vm.filiale) && ["Ancienne CNI", "Nouvelle CNI"].includes(dirigeant.nature_piece) ? _c("span", {
      staticClass: "input-group-text",
      staticStyle: {
        "max-height": "38px",
        cursor: "pointer"
      },
      attrs: {
        id: "basic-addon2"
      }
    }, [_c("span", {
      staticClass: "d-flex align-items-center",
      attrs: {
        title: dirigeant.piece_authentified === true ? "Pièce d'identité authentifiée" : dirigeant.piece_authentified ? "Pièce d'identité non authentifiée" : "Pièce d'identité non verifiée",
        id: "basic-addon2"
      }
    }, [_c("button", {
      staticStyle: {
        height: "24px",
        "font-size": "12px",
        border: "orangered",
        "border-radius": "14px",
        color: "white"
      },
      style: !["", null, undefined, false].includes(dirigeant.piece_authentified) ? "background:green" : "background-color: orangered",
      attrs: {
        type: "button"
      },
      on: {
        click: function click($event) {
          return _vm.verifyIDCardAuthenticity(index, "dirigeants");
        }
      }
    }, [["", null, undefined].includes(dirigeant.piece_authentified) ? _c("span", [_vm._v("Vérifer")]) : _c("span", [_vm._v("Voir")])]), _vm._v(" "), [true].includes(_vm.verifying["dirigeants" + index]) ? _c("div", {
      staticClass: "mx-2 spinner-border text-warning",
      staticStyle: {
        width: "1.5em",
        height: "1.5em"
      },
      attrs: {
        role: "status"
      }
    }, [_c("span", {
      staticClass: "visually-hidden"
    }, [_vm._v("Loading...")])]) : [dirigeant.piece_authentified === false ? _c("span", {
      staticClass: "mx-2",
      staticStyle: {
        "font-size": "1.5em",
        color: "red"
      }
    }, [_c("i", {
      staticClass: "icofont-close-circled"
    })]) : _vm._e(), _vm._v(" "), dirigeant.piece_authentified === true ? _c("span", {
      staticClass: "mx-2",
      staticStyle: {
        "font-size": "1.5em",
        color: "green"
      }
    }, [_c("i", {
      staticClass: "icofont-check-circled"
    })]) : _vm._e()]], 2)]) : _vm._e()])]), _vm._v(" "), _c("td", [_c("div", {
      staticClass: "d-flex align-items-center"
    }, [(dirigeant === null || dirigeant === void 0 || (_dirigeant$files = dirigeant.files) === null || _dirigeant$files === void 0 ? void 0 : _dirigeant$files.length) > 0 ? _c("span", {
      staticClass: "p-1 px-2 mx-2 text-nowrap",
      staticStyle: {
        "background-color": "rgb(44, 62, 80)",
        color: "white",
        "font-size": "13px",
        "border-radius": "5px",
        "margin-left": "0 !important",
        width: "150px"
      }
    }, [_vm._v("\n                                                                                " + _vm._s((dirigeant === null || dirigeant === void 0 ? void 0 : dirigeant.nb_files) > 0 ? (dirigeant === null || dirigeant === void 0 || (_dirigeant$files2 = dirigeant.files) === null || _dirigeant$files2 === void 0 ? void 0 : _dirigeant$files2.length) + " fichier(s) uploadé(s)" : "") + "\n                                                                            ")]) : _vm._e(), _vm._v(" "), _c("button", {
      staticClass: "btn shadow-md text-white",
      staticStyle: {
        cursor: "pointer",
        background: "#2c3e50",
        width: "26px",
        "font-size": "13px",
        padding: "1px",
        "margin-right": "7px"
      },
      attrs: {
        type: "button",
        name: "button",
        "data-toggle": "tooltip",
        title: "Cliquer ici pour uploader ou voir le(s) fichier(s)"
      },
      on: {
        click: function click($event) {
          return _vm.addFiles(index, "dirigeants");
        }
      }
    }, [_c("i", {
      staticClass: "icofont-attachment"
    })])])])])])])])] : [_c("legend", {
      staticStyle: {
        cursor: "pointer"
      },
      on: {
        click: function click($event) {
          return _vm.retract("seenDirigeants", index);
        }
      }
    }, [_c("div", {
      staticClass: "d-flex justify-content-between align-items-center px-2",
      staticStyle: {
        background: "#f4f3f3"
      }
    }, [_c("h6", [_vm._v("Dirigeant " + _vm._s(index + 1))]), _vm._v(" "), _c("span", [_c("i", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: index != 0,
        expression: "index != 0"
      }],
      "class": _vm.iconClass,
      staticStyle: {
        "font-size": "20px",
        color: "red"
      },
      attrs: {
        title: "Supprimer Ce dirigeant"
      },
      on: {
        click: function click($event) {
          $event.stopPropagation();
          return _vm.removeDirigeant(index);
        }
      }
    }), _vm._v(" "), _c("i", {
      staticClass: "icofont-thin-down",
      staticStyle: {
        color: "black"
      }
    })])])])]], 2)]);
  }), _vm._v(" "), _c("div", {
    staticClass: "flex"
  }, [_c("button", {
    staticClass: "add-button-class",
    attrs: {
      title: "Ajouter un nouveau dirigeant",
      type: "button"
    },
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.addMoreDirigeant();
      }
    }
  }, [_c("i", {
    staticClass: "icofont-plus-circle",
    staticStyle: {
      color: "white"
    }
  }), _vm._v("\n                                                Ajouter un nouveau\n                                            ")])])], 2)])])]) : _vm._e(), _vm._v(" "), _vm.keysToHave.includes("cautions") ? _c("div", {
    staticClass: "accordion-item"
  }, [_c("h2", {
    staticClass: "accordion-header",
    attrs: {
      id: "headingThree"
    }
  }, [_c("button", {
    staticClass: "accordion-button collapsed",
    attrs: {
      type: "button",
      "data-bs-toggle": "collapse",
      "data-bs-target": "#collapseThree",
      "aria-expanded": "true",
      "aria-controls": "collapseThree"
    },
    on: {
      click: function click($event) {
        return _vm.isOpen("collapseThree");
      }
    }
  }, [_c("div", {
    staticClass: "d-flex justify-content-between align-items-center w-100"
  }, [_c("div", [_vm._v("Cautions / Garants")]), _vm._v(" "), _c("span", [_c("button", {
    staticStyle: {
      background: "#be5500",
      "border-radius": "15%"
    },
    attrs: {
      title: "Ajouter une nouvelle caution",
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.addMoreCaution();
      }
    }
  }, [_c("i", {
    staticClass: "icofont-plus-circle",
    staticStyle: {
      color: "white"
    }
  })])])])])]), _vm._v(" "), _c("div", {
    staticClass: "accordion-collapse collapse show",
    attrs: {
      id: "collapseThree",
      "aria-labelledby": "headingThree",
      "data-bs-parent": ""
    }
  }, [_c("div", {
    staticClass: "accordion-body"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_vm.categorieCreditConso.includes((_vm$dossier_credit = _vm.dossier_credit) === null || _vm$dossier_credit === void 0 ? void 0 : _vm$dossier_credit.applied_templ_name) ? _c("div", {
    staticClass: "border border-3 p-2 pt-4 text-center"
  }, [_vm._m(3), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-around"
  }, [_c("div", {
    staticClass: "form-check"
  }, [_c("input", {
    attrs: {
      value: "Oui",
      type: "checkbox",
      id: "flexCheckDisabled"
    },
    domProps: {
      checked: _vm.cautions.add_caution == "Oui"
    },
    on: {
      change: function change($event) {
        return _vm.checkBoxChange("Oui", "cautions", $event);
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "flexCheckDisabled"
    }
  }, [_vm._v(" Oui ")])]), _vm._v(" "), _c("div", {
    staticClass: "form-check"
  }, [_c("input", {
    attrs: {
      value: "Non",
      type: "checkbox",
      id: "flexCheckCheckedDisabled"
    },
    domProps: {
      checked: _vm.cautions.add_caution == "Non"
    },
    on: {
      change: function change($event) {
        return _vm.checkBoxChange("Non", "cautions", $event);
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "flexCheckCheckedDisabled"
    }
  }, [_vm._v("\n                                                        Non\n                                                    ")])])])]) : _vm._e(), _vm._v(" "), ((_vm$cautions = _vm.cautions) === null || _vm$cautions === void 0 ? void 0 : _vm$cautions.add_caution) === "Oui" && _vm.categorieCreditConso.includes((_vm$dossier_credit2 = _vm.dossier_credit) === null || _vm$dossier_credit2 === void 0 ? void 0 : _vm$dossier_credit2.applied_templ_name) || !_vm.categorieCreditConso.includes((_vm$dossier_credit3 = _vm.dossier_credit) === null || _vm$dossier_credit3 === void 0 ? void 0 : _vm$dossier_credit3.applied_templ_name) ? [_vm._l(_vm.caution_solidaires, function (caution, index) {
    var _caution$files, _caution$files2;
    return _c("form", {
      key: "verif_caution" + index,
      staticClass: "form"
    }, [_c("fieldset", [[undefined, null, false].includes(_vm.seen_caution[index]) ? [_c("legend", {
      staticStyle: {
        cursor: "pointer"
      },
      on: {
        click: function click($event) {
          return _vm.retract("seen_caution", index);
        }
      }
    }, [_c("div", {
      staticClass: "d-flex justify-content-between align-items-center px-2 mt-1",
      staticStyle: {
        background: "#f4f3f3"
      }
    }, [_c("h6", [_vm._v("Caution / Garant " + _vm._s(index + 1))]), _vm._v(" "), _c("span", [_c("i", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: index != 0,
        expression: "index != 0"
      }],
      "class": _vm.iconClass,
      staticStyle: {
        "font-size": "20px",
        color: "red"
      },
      attrs: {
        title: "Supprimer Cette caution"
      },
      on: {
        click: function click($event) {
          $event.stopPropagation();
          return _vm.removeCaution(index);
        }
      }
    }), _vm._v(" "), _c("i", {
      staticClass: "icofont-thin-down",
      staticStyle: {
        color: "black"
      }
    })])])]), _vm._v(" "), _c("div", {
      staticClass: "table-responsive"
    }, [_c("table", {
      staticClass: "table table-borderless"
    }, [_vm._m(4, true), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: caution.nom_prenoms,
        expression: "caution.nom_prenoms"
      }],
      staticClass: "form-control",
      "class": {
        "from-caf": (caution === null || caution === void 0 ? void 0 : caution.from_caf) == true
      },
      domProps: {
        value: caution.nom_prenoms
      },
      on: {
        change: function change($event) {
          return _vm.buildCHecklist();
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(caution, "nom_prenoms", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("date-input", {
      staticClass: "input-date",
      attrs: {
        value: caution.date_naissance
      },
      on: {
        input: function input($event) {
          return _vm.setDateInput($event, "caution_solidaires", "date_naissance", index);
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: caution.lieu_naissance,
        expression: "caution.lieu_naissance"
      }],
      staticClass: "form-control",
      "class": {
        "from-caf": (caution === null || caution === void 0 ? void 0 : caution.from_caf) == true
      },
      domProps: {
        value: caution.lieu_naissance
      },
      on: {
        change: function change($event) {
          return _vm.buildCHecklist();
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(caution, "lieu_naissance", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: caution.nature_piece,
        expression: "caution.nature_piece"
      }],
      staticClass: "form-select",
      "class": {
        "from-caf": (caution === null || caution === void 0 ? void 0 : caution.from_caf) == true
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(caution, "nature_piece", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.buildCHecklist();
        }]
      }
    }, [_c("option", {
      attrs: {
        value: ""
      }
    }), _vm._v(" "), ["CFN CIV", "FINL"].includes(_vm.filiale) ? [_c("option", {
      domProps: {
        value: "Ancienne CNI"
      }
    }, [_vm._v("Ancienne CNI")]), _vm._v(" "), _c("option", {
      domProps: {
        value: "Nouvelle CNI"
      }
    }, [_vm._v("Nouvelle CNI")])] : _c("option", {
      attrs: {
        value: "Carte nationale d'identité"
      }
    }, [_vm._v("Carte nationale d'identité")]), _vm._v(" "), _c("option", {
      domProps: {
        value: "Passeport"
      }
    }, [_vm._v("Passeport")]), _vm._v(" "), _c("option", {
      domProps: {
        value: "Permis de conduire"
      }
    }, [_vm._v("Permis de conduire")]), _vm._v(" "), _c("option", {
      domProps: {
        value: "Carte consulaire"
      }
    }, [_vm._v("Carte consulaire")])], 2)]), _vm._v(" "), _c("td", [_c("div", {
      staticClass: "input-group mb-3",
      staticStyle: {
        width: "100%"
      }
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: caution.numero_piece_identite,
        expression: "caution.numero_piece_identite"
      }],
      staticClass: "form-control",
      "class": {
        "from-caf": (caution === null || caution === void 0 ? void 0 : caution.from_caf) == true
      },
      staticStyle: {
        "max-height": "38px"
      },
      attrs: {
        type: "text",
        "aria-label": "numero_piece_identite",
        "aria-describedby": "basic-addon2",
        placeholder: ["Ancienne CNI"].includes(caution.nature_piece) ? "Numero matricule de la piece" : ["Nouvelle CNI"].includes(caution.nature_piece) ? "NNI de la pièce" : "Numero de la pièce d'identité"
      },
      domProps: {
        value: caution.numero_piece_identite
      },
      on: {
        change: function change($event) {
          return _vm.resetVerification(caution);
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(caution, "numero_piece_identite", $event.target.value);
        }
      }
    }), _vm._v(" "), ["CFN CIV", "FINL"].includes(_vm.filiale) && ["Ancienne CNI", "Nouvelle CNI"].includes(caution.nature_piece) ? _c("span", {
      staticClass: "input-group-text",
      staticStyle: {
        "max-height": "38px",
        cursor: "pointer"
      },
      attrs: {
        id: "basic-addon2"
      }
    }, [_c("span", {
      staticClass: "d-flex align-items-center",
      attrs: {
        title: caution.piece_authentified === true ? "Pièce d'identité authentifiée" : caution.piece_authentified ? "Pièce d'identité non authentifiée" : "Pièce d'identité non verifiée",
        id: "basic-addon2"
      }
    }, [_c("button", {
      staticStyle: {
        height: "24px",
        "font-size": "12px",
        border: "orangered",
        "border-radius": "14px",
        color: "white"
      },
      style: !["", null, undefined, false].includes(caution.piece_authentified) ? "background:green" : "background-color: orangered",
      attrs: {
        type: "button"
      },
      on: {
        click: function click($event) {
          return _vm.verifyIDCardAuthenticity(index, "caution_solidaires");
        }
      }
    }, [["", null, undefined].includes(caution.piece_authentified) ? _c("span", [_vm._v("Vérifer")]) : _c("span", [_vm._v("Voir")])]), _vm._v(" "), [true].includes(_vm.verifying["caution_solidaires" + index]) ? _c("div", {
      staticClass: "mx-2 spinner-border text-warning",
      staticStyle: {
        width: "1.5em",
        height: "1.5em"
      },
      attrs: {
        role: "status"
      }
    }, [_c("span", {
      staticClass: "visually-hidden"
    }, [_vm._v("Loading...")])]) : [caution.piece_authentified === false ? _c("span", {
      staticClass: "mx-2",
      staticStyle: {
        "font-size": "1.5em",
        color: "red"
      }
    }, [_c("i", {
      staticClass: "icofont-close-circled"
    })]) : _vm._e(), _vm._v(" "), caution.piece_authentified === true ? _c("span", {
      staticClass: "mx-2",
      staticStyle: {
        "font-size": "1.5em",
        color: "green"
      }
    }, [_c("i", {
      staticClass: "icofont-check-circled"
    })]) : _vm._e()]], 2)]) : _vm._e()])]), _vm._v(" "), _c("td", [_c("div", {
      staticClass: "d-flex align-items-center"
    }, [(caution === null || caution === void 0 || (_caution$files = caution.files) === null || _caution$files === void 0 ? void 0 : _caution$files.length) > 0 ? _c("span", {
      staticClass: "p-1 px-2 mx-2 text-nowrap",
      staticStyle: {
        "background-color": "rgb(44, 62, 80)",
        color: "white",
        "font-size": "13px",
        "border-radius": "5px",
        "margin-left": "0 !important",
        width: "150px"
      }
    }, [_vm._v("\n                                                                                    " + _vm._s((caution === null || caution === void 0 ? void 0 : caution.nb_files) > 0 ? (caution === null || caution === void 0 || (_caution$files2 = caution.files) === null || _caution$files2 === void 0 ? void 0 : _caution$files2.length) + " fichier(s) uploadé(s)" : "") + "\n                                                                                ")]) : _vm._e(), _vm._v(" "), _c("button", {
      staticClass: "btn shadow-md text-white",
      staticStyle: {
        cursor: "pointer",
        background: "#2c3e50",
        width: "26px",
        "font-size": "13px",
        padding: "1px",
        "margin-right": "7px"
      },
      attrs: {
        type: "button",
        name: "button",
        "data-toggle": "tooltip",
        title: "Cliquer ici pour uploader ou voir le(s) fichier(s)"
      },
      on: {
        click: function click($event) {
          return _vm.addFiles(index, "caution_solidaires");
        }
      }
    }, [_c("i", {
      staticClass: "icofont-attachment"
    })])])])])])])])] : [_c("legend", {
      staticStyle: {
        cursor: "pointer"
      },
      on: {
        click: function click($event) {
          return _vm.retract("seen_caution", index);
        }
      }
    }, [_c("div", {
      staticClass: "d-flex justify-content-between align-items-center px-2",
      staticStyle: {
        background: "#f4f3f3"
      }
    }, [_c("h6", [_vm._v("Caution / Garant " + _vm._s(index + 1))]), _vm._v(" "), _c("span", [_c("i", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: index != 0,
        expression: "index != 0"
      }],
      "class": _vm.iconClass,
      staticStyle: {
        "font-size": "20px",
        color: "red"
      },
      attrs: {
        title: "Supprimer Cette caution"
      },
      on: {
        click: function click($event) {
          $event.stopPropagation();
          return _vm.removeCaution(index);
        }
      }
    }), _vm._v(" "), _c("i", {
      staticClass: "icofont-thin-down",
      staticStyle: {
        color: "black"
      }
    })])])])]], 2)]);
  }), _vm._v(" "), _c("div", {
    staticClass: "flex"
  }, [_c("button", {
    staticClass: "add-button-class",
    attrs: {
      title: "Ajouter une nouvelle caution / nouveau garant",
      type: "button"
    },
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.addMoreCaution();
      }
    }
  }, [_c("i", {
    staticClass: "icofont-plus-circle",
    staticStyle: {
      color: "white"
    }
  }), _vm._v("\n                                                    Ajouter un nouveau\n                                                ")])])] : _vm._e()], 2)])])]) : _vm._e(), _vm._v(" "), _vm.keysToHave.includes("autre_referent") ? _c("div", {
    staticClass: "accordion-item"
  }, [_c("h2", {
    staticClass: "accordion-header",
    attrs: {
      id: "headingFour"
    }
  }, [_c("button", {
    staticClass: "accordion-button collapsed",
    attrs: {
      type: "button",
      "data-bs-toggle": "collapse",
      "data-bs-target": "#collapseFour",
      "aria-expanded": "true",
      "aria-controls": "collapseFour"
    },
    on: {
      click: function click($event) {
        return _vm.isOpen("collapseFour");
      }
    }
  }, [_c("div", {
    staticClass: "d-flex justify-content-between align-items-center w-100"
  }, [_c("div", [_vm._v("Autres référents")]), _vm._v(" "), _c("span", [_c("button", {
    staticStyle: {
      background: "#be5500",
      "border-radius": "15%"
    },
    attrs: {
      title: "Ajouter un nouveau referent",
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.addMoreAutreRef();
      }
    }
  }, [_c("i", {
    staticClass: "icofont-plus-circle",
    staticStyle: {
      color: "white"
    }
  })])])])])]), _vm._v(" "), _c("div", {
    staticClass: "accordion-collapse collapse show",
    attrs: {
      id: "collapseFour",
      "aria-labelledby": "headingFour",
      "data-bs-parent": ""
    }
  }, [_c("div", {
    staticClass: "accordion-body"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_vm._l(_vm.autre_referent, function (autre_ref, index) {
    var _autre_ref$files, _autre_ref$files2;
    return _c("form", {
      key: "autre_ref" + index,
      staticClass: "form"
    }, [[undefined, null, false].includes(_vm.seenAutreRef[index]) ? [_c("legend", {
      staticStyle: {
        cursor: "pointer"
      },
      on: {
        click: function click($event) {
          return _vm.retract("seenAutreRef", index);
        }
      }
    }, [_c("div", {
      staticClass: "d-flex justify-content-between align-items-center px-2",
      staticStyle: {
        background: "#f4f3f3"
      }
    }, [_c("h6", [_vm._v("Référent " + _vm._s(index + 1))]), _vm._v(" "), _c("span", [_c("i", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: index != 0,
        expression: "index != 0"
      }],
      "class": _vm.iconClass,
      staticStyle: {
        "font-size": "20px",
        color: "red"
      },
      attrs: {
        title: "Supprimer ce referent"
      },
      on: {
        click: function click($event) {
          $event.stopPropagation();
          return _vm.removeAutreRef(index);
        }
      }
    }), _vm._v(" "), _c("i", {
      staticClass: "icofont-thin-down",
      staticStyle: {
        color: "black"
      }
    })])])]), _vm._v(" "), _c("div", {
      staticClass: "table-responsive"
    }, [_c("table", {
      staticClass: "table table-borderless"
    }, [_vm._m(5, true), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: autre_ref.nom_prenoms,
        expression: "autre_ref.nom_prenoms"
      }],
      staticClass: "form-control",
      "class": {
        "from-caf": (autre_ref === null || autre_ref === void 0 ? void 0 : autre_ref.from_caf) == true
      },
      domProps: {
        value: autre_ref.nom_prenoms
      },
      on: {
        change: function change($event) {
          return _vm.buildCHecklist();
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(autre_ref, "nom_prenoms", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("date-input", {
      staticClass: "input-date",
      attrs: {
        value: autre_ref.date_naissance
      },
      on: {
        input: function input($event) {
          return _vm.setDateInput($event, "autre_referent", "date_naissance", index);
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: autre_ref.lieu_naissance,
        expression: "autre_ref.lieu_naissance"
      }],
      staticClass: "form-control",
      "class": {
        "from-caf": (autre_ref === null || autre_ref === void 0 ? void 0 : autre_ref.from_caf) == true
      },
      domProps: {
        value: autre_ref.lieu_naissance
      },
      on: {
        change: function change($event) {
          return _vm.buildCHecklist();
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(autre_ref, "lieu_naissance", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: autre_ref.nature_piece,
        expression: "autre_ref.nature_piece"
      }],
      staticClass: "form-select",
      "class": {
        "from-caf": (autre_ref === null || autre_ref === void 0 ? void 0 : autre_ref.from_caf) == true
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(autre_ref, "nature_piece", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.buildCHecklist();
        }]
      }
    }, [_c("option", {
      attrs: {
        value: ""
      }
    }), _vm._v(" "), ["CFN CIV", "FINL"].includes(_vm.filiale) ? [_c("option", {
      domProps: {
        value: "Ancienne CNI"
      }
    }, [_vm._v("Ancienne CNI")]), _vm._v(" "), _c("option", {
      domProps: {
        value: "Nouvelle CNI"
      }
    }, [_vm._v("Nouvelle CNI")])] : _c("option", {
      attrs: {
        value: "Carte nationale d'identité"
      }
    }, [_vm._v("Carte nationale d'identité")]), _vm._v(" "), _c("option", {
      domProps: {
        value: "Passeport"
      }
    }, [_vm._v("Passeport")]), _vm._v(" "), _c("option", {
      domProps: {
        value: "Permis de conduire"
      }
    }, [_vm._v("Permis de conduire")]), _vm._v(" "), _c("option", {
      domProps: {
        value: "Carte consulaire"
      }
    }, [_vm._v("Carte consulaire")])], 2)]), _vm._v(" "), _c("td", [_c("div", {
      staticClass: "input-group mb-3",
      staticStyle: {
        width: "100%"
      }
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: autre_ref.numero_piece_identite,
        expression: "autre_ref.numero_piece_identite"
      }],
      staticClass: "form-control",
      "class": {
        "from-caf": (autre_ref === null || autre_ref === void 0 ? void 0 : autre_ref.from_caf) == true
      },
      staticStyle: {
        "max-height": "38px"
      },
      attrs: {
        type: "text",
        "aria-label": "numero_piece_identite",
        "aria-describedby": "basic-addon2",
        placeholder: ["Ancienne CNI"].includes(autre_ref.nature_piece) ? "Numero matricule de la piece" : ["Nouvelle CNI"].includes(autre_ref.nature_piece) ? "NNI de la pièce" : "Numero de la pièce d'identité"
      },
      domProps: {
        value: autre_ref.numero_piece_identite
      },
      on: {
        change: function change($event) {
          return _vm.resetVerification(autre_ref);
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(autre_ref, "numero_piece_identite", $event.target.value);
        }
      }
    }), _vm._v(" "), ["CFN CIV", "FINL"].includes(_vm.filiale) && ["Ancienne CNI", "Nouvelle CNI"].includes(autre_ref.nature_piece) ? _c("span", {
      staticClass: "input-group-text",
      staticStyle: {
        "max-height": "38px",
        cursor: "pointer"
      },
      attrs: {
        id: "basic-addon2"
      }
    }, [_c("span", {
      staticClass: "d-flex align-items-center",
      attrs: {
        title: autre_ref.piece_authentified === true ? "Pièce d'identité authentifiée" : autre_ref.piece_authentified ? "Pièce d'identité non authentifié" : "Pièce d'identité non verifiée",
        id: "basic-addon2"
      }
    }, [_c("button", {
      staticStyle: {
        height: "24px",
        "font-size": "12px",
        border: "orangered",
        "border-radius": "14px",
        color: "white"
      },
      style: !["", null, undefined].includes(autre_ref.piece_authentified) ? "background:green" : "background-color: orangered",
      attrs: {
        type: "button"
      },
      on: {
        click: function click($event) {
          return _vm.verifyIDCardAuthenticity(index, "autre_referent");
        }
      }
    }, [["", null, undefined].includes(autre_ref.piece_authentified) ? _c("span", [_vm._v("Vérifer")]) : _c("span", [_vm._v("Voir")])]), _vm._v(" "), [true].includes(_vm.verifying["actionnaires" + index]) ? _c("div", {
      staticClass: "mx-2 spinner-border text-warning",
      staticStyle: {
        width: "1.5em",
        height: "1.5em"
      },
      attrs: {
        role: "status"
      }
    }, [_c("span", {
      staticClass: "visually-hidden"
    }, [_vm._v("Loading...")])]) : [autre_ref.piece_authentified === false ? _c("span", {
      staticClass: "mx-2",
      staticStyle: {
        "font-size": "1.5em",
        color: "red"
      }
    }, [_c("i", {
      staticClass: "icofont-close-circled"
    })]) : _vm._e(), _vm._v(" "), autre_ref.piece_authentified === true ? _c("span", {
      staticClass: "mx-2",
      staticStyle: {
        "font-size": "1.5em",
        color: "green"
      }
    }, [_c("i", {
      staticClass: "icofont-check-circled"
    })]) : _vm._e()]], 2)]) : _vm._e()])]), _vm._v(" "), _c("td", [_c("div", {
      staticClass: "d-flex align-items-center"
    }, [(autre_ref === null || autre_ref === void 0 || (_autre_ref$files = autre_ref.files) === null || _autre_ref$files === void 0 ? void 0 : _autre_ref$files.length) > 0 ? _c("span", {
      staticClass: "p-1 px-2 mx-2 text-nowrap",
      staticStyle: {
        "background-color": "rgb(44, 62, 80)",
        color: "white",
        "font-size": "13px",
        "border-radius": "5px",
        "margin-left": "0 !important",
        width: "150px"
      }
    }, [_vm._v("\n                                                                            " + _vm._s((autre_ref === null || autre_ref === void 0 ? void 0 : autre_ref.nb_files) > 0 ? (autre_ref === null || autre_ref === void 0 || (_autre_ref$files2 = autre_ref.files) === null || _autre_ref$files2 === void 0 ? void 0 : _autre_ref$files2.length) + " fichier(s) uploadé(s)" : "") + "\n                                                                        ")]) : _vm._e(), _vm._v(" "), _c("button", {
      staticClass: "btn shadow-md text-white",
      staticStyle: {
        cursor: "pointer",
        background: "#2c3e50",
        width: "26px",
        "font-size": "13px",
        padding: "1px",
        "margin-right": "7px"
      },
      attrs: {
        type: "button",
        name: "button",
        "data-toggle": "tooltip",
        title: "Cliquer ici pour uploader ou voir le(s) fichier(s)"
      },
      on: {
        click: function click($event) {
          return _vm.addFiles(index, "autre_referent");
        }
      }
    }, [_c("i", {
      staticClass: "icofont-attachment"
    })])])])])])])])] : [_c("legend", {
      staticStyle: {
        cursor: "pointer"
      },
      on: {
        click: function click($event) {
          return _vm.retract("seenAutreRef", index);
        }
      }
    }, [_c("div", {
      staticClass: "d-flex justify-content-between align-items-center px-2",
      staticStyle: {
        background: "#f4f3f3"
      }
    }, [_c("h6", [_vm._v("Référent " + _vm._s(index + 1))]), _vm._v(" "), _c("span", [_c("i", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: index != 0,
        expression: "index != 0"
      }],
      "class": _vm.iconClass,
      staticStyle: {
        "font-size": "20px",
        color: "red"
      },
      attrs: {
        title: "Supprimer ce referent"
      },
      on: {
        click: function click($event) {
          $event.stopPropagation();
          return _vm.removeAutreRef(index);
        }
      }
    }), _vm._v(" "), _c("i", {
      staticClass: "icofont-thin-down",
      staticStyle: {
        color: "black"
      }
    })])])])]], 2);
  }), _vm._v(" "), _c("div", {
    staticClass: "flex"
  }, [_c("button", {
    staticClass: "add-button-class",
    attrs: {
      title: "Ajouter un nouveau referent",
      type: "button"
    },
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.addMoreAutreRef();
      }
    }
  }, [_c("i", {
    staticClass: "icofont-plus-circle",
    staticStyle: {
      color: "white"
    }
  }), _vm._v("\n                                                Ajouter un nouveau\n                                            ")])])], 2)])])]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-end mt-2"
  }, [!_vm.isLoading ? _c("button", {
    staticClass: "btn btn-success",
    staticStyle: {
      "padding-top": "0px",
      "padding-bottom": "0px",
      "border-radius": "5px",
      "background-color": "#27ae60"
    },
    attrs: {
      title: "Avis Favorable"
    },
    on: {
      click: function click($event) {
        return _vm.sendDecision();
      }
    }
  }, [_vm._v("\n                         Continuer\n                    ")]) : _c("button", {
    staticClass: "btn btn-secondary",
    staticStyle: {
      "padding-top": "0px",
      "padding-bottom": "0px",
      "background-color": "#7f8c8d"
    },
    attrs: {
      disabled: ""
    }
  }, [_vm._m(6), _vm._v(" Prise en compte de la décision en cours ...\n                    ")]), _vm._v(" "), !_vm.isLoading ? _c("button", {
    staticClass: "btn btn-secondary",
    staticStyle: {
      "padding-top": "3px",
      "padding-bottom": "0px",
      "border-radius": "5px",
      "margin-left": "13px",
      background: "#2c3e50",
      color: "white"
    },
    attrs: {
      title: "Avis Favorable"
    },
    on: {
      click: function click() {
        return _vm.$emit("closeCheckingKWC");
      }
    }
  }, [_vm._v("\n                        Retour\n                    ")]) : _vm._e()])])])]), _vm._v(" "), _c("modal", {
    staticStyle: {
      "z-index": "4"
    },
    attrs: {
      name: "id-card-details",
      width: "70%",
      height: "auto",
      clickToClose: false
    }
  }, [_c("div", {
    staticClass: "container",
    staticStyle: {
      "margin-bottom": "10px"
    }
  }, [_vm.idCardData ? _c("div", {
    staticClass: "py-4",
    staticStyle: {
      "margin-bottom": "10px",
      "max-height": "80vh",
      "overflow-y": "auto"
    }
  }, [_c("div", {
    staticClass: "row p-0 m-0"
  }, [_c("div", {
    staticClass: "border border-secondary custom-card",
    staticStyle: {
      padding: "10px"
    }
  }, [_c("div", {
    staticClass: "d-md-flex justify-content-center"
  }, [_c("div", {
    staticClass: "text-center text-uppercase border title",
    staticStyle: {
      background: "#34495e",
      color: "white",
      width: "80%"
    }
  }, [_vm._v("\n                                Information personnelles\n                            ")])]), _vm._v(" "), _c("div", {
    staticClass: "content mt-4 d-md-flex justify-content-center align-items-center"
  }, [(_vm$idCardData = _vm.idCardData) !== null && _vm$idCardData !== void 0 && _vm$idCardData.photo ? _c("div", {
    staticClass: "photo-area border d-flex justify-content-center p-4 m-4 align-content-center",
    staticStyle: {
      height: "auto",
      width: "18%"
    }
  }, [(_vm$idCardData2 = _vm.idCardData) !== null && _vm$idCardData2 !== void 0 && _vm$idCardData2.photo ? _c("img", {
    staticStyle: {
      width: "100%"
    },
    attrs: {
      src: (_vm$idCardData3 = _vm.idCardData) === null || _vm$idCardData3 === void 0 ? void 0 : _vm$idCardData3.photo
    }
  }) : _c("i", {
    staticClass: "icofont-ui-user",
    staticStyle: {
      "font-size": "100px"
    },
    attrs: {
      title: "Problème d'affichage de la photo"
    }
  })]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "infos-area",
    staticStyle: {
      height: "auto",
      width: "80%"
    }
  }, [_c("div", {
    staticClass: "row p-4"
  }, [_c("div", {
    staticClass: "col-4"
  }, [_c("label", {
    staticClass: "form-label"
  }, [_c("b", [_vm._v("Nom:")])]), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.idCardData.last_name))])]), _vm._v(" "), _c("div", {
    staticClass: "col-4"
  }, [_c("label", {
    staticClass: "form-label"
  }, [_c("b", [_vm._v("Prénoms:")])]), _vm._v(" "), _c("span", [_vm._v(_vm._s((_vm$idCardData4 = _vm.idCardData) === null || _vm$idCardData4 === void 0 ? void 0 : _vm$idCardData4.first_name))])]), _vm._v(" "), _c("div", {
    staticClass: "col-4"
  }, [_c("label", {
    staticClass: "form-label"
  }, [_c("b", [_vm._v("Date de naissance:")])]), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.idCardData.birth_date))])]), _vm._v(" "), _c("div", {
    staticClass: "col-4"
  }, [_c("label", {
    staticClass: "form-label"
  }, [_c("b", [_vm._v("Sexe:")])]), _vm._v(" "), _c("span", [_vm._v(_vm._s((_vm$idCardData5 = _vm.idCardData) === null || _vm$idCardData5 === void 0 ? void 0 : _vm$idCardData5.gender))])]), _vm._v(" "), _c("div", {
    staticClass: "col-4"
  }, [_c("label", {
    staticClass: "form-label"
  }, [_c("b", [_vm._v("Nationalité:")])]), _vm._v(" "), _c("span", [_vm._v(_vm._s((_vm$idCardData6 = _vm.idCardData) === null || _vm$idCardData6 === void 0 ? void 0 : _vm$idCardData6.nationality))])]), _vm._v(" "), _c("div", {
    staticClass: "col-4"
  }, [_c("label", {
    staticClass: "form-label"
  }, [_c("b", [_vm._v("Lieu de naissance:")])]), _vm._v(" "), _c("span", [_vm._v(_vm._s((_vm$idCardData$birth_ = (_vm$idCardData7 = _vm.idCardData) === null || _vm$idCardData7 === void 0 ? void 0 : _vm$idCardData7.birth_town) !== null && _vm$idCardData$birth_ !== void 0 ? _vm$idCardData$birth_ : ""))])]), _vm._v(" "), _c("div", {
    staticClass: "col-4"
  }, [_c("label", {
    staticClass: "form-label"
  }, [_c("b", [_vm._v("Adresse 1:")])]), _vm._v(" "), _c("span", [_vm._v(_vm._s((_vm$idCardData$reside = (_vm$idCardData8 = _vm.idCardData) === null || _vm$idCardData8 === void 0 ? void 0 : _vm$idCardData8.residence_adr_1) !== null && _vm$idCardData$reside !== void 0 ? _vm$idCardData$reside : ""))])]), _vm._v(" "), _c("div", {
    staticClass: "col-4"
  }, [_c("label", {
    staticClass: "form-label"
  }, [_c("b", [_vm._v("Adresse 2:")])]), _vm._v(" "), _c("span", [_vm._v(_vm._s((_vm$idCardData9 = _vm.idCardData) === null || _vm$idCardData9 === void 0 ? void 0 : _vm$idCardData9.residence_adr_2))])]), _vm._v(" "), _c("div", {
    staticClass: "col-4"
  }, [_c("label", {
    staticClass: "form-label"
  }, [_c("b", [_vm._v("Numéro de pièce:")])]), _vm._v(" "), _c("span", [_vm._v(_vm._s((_vm$idCardData0 = _vm.idCardData) === null || _vm$idCardData0 === void 0 ? void 0 : _vm$idCardData0.id_card_number))])]), _vm._v(" "), _c("div", {
    staticClass: "col-4"
  }, [_c("label", {
    staticClass: "form-label"
  }, [_c("b", [_vm._v("Profession:")])]), _vm._v(" "), _c("span", [_vm._v(_vm._s((_vm$idCardData1 = _vm.idCardData) === null || _vm$idCardData1 === void 0 ? void 0 : _vm$idCardData1.profession))])]), _vm._v(" "), _c("div", {
    staticClass: "col-4"
  }, [_c("label", {
    staticClass: "form-label"
  }, [_c("b", [_vm._v("NNI:")])]), _vm._v(" "), _c("span", [_vm._v(_vm._s((_vm$idCardData10 = _vm.idCardData) === null || _vm$idCardData10 === void 0 ? void 0 : _vm$idCardData10.uin))])]), _vm._v(" "), _c("div", {
    staticClass: "col-4"
  }, [_c("label", {
    staticClass: "form-label"
  }, [_c("b", [_vm._v("Situation matrimoniale:")])]), _vm._v(" "), _c("span", [_vm._v(_vm._s((_vm$idCardData11 = _vm.idCardData) !== null && _vm$idCardData11 !== void 0 && _vm$idCardData11.spouse_name ? "MARIE" : "CELIBATAIRE"))])]), _vm._v(" "), (_vm$idCardData12 = _vm.idCardData) !== null && _vm$idCardData12 !== void 0 && _vm$idCardData12.spouse_name ? _c("div", {
    staticClass: "col-4"
  }, [_c("label", {
    staticClass: "form-label"
  }, [_c("b", [_vm._v("CONJOINT(E):")])]), _vm._v(" "), _c("span", [_vm._v(_vm._s((_vm$idCardData13 = _vm.idCardData) === null || _vm$idCardData13 === void 0 ? void 0 : _vm$idCardData13.spouse_name))])]) : _vm._e()])])]), _vm._v(" "), _c("div", {
    staticClass: "d-md-flex justify-content-center"
  }, [_c("div", {
    staticClass: "text-center text-uppercase border title",
    staticStyle: {
      background: "#34495e",
      color: "white",
      width: "80%"
    }
  }, [_vm._v("\n                                Informations relatives à la famille\n                            ")])]), _vm._v(" "), _c("div", {
    staticClass: "content mt-4 d-md-flex justify-content-center align-items-end"
  }, [_c("div", {
    staticClass: "infos-area",
    staticStyle: {
      height: "auto",
      width: "80%"
    }
  }, [_c("div", {
    staticClass: "row p-4"
  }, [_c("div", {
    staticClass: "col-6"
  }, [_c("label", {
    staticClass: "form-label"
  }, [_c("b", [_vm._v("Nom du père:")])]), _vm._v(" "), _c("span", [_vm._v(_vm._s((_vm$idCardData14 = _vm.idCardData) === null || _vm$idCardData14 === void 0 ? void 0 : _vm$idCardData14.father_last_name))])]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("label", {
    staticClass: "form-label"
  }, [_c("b", [_vm._v("Nom de la mère:")])]), _vm._v(" "), _c("span", [_vm._v(_vm._s((_vm$idCardData15 = _vm.idCardData) === null || _vm$idCardData15 === void 0 ? void 0 : _vm$idCardData15.mother_last_name))])]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("label", {
    staticClass: "form-label"
  }, [_c("b", [_vm._v("Prénoms du père:")])]), _vm._v(" "), _c("span", [_vm._v(_vm._s((_vm$idCardData16 = _vm.idCardData) === null || _vm$idCardData16 === void 0 ? void 0 : _vm$idCardData16.father_first_name))])]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("label", {
    staticClass: "form-label"
  }, [_c("b", [_vm._v("Prénoms de la mère:")])]), _vm._v(" "), _c("span", [_vm._v(_vm._s((_vm$idCardData17 = _vm.idCardData) === null || _vm$idCardData17 === void 0 ? void 0 : _vm$idCardData17.mother_first_name) + " ")])]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("label", {
    staticClass: "form-label"
  }, [_c("b", [_vm._v("Date de naissance du père:")])]), _vm._v(" "), _c("span", [_vm._v(_vm._s((_vm$idCardData18 = _vm.idCardData) === null || _vm$idCardData18 === void 0 ? void 0 : _vm$idCardData18.father_birth_date))])]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("label", {
    staticClass: "form-label"
  }, [_c("b", [_vm._v("Date de naissance de la mère:")])]), _vm._v(" "), _c("span", [_vm._v(_vm._s((_vm$idCardData19 = _vm.idCardData) === null || _vm$idCardData19 === void 0 ? void 0 : _vm$idCardData19.mother_birth_date))])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-center mt-4",
    staticStyle: {
      padding: "0px"
    }
  }, [_c("div", [_c("p", {
    staticStyle: {
      "margin-bottom": "0px",
      "font-size": "22px",
      "font-weight": "bolder",
      width: "470px",
      "text-align": "center"
    }
  }, [_vm._v("Ces informations correspondent-elles à celles déjà indiquées sur la pièce d'identité fournie ?")]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-center mt-4"
  }, [_c("div", {
    staticStyle: {
      "margin-right": "10px"
    }
  }, [_c("button", {
    staticClass: "btn btn-outline-success",
    style: _vm.idCardData.piece_authentified === true ? "background:#198754; color:white" : "",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.checkBoxChange("oui");
      }
    }
  }, [_vm._v("Oui")])]), _vm._v(" "), _c("div", [_c("button", {
    staticClass: "btn btn-outline-danger",
    style: _vm.idCardData.piece_authentified === false ? "background:#dc3545; color:white" : "",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.checkBoxChange("non");
      }
    }
  }, [_vm._v("Non")])])])])])])]) : _vm._e(), _vm._v(" "), ![undefined, null, ""].includes((_vm$idCardData20 = _vm.idCardData) === null || _vm$idCardData20 === void 0 ? void 0 : _vm$idCardData20.piece_authentified) ? _c("div", {
    staticClass: "col-12 text-end"
  }, [_c("button", {
    staticClass: "btn btn-secondary text-white",
    on: {
      click: function click() {
        return _vm.$modal.hide("id-card-details");
      }
    }
  }, [_vm._v("Fermer")])]) : _vm._e()])]), _vm._v(" "), _vm.messageError ? _c("modal", {
    staticStyle: {
      "z-index": "5"
    },
    attrs: {
      name: "auto-verif",
      width: "65%",
      height: "auto",
      clickToClose: false
    }
  }, [_c("div", {
    staticClass: "container",
    staticStyle: {
      "margin-bottom": "10px"
    }
  }, [_c("div", {
    staticClass: "py-4",
    staticStyle: {
      "margin-bottom": "10px",
      "max-height": "80vh",
      "overflow-y": "auto"
    }
  }, [_c("div", {
    staticClass: "modal-header d-flex justify-content-center"
  }, [_c("h5", {
    staticClass: "modal-title text-warning"
  }, [_c("b", [_vm._v("NON CONFORMITES DES DONNEES")])])]), _vm._v(" "), _c("button", {
    staticClass: "btn-close",
    staticStyle: {
      position: "absolute",
      right: "3px",
      top: "5px"
    },
    attrs: {
      type: "button"
    },
    on: {
      click: function click() {
        return _vm.$modal.hide("auto-verif");
      }
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-center pt-4"
  }, [_c("div", {
    staticClass: "text-center",
    staticStyle: {
      "font-size": "22px",
      color: "rgb(208 153 3)"
    }
  }, [_c("i", {
    staticClass: "icofont-warning icofont-3x text-center"
  }), _vm._v(" "), _c("br"), _vm._v(" "), _c("b", [_vm._v("Attention !!!")])])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-center py-2"
  }, [_c("p", [_vm._v("\n                        Les informations que vous avez saisies ne concordent pas avec celles provenant du système.\n                    ")])]), _vm._v(" "), _c("div", {
    staticClass: "row p-0 m-0"
  }, [_c("div", {
    staticClass: "col-6"
  }, [_c("div", {
    staticClass: "bg-deep-blue text-white p-1 rounded-sm"
  }, [_vm._v("\n                            Informations saisies par le CAF\n                        ")])]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("div", {
    staticClass: "bg-deep-blue text-white p-1 rounded-sm"
  }, [_vm._v("\n                            Informations provenant du système ONECI\n                        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "row p-0 m-0"
  }, [_c("div", {
    staticClass: "col-6"
  }, [_c("label", {
    staticClass: "form-label my-1",
    staticStyle: {
      color: "orangered"
    },
    attrs: {
      "for": ""
    }
  }, [_vm._v("Nom et prenom")]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: (_vm$messageError = _vm.messageError) === null || _vm$messageError === void 0 || (_vm$messageError = _vm$messageError.fieldset) === null || _vm$messageError === void 0 ? void 0 : _vm$messageError.nom_prenoms
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("label", {
    staticClass: "form-label my-1",
    staticStyle: {
      color: "orangered"
    },
    attrs: {
      "for": ""
    }
  }, [_vm._v("Nom et prenom")]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.idCardData.last_name + " " + _vm.idCardData.first_name
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "row p-0 m-0"
  }, [_c("div", {
    staticClass: "col-6"
  }, [_c("label", {
    staticClass: "form-label my-1",
    staticStyle: {
      color: "orangered"
    },
    attrs: {
      "for": ""
    }
  }, [_vm._v("Date naissance")]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: (_vm$messageError2 = _vm.messageError) === null || _vm$messageError2 === void 0 || (_vm$messageError2 = _vm$messageError2.fieldset) === null || _vm$messageError2 === void 0 ? void 0 : _vm$messageError2.date_naissance
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("label", {
    staticClass: "form-label my-1",
    staticStyle: {
      color: "orangered"
    },
    attrs: {
      "for": ""
    }
  }, [_vm._v("Date naissance")]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.idCardData.date_naissance
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "row p-0 m-0"
  }, [_c("div", {
    staticClass: "col-6"
  }, [_c("label", {
    staticClass: "form-label my-1",
    staticStyle: {
      color: "orangered"
    },
    attrs: {
      "for": ""
    }
  }, [_vm._v("Lieu naissance")]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: (_vm$messageError3 = _vm.messageError) === null || _vm$messageError3 === void 0 || (_vm$messageError3 = _vm$messageError3.fieldset) === null || _vm$messageError3 === void 0 ? void 0 : _vm$messageError3.lieu_naissance
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("label", {
    staticClass: "form-label my-1",
    staticStyle: {
      color: "orangered"
    },
    attrs: {
      "for": ""
    }
  }, [_vm._v("Lieu naissance")]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.idCardData.lieu_naissance
    }
  })])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 text-end"
  }, [_c("button", {
    staticClass: "btn btn-secondary text-white",
    on: {
      click: function click() {
        return _vm.$modal.hide("auto-verif");
      }
    }
  }, [_vm._v("Fermer")])])]) : _vm._e()], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "modal-header d-flex justify-content-center"
  }, [_c("h5", {
    staticClass: "modal-title"
  }, [_c("b", [_vm._v("KNOW YOUR CUSTOMER")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Nom et prénoms"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])])]), _vm._v(" "), _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Date de naissance"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])])]), _vm._v(" "), _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Lieu de naissance"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])])]), _vm._v(" "), _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Nature de la pièce d'identité "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])])]), _vm._v(" "), _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Numéro de la pièce d'identité"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Nom et prénoms"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])])]), _vm._v(" "), _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Date de naissance"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])])]), _vm._v(" "), _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Lieu de naissance"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])])]), _vm._v(" "), _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Nature de la pièce d'identité "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])])]), _vm._v(" "), _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Numéro de la pièce d'identité"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "d-flex justify-content-center text-center"
  }, [_c("span", {
    staticClass: "bg-white d-flex text-center",
    staticStyle: {
      "margin-top": "-12px"
    }
  }, [_vm._v("\n                                                    Avez-vous des cautions / garants à ajouter ? "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Nom et prénoms"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])])]), _vm._v(" "), _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Date de naissance"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])])]), _vm._v(" "), _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Lieu de naissance"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])])]), _vm._v(" "), _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Nature de la pièce d'identité "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])])]), _vm._v(" "), _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Numéro de la pièce d'identité"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Nom et prénoms"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])])]), _vm._v(" "), _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Date de naissance"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])])]), _vm._v(" "), _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Lieu de naissance"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])])]), _vm._v(" "), _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Nature de la pièce d'identité "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])])]), _vm._v(" "), _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Numero de la pièce d'identité"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("span", {
    staticClass: "spinner-border spinner-border-sm"
  }, [_c("span", {
    staticClass: "visually-hidden"
  }, [_vm._v("Loading...")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/cofina/CheckingKWC.vue?vue&type=style&index=0&id=67ad9a42&lang=css&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/cofina/CheckingKWC.vue?vue&type=style&index=0&id=67ad9a42&lang=css&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.accordion-button[data-v-67ad9a42]{\r\n    background-color: #34495e !important;\r\n    color: white !important;\r\n    height: 35px;\n}\n.form-label[data-v-67ad9a42]{\r\n    margin-bottom:0px;\n}\r\n/* .accordion-body{\r\n    max-height: 315px;\r\n    overflow-y: auto;\r\n} */\n.accordion-button[data-v-67ad9a42]::after{\r\n    background-image:none\n}\r\n /* td input{\r\n    width: 150px\r\n }\r\n td select{\r\n    width: 250px\r\n }\r\n .multiselect{\r\n    width:100px !important;\r\n } */\r\n /* .input-date{\r\n    width: 240px;\r\n } */\n.from-caf[data-v-67ad9a42]{\r\n    background: #00ffff21;\r\n    color: #000;\n}\n.multiselect-green *[data-v-67ad9a42]{\r\n    background:#00ffff21\n}\n.add-button-class[data-v-67ad9a42]{\r\n    font-size: 12px;\r\n    background-color: #be5500;\r\n    color:white; border:0;\n}\n.vm-modal[data-v-67ad9a42]{\r\n    border: 3px dotted rgb(52, 73, 94);\n}\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/cofina/CheckingKWC.vue?vue&type=style&index=0&id=67ad9a42&lang=css&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/cofina/CheckingKWC.vue?vue&type=style&index=0&id=67ad9a42&lang=css&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckingKWC_vue_vue_type_style_index_0_id_67ad9a42_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CheckingKWC.vue?vue&type=style&index=0&id=67ad9a42&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/cofina/CheckingKWC.vue?vue&type=style&index=0&id=67ad9a42&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckingKWC_vue_vue_type_style_index_0_id_67ad9a42_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckingKWC_vue_vue_type_style_index_0_id_67ad9a42_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/shared/cofina/CheckingKWC.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/shared/cofina/CheckingKWC.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CheckingKWC_vue_vue_type_template_id_67ad9a42_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckingKWC.vue?vue&type=template&id=67ad9a42&scoped=true */ "./resources/js/components/shared/cofina/CheckingKWC.vue?vue&type=template&id=67ad9a42&scoped=true");
/* harmony import */ var _CheckingKWC_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CheckingKWC.vue?vue&type=script&lang=js */ "./resources/js/components/shared/cofina/CheckingKWC.vue?vue&type=script&lang=js");
/* harmony import */ var _CheckingKWC_vue_vue_type_style_index_0_id_67ad9a42_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CheckingKWC.vue?vue&type=style&index=0&id=67ad9a42&lang=css&scoped=true */ "./resources/js/components/shared/cofina/CheckingKWC.vue?vue&type=style&index=0&id=67ad9a42&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CheckingKWC_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CheckingKWC_vue_vue_type_template_id_67ad9a42_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _CheckingKWC_vue_vue_type_template_id_67ad9a42_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "67ad9a42",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/shared/cofina/CheckingKWC.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/cofina/CheckingKWC.vue?vue&type=script&lang=js":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/shared/cofina/CheckingKWC.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckingKWC_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CheckingKWC.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/cofina/CheckingKWC.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckingKWC_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/cofina/CheckingKWC.vue?vue&type=style&index=0&id=67ad9a42&lang=css&scoped=true":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/shared/cofina/CheckingKWC.vue?vue&type=style&index=0&id=67ad9a42&lang=css&scoped=true ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckingKWC_vue_vue_type_style_index_0_id_67ad9a42_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CheckingKWC.vue?vue&type=style&index=0&id=67ad9a42&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/cofina/CheckingKWC.vue?vue&type=style&index=0&id=67ad9a42&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/shared/cofina/CheckingKWC.vue?vue&type=template&id=67ad9a42&scoped=true":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/shared/cofina/CheckingKWC.vue?vue&type=template&id=67ad9a42&scoped=true ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckingKWC_vue_vue_type_template_id_67ad9a42_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckingKWC_vue_vue_type_template_id_67ad9a42_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckingKWC_vue_vue_type_template_id_67ad9a42_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CheckingKWC.vue?vue&type=template&id=67ad9a42&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/cofina/CheckingKWC.vue?vue&type=template&id=67ad9a42&scoped=true");


/***/ })

}]);