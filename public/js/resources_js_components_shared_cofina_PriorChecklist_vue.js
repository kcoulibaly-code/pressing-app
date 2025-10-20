"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_shared_cofina_PriorChecklist_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/cofina/PriorChecklist.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/cofina/PriorChecklist.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _services_proxy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/proxy.service */ "./resources/js/services/proxy.service.js");
/* harmony import */ var _services_connects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/connects.service */ "./resources/js/services/connects.service.js");
/* harmony import */ var _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vueform/multiselect/dist/multiselect.vue2 */ "./node_modules/@vueform/multiselect/dist/multiselect.vue2.js");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
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
  name: "PriorChecklist",
  props: {
    nodeElements: Array,
    dossier_credit: Object,
    server: String,
    actionToBePerformedNew: String
  },
  components: {
    Multiselect: _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_3__["default"],
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_4__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_4__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_4__.ChevronDownIcon
  },
  data: function data() {
    return {
      connectsHost: _services_connects_service__WEBPACK_IMPORTED_MODULE_2__["default"].loadablehost(),
      loadingOffView: true,
      conformite_donnees: {
        verification_encours: "",
        verification_cni: "",
        Verification_caution_solidaire: "",
        responsable_entreprise: "",
        donnees_conformes: ""
      },
      verification_cni: {
        date_naissance: "",
        nature_piece: "",
        numero_piece: "",
        denomination: '',
        numero_tel: "",
        email: "",
        code_pays: ""
      },
      verification_encours: {
        encours_systeme: "",
        encours_modifie: "",
        date_sys_encours: "",
        date_encours_modifie: "",
        approved: ""
      },
      repEnt: {
        nature_piece: "",
        numero_piece: "",
        code_pays: "",
        numero_tel: "",
        nom_prenom: "",
        pouvoir_signature: "",
        experience: "",
        diplome: "",
        sexe: "",
        email: "",
        fonction: "",
        date_naissance: ""
      },
      responsable_entreprise: [],
      keysToHave: ["verification_cni", "Verification_caution_solidaire"],
      seen_resp: {},
      seen_caution: {},
      isHovered: false,
      caution: {
        localisation_caution_solidaire: "",
        nom_prenoms: "",
        numero_piece_identite: "",
        numero_tel_caution_solidaire: "",
        profession: "",
        revenu_mensuel: "",
        valeur_cautionnement: "",
        valeur_patrimoine: "",
        date_naissance: "",
        nb_files: 0,
        files: [],
        template: "",
        code_pays: ""
      },
      Verification_caution_solidaire: {
        detected_caution_sys: null,
        // Si le Systeme a detecté des cautions dans le T4,
        add_caution: "" // Reponse a la question avez-vous des cautions a ajouté ?,
      },
      caution_solidaires: [],
      isAccordionHover: false,
      isLoading: false,
      countries: null,
      defaultResponsable: ["Directeur Géneral"
      // "Directeur des Affaires Financières",
      // "Directeur commercial"
      ],
      codePays: null,
      exceptFiled: ["email", "encours_systeme", "date_sys_encours", "date_encours_modifie", "date_naissance", "indicatif_caution_solidaire", "latitude_domicile_principale", "longitude_domicile_principale", "latitude_activite", "longitude_activite"],
      currentAccordion: null
    };
  },
  created: function created() {
    var _this = this;
    _services_credit_service__WEBPACK_IMPORTED_MODULE_0__["default"].loadpaysindicatif().then(function (res) {
      _this.countries = res.data;
    })["catch"](function (err) {
      console.log(err);
    });
  },
  mounted: function mounted() {
    var _this2 = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var buttons;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            buttons = document.querySelectorAll('.accordion-button'); // Supprimer la classe '--bs-accordion-btn-icon' s'il y a lieu
            buttons.forEach(function (button) {
              button.classList.remove('--bs-accordion-btn-icon');
            });
            _context.next = 4;
            return _this2.whatWouldBeDone();
          case 4:
            _this2.getFiles();
            EventBus.$on("come-back-for-ajournament-checklist", function () {
              return _this2.isLoading = true;
            });
            EventBus.$on("created-extra-file-template", function (data) {
              var _data$template5;
              var template_name_cni = "Pièce jointe -verification_cni" + '_' + _this2.$route.params.templateId;
              if (![null, undefined, ''].includes(_this2.caution_solidaires)) {
                if (![null, undefined, 0].includes(_this2.caution_solidaires)) {
                  var _this2$caution_solida;
                  (_this2$caution_solida = _this2.caution_solidaires) === null || _this2$caution_solida === void 0 || _this2$caution_solida.forEach(function (element, index) {
                    var _data$template;
                    var template_name = "Pièce jointe -caution_solidaire_n_1_checklist" + index + '_' + _this2.$route.params.templateId;
                    // console.log("created-extra-file-template", data);
                    // console.log({template_name, data_template: data?.template?.name})
                    if (template_name == (data === null || data === void 0 || (_data$template = data.template) === null || _data$template === void 0 ? void 0 : _data$template.name)) {
                      var _data$template2, _data$template3, _data$template4;
                      _this2.caution_solidaires[index]["template"] = {
                        id: data === null || data === void 0 || (_data$template2 = data.template) === null || _data$template2 === void 0 ? void 0 : _data$template2.id,
                        name: data === null || data === void 0 || (_data$template3 = data.template) === null || _data$template3 === void 0 ? void 0 : _data$template3.name,
                        slug: data === null || data === void 0 || (_data$template4 = data.template) === null || _data$template4 === void 0 ? void 0 : _data$template4.slug
                      };
                    }
                  });
                }
              }
              if (template_name_cni == (data === null || data === void 0 || (_data$template5 = data.template) === null || _data$template5 === void 0 ? void 0 : _data$template5.name)) {
                var _data$template6, _data$template7, _data$template8;
                _this2.verification_cni["template"] = {
                  id: data === null || data === void 0 || (_data$template6 = data.template) === null || _data$template6 === void 0 ? void 0 : _data$template6.id,
                  name: data === null || data === void 0 || (_data$template7 = data.template) === null || _data$template7 === void 0 ? void 0 : _data$template7.name,
                  slug: data === null || data === void 0 || (_data$template8 = data.template) === null || _data$template8 === void 0 ? void 0 : _data$template8.slug
                };
              }
              _this2.buildCHecklist();
            });
            EventBus.$on("extra-files-uploaded", function (data) {
              var _this2$verification_c2, _data$template10;
              // console.log('extra-files-uploaded', data);
              var caution_added = _this2.caution_solidaires;
              if (![undefined, null, ''].includes(caution_added)) {
                if (![undefined, null, 0].includes(caution_added.length)) {
                  if ((caution_added === null || caution_added === void 0 ? void 0 : caution_added.length) > 0) {
                    caution_added.forEach(function (element, index) {
                      var _element$template2, _data$template0;
                      var files = [];
                      data.files.forEach(function (file) {
                        var _element$template, _data$template9;
                        if ((file === null || file === void 0 ? void 0 : file.extra_file_template_id) != null && (element === null || element === void 0 || (_element$template = element.template) === null || _element$template === void 0 ? void 0 : _element$template.id) == (data === null || data === void 0 || (_data$template9 = data.template) === null || _data$template9 === void 0 ? void 0 : _data$template9.id)) {
                          files.push(file);
                        }
                      });
                      if ((element === null || element === void 0 || (_element$template2 = element.template) === null || _element$template2 === void 0 ? void 0 : _element$template2.id) == (data === null || data === void 0 || (_data$template0 = data.template) === null || _data$template0 === void 0 ? void 0 : _data$template0.id)) {
                        _this2.caution_solidaires[index]["nb_files"] = files === null || files === void 0 ? void 0 : files.length;
                        _this2.caution_solidaires[index]["files"] = files;
                      }
                    });
                  }
                }
              }
              var files_identity = [];
              data.files.forEach(function (file) {
                var _this2$verification_c, _data$template1;
                if ((file === null || file === void 0 ? void 0 : file.extra_file_template_id) != null && ((_this2$verification_c = _this2.verification_cni) === null || _this2$verification_c === void 0 || (_this2$verification_c = _this2$verification_c.template) === null || _this2$verification_c === void 0 ? void 0 : _this2$verification_c.id) == (data === null || data === void 0 || (_data$template1 = data.template) === null || _data$template1 === void 0 ? void 0 : _data$template1.id)) {
                  files_identity.push(file);
                }
              });
              if (((_this2$verification_c2 = _this2.verification_cni) === null || _this2$verification_c2 === void 0 || (_this2$verification_c2 = _this2$verification_c2.template) === null || _this2$verification_c2 === void 0 ? void 0 : _this2$verification_c2.id) == (data === null || data === void 0 || (_data$template10 = data.template) === null || _data$template10 === void 0 ? void 0 : _data$template10.id)) {
                _this2.verification_cni["nb_files"] = files_identity === null || files_identity === void 0 ? void 0 : files_identity.length;
                _this2.verification_cni["files"] = files_identity;
              }
              _this2.buildCHecklist();
            });
          case 8:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  computed: {
    iconClass: function iconClass() {
      return this.isHovered ? 'icofont-ui-delete' : 'icofont-trash';
    },
    typeClient: function typeClient() {
      var _this$dossier_credit$;
      var typeClient;
      var applied_templ_name = this.dossier_credit.applied_templ_name;
      typeClient = (_this$dossier_credit$ = this.dossier_credit[this.determineCredPubTables(applied_templ_name)[0]]) === null || _this$dossier_credit$ === void 0 ? void 0 : _this$dossier_credit$.type_de_clientele;
      return typeClient;
    },
    cafName: function cafName() {
      var _this$dossier_credit;
      var caf = (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.pub_workflow.find(function (el) {
        return (el === null || el === void 0 ? void 0 : el.responsible_role_uuid) == "r472oAxtaFJSlsh5";
      });
      return ![undefined, null, ''].includes(caf) ? "(".concat(caf.responsible, ")") : '';
    }
  },
  methods: {
    selectResp: function selectResp(event) {
      if (event.target.checked) {
        if (!this.responsable_entreprise.includes(event.target.value)) {
          this.defaultResponsable.push(event.target.value);
          var resp = _objectSpread(_objectSpread({}, this.repEnt), {}, {
            fonction: event.target.value
          });
          this.responsable_entreprise.push(resp);
        }
      } else {
        var _this$responsable_ent;
        var elToPopIndex = (_this$responsable_ent = this.responsable_entreprise) === null || _this$responsable_ent === void 0 ? void 0 : _this$responsable_ent.findIndex(function (el) {
          return el.fonction == event.target.value;
        });
        var ind = this.defaultResponsable.findIndex(function (el) {
          return el == event.target.value;
        });
        if (elToPopIndex >= 0) this.responsable_entreprise.splice(elToPopIndex, 1);
        if (ind >= 0) this.defaultResponsable.splice(ind, 1);
      }
      this.buildCHecklist();
    },
    multiselectGreen: function multiselectGreen(caution) {
      return  true ? (caution === null || caution === void 0 ? void 0 : caution.from_caf) == true : 0;
    },
    toggleIcon: function toggleIcon(accordionNumber) {
      if (this.openAccordion === accordionNumber) {
        this.openAccordion = null; // close if it's already open
      } else {
        this.openAccordion = accordionNumber; // open the clicked accordion
      }
    },
    isOpen: function isOpen(id) {
      this.currentAccordion = id;
    },
    deniedConfirmModal: function deniedConfirmModal(event) {
      this.$modal.hide('confirm_ajournement');
      this.$refs.unApprovalInput.checked = this.verification_encours.approved == "Non";
    },
    whatWouldBeDone: function whatWouldBeDone() {
      if ([null, undefined, ""].includes(this.dossier_credit.n_1_checklist)) {
        this.settingChecklist();
      } else {
        this.retreivedChecklist();
      }
    },
    retreivedChecklist: function retreivedChecklist() {
      var _this$dossier_credit2,
        _n_1_checklist$checke,
        _this$dossier_credit3,
        _this$dossier_credit4,
        _this$dossier_credit5,
        _this3 = this;
      var n_1_checklist = (_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.n_1_checklist;
      var data = n_1_checklist === null || n_1_checklist === void 0 || (_n_1_checklist$checke = n_1_checklist.checker_one) === null || _n_1_checklist$checke === void 0 ? void 0 : _n_1_checklist$checke.entries;
      var applied_templ_name = (_this$dossier_credit3 = this.dossier_credit) === null || _this$dossier_credit3 === void 0 ? void 0 : _this$dossier_credit3.applied_templ_name;
      var verification_encours = {};
      var credKey0 = this.determineCredPubTables((_this$dossier_credit4 = this.dossier_credit) === null || _this$dossier_credit4 === void 0 ? void 0 : _this$dossier_credit4.applied_templ_name)[0];
      if (![undefined, '', 0, null].includes((_this$dossier_credit5 = this.dossier_credit) === null || _this$dossier_credit5 === void 0 || (_this$dossier_credit5 = _this$dossier_credit5[credKey0]) === null || _this$dossier_credit5 === void 0 ? void 0 : _this$dossier_credit5.encours_actuel_modified)) {
        var _this$dossier_credit6, _this$dossier_credit7;
        var encours_modifie = Number((_this$dossier_credit6 = this.dossier_credit) === null || _this$dossier_credit6 === void 0 || (_this$dossier_credit6 = _this$dossier_credit6[credKey0]) === null || _this$dossier_credit6 === void 0 || (_this$dossier_credit6 = _this$dossier_credit6.encours_actuel_modified) === null || _this$dossier_credit6 === void 0 ? void 0 : _this$dossier_credit6.toString().replace(/\s/g, ""));
        var encours_actuel = Number((_this$dossier_credit7 = this.dossier_credit) === null || _this$dossier_credit7 === void 0 || (_this$dossier_credit7 = _this$dossier_credit7[credKey0]) === null || _this$dossier_credit7 === void 0 || (_this$dossier_credit7 = _this$dossier_credit7.encours_actuel) === null || _this$dossier_credit7 === void 0 ? void 0 : _this$dossier_credit7.toString().replace(/\s/g, ""));
        if (encours_modifie != encours_actuel) {
          var _this$dossier_credit8, _this$dossier_credit$2, _this$dossier_credit9;
          // data.encours_systeme = this.dossier_credit?.[credKey0]?.encours_actuel
          verification_encours["encours_modifie"] = (_this$dossier_credit8 = this.dossier_credit) === null || _this$dossier_credit8 === void 0 || (_this$dossier_credit8 = _this$dossier_credit8[credKey0]) === null || _this$dossier_credit8 === void 0 ? void 0 : _this$dossier_credit8.encours_actuel_modified;
          verification_encours["date_encours_modifie"] = (_this$dossier_credit$2 = (_this$dossier_credit9 = this.dossier_credit) === null || _this$dossier_credit9 === void 0 || (_this$dossier_credit9 = _this$dossier_credit9[credKey0]) === null || _this$dossier_credit9 === void 0 ? void 0 : _this$dossier_credit9.new_encours_modification_date) !== null && _this$dossier_credit$2 !== void 0 ? _this$dossier_credit$2 : new Date();
          verification_encours["approved"] = "";
          data["verification_encours"] = verification_encours;
        }
      }
      var tb = Object.keys(data);
      for (var _i = 0, _tb = tb; _i < _tb.length; _i++) {
        var key = _tb[_i];
        this[key] = data[key];
        if (!this.keysToHave.includes(key)) this.keysToHave.push(key);
        if (key == "Verification_caution_solidaire") {
          var _data$Verification_ca;
          this.caution_solidaires = data === null || data === void 0 || (_data$Verification_ca = data.Verification_caution_solidaire) === null || _data$Verification_ca === void 0 ? void 0 : _data$Verification_ca.caution_added;
        }
        if (key == 'responsable_entreprise') {
          var _iterator = _createForOfIteratorHelper(data[key]),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var element = _step.value;
              if (element) {
                if (![null, undefined, ''].includes(element === null || element === void 0 ? void 0 : element.fonction)) {
                  if (!this.defaultResponsable.includes(element === null || element === void 0 ? void 0 : element.fonction)) {
                    this.defaultResponsable.push(element === null || element === void 0 ? void 0 : element.fonction);
                  }
                }
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      }
      var _iterator2 = _createForOfIteratorHelper(this.keysToHave),
        _step2;
      try {
        var _loop = function _loop() {
          var element = _step2.value;
          if (!tb.includes(element)) {
            var keyToPopIndex = _this3.keysToHave.findIndex(function (el) {
              return el == element;
            });
            if (keyToPopIndex != -1) _this3.keysToHave.splice(keyToPopIndex, 1);
          }
        };
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          _loop();
        }
        // clean keysToHave
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    },
    formDataVars: function formDataVars(event, key) {
      this.verification_encours[key] = event[1];
      this.buildCHecklist();
    },
    checkBoxChange: function checkBoxChange(event, obj, key) {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var msg, _this4$Verification_c, _Object$keys, toPopArr, tb, ab, _iterator3, _step3, _key;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!event.target.checked) {
                _context2.next = 20;
                break;
              }
              if (!(obj == "Verification_caution_solidaire")) {
                _context2.next = 17;
                break;
              }
              if (!(event.target.value == "Non")) {
                _context2.next = 13;
                break;
              }
              msg = 'Êtes-vous sûr de vouloir cliquer sur Non ? Ceci va entraîner \
                        la perte des données liées à la vérification des cautions solidaires renseignées';
              if (!(![null, undefined, ''].includes(_this4.caution_solidaires) && _this4.caution_solidaires.length > 0)) {
                _context2.next = 9;
                break;
              }
              _context2.next = 7;
              return _this4.$confirm(msg, "Attention").then(function () {
                _this4[obj].add_caution = event.target.value;
                _this4.caution_solidaires = [];
              })["catch"](function () {
                event.target.checked = false;
              });
            case 7:
              _context2.next = 11;
              break;
            case 9:
              _this4[obj].add_caution = event.target.value;
              _this4.caution_solidaires = [];
            case 11:
              _context2.next = 15;
              break;
            case 13:
              _this4[obj][key] = event.target.value;
              _this4.caution_solidaires = _this4[obj].caution_added.length == 0 ? [_objectSpread({}, _this4.caution)] : _this4[obj].caution_added;
              // this.Verification_caution_solidaire["caution_added"] = [...this.caution_solidaires]
            case 15:
              _context2.next = 18;
              break;
            case 17:
              if (obj == "verification_encours") {
                if (event.target.value == "Non") _this4.launchAjournementProcess(false);else {
                  _this4[obj][key] = event.target.value;
                  // Fonctionnalité de changement d'exposition desactivée
                  // this.changeExposition()
                }
              } else {
                _this4[obj][key] = event.target.value;
                // Verifier si tous les champs de la conformites_donnees sont checké à l'exception de donnees conforme
                toPopArr = ["donnees_conformes"];
                if (_this4.typeClient == "Corporate") toPopArr.push("verification_cni");
                if (_this4.typeClient == "Retail") toPopArr.push("responsable_entreprise");
                if (['Non', '', undefined].includes((_this4$Verification_c = _this4.Verification_caution_solidaire) === null || _this4$Verification_c === void 0 ? void 0 : _this4$Verification_c.add_caution)) toPopArr.push("Verification_caution_solidaire");
                tb = (_Object$keys = Object.keys(_this4.conformite_donnees)) === null || _Object$keys === void 0 ? void 0 : _Object$keys.filter(function (el) {
                  return !toPopArr.includes(el);
                });
                tb = tb.filter(function (el) {
                  return _this4.keysToHave.includes(el);
                });
                console.log("tb", tb);
                ab = true;
                _iterator3 = _createForOfIteratorHelper(tb);
                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    _key = _step3.value;
                    if ([null, undefined, '', 'Non'].includes(_this4.conformite_donnees[_key])) {
                      ab = false;
                    }
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }
                if (ab) _this4.conformite_donnees.donnees_conformes = 'Oui';else _this4.conformite_donnees.donnees_conformes = "Non";
              }
            case 18:
              _context2.next = 21;
              break;
            case 20:
              _this4[obj][key] = "";
            case 21:
              _this4.buildCHecklist();
            case 22:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    setDate: function setDate(event, obj, key) {
      this[obj][key] = event[1];
      this.buildCHecklist();
    },
    addMoreResponsable: function addMoreResponsable() {
      this.responsable_entreprise.push(this.repEnt);
      var treshold = 1;
      for (var index = 0; index < this.responsable_entreprise.length - treshold; index++) {
        this.$set(this.seen_resp, index, true);
      }
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
    removeResponsable: function removeResponsable(index) {
      if (this.defaultResponsable.includes(this.responsable_entreprise[index].fonction)) {
        this.$toasted.info('Vous ne pouvez pas supprimer ce responsable');
        return;
      }
      this.responsable_entreprise.splice(index, 1);
      this.buildCHecklist();
    },
    removeCaution: function removeCaution(index) {
      this.caution_solidaires.splice(index, 1);
      this.Verification_caution_solidaire["caution_added"] = _toConsumableArray(this.caution_solidaires);
      this.buildCHecklist();
    },
    retract: function retract(obj, index) {
      var seen = [undefined, null, ''].includes(this[obj][index]) ? true : !this[obj][index];
      this.$set(this[obj], index, seen);
    },
    settingChecklist: function settingChecklist() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _this5$dossier_credit, _this5$dossier_credit2, _this5$dossier_credit3, _this5$dossier_credit4, _this5$dossier_credit1, _credpubtb4$cautionne;
        var applied_templ_name, credKey0, denomination_client, keyToPop, keyToPopIndex, _keyToPop, _keyToPopIndex, index, resp, _this5$dossier_credit5, _this5$dossier_credit6, encours_modifie, encours_actuel, _this5$dossier_credit7, _this5$dossier_credit8, _this5$dossier_credit9, _this5$dossier_credit0, credpubtb4, caution_detected;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              applied_templ_name = (_this5$dossier_credit = _this5.dossier_credit) === null || _this5$dossier_credit === void 0 ? void 0 : _this5$dossier_credit.applied_templ_name;
              credKey0 = _this5.determineCredPubTables((_this5$dossier_credit2 = _this5.dossier_credit) === null || _this5$dossier_credit2 === void 0 ? void 0 : _this5$dossier_credit2.applied_templ_name)[0];
              denomination_client = (_this5$dossier_credit3 = _this5.dossier_credit) === null || _this5$dossier_credit3 === void 0 || (_this5$dossier_credit3 = _this5$dossier_credit3[credKey0]) === null || _this5$dossier_credit3 === void 0 ? void 0 : _this5$dossier_credit3.nom_emprunteur;
              _this5.verification_cni['denomination'] = denomination_client;
              if (_this5.typeClient == "Corporate") {
                keyToPop = "verification_cni";
                keyToPopIndex = _this5.keysToHave.findIndex(function (el) {
                  return el == keyToPop;
                });
                if (keyToPopIndex != -1) _this5.keysToHave.splice(keyToPopIndex, 1);
              }
              if (_this5.typeClient == "Retail") {
                _keyToPop = "responsable_entreprise";
                _keyToPopIndex = _this5.keysToHave.findIndex(function (el) {
                  return el == _keyToPop;
                });
                if (_keyToPopIndex != -1) _this5.keysToHave.splice(_keyToPopIndex, 1);
              }
              if (["BFR (Fonds de Roulement)", "Investissement", "Crédit solidaire"].includes(applied_templ_name)) {
                if (_this5.typeClient == "Corporate") {
                  _this5.keysToHave.push("responsable_entreprise");
                  for (index = 0; index < _this5.defaultResponsable.length; index++) {
                    resp = _objectSpread(_objectSpread({}, _this5.repEnt), {}, {
                      fonction: _this5.defaultResponsable[index]
                    });
                    _this5.responsable_entreprise.push(resp);
                  }
                }
              }
              if (![undefined, '', 0, null].includes((_this5$dossier_credit4 = _this5.dossier_credit) === null || _this5$dossier_credit4 === void 0 || (_this5$dossier_credit4 = _this5$dossier_credit4[credKey0]) === null || _this5$dossier_credit4 === void 0 ? void 0 : _this5$dossier_credit4.encours_actuel_modified)) {
                //to work here
                encours_modifie = Number((_this5$dossier_credit5 = _this5.dossier_credit) === null || _this5$dossier_credit5 === void 0 || (_this5$dossier_credit5 = _this5$dossier_credit5[credKey0]) === null || _this5$dossier_credit5 === void 0 || (_this5$dossier_credit5 = _this5$dossier_credit5.encours_actuel_modified) === null || _this5$dossier_credit5 === void 0 ? void 0 : _this5$dossier_credit5.toString().replace(/\s/g, ""));
                encours_actuel = Number((_this5$dossier_credit6 = _this5.dossier_credit) === null || _this5$dossier_credit6 === void 0 || (_this5$dossier_credit6 = _this5$dossier_credit6[credKey0]) === null || _this5$dossier_credit6 === void 0 || (_this5$dossier_credit6 = _this5$dossier_credit6.encours_actuel) === null || _this5$dossier_credit6 === void 0 ? void 0 : _this5$dossier_credit6.toString().replace(/\s/g, ""));
                if (encours_modifie != encours_actuel) {
                  _this5.keysToHave.push("verification_encours");
                  _this5.verification_encours.encours_systeme = (_this5$dossier_credit7 = _this5.dossier_credit) === null || _this5$dossier_credit7 === void 0 || (_this5$dossier_credit7 = _this5$dossier_credit7[credKey0]) === null || _this5$dossier_credit7 === void 0 ? void 0 : _this5$dossier_credit7.encours_actuel;
                  _this5.verification_encours.encours_modifie = (_this5$dossier_credit8 = _this5.dossier_credit) === null || _this5$dossier_credit8 === void 0 || (_this5$dossier_credit8 = _this5$dossier_credit8[credKey0]) === null || _this5$dossier_credit8 === void 0 ? void 0 : _this5$dossier_credit8.encours_actuel_modified;
                  _this5.verification_encours.date_encours_modifie = (_this5$dossier_credit9 = (_this5$dossier_credit0 = _this5.dossier_credit) === null || _this5$dossier_credit0 === void 0 || (_this5$dossier_credit0 = _this5$dossier_credit0[credKey0]) === null || _this5$dossier_credit0 === void 0 ? void 0 : _this5$dossier_credit0.new_encours_modification_date) !== null && _this5$dossier_credit9 !== void 0 ? _this5$dossier_credit9 : new Date();
                }
              }
              // Verification cautionnement solidaire
              credpubtb4 = _this5.dossier_credit[_this5.determineCredPubTables((_this5$dossier_credit1 = _this5.dossier_credit) === null || _this5$dossier_credit1 === void 0 ? void 0 : _this5$dossier_credit1.applied_templ_name)[4]]; // console.log({credpubtb4})
              if (![null, undefined, ''].includes(credpubtb4)) {
                _context3.next = 12;
                break;
              }
              _this5.cautionNotFound("Le tableau de suretés est introuvable");
              return _context3.abrupt("return");
            case 12:
              if (![null, undefined, ''].includes(credpubtb4 === null || credpubtb4 === void 0 ? void 0 : credpubtb4.cautionnement_solidaires)) {
                _context3.next = 15;
                break;
              }
              _this5.cautionNotFound("Pas de cautionnement retrouvé dans le tableau des suretés");
              return _context3.abrupt("return");
            case 15:
              if (credpubtb4 !== null && credpubtb4 !== void 0 && (_credpubtb4$cautionne = credpubtb4.cautionnement_solidaires) !== null && _credpubtb4$cautionne !== void 0 && _credpubtb4$cautionne.some(function (el) {
                return _this5.verifyIfSomeCautionExist(el);
              })) {
                caution_detected = credpubtb4 === null || credpubtb4 === void 0 ? void 0 : credpubtb4.cautionnement_solidaires;
                _this5.Verification_caution_solidaire.detected_caution_sys = true;
                _this5.Verification_caution_solidaire.add_caution = "Oui";
                _this5.Verification_caution_solidaire["caution_detected"] = caution_detected;
                _this5.Verification_caution_solidaire['nombre_caution_detected'] = caution_detected.length;
                if (![null, undefined, ""].includes(caution_detected)) _this5.caution_solidaires = caution_detected.map(function (el) {
                  var newObject = _objectSpread(_objectSpread({}, el), {}, {
                    nature_piece: '',
                    date_naissance: "",
                    code_pays: el.indicatif_caution_solidaire,
                    from_caf: true,
                    has_file: el.files > 0
                    // files: [],
                    // nb_files: 0
                  });
                  delete newObject.indicatif_caution_solidaire;
                  return newObject;
                });
                // await this.getFiles()
                // this.caution_solidaires =  //
                // console.log('caution_solidaires', this.caution_solidaires);

                _this5.Verification_caution_solidaire["caution_added"] = _toConsumableArray(_this5.caution_solidaires);
              } else {
                _this5.cautionNotFound("Pas de cautions renseigné par le Caf");
              }
              // console.log('keys to have', this.keysToHave)
              _this5.buildCHecklist();
              // console.log("keysToHave", this.keysToHave )
            case 17:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    verifyIfSomeCautionExist: function verifyIfSomeCautionExist(el) {
      var res = ![undefined, '', null].includes(el.indicatif_caution_solidaire) || ![undefined, '', null].includes(el.nom_prenoms);
      return res;
    },
    cautionNotFound: function cautionNotFound(msg) {
      this.Verification_caution_solidaire.detected_caution_sys = false;
      this.Verification_caution_solidaire['message'] = msg;
      this.caution_solidaires = [_objectSpread({}, this.caution)];
      this.Verification_caution_solidaire["caution_added"] = _toConsumableArray(this.caution_solidaires);
    },
    setDateInput: function setDateInput(event) {
      var objectName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var property = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      // console.log("event", event)
      this[objectName][index][property] = event[1];
      this.buildCHecklist();
    },
    launchAjournementProcess: function launchAjournementProcess(res) {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var msg, data;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (![undefined, null, false].includes(res)) {
                _context4.next = 3;
                break;
              }
              _this6.$modal.show("confirm_ajournement");
              return _context4.abrupt("return");
            case 3:
              _this6.verification_encours.approved == "Non";
              msg = "Prière de modifier l'encours actuel";
              data = {
                msg: msg,
                actionToBePerformed: "AJOURNER",
                priorCheckDone: true
              }; // this
              _this6.conformite_donnees.donnees_conformes = 'Non';
              _context4.next = 9;
              return _this6.buildCHecklist();
            case 9:
              EventBus.$emit('ajournement-from-checklist', data);
              _this6.$modal.hide("confirm_ajournement");
            case 11:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    sendDecision: function sendDecision() {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var res, data;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _this7.isLoading = true;

              // let data = {msg:msg, actionToBePerformed: "AVIS FAVORABLE", priorCheckDone:true}
              _context5.next = 3;
              return _this7.doCheckBeforePub();
            case 3:
              res = _context5.sent;
              data = {
                actionToBePerformed: _this7.actionToBePerformedNew,
                priorCheckDone: true
              };
              if (res) EventBus.$emit('send-decision-to-backend', data);else _this7.isLoading = false;
            case 6:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }))();
    },
    changeExposition: function changeExposition() {
      var _this$dossier_credit0, _this$dossier_credit1, _this$dossier_credit10, _this$verification_en;
      var rachat = 0;
      var montant_credit = 0;
      var credKeys = this.determineCredPubTables((_this$dossier_credit0 = this.dossier_credit) === null || _this$dossier_credit0 === void 0 ? void 0 : _this$dossier_credit0.applied_templ_names);
      var credpubtb0 = (_this$dossier_credit1 = this.dossier_credit) === null || _this$dossier_credit1 === void 0 ? void 0 : _this$dossier_credit1[credKeys[0]];
      var credpubtb1 = (_this$dossier_credit10 = this.dossier_credit) === null || _this$dossier_credit10 === void 0 ? void 0 : _this$dossier_credit10[credKeys[1]];
      if (credpubtb1) {
        var _credpubtb1$rachat, _credpubtb1$montant_c;
        if (credpubtb1 !== null && credpubtb1 !== void 0 && credpubtb1.rachat) rachat = Number(credpubtb1 === null || credpubtb1 === void 0 || (_credpubtb1$rachat = credpubtb1.rachat) === null || _credpubtb1$rachat === void 0 ? void 0 : _credpubtb1$rachat.toString().replace(/\s/g, ""));
        if (credpubtb1 !== null && credpubtb1 !== void 0 && credpubtb1.montant_credit) montant_credit = Number(credpubtb1 === null || credpubtb1 === void 0 || (_credpubtb1$montant_c = credpubtb1.montant_credit) === null || _credpubtb1$montant_c === void 0 ? void 0 : _credpubtb1$montant_c.toString().replace(/\s/g, ""));
      }
      var encours = Number((_this$verification_en = this.verification_encours.encours_modifie) === null || _this$verification_en === void 0 ? void 0 : _this$verification_en.toString().replace(/\s/g, ""));
      // const exposition = encours +  montant_credit - rachat
      // const data = {exposition: exposition, credKey: credKey}
      var encours_actuel = credpubtb0 === null || credpubtb0 === void 0 ? void 0 : credpubtb0.encours_actuel;
      credpubtb0.encours_actuel = encours;
      if ([null, undefined, ''].includes(credpubtb0 === null || credpubtb0 === void 0 ? void 0 : credpubtb0.backup_encours_actuel)) credpubtb0["backup_encours_actuel"] = encours_actuel;
      var data = {
        cred_pub_key: this.dossier_credit.cred_pub_key,
        key_name: credKeys[0],
        key: credpubtb0
      };
      this.autosavingAKey(data);
      // this.$emit('change-exposition', data)
    },
    // Build the checklist and send it to the backend
    buildCHecklist: function buildCHecklist() {
      var _this$dossier_credit11, _this$dossier_credit12;
      var n_1_checklist = {};
      var checker_one = {};
      var entries = {};
      var current_stage = 1;
      var who_has_done_it = _objectSpread({}, (_this$dossier_credit11 = this.dossier_credit) === null || _this$dossier_credit11 === void 0 || (_this$dossier_credit11 = _this$dossier_credit11.pub_workflow) === null || _this$dossier_credit11 === void 0 ? void 0 : _this$dossier_credit11[1]);
      var when_has_done_it = (_this$dossier_credit12 = this.dossier_credit) === null || _this$dossier_credit12 === void 0 || (_this$dossier_credit12 = _this$dossier_credit12.n_1_checklist) === null || _this$dossier_credit12 === void 0 || (_this$dossier_credit12 = _this$dossier_credit12.checker_one) === null || _this$dossier_credit12 === void 0 ? void 0 : _this$dossier_credit12.when_has_done_it;
      this.Verification_caution_solidaire["caution_added"] = this.caution_solidaires;
      // n_1_checklist['who_has_done_it'] = who_has_done_it
      n_1_checklist['has_done'] = true;
      for (var index = 0; index < this.keysToHave.length; index++) {
        var key = this.keysToHave[index];
        entries[key] = this[key];
      }
      entries["conformite_donnees"] = this.conformite_donnees;
      var dict = {
        who_has_done_it: who_has_done_it,
        when_has_done_it: [null, undefined, ''].includes(when_has_done_it) ? new Date() : when_has_done_it,
        stage: current_stage,
        entries: entries
      };
      // data = [dict]
      n_1_checklist["checker_one"] = dict;
      this.autosavingAKey({
        cred_pub_key: this.dossier_credit.cred_pub_key,
        key_name: "n_1_checklist",
        key: n_1_checklist
      });
    },
    autosavingAKey: function autosavingAKey(data) {
      this.$axios.post(this.server + "creditbuilder/api/v1/autosaving-akey/", data).then(function (response) {
        EventBus.$emit("value-updated");
      }.bind(this))["catch"](function (error) {
        this.$console.log(error);
      }.bind(this));
    },
    doCheckBeforePub: function doCheckBeforePub() {
      var _this8 = this;
      var aaz = true;
      var customOrder = ["verification_encours", "verification_cni", "Verification_caution_solidaire", "responsable_entreprise"];
      if (this.typeClient == "Corporate") {
        customOrder.splice(1, 1);
      } else customOrder.splice(3, 1);
      var keysToHave_ = this.keysToHave.filter(function (el) {
        return customOrder.includes(el);
      });
      keysToHave_ = keysToHave_.sort(function (a, b) {
        return customOrder.indexOf(a) - customOrder.indexOf(b);
      });
      for (var index = 0; index < keysToHave_.length; index++) {
        var key = keysToHave_[index];
        if (key == "Verification_caution_solidaire") {
          if ([null, undefined, ""].includes(this[key].add_caution)) {
            this.$toasted.show("Avez-vous des cautions solidaires a ajoutés ?");
            aaz = false;
            break;
          }
          if (this[key].add_caution == "Oui") {
            var _this$conformite_donn;
            if (this.caution_solidaires.length > 0) {
              var _iterator4 = _createForOfIteratorHelper(this.caution_solidaires.entries()),
                _step4;
              try {
                var _loop2 = function _loop2() {
                  var _Object$entries;
                  var _step4$value = _slicedToArray(_step4.value, 2),
                    index = _step4$value[0],
                    element = _step4$value[1];
                  var keysToCheck = (_Object$entries = Object.entries(element)) === null || _Object$entries === void 0 ? void 0 : _Object$entries.filter(function (_ref) {
                    var _ref2 = _slicedToArray(_ref, 2),
                      ky = _ref2[0],
                      value = _ref2[1];
                    return !_this8.exceptFiled.includes(ky);
                  });
                  var msg = "Veuillez remplir tous les champs de la caution ".concat(index + 1);
                  var allValuesNonEmpty = keysToCheck === null || keysToCheck === void 0 ? void 0 : keysToCheck.every(function (_ref3) {
                    var _ref4 = _slicedToArray(_ref3, 2),
                      ky = _ref4[0],
                      value = _ref4[1];
                    if (ky == "nb_files") msg = "Veuillez attacher la pi\xE8ce de la caution ".concat(index + 1, " SVP !");
                    return ![undefined, null, '', 0].includes(value);
                  });
                  if (!allValuesNonEmpty) {
                    _this8.$toasted.show(msg);
                    aaz = false;
                    return 1; // break
                  }
                };
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  if (_loop2()) break;
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }
            }
            if ([undefined, null, ""].includes((_this$conformite_donn = this.conformite_donnees) === null || _this$conformite_donn === void 0 ? void 0 : _this$conformite_donn.Verification_caution_solidaire)) {
              this.$toasted.show("Veuillez repondre à la question: Les données des cautions sont-elles conformes ?");
              aaz = false;
              break;
            }
          }
        } else if (key == 'responsable_entreprise') {
          var _this$conformite_donn2;
          if (this.responsable_entreprise.length > 0) {
            var _iterator5 = _createForOfIteratorHelper(this.responsable_entreprise.entries()),
              _step5;
            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var _Object$entries2;
                var _step5$value = _slicedToArray(_step5.value, 2),
                  _index = _step5$value[0],
                  obj = _step5$value[1];
                var keysToCheck = (_Object$entries2 = Object.entries(obj)) === null || _Object$entries2 === void 0 ? void 0 : _Object$entries2.filter(function (_ref5) {
                  var _ref6 = _slicedToArray(_ref5, 2),
                    ky = _ref6[0],
                    value = _ref6[1];
                  return !_this8.exceptFiled.includes(ky);
                });
                var allValuesNonEmpty = keysToCheck === null || keysToCheck === void 0 ? void 0 : keysToCheck.every(function (_ref7) {
                  var _ref8 = _slicedToArray(_ref7, 2),
                    ky = _ref8[0],
                    value = _ref8[1];
                  return ![undefined, null, '', 0].includes(value);
                });
                if (!allValuesNonEmpty) {
                  this.$toasted.show("Veuillez remplir tous les champs du responsable ".concat(_index + 1));
                  aaz = false;
                  break;
                }
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
          }
          if ([undefined, null, ""].includes((_this$conformite_donn2 = this.conformite_donnees) === null || _this$conformite_donn2 === void 0 ? void 0 : _this$conformite_donn2.responsable_entreprise)) {
            this.$toasted.show("Veuillez repondre à la question: Les données des responsables de l'entreprise sont-elles conformes ?");
            aaz = false;
            break;
          }
        } else {
          var _Object$entries3;
          var _keysToCheck = (_Object$entries3 = Object.entries(this[key])) === null || _Object$entries3 === void 0 ? void 0 : _Object$entries3.filter(function (_ref9) {
            var _ref0 = _slicedToArray(_ref9, 2),
              ky = _ref0[0],
              value = _ref0[1];
            return !_this8.exceptFiled.includes(ky);
          });
          var _allValuesNonEmpty = _keysToCheck === null || _keysToCheck === void 0 ? void 0 : _keysToCheck.every(function (_ref1) {
            var _ref10 = _slicedToArray(_ref1, 2),
              ky = _ref10[0],
              value = _ref10[1];
            return ![undefined, null, '', 0].includes(value);
          });
          if (!_allValuesNonEmpty) {
            var msgToDisplay = key == 'verification_cni' ? " Veuillez remplir tous les champs de la verification de l'identité du client" : "Veuillez repondre à la question: Approuvez-vous la modification de cet encours ?";
            this.$toasted.show("".concat(msgToDisplay));
            aaz = false;
            break;
          }
          if ([null, undefined, ''].includes(this.conformite_donnees[key])) {
            var questions = {
              verification_cni: "Les données relatives à l'identité du client sont-elles conformes ?",
              verification_encours: "Les données relatives à l'encours du client sont-elles conformes ?"
            };
            this.$toasted.show("".concat(questions[key]));
            aaz = false;
            break;
          }
          if (this.keysToHave.includes("verification_cni")) {
            var _this$verification_cn, _this$verification_cn2;
            if ([null, undefined, ''].includes((_this$verification_cn = this.verification_cni) === null || _this$verification_cn === void 0 ? void 0 : _this$verification_cn.files)) {
              this.$toasted.show("Veuillez rattacher la pi\xE8ce d'identit\xE9 du client");
              aaz = false;
              return;
            }
            if (((_this$verification_cn2 = this.verification_cni) === null || _this$verification_cn2 === void 0 ? void 0 : _this$verification_cn2.files.length) == 0) {
              this.$toasted.show("Veuillez rattacher la pi\xE8ce d'identit\xE9 du client");
              aaz = false;
              return;
            }
          }
        }
      }
      return aaz;
    },
    addFiles: function addFiles(event) {
      var _arguments = arguments,
        _this9 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var index, slug_, slug, name, element, _this9$caution_solida, _element, _element2, _this9$$route;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              index = _arguments.length > 1 && _arguments[1] !== undefined ? _arguments[1] : null;
              slug_ = _arguments.length > 2 && _arguments[2] !== undefined ? _arguments[2] : null;
              EventBus.$emit("open-extra-file-explorer");
              // const dateNow = new Date().toLocaleDateString();
              // const numeroPiece = this.caution_solidaires?.[index]?.numero_piece?.trim() || '';
              // const result = numeroPiece;
              slug = null, name = null;
              if (slug_ == null && index != null) {
                element = {};
                if (![null, undefined, ""].includes(_this9.caution_solidaires)) {
                  if (![null, undefined, 0].includes(_this9.caution_solidaires)) {
                    element = (_this9$caution_solida = _this9.caution_solidaires) === null || _this9$caution_solida === void 0 ? void 0 : _this9$caution_solida[index];
                    slug = (_element = element) !== null && _element !== void 0 && _element.from_caf && (_element2 = element) !== null && _element2 !== void 0 && _element2.has_file ? "cautionnement_solidaires_" : "caution_solidaire_n_1_checklist";
                    name = "Pi\xE8ce jointe {(*)}".concat(slug) + index + '_' + ((_this9$$route = _this9.$route) === null || _this9$$route === void 0 || (_this9$$route = _this9$$route.params) === null || _this9$$route === void 0 ? void 0 : _this9$$route.templateId);
                  }
                }
              } else {
                slug = slug_;
                name = "Pi\xE8ce jointe {(*)}".concat(slug) + '_' + _this9.$route.params.templateId;
              }
              _context6.next = 7;
              return setTimeout(function () {
                EventBus.$emit("data-extra-file-explorer", {
                  name: name
                });
              }, 500);
            case 7:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }))();
    },
    getFiles: function getFiles() {
      var _this0 = this;
      _services_proxy_service__WEBPACK_IMPORTED_MODULE_1__["default"].proxyEbapis({
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
          if (![null, undefined, ""].includes(_this0.caution_solidaires)) {
            if (![null, undefined, "", 0].includes(_this0.caution_solidaires.length)) {
              _this0.caution_solidaires.forEach(function (element, index) {
                var files = [];
                result.forEach(function (file) {
                  var _element$template3;
                  if ((file === null || file === void 0 ? void 0 : file.extra_file_template_id) != null && (element === null || element === void 0 || (_element$template3 = element.template) === null || _element$template3 === void 0 ? void 0 : _element$template3.id) == (file === null || file === void 0 ? void 0 : file.extra_file_template_id)) {
                    // element['nb_files'] = file?.file_url
                    files.push(file);
                  }
                });
                console.log({
                  files: files
                });
                _this0.caution_solidaires[index]["nb_files"] = files.length;
                _this0.caution_solidaires[index]["files"] = files;
              });
            }
          }
          // console.log("Verification_caution_solidaire", this.Verification_caution_solidaire.caution_added)
        }
      })["catch"](function (err) {
        console.error(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/cofina/PriorChecklist.vue?vue&type=template&id=05b413ca&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/cofina/PriorChecklist.vue?vue&type=template&id=05b413ca&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var render = function render() {
  var _vm$verification_cni, _vm$verification_cni2, _vm$verification_cni3;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
    staticClass: "container py-3 mb-2",
    staticStyle: {
      "max-height": "95vh"
    }
  }, [_c("div", {
    staticClass: "modal-content"
  }, [_c("div", {
    staticClass: "modal-header"
  }, [_c("h5", {
    staticClass: "modal-title"
  }, [_vm._v("\n                 Prérequis d'approbation\n               ")]), _vm._v(" "), _c("button", {
    staticClass: "btn-close",
    attrs: {
      type: "button"
    },
    on: {
      click: function click() {
        return _vm.$emit("closePriorCheckModal");
      }
    }
  })]), _vm._v(" "), _c("div", {
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
  }, [_vm.keysToHave.includes("verification_encours") ? _c("div", {
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
  }, [_c("div", [_vm._v("Vérification de l'encours")]), _vm._v(" "), _c("i", {
    staticClass: "chevron",
    "class": [null, undefined, "", "collapseOne"].includes(_vm.currentAccordion) ? "icofont-simple-up" : "icofont-simple-down"
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "accordion-collapse collapse show",
    attrs: {
      id: "collapseOne",
      "aria-labelledby": "headingOne",
      "data-bs-parent": "#accordionExample"
    }
  }, [_c("div", {
    staticClass: "accordion-body"
  }, [_c("p", {
    staticClass: "text-danger"
  }, [_vm._v("Attention!, l'encours actuel du client a été modifié par le CAF " + _vm._s(_vm.cafName))]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("div", {
    staticClass: "row m-2"
  }, [_c("div", {
    staticClass: "col-12 col-md-6"
  }, [_c("label", [_vm._v("Encours système")]), _vm._v(" "), _c("currency-input2", {
    staticClass: "recall-data",
    attrs: {
      disabled: "",
      value: _vm.verification_encours.encours_systeme
    },
    on: {
      input: function input($event) {
        return _vm.formDataVars($event, "encours_systeme");
      }
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-md-6"
  }, [_c("label", [_vm._v("Encours modifié par le CAF")]), _vm._v(" "), _c("currency-input2", {
    staticClass: "recall-data",
    attrs: {
      disabled: "",
      value: _vm.verification_encours.encours_modifie
    },
    on: {
      input: function input($event) {
        return _vm.formDataVars($event, "encours_modifie");
      }
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12 mt-4"
  }, [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "d-flex"
  }, [_c("div", {
    staticClass: "m-2 d-flex mr-4 align-items-center"
  }, [_c("input", {
    attrs: {
      type: "checkbox",
      value: "Oui",
      id: "oui_j_approuve"
    },
    domProps: {
      checked: _vm.verification_encours.approved == "Oui"
    },
    on: {
      change: function change($event) {
        return _vm.checkBoxChange($event, "verification_encours", "approved");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "text-nowrap",
    staticStyle: {
      "margin-left": "5px"
    },
    attrs: {
      "for": "oui_j_approuve"
    }
  }, [_vm._v("Oui, j'approuve ")]), _vm._v(" "), _c("i", {
    staticClass: "icofont-info-circle",
    staticStyle: {
      "margin-left": "5px",
      color: "#1485ff"
    },
    attrs: {
      "data-toggle": "tooltip",
      title: "Cette décision impliquera le recalcul de l'exposition glabale"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "m-2 d-flex mr-4 align-items-center"
  }, [_c("input", {
    ref: "unApprovalInput",
    attrs: {
      type: "checkbox",
      value: "Non",
      id: "non_je_napprouve_pas"
    },
    domProps: {
      checked: _vm.verification_encours.approved == "Non"
    },
    on: {
      input: function input($event) {
        return _vm.checkBoxChange($event, "verification_encours", "approved");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "text-nowrap",
    staticStyle: {
      "margin-left": "5px"
    },
    attrs: {
      "for": "non_je_napprouve_pas"
    }
  }, [_vm._v("Non, je n'approuve pas")]), _vm._v(" "), _c("i", {
    staticClass: "icofont-info-circle",
    staticStyle: {
      "margin-left": "5px",
      color: "#1485ff"
    },
    attrs: {
      "data-toggle": "tooltip",
      title: "Cette décision ajournera le dossier"
    }
  })])])])]), _vm._v(" "), _c("div", {
    staticClass: "row m-2"
  }, [_vm._m(2), _vm._v(" "), _c("div", {
    staticClass: "d-flex"
  }, [_c("div", {
    staticClass: "m-2 d-flex mr-4 align-items-center"
  }, [_c("input", {
    attrs: {
      type: "checkbox",
      value: "Oui",
      id: "oui_verification_encours"
    },
    domProps: {
      checked: _vm.conformite_donnees.verification_encours == "Oui"
    },
    on: {
      change: function change($event) {
        return _vm.checkBoxChange($event, "conformite_donnees", "verification_encours");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "text-nowrap",
    staticStyle: {
      "margin-left": "5px"
    },
    attrs: {
      "for": "oui_verification_encours"
    }
  }, [_vm._v("Oui, données conformes ")])]), _vm._v(" "), _c("div", {
    staticClass: "m-2 d-flex mr-4 align-items-center"
  }, [_c("input", {
    attrs: {
      type: "checkbox",
      value: "Non",
      id: "non_donnees_encours_pas_conformes"
    },
    domProps: {
      checked: _vm.conformite_donnees.verification_encours == "Non"
    },
    on: {
      input: function input($event) {
        return _vm.checkBoxChange($event, "conformite_donnees", "verification_encours");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "text-nowrap",
    staticStyle: {
      "margin-left": "5px"
    },
    attrs: {
      "for": "non_donnees_encours_pas_conformes"
    }
  }, [_vm._v("Non, données pas conformes")])])])])])])])]) : _vm._e(), _vm._v(" "), _vm.keysToHave.includes("verification_cni") ? _c("div", {
    staticClass: "accordion-item"
  }, [_c("h2", {
    staticClass: "accordion-header",
    attrs: {
      id: "headingTwo"
    }
  }, [_c("button", {
    staticClass: "accordion-button",
    attrs: {
      type: "button",
      "data-bs-toggle": "collapse",
      "data-bs-target": "#collapseTwo",
      "aria-expanded": "false",
      "aria-controls": "collapseTwo"
    },
    on: {
      click: function click($event) {
        return _vm.isOpen("collapseTwo");
      }
    }
  }, [_c("div", {
    staticClass: "d-flex justify-content-between align-items-center w-100"
  }, [_c("div", [_vm._v(" Vérifcation d'identité du client")]), _vm._v(" "), _c("i", {
    staticClass: "chevron",
    "class": [null, undefined, "", "collapseTwo"].includes(_vm.currentAccordion) ? "icofont-simple-up" : "icofont-simple-down"
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "accordion-collapse collapse show",
    attrs: {
      id: "collapseTwo",
      "aria-labelledby": "headingTwo",
      "data-bs-parent": "#accordionExample"
    }
  }, [_c("div", {
    staticClass: "accordion-body"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("form", {
    staticClass: "form"
  }, [_c("div", {
    staticClass: "row m-2"
  }, [_c("div", {
    staticClass: "col-12 col-md-4"
  }, [_c("label", {
    staticClass: "form-label"
  }, [_vm._v(_vm._s(_vm.typeClient != "Corporate" ? "Nom et prenom du client" : "Dénomiation client") + " "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.verification_cni.denomination,
      expression: "verification_cni.denomination"
    }],
    staticClass: "form-control",
    attrs: {
      disabled: ""
    },
    domProps: {
      value: _vm.verification_cni.denomination
    },
    on: {
      change: function change($event) {
        return _vm.buildCHecklist();
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.verification_cni, "denomination", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-md-4 mt-2"
  }, [_vm._m(3), _vm._v(" "), _c("date-input", {
    staticClass: "input-date",
    attrs: {
      value: _vm.verification_cni.date_naissance
    },
    on: {
      change: function change($event) {
        return _vm.setDate($event, "verification_cni", "date_naissance");
      }
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-md-2 mt-2"
  }, [_vm._m(4), _vm._v(" "), _c("Multiselect", {
    staticStyle: {
      width: "inherit",
      margin: "0px"
    },
    attrs: {
      searchable: true,
      trackBy: "name",
      label: "name",
      "value-prop": "phonecode",
      classes: {
        optionPointed: "text-gray-800 bg-gray-100"
      },
      options: _vm.countries
    },
    on: {
      change: function change($event) {
        return _vm.buildCHecklist();
      }
    },
    scopedSlots: _vm._u([{
      key: "option",
      fn: function fn(_ref) {
        var option = _ref.option,
          isPointed = _ref.isPointed;
        return [_c("p", {
          staticClass: "multiselect-option"
        }, [_vm._v(_vm._s(option.name))])];
      }
    }, {
      key: "singlelabel",
      fn: function fn(_ref2) {
        var value = _ref2.value;
        return [_c("p", {
          staticClass: "multiselect-single-label"
        }, [_vm._v(_vm._s(value.phonecode))])];
      }
    }], null, false, 3006985993),
    model: {
      value: _vm.verification_cni.code_pays,
      callback: function callback($$v) {
        _vm.$set(_vm.verification_cni, "code_pays", $$v);
      },
      expression: "verification_cni.code_pays"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-md-2 mt-2"
  }, [_vm._m(5), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.verification_cni.numero_tel,
      expression: "verification_cni.numero_tel"
    }, {
      name: "numbers-only",
      rawName: "v-numbers-only"
    }],
    staticClass: "form-control",
    domProps: {
      value: _vm.verification_cni.numero_tel
    },
    on: {
      change: function change($event) {
        return _vm.buildCHecklist();
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.verification_cni, "numero_tel", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-md-3 mt-2"
  }, [_vm._m(6), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.verification_cni.nature_piece,
      expression: "verification_cni.nature_piece"
    }],
    staticClass: "form-select",
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.verification_cni, "nature_piece", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        return _vm.buildCHecklist();
      }]
    }
  }, [_c("option", {
    domProps: {
      value: "CNI"
    }
  }, [_vm._v("CNI")]), _vm._v(" "), _c("option", {
    domProps: {
      value: "PASSEPORT"
    }
  }, [_vm._v("PASSEPORT")]), _vm._v(" "), _c("option", {
    domProps: {
      value: "PERMIS DE CONDUIRE"
    }
  }, [_vm._v("PERMIS DE CONDUIRE")]), _vm._v(" "), _c("option", {
    domProps: {
      value: "CARTE CONSULAIRE"
    }
  }, [_vm._v("CARTE CONSULAIRE")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-md-3 mt-2"
  }, [_vm._m(7), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.verification_cni.numero_piece,
      expression: "verification_cni.numero_piece"
    }],
    staticClass: "form-control",
    domProps: {
      value: _vm.verification_cni.numero_piece
    },
    on: {
      change: function change($event) {
        return _vm.buildCHecklist();
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.verification_cni, "numero_piece", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-md-auto mt-2"
  }, [_c("label", [_vm._v("Attacher la Pièce")]), _vm._v(" "), _c("div", {
    staticClass: "d-flex align-items-center"
  }, [_c("div", [((_vm$verification_cni = _vm.verification_cni) === null || _vm$verification_cni === void 0 || (_vm$verification_cni = _vm$verification_cni.files) === null || _vm$verification_cni === void 0 ? void 0 : _vm$verification_cni.length) > 0 ? _c("span", {
    staticClass: "p-1 px-2 mx-2 text-nowrap",
    staticStyle: {
      "background-color": "rgb(44, 62, 80)",
      color: "white",
      "font-size": "13px",
      "border-radius": "5px",
      "margin-left": "0 !important",
      width: "150px"
    }
  }, [_vm._v("\n                                                                 " + _vm._s(((_vm$verification_cni2 = _vm.verification_cni) === null || _vm$verification_cni2 === void 0 ? void 0 : _vm$verification_cni2.nb_files) > 0 ? ((_vm$verification_cni3 = _vm.verification_cni) === null || _vm$verification_cni3 === void 0 || (_vm$verification_cni3 = _vm$verification_cni3.files) === null || _vm$verification_cni3 === void 0 ? void 0 : _vm$verification_cni3.length) + " fichier(s) uploadé(s)" : "") + "\n                                                             ")]) : _vm._e()]), _vm._v(" "), _c("div", [_c("button", {
    staticClass: "btn shadow-md text-white",
    staticStyle: {
      cursor: "pointer",
      background: "#2c3e50",
      width: "26px",
      "font-size": "13px",
      padding: "1px"
    },
    attrs: {
      type: "button",
      name: "button",
      "data-toggle": "tooltip",
      title: "Cliquer ici pour uploader ou voir le(s) fichier(s)"
    },
    on: {
      click: function click($event) {
        return _vm.addFiles($event, null, "verification_cni");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-attachment"
  })])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-md-3 mt-2"
  }, [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("E-mail ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.verification_cni.email,
      expression: "verification_cni.email"
    }],
    staticClass: "form-control",
    domProps: {
      value: _vm.verification_cni.email
    },
    on: {
      change: function change($event) {
        return _vm.buildCHecklist();
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.verification_cni, "email", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "row m-2"
  }, [_vm._m(8), _vm._v(" "), _c("div", {
    staticClass: "d-flex"
  }, [_c("div", {
    staticClass: "m-2 d-flex mr-4 align-items-center"
  }, [_c("input", {
    attrs: {
      type: "checkbox",
      value: "Oui",
      id: "oui_verification_cni"
    },
    domProps: {
      checked: _vm.conformite_donnees.verification_cni == "Oui"
    },
    on: {
      change: function change($event) {
        return _vm.checkBoxChange($event, "conformite_donnees", "verification_cni");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "text-nowrap",
    staticStyle: {
      "margin-left": "5px"
    },
    attrs: {
      "for": "oui_verification_cni"
    }
  }, [_vm._v("Oui, données conformes ")])]), _vm._v(" "), _c("div", {
    staticClass: "m-2 d-flex mr-4 align-items-center"
  }, [_c("input", {
    attrs: {
      type: "checkbox",
      value: "Non",
      id: "non_donnees_cni_pas_conformes"
    },
    domProps: {
      checked: _vm.conformite_donnees.verification_cni == "Non"
    },
    on: {
      input: function input($event) {
        return _vm.checkBoxChange($event, "conformite_donnees", "verification_cni");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "text-nowrap",
    staticStyle: {
      "margin-left": "5px"
    },
    attrs: {
      "for": "non_donnees_cni_pas_conformes"
    }
  }, [_vm._v("Non, données pas conformes")])])])])])])])])]) : _vm._e(), _vm._v(" "), _vm.keysToHave.includes("Verification_caution_solidaire") ? _c("div", {
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
      "aria-expanded": "false",
      "aria-controls": "collapseThree"
    },
    on: {
      click: function click($event) {
        return _vm.isOpen("collapseThree");
      }
    }
  }, [_c("div", {
    staticClass: "d-flex justify-content-between align-items-center w-100"
  }, [_c("div", [_vm._v("Vérification cautionnement  solidaire")]), _vm._v(" "), _c("i", {
    staticClass: "chevron",
    "class": [null, undefined, "", "collapseThree"].includes(_vm.currentAccordion) ? "icofont-simple-up" : "icofont-simple-down"
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "accordion-collapse collapse show",
    attrs: {
      id: "collapseThree",
      "aria-labelledby": "headingThree",
      "data-bs-parent": "#accordionExample"
    }
  }, [_c("div", {
    staticClass: "accordion-body"
  }, [_c("div", {
    staticClass: "border border-3 p-2 pt-0 text-center"
  }, [_vm._m(9), _vm._v(" "), _c("div", {
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
      checked: _vm.Verification_caution_solidaire.add_caution == "Oui"
    },
    on: {
      change: function change($event) {
        return _vm.checkBoxChange($event, "Verification_caution_solidaire", "add_caution");
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
      checked: _vm.Verification_caution_solidaire.add_caution == "Non"
    },
    on: {
      change: function change($event) {
        return _vm.checkBoxChange($event, "Verification_caution_solidaire", "add_caution");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "flexCheckCheckedDisabled"
    }
  }, [_vm._v("\n                                                     Non\n                                                 ")])])])]), _vm._v(" "), _vm.Verification_caution_solidaire.add_caution == "Oui" ? _c("div", {
    staticClass: "table-responsive mt-2"
  }, _vm._l(_vm.caution_solidaires, function (caution, index) {
    var _caution$files, _caution$files2, _vm$caution_solidaire;
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
      staticClass: "d-flex justify-content-between align-items-center px-2",
      staticStyle: {
        background: "#f4f3f3"
      }
    }, [_c("h6", [_vm._v("Caution " + _vm._s(index + 1))]), _vm._v(" "), _c("i", {
      staticClass: "icofont-thin-down",
      staticStyle: {
        color: "black"
      }
    })])]), _vm._v(" "), _c("div", {
      staticClass: "table-responsive"
    }, [_c("table", {
      staticClass: "table table-borderless"
    }, [_vm._m(10, true), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_c("input", {
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
      domProps: {
        value: "CNI"
      }
    }, [_vm._v("CNI")]), _vm._v(" "), _c("option", {
      domProps: {
        value: "PASSEPORT"
      }
    }, [_vm._v("PASSEPORT")]), _vm._v(" "), _c("option", {
      domProps: {
        value: "PERMIS DE CONDUIRE"
      }
    }, [_vm._v("PERMIS DE CONDUIRE")]), _vm._v(" "), _c("option", {
      domProps: {
        value: "CARTE CONSULAIRE"
      }
    }, [_vm._v("CARTE CONSULAIRE")])])]), _vm._v(" "), _c("td", [_c("input", {
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
      domProps: {
        value: caution.numero_piece_identite
      },
      on: {
        change: function change($event) {
          return _vm.buildCHecklist();
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(caution, "numero_piece_identite", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("Multiselect", {
      "class": {
        "multiselect-green": (caution === null || caution === void 0 ? void 0 : caution.from_caf) == true
      },
      attrs: {
        searchable: true,
        trackBy: "name",
        label: "name",
        "value-prop": "phonecode",
        classes: {
          optionPointed: "text-gray-800 bg-gray-100"
        },
        options: _vm.countries
      },
      on: {
        change: function change($event) {
          return _vm.buildCHecklist();
        }
      },
      scopedSlots: _vm._u([{
        key: "option",
        fn: function fn(_ref3) {
          var option = _ref3.option,
            isPointed = _ref3.isPointed;
          return [_c("p", {
            staticClass: "multiselect-option"
          }, [_vm._v(_vm._s(option.name))])];
        }
      }, {
        key: "singlelabel",
        fn: function fn(_ref4) {
          var value = _ref4.value;
          return [_c("p", {
            staticClass: "multiselect-single-label"
          }, [_vm._v(_vm._s(value.phonecode))])];
        }
      }], null, true),
      model: {
        value: caution.code_pays,
        callback: function callback($$v) {
          _vm.$set(caution, "code_pays", $$v);
        },
        expression: "caution.code_pays"
      }
    })], 1), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: caution.numero_tel_caution_solidaire,
        expression: "caution.numero_tel_caution_solidaire"
      }, {
        name: "numbers-only",
        rawName: "v-numbers-only"
      }],
      staticClass: "form-control",
      "class": {
        "from-caf": (caution === null || caution === void 0 ? void 0 : caution.from_caf) == true
      },
      domProps: {
        value: caution.numero_tel_caution_solidaire
      },
      on: {
        change: function change($event) {
          return _vm.buildCHecklist();
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(caution, "numero_tel_caution_solidaire", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: caution.profession,
        expression: "caution.profession"
      }],
      staticClass: "form-control",
      "class": {
        "from-caf": (caution === null || caution === void 0 ? void 0 : caution.from_caf) == true
      },
      domProps: {
        value: caution.profession
      },
      on: {
        change: function change($event) {
          return _vm.buildCHecklist();
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(caution, "profession", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: caution.localisation_caution_solidaire,
        expression: "caution.localisation_caution_solidaire"
      }],
      staticClass: "form-control",
      "class": {
        "from-caf": (caution === null || caution === void 0 ? void 0 : caution.from_caf) == true
      },
      domProps: {
        value: caution.localisation_caution_solidaire
      },
      on: {
        change: function change($event) {
          return _vm.buildCHecklist();
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(caution, "localisation_caution_solidaire", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "form-control",
      "class": {
        "from-caf": (caution === null || caution === void 0 ? void 0 : caution.from_caf) == true
      },
      attrs: {
        "default-typing": false
      },
      on: {
        change: function change($event) {
          return _vm.buildCHecklist();
        }
      },
      model: {
        value: caution.revenu_mensuel,
        callback: function callback($$v) {
          _vm.$set(caution, "revenu_mensuel", $$v);
        },
        expression: "caution.revenu_mensuel"
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      "class": {
        "from-caf": (caution === null || caution === void 0 ? void 0 : caution.from_caf) == true
      },
      attrs: {
        "default-typing": false
      },
      on: {
        change: function change($event) {
          return _vm.buildCHecklist();
        }
      },
      model: {
        value: caution.valeur_patrimoine,
        callback: function callback($$v) {
          _vm.$set(caution, "valeur_patrimoine", $$v);
        },
        expression: "caution.valeur_patrimoine"
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      "class": {
        "from-caf": (caution === null || caution === void 0 ? void 0 : caution.from_caf) == true
      },
      attrs: {
        "default-typing": false
      },
      on: {
        change: function change($event) {
          return _vm.buildCHecklist();
        }
      },
      model: {
        value: caution.valeur_cautionnement,
        callback: function callback($$v) {
          _vm.$set(caution, "valeur_cautionnement", $$v);
        },
        expression: "caution.valeur_cautionnement"
      }
    })], 1), _vm._v(" "), _c("td", [_c("div", {
      staticClass: "d-flex align-items-center"
    }, [_c("div", [(caution === null || caution === void 0 || (_caution$files = caution.files) === null || _caution$files === void 0 ? void 0 : _caution$files.length) > 0 ? _c("span", {
      staticClass: "p-1 px-2 mx-2 text-nowrap",
      staticStyle: {
        "background-color": "rgb(44, 62, 80)",
        color: "white",
        "font-size": "13px",
        "border-radius": "5px",
        "margin-left": "0 !important",
        width: "150px"
      }
    }, [_vm._v("\n                                                                                     " + _vm._s((caution === null || caution === void 0 ? void 0 : caution.nb_files) > 0 ? (caution === null || caution === void 0 || (_caution$files2 = caution.files) === null || _caution$files2 === void 0 ? void 0 : _caution$files2.length) + " fichier(s) uploadé(s)" : "") + "\n                                                                                 ")]) : _vm._e()]), _vm._v(" "), _c("div", [_c("button", {
      staticClass: "btn shadow-md text-white",
      staticStyle: {
        cursor: "pointer",
        background: "#2c3e50",
        width: "26px",
        "font-size": "13px",
        padding: "1px"
      },
      attrs: {
        type: "button",
        name: "button",
        "data-toggle": "tooltip",
        title: "Cliquer ici pour uploader ou voir le(s) fichier(s)"
      },
      on: {
        click: function click($event) {
          return _vm.addFiles($event, index);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-attachment"
    })])])])]), _vm._v(" "), _c("td", [_c("div", {
      staticClass: "d-flex justify-content-center"
    }, [_c("button", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: index == ((_vm$caution_solidaire = _vm.caution_solidaires) === null || _vm$caution_solidaire === void 0 ? void 0 : _vm$caution_solidaire.length) - 1,
        expression: "index == caution_solidaires?.length - 1"
      }],
      staticStyle: {
        background: "#34495e",
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
    })]), _vm._v(" "), _c("button", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: index != 0,
        expression: "index != 0"
      }],
      staticClass: "trash-icon",
      staticStyle: {
        "background-color": "transparent",
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Supprimer Cette caution"
      },
      on: {
        mouseover: function mouseover($event) {
          _vm.isHovered = true;
        },
        mouseleave: function mouseleave($event) {
          _vm.isHovered = false;
        },
        click: function click($event) {
          return _vm.removeCaution(index);
        }
      }
    }, [_c("i", {
      "class": _vm.iconClass
    })])])])])])])]), _vm._v(" "), _c("div", {}, [_vm._m(11, true), _vm._v(" "), _c("div", {
      staticClass: "d-flex"
    }, [_c("div", {
      staticClass: "m-2 d-flex mr-4 align-items-center"
    }, [_c("input", {
      attrs: {
        type: "checkbox",
        value: "Oui",
        id: "oui_donnees_cautions" + index
      },
      domProps: {
        checked: _vm.conformite_donnees.Verification_caution_solidaire == "Oui"
      },
      on: {
        change: function change($event) {
          return _vm.checkBoxChange($event, "conformite_donnees", "Verification_caution_solidaire");
        }
      }
    }), _vm._v(" "), _c("label", {
      staticClass: "text-nowrap",
      staticStyle: {
        "margin-left": "5px"
      },
      attrs: {
        "for": "oui_donnees_cautions" + index
      }
    }, [_vm._v("Oui, données conformes ")])]), _vm._v(" "), _c("div", {
      staticClass: "m-2 d-flex mr-4 align-items-center"
    }, [_c("input", {
      attrs: {
        type: "checkbox",
        value: "Non",
        id: "non_donnees_cautions_pas_conformes" + index
      },
      domProps: {
        checked: _vm.conformite_donnees.Verification_caution_solidaire == "Non"
      },
      on: {
        input: function input($event) {
          return _vm.checkBoxChange($event, "conformite_donnees", "Verification_caution_solidaire");
        }
      }
    }), _vm._v(" "), _c("label", {
      staticClass: "text-nowrap",
      staticStyle: {
        "margin-left": "5px"
      },
      attrs: {
        "for": "non_donnees_cautions_pas_conformes" + index
      }
    }, [_vm._v("Non, données pas conformes")])])])])] : [_c("legend", {
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
    }, [_c("h6", [_vm._v("Caution " + _vm._s(index + 1))]), _vm._v(" "), _c("i", {
      staticClass: "icofont-thin-down",
      staticStyle: {
        color: "black"
      }
    })])])]], 2)]);
  }), 0) : _vm._e()])])]) : _vm._e(), _vm._v(" "), _vm.keysToHave.includes("responsable_entreprise") ? _c("div", {
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
      "aria-expanded": "false",
      "aria-controls": "collapseFour"
    },
    on: {
      click: function click($event) {
        return _vm.isOpen("collapseFour");
      }
    }
  }, [_c("div", {
    staticClass: "d-flex justify-content-between align-items-center w-100"
  }, [_c("div", [_vm._v("Responsables de l'entreprise / Équipe dirigeante")]), _vm._v(" "), _c("i", {
    staticClass: "chevron",
    "class": [null, undefined, "", "collapseFour"].includes(_vm.currentAccordion) ? "icofont-simple-up" : "icofont-simple-down"
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "accordion-collapse collapse show",
    attrs: {
      id: "collapseFour",
      "aria-labelledby": "headingFour",
      "data-bs-parent": "#accordionExample"
    }
  }, [_c("div", {
    staticClass: "accordion-body"
  }, [_c("div", {
    staticClass: "form-check form-check-inline"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.defaultResponsable,
      expression: "defaultResponsable"
    }],
    staticClass: "form-check-input",
    attrs: {
      disabled: "",
      type: "checkbox",
      value: "Directeur Géneral",
      id: "dg"
    },
    domProps: _defineProperty({
      checked: _vm.defaultResponsable.includes("Directeur Géneral")
    }, "checked", Array.isArray(_vm.defaultResponsable) ? _vm._i(_vm.defaultResponsable, "Directeur Géneral") > -1 : _vm.defaultResponsable),
    on: {
      change: function change($event) {
        var $$a = _vm.defaultResponsable,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "Directeur Géneral",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.defaultResponsable = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.defaultResponsable = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.defaultResponsable = $$c;
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    staticStyle: {
      opacity: "1"
    },
    attrs: {
      "for": "dg"
    }
  }, [_vm._v("\n                                         Directeur générale\n                                     ")])]), _vm._v(" "), _c("div", {
    staticClass: "form-check form-check-inline"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.defaultResponsable,
      expression: "defaultResponsable"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      value: "Directeur commercial",
      id: "directeur-commercial"
    },
    domProps: _defineProperty({
      checked: _vm.defaultResponsable.includes("Directeur commercial")
    }, "checked", Array.isArray(_vm.defaultResponsable) ? _vm._i(_vm.defaultResponsable, "Directeur commercial") > -1 : _vm.defaultResponsable),
    on: {
      change: [function ($event) {
        var $$a = _vm.defaultResponsable,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "Directeur commercial",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.defaultResponsable = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.defaultResponsable = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.defaultResponsable = $$c;
        }
      }, function ($event) {
        return _vm.selectResp($event);
      }]
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "directeur-commercial"
    }
  }, [_vm._v("\n                                         Directeur commercial\n                                     ")])]), _vm._v(" "), _c("div", {
    staticClass: "form-check form-check-inline"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.defaultResponsable,
      expression: "defaultResponsable"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      value: "Directeur des Affaires Financières",
      id: "daf"
    },
    domProps: _defineProperty({
      checked: _vm.defaultResponsable.includes("Directeur des Affaires Financières")
    }, "checked", Array.isArray(_vm.defaultResponsable) ? _vm._i(_vm.defaultResponsable, "Directeur des Affaires Financières") > -1 : _vm.defaultResponsable),
    on: {
      change: [function ($event) {
        var $$a = _vm.defaultResponsable,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "Directeur des Affaires Financières",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.defaultResponsable = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.defaultResponsable = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.defaultResponsable = $$c;
        }
      }, function ($event) {
        return _vm.selectResp($event);
      }]
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "daf"
    }
  }, [_vm._v("\n                                         DAF\n                                     ")])]), _vm._v(" "), _vm._m(12), _vm._v(" "), _vm._l(_vm.responsable_entreprise, function (resp, index) {
    return _c("form", {
      key: index,
      staticClass: "form mt-2"
    }, [_c("fieldset", [[undefined, null, false].includes(_vm.seen_resp[index]) ? [_c("legend", {
      staticStyle: {
        cursor: "pointer"
      },
      on: {
        click: function click($event) {
          return _vm.retract("seen_resp", index);
        }
      }
    }, [_c("div", {
      staticClass: "d-flex justify-content-between align-items-center px-2",
      staticStyle: {
        background: "#f4f3f3"
      }
    }, [_vm.typeClient == "Corporate" ? _c("h6", [_vm._v(_vm._s(resp === null || resp === void 0 ? void 0 : resp.fonction))]) : _c("h6", [_vm._v("Responsable " + _vm._s(index + 1))]), _vm._v(" "), _c("i", {
      staticClass: "icofont-thin-down",
      staticStyle: {
        color: "black"
      }
    })])]), _vm._v(" "), _c("div", {
      staticClass: "table-responsive"
    }, [_c("table", {
      staticClass: "table table-responsive table-borderless"
    }, [_vm._m(13, true), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: resp.nom_prenom,
        expression: "resp.nom_prenom"
      }],
      staticClass: "form-control",
      staticStyle: {
        width: "250px"
      },
      domProps: {
        value: resp.nom_prenom
      },
      on: {
        change: function change($event) {
          return _vm.buildCHecklist();
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(resp, "nom_prenom", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: resp.pouvoir_signature,
        expression: "resp.pouvoir_signature"
      }],
      staticClass: "form-select",
      staticStyle: {
        width: "64px"
      },
      on: {
        input: function input($event) {
          return _vm.buildCHecklist();
        },
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(resp, "pouvoir_signature", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.buildCHecklist();
        }]
      }
    }, [_c("option", {
      attrs: {
        value: "O"
      }
    }, [_vm._v("O")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "N"
      }
    }, [_vm._v("N")])])]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: resp.fonction,
        expression: "resp.fonction"
      }],
      staticClass: "form-control",
      domProps: {
        value: resp.fonction
      },
      on: {
        change: function change($event) {
          return _vm.buildCHecklist();
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(resp, "fonction", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("date-input", {
      staticClass: "input-date",
      attrs: {
        value: resp.date_naissance
      },
      on: {
        change: function change($event) {
          return _vm.setDateInput($event, "responsable_entreprise", "date_naissance", index);
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: resp.experience,
        expression: "resp.experience"
      }],
      staticClass: "form-control",
      domProps: {
        value: resp.experience
      },
      on: {
        change: function change($event) {
          return _vm.buildCHecklist();
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(resp, "experience", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: resp.diplome,
        expression: "resp.diplome"
      }],
      staticClass: "form-control",
      domProps: {
        value: resp.diplome
      },
      on: {
        change: function change($event) {
          return _vm.buildCHecklist();
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(resp, "diplome", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: resp.sexe,
        expression: "resp.sexe"
      }],
      staticClass: "form-control w-100",
      staticStyle: {
        width: "130px !important"
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(resp, "sexe", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.buildCHecklist();
        }]
      }
    }, [_c("option", {
      attrs: {
        value: "Masculin"
      }
    }, [_vm._v("\n                                                                         Masculin\n                                                                     ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "Féminin"
      }
    }, [_vm._v("\n                                                                         Féminin\n                                                                     ")])])]), _vm._v(" "), _c("td", [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: resp.nature_piece,
        expression: "resp.nature_piece"
      }],
      staticClass: "form-select",
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(resp, "nature_piece", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.buildCHecklist();
        }]
      }
    }, [_c("option", {
      domProps: {
        value: "CNI"
      }
    }, [_vm._v("CNI")]), _vm._v(" "), _c("option", {
      domProps: {
        value: "PASSEPORT"
      }
    }, [_vm._v("PASSEPORT")]), _vm._v(" "), _c("option", {
      domProps: {
        value: "PERMIS DE CONDUIRE"
      }
    }, [_vm._v("PERMIS DE CONDUIRE")]), _vm._v(" "), _c("option", {
      domProps: {
        value: "CARTE CONSULAIRE"
      }
    }, [_vm._v("CARTE CONSULAIRE")])])]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: resp.numero_piece,
        expression: "resp.numero_piece"
      }],
      staticClass: "form-control",
      domProps: {
        value: resp.numero_piece
      },
      on: {
        change: function change($event) {
          return _vm.buildCHecklist();
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(resp, "numero_piece", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("Multiselect", {
      attrs: {
        searchable: true,
        trackBy: "name",
        label: "name",
        "value-prop": "phonecode",
        classes: {
          optionPointed: "text-gray-800 bg-gray-100"
        },
        options: _vm.countries
      },
      on: {
        change: function change($event) {
          return _vm.buildCHecklist();
        }
      },
      scopedSlots: _vm._u([{
        key: "option",
        fn: function fn(_ref5) {
          var option = _ref5.option,
            isPointed = _ref5.isPointed;
          return [_c("p", {
            staticClass: "multiselect-option"
          }, [_vm._v(_vm._s(option.name))])];
        }
      }, {
        key: "singlelabel",
        fn: function fn(_ref6) {
          var value = _ref6.value;
          return [_c("p", {
            staticClass: "multiselect-single-label"
          }, [_vm._v(_vm._s(value.phonecode))])];
        }
      }], null, true),
      model: {
        value: resp.code_pays,
        callback: function callback($$v) {
          _vm.$set(resp, "code_pays", $$v);
        },
        expression: "resp.code_pays"
      }
    })], 1), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: resp.numero_tel,
        expression: "resp.numero_tel"
      }, {
        name: "numbers-only",
        rawName: "v-numbers-only"
      }],
      staticClass: "form-control",
      domProps: {
        value: resp.numero_tel
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(resp, "numero_tel", $event.target.value);
        }, function ($event) {
          return _vm.buildCHecklist();
        }]
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: resp.email,
        expression: "resp.email"
      }],
      staticClass: "form-control",
      domProps: {
        value: resp.email
      },
      on: {
        change: function change($event) {
          return _vm.buildCHecklist();
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(resp, "email", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("div", {
      staticClass: "d-flex align-items-center"
    }, [_c("button", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: index == _vm.responsable_entreprise.length - 1,
        expression: "index == responsable_entreprise.length - 1"
      }],
      staticStyle: {
        background: "#34495e",
        "border-radius": "15%"
      },
      attrs: {
        title: "Ajouter un nouveau responsable",
        type: "button"
      },
      on: {
        click: function click($event) {
          return _vm.addMoreResponsable();
        }
      }
    }, [_c("i", {
      staticClass: "icofont-plus",
      staticStyle: {
        color: "white"
      }
    })]), _vm._v(" "), _c("button", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: index != 0 && _vm.typeClient != "Corporate" || index > 2 && _vm.typeClient == "Corporate",
        expression: "(index!=0 && typeClient!='Corporate') || (index > 2 && typeClient=='Corporate')"
      }],
      staticClass: "trash-icon",
      staticStyle: {
        "background-color": "transparent",
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Supprimer ce responsable"
      },
      on: {
        mouseover: function mouseover($event) {
          _vm.isHovered = true;
        },
        mouseleave: function mouseleave($event) {
          _vm.isHovered = false;
        },
        click: function click($event) {
          return _vm.removeResponsable(index);
        }
      }
    }, [_c("i", {
      "class": _vm.iconClass
    })])])])])])])])] : [_c("legend", {
      staticStyle: {
        cursor: "pointer"
      },
      on: {
        click: function click($event) {
          return _vm.retract("seen_resp", index);
        }
      }
    }, [_c("div", {
      staticClass: "d-flex justify-content-between align-items-center px-2",
      staticStyle: {
        background: "#f4f3f3"
      }
    }, [_vm.typeClient == "Corporate" ? _c("h6", [_vm._v(_vm._s(resp === null || resp === void 0 ? void 0 : resp.fonction))]) : _c("h6", [_vm._v("Responsable " + _vm._s(index + 1))]), _vm._v(" "), _c("i", {
      staticClass: "icofont-thin-down",
      staticStyle: {
        color: "black"
      }
    })])])]], 2)]);
  }), _vm._v(" "), _c("div", {
    staticClass: "row mr-2"
  }, [_vm._m(14), _vm._v(" "), _c("div", {
    staticClass: "d-flex"
  }, [_c("div", {
    staticClass: "m-2 d-flex mr-4 align-items-center"
  }, [_c("input", {
    attrs: {
      type: "checkbox",
      value: "Oui",
      id: "oui_responsable_entreprises"
    },
    domProps: {
      checked: _vm.conformite_donnees.responsable_entreprise == "Oui"
    },
    on: {
      change: function change($event) {
        return _vm.checkBoxChange($event, "conformite_donnees", "responsable_entreprise");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "text-nowrap",
    staticStyle: {
      "margin-left": "5px"
    },
    attrs: {
      "for": "oui_responsable_entreprises"
    }
  }, [_vm._v("Oui, données conformes ")])]), _vm._v(" "), _c("div", {
    staticClass: "m-2 d-flex mr-4 align-items-center"
  }, [_c("input", {
    attrs: {
      type: "checkbox",
      value: "Non",
      id: "non_donnees_responsables_pas_conformes"
    },
    domProps: {
      checked: _vm.conformite_donnees.responsable_entreprise == "Non"
    },
    on: {
      input: function input($event) {
        return _vm.checkBoxChange($event, "conformite_donnees", "responsable_entreprise");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "text-nowrap",
    staticStyle: {
      "margin-left": "5px"
    },
    attrs: {
      "for": "non_donnees_responsables_pas_conformes"
    }
  }, [_vm._v("Non, données pas conformes")])])])])], 2)])]) : _vm._e()])]), _vm._v(" "), _c("div", {
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
        return _vm.sendDecision("Avis favorable");
      }
    }
  }, [_vm._v("\n                          Approuver\n                     ")]) : _c("button", {
    staticClass: "btn btn-secondary",
    staticStyle: {
      "padding-top": "0px",
      "padding-bottom": "0px",
      "background-color": "#7f8c8d"
    },
    attrs: {
      disabled: ""
    }
  }, [_vm._m(15), _vm._v(" Prise en compte de la décision en cours ...\n                     ")]), _vm._v(" "), !_vm.isLoading ? _c("button", {
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
        return _vm.$emit("closePriorCheckModal");
      }
    }
  }, [_vm._v("\n                         Retour\n                     ")]) : _vm._e()])])])]), _vm._v(" "), _c("modal", {
    staticClass: "pb-5",
    attrs: {
      name: "confirm_ajournement",
      width: "512",
      height: "auto",
      adaptive: true,
      resizable: true
    }
  }, [_c("div", {
    staticClass: "p-4"
  }, [_c("div", {
    staticClass: "title"
  }, [_c("h3", [_vm._v("Confirmation de l'ajournement")])]), _vm._v(" "), _c("div", {
    staticClass: "body"
  }, [_vm._v("\n             Vous avez repondu: Non je n'approuve pas, à la question "), _c("b", [_vm._v("Approuvez-vous  la modification de cet encours ?")]), _vm._v(" "), _c("br"), _vm._v("\n             En acceptant vous decidez d'ajourner le dossier\n             "), _c("br"), _vm._v(" "), _c("b", [_vm._v("Êtes-vous sûr de continuer ?")])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-center mt-2"
  }, [_c("button", {
    staticClass: "bg-primary mr-2",
    staticStyle: {
      "border-radius": "5px",
      width: "100px",
      height: "42px",
      border: "none",
      color: "white"
    },
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.launchAjournementProcess(true);
      }
    }
  }, [_vm._v("OK")]), _vm._v(" "), _c("button", {
    staticClass: "bg-secondary",
    staticStyle: {
      "border-radius": "5px",
      width: "100px",
      height: "42px",
      "margin-left": "10px !important",
      border: "none",
      color: "white"
    },
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.deniedConfirmModal($event);
      }
    }
  }, [_vm._v("Retour")])])])])], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_vm._v("\n                                                 Approuvez-vous la modification de cet encours ? "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "text-danger",
    staticStyle: {
      "font-size": "12px",
      "margin-top": "-5px"
    }
  }, [_c("i", [_vm._v("(Si vous cliquez sur Non, je n'approuve pas, alors le dossier sera "), _c("strong", [_vm._v("automatiquement ajourné ")]), _vm._v(")")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", {
    staticStyle: {
      "margin-bottom": "0px",
      "margin-top": "10px"
    }
  }, [_vm._v("Les données relatives à l'encours du client sont-elles conformes ? "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Date de Naissance "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Code Pays "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Téléphone "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Nature de la pièce d'identité "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Numéro de la pièce d'identité "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", {
    staticStyle: {
      "margin-bottom": "0px",
      "margin-top": "10px"
    }
  }, [_vm._v("Les données relatives a l'identité du client sont-elles conformes ? "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]);
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
  }, [_vm._v("\n                                                 Avez-vous des cautions solidaire a ajoutés ? "), _c("span", {
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
  }, [_vm._v("Nature de la pièce d'identité "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])])]), _vm._v(" "), _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Numero de la pièce "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])])]), _vm._v(" "), _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Code pays"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])])]), _vm._v(" "), _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Numero téléphone "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])])]), _vm._v(" "), _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Profession "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])])]), _vm._v(" "), _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Localisation "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])])]), _vm._v(" "), _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Revenu mensuel "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])])]), _vm._v(" "), _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Valeur patrimoine "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])])]), _vm._v(" "), _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Valeur cautionnement"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", {
    staticStyle: {
      "margin-bottom": "!important"
    }
  }, [_vm._v("Les données des cautions sont-elles conformes ? "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "form-check form-check-inline"
  }, [_c("i", {
    staticClass: "icofont-info-circle",
    staticStyle: {
      "margin-left": "5px",
      color: "#1485ff"
    },
    attrs: {
      "data-toggle": "tooltip",
      title: "Si vous voulez ajouter un responsable tel que directeur commercial, cocher sa case pour remplir ses informations"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Nom et prenoms"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])])]), _vm._v(" "), _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Signature"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])])]), _vm._v(" "), _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Fonction"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])])]), _vm._v(" "), _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Date naissance"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])])]), _vm._v(" "), _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Experience (Année)"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])])]), _vm._v(" "), _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Diplôme"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])])]), _vm._v(" "), _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Sexe"), _c("span", {
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
  }, [_vm._v("Numéro de la pièce"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])])]), _vm._v(" "), _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Code pays "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])])]), _vm._v(" "), _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Téléphone "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])])]), _vm._v(" "), _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("E-mail")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", {
    staticStyle: {
      "margin-bottom": "!important"
    }
  }, [_vm._v("Les données des responsables de l'entreprise sont-elles conformes ? "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]);
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

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/cofina/PriorChecklist.vue?vue&type=style&index=0&id=05b413ca&lang=css&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/cofina/PriorChecklist.vue?vue&type=style&index=0&id=05b413ca&lang=css&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.accordion-button[data-v-05b413ca]{\r\n    background-color: #34495e !important;\r\n    color: white !important;\r\n    height: 35px;\n}\n.form-label[data-v-05b413ca]{\r\n    margin-bottom:0px;\n}\r\n/* .accordion-body{\r\n    max-height: 315px;\r\n    overflow-y: auto;\r\n} */\n.accordion-button[data-v-05b413ca]::after{\r\n    background-image:none\n}\ntd input[data-v-05b413ca]{\r\n    width: 150px\n}\ntd select[data-v-05b413ca]{\r\n    width: 250px\n}\n.multiselect[data-v-05b413ca]{\r\n    width:100px !important;\n}\n.input-date[data-v-05b413ca]{\r\n    width: 240px;\n}\n.from-caf[data-v-05b413ca]{\r\n    background: #00ffff21;\r\n    color: #000;\n}\n.multiselect-green *[data-v-05b413ca]{\r\n    background:#00ffff21\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/cofina/PriorChecklist.vue?vue&type=style&index=0&id=05b413ca&lang=css&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/cofina/PriorChecklist.vue?vue&type=style&index=0&id=05b413ca&lang=css&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PriorChecklist_vue_vue_type_style_index_0_id_05b413ca_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PriorChecklist.vue?vue&type=style&index=0&id=05b413ca&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/cofina/PriorChecklist.vue?vue&type=style&index=0&id=05b413ca&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PriorChecklist_vue_vue_type_style_index_0_id_05b413ca_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PriorChecklist_vue_vue_type_style_index_0_id_05b413ca_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/shared/cofina/PriorChecklist.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/shared/cofina/PriorChecklist.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PriorChecklist_vue_vue_type_template_id_05b413ca_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PriorChecklist.vue?vue&type=template&id=05b413ca&scoped=true */ "./resources/js/components/shared/cofina/PriorChecklist.vue?vue&type=template&id=05b413ca&scoped=true");
/* harmony import */ var _PriorChecklist_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PriorChecklist.vue?vue&type=script&lang=js */ "./resources/js/components/shared/cofina/PriorChecklist.vue?vue&type=script&lang=js");
/* harmony import */ var _PriorChecklist_vue_vue_type_style_index_0_id_05b413ca_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PriorChecklist.vue?vue&type=style&index=0&id=05b413ca&lang=css&scoped=true */ "./resources/js/components/shared/cofina/PriorChecklist.vue?vue&type=style&index=0&id=05b413ca&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PriorChecklist_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _PriorChecklist_vue_vue_type_template_id_05b413ca_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _PriorChecklist_vue_vue_type_template_id_05b413ca_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "05b413ca",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/shared/cofina/PriorChecklist.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/cofina/PriorChecklist.vue?vue&type=script&lang=js":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/shared/cofina/PriorChecklist.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PriorChecklist_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PriorChecklist.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/cofina/PriorChecklist.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PriorChecklist_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/cofina/PriorChecklist.vue?vue&type=style&index=0&id=05b413ca&lang=css&scoped=true":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/shared/cofina/PriorChecklist.vue?vue&type=style&index=0&id=05b413ca&lang=css&scoped=true ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PriorChecklist_vue_vue_type_style_index_0_id_05b413ca_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PriorChecklist.vue?vue&type=style&index=0&id=05b413ca&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/cofina/PriorChecklist.vue?vue&type=style&index=0&id=05b413ca&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/shared/cofina/PriorChecklist.vue?vue&type=template&id=05b413ca&scoped=true":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/shared/cofina/PriorChecklist.vue?vue&type=template&id=05b413ca&scoped=true ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PriorChecklist_vue_vue_type_template_id_05b413ca_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PriorChecklist_vue_vue_type_template_id_05b413ca_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PriorChecklist_vue_vue_type_template_id_05b413ca_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PriorChecklist.vue?vue&type=template&id=05b413ca&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/cofina/PriorChecklist.vue?vue&type=template&id=05b413ca&scoped=true");


/***/ })

}]);