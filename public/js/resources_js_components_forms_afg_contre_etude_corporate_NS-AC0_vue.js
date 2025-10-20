"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_forms_afg_contre_etude_corporate_NS-AC0_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude_corporate/NS-AC0.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude_corporate/NS-AC0.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/ContextMenu */ "./resources/js/components/shared/ContextMenu.vue");
/* harmony import */ var _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/ContextMenuItem */ "./resources/js/components/shared/ContextMenuItem.vue");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vueform/multiselect/dist/multiselect.vue2 */ "./node_modules/@vueform/multiselect/dist/multiselect.vue2.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }







window.$ = window.jQuery = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "FicheSignaletique",
  display: "FicheSignaletique",
  components: {
    ContextMenu: _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__["default"],
    ContextMenuItem: _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"],
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.ChevronDownIcon,
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.PlusIcon,
    BookOpenIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.BookOpenIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.TrashIcon,
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.AirplayIcon,
    Multiselect: _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  computed: {
    totalPartPourcentageActionnariats: function totalPartPourcentageActionnariats() {
      var trying = this.actionnariats.map(function (el) {
        el.pourcentage_participation = String(el.pourcentage_participation).replace(/\s+/g, "");
        if (!el.pourcentage_participation) return 0;
        return Number(el.pourcentage_participation);
      }).reduce(function (sum, curr) {
        return sum + curr;
      }, 0);
      if (trying > 100) return "100.00";
      return trying.toLocaleString("fr-FR");
    },
    ActionnariatMaxNumber: function ActionnariatMaxNumber() {
      var restant = 100 - Number(this.totalPartPourcentageActionnariats);
      if (restant < 0) return 0;
      return restant;
    },
    secteurs_activites_: function secteurs_activites_() {
      var _this = this;
      if (this.formDataToBeWatched.groupe_activite == "" || this.formDataToBeWatched.groupe_activite == null) {
        this.selected_secteur_activite = "";
        // this.formDataToBeWatched.secteur_activite = "";
      }
      var array = [];
      this.secteurs_activites.forEach(function (element) {
        if (_this.formDataToBeWatched.groupe_activite == "" || _this.formDataToBeWatched.groupe_activite == null) {
          array.push(element);
        } else {
          if (_this.selected_groupe_secteur == "" || _this.selected_groupe_secteur != '' && _this.selected_groupe_secteur.id == element.groupe_activite_id) {
            array.push(element);
          }
        }
      });
      return array;
    },
    groupes_activites_: function groupes_activites_() {
      var array = [];
      this.groupes_activites.forEach(function (element) {
        array.push(element);
      });
      return array;
    },
    listeClientele: function listeClientele() {
      var items = [];
      if (this.formDataToBeWatched.categorie_clientele == 'Clientèle Ordinaire') {
        var _this$authcheckUsr;
        if (((_this$authcheckUsr = this.authcheckUsr) === null || _this$authcheckUsr === void 0 ? void 0 : _this$authcheckUsr.categorie_client) == "Retail") {
          items = [{
            label: "",
            value: ''
          }, {
            label: "Professionnel",
            value: 'Professionnel'
          }, {
            label: "TPE/TPI",
            value: 'TPE/TPI'
          }];
        } else {
          items = [{
            label: "",
            value: ''
          }, {
            label: "Entreprises",
            value: 'Entreprises'
          }, {
            label: "PME/PMI",
            value: 'PME/PMI'
          }];
        }
      } else if (this.formDataToBeWatched.categorie_clientele == "Structure Financière Décentralisé ( SFD )") {
        items = [{
          label: "",
          value: ''
        }, {
          label: "Microfinances",
          value: 'Microfinances'
        }, {
          label: "Mutuelles",
          value: 'Mutuelles'
        }];
      } else if (this.formDataToBeWatched.categorie_clientele == "Assurances") {
        items = [{
          label: "Assurances",
          value: 'Assurances'
        }];
      } else if (this.formDataToBeWatched.categorie_clientele == "Fonds Commun de Placement") {
        items = [{
          label: "Fonds Commun de Placement",
          value: 'Fonds Commun de Placement'
        }];
      } else if (this.formDataToBeWatched.categorie_clientele == "Institutionnels") {
        items = [{
          label: "Institutionnels",
          value: 'Institutionnels'
        }];
      } else if (this.formDataToBeWatched.categorie_clientele == "SCI") {
        items = [{
          label: "SCI",
          value: 'SCI'
        }];
      } else if (this.formDataToBeWatched.categorie_clientele == "ONG et associations") {
        items = [{
          label: "ONG et associations",
          value: 'ONG et associations'
        }];
      } else if (this.formDataToBeWatched.categorie_clientele == "États") {
        items = [{
          label: "États",
          value: 'États'
        }];
      } else if (this.formDataToBeWatched.categorie_clientele == "Autres") {
        items = [{
          label: "Autres",
          value: 'Autres'
        }];
      }
      return items;
    },
    categoriesClientele: function categoriesClientele() {
      var items = [{
        label: "--- Sélectionner la catégorie de clientèle --",
        value: ''
      }, {
        label: "",
        value: ''
      }, {
        label: "Clientèle Ordinaire",
        value: 'Clientèle Ordinaire'
      }, {
        label: "Structure Financière Décentralisé ( SFD )",
        value: 'Structure Financière Décentralisé ( SFD )'
      }, {
        label: "Assurances",
        value: 'Assurances'
      }, {
        label: "Fonds Commun de Placement",
        value: 'Fonds Commun de Placement'
      }, {
        label: "Institutionnels",
        value: 'Institutionnels'
      }, {
        label: "SCI",
        value: 'SCI'
      }, {
        label: "ONG et associations",
        value: 'ONG et associations'
      }, {
        label: "États",
        value: 'États'
      }, {
        label: "Autres",
        value: 'Autres'
      }];
      return items;
    },
    shouldHaveDefaultNote: function shouldHaveDefaultNote() {
      return this.formDataToBeWatched.categorie_clientele && this.formDataToBeWatched.categorie_clientele != 'Clientèle Ordinaire' || this.formDataToBeWatched.has_etat_financier == 'Non';
    },
    notes_edane: function notes_edane() {
      if (this.shouldHaveDefaultNote) return ["B-"];
      return ["", "A3", "A2+", "A2", "A2-", "A1+", "A1", "A1-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "D-", "E"];
    }
  },
  created: function created() {
    var _this2 = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _this2$meta_data;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["default"].loadUserData().then(function (res) {
              _this2.authcheck = true;
              _this2.authcheckUsr = res.data;
              _this2.authcheckStatus = res.status;

              // if (this.meta_data['dossier_credit']?.final_outcome?.outcome == 0 && ['DUxMP2ZQheGFreQt5z2s', 'r472oAxtaFJSlsh5'].includes(this.authcheckUsr?.role_uuid) && this.meta_data['dossier_credit']?.is_ajournee == true) {
              //     this.onClasseRisqueChange()
              // }
            })["catch"](function (err) {
              _this2.loadWithError(err);
            });
          case 2:
            _context.next = 4;
            return _services_credit_service__WEBPACK_IMPORTED_MODULE_4__["default"].loadCAFAfg((_this2$meta_data = _this2.meta_data) === null || _this2$meta_data === void 0 || (_this2$meta_data = _this2$meta_data.dossier_credit) === null || _this2$meta_data === void 0 ? void 0 : _this2$meta_data.monteur_doss_email).then(function (res) {
              _this2.cafData(res);
            })["catch"](function (err) {
              console.log(err);
            });
          case 4:
            _context.next = 6;
            return _services_credit_service__WEBPACK_IMPORTED_MODULE_4__["default"].loadActivite().then(function (res) {
              _this2.secteurs_activites = res.data.data.activites;
              _this2.groupes_activites = res.data.data.groupes;
              _this2.updateValueSelected();
            })["catch"](function (err) {
              console.log(err);
            });
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  mounted: function mounted() {
    var _this3 = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            // Initiate cache

            _this3.loadRetrieved();
            _this3.loadTbAttrs(); // charge les attributs + sous attributs des tables
            _this3.tableClosedOrOpened();
            EventBus.$on("reload-T1", function () {
              EventBus.$emit("event-T0", {
                formdata: _this3.formDataToBeWatched
              });
            });
            EventBus.$on("ligne-selected-updated", function (data) {
              // console.log("data", data)
              _this3.formDataToBeWatched.montant_sollicite = data === null || data === void 0 ? void 0 : data.total_nouvelle_ligne_0;
              // console.log("montant_sollicite ==> ", data?.total_nouvelle_ligne_0)
            });
            EventBus.$on("created-extra-file-template", function (data) {
              var _data$template, _data$template2, _data$template3;
              _this3.formDataToBeWatched.note_verification = {
                id: data === null || data === void 0 || (_data$template = data.template) === null || _data$template === void 0 ? void 0 : _data$template.id,
                name: data === null || data === void 0 || (_data$template2 = data.template) === null || _data$template2 === void 0 ? void 0 : _data$template2.name,
                slug: data === null || data === void 0 || (_data$template3 = data.template) === null || _data$template3 === void 0 ? void 0 : _data$template3.slug,
                files_count: 0
              };
            });
            EventBus.$on('extra-files-uploaded', function (data) {
              var _this3$formDataToBeWa;
              if (((_this3$formDataToBeWa = _this3.formDataToBeWatched) === null || _this3$formDataToBeWa === void 0 || (_this3$formDataToBeWa = _this3$formDataToBeWa.note_verification) === null || _this3$formDataToBeWa === void 0 ? void 0 : _this3$formDataToBeWa.id) == data.template.id) {
                _this3.formDataToBeWatched.note_verification.files_count = data.files.length;
              }
            });
            EventBus.$on('update-sni', function () {
              _this3.onClasseRisqueChange();
            });
          case 8:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  },
  data: function data() {
    var _formDataToBeWatched, _this$meta_data, _ref;
    var vm = this;
    return _ref = {
      classe_riques_bg_color: {
        'background-color': "#e9ecef"
      },
      //
      actionnariats: [{
        nom_actionnaire: "",
        pourcentage_participation: "",
        max: 100
      }],
      date_demande_type: "text",
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_2__["default"].host,
      max_amount_retail: 35000000,
      alert_max_amount_retail: false,
      authcheck: false,
      authcheckUsr: null,
      authcheckStatus: null,
      watchInPause: false,
      initLoad: true,
      seen: true,
      seen1: true,
      seen2: true,
      cafInfo: null,
      clients: [],
      encours: null,
      gl_key: null,
      dpcredit0: false,
      dpcredit1: false,
      type_demande_list: [{
        "id": 1,
        "name": "DAE",
        "checked": false,
        "disabled": false
      }, {
        "id": 2,
        "name": "DAD",
        "checked": false,
        "disabled": false
      }],
      segment_entreprise_list: [{
        "id": 1,
        "name": "Grande Entreprise",
        "checked": false,
        "disabled": false
      }, {
        "id": 2,
        "name": "PME/PMI",
        "checked": false,
        "disabled": false
      }, {
        "id": 3,
        "name": "Crédit Bail",
        "checked": false,
        "disabled": false
      }],
      list_entites: {
        "CFN CIV": "CÔTE D'IVOIRE",
        "CFN BF": "BURKINA FASO",
        "CFN CG": "CONGO",
        "CFN GN": "GUINEE",
        "FINL": "CÔTE D'IVOIRE"
      }
    }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_ref, "list_entites", {
      "AFG BF": "BURKINA FASO",
      "AFG CG": "CONGO",
      "AFG CIV": "CÔTE D'IVOIRE",
      "AFG GB": "GABON",
      "AFG GN": "GUINEE",
      "AFGB ML": "MALI",
      "AFG SN": "SENEGAL",
      "AFG TG": "TOGO"
    }), "filiales", ["AFG BF", "AFG CG", "AFG CIV", "AFG GB", "AFG GN", "AFGB ML", "AFG SN", "AFG TG", "GROUPE"]), "list_notes", {
      "A": "Très bon risque",
      "B": "Bon risque",
      "C": "Risque acceptable / modéré",
      "D": "Risque à surveiller",
      "E": "Mauvaus risque",
      "F": "Très mauvais risque",
      "X": "Exclusion"
    }), "list_secteurs", ["Matières premières agricoles", "Matières premières minières et énergétiques", "Immobilier résidentiel", "Véhicules de tourisme et pièces détachées", "Mobilier, ameublement, électroménager et multimédia", "Textiles et accessoires", "Tourisme, restauration et loisirs", "Agroalimentaire et produits de consommation courante", "Santé et services à la personne", "Energie (électricité et produits pétroliers raffinés)", "Education & Formation", "Transport de personnes", "Matériaux de construction & Fournitures industrielles", "Technologie et Services industriels", "Infrastructures et Immobilier professionnel", "Véhicules industriels et pièces détachées", "Services financiers (Banques, Assurances, Invest immo & fin.)", "TelCo et services publics (environnement,...)", "Administrations publiques", "Divers"]), "list_secteurs_edane", ["Agriculture-Elevage-Pêche", "Industrie - Boulangerie", "Industrie Agro-Alimentaire", "Industrie Boisson-Jus-Bière", "Industrie Corps Gras - Huilerie", "BTP Complet", "BTP Specialise", "Commerce Automobile et Pièces détachées", "Commerce Quincaillerie", "Commerce de Detail Divers", "Commerce de Gros Divers", "Commerce de Gros de Produits Agricoles", "Distributeur de Carburant Major", "Hotel Restaurant", "Pharmacies - Détaillants", "Pharmacies - Grossistes", "Station de Carburant", "Energie-Eau-Gaz", "Industrie - Metalurgie", "Industrie Chimique", "Industrie Cimenterie", "Industrie Divers", "Industrie Medical", "Industrie Papier-Imprimerie", "Industrie Plastique", "Industrie Tabac", "Industrie Textile", "Industrie du Bois", "Mine", "Pétrole", "Agence de voyage", "Agences et Activités Immobilières", "Architecture et Ingénierie", "Auxilliaire Assurance et Finance", "Conseils Informatique", "Conseils Juridiques Comptables", "Enseignement", "Gardiennage - Sécurité", "Main d'oeuvre - Nettoyage - Formation", "Publicité Communication", "Réparation-Installation-Maintenance", "Santé (Cliniques Medecins)", "Services Divers", "Telecom - Divers", "Telecom - Opérateurs", "Entreposage", "Transit - Manutention-Logistique", "Transport Passager et Marchandise", "Divers"]), "contextList", [
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
    },
    // {
    //     title: "Rejeter",
    //     icon: "icofont icofont-close",
    //     handler: function () { },
    //     disabled: true
    // },
    // {
    //     title: "Vider",
    //     icon: "icofont icofont-paperclip",
    //     handler: function () { },
    //     disabled: true
    // },
    {
      title: "Supprimer",
      icon: "icofont icofont-trash",
      handler: this.startDeletingTbFromContext,
      disabled: false
    }]), "meta_parseable", {
      cred_pub_key: this.meta_data['cred_pub_key'],
      tb_name: this.tb_name
    }), "credits", []), "secteurs_activites", []), "groupes_activites", []), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_ref, "selected_secteur_activite", ""), "selected_groupe_secteur", ""), "matricule_client", ""), "formDataToBeWatched", (_formDataToBeWatched = {
      // begin new data
      note_verification: {},
      nouvelle_relation: "",
      groupe: "",
      nom_groupe: ""
    }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_formDataToBeWatched, "nom_groupe", ""), "forme_juridique", ""), "capital", 0), "bilan_certifie", ""), "nom_cabinet_comptable", ""), "consentement_bic", ""), "cote_en_bourse", ""), "date_creation", ""), "date_entre_relation", ""), "actionnariats", []), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_formDataToBeWatched, "decision_ccdg", ""), "motivations_ccdg", ""), "compte_contribuable", ""), "note_edane", ""), "personne_politiquement_expose", ""), "total_part", ""), "pays", ""), "agence", ""), "filiale", ""), "caf", ""), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_formDataToBeWatched, "contact_client", ""), "email_client", ""), "geo_lat", null), "geo_lon", null), "date_demande", null), "type_demande", ""), "type_de_clientele", ""), "type_credit", ""), "montant_sollicite", 0), "duree_credit", ""), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_formDataToBeWatched, "denomination_client", ""), "secteur_activite", ""), "classe_risque", ""), "matricule_client", ""), "notes", []), "commentaire_note", ''), "is_first_time", null), "chef_agence", null), "dir_expl", null), "chef_zone", null), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_formDataToBeWatched, "dir_engagement", null), "annee_referentielle", ""), "global_env_entity", _services_ebapis_service__WEBPACK_IMPORTED_MODULE_2__["default"].loadableEntity()[0].toUpperCase()), "segment_entreprise", ""), "credit_syndique", ""), "cheffe_file", ''), "groupe_activite", ""), "categorie_clientele", ""), "has_etat_financier", ""), "type_de_clientele_autre", ""), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_formDataToBeWatched, "date_reception_demande_client", ""), "sni_details", null), "status_note_sni", null), "compte_courant", ""), "date_ouverture", ""), "adresse", ""), "date_revue", ""), "date_prochaine_revue", ""), "mouvements_confies", ""), "principal_dirigeant", ""), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_formDataToBeWatched, "mouvements_confies_date", ""), "principal_actionnaire", ''), "commissaire_comptes", ''), "date", ''), "statut_du_dossier", ""), "indice", ""))), "listingNote", false), "maxdate", ""), "dismissFormData", [5, 6]), "fetch_score", false), "cred_pub_tb_00", (_this$meta_data = this.meta_data) === null || _this$meta_data === void 0 || (_this$meta_data = _this$meta_data.dossier_credit) === null || _this$meta_data === void 0 ? void 0 : _this$meta_data.cred_pub_tb_00);
  },
  methods: {
    loadNotesFromSni: function loadNotesFromSni() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _this4$cred_pub_tb_;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              // For real use case
              _this4.onClasseRisqueChange((_this4$cred_pub_tb_ = _this4.cred_pub_tb_00) === null || _this4$cred_pub_tb_ === void 0 ? void 0 : _this4$cred_pub_tb_.compte_contribuable);

              // For the test purpose
              // this.onClasseRisqueChange("M011100034744H")
            case 1:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    openKetri: function openKetri() {
      EventBus.$emit('open-ketri', ['/images/capture_afg/exemples/contretude/identification_client.png']);
    },
    updateClasseRisque: function updateClasseRisque() {
      var _this$formDataToBeWat, _this$formDataToBeWat2, _this$formDataToBeWat3, _this$formDataToBeWat4, _this$formDataToBeWat5, _this$formDataToBeWat6, _this$formDataToBeWat7, _this$formDataToBeWat8, _this$formDataToBeWat9;
      // alert(0)

      this.formDataToBeWatched.has_default_note = this.shouldHaveDefaultNote;
      var graduations = {
        excellent: ["A3"],
        very_good: ["A2", "A2+", "A2-"],
        good: ["A", "A1+", "A1-"],
        acceptable: ["B", "B+"],
        sensible: ["B-"],
        weak: ["C", 'C+', "C-"],
        not_acceptable: ["D", 'D+', "D-"],
        not_considered: ["E"]
      };
      if (graduations !== null && graduations !== void 0 && graduations.excellent.includes((_this$formDataToBeWat = this.formDataToBeWatched) === null || _this$formDataToBeWat === void 0 ? void 0 : _this$formDataToBeWat.note_edane)) {
        this.formDataToBeWatched.classe_risque = 'EXCELLENT';
        this.classe_riques_bg_color = {
          "background-color": '#974EC3',
          'color': "#ffffff"
        };
      } else if (graduations !== null && graduations !== void 0 && graduations.very_good.includes((_this$formDataToBeWat2 = this.formDataToBeWatched) === null || _this$formDataToBeWat2 === void 0 ? void 0 : _this$formDataToBeWat2.note_edane)) {
        // alert(1)
        this.formDataToBeWatched.classe_risque = 'TRES BON';
        this.classe_riques_bg_color = {
          "background-color": '#78C1F3',
          'color': "#ffffff"
        };
      } else if (graduations !== null && graduations !== void 0 && graduations.good.includes((_this$formDataToBeWat3 = this.formDataToBeWatched) === null || _this$formDataToBeWat3 === void 0 ? void 0 : _this$formDataToBeWat3.note_edane)) {
        this.formDataToBeWatched.classe_risque = 'BON';
        this.classe_riques_bg_color = {
          "background-color": '#1D5D9B',
          'color': "#ffffff"
        };
      } else if (graduations !== null && graduations !== void 0 && graduations.acceptable.includes((_this$formDataToBeWat4 = this.formDataToBeWatched) === null || _this$formDataToBeWat4 === void 0 ? void 0 : _this$formDataToBeWat4.note_edane)) {
        this.formDataToBeWatched.classe_risque = 'ACCEPTABLE';
        this.classe_riques_bg_color = {
          "background-color": '#8EAC50',
          'color': "#ffffff"
        };
      } else if (graduations !== null && graduations !== void 0 && graduations.sensible.includes((_this$formDataToBeWat5 = this.formDataToBeWatched) === null || _this$formDataToBeWat5 === void 0 ? void 0 : _this$formDataToBeWat5.note_edane)) {
        this.formDataToBeWatched.classe_risque = 'SENSIBLE';
        this.classe_riques_bg_color = {
          "background-color": '#FFC95F',
          'color': "#ffffff"
        };
      } else if (graduations !== null && graduations !== void 0 && graduations.weak.includes((_this$formDataToBeWat6 = this.formDataToBeWatched) === null || _this$formDataToBeWat6 === void 0 ? void 0 : _this$formDataToBeWat6.note_edane)) {
        this.formDataToBeWatched.classe_risque = 'FRAGILE';
        this.classe_riques_bg_color = {
          "background-color": '#F8DE22',
          'color': "#ffffff"
        };
      } else if (graduations !== null && graduations !== void 0 && graduations.not_acceptable.includes((_this$formDataToBeWat7 = this.formDataToBeWatched) === null || _this$formDataToBeWat7 === void 0 ? void 0 : _this$formDataToBeWat7.note_edane)) {} else if (graduations !== null && graduations !== void 0 && graduations.not_considered.includes((_this$formDataToBeWat8 = this.formDataToBeWatched) === null || _this$formDataToBeWat8 === void 0 ? void 0 : _this$formDataToBeWat8.note_edane)) {
        this.formDataToBeWatched.classe_risque = 'SANS INTERET';
        this.classe_riques_bg_color = {
          "background-color": '#445069',
          'color': "#ffffff"
        };
      } else if (!((_this$formDataToBeWat9 = this.formDataToBeWatched) !== null && _this$formDataToBeWat9 !== void 0 && _this$formDataToBeWat9.note_edane)) {
        this.formDataToBeWatched.classe_risque = '';
      }
    },
    eventToAnaFin: function eventToAnaFin() {
      EventBus.$emit("send-to-ana_fin", {
        annee_referentielle: this.formDataToBeWatched.annee_referentielle,
        compte_contribuable: this.formDataToBeWatched.compte_contribuable
      });
    },
    addMore: function addMore(listName) {
      this[listName].push({
        name: '',
        checkbox1: false,
        checkbox2: false,
        commentaire: ''
      });
    },
    checkboxValSegEnt: function checkboxValSegEnt(segment_entreprise, id) {
      var _this5 = this;
      this.formDataToBeWatched['segment_entreprise'] = segment_entreprise;
      for (var i = 0; i < this.segment_entreprise_list.length; i++) {
        if (i != id - 1) {
          this.segment_entreprise_list[i]['disabled'] = !this.segment_entreprise_list[i]['disabled'];
        }
      }
      _services_credit_service__WEBPACK_IMPORTED_MODULE_4__["default"].typeOfChefDCEI(segment_entreprise, this.meta_data.cred_pub_key).then(function (res) {
        var ObjKey = res.data[0];
        var ObjVal = res.data[1];
        _this5.formDataToBeWatched[ObjKey] = ObjVal;
        if (!['', null, undefined].includes(res === null || res === void 0 ? void 0 : res.data[2])) {
          var _res$data$2$, _res$data$2$2;
          var ObjKey2 = (_res$data$2$ = res === null || res === void 0 ? void 0 : res.data[2][0]) !== null && _res$data$2$ !== void 0 ? _res$data$2$ : null;
          var ObjVal2 = (_res$data$2$2 = res === null || res === void 0 ? void 0 : res.data[2][1]) !== null && _res$data$2$2 !== void 0 ? _res$data$2$2 : null;
          if (!['', null, undefined].includes(ObjKey2)) {
            _this5.formDataToBeWatched[ObjKey2] = ObjVal2;
          }
        }
      })["catch"](function (err) {
        console.log(err);
      });
    },
    crdLd: function crdLd(matricule_client) {
      return new Promise(function (resolve, reject) {
        if (matricule_client != "") {
          if (matricule_client.length > 6) {
            // Credit.encours(matricule_client)
            //     .then(res => {
            //         this.encoursData(res);
            //         resolve()
            //     }).catch(err => { console.log(err) })
          }
        }
      });
    },
    sendEventClientele: function sendEventClientele() {
      EventBus.$emit("type_de_clientele_change", this.formDataToBeWatched);
      // EventBus.$emit("type_de_clientele_change",this.formDataToBeWatched.type_de_clientele)
    },
    selectTypeClientele: function selectTypeClientele(typeDeClientele) {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var _this6$authcheckUsr;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (!(_this6.authcheckUsr == null)) {
                _context4.next = 5;
                break;
              }
              _context4.next = 3;
              return _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["default"].loadUserData().then(function (res) {
                _this6.authcheck = true;
                _this6.authcheckUsr = res.data;
                _this6.authcheckStatus = res.status;
                if (_this6.authcheckUsr.categorie_client.toUpperCase() === "RETAIL") typeDeClientele = "Particuliers";
              })["catch"](function (err) {
                _this6.loadWithError(err);
              });
            case 3:
              _context4.next = 6;
              break;
            case 5:
              if (_this6.authcheckUsr.categorie_client.toUpperCase() === "RETAIL") typeDeClientele = "Particuliers";
            case 6:
              if (_this6.formDataToBeWatched.type_de_clientele != '') {
                // console.log("type_de_clientele 1 ",typeDeClientele)
                _this6.sendEventClientele();
              }

              // let tbVal = null
              // let credVal = this.determineCredPubTablesFromDosCred(this.meta_data.dossier_credit)
              _services_credit_service__WEBPACK_IMPORTED_MODULE_4__["default"].typeOfDispatcher(typeDeClientele, _this6.meta_data.cred_pub_key).then(function (res) {
                _this6.formDataToBeWatched.disp_risq_filiale = res.data;
              })["catch"](function (err) {
                console.log(err);
              });
              // if(credVal[0]){
              //     tbVal = credVal[2]

              // }

              if (((_this6$authcheckUsr = _this6.authcheckUsr) === null || _this6$authcheckUsr === void 0 ? void 0 : _this6$authcheckUsr.categorie_client) == "Retail") {
                _this6.formDataToBeWatched.segment_entreprise = "Clientèle des Particuliers et des Professionnels";
                _services_credit_service__WEBPACK_IMPORTED_MODULE_4__["default"].typeOfChefDCEI(_this6.formDataToBeWatched.segment_entreprise, _this6.meta_data.cred_pub_key).then(function (res) {
                  var ObjKey = res.data[0];
                  var ObjVal = res.data[1];
                  _this6.formDataToBeWatched[ObjKey] = ObjVal;
                  if (!['', null, undefined].includes(res === null || res === void 0 ? void 0 : res.data[2])) {
                    var _res$data$2$3, _res$data$2$4;
                    var ObjKey2 = (_res$data$2$3 = res === null || res === void 0 ? void 0 : res.data[2][0]) !== null && _res$data$2$3 !== void 0 ? _res$data$2$3 : null;
                    var ObjVal2 = (_res$data$2$4 = res === null || res === void 0 ? void 0 : res.data[2][1]) !== null && _res$data$2$4 !== void 0 ? _res$data$2$4 : null;
                    if (!['', null, undefined].includes(ObjKey2)) {
                      _this6.formDataToBeWatched[ObjKey2] = ObjVal2;
                    }
                  }
                })["catch"](function (err) {
                  console.log(err);
                });
              }
            case 9:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    // selectTypeClientele(typeDeClientele) {
    //     Credit.typeOfDispatcher(typeDeClientele, this.meta_data.cred_pub_key);
    // },
    onClientSlct: function onClientSlct(event) {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var raw_searchable;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              raw_searchable = _services_credit_service__WEBPACK_IMPORTED_MODULE_4__["default"].search(event, _this7.credits, 'libelle');
              if (_this7.formDataToBeWatched.duree_credit == "") {
                _this7.formDataToBeWatched.duree_credit = raw_searchable.duree_min;
              }
              _this7.dpcredit1 = true;

              // this.loadSlctMatCliEnc();
              _context5.next = 5;
              return _this7.crdLd(_this7.formDataToBeWatched.matricule_client);
            case 5:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }))();
    },
    tableClosedOrOpened: function tableClosedOrOpened() {
      this.seen = this.fetchClosedTables(this.tb_name + this.meta_data['cred_pub_key']);
    },
    openNotesModal: function openNotesModal() {
      var listing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.listingNote = listing;
      this.$modal.show(this.tb_name);
    },
    // AJOUTER
    launchAutoSaver: function launchAutoSaver() {
      var _this8 = this;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["default"].loadUserData().then(function (res) {
        _this8.send2Backend(res, 0, 0);
      })["catch"](function (err) {
        _this8.loadWithError(err);
      });
    },
    formDataVars: function formDataVars(event) {
      this.formDataToBeWatched[event[0]] = event[1];
      this.handleInput();
    },
    formatDateForInput: function formatDateForInput(data) {
      var day = data.getDate() <= 9 ? "0" + data.getDate() : data.getDate();
      var monthNumber = data.getMonth() + 1;
      var month = monthNumber <= 9 ? "0" + monthNumber : monthNumber;
      return data.getFullYear() + "-" + month + "-" + day;
    },
    loadRetrieved: function loadRetrieved() {
      var _this9 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var _this9$meta_data$doss;
        var lentb, createdKey, createdKeyArr, nowdate, format_date, _this9$meta_data$doss2, _this9$meta_data$doss3, cred_pub_tb_00, clientCore, _clientCore$name, _clientCore$customer_;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              lentb = _this9.meta_data['dossier_credit']['tbs_in_use'];
              createdKey = _this9.tb_name;
              createdKeyArr = createdKey.split("tb");
              createdKey = "cred_pub_tb_" + createdKeyArr[1];
              _this9.gl_key = createdKey;

              // Close table by default
              _this9.defaultRetract(false, (_this9$meta_data$doss = _this9.meta_data["dossier_credit"]) === null || _this9$meta_data$doss === void 0 ? void 0 : _this9$meta_data$doss.applied_templ_id);
              nowdate = new Date();
              format_date = new Date(_this9.meta_data['dossier_credit'].created_at);
              _this9.formDataToBeWatched.ddemande = _this9.formatDateForInput(format_date);
              // format_date = this.formatDateForInput(format_date)
              _this9.maxdate = _this9.formatDateForInput(nowdate);

              // // Close table by default
              // this.defaultRetract(false, this.meta_data["dossier_credit"]?.applied_templ_id)

              if (_this9.meta_data['dossier_credit'][createdKey] == undefined) {
                cred_pub_tb_00 = (_this9$meta_data$doss2 = _this9.meta_data['dossier_credit']) === null || _this9$meta_data$doss2 === void 0 ? void 0 : _this9$meta_data$doss2.cred_pub_tb_00;
                clientCore = (_this9$meta_data$doss3 = _this9.meta_data['dossier_credit']) === null || _this9$meta_data$doss3 === void 0 ? void 0 : _this9$meta_data$doss3.client_core_banking;
                if (cred_pub_tb_00) {
                  _this9.formDataToBeWatched.denomination_client = (_clientCore$name = clientCore === null || clientCore === void 0 ? void 0 : clientCore.name) !== null && _clientCore$name !== void 0 ? _clientCore$name : cred_pub_tb_00 === null || cred_pub_tb_00 === void 0 ? void 0 : cred_pub_tb_00.denomination_client;
                  _this9.formDataToBeWatched.indice = (_clientCore$customer_ = clientCore === null || clientCore === void 0 ? void 0 : clientCore.customer_code) !== null && _clientCore$customer_ !== void 0 ? _clientCore$customer_ : cred_pub_tb_00 === null || cred_pub_tb_00 === void 0 ? void 0 : cred_pub_tb_00.matricule_client;
                  _this9.formDataToBeWatched.compte_courant = cred_pub_tb_00 === null || cred_pub_tb_00 === void 0 ? void 0 : cred_pub_tb_00.compte_courant;
                  _this9.formDataToBeWatched.adresse = cred_pub_tb_00 === null || cred_pub_tb_00 === void 0 ? void 0 : cred_pub_tb_00.adresse;
                  _this9.formDataToBeWatched.note_edane = cred_pub_tb_00 === null || cred_pub_tb_00 === void 0 ? void 0 : cred_pub_tb_00.note_edane;
                  _this9.formDataToBeWatched.groupe = cred_pub_tb_00 === null || cred_pub_tb_00 === void 0 ? void 0 : cred_pub_tb_00.groupe;
                  _this9.formDataToBeWatched.classe_risque = cred_pub_tb_00 === null || cred_pub_tb_00 === void 0 ? void 0 : cred_pub_tb_00.classe_risque;
                  _this9.formDataToBeWatched.forme_juridique = cred_pub_tb_00 === null || cred_pub_tb_00 === void 0 ? void 0 : cred_pub_tb_00.forme_juridique;
                  _this9.formDataToBeWatched.secteur_activite = cred_pub_tb_00 === null || cred_pub_tb_00 === void 0 ? void 0 : cred_pub_tb_00.secteur_activite;
                  _this9.formDataToBeWatched.groupe_activite = cred_pub_tb_00 === null || cred_pub_tb_00 === void 0 ? void 0 : cred_pub_tb_00.groupe_activite;
                  _this9.formDataToBeWatched.capital = cred_pub_tb_00 === null || cred_pub_tb_00 === void 0 ? void 0 : cred_pub_tb_00.capital;
                  _this9.formDataToBeWatched.date_creation = cred_pub_tb_00 === null || cred_pub_tb_00 === void 0 ? void 0 : cred_pub_tb_00.date_creation;
                  _this9.formDataToBeWatched.date_entre_relation = cred_pub_tb_00 === null || cred_pub_tb_00 === void 0 ? void 0 : cred_pub_tb_00.date_entre_relation;
                  _this9.formDataToBeWatched.principal_dirigeant = cred_pub_tb_00 === null || cred_pub_tb_00 === void 0 ? void 0 : cred_pub_tb_00.principal_dirigeant;
                  _this9.formDataToBeWatched.principal_actionnaire = cred_pub_tb_00 === null || cred_pub_tb_00 === void 0 ? void 0 : cred_pub_tb_00.principal_actionnaire;
                  _this9.formDataToBeWatched.commissaire_comptes = cred_pub_tb_00 === null || cred_pub_tb_00 === void 0 ? void 0 : cred_pub_tb_00.nom_commissaire_aux_comptes;
                  _this9.formDataToBeWatched.filiale = cred_pub_tb_00 === null || cred_pub_tb_00 === void 0 ? void 0 : cred_pub_tb_00.filiale;
                  _this9.formDataToBeWatched.date = _this9.getTodayDateFormatted();
                  _this9.formDataToBeWatched.statut_du_dossier = cred_pub_tb_00 === null || cred_pub_tb_00 === void 0 ? void 0 : cred_pub_tb_00.type_demande;
                  _this9.formDataToBeWatched.nom_cabinet_comptable = cred_pub_tb_00 === null || cred_pub_tb_00 === void 0 ? void 0 : cred_pub_tb_00.nom_cabinet_comptable;
                }
              }
              if (lentb.length > 0) {
                if (_this9.meta_data['dossier_credit'][createdKey] != undefined) {
                  _this9.formDataToBeWatched = _this9.meta_data['dossier_credit'][createdKey];
                }
                _this9.formDataToBeWatched.is_first_time = false;
              }
            case 12:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }))();
    },
    setSegmentEntreprise: function setSegmentEntreprise(segment_entreprise) {
      for (var i = 0; i < this.segment_entreprise_list.length; i++) {
        if (this.segment_entreprise_list[i]['name'] === segment_entreprise) {
          this.segment_entreprise_list[i]['checked'] = true;
          this.checkboxValSegEnt(segment_entreprise, this.segment_entreprise_list[i]['id']);
        }
      }
    },
    send2Backend: function send2Backend(res, newVal, oldVal) {
      this.authcheck = true;
      this.authcheckUsr = res.data;
      this.authcheckStatus = res.status;
      if (this.authcheckStatus === 401) {
        //            // window.location.href = "/login"
      }
      if (this.authcheck === true) {
        if (['', null].includes(this.formDataToBeWatched.global_env_entity)) {
          this.$console.log('global_env_entity', this.formDataToBeWatched.global_env_entity);
          this.formDataToBeWatched.global_env_entity = _services_ebapis_service__WEBPACK_IMPORTED_MODULE_2__["default"].loadableEntity()[0].toUpperCase();
          this.$console.log('global_env_entity', this.formDataToBeWatched.global_env_entity);
        }
        this.$emit('autosaving');
        this.$axios.post(this.ebapisHost + 'creditbuilder/api/v1/autosaving/', {
          user: this.authcheckUsr,
          meta_parseable: this.meta_parseable,
          filledData: this.formDataToBeWatched
        }).then(function (response) {
          // this.$Progress.finish();

          this.$emit('autosaving');

          // console.log(response)

          var tbFetcheData = response.data;
          if (tbFetcheData['is_success'] === true) {
            this.$emit('load-shell');
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
    // add defaultRetract
    defaultRetract: function defaultRetract(rc, ra) {
      if (ra != null) {
        this.seen = rc;
        var a = {
          "tb_name": this.tb_name + this.meta_data['cred_pub_key'],
          "status": this.seen
        };
        EventBus.$emit("savedclosed-table", a);
      }
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
    cafData: function cafData(res) {
      this.cafInfo = res.data;
      if (this.formDataToBeWatched.telephone_principal_dirg == undefined || this.formDataToBeWatched.telephone_principal_dirg.length === 0) {
        this.formDataToBeWatched.telephone_principal_dirg = this.cafInfo.phonecode;
      }
      // this.formDataToBeWatched.filiale = this.cafInfo.codecaf.replace(/[0-9]/g, "");
      // if (this.entityType.toUpperCase() == 'BANK') {
      //     this.formDataToBeWatched.filiale = "AFG CIV"
      //     //   this.formDataToBeWatched.pays = this.list_entites[this.formDataToBeWatched.filiale]

      // }
      // else {
      //     this.formDataToBeWatched.filiale = "CFN CIV"
      // }
      // console.log("replaceAll",this.cafInfo.agence)
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
    getTodayDateFormatted: function getTodayDateFormatted() {
      var today = new Date();
      var year = today.getFullYear();

      // On ajoute un zéro devant les mois et jours < 10
      var month = String(today.getMonth() + 1).padStart(2, '0'); // Janvier = 0
      var day = String(today.getDate()).padStart(2, '0');
      return "".concat(year, "-").concat(month, "-").concat(day);
    },
    onSlctMatCli: function onSlctMatCli(obj) {
      var _this0 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        var response, a, b, c;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              if (!(obj != null)) {
                _context7.next = 19;
                break;
              }
              _context7.next = 3;
              return _this0.getInfoClient(obj.matcli);
            case 3:
              response = _context7.sent;
              _this0.formDataToBeWatched.matricule_client = obj.matcli;
              _this0.formDataToBeWatched.denomination_client = obj.nomcli;
              _this0.formDataToBeWatched.nom_emprunteur = obj.nomcli;
              _this0.formDataToBeWatched.adresse_professionnel_principal = obj.adrescli;
              _this0.formDataToBeWatched.geo_lat = obj.site_lat;
              _this0.formDataToBeWatched.geo_lon = obj.site_long;
              if (_this0.formDataToBeWatched.adresse_professionnel_principal == "" || _this0.formDataToBeWatched.adresse_professionnel_principal == null) {
                _this0.formDataToBeWatched.adresse_professionnel_principal == response.adrescli;
              }
              if (_this0.formDataToBeWatched.geo_lat == "0.0000000" || _this0.formDataToBeWatched.geo_lat == null) {
                _this0.formDataToBeWatched.geo_lat = response.site_lat;
              }
              if (_this0.formDataToBeWatched.geo_lon == "0.0000000" || _this0.formDataToBeWatched.geo_lon == null) {
                _this0.formDataToBeWatched.geo_lon = response.site_long;
              }
              a = obj.matcli;
              b = _this0.formDataToBeWatched.montant_sollicite;
              c = _this0.formDataToBeWatched.duree_credit;
              _context7.next = 18;
              return _this0.crdLd(obj.matcli);
            case 18:
              _this0.handleInput();

              /*EventBus.$emit("event-T0", {
                  formdata: this.formDataToBeWatched
              });*/
            case 19:
            case "end":
              return _context7.stop();
          }
        }, _callee7);
      }))();
    },
    handleInput: function handleInput(evt) {
      EventBus.$emit("event-T0", {
        formdata: this.formDataToBeWatched
      });
    },
    onClasseRisqueChange: function onClasseRisqueChange() {
      var _arguments = arguments,
        _this1 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        var _this1$formDataToBeWa;
        var compte_contribuable_from_pb0, response, score_info;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              compte_contribuable_from_pb0 = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : null;
              _this1.formDataToBeWatched.note_edane = "";
              _this1.formDataToBeWatched.classe_risque = "";
              _this1.formDataToBeWatched.capital = "";
              _this1.formDataToBeWatched.coming_from_sni = false;
              _this1.$set(_this1.formDataToBeWatched, 'status_note_sni', null);
              _this1.$set(_this1.formDataToBeWatched, 'sni_details', null);
              if (!(((_this1$formDataToBeWa = _this1.formDataToBeWatched) === null || _this1$formDataToBeWa === void 0 ? void 0 : _this1$formDataToBeWa.has_etat_financier) == "Non")) {
                _context8.next = 9;
                break;
              }
              return _context8.abrupt("return");
            case 9:
              _this1.eventToAnaFin();
              response = null;
              if (!compte_contribuable_from_pb0) {
                _context8.next = 17;
                break;
              }
              _context8.next = 14;
              return _this1.getClasseRisque(compte_contribuable_from_pb0);
            case 14:
              response = _context8.sent;
              _context8.next = 20;
              break;
            case 17:
              _context8.next = 19;
              return _this1.getClasseRisque(_this1.formDataToBeWatched.compte_contribuable);
            case 19:
              response = _context8.sent;
            case 20:
              _this1.fetch_score = false;
              if (response["is_success"] == true) {
                score_info = response["score"][0]; // console.log(response["score"]["NOTE"])9606123E
                _this1.formDataToBeWatched.note_edane = score_info["CRAN"];
                _this1.formDataToBeWatched.classe_risque = score_info["QUALIFICATION"];
                _this1.formDataToBeWatched.capital = score_info["CA"];
                _this1.formDataToBeWatched.coming_from_sni = true;
                _this1.formDataToBeWatched.has_etat_financier = "Oui";
                _this1.$set(_this1.formDataToBeWatched, 'sni_details', score_info);
                _this1.$set(_this1.formDataToBeWatched, 'status_note_sni', score_info === null || score_info === void 0 ? void 0 : score_info['VALIDATION']);
                _this1.updateClasseRisque();
                EventBus.$emit('update-sni-callback');
              }
            case 22:
            case "end":
              return _context8.stop();
          }
        }, _callee8);
      }))();
    },
    getClasseRisque: function getClasseRisque(compte_comtribuable) {
      var _this10 = this;
      // console.log("compte_contribuable==> ",this.formDataToBeWatched.compte_contribuable)
      return new Promise(function (resolve, reject) {
        if (!['', null, undefined].includes(compte_comtribuable)) {
          if (compte_comtribuable.length > 7) {
            _this10.fetch_score = true;
            _this10.$axios.post(_this10.ebapisHost + "creditbuilder/api/v1/load-score/", {
              cc: compte_comtribuable
            }).then(function (res) {
              _this10.fetch_score = false;
              resolve(res.data);
            })["catch"](function (err) {
              console.log(err);
            });
          }
        }
      });
    },
    updateValueSelected: function updateValueSelected() {
      var _this11 = this;
      if (this.formDataToBeWatched.secteur_activite != "") {
        var found = this.secteurs_activites.filter(function (item) {
          return item.intitule == _this11.formDataToBeWatched.secteur_activite;
        });
        if (found.length > 0) {
          this.selected_secteur_activite = found[0];
        }
      }
      if (this.formDataToBeWatched.groupe_activite != "") {
        var _found = this.groupes_activites.filter(function (item) {
          return item.intitule == _this11.formDataToBeWatched.groupe_activite;
        });
        if (_found.length > 0) {
          this.selected_groupe_secteur = _found[0];
        }
      }
    },
    selectedOptionSecteurActivite: function selectedOptionSecteurActivite(value, obj) {
      this.selected_secteur_activite = obj;
      var found = this.groupes_activites.filter(function (item) {
        return item.id == obj.groupe_activite_id;
      });
      if (found.length > 0) {
        this.selected_groupe_secteur = found[0];
        this.formDataToBeWatched.groupe_activite = found[0].intitule;
      }
      this.handleInput();
    },
    loadNoteVerification: function loadNoteVerification() {
      var _this12 = this;
      EventBus.$emit("open-extra-file-explorer");
      setTimeout(function () {
        EventBus.$emit("data-extra-file-explorer", {
          name: "Pièce justificative {(*)}piece_justificative_note_" + _this12.$route.params.templateId
        });
      }, 500);
    },
    selectedOptionGroupeSecteurActivite: function selectedOptionGroupeSecteurActivite(value, obj) {
      this.selected_groupe_secteur = obj;
      this.selected_secteur_activite = "";
      this.formDataToBeWatched.secteur_activite = "";
      this.handleInput();
    },
    handleGroupe: function handleGroupe(event) {
      var _event$target;
      var val = event === null || event === void 0 || (_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.value;
      if (!['OUI'].includes(val === null || val === void 0 ? void 0 : val.toUpperCase())) {
        this.formDataToBeWatched.nom_groupe = "";
      }
    }
  },
  watch: {
    formDataToBeWatched: {
      handler: function handler(newVal, oldVal) {
        EventBus.$emit("send-f0-to-f13", {
          annee_referentielle: newVal.annee_referentielle,
          compte_contribuable: newVal.compte_contribuable,
          coming_from_sni: newVal.coming_from_sni,
          status_note_sni: newVal.status_note_sni,
          sni_details: newVal.sni_details
        });
        this.autosaving(newVal, oldVal);
      },
      deep: true,
      immediate: true
    },
    'formDataToBeWatched.bilan_certifie': function formDataToBeWatchedBilan_certifie() {
      var _this$formDataToBeWat0;
      if (this.formDataToBeWatched.bilan_certifie == 'Non' && ((_this$formDataToBeWat0 = this.formDataToBeWatched.nom_cabinet_comptable) === null || _this$formDataToBeWat0 === void 0 ? void 0 : _this$formDataToBeWat0.length) > 0) {
        // console.log("nom_cabinet_comptable",this.formDataToBeWatched.nom_cabinet_comptable)
        this.formDataToBeWatched.nom_cabinet_comptable = "";
      }
    },
    shouldHaveDefaultNote: function shouldHaveDefaultNote(val) {
      // if (vars == 'has_etat_financier') {
      this.formDataToBeWatched.has_default_note = val;
      if (val) {
        this.formDataToBeWatched.note_edane = "B-";
        this.formDataToBeWatched.classe_risque = "";
        this.formDataToBeWatched.capital = "";
        this.formDataToBeWatched.coming_from_sni = false;
        this.$set(this.formDataToBeWatched, 'status_note_sni', null);
        this.$set(this.formDataToBeWatched, 'sni_details', null);
      } else {
        var _this$formDataToBeWat1;
        if (['', null, undefined, false].includes((_this$formDataToBeWat1 = this.formDataToBeWatched) === null || _this$formDataToBeWat1 === void 0 ? void 0 : _this$formDataToBeWat1.coming_from_sni)) {
          this.formDataToBeWatched.note_edane = "";
          this.formDataToBeWatched.classe_risque = "";
          this.formDataToBeWatched.capital = "";
          this.formDataToBeWatched.coming_from_sni = false;
          this.$set(this.formDataToBeWatched, 'status_note_sni', null);
          this.$set(this.formDataToBeWatched, 'sni_details', null);
        }
        if (!['', null, undefined].includes(this.formDataToBeWatched.compte_contribuable) && !val) {
          this.onClasseRisqueChange();
        }
      }
      this.updateClasseRisque();
      // }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude_corporate/NS-AC0.vue?vue&type=template&id=146b331a&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude_corporate/NS-AC0.vue?vue&type=template&id=146b331a&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$formDataToBeWatch, _vm$formDataToBeWatch2, _vm$formDataToBeWatch3, _vm$formDataToBeWatch4, _vm$formDataToBeWatch5, _vm$formDataToBeWatch6, _vm$formDataToBeWatch7, _vm$formDataToBeWatch8, _vm$formDataToBeWatch9;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    on: {
      contextmenu: function contextmenu($event) {
        return _vm.$refs.menu.open($event, _vm.tb_name);
      }
    }
  }, [_c("div", {
    staticClass: "row bg-light position-relative",
    staticStyle: {
      width: "100%",
      height: "100%"
    }
  }, [_c("ContextMenu", {
    ref: "menu",
    attrs: {
      cred_pub_key: _vm.meta_parseable.cred_pub_key,
      id: _vm.tb_name,
      contextList: _vm.contextList
    }
  }), _vm._v(" "), _vm.seen === true ? _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h6", {
    ref: "topdiv",
    staticClass: "head",
    attrs: {
      id: "f0-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Identification du client\n                        ")]), _vm._v(" "), _c("div", {
    staticClass: "col-auto"
  }, [((_vm$formDataToBeWatch = _vm.formDataToBeWatched.notes) === null || _vm$formDataToBeWatch === void 0 ? void 0 : _vm$formDataToBeWatch.length) > 0 ? _c("div", {
    staticStyle: {
      display: "inline-block",
      position: "relative"
    }
  }, [_c("span", {
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.openNotesModal(true);
      }
    }
  }, [_c("i", {
    staticClass: "icofont icofont-comment text-white px-2",
    staticStyle: {
      "font-size": "12px"
    },
    attrs: {
      role: "button"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "badge-sm"
  }, [_c("span", [_vm._v(" " + _vm._s(_vm.formDataToBeWatched.notes.length) + " ")])])])]) : _vm._e(), _vm._v(" "), _c("airplay-icon", {
    staticClass: "custom-class mt-1",
    staticStyle: {
      cursor: "pointer",
      margin: "0 5px"
    },
    attrs: {
      size: "0.7x",
      title: "exemple"
    },
    on: {
      click: _vm.openKetri
    }
  }), _vm._v(" "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    },
    on: {
      click: function click($event) {
        return _vm.retract();
      }
    }
  })], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "row p-0"
  }, [_c("div", {
    staticClass: "col-12 p-0 position-relative"
  }, [_c("div", {
    staticClass: "card-body mb-5 table-responsive"
  }, [_vm.seen1 ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen1 = !_vm.seen1;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "preambule"
    }
  }, [_vm._v("\n                                    Préambule\n                                    "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "remove-card-padding"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-3 pl-1"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "filiale"
    }
  }, [_vm._v("\n                                                Filiale\n                                            ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.filiale,
      expression: "formDataToBeWatched.filiale"
    }],
    staticClass: "form-control",
    attrs: {
      readonly: "",
      disabled: "",
      type: "text",
      id: "filiale"
    },
    domProps: {
      value: _vm.formDataToBeWatched.filiale
    },
    on: {
      change: _vm.handleInput,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "filiale", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-5 pl-1"
  }, [_vm._m(0), _vm._v(" "), _c("date-input", {
    attrs: {
      value: _vm.formDataToBeWatched.date,
      id: "date_creation"
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-4 pl-1"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "statut_du_dossier"
    }
  }, [_vm._v("\n                                                Statut du dossier\n                                            ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.statut_du_dossier,
      expression: "formDataToBeWatched.statut_du_dossier"
    }],
    staticClass: "form-control",
    attrs: {
      readonly: "",
      disabled: "",
      required: "",
      type: "text",
      id: "statut_du_dossier"
    },
    domProps: {
      value: _vm.formDataToBeWatched.statut_du_dossier
    },
    on: {
      change: _vm.handleInput,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "statut_du_dossier", $event.target.value);
      }
    }
  })])])])]) : _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen1 = !_vm.seen1;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "preambule"
    }
  }, [_vm._v("\n                                    Préambule\n                                    "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])]), _vm._v(" "), _vm.seen2 ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen2 = !_vm.seen2;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "preambule"
    }
  }, [_vm._v("\n                                    Identification client\n                                    "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "remove-card-padding"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "indice"
    }
  }, [_vm._v("\n                                                Indice\n                                            ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.indice,
      expression: "formDataToBeWatched.indice"
    }],
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      id: "denomination_client",
      readonly: ""
    },
    domProps: {
      value: _vm.formDataToBeWatched.indice
    },
    on: {
      change: _vm.handleInput,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "indice", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "denomination_client"
    }
  }, [_vm._v("\n                                                Client\n                                            ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.denomination_client,
      expression: "formDataToBeWatched.denomination_client"
    }],
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      id: "denomination_client",
      readonly: ""
    },
    domProps: {
      value: _vm.formDataToBeWatched.denomination_client
    },
    on: {
      change: _vm.handleInput,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "denomination_client", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(1), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.compte_courant,
      expression: "formDataToBeWatched.compte_courant"
    }],
    staticClass: "form-control",
    staticStyle: {
      "background-color": "#00ffff21"
    },
    attrs: {
      id: "compte_courant"
    },
    domProps: {
      value: _vm.formDataToBeWatched.compte_courant
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "compte_courant", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(2), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.adresse,
      expression: "formDataToBeWatched.adresse"
    }],
    staticClass: "form-control",
    staticStyle: {
      "background-color": "#00ffff21"
    },
    attrs: {
      id: "adresse"
    },
    domProps: {
      value: _vm.formDataToBeWatched.adresse
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "adresse", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("div", {
    staticClass: "d-flex align-items-end gap-1"
  }, [_c("div", {
    staticClass: "col"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "note_edane"
    }
  }, [_vm._v("Notation/Cotation du risque"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")]), _vm._v(" "), _c("span", {
    staticClass: "note-from-sni",
    on: {
      click: _vm.loadNotesFromSni
    }
  }, [_vm._v("[Charger depuis SNI]")])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex position-relative align-items-center"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.note_edane,
      expression: "formDataToBeWatched.note_edane"
    }],
    staticClass: "form-select",
    style: (_vm$formDataToBeWatch2 = _vm.formDataToBeWatched) !== null && _vm$formDataToBeWatch2 !== void 0 && _vm$formDataToBeWatch2.coming_from_sni ? "" : "background: #00ffff21; color: #000;",
    attrs: {
      required: "",
      type: "text",
      disabled: (_vm$formDataToBeWatch3 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch3 === void 0 ? void 0 : _vm$formDataToBeWatch3.coming_from_sni,
      id: "note_edane"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "note_edane", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        return _vm.updateClasseRisque();
      }]
    }
  }, _vm._l(_vm.notes_edane, function (n) {
    return _c("option", {
      key: n,
      domProps: {
        value: n
      }
    }, [_vm._v(" " + _vm._s(n) + " "), _vm.shouldHaveDefaultNote ? _c("span", [_vm._v(" ( Par défaut )")]) : _vm._e()]);
  }), 0), _vm._v(" "), _vm.fetch_score ? _c("span", {
    staticClass: "spinner-border spinner-border spinner-custom-input"
  }) : _vm._e()])]), _vm._v(" "), _vm.shouldHaveDefaultNote ? _c("div", {
    staticClass: "col-auto"
  }, [_c("button", {
    staticClass: "btn",
    "class": (_vm$formDataToBeWatch4 = _vm.formDataToBeWatched) !== null && _vm$formDataToBeWatch4 !== void 0 && (_vm$formDataToBeWatch4 = _vm$formDataToBeWatch4.note_verification) !== null && _vm$formDataToBeWatch4 !== void 0 && _vm$formDataToBeWatch4.files_count ? "btn-success" : "btn-secondary",
    attrs: {
      title: "Cliquer ici pour uploader ou voir le(s) fichier(s)"
    },
    on: {
      click: _vm.loadNoteVerification
    }
  }, [_c("i", {
    staticClass: "icofont-attachment"
  })])]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(3), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.groupe,
      expression: "formDataToBeWatched.groupe"
    }],
    staticClass: "form-select single-select",
    staticStyle: {
      "background-color": "#00ffff21"
    },
    attrs: {
      id: "nouvelle_relation"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "groupe", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        return _vm.handleGroupe($event);
      }]
    }
  }, [_c("option", {
    attrs: {
      selected: "",
      disabled: "",
      hidden: ""
    }
  }, [_vm._v("---")]), _vm._v(" "), _c("option", {
    attrs: {
      value: ""
    }
  }), _vm._v(" "), _c("option", {
    attrs: {
      value: "OUI"
    }
  }, [_vm._v("Oui")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NON"
    }
  }, [_vm._v("Non")])])]), _vm._v(" "), ["OUI"].includes(_vm.formDataToBeWatched.groupe) ? _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "secteur_activite"
    }
  }, [_vm._v("\n                                                Nom du groupe\n                                            ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.nom_groupe,
      expression: "formDataToBeWatched.nom_groupe"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.formDataToBeWatched.nom_groupe
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "nom_groupe", $event.target.value);
      }
    }
  })]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(4), _vm._v(" "), _c("div", {
    staticClass: "d-flex position-relative align-items-center"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.classe_risque,
      expression: "formDataToBeWatched.classe_risque"
    }],
    staticClass: "form-control",
    style: _vm.classe_riques_bg_color,
    attrs: {
      required: "",
      type: "text",
      id: "classe_risque",
      readonly: ""
    },
    domProps: {
      value: _vm.formDataToBeWatched.classe_risque
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "classe_risque", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.fetch_score ? _c("span", {
    staticClass: "spinner-border spinner-border spinner-custom-input"
  }) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(5), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.commissaire_comptes,
      expression: "formDataToBeWatched.commissaire_comptes"
    }],
    staticClass: "form-control",
    staticStyle: {
      "background-color": "#00ffff21"
    },
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.formDataToBeWatched.commissaire_comptes
    },
    on: {
      change: _vm.handleInput,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "commissaire_comptes", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "forme_juridique"
    }
  }, [_vm._v("\n                                                Forme juridique\n                                            ")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.forme_juridique,
      expression: "formDataToBeWatched.forme_juridique"
    }],
    staticClass: "form-select single-select",
    staticStyle: {
      "background-color": "#00ffff21"
    },
    attrs: {
      id: "forme_juridique"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "forme_juridique", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      selected: "",
      disabled: "",
      hidden: ""
    }
  }, [_vm._v("---")]), _vm._v(" "), _c("option", {
    attrs: {
      value: ""
    }
  }), _vm._v(" "), _c("option", {
    attrs: {
      value: "SARL Unipersonnelle"
    }
  }, [_vm._v("SARL Unipersonnelle")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "SARL Pluripersonnelle"
    }
  }, [_vm._v("SARL Pluripersonnelle")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Entreprise Individuelle"
    }
  }, [_vm._v("Entreprise Individuelle")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Société en nom collectif (SNC)"
    }
  }, [_vm._v("Société en nom collectif\n                                                    (SNC)")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Société Anonyme (SA)"
    }
  }, [_vm._v("Société Anonyme (SA)")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Société en commandité simple (SCS)"
    }
  }, [_vm._v("Société en commandité\n                                                    simple (SCS)")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Groupement d'intérêt Économique (GIE)"
    }
  }, [_vm._v("Groupement d'intérêt\n                                                    Économique (GIE)")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "COOPERATIVE"
    }
  }, [_vm._v("COOPERATIVE")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Association et Mutuelles"
    }
  }, [_vm._v("Association et Mutuelles")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Société par actions simplifiées (SAS)"
    }
  }, [_vm._v("Société par actions simplifiées (SAS)")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(6), _vm._v(" "), _c("div", {
    staticClass: "d-flex position-relative align-items-center"
  }, [_c("Multiselect", {
    staticStyle: {
      height: "42px",
      "border-color": "#34495e",
      color: "#57606f",
      "font-size": "13px",
      "font-weight": "bold",
      "background-color": "#00ffff21"
    },
    attrs: {
      searchable: true,
      trackBy: "intitule",
      label: "intitule",
      "value-prop": "intitule",
      id: "secteur_activite",
      classes: {
        optionPointed: "text-gray-800 bg-gray-100"
      },
      options: _vm.secteurs_activites_,
      "data-bs-original-title": (_vm$formDataToBeWatch5 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch5 === void 0 ? void 0 : _vm$formDataToBeWatch5.secteur_activite,
      title: (_vm$formDataToBeWatch6 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch6 === void 0 ? void 0 : _vm$formDataToBeWatch6.secteur_activite,
      "data-toggle": "tooltip",
      "data-placement": "top"
    },
    on: {
      select: _vm.selectedOptionSecteurActivite
    },
    scopedSlots: _vm._u([{
      key: "option",
      fn: function fn(_ref) {
        var option = _ref.option;
        return [_c("p", {
          staticClass: "multiselect-option"
        }, [_vm._v(_vm._s(option.intitule))])];
      }
    }, {
      key: "singlelabel",
      fn: function fn(_ref2) {
        var value = _ref2.value;
        return [_c("p", {
          staticClass: "multiselect-single-label",
          staticStyle: {
            overflow: "hidden"
          }
        }, [_vm._v(_vm._s(value.intitule))])];
      }
    }], null, false, 1667831191),
    model: {
      value: _vm.formDataToBeWatched.secteur_activite,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "secteur_activite", $$v);
      },
      expression: "formDataToBeWatched.secteur_activite"
    }
  }), _vm._v(" "), _vm.secteurs_activites_ == "" || _vm.secteurs_activites_.length == 0 ? _c("span", {
    staticClass: "spinner-border spinner-border spinner-custom-input",
    staticStyle: {
      "margin-right": "17px"
    }
  }) : _vm._e()], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(7), _vm._v(" "), _c("div", {
    staticClass: "d-flex position-relative align-items-center"
  }, [_c("Multiselect", {
    staticStyle: {
      height: "42px",
      "border-color": "#34495e",
      color: "#57606f",
      "font-size": "13px",
      "font-weight": "bold"
    },
    attrs: {
      searchable: true,
      trackBy: "intitule",
      label: "intitule",
      "value-prop": "intitule",
      id: "groupe_activite",
      classes: {
        optionPointed: "text-gray-800 bg-gray-100"
      },
      options: _vm.groupes_activites_,
      "data-bs-original-title": (_vm$formDataToBeWatch7 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch7 === void 0 ? void 0 : _vm$formDataToBeWatch7.groupe_activite,
      title: (_vm$formDataToBeWatch8 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch8 === void 0 ? void 0 : _vm$formDataToBeWatch8.groupe_activite,
      "data-toggle": "tooltip",
      "data-placement": "top"
    },
    on: {
      select: _vm.selectedOptionGroupeSecteurActivite
    },
    scopedSlots: _vm._u([{
      key: "option",
      fn: function fn(_ref3) {
        var option = _ref3.option;
        return [_c("p", {
          staticClass: "multiselect-option"
        }, [_vm._v(_vm._s(option.intitule))])];
      }
    }, {
      key: "singlelabel",
      fn: function fn(_ref4) {
        var value = _ref4.value;
        return [_c("p", {
          staticClass: "multiselect-single-label",
          staticStyle: {
            overflow: "hidden"
          }
        }, [_vm._v(_vm._s(value.intitule))])];
      }
    }], null, false, 1667831191),
    model: {
      value: _vm.formDataToBeWatched.groupe_activite,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "groupe_activite", $$v);
      },
      expression: "formDataToBeWatched.groupe_activite"
    }
  }), _vm._v(" "), _vm.groupes_activites_ == "" || _vm.groupes_activites_.length == 0 ? _c("span", {
    staticClass: "spinner-border spinner-border spinner-custom-input",
    staticStyle: {
      "margin-right": "17px"
    }
  }) : _vm._e()], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "capital"
    }
  }, [_vm._v("\n                                                Capital social\n                                            ")]), _vm._v(" "), _c("div", {
    staticClass: "d-flex position-relative align-items-center"
  }, [_c("currency-input", {
    staticStyle: {
      background: "#00ffff21",
      color: "#000"
    },
    attrs: {
      value: _vm.formDataToBeWatched.capital,
      id: "capital"
    },
    on: {
      input: _vm.formDataVars
    }
  }), _vm._v(" "), _vm.fetch_score ? _c("span", {
    staticClass: "spinner-border spinner-border spinner-custom-input"
  }) : _vm._e()], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(8), _vm._v(" "), _c("date-input", {
    attrs: {
      value: _vm.formDataToBeWatched.date_creation,
      id: "date_creation",
      background: "background: #00ffff21"
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(9), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.principal_actionnaire,
      expression: "formDataToBeWatched.principal_actionnaire"
    }],
    staticClass: "form-control",
    staticStyle: {
      "background-color": "#00ffff21"
    },
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.formDataToBeWatched.principal_actionnaire
    },
    on: {
      change: _vm.handleInput,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "principal_actionnaire", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(10), _vm._v(" "), _c("date-input", {
    attrs: {
      id: "date_entre_relation",
      value: _vm.formDataToBeWatched.date_entre_relation,
      background: "background: #00ffff21"
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(11), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.principal_dirigeant,
      expression: "formDataToBeWatched.principal_dirigeant"
    }],
    staticClass: "form-control",
    staticStyle: {
      "background-color": "#00ffff21"
    },
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.formDataToBeWatched.principal_dirigeant
    },
    on: {
      change: _vm.handleInput,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "principal_dirigeant", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(12), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.nom_cabinet_comptable,
      expression: "formDataToBeWatched.nom_cabinet_comptable"
    }],
    staticClass: "form-control",
    staticStyle: {
      "background-color": "#00ffff21"
    },
    attrs: {
      id: "cabinet"
    },
    domProps: {
      value: _vm.formDataToBeWatched.nom_cabinet_comptable
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "nom_cabinet_comptable", $event.target.value);
      }
    }
  })])])])]) : _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen2 = !_vm.seen2;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "preambule"
    }
  }, [_vm._v("\n                                    Identification client\n                                    "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])])])]), _vm._v(" "), _c("div", {
    staticClass: "mb-5"
  }), _vm._v(" "), _c("button", {
    staticClass: "btn shadow-md text-white position-absolute",
    staticStyle: {
      cursor: "pointer",
      right: "16px",
      bottom: "10px",
      background: "#2c3e50",
      "max-width": "max-content"
    },
    attrs: {
      type: "button",
      name: "button"
    },
    on: {
      click: function click($event) {
        return _vm.retract();
      }
    }
  }, [_vm._v("\n                    Fermer le tableau\n                ")])])]) : _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h6", {
    staticClass: "head",
    attrs: {
      id: "f0-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Identification du client\n                        ")]), _vm._v(" "), _c("div", {
    staticClass: "col-auto"
  }, [((_vm$formDataToBeWatch9 = _vm.formDataToBeWatched.notes) === null || _vm$formDataToBeWatch9 === void 0 ? void 0 : _vm$formDataToBeWatch9.length) > 0 ? _c("div", {
    staticStyle: {
      display: "inline-block",
      position: "relative"
    }
  }, [_c("span", {
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.openNotesModal(true);
      }
    }
  }, [_c("i", {
    staticClass: "icofont icofont-comment text-white px-2",
    staticStyle: {
      "font-size": "12px"
    },
    attrs: {
      role: "button"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "badge-sm"
  }, [_c("span", [_vm._v(" " + _vm._s(_vm.formDataToBeWatched.notes.length) + " ")])])])]) : _vm._e(), _vm._v(" "), _c("airplay-icon", {
    staticClass: "custom-class mt-1",
    staticStyle: {
      cursor: "pointer",
      margin: "0 5px"
    },
    attrs: {
      size: "0.7x",
      title: "exemple"
    },
    on: {
      click: _vm.openKetri
    }
  }), _vm._v(" "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    },
    on: {
      click: function click($event) {
        return _vm.retract();
      }
    }
  })], 1)])])])])], 1), _vm._v(" "), _c("note-modal", {
    attrs: {
      name: _vm.tb_name,
      listingNote: _vm.listingNote,
      notes: _vm.formDataToBeWatched.notes
    },
    on: {
      close: function close($event) {
        return _vm.$modal.hide(_vm.tb_name);
      },
      addNote: function addNote($event) {
        return _vm.formDataToBeWatched.notes.unshift($event);
      }
    },
    model: {
      value: _vm.formDataToBeWatched.notes,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "notes", $$v);
      },
      expression: "formDataToBeWatched.notes"
    }
  })], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "date_creation"
    }
  }, [_vm._v("Date "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "compte_courant"
    }
  }, [_vm._v("\n                                                Compte courant "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "adresse"
    }
  }, [_vm._v("Adresse/Siege social "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("\n                                                Groupe "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "classe_risque"
    }
  }, [_vm._v("Classification "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "secteur_activite"
    }
  }, [_vm._v("\n                                                Commissaire aux comptes"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "secteur_activite"
    }
  }, [_vm._v("\n                                                Secteur activité"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "groupe_activite"
    }
  }, [_vm._v("\n                                                Groupe d'activité"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "date_creation"
    }
  }, [_vm._v("Date de création "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "secteur_activite"
    }
  }, [_vm._v("\n                                                Principal Actionnaire"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "text-nowrap",
    attrs: {
      "for": "date_entre_relation"
    }
  }, [_vm._v("Date d'entré en relation "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "secteur_activite"
    }
  }, [_vm._v("\n                                                Principal Dirigeant"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "cabinet"
    }
  }, [_vm._v("\n                                                Nom du cabinet comptable "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude_corporate/NS-AC0.vue?vue&type=style&index=0&id=146b331a&lang=css&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude_corporate/NS-AC0.vue?vue&type=style&index=0&id=146b331a&lang=css&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\ninput[data-v-146b331a] {\r\n    /*border: 1px solid red;*/\n}\n*[data-v-146b331a] {\r\n\r\n    font-family: \"Google sans\";\n}\nlabel[data-v-146b331a] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ninput[data-v-146b331a],\r\nselect[data-v-146b331a] {\r\n    height: 35px;\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n.card-width-height[data-v-146b331a] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-146b331a] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-146b331a] {\r\n    background-color: #57606f;\n}\n.relook-header[data-v-146b331a] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 2px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\r\n\r\n\r\n/* Ajouter note */\n.badge-sm[data-v-146b331a] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\ninput[type=checkbox][data-v-146b331a] {\r\n    /* Double-sized Checkboxes */\r\n    /* IE */\r\n    /* FF */\r\n    /* Safari and Chrome */\r\n    /* Opera */\r\n    transform: scale(2);\r\n    padding: 10px;\n}\ninput[type=checkbox].form-check-input[data-v-146b331a] {\r\n    /* IE */\r\n    /* FF */\r\n    /* Safari and Chrome */\r\n    /* Opera */\r\n    transform: scale(1);\r\n    padding: 0px;\n}\r\n\r\n/* Might want to wrap a span around your checkbox text */\n.checkboxtext[data-v-146b331a] {\r\n    /* Checkbox text */\r\n    font-size: 110%;\r\n    display: inline;\n}\n[data-v-146b331a]::-webkit-calendar-picker-indicator {}\n#secteur_activite[data-v-146b331a] {\r\n    background: #00ffff21;\r\n    color: #000;\n}\n.to-uppercase[data-v-146b331a] {\r\n    text-transform: uppercase;\n}\n.dossier-table[data-v-146b331a] {\r\n    width: 100%;\n}\n.dossier-cell[data-v-146b331a]{\r\n    text-align: center; \r\n    vertical-align: middle; \r\n    /* padding-top: 0 !important;\r\n    padding-bottom: 0 !important; */\n}\ntextarea[data-v-146b331a] {\r\n    width: 100%;\n}\n.custom-width[data-v-146b331a] {\r\n    max-width: 100px !important;\n}\n.custom-font-weight[data-v-146b331a] {\r\n    font-weight: bold !important;\n}\n.image1[data-v-146b331a] {\r\n    background: url(\"/images/capture_afg/contre_etude_signaletique.png\")\r\n        no-repeat;\r\n    background-position: center;\r\n    background-size: contain;\r\n\r\n    width: 500px;\r\n    height: 300px;\n}\n.note-from-sni[data-v-146b331a] {\r\n    color: blue;\r\n    cursor: pointer;\n}\r\n\r\n\r\n\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude_corporate/NS-AC0.vue?vue&type=style&index=0&id=146b331a&lang=css&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude_corporate/NS-AC0.vue?vue&type=style&index=0&id=146b331a&lang=css&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NS_AC0_vue_vue_type_style_index_0_id_146b331a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NS-AC0.vue?vue&type=style&index=0&id=146b331a&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude_corporate/NS-AC0.vue?vue&type=style&index=0&id=146b331a&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NS_AC0_vue_vue_type_style_index_0_id_146b331a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NS_AC0_vue_vue_type_style_index_0_id_146b331a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/forms/afg/contre_etude_corporate/NS-AC0.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/forms/afg/contre_etude_corporate/NS-AC0.vue ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NS_AC0_vue_vue_type_template_id_146b331a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NS-AC0.vue?vue&type=template&id=146b331a&scoped=true */ "./resources/js/components/forms/afg/contre_etude_corporate/NS-AC0.vue?vue&type=template&id=146b331a&scoped=true");
/* harmony import */ var _NS_AC0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NS-AC0.vue?vue&type=script&lang=js */ "./resources/js/components/forms/afg/contre_etude_corporate/NS-AC0.vue?vue&type=script&lang=js");
/* harmony import */ var _NS_AC0_vue_vue_type_style_index_0_id_146b331a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NS-AC0.vue?vue&type=style&index=0&id=146b331a&lang=css&scoped=true */ "./resources/js/components/forms/afg/contre_etude_corporate/NS-AC0.vue?vue&type=style&index=0&id=146b331a&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _NS_AC0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _NS_AC0_vue_vue_type_template_id_146b331a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _NS_AC0_vue_vue_type_template_id_146b331a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "146b331a",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/forms/afg/contre_etude_corporate/NS-AC0.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/afg/contre_etude_corporate/NS-AC0.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/contre_etude_corporate/NS-AC0.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NS_AC0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NS-AC0.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude_corporate/NS-AC0.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NS_AC0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/afg/contre_etude_corporate/NS-AC0.vue?vue&type=style&index=0&id=146b331a&lang=css&scoped=true":
/*!*************************************************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/contre_etude_corporate/NS-AC0.vue?vue&type=style&index=0&id=146b331a&lang=css&scoped=true ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NS_AC0_vue_vue_type_style_index_0_id_146b331a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NS-AC0.vue?vue&type=style&index=0&id=146b331a&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude_corporate/NS-AC0.vue?vue&type=style&index=0&id=146b331a&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/forms/afg/contre_etude_corporate/NS-AC0.vue?vue&type=template&id=146b331a&scoped=true":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/contre_etude_corporate/NS-AC0.vue?vue&type=template&id=146b331a&scoped=true ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NS_AC0_vue_vue_type_template_id_146b331a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NS_AC0_vue_vue_type_template_id_146b331a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NS_AC0_vue_vue_type_template_id_146b331a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NS-AC0.vue?vue&type=template&id=146b331a&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude_corporate/NS-AC0.vue?vue&type=template&id=146b331a&scoped=true");


/***/ })

}]);