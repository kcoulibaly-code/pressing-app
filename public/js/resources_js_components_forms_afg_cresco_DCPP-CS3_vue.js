"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_forms_afg_cresco_DCPP-CS3_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/cresco/DCPP-CS3.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/cresco/DCPP-CS3.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vueform/multiselect/dist/multiselect.vue2 */ "./node_modules/@vueform/multiselect/dist/multiselect.vue2.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _utils_GarantieTable_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/GarantieTable.vue */ "./resources/js/components/forms/afg/cresco/utils/GarantieTable.vue");
/* harmony import */ var _services_proxy_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/proxy.service */ "./resources/js/services/proxy.service.js");
/* harmony import */ var _services_connects_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/connects.service */ "./resources/js/services/connects.service.js");
/* harmony import */ var _utils_FicheCautionnementModal_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/FicheCautionnementModal.vue */ "./resources/js/components/forms/afg/cresco/utils/FicheCautionnementModal.vue");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }










window.$ = window.jQuery = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "SuretesEtGaranties",
  display: "Sûretés et garanties",
  components: {
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.ChevronDownIcon,
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.TrashIcon,
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.AirplayIcon,
    Multiselect: _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_3__["default"],
    GarantieTable: _utils_GarantieTable_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    FicheCautionnementModal: _utils_FicheCautionnementModal_vue__WEBPACK_IMPORTED_MODULE_7__["default"]
    // BookOpenIcon,
  },
  computed: {
    filteredGaranties: function filteredGaranties() {
      if (!this.garantieSearchQuery.trim()) {
        return this.garanties; // Retourner toutes les garanties si la recherche est vide
      }
      var query = this.garantieSearchQuery.toLowerCase().trim();
      return this.garanties.filter(function (garantie) {
        // Vérifier si le nom de la garantie correspond
        var nameMatch = garantie.name.toLowerCase().includes(query) && ![null, '', undefined].includes(garantie.name);
        return nameMatch;
      });
    }
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  created: function created() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            // await this.getNationalites();
            // await this.getCreditBanques();

            EventBus.$on("dossier-updated-dcpp-pcp4-0", function (d) {
              if ((d === null || d === void 0 ? void 0 : d.data_tb4) != undefined) {
                var data = d.data_tb4;
                _this.data_tb4 = data === null || data === void 0 ? void 0 : data.facilites_existante;
              }
            });
            EventBus.$on('facilites-updated', function (data) {
              // console.log('facilites-updated', data);
              var fs = data === null || data === void 0 ? void 0 : data.facilites_sollicitees;
              if ((fs === null || fs === void 0 ? void 0 : fs.length) > 0) {
                var checkArray = fs === null || fs === void 0 ? void 0 : fs.filter(function (el) {
                  return ![null, '', undefined].includes(el.facilite_libelle);
                });
                _this.facilites_sollicitees = checkArray;
              }
            });
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  mounted: function mounted() {
    this.loadRetrieved();
    // Écouter les événements EventBus
    EventBus.$on('created-extra-file-template', this.handleCreatedExtraFileTemplate);
    EventBus.$on('updated-extra-file-upload', this.handleUpdatedExtraFileUpload);
    this.loadTbAttrs();
    this.tableClosedOrOpened();
  },
  beforeDestroy: function beforeDestroy() {
    EventBus.$off('created-extra-file-template', this.handleCreatedExtraFileTemplate);
    EventBus.$off('updated-extra-file-upload', this.handleUpdatedExtraFileUpload);
  },
  data: function data() {
    var _this$meta_data$dossi;
    var vm = this;
    return {
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__["default"].host,
      connectsHost: _services_connects_service__WEBPACK_IMPORTED_MODULE_6__["default"].loadablehost(),
      authcheck: false,
      files: [],
      authcheckUsr: null,
      authcheckStatus: null,
      watchInPause: false,
      initLoad: true,
      seen: true,
      seen2: true,
      isLoading: false,
      meta_parseable: {
        cred_pub_key: this.meta_data["cred_pub_key"],
        tb_name: this.tb_name
      },
      type_credits: [],
      contextList: [{
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
      listingNote: false,
      formDataToBeWatched: {
        garanties: [],
        notes: [],
        is_first_time: null,
        commentaire: ""
      },
      facilites_sollicitees: [],
      facilites_existante: (_this$meta_data$dossi = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi === void 0 || (_this$meta_data$dossi = _this$meta_data$dossi.cred_pub_tb_120502) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.facilites_existante,
      newGarantieName: '',
      defaultGarantieIds: ['avi', 'assurance', 'caution', 'hypotheque', 'gage', 'divers', 'cash_collateral'],
      garanties: [{
        id: 'avi',
        name: ' Attestation de Virement Irrévocable (AVI)',
        checked: false,
        isOpen: false,
        infos: [],
        value: "",
        disabled: false
      }, {
        id: 'assurance',
        name: 'Assurance',
        checked: false,
        isOpen: false,
        infos: [],
        value: "",
        disabled: false
      }, {
        id: 'caution',
        name: 'Caution personnelle et solidaire (CPS)',
        checked: false,
        isOpen: false,
        infos: [],
        value: "",
        disabled: false
      }, {
        id: 'cash_collateral',
        name: 'Cash collatéral',
        checked: false,
        isOpen: false,
        infos: [],
        value: "",
        disabled: false
      }, {
        id: 'hypotheque',
        name: 'Hypothèque',
        checked: false,
        isOpen: false,
        infos: [],
        value: "",
        disabled: false
      }, {
        id: 'gage',
        name: 'Gage',
        checked: false,
        isOpen: false,
        infos: [],
        value: "",
        disabled: false
      }, {
        id: 'divers',
        name: 'Divers',
        checked: false,
        isOpen: false,
        infos: [],
        value: "",
        disabled: false
      }],
      fieldsConfig: {
        avi: ['montant', 'ligneCredit', 'files', 'commentaire', 'template', 'is_recueillie'],
        assurance: ['ligneCredit', 'typeAssurance', 'valeurAssuree', 'files', 'commentaire', 'template', 'is_recueillie'],
        cash_collateral: ['ligneCredit', 'description', 'montant', 'files', 'commentaire', 'template', 'is_recueillie'],
        caution: ['ligneCredit', 'firstname', 'lastname', 'isPrincipal', 'is_recueillie', 'sexe', 'piece', 'commentaire', 'date_naissance', 'valeur_caution', 'lieu_naissance', 'nom_du_pere', 'nom_de_la_mere', 'adresse_de_la_caution', 'type_piece', 'date_delivrance_piece', 'lieu_delivration', 'categorieProfessionnelle', 'fonction', 'fonctionAutre', 'dateDepartRetraite', 'ageDepartRetraite', 'typeContrat', 'nomEmployeur', 'typeEmployeur', 'avoirsInvestissements', 'brefIncidentASignaler', 'lieu_habitation', 'files', 'template', 'telephone'],
        hypotheque: ['ligneCredit', 'bien_hypotheque', 'rang', 'proprietaire', 'numero_tel', 'annee_achat', 'adresse_emplacement', 'longitude', 'latitude', 'date_evaluation', 'valeur_marchande', 'valeur_considere', 'files', 'template', 'is_recueillie'],
        gage: ['ligneCredit', 'montant', 'bienGage', 'files', 'commentaire', 'template', 'is_recueillie'],
        divers: ['ligneCredit', 'description', 'montant', 'files', 'commentaire', 'template', 'is_recueillie'],
        "default": ['ligneCredit', 'description', 'montant', 'files', 'commentaire', 'template', 'is_recueillie']
      },
      garantieSearchQuery: '',
      currentCautionInfoIndex: null,
      currentGarantieId: null
    };
  },
  methods: {
    toggleAccordion2: function toggleAccordion2(garantieId) {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var garantie, index;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              garantie = _this2.garanties.find(function (g) {
                return g.id === garantieId;
              });
              if (garantie) {
                _context2.next = 4;
                break;
              }
              console.error('Garantie non trouvée:', garantieId);
              return _context2.abrupt("return");
            case 4:
              if (!garantie.checked) {
                _context2.next = 9;
                break;
              }
              if (garantie.infos.length === 0) {
                _this2.addInfo(garantie.id);
              }
              if (!garantie.isOpen) {
                garantie.isOpen = true;
              }
              _context2.next = 19;
              break;
            case 9:
              _context2.prev = 9;
              for (index = garantie.infos.length - 1; index >= 0; index--) {
                console.log('delete ...', 'garantieId => ', garantieId, 'infos.index -> ', index);
              }
              _context2.next = 18;
              break;
            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2["catch"](9);
              console.error('Erreur lors de la suppression des fichiers:', _context2.t0);
              garantie.checked = true;
              return _context2.abrupt("return");
            case 18:
              garantie.isOpen = false;
            case 19:
              _this2.garanties.forEach(function (g) {
                if (g.id !== garantieId) {
                  g.isOpen = false;
                }
              });
              _this2.$emit('input-change', _this2.garanties);
              EventBus.$emit('update-garanties-for-annexe', _this2.garanties);
            case 22:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[9, 13]]);
      }))();
    },
    toggleAccordion: function toggleAccordion(garantieId) {
      var garantie = this.garanties.find(function (g) {
        return g.id === garantieId;
      });
      if (garantie.checked && garantie.infos.length === 0) {
        this.addInfo(garantie.id);
      }
      if (garantie.checked && !garantie.isOpen) {
        garantie.isOpen = true;
      }
      if (!garantie.checked) {
        this.resetGarantieInfos(garantieId);
      }
      this.garanties.forEach(function (g) {
        if (g.id !== garantieId) {
          g.isOpen = false;
        }
      });
      this.$emit('input-change', this.garanties);
      EventBus.$emit("update-garanties-for-annexe", this.garanties);
    },
    resetGarantieInfos: function resetGarantieInfos(garantieId) {
      var garantie = this.garanties.find(function (g) {
        return g.id === garantieId;
      });
      if (garantie) {
        garantie.infos = [];
        this.addInfo(garantieId);
        this.$emit('input-change', this.garanties);
        EventBus.$emit("update-garanties-for-annexe", this.garanties);
      }
    },
    toggleAccordionContent: function toggleAccordionContent(garantieId) {
      var garantie = this.garanties.find(function (g) {
        return g.id === garantieId;
      });
      garantie.isOpen = !garantie.isOpen;
      this.$emit('input-change', this.garanties);
      EventBus.$emit("update-garanties-for-annexe", this.garanties);
    },
    addInfo: function addInfo(garantieId) {
      var _newInfo, _ref, _this$authenticatedUs, _this$authenticatedUs2, _this$authenticatedUs3;
      var garantie = this.garanties.find(function (g) {
        return g.id === garantieId;
      });
      var newInfo = {};
      switch (garantieId) {
        case 'avi':
          newInfo = {
            montant: '',
            ligneCredit: '',
            commentaire: '',
            files: 0,
            template: null,
            is_recueillie: null
          };
          break;
        case 'assurance':
          newInfo = {
            ligneCredit: '',
            typeAssurance: '',
            valeurAssuree: '',
            commentaire: '',
            files: 0,
            template: null,
            is_recueillie: null
          };
          break;
        case 'caution':
          newInfo = (_newInfo = {
            ligneCredit: '',
            firstname: '',
            lastname: '',
            sexe: '',
            isPrincipal: '',
            telephone: '',
            valeur_caution: '',
            piece: '',
            commentaire: '',
            files: 0,
            template: null,
            is_recueillie: null,
            date_naissance: '',
            lieu_naissance: '',
            nom_du_pere: '',
            nom_de_la_mere: '',
            adresse_de_la_caution: '',
            type_piece: ''
          }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_newInfo, "piece", ''), "date_delivrance_piece", ''), "lieu_delivration", ''), "categorieProfessionnelle", ''), "fonction", ''), "fonctionAutre", ''), "dateDepartRetraite", ''), "ageDepartRetraite", null), "typeContrat", ''), "nomEmployeur", ''), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_newInfo, "typeEmployeur", ''), "avoirsInvestissements", [{
            label: '',
            value: ''
          }]), "brefIncidentASignaler", ''), "lieu_habitation", ''));
          break;
        case 'hypotheque':
          newInfo = {
            ligneCredit: '',
            bien_hypotheque: '',
            rang: '',
            proprietaire: '',
            numero_tel: '',
            annee_achat: '',
            adresse_emplacement: '',
            longitude: '',
            latitude: '',
            date_evaluation: '',
            valeur_marchande: '',
            valeur_considere: '',
            files: 0,
            template: null,
            is_recueillie: null
          };
          break;
        case 'gage':
          newInfo = {
            ligneCredit: '',
            montant: '',
            bienGage: '',
            commentaire: '',
            files: 0,
            template: null,
            is_recueillie: null
          };
        case 'cash_collateral':
          newInfo = {
            ligneCredit: '',
            description: '',
            montant: '',
            commentaire: '',
            files: 0,
            template: null,
            is_recueillie: null,
            percent: ''
          };
          break;
        default:
          newInfo = {
            ligneCredit: '',
            description: '',
            montant: '',
            commentaire: '',
            files: 0,
            template: null,
            is_recueillie: null
          };
      }
      newInfo.id = (0,uuid__WEBPACK_IMPORTED_MODULE_9__["default"])();
      newInfo.user_id = (_ref = (_this$authenticatedUs = (_this$authenticatedUs2 = this.authenticatedUser) === null || _this$authenticatedUs2 === void 0 ? void 0 : _this$authenticatedUs2.id) !== null && _this$authenticatedUs !== void 0 ? _this$authenticatedUs : (_this$authenticatedUs3 = this.authenticatedUser) === null || _this$authenticatedUs3 === void 0 ? void 0 : _this$authenticatedUs3.user_id) !== null && _ref !== void 0 ? _ref : null;
      garantie.infos.push(newInfo);
      if (garantieId === 'caution') {
        this.currentCautionInfoIndex = garantie.infos.length - 1;
        this.currentGarantieId = garantieId;
      }
      this.$emit('input-change', this.garanties);
      EventBus.$emit("update-garanties-for-annexe", this.garanties);
      this.handleInputG();
    },
    removeInfo: function removeInfo(garantieId, index) {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var garantie;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              garantie = _this3.garanties.find(function (g) {
                return g.id === garantieId;
              });
              if (garantie) {
                _context3.next = 3;
                break;
              }
              return _context3.abrupt("return");
            case 3:
              _context3.prev = 3;
              _context3.next = 6;
              return _this3.handleDeleteFile(garantieId, index);
            case 6:
              garantie.infos.splice(index, 1);
              _this3.$emit('input-change', _this3.garanties);
              EventBus.$emit("update-garanties-for-annexe", _this3.garanties);
              _this3.handleInputG();
              _context3.next = 15;
              break;
            case 12:
              _context3.prev = 12;
              _context3.t0 = _context3["catch"](3);
              console.error('Suppression annulée ou erreur:', _context3.t0);
            case 15:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[3, 12]]);
      }))();
    },
    handleDeleteFile: function handleDeleteFile(garantieId, infoIndex) {
      var _this4 = this;
      return new Promise(function (resolve, reject) {
        var garantie = _this4.garanties.find(function (g) {
          return g.id === garantieId;
        });
        if (!garantie || !garantie.infos[infoIndex]) {
          return resolve();
        }
        var info = garantie.infos[infoIndex];
        if (info.files > 0 && info.template) {
          var count_files = info.files;
          var msg = count_files === 1 ? 'Suppression du fichier attaché.' : "Suppression des ".concat(count_files, " fichiers attach\xE9s.");
          _this4.$confirm(msg, 'Suppression de fichier', {
            confirmButtonText: 'Oui',
            cancelButtonText: 'Non',
            type: 'warning'
          }).then(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            var checkFiles;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.prev = 0;
                  _this4.handleDoubleClickOrClick({
                    index: infoIndex
                  }, garantieId, false);
                  checkFiles = function checkFiles() {
                    return new Promise(function (res) {
                      var interval = setInterval(function () {
                        if (info.files === 0) {
                          clearInterval(interval);
                          res();
                        }
                      }, 500);
                    });
                  };
                  _context4.next = 5;
                  return checkFiles();
                case 5:
                  Vue.set(info, 'files', 0);
                  Vue.set(info, 'template', null);
                  resolve();
                  _context4.next = 14;
                  break;
                case 10:
                  _context4.prev = 10;
                  _context4.t0 = _context4["catch"](0);
                  console.error('Erreur lors de la suppression des fichiers:', _context4.t0);
                  reject(_context4.t0);
                case 14:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, null, [[0, 10]]);
          })))["catch"](function () {
            reject(new Error('Suppression des fichiers annulée'));
          });
        } else {
          resolve();
        }
      });
    },
    updateInfos: function updateInfos(garantieId, updatedInfos) {
      var garantie = this.garanties.find(function (g) {
        return g.id === garantieId;
      });
      Vue.set(garantie, 'infos', updatedInfos);
      this.$emit('input-change', this.garanties);
      EventBus.$emit("update-garanties-for-annexe", this.garanties);
      this.handleInputG();
    },
    addGarantie: function addGarantie() {
      var _ref3, _this$authenticatedUs4, _this$authenticatedUs5, _this$authenticatedUs6;
      this.garanties.push({
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_9__["default"])(),
        name: '',
        checked: false,
        isOpen: false,
        infos: [],
        value: "",
        disabled: false,
        user_id: (_ref3 = (_this$authenticatedUs4 = (_this$authenticatedUs5 = this.authenticatedUser) === null || _this$authenticatedUs5 === void 0 ? void 0 : _this$authenticatedUs5.id) !== null && _this$authenticatedUs4 !== void 0 ? _this$authenticatedUs4 : (_this$authenticatedUs6 = this.authenticatedUser) === null || _this$authenticatedUs6 === void 0 ? void 0 : _this$authenticatedUs6.user_id) !== null && _ref3 !== void 0 ? _ref3 : null
      });
      this.garanties.forEach(function (g) {
        g.isOpen = false;
      });
      this.handleInputG();
    },
    removeGarantie: function removeGarantie(garantieId) {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var garantie, index;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              garantie = _this5.garanties.find(function (g) {
                return g.id === garantieId;
              });
              if (garantie) {
                _context5.next = 3;
                break;
              }
              return _context5.abrupt("return");
            case 3:
              _context5.prev = 3;
              index = garantie.infos.length - 1;
            case 5:
              if (!(index >= 0)) {
                _context5.next = 12;
                break;
              }
              _context5.next = 8;
              return _this5.handleDeleteFile(garantieId, index);
            case 8:
              garantie.infos.splice(index, 1);
            case 9:
              index--;
              _context5.next = 5;
              break;
            case 12:
              _this5.garanties = _this5.garanties.filter(function (g) {
                return g.id !== garantieId;
              });
              _this5.handleInputG();
              _this5.$emit('input-change', _this5.garanties);
              EventBus.$emit("update-garanties-for-annexe", _this5.garanties);
              _context5.next = 21;
              break;
            case 18:
              _context5.prev = 18;
              _context5.t0 = _context5["catch"](3);
              console.error('Suppression annulée ou erreur:', _context5.t0);
            case 21:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[3, 18]]);
      }))();
    },
    isDefaultGarantie: function isDefaultGarantie(garantieId) {
      return this.defaultGarantieIds.includes(garantieId);
    },
    updateGarantieName: function updateGarantieName(garantieId, event) {
      var garantie = this.garanties.find(function (g) {
        return g.id === garantieId;
      });
      if (garantie && event.target.value.trim()) {
        garantie.name = event.target.value.trim();
        this.$emit('input-change', this.garanties);
        EventBus.$emit("update-garanties-for-annexe", this.garanties);
      }
    },
    handleInputG: function handleInputG() {
      this.formDataToBeWatched["garanties"] = this.garanties;
    },
    handleDoubleClickOrClick: function handleDoubleClickOrClick(_ref4, garantieId) {
      var _garantie$infos, _this$meta_data;
      var index = _ref4.index;
      var viewOnly = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var garantie = this.garanties.find(function (g) {
        return g.id === garantieId;
      });
      var info = garantie === null || garantie === void 0 || (_garantie$infos = garantie.infos) === null || _garantie$infos === void 0 ? void 0 : _garantie$infos[index];
      if (!garantie || !info) {
        return;
      }

      // Créer un nom unique pour le template
      var identity = "".concat((_this$meta_data = this.meta_data) === null || _this$meta_data === void 0 || (_this$meta_data = _this$meta_data.dossier_credit) === null || _this$meta_data === void 0 ? void 0 : _this$meta_data.cred_pub_key, "_").concat(garantieId, "_").concat(info.id);
      // const templateName = `Pièce(s) jointe(s) {(*)}Suretes_et_garanties_check_list_${identity}_${this.tb_name}`;
      var templateName = "Pi\xE8ce(s) jointe(s) {(*)}Suretes_et_garanties_check_list_".concat(identity);

      // Ouvre l'explorateur de fichiers
      EventBus.$emit('open-extra-file-explorer');

      // Envoie les métadonnées pour le template
      setTimeout(function () {
        EventBus.$emit('data-extra-file-explorer', {
          name: templateName,
          view: viewOnly
        });
      }, 500);
      this.handleInputG();
      this.$emit('input-change', this.garanties);
      EventBus.$emit("update-garanties-for-annexe", this.garanties);
    },
    handleCreatedExtraFileTemplate: function handleCreatedExtraFileTemplate(data) {
      var _this6 = this;
      this.garanties.forEach(function (garantie, garantieIndex) {
        garantie.infos.forEach(function (info, infoIndex) {
          var _this6$meta_data, _data$template;
          var identity = "".concat((_this6$meta_data = _this6.meta_data) === null || _this6$meta_data === void 0 || (_this6$meta_data = _this6$meta_data.dossier_credit) === null || _this6$meta_data === void 0 ? void 0 : _this6$meta_data.cred_pub_key, "_").concat(garantie.id, "_").concat(info.id);
          var templateName = "Pi\xE8ce(s) jointe(s) -Suretes_et_garanties_check_list_".concat(identity); //_${this.tb_name}

          if (templateName === (data === null || data === void 0 || (_data$template = data.template) === null || _data$template === void 0 ? void 0 : _data$template.name)) {
            var _data$template2, _data$template3, _data$template4;
            Vue.set(_this6.garanties[garantieIndex].infos[infoIndex], 'template', {
              id: data === null || data === void 0 || (_data$template2 = data.template) === null || _data$template2 === void 0 ? void 0 : _data$template2.id,
              name: data === null || data === void 0 || (_data$template3 = data.template) === null || _data$template3 === void 0 ? void 0 : _data$template3.name,
              slug: data === null || data === void 0 || (_data$template4 = data.template) === null || _data$template4 === void 0 ? void 0 : _data$template4.slug
            });
            _this6.$emit('input-change', _this6.garanties);
            EventBus.$emit("update-garanties-for-annexe", _this6.garanties);
          }
        });
      });
    },
    handleUpdatedExtraFileUpload: function handleUpdatedExtraFileUpload() {
      this.getFiles();
      this.$emit('input-change', this.garanties);
      EventBus.$emit("update-garanties-for-annexe", this.garanties);
    },
    getFiles: function getFiles() {
      var _this$meta_data2,
        _this7 = this;
      _services_proxy_service__WEBPACK_IMPORTED_MODULE_5__["default"].proxyEbapis({
        url: this.connectsHost + 'api/get-files',
        method: 'POST',
        data: {
          file_identity: (_this$meta_data2 = this.meta_data) === null || _this$meta_data2 === void 0 || (_this$meta_data2 = _this$meta_data2.dossier_credit) === null || _this$meta_data2 === void 0 ? void 0 : _this$meta_data2.cred_pub_key
        }
      }).then(function (res) {
        var _res$data$data;
        res.data = JSON.parse(res.data);
        if (((_res$data$data = res.data.data) === null || _res$data$data === void 0 ? void 0 : _res$data$data.length) >= 0) {
          _this7.files = res.data.data;
          _this7.garanties.forEach(function (garantie, garantieIndex) {
            garantie.infos.forEach(function (info, infoIndex) {
              var count = 0;
              _this7.files.forEach(function (file) {
                var _info$template;
                if (file !== null && file !== void 0 && file.extra_file_template_id && (info === null || info === void 0 || (_info$template = info.template) === null || _info$template === void 0 ? void 0 : _info$template.id) === file.extra_file_template_id) {
                  count++;
                }
              });
              Vue.set(_this7.garanties[garantieIndex].infos[infoIndex], 'files', count);
            });
          });
          _this7.$emit('input-change', _this7.garanties);
          EventBus.$emit("update-garanties-for-annexe", _this7.garanties);
        }
      })["catch"](function (err) {
        console.error('Erreur lors de la récupération des fichiers:', err);
      });
    },
    getNationalites: function getNationalites() {
      var _this8 = this;
      _services_credit_service__WEBPACK_IMPORTED_MODULE_2__["default"].loadNationalites().then(function (res) {
        _this8.nationnalites = res.data;
      })["catch"](function (err) {
        console.log(err);
      });
    },
    generateUuid: function generateUuid() {
      var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var uuid = '';
      for (var i = 0; i < 8; i++) {
        uuid += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return uuid;
    },
    getCreditBanques: function getCreditBanques() {
      var _this9 = this;
      var cachedCreditTypes = localStorage.getItem('banque_credit_types');
      if (!cachedCreditTypes) {
        _services_credit_service__WEBPACK_IMPORTED_MODULE_2__["default"].loadCreditBanques().then(function (res) {
          _this9.type_credits = res.data;
          localStorage.setItem('banque_credit_types', JSON.stringify(res.data));
        })["catch"](function (err) {
          console.log(err);
        });
      } else {
        var data = JSON.parse(cachedCreditTypes);
        this.type_credits = data;
      }
    },
    loadTbAttrs: function loadTbAttrs() {
      var l = [];
      var topdivel = this.$refs.topdiv;
      var k = document.querySelectorAll(".subdiv" + this.tb_name);
      k.forEach(function (e) {
        l.push(e.innerText);
      });
      var p = {
        name_of_title: topdivel.innerText,
        list_of_content: l,
        id: "dcp-ppo2-head"
      };
      this.$emit("load-buffer", p);
    },
    tableClosedOrOpened: function tableClosedOrOpened() {
      this.seen = this.fetchClosedTables(this.tb_name + this.meta_data["cred_pub_key"]);
    },
    somX3: function somX3(ob, key) {
      var som = 0;
      ob === null || ob === void 0 || ob.filter(function (elm) {
        var _elm$key;
        som += Number((_elm$key = elm[key]) === null || _elm$key === void 0 ? void 0 : _elm$key.toString().replace(/\s/g, ""));
      });
      return som;
    },
    retract: function retract() {
      this.seen = !this.seen;
      var a = {
        tb_name: this.tb_name + this.meta_data["cred_pub_key"],
        status: this.seen
      };
      EventBus.$emit("savedclosed-table", a);
    },
    openNotesModal: function openNotesModal() {
      var listing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.listingNote = listing;
      this.$modal.show(this.tb_name);
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
          // this.$Progress.finish();
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
    launchAutoSaver: function launchAutoSaver() {
      var _this0 = this;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["default"].loadUserData().then(function (res) {
        _this0.send2Backend(res, 0, 0);
      })["catch"](function (err) {
        _this0.loadWithError(err);
      });
    },
    setTbVal: function setTbVal(val) {
      this.cred_pub_key = val;
    },
    loadRetrieved: function loadRetrieved() {
      var _this$meta_data$dossi2,
        _this$meta_data$dossi3,
        _this1 = this;
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];
      var fs = (_this$meta_data$dossi2 = (_this$meta_data$dossi3 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi3 === void 0 || (_this$meta_data$dossi3 = _this$meta_data$dossi3.cred_pub_tb_120502) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3.facilites_sollicitees) !== null && _this$meta_data$dossi2 !== void 0 ? _this$meta_data$dossi2 : [];
      if ((fs === null || fs === void 0 ? void 0 : fs.length) > 0) {
        var checkArray = fs === null || fs === void 0 ? void 0 : fs.filter(function (el) {
          return ![null, '', undefined].includes(el.facilite_libelle);
        });
        this.facilites_sollicitees = checkArray;
        this.handleInputG();
      }
      if (this.meta_data["dossier_credit"][createdKey] == undefined) {
        var avi = this.garanties.find(function (el) {
          return el.id == 'avi';
        });
        var assurance = this.garanties.find(function (el) {
          return el.id == 'assurance';
        });
        if (avi) {
          var _this$meta_data$dossi4, _this$meta_data$dossi5;
          avi.checked = true;
          this.addInfo(avi.id);
          avi.infos[0].ligneCredit = (_this$meta_data$dossi4 = this.meta_data["dossier_credit"]["cred_pub_tb_120502"]["facilites_sollicitees"]) === null || _this$meta_data$dossi4 === void 0 ? void 0 : _this$meta_data$dossi4[0].uuid;
          assurance.checked = true;
          this.addInfo(assurance.id);
          assurance.infos[0].ligneCredit = (_this$meta_data$dossi5 = this.meta_data["dossier_credit"]["cred_pub_tb_120502"]["facilites_sollicitees"]) === null || _this$meta_data$dossi5 === void 0 ? void 0 : _this$meta_data$dossi5[0].uuid;
          // assurance.infos[0].typeAssurance = 'Assurance de décès'
        }
      }
      if (lentb !== null && lentb !== void 0 && lentb.length && this.meta_data["dossier_credit"][createdKey]) {
        var _this$meta_data$dossi6;
        this.formDataToBeWatched = JSON.parse(JSON.stringify(this.meta_data["dossier_credit"][createdKey]));
        if ((_this$meta_data$dossi6 = this.meta_data["dossier_credit"][createdKey]["garanties"]) !== null && _this$meta_data$dossi6 !== void 0 && _this$meta_data$dossi6.length) {
          var retrievedGaranties = JSON.parse(JSON.stringify(this.meta_data["dossier_credit"][createdKey]["garanties"]));
          var processedGaranties = retrievedGaranties.map(function (garantie) {
            var _ref7, _ref8, _garantie$user_id, _this1$authenticatedU3, _this1$authenticatedU4;
            var fields = _this1.fieldsConfig[garantie.id] || _this1.fieldsConfig["default"];
            var cleanedInfos = (garantie.infos || []).map(function (info) {
              var _ref5, _ref6, _info$user_id, _this1$authenticatedU, _this1$authenticatedU2;
              var cleanedInfo = {
                id: info.id || (0,uuid__WEBPACK_IMPORTED_MODULE_9__["default"])(),
                user_id: (_ref5 = (_ref6 = (_info$user_id = info.user_id) !== null && _info$user_id !== void 0 ? _info$user_id : (_this1$authenticatedU = _this1.authenticatedUser) === null || _this1$authenticatedU === void 0 ? void 0 : _this1$authenticatedU.id) !== null && _ref6 !== void 0 ? _ref6 : (_this1$authenticatedU2 = _this1.authenticatedUser) === null || _this1$authenticatedU2 === void 0 ? void 0 : _this1$authenticatedU2.user_id) !== null && _ref5 !== void 0 ? _ref5 : null
              };
              fields.forEach(function (field) {
                if (['montant', 'valeurAssuree', 'valeur_marchande', 'valeur_considere', 'valeur_caution'].includes(field)) {
                  // console.log('field ',field, 'info[field]',  Number(info[field]))
                  cleanedInfo[field] = info[field] || '';
                } else if (field === 'files') {
                  cleanedInfo[field] = info[field] ? Number(info[field]) : 0;
                } else if (field === 'template') {
                  cleanedInfo[field] = info[field] || null;
                } else if (['annee_achat', 'date_evaluation'].includes(field)) {
                  cleanedInfo[field] = info[field] || ''; // Assurer que les dates sont des chaînes
                } else {
                  cleanedInfo[field] = info[field] || '';
                }
              });
              return cleanedInfo;
            });
            garantie.user_id = (_ref7 = (_ref8 = (_garantie$user_id = garantie.user_id) !== null && _garantie$user_id !== void 0 ? _garantie$user_id : (_this1$authenticatedU3 = _this1.authenticatedUser) === null || _this1$authenticatedU3 === void 0 ? void 0 : _this1$authenticatedU3.id) !== null && _ref8 !== void 0 ? _ref8 : (_this1$authenticatedU4 = _this1.authenticatedUser) === null || _this1$authenticatedU4 === void 0 ? void 0 : _this1$authenticatedU4.user_id) !== null && _ref7 !== void 0 ? _ref7 : null;
            return _objectSpread(_objectSpread({}, garantie), {}, {
              infos: cleanedInfos
            });
          });
          Vue.set(this, 'garanties', processedGaranties);
        }
      }
      // Récupérer les fichiers initiaux
      this.getFiles();
    },
    defaultRetract: function defaultRetract(rc, ra) {
      if (ra != null) {
        this.seen = rc;
        var a = {
          tb_name: this.tb_name + this.meta_data["cred_pub_key"],
          status: this.seen
        };
        EventBus.$emit("savedclosed-table", a);
      }
    },
    refreshData: function refreshData() {
      this.garantieSearchQuery = "";
    },
    handleCautionModalInput: function handleCautionModalInput(cautionData) {
      if (this.currentGarantieId === 'caution' && this.currentCautionInfoIndex !== null) {
        var garantie = this.garanties.find(function (g) {
          return g.id === 'caution';
        });
        if (garantie) {
          // Mettre à jour l'info correspondante avec les données de la modal
          var info = _objectSpread(_objectSpread({}, garantie.infos[this.currentCautionInfoIndex]), cautionData);
          Vue.set(garantie.infos, this.currentCautionInfoIndex, info);
          this.$emit('input-change', this.garanties);
          EventBus.$emit("update-garanties-for-annexe", this.garanties);
          this.handleInputG();
        }
      }
    },
    closeFicheCautionModal: function closeFicheCautionModal() {
      this.currentCautionInfoIndex = null;
      this.currentGarantieId = null;
    },
    editCautionInfo: function editCautionInfo(garantieId, index) {
      if (garantieId === 'caution') {
        this.currentCautionInfoIndex = index;
        this.currentGarantieId = garantieId;

        // currentCautionInfoIndex !== null && currentGarantieId === 'caution' ? garanties.find(g => g.id === 'caution').infos[currentCautionInfoIndex] : {}
        if (this.currentCautionInfoIndex !== null && this.currentGarantieId === 'caution') {
          var cautionInfo = this.garanties.find(function (g) {
            return g.id === 'caution';
          }).infos[this.currentCautionInfoIndex];
        }
        this.$modal.show('fiche-de-cautionnement');
        EventBus.$emit('open-fiche-cautionnement', {
          index: index
        });
      }
    }
  },
  watch: {
    formDataToBeWatched: {
      handler: function handler(newVal, oldVal) {
        this.autosaving(newVal, oldVal);
      },
      deep: true,
      immediate: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/cresco/utils/FicheCautionnementModal.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/cresco/utils/FicheCautionnementModal.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vueform/multiselect/dist/multiselect.vue2 */ "./node_modules/@vueform/multiselect/dist/multiselect.vue2.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _components_shared_MothAndYearInput_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../components/shared/MothAndYearInput.vue */ "./resources/js/components/shared/MothAndYearInput.vue");
/* harmony import */ var _services_proxy_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/proxy.service */ "./resources/js/services/proxy.service.js");
/* harmony import */ var _services_connects_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/connects.service */ "./resources/js/services/connects.service.js");
/* harmony import */ var _shared_PhoneInputCustom_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/PhoneInputCustom.vue */ "./resources/js/components/shared/PhoneInputCustom.vue");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "FicheCautionnementModal",
  components: {
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.ChevronDownIcon,
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.TrashIcon,
    Multiselect: _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_0__["default"],
    MothAndYearInput: _components_shared_MothAndYearInput_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    PhoneInputCustom: _shared_PhoneInputCustom_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  props: {
    tb_name: {
      type: String,
      "default": ""
    },
    facilitesSollicitees: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    cautionData: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    dossier_credit: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    currentCautionInfoIndex: {
      type: Number,
      "default": 0
    }
  },
  created: function created() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _this$dossier_credit, _this$dossier_credit2;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Promise.all([_this.getProfessions(), _this.loadScoringData()]);
          case 2:
            if ((_this$dossier_credit = _this.dossier_credit) !== null && _this$dossier_credit !== void 0 && _this$dossier_credit.numero_dossier.startsWith('AFGBCM')) {
              _this.currentIndicatif = "+237";
              _this.currentState = "Cameroun";
            }
            if ((_this$dossier_credit2 = _this.dossier_credit) !== null && _this$dossier_credit2 !== void 0 && _this$dossier_credit2.numero_dossier.startsWith('AFGBML')) {
              _this.currentIndicatif = "+223";
              _this.currentState = "Mali";
            }
            EventBus.$on('open-fiche-cautionnement', function (_ref) {
              var index = _ref.index;
              _this.initializeModal();
            });
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  mounted: function mounted() {
    var _this2 = this;
    EventBus.$on("created-extra-file-template", function (data) {
      var _data$template;
      // const template_name = `Cps -fichier_ +_${this.$route.params.templateId}`;
      var template_name = "Caution personnelle et solidaire -fichier_" + _this2.currentCautionInfoIndex + "_" + _this2.$route.params.templateId;
      if (template_name === (data === null || data === void 0 || (_data$template = data.template) === null || _data$template === void 0 ? void 0 : _data$template.name)) {
        var _data$template2, _data$template3, _data$template4;
        _this2.localCautionData.template = {
          id: data === null || data === void 0 || (_data$template2 = data.template) === null || _data$template2 === void 0 ? void 0 : _data$template2.id,
          name: data === null || data === void 0 || (_data$template3 = data.template) === null || _data$template3 === void 0 ? void 0 : _data$template3.name,
          slug: data === null || data === void 0 || (_data$template4 = data.template) === null || _data$template4 === void 0 ? void 0 : _data$template4.slug
        };
        _this2.$emit('input-change', _this2.localCautionData);
      }
    });
    EventBus.$on("updated-extra-file-upload", function (data) {
      _this2.getFiles();
    });
    this.getFiles();
    //   this.getEnvoieContratFiles();
  },
  data: function data() {
    return {
      seen1: true,
      seen2: true,
      seen3: true,
      seen4: true,
      AGE_RETRAITE: 65,
      isLoadingTypeContrat: false,
      localCautionData: {
        ligneCredit: "",
        firstname: "",
        lastname: "",
        sexe: "",
        isPrincipal: "",
        is_recueillie: "",
        telephone: "",
        valeur_caution: "",
        piece: "",
        commentaire: "",
        files: 0,
        template: null,
        date_naissance: "",
        lieu_naissance: "",
        nom_du_pere: "",
        nom_de_la_mere: "",
        adresse_de_la_caution: "",
        type_piece: "",
        date_delivrance_piece: "",
        lieu_delivration: "",
        categorieProfessionnelle: "",
        fonction: "",
        fonctionAutre: "",
        dateDepartRetraite: "",
        ageDepartRetraite: null,
        typeContrat: "",
        nomEmployeur: "",
        typeEmployeur: "",
        avoirsInvestissements: [{
          label: "",
          value: ""
        }],
        brefIncidentASignaler: "",
        bpEmployeur: ""
      },
      professions: [],
      data_type_de_contrat: [],
      data_type_employeur: [{
        libelle: "Fonction publique"
      }, {
        libelle: "Para-publique"
      }, {
        libelle: "Privé"
      }, {
        libelle: "Organisme international"
      }],
      file_data_list: [],
      showBtnDownload: false,
      showAllFiles: [false],
      showMoreNumber: 2,
      MAX_NAME_LENGTH: 10,
      SHORT_NAME_SEPARATOR: '...',
      currentIndicatif: "",
      currentState: "",
      connectsHost: _services_connects_service__WEBPACK_IMPORTED_MODULE_4__["default"].loadablehost(),
      files: []
    };
  },
  computed: {
    isPrincipalDisabled: function isPrincipalDisabled() {
      var _this$$parent$localIn,
        _this3 = this;
      return this.localCautionData.isPrincipal === "Oui" && ((_this$$parent$localIn = this.$parent.localInfos) === null || _this$$parent$localIn === void 0 ? void 0 : _this$$parent$localIn.some(function (info) {
        return info.isPrincipal === "Oui" && info !== _this3.localCautionData;
      }));
    },
    professions_: function professions_() {
      return [{
        id: 0,
        libelle: "Autre",
        slug: "autre"
      }].concat(_toConsumableArray(this.professions));
    }
  },
  watch: {
    cautionData: {
      handler: function handler(newVal) {
        this.localCautionData = _objectSpread(_objectSpread({}, this.localCautionData), newVal);
        if (!this.localCautionData.avoirsInvestissements || this.localCautionData.avoirsInvestissements.length === 0) {
          this.localCautionData.avoirsInvestissements = [{
            label: "",
            value: ""
          }];
        }
      },
      immediate: true,
      deep: true
    },
    data_type_de_contrat: {
      handler: function handler(newVal) {
        this.isLoadingTypeContrat = !newVal || newVal.length === 0;
      },
      immediate: true
    }
  },
  methods: {
    emitInputChange: function emitInputChange(fieldName, value) {
      if (fieldName === "avoirsInvestissements") {
        this.$emit("input-change", this.localCautionData);
      } else if (fieldName === "date_naissance" || fieldName === "date_delivrance_piece") {
        var val = value.target ? value.target.value : value;
        this.localCautionData[fieldName] = val[1];
        this.$emit("input-change", this.localCautionData);
      } else {
        var _val = value.target ? value.target.value : value;
        this.localCautionData[fieldName] = _val;
        this.$emit("input-change", this.localCautionData);
      }
    },
    handleIsPrincipalChange: function handleIsPrincipalChange(fieldName, event) {
      var value = event.target ? event.target.value : event;
      var checked = event.target.checked;
      this.localCautionData[fieldName] = checked ? value : "";
      this.$emit("input-change", this.localCautionData);
    },
    handleIsRecueillieChange: function handleIsRecueillieChange(fieldName, event) {
      var value = event.target ? event.target.value : event;
      var checked = event.target.checked;
      this.localCautionData[fieldName] = checked ? value : "";
      this.$emit("input-change", this.localCautionData);
    },
    selectedOptionFonction: function selectedOptionFonction(value) {
      this.localCautionData.fonction = value;
      this.$emit("input-change", this.localCautionData);
    },
    updateDateDepartRetraite: function updateDateDepartRetraite(value) {
      this.$emit("input-change", this.localCautionData);
    },
    addAvoir: function addAvoir() {
      this.localCautionData.avoirsInvestissements.push({
        label: "",
        value: ""
      });
      this.$emit("input-change", this.localCautionData);
    },
    removeAvoir: function removeAvoir(index) {
      if (index > 0) {
        this.localCautionData.avoirsInvestissements.splice(index, 1);
        this.$emit("input-change", this.localCautionData);
      }
    },
    updateAvoirValue: function updateAvoirValue(value, index) {
      this.localCautionData.avoirsInvestissements[index].value = value[1];
      this.$emit("input-change", this.localCautionData);
    },
    updateBrefIncident: function updateBrefIncident(event) {
      this.localCautionData.commentaire = event[1] || event;
      this.$emit("input-change", this.localCautionData);
    },
    closeModal: function closeModal() {
      this.$modal.hide("fiche-de-cautionnement");
      this.$emit("close");
    },
    getProfessions: function getProfessions() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var res;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _services_credit_service__WEBPACK_IMPORTED_MODULE_1__["default"].loadProfessions();
            case 3:
              res = _context2.sent;
              _this4.professions = res.data.data;
              // localStorage.setItem(
              //     "professions",
              //     JSON.stringify(res.data.data)
              // );
              _context2.next = 11;
              break;
            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              console.error("Erreur lors du chargement des professions:", _context2.t0);
              _this4.professions = [];
            case 11:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 7]]);
      }))();
    },
    scoringData: function scoringData(res) {
      var _this5 = this;
      var criteres = res.data.data.criteres;
      criteres.forEach(function (element) {
        if (element.type === "ppo" || element.type === null) {
          if (element.slug === "type_de_contrat") {
            _this5.data_type_de_contrat = element.elements.filter(function (item) {
              return item.type === "ppo" || item.type === null;
            });
          }
        }
      });
    },
    loadScoringData: function loadScoringData() {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var cachedScoringCritere, res;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              cachedScoringCritere = localStorage.getItem("scoring_criteres");
              if (!cachedScoringCritere) {
                _context3.next = 4;
                break;
              }
              _this6.scoringData(JSON.parse(cachedScoringCritere));
              return _context3.abrupt("return");
            case 4:
              _context3.prev = 4;
              _this6.isLoadingTypeContrat = true;
              _context3.next = 8;
              return _services_credit_service__WEBPACK_IMPORTED_MODULE_1__["default"].loadScoringData();
            case 8:
              res = _context3.sent;
              _this6.scoringData(res);
              localStorage.setItem("scoring_criteres", JSON.stringify(res));
              _context3.next = 17;
              break;
            case 13:
              _context3.prev = 13;
              _context3.t0 = _context3["catch"](4);
              console.error("Erreur lors du chargement des critères de scoring:", _context3.t0);
              _this6.data_type_de_contrat = [];
            case 17:
              _context3.prev = 17;
              _this6.isLoadingTypeContrat = false;
              return _context3.finish(17);
            case 20:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[4, 13, 17, 20]]);
      }))();
    },
    handleDoubleClickOrClick: function handleDoubleClickOrClick(event, index) {
      var _this$localCautionDat,
        _this7 = this;
      EventBus.$emit('open-extra-file-explorer');
      var numeroPiece = ((_this$localCautionDat = this.localCautionData.piece) === null || _this$localCautionDat === void 0 ? void 0 : _this$localCautionDat.trim()) || '';
      setTimeout(function () {
        EventBus.$emit('data-extra-file-explorer', {
          name: "Caution personnelle et solidaire {(*)}fichier_".concat(index, "_").concat(_this7.$route.params.templateId)
        });
      }, 500);
    },
    getFiles: function getFiles() {
      var _this8 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var _res$data$data, res, fileData, count;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return _services_proxy_service__WEBPACK_IMPORTED_MODULE_3__["default"].proxyEbapis({
                url: _this8.connectsHost + 'api/get-files',
                method: 'POST',
                data: {
                  file_identity: _this8.dossier_credit.cred_pub_key
                }
              });
            case 3:
              res = _context4.sent;
              res.data = JSON.parse(res.data);
              _this8.file_data_list = [];
              if (((_res$data$data = res.data.data) === null || _res$data$data === void 0 ? void 0 : _res$data$data.length) > 0) {
                _this8.files = res.data.data;
                fileData = [];
                count = 0;
                _this8.files.forEach(function (file) {
                  var _this8$localCautionDa;
                  if ((file === null || file === void 0 ? void 0 : file.extra_file_template_id) != null && ((_this8$localCautionDa = _this8.localCautionData) === null || _this8$localCautionDa === void 0 || (_this8$localCautionDa = _this8$localCautionDa.template) === null || _this8$localCautionDa === void 0 ? void 0 : _this8$localCautionDa.id) === (file === null || file === void 0 ? void 0 : file.extra_file_template_id)) {
                    count++;
                    fileData.push({
                      file_id: file.id,
                      file_name: "".concat(file.file_name, ".").concat(file.file_ext),
                      file_url: file.file_url,
                      file_ext: file.file_ext
                    });
                  }
                });
                _this8.file_data_list.push(fileData);
                _this8.showAllFiles = [false];
                _this8.showBtnDownload = true;
                _this8.localCautionData.files = count;
                _this8.$emit('input-change', _this8.localCautionData);
                // await this.getEnvoieContratFiles();
              }
              _context4.next = 12;
              break;
            case 9:
              _context4.prev = 9;
              _context4.t0 = _context4["catch"](0);
              console.error('Erreur lors de la récupération des fichiers:', _context4.t0);
            case 12:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[0, 9]]);
      }))();
    },
    getEnvoieContratFiles: function getEnvoieContratFiles() {
      var _this9 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var _res$data$data2, res, fileData;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return _services_proxy_service__WEBPACK_IMPORTED_MODULE_3__["default"].proxyEbapis({
                url: _this9.connectsHost + 'api/get-files',
                method: 'POST',
                data: {
                  file_identity: _this9.dossier_credit.cred_pub_key
                }
              });
            case 3:
              res = _context5.sent;
              res.data = JSON.parse(res.data);
              _this9.file_data_list = [];
              if (((_res$data$data2 = res.data.data) === null || _res$data$data2 === void 0 ? void 0 : _res$data$data2.length) > 0) {
                _this9.files = res.data.data;
                fileData = [];
                _this9.files.forEach(function (file) {
                  var _this9$localCautionDa;
                  if ((file === null || file === void 0 ? void 0 : file.extra_file_template_id) != null && ((_this9$localCautionDa = _this9.localCautionData) === null || _this9$localCautionDa === void 0 || (_this9$localCautionDa = _this9$localCautionDa.template) === null || _this9$localCautionDa === void 0 ? void 0 : _this9$localCautionDa.id) === (file === null || file === void 0 ? void 0 : file.extra_file_template_id)) {
                    fileData.push({
                      file_name: "".concat(file.file_name, ".").concat(file.file_ext),
                      file_url: file.file_url,
                      file_ext: file.file_ext
                    });
                  }
                });
                _this9.file_data_list.push(fileData);
                _this9.showAllFiles = [false];
                _this9.showBtnDownload = true;
              }
              _context5.next = 12;
              break;
            case 9:
              _context5.prev = 9;
              _context5.t0 = _context5["catch"](0);
              console.error('Erreur lors de la récupération des fichiers de contrat:', _context5.t0);
            case 12:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[0, 9]]);
      }))();
    },
    getIcon: function getIcon(fileExt) {
      switch (fileExt === null || fileExt === void 0 ? void 0 : fileExt.toLowerCase()) {
        case 'pdf':
          return 'icofont-file-pdf';
        case 'doc':
        case 'docx':
          return 'icofont-file-word';
        case 'xls':
        case 'xlsx':
          return 'icofont-file-excel';
        case 'jpg':
        case 'jpeg':
        case 'png':
          return 'icofont-file-image';
        default:
          return 'icofont-file-document';
      }
    },
    formatFileName: function formatFileName(fileName) {
      if (!fileName) return '';
      var maxLength = 15;
      return fileName.length > maxLength ? fileName.substring(0, maxLength - 3) + '...' : fileName;
    },
    downloadFile: function downloadFile(index, fileIndex) {
      var file = this.file_data_list[index][fileIndex];
      if (file !== null && file !== void 0 && file.file_url) {
        var link = window.location.origin + "/file?f=" + encodeURIComponent(file.file_url);
        window.open(link, "_blank");
      } else {
        console.error("Fichier non trouvé:", {
          index: index,
          fileIndex: fileIndex,
          type: type
        });
      }
    },
    onChangeStateShowAll: function onChangeStateShowAll(index) {
      this.$set(this.showAllFiles, index, !this.showAllFiles[index]);
    },
    initializeModal: function initializeModal() {
      var _this0 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _this0.getFiles();
              // this.getEnvoieContratFiles();
            case 1:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }))();
    },
    deleteFile: function deleteFile(data, index) {
      var _this1 = this;
      var headers = {
        'Content-Type': 'multipart/form-data'
      };
      _services_proxy_service__WEBPACK_IMPORTED_MODULE_3__["default"].proxyEbapis({
        url: this.connectsHost + 'api/delete-file',
        method: 'POST',
        data: data
      }).then(function (res) {
        res.data = JSON.parse(res.data);
        _this1.$toasted.show(res.data.message);
        _this1.getFiles();
        _this1.localCautionData["files"] -= 1;
        _this1.localCautionData["template"] = null;
      })["catch"](function (err) {
        console.error(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/cresco/utils/GarantieTable.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/cresco/utils/GarantieTable.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vueform/multiselect/dist/multiselect.vue2 */ "./node_modules/@vueform/multiselect/dist/multiselect.vue2.js");
/* harmony import */ var _shared_PhoneInput_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/PhoneInput.vue */ "./resources/js/components/shared/PhoneInput.vue");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'GarantieTable',
  components: {
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_2__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_2__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_2__.ChevronDownIcon,
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_2__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_2__.TrashIcon,
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_2__.AirplayIcon,
    Multiselect: _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_0__["default"],
    PhoneInput: _shared_PhoneInput_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
    // GarantieTable
    // BookOpenIcon,
  },
  props: {
    garantieId: {
      type: String,
      required: true
    },
    garantieName: {
      type: String,
      required: true
    },
    infos: {
      type: Array,
      required: true
    },
    facilitesSollicitees: {
      type: Array,
      required: true
    },
    comeFrom: {
      type: String,
      "default": ''
    },
    garantieSearchQuery: {
      type: String,
      "default": ''
    } // Nouvelle prop pour le terme de recherche
  },
  data: function data() {
    return {
      defaultGarantieIds: ['avi', 'assurance', 'caution', 'hypotheque', 'gage', 'divers'],
      localInfos: [],
      ligneCredit: null,
      typeAssurance: null,
      assuranceTypes: ["Assurance de décès", "Assurance Auto", "Assurance Moto", "Assurance Habitation", "Assurance Santé", "Assurance Vie", "Assurance Emprunteur", "Assurance Responsabilité Civile", "Assurance Animaux Domestiques", "Assurance Voyage", "Assurance Professionnelle", "Assurance Cyber-risques", "Assurance Obsèques", "Assurance Crédit", "Assurance Agricole", "Assurance Collectivité", "Assurance Flotte Automobile", "Assurance Risques Locatifs", "Assurance Protection Juridique"],
      colonnesParGarantie: {
        avi: ["Ligne de crédit associée <span class='text-danger'>*</span>", "Montant de la domiciliation<span class='text-danger'>*</span>", "Pièce(s) jointe(s) (si nécessaire)", "Garantie recueillie (Oui/Non)", "Commentaire"],
        assurance: ["Ligne de crédit associée <span class='text-danger'>*</span>", "Type d'assurance<span class='text-danger'>*</span>", "Montant/Hauteur de l'assurance<span class='text-danger'></span>", "Pièce(s) jointe(s) (si nécessaire)", "Garantie recueillie (Oui/Non)", "Commentaire"],
        caution: ["Ligne de crédit associée<span class='text-danger'>*</span>", "Nom du garant<span class='text-danger'>*</span>", "Prénom du garant<span class='text-danger'>*</span>", "Caution principale (Oui/Non)<span class='text-danger'>*</span>", "Garantie recueillie (Oui/Non)", "Valeur de la caution<span class='text-danger'>*</span>", "Fiche de cautionnement<span class='text-danger'>*</span> <br/> <small><i>Veuillez remplir la fiche</i></small>"],
        hypotheque: ["Ligne de crédit associée<span class='text-danger'>*</span>", "Type d'hypothèque<span class='text-danger'>*</span>", "Rang de l'hypothèque<span class='text-danger'>*</span>", "Nom du propriétaire<span class='text-danger'>*</span>", "N° du titre foncier (si nécessaire)", "Date d'attribution<span class='text-danger'>*</span>", "Adresse de l'emplacement", "Longitude", "Latitude", "Date d'évaluation<span class='text-danger'>*</span>", "Valeur marchande<span class='text-danger'>*</span>", "Valeur considérée<span class='text-danger'>*</span>", "Pièce(s) jointe(s) (si nécessaire)", "Garantie recueillie (Oui/Non)"],
        gage: ["Ligne de crédit associée<span class='text-danger'>*</span>", "Type de bien à gager<span class='text-danger'>*</span>", "Montant/Valeur du gage<span class='text-danger'>*</span>", "Pièce(s) jointe(s) (si nécessaire)", "Garantie recueillie (Oui/Non)", "Commentaire"],
        cash_collateral: ["Ligne de crédit associée<span class='text-danger'>*</span>", "Description<span class='text-danger'>*</span>", "Montant<span class='text-danger'>*</span>", "%<span class='text-danger'>*</span>", "Pièce(s) jointe(s) (si nécessaire)", "Commentaire", "Garantie recueillie (Oui/Non)"],
        divers: ["Ligne de crédit associée<span class='text-danger'>*</span>", "Description<span class='text-danger'>*</span>", "Montant<span class='text-danger'>*</span>", "Pièce(s) jointe(s) (si nécessaire)", "Commentaire", "Garantie recueillie (Oui/Non)"]
      }
    };
  },
  computed: {
    hasNumericFields: function hasNumericFields() {
      var numericFields = {
        avi: ['montant'],
        assurance: ['valeurAssuree'],
        caution: ['valeur_caution'],
        hypotheque: ['valeur_marchande', 'valeur_considere'],
        gage: ['montant'],
        divers: ['montant'],
        "default": ['montant']
      };
      return (numericFields[this.garantieId] || numericFields["default"]).length > 0;
    },
    colspan: function colspan() {
      var fieldCounts = {
        avi: 4,
        assurance: 4,
        caution: 4,
        hypotheque: 12,
        gage: 4,
        divers: 4,
        "default": 4
      };
      return (fieldCounts[this.garantieId] || fieldCounts["default"]) + 1;
    },
    colonnesAffichees: function colonnesAffichees() {
      // Retourne les colonnes selon le garantieId, ou 'divers' si c’est une garantie personnalisée
      return this.colonnesParGarantie[this.garantieId] || this.colonnesParGarantie['divers'];
    },
    filteredInfos: function filteredInfos() {
      if (!this.garantieSearchQuery.trim()) {
        return this.infos; // Retourner toutes les infos si la recherche est vide
      }
      var query = this.garantieSearchQuery.toLowerCase().trim();
      return this.infos.filter(function (info) {
        return Object.values(info).some(function (value) {
          if (typeof value === 'string') {
            return value.toLowerCase().includes(query);
          }
          return false;
        });
      });
    }
  },
  watch: {
    infos: {
      immediate: true,
      deep: true,
      handler: function handler(newInfos) {
        this.localInfos = JSON.parse(JSON.stringify(newInfos));
      }
    },
    facilitesSollicitees: function facilitesSollicitees(newVal) {
      // Si les données arrivent plus tard (par ex. API), on initialise
      if (newVal.length > 0) {
        this.ligneCredit = newVal[0].uuid;
        this.typeAssurance = this.assuranceTypes[0];
      }
    }
  },
  methods: {
    isDisabled: function isDisabled(index) {
      if (this.garantieId !== 'caution') return false;

      // Trouver l'index de l'élément marqué 'Oui'
      var principalIndex = this.localInfos.findIndex(function (el) {
        return el.isPrincipal === 'Oui';
      });
      var updatedInfos = _toConsumableArray(this.localInfos);
      updatedInfos.forEach(function (info, i) {
        if (principalIndex !== -1 && i != principalIndex) {
          info.isPrincipal = "";
        }
      });

      // this.$emit('input-change', updatedInfos);

      // S'il y a un 'Oui' et que ce n'est pas cette ligne, on désactive
      return principalIndex !== -1 && principalIndex !== index;
    },
    handleIsCollectedChange: function handleIsCollectedChange(fieldName, index, event) {
      var value = event.target ? event.target.value : event;
      var updatedInfos = _toConsumableArray(this.localInfos);
      updatedInfos[index][fieldName] = value;
      this.$emit('input-change', updatedInfos);
    },
    handleIsCautionPrincipalChange: function handleIsCautionPrincipalChange(fieldName, index, event) {
      var value = event.target ? event.target.value : event;
      var checked = event.target.checked;
      var updatedInfos = _toConsumableArray(this.localInfos);
      updatedInfos[index][fieldName] = checked ? value : "";

      // Si c'est le champ 'isPrincipal' qui change, on vérifie la logique de désactivation
      // if (fieldName === 'isPrincipal') {
      //     const hasPrincipal = updatedInfos.some(el => el.isPrincipal === 'Oui');

      //     // S'il n'y a plus aucun 'Oui', on force la désactivation logique
      //     if (!hasPrincipal) {
      //         updatedInfos.forEach(info => {
      //             info.isPrincipal = ''; //valeur par défaut
      //         });
      //     }
      // }

      // console.log(`is_recueillie changé pour ${this.garantieName}, index ${index}: ${value}`);
      this.$emit('input-change', updatedInfos);
    },
    formDataVars: function formDataVars(event, index) {
      var _event$;
      var key_ = (_event$ = event[0]) === null || _event$ === void 0 || (_event$ = _event$.toString()) === null || _event$ === void 0 ? void 0 : _event$.split("_".concat(index))[0];

      // let key = event[0]
      // console.log('event ----> ',event , 'index---->',index,'key_',key_);

      var updatedInfos = _toConsumableArray(this.localInfos);
      updatedInfos[index][key_] = event[1];
      this.$emit('input-change', updatedInfos);
    },
    formDataVarsCash: function formDataVarsCash(event, index, garantieId) {
      var _event$2;
      var key_ = (_event$2 = event[0]) === null || _event$2 === void 0 || (_event$2 = _event$2.toString()) === null || _event$2 === void 0 ? void 0 : _event$2.split("_".concat(index))[0];
      var updatedInfos = _toConsumableArray(this.localInfos);
      var updatedLine = updatedInfos[index];
      if (garantieId === 'cash_collateral' && ['montant', 'percent'].includes(key_)) {
        var _this$facilitesSollic;
        var ligne = (_this$facilitesSollic = this.facilitesSollicitees) === null || _this$facilitesSollic === void 0 ? void 0 : _this$facilitesSollic.find(function (line) {
          return line.uuid === updatedLine.ligneCredit;
        });
        var ligneMontantCredit = (ligne === null || ligne === void 0 ? void 0 : ligne.montant_credit) || 0;
        var montantCredit = this.convertInt(ligneMontantCredit);
        if (montantCredit > 0) {
          if (key_ === 'montant') {
            var _event$3;
            var rawMtnInput = (_event$3 = event[1]) !== null && _event$3 !== void 0 ? _event$3 : '';
            var cleanMtn = this.convertInt(rawMtnInput);
            var pourcentage = cleanMtn / montantCredit * 100;
            pourcentage = Math.min(pourcentage, 100); // limite à 100%

            updatedLine.montant = cleanMtn;
            updatedLine.percent = parseFloat(pourcentage.toFixed(2));
          } else if (key_ === 'percent') {
            var _event$4;
            var rawInput = (_event$4 = event[1]) !== null && _event$4 !== void 0 ? _event$4 : '';
            var percent = parseFloat(String(rawInput).replace(/\s+/g, '')) || 0;
            percent = Math.max(0, Math.min(percent, 100)); // entre 0 et 100

            var cashCallAmount = Math.round(percent / 100 * montantCredit);
            updatedLine.percent = percent;
            updatedLine.montant = cashCallAmount;
          }
        } else {
          // Pas de montant crédit : 
          updatedLine[key_] = event[1];
        }
      } else {
        // Cas générique :
        updatedLine[key_] = event[1];
      }
      this.$emit('input-change', updatedInfos);
    },
    handleInput: function handleInput(fieldName, index, event) {
      // console.log('typeof event',typeof event);

      var value = event.target ? event.target.value : event;
      var updatedInfos = _toConsumableArray(this.localInfos);
      updatedInfos[index][fieldName] = value;

      // Si garantieId est « cash_collateral » et que le champ modifié est « ligneCredit », 
      // // déclenche formDataVarsCash pour recalculer le montant et le pourcentage
      if (this.garantieId === 'cash_collateral' && fieldName === 'ligneCredit') {
        var _this$facilitesSollic2;
        var ligne = (_this$facilitesSollic2 = this.facilitesSollicitees) === null || _this$facilitesSollic2 === void 0 ? void 0 : _this$facilitesSollic2.find(function (line) {
          return line.uuid === value;
        });
        var montantCredit = ligne ? this.convertInt(ligne.montant_credit) : 0;
        if (montantCredit > 0) {
          // En supposant que le pourcentage par défaut soit de 100 % pour le nouveau crédit de ligne, ajustez-le si nécessaire
          var percent = 100;
          var cashCallAmount = Math.round(percent / 100 * montantCredit);
          updatedInfos[index].montant = cashCallAmount;
          updatedInfos[index].percent = percent;
          // Appelez formDataVarsCash pour gérer les calculs
          this.formDataVarsCash(['montant', cashCallAmount], index, this.garantieId);
        } else {
          updatedInfos[index].montant = '';
          updatedInfos[index].percent = '';
        }
      }
      this.$emit('input-change', updatedInfos);
    },
    handleCommentaireChange: function handleCommentaireChange(fieldName, index, event) {
      var value = event.target ? event.target.value : event;
      var updatedInfos = _toConsumableArray(this.localInfos);
      updatedInfos[index][fieldName] = value;
      this.$emit('input-change', updatedInfos);
    },
    setDateInput: function setDateInput(fieldName, index, event) {
      //   const value = event.target ? event.target.value : event;
      var updatedInfos = _toConsumableArray(this.localInfos);
      updatedInfos[index][fieldName] = event[1];
      this.$emit('input-change', updatedInfos);
    },
    setDateInput2: function setDateInput2(event) {
      var objectName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var property = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      if (![null, undefined].includes(this[objectName][index][property])) {
        this[objectName][index][property] = event[1];
      }
      this.handleInput();
    },
    handleDateInput: function handleDateInput(fieldName, index, value) {
      var updatedInfos = _toConsumableArray(this.localInfos);
      updatedInfos[index][fieldName] = value;
      this.$emit('input-change', updatedInfos);
    },
    calculateTotal: function calculateTotal(fieldName) {
      return this.localInfos.reduce(function (sum, info) {
        return sum + (Number(info[fieldName]) || 0);
      }, 0);
    },
    getIndicatifBureau: function getIndicatifBureau(index) {
      var _updatedInfos$index$t;
      // this.garantieId
      var updatedInfos = _toConsumableArray(this.localInfos);
      return updatedInfos[index]['telephone'] ? (_updatedInfos$index$t = updatedInfos[index]['telephone']) === null || _updatedInfos$index$t === void 0 ? void 0 : _updatedInfos$index$t.split(' ')[0] : '+';
      // this.$emit('input-change', updatedInfos);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/MothAndYearInput.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/MothAndYearInput.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "MothAndYearInput",
  props: {
    id: String,
    value: {
      type: String,
      "default": ""
    },
    readonly: Boolean,
    viewonly: Boolean,
    defaultTyping: {
      type: Boolean,
      "default": true
    },
    background: {
      type: String,
      "default": ""
    },
    color: {
      type: String,
      "default": ""
    },
    classname: {
      type: String,
      "default": ""
    }
  },
  data: function data() {
    return {
      month: "",
      year: "",
      date: "",
      readonly_: false,
      months: [{
        intitule: "Janvier",
        value: "01"
      }, {
        intitule: "Février",
        value: "02"
      }, {
        intitule: "Mars",
        value: "03"
      }, {
        intitule: "Avril",
        value: "04"
      }, {
        intitule: "Mai",
        value: "05"
      }, {
        intitule: "Juin",
        value: "06"
      }, {
        intitule: "Juillet",
        value: "07"
      }, {
        intitule: "Août",
        value: "08"
      }, {
        intitule: "Septembre",
        value: "09"
      }, {
        intitule: "Octobre",
        value: "10"
      }, {
        intitule: "Novembre",
        value: "11"
      }, {
        intitule: "Décembre",
        value: "12"
      }]
    };
  },
  mounted: function mounted() {
    this.readonly_ = this.viewonly || this.readonly;
    if (this.value) {
      this.defaultValue(this.value);
    }
  },
  methods: {
    handleInput: function handleInput() {
      if (this.month && this.year && /^\d{4}$/.test(this.year)) {
        this.date = "".concat(this.year, "-").concat(this.month);
      } else {
        this.date = "";
      }
      this.emitValue();
    },
    emitValue: function emitValue() {
      this.$emit("input", this.date);
      this.$emit("change", this.date);
    },
    defaultValue: function defaultValue(val) {
      if (!val || typeof val !== "string") {
        this.month = "";
        this.year = "";
        this.date = "";
        return;
      }
      var split = val.split("-");
      if (split.length === 2 && /^\d{4}$/.test(split[0]) && /^\d{2}$/.test(split[1])) {
        // Format attendu : "2040-05"
        this.year = split[0];
        this.month = split[1];
        this.date = val;
      } else {
        this.month = "";
        this.year = "";
        this.date = "";
      }
    }
  },
  watch: {
    value: function value(newVal) {
      if (newVal !== this.date) {
        this.defaultValue(newVal);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PhoneInput.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PhoneInput.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    isDisabled: Boolean,
    indicatif: String,
    number: String
  },
  data: function data() {
    return {
      query: this.indicatif || '+',
      indicatifData: this.indicatif || '+',
      numberData: this.number || '',
      phoneNumber: '',
      opened: false,
      stayOpened: false,
      filteredItems: [],
      items: [{
        flag: "",
        indicatif: "+93"
      },
      // Afghanistan
      {
        flag: "",
        indicatif: "+27"
      },
      // South Africa
      {
        flag: "",
        indicatif: "+355"
      },
      // Albania
      {
        flag: "",
        indicatif: "+213"
      },
      // Algeria
      {
        flag: "",
        indicatif: "+49"
      },
      // Germany
      {
        flag: "",
        indicatif: "+376"
      },
      // Andorra
      {
        flag: "",
        indicatif: "+244"
      },
      // Angola
      {
        flag: "",
        indicatif: "+1264"
      },
      // Anguilla
      {
        flag: "",
        indicatif: "+1268"
      },
      // Antigua and Barbuda
      {
        flag: "",
        indicatif: "+966"
      },
      // Saudi Arabia
      {
        flag: "",
        indicatif: "+54"
      },
      // Argentina
      {
        flag: "",
        indicatif: "+374"
      },
      // Armenia
      {
        flag: "",
        indicatif: "+297"
      },
      // Aruba
      {
        flag: "",
        indicatif: "+247"
      },
      // Ascension Island
      {
        flag: "",
        indicatif: "+61"
      },
      // Australia
      {
        flag: "",
        indicatif: "+43"
      },
      // Austria
      {
        flag: "",
        indicatif: "+994"
      },
      // Azerbaijan
      {
        flag: "",
        indicatif: "+1242"
      },
      // Bahamas
      {
        flag: "",
        indicatif: "+973"
      },
      // Bahrain
      {
        flag: "",
        indicatif: "+880"
      },
      // Bangladesh
      {
        flag: "",
        indicatif: "+1246"
      },
      // Barbados
      {
        flag: "",
        indicatif: "+32"
      },
      // Belgium
      {
        flag: "",
        indicatif: "+501"
      },
      // Belize
      {
        flag: "",
        indicatif: "+229"
      },
      // Benin
      {
        flag: "",
        indicatif: "+1441"
      },
      // Bermuda
      {
        flag: "",
        indicatif: "+975"
      },
      // Bhutan
      {
        flag: "",
        indicatif: "+375"
      },
      // Belarus
      {
        flag: "",
        indicatif: "+95"
      },
      // Myanmar
      {
        flag: "",
        indicatif: "+591"
      },
      // Bolivia
      {
        flag: "",
        indicatif: "+387"
      },
      // Bosnia and Herzegovina
      {
        flag: "",
        indicatif: "+267"
      },
      // Botswana
      {
        flag: "",
        indicatif: "+55"
      },
      // Brazil
      {
        flag: "",
        indicatif: "+673"
      },
      // Brunei
      {
        flag: "",
        indicatif: "+359"
      },
      // Bulgaria
      {
        flag: "",
        indicatif: "+226"
      },
      // Burkina Faso
      {
        flag: "",
        indicatif: "+257"
      },
      // Burundi
      {
        flag: "",
        indicatif: "+855"
      },
      // Cambodia
      {
        flag: "",
        indicatif: "+237"
      },
      // Cameroon
      {
        flag: "",
        indicatif: "+1"
      },
      // Canada
      {
        flag: "",
        indicatif: "+238"
      },
      // Cape Verde
      {
        flag: "",
        indicatif: "+1345"
      },
      // Cayman Islands
      {
        flag: "",
        indicatif: "+236"
      },
      // Central African Republic
      {
        flag: "",
        indicatif: "+56"
      },
      // Chile
      {
        flag: "",
        indicatif: "+86"
      },
      // China
      {
        flag: "",
        indicatif: "+357"
      },
      // Cyprus
      {
        flag: "",
        indicatif: "+57"
      },
      // Colombia
      {
        flag: "",
        indicatif: "+269"
      },
      // Comoros
      {
        flag: "",
        indicatif: "+243"
      },
      // Democratic Republic of the Congo
      {
        flag: "",
        indicatif: "+242"
      },
      // Republic of the Congo
      {
        flag: "",
        indicatif: "+682"
      },
      // Cook Islands
      {
        flag: "",
        indicatif: "+850"
      },
      // North Korea
      {
        flag: "",
        indicatif: "+82"
      },
      // South Korea
      {
        flag: "",
        indicatif: "+506"
      },
      // Costa Rica
      {
        flag: "",
        indicatif: "+225"
      },
      // Côte d'Ivoire
      {
        flag: "",
        indicatif: "+385"
      },
      // Croatia
      {
        flag: "",
        indicatif: "+53"
      },
      // Cuba
      {
        flag: "",
        indicatif: "+599"
      },
      // Curaçao
      {
        flag: "",
        indicatif: "+45"
      },
      // Denmark
      {
        flag: "",
        indicatif: "+246"
      },
      // British Indian Ocean Territory
      {
        flag: "",
        indicatif: "+253"
      },
      // Djibouti
      {
        flag: "",
        indicatif: "+1767"
      },
      // Dominica
      {
        flag: "",
        indicatif: "+20"
      },
      // Egypt
      {
        flag: "",
        indicatif: "+971"
      },
      // United Arab Emirates
      {
        flag: "",
        indicatif: "+593"
      },
      // Ecuador
      {
        flag: "",
        indicatif: "+291"
      },
      // Eritrea
      {
        flag: "",
        indicatif: "+34"
      },
      // Spain
      {
        flag: "",
        indicatif: "+372"
      },
      // Estonia
      {
        flag: "",
        indicatif: "+251"
      },
      // Ethiopia
      {
        flag: "",
        indicatif: "+298"
      },
      // Faroe Islands
      {
        flag: "",
        indicatif: "+679"
      },
      // Fiji
      {
        flag: "",
        indicatif: "+358"
      },
      // Finland
      {
        flag: "",
        indicatif: "+33"
      },
      // France
      {
        flag: "",
        indicatif: "+241"
      },
      // Gabon
      {
        flag: "",
        indicatif: "+220"
      },
      // The Gambia
      {
        flag: "",
        indicatif: "+995"
      },
      // Georgia
      {
        flag: "",
        indicatif: "+233"
      },
      // Ghana
      {
        flag: "",
        indicatif: "+350"
      },
      // Gibraltar
      {
        flag: "",
        indicatif: "+30"
      },
      // Greece
      {
        flag: "",
        indicatif: "+1473"
      },
      // Grenada
      {
        flag: "",
        indicatif: "+299"
      },
      // Greenland
      {
        flag: "",
        indicatif: "+590"
      },
      // Guadeloupe
      {
        flag: "",
        indicatif: "+1671"
      },
      // Guam
      {
        flag: "",
        indicatif: "+502"
      },
      // Guatemala
      {
        flag: "",
        indicatif: "+224"
      },
      // Guinea
      {
        flag: "",
        indicatif: "+240"
      },
      // Equatorial Guinea
      {
        flag: "",
        indicatif: "+245"
      },
      // Guinea-Bissau
      {
        flag: "",
        indicatif: "+592"
      },
      // Guyana
      {
        flag: "",
        indicatif: "+594"
      },
      // French Guiana
      {
        flag: "",
        indicatif: "+509"
      },
      // Haiti
      {
        flag: "",
        indicatif: "+504"
      },
      // Honduras
      {
        flag: "",
        indicatif: "+852"
      },
      // Hong Kong
      {
        flag: "",
        indicatif: "+36"
      },
      // Hungary
      {
        flag: "",
        indicatif: "+91"
      },
      // India
      {
        flag: "",
        indicatif: "+62"
      },
      // Indonesia
      {
        flag: "",
        indicatif: "+964"
      },
      // Iraq
      {
        flag: "",
        indicatif: "+98"
      },
      // Iran
      {
        flag: "",
        indicatif: "+353"
      },
      // Ireland
      {
        flag: "",
        indicatif: "+354"
      },
      // Iceland
      {
        flag: "",
        indicatif: "+972"
      },
      // Israel
      {
        flag: "",
        indicatif: "+39"
      },
      // Italy
      {
        flag: "",
        indicatif: "+1876"
      },
      // Jamaica
      {
        flag: "",
        indicatif: "+81"
      },
      // Japan
      {
        flag: "",
        indicatif: "+962"
      },
      // Jordan
      {
        flag: "",
        indicatif: "+7"
      },
      // Kazakhstan
      {
        flag: "",
        indicatif: "+254"
      },
      // Kenya
      {
        flag: "",
        indicatif: "+996"
      },
      // Kyrgyzstan
      {
        flag: "",
        indicatif: "+686"
      },
      // Kiribati
      {
        flag: "",
        indicatif: "+383"
      },
      // Kosovo
      {
        flag: "",
        indicatif: "+965"
      },
      // Kuwait
      {
        flag: "",
        indicatif: "+856"
      },
      // Laos
      {
        flag: "",
        indicatif: "+266"
      },
      // Lesotho
      {
        flag: "",
        indicatif: "+371"
      },
      // Latvia
      {
        flag: "",
        indicatif: "+961"
      },
      // Lebanon
      {
        flag: "",
        indicatif: "+231"
      },
      // Liberia
      {
        flag: "",
        indicatif: "+218"
      },
      // Libya
      {
        flag: "",
        indicatif: "+423"
      },
      // Liechtenstein
      {
        flag: "",
        indicatif: "+370"
      },
      // Lithuania
      {
        flag: "",
        indicatif: "+352"
      },
      // Luxembourg
      {
        flag: "",
        indicatif: "+853"
      },
      // Macau
      {
        flag: "",
        indicatif: "+389"
      },
      // North Macedonia
      {
        flag: "",
        indicatif: "+261"
      },
      // Madagascar
      {
        flag: "",
        indicatif: "+60"
      },
      // Malaysia
      {
        flag: "",
        indicatif: "+265"
      },
      // Malawi
      {
        flag: "",
        indicatif: "+960"
      },
      // Maldives
      {
        flag: "",
        indicatif: "+223"
      },
      // Mali
      {
        flag: "",
        indicatif: "+500"
      },
      // Falkland Islands
      {
        flag: "",
        indicatif: "+356"
      },
      // Malta
      {
        flag: "",
        indicatif: "+1670"
      },
      // Northern Mariana Islands
      {
        flag: "",
        indicatif: "+212"
      },
      // Morocco
      {
        flag: "",
        indicatif: "+692"
      },
      // Marshall Islands
      {
        flag: "",
        indicatif: "+596"
      },
      // Martinique
      {
        flag: "",
        indicatif: "+230"
      },
      // Mauritius
      {
        flag: "",
        indicatif: "+222"
      },
      // Mauritania
      {
        flag: "",
        indicatif: "+262"
      },
      // Mayotte/Reunion
      {
        flag: "",
        indicatif: "+52"
      },
      // Mexico
      {
        flag: "",
        indicatif: "+691"
      },
      // Micronesia
      {
        flag: "",
        indicatif: "+373"
      },
      // Moldova
      {
        flag: "",
        indicatif: "+377"
      },
      // Monaco
      {
        flag: "",
        indicatif: "+976"
      },
      // Mongolia
      {
        flag: "",
        indicatif: "+382"
      },
      // Montenegro
      {
        flag: "",
        indicatif: "+1664"
      },
      // Montserrat
      {
        flag: "",
        indicatif: "+258"
      },
      // Mozambique
      {
        flag: "",
        indicatif: "+264"
      },
      // Namibia
      {
        flag: "",
        indicatif: "+674"
      },
      // Nauru
      {
        flag: "",
        indicatif: "+977"
      },
      // Nepal
      {
        flag: "",
        indicatif: "+505"
      },
      // Nicaragua
      {
        flag: "",
        indicatif: "+227"
      },
      // Niger
      {
        flag: "",
        indicatif: "+234"
      },
      // Nigeria
      {
        flag: "",
        indicatif: "+683"
      },
      // Niue
      {
        flag: "",
        indicatif: "+47"
      },
      // Norway
      {
        flag: "",
        indicatif: "+687"
      },
      // New Caledonia
      {
        flag: "",
        indicatif: "+64"
      },
      // New Zealand
      {
        flag: "",
        indicatif: "+968"
      },
      // Oman
      {
        flag: "",
        indicatif: "+256"
      },
      // Uganda
      {
        flag: "",
        indicatif: "+998"
      },
      // Uzbekistan
      {
        flag: "",
        indicatif: "+92"
      },
      // Pakistan
      {
        flag: "",
        indicatif: "+680"
      },
      // Palau
      {
        flag: "",
        indicatif: "+970"
      },
      // Palestine
      {
        flag: "",
        indicatif: "+507"
      },
      // Panama
      {
        flag: "",
        indicatif: "+675"
      },
      // Papua New Guinea
      {
        flag: "",
        indicatif: "+595"
      },
      // Paraguay
      {
        flag: "",
        indicatif: "+31"
      },
      // Netherlands
      {
        flag: "",
        indicatif: "+51"
      },
      // Peru
      {
        flag: "",
        indicatif: "+63"
      },
      // Philippines
      {
        flag: "",
        indicatif: "+48"
      },
      // Poland
      {
        flag: "",
        indicatif: "+689"
      },
      // French Polynesia
      {
        flag: "",
        indicatif: "+351"
      },
      // Portugal
      {
        flag: "",
        indicatif: "+974"
      },
      // Qatar
      {
        flag: "",
        indicatif: "+40"
      },
      // Romania
      {
        flag: "",
        indicatif: "+44"
      },
      // United Kingdom
      {
        flag: "",
        indicatif: "+250"
      },
      // Rwanda
      {
        flag: "",
        indicatif: "+1869"
      },
      // Saint Kitts and Nevis
      {
        flag: "",
        indicatif: "+290"
      },
      // Saint Helena
      {
        flag: "",
        indicatif: "+1758"
      },
      // Saint Lucia
      {
        flag: "",
        indicatif: "+378"
      },
      // San Marino
      {
        flag: "",
        indicatif: "+508"
      },
      // Saint Pierre and Miquelon
      {
        flag: "",
        indicatif: "+1784"
      },
      // Saint Vincent and the Grenadines
      {
        flag: "",
        indicatif: "+677"
      },
      // Solomon Islands
      {
        flag: "",
        indicatif: "+503"
      },
      // El Salvador
      {
        flag: "",
        indicatif: "+685"
      },
      // Samoa
      {
        flag: "",
        indicatif: "+1684"
      },
      // American Samoa
      {
        flag: "",
        indicatif: "+239"
      },
      // São Tomé and Príncipe
      {
        flag: "",
        indicatif: "+221"
      },
      // Senegal
      {
        flag: "",
        indicatif: "+381"
      },
      // Serbia
      {
        flag: "",
        indicatif: "+248"
      },
      // Seychelles
      {
        flag: "",
        indicatif: "+232"
      },
      // Sierra Leone
      {
        flag: "",
        indicatif: "+65"
      },
      // Singapore
      {
        flag: "",
        indicatif: "+421"
      },
      // Slovakia
      {
        flag: "",
        indicatif: "+386"
      },
      // Slovenia
      {
        flag: "",
        indicatif: "+252"
      },
      // Somalia
      {
        flag: "",
        indicatif: "+249"
      },
      // Sudan
      {
        flag: "",
        indicatif: "+211"
      },
      // South Sudan
      {
        flag: "",
        indicatif: "+94"
      },
      // Sri Lanka
      {
        flag: "",
        indicatif: "+46"
      },
      // Sweden
      {
        flag: "",
        indicatif: "+41"
      },
      // Switzerland
      {
        flag: "",
        indicatif: "+597"
      },
      // Suriname
      {
        flag: "",
        indicatif: "+268"
      },
      // Eswatini
      {
        flag: "",
        indicatif: "+963"
      },
      // Syria
      {
        flag: "",
        indicatif: "+992"
      },
      // Tajikistan
      {
        flag: "",
        indicatif: "+255"
      },
      // Tanzania
      {
        flag: "",
        indicatif: "+886"
      },
      // Taiwan
      {
        flag: "",
        indicatif: "+235"
      },
      // Chad
      {
        flag: "",
        indicatif: "+420"
      },
      // Czech Republic
      {
        flag: "",
        indicatif: "+672"
      },
      // Christmas Island
      {
        flag: "",
        indicatif: "+66"
      },
      // Thailand
      {
        flag: "",
        indicatif: "+670"
      },
      // East Timor
      {
        flag: "",
        indicatif: "+228"
      },
      // Togo
      {
        flag: "",
        indicatif: "+690"
      },
      // Tokelau
      {
        flag: "",
        indicatif: "+676"
      },
      // Tonga
      {
        flag: "",
        indicatif: "+1868"
      },
      // Trinidad and Tobago
      {
        flag: "",
        indicatif: "+216"
      },
      // Tunisia
      {
        flag: "",
        indicatif: "+993"
      },
      // Turkmenistan
      {
        flag: "",
        indicatif: "+1649"
      },
      // Turks and Caicos Islands
      {
        flag: "",
        indicatif: "+90"
      },
      // Turkey
      {
        flag: "",
        indicatif: "+688"
      },
      // Tuvalu
      {
        flag: "",
        indicatif: "+380"
      },
      // Ukraine
      {
        flag: "",
        indicatif: "+598"
      },
      // Uruguay
      {
        flag: "",
        indicatif: "+678"
      },
      // Vanuatu
      {
        flag: "",
        indicatif: "+58"
      },
      // Venezuela
      {
        flag: "",
        indicatif: "+1340"
      },
      // U.S. Virgin Islands
      {
        flag: "",
        indicatif: "+1284"
      },
      // British Virgin Islands
      {
        flag: "",
        indicatif: "+84"
      },
      // Vietnam
      {
        flag: "",
        indicatif: "+681"
      },
      // Wallis and Futuna
      {
        flag: "",
        indicatif: "+967"
      },
      // Yemen
      {
        flag: "",
        indicatif: "+260"
      },
      // Zambia
      {
        flag: "",
        indicatif: "+263"
      } // Zimbabwe
      ]
    };
  },
  created: function created() {
    var _this = this;
    this.filterItems();
    // Initialize EventBus listener
    this.$on("tb-pcp1", function (data) {
      console.log("NUMBER", data);
      _this.numberData = _this.number || '';
      _this.indicatifData = _this.indicatif || '+';
      _this.query = _this.indicatif || '+';
      _this.filterItems();
    });
  },
  methods: {
    onUpdate: function onUpdate(v) {
      this.query = v;
      this.indicatifData = v;
      this.opened = false;
      this.stayOpened = false;
      this.$emit('update:indicatif', v);
    },
    filterItems: function filterItems() {
      if (!this.query) {
        this.filteredItems = this.items;
      } else {
        var search = this.query.toLowerCase().replace('+', '');
        this.filteredItems = this.items.filter(function (item) {
          return item.indicatif.toLowerCase().includes(search);
        });
      }
    }
  },
  watch: {
    indicatifData: function indicatifData(newVal) {
      this.phoneNumber = "".concat(newVal, " ").concat(this.numberData).trim();
      this.$emit('updatephone', this.phoneNumber);
    },
    numberData: function numberData(newVal) {
      if (newVal === undefined || newVal === null) {
        this.numberData = '';
        return;
      }
      if (newVal.length > 10) {
        this.numberData = newVal.slice(0, 10);
      }
      this.phoneNumber = "".concat(this.indicatifData || '+', " ").concat(this.numberData).trim();
      //   console.log('Emitting phoneNumber from numberData:', this.phoneNumber);
      this.$emit('updatephone', this.phoneNumber);
    },
    // numberData(newVal) {
    //   // Guard against undefined or null
    //   if (newVal === undefined || newVal === null) {
    //     this.numberData = '';
    //     return;
    //   }
    //   if (newVal.length > 10) {
    //     this.numberData = newVal.slice(0, 10);
    //   }
    //   this.phoneNumber = `${this.indicatifData} ${this.numberData}`.trim();
    //   this.$emit('updatephone', this.phoneNumber);
    // },
    query: function query(newVal) {
      var regex = /^\+?\d{0,4}$/;
      if (!regex.test(newVal)) {
        this.query = '+';
      }
      this.filterItems();
    },
    indicatif: function indicatif(newVal) {
      this.indicatifData = newVal || '+';
      this.query = newVal || '+';
      this.filterItems();
    },
    number: function number(newVal) {
      // Ensure numberData is always a string
      this.numberData = newVal || '';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PhoneInputCustom.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PhoneInputCustom.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_phoneCodes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/phoneCodes.js */ "./resources/js/helpers/phoneCodes.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "PhoneInputCustom",
  props: {
    modelValue: String,
    isDisabled: {
      type: Boolean,
      "default": false
    },
    defaultIndicatif: {
      type: String,
      "default": "+"
    }
  },
  data: function data() {
    return {
      query: this.defaultIndicatif,
      indicatifData: this.defaultIndicatif,
      numberData: "",
      opened: false,
      blurTimeout: null
    };
  },
  computed: {
    filteredItems: function filteredItems() {
      var search = this.query.replace("+", "").toLowerCase();
      return _helpers_phoneCodes_js__WEBPACK_IMPORTED_MODULE_0__["default"].filter(function (item) {
        return item.indicatif.replace("+", "").toLowerCase().includes(search);
      });
    },
    fullPhone: function fullPhone() {
      return "".concat(this.indicatifData, " ").concat(this.numberData).trim();
    }
  },
  watch: {
    modelValue: {
      immediate: true,
      handler: function handler(newVal) {
        var parts = (newVal || "").split(" ");
        this.indicatifData = parts[0] || this.defaultIndicatif;
        this.query = this.indicatifData;
        this.numberData = parts[1] || "";
      }
    },
    query: function query(newVal) {
      var regex = /^\+?\d{0,4}$/;
      if (!regex.test(newVal)) {
        this.query = this.indicatifData;
      }
    },
    defaultIndicatif: {
      immediate: true,
      handler: function handler(newVal) {
        if (['', null, undefined, '+'].includes(this.indicatifData)) {
          this.selectIndicatif(newVal);
        }
      }
    }
  },
  methods: {
    emitPhone: function emitPhone() {
      this.$emit("update:modelValue", this.fullPhone);
      this.$emit("change", this.fullPhone);
    },
    selectIndicatif: function selectIndicatif(value) {
      this.indicatifData = value;
      this.query = value;
      this.opened = false;
      this.emitPhone();
    },
    onFocus: function onFocus() {
      this.opened = true;
      clearTimeout(this.blurTimeout);
    },
    onBlur: function onBlur() {
      var _this = this;
      this.blurTimeout = setTimeout(function () {
        _this.opened = false;
      }, 150); // Laisse le temps au click d’être capté
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/cresco/DCPP-CS3.vue?vue&type=template&id=33ab029a&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/cresco/DCPP-CS3.vue?vue&type=template&id=33ab029a&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$formDataToBeWatch, _vm$formDataToBeWatch2;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    on: {
      contextmenu: function contextmenu($event) {
        return _vm.$refs.menu.open($event, _vm.tb_name);
      }
    }
  }, [_vm.isLoading ? _c("loader") : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "row bg-light card-width-height",
    staticStyle: {
      width: "100%",
      height: "100%"
    }
  }, [_c("ContextMenu", {
    ref: "menu",
    attrs: {
      id: _vm.tb_name,
      cred_pub_key: _vm.meta_parseable.cred_pub_key,
      tb_name: _vm.tb_name,
      contextList: _vm.contextList
    }
  }), _vm._v(" "), _vm.seen === true ? _c("div", {
    staticClass: "card",
    staticStyle: {
      width: "100%",
      height: "100%"
    }
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h6", {
    ref: "topdiv",
    staticClass: "head",
    attrs: {
      id: "dcp-ppo2-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Sûretés et garanties\n                        ")]), _vm._v(" "), _c("div", {
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
      click: function click($event) {
        return _vm.$modal.show("garanties");
      }
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
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "garanties-component"
  }, [_c("div", {
    staticClass: "p-1 d-flex justify-content-between align-items-center border-bottom px-2"
  }, [_c("h5", {
    staticClass: "mb-0"
  }, [_vm._v("Liste des garanties")]), _vm._v(" "), _c("div", {
    staticClass: "d-flex gap-2 align-items-center"
  }, [_c("span", {
    staticClass: "border rounded p-1 d-flex gap-1 align-items-center bg-light"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.garantieSearchQuery,
      expression: "garantieSearchQuery"
    }],
    staticClass: "form-control border-0 p-0 border-none focus-none bg-light",
    attrs: {
      type: "text",
      placeholder: "Rechercher une garantie ou son contenu..."
    },
    domProps: {
      value: _vm.garantieSearchQuery
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.garantieSearchQuery = $event.target.value;
      }
    }
  }), _vm._v(" "), _vm.garantieSearchQuery ? _c("i", {
    staticClass: "icofont-close"
  }) : _c("i", {
    staticClass: "icofont-search",
    on: {
      click: function click($event) {
        _vm.garantieSearchQuery = null;
      }
    }
  })]), _vm._v(" "), _c("span", {
    staticClass: "border td-btn rounded p-1 d-flex justify-content-center align-items-center gap-1 shadow-sm cursor-pointer",
    attrs: {
      title: "Actualiser les garanties"
    },
    on: {
      click: _vm.refreshData
    }
  }, [_c("span", {
    staticClass: "icofont icofont-refresh cursor-pointer"
  }), _vm._v("\n                                        Rafraichir\n                                    ")])])]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", [_vm.filteredGaranties.length ? _vm._l(_vm.filteredGaranties, function (garantie, index) {
    var _garantie$name;
    return _c("tr", {
      key: garantie.id
    }, [_c("td", {
      staticClass: "text-center"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: garantie.checked,
        expression: "garantie.checked"
      }],
      staticClass: "form-check-input",
      attrs: {
        type: "checkbox",
        id: garantie.id,
        disabled: !((_garantie$name = garantie.name) !== null && _garantie$name !== void 0 && _garantie$name.trim())
      },
      domProps: {
        checked: Array.isArray(garantie.checked) ? _vm._i(garantie.checked, null) > -1 : garantie.checked
      },
      on: {
        change: [function ($event) {
          var $$a = garantie.checked,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;
          if (Array.isArray($$a)) {
            var $$v = null,
              $$i = _vm._i($$a, $$v);
            if ($$el.checked) {
              $$i < 0 && _vm.$set(garantie, "checked", $$a.concat([$$v]));
            } else {
              $$i > -1 && _vm.$set(garantie, "checked", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.$set(garantie, "checked", $$c);
          }
        }, function ($event) {
          return _vm.toggleAccordion(garantie.id);
        }]
      }
    })]), _vm._v(" "), _c("td", [!_vm.isDefaultGarantie(garantie.id) ? _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: garantie.name,
        expression: "garantie.name"
      }],
      staticClass: "form-control",
      staticStyle: {
        width: "100%"
      },
      attrs: {
        type: "text",
        placeholder: "Nom de la garantie"
      },
      domProps: {
        value: garantie.name
      },
      on: {
        change: function change($event) {
          return _vm.updateGarantieName(garantie.id, $event);
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(garantie, "name", $event.target.value);
        }
      }
    }) : _c("span", [_vm._v(_vm._s(garantie.name))])]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [index == 0 ? _c("button", {
      staticStyle: {
        "background-color": "#2c3e50",
        color: "#ffffff",
        "border-radius": "15%",
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Ajouter la garantie"
      },
      on: {
        click: _vm.addGarantie
      }
    }, [_c("plus-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1) : _c("button", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: index > 6,
        expression: "index > 6"
      }],
      staticStyle: {
        "background-color": "transparent",
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Supprimer"
      },
      on: {
        click: function click($event) {
          return _vm.removeGarantie(garantie.id);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)])]);
  }) : [_c("td", {
    staticClass: "text-center",
    attrs: {
      colspan: "3"
    }
  }, [_vm.garantieSearchQuery ? _c("span", [_vm._v('\n                                                Aucun Document ne correspond au terme "'), _c("b", [_vm._v(_vm._s(_vm.garantieSearchQuery))]), _vm._v('"\n                                            ')]) : _c("span", [_vm._v("\n                                                Aucun Document\n                                            ")])])]], 2)])]), _vm._v(" "), _c("div", {
    staticClass: "accordions"
  }, _vm._l(_vm.filteredGaranties, function (garantie) {
    return _c("div", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: garantie.checked,
        expression: "garantie.checked"
      }],
      key: garantie.id,
      staticClass: "accordion"
    }, [_c("h6", {
      staticClass: "relook-header",
      on: {
        click: function click($event) {
          return _vm.toggleAccordionContent(garantie.id);
        }
      }
    }, [_vm._v("\n                                        " + _vm._s(garantie.name) + "\n                                        "), garantie.isOpen ? _c("chevron-up-icon", {
      staticClass: "custom-class",
      staticStyle: {
        "float": "right",
        cursor: "pointer"
      },
      attrs: {
        size: "21"
      }
    }) : _vm._e(), _vm._v(" "), !garantie.isOpen ? _c("chevron-down-icon", {
      staticClass: "custom-class",
      staticStyle: {
        "float": "right",
        cursor: "pointer"
      },
      attrs: {
        size: "21"
      }
    }) : _vm._e()], 1), _vm._v(" "), _c("div", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: garantie.isOpen,
        expression: "garantie.isOpen"
      }],
      staticClass: "accordion-content"
    }, [_c("GarantieTable", {
      attrs: {
        "garantie-id": garantie.id,
        "garantie-name": garantie.name,
        infos: garantie.infos,
        "facilites-sollicitees": _vm.facilites_sollicitees,
        "garantie-search-query": _vm.garantieSearchQuery
      },
      on: {
        "input-change": function inputChange($event) {
          return _vm.updateInfos(garantie.id, $event);
        },
        "add-info": function addInfo($event) {
          return _vm.addInfo(garantie.id);
        },
        "remove-info": function removeInfo($event) {
          return _vm.removeInfo(garantie.id, $event);
        },
        "upload-file": function uploadFile($event) {
          return _vm.handleDoubleClickOrClick($event, garantie.id);
        },
        "edit-caution-info": function editCautionInfo($event) {
          return _vm.editCautionInfo(garantie.id, $event);
        }
      }
    }), _vm._v(" "), _c("button", {
      staticClass: "btn btn-sm shadow-md text-white position-absolute mt-2",
      staticStyle: {
        cursor: "pointer",
        right: "56px",
        background: "#95a5a6",
        "max-width": "max-content"
      },
      attrs: {
        type: "button",
        name: "button"
      },
      on: {
        click: function click($event) {
          return _vm.toggleAccordionContent(garantie.id);
        }
      }
    }, [_vm._v("\n                                            Fermer\n                                        ")])], 1)]);
  }), 0), _vm._v(" "), _c("div", {
    staticClass: "card-body mt-1"
  }, [_c("div", {
    staticClass: "col-md-12 mb-4"
  }, [_vm._m(1), _vm._v(" "), _c("vue-editor", {
    attrs: {
      maximum: 1000,
      id: "commentaire"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.commentaire,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "commentaire", $$v);
      },
      expression: "formDataToBeWatched.commentaire"
    }
  })], 1)])])]), _vm._v(" "), _c("div", {
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
  }, [_vm._v("\n                        Fermer le tableau\n                    ")])])])]) : _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h6", {
    staticClass: "head",
    attrs: {
      id: "dcp-ppo2-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Sûretés et garanties\n                        ")]), _vm._v(" "), _c("div", {
    staticClass: "col-auto"
  }, [((_vm$formDataToBeWatch2 = _vm.formDataToBeWatched.notes) === null || _vm$formDataToBeWatch2 === void 0 ? void 0 : _vm$formDataToBeWatch2.length) > 0 ? _c("div", {
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
  }, [_c("span", [_vm._v("\n                                            " + _vm._s(_vm.formDataToBeWatched.notes.length) + "\n                                        ")])])])]) : _vm._e(), _vm._v(" "), _c("airplay-icon", {
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
      click: function click($event) {
        return _vm.$modal.show("garanties");
      }
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
  })], 1)])])])])], 1), _vm._v(" "), _c("ketri-modal", {
    attrs: {
      name: "garanties",
      images: ["/images/capture_afg/exemples/ppo_garantie.png"]
    }
  }), _vm._v(" "), _c("note-modal", {
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
  }), _vm._v(" "), _c("FicheCautionnementModal", {
    attrs: {
      tb_name: _vm.tb_name,
      facilitesSollicitees: _vm.facilites_sollicitees,
      cautionData: _vm.currentCautionInfoIndex !== null && _vm.currentGarantieId === "caution" ? _vm.garanties.find(function (g) {
        return g.id === "caution";
      }).infos[_vm.currentCautionInfoIndex] : {},
      dossier_credit: _vm.meta_data.dossier_credit,
      currentCautionInfoIndex: _vm.currentCautionInfoIndex
    },
    on: {
      "input-change": _vm.handleCautionModalInput,
      close: _vm.closeFicheCautionModal
    }
  })], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("td", {
    staticClass: "th text-center fw-bold"
  }, [_c("label", [_vm._v("---")])]), _vm._v(" "), _c("th", {
    staticClass: "th text-center fw-bold"
  }, [_vm._v("Type garantie /sûreté")]), _vm._v(" "), _c("th", {
    staticClass: "th text-center fw-bold"
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_c("b", [_vm._v("Commentaire")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/cresco/utils/FicheCautionnementModal.vue?vue&type=template&id=0fd188c4&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/cresco/utils/FicheCautionnementModal.vue?vue&type=template&id=0fd188c4&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$localCautionData, _vm$file_data_list$_v, _vm$file_data_list$_v2, _vm$file_data_list$_v3, _vm$localCautionData2;
  var _vm = this,
    _c = _vm._self._c;
  return _c("modal", {
    attrs: {
      name: "fiche-de-cautionnement",
      width: 900,
      resizable: "",
      height: "auto",
      scrollable: true
    }
  }, [_c("div", {
    staticClass: "modal-content"
  }, [_c("div", {
    staticClass: "memo",
    style: {
      "background-color": _vm.entityColor
    }
  }, [_c("div", {
    staticClass: "container-fluid"
  }, [_c("div", {
    staticClass: "d-flex justify-content-between align-items-center"
  }, [_c("div", [_vm._v("Fiche de cautionnement - Personne physique")]), _vm._v(" "), _c("div", [_c("i", {
    staticClass: "icofont-close",
    attrs: {
      role: "button"
    },
    on: {
      click: _vm.closeModal
    }
  })])])])]), _vm._v(" "), _c("div", {
    staticClass: "p-4",
    staticStyle: {
      "max-height": "80vh",
      overflow: "auto"
    }
  }, [_c("div", {
    staticClass: "card",
    staticStyle: {
      width: "100%",
      margin: "0"
    }
  }, [_c("div", {
    staticClass: "card-body"
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
    "class": "subdiv" + _vm.tb_name,
    attrs: {
      id: "informations-personnelles"
    }
  }, [_vm._v("\n                                INFORMATIONS PERSONNELLES\n                                "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer",
      "margin-left": "10px"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v("Nom du père "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("th", [_vm._v("Nom de la mère "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("th", [_vm._v("Lieu d'habitation "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("th", [_vm._v("Date de naissance "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("th", [_vm._v("Lieu de naissance "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("th", [_vm._v("Sexe "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("th", [_vm._v("Téléphone "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("th", [_vm._v("Type de pièce "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("th", [_vm._v("N° de la pièce "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("th", [_vm._v("\n                                                Date de délivrance de la\n                                                pièce "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("th", [_vm._v("\n                                                Lieu de délivrance de la\n                                                pièce "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("th", [_vm._v("Uploader la piece d'identité de la caution "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])])])]), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    staticStyle: {
      "min-width": "200px"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.localCautionData.nom_du_pere,
      expression: "\n                                                        localCautionData.nom_du_pere\n                                                    "
    }],
    staticClass: "form-control",
    staticStyle: {
      width: "100%"
    },
    attrs: {
      placeholder: ""
    },
    domProps: {
      value: _vm.localCautionData.nom_du_pere
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.localCautionData, "nom_du_pere", $event.target.value);
      }, function ($event) {
        return _vm.emitInputChange("nom_du_pere", $event);
      }]
    }
  })]), _vm._v(" "), _c("td", {
    staticStyle: {
      "min-width": "200px"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.localCautionData.nom_de_la_mere,
      expression: "\n                                                        localCautionData.nom_de_la_mere\n                                                    "
    }],
    staticClass: "form-control",
    staticStyle: {
      width: "100%"
    },
    attrs: {
      placeholder: ""
    },
    domProps: {
      value: _vm.localCautionData.nom_de_la_mere
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.localCautionData, "nom_de_la_mere", $event.target.value);
      }, function ($event) {
        return _vm.emitInputChange("nom_de_la_mere", $event);
      }]
    }
  })]), _vm._v(" "), _c("td", {
    staticStyle: {
      "min-width": "200px"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.localCautionData.lieu_habitation,
      expression: "\n                                                        localCautionData.lieu_habitation\n                                                    "
    }],
    staticClass: "form-control",
    staticStyle: {
      width: "100%"
    },
    attrs: {
      placeholder: ""
    },
    domProps: {
      value: _vm.localCautionData.lieu_habitation
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.localCautionData, "lieu_habitation", $event.target.value);
      }, function ($event) {
        return _vm.emitInputChange("lieu_habitation", $event);
      }]
    }
  })]), _vm._v(" "), _c("td", {
    staticStyle: {
      "min-width": "245px"
    }
  }, [_c("date-input", {
    attrs: {
      value: _vm.localCautionData.date_naissance,
      id: "date_naissance"
    },
    on: {
      input: function input($event) {
        return _vm.emitInputChange("date_naissance", $event);
      }
    }
  })], 1), _vm._v(" "), _c("td", {
    staticStyle: {
      "min-width": "200px"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.localCautionData.lieu_naissance,
      expression: "\n                                                        localCautionData.lieu_naissance\n                                                    "
    }],
    staticClass: "form-control",
    staticStyle: {
      width: "100%"
    },
    attrs: {
      placeholder: ""
    },
    domProps: {
      value: _vm.localCautionData.lieu_naissance
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.localCautionData, "lieu_naissance", $event.target.value);
      }, function ($event) {
        return _vm.emitInputChange("lieu_naissance", $event);
      }]
    }
  })]), _vm._v(" "), _c("td", {
    staticStyle: {
      "min-width": "150px"
    }
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.localCautionData.sexe,
      expression: "\n                                                        localCautionData.sexe\n                                                    "
    }],
    staticClass: "form-select",
    staticStyle: {
      width: "100%"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.localCautionData, "sexe", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        return _vm.emitInputChange("sexe", $event);
      }]
    }
  }, [_c("option", {
    attrs: {
      value: "",
      disabled: ""
    }
  }), _vm._v(" "), _c("option", {
    attrs: {
      value: "Masculin"
    }
  }, [_vm._v("\n                                                        Homme\n                                                    ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Feminin"
    }
  }, [_vm._v("\n                                                        Femme\n                                                    ")])])]), _vm._v(" "), _c("td", [_c("div", {
    staticStyle: {
      "min-width": "270px"
    }
  }, [_c("phone-input-custom", {
    attrs: {
      modelValue: _vm.localCautionData.telephone,
      id: "telephone",
      defaultIndicatif: _vm.currentIndicatif
    },
    on: {
      change: function change($event) {
        return _vm.emitInputChange("telephone", $event);
      }
    }
  })], 1)]), _vm._v(" "), _c("td", {
    staticStyle: {
      "min-width": "200px"
    }
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.localCautionData.type_piece,
      expression: "\n                                                        localCautionData.type_piece\n                                                    "
    }],
    staticClass: "form-select",
    staticStyle: {
      width: "100%"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.localCautionData, "type_piece", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        return _vm.emitInputChange("type_piece", $event);
      }]
    }
  }, [_c("option", {
    attrs: {
      value: "",
      disabled: ""
    }
  }), _vm._v(" "), _c("option", {
    attrs: {
      value: "CNI"
    }
  }, [_vm._v("\n                                                        Carte nationale\n                                                        d'identité\n                                                    ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Passeport"
    }
  }, [_vm._v("\n                                                        Passeport\n                                                    ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Récépissé CNI"
    }
  }, [_vm._v("\n                                                        Récépissé CNI\n                                                    ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Carte de séjour"
    }
  }, [_vm._v("\n                                                        Carte de séjour\n                                                    ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Carte de résident"
    }
  }, [_vm._v("\n                                                        Carte de résident\n                                                    ")])])]), _vm._v(" "), _c("td", {
    staticStyle: {
      "min-width": "200px"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.localCautionData.piece,
      expression: "\n                                                        localCautionData.piece\n                                                    "
    }],
    staticClass: "form-control",
    staticStyle: {
      width: "100%"
    },
    attrs: {
      placeholder: ""
    },
    domProps: {
      value: _vm.localCautionData.piece
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.localCautionData, "piece", $event.target.value);
      }, function ($event) {
        return _vm.emitInputChange("piece", $event);
      }]
    }
  })]), _vm._v(" "), _c("td", {
    staticStyle: {
      "min-width": "245px"
    }
  }, [_c("date-input", {
    attrs: {
      value: _vm.localCautionData.date_delivrance_piece,
      id: "date_naissance"
    },
    on: {
      input: function input($event) {
        return _vm.emitInputChange("date_delivrance_piece", $event);
      }
    }
  })], 1), _vm._v(" "), _c("td", {
    staticStyle: {
      "min-width": "200px"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.localCautionData.lieu_delivration,
      expression: "\n                                                        localCautionData.lieu_delivration\n                                                    "
    }],
    staticClass: "form-control",
    staticStyle: {
      width: "100%"
    },
    attrs: {
      placeholder: ""
    },
    domProps: {
      value: _vm.localCautionData.lieu_delivration
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.localCautionData, "lieu_delivration", $event.target.value);
      }, function ($event) {
        return _vm.emitInputChange("lieu_delivration", $event);
      }]
    }
  })]), _vm._v(" "), _c("td", {
    staticStyle: {
      "min-width": "200px"
    }
  }, [_c("div", {
    staticClass: "d-flex justify-content-center"
  }, [((_vm$localCautionData = _vm.localCautionData) === null || _vm$localCautionData === void 0 ? void 0 : _vm$localCautionData.files) > 0 ? _c("div", [_vm.showBtnDownload ? _c("div", [((_vm$file_data_list$_v = _vm.file_data_list[_vm.currentCautionInfoIndex]) === null || _vm$file_data_list$_v === void 0 ? void 0 : _vm$file_data_list$_v.length) > 0 ? [!_vm.showAllFiles[_vm.currentCautionInfoIndex] ? _vm._l((_vm$file_data_list$_v2 = _vm.file_data_list[_vm.currentCautionInfoIndex]) === null || _vm$file_data_list$_v2 === void 0 ? void 0 : _vm$file_data_list$_v2.slice(0, _vm.showMoreNumber), function (file, fileIndex) {
    return _c("div", {
      key: fileIndex + "xa",
      staticClass: "mb-2 nowrap"
    }, [_c("span", {
      staticClass: "p-1 px-2 mx-2 text-nowrap",
      staticStyle: {
        color: "black",
        "font-size": "13px",
        "border-radius": "5px",
        "margin-left": "0 !important",
        width: "150px"
      },
      attrs: {
        title: file.file_name
      }
    }, [_c("i", {
      "class": _vm.getIcon(file === null || file === void 0 ? void 0 : file.file_ext)
    }), _vm._v(" " + _vm._s(_vm.formatFileName(file === null || file === void 0 ? void 0 : file.file_name)) + "\n                                                                        ")]), _vm._v(" "), _c("span", {
      staticClass: "p-1 px-2 text-nowrap",
      staticStyle: {
        color: "black",
        "font-size": "13px",
        border: "1px solid rgb(44, 62, 80)",
        "border-radius": "5px",
        "margin-left": "0 !important",
        width: "150px",
        cursor: "pointer"
      },
      attrs: {
        "data-toggle": "tooltip",
        title: "Télécharger le fichier"
      },
      on: {
        click: function click($event) {
          return _vm.downloadFile(_vm.currentCautionInfoIndex, fileIndex);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-download"
    })]), _vm._v(" "), _c("span", {
      staticClass: "p-1 px-2 text-nowrap",
      staticStyle: {
        color: "black",
        "font-size": "13px",
        border: "1px solid rgb(44, 62, 80)",
        "border-radius": "5px",
        "margin-left": "0 !important",
        width: "150px",
        cursor: "pointer"
      },
      attrs: {
        "data-toggle": "tooltip",
        title: "Supprimer le fichier"
      },
      on: {
        click: function click($event) {
          return _vm.deleteFile({
            id: file.file_id,
            file_url: file.file_url
          }, _vm.currentCautionInfoIndex);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-ui-delete"
    })])]);
  }) : _vm._e(), _vm._v(" "), _vm.showAllFiles[_vm.currentCautionInfoIndex] ? _vm._l(_vm.file_data_list[_vm.currentCautionInfoIndex], function (file, fileIndex) {
    return _c("div", {
      key: fileIndex,
      staticClass: "mb-2 nowrap",
      staticStyle: {
        "margin-top": "5px !important"
      }
    }, [_c("span", {
      staticClass: "p-1 px-2 mx-2 text-nowrap",
      staticStyle: {
        color: "black",
        "font-size": "13px",
        "border-radius": "5px",
        "margin-left": "0 !important",
        width: "150px",
        cursor: "pointer"
      }
    }, [_c("i", {
      "class": _vm.getIcon(file === null || file === void 0 ? void 0 : file.file_ext)
    }), _vm._v(" " + _vm._s(_vm.formatFileName(file === null || file === void 0 ? void 0 : file.file_name)) + "\n                                                                        ")]), _vm._v(" "), _c("span", {
      staticClass: "p-1 px-2 text-nowrap btn btn-primary shadow-md text-white",
      staticStyle: {
        color: "black",
        "font-size": "13px",
        "border-radius": "5px",
        "margin-left": "0 !important",
        width: "150px",
        cursor: "pointer",
        background: "#2c3e50 !important",
        padding: "1px"
      },
      attrs: {
        "data-toggle": "tooltip",
        title: "Télécharger le fichier"
      },
      on: {
        click: function click($event) {
          return _vm.downloadFile(_vm.currentCautionInfoIndex, fileIndex);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-download"
    })]), _vm._v(" "), _c("span", {
      staticClass: "p-1 px-2 text-nowrap",
      staticStyle: {
        color: "black",
        "font-size": "13px",
        border: "1px solid rgb(44, 62, 80)",
        "border-radius": "5px",
        "margin-left": "0 !important",
        width: "150px",
        cursor: "pointer"
      },
      attrs: {
        "data-toggle": "tooltip",
        title: "Supprimer le fichier"
      },
      on: {
        click: function click($event) {
          return _vm.deleteFile({
            id: file.file_id,
            file_url: file.file_url
          }, _vm.currentCautionInfoIndex);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-ui-delete"
    })])]);
  }) : _vm._e(), _vm._v(" "), ((_vm$file_data_list$_v3 = _vm.file_data_list[_vm.currentCautionInfoIndex]) === null || _vm$file_data_list$_v3 === void 0 ? void 0 : _vm$file_data_list$_v3.length) > _vm.showMoreNumber ? _c("a", {
    staticStyle: {
      "font-size": "13px",
      color: "#bc872b",
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        return _vm.onChangeStateShowAll(_vm.currentCautionInfoIndex);
      }
    }
  }, [_c("span", {
    staticClass: "showT"
  }, [_vm._v(_vm._s(_vm.showAllFiles[_vm.currentCautionInfoIndex] ? "reduire" : "Voir plus"))])]) : _vm._e()] : [_c("span", {
    staticClass: "spinner-border"
  })]], 2) : _c("div", [_c("span", {
    staticClass: "spinner-border spinner-border-sm"
  })])]) : _vm._e(), _vm._v(" "), ((_vm$localCautionData2 = _vm.localCautionData) === null || _vm$localCautionData2 === void 0 ? void 0 : _vm$localCautionData2.files) < 1 ? _c("div", {
    staticStyle: {
      "margin-left": "5px"
    }
  }, [_c("button", {
    staticClass: "btn shadow-md text-white",
    staticStyle: {
      cursor: "pointer",
      background: "#2c3e50",
      width: "50px",
      height: "30px",
      border: "1px solid rgb(44, 62, 80)",
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
        return _vm.handleDoubleClickOrClick($event, _vm.currentCautionInfoIndex);
      }
    }
  }, [_c("i", {
    staticClass: "icofont-attachment"
  })])]) : _vm._e()])])])])])])])]) : _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen1 = !_vm.seen1;
      }
    }
  }, [_c("h6", {
    attrs: {
      id: "informations-personnelles"
    }
  }, [_vm._v("\n                                INFORMATIONS PERSONNELLES\n                                "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer",
      "margin-left": "10px"
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
    "class": "subdiv" + _vm.tb_name,
    attrs: {
      id: "informations-professionnelles"
    }
  }, [_vm._v("\n                                INFORMATIONS PROFESSIONNELLES\n                                "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer",
      "margin-left": "10px"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v("Fonction actuelle")]), _vm._v(" "), _c("th", [_vm._v("Nom employeur")]), _vm._v(" "), _c("th", [_vm._v("Boite postale employeur")])])]), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_c("div", {
    staticClass: "d-flex position-relative flex-column",
    staticStyle: {
      "padding-bottom": "50px"
    }
  }, [_c("Multiselect", {
    "class": {
      "bg-blue": ["tb_120503", "tb_14072"].includes(_vm.localCautionData.comeFrom)
    },
    staticStyle: {
      height: "42px",
      "border-color": "#34495e",
      color: "#57606f",
      "font-size": "13px",
      "font-weight": "bold",
      "min-width": "200px"
    },
    attrs: {
      searchable: true,
      trackBy: "libelle",
      label: "libelle",
      "value-prop": "libelle",
      id: "fonction",
      classes: {
        optionPointed: "text-gray-800 bg-gray-100"
      },
      options: _vm.professions_
    },
    on: {
      select: _vm.selectedOptionFonction
    },
    scopedSlots: _vm._u([{
      key: "option",
      fn: function fn(_ref) {
        var option = _ref.option;
        return [_c("p", {
          staticClass: "multiselect-option"
        }, [_vm._v("\n                                                                " + _vm._s(option.libelle) + "\n                                                            ")])];
      }
    }, {
      key: "singlelabel",
      fn: function fn(_ref2) {
        var value = _ref2.value;
        return [_c("p", {
          staticClass: "multiselect-single-label"
        }, [_vm._v("\n                                                                " + _vm._s(value.libelle) + "\n                                                            ")])];
      }
    }], null, false, 3430927076),
    model: {
      value: _vm.localCautionData.fonction,
      callback: function callback($$v) {
        _vm.$set(_vm.localCautionData, "fonction", $$v);
      },
      expression: "\n                                                            localCautionData.fonction\n                                                        "
    }
  }), _vm._v(" "), _vm.localCautionData.fonction === "Autre" ? _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.localCautionData.fonctionAutre,
      expression: "\n                                                            localCautionData.fonctionAutre\n                                                        "
    }],
    staticClass: "form-control mt-2",
    attrs: {
      type: "text",
      placeholder: "Préciser la fonction"
    },
    domProps: {
      value: _vm.localCautionData.fonctionAutre
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.localCautionData, "fonctionAutre", $event.target.value);
      }, function ($event) {
        return _vm.emitInputChange("fonctionAutre", $event);
      }]
    }
  }) : _vm._e()], 1)]), _vm._v(" "), _c("td", {
    staticStyle: {
      "vertical-align": "baseline",
      "min-width": "200px"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.localCautionData.nomEmployeur,
      expression: "\n                                                        localCautionData.nomEmployeur\n                                                    "
    }],
    staticClass: "form-control",
    "class": {
      "bg-blue": ["tb_120503", "tb_14072"].includes(_vm.localCautionData.comeFrom)
    },
    staticStyle: {
      width: "100%"
    },
    domProps: {
      value: _vm.localCautionData.nomEmployeur
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.localCautionData, "nomEmployeur", $event.target.value);
      }, function ($event) {
        return _vm.emitInputChange("nomEmployeur", $event);
      }]
    }
  })]), _vm._v(" "), _c("td", {
    staticStyle: {
      "vertical-align": "baseline",
      "min-width": "200px"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.localCautionData.bpEmployeur,
      expression: "localCautionData.bpEmployeur"
    }],
    staticClass: "form-control",
    "class": {
      "bg-blue": ["tb_120503", "tb_14072"].includes(_vm.localCautionData.comeFrom)
    },
    staticStyle: {
      width: "100%"
    },
    domProps: {
      value: _vm.localCautionData.bpEmployeur
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.localCautionData, "bpEmployeur", $event.target.value);
      }, function ($event) {
        return _vm.emitInputChange("bpEmployeur", $event);
      }]
    }
  })])])])])])])]) : _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen2 = !_vm.seen2;
      }
    }
  }, [_c("h6", {
    attrs: {
      id: "informations-professionnelles"
    }
  }, [_vm._v("\n                                INFORMATIONS PROFESSIONNELLES\n                                "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer",
      "margin-left": "10px"
    },
    attrs: {
      size: "21"
    }
  })], 1)])]), _vm._v(" "), _vm.seen3 ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen3 = !_vm.seen3;
      }
    }
  }, [_c("h6", {
    "class": "subdiv" + _vm.tb_name,
    attrs: {
      id: "informations-financieres-cautionnement"
    }
  }, [_vm._v("\n                                INFORMATIONS FINANCIÈRES DE LA CAUTION\n                                "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer",
      "margin-left": "10px"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "table-responsive mt-3"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_c("thead", [_c("tr", [_c("td", {
    staticClass: "th fw-bold text-center"
  }, [_c("label", [_vm._v("Type d'avoirs /\n                                                    investissements")])]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold text-center"
  }, [_c("label", [_vm._v("Valeur / Montant")])]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  })])]), _vm._v(" "), _c("tbody", _vm._l(_vm.localCautionData.avoirsInvestissements, function (condition, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: condition.label,
        expression: "\n                                                        condition.label\n                                                    "
      }],
      staticClass: "form-control",
      staticStyle: {
        "min-width": "250px"
      },
      attrs: {
        type: "text",
        id: index + "label"
      },
      domProps: {
        value: condition.label
      },
      on: {
        change: function change($event) {
          return _vm.emitInputChange("avoirsInvestissements", condition);
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(condition, "label", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("currency-input2", {
      attrs: {
        value: condition.value
      },
      on: {
        input: function input($event) {
          return _vm.updateAvoirValue($event, index);
        }
      }
    })], 1), _vm._v(" "), index == 0 ? _c("td", {
      staticClass: "text-center"
    }, [_c("button", {
      staticStyle: {
        "background-color": "#2c3e50",
        color: "#ffffff",
        "border-radius": "15%",
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Ajouter"
      },
      on: {
        click: _vm.addAvoir
      }
    }, [_c("plus-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)]) : _c("td", {
      staticClass: "text-center"
    }, [_c("button", {
      staticStyle: {
        "background-color": "transparent",
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Supprimer"
      },
      on: {
        click: function click($event) {
          return _vm.removeAvoir(index);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)])]);
  }), 0)])])])]) : _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen3 = !_vm.seen3;
      }
    }
  }, [_c("h6", {
    attrs: {
      id: "informations-financieres-cautionnement"
    }
  }, [_vm._v("\n                                INFORMATIONS FINANCIÈRES DE LA CAUTION\n                                "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer",
      "margin-left": "10px"
    },
    attrs: {
      size: "21"
    }
  })], 1)])]), _vm._v(" "), _vm.seen4 ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen4 = !_vm.seen4;
      }
    }
  }, [_c("h6", {
    "class": "subdiv" + _vm.tb_name,
    attrs: {
      id: "divers"
    }
  }, [_vm._v("\n                                DIVERS\n                                "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer",
      "margin-left": "10px"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "mb-3"
  }, [_c("vue-editor", {
    attrs: {
      id: "bref_incident_a_signaler"
    },
    on: {
      "update-value": _vm.updateBrefIncident
    },
    model: {
      value: _vm.localCautionData.commentaire,
      callback: function callback($$v) {
        _vm.$set(_vm.localCautionData, "commentaire", $$v);
      },
      expression: "localCautionData.commentaire"
    }
  })], 1)])]) : _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen4 = !_vm.seen4;
      }
    }
  }, [_c("h6", {
    attrs: {
      id: "divers"
    }
  }, [_vm._v("\n                                DIVERS\n                                "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer",
      "margin-left": "10px"
    },
    attrs: {
      size: "21"
    }
  })], 1)])])])])]), _vm._v(" "), _c("div", {
    staticClass: "text-right p-2"
  }, [_c("button", {
    staticClass: "btn",
    staticStyle: {
      background: "rgb(44, 62, 80)",
      color: "white"
    },
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.closeModal
    }
  }, [_vm._v("\n                Fermer\n            ")])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/cresco/utils/GarantieTable.vue?vue&type=template&id=29e7ff97&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/cresco/utils/GarantieTable.vue?vue&type=template&id=29e7ff97&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table mb-5 table-bordered"
  }, [_c("thead", [_c("tr", {
    staticClass: "text-center justify-content-center"
  }, [_c("td"), _vm._v(" "), _vm._l(_vm.colonnesAffichees, function (label, index) {
    return _c("td", {
      key: index,
      staticClass: "th fw-bold vertical-middle"
    }, [_c("label", {
      domProps: {
        innerHTML: _vm._s(label)
      }
    })]);
  }), _vm._v(" "), _c("td"), _vm._v(" "), _c("td", [_vm.garantieId == "caution" ? [_c("button", {
    staticStyle: {
      "background-color": "#2c3e50",
      color: "#ffffff",
      "border-radius": "15%",
      border: "none"
    },
    attrs: {
      type: "button",
      title: "Ajouter un nouvel ensemble"
    },
    on: {
      click: function click($event) {
        return _vm.$emit("add-info");
      }
    }
  }, [_c("plus-icon", {
    staticClass: "custom-class",
    attrs: {
      size: "21"
    }
  })], 1)] : _vm._e()], 2)], 2)]), _vm._v(" "), _c("tbody", _vm._l(_vm.localInfos, function (info, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_vm._v(_vm._s(index + 1) + ".")]), _vm._v(" "), _vm.garantieId === "avi" ? _c("td", [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: info.ligneCredit,
        expression: "info.ligneCredit"
      }],
      staticClass: "form-select",
      "class": {
        "bg-blue": ["tb_120008", "tb_14072"].includes(info.comeFrom)
      },
      staticStyle: {
        width: "250px"
      },
      attrs: {
        id: "type_facilite_" + _vm.garantieId + "_" + index
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(info, "ligneCredit", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.handleInput("ligneCredit", index, $event);
        }]
      }
    }, [_c("option", {
      attrs: {
        disabled: "",
        selected: "",
        value: ""
      }
    }, [_vm._v("--Sélectionner une option--")]), _vm._v(" "), _vm._l(_vm.facilitesSollicitees, function (option, optIndex) {
      return _c("option", {
        key: optIndex,
        domProps: {
          value: option.uuid
        }
      }, [_vm._v("\n              " + _vm._s(option.type_facilite + "-" + option.montant_credit) + "\n            ")]);
    })], 2)]) : _vm._e(), _vm._v(" "), _vm.garantieId === "avi" ? _c("td", [_c("currency-input2", {
      "class": {
        equipe: _vm.comeFrom == "tb_120008"
      },
      staticStyle: {
        width: "250px"
      },
      attrs: {
        value: info.montant,
        id: "montant_" + index
      },
      on: {
        input: function input($event) {
          return _vm.formDataVars($event, index);
        }
      }
    })], 1) : _vm._e(), _vm._v(" "), _vm.garantieId === "avi" ? _c("td", {
      staticClass: "text-center align-middle"
    }, [_c("div", {
      staticClass: "file-field"
    }, [info.ligneCredit ? _c("div", {
      staticClass: "d-flex align-items-center justify-content-center gap-2"
    }, [info.files > 0 ? _c("span", {
      staticClass: "badge text-nowrap",
      staticStyle: {
        "background-color": "#2c3e50",
        color: "white",
        "font-size": "13px",
        "border-radius": "5px",
        "margin-left": "0 !important",
        width: "150px"
      }
    }, [_vm._v("\n                " + _vm._s(info.files) + " fichier(s) uploadé(s)\n              ")]) : _vm._e(), _vm._v(" "), _c("button", {
      staticClass: "btn btn-sm shadow-md text-white d-flex align-items-center justify-content-center",
      staticStyle: {
        background: "#2c3e50",
        width: "26px",
        "font-size": "13px"
      },
      attrs: {
        type: "button",
        "data-toggle": "tooltip",
        title: "Cliquer ici pour uploader ou voir le(s) fichier(s)"
      },
      on: {
        click: function click($event) {
          return _vm.$emit("upload-file", {
            index: index
          });
        }
      }
    }, [_c("i", {
      staticClass: "icofont-attachment"
    })]), _vm._v(" "), info.is_recueillie === "Non" && info.files === 0 && !info.template ? _c("div", {
      staticClass: "invalid-feedback fw-bold d-block",
      staticStyle: {
        "font-size": "0.7rem",
        width: "190px"
      }
    }, [_vm._v("\n                Attention ! En cas de garantie non recueillie, la pièce est obligatoire.\n              ")]) : _vm._e()]) : _c("div", {
      staticClass: "text-danger text-center"
    }, [_vm._v("\n              Aucun fichier(s) uploadé(s)\n            ")])])]) : _vm._e(), _vm._v(" "), _vm.garantieId === "avi" ? _c("td", {
      staticStyle: {
        "align-content": "center"
      }
    }, [_c("div", {
      staticClass: "d-flex justify-content-center"
    }, [_c("div", {
      staticStyle: {
        display: "flex"
      }
    }, [_c("label", {
      attrs: {
        "for": "recueillie_oui"
      }
    }, [_vm._v("Oui")]), _vm._v(" "), _c("input", {
      attrs: {
        type: "checkbox",
        value: "Oui",
        id: "is_recueillie"
      },
      domProps: {
        checked: info.is_recueillie == "Oui"
      },
      on: {
        input: function input($event) {
          return _vm.handleIsCollectedChange("is_recueillie", index, $event);
        }
      }
    })]), _vm._v(" "), _c("div", {
      staticStyle: {
        display: "flex"
      }
    }, [_c("label", {
      attrs: {
        "for": "recueillie_non"
      }
    }, [_vm._v("Non")]), _vm._v(" "), _c("input", {
      attrs: {
        type: "checkbox",
        value: "Non",
        id: "is_recueillie"
      },
      domProps: {
        checked: info.is_recueillie == "Non"
      },
      on: {
        input: function input($event) {
          return _vm.handleIsCollectedChange("is_recueillie", index, $event);
        }
      }
    })])])]) : _vm._e(), _vm._v(" "), _vm.garantieId === "avi" ? _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: info.commentaire,
        expression: "info.commentaire"
      }],
      staticClass: "form-control",
      "class": {
        equipe: _vm.comeFrom == "tb_120008"
      },
      staticStyle: {
        width: "250px"
      },
      domProps: {
        value: info.commentaire
      },
      on: {
        change: function change($event) {
          return _vm.handleCommentaireChange("commentaire", index, $event);
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(info, "commentaire", $event.target.value);
        }
      }
    })]) : _vm._e(), _vm._v(" "), _vm.garantieId === "assurance" ? _c("td", [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: info.ligneCredit,
        expression: "info.ligneCredit"
      }],
      staticClass: "form-select",
      "class": {
        "bg-blue": ["tb_120008", "tb_14072"].includes(info.comeFrom)
      },
      staticStyle: {
        width: "250px"
      },
      attrs: {
        id: "type_facilite_" + _vm.garantieId + "_" + index
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(info, "ligneCredit", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.handleInput("ligneCredit", index, $event);
        }]
      }
    }, [_c("option", {
      attrs: {
        disabled: "",
        selected: "",
        value: ""
      }
    }, [_vm._v("--Sélectionner une option--")]), _vm._v(" "), _vm._l(_vm.facilitesSollicitees, function (option, optIndex) {
      return _c("option", {
        key: optIndex,
        domProps: {
          value: option.uuid
        }
      }, [_vm._v("\n              " + _vm._s(option.type_facilite + "-" + option.montant_credit) + "\n            ")]);
    })], 2)]) : _vm._e(), _vm._v(" "), _vm.garantieId === "assurance" ? _c("td", [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: info.typeAssurance,
        expression: "info.typeAssurance"
      }],
      staticClass: "form-select",
      "class": {
        "bg-blue": ["tb_120008", "tb_14072"].includes(info.comeFrom)
      },
      staticStyle: {
        width: "250px"
      },
      attrs: {
        id: "assuranceTypes_" + _vm.garantieId + "_" + index
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(info, "typeAssurance", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.handleInput("typeAssurance", index, $event);
        }]
      }
    }, [_c("option", {
      attrs: {
        disabled: "",
        selected: "",
        value: ""
      }
    }, [_vm._v("--Sélectionner une option--")]), _vm._v(" "), _vm._l(_vm.assuranceTypes, function (option, optIndex) {
      return _c("option", {
        key: optIndex + "_" + optIndex,
        domProps: {
          value: option
        }
      }, [_vm._v("\n              " + _vm._s(option) + "\n            ")]);
    })], 2)]) : _vm._e(), _vm._v(" "), _vm.garantieId === "assurance" ? _c("td", [_c("currency-input2", {
      "class": {
        equipe: _vm.comeFrom == "tb_120008"
      },
      staticStyle: {
        width: "250px"
      },
      attrs: {
        value: info.valeurAssuree,
        id: "valeurAssuree_" + index
      },
      on: {
        input: function input($event) {
          return _vm.formDataVars($event, index);
        }
      }
    })], 1) : _vm._e(), _vm._v(" "), _vm.garantieId === "assurance" ? _c("td", {
      staticClass: "text-center align-middle"
    }, [_c("div", {
      staticClass: "file-field"
    }, [info.ligneCredit ? _c("div", {
      staticClass: "d-flex align-items-center justify-content-center gap-2"
    }, [info.files > 0 ? _c("span", {
      staticClass: "badge text-nowrap",
      staticStyle: {
        "background-color": "#2c3e50",
        color: "white",
        "font-size": "13px",
        "border-radius": "5px",
        "margin-left": "0 !important",
        width: "150px"
      }
    }, [_vm._v("\n                " + _vm._s(info.files) + " fichier(s) uploadé(s)\n              ")]) : _vm._e(), _vm._v(" "), _c("button", {
      staticClass: "btn btn-sm shadow-md text-white d-flex align-items-center justify-content-center",
      staticStyle: {
        background: "#2c3e50",
        width: "26px",
        "font-size": "13px"
      },
      attrs: {
        type: "button",
        "data-toggle": "tooltip",
        title: "Cliquer ici pour uploader ou voir le(s) fichier(s)"
      },
      on: {
        click: function click($event) {
          return _vm.$emit("upload-file", {
            index: index
          });
        }
      }
    }, [_c("i", {
      staticClass: "icofont-attachment"
    })]), _vm._v(" "), info.is_recueillie === "Non" && info.files === 0 && !info.template ? _c("div", {
      staticClass: "invalid-feedback fw-bold d-block",
      staticStyle: {
        "font-size": "0.7rem",
        width: "190px"
      }
    }, [_vm._v("\n                Attention ! En cas de garantie non recueillie, la pièce est obligatoire.\n              ")]) : _vm._e()]) : _c("div", {
      staticClass: "text-danger text-center"
    }, [_vm._v("\n              Aucun fichier(s) uploadé(s)\n            ")])])]) : _vm._e(), _vm._v(" "), _vm.garantieId === "assurance" ? _c("td", {
      staticStyle: {
        "align-content": "center"
      }
    }, [_c("div", {
      staticClass: "d-flex justify-content-center"
    }, [_c("div", {
      staticStyle: {
        display: "flex"
      }
    }, [_c("label", {
      attrs: {
        "for": "recueillie_oui"
      }
    }, [_vm._v("Oui")]), _vm._v(" "), _c("input", {
      attrs: {
        type: "checkbox",
        value: "Oui",
        id: "is_recueillie"
      },
      domProps: {
        checked: info.is_recueillie == "Oui"
      },
      on: {
        input: function input($event) {
          return _vm.handleIsCollectedChange("is_recueillie", index, $event);
        }
      }
    })]), _vm._v(" "), _c("div", {
      staticStyle: {
        display: "flex"
      }
    }, [_c("label", {
      attrs: {
        "for": "recueillie_non"
      }
    }, [_vm._v("Non")]), _vm._v(" "), _c("input", {
      attrs: {
        type: "checkbox",
        value: "Non",
        id: "is_recueillie"
      },
      domProps: {
        checked: info.is_recueillie == "Non"
      },
      on: {
        input: function input($event) {
          return _vm.handleIsCollectedChange("is_recueillie", index, $event);
        }
      }
    })])])]) : _vm._e(), _vm._v(" "), _vm.garantieId === "assurance" ? _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: info.commentaire,
        expression: "info.commentaire"
      }],
      staticClass: "form-control",
      "class": {
        equipe: _vm.comeFrom == "tb_120008"
      },
      staticStyle: {
        width: "250px"
      },
      domProps: {
        value: info.commentaire
      },
      on: {
        change: function change($event) {
          return _vm.handleCommentaireChange("commentaire", index, $event);
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(info, "commentaire", $event.target.value);
        }
      }
    })]) : _vm._e(), _vm._v(" "), _vm.garantieId === "caution" ? _c("td", [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: info.ligneCredit,
        expression: "info.ligneCredit"
      }],
      staticClass: "form-select",
      "class": {
        equipe: _vm.comeFrom == "tb_120008"
      },
      staticStyle: {
        width: "250px"
      },
      attrs: {
        id: "type_facilite_" + _vm.garantieId + "_" + index
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(info, "ligneCredit", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.handleInput("ligneCredit", index, $event);
        }]
      }
    }, [_c("option", {
      attrs: {
        disabled: "",
        value: ""
      }
    }, [_vm._v("--Sélectionner une option--")]), _vm._v(" "), _vm.facilitesSollicitees && _vm.facilitesSollicitees.length ? _vm._l(_vm.facilitesSollicitees, function (option, optIndex) {
      return _c("option", {
        key: optIndex,
        domProps: {
          value: option.uuid
        }
      }, [_vm._v("\n                  " + _vm._s(option.type_facilite || "") + " - " + _vm._s(option.montant_credit || 0) + "\n                ")]);
    }) : _c("option", {
      attrs: {
        disabled: ""
      }
    }, [_vm._v("Aucune facilité disponible")])], 2)]) : _vm._e(), _vm._v(" "), _vm.garantieId === "caution" ? _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: info.firstname,
        expression: "info.firstname"
      }],
      staticClass: "form-control",
      "class": {
        equipe: _vm.comeFrom == "tb_120008"
      },
      staticStyle: {
        width: "250px"
      },
      attrs: {
        type: "text"
      },
      domProps: {
        value: info.firstname
      },
      on: {
        change: function change($event) {
          return _vm.handleInput("firstname", index, $event);
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(info, "firstname", $event.target.value);
        }
      }
    })]) : _vm._e(), _vm._v(" "), _vm.garantieId === "caution" ? _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: info.lastname,
        expression: "info.lastname"
      }],
      staticClass: "form-control",
      "class": {
        equipe: _vm.comeFrom == "tb_120008"
      },
      staticStyle: {
        width: "250px"
      },
      attrs: {
        type: "text"
      },
      domProps: {
        value: info.lastname
      },
      on: {
        change: function change($event) {
          return _vm.handleInput("lastname", index, $event);
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(info, "lastname", $event.target.value);
        }
      }
    })]) : _vm._e(), _vm._v(" "), _vm.garantieId === "caution" ? _c("td", {
      staticStyle: {
        "align-content": "center"
      }
    }, [_c("div", {
      staticClass: "d-flex justify-content-center"
    }, [_c("div", {
      staticStyle: {
        display: "flex"
      }
    }, [_c("label", {
      attrs: {
        "for": "isPrincipalOui" + _vm.garantieId + index
      }
    }, [_vm._v("Oui")]), _vm._v(" "), _c("input", {
      attrs: {
        type: "checkbox",
        value: "Oui",
        id: "isPrincipalOui" + _vm.garantieId + index,
        disabled: _vm.isDisabled(index)
      },
      domProps: {
        checked: info.isPrincipal == "Oui"
      },
      on: {
        input: function input($event) {
          return _vm.handleIsCautionPrincipalChange("isPrincipal", index, $event);
        }
      }
    })]), _vm._v(" "), _c("div", {
      staticStyle: {
        display: "flex"
      }
    }, [_c("label", {
      attrs: {
        "for": "isPrincipalNon" + _vm.garantieId + index
      }
    }, [_vm._v("Non")]), _vm._v(" "), _c("input", {
      attrs: {
        type: "checkbox",
        value: "Non",
        id: "isPrincipalNon" + _vm.garantieId + index,
        disabled: _vm.isDisabled(index)
      },
      domProps: {
        checked: info.isPrincipal == "Non"
      },
      on: {
        input: function input($event) {
          return _vm.handleIsCautionPrincipalChange("isPrincipal", index, $event);
        }
      }
    })])])]) : _vm._e(), _vm._v(" "), _vm.garantieId === "caution" ? _c("td", {
      staticStyle: {
        "align-content": "center"
      }
    }, [_c("div", {
      staticClass: "d-flex justify-content-center"
    }, [_c("div", {
      staticStyle: {
        display: "flex"
      }
    }, [_c("label", {
      attrs: {
        "for": "recueillie_oui"
      }
    }, [_vm._v("Oui")]), _vm._v(" "), _c("input", {
      attrs: {
        type: "checkbox",
        value: "Oui",
        id: "is_recueillie"
      },
      domProps: {
        checked: info.is_recueillie == "Oui"
      },
      on: {
        input: function input($event) {
          return _vm.handleIsCollectedChange("is_recueillie", index, $event);
        }
      }
    })]), _vm._v(" "), _c("div", {
      staticStyle: {
        display: "flex"
      }
    }, [_c("label", {
      attrs: {
        "for": "recueillie_non"
      }
    }, [_vm._v("Non")]), _vm._v(" "), _c("input", {
      attrs: {
        type: "checkbox",
        value: "Non",
        id: "is_recueillie"
      },
      domProps: {
        checked: info.is_recueillie == "Non"
      },
      on: {
        input: function input($event) {
          return _vm.handleIsCollectedChange("is_recueillie", index, $event);
        }
      }
    })])])]) : _vm._e(), _vm._v(" "), _vm.garantieId === "caution" ? _c("td", [_c("currency-input2", {
      "class": {
        equipe: _vm.comeFrom == "tb_120008"
      },
      staticStyle: {
        width: "250px"
      },
      attrs: {
        value: info.valeur_caution,
        id: "valeur_caution_" + index
      },
      on: {
        input: function input($event) {
          return _vm.formDataVars($event, index);
        }
      }
    })], 1) : _vm._e(), _vm._v(" "), _vm.garantieId === "caution" ? _c("td", {
      staticStyle: {
        "text-align": "center",
        "vertical-align": "middle"
      }
    }, [_c("button", {
      staticStyle: {
        "background-color": "#2c3e50",
        color: "#ffffff",
        "border-radius": "15%",
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Fiche de cautionnement"
      },
      on: {
        click: function click($event) {
          return _vm.$emit("edit-caution-info", index);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-file-alt"
    })])]) : _vm._e(), _vm._v(" "), _vm.garantieId === "hypotheque" ? _c("td", [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: info.ligneCredit,
        expression: "info.ligneCredit"
      }],
      staticClass: "form-select",
      "class": {
        equipe: _vm.comeFrom == "tb_120008"
      },
      staticStyle: {
        width: "250px"
      },
      attrs: {
        id: "type_facilite_" + _vm.garantieId + "_" + index
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(info, "ligneCredit", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.handleInput("ligneCredit", index, $event);
        }]
      }
    }, [_c("option", {
      attrs: {
        disabled: "",
        value: ""
      }
    }, [_vm._v("--Sélectionner une option--")]), _vm._v(" "), _vm.facilitesSollicitees && _vm.facilitesSollicitees.length ? _vm._l(_vm.facilitesSollicitees, function (option, optIndex) {
      return _c("option", {
        key: optIndex,
        domProps: {
          value: option.uuid
        }
      }, [_vm._v("\n                " + _vm._s(option.type_facilite || "") + " - " + _vm._s(option.montant_credit || 0) + "\n              ")]);
    }) : _c("option", {
      attrs: {
        disabled: ""
      }
    }, [_vm._v("Aucune facilité disponible")])], 2)]) : _vm._e(), _vm._v(" "), _vm.garantieId === "hypotheque" ? _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: info.bien_hypotheque,
        expression: "info.bien_hypotheque"
      }],
      staticClass: "form-control",
      "class": {
        equipe: _vm.comeFrom == "tb_120008"
      },
      staticStyle: {
        width: "250px"
      },
      attrs: {
        type: "text"
      },
      domProps: {
        value: info.bien_hypotheque
      },
      on: {
        change: function change($event) {
          return _vm.handleInput("bien_hypotheque", index, $event);
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(info, "bien_hypotheque", $event.target.value);
        }
      }
    })]) : _vm._e(), _vm._v(" "), _vm.garantieId === "hypotheque" ? _c("td", [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: info.rang,
        expression: "info.rang"
      }],
      staticClass: "form-select",
      "class": {
        equipe: _vm.comeFrom == "tb_120008"
      },
      staticStyle: {
        width: "250px"
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(info, "rang", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.handleInput("rang", index, $event);
        }]
      }
    }, [_c("option", {
      attrs: {
        disabled: "",
        selected: "",
        value: ""
      }
    }, [_vm._v("Sélectionner un rang")]), _vm._v(" "), _vm._l(["1er rang", "2ème rang", "3ème rang"], function (option) {
      return _c("option", {
        key: option,
        domProps: {
          value: option
        }
      }, [_vm._v("\n              " + _vm._s(option) + "\n            ")]);
    })], 2)]) : _vm._e(), _vm._v(" "), _vm.garantieId === "hypotheque" ? _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: info.proprietaire,
        expression: "info.proprietaire"
      }],
      staticClass: "form-control",
      "class": {
        equipe: _vm.comeFrom == "tb_120008"
      },
      staticStyle: {
        width: "250px"
      },
      attrs: {
        type: "text"
      },
      domProps: {
        value: info.proprietaire
      },
      on: {
        change: function change($event) {
          return _vm.handleInput("proprietaire", index, $event);
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(info, "proprietaire", $event.target.value);
        }
      }
    })]) : _vm._e(), _vm._v(" "), _vm.garantieId === "hypotheque" ? _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: info.numero_tel,
        expression: "info.numero_tel"
      }],
      staticClass: "form-control",
      "class": {
        equipe: _vm.comeFrom == "tb_120008"
      },
      staticStyle: {
        width: "250px"
      },
      attrs: {
        type: "text"
      },
      domProps: {
        value: info.numero_tel
      },
      on: {
        change: function change($event) {
          return _vm.handleInput("numero_tel", index, $event);
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(info, "numero_tel", $event.target.value);
        }
      }
    })]) : _vm._e(), _vm._v(" "), _vm.garantieId === "hypotheque" ? _c("td", [_c("date-input", {
      "class": {
        equipe: _vm.comeFrom == "tb_120008"
      },
      staticStyle: {
        width: "250px"
      },
      attrs: {
        value: info.annee_achat
      },
      on: {
        input: function input($event) {
          return _vm.setDateInput("annee_achat", index, $event);
        }
      }
    })], 1) : _vm._e(), _vm._v(" "), _vm.garantieId === "hypotheque" ? _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: info.adresse_emplacement,
        expression: "info.adresse_emplacement"
      }],
      staticClass: "form-control",
      "class": {
        equipe: _vm.comeFrom == "tb_120008"
      },
      staticStyle: {
        width: "250px"
      },
      attrs: {
        type: "text"
      },
      domProps: {
        value: info.adresse_emplacement
      },
      on: {
        change: function change($event) {
          return _vm.handleInput("adresse_emplacement", index, $event);
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(info, "adresse_emplacement", $event.target.value);
        }
      }
    })]) : _vm._e(), _vm._v(" "), _vm.garantieId === "hypotheque" ? _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: info.longitude,
        expression: "info.longitude"
      }],
      staticClass: "form-control",
      "class": {
        equipe: _vm.comeFrom == "tb_120008"
      },
      staticStyle: {
        width: "250px"
      },
      attrs: {
        type: "text"
      },
      domProps: {
        value: info.longitude
      },
      on: {
        change: function change($event) {
          return _vm.handleInput("longitude", index, $event);
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(info, "longitude", $event.target.value);
        }
      }
    })]) : _vm._e(), _vm._v(" "), _vm.garantieId === "hypotheque" ? _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: info.latitude,
        expression: "info.latitude"
      }],
      staticClass: "form-control",
      "class": {
        equipe: _vm.comeFrom == "tb_120008"
      },
      staticStyle: {
        width: "250px"
      },
      attrs: {
        type: "text"
      },
      domProps: {
        value: info.latitude
      },
      on: {
        change: function change($event) {
          return _vm.handleInput("latitude", index, $event);
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(info, "latitude", $event.target.value);
        }
      }
    })]) : _vm._e(), _vm._v(" "), _vm.garantieId === "hypotheque" ? _c("td", [_c("date-input", {
      "class": {
        equipe: _vm.comeFrom == "tb_120008"
      },
      staticStyle: {
        width: "250px"
      },
      attrs: {
        value: info.date_evaluation
      },
      on: {
        input: function input($event) {
          return _vm.setDateInput("date_evaluation", index, $event);
        }
      }
    })], 1) : _vm._e(), _vm._v(" "), _vm.garantieId === "hypotheque" ? _c("td", [_c("currency-input2", {
      "class": {
        equipe: _vm.comeFrom == "tb_120008"
      },
      staticStyle: {
        width: "250px"
      },
      attrs: {
        value: info.valeur_marchande,
        id: "valeur_marchande_" + index
      },
      on: {
        input: function input($event) {
          return _vm.formDataVars($event, index);
        }
      }
    })], 1) : _vm._e(), _vm._v(" "), _vm.garantieId === "hypotheque" ? _c("td", [_c("currency-input2", {
      "class": {
        equipe: _vm.comeFrom == "tb_120008"
      },
      staticStyle: {
        width: "250px"
      },
      attrs: {
        value: info.valeur_considere,
        id: "valeur_considere_" + index
      },
      on: {
        input: function input($event) {
          return _vm.formDataVars($event, index);
        }
      }
    })], 1) : _vm._e(), _vm._v(" "), _vm.garantieId === "hypotheque" ? _c("td", {
      staticClass: "text-center",
      staticStyle: {
        "align-content": "center"
      }
    }, [_c("div", {
      staticClass: "file-field"
    }, [info.ligneCredit ? _c("div", {
      staticClass: "d-flex align-items-center"
    }, [info.files > 0 ? _c("span", {
      staticClass: "p-1 px-2 mx-2 text-nowrap",
      staticStyle: {
        "background-color": "rgb(44, 62, 80)",
        color: "white",
        "font-size": "13px",
        "border-radius": "5px",
        "margin-left": "0 !important",
        width: "150px"
      }
    }, [_vm._v("\n                " + _vm._s(info.files > 0 ? info.files + " fichier(s) uploadé(s)" : "") + "\n              ")]) : _vm._e(), _vm._v(" "), info.ligneCredit ? _c("button", {
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
        "data-toggle": "tooltip",
        title: "Cliquer ici pour uploader ou voir le(s) fichier(s)"
      },
      on: {
        click: function click($event) {
          return _vm.$emit("upload-file", {
            index: index
          });
        }
      }
    }, [_c("i", {
      staticClass: "icofont-attachment"
    })]) : _vm._e()]) : _c("div", {
      staticClass: "text-center text-danger"
    }, [_vm._v("\n              Aucun fichier(s) uploadé(s)\n            ")])])]) : _vm._e(), _vm._v(" "), _vm.garantieId === "hypotheque" ? _c("td", {
      staticStyle: {
        "align-content": "center"
      }
    }, [_c("div", {
      staticClass: "d-flex justify-content-center"
    }, [_c("div", {
      staticStyle: {
        display: "flex"
      }
    }, [_c("label", {
      attrs: {
        "for": "recueillie_oui"
      }
    }, [_vm._v("Oui")]), _vm._v(" "), _c("input", {
      attrs: {
        type: "checkbox",
        value: "Oui",
        id: "is_recueillie"
      },
      domProps: {
        checked: info.is_recueillie == "Oui"
      },
      on: {
        input: function input($event) {
          return _vm.handleIsCollectedChange("is_recueillie", index, $event);
        }
      }
    })]), _vm._v(" "), _c("div", {
      staticStyle: {
        display: "flex"
      }
    }, [_c("label", {
      attrs: {
        "for": "recueillie_non"
      }
    }, [_vm._v("Non")]), _vm._v(" "), _c("input", {
      attrs: {
        type: "checkbox",
        value: "Non",
        id: "is_recueillie"
      },
      domProps: {
        checked: info.is_recueillie == "Non"
      },
      on: {
        input: function input($event) {
          return _vm.handleIsCollectedChange("is_recueillie", index, $event);
        }
      }
    })])])]) : _vm._e(), _vm._v(" "), _vm.garantieId === "gage" ? _c("td", [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: info.ligneCredit,
        expression: "info.ligneCredit"
      }],
      staticClass: "form-select",
      "class": {
        equipe: _vm.comeFrom == "tb_120008"
      },
      staticStyle: {
        width: "250px"
      },
      attrs: {
        id: "type_facilite_" + _vm.garantieId + "_" + index
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(info, "ligneCredit", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.handleInput("ligneCredit", index, $event);
        }]
      }
    }, [_c("option", {
      attrs: {
        disabled: "",
        value: ""
      }
    }, [_vm._v("--Sélectionner une option--")]), _vm._v(" "), _vm.facilitesSollicitees && _vm.facilitesSollicitees.length ? _vm._l(_vm.facilitesSollicitees, function (option, optIndex) {
      return _c("option", {
        key: optIndex,
        domProps: {
          value: option.uuid
        }
      }, [_vm._v("\n                " + _vm._s(option.type_facilite || "") + " - " + _vm._s(option.montant_credit || 0) + "\n              ")]);
    }) : _c("option", {
      attrs: {
        disabled: ""
      }
    }, [_vm._v("Aucune facilité disponible")])], 2)]) : _vm._e(), _vm._v(" "), _vm.garantieId === "gage" ? _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: info.bienGage,
        expression: "info.bienGage"
      }],
      staticClass: "form-control",
      "class": {
        equipe: _vm.comeFrom == "tb_120008"
      },
      staticStyle: {
        width: "250px"
      },
      domProps: {
        value: info.bienGage
      },
      on: {
        change: function change($event) {
          return _vm.handleInput("bienGage", index, $event);
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(info, "bienGage", $event.target.value);
        }
      }
    })]) : _vm._e(), _vm._v(" "), _vm.garantieId === "gage" ? _c("td", [_c("currency-input2", {
      "class": {
        equipe: _vm.comeFrom == "tb_120008"
      },
      staticStyle: {
        width: "250px"
      },
      attrs: {
        value: info.montant,
        id: "montant_" + index
      },
      on: {
        input: function input($event) {
          return _vm.formDataVars($event, index);
        }
      }
    })], 1) : _vm._e(), _vm._v(" "), _vm.garantieId === "gage" ? _c("td", {
      staticClass: "text-center",
      staticStyle: {
        "align-content": "center"
      }
    }, [_c("div", {
      staticClass: "file-field"
    }, [info.ligneCredit ? _c("div", {
      staticClass: "d-flex align-items-center"
    }, [info.files > 0 ? _c("span", {
      staticClass: "p-1 px-2 mx-2 text-nowrap",
      staticStyle: {
        "background-color": "rgb(44, 62, 80)",
        color: "white",
        "font-size": "13px",
        "border-radius": "5px",
        "margin-left": "0 !important",
        width: "150px"
      }
    }, [_vm._v("\n                " + _vm._s(info.files > 0 ? info.files + " fichier(s) uploadé(s)" : "") + "\n              ")]) : _vm._e(), _vm._v(" "), info.ligneCredit ? _c("button", {
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
        "data-toggle": "tooltip",
        title: "Cliquer ici pour uploader ou voir le(s) fichier(s)"
      },
      on: {
        click: function click($event) {
          return _vm.$emit("upload-file", {
            index: index
          });
        }
      }
    }, [_c("i", {
      staticClass: "icofont-attachment"
    })]) : _vm._e()]) : _c("div", {
      staticClass: "text-center text-danger"
    }, [_vm._v("\n              Aucun fichier(s) uploadé(s)\n            ")])])]) : _vm._e(), _vm._v(" "), _vm.garantieId === "gage" ? _c("td", {
      staticStyle: {
        "align-content": "center"
      }
    }, [_c("div", {
      staticClass: "d-flex justify-content-center"
    }, [_c("div", {
      staticStyle: {
        display: "flex"
      }
    }, [_c("label", {
      attrs: {
        "for": "recueillie_oui"
      }
    }, [_vm._v("Oui")]), _vm._v(" "), _c("input", {
      attrs: {
        type: "checkbox",
        value: "Oui",
        id: "is_recueillie"
      },
      domProps: {
        checked: info.is_recueillie == "Oui"
      },
      on: {
        input: function input($event) {
          return _vm.handleIsCollectedChange("is_recueillie", index, $event);
        }
      }
    })]), _vm._v(" "), _c("div", {
      staticStyle: {
        display: "flex"
      }
    }, [_c("label", {
      attrs: {
        "for": "recueillie_non"
      }
    }, [_vm._v("Non")]), _vm._v(" "), _c("input", {
      attrs: {
        type: "checkbox",
        value: "Non",
        id: "is_recueillie"
      },
      domProps: {
        checked: info.is_recueillie == "Non"
      },
      on: {
        input: function input($event) {
          return _vm.handleIsCollectedChange("is_recueillie", index, $event);
        }
      }
    })])])]) : _vm._e(), _vm._v(" "), _vm.garantieId === "gage" ? _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: info.commentaire,
        expression: "info.commentaire"
      }],
      staticClass: "form-control",
      "class": {
        equipe: _vm.comeFrom == "tb_120008"
      },
      staticStyle: {
        width: "250px"
      },
      domProps: {
        value: info.commentaire
      },
      on: {
        change: function change($event) {
          return _vm.handleCommentaireChange("commentaire", index, $event);
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(info, "commentaire", $event.target.value);
        }
      }
    })]) : _vm._e(), _vm._v(" "), ["cash_collateral", "divers"].includes(_vm.garantieId) || !_vm.defaultGarantieIds.includes(_vm.garantieId) ? _c("td", [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: info.ligneCredit,
        expression: "info.ligneCredit"
      }],
      staticClass: "form-select",
      "class": {
        equipe: _vm.comeFrom == "tb_120008"
      },
      staticStyle: {
        width: "250px"
      },
      attrs: {
        id: "type_facilite_" + _vm.garantieId + "_" + index
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(info, "ligneCredit", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.handleInput("ligneCredit", index, $event);
        }]
      }
    }, [_c("option", {
      attrs: {
        disabled: "",
        value: ""
      }
    }, [_vm._v("--Sélectionner une option--")]), _vm._v(" "), _vm.facilitesSollicitees && _vm.facilitesSollicitees.length ? _vm._l(_vm.facilitesSollicitees, function (option, optIndex) {
      return _c("option", {
        key: optIndex,
        domProps: {
          value: option.uuid
        }
      }, [_vm._v("\n                  " + _vm._s(option.type_facilite || "") + " - " + _vm._s(option.montant_credit || 0) + "\n                ")]);
    }) : _c("option", {
      attrs: {
        disabled: ""
      }
    }, [_vm._v("Aucune facilité disponible")])], 2)]) : _vm._e(), _vm._v(" "), ["cash_collateral", "divers"].includes(_vm.garantieId) || !_vm.defaultGarantieIds.includes(_vm.garantieId) ? _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: info.description,
        expression: "info.description"
      }],
      staticClass: "form-control",
      "class": {
        equipe: _vm.comeFrom == "tb_120008"
      },
      staticStyle: {
        width: "250px"
      },
      domProps: {
        value: info.description
      },
      on: {
        change: function change($event) {
          return _vm.handleInput("description", index, $event);
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(info, "description", $event.target.value);
        }
      }
    })]) : _vm._e(), _vm._v(" "), ["cash_collateral", "divers"].includes(_vm.garantieId) || !_vm.defaultGarantieIds.includes(_vm.garantieId) ? _c("td", [_c("currency-input2", {
      "class": {
        equipe: _vm.comeFrom == "tb_120008"
      },
      staticStyle: {
        width: "250px"
      },
      attrs: {
        value: info.montant,
        id: "montant_" + index
      },
      on: {
        input: function input($event) {
          return _vm.formDataVarsCash($event, index, _vm.garantieId);
        }
      }
    })], 1) : _vm._e(), _vm._v(" "), ["cash_collateral"].includes(_vm.garantieId) || !_vm.defaultGarantieIds.includes(_vm.garantieId) ? _c("td", [_c("input-group", {
      staticStyle: {
        "min-width": "110px"
      },
      scopedSlots: _vm._u([{
        key: "input",
        fn: function fn() {
          return [_c("currency-input", {
            attrs: {
              value: info.percent,
              max: 100,
              "float": "",
              percentage: "",
              id: "percent_" + index
            },
            on: {
              input: function input($event) {
                return _vm.formDataVarsCash($event, index, _vm.garantieId);
              }
            }
          })];
        },
        proxy: true
      }, {
        key: "right",
        fn: function fn() {
          return [_vm._v("%")];
        },
        proxy: true
      }], null, true)
    })], 1) : _vm._e(), _vm._v(" "), ["cash_collateral", "divers"].includes(_vm.garantieId) || !_vm.defaultGarantieIds.includes(_vm.garantieId) ? _c("td", {
      staticClass: "text-center",
      staticStyle: {
        "align-content": "center"
      }
    }, [_c("div", {
      staticClass: "file-field"
    }, [info.ligneCredit ? _c("div", {
      staticClass: "d-flex align-items-center"
    }, [info.files > 0 ? _c("span", {
      staticClass: "p-1 px-2 mx-2 text-nowrap",
      staticStyle: {
        "background-color": "rgb(44, 62, 80)",
        color: "white",
        "font-size": "13px",
        "border-radius": "5px",
        "margin-left": "0 !important",
        width: "150px"
      }
    }, [_vm._v("\n                " + _vm._s(info.files > 0 ? info.files + " fichier(s) uploadé(s)" : "") + "\n              ")]) : _vm._e(), _vm._v(" "), info.ligneCredit ? _c("button", {
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
        "data-toggle": "tooltip",
        title: "Cliquer ici pour uploader ou voir le(s) fichier(s)"
      },
      on: {
        click: function click($event) {
          return _vm.$emit("upload-file", {
            index: index
          });
        }
      }
    }, [_c("i", {
      staticClass: "icofont-attachment"
    })]) : _vm._e()]) : _c("div", {
      staticClass: "text-center text-danger"
    }, [_vm._v("\n              Aucun fichier(s) uploadé(s)\n            ")])])]) : _vm._e(), _vm._v(" "), ["cash_collateral", "divers"].includes(_vm.garantieId) || !_vm.defaultGarantieIds.includes(_vm.garantieId) ? _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: info.commentaire,
        expression: "info.commentaire"
      }],
      staticClass: "form-control",
      "class": {
        equipe: _vm.comeFrom == "tb_120008"
      },
      staticStyle: {
        width: "250px"
      },
      domProps: {
        value: info.commentaire
      },
      on: {
        change: function change($event) {
          return _vm.handleCommentaireChange("commentaire", index, $event);
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(info, "commentaire", $event.target.value);
        }
      }
    })]) : _vm._e(), _vm._v(" "), ["cash_collateral", "divers"].includes(_vm.garantieId) || !_vm.defaultGarantieIds.includes(_vm.garantieId) ? _c("td", {
      staticStyle: {
        "align-content": "center"
      }
    }, [_c("div", {
      staticClass: "d-flex justify-content-center"
    }, [_c("div", {
      staticStyle: {
        display: "flex"
      }
    }, [_c("label", {
      attrs: {
        "for": "recueillie_oui"
      }
    }, [_vm._v("Oui")]), _vm._v(" "), _c("input", {
      attrs: {
        type: "checkbox",
        value: "Oui",
        id: "is_recueillie"
      },
      domProps: {
        checked: info.is_recueillie == "Oui"
      },
      on: {
        input: function input($event) {
          return _vm.handleIsCollectedChange("is_recueillie", index, $event);
        }
      }
    })]), _vm._v(" "), _c("div", {
      staticStyle: {
        display: "flex"
      }
    }, [_c("label", {
      attrs: {
        "for": "recueillie_non"
      }
    }, [_vm._v("Non")]), _vm._v(" "), _c("input", {
      attrs: {
        type: "checkbox",
        value: "Non",
        id: "is_recueillie"
      },
      domProps: {
        checked: info.is_recueillie == "Non"
      },
      on: {
        input: function input($event) {
          return _vm.handleIsCollectedChange("is_recueillie", index, $event);
        }
      }
    })])])]) : _vm._e(), _vm._v(" "), _c("td", [_vm.garantieId == "caution" ? [_c("button", {
      staticStyle: {
        "background-color": "transparent",
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Supprimer"
      },
      on: {
        click: function click($event) {
          return _vm.$emit("remove-info", index);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)] : [index === 0 ? _c("button", {
      staticStyle: {
        "background-color": "#2c3e50",
        color: "#ffffff",
        "border-radius": "15%",
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Ajouter un nouvel ensemble"
      },
      on: {
        click: function click($event) {
          return _vm.$emit("add-info");
        }
      }
    }, [_c("plus-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1) : _c("button", {
      staticStyle: {
        "background-color": "transparent",
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Supprimer"
      },
      on: {
        click: function click($event) {
          return _vm.$emit("remove-info", index);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)]], 2)]);
  }), 0)])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/MothAndYearInput.vue?vue&type=template&id=67421d8a&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/MothAndYearInput.vue?vue&type=template&id=67421d8a&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", _vm._b({
    ref: _vm.id,
    staticClass: "d-flex",
    staticStyle: {
      "min-width": "72%"
    }
  }, "div", _vm.$attrs, false), [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.month,
      expression: "month"
    }],
    staticClass: "mx-1 flex-2 form-control",
    "class": _vm.classname,
    style: _vm.background + ";" + _vm.color,
    attrs: {
      disabled: _vm.readonly_ || _vm.viewonly
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.month = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, _vm.handleInput]
    }
  }, [!_vm.readonly_ && !_vm.viewonly ? _c("option", {
    attrs: {
      selected: "",
      disabled: "",
      value: ""
    }
  }, [_vm._v("MM")]) : _vm._e(), _vm._v(" "), !_vm.readonly_ ? _c("option", {
    attrs: {
      value: ""
    }
  }) : _vm._e(), _vm._v(" "), _vm._l(_vm.months, function (el, index) {
    return _c("option", {
      key: index,
      domProps: {
        value: el.value
      }
    }, [_vm._v("\n      " + _vm._s(el.intitule) + "\n    ")]);
  })], 2), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.year,
      expression: "year"
    }],
    staticClass: "form-control flex-1",
    "class": _vm.classname,
    style: "min-width: 45px;" + _vm.background + ";" + _vm.color,
    attrs: {
      type: "text",
      readonly: _vm.readonly_ || _vm.viewonly,
      placeholder: "AAAA",
      maxlength: "4"
    },
    domProps: {
      value: _vm.year
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.year = $event.target.value;
      }, _vm.handleInput]
    }
  })]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PhoneInput.vue?vue&type=template&id=27e5a94b&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PhoneInput.vue?vue&type=template&id=27e5a94b&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "input-group"
  }, [_c("div", {
    staticClass: "input-group-prepend d-flex w-100"
  }, [_c("div", {
    staticClass: "position-relative",
    staticStyle: {
      width: "100px",
      "border-radius": "0"
    }
  }, [_c("div", [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.query,
      expression: "query"
    }],
    staticClass: "form-control shadow-none",
    staticStyle: {
      "border-radius": "0"
    },
    attrs: {
      disabled: _vm.isDisabled,
      type: "text",
      placeholder: "+"
    },
    domProps: {
      value: _vm.query
    },
    on: {
      focusout: function focusout($event) {
        _vm.opened = false;
      },
      focusin: function focusin($event) {
        _vm.opened = true;
      },
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.query = $event.target.value;
      }, _vm.filterItems]
    }
  })]), _vm._v(" "), _vm.opened || _vm.stayOpened ? _c("div", {
    staticClass: "options w-100 bg-white shadow-sm overflow-x-hidden overflow-auto",
    staticStyle: {
      "max-height": "350px"
    }
  }, [_c("ul", {
    staticClass: "list-group border-0",
    on: {
      mouseover: function mouseover($event) {
        _vm.stayOpened = true;
      },
      mouseleave: function mouseleave($event) {
        _vm.stayOpened = false;
      }
    }
  }, _vm._l(_vm.filteredItems, function (item, index) {
    return _c("li", {
      key: index,
      staticClass: "list-group-item p-1 border-top-0 border-left-0 border-right-0",
      "class": {
        "rounded-bottom": index === _vm.filteredItems.length - 1,
        "rounded-0": index !== _vm.filteredItems.length - 1
      },
      attrs: {
        role: "button"
      },
      on: {
        click: function click($event) {
          return _vm.onUpdate(item.indicatif);
        }
      }
    }, [_c("div", {
      staticClass: "d-flex align-items-center justify-item-start"
    }, [_c("span", {
      staticStyle: {
        "font-size": "14px"
      }
    }, [_vm._v(_vm._s(item.indicatif))])])]);
  }), 0)]) : _vm._e()]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.numberData,
      expression: "numberData"
    }],
    staticClass: "form-control w-100 rounded-l-0 shadow-none",
    staticStyle: {
      "border-radius": "0"
    },
    attrs: {
      disabled: _vm.isDisabled,
      type: "tel",
      placeholder: "Numéro de téléphone"
    },
    domProps: {
      value: _vm.numberData
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.numberData = $event.target.value;
      }
    }
  })])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PhoneInputCustom.vue?vue&type=template&id=309843c8&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PhoneInputCustom.vue?vue&type=template&id=309843c8&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "input-group"
  }, [_c("div", {
    staticClass: "input-group-prepend d-flex w-100"
  }, [_c("div", {
    staticClass: "position-relative",
    staticStyle: {
      width: "100px",
      "border-radius": "0"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.query,
      expression: "query"
    }],
    staticClass: "form-control shadow-none",
    staticStyle: {
      "border-radius": ".375rem 0 0 .375rem",
      "border-right": "0"
    },
    attrs: {
      disabled: _vm.isDisabled,
      type: "text"
    },
    domProps: {
      value: _vm.query
    },
    on: {
      focus: _vm.onFocus,
      blur: _vm.onBlur,
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.query = $event.target.value;
      }, _vm.emitPhone]
    }
  }), _vm._v(" "), _vm.opened ? _c("div", {
    staticClass: "options w-100 bg-white shadow-sm",
    staticStyle: {
      "max-height": "300px",
      overflow: "auto"
    }
  }, [_c("ul", {
    staticClass: "list-group"
  }, _vm._l(_vm.filteredItems, function (item, index) {
    return _c("li", {
      key: index,
      staticClass: "list-group-item p-1",
      "class": {
        "rounded-bottom": index === _vm.filteredItems.length - 1,
        "rounded-0": index !== _vm.filteredItems.length - 1
      },
      on: {
        mousedown: function mousedown($event) {
          $event.preventDefault();
          return _vm.selectIndicatif(item.indicatif);
        }
      }
    }, [_vm._v("\n                        " + _vm._s(item.indicatif) + "\n                    ")]);
  }), 0)]) : _vm._e()]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.numberData,
      expression: "numberData"
    }],
    staticClass: "form-control w-100 rounded-l-0 shadow-none",
    staticStyle: {
      "border-radius": "0 .375rem .375rem 0px"
    },
    attrs: {
      disabled: _vm.isDisabled,
      type: "tel"
    },
    domProps: {
      value: _vm.numberData
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.numberData = $event.target.value;
      }, _vm.emitPhone]
    }
  })])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/cresco/DCPP-CS3.vue?vue&type=style&index=0&id=33ab029a&lang=css&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/cresco/DCPP-CS3.vue?vue&type=style&index=0&id=33ab029a&lang=css&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-33ab029a] {\r\n    font-family: \"Google sans\";\n}\nlabel[data-v-33ab029a] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ninput[data-v-33ab029a],\r\nselect[data-v-33ab029a],\r\ntextarea[data-v-33ab029a] {\r\n    /* height: 35px; */\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n.th[data-v-33ab029a] {\r\n    padding: 4px;\r\n    padding-bottom: 0px;\n}\n.card-width-height[data-v-33ab029a] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-33ab029a] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-33ab029a] {\r\n    background-color: #57606f;\n}\n.relook-header[data-v-33ab029a] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\n.badge-sm[data-v-33ab029a] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\n.imageM22[data-v-33ab029a] {\r\n    background: url(\"/images/capture_cofina/exemple_source_revenus.png\") no-repeat;\r\n    background-position: center;\r\n    background-size: contain;\r\n    width: 1000px;\r\n    height: 200px;\n}\ntd[data-v-33ab029a],\r\np[data-v-33ab029a] {\r\n    font-size: 13px;\n}\n.relook-header[data-v-33ab029a] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\n.width-100[data-v-33ab029a] {\r\n    width: 90%;\n}\n.personne input[data-v-33ab029a] {\r\n    width: 135px;\n}\n._border_right[data-v-33ab029a] {\r\n    border-right: 1px solid;\n}\n.text-red[data-v-33ab029a] {\r\n    color: red;\n}\n.multiselect-option p[data-v-33ab029a] {\r\n    margin: 0 !important;\r\n    padding: 10px !important;\n}\n.vertical-middle[data-v-33ab029a] {\r\n    vertical-align: middle;\n}\ninput[type=\"checkbox\"][data-v-33ab029a] {\r\n    height: 18px;\r\n    width: 20px;\r\n    margin-right: 5px;\n}\n.revenu input[type=\"checkbox\"][data-v-33ab029a],\r\n.engagement input[type=\"checkbox\"][data-v-33ab029a],\r\n.garantie input[type=\"checkbox\"][data-v-33ab029a] {\r\n    height: 26px;\r\n    width: 24px;\r\n    margin-right: 5px;\n}\n.mt-2_5-px[data-v-33ab029a] {\r\n    margin-top: 2.5px;\n}\n.readonly-checkbox[data-v-33ab029a] {\r\n    -webkit-appearance: none;\r\n       -moz-appearance: none;\r\n            appearance: none;\r\n    width: 20px;\r\n    height: 20px;\r\n    border: 2px solid #ccc;\r\n    background-color: #f0f0f0;\r\n    cursor: not-allowed;\n}\r\n\r\n/* MON STYLE */\n.garanties-component[data-v-33ab029a] {\r\n  max-width: 1000px;\r\n  margin: 0 auto;\r\n  padding: 20px;\n}\n.add-garantie[data-v-33ab029a] {\r\n  display: flex;\r\n  gap: 10px;\r\n  margin-bottom: 20px;\n}\n.add-garantie input[data-v-33ab029a] {\r\n  flex: 1;\r\n  padding: 12px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  font-size: 18px;\r\n  height: 48px;\n}\r\n\r\n\r\n/* .add-garantie-btn {\r\n  padding: 12px 16px;\r\n  background-color: #007bff;\r\n  color: white;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  font-size: 18px;\r\n} */\ninput[type=checkbox][data-v-33ab029a] {\r\n    /* Double-sized Checkboxes */\r\n    /* IE */\r\n    /* FF */\r\n    /* Safari and Chrome */\r\n    /* Opera */\r\n    transform: scale(1);\r\n    padding: 10px;\r\n    cursor: pointer;\n}\n.add-garantie-btn[data-v-33ab029a] {\r\n  padding: 8px 16px;\r\n  cursor: pointer;\r\n  background-color: #2c3e50;\r\n  color: #ffffff;\r\n  border-radius: 15%;\r\n  border: none;\n}\n.add-garantie-btn[data-v-33ab029a]:hover {\r\n  opacity: 0.9;\n}\n.checkboxes[data-v-33ab029a] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  margin-bottom: 20px;\n}\n.checkbox-item[data-v-33ab029a] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\n}\n.remove-garantie-btn[data-v-33ab029a] {\r\n  background-color: #dc3545;\r\n  color: white;\r\n  border: none;\r\n  border-radius: 50%;\r\n  width: 24px;\r\n  height: 24px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  cursor: pointer;\r\n  font-size: 14px;\n}\n.remove-garantie-btn[data-v-33ab029a]:hover {\r\n  opacity: 0.9;\n}\n.accordion[data-v-33ab029a] {\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  padding: 15px;\r\n  margin-bottom: 15px;\n}\n.accordion-header[data-v-33ab029a] {\r\n  cursor: pointer;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 10px 0;\n}\n.chevron[data-v-33ab029a] {\r\n  display: inline-block;\r\n  width: 0;\r\n  height: 0;\r\n  border-style: solid;\n}\n.chevron-down[data-v-33ab029a] {\r\n  border-width: 6px 6px 0 6px;\r\n  border-color: #000 transparent transparent transparent;\n}\n.chevron-up[data-v-33ab029a] {\r\n  border-width: 0 6px 6px 6px;\r\n  border-color: transparent transparent #000 transparent;\n}\n.accordion-content[data-v-33ab029a] {\r\n  padding-top: 10px;\r\n  margin-bottom: 35px;\n}\r\n\r\n/* .table-responsive {\r\n  overflow-x: auto;\r\n} */\r\n\r\n/* .table {\r\n  width: 100%;\r\n  margin-bottom: 2rem;\r\n} */\r\n\r\n/* .table-borderless {\r\n  border: none;\r\n} */\r\n\r\n/* .th {\r\n  font-weight: bold;\r\n  text-align: left;\r\n}\r\n\r\n.form-control,\r\n.form-select,\r\n.input-date {\r\n  padding: 12px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  width: 100%;\r\n  font-size: 18px;\r\n  height: 48px;\r\n} */\r\n\r\n/* .form-control[readonly] {\r\n  background-color: #e9ecef;\r\n} */\r\n\r\n/* .form-select { */\r\n  /* padding-right: 30px;  */\r\n  /* Espace pour la flèche du select */\r\n/* } */\r\n\r\n/* textarea.form-control {\r\n  height: auto;\r\n  min-height: 100px;\r\n} */\n.file-field[data-v-33ab029a] {\r\n  display: flex;\r\n  flex-direction: column;\n}\n.file-field .d-flex[data-v-33ab029a] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\n}\n.text-end[data-v-33ab029a] {\r\n  text-align: right;\n}\n.text-center[data-v-33ab029a] {\r\n  text-align: center;\n}\n.text-danger[data-v-33ab029a] {\r\n  color: #dc3545;\n}\n.form-check-input[data-v-33ab029a] {\r\n  width: 20px; /* Adjust size as needed */\r\n  height: 20px;\r\n  margin: 5px;\r\n  cursor: pointer;\n}\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/cresco/utils/FicheCautionnementModal.vue?vue&type=style&index=0&id=0fd188c4&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/cresco/utils/FicheCautionnementModal.vue?vue&type=style&index=0&id=0fd188c4&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.modal-content[data-v-0fd188c4] {\r\n    background-color: #fff;\r\n    border: 1px solid rgba(0, 0, 0, 0.2);\r\n    border-radius: 0.3rem;\n}\n.memo[data-v-0fd188c4] {\r\n    padding: 1rem;\r\n    color: white;\n}\n.relook-header h6[data-v-0fd188c4] {\r\n    margin: 0;\r\n    font-size: 1.1rem;\r\n    font-weight: bold;\n}\n.table[data-v-0fd188c4] {\r\n    width: 100%;\r\n    margin-bottom: 1rem;\n}\n.table th[data-v-0fd188c4],\r\n.table td[data-v-0fd188c4] {\r\n    padding: 0.75rem;\r\n    vertical-align: middle;\r\n    border: 1px solid #dee2e6;\n}\n.form-control[data-v-0fd188c4],\r\n.form-select[data-v-0fd188c4] {\r\n    width: 100%;\r\n    padding: 0.375rem 0.75rem;\r\n    font-size: 1rem;\r\n    border: 1px solid #ced4da;\r\n    border-radius: 0.25rem;\n}\n.btn[data-v-0fd188c4] {\r\n    padding: 0.375rem 0.75rem;\r\n    font-size: 1rem;\r\n    border-radius: 0.25rem;\r\n    cursor: pointer;\n}\n.text-right[data-v-0fd188c4] {\r\n    text-align: right;\n}\n.multiselect[data-v-0fd188c4] {\r\n    height: 42px;\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n.is-invalid[data-v-0fd188c4] {\r\n    border-color: #dc3545;\n}\n.invalid-feedback[data-v-0fd188c4] {\r\n    display: block;\r\n    color: #dc3545;\r\n    font-size: 0.875rem;\n}\n.table-responsive[data-v-0fd188c4] {\r\n    overflow-x: auto;\n}\n.form-label[data-v-0fd188c4] {\r\n    font-weight: bold;\n}\n.head[data-v-0fd188c4] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-0fd188c4] {\r\n    background-color: #57606f;\n}\n.relook-header[data-v-0fd188c4] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\n.badge-sm[data-v-0fd188c4] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\ntd[data-v-0fd188c4],\r\np[data-v-0fd188c4] {\r\n    font-size: 13px;\n}\n.relook-header[data-v-0fd188c4] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\n.memo[data-v-0fd188c4] {\r\n    padding: 10px;\r\n    border: 2px solid #fff;\r\n    font-weight: 550;\r\n    font-size: 16px;\r\n    text-transform: uppercase;\r\n    background-color: #dc0030;\r\n    color: #fff;\n}\n.bg-grey[data-v-0fd188c4] {\r\n    background-color: #f4f3f3;\n}\n.container[data-v-0fd188c4] {\r\n    width: 100%;\r\n    max-width: 1000px;\r\n    margin: 0 auto;\n}\n.table th[data-v-0fd188c4],\r\n.table td[data-v-0fd188c4] {\r\n    text-align: center;\r\n    vertical-align: middle;\n}\n.col-question[data-v-0fd188c4] {\r\n    width: 15%;\n}\n.col-attribut[data-v-0fd188c4] {\r\n    width: 35%;\n}\n.col-note[data-v-0fd188c4] {\r\n    width: 10%;\n}\n.col-ponderation[data-v-0fd188c4] {\r\n    width: 10%;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/cresco/utils/GarantieTable.vue?vue&type=style&index=0&id=29e7ff97&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/cresco/utils/GarantieTable.vue?vue&type=style&index=0&id=29e7ff97&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.file-field[data-v-29e7ff97] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\n}\n.file-field .d-flex[data-v-29e7ff97] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\n}\nlabel[data-v-29e7ff97] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ninput[data-v-29e7ff97],\r\nselect[data-v-29e7ff97],\r\ntextarea[data-v-29e7ff97] {\r\n    /* height: 35px; */\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n.th[data-v-29e7ff97] {\r\n    padding: 4px;\r\n    padding-bottom: 0px;\n}\n.card-width-height[data-v-29e7ff97] {\r\n    width: 250px;;\r\n    height: 100%;\n}\n.head[data-v-29e7ff97] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-29e7ff97] {\r\n    background-color: #57606f;\n}\n.relook-header[data-v-29e7ff97] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\n.badge-sm[data-v-29e7ff97] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\n.imageM22[data-v-29e7ff97] {\r\n    background: url(\"/images/capture_cofina/exemple_source_revenus.png\") no-repeat;\r\n    background-position: center;\r\n    background-size: contain;\r\n    width: 1000px;\r\n    height: 200px;\n}\ntd[data-v-29e7ff97],\r\np[data-v-29e7ff97] {\r\n    font-size: 13px;\n}\n.relook-header[data-v-29e7ff97] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\n.width-100[data-v-29e7ff97] {\r\n    width: 90%;\n}\n.personne input[data-v-29e7ff97] {\r\n    width: 135px;\n}\n._border_right[data-v-29e7ff97] {\r\n    border-right: 1px solid;\n}\n.text-red[data-v-29e7ff97] {\r\n    color: red;\n}\n.multiselect-option p[data-v-29e7ff97] {\r\n    margin: 0 !important;\r\n    padding: 10px !important;\n}\n.vertical-middle[data-v-29e7ff97] {\r\n    vertical-align: middle;\n}\ninput[type=\"checkbox\"][data-v-29e7ff97] {\r\n    height: 18px;\r\n    width: 20px;\r\n    margin-right: 5px;\n}\n.revenu input[type=\"checkbox\"][data-v-29e7ff97],\r\n.engagement input[type=\"checkbox\"][data-v-29e7ff97],\r\n.garantie input[type=\"checkbox\"][data-v-29e7ff97] {\r\n    height: 26px;\r\n    width: 24px;\r\n    margin-right: 5px;\n}\n.mt-2_5-px[data-v-29e7ff97] {\r\n    margin-top: 2.5px;\n}\n.readonly-checkbox[data-v-29e7ff97] {\r\n    -webkit-appearance: none;\r\n       -moz-appearance: none;\r\n            appearance: none;\r\n    width: 20px;\r\n    height: 20px;\r\n    border: 2px solid #ccc;\r\n    background-color: #f0f0f0;\r\n    cursor: not-allowed;\n}\n.relook-header[data-v-29e7ff97] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\n.equipe[data-v-29e7ff97]{\r\n    background: #00ffff21;\r\n    color: #000;\n}\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/MothAndYearInput.vue?vue&type=style&index=0&id=67421d8a&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/MothAndYearInput.vue?vue&type=style&index=0&id=67421d8a&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.d-flex[data-v-67421d8a] {\r\n  display: flex !important;\n}\n.flex-1[data-v-67421d8a] {\r\n  flex: 1;\n}\n.flex-2[data-v-67421d8a] {\r\n  flex: 2;\n}\n.mx-1[data-v-67421d8a] {\r\n  margin: 0 0.1rem !important;\n}\ninput[data-v-67421d8a],\r\nselect[data-v-67421d8a] {\r\n  border-color: #34495e;\r\n  color: #57606f;\r\n  font-size: 13px;\r\n  font-weight: bold;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PhoneInput.vue?vue&type=style&index=0&id=27e5a94b&scoped=true&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PhoneInput.vue?vue&type=style&index=0&id=27e5a94b&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.options[data-v-27e5a94b] {\r\n  position: absolute;\r\n  z-index: 1000;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PhoneInputCustom.vue?vue&type=style&index=0&id=309843c8&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PhoneInputCustom.vue?vue&type=style&index=0&id=309843c8&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.options[data-v-309843c8] {\r\n    position: absolute;\r\n    z-index: 1000;\n}\ninput[data-v-309843c8],\r\nselect[data-v-309843c8] {\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/cresco/DCPP-CS3.vue?vue&type=style&index=0&id=33ab029a&lang=css&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/cresco/DCPP-CS3.vue?vue&type=style&index=0&id=33ab029a&lang=css&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP_CS3_vue_vue_type_style_index_0_id_33ab029a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DCPP-CS3.vue?vue&type=style&index=0&id=33ab029a&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/cresco/DCPP-CS3.vue?vue&type=style&index=0&id=33ab029a&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP_CS3_vue_vue_type_style_index_0_id_33ab029a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP_CS3_vue_vue_type_style_index_0_id_33ab029a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/cresco/utils/FicheCautionnementModal.vue?vue&type=style&index=0&id=0fd188c4&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/cresco/utils/FicheCautionnementModal.vue?vue&type=style&index=0&id=0fd188c4&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FicheCautionnementModal_vue_vue_type_style_index_0_id_0fd188c4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FicheCautionnementModal.vue?vue&type=style&index=0&id=0fd188c4&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/cresco/utils/FicheCautionnementModal.vue?vue&type=style&index=0&id=0fd188c4&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FicheCautionnementModal_vue_vue_type_style_index_0_id_0fd188c4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FicheCautionnementModal_vue_vue_type_style_index_0_id_0fd188c4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/cresco/utils/GarantieTable.vue?vue&type=style&index=0&id=29e7ff97&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/cresco/utils/GarantieTable.vue?vue&type=style&index=0&id=29e7ff97&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GarantieTable_vue_vue_type_style_index_0_id_29e7ff97_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GarantieTable.vue?vue&type=style&index=0&id=29e7ff97&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/cresco/utils/GarantieTable.vue?vue&type=style&index=0&id=29e7ff97&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GarantieTable_vue_vue_type_style_index_0_id_29e7ff97_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GarantieTable_vue_vue_type_style_index_0_id_29e7ff97_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/MothAndYearInput.vue?vue&type=style&index=0&id=67421d8a&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/MothAndYearInput.vue?vue&type=style&index=0&id=67421d8a&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MothAndYearInput_vue_vue_type_style_index_0_id_67421d8a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MothAndYearInput.vue?vue&type=style&index=0&id=67421d8a&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/MothAndYearInput.vue?vue&type=style&index=0&id=67421d8a&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MothAndYearInput_vue_vue_type_style_index_0_id_67421d8a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MothAndYearInput_vue_vue_type_style_index_0_id_67421d8a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PhoneInput.vue?vue&type=style&index=0&id=27e5a94b&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PhoneInput.vue?vue&type=style&index=0&id=27e5a94b&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneInput_vue_vue_type_style_index_0_id_27e5a94b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PhoneInput.vue?vue&type=style&index=0&id=27e5a94b&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PhoneInput.vue?vue&type=style&index=0&id=27e5a94b&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneInput_vue_vue_type_style_index_0_id_27e5a94b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneInput_vue_vue_type_style_index_0_id_27e5a94b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PhoneInputCustom.vue?vue&type=style&index=0&id=309843c8&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PhoneInputCustom.vue?vue&type=style&index=0&id=309843c8&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneInputCustom_vue_vue_type_style_index_0_id_309843c8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PhoneInputCustom.vue?vue&type=style&index=0&id=309843c8&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PhoneInputCustom.vue?vue&type=style&index=0&id=309843c8&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneInputCustom_vue_vue_type_style_index_0_id_309843c8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneInputCustom_vue_vue_type_style_index_0_id_309843c8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/forms/afg/cresco/DCPP-CS3.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/forms/afg/cresco/DCPP-CS3.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DCPP_CS3_vue_vue_type_template_id_33ab029a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DCPP-CS3.vue?vue&type=template&id=33ab029a&scoped=true */ "./resources/js/components/forms/afg/cresco/DCPP-CS3.vue?vue&type=template&id=33ab029a&scoped=true");
/* harmony import */ var _DCPP_CS3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DCPP-CS3.vue?vue&type=script&lang=js */ "./resources/js/components/forms/afg/cresco/DCPP-CS3.vue?vue&type=script&lang=js");
/* harmony import */ var _DCPP_CS3_vue_vue_type_style_index_0_id_33ab029a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DCPP-CS3.vue?vue&type=style&index=0&id=33ab029a&lang=css&scoped=true */ "./resources/js/components/forms/afg/cresco/DCPP-CS3.vue?vue&type=style&index=0&id=33ab029a&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DCPP_CS3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DCPP_CS3_vue_vue_type_template_id_33ab029a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _DCPP_CS3_vue_vue_type_template_id_33ab029a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "33ab029a",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/forms/afg/cresco/DCPP-CS3.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/afg/cresco/DCPP-CS3.vue?vue&type=script&lang=js":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/cresco/DCPP-CS3.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP_CS3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DCPP-CS3.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/cresco/DCPP-CS3.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP_CS3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/afg/cresco/DCPP-CS3.vue?vue&type=style&index=0&id=33ab029a&lang=css&scoped=true":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/cresco/DCPP-CS3.vue?vue&type=style&index=0&id=33ab029a&lang=css&scoped=true ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP_CS3_vue_vue_type_style_index_0_id_33ab029a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DCPP-CS3.vue?vue&type=style&index=0&id=33ab029a&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/cresco/DCPP-CS3.vue?vue&type=style&index=0&id=33ab029a&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/forms/afg/cresco/DCPP-CS3.vue?vue&type=template&id=33ab029a&scoped=true":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/cresco/DCPP-CS3.vue?vue&type=template&id=33ab029a&scoped=true ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP_CS3_vue_vue_type_template_id_33ab029a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP_CS3_vue_vue_type_template_id_33ab029a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP_CS3_vue_vue_type_template_id_33ab029a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DCPP-CS3.vue?vue&type=template&id=33ab029a&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/cresco/DCPP-CS3.vue?vue&type=template&id=33ab029a&scoped=true");


/***/ }),

/***/ "./resources/js/components/forms/afg/cresco/utils/FicheCautionnementModal.vue":
/*!************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/cresco/utils/FicheCautionnementModal.vue ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FicheCautionnementModal_vue_vue_type_template_id_0fd188c4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FicheCautionnementModal.vue?vue&type=template&id=0fd188c4&scoped=true */ "./resources/js/components/forms/afg/cresco/utils/FicheCautionnementModal.vue?vue&type=template&id=0fd188c4&scoped=true");
/* harmony import */ var _FicheCautionnementModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FicheCautionnementModal.vue?vue&type=script&lang=js */ "./resources/js/components/forms/afg/cresco/utils/FicheCautionnementModal.vue?vue&type=script&lang=js");
/* harmony import */ var _FicheCautionnementModal_vue_vue_type_style_index_0_id_0fd188c4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FicheCautionnementModal.vue?vue&type=style&index=0&id=0fd188c4&scoped=true&lang=css */ "./resources/js/components/forms/afg/cresco/utils/FicheCautionnementModal.vue?vue&type=style&index=0&id=0fd188c4&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FicheCautionnementModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _FicheCautionnementModal_vue_vue_type_template_id_0fd188c4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _FicheCautionnementModal_vue_vue_type_template_id_0fd188c4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0fd188c4",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/forms/afg/cresco/utils/FicheCautionnementModal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/afg/cresco/utils/FicheCautionnementModal.vue?vue&type=script&lang=js":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/cresco/utils/FicheCautionnementModal.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FicheCautionnementModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FicheCautionnementModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/cresco/utils/FicheCautionnementModal.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FicheCautionnementModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/afg/cresco/utils/FicheCautionnementModal.vue?vue&type=style&index=0&id=0fd188c4&scoped=true&lang=css":
/*!********************************************************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/cresco/utils/FicheCautionnementModal.vue?vue&type=style&index=0&id=0fd188c4&scoped=true&lang=css ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FicheCautionnementModal_vue_vue_type_style_index_0_id_0fd188c4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FicheCautionnementModal.vue?vue&type=style&index=0&id=0fd188c4&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/cresco/utils/FicheCautionnementModal.vue?vue&type=style&index=0&id=0fd188c4&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/forms/afg/cresco/utils/FicheCautionnementModal.vue?vue&type=template&id=0fd188c4&scoped=true":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/cresco/utils/FicheCautionnementModal.vue?vue&type=template&id=0fd188c4&scoped=true ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FicheCautionnementModal_vue_vue_type_template_id_0fd188c4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FicheCautionnementModal_vue_vue_type_template_id_0fd188c4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FicheCautionnementModal_vue_vue_type_template_id_0fd188c4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FicheCautionnementModal.vue?vue&type=template&id=0fd188c4&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/cresco/utils/FicheCautionnementModal.vue?vue&type=template&id=0fd188c4&scoped=true");


/***/ }),

/***/ "./resources/js/components/forms/afg/cresco/utils/GarantieTable.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/forms/afg/cresco/utils/GarantieTable.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GarantieTable_vue_vue_type_template_id_29e7ff97_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GarantieTable.vue?vue&type=template&id=29e7ff97&scoped=true */ "./resources/js/components/forms/afg/cresco/utils/GarantieTable.vue?vue&type=template&id=29e7ff97&scoped=true");
/* harmony import */ var _GarantieTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GarantieTable.vue?vue&type=script&lang=js */ "./resources/js/components/forms/afg/cresco/utils/GarantieTable.vue?vue&type=script&lang=js");
/* harmony import */ var _GarantieTable_vue_vue_type_style_index_0_id_29e7ff97_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GarantieTable.vue?vue&type=style&index=0&id=29e7ff97&scoped=true&lang=css */ "./resources/js/components/forms/afg/cresco/utils/GarantieTable.vue?vue&type=style&index=0&id=29e7ff97&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _GarantieTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _GarantieTable_vue_vue_type_template_id_29e7ff97_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _GarantieTable_vue_vue_type_template_id_29e7ff97_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "29e7ff97",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/forms/afg/cresco/utils/GarantieTable.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/afg/cresco/utils/GarantieTable.vue?vue&type=script&lang=js":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/cresco/utils/GarantieTable.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GarantieTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GarantieTable.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/cresco/utils/GarantieTable.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GarantieTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/afg/cresco/utils/GarantieTable.vue?vue&type=style&index=0&id=29e7ff97&scoped=true&lang=css":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/cresco/utils/GarantieTable.vue?vue&type=style&index=0&id=29e7ff97&scoped=true&lang=css ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GarantieTable_vue_vue_type_style_index_0_id_29e7ff97_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GarantieTable.vue?vue&type=style&index=0&id=29e7ff97&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/cresco/utils/GarantieTable.vue?vue&type=style&index=0&id=29e7ff97&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/forms/afg/cresco/utils/GarantieTable.vue?vue&type=template&id=29e7ff97&scoped=true":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/cresco/utils/GarantieTable.vue?vue&type=template&id=29e7ff97&scoped=true ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GarantieTable_vue_vue_type_template_id_29e7ff97_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GarantieTable_vue_vue_type_template_id_29e7ff97_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GarantieTable_vue_vue_type_template_id_29e7ff97_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GarantieTable.vue?vue&type=template&id=29e7ff97&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/cresco/utils/GarantieTable.vue?vue&type=template&id=29e7ff97&scoped=true");


/***/ }),

/***/ "./resources/js/components/shared/MothAndYearInput.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/shared/MothAndYearInput.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MothAndYearInput_vue_vue_type_template_id_67421d8a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MothAndYearInput.vue?vue&type=template&id=67421d8a&scoped=true */ "./resources/js/components/shared/MothAndYearInput.vue?vue&type=template&id=67421d8a&scoped=true");
/* harmony import */ var _MothAndYearInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MothAndYearInput.vue?vue&type=script&lang=js */ "./resources/js/components/shared/MothAndYearInput.vue?vue&type=script&lang=js");
/* harmony import */ var _MothAndYearInput_vue_vue_type_style_index_0_id_67421d8a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MothAndYearInput.vue?vue&type=style&index=0&id=67421d8a&scoped=true&lang=css */ "./resources/js/components/shared/MothAndYearInput.vue?vue&type=style&index=0&id=67421d8a&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MothAndYearInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _MothAndYearInput_vue_vue_type_template_id_67421d8a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _MothAndYearInput_vue_vue_type_template_id_67421d8a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "67421d8a",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/shared/MothAndYearInput.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/MothAndYearInput.vue?vue&type=script&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/shared/MothAndYearInput.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MothAndYearInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MothAndYearInput.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/MothAndYearInput.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MothAndYearInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/MothAndYearInput.vue?vue&type=style&index=0&id=67421d8a&scoped=true&lang=css":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/shared/MothAndYearInput.vue?vue&type=style&index=0&id=67421d8a&scoped=true&lang=css ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MothAndYearInput_vue_vue_type_style_index_0_id_67421d8a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MothAndYearInput.vue?vue&type=style&index=0&id=67421d8a&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/MothAndYearInput.vue?vue&type=style&index=0&id=67421d8a&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/shared/MothAndYearInput.vue?vue&type=template&id=67421d8a&scoped=true":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/shared/MothAndYearInput.vue?vue&type=template&id=67421d8a&scoped=true ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MothAndYearInput_vue_vue_type_template_id_67421d8a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MothAndYearInput_vue_vue_type_template_id_67421d8a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MothAndYearInput_vue_vue_type_template_id_67421d8a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MothAndYearInput.vue?vue&type=template&id=67421d8a&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/MothAndYearInput.vue?vue&type=template&id=67421d8a&scoped=true");


/***/ }),

/***/ "./resources/js/components/shared/PhoneInput.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/shared/PhoneInput.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PhoneInput_vue_vue_type_template_id_27e5a94b_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PhoneInput.vue?vue&type=template&id=27e5a94b&scoped=true */ "./resources/js/components/shared/PhoneInput.vue?vue&type=template&id=27e5a94b&scoped=true");
/* harmony import */ var _PhoneInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PhoneInput.vue?vue&type=script&lang=js */ "./resources/js/components/shared/PhoneInput.vue?vue&type=script&lang=js");
/* harmony import */ var _PhoneInput_vue_vue_type_style_index_0_id_27e5a94b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PhoneInput.vue?vue&type=style&index=0&id=27e5a94b&scoped=true&lang=css */ "./resources/js/components/shared/PhoneInput.vue?vue&type=style&index=0&id=27e5a94b&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PhoneInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _PhoneInput_vue_vue_type_template_id_27e5a94b_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _PhoneInput_vue_vue_type_template_id_27e5a94b_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "27e5a94b",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/shared/PhoneInput.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/PhoneInput.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/shared/PhoneInput.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PhoneInput.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PhoneInput.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/PhoneInput.vue?vue&type=style&index=0&id=27e5a94b&scoped=true&lang=css":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/shared/PhoneInput.vue?vue&type=style&index=0&id=27e5a94b&scoped=true&lang=css ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneInput_vue_vue_type_style_index_0_id_27e5a94b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PhoneInput.vue?vue&type=style&index=0&id=27e5a94b&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PhoneInput.vue?vue&type=style&index=0&id=27e5a94b&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/shared/PhoneInput.vue?vue&type=template&id=27e5a94b&scoped=true":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/shared/PhoneInput.vue?vue&type=template&id=27e5a94b&scoped=true ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneInput_vue_vue_type_template_id_27e5a94b_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneInput_vue_vue_type_template_id_27e5a94b_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneInput_vue_vue_type_template_id_27e5a94b_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PhoneInput.vue?vue&type=template&id=27e5a94b&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PhoneInput.vue?vue&type=template&id=27e5a94b&scoped=true");


/***/ }),

/***/ "./resources/js/components/shared/PhoneInputCustom.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/shared/PhoneInputCustom.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PhoneInputCustom_vue_vue_type_template_id_309843c8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PhoneInputCustom.vue?vue&type=template&id=309843c8&scoped=true */ "./resources/js/components/shared/PhoneInputCustom.vue?vue&type=template&id=309843c8&scoped=true");
/* harmony import */ var _PhoneInputCustom_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PhoneInputCustom.vue?vue&type=script&lang=js */ "./resources/js/components/shared/PhoneInputCustom.vue?vue&type=script&lang=js");
/* harmony import */ var _PhoneInputCustom_vue_vue_type_style_index_0_id_309843c8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PhoneInputCustom.vue?vue&type=style&index=0&id=309843c8&scoped=true&lang=css */ "./resources/js/components/shared/PhoneInputCustom.vue?vue&type=style&index=0&id=309843c8&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PhoneInputCustom_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _PhoneInputCustom_vue_vue_type_template_id_309843c8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _PhoneInputCustom_vue_vue_type_template_id_309843c8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "309843c8",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/shared/PhoneInputCustom.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/PhoneInputCustom.vue?vue&type=script&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/shared/PhoneInputCustom.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneInputCustom_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PhoneInputCustom.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PhoneInputCustom.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneInputCustom_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/PhoneInputCustom.vue?vue&type=style&index=0&id=309843c8&scoped=true&lang=css":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/shared/PhoneInputCustom.vue?vue&type=style&index=0&id=309843c8&scoped=true&lang=css ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneInputCustom_vue_vue_type_style_index_0_id_309843c8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PhoneInputCustom.vue?vue&type=style&index=0&id=309843c8&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PhoneInputCustom.vue?vue&type=style&index=0&id=309843c8&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/shared/PhoneInputCustom.vue?vue&type=template&id=309843c8&scoped=true":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/shared/PhoneInputCustom.vue?vue&type=template&id=309843c8&scoped=true ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneInputCustom_vue_vue_type_template_id_309843c8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneInputCustom_vue_vue_type_template_id_309843c8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneInputCustom_vue_vue_type_template_id_309843c8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PhoneInputCustom.vue?vue&type=template&id=309843c8&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PhoneInputCustom.vue?vue&type=template&id=309843c8&scoped=true");


/***/ }),

/***/ "./resources/js/helpers/phoneCodes.js":
/*!********************************************!*\
  !*** ./resources/js/helpers/phoneCodes.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  flag: "",
  indicatif: "+93"
},
// Afghanistan
{
  flag: "",
  indicatif: "+27"
},
// South Africa
{
  flag: "",
  indicatif: "+355"
},
// Albania
{
  flag: "",
  indicatif: "+213"
},
// Algeria
{
  flag: "",
  indicatif: "+49"
},
// Germany
{
  flag: "",
  indicatif: "+376"
},
// Andorra
{
  flag: "",
  indicatif: "+244"
},
// Angola
{
  flag: "",
  indicatif: "+1264"
},
// Anguilla
{
  flag: "",
  indicatif: "+1268"
},
// Antigua and Barbuda
{
  flag: "",
  indicatif: "+966"
},
// Saudi Arabia
{
  flag: "",
  indicatif: "+54"
},
// Argentina
{
  flag: "",
  indicatif: "+374"
},
// Armenia
{
  flag: "",
  indicatif: "+297"
},
// Aruba
{
  flag: "",
  indicatif: "+247"
},
// Ascension Island
{
  flag: "",
  indicatif: "+61"
},
// Australia
{
  flag: "",
  indicatif: "+43"
},
// Austria
{
  flag: "",
  indicatif: "+994"
},
// Azerbaijan
{
  flag: "",
  indicatif: "+1242"
},
// Bahamas
{
  flag: "",
  indicatif: "+973"
},
// Bahrain
{
  flag: "",
  indicatif: "+880"
},
// Bangladesh
{
  flag: "",
  indicatif: "+1246"
},
// Barbados
{
  flag: "",
  indicatif: "+32"
},
// Belgium
{
  flag: "",
  indicatif: "+501"
},
// Belize
{
  flag: "",
  indicatif: "+229"
},
// Benin
{
  flag: "",
  indicatif: "+1441"
},
// Bermuda
{
  flag: "",
  indicatif: "+975"
},
// Bhutan
{
  flag: "",
  indicatif: "+375"
},
// Belarus
{
  flag: "",
  indicatif: "+95"
},
// Myanmar
{
  flag: "",
  indicatif: "+591"
},
// Bolivia
{
  flag: "",
  indicatif: "+387"
},
// Bosnia and Herzegovina
{
  flag: "",
  indicatif: "+267"
},
// Botswana
{
  flag: "",
  indicatif: "+55"
},
// Brazil
{
  flag: "",
  indicatif: "+673"
},
// Brunei
{
  flag: "",
  indicatif: "+359"
},
// Bulgaria
{
  flag: "",
  indicatif: "+226"
},
// Burkina Faso
{
  flag: "",
  indicatif: "+257"
},
// Burundi
{
  flag: "",
  indicatif: "+855"
},
// Cambodia
{
  flag: "",
  indicatif: "+237"
},
// Cameroon
{
  flag: "",
  indicatif: "+1"
},
// Canada
{
  flag: "",
  indicatif: "+238"
},
// Cape Verde
{
  flag: "",
  indicatif: "+1345"
},
// Cayman Islands
{
  flag: "",
  indicatif: "+236"
},
// Central African Republic
{
  flag: "",
  indicatif: "+56"
},
// Chile
{
  flag: "",
  indicatif: "+86"
},
// China
{
  flag: "",
  indicatif: "+357"
},
// Cyprus
{
  flag: "",
  indicatif: "+57"
},
// Colombia
{
  flag: "",
  indicatif: "+269"
},
// Comoros
{
  flag: "",
  indicatif: "+243"
},
// Democratic Republic of the Congo
{
  flag: "",
  indicatif: "+242"
},
// Republic of the Congo
{
  flag: "",
  indicatif: "+682"
},
// Cook Islands
{
  flag: "",
  indicatif: "+850"
},
// North Korea
{
  flag: "",
  indicatif: "+82"
},
// South Korea
{
  flag: "",
  indicatif: "+506"
},
// Costa Rica
{
  flag: "",
  indicatif: "+225"
},
// Côte d'Ivoire
{
  flag: "",
  indicatif: "+385"
},
// Croatia
{
  flag: "",
  indicatif: "+53"
},
// Cuba
{
  flag: "",
  indicatif: "+599"
},
// Curaçao
{
  flag: "",
  indicatif: "+45"
},
// Denmark
{
  flag: "",
  indicatif: "+246"
},
// British Indian Ocean Territory
{
  flag: "",
  indicatif: "+253"
},
// Djibouti
{
  flag: "",
  indicatif: "+1767"
},
// Dominica
{
  flag: "",
  indicatif: "+20"
},
// Egypt
{
  flag: "",
  indicatif: "+971"
},
// United Arab Emirates
{
  flag: "",
  indicatif: "+593"
},
// Ecuador
{
  flag: "",
  indicatif: "+291"
},
// Eritrea
{
  flag: "",
  indicatif: "+34"
},
// Spain
{
  flag: "",
  indicatif: "+372"
},
// Estonia
{
  flag: "",
  indicatif: "+251"
},
// Ethiopia
{
  flag: "",
  indicatif: "+298"
},
// Faroe Islands
{
  flag: "",
  indicatif: "+679"
},
// Fiji
{
  flag: "",
  indicatif: "+358"
},
// Finland
{
  flag: "",
  indicatif: "+33"
},
// France
{
  flag: "",
  indicatif: "+241"
},
// Gabon
{
  flag: "",
  indicatif: "+220"
},
// The Gambia
{
  flag: "",
  indicatif: "+995"
},
// Georgia
{
  flag: "",
  indicatif: "+233"
},
// Ghana
{
  flag: "",
  indicatif: "+350"
},
// Gibraltar
{
  flag: "",
  indicatif: "+30"
},
// Greece
{
  flag: "",
  indicatif: "+1473"
},
// Grenada
{
  flag: "",
  indicatif: "+299"
},
// Greenland
{
  flag: "",
  indicatif: "+590"
},
// Guadeloupe
{
  flag: "",
  indicatif: "+1671"
},
// Guam
{
  flag: "",
  indicatif: "+502"
},
// Guatemala
{
  flag: "",
  indicatif: "+224"
},
// Guinea
{
  flag: "",
  indicatif: "+240"
},
// Equatorial Guinea
{
  flag: "",
  indicatif: "+245"
},
// Guinea-Bissau
{
  flag: "",
  indicatif: "+592"
},
// Guyana
{
  flag: "",
  indicatif: "+594"
},
// French Guiana
{
  flag: "",
  indicatif: "+509"
},
// Haiti
{
  flag: "",
  indicatif: "+504"
},
// Honduras
{
  flag: "",
  indicatif: "+852"
},
// Hong Kong
{
  flag: "",
  indicatif: "+36"
},
// Hungary
{
  flag: "",
  indicatif: "+91"
},
// India
{
  flag: "",
  indicatif: "+62"
},
// Indonesia
{
  flag: "",
  indicatif: "+964"
},
// Iraq
{
  flag: "",
  indicatif: "+98"
},
// Iran
{
  flag: "",
  indicatif: "+353"
},
// Ireland
{
  flag: "",
  indicatif: "+354"
},
// Iceland
{
  flag: "",
  indicatif: "+972"
},
// Israel
{
  flag: "",
  indicatif: "+39"
},
// Italy
{
  flag: "",
  indicatif: "+1876"
},
// Jamaica
{
  flag: "",
  indicatif: "+81"
},
// Japan
{
  flag: "",
  indicatif: "+962"
},
// Jordan
{
  flag: "",
  indicatif: "+7"
},
// Kazakhstan
{
  flag: "",
  indicatif: "+254"
},
// Kenya
{
  flag: "",
  indicatif: "+996"
},
// Kyrgyzstan
{
  flag: "",
  indicatif: "+686"
},
// Kiribati
{
  flag: "",
  indicatif: "+383"
},
// Kosovo
{
  flag: "",
  indicatif: "+965"
},
// Kuwait
{
  flag: "",
  indicatif: "+856"
},
// Laos
{
  flag: "",
  indicatif: "+266"
},
// Lesotho
{
  flag: "",
  indicatif: "+371"
},
// Latvia
{
  flag: "",
  indicatif: "+961"
},
// Lebanon
{
  flag: "",
  indicatif: "+231"
},
// Liberia
{
  flag: "",
  indicatif: "+218"
},
// Libya
{
  flag: "",
  indicatif: "+423"
},
// Liechtenstein
{
  flag: "",
  indicatif: "+370"
},
// Lithuania
{
  flag: "",
  indicatif: "+352"
},
// Luxembourg
{
  flag: "",
  indicatif: "+853"
},
// Macau
{
  flag: "",
  indicatif: "+389"
},
// North Macedonia
{
  flag: "",
  indicatif: "+261"
},
// Madagascar
{
  flag: "",
  indicatif: "+60"
},
// Malaysia
{
  flag: "",
  indicatif: "+265"
},
// Malawi
{
  flag: "",
  indicatif: "+960"
},
// Maldives
{
  flag: "",
  indicatif: "+223"
},
// Mali
{
  flag: "",
  indicatif: "+500"
},
// Falkland Islands
{
  flag: "",
  indicatif: "+356"
},
// Malta
{
  flag: "",
  indicatif: "+1670"
},
// Northern Mariana Islands
{
  flag: "",
  indicatif: "+212"
},
// Morocco
{
  flag: "",
  indicatif: "+692"
},
// Marshall Islands
{
  flag: "",
  indicatif: "+596"
},
// Martinique
{
  flag: "",
  indicatif: "+230"
},
// Mauritius
{
  flag: "",
  indicatif: "+222"
},
// Mauritania
{
  flag: "",
  indicatif: "+262"
},
// Mayotte/Reunion
{
  flag: "",
  indicatif: "+52"
},
// Mexico
{
  flag: "",
  indicatif: "+691"
},
// Micronesia
{
  flag: "",
  indicatif: "+373"
},
// Moldova
{
  flag: "",
  indicatif: "+377"
},
// Monaco
{
  flag: "",
  indicatif: "+976"
},
// Mongolia
{
  flag: "",
  indicatif: "+382"
},
// Montenegro
{
  flag: "",
  indicatif: "+1664"
},
// Montserrat
{
  flag: "",
  indicatif: "+258"
},
// Mozambique
{
  flag: "",
  indicatif: "+264"
},
// Namibia
{
  flag: "",
  indicatif: "+674"
},
// Nauru
{
  flag: "",
  indicatif: "+977"
},
// Nepal
{
  flag: "",
  indicatif: "+505"
},
// Nicaragua
{
  flag: "",
  indicatif: "+227"
},
// Niger
{
  flag: "",
  indicatif: "+234"
},
// Nigeria
{
  flag: "",
  indicatif: "+683"
},
// Niue
{
  flag: "",
  indicatif: "+47"
},
// Norway
{
  flag: "",
  indicatif: "+687"
},
// New Caledonia
{
  flag: "",
  indicatif: "+64"
},
// New Zealand
{
  flag: "",
  indicatif: "+968"
},
// Oman
{
  flag: "",
  indicatif: "+256"
},
// Uganda
{
  flag: "",
  indicatif: "+998"
},
// Uzbekistan
{
  flag: "",
  indicatif: "+92"
},
// Pakistan
{
  flag: "",
  indicatif: "+680"
},
// Palau
{
  flag: "",
  indicatif: "+970"
},
// Palestine
{
  flag: "",
  indicatif: "+507"
},
// Panama
{
  flag: "",
  indicatif: "+675"
},
// Papua New Guinea
{
  flag: "",
  indicatif: "+595"
},
// Paraguay
{
  flag: "",
  indicatif: "+31"
},
// Netherlands
{
  flag: "",
  indicatif: "+51"
},
// Peru
{
  flag: "",
  indicatif: "+63"
},
// Philippines
{
  flag: "",
  indicatif: "+48"
},
// Poland
{
  flag: "",
  indicatif: "+689"
},
// French Polynesia
{
  flag: "",
  indicatif: "+351"
},
// Portugal
{
  flag: "",
  indicatif: "+974"
},
// Qatar
{
  flag: "",
  indicatif: "+40"
},
// Romania
{
  flag: "",
  indicatif: "+44"
},
// United Kingdom
{
  flag: "",
  indicatif: "+250"
},
// Rwanda
{
  flag: "",
  indicatif: "+1869"
},
// Saint Kitts and Nevis
{
  flag: "",
  indicatif: "+290"
},
// Saint Helena
{
  flag: "",
  indicatif: "+1758"
},
// Saint Lucia
{
  flag: "",
  indicatif: "+378"
},
// San Marino
{
  flag: "",
  indicatif: "+508"
},
// Saint Pierre and Miquelon
{
  flag: "",
  indicatif: "+1784"
},
// Saint Vincent and the Grenadines
{
  flag: "",
  indicatif: "+677"
},
// Solomon Islands
{
  flag: "",
  indicatif: "+503"
},
// El Salvador
{
  flag: "",
  indicatif: "+685"
},
// Samoa
{
  flag: "",
  indicatif: "+1684"
},
// American Samoa
{
  flag: "",
  indicatif: "+239"
},
// São Tomé and Príncipe
{
  flag: "",
  indicatif: "+221"
},
// Senegal
{
  flag: "",
  indicatif: "+381"
},
// Serbia
{
  flag: "",
  indicatif: "+248"
},
// Seychelles
{
  flag: "",
  indicatif: "+232"
},
// Sierra Leone
{
  flag: "",
  indicatif: "+65"
},
// Singapore
{
  flag: "",
  indicatif: "+421"
},
// Slovakia
{
  flag: "",
  indicatif: "+386"
},
// Slovenia
{
  flag: "",
  indicatif: "+252"
},
// Somalia
{
  flag: "",
  indicatif: "+249"
},
// Sudan
{
  flag: "",
  indicatif: "+211"
},
// South Sudan
{
  flag: "",
  indicatif: "+94"
},
// Sri Lanka
{
  flag: "",
  indicatif: "+46"
},
// Sweden
{
  flag: "",
  indicatif: "+41"
},
// Switzerland
{
  flag: "",
  indicatif: "+597"
},
// Suriname
{
  flag: "",
  indicatif: "+268"
},
// Eswatini
{
  flag: "",
  indicatif: "+963"
},
// Syria
{
  flag: "",
  indicatif: "+992"
},
// Tajikistan
{
  flag: "",
  indicatif: "+255"
},
// Tanzania
{
  flag: "",
  indicatif: "+886"
},
// Taiwan
{
  flag: "",
  indicatif: "+235"
},
// Chad
{
  flag: "",
  indicatif: "+420"
},
// Czech Republic
{
  flag: "",
  indicatif: "+672"
},
// Christmas Island
{
  flag: "",
  indicatif: "+66"
},
// Thailand
{
  flag: "",
  indicatif: "+670"
},
// East Timor
{
  flag: "",
  indicatif: "+228"
},
// Togo
{
  flag: "",
  indicatif: "+690"
},
// Tokelau
{
  flag: "",
  indicatif: "+676"
},
// Tonga
{
  flag: "",
  indicatif: "+1868"
},
// Trinidad and Tobago
{
  flag: "",
  indicatif: "+216"
},
// Tunisia
{
  flag: "",
  indicatif: "+993"
},
// Turkmenistan
{
  flag: "",
  indicatif: "+1649"
},
// Turks and Caicos Islands
{
  flag: "",
  indicatif: "+90"
},
// Turkey
{
  flag: "",
  indicatif: "+688"
},
// Tuvalu
{
  flag: "",
  indicatif: "+380"
},
// Ukraine
{
  flag: "",
  indicatif: "+598"
},
// Uruguay
{
  flag: "",
  indicatif: "+678"
},
// Vanuatu
{
  flag: "",
  indicatif: "+58"
},
// Venezuela
{
  flag: "",
  indicatif: "+1340"
},
// U.S. Virgin Islands
{
  flag: "",
  indicatif: "+1284"
},
// British Virgin Islands
{
  flag: "",
  indicatif: "+84"
},
// Vietnam
{
  flag: "",
  indicatif: "+681"
},
// Wallis and Futuna
{
  flag: "",
  indicatif: "+967"
},
// Yemen
{
  flag: "",
  indicatif: "+260"
},
// Zambia
{
  flag: "",
  indicatif: "+263"
} // Zimbabwe
]);

/***/ })

}]);