"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_tables_annexes_RealT0_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/annexes/RealT0.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/annexes/RealT0.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/ContextMenu */ "./resources/js/components/shared/ContextMenu.vue");
/* harmony import */ var _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/ContextMenuItem */ "./resources/js/components/shared/ContextMenuItem.vue");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vueform/multiselect/dist/multiselect.vue2 */ "./node_modules/@vueform/multiselect/dist/multiselect.vue2.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }









;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "identification",
  display: "Identification",
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  created: function created() {
    var _this = this;
    _services_credit_service__WEBPACK_IMPORTED_MODULE_4__["default"].loadCAFCofina().then(function (res) {
      _this.cafData(res);
    })["catch"](function (err) {
      console.log(err);
    });
  },
  mounted: function mounted() {
    this.loadRetrieved();
  },
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
  data: function data() {
    var vm = this;
    return {
      retrieved: false,
      isSaving: false,
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_2__["default"].host,
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
      }],
      meta_parseable: {
        cred_pub_key: this.meta_data['cred_pub_key'],
        tb_name: this.tb_name
      },
      seen2: true,
      seen1: true,
      seen: true,
      formDataToBeWatched: {
        agence: "",
        canal_commercialisation: "",
        date_affectation: "",
        caf: "",
        date_demande: "",
        date_visite: "",
        filiale: "",
        matricule_client: "",
        raison_sociale: "",
        nom_emprunteur: "",
        adresse_professionnel_principal: "",
        forme_juridique: "",
        secteur_activite: "",
        secteur_activite_edane: "",
        sanity_check: "0%",
        ca_n1: 0,
        ca_n2: 0,
        rn_n2: 0,
        rn_n1: 0,
        montant_sollicite: 0,
        montant_depot_garantie: 0,
        valeur_surete_immobiliere: 0,
        valeur_surete_mobiliere: 0,
        experience_secteur: 0,
        moralite_dirigeant: "",
        historique_paiement_cofina: "",
        historique_paiement_confrere: "",
        commentaires_note_sanity_check: "",
        notes: [],
        cofiscore: null,
        note_interne: null,
        commentaire_note: null
      },
      dontSave: false,
      list_sanity_check: ["5%", "4%", "3%", "2%", "1%", "0%", "-1%", "-2%", "-3%", "-4%", "-5%"],
      list_secteurs: ["Matières premières agricoles", "Matières premières minières et énergétiques", "Immobilier résidentiel", "Véhicules de tourisme et pièces détachées", "Mobilier, ameublement, électroménager et multimédia", "Textiles et accessoires", "Tourisme, restauration et loisirs", "Agroalimentaire et produits de consommation courante", "Santé et services à la personne", "Energie (électricité et produits pétroliers raffinés)", "Education & Formation", "Transport de personnes", "Matériaux de construction & Fournitures industrielles", "Technologie et Services industriels", "Infrastructures et Immobilier professionnel", "Véhicules industriels et pièces détachées", "Services financiers (Banques, Assurances, Invest immo & fin.)", "TelCo et services publics (environnement,...)", "Administrations publiques"],
      listingNote: true,
      scoringKeys: ["secteur_activite", "sanity_check", "ca_n1", "ca_n2", "rn_n2", "rn_n1", "montant_sollicite", "montant_depot_garantie", "valeur_surete_immobiliere", "valeur_surete_mobiliere", "experience_secteur", "moralite_dirigeant", "historique_paiement_cofina", "historique_paiement_confrere"]
    };
  },
  methods: {
    saveCofiscore: function saveCofiscore() {
      var _this$meta_data,
        _this2 = this;
      this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/save-cofiscore-table/", {
        cred_pub_key: (_this$meta_data = this.meta_data) === null || _this$meta_data === void 0 ? void 0 : _this$meta_data.cred_pub_key,
        value: this.formDataToBeWatched
      }).then(function (res) {
        if (_this2.allowScoring() === true) {
          _this2.launchScoring();
        }
      })["catch"](function (err) {
        console.error(err);
      });
    },
    exportData: function exportData() {
      EventBus.$emit('load-from-cofiscore', this.formDataToBeWatched);
    },
    importData: function importData() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this3$meta_data$doss, _this3$meta_data;
        var applied_templ_name, tbArrays, tb0, clients;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              applied_templ_name = (_this3$meta_data$doss = _this3.meta_data["dossier_credit"]) === null || _this3$meta_data$doss === void 0 ? void 0 : _this3$meta_data$doss.applied_templ_name;
              tbArrays = _this3.determineCredPubTables(applied_templ_name); // console.log("applied_templ_name == ",applied_templ_name)
              // console.log("tbArrays == ",tbArrays)
              tb0 = (_this3$meta_data = _this3.meta_data) === null || _this3$meta_data === void 0 || (_this3$meta_data = _this3$meta_data.dossier_credit) === null || _this3$meta_data === void 0 ? void 0 : _this3$meta_data[tbArrays[0]];
              if (!tb0) {
                _context.next = 12;
                break;
              }
              if (tb0 !== null && tb0 !== void 0 && tb0.experience_secteur) _this3.formDataToBeWatched.experience_secteur = tb0.experience_secteur;
              if (tb0 !== null && tb0 !== void 0 && tb0.montant_sollicite) _this3.formDataToBeWatched.montant_sollicite = tb0.montant_sollicite;
              if (tb0 !== null && tb0 !== void 0 && tb0.denomination_client) _this3.formDataToBeWatched.raison_sociale = tb0.denomination_client;
              if (!(tb0 !== null && tb0 !== void 0 && tb0.matricule_client)) {
                _context.next = 12;
                break;
              }
              _context.next = 10;
              return _this3.fetchClientsAll(tb0 === null || tb0 === void 0 ? void 0 : tb0.matricule_client);
            case 10:
              clients = _context.sent;
              _this3.formDataToBeWatched.matricule_client = clients.filter(function (el) {
                return el.nomcli == tb0.denomination_client;
              })[0];
            case 12:
              _this3.$toasted.show("Données de T0 importées dans cofiscore avec succès.");
            case 13:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    cafData: function cafData(res) {
      this.cafInfo = res.data;
      this.formDataToBeWatched.filiale = this.cafInfo.codecaf.replace(/[0-9]/g, "");
      this.formDataToBeWatched.agence = this.cafInfo.agence.replaceAll("_", " ");
      this.formDataToBeWatched.agence = this.formDataToBeWatched.agence.replace(this.formDataToBeWatched.filiale, "");
      this.formDataToBeWatched.caf = this.cafInfo.nom + " (" + this.cafInfo.codecaf + ")";
    },
    loadRetrieved: function loadRetrieved() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _this4$meta_data, _this4$meta_data$doss, _this4$meta_data$doss3;
        var format_date, nowdate, _this4$meta_data$doss2;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              // this.dontSave = true

              _this4.$axios.post(_this4.ebapisHost + "creditbuilder/api/v1/get-cofiscore-table/", {
                cred_pub_key: (_this4$meta_data = _this4.meta_data) === null || _this4$meta_data === void 0 ? void 0 : _this4$meta_data.cred_pub_key
              }).then(function (res) {
                var _res$data, _res$data2;
                console.log('%ccofiscore: ', 'font-size: 1.3rem; color: #2a2', (_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.cred_pub_tb_000);
                var cofiscore_from_db = (_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.cred_pub_tb_000;
                if (cofiscore_from_db) {
                  _this4.formDataToBeWatched = cofiscore_from_db;
                }
                _this4.retrieved = true;
              })["catch"](function (err) {
                console.error(err);
              });

              // let lentb = this.meta_data['dossier_credit']['tbs_in_use'];
              // let createdKey = this.tb_name
              // let createdKeyArr = createdKey.split("tb");
              // createdKey = "cred_pub_tb_" + createdKeyArr[1]
              // this.gl_key = createdKey
              format_date = new Date(_this4.meta_data['dossier_credit'].created_at);
              nowdate = new Date();
              format_date = _this4.formatDateForInput(format_date);
              _this4.maxdate = _this4.formatDateForInput(nowdate);

              // le dossier vient du central file recorder
              // if (this.meta_data['dossier_credit']?.doss_central_file_recorder != undefined) {
              //     const matricule_client = await this.fetchClientsAll(this.meta_data['dossier_credit']?.doss_central_file_recorder?.client?.matcli)
              //     this.formDataToBeWatched.matricule_client = matricule_client?.[0]
              //     this.formDataToBeWatched.montant_sollicite = this.meta_data['dossier_credit']?.doss_central_file_recorder?.montant?.toString().replace(/\s/g, '')
              // }
              // if (lentb.length > 0) {
              //     console.log(`%ccofiscore:`,"font-weight: bold; color: #2a2", this.meta_data['dossier_credit'][createdKey])

              //     if (this.meta_data['dossier_credit'][createdKey] != undefined) {
              //         const tb_data = await this.meta_data['dossier_credit'][createdKey]
              //         this.formDataToBeWatched = tb_data
              //     }

              // if (this.meta_data['dossier_credit']?.cred_pub_tb_00) {
              //     const fichSign = this.meta_data['dossier_credit'].cred_pub_tb_00
              //     this.formDataToBeWatched.experience_secteur = Number(fichSign?.experience_secteur)
              //     this.formDataToBeWatched.montant_sollicite = fichSign?.montant_sollicite

              //     if (fichSign.matricule_client != this.formDataToBeWatched.matricule_client?.matcli) {
              //         const matricule_client = await this.fetchClientsAll(fichSign?.matricule_client)
              //         this.formDataToBeWatched.matricule_client = matricule_client[0]
              //         this.formDataToBeWatched.raison_sociale = matricule_client?.[0]?.nomcli
              //     }

              // }
              // }

              if (((_this4$meta_data$doss = _this4.meta_data['dossier_credit']) === null || _this4$meta_data$doss === void 0 ? void 0 : _this4$meta_data$doss.file_ownership_record.length) != 0) {
                _this4.formDataToBeWatched.date_affectation = (_this4$meta_data$doss2 = _this4.meta_data['dossier_credit']) === null || _this4$meta_data$doss2 === void 0 || (_this4$meta_data$doss2 = _this4$meta_data$doss2.file_ownership_record) === null || _this4$meta_data$doss2 === void 0 ? void 0 : _this4$meta_data$doss2.date_affectation;
              } else {
                _this4.formDataToBeWatched.date_affectation = format_date;
              }
              _this4.formDataToBeWatched.date_demande = format_date;
              _this4.dontSave = false;

              // Close table by default
              _this4.defaultRetract(true, (_this4$meta_data$doss3 = _this4.meta_data["dossier_credit"]) === null || _this4$meta_data$doss3 === void 0 ? void 0 : _this4$meta_data$doss3.applied_templ_id);
            case 9:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    formatDateForInput: function formatDateForInput(data) {
      var day = data.getDate() <= 9 ? "0" + data.getDate() : data.getDate();
      return data.getFullYear() + "-" + (data.getMonth() + 1) + "-" + day;
    },
    allowScoring: function allowScoring() {
      for (var i = 0; i < this.scoringKeys.length; i++) {
        var key = this.scoringKeys[i];
        if (this.formDataToBeWatched[key] === "" || this.formDataToBeWatched[key] < 0) {
          return false;
        }
      }
      return true;
    },
    launchScoring: function launchScoring() {
      var _this$formDataToBeWat;
      var dataToLoad = _objectSpread({}, this.formDataToBeWatched);
      dataToLoad.matricule_client = (_this$formDataToBeWat = this.formDataToBeWatched.matricule_client) === null || _this$formDataToBeWat === void 0 ? void 0 : _this$formDataToBeWat.matcli;
      this.$axios.post(this.ebapisHost + 'cofiscore/api/v1/launchscorer/', {
        user: this.authcheckUsr,
        meta_parseable: this.meta_parseable,
        filledData: dataToLoad
      }).then(function (response) {
        // this.$emit('autosaving')
        var tbFetcheData = response.data;
        if (tbFetcheData.is_success) {
          delete tbFetcheData.is_success;
        }
        if (tbFetcheData.cofiscore !== this.formDataToBeWatched.cofiscore) {
          this.formDataToBeWatched.cofiscore = response.data['cofiscore'];
          this.formDataToBeWatched.note_interne = response.data['note_interne'];
          this.formDataToBeWatched.commentaire_note = response.data['commentaire_note'];

          // this.formDataToBeWatched = { ...this.formDataToBeWatched, ...tbFetcheData}
          // this.$set(this, "formDataToBeWatched", {...this.formDataToBeWatched, ...tbFetcheData})
          this.exportData();
        }
      }.bind(this))["catch"](function (error) {
        this.$Progress.finish();
        console.log(error);
      }.bind(this));
    },
    send2Backend: function send2Backend(res, newVal) {
      this.authcheck = true;
      this.authcheckUsr = res.data;
      this.authcheckStatus = res.status;
      if (this.authcheckStatus === 401) {
        // window.location.href = "/login"
      }
      if (this.authcheck === true) {
        this.$emit('autosaving');
        this.$axios.post(this.ebapisHost + 'creditbuilder/api/v1/autosaving/', {
          user: this.authcheckUsr,
          meta_parseable: this.meta_parseable,
          filledData: newVal
        }).then(function (response) {
          // this.$Progress.finish();

          this.$emit('autosaving');
          this.isSaving = false;
          // console.log(response)

          var tbFetcheData = response.data;
          if (this.allowScoring() === true) {
            this.launchScoring();
          }
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
    onSlctMatCli: function onSlctMatCli(obj) {
      // console.log("%c Matricule obj:", "font-size: 25px", obj)
      this.formDataToBeWatched.matricule_client = Object.assign({}, obj);
      this.formDataToBeWatched.raison_sociale = obj.nomcli;
      this.formDataToBeWatched.nom_emprunteur = obj.nomcli;
      var a = obj.matcli;
      var b = this.formDataToBeWatched.montant_sollicite;
      // EventBus.$emit("recompute-encours", { matricule_client: a, montant_sollicite: b });
      // EventBus.$emit("load-from-cofiscore", this.formDataToBeWatched)
    },
    openNotesModal: function openNotesModal() {
      var listing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.listingNote = listing;
      this.$modal.show(this.tb_name);
    },
    retract: function retract(variable) {
      this[variable] = !this[variable];
      // tableClosedOrOpened
      if (variable === "seen") {
        var a = {
          "tb_name": this.tb_name + this.meta_data['cred_pub_key'],
          "status": this[variable]
        };
        EventBus.$emit("savedclosed-table", a);
      }
    },
    // add defaultRetract
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
    formDataVars: function formDataVars(event) {
      this.formDataToBeWatched[event[0]] = event[1];
      // EventBus.$emit("load-from-cofiscore", this.formDataToBeWatched)
    },
    handleInput: function handleInput(evt) {
      // EventBus.$emit("load-from-cofiscore", this.formDataToBeWatched)
    }
  },
  watch: {
    formDataToBeWatched: {
      handler: function handler(newVal, oldVal) {
        if (this.retrieved) {
          console.log("will save now ....");
          this.saveCofiscore();
        } else {
          console.log("won't save now because you didn't modified anything ... ");
        }
      },
      deep: true,
      immediate: false
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/annexes/RealT0.vue?vue&type=template&id=840a2714&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/annexes/RealT0.vue?vue&type=template&id=840a2714&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var render = function render() {
  var _vm$meta_parseable, _vm$formDataToBeWatch;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    on: {
      contextmenu: function contextmenu($event) {
        return _vm.$refs.menu.open($event, _vm.tb_name);
      }
    }
  }, [_c("div", {
    staticClass: "row bg-light",
    staticStyle: {
      width: "100%",
      height: "100%"
    }
  }, [_c("ContextMenu", {
    ref: "menu",
    attrs: {
      cred_pub_key: (_vm$meta_parseable = _vm.meta_parseable) === null || _vm$meta_parseable === void 0 ? void 0 : _vm$meta_parseable.cred_pub_key,
      id: _vm.tb_name,
      contextList: _vm.contextList
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "card card-width-height px-2"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc"
  }, [_c("h3", {
    ref: "topdiv",
    staticClass: "head",
    attrs: {
      id: "tb0-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                        " + _vm._s(_vm.tb_display_name) + " : Identification et notation interne\n                    ")]), _vm._v(" "), _c("div", {
    staticClass: "col-auto"
  }, [((_vm$formDataToBeWatch = _vm.formDataToBeWatched.notes) === null || _vm$formDataToBeWatch === void 0 ? void 0 : _vm$formDataToBeWatch.length) > 0 ? _c("div", {
    staticStyle: {
      display: "inline-block",
      position: "relative"
    }
  }, [_c("button", {
    staticClass: "btn position-relative",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.openNotesModal(true);
      }
    }
  }, [_c("i", {
    staticClass: "icofont icofont-comment text-white",
    staticStyle: {
      "font-size": "12px"
    },
    attrs: {
      role: "button"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "badge-sm pb-3"
  }, [_c("span", [_vm._v(" " + _vm._s(_vm.formDataToBeWatched.notes.length) + " ")])])])]) : _vm._e(), _vm._v(" "), _vm.seen ? _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    },
    on: {
      click: function click($event) {
        return _vm.retract("seen");
      }
    }
  }) : _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    },
    on: {
      click: function click($event) {
        return _vm.retract("seen");
      }
    }
  })], 1)])])]), _vm._v(" "), _vm.formDataToBeWatched.cofiscore != null ? _c("div", {
    staticClass: "container-fluid"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-6 col-md-6 col-lg-6"
  }, [_c("span", {
    staticStyle: {
      color: "#7f8c8d",
      "font-size": "18px",
      "font-weight": "bold"
    }
  }, [_vm._v("SCORE GLOBALE : ")]), _vm._v(" "), _c("span", {
    staticStyle: {
      color: "#dc0030",
      "font-size": "36px",
      "font-weight": "bold"
    }
  }, [_vm._v(_vm._s(_vm.formDataToBeWatched.cofiscore))])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-6 col-md-6 col-lg-6"
  }, [_c("span", {
    staticStyle: {
      color: "#7f8c8d",
      "font-size": "18px",
      "font-weight": "bold"
    }
  }, [_vm._v("NOTE INTERNE : ")]), _vm._v(" "), _c("span", {
    staticStyle: {
      color: "#dc0030",
      "font-size": "36px",
      "font-weight": "bold"
    }
  }, [_vm._v(_vm._s(_vm.formDataToBeWatched.note_interne))]), _vm._v(" "), _c("span", {
    staticStyle: {
      color: "#7f8c8d",
      "font-size": "12px"
    }
  }, [_vm._v("(" + _vm._s(_vm.formDataToBeWatched.commentaire_note) + "\n                        )")])])]), _vm._v(" "), _c("hr")]) : _vm._e(), _vm._v(" "), _vm.seen === true ? _c("div", {
    staticClass: "row p-0"
  }, [_c("div", {
    staticClass: "row justify-content-end py-2"
  }, [_c("div", {
    staticClass: "col-auto"
  }, [_c("div", {
    staticClass: "btn-group btn-group-sm",
    attrs: {
      role: "group",
      "aria-label": "..."
    }
  }, [_c("button", {
    staticClass: "btn-lighter btn",
    attrs: {
      title: "Charger les données de t0 dans cofiscore"
    },
    on: {
      click: _vm.importData
    }
  }, [_c("i", {
    staticClass: "icofont-download me-2"
  }), _vm._v(" Importer depuis T0")]), _vm._v(" "), _c("button", {
    staticClass: "btn-lighter btn",
    attrs: {
      title: "Exporter la note du cofiscore dans T0"
    },
    on: {
      click: _vm.exportData
    }
  }, [_c("i", {
    staticClass: "icofont-upload-alt me-2"
  }), _vm._v(" Exporter la note dans T0")])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 p-0 position-relative"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("form", {
    staticClass: "form row g-2"
  }, [_c("div", {
    staticClass: "col-md-6 form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Filiale")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.filiale,
      expression: "formDataToBeWatched.filiale"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.formDataToBeWatched.filiale
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "filiale", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("N° matricule client")]), _vm._v(" "), _c("Multiselect", {
    attrs: {
      searchable: true,
      "resolve-on-load": false,
      delay: 0,
      "min-chars": 1,
      trackBy: "slug",
      label: "nomcli",
      object: true,
      "value-prop": "matcli",
      classes: {
        optionPointed: "text-gray-800 bg-gray-100"
      },
      options: function () {
        var _options = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(query) {
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _vm.fetchClientsAll(query);
              case 2:
                return _context.abrupt("return", _context.sent);
              case 3:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        function options(_x) {
          return _options.apply(this, arguments);
        }
        return options;
      }()
    },
    on: {
      change: _vm.onSlctMatCli
    },
    scopedSlots: _vm._u([{
      key: "option",
      fn: function fn(_ref) {
        var option = _ref.option,
          isPointed = _ref.isPointed;
        return [_c("p", {
          staticClass: "multiselect-option"
        }, [_vm._v(_vm._s(option.nomcli) + " - " + _vm._s(option.matcli))])];
      }
    }, {
      key: "singlelabel",
      fn: function fn(_ref2) {
        var value = _ref2.value;
        return [_c("p", {
          staticClass: "multiselect-single-label"
        }, [_vm._v(_vm._s(value.matcli))])];
      }
    }], null, false, 443915000),
    model: {
      value: _vm.formDataToBeWatched.matricule_client,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "matricule_client", $$v);
      },
      expression: "formDataToBeWatched.matricule_client"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Raison sociale")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.raison_sociale,
      expression: "formDataToBeWatched.raison_sociale"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.formDataToBeWatched.raison_sociale
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "raison_sociale", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 form-group"
  }, [_vm._m(0), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.secteur_activite,
      expression: "formDataToBeWatched.secteur_activite"
    }],
    staticClass: "form-select single-select",
    attrs: {
      id: "secteur_activite"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "secteur_activite", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      selected: "",
      disabled: "",
      hidden: ""
    }
  }, [_vm._v("---")]), _vm._v(" "), _vm._l(_vm.list_secteurs, function (secteur) {
    return _c("option", {
      domProps: {
        value: secteur
      }
    }, [_vm._v(_vm._s(secteur))]);
  })], 2)])])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        return _vm.retract("seen1");
      }
    }
  }, [_c("h6", {
    "class": "subdiv" + this.tb_name,
    attrs: {
      id: "performances-financières"
    }
  }, [_vm._v("\n                            Performances financières\n                            "), _vm.seen1 ? _c("i", {
    staticClass: "icofont icofont-rounded-up",
    staticStyle: {
      "float": "right"
    }
  }) : _c("i", {
    staticClass: "icofont icofont-rounded-down",
    staticStyle: {
      "float": "right"
    }
  })])]), _vm._v(" "), _vm.seen1 === true ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    attrs: {
      id: "div_autres_surete"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(1), _vm._v(" "), _c("currency-input", {
    attrs: {
      value: _vm.formDataToBeWatched.ca_n1,
      id: "ca_n1"
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(2), _vm._v(" "), _c("currency-input", {
    attrs: {
      value: _vm.formDataToBeWatched.ca_n2,
      id: "ca_n2"
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(3), _vm._v(" "), _c("currency-input", {
    attrs: {
      value: _vm.formDataToBeWatched.rn_n1,
      id: "rn_n1"
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(4), _vm._v(" "), _c("currency-input", {
    attrs: {
      value: _vm.formDataToBeWatched.rn_n2,
      id: "rn_n2"
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1)])])]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        return _vm.retract("seen2");
      }
    }
  }, [_c("h6", {
    "class": "subdiv" + this.tb_name,
    attrs: {
      id: "evaluation-des-risques"
    }
  }, [_vm._v("\n                            Evaluation des risques\n                            "), _vm.seen2 ? _c("i", {
    staticClass: "icofont icofont-rounded-up",
    staticStyle: {
      "float": "right"
    }
  }) : _c("i", {
    staticClass: "icofont icofont-rounded-down",
    staticStyle: {
      "float": "right"
    }
  })])]), _vm._v(" "), _vm.seen2 === true ? _c("div", {
    staticClass: "card-body"
  }, [_vm._m(5), _vm._v(" "), _c("div", {
    attrs: {
      id: "div_autres_surete"
    }
  }, [_c("div", {
    staticClass: "row g-1 pb-2 mt-2"
  }, [_c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(6), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.experience_secteur,
      expression: "formDataToBeWatched.experience_secteur"
    }],
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "number"
    },
    domProps: {
      value: _vm.formDataToBeWatched.experience_secteur
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "experience_secteur", $event.target.value);
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(7), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.moralite_dirigeant,
      expression: "formDataToBeWatched.moralite_dirigeant"
    }],
    staticClass: "form-select single-select",
    attrs: {
      id: "moralite_dirigeant"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "moralite_dirigeant", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
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
      value: "Bonne réputation professionnelle"
    }
  }, [_vm._v("Bonne réputation\n                                            professionnelle")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Aucune information disponible"
    }
  }, [_vm._v("Aucune information disponible\n                                        ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Historique défavorable"
    }
  }, [_vm._v("Historique défavorable")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(8), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.historique_paiement_cofina,
      expression: "formDataToBeWatched.historique_paiement_cofina"
    }],
    staticClass: "form-select single-select",
    attrs: {
      id: "historique_paiement_cofina"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "historique_paiement_cofina", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
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
      value: "Aucun incident"
    }
  }, [_vm._v("Aucun incident")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Incidents mineurs"
    }
  }, [_vm._v("Incidents mineurs")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Incidents majeurs"
    }
  }, [_vm._v("Incidents majeurs")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(9), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.historique_paiement_confrere,
      expression: "formDataToBeWatched.historique_paiement_confrere"
    }],
    staticClass: "form-select single-select",
    attrs: {
      id: "historique_paiement_confrere"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "historique_paiement_confrere", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
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
      value: "Aucun incident"
    }
  }, [_vm._v("Aucun incident")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Incidents mineurs"
    }
  }, [_vm._v("Incidents mineurs")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Aucune information disponible"
    }
  }, [_vm._v("Aucune information disponible\n                                        ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Incidents majeurs"
    }
  }, [_vm._v("Incidents majeurs")])])])])]), _vm._v(" "), _c("hr"), _vm._v(" "), _vm._m(10), _vm._v(" "), _c("div", {
    attrs: {
      id: "div_autres_surete"
    }
  }, [_c("div", {
    staticClass: "row g-1 pb-2 mt-2"
  }, [_c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(11), _vm._v(" "), _c("currency-input", {
    attrs: {
      value: _vm.formDataToBeWatched.montant_sollicite,
      id: "montant_sollicite"
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(12), _vm._v(" "), _c("currency-input", {
    attrs: {
      value: _vm.formDataToBeWatched.montant_depot_garantie,
      id: "montant_depot_garantie"
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(13), _vm._v(" "), _c("currency-input", {
    attrs: {
      value: _vm.formDataToBeWatched.valeur_surete_immobiliere,
      id: "valeur_surete_immobiliere"
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(14), _vm._v(" "), _c("currency-input", {
    attrs: {
      value: _vm.formDataToBeWatched.valeur_surete_mobiliere,
      id: "valeur_surete_mobiliere"
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 mt-3 mb-3"
  }, [_c("div", {
    staticClass: "col-6"
  }, [_vm._m(15), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.sanity_check,
      expression: "formDataToBeWatched.sanity_check"
    }],
    staticClass: "form-select single-select",
    attrs: {
      id: "sanity_check"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "sanity_check", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      selected: "",
      disabled: "",
      hidden: ""
    }
  }, [_vm._v("---")]), _vm._v(" "), _vm._l(_vm.list_sanity_check, function (lsanity_check) {
    return _c("option", {
      key: lsanity_check,
      domProps: {
        value: lsanity_check
      }
    }, [_vm._v("\n                                        " + _vm._s(lsanity_check))]);
  })], 2)]), _vm._v(" "), _c("br"), _vm._v(" "), _c("h6", [_vm._v("\n                                Commentaires sur la note du sanity check\n                            ")]), _vm._v(" "), _c("vue-editor", {
    attrs: {
      id: "commentaires_note_sanity_check"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.commentaires_note_sanity_check,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "commentaires_note_sanity_check", $$v);
      },
      expression: "formDataToBeWatched.commentaires_note_sanity_check"
    }
  })], 1)]) : _vm._e()])])]) : _vm._e()]), _vm._v(" "), _c("note-modal", {
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
      "for": ""
    }
  }, [_vm._v("\n                                Secteur d'activité (Cofina)"), _c("span", {
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
      "for": ""
    }
  }, [_vm._v("\n                                        Chiffres d'affaires année N-1"), _c("span", {
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
      "for": ""
    }
  }, [_vm._v("\n                                        Chiffres d'affaires année N-2"), _c("span", {
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
      "for": ""
    }
  }, [_vm._v("\n                                        Résultat net année N-1"), _c("span", {
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
      "for": ""
    }
  }, [_vm._v("\n                                        Résultat net année N-2"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", [_c("b", [_vm._v(" Risques d'exploitation et expérience de paiement")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Expérience dans le secteur (Nombre d'années)\n                                        "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Moralité des dirigeants\n                                        "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Historique de paiement chez COFINA\n                                        "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Historique de paiement chez les confrères\n                                        "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", [_c("b", [_vm._v(" Risques de financement")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Montant sollicité\n                                        "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Montant du dépot de garanties\n                                        "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Valeur des sûretés immobilières (Hypothèque)\n                                        "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Valeur des sûretés mobilières (Gage, Nantissement)\n                                        "), _c("span", {
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
      "for": ""
    }
  }, [_vm._v("\n                                    Sanity check"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/annexes/RealT0.vue?vue&type=style&index=0&id=840a2714&lang=css&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/annexes/RealT0.vue?vue&type=style&index=0&id=840a2714&lang=css&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.btn-lighter[data-v-840a2714] {\r\n    background: #34495e29;\r\n    border: 2px solid #34495e29;\r\n    color: #34495e;\r\n    transition: all .3s;\n}\n.btn-lighter[data-v-840a2714]:hover {\r\n    background: #34495e;\r\n    border: 2px solid #34495e;\r\n    color: white;\r\n    transition: all .3s;\n}\ninput[data-v-840a2714] {\r\n    /*border: 1px solid red;*/\n}\n*[data-v-840a2714] {\r\n\r\n    font-family: \"Google sans\";\n}\nlabel[data-v-840a2714] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ninput[data-v-840a2714],\r\nselect[data-v-840a2714] {\r\n    height: 35px;\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n.card-width-height[data-v-840a2714] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-840a2714] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-840a2714] {\r\n    background-color: #57606f;\n}\n.relook-header[data-v-840a2714] {\r\n    color: #fff;\r\n    background-color: #7f8c8d;\r\n    padding: 5px;\r\n    border: none;\n}\r\n\r\n/* Ajouter note */\n.badge-sm[data-v-840a2714] {\r\n    display: inline-block;\r\n    width: 20px;\r\n    height: 20px;\r\n    background: rgba(255, 0, 0, 0.682);\r\n    color: white;\r\n    font-size: 13px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -10%;\r\n    left: 60%;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/annexes/RealT0.vue?vue&type=style&index=0&id=840a2714&lang=css&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/annexes/RealT0.vue?vue&type=style&index=0&id=840a2714&lang=css&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RealT0_vue_vue_type_style_index_0_id_840a2714_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RealT0.vue?vue&type=style&index=0&id=840a2714&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/annexes/RealT0.vue?vue&type=style&index=0&id=840a2714&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RealT0_vue_vue_type_style_index_0_id_840a2714_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RealT0_vue_vue_type_style_index_0_id_840a2714_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/tables/annexes/RealT0.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/tables/annexes/RealT0.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RealT0_vue_vue_type_template_id_840a2714_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RealT0.vue?vue&type=template&id=840a2714&scoped=true */ "./resources/js/components/tables/annexes/RealT0.vue?vue&type=template&id=840a2714&scoped=true");
/* harmony import */ var _RealT0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RealT0.vue?vue&type=script&lang=js */ "./resources/js/components/tables/annexes/RealT0.vue?vue&type=script&lang=js");
/* harmony import */ var _RealT0_vue_vue_type_style_index_0_id_840a2714_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RealT0.vue?vue&type=style&index=0&id=840a2714&lang=css&scoped=true */ "./resources/js/components/tables/annexes/RealT0.vue?vue&type=style&index=0&id=840a2714&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RealT0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _RealT0_vue_vue_type_template_id_840a2714_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _RealT0_vue_vue_type_template_id_840a2714_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "840a2714",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/tables/annexes/RealT0.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/tables/annexes/RealT0.vue?vue&type=script&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/tables/annexes/RealT0.vue?vue&type=script&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RealT0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RealT0.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/annexes/RealT0.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RealT0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/tables/annexes/RealT0.vue?vue&type=style&index=0&id=840a2714&lang=css&scoped=true":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/tables/annexes/RealT0.vue?vue&type=style&index=0&id=840a2714&lang=css&scoped=true ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RealT0_vue_vue_type_style_index_0_id_840a2714_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RealT0.vue?vue&type=style&index=0&id=840a2714&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/annexes/RealT0.vue?vue&type=style&index=0&id=840a2714&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/tables/annexes/RealT0.vue?vue&type=template&id=840a2714&scoped=true":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/tables/annexes/RealT0.vue?vue&type=template&id=840a2714&scoped=true ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RealT0_vue_vue_type_template_id_840a2714_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RealT0_vue_vue_type_template_id_840a2714_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RealT0_vue_vue_type_template_id_840a2714_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RealT0.vue?vue&type=template&id=840a2714&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/annexes/RealT0.vue?vue&type=template&id=840a2714&scoped=true");


/***/ })

}]);